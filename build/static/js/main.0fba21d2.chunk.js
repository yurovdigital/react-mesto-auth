(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(17),i=a.n(c),o=(a(29),a(22)),r=a(2),l=a.p+"static/media/header-logo.abb64ac9.svg",u=a(3),p=a(8),d=a(0);var h=function(e){return Object(d.jsx)("header",{className:"header",children:Object(d.jsxs)("div",{className:"header__container",children:[Object(d.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"}),Object(d.jsxs)("div",{className:"header__login-container",children:[Object(d.jsxs)(u.b,{exact:!0,path:"/",children:[Object(d.jsx)("p",{className:"header__user-email",children:e.userEmail}),Object(d.jsx)(p.b,{to:"/sign-in",className:"header__link",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(d.jsx)(u.b,{exact:!0,path:"/sign-in",children:Object(d.jsx)(p.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(u.b,{exact:!0,path:"/sign-up",children:Object(d.jsx)(p.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})})},j=s.a.createContext();var b=function(e){var t=s.a.useContext(j),a=e.card.owner._id===t._id,n="".concat(a?"photo-grid__delete-button":"photo-grid__delete-button_hidden"),c=e.card.likes.some((function(e){return e._id===t._id})),i="".concat(c?"photo-grid__like-button photo-grid__like-button_active":"photo-grid__like-button");return Object(d.jsxs)("article",{className:"photo-grid__card",children:[Object(d.jsx)("button",{className:n,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",onClick:function(){e.onCardDelete(e.card)}}),Object(d.jsx)("img",{className:"photo-grid__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(d.jsxs)("div",{className:"photo-grid__container",children:[Object(d.jsx)("h2",{className:"photo-grid__title",children:e.card.name}),Object(d.jsxs)("div",{className:"photo-grid__like-container",children:[Object(d.jsx)("button",{className:i,type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",onClick:function(){e.onCardLike(e.card)}}),Object(d.jsx)("p",{className:"photo-grid__like-counter",children:e.card.likes.length})]})]})]})};var _=function(e){var t=s.a.useContext(j);return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__avatar-container",children:[Object(d.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(d.jsx)("div",{className:"profile__avatar-overlay",onClick:e.onEditAvatar})]}),Object(d.jsxs)("div",{className:"profile__card",children:[Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__title",children:t.name}),Object(d.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile})]}),Object(d.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(d.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"photo-grid",children:e.cards.map((function(t){return Object(d.jsx)(b,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var m=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var f=function(e){return Object(d.jsx)("section",{className:"popup popup_image-fullscreen ".concat(e.card.link&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__image-container",children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose}),Object(d.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__image"}),Object(d.jsx)("p",{className:"popup__image-fullscreen-text",children:e.card.name})]})})},O=a(20),g=a(21),v=new(function(){function e(t){Object(O.a)(this,e),this._hanldeResponse=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(g.a)(e,[{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._hanldeResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._hanldeResponse(t)}))}},{key:"patchUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._hanldeResponse(e)}))}},{key:"addNewPhoto",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._hanldeResponse(e)}))}},{key:"deletePhoto",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._hanldeResponse(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._hanldeResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._hanldeResponse(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var a=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return a._hanldeResponse(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._hanldeResponse(e)}))}}]),e}())({baseUrl:"https://api.yurov.mesto.nomoredomains.rocks",headers:{"Content-Type":"application/json"}});var x=function(e){return Object(d.jsx)("article",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose}),Object(d.jsx)("h3",{className:"popup__title",children:e.title}),Object(d.jsxs)("form",{className:"popup__form",name:"".concat(e.name),onSubmit:e.onSubmit,noValidate:!0,children:[e.children,Object(d.jsx)("button",{className:"popup__submit-button ".concat(!e.isValid&&"popup__submit-button_disabled"),type:"submit",disabled:!e.isValid&&!0,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var N=function(e){var t=s.a.useState(""),a=Object(r.a)(t,2),n=a[0],c=a[1],i=s.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1],p=s.a.useContext(j),h=s.a.useState(!1),b=Object(r.a)(h,2),_=b[0],m=b[1],f=s.a.useState(!1),O=Object(r.a)(f,2),g=O[0],v=O[1],N=s.a.useState(""),y=Object(r.a)(N,2),S=y[0],C=y[1],k=s.a.useState(""),E=Object(r.a)(k,2),L=E[0],U=E[1],P=s.a.useState(!1),T=Object(r.a)(P,2),w=T[0],A=T[1];return s.a.useEffect((function(){c(p.name),u(p.about),m(!0),v(!0)}),[p,e.isOpen]),s.a.useEffect((function(){A(!(!g||!_))}),[g,_]),Object(d.jsxs)(x,{name:"profile-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:n,about:l})},isValid:w,children:[Object(d.jsxs)("section",{className:"popup__section",children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_title ".concat(!w&&"popup__input_type_error"),type:"text",name:"name",id:"profiletitle-input",placeholder:"\u0418\u043c\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",minLength:"2",maxLength:"40",value:n||"",onChange:function(e){var t=e.target,a=t.validity.valid;c(e.target.value),m(!!a),C(a?"":t.validationMessage)},required:!0}),Object(d.jsx)("span",{className:"popup__error ".concat(!w&&"popup__error_visible"),id:"profiletitle-input-error",children:S})]}),Object(d.jsxs)("section",{className:"popup__section",children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_subtitle ".concat(!w&&"popup__input_type_error"),type:"text",name:"about",id:"pofilesubtitle-input",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",minLength:"2",maxLength:"200",value:l||"",onChange:function(e){var t=e.target,a=t.validity.valid;u(e.target.value),v(!!a),U(a?"":t.validationMessage)},required:!0}),Object(d.jsx)("span",{className:"popup__error ".concat(!w&&"popup__error_visible"),id:"pofilesubtitle-input-error",children:L})]})]})};var y=function(e){var t=s.a.useState(""),a=Object(r.a)(t,2),n=a[0],c=a[1],i=s.a.useState(!1),o=Object(r.a)(i,2),l=o[0],u=o[1],p=s.a.useState(""),h=Object(r.a)(p,2),j=h[0],b=h[1];return s.a.useEffect((function(){c(""),u(!1),b("")}),[e.isOpen]),Object(d.jsx)(x,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:n})},isValid:l,children:Object(d.jsxs)("section",{className:"popup__section",children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_avatar-url ".concat(!l&&"popup__input_type_error"),type:"url",name:"avatar",id:"avatar-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",value:n,onChange:function(e){var t=e.target,a=t.validity.valid;c(t.value),u(!!a),b(a?"":t.validationMessage)},required:!0}),Object(d.jsx)("span",{className:"popup__error ".concat(!l&&"popup__error_visible"),id:"avatar-input-error",children:j})]})})};var S=function(e){var t=s.a.useState(""),a=Object(r.a)(t,2),n=a[0],c=a[1],i=s.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1],p=s.a.useState(!1),h=Object(r.a)(p,2),j=h[0],b=h[1],_=s.a.useState(!1),m=Object(r.a)(_,2),f=m[0],O=m[1],g=s.a.useState(""),v=Object(r.a)(g,2),N=v[0],y=v[1],S=s.a.useState(""),C=Object(r.a)(S,2),k=C[0],E=C[1],L=s.a.useState(!1),U=Object(r.a)(L,2),P=U[0],T=U[1];return s.a.useEffect((function(){T(!(!f||!j))}),[f,j]),s.a.useEffect((function(){c(""),u(""),b(!1),y(""),O(!1),E("")}),[e.isOpen]),Object(d.jsxs)(x,{name:"add-photo",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:n,link:l})},isValid:P,children:[Object(d.jsxs)("section",{className:"popup__section",children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_photo-name",type:"text",name:"name",id:"phototitle-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",minLength:"2",maxLength:"30",value:n,onChange:function(e){var t=e.target,a=t.validity.valid;c(e.target.value),b(!!a),y(a?"":t.validationMessage)},required:!0}),Object(d.jsx)("span",{className:"popup__error ".concat(!P&&"popup__error_visible"),id:"phototitle-input-error",children:N})]}),Object(d.jsxs)("section",{className:"popup__section",children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_photo-url",type:"url",name:"link",id:"photourl-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",value:l,onChange:function(e){var t=e.target,a=t.validity.valid;u(e.target.value),O(!!a),E(a?"":t.validationMessage)},required:!0}),Object(d.jsx)("span",{className:"popup__error ".concat(!P&&"popup__error_visible"),id:"photourl-input-error",children:k})]})]})},C=a(23),k=a(24),E=["component"];var L=function(e){var t=e.component,a=Object(k.a)(e,E);return Object(d.jsx)(u.b,{children:function(){return a.isLoggedIn?Object(d.jsx)(t,Object(C.a)({},a)):Object(d.jsx)(u.a,{to:"/sign-in"})}})};var U=function(e){var t=s.a.useState(""),a=Object(r.a)(t,2),n=a[0],c=a[1],i=s.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1],p=s.a.useState(!1),h=Object(r.a)(p,2),j=h[0],b=h[1],_=s.a.useState(!1),m=Object(r.a)(_,2),f=m[0],O=m[1],g=s.a.useState(""),v=Object(r.a)(g,2),x=v[0],N=v[1],y=s.a.useState(""),S=Object(r.a)(y,2),C=S[0],k=S[1],E=s.a.useState(!1),L=Object(r.a)(E,2),U=L[0],P=L[1];return s.a.useEffect((function(){P(!(!j||!f))}),[j,f]),Object(d.jsx)("main",{className:"main",children:Object(d.jsxs)("section",{className:"entry-page",children:[Object(d.jsx)("h1",{className:"entry-page__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"entry-page__form",name:"sign-in-form",onSubmit:function(t){t.preventDefault(),e.onSubmit(n,l)},isValid:U,children:[Object(d.jsxs)("section",{className:"entry-page__section",children:[Object(d.jsx)("input",{className:"entry-page__input",type:"email",placeholder:"Email",name:"email",minLength:"2",maxLength:"40",value:n,onChange:function(e){var t=e.target,a=t.validity.valid;c(e.target.value),b(!!a),N(a?"":t.validationMessage)},required:!0}),Object(d.jsx)("span",{className:"entry-page__error ".concat(!U&&"entry-page__error_visible"),children:x})]}),Object(d.jsxs)("section",{className:"entry-page__section",children:[Object(d.jsx)("input",{className:"entry-page__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",minLength:"4",maxLength:"10",value:l,onChange:function(e){var t=e.target,a=t.validity.valid;u(e.target.value),O(!!a),k(a?"":t.validationMessage)},required:!0}),Object(d.jsx)("span",{className:"entry-page__error ".concat(!U&&"entry-page__error_visible"),children:C})]}),Object(d.jsx)("button",{className:"entry-page__button ".concat(!U&&"entry-page__button_disabled"),type:"submit",disabled:!U&&!0,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var P=function(e){var t=s.a.useState(""),a=Object(r.a)(t,2),n=a[0],c=a[1],i=s.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1],h=s.a.useState(!1),j=Object(r.a)(h,2),b=j[0],_=j[1],m=s.a.useState(!1),f=Object(r.a)(m,2),O=f[0],g=f[1],v=s.a.useState(""),x=Object(r.a)(v,2),N=x[0],y=x[1],S=s.a.useState(""),C=Object(r.a)(S,2),k=C[0],E=C[1],L=s.a.useState(!1),U=Object(r.a)(L,2),P=U[0],T=U[1];return s.a.useEffect((function(){T(!(!b||!O))}),[b,O]),Object(d.jsx)("main",{className:"main",children:Object(d.jsxs)("section",{className:"entry-page",children:[Object(d.jsx)("h1",{className:"entry-page__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{className:"entry-page__form",name:"sign-in-form",onSubmit:function(t){t.preventDefault(),e.onSubmit(n,l)},isValid:P,children:[Object(d.jsxs)("section",{className:"entry-page__section",children:[Object(d.jsx)("input",{className:"entry-page__input",type:"email",placeholder:"Email",name:"email",minLength:"2",maxLength:"40",value:n,onChange:function(e){var t=e.target,a=t.validity.valid;c(e.target.value),_(!!a),y(a?"":t.validationMessage)},required:!0}),Object(d.jsx)("span",{className:"entry-page__error ".concat(!P&&"entry-page__error_visible"),children:N})]}),Object(d.jsxs)("section",{className:"entry-page__section",children:[Object(d.jsx)("input",{className:"entry-page__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",minLength:"4",maxLength:"10",value:l,onChange:function(e){var t=e.target,a=t.validity.valid;u(e.target.value),g(!!a),E(a?"":t.validationMessage)},required:!0}),Object(d.jsx)("span",{className:"entry-page__error ".concat(!P&&"entry-page__error_visible"),children:k})]}),Object(d.jsx)("button",{className:"entry-page__button ".concat(!P&&"entry-page__button_disabled"),type:"submit",disabled:!P&&!0,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsx)(p.b,{to:"/sign-in",className:"entry-page__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})})},T=a.p+"static/media/registration-success.1b6082f8.svg",w=a.p+"static/media/registration-error.7c6a020b.svg";var A=function(e){return Object(d.jsx)("article",{className:"popup ".concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose}),Object(d.jsx)("img",{className:"popup__icon",src:e.isRegistrationSuccess?T:w,alt:e.isRegistrationSuccess?"\u041a\u0440\u0443\u0433 \u0441 \u0433\u0430\u043b\u043a\u043e\u0439 \u0432 \u0446\u0435\u043d\u0442\u0440\u0435":"\u041a\u0440\u0443\u0433 \u0441 \u043a\u0440\u0435\u0441\u0442\u043e\u043c \u0432 \u0446\u0435\u043d\u0442\u0440\u0435"}),Object(d.jsx)("h2",{className:"popup__text",children:e.isRegistrationSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]})})},R="https://auth.nomoreparties.co",D=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};var I=function(){var e=s.a.useState(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],c=s.a.useState(!1),i=Object(r.a)(c,2),l=i[0],p=i[1],b=s.a.useState(!1),O=Object(r.a)(b,2),g=O[0],x=O[1],C=s.a.useState(!1),k=Object(r.a)(C,2),E=k[0],T=k[1],w=s.a.useState({name:"",link:""}),I=Object(r.a)(w,2),M=I[0],q=I[1],V=s.a.useState({}),J=Object(r.a)(V,2),F=J[0],B=J[1],H=s.a.useState([]),z=Object(r.a)(H,2),G=z[0],K=z[1],Q=s.a.useState(!1),W=Object(r.a)(Q,2),X=W[0],Y=W[1],Z=s.a.useState(!1),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ae=Object(u.g)(),ne=s.a.useState(""),se=Object(r.a)(ne,2),ce=se[0],ie=se[1],oe=s.a.useState(!1),re=Object(r.a)(oe,2),le=(re[0],re[1]);function ue(){n(!1),p(!1),x(!1),q({name:"",link:""}),T(!1)}return s.a.useEffect((function(){v.getUserInfo().then((function(e){B(e)})).catch((function(e){console.log(e)}))}),[]),s.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(R,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return D(e)}))}(e).then((function(e){Y(!0),ie(e.data.email),ae.push("/")})).catch((function(e){console.log(e)}))})),s.a.useEffect((function(){v.getInitialCards().then((function(e){K(e)})).catch((function(e){console.log(e)}))}),[]),Object(d.jsx)(j.Provider,{value:F,children:Object(d.jsxs)("div",{className:"body",children:[Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(h,{userEmail:ce,onSignOut:function(){localStorage.removeItem("jwt"),Y(!1),ae.push("/sign-in")}}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(L,{exact:!0,path:"/",isLoggedIn:X,component:_,onEditProfile:function(){n(!0)},onEditAvatar:function(){p(!0)},onAddPlace:function(){x(!0)},onCardClick:function(e){q(e)},cards:G,onCardDelete:function(e){v.deletePhoto(e._id).then((function(){K(G.filter((function(t){return t._id!==e._id})))})).catch((function(e){console.log(e)}))},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===F._id}));v.changeLikeCardStatus(e._id,!t).then((function(t){K((function(a){return a.map((function(a){return a._id===e._id?t:a}))}))}))}}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(U,{onSubmit:function(e,t){(function(e,t){return fetch("".concat(R,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return D(e)})).then((function(e){return e}))})(e,t).then((function(t){t&&(localStorage.setItem("jwt",t.token),Y(!0),ie(e),ae.push("/"))})).catch((function(e){console.log(e)}))}})}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(P,{onSubmit:function(e,t){le(!0),function(e,t){return fetch("".concat(R,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return D(e)}))}(e,t).then((function(e){e&&(te(!0),T(!0),ae.push("/sign-in"))})).catch((function(e){te(!1),T(!0),console.log(e)})),le(!1)}})}),Object(d.jsx)(u.b,{path:"/",children:X?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsx)(u.a,{to:"/sign-in"})})]}),Object(d.jsx)(m,{})]}),Object(d.jsx)(A,{isOpen:E,onClose:ue,isRegistrationSuccess:ee}),Object(d.jsx)(N,{isOpen:a,onClose:ue,onUpdateUser:function(e){v.patchUserInfo(e).then((function(e){B(e),ue()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(y,{isOpen:l,onClose:ue,onUpdateAvatar:function(e){v.updateAvatar(e).then((function(e){B(e),ue()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(S,{isOpen:g,onClose:ue,onAddPlace:function(e){v.addNewPhoto(e).then((function(e){K([e].concat(Object(o.a)(G))),ue()})).catch((function(e){console.error(e)}))}}),Object(d.jsx)(f,{card:M,onClose:ue})]})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)(I,{})})}),document.getElementById("root")),M()}},[[36,1,2]]]);
//# sourceMappingURL=main.0fba21d2.chunk.js.map