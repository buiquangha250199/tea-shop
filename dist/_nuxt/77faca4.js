(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{522:function(t,e,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5d3aa0a7",content,!0,{sourceMap:!1})},524:function(t,e,n){"use strict";n(522)},525:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".news-img[data-v-83a54074]{display:block;margin:auto}.title[data-v-83a54074]{border-bottom:1px solid #2e7d32;display:block;font-size:15px!important;word-break:break-word}.title[data-v-83a54074]:hover{-webkit-text-decoration:none;text-decoration:none}.title>.text[data-v-83a54074]{background-color:#2e7d32;border-bottom-right-radius:36px;border-top-right-radius:36px;color:#fff;padding:10px 16px;width:100px}.content[data-v-83a54074]{background-color:#fff;border-radius:10px;cursor:pointer;padding:5px 12px}.content>.link[data-v-83a54074]{color:#2e7d32;font-weight:700!important}.news-item[data-v-83a54074]{display:flex;gap:5%;margin-bottom:12px}.news-item>.link[data-v-83a54074]{color:#2e7d32}.embed-responsive[data-v-83a54074]{display:block;overflow:hidden;padding:0;position:relative;width:100%}@media only screen and (max-width:767px){.embed-responsive[data-v-83a54074]{text-align:center}}",""]),r.locals={},t.exports=r},533:function(t,e,n){var content=n(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("16bc095c",content,!0,{sourceMap:!1})},534:function(t,e,n){"use strict";n.r(e);var r=n(515),o=n(513),c=n(510),l=n(321),d=n(505),m=(n(42),{props:{news:{type:Array,default:function(){return[]}}},computed:{subNews:function(){return this.news.slice(1,5)}}}),h=(n(524),n(101)),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e(d.a,{staticClass:"container"},[e(c.a,{attrs:{cols:"12",md:"8"}},[e("nuxt-link",{staticClass:"link title mb-5",attrs:{to:"/tin-tuc"}},[e("div",{staticClass:"text"},[t._v("Tin tức")])]),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"12",md:"4"}},[t.news.length>0?e(r.a,{staticClass:"card-item",on:{click:function(e){var n;return t.$router.push("/tin-tuc/".concat(null===(n=t.news[0])||void 0===n?void 0:n.slug))}}},[e(l.a,{staticClass:"news-img",attrs:{"max-height":"200px",src:t.news[0].thumbnail,cover:""}}),t._v(" "),e(o.c,{staticClass:"ctitle"},[t._v(" "+t._s(t.news[0].title))])],1):t._e()],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"8"}},t._l(t.subNews,(function(n){return e("div",{key:n.id,staticClass:"news-item"},[e("img",{staticStyle:{cursor:"pointer"},attrs:{src:"".concat(n.thumbnail),width:"120"},on:{click:function(e){return t.$router.push("/tin-tuc/".concat(null==n?void 0:n.slug))}}}),t._v(" "),e("nuxt-link",{staticClass:"link block",attrs:{to:"/tin-tuc/".concat(null==n?void 0:n.slug)}},[t._v(t._s(n.title))])],1)})),0)],1)],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"link title mb-5"},[e("div",{staticClass:"text"},[t._v("Video")])]),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"12"}},[e("div",{staticClass:"embed-responsive embed-responsive-4by3 mb-5"},[e("iframe",{attrs:{width:"320",height:"250",src:"https://www.youtube.com/embed/6myMryDIVCk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""}})])])],1)],1)],1)}),[],!1,null,"83a54074",null);e.default=component.exports},598:function(t,e,n){"use strict";n(533)},599:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".category-item[data-v-ec30e26e]{border-bottom:1px solid rgba(0,0,0,.102);color:#2e7d32;display:block;margin-bottom:10px;padding-bottom:10px}.v-carousel__item[data-v-ec30e26e]{height:auto!important}.banner-img[data-v-ec30e26e]{-o-object-fit:cover;object-fit:cover;width:-webkit-fill-available}.item-card-image[data-v-ec30e26e]:last-child{margin-right:0}@media only screen and (min-width:768px)and (max-width:1025px){.sp[data-v-ec30e26e]{display:none}}@media only screen and (min-width:600px)and (max-width:767px){.v-carousel__item[data-v-ec30e26e]{height:200px!important}.banner-img[data-v-ec30e26e]{max-height:200px;-o-object-fit:cover;object-fit:cover;width:100%}}@media only screen and (max-width:1024px){.product-container[data-v-ec30e26e]{margin-bottom:0!important}}",""]),r.locals={},t.exports=r},613:function(t,e,n){"use strict";n.r(e);var r=n(493),o=n(515),c=n(513),l=n(616),d=n(617),m=n(510),h=n(321),v=n(505),f=(n(38),n(8),n(4),n(42),n(228)),w={name:"IndexPage",data:function(){return{images:["img-1.png","img-2.png","img-3.png","img-4.png"]}},computed:{columns:function(){return this.$vuetify.breakpoint.xl?4:this.$vuetify.breakpoint.lg?this.teaProducts.length<=6?3:4:this.$vuetify.breakpoint.md?4:1},imgSize1:function(){var t=.7*window.screen.width*.9/4;return this.$vuetify.breakpoint.xl?{w:t,h:.8*t}:this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.md?{w:t,h:1.1*t}:110},imgSize2:function(){var t=.7*window.screen.width*.9/4;return this.$vuetify.breakpoint.xl?{w:t,h:.9*t}:this.$vuetify.breakpoint.lg?{w:t,h:1*t}:this.$vuetify.breakpoint.md?{w:t,h:t}:150},imgSize:function(){return this.$vuetify.breakpoint.xl||this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.md,.7*window.screen.width*.9/4},cSize:function(){return this.$vuetify.breakpoint.xl?325:this.$vuetify.breakpoint.lg?290:(this.$vuetify.breakpoint.md,250)},subColumns:function(){return this.$vuetify.breakpoint.xl||this.$vuetify.breakpoint.lg?4:this.$vuetify.breakpoint.md?2:1},categories:function(){return this.$store.state.categories.categories},banners:function(){return this.$store.state.banners.banners||this.images},products:function(){return this.$store.state.products.products},news:function(){return this.$store.state.news.news},info:function(){return this.$store.state.info.info},teaProducts:function(){var t=this.products.length?this.products.filter((function(t){return 1===t.category.id})):[];return t.length>12?t.slice(0,12):t.length<12&&t.length>=8?t.slice(0,8):t},firstProducts:function(){var t,e=this.categories.length?null===(t=this.categories[0])||void 0===t?void 0:t.id:0,n=Object(f.c)(this.products,e),r=n.length>=4?4:n.length;return n.slice(0,r)},sub1Products:function(){var t,e=this.categories.length>=2?null===(t=this.categories[1])||void 0===t?void 0:t.id:0,n=Object(f.c)(this.products,e),r=n.length>=4?4:n.length;return n.slice(0,r)},sub2Products:function(){var t,e=this.categories.length>=3?null===(t=this.categories[2])||void 0===t?void 0:t.id:0,n=Object(f.c)(this.products,e),r=n.length>=4?4:n.length;return n.slice(0,r)}}},_=(n(598),n(101)),component=Object(_.a)(w,(function(){var t,e,n,f,w=this,_=w._self._c;return _(v.a,{staticClass:"mb-8 mt-2",attrs:{justify:"center"}},[null!==(t=w.categories)&&void 0!==t&&t.length?_(m.a,{staticClass:"pc",attrs:{cols:"12",sm:"3"}},[_("div",{staticClass:"text-h5 mb-4"},[w._v("Danh mục sản phẩm")]),w._v(" "),w._l(w.categories,(function(t){return _("nuxt-link",{key:t.id,staticClass:"category-item link",attrs:{to:"danh-muc/".concat(t.id)}},[_("span",{staticClass:"mdi mdi-arrow-right-bold-circle mr-2 warning--text"}),w._v(w._s(t.name)+"\n    ")])}))],2):w._e(),w._v(" "),_(m.a,{staticClass:"mb-4",attrs:{cols:"12",sm:"9"}},[_(l.a,{attrs:{cycle:"",interval:"3000","hide-delimiter-background":"","show-arrows-on-hover":"","delimiter-icon":"mdi-minus"}},w._l(w.banners,(function(t,e){return _(d.a,{key:e},[_("img",{staticClass:"banner-img",attrs:{src:t.image}})])})),1)],1),w._v(" "),w.categories.length?_(m.a,{staticClass:"product-container sub-product mb-8",attrs:{cols:"12"}},[_("div",{staticClass:"title mb-6"},[_("div",{staticClass:"text",on:{click:function(t){var e;return w.$router.push("/danh-muc/".concat(null===(e=w.categories[0])||void 0===e?void 0:e.id))}}},[w._v("\n        "+w._s((null===(e=w.categories[0])||void 0===e?void 0:e.name)||"Sản phẩm")+"\n      ")])]),w._v(" "),_(v.a,w._l(w.firstProducts,(function(t,e){return _(m.a,{key:e,attrs:{cols:"6",sm:"3"}},[_(o.a,{staticClass:"card-item",staticStyle:{margin:"auto"},attrs:{width:w.imgSize2.w},on:{click:function(e){return w.$router.push("/san-pham/".concat(t.id))}}},[_(h.a,{staticStyle:{margin:"auto","border-radius":"0"},attrs:{src:t.thumbnail,height:.75*w.imgSize2.h,width:.75*w.imgSize2.w}}),w._v(" "),_(c.c,{staticClass:"ctitle index-card"},[w._v("\n            "+w._s(t.name)+"\n            "),_(c.a,{staticClass:"subtitle"},[w._v("\n              "+w._s(t.price)+"₫ /"+w._s(t.unit)+"\n            ")])],1)],1)],1)})),1),w._v(" "),_(v.a,{staticStyle:{"text-align":"center"}},[_(m.a,[_(r.a,{attrs:{to:"/danh-muc/1",color:"green darken-2",dark:"",large:""}},[w._v("\n          Xem tất cả "),_("span",{staticClass:"mdi mdi-arrow-right-thick"})])],1)],1)],1):w._e(),w._v(" "),w.categories.length>1?_(m.a,{staticClass:"product-container sub-product mb-8",attrs:{cols:"12"}},[_("div",{staticClass:"title mb-6"},[_("div",{staticClass:"text",on:{click:function(t){var e;return w.$router.push("/danh-muc/".concat(null===(e=w.categories[1])||void 0===e?void 0:e.id))}}},[w._v("\n        "+w._s((null===(n=w.categories[1])||void 0===n?void 0:n.name)||"Sản phẩm")+"\n      ")])]),w._v(" "),_(v.a,w._l(w.sub1Products,(function(t,e){return _(m.a,{key:e,attrs:{cols:"6",sm:"3"}},[_(o.a,{staticClass:"card-item",staticStyle:{margin:"auto"},attrs:{width:w.imgSize2.w},on:{click:function(e){return w.$router.push("/san-pham/".concat(t.id))}}},[_(h.a,{staticStyle:{margin:"auto","border-radius":"0"},attrs:{src:t.thumbnail,height:.75*w.imgSize2.h,width:.75*w.imgSize2.w}}),w._v(" "),_(c.c,{staticClass:"ctitle"},[w._v("\n            "+w._s(t.name)+"\n            "),_(c.a,{staticClass:"subtitle"},[w._v("\n              "+w._s(t.price)+"₫ /"+w._s(t.unit)+"\n            ")])],1)],1)],1)})),1),w._v(" "),_(v.a,{staticStyle:{"text-align":"center"}},[_(m.a,[_(r.a,{attrs:{to:"/danh-muc/2",color:"green darken-2",dark:"",large:""}},[w._v("\n          Xem tất cả "),_("span",{staticClass:"mdi mdi-arrow-right-thick"})])],1)],1)],1):w._e(),w._v(" "),w.categories.length>2?_(m.a,{staticClass:"product-container sub-product mb-8",attrs:{cols:"12"}},[_("div",{staticClass:"title mb-6"},[_("div",{staticClass:"text",on:{click:function(t){return w.$router.push("/danh-muc/".concat(w.categories[2].id))}}},[w._v("\n        "+w._s((null===(f=w.categories[2])||void 0===f?void 0:f.name)||"Sản phẩm")+"\n      ")])]),w._v(" "),_(v.a,w._l(w.sub2Products,(function(t,e){return _(m.a,{key:e,attrs:{cols:"6",sm:"3"}},[_(o.a,{staticClass:"card-item",staticStyle:{margin:"auto"},attrs:{width:w.imgSize2.w},on:{click:function(e){return w.$router.push("/san-pham/".concat(t.id))}}},[_(h.a,{staticStyle:{margin:"auto","border-radius":"0"},attrs:{src:t.thumbnail,height:.75*w.imgSize2.h,width:.75*w.imgSize2.w}}),w._v(" "),_(c.c,{staticClass:"ctitle"},[w._v("\n            "+w._s(t.name)+"\n            "),_(c.a,{staticClass:"subtitle"},[w._v("\n              "+w._s(t.price)+"₫ /"+w._s(t.unit)+"\n            ")])],1)],1)],1)})),1),w._v(" "),_(v.a,{staticStyle:{"text-align":"center"}},[_(m.a,[_(r.a,{attrs:{to:"/danh-muc/3",color:"green darken-2",dark:"",large:""}},[w._v("\n          Xem tất cả "),_("span",{staticClass:"mdi mdi-arrow-right-thick"})])],1)],1)],1):w._e(),w._v(" "),_("home-news-section",{attrs:{news:w.news}})],1)}),[],!1,null,"ec30e26e",null);e.default=component.exports;installComponents(component,{HomeNewsSection:n(534).default})}}]);