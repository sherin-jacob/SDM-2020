(this.webpackJsonpseer=this.webpackJsonpseer||[]).push([[0],{56:function(e,a,t){e.exports=t(83)},61:function(e,a,t){},62:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),i=t.n(r),s=(t(61),t(62),t(41)),u=t(42),l=t(43),m=t(22),c=t(50),h=t(49),d=t(44),g=t.n(d),p=t(111),v=t(115),f=t(116),b=t(117),w=function(e){Object(c.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).state={email:"",username:"",password:"",organisation:"",user_type:""},e.onChange=e.onChange.bind(Object(m.a)(e)),e.onSubmit=e.onSubmit.bind(Object(m.a)(e)),e}return Object(l.a)(t,[{key:"onChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),function(e){return g.a.post("users/register",{email:e.email,username:e.username,password:e.password,organisation:e.organisation,user_type:e.user_type}).then((function(e){console.log("Registered")}))}({email:this.state.email,username:this.state.username,password:this.state.password,organisation:this.state.organisation,user_type:this.state.user_type}).then((function(e){}))}},{key:"render",value:function(){return o.a.createElement(p.a,{component:"main"},o.a.createElement(v.a,{component:"h1",variant:"h5"},"Register"),o.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},o.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoComplete:"email",autoFocus:!0,id:"email",label:"Email Address",name:"email",value:this.state.email,onChange:this.onChange}),o.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoComplete:"username",autoFocus:!0,id:"username",label:"Username",name:"username",value:this.state.username,onChange:this.onChange}),o.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoComplete:"password",autoFocus:!0,id:"password",label:"Password",name:"password",value:this.state.password,onChange:this.onChange}),o.a.createElement(f.a,{variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,id:"organisation",label:"Organisation",name:"organisation",value:this.state.organisation,onChange:this.onChange}),o.a.createElement(f.a,{variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,id:"user_type",label:"User Type",name:"user_type",value:this.state.user_type,onChange:this.onChange}),o.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Register")))}}]),t}(n.Component);var C=function(){return o.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.d0bef531.chunk.js.map