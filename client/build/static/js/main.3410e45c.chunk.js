(this.webpackJsonpseer=this.webpackJsonpseer||[]).push([[0],{118:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),i=(t(95),t(17)),c=t(18),s=t(20),m=t(19),u=t(49),d=t(11),h=t(154),p=t(157),g=t(159),E=t(120),f=t(160),b=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),v=function(){var e=b();return l.a.createElement(p.a,{style:{backgroundColor:"#52b788",background:"transparent",boxShadow:"none"},position:"static"},l.a.createElement(g.a,{style:{margin:10}},l.a.createElement(E.a,{variant:"h6",className:e.title},"SEER"),l.a.createElement(f.a,{color:"inherit",component:u.b,to:"/search"},"Search"),l.a.createElement(f.a,{variant:"outlined",color:"inherit",component:u.b,to:"/register",size:"medium"},"Login/Register")))},C=t(43),_=t(35),y=t(57),O=t.n(y),j=t(161),S=t(179),k={input:{backgroundColor:"white"}},w=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={email:"",username:"",password:"",organisation:"",user_type:""},e.onChange=e.onChange.bind(Object(_.a)(e)),e.onSubmit=e.onSubmit.bind(Object(_.a)(e)),e}return Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),function(e){return O.a.post("/register",{email:e.email,username:e.username,password:e.password,organisation:e.organisation,user_type:e.user_type}).then((function(e){console.log("Registered")}))}({email:this.state.email,username:this.state.username,password:this.state.password,organisation:this.state.organisation,user_type:this.state.user_type}).then((function(e){}))}},{key:"render",value:function(){return l.a.createElement(j.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,{component:"h1",variant:"h5"},"Register"),l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement(S.a,{fullWidth:!0,variant:"outlined",margin:"normal",required:!0,autoComplete:"email",autoFocus:!0,id:"email",label:"Email Address",name:"email",value:this.state.email,onChange:this.onChange,InputProps:{style:k.input}}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoComplete:"username",autoFocus:!0,id:"username",label:"Username",name:"username",value:this.state.username,onChange:this.onChange,InputProps:{style:k.input}}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoComplete:"password",autoFocus:!0,id:"password",label:"Password",name:"password",value:this.state.password,onChange:this.onChange,InputProps:{style:k.input}}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,id:"organisation",label:"Organisation",name:"organisation",value:this.state.organisation,onChange:this.onChange,InputProps:{style:k.input}}),l.a.createElement(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,id:"user_type",label:"User Type",name:"user_type",value:this.state.user_type,onChange:this.onChange,InputProps:{style:k.input}}),l.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Register")))}}]),t}(n.Component),D=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(w,null)}}]),t}(n.Component),N=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Home Page"))}}]),t}(n.Component),P=t(4),x=t(165),F=t(166),T=t(119),I=t(167),B=t(168),G=t(169),W=t(170),R=t(171),q=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e,a=this.props.records;return console.log(a),e=a?l.a.createElement(x.a,{container:!0,direction:"column",spacing:3},l.a.createElement(F.a,{component:T.a},l.a.createElement(I.a,{stickyHeader:!0,"aria-label":"sticky table"},l.a.createElement(B.a,null,l.a.createElement(G.a,null,l.a.createElement(W.a,null,"Title"),l.a.createElement(W.a,{align:"right"},"Author"),l.a.createElement(W.a,{align:"right"},"Year"),l.a.createElement(W.a,{align:"right"},"Type"),l.a.createElement(W.a,{align:"right"},"Journal"),l.a.createElement(W.a,{align:"right"},"SE Practice"),l.a.createElement(W.a,{align:"right"},"Claims"),l.a.createElement(W.a,{align:"right"},"DOI"))),l.a.createElement(R.a,null,a.map((function(e,a){for(var t="http://doi.org/"+e.doi,n="",r=0;r<e.claims.length;r++)r===e.claims.length-1?n+=e.claims[r]:n+=e.claims[r]+", ";return l.a.createElement(G.a,{key:a},l.a.createElement(W.a,{align:"right"},e.title),l.a.createElement(W.a,{align:"right"},e.author),l.a.createElement(W.a,{align:"right"},e.year),l.a.createElement(W.a,{align:"right"},e.type),l.a.createElement(W.a,{align:"right"},e.journal),l.a.createElement(W.a,{align:"right"},e.se_practice),l.a.createElement(W.a,{align:"right"},n),l.a.createElement(W.a,{align:"right"},l.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},e.doi)))})))))):null,console.log(e),l.a.createElement("div",null,e)}}]),t}(n.Component),A=t(164),L=t(181),V=t(175),z=t(182),J=Object(h.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},IfTypography:{marginTop:e.spacing(2),paddingLeft:e.spacing(6),fontSize:25,color:"#52B788"},GreenSeer:{color:"#52B788"},PlusMinusButton:{blockSize:50},PaperBack:{backgroundColor:"#D8F3DC",width:600}}})),H=function(e){var a=J();return l.a.createElement(T.a,{className:a.PaperBack,elevation:7,variant:"outlined"},l.a.createElement(x.a,{container:!0,direction:"row"},l.a.createElement(x.a,{item:!0,xs:1,sm:2},l.a.createElement(E.a,{className:a.IfTypography},"IF")),l.a.createElement(x.a,{item:!0},l.a.createElement(A.a,{className:a.formControl},l.a.createElement(L.a,{className:a.GreenSeer,id:"demo-simple-select-outlined-label"},"Name of Field"),l.a.createElement(V.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:e.name_of_field||"",onClick:e.handleFieldNameChange,label:"Name of Field",name:"name_of_field"},l.a.createElement(z.a,{value:"SE Practice"},"SE Practice"),l.a.createElement(z.a,{value:"TDD Claims"},"TDD Claims"))),l.a.createElement(A.a,{className:a.formControl},l.a.createElement(L.a,{className:a.GreenSeer,id:"demo-simple-select-outlined-label"},"Operator"),l.a.createElement(V.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:e.selected_operator,onChange:e.handleChange,label:"Operator",name:"selected_operator"},e.operators.map((function(e,a){return l.a.createElement(z.a,{key:a,value:e.value},e.label)})))),l.a.createElement(A.a,{className:a.formControl},l.a.createElement(L.a,{className:a.GreenSeer,id:"demo-simple-select-outlined-label"},"Value"),l.a.createElement(V.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:e.selected_value,onChange:e.handleChange,label:"Value",name:"selected_value"},e.values.map((function(e,a){return l.a.createElement(z.a,{key:a,value:e.value},e.label)})))))))},M=t(61),U=t(180),Y=t(176),$=t(177),K=t(172);function Q(){var e=l.a.useState("5"),a=Object(M.a)(e,2),t=a[0],n=a[1];return l.a.createElement(x.a,{container:!0,direction:"row"},l.a.createElement(A.a,null,l.a.createElement($.a,{row:!0,"aria-label":"gender",name:"gender1",value:t,onChange:function(e){var a=0;"5"===e.target.value&&(a=2015),"10"===e.target.value&&(a=2010),"15"===e.target.value&&(a=2005),n(a)}},l.a.createElement(K.a,{value:"5",id:"last5Years",control:l.a.createElement(Y.a,null),label:"Last 5 years"}),l.a.createElement(K.a,{value:"10",control:l.a.createElement(Y.a,null),label:"Last 10 years"}),l.a.createElement(K.a,{value:"15",control:l.a.createElement(Y.a,null),label:"Last 15 years"}))))}var X=Object(h.a)((function(e){return{root:{backgroundColor:"#D8F3DC"},GreenSeer:{color:"#52B788"},RadioGrid:{paddingLeft:100}}}));function Z(e){return"".concat(e)}function ee(e){var a=X(),t=l.a.useState([e.from_date,e.to_date]),n=Object(M.a)(t,2),r=n[0],o=n[1],i=r;return l.a.createElement(T.a,{elevation:7,variant:"outlined",className:a.root},l.a.createElement(x.a,{container:!0,direction:"row"},l.a.createElement(x.a,{item:!0},l.a.createElement(E.a,{className:a.GreenSeer,id:"range-slider",gutterBottom:!0},"Select Date Range"),l.a.createElement(U.a,{className:a.GreenSeer,id:"sliderTest",value:r,onChange:function(a,t){o(t),i=t,e.callbackFromParent(i)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:Z,min:1990,max:2020})),l.a.createElement(x.a,{item:!0,className:a.RadioGrid},l.a.createElement(Q,null))))}var ae=Object(P.a)({root:{backgroundColor:"#2D6A4F",color:"white"}})(f.a),te=Object(P.a)({root:{backgroundColor:"#40916C",color:"white"}})(f.a),ne=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).onSubmit=function(a){a.preventDefault(),e.setState(Object(C.a)({},a.target.name,a.target.value),(function(){O.a.get("/records",{params:{se_practice:e.state.selected_value,from_date:e.state.from_date,to_date:e.state.to_date,claims:e.state.selected_value,selected_operator:e.state.selected_operator}}).then((function(a){e.setState({records:a.data})})).catch((function(e){return console.log(e)}))}))},e.handleFieldNameChange=function(a){e.setState(Object(C.a)({},a.target.name,a.target.value),(function(){return e.populateOperator()}))},e.myCallback=function(a){e.setState({from_date:a[0]},(function(){console.log(a[0])})),e.setState({to_date:a[1]})},e.onCancel=function(a){e.setState({cancelButtonPressed:!0},(function(){console.log(e.state.cancelButtonPressed)})),e.setState({name_of_field:"",operators:[],records:null,selected_operator:"",selected_value:"",cancelButtonPressed:!0,values:[{label:"",value:""}]})},e.state={se_practice:"",operators:[],values:[],selected_value:"",selected_operator:"",name_of_field:"",from_date:2015,to_date:2020,claims:"",records:null,cancelButtonPressed:!1},e.handleChange=e.handleChange.bind(Object(_.a)(e)),e}return Object(c.a)(t,[{key:"populateValues",value:function(){"SE Practice"===this.state.name_of_field&&this.setState({values:[{label:"TDD",value:"TDD"},{label:"Agile",value:"Agile"}]}),"TDD Claims"===this.state.name_of_field&&this.setState({values:[{label:"improves code quality",value:"improves code quality"},{label:"improves team confidence",value:"improves team confidence"}]})}},{key:"populateOperator",value:function(){"SE Practice"!==this.state.name_of_field&&"TDD Claims"!==this.state.name_of_field||(this.setState({operators:[{label:"Is Equal To",value:"Is Equal To"}]}),this.populateValues())}},{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{style:{padding:100}},l.a.createElement(x.a,{container:!0,direction:"column",spacing:3},l.a.createElement(x.a,{item:!0,container:!0},l.a.createElement(x.a,{item:!0,xs:1,sm:2,md:1}),l.a.createElement(x.a,{item:!0,xs:1,sm:2}),l.a.createElement(x.a,{item:!0,xs:12,sm:8},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement(H,{operators:this.state.operators,values:this.state.values,selected_value:this.state.selected_value,selected_operator:this.state.selected_operator,name_of_field:this.state.name_of_field,handleChange:this.handleChange,handleFieldNameChange:this.handleFieldNameChange}),l.a.createElement(ee,{callbackFromParent:this.myCallback,from_date:this.state.from_date,to_date:this.state.to_date}),l.a.createElement(x.a,{item:!0,xs:1,sm:2,md:5}),l.a.createElement(ae,{type:"submit",variant:"contained"},"Search"),l.a.createElement(te,{"data-testid":"testID1",type:"cancel",variant:"contained",onClick:this.onCancel,className:"cancel_button"},"Cancel"))),l.a.createElement(x.a,{item:!0,xs:1,sm:2}))),this.state.cancelButtonPressed?null:l.a.createElement(q,{records:this.state.records}))}}]),t}(n.Component),le=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(ne,null)}}]),t}(n.Component),re=t(81),oe=t(173),ie=t(174),ce=Object(re.a)({palette:{background:{default:"#52b788"}}}),se=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(oe.a,{theme:ce},l.a.createElement(ie.a,null),l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(d.a,{exact:!0,path:"/",component:N}),l.a.createElement("div",{className:"container"},l.a.createElement(d.a,{exact:!0,path:"/search",component:le}),l.a.createElement(d.a,{exact:!0,path:"/register",component:D})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,a,t){e.exports=t(118)},95:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.3410e45c.chunk.js.map