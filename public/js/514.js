(self.webpackChunk=self.webpackChunk||[]).push([[514],{514:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});const s={computed:{user:function(){return this.$store.getters.getUser}},methods:{logout:function(){this.$store.dispatch("logout"),window.token=null,this.$router.replace({name:"login"})}}};const u=(0,n(900).Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    Home "),n("br"),e._v(" "),null!=e.user?n("div",[e._v("\n      "+e._s(e.user.name)+"\n<<<<<<< HEAD\n      "+e._s(e.user.email)+"\n=======\n>>>>>>> 52858b74bfadfe9ea6e7cd0f9e694f42f2bfa9eb\n      "),n("div",[n("vs-button",{on:{click:e.logout}},[e._v("Logout")])],1)]):e._e()])}),[],!1,null,null,null).exports}}]);