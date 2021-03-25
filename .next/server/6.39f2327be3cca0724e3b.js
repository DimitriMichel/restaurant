exports.ids = [6];
exports.modules = {

/***/ "AMpA":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"panelsContainer": "Map_panelsContainer__1UPHH",
	"imagePanel": "Map_imagePanel__1hnhp",
	"panelTextContainer": "Map_panelTextContainer__3uT9b",
	"panelText": "Map_panelText__3g9sN",
	"magazine": "Map_magazine__3XtLU",
	"thanks": "Map_thanks__gsEsz",
	"highlight": "Map_highlight__1rmlt",
	"leafletContainer": "Map_leafletContainer__2eUXT",
	"center": "Map_center__205fu",
	"infoPanel": "Map_infoPanel__6OopL",
	"dash": "Map_dash__3dlK-"
};


/***/ }),

/***/ "Xlmu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AuoD");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("bMVF");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Map_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("AMpA");
/* harmony import */ var _Map_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Map_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("hgx0");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);








const ICON = Object(leaflet__WEBPACK_IMPORTED_MODULE_6__["icon"])({
  iconUrl: '/marker.png',
  iconSize: [32, 32]
});
const position = [42.349908, -71.079819];

const Map = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    id: "visit",
    className: _Map_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.panelsContainer,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: _Map_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.imagePanel,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_leaflet__WEBPACK_IMPORTED_MODULE_3__["MapContainer"], {
        center: position,
        zoom: 14,
        scrollWheelZoom: false,
        style: {
          height: '100%',
          width: '100%'
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_leaflet__WEBPACK_IMPORTED_MODULE_3__["TileLayer"], {
          url: `https://api.mapbox.com/styles/v1/dimitrimichel/ckjcaeai46nmg19s8gcongozh/tiles/256/{z}/{x}/{y}@2x?access_token=${"pk.eyJ1IjoiZGltaXRyaW1pY2hlbCIsImEiOiJja2pjYWdtN2Y1NGJwMnJxajl0dHRmOXY2In0.z4VpRj0z2rbk3qVAEa-RQA"}`
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_leaflet__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
          icon: ICON,
          position: position,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_leaflet__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
            children: "Scoops!."
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: _Map_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.panelTextContainer,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: _Map_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.panelText,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _Map_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.thanks,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
            children: "Visit Us!"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _Map_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.magazine,
            children: "-"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Come down to our Back Bay, Boston location we'd love to have you, and you can try some of our amazing flavors."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: _Map_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.magazine,
          children: "-"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {})]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "bMVF":
/***/ (function(module, exports) {



/***/ })

};;