(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(9970)}])},8418:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,i=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(a){i=!0,o=a}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var i,o=(i=t(7294))&&i.__esModule?i:{default:i},l=t(6273),s=t(387),a=t(7190);var c={};function u(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[r+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,i=s.useRouter(),f=o.default.useMemo((function(){var r=n(l.resolveHref(i,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?l.resolveHref(i,e.as):o||t}}),[i,e.href,e.as]),d=f.href,h=f.as,x=e.children,p=e.replace,j=e.shallow,C=e.scroll,v=e.locale;"string"===typeof x&&(x=o.default.createElement("a",null,x));var _=(r=o.default.Children.only(x))&&"object"===typeof r&&r.ref,m=n(a.useIntersection({rootMargin:"200px"}),2),g=m[0],y=m[1],w=o.default.useCallback((function(e){g(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,g]);o.default.useEffect((function(){var e=y&&t&&l.isLocalURL(d),r="undefined"!==typeof v?v:i&&i.locale,n=c[d+"%"+h+(r?"%"+r:"")];e&&!n&&u(i,d,h,{locale:r})}),[h,d,y,v,t,i]);var b={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,i,o,s,a){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),r[i?"replace":"push"](t,n,{shallow:o,locale:a,scroll:s}))}(e,i,d,h,p,j,C,v)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&u(i,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var L="undefined"!==typeof v?v:i&&i.locale,H=i&&i.isLocaleDomain&&l.getDomainLocale(h,L,i&&i.locales,i&&i.domainLocales);b.href=H||l.addBasePath(l.addLocale(h,L,i&&i.defaultLocale))}return o.default.cloneElement(r,b)};r.default=f},7190:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,i=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(a){i=!0,o=a}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!l,a=i.useRef(),c=n(i.useState(!1),2),u=c[0],f=c[1],d=i.useCallback((function(e){a.current&&(a.current(),a.current=void 0),t||u||e&&e.tagName&&(a.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=s.get(r);if(t)return t;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(r,t={id:r,observer:i,elements:n}),t}(t),i=n.id,o=n.observer,l=n.elements;return l.set(e,r),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,u]);return i.useEffect((function(){if(!l&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=t(7294),o=t(9311),l="undefined"!==typeof IntersectionObserver;var s=new Map},9970:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(5893),i=(t(7294),t(2645)),o=t.n(i),l=function(){return(0,n.jsxs)("address",{className:o().blog_footer,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"HITECH-PRESENT"}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"pourquoi-nous",className:"text-white",children:"Pourquoi nous ?"})}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"services",className:"text-white",children:"Nos services"})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"CONTACT"}),(0,n.jsx)("p",{children:"78 010 54 16"}),(0,n.jsx)("p",{children:"Hitech@hitech-present.com"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"HTP"}),(0,n.jsx)("p",{children:"Hitect-present est une startup bas\xe9e \xe0 Dakar,SN. Elle a \xe9t\xe9 cr\xe9e en 2021 et a pour vocation de contribuer \xe0 la r\xe9volution num\xe9rique en cours dans le but de cr\xe9er mais aussi d\u2019accompagner des jeunes porteurs de projet \xe0 cr\xe9er des produits innovants \xe0 forte valeur ajout\xe9e."})]})]})},s=t(1664),a=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"hitech_text",children:(0,n.jsx)("p",{children:"HITECH-PRESENT"})}),(0,n.jsxs)("div",{className:"blog_navbar",children:[(0,n.jsxs)("nav",{className:"navbar_pc",children:[(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{children:"Acceuil"})}),(0,n.jsx)(s.default,{href:"services",children:(0,n.jsx)("a",{children:"Service"})}),(0,n.jsx)(s.default,{href:"agence-conseil",children:(0,n.jsx)("a",{children:"Agence & Conseil"})}),(0,n.jsx)(s.default,{href:"pourquoi-nous",children:(0,n.jsx)("a",{children:"Pourquoi nous"})}),(0,n.jsx)("div",{class:"animation start-home"})]}),(0,n.jsxs)("nav",{className:"navbar_mobile",children:[(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsxs)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsxs)("g",{filter:"url(#filter0_d_2_580)",children:[(0,n.jsx)("circle",{cx:"24",cy:"20",r:"20",fill:"#F2F2F2"}),(0,n.jsx)("path",{d:"M30 25.9999C30 26.1989 29.921 26.3896 29.7803 26.5303C29.6397 26.6709 29.4489 26.7499 29.25 26.7499H18.75C18.5511 26.7499 18.3603 26.6709 18.2197 26.5303C18.079 26.3896 18 26.1989 18 25.9999V19.2499H15.75L23.4952 12.2089C23.6333 12.0833 23.8133 12.0137 24 12.0137C24.1867 12.0137 24.3667 12.0833 24.5048 12.2089L32.25 19.2499H30V25.9999Z",fill:"#828282"})]}),(0,n.jsx)("defs",{children:(0,n.jsxs)("filter",{id:"filter0_d_2_580",x:"0",y:"0",width:"48",height:"48",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,n.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,n.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,n.jsx)("feOffset",{dy:"4"}),(0,n.jsx)("feGaussianBlur",{stdDeviation:"2"}),(0,n.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,n.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,n.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_2_580"}),(0,n.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_2_580",result:"shape"})]})})]})})}),(0,n.jsx)(s.default,{href:"services",children:(0,n.jsx)("a",{children:(0,n.jsxs)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsxs)("g",{filter:"url(#filter0_d_2_590)",children:[(0,n.jsx)("circle",{cx:"24",cy:"20",r:"20",fill:"#F0F0F6"}),(0,n.jsx)("g",{"clip-path":"url(#clip0_2_590)",children:(0,n.jsx)("path",{d:"M32.5 15.287V15.5H27V11H27.2603C27.5338 11 27.7962 11.0889 27.9896 11.2471L32.198 14.6904C32.3913 14.8486 32.5 15.0632 32.5 15.287ZM26.6562 16.625C26.0891 16.625 25.625 16.2453 25.625 15.7812V11H17.0312C16.4617 11 16 11.3778 16 11.8438V28.1562C16 28.6222 16.4617 29 17.0312 29H31.4688C32.0383 29 32.5 28.6222 32.5 28.1562V16.625H26.6562ZM21.294 25.0803C21.2732 25.0984 21.2482 25.1131 21.2204 25.1234C21.1926 25.1337 21.1627 25.1394 21.1322 25.1402C21.1018 25.141 21.0714 25.1368 21.0429 25.1281C21.0144 25.1193 20.9883 25.106 20.966 25.0889L18.1788 22.951C18.1557 22.9332 18.1372 22.9118 18.1246 22.888C18.112 22.8641 18.1055 22.8384 18.1055 22.8125C18.1055 22.7865 18.112 22.7608 18.1246 22.737C18.1372 22.7132 18.1557 22.6917 18.1788 22.674L20.966 20.5361C20.9883 20.519 21.0144 20.5057 21.0429 20.4969C21.0714 20.4881 21.1018 20.484 21.1322 20.4848C21.1627 20.4856 21.1926 20.4913 21.2204 20.5016C21.2482 20.5119 21.2732 20.5265 21.294 20.5447L22.1353 21.2789C22.1566 21.2975 22.173 21.3194 22.1838 21.3432C22.1945 21.3671 22.1993 21.3925 22.1978 21.4179C22.1963 21.4433 22.1886 21.4682 22.1751 21.4911C22.1616 21.514 22.1426 21.5345 22.1193 21.5513L20.3678 22.8125L22.1193 24.0737C22.1426 24.0905 22.1616 24.111 22.1751 24.1339C22.1886 24.1568 22.1963 24.1817 22.1978 24.2071C22.1993 24.2325 22.1945 24.2579 22.1838 24.2818C22.173 24.3056 22.1566 24.3275 22.1353 24.3461L21.294 25.0803V25.0803ZM23.4981 26.8549L22.3185 26.5747C22.2594 26.5607 22.2095 26.528 22.1799 26.4839C22.1502 26.4398 22.1432 26.3878 22.1603 26.3394L24.8003 18.8995C24.8175 18.8511 24.8574 18.8103 24.9113 18.7861C24.9652 18.7618 25.0287 18.756 25.0878 18.7701L26.2674 19.0503C26.2967 19.0572 26.324 19.0688 26.3478 19.0844C26.3716 19.1 26.3914 19.1192 26.406 19.1411C26.4207 19.1629 26.43 19.1869 26.4334 19.2117C26.4367 19.2365 26.4341 19.2616 26.4256 19.2855L23.7856 26.7255C23.7771 26.7494 23.7629 26.7718 23.7439 26.7913C23.7248 26.8107 23.7013 26.8269 23.6746 26.8389C23.6479 26.851 23.6186 26.8586 23.5883 26.8613C23.558 26.864 23.5274 26.8619 23.4981 26.8549V26.8549ZM30.4071 22.951L27.6199 25.0889C27.5977 25.106 27.5716 25.1193 27.5431 25.1281C27.5145 25.1368 27.4842 25.141 27.4537 25.1402C27.4233 25.1394 27.3933 25.1337 27.3655 25.1234C27.3378 25.1131 27.3128 25.0984 27.2919 25.0803L26.4506 24.346C26.4293 24.3275 26.4129 24.3056 26.4021 24.2817C26.3914 24.2579 26.3866 24.2325 26.3881 24.2071C26.3896 24.1817 26.3973 24.1568 26.4108 24.1338C26.4243 24.1109 26.4433 24.0905 26.4666 24.0737L28.2182 22.8125L26.4666 21.5513C26.4433 21.5345 26.4243 21.514 26.4108 21.4911C26.3974 21.4682 26.3896 21.4433 26.3882 21.4179C26.3867 21.3925 26.3914 21.3671 26.4022 21.3432C26.4129 21.3194 26.4294 21.2975 26.4506 21.2789L27.292 20.5447C27.3128 20.5265 27.3378 20.5119 27.3656 20.5016C27.3934 20.4913 27.4233 20.4856 27.4538 20.4848C27.4842 20.484 27.5146 20.4881 27.5431 20.4969C27.5716 20.5057 27.5977 20.519 27.62 20.5361L30.4072 22.674C30.4303 22.6917 30.4488 22.7132 30.4614 22.737C30.474 22.7608 30.4805 22.7865 30.4805 22.8125C30.4805 22.8385 30.474 22.8641 30.4613 22.888C30.4487 22.9118 30.4303 22.9332 30.4071 22.951V22.951Z",fill:"#767676"})})]}),(0,n.jsxs)("defs",{children:[(0,n.jsxs)("filter",{id:"filter0_d_2_590",x:"0",y:"0",width:"48",height:"48",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,n.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,n.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,n.jsx)("feOffset",{dy:"4"}),(0,n.jsx)("feGaussianBlur",{stdDeviation:"2"}),(0,n.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,n.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,n.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_2_590"}),(0,n.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_2_590",result:"shape"})]}),(0,n.jsx)("clipPath",{id:"clip0_2_590",children:(0,n.jsx)("rect",{width:"16.5",height:"18",fill:"white",transform:"translate(16 11)"})})]})]})})}),(0,n.jsx)(s.default,{href:"agence-conseil",children:(0,n.jsx)("a",{children:(0,n.jsxs)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsxs)("g",{filter:"url(#filter0_d_2_602)",children:[(0,n.jsx)("circle",{cx:"24",cy:"20",r:"20",fill:"#F0F0F6"}),(0,n.jsx)("path",{d:"M30.75 12.5C19.5 12.5 18 23 17.25 27.5H18.7485C19.248 25.0003 20.4983 23.6255 22.5 23.375C25.5 23 27.75 20.375 28.5 18.125L27.375 17.375L28.125 16.625C28.875 15.875 29.628 14.75 30.75 12.5Z",fill:"#767676"})]}),(0,n.jsx)("defs",{children:(0,n.jsxs)("filter",{id:"filter0_d_2_602",x:"0",y:"0",width:"48",height:"48",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,n.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,n.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,n.jsx)("feOffset",{dy:"4"}),(0,n.jsx)("feGaussianBlur",{stdDeviation:"2"}),(0,n.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,n.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,n.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_2_602"}),(0,n.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_2_602",result:"shape"})]})})]})})}),(0,n.jsx)(s.default,{href:"pourquoi-nous",children:(0,n.jsx)("a",{children:(0,n.jsxs)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsxs)("g",{filter:"url(#filter0_d_2_598)",children:[(0,n.jsx)("circle",{cx:"24",cy:"20",r:"20",fill:"#F0F0F6"}),(0,n.jsx)("path",{d:"M21.75 20.75V23H26.25V20.75H31.5V26C31.5 26.1989 31.421 26.3897 31.2803 26.5303C31.1397 26.671 30.9489 26.75 30.75 26.75H17.25C17.0511 26.75 16.8603 26.671 16.7197 26.5303C16.579 26.3897 16.5 26.1989 16.5 26V20.75H21.75ZM23.25 19.25H24.75V21.5H23.25V19.25ZM20.25 14.75V12.5C20.25 12.3011 20.329 12.1103 20.4697 11.9697C20.6103 11.829 20.8011 11.75 21 11.75H27C27.1989 11.75 27.3897 11.829 27.5303 11.9697C27.671 12.1103 27.75 12.3011 27.75 12.5V14.75H30.75C30.9489 14.75 31.1397 14.829 31.2803 14.9697C31.421 15.1103 31.5 15.3011 31.5 15.5V19.25H26.25V17.75H21.75V19.25H16.5V15.5C16.5 15.3011 16.579 15.1103 16.7197 14.9697C16.8603 14.829 17.0511 14.75 17.25 14.75H20.25ZM21.75 13.25V14.75H26.25V13.25H21.75Z",fill:"#767676"})]}),(0,n.jsx)("defs",{children:(0,n.jsxs)("filter",{id:"filter0_d_2_598",x:"0",y:"0",width:"48",height:"48",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,n.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,n.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,n.jsx)("feOffset",{dy:"4"}),(0,n.jsx)("feGaussianBlur",{stdDeviation:"2"}),(0,n.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,n.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,n.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_2_598"}),(0,n.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_2_598",result:"shape"})]})})]})})})]})]})]})};t(906),t(3370);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}var f=function(e){var r=e.Component,t=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{}),(0,n.jsx)(r,u({},t)),(0,n.jsx)(l,{})]})}},2645:function(e){e.exports={blog_footer:"footer_blog_footer__VLY0P"}},3370:function(){},906:function(){},1664:function(e,r,t){e.exports=t(8418)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(1780),r(387)}));var t=e.O();_N_E=t}]);