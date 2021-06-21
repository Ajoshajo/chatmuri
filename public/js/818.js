(self.webpackChunk=self.webpackChunk||[]).push([[818],{910:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const a={props:["type","placeholder","label-placeholder"],name:"input-vs",computed:{getlabelPlaceholder:function(){return null!=this.labelPlaceholder},isIcon:function(){return null!=this.$slots.icon}},data:function(){return{value:""}},methods:{handleInput:function(e){this.$emit("input",this.value)}}};const r=(0,s(900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vs-parent"},[s("div",{staticClass:"input-parent"},[s("div",{staticClass:"content-vs"},["checkbox"===e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"input-vs",class:{"input-vs--has-icon":e.isIcon},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{input:e.handleInput,change:function(t){var s=e.value,a=t.target,r=!!a.checked;if(Array.isArray(s)){var l=e._i(s,null);a.checked?l<0&&(e.value=s.concat([null])):l>-1&&(e.value=s.slice(0,l).concat(s.slice(l+1)))}else e.value=r}}}):"radio"===e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"input-vs",class:{"input-vs--has-icon":e.isIcon},attrs:{type:"radio"},domProps:{checked:e._q(e.value,null)},on:{input:e.handleInput,change:function(t){e.value=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"input-vs",class:{"input-vs--has-icon":e.isIcon},attrs:{type:e.type},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.handleInput]}}),e._v(" "),""==e.value?s("label",{staticClass:"label-vs",class:{"label-vs--placeholder":e.getlabelPlaceholder}},[e._v(e._s(e.labelPlaceholder||e.placeholder))]):e._e(),e._v(" "),e.isIcon?s("span",{staticClass:"icon-vs"},[e._t("icon")],2):e._e()])]),e._v(" "),s("div",{staticClass:"vs-input__message vs-input__message--danger"},[e._t("error")],2)])}),[],!1,null,null,null).exports},818:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const a={components:{InputVs:s(910).Z},data:function(){return{data:{email:"",password:"",remember:!1},errors:{},disabled:!1,error:!1,errorMessage:"",color:"danger"}},computed:{loginDisabled:function(){return this.disabled}},methods:{login:function(){var e=this;this.errors={},this.disabled=!0,this.error=!1;var t=this.$vs.loading({target:this.$refs.login,scale:"0.6",background:"primary",opacity:1,color:"#fff"});axios.post("login",this.data).then((function(s){e.disabled=!1,t.close(),e.$swal({title:s.data.message,toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,icon:"success"}),e.$store.dispatch("login",s.data)})).catch((function(s){console.log(s),t.close(),e.disabled=!1,422==s.response.status&&(e.errors=s.response.data.errors),e.error=!0,e.color="danger",e.errorMessage=s.response.data.message}))}}};const r=(0,s(900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("transition",{attrs:{name:"zoom-fade",mode:"out-in",appear:""}},[s("h4",[e._v("Login")])]),e._v(" "),s("p",{staticClass:"text-muted mb-4"},[e._v("Sign in to continue to ചാറ്റ് മുറി.")]),e._v(" "),s("transition",{attrs:{name:"zoom-fade",mode:"out-in",appear:""}},[s("div",{staticClass:"new-card p-4"},[s("vs-alert",{attrs:{closable:"",color:e.color},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s(e.errorMessage)+" ")]},proxy:!0}]),model:{value:e.error,callback:function(t){e.error=t},expression:"error"}}),e._v(" "),s("div",{staticClass:"pt-4"},[s("input-vs",{attrs:{type:"text","label-placeholder":"EMail"},model:{value:e.data.email,callback:function(t){e.$set(e.data,"email",t)},expression:"data.email"}},[s("div",{attrs:{slot:"icon"},slot:"icon"},[s("i",{staticClass:"bx bx-mail-send"})]),e._v(" "),e.errors.hasOwnProperty("email")?s("div",{attrs:{slot:"error"},slot:"error"},[e._v("\n            "+e._s(e.errors.email[0])+"\n          ")]):e._e()])],1),e._v(" "),s("div",{staticClass:"pt-4"},[s("input-vs",{attrs:{type:"password",labelPlaceholder:"Password"},model:{value:e.data.password,callback:function(t){e.$set(e.data,"password",t)},expression:"data.password"}},[s("div",{attrs:{slot:"icon"},slot:"icon"},[s("i",{staticClass:"bx bx-lock"})]),e._v(" "),e.errors.hasOwnProperty("password")?s("div",{attrs:{slot:"error"},slot:"error"},[e._v("\n            "+e._s(e.errors.password[0])+"\n          ")]):e._e()])],1),e._v(" "),s("div",{staticClass:"center pl-4"},[s("vs-checkbox",{model:{value:e.data.remember,callback:function(t){e.$set(e.data,"remember",t)},expression:"data.remember"}},[e._v(" Remember Me ? ")])],1),e._v(" "),s("vs-button",{ref:"login",attrs:{block:"",active:"",disabled:e.loginDisabled},on:{click:e.login}},[e._v("Login")])],1)]),e._v(" "),s("div",{staticClass:"mt-5 text-center"},[s("p",[e._v("\n      Don't have an account ?\n      "),s("router-link",{staticClass:"font-weight-medium text-primary",attrs:{to:{name:"register"}}},[e._v("\n        Signup now\n      ")])],1)])],1)}),[],!1,null,null,null).exports}}]);