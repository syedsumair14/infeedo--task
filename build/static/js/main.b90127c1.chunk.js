(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,a){e.exports=a(93)},61:function(e,t,a){},81:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=a(44),l=a(19),i=a(24),m=a(18),u=a(17),d=a(9),p=a(10),h=a(13),E=a(11),g=a(14),f=a(12),v=(a(61),a(46)),b="https://jsonplaceholder.typicode.com/",y=a.n(v).a.create({baseURL:b,json:!0}),N={execute:function(e,t,a){return y({method:e,url:t,data:a})},get:function(e){return this.execute("get",b+e)},post:function(e,t){return this.exectu("post",b+e,t)},put:function(e,t){return this.execute("put",b+e,t)},delete:function(e){return this.execute("delete",b+e)}},w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).handleChange=function(e){var t,n=e.target;a.setState((t={},Object(u.a)(t,n.name,n.value),Object(u.a)(t,"emailError",""),Object(u.a)(t,"passwordError",""),t))},a.runValidations=function(){return"dear@infeedo.com"!==a.state.email?(a.setState({emailError:"Wrong Email"}),!1):"letMeIn"===a.state.password||(a.setState({passwordError:"Wrong Password"}),!1)},a.loginAttempt=function(){a.runValidations()&&a.props.loginAction({email:a.state.email,password:a.state.password})},a.state={},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){if(this.props.loginReducer.isAuth!==e.loginReducer.isAuth)return m.a.success("Logged in successfully"),this.props.history.push("/feed")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"inputBox"},r.a.createElement("span",{className:"errorClass"},this.state.emailError),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},placeholder:"Email",type:"email",name:"email"})),r.a.createElement("div",{className:"inputBox"},r.a.createElement("span",{className:"errorClass"},this.state.passwordError),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},placeholder:"Password",type:"password",name:"password"})),r.a.createElement("div",{onClick:this.loginAttempt,className:"text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"SIGN IN")))))}}]),t}(r.a.Component),O=Object(f.b)(function(e){return e},{loginAction:function(e){var t=e.email,a=e.password;return function(e){"dear@infeedo.com"===t&&"letMeIn"===a&&(localStorage.setItem("token","giveAccess"),e({type:"LOGIN",payload:!0}))}}})(w),C=(a(81),a(51)),j={display:"block",margin:"0 auto",borderColor:"red"},R=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).searchHandler=function(e){var t=e.target.value;a.setState({search:t})},a.viewDetails=function(e){var t=e.id,n=JSON.stringify(e);localStorage.setItem("".concat(t),n),a.props.history.push("/feed-details/".concat(t))},a.filterData=function(e){var t=a.state.search;return!(!e.title||!e.title.toLowerCase().includes(t.toLowerCase()))||(!(!e.body||!e.body.toLowerCase().includes(t.toLowerCase()))||void 0)},a.getCards=function(){return a.props.apiResult.filter(a.filterData).map(function(e,t){return r.a.createElement("div",{key:e.id,className:"card mt-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("li",null,r.a.createElement("div",{className:"comment_body text-center font-weight-bold"},r.a.createElement("h3",{className:"text-bold text-primary font-weight-bold"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.title.replace(new RegExp(a.state.search.toLowerCase(),"g"),'<span style="background-color: yellow;" >'.concat(a.state.search,"</span>"))}})),r.a.createElement("p",null,r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.body.replace(new RegExp(a.state.search.toLowerCase(),"g"),'<span style="background-color: yellow;" >'.concat(a.state.search,"</span>"))}})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("button",{onClick:function(){return a.viewDetails(e)},className:"btn btn-dark"},"Read more")))))})},a.toggleSearchBar=function(){a.setState({closeClass:!a.state.closeClass})},a.state={data:[],filterData:[],closeClass:!1,search:""},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.changeEditStatus(),0===this.props.apiResult.length&&this.props.getApi()}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"comment_block"},r.a.createElement("div",{id:"wrap row"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:"col-sm-12",autoComplete:"off"},r.a.createElement("input",{autoComplete:"off",onChange:this.searchHandler,id:"search",name:"search",type:"text",placeholder:"What title and body are we looking for ?"}),r.a.createElement("input",{id:"search_submit",type:"submit"})))),r.a.createElement("div",{className:"new_comment container p-5"},r.a.createElement("ul",{className:"user_comment"},this.getCards())),r.a.createElement(C.a,{css:j,sizeUnit:"px",size:150,color:"#123abc",loading:this.props.isLoading}))}}]),t}(n.Component),k=Object(f.b)(function(e){return{apiResult:e.getApiReducer.apiResult,isLoading:e.getApiReducer.isLoading}},{getApi:function(){return function(e){N.get("posts").then(function(t){return e({type:"API_RESULT",payload:t.data})})}},changeEditStatus:function(){return function(e){return e({type:"IS_EDIT",payload:!1})}}})(R),S=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).takeMeHome=function(){a.props.history.push("/feed")},a.logout=function(){localStorage.removeItem("token"),a.props.history.push("/")},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},r.a.createElement("a",{className:"navbar-brand"},"Infeedo"),r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{onClick:this.takeMeHome,className:"nav-link"},"Feed"))),r.a.createElement("a",{onClick:this.logout,className:"nav-link text-white"},"logout")))}}]),t}(r.a.Component),A=Object(l.g)(S),D=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).loadMoreComments=function(){a.setState({counter:a.state.counter+10})},a.showComments=function(){if(a.props.comments)return a.props.comments.map(function(e,t){if(t<a.state.counter)return r.a.createElement("div",{key:e.id,name:"fade-up",tag:"ul",className:"comments shadow"},r.a.createElement("li",null,r.a.createElement("div",{className:"comment-author-meta match"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:"http://orig07.deviantart.net/4bc8/f/2013/240/2/2/free_avatar_aang_icon_by_zutarart-d6k31hx.gif",alt:"comment.user"})),r.a.createElement("div",{className:"user"},e.name)),r.a.createElement("div",{className:"comment-text"},r.a.createElement("p",{style:{whiteSpace:"pre-line"}},e.body)),r.a.createElement("div",{className:"comment-meta"},r.a.createElement("span",null,e.email))))})},a.state={counter:10},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.loadComments(this.props.id)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{id:"comments",className:"comments-wrapper"},r.a.createElement("h2",null,r.a.createElement("span",null," Comments")),this.showComments()),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"offset-5"}),r.a.createElement("div",{className:"col-md-3 pb-5"},r.a.createElement("a",{onClick:this.loadMoreComments},"Load more")))))}}]),t}(r.a.Component),I=Object(f.b)(function(e){return{comments:e.loadCommentsReducer.comments}},{loadComments:function(e){return function(t){N.get("posts/".concat(e,"/comments")).then(function(e){return t({type:"LOAD_COMMENTS",payload:e.data})})}}})(D),T=(a(89),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).deletePost=function(){a.props.deleteGetApi(a.props.match.params.id),m.a.error("Post Deleted")},a.savePost=function(){var e=a.props.match.params.id;a.props.editAPI(a.state.title,a.state.body,e),m.a.warning("Edited")},a.handleChange=function(e,t){a.setState(Object(u.a)({},t,e.target.value))},a.state={details:{},editTrue:!1,isEdited:!1},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;if(!localStorage.getItem(this.props.match.params.id))return this.props.getDetail(e);var t=JSON.parse(localStorage.getItem(e));this.setState({title:t.title,body:t.body})}},{key:"componentDidUpdate",value:function(e){e&&e.getApiReducer&&this.props.getApiReducer&&e.getApiReducer.apiResult!==this.props.getApiReducer.apiResult&&this.props.history.push("/feed"),e&&e.getApiReducer&&this.props.getApiReducer&&e.getApiReducer.apiResult.length===this.props.getApiReducer.apiResult.length&&this.props.getApiReducer.isEdited&&this.props.history.push("/feed")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",null,r.a.createElement("div",{className:" row "},r.a.createElement("div",{className:"offset-sm-10 col-sm-2"},this.state.editTrue?r.a.createElement("abbr",{title:"Save post"},r.a.createElement("a",{onClick:this.savePost},r.a.createElement("img",{alt:"Save Button",src:"https://img.icons8.com/carbon-copy/66/000000/save.png"}))):r.a.createElement("abbr",{title:"Delete post"},r.a.createElement("a",{onClick:this.deletePost},r.a.createElement("img",{alt:"Delete Button",src:"https://img.icons8.com/wired/50/000000/delete-forever.png"}))),this.state.editTrue?r.a.createElement("abbr",{title:"Cancel"},r.a.createElement("a",{onClick:function(){return e.setState({editTrue:!e.state.editTrue})}},r.a.createElement("img",{alt:"Cancel Button",src:"https://img.icons8.com/pastel-glyph/48/000000/cancel.png"}))):r.a.createElement("abbr",{title:"Edit post"},r.a.createElement("a",{onClick:function(){return e.setState({editTrue:!e.state.editTrue})}},r.a.createElement("img",{alt:"Save Button",src:"https://img.icons8.com/wired/48/000000/edit.png"})))))),this.state.editTrue?r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{onChange:function(t){return e.handleChange(t,"title")},value:this.state.title,className:"form-control",rows:"5"})):r.a.createElement("h1",{className:"newspaper-title text-primary"},this.state.title),r.a.createElement("article",{className:"main-article shadow"},r.a.createElement("h4",{className:"author"}," Description"),this.state.editTrue?r.a.createElement("textarea",{className:"form-control",onChange:function(t){return e.handleChange(t,"body")},rows:"10",value:this.state.body}):r.a.createElement("div",null,this.props.getDetailReducer.details?this.props.getDetailReducer.details.body:this.state.body)),r.a.createElement(I,{id:this.props.match.params.id})))}}]),t}(r.a.Component)),x=Object(f.b)(function(e){return e},{getDetail:function(e){return function(t){N.get("posts/".concat(e)).then(function(e){return t({type:"GET_DETAIL",payload:e.data})})}},deleteGetApi:function(e){return function(t){return t({type:"DELETE_POST",payload:e})}},editAPI:function(e,t,a){return function(n){return n({type:"EDIT_API",payload:{title:e,body:t,id:a}})}}})(T),L=(a(90),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",id:"fourZeroFour"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("p",{id:"makeBig"},"NO SUCH PAGE :P"),r.a.createElement("p",{className:"text-center"},"Instead go to ",r.a.createElement(i.b,{to:"/feed"},"FEED")," page"))))});a(91);m.a.configure();var _,P=function(){return Object(m.a)("Sample")},M=function(e){var t=e.component,a=Object(s.a)(e,["component"]);return _=!!localStorage.getItem("token"),r.a.createElement(l.b,Object.assign({},a,{render:function(e){return _?r.a.createElement("div",null,r.a.createElement(A,null),P,r.a.createElement(t,e)):r.a.createElement(l.a,{to:"/"})}}))};var B=function(){return r.a.createElement(i.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:O}),r.a.createElement(M,{exact:!0,path:"/feed",component:k}),r.a.createElement(M,{exact:!0,path:"/feed-details/:id",component:x}),r.a.createElement(M,{component:L})))},G=(a(92),a(21)),H=a(50),U=a(16),J={isAuth:!1,apiResult:[],isLoading:!0},z=Object(G.c)({loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(U.a)({},e,{isAuth:t.payload});default:return e}},getApiReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"API_RESULT":return Object(U.a)({},e,{apiResult:t.payload,isLoading:!1});case"DELETE_POST":var a=e.apiResult.filter(function(e,a){return e.id!==t.payload});return Object(U.a)({},e,{apiResult:a});case"EDIT_API":var n=e.apiResult.findIndex(function(e){return e.id===Number(t.payload.id)}),r=Object(U.a)({},e.apiResult[n],{title:t.payload.title,body:t.payload.body});return e.apiResult.splice(n,1,r),Object(U.a)({},e,{apiResult:e.apiResult,isEdited:!0});case"IS_EDIT":return Object(U.a)({},e,{isEdited:!1});default:return e}},getDetailReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DETAIL":return Object(U.a)({},e,{details:t.payload});default:return e}},loadCommentsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_COMMENTS":return Object(U.a)({},e,{comments:t.payload});default:return e}}}),F=[H.a],W=Object(G.d)(z,G.a.apply(void 0,F));o.a.render(r.a.createElement(f.a,{store:W},r.a.createElement(B,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.b90127c1.chunk.js.map