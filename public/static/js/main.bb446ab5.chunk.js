(this.webpackJsonpkolocall_admin=this.webpackJsonpkolocall_admin||[]).push([[0],{172:function(e,t){},242:function(e,t){},243:function(e,t){},311:function(e,t,a){},316:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(30),s=a.n(r),i=a(31),o=a(34),l=a(97),j=a(183),u=a(21),d={activeProject:null,projectLoading:!1,tableLoading:!1,tableColumns:[],projectStatuses:[],tableData:null,tablePaginationConfig:null,searchParams:null,userInfo:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_INFO":return Object(u.a)(Object(u.a)({},e),{},{userInfo:t.payload});case"SET_ACTIVE_PROJECT":return Object(u.a)(Object(u.a)({},e),{},{activeProject:t.payload});case"SET_PROJECT_LOADING":return Object(u.a)(Object(u.a)({},e),{},{projectLoading:t.payload});case"SET_PROJECT_STATUSES":return Object(u.a)(Object(u.a)({},e),{},{projectStatuses:t.payload});case"SET_TABLE_LOADING":return Object(u.a)(Object(u.a)({},e),{},{tableLoading:t.payload});case"SET_TABLE_COLUMNS":return Object(u.a)(Object(u.a)({},e),{},{tableColumns:t.payload});case"SET_TABLE_DATA":return Object(u.a)(Object(u.a)({},e),{},{tableData:t.payload});case"RESET_TABLE_DATA":return Object(u.a)(Object(u.a)({},e),{},{tableData:null});case"RESET_STORAGE":return Object(u.a)({},d);case"SET_TABLE_PAGINATIONCONFIG":return Object(u.a)(Object(u.a)({},e),{},{tablePaginationConfig:t.payload});case"SET_SEARCH_PARAMS":return Object(u.a)(Object(u.a)({},e),{},{searchParams:t.payload});default:return e}},O=Object(l.b)({projects:b}),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,m=Object(l.d)(O,h(Object(l.a)(j.a))),x=a(26),p=a.n(x),f=a(19),g=a(194),y=a.n(g),v=a(24),S=a(75),T=a.n(S),I=a(103),_=a(321),E=a(198),C=a(320),w=a(324),L=a(111),N=a(56),k=a(326),A=a(329),P=a(58),F=a.n(P),D=function(e){return{type:"SET_USER_INFO",payload:e}},R=function(e){return{type:"SET_PROJECT_LOADING",payload:e}},q=function(e){return{type:"SET_TABLE_LOADING",payload:e}},Y=function(e){return{type:"SET_TABLE_DATA",payload:e}},M=function(e){return{type:"SET_SEARCH_PARAMS",payload:e}},B=function(e,t){return function(a){var n=e||{project:t};p.a.post("/project/search",n).then((function(e){var t=e.data,n={total:t.paginate.total,current_page:t.paginate.current_page,per_page:t.paginate.per_page},c=t.statuses.map((function(e){return{value:e}}));a({type:"SET_TABLE_PAGINATIONCONFIG",payload:n}),a(Y(t.paginate.data)),a(function(e){return{type:"SET_PROJECT_STATUSES",payload:e}}(c))})).catch((function(){return alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")})).finally((function(){a(q(!1)),a(R(!1))}))}},V=a(184),G=a(4),z=function(){return Object(G.jsx)("div",{style:{textAlign:"center",marginTop:"20px"},children:Object(G.jsx)(V.a,{})})},U=a(328),J=a(187),H=a(157),K=function(e){var t=e.activeProject,a=e.searchParams,n=c.a.useState(!1),r=Object(v.a)(n,2),s=r[0],i=r[1];return Object(G.jsx)(N.a,{loading:s,onClick:function(){i(!0);var e=Object(u.a)(Object(u.a)({},a),{},{project:t});p.a.post("/project/export",e).then((function(e){return function(e,t){var a={Sheets:{data:H.utils.json_to_sheet(e,{skipHeader:1})},SheetNames:["data"]},n=H.write(a,{bookType:"xlsx",type:"array"}),c=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});J.saveAs(c,t+".xlsx")}(e.data,"export_".concat(Date.now()))})).finally((function(){return i(!1)}))},icon:Object(G.jsx)(U.a,{}),children:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442"})},X=function(){var e=Object(o.c)((function(e){return e.projects})),t=e.activeProject,a=e.tablePaginationConfig,n=e.searchParams;return Object(G.jsxs)("div",{className:"project-actions",children:[Object(G.jsxs)("div",{children:["\u0412\u0441\u0435\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439: ",a.total]}),Object(G.jsx)(K,{activeProject:t.value,searchParams:n})]})},W=a(199),Q=a(203),Z=a(323),$=a(322),ee=a(319),te=function(e){var t=e.editing,a=e.dataIndex,n=e.title,c=e.inputType,r=(e.record,e.index,e.children),s=Object(Q.a)(e,["editing","dataIndex","title","inputType","record","index","children"]),i="number"===c?Object(G.jsx)(Z.a,{}):Object(G.jsx)(w.a,{});return Object(G.jsx)("td",Object(u.a)(Object(u.a)({},s),{},{children:t?Object(G.jsx)(_.a.Item,{name:a,style:{margin:0},rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ".concat(n,"!")}],children:i}):r}))},ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.projects})),a=t.activeProject,n=t.tableLoading,r=t.tableColumns,s=t.tablePaginationConfig,i=t.tableData,l=t.searchParams,j=t.userInfo,d=_.a.useForm(),b=Object(v.a)(d,1)[0],O=c.a.useState(""),h=Object(v.a)(O,2),m=h[0],x=h[1],f=function(e){return e.id===m},g=function(){var t=Object(I.a)(T.a.mark((function t(n){var c,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.validateFields();case 3:c=t.sent,r=Object(u.a)({project:a.value},c),p.a.put("/project/editrow/".concat(n.id),r).then((function(t){var a=t.data;E.b.success(a.message);var c=i.map((function(e){return e.id===n.id?Object(u.a)({},a.row):e}));e(Y(c))})).catch((function(){E.b.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")})).finally((function(){x("")})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),E.b.warning("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0435\u0439");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){x("")},S=function(){var t=Object(I.a)(T.a.mark((function t(n,c){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(),e(q(!0)),r={project:a.value,page:n,per_page:c,from:l?l.from:null,to:l?l.to:null,phone:l?l.phone:null,status:l?l.status:null},e(B(r));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),C=(1===j.isadmin||"supervisor"===j.username?[].concat(Object(W.a)(r),[{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",dataIndex:"test",width:"122px",render:function(e,t){return f(t)?Object(G.jsxs)("span",{children:[Object(G.jsx)($.a.Link,{onClick:function(){return g(t)},style:{marginRight:8},children:"\u0421\u043e\u0445\u0440"}),Object(G.jsx)($.a.Link,{onClick:y,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]}):Object(G.jsx)($.a.Link,{disabled:""!==m,onClick:function(){return function(e){var t={};for(var a in e)""===e[a]?t[a]="-":t[a]=e[a];b.setFieldsValue(Object(u.a)({id:"",title:""},t)),x(e.id)}(t)},children:"\u0420\u0435\u0434"})}}]):r).map((function(e){return e.editable?Object(u.a)(Object(u.a)({},e),{},{onCell:function(t){return{record:t,inputType:"age"===e.dataIndex?"number":"text",dataIndex:e.dataIndex,title:e.title,editing:f(t)}}}):e}));return Object(G.jsx)(_.a,{form:b,component:!1,children:Object(G.jsx)(ee.a,{components:{body:{cell:te}},rowKey:function(e){return e.id},columns:C,dataSource:i,loading:n,pagination:{current:s.current_page,total:s.total,pageSize:s.per_page,onChange:S,hideOnSinglePage:!0},bordered:!0})})},ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.projects})),a=t.activeProject,n=t.projectLoading,r=t.tableData,s=t.searchParams,i=t.projectStatuses,l=c.a.useState(null),j=Object(v.a)(l,2),d=j[0],b=j[1],O=_.a.useForm(),h=Object(v.a)(O,1)[0];c.a.useEffect((function(){p.a.post("/userprojects").then((function(e){var t=e.data.map((function(e){return{id:e.id,value:e.tablename,label:e.name,base_header:e.base_header,base_row:e.base_row}}));b(t)}))}),[]),c.a.useEffect((function(){a&&!r&&e(B(null,a.value))}),[a]);var m=function(){var t=Object(I.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(M(null));case 2:h.resetFields();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("div",{className:"controls box",children:[Object(G.jsxs)(_.a,{form:h,onFinish:function(t){if(console.log(t),a)if(t.from||t.to||t.phone||t.status){var n=Object(u.a)(Object(u.a)({},t),{},{from:t.from?t.from.format("YYYY-MM-DD"):null,to:t.to?t.to.format("YYYY-MM-DD"):null});e(q(!0)),e(M(Object(u.a)(Object(u.a)({},s),{},{from:n.from,to:n.to,phone:n.phone,status:n.status})));var c={project:a.value,from:n.from,to:n.to,phone:n.phone,status:n.status};e(B(c))}else E.b.warning("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043f\u043e\u0438\u0441\u043a\u0430",2);else E.b.warning("\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442",2)},autoComplete:"off",initialValues:{from:s&&s.from?F()(s.from,"YYYY-MM-DD"):null,to:s&&s.to?F()(s.to,"YYYY-MM-DD"):null,phone:s?s.phone:null,status:s?s.status:null},layout:"inline",children:[Object(G.jsx)(_.a.Item,{name:"from",children:Object(G.jsx)(C.a,{placeholder:"\u0421"})}),Object(G.jsx)(_.a.Item,{name:"to",children:Object(G.jsx)(C.a,{placeholder:"\u041f\u043e"})}),Object(G.jsx)(_.a.Item,{name:"phone",children:Object(G.jsx)(w.a,{placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",prefix:Object(G.jsx)(A.a,{style:{color:"rgba(0, 0, 0, 0.25)"},rotate:90}),allowClear:!0})}),Object(G.jsx)(_.a.Item,{name:"status",children:Object(G.jsx)(L.a,{placeholder:"\u0421\u0442\u0430\u0442\u0443\u0441",style:{width:202},options:i||null,allowClear:!0})}),Object(G.jsx)(_.a.Item,{children:Object(G.jsx)(N.a,{type:"primary",htmlType:"submit",children:"\u041f\u043e\u0438\u0441\u043a"})}),s&&Object(G.jsx)(_.a.Item,{children:Object(G.jsx)(N.a,{type:"dashed",onClick:function(){e(R(!0)),m(),e(B(null,a.value))},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})})]}),Object(G.jsx)(L.a,{value:a?a.label:null,showSearch:!0,style:{width:202,marginLeft:8},placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442",optionFilterProp:"label",onChange:function(t,a){e(R(!0)),m();var n=a.base_header.split(","),c=a.base_row.split(","),r=n.map((function(e,t){return{title:e,dataIndex:c[t],width:"2px",editable:"id"!==c[t]&&"time"!==c[t]&&"operator"!==c[t]&&"que"!==c[t]}}));e({type:"RESET_TABLE_DATA"}),e({type:"SET_ACTIVE_PROJECT",payload:a}),e(function(e){return{type:"SET_TABLE_COLUMNS",payload:e}}(r))},options:d,filterOption:function(e,t){return t.label.toLowerCase().indexOf(e.toLowerCase())>=0}})]}),Object(G.jsx)("div",{className:"site-layout-background",children:n?Object(G.jsx)(z,{}):r?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(X,{}),Object(G.jsx)(ae,{})]}):Object(G.jsx)("h1",{style:{textAlign:"center",marginBottom:0},children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442"})}),Object(G.jsx)(k.a,{})]})},ce=a(318),re=a(82),se=a(32),ie=a(137),oe=a(325),le=a(330),je=function(e){var t=e.onLogout,a=Object(o.b)(),n=Object(se.g)(),r=c.a.useState(!1),s=Object(v.a)(r,2),i=s[0],l=s[1];return Object(G.jsx)(N.a,{type:"text",onClick:function(){l(!0),p.a.post("/logout").then((function(){localStorage.clear(),t(),a({type:"RESET_STORAGE"}),n.push("/")})).catch((function(){return console.log("logout catch error")})).finally((function(){return l(!1)}))},className:"btn-logout",icon:Object(G.jsx)(le.a,{}),loading:i,children:"\u0412\u044b\u0439\u0442\u0438"})},ue=function(e){var t=e.onLogout,a=Object(G.jsxs)(re.a,{children:[Object(G.jsx)(re.a.Item,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},"settings"),Object(G.jsx)(re.a.Divider,{}),Object(G.jsx)(je,{onLogout:t})]});return Object(G.jsx)(ie.a,{overlay:a,trigger:["click"],children:Object(G.jsx)(oe.a,{style:{color:"#f56a00",backgroundColor:"#fde3cf"},children:localStorage.getItem("auth_name")[0]})})},de=ce.a.Header,be=ce.a.Content,Oe=function(e){var t=e.onSuccessLogout,a=Object(o.c)((function(e){return e.projects})).userInfo;return Object(G.jsxs)(ce.a,{children:[Object(G.jsxs)(de,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(G.jsxs)(re.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(G.jsx)(re.a.Item,{children:Object(G.jsx)(i.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})},"1"),1===a.isadmin&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(re.a.Item,{children:Object(G.jsx)(i.b,{to:"/projects",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})},"projects"),Object(G.jsx)(re.a.Item,{children:Object(G.jsx)(i.b,{to:"/users",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})},"users")]})]}),Object(G.jsx)(ue,{onLogout:t})]}),Object(G.jsx)(be,{className:"site-layout",style:{padding:"0 50px",margin:"52px auto 0 auto",maxWidth:1740,width:"100%"},children:Object(G.jsxs)(se.d,{children:[Object(G.jsx)(se.b,{exact:!0,path:"/",children:Object(G.jsx)(ne,{})}),1===a.isadmin&&Object(G.jsxs)(se.d,{children:[Object(G.jsx)(se.b,{exact:!0,path:"/projects",children:Object(G.jsx)(ve,{})}),Object(G.jsx)(se.b,{exact:!0,path:"/projects/:id/edit",children:Object(G.jsx)(me,{})}),Object(G.jsx)(se.b,{exact:!0,path:"/projects/create",children:Object(G.jsx)(xe,{})}),Object(G.jsx)(se.b,{exact:!0,path:"/users",children:Object(G.jsx)(Se,{})}),Object(G.jsx)(se.b,{exact:!0,path:"/users/:id/edit",children:Object(G.jsx)(Ie,{})}),Object(G.jsx)(se.b,{exact:!0,path:"/users/create",children:Object(G.jsx)(Te,{})}),Object(G.jsx)(se.a,{to:"/"})]}),Object(G.jsx)(se.a,{to:"/"})]})})]})},he=a(112),me=function(){var e=c.a.useState([]),t=Object(v.a)(e,2),a=t[0],n=t[1],r=c.a.useState([]),s=Object(v.a)(r,2),o=s[0],l=s[1],j=c.a.useState(!0),d=Object(v.a)(j,2),b=d[0],O=d[1],h=c.a.useState(!1),m=Object(v.a)(h,2),x=m[0],f=m[1],g=c.a.useState({}),y=Object(v.a)(g,2),S=y[0],T=y[1],I=Object(se.h)().id;c.a.useEffect((function(){p.a.get("/users").then((function(e){var t=e.data.map((function(e){return{label:e.name,value:e.id}}));n(t)})).finally((function(){return console.log("users fetched at edit page")}))}),[]),c.a.useEffect((function(){p.a.get("/projects/".concat(I,"/edit")).then((function(e){var t=e.data;if(T(t),t.users.length>0){var a=t.users.map((function(e){return e.id}));l(a)}})).catch((function(e){return console.log(e)})).finally((function(){O(!1)}))}),[I]);return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("div",{className:"controls box",style:{padding:"14px 25px"},children:[Object(G.jsx)("b",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"}),Object(G.jsx)(N.a,{type:"primary",style:{marginLeft:"auto"},children:Object(G.jsx)(i.b,{to:"/projects",children:"\u041d\u0430\u0437\u0430\u0434"})})]}),Object(G.jsx)("div",{className:"box",style:{marginTop:20},children:b?Object(G.jsx)(z,{}):Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(_.a,{name:"basic",onFinish:function(e){f(!0);var t=Object(u.a)(Object(u.a)({},e),{},{users:o});p.a.put("/projects/".concat(I),t).then((function(e){var t=e.data;E.b.success(t.message)})).catch((function(e){E.b.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")})).finally((function(){return f(!1)}))},initialValues:S,autoComplete:"off",children:[Object(G.jsx)(_.a.Item,{label:"\u0418\u043c\u044f",name:"name",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{label:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430",name:"tablename",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b",tooltip:{title:"\u0427\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e. \u041f\u0440\u0438\u043c\u0435\u0440: ID,\u0418\u043c\u044f,\u0422\u0435\u043b\u0435\u0444\u043e\u043d"},name:"base_header",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{label:"\u0421\u0442\u0440\u043e\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",tooltip:{title:"\u041f\u043e\u043b\u044f \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0411\u0414 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e. \u041f\u0440\u0438\u043c\u0435\u0440: id,name,number"},name:"base_row",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u044b!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{name:"changes",valuePropName:"checked",children:Object(G.jsx)(he.a,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"})}),Object(G.jsx)(_.a.Item,{children:Object(G.jsx)(L.a,{mode:"multiple",optionFilterProp:"label",style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",defaultValue:o,onChange:function(e){l(e)},options:a})}),Object(G.jsx)(_.a.Item,{children:Object(G.jsx)(N.a,{type:"primary",htmlType:"submit",loading:x,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"})})]})})})]})},xe=function(){var e=c.a.useState([]),t=Object(v.a)(e,2),a=t[0],n=t[1],r=c.a.useState([]),s=Object(v.a)(r,2),o=s[0],l=s[1],j=c.a.useState(!1),d=Object(v.a)(j,2),b=d[0],O=d[1];c.a.useEffect((function(){p.a.get("/users").then((function(e){var t=e.data.map((function(e){return{label:e.name,value:e.id}}));n(t)})).finally((function(){return console.log("users fetched")}))}),[]);return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("div",{className:"controls box",style:{padding:"14px 25px"},children:[Object(G.jsx)("b",{children:"\u041d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"}),Object(G.jsx)(N.a,{type:"primary",style:{marginLeft:"auto"},children:Object(G.jsx)(i.b,{to:"/projects",children:"\u041d\u0430\u0437\u0430\u0434"})})]}),Object(G.jsx)("div",{className:"box",style:{marginTop:20},children:Object(G.jsxs)(_.a,{name:"basic",onFinish:function(e){var t=Object(u.a)(Object(u.a)({},e),{},{users:o});O(!0),p.a.post("/projects",t).then((function(e){var t=e.data;console.log(t),E.b.success("\u041f\u0440\u043e\u0435\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d")})).catch((function(e){console.log(e),E.b.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")})).finally((function(){return O(!1)}))},initialValues:{changes:!1},autoComplete:"off",children:[Object(G.jsx)(_.a.Item,{label:"\u0418\u043c\u044f",name:"name",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{label:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430",tooltip:{title:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u0437 \u0411\u0414"},name:"tablename",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b",tooltip:{title:"\u0427\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e. \u041f\u0440\u0438\u043c\u0435\u0440: ID,\u0418\u043c\u044f,\u0422\u0435\u043b\u0435\u0444\u043e\u043d"},name:"base_header",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{label:"\u0421\u0442\u0440\u043e\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",tooltip:{title:"\u041f\u043e\u043b\u044f \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0411\u0414 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e. \u041f\u0440\u0438\u043c\u0435\u0440: id,name,number"},name:"base_row",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u044b!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{name:"changes",valuePropName:"checked",children:Object(G.jsx)(he.a,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"})}),Object(G.jsx)(_.a.Item,{children:Object(G.jsx)(L.a,{mode:"multiple",optionFilterProp:"label",style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",defaultValue:o,onChange:function(e){l(e)},options:a})}),Object(G.jsx)(_.a.Item,{children:Object(G.jsx)(N.a,{type:"primary",htmlType:"submit",loading:b,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"})})]})})]})},pe=a(202),fe=a(327),ge=a(331),ye=a(332),ve=function(){var e=c.a.useState([]),t=Object(v.a)(e,2),a=t[0],n=t[1],r=c.a.useState(!0),s=Object(v.a)(r,2),o=s[0],l=s[1];c.a.useEffect((function(){p.a.get("/projects").then((function(e){var t=e.data;n(t)})).finally((function(){return l(!1)}))}),[]);var j=[{title:"\u041f\u0440\u043e\u0435\u043a\u0442",dataIndex:"name",key:"name"},{title:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430",dataIndex:"tablename",key:"tablename"},{title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",dataIndex:"changes",key:"changes",render:function(e){return Object(G.jsx)(G.Fragment,{children:e?Object(G.jsx)(ge.a,{twoToneColor:"#52c41a",style:{fontSize:"16px"}}):Object(G.jsx)(ye.a,{twoToneColor:"#f5222d",style:{fontSize:"16px"}})})}},{title:"\u0414\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f",dataIndex:"users",key:"users",render:function(e){if(e.length)return Object(G.jsx)(G.Fragment,{children:e.map((function(e){return Object(G.jsx)(pe.a,{color:"blue",children:e.name},e.id)}))})}},{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",key:"action",render:function(e,t){return Object(G.jsxs)(fe.b,{size:"middle",children:[Object(G.jsx)(i.b,{to:"/projects/".concat(t.id,"/edit"),children:"\u0420\u0435\u0434"}),Object(G.jsx)(N.a,{type:"link",onClick:function(e){return function(e,t){var c=e.currentTarget;c.innerText="\u0423\u0434\u0430\u043b\u044f\u044e",p.a.delete("/projects/".concat(t)).then((function(e){var c=e.data,r=a.filter((function(e){return e.id!==t}));n(r),E.b.success(c.message)})).catch((function(e){return console.log(e)})).finally((function(){c.innerText="\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}))}(e,t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}}];return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("div",{className:"controls box",style:{padding:"14px 25px"},children:[Object(G.jsx)("b",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432"}),Object(G.jsx)(N.a,{type:"primary",style:{marginLeft:"auto"},children:Object(G.jsx)(i.b,{to:"/projects/create",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"})})]}),Object(G.jsx)("div",{className:"box",style:{marginTop:20},children:o?Object(G.jsx)(z,{}):Object(G.jsx)(ee.a,{style:{width:"100%"},rowKey:function(e){return e.id},columns:j,dataSource:a,pagination:{hideOnSinglePage:!0}})})]})},Se=function(){var e=c.a.useState([]),t=Object(v.a)(e,2),a=t[0],n=t[1],r=c.a.useState(!0),s=Object(v.a)(r,2),o=s[0],l=s[1];c.a.useEffect((function(){p.a.get("/users").then((function(e){var t=e.data;n(t)})).finally((function(){return l(!1)}))}),[]);var j=[{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",dataIndex:"name",key:"name",render:function(e,t){return Object(G.jsx)(G.Fragment,{children:t.isadmin?Object(G.jsxs)(G.Fragment,{children:[t.name," ",Object(G.jsx)(pe.a,{children:"admin"})]}):t.name})}},{title:"\u041b\u043e\u0433\u0438\u043d",dataIndex:"username",key:"username"},{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",key:"action",render:function(e,t){return Object(G.jsxs)(fe.b,{size:"middle",children:[Object(G.jsx)(i.b,{to:"/users/".concat(t.id,"/edit"),children:"\u0420\u0435\u0434"}),Object(G.jsx)(N.a,{type:"link",onClick:function(e){return function(e,t){var c=e.currentTarget;c.innerText="\u0423\u0434\u0430\u043b\u044f\u044e",p.a.delete("/users/".concat(t)).then((function(e){var c=e.data,r=a.filter((function(e){return e.id!==t}));n(r),E.b.success(c.message)})).catch((function(e){return console.log(e)})).finally((function(){c.innerText="\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}))}(e,t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}}];return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("div",{className:"controls box",style:{padding:"14px 25px"},children:[Object(G.jsx)("b",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}),Object(G.jsx)(N.a,{type:"primary",style:{marginLeft:"auto"},children:Object(G.jsx)(i.b,{to:"/users/create",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})})]}),Object(G.jsx)("div",{className:"box",style:{marginTop:20},children:o?Object(G.jsx)(z,{}):Object(G.jsx)(ee.a,{style:{width:"100%"},rowKey:function(e){return e.id},columns:j,dataSource:a,pagination:{hideOnSinglePage:!0}})})]})},Te=function(){var e=c.a.useState(!1),t=Object(v.a)(e,2),a=t[0],n=t[1];return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("div",{className:"controls box",style:{padding:"14px 25px"},children:[Object(G.jsx)("b",{children:"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(G.jsx)(N.a,{type:"primary",style:{marginLeft:"auto"},children:Object(G.jsx)(i.b,{to:"/users",children:"\u041d\u0430\u0437\u0430\u0434"})})]}),Object(G.jsx)("div",{className:"box",style:{marginTop:20},children:Object(G.jsxs)(_.a,{name:"basic",onFinish:function(e){n(!0),p.a.post("/users",e).then((function(e){var t=e.data;E.b.success(t.message)})).catch((function(){E.b.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")})).finally((function(){return n(!1)}))},initialValues:{isadmin:!1},autoComplete:"off",children:[Object(G.jsx)(_.a.Item,{label:"\u0418\u043c\u044f",name:"name",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{label:"\u041b\u043e\u0433\u0438\u043d",name:"username",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:Object(G.jsx)(w.a.Password,{})}),Object(G.jsx)(_.a.Item,{name:"isadmin",valuePropName:"checked",children:Object(G.jsx)(he.a,{children:"\u0410\u0434\u043c\u0438\u043d"})}),Object(G.jsx)(_.a.Item,{children:Object(G.jsx)(N.a,{type:"primary",htmlType:"submit",loading:a,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})})]})})]})},Ie=function(){var e=c.a.useState(!0),t=Object(v.a)(e,2),a=t[0],n=t[1],r=c.a.useState(!1),s=Object(v.a)(r,2),o=s[0],l=s[1],j=c.a.useState({}),d=Object(v.a)(j,2),b=d[0],O=d[1],h=Object(se.h)().id;c.a.useEffect((function(){p.a.get("/users/".concat(h,"/edit")).then((function(e){var t=e.data;O(t)})).catch((function(e){return console.log(e)})).finally((function(){n(!1)}))}),[h]);return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("div",{className:"controls box",style:{padding:"14px 25px"},children:[Object(G.jsx)("b",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(G.jsx)(N.a,{type:"primary",style:{marginLeft:"auto"},children:Object(G.jsx)(i.b,{to:"/users",children:"\u041d\u0430\u0437\u0430\u0434"})})]}),Object(G.jsx)("div",{className:"box",style:{marginTop:20},children:a?Object(G.jsx)(z,{}):Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(_.a,{name:"basic",onFinish:function(e){l(!0);var t=Object(u.a)({},e);p.a.put("/users/".concat(h),t).then((function(e){var t=e.data;E.b.success(t.message)})).catch((function(){E.b.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")})).finally((function(){return l(!1)}))},initialValues:b,autoComplete:"off",children:[Object(G.jsx)(_.a.Item,{label:"\u0418\u043c\u044f",name:"name",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{label:"\u041b\u043e\u0433\u0438\u043d",name:"username",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d!"}],children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(_.a.Item,{name:"isadmin",valuePropName:"checked",children:Object(G.jsx)(he.a,{children:"\u0410\u0434\u043c\u0438\u043d"})}),Object(G.jsx)(_.a.Item,{children:Object(G.jsx)(N.a,{type:"primary",htmlType:"submit",loading:o,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})})]})})})]})},_e=a(333),Ee=a(334),Ce=function(e){var t=e.onLogin,a=c.a.useState(!1),n=Object(v.a)(a,2),r=n[0],s=n[1],i=Object(o.b)(),l=Object(se.g)();return Object(G.jsx)("div",{className:"login",children:Object(G.jsxs)(_.a,{className:"login-form",onFinish:function(e){s(!0),p.a.get("/csrf-cookie").then((function(){p.a.post("/login",e).then((function(e){var a=e.data;localStorage.setItem("auth_name",a.name),i(D(a)),t(),l.push("/")})).catch((function(e){return E.b.error(e.response.data.message)}))})).finally((function(){return s(!1)}))},autoComplete:"off",size:"large",children:[Object(G.jsx)(_.a.Item,{name:"username",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d!"}],children:Object(G.jsx)(w.a,{prefix:Object(G.jsx)(_e.a,{className:"site-form-item-icon"}),placeholder:"\u041b\u043e\u0433\u0438\u043d"})}),Object(G.jsx)(_.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:Object(G.jsx)(w.a.Password,{prefix:Object(G.jsx)(Ee.a,{className:"site-form-item-icon"}),placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})}),Object(G.jsx)(_.a.Item,{children:Object(G.jsx)(N.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:r,children:"\u0412\u043e\u0439\u0442\u0438"})})]})})},we=function(){return Object(G.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(G.jsx)(V.a,{size:"large"})})},Le=(a(311),function(){var e=Object(o.b)(),t=c.a.useState(!1),a=Object(v.a)(t,2),n=a[0],r=a[1],s=c.a.useState(!1),i=Object(v.a)(s,2),l=i[0],j=i[1];return c.a.useEffect((function(){p.a.post("me").then((function(t){var a=t.data;e(D(a)),j(!0),r(!0)})).catch((function(){j(!0),r(!1)}))}),[]),n?Object(G.jsx)(Oe,{onSuccessLogout:function(){r(!1)}}):l?Object(G.jsx)(Ce,{onLogin:function(){r(!0)}}):Object(G.jsx)(we,{})});p.a.defaults.baseURL="http://admin.kolocall.com/api",p.a.defaults.withCredentials=!0,s.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(f.b,{locale:y.a,children:Object(G.jsx)(i.a,{children:Object(G.jsx)(o.a,{store:m,children:Object(G.jsx)(Le,{})})})})}),document.getElementById("root"))}},[[316,1,2]]]);
//# sourceMappingURL=main.bb446ab5.chunk.js.map