(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,6,7,8,10],{568:function(t,e,r){var content=r(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(124).default)("75c2cb0a",content,!0,{sourceMap:!1})},569:function(t,e,r){var content=r(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(124).default)("01885c30",content,!0,{sourceMap:!1})},570:function(t,e,r){var content=r(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(124).default)("55219a9b",content,!0,{sourceMap:!1})},571:function(t,e,r){var content=r(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(124).default)("907cade8",content,!0,{sourceMap:!1})},572:function(t,e,r){var content=r(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(124).default)("6c6ea87a",content,!0,{sourceMap:!1})},575:function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));r(303);var n=r(60),o=r(56),c=r(57),l=r(307),d=r(158),f=r(237),v=r(112),h=(r(13),r(18),r(116),r(239)),m=r.n(h),w=r(218),M=r(404);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var y=function(t){Object(d.a)(f,t);var e,r=x(f);function f(t,e){var n;return Object(o.a)(this,f),(n=r.call(this,t)).userWords=e,n.locationsForge=m.a.createInstance({name:"locations"}),n}return Object(c.a)(f,[{key:"initialize",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)(Object(v.a)(f.prototype),"initialize",this).call(this);case 2:return e=this.book.key(),t.next=5,this.locationsForge.getItem(e);case 5:if(!(r=t.sent)){t.next=10;break}this.book.locations.load(r),t.next=15;break;case 10:return t.next=12,this.book.locations.generate(10);case 12:return n=t.sent,t.next=15,this.locationsForge.setItem(e,n);case 15:this.on("content",this.registerEventListenersOfHighlights.bind(this)),this.book.spine.hooks.content.register(this.hightlight.bind(this));case 17:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"hightlight",value:function(t){var e=this,body=t.body;this.emit("processing:start"),body.querySelectorAll("vocab").forEach((function(t){var r=t.textContent.toLowerCase();switch(e.userWords[r]){case M.UserWordStatus.KNOWN:case M.UserWordStatus.LEARNING:t.className=e.userWords[r];break;default:t.className=M.UserWordStatus.UNKNOWN}})),this.emit("processing:end")}},{key:"registerEventListenersOfHighlights",value:function(t){var e=this;t.body.querySelectorAll("vocab").forEach((function(element){element.onclick=function(t){e.emit("word-click",element),t.stopPropagation()}}))}},{key:"highlightTextNode",value:function(t){}},{key:"registerThemes",value:function(){this.rendition.themes.register("lamp-reader",{body:{color:"black","font-size":"x-large","padding-top":"0 !important","padding-bottom":"0 !important"},vocab:{cursor:"pointer","border-radius":"5px"},"vocab.KNOWN":{"background-color":"lightgrey"},"vocab.LEARNING":{"background-color":"orange"},"vocab.UNKNOWN":{"background-color":"black",color:"white"},"a:hover":{color:"unset"}}),this.rendition.themes.select("lamp-reader")}}],[{key:"updateWordStatus",value:function(t,e){t.getRootNode().querySelectorAll('vocab[word="'.concat(e.word.word,'"]')).forEach((function(t){return t.className=e.status}))}}]),f}(w.StatefulEpubViewer)},578:function(t,e,r){"use strict";r(568)},579:function(t,e,r){var n=r(123)(!1);n.push([t.i,".loading[data-v-66a59df0]{display:flex;align-items:center;justify-content:center;width:100vw;height:100vh}.loading img[data-v-66a59df0]{height:75vh;filter:grayscale(100%)}",""]),t.exports=n},580:function(t,e,r){"use strict";r(569)},581:function(t,e,r){var n=r(123)(!1);n.push([t.i,".chapter-bar[data-v-79732f3c]{justify-content:center}",""]),t.exports=n},582:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9Ii03OC41IDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiA+PHRpdGxlPmxlZnQ8L3RpdGxlPjxwYXRoIGQ9Ik0yNTcgNjRMMjkxIDk4IDEyOCAyNjIgMjkxIDQyNiAyNTcgNDYwIDYxIDI2MiAyNTcgNjRaIiAvPjwvc3ZnPgo="},583:function(t,e,r){t.exports=r.p+"img/gear.b779e5c.svg"},584:function(t,e,r){"use strict";r(570)},585:function(t,e,r){var n=r(123)(!1);n.push([t.i,".top-bar[data-v-2736eec0]{background-color:unset!important}",""]),t.exports=n},586:function(t,e,r){"use strict";r(571)},587:function(t,e,r){var n=r(123)(!1);n.push([t.i,".bottom-bar[data-v-81584fce]{background-color:unset!important}",""]),t.exports=n},588:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIj4KICA8cGF0aCBkPSJNODkyLjEgNzM3LjhsLTExMC4zLTYzLjdhMTUuOSAxNS45IDAgMCAwLTIxLjcgNS45bC0xOS45IDM0LjVjLTQuNCA3LjYtMS44IDE3LjQgNS44IDIxLjhMODU2LjMgODAwYTE1LjkgMTUuOSAwIDAgMCAyMS43LTUuOWwxOS45LTM0LjVjNC40LTcuNiAxLjctMTcuNC01LjgtMjEuOHpNNzYwIDM0NGExNS45IDE1LjkgMCAwIDAgMjEuNyA1LjlMODkyIDI4Ni4yYzcuNi00LjQgMTAuMi0xNC4yIDUuOC0yMS44TDg3OCAyMzBhMTUuOSAxNS45IDAgMCAwLTIxLjctNS45TDc0NiAyODcuOGExNS45OSAxNS45OSAwIDAgMC01LjggMjEuOEw3NjAgMzQ0em0xNzQgMTMySDgwNmMtOC44IDAtMTYgNy4yLTE2IDE2djQwYzAgOC44IDcuMiAxNiAxNiAxNmgxMjhjOC44IDAgMTYtNy4yIDE2LTE2di00MGMwLTguOC03LjItMTYtMTYtMTZ6TTYyNS45IDExNWMtNS45IDAtMTEuOSAxLjYtMTcuNCA1LjNMMjU0IDM1Mkg5MGMtOC44IDAtMTYgNy4yLTE2IDE2djI4OGMwIDguOCA3LjIgMTYgMTYgMTZoMTY0bDM1NC41IDIzMS43YzUuNSAzLjYgMTEuNiA1LjMgMTcuNCA1LjMgMTYuNyAwIDMyLjEtMTMuMyAzMi4xLTMyLjFWMTQ3LjFjMC0xOC44LTE1LjQtMzIuMS0zMi4xLTMyLjF6Ii8+Cjwvc3ZnPgo="},589:function(t,e){t.exports={lookup:async function(t){const e=`https://cdn.jsdelivr.net/gh/openderock/dictionary/${function(t){switch(t.length){case 1:return t;case 2:return`${t[0]}/${t[1]}`;default:return`${t[0]}/${t[1]}/${t[2]}`}}(t)}/${t}.json`;return fetch(e).then((t=>{if(t.ok)return t;throw new Error(t.statusText)})).then((t=>t.json()))}}},590:function(t,e,r){"use strict";r(572)},591:function(t,e,r){var n=r(123)(!1);n.push([t.i,"#word-modal .modal-title{text-transform:capitalize}#word-modal .modal-title small{font-size:50%}#word-modal .phonetic{cursor:pointer}#word-modal .translation{max-height:25vh;overflow-y:auto}#word-modal ul{padding-left:0}#word-modal li>b{text-transform:capitalize}",""]),t.exports=n},596:function(t,e,r){var content=r(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(124).default)("6809af6e",content,!0,{sourceMap:!1})},600:function(t,e,r){"use strict";r.r(e);r(13),r(102),r(106),r(574),r(403);var n=r(25),img=r(96),o=r(157),c=n.default.extend({components:{BImg:img.a,BSpinner:o.a},props:{book:{type:Object,default:void 0}},methods:{createObjectURL:URL.createObjectURL}}),l=(r(578),r(93)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("center",{staticClass:"loading"},[r("div",[r("b-img",{attrs:{center:"",thumbnail:"",src:t.createObjectURL(t.book.cover),alt:"Center image"}}),t._v(" "),r("br"),t._v(" "),r("b-spinner",{attrs:{small:""}})],1),t._v(" "),r("br")])}),[],!1,null,"66a59df0",null);e.default=component.exports},601:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(201),c=r(203),l=r(208),d=n.default.extend({components:{BNavbar:o.a,BNavbarNav:c.a,BNavItem:l.a},props:{chapter:{type:String,default:""}}}),f=(r(580),r(93)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{staticClass:"chapter-bar",attrs:{fixed:"top"}},[r("b-navbar-nav",[r("b-nav-item",[r("small",[t._v(t._s(t.chapter))])])],1)],1)}),[],!1,null,"79732f3c",null);e.default=component.exports},602:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(201),c=r(203),l=r(208),d=n.default.extend({components:{BNavbar:o.a,BNavbarNav:c.a,BNavItem:l.a},props:{book:{type:Object,default:void 0}}}),f=(r(584),r(93)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"top-bar",attrs:{variant:"light",fixed:"top"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/library"}},[n("img",{staticClass:"icon faded",attrs:{src:r(582),alt:""}})])],1),t._v(" "),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.view-styles",modifiers:{"view-styles":!0}}],attrs:{right:""}},[n("img",{staticClass:"icon faded",attrs:{src:r(583),alt:""}})])],1)],1)}),[],!1,null,"2736eec0",null);e.default=component.exports},603:function(t,e,r){"use strict";r.r(e);r(255);var n=r(25),o=r(201),c=r(203),l=r(208),d=n.default.extend({components:{BNavbar:o.a,BNavbarNav:c.a,BNavItem:l.a},props:{book:{type:Object,default:void 0}},computed:{leftPagesOfTheChapter:function(){var t,e=null===(t=this.book.pagination.currentLocation)||void 0===t?void 0:t.end.displayed;return e?e.total-e.page:-1},percentage:function(){var t;return(100*((null===(t=this.book.pagination.currentLocation)||void 0===t?void 0:t.end.percentage)||0)).toFixed()}},methods:{changePage:function(){var input=prompt("Please enter page number"),t=parseInt(input);isNaN(t)?alert("Wrong input: ".concat(input)):this.$emit("change",this.book.pagination.pages[t-1])}}}),f=(r(586),r(93)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{staticClass:"bottom-bar",attrs:{variant:"light",fixed:"bottom"}},[r("b-navbar-nav",[r("b-nav-item",{on:{click:t.changePage}},[r("small",[r("b",[t._v(t._s(t.percentage))]),t._v("%\n      ")])])],1),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[t.leftPagesOfTheChapter>0?r("b-nav-item",{attrs:{right:""}},[r("small",[t._v(t._s(t.leftPagesOfTheChapter)+" pages left in this chapter")])]):r("b-nav-item",{attrs:{right:""}},[r("small",[t._v("last page of this chapter")])])],1)],1)}),[],!1,null,"81584fce",null);e.default=component.exports},604:function(t,e,r){"use strict";r.r(e);r(22),r(20),r(17),r(13),r(23),r(18),r(24);var n=r(60),o=r(3),c=(r(116),r(25)),l=r(181),d=r(144),f=r(65),v=r(157),h=r(589),m=r.n(h),w=r(575);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=c.default.extend({components:{BModal:d.a,BButton:f.a,BSpinner:v.a},data:function(){return{element:void 0,word:"",translation:void 0}},computed:{phonetic:function(){var t,e,r;return(null===(e=null===(t=this.translation)||void 0===t?void 0:t.phonetics)||void 0===e?void 0:e.length)>0?null===(r=this.translation)||void 0===r?void 0:r.phonetics[0]:void 0}},methods:x(x({},Object(l.b)({review:"user-word/review"})),{},{open:function(element){this.element=element,this.word=element.textContent.toLowerCase(),this.$bvModal.show("word-modal"),this.fetchTranslation()},fetchTranslation:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.translation=void 0,e.next=3,m.a.lookup(t.word);case 3:r=e.sent,n=r.records,t.translation=n[0];case 6:case"end":return e.stop()}}),e)})))()},playAudio:function(){var t;(null===(t=this.phonetic)||void 0===t?void 0:t.audio)&&new Audio(this.phonetic.audio).play()},setWordStatus:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.review({status:t,word:e.word});case 2:n=r.sent,w.a.updateWordStatus(e.element,n),e.$bvModal.hide("word-modal");case 5:case"end":return r.stop()}}),r)})))()}})}),N=(r(590),r(93)),component=Object(N.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"word-modal","hide-backdrop":"","hide-footer":"","hide-header":""}},[n("h2",{staticClass:"modal-title"},[t._v("\n    "+t._s(t.word)+"\n    "),t.phonetic?n("small",{staticClass:"phonetic",on:{click:t.playAudio}},[t._v("\n      "+t._s(t.phonetic.text)+"\n      "),t.phonetic.audio?n("img",{staticClass:"icon faded",attrs:{src:r(588),alt:""}}):t._e()]):t._e()]),t._v(" "),n("hr"),t._v(" "),t.translation?n("p",{staticClass:"my-4 translation"},[n("ul",t._l(t.translation.meanings,(function(e,r){return n("li",{key:r},[n("b",[t._v(t._s(e.partOfSpeech))]),t._v(" "),n("ol",t._l(e.definitions,(function(e,r){return n("li",{key:r},[t._v("\n            "+t._s(e.definition)+"\n          ")])})),0),t._v(" "),n("br")])})),0)]):n("center",[n("br"),t._v(" "),n("br"),t._v(" "),n("b-spinner",{attrs:{small:""}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br")],1),t._v(" "),n("hr"),t._v(" "),n("b-button",{attrs:{block:"",variant:"success"},on:{click:function(e){return t.setWordStatus("LEARNING")}}},[t._v("Needs more review")]),t._v(" "),n("b-button",{attrs:{block:"",variant:"dark"},on:{click:function(e){return t.setWordStatus("KNOWN")}}},[t._v("Move to the known ones")])],1)}),[],!1,null,null,null);e.default=component.exports},612:function(t,e,r){"use strict";r(596)},613:function(t,e,r){var n=r(123)(!1);n.push([t.i,".reader[data-v-e5f9bec2]{top:0;left:0;width:100%;height:100%;margin-top:56px;margin-bottom:56px;font-family:Helvetica,sans-serif;position:fixed}.reader .epub-viewer[data-v-e5f9bec2]{position:fixed;width:100%;height:calc(100% - 112px)}",""]),t.exports=n},623:function(t,e,r){"use strict";r.r(e);var n,o=r(60),c=(r(116),r(25)),l=r(218),d=r(575),f=c.default.extend({layout:"reader",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,o=t.error,c=t.store,f=r.id,e.next=4,l.library.get(f);case 4:if(!(v=e.sent)){e.next=19;break}return e.prev=6,e.next=9,c.dispatch("user-word/getUserWords");case 9:return n=new d.a(v,c.state["user-word"].userWords),window.viewer=n,e.abrupt("return",{info:v.info});case 14:e.prev=14,e.t0=e.catch(6);case 17:e.next=20;break;case 19:o({statusCode:404,message:"".concat(f," not found!")});case 20:case"end":return e.stop()}}),e,null,[[6,14]])})))()},data:function(){return{showControlls:!1,loading:!0,initialised:!1}},computed:{viewer:function(){return n}},created:function(){var t=this;n.on("click-tap",(function(){return t.showControlls=!t.showControlls})),n.on("word-click",(function(element){t.$refs.wordModal.open(element)}))},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.initialize();case 2:return t.initialised=!0,e.next=5,t.$nextTick();case 5:return e.next=7,n.display(t.$refs.viewer);case 7:t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){n.destroy()}}),v=(r(612),r(93)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"reader"},[t.loading?r("ReaderLoading",{attrs:{book:t.info}}):t._e(),t._v(" "),t.initialised?r("div",[r("ReaderChapterBar",{attrs:{chapter:t.info.pagination.currentChapter}}),t._v(" "),r("ReaderTopBar",{directives:[{name:"show",rawName:"v-show",value:t.showControlls,expression:"showControlls"}],attrs:{title:t.info.title}}),t._v(" "),r("div",{ref:"viewer",staticClass:"epub-viewer"}),t._v(" "),r("ReaderBottomBar",{ref:"btnBar",attrs:{book:t.info},on:{change:function(e){return t.viewer.goTo(e)}}})],1):t._e(),t._v(" "),r("ReaderWordModal",{ref:"wordModal"})],1)}),[],!1,null,"e5f9bec2",null);e.default=component.exports;installComponents(component,{ReaderLoading:r(600).default,ReaderChapterBar:r(601).default,ReaderTopBar:r(602).default,ReaderBottomBar:r(603).default,ReaderWordModal:r(604).default})}}]);