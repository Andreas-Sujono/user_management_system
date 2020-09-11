(this.webpackJsonpuser_management_system=this.webpackJsonpuser_management_system||[]).push([[0],{16:function(e,t,a){e.exports=a(33)},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),i=a.n(l),s=(a(21),a(8)),o=a(9),c=a.n(o),m=a(15),d=a(12),u=a(3),h=a(4),f=a(6),p=a(5),E=a(14),N=a(10);a(23);var v=function(e){return r.a.createElement("div",{className:"homepage-table-container"},r.a.createElement("table",{cellSpacing:"0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"id"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Date of Birth"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,e.list.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"id"},t.id),r.a.createElement("td",{className:"first-name"},t.firstName),r.a.createElement("td",{className:"last-name"},t.lastName),r.a.createElement("td",{className:"email"},t.email),r.a.createElement("td",{className:"dob"},t.dob.toLocaleDateString("en-us")),r.a.createElement("td",{className:"action"},r.a.createElement(N.b,{className:"icon edit-btn",onClick:function(){return e.handleShowModal(t)}}),r.a.createElement(N.a,{className:"icon delete-btn",onClick:function(){return e.handleEdit({id:t.id,type:"delete"})}})))})))))};a(24);var g=function(e){var t=e.currentPage,a=e.maxPage,n=Array.from({length:a},(function(e,t){return t}));return r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",null,t>1&&r.a.createElement("li",{onClick:function(){return e.handleNavigate(t-1)}}," < "),n.map((function(a,n){return r.a.createElement("li",{key:n,className:"".concat(t===n+1?"active-page":""),onClick:function(){return e.handleNavigate(n+1)}},n+1)})),t<a&&r.a.createElement("li",{onClick:function(){return e.handleNavigate(t+1)}}," > ")))},b=a(2),y=a(13),w=(a(29),a(30),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",email:"",dob:""},e.addZero=function(e){return e>9?String(e):"0".concat(e)},e.dateToString=function(t){var a=t.getFullYear(),n=e.addZero(t.getMonth()+1),r=e.addZero(t.getDate());return"".concat(a,"-").concat(n,"-").concat(r)},e.handleSubmit=function(t){var a,n,r,l;t.preventDefault();var i=e.state,s=i.firstName,o=i.lastName,c=i.email,m=i.dob;e.props.handleEdit({id:(null===(a=e.props)||void 0===a||null===(n=a.detail)||void 0===n?void 0:n.id)||"new",type:(null===(r=e.props)||void 0===r||null===(l=r.detail)||void 0===l?void 0:l.type)||"add",firstName:s,lastName:o,email:c,dob:new Date(Date.parse(m))}),e.props.handleClose()},e.handleChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e}return Object(h.a)(a,[{key:"componenentDidUpdate",value:function(e){var t=this,a=!0;if(Object.keys(e).forEach((function(n){e[n]!==t.props.detail[n]&&(a=!1)})),!a){var n=this.props.detail,r=n.firstName,l=n.lastName,i=n.email,s=n.dob;this.setState({firstName:r||"",lastName:l||"",email:i||"",dob:s?this.dateToString(s):""})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,n=t.lastName,l=t.email,i=t.dob;return r.a.createElement(y.Modal,{open:this.props.isModalOpen,onClose:function(){return e.props.handleClose()}},r.a.createElement("div",{className:"UserDetail-page"},r.a.createElement("h1",null,"Edit Attendees"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{id:"firstName",type:"text",placeholder:"Enter your first name",required:!0,value:a,name:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{id:"lastName",type:"text",placeholder:"Enter your last name",required:!0,value:n,name:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{id:"email",type:"email",placeholder:"Enter your email",required:!0,value:l,name:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"dob"},"Date of Birth"),r.a.createElement("input",{id:"dob",type:"date",required:!0,value:i,name:"dob",onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Edit"}))))}}]),a}(n.Component)),S=(a(31),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={attendees:[{id:1,firstName:"Andreas",lastName:"Sujono",email:"andreassujono@gmail.com",dob:new Date},{id:2,firstName:"Andreas",lastName:"Sujono",email:"andreassujono@gmail.com",dob:new Date},{id:3,firstName:"Andreas",lastName:"Sujono",email:"andreassujono@gmail.com",dob:new Date},{id:4,firstName:"Andreas",lastName:"Sujono",email:"andreassujono@gmail.com",dob:new Date},{id:5,firstName:"Andreas",lastName:"Sujono",email:"andreassujono@gmail.com",dob:new Date},{id:6,firstName:"Andreas",lastName:"Sujono",email:"andreassujono@gmail.com",dob:new Date}],search:"",searchResult:[],currentPage:1,detail:{},showModal:!1},e.handleSearch=function(t){var a=t.target.value;e.setState({search:a}),setTimeout(e.filterUser(a),500)},e.filterUser=function(t){var a=e.state.attendees.filter((function(e){var a=new RegExp(t,"i");return a.test(e.id)||a.test(e.firstName)||a.test(e.lastName)||a.test(e.email)}));e.setState({searchResult:a})},e.mockHTPPRequest=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(e){return e(t)}))},e.handleEdit=function(){var t=Object(d.a)(c.a.mark((function t(a){var n,r,l,i,s,o,d,u,h,f,p,E;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.id,r=a.type,l=a.firstName,i=a.lastName,s=a.email,o=a.dob,d=e.state.attendees,u=d.reduce((function(e,t){return Math.max(e,t.id)}),0),"add"!==r){t.next=11;break}return h={id:u+1,type:r,firstName:l,lastName:i,email:s,dob:o},t.next=7,e.mockHTPPRequest("POST",h);case 7:f=t.sent,e.setState((function(e){return{attendees:[].concat(Object(m.a)(e.attendees),[f])}})),t.next=27;break;case 11:if("edit"!==r){t.next=19;break}return p={id:n,firstName:l,lastName:i,email:s,dob:o},t.next=15,e.mockHTPPRequest("PUT",p);case 15:E=t.sent,e.setState((function(e){return{attendees:e.attendees.map((function(e){return e.id===n?E:e}))}})),t.next=27;break;case 19:if("delete"!==r){t.next=27;break}if(window.confirm("Are you sure you want to delete this user?")){t.next=23;break}return t.abrupt("return");case 23:return t.next=25,e.mockHTPPRequest("DELETE",{id:n});case 25:t.sent,e.setState((function(e){return{attendees:e.attendees.filter((function(e){return e.id!==n}))}}));case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.attendees,n=t.search,l=t.searchResult,i=t.currentPage,o=t.detail,c=t.showModal;return r.a.createElement("div",{className:"homepage"},r.a.createElement("h1",null,"Attendees"),r.a.createElement("h2",null,"These are attendees that have registered to your event"),r.a.createElement(w,{detail:o,isModalOpen:c,handleClose:function(){return e.setState({showModal:!1})},handleEdit:this.handleEdit}),r.a.createElement("div",{className:"search-bar"},r.a.createElement(E.a,{className:"icon"}),r.a.createElement("input",{type:"search",className:"search-input",placeholder:"Search by id, first name, last name, or email",value:n,onChange:this.handleSearch})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"total-attendees"},"Total Attendees: ",r.a.createElement("span",null,a.length)),r.a.createElement("button",{className:"add-new-btn",onClick:function(){e.setState({detail:{},showModal:!0})}},"Add New Attendees")),r.a.createElement(v,{list:n?l:a.slice(5*(i-1),5*i),handleEdit:this.handleEdit,handleShowModal:function(t){e.setState({detail:Object(s.a)(Object(s.a)({},t),{},{type:"edit"}),showModal:!0})}}),!a.length&&r.a.createElement("div",{className:"no-attendees"},"No Attendee so far"),a.length&&n&&!l.length?r.a.createElement("div",{className:"no-attendees"}," Not Found "):r.a.createElement(r.a.Fragment,null),!n&&r.a.createElement(g,{currentPage:i,maxPage:Math.ceil(a.length/5),handleNavigate:function(t){return e.setState({currentPage:t})}}))}}]),a}(n.Component));a(32);var k=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.8ad8ddba.chunk.js.map