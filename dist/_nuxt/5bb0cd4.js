(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{225:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c}));n(8),n(4),n(20);var o=function(t){return new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(t).substring(1)},r=function(t,e){return t.filter((function(t){return t.category.id===Number(e)}))},c=function(t){var e=t[Math.floor(Math.random()*t.length)],n=t.filter((function(t){return t.id!==e.id})),o=n[Math.floor(Math.random()*n.length)];return[e,o]}},275:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0edae9fa",content,!0,{sourceMap:!1})},303:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5cb87f86",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";var o=n(497),r=n(505),c=n(486),l=n(504),d=n(507),m=n(503),h=n(218),f=n(142),v=n(116),x=n(502),_=n(506),y=n(500),C=n(499),k=n(498),w=n(488),O=(n(98),n(26),n(149),n(38),n(25)),j=(n(73),{name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,aboutList:[{text:"Giới thiệu",to:"/"},{text:"Triết lý kinh doanh",to:"/"},{text:"Tầm nhìn chiến lược",to:"/"},{text:"Liên hệ",to:"/"},{text:"Ý kiến khách hàng",to:"/"},{text:"Hoạt động công ty",to:"/"}],policies:[{text:"Hướng dẫn mua hàng",to:"/"},{text:"Hướng dẫn thanh toán",to:"/"},{text:"Chính sách vận chuyển",to:"/"},{text:"Chính sách đổi trả",to:"/"},{text:"Chính sách bảo mật",to:"/"},{text:"Điều khoản và điều kiện",to:"/"}],miniVariant:!1,search:""}},computed:{products:function(){return this.$store.state.products},categories:function(){return this.$store.state.categories.categories}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){this.$store.dispatch("products/fetchProducts",{}),this.$store.dispatch("categories/fetchCategories"),this.$store.dispatch("news/fetchNews")},methods:{handleScroll:function(){window.scrollY>160?this.fixed=!0:this.fixed=!1},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},handleSearch:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.search){e.next=4;break}return e.next=3,t.$store.dispatch("products/fetchProducts",{isSave:!1,searchParams:t.search||""});case 3:t.$router.push("/tim-kiem/?search=".concat(t.search));case 4:case"end":return e.stop()}}),e)})))()}}}),z=(n(460),n(101)),component=Object(z.a)(j,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"default-layout",attrs:{dark:""}},[e(k.a,{ref:"system-bar",class:["top-header",t.fixed?"-fixed elevation-3":""],attrs:{fixed:t.fixed,transition:"scroll-y-transition"}},[e("img",{staticClass:"app-logo",attrs:{src:n(394)},on:{click:function(e){return t.$router.push("/")}}}),t._v(" "),e("div",{staticClass:"search"},[e(w.a,{staticClass:"input",attrs:{label:"Tìm sản phẩm...",placeholder:"Tìm sản phẩm...",large:"",solo:"",clearable:"","hide-details":"auto"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch.apply(null,arguments)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(c.a,{staticClass:"btn",attrs:{color:"green darken-2"},on:{click:t.handleSearch}},[e("span",{staticClass:"mdi mdi-magnify"})])],1),t._v(" "),e("div",{staticClass:"text"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"mdi mdi-heart-circle"}),t._v("\n        Yêu thích\n      ")]),t._v(" "),e("div",{staticClass:"icon"},[e("span",{staticClass:"mdi mdi-truck"}),t._v("\n        Mua sỉ\n      ")])])]),t._v(" "),e(r.a,{staticClass:"nav-bar main-container",attrs:{"clipped-left":t.clipped,absolute:"",app:""}},[e(C.a),t._v(" "),e(y.a,{staticClass:"app-link",attrs:{align:"center"}},[e(_.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(c.a,t._g(t._b({staticClass:"menubtn",attrs:{color:"#fff",text:"","x-large":""}},"v-btn",r,!1),o),[e("div",{staticClass:"mdi mdi-menu-down text-large"}),t._v("\n            Danh mục\n          ")])]}}])},[t._v(" "),e(h.a,t._l(t.categories,(function(n,o){return e(f.a,{key:o,attrs:{to:"/danh-muc/".concat(n.id)}},[e(v.a,[e("span",{staticClass:"mdi mdi-menu-right"}),t._v(t._s(n.name))])],1)})),1)],1),t._v(" "),e(c.a,{staticClass:"text-btn",attrs:{color:"#fff",to:"/san-pham/",text:"","x-large":""}},[t._v("\n        Sản phẩm\n      ")]),t._v(" "),e(c.a,{staticClass:"text-btn",attrs:{color:"#fff",to:"/tin-tuc/",text:"","x-large":""}},[t._v("\n        Tin tức\n      ")]),t._v(" "),e(c.a,{staticClass:"text-btn",attrs:{color:"#fff",to:"/lien-he/",text:"","x-large":""}},[t._v("\n        Liên hệ\n      ")])],1),t._v(" "),e(C.a),t._v(" "),e(C.a),t._v(" "),e(C.a)],1),t._v(" "),e(x.a,[e(d.a,{staticClass:"pb-8"},[e("Nuxt")],1)],1),t._v(" "),e(m.a,{staticClass:"layout-footer",attrs:{absolute:!0,app:""}},[e(y.a,{staticClass:"message main-container",attrs:{justify:"center"}},[e(l.a,{staticClass:"text-large",attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"flex-center gap-3"},[e("span",{staticClass:"icon mdi mdi-thumb-up-outline"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title mb-2"},[t._v("Uy tín hàng đầu")]),t._v(" "),e("div",{staticClass:"text-normal text-body-2"},[t._v("\n              Thành lập hơn 5 Năm, đã phục vụ hơn 300.000 khách hàng trên cả\n              nước...\n            ")])])])]),t._v(" "),e(l.a,{staticClass:"text-large",attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"flex-center gap-3"},[e("span",{staticClass:"icon mdi mdi-truck-delivery"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title mb-2"},[t._v("Giao hàng nhanh chóng")]),t._v(" "),e("div",{staticClass:"text-normal text-body-2"},[t._v("\n              Giao hàng 24h trong nội thành và giao hàng qua bưu điện ở tỉnh\n              khác...\n            ")])])])]),t._v(" "),e(l.a,{staticClass:"text-large",attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"flex-center gap-3"},[e("span",{staticClass:"icon mdi mdi-tea-outline"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title mb-2"},[t._v("Sản phẩm đa dạng")]),t._v(" "),e("div",{staticClass:"text-normal text-body-2"},[t._v("\n              Cung cấp tất cả các loại tinh bột, thảo dược, bột trà xanh, mầm\n              đậu nành...\n            ")])])])])],1),t._v(" "),e(y.a,{staticClass:"contact main-container",attrs:{justify:"center"}},[e(l.a,{staticClass:"text-large",attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"text-subtitle-2 mb-2"},[t._v("LIÊN HỆ")]),t._v(" "),e("div",{staticClass:"text-h6 font-bold mb-2"},[t._v("TRÀ HOA NHÀ MỘC")]),t._v(" "),e("div",{staticClass:"text-normal mb-2"},[e("span",{staticClass:"font-bold"},[t._v("Địa chỉ: ")]),t._v("505 Trần Khát Chân – Thanh\n            Nhàn – HBT – HN\n          ")]),t._v(" "),e("div",{staticClass:"text-normal mb-2"},[e("span",{staticClass:"font-bold"},[t._v("Số điện thoại: ")]),t._v("0923.456.789\n          ")])])]),t._v(" "),e(l.a,{staticClass:"text-large",attrs:{cols:"12",sm:"6"}},[e(y.a,[e(l.a,{attrs:{cols:"6",sm:"6"}},[e("div",{staticClass:"text-subtitle-2 mb-2"},[t._v("VỀ CHÚNG TÔI")]),t._v(" "),e(h.a,{staticClass:"about-list"},t._l(t.aboutList,(function(n,o){return e(f.a,{key:o,staticClass:"padding-0 height-normal item",attrs:{to:n.to}},[e(v.a,{staticClass:"text-color-main text-normal"},[e("span",{staticClass:"mdi mdi-menu-right"}),t._v(t._s(n.text))])],1)})),1)],1),t._v(" "),e(l.a,{attrs:{cols:"6",sm:"6"}},[e("div",{staticClass:"text-subtitle-2 mb-2"},[t._v("CHÍNH SÁCH")]),t._v(" "),e(h.a,{staticClass:"about-list"},t._l(t.policies,(function(n,o){return e(f.a,{key:o,staticClass:"padding-0 height-normal item",attrs:{to:n.to}},[e(v.a,{staticClass:"text-color-main text-normal"},[e("span",{staticClass:"mdi mdi-menu-right"}),t._v(t._s(n.text))])],1)})),1)],1)],1)],1)],1),t._v(" "),e(y.a,{staticClass:"other main-container w-full",attrs:{justify:"center"}},[e(l.a,{staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"text-subtitle-2"},[t._v("PHƯƠNG THỨC THANH TOÁN")]),t._v(" "),e(y.a,[e(l.a,{attrs:{cols:"2"}},[e("img",{attrs:{src:n(453)}})]),t._v(" "),e(l.a,{attrs:{cols:"2"}},[e("img",{attrs:{src:n(454)}})]),t._v(" "),e(l.a,{attrs:{cols:"2"}},[e("img",{attrs:{src:n(455)}})]),t._v(" "),e(l.a,{attrs:{cols:"2"}},[e("img",{attrs:{src:n(456)}})]),t._v(" "),e(l.a,{attrs:{cols:"2"}},[e("img",{attrs:{src:n(457)}})])],1)],1),t._v(" "),e(l.a,{staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"text-subtitle-2"},[t._v("DỊCH VỤ GIAO HÀNG")]),t._v(" "),e(y.a,[e(l.a,{attrs:{cols:"6"}},[e("img",{attrs:{src:n(458)}})]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("img",{attrs:{src:n(459)}})])],1)],1),t._v(" "),e(l.a,{staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"text-subtitle-2 mb-2"},[t._v("KÊNH TRUYỀN THÔNG")]),t._v(" "),e(y.a,{staticClass:"gap-3 social-media",attrs:{justify:"center"}},[e("nuxt-link",{attrs:{to:"/",target:"_blank"}},[e("span",{staticClass:"mdi mdi-facebook text-large item"})]),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("span",{staticClass:"mdi mdi-twitter text-large item"})]),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("span",{staticClass:"mdi mdi-google-plus text-large item"})]),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("span",{staticClass:"mdi mdi-youtube text-large item"})])],1)],1)],1),t._v(" "),e(y.a,{staticClass:"flex-center"},[e(l.a,{attrs:{cols:"12"}},[e("p",{staticClass:"text-normal text-center"},[t._v("\n          © 2019 của Trà Hoa Nhà Mộc "),e("br"),t._v("Giấy chứng nhận cơ sở đủ điều kiện\n          an toàn thực phẩm"),e("br"),t._v("Sản Phẩm không phải đúng với tất cả mọi\n          người, tùy vào mỗi cơ địa sẽ có những mức tác dụng khác nhau"),e("br"),t._v("Nội\n          dung được đăng tải lên website chỉ mang tính chất tham khảo\n        ")])])],1),t._v(" "),e("a",{staticClass:"hotline",attrs:{title:"hotline",href:"tel:0923456789"}},[e("span",{staticClass:"pc"},[t._v("Hotline 092.345.6789")]),t._v(" "),e("span",{staticClass:"mdi mdi-phone mobile text-normal"},[t._v("Hotline")])]),t._v(" "),e("a",{staticClass:"zalo",attrs:{title:"zalo",href:"https://zalo.me/0923456789",target:"_blank"}},[e("span",{staticClass:"pc"},[t._v("Zalo 092.345.6789")]),t._v(" "),e("span",{staticClass:"mdi mdi-phone mobile text-normal"},[t._v("Zalo")])]),t._v(" "),e("div",{staticClass:"pagetop",on:{click:t.scrollToTop}},[e("span",{staticClass:"mdi mdi-arrow-up-bold text-large btn"})])],1)],1)}),[],!1,null,"ae7c4216",null);e.a=component.exports},320:function(t,e,n){n(321),t.exports=n(322)},370:function(t,e,n){"use strict";n(275)},371:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),o.locals={},t.exports=o},374:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("66c386b5",content,!0,{sourceMap:!1})},375:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,"*{margin:0;padding:0}body{word-break:break-word!important}.v-card{cursor:pointer}.break-word{word-break:break-word}.main-container{padding:0 10%}.text-color-main{color:#2e7d32}.text-large{font-size:24px!important}.text-normal{font-size:16px!important}.text-small{font-size:12px!important}.v-list-item{background-color:#fff}.v-list-item:before{background-color:#fff!important}.flex-center{align-items:center;display:flex;justify-content:center}.gap-3{gap:3%}.gap-5{gap:5%}.gap-8{gap:8%}.font-bold{font-weight:700}.padding-0{padding:0!important}.w-full{width:100%}.text-center{text-align:center}.product-container button.v-carousel__controls__item.v-btn--round.theme--dark.v-size--small,.product-container i.v-icon.notranslate.mdi.mdi-circle.theme--dark{color:#4e342e}.sub-product .v-carousel__controls{display:none}.link{-webkit-text-decoration:none;text-decoration:none}.link:hover{-webkit-text-decoration:underline;text-decoration:underline}.block{display:block}.v-image{cursor:pointer}.product-container>.title{border-bottom:1px solid #f34407;margin-right:20px}.product-container>.title>.text{background:#f34407;border-bottom-right-radius:36px;border-top-right-radius:36px;color:#fff;cursor:pointer;padding:12px 15px;width:-moz-fit-content;width:fit-content}.product-container .card-item{cursor:pointer;width:250px}.product-container .card-item .v-image{height:200px}.product-container .card-item:hover{transform:scale(1.05);transition:all .5s}.product-container .card-item .title{color:#4e342e;display:block;font-size:15px!important;text-align:center;word-break:break-word}.product-container .card-item .subtitle{color:red!important;display:block;font-size:16px!important;font-weight:900;text-align:center}.sub-product .title{border-bottom-color:#388e3c}.sub-product .title>.text{background-color:#388e3c}.app-link .v-btn:not(.v-btn--round).v-size--x-large{width:20%}@media only screen and (min-width:768px){.pc{display:block}.mobile{display:none}}@media only screen and (max-width:767px){.pc{display:none}.mobile{display:block}.product-container i.v-icon.notranslate.mdi.mdi-circle.theme--dark{font-size:12px!important}.product-container button.v-carousel__controls__item.v-btn--round.theme--dark.v-size--small{height:14px!important;width:14px!important}.product-container .card-item{width:175px}.product-container .card-item .v-image{height:150px}.product-container .card-item .title{font-size:13px!important}}",""]),o.locals={},t.exports=o},394:function(t,e,n){t.exports=n.p+"img/app-logo.47dff84.png"},453:function(t,e,n){t.exports=n.p+"img/pay-5.506d416.png"},454:function(t,e,n){t.exports=n.p+"img/pay-1.52daf14.png"},455:function(t,e,n){t.exports=n.p+"img/pay-2.3ca3d04.png"},456:function(t,e,n){t.exports=n.p+"img/pay-3.fcd6958.png"},457:function(t,e,n){t.exports=n.p+"img/pay-4.a860399.png"},458:function(t,e,n){t.exports=n.p+"img/logo-giao-hang-nhanh.9b9bd56.png"},459:function(t,e,n){t.exports=n.p+"img/logo-vietnam-post.c1f5d3a.png"},460:function(t,e,n){"use strict";n(303)},461:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,".top-header[data-v-ae7c4216]{background-color:#f5f5f5;display:flex;height:100px!important;padding:0 10%;z-index:4}.top-header.-fixed[data-v-ae7c4216]{animation:stuckMoveDown-ae7c4216 .6s;border-bottom:1px solid #ececec}.top-header>.text[data-v-ae7c4216]{color:#2e7d32;display:flex;gap:32px;justify-content:center}.top-header>.text>.icon[data-v-ae7c4216]{font-size:24px;gap:4px}.top-header>.search[data-v-ae7c4216],.top-header>.text>.icon[data-v-ae7c4216]{display:flex;justify-content:center}.top-header>.search>.input[data-v-ae7c4216]{border-bottom-right-radius:0;border-top-right-radius:0}.top-header>.search>.btn[data-v-ae7c4216]{border-bottom-left-radius:0;border-top-left-radius:0;color:#fff;font-size:24px;height:48px;min-width:0;min-width:auto;width:48px}.nav-bar[data-v-ae7c4216]{background-color:#388e3c!important;color:#fff!important;margin-top:5px!important;top:95px}.app-link .v-btn[data-v-ae7c4216]{margin-right:5px}.menubtn[data-v-ae7c4216]{width:30%!important}.about-list .item[data-v-ae7c4216]{min-height:36px!important}.about-list .item[data-v-ae7c4216]:hover{-webkit-text-decoration:underline;text-decoration:underline;text-decoration-color:#2e7d32}.layout-footer .icon[data-v-ae7c4216]{border:1px solid #2e7d32;border-radius:60%;color:#2e7d32;padding:14px 20px}.layout-footer .message[data-v-ae7c4216]{border-top:1px solid #ececec}.layout-footer .contact[data-v-ae7c4216],.layout-footer .message[data-v-ae7c4216]{background-color:#fff}.layout-footer .contact[data-v-ae7c4216],.layout-footer .message[data-v-ae7c4216],.layout-footer .other[data-v-ae7c4216]{border-bottom:1px solid #ececec;padding-bottom:5px;padding-top:5px}.layout-footer .pagetop[data-v-ae7c4216]{bottom:130px;position:fixed;right:20px}.layout-footer .pagetop>.btn[data-v-ae7c4216]{background-color:#2e7d32;border:1px solid #2e7d32;border-radius:10px;color:#fff;cursor:pointer;opacity:.7;padding:3px 4px}.layout-footer .pagetop>.btn[data-v-ae7c4216]:hover{opacity:1}.layout-footer .hotline[data-v-ae7c4216]{border:1px dotted #e53935;border-radius:30px;bottom:10px;color:#e53935;font-size:20px;opacity:.5;padding:5px 12px;position:fixed;right:10px;-webkit-text-decoration:none;text-decoration:none}.layout-footer .hotline[data-v-ae7c4216]:hover{opacity:.8}.layout-footer .zalo[data-v-ae7c4216]{border:1px dotted #1e88e5;border-radius:30px;bottom:70px;color:#1e88e5;font-size:20px;opacity:.5;padding:5px 12px;position:fixed;right:10px;-webkit-text-decoration:none;text-decoration:none}.layout-footer .zalo[data-v-ae7c4216]:hover{opacity:.8}.social-media .item[data-v-ae7c4216]{display:block;transition:.3s ease-in-out}.social-media .item[data-v-ae7c4216]:hover{transform:translateY(-5px)}@media only screen and (min-width:768px){.app-logo[data-v-ae7c4216]{cursor:pointer;height:auto;margin-left:-35px;margin-right:20px;width:140px}.top-header>.search[data-v-ae7c4216]{margin-right:3%;width:55%}}@media only screen and (min-width:768px)and (max-width:1025px){.top-header>.search[data-v-ae7c4216]{margin-right:5%;width:75%}.top-header>.text[data-v-ae7c4216]{display:none}}@media only screen and (max-width:768px){.nav-bar.main-container[data-v-ae7c4216]{padding:0 2%}.app-logo[data-v-ae7c4216]{height:auto;margin-left:-25px;margin-right:-25px;width:120px}.top-header[data-v-ae7c4216]{gap:5%}.top-header>.text[data-v-ae7c4216]{display:none}.top-header>.search[data-v-ae7c4216]{font-size:12px}.app-link .v-btn:not(.v-btn--round).v-size--x-large[data-v-ae7c4216]{width:20%}.app-link .text-btn[data-v-ae7c4216]{font-size:12px;min-width:0;min-width:auto;width:20%!important}.app-link>.menubtn[data-v-ae7c4216]{font-size:12px;margin-right:20px}.layout-footer .zalo[data-v-ae7c4216]{bottom:50px}.layout-footer .pagetop[data-v-ae7c4216]{bottom:92px}.layout-footer .pagetop>.btn[data-v-ae7c4216]{padding:5px}}@keyframes stuckMoveDown-ae7c4216{0%{transform:translateY(-100%)}to{transform:translateY(0)}}",""]),o.locals={},t.exports=o},462:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o}));var o=function(){return{}}},463:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));var o=n(25),r=(n(73),function(){return{categories:[]}}),c={setCategories:function(t,e){t.categories=e}},l={fetchCategories:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,e.$axios.$get("".concat(e.$config.baseUrl,"categories/"));case 3:return r=n.sent,o("setCategories",r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))()}}},464:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));var o=n(25),r=(n(73),function(){return{news:[]}}),c={setNews:function(t,e){t.news=e}},l={fetchNews:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,e.$axios.$get("".concat(e.$config.baseUrl,"news/"));case 3:return r=n.sent,c=r.results,o("setNews",c),n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})))()}}},465:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return m})),n.d(e,"mutations",(function(){return h})),n.d(e,"actions",(function(){return f}));var o=n(2),r=n(25),c=(n(73),n(28),n(64),n(9),n(11),n(8),n(4),n(15),n(12),n(16),n(225));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=function(){return{products:[],searchingProducts:[]}},h={setProducts:function(t,e){t.products=e},setSearchingProducts:function(t,e){t.searchingProducts=e}},f={fetchProducts:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,l,m,h,f,v,x,_,y,C,k,w,O;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t.commit,l=e.searchParams,m=void 0===l?"":l,h=e.page,f=void 0===h?1:h,v=e.limit,x=void 0===v?1e3:v,_=e.isSave,y=void 0===_||_,C=m?"".concat(n.$config.baseUrl,"products/?search=").concat(m,"&page=").concat(f,"&limit=").concat(x):"".concat(n.$config.baseUrl,"products/?page=").concat(f,"&page_size=").concat(x),o.next=5,n.$axios.$get(C);case 5:return k=o.sent,w=k.results,O=w.map((function(t){return d(d({},t),{},{price:Object(c.a)(t.price),priceValue:t.price})})),r(y?"setProducts":"setSearchingProducts",O),o.abrupt("return",O);case 10:case"end":return o.stop()}}),o)})))()}}},92:function(t,e,n){"use strict";var o=n(497),r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(370),n(101)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports}},[[320,12,2,13]]]);