(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{567:function(e,t,o){var content=o(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(124).default)("9f7acc3e",content,!0,{sourceMap:!1})},576:function(e,t,o){"use strict";o(567)},577:function(e,t,o){var r=o(123)(!1);r.push([e.i,".library-item{padding:0;margin-bottom:.5rem;text-align:left;align-items:flex-end}.library-item:hover{text-decoration:unset}.library-item .card-body{position:relative}.library-item .card-body h4{font-size:calc(1.285rem + .42vw);color:#424242;font-weight:300}@media(min-width:1200px){.library-item .card-body h4{font-size:1.6rem}}.library-item .card-body .headline{font-weight:700;color:#000}.library-item .card-body .btn-remove{background-color:unset;border:none;position:absolute;bottom:0;right:0;font-size:1.5rem}",""]),e.exports=r},599:function(e,t,o){"use strict";o.r(t);o(255),o(13),o(102),o(106),o(574),o(403);var r=o(25),n=o(218),l=o(205),c=o(206),d=r.default.extend({components:{BCard:l.a,BCardText:c.a},props:{book:{type:Object,default:function(){return{}}},headline:{type:Boolean,default:!1}},computed:{percentage:function(){var e;return(100*((null===(e=this.book.pagination.currentLocation)||void 0===e?void 0:e.end.percentage)||0)).toFixed()}},methods:{createObjectURL:URL.createObjectURL,remove:function(e){e.preventDefault(),e.stopPropagation(),confirm('Are you sure to remove "'.concat(this.book.title,'"?'))&&n.library.remove(this.book.id)}}}),m=(o(576),o(93)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-card",{staticClass:"library-item",attrs:{tag:"a",href:"/reader?id="+e.book.id,"img-src":e.createObjectURL(e.book.cover),"img-alt":e.book.title,"img-width":e.headline?"50%":"40%","img-right":e.headline,"img-left":!e.headline}},[o("b-card-text",[o("h4",{class:{headline:e.headline}},[e._v(e._s(e.book.title))]),e._v(" "),o("small",[e.percentage?o("kbd",[e._v(e._s(e.percentage)+"% read")]):e._e()]),e._v(" "),e.headline?e._e():o("button",{staticClass:"btn-remove",on:{click:function(t){return e.remove(t)}}},[e._v("\n      ×\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);