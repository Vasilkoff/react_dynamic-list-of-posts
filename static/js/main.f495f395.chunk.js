(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),s=n(1),u=(n(10),n(11),n(12),n(4)),l="https://mate-api.herokuapp.com";function i(e){return fetch("".concat(l,"/comments")).then((function(e){return e.json()})).then((function(t){return t.data.filter((function(t){return t.postId===e}))}))}var m=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),o=n[0],r=n[1],u=Object(a.useState)(!1),i=Object(s.a)(u,2),m=i[0],f=i[1],d=Object(a.useState)(""),b=Object(s.a)(d,2),p=b[0],h=b[1],E=Object(a.useCallback)((function(){return fetch("".concat(l,"/posts")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(t){t&&!+e.userId?r(t):t&&r(t.filter((function(t){return t.userId===+e.userId})))}))}),[e.userId]);return Object(a.useEffect)((function(){E()}),[e.userId,E]),c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},o?o.map((function(t){return c.a.createElement("li",{className:"PostsList__item",key:t.id},c.a.createElement("div",null,c.a.createElement("b",null,"[User #",t.userId,"]:"," "),t.title),m&&p===t.id?c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){e.handleOpen(0),f(!1),h(t.id)}},"close"):c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){e.handleOpen(t.id),f(!0),h(t.id)}},"Open"))})):"not post yet"))},f=(n(13),function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],r=n[1],u=Object(a.useState)(""),l=Object(s.a)(u,2),i=l[0],m=l[1],f=Object(a.useState)(""),d=Object(s.a)(f,2),b=d[0],p=d[1],h={postId:e.postId,name:o,email:i,body:b};return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(t){!function(t){e.handleSubmit(t,h),p(""),m(""),r("")}(t)}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(e){return r(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:i,onChange:function(e){return m(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:b,onChange:function(e){return p(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),d=(n(14),function(e){var t=e.selectedPostId,n=Object(a.useState)(""),o=Object(s.a)(n,2),r=o[0],m=o[1],d=Object(a.useState)([]),b=Object(s.a)(d,2),p=b[0],h=b[1],E=Object(a.useState)(!0),_=Object(s.a)(E,2),O=_[0],j=_[1];Object(a.useEffect)((function(){var e;(e=t,fetch("".concat(l,"/posts/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))).then((function(e){return m(e)})),i(t).then((function(e){return h(e)}))}),[t]);var N=function(e){(function(e){return fetch("".concat(l,"/comments/").concat(e),{method:"DELETE"})})(e).then((function(){return i(t)})).then((function(e){return h(e)}))};return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,r?r.body:"Loading...")),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{hidden:!p.length,type:"button",className:"button",onClick:function(){return j(!O)}},O?"Hide ".concat(p.length," comments"):"Show ".concat(p.length," comments")),c.a.createElement("ul",{className:"PostDetails__list"},p&&O&&p.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return N(e.id)}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(f,{postId:t,handleSubmit:function(e,n){e.preventDefault(),function(e){return fetch("".concat(l,"/comments/"),{method:"POST",body:JSON.stringify(Object(u.a)({},e))})}(n).then((function(){return i(t).then((function(e){return h(e)})).then()}))}}))))}),b=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),u=Object(s.a)(r,2),i=u[0],f=u[1],b=Object(a.useState)([]),p=Object(s.a)(b,2),h=p[0],E=p[1];return Object(a.useEffect)((function(){fetch("".concat(l,"/users/")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return E(e)}))})),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:n,onChange:function(e){return o(e.target.value)}},c.a.createElement("option",{value:"0"},"All users"),h.map((function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.name)}))))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(m,{userId:n,handleOpen:function(e){f(e||"")}})),c.a.createElement("div",{className:"App__content"},i&&c.a.createElement(d,{selectedPostId:i}))))};r.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.f495f395.chunk.js.map