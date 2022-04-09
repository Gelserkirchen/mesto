(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._templateSelector=n,this._handleImageClick=r}var n,r;return n=t,(r=[{key:"_handleLikeButton",value:function(e){e.target.classList.toggle("card__like-button_active"),e.target.classList.toggle("card__like-button")}},{key:"_handleCardDelete",value:function(e){e.target.closest(".card").remove()}},{key:"createCard",value:function(){var e=document.querySelector(this._templateSelector).content;return this._cardElement=e.cloneNode(!0),this._cardImage=this._cardElement.querySelector(".card__image"),this._cardImage.src=this._data.link,this._cardImage.alt=this._data.name,this._cardElement.querySelector(".card__text").textContent=this._data.name,this._likeButton=this._cardElement.querySelector(".card__like-button"),this._deleteButton=this._cardElement.querySelector(".card__delete-button"),this._setEventListeners(),this._cardElement}},{key:"_setEventListeners",value:function(){this._likeButton.addEventListener("click",this._handleLikeButton),this._deleteButton.addEventListener("click",this._handleCardDelete),this._cardImage.addEventListener("click",this._handleImageClick)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=r,this._renderer=o,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._data.forEach((function(t){e.addItem(t)}))}},{key:"addItem",value:function(e){var t=this._renderer(e);this._container.prepend(t)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._popupSelector=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleClosePopupByClickOnDarkBackground",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleClosePopupByClickOnDarkBackground.bind(this)),this._popup.querySelector(".popup__close-button").addEventListener("click",this.close.bind(this))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=c(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function p(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submit=t,n._popupInputs=n._popup.querySelector(".popup__inputs"),n._inputList=n._popup.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){u(f(a.prototype),"close",this).call(this),this._popupInputs.reset()}},{key:"_handleSubmitForm",value:function(e){e.preventDefault(),this._submit(e,this._getInputValues()),this.close()}},{key:"setEventListeners",value:function(){var e=this;u(f(a.prototype),"setEventListeners",this).call(this),this._popupInputs.addEventListener("submit",(function(t){e._handleSubmitForm(t)}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_showInputError",(function(e){var t=r._form.querySelector(".".concat(e.id,"-error"));e.classList.add(r._settings.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(r._settings.errorClass)})),_(this,"_hideInputError",(function(e){var t=r._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._settings.inputErrorClass),t.classList.remove(r._settings.errorClass),t.textContent=""})),this._settings=t,this._form=n,this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"disableButtonState",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._settings.inactiveButtonClass)}},{key:"enableButtonState",value:function(){this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._settings.inactiveButtonClass)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._hasInvalidInput()?e.disableButtonState():e.enableButtonState()}))}))}},{key:"removeErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n,r=t.imagePopup,o=t.imagePopupDescription;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._image=r,n._imagePopupDescription=o,n}return t=a,(n=[{key:"open",value:function(e){b(w(a.prototype),"open",this).call(this),this._image.src=e.src,this._image.alt=e.alt,this._imagePopupDescription.textContent=e.alt}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.nameSelector,r=t.professionSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userProfession=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,profession:this._userProfession.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession;this._userName.textContent=t,this._userProfession.textContent=n}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=document.querySelector(".image-popup"),L=j.querySelector(".image-popup__picture"),C=j.querySelector(".image-popup__description"),q=(document.querySelector(".profile__name"),document.querySelector(".profile__profession"),document.querySelector(".profile__edit-button")),I=".popup_type_profile",B=document.querySelector(I),x=".popup_type_new-card",R=document.querySelector(x),D=document.querySelector(".profile__add-button"),T=B.querySelector(".popup__input_type_name"),V=B.querySelector(".popup__input_type_profile"),N=(R.querySelector(".popup__input_type_place"),R.querySelector(".popup__input_type_link"),{formSelector:".popup__inputs",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input-error",errorClass:"popup__input-error_active"}),U=new h(N,B),A=new h(N,R),F=new P({nameSelector:".profile__name",professionSelector:".profile__profession"}),z=new r({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].reverse(),renderer:function(e){return new t(e,".card__template",J).createCard()}},".cards");U.enableValidation(),A.enableValidation();var M=new d(x,(function(e,t){z.addItem(t)}));M.setEventListeners();var G=new d(I,(function(e,t){e.preventDefault(),F.setUserInfo({name:t.name,profession:t.profession})}));G.setEventListeners();var H=new S(".image-popup",{imagePopup:L,imagePopupDescription:C});function J(e){H.open(e.target)}H.setEventListeners(),q.addEventListener("click",(function(){var e=F.getUserInfo(),t=e.name,n=e.profession;T.value=t,V.value=n,G.open()})),D.addEventListener("click",(function(){A.disableButtonState(),A.removeErrors(),M.open()})),z.renderItems()})();