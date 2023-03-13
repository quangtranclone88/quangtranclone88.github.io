"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8362],{11544:function(n,t,e){e.d(t,{a:function(){return x}});var i=e(26042),r=e(69396),o=e(99534),a=e(85893),c=e(67294),u=e(51532),l=e(7740),d=e(7297),s=e(85444),f=e(97943),p=e(89292),h=e(95097);function v(){var n=(0,d.Z)(["\n        pointer-events: none;\n      "]);return v=function(){return n},n}function m(){var n=(0,d.Z)(['\n      &:after {\n        content: "";\n        z-index: ',";\n        display: block;\n        position: absolute;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        background: ",";\n      }\n\n      ","\n    "]);return m=function(){return n},n}function g(){var n=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  overflow: hidden;\n\n  width: ",";\n  height: ",";\n  z-index: ",";\n\n  box-sizing: border-box;\n  padding: ",";\n  margin: 2px 0;\n  border: 1px solid rgba(22, 22, 117, 0.15);\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: 0px 1px 2px ",",\n    0px 0px 1px ",";\n\n  &:active {\n    cursor: grabbing;\n    border: 1px solid ",";\n  }\n\n  &:hover {\n    box-shadow: 0px 12px 33px rgba(0, 0, 0, 0.12);\n  }\n\n  &:focus {\n    border: 1px solid ",";\n    outline: none;\n  }\n\n  // TODO - should we follow this pattern with grabbing cursor?\n  cursor: grab;\n\n  // reset all elements cursor\n  * :not(div) {\n    cursor: auto;\n  }\n\n  button,\n  a,\n  a * {\n    cursor: pointer;\n  }\n\n  "," {\n    height: ",";\n    max-height: 90vh;\n    max-width: 100%;\n    width: ",";\n  }\n\n  ","\n"]);return g=function(){return n},n}var I=p.W5.bottom,L={base:I,disabledOverlay:I+1,disabledOverlayText:I+2},E=s.ZP.div.withConfig({componentId:"sc-31d67582-0"})(g(),(function(n){var t=n.width;return(0,h.rV)(t)}),(function(n){var t=n.height;return(0,h.cK)(t)}),L.base,(function(n){return n.withPadding?p.W0.md:0}),p.E0.md,(function(n){return n.theme.tableOddRow}),p.$_.alphaBlack_10,p.$_.alphaBlack_15,(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),f.BC.small,(function(n){var t=n.height;return(0,h.yc)(t)}),(function(n){var t=n.width;return(0,h.HH)(t)}),(function(n){var t=n.isDisabled,e=n.allowDisabledClick,i=n.theme;return t&&(0,s.iv)(m(),L.disabledOverlay,i.alphaWhite_50,!e&&(0,s.iv)(v()))})),x=(0,c.forwardRef)((function(n,t){var e=n.width,c=void 0===e?l.c.GRID_TILE_MEDIUM_LARGE:e,d=n.height,s=void 0===d?l.MP.AUTO:d,f=n.tag,p=void 0===f?l.Qy.LI:f,h=n.withPadding,v=void 0===h||h,m=n.dataTestId,g=void 0===m?"":m,I=n.dataEventTilePosition,L=void 0===I?"":I,x=n.dataEventTileTitle,_=void 0===x?"":x,R=n.className,T=n.children,b=n.isDisabled,M=void 0!==b&&b,D=n.allowDisabledClick,w=void 0!==D&&D,A=(0,o.Z)(n,["width","height","tag","withPadding","dataTestId","dataEventTilePosition","dataEventTileTitle","className","children","isDisabled","allowDisabledClick"]),G=["app-tile",R].filter(Boolean).join(" "),Z={listStyleType:p===l.Qy.LI&&"none"};return(0,a.jsx)(E,(0,r.Z)((0,i.Z)({ref:t,as:p,className:G,width:c,height:s,withPadding:v,"data-type":u.lU,"data-testid":g,tabIndex:0,style:Z,"data-eventtileposition":L,"data-eventtiletitle":_,isDisabled:M,allowDisabledClick:w,"aria-disabled":M&&!w},A),{children:T}))}));x.displayName="AppTile"},95097:function(n,t,e){e.d(t,{cK:function(){return a},yc:function(){return c},rV:function(){return u},HH:function(){return l}});var i=e(14924),r=e(7740),o="300px",a=function(n){var t=350;switch(n){case r.MP.AUTO:return"auto";case r.MP.SHORT:return"".concat(175,"px");case r.MP.MEDIUM:return"".concat(t/1.3,"px");case r.MP.NORMAL:return"".concat(t,"px");case r.MP.TALL:return"".concat(525,"px");case r.MP.FULL:return"100%";case r.MP.GRID_TILE_SHORT:return"146px";case r.MP.GRID_TILE_NORMAL:return"223px";case r.MP.GRID_TILE_MEDIUM:return"262px";default:return"auto"}},c=function(n){switch(n){case r.MP.GRID_TILE_MEDIUM:case r.MP.MEDIUM:return"".concat(285/1.3,"px");case r.MP.GRID_TILE_NORMAL:return"223px";default:return"auto"}},u=function(n){var t,e=(t={},(0,i.Z)(t,r.c.GRID_TILE_EXTRA_SMALL,"146px"),(0,i.Z)(t,r.c.GRID_TILE_SMALL,"223px"),(0,i.Z)(t,r.c.GRID_TILE_MEDIUM,o),(0,i.Z)(t,r.c.GRID_TILE_MEDIUM_LARGE,"377px"),(0,i.Z)(t,r.c.GRID_TILE_LARGE,"608px"),(0,i.Z)(t,r.c.GRID_TILE_EXTRA_LARGE,"760px"),t);return(null===e||void 0===e?void 0:e[n])||o},l=function(n){var t,e=(t={},(0,i.Z)(t,r.c.GRID_TILE_EXTRA_SMALL,"146px"),(0,i.Z)(t,r.c.GRID_TILE_SMALL,"223px"),(0,i.Z)(t,r.c.GRID_TILE_MEDIUM,o),(0,i.Z)(t,r.c.GRID_TILE_MEDIUM_LARGE,"343px"),(0,i.Z)(t,r.c.GRID_TILE_LARGE,"343px"),(0,i.Z)(t,r.c.GRID_TILE_EXTRA_LARGE,"343px"),t);return(null===e||void 0===e?void 0:e[n])||o}},54224:function(n,t,e){e.d(t,{Z:function(){return h}});var i=e(26042),r=e(69396),o=e(99534),a=e(7297),c=e(85893),u=e(85444),l=e(97943),d=e(21207),s=e(89292);function f(){var n=(0,a.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.27;\n  letter-spacing: -0.36px;\n  margin: 0;\n  padding: 0;\n\n  "," {\n    line-height: 1.33;\n    letter-spacing: -0.28px;\n  }\n"]);return f=function(){return n},n}var p=u.ZP.h3.withConfig({componentId:"sc-ffaf5cb8-0"})(f(),(function(n){return n.theme.text.primary}),(function(n){return s.JB["display".concat(n.size)]}),s.Ue.semiBold,l.BC.small),h=function(n){var t=n.size,e=void 0===t?d.G.NORMAL:t,a=n.className,u=n.children,l=(0,o.Z)(n,["size","className","children"]);return(0,c.jsx)(p,(0,r.Z)((0,i.Z)({},l),{className:a,size:e,children:u}))}},64102:function(n,t,e){e.d(t,{Z:function(){return G}});var i=e(85893),r=e(51783),o=e(67294),a=e(54525),c=e(7297),u=e(85444),l=e(97943),d=e(89292),s=e(57613),f=e(54224);function p(){var n=(0,c.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return p=function(){return n},n}function h(){var n=(0,c.Z)(["\n      "," {\n        align-items: flex-end;\n      }\n    "]);return h=function(){return n},n}function v(){var n=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(5px);\n  z-index: ",";\n  background-color: ",";\n  transform: translate3d(0, 0, 1px);\n\n  ","\n"]);return v=function(){return n},n}function m(){var n=(0,c.Z)(["\n        "," {\n          border-radius: "," "," 0 0;\n        }\n      "]);return m=function(){return n},n}function g(){var n=(0,c.Z)(["\n      opacity: 0;\n      animation: "," 0.3s ease-in forwards;\n    "]);return g=function(){return n},n}function I(){var n=(0,c.Z)(["\n  width: clamp(38%, 958px, 90%);\n  height: auto;\n  max-height: 85vh;\n  padding: ",";\n  border-radius: ",";\n  box-shadow: 0 10px 18px ",";\n  background: ",";\n  position: relative;\n  overflow-y: auto;\n  will-change: opacity;\n\n  "," {\n    padding: ",";\n    width: 100vw;\n\n    ","\n  }\n\n  ","\n"]);return I=function(){return n},n}function L(){var n=(0,c.Z)(["\n      justify-content: flex-end;\n    "]);return L=function(){return n},n}function E(){var n=(0,c.Z)(["\n  position: relative;\n  width: 100%;\n  min-height: 32px;\n  margin-bottom: ",";\n\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  ","\n"]);return E=function(){return n},n}function x(){var n=(0,c.Z)(["\n  margin-left: ",";\n"]);return x=function(){return n},n}function _(){var n=(0,c.Z)([""]);return _=function(){return n},n}var R=(0,u.F4)(p()),T=u.ZP.div.withConfig({componentId:"sc-8fe255c4-0"})(v(),d.W5.topmost,(function(n){return n.theme.alphaBlack_17}),(function(n){return!n.isMobileCenterAligned&&(0,u.iv)(h(),l.BC.medium)})),b=u.ZP.div.withConfig({componentId:"sc-8fe255c4-1"})(I(),d.W0.xl,d.E0.md,(function(n){return n.theme.alphaBlack_50}),(function(n){return n.theme.white}),l.BC.medium,d.W0.lg,(function(n){return!n.isMobileCenterAligned&&(0,u.iv)(m(),l.BC.medium,d.E0.md,d.E0.md)}),(function(n){return n.fadeIn&&(0,u.iv)(g(),R)})),M=u.ZP.div.withConfig({componentId:"sc-8fe255c4-2"})(E(),d.W0.ml,(function(n){return n.hasOnlyCloseBtn&&(0,u.iv)(L())})),D=(0,u.ZP)(s.P).withConfig({componentId:"sc-8fe255c4-3"})(x(),d.W0.md),w=(0,u.ZP)(f.Z).withConfig({componentId:"sc-8fe255c4-4"})(_()),A=function(n){var t=n.children,e=n.isModalOpen,c=n.title,u=n.fadeIn,l=void 0!==u&&u,d=n.headerComponent,s=n.prerender,f=void 0!==s&&s,p=n.isCloseDisabled,h=void 0!==p&&p,v=n.isMobileCenterAligned,m=void 0!==v&&v,g=n.className,I=n.closeActions,L=n.dataTestId,E=function(n){var t=n.isCloseDisabled,e=n.closeActions;return(0,o.useEffect)((function(){var n=function(n){n.key===a.yi.Escape&&(n.stopPropagation(),e())};return document.addEventListener("keydown",n,!1),function(){document.removeEventListener("keydown",n,!1)}}),[e]),{handleClose:function(){t||e()},handleStopPropagation:function(n){return n.stopPropagation()}}}({isCloseDisabled:h,closeActions:I}),x=E.handleClose,_=E.handleStopPropagation;return(e||f)&&(0,i.jsx)(r.Z,{children:(0,i.jsx)(T,{onClick:x,className:g,isMobileCenterAligned:m,children:(0,i.jsxs)(b,{onClick:_,fadeIn:l,isMobileCenterAligned:m,"data-testid":L,children:[(0,i.jsxs)(M,{hasOnlyCloseBtn:Boolean(!c)&&Boolean(!d),children:[!c&&d,c&&(0,i.jsx)(w,{children:c}),!h&&(0,i.jsx)(D,{onClick:x,"data-eventactionname":"close_x"})]}),t]})})})};A.Backdrop=T,A.Wrapper=b,A.Header=M,A.CloseButton=D,A.Backdrop=T,A.Title=w;var G=A},7740:function(n,t,e){var i,r,o;e.d(t,{MP:function(){return r},Qy:function(){return o},c:function(){return i}}),function(n){n.GRID_TILE_EXTRA_SMALL="grid tile extra small",n.GRID_TILE_SMALL="grid tile small",n.GRID_TILE_MEDIUM="grid tile medium",n.GRID_TILE_MEDIUM_LARGE="grid tile medium large",n.GRID_TILE_LARGE="grid tile large",n.GRID_TILE_EXTRA_LARGE="grid tile extra large"}(i||(i={})),function(n){n.AUTO="auto",n.SHORT="short",n.MEDIUM="medium",n.NORMAL="normal",n.TALL="tall",n.FULL="full",n.GRID_TILE_SHORT="grid tile short",n.GRID_TILE_NORMAL="grid tile normal",n.GRID_TILE_MEDIUM="grid tile medium"}(r||(r={})),function(n){n.UL="ul",n.OL="ol",n.LI="li",n.DIV="div",n.FIGURE="figure",n.ARTICLE="article"}(o||(o={}))},21207:function(n,t,e){var i;e.d(t,{G:function(){return i}}),function(n){n.EXTRA_LARGE="XXXL",n.LARGE="XXL",n.NORMAL="XL"}(i||(i={}))},54525:function(n,t,e){var i,r,o,a,c;e.d(t,{Be:function(){return o},KQ:function(){return r},iQ:function(){return i},mr:function(){return a},yi:function(){return c}}),function(n){n.TOP="top",n.RIGHT="right",n.LEFT="left",n.BOTTOM="bottom"}(i||(i={})),function(n){n.LIGHT="light",n.DARK="dark"}(r||(r={})),function(n){n.TopLeft="top-left",n.TopRight="top-right",n.BottomLeft="bottom-left",n.BottomRight="bottom-right"}(o||(o={})),function(n){n.Contain="contain",n.Cover="cover",n.Fill="fill",n.Initial="initial",n.Unset="unset"}(a||(a={})),function(n){n.Enter="Enter",n.Tab="Tab",n.ArrowDown="ArrowDown",n.ArrowUp="ArrowUp",n.ArrowRight="ArrowRight",n.Escape="Escape"}(c||(c={}))},14295:function(n,t,e){e.d(t,{j:function(){return o}});var i=e(97943),r=e(58423),o=function(){var n=(0,r.i)().width,t=i.Ii.small,e=i.Ii.medium,o=i.Ii.xmedium,a=i.Ii.large;return{isSmallDevice:n<=t,isMediumDevice:n>t&&n<=e,isXMediumDevice:n>e&&n<=o,isLargeDevice:n>o&&n<=a,isXLargeDevice:n>a}}},87071:function(n,t,e){e.d(t,{O:function(){return r}});var i=e(67294),r=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,a=(0,i.useState)(e),c=a[0],u=a[1],l=function(){u((function(n){return!n})),Boolean(n)&&Boolean(t)&&o(t,c,n,r)},d=function(){return u(!0)},s=function(){return u(!1)};return{isVisible:c,toggle:l,open:d,close:s}},o=function(n,t,e,i){return document.dispatchEvent(new CustomEvent(n,{detail:{isVisible:t,ref:e,parentRef:i}}))}}}]);