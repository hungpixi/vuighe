!(function e(t, a, i) {
  function n(o, l) {
    if (!a[o]) {
      if (!t[o]) {
        var s = "function" == typeof require && require;
        if (!l && s) return s(o, !0);
        if (r) return r(o, !0);
        var c = new Error("Cannot find module '" + o + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var d = (a[o] = { exports: {} });
      t[o][0].call(
        d.exports,
        function (e) {
          var a = t[o][1][e];
          return n(a || e);
        },
        d,
        d.exports,
        e,
        t,
        a,
        i
      );
    }
    return a[o].exports;
  }
  for (
    var r = "function" == typeof require && require, o = 0;
    o < i.length;
    o++
  )
    n(i[o]);
  return n;
})(
  {
    1: [
      function (e, t, a) {
        "use strict";
        var i = e("../main");
        "function" == typeof define && define.amd
          ? define(i)
          : ((window.PerfectScrollbar = i),
            void 0 === window.Ps && (window.Ps = i));
      },
      { "../main": 7 },
    ],
    2: [
      function (e, t, a) {
        "use strict";
        (a.add = function (e, t) {
          e.classList
            ? e.classList.add(t)
            : (function (e, t) {
                var a = e.className.split(" ");
                a.indexOf(t) < 0 && a.push(t), (e.className = a.join(" "));
              })(e, t);
        }),
          (a.remove = function (e, t) {
            e.classList
              ? e.classList.remove(t)
              : (function (e, t) {
                  var a = e.className.split(" "),
                    i = a.indexOf(t);
                  i >= 0 && a.splice(i, 1), (e.className = a.join(" "));
                })(e, t);
          }),
          (a.list = function (e) {
            return e.classList
              ? Array.prototype.slice.apply(e.classList)
              : e.className.split(" ");
          });
      },
      {},
    ],
    3: [
      function (e, t, a) {
        "use strict";
        var i = {
          e: function (e, t) {
            var a = document.createElement(e);
            return (a.className = t), a;
          },
          appendTo: function (e, t) {
            return t.appendChild(e), e;
          },
        };
        (i.css = function (e, t, a) {
          return "object" == typeof t
            ? (function (e, t) {
                for (var a in t) {
                  var i = t[a];
                  "number" == typeof i && (i = i.toString() + "px"),
                    (e.style[a] = i);
                }
                return e;
              })(e, t)
            : void 0 === a
            ? (function (e, t) {
                return window.getComputedStyle(e)[t];
              })(e, t)
            : (function (e, t, a) {
                return (
                  "number" == typeof a && (a = a.toString() + "px"),
                  (e.style[t] = a),
                  e
                );
              })(e, t, a);
        }),
          (i.matches = function (e, t) {
            return void 0 !== e.matches
              ? e.matches(t)
              : void 0 !== e.matchesSelector
              ? e.matchesSelector(t)
              : void 0 !== e.webkitMatchesSelector
              ? e.webkitMatchesSelector(t)
              : void 0 !== e.mozMatchesSelector
              ? e.mozMatchesSelector(t)
              : void 0 !== e.msMatchesSelector
              ? e.msMatchesSelector(t)
              : void 0;
          }),
          (i.remove = function (e) {
            void 0 !== e.remove
              ? e.remove()
              : e.parentNode && e.parentNode.removeChild(e);
          }),
          (i.queryChildren = function (e, t) {
            return Array.prototype.filter.call(e.childNodes, function (e) {
              return i.matches(e, t);
            });
          }),
          (t.exports = i);
      },
      {},
    ],
    4: [
      function (e, t, a) {
        "use strict";
        var i = function (e) {
          (this.element = e), (this.events = {});
        };
        (i.prototype.bind = function (e, t) {
          void 0 === this.events[e] && (this.events[e] = []),
            this.events[e].push(t),
            this.element.addEventListener(e, t, !1);
        }),
          (i.prototype.unbind = function (e, t) {
            var a = void 0 !== t;
            this.events[e] = this.events[e].filter(function (i) {
              return (
                !(!a || i === t) ||
                (this.element.removeEventListener(e, i, !1), !1)
              );
            }, this);
          }),
          (i.prototype.unbindAll = function () {
            for (var e in this.events) this.unbind(e);
          });
        var n = function () {
          this.eventElements = [];
        };
        (n.prototype.eventElement = function (e) {
          var t = this.eventElements.filter(function (t) {
            return t.element === e;
          })[0];
          return (
            void 0 === t && ((t = new i(e)), this.eventElements.push(t)), t
          );
        }),
          (n.prototype.bind = function (e, t, a) {
            this.eventElement(e).bind(t, a);
          }),
          (n.prototype.unbind = function (e, t, a) {
            this.eventElement(e).unbind(t, a);
          }),
          (n.prototype.unbindAll = function () {
            for (var e = 0; e < this.eventElements.length; e++)
              this.eventElements[e].unbindAll();
          }),
          (n.prototype.once = function (e, t, a) {
            var i = this.eventElement(e),
              n = function (e) {
                i.unbind(t, n), a(e);
              };
            i.bind(t, n);
          }),
          (t.exports = n);
      },
      {},
    ],
    5: [
      function (e, t, a) {
        "use strict";
        t.exports = (function () {
          function e() {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1);
          }
          return function () {
            return (
              e() +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              e() +
              e()
            );
          };
        })();
      },
      {},
    ],
    6: [
      function (e, t, a) {
        "use strict";
        var i = e("./class"),
          n = e("./dom"),
          r = (a.toInt = function (e) {
            return parseInt(e, 10) || 0;
          }),
          o = (a.clone = function (e) {
            if (e) {
              if (e.constructor === Array) return e.map(o);
              if ("object" == typeof e) {
                var t = {};
                for (var a in e) t[a] = o(e[a]);
                return t;
              }
              return e;
            }
            return null;
          });
        (a.extend = function (e, t) {
          var a = o(e);
          for (var i in t) a[i] = o(t[i]);
          return a;
        }),
          (a.isEditable = function (e) {
            return (
              n.matches(e, "input,[contenteditable]") ||
              n.matches(e, "select,[contenteditable]") ||
              n.matches(e, "textarea,[contenteditable]") ||
              n.matches(e, "button,[contenteditable]")
            );
          }),
          (a.removePsClasses = function (e) {
            for (var t = i.list(e), a = 0; a < t.length; a++) {
              var n = t[a];
              0 === n.indexOf("ps-") && i.remove(e, n);
            }
          }),
          (a.outerWidth = function (e) {
            return (
              r(n.css(e, "width")) +
              r(n.css(e, "paddingLeft")) +
              r(n.css(e, "paddingRight")) +
              r(n.css(e, "borderLeftWidth")) +
              r(n.css(e, "borderRightWidth"))
            );
          }),
          (a.startScrolling = function (e, t) {
            i.add(e, "ps-in-scrolling"),
              void 0 !== t
                ? i.add(e, "ps-" + t)
                : (i.add(e, "ps-x"), i.add(e, "ps-y"));
          }),
          (a.stopScrolling = function (e, t) {
            i.remove(e, "ps-in-scrolling"),
              void 0 !== t
                ? i.remove(e, "ps-" + t)
                : (i.remove(e, "ps-x"), i.remove(e, "ps-y"));
          }),
          (a.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch:
              "ontouchstart" in window ||
              (window.DocumentTouch &&
                document instanceof window.DocumentTouch),
            supportsIePointer: null !== window.navigator.msMaxTouchPoints,
          });
      },
      { "./class": 2, "./dom": 3 },
    ],
    7: [
      function (e, t, a) {
        "use strict";
        var i = e("./plugin/destroy"),
          n = e("./plugin/initialize"),
          r = e("./plugin/update");
        t.exports = { initialize: n, update: r, destroy: i };
      },
      {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21,
      },
    ],
    8: [
      function (e, t, a) {
        "use strict";
        t.exports = {
          handlers: [
            "click-rail",
            "drag-scrollbar",
            "keyboard",
            "wheel",
            "touch",
          ],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          suppressScrollX: !1,
          suppressScrollY: !1,
          swipePropagation: !0,
          useBothWheelAxes: !1,
          wheelPropagation: !1,
          wheelSpeed: 1,
          theme: "default",
        };
      },
      {},
    ],
    9: [
      function (e, t, a) {
        "use strict";
        var i = e("../lib/helper"),
          n = e("../lib/dom"),
          r = e("./instances");
        t.exports = function (e) {
          var t = r.get(e);
          t &&
            (t.event.unbindAll(),
            n.remove(t.scrollbarX),
            n.remove(t.scrollbarY),
            n.remove(t.scrollbarXRail),
            n.remove(t.scrollbarYRail),
            i.removePsClasses(e),
            r.remove(e));
        };
      },
      { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 },
    ],
    10: [
      function (e, t, a) {
        "use strict";
        var i = e("../instances"),
          n = e("../update-geometry"),
          r = e("../update-scroll");
        t.exports = function (e) {
          !(function (e, t) {
            function a(e) {
              return e.getBoundingClientRect();
            }
            var i = function (e) {
              e.stopPropagation();
            };
            t.event.bind(t.scrollbarY, "click", i),
              t.event.bind(t.scrollbarYRail, "click", function (i) {
                var o =
                  i.pageY - window.pageYOffset - a(t.scrollbarYRail).top >
                  t.scrollbarYTop
                    ? 1
                    : -1;
                r(e, "top", e.scrollTop + o * t.containerHeight),
                  n(e),
                  i.stopPropagation();
              }),
              t.event.bind(t.scrollbarX, "click", i),
              t.event.bind(t.scrollbarXRail, "click", function (i) {
                var o =
                  i.pageX - window.pageXOffset - a(t.scrollbarXRail).left >
                  t.scrollbarXLeft
                    ? 1
                    : -1;
                r(e, "left", e.scrollLeft + o * t.containerWidth),
                  n(e),
                  i.stopPropagation();
              });
          })(e, i.get(e));
        };
      },
      { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
    ],
    11: [
      function (e, t, a) {
        "use strict";
        var i = e("../../lib/helper"),
          n = e("../../lib/dom"),
          r = e("../instances"),
          o = e("../update-geometry"),
          l = e("../update-scroll");
        t.exports = function (e) {
          var t = r.get(e);
          (function (e, t) {
            function a(a) {
              var n = r + a * t.railXRatio,
                o =
                  Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) +
                  t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
              t.scrollbarXLeft = n < 0 ? 0 : n > o ? o : n;
              var s =
                i.toInt(
                  (t.scrollbarXLeft * (t.contentWidth - t.containerWidth)) /
                    (t.containerWidth - t.railXRatio * t.scrollbarXWidth)
                ) - t.negativeScrollAdjustment;
              l(e, "left", s);
            }
            var r = null,
              s = null,
              c = function (t) {
                a(t.pageX - s), o(e), t.stopPropagation(), t.preventDefault();
              },
              d = function () {
                i.stopScrolling(e, "x"),
                  t.event.unbind(t.ownerDocument, "mousemove", c);
              };
            t.event.bind(t.scrollbarX, "mousedown", function (a) {
              (s = a.pageX),
                (r = i.toInt(n.css(t.scrollbarX, "left")) * t.railXRatio),
                i.startScrolling(e, "x"),
                t.event.bind(t.ownerDocument, "mousemove", c),
                t.event.once(t.ownerDocument, "mouseup", d),
                a.stopPropagation(),
                a.preventDefault();
            });
          })(e, t),
            (function (e, t) {
              function a(a) {
                var n = r + a * t.railYRatio,
                  o =
                    Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) +
                    t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                t.scrollbarYTop = n < 0 ? 0 : n > o ? o : n;
                var s = i.toInt(
                  (t.scrollbarYTop * (t.contentHeight - t.containerHeight)) /
                    (t.containerHeight - t.railYRatio * t.scrollbarYHeight)
                );
                l(e, "top", s);
              }
              var r = null,
                s = null,
                c = function (t) {
                  a(t.pageY - s), o(e), t.stopPropagation(), t.preventDefault();
                },
                d = function () {
                  i.stopScrolling(e, "y"),
                    t.event.unbind(t.ownerDocument, "mousemove", c);
                };
              t.event.bind(t.scrollbarY, "mousedown", function (a) {
                (s = a.pageY),
                  (r = i.toInt(n.css(t.scrollbarY, "top")) * t.railYRatio),
                  i.startScrolling(e, "y"),
                  t.event.bind(t.ownerDocument, "mousemove", c),
                  t.event.once(t.ownerDocument, "mouseup", d),
                  a.stopPropagation(),
                  a.preventDefault();
              });
            })(e, t);
        };
      },
      {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    12: [
      function (e, t, a) {
        "use strict";
        function i(e, t) {
          var a = !1;
          t.event.bind(e, "mouseenter", function () {
            a = !0;
          }),
            t.event.bind(e, "mouseleave", function () {
              a = !1;
            });
          var i = !1;
          t.event.bind(t.ownerDocument, "keydown", function (o) {
            if (
              !(
                (o.isDefaultPrevented && o.isDefaultPrevented()) ||
                o.defaultPrevented
              )
            ) {
              var c =
                r.matches(t.scrollbarX, ":focus") ||
                r.matches(t.scrollbarY, ":focus");
              if (a || c) {
                var d = document.activeElement
                  ? document.activeElement
                  : t.ownerDocument.activeElement;
                if (d) {
                  if ("IFRAME" === d.tagName)
                    d = d.contentDocument.activeElement;
                  else for (; d.shadowRoot; ) d = d.shadowRoot.activeElement;
                  if (n.isEditable(d)) return;
                }
                var u = 0,
                  h = 0;
                switch (o.which) {
                  case 37:
                    u = o.metaKey
                      ? -t.contentWidth
                      : o.altKey
                      ? -t.containerWidth
                      : -30;
                    break;
                  case 38:
                    h = o.metaKey
                      ? t.contentHeight
                      : o.altKey
                      ? t.containerHeight
                      : 30;
                    break;
                  case 39:
                    u = o.metaKey
                      ? t.contentWidth
                      : o.altKey
                      ? t.containerWidth
                      : 30;
                    break;
                  case 40:
                    h = o.metaKey
                      ? -t.contentHeight
                      : o.altKey
                      ? -t.containerHeight
                      : -30;
                    break;
                  case 33:
                    h = 90;
                    break;
                  case 32:
                    h = o.shiftKey ? 90 : -90;
                    break;
                  case 34:
                    h = -90;
                    break;
                  case 35:
                    h = o.ctrlKey ? -t.contentHeight : -t.containerHeight;
                    break;
                  case 36:
                    h = o.ctrlKey ? e.scrollTop : t.containerHeight;
                    break;
                  default:
                    return;
                }
                s(e, "top", e.scrollTop - h),
                  s(e, "left", e.scrollLeft + u),
                  l(e),
                  (i = (function (a, i) {
                    var n = e.scrollTop;
                    if (0 === a) {
                      if (!t.scrollbarYActive) return !1;
                      if (
                        (0 === n && i > 0) ||
                        (n >= t.contentHeight - t.containerHeight && i < 0)
                      )
                        return !t.settings.wheelPropagation;
                    }
                    var r = e.scrollLeft;
                    if (0 === i) {
                      if (!t.scrollbarXActive) return !1;
                      if (
                        (0 === r && a < 0) ||
                        (r >= t.contentWidth - t.containerWidth && a > 0)
                      )
                        return !t.settings.wheelPropagation;
                    }
                    return !0;
                  })(u, h)),
                  i && o.preventDefault();
              }
            }
          });
        }
        var n = e("../../lib/helper"),
          r = e("../../lib/dom"),
          o = e("../instances"),
          l = e("../update-geometry"),
          s = e("../update-scroll");
        t.exports = function (e) {
          i(e, o.get(e));
        };
      },
      {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    13: [
      function (e, t, a) {
        "use strict";
        function i(e, t) {
          function a(a) {
            var n = (function (e) {
                var t = e.deltaX,
                  a = -1 * e.deltaY;
                return (
                  (void 0 !== t && void 0 !== a) ||
                    ((t = (-1 * e.wheelDeltaX) / 6), (a = e.wheelDeltaY / 6)),
                  e.deltaMode && 1 === e.deltaMode && ((t *= 10), (a *= 10)),
                  t != t && a != a && ((t = 0), (a = e.wheelDelta)),
                  e.shiftKey ? [-a, -t] : [t, a]
                );
              })(a),
              l = n[0],
              s = n[1];
            (function (t, a) {
              var i = e.querySelector(
                "textarea:hover, select[multiple]:hover, .ps-child:hover"
              );
              if (i) {
                if (!window.getComputedStyle(i).overflow.match(/(scroll|auto)/))
                  return !1;
                var n = i.scrollHeight - i.clientHeight;
                if (
                  n > 0 &&
                  !(
                    (0 === i.scrollTop && a > 0) ||
                    (i.scrollTop === n && a < 0)
                  )
                )
                  return !0;
                var r = i.scrollLeft - i.clientWidth;
                if (
                  r > 0 &&
                  !(
                    (0 === i.scrollLeft && t < 0) ||
                    (i.scrollLeft === r && t > 0)
                  )
                )
                  return !0;
              }
              return !1;
            })(l, s) ||
              ((i = !1),
              t.settings.useBothWheelAxes
                ? t.scrollbarYActive && !t.scrollbarXActive
                  ? (o(
                      e,
                      "top",
                      s
                        ? e.scrollTop - s * t.settings.wheelSpeed
                        : e.scrollTop + l * t.settings.wheelSpeed
                    ),
                    (i = !0))
                  : t.scrollbarXActive &&
                    !t.scrollbarYActive &&
                    (o(
                      e,
                      "left",
                      l
                        ? e.scrollLeft + l * t.settings.wheelSpeed
                        : e.scrollLeft - s * t.settings.wheelSpeed
                    ),
                    (i = !0))
                : (o(e, "top", e.scrollTop - s * t.settings.wheelSpeed),
                  o(e, "left", e.scrollLeft + l * t.settings.wheelSpeed)),
              r(e),
              (i =
                i ||
                (function (a, i) {
                  var n = e.scrollTop;
                  if (0 === a) {
                    if (!t.scrollbarYActive) return !1;
                    if (
                      (0 === n && i > 0) ||
                      (n >= t.contentHeight - t.containerHeight && i < 0)
                    )
                      return !t.settings.wheelPropagation;
                  }
                  var r = e.scrollLeft;
                  if (0 === i) {
                    if (!t.scrollbarXActive) return !1;
                    if (
                      (0 === r && a < 0) ||
                      (r >= t.contentWidth - t.containerWidth && a > 0)
                    )
                      return !t.settings.wheelPropagation;
                  }
                  return !0;
                })(l, s)),
              i && (a.stopPropagation(), a.preventDefault()));
          }
          var i = !1;
          void 0 !== window.onwheel
            ? t.event.bind(e, "wheel", a)
            : void 0 !== window.onmousewheel &&
              t.event.bind(e, "mousewheel", a);
        }
        var n = e("../instances"),
          r = e("../update-geometry"),
          o = e("../update-scroll");
        t.exports = function (e) {
          i(e, n.get(e));
        };
      },
      { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
    ],
    14: [
      function (e, t, a) {
        "use strict";
        var i = e("../instances"),
          n = e("../update-geometry");
        t.exports = function (e) {
          !(function (e, t) {
            t.event.bind(e, "scroll", function () {
              n(e);
            });
          })(e, i.get(e));
        };
      },
      { "../instances": 18, "../update-geometry": 19 },
    ],
    15: [
      function (e, t, a) {
        "use strict";
        function i(e, t) {
          function a() {
            s ||
              (s = setInterval(function () {
                return r.get(e)
                  ? (l(e, "top", e.scrollTop + c.top),
                    l(e, "left", e.scrollLeft + c.left),
                    void o(e))
                  : void clearInterval(s);
              }, 50));
          }
          function i() {
            s && (clearInterval(s), (s = null)), n.stopScrolling(e);
          }
          var s = null,
            c = { top: 0, left: 0 },
            d = !1;
          t.event.bind(t.ownerDocument, "selectionchange", function () {
            e.contains(
              (function () {
                var e = window.getSelection
                  ? window.getSelection()
                  : document.getSelection
                  ? document.getSelection()
                  : "";
                return 0 === e.toString().length
                  ? null
                  : e.getRangeAt(0).commonAncestorContainer;
              })()
            )
              ? (d = !0)
              : ((d = !1), i());
          }),
            t.event.bind(window, "mouseup", function () {
              d && ((d = !1), i());
            }),
            t.event.bind(window, "keyup", function () {
              d && ((d = !1), i());
            }),
            t.event.bind(window, "mousemove", function (t) {
              if (d) {
                var r = { x: t.pageX, y: t.pageY },
                  o = {
                    left: e.offsetLeft,
                    right: e.offsetLeft + e.offsetWidth,
                    top: e.offsetTop,
                    bottom: e.offsetTop + e.offsetHeight,
                  };
                r.x < o.left + 3
                  ? ((c.left = -5), n.startScrolling(e, "x"))
                  : r.x > o.right - 3
                  ? ((c.left = 5), n.startScrolling(e, "x"))
                  : (c.left = 0),
                  r.y < o.top + 3
                    ? ((c.top = o.top + 3 - r.y < 5 ? -5 : -20),
                      n.startScrolling(e, "y"))
                    : r.y > o.bottom - 3
                    ? ((c.top = r.y - o.bottom + 3 < 5 ? 5 : 20),
                      n.startScrolling(e, "y"))
                    : (c.top = 0),
                  0 === c.top && 0 === c.left ? i() : a();
              }
            });
        }
        var n = e("../../lib/helper"),
          r = e("../instances"),
          o = e("../update-geometry"),
          l = e("../update-scroll");
        t.exports = function (e) {
          i(e, r.get(e));
        };
      },
      {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    16: [
      function (e, t, a) {
        "use strict";
        var i = e("../../lib/helper"),
          n = e("../instances"),
          r = e("../update-geometry"),
          o = e("../update-scroll");
        t.exports = function (e) {
          (i.env.supportsTouch || i.env.supportsIePointer) &&
            (function (e, t, a, i) {
              function l(a, i) {
                var n = e.scrollTop,
                  r = e.scrollLeft,
                  o = Math.abs(a),
                  l = Math.abs(i);
                if (l > o) {
                  if (
                    (i < 0 && n === t.contentHeight - t.containerHeight) ||
                    (i > 0 && 0 === n)
                  )
                    return !t.settings.swipePropagation;
                } else if (
                  o > l &&
                  ((a < 0 && r === t.contentWidth - t.containerWidth) ||
                    (a > 0 && 0 === r))
                )
                  return !t.settings.swipePropagation;
                return !0;
              }
              function s(t, a) {
                o(e, "top", e.scrollTop - a),
                  o(e, "left", e.scrollLeft - t),
                  r(e);
              }
              function c() {
                w = !0;
              }
              function d() {
                w = !1;
              }
              function u(e) {
                return e.targetTouches ? e.targetTouches[0] : e;
              }
              function h(e) {
                return (
                  !(!e.targetTouches || 1 !== e.targetTouches.length) ||
                  !(
                    !e.pointerType ||
                    "mouse" === e.pointerType ||
                    e.pointerType === e.MSPOINTER_TYPE_MOUSE
                  )
                );
              }
              function f(e) {
                if (h(e)) {
                  _ = !0;
                  var t = u(e);
                  (v.pageX = t.pageX),
                    (v.pageY = t.pageY),
                    (p = new Date().getTime()),
                    null !== y && clearInterval(y),
                    e.stopPropagation();
                }
              }
              function g(e) {
                if (
                  (!_ && t.settings.swipePropagation && f(e), !w && _ && h(e))
                ) {
                  var a = u(e),
                    i = { pageX: a.pageX, pageY: a.pageY },
                    n = i.pageX - v.pageX,
                    r = i.pageY - v.pageY;
                  s(n, r), (v = i);
                  var o = new Date().getTime(),
                    c = o - p;
                  c > 0 && ((b.x = n / c), (b.y = r / c), (p = o)),
                    l(n, r) && (e.stopPropagation(), e.preventDefault());
                }
              }
              function m() {
                !w &&
                  _ &&
                  ((_ = !1),
                  clearInterval(y),
                  (y = setInterval(function () {
                    return n.get(e) && (b.x || b.y)
                      ? Math.abs(b.x) < 0.01 && Math.abs(b.y) < 0.01
                        ? void clearInterval(y)
                        : (s(30 * b.x, 30 * b.y),
                          (b.x *= 0.8),
                          void (b.y *= 0.8))
                      : void clearInterval(y);
                  }, 10)));
              }
              var v = {},
                p = 0,
                b = {},
                y = null,
                w = !1,
                _ = !1;
              a
                ? (t.event.bind(window, "touchstart", c),
                  t.event.bind(window, "touchend", d),
                  t.event.bind(e, "touchstart", f),
                  t.event.bind(e, "touchmove", g),
                  t.event.bind(e, "touchend", m))
                : i &&
                  (window.PointerEvent
                    ? (t.event.bind(window, "pointerdown", c),
                      t.event.bind(window, "pointerup", d),
                      t.event.bind(e, "pointerdown", f),
                      t.event.bind(e, "pointermove", g),
                      t.event.bind(e, "pointerup", m))
                    : window.MSPointerEvent &&
                      (t.event.bind(window, "MSPointerDown", c),
                      t.event.bind(window, "MSPointerUp", d),
                      t.event.bind(e, "MSPointerDown", f),
                      t.event.bind(e, "MSPointerMove", g),
                      t.event.bind(e, "MSPointerUp", m)));
            })(e, n.get(e), i.env.supportsTouch, i.env.supportsIePointer);
        };
      },
      {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    17: [
      function (e, t, a) {
        "use strict";
        var i = e("../lib/helper"),
          n = e("../lib/class"),
          r = e("./instances"),
          o = e("./update-geometry"),
          l = {
            "click-rail": e("./handler/click-rail"),
            "drag-scrollbar": e("./handler/drag-scrollbar"),
            keyboard: e("./handler/keyboard"),
            wheel: e("./handler/mouse-wheel"),
            touch: e("./handler/touch"),
            selection: e("./handler/selection"),
          },
          s = e("./handler/native-scroll");
        t.exports = function (e, t) {
          (t = "object" == typeof t ? t : {}), n.add(e, "ps-container");
          var a = r.add(e);
          (a.settings = i.extend(a.settings, t)),
            n.add(e, "ps-theme-" + a.settings.theme),
            a.settings.handlers.forEach(function (t) {
              l[t](e);
            }),
            s(e),
            o(e);
        };
      },
      {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19,
      },
    ],
    18: [
      function (e, t, a) {
        "use strict";
        function i(e) {
          function t() {
            o.add(e, "ps-focus");
          }
          function a() {
            o.remove(e, "ps-focus");
          }
          var i = this;
          (i.settings = r.clone(l)),
            (i.containerWidth = null),
            (i.containerHeight = null),
            (i.contentWidth = null),
            (i.contentHeight = null),
            (i.isRtl = "rtl" === s.css(e, "direction")),
            (i.isNegativeScroll = (function () {
              var t,
                a = e.scrollLeft;
              return (
                (e.scrollLeft = -1),
                (t = e.scrollLeft < 0),
                (e.scrollLeft = a),
                t
              );
            })()),
            (i.negativeScrollAdjustment = i.isNegativeScroll
              ? e.scrollWidth - e.clientWidth
              : 0),
            (i.event = new c()),
            (i.ownerDocument = e.ownerDocument || document),
            (i.scrollbarXRail = s.appendTo(
              s.e("div", "ps-scrollbar-x-rail"),
              e
            )),
            (i.scrollbarX = s.appendTo(
              s.e("div", "ps-scrollbar-x"),
              i.scrollbarXRail
            )),
            i.scrollbarX.setAttribute("tabindex", 0),
            i.event.bind(i.scrollbarX, "focus", t),
            i.event.bind(i.scrollbarX, "blur", a),
            (i.scrollbarXActive = null),
            (i.scrollbarXWidth = null),
            (i.scrollbarXLeft = null),
            (i.scrollbarXBottom = r.toInt(s.css(i.scrollbarXRail, "bottom"))),
            (i.isScrollbarXUsingBottom =
              i.scrollbarXBottom == i.scrollbarXBottom),
            (i.scrollbarXTop = i.isScrollbarXUsingBottom
              ? null
              : r.toInt(s.css(i.scrollbarXRail, "top"))),
            (i.railBorderXWidth =
              r.toInt(s.css(i.scrollbarXRail, "borderLeftWidth")) +
              r.toInt(s.css(i.scrollbarXRail, "borderRightWidth"))),
            s.css(i.scrollbarXRail, "display", "block"),
            (i.railXMarginWidth =
              r.toInt(s.css(i.scrollbarXRail, "marginLeft")) +
              r.toInt(s.css(i.scrollbarXRail, "marginRight"))),
            s.css(i.scrollbarXRail, "display", ""),
            (i.railXWidth = null),
            (i.railXRatio = null),
            (i.scrollbarYRail = s.appendTo(
              s.e("div", "ps-scrollbar-y-rail"),
              e
            )),
            (i.scrollbarY = s.appendTo(
              s.e("div", "ps-scrollbar-y"),
              i.scrollbarYRail
            )),
            i.scrollbarY.setAttribute("tabindex", 0),
            i.event.bind(i.scrollbarY, "focus", t),
            i.event.bind(i.scrollbarY, "blur", a),
            (i.scrollbarYActive = null),
            (i.scrollbarYHeight = null),
            (i.scrollbarYTop = null),
            (i.scrollbarYRight = r.toInt(s.css(i.scrollbarYRail, "right"))),
            (i.isScrollbarYUsingRight = i.scrollbarYRight == i.scrollbarYRight),
            (i.scrollbarYLeft = i.isScrollbarYUsingRight
              ? null
              : r.toInt(s.css(i.scrollbarYRail, "left"))),
            (i.scrollbarYOuterWidth = i.isRtl
              ? r.outerWidth(i.scrollbarY)
              : null),
            (i.railBorderYWidth =
              r.toInt(s.css(i.scrollbarYRail, "borderTopWidth")) +
              r.toInt(s.css(i.scrollbarYRail, "borderBottomWidth"))),
            s.css(i.scrollbarYRail, "display", "block"),
            (i.railYMarginHeight =
              r.toInt(s.css(i.scrollbarYRail, "marginTop")) +
              r.toInt(s.css(i.scrollbarYRail, "marginBottom"))),
            s.css(i.scrollbarYRail, "display", ""),
            (i.railYHeight = null),
            (i.railYRatio = null);
        }
        function n(e) {
          return e.getAttribute("data-ps-id");
        }
        var r = e("../lib/helper"),
          o = e("../lib/class"),
          l = e("./default-setting"),
          s = e("../lib/dom"),
          c = e("../lib/event-manager"),
          d = e("../lib/guid"),
          u = {};
        (a.add = function (e) {
          var t = d();
          return (
            (function (e, t) {
              e.setAttribute("data-ps-id", t);
            })(e, t),
            (u[t] = new i(e)),
            u[t]
          );
        }),
          (a.remove = function (e) {
            delete u[n(e)],
              (function (e) {
                e.removeAttribute("data-ps-id");
              })(e);
          }),
          (a.get = function (e) {
            return u[n(e)];
          });
      },
      {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8,
      },
    ],
    19: [
      function (e, t, a) {
        "use strict";
        function i(e, t) {
          return (
            e.settings.minScrollbarLength &&
              (t = Math.max(t, e.settings.minScrollbarLength)),
            e.settings.maxScrollbarLength &&
              (t = Math.min(t, e.settings.maxScrollbarLength)),
            t
          );
        }
        var n = e("../lib/helper"),
          r = e("../lib/class"),
          o = e("../lib/dom"),
          l = e("./instances"),
          s = e("./update-scroll");
        t.exports = function (e) {
          var t,
            a = l.get(e);
          (a.containerWidth = e.clientWidth),
            (a.containerHeight = e.clientHeight),
            (a.contentWidth = e.scrollWidth),
            (a.contentHeight = e.scrollHeight),
            e.contains(a.scrollbarXRail) ||
              ((t = o.queryChildren(e, ".ps-scrollbar-x-rail")).length > 0 &&
                t.forEach(function (e) {
                  o.remove(e);
                }),
              o.appendTo(a.scrollbarXRail, e)),
            e.contains(a.scrollbarYRail) ||
              ((t = o.queryChildren(e, ".ps-scrollbar-y-rail")).length > 0 &&
                t.forEach(function (e) {
                  o.remove(e);
                }),
              o.appendTo(a.scrollbarYRail, e)),
            !a.settings.suppressScrollX &&
            a.containerWidth + a.settings.scrollXMarginOffset < a.contentWidth
              ? ((a.scrollbarXActive = !0),
                (a.railXWidth = a.containerWidth - a.railXMarginWidth),
                (a.railXRatio = a.containerWidth / a.railXWidth),
                (a.scrollbarXWidth = i(
                  a,
                  n.toInt((a.railXWidth * a.containerWidth) / a.contentWidth)
                )),
                (a.scrollbarXLeft = n.toInt(
                  ((a.negativeScrollAdjustment + e.scrollLeft) *
                    (a.railXWidth - a.scrollbarXWidth)) /
                    (a.contentWidth - a.containerWidth)
                )))
              : (a.scrollbarXActive = !1),
            !a.settings.suppressScrollY &&
            a.containerHeight + a.settings.scrollYMarginOffset < a.contentHeight
              ? ((a.scrollbarYActive = !0),
                (a.railYHeight = a.containerHeight - a.railYMarginHeight),
                (a.railYRatio = a.containerHeight / a.railYHeight),
                (a.scrollbarYHeight = i(
                  a,
                  n.toInt((a.railYHeight * a.containerHeight) / a.contentHeight)
                )),
                (a.scrollbarYTop = n.toInt(
                  (e.scrollTop * (a.railYHeight - a.scrollbarYHeight)) /
                    (a.contentHeight - a.containerHeight)
                )))
              : (a.scrollbarYActive = !1),
            a.scrollbarXLeft >= a.railXWidth - a.scrollbarXWidth &&
              (a.scrollbarXLeft = a.railXWidth - a.scrollbarXWidth),
            a.scrollbarYTop >= a.railYHeight - a.scrollbarYHeight &&
              (a.scrollbarYTop = a.railYHeight - a.scrollbarYHeight),
            (function (e, t) {
              var a = { width: t.railXWidth };
              t.isRtl
                ? (a.left =
                    t.negativeScrollAdjustment +
                    e.scrollLeft +
                    t.containerWidth -
                    t.contentWidth)
                : (a.left = e.scrollLeft),
                t.isScrollbarXUsingBottom
                  ? (a.bottom = t.scrollbarXBottom - e.scrollTop)
                  : (a.top = t.scrollbarXTop + e.scrollTop),
                o.css(t.scrollbarXRail, a);
              var i = { top: e.scrollTop, height: t.railYHeight };
              t.isScrollbarYUsingRight
                ? t.isRtl
                  ? (i.right =
                      t.contentWidth -
                      (t.negativeScrollAdjustment + e.scrollLeft) -
                      t.scrollbarYRight -
                      t.scrollbarYOuterWidth)
                  : (i.right = t.scrollbarYRight - e.scrollLeft)
                : t.isRtl
                ? (i.left =
                    t.negativeScrollAdjustment +
                    e.scrollLeft +
                    2 * t.containerWidth -
                    t.contentWidth -
                    t.scrollbarYLeft -
                    t.scrollbarYOuterWidth)
                : (i.left = t.scrollbarYLeft + e.scrollLeft),
                o.css(t.scrollbarYRail, i),
                o.css(t.scrollbarX, {
                  left: t.scrollbarXLeft,
                  width: t.scrollbarXWidth - t.railBorderXWidth,
                }),
                o.css(t.scrollbarY, {
                  top: t.scrollbarYTop,
                  height: t.scrollbarYHeight - t.railBorderYWidth,
                });
            })(e, a),
            a.scrollbarXActive
              ? r.add(e, "ps-active-x")
              : (r.remove(e, "ps-active-x"),
                (a.scrollbarXWidth = 0),
                (a.scrollbarXLeft = 0),
                s(e, "left", 0)),
            a.scrollbarYActive
              ? r.add(e, "ps-active-y")
              : (r.remove(e, "ps-active-y"),
                (a.scrollbarYHeight = 0),
                (a.scrollbarYTop = 0),
                s(e, "top", 0));
        };
      },
      {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20,
      },
    ],
    20: [
      function (e, t, a) {
        "use strict";
        var i,
          n,
          r = e("./instances"),
          o = function (e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t;
          };
        t.exports = function (e, t, a) {
          if (void 0 === e)
            throw "You must provide an element to the update-scroll function";
          if (void 0 === t)
            throw "You must provide an axis to the update-scroll function";
          if (void 0 === a)
            throw "You must provide a value to the update-scroll function";
          "top" === t &&
            a <= 0 &&
            ((e.scrollTop = a = 0), e.dispatchEvent(o("ps-y-reach-start"))),
            "left" === t &&
              a <= 0 &&
              ((e.scrollLeft = a = 0), e.dispatchEvent(o("ps-x-reach-start")));
          var l = r.get(e);
          "top" === t &&
            a >= l.contentHeight - l.containerHeight &&
            ((a = l.contentHeight - l.containerHeight) - e.scrollTop <= 1
              ? (a = e.scrollTop)
              : (e.scrollTop = a),
            e.dispatchEvent(o("ps-y-reach-end"))),
            "left" === t &&
              a >= l.contentWidth - l.containerWidth &&
              ((a = l.contentWidth - l.containerWidth) - e.scrollLeft <= 1
                ? (a = e.scrollLeft)
                : (e.scrollLeft = a),
              e.dispatchEvent(o("ps-x-reach-end"))),
            i || (i = e.scrollTop),
            n || (n = e.scrollLeft),
            "top" === t && a < i && e.dispatchEvent(o("ps-scroll-up")),
            "top" === t && a > i && e.dispatchEvent(o("ps-scroll-down")),
            "left" === t && a < n && e.dispatchEvent(o("ps-scroll-left")),
            "left" === t && a > n && e.dispatchEvent(o("ps-scroll-right")),
            "top" === t &&
              ((e.scrollTop = i = a), e.dispatchEvent(o("ps-scroll-y"))),
            "left" === t &&
              ((e.scrollLeft = n = a), e.dispatchEvent(o("ps-scroll-x")));
        };
      },
      { "./instances": 18 },
    ],
    21: [
      function (e, t, a) {
        "use strict";
        var i = e("../lib/helper"),
          n = e("../lib/dom"),
          r = e("./instances"),
          o = e("./update-geometry"),
          l = e("./update-scroll");
        t.exports = function (e) {
          var t = r.get(e);
          t &&
            ((t.negativeScrollAdjustment = t.isNegativeScroll
              ? e.scrollWidth - e.clientWidth
              : 0),
            n.css(t.scrollbarXRail, "display", "block"),
            n.css(t.scrollbarYRail, "display", "block"),
            (t.railXMarginWidth =
              i.toInt(n.css(t.scrollbarXRail, "marginLeft")) +
              i.toInt(n.css(t.scrollbarXRail, "marginRight"))),
            (t.railYMarginHeight =
              i.toInt(n.css(t.scrollbarYRail, "marginTop")) +
              i.toInt(n.css(t.scrollbarYRail, "marginBottom"))),
            n.css(t.scrollbarXRail, "display", "none"),
            n.css(t.scrollbarYRail, "display", "none"),
            o(e),
            l(e, "top", e.scrollTop),
            l(e, "left", e.scrollLeft),
            n.css(t.scrollbarXRail, "display", ""),
            n.css(t.scrollbarYRail, "display", ""));
        };
      },
      {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20,
      },
    ],
  },
  {},
  [1]
),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.store = t());
  })(this, function () {
    var e,
      t = {},
      a = window,
      i = a.document,
      n = "localStorage",
      r = "script";
    if (
      ((t.disabled = !1),
      (t.version = "1.3.19"),
      (t.set = function (e, t) {}),
      (t.get = function (e, t) {}),
      (t.has = function (e) {
        return void 0 !== t.get(e);
      }),
      (t.remove = function (e) {}),
      (t.clear = function () {}),
      (t.transact = function (e, a, i) {
        null == i && ((i = a), (a = null)), null == a && (a = {});
        var n = t.get(e, a);
        i(n), t.set(e, n);
      }),
      (t.getAll = function () {}),
      (t.forEach = function () {}),
      (t.serialize = function (e) {
        return JSON.stringify(e);
      }),
      (t.deserialize = function (e) {
        if ("string" == typeof e)
          try {
            return JSON.parse(e);
          } catch (t) {
            return e || void 0;
          }
      }),
      (function () {
        try {
          return n in a && a[n];
        } catch (e) {
          return !1;
        }
      })())
    )
      (e = a[n]),
        (t.set = function (a, i) {
          return void 0 === i ? t.remove(a) : (e.setItem(a, t.serialize(i)), i);
        }),
        (t.get = function (a, i) {
          var n = t.deserialize(e.getItem(a));
          return void 0 === n ? i : n;
        }),
        (t.remove = function (t) {
          e.removeItem(t);
        }),
        (t.clear = function () {
          e.clear();
        }),
        (t.getAll = function () {
          var e = {};
          return (
            t.forEach(function (t, a) {
              e[t] = a;
            }),
            e
          );
        }),
        (t.forEach = function (a) {
          for (var i = 0; i < e.length; i++) {
            var n = e.key(i);
            a(n, t.get(n));
          }
        });
    else if (i.documentElement.addBehavior) {
      var o, l;
      try {
        (l = new ActiveXObject("htmlfile")).open(),
          l.write(
            "<" +
              r +
              ">document.w=window</" +
              r +
              '><iframe src="/favicon.ico"></iframe>'
          ),
          l.close(),
          (o = l.w.frames[0].document),
          (e = o.createElement("div"));
      } catch (t) {
        (e = i.createElement("div")), (o = i.body);
      }
      var s = function (a) {
          return function () {
            var i = Array.prototype.slice.call(arguments, 0);
            i.unshift(e),
              o.appendChild(e),
              e.addBehavior("#default#userData"),
              e.load(n);
            var r = a.apply(t, i);
            return o.removeChild(e), r;
          };
        },
        c = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
        d = function (e) {
          return e.replace(/^d/, "___$&").replace(c, "___");
        };
      (t.set = s(function (e, a, i) {
        return (
          (a = d(a)),
          void 0 === i
            ? t.remove(a)
            : (e.setAttribute(a, t.serialize(i)), e.save(n), i)
        );
      })),
        (t.get = s(function (e, a, i) {
          a = d(a);
          var n = t.deserialize(e.getAttribute(a));
          return void 0 === n ? i : n;
        })),
        (t.remove = s(function (e, t) {
          (t = d(t)), e.removeAttribute(t), e.save(n);
        })),
        (t.clear = s(function (e) {
          var t = e.XMLDocument.documentElement.attributes;
          for (e.load(n); t.length; ) e.removeAttribute(t[0].name);
          e.save(n);
        })),
        (t.getAll = function (e) {
          var a = {};
          return (
            t.forEach(function (e, t) {
              a[e] = t;
            }),
            a
          );
        }),
        (t.forEach = s(function (e, a) {
          for (
            var i, n = e.XMLDocument.documentElement.attributes, r = 0;
            (i = n[r]);
            ++r
          )
            a(i.name, t.deserialize(e.getAttribute(i.name)));
        }));
    }
    try {
      var u = "__storejs__";
      t.set(u, u), t.get(u) != u && (t.disabled = !0), t.remove(u);
    } catch (e) {
      t.disabled = !0;
    }
    return (t.enabled = !t.disabled), t;
  }),
  (function (e) {
    var t = /iPhone/i,
      a = /iPod/i,
      i = /iPad/i,
      n = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
      r = /Android/i,
      o = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
      l =
        /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
      s = /IEMobile/i,
      c = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
      d = /BlackBerry/i,
      u = /BB10/i,
      h = /Opera Mini/i,
      f = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
      g = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
      m = /UC.*Browser|UCWEB/i,
      v = /VuiGhe|IMAD/i,
      p = /AppleTV/i,
      b = /(GoogleTV|CrKey)/i,
      y = /(SmartTV|SMART-TV|Tizen(.*TV))/i,
      w = /(Sony(.*TV)|TV(.*Sony))/i,
      _ = /(LG(.*NetCast))/i,
      L = /TSB(.*TV)/i,
      x = /Viera/i,
      k = /(HbbTV|Espial|NETTV|TV(.*HDMI))/i,
      E = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
      T = function (e, t) {
        return e.test(t);
      },
      S = function (e) {
        var S = e || navigator.userAgent,
          I = S.split("[FBAN");
        if (
          (void 0 !== I[1] && (S = I[0]),
          (this.apple = {
            phone: T(t, S),
            ipod: T(a, S),
            tablet: !T(t, S) && T(i, S),
            device: T(t, S) || T(a, S) || T(i, S),
          }),
          (this.amazon = {
            phone: T(o, S),
            tablet: !T(o, S) && T(l, S),
            device: T(o, S) || T(l, S),
          }),
          (this.android = {
            phone: T(o, S) || T(n, S),
            tablet: !T(o, S) && !T(n, S) && (T(l, S) || T(r, S)),
            device: T(o, S) || T(l, S) || T(n, S) || T(r, S),
          }),
          (this.windows = {
            phone: T(s, S),
            tablet: T(c, S),
            device: T(s, S) || T(c, S),
          }),
          (this.vuighe = { app: T(v, S) }),
          (this.tvu = {
            apple: T(p, S),
            google: T(b, S),
            samsung: T(y, S),
            sony: T(w, S),
            lg: T(_, S),
            toshiba: T(L, S),
            panasonic: T(x, S),
            other: T(k, S),
          }),
          (this.other = {
            blackberry: T(d, S),
            blackberry10: T(u, S),
            opera: T(h, S),
            firefox: T(g, S),
            chrome: T(f, S),
            uc: T(m, S),
            device: T(d, S) || T(u, S) || T(h, S) || T(g, S) || T(f, S),
          }),
          (this.seven_inch = T(E, S)),
          (this.any =
            this.apple.device ||
            this.android.device ||
            this.windows.device ||
            this.other.device ||
            this.seven_inch),
          (this.phone =
            this.apple.phone || this.android.phone || this.windows.phone),
          (this.tablet =
            this.apple.tablet || this.android.tablet || this.windows.tablet),
          (this.tv =
            this.tvu.apple ||
            this.tvu.google ||
            this.tvu.samsung ||
            this.tvu.sony ||
            this.tvu.lg ||
            this.tvu.toshiba ||
            this.tvu.panasonic ||
            this.tvu.other),
          "undefined" == typeof window)
        )
          return this;
      },
      I = function () {
        var e = new S();
        return (e.Class = S), e;
      };
    "undefined" != typeof module &&
    module.exports &&
    "undefined" == typeof window
      ? (module.exports = S)
      : "undefined" != typeof module &&
        module.exports &&
        "undefined" != typeof window
      ? (module.exports = I())
      : "function" == typeof define && define.amd
      ? define("ismobile", [], (e.ismobile = I()))
      : (e.ismobile = I());
  })(this),
  (function () {
    "use strict";
    function e() {
      var e = {
        parent: document.body,
        version: "1.0.11",
        defaultOkLabel: "Ok",
        okLabel: "Ok",
        defaultCancelLabel: "Cancel",
        cancelLabel: "Cancel",
        defaultMaxLogItems: 2,
        maxLogItems: 2,
        promptValue: "",
        promptPlaceholder: "",
        closeLogOnClick: !1,
        closeLogOnClickDefault: !1,
        delay: 5e3,
        defaultDelay: 5e3,
        logContainerClass: "alertify-logs",
        logContainerDefaultClass: "alertify-logs",
        dialogs: {
          buttons: {
            holder: "<nav>{{buttons}}</nav>",
            ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
            cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>",
          },
          input: "<input type='text'>",
          message: "<p class='msg'>{{message}}</p>",
          log: "<div class='{{class}}'>{{message}}</div>",
        },
        defaultDialogs: {
          buttons: {
            holder: "<nav>{{buttons}}</nav>",
            ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
            cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>",
          },
          input: "<input type='text'>",
          message: "<p class='msg'>{{message}}</p>",
          log: "<div class='{{class}}'>{{message}}</div>",
        },
        build: function (e) {
          var t = this.dialogs.buttons.ok,
            a =
              "<div class='dialog'><div>" +
              this.dialogs.message.replace("{{message}}", e.message);
          return (
            ("confirm" !== e.type && "prompt" !== e.type) ||
              (t = this.dialogs.buttons.cancel + this.dialogs.buttons.ok),
            "prompt" === e.type && (a += this.dialogs.input),
            (a + this.dialogs.buttons.holder + "</div></div>")
              .replace("{{buttons}}", t)
              .replace("{{ok}}", this.okLabel)
              .replace("{{cancel}}", this.cancelLabel)
          );
        },
        setCloseLogOnClick: function (e) {
          this.closeLogOnClick = !!e;
        },
        close: function (e, a) {
          this.closeLogOnClick &&
            e.addEventListener("click", function () {
              t(e);
            }),
            0 > (a = a && !isNaN(+a) ? +a : this.delay)
              ? t(e)
              : a > 0 &&
                setTimeout(function () {
                  t(e);
                }, a);
        },
        dialog: function (e, t, a, i) {
          return this.setup({ type: t, message: e, onOkay: a, onCancel: i });
        },
        log: function (e, t, a) {
          var i = document.querySelectorAll(".alertify-logs > div");
          if (i) {
            var n = i.length - this.maxLogItems;
            if (n >= 0)
              for (var r = 0, o = n + 1; o > r; r++) this.close(i[r], -1);
          }
          this.notify(e, t, a);
        },
        setLogPosition: function (e) {
          this.logContainerClass = "alertify-logs " + e;
        },
        setupLogContainer: function () {
          var e = document.querySelector(".alertify-logs"),
            t = this.logContainerClass;
          return (
            e ||
              (((e = document.createElement("div")).className = t),
              this.parent.appendChild(e)),
            e.className !== t && (e.className = t),
            e
          );
        },
        notify: function (t, a, i) {
          var n = this.setupLogContainer(),
            r = document.createElement("div");
          (r.className = a || "default"),
            e.logTemplateMethod
              ? (r.innerHTML = e.logTemplateMethod(t))
              : (r.innerHTML = t),
            "function" == typeof i && r.addEventListener("click", i),
            n.appendChild(r),
            setTimeout(function () {
              r.className += " show";
            }, 10),
            this.close(r, this.delay);
        },
        setup: function (e) {
          function a(a) {
            "function" != typeof a && (a = function () {}),
              r &&
                r.addEventListener("click", function (n) {
                  e.onOkay &&
                    "function" == typeof e.onOkay &&
                    (l ? e.onOkay(l.value, n) : e.onOkay(n)),
                    a(
                      l
                        ? { buttonClicked: "ok", inputValue: l.value, event: n }
                        : { buttonClicked: "ok", event: n }
                    ),
                    t(i);
                }),
              o &&
                o.addEventListener("click", function (n) {
                  e.onCancel &&
                    "function" == typeof e.onCancel &&
                    e.onCancel(n),
                    a({ buttonClicked: "cancel", event: n }),
                    t(i);
                }),
              l &&
                l.addEventListener("keyup", function (e) {
                  13 === e.which && r.click();
                });
          }
          var i = document.createElement("div");
          (i.className = "alertify hide"), (i.innerHTML = this.build(e));
          var n,
            r = i.querySelector(".ok"),
            o = i.querySelector(".cancel"),
            l = i.querySelector("input"),
            s = i.querySelector("label");
          return (
            l &&
              ("string" == typeof this.promptPlaceholder &&
                (s
                  ? (s.textContent = this.promptPlaceholder)
                  : (l.placeholder = this.promptPlaceholder)),
              "string" == typeof this.promptValue &&
                (l.value = this.promptValue)),
            "function" == typeof Promise ? (n = new Promise(a)) : a(),
            this.parent.appendChild(i),
            setTimeout(function () {
              i.classList.remove("hide"),
                l && e.type && "prompt" === e.type
                  ? (l.select(), l.focus())
                  : r && r.focus();
            }, 100),
            n
          );
        },
        okBtn: function (e) {
          return (this.okLabel = e), this;
        },
        setDelay: function (e) {
          return (
            (e = e || 0),
            (this.delay = isNaN(e) ? this.defaultDelay : parseInt(e, 10)),
            this
          );
        },
        cancelBtn: function (e) {
          return (this.cancelLabel = e), this;
        },
        setMaxLogItems: function (e) {
          this.maxLogItems = parseInt(e || this.defaultMaxLogItems);
        },
        theme: function (e) {
          switch (e.toLowerCase()) {
            case "bootstrap":
              (this.dialogs.buttons.ok =
                "<button class='ok btn btn-primary' tabindex='1'>{{ok}}</button>"),
                (this.dialogs.buttons.cancel =
                  "<button class='cancel btn btn-default' tabindex='2'>{{cancel}}</button>"),
                (this.dialogs.input =
                  "<input type='text' class='form-control'>");
              break;
            case "purecss":
              (this.dialogs.buttons.ok =
                "<button class='ok pure-button' tabindex='1'>{{ok}}</button>"),
                (this.dialogs.buttons.cancel =
                  "<button class='cancel pure-button' tabindex='2'>{{cancel}}</button>");
              break;
            case "mdl":
            case "material-design-light":
              (this.dialogs.buttons.ok =
                "<button class='ok mdl-button mdl-js-button mdl-js-ripple-effect'  tabindex='1'>{{ok}}</button>"),
                (this.dialogs.buttons.cancel =
                  "<button class='cancel mdl-button mdl-js-button mdl-js-ripple-effect' tabindex='2'>{{cancel}}</button>"),
                (this.dialogs.input =
                  "<div class='mdl-textfield mdl-js-textfield'><input class='mdl-textfield__input'><label class='md-textfield__label'></label></div>");
              break;
            case "angular-material":
              (this.dialogs.buttons.ok =
                "<button class='ok md-primary md-button' tabindex='1'>{{ok}}</button>"),
                (this.dialogs.buttons.cancel =
                  "<button class='cancel md-button' tabindex='2'>{{cancel}}</button>"),
                (this.dialogs.input =
                  "<div layout='column'><md-input-container md-no-float><input type='text'></md-input-container></div>");
              break;
            default:
              (this.dialogs.buttons.ok = this.defaultDialogs.buttons.ok),
                (this.dialogs.buttons.cancel =
                  this.defaultDialogs.buttons.cancel),
                (this.dialogs.input = this.defaultDialogs.input);
          }
        },
        reset: function () {
          (this.parent = document.body),
            this.theme("default"),
            this.okBtn(this.defaultOkLabel),
            this.cancelBtn(this.defaultCancelLabel),
            this.setMaxLogItems(),
            (this.promptValue = ""),
            (this.promptPlaceholder = ""),
            (this.delay = this.defaultDelay),
            this.setCloseLogOnClick(this.closeLogOnClickDefault),
            this.setLogPosition("bottom left"),
            (this.logTemplateMethod = null);
        },
        injectCSS: function () {
          if (!document.querySelector("#alertifyCSS")) {
            var e = document.getElementsByTagName("head")[0],
              t = document.createElement("style");
            (t.type = "text/css"),
              (t.id = "alertifyCSS"),
              (t.innerHTML =
                ".alertify-logs>*{padding:12px 24px;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.2);border-radius:1px}.alertify-logs>*,.alertify-logs>.default{background:rgba(0,0,0,.8)}.alertify-logs>.error{background:rgba(244,67,54,.8)}.alertify-logs>.success{background:rgba(76,175,80,.9)}.alertify{position:fixed;background-color:rgba(0,0,0,.3);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:1}.alertify.hide{opacity:0;pointer-events:none}.alertify,.alertify.show{box-sizing:border-box;transition:all .33s cubic-bezier(.25,.8,.25,1)}.alertify,.alertify *{box-sizing:border-box}.alertify .dialog{padding:12px}.alertify .alert,.alertify .dialog{width:100%;margin:0 auto;position:relative;top:50%;transform:translateY(-50%)}.alertify .alert>*,.alertify .dialog>*{width:400px;max-width:95%;margin:0 auto;text-align:center;padding:12px;background:#fff;box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alert .msg,.alertify .dialog .msg{padding:12px;margin-bottom:12px;margin:0;text-align:left}.alertify .alert input:not(.form-control),.alertify .dialog input:not(.form-control){margin-bottom:15px;width:100%;font-size:100%;padding:12px}.alertify .alert input:not(.form-control):focus,.alertify .dialog input:not(.form-control):focus{outline-offset:-2px}.alertify .alert nav,.alertify .dialog nav{text-align:right}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button),.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){background:transparent;box-sizing:border-box;color:rgba(0,0,0,.87);position:relative;outline:0;border:0;display:inline-block;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-size:14px;text-decoration:none;cursor:pointer;border:1px solid transparent;border-radius:2px}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover{background-color:rgba(0,0,0,.05)}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus{border:1px solid rgba(0,0,0,.1)}.alertify .alert nav button.btn,.alertify .dialog nav button.btn{margin:6px 4px}.alertify-logs{position:fixed;z-index:1}.alertify-logs.bottom,.alertify-logs:not(.top){bottom:16px}.alertify-logs.left,.alertify-logs:not(.right){left:16px}.alertify-logs.left>*,.alertify-logs:not(.right)>*{float:left;transform:translateZ(0);height:auto}.alertify-logs.left>.show,.alertify-logs:not(.right)>.show{left:0}.alertify-logs.left>*,.alertify-logs.left>.hide,.alertify-logs:not(.right)>*,.alertify-logs:not(.right)>.hide{left:-110%}.alertify-logs.right{right:16px}.alertify-logs.right>*{float:right;transform:translateZ(0)}.alertify-logs.right>.show{right:0;opacity:1}.alertify-logs.right>*,.alertify-logs.right>.hide{right:-110%;opacity:0}.alertify-logs.top{top:0}.alertify-logs>*{box-sizing:border-box;transition:all .4s cubic-bezier(.25,.8,.25,1);position:relative;clear:both;backface-visibility:hidden;perspective:1000;max-height:0;margin:0;padding:0;overflow:hidden;opacity:0;pointer-events:none}.alertify-logs>.show{margin-top:12px;opacity:1;max-height:1000px;padding:12px;pointer-events:auto}"),
              e.insertBefore(t, e.firstChild);
          }
        },
        removeCSS: function () {
          var e = document.querySelector("#alertifyCSS");
          e && e.parentNode && e.parentNode.removeChild(e);
        },
      };
      return (
        e.injectCSS(),
        {
          _$$alertify: e,
          parent: function (t) {
            e.parent = t;
          },
          reset: function () {
            return e.reset(), this;
          },
          alert: function (t, a, i) {
            return e.dialog(t, "alert", a, i) || this;
          },
          confirm: function (t, a, i) {
            return e.dialog(t, "confirm", a, i) || this;
          },
          prompt: function (t, a, i) {
            return e.dialog(t, "prompt", a, i) || this;
          },
          log: function (t, a) {
            return e.log(t, "default", a), this;
          },
          theme: function (t) {
            return e.theme(t), this;
          },
          success: function (t, a) {
            return e.log(t, "success", a), this;
          },
          error: function (t, a) {
            return e.log(t, "error", a), this;
          },
          cancelBtn: function (t) {
            return e.cancelBtn(t), this;
          },
          okBtn: function (t) {
            return e.okBtn(t), this;
          },
          delay: function (t) {
            return e.setDelay(t), this;
          },
          placeholder: function (t) {
            return (e.promptPlaceholder = t), this;
          },
          defaultValue: function (t) {
            return (e.promptValue = t), this;
          },
          maxLogItems: function (t) {
            return e.setMaxLogItems(t), this;
          },
          closeLogOnClick: function (t) {
            return e.setCloseLogOnClick(!!t), this;
          },
          logPosition: function (t) {
            return e.setLogPosition(t || ""), this;
          },
          setLogTemplate: function (t) {
            return (e.logTemplateMethod = t), this;
          },
          clearLogs: function () {
            return (e.setupLogContainer().innerHTML = ""), this;
          },
          version: e.version,
        }
      );
    }
    var t = function (e) {
      if (e) {
        var t = function () {
          e && e.parentNode && e.parentNode.removeChild(e);
        };
        e.classList.remove("show"),
          e.classList.add("hide"),
          e.addEventListener("transitionend", t),
          setTimeout(t, 500);
      }
    };
    if ("undefined" != typeof module && module && module.exports) {
      module.exports = function () {
        return new e();
      };
      var a = new e();
      for (var i in a) module.exports[i] = a[i];
    } else
      "function" == typeof define && define.amd
        ? define(function () {
            return new e();
          })
        : (window.alertify = new e());
  })(),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : (e.Mark = t());
  })(this, function () {
    "use strict";
    function e(t) {
      return (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(t);
    }
    function t(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      for (var a = 0; a < t.length; a++) {
        var i = t[a];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function i(e, t, i) {
      return t && a(e.prototype, t), i && a(e, i), e;
    }
    function n() {
      return (n =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var i in a)
              Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
          return e;
        }).apply(this, arguments);
    }
    var r = (function () {
        function e(a) {
          var i =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 5e3;
          t(this, e),
            (this.ctx = a),
            (this.iframes = i),
            (this.exclude = n),
            (this.iframesTimeout = r);
        }
        return (
          i(
            e,
            [
              {
                key: "getContexts",
                value: function () {
                  var e = [];
                  return (
                    (void 0 !== this.ctx && this.ctx
                      ? NodeList.prototype.isPrototypeOf(this.ctx)
                        ? Array.prototype.slice.call(this.ctx)
                        : Array.isArray(this.ctx)
                        ? this.ctx
                        : "string" == typeof this.ctx
                        ? Array.prototype.slice.call(
                            document.querySelectorAll(this.ctx)
                          )
                        : [this.ctx]
                      : []
                    ).forEach(function (t) {
                      var a =
                        e.filter(function (e) {
                          return e.contains(t);
                        }).length > 0;
                      -1 !== e.indexOf(t) || a || e.push(t);
                    }),
                    e
                  );
                },
              },
              {
                key: "getIframeContents",
                value: function (e, t) {
                  var a,
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : function () {};
                  try {
                    var n = e.contentWindow;
                    if (((a = n.document), !n || !a))
                      throw new Error("iframe inaccessible");
                  } catch (e) {
                    i();
                  }
                  a && t(a);
                },
              },
              {
                key: "isIframeBlank",
                value: function (e) {
                  var t = "about:blank",
                    a = e.getAttribute("src").trim();
                  return e.contentWindow.location.href === t && a !== t && a;
                },
              },
              {
                key: "observeIframeLoad",
                value: function (e, t, a) {
                  var i = this,
                    n = !1,
                    r = null,
                    o = function o() {
                      if (!n) {
                        (n = !0), clearTimeout(r);
                        try {
                          i.isIframeBlank(e) ||
                            (e.removeEventListener("load", o),
                            i.getIframeContents(e, t, a));
                        } catch (e) {
                          a();
                        }
                      }
                    };
                  e.addEventListener("load", o),
                    (r = setTimeout(o, this.iframesTimeout));
                },
              },
              {
                key: "onIframeReady",
                value: function (e, t, a) {
                  try {
                    "complete" === e.contentWindow.document.readyState
                      ? this.isIframeBlank(e)
                        ? this.observeIframeLoad(e, t, a)
                        : this.getIframeContents(e, t, a)
                      : this.observeIframeLoad(e, t, a);
                  } catch (e) {
                    a();
                  }
                },
              },
              {
                key: "waitForIframes",
                value: function (e, t) {
                  var a = this,
                    i = 0;
                  this.forEachIframe(
                    e,
                    function () {
                      return !0;
                    },
                    function (e) {
                      i++,
                        a.waitForIframes(e.querySelector("html"), function () {
                          --i || t();
                        });
                    },
                    function (e) {
                      e || t();
                    }
                  );
                },
              },
              {
                key: "forEachIframe",
                value: function (t, a, i) {
                  var n = this,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : function () {},
                    o = t.querySelectorAll("iframe"),
                    l = o.length,
                    s = 0;
                  o = Array.prototype.slice.call(o);
                  var c = function () {
                    --l <= 0 && r(s);
                  };
                  l || c(),
                    o.forEach(function (t) {
                      e.matches(t, n.exclude)
                        ? c()
                        : n.onIframeReady(
                            t,
                            function (e) {
                              a(t) && (s++, i(e)), c();
                            },
                            c
                          );
                    });
                },
              },
              {
                key: "createIterator",
                value: function (e, t, a) {
                  return document.createNodeIterator(e, t, a, !1);
                },
              },
              {
                key: "createInstanceOnIframe",
                value: function (t) {
                  return new e(t.querySelector("html"), this.iframes);
                },
              },
              {
                key: "compareNodeIframe",
                value: function (e, t, a) {
                  if (
                    e.compareDocumentPosition(a) &
                    Node.DOCUMENT_POSITION_PRECEDING
                  ) {
                    if (null === t) return !0;
                    if (
                      t.compareDocumentPosition(a) &
                      Node.DOCUMENT_POSITION_FOLLOWING
                    )
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: "getIteratorNode",
                value: function (e) {
                  var t = e.previousNode();
                  return {
                    prevNode: t,
                    node: (null === t || e.nextNode()) && e.nextNode(),
                  };
                },
              },
              {
                key: "checkIframeFilter",
                value: function (e, t, a, i) {
                  var n = !1,
                    r = !1;
                  return (
                    i.forEach(function (e, t) {
                      e.val === a && ((n = t), (r = e.handled));
                    }),
                    this.compareNodeIframe(e, t, a)
                      ? (!1 !== n || r
                          ? !1 === n || r || (i[n].handled = !0)
                          : i.push({ val: a, handled: !0 }),
                        !0)
                      : (!1 === n && i.push({ val: a, handled: !1 }), !1)
                  );
                },
              },
              {
                key: "handleOpenIframes",
                value: function (e, t, a, i) {
                  var n = this;
                  e.forEach(function (e) {
                    e.handled ||
                      n.getIframeContents(e.val, function (e) {
                        n.createInstanceOnIframe(e).forEachNode(t, a, i);
                      });
                  });
                },
              },
              {
                key: "iterateThroughNodes",
                value: function (e, t, a, i, n) {
                  for (
                    var r,
                      o,
                      l,
                      s = this,
                      c = this.createIterator(t, e, i),
                      d = [],
                      u = [];
                    void 0,
                      (l = s.getIteratorNode(c)),
                      (o = l.prevNode),
                      (r = l.node);

                  )
                    this.iframes &&
                      this.forEachIframe(
                        t,
                        function (e) {
                          return s.checkIframeFilter(r, o, e, d);
                        },
                        function (t) {
                          s.createInstanceOnIframe(t).forEachNode(
                            e,
                            function (e) {
                              return u.push(e);
                            },
                            i
                          );
                        }
                      ),
                      u.push(r);
                  u.forEach(function (e) {
                    a(e);
                  }),
                    this.iframes && this.handleOpenIframes(d, e, a, i),
                    n();
                },
              },
              {
                key: "forEachNode",
                value: function (e, t, a) {
                  var i = this,
                    n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : function () {},
                    r = this.getContexts(),
                    o = r.length;
                  o || n(),
                    r.forEach(function (r) {
                      var l = function () {
                        i.iterateThroughNodes(e, r, t, a, function () {
                          --o <= 0 && n();
                        });
                      };
                      i.iframes ? i.waitForIframes(r, l) : l();
                    });
                },
              },
            ],
            [
              {
                key: "matches",
                value: function (e, t) {
                  var a = "string" == typeof t ? [t] : t,
                    i =
                      e.matches ||
                      e.matchesSelector ||
                      e.msMatchesSelector ||
                      e.mozMatchesSelector ||
                      e.oMatchesSelector ||
                      e.webkitMatchesSelector;
                  if (i) {
                    var n = !1;
                    return (
                      a.every(function (t) {
                        return !i.call(e, t) || ((n = !0), !1);
                      }),
                      n
                    );
                  }
                  return !1;
                },
              },
            ]
          ),
          e
        );
      })(),
      o = (function () {
        function e(a) {
          t(this, e),
            (this.opt = n(
              {},
              {
                diacritics: !0,
                synonyms: {},
                accuracy: "partially",
                caseSensitive: !1,
                ignoreJoiners: !1,
                ignorePunctuation: [],
                wildcards: "disabled",
              },
              a
            ));
        }
        return (
          i(e, [
            {
              key: "create",
              value: function (e) {
                return (
                  "disabled" !== this.opt.wildcards &&
                    (e = this.setupWildcardsRegExp(e)),
                  (e = this.escapeStr(e)),
                  Object.keys(this.opt.synonyms).length &&
                    (e = this.createSynonymsRegExp(e)),
                  (this.opt.ignoreJoiners ||
                    this.opt.ignorePunctuation.length) &&
                    (e = this.setupIgnoreJoinersRegExp(e)),
                  this.opt.diacritics && (e = this.createDiacriticsRegExp(e)),
                  (e = this.createMergedBlanksRegExp(e)),
                  (this.opt.ignoreJoiners ||
                    this.opt.ignorePunctuation.length) &&
                    (e = this.createJoinersRegExp(e)),
                  "disabled" !== this.opt.wildcards &&
                    (e = this.createWildcardsRegExp(e)),
                  (e = this.createAccuracyRegExp(e)),
                  new RegExp(e, "gm".concat(this.opt.caseSensitive ? "" : "i"))
                );
              },
            },
            {
              key: "sortByLength",
              value: function (e) {
                return e.sort(function (e, t) {
                  return e.length === t.length
                    ? e > t
                      ? 1
                      : -1
                    : t.length - e.length;
                });
              },
            },
            {
              key: "escapeStr",
              value: function (e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
              },
            },
            {
              key: "createSynonymsRegExp",
              value: function (e) {
                var t = this,
                  a = this.opt.synonyms,
                  i = this.opt.caseSensitive ? "" : "i",
                  n =
                    this.opt.ignoreJoiners || this.opt.ignorePunctuation.length
                      ? "\0"
                      : "";
                for (var r in a)
                  if (a.hasOwnProperty(r)) {
                    var o = Array.isArray(a[r]) ? a[r] : [a[r]];
                    o.unshift(r),
                      (o = this.sortByLength(o)
                        .map(function (e) {
                          return (
                            "disabled" !== t.opt.wildcards &&
                              (e = t.setupWildcardsRegExp(e)),
                            t.escapeStr(e)
                          );
                        })
                        .filter(function (e) {
                          return "" !== e;
                        })).length > 1 &&
                        (e = e.replace(
                          new RegExp(
                            "(".concat(
                              o
                                .map(function (e) {
                                  return t.escapeStr(e);
                                })
                                .join("|"),
                              ")"
                            ),
                            "gm".concat(i)
                          ),
                          n +
                            "(".concat(
                              o
                                .map(function (e) {
                                  return t.processSynonyms(e);
                                })
                                .join("|"),
                              ")"
                            ) +
                            n
                        ));
                  }
                return e;
              },
            },
            {
              key: "processSynonyms",
              value: function (e) {
                return (
                  (this.opt.ignoreJoiners ||
                    this.opt.ignorePunctuation.length) &&
                    (e = this.setupIgnoreJoinersRegExp(e)),
                  e
                );
              },
            },
            {
              key: "setupWildcardsRegExp",
              value: function (e) {
                return (e = e.replace(/(?:\\)*\?/g, function (e) {
                  return "\\" === e.charAt(0) ? "?" : "";
                })).replace(/(?:\\)*\*/g, function (e) {
                  return "\\" === e.charAt(0) ? "*" : "";
                });
              },
            },
            {
              key: "createWildcardsRegExp",
              value: function (e) {
                var t = "withSpaces" === this.opt.wildcards;
                return e
                  .replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?")
                  .replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*");
              },
            },
            {
              key: "setupIgnoreJoinersRegExp",
              value: function (e) {
                return e.replace(/[^(|)\\]/g, function (e, t, a) {
                  var i = a.charAt(t + 1);
                  return /[(|)\\]/.test(i) || "" === i ? e : e + "\0";
                });
              },
            },
            {
              key: "createJoinersRegExp",
              value: function (e) {
                var t = [],
                  a = this.opt.ignorePunctuation;
                return (
                  Array.isArray(a) &&
                    a.length &&
                    t.push(this.escapeStr(a.join(""))),
                  this.opt.ignoreJoiners &&
                    t.push("\\u00ad\\u200b\\u200c\\u200d"),
                  t.length
                    ? e.split(/\u0000+/).join("[".concat(t.join(""), "]*"))
                    : e
                );
              },
            },
            {
              key: "createDiacriticsRegExp",
              value: function (e) {
                var t = this.opt.caseSensitive ? "" : "i",
                  a = this.opt.caseSensitive
                    ? [
                        "aàáảãạăằắẳẵặâầấẩẫậäåāą",
                        "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                        "cçćč",
                        "CÇĆČ",
                        "dđď",
                        "DĐĎ",
                        "eèéẻẽẹêềếểễệëěēę",
                        "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                        "iìíỉĩịîïī",
                        "IÌÍỈĨỊÎÏĪ",
                        "lł",
                        "LŁ",
                        "nñňń",
                        "NÑŇŃ",
                        "oòóỏõọôồốổỗộơởỡớờợöøō",
                        "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                        "rř",
                        "RŘ",
                        "sšśșş",
                        "SŠŚȘŞ",
                        "tťțţ",
                        "TŤȚŢ",
                        "uùúủũụưừứửữựûüůū",
                        "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                        "yýỳỷỹỵÿ",
                        "YÝỲỶỸỴŸ",
                        "zžżź",
                        "ZŽŻŹ",
                      ]
                    : [
                        "aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                        "cçćčCÇĆČ",
                        "dđďDĐĎ",
                        "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                        "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ",
                        "lłLŁ",
                        "nñňńNÑŇŃ",
                        "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                        "rřRŘ",
                        "sšśșşSŠŚȘŞ",
                        "tťțţTŤȚŢ",
                        "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                        "yýỳỷỹỵÿYÝỲỶỸỴŸ",
                        "zžżźZŽŻŹ",
                      ],
                  i = [];
                return (
                  e.split("").forEach(function (n) {
                    a.every(function (a) {
                      if (-1 !== a.indexOf(n)) {
                        if (i.indexOf(a) > -1) return !1;
                        (e = e.replace(
                          new RegExp("[".concat(a, "]"), "gm".concat(t)),
                          "[".concat(a, "]")
                        )),
                          i.push(a);
                      }
                      return !0;
                    });
                  }),
                  e
                );
              },
            },
            {
              key: "createMergedBlanksRegExp",
              value: function (e) {
                return e.replace(/[\s]+/gim, "[\\s]+");
              },
            },
            {
              key: "createAccuracyRegExp",
              value: function (e) {
                var t = this,
                  a = this.opt.accuracy,
                  i = "string" == typeof a ? a : a.value,
                  n = "string" == typeof a ? [] : a.limiters,
                  r = "";
                switch (
                  (n.forEach(function (e) {
                    r += "|".concat(t.escapeStr(e));
                  }),
                  i)
                ) {
                  default:
                    return "()(".concat(e, ")");
                  case "complementary":
                    return (
                      (r =
                        "\\s" +
                        (r ||
                          this.escapeStr(
                            "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿"
                          ))),
                      "()([^".concat(r, "]*").concat(e, "[^").concat(r, "]*)")
                    );
                  case "exactly":
                    return "(^|\\s"
                      .concat(r, ")(")
                      .concat(e, ")(?=$|\\s")
                      .concat(r, ")");
                }
              },
            },
          ]),
          e
        );
      })(),
      l = (function () {
        function a(e) {
          t(this, a), (this.ctx = e), (this.ie = !1);
          var i = window.navigator.userAgent;
          (i.indexOf("MSIE") > -1 || i.indexOf("Trident") > -1) &&
            (this.ie = !0);
        }
        return (
          i(a, [
            {
              key: "log",
              value: function (t) {
                var a =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "debug",
                  i = this.opt.log;
                this.opt.debug &&
                  "object" === e(i) &&
                  "function" == typeof i[a] &&
                  i[a]("mark.js: ".concat(t));
              },
            },
            {
              key: "getSeparatedKeywords",
              value: function (e) {
                var t = this,
                  a = [];
                return (
                  e.forEach(function (e) {
                    t.opt.separateWordSearch
                      ? e.split(" ").forEach(function (e) {
                          e.trim() && -1 === a.indexOf(e) && a.push(e);
                        })
                      : e.trim() && -1 === a.indexOf(e) && a.push(e);
                  }),
                  {
                    keywords: a.sort(function (e, t) {
                      return t.length - e.length;
                    }),
                    length: a.length,
                  }
                );
              },
            },
            {
              key: "isNumeric",
              value: function (e) {
                return Number(parseFloat(e)) == e;
              },
            },
            {
              key: "checkRanges",
              value: function (e) {
                var t = this;
                if (
                  !Array.isArray(e) ||
                  "[object Object]" !== Object.prototype.toString.call(e[0])
                )
                  return (
                    this.log(
                      "markRanges() will only accept an array of objects"
                    ),
                    this.opt.noMatch(e),
                    []
                  );
                var a = [],
                  i = 0;
                return (
                  e
                    .sort(function (e, t) {
                      return e.start - t.start;
                    })
                    .forEach(function (e) {
                      var n = t.callNoMatchOnInvalidRanges(e, i),
                        r = n.start,
                        o = n.end;
                      n.valid &&
                        ((e.start = r), (e.length = o - r), a.push(e), (i = o));
                    }),
                  a
                );
              },
            },
            {
              key: "callNoMatchOnInvalidRanges",
              value: function (e, t) {
                var a,
                  i,
                  n = !1;
                return (
                  e && void 0 !== e.start
                    ? ((i =
                        (a = parseInt(e.start, 10)) + parseInt(e.length, 10)),
                      this.isNumeric(e.start) &&
                      this.isNumeric(e.length) &&
                      i - t > 0 &&
                      i - a > 0
                        ? (n = !0)
                        : (this.log(
                            "Ignoring invalid or overlapping range: " +
                              "".concat(JSON.stringify(e))
                          ),
                          this.opt.noMatch(e)))
                    : (this.log(
                        "Ignoring invalid range: ".concat(JSON.stringify(e))
                      ),
                      this.opt.noMatch(e)),
                  { start: a, end: i, valid: n }
                );
              },
            },
            {
              key: "checkWhitespaceRanges",
              value: function (e, t, a) {
                var i,
                  n = !0,
                  r = a.length,
                  o = t - r,
                  l = parseInt(e.start, 10) - o;
                return (
                  (i = (l = l > r ? r : l) + parseInt(e.length, 10)) > r &&
                    ((i = r),
                    this.log(
                      "End range automatically set to the max value of ".concat(
                        r
                      )
                    )),
                  l < 0 || i - l < 0 || l > r || i > r
                    ? ((n = !1),
                      this.log("Invalid range: ".concat(JSON.stringify(e))),
                      this.opt.noMatch(e))
                    : "" === a.substring(l, i).replace(/\s+/g, "") &&
                      ((n = !1),
                      this.log(
                        "Skipping whitespace only range: " + JSON.stringify(e)
                      ),
                      this.opt.noMatch(e)),
                  { start: l, end: i, valid: n }
                );
              },
            },
            {
              key: "getTextNodes",
              value: function (e) {
                var t = this,
                  a = "",
                  i = [];
                this.iterator.forEachNode(
                  NodeFilter.SHOW_TEXT,
                  function (e) {
                    i.push({
                      start: a.length,
                      end: (a += e.textContent).length,
                      node: e,
                    });
                  },
                  function (e) {
                    return t.matchesExclude(e.parentNode)
                      ? NodeFilter.FILTER_REJECT
                      : NodeFilter.FILTER_ACCEPT;
                  },
                  function () {
                    e({ value: a, nodes: i });
                  }
                );
              },
            },
            {
              key: "matchesExclude",
              value: function (e) {
                return r.matches(
                  e,
                  this.opt.exclude.concat([
                    "script",
                    "style",
                    "title",
                    "head",
                    "html",
                  ])
                );
              },
            },
            {
              key: "wrapRangeInTextNode",
              value: function (e, t, a) {
                var i = this.opt.element ? this.opt.element : "mark",
                  n = e.splitText(t),
                  r = n.splitText(a - t),
                  o = document.createElement(i);
                return (
                  o.setAttribute("data-markjs", "true"),
                  this.opt.className &&
                    o.setAttribute("class", this.opt.className),
                  (o.textContent = n.textContent),
                  n.parentNode.replaceChild(o, n),
                  r
                );
              },
            },
            {
              key: "wrapRangeInMappedTextNode",
              value: function (e, t, a, i, n) {
                var r = this;
                e.nodes.every(function (o, l) {
                  var s = e.nodes[l + 1];
                  if (void 0 === s || s.start > t) {
                    if (!i(o.node)) return !1;
                    var c = t - o.start,
                      d = (a > o.end ? o.end : a) - o.start,
                      u = e.value.substr(0, o.start),
                      h = e.value.substr(d + o.start);
                    if (
                      ((o.node = r.wrapRangeInTextNode(o.node, c, d)),
                      (e.value = u + h),
                      e.nodes.forEach(function (t, a) {
                        a >= l &&
                          (e.nodes[a].start > 0 &&
                            a !== l &&
                            (e.nodes[a].start -= d),
                          (e.nodes[a].end -= d));
                      }),
                      (a -= d),
                      n(o.node.previousSibling, o.start),
                      !(a > o.end))
                    )
                      return !1;
                    t = o.end;
                  }
                  return !0;
                });
              },
            },
            {
              key: "wrapGroups",
              value: function (e, t, a, i) {
                return (
                  i(
                    (e = this.wrapRangeInTextNode(e, t, t + a)).previousSibling
                  ),
                  e
                );
              },
            },
            {
              key: "separateGroups",
              value: function (e, t, a, i, n) {
                for (var r = t.length, o = 1; o < r; o++) {
                  var l = e.textContent.indexOf(t[o]);
                  t[o] &&
                    l > -1 &&
                    i(t[o], e) &&
                    (e = this.wrapGroups(e, l, t[o].length, n));
                }
                return e;
              },
            },
            {
              key: "wrapMatches",
              value: function (e, t, a, i, n) {
                var r = this,
                  o = 0 === t ? 0 : t + 1;
                this.getTextNodes(function (t) {
                  t.nodes.forEach(function (t) {
                    var n;
                    for (
                      t = t.node;
                      null !== (n = e.exec(t.textContent)) && "" !== n[o];

                    ) {
                      if (r.opt.separateGroups)
                        t = r.separateGroups(t, n, o, a, i);
                      else {
                        if (!a(n[o], t)) continue;
                        var l = n.index;
                        if (0 !== o)
                          for (var s = 1; s < o; s++) l += n[s].length;
                        t = r.wrapGroups(t, l, n[o].length, i);
                      }
                      e.lastIndex = 0;
                    }
                  }),
                    n();
                });
              },
            },
            {
              key: "wrapMatchesAcrossElements",
              value: function (e, t, a, i, n) {
                var r = this,
                  o = 0 === t ? 0 : t + 1;
                this.getTextNodes(function (t) {
                  for (var l; null !== (l = e.exec(t.value)) && "" !== l[o]; ) {
                    var s = l.index;
                    if (0 !== o) for (var c = 1; c < o; c++) s += l[c].length;
                    var d = s + l[o].length;
                    r.wrapRangeInMappedTextNode(
                      t,
                      s,
                      d,
                      function (e) {
                        return a(l[o], e);
                      },
                      function (t, a) {
                        (e.lastIndex = a), i(t);
                      }
                    );
                  }
                  n();
                });
              },
            },
            {
              key: "wrapRangeFromIndex",
              value: function (e, t, a, i) {
                var n = this;
                this.getTextNodes(function (r) {
                  var o = r.value.length;
                  e.forEach(function (e, i) {
                    var l = n.checkWhitespaceRanges(e, o, r.value),
                      s = l.start,
                      c = l.end;
                    l.valid &&
                      n.wrapRangeInMappedTextNode(
                        r,
                        s,
                        c,
                        function (a) {
                          return t(a, e, r.value.substring(s, c), i);
                        },
                        function (t) {
                          a(t, e);
                        }
                      );
                  }),
                    i();
                });
              },
            },
            {
              key: "unwrapMatches",
              value: function (e) {
                for (
                  var t = e.parentNode, a = document.createDocumentFragment();
                  e.firstChild;

                )
                  a.appendChild(e.removeChild(e.firstChild));
                t.replaceChild(a, e),
                  this.ie ? this.normalizeTextNode(t) : t.normalize();
              },
            },
            {
              key: "normalizeTextNode",
              value: function (e) {
                if (e) {
                  if (3 === e.nodeType)
                    for (; e.nextSibling && 3 === e.nextSibling.nodeType; )
                      (e.nodeValue += e.nextSibling.nodeValue),
                        e.parentNode.removeChild(e.nextSibling);
                  else this.normalizeTextNode(e.firstChild);
                  this.normalizeTextNode(e.nextSibling);
                }
              },
            },
            {
              key: "markRegExp",
              value: function (e, t) {
                var a = this;
                (this.opt = t),
                  this.log('Searching with expression "'.concat(e, '"'));
                var i = 0,
                  n = "wrapMatches";
                this.opt.acrossElements && (n = "wrapMatchesAcrossElements"),
                  this[n](
                    e,
                    this.opt.ignoreGroups,
                    function (e, t) {
                      return a.opt.filter(t, e, i);
                    },
                    function (e) {
                      i++, a.opt.each(e);
                    },
                    function () {
                      0 === i && a.opt.noMatch(e), a.opt.done(i);
                    }
                  );
              },
            },
            {
              key: "mark",
              value: function (e, t) {
                var a = this;
                this.opt = t;
                var i = 0,
                  n = "wrapMatches",
                  r = this.getSeparatedKeywords("string" == typeof e ? [e] : e),
                  l = r.keywords,
                  s = r.length;
                this.opt.acrossElements && (n = "wrapMatchesAcrossElements"),
                  0 === s
                    ? this.opt.done(i)
                    : (function e(t) {
                        var r = new o(a.opt).create(t),
                          c = 0;
                        a.log('Searching with expression "'.concat(r, '"')),
                          a[n](
                            r,
                            1,
                            function (e, n) {
                              return a.opt.filter(n, t, i, c);
                            },
                            function (e) {
                              c++, i++, a.opt.each(e);
                            },
                            function () {
                              0 === c && a.opt.noMatch(t),
                                l[s - 1] === t
                                  ? a.opt.done(i)
                                  : e(l[l.indexOf(t) + 1]);
                            }
                          );
                      })(l[0]);
              },
            },
            {
              key: "markRanges",
              value: function (e, t) {
                var a = this;
                this.opt = t;
                var i = 0,
                  n = this.checkRanges(e);
                n && n.length
                  ? (this.log(
                      "Starting to mark with the following ranges: " +
                        JSON.stringify(n)
                    ),
                    this.wrapRangeFromIndex(
                      n,
                      function (e, t, i, n) {
                        return a.opt.filter(e, t, i, n);
                      },
                      function (e, t) {
                        i++, a.opt.each(e, t);
                      },
                      function () {
                        a.opt.done(i);
                      }
                    ))
                  : this.opt.done(i);
              },
            },
            {
              key: "unmark",
              value: function (e) {
                var t = this;
                this.opt = e;
                var a = this.opt.element ? this.opt.element : "*";
                (a += "[data-markjs]"),
                  this.opt.className && (a += ".".concat(this.opt.className)),
                  this.log('Removal selector "'.concat(a, '"')),
                  this.iterator.forEachNode(
                    NodeFilter.SHOW_ELEMENT,
                    function (e) {
                      t.unwrapMatches(e);
                    },
                    function (e) {
                      var i = r.matches(e, a),
                        n = t.matchesExclude(e);
                      return !i || n
                        ? NodeFilter.FILTER_REJECT
                        : NodeFilter.FILTER_ACCEPT;
                    },
                    this.opt.done
                  );
              },
            },
            {
              key: "opt",
              set: function (e) {
                this._opt = n(
                  {},
                  {
                    element: "",
                    className: "",
                    exclude: [],
                    iframes: !1,
                    iframesTimeout: 5e3,
                    separateWordSearch: !0,
                    acrossElements: !1,
                    ignoreGroups: 0,
                    each: function () {},
                    noMatch: function () {},
                    filter: function () {
                      return !0;
                    },
                    done: function () {},
                    debug: !1,
                    log: window.console,
                  },
                  e
                );
              },
              get: function () {
                return this._opt;
              },
            },
            {
              key: "iterator",
              get: function () {
                return new r(
                  this.ctx,
                  this.opt.iframes,
                  this.opt.exclude,
                  this.opt.iframesTimeout
                );
              },
            },
          ]),
          a
        );
      })();
    return function (e) {
      var t = this,
        a = new l(e);
      return (
        (this.mark = function (e, i) {
          return a.mark(e, i), t;
        }),
        (this.markRegExp = function (e, i) {
          return a.markRegExp(e, i), t;
        }),
        (this.markRanges = function (e, i) {
          return a.markRanges(e, i), t;
        }),
        (this.unmark = function (e) {
          return a.unmark(e), t;
        }),
        this
      );
    };
  });
var url = "",
  api = "",
  token = document.querySelector("#token").getAttribute("value"),
  isLoggedIn = !1,
  isVIP = !1,
  userId = null,
  userRole = 10,
  userDate = null,
  realtime = !1,
  lockAPI = {},
  blockData = {};
try {
  url = window.location.origin;
} catch (e) {
  try {
    url = window.location.protocol + "//" + window.location.host;
  } catch (e) {
    url = window.location.href.split("/")[0] + "//" + window.location.host;
  }
}
var mangaDomain = "/truyen-tranh";
try {
  mangaDomain = document.querySelector("#manga-url").value;
} catch (e) {}
api = url + "/api/v2";
try {
  if ((userId = document.querySelector("#user-id").value)) {
    isLoggedIn = !0;
    try {
      document.querySelector("#user-vip").value && (isVIP = !0);
    } catch (e) {}
    try {
      userRole = parseInt(document.querySelector("#user-role").value);
    } catch (e) {}
    try {
      userDate = document.querySelector("#user-date").value;
    } catch (e) {}
  }
} catch (e) {}
var _GLOBAL = {
    _URL: url,
    _API: api,
    _TOKEN: token,
    _IS_LOGGED_IN: isLoggedIn,
    _IS_VIP: isVIP,
    _USER_ID: userId,
    _USER_ROLE: userRole,
    _USER_DATE: userDate,
  },
  imad = {
    data: {},
    components: {},
    methods: {},
    pages: {},
    setData: function (e, t) {
      imad.data[e] = t;
    },
    setComponent: function (e, t) {
      imad.components[e] = t;
    },
    setPage: function (e, t) {
      imad.pages[e] = t;
    },
    getElement: function (e) {
      return document.querySelector(e);
    },
    getAllElements: function (e) {
      return document.querySelectorAll(e);
    },
    createElement: function (e, t, a, i, n) {
      var r = document.createElement(t);
      if (((r.className = a), (r.identity = e), i || (i = {}), n))
        for (var o = 0; o < n.length; o++)
          r.setAttribute(n[o].identity, n[o].value);
      if ((i.innerHTML && (r.innerHTML = i.innerHTML), i.childrens))
        for (o = 0; o < i.childrens.length; o++) {
          var l = imad.createElement(
            i.childrens[o].identity,
            i.childrens[o].tag,
            i.childrens[o].className,
            i.childrens[o].options,
            i.childrens[o].properties
          );
          r.appendChild(l), (r[i.childrens[o].identity] = l);
        }
      return r;
    },
    removeElement: function (e) {
      try {
        e.parentNode.removeChild(e);
      } catch (e) {}
    },
    getAttribute: function (e, t) {
      return e.getAttribute(t);
    },
    getAttributes: function (e, t) {
      for (var a = [], i = 0; i < t.length; i++) {
        var n = imad.camelize(t[i]),
          r = e.getAttribute("data-" + t[i]);
        parseInt(r) == r && (r = parseInt(r)), (a[n] = r);
      }
      return a;
    },
    onElementHeightChange: function (e, t) {
      var a,
        i = e.clientHeight;
      !(function n() {
        (a = e.clientHeight),
          i != a && t(a),
          (i = a),
          e.onElementHeightChangeTimer &&
            clearTimeout(e.onElementHeightChangeTimer),
          (e.onElementHeightChangeTimer = setTimeout(n, 200));
      })();
    },
    ajax: function (e, t, a) {
      var i = new XMLHttpRequest();
      return (
        i.open(e, t),
        i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        i.setRequestHeader("Content-Type", "application/json"),
        "GET" != e && i.setRequestHeader("X-CSRF-TOKEN", _GLOBAL._TOKEN),
        (i.withCredentials = !0),
        a ? i.send(JSON.stringify(a)) : i.send(),
        i
      );
    },
    showLoginForm: function () {
      alertify.confirm(
        "Chức năng này chỉ dành cho thành viên đã đăng nhập",
        function () {
          try {
            activeNavbarRight();
          } catch (e) {}
        }
      );
    },
    formatDate: function (e) {
      var t = new Date(e),
        a = "" + (t.getMonth() + 1),
        i = "" + t.getDate(),
        n = t.getFullYear();
      return (
        a.length < 2 && (a = "0" + a),
        i.length < 2 && (i = "0" + i),
        [n, a, i].join("-")
      );
    },
    formatTime: function (e) {
      return (
        e.substr(11, 8) +
        " " +
        e.substr(8, 2) +
        "/" +
        e.substr(5, 2) +
        "/" +
        e.substr(2, 2)
      );
    },
    getTimeAgo: function (e) {
      var t = e.substring(0, 10);
      if (ismobile.apple.device) {
        var a = (e = e.substring(0, 19).replace("T", " ")).split(/[- :]/);
        (e = new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5])),
          (e = new Date(e).getTime());
      } else e = new Date(e).getTime();
      var i = (new Date().getTime() - e) / 1e3;
      return i > 2592e3
        ? (t = t.split("-"))[2] + "-" + t[1] + "-" + t[0]
        : i > 604800
        ? Math.floor(i / 604800) + " tuần trước"
        : i > 86400
        ? Math.floor(i / 86400) + " ngày trước"
        : i > 3600
        ? Math.floor(i / 3600) + " giờ trước"
        : i > 60
        ? Math.floor(i / 60) + " phút trước"
        : Math.floor(i) + " giây trước";
    },
    getPageYOffset: function () {
      try {
        return (
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0
        );
      } catch (e) {
        return 0;
      }
    },
    getScrollPageType: function () {
      try {
        return document.body.scrollTop > 0 ? 1 : 2;
      } catch (e) {}
      return 0;
    },
    scrollTo: function (e, t, a) {
      if (!(a <= 0)) {
        var i = ((t - e.scrollTop) / a) * 10;
        setTimeout(function () {
          (e.scrollTop = e.scrollTop + i),
            e.scrollTop != t && imad.scrollTo(e, t, a - 10);
        }, 10);
      }
    },
    scrollPageTo: function (e, t) {
      try {
        return void (document.body.scrollTop > 0
          ? imad.scrollTo(document.body, e, t)
          : imad.scrollTo(document.documentElement, e, t));
      } catch (e) {}
      window.scrollTo(0, e);
    },
    paginate: function (e, t, a, i) {
      var n,
        r,
        o = Math.ceil(e / a);
      if ((t < 1 ? (t = 1) : t > o && (t = o), o <= i)) (n = 1), (r = o);
      else {
        var l = Math.floor(i / 2),
          s = Math.ceil(i / 2) - 1;
        t <= l
          ? ((n = 1), (r = i))
          : t + s >= o
          ? ((n = o - i + 1), (r = o))
          : ((n = t - l), (r = t + s));
      }
      return {
        totalItems: e,
        currentPage: t,
        pageSize: a,
        totalPages: o,
        startPage: n,
        endPage: r,
      };
    },
    encodeString: function (e, t) {
      var a = "";
      e.toString();
      for (var i = 0; i < e.length; i++) {
        var n = e.charCodeAt(i) ^ t;
        a += String.fromCharCode(n);
      }
      return a;
    },
    camelize: function (e) {
      return e
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (e, t) {
          return 0 == +e ? "" : 0 === t ? e.toLowerCase() : e.toUpperCase();
        })
        .replace("-", "");
    },
    getRandom: function (e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e;
    },
    formatNumber: function (e) {
      return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    createEmoji: function (e, t, a) {
      var i = imad.createElement(
        e + "-" + t.code.split(":")[1],
        "li",
        "emoji-item",
        {},
        [
          {
            identity: "style",
            value:
              "background-image: url(https://s199.imacdn.com/emoticon/" +
              e +
              "/" +
              t.value +
              "); background-size: 100% 100%;",
          },
        ]
      );
      return (
        (i.onclick = function () {
          a.value += " " + t.code;
        }),
        i
      );
    },
    clickOnEmojiTab: function (e, t, a, i, n, r) {
      e.onclick = function () {
        for (
          var o = n.querySelectorAll(".emoji-list"), l = o.length - 1;
          l >= 0;
          l--
        )
          o[l].classList.add("hidden");
        for (l = t.length - 1; l >= 0; l--) t[l].classList.remove("activated");
        if (
          (e.classList.add("activated"),
          i.classList.remove("hidden"),
          !i.querySelector(".emoji-item"))
        ) {
          for (var s = 0; s < emoji[a].length; s++)
            i.appendChild(imad.createEmoji(a, emoji[a][s], r));
          Ps.initialize(i, { minScrollbarLength: 50, maxScrollbarLength: 50 });
        }
      };
    },
    createEmojiPicker: function (e, t) {
      for (
        var a = e.querySelector(".emoji-toggle"),
          i = e.querySelector(".emoji-picker"),
          n = e.querySelector(".emoji-close"),
          r = e.querySelectorAll(".emoji-picker-type"),
          o = 0;
        o < r.length;
        o++
      ) {
        var l = r[o].getAttribute("data-tab"),
          s = i.querySelector(".emoji-list.emoji-" + l);
        imad.clickOnEmojiTab(r[o], r, l, s, i, t);
      }
      function c(e) {
        i.contains(e.target) ||
          a.contains(e.target) ||
          i.classList.add("hidden");
      }
      (a.onclick = function () {
        if (_GLOBAL._IS_LOGGED_IN) {
          i.classList.toggle("hidden");
          var e = i.querySelector(".emoji-list");
          if (!e.querySelector(".emoji-item")) {
            for (
              var a = e.getAttribute("data-tab"), n = 0;
              n < emoji[a].length;
              n++
            )
              e.appendChild(imad.createEmoji(a, emoji[a][n], t));
            Ps.initialize(e, {
              minScrollbarLength: 50,
              maxScrollbarLength: 50,
            });
          }
        } else imad.showLoginForm();
      }),
        (n.onclick = function () {
          i.classList.add("hidden");
        }),
        window.addEventListener("click", c),
        ismobile.apple.device &&
          window.addEventListener("touchstart", function (e) {
            c(e);
          });
    },
  },
  emoji = {
    panda: [
      { code: ":daynay:", value: "1.gif" },
      { code: ":choe:", value: "2.gif" },
      { code: ":herehere:", value: "3.gif" },
      { code: ":uhuh:", value: "4.gif" },
      { code: ":oea:", value: "5.gif" },
      { code: ":veoma:", value: "6.gif" },
      { code: ":chetdi:", value: "7.gif" },
      { code: ":quaytay:", value: "8.gif" },
      { code: ":longlanh:", value: "9.gif" },
      { code: ":oizoi:", value: "10.gif" },
      { code: ":run:", value: "11.gif" },
      { code: ":nani:", value: "12.gif" },
      { code: ":bbb:", value: "13.gif" },
      { code: ":hitmui:", value: "14.gif" },
      { code: ":quaytaylonglanh:", value: "15.gif" },
      { code: ":hihi:", value: "16.gif" },
      { code: ":gie:", value: "17.gif" },
      { code: ":aaa:", value: "18.gif" },
      { code: ":eyelove:", value: "19.gif" },
      { code: ":bagia:", value: "20.gif" },
      { code: ":huchuc:", value: "21.gif" },
      { code: ":anbanh:", value: "22.gif" },
      { code: ":tucgian:", value: "23.gif" },
      { code: ":tromat:", value: "24.gif" },
      { code: ":wtf:", value: "25.gif" },
      { code: ":liecliec:", value: "26.gif" },
      { code: ":hi:", value: "27.gif" },
      { code: ":chew:", value: "28.gif" },
      { code: ":keke:", value: "29.gif" },
      { code: ":quat:", value: "30.gif" },
      { code: ":huhu:", value: "31.gif" },
      { code: ":clgt:", value: "32.gif" },
      { code: ":what:", value: "33.gif" },
      { code: ":xuyxuy:", value: "34.gif" },
      { code: ":jjj:", value: "35.gif" },
      { code: ":hoho:", value: "36.gif" },
      { code: ":...:", value: "37.gif" },
      { code: ":laclac:", value: "38.gif" },
      { code: ":hi2:", value: "39.gif" },
      { code: ":ohyeah:", value: "40.gif" },
      { code: ":mmm:", value: "41.gif" },
      { code: ":acac:", value: "42.gif" },
      { code: ":vayvay:", value: "43.gif" },
      { code: ":khocloc:", value: "44.gif" },
      { code: ":ngoaymui:", value: "45.gif" },
      { code: ":hello:", value: "46.gif" },
      { code: ":laclac2:", value: "48.gif" },
      { code: ":ancut:", value: "49.gif" },
      { code: ":rotrot:", value: "50.gif" },
      { code: ":uhuhtay:", value: "51.gif" },
      { code: ":huytsao:", value: "52.gif" },
      { code: ":bagia2:", value: "53.gif" },
      { code: ":xuyt:", value: "54.gif" },
      { code: ":laclac3:", value: "55.gif" },
      { code: ":longlanh2:", value: "56.gif" },
      { code: ":clgt2:", value: "57.gif" },
      { code: ":choivoi:", value: "58.gif" },
      { code: ":uhuh2:", value: "59.gif" },
      { code: ":khongbiet:", value: "60.gif" },
      { code: ":tinhtien:", value: "61.gif" },
      { code: ":canloi:", value: "62.gif" },
      { code: ":byebye:", value: "63.gif" },
      { code: ":vvv:", value: "64.gif" },
      { code: ":naonao:", value: "65.gif" },
      { code: ":xeng:", value: "66.gif" },
      { code: ":?:", value: "67.gif" },
      { code: ":sieunhan:", value: "68.gif" },
      { code: ":victoria:", value: "69.gif" },
      { code: ":@@:", value: "70.gif" },
      { code: ":linhi:", value: "71.gif" },
      { code: ":im:", value: "72.gif" },
      { code: ":dao:", value: "73.gif" },
      { code: ":angel:", value: "74.gif" },
      { code: ":deu:", value: "75.gif" },
      { code: ":vayco:", value: "76.gif" },
      { code: ":sutmui:", value: "77.gif" },
      { code: ":tunghoa:", value: "78.gif" },
      { code: ":votay:", value: "79.gif" },
      { code: ":oi:", value: "80.gif" },
      { code: ":tako:", value: "81.gif" },
      { code: ":here:", value: "82.gif" },
      { code: ":den:", value: "83.gif" },
      { code: ":nono:", value: "84.gif" },
      { code: ":le:", value: "85.gif" },
      { code: ":uongnuoc:", value: "86.gif" },
      { code: ":vuvu:", value: "87.gif" },
      { code: ":qqq:", value: "88.gif" },
      { code: ":leluoi:", value: "89.gif" },
      { code: ":matsao:", value: "90.gif" },
      { code: ":hehe:", value: "92.gif" },
      { code: ":$:", value: "93.gif" },
      { code: ":buot:", value: "94.gif" },
      { code: ":hamieng:", value: "95.gif" },
    ],
    onion: [
      { code: ":nani1:", value: "9.gif" },
      { code: ":givay:", value: "13.gif" },
      { code: ":xitmau:", value: "16.gif" },
      { code: ":vungmau:", value: "18.gif" },
      { code: ":xoaybong:", value: "19.gif" },
      { code: ":cungchia:", value: "21.gif" },
      { code: ":oe:", value: "22.gif" },
      { code: ":thenthung1:", value: "23.gif" },
      { code: ":samhoi:", value: "24.gif" },
      { code: ":lamon:", value: "25.gif" },
      { code: ":thenthung:", value: "26.gif" },
      { code: ":hehe1:", value: "27.gif" },
      { code: ":thedo:", value: "28.gif" },
      { code: ":lanh:", value: "29.gif" },
      { code: ":dongbang:", value: "30.gif" },
      { code: ":ngugat:", value: "31.gif" },
      { code: ":sapchet:", value: "32.gif" },
      { code: ":good:", value: "33.gif" },
      { code: ":noqua:", value: "34.gif" },
      { code: ":hetcach:", value: "35.gif" },
      { code: ":tungtang:", value: "36.gif" },
      { code: ":khoc:", value: "37.gif" },
      { code: ":chetdi1:", value: "38.gif" },
      { code: ":gomo:", value: "39.gif" },
      { code: ":dingu:", value: "40.gif" },
      { code: ":soqua2:", value: "41.gif" },
      { code: ":nongqua:", value: "42.gif" },
      { code: ":eatme:", value: "43.gif" },
      { code: ":thoimien:", value: "44.gif" },
      { code: ":eatme1:", value: "45.gif" },
      { code: ":laclu:", value: "46.gif" },
      { code: ":thenthung3:", value: "47.gif" },
      { code: ":khongquantam:", value: "48.gif" },
      { code: ":cogang:", value: "49.gif" },
      { code: ":muidai:", value: "50.gif" },
      { code: ":khongchiudau:", value: "51.gif" },
      { code: ":bye:", value: "52.gif" },
      { code: ":bye1:", value: "53.gif" },
      { code: ":covu2:", value: "54.gif" },
      { code: ":hi1:", value: "56.gif" },
      { code: ":die:", value: "57.gif" },
      { code: ":sanara:", value: "58.gif" },
      { code: ":ngaytho:", value: "60.gif" },
      { code: ":hoho1:", value: "61.gif" },
      { code: ":biamo:", value: "62.gif" },
      { code: ":khongchiudau1:", value: "63.gif" },
      { code: ":cryrun:", value: "65.gif" },
      { code: ":cuuvoi:", value: "66.gif" },
      { code: ":angel1:", value: "67.gif" },
      { code: ":mot:", value: "68.gif" },
      { code: ":xd:", value: "70.gif" },
      { code: ":tuky:", value: "71.gif" },
      { code: ":eyelove1:", value: "72.gif" },
      { code: ":tuky1:", value: "73.gif" },
      { code: ":ngoaymui1:", value: "74.gif" },
      { code: ":loden:", value: "75.gif" },
      { code: ":bittai:", value: "76.gif" },
      { code: ":aaaa:", value: "77.gif" },
      { code: ":hetnoi:", value: "78.gif" },
      { code: ":laiday:", value: "79.gif" },
      { code: ":phut:", value: "81.gif" },
      { code: ":coichungdo:", value: "82.gif" },
      { code: ":depzai:", value: "83.gif" },
      { code: ":quyenanh:", value: "84.gif" },
      { code: ":chongday:", value: "85.gif" },
      { code: ":psy:", value: "86.gif" },
      { code: ":uong:", value: "87.gif" },
      { code: ":robot:", value: "88.gif" },
      { code: ":dabong:", value: "89.gif" },
      { code: ":soqua:", value: "90.gif" },
      { code: ":soqua1:", value: "91.gif" },
      { code: ":thatim:", value: "92.gif" },
      { code: ":hethon:", value: "93.gif" },
      { code: ":soc:", value: "94.gif" },
      { code: ":thenthung2:", value: "95.gif" },
      { code: ":haizz:", value: "96.gif" },
      { code: ":caigie:", value: "97.gif" },
      { code: ":cuonchan:", value: "98.gif" },
      { code: ":hutthuoc:", value: "99.gif" },
      { code: ":xiga:", value: "100.gif" },
      { code: ":hammuon:", value: "1.gif" },
      { code: ":ngoayngoay:", value: "2.gif" },
      { code: ":aha:", value: "3.gif" },
      { code: ":angel2:", value: "4.gif" },
      { code: ":thoisao:", value: "5.gif" },
      { code: ":ma:", value: "6.gif" },
      { code: ":chayxe:", value: "10.gif" },
      { code: ":hura:", value: "11.gif" },
      { code: ":luclac:", value: "12.gif" },
      { code: ":dead:", value: "14.gif" },
      { code: ":chimbay:", value: "15.gif" },
      { code: ":hocmau:", value: "17.gif" },
      { code: ":dapmay:", value: "20.gif" },
      { code: ":chetcmnr:", value: "7.gif" },
    ],
  };
(imad.setNoticeItem = function (e, t) {
  t || (t = {});
  var a = "vài giây trước",
    i = "/assets/img/avatar.png",
    n = "javascript:void(0);";
  e.created_at && (a = imad.getTimeAgo(e.created_at)),
    e.thumbnail && (i = e.thumbnail),
    e.link && (n = e.link + '" target="_blank');
  var r = getElement(".notification-fixed"),
    o = document.createElement("div");
  (o.className = "notification-fixed-item"),
    (o.innerHTML =
      '<a href="' +
      n +
      '"><div class="notification-fixed-item-thumbnail"><img src="' +
      i +
      '"></div><div class="notification-fixed-item-body"><div class="notification-fixed-item-title">' +
      e.content +
      '</div><div class="notification-fixed-item-time"><i class="icon icon-time"></i>' +
      a +
      "</div></div>"),
    o.setAttribute("data-id", e.id);
  var l = document.createElement("div");
  (l.className = "notification-fixed-item-close"),
    (l.innerHTML = '<i class="icon-close"></i>'),
    (l.onclick = function () {
      r.removeChild(o);
    }),
    o.appendChild(l),
    r.appendChild(o),
    e.always ||
      setTimeout(function () {
        try {
          r.removeChild(o);
        } catch (e) {}
      }, 1e4);
}),
  (imad.setNavbarItem = function (e, t) {
    var a = document.createElement("div");
    a.className = "menu-sub-item";
    var i = "",
      n = "",
      r = e.thumbnail,
      o = e.name;
    return (
      e.url && ((n = e.url), (i = ' target="_blank"')),
      e.link && ((n = e.link), (i = ' target="_blank"')),
      !n && e.slug && (n = "/" + e.slug),
      n || (n = "/video/" + e.id),
      e.origin_thumbnail
        ? (r = e.origin_thumbnail)
        : e.poster && (r = e.poster),
      e.title && (o = e.title),
      (a.innerHTML =
        '<a href="' +
        n +
        '"' +
        i +
        '><img src="' +
        r +
        '"><div><span>' +
        o +
        "</span></div></a>"),
      a
    );
  }),
  (imad.setFilmItem = function (e, t) {
    t || (t = {});
    var a = document.createElement("div");
    a.className = "tray-item";
    var i = '<div class="tray-film-update">';
    if (e.is_movie || e.upcoming) i += e.time;
    else
      try {
        i += e.largest_episode.name + " / " + e.time;
      } catch (e) {}
    i += "</div>";
    var n = "";
    return (
      e.upcoming && (n = '<div class="tray-item-upcoming">SẮP CHIẾU</div>'),
      (a.innerHTML =
        '<a href="/' +
        e.slug +
        '"><img class="tray-item-thumbnail" src="' +
        e.thumbnail +
        '"><div class="tray-item-description"><div class="tray-item-title">' +
        e.name +
        '</div><div class="tray-item-meta-info"><div class="tray-film-views">' +
        e.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
        " lượt xem</div></div></div>" +
        i +
        '<div class="tray-item-play-button"><i class="icon-play"></i></div>' +
        n +
        "</a>"),
      a
    );
  }),
  (imad.setCartoonItem = function (e, t) {
    t || (t = {});
    var a = document.createElement("div");
    return (
      (a.className = "tray-item"),
      (a.innerHTML =
        '<a href="https://mehoathinh.com/' +
        e.slug +
        '" target="_blank"><img class="tray-item-thumbnail" src="' +
        e.poster +
        '"><div class="tray-item-description"><div class="tray-item-title">' +
        e.name +
        '</div><div class="tray-item-meta-info"><div class="tray-film-views">' +
        e.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
        ' lượt xem</div></div></div><div class="tray-item-play-button"><i class="icon-play"></i></div></a>'),
      a
    );
  }),
  (imad.setVideoItem = function (e) {
    var t = document.createElement("div"),
      a = Math.floor(e.duration / 60),
      i = e.duration - 60 * a;
    return (
      a < 10 && (a = "0" + a),
      i < 10 && (i = "0" + i),
      (t.className = "video-item"),
      (t.innerHTML =
        '<a href="/video/' +
        e.id +
        '"><img class="video-item-thumbnail" src="' +
        e.thumbnail +
        '"><div class="video-item-title">' +
        e.title +
        '</div><div class="video-item-duration">' +
        a +
        ":" +
        i +
        '</div><div class="video-item-play-button"><i class="icon-play"></i></div></a>'),
      t
    );
  }),
  (imad.setNewsItem = function (e) {
    var t = document.createElement("div");
    return (
      (t.className = "news-item"),
      (t.innerHTML =
        '<a href="' +
        e.url +
        '" target="_blank"><img class="news-item-thumbnail" src="' +
        e.thumbnail +
        '"><div class="news-item-meta"><div class="news-item-title">' +
        e.title +
        "</div></div></a>"),
      t
    );
  }),
  (imad.setMangaItem = function (e) {
    var t = document.createElement("div");
    return (
      (t.className = "manga-item"),
      (t.innerHTML =
        '<a href="' +
        mangaDomain +
        "/" +
        e.slug +
        "/" +
        e.chapter_slug +
        '" target="_blank"><img class="manga-item-thumbnail" src="' +
        e.thumbnail +
        '"><div class="manga-item-title">' +
        e.title +
        '</div><div class="manga-item-meta-info"><span class="manga-item-label">Chap ' +
        e.chapter_name +
        "</span></div></a>"),
      t
    );
  }),
  (imad.setMovieItem = function (e) {
    var t = document.createElement("div");
    t.className = "movie-item";
    var a = "";
    return (
      e.upcoming && (a = '<div class="tray-item-upcoming">SẮP CHIẾU</div>'),
      (t.innerHTML =
        '<a href="/' +
        e.slug +
        '"><img class="tray-item-thumbnail" src="' +
        e.poster +
        '"><div class="tray-item-description"><div class="tray-item-title">' +
        e.name +
        '</div><div class="tray-item-meta-info"><div class="tray-film-views">' +
        e.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
        ' lượt xem</div></div></div><div class="tray-film-update">' +
        e.time +
        '</div><div class="tray-item-play-button"><i class="icon-play"></i></div>' +
        a +
        "</a>"),
      t
    );
  }),
  (imad.setRankingItem = function (e, t) {
    t += 1;
    var a = document.createElement("div");
    return (
      (a.className = "ranking-item l90 background-" + 2 * t),
      (a.innerHTML =
        '<a href="/' +
        e.slug +
        '"><div class="ranking-item-thumbnail"><img src="' +
        e.thumbnail +
        '"></div><div class="ranking-item-top">' +
        t +
        '</div></a><div class="ranking-item-meta"><a href="/' +
        e.slug +
        '"><div class="ranking-item-title">' +
        e.name +
        "</div></a></div>"),
      a
    );
  }),
  (imad.data.block = []),
  (imad.getBlockData = function (e) {
    var t = e.getAttribute("data-block"),
      a = e.getAttribute("data-limit");
    if (imad.data.block[t]) imad.setHomeBlock(e, t, imad.data.block[t], a);
    else {
      var i = imad.ajax("GET", "/json/" + t + ".json");
      i.onload = function () {
        var n = JSON.parse(i.responseText);
        200 == i.status &&
          ((imad.data.block[t] = n), imad.setHomeBlock(e, t, n, a));
      };
    }
  }),
  (imad.setHomeBlock = function (e, t, a, i) {
    var n = a.length;
    i > 0 && (n = i);
    for (var r = 0; r < n; r++) {
      if (ismobile.any && r >= 8) return;
      var o = "";
      if ("ranking" == t) {
        if (r >= 6) return;
        o = imad.setRankingItem(a[r], r);
      } else if ("movie" == t || "license" == t) o = imad.setMovieItem(a[r]);
      else if ("film" == t || "picked" == t) o = imad.setFilmItem(a[r]);
      else if ("cartoon" == t) o = imad.setCartoonItem(a[r]);
      else if ("video" == t) o = imad.setVideoItem(a[r]);
      else if ("manga" == t) {
        if (r >= 6) return;
        o = imad.setMangaItem(a[r]);
      } else {
        if ("news" != t) continue;
        o = imad.setNewsItem(a[r]);
      }
      e.querySelector(".tray-content").appendChild(o);
    }
  }),
  (imad.setNavbarBlock = function (e, t, a) {
    if (!ismobile.any) {
      a.length = 8;
      for (var i = 0; i < a.length; i++) {
        "manga" == t && (a[i].url = mangaDomain + "/" + a[i].slug);
        var n = imad.setNavbarItem(a[i]);
        e.appendChild(n);
      }
    }
  });
for (
  var imgDefer = document.getElementsByTagName("img"), i = 0;
  i < imgDefer.length;
  i++
)
  imgDefer[i].getAttribute("data-src") &&
    imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
var navbar = { el_: {} };
(navbar.el_.root = imad.getElement("nav")),
  (navbar.el_.left = imad.getElement("#navbar-left")),
  (navbar.el_.right = imad.getElement("#navbar-right")),
  (navbar.el_.toggle = imad.getElement("#navbar-toggle")),
  (navbar.el_.menu = imad.getElement(".navbar-menu")),
  (navbar.el_.search = imad.getElement(".navbar-search")),
  (navbar.el_.avatar = imad.getElement("#user-avatar")),
  (navbar.el_.notification = imad.getElement("#user-notification")),
  (navbar.el_.unreadNotification = imad.getElement("#user-notification span")),
  (navbar.el_.theme = imad.getElement("#user-theme")),
  (navbar.el_.tab = imad.getElement(".navbar-user-tab")),
  (navbar.el_.header = imad.getElement(".navbar-user-header")),
  (navbar.el_.user = imad.getElement(".navbar-header-user")),
  (navbar.el_.loading = imad.getElement("#navbar-right .loading")),
  (navbar.el_.alertify = imad.getElement(".alertify"));
var floating = { el_: {} };
(floating.el_.root = imad.getElement(".floating-action")),
  (floating.el_.toggle = imad.getElement(".action-toggle")),
  (floating.el_.home = imad.getElement(".action-home")),
  (floating.el_.menu = imad.getElement(".action-menu")),
  (floating.el_.user = imad.getElement(".action-user")),
  (floating.el_.top = imad.getElement(".action-top"));
var cssTheme = document.createElement("link");
(cssTheme.id = "dark-theme"),
  (cssTheme.rel = "stylesheet"),
  (cssTheme.type = "text/css"),
  (cssTheme.href = "/css/dark.css?v=" + new Date().getTime()),
  (navbar.el_.avatar.onclick = function () {
    navbar.activeNavbarRight();
    try {
      imad.getElement(".navbar-tab-information").click();
    } catch (e) {}
  });
try {
  navbar.el_.notification.onclick = function () {
    navbar.activeNavbarRight(),
      imad.getElement(".navbar-tab-notification").click(),
      this.classList.remove("has-item"),
      navbar.resetUnreadNotifications();
  };
} catch (e) {}
try {
  navbar.el_.theme.onclick = function () {
    if (lockAPI.theme) alertify.error("Vui lòng không bấm liên tục");
    else {
      lockAPI.theme = !0;
      var e = imad.getElement("#dark-theme"),
        t = (imad.getElement(".set-darkmode"), {});
      if (
        (e
          ? (imad.removeElement(e), (t = { theme: null }))
          : (document.head.appendChild(cssTheme), (t = { theme: "dark" })),
        _GLOBAL._IS_LOGGED_IN)
      ) {
        var a = imad.ajax("PUT", _GLOBAL._API + "/users/self/theme", t);
        (a.onload = function () {
          lockAPI.theme = !1;
        }),
          (a.onerror = function () {
            lockAPI.theme = !1;
          });
      } else lockAPI.theme = !1;
    }
  };
} catch (e) {}
try {
  0 != navbar.el_.unreadNotification.innerText &&
    navbar.el_.notification.classList.add("has-item");
} catch (e) {}
(floating.el_.toggle.onclick = function () {
  floating.el_.root.classList.contains("activated")
    ? (floating.el_.root.classList.remove("activated"),
      (this.innerHTML = '<i class="icon-assistive"></i>'))
    : (floating.el_.root.classList.add("activated"),
      (this.innerHTML = '<i class="icon-close"></i>'));
}),
  (floating.el_.home.onclick = function () {
    window.location.href = _GLOBAL._URL;
  }),
  (floating.el_.menu.onclick = function () {
    navbar.activeNavbarLeft();
  }),
  (floating.el_.user.onclick = function () {
    navbar.activeNavbarRight();
  }),
  (floating.el_.top.onclick = function () {
    imad.scrollPageTo(0, 600);
  }),
  (navbar.clickOnTab = function (e) {
    e.onclick = function () {
      for (
        var t = imad.getAllElements(".navbar-user-body"),
          a = e.getAttribute("data-tab"),
          i = imad.getElement(".tab-" + a),
          n = t.length - 1;
        n >= 0;
        n--
      )
        t[n].classList.add("hidden");
      for (n = navbar.el_.tab.children.length - 1; n >= 0; n--)
        navbar.el_.tab.children[n].classList.remove("activated");
      e.classList.add("activated"),
        i.classList.remove("hidden"),
        ismobile.any || Ps.update(i);
    };
  }),
  (navbar.activeNavbarLeft = function () {
    navbar.el_.left.classList.add("activated"),
      navbar.el_.right.classList.remove("activated"),
      floating.el_.root.classList.remove("activated"),
      (floating.el_.toggle.innerHTML = '<i class="icon-assistive"></i>'),
      (navbar.el_.root.style.zIndex = "8888");
  }),
  (navbar.activeNavbarRight = function () {
    navbar.el_.right.classList.add("activated"),
      navbar.el_.left.classList.remove("activated"),
      floating.el_.root.classList.remove("activated"),
      (floating.el_.toggle.innerHTML = '<i class="icon-assistive"></i>'),
      (navbar.el_.root.style.zIndex = "8888"),
      (navbar.el_.right.activated = !0);
  }),
  (navbar.close = function (e) {
    var t = 0,
      a = e.target;
    "ok" != a.className &&
      (navbar.el_.left.contains(a) ||
        navbar.el_.toggle.contains(a) ||
        floating.el_.menu.contains(a) ||
        (navbar.el_.left.classList.remove("activated"), t++),
      navbar.el_.right.contains(a) ||
        navbar.el_.user.contains(a) ||
        floating.el_.user.contains(a) ||
        (navbar.el_.right.classList.remove("activated"),
        (navbar.el_.right.activated = !1),
        t++),
      t > 1 && (navbar.el_.root.style.zIndex = ""));
  }),
  (navbar.setMenuHeight = function () {
    if (ismobile.any) {
      var e = window.innerHeight - 120;
      (navbar.el_.menu.style.maxHeight = e + "px"),
        (navbar.el_.menu.style.overflow = "auto");
    } else navbar.el_.menu.style = "";
  }),
  (navbar.resetUnreadNotifications = function () {
    if (0 != navbar.el_.unreadNotification.innerText) {
      var e = imad.ajax(
        "DELETE",
        _GLOBAL._API + "/users/self/notifications/unread"
      );
      (e.onload = function () {
        navbar.el_.unreadNotification.innerText = 0;
      }),
        (e.onerror = function () {});
    }
  }),
  (navbar.getBlockData = function (e) {
    var t = e.getAttribute("data-block");
    if (((e.innerHTML = ""), imad.data.block[t]))
      imad.setNavbarBlock(e, t, imad.data.block[t]);
    else {
      var a = imad.ajax("GET", "/json/" + t + ".json");
      a.onload = function () {
        var i = JSON.parse(a.responseText);
        200 == a.status &&
          ((imad.data.block[t] = i), imad.setNavbarBlock(e, t, i));
      };
    }
  }),
  (floating.hide = function () {
    window.innerWidth >= 1024 ||
      (window.innerHeight > window.innerWidth || imad.getPageYOffset() > 100
        ? floating.el_.root.classList.remove("hidden")
        : floating.el_.root.classList.add("hidden"));
  }),
  (navbar.load = function () {
    navbar.setMenuHeight(), floating.hide();
  }),
  (navbar.el_.toggle.onclick = function () {
    navbar.activeNavbarLeft();
  });
for (i = navbar.el_.tab.children.length - 1; i >= 0; i--)
  navbar.clickOnTab(navbar.el_.tab.children[i]);
var logoImg = imad.getElement(".logo img"),
  navbarBrand = imad.getElement(".navbar-brand"),
  navbarLeftBrand = document.createElement("div");
(navbarLeftBrand.className = navbarBrand.className),
  (navbarLeftBrand.innerHTML =
    '<a class="logo" href="/"><img src="' +
    logoImg.src +
    '" alt="VuiGhe.Net"></a>'),
  navbar.el_.left.appendChild(navbarLeftBrand),
  (navbar.el_.left.querySelector(".navbar-close").onclick = function () {
    navbar.el_.left.classList.remove("activated"),
      (navbar.el_.root.style.zIndex = "");
  }),
  (navbar.el_.right.querySelector(".navbar-close").onclick = function () {
    navbar.el_.right.classList.remove("activated"),
      (navbar.el_.right.activated = !1),
      (navbar.el_.root.style.zIndex = "");
  });
try {
  if (!ismobile.any) {
    var navbarBlocks = imad.getAllElements(".menu-sub-list");
    for (i = 0; i < navbarBlocks.length; i++)
      navbar.getBlockData(navbarBlocks[i]);
  }
} catch (e) {}
window.addEventListener("resize", navbar.load),
  window.addEventListener("scroll", floating.hide),
  window.addEventListener("load", navbar.load),
  imad.setComponent("navbar", navbar),
  imad.setComponent("floating", floating);
var search = { el_: {} };
(search.el_.input = imad.getElement(".search-box input")),
  (search.el_.button = imad.getElement(".search-box .icon")),
  (search.el_.result = imad.getElement(".search-result")),
  (search.el_.resultBody = imad.getElement(".result-body")),
  (search.el_.loading = imad.getElement(".search-result .loading")),
  (search.el_.noitem = imad.getElement(".search-result .result-noitem"));
var markInstance = new Mark(search.el_.resultBody);
(search.data = { onKeyTimeout: null, oldQuery: "", pointer: null, slug: null }),
  (search.el_.input.onkeyup = function (e) {
    clearTimeout(search.data.onKeyTimeout),
      (search.data.onKeyTimeout = setTimeout(function () {
        search.searchFilms();
      }, 200));
  }),
  (search.el_.input.onkeydown = function (e) {
    clearTimeout(search.data.onKeyTimeout),
      search.el_.result.classList.add("activated");
    var t = imad.getAllElements(".result-item");
    if (
      ((ismobile.any || window.innerWidth < 1024) &&
        (search.el_.resultBody.style.height = window.innerHeight - 115 + "px"),
      (e.which >= 48 && e.which <= 90) || 8 == e.which || 1 == e.which)
    )
      search.el_.loading.classList.remove("hidden"),
        search.el_.noitem.classList.add("hidden");
    else {
      if (13 == e.which) return void search.gotoResultPage(search.data.slug);
      27 == e.which &&
        (search.el_.result.classList.remove("activated"),
        search.data.pointer &&
          (t[search.data.pointer].classList.remove("activated"),
          (search.data.pointer = null),
          (search.data.slug = null),
          imad.scrollTo(search.el_.resultBody, 0, 100)));
    }
    if (t.length)
      if (40 != e.which) {
        if (38 == e.which) {
          if (
            null != search.data.pointer &&
            search.data.pointer - 1 >= 0 &&
            search.data.pointer - 1 < t.length
          )
            return (
              t[search.data.pointer].classList.remove("activated"),
              search.data.pointer--,
              (search.data.slug = t[search.data.pointer].getAttribute(
                "data-search.data.slug"
              )),
              t[search.data.pointer].classList.add("activated"),
              void imad.scrollTo(
                search.el_.resultBody,
                t[search.data.pointer].offsetTop,
                100
              )
            );
          if (0 == search.data.pointer)
            return (
              (search.data.pointer = null),
              (search.data.slug = t[0].getAttribute("data-search.data.slug")),
              void t[0].classList.remove("activated")
            );
          null == search.data.pointer &&
            ((search.data.pointer = t.length - 1),
            (search.data.slug = null),
            t[search.data.pointer].classList.add("activated"),
            imad.scrollTo(
              search.el_.resultBody,
              t[search.data.pointer].offsetTop,
              100
            ));
        }
      } else {
        if (null == search.data.pointer)
          return (
            (search.data.pointer = 0),
            (search.data.slug = t[0].getAttribute("data-search.data.slug")),
            void t[0].classList.add("activated")
          );
        if (search.data.pointer + 1 >= t.length) {
          try {
            t[search.data.pointer].classList.remove("activated");
          } catch (e) {}
          return (
            (search.data.pointer = null),
            (search.data.slug = null),
            void imad.scrollTo(search.el_.resultBody, 0, 100)
          );
        }
        if (search.data.pointer + 1 < t.length) {
          try {
            t[search.data.pointer].classList.remove("activated");
          } catch (e) {}
          search.data.pointer++,
            (search.data.slug = t[search.data.pointer].getAttribute(
              "data-search.data.slug"
            )),
            t[search.data.pointer].classList.add("activated"),
            imad.scrollTo(
              search.el_.resultBody,
              t[search.data.pointer].offsetTop,
              100
            );
        }
      }
  }),
  (search.el_.input.onclick = function (e) {
    search.el_.result.classList.add("activated"), search.checkResult();
  }),
  (search.el_.input.onfocus = function (e) {
    search.el_.result.classList.add("activated"), search.checkResult();
  }),
  (search.el_.button.onclick = function () {
    search.gotoResultPage(null);
  }),
  (search.performMark = function () {
    var e = search.el_.input.value;
    e = (e = e.trim().replace(/\s{2,}/g, " ")).replace(
      /[&\/\\#,+()$~@$^%.'"*?<>{}]/g,
      " "
    );
    var t = { separateWordSearch: !0 };
    markInstance.unmark({
      done: function () {
        markInstance.mark(e, t);
      },
    });
  }),
  (search.checkResult = function () {
    imad.getAllElements(".result-item").length ||
      (search.el_.loading.classList.add("hidden"),
      search.el_.noitem.classList.remove("hidden"),
      (search.el_.noitem.innerHTML = "Nhập tên anime để tìm kiếm"));
  }),
  (search.hideResult = function (e) {
    navbar.el_.search.contains(e.target) ||
      search.el_.result.classList.remove("activated");
  }),
  (search.searchFilms = function () {
    var e = search.el_.input.value;
    if (
      !(e = (e = e.trim().replace(/\s{2,}/g, " ")).replace(
        /[&\/\\#,+()$~@$^%.'"*?<>{}]/g,
        " "
      )) ||
      e == search.data.oldQuery
    )
      return (
        search.el_.loading.classList.add("hidden"),
        e
          ? void 0
          : ((search.data.oldQuery = null),
            search.removeResult(),
            void search.el_.result.classList.remove("activated"))
      );
    (search.data.oldQuery = e), search.el_.loading.classList.remove("hidden");
    var t = imad.ajax("GET", _GLOBAL._API + "/search?q=" + e + "&limit=12");
    (t.onload = function () {
      if (200 == t.status || 304 == t.status) {
        var e = JSON.parse(t.responseText);
        return (
          console.log(e), search.removeResult(), void search.setResult(e.data)
        );
      }
      search.el_.loading.classList.add("hidden");
    }),
      (t.onerror = function () {
        search.el_.loading.classList.add("hidden");
      });
  }),
  (search.removeResult = function () {
    search.el_.resultBody.innerHTML = "";
  }),
  (search.setResult = function (e) {
    if (!e.length)
      return (
        search.el_.loading.classList.add("hidden"),
        search.el_.noitem.classList.remove("hidden"),
        void (search.el_.noitem.innerHTML = "Không tìm thấy anime phù hợp")
      );
    search.el_.noitem.classList.add("hidden");
    for (var t = 0; t < e.length; t++) {
      var a = document.createElement("div");
      (a.className = "result-item"),
        a.setAttribute("data-id", e[t].id),
        a.setAttribute("data-slug", e[t].slug),
        (a.innerHTML =
          '<a href="/' +
          e[t].slug +
          '"><div class="result-item-thumbnail"><img src="' +
          e[t].thumbnail +
          '"></div><div class="result-item-meta"><div class="result-item-title">' +
          e[t].name +
          '</div><div class="result-item-time">' +
          (e[t].is_movie
            ? ""
            : (e[t].meta.max_episode_name ? e[t].meta.max_episode_name : 0) +
              " / ") +
          e[t].time +
          '</div><div class="result-item-views">' +
          e[t].views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
          " lượt xem</div></div></a>"),
        search.el_.resultBody.appendChild(a);
    }
    scrollTo(search.el_.resultBody, 0, 100),
      search.el_.loading.classList.add("hidden"),
      ismobile.any || Ps.update(search.el_.resultBody),
      search.performMark();
  }),
  (search.setResultHeight = function () {
    window.innerWidth >= 1024
      ? (search.el_.resultBody.style.height = "")
      : (search.el_.resultBody.style.height = window.innerHeight - 115 + "px");
  }),
  (search.gotoResultPage = function (e) {
    if (e) window.location = _GLOBAL._URL + "/" + e;
    else {
      var t = search.el_.input.value;
      (t = (t = t.trim().replace(/\s{2,}/g, " ")).replace(
        /[&\/\\#,+()$~!@$^%.'"*?<>{}]/g,
        ""
      )) && (window.location = _GLOBAL._URL + "/tim-kiem/" + t);
    }
  }),
  (search.load = function () {
    ismobile.any
      ? (search.el_.resultBody.style.overflow = "auto")
      : Ps.initialize(search.el_.resultBody, {
          minScrollbarLength: 50,
          maxScrollbarLength: 50,
        }),
      search.setResultHeight();
  }),
  window.addEventListener("click", search.hideResult),
  window.addEventListener("resize", search.setResultHeight),
  window.addEventListener("load", search.load),
  imad.setComponent("search", search);
var user = { el_: {} };
if (
  ((user.el_.lastLogin = imad.getElement("#user-last-login")),
  (user.el_.loginButton = imad.getElement("#login")),
  (user.el_.logoutButton = imad.getElement("#logout")),
  (user.el_.signupButton = imad.getElement("#signup")),
  (user.el_.loginTab = imad.getElement(".tab-login")),
  (user.el_.signupTab = imad.getElement(".tab-signup")),
  _GLOBAL._IS_LOGGED_IN
    ? ((user.el_.informationTab = imad.getElement(".navbar-tab-information")),
      (user.el_.notificationTab = imad.getElement(".navbar-tab-notification")),
      (user.el_.informationBody = imad.getElement(".tab-information")),
      (user.el_.notificationBody = imad.getElement(".tab-notification")),
      (user.el_.notificationList = imad.getElement(".notification-list")),
      (user.el_.notificationMore = imad.getElement(".notification-more")),
      (user.el_.avatarFile = imad.getElement("#avatar-upload")))
    : ((user.el_.loginUsername = imad.getElement(
        '.tab-login input[name="username"]'
      )),
      (user.el_.loginPassword = imad.getElement(
        '.tab-login input[name="password"]'
      )),
      (user.el_.signupUsername = imad.getElement(
        '.tab-signup input[name="username"]'
      )),
      (user.el_.signupPassword = imad.getElement(
        '.tab-signup input[name="password"]'
      )),
      (user.el_.passwordConfirm = imad.getElement(
        '.tab-signup input[name="password_confirm"]'
      )),
      (user.el_.fullName = imad.getElement(
        '.tab-signup input[name="full_name"]'
      )),
      (user.el_.email = imad.getElement('.tab-signup input[name="email"]')),
      (user.el_.birthDate = imad.getElement('input[name="birthday"]')),
      (user.el_.birthMonth = imad.getElement('input[name="birthmonth"]')),
      (user.el_.birthYear = imad.getElement('input[name="birthyear"]')),
      (user.el_.formGroupBirthday = imad.getElement(
        ".navbar-form-group.birthday"
      ))),
  (user.data = {}),
  (user.data.validated = {
    username: !1,
    password: !1,
    passwordConfirm: !1,
    fullName: !1,
    email: !1,
    birthday: !1,
  }),
  (user.data.cachedValidate = {
    username: null,
    fullName: null,
    email: null,
    birthday: null,
  }),
  (user.data.cachedNotifications = {}),
  (user.validateLoginUsername = function () {
    var e = user.el_.loginUsername.parentNode,
      t = e.querySelector(".tip");
    return user.el_.loginUsername.value.length < 5 ||
      user.el_.loginUsername.value.length > 20
      ? ((t.innerText = "từ 6 - 20 kí tự"), e.classList.add("warning"), !1)
      : ((t.innerText = ""), e.classList.remove("warning"), !0);
  }),
  (user.validateSignupUsername = function () {
    var e = user.el_.signupUsername.parentNode,
      t = e.querySelector(".tip");
    if (
      user.el_.signupUsername.value.length < 6 ||
      user.el_.signupUsername.value.length > 20
    )
      return (
        (user.data.validated.username = !1),
        (t.innerText = "từ 6 - 20 kí tự"),
        void e.classList.add("warning")
      );
    if (
      !user.data.validated.username ||
      user.data.cachedValidate.username != user.el_.signupUsername.value
    ) {
      (user.data.validated.username = !1), (t.innerText = "");
      var a = imad.ajax(
        "GET",
        _GLOBAL._API +
          "/users/validate?username=" +
          user.el_.signupUsername.value
      );
      a.onload = function () {
        if (200 == a.status || 304 == a.status)
          return (
            (user.data.cachedValidate.username = user.el_.signupUsername.value),
            e.classList.remove("warning"),
            void (user.data.validated.username = !0)
          );
        400 == a.status
          ? (t.innerText = "không hợp lệ (bị cấm)")
          : 409 == a.status && (t.innerText = "đã tồn tại trong hệ thống"),
          (user.data.validated.username = !1),
          (user.data.cachedValidate.username = null),
          e.classList.add("warning");
      };
    }
  }),
  (user.validatePassword = function (e) {
    var t = e.querySelector('input[name="password"]'),
      a = t.parentNode,
      i = a.querySelector(".tip");
    return t.value.length < 6 || t.value.length > 30
      ? ((user.data.validated.password = !1),
        (i.innerText = "từ 6 - 30 kí tự"),
        a.classList.add("warning"),
        !1)
      : ((user.data.validated.password = !0),
        (i.innerText = ""),
        a.classList.remove("warning"),
        !0);
  }),
  (user.validatePasswordConfirm = function () {
    var e = user.el_.passwordConfirm.parentNode,
      t = e.querySelector(".tip");
    if (user.el_.signupPassword.value != user.el_.passwordConfirm.value)
      return (
        (user.data.validated.passwordConfirm = !1),
        (t.innerText = "2 mật khẩu không khớp"),
        void e.classList.add("warning")
      );
    (user.data.validated.passwordConfirm = !0),
      (t.innerText = ""),
      e.classList.remove("warning");
  }),
  (user.validateFullName = function () {
    var e = user.el_.fullName.parentNode,
      t = e.querySelector(".tip");
    if (
      user.el_.fullName.value.length < 5 ||
      user.el_.fullName.value.length > 40
    )
      return (
        (user.data.validated.fullName = !1),
        (t.innerText = "từ 8 - 40 kí tự"),
        void e.classList.add("warning")
      );
    if (
      !user.data.validated.fullName ||
      user.data.cachedValidate.fullName != user.el_.fullName.value
    ) {
      (user.data.validated.fullName = !1), (t.innerText = "");
      var a = imad.ajax(
        "GET",
        _GLOBAL._API + "/users/validate?full_name=" + user.el_.fullName.value
      );
      a.onload = function () {
        if (200 == a.status || 304 == a.status)
          return (
            (user.data.cachedValidate.fullName = user.el_.fullName.value),
            e.classList.remove("warning"),
            void (user.data.validated.fullName = !0)
          );
        400 == a.status
          ? (t.innerText = "không hợp lệ (bị cấm)")
          : (t.innerText = "hãy thử lại"),
          (user.data.validated.fullName = !1),
          (user.data.cachedValidate.fullName = null),
          e.classList.add("warning");
      };
    }
  }),
  (user.validateEmail = function () {
    var e = user.el_.email.parentNode,
      t = e.querySelector(".tip");
    if (user.el_.email.value.length < 8)
      return (
        (user.data.validated.email = !1),
        (t.innerText = "email không hợp lệ"),
        void e.classList.add("warning")
      );
    if (
      !user.data.validated.email ||
      user.data.cachedValidate.email != user.el_.email.value
    ) {
      (user.data.validated.email = !1), (t.innerText = "");
      var a = imad.ajax(
        "GET",
        _GLOBAL._API + "/users/validate?email=" + user.el_.email.value
      );
      a.onload = function () {
        if (200 == a.status || 304 == a.status)
          return (
            (user.data.validated.email = !0),
            (user.data.cachedValidate.email = user.el_.email.value),
            void e.classList.remove("warning")
          );
        400 == a.status
          ? (t.innerText = "email không hợp lệ")
          : 409 == a.status && (t.innerText = "email đã tồn tại"),
          (user.data.validated.email = !1),
          (user.data.cachedValidate.email = null),
          e.classList.add("warning");
      };
    }
  }),
  (user.validateBirthDate = function (e) {
    var t = user.el_.formGroupBirthday.querySelector(".tip");
    return user.el_.birthDate.value < 1 || user.el_.birthDate.value > 31
      ? ((user.data.validated.birthDate = !1),
        (t.innerText = "chọn ngày sinh từ 1 - 31"),
        user.el_.formGroupBirthday.classList.add("warning"),
        !1)
      : ((user.data.validated.birthDate = !0),
        (t.innerText = ""),
        user.el_.formGroupBirthday.classList.remove("warning"),
        !e &&
          user.data.validated.birthMonth &&
          user.data.validated.birthYear &&
          user.validateBirthday(!0),
        !0);
  }),
  (user.validateBirthMonth = function (e) {
    var t = user.el_.formGroupBirthday.querySelector(".tip");
    return user.el_.birthMonth.value < 1 || user.el_.birthMonth.value > 12
      ? ((user.data.validated.birthMonth = !1),
        (t.innerText = "chọn tháng sinh từ 1 - 12"),
        user.el_.formGroupBirthday.classList.add("warning"),
        !1)
      : ((user.data.validated.birthMonth = !0),
        (t.innerText = ""),
        user.el_.formGroupBirthday.classList.remove("warning"),
        !e &&
          user.data.validated.birthDate &&
          user.data.validated.birthYear &&
          user.validateBirthday(!0),
        !0);
  }),
  (user.validateBirthYear = function (e) {
    var t = user.el_.formGroupBirthday.querySelector(".tip");
    return user.el_.birthYear.value < 1970 || user.el_.birthYear.value > 2010
      ? ((user.data.validated.birthYear = !1),
        (t.innerText = "chọn năm sinh từ 1970 - 2010"),
        user.el_.formGroupBirthday.classList.add("warning"),
        !1)
      : ((user.data.validated.birthYear = !0),
        (t.innerText = ""),
        user.el_.formGroupBirthday.classList.remove("warning"),
        !e &&
          user.data.validated.birthDate &&
          user.data.validated.birthMonth &&
          user.validateBirthday(!0),
        !0);
  }),
  (user.validateBirthday = function (e) {
    if (
      e ||
      (user.validateBirthDate(!0) &&
        user.validateBirthMonth(!0) &&
        user.validateBirthYear(!0))
    ) {
      var t = user.el_.formGroupBirthday.querySelector(".tip"),
        a =
          parseInt(user.el_.birthDate.value) +
          "-" +
          parseInt(user.el_.birthMonth.value) +
          "-" +
          parseInt(user.el_.birthYear.value),
        i = new Date(
          user.el_.birthYear.value +
            "-" +
            user.el_.birthMonth.value +
            "-" +
            user.el_.birthDate.value
        );
      try {
        if (
          i.getDate() != parseInt(user.el_.birthDate.value) ||
          i.getMonth() + 1 != parseInt(user.el_.birthMonth.value) ||
          i.getFullYear() != parseInt(user.el_.birthYear.value)
        )
          return (
            (user.data.validated.birthday = !1),
            (user.data.cachedValidate.birthday = null),
            (t.innerText = "ngày " + a + " không hợp lệ"),
            void user.el_.formGroupBirthday.classList.add("warning")
          );
        (user.data.validated.birthday = !0),
          (user.data.cachedValidate.birthday = a);
      } catch (e) {
        if (
          user.data.validated.birthday &&
          user.data.cachedValidate.birthday == a
        )
          return;
        (t.innerText = ""), (user.data.validated.birthday = !1);
        var n = imad.ajax(
          "GET",
          _GLOBAL._API + "/users/validate?birthday=" + a
        );
        n.onload = function () {
          if (200 == n.status || 304 == n.status)
            return (
              (user.data.validated.birthday = !0),
              (user.data.cachedValidate.birthday = a),
              void user.el_.formGroupBirthday.classList.remove("warning")
            );
          (user.data.validated.birthday = !1),
            (user.data.cachedValidate.birthday = null),
            (t.innerText = "ngày " + a + " không hợp lệ"),
            user.el_.formGroupBirthday.classList.add("warning");
        };
      }
    }
  }),
  (user.clearSignupForm = function () {
    for (
      var e = imad
          .getElement(".navbar-user-body.tab-signup")
          .querySelectorAll(
            'input[type="text"], input[type="password"], input[type="number"]'
          ),
        t = e.length - 1;
      t >= 0;
      t--
    )
      e[t].value = "";
    (user.data.validated = {}), (user.data.cachedValidate = {});
  }),
  (user.signup = function () {
    var e = imad.getElement("#form-signup-warning");
    if (
      (e.parentNode.classList.add("hidden"),
      (e.innerHTML = ""),
      navbar.el_.loading.classList.remove("hidden"),
      user.el_.signupButton.classList.add("disabled"),
      user.validateSignupUsername(),
      user.validatePassword(user.el_.signupTab),
      user.validatePasswordConfirm(),
      user.validateFullName(),
      user.validateEmail(),
      user.validateBirthday(),
      !(
        user.data.validated.username &&
        user.data.validated.password &&
        user.data.validated.passwordConfirm &&
        user.data.validated.fullName &&
        user.data.validated.email &&
        user.data.validated.birthday
      ))
    )
      return (
        user.el_.signupButton.classList.remove("disabled"),
        void navbar.el_.loading.classList.add("hidden")
      );
    var t = {
        username: user.data.cachedValidate.username,
        password: user.el_.signupPassword.value,
        password_confirmation: user.el_.passwordConfirm.value,
        full_name: user.data.cachedValidate.fullName,
        email: user.data.cachedValidate.email,
        birthday: user.data.cachedValidate.birthday,
        gender: parseInt(imad.getElement('input[name="gender"]:checked').value),
      },
      a = imad.ajax("POST", _GLOBAL._API + "/users", t);
    (a.onload = function () {
      if ((user.el_.signupButton.classList.remove("disabled"), 201 == a.status))
        return (
          imad.getElement(".navbar-tab-login").click(),
          user.clearSignupForm(),
          (user.el_.loginUsername.value = t.username),
          (user.el_.loginPassword.value = t.password),
          void setTimeout(function () {
            user.el_.loginButton.click();
          }, 1e3)
        );
      (e.innerHTML = "<li>Đăng ký thất bại, vui lòng thử lại</li>"),
        e.parentNode.classList.remove("hidden"),
        navbar.el_.loading.classList.add("hidden");
    }),
      (a.onerror = function (t) {
        (e.innerHTML = "<li>Lỗi kết nối, vui lòng thử lại</li>"),
          e.parentNode.classList.remove("hidden"),
          user.el_.signupButton.classList.remove("disabled"),
          navbar.el_.loading.classList.add("hidden");
      });
  }),
  (user.login = function () {
    var e = imad.getElement("#form-login-warning");
    if (
      (e.parentNode.classList.add("hidden"),
      (e.innerHTML = ""),
      navbar.el_.loading.classList.remove("hidden"),
      user.el_.loginButton.classList.add("disabled"),
      !user.validateLoginUsername() ||
        !user.validatePassword(user.el_.loginTab))
    )
      return (
        (e.innerHTML = "<li>Thông tin đăng nhập không chính xác</li>"),
        e.parentNode.classList.remove("hidden"),
        user.el_.loginButton.classList.remove("disabled"),
        void navbar.el_.loading.classList.add("hidden")
      );
    var t = {
        username: imad.getElement('input[name="username"]').value,
        password: imad.getElement('input[name="password"]').value,
        remember: imad.getElement('input[name="remember"]').checked,
      },
      a = imad.ajax("POST", _GLOBAL._API + "/users/login", t);
    (a.onload = function () {
      200 != a.status
        ? (400 == a.status
            ? (e.innerHTML = "<li>Thông tin đăng nhập không chính xác</li>")
            : 403 == a.status &&
              (e.innerHTML = "<li>Hệ thống đang tắt chức năng đăng nhập</li>"),
          e.parentNode.classList.remove("hidden"),
          user.el_.loginButton.classList.remove("disabled"),
          navbar.el_.loading.classList.add("hidden"))
        : window.location.reload();
    }),
      (a.onerror = function (t) {
        (e.innerHTML = "<li>Lỗi kết nối, vui lòng thử lại</li>"),
          e.parentNode.classList.remove("hidden"),
          user.el_.loginButton.classList.remove("disabled"),
          navbar.el_.loading.classList.add("hidden");
      });
  }),
  (user.logout = function () {
    var e = imad.ajax("POST", _GLOBAL._API + "/users/logout");
    navbar.el_.loading.classList.remove("hidden"),
      (e.onload = function () {
        if (200 == e.status) {
          try {
            store.forEach(function (e, t) {
              "episode" == e.substring(0, 7) && store.remove(e);
            }),
              store.remove("notifications");
          } catch (e) {}
          window.location.reload();
        }
      }),
      (e.onerror = function (e) {
        navbar.el_.loading.classList.add("hidden");
      });
  }),
  (user.getNotifications = function (e) {
    var t = imad.getAllElements(".notification-item"),
      a = imad.getElement(".notification-none"),
      i = t.length;
    if (e || ((e = {}), !i)) {
      if (
        (navbar.el_.loading.classList.remove("hidden"),
        user.data.cachedNotifications.submitted)
      ) {
        if (
          new Date().getTime() - user.data.cachedNotifications.submitted <
          3e5
        )
          return (
            a.classList.remove("hidden"),
            (a.innerText = "Không có thông báo"),
            void navbar.el_.loading.classList.add("hidden")
          );
      } else {
        var n = store.get("notifications");
        if (n && new Date().getTime() - n.submitted < 3e5)
          return (
            a.classList.remove("hidden"),
            (a.innerText = "Không có thông báo"),
            void navbar.el_.loading.classList.add("hidden")
          );
      }
      var r = imad.ajax(
        "GET",
        _GLOBAL._API + "/users/self/notifications?offset=" + i
      );
      (r.onload = function () {
        if (200 == r.status) {
          var e = JSON.parse(r.responseText);
          i += e.data.length;
          for (var t = 0; t < e.data.length; t++)
            user.el_.notificationList.appendChild(
              user.setNotificationItem(e.data[t])
            );
          if (!i) {
            a.classList.remove("hidden"),
              (a.innerText = "Không có thông báo"),
              navbar.el_.loading.classList.add("hidden"),
              (user.data.cachedNotifications = e),
              (user.data.cachedNotifications.submitted = new Date().getTime());
            try {
              store.set("notifications", user.data.cachedNotifications);
            } catch (e) {
              console.log(e);
            }
            return;
          }
          a.classList.add("hidden"), (user.data.cachedNotifications = {});
          try {
            store.remove("notifications");
          } catch (e) {}
          i >= e.total
            ? user.el_.notificationMore.classList.add("hidden")
            : user.el_.notificationMore.classList.remove("hidden");
        }
        navbar.el_.loading.classList.add("hidden");
      }),
        (r.onerror = function () {
          navbar.el_.loading.classList.add("hidden");
        });
    }
  }),
  (user.setNotificationItem = function (e) {
    var t = document.createElement("div");
    (t.className = "notification-item"), t.setAttribute("data-id", e.id);
    var a = "vài giây trước",
      i = "/assets/img/avatar.png",
      n = "javascript:void(0);";
    return (
      e.created_at && (a = imad.getTimeAgo(e.created_at)),
      e.thumbnail && (i = e.thumbnail),
      e.link &&
        ((n = e.link + '" target="_blank'),
        -1 == e.link.indexOf("http") && (n = "/" + n)),
      (t.innerHTML =
        '<a href="' +
        n +
        '"><div class="notification-item-thumbnail"><img src="' +
        i +
        '"></div></a><div class="notification-item-body"><a href="' +
        n +
        '"><div class="notification-item-title">' +
        e.content +
        '</div></a><div class="notification-item-time"><i class="icon icon-time"></i>' +
        a +
        "</div></div>"),
      t
    );
  }),
  (user.removeNotificationItem = function (e) {
    try {
      user.el_.notificationList.removeChild(
        imad.getElement('.notification-item[data-id="' + e + '"]')
      );
    } catch (e) {}
  }),
  (user.updateLastLogin = function () {
    if (_GLOBAL._IS_LOGGED_IN)
      imad.ajax("PUT", _GLOBAL._API + "/users/self/last-login");
  }),
  (user.uploadAvatar = function (e) {
    var t = new FormData();
    t.append("avatar", e);
    var a = new XMLHttpRequest();
    a.open("POST", _GLOBAL._API + "/users/self/avatar"),
      a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
      a.setRequestHeader("X-CSRF-TOKEN", _GLOBAL._TOKEN),
      (a.withCredentials = !0),
      a.send(t),
      (a.onload = function () {
        if (200 == a.status) {
          var e = JSON.parse(a.responseText);
          if (e.avatar) {
            try {
              for (
                var t = imad.getAllElements(".self-avatar"), i = 0;
                i < t.length;
                i++
              )
                t[i].src = e.avatar;
            } catch (e) {}
            return (
              alertify.logPosition("top right"),
              void alertify.success("Đổi hình đại diện thành công!")
            );
          }
        }
        400 != a.status
          ? (alertify.logPosition("top right"),
            alertify.error("Upload hình đại diện không thành công!"))
          : alertify.error(
              "Hình đại diện quá nhỏ! Hãy chọn hình kích thước lớn hơn 200x200"
            );
      }),
      (a.onerror = function () {
        alertify.logPosition("top right"),
          alertify.error("Upload hình đại diện không thành công!");
      });
  }),
  (user.setLoginTabHeight = function () {
    var e = window.innerHeight - 120;
    (user.el_.loginTab.style.maxHeight = e + "px"),
      (user.el_.signupTab.style.maxHeight = e + "px"),
      ismobile.any &&
        ((user.el_.loginTab.style.overflow = "auto"),
        (user.el_.signupTab.style.overflow = "auto"));
  }),
  (user.setInformationTabHeight = function () {
    var e = window.innerHeight - 120;
    (user.el_.informationBody.style.maxHeight = e + "px"),
      (user.el_.notificationBody.style.maxHeight = e + "px"),
      ismobile.any &&
        ((user.el_.informationBody.style.overflow = "auto"),
        (user.el_.notificationBody.style.overflow = "auto"));
  }),
  user.el_.lastLogin)
)
  try {
    var today = new Date(),
      thisDate = today.getDate(),
      thisMonth = today.getMonth() + 1;
    thisDate < 10 && (thisDate = "0" + thisDate),
      thisMonth < 10 && (thisMonth = "0" + thisMonth),
      today.getFullYear() + "-" + thisMonth + "-" + thisDate !=
        user.el_.lastLogin.value.substring(0, 10) && user.updateLastLogin();
  } catch (e) {}
_GLOBAL._IS_LOGGED_IN
  ? ((user.el_.logoutButton.onclick = function () {
      user.logout();
    }),
    (user.el_.avatarFile.onchange = function () {
      try {
        user.uploadAvatar(user.el_.avatarFile.files[0]);
      } catch (e) {}
    }),
    user.el_.notificationTab.addEventListener("click", function () {
      user.getNotifications();
    }),
    (user.el_.notificationMore.onclick = function () {
      user.getNotifications({ more: !0 });
    }),
    window.addEventListener("resize", function () {
      user.setInformationTabHeight(),
        ismobile.any ||
          (Ps.update(user.el_.informationBody),
          Ps.update(user.el_.notificationBody));
    }),
    window.addEventListener("load", function () {
      user.setInformationTabHeight(),
        ismobile.any ||
          (Ps.initialize(user.el_.informationBody, {
            minScrollbarLength: 50,
            maxScrollbarLength: 50,
          }),
          Ps.initialize(user.el_.notificationBody, {
            minScrollbarLength: 50,
            maxScrollbarLength: 50,
          }));
    }))
  : ((user.el_.loginButton.onclick = function () {
      user.login();
    }),
    (user.el_.signupButton.onclick = function () {
      user.signup();
    }),
    user.el_.loginUsername.addEventListener("focusout", function () {
      user.validateLoginUsername();
    }),
    user.el_.loginPassword.addEventListener("focusout", function () {
      user.validatePassword(user.el_.loginTab);
    }),
    user.el_.signupUsername.addEventListener("focusout", function () {
      user.validateSignupUsername();
    }),
    user.el_.signupPassword.addEventListener("focusout", function () {
      user.validatePassword(user.el_.signupTab);
    }),
    user.el_.passwordConfirm.addEventListener("focusout", function () {
      user.validatePasswordConfirm();
    }),
    user.el_.fullName.addEventListener("focusout", function () {
      user.validateFullName();
    }),
    user.el_.email.addEventListener("focusout", function () {
      user.validateEmail();
    }),
    user.el_.birthDate.addEventListener("focusout", function () {
      user.validateBirthDate();
    }),
    user.el_.birthMonth.addEventListener("focusout", function () {
      user.validateBirthMonth();
    }),
    user.el_.birthYear.addEventListener("focusout", function () {
      user.validateBirthYear();
    }),
    user.el_.loginUsername.addEventListener("keyup", function (e) {
      try {
        13 == e.which && user.el_.loginButton.click();
      } catch (e) {}
    }),
    user.el_.loginPassword.addEventListener("keyup", function (e) {
      try {
        13 == e.which && user.el_.loginButton.click();
      } catch (e) {}
    }),
    window.addEventListener("resize", function () {
      user.setLoginTabHeight(),
        ismobile.any ||
          (Ps.update(user.el_.loginTab), Ps.update(user.el_.signupTab));
    }),
    window.addEventListener("load", function () {
      user.setLoginTabHeight(),
        ismobile.any ||
          (Ps.initialize(user.el_.loginTab, {
            minScrollbarLength: 50,
            maxScrollbarLength: 50,
          }),
          Ps.initialize(user.el_.signupTab, {
            minScrollbarLength: 50,
            maxScrollbarLength: 50,
          }));
    })),
  imad.setComponent("user", user);
var slider = {};
(slider.el_ = {
  root: imad.getElement(".slider-container"),
  items: imad.getAllElements(".slider-group .slider-item"),
  thumbs: imad.getAllElements(".slider-thumbs li"),
  cover: imad.getElement(".slider-cover"),
  title: imad.getElement(".slider-title"),
  views: imad.getElement(".slider-views"),
  link: imad.getElement(".slider-link"),
  img: imad.getElement(".slider-img"),
  prev: imad.getElement(".slider-prev-button"),
  next: imad.getElement(".slider-next-button"),
}),
  (slider.data = {}),
  (slider.data.items = []),
  (slider.data.position = 0),
  (slider.data.interval = 0),
  (slider.data.auto = 0),
  (slider.data.paused = !1),
  (slider.data.progressInterval = 0),
  (slider.data.progressPercent = 0),
  (slider.setActivatedItem = function (e) {
    try {
      (slider.el_.title.innerText = e.getAttribute("data-title")),
        (slider.el_.views.innerText = e.getAttribute("data-views")),
        (slider.el_.link.href = e.getAttribute("data-url")),
        (slider.el_.img.src = e.getAttribute("data-src-item"));
    } catch (e) {}
    try {
      imad
        .getElement(".slider-thumbs li.activated")
        .classList.remove("activated");
    } catch (e) {}
    slider.el_.thumbs[slider.data.position].classList.add("activated");
  }),
  (slider.autoNextSlideItem = function () {
    (slider.data.paused = !1),
      clearInterval(slider.data.progressInterval),
      (slider.data.progressPercent = 0),
      (slider.data.progressInterval = setInterval(function () {
        (slider.data.progressPercent += 1),
          slider.data.progressPercent > 100 &&
            (slider.data.progressPercent = 0),
          (imad.getElement(".slider-progress").style.width =
            slider.data.progressPercent + "%");
      }, 100)),
      (slider.data.interval = setInterval(function () {
        slider.data.position++,
          slider.data.position >= slider.el_.items.length &&
            (slider.data.position = 0),
          (slider.data.progressPercent = 0),
          slider.setActivatedItem(slider.el_.items[slider.data.position]);
      }, 1e4));
  }),
  (slider.setAutoToSlider = function () {
    slider.data.auto || (slider.autoNextSlideItem(), (slider.data.auto = 1));
  }),
  (slider.reset = function () {
    (slider.data.progressPercent = 0),
      clearInterval(slider.data.interval),
      clearInterval(slider.data.progressInterval),
      clearTimeout(slider.data.timeout),
      slider.setAutoToSlider();
  }),
  (slider.continue = function () {
    slider.data.paused &&
      ((slider.data.progressInterval = setInterval(function () {
        (slider.data.progressPercent += 1),
          slider.data.progressPercent > 100 &&
            (slider.data.progressPercent = 0),
          (imad.getElement(".slider-progress").style.width =
            slider.data.progressPercent + "%");
      }, 100)),
      (slider.data.timeout = setTimeout(function () {
        slider.data.position++,
          slider.data.position >= slider.el_.items.length &&
            (slider.data.position = 0),
          slider.setActivatedItem(slider.el_.items[slider.data.position]),
          slider.autoNextSlideItem();
      }, 1e4 - 100 * slider.data.progressPercent)));
  }),
  (slider.clickOnThumb = function (e) {
    e.onclick = function () {
      var t = e.getAttribute("data-id");
      slider.reset(),
        (slider.data.position = t),
        slider.setActivatedItem(slider.el_.items[slider.data.position]);
    };
  }),
  (slider.setSponsorSlide = function () {
    var e = 0,
      t = imad.getAllElements(".slider-sponsor a"),
      a = imad.getAllElements(".slider-sponsor img"),
      i =
        (imad.getElement(".slider-board"), imad.getElement(".slider-board a")),
      n = imad.getElement(".slider-board img");
    i.setAttribute("target", "_blank"),
      (i.href = t[e].href),
      (n.src = a[e].src),
      setInterval(function () {
        ++e >= a.length && (e = 0), (i.href = t[e].href), (n.src = a[e].src);
      }, 5e3);
  }),
  (slider.el_.prev.onclick = function () {
    slider.reset(),
      (slider.data.position -= 1),
      slider.data.position < 0 &&
        (slider.data.position = slider.el_.items.length - 1),
      slider.setActivatedItem(slider.el_.items[slider.data.position]);
  }),
  (slider.el_.next.onclick = function () {
    slider.reset(),
      (slider.data.position += 1),
      slider.data.position >= slider.el_.items.length &&
        (slider.data.position = 0),
      slider.setActivatedItem(slider.el_.items[slider.data.position]);
  }),
  (slider.el_.cover.onmouseover = function () {
    (slider.data.paused = !0),
      clearInterval(slider.data.interval),
      clearInterval(slider.data.progressInterval),
      clearTimeout(slider.data.timeout);
  }),
  (slider.el_.cover.onmouseout = function (e) {
    var t = e.toElement || e.relatedTarget;
    try {
      if (
        t.parentNode == this ||
        t == this ||
        t == slider.el_.link ||
        "slider-item-img" == t.className
      )
        return;
    } catch (e) {}
    slider.continue();
  }),
  (slider.data.progressInterval = setInterval(function () {
    (slider.data.progressPercent += 1),
      slider.data.progressPercent > 100 && (slider.data.progressPercent = 0),
      (imad.getElement(".slider-progress").style.width =
        slider.data.progressPercent + "%");
  }, 100)),
  setTimeout(function () {
    slider.setAutoToSlider();
  }, 1e4),
  window.addEventListener("load", function () {
    slider.setAutoToSlider();
  }),
  imad.setComponent("slider", slider),
  slider.el_.thumbs[0].classList.add("activated");
for (i = 0; i < slider.el_.thumbs.length; i++)
  slider.clickOnThumb(slider.el_.thumbs[i]);
slider.setSponsorSlide();
var ajaxBlocks = imad.getAllElements('.tray[data-type="ajax"]'),
  loadAjax = imad.getElement("#load-ajax");
if (loadAjax.value)
  for (i = 0; i < ajaxBlocks.length; i++) imad.getBlockData(ajaxBlocks[i]);
window.addEventListener("click", function (e) {
  imad.components.navbar.close(e);
}),
  ismobile.apple.device &&
    window.addEventListener("touchstart", function (e) {
      imad.components.navbar.close(e);
    });
