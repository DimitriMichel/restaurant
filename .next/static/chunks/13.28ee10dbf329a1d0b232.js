(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{AMpA:function(n,e,t){n.exports={panelsContainer:"Map_panelsContainer__1UPHH",imagePanel:"Map_imagePanel__1hnhp",panelTextContainer:"Map_panelTextContainer__3uT9b",panelText:"Map_panelText__3g9sN",magazine:"Map_magazine__3XtLU",thanks:"Map_thanks__gsEsz",highlight:"Map_highlight__1rmlt",leafletContainer:"Map_leafletContainer__2eUXT",center:"Map_center__205fu",infoPanel:"Map_infoPanel__6OopL",dash:"Map_dash__3dlK-"}},Xlmu:function(n,e,t){"use strict";t.r(e);var c=t("nKUr"),r=t("q1tI"),o=t.n(r);t("ZMKu");const a=Object(r.createContext)(null),i=a.Provider;function u(){const n=Object(r.useContext)(a);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}var l=t("4R65");function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(n[c]=t[c])}return n}).apply(this,arguments)}function p({children:n,className:e,id:t,placeholder:c,style:a,whenCreated:u,...p}){const f=Object(r.useRef)(null),d=function(n,e){const[t,c]=Object(r.useState)(null);return Object(r.useEffect)(()=>{if(null!==n.current&&null===t){const t=new l.Map(n.current,e);null!=e.center&&null!=e.zoom?t.setView(e.center,e.zoom):null!=e.bounds&&t.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&t.whenReady(e.whenReady),c(t)}},[n,t,e]),t}(f,p),b=Object(r.useRef)(!1);Object(r.useEffect)(()=>{null!=d&&!1===b.current&&null!=u&&(b.current=!0,u(d))},[d,u]);const[j]=Object(r.useState)({className:e,id:t,style:a}),O=Object(r.useMemo)(()=>d?{__version:1,map:d}:null,[d]),m=O?o.a.createElement(i,{value:O},n):null!=c?c:null;return o.a.createElement("div",s({},j,{ref:f}),m)}var f=t("i8i4");function d(n){function e(e,t){const{instance:c,context:a}=n(e).current;return Object(r.useImperativeHandle)(t,()=>c),null==e.children?null:o.a.createElement(i,{value:a},e.children)}return Object(r.forwardRef)(e)}function b(n){function e(e,t){const{instance:c}=n(e).current;return Object(r.useImperativeHandle)(t,()=>c),null}return Object(r.forwardRef)(e)}function j(n,e){return null==e?function(e,t){return Object(r.useRef)(n(e,t))}:function(t,c){const o=Object(r.useRef)(n(t,c)),a=Object(r.useRef)(t),{instance:i}=o.current;return Object(r.useEffect)((function(){a.current!==t&&(e(i,t,a.current),a.current=t)}),[i,t,c]),o}}function O(n,e){const t=Object(r.useRef)(e);Object(r.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}function m(n,e){const t=Object(r.useRef)();Object(r.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}function h(n,e){var t;const c=null!=(t=n.pane)?t:e.pane;return c?{...n,pane:c}:n}function v(n,e){Object(r.useEffect)((function(){var t;const c=null!=(t=e.layerContainer)?t:e.map;return c.addLayer(n.instance),function(){c.removeLayer(n.instance)}}),[e,n])}function x(n){return function(e){const t=u(),c=n(h(e,t),t);return O(t.map,e.attribution),m(c.current,e.eventHandlers),v(c.current,t),c}}const _=b(x(j((function({url:n,...e},t){return{instance:new l.TileLayer(n,h(e,t)),context:t}}),(function(n,e,t){const{opacity:c,zIndex:r}=e;null!=c&&c!==t.opacity&&n.setOpacity(c),null!=r&&r!==t.zIndex&&n.setZIndex(r)}))));const g=function(n,e){return d(x(j(n,e)))}((function({position:n,...e},t){const c=new l.Marker(n,e);return{instance:c,context:{...t,overlayContainer:c}}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())})),y=function(n,e){return function(n){function e(e,t){const[c,o]=Object(r.useState)(!1),{instance:a}=n(e,o).current;Object(r.useImperativeHandle)(t,()=>a),Object(r.useEffect)((function(){c&&a.update()}),[a,c,e.children]);const i=a._contentNode;return i?Object(f.createPortal)(e.children,i):null}return Object(r.forwardRef)(e)}(function(n,e){return function(t,c){const r=u(),o=n(h(t,r),r);return O(r.map,t.attribution),m(o.current,t.eventHandlers),e(o.current,r,t,c),o}}(j(n),e))}((function(n,e){return{instance:new l.Popup(n,e.overlayContainer),context:e}}),(function(n,e,t,c){const{onClose:o,onOpen:a,position:i}=t;Object(r.useEffect)((function(){const{instance:t}=n;function r(n){n.popup===t&&(t.update(),c(!0),null==a||a())}function u(n){n.popup===t&&(c(!1),null==o||o())}return e.map.on({popupopen:r,popupclose:u}),null==e.overlayContainer?(null!=i&&t.setLatLng(i),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){e.map.off({popupopen:r,popupclose:u}),null==e.overlayContainer?e.map.removeLayer(t):e.overlayContainer.unbindPopup()}}),[n,e,c,o,a,i])}));t("bMVF");var C=t("AMpA"),w=t.n(C),M=Object(l.icon)({iconUrl:"/marker.png",iconSize:[32,32]}),z=[42.349908,-71.079819];e.default=function(){return Object(c.jsxs)("div",{id:"visit",className:w.a.panelsContainer,children:[Object(c.jsx)("div",{className:w.a.imagePanel,children:Object(c.jsxs)(p,{center:z,zoom:14,scrollWheelZoom:!1,style:{height:"100%",width:"100%"},children:[Object(c.jsx)(_,{url:"https://api.mapbox.com/styles/v1/dimitrimichel/ckjcaeai46nmg19s8gcongozh/tiles/256/{z}/{x}/{y}@2x?access_token=".concat("pk.eyJ1IjoiZGltaXRyaW1pY2hlbCIsImEiOiJja2pjYWdtN2Y1NGJwMnJxajl0dHRmOXY2In0.z4VpRj0z2rbk3qVAEa-RQA")}),Object(c.jsx)(g,{icon:M,position:z,children:Object(c.jsx)(y,{children:"Scoops!."})})]})}),Object(c.jsx)("div",{className:w.a.panelTextContainer,children:Object(c.jsxs)("div",{className:w.a.panelText,children:[Object(c.jsxs)("div",{className:w.a.thanks,children:[Object(c.jsx)("h2",{children:"Visit Us!"}),Object(c.jsx)("div",{className:w.a.magazine,children:"-"})]}),Object(c.jsx)("p",{children:"Come down to our Back Bay, Boston location we'd love to have you, and you can try some of our amazing flavors."}),Object(c.jsx)("div",{className:w.a.magazine,children:"-"}),Object(c.jsx)("br",{})]})})]})}},bMVF:function(n,e,t){}}]);