(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{530:function(t,n,e){var content=e(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("98910038",content,!0,{sourceMap:!1})},589:function(t,n,e){"use strict";e(530)},590:function(t,n,e){var r=e(17)((function(i){return i[1]}));r.push([t.i,"[data-v-175b1c3f].v-input__slot{box-shadow:none!important}.img-hover[data-v-175b1c3f]{cursor:pointer}.img-hover[data-v-175b1c3f]:hover{transform:scale(1.1)}.card-title[data-v-175b1c3f]{display:block;font-size:14px;padding:5px!important;text-align:center}.options[data-v-175b1c3f]{border:1px solid;border-radius:5px;padding:10px}.product-container .v-card[data-v-175b1c3f]{width:80%!important}.flex-center .input[data-v-175b1c3f]{border-bottom-right-radius:0;border-top-right-radius:0;outline:1px solid #c62828}.flex-center .btn[data-v-175b1c3f]{border-bottom-left-radius:0;border-top-left-radius:0;color:#fff}.price-chip[data-v-175b1c3f]{padding:0 20px}",""]),r.locals={},t.exports=r},608:function(t,n,e){"use strict";e.r(n);var r=e(493),o=e(515),c=e(513),l=e(510),d=e(512),m=e(611),h=e(321),v=e(218),f=e(142),_=e(612),x=e(601),C=e(505),k=e(602),$=e(600),y=e(492),w=e(599),T=(e(38),e(11),e(68),e(20)),S=(e(65),e(125),e(4),e(21),e(59),e(526)),D=e(228),N=e(528).required,V={mixins:[S.validationMixin],data:function(){return{amount:10,name:null,contactTel:"",tel:null,address:null,description:"",dialog:!1,loading:!1,snackbar:!1,loadingBtn:!1,messageSnackbar:"",quantity:"",selection:{unit:"gói",price:6e5},images:[{name:"image1",url:"http://54.255.46.159:8000/media/products/thumbnails/tra-hoa-qua-dau-biec-3-1024x1024.png"},{name:"image2",url:"http://54.255.46.159:8000/media/products/thumbnails/tra-hoa-qua-dau-biec-3-1024x1024.png"},{url:"http://54.255.46.159:8000/media/products/thumbnails/tra-hoa-qua-dau-biec-3-1024x1024.png"}]}},validations:{selection:{required:N},contactTel:{required:N},name:{required:N},tel:{required:N},address:{required:N}},computed:{amountErrors:function(){var t=[];return this.$v.selection.$dirty?(!this.$v.selection.required&&t.push("Vui lòng chọn giá trị"),t):t},contactTelErrors:function(){var t=[];return this.$v.contactTel.$dirty?(!this.$v.contactTel.required&&t.push("Vui lòng nhập giá trị"),t):t},productDetail:function(){var t=this;return this.products.find((function(n){return n.id===Number(t.$route.params.id)}))},products:function(){return this.$store.state.products.products},info:function(){return this.$store.state.info.info},productImages:function(){var t,n;return null!==(t=this.productDetail)&&void 0!==t&&t.images.length?null===(n=this.productDetail)||void 0===n?void 0:n.images.map((function(t,n){return{name:"image-".concat(n),url:t.image}})):[]},items:function(){var t,n;return[{text:"Trang chủ",disabled:!1,href:"/"},{text:"Sản phẩm",disabled:!1,href:"/san-pham/"},{text:(null===(t=this.productDetail)||void 0===t?void 0:t.name)||"Product",disabled:!0,href:"/san-pham/".concat(null===(n=this.productDetail)||void 0===n?void 0:n.id)}]},number:function(){return Math.floor(26*Math.random()+75)},randomProducts:function(){return Object(D.d)(this.products)}},watch:{productImages:function(t,n){0===n.length&&t.length>0&&this.$imageViewer.images(this.productImages)}},created:function(){this.$imageViewer.images(this.productImages)},methods:{formatNumber:D.b,imageView:function(t){this.$imageViewer.index(t),this.$imageViewer.show()},openDialog:function(){var t=this;this.selection=this.quantity?this.productDetail.options.find((function(option){return option.unit===t.quantity})):{unit:"gói",price:"30.000"},this.dialog=!0},getErrors:function(t){var n=[];return this.$v[t].$dirty?(this.$v[t].required||n.push("Vui lòng nhập giá trị"),n):n},submit:function(){var t=this;return Object(T.a)(regeneratorRuntime.mark((function n(){var body;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return body={name:t.name,address:t.address,phone_number:t.tel,quantity:t.selection.unit,price:t.selection.price,product:t.productDetail.id},n.next=3,t.$axios.$post("".concat(t.$config.baseUrl,"orders"),body);case 3:n.sent&&(t.messageSnackbar="Đặt hàng thành công!",t.snackbar=!0,t.dialog=!1);case 5:case"end":return n.stop()}}),n)})))()},sendContactTel:function(){var t=this;return Object(T.a)(regeneratorRuntime.mark((function n(){var body;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.contactTel){n.next=2;break}return n.abrupt("return");case 2:return t.loadingBtn=!0,body={phone_number:t.contactTel},n.next=6,t.$axios.$post("".concat(t.$config.baseUrl,"customers"),body);case 6:n.sent&&(t.messageSnackbar="Yêu cầu thành công! \nChúng tôi sẽ liên hệ trong thời gian sớm nhất.",t.loadingBtn=!1,t.snackbar=!0,t.contactTel="");case 8:case"end":return n.stop()}}),n)})))()}}},E=(e(589),e(101)),component=Object(E.a)(V,(function(){var t,n,e,T,S,D,N,V,E=this,I=E._self._c;return I("div",[I(C.a,{staticClass:"mb-8"},[I(l.a,{attrs:{cols:"12",md:"9"}},[I(C.a,[I(l.a,{attrs:{cols:"12",md:"5"}},[I(h.a,{staticClass:"mb-4",attrs:{"max-height":"300px",src:null===(t=E.productDetail)||void 0===t?void 0:t.thumbnail,cover:""}}),E._v(" "),E._l(E.productImages,(function(t,n){return I("img",{key:n,staticClass:"img-hover",staticStyle:{"margin-right":"10px"},attrs:{src:t.url,width:"60",height:"60"},on:{click:function(t){return E.imageView(n)}}})}))],2),E._v(" "),I(l.a,{attrs:{cols:"12",md:"7"}},[I("div",{staticClass:"text-h5 font-weight-bold"},[E._v("\n            "+E._s(null===(n=E.productDetail)||void 0===n?void 0:n.name)+"\n          ")]),E._v(" "),I("div",{staticClass:"mt-4 mb-4 text-subtitle-1"},[E._v("\n            "+E._s(null===(e=E.productDetail)||void 0===e?void 0:e.description)+"\n          ")]),E._v(" "),I(x.a,{staticClass:"options",scopedSlots:E._u([{key:"label",fn:function(){return[I("div",[E._v("Hãy chọn "),I("strong",[E._v("loại sản phẩm:")])])]},proxy:!0}]),model:{value:E.quantity,callback:function(t){E.quantity=t},expression:"quantity"}},[E._v(" "),E._l(null===(T=E.productDetail)||void 0===T?void 0:T.options,(function(option,t){return I(_.a,{key:t,attrs:{value:option.unit},scopedSlots:E._u([{key:"label",fn:function(){return[I("div",[I("strong",{staticClass:"success--text"},[E._v("Set "+E._s(option.unit))]),E._v(" "),I("strong",{staticClass:"error--text",staticStyle:{"font-size":"13px"}},[E._v("\n                    - Giá "+E._s(E.formatNumber(option.price))+"đ\n                  ")])])]},proxy:!0}],null,!0)})}))],2),E._v(" "),I("div",{staticClass:"mt-4 mb-4 text-subtitle-1 text-center"},[I("span",{staticClass:"mdi mdi-eye-check"}),E._v(" "),I("strong",{staticClass:"error--text"},[E._v(E._s(E.number))]),E._v(" người đang xem\n            sản phẩm này\n          ")]),E._v(" "),I("div",{staticClass:"mt-4 mb-4 text-subtitle-1 text-center"},[I("div",{staticClass:"my-2"},[I(r.a,{attrs:{color:"warning",dark:"","x-large":"",width:"200px"},on:{click:E.openDialog}},[E._v("\n                Mua ngay\n              ")])],1)]),E._v(" "),I("div",{staticClass:"mt-4 mb-8 flex-center"},[I(y.a,{staticClass:"input elevation-0",attrs:{"error-messages":E.contactTelErrors,label:"Nhập số điện thoại để được tư vấn miễn phí...",placeholder:"Nhập số điện thoại để được tư vấn miễn phí...",large:"",solo:"",clearable:"","hide-details":""},on:{blur:function(t){return E.$v.contactTel.$touch()},input:function(t){return E.$v.contactTel.$touch()}},model:{value:E.contactTel,callback:function(t){E.contactTel=t},expression:"contactTel"}}),E._v(" "),I(r.a,{staticClass:"btn",attrs:{height:"50px",large:"",color:"#C62828",loading:E.loadingBtn},on:{click:E.sendContactTel}},[E._v("\n              Gửi\n            ")])],1),E._v(" "),I("div",{staticClass:"mt-4 mb-8 flex-center"},[I("div",{staticStyle:{"min-width":"25px"}},[E._v("Gọi")]),E._v(" "),I("a",{staticClass:"pl-2 pr-2",staticStyle:{color:"#c62828",display:"block"},attrs:{href:"tel:".concat(null===(S=E.info)||void 0===S?void 0:S.phone_number)}},[I("strong",[E._v(E._s(null===(D=E.info)||void 0===D?void 0:D.phone_number))])]),E._v("\n            để được tư vấn và mua hàng\n          ")]),E._v(" "),I("div",{staticClass:"mt-4 mb-4"},[I(o.a,{attrs:{title:"Card title",variant:"outlined"}},[I("v-card-item",{staticClass:"feature-card"},[I(c.c,{staticClass:"feature-title",staticStyle:{"background-color":"#388e3c",color:"#fff","font-size":"18px","word-break":"break-word"}},[E._v("CAM KẾT NGUỒN GỐC 100% TỪ THIÊN NHIÊN")]),E._v(" "),I(v.a,{attrs:{lines:"one"}},[I(f.a,{staticClass:"primary--text mb-n3"},[I("span",{staticClass:"mdi mdi-arrow-right-bold-circle warning--text mr-2"}),E._v("\n                    Chỉ phải\n                    "),I("strong",{staticClass:"ml-1"},[E._v("\n                      thanh toán sau khi nhận hàng")])]),E._v(" "),I(f.a,{staticClass:"primary--text mb-n3"},[I("strong",{staticClass:"mr-1"},[I("span",{staticClass:"mdi mdi-arrow-right-bold-circle warning--text mr-2"}),E._v("Được kiểm tra sản phẩm")]),E._v("\n                    trước khi nhận")]),E._v(" "),I(f.a,{staticClass:"primary--text mb-n3"},[I("span",{staticClass:"mdi mdi-arrow-right-bold-circle warning--text mr-2"}),E._v("\n                    Nguồn gốc\n                    "),I("strong",{staticClass:"ml-1"},[E._v("100% từ thiên nhiên")])]),E._v(" "),I(f.a,{staticClass:"primary--text mb-n3"},[I("strong",{staticClass:"mr-1"},[I("span",{staticClass:"mdi mdi-arrow-right-bold-circle warning--text mr-2"}),E._v("Không chất bảo quản")]),E._v("– Chất tạo màu")]),E._v(" "),I(f.a,{staticClass:"primary--text"},[I("span",{staticClass:"mdi mdi-arrow-right-bold-circle warning--text mr-2"}),E._v("\n                    Chỉ phải thanh toán\n                    "),I("strong",{staticClass:"ml-1"},[E._v("\n                      sau khi nhận hàng")])])],1)],1)],1)],1)],1)],1)],1),E._v(" "),I(l.a,{staticClass:"pc product-container",attrs:{cols:"12",md:"3"}},E._l(E.randomProducts,(function(t){return I(o.a,{key:null==t?void 0:t.id,staticClass:"card-item mb-6",on:{click:function(n){return E.$router.push("/san-pham/".concat(null==t?void 0:t.id))}}},[I(c.c,{staticClass:"card-title break-word"},[E._v("Sản phẩm bán chạy")]),E._v(" "),I(h.a,{attrs:{"max-height":"150px",width:"100%",src:null==t?void 0:t.thumbnail}}),E._v(" "),I(c.c,{staticClass:"ctitle"},[E._v(" "+E._s(null==t?void 0:t.name))]),E._v(" "),I(c.a,{staticClass:"subtitle"},[E._v("\n          "+E._s(null==t?void 0:t.price)+"₫ /"+E._s(null==t?void 0:t.unit)+"\n        ")])],1)})),1),E._v(" "),I(C.a,{attrs:{justify:"center"}},[E.dialog?I(m.a,{attrs:{"max-width":"560"},model:{value:E.dialog,callback:function(t){E.dialog=t},expression:"dialog"}},[I(o.a,[I(c.c,[I("span",{staticClass:"text-h5"},[E._v(E._s(null===(N=E.productDetail)||void 0===N?void 0:N.name))])]),E._v(" "),I(c.b,{staticClass:"mb-n4"},[I(d.a,[I(C.a,[I(l.a,{attrs:{cols:"12"}},[I(y.a,{staticClass:"formfield",attrs:{outlined:"","error-messages":E.getErrors("name"),label:"Tên của bạn","hide-details":"",height:"40px",required:""},on:{blur:function(t){return E.$v.name.$touch()},input:function(t){return E.$v.name.$touch()}},model:{value:E.name,callback:function(t){E.name=t},expression:"name"}})],1),E._v(" "),I(l.a,{attrs:{cols:"12"}},[I(y.a,{staticClass:"formfield",attrs:{"error-messages":E.getErrors("tel"),outlined:"",label:"Số điện thoại","hide-details":"",required:""},on:{blur:function(t){return E.$v.tel.$touch()},input:function(t){return E.$v.tel.$touch()}},model:{value:E.tel,callback:function(t){E.tel=t},expression:"tel"}})],1),E._v(" "),I(l.a,{attrs:{cols:"12"}},[I(k.a,{staticClass:"formfield",attrs:{label:"Số lượng",items:null===(V=E.productDetail)||void 0===V?void 0:V.options,"item-text":"unit","item-value":"price","error-messages":E.amountErrors,outlined:"","hide-details":"",required:"",small:"","return-object":""},on:{blur:function(t){return E.$v.selection.$touch()},input:function(t){return E.$v.selection.$touch()}},model:{value:E.selection,callback:function(t){E.selection=t},expression:"selection"}})],1),E._v(" "),I(l.a,{staticClass:"mb-n4",attrs:{cols:"12"}},[I(y.a,{staticClass:"formfield",attrs:{"error-messages":E.getErrors("address"),outlined:"",label:"Địa chỉ giao hàng","hide-details":"",required:""},on:{blur:function(t){return E.$v.address.$touch()},input:function(t){return E.$v.address.$touch()}},model:{value:E.address,callback:function(t){E.address=t},expression:"address"}}),E._v(" "),I("div",{staticStyle:{"font-size":"11px"}},[E._v("\n                    Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố\n                  ")])],1),E._v(" "),I(l.a,{attrs:{cols:"12"}},[I(w.a,{attrs:{outlined:"","hide-details":"",label:"Vui lòng cho biết yêu cầu khác (nếu có)"}})],1)],1)],1)],1),E._v(" "),I(l.a,{staticClass:"text-center"},[I(r.a,{staticClass:"text-none mb-4",attrs:{color:"primary","x-large":"",variant:"flat"},on:{click:E.submit}},[E._v("\n              Đặt hàng ngay\n            ")])],1)],1)],1):E._e()],1),E._v(" "),I($.a,{attrs:{top:!0,timeout:3e3,color:"success",variant:"outlined"},model:{value:E.snackbar,callback:function(t){E.snackbar=t},expression:"snackbar"}},[I("strong",[E._v(" "+E._s(E.messageSnackbar)+" ")])])],1)],1)}),[],!1,null,"175b1c3f",null);n.default=component.exports}}]);