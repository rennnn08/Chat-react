(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{128:function(e,t,a){e.exports=a(162)},152:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=a(31),i=a(101),u=a.n(i),s=a(6),m=Object(n.createContext)(null),d=Object(n.createContext)(null),p=Object(n.createContext)(null),g=Object(n.createContext)(null),f=Object(n.createContext)(null),E=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(!1),i=Object(s.a)(l,2),u=i[0],E=i[1],b=Object(n.useState)(null),h=Object(s.a)(b,2),v=h[0],j=h[1],O=Object(n.useState)(""),C=Object(s.a)(O,2),y=C[0],x=C[1],S=Object(n.useState)(null),_=Object(s.a)(S,2),w=_[0],k=_[1],N=Object(n.useState)(null),T=Object(s.a)(N,2),F=T[0],U=T[1],A=Object(n.useState)(!1),D=Object(s.a)(A,2),B=D[0],L=D[1];return r.a.createElement(p.Provider,{value:{type:y,setType:x}},r.a.createElement(m.Provider,{value:{userstate:o,loginStatus:u,setUserState:c,setLoginStatus:E}},r.a.createElement(d.Provider,{value:{room_id:v,setRoom_id:j,change_flag:B,setChange_flag:L}},r.a.createElement(f.Provider,{value:{bot_id:F,setBot_id:U}},r.a.createElement(g.Provider,{value:{user_id:w,setUser_id:k}},e.children)))))},b=a(102),h=a(8),v=a(7),j=a.n(v),O=a(209),C=a(219),y=a(206),x=a(207),S=a(21),_=a.n(S),w=a(83),k=a.n(w),N=a(80),T=a(196),F=a(221),U=a(199),A=a(165),D=a(200),B=a(222),L=a(201),P=a(202),R=a(217),W=a(82),q=a.n(W),I=a(53),M=a.n(I),G=a(204),z=a(113),H=a(205),K=a(81),V=a(114),Y=a(203);a(152);function Q(){var e=Object(N.a)(["\n  list-style: none;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 14px;\n  color: #666;\n  padding: 5px 10px;\n  cursor: pointer;\n  \n"]);return Q=function(){return e},e}function J(){var e=Object(N.a)(["\n  \n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24);\n  padding-left: 0;\n"]);return J=function(){return e},e}var $=V.a.ul({visible:{opacity:1,originY:0,scaleY:1},hidden:{opacity:0,scaleY:0}}),X=Object(K.a)($)(J()),Z=K.a.li(Q()),ee=Object(T.a)((function(e){return Object(F.a)({demo:{backgroundColor:e.palette.background.paper},room_name:{textTransform:"none"}})})),te=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],c=ee(),l=Object(n.useState)(""),i=Object(s.a)(l,2),u=i[0],g=i[1],f=Object(n.useState)(""),E=Object(s.a)(f,2),b=E[0],h=E[1],v=Object(n.useState)({flag:!1,id:0}),O=Object(s.a)(v,2),y=O[0],x=O[1],S=Object(n.useState)(0),w=Object(s.a)(S,2),k=w[0],N=w[1],T=Object(n.useContext)(m),F=Object(n.useContext)(d),W=Object(n.useContext)(p),I=Object(n.useState)(null),K=Object(s.a)(I,2),V=K[0],Q=K[1],J=Boolean(V);Object(n.useEffect)((function(){var e;j.a.get("".concat("http://52.197.208.224","/rooms"),{params:{user_id:null===(e=T.userstate)||void 0===e?void 0:e.id}}).then((function(e){o(e.data),console.log(a)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){var e;j.a.get("".concat("http://52.197.208.224","rooms"),{params:{user_id:null===(e=T.userstate)||void 0===e?void 0:e.id}}).then((function(e){o(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[F.room_id]),Object(n.useEffect)((function(){var e;F.setChange_flag(!1),j.a.get("".concat("http://52.197.208.224","/rooms"),{params:{user_id:null===(e=T.userstate)||void 0===e?void 0:e.id}}).then((function(e){o(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[F.change_flag]);var $=function(e){W.setType("Chat"),F.setRoom_id(e)},te=function(e){y.flag?x({flag:!1,id:0}):x({flag:!0,id:e})},ae=function(){Q(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{fullWidth:!0,label:"\u30eb\u30fc\u30e0\u4f5c\u6210",onChange:function(e){return g(e.target.value)},helperText:b,required:!0,inputProps:{maxLength:20},onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),function(e){var t;(h(""),u)&&j.a.post("".concat("http://52.197.208.224","/rooms"),{room:{name:u,user_id:null===(t=T.userstate)||void 0===t?void 0:t.id}},{withCredentials:!0}).then((function(e){var t;"created"===e.data.status?j.a.get("".concat("http://52.197.208.224","/rooms"),{params:{user_id:null===(t=T.userstate)||void 0===t?void 0:t.id}}).then((function(e){console.log(e),o(e.data)})).catch((function(e){console.log(e)})):(console.log(e.data.errors),h(e.data.errors))})).catch((function(e){console.log("message error",e)}));e.preventDefault()}(e))}}),r.a.createElement("div",{className:c.demo},r.a.createElement("div",{className:"Rooms"},r.a.createElement(U.a,null,a.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{key:e.id},r.a.createElement(C.a,{smDown:!0},r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(_.a,null)))),r.a.createElement(L.a,{primary:r.a.createElement(P.a,{onClick:function(){return $(e.id)},className:c.room_name},e.name)}),r.a.createElement(C.a,{smDown:!0},r.a.createElement(Y.a,null,r.a.createElement(P.a,{key:e.id,onClick:function(){return te(e.id)}},r.a.createElement(q.a,null)))),r.a.createElement(C.a,{mdUp:!0},r.a.createElement(G.a,{onClick:function(t){!function(e){Q(e.currentTarget)}(t),N(e.id)}},r.a.createElement(M.a,null)),r.a.createElement(z.a,{id:"long-menu",anchorEl:V,keepMounted:!0,open:J,onClose:ae},r.a.createElement(H.a,{onClick:ae},r.a.createElement(G.a,{key:e.id,onClick:function(){return te(k)}},r.a.createElement(q.a,null)))))),r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{pose:y.flag?"visible":"hidden"},y.flag&&y.id===e.id?r.a.createElement(r.a.Fragment,null,e.users.map((function(e){return r.a.createElement(Z,null,e.name)}))):r.a.createElement(r.a.Fragment,null))))}))))))},ae=Object(T.a)((function(e){return Object(F.a)({demo:{backgroundColor:e.palette.background.paper},room_name:{textTransform:"none"}})})),ne=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],c=r.a.useState(!1),l=Object(s.a)(c,2),i=l[0],u=(l[1],Object(n.useState)("")),f=Object(s.a)(u,2),E=f[0],b=(f[1],Object(n.useState)("")),h=Object(s.a)(b,2),v=h[0],O=h[1],y=Object(n.useState)(null),x=Object(s.a)(y,2),S=x[0],w=x[1],k=Boolean(S),N=Object(n.useContext)(p),T=Object(n.useContext)(g),F=Object(n.useContext)(m),W=Object(n.useContext)(d),q=ae();Object(n.useEffect)((function(){j.a.get("".concat("http://52.197.208.224","/users")).then((function(e){o(e.data),console.log(a)})).catch((function(e){console.log(e)}))}),[]);var I=function(e){N.setType("UserPage"),T.setUser_id(e)},K=function(e,t){var a;j.a.post("".concat("http://52.197.208.224","/toakcreate"),{room:{name:t,user_id:null===(a=F.userstate)||void 0===a?void 0:a.id,opponent_id:e}},{withCredentials:!0}).then((function(e){N.setType("Chat"),W.setRoom_id(e.data.room.id)})).catch((function(e){console.log("message error",e)}))},V=function(){w(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{fullWidth:!0,label:"\u540d\u524d\u691c\u7d22",onChange:function(e){return O(e.target.value)},helperText:E,required:!0,inputProps:{maxLength:20},onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),j.a.get("".concat("http://52.197.208.224","/users"),{params:{search:v}}).then((function(e){o(e.data),console.log(a)})).catch((function(e){console.log(e)})))}}),r.a.createElement("div",{className:q.demo},r.a.createElement("div",{className:"Rooms"},r.a.createElement(U.a,{dense:i},a.map((function(e){var t;return(null===(t=F.userstate)||void 0===t?void 0:t.id)!==e.id&&r.a.createElement(A.a,{key:e.id},r.a.createElement(C.a,{smDown:!0},r.a.createElement(D.a,null,r.a.createElement(B.a,{src:e.image?e.image:""}))),r.a.createElement(L.a,{primary:r.a.createElement(P.a,{className:q.room_name,onClick:function(){return I(e.id)}},e.name)}),r.a.createElement(C.a,{smDown:!0},r.a.createElement(Y.a,null,r.a.createElement(P.a,{onClick:function(){return K(e.id,e.name)}},r.a.createElement(_.a,null)))),r.a.createElement(C.a,{mdUp:!0},r.a.createElement(G.a,{onClick:function(e){!function(e){w(e.currentTarget)}(e)}},r.a.createElement(M.a,null)),r.a.createElement(z.a,{anchorEl:S,keepMounted:!0,open:k,onClose:V},r.a.createElement(H.a,{onClick:V},r.a.createElement(G.a,{onClick:function(){return K(e.id,e.name)}},r.a.createElement(_.a,null))))))}))))))},re=Object(T.a)((function(e){return Object(F.a)({demo:{backgroundColor:e.palette.background.paper},room_name:{textTransform:"none"}})})),oe=function(){var e=re(),t=r.a.useState(!1),a=Object(s.a)(t,2),o=a[0],c=(a[1],Object(n.useState)("")),l=Object(s.a)(c,2),i=(l[0],l[1]),u=Object(n.useState)(""),m=Object(s.a)(u,2),d=m[0],g=m[1],E=Object(n.useState)([]),b=Object(s.a)(E,2),h=b[0],v=b[1],j=Object(n.useContext)(p),O=Object(n.useContext)(f),C=[{id:1,name:"Qiita"},{id:2,name:"News"},{id:3,name:"Weather"}];return Object(n.useEffect)((function(){v(C)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{fullWidth:!0,label:"Bot\u691c\u7d22",onChange:function(e){return i(e.target.value)},helperText:d,required:!0,inputProps:{maxLength:20},onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),function(e){g(""),e.preventDefault()}(e))}}),r.a.createElement("div",{className:e.demo},r.a.createElement("div",{className:"Rooms"},r.a.createElement(U.a,{dense:o},h.map((function(t){return r.a.createElement(A.a,{key:t.id},r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(_.a,null))),r.a.createElement(L.a,{primary:r.a.createElement(P.a,{onClick:function(){return e=t.id,j.setType("Api"),void O.setBot_id(e);var e},className:e.room_name},t.name)}))}))))))},ce=a(111),le=a.n(ce),ie=function(){var e=Object(n.useState)("rooms"),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(null),l=Object(s.a)(c,2),i=l[0],u=l[1],m=Boolean(i),d=function(e,t){o(t)},p=function(){u(null)};return r.a.createElement(r.a.Fragment,null,"rooms"===a&&r.a.createElement(te,null),"bots"===a&&r.a.createElement(oe,null),"users"===a&&r.a.createElement(ne,null),r.a.createElement(C.a,{xsDown:!0},r.a.createElement(y.a,{value:a,onChange:d},r.a.createElement(x.a,{label:"Rooms",value:"rooms",icon:r.a.createElement(_.a,null)}),r.a.createElement(x.a,{label:"Bot",value:"bots",icon:r.a.createElement(_.a,null)}),r.a.createElement(x.a,{label:"Users",value:"users",icon:r.a.createElement(k.a,null)}))),r.a.createElement(C.a,{smUp:!0},r.a.createElement(G.a,{onClick:function(e){!function(e){u(e.currentTarget)}(e)}},r.a.createElement(le.a,null)),r.a.createElement(z.a,{id:"long-menu",anchorEl:i,keepMounted:!0,open:m,onClose:p},r.a.createElement(H.a,{onClick:p},r.a.createElement(G.a,{onClick:function(e){return d(0,"rooms")}},r.a.createElement(_.a,null)),r.a.createElement(G.a,{onClick:function(e){return d(0,"bots")}},r.a.createElement(_.a,null)),r.a.createElement(G.a,{onClick:function(e){return d(0,"users")}},r.a.createElement(k.a,null))))))},ue=a(208),se=a(61),me=(a(155),Object(T.a)((function(e){return{root:{backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}))),de=function(e){var t=e.message,a=e.user,o=me(),c=Object(n.useContext)(m);return r.a.createElement(r.a.Fragment,null,function(e,t,a,n){var o;return(null===(o=e.userstate)||void 0===o?void 0:o.id)===n.id?r.a.createElement(U.a,{className:t.root},r.a.createElement(A.a,{alignItems:"flex-start"},r.a.createElement(L.a,{className:"align",primary:r.a.createElement("h1",{className:"name"},n.name),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary"},a))}),r.a.createElement(D.a,null,r.a.createElement(B.a,{alt:"ME",src:n.image?n.image:""}))),r.a.createElement(ue.a,{variant:"middle"})):r.a.createElement(U.a,{className:t.root},r.a.createElement(A.a,{alignItems:"flex-start"},r.a.createElement(D.a,null,r.a.createElement(B.a,{alt:"Martian",src:n.image?n.image:""})),r.a.createElement(L.a,{primary:r.a.createElement("h1",{className:"name"},n.name),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary"},r.a.createElement("p",null,a)))})),r.a.createElement(ue.a,{variant:"middle"}))}(c,o,t,a))},pe=function(e){var t=e.messageData,a=void 0===t?[]:t;return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(de,{user:e.user,message:e.content})})))},ge=a(212),fe=a(218),Ee=a(210),be=a(211),he=a(220),ve=a(112),je=a.n(ve),Oe=(a(156),function(e){var t=e.User_ids,a=e.getUsers,o=Object(n.useState)([]),c=Object(s.a)(o,2),l=c[0],i=c[1],u=Object(n.useState)(""),p=Object(s.a)(u,2),g=p[0],f=p[1],E=Object(n.useContext)(d),b=Object(n.useContext)(m);Object(n.useEffect)((function(){j.a.get("".concat("http://52.197.208.224","/users")).then((function(e){i(e.data),console.log(l)})).catch((function(e){console.log(e)}))}),[]);var h=[];return r.a.createElement(fe.a,{px:2},r.a.createElement(R.a,{variant:"standard",margin:"none",label:"\u691c\u7d22",onChange:function(e){return f(e.target.value)},onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),j.a.get("".concat("http://52.197.208.224","/users"),{params:{search:g}}).then((function(e){i(e.data),console.log(l)})).catch((function(e){console.log(e)})))}}),r.a.createElement("div",{className:"Users"},r.a.createElement(U.a,{style:{backgroundColor:"white"}},r.a.createElement(O.a,{container:!0},l.map((function(e){var a;return e.id===(null===(a=b.userstate)||void 0===a?void 0:a.id)||t.includes(e.id)?r.a.createElement(r.a.Fragment,null):r.a.createElement(O.a,{xs:12,md:3},r.a.createElement(U.a,null,r.a.createElement(A.a,{key:e.id},r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(je.a,null))),r.a.createElement(Ee.a,null,r.a.createElement(be.a,{control:r.a.createElement(he.a,{color:"primary",onChange:function(){var t;t=e.id,h.push(t)}}),label:e.name})))))}))))),r.a.createElement(P.a,{color:"primary",variant:"contained",onClick:function(){j.a.post("".concat("http://52.197.208.224","/userbelongsrooms"),{belong:{user_id:h,room_id:E.room_id}},{withCredentials:!0}).then((function(e){"created"===e.data.status&&(a(),E.setChange_flag(!0))}))}},"\u62db\u5f85"))}),Ce=(a(79),Object(T.a)((function(e){return Object(F.a)({root:{flexGrow:1},button:{margin:e.spacing(1),marginTop:"10px"}})}))),ye=function(e){var t=e.cableApp,a=e.roomsGet,o=Object(n.useContext)(m),c=Object(n.useState)(""),l=Object(s.a)(c,2),i=l[0],u=l[1],p=Object(n.useState)([]),g=Object(s.a)(p,2),f=g[0],E=g[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),v=h[0],y=h[1],x=Object(n.useState)([]),S=Object(s.a)(x,2),_=S[0],w=S[1],k=Object(n.useState)(!1),N=Object(s.a)(k,2),T=N[0],F=N[1],U=Object(n.useContext)(d),A=Object(n.useState)(""),D=Object(s.a)(A,2),B=D[0],L=D[1],W=Ce(),q=Object(n.useState)(null),I=Object(s.a)(q,2),K=I[0],V=I[1],Y=Boolean(K),Q=function(e){w(e)},J=function(){j.a.get("".concat("http://52.197.208.224","/getuser_ids"),{params:{room_id:U.room_id}}).then((function(e){Q(e.data)})).catch((function(e){console.log(e)}))},$=function(){t.subscriptions.create({channel:"MessagesChannel",room_id:U.room_id},{received:function(e){var t=document.getElementById("scroll-area");!function(e){E(e)}(e),t&&(t.scrollTop=t.scrollHeight),console.log(f)}})};Object(n.useEffect)((function(){$()}),[U.room_id]),Object(n.useEffect)((function(){j.a.get("".concat("http://52.197.208.224","/getuser_ids"),{params:{room_id:U.room_id}}).then((function(e){Q(e.data)})).catch((function(e){console.log(e)}))}),[U.room_id]),Object(n.useEffect)((function(){j.a.get("".concat("http://52.197.208.224","/rooms/").concat(U.room_id),{params:{id:U.room_id}}).then((function(e){console.log(e),L(e.data.name),J()})).catch((function(e){console.log(e),L("")}))}),[U.room_id]),Object(n.useEffect)((function(){j.a.get("".concat("http://52.197.208.224","/messages"),{params:{room_id:U.room_id}}).then((function(e){console.log(e),E(e.data);var t=document.getElementById("scroll-area");t&&(t.scrollTop=t.scrollHeight)})).catch((function(e){console.log(e)}))}),[U.room_id]);var X=function(){var e,t;i?(y(""),j.a.post("".concat("http://52.197.208.224","/messages"),{message:{content:i,user_name:null===(e=o.userstate)||void 0===e?void 0:e.name,room_id:U.room_id,user_id:null===(t=o.userstate)||void 0===t?void 0:t.id}},{withCredentials:!0}).then((function(e){e.data.status})).catch((function(e){console.log("message error",e)}))):y("\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")},Z=function(){F(!T)},ee=function(){var e;j.a.get("".concat("http://52.197.208.224","/getuser_ids"),{params:{room_id:U.room_id}}).then((function(e){Q(e.data)})),j.a.delete("".concat("http://52.197.208.224","/userbelongsrooms/").concat(U.room_id),{params:{user_id:null===(e=o.userstate)||void 0===e?void 0:e.id,room_id:U.room_id}}).then((function(e){1===_.length&&j.a.delete("".concat("http://52.197.208.224","/rooms/").concat(U.room_id),{params:{id:U.room_id}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),"deleted"===e.data.status?(a(),U.setRoom_id(null)):console.log("leave error")}))},te=function(){window.confirm("\u524a\u9664\u3057\u307e\u3059\u304b\uff1f")&&j.a.delete("".concat("http://52.197.208.224","/rooms/").concat(U.room_id),{params:{id:U.room_id}}).then((function(e){console.log(e),"deleted"===e.data.status&&(a(),U.setRoom_id(null))})).catch((function(e){console.log(e)}))},ae=function(){V(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:3},r.a.createElement("h1",null,B)),r.a.createElement(O.a,{item:!0,xs:9,container:!0,justify:"flex-end"},r.a.createElement(C.a,{smDown:!0},r.a.createElement(P.a,{variant:"contained",className:W.button,color:"primary",onClick:Z},"\u62db\u5f85"),r.a.createElement(P.a,{variant:"contained",className:W.button,color:"secondary",onClick:ee},"\u9000\u5ba4"),r.a.createElement(P.a,{variant:"contained",className:W.button,color:"secondary",onClick:te},"\u30eb\u30fc\u30e0\u524a\u9664")),r.a.createElement(C.a,{mdUp:!0},r.a.createElement(G.a,{onClick:function(e){!function(e){V(e.currentTarget)}(e)}},r.a.createElement(M.a,null)),r.a.createElement(z.a,{id:"long-menu",anchorEl:K,keepMounted:!0,open:Y,onClose:ae,PaperProps:{style:{}}},r.a.createElement(H.a,{onClick:ae},r.a.createElement(P.a,{variant:"contained",className:W.button,color:"primary",onClick:Z},"\u62db\u5f85"),r.a.createElement(P.a,{variant:"contained",className:W.button,color:"secondary",onClick:ee},"\u9000\u5ba4"),r.a.createElement(P.a,{variant:"contained",className:W.button,color:"secondary",onClick:te},"\u30eb\u30fc\u30e0\u524a\u9664")))))),r.a.createElement("div",{className:"app-main",id:"scroll-area"},T?r.a.createElement(Oe,{User_ids:_,getUsers:J}):r.a.createElement(pe,{messageData:f})),r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(R.a,{onChange:function(e){return u(e.target.value)},label:"\u30e1\u30c3\u30bb\u30fc\u30b8",fullWidth:!0,helperText:v,required:!0,inputProps:{maxLength:250},onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),X())}})),r.a.createElement(O.a,{item:!0,xs:1},r.a.createElement(P.a,{variant:"contained",className:W.button,onClick:X,color:"primary",endIcon:r.a.createElement(ge.a,null,"send")},"send"))))},xe=(a(157),Object(T.a)({root:{marginTop:20,backgroundColor:"white",minHeight:500},name:{margin:20,fontSize:50},prof:{margin:20,fontSize:25}})),Se=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(g),l=xe();return Object(n.useEffect)((function(){j.a.get("".concat("http://52.197.208.224","/users/:id"),{params:{user_id:c.user_id}}).then((function(e){console.log(e),o(e.data)})).catch((function(e){console.log(e)}))}),[c.user_id]),r.a.createElement("div",{className:"usershow"},r.a.createElement(U.a,null,r.a.createElement(A.a,null,a&&r.a.createElement(D.a,null,r.a.createElement(B.a,{src:a.image?a.image:""})),r.a.createElement(L.a,{primary:r.a.createElement("h1",null,null===a||void 0===a?void 0:a.name)}))),r.a.createElement("p",{className:l.prof},null===a||void 0===a?void 0:a.profile))},_e=Object(T.a)((function(e){return Object(F.a)({root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},button:{margin:e.spacing(1)},inline:{display:"inline"}})})),we=function(){var e=Object(n.useContext)(m),t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),u=i[0],d=i[1],p=Object(n.useState)([]),g=Object(s.a)(p,2),f=g[0],E=g[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),v=h[0],O=h[1],C=Object(n.useState)(!1),y=Object(s.a)(C,2),x=y[0],S=y[1],_=_e(),w=function(){o?(O(""),d(o),j.a.get("https://qiita.com/api/v2/items",{params:{page:"1",per_page:"20",query:o}}).then((function(e){console.log(e.data),S(!0),E(e.data)})).catch((function(e){console.log("message error",e)}))):O("\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Qiita\u304f\u3093"),r.a.createElement("div",{className:"app-main",id:"scroll-area"},x&&e.userstate&&r.a.createElement(de,{message:u,user:e.userstate}),f.map((function(e){return r.a.createElement(U.a,{className:_.root,key:e.title},r.a.createElement(A.a,{alignItems:"flex-start"},r.a.createElement(D.a,null,r.a.createElement(B.a,{alt:"Martian",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5lquvS_JqssPqAlVj1dQhMuzLgtQRUSrEYg&usqp=CAU"})),r.a.createElement(L.a,{primary:r.a.createElement("h4",null,e.title),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{component:"span",variant:"body2",className:_.inline,color:"textPrimary"},r.a.createElement("a",{href:e.url},e.url)))})),r.a.createElement(ue.a,{variant:"middle"}))}))),r.a.createElement(R.a,{onChange:function(e){return c(e.target.value)},label:"\u30e1\u30c3\u30bb\u30fc\u30b8",style:{width:"80%"},helperText:v,required:!0,onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),w())}}),r.a.createElement(P.a,{variant:"contained",className:_.button,onClick:w,color:"primary",endIcon:r.a.createElement(ge.a,null,"send")},"send"))},ke=function(){var e=Object(n.useContext)(f);return r.a.createElement(r.a.Fragment,null,1===e.bot_id&&r.a.createElement(we,null))},Ne=function(e){var t=e.cableApp,a=e.roomsGet,o=Object(n.useContext)(p);return r.a.createElement(r.a.Fragment,null,"Chat"===o.type&&r.a.createElement(ye,{cableApp:t,roomsGet:a}),"Api"===o.type&&r.a.createElement(ke,null),"UserPage"===o.type&&r.a.createElement(Se,null))},Te=(a(158),function(e){var t=e.cableApp,a=Object(n.useContext)(d),o=Object(n.useState)([]),c=Object(s.a)(o,2),l=c[0],i=c[1],u=Object(n.useContext)(m);return r.a.createElement("div",{className:"main"},r.a.createElement(O.a,{container:!0,spacing:2},r.a.createElement(O.a,{item:!0,md:3,xs:4},r.a.createElement(ie,null)),r.a.createElement(O.a,{item:!0,md:9,xs:8},r.a.createElement(Ne,{cableApp:t,roomsGet:function(){var e;j.a.get("".concat("http://52.197.208.224","/rooms"),{params:{user_id:null===(e=u.userstate)||void 0===e?void 0:e.id}}).then((function(e){i(e.data),a.setRoom_id(0),console.log(l)})).catch((function(e){console.log(e)}))}}))))}),Fe=a(214),Ue=a(71),Ae=a.n(Ue),De=a(213),Be=a(72),Le=a(49),Pe=(a(100),Object(T.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))),Re=function(e){var t=e.setauth,a=Object(Be.a)(),o=a.register,c=a.handleSubmit,l=a.errors,i=Object(n.useState)(""),u=Object(s.a)(i,2),d=u[0],p=u[1],g=Object(n.useState)(""),f=Object(s.a)(g,2),E=f[0],b=f[1],v=Pe(),C=Object(h.h)(),y=Object(n.useContext)(m);return r.a.createElement(De.a,{component:"main",maxWidth:"xs",style:{backgroundColor:"white"}},r.a.createElement(Fe.a,null),r.a.createElement("div",{className:v.paper},r.a.createElement(B.a,{className:v.avatar},r.a.createElement(Ae.a,null)),r.a.createElement(se.a,{component:"h1",variant:"h5"},"\u30ed\u30b0\u30a4\u30f3"),r.a.createElement("form",{className:v.form,noValidate:!0,onSubmit:c((function(){j.a.post("".concat("http://52.197.208.224","/login"),{user:{email:d,password:E}},{withCredentials:!0}).then((function(e){var t;e.data.logged_in?(t=e.data,y.setUserState(t.user),y.setLoginStatus(!0),C("/")):(Object(Le.b)(e.data.errors[0]),Object(Le.b)(e.data.errors[1]),console.log(e.data.errors))})).catch((function(e){console.log("registraion error",e)}))}))},r.a.createElement(R.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:o({required:!0,pattern:/^\S+@\S+$/i}),error:Boolean(l.email),helperText:l.email&&"\u6b63\u3057\u3044\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChange:function(e){return p(e.target.value)}}),r.a.createElement(R.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:o({required:!0}),error:Boolean(l.password),helperText:l.password&&"\u6b63\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChange:function(e){return b(e.target.value)}}),r.a.createElement(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:v.submit},"\u30ed\u30b0\u30a4\u30f3"),r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{container:!0,item:!0,justify:"flex-end"},r.a.createElement(P.a,{onClick:t},"Don't have an account? Sign Up"))))),r.a.createElement(Le.a,null))},We=Object(T.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),qe=function(e){var t=e.setauth,a=Object(Be.a)(),o=a.register,c=a.handleSubmit,l=a.errors,i=Object(n.useContext)(m),u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],g=d[1],f=Object(n.useState)(""),E=Object(s.a)(f,2),b=E[0],v=E[1],C=Object(n.useState)(""),y=Object(s.a)(C,2),x=y[0],S=y[1],_=Object(n.useState)(""),w=Object(s.a)(_,2),k=w[0],N=w[1],T=We(),F=Object(h.h)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(De.a,{component:"main",maxWidth:"xs",style:{backgroundColor:"white"}},r.a.createElement(Fe.a,null),r.a.createElement("div",{className:T.paper},r.a.createElement(B.a,{className:T.avatar},r.a.createElement(Ae.a,null)),r.a.createElement(se.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:T.form,noValidate:!0,onSubmit:c((function(){j.a.post("".concat("http://52.197.208.224","/signup"),{user:{name:p,email:b,password:x,password_confirmation:k}},{withCredentials:!0}).then((function(e){var t;"created"===e.data.status?(t=e.data,i.setUserState(t.user),i.setLoginStatus(!0),F("/")):(Object(Le.b)(e.data.errors),console.log(e.data))})).catch((function(e){console.log("registraion error",e)}))}))},r.a.createElement(O.a,{container:!0,spacing:2},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(R.a,{autoComplete:"name",name:"Name",variant:"outlined",fullWidth:!0,id:"Name",label:"Name",inputRef:o({required:!0}),error:Boolean(l.name),helperText:l.name&&"\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChange:function(e){return g(e.target.value)},autoFocus:!0})),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(R.a,{variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:o({required:!0,pattern:/^\S+@\S+$/i}),error:Boolean(l.email),helperText:l.email&&"\u6b63\u3057\u3044\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChange:function(e){return v(e.target.value)}})),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(R.a,{variant:"outlined",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",inputRef:o({required:!0}),error:Boolean(l.email),helperText:l.password&&"\u6b63\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChange:function(e){return S(e.target.value)},autoComplete:"current-password"})),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(R.a,{variant:"outlined",fullWidth:!0,name:"passwordconfirmation",label:"PasswordConfirmation",type:"password",id:"password",inputRef:o({required:!0}),error:Boolean(l.passwordconfirmation),helperText:l.passwordconfirmation&&"\u6b63\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChange:function(e){return N(e.target.value)},autoComplete:"current-password"}))),r.a.createElement(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:T.submit},"Sign Up"),r.a.createElement(O.a,{container:!0,justify:"flex-end"},r.a.createElement(O.a,{item:!0},r.a.createElement(P.a,{onClick:t},"Already have an account? Sign in"))))),r.a.createElement(Le.a,null)))},Ie=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],c=function(){o(!a)};return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(qe,{setauth:c}):r.a.createElement(Re,{setauth:c}))},Me=Object(T.a)((function(e){return Object(F.a)({root:{marginTop:20,backgroundColor:"white",minHeight:500},name:{paddingTop:20,margin:20,fontSize:50},prof:{margin:20,fontSize:25},large:{width:e.spacing(7),height:e.spacing(7)}})})),Ge=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(m),l=Me(),i=Object(h.h)();Object(n.useEffect)((function(){var e;j.a.get("".concat("http://52.197.208.224","/users/:id"),{params:{user_id:null===(e=c.userstate)||void 0===e?void 0:e.id}}).then((function(e){console.log(e),o(e.data)})).catch((function(e){console.log(e)}))}),[]);return r.a.createElement(De.a,{className:l.root},r.a.createElement(U.a,null,r.a.createElement(A.a,null,a&&r.a.createElement(D.a,null,r.a.createElement(B.a,{src:a.image?a.image:"",className:l.large})),r.a.createElement(L.a,{primary:r.a.createElement("h1",{className:l.name},null===a||void 0===a?void 0:a.name)}))),r.a.createElement(P.a,{variant:"contained",color:"primary",onClick:function(){i("/changeprof")}},"\u7de8\u96c6"),r.a.createElement("p",{className:l.prof},null===a||void 0===a?void 0:a.profile))},ze=Object(T.a)((function(e){return{root:{marginTop:20,backgroundColor:"white"},submit:{margin:e.spacing(3,0,2)}}})),He=function(){var e,t,a=Object(n.useContext)(m),o=ze(),c=Object(n.useState)(null===(e=a.userstate)||void 0===e?void 0:e.name),l=Object(s.a)(c,2),i=l[0],u=l[1],d=Object(n.useState)(null===(t=a.userstate)||void 0===t?void 0:t.profile),p=Object(s.a)(d,2),g=p[0],f=p[1],E=Object(n.useState)(!0),b=Object(s.a)(E,2),v=b[0],O=b[1],C=Object(n.useState)(""),y=Object(s.a)(C,2),x=y[0],S=y[1],_=Object(h.h)();Object(n.useEffect)((function(){var e;O(!0),j.a.get("".concat("http://52.197.208.224","/users/:id"),{params:{user_id:null===(e=a.userstate)||void 0===e?void 0:e.id}}).then((function(e){console.log(e),a.setUserState(e.data),u(e.data.name),f(e.data.profile),O(!1)})).catch((function(e){console.log(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,v?r.a.createElement(r.a.Fragment,null):r.a.createElement(De.a,{className:o.root},r.a.createElement(fe.a,{p:2},r.a.createElement("h1",null,"\u7de8\u96c6"),r.a.createElement("form",null,r.a.createElement(R.a,{variant:"outlined",margin:"normal",label:"\u540d\u524d",fullWidth:!0,defaultValue:i,autoFocus:!0,name:"name",onChange:function(e){return u(e.target.value)}}),r.a.createElement("label",null,"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf"),x&&r.a.createElement("img",{src:"string"===typeof x?x:""}),r.a.createElement("canvas",{id:"canvas",style:{display:"none"},width:"64",height:"64"}),r.a.createElement(P.a,{component:"label",variant:"contained",color:"primary"},"Upload File",r.a.createElement("input",{type:"file",className:"inputFileBtnHide",style:{display:"none"},onChange:function(e){return function(e){if(document.getElementById("canvas")){var t=document.getElementById("canvas");if(t){var a=t.getContext("2d"),n=new Image;n.onload=function(){var e=n.width,r=n.height,o=Math.min(250/e,250/r),c=e*o,l=r*o;t.width=c,t.height=l,a.drawImage(n,0,0,c,l);var i=t.toDataURL("image/jpeg",.5);S(i)},n.src=URL.createObjectURL(e.target.files[0])}}}(e)}})),r.a.createElement(R.a,{variant:"outlined",margin:"normal",label:"Profile",multiline:!0,rows:4,fullWidth:!0,defaultValue:g,name:"prof",onChange:function(e){return f(e.target.value)}}),r.a.createElement(P.a,{type:"submit",variant:"contained",color:"primary",className:o.submit,onClick:function(){var e,t,n;j.a.patch("".concat("http://52.197.208.224","/users/").concat(null===(e=a.userstate)||void 0===e?void 0:e.id),{user:{user_id:null===(t=a.userstate)||void 0===t?void 0:t.id,name:i,profile:g,image:x}}).then((function(e){var t;"created"===e.data.status?_("/userpage/".concat(null===(t=a.userstate)||void 0===t?void 0:t.id)):console.log(e.data.errors)})).catch((function(e){console.log(e)})),j.a.get("".concat("http://52.197.208.224","/logged_in"),{withCredentials:!0}).then((function(e){a.setUserState(e.data.user)})).catch((function(e){console.log(e)})),_("/userpage/".concat(null===(n=a.userstate)||void 0===n?void 0:n.id))}},"\u9001\u4fe1")))))},Ke=a(215),Ve=a(216),Ye=a(15),Qe=a.n(Ye),Je=a(24),$e=a(84),Xe=function(e){var t=e.Component,a=e.cableApp,o=e.redirectLink,c=Object($e.a)(e,["Component","cableApp","redirectLink"]),l=Object(n.useContext)(m);return!0===l.loginStatus&&l.userstate?r.a.createElement(t,Object.assign({cableApp:a},c)):r.a.createElement(h.a,{to:o})},Ze=function(e){var t=e.component,a=e.redirectLink,o=e.cableApp,c=e.path,l=(Object($e.a)(e,["component","redirectLink","cableApp","path"]),Object(n.useContext)(m)),i=Object(n.useState)(!0),u=Object(s.a)(i,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){(function(){var e=Object(Je.a)(Qe.a.mark((function e(){var t;return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,j.a.get("".concat("http://52.197.208.224","/logged_in"),{withCredentials:!0});case 4:(t=e.sent).data.logged_in&&!l.loginStatus?(l.setLoginStatus(!0),l.setUserState(t.data.user),p(!1)):!t.data.logged_in&&l.loginStatus?(l.setLoginStatus(!1),l.setUserState(null),p(!1)):p(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("\u30ed\u30b0\u30a4\u30f3\u30a8\u30e9\u30fc",e.t0),p(!1);case 12:case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,d?r.a.createElement(r.a.Fragment,null):r.a.createElement(h.b,{path:c,element:r.a.createElement(Xe,{cableApp:o,redirectLink:a,Component:t})}))},et=(a(160),Object(T.a)((function(e){return{list:{width:250},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appButton:{textTransform:"none"}}}))),tt=function(e){var t=e.cableApp,a=et(),o=Object(n.useContext)(m),c=Object(h.h)(),i=function(){j.a.delete("".concat("http://52.197.208.224","/logout"),{withCredentials:!0}).then((function(e){o.setLoginStatus(!1),o.setUserState(null),c("/auth")})).catch((function(e){return console.log("\u30ed\u30b0\u30a2\u30a6\u30c8\u30a8\u30e9\u30fc",e)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{htmlAttributes:{lang:"ja"}},r.a.createElement("title",null,"Home")),r.a.createElement("div",{className:a.root},r.a.createElement(Ke.a,{position:"static"},r.a.createElement(Ve.a,null,r.a.createElement(se.a,{variant:"h6",className:a.title},r.a.createElement(l.b,{to:"/",style:{color:"white",textDecoration:"none"}},"YUUTA")),function(){try{if(o.userstate)return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{className:a.appButton},r.a.createElement(l.b,{to:"/mypage",style:{color:"white",textDecoration:"none"}},o.userstate.name)),r.a.createElement(P.a,{color:"inherit",onClick:i},"\u30ed\u30b0\u30a2\u30a6\u30c8"))}catch(e){return r.a.createElement(r.a.Fragment,null)}}()))),r.a.createElement(h.d,null,r.a.createElement(Ze,{path:"/",component:Te,cableApp:t,redirectLink:"/auth"}),r.a.createElement(Ze,{path:"/mypage",component:Ge,redirectLink:"/auth"}),r.a.createElement(h.b,{path:"/auth",element:o&&o.loginStatus?r.a.createElement(Te,{cableApp:t}):r.a.createElement(Ie,null)}),r.a.createElement(Ze,{path:"/changeprof",component:He,redirectLink:"/auth"}),r.a.createElement(Ze,{path:"/home",component:Te,cableApp:t,redirectLink:"/auth"}),r.a.createElement(h.b,{path:"*",element:r.a.createElement(h.a,{to:"/",replace:!0})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(161);var at=u.a.createConsumer("ws://localhost:3001/cable");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null,r.a.createElement(l.a,null,r.a.createElement(tt,{cableApp:at})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){}},[[128,1,2]]]);
//# sourceMappingURL=main.9c9b319c.chunk.js.map