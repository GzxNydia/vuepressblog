webpackJsonp([7],{"1ZsJ":function(t,a,i){"use strict";a.a={name:"followers"}},"1pnJ":function(t,a,i){t.exports=i.p+"img/nav-logo.4c7bbaf.png"},Alvp:function(t,a,i){"use strict";a.a={name:"following"}},Dknm:function(t,a,i){var s=i("raRY");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("FIqI")("3442a694",s,!1,{sourceMap:!1})},GNWn:function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-default nav-fixed-top"},[s("div",{staticClass:"width-limit"},[s("nuxt-link",{staticClass:"main-logo",attrs:{to:"/"}},[s("img",{attrs:{src:i("1pnJ")}})]),s("nuxt-link",{staticClass:"write-btn btn",attrs:{to:"/creat"}},[s("i",{staticClass:"fa fa-edit"}),t._v("\n                写文章\n            ")]),s("div",{staticClass:"user",on:{mouseover:function(a){t.userShow=!0},mouseleave:function(a){t.userShow=!1}}},[s("div",{staticClass:"drop-down"},[s("nuxt-link",{staticClass:"avatar",attrs:{to:"/users/myhomepage"}},[s("img",{attrs:{src:i("yrOU"),alt:""}})])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.userShow,expression:"userShow"}],staticClass:"drop-menu"},[s("ul",[s("li",[s("nuxt-link",{attrs:{to:"/users/myhomepage"}},[s("i",{staticClass:"fa fa-user"}),t._v("\n                                我的主页\n                            ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/users/bookmarks"}},[s("i",{staticClass:"fa fa-bookmark"}),t._v("\n                                收藏的文章\n                            ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/users/123/like"}},[s("i",{staticClass:"fa fa-heart"}),t._v("\n                                喜欢的文章\n                            ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/users/setting/basic"}},[s("i",{staticClass:"fa fa-cog"}),t._v("\n                                设置\n                            ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/"}},[s("i",{staticClass:"fa fa-sign-out"}),t._v("\n                                退出\n                            ")])],1)])])]),s("div",{staticClass:"my-container"},[s("ul",{staticClass:"nav-list"},[s("li",{staticClass:"active"},[s("nuxt-link",{attrs:{to:"/"}},[s("i",{staticClass:"fa fa-compass"}),s("span",[t._v("发现")])])],1),s("li",[s("nuxt-link",{attrs:{to:"/timeline"}},[s("i",{staticClass:"fa fa-bookmark-o"}),s("span",[t._v("关注")])])],1),s("li",{staticClass:"notify",on:{mouseover:function(a){t.notifyShow=!0},mouseleave:function(a){t.notifyShow=!1}}},[s("nuxt-link",{attrs:{to:"/notifications/comments"}},[s("i",{staticClass:"fa fa-bell-o"}),s("span",[t._v("消息")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.notifyShow,expression:"notifyShow"}],staticClass:"drop-menu"},[s("ul",[s("li",[s("nuxt-link",{attrs:{to:"/notifications/comments"}},[s("i",{staticClass:"fa fa-comment-o"}),t._v("\n                                        评论\n                                    ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/notifications/chats"}},[s("i",{staticClass:"fa fa-envelope-open-o"}),t._v("\n                                        简信\n                                    ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/notifications/requests"}},[s("i",{staticClass:"fa fa-paper-plane-o"}),t._v("\n                                        投稿请求\n                                    ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/notifications/likes"}},[s("i",{staticClass:"fa fa-heart-o"}),t._v("\n                                        喜欢和赞\n                                    ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/notifications/follows"}},[s("i",{staticClass:"fa fa-user-o"}),t._v("\n                                        关注\n                                    ")])],1)])])],1),s("li",{staticClass:"search"},[s("form",{attrs:{action:"",method:"post"}},[s("input",{attrs:{type:"text",placeholder:"搜索"},on:{focus:function(a){t.bgShow=!0},blur:function(a){t.bgShow=!1}}}),s("nuxt-link",{staticClass:"search-button",class:{active:t.bgShow},attrs:{to:"/search"}},[s("i",{staticClass:"fa fa-search"})])],1)])])])],1)])])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};a.a=n},JY6M:function(t,a,i){"use strict";a.a={name:"myHeader",data:function(){return{userShow:!1,notifyShow:!1,bgShow:!1}}}},Jy8t:function(t,a,i){t.exports=i.p+"img/movie.d7be604.jpg"},KSJw:function(t,a,i){"use strict";var s=i("Vrh3"),n=i("kSl/"),o=i("u+OH");a.a={name:"",data:function(){return{currentTab:"Followers"}},methods:{toggleTab:function(t){this.currentTab=t}},components:{myHeader:s.a,Followers:n.a,Following:o.a}}},RVLf:function(t,a,i){(t.exports=i("UTlt")(!1)).push([t.i,"",""])},Vrh3:function(t,a,i){"use strict";var s=i("JY6M"),n=i("GNWn"),o=!1;var l=function(t){o||i("Dknm")},e=i("C7Lr")(s.a,n.a,!1,l,"data-v-337d8b14",null);e.options.__file="components/myHeader.vue",a.a=e.exports},WHRI:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("KSJw"),n=i("qVrQ"),o=i("C7Lr")(s.a,n.a,!1,null,null,null);o.options.__file="pages/users/_id/following.vue",a.default=o.exports},XRSx:function(t,a,i){"use strict";var s=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticStyle:{"margin-top":"20px"}},[a("ul",{staticClass:"user-list"},[a("li",[a("nuxt-link",{staticClass:"avatar-collection",attrs:{to:"/collection/123"}},[a("img",{attrs:{src:i("Jy8t")}})]),a("div",{staticClass:"info"},[a("nuxt-link",{staticClass:"name",attrs:{to:"/collection/123"}},[this._v("赏心何止三两枝")]),a("div",{staticClass:"meta"},[this._v("\n                    收录了20篇文章,5人关注\n                ")])],1),this._m(0)],1)])])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"btn btn-success follow"},[a("i",{staticClass:"fa fa-plus-square-o"}),a("span",[this._v("关注")])])}]};a.a=n},bVqZ:function(t,a,i){var s=i("rKY+");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("FIqI")("74763282",s,!1,{sourceMap:!1})},gIhV:function(t,a,i){"use strict";var s=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticStyle:{"margin-top":"20px"}},[a("ul",{staticClass:"user-list"},[a("li",[a("nuxt-link",{staticClass:"avatar-collection",attrs:{to:"/collection/123"}},[a("img",{attrs:{src:i("p1ot")}})]),a("div",{staticClass:"info"},[a("nuxt-link",{staticClass:"name",attrs:{to:"/collection/123"}},[this._v("赏心何止三两枝")]),a("div",{staticClass:"meta"},[this._v("\n                    收录了20篇文章,5人关注\n                ")])],1),this._m(0)],1)])])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"btn btn-success follow"},[a("i",{staticClass:"fa fa-plus-square-o"}),a("span",[this._v("关注")])])}]};a.a=n},hhg5:function(t,a,i){var s=i("RVLf");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("FIqI")("428df954",s,!1,{sourceMap:!1})},"kSl/":function(t,a,i){"use strict";var s=i("1ZsJ"),n=i("gIhV"),o=!1;var l=function(t){o||i("hhg5")},e=i("C7Lr")(s.a,n.a,!1,l,"data-v-93036d7a",null);e.options.__file="components/users/Followers.vue",a.a=e.exports},p1ot:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAALVBMVEWWlpb////6+vrBwcHo6Ojj4+OhoaHW1tbv7+/g4OC2traxsbGtra2bm5v09PSL07DIAAAA0klEQVRo3u3YPQ4BURSG4ZMIChTf+NdJFKJiCayAHcwSWIuV2I/GTsiNBnMjc3OKYd5nAW91TvMZAAAAAPwcfViec8dgMM6dg1p5B7X2Ds68g1lufq4nSUdz1LlJI/N0kfrmqS1NzVNXmpinnpRZaY2dCizWz1uysloHFRrmicGmIvaJwY0i+onBrSIGicG5IrLEoKIIEiT4HrQXBP8zWP07JFiHYPU/hWAFz4YgQYJVCj4QJEjwy4gReM4sgecQFHhOVYHnmBY4zn0AAAAAgJq5A5FbfxmCiQwtAAAAAElFTkSuQmCC"},qVrQ:function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("my-header"),s("div",{staticClass:"person my-container",staticStyle:{padding:"100px 0"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8 main"},[s("div",{staticClass:"main-top"},[s("nuxt-link",{staticClass:"avatar",attrs:{to:"/u/123"}},[s("img",{attrs:{src:i("yrOU")}})]),t._m(0),s("a",{staticClass:"btn btn-hollow",attrs:{href:"/notifications"}},[t._v("\n                        发简信\n                    ")]),s("div",{staticClass:"title"},[s("nuxt-link",{staticClass:"name",attrs:{to:"/u/123"}},[t._v("\n                            我是不和么\n                        ")]),s("i",{staticClass:"fa fa-mars"})],1),s("div",{staticClass:"info"},[s("ul",[s("li",[s("div",{staticClass:"meta-block"},[s("nuxt-link",{attrs:{to:"/users/123/following"}},[s("p",[t._v("88")]),t._v("\n                                        关注\n                                        "),s("i",{staticClass:"fa fa-angle-right"})])],1)]),s("li",[s("div",{staticClass:"meta-block"},[s("nuxt-link",{attrs:{to:"/users/123/followers"}},[s("p",[t._v("16")]),t._v("\n                                        粉丝\n                                        "),s("i",{staticClass:"fa fa-angle-right"})])],1)]),s("li",[s("div",{staticClass:"meta-block"},[s("nuxt-link",{attrs:{to:"/users/myhomepage"}},[s("p",[t._v("32")]),t._v("\n                                        文章\n                                        "),s("i",{staticClass:"fa fa-angle-right"})])],1)]),t._m(1),t._m(2)])])],1),s("ul",{staticClass:"trigger-menu"},[s("li",{class:{active:"Followers"==t.currentTab}},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.toggleTab("Followers")}}},[t._v("\n                            关注用户 28\n                        ")])]),s("li",{class:{active:"Following"==t.currentTab}},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.toggleTab("Following")}}},[t._v("\n                            粉丝 2220\n                        ")])])]),s("div",{attrs:{id:"list-container"}},[s(t.currentTab,{tag:"component",attrs:{"keep-alive":""}})],1)]),s("div",{staticClass:"col-4 aside"},[s("div",{staticClass:"title"},[t._v("个人介绍")]),t._m(3),t._m(4),s("ul",{staticClass:"list user-dynamic"},[s("li",[s("nuxt-link",{attrs:{to:"/users/123/collection"}},[s("i",{staticClass:"fa fa-book"}),s("span",[t._v("他关注的专题/文集")])])],1),s("li",[s("nuxt-link",{attrs:{to:"/users/123/like"}},[s("i",{staticClass:"fa fa-heart-o"}),s("span",[t._v("他喜欢的文章")])])],1)]),s("div",[s("div",{staticClass:"title"},[t._v("\n                        他创建的专题\n                    ")]),s("nuxt-link",{staticClass:"function-btn new-collection-btn",attrs:{to:"/collection/new",target:"_blank"}},[s("i",{staticClass:"fa fa-plus"}),s("span",[t._v("新建专题")])]),s("ul",{staticClass:"list"},[s("li",[s("nuxt-link",{staticClass:"avatar-collection",attrs:{to:"/collection/123"}},[s("img",{attrs:{src:i("Jy8t")}})]),s("nuxt-link",{staticClass:"name",attrs:{to:"/collection/123"}},[t._v("\n                                朱焘源值班报告\n                            ")])],1)]),s("div",{staticClass:"title"},[t._v("\n                        他管理的专题\n                    ")]),s("ul",{staticClass:"list"},[s("li",[s("nuxt-link",{staticClass:"avatar-collection",attrs:{to:"/collection/123"}},[s("img",{attrs:{src:i("Jy8t")}})]),s("nuxt-link",{staticClass:"name",attrs:{to:"/collection/123"}},[t._v("\n                                朱焘源值班报告\n                            ")])],1)]),s("div",{staticClass:"title"},[t._v("\n                        他创建的文集\n                    ")]),s("ul",{staticClass:"list"},[s("li",[s("nuxt-link",{staticClass:"avatar-collection",attrs:{to:"/note/123"}},[s("i",{staticClass:"fa fa-book"})]),s("nuxt-link",{staticClass:"name",attrs:{to:"/note/123"}},[t._v("\n                                朱焘源值班报告\n                            ")])],1)])],1)])])])],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"off user-follow-button"},[a("i",{staticClass:"fa fa-plus-square-o"}),a("span",[this._v("关注")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("div",{staticClass:"meta-block"},[a("p",[this._v("5000")]),this._v("\n                                    字数\n                                ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("div",{staticClass:"meta-block"},[a("p",[this._v("100")]),this._v("\n                                    收获喜欢\n                                ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"function-btn",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-pencil-square-o"}),this._v(" 编辑\n                ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"description"},[a("div",{staticClass:"js-intro"},[this._v("\n                        逃跑医生，预防医学专家，抗衰老顾问，创业者，奶爸！人生意义思考者，东方智慧践行者。非著名作家坯子。\n                    ")])])}]};a.a=n},"rKY+":function(t,a,i){(t.exports=i("UTlt")(!1)).push([t.i,"",""])},raRY:function(t,a,i){(t.exports=i("UTlt")(!1)).push([t.i,'nav[data-v-337d8b14]{height:56px;width:100%}nav.navbar[data-v-337d8b14]{padding:0;border-bottom:1px solid #dcdcdc;margin-bottom:20px;background-color:#fff}nav.nav-fixed-top[data-v-337d8b14]{position:fixed;top:0;left:0;z-index:999}nav .width-limit[data-v-337d8b14]{min-width:768px;width:1440px;margin:0 auto}nav .main-logo[data-v-337d8b14]{float:left;height:56px;padding:0}nav .main-logo img[data-v-337d8b14]{height:100%}nav .write-btn[data-v-337d8b14]{float:right;background-color:#ea6f5a;line-height:24px;margin-top:6px;color:#fff!important;border-radius:20px;font-size:16px}nav .user[data-v-337d8b14]{float:right;position:relative}nav .user .avatar[data-v-337d8b14]{position:relative;margin:8px 28px 8px 20px;width:40px;height:40px;display:block;border:1px solid #ccc;border-radius:50%}nav .user .avatar[data-v-337d8b14]:after{content:"";position:absolute;top:18px;right:-14px;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #999}nav .user[data-v-337d8b14]:hover{background-color:#f5f5f5}nav .user .avatar img[data-v-337d8b14]{width:100%;height:100%;border-radius:50%}nav .user .drop-menu[data-v-337d8b14]{position:absolute;left:0;min-width:160px;-webkit-box-shadow:0 0 8px rgba(0,0,0,.1);box-shadow:0 0 8px rgba(0,0,0,.1);background-color:#fff}nav .user .drop-menu ul[data-v-337d8b14]{border:1px solid #ccc;padding:10px 0;margin:0}nav .user .drop-menu ul li a[data-v-337d8b14]{padding:10px 20px;display:block}nav .user .drop-menu ul li a[data-v-337d8b14]:hover{background-color:#f5f5f5}nav .user .drop-menu ul li i[data-v-337d8b14]{margin-right:15px;color:#ea6f5a;font-size:18px}nav .nav-list[data-v-337d8b14]{margin:0 -15px!important;padding:0}nav .nav-list[data-v-337d8b14]:after{content:"";height:0;display:block;visibility:hidden;clear:both}nav .nav-list>li[data-v-337d8b14]{float:left}nav .nav-list>li[data-v-337d8b14]:hover{background-color:#f5f5f5}nav .nav-list>li>a[data-v-337d8b14]{display:block;height:55px;padding:15px;margin-right:10px;font-size:18px}nav .nav-list>li a i[data-v-337d8b14]{margin-right:7px;font-size:20px;margin-top:5px}nav .nav-list>li.active[data-v-337d8b14]{color:#ea6f5a;background-color:#fff}nav .nav-list .notify[data-v-337d8b14]{position:relative}nav .nav-list .notify .drop-menu[data-v-337d8b14]{position:absolute;left:0;top:56px;min-width:160px;-webkit-box-shadow:0 0 8px rgba(0,0,0,.1);box-shadow:0 0 8px rgba(0,0,0,.1);font-size:15px;background-color:#fff}nav .nav-list .notify .drop-menu ul[data-v-337d8b14]{border:1px solid #ccc;padding:10px 0;margin:0}nav .nav-list .notify .drop-menu ul li a[data-v-337d8b14]{padding:10px 20px;margin:0;display:block}nav .nav-list .notify .drop-menu ul li a[data-v-337d8b14]:hover{background-color:#f5f5f5}nav .nav-list .notify .drop-menu ul li i[data-v-337d8b14]{margin-right:15px;color:#ea6f5a;font-size:18px}nav a.sign-in[data-v-337d8b14]{float:right;width:80px;height:40px;margin:7px 6px 0 7px;line-height:24px;font-size:15px}nav a.sign-out[data-v-337d8b14]:hover{background-color:#c8c8c8}nav a.sign-out[data-v-337d8b14]:active{-webkit-box-shadow:none;box-shadow:none}nav a.sign-out[data-v-337d8b14]{float:right;width:80px;height:40px;margin:7px 6px 0 7px;border:1px solid #ea6f5a;border-radius:15px;color:#ea6f5a!important;line-height:24px;font-size:15px}nav .nav-list .search[data-v-337d8b14]{padding-left:15px}nav .nav-list .search[data-v-337d8b14]:hover{background-color:#fff}nav .nav-list .search form[data-v-337d8b14]{margin-top:9px;position:relative}nav .nav-list .search form input[data-v-337d8b14]{width:200px;height:38px;border:none;background-color:hsla(0,0%,93%,.5);border-radius:20px;padding:0 30px 0 20px;font-size:15px;-webkit-transition:width .3s ease-in;transition:width .3s ease-in}nav .nav-list .search form input[data-v-337d8b14]:focus{width:300px}nav .nav-list .search form a.search-button[data-v-337d8b14]{display:block;width:30px;height:30px;position:absolute;right:0;top:2px;text-align:center}nav .nav-list .search form a.active[data-v-337d8b14]{background-color:#c8c8c8;border-radius:50%}@media (max-width:768px){nav .nav-list[data-v-337d8b14]{display:none}}@media (max-width:1440px){nav .nav-list>li>a i[data-v-337d8b14]{display:none}nav .nav-list .search form input[data-v-337d8b14]{width:160px}nav .nav-list .search form input[data-v-337d8b14]:focus{width:240px}}@media (max-width:1080px){nav .nav-list>li>a i[data-v-337d8b14]{display:block}nav .nav-list>li>a span[data-v-337d8b14]{display:none}nav .nav-list .search form input[data-v-337d8b14],nav .nav-list .search form input[data-v-337d8b14]:focus{width:150px}}',""])},"u+OH":function(t,a,i){"use strict";var s=i("Alvp"),n=i("XRSx"),o=!1;var l=function(t){o||i("bVqZ")},e=i("C7Lr")(s.a,n.a,!1,l,"data-v-faca8c82",null);e.options.__file="components/users/Following.vue",a.a=e.exports},yrOU:function(t,a,i){t.exports=i.p+"img/default-avatar.7104cbb.jpg"}});