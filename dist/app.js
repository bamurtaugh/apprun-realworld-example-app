!function(e){"use strict";var t="default"in e?e.default:e;function a(e,t,a,n){var r,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(l<3?r(s):l>3?r(t,a,s):r(t,a))||s);return l>3&&s&&Object.defineProperty(t,a,s),s}function n(e,t,a,n){return new(a||(a=Promise))((function(r,l){function s(e){try{c(n.next(e))}catch(e){l(e)}}function o(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,o)}c((n=n.apply(e,t||[])).next())}))}class r extends e.Component{constructor(){super(...arguments),this.state={},this.view=e=>{const a=e.user;return t.createElement("ul",{class:"nav navbar-nav pull-xs-right"},t.createElement("li",{class:"nav-item"},t.createElement("a",{class:"nav-link active",href:"#/"},"Home")),a&&t.createElement("li",{class:"nav-item"},t.createElement("a",{class:"nav-link",href:"#/editor"},t.createElement("i",{class:"ion-compose"})," New Post")),a&&t.createElement("li",{class:"nav-item"},t.createElement("a",{class:"nav-link",href:"#/settings"},t.createElement("i",{class:"ion-gear-a"})," Settings")),!a&&t.createElement("li",{class:"nav-item"},t.createElement("a",{class:"nav-link",href:"#/login"},"Sign In")),!a&&t.createElement("li",{class:"nav-item"},t.createElement("a",{class:"nav-link",href:"#/register"},"Sign Up")),a&&t.createElement("li",{class:"nav-item"},t.createElement("a",{class:"nav-link",href:`#/profile/${a.username}`},a.username)),a&&t.createElement("li",{class:"nav-item"},t.createElement("a",{class:"nav-link",href:"#/logout"},"Sign Out")))},this.setUser=(e,t)=>Object.assign(Object.assign({},e),{user:t})}}a([e.on("/set-user")],r.prototype,"setUser",void 0),(new r).start("header");let l=window&&window.localStorage&&window.localStorage.getItem("jwt")||"";function s(e){l=e,window.localStorage&&(e?window.localStorage.setItem("jwt",e):window.localStorage.removeItem("jwt"))}function o(e,t,a){return n(this,void 0,void 0,(function*(){const n={"Content-Type":"application/json; charset=utf-8"};l&&(n.Authorization=`Token ${l}`);const r=yield window.fetch(`${defaultBasePath}${t}`,{method:e,headers:n,body:a&&JSON.stringify(a)});if(401===r.status)throw s(null),new Error("401");const o=yield r.json();if(!r.ok)throw o;return o}))}function c(e){return o("GET",e)}function i(e,t){return o("POST",e,t)}function m(e){return o("DELETE",e)}function u(e,t){return o("PUT",e,t)}function d(e){const t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")}function p(e){let t={};if("object"==typeof e&&"FORM"==e.nodeName)for(let a=0;a<e.elements.length;a++){const n=e.elements[a];if(n.name&&"file"!=n.type&&"reset"!=n.type&&"submit"!=n.type&&"button"!=n.type)if("select-multiple"==n.type){t[n.name]="";let r="";for(let t=0;t<e.elements[a].options.length;t++)n.options[t].selected&&(r+=n.options[t].value+";");";"===r.charAt(r.length-1)&&(t[n.name]=r.substring(0,r.length-1))}else("checkbox"!=n.type&&"radio"!=n.type||n.checked)&&(t[n.name]=n.value)}return t}window.defaultBasePath="https://conduit.productionready.io/api";const g=()=>c("/tags"),f=()=>l?c("/user"):null,E=e=>i("/users/login",{user:e}),h=e=>i("/users",{user:e}),v=e=>u("/user",{user:e}),b=()=>!!t.user||t.run("#/login")&&!1,y=e=>c(`/articles?${d(e)}`),w=e=>c(`/articles/feed?${d(e)}`),x=e=>c(`/articles/${e}`),O=e=>m(`/articles/${e}`),j=e=>i(`/articles/${e}/favorite`),k=e=>m(`/articles/${e}/favorite`),$=e=>u(`/articles/${e.slug}`,{article:e}),S=e=>i("/articles",{article:e}),C=(e,t)=>i(`/articles/${e}/comments`,{comment:t}),A=(e,t)=>m(`/articles/${e}/comments/${t}`),P=e=>c(`/articles/${e}/comments`),D=e=>c(`/profiles/${e}`),I=e=>i(`/profiles/${e}/follow`),U=e=>m(`/profiles/${e}/follow`);function F(e){const a=e.article,n=a.favorited?"btn-primary":"btn-outline-primary";return t.createElement("div",{class:"article-preview"},t.createElement("div",{class:"article-meta"},t.createElement("a",{href:a.author.image},t.createElement("img",{src:a.author.image})),t.createElement("div",{class:"info"},t.createElement("a",{href:`#/profile/${a.author.username}`,class:"author"},a.author.username),t.createElement("span",{class:"date"},new Date(a.updatedAt).toLocaleString())),t.createElement("button",{class:`btn btn-sm pull-xs-right ${n}`,onclick:n=>t.run("toggle-fav-article",a,e.component)},t.createElement("i",{class:"ion-heart"})," ",a.favoritesCount)),t.createElement("a",{href:`#/article/${a.slug}`,class:"preview-link"},t.createElement("h1",null,a.title),t.createElement("p",null,a.description),t.createElement("span",null,"Read more..."),t.createElement("ul",{class:"tag-list"},a.tagList.map(e=>t.createElement("li",{class:"tag-default tag-pill tag-outline"},t.createElement("a",{href:`#/tag/${e}`},e," "))))))}function R({articles:e,component:a}){return e.length?e.map(e=>t.createElement(F,{article:e,component:a})):t.createElement("div",{class:"article-preview"},"No articles are here... yet.")}function L({max:e,selected:a,link:n}){const r=new Array(e).fill(0);return t.createElement("nav",null,t.createElement("ul",{class:"pagination"},r.map((e,r)=>t.createElement("li",{class:`page-item ${r+1===a?"active":""}`},t.createElement("a",{href:`${n}/${r+1}`,class:"page-link"},r+1)))))}t.on("/get-user",()=>n(void 0,void 0,void 0,(function*(){try{const e=yield f();e&&t.run("/set-user",e.user)}catch(e){s(null),document.location.reload(!0)}}))),t.on("/set-user",e=>{t.user=e,s(e?e.token:null)}),t.on("/toggle-follow",(e,t)=>n(void 0,void 0,void 0,(function*(){if(!b())return;const a=e.following?yield U(e.username):yield I(e.username);t.run("update-follow",a.profile)}))),t.on("/toggle-fav-article",(e,t)=>n(void 0,void 0,void 0,(function*(){if(!b())return;const a=e.favorited?yield k(e.slug):yield j(e.slug);t.run("update-article",a.article)})));const T=({tag:e})=>t.createElement("a",{href:`#/tag/${e}/1`,class:"tag-pill tag-default"},e);class M extends e.Component{constructor(){super(...arguments),this.state={type:"",articles:[],tags:[],max:1,page:1},this.view=e=>{const a="tag"===e.type&&e.tag?`/${e.tag}`:"";return t.createElement("div",{class:"home-page"},t.createElement("div",{class:"banner"},t.createElement("div",{class:"container"},t.createElement("h1",{class:"logo-font"},"conduit"),t.createElement("p",null,"A place to share your knowledge."))),t.createElement("div",{class:"container page"},t.createElement("div",{class:"row"},t.createElement("div",{class:"col-md-9"},t.createElement("div",{class:"feed-toggle"},t.createElement("ul",{class:"nav nav-pills outline-active"},t.createElement("li",{class:"nav-item"},t.createElement("a",{class:`nav-link ${t.user?"":"disabled"} ${"feed"===e.type?"active":""}`,href:"#/feed"},"Your Feed")),t.createElement("li",{class:"nav-item"},t.createElement("a",{class:`nav-link ${""===e.type?"active":""}`,href:"#/"},"Global Feed")),e.tag?t.createElement("li",{class:"nav-item"},t.createElement("a",{class:`nav-link ${"tag"===e.type?"active":""}`,href:`#/tag/${e.tag}`},"#",e.tag)):"")),t.createElement(R,{articles:e.articles,component:this}),t.createElement(L,{max:Math.floor(e.max/10),selected:e.page,link:`#/${e.type}${a}`})),t.createElement("div",{class:"col-md-3"},t.createElement("div",{class:"sidebar"},t.createElement("p",null,"Popular Tags"),t.createElement("div",{class:"tag-list"},e.tags.map(e=>t.createElement(T,{tag:e}))))))))},this.updateState=(e,t,a,r)=>n(this,void 0,void 0,(function*(){try{let n=e.tags.length?{tags:e.tags}:yield g();a=parseInt(a)||1,r=r||e.tag;const l=10,s=10*(a-1);let o;switch(t){case"feed":if(!b())return Object.assign(Object.assign({},e),{articles:[],max:0});o=yield w({limit:l,offset:s});break;case"tag":o=yield y({tag:r,limit:l,offset:s});break;default:o=yield y({limit:l,offset:s})}return a=Math.min(a,Math.floor(o.articlesCount/10)+1),Object.assign(Object.assign({},e),{tags:n.tags,type:t,page:a,tag:r,articles:o.articles,max:o.articlesCount})}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t,articles:[],max:0})}})),this.root=(e,t)=>n(this,void 0,void 0,(function*(){return yield this.updateState(e,"",t)})),this.feed=(e,t)=>n(this,void 0,void 0,(function*(){return yield this.updateState(e,"feed",t)})),this.tag=(e,t,a)=>n(this,void 0,void 0,(function*(){return yield this.updateState(e,"tag",a,t)})),this.updateArticle=(e,t)=>(e.articles=e.articles.map(e=>e.slug===t.slug?t:e),e)}}function N({errors:e}){return t.createElement("ul",{class:"error-messages"},Object.keys(e).map(a=>t.createElement("li",null,`${a} ${e[a]}`)))}a([e.on("#/")],M.prototype,"root",void 0),a([e.on("#/feed")],M.prototype,"feed",void 0),a([e.on("#/tag")],M.prototype,"tag",void 0),a([e.on("update-article")],M.prototype,"updateArticle",void 0),(new M).mount("my-app");class Y extends e.Component{constructor(){super(...arguments),this.state={},this.view=e=>{if(e&&!(e instanceof Promise))return t.createElement("div",{class:"auth-page"},t.createElement("div",{class:"container page"},t.createElement("div",{class:"row"},t.createElement("div",{class:"col-md-6 offset-md-3 col-xs-12"},t.createElement("h1",{class:"text-xs-center"},"Sign In"),t.createElement("p",{class:"text-xs-center"},t.createElement("a",{href:"#/register"},"Need an account?")),e.errors&&t.createElement(N,{errors:e.errors}),t.createElement("form",{onsubmit:e=>this.run("sign-in",e)},t.createElement("fieldset",{class:"form-group"},t.createElement("input",{class:"form-control form-control-lg",type:"text",placeholder:"Email",name:"email"})),t.createElement("fieldset",{class:"form-group"},t.createElement("input",{class:"form-control form-control-lg",type:"password",placeholder:"Password",name:"password"})),t.createElement("button",{class:"btn btn-lg btn-primary pull-xs-right"},"Sign In"))))))},this.login=e=>Object.assign(Object.assign({},e),{messages:[],returnTo:document.location.hash}),this.logout=e=>{t.run("/set-user",null),document.location.hash="#/"},this.signIn=(e,a)=>n(this,void 0,void 0,(function*(){try{a.preventDefault();const n=yield E(p(a.target));t.run("/set-user",n.user);const r=(e.returnTo||"").replace(/\#\/login\/?/,"");r?(t.run("route",r),history.pushState(null,null,r)):document.location.hash="#/feed"}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t})}}))}}a([e.on("#/login")],Y.prototype,"login",void 0),a([e.on("#/logout")],Y.prototype,"logout",void 0),a([e.on("sign-in")],Y.prototype,"signIn",void 0),(new Y).mount("my-app");class K extends e.Component{constructor(){super(...arguments),this.state={},this.view=e=>{if(e&&!(e instanceof Promise))return t.createElement("div",{class:"auth-page"},t.createElement("div",{class:"container page"},t.createElement("div",{class:"row"},t.createElement("div",{class:"col-md-6 offset-md-3 col-xs-12"},t.createElement("h1",{class:"text-xs-center"},"Sign Up"),t.createElement("p",{class:"text-xs-center"},t.createElement("a",{href:"#/login"},"Have an account?")),e.errors&&t.createElement(N,{errors:e.errors}),t.createElement("form",{onsubmit:e=>this.run("register",e)},t.createElement("fieldset",{class:"form-group"},t.createElement("input",{class:"form-control form-control-lg",type:"text",placeholder:"Your Name",name:"username"})),t.createElement("fieldset",{class:"form-group"},t.createElement("input",{class:"form-control form-control-lg",type:"text",placeholder:"Email",name:"email"})),t.createElement("fieldset",{class:"form-group"},t.createElement("input",{class:"form-control form-control-lg",type:"password",placeholder:"Password",name:"password"})),t.createElement("button",{class:"btn btn-lg btn-primary pull-xs-right"},"Sign up"))))))},this.register=(e,t)=>Object.assign(Object.assign({},e),{messages:t}),this.submitRegistration=(e,a)=>n(this,void 0,void 0,(function*(){try{a.preventDefault();const e=yield h(p(a.target));t.run("#user",e.user),t.run("route","#/")}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t})}}))}}a([e.on("#/register")],K.prototype,"register",void 0),a([e.on("register")],K.prototype,"submitRegistration",void 0),(new K).mount("my-app");class z extends e.Component{constructor(){super(...arguments),this.state={name:"",type:"articles",articles:[],page:1},this.view=e=>{const a=e.profile;if(a)return t.createElement("div",{class:"profile-page"},t.createElement("div",{class:"user-info"},t.createElement("div",{class:"container"},t.createElement("div",{class:"row"},t.createElement("div",{class:"col-xs-12 col-md-10 offset-md-1"},t.createElement("img",{src:a.image,class:"user-img"}),t.createElement("h4",null,a.username),t.createElement("p",null,a.bio),t.createElement("button",{class:"btn btn-sm btn-outline-secondary action-btn",onclick:e=>t.run("/toggle-follow",a,this)},a.following?t.createElement("span",null,t.createElement("i",{class:"ion-minus-round"})," Unfollow ",a.username):t.createElement("span",null,t.createElement("i",{class:"ion-plus-round"})," Follow ",a.username)))))),t.createElement("div",{class:"container"},t.createElement("div",{class:"row"},t.createElement("div",{class:"col-xs-12 col-md-10 offset-md-1"},t.createElement("div",{class:"articles-toggle"},t.createElement("ul",{class:"nav nav-pills outline-active"},t.createElement("li",{class:"nav-item"},t.createElement("a",{class:`nav-link ${"articles"===e.type?"active":""}`,href:`#/profile/${a.username}/articles/1`},"My Articles")),t.createElement("li",{class:"nav-item"},t.createElement("a",{class:`nav-link ${"favorites"===e.type?"active":""}`,href:`#/profile/${a.username}/favorites/1`},"Favorited Articles")))),t.createElement(R,{articles:e.articles,component:this}),t.createElement(L,{max:Math.floor(e.max/10),selected:e.page,link:`#/profile/${e.profile.username}/${e.type}`})))))},this.updateState=(e,t,a,r)=>n(this,void 0,void 0,(function*(){t=decodeURIComponent(t||e.name),a=a||e.type,r=parseInt(r)||e.page;let n=e;if(t!==e.name){const e=yield D(t);n=Object.assign(Object.assign({},n),{profile:e.profile})}if(t!==e.name||a!==e.type||r!==e.page){const e=10,l=(r-1)*e,s="favorites"===a?yield y({favorited:t,offset:l,limit:e}):yield y({author:t,offset:l,limit:e});n=Object.assign(Object.assign({},n),{name:t,type:a,page:r,articles:s.articles,max:s.articlesCount})}return n})),this.root=(e,t,a,n)=>this.updateState(e,t,a,n),this.updateArticle=(e,t)=>(e.articles=e.articles.map(e=>e.slug===t.slug?t:e),e),this.updateFollow=(e,t)=>Object.assign(Object.assign({},e),{profile:t})}}function W({title:e,body:a,ok:n,cancel:r,onOK:l,onCancel:s}){return t.createElement("div",{class:"modal-open"},t.createElement("div",{class:"modal-dialog",role:"document"},t.createElement("div",{class:"modal-content"},t.createElement("div",{class:"modal-header"},t.createElement("h5",{class:"modal-title"},e,t.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onclick:e=>s(e)},t.createElement("span",{"aria-hidden":"true"},"×")))),t.createElement("div",{class:"modal-body"},t.createElement("p",null,a)),t.createElement("div",{class:"modal-footer"},r&&t.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onclick:e=>s(e)},r),"  ",t.createElement("button",{type:"button",class:"btn btn-primary",onclick:e=>l(e)},n)))),t.createElement("div",{class:"modal-backdrop show",onclick:e=>s(e)}))}a([e.on("#/profile")],z.prototype,"root",void 0),a([e.on("update-article")],z.prototype,"updateArticle",void 0),a([e.on("update-follow")],z.prototype,"updateFollow",void 0),(new z).mount("my-app");class B extends e.Component{constructor(){super(...arguments),this.state={},this.view=e=>{const a=e.user;if(a)return t.createElement("div",{class:"settings-page"},e.showModal?t.createElement(W,{title:"Confirmation",body:"Your settings has been updated successfully.",ok:"OK",cancel:"Cancel",onOK:e=>this.run("ok",e),onCancel:e=>this.run("cancel",e)}):"",t.createElement("div",{class:"container page"},t.createElement("div",{class:"row"},t.createElement("div",{class:"col-md-6 offset-md-3 col-xs-12"},e.errors&&t.createElement(N,{errors:e.errors}),t.createElement("h1",{class:"text-xs-center"},"Your Settings"),t.createElement("form",{onsubmit:e=>this.run("submit-settings",e)},t.createElement("fieldset",null,t.createElement("fieldset",{class:"form-group"},t.createElement("input",{class:"form-control",type:"text",placeholder:"URL of profile picture",name:"image",value:a.image})),t.createElement("fieldset",{class:"form-group"},t.createElement("input",{class:"form-control form-control-lg",type:"text",placeholder:"Your Name",name:"username",value:a.username})),t.createElement("fieldset",{class:"form-group"},t.createElement("textarea",{class:"form-control form-control-lg",rows:"8",placeholder:"Short bio about you",name:"bio"},a.bio)),t.createElement("fieldset",{class:"form-group"},t.createElement("input",{class:"form-control form-control-lg",type:"text",placeholder:"Email",name:"email",value:a.email})),t.createElement("fieldset",{class:"form-group"},t.createElement("input",{class:"form-control form-control-lg",type:"password",placeholder:"Password",name:"password",value:a.password})),t.createElement("button",{class:"btn btn-lg btn-primary pull-xs-right"},"Update Settings")))))))},this.settings=e=>{if(b())return{user:t.user}},this.submitSettings=(e,a)=>n(this,void 0,void 0,(function*(){try{a.preventDefault();const e=p(a.target),n=yield v(e);return t.run("#user",n.user),{showModal:!0}}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t})}})),this.ok=e=>({showModel:!1})}}a([e.on("#/settings")],B.prototype,"settings",void 0),a([e.on("submit-settings")],B.prototype,"submitSettings",void 0),a([e.on("ok, cancel")],B.prototype,"ok",void 0),(new B).mount("my-app");class G extends e.Component{constructor(){super(...arguments),this.state={},this.view=e=>{if(!t.user||!e.article)return;const a=e.article;return t.createElement("div",{class:"editor-page"},t.createElement("div",{class:"container page"},t.createElement("div",{class:"row"},t.createElement("div",{class:"col-md-10 offset-md-1 col-xs-12"},e.errors&&t.createElement(N,{errors:e.errors}),t.createElement("form",{onsubmit:e=>this.run("submit-article",e)},a.slug&&t.createElement("input",{type:"hidden",name:"slug",value:a.slug}),t.createElement("fieldset",null,t.createElement("fieldset",{class:"form-group"},t.createElement("input",{type:"text",class:"form-control form-control-lg",placeholder:"Article Title",name:"title",value:a.title})),t.createElement("fieldset",{class:"form-group"},t.createElement("input",{type:"text",class:"form-control",placeholder:"What's this article about?",name:"description",value:a.description})),t.createElement("fieldset",{class:"form-group"},t.createElement("textarea",{class:"form-control",rows:"8",placeholder:"Write your article (in markdown)",name:"body"},a.body)),t.createElement("fieldset",{class:"form-group"},t.createElement("input",{type:"text",class:"form-control",placeholder:"Enter tags",name:"tags",value:a.tagList.join(", ")}),t.createElement("div",{class:"tag-list"})),t.createElement("button",{class:"btn btn-lg pull-xs-right btn-primary",type:"submit"},"Publish Article")))))))},this.root=(e,t)=>n(this,void 0,void 0,(function*(){if(!b())return;let e;if(t){e=(yield x(t)).article}return e=e||{title:"",description:"",body:"",tagList:[]},{article:e}})),this.submitArticle=(e,t)=>n(this,void 0,void 0,(function*(){try{t.preventDefault();const e=p(t.target);e.tagList=e.tags.split(",");const a=e.slug?yield $(e):yield S(e);document.location.hash=`#/article/${a.article.slug}`}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t})}}))}}function H({comment:e}){return t.createElement("div",{class:"card"},t.createElement("div",{class:"card-block"},t.createElement("p",{class:"card-text"},t.createElement("p",null,`_html:${marked(e.body,{sanitize:!0})}`))),t.createElement("div",{class:"card-footer"},t.createElement("a",{class:"comment-author"},t.createElement("img",{src:e.author.image,class:"comment-author-img"}))," ",t.createElement("a",{class:"comment-author",href:`#/profile/${e.author.username}`},e.author.username),t.createElement("span",{class:"date-posted"},new Date(e.createdAt).toLocaleString()),t.user&&t.user.username===e.author.username&&t.createElement("span",{class:"mod-options"},t.createElement("i",{class:"ion-trash-a",onclick:a=>t.run("/delete-comment",e)}))))}function _({comments:e}){const a=t.user;return t.createElement("div",{class:"row"},t.createElement("div",{class:"col-xs-12 col-md-8 offset-md-2"},a?t.createElement("form",{class:"card comment-form",onsubmit:e=>t.run("/new-comment",e)},t.createElement("div",{class:"card-block"},t.createElement("textarea",{class:"form-control",placeholder:"Write a comment...",rows:"3",name:"comment"})),t.createElement("div",{class:"card-footer"},a.image?t.createElement("img",{src:a.image,class:"comment-author-img"}):t.createElement("span",null,"@",a.username),t.createElement("button",{class:"btn btn-sm btn-primary",type:"submit"},"Post Comment"))):t.createElement("p",null,t.createElement("a",{href:`#/login/${document.location.hash}`},"Sign in")," or ",t.createElement("a",{href:"#/register"},"sign up")," to add comments on this article."),e.map(e=>t.createElement(H,{comment:e}))))}function J({article:e,component:a}){const n=e.favorited?"btn-primary":"btn-outline-primary",r=e.author.following?"btn-secondary":"btn-outline-secondary";return t.createElement("div",{class:"article-meta"},t.createElement("a",{href:e.author.image},t.createElement("img",{src:e.author.image})),t.createElement("div",{class:"info"},t.createElement("a",{href:`#/profile/${e.author.username}`,class:"author"},e.author.username),t.createElement("span",{class:"date"},new Date(e.updatedAt).toLocaleString())),t.user&&t.user.username===e.author.username?t.createElement("span",null,t.createElement("button",{class:"btn btn-sm btn-outline-secondary",onclick:t=>a.run("edit-article",e)},t.createElement("i",{class:"ion-edit"}),"  Edit Article"),"  ",t.createElement("button",{class:"btn btn-sm btn-outline-danger",onclick:t=>a.run("delete-article",e)},t.createElement("i",{class:"ion-trash-o"}),"  Delete Article")):t.createElement("span",null,t.createElement("button",{class:`btn btn-sm ${r}`,onclick:n=>t.run("/toggle-follow",e.author,a)},e.author.following?t.createElement("span",null,t.createElement("i",{class:"ion-minus-round"})," Unfollow ",e.author.username):t.createElement("span",null,t.createElement("i",{class:"ion-plus-round"})," Follow ",e.author.username))," ","  ",t.createElement("button",{class:`btn btn-sm ${n}`,onclick:n=>t.run("/toggle-fav-article",e,a)},t.createElement("i",{class:"ion-heart"}),"  Favorite Post ",t.createElement("span",{class:"counter"},"(",e.favoritesCount,")"))))}a([e.on("#/editor")],G.prototype,"root",void 0),a([e.on("submit-article")],G.prototype,"submitArticle",void 0),(new G).mount("my-app");class q extends e.Component{constructor(){super(...arguments),this.state={article:null,comments:[]},this.view=e=>{const a=e.article;if(a)return t.createElement("div",{class:"article-page"},e.deleting&&t.createElement(W,{title:"Delete Article",body:"Are you sure you want to delete this article?",ok:"Delete",cancel:"No",onOK:e=>this.run("ok-delete-article",e),onCancel:e=>this.run("cancel-delete-article",e)}),t.createElement("div",{class:"banner"},t.createElement("div",{class:"container"},t.createElement("h1",null,a.title),t.createElement(J,{article:a,component:this}))),t.createElement("div",{class:"container page"},t.createElement("div",{class:"row article-content"},t.createElement("div",{class:"col-md-12"},t.createElement("p",null,`_html:${marked(a.body,{sanitize:!0})}`),t.createElement("div",{class:"tag-list"},t.createElement("br",null),a.tagList.map(e=>t.createElement("li",{class:"tag-default tag-pill tag-outline"},t.createElement("a",{href:`#/tag/${e}`},e," ")))))),t.createElement("hr",null),t.createElement("div",{class:"article-actions"},t.createElement(J,{article:a,component:this})),t.createElement(_,{comments:e.comments})))},this.root=(e,t)=>n(this,void 0,void 0,(function*(){let a=e.article,n=e.comments;if(!a||a.slug!==t){a=(yield x(t)).article,n=(yield P(a.slug)).comments}return Object.assign(Object.assign({},e),{article:a,comments:n})})),this.newComment=(e,t)=>n(this,void 0,void 0,(function*(){try{t.preventDefault();const a=t.target.comment.value;if(!a)return;yield C(e.article.slug,{body:a});const n=yield P(e.article.slug);return Object.assign(Object.assign({},e),{comments:n.comments})}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t})}})),this.deleteComment=(e,t)=>n(this,void 0,void 0,(function*(){yield A(this.state.article.slug,t.id);const a=yield P(e.article.slug);return Object.assign(Object.assign({},e),{comments:a.comments})})),this.updateArticle=(e,t)=>Object.assign(Object.assign({},e),{article:t}),this.updateFollow=(e,t)=>(e.article.author=t,e),this.editArticle=(e,t)=>{document.location.hash=`#/editor/${t.slug}`},this.deleteArticle=(e,t)=>Object.assign(Object.assign({},e),{deleting:!0}),this.okDelete=(e,t)=>(O(e.article.slug),document.location.hash="#/",Object.assign(Object.assign({},e),{deleting:!1})),this.cancelDelete=(e,t)=>Object.assign(Object.assign({},e),{deleting:!1})}}a([e.on("#/article")],q.prototype,"root",void 0),a([e.on("/new-comment")],q.prototype,"newComment",void 0),a([e.on("/delete-comment")],q.prototype,"deleteComment",void 0),a([e.on("update-article")],q.prototype,"updateArticle",void 0),a([e.on("update-follow")],q.prototype,"updateFollow",void 0),a([e.on("edit-article")],q.prototype,"editArticle",void 0),a([e.on("delete-article")],q.prototype,"deleteArticle",void 0),a([e.on("ok-delete-article")],q.prototype,"okDelete",void 0),a([e.on("cancel-delete-article")],q.prototype,"cancelDelete",void 0),(new q).mount("my-app"),t.on("#",(e,...a)=>{t.run(`#/${e||""}`,...a)}),t.run("/get-user")}(apprun);
//# sourceMappingURL=app.js.map
