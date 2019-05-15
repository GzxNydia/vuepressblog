# 使用微信云开发

## 官方介绍文档

开发者可以使用云开发开发微信小程序、小游戏，无需搭建服务器，即可使用云端能力。云开发为开发者提供完整的云端支持，弱化后端和运维概念，无需搭建服务器，使用平台提供的 API 进行核心业务开发，即可实现快速上线和迭代，同时这一能力，同开发者已经使用的云服务相互兼容，并不互斥。

云开发目前提供三大基础能力支持：

- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写自身业务逻辑代码

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 数据库
- 存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理

大致看了一下微信的云开发感觉挺有意思的，正好现在比较闲，所以就想着使用云开发来开发一些demo，熟悉一下微信的云开发，经过考虑决定开发一个类似图片分享的demo 能够很好的 覆盖云开发所涉及到的知识点。

## 实现的功能

- 用户登录后将用户信息保存在云数据库，方便下次读取
- 发布话题成功后将数据保存在云数据库，在首页列表页面可读取展示
- 获取云数据库列表展示
- 本地图片获取和预览等
- 用户可以选择按时间或者按热度排序(热度即为点赞数量的高低)

![](<https://6d61-maxgan-0970c9-1259038774.tcb.qcloud.la/yun.gif?sign=9b1d290c8d5adf09d15394bd57f0cf2c&t=1557904173>)

## 具体实现步骤

### 创建一个新的云开发模板

![](https://6d61-maxgan-0970c9-1259038774.tcb.qcloud.la/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190515151425.png?sign=a6d94cb2949883cb16824975ba7de00b&t=1557904540)

首先我们创建一个微信云开发快速启用模板 填写对应的appid就可以新建后就可以了,但是有的时候我们想在原有的小程序上建立云开发怎么办，也是可以实现的，首先我们进入我们普通的项目，点击左上方的云开发，同意授权后就行。我们需要使用云函数，那么需要在根目录单独创建一个cloudFunctions文件夹，然后进入project.config.json文件夹配置一下

```javascript
	"cloudfunctionRoot": "cloudfunctions/",
```

加入这一行代码即可 

具体详细步骤我们可以参考官方文档 [云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

### 开始撸代码

开始开发时我们要知道我们需要什么数据，我们做的是一个图片分享网站，那么我们就需要创建一个piclist表 在云开发中我们需要把一些数据处理放在云函数中，云函数具有很高的权限，再后期开发中可以避免一些不必要的麻烦

#### 图片上传到数据库

 云开发有一个存储管理的地方我们可以上传我们的图片到云上，那么我们如何使用代码来实现呢

```javascript
 choosePic(){
    let that = this;
    wx.chooseImage({
      count:1,
      // sizeType: "original",
      success: function(res) {
        console.log(res);
        let imgUrl = res.tempFilePaths[0];
       	that.setData({
            imgUrl:imgUrl
        })
  
        })
      },
    })
  },
  wx.cloud.uploadFile({
          cloudPath: 123.png, //上传头像地址记住不能重名 后期可以自己封装一个不重名方法
          filePath: res.tempFilePath,//图片临时路径
          success: function (res) {
            console.log("图片上传",res);
            let curPicID = res.fileID;
            console.log(curPicID)
         },
       	fail(res) {
            utils.failFn();
          }
    })
  },
```

执行函数后我们就可以再控制台上看见打印出来一个fileId 我们进入存储管理即可看到我们选择的图片，那么我们再如何把图片上传到我们的数据库呢。我们就需要创建一个云函数来操控数据库

我们再cloudfunctios内创建一个名为addPic的云函数再index.js添加代码

```javascript
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init();
let db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  let { picID, labelStr, userInfo,nickName} = event;
  try {
    return await db.collection("picList").add({
      data: {
        "openId": userInfo.openId,
        "picID": picID,
        "labelStr": labelStr,
        "thumb":0,
        "nickName": nickName,
        "isLove":0,
        "addTime":db.serverDate()
      } 
    })
  }catch(e){
    return  "cuowu";
  }
 
}
```

云函数创建好了我们就需要调用云函数可以再我们上传到存储成功了调用那我们只需要改造在上方的添加图片加些代码就行了

```javascript
 wx.cloud.uploadFile({
          cloudPath: 123.png, //上传头像地址记住不能重名 后期可以自己封装一个不重名方法
          filePath: res.tempFilePath,//图片临时路径
          success: function (res) {
            let curPicID = res.fileID;
            console.log(curPicID)
     		 wx.cloud.callFunction({
              name:"addPic",
              data:{
                picID: curPicID,
                labelStr: label_str,//图片的一些信息等
                nickName:app.globalData.userInfo.nickName
              },
              success(res){
                console.log("后台上传数据库",res);
                if(res.result._id){
                  wx.showToast({
                    title: "上传成功",
                    duration: 1500,
                    mask: true
                  });
                  setTimeout(()=>{
                    wx.switchTab({
                      url: '/pages/picWall/picWall',
                    })
                  },800)
                }else{
                  wx.showToast({
                    title: "上传失败",
                    icon:"none",
                    duration: 1500,
                    mask: true
                  });
                  console.error(res);
                }
              },
              fail(res){
                console.log("后台上传数据库失败",res);
              }
            })
         },
       	fail(res) {
            utils.failFn();
          }
    })
  },
```

执行后我们可以进入数据库中查看我们的数据是否上传成功

![](https://6d61-maxgan-0970c9-1259038774.tcb.qcloud.la/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190515161342.png?sign=819e52ee78f60109a3db843a2c106f25&t=1557908065)

上传成功下一步就是显示在对应的页面

#### 获取图片并展示

那么我们就需要再编写个getPic云函数来获取图片

```javascript
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  let { curType, curLength, userInfo} = event;
  let sortStr = curType == 1 ?"addTime":"thumb";
  try{
    let pro1 = cloud.callFunction({ name: "getThumbList", data: { openId: userInfo.openId} });;
    let pro2 = db.collection("picList").orderBy(sortStr, "desc").skip(curLength).limit(5).get();//orderby skip 和limit用法在官方文档有详细说明
    let allRes = await Promise.all([pro1, pro2]);
    // return allRes;
    let thumbList = allRes[0].result.data;
    let picList = allRes[1].data;
    //找到两个表里的_id与picItemID是否有值相同,相同说明当前用户已经点赞了
    for (let i = 0; i < picList.length;i++){
      for (let j = 0; j < thumbList.length;j++){
        if (picList[i]._id == thumbList[j].picItemID){
          picList[i].isLove = 1;
          break;
        }
      }
    }
    return picList;
  }catch(e){
    console.log(e);
    return "查询数据库错误";
  }
}
```

再小程序端我们只需要调用获取就行

```javascript
	getData(){
		let that = this;
		let page = this.data.page + 1;
		let get_type = this.data.getType;
		wx.showLoading({
			title:"loading...",
			mask:true,
		})
    // 获取数据
    wx.cloud.callFunction({
      name:"getPic",
      data:{
        curType: get_type,//按时间或者热度排序
        curLength: that.data.listArr.length//当前图片数量用于分页
      },
      success(res){
        wx.hideLoading();
        console.log("请求数据",res);
        let curPageList = res.result;
        if (curPageList.length>0){
          let listArr = that.data.listArr.concat(curPageList);
          that.setData({
            listArr
          })
        }else{
          wx.showToast({
            title: "没有更多数据了",
            icon: "none",
            mask: true,
            duration: 800,
          })
        }
      }
    })
	},
```

以上便是这个小程序的最主要的部分了

附上小程序源码[云开发demo](https://github.com/GzxNydia/wxyun)
