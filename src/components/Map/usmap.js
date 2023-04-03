/*Copyright 2010-2022 Simplemaps.com
html5usmapv4.212 
Use pursuant to license agreement at https://simplemaps.com/license */

/* shifty - v1.5.3 - http://jeremyckahn.github.io/shifty, embedded within map logic*/

/* Raphaël 2.1.2 (tweaked, always global)- JavaScript Vector Library, Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com), Copyright © 2008-2016 Sencha Labs (http://sencha.com), Licensed under the MIT (http://raphaeljs.com/license.html) license. */
!(function (t) {
  var e, f, p, a, d, g, x, y, m;
  t.eve =
    ((e = "0.4.2"),
    (f = "hasOwnProperty"),
    (p = /[\.\/]/),
    (a = function () {}),
    (d = function (t, e) {
      return t - e;
    }),
    ((m = function (t, e) {
      t = String(t);
      var r,
        i = x,
        n = Array.prototype.slice.call(arguments, 2),
        s = m.listeners(t),
        a = 0,
        o = [],
        l = {},
        h = [],
        u = g;
      g = t;
      for (var c = (x = 0), f = s.length; c < f; c++)
        "zIndex" in s[c] &&
          (o.push(s[c].zIndex), s[c].zIndex < 0 && (l[s[c].zIndex] = s[c]));
      for (o.sort(d); o[a] < 0; )
        if (((r = l[o[a++]]), h.push(r.apply(e, n)), x)) return (x = i), h;
      for (c = 0; c < f; c++)
        if ("zIndex" in (r = s[c]))
          if (r.zIndex == o[a]) {
            if ((h.push(r.apply(e, n)), x)) break;
            do {
              if (((r = l[o[++a]]) && h.push(r.apply(e, n)), x)) break;
            } while (r);
          } else l[r.zIndex] = r;
        else if ((h.push(r.apply(e, n)), x)) break;
      return (x = i), (g = u), h.length ? h : null;
    })._events = y =
      { n: {} }),
    (m.listeners = function (t) {
      for (
        var e,
          r,
          i,
          n,
          s,
          a,
          o = t.split(p),
          l = y,
          h = [l],
          u = [],
          c = 0,
          f = o.length;
        c < f;
        c++
      ) {
        for (a = [], n = 0, s = h.length; n < s; n++)
          for (r = [(l = h[n].n)[o[c]], l["*"]], i = 2; i--; )
            (e = r[i]) && (a.push(e), (u = u.concat(e.f || [])));
        h = a;
      }
      return u;
    }),
    (m.on = function (t, e) {
      if (((t = String(t)), "function" != typeof e)) return function () {};
      for (var r = t.split(p), i = y, n = 0, s = r.length; n < s; n++)
        i =
          ((i = i.n).hasOwnProperty(r[n]) && i[r[n]]) || (i[r[n]] = { n: {} });
      for (i.f = i.f || [], n = 0, s = i.f.length; n < s; n++)
        if (i.f[n] == e) return a;
      return (
        i.f.push(e),
        function (t) {
          +t == +t && (e.zIndex = +t);
        }
      );
    }),
    (m.f = function (t) {
      var e = [].slice.call(arguments, 1);
      return function () {
        m.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)));
      };
    }),
    (m.stop = function () {
      x = 1;
    }),
    (m.nt = function (t) {
      return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(g) : g;
    }),
    (m.nts = function () {
      return g.split(p);
    }),
    (m.off = m.unbind =
      function (t, e) {
        if (t) {
          for (
            var r, i, n, s = t.split(p), a = [y], o = 0, l = s.length;
            o < l;
            o++
          )
            for (u = 0; u < a.length; u += n.length - 2) {
              if (((n = [u, 1]), (r = a[u].n), "*" != s[o]))
                r[s[o]] && n.push(r[s[o]]);
              else for (i in r) r[f](i) && n.push(r[i]);
              a.splice.apply(a, n);
            }
          for (o = 0, l = a.length; o < l; o++)
            for (r = a[o]; r.n; ) {
              if (e) {
                if (r.f) {
                  for (u = 0, c = r.f.length; u < c; u++)
                    if (r.f[u] == e) {
                      r.f.splice(u, 1);
                      break;
                    }
                  r.f.length || delete r.f;
                }
                for (i in r.n)
                  if (r.n[f](i) && r.n[i].f) {
                    for (var h = r.n[i].f, u = 0, c = h.length; u < c; u++)
                      if (h[u] == e) {
                        h.splice(u, 1);
                        break;
                      }
                    h.length || delete r.n[i].f;
                  }
              } else
                for (i in (delete r.f, r.n))
                  r.n[f](i) && r.n[i].f && delete r.n[i].f;
              r = r.n;
            }
        } else m._events = y = { n: {} };
      }),
    (m.once = function (t, e) {
      var r = function () {
        return m.unbind(t, r), e.apply(this, arguments);
      };
      return m.on(t, r);
    }),
    (m.version = e),
    (m.toString = function () {
      return "You are running Eve " + e;
    }),
    m);
})(this),
  (function (t) {
    !(function (t, N) {
      function j(t) {
        if (j.is(t, "function")) return i ? t() : N.on("raphael.DOMload", t);
        if (j.is(t, v))
          return j._engine.create[x](j, t.splice(0, 3 + j.is(t[0], F))).add(t);
        var e = Array.prototype.slice.call(arguments, 0);
        if (j.is(e[e.length - 1], "function")) {
          var r = e.pop();
          return i
            ? r.call(j._engine.create[x](j, e))
            : N.on("raphael.DOMload", function () {
                r.call(j._engine.create[x](j, e));
              });
        }
        return j._engine.create[x](j, arguments);
      }
      (j.version = "2.1.0"), (j.eve = N);
      function s(t, e) {
        return I(t) - I(e);
      }
      function e(t, e, r, i) {
        return (
          null == i && (i = r),
          [
            ["M", t, e],
            ["m", 0, -i],
            ["a", r, i, 0, 1, 1, 0, 2 * i],
            ["a", r, i, 0, 1, 1, 0, -2 * i],
            ["z"],
          ]
        );
      }
      var i,
        E = /[, ]+/,
        a = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
        n = /\{(\d+)\}/g,
        L = "hasOwnProperty",
        d = { doc: document, win: t },
        r = {
          was: Object.prototype[L].call(d.win, "Raphael"),
          is: d.win.Raphael,
        },
        o = function () {
          this.ca = this.customAttributes = {};
        },
        x = "apply",
        M = "concat",
        g =
          "ontouchstart" in d.win ||
          (d.win.DocumentTouch && d.doc instanceof DocumentTouch),
        w = " ",
        P = String,
        z = "split",
        l =
          "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[
            z
          ](w),
        h = {
          mousedown: "touchstart",
          mousemove: "touchmove",
          mouseup: "touchend",
        },
        y = P.prototype.toLowerCase,
        B = Math,
        _ = B.max,
        k = B.min,
        S = B.abs,
        m = B.pow,
        T = B.PI,
        F = "number",
        u = "string",
        v = "array",
        c = Object.prototype.toString,
        f =
          ((j._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i),
          /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        p = { NaN: 1, Infinity: 1, "-Infinity": 1 },
        R = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        C = B.round,
        I = parseFloat,
        b = parseInt,
        A = P.prototype.toUpperCase,
        q = (j._availableAttrs = {
          "arrow-end": "none",
          "arrow-start": "none",
          blur: 0,
          "clip-rect": "0 0 1e9 1e9",
          cursor: "default",
          cx: 0,
          cy: 0,
          fill: "#fff",
          "fill-opacity": 1,
          font: '10px "Arial"',
          "font-family": '"Arial"',
          "font-size": "10",
          "font-style": "normal",
          "font-weight": 400,
          gradient: 0,
          height: 0,
          href: "http://raphaeljs.com/",
          "letter-spacing": 0,
          opacity: 1,
          path: "M0,0",
          r: 0,
          rx: 0,
          ry: 0,
          src: "",
          stroke: "#000",
          "stroke-dasharray": "",
          "stroke-linecap": "butt",
          "stroke-linejoin": "butt",
          "stroke-miterlimit": 0,
          "stroke-opacity": 1,
          "stroke-width": 1,
          target: "_blank",
          "text-anchor": "middle",
          title: "Raphael",
          transform: "",
          width: 0,
          x: 0,
          y: 0,
        }),
        D = (j._availableAnimAttrs = {
          blur: F,
          "clip-rect": "csv",
          cx: F,
          cy: F,
          fill: "colour",
          "fill-opacity": F,
          "font-size": F,
          height: F,
          opacity: F,
          path: "path",
          r: F,
          rx: F,
          ry: F,
          stroke: "colour",
          "stroke-opacity": F,
          "stroke-width": F,
          transform: "transform",
          width: F,
          x: F,
          y: F,
        }),
        V =
          /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        O = { hs: 1, rg: 1 },
        Y = /,?([achlmqrstvxz]),?/gi,
        G =
          /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        W =
          /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        X =
          /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        H =
          ((j._radial_gradient =
            /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
          {}),
        U = function (t) {
          return t;
        },
        $ = (j._rectPath = function (t, e, r, i, n) {
          return n
            ? [
                ["M", t + n, e],
                ["l", r - 2 * n, 0],
                ["a", n, n, 0, 0, 1, n, n],
                ["l", 0, i - 2 * n],
                ["a", n, n, 0, 0, 1, -n, n],
                ["l", 2 * n - r, 0],
                ["a", n, n, 0, 0, 1, -n, -n],
                ["l", 0, 2 * n - i],
                ["a", n, n, 0, 0, 1, n, -n],
                ["z"],
              ]
            : [["M", t, e], ["l", r, 0], ["l", 0, i], ["l", -r, 0], ["z"]];
        }),
        Z = (j._getPath = {
          path: function (t) {
            return t.attr("path");
          },
          circle: function (t) {
            t = t.attrs;
            return e(t.cx, t.cy, t.r);
          },
          ellipse: function (t) {
            t = t.attrs;
            return e(t.cx, t.cy, t.rx, t.ry);
          },
          rect: function (t) {
            t = t.attrs;
            return $(t.x, t.y, t.width, t.height, t.r);
          },
          image: function (t) {
            t = t.attrs;
            return $(t.x, t.y, t.width, t.height);
          },
          text: function (t) {
            t = t._getBBox();
            return $(t.x, t.y, t.width, t.height);
          },
          set: function (t) {
            t = t._getBBox();
            return $(t.x, t.y, t.width, t.height);
          },
        }),
        Q = (j.mapPath = function (t, e) {
          if (!e) return t;
          for (var r, i, n, s, a, o = 0, l = (t = Ct(t)).length; o < l; o++)
            for (n = 1, s = (a = t[o]).length; n < s; n += 2)
              (r = e.x(a[n], a[n + 1])),
                (i = e.y(a[n], a[n + 1])),
                (a[n] = r),
                (a[n + 1] = i);
          return t;
        });
      if (
        ((j._g = d),
        (j.type =
          d.win.SVGAngle ||
          d.doc.implementation.hasFeature(
            "http://www.w3.org/TR/SVG11/feature#BasicStructure",
            "1.1"
          )
            ? "SVG"
            : "VML"),
        "VML" == j.type)
      ) {
        var J,
          K = d.doc.createElement("div");
        if (
          ((K.innerHTML = '<v:shape adj="1"/>'),
          ((J = K.firstChild).style.behavior = "url(#default#VML)"),
          !J || "object" != typeof J.adj)
        )
          return (j.type = "");
        K = null;
      }
      function tt(t) {
        if ("function" == typeof t || Object(t) !== t) return t;
        var e,
          r = new t.constructor();
        for (e in t) t[L](e) && (r[e] = tt(t[e]));
        return r;
      }
      (j.svg = !(j.vml = "VML" == j.type)),
        (j._Paper = o),
        (j.fn = K = o.prototype = j.prototype),
        (j._id = 0),
        (j._oid = 0),
        (j.is = function (t, e) {
          return "finite" == (e = y.call(e))
            ? !p[L](+t)
            : "array" == e
            ? t instanceof Array
            : ("null" == e && null === t) ||
              (e == typeof t && null !== t) ||
              ("object" == e && t === Object(t)) ||
              ("array" == e && Array.isArray && Array.isArray(t)) ||
              c.call(t).slice(8, -1).toLowerCase() == e;
        }),
        (j.angle = function (t, e, r, i, n, s) {
          if (null != n) return j.angle(t, e, n, s) - j.angle(r, i, n, s);
          (r = t - r), (i = e - i);
          return r || i ? (180 + (180 * B.atan2(-i, -r)) / T + 360) % 360 : 0;
        }),
        (j.rad = function (t) {
          return ((t % 360) * T) / 180;
        }),
        (j.deg = function (t) {
          return ((180 * t) / T) % 360;
        }),
        (j.snapTo = function (t, e, r) {
          if (((r = j.is(r, "finite") ? r : 10), j.is(t, v))) {
            for (var i = t.length; i--; ) if (S(t[i] - e) <= r) return t[i];
          } else {
            var n = e % (t = +t);
            if (n < r) return e - n;
            if (t - r < n) return e - n + t;
          }
          return e;
        });
      j.createUUID = (function (t, e) {
        return function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
            .replace(t, e)
            .toUpperCase();
        };
      })(/[xy]/g, function (t) {
        var e = (16 * B.random()) | 0;
        return ("x" == t ? e : (3 & e) | 8).toString(16);
      });
      j.setWindow = function (t) {
        N("raphael.setWindow", j, d.win, t),
          (d.win = t),
          (d.doc = d.win.document),
          j._engine.initWin && j._engine.initWin(d.win);
      };
      function et() {
        return "hsb(" + [this.h, this.s, this.b] + ")";
      }
      function rt() {
        return "hsl(" + [this.h, this.s, this.l] + ")";
      }
      function it() {
        return this.hex;
      }
      function nt(t, e, r) {
        var i;
        return (
          null == e &&
            j.is(t, "object") &&
            "r" in t &&
            "g" in t &&
            "b" in t &&
            ((r = t.b), (e = t.g), (t = t.r)),
          null == e &&
            j.is(t, u) &&
            ((t = (i = j.getRGB(t)).r), (e = i.g), (r = i.b)),
          (1 < t || 1 < e || 1 < r) && ((t /= 255), (e /= 255), (r /= 255)),
          [t, e, r]
        );
      }
      function st(t, e, r, i) {
        return (
          (r = {
            r: (t *= 255),
            g: (e *= 255),
            b: (r *= 255),
            hex: j.rgb(t, e, r),
            toString: it,
          }),
          j.is(i, "finite") && (r.opacity = i),
          r
        );
      }
      var at = function (t) {
        if (j.vml) {
          var r,
            i = /^\s+|\s+$/g;
          try {
            var e = new ActiveXObject("htmlfile");
            e.write("<body>"), e.close(), (r = e.body);
          } catch (t) {
            r = createPopup().document.body;
          }
          var n = r.createTextRange();
          at = ot(function (t) {
            try {
              r.style.color = P(t).replace(i, "");
              var e = n.queryCommandValue("ForeColor");
              return (
                "#" +
                (
                  "000000" +
                  (e =
                    ((255 & e) << 16) |
                    (65280 & e) |
                    ((16711680 & e) >>> 16)).toString(16)
                ).slice(-6)
              );
            } catch (t) {
              return "none";
            }
          });
        } else {
          var s = d.doc.createElement("i");
          (s.title = "Raphaël Colour Picker"),
            (s.style.display = "none"),
            d.doc.body.appendChild(s),
            (at = ot(function (t) {
              return (
                (s.style.color = t),
                d.doc.defaultView
                  .getComputedStyle(s, "")
                  .getPropertyValue("color")
              );
            }));
        }
        return at(t);
      };
      function ot(n, s, a) {
        function o() {
          var t = Array.prototype.slice.call(arguments, 0),
            e = t.join("␀"),
            r = (o.cache = o.cache || {}),
            i = (o.count = o.count || []);
          return (
            r[L](e)
              ? (function (t, e) {
                  for (var r = 0, i = t.length; r < i; r++)
                    if (t[r] === e) return t.push(t.splice(r, 1)[0]);
                })(i, e)
              : (1e3 <= i.length && delete r[i.shift()],
                i.push(e),
                (r[e] = n[x](s, t))),
            a ? a(r[e]) : r[e]
          );
        }
        return o;
      }
      (j.color = function (t) {
        var e;
        return (
          j.is(t, "object") && "h" in t && "s" in t && "b" in t
            ? ((e = j.hsb2rgb(t)),
              (t.r = e.r),
              (t.g = e.g),
              (t.b = e.b),
              (t.hex = e.hex))
            : j.is(t, "object") && "h" in t && "s" in t && "l" in t
            ? ((e = j.hsl2rgb(t)),
              (t.r = e.r),
              (t.g = e.g),
              (t.b = e.b),
              (t.hex = e.hex))
            : (j.is(t, "string") && (t = j.getRGB(t)),
              j.is(t, "object") && "r" in t && "g" in t && "b" in t
                ? ((e = j.rgb2hsl(t)),
                  (t.h = e.h),
                  (t.s = e.s),
                  (t.l = e.l),
                  (e = j.rgb2hsb(t)),
                  (t.v = e.b))
                : ((t = { hex: "none" }).r =
                    t.g =
                    t.b =
                    t.h =
                    t.s =
                    t.v =
                    t.l =
                      -1)),
          (t.toString = it),
          t
        );
      }),
        (j.hsb2rgb = function (t, e, r, i) {
          var n, s, a;
          return (
            this.is(t, "object") &&
              "h" in t &&
              "s" in t &&
              "b" in t &&
              ((r = t.b), (e = t.s), (i = (t = t.h).o)),
            (s =
              (a = r * e) * (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
            (r = e = n = r - a),
            st(
              (r += [a, s, 0, 0, s, a][(t = ~~t)]),
              (e += [s, a, a, s, 0, 0][t]),
              (n += [0, 0, s, a, a, s][t]),
              i
            )
          );
        }),
        (j.hsl2rgb = function (t, e, r, i) {
          var n, s, a;
          return (
            this.is(t, "object") &&
              "h" in t &&
              "s" in t &&
              "l" in t &&
              ((r = t.l), (e = t.s), (t = t.h)),
            (1 < t || 1 < e || 1 < r) && ((t /= 360), (e /= 100), (r /= 100)),
            (s =
              (a = 2 * e * (r < 0.5 ? r : 1 - r)) *
              (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
            (r = e = n = r - a / 2),
            st(
              (r += [a, s, 0, 0, s, a][(t = ~~t)]),
              (e += [s, a, a, s, 0, 0][t]),
              (n += [0, 0, s, a, a, s][t]),
              i
            )
          );
        }),
        (j.rgb2hsb = function (t, e, r) {
          var i, n;
          return (
            (t = (r = nt(t, e, r))[0]),
            (e = r[1]),
            (r = r[2]),
            {
              h:
                ((((0 == (n = (i = _(t, e, r)) - k(t, e, r))
                  ? null
                  : i == t
                  ? (e - r) / n
                  : i == e
                  ? (r - t) / n + 2
                  : (t - e) / n + 4) +
                  360) %
                  6) *
                  60) /
                360,
              s: 0 == n ? 0 : n / i,
              b: i,
              toString: et,
            }
          );
        }),
        (j.rgb2hsl = function (t, e, r) {
          var i, n, s;
          return (
            (t = (r = nt(t, e, r))[0]),
            (e = r[1]),
            (r = r[2]),
            (i = ((n = _(t, e, r)) + (s = k(t, e, r))) / 2),
            {
              h:
                ((((0 == (s = n - s)
                  ? null
                  : n == t
                  ? (e - r) / s
                  : n == e
                  ? (r - t) / s + 2
                  : (t - e) / s + 4) +
                  360) %
                  6) *
                  60) /
                360,
              s: 0 == s ? 0 : i < 0.5 ? s / (2 * i) : s / (2 - 2 * i),
              l: i,
              toString: rt,
            }
          );
        }),
        (j._path2string = function () {
          return this.join(",").replace(Y, "$1");
        });
      j._preload = function (t, e) {
        var r = d.doc.createElement("img");
        (r.style.cssText = "position:absolute;left:-9999em;top:-9999em"),
          (r.onload = function () {
            e.call(this), (this.onload = null), d.doc.body.removeChild(this);
          }),
          (r.onerror = function () {
            d.doc.body.removeChild(this);
          }),
          d.doc.body.appendChild(r),
          (r.src = t);
      };
      function lt() {
        return this.hex;
      }
      function ht(t, e) {
        for (var r = [], i = 0, n = t.length; i < n - 2 * !e; i += 2) {
          var s = [
            { x: +t[i - 2], y: +t[i - 1] },
            { x: +t[i], y: +t[i + 1] },
            { x: +t[i + 2], y: +t[i + 3] },
            { x: +t[i + 4], y: +t[i + 5] },
          ];
          e
            ? i
              ? n - 4 == i
                ? (s[3] = { x: +t[0], y: +t[1] })
                : n - 2 == i &&
                  ((s[2] = { x: +t[0], y: +t[1] }),
                  (s[3] = { x: +t[2], y: +t[3] }))
              : (s[0] = { x: +t[n - 2], y: +t[n - 1] })
            : n - 4 == i
            ? (s[3] = s[2])
            : i || (s[0] = { x: +t[i], y: +t[i + 1] }),
            r.push([
              "C",
              (-s[0].x + 6 * s[1].x + s[2].x) / 6,
              (-s[0].y + 6 * s[1].y + s[2].y) / 6,
              (s[1].x + 6 * s[2].x - s[3].x) / 6,
              (s[1].y + 6 * s[2].y - s[3].y) / 6,
              s[2].x,
              s[2].y,
            ]);
        }
        return r;
      }
      (j.getRGB = ot(function (t) {
        if (!t || (t = P(t)).indexOf("-") + 1)
          return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt };
        if ("none" == t)
          return { r: -1, g: -1, b: -1, hex: "none", toString: lt };
        O[L](t.toLowerCase().substring(0, 2)) ||
          "#" == t.charAt() ||
          (t = at(t));
        var e,
          r,
          i,
          n,
          s,
          a = t.match(f);
        return a
          ? (a[2] &&
              ((i = b(a[2].substring(5), 16)),
              (r = b(a[2].substring(3, 5), 16)),
              (e = b(a[2].substring(1, 3), 16))),
            a[3] &&
              ((i = b((t = a[3].charAt(3)) + t, 16)),
              (r = b((t = a[3].charAt(2)) + t, 16)),
              (e = b((t = a[3].charAt(1)) + t, 16))),
            a[4] &&
              ((s = a[4][z](V)),
              (e = I(s[0])),
              "%" == s[0].slice(-1) && (e *= 2.55),
              (r = I(s[1])),
              "%" == s[1].slice(-1) && (r *= 2.55),
              (i = I(s[2])),
              "%" == s[2].slice(-1) && (i *= 2.55),
              "rgba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
              s[3] && "%" == s[3].slice(-1) && (n /= 100)),
            a[5]
              ? ((s = a[5][z](V)),
                (e = I(s[0])),
                "%" == s[0].slice(-1) && (e *= 2.55),
                (r = I(s[1])),
                "%" == s[1].slice(-1) && (r *= 2.55),
                (i = I(s[2])),
                "%" == s[2].slice(-1) && (i *= 2.55),
                ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                  (e /= 360),
                "hsba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                s[3] && "%" == s[3].slice(-1) && (n /= 100),
                j.hsb2rgb(e, r, i, n))
              : a[6]
              ? ((s = a[6][z](V)),
                (e = I(s[0])),
                "%" == s[0].slice(-1) && (e *= 2.55),
                (r = I(s[1])),
                "%" == s[1].slice(-1) && (r *= 2.55),
                (i = I(s[2])),
                "%" == s[2].slice(-1) && (i *= 2.55),
                ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                  (e /= 360),
                "hsla" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                s[3] && "%" == s[3].slice(-1) && (n /= 100),
                j.hsl2rgb(e, r, i, n))
              : (((a = { r: e, g: r, b: i, toString: lt }).hex =
                  "#" +
                  (16777216 | i | (r << 8) | (e << 16)).toString(16).slice(1)),
                j.is(n, "finite") && (a.opacity = n),
                a))
          : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt };
      }, j)),
        (j.hsb = ot(function (t, e, r) {
          return j.hsb2rgb(t, e, r).hex;
        })),
        (j.hsl = ot(function (t, e, r) {
          return j.hsl2rgb(t, e, r).hex;
        })),
        (j.rgb = ot(function (t, e, r) {
          return (
            "#" + (16777216 | r | (e << 8) | (t << 16)).toString(16).slice(1)
          );
        })),
        (j.getColor = function (t) {
          var e = (this.getColor.start = this.getColor.start || {
              h: 0,
              s: 1,
              b: t || 0.75,
            }),
            t = this.hsb2rgb(e.h, e.s, e.b);
          return (
            (e.h += 0.075),
            1 < e.h &&
              ((e.h = 0),
              (e.s -= 0.2),
              e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })),
            t.hex
          );
        }),
        (j.getColor.reset = function () {
          delete this.start;
        }),
        (j.parsePathString = function (t) {
          if (!t) return null;
          var e = ut(t);
          if (e.arr) return bt(e.arr);
          var s = {
              a: 7,
              c: 6,
              h: 1,
              l: 2,
              m: 2,
              r: 4,
              q: 4,
              s: 4,
              t: 2,
              v: 1,
              z: 0,
            },
            a = [];
          return (
            j.is(t, v) && j.is(t[0], v) && (a = bt(t)),
            a.length ||
              P(t).replace(G, function (t, e, r) {
                var i = [],
                  n = e.toLowerCase();
                if (
                  (r.replace(X, function (t, e) {
                    e && i.push(+e);
                  }),
                  "m" == n &&
                    2 < i.length &&
                    (a.push([e][M](i.splice(0, 2))),
                    (n = "l"),
                    (e = "m" == e ? "l" : "L")),
                  "r" == n)
                )
                  a.push([e][M](i));
                else
                  for (
                    ;
                    i.length >= s[n] &&
                    (a.push([e][M](i.splice(0, s[n]))), s[n]);

                  );
              }),
            (a.toString = j._path2string),
            (e.arr = bt(a)),
            a
          );
        }),
        (j.parseTransformString = ot(function (t) {
          if (!t) return null;
          var n = [];
          return (
            j.is(t, v) && j.is(t[0], v) && (n = bt(t)),
            n.length ||
              P(t).replace(W, function (t, e, r) {
                var i = [];
                y.call(e);
                r.replace(X, function (t, e) {
                  e && i.push(+e);
                }),
                  n.push([e][M](i));
              }),
            (n.toString = j._path2string),
            n
          );
        }));
      var ut = function (e) {
        var r = (ut.ps = ut.ps || {});
        return (
          r[e] ? (r[e].sleep = 100) : (r[e] = { sleep: 100 }),
          setTimeout(function () {
            for (var t in r)
              r[L](t) && t != e && (r[t].sleep--, r[t].sleep || delete r[t]);
          }),
          r[e]
        );
      };
      function ct(t, e, r, i, n) {
        return (
          t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) -
          3 * e +
          3 * r
        );
      }
      function ft(t, e, r, i, n, s, a, o, l) {
        null == l && (l = 1);
        for (
          var h = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2,
            u = [
              -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
              0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
            ],
            c = [
              0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
              0.1069, 0.1069, 0.0472, 0.0472,
            ],
            f = 0,
            p = 0;
          p < 12;
          p++
        ) {
          var d = h * u[p] + h,
            g = ct(d, t, r, n, a),
            d = ct(d, e, i, s, o),
            d = g * g + d * d;
          f += c[p] * B.sqrt(d);
        }
        return h * f;
      }
      function pt(t, e, r) {
        var i = j.bezierBBox(t),
          n = j.bezierBBox(e);
        if (!j.isBBoxIntersect(i, n)) return r ? 0 : [];
        for (
          var i = ft.apply(0, t),
            n = ft.apply(0, e),
            s = _(~~(i / 5), 1),
            a = _(~~(n / 5), 1),
            o = [],
            l = [],
            h = {},
            u = r ? 0 : [],
            c = 0;
          c < s + 1;
          c++
        ) {
          var f = j.findDotsAtSegment.apply(j, t.concat(c / s));
          o.push({ x: f.x, y: f.y, t: c / s });
        }
        for (c = 0; c < a + 1; c++)
          (f = j.findDotsAtSegment.apply(j, e.concat(c / a))),
            l.push({ x: f.x, y: f.y, t: c / a });
        for (c = 0; c < s; c++)
          for (var p = 0; p < a; p++) {
            var d = o[c],
              g = o[c + 1],
              x = l[p],
              y = l[p + 1],
              m = S(g.x - d.x) < 0.001 ? "y" : "x",
              v = S(y.x - x.x) < 0.001 ? "y" : "x",
              b = (function (t, e, r, i, n, s, a, o) {
                if (
                  !(
                    _(t, r) < k(n, a) ||
                    k(t, r) > _(n, a) ||
                    _(e, i) < k(s, o) ||
                    k(e, i) > _(s, o)
                  )
                ) {
                  var l = (t * i - e * r) * (n - a) - (t - r) * (n * o - s * a),
                    h = (t * i - e * r) * (s - o) - (e - i) * (n * o - s * a),
                    u = (t - r) * (s - o) - (e - i) * (n - a);
                  if (u) {
                    var c = l / u,
                      l = h / u,
                      h = +c.toFixed(2),
                      u = +l.toFixed(2);
                    if (
                      !(
                        h < +k(t, r).toFixed(2) ||
                        h > +_(t, r).toFixed(2) ||
                        h < +k(n, a).toFixed(2) ||
                        h > +_(n, a).toFixed(2) ||
                        u < +k(e, i).toFixed(2) ||
                        u > +_(e, i).toFixed(2) ||
                        u < +k(s, o).toFixed(2) ||
                        u > +_(s, o).toFixed(2)
                      )
                    )
                      return { x: c, y: l };
                  }
                }
              })(d.x, d.y, g.x, g.y, x.x, x.y, y.x, y.y);
            b &&
              h[b.x.toFixed(4)] != b.y.toFixed(4) &&
              ((h[b.x.toFixed(4)] = b.y.toFixed(4)),
              (d = d.t + S((b[m] - d[m]) / (g[m] - d[m])) * (g.t - d.t)),
              (x = x.t + S((b[v] - x[v]) / (y[v] - x[v])) * (y.t - x.t)),
              0 <= d &&
                d <= 1.001 &&
                0 <= x &&
                x <= 1.001 &&
                (r
                  ? u++
                  : u.push({ x: b.x, y: b.y, t1: k(d, 1), t2: k(x, 1) })));
          }
        return u;
      }
      function dt(t, e, r) {
        (t = j._path2curve(t)), (e = j._path2curve(e));
        for (
          var i, n, s, a, o, l, h, u, c, f, p = r ? 0 : [], d = 0, g = t.length;
          d < g;
          d++
        ) {
          var x = t[d];
          if ("M" == x[0]) (i = o = x[1]), (n = l = x[2]);
          else {
            n =
              "C" == x[0]
                ? ((i = (c = [i, n].concat(x.slice(1)))[6]), c[7])
                : ((c = [i, n, i, n, o, l, o, l]), (i = o), l);
            for (var y = 0, m = e.length; y < m; y++) {
              var v = e[y];
              if ("M" == v[0]) (s = h = v[1]), (a = u = v[2]);
              else {
                a =
                  "C" == v[0]
                    ? ((s = (f = [s, a].concat(v.slice(1)))[6]), f[7])
                    : ((f = [s, a, s, a, h, u, h, u]), (s = h), u);
                var b = pt(c, f, r);
                if (r) p += b;
                else {
                  for (var _ = 0, w = b.length; _ < w; _++)
                    (b[_].segment1 = d),
                      (b[_].segment2 = y),
                      (b[_].bez1 = c),
                      (b[_].bez2 = f);
                  p = p.concat(b);
                }
              }
            }
          }
        }
        return p;
      }
      (j.findDotsAtSegment = function (t, e, r, i, n, s, a, o, l) {
        var h = 1 - l,
          u = m(h, 3),
          c = m(h, 2),
          f = l * l,
          p = f * l,
          d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * a,
          g = u * e + 3 * c * l * i + 3 * h * l * l * s + p * o,
          u = t + 2 * l * (r - t) + f * (n - 2 * r + t),
          c = e + 2 * l * (i - e) + f * (s - 2 * i + e),
          p = r + 2 * l * (n - r) + f * (a - 2 * n + r),
          f = i + 2 * l * (s - i) + f * (o - 2 * s + i),
          r = h * t + l * r,
          i = h * e + l * i,
          a = h * n + l * a,
          l = h * s + l * o,
          o = 90 - (180 * B.atan2(u - p, c - f)) / T;
        return (
          (p < u || c < f) && (o += 180),
          {
            x: d,
            y: g,
            m: { x: u, y: c },
            n: { x: p, y: f },
            start: { x: r, y: i },
            end: { x: a, y: l },
            alpha: o,
          }
        );
      }),
        (j.bezierBBox = function (t, e, r, i, n, s, a, o) {
          j.is(t, "array") || (t = [t, e, r, i, n, s, a, o]);
          t = kt.apply(null, t);
          return {
            x: t.min.x,
            y: t.min.y,
            x2: t.max.x,
            y2: t.max.y,
            width: t.max.x - t.min.x,
            height: t.max.y - t.min.y,
          };
        }),
        (j.isPointInsideBBox = function (t, e, r) {
          return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
        }),
        (j.isBBoxIntersect = function (t, e) {
          var r = j.isPointInsideBBox;
          return (
            r(e, t.x, t.y) ||
            r(e, t.x2, t.y) ||
            r(e, t.x, t.y2) ||
            r(e, t.x2, t.y2) ||
            r(t, e.x, e.y) ||
            r(t, e.x2, e.y) ||
            r(t, e.x, e.y2) ||
            r(t, e.x2, e.y2) ||
            (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
              ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
          );
        }),
        (j.pathIntersection = function (t, e) {
          return dt(t, e);
        }),
        (j.pathIntersectionNumber = function (t, e) {
          return dt(t, e, 1);
        }),
        (j.isPointInsidePath = function (t, e, r) {
          var i = j.pathBBox(t);
          return (
            j.isPointInsideBBox(i, e, r) &&
            dt(
              t,
              [
                ["M", e, r],
                ["H", i.x2 + 10],
              ],
              1
            ) %
              2 ==
              1
          );
        }),
        (j._removedFactory = function (t) {
          return function () {
            N(
              "raphael.log",
              null,
              "Raphaël: you are calling to method “" +
                t +
                "” of removed object",
              t
            );
          };
        });
      function gt(t, e, r, i) {
        return [t, e, r, i, r, i];
      }
      function xt(t, e, r, i, n, s) {
        return [
          (1 / 3) * t + (2 / 3) * r,
          (1 / 3) * e + (2 / 3) * i,
          (1 / 3) * n + (2 / 3) * r,
          (1 / 3) * s + (2 / 3) * i,
          n,
          s,
        ];
      }
      function yt(t, e, r, i, n, s, a, o, l) {
        var h = 1 - l;
        return {
          x:
            m(h, 3) * t + 3 * m(h, 2) * l * r + 3 * h * l * l * n + m(l, 3) * a,
          y:
            m(h, 3) * e + 3 * m(h, 2) * l * i + 3 * h * l * l * s + m(l, 3) * o,
        };
      }
      function mt(t) {
        var e = t[0];
        switch (e.toLowerCase()) {
          case "t":
            return [e, 0, 0];
          case "m":
            return [e, 1, 0, 0, 1, 0, 0];
          case "r":
            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
          case "s":
            return 5 == t.length
              ? [e, 1, 1, t[3], t[4]]
              : 3 == t.length
              ? [e, 1, 1]
              : [e, 1];
        }
      }
      var vt = (j.pathBBox = function (t) {
          var e = ut(t);
          if (e.bbox) return tt(e.bbox);
          if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
          for (
            var r,
              i,
              n = 0,
              s = 0,
              a = [],
              o = [],
              l = 0,
              h = (t = Ct(t)).length;
            l < h;
            l++
          )
            "M" == (i = t[l])[0]
              ? ((n = i[1]), (s = i[2]), a.push(n), o.push(s))
              : ((r = kt(n, s, i[1], i[2], i[3], i[4], i[5], i[6])),
                (a = a[M](r.min.x, r.max.x)),
                (o = o[M](r.min.y, r.max.y)),
                (n = i[5]),
                (s = i[6]));
          var u = k[x](0, a),
            c = k[x](0, o),
            f = _[x](0, a),
            p = _[x](0, o),
            d = f - u,
            g = p - c,
            g = {
              x: u,
              y: c,
              x2: f,
              y2: p,
              width: d,
              height: g,
              cx: u + d / 2,
              cy: c + g / 2,
            };
          return (e.bbox = tt(g)), g;
        }),
        bt = function (t) {
          t = tt(t);
          return (t.toString = j._path2string), t;
        },
        o = (j._pathToRelative = function (t) {
          var e = ut(t);
          if (e.rel) return bt(e.rel);
          (j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t));
          var r = [],
            i = 0,
            n = 0,
            s = 0,
            a = 0,
            o = 0;
          "M" == t[0][0] &&
            ((s = i = t[0][1]), (a = n = t[0][2]), o++, r.push(["M", i, n]));
          for (var l = o, h = t.length; l < h; l++) {
            var u = (r[l] = []),
              c = t[l];
            if (c[0] != y.call(c[0]))
              switch (((u[0] = y.call(c[0])), u[0])) {
                case "a":
                  (u[1] = c[1]),
                    (u[2] = c[2]),
                    (u[3] = c[3]),
                    (u[4] = c[4]),
                    (u[5] = c[5]),
                    (u[6] = +(c[6] - i).toFixed(3)),
                    (u[7] = +(c[7] - n).toFixed(3));
                  break;
                case "v":
                  u[1] = +(c[1] - n).toFixed(3);
                  break;
                case "m":
                  (s = c[1]), (a = c[2]);
                default:
                  for (var f = 1, p = c.length; f < p; f++)
                    u[f] = +(c[f] - (f % 2 ? i : n)).toFixed(3);
              }
            else {
              (u = r[l] = []), "m" == c[0] && ((s = c[1] + i), (a = c[2] + n));
              for (var d = 0, g = c.length; d < g; d++) r[l][d] = c[d];
            }
            var x = r[l].length;
            switch (r[l][0]) {
              case "z":
                (i = s), (n = a);
                break;
              case "h":
                i += +r[l][x - 1];
                break;
              case "v":
                n += +r[l][x - 1];
                break;
              default:
                (i += +r[l][x - 2]), (n += +r[l][x - 1]);
            }
          }
          return (r.toString = j._path2string), (e.rel = bt(r)), r;
        }),
        _t = (j._pathToAbsolute = function (t) {
          var e = ut(t);
          if (e.abs) return bt(e.abs);
          if (
            ((j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t)),
            !t || !t.length)
          )
            return [["M", 0, 0]];
          var r = [],
            i = 0,
            n = 0,
            s = 0,
            a = 0,
            o = 0;
          "M" == t[0][0] &&
            ((s = i = +t[0][1]), (a = n = +t[0][2]), o++, (r[0] = ["M", i, n]));
          for (
            var l,
              h,
              u =
                3 == t.length &&
                "M" == t[0][0] &&
                "R" == t[1][0].toUpperCase() &&
                "Z" == t[2][0].toUpperCase(),
              c = o,
              f = t.length;
            c < f;
            c++
          ) {
            if ((r.push((l = [])), (h = t[c])[0] != A.call(h[0])))
              switch (((l[0] = A.call(h[0])), l[0])) {
                case "A":
                  (l[1] = h[1]),
                    (l[2] = h[2]),
                    (l[3] = h[3]),
                    (l[4] = h[4]),
                    (l[5] = h[5]),
                    (l[6] = +(h[6] + i)),
                    (l[7] = +(h[7] + n));
                  break;
                case "V":
                  l[1] = +h[1] + n;
                  break;
                case "H":
                  l[1] = +h[1] + i;
                  break;
                case "R":
                  for (
                    var p = [i, n][M](h.slice(1)), d = 2, g = p.length;
                    d < g;
                    d++
                  )
                    (p[d] = +p[d] + i), (p[++d] = +p[d] + n);
                  r.pop(), (r = r[M](ht(p, u)));
                  break;
                case "M":
                  (s = +h[1] + i), (a = +h[2] + n);
                default:
                  for (d = 1, g = h.length; d < g; d++)
                    l[d] = +h[d] + (d % 2 ? i : n);
              }
            else if ("R" == h[0])
              (p = [i, n][M](h.slice(1))),
                r.pop(),
                (r = r[M](ht(p, u))),
                (l = ["R"][M](h.slice(-2)));
            else for (var x = 0, y = h.length; x < y; x++) l[x] = h[x];
            switch (l[0]) {
              case "Z":
                (i = s), (n = a);
                break;
              case "H":
                i = l[1];
                break;
              case "V":
                n = l[1];
                break;
              case "M":
                (s = l[l.length - 2]), (a = l[l.length - 1]);
              default:
                (i = l[l.length - 2]), (n = l[l.length - 1]);
            }
          }
          return (r.toString = j._path2string), (e.abs = bt(r)), r;
        }),
        wt = function (t, e, r, i, n, s, a, o, l, h) {
          var u = (120 * T) / 180,
            c = (T / 180) * (+n || 0),
            f = [],
            p = ot(function (t, e, r) {
              return {
                x: t * B.cos(r) - e * B.sin(r),
                y: t * B.sin(r) + e * B.cos(r),
              };
            });
          h
            ? ((b = h[0]), (_ = h[1]), (m = h[2]), (v = h[3]))
            : ((t = (g = p(t, e, -c)).x),
              (e = g.y),
              (o = (g = p(o, l, -c)).x),
              (l = g.y),
              B.cos((T / 180) * n),
              B.sin((T / 180) * n),
              1 <
                (y =
                  ((x = (t - o) / 2) * x) / (r * r) +
                  ((d = (e - l) / 2) * d) / (i * i)) &&
                ((r *= y = B.sqrt(y)), (i *= y)),
              (g = r * r),
              (y = i * i),
              (m =
                ((g =
                  (s == a ? -1 : 1) *
                  B.sqrt(
                    S((g * y - g * d * d - y * x * x) / (g * d * d + y * x * x))
                  )) *
                  r *
                  d) /
                  i +
                (t + o) / 2),
              (v = (g * -i * x) / r + (e + l) / 2),
              (b = B.asin(((e - v) / i).toFixed(9))),
              (_ = B.asin(((l - v) / i).toFixed(9))),
              (b = t < m ? T - b : b) < 0 && (b = 2 * T + b),
              (_ = o < m ? T - _ : _) < 0 && (_ = 2 * T + _),
              a && _ < b && (b -= 2 * T),
              !a && b < _ && (_ -= 2 * T));
          var d,
            g,
            x,
            y = _ - b;
          S(y) > u &&
            ((d = _),
            (g = o),
            (x = l),
            (_ = b + u * (a && b < _ ? 1 : -1)),
            (o = m + r * B.cos(_)),
            (l = v + i * B.sin(_)),
            (f = wt(o, l, r, i, n, 0, a, g, x, [_, d, m, v]))),
            (y = _ - b);
          var m = B.cos(b),
            v = B.sin(b),
            b = B.cos(_),
            _ = B.sin(_),
            y = B.tan(y / 4),
            r = (4 / 3) * r * y,
            i = (4 / 3) * i * y,
            y = [t, e],
            m = [t + r * v, e - i * m],
            b = [o + r * _, l - i * b],
            l = [o, l];
          if (((m[0] = 2 * y[0] - m[0]), (m[1] = 2 * y[1] - m[1]), h))
            return [m, b, l][M](f);
          for (
            var w = [], k = 0, C = (f = [m, b, l][M](f).join()[z](",")).length;
            k < C;
            k++
          )
            w[k] = k % 2 ? p(f[k - 1], f[k], c).y : p(f[k], f[k + 1], c).x;
          return w;
        },
        kt = ot(function (t, e, r, i, n, s, a, o) {
          var l,
            h = n - 2 * r + t - (a - 2 * n + r),
            u = 2 * (r - t) - 2 * (n - r),
            c = t - r,
            f = (-u + B.sqrt(u * u - 4 * h * c)) / 2 / h,
            p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h,
            d = [e, o],
            g = [t, a];
          return (
            "1e12" < S(f) && (f = 0.5),
            "1e12" < S(p) && (p = 0.5),
            0 < f &&
              f < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
            0 < p &&
              p < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
            (h = s - 2 * i + e - (o - 2 * s + i)),
            (c = e - i),
            (f =
              (-(u = 2 * (i - e) - 2 * (s - i)) + B.sqrt(u * u - 4 * h * c)) /
              2 /
              h),
            (p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h),
            "1e12" < S(f) && (f = 0.5),
            "1e12" < S(p) && (p = 0.5),
            0 < f &&
              f < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
            0 < p &&
              p < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
            {
              min: { x: k[x](0, g), y: k[x](0, d) },
              max: { x: _[x](0, g), y: _[x](0, d) },
            }
          );
        }),
        Ct = (j._path2curve = ot(
          function (t, e) {
            var r = !e && ut(t);
            if (!e && r.curve) return bt(r.curve);
            function i(t, e, r) {
              var i, n;
              if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
              switch ((t[0] in { T: 1, Q: 1 } || (e.qx = e.qy = null), t[0])) {
                case "M":
                  (e.X = t[1]), (e.Y = t[2]);
                  break;
                case "A":
                  t = ["C"][M](wt[x](0, [e.x, e.y][M](t.slice(1))));
                  break;
                case "S":
                  (n =
                    "C" == r || "S" == r
                      ? ((i = 2 * e.x - e.bx), 2 * e.y - e.by)
                      : ((i = e.x), e.y)),
                    (t = ["C", i, n][M](t.slice(1)));
                  break;
                case "T":
                  "Q" == r || "T" == r
                    ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                    : ((e.qx = e.x), (e.qy = e.y)),
                    (t = ["C"][M](xt(e.x, e.y, e.qx, e.qy, t[1], t[2])));
                  break;
                case "Q":
                  (e.qx = t[1]),
                    (e.qy = t[2]),
                    (t = ["C"][M](xt(e.x, e.y, t[1], t[2], t[3], t[4])));
                  break;
                case "L":
                  t = ["C"][M](gt(e.x, e.y, t[1], t[2]));
                  break;
                case "H":
                  t = ["C"][M](gt(e.x, e.y, t[1], e.y));
                  break;
                case "V":
                  t = ["C"][M](gt(e.x, e.y, e.x, t[1]));
                  break;
                case "Z":
                  t = ["C"][M](gt(e.x, e.y, e.X, e.Y));
              }
              return t;
            }
            function n(t, e) {
              if (7 < t[e].length) {
                t[e].shift();
                for (var r = t[e]; r.length; )
                  t.splice(e++, 0, ["C"][M](r.splice(0, 6)));
                t.splice(e, 1), (c = _(a.length, (o && o.length) || 0));
              }
            }
            function s(t, e, r, i, n) {
              t &&
                e &&
                "M" == t[n][0] &&
                "M" != e[n][0] &&
                (e.splice(n, 0, ["M", i.x, i.y]),
                (r.bx = 0),
                (r.by = 0),
                (r.x = t[n][1]),
                (r.y = t[n][2]),
                (c = _(a.length, (o && o.length) || 0)));
            }
            for (
              var a = _t(t),
                o = e && _t(e),
                l = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                h = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                u = 0,
                c = _(a.length, (o && o.length) || 0);
              u < c;
              u++
            ) {
              (a[u] = i(a[u], l)),
                n(a, u),
                o && (o[u] = i(o[u], h)),
                o && n(o, u),
                s(a, o, l, h, u),
                s(o, a, h, l, u);
              var f = a[u],
                p = o && o[u],
                d = f.length,
                g = o && p.length;
              (l.x = f[d - 2]),
                (l.y = f[d - 1]),
                (l.bx = I(f[d - 4]) || l.x),
                (l.by = I(f[d - 3]) || l.y),
                (h.bx = o && (I(p[g - 4]) || h.x)),
                (h.by = o && (I(p[g - 3]) || h.y)),
                (h.x = o && p[g - 2]),
                (h.y = o && p[g - 1]);
            }
            return o || (r.curve = bt(a)), o ? [a, o] : a;
          },
          null,
          bt
        )),
        Bt =
          ((j._parseDots = ot(function (t) {
            for (var e = [], r = 0, i = t.length; r < i; r++) {
              var n = {},
                s = t[r].match(/^([^:]*):?([\d\.]*)/);
              if (((n.color = j.getRGB(s[1])), n.color.error)) return null;
              (n.color = n.color.hex),
                s[2] && (n.offset = s[2] + "%"),
                e.push(n);
            }
            for (r = 1, i = e.length - 1; r < i; r++)
              if (!e[r].offset) {
                for (
                  var a = I(e[r - 1].offset || 0), o = 0, l = r + 1;
                  l < i;
                  l++
                )
                  if (e[l].offset) {
                    o = e[l].offset;
                    break;
                  }
                o || ((o = 100), (l = i));
                for (var h = ((o = I(o)) - a) / (l - r + 1); r < l; r++)
                  (a += h), (e[r].offset = a + "%");
              }
            return e;
          })),
          (j._tear = function (t, e) {
            t == e.top && (e.top = t.prev),
              t == e.bottom && (e.bottom = t.next),
              t.next && (t.next.prev = t.prev),
              t.prev && (t.prev.next = t.next);
          })),
        St =
          ((j._tofront = function (t, e) {
            e.top !== t &&
              (Bt(t, e),
              (t.next = null),
              (t.prev = e.top),
              (e.top.next = t),
              (e.top = t));
          }),
          (j._toback = function (t, e) {
            e.bottom !== t &&
              (Bt(t, e),
              (t.next = e.bottom),
              (t.prev = null),
              (e.bottom.prev = t),
              (e.bottom = t));
          }),
          (j._insertafter = function (t, e, r) {
            Bt(t, r),
              e == r.top && (r.top = t),
              e.next && (e.next.prev = t),
              (t.next = e.next),
              ((t.prev = e).next = t);
          }),
          (j._insertbefore = function (t, e, r) {
            Bt(t, r),
              e == r.bottom && (r.bottom = t),
              e.prev && (e.prev.next = t),
              (t.prev = e.prev),
              ((e.prev = t).next = e);
          }),
          (j.toMatrix = function (t, e) {
            var r = vt(t),
              t = {
                _: { transform: "" },
                getBBox: function () {
                  return r;
                },
              };
            return Tt(t, e), t.matrix;
          })),
        Tt =
          ((j.transformPath = function (t, e) {
            return Q(t, St(t, e));
          }),
          (j._extractTransform = function (t, e) {
            if (null == e) return t._.transform;
            e = P(e).replace(/\.{3}|\u2026/g, t._.transform || "");
            var r,
              i = j.parseTransformString(e),
              n = 0,
              e = 0,
              s = 1,
              a = 1,
              o = t._,
              l = new Nt();
            if (((o.transform = i || []), i))
              for (var h = 0, u = i.length; h < u; h++) {
                var c,
                  f,
                  p,
                  d,
                  g,
                  x = i[h],
                  y = x.length,
                  m = P(x[0]).toLowerCase(),
                  v = x[0] != m,
                  b = v ? l.invert() : 0;
                "t" == m && 3 == y
                  ? v
                    ? ((c = b.x(0, 0)),
                      (f = b.y(0, 0)),
                      (p = b.x(x[1], x[2])),
                      (d = b.y(x[1], x[2])),
                      l.translate(p - c, d - f))
                    : l.translate(x[1], x[2])
                  : "r" == m
                  ? 2 == y
                    ? ((g = g || t.getBBox(1)),
                      l.rotate(x[1], g.x + g.width / 2, g.y + g.height / 2),
                      (n += x[1]))
                    : 4 == y &&
                      (v
                        ? ((p = b.x(x[2], x[3])),
                          (d = b.y(x[2], x[3])),
                          l.rotate(x[1], p, d))
                        : l.rotate(x[1], x[2], x[3]),
                      (n += x[1]))
                  : "s" == m
                  ? 2 == y || 3 == y
                    ? ((g = g || t.getBBox(1)),
                      l.scale(
                        x[1],
                        x[y - 1],
                        g.x + g.width / 2,
                        g.y + g.height / 2
                      ),
                      (s *= x[1]),
                      (a *= x[y - 1]))
                    : 5 == y &&
                      (v
                        ? ((p = b.x(x[3], x[4])),
                          (d = b.y(x[3], x[4])),
                          l.scale(x[1], x[2], p, d))
                        : l.scale(x[1], x[2], x[3], x[4]),
                      (s *= x[1]),
                      (a *= x[2]))
                  : "m" == m &&
                    7 == y &&
                    l.add(x[1], x[2], x[3], x[4], x[5], x[6]),
                  (o.dirtyT = 1),
                  (t.matrix = l);
              }
            (t.matrix = l),
              (o.sx = s),
              (o.sy = a),
              (o.deg = n),
              (o.dx = r = l.e),
              (o.dy = e = l.f),
              1 == s && 1 == a && !n && o.bbox
                ? ((o.bbox.x += +r), (o.bbox.y += +e))
                : (o.dirtyT = 1);
          })),
        At = (j._equaliseTransform = function (t, e) {
          (e = P(e).replace(/\.{3}|\u2026/g, t)),
            (t = j.parseTransformString(t) || []),
            (e = j.parseTransformString(e) || []);
          for (
            var r, i, n, s, a = _(t.length, e.length), o = [], l = [], h = 0;
            h < a;
            h++
          ) {
            if (
              ((n = t[h] || mt(e[h])),
              (s = e[h] || mt(n)),
              n[0] != s[0] ||
                ("r" == n[0].toLowerCase() && (n[2] != s[2] || n[3] != s[3])) ||
                ("s" == n[0].toLowerCase() && (n[3] != s[3] || n[4] != s[4])))
            )
              return;
            for (
              o[h] = [], l[h] = [], r = 0, i = _(n.length, s.length);
              r < i;
              r++
            )
              r in n && (o[h][r] = n[r]), r in s && (l[h][r] = s[r]);
          }
          return { from: o, to: l };
        });
      function Nt(t, e, r, i, n, s) {
        null != t
          ? ((this.a = +t),
            (this.b = +e),
            (this.c = +r),
            (this.d = +i),
            (this.e = +n),
            (this.f = +s))
          : ((this.a = 1),
            (this.b = 0),
            (this.c = 0),
            (this.d = 1),
            (this.e = 0),
            (this.f = 0));
      }
      (j._getContainer = function (t, e, r, i) {
        var n = null != i || j.is(t, "object") ? t : d.doc.getElementById(t);
        if (null != n)
          return n.tagName
            ? null == e
              ? {
                  container: n,
                  width: n.style.pixelWidth || n.offsetWidth,
                  height: n.style.pixelHeight || n.offsetHeight,
                }
              : { container: n, width: e, height: r }
            : { container: 1, x: t, y: e, width: r, height: i };
      }),
        (j.pathToRelative = o),
        (j._engine = {}),
        (j.path2curve = Ct),
        (j.matrix = function (t, e, r, i, n, s) {
          return new Nt(t, e, r, i, n, s);
        }),
        (function (t) {
          function i(t) {
            return t[0] * t[0] + t[1] * t[1];
          }
          function n(t) {
            var e = B.sqrt(i(t));
            t[0] && (t[0] /= e), t[1] && (t[1] /= e);
          }
          (t.add = function (t, e, r, i, n, s) {
            var a,
              o,
              l,
              h,
              u = [[], [], []],
              c = [
                [this.a, this.c, this.e],
                [this.b, this.d, this.f],
                [0, 0, 1],
              ],
              f = [
                [t, r, n],
                [e, i, s],
                [0, 0, 1],
              ];
            for (
              t &&
                t instanceof Nt &&
                (f = [
                  [t.a, t.c, t.e],
                  [t.b, t.d, t.f],
                  [0, 0, 1],
                ]),
                a = 0;
              a < 3;
              a++
            )
              for (o = 0; o < 3; o++) {
                for (l = h = 0; l < 3; l++) h += c[a][l] * f[l][o];
                u[a][o] = h;
              }
            (this.a = u[0][0]),
              (this.b = u[1][0]),
              (this.c = u[0][1]),
              (this.d = u[1][1]),
              (this.e = u[0][2]),
              (this.f = u[1][2]);
          }),
            (t.invert = function () {
              var t = this,
                e = t.a * t.d - t.b * t.c;
              return new Nt(
                t.d / e,
                -t.b / e,
                -t.c / e,
                t.a / e,
                (t.c * t.f - t.d * t.e) / e,
                (t.b * t.e - t.a * t.f) / e
              );
            }),
            (t.clone = function () {
              return new Nt(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (t.translate = function (t, e) {
              this.add(1, 0, 0, 1, t, e);
            }),
            (t.scale = function (t, e, r, i) {
              null == e && (e = t),
                (r || i) && this.add(1, 0, 0, 1, r, i),
                this.add(t, 0, 0, e, 0, 0),
                (r || i) && this.add(1, 0, 0, 1, -r, -i);
            }),
            (t.rotate = function (t, e, r) {
              (t = j.rad(t)), (e = e || 0), (r = r || 0);
              var i = +B.cos(t).toFixed(9),
                t = +B.sin(t).toFixed(9);
              this.add(i, t, -t, i, e, r), this.add(1, 0, 0, 1, -e, -r);
            }),
            (t.x = function (t, e) {
              return t * this.a + e * this.c + this.e;
            }),
            (t.y = function (t, e) {
              return t * this.b + e * this.d + this.f;
            }),
            (t.get = function (t) {
              return +this[P.fromCharCode(97 + t)].toFixed(4);
            }),
            (t.toString = function () {
              return j.svg
                ? "matrix(" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ].join() +
                    ")"
                : [
                    this.get(0),
                    this.get(2),
                    this.get(1),
                    this.get(3),
                    0,
                    0,
                  ].join();
            }),
            (t.toFilter = function () {
              return (
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                this.get(0) +
                ", M12=" +
                this.get(2) +
                ", M21=" +
                this.get(1) +
                ", M22=" +
                this.get(3) +
                ", Dx=" +
                this.get(4) +
                ", Dy=" +
                this.get(5) +
                ", sizingmethod='auto expand')"
              );
            }),
            (t.offset = function () {
              return [this.e.toFixed(4), this.f.toFixed(4)];
            }),
            (t.split = function () {
              var t = {};
              (t.dx = this.e), (t.dy = this.f);
              var e = [
                [this.a, this.c],
                [this.b, this.d],
              ];
              (t.scalex = B.sqrt(i(e[0]))),
                n(e[0]),
                (t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
                (e[1] = [
                  e[1][0] - e[0][0] * t.shear,
                  e[1][1] - e[0][1] * t.shear,
                ]),
                (t.scaley = B.sqrt(i(e[1]))),
                n(e[1]),
                (t.shear /= t.scaley);
              var r = -e[0][1],
                e = e[1][1];
              return (
                e < 0
                  ? ((t.rotate = j.deg(B.acos(e))),
                    r < 0 && (t.rotate = 360 - t.rotate))
                  : (t.rotate = j.deg(B.asin(r))),
                (t.isSimple = !(
                  +t.shear.toFixed(9) ||
                  (t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
                )),
                (t.isSuperSimple =
                  !+t.shear.toFixed(9) &&
                  t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                  !t.rotate),
                (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                t
              );
            }),
            (t.toTransformString = function (t) {
              t = t || this[z]();
              return t.isSimple
                ? ((t.scalex = +t.scalex.toFixed(4)),
                  (t.scaley = +t.scaley.toFixed(4)),
                  (t.rotate = +t.rotate.toFixed(4)),
                  (t.dx || t.dy ? "t" + [t.dx, t.dy] : "") +
                    (1 != t.scalex || 1 != t.scaley
                      ? "s" + [t.scalex, t.scaley, 0, 0]
                      : "") +
                    (t.rotate ? "r" + [t.rotate, 0, 0] : ""))
                : "m" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ];
            });
        })(Nt.prototype);
      o =
        navigator.userAgent.match(/Version\/(.*?)\s/) ||
        navigator.userAgent.match(/Chrome\/(\d+)/);
      ("Apple Computer, Inc." == navigator.vendor &&
        ((o && o[1] < 4) || "iP" == navigator.platform.slice(0, 2))) ||
      ("Google Inc." == navigator.vendor && o && o[1] < 8)
        ? (K.safari = function () {
            var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr(
              { stroke: "none" }
            );
            setTimeout(function () {
              t.remove();
            });
          })
        : (K.safari = function () {});
      function Et() {
        this.returnValue = !1;
      }
      function Lt() {
        return this.originalEvent.preventDefault();
      }
      function Mt() {
        this.cancelBubble = !0;
      }
      function Pt() {
        return this.originalEvent.stopPropagation();
      }
      function zt(t) {
        var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
          r = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
        return { x: t.clientX + r, y: t.clientY + e };
      }
      function Ft(t) {
        for (
          var e,
            r = t.clientX,
            i = t.clientY,
            n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
            s = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
            a = It.length;
          a--;

        ) {
          if (((e = It[a]), g && t.touches)) {
            for (var o, l = t.touches.length; l--; )
              if ((o = t.touches[l]).identifier == e.el._drag.id) {
                (r = o.clientX),
                  (i = o.clientY),
                  (t.originalEvent || t).preventDefault();
                break;
              }
          } else t.preventDefault();
          var h,
            u = e.el.node,
            c = u.nextSibling,
            f = u.parentNode,
            p = u.style.display;
          d.win.opera && f.removeChild(u),
            (u.style.display = "none"),
            (h = e.el.paper.getElementByPoint(r, i)),
            (u.style.display = p),
            d.win.opera && (c ? f.insertBefore(u, c) : f.appendChild(u)),
            h && N("raphael.drag.over." + e.el.id, e.el, h),
            (r += s),
            (i += n),
            N(
              "raphael.drag.move." + e.el.id,
              e.move_scope || e.el,
              r - e.el._drag.x,
              i - e.el._drag.y,
              r,
              i,
              t
            );
        }
      }
      for (
        var Rt = d.doc.addEventListener
            ? function (s, t, a, o) {
                function e(t) {
                  var e = zt(t);
                  return a.call(o, t, e.x, e.y);
                }
                return (
                  s.addEventListener(t, e, !1),
                  g &&
                    h[t] &&
                    s.addEventListener(
                      h[t],
                      function (t) {
                        for (
                          var e = zt(t),
                            r = t,
                            i = 0,
                            n = t.targetTouches && t.targetTouches.length;
                          i < n;
                          i++
                        )
                          if (t.targetTouches[i].target == s) {
                            ((t = t.targetTouches[i]).originalEvent = r),
                              (t.preventDefault = Lt),
                              (t.stopPropagation = Pt);
                            break;
                          }
                        return a.call(o, t, e.x, e.y);
                      },
                      !1
                    ),
                  function () {
                    return (
                      s.removeEventListener(t, e, !1),
                      g && h[t] && s.removeEventListener(h[t], e, !1),
                      !0
                    );
                  }
                );
              }
            : d.doc.attachEvent
            ? function (t, e, i, n) {
                function r(t) {
                  t = t || d.win.event;
                  var e =
                      d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    r =
                      d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
                    r = t.clientX + r,
                    e = t.clientY + e;
                  return (
                    (t.preventDefault = t.preventDefault || Et),
                    (t.stopPropagation = t.stopPropagation || Mt),
                    i.call(n, t, r, e)
                  );
                }
                t.attachEvent("on" + e, r);
                return function () {
                  return t.detachEvent("on" + e, r), !0;
                };
              }
            : void 0,
          It = [],
          jt = function (t) {
            j.unmousemove(Ft).unmouseup(jt);
            for (var e, r = It.length; r--; )
              ((e = It[r]).el._drag = {}),
                N(
                  "raphael.drag.end." + e.el.id,
                  e.end_scope || e.start_scope || e.move_scope || e.el,
                  t
                );
            It = [];
          },
          qt = (j.el = {}),
          Dt = l.length;
        Dt--;

      )
        !(function (i) {
          (j[i] = qt[i] =
            function (t, e) {
              return (
                j.is(t, "function") &&
                  ((this.events = this.events || []),
                  this.events.push({
                    name: i,
                    f: t,
                    unbind: Rt(
                      this.shape || this.node || d.doc,
                      i,
                      t,
                      e || this
                    ),
                  })),
                this
              );
            }),
            (j["un" + i] = qt["un" + i] =
              function (t) {
                for (var e = this.events || [], r = e.length; r--; )
                  e[r].name != i ||
                    (!j.is(t, "undefined") && e[r].f != t) ||
                    (e[r].unbind(),
                    e.splice(r, 1),
                    e.length || delete this.events);
                return this;
              });
        })(l[Dt]);
      (qt.data = function (t, e) {
        var r = (H[this.id] = H[this.id] || {});
        if (0 == arguments.length) return r;
        if (1 != arguments.length)
          return (r[t] = e), N("raphael.data.set." + this.id, this, e, t), this;
        if (j.is(t, "object")) {
          for (var i in t) t[L](i) && this.data(i, t[i]);
          return this;
        }
        return N("raphael.data.get." + this.id, this, r[t], t), r[t];
      }),
        (qt.removeData = function (t) {
          return (
            null == t ? (H[this.id] = {}) : H[this.id] && delete H[this.id][t],
            this
          );
        }),
        (qt.getData = function () {
          return tt(H[this.id] || {});
        }),
        (qt.hover = function (t, e, r, i) {
          return this.mouseover(t, r).mouseout(e, i || r);
        }),
        (qt.unhover = function (t, e) {
          return this.unmouseover(t).unmouseout(e);
        });
      var Vt = [];
      (qt.drag = function (o, l, h, u, c, f) {
        function t(t) {
          (t.originalEvent || t).preventDefault();
          var e = t.clientX,
            r = t.clientY,
            i = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
            n = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
          if (((this._drag.id = t.identifier), g && t.touches))
            for (var s, a = t.touches.length; a--; )
              if (
                ((s = t.touches[a]),
                (this._drag.id = s.identifier),
                s.identifier == this._drag.id)
              ) {
                (e = s.clientX), (r = s.clientY);
                break;
              }
          (this._drag.x = e + n),
            (this._drag.y = r + i),
            It.length || j.mousemove(Ft).mouseup(jt),
            It.push({ el: this, move_scope: u, start_scope: c, end_scope: f }),
            l && N.on("raphael.drag.start." + this.id, l),
            o && N.on("raphael.drag.move." + this.id, o),
            h && N.on("raphael.drag.end." + this.id, h),
            N(
              "raphael.drag.start." + this.id,
              c || u || this,
              t.clientX + n,
              t.clientY + i,
              t
            );
        }
        return (
          (this._drag = {}),
          Vt.push({ el: this, start: t }),
          this.mousedown(t),
          this
        );
      }),
        (qt.onDragOver = function (t) {
          t
            ? N.on("raphael.drag.over." + this.id, t)
            : N.unbind("raphael.drag.over." + this.id);
        }),
        (qt.undrag = function () {
          for (var t = Vt.length; t--; )
            Vt[t].el == this &&
              (this.unmousedown(Vt[t].start),
              Vt.splice(t, 1),
              N.unbind("raphael.drag.*." + this.id));
          Vt.length || j.unmousemove(Ft).unmouseup(jt), (It = []);
        }),
        (K.circle = function (t, e, r) {
          r = j._engine.circle(this, t || 0, e || 0, r || 0);
          return this.__set__ && this.__set__.push(r), r;
        }),
        (K.rect = function (t, e, r, i, n) {
          n = j._engine.rect(this, t || 0, e || 0, r || 0, i || 0, n || 0);
          return this.__set__ && this.__set__.push(n), n;
        }),
        (K.ellipse = function (t, e, r, i) {
          i = j._engine.ellipse(this, t || 0, e || 0, r || 0, i || 0);
          return this.__set__ && this.__set__.push(i), i;
        }),
        (K.path = function (t) {
          !t || j.is(t, u) || j.is(t[0], v) || (t += "");
          var e = j._engine.path(j.format[x](j, arguments), this);
          return this.__set__ && this.__set__.push(e), e;
        }),
        (K.image = function (t, e, r, i, n) {
          n = j._engine.image(
            this,
            t || "about:blank",
            e || 0,
            r || 0,
            i || 0,
            n || 0
          );
          return this.__set__ && this.__set__.push(n), n;
        }),
        (K.text = function (t, e, r) {
          r = j._engine.text(this, t || 0, e || 0, P(r));
          return this.__set__ && this.__set__.push(r), r;
        }),
        (K.set = function (t) {
          j.is(t, "array") ||
            (t = Array.prototype.splice.call(arguments, 0, arguments.length));
          var e = new re(t);
          return (
            this.__set__ && this.__set__.push(e),
            (e.paper = this),
            (e.type = "set"),
            e
          );
        }),
        (K.setStart = function (t) {
          this.__set__ = t || this.set();
        }),
        (K.setFinish = function (t) {
          var e = this.__set__;
          return delete this.__set__, e;
        }),
        (K.setSize = function (t, e) {
          return j._engine.setSize.call(this, t, e);
        }),
        (K.setViewBox = function (t, e, r, i, n) {
          return j._engine.setViewBox.call(this, t, e, r, i, n);
        }),
        (K.top = K.bottom = null),
        (K.raphael = j);
      function Ot() {
        return this.x + w + this.y + w + this.width + " × " + this.height;
      }
      (K.getElementByPoint = function (t, e) {
        var r,
          i,
          n,
          s,
          a,
          o = this.canvas,
          l = d.doc.elementFromPoint(t, e);
        if (
          (d.win.opera &&
            "svg" == l.tagName &&
            ((i = (r = o).getBoundingClientRect()),
            (n = r.ownerDocument),
            (s = n.body),
            (a = n.documentElement),
            (r = a.clientTop || s.clientTop || 0),
            (n = a.clientLeft || s.clientLeft || 0),
            (s = {
              y: i.top + (d.win.pageYOffset || a.scrollTop || s.scrollTop) - r,
              x:
                i.left +
                (d.win.pageXOffset || a.scrollLeft || s.scrollLeft) -
                n,
            }),
            ((n = o.createSVGRect()).x = t - s.x),
            (n.y = e - s.y),
            (n.width = n.height = 1),
            (n = o.getIntersectionList(n, null)).length &&
              (l = n[n.length - 1])),
          !l)
        )
          return null;
        for (; l.parentNode && l != o.parentNode && !l.raphael; )
          l = l.parentNode;
        return (
          l == this.canvas.parentNode && (l = o),
          (l = l && l.raphael ? this.getById(l.raphaelid) : null)
        );
      }),
        (K.getElementsByBBox = function (e) {
          var r = this.set();
          return (
            this.forEach(function (t) {
              j.isBBoxIntersect(t.getBBox(), e) && r.push(t);
            }),
            r
          );
        }),
        (K.getById = function (t) {
          for (var e = this.bottom; e; ) {
            if (e.id == t) return e;
            e = e.next;
          }
          return null;
        }),
        (K.forEach = function (t, e) {
          for (var r = this.bottom; r; ) {
            if (!1 === t.call(e, r)) return this;
            r = r.next;
          }
          return this;
        }),
        (K.getElementsByPoint = function (e, r) {
          var i = this.set();
          return (
            this.forEach(function (t) {
              t.isPointInside(e, r) && i.push(t);
            }),
            i
          );
        }),
        (qt.isPointInside = function (t, e) {
          var r = (this.realPath = Z[this.type](this));
          return (
            this.attr("transform") &&
              this.attr("transform").length &&
              (r = j.transformPath(r, this.attr("transform"))),
            j.isPointInsidePath(r, t, e)
          );
        }),
        (qt.getBBox = function (t) {
          if (this.removed) return {};
          var e = this._;
          return t
            ? ((!e.dirty && e.bboxwt) ||
                ((this.realPath = Z[this.type](this)),
                (e.bboxwt = vt(this.realPath)),
                (e.bboxwt.toString = Ot),
                (e.dirty = 0)),
              e.bboxwt)
            : ((!e.dirty && !e.dirtyT && e.bbox) ||
                ((!e.dirty && this.realPath) ||
                  ((e.bboxwt = 0), (this.realPath = Z[this.type](this))),
                (e.bbox = vt(Q(this.realPath, this.matrix))),
                (e.bbox.toString = Ot),
                (e.dirty = e.dirtyT = 0)),
              e.bbox);
        }),
        (qt.clone = function () {
          if (this.removed) return null;
          var t = this.paper[this.type]().attr(this.attr());
          return this.__set__ && this.__set__.push(t), t;
        }),
        (qt.glow = function (t) {
          if ("text" == this.type) return null;
          for (
            var e = {
                width:
                  ((t = t || {}).width || 10) +
                  (+this.attr("stroke-width") || 1),
                fill: t.fill || !1,
                opacity: t.opacity || 0.5,
                offsetx: t.offsetx || 0,
                offsety: t.offsety || 0,
                color: t.color || "#000",
              },
              r = e.width / 2,
              i = this.paper,
              n = i.set(),
              s = this.realPath || Z[this.type](this),
              s = this.matrix ? Q(s, this.matrix) : s,
              a = 1;
            a < 1 + r;
            a++
          )
            n.push(
              i
                .path(s)
                .attr({
                  stroke: e.color,
                  fill: e.fill ? e.color : "none",
                  "stroke-linejoin": "round",
                  "stroke-linecap": "round",
                  "stroke-width": +((e.width / r) * a).toFixed(3),
                  opacity: +(e.opacity / r).toFixed(3),
                })
            );
          return n.insertBefore(this).translate(e.offsetx, e.offsety);
        });
      function Yt(t, e, r, i, n, s, a, o, l) {
        return null == l
          ? ft(t, e, r, i, n, s, a, o)
          : j.findDotsAtSegment(
              t,
              e,
              r,
              i,
              n,
              s,
              a,
              o,
              (function (t, e, r, i, n, s, a, o, l) {
                if (!(l < 0 || ft(t, e, r, i, n, s, a, o) < l)) {
                  for (
                    var h = 0.5, u = 1 - h, c = ft(t, e, r, i, n, s, a, o, u);
                    0.01 < S(c - l);

                  )
                    c = ft(
                      t,
                      e,
                      r,
                      i,
                      n,
                      s,
                      a,
                      o,
                      (u += (c < l ? 1 : -1) * (h /= 2))
                    );
                  return u;
                }
              })(t, e, r, i, n, s, a, o, l)
            );
      }
      var o = function (p, d) {
          return function (t, e, r) {
            for (
              var i,
                n,
                s,
                a,
                o,
                l = "",
                h = {},
                u = 0,
                c = 0,
                f = (t = Ct(t)).length;
              c < f;
              c++
            ) {
              if ("M" == (s = t[c])[0]) (i = +s[1]), (n = +s[2]);
              else {
                if (
                  e <
                  u + (a = Yt(i, n, s[1], s[2], s[3], s[4], s[5], s[6]))
                ) {
                  if (d && !h.start) {
                    if (
                      ((l += [
                        "C" +
                          (o = Yt(
                            i,
                            n,
                            s[1],
                            s[2],
                            s[3],
                            s[4],
                            s[5],
                            s[6],
                            e - u
                          )).start.x,
                        o.start.y,
                        o.m.x,
                        o.m.y,
                        o.x,
                        o.y,
                      ]),
                      r)
                    )
                      return l;
                    (h.start = l),
                      (l = [
                        "M" + o.x,
                        o.y + "C" + o.n.x,
                        o.n.y,
                        o.end.x,
                        o.end.y,
                        s[5],
                        s[6],
                      ].join()),
                      (u += a),
                      (i = +s[5]),
                      (n = +s[6]);
                    continue;
                  }
                  if (!p && !d)
                    return {
                      x: (o = Yt(
                        i,
                        n,
                        s[1],
                        s[2],
                        s[3],
                        s[4],
                        s[5],
                        s[6],
                        e - u
                      )).x,
                      y: o.y,
                      alpha: o.alpha,
                    };
                }
                (u += a), (i = +s[5]), (n = +s[6]);
              }
              l += s.shift() + s;
            }
            return (
              (h.end = l),
              (o = p
                ? u
                : d
                ? h
                : j.findDotsAtSegment(
                    i,
                    n,
                    s[0],
                    s[1],
                    s[2],
                    s[3],
                    s[4],
                    s[5],
                    1
                  )).alpha && (o = { x: o.x, y: o.y, alpha: o.alpha }),
              o
            );
          };
        },
        Gt = o(1),
        Wt = o(),
        Xt = o(0, 1);
      (j.getTotalLength = Gt),
        (j.getPointAtLength = Wt),
        (j.getSubpath = function (t, e, r) {
          if (this.getTotalLength(t) - r < 1e-6) return Xt(t, e).end;
          r = Xt(t, r, 1);
          return e ? Xt(r, e).end : r;
        }),
        (qt.getTotalLength = function () {
          var t = this.getPath();
          if (t)
            return this.node.getTotalLength
              ? this.node.getTotalLength()
              : Gt(t);
        }),
        (qt.getPointAtLength = function (t) {
          var e = this.getPath();
          if (e) return Wt(e, t);
        }),
        (qt.getPath = function () {
          var t,
            e = j._getPath[this.type];
          if ("text" != this.type && "set" != this.type)
            return e && (t = e(this)), t;
        }),
        (qt.getSubpath = function (t, e) {
          var r = this.getPath();
          if (r) return j.getSubpath(r, t, e);
        });
      o = j.easing_formulas = {
        linear: function (t) {
          return t;
        },
        "<": function (t) {
          return m(t, 1.7);
        },
        ">": function (t) {
          return m(t, 0.48);
        },
        "<>": function (t) {
          var e = 0.48 - t / 1.04,
            r = B.sqrt(0.1734 + e * e),
            t = r - e,
            e = -r - e,
            e =
              m(S(t), 1 / 3) * (t < 0 ? -1 : 1) +
              m(S(e), 1 / 3) * (e < 0 ? -1 : 1) +
              0.5;
          return 3 * (1 - e) * e * e + e * e * e;
        },
        backIn: function (t) {
          return t * t * (2.70158 * t - 1.70158);
        },
        backOut: function (t) {
          return --t * t * (2.70158 * t + 1.70158) + 1;
        },
        elastic: function (t) {
          return t == !!t
            ? t
            : m(2, -10 * t) * B.sin((2 * T * (t - 0.075)) / 0.3) + 1;
        },
        bounce: function (t) {
          var e = 7.5625,
            r = 2.75,
            t =
              t < 1 / r
                ? e * t * t
                : t < 2 / r
                ? e * (t -= 1.5 / r) * t + 0.75
                : t < 2.5 / r
                ? e * (t -= 2.25 / r) * t + 0.9375
                : e * (t -= 2.625 / r) * t + 0.984375;
          return t;
        },
      };
      (o.easeIn = o["ease-in"] = o["<"]),
        (o.easeOut = o["ease-out"] = o[">"]),
        (o.easeInOut = o["ease-in-out"] = o["<>"]),
        (o["back-in"] = o.backIn),
        (o["back-out"] = o.backOut);
      var Ht = [],
        Ut =
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          t.msRequestAnimationFrame ||
          function (t) {
            setTimeout(t, 16);
          },
        $t = function () {
          for (var t = +new Date(), e = 0; e < Ht.length; e++) {
            var r = Ht[e];
            if (!r.el.removed && !r.paused) {
              var i,
                n = t - r.start,
                s = r.ms,
                a = r.easing,
                o = r.from,
                l = r.diff,
                h = r.to,
                u = (r.t, r.el),
                c = {},
                f = {};
              if (
                (r.initstatus
                  ? ((n =
                      ((r.initstatus * r.anim.top - r.prev) /
                        (r.percent - r.prev)) *
                      s),
                    (r.status = r.initstatus),
                    delete r.initstatus,
                    r.stop && Ht.splice(e--, 1))
                  : (r.status =
                      (r.prev + (r.percent - r.prev) * (n / s)) / r.anim.top),
                !(n < 0))
              )
                if (n < s) {
                  var p,
                    d = a(n / s);
                  for (p in o)
                    if (o[L](p)) {
                      switch (D[p]) {
                        case F:
                          b = +o[p] + d * s * l[p];
                          break;
                        case "colour":
                          b =
                            "rgb(" +
                            [
                              Zt(C(o[p].r + d * s * l[p].r)),
                              Zt(C(o[p].g + d * s * l[p].g)),
                              Zt(C(o[p].b + d * s * l[p].b)),
                            ].join(",") +
                            ")";
                          break;
                        case "path":
                          b = [];
                          for (var g = 0, x = o[p].length; g < x; g++) {
                            b[g] = [o[p][g][0]];
                            for (var y = 1, m = o[p][g].length; y < m; y++)
                              b[g][y] = +o[p][g][y] + d * s * l[p][g][y];
                            b[g] = b[g].join(w);
                          }
                          b = b.join(w);
                          break;
                        case "transform":
                          if (l[p].real)
                            for (b = [], g = 0, x = o[p].length; g < x; g++)
                              for (
                                b[g] = [o[p][g][0]], y = 1, m = o[p][g].length;
                                y < m;
                                y++
                              )
                                b[g][y] = o[p][g][y] + d * s * l[p][g][y];
                          else {
                            function v(t) {
                              return +o[p][t] + d * s * l[p][t];
                            }
                            var b = [["m", v(0), v(1), v(2), v(3), v(4), v(5)]];
                          }
                          break;
                        case "csv":
                          if ("clip-rect" == p)
                            for (b = [], g = 4; g--; )
                              b[g] = +o[p][g] + d * s * l[p][g];
                          break;
                        default:
                          var _ = [][M](o[p]);
                          for (
                            b = [], g = u.paper.customAttributes[p].length;
                            g--;

                          )
                            b[g] = +_[g] + d * s * l[p][g];
                      }
                      c[p] = b;
                    }
                  u.attr(c),
                    (function (t, e, r) {
                      setTimeout(function () {
                        N("raphael.anim.frame." + t, e, r);
                      });
                    })(u.id, u, r.anim);
                } else {
                  if (
                    (!(function (t, e, r) {
                      setTimeout(function () {
                        N("raphael.anim.frame." + e.id, e, r),
                          N("raphael.anim.finish." + e.id, e, r),
                          j.is(t, "function") && t.call(e);
                      });
                    })(r.callback, u, r.anim),
                    u.attr(h),
                    Ht.splice(e--, 1),
                    1 < r.repeat && !r.next)
                  ) {
                    for (i in h) h[L](i) && (f[i] = r.totalOrigin[i]);
                    r.el.attr(f),
                      Kt(
                        r.anim,
                        r.el,
                        r.anim.percents[0],
                        null,
                        r.totalOrigin,
                        r.repeat - 1
                      );
                  }
                  r.next &&
                    !r.stop &&
                    Kt(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat);
                }
            }
          }
          j.svg && u && u.paper && u.paper.safari(), Ht.length && Ut($t);
        },
        Zt = function (t) {
          return 255 < t ? 255 : t < 0 ? 0 : t;
        };
      function Qt(t, e, r, i, n, s) {
        var a,
          l = 3 * e,
          h = 3 * (i - e) - l,
          u = 1 - l - h,
          o = 3 * r,
          c = 3 * (n - r) - o,
          f = 1 - o - c;
        function p(t) {
          return ((u * t + h) * t + l) * t;
        }
        return (
          (a = (function (t, e) {
            var r, i, n, s, a, o;
            for (n = t, o = 0; o < 8; o++) {
              if (((s = p(n) - t), S(s) < e)) return n;
              if (S((a = (3 * u * n + 2 * h) * n + l)) < 1e-6) break;
              n -= s / a;
            }
            if (((i = 1), (n = t) < (r = 0))) return r;
            if (i < n) return i;
            for (; r < i; ) {
              if (((s = p(n)), S(s - t) < e)) return n;
              s < t ? (r = n) : (i = n), (n = (i - r) / 2 + r);
            }
            return n;
          })(t, (a = 1 / (200 * s)))),
          ((f * a + c) * a + o) * a
        );
      }
      function Jt(t, e) {
        var r = [],
          i = {};
        if (((this.ms = e), (this.times = 1), t)) {
          for (var n in t) t[L](n) && ((i[I(n)] = t[n]), r.push(I(n)));
          r.sort(s);
        }
        (this.anim = i), (this.top = r[r.length - 1]), (this.percents = r);
      }
      function Kt(t, e, r, i, n, s) {
        r = I(r);
        var a,
          o,
          l,
          h,
          u,
          c = t.ms,
          f = {},
          p = {},
          d = {};
        if (i)
          for (x = 0, y = Ht.length; x < y; x++) {
            var g = Ht[x];
            if (g.el.id == e.id && g.anim == t) {
              g.percent != r ? (Ht.splice(x, 1), (l = 1)) : (o = g),
                e.attr(g.totalOrigin);
              break;
            }
          }
        else i = +p;
        for (var x = 0, y = t.percents.length; x < y; x++) {
          if (t.percents[x] == r || t.percents[x] > i * t.top) {
            (r = t.percents[x]),
              (u = t.percents[x - 1] || 0),
              (c = (c / t.top) * (r - u)),
              (h = t.percents[x + 1]),
              (a = t.anim[r]);
            break;
          }
          i && e.attr(t.anim[t.percents[x]]);
        }
        if (a) {
          if (o) (o.initstatus = i), (o.start = new Date() - o.ms * i);
          else {
            for (var m in a)
              if (a[L](m) && (D[L](m) || e.paper.customAttributes[L](m)))
                switch (
                  ((f[m] = e.attr(m)),
                  null == f[m] && (f[m] = q[m]),
                  (p[m] = a[m]),
                  D[m])
                ) {
                  case F:
                    d[m] = (p[m] - f[m]) / c;
                    break;
                  case "colour":
                    f[m] = j.getRGB(f[m]);
                    var v = j.getRGB(p[m]);
                    d[m] = {
                      r: (v.r - f[m].r) / c,
                      g: (v.g - f[m].g) / c,
                      b: (v.b - f[m].b) / c,
                    };
                    break;
                  case "path":
                    var b = Ct(f[m], p[m]),
                      _ = b[1];
                    for (
                      f[m] = b[0], d[m] = [], x = 0, y = f[m].length;
                      x < y;
                      x++
                    ) {
                      d[m][x] = [0];
                      for (var w = 1, k = f[m][x].length; w < k; w++)
                        d[m][x][w] = (_[x][w] - f[m][x][w]) / c;
                    }
                    break;
                  case "transform":
                    (v = e._), (b = At(v[m], p[m]));
                    if (b)
                      for (
                        f[m] = b.from,
                          p[m] = b.to,
                          d[m] = [],
                          d[m].real = !0,
                          x = 0,
                          y = f[m].length;
                        x < y;
                        x++
                      )
                        for (
                          d[m][x] = [f[m][x][0]], w = 1, k = f[m][x].length;
                          w < k;
                          w++
                        )
                          d[m][x][w] = (p[m][x][w] - f[m][x][w]) / c;
                    else {
                      (b = e.matrix || new Nt()),
                        (v = {
                          _: { transform: v.transform },
                          getBBox: function () {
                            return e.getBBox(1);
                          },
                        });
                      (f[m] = [b.a, b.b, b.c, b.d, b.e, b.f]),
                        Tt(v, p[m]),
                        (p[m] = v._.transform),
                        (d[m] = [
                          (v.matrix.a - b.a) / c,
                          (v.matrix.b - b.b) / c,
                          (v.matrix.c - b.c) / c,
                          (v.matrix.d - b.d) / c,
                          (v.matrix.e - b.e) / c,
                          (v.matrix.f - b.f) / c,
                        ]);
                    }
                    break;
                  case "csv":
                    var C = P(a[m])[z](E),
                      B = P(f[m])[z](E);
                    if ("clip-rect" == m)
                      for (f[m] = B, d[m] = [], x = B.length; x--; )
                        d[m][x] = (C[x] - f[m][x]) / c;
                    p[m] = C;
                    break;
                  default:
                    for (
                      C = [][M](a[m]),
                        B = [][M](f[m]),
                        d[m] = [],
                        x = e.paper.customAttributes[m].length;
                      x--;

                    )
                      d[m][x] = ((C[x] || 0) - (B[x] || 0)) / c;
                }
            var S,
              T = a.easing,
              A = j.easing_formulas[T];
            if (
              ((A =
                A ||
                ((A = P(T).match(R)) && 5 == A.length
                  ? ((S = A),
                    function (t) {
                      return Qt(t, +S[1], +S[2], +S[3], +S[4], c);
                    })
                  : U)),
              (T = a.start || t.start || +new Date()),
              (g = {
                anim: t,
                percent: r,
                timestamp: T,
                start: T + (t.del || 0),
                status: 0,
                initstatus: i || 0,
                stop: !1,
                ms: c,
                easing: A,
                from: f,
                diff: d,
                to: p,
                el: e,
                callback: a.callback,
                prev: u,
                next: h,
                repeat: s || t.times,
                origin: e.attr(),
                totalOrigin: n,
              }),
              Ht.push(g),
              i &&
                !o &&
                !l &&
                ((g.stop = !0), (g.start = new Date() - c * i), 1 == Ht.length))
            )
              return $t();
            l && (g.start = new Date() - g.ms * i), 1 == Ht.length && Ut($t);
          }
          N("raphael.anim.start." + e.id, e, t);
        }
      }
      function te(t) {
        for (var e = 0; e < Ht.length; e++)
          Ht[e].el.paper == t && Ht.splice(e--, 1);
      }
      (qt.animateWith = function (t, e, r, i, n, s) {
        var a = this;
        if (a.removed) return s && s.call(a), a;
        s = r instanceof Jt ? r : j.animation(r, i, n, s);
        Kt(s, a, s.percents[0], null, a.attr());
        for (var o = 0, l = Ht.length; o < l; o++)
          if (Ht[o].anim == e && Ht[o].el == t) {
            Ht[l - 1].start = Ht[o].start;
            break;
          }
        return a;
      }),
        (qt.onAnimation = function (t) {
          return (
            t
              ? N.on("raphael.anim.frame." + this.id, t)
              : N.unbind("raphael.anim.frame." + this.id),
            this
          );
        }),
        (Jt.prototype.delay = function (t) {
          var e = new Jt(this.anim, this.ms);
          return (e.times = this.times), (e.del = +t || 0), e;
        }),
        (Jt.prototype.repeat = function (t) {
          var e = new Jt(this.anim, this.ms);
          return (e.del = this.del), (e.times = B.floor(_(t, 0)) || 1), e;
        }),
        (j.animation = function (t, e, r, i) {
          if (t instanceof Jt) return t;
          (!j.is(r, "function") && r) || ((i = i || r || null), (r = null)),
            (e = +e || 0);
          var n,
            s,
            a = {};
          for (s in (t = Object(t)))
            t[L](s) &&
              I(s) != s &&
              I(s) + "%" != s &&
              ((n = !0), (a[s] = t[s]));
          return n
            ? (r && (a.easing = r),
              i && (a.callback = i),
              new Jt({ 100: a }, e))
            : new Jt(t, e);
        }),
        (qt.animate = function (t, e, r, i) {
          var n = this;
          if (n.removed) return i && i.call(n), n;
          i = t instanceof Jt ? t : j.animation(t, e, r, i);
          return Kt(i, n, i.percents[0], null, n.attr()), n;
        }),
        (qt.setTime = function (t, e) {
          return t && null != e && this.status(t, k(e, t.ms) / t.ms), this;
        }),
        (qt.status = function (t, e) {
          var r,
            i,
            n = [],
            s = 0;
          if (null != e) return Kt(t, this, -1, k(e, 1)), this;
          for (r = Ht.length; s < r; s++)
            if ((i = Ht[s]).el.id == this.id && (!t || i.anim == t)) {
              if (t) return i.status;
              n.push({ anim: i.anim, status: i.status });
            }
          return t ? 0 : n;
        }),
        (qt.pause = function (t) {
          for (var e = 0; e < Ht.length; e++)
            Ht[e].el.id != this.id ||
              (t && Ht[e].anim != t) ||
              (!1 !== N("raphael.anim.pause." + this.id, this, Ht[e].anim) &&
                (Ht[e].paused = !0));
          return this;
        }),
        (qt.resume = function (t) {
          for (var e, r = 0; r < Ht.length; r++)
            Ht[r].el.id != this.id ||
              (t && Ht[r].anim != t) ||
              ((e = Ht[r]),
              !1 !== N("raphael.anim.resume." + this.id, this, e.anim) &&
                (delete e.paused, this.status(e.anim, e.status)));
          return this;
        }),
        (qt.stop = function (t) {
          for (var e = 0; e < Ht.length; e++)
            Ht[e].el.id != this.id ||
              (t && Ht[e].anim != t) ||
              (!1 !== N("raphael.anim.stop." + this.id, this, Ht[e].anim) &&
                Ht.splice(e--, 1));
          return this;
        }),
        N.on("raphael.remove", te),
        N.on("raphael.clear", te),
        (qt.toString = function () {
          return "Raphaël’s object";
        });
      var ee,
        re = function (t) {
          if (((this.items = []), (this.length = 0), (this.type = "set"), t))
            for (var e = 0, r = t.length; e < r; e++)
              !t[e] ||
                (t[e].constructor != qt.constructor &&
                  t[e].constructor != re) ||
                ((this[this.items.length] = this.items[this.items.length] =
                  t[e]),
                this.length++);
        },
        ie = re.prototype;
      for (ee in ((ie.push = function () {
        for (var t, e, r = 0, i = arguments.length; r < i; r++)
          !(t = arguments[r]) ||
            (t.constructor != qt.constructor && t.constructor != re) ||
            ((this[(e = this.items.length)] = this.items[e] = t),
            this.length++);
        return this;
      }),
      (ie.pop = function () {
        return this.length && delete this[this.length--], this.items.pop();
      }),
      (ie.forEach = function (t, e) {
        for (var r = 0, i = this.items.length; r < i; r++)
          if (!1 === t.call(e, this.items[r], r)) return this;
        return this;
      }),
      qt))
        qt[L](ee) &&
          (ie[ee] = (function (r) {
            return function () {
              var e = arguments;
              return this.forEach(function (t) {
                t[r][x](t, e);
              });
            };
          })(ee));
      (ie.attr = function (t, e) {
        if (t && j.is(t, v) && j.is(t[0], "object"))
          for (var r = 0, i = t.length; r < i; r++) this.items[r].attr(t[r]);
        else
          for (var n = 0, s = this.items.length; n < s; n++)
            this.items[n].attr(t, e);
        return this;
      }),
        (ie.clear = function () {
          for (; this.length; ) this.pop();
        }),
        (ie.splice = function (t, e, r) {
          (t = t < 0 ? _(this.length + t, 0) : t),
            (e = _(0, k(this.length - t, e)));
          for (var i = [], n = [], s = [], a = 2; a < arguments.length; a++)
            s.push(arguments[a]);
          for (a = 0; a < e; a++) n.push(this[t + a]);
          for (; a < this.length - t; a++) i.push(this[t + a]);
          var o = s.length;
          for (a = 0; a < o + i.length; a++)
            this.items[t + a] = this[t + a] = a < o ? s[a] : i[a - o];
          for (a = this.items.length = this.length -= e - o; this[a]; )
            delete this[a++];
          return new re(n);
        }),
        (ie.exclude = function (t) {
          for (var e = 0, r = this.length; e < r; e++)
            if (this[e] == t) return this.splice(e, 1), !0;
        }),
        (ie.animate = function (t, e, r, i) {
          (!j.is(r, "function") && r) || (i = r || null);
          var n,
            s = this.items.length,
            a = s,
            o = this;
          if (!s) return this;
          i &&
            (n = function () {
              --s || i.call(o);
            }),
            (r = j.is(r, u) ? r : n);
          for (
            var l = j.animation(t, e, r, n), h = this.items[--a].animate(l);
            a--;

          )
            this.items[a] &&
              !this.items[a].removed &&
              this.items[a].animateWith(h, l, l),
              (this.items[a] && !this.items[a].removed) || s--;
          return this;
        }),
        (ie.insertAfter = function (t) {
          for (var e = this.items.length; e--; ) this.items[e].insertAfter(t);
          return this;
        }),
        (ie.getBBox = function () {
          for (
            var t, e = [], r = [], i = [], n = [], s = this.items.length;
            s--;

          )
            this.items[s].removed ||
              ((t = this.items[s].getBBox()),
              e.push(t.x),
              r.push(t.y),
              i.push(t.x + t.width),
              n.push(t.y + t.height));
          return {
            x: (e = k[x](0, e)),
            y: (r = k[x](0, r)),
            x2: (i = _[x](0, i)),
            y2: (n = _[x](0, n)),
            width: i - e,
            height: n - r,
          };
        }),
        (ie.clone = function (t) {
          t = this.paper.set();
          for (var e = 0, r = this.items.length; e < r; e++)
            t.push(this.items[e].clone());
          return t;
        }),
        (ie.toString = function () {
          return "Raphaël‘s set";
        }),
        (ie.glow = function (r) {
          var i = this.paper.set();
          return (
            this.forEach(function (t, e) {
              t = t.glow(r);
              null != t &&
                t.forEach(function (t, e) {
                  i.push(t);
                });
            }),
            i
          );
        }),
        (ie.isPointInside = function (e, r) {
          var i = !1;
          return (
            this.forEach(function (t) {
              if (t.isPointInside(e, r))
                return console.log("runned"), !(i = !0);
            }),
            i
          );
        }),
        (j.registerFont = function (t) {
          if (!t.face) return t;
          this.fonts = this.fonts || {};
          var e,
            r = { w: t.w, face: {}, glyphs: {} },
            i = t.face["font-family"];
          for (e in t.face) t.face[L](e) && (r.face[e] = t.face[e]);
          if (
            (this.fonts[i] ? this.fonts[i].push(r) : (this.fonts[i] = [r]),
            !t.svg)
          )
            for (var n in ((r.face["units-per-em"] = b(
              t.face["units-per-em"],
              10
            )),
            t.glyphs))
              if (t.glyphs[L](n)) {
                var s = t.glyphs[n];
                if (
                  ((r.glyphs[n] = {
                    w: s.w,
                    k: {},
                    d:
                      s.d &&
                      "M" +
                        s.d.replace(/[mlcxtrv]/g, function (t) {
                          return (
                            { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[
                              t
                            ] || "M"
                          );
                        }) +
                        "z",
                  }),
                  s.k)
                )
                  for (var a in s.k) s[L](a) && (r.glyphs[n].k[a] = s.k[a]);
              }
          return t;
        }),
        (K.getFont = function (t, e, r, i) {
          if (
            ((i = i || "normal"),
            (r = r || "normal"),
            (e =
              +e ||
              { normal: 400, bold: 700, lighter: 300, bolder: 800 }[e] ||
              400),
            j.fonts)
          ) {
            var n,
              s = j.fonts[t];
            if (!s) {
              var a,
                o = new RegExp(
                  "(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)",
                  "i"
                );
              for (a in j.fonts)
                if (j.fonts[L](a) && o.test(a)) {
                  s = j.fonts[a];
                  break;
                }
            }
            if (s)
              for (
                var l = 0, h = s.length;
                l < h &&
                ((n = s[l]).face["font-weight"] != e ||
                  (n.face["font-style"] != r && n.face["font-style"]) ||
                  n.face["font-stretch"] != i);
                l++
              );
            return n;
          }
        }),
        (K.print = function (t, e, r, i, n, s, a, o) {
          (s = s || "middle"),
            (a = _(k(a || 0, 1), -1)),
            (o = _(k(o || 1, 3), 1));
          var l,
            h = P(r)[z](""),
            u = 0,
            c = 0,
            f = "";
          if ((j.is(i, "string") && (i = this.getFont(i)), i)) {
            l = (n || 16) / i.face["units-per-em"];
            for (
              var p,
                d,
                n = i.face.bbox[z](E),
                g = +n[0],
                x = n[3] - n[1],
                y = 0,
                m = +n[1] + ("baseline" == s ? x + +i.face.descent : x / 2),
                v = 0,
                b = h.length;
              v < b;
              v++
            )
              "\n" == h[v]
                ? ((c = d = u = 0), (y += x * o))
                : ((p = (c && i.glyphs[h[v - 1]]) || {}),
                  (d = i.glyphs[h[v]]),
                  (u += c
                    ? (p.w || i.w) + ((p.k && p.k[h[v]]) || 0) + i.w * a
                    : 0),
                  (c = 1)),
                d &&
                  d.d &&
                  (f += j.transformPath(d.d, [
                    "t",
                    u * l,
                    y * l,
                    "s",
                    l,
                    l,
                    g,
                    m,
                    "t",
                    (t - g) / l,
                    (e - m) / l,
                  ]));
          }
          return this.path(f).attr({ fill: "#000", stroke: "none" });
        }),
        (K.add = function (t) {
          if (j.is(t, "array"))
            for (var e, r = this.set(), i = 0, n = t.length; i < n; i++)
              (e = t[i] || {}), a[L](e.type) && r.push(this[e.type]().attr(e));
          return r;
        }),
        (j.format = function (t, e) {
          var r = j.is(e, v) ? [0][M](e) : arguments;
          return (
            t &&
              j.is(t, u) &&
              r.length - 1 &&
              (t = t.replace(n, function (t, e) {
                return null == r[++e] ? "" : r[e];
              })),
            t || ""
          );
        }),
        (j.fullfill = (function () {
          var e = /\{([^\}]+)\}/g,
            n = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
          return function (t, i) {
            return String(t).replace(e, function (t, e) {
              return (
                (r = t),
                (s = t = i),
                e.replace(n, function (t, e, r, i, n) {
                  (e = e || i),
                    s &&
                      (e in s && (s = s[e]),
                      "function" == typeof s && n && (s = s()));
                }),
                (s = (null == s || s == t ? r : s) + "")
              );
              var r, s;
            });
          };
        })()),
        (j.ninja = function () {
          return r.was ? (d.win.Raphael = r.is) : delete t.Raphael, j;
        }),
        (j.st = ie),
        (function (e, t, r) {
          null == e.readyState &&
            e.addEventListener &&
            (e.addEventListener(
              t,
              (r = function () {
                e.removeEventListener(t, r, !1), (e.readyState = "complete");
              }),
              !1
            ),
            (e.readyState = "loading")),
            (function t() {
              /in/.test(e.readyState)
                ? setTimeout(t, 9)
                : j.eve("raphael.DOMload");
            })();
        })(document, "DOMContentLoaded"),
        N.on("raphael.DOMload", function () {
          i = !0;
        }),
        (function () {
          if (j.svg) {
            var k = "hasOwnProperty",
              C = String,
              g = parseFloat,
              x = parseInt,
              y = Math,
              m = y.max,
              v = y.abs,
              b = y.pow,
              _ = /[, ]+/,
              f = j.eve,
              w = "http://www.w3.org/1999/xlink",
              B = {
                block: "M5,0 0,2.5 5,5z",
                classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                open: "M6,1 1,3.5 6,6",
                oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z",
              },
              S = {};
            j.toString = function () {
              return (
                "Your browser supports SVG.\nYou are running Raphaël " +
                this.version
              );
            };
            function T(t, e) {
              var i = "linear",
                r = t.id + e,
                n = 0.5,
                s = 0.5,
                a = t.node,
                o = t.paper,
                l = a.style,
                h = j._g.doc.getElementById(r);
              if (!h) {
                if (
                  ((e = (e = C(e).replace(
                    j._radial_gradient,
                    function (t, e, r) {
                      return (
                        (i = "radial"),
                        e &&
                          r &&
                          ((n = g(e)),
                          (r = 2 * (0.5 < (s = g(r))) - 1),
                          0.25 < b(n - 0.5, 2) + b(s - 0.5, 2) &&
                            (s = y.sqrt(0.25 - b(n - 0.5, 2)) * r + 0.5) &&
                            0.5 != s &&
                            (s = s.toFixed(5) - 1e-5 * r)),
                        ""
                      );
                    }
                  )).split(/\s*\-\s*/)),
                  "linear" == i)
                ) {
                  var u = e.shift(),
                    u = -g(u);
                  if (isNaN(u)) return null;
                  var c = [0, 0, y.cos(j.rad(u)), y.sin(j.rad(u))],
                    u = 1 / (m(v(c[2]), v(c[3])) || 1);
                  (c[2] *= u),
                    (c[3] *= u),
                    c[2] < 0 && ((c[0] = -c[2]), (c[2] = 0)),
                    c[3] < 0 && ((c[1] = -c[3]), (c[3] = 0));
                }
                var f = j._parseDots(e);
                if (!f) return null;
                if (
                  ((r = r.replace(/[\(\)\s,\xb0#]/g, "_")),
                  t.gradient &&
                    r != t.gradient.id &&
                    (o.defs.removeChild(t.gradient), delete t.gradient),
                  !t.gradient)
                ) {
                  (h = L(i + "Gradient", { id: r })),
                    (t.gradient = h),
                    L(
                      h,
                      "radial" == i
                        ? { fx: n, fy: s }
                        : {
                            x1: c[0],
                            y1: c[1],
                            x2: c[2],
                            y2: c[3],
                            gradientTransform: t.matrix.invert(),
                          }
                    ),
                    o.defs.appendChild(h);
                  for (var p = 0, d = f.length; p < d; p++)
                    h.appendChild(
                      L("stop", {
                        offset: f[p].offset || (p ? "100%" : "0%"),
                        "stop-color": f[p].color || "#fff",
                      })
                    );
                }
              }
              return (
                L(a, {
                  fill: "url(#" + r + ")",
                  opacity: 1,
                  "fill-opacity": 1,
                }),
                (l.fill = ""),
                (l.opacity = 1),
                (l.fillOpacity = 1)
              );
            }
            function A(t) {
              var e = t.getBBox(1);
              L(t.pattern, {
                patternTransform:
                  t.matrix.invert() + " translate(" + e.x + "," + e.y + ")",
              });
            }
            function N(t, e, r) {
              if ("path" == t.type) {
                for (
                  var i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    u,
                    c,
                    f = C(e).toLowerCase().split("-"),
                    p = t.paper,
                    d = r ? "end" : "start",
                    g = t.node,
                    x = t.attrs,
                    y = x["stroke-width"],
                    m = f.length,
                    v = "classic",
                    b = 3,
                    _ = 3,
                    w = 5;
                  m--;

                )
                  switch (f[m]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                      v = f[m];
                      break;
                    case "wide":
                      _ = 5;
                      break;
                    case "narrow":
                      _ = 2;
                      break;
                    case "long":
                      b = 5;
                      break;
                    case "short":
                      b = 2;
                  }
                for (u in ((u =
                  "open" == v
                    ? ((b += 2),
                      (_ += 2),
                      (w += 2),
                      (l = 1),
                      (n = r ? 4 : 1),
                      { fill: "none", stroke: x.stroke })
                    : ((n = l = b / 2), { fill: x.stroke, stroke: "none" })),
                t._.arrows
                  ? r
                    ? (t._.arrows.endPath && S[t._.arrows.endPath]--,
                      t._.arrows.endMarker && S[t._.arrows.endMarker]--)
                    : (t._.arrows.startPath && S[t._.arrows.startPath]--,
                      t._.arrows.startMarker && S[t._.arrows.startMarker]--)
                  : (t._.arrows = {}),
                "none" != v
                  ? ((s = "raphael-marker-" + v),
                    (a = "raphael-marker-" + d + v + b + _),
                    j._g.doc.getElementById(s)
                      ? S[s]++
                      : (p.defs.appendChild(
                          L(L("path"), {
                            "stroke-linecap": "round",
                            d: B[v],
                            id: s,
                          })
                        ),
                        (S[s] = 1)),
                    (o = j._g.doc.getElementById(a))
                      ? (S[a]++, (h = o.getElementsByTagName("use")[0]))
                      : ((o = L(L("marker"), {
                          id: a,
                          markerHeight: _,
                          markerWidth: b,
                          orient: "auto",
                          refX: n,
                          refY: _ / 2,
                        })),
                        (h = L(L("use"), {
                          "xlink:href": "#" + s,
                          transform:
                            (r
                              ? "rotate(180 " + b / 2 + " " + _ / 2 + ") "
                              : "") +
                            "scale(" +
                            b / w +
                            "," +
                            _ / w +
                            ")",
                          "stroke-width": (1 / ((b / w + _ / w) / 2)).toFixed(
                            4
                          ),
                        })),
                        o.appendChild(h),
                        p.defs.appendChild(o),
                        (S[a] = 1)),
                    L(h, u),
                    (l = l * ("diamond" != v && "oval" != v)),
                    (h = r
                      ? ((i = t._.arrows.startdx * y || 0),
                        j.getTotalLength(x.path) - l * y)
                      : ((i = l * y),
                        j.getTotalLength(x.path) -
                          (t._.arrows.enddx * y || 0))),
                    ((u = {})["marker-" + d] = "url(#" + a + ")"),
                    (h || i) && (u.d = j.getSubpath(x.path, i, h)),
                    L(g, u),
                    (t._.arrows[d + "Path"] = s),
                    (t._.arrows[d + "Marker"] = a),
                    (t._.arrows[d + "dx"] = l),
                    (t._.arrows[d + "Type"] = v),
                    (t._.arrows[d + "String"] = e))
                  : ((h = r
                      ? ((i = t._.arrows.startdx * y || 0),
                        j.getTotalLength(x.path) - i)
                      : ((i = 0),
                        j.getTotalLength(x.path) -
                          (t._.arrows.enddx * y || 0))),
                    t._.arrows[d + "Path"] &&
                      L(g, { d: j.getSubpath(x.path, i, h) }),
                    delete t._.arrows[d + "Path"],
                    delete t._.arrows[d + "Marker"],
                    delete t._.arrows[d + "dx"],
                    delete t._.arrows[d + "Type"],
                    delete t._.arrows[d + "String"]),
                S))
                  !S[k](u) ||
                    S[u] ||
                    ((c = j._g.doc.getElementById(u)) &&
                      c.parentNode.removeChild(c));
              }
            }
            function E(t, e, r) {
              if ((e = l[C(e).toLowerCase()])) {
                for (
                  var i = t.attrs["stroke-width"] || "1",
                    n =
                      { round: i, square: i, butt: 0 }[
                        t.attrs["stroke-linecap"] || r["stroke-linecap"]
                      ] || 0,
                    s = [],
                    a = e.length;
                  a--;

                )
                  s[a] = e[a] * i + (a % 2 ? 1 : -1) * n;
                L(t.node, { "stroke-dasharray": s.join(",") });
              }
            }
            function p(t, e) {
              var r,
                i = t.node,
                n = t.attrs,
                s = i.style.visibility;
              for (r in ((i.style.visibility = "hidden"), e))
                if (e[k](r) && j._availableAttrs[k](r)) {
                  var a = e[r];
                  switch (((n[r] = a), r)) {
                    case "blur":
                      t.blur(a);
                      break;
                    case "href":
                    case "title":
                      var o = L("title"),
                        l = j._g.doc.createTextNode(a);
                      o.appendChild(l), i.appendChild(o);
                      break;
                    case "target":
                      var h = i.parentNode;
                      "a" != h.tagName.toLowerCase() &&
                        ((o = L("a")),
                        h.insertBefore(o, i),
                        o.appendChild(i),
                        (h = o)),
                        "target" == r
                          ? h.setAttributeNS(
                              w,
                              "show",
                              "blank" == a ? "new" : a
                            )
                          : h.setAttributeNS(w, r, a);
                      break;
                    case "cursor":
                      i.style.cursor = a;
                      break;
                    case "transform":
                      t.transform(a);
                      break;
                    case "arrow-start":
                      N(t, a);
                      break;
                    case "arrow-end":
                      N(t, a, 1);
                      break;
                    case "clip-rect":
                      var u,
                        l = C(a).split(_);
                      4 == l.length &&
                        (t.clip &&
                          t.clip.parentNode.parentNode.removeChild(
                            t.clip.parentNode
                          ),
                        (h = L("clipPath")),
                        (u = L("rect")),
                        (h.id = j.createUUID()),
                        L(u, { x: l[0], y: l[1], width: l[2], height: l[3] }),
                        h.appendChild(u),
                        t.paper.defs.appendChild(h),
                        L(i, { "clip-path": "url(#" + h.id + ")" }),
                        (t.clip = u)),
                        a ||
                          ((u = i.getAttribute("clip-path")) &&
                            ((d = j._g.doc.getElementById(
                              u.replace(/(^url\(#|\)$)/g, "")
                            )) && d.parentNode.removeChild(d),
                            L(i, { "clip-path": "" }),
                            delete t.clip));
                      break;
                    case "path":
                      "path" == t.type &&
                        (L(i, {
                          d: a ? (n.path = j._pathToAbsolute(a)) : "M0,0",
                        }),
                        (t._.dirty = 1),
                        t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1)));
                      break;
                    case "width":
                      if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fx)) break;
                      (r = "x"), (a = n.x);
                    case "x":
                      n.fx && (a = -n.x - (n.width || 0));
                    case "rx":
                      if ("rx" == r && "rect" == t.type) break;
                    case "cx":
                      i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
                      break;
                    case "height":
                      if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fy)) break;
                      (r = "y"), (a = n.y);
                    case "y":
                      n.fy && (a = -n.y - (n.height || 0));
                    case "ry":
                      if ("ry" == r && "rect" == t.type) break;
                    case "cy":
                      i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
                      break;
                    case "r":
                      "rect" == t.type
                        ? L(i, { rx: a, ry: a })
                        : i.setAttribute(r, a),
                        (t._.dirty = 1);
                      break;
                    case "src":
                      "image" == t.type && i.setAttributeNS(w, "href", a);
                      break;
                    case "stroke-width":
                      (1 == t._.sx && 1 == t._.sy) ||
                        (a /= m(v(t._.sx), v(t._.sy)) || 1),
                        t.paper._vbSize && (a *= t.paper._vbSize),
                        i.setAttribute(r, a),
                        n["stroke-dasharray"] && E(t, n["stroke-dasharray"], e),
                        t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1));
                      break;
                    case "stroke-dasharray":
                      E(t, a, e);
                      break;
                    case "fill":
                      if (C(a).match(j._ISURL)) {
                        L(i, { fill: a });
                        break;
                      }
                      var c,
                        f,
                        p = j.getRGB(a);
                      if (p.error) {
                        if (
                          ("circle" == t.type ||
                            "ellipse" == t.type ||
                            "r" != C(a).charAt()) &&
                          T(t, a)
                        ) {
                          !("opacity" in n || "fill-opacity" in n) ||
                            ((c = j._g.doc.getElementById(
                              i.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                            )) &&
                              ((f = c.getElementsByTagName("stop")),
                              L(f[f.length - 1], {
                                "stop-opacity":
                                  ("opacity" in n ? n.opacity : 1) *
                                  ("fill-opacity" in n ? n["fill-opacity"] : 1),
                              }))),
                            (n.gradient = a),
                            (n.fill = "none");
                          break;
                        }
                      } else
                        delete e.gradient,
                          delete n.gradient,
                          !j.is(n.opacity, "undefined") &&
                            j.is(e.opacity, "undefined") &&
                            L(i, { opacity: n.opacity }),
                          !j.is(n["fill-opacity"], "undefined") &&
                            j.is(e["fill-opacity"], "undefined") &&
                            L(i, { "fill-opacity": n["fill-opacity"] });
                      p[k]("opacity") &&
                        L(i, {
                          "fill-opacity":
                            1 < p.opacity ? p.opacity / 100 : p.opacity,
                        });
                    case "stroke":
                      (p = j.getRGB(a)),
                        i.setAttribute(r, p.hex),
                        "stroke" == r &&
                          p[k]("opacity") &&
                          L(i, {
                            "stroke-opacity":
                              1 < p.opacity ? p.opacity / 100 : p.opacity,
                          }),
                        "stroke" == r &&
                          t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1));
                      break;
                    case "gradient":
                      ("circle" != t.type &&
                        "ellipse" != t.type &&
                        "r" == C(a).charAt()) ||
                        T(t, a);
                      break;
                    case "opacity":
                      n.gradient &&
                        !n[k]("stroke-opacity") &&
                        L(i, { "stroke-opacity": 1 < a ? a / 100 : a });
                    case "fill-opacity":
                      if (n.gradient) {
                        (c = j._g.doc.getElementById(
                          i.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                        )) &&
                          ((f = c.getElementsByTagName("stop")),
                          L(f[f.length - 1], { "stop-opacity": a }));
                        break;
                      }
                    default:
                      "font-size" == r && (a = x(a, 10) + "px");
                      var d = r.replace(/(\-.)/g, function (t) {
                        return t.substring(1).toUpperCase();
                      });
                      (i.style[d] = a), (t._.dirty = 1), i.setAttribute(r, a);
                  }
                }
              M(t, e), (i.style.visibility = s);
            }
            function o(t, e) {
              ((this[0] = this.node = t).raphael = !0),
                (this.id = j._oid++),
                (t.raphaelid = this.id),
                (this.matrix = j.matrix()),
                (this.realPath = null),
                (this.paper = e),
                (this.attrs = this.attrs || {}),
                (this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  deg: 0,
                  dx: 0,
                  dy: 0,
                  dirty: 1,
                }),
                e.bottom || (e.bottom = this),
                (this.prev = e.top),
                e.top && (e.top.next = this),
                ((e.top = this).next = null);
            }
            var L = function (t, e) {
                if (e)
                  for (var r in ("string" == typeof t && (t = L(t)), e))
                    e[k](r) &&
                      ("xlink:" == r.substring(0, 6)
                        ? t.setAttributeNS(w, r.substring(6), C(e[r]))
                        : t.setAttribute(r, C(e[r])));
                else
                  (t = j._g.doc.createElementNS(
                    "http://www.w3.org/2000/svg",
                    t
                  )).style &&
                    (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return t;
              },
              l = {
                "": [0],
                none: [0],
                "-": [3, 1],
                ".": [1, 1],
                "-.": [3, 1, 1, 1],
                "-..": [3, 1, 1, 1, 1, 1],
                ". ": [1, 3],
                "- ": [4, 3],
                "--": [8, 3],
                "- .": [4, 3, 1, 3],
                "--.": [8, 3, 1, 3],
                "--..": [8, 3, 1, 3, 1, 3],
              },
              M = function (t, e) {
                if (
                  "text" == t.type &&
                  (e[k]("text") ||
                    e[k]("font") ||
                    e[k]("font-size") ||
                    e[k]("x") ||
                    e[k]("y"))
                ) {
                  var r = t.attrs,
                    i = t.node,
                    n = i.firstChild
                      ? x(
                          j._g.doc.defaultView
                            .getComputedStyle(i.firstChild, "")
                            .getPropertyValue("font-size"),
                          10
                        )
                      : 10;
                  if (e[k]("text")) {
                    for (r.text = e.text; i.firstChild; )
                      i.removeChild(i.firstChild);
                    for (
                      var s,
                        a = C(e.text).split("\n"),
                        o = [],
                        l = 0,
                        h = a.length;
                      l < h;
                      l++
                    )
                      (s = L("tspan")),
                        l && L(s, { dy: 1.2 * n, x: r.x }),
                        s.appendChild(j._g.doc.createTextNode(a[l])),
                        i.appendChild(s),
                        (o[l] = s);
                  } else
                    for (
                      l = 0, h = (o = i.getElementsByTagName("tspan")).length;
                      l < h;
                      l++
                    )
                      l ? L(o[l], { dy: 1.2 * n, x: r.x }) : L(o[0], { dy: 0 });
                  L(i, { x: r.x, y: r.y }), (t._.dirty = 1);
                  (t = t._getBBox()), (t = r.y - (t.y + t.height / 2));
                  t && j.is(t, "finite") && L(o[0], { dy: t });
                }
              },
              t = j.el;
            ((o.prototype = t).constructor = o),
              (j._engine.path = function (t, e) {
                var r = L("path");
                e.canvas && e.canvas.appendChild(r);
                e = new o(r, e);
                return (
                  (e.type = "path"),
                  p(e, { fill: "none", stroke: "#000", path: t }),
                  e
                );
              }),
              (t.rotate = function (t, e, r) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 &&
                      ((e = g(t[1])), (r = g(t[2]))),
                    (t = g(t[0])),
                    null == r && (e = r),
                    (null != e && null != r) ||
                      ((e = (i = this.getBBox(1)).x + i.width / 2),
                      (r = i.y + i.height / 2)),
                    this.transform(this._.transform.concat([["r", t, e, r]]))),
                  this
                );
                var i;
              }),
              (t.scale = function (t, e, r, i) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 &&
                      ((e = g(t[1])), (r = g(t[2])), (i = g(t[3]))),
                    (t = g(t[0])),
                    null == e && (e = t),
                    null == i && (r = i),
                    (null != r && null != i) || (n = this.getBBox(1)),
                    (r = null == r ? n.x + n.width / 2 : r),
                    (i = null == i ? n.y + n.height / 2 : i),
                    this.transform(
                      this._.transform.concat([["s", t, e, r, i]])
                    )),
                  this
                );
                var n;
              }),
              (t.translate = function (t, e) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 && (e = g(t[1])),
                    (t = g(t[0]) || 0),
                    (e = +e || 0),
                    this.transform(this._.transform.concat([["t", t, e]]))),
                  this
                );
              }),
              (t.transform = function (t) {
                var e = this._;
                return null == t
                  ? e.transform
                  : (j._extractTransform(this, t),
                    this.clip &&
                      L(this.clip, { transform: this.matrix.invert() }),
                    this.pattern && A(this),
                    this.node && L(this.node, { transform: this.matrix }),
                    (1 == e.sx && 1 == e.sy) ||
                      ((e = this.attrs[k]("stroke-width")
                        ? this.attrs["stroke-width"]
                        : 1),
                      this.attr({ "stroke-width": e })),
                    this);
              }),
              (t.hide = function () {
                return (
                  this.removed ||
                    this.paper.safari((this.node.style.display = "none")),
                  this
                );
              }),
              (t.show = function () {
                return (
                  this.removed ||
                    this.paper.safari((this.node.style.display = "")),
                  this
                );
              }),
              (t.remove = function () {
                if (!this.removed && this.node.parentNode) {
                  var t,
                    e = this.paper;
                  for (t in (e.__set__ && e.__set__.exclude(this),
                  f.unbind("raphael.*.*." + this.id),
                  this.gradient && e.defs.removeChild(this.gradient),
                  j._tear(this, e),
                  "a" == this.node.parentNode.tagName.toLowerCase()
                    ? this.node.parentNode.parentNode.removeChild(
                        this.node.parentNode
                      )
                    : this.node.parentNode.removeChild(this.node),
                  this))
                    this[t] =
                      "function" == typeof this[t]
                        ? j._removedFactory(t)
                        : null;
                  this.removed = !0;
                }
              }),
              (t._getBBox = function () {
                var t;
                "none" == this.node.style.display && (this.show(), (t = !0));
                var e = {};
                try {
                  e = this.node.getBBox();
                } catch (t) {
                } finally {
                  e = e || {};
                }
                return t && this.hide(), e;
              }),
              (t.attr = function (t, e) {
                if (this.removed) return this;
                if (null == t) {
                  var r,
                    i = {};
                  for (r in this.attrs)
                    this.attrs[k](r) && (i[r] = this.attrs[r]);
                  return (
                    i.gradient &&
                      "none" == i.fill &&
                      (i.fill = i.gradient) &&
                      delete i.gradient,
                    (i.transform = this._.transform),
                    i
                  );
                }
                if (null == e && j.is(t, "string")) {
                  if (
                    "fill" == t &&
                    "none" == this.attrs.fill &&
                    this.attrs.gradient
                  )
                    return this.attrs.gradient;
                  if ("transform" == t) return this._.transform;
                  for (
                    var n = t.split(_), s = {}, a = 0, o = n.length;
                    a < o;
                    a++
                  )
                    (t = n[a]) in this.attrs
                      ? (s[t] = this.attrs[t])
                      : j.is(this.paper.customAttributes[t], "function")
                      ? (s[t] = this.paper.customAttributes[t].def)
                      : (s[t] = j._availableAttrs[t]);
                  return o - 1 ? s : s[n[0]];
                }
                if (null == e && j.is(t, "array")) {
                  for (s = {}, a = 0, o = t.length; a < o; a++)
                    s[t[a]] = this.attr(t[a]);
                  return s;
                }
                var l, h;
                for (h in (null != e
                  ? ((l = {})[t] = e)
                  : null != t && j.is(t, "object") && (l = t),
                l))
                  f("raphael.attr." + h + "." + this.id, this, l[h]);
                for (h in this.paper.customAttributes)
                  if (
                    this.paper.customAttributes[k](h) &&
                    l[k](h) &&
                    j.is(this.paper.customAttributes[h], "function")
                  ) {
                    var u,
                      c = this.paper.customAttributes[h].apply(
                        this,
                        [].concat(l[h])
                      );
                    for (u in ((this.attrs[h] = l[h]), c))
                      c[k](u) && (l[u] = c[u]);
                  }
                return p(this, l), this;
              }),
              (t.toFront = function () {
                if (this.removed) return this;
                "a" == this.node.parentNode.tagName.toLowerCase()
                  ? this.node.parentNode.parentNode.appendChild(
                      this.node.parentNode
                    )
                  : this.node.parentNode.appendChild(this.node);
                var t = this.paper;
                return t.top != this && j._tofront(this, t), this;
              }),
              (t.toBack = function () {
                if (this.removed) return this;
                var t = this.node.parentNode;
                "a" == t.tagName.toLowerCase()
                  ? t.parentNode.insertBefore(
                      this.node.parentNode,
                      this.node.parentNode.parentNode.firstChild
                    )
                  : t.firstChild != this.node &&
                    t.insertBefore(this.node, this.node.parentNode.firstChild),
                  j._toback(this, this.paper);
                this.paper;
                return this;
              }),
              (t.insertAfter = function (t) {
                if (this.removed) return this;
                var e = t.node || t[t.length - 1].node;
                return (
                  e.nextSibling
                    ? e.parentNode.insertBefore(this.node, e.nextSibling)
                    : e.parentNode.appendChild(this.node),
                  j._insertafter(this, t, this.paper),
                  this
                );
              }),
              (t.insertBefore = function (t) {
                if (this.removed) return this;
                var e = t.node || t[0].node;
                return (
                  e.parentNode.insertBefore(this.node, e),
                  j._insertbefore(this, t, this.paper),
                  this
                );
              }),
              (t.blur = function (t) {
                var e,
                  r,
                  i = this;
                return (
                  0 != +t
                    ? ((e = L("filter")),
                      (r = L("feGaussianBlur")),
                      (i.attrs.blur = t),
                      (e.id = j.createUUID()),
                      L(r, { stdDeviation: +t || 1.5 }),
                      e.appendChild(r),
                      i.paper.defs.appendChild(e),
                      (i._blur = e),
                      L(i.node, { filter: "url(#" + e.id + ")" }))
                    : (i._blur &&
                        (i._blur.parentNode.removeChild(i._blur),
                        delete i._blur,
                        delete i.attrs.blur),
                      i.node.removeAttribute("filter")),
                  i
                );
              }),
              (j._engine.circle = function (t, e, r, i) {
                var n = L("circle");
                t.canvas && t.canvas.appendChild(n);
                t = new o(n, t);
                return (
                  (t.attrs = {
                    cx: e,
                    cy: r,
                    r: i,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "circle"),
                  L(n, t.attrs),
                  t
                );
              }),
              (j._engine.rect = function (t, e, r, i, n, s) {
                var a = L("rect");
                t.canvas && t.canvas.appendChild(a);
                t = new o(a, t);
                return (
                  (t.attrs = {
                    x: e,
                    y: r,
                    width: i,
                    height: n,
                    r: s || 0,
                    rx: s || 0,
                    ry: s || 0,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "rect"),
                  L(a, t.attrs),
                  t
                );
              }),
              (j._engine.ellipse = function (t, e, r, i, n) {
                var s = L("ellipse");
                t.canvas && t.canvas.appendChild(s);
                t = new o(s, t);
                return (
                  (t.attrs = {
                    cx: e,
                    cy: r,
                    rx: i,
                    ry: n,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "ellipse"),
                  L(s, t.attrs),
                  t
                );
              }),
              (j._engine.image = function (t, e, r, i, n, s) {
                var a = L("image");
                L(a, {
                  x: r,
                  y: i,
                  width: n,
                  height: s,
                  preserveAspectRatio: "none",
                }),
                  a.setAttributeNS(w, "href", e),
                  t.canvas && t.canvas.appendChild(a);
                t = new o(a, t);
                return (
                  (t.attrs = { x: r, y: i, width: n, height: s, src: e }),
                  (t.type = "image"),
                  t
                );
              }),
              (j._engine.text = function (t, e, r, i) {
                var n = L("text");
                t.canvas && t.canvas.appendChild(n);
                t = new o(n, t);
                return (
                  (t.attrs = {
                    x: e,
                    y: r,
                    "text-anchor": "middle",
                    text: i,
                    font: j._availableAttrs.font,
                    stroke: "none",
                    fill: "#000",
                  }),
                  (t.type = "text"),
                  p(t, t.attrs),
                  t
                );
              }),
              (j._engine.setSize = function (t, e) {
                return (
                  (this.width = t || this.width),
                  (this.height = e || this.height),
                  this.canvas.setAttribute("width", this.width),
                  this.canvas.setAttribute("height", this.height),
                  this._viewBox && this.setViewBox.apply(this, this._viewBox),
                  this
                );
              }),
              (j._engine.create = function () {
                var t = j._getContainer.apply(0, arguments),
                  e = t && t.container,
                  r = t.x,
                  i = t.y,
                  n = t.width,
                  s = t.height;
                if (!e) throw new Error("SVG container not found.");
                var a,
                  o = L("svg"),
                  t = "overflow:hidden;",
                  r = r || 0,
                  i = i || 0;
                return (
                  L(o, {
                    height: (s = s || 342),
                    version: 1.1,
                    width: (n = n || 512),
                    xmlns: "http://www.w3.org/2000/svg",
                  }),
                  1 == e
                    ? ((o.style.cssText =
                        t +
                        "position:absolute;left:" +
                        r +
                        "px;top:" +
                        i +
                        "px"),
                      j._g.doc.body.appendChild(o),
                      (a = 1))
                    : ((o.style.cssText = t + "position:relative"),
                      e.firstChild
                        ? e.insertBefore(o, e.firstChild)
                        : e.appendChild(o)),
                  ((e = new j._Paper()).width = n),
                  (e.height = s),
                  (e.canvas = o),
                  e.clear(),
                  (e._left = e._top = 0),
                  a && (e.renderfix = function () {}),
                  e.renderfix(),
                  e
                );
              }),
              (j._engine.setViewBox = function (t, e, r, i, n) {
                f("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
                var s,
                  a = m(r / this.width, i / this.height),
                  o = this.top,
                  l = n ? "meet" : "xMinYMin",
                  h =
                    null == t
                      ? (this._vbSize && (a = 1),
                        delete this._vbSize,
                        "0 0 " + this.width + " " + this.height)
                      : ((this._vbSize = a), t + " " + e + " " + r + " " + i);
                for (
                  L(this.canvas, { viewBox: h, preserveAspectRatio: l });
                  a && o;

                )
                  (s = "stroke-width" in o.attrs ? o.attrs["stroke-width"] : 1),
                    o.attr({ "stroke-width": s }),
                    (o._.dirty = 1),
                    (o._.dirtyT = 1),
                    (o = o.prev);
                return (this._viewBox = [t, e, r, i, !!n]), this;
              }),
              (j.prototype.renderfix = function () {
                var e,
                  r = this.canvas,
                  t = r.style;
                try {
                  e = r.getScreenCTM() || r.createSVGMatrix();
                } catch (t) {
                  e = r.createSVGMatrix();
                }
                var i = -e.e % 1,
                  n = -e.f % 1;
                (i || n) &&
                  (i &&
                    ((this._left = (this._left + i) % 1),
                    (t.left = this._left + "px")),
                  n &&
                    ((this._top = (this._top + n) % 1),
                    (t.top = this._top + "px")));
              }),
              (j.prototype.clear = function () {
                j.eve("raphael.clear", this);
                for (var t = this.canvas; t.firstChild; )
                  t.removeChild(t.firstChild);
                (this.bottom = this.top = null),
                  (this.desc = L("desc")).appendChild(
                    j._g.doc.createTextNode("Created with Raphaël " + j.version)
                  ),
                  t.appendChild(this.desc),
                  t.appendChild((this.defs = L("defs")));
              }),
              (j.prototype.remove = function () {
                for (var t in (f("raphael.remove", this),
                this.canvas.parentNode &&
                  this.canvas.parentNode.removeChild(this.canvas),
                this))
                  this[t] =
                    "function" == typeof this[t] ? j._removedFactory(t) : null;
              });
            var e,
              r = j.st;
            for (e in t)
              t[k](e) &&
                !r[k](e) &&
                (r[e] = (function (r) {
                  return function () {
                    var e = arguments;
                    return this.forEach(function (t) {
                      t[r].apply(t, e);
                    });
                  };
                })(e));
          }
        })(),
        (function () {
          if (j.vml) {
            function g(t, e, r) {
              var i = j.matrix();
              return i.rotate(-t, 0.5, 0.5), { dx: i.x(e, r), dy: i.y(e, r) };
            }
            function v(t, e, r, i, n, s) {
              var a,
                o = t._,
                l = t.matrix,
                h = o.fillpos,
                u = t.node,
                c = u.style,
                f = 1,
                p = "",
                d = M / e,
                t = M / r;
              (c.visibility = "hidden"),
                e &&
                  r &&
                  ((u.coordsize = x(d) + A + x(t)),
                  (c.rotation = s * (e * r < 0 ? -1 : 1)),
                  s && ((i = (a = g(s, i, n)).dx), (n = a.dy)),
                  e < 0 && (p += "x"),
                  r < 0 && (p += " y") && (f = -1),
                  (c.flip = p),
                  (u.coordorigin = i * -d + A + n * -t),
                  (h || o.fillsize) &&
                    ((t = (t = u.getElementsByTagName(S)) && t[0]),
                    u.removeChild(t),
                    h &&
                      ((a = g(s, l.x(h[0], h[1]), l.y(h[0], h[1]))),
                      (t.position = a.dx * f + A + a.dy * f)),
                    o.fillsize &&
                      (t.size =
                        o.fillsize[0] * x(e) + A + o.fillsize[1] * x(r)),
                    u.appendChild(t)),
                  (c.visibility = "visible"));
            }
            var b = "hasOwnProperty",
              _ = String,
              w = parseFloat,
              c = Math,
              k = c.round,
              C = c.max,
              B = c.min,
              x = c.abs,
              S = "fill",
              T = /[, ]+/,
              f = j.eve,
              A = " ",
              N = {
                M: "m",
                L: "l",
                C: "c",
                Z: "x",
                m: "t",
                l: "r",
                c: "v",
                z: "x",
              },
              E = /([clmz]),?([^clmz]*)/gi,
              i = / progid:\S+Blur\([^\)]+\)/g,
              L = /-?[^,\s-]+/g,
              h = "position:absolute;left:0;top:0;width:1px;height:1px",
              M = 21600,
              P = { path: 1, rect: 1, image: 1 },
              z = { circle: 1, ellipse: 1 };
            j.toString = function () {
              return (
                "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
                this.version
              );
            };
            function F(t, e, r) {
              for (
                var i = _(e).toLowerCase().split("-"),
                  r = r ? "end" : "start",
                  n = i.length,
                  s = "classic",
                  a = "medium",
                  o = "medium";
                n--;

              )
                switch (i[n]) {
                  case "block":
                  case "classic":
                  case "oval":
                  case "diamond":
                  case "open":
                  case "none":
                    s = i[n];
                    break;
                  case "wide":
                  case "narrow":
                    o = i[n];
                    break;
                  case "long":
                  case "short":
                    a = i[n];
                }
              t = t.node.getElementsByTagName("stroke")[0];
              (t[r + "arrow"] = s),
                (t[r + "arrowlength"] = a),
                (t[r + "arrowwidth"] = o);
            }
            function p(t, e) {
              t.attrs = t.attrs || {};
              var r,
                i,
                n,
                s,
                a,
                o,
                l,
                h = t.node,
                u = t.attrs,
                c = h.style,
                f =
                  P[t.type] &&
                  (e.x != u.x ||
                    e.y != u.y ||
                    e.width != u.width ||
                    e.height != u.height ||
                    e.cx != u.cx ||
                    e.cy != u.cy ||
                    e.rx != u.rx ||
                    e.ry != u.ry ||
                    e.r != u.r),
                p =
                  z[t.type] &&
                  (u.cx != e.cx ||
                    u.cy != e.cy ||
                    u.r != e.r ||
                    u.rx != e.rx ||
                    u.ry != e.ry),
                d = t;
              for (r in e) e[b](r) && (u[r] = e[r]);
              if (
                (f && ((u.path = j._getPath[t.type](t)), (t._.dirty = 1)),
                e.href && (h.href = e.href),
                e.title && (h.title = e.title),
                e.target && (h.target = e.target),
                e.cursor && (c.cursor = e.cursor),
                "blur" in e && t.blur(e.blur),
                ((e.path && "path" == t.type) || f) &&
                  ((h.path = (function (t) {
                    var e = /[ahqstv]/gi,
                      r = j._pathToAbsolute;
                    if (
                      (_(t).match(e) && (r = j._path2curve),
                      (e = /[clmz]/g),
                      r == j._pathToAbsolute && !_(t).match(e))
                    ) {
                      var i = _(t).replace(E, function (t, e, r) {
                        var i = [],
                          n = "m" == e.toLowerCase(),
                          s = N[e];
                        return (
                          r.replace(L, function (t) {
                            n &&
                              2 == i.length &&
                              ((s += i + N["m" == e ? "l" : "L"]), (i = [])),
                              i.push(k(t * M));
                          }),
                          s + i
                        );
                      });
                      return i;
                    }
                    for (
                      var n, s, a = r(t), i = [], o = 0, l = a.length;
                      o < l;
                      o++
                    ) {
                      (n = a[o]),
                        "z" == (s = a[o][0].toLowerCase()) && (s = "x");
                      for (var h = 1, u = n.length; h < u; h++)
                        s += k(n[h] * M) + (h != u - 1 ? "," : "");
                      i.push(s);
                    }
                    return i.join(A);
                  })(
                    ~_(u.path).toLowerCase().indexOf("r")
                      ? j._pathToAbsolute(u.path)
                      : u.path
                  )),
                  "image" == t.type &&
                    ((t._.fillpos = [u.x, u.y]),
                    (t._.fillsize = [u.width, u.height]),
                    v(t, 1, 1, 0, 0, 0))),
                "transform" in e && t.transform(e.transform),
                p &&
                  ((s = +u.cx),
                  (i = +u.cy),
                  (p = +u.rx || +u.r || 0),
                  (n = +u.ry || +u.r || 0),
                  (h.path = j.format(
                    "ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                    k((s - p) * M),
                    k((i - n) * M),
                    k((s + p) * M),
                    k((i + n) * M),
                    k(s * M)
                  )),
                  (t._.dirty = 1)),
                "clip-rect" in e &&
                  (4 == (i = _(e["clip-rect"]).split(T)).length &&
                    ((i[2] = +i[2] + +i[0]),
                    (i[3] = +i[3] + +i[1]),
                    ((s = (n = h.clipRect || j._g.doc.createElement("div"))
                      .style).clip = j.format(
                      "rect({1}px {2}px {3}px {0}px)",
                      i
                    )),
                    h.clipRect ||
                      ((s.position = "absolute"),
                      (s.top = 0),
                      (s.left = 0),
                      (s.width = t.paper.width + "px"),
                      (s.height = t.paper.height + "px"),
                      h.parentNode.insertBefore(n, h),
                      n.appendChild(h),
                      (h.clipRect = n))),
                  e["clip-rect"] ||
                    (h.clipRect && (h.clipRect.style.clip = "auto"))),
                t.textpath &&
                  ((o = t.textpath.style),
                  e.font && (o.font = e.font),
                  e["font-family"] &&
                    (o.fontFamily =
                      '"' +
                      e["font-family"]
                        .split(",")[0]
                        .replace(/^['"]+|['"]+$/g, "") +
                      '"'),
                  e["font-size"] && (o.fontSize = e["font-size"]),
                  e["font-weight"] && (o.fontWeight = e["font-weight"]),
                  e["font-style"] && (o.fontStyle = e["font-style"])),
                "arrow-start" in e && F(d, e["arrow-start"]),
                "arrow-end" in e && F(d, e["arrow-end"], 1),
                (null == e.opacity &&
                  null == e["stroke-width"] &&
                  null == e.fill &&
                  null == e.src &&
                  null == e.stroke &&
                  null == e["stroke-width"] &&
                  null == e["stroke-opacity"] &&
                  null == e["fill-opacity"] &&
                  null == e["stroke-dasharray"] &&
                  null == e["stroke-miterlimit"] &&
                  null == e["stroke-linejoin"] &&
                  null == e["stroke-linecap"]) ||
                  ((o = (o = h.getElementsByTagName(S)) && o[0]) || (o = R(S)),
                  "image" == t.type && e.src && (o.src = e.src),
                  e.fill && (o.on = !0),
                  (null != o.on && "none" != e.fill && null !== e.fill) ||
                    (o.on = !1),
                  o.on &&
                    e.fill &&
                    ((g = _(e.fill).match(j._ISURL))
                      ? (o.parentNode == h && h.removeChild(o),
                        (o.rotate = !0),
                        (o.src = g[1]),
                        (o.type = "tile"),
                        (a = t.getBBox(1)),
                        (o.position = a.x + A + a.y),
                        (t._.fillpos = [a.x, a.y]),
                        j._preload(g[1], function () {
                          t._.fillsize = [this.offsetWidth, this.offsetHeight];
                        }))
                      : ((o.color = j.getRGB(e.fill).hex),
                        (o.src = ""),
                        (o.type = "solid"),
                        j.getRGB(e.fill).error &&
                          (d.type in { circle: 1, ellipse: 1 } ||
                            "r" != _(e.fill).charAt()) &&
                          I(d, e.fill, o) &&
                          ((u.fill = "none"),
                          (u.gradient = e.fill),
                          (o.rotate = !1)))),
                  ("fill-opacity" in e || "opacity" in e) &&
                    ((l =
                      ((+u["fill-opacity"] + 1 || 2) - 1) *
                      ((+u.opacity + 1 || 2) - 1) *
                      ((+j.getRGB(e.fill).o + 1 || 2) - 1)),
                    (l = B(C(l, 0), 1)),
                    (o.opacity = l),
                    o.src && (o.color = "none")),
                  h.appendChild(o),
                  (a = !1),
                  (g =
                    h.getElementsByTagName("stroke") &&
                    h.getElementsByTagName("stroke")[0]) ||
                    (a = g = R("stroke")),
                  ((e.stroke && "none" != e.stroke) ||
                    e["stroke-width"] ||
                    null != e["stroke-opacity"] ||
                    e["stroke-dasharray"] ||
                    e["stroke-miterlimit"] ||
                    e["stroke-linejoin"] ||
                    e["stroke-linecap"]) &&
                    (g.on = !0),
                  ("none" != e.stroke &&
                    null !== e.stroke &&
                    null != g.on &&
                    0 != e.stroke &&
                    0 != e["stroke-width"]) ||
                    (g.on = !1),
                  (o = j.getRGB(e.stroke)),
                  g.on && e.stroke && (g.color = o.hex),
                  (l =
                    ((+u["stroke-opacity"] + 1 || 2) - 1) *
                    ((+u.opacity + 1 || 2) - 1) *
                    ((+o.o + 1 || 2) - 1)),
                  (o = 0.75 * (w(e["stroke-width"]) || 1)),
                  (l = B(C(l, 0), 1)),
                  null == e["stroke-width"] && (o = u["stroke-width"]),
                  e["stroke-width"] && (g.weight = o),
                  o && o < 1 && (l *= o) && (g.weight = 1),
                  (g.opacity = l),
                  e["stroke-linejoin"] &&
                    (g.joinstyle = e["stroke-linejoin"] || "miter"),
                  (g.miterlimit = e["stroke-miterlimit"] || 8),
                  e["stroke-linecap"] &&
                    (g.endcap =
                      "butt" == e["stroke-linecap"]
                        ? "flat"
                        : "square" == e["stroke-linecap"]
                        ? "square"
                        : "round"),
                  e["stroke-dasharray"] &&
                    ((l = {
                      "-": "shortdash",
                      ".": "shortdot",
                      "-.": "shortdashdot",
                      "-..": "shortdashdotdot",
                      ". ": "dot",
                      "- ": "dash",
                      "--": "longdash",
                      "- .": "dashdot",
                      "--.": "longdashdot",
                      "--..": "longdashdotdot",
                    }),
                    (g.dashstyle = l[b](e["stroke-dasharray"])
                      ? l[e["stroke-dasharray"]]
                      : "")),
                  a && h.appendChild(g)),
                "text" == d.type)
              ) {
                d.paper.canvas.style.display = "";
                var h = d.paper.span,
                  g = u.font && u.font.match(/\d+(?:\.\d*)?(?=px)/),
                  c = h.style;
                u.font && (c.font = u.font),
                  u["font-family"] && (c.fontFamily = u["font-family"]),
                  u["font-weight"] && (c.fontWeight = u["font-weight"]),
                  u["font-style"] && (c.fontStyle = u["font-style"]),
                  (g = w(u["font-size"] || (g && g[0])) || 10),
                  (c.fontSize = 100 * g + "px"),
                  d.textpath.string &&
                    (h.innerHTML = _(d.textpath.string)
                      .replace(/</g, "&#60;")
                      .replace(/&/g, "&#38;")
                      .replace(/\n/g, "<br>"));
                h = h.getBoundingClientRect();
                (d.W = u.w = (h.right - h.left) / 100),
                  (d.H = u.h = (h.bottom - h.top) / 100),
                  (d.X = u.x),
                  (d.Y = u.y + d.H / 2),
                  ("x" in e || "y" in e) &&
                    (d.path.v = j.format(
                      "m{0},{1}l{2},{1}",
                      k(u.x * M),
                      k(u.y * M),
                      k(u.x * M) + 1
                    ));
                for (
                  var x = [
                      "x",
                      "y",
                      "text",
                      "font",
                      "font-family",
                      "font-weight",
                      "font-style",
                      "font-size",
                    ],
                    y = 0,
                    m = x.length;
                  y < m;
                  y++
                )
                  if (x[y] in e) {
                    d._.dirty = 1;
                    break;
                  }
                switch (u["text-anchor"]) {
                  case "start":
                    (d.textpath.style["v-text-align"] = "left"),
                      (d.bbx = d.W / 2);
                    break;
                  case "end":
                    (d.textpath.style["v-text-align"] = "right"),
                      (d.bbx = -d.W / 2);
                    break;
                  default:
                    (d.textpath.style["v-text-align"] = "center"), (d.bbx = 0);
                }
                d.textpath.style["v-text-kern"] = !0;
              }
            }
            function u(t, e) {
              ((this[0] = this.node = t).raphael = !0),
                (this.id = j._oid++),
                (t.raphaelid = this.id),
                (this.X = 0),
                (this.Y = 0),
                (this.attrs = {}),
                (this.paper = e),
                (this.matrix = j.matrix()),
                (this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  dx: 0,
                  dy: 0,
                  deg: 0,
                  dirty: 1,
                  dirtyT: 1,
                }),
                e.bottom || (e.bottom = this),
                (this.prev = e.top),
                e.top && (e.top.next = this),
                ((e.top = this).next = null);
            }
            var R,
              I = function (t, e, r) {
                t.attrs = t.attrs || {};
                t.attrs;
                var i = Math.pow,
                  n = "linear",
                  s = ".5 .5";
                if (
                  ((t.attrs.gradient = e),
                  (e = (e = _(e).replace(
                    j._radial_gradient,
                    function (t, e, r) {
                      return (
                        (n = "radial"),
                        e &&
                          r &&
                          ((e = w(e)),
                          (r = w(r)),
                          0.25 < i(e - 0.5, 2) + i(r - 0.5, 2) &&
                            (r =
                              c.sqrt(0.25 - i(e - 0.5, 2)) *
                                (2 * (0.5 < r) - 1) +
                              0.5),
                          (s = e + A + r)),
                        ""
                      );
                    }
                  )).split(/\s*\-\s*/)),
                  "linear" == n)
                ) {
                  var a = e.shift(),
                    a = -w(a);
                  if (isNaN(a)) return null;
                }
                var o = j._parseDots(e);
                if (!o) return null;
                if (((t = t.shape || t.node), o.length)) {
                  t.removeChild(r),
                    (r.on = !0),
                    (r.method = "none"),
                    (r.color = o[0].color),
                    (r.color2 = o[o.length - 1].color);
                  for (var l = [], h = 0, u = o.length; h < u; h++)
                    o[h].offset && l.push(o[h].offset + A + o[h].color);
                  (r.colors = l.length ? l.join() : "0% " + r.color),
                    "radial" == n
                      ? ((r.type = "gradientTitle"),
                        (r.focus = "100%"),
                        (r.focussize = "0 0"),
                        (r.focusposition = s),
                        (r.angle = 0))
                      : ((r.type = "gradient"), (r.angle = (270 - a) % 360)),
                    t.appendChild(r);
                }
                return 1;
              },
              t = j.el;
            ((u.prototype = t).constructor = u),
              (t.transform = function (t) {
                if (null == t) return this._.transform;
                var e,
                  r = this.paper._viewBoxShift,
                  i = r
                    ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy]
                    : "";
                r &&
                  (e = t =
                    _(t).replace(/\.{3}|\u2026/g, this._.transform || "")),
                  j._extractTransform(this, i + t);
                var n = this.matrix.clone(),
                  s = this.skew,
                  a = this.node,
                  o = ~_(this.attrs.fill).indexOf("-"),
                  r = !_(this.attrs.fill).indexOf("url(");
                return (
                  n.translate(1, 1),
                  r || o || "image" == this.type
                    ? ((s.matrix = "1 0 0 1"),
                      (s.offset = "0 0"),
                      (i = n.split()),
                      (o && i.noRotation) || !i.isSimple
                        ? ((a.style.filter = n.toFilter()),
                          (t = this.getBBox()),
                          (r = this.getBBox(1)),
                          (o = t.x - r.x),
                          (r = t.y - r.y),
                          (a.coordorigin = o * -M + A + r * -M),
                          v(this, 1, 1, o, r, 0))
                        : ((a.style.filter = ""),
                          v(this, i.scalex, i.scaley, i.dx, i.dy, i.rotate)))
                    : ((a.style.filter = ""),
                      (s.matrix = _(n)),
                      (s.offset = n.offset())),
                  e && (this._.transform = e),
                  this
                );
              }),
              (t.rotate = function (t, e, r) {
                return this.removed
                  ? this
                  : null != t
                  ? ((t = _(t).split(T)).length - 1 &&
                      ((e = w(t[1])), (r = w(t[2]))),
                    (t = w(t[0])),
                    null == r && (e = r),
                    (null != e && null != r) ||
                      ((e = (i = this.getBBox(1)).x + i.width / 2),
                      (r = i.y + i.height / 2)),
                    (this._.dirtyT = 1),
                    this.transform(this._.transform.concat([["r", t, e, r]])),
                    this)
                  : void 0;
                var i;
              }),
              (t.translate = function (t, e) {
                return (
                  this.removed ||
                    ((t = _(t).split(T)).length - 1 && (e = w(t[1])),
                    (t = w(t[0]) || 0),
                    (e = +e || 0),
                    this._.bbox && ((this._.bbox.x += t), (this._.bbox.y += e)),
                    this.transform(this._.transform.concat([["t", t, e]]))),
                  this
                );
              }),
              (t.scale = function (t, e, r, i) {
                return (
                  this.removed ||
                    ((t = _(t).split(T)).length - 1 &&
                      ((e = w(t[1])),
                      (r = w(t[2])),
                      (i = w(t[3])),
                      isNaN(r) && (r = null),
                      isNaN(i) && (i = null)),
                    (t = w(t[0])),
                    null == e && (e = t),
                    null == i && (r = i),
                    (null != r && null != i) || (n = this.getBBox(1)),
                    (r = null == r ? n.x + n.width / 2 : r),
                    (i = null == i ? n.y + n.height / 2 : i),
                    this.transform(
                      this._.transform.concat([["s", t, e, r, i]])
                    ),
                    (this._.dirtyT = 1)),
                  this
                );
                var n;
              }),
              (t.hide = function () {
                return this.removed || (this.node.style.display = "none"), this;
              }),
              (t.show = function () {
                return this.removed || (this.node.style.display = ""), this;
              }),
              (t._getBBox = function () {
                return this.removed
                  ? {}
                  : {
                      x: this.X + (this.bbx || 0) - this.W / 2,
                      y: this.Y - this.H,
                      width: this.W,
                      height: this.H,
                    };
              }),
              (t.remove = function () {
                if (!this.removed && this.node.parentNode) {
                  for (var t in (this.paper.__set__ &&
                    this.paper.__set__.exclude(this),
                  j.eve.unbind("raphael.*.*." + this.id),
                  j._tear(this, this.paper),
                  this.node.parentNode.removeChild(this.node),
                  this.shape && this.shape.parentNode.removeChild(this.shape),
                  this))
                    this[t] =
                      "function" == typeof this[t]
                        ? j._removedFactory(t)
                        : null;
                  this.removed = !0;
                }
              }),
              (t.attr = function (t, e) {
                if (this.removed) return this;
                if (null == t) {
                  var r,
                    i = {};
                  for (r in this.attrs)
                    this.attrs[b](r) && (i[r] = this.attrs[r]);
                  return (
                    i.gradient &&
                      "none" == i.fill &&
                      (i.fill = i.gradient) &&
                      delete i.gradient,
                    (i.transform = this._.transform),
                    i
                  );
                }
                if (null == e && j.is(t, "string")) {
                  if (
                    t == S &&
                    "none" == this.attrs.fill &&
                    this.attrs.gradient
                  )
                    return this.attrs.gradient;
                  for (
                    var n = t.split(T), s = {}, a = 0, o = n.length;
                    a < o;
                    a++
                  )
                    (t = n[a]) in this.attrs
                      ? (s[t] = this.attrs[t])
                      : j.is(this.paper.customAttributes[t], "function")
                      ? (s[t] = this.paper.customAttributes[t].def)
                      : (s[t] = j._availableAttrs[t]);
                  return o - 1 ? s : s[n[0]];
                }
                if (this.attrs && null == e && j.is(t, "array")) {
                  for (s = {}, a = 0, o = t.length; a < o; a++)
                    s[t[a]] = this.attr(t[a]);
                  return s;
                }
                var l, h;
                for (h in (null != e && ((l = {})[t] = e),
                null == e && j.is(t, "object") && (l = t),
                l))
                  f("raphael.attr." + h + "." + this.id, this, l[h]);
                if (l) {
                  for (h in this.paper.customAttributes)
                    if (
                      this.paper.customAttributes[b](h) &&
                      l[b](h) &&
                      j.is(this.paper.customAttributes[h], "function")
                    ) {
                      var u,
                        c = this.paper.customAttributes[h].apply(
                          this,
                          [].concat(l[h])
                        );
                      for (u in ((this.attrs[h] = l[h]), c))
                        c[b](u) && (l[u] = c[u]);
                    }
                  l.text &&
                    "text" == this.type &&
                    (this.textpath.string = l.text),
                    p(this, l);
                }
                return this;
              }),
              (t.toFront = function () {
                return (
                  this.removed || this.node.parentNode.appendChild(this.node),
                  this.paper &&
                    this.paper.top != this &&
                    j._tofront(this, this.paper),
                  this
                );
              }),
              (t.toBack = function () {
                return (
                  this.removed ||
                    (this.node.parentNode.firstChild != this.node &&
                      (this.node.parentNode.insertBefore(
                        this.node,
                        this.node.parentNode.firstChild
                      ),
                      j._toback(this, this.paper))),
                  this
                );
              }),
              (t.insertAfter = function (t) {
                return (
                  this.removed ||
                    (t.constructor == j.st.constructor && (t = t[t.length - 1]),
                    t.node.nextSibling
                      ? t.node.parentNode.insertBefore(
                          this.node,
                          t.node.nextSibling
                        )
                      : t.node.parentNode.appendChild(this.node),
                    j._insertafter(this, t, this.paper)),
                  this
                );
              }),
              (t.insertBefore = function (t) {
                return (
                  this.removed ||
                    (t.constructor == j.st.constructor && (t = t[0]),
                    t.node.parentNode.insertBefore(this.node, t.node),
                    j._insertbefore(this, t, this.paper)),
                  this
                );
              }),
              (t.blur = function (t) {
                var e = this.node.runtimeStyle,
                  r = (r = e.filter).replace(i, "");
                return (
                  0 != +t
                    ? ((this.attrs.blur = t),
                      (e.filter =
                        r +
                        A +
                        " progid:DXImageTransform.Microsoft.Blur(pixelradius=" +
                        (+t || 1.5) +
                        ")"),
                      (e.margin = j.format("-{0}px 0 0 -{0}px", k(+t || 1.5))))
                    : ((e.filter = r), (e.margin = 0), delete this.attrs.blur),
                  this
                );
              }),
              (j._engine.path = function (t, e) {
                var r = R("shape");
                (r.style.cssText = h),
                  (r.coordsize = M + A + M),
                  (r.coordorigin = e.coordorigin);
                var i = new u(r, e),
                  n = { fill: "none", stroke: "#000" };
                t && (n.path = t),
                  (i.type = "path"),
                  (i.path = []),
                  (i.Path = ""),
                  p(i, n),
                  e.canvas.appendChild(r);
                e = R("skew");
                return (
                  (e.on = !0),
                  r.appendChild(e),
                  (i.skew = e),
                  i.transform(""),
                  i
                );
              }),
              (j._engine.rect = function (t, e, r, i, n, s) {
                var a = j._rectPath(e, r, i, n, s),
                  o = t.path(a),
                  t = o.attrs;
                return (
                  (o.X = t.x = e),
                  (o.Y = t.y = r),
                  (o.W = t.width = i),
                  (o.H = t.height = n),
                  (t.r = s),
                  (t.path = a),
                  (o.type = "rect"),
                  o
                );
              }),
              (j._engine.ellipse = function (t, e, r, i, n) {
                (t = t.path()), t.attrs;
                return (
                  (t.X = e - i),
                  (t.Y = r - n),
                  (t.W = 2 * i),
                  (t.H = 2 * n),
                  (t.type = "ellipse"),
                  p(t, { cx: e, cy: r, rx: i, ry: n }),
                  t
                );
              }),
              (j._engine.circle = function (t, e, r, i) {
                (t = t.path()), t.attrs;
                return (
                  (t.X = e - i),
                  (t.Y = r - i),
                  (t.W = t.H = 2 * i),
                  (t.type = "circle"),
                  p(t, { cx: e, cy: r, r: i }),
                  t
                );
              }),
              (j._engine.image = function (t, e, r, i, n, s) {
                var a = j._rectPath(r, i, n, s),
                  o = t.path(a).attr({ stroke: "none" }),
                  l = o.attrs,
                  h = o.node,
                  t = h.getElementsByTagName(S)[0];
                return (
                  (l.src = e),
                  (o.X = l.x = r),
                  (o.Y = l.y = i),
                  (o.W = l.width = n),
                  (o.H = l.height = s),
                  (l.path = a),
                  (o.type = "image"),
                  t.parentNode == h && h.removeChild(t),
                  (t.rotate = !0),
                  (t.src = e),
                  (t.type = "tile"),
                  (o._.fillpos = [r, i]),
                  (o._.fillsize = [n, s]),
                  h.appendChild(t),
                  v(o, 1, 1, 0, 0, 0),
                  o
                );
              }),
              (j._engine.text = function (t, e, r, i) {
                var n = R("shape"),
                  s = R("path"),
                  a = R("textpath");
                (e = e || 0),
                  (r = r || 0),
                  (i = i || ""),
                  (s.v = j.format(
                    "m{0},{1}l{2},{1}",
                    k(e * M),
                    k(r * M),
                    k(e * M) + 1
                  )),
                  (s.textpathok = !0),
                  (a.string = _(i)),
                  (a.on = !0),
                  (n.style.cssText = h),
                  (n.coordsize = M + A + M),
                  (n.coordorigin = "0 0");
                var o = new u(n, t),
                  l = {
                    fill: "#000",
                    stroke: "none",
                    font: j._availableAttrs.font,
                    text: i,
                  };
                (o.shape = n),
                  (o.path = s),
                  (o.textpath = a),
                  (o.type = "text"),
                  (o.attrs.text = _(i)),
                  (o.attrs.x = e),
                  (o.attrs.y = r),
                  (o.attrs.w = 1),
                  (o.attrs.h = 1),
                  p(o, l),
                  n.appendChild(a),
                  n.appendChild(s),
                  t.canvas.appendChild(n);
                t = R("skew");
                return (
                  (t.on = !0),
                  n.appendChild(t),
                  (o.skew = t),
                  o.transform(""),
                  o
                );
              }),
              (j._engine.setSize = function (t, e) {
                var r = this.canvas.style;
                return (
                  (this.width = t) == +t && (t += "px"),
                  (this.height = e) == +e && (e += "px"),
                  (r.width = t),
                  (r.height = e),
                  (r.clip = "rect(0 " + t + " " + e + " 0)"),
                  this._viewBox &&
                    j._engine.setViewBox.apply(this, this._viewBox),
                  this
                );
              }),
              (j._engine.setViewBox = function (t, e, r, i, n) {
                j.eve("raphael.setViewBox", this, this._viewBox, [
                  t,
                  e,
                  r,
                  i,
                  n,
                ]);
                var s,
                  a = this.width,
                  o = this.height,
                  l = 1 / C(r / a, i / o);
                return (
                  n &&
                    (r * (s = o / i) < a && (t -= (a - r * s) / 2 / s),
                    i * (a = a / r) < o && (e -= (o - i * a) / 2 / a)),
                  (this._viewBox = [t, e, r, i, !!n]),
                  (this._viewBoxShift = { dx: -t, dy: -e, scale: l }),
                  this.forEach(function (t) {
                    t.transform("...");
                  }),
                  this
                );
              }),
              (j._engine.initWin = function (t) {
                var e = t.document;
                e.createStyleSheet().addRule(
                  ".rvml",
                  "behavior:url(#default#VML)"
                );
                try {
                  e.namespaces.rvml ||
                    e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                    (R = function (t) {
                      return e.createElement("<rvml:" + t + ' class="rvml">');
                    });
                } catch (t) {
                  R = function (t) {
                    return e.createElement(
                      "<" +
                        t +
                        ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'
                    );
                  };
                }
              }),
              j._engine.initWin(j._g.win),
              (j._engine.create = function () {
                var t = j._getContainer.apply(0, arguments),
                  e = t.container,
                  r = t.height,
                  i = t.width,
                  n = t.x,
                  s = t.y;
                if (!e) throw new Error("VML container not found.");
                var a = new j._Paper(),
                  o = (a.canvas = j._g.doc.createElement("div")),
                  t = o.style,
                  n = n || 0,
                  s = s || 0,
                  i = i || 512,
                  r = r || 342;
                return (
                  (a.width = i) == +i && (i += "px"),
                  (a.height = r) == +r && (r += "px"),
                  (a.coordsize = 216e5 + A + 216e5),
                  (a.coordorigin = "0 0"),
                  (a.span = j._g.doc.createElement("span")),
                  (a.span.style.cssText =
                    "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;"),
                  o.appendChild(a.span),
                  (t.cssText = j.format(
                    "top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",
                    i,
                    r
                  )),
                  1 == e
                    ? (j._g.doc.body.appendChild(o),
                      (t.left = n + "px"),
                      (t.top = s + "px"),
                      (t.position = "absolute"))
                    : e.firstChild
                    ? e.insertBefore(o, e.firstChild)
                    : e.appendChild(o),
                  (a.renderfix = function () {}),
                  a
                );
              }),
              (j.prototype.clear = function () {
                j.eve("raphael.clear", this),
                  (this.canvas.innerHTML = ""),
                  (this.span = j._g.doc.createElement("span")),
                  (this.span.style.cssText =
                    "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"),
                  this.canvas.appendChild(this.span),
                  (this.bottom = this.top = null);
              }),
              (j.prototype.remove = function () {
                for (var t in (j.eve("raphael.remove", this),
                this.canvas.parentNode.removeChild(this.canvas),
                this))
                  this[t] =
                    "function" == typeof this[t] ? j._removedFactory(t) : null;
                return !0;
              });
            var e,
              r = j.st;
            for (e in t)
              t[b](e) &&
                !r[b](e) &&
                (r[e] = (function (r) {
                  return function () {
                    var e = arguments;
                    return this.forEach(function (t) {
                      t[r].apply(t, e);
                    });
                  };
                })(e));
          }
        })(),
        r.was ? (d.win.Raphael = j) : (t.Raphael = j);
    })(t, t.eve);
  })(this);

/* Map path and default settings - you can edit this */
var simplemaps_usmap_mapinfo = {
  map_name: "us",
  initial_view: { x: -20, y: -10, x2: 980, y2: 606 },
  state_bbox_array: {
    AK: { x: 7, y: 434, x2: 208, y2: 585 },
    MA: { x: 847, y: 143, x2: 905, y2: 175 },
    MN: { x: 469, y: 55, x2: 582, y2: 184 },
    MT: { x: 194, y: 30, x2: 371, y2: 145 },
    ND: { x: 364, y: 57, x2: 479, y2: 130 },
    ID: { x: 149, y: 27, x2: 253, y2: 195 },
    WA: { x: 69, y: 5, x2: 185, y2: 91 },
    AZ: { x: 141, y: 293, x2: 260, y2: 431 },
    CA: { x: 23, y: 144, x2: 161, y2: 382 },
    CO: { x: 260, y: 222, x2: 387, y2: 321 },
    NV: { x: 85, y: 164, x2: 196, y2: 333 },
    NM: { x: 242, y: 308, x2: 365, y2: 433 },
    OR: { x: 36, y: 58, x2: 176, y2: 176 },
    UT: { x: 175, y: 186, x2: 273, y2: 308 },
    WY: { x: 240, y: 131, x2: 362, y2: 232 },
    AR: { x: 510, y: 333, x2: 598, y2: 412 },
    IA: { x: 476, y: 182, x2: 582, y2: 250 },
    KS: { x: 381, y: 256, x2: 510, y2: 325 },
    MO: { x: 490, y: 245, x2: 606, y2: 345 },
    NE: { x: 354, y: 188, x2: 498, y2: 260 },
    OK: { x: 364, y: 320, x2: 514, y2: 398 },
    SD: { x: 358, y: 124, x2: 480, y2: 205 },
    LA: { x: 522, y: 410, x2: 620, y2: 495 },
    TX: { x: 288, y: 331, x2: 532, y2: 570 },
    CT: { x: 848, y: 165, x2: 877, y2: 195 },
    NH: { x: 856, y: 93, x2: 885, y2: 153 },
    RI: { x: 874, y: 164, x2: 888, y2: 181 },
    VT: { x: 834, y: 101, x2: 863, y2: 156 },
    AL: { x: 625, y: 359, x2: 692, y2: 467 },
    FL: { x: 643, y: 441, x2: 802, y2: 563 },
    GA: { x: 671, y: 353, x2: 767, y2: 451 },
    MS: { x: 567, y: 363, x2: 630, y2: 470 },
    SC: { x: 712, y: 345, x2: 800, y2: 411 },
    IL: { x: 561, y: 200, x2: 630, y2: 322 },
    IN: { x: 622, y: 211, x2: 676, y2: 303 },
    KY: { x: 601, y: 267, x2: 728, y2: 332 },
    NC: { x: 694, y: 298, x2: 842, y2: 364 },
    OH: { x: 668, y: 196, x2: 741, y2: 278 },
    TN: { x: 588, y: 315, x2: 736, y2: 366 },
    VA: { x: 701, y: 244, x2: 837, y2: 320 },
    WI: { x: 535, y: 106, x2: 625, y2: 203 },
    WV: { x: 714, y: 225, x2: 792, y2: 302 },
    DE: { x: 822, y: 227, x2: 840, y2: 256 },
    DC: { x: 804, y: 250, x2: 808, y2: 254 },
    MD: { x: 762, y: 230, x2: 840, y2: 267 },
    NJ: { x: 827, y: 191, x2: 849, y2: 244 },
    NY: { x: 747, y: 109, x2: 878, y2: 206 },
    PA: { x: 736, y: 180, x2: 837, y2: 245 },
    ME: { x: 866, y: 38, x2: 930, y2: 139 },
    MI: { x: 571, y: 77, x2: 703, y2: 215 },
    HI: { x: 233, y: 511, x2: 347, y2: 585 },
    PR: { x: 587, y: 512, x2: 658, y2: 531 },
    GU: { x: 509, y: 516, x2: 540, y2: 549 },
    VI: { x: 674, y: 499, x2: 714, y2: 538 },
    MP: { x: 572, y: 522, x2: 612, y2: 586 },
    AS: { x: 663, y: 557, x2: 701, y2: 574 },
  },
  paths: {
    AK: "m 7.246 581.34 0.001 -0.568 -0.22 0.084 0.21 0.484 z m 5.903 -0.294 0.312 -0.344 -0.259 -0.179 -0.052 0.523 z m 4.482 1.036 0.264 -0.127 -0.087 -0.045 -0.178 0.172 z m -3.68 -1.984 -0.036 -0.481 -0.262 -0.004 0.298 0.486 z m 7.753 1.397 -0.133 0.085 0.043 0.044 0.089 -0.13 z m -6.05 -1.587 0.142 -0.653 -0.132 0.041 -0.001 0.611 z m 9.606 -2.329 -2.01 0.316 -4.211 3.599 1.574 -0.105 4.93 -2.189 -0.279 -1.621 z m 9.794 -0.491 0.048 -0.261 -0.173 -0.09 0.125 0.352 z m -2.911 -0.966 -2.236 0.487 0.217 2.712 -2.024 0.883 5.612 -1.173 0.607 -2.305 -1.759 0.669 -0.415 -1.274 z m 7.233 1.126 -0.783 -0.232 0.517 0.446 0.266 -0.214 z m 1.572 0.027 -1.262 -0.283 -0.178 0.172 1.44 0.112 z m -4.298 -1.601 -1.269 0.11 2.132 0.516 -0.863 -0.626 z m 5.311 1.094 -0.128 -0.177 -0.483 0.123 0.611 0.054 z m -3.428 -1.412 -0.477 -0.226 0.021 1.355 0.456 -1.128 z m 14.586 2.91 -0.086 -0.089 -0.175 -0.003 0.261 0.092 z m 0.308 -0.126 0.002 -0.131 -0.215 -0.178 0.213 0.309 z m -1.953 -0.775 0.254 0.485 -0.041 -0.132 -0.213 -0.353 z m 1.048 0.018 -1.043 -0.323 1.251 0.938 -0.208 -0.615 z m 1.551 -1.285 -0.089 0.086 -0.0001 0.087 0.09 -0.173 z m 13.553 2.02 -0.078 -0.569 -0.176 0.084 0.254 0.485 z m 124.43 7.07 -0.17 -0.309 0.04 0.219 0.13 0.089 z m -139.86 -11.74 -0.043 -0.044 -0.044 0.043 0.087 0.002 z m 143.47 10.271 0.34 0.574 0.218 0.003 -0.558 -0.577 z m -126.58 -6.842 -0.09 0.173 -0.05 0.392 0.141 -0.566 z m -14.203 -2.335 0.324 -1.087 -0.174 -0.047 -0.15 1.133 z m 147.88 7.986 -1.098 0.375 0.776 0.625 0.323 -0.999 z m -145.73 -8.649 -0.126 -0.308 0.082 0.307 0.044 0.0001 z m -8.604 -2.722 -2.939 0.693 -2.777 1.482 0.139 2.143 2.904 -1.218 3.627 -2.691 -0.954 -0.409 z m 20.495 4.844 -0.666 0.644 0.614 -0.121 0.052 -0.523 z m 134.02 5.919 -0.122 -0.526 -0.178 0.172 0.3 0.355 z m -144.93 -9.291 -0.828 -0.145 0.773 0.799 0.055 -0.654 z m 137.2 9.03 -0.352 0.125 0.07 1.05 0.282 -1.175 z m -135.32 -9.13 -0.438 0.08 0.431 0.357 0.007 -0.437 z m 8.343 2.674 -0.306 -0.006 -0.215 -0.222 0.52 0.227 z m -9.346 -2.778 -0.519 -0.315 0.169 0.352 0.35 -0.038 z m 7.663 1.527 -0.967 0.333 -0.864 1.995 1.83 -2.328 z m 126.23 6.705 -0.233 0.87 0.62 -0.514 -0.387 -0.356 z m -129.66 -8.161 0.589 1.364 0.246 -1.656 -0.835 0.292 z m -10.05 -2.659 0.922 -0.29 -0.087 -0.045 -0.836 0.335 z m -1.123 -0.762 -0.171 -0.221 -0.045 0.087 0.216 0.135 z m 140.97 10.753 -0.171 -0.221 -0.181 0.346 0.352 -0.125 z m -127.43 -8.04 -0.304 -0.136 -0.267 0.301 0.571 -0.165 z m 126.21 8.02 0.229 -0.608 -0.216 -0.135 -0.012 0.742 z m -0.815 -0.887 -0.444 0.429 0.563 0.315 -0.119 -0.745 z m -120.47 -8.837 -0.301 -0.311 -0.0001 0.088 0.302 0.223 z m 120.55 6.566 0.865 0.539 0.487 -0.385 -1.352 -0.154 z m 1.495 -0.587 -0.354 0.256 0.472 0.488 -0.119 -0.745 z m -2.712 0.217 -0.121 -0.614 -0.354 0.256 0.475 0.357 z m 12.263 -1.847 -2.432 4.328 2.818 1.314 1.241 -1.071 -0.192 -1.576 -1.435 -2.995 z m -138.62 -8.01 -0.13 -0.046 -0.088 0.042 0.218 0.003 z m 128.23 7.219 -1.282 0.896 0.02 1.398 1.262 -2.294 z m -109.01 -4.582 0.009 -0.568 -0.135 0.26 0.126 0.308 z m 113.21 3.909 -0.409 0.954 2.02 -0.665 -1.612 -0.289 z m -5.228 -0.874 1.431 5.834 0.91 0.452 3.09 3.328 2.13 3.225 1.174 0.326 -1.226 -2.467 0.3 -2.267 -0.499 -1.494 -3.073 -4.289 -2.186 -2.483 -2.05 -0.165 z m -112.58 -5.253 -0.08 -0.395 -0.22 0.084 0.301 0.311 z m 116.88 4.146 -0.903 1.732 1.012 -0.42 -0.109 -1.312 z m -112.97 -5.696 -0.654 -0.098 -0.66 0.295 1.314 -0.196 z m 11.897 1.729 -0.538 0.821 0.275 -0.738 0.264 -0.083 z m 1.743 0.248 -1.049 0.026 0.469 0.707 0.58 -0.733 z m -70.63 -16.476 1.126 0.587 -0.17 -0.265 -0.956 -0.322 z m 46.37 11.744 0.09 -0.13 -0.133 0.085 0.043 0.044 z m 0.352 -0.125 0.176 -0.085 0.0001 -0.044 -0.177 0.128 z m 121.83 5.67 0.089 2.492 1.32 -0.546 -1.409 -1.946 z m -118.58 -7.06 0.133 -0.085 -0.044 -0.0001 -0.089 0.086 z m 113.47 6.928 -1.927 0.273 1.369 1.727 0.066 3.846 1.414 -0.981 -0.131 -2.58 -0.792 -2.285 z m 0.861 -1.864 -0.293 1.83 2.223 2.877 0.134 -2.794 2.034 1.126 -0.744 -2.503 -0.838 0.466 -2.517 -1 z m -8.331 -0.795 -1.129 2.209 1.289 -1.333 -0.16 -0.876 z m -94.35 -5.821 -0.084 -0.176 0.042 0.175 0.044 0.0001 z m 11.169 0.886 -0.212 -0.397 0.122 0.526 0.09 -0.13 z m 83.78 3.153 0.524 5.208 2.596 4.106 0.272 -5.806 -1.778 -3.394 -1.614 -0.114 z m -76.909 -6.62 -0.397 0.255 0.649 0.36 -0.252 -0.616 z m -1.53 0.062 0.181 -0.39 -0.437 -0.008 0.255 0.397 z m -1.134 -0.106 -0.362 0.737 -3.043 -0.925 -0.389 4.974 -1.215 -3.122 -2.242 0.836 -1.072 1.38 0.907 3.248 1.393 0.285 1.553 -1.416 -1.883 2.895 0.604 0.447 2.036 -1.582 -0.642 -0.797 1.854 -1.148 2.01 -0.141 2.99 -1.129 1.03 -1.512 -1.478 -0.418 0.762 -1.167 -2.815 -1.445 z m 75.11 2.134 -0.775 -0.668 -0.014 0.786 0.788 -0.118 z m -75.78 -3.674 0.078 0.569 0.778 0.494 -0.856 -1.063 z m 78.43 1.666 -2.548 0.831 0.708 2.065 -0.67 0.863 2.531 2.751 -0.002 -2.49 3.37 2.241 -3.817 -4.214 2.988 1.579 0.22 -2.705 -2.781 -0.92 z m -1.525 -0.244 -0.258 -0.266 -0.133 0.129 0.391 0.138 z m 7.479 -0.53 -0.865 -0.539 -0.317 0.694 1.182 -0.155 z m -5.239 -0.175 -0.782 -0.232 -0.003 0.175 0.785 0.057 z m 2.805 -0.521 2.52 8.649 0.682 -4.183 1.745 0.16 -1.564 -3.128 -2.275 0.18 -1.108 -1.679 z m -78.892 -2.984 -3.049 2.046 1.153 1.592 3.727 -0.811 0.296 -2 -2.127 -0.822 z m -32.13 -6.524 -0.085 -0.133 -0.003 0.175 0.088 -0.042 z m -1.257 -0.589 -0.077 -0.613 -0.047 0.174 0.124 0.439 z m 36.509 3.365 -0.264 0.127 -0.002 0.131 0.266 -0.258 z m -1.132 -0.237 -0.129 -0.133 -0.313 0.432 0.442 -0.298 z m 2.899 -0.912 -0.303 -0.18 -0.002 0.131 0.305 0.049 z m 0.962 -0.027 -0.303 -0.18 -0.045 0.087 0.348 0.093 z m -1.521 -0.462 -0.435 -0.095 -0.046 0.13 0.481 -0.036 z m 23.987 -0.165 0.18 -0.303 -0.266 0.214 0.086 0.089 z m 7.829 -3.145 1.643 -1.589 -0.571 0.209 -1.072 1.38 z m -14.645 -2.037 0.531 -0.384 0.226 -0.477 -0.757 0.861 z m 0.243 -1.438 -0.574 0.384 0.876 -0.16 -0.302 -0.224 z m -19.76 -1.773 -0.078 -0.569 -0.218 -0.003 0.296 0.573 z m 19.19 1.676 -0.487 0.385 -0.358 0.518 0.845 -0.903 z m 13.455 0.007 0.086 0.089 0.132 -0.041 -0.218 -0.047 z m 0.654 0.055 -0.304 -0.093 0.042 0.088 0.262 0.004 z m -1.525 -0.244 0.129 0.133 0.002 -0.131 -0.131 -0.002 z m -9.91 -0.428 0.49 -0.56 -0.577 0.558 0.087 0.002 z m 7.525 -0.66 -0.044 -0.0001 0 0 0.044 0.0001 z m -5.892 -0.361 -3.487 4.703 4.265 -4.21 -0.778 -0.494 z m -3.891 0.153 -0.21 -0.528 -0.266 0.258 0.476 0.27 z m 9.263 -0.063 -0.173 -0.09 0.086 0.089 0.087 0.002 z m 3.134 0.664 0.144 -0.784 -0.354 0.256 0.21 0.528 z m -88.52 -14.723 -5.853 -0.055 2.298 3.621 1.692 0.727 2.966 0.268 -1.103 -4.562 z m 82.52 13.18 0.159 0.92 0.627 -0.907 -0.786 -0.014 z m -4.882 -0.65 -0.657 2.698 0.858 -1.689 -0.202 -1.01 z m -105.24 -23.566 0.095 -0.435 0.002 -0.087 -0.096 0.523 z m 104.31 21.541 0.037 0.394 0.262 0.004 -0.299 -0.398 z m -0.751 0.512 -0.16 -0.876 -0.31 0.257 0.47 0.62 z m 5.913 -0.906 0.009 -0.48 -0.353 0.213 0.345 0.268 z m -5.438 -1.358 -0.063 1.178 0.45 -0.779 -0.386 -0.4 z m -9.09 -2.512 0.138 -0.391 -0.088 -0.002 -0.05 0.392 z m -63.34 -18.581 0.275 -0.738 -0.133 0.085 -0.142 0.653 z m 0.501 -1.215 -0.259 -0.179 -0.002 0.131 0.261 0.048 z m 5.428 -3.273 0.003 -0.175 -0.043 -0.044 0.04 0.219 z m 0.053 -0.567 -0.083 -0.264 -0.044 0.043 0.127 0.221 z m 2.285 -3.413 0.045 -0.087 -0.219 0.04 0.174 0.047 z m 0.74 0.187 -0.564 -0.228 0.041 0.132 0.523 0.096 z m -0.777 -0.537 0.003 -0.218 -0.178 0.215 0.175 0.003 z m -20.13 -5.537 -0.121 -0.614 -0.169 -0.352 0.29 0.966 z m 1.963 -2.457 0.042 0.088 0.173 0.09 -0.215 -0.178 z m -3.531 -0.452 -0.941 -1.195 0.772 0.887 0.17 0.309 z m -2.063 -2 -0.132 0.041 0.348 0.093 -0.216 -0.135 z m 0.33 -1.436 -0.043 -0.044 0.043 0.044 0 0 z m -0.259 -0.179 -0.043 -0.0001 0.26 0.135 -0.216 -0.135 z m 33.435 9.561 -1.4 0.108 0.822 0.451 0.577 -0.558 z m -34.883 -11.769 -1.528 2.552 0.631 1.452 3.142 0.227 2.946 4.069 4.367 0.117 -0.592 -1.146 -3.844 -2.642 -0.878 -2.33 -2.106 0.533 -2.137 -2.832 z m 22.27 0.592 0.047 -0.218 -0.088 0.042 0.042 0.175 z m -6.536 -14 -0.173 -0.134 0.084 0.176 0.088 -0.042 z m 3.824 1.244 0.397 -0.212 -0.131 -0.002 -0.266 0.214 z m 2.68 -0.872 0.352 -0.125 1.188 -0.504 -1.54 0.629 z m 4.658 -1.626 0.222 -0.215 -0.309 0.17 0.087 0.045 z m 0.658 -0.164 0.706 -0.425 -0.659 0.207 -0.047 0.218 z m 1.892 -0.798 -0.657 0.12 0.042 0.088 0.615 -0.208 z m 0.833 -0.161 0 0 -0.087 -0.002 0.087 0.002 z m 87.26 -19.07 -0.428 -0.531 -0.907 -0.627 1.335 1.158 z m -71.888 -9.03 1.296 -1.726 -0.71 0.643 -0.586 1.082 z m 1.738 -2.024 0.625 -0.776 -0.309 0.17 -0.316 0.606 z m 0.936 -1.12 0.844 -0.86 -0.53 0.341 -0.315 0.519 z m 43.727 2.787 0.687 0.711 0.306 0.006 -0.993 -0.716 z m -21.958 -11.378 -4.216 3.905 -1.717 0.801 -3.359 -0.318 -0.117 -0.832 -3.437 1.734 0.256 2.975 -0.915 -0.146 1.043 -2.298 -5.15 2.273 -1.6 -0.988 -4.748 4.376 -1.948 4.118 -3.886 2.469 -3.1 -0.096 -3.391 -1.018 -3.308 4.488 2.829 3.237 3.881 5.657 0.227 4.678 7.07 2.74 -1.313 2.774 1.193 1.811 1.191 -0.679 3.12 1.494 -2.892 0.519 -2.988 -1.579 1.219 2.86 -2.385 1.533 -7.895 -3.365 2.089 -2.106 -1.458 -1.641 -5.96 1.08 -8.922 3.17 0.687 3.245 4.234 2.823 -2.454 0.439 0.257 2.931 2.997 3.633 1.382 0.941 2.936 -0.519 3.769 1.898 1.566 0.376 -0.109 1.265 1.555 -1.547 2.635 -0.83 0.583 -0.908 1.474 0.68 0.98 -1.119 0.956 2.899 -1.152 0.985 -1.17 -0.544 -0.893 1.165 1.309 0.066 0.487 4.814 -0.774 1.866 -5.766 -0.053 0.035 0.525 -3.055 2.439 -3.847 0.154 -0.268 -2.233 -1.747 -0.029 -0.026 1.529 -1.748 0.014 -0.955 4.833 -0.811 -1.106 -4.473 3.595 0.326 1.403 -1.613 -0.202 -0.111 6.595 2.256 0.955 -0.97 0.552 2.286 1.742 4.126 1.424 -1.252 1.726 -0.059 -1.661 -1.752 0.276 -1.488 -2.471 -3.796 2.295 1.826 0.511 -0.721 1.299 3.697 6.178 3.446 0.32 2.412 -0.527 1.261 -2.251 0.949 0.715 -0.104 3.581 0.563 2.893 -1.795 2.81 0.556 3.286 -2.369 0.572 1.859 1.167 6.862 -2.812 1.925 2.435 1.349 0.328 1.205 3.69 1.444 -0.151 -0.261 -2.669 3.069 1.974 5.092 -1.444 1.694 -2.025 -2.025 3.505 -2.17 1.755 0.359 2.02 -1.372 1.025 -1.12 4.263 -3.217 1.65 -2.132 2.105 -4.193 2.551 -1.357 0.152 -3.976 2.642 0.16 3.498 -4.718 -2.613 -4.432 1.193 -4.471 3.464 -1.806 0.887 -0.681 1.518 3.98 -0.239 0.694 -2.304 0.449 1.886 4.209 -3.512 1.264 0.196 -0.944 1.601 4.561 -1.059 0.464 1.013 2.875 -2.136 3.097 0.27 5.575 -4.188 5.23 -1.834 4.802 -2.366 2.02 -3.112 2.383 -1.402 0.82 0.625 3.979 -2.817 0.827 0.189 4.926 -4.592 0.384 -2.047 -2.556 -1.31 0.744 -2.652 2.838 -2.53 3.117 -3.53 -0.603 -0.491 2.503 -0.744 4.02 -5.088 3.922 -2.031 2.961 0.574 -0.449 0.735 1.764 1.602 -1.843 0.493 -1.333 -1.289 -4.671 2.412 0.219 2.581 -2.105 3.066 -0.876 2.738 1.493 2.122 -0.916 -0.059 -0.701 2.697 2.579 -0.088 6.979 -4.557 1.378 -1.419 3.841 0.196 1.33 -1.157 1.317 -2.992 -2 -0.383 1.021 -0.988 -0.365 -1.666 0.775 -1.909 2.025 1.694 0.28 -1.087 3.226 0.404 2.483 3.01 1.227 -0.242 0.794 2.154 1.905 1.037 2.111 -0.838 -0.676 1.256 3.801 2.598 5.339 -0.566 4.565 1.343 1.555 -1.547 2.214 3.445 4.424 -0.712 0.882 2.112 -0.878 0.247 2.772 1.445 5.869 4.336 1.538 2.079 2.2 1.653 2.516 1.047 2.172 -1.886 -3.917 -3.473 3.533 0.321 1.072 3.819 1.405 -0.413 2.476 0.872 -2.155 -6.982 0.606 0.316 -0.471 -3.153 1.362 4.741 1.435 2.995 2.928 2.539 0.709 -0.6 1.433 3.126 3.01 0.138 0.092 2.317 -1.3 -0.633 0.295 3.238 1.373 1.508 6.066 5.563 -0.074 4.411 0.915 2.768 0.492 -3.268 2.644 -1.354 1.661 2.562 0.75 7.352 1.62 -0.191 2.166 -4.114 -0.727 -6.128 -0.338 -0.661 -7.02 -3.22 -1.44 -0.112 -1.668 -2.125 -0.41 -1.58 -4.979 -7.903 -3.968 -5.659 -2.12 -1.259 -3.731 -4.169 -0.662 -2.195 -1.121 -0.893 -4.202 3.075 -1.532 2.77 -2.733 1.439 -0.664 -2.064 -4.471 -4.313 -0.504 -1.232 -2.113 -1.652 -3.57 -0.715 -1.776 -0.904 -2.487 -0.216 -0.236 -84.89 -1.441 -0.068 -4.738 -4.055 -1.172 -0.457 -6.874 0.933 -1.718 -1.733 -4.233 -0.246 -2.125 -0.909 -5.235 -3.01 -5.772 0.296 -2.481 -0.566 0.847 -1.034 -2.532 -0.13 0.361 -3.314 -4.27 -0.683 -2.452 0.308 -0.174 -2.668 -0.951 -0.584 -3.288 3.265 1.707 -2.811 -2.208 -3.794 z",
    MA: "m 896.22 171.9 -1.01 0.506 -1.553 2.724 4.432 -1.443 -1.868 -1.787 z m -11.77 -28.731 -1.711 0.468 -4.934 5.488 -18.2 4.061 -12.521 2.967 -0.259 15.01 0.817 0.466 11.237 -2.616 15.09 -3.669 0.117 0.428 6.571 -2.028 0.43 2.411 1.285 2.177 2.179 1.243 0.817 0.466 1.4 0.077 0.819 2.994 1.128 -0.079 1.904 -1.441 -0.351 -1.283 1.904 -1.441 1.515 -2.024 1.17 4.277 2.06 -1.713 0.932 -1.634 2.877 -1.247 3.615 -1.909 0.7 0.038 -1.053 -3.849 -1.398 2.451 -2.915 1.947 -2.8 -0.153 -1.79 -0.66 -1.247 -2.877 -1.555 0.196 -0.547 -2.839 -3.075 -2.836 -3.111 0.392 -1.245 -0.349 0.27 -2.373 1.67 -2.296 -0.506 -1.01 2.643 -2.102 -0.468 -1.711 -1.321 1.051 -1.207 -1.049 -0.936 -3.422 z",
    MN: "m 581.78 82.1 -3.5 -0.191 -1.166 0.779 -1.09 -0.621 -1.713 -2.06 -1.4 -0.077 -5.25 0.977 -3.928 -0.074 -0.702 -2.566 -1.4 -0.077 -2.177 1.285 -2.798 2.375 -2.294 0.858 -2.1 -0.115 -1.907 -1.087 -1.013 -2.02 -2.917 -0.581 -1.13 -2.449 -1.673 -0.232 -2.294 0.858 0.196 1.556 -1.283 0.351 -2.415 -4.626 -2.528 0.002 0.815 -2.062 -3.462 -0.891 -1.362 -0.777 -3.928 -0.074 -2.994 0.819 -0.621 1.09 -3.694 0.781 -1.83 -2.487 -5.173 -0.423 -1.324 -1.477 -2.411 0.43 -1.517 -0.504 -1.868 -1.787 -0.158 -2.256 -1.522 -5.56 -0.119 -2.956 -2.179 -1.243 -2.645 -0.426 0.124 8.01 -0.311 0.545 -9.684 -0.108 -20.07 -0.255 -0.038 0.7 1.873 6.843 -0.853 2.762 0.43 2.411 -0.306 5.601 2.107 7.699 1.092 3.149 0.898 4.122 -0.268 4.901 0.158 2.256 0.081 3.656 0.547 2.839 0.004 5.056 0.506 1.01 0.509 3.539 1.83 2.487 0.587 4.666 0.081 3.656 -1.475 3.852 -3.226 2.492 -0.194 0.972 2.571 4.354 1.945 0.387 1.713 2.06 -0.142 15.44 0.047 9.412 -0.376 14.585 10.54 -0.126 15.168 -0.013 15.595 -0.13 15.478 -0.558 15.478 -0.558 10.267 -0.281 -0.238 -5.911 -0.936 -3.422 -2.141 -1.943 -1.907 -1.087 -1.828 0.04 -2.958 -2.409 -1.792 -3.188 -2.413 -2.098 -2.917 -0.581 -1.985 -2.215 -2.917 -0.581 -3.62 -3.147 0.619 -3.617 -0.664 -3.266 0.738 -0.662 -0.313 -1.983 0.27 -2.373 1.164 -3.307 -1.558 -2.332 -1.945 -0.387 -0.119 -2.956 1.477 -1.324 1.164 -3.307 5.05 -2.532 1.049 -1.207 -0.283 -12.795 1.283 -0.351 1.243 -2.179 0.038 -0.7 4.392 -3.271 4.158 -4.126 7.07 -8.601 3.381 -2.764 3.498 -2.337 6.454 -2.456 7.269 -4.518 z",
    MT: "m 370.66 57.36 -11.591 -1.196 -9.646 -0.808 -15.908 -1.853 -9.335 -1.353 -12.836 -1.545 -12.408 -1.662 -13.925 -2.166 -11.397 -2.168 -12.525 -2.089 -18.632 -3.406 -15.559 -3.098 -15.832 -3.253 -12.487 -2.789 -4.532 21.239 2.026 4.04 -0.077 1.4 1.285 2.177 0.158 2.256 -1.166 0.779 1.168 1.749 -1.594 0.896 1.751 1.36 0.741 1.866 2.296 1.67 0.468 1.711 3.973 6.958 0.04 1.828 3.464 3.419 0.468 1.711 3.228 0.036 0.506 1.01 -0.97 2.334 -1.747 3.696 -1.204 1.479 0.04 1.828 -1.126 2.607 0.741 1.866 -0.115 2.1 -1.866 0.741 -1.166 0.779 0.585 2.139 -1.398 2.451 1.362 0.777 1.441 1.904 3.577 -1.209 2.915 -1.947 2.102 2.643 -0.074 3.928 0.002 2.528 2.298 4.198 0.819 2.994 -1.204 1.479 0.741 1.866 1.051 1.321 2.373 0.27 1.481 3.732 -0.738 0.662 0.741 1.866 -0.232 1.673 0.779 1.166 1.673 0.232 2.605 -1.402 4.824 1.668 0.777 -1.362 1.555 -0.196 2.062 0.815 3.5 0.191 0.934 0.894 1.711 -0.468 2.762 0.853 0.387 -1.945 1.204 -1.479 2.1 0.115 1.092 3.149 2.102 2.643 1.857 -10.852 12.253 1.934 16.57 2.591 13.38 1.855 16.725 2.319 13.536 1.583 11.591 1.196 11.863 1.351 11.318 1.04 0.272 0.155 1.693 -20.692 1.387 -15.09 1.695 -18.16 1.157 -10.891 2.08 -22.637 z",
    ND: "m 469.37 62.757 -11.784 -0.223 -9.529 -0.381 -15.985 -0.453 -12.601 -0.689 -10.07 -0.691 -9.101 -0.498 -12.719 -1.117 -16.919 -1.346 -2.08 22.637 -1.157 10.891 -1.695 18.16 -1.387 15.09 7.818 0.849 17.619 1.385 10.774 0.73 14 0.766 7 0.383 14.274 0.921 14.157 0.493 14.312 0.221 14.312 0.221 -0.081 -3.656 -0.587 -4.666 -1.83 -2.487 -0.509 -3.539 -0.506 -1.01 -0.004 -5.056 -0.547 -2.839 -0.081 -3.656 -0.158 -2.256 0.268 -4.901 -0.898 -4.122 -1.092 -3.149 -2.107 -7.699 0.306 -5.601 -0.43 -2.411 0.853 -2.762 -1.873 -6.843 0.038 -0.7 z",
    ID: "m 198.58 29.973 -13.731 -3.138 -3.255 13.304 -1.628 6.652 -3.411 13.576 -4.185 17.466 -1.123 5.135 0.975 2.722 0.196 1.555 -1.204 1.479 0.702 2.566 -0.115 2.1 0.896 1.594 1.09 0.621 1.985 2.215 0.43 2.411 -0.504 1.517 -3.885 4.281 -1.902 3.969 -2.215 1.985 -0.698 2.49 -1.943 2.141 -1.594 0.896 -2.292 3.386 -1.904 1.441 -0.93 4.162 2.879 1.281 1.013 2.02 -1.515 2.024 0.351 1.283 -2.796 4.903 -4.223 18.17 -4.728 19.683 20.656 4.921 8.752 1.743 17.777 3.64 11.942 2.479 14.587 2.904 21 3.676 1.819 -10.152 2.128 -13.225 2.283 -13.497 3.02 -16.687 -2.102 -2.643 -1.092 -3.149 -2.1 -0.115 -1.204 1.479 -0.387 1.945 -2.762 -0.853 -1.711 0.468 -0.934 -0.894 -3.5 -0.191 -2.062 -0.815 -1.555 0.196 -0.777 1.362 -4.824 -1.668 -2.605 1.402 -1.673 -0.232 -0.779 -1.166 0.232 -1.673 -0.741 -1.866 0.738 -0.662 -1.481 -3.732 -2.373 -0.27 -1.051 -1.321 -0.741 -1.866 1.204 -1.479 -0.819 -2.994 -2.298 -4.198 -0.002 -2.528 0.074 -3.928 -2.102 -2.643 -2.915 1.947 -3.577 1.209 -1.441 -1.904 -1.362 -0.777 1.398 -2.451 -0.585 -2.139 1.166 -0.779 1.866 -0.741 0.115 -2.1 -0.741 -1.866 1.126 -2.607 -0.04 -1.828 1.204 -1.479 1.747 -3.696 0.97 -2.334 -0.506 -1.01 -3.228 -0.036 -0.468 -1.711 -3.464 -3.419 -0.04 -1.828 -3.973 -6.958 -0.468 -1.711 -2.296 -1.67 -0.741 -1.866 -1.751 -1.36 1.594 -0.896 -1.168 -1.749 1.166 -0.779 -0.158 -2.256 -1.285 -2.177 0.077 -1.4 -2.026 -4.04 4.532 -21.239 z",
    WA: "m 103.17 18.16 -0.972 -0.194 -2.098 2.413 -0.194 0.972 1.558 2.332 -0.621 1.09 0.275 2.683 1.051 1.321 1.556 -0.196 0.077 -1.4 -1.051 -1.321 -1.283 0.351 0.502 -4.045 -0.934 -0.894 1.477 -1.324 0.66 -1.79 z m -4.826 -4.196 -1.247 -2.877 -0.855 0.234 0.275 2.683 1.828 -0.04 z m 3.147 -3.62 -0.972 -0.194 -1.749 1.168 2.179 1.243 1.866 -0.741 -1.324 -1.477 z m 3.262 -5.72 -0.97 2.334 1.092 3.149 1.517 0.504 0.043 4.356 -1.166 0.779 -1.436 3.151 1.441 1.904 -0.502 4.045 1.519 3.03 -2.294 0.858 -2.136 3.113 -0.077 1.4 -0.932 1.634 -0.657 4.318 0.196 1.555 -2.487 1.83 -1.09 -0.621 -1.049 1.207 -2.915 1.947 -0.468 -1.711 -1.828 0.04 -0.624 -1.438 1.36 -1.751 1.438 -0.624 -0.153 2.8 2.332 -1.558 1.711 -0.468 2.02 -3.541 -0.741 -1.866 0.27 -2.373 2.839 -0.547 0.036 -3.228 -0.817 -0.466 -3.109 2.92 -1.049 1.207 -2.994 0.819 2.719 -3.503 1.517 0.504 1.477 -1.324 0.232 -1.673 -0.509 -3.539 0.349 -1.245 -3.383 0.236 -1.168 -1.749 -2.256 0.158 -4.396 -1.785 -1.479 -1.204 -4.669 -1.941 -2.102 -2.643 -2.179 -1.243 -1.83 -2.487 -1.711 0.468 -1.981 2.841 0.04 1.828 -0.502 4.045 1.519 3.03 0.468 1.711 -0.385 4.473 -0.774 3.89 0.664 3.266 -0.93 4.162 2.062 0.815 -0.194 0.972 1.596 1.632 -2.683 0.275 -1.204 1.479 -0.349 1.245 2.451 1.398 -1.589 5.952 -3.149 1.092 1.402 2.605 3.656 -0.081 0.896 1.594 2.1 0.115 1.636 3.46 1.828 -0.04 1.245 0.349 2.258 2.37 0.664 3.266 -0.928 6.69 0.779 1.166 1.79 0.66 3.658 2.447 4.939 -0.432 2.994 -0.819 3.462 0.891 4.124 1.63 1.558 2.332 1.555 -0.196 2.062 0.815 3.811 -0.353 0.855 -0.234 1.907 1.087 3.773 0.347 1.866 -0.741 3.111 -0.392 4.318 0.657 1.166 -0.779 3.773 0.347 3.735 1.047 1.594 -0.896 16.07 4.109 15.521 3.798 -0.702 -2.566 1.204 -1.479 -0.196 -1.555 -0.975 -2.722 1.123 -5.135 4.185 -17.466 3.411 -13.576 1.628 -6.652 3.255 -13.304 -17.311 -4.457 -15.366 -4.07 -18.4 -5.079 -9.414 -2.481 -12.02 -3.606 -7.586 -2.521 z",
    AZ: "m 260.19 308.03 -13.653 -2.01 -10.58 -1.702 -13.497 -2.283 -13.342 -2.555 -7.935 -1.277 -15.832 -3.253 -10.697 -2.13 -3.447 16.804 -2.292 3.386 -1.828 0.04 -1.675 -2.76 -1.4 -0.077 -1.907 -1.087 -3.266 0.664 -0.97 2.334 0.975 2.722 -0.894 0.934 -0.115 2.1 0.313 1.983 -0.97 2.334 0.626 3.966 -0.464 3.345 -1.321 1.051 -0.581 2.917 -0.426 2.645 0.975 2.722 0.817 0.466 1.132 4.977 -0.232 1.673 3.581 3.847 -0.194 0.972 -2.605 1.402 -2.722 0.975 -0.777 1.362 -2.487 1.83 -0.23 4.2 -1.63 4.124 -2.37 2.258 -1.555 0.196 -0.543 2.217 0.43 2.411 -0.97 2.334 1.051 1.321 1.517 0.504 1.051 1.321 -0.27 2.373 -1.477 1.324 -0.621 1.09 -2.49 -0.698 -1.01 0.506 -2.098 2.413 -0.387 1.945 14.13 8.777 13.853 8.622 14.01 8.35 14.164 8.08 7.471 4.622 0.972 0.194 19.487 3.172 16.842 2.747 1.277 -7.935 2.242 -15.325 1.623 -11.708 1.74 -11.28 1.896 -11.552 1.468 -11.435 2.242 -15.325 1.74 -11.28 1.896 -11.552 2.242 -15.325 z",
    CA: "m 75.69 358.75 0.743 4.394 1.051 1.321 1.283 -0.351 -1.558 -2.332 -1.519 -3.03 z m 3.57 -8.793 0.351 1.283 -0.115 2.1 3.073 0.308 -0.896 -1.594 -2.413 -2.098 z m -23.546 -18.842 -2.917 -0.581 0.158 2.256 0.934 0.894 2.139 -0.585 -0.313 -1.983 z m 3.928 0.074 -1.321 1.051 0.506 1.01 2.334 0.97 1.594 -0.896 -3.113 -2.136 z m 95.79 2.289 -7.944 -11.388 -4.673 -6.996 -8.257 -13.372 -6.62 -9.912 -9.736 -14.576 -9.308 -14.693 -8.957 -13.41 -6.114 -8.901 -8.529 -13.527 3.372 -12.876 4.498 -15.483 2.094 -7.469 4.226 -15.638 3.02 -11.631 -12.176 -3.334 -8.169 -2.132 -12.293 -3.762 -8.01 -2.404 -12.293 -3.762 -12.41 -4.19 -1.164 3.307 -1.049 1.207 1.324 1.477 0.119 2.956 -0.619 3.617 -2.524 5.058 -1.01 0.506 0.119 2.956 -3.845 6.109 -0.817 -0.466 -4.04 4.554 0.119 2.956 -0.621 1.09 2.843 4.509 2.418 7.154 -0.036 3.228 -0.736 3.19 -1.36 1.751 -0.815 2.062 0.162 7.311 -1.049 1.207 0.702 2.566 2.143 4.471 1.988 4.743 1.441 1.904 1.443 4.432 -0.426 2.645 -1.981 2.841 1.711 -0.468 1.324 1.477 1.13 2.449 0.972 0.194 1.83 2.487 1.594 -0.896 -0.779 -1.166 1.475 -3.852 1.711 -0.468 1.558 2.332 2.607 1.126 1.477 -1.324 0.896 1.594 -3.111 0.392 -1.051 -1.321 -3.422 0.936 0.936 3.422 -0.894 0.934 1.051 1.321 1.013 2.02 -0.387 1.945 -1.049 1.207 -0.896 -1.594 -1.479 -1.204 0.54 -4.745 -1.983 0.313 -0.27 2.373 -1.553 2.724 0.934 0.894 -0.036 3.228 -0.891 3.462 2.766 5.909 1.362 0.777 2.1 0.115 1.051 1.321 0.392 3.111 -0.97 2.334 -1.477 1.324 -0.934 -0.894 -1.01 3.034 -0.347 3.773 0.468 1.711 1.596 1.632 1.285 2.177 0.43 2.411 1.207 1.049 -0.27 2.373 1.402 2.605 0.547 2.839 1.479 1.204 1.871 4.315 1.362 0.777 0.506 1.01 -1.436 3.151 1.441 1.904 2.296 1.67 -0.077 1.4 -1.864 3.269 0.624 1.438 -0.815 2.062 0.351 1.283 -1.67 2.296 2.141 1.943 0.196 1.555 6.107 1.317 2.062 0.815 1.868 1.787 2.49 0.698 2.1 0.115 2.568 1.826 2.492 3.226 0.275 2.683 4.592 3.341 2.451 1.398 4.318 0.657 1.285 2.177 0.275 2.683 -0.815 2.062 1.634 0.932 1.166 -0.779 2.724 1.553 1.558 2.332 2.92 3.109 3.777 5.403 2.222 5.598 0.004 5.056 -0.894 0.934 -0.153 2.8 1.479 1.204 -0.036 3.228 11.01 1.585 13.38 1.855 19.681 2.2 1.01 -0.506 2.49 0.698 0.621 -1.09 1.477 -1.324 0.27 -2.373 -1.051 -1.321 -1.517 -0.504 -1.051 -1.321 0.97 -2.334 -0.43 -2.411 0.543 -2.217 1.555 -0.196 2.37 -2.258 1.63 -4.124 0.23 -4.2 2.487 -1.83 0.777 -1.362 2.722 -0.975 2.605 -1.402 0.194 -0.972 -3.581 -3.847 0.232 -1.673 -1.132 -4.977 -0.817 -0.466 -0.975 -2.722 0.426 -2.645 z",
    CO: "m 385.49 256.04 1.614 -21.82 -8.829 -0.342 -11.746 -0.923 -12.291 -1.234 -17.464 -1.657 -10.191 -1.119 -10.191 -1.119 -10.308 -1.547 -10.191 -1.119 -10.308 -1.547 -12.68 -1.817 -2.01 13.653 -1.855 13.38 -2.708 16.14 -1.855 13.38 -2.862 18.943 -1.43 10.735 9.608 1.508 16.453 2.164 9.763 1.236 12.836 1.545 19.681 2.2 12.991 1.272 9.918 0.964 13.146 1 16.491 1.464 0.847 -10.346 1.036 -16.374 0.921 -14.274 0.691 -10.07 0.921 -14.274 z",
    NV: "m 174.65 292.82 2.091 -9.997 3.291 -16.532 4.183 -19.994 3.447 -16.804 2.555 -13.342 4.183 -19.994 2.091 -9.997 -17.777 -3.64 -8.752 -1.743 -20.656 -4.921 -14.549 -3.604 -11.631 -3.02 -11.904 -3.179 -8.714 -2.443 -3.02 11.631 -4.226 15.638 -2.094 7.469 -4.498 15.483 -3.372 12.876 8.529 13.527 6.114 8.901 8.957 13.41 9.308 14.693 9.736 14.576 6.62 9.912 8.257 13.372 4.673 6.996 7.944 11.388 0.581 -2.917 1.321 -1.051 0.464 -3.345 -0.626 -3.966 0.97 -2.334 -0.313 -1.983 0.115 -2.1 0.894 -0.934 -0.975 -2.722 0.97 -2.334 3.266 -0.664 1.907 1.087 1.4 0.077 1.675 2.76 1.828 -0.04 2.292 -3.386 3.447 -16.804 z",
    NM: "m 363.7 330.97 0.885 -11.05 -13.146 -1 -9.918 -0.964 -12.991 -1.272 -19.681 -2.2 -12.836 -1.545 -9.763 -1.236 -16.453 -2.164 -9.608 -1.508 -2.242 15.325 -1.896 11.552 -1.74 11.28 -2.242 15.325 -1.468 11.435 -1.896 11.552 -1.74 11.28 -1.623 11.708 -2.242 15.325 -1.277 7.935 1.4 0.077 14.08 1.893 1.508 -9.608 19.37 2.744 12.136 1.506 -1.324 -1.477 -1.053 -3.849 13.263 1.427 20.381 2.238 16.491 1.464 16.491 1.464 1.849 -20.964 1.732 -21.392 1.695 -18.16 1.079 -12.02 1.423 -18.319 0.655 -6.846 0.7 0.038 z",
    OR: "m 80.26 62.12 -1.01 0.506 -2.062 -0.815 -1.13 -2.449 -1.866 0.741 -3.89 -0.774 -1.324 -1.477 -0.153 2.8 -0.543 2.217 -1.283 0.351 0.04 1.828 -1.243 2.179 0.43 2.411 -1.204 1.479 -0.97 2.334 0.506 1.01 -1.477 1.324 0.079 1.128 -1.01 3.034 -2.951 5.175 -0.621 1.09 -1.513 4.552 -6.288 14.823 -1.243 2.179 -3.728 6.537 -0.777 1.362 -1.4 -0.077 -3.145 6.148 -2.564 3.23 -0.27 2.373 1.013 2.02 -0.543 2.217 -0.777 1.362 -1.164 3.307 0.002 2.528 -0.543 2.217 1.519 3.03 12.41 4.19 12.293 3.762 8.01 2.404 12.293 3.762 8.169 2.132 12.176 3.334 8.714 2.443 11.904 3.179 11.631 3.02 14.549 3.604 4.728 -19.683 4.223 -18.17 2.796 -4.903 -0.351 -1.283 1.515 -2.024 -1.013 -2.02 -2.879 -1.281 0.93 -4.162 1.904 -1.441 2.292 -3.386 1.594 -0.896 1.943 -2.141 0.698 -2.49 2.215 -1.985 1.902 -3.969 3.885 -4.281 0.504 -1.517 -0.43 -2.411 -1.985 -2.215 -1.09 -0.621 -0.896 -1.594 0.115 -2.1 -15.521 -3.798 -16.07 -4.109 -1.594 0.896 -3.735 -1.047 -3.773 -0.347 -1.166 0.779 -4.318 -0.657 -3.111 0.392 -1.866 0.741 -3.773 -0.347 -1.907 -1.087 -0.855 0.234 -3.811 0.353 -2.062 -0.815 -1.555 0.196 -1.558 -2.332 -4.124 -1.63 -3.462 -0.891 -2.994 0.819 -4.939 0.432 -3.658 -2.447 -1.79 -0.66 -0.779 -1.166 0.928 -6.69 -0.664 -3.266 -2.258 -2.37 -1.245 -0.349 z",
    UT: "m 244.03 195.22 -21 -3.676 -14.587 -2.904 -11.942 -2.479 -2.091 9.997 -4.183 19.994 -2.555 13.342 -3.447 16.804 -4.183 19.994 -3.291 16.532 -2.091 9.997 10.697 2.13 15.832 3.253 7.935 1.277 13.342 2.555 13.497 2.283 10.58 1.702 13.653 2.01 1.43 -10.735 2.862 -18.943 1.855 -13.38 2.708 -16.14 1.855 -13.38 2.01 -13.653 -10.308 -1.547 -16.298 -2.436 -5.835 -1.162 3.559 -21.432 z",
    WY: "m 358.44 188.28 1.734 -18.864 1.464 -16.491 0.732 -8.246 -11.318 -1.04 -11.863 -1.351 -11.591 -1.196 -13.536 -1.583 -16.725 -2.319 -13.38 -1.855 -16.57 -2.591 -12.253 -1.934 -1.857 10.852 -3.02 16.687 -2.283 13.497 -2.128 13.225 -1.819 10.152 -3.559 21.432 5.835 1.162 16.298 2.436 10.308 1.547 12.68 1.817 10.308 1.547 10.191 1.119 10.308 1.547 10.191 1.119 10.191 1.119 17.464 1.657 1.157 -10.891 1.155 -13.419 1.889 -19.14 z",
    AR: "m 596.56 343.56 -11.433 1.06 0.66 -1.79 1.981 -2.841 1.438 -0.624 0.932 -1.634 -0.04 -1.828 -1.675 -2.76 -15.634 0.83 -14.506 0.752 -19.13 0.639 -14.351 0.479 -14.468 0.051 2.113 15.283 1.33 9.06 0.047 9.412 -0.334 18.941 -0.108 9.684 1.868 1.787 1.594 -0.896 3.773 0.347 0.817 0.466 0.322 12.1 16.451 -0.364 12.95 -0.556 9.995 -0.436 13.378 -0.673 -0.158 -2.256 1.166 -0.779 -0.158 -2.256 -1.479 -1.204 0.777 -1.362 0.115 -2.1 -1.751 -1.36 1.243 -2.179 -0.896 -1.594 2.526 -2.53 -0.624 -1.438 0.621 -1.089 -1.051 -1.321 3.149 -1.092 0.349 -1.245 -1.207 -1.049 1.477 -1.324 0.66 -1.79 3.964 -3.154 0.191 -3.5 -0.351 -1.283 0.543 -2.217 1.711 -0.468 -0.196 -1.555 2.02 -1.013 1.477 -1.324 -0.896 -1.594 1.321 -1.051 0.815 -2.062 1.245 0.349 0.232 -1.673 -0.741 -1.866 0.27 -2.373 1.204 -1.479 0.077 -1.4 1.866 -0.741 -0.779 -1.166 0.621 -1.09 -0.741 -1.866 2.877 -1.247 1.049 -1.207 -0.896 -1.594 1.555 -0.196 -1.168 -1.749 z",
    IA: "m 572.79 202.95 0.038 -0.7 -1.13 -2.449 -4.318 -0.657 -1.362 -0.777 -1.481 -3.732 -0.977 -5.25 1.281 -2.879 -0.351 -1.283 -1.517 -0.504 -0.975 -2.722 -10.267 0.281 -15.478 0.558 -15.478 0.558 -15.595 0.13 -15.168 0.013 -10.54 0.126 -2.1 -0.115 0.702 2.566 -0.464 3.345 1.4 0.077 0.43 2.411 -0.932 1.634 0.196 1.555 -1.126 2.607 -1.243 2.179 1.985 2.215 0.547 2.839 1.517 0.504 -0.153 2.8 0.896 1.594 -0.115 2.1 1.168 1.749 0.351 1.283 1.596 1.632 0.275 2.683 1.051 1.321 -0.464 3.345 0.158 2.256 2.568 1.826 -0.426 2.645 1.245 0.349 -0.698 2.49 0.662 0.738 0.081 3.656 0.389 0.583 0.198 4.083 -0.504 1.517 1.751 1.36 -0.077 1.4 13.885 0.338 7.584 -0.007 7.584 -0.007 7.467 -0.434 7.739 -0.279 19.02 -1.067 3.539 -0.509 0.624 1.438 2.568 1.826 1.868 1.787 0.855 -0.234 -0.315 -4.511 3.305 -1.364 0.894 -0.934 0.308 -3.073 2.098 -2.413 -0.119 -2.956 -0.624 -1.438 -1.634 -0.932 -0.196 -1.555 0.426 -2.645 1.049 -1.207 4.666 -0.587 1.632 -1.596 2.566 -0.702 1.477 -1.324 0.464 -3.345 1.632 -1.596 0.813 -4.59 -0.741 -1.866 -3.93 -2.602 -0.975 -2.722 -3.386 -2.292 0.311 -0.545 z",
    KS: "m 510.36 325.08 -0.484 -19.407 -0.088 -11.24 -0.13 -15.595 -3.541 -2.02 -1.364 -3.305 -3.192 -3.264 1.01 -3.034 1.36 -1.751 0.972 0.194 0.387 -1.945 -2.296 -1.67 -1.166 0.779 -1.907 -1.087 -2.141 -1.943 -17.423 0.171 -10.384 -0.147 -14.157 -0.493 -10.384 -0.147 -17.657 -0.685 -20.73 -0.993 -10.501 -0.574 -11.05 -0.885 -0.921 14.274 -0.691 10.07 -0.921 14.274 -1.036 16.374 -0.847 10.346 12.601 0.689 16.1 0.881 16.1 0.881 8.129 0.304 15.985 0.453 15.985 0.453 20.07 0.255 11.94 -0.049 12.367 -0.166 z",
    MO: "m 562.21 249.98 -1.868 -1.787 -2.568 -1.826 -0.624 -1.438 -3.539 0.509 -19.02 1.067 -7.739 0.279 -7.467 0.434 -7.584 0.007 -7.584 0.007 -13.885 -0.338 1.168 1.749 1.053 3.849 3.66 4.975 -0.077 1.4 1.634 0.932 2.141 1.943 1.907 1.087 1.166 -0.779 2.296 1.67 -0.387 1.945 -0.972 -0.194 -1.36 1.751 -1.01 3.034 3.192 3.264 1.364 3.305 3.541 2.02 0.13 15.595 0.088 11.24 0.484 19.407 -0.029 10.812 14.468 -0.051 14.351 -0.479 19.13 -0.639 14.506 -0.752 15.634 -0.83 1.675 2.76 0.04 1.828 -0.932 1.634 -1.438 0.624 -1.981 2.841 -0.66 1.79 11.433 -1.06 0.97 -2.334 0.894 -0.934 -1.713 -2.06 1.983 -0.313 -0.624 -1.438 1.477 -1.324 -0.702 -2.566 1.128 -0.079 1.128 -0.079 1.01 -3.034 1.907 1.087 0.738 -0.662 1.01 -3.034 -0.43 -2.411 0.426 -2.645 -0.972 -0.194 -1.479 -1.204 -1.166 0.779 -3.777 -5.403 0.815 -2.062 0.232 -1.673 -1.402 -2.605 -0.819 -2.994 -1.517 -0.504 -1.558 -2.332 -2.062 -0.815 -1.479 -1.204 -1.517 -0.504 -1.79 -0.66 -4.126 -4.158 -1.013 -2.02 1.979 -5.369 0.815 -2.062 -0.158 -2.256 1.087 -1.907 -1.051 -1.321 -4.279 -1.357 -2.487 1.83 -1.362 -0.777 -0.624 -1.438 -0.743 -4.394 -1.675 -2.76 -3.93 -2.602 -1.168 -1.749 -4.437 -3.613 -1.792 -3.188 -0.04 -1.828 -0.624 -1.438 -0.664 -3.266 0.308 -3.073 0.932 -1.634 z",
    NE: "m 478.87 204.98 -1.945 -0.387 -1.441 -1.904 -0.079 -1.128 -1.673 -0.232 -0.779 -1.166 -4.279 -1.357 -2.841 -1.981 -3.111 0.392 -2.528 0.002 -3.073 -0.308 -1.36 1.751 -1.128 0.079 -3.813 -2.175 -3.775 -2.875 -17.813 -0.412 -13.574 -0.883 -16.1 -0.881 -11.05 -0.885 -13.574 -0.883 -16.491 -1.464 -1.889 19.14 -1.155 13.419 -1.157 10.891 12.291 1.234 11.746 0.923 8.829 0.342 -1.614 21.82 11.05 0.885 10.501 0.574 20.73 0.993 17.657 0.685 10.384 0.147 14.157 0.493 10.384 0.147 17.423 -0.171 -1.634 -0.932 0.077 -1.4 -3.66 -4.975 -1.053 -3.849 -1.168 -1.749 0.077 -1.4 -1.751 -1.36 0.504 -1.517 -0.198 -4.083 -0.389 -0.583 -0.081 -3.656 -0.662 -0.738 0.698 -2.49 -1.245 -0.349 0.426 -2.645 -2.568 -1.826 -0.158 -2.256 0.464 -3.345 -1.051 -1.321 -0.275 -2.683 -1.596 -1.632 -0.351 -1.283 -1.168 -1.749 0.115 -2.1 -0.896 -1.594 0.153 -2.8 -1.517 -0.504 z",
    OK: "m 510.33 335.9 0.029 -10.812 -12.367 0.166 -11.94 0.049 -20.07 -0.255 -15.985 -0.453 -15.985 -0.453 -8.129 -0.304 -16.1 -0.881 -16.1 -0.881 -12.601 -0.689 -16.491 -1.464 -0.885 11.05 20.847 1.421 18.475 1.151 13.03 0.572 -0.342 8.829 -0.804 14.702 -0.878 18.63 2.1 0.115 3.426 4.12 2.411 -0.43 2.762 0.853 0.232 -1.673 2.179 1.243 1.168 1.749 -0.115 2.1 3.19 0.736 1.128 -0.079 1.362 0.777 2.762 0.853 2.683 -0.275 1.441 1.904 1.555 -0.196 1.204 -1.479 2.49 0.698 1.983 -0.313 0.002 2.528 2.607 1.126 -0.232 1.673 1.362 0.777 1.438 -0.624 2.215 -1.985 1.673 0.232 0.468 1.711 1.673 0.232 0.351 1.283 1.4 0.077 3.03 -1.519 0.662 0.738 -0.66 1.79 0.779 1.166 1.128 -0.079 0.504 -1.517 2.836 -3.075 1.168 1.749 2.917 0.581 0.777 -1.362 1.324 1.477 1.479 1.204 1.4 0.077 1.441 1.904 0.777 -1.362 1.828 -0.04 0.777 -1.362 1.983 -0.313 2.02 -1.013 1.362 0.777 1.555 -0.196 3.188 -1.792 1.051 1.321 3.345 0.464 1.594 -0.896 0.777 -1.362 3.269 1.864 1.245 0.349 1.985 2.215 2.217 0.543 3.969 1.902 0.7 0.038 0.108 -9.684 0.334 -18.941 -0.047 -9.412 -1.33 -9.06 -2.113 -15.283 z",
    SD: "m 478.61 130.11 -14.312 -0.221 -14.312 -0.221 -14.157 -0.493 -14.274 -0.921 -7 -0.383 -14 -0.766 -10.774 -0.73 -17.619 -1.385 -7.818 -0.849 -1.693 20.692 -0.272 -0.155 -0.732 8.246 -1.464 16.491 -1.734 18.864 16.491 1.464 13.574 0.883 11.05 0.885 16.1 0.881 13.574 0.883 17.813 0.412 3.775 2.875 3.813 2.175 1.128 -0.079 1.36 -1.751 3.073 0.308 2.528 -0.002 3.111 -0.392 2.841 1.981 4.279 1.357 0.779 1.166 1.673 0.232 0.079 1.128 1.441 1.904 1.945 0.387 -0.547 -2.839 -1.985 -2.215 1.243 -2.179 1.126 -2.607 -0.196 -1.555 0.932 -1.634 -0.43 -2.411 -1.4 -0.077 0.464 -3.345 -0.702 -2.566 2.1 0.115 0.376 -14.585 -0.047 -9.412 0.142 -15.44 -1.713 -2.06 -1.945 -0.387 -2.571 -4.354 0.194 -0.972 3.226 -2.492 1.475 -3.852 z",
    LA: "m 566.19 487.95 1.515 -2.024 -4.01 -1.202 -1.866 0.741 0.079 1.128 3.424 1.592 0.855 -0.234 z m 42.532 -17.616 -1.09 -0.621 -1.168 -1.749 -0.936 -3.422 -2.413 -2.098 -1.13 -2.449 1.745 -6.224 -0.079 -1.128 -18.317 1.105 -17.889 0.988 1.477 -1.324 -1.013 -2.02 0.349 -1.245 -0.624 -1.438 1.711 -0.468 0.853 -2.762 -0.741 -1.866 1.632 -1.596 0.347 -3.773 1.126 -2.607 1.438 -0.624 1.67 -2.296 1.166 -0.779 0.504 -1.517 2.562 -5.758 -3.386 -2.292 -0.158 -2.256 -1.324 -1.477 -0.079 -1.128 1.204 -1.479 -1.09 -0.621 0.387 -1.945 0.777 -1.362 -1.713 -2.06 -13.378 0.673 -9.995 0.436 -12.95 0.556 -16.451 0.364 0.33 22.21 2.685 2.253 1.754 3.888 -0.153 2.8 3.271 4.392 -0.349 1.245 3.039 6.06 -1.166 0.779 1.051 1.321 -0.853 2.762 -2.096 4.941 -0.738 0.662 0.702 2.566 -0.777 1.362 0.585 2.139 0.16 4.784 -1.515 2.024 0.662 0.738 -0.543 2.217 -1.749 1.168 1.013 2.02 1.866 -0.741 5.522 -0.822 4.784 -0.16 3.19 0.736 6.731 2.755 2.645 0.425 5.29 0.851 2.605 -1.402 0.466 -0.817 -0.896 -1.594 0.349 -1.245 2.449 -1.13 0.311 -0.545 2.683 -0.275 -0.66 1.79 3.656 -0.081 1.245 0.349 -0.387 1.945 1.556 -0.196 0.702 2.566 4.318 0.657 0.738 -0.662 1.13 2.449 -1.826 2.568 1.907 1.087 3.034 1.01 2.645 0.426 1.983 -0.313 2.607 1.126 2.33 -4.086 3.383 -0.236 2.762 0.853 -0.387 1.945 1.168 1.749 2.643 -2.102 -0.43 -2.411 1.087 -1.907 -1.209 -3.577 2.179 1.243 1.283 -0.351 2.568 1.826 0.506 1.01 2.607 1.126 0.389 0.583 2.373 0.27 2.22 3.071 1.362 0.777 2.373 0.27 2.953 -2.647 -1.985 -2.215 -1.713 -2.06 -2.683 0.275 -1.907 -1.087 -1.555 0.196 -0.468 -1.711 -2.49 -0.698 -1.168 -1.749 1.438 -0.624 3.224 -5.02 0.934 0.894 1.515 -2.024 -2.062 -0.815 -0.119 -2.956 -2.76 1.675 -0.698 2.49 -1.128 0.079 -3.113 -2.136 0.698 -2.49 -1.907 -1.087 -0.777 1.362 -1.904 1.441 -2.411 0.43 -3.462 -0.892 -1.751 -1.36 0.387 -1.945 3.302 -3.892 3.073 0.308 1.985 2.215 3.773 0.347 1.051 1.321 3.539 -0.509 z",
    TX: "m 462.08 530.01 -0.7 -0.038 -3.03 6.575 1.128 -0.079 2.6 -6.458 z m 3.068 -4.747 3.613 -4.437 -1.09 -0.621 -1.126 2.607 -1.398 2.451 z m 12.359 -10.278 -2.1 -0.115 -3.809 2.881 -1.983 0.313 0.624 1.438 1.477 -1.324 5.792 -3.194 z m 30.86 -22.467 -2.409 2.958 3.926 -2.454 -1.517 -0.504 z m 5.01 -94.24 -0.7 -0.038 -3.969 -1.902 -2.217 -0.543 -1.985 -2.215 -1.245 -0.349 -3.269 -1.864 -0.777 1.362 -1.594 0.896 -3.345 -0.464 -1.051 -1.321 -3.188 1.792 -1.555 0.196 -1.362 -0.777 -2.02 1.013 -1.983 0.313 -0.777 1.362 -1.828 0.04 -0.777 1.362 -1.441 -1.904 -1.4 -0.077 -1.479 -1.204 -1.324 -1.477 -0.777 1.362 -2.917 -0.581 -1.168 -1.749 -2.836 3.075 -0.504 1.517 -1.128 0.079 -0.779 -1.166 0.66 -1.79 -0.662 -0.738 -3.03 1.519 -1.4 -0.077 -0.351 -1.283 -1.673 -0.232 -0.468 -1.711 -1.673 -0.232 -2.215 1.985 -1.438 0.624 -1.362 -0.777 0.232 -1.673 -2.607 -1.126 -0.002 -2.528 -1.983 0.313 -2.49 -0.698 -1.204 1.479 -1.555 0.196 -1.441 -1.904 -2.683 0.275 -2.762 -0.853 -1.362 -0.777 -1.128 0.079 -3.19 -0.736 0.115 -2.1 -1.168 -1.749 -2.179 -1.243 -0.232 1.673 -2.762 -0.853 -2.411 0.43 -3.426 -4.12 -2.1 -0.115 0.878 -18.63 0.804 -14.702 0.342 -8.829 -13.03 -0.572 -18.475 -1.151 -20.847 -1.421 -0.7 -0.038 -0.655 6.846 -1.423 18.319 -1.079 12.02 -1.695 18.16 -1.732 21.392 -1.849 20.964 -16.491 -1.464 -16.491 -1.464 -20.381 -2.238 -13.263 -1.427 1.053 3.849 1.324 1.477 2.451 1.398 1.092 3.149 1.792 3.188 3.151 1.436 2.102 2.643 1.675 2.76 2.803 2.681 0.624 1.438 3.309 3.692 2.451 1.398 2.258 2.37 1.634 0.932 1.947 2.915 0.43 2.411 1.598 4.16 0.896 1.594 -0.619 3.617 0.313 1.983 1.636 3.46 0.547 2.839 1.441 1.904 1.751 1.36 1.673 0.232 3.543 4.547 2.179 1.243 2.645 0.426 0.079 1.128 2.024 1.515 2.49 0.698 1.168 1.749 1.751 1.36 1.4 0.077 3.034 1.01 0.777 -1.362 2.526 -2.53 1.866 -0.741 0.426 -2.645 2.407 -5.486 2.136 -3.113 3.266 -0.664 1.945 0.387 0.932 -1.634 1.438 -0.624 3.541 2.02 2.528 -0.002 6.535 1.2 1.555 -0.196 2.762 0.853 0.741 1.866 0.934 0.894 1.4 0.077 1.675 2.76 1.751 1.36 0.468 1.711 3.775 2.875 0.858 2.294 1.479 1.204 0.743 4.394 2.102 2.643 0.158 2.256 1.83 2.487 1.873 6.843 1.441 1.904 2.451 1.398 1.247 2.877 2.375 2.798 0.158 2.256 1.09 0.621 1.83 2.487 2.217 0.543 1.596 1.632 -0.232 1.673 0.896 1.594 -0.815 2.062 1.247 2.877 -0.736 3.19 1.907 1.087 0.196 1.555 1.751 1.36 0.779 1.166 0.04 1.828 1.596 1.632 -0.853 2.762 0.934 0.894 0.702 2.566 2.373 0.27 1.362 0.777 1.828 -0.04 1.168 1.749 1.751 1.36 1.283 -0.351 4.124 1.63 1.441 1.904 1.634 0.932 5.601 0.306 2.8 0.153 2.217 0.543 5.254 4.079 3.498 -2.337 2.256 -0.158 -0.04 -1.828 -1.904 1.441 -0.04 -1.828 -1.479 -1.204 0.232 -1.673 -1.013 -2.02 0.077 -1.4 -2.024 -1.515 0.698 -2.49 -1.249 -5.405 -1.207 -1.049 0.23 -4.201 1.283 -0.351 -0.313 -1.983 1.01 -0.506 0.308 -3.073 -1.594 0.896 -2.373 -0.27 0.077 -1.4 2.02 -1.013 2.217 0.543 3.221 -7.548 -1.751 -1.36 -0.585 -2.139 -2.1 -0.115 -0.506 -1.01 5.056 -0.004 1.634 0.932 3.185 -4.32 -1.79 -0.66 -0.349 1.245 -1.751 -1.36 1.204 -1.479 5.484 -0.121 1.943 -2.141 -0.04 -1.828 -1.013 -2.02 1.283 -0.351 2.102 2.643 5.05 -2.532 -2.102 -2.643 -1.362 -0.777 0.504 -1.517 2.217 0.543 1.049 -1.207 0.779 1.166 1.749 -1.168 0.858 2.294 7.62 -3.235 2.528 -0.002 1.866 -0.741 3.498 -2.337 0.855 -0.234 4.275 -3.698 -0.158 -2.256 1.749 -1.168 3.302 -3.892 -0.934 -0.894 -1.675 -2.76 0.074 -3.928 2.879 1.281 0.97 -2.334 1.283 -0.351 1.168 1.749 -1.202 4.01 2.839 -0.547 -0.815 2.062 11.235 -5.143 3.656 -0.081 -1.285 -2.177 0.387 -1.945 1.126 -2.607 1.128 -0.079 1.515 -2.024 -0.16 -4.784 -0.585 -2.139 0.777 -1.362 -0.702 -2.566 0.738 -0.662 2.096 -4.941 0.853 -2.762 -1.051 -1.321 1.166 -0.779 -3.039 -6.06 0.349 -1.245 -3.271 -4.392 0.153 -2.8 -1.754 -3.888 -2.685 -2.253 -0.33 -22.21 -0.322 -12.1 -0.817 -0.466 -3.773 -0.347 -1.594 0.896 -1.868 -1.787 z",
    CT: "m 874.09 165.78 -0.117 -0.428 -15.09 3.669 -11.237 2.616 2.892 16.449 1.479 1.204 -3.419 3.464 1.868 1.787 1.166 -0.779 5.596 -4.75 5.675 -3.622 1.555 -0.196 0.894 -0.934 1.673 0.232 1.166 -0.779 2.139 -0.585 1.477 -1.324 1.4 0.077 3.188 -1.792 0.817 0.466 0.27 -2.373 -0.585 -2.139 -2.809 -10.265 z",
    NH: "m 884.14 138.66 -1.751 -1.36 -0.196 -1.555 -3.23 -2.564 -0.781 -3.694 -2.418 -7.154 -5.186 -15.591 -4.601 -13.453 -0.504 1.517 -2.373 -0.27 -1.204 1.479 -0.423 5.173 0.702 2.566 -1.047 3.735 2.102 2.643 -1.047 3.735 -2.098 2.413 -2.02 1.013 -0.504 1.517 0.819 2.994 -0.889 5.99 0.158 2.256 -0.932 1.634 0.313 1.983 -0.698 2.49 1.288 4.705 -0.194 0.972 0.511 6.067 -0.426 2.645 2.102 2.643 18.2 -4.061 4.934 -5.488 1.711 -0.468 0.308 -3.073 -0.624 -1.438 z",
    RI: "m 887.59 173.12 -0.819 -2.994 -1.4 -0.077 1.053 3.849 1.166 -0.779 z m -3.037 -3.536 -2.179 -1.243 -1.285 -2.177 -0.43 -2.411 -6.571 2.028 2.809 10.265 0.585 2.139 -0.27 2.373 3.771 -2.181 1.711 -0.468 0.27 -2.373 -0.858 -2.294 0.347 -3.773 2.1 0.115 z",
    VT: "m 859.61 153.19 -2.102 -2.643 0.426 -2.645 -0.511 -6.067 0.194 -0.972 -1.288 -4.705 0.698 -2.49 -0.313 -1.983 0.932 -1.634 -0.158 -2.256 0.889 -5.99 -0.819 -2.994 0.504 -1.517 2.02 -1.013 2.098 -2.413 1.047 -3.735 -2.102 -2.643 1.047 -3.735 -0.702 -2.566 -11.976 3.277 -15.67 4.058 0.509 3.539 0.934 0.894 -0.036 3.228 0.896 1.594 1.441 1.904 0.002 2.528 0.702 2.566 -0.466 0.817 -0.191 3.5 0.662 0.738 1.949 5.443 -0.27 2.373 2.1 0.115 1.051 1.321 3.982 17.07 12.521 -2.967 z",
    AL: "m 671.4 359.17 -19.911 2 -13.961 1.062 -11.978 0.749 0.117 0.428 1.713 2.06 -0.455 13.457 -0.029 10.812 -0.378 12.06 -0.378 12.06 -0.685 17.657 1.879 14.427 2.505 18.394 0.583 -0.389 4.862 0.968 -0.002 -2.528 0.657 -4.318 1.983 -0.313 0.858 2.294 -0.504 1.517 0.779 1.166 2.685 2.253 -0.232 1.673 3.849 -1.053 0.194 -0.972 1.749 -1.168 1.36 -1.751 -0.506 -1.01 -0.624 -1.438 0.543 -2.217 -2.024 -1.515 -2.647 -2.953 0.581 -2.917 18.628 -1.65 12.02 -1.449 17.655 -1.843 -0.313 -1.983 -1.868 -1.787 -0.313 -1.983 0.462 -5.873 -0.468 -1.711 -1.168 -1.749 -0.975 -2.722 1.202 -4.01 -0.119 -2.956 0.349 -1.245 2.06 -1.713 -1.479 -1.204 -0.43 -2.411 -0.741 -1.866 -1.713 -2.06 -1.364 -3.305 -0.662 -0.738 -0.975 -2.722 -4.72 -16.408 -3.277 -11.976 -2.964 -9.993 -1.405 -5.132 z",
    FL: "m 783.28 485.78 -1.245 -0.349 -1.049 1.207 0.509 3.539 1.204 -1.479 0.581 -2.917 z m -119.96 -25.1 -4.977 1.132 -0.311 0.545 5.288 -1.677 z m 95.54 -18.79 -3.928 -0.074 -4.162 -0.93 -1.128 0.079 -1.087 1.907 0.04 1.828 1.051 1.321 -0.113 4.628 -2.139 0.585 -0.934 -0.894 -1.092 -3.149 -14.661 1.024 -10.578 0.826 -11.978 0.749 -12.523 0.439 -1.09 -0.621 -0.975 -2.722 -1.285 -2.177 -17.655 1.843 -12.02 1.449 -18.628 1.65 -0.581 2.917 2.647 2.953 2.024 1.515 -0.543 2.217 0.624 1.438 1.245 0.349 -0.97 2.334 1.79 0.66 2.875 -3.775 -0.158 -2.256 1.868 1.787 0.738 -0.662 1.751 1.36 -1.904 1.441 6.805 -1.173 3.46 -1.636 1.673 0.232 2.02 -1.013 2.917 0.581 -1.594 0.896 -2.449 1.13 5.835 1.162 4.124 1.63 2.451 1.398 -0.858 -2.294 1.283 -0.351 0.975 2.722 6.499 4.428 1.168 1.749 0.43 2.411 3.149 -1.092 4.666 -0.587 2.76 -1.675 1.204 -1.479 2.643 -2.102 3.073 0.308 -0.079 -1.128 -2.1 -0.115 1.204 -1.479 2.06 -1.713 2.256 -0.158 2.294 -0.858 3.541 2.02 1.128 -0.079 2.451 1.398 1.868 1.787 1.558 2.332 2.49 0.698 0.392 3.111 3.969 1.902 1.285 2.177 1.517 0.504 1.441 1.904 3.539 -0.509 1.479 1.204 0.702 2.566 1.596 1.632 0.972 0.194 0.509 3.539 0.356 6.339 -1.589 5.952 0.741 1.866 -0.772 6.418 0.972 0.194 2.685 2.253 0.855 -0.234 0.581 -2.917 -0.506 -1.01 -2.334 -0.97 0.387 -1.945 1.79 0.66 2.451 1.398 1.01 -0.506 1.13 2.449 -2.447 3.658 -0.27 2.373 -1.594 0.896 0.468 1.711 1.634 0.932 0.43 2.411 4.828 6.724 1.441 1.904 2.49 0.698 0.736 -3.19 1.751 1.36 0.198 4.083 1.364 3.305 2.451 1.398 1.555 -0.196 0.43 2.411 0.506 1.01 1.17 4.277 3.113 2.136 -0.349 1.245 2.683 -0.275 3.462 0.891 1.751 1.36 3.077 5.364 1.675 2.76 1.362 0.777 2.373 0.27 1.207 1.049 -0.349 1.245 -2.762 -0.853 -1.479 -1.204 -0.27 2.373 2.141 1.943 3.422 -0.936 1.049 -1.207 2.917 0.581 2.253 -2.685 3.228 0.036 0.232 -1.673 1.515 -2.024 -0.975 -2.722 0.153 -2.8 0.853 -2.762 0.738 -0.662 -0.158 -2.256 0.894 -0.934 -0.198 -4.083 -0.16 -4.784 -0.511 -6.067 0.311 -0.545 -1.132 -4.977 -1.209 -3.577 -2.064 -3.343 -0.7 -0.038 -4.518 -7.269 -1.364 -3.305 -9.463 -14.421 -1.988 -4.743 -0.779 -1.166 -0.975 -2.722 2.334 0.97 0.002 2.528 3.111 -0.392 0.858 2.294 -0.153 2.8 0.353 3.811 0.855 -0.234 -0.898 -4.122 0.777 -1.362 -0.858 -2.294 -8.72 -10.03 -6.737 -10.339 -1.871 -4.315 -4.482 -10.497 -0.313 -1.983 -1.402 -2.605 -0.353 -3.811 -1.245 -0.349 z",
    GA: "m 760.83 426.41 1.01 -3.034 -1.128 0.079 -0.698 2.49 0.817 0.466 z m 4.615 -15.06 -2.49 -0.698 -1.128 0.079 -1.713 -2.06 -0.158 -2.256 -0.779 -1.166 -0.975 -2.722 -0.934 -0.894 -3.424 -1.592 -0.275 -2.683 -1.013 -2.02 -1.324 -1.477 -0.858 -2.294 -4.669 -1.941 -1.324 -1.477 -0.468 -1.711 -2.062 -0.815 -0.158 -2.256 -2.296 -1.67 -3.034 -1.01 -1.402 -2.605 -2.296 -1.67 -4.241 -2.058 -0.741 -1.866 -2.958 -2.409 -0.858 -2.294 -1.168 -1.749 -0.896 -1.594 -2.8 -0.153 -2.296 -1.67 -3.696 -1.747 -0.662 -0.738 0.27 -2.373 2.409 -2.958 0.504 -1.517 -11.899 1.877 -9.333 1.175 -9.761 1.292 -13.144 1.528 1.405 5.132 2.964 9.993 3.277 11.976 4.72 16.408 0.975 2.722 0.662 0.738 1.364 3.305 1.713 2.06 0.741 1.866 0.43 2.411 1.479 1.204 -2.06 1.713 -0.349 1.245 0.119 2.956 -1.202 4.01 0.975 2.722 1.168 1.749 0.468 1.711 -0.462 5.873 0.313 1.983 1.868 1.787 0.313 1.983 1.285 2.177 0.975 2.722 1.09 0.621 12.523 -0.439 11.978 -0.749 10.578 -0.826 14.661 -1.024 1.092 3.149 0.934 0.894 2.139 -0.585 0.113 -4.628 -1.051 -1.321 -0.04 -1.828 1.087 -1.907 1.128 -0.079 4.162 0.93 3.928 0.074 -1.092 -3.149 -0.002 -2.528 1.477 -1.324 -1.209 -3.577 1.362 0.777 1.709 -2.996 -1.362 -0.777 -1.013 -2.02 0.619 -3.617 1.592 -3.424 2.215 -1.985 -0.585 -2.139 1.673 0.232 2.292 -3.386 -1.09 -0.621 z",
    MS: "m 625.66 363.41 -19.17 1.339 -18.745 1.222 0.896 1.594 -1.477 1.324 -2.02 1.013 0.196 1.555 -1.711 0.468 -0.543 2.217 0.351 1.283 -0.191 3.5 -3.964 3.154 -0.66 1.79 -1.477 1.324 1.207 1.049 -0.349 1.245 -3.149 1.092 1.051 1.321 -0.621 1.089 0.624 1.438 -2.526 2.53 0.896 1.594 -1.243 2.179 1.751 1.36 -0.115 2.1 -0.777 1.362 1.479 1.204 0.158 2.256 -1.166 0.779 0.158 2.256 1.713 2.06 -0.777 1.362 -0.387 1.945 1.09 0.621 -1.204 1.479 0.079 1.128 1.324 1.477 0.158 2.256 3.386 2.292 -2.562 5.758 -0.504 1.517 -1.166 0.779 -1.67 2.296 -1.438 0.624 -1.126 2.607 -0.347 3.773 -1.632 1.596 0.741 1.866 -0.853 2.762 -1.711 0.468 0.624 1.438 -0.349 1.245 1.013 2.02 -1.477 1.324 17.889 -0.988 18.317 -1.105 0.079 1.128 -1.745 6.224 1.13 2.449 2.413 2.098 0.936 3.422 1.168 1.749 1.09 0.621 1.555 -0.196 0.504 -1.517 1.321 -1.051 6.03 -2.339 1.477 -1.324 1.673 0.232 2.024 1.515 3.383 -0.236 1.945 0.387 1.204 -1.479 -2.505 -18.394 -1.879 -14.427 0.685 -17.657 0.378 -12.06 0.378 -12.06 0.029 -10.812 0.455 -13.457 -1.713 -2.06 z",
    SC: "m 800.33 364.11 -13.932 -9.75 -9.07 -6.254 -0.7 -0.038 -18.977 2.894 -0.819 -2.994 -3.075 -2.836 -1.477 1.324 -1.168 -1.749 -12.289 1.294 -9.178 0.902 -4.588 1.715 -3.071 2.22 -1.128 0.079 -5.326 2.377 -0.504 1.517 -2.409 2.958 -0.27 2.373 0.662 0.738 3.696 1.747 2.296 1.67 2.8 0.153 0.896 1.594 1.168 1.749 0.858 2.294 2.958 2.409 0.741 1.866 4.241 2.058 2.296 1.67 1.402 2.605 3.034 1.01 2.296 1.67 0.158 2.256 2.062 0.815 0.468 1.711 1.324 1.477 4.669 1.941 0.858 2.294 1.324 1.477 1.013 2.02 0.275 2.683 3.424 1.592 0.934 0.894 0.975 2.722 0.779 1.166 0.158 2.256 1.713 2.06 1.128 -0.079 2.49 0.698 0.038 -0.7 2.37 -2.258 0.932 -1.634 -2.568 -1.826 0.466 -0.817 2.451 1.398 1.711 -0.468 1.67 -2.296 -0.896 -1.594 -1.79 -0.66 0.349 -1.245 2.334 0.97 1.556 -0.196 2.953 -2.647 2.449 -1.13 1.943 -2.141 0.232 -1.673 1.749 -1.168 1.981 -2.841 0.27 -2.373 1.673 0.232 1.866 -0.741 2.485 -4.358 0.423 -5.173 2.679 -5.33 2.447 -3.658 3.109 -2.92 z",
    IL: "m 618.44 200.11 -14.389 1.179 -17.03 0.754 -14.234 0.907 -0.311 0.545 3.386 2.292 0.975 2.722 3.93 2.602 0.741 1.866 -0.813 4.59 -1.632 1.596 -0.464 3.345 -1.477 1.324 -2.566 0.702 -1.632 1.596 -4.666 0.587 -1.049 1.207 -0.426 2.645 0.196 1.555 1.634 0.932 0.624 1.438 0.119 2.956 -2.098 2.413 -0.308 3.073 -0.894 0.934 -3.305 1.364 0.315 4.511 -0.855 0.234 -0.932 1.634 -0.308 3.073 0.664 3.266 0.624 1.438 0.04 1.828 1.792 3.188 4.437 3.613 1.168 1.749 3.93 2.602 1.675 2.76 0.743 4.394 0.624 1.438 1.362 0.777 2.487 -1.83 4.279 1.357 1.051 1.321 -1.087 1.907 0.158 2.256 -0.815 2.062 -1.979 5.369 1.013 2.02 4.126 4.158 1.79 0.66 1.517 0.504 1.479 1.204 2.062 0.815 1.558 2.332 1.517 0.504 0.819 2.994 1.402 2.605 -0.232 1.673 -0.815 2.062 3.777 5.403 1.166 -0.779 1.479 1.204 0.972 0.194 -1.013 -2.02 1.864 -3.269 2.411 -0.43 4.941 2.096 2.645 0.426 0.815 -2.062 -1.441 -1.904 -0.196 -1.555 0.66 -1.79 2.722 -0.975 2.994 -0.819 0.621 -1.09 -1.558 -2.332 1.553 -2.724 0.194 -0.972 -0.549 -5.367 0.349 -1.245 1.477 -1.324 -1.207 -1.049 0.815 -2.062 1.711 -0.468 1.398 -2.451 -0.234 -0.855 1.632 -1.596 -0.389 -0.583 0.815 -2.062 0.894 -0.934 0.66 -1.79 -1.13 -2.449 -0.04 -1.828 -0.662 -0.738 -1.792 -3.188 1.049 -1.207 -0.313 -1.983 1.204 -1.479 -1.337 -16.644 -1.139 -12.561 -1.886 -22.01 -1.051 -1.321 -1.364 -3.305 -0.819 -2.994 -1.362 -0.777 -1.364 -3.305 0.113 -4.628 z",
    IN: "m 668.2 212.24 -0.079 -1.128 -8.478 0.941 -15.13 1.841 -9.45 0.747 -2.643 2.102 -4.16 1.598 -2.217 -0.543 -1.751 -1.36 1.886 22.01 1.139 12.561 1.337 16.644 -1.204 1.479 0.313 1.983 -1.049 1.207 1.792 3.188 0.662 0.738 0.04 1.828 1.13 2.449 -0.66 1.79 -0.894 0.934 -0.815 2.062 0.389 0.583 -1.632 1.596 0.234 0.855 -1.398 2.451 -1.711 0.468 -0.815 2.062 1.207 1.049 -1.477 1.324 -0.349 1.245 0.549 5.367 1.673 0.232 0.621 -1.089 0.115 -2.1 1.634 0.932 2.139 -0.585 1.362 0.777 0.777 -1.362 2.02 -1.013 6.03 2.717 0.543 -2.217 3.654 -2.609 1.441 1.904 3.694 -0.781 -0.313 -1.983 1.67 -2.296 2.294 -0.858 0.196 1.555 1.634 0.932 2.645 0.426 1.438 -0.624 0.621 -1.089 0.036 -3.228 1.087 -1.907 0.817 0.466 1.749 -1.168 0.426 -2.645 1.321 -1.051 1.826 -2.568 -0.975 -2.722 0.038 -0.7 3.111 -0.392 1.362 0.777 2.915 -1.947 2.994 -0.819 0.27 -2.373 -1.673 -0.232 0.66 -1.79 -0.779 -1.166 0.621 -1.09 -2.039 -19.211 -1.803 -15.827 -1.566 -12.444 -1.058 -8.905 z",
    KY: "m 714.3 278.24 -2.413 -2.098 -2.062 -0.815 -1.636 -3.46 -2.449 1.13 -1.243 2.179 -2.994 0.819 -1.207 -1.049 -2.917 -0.581 -1.787 1.868 -0.972 -0.194 -2.841 -1.981 -1.945 -0.387 -1.983 0.313 -1.945 -0.387 -2.571 -4.354 -2.451 -1.398 -2.994 0.819 -1.479 -1.204 -1.749 1.168 -0.621 1.09 0.779 1.166 -0.66 1.79 1.673 0.232 -0.27 2.373 -2.994 0.819 -2.915 1.947 -1.362 -0.777 -3.111 0.392 -0.038 0.7 0.975 2.722 -1.826 2.568 -1.321 1.051 -0.426 2.645 -1.749 1.168 -0.817 -0.466 -1.087 1.907 -0.036 3.228 -0.621 1.089 -1.438 0.624 -2.645 -0.426 -1.634 -0.932 -0.196 -1.555 -2.294 0.858 -1.67 2.296 0.313 1.983 -3.694 0.781 -1.441 -1.904 -3.654 2.609 -0.543 2.217 -6.03 -2.717 -2.02 1.013 -0.777 1.362 -1.362 -0.777 -2.139 0.585 -1.634 -0.932 -0.115 2.1 -0.621 1.089 -1.673 -0.232 -0.194 0.972 -1.553 2.724 1.558 2.332 -0.621 1.09 -2.994 0.819 -2.722 0.975 -0.66 1.79 0.196 1.555 1.441 1.904 -0.815 2.062 -2.645 -0.426 -4.941 -2.096 -2.411 0.43 -1.864 3.269 1.013 2.02 -0.426 2.645 0.43 2.411 -1.01 3.034 -0.738 0.662 -1.907 -1.087 -1.01 3.034 15.09 -1.141 9.178 -0.902 -0.626 -3.966 3.228 0.036 0.817 0.466 12.989 -1.256 10.733 -1.098 7.04 -0.317 11.278 -0.788 5.094 -0.704 8.75 -0.785 15.517 -1.258 1.166 -0.779 2.487 -1.83 1.555 -0.196 2.76 -1.675 1.866 -0.741 0.66 -1.79 3.188 -1.792 0.232 -1.673 2.06 -1.713 0.232 -1.673 1.049 -1.207 4.392 -3.271 5.983 -6.695 -2.8 -0.153 -1.479 -1.204 -1.907 -1.087 -0.779 -1.166 -1.479 -1.204 -0.624 -1.438 -1.207 -1.049 -2.998 -4.237 0.543 -2.217 -0.781 -3.694 z",
    NC: "m 834.57 297.73 -0.428 0.117 -0.855 0.234 0.934 0.894 0.777 -1.362 -0.428 0.117 z m -1.555 0.196 -5.833 1.366 -15.632 3.358 -10.654 2.226 -13.07 2.656 -14.193 2.735 -10.344 1.681 -10.188 1.409 -9.333 1.175 -7.194 0.59 -0.545 -0.311 -0.815 2.062 0.002 2.528 -2.836 3.075 -1.319 3.579 -0.894 0.934 -2.062 -0.815 -3.188 1.792 -1.398 2.451 -1.438 0.624 -1.168 -1.749 -2.332 1.558 -0.504 1.517 -1.245 -0.349 -1.202 4.01 -1.555 0.196 -2.915 1.947 -4 3.854 -3.966 0.626 -2.605 1.402 -1.943 2.141 -0.426 2.645 -0.777 1.362 -2.683 0.275 -0.621 1.09 0.16 4.784 9.333 -1.175 11.899 -1.877 5.326 -2.377 1.128 -0.079 3.071 -2.22 4.588 -1.715 9.178 -0.902 12.289 -1.294 1.168 1.749 1.477 -1.324 3.075 2.836 0.819 2.994 18.977 -2.894 0.7 0.038 9.07 6.254 13.932 9.75 5.443 -1.949 4.083 -0.198 0.777 -1.362 1.283 -0.351 -0.081 -3.656 0.387 -1.945 2.058 -4.241 2.098 -2.413 2.487 -1.83 1.787 -1.868 0.777 -1.362 4.937 -2.96 4.239 -0.47 1.36 -1.751 0.972 0.194 2.447 -3.658 -1.051 -1.321 -3.228 -0.036 -1.594 0.896 -1.787 1.868 -3.19 -0.736 2.994 -0.819 2.875 -3.775 -2.062 -0.815 2.76 -1.675 -0.468 -1.711 -3.5 -0.191 -4.01 -1.202 3.383 -0.236 1.945 0.387 -0.002 -2.528 1.713 2.06 1.01 -0.506 3.345 0.464 1.983 -0.313 3.417 -5.992 2.177 -1.285 0.232 -1.673 -0.547 -2.839 -1.713 -2.06 -1.362 -0.777 -1.826 2.568 0.664 3.266 -1.517 -0.504 -0.741 -1.866 0.153 -2.8 -2.683 0.275 -2.915 1.947 -1.673 -0.232 -1.321 1.051 -3.111 0.392 0.27 -2.373 2.8 0.153 1.787 -1.868 3.577 -1.209 2.526 -2.53 2.956 -0.119 -1.988 -4.743 -1.907 -1.087 -0.741 -1.866 z",
    OH: "m 741.09 224.93 -1.915 -11.199 -2.971 -17.576 -7.541 4.362 -4.82 3.388 -4.507 5.371 -3.149 1.092 -2.8 -0.153 -3.188 1.792 -1.866 0.741 -2.177 1.285 -1.907 -1.087 -3.383 0.236 -1.321 1.051 -0.779 -1.166 -2.53 -2.526 -2.373 -0.27 -1.479 -1.204 -2.528 0.002 -13.455 2.073 -8.205 1.096 1.058 8.905 1.566 12.444 1.803 15.827 2.039 19.211 1.749 -1.168 1.479 1.204 2.994 -0.819 2.451 1.398 2.571 4.354 1.945 0.387 1.983 -0.313 1.945 0.387 2.841 1.981 0.972 0.194 1.787 -1.868 2.917 0.581 1.207 1.049 2.994 -0.819 1.243 -2.179 2.449 -1.13 1.636 3.46 2.062 0.815 2.413 2.098 1.4 0.077 2.877 -1.247 0.464 -3.345 1.283 -0.351 -0.626 -3.966 1.668 -4.824 0.738 -0.662 2.996 1.709 1.01 -0.506 -0.121 -5.484 0.815 -2.062 1.711 -0.468 0.077 -1.4 1.049 -1.207 1.517 0.504 2.605 -1.402 1.477 -1.324 1.087 -1.907 2.526 -2.53 -0.081 -3.656 1.01 -3.034 -0.119 -2.956 0.657 -4.318 0.66 -1.79 -0.896 -1.594 0.504 -1.517 -1.985 -2.215 2.487 -1.83 z",
    TN: "m 701.35 319.94 -1.166 0.779 -15.517 1.258 -8.75 0.785 -5.094 0.704 -11.278 0.788 -7.04 0.317 -10.733 1.098 -12.989 1.256 -0.817 -0.466 -3.228 -0.036 0.626 3.966 -9.178 0.902 -15.09 1.141 -1.128 0.079 -1.128 0.079 0.702 2.566 -1.477 1.324 0.624 1.438 -1.983 0.313 1.713 2.06 -0.894 0.934 -0.97 2.334 1.168 1.749 -1.555 0.196 0.896 1.594 -1.049 1.207 -2.877 1.247 0.741 1.866 -0.621 1.09 0.779 1.166 -1.866 0.741 -0.077 1.4 -1.204 1.479 -0.27 2.373 0.741 1.866 -0.232 1.673 -1.245 -0.349 -0.815 2.062 -1.321 1.051 18.745 -1.222 19.17 -1.339 -0.117 -0.428 11.978 -0.749 13.961 -1.062 19.911 -2 13.144 -1.528 9.761 -1.292 -0.16 -4.784 0.621 -1.09 2.683 -0.275 0.777 -1.362 0.426 -2.645 1.943 -2.141 2.605 -1.402 3.966 -0.626 4 -3.854 2.915 -1.947 1.555 -0.196 1.202 -4.01 1.245 0.349 0.504 -1.517 2.332 -1.558 1.168 1.749 1.438 -0.624 1.398 -2.451 3.188 -1.792 2.062 0.815 0.894 -0.934 1.319 -3.579 2.836 -3.075 -0.002 -2.528 0.815 -2.062 -4.239 0.47 -0.738 0.662 -15.283 2.113 -14.427 1.879 z",
    VA: "m 832.91 266.47 -0.308 3.073 -1.477 1.324 0.351 1.283 -1.709 2.996 0.934 0.894 -1.01 5.562 0.351 1.283 1.402 2.605 0.151 -5.328 0.815 -2.062 3.453 -9.22 1.049 -1.207 -0.468 -1.711 0.504 -1.517 -4 1.326 -0.038 0.7 z m -41.09 -21.627 -0.657 4.318 -9.416 -5.01 -0.153 2.8 -0.621 1.09 0.43 2.411 -3.262 5.72 -1.283 0.351 -1.592 3.424 -2.062 -0.815 -1.823 5.096 -0.426 2.645 -1.243 2.179 -3.773 -0.347 -1.168 -1.749 -1.517 -0.504 -0.191 3.5 -1.087 1.907 0.04 1.828 -1.826 2.568 -0.774 3.89 -2.796 4.903 -0.853 2.762 1.324 1.477 -1.049 1.207 0.351 1.283 -2.643 2.102 -1.517 -0.504 -3.071 2.219 -1.945 -0.387 -0.232 1.673 -1.049 1.207 -3.149 1.092 -1.594 0.896 -2.296 -1.67 -2.992 3.347 -1.556 0.196 -2.607 -1.126 -0.7 -0.038 -2.296 -1.67 -1.168 -1.749 0.232 -1.673 -5.983 6.695 -4.392 3.271 -1.049 1.207 -0.232 1.673 -2.06 1.713 -0.232 1.673 -3.188 1.792 -0.66 1.79 -1.866 0.741 -2.76 1.675 -1.555 0.196 -2.487 1.83 14.427 -1.879 15.283 -2.113 0.738 -0.662 4.239 -0.47 0.545 0.311 7.194 -0.59 9.333 -1.175 10.188 -1.409 10.344 -1.681 14.193 -2.735 13.07 -2.656 10.654 -2.226 15.632 -3.358 5.833 -1.366 0.272 0.155 0.855 -0.234 -0.664 -3.266 0.428 -0.117 1.519 3.03 0.7 0.038 -3.232 -5.092 -0.858 -2.294 -2.411 0.43 -2.645 -0.426 -0.387 1.945 -2.8 -0.153 -2.141 -1.943 -1.673 -0.232 -1.441 -1.904 -3.269 -1.864 4.745 0.54 0.468 1.711 3.034 1.01 0.779 1.166 2.177 -1.285 0.077 -1.4 -1.051 -1.321 -3.034 -1.01 1.204 -1.479 -0.975 -2.722 1.4 0.077 1.204 -1.479 -2.179 -1.243 -1.868 -1.787 1.283 -0.351 -0.002 -2.528 0.815 -2.062 -0.468 -1.711 -5.252 -1.551 -0.079 -1.128 -1.751 -1.36 -4.511 0.315 -1.517 -0.504 -1.596 -1.632 -0.196 -1.556 -3.615 1.909 -0.7 -0.038 -1.13 -2.449 0.813 -4.59 1.4 0.077 0.232 -1.673 1.01 -0.506 -0.392 -3.111 -0.662 -0.738 -1.245 -0.349 -2.062 -0.815 -0.779 -1.166 -2.528 0.002 -1.634 -0.932 -0.002 -2.528 -1.634 -0.932 -3.228 -0.036 z",
    WI: "m 624.5 138.23 -1.243 2.179 -1.438 0.624 -0.543 2.217 -0.932 1.634 -0.66 1.79 0.896 1.594 1.09 0.621 0.932 -1.634 0.543 -2.217 1.63 -4.124 -0.275 -2.683 z m -53.15 -24.533 -2.373 -0.27 -2.724 -1.553 -0.621 1.09 -1.594 0.896 0.385 -4.473 1.243 -2.179 -1.324 -1.477 -1.711 0.468 -2.37 2.258 -1.517 -0.504 -2.643 2.102 -5.871 2.066 -2.411 0.43 -2.296 -1.67 -1.243 2.179 -1.283 0.351 0.283 12.795 -1.049 1.207 -5.05 2.532 -1.164 3.307 -1.477 1.324 0.119 2.956 1.945 0.387 1.558 2.332 -1.164 3.307 -0.27 2.373 0.313 1.983 -0.738 0.662 0.664 3.266 -0.619 3.617 3.62 3.147 2.917 0.581 1.985 2.215 2.917 0.581 2.413 2.098 1.792 3.188 2.958 2.409 1.828 -0.04 1.907 1.087 2.141 1.943 0.936 3.422 0.238 5.911 0.975 2.722 1.517 0.504 0.351 1.283 -1.281 2.879 0.977 5.25 1.481 3.732 1.362 0.777 4.318 0.657 1.13 2.449 -0.038 0.7 14.234 -0.907 17.03 -0.754 14.389 -1.179 -0.509 -3.539 0.194 -0.972 -0.002 -2.528 -1.051 -1.321 -0.196 -1.555 -1.168 -1.749 0.349 -1.245 -0.781 -3.694 0.27 -2.373 0.815 -2.062 -0.002 -2.528 1.281 -2.879 -0.702 -2.566 -0.158 -2.256 1.047 -3.735 1.204 -1.479 0.777 -1.362 -1.013 -2.02 0.54 -4.745 1.475 -3.852 0.425 -2.645 -2.024 -1.515 -2.02 1.013 -0.894 0.934 -1.592 3.424 -2.06 1.713 -1.866 0.741 0.774 -3.89 1.592 -3.424 0.349 -1.245 2.605 -1.402 0.27 -2.373 -2.024 -1.515 0.077 -1.4 0.698 -2.49 -3.5 -0.191 0.97 -2.334 -0.315 -4.511 -1.751 -1.36 -2.645 -0.425 -0.819 -2.994 -1.09 -0.621 -2.373 -0.27 -3.19 -0.736 -1.438 0.624 -2.917 -0.581 -4.669 -1.941 -15.404 -3.37 -1.909 -3.615 -2.49 -0.698 -0.234 -0.855 z",
    WV: "m 761.64 242.07 -17.15 2.854 -3.401 -19.987 -2.487 1.83 1.985 2.215 -0.504 1.517 0.896 1.594 -0.66 1.79 -0.657 4.318 0.119 2.956 -1.01 3.034 0.081 3.656 -2.526 2.53 -1.087 1.907 -1.477 1.324 -2.605 1.402 -1.517 -0.504 -1.049 1.207 -0.077 1.4 -1.711 0.468 -0.815 2.062 0.121 5.484 -1.01 0.506 -2.996 -1.709 -0.738 0.662 -1.668 4.824 0.626 3.966 -1.283 0.351 -0.464 3.345 -2.877 1.247 -1.4 -0.077 0.781 3.694 -0.543 2.217 2.998 4.237 1.207 1.049 0.624 1.438 1.479 1.204 0.779 1.166 1.907 1.087 1.479 1.204 2.8 0.153 -0.232 1.673 1.168 1.749 2.296 1.67 0.7 0.038 2.607 1.126 1.556 -0.196 2.992 -3.347 2.296 1.67 1.594 -0.896 3.149 -1.092 1.049 -1.207 0.232 -1.673 1.945 0.387 3.071 -2.219 1.517 0.504 2.643 -2.102 -0.351 -1.283 1.049 -1.207 -1.324 -1.477 0.853 -2.762 2.796 -4.903 0.774 -3.89 1.826 -2.568 -0.04 -1.828 1.087 -1.907 0.191 -3.5 1.517 0.504 1.168 1.749 3.773 0.347 1.243 -2.179 0.426 -2.645 1.823 -5.096 2.062 0.815 1.592 -3.424 1.283 -0.351 3.262 -5.72 -0.43 -2.411 0.621 -1.09 0.153 -2.8 9.416 5.01 0.657 -4.318 -0.196 -1.555 -1.324 -1.477 -1.09 -0.621 -1.013 -2.02 -1.438 0.624 -2.996 -1.709 -1.283 0.351 -0.932 1.634 -2.294 0.858 -0.387 1.945 -1.711 0.468 -2.917 -0.581 -0.779 -1.166 -1.281 2.879 -1.087 1.907 -1.79 -0.66 -1.398 2.451 -4.468 4.671 -1.798 -10.771 z",
    DE: "m 827.78 226.72 -3.228 -0.036 -1.632 1.596 -0.777 1.362 0.468 1.711 4.02 13.842 3.043 11.12 10.227 -2.109 0.428 -0.117 0.155 -0.272 -0.741 -1.866 -1.09 -0.621 0.543 -2.217 -0.858 -2.294 -1.555 0.196 -3.113 -2.136 -0.079 -1.128 -1.751 -1.36 -0.936 -3.422 -1.013 -2.02 -3.23 -2.564 0.232 -1.673 -1.324 -1.477 2.213 -4.513 z",
    DC: "m 805.95 253.62 1.67 -2.296 -2.724 -1.553 -1.204 1.479 1.245 0.349 0.934 0.894 0.079 1.128 z",
    MD: "m 822.15 229.65 -9.527 2.147 -18.898 4.02 -15.05 2.969 -17.03 3.282 1.798 10.771 4.468 -4.671 1.398 -2.451 1.79 0.66 1.087 -1.907 1.281 -2.879 0.779 1.166 2.917 0.581 1.711 -0.468 0.387 -1.945 2.294 -0.858 0.932 -1.634 1.283 -0.351 2.996 1.709 1.438 -0.624 1.013 2.02 1.09 0.621 1.324 1.477 0.196 1.555 3.228 0.036 1.634 0.932 0.002 2.528 1.634 0.932 2.528 -0.002 0.779 1.166 2.062 0.815 1.204 -1.479 2.724 1.553 -1.67 2.296 0.158 2.256 -0.815 2.062 -1.01 0.506 -0.853 2.762 0.585 2.139 0.972 0.194 2.526 -2.53 1.285 2.177 1.207 1.049 3.19 0.736 2.411 -0.43 3.151 1.436 1.907 1.087 -0.04 -1.828 -1.324 -1.477 -1.013 -2.02 0.077 -1.4 -2.53 -2.526 -1.17 -4.277 -0.506 -1.01 0.736 -3.19 -0.624 -1.438 1.166 -0.779 -1.754 -3.888 0.66 -1.79 -0.934 -0.894 3.46 -1.636 1.981 -2.841 0.896 1.594 -1.943 2.141 -1.047 3.735 2.645 0.426 0.158 2.256 -1.204 1.479 1.634 0.932 -0.543 2.217 -1.673 -0.232 -0.115 2.1 1.828 -0.04 1.634 0.932 -1.126 2.607 0.196 1.555 -1.01 0.506 2.258 2.37 3.852 1.475 1.749 -1.168 1.207 1.049 -1.204 1.479 2.1 0.115 -0.464 3.345 4.239 -0.47 0.038 -0.7 4 -1.326 0.543 -2.217 0.428 -0.117 0.425 -2.645 1.438 -0.624 0.387 -1.945 -0.662 -0.738 0.387 -1.945 -10.227 2.109 -3.043 -11.12 -4.02 -13.842 -0.468 -1.711 z",
    NJ: "m 833.03 220.69 -1.164 3.307 -2.605 1.402 -1.787 1.868 -0.581 2.917 0.626 3.966 3.541 2.02 1.79 0.66 2.296 1.67 1.866 -0.741 2.762 0.853 -0.268 4.901 1.438 -0.624 1.553 -2.724 0.619 -3.617 0.932 -1.634 0.853 -2.762 1.357 -4.279 1.632 -1.596 0.815 -2.062 -0.506 -1.01 0.27 -2.373 -0.353 -3.811 0.7 0.038 -0.317 -7.04 -1.168 -1.749 -2.956 0.119 -1.634 -0.932 0.581 -2.917 0.894 -0.934 0.7 0.038 0.932 -1.634 0.696 -5.02 -0.351 -1.283 -14.355 -4.577 -1.943 2.141 -0.115 2.1 -1.592 3.424 -1.36 1.751 1.596 1.632 -0.27 2.373 -1.321 1.051 1.053 3.849 1.556 -0.196 0.858 2.294 6.771 4.583 -1.36 1.751 -2.681 2.803 z",
    NY: "m 845.46 203.96 -1.556 0.196 -0.387 1.945 1.983 -0.313 -0.04 -1.828 z m 26.547 -18.07 -1.711 0.468 -3.185 4.32 -2.722 0.975 -5.405 1.249 -1.36 1.751 -4.239 0.47 -0.466 0.817 -3.03 1.519 -0.504 1.517 -2.02 1.013 -1.319 3.579 1.051 1.321 2.37 -2.258 2.062 0.815 2.06 -1.713 2.877 -1.247 2.06 -1.713 4.432 -1.443 3.226 -2.492 1.983 -0.313 2.643 -2.102 6.762 -5.529 -0.662 -0.738 -1.943 2.141 -1.207 -1.049 -1.36 1.751 -1.711 0.468 -0.815 2.062 -2.256 0.158 0.777 -1.362 1.438 -0.624 -0.196 -1.555 0.777 -1.362 1.594 -0.896 z m -58.4 -72.29 -2.683 0.275 -3.381 2.764 -1.787 1.868 -5.322 7.433 -0.815 2.062 0.506 1.01 -3.496 4.864 -1.904 1.441 -2.098 2.413 1.479 1.204 1.01 -0.506 1.245 0.349 0.547 2.839 -1.749 1.168 2.571 4.354 0.04 1.828 -0.621 1.09 -2.566 0.702 -3.575 3.737 -0.349 1.245 -3.771 2.181 -5.95 0.939 -2.605 1.402 -1.4 -0.077 -2.334 -0.97 -5.756 -0.034 -1.866 0.741 -2.528 0.002 -4.588 1.715 -5.481 2.649 0.626 3.966 2.528 -0.002 0.158 2.256 1.402 2.605 -0.387 1.945 -1.477 1.324 -1.436 3.151 -2.953 2.647 -1.515 2.024 -4 3.854 0.939 5.95 13.765 -2.618 12.91 -2.384 15.05 -2.969 8.671 -1.913 19.753 -4.256 3.269 1.864 1.79 0.66 0.506 1.01 0.936 3.422 1.441 1.904 1.907 1.087 2.256 -0.158 1.324 1.477 14.355 4.577 -0.936 -3.422 0.7 0.038 0.702 2.566 0.16 4.784 1.749 -1.168 0.504 -1.517 1.398 -2.451 -1.868 -1.787 3.419 -3.464 -1.479 -1.204 -2.892 -16.449 -0.817 -0.466 0.259 -15.01 -3.982 -17.07 -1.051 -1.321 -2.1 -0.115 0.27 -2.373 -1.949 -5.443 -0.662 -0.738 0.191 -3.5 0.466 -0.817 -0.702 -2.566 -0.002 -2.528 -1.441 -1.904 -0.896 -1.594 0.036 -3.228 -0.934 -0.894 -0.509 -3.539 -9.682 2.42 -10.537 2.654 z",
    PA: "m 831.84 191.13 -1.324 -1.477 -2.256 0.158 -1.907 -1.087 -1.441 -1.904 -0.936 -3.422 -0.506 -1.01 -1.79 -0.66 -3.269 -1.864 -19.753 4.256 -8.671 1.913 -15.05 2.969 -12.91 2.384 -13.765 2.618 -0.939 -5.95 -1.749 1.168 -7.345 5.918 -2.02 1.013 2.971 17.576 1.915 11.199 3.401 19.987 17.15 -2.854 17.03 -3.282 15.05 -2.969 18.898 -4.02 9.527 -2.147 0.777 -1.362 1.632 -1.596 3.228 0.036 0.194 -0.972 3.771 -2.181 0.232 -1.673 1.049 -1.207 2.681 -2.803 1.36 -1.751 -6.771 -4.583 -0.858 -2.294 -1.556 0.196 -1.053 -3.849 1.321 -1.051 0.27 -2.373 -1.596 -1.632 1.36 -1.751 1.592 -3.424 0.115 -2.1 1.943 -2.141 z",
    ME: "m 915.1 101.46 -0.079 -1.128 -1.907 -1.087 -1.01 0.506 -0.308 3.073 0.662 0.738 2.643 -2.102 z m -3.723 -32.08 0.077 -1.4 -2.769 -8.437 -5.537 -16.874 -3.503 -2.719 -4.396 -1.785 -1.4 -0.077 -0.932 1.634 -2.139 0.585 -1.087 1.907 -1.711 0.468 -1.632 1.596 -2.217 -0.543 -0.662 -0.738 -0.819 -2.994 -2.528 0.002 -0.738 0.662 -5.934 18.634 0.783 6.222 -1.36 1.751 -0.347 3.773 0.779 1.166 -0.232 1.673 0.196 1.555 1.324 1.477 -1.592 3.424 0.506 1.01 -2.253 2.685 -0.815 2.062 -0.115 2.1 -0.97 2.334 0.468 1.711 -0.932 1.634 -1.168 -1.749 -1.749 1.168 4.601 13.453 5.186 15.591 2.418 7.154 0.781 3.694 3.23 2.564 0.196 1.555 1.751 1.36 1.438 -0.624 0.464 -3.345 0.27 -2.373 1.632 -1.596 -0.392 -3.111 2.177 -1.285 -1.519 -3.03 1.398 -2.451 1.515 -2.024 2.568 1.826 1.128 -0.079 1.047 -3.735 1.049 -1.207 1.79 0.66 -0.002 -2.528 0.738 -0.662 2.179 1.243 0.894 -0.934 0.543 -2.217 -0.04 -1.828 0.347 -3.773 0.504 -1.517 -1.051 -1.321 1.787 -1.868 2.102 2.643 1.945 0.387 1.711 -0.468 -1.285 -2.177 3.964 -3.154 2.411 -0.43 0.741 1.866 1.283 -0.351 1.477 -1.324 0.232 -1.673 -0.779 -1.166 0.894 -0.934 2.1 0.115 1.438 -0.624 -0.158 -2.256 2.373 0.27 0.777 -1.362 1.556 -0.196 2.368 -4.786 -1.713 -2.06 -3.543 -4.547 -0.972 -0.194 -1.477 1.324 -2.568 -1.826 -0.002 -2.528 -1.713 -2.06 0.894 -0.934 -0.896 -1.594 -3.149 1.092 -3.307 -1.164 0.077 -1.4 z",
    MI: "m 647.05 129.07 0.466 -0.817 -0.275 -2.683 -0.855 0.234 -0.736 3.19 1.4 0.077 z m 55.697 49.811 -1.168 -1.749 -1.481 -3.732 -0.781 -3.694 -0.896 -1.594 -1.639 -5.988 -1.285 -2.177 -2.141 -1.943 -2.062 -0.815 -2.332 1.558 -2.449 1.13 -1.709 2.996 -1.164 3.307 -0.972 -0.194 -1.553 2.724 -3.735 -1.047 -0.934 -0.894 -0.236 -3.383 0.66 -1.79 0.621 -1.09 1.983 -0.313 1.477 -1.324 0.54 -4.745 2.332 -1.558 0.387 -1.945 -0.587 -4.666 0.232 -1.673 -1.326 -4 -2.141 -1.943 0.232 -1.673 1.866 -0.741 -0.624 -1.438 -1.324 -1.477 0.194 -0.972 -2.024 -1.515 -2.8 -0.153 -2.607 -1.126 -1.634 -0.932 -2.528 0.002 -2.102 -2.643 -1.517 -0.504 -2.411 0.43 -1.907 -1.087 -3.034 -1.01 -2.605 1.402 -1.826 2.568 0.002 2.528 1.596 1.632 -0.077 1.4 -2.256 0.158 -2.06 1.713 -0.815 2.062 0.547 2.839 -0.347 3.773 -1.751 -1.36 -0.347 3.773 -1.245 -0.349 0.543 -2.217 -0.468 -1.711 0.466 -0.817 -0.468 -1.711 -2.215 1.985 -1.126 2.607 -1.362 -0.777 -0.932 1.634 -0.7 -0.038 -0.502 4.045 -1.711 0.468 -0.621 1.09 0.585 2.139 0.315 4.511 -2.096 4.941 -1.36 1.751 1.402 2.605 0.353 3.811 -0.815 2.062 -0.232 1.673 0.741 1.866 4.558 9.1 1.247 2.877 0.549 5.367 -0.151 5.328 -1.396 4.979 -1.553 2.724 -1.357 4.279 -1.553 2.724 -2.06 1.713 9.45 -0.747 15.13 -1.841 8.478 -0.941 0.079 1.128 8.205 -1.096 13.455 -2.073 0.387 -1.945 1.902 -3.969 1.01 -0.506 0.423 -5.173 0.194 -0.972 0.932 -1.634 2.487 -1.83 -0.236 -3.383 0.504 -1.517 1.515 -2.024 1.362 0.777 0.158 2.256 1.01 -0.506 0.932 -1.634 0.153 -2.8 -0.506 -1.01 0.657 -4.318 z m -27.12 -63.837 -1.945 -0.387 0.079 1.128 -1.943 2.141 1.945 0.387 2.256 -0.158 1.204 -1.479 -1.596 -1.632 z m -15.1 -6.443 -0.894 0.934 -1.596 -1.632 -2.449 1.13 -3.735 -1.047 0.23 -4.201 -0.506 -1.01 -2.528 0.002 -4.354 2.571 -5.056 0.004 -3.577 1.209 -0.817 -0.466 -1.787 1.868 -3.188 1.792 -1.826 2.568 -1.907 -1.087 -1.749 1.168 -1.596 -1.632 -1.555 0.196 -2.294 0.858 -1.828 0.04 -0.741 -1.866 -1.245 -0.349 -2.219 -3.071 -0.779 -1.166 -2.451 -1.398 -4.201 -0.23 -1.711 0.468 -0.662 -0.738 -2.098 2.413 -1.555 0.196 0.308 -3.073 -1.519 -3.03 -1.517 -0.504 -0.896 -1.594 -2.953 2.647 -0.97 2.334 -2.411 0.43 -1.36 1.751 -2.332 1.558 -6.105 1.211 -2.836 3.075 -5.909 2.766 0.234 0.855 2.49 0.698 1.909 3.615 15.404 3.37 4.669 1.941 2.917 0.581 1.438 -0.624 3.19 0.736 2.373 0.27 1.09 0.621 0.819 2.994 2.645 0.425 1.751 1.36 0.315 4.511 -0.97 2.334 3.5 0.191 -0.698 2.49 -0.077 1.4 2.024 1.515 0.66 -1.79 2.679 -5.33 0.853 -2.762 1.281 -2.879 1.166 -0.779 0.426 -2.645 1.09 0.621 0.196 1.556 1.866 -0.741 1.436 -3.151 1.089 0.621 1.477 -1.324 0.313 1.983 -1.01 0.506 -0.97 2.334 1.517 0.504 1.126 -2.607 2.177 -1.285 1.592 -3.424 2.566 -0.702 6.222 -0.783 1.553 -2.724 3.111 -0.392 5.135 1.123 3.075 2.836 1.673 0.232 -0.313 -1.983 0.698 -2.49 3.345 0.464 6.573 0.5 1.866 -0.741 -2.413 -2.098 0.077 -1.4 -3.89 -0.774 0.894 -0.934 -0.585 -2.139 1.828 -0.04 -1.013 -2.02 0.387 -1.945 -1.245 -0.349 -1.749 1.168 -1.828 0.04 -0.777 1.362 z m -50.651 -16.252 -1.207 -1.049 -3.383 0.236 -2.294 0.858 -3.343 2.064 -2.136 3.113 -0.115 2.1 1.4 0.077 1.792 3.188 2.213 -4.513 4.779 -5.216 1.828 -0.04 0.466 -0.817 z m -12.498 -15.429 -1.866 0.741 -3.071 2.219 -3.926 2.454 -1.321 1.051 1.168 1.749 2.605 -1.402 0.194 -0.972 3.615 -1.909 1.477 -1.324 1.126 -2.607 z",
    HI: "m 250.64 510.99 -3.131 0.172 -4.406 2.632 -0.66 1.936 2.961 2.174 4.04 1.08 3.095 -5.854 -1.902 -2.14 z m -17.01 9.583 2.402 -2.438 -3.097 0.377 0.695 2.061 z m 47.783 4.799 -2.495 -2.322 -2.242 2.552 -2.357 1.026 2.894 5.556 2.163 -2.187 3.736 3.03 2.436 -1.811 -0.57 -2.573 -2.494 -0.215 -1.072 -3.051 z m 13.406 8.365 -0.853 2.881 4.612 -0.138 4.236 0.978 3.03 -1.629 0.216 -0.809 -5.512 -1.046 -0.25 0.604 -5.478 -0.841 z m 13.837 4.22 -1.81 0.934 1.231 4.01 2.847 0.227 0.924 3.427 2.961 1.331 3.621 -1.026 3.01 -2.187 -6.322 -5.05 -6.457 -1.66 z m -6.682 6.664 2.152 -1.413 -1.777 -2.653 -2.084 -0.284 -1.195 1.253 1.219 0.569 0.639 2.562 1.048 -0.034 z m 7.973 4.427 -1.549 -1.286 -1.434 1.925 2.983 -0.639 z m 36.937 22.271 -3.588 -3.403 0.045 -0.991 -2.391 -0.443 -0.081 -3.01 -7.221 -4.974 -3.01 -0.762 -4.374 -2.64 -2.812 0.821 1.573 3.951 -4.723 7.04 1.72 2.732 1.835 5.101 1.062 8.04 4.02 2.629 2.481 -4.066 4.36 -3.327 5.363 -1.528 4.554 -3.01 1.183 -2.164 z",
    PR: "m 652.8172,519.53619 -0.94132,-0.20683 -0.81519,-0.0173 -0.0202,0.12648 1.36672,1.32069 0.44892,0.73848 0.13631,-0.34234 -0.0567,-0.28012 -0.28681,-0.59782 0.22238,0.002 0.0889,0.26524 0.18466,0.17573 0.27264,0.0835 0.35273,-0.0118 -0.22213,-0.24339 0.36159,0.0362 0.0989,-0.0258 -0.39766,-0.61216 z m -11.26547,-2.10608 -0.25686,-0.0777 -0.28463,0.18901 -0.27071,0.24773 -0.5887,0.40638 L 639,518 l -0.87615,-0.71865 -0.4498,0.29734 -0.5506,-0.32082 -0.54914,-0.82928 -0.20841,0.12802 -0.35137,0.12827 -0.25362,0.0577 0.14423,-0.26788 0.17088,-0.19553 -0.0338,-0.17338 -0.19327,-0.0807 -0.25282,0.3437 -0.36892,0.17547 -0.58677,-0.65575 -0.57129,-0.33741 -1.06098,-0.26927 -0.39962,-0.31826 -0.40499,-0.0879 -0.5203,0.34249 -1.50935,-0.48075 -0.7462,-0.17896 -0.30633,0.43981 -0.47856,0.20624 -0.53627,-0.11908 -0.37969,-0.13205 -0.53046,-0.13471 -2.16258,-0.74134 0.40092,0.43492 0.463,0.48468 0.5928,0.32743 0.54795,0.0877 -0.006,0.25662 -1.10449,0.30398 -0.50466,-0.0356 -0.19918,-0.44924 -0.0941,-0.34757 -0.6371,-0.35279 0.12408,-0.454 -0.32461,-0.11175 -0.27917,0.3428 -0.31599,0.17717 -0.28352,-0.15003 -0.11536,-0.19463 -0.22518,-0.30698 -0.43441,-0.081 -0.37738,0.27053 -1.73806,-0.61023 -1.53127,0.39532 -2.58246,-0.86146 -2.82928,0.47563 -1.30446,-0.43129 -2.12938,-0.0858 -0.5436,0.0926 -0.8672,-0.35791 -0.87737,-0.13858 -1.88971,0.11035 -1.30648,0.2467 -0.49097,-0.0485 -1.22614,-0.47352 -0.47164,-0.0771 -3.4548,0.33244 -3.45452,-0.8463 -1.17748,-0.58051 -1.76006,-0.1183 -1.67234,0.41441 -0.63858,0.78085 0.01,0.88776 0.32314,0.62022 -0.0741,0.77625 -0.85063,0.63052 -0.47536,0.26988 -0.6363,0.24582 -0.77812,0.29132 -0.95651,0.24281 -0.0719,0.24123 0.24291,0.64412 0.30816,0.51644 0.4862,1.04697 0.5953,0.1766 0.73832,0.17621 0.28221,0.65856 0.46632,1.7007 0.40499,0.40049 0.20964,0.37272 -0.20456,0.40629 -0.29214,0.25756 -0.2687,0.26628 -0.38433,1.25039 -0.028,1.13284 -0.36947,0.345 0.12035,0.5895 0.11464,0.3641 -0.33048,0.21662 -0.23623,0.323 -0.046,0.65274 0.41411,0.20747 0.44457,-0.0669 0.3171,0.1803 0.12592,0.18967 -0.12278,0.25806 -0.26112,0.12623 -0.30759,0.0823 -0.24253,0.12407 -0.80638,0.34343 -0.0569,0.97019 0.16064,0.33654 0.45593,0.76795 0.36456,0.0282 -0.20809,-0.80963 0.36957,-0.27344 0.71356,0.43476 1.15172,0.16921 0.39517,0.0665 0.49058,-0.0945 0.5655,-0.27214 0.47421,-0.38648 0.47083,0.175 0.80737,0.0143 0.74419,0.16042 0.67337,0.0628 0.72162,0.82187 0.4615,0.36812 0.61956,0.0874 0.0324,-0.32742 0.0639,-0.24419 0.13971,-0.1356 0.17248,-0.007 0.36941,0.0391 0.51248,-0.0328 1.03287,0.0802 0.7023,-0.0873 0.76959,-0.1961 0.67119,-0.34014 0.40415,-0.51055 -0.45756,-0.0183 0.006,-0.25677 0.43225,-0.25014 0.4506,-0.0827 0.29133,0.15294 -0.0427,0.47534 1.36504,0.0519 0.98405,0.42838 0.25201,0.0668 1.36656,-0.14413 0.57236,0.0699 0.21375,0.41 0.24966,-0.0949 0.23567,-0.15348 0.51723,0.29045 0.39953,-0.0659 0.34912,-0.21842 0.35037,-0.17346 1.10022,-0.0287 0.48477,-0.0789 0.35524,-0.1626 0.47309,-0.0474 0.63164,-0.11359 0.55381,0.38447 0.52609,0.65099 0.62576,0.52738 0.67739,0.0998 0.96714,-0.63187 0.78142,-0.15613 0.54375,-0.0212 0.30211,0.0765 0.41025,0.24179 0.16516,0.20425 0.11634,0.23984 0.16516,0.20425 0.31484,0.0902 0.92048,0.11884 0.46666,0.13787 0.38486,-0.0982 0.66848,-0.57314 0.30155,0.24605 0.12512,0.21623 -0.0877,0.1638 -0.36611,0.0961 0.018,0.16751 0.0366,0.094 0.14081,0.22189 0.2729,-0.15743 0.32136,-0.0236 0.3674,0.0205 0.40855,-0.0179 1.98615,-0.99449 0.69142,-0.15382 1.01523,0.0558 0.23903,-0.0184 0.98753,-0.37415 0.4104,-0.0707 0.67524,0.0812 0.76192,0.18498 0.74579,0.0359 1.7463,-0.56555 1.2649,-0.73558 0.66654,-0.59184 -0.31177,-1.03568 0.17669,-0.21116 0.7707,-0.15122 0.17805,-0.0947 0.47351,-0.60096 0.11883,-0.92047 1.22434,-1.80444 0.58345,-0.56026 0.55382,-0.24072 0.65905,-0.13898 0.61642,-0.28898 0.58354,-0.17612 0.55937,0.29722 0.38915,0.0822 0.32162,-0.26457 -0.31298,-0.45561 0.13421,-0.3611 0.3656,0.002 0.31598,0.51935 0.29981,-0.0135 0.05,-0.30307 0.34717,-0.23711 -0.38373,-0.55342 -0.0919,-0.25742 0.1087,-0.31685 -0.4735,0.21702 -0.26588,-0.12568 -0.23501,-0.25708 0.14964,-0.42653 -0.13142,-0.41516 0.10541,-1.46116 0.36345,-1.72268 z m 10.5618,8.44475 -1.73952,-0.10177 -1.14862,-0.41785 -0.42347,-0.0861 -2.66708,0.37526 -0.31785,0.15869 -0.48202,0.38358 -0.6104,0.34459 -0.67048,0.24201 -0.6583,0.0412 -0.16081,-0.024 -0.52224,0.0112 0.49587,0.99701 0.96165,0.15211 1.03924,-0.10496 0.68069,0.23504 0.52451,-0.23365 2.62043,-0.56232 0.63906,-0.25369 0.48857,-0.11304 0.29189,0.29601 0.23026,0.005 0.17885,-0.19257 0.64252,-0.43103 0.22504,-0.077 0.89001,0.0806 0.2455,-0.13204 -0.31975,-0.41347 z",
    GU: "m 531 516 c 0 0 0 0 0 0 1 0 1 1 1 1 1 0 1 0 2 1 0 0 1 0 1 1 0 0 0 0 0 0 1 1 -1 1 1 1 0 0 2 0 2 1 1 0 1 0 2 0 0 0 -1 1 -1 1 0 1 0 1 0 2 0 1 0 1 -1 1 0 1 0 1 0 2 -1 0 -1 0 -2 0 -1 0 -1 1 -2 1 0 0 0 1 0 1 -1 1 -2 0 -2 1 0 1 0 1 -1 1 0 0 -1 1 -1 1 -1 0 -1 0 -2 0 0 0 -1 1 -1 2 -1 0 -1 0 -1 1 0 0 -1 -1 -2 0 0 0 0 1 0 1 0 1 -1 1 -1 1 0 0 0 1 0 2 0 0 0 1 0 1 0 1 0 2 -1 2 0 0 1 1 1 1 0 0 0 1 0 1 0 1 0 1 0 2 0 0 -1 0 -1 0 -1 1 -1 1 -2 1 0 1 0 1 -1 1 0 1 -1 1 -1 1 -1 0 -2 0 -2 0 -1 0 -1 -1 -2 -1 0 0 0 0 -1 -1 0 0 0 -1 0 -1 -1 -1 0 -1 -1 -1 0 -1 0 -1 0 -2 0 0 0 -1 -1 -1 0 -1 -1 -1 -1 -2 0 0 1 0 1 -1 0 0 0 -1 1 -1 0 -1 0 -1 0 -2 0 0 0 0 0 0 l -3 -3 c 0 -1 1 -1 2 0 0 0 1 0 1 0 1 0 1 -1 1 0 0 1 0 0 0 0 2 -1 1 -1 0 0 0 0 2 0 1 -1 0 0 -1 0 -1 -1 0 0 2 0 3 0 0 1 1 0 1 0 1 0 2 0 2 0 1 0 2 -1 2 -1 1 0 1 0 2 0 0 -1 0 -2 0 -2 0 -1 2 0 2 0 1 0 1 -1 1 -1 0 -1 0 -1 1 -1 1 -1 1 -1 1 -2 0 -1 1 -1 1 -2 0 -1 0 -1 0 -2 1 -1 1 -1 2 -1 0 -1 0 -1 0 -2 0 -1 0 -1 -1 -1",
    VI: "m 678 500 c 0 0 -2 2 -2 2 0 0 -2 1 -2 1 0 0 0 2 0 2 0 0 3 1 3 1 0 0 3 0 3 0 0 0 2 2 2 2 0 0 2 0 2 0 0 0 2 -1 2 -1 0 0 5 -1 5 -1 0 0 3 -1 3 -1 0 0 2 -1 2 -1 0 0 -1 -2 -1 -2 0 0 -3 0 -3 0 0 0 -7 -2 -7 -2 0 0 -7 0 -7 0 z m 20 2 c 0 0 0 1 0 1 0 0 1 1 1 1 0 0 3 0 3 0 0 0 1 1 1 1 0 0 2 -1 2 -1 0 0 0 -1 0 -1 0 0 0 0 0 0 0 0 2 -2 2 -2 0 0 1 -1 1 -1 0 0 -2 -1 -2 -1 0 0 -2 1 -2 1 0 0 -3 -1 -3 -1 0 0 -1 1 -1 1 0 0 0 1 0 1 0 0 -2 1 -2 1 z m -7 28 c 0 0 3 -1 3 -1 0 0 3 1 3 1 0 0 3 -2 3 -2 0 0 1 0 1 0 0 0 1 2 1 2 0 0 1 2 1 2 0 0 3 -2 3 -2 0 0 1 1 1 1 0 0 6 -1 6 -1 0 0 1 4 1 4 0 0 -3 1 -3 1 0 0 -4 0 -4 0 0 0 -8 2 -8 2 0 0 -3 0 -3 0 0 0 -5 1 -5 1 0 0 -2 -1 -2 -1 0 0 -1 1 -1 1 0 0 -4 0 -4 0 0 0 -2 -1 0 -2 2 -2 1 -5 1 -5 0 0 6 -1 6 -1 z",
    MP: "m 572 525 c 0 0 2 -2 2 -2 0 0 2 -1 2 -1 0 0 -4 3 -4 3 z m 0 10 c 0 0 4 4 4 4 0 0 -1 -4 -1 -4 0 0 -3 0 -3 0 z m 9 11 c 0 0 2 6 2 6 0 0 0 0 0 0 0 0 3 -6 3 -6 0 0 -5 0 -5 0 z m 9 12 c 0 0 0 6 0 6 0 0 4 2 4 2 0 0 1 -6 1 -6 0 0 -5 -2 -5 -2 z m 17 16 c 0 0 -4 6 -4 6 0 0 1 3 1 3 0 0 6 3 6 3 0 0 2 -4 2 -4 0 0 0 -6 0 -6 0 0 -5 -2 -5 -2 z",
    AS: "m 681 568 c 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 0 -1 0 -1 0 z m 1 1 c 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0 0 -1 0 -1 0 z m 10 5 c 0 -1 -1 -1 -2 -1 0 0 0 0 0 0 0 0 0 -1 0 -1 -1 0 -1 0 -1 1 -1 0 -1 0 -1 0 -1 0 -2 -1 -2 -2 0 0 0 0 0 0 0 0 -1 0 -1 0 0 0 0 -1 -1 -1 0 0 0 -1 0 -1 0 0 0 0 0 0 0 -1 1 -1 1 -1 1 0 2 0 2 -1 1 0 1 0 2 0 1 0 1 0 1 0 1 1 1 1 1 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 1 0 1 0 1 0 2 0 0 1 0 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 1 -1 0 -1 0 -1 0 0 0 1 0 1 0 0 0 1 0 1 0 1 1 1 1 1 1 1 0 1 1 1 1 0 0 0 1 0 1 l 0 0 -2 0 c -2 0 -3 0 -4 0 0 0 -1 0 -1 0 -1 0 -1 0 -1 0 -1 0 -1 0 -1 0 l 0 0 z m -23 -8 c 0 0 0 -1 0 -1 -1 0 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1 0 0 0 0 0 0 0 0 -2 -2 -3 -2 0 -1 0 -1 0 -1 0 0 0 0 0 -1 0 0 1 0 1 1 1 0 1 0 2 0 0 0 1 0 1 0 0 0 1 0 1 0 0 0 0 0 1 -1 1 0 2 0 3 0 1 -1 1 -1 2 -1 0 0 1 0 2 0 0 0 0 0 0 0 1 1 1 1 1 2 1 1 2 2 2 2 0 0 0 0 0 0 0 0 1 2 1 2 l 0 0 0 1 c 0 0 -1 0 -1 1 0 0 0 0 0 0 0 0 0 1 0 1 0 1 0 1 0 1 0 0 -1 0 -1 0 0 0 -1 -1 -1 -1 0 0 -1 0 -1 0 0 0 -1 0 -1 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 -1 1 -1 1 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 -1 0 -1 0 l -1 0 -1 -1 z",
  },
  names: {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    DC: "District Of Columbia",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
    VI: "Virgin Islands",
    GU: "Guam",
    PR: "Puerto Rico",
    MP: "Northern Mariana Islands",
    AS: "American Samoa",
  },
  default_labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all",
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all",
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all",
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all",
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all",
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all",
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all",
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all",
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all",
    },
    HI: { parent_id: "HI", x: 305, y: 565 },
    AK: { parent_id: "AK", x: "113", y: "495" },
    FL: { parent_id: "FL", x: "773", y: "510" },
    ME: { parent_id: "ME", x: "893", y: "85" },
    NY: { parent_id: "NY", x: "815", y: "158" },
    PA: { parent_id: "PA", x: "786", y: "210" },
    VA: { parent_id: "VA", x: "790", y: "282" },
    WV: { parent_id: "WV", x: "744", y: "270" },
    OH: { parent_id: "OH", x: "700", y: "240" },
    IN: { parent_id: "IN", x: "650", y: "250" },
    IL: { parent_id: "IL", x: "600", y: "250" },
    WI: { parent_id: "WI", x: "575", y: "155" },
    NC: { parent_id: "NC", x: "784", y: "326" },
    TN: { parent_id: "TN", x: "655", y: "340" },
    AR: { parent_id: "AR", x: "548", y: "368" },
    MO: { parent_id: "MO", x: "548", y: "293" },
    GA: { parent_id: "GA", x: "718", y: "405" },
    SC: { parent_id: "SC", x: "760", y: "371" },
    KY: { parent_id: "KY", x: "680", y: "300" },
    AL: { parent_id: "AL", x: "655", y: "405" },
    LA: { parent_id: "LA", x: "550", y: "435" },
    MS: { parent_id: "MS", x: "600", y: "405" },
    IA: { parent_id: "IA", x: "525", y: "210" },
    MN: { parent_id: "MN", x: "506", y: "124" },
    OK: { parent_id: "OK", x: "460", y: "360" },
    TX: { parent_id: "TX", x: "425", y: "435" },
    NM: { parent_id: "NM", x: "305", y: "365" },
    KS: { parent_id: "KS", x: "445", y: "290" },
    NE: { parent_id: "NE", x: "420", y: "225" },
    SD: { parent_id: "SD", x: "413", y: "160" },
    ND: { parent_id: "ND", x: "416", y: "96" },
    WY: { parent_id: "WY", x: "300", y: "180" },
    MT: { parent_id: "MT", x: "280", y: "95" },
    CO: { parent_id: "CO", x: "320", y: "275" },
    UT: { parent_id: "UT", x: "223", y: "260" },
    AZ: { parent_id: "AZ", x: "205", y: "360" },
    NV: { parent_id: "NV", x: "140", y: "235" },
    OR: { parent_id: "OR", x: "100", y: "120" },
    WA: { parent_id: "WA", x: "130", y: "55" },
    ID: { parent_id: "ID", x: "200", y: "150" },
    CA: { parent_id: "CA", x: "79", y: "285" },
    MI: { parent_id: "MI", x: "663", y: "185" },
    PR: { parent_id: "PR", x: "620", y: "545" },
    GU: { parent_id: "GU", x: "550", y: "540" },
    VI: { parent_id: "VI", x: "680", y: "519" },
    MP: { parent_id: "MP", x: "570", y: "575" },
    AS: { parent_id: "AS", x: "665", y: "580" },
  },
  proj: "lambert",
  proj_coordinates: [
    { lat: 45.995417, lng: -116.915987, x: 171.83415, y: 90.850238 },
    { lat: 31.000691, lng: -85.002362, x: 692.14036, y: 444.326 },
    { lat: 42.05, lng: -73.487, x: 847.59791, y: 171.53721 },
    { lat: 68.88, lng: -166.217, x: 70.739, y: 450.663 },
    { lat: 60.306316, lng: -141.001862, x: 155.698, y: 539.706 },
    { lat: 69.646, lng: -141.001, x: 155.42539, y: 455.01987 },
    { lat: 21.574919, lng: -158.281348, x: 274.25329, y: 526.50555 },
    { lat: 18.91, lng: -155.681, x: 328.69953, y: 585.08864 },
    { lat: 20.634391, lng: -156.451664, x: 311.812, y: 546.523 },
    {
      lat: 17.952911638835076,
      lng: -67.80315508659565,
      x: 568.50688,
      y: 530.25711,
    },
    {
      lat: 18.19285310206456,
      lng: -66.45655677324636,
      x: 613.64754,
      y: 523.56889,
    },
    {
      lat: 18.492779931101417,
      lng: -65.37927812256693,
      x: 649.66308,
      y: 513.96978,
    },
  ],
  proj_rules: [
    { condition: "lat>50 && lng<-125", points: [3, 4, 5] },
    {
      condition: "lat<18.5 && lat>17 && lng<-65 && lng>-68",
      points: [9, 10, 11],
    },
    {
      condition: "lat<24 && lat>17 && lng<-154 && lng>-160",
      points: [6, 7, 8],
    },
  ],
};

/* Map logic - do not edit */
!(function (e) {
  var t,
    o,
    i,
    n = {};
  (function () {
    var e,
      t,
      o,
      i,
      n,
      r,
      a,
      s,
      l,
      c,
      m,
      u = this || Function("return this")(),
      p = (function () {
        "use strict";
        var e,
          t,
          o,
          i,
          n,
          r = "linear",
          a =
            Date.now ||
            function () {
              return +new Date();
            },
          s = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : a;
        function l() {}
        function c(e, t) {
          for (var o in e) Object.hasOwnProperty.call(e, o) && t(o);
        }
        function m(e, t) {
          return (
            c(t, function (o) {
              e[o] = t[o];
            }),
            e
          );
        }
        function p(e, t) {
          c(t, function (o) {
            void 0 === e[o] && (e[o] = t[o]);
          });
        }
        function d(t, o, i, n, r, a, s) {
          var l,
            c,
            m,
            u,
            p,
            d,
            f = t < a ? 0 : (t - a) / r;
          for (p in o) {
            o.hasOwnProperty(p) &&
              ((d = "function" == typeof (d = s[p]) ? d : e[d]),
              (o[p] =
                ((l = i[p]),
                (c = n[p]),
                (m = d),
                (u = f),
                l + (c - l) * m(u))));
          }
          return o;
        }
        function f(e, t, o, i) {
          return e + (t - e) * o(i);
        }
        function h(e, t) {
          var o = v.prototype.filter,
            i = e._filterArgs;
          c(o, function (n) {
            void 0 !== o[n][t] && o[n][t].apply(e, i);
          });
        }
        function $(e, t, r, a, l, c, m, u, p, f, $) {
          (n = t + r + a),
            (o = Math.min($ || s(), n)),
            (i = n <= o),
            (n = a - (n - o)),
            e.isPlaying() &&
              (i
                ? (p(m, e._attachment, n), e.stop(!0))
                : ((e._scheduleId = f(e._timeoutHandler, 1e3 / 60)),
                  h(e, "beforeTween"),
                  o < t + r
                    ? d(1, l, c, m, 1, 1, u)
                    : d(o, l, c, m, a, t + r, u),
                  h(e, "afterTween"),
                  p(l, e._attachment, n)));
        }
        function _(e, t) {
          var o = {},
            i = typeof t;
          return (
            c(
              e,
              "string" == i || "function" == i
                ? function (e) {
                    o[e] = t;
                  }
                : function (e) {
                    o[e] || (o[e] = t[e] || r);
                  }
            ),
            o
          );
        }
        function v(e, o) {
          (this._currentState = e || {}),
            (this._configured = !1),
            (this._scheduleFunction = t),
            void 0 !== o && this.setConfig(o);
        }
        return (
          (t =
            ("undefined" != typeof window &&
              (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                (window.mozCancelRequestAnimationFrame &&
                  window.mozRequestAnimationFrame))) ||
            setTimeout),
          (v.prototype.tween = function (e) {
            return this._isTweening
              ? this
              : ((void 0 === e && this._configured) || this.setConfig(e),
                (this._timestamp = s()),
                this._start(this.get(), this._attachment),
                this.resume());
          }),
          (v.prototype.setConfig = function (e) {
            (e = e || {}),
              (this._configured = !0),
              (this._attachment = e.attachment),
              (this._pausedAtTime = null),
              (this._scheduleId = null),
              (this._delay = e.delay || 0),
              (this._start = e.start || l),
              (this._step = e.step || l),
              (this._finish = e.finish || l),
              (this._duration = e.duration || 500),
              (this._currentState = m({}, e.from || this.get())),
              (this._originalState = this.get()),
              (this._targetState = m({}, e.to || this.get()));
            var t = this;
            this._timeoutHandler = function () {
              $(
                t,
                t._timestamp,
                t._delay,
                t._duration,
                t._currentState,
                t._originalState,
                t._targetState,
                t._easing,
                t._step,
                t._scheduleFunction
              );
            };
            var o = this._currentState,
              i = this._targetState;
            return (
              p(i, o),
              (this._easing = _(o, e.easing || r)),
              (this._filterArgs = [o, this._originalState, i, this._easing]),
              h(this, "tweenCreated"),
              this
            );
          }),
          (v.prototype.get = function () {
            return m({}, this._currentState);
          }),
          (v.prototype.set = function (e) {
            this._currentState = e;
          }),
          (v.prototype.pause = function () {
            return (this._pausedAtTime = s()), (this._isPaused = !0), this;
          }),
          (v.prototype.resume = function () {
            return (
              this._isPaused && (this._timestamp += s() - this._pausedAtTime),
              (this._isPaused = !1),
              (this._isTweening = !0),
              this._timeoutHandler(),
              this
            );
          }),
          (v.prototype.seek = function (e) {
            e = Math.max(e, 0);
            var t = s();
            return (
              this._timestamp + e === 0 ||
                ((this._timestamp = t - e),
                this.isPlaying() ||
                  ((this._isTweening = !0),
                  (this._isPaused = !1),
                  $(
                    this,
                    this._timestamp,
                    this._delay,
                    this._duration,
                    this._currentState,
                    this._originalState,
                    this._targetState,
                    this._easing,
                    this._step,
                    this._scheduleFunction,
                    t
                  ),
                  this.pause())),
              this
            );
          }),
          (v.prototype.stop = function (e) {
            return (
              (this._isTweening = !1),
              (this._isPaused = !1),
              (this._timeoutHandler = l),
              (
                u.cancelAnimationFrame ||
                u.webkitCancelAnimationFrame ||
                u.oCancelAnimationFrame ||
                u.msCancelAnimationFrame ||
                u.mozCancelRequestAnimationFrame ||
                u.clearTimeout
              )(this._scheduleId),
              e &&
                (h(this, "beforeTween"),
                d(
                  1,
                  this._currentState,
                  this._originalState,
                  this._targetState,
                  1,
                  0,
                  this._easing
                ),
                h(this, "afterTween"),
                h(this, "afterTweenEnd"),
                this._finish.call(this, this._currentState, this._attachment)),
              this
            );
          }),
          (v.prototype.isPlaying = function () {
            return this._isTweening && !this._isPaused;
          }),
          (v.prototype.setScheduleFunction = function (e) {
            this._scheduleFunction = e;
          }),
          (v.prototype.dispose = function () {
            for (var e in this) this.hasOwnProperty(e) && delete this[e];
          }),
          (v.prototype.filter = {}),
          (e = v.prototype.formula =
            {
              linear: function (e) {
                return e;
              },
            }),
          m(v, {
            now: s,
            each: c,
            tweenProps: d,
            tweenProp: f,
            applyFilter: h,
            shallowCopy: m,
            defaults: p,
            composeEasingObject: _,
          }),
          "function" == typeof SHIFTY_DEBUG_NOW && (u.timeoutHandler = $),
          (u.Tweenable = v)
        );
      })();
    function d(e) {
      t.each(e, function (t) {
        var o = e[t];
        "string" == typeof o && o.match(s) && (e[t] = $(s, o, f));
      });
    }
    function f(e) {
      var t;
      return (
        "rgb(" +
        (e =
          (3 === (t = (t = e).replace(/#/, "")).length &&
            (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
          (c[0] = h(t.substr(0, 2))),
          (c[1] = h(t.substr(2, 2))),
          (c[2] = h(t.substr(4, 2))),
          c))[0] +
        "," +
        e[1] +
        "," +
        e[2] +
        ")"
      );
    }
    function h(e) {
      return parseInt(e, 16);
    }
    function $(e, t, o) {
      var i = t.match(e),
        n = t.replace(e, l);
      if (i)
        for (var r, a = i.length, s = 0; s < a; s++)
          (r = i.shift()), (n = n.replace(l, o(r)));
      return n;
    }
    function _(e) {
      for (
        var t = e.match(n), o = t.length, i = e.match(a)[0], r = 0;
        r < o;
        r++
      )
        i += parseInt(t[r], 10) + ",";
      return i.slice(0, -1) + ")";
    }
    function v(e, o) {
      t.each(o, function (t) {
        for (var i = g(e[t]), n = i.length, r = 0; r < n; r++)
          e[o[t].chunkNames[r]] = +i[r];
        delete e[t];
      });
    }
    function y(e, o) {
      t.each(o, function (t) {
        var i = e[t],
          n = (function (e, t) {
            m.length = 0;
            for (var o = t.length, i = 0; i < o; i++) m.push(e[t[i]]);
            return m;
          })(
            (function (e, t) {
              for (var o, i = {}, n = t.length, r = 0; r < n; r++)
                (i[(o = t[r])] = e[o]), delete e[o];
              return i;
            })(e, o[t].chunkNames),
            o[t].chunkNames
          ),
          i = (function (e, t) {
            for (var o = e, i = t.length, n = 0; n < i; n++)
              o = o.replace(l, +t[n].toFixed(4));
            return o;
          })(o[t].formatString, n);
        e[t] = $(r, i, _);
      });
    }
    function g(e) {
      return e.match(n);
    }
    p.shallowCopy(p.prototype.formula, {
      easeInQuad: function (e) {
        return Math.pow(e, 2);
      },
      easeOutQuad: function (e) {
        return -(Math.pow(e - 1, 2) - 1);
      },
      easeInOutQuad: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      },
      easeInCubic: function (e) {
        return Math.pow(e, 3);
      },
      easeOutCubic: function (e) {
        return Math.pow(e - 1, 3) + 1;
      },
      easeInOutCubic: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      },
      easeInQuart: function (e) {
        return Math.pow(e, 4);
      },
      easeOutQuart: function (e) {
        return -(Math.pow(e - 1, 4) - 1);
      },
      easeInOutQuart: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      },
      easeInQuint: function (e) {
        return Math.pow(e, 5);
      },
      easeOutQuint: function (e) {
        return Math.pow(e - 1, 5) + 1;
      },
      easeInOutQuint: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      },
      easeInSine: function (e) {
        return 1 - Math.cos(e * (Math.PI / 2));
      },
      easeOutSine: function (e) {
        return Math.sin(e * (Math.PI / 2));
      },
      easeInOutSine: function (e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      },
      easeInExpo: function (e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      },
      easeOutExpo: function (e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
      },
      easeInOutExpo: function (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (2 - Math.pow(2, -10 * --e));
      },
      easeInCirc: function (e) {
        return -(Math.sqrt(1 - e * e) - 1);
      },
      easeOutCirc: function (e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      },
      easeInOutCirc: function (e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      },
      easeOutBounce: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      },
      easeInBack: function (e) {
        return e * e * (2.70158 * e - 1.70158);
      },
      easeOutBack: function (e) {
        return --e * e * (2.70158 * e + 1.70158) + 1;
      },
      easeInOutBack: function (e) {
        var t = 1.70158;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      },
      elastic: function (e) {
        return (
          -1 *
            Math.pow(4, -8 * e) *
            Math.sin(((6 * e - 1) * (2 * Math.PI)) / 2) +
          1
        );
      },
      swingFromTo: function (e) {
        var t = 1.70158;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      },
      swingFrom: function (e) {
        return e * e * (2.70158 * e - 1.70158);
      },
      swingTo: function (e) {
        return --e * e * (2.70158 * e + 1.70158) + 1;
      },
      bounce: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      },
      bouncePast: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      },
      easeFromTo: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      },
      easeFrom: function (e) {
        return Math.pow(e, 4);
      },
      easeTo: function (e) {
        return Math.pow(e, 0.25);
      },
    }),
      (p.setBezierFunction = function (e, t, o, i, n) {
        var r,
          a,
          s,
          l,
          c =
            ((r = t),
            (a = o),
            (s = i),
            (l = n),
            function (e) {
              return (function e(t, o, i, n, r, a) {
                var s,
                  l = 0,
                  c = 0,
                  m = 0,
                  u = 0,
                  p = 0,
                  d = 0;
                function f(e) {
                  return ((l * e + c) * e + m) * e;
                }
                function h(e) {
                  return 0 <= e ? e : 0 - e;
                }
                return (
                  (l = 1 - (m = 3 * o) - (c = 3 * (n - o) - m)),
                  (((u = 1 - (d = 3 * i) - (p = 3 * (r - i) - d)) *
                    (s = (function (e, t) {
                      var o, i, n, r, a, s, u;
                      for (n = e, s = 0; s < 8; s++) {
                        if (h((r = f(n) - e)) < t) return n;
                        if (1e-6 > h((a = (3 * l * (u = n) + 2 * c) * u + m)))
                          break;
                        n -= r / a;
                      }
                      if (((i = 1), (n = e) < (o = 0))) return o;
                      if (i < n) return i;
                      for (; o < i && !(h((r = f(n)) - e) < t); )
                        r < e ? (o = n) : (i = n), (n = 0.5 * (i - o) + o);
                      return n;
                    })(t, (s = 0.005))) +
                    p) *
                    s +
                    d) *
                    s
                );
              })(e, r, a, s, l, 1);
            });
        return (
          (c.displayName = e),
          (c.x1 = t),
          (c.y1 = o),
          (c.x2 = i),
          (c.y2 = n),
          (p.prototype.formula[e] = c)
        );
      }),
      (p.unsetBezierFunction = function (e) {
        delete p.prototype.formula[e];
      }),
      ((e = new p())._filterArgs = []),
      (p.interpolate = function (t, o, i, n, r) {
        var a = p.shallowCopy({}, t),
          s = r || 0,
          r = p.composeEasingObject(t, n || "linear");
        return (
          e.set({}),
          ((n = e._filterArgs).length = 0),
          (n[0] = a),
          (n[1] = t),
          (n[2] = o),
          (n[3] = r),
          p.applyFilter(e, "tweenCreated"),
          p.applyFilter(e, "beforeTween"),
          (r = p.tweenProps(i, a, t, o, 1, s, r)),
          p.applyFilter(e, "afterTween"),
          r
        );
      }),
      (t = p),
      (o = /(\d|\-|\.)/),
      (i = /([^\-0-9\.]+)/g),
      (r = RegExp(
        "rgb\\(" +
          (n = /[0-9.\-]+/g).source +
          /,\s*/.source +
          n.source +
          /,\s*/.source +
          n.source +
          "\\)",
        "g"
      )),
      (a = /^.*\(/),
      (s = /#([0-9]|[a-f]){3,6}/gi),
      (l = "VAL"),
      (c = []),
      (m = []),
      (t.prototype.filter.token = {
        tweenCreated: function (e, n, r, a) {
          var s, c;
          d(e),
            d(n),
            d(r),
            (this._tokenData =
              ((s = e),
              (c = {}),
              t.each(s, function (e) {
                var t,
                  n,
                  r = s[e];
                "string" == typeof r &&
                  ((t = g(r)),
                  (c[e] = {
                    formatString:
                      ((r = (n = r).match(i))
                        ? (1 === r.length || n.charAt(0).match(o)) &&
                          r.unshift("")
                        : (r = ["", ""]),
                      r.join(l)),
                    chunkNames: (function (e, t) {
                      for (var o = [], i = e.length, n = 0; n < i; n++)
                        o.push("_" + t + "_" + n);
                      return o;
                    })(t, e),
                  }));
              }),
              c));
        },
        beforeTween: function (e, o, i, n) {
          var r, a;
          (r = n),
            (a = this._tokenData),
            t.each(a, function (e) {
              var t = a[e].chunkNames,
                o = t.length,
                i = r[e];
              if ("string" == typeof i)
                for (
                  var n = i.split(" "), s = n[n.length - 1], l = 0;
                  l < o;
                  l++
                )
                  r[t[l]] = n[l] || s;
              else for (l = 0; l < o; l++) r[t[l]] = i;
              delete r[e];
            }),
            v(e, this._tokenData),
            v(o, this._tokenData),
            v(i, this._tokenData);
        },
        afterTween: function (e, o, i, n) {
          var r, a;
          y(e, this._tokenData),
            y(o, this._tokenData),
            y(i, this._tokenData),
            (r = n),
            (a = this._tokenData),
            t.each(a, function (e) {
              var t = a[e].chunkNames,
                o = t.length,
                i = r[t[0]];
              if ("string" == typeof i) {
                for (var n = "", s = 0; s < o; s++)
                  (n += " " + r[t[s]]), delete r[t[s]];
                r[e] = n.substr(1);
              } else r[e] = i;
            });
        },
      });
  }.call(null),
    (function (e, t) {
      (e = e || "docReady"), (t = t || window);
      var o = [],
        i = !1,
        n = !1;
      function r() {
        if (!i) {
          i = !0;
          for (var e = 0; e < o.length; e++) o[e].fn.call(window, o[e].ctx);
          o = [];
        }
      }
      function a() {
        "complete" === document.readyState && r();
      }
      t[e] = function (e, t) {
        if (i) {
          setTimeout(function () {
            e(t);
          }, 1);
          return;
        }
        o.push({ fn: e, ctx: t }),
          "complete" !== document.readyState &&
          (document.attachEvent || "interactive" !== document.readyState)
            ? n ||
              (document.addEventListener
                ? (document.addEventListener("DOMContentLoaded", r, !1),
                  window.addEventListener("load", r, !1))
                : (document.attachEvent("onreadystatechange", a),
                  window.attachEvent("onload", r)),
              (n = !0))
            : setTimeout(r, 1);
      };
    })("docReady", n),
    (t = window.console),
    (o = window.Object),
    (i = window.Array),
    (void 0 === t || void 0 === t.log) && ((t = {}).log = function () {}),
    "function" != typeof o.create &&
      (o.create = function (e) {
        function t() {}
        return (t.prototype = e), new t();
      }),
    i.prototype.forEach ||
      (i.prototype.forEach = function (e, t) {
        for (var o = 0, i = this.length; o < i; ++o)
          e.call(t, this[o], o, this);
      }),
    (Object.size = function (e) {
      var t,
        o = 0;
      for (t in e) e.hasOwnProperty(t) && o++;
      return o;
    }));
  var r = (function () {
      var e = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera\sMini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
          );
        },
      };
      function t(e, t) {
        var o = e[0],
          i = e[1],
          n = Raphael.transformPath("M" + o + "," + i, t).toString(),
          r = /M(-?\d+.?\d*),(-?\d+.?\d*)/.exec(n);
        return [r[1], r[2]];
      }
      function o(e) {
        return Math.min.apply(Math, e);
      }
      function i(e) {
        return Math.max.apply(Math, e);
      }
      return {
        min: o,
        max: i,
        addEvent: function e(t, o, i) {
          t.attachEvent
            ? ((t["e" + o + i] = i),
              (t[o + i] = function () {
                t["e" + o + i](window.event);
              }),
              t.attachEvent("on" + o, t[o + i]))
            : t.addEventListener(o, i, !1);
        },
        isMobile: e,
        linePath: function e(t, o, i, n) {
          var r = { x: t, y: o },
            a = { x: i, y: n };
          return "M" + r.x + " " + r.y + " L" + a.x + " " + a.y;
        },
        clone: function e(t) {
          if ("object" != typeof t || null === t) return t;
          var o = t.constructor();
          for (var i in t) o[i] = e(t[i]);
          return o;
        },
        isFunction: function e(t) {
          return t && "[object Function]" === {}.toString.call(t);
        },
        findPos: function e(t) {
          function o(e, t) {
            if (e.currentStyle) var o = e.currentStyle[t];
            else if (window.getComputedStyle)
              var o = window.getComputedStyle(e, null)[t];
            return o;
          }
          var i,
            n = o(document.body, "position");
          "relative" == n && (document.body.style.position = "static"),
            o(document.body, "position");
          for (
            var r = (i = 0), a = t, s = !1;
            (a = a.parentNode) && a != document.body;

          )
            (r -= a.scrollLeft || 0),
              (i -= a.scrollTop || 0),
              "fixed" == o(a, "position") && (s = !0);
          if (s && !window.opera) {
            var l,
              c =
                ((l = document.getElementsByTagName("html")[0]),
                l.scrollTop && document.documentElement.scrollTop
                  ? [l.scrollLeft, l.scrollTop]
                  : l.scrollTop || document.documentElement.scrollTop
                  ? [
                      l.scrollLeft + document.documentElement.scrollLeft,
                      l.scrollTop + document.documentElement.scrollTop,
                    ]
                  : document.body.scrollTop
                  ? [document.body.scrollLeft, document.body.scrollTop]
                  : [0, 0]);
            (r += c[0]), (i += c[1]);
          }
          do (r += t.offsetLeft), (i += t.offsetTop);
          while ((t = t.offsetParent));
          return (document.body.style.position = n), [r, i];
        },
        replaceAll: function e(t, o, i) {
          return t.replace(RegExp(o, "g"), i);
        },
        rotate_bbox: function e(n, r) {
          var a = [n.x, n.y],
            s = [n.x2, n.y],
            l = [n.x, n.y2],
            c = [n.x2, n.y2],
            m = t(a, r),
            u = t(s, r),
            p = t(l, r),
            d = t(c, r),
            f = [m[0], u[0], p[0], d[0]],
            h = [m[1], u[1], p[1], d[1]],
            $ = o(f),
            _ = i(f),
            v = o(h),
            y = i(h);
          return { x: $, y: v, x2: _, y2: y, width: _ - $, height: y - v };
        },
        rotate: t,
        bbox_union: function e(t) {
          for (var o = [], i = [], n = [], a = [], s = 0; s < t.length; s++) {
            var l = t[s];
            o.push(l.x), i.push(l.x2), a.push(l.y), n.push(l.y2);
          }
          var c = r.min(o),
            m = r.max(i),
            u = r.min(a),
            p = r.max(n);
          return { x: c, x2: m, y: u, y2: p, width: m - c, height: p - u };
        },
        distance: function e(t, o) {
          var i = t.x,
            n = t.y,
            r = o.x,
            a = o.y,
            s = r - i,
            l = a - n;
          return Math.sqrt(l * l + s * s);
        },
        x_in_array: function e(t, o) {
          for (var i = o.length; i--; ) if (o[i] === t) return !0;
          return !1;
        },
        clear_sets: function e(t) {
          for (var o = 0; o < t.length; o++) {
            var i = t[o];
            i.forEach(function (e) {
              e.remove();
            }),
              i.splice(0, i.length);
          }
        },
        delete_element: function e(t) {
          t.parentNode && t.parentNode.removeChild(t);
        },
        to_float: function e(t) {
          var o = parseFloat(t);
          return !isNaN(o) && o;
        },
        callback_closure: function e(t, o) {
          return function () {
            return o(t);
          };
        },
        new_style: function e(t) {
          var o = document.getElementsByTagName("head")[0],
            i = document.createElement("style");
          return (
            (i.type = "text/css"),
            (i.media = "screen"),
            i.styleSheet
              ? (i.styleSheet.cssText = t)
              : i.appendChild(document.createTextNode(t)),
            o.appendChild(i),
            i
          );
        },
      };
    })(),
    a = !!window[e + "_mapdata"] && window[e + "_mapdata"],
    s = !!window[e + "_mapinfo"] && window[e + "_mapinfo"],
    l = e.substring(0, e.length - 3).replace("simplemaps_", ""),
    c = !1,
    m = !1,
    u = [],
    p = {
      rounded_box:
        "m2.158.263h5.684c1.05 0 1.895.845 1.895 1.895v5.684c0 1.05-.845 1.895-1.895 1.895h-5.684c-1.05 0-1.895-.845-1.895-1.895v-5.684c0-1.05.845-1.895 1.895-1.895z",
      plus: "m4.8 1.5c-.111 0-.2.089-.2.2v3h-2.9c-.111 0-.2.134-.2.3 0 .166.089.3.2.3h2.9v3c0 .111.089.2.2.2h.2c.111 0 .2-.089.2-.2v-3h3.1c.111 0 .2-.134.2-.3 0-.166-.089-.3-.2-.3h-3.1v-3c0-.111-.089-.2-.2-.2z",
      minus:
        "m1.8 4.7h6.6c.111 0 .2.134.2.3 0 .166-.089.3-.2.3h-6.6c-.111 0-.2-.134-.2-.3 0-.166.089-.3.2-.3",
      arrow:
        "m7.07 8.721c2.874-1.335 2.01-5.762-2.35-5.661v-1.778l-3.445 2.694 3.445 2.843v-1.818c3.638-.076 3.472 2.802 2.35 3.721z",
    },
    d = {
      mapdata: a,
      mapinfo: s,
      load: f,
      hooks: r.clone({
        over_state: !1,
        over_region: !1,
        over_location: !1,
        out_state: !1,
        out_region: !1,
        out_location: !1,
        click_state: !1,
        click_region: !1,
        click_location: !1,
        close_popup: !1,
        zoomable_click_state: !1,
        zoomable_click_region: !1,
        complete: !1,
        refresh_complete: !1,
        zooming_complete: !1,
        back: !1,
        ready: !1,
        click_xy: !1,
      }),
      plugin_hooks: r.clone({
        over_state: [],
        over_region: [],
        over_location: [],
        out_state: [],
        out_region: [],
        out_location: [],
        click_state: [],
        click_region: [],
        click_location: [],
        preclick_state: [],
        preclick_region: [],
        preclick_location: [],
        close_popup: [],
        zoomable_click_state: [],
        zoomable_click_region: [],
        complete: [],
        refresh_complete: [],
        zooming_complete: [],
        back: [],
        ready: [],
        click_xy: [],
      }),
      copy: function () {
        var e = {
          mapdata: r.clone(this.mapdata),
          mapinfo: r.clone(this.mapinfo),
          hooks: r.clone(this.hooks),
          plugin_hooks: r.clone(this.plugin_hooks),
          copy: this.copy,
          load: f,
        };
        return u.push(e), e;
      },
      create: function () {
        var t = {
          mapdata: !!window[e + "_mapdata"] && r.clone(window[e + "_mapdata"]),
          mapinfo: !!window[e + "_mapinfo"] && r.clone(window[e + "_mapinfo"]),
          hooks: r.clone(this.hooks),
          plugin_hooks: r.clone(this.plugin_hooks),
          copy: this.copy,
          load: f,
        };
        return u.push(t), t;
      },
      mobile_device: !!r.isMobile.any(),
      loaded: !1,
    };
  function f() {
    var e,
      t,
      o,
      i,
      a,
      s,
      u,
      d,
      f,
      h,
      $,
      _,
      v,
      y,
      g,
      b,
      x,
      w,
      k,
      z,
      E,
      A,
      C,
      T,
      S,
      B,
      F,
      I,
      P,
      O,
      j,
      L,
      M,
      N,
      D,
      R,
      H,
      q,
      W,
      V,
      Y,
      Q,
      X,
      Z,
      U,
      G,
      J,
      K,
      ee,
      et,
      eo,
      ei,
      en,
      er,
      ea,
      es,
      el,
      ec,
      em,
      eu,
      ep,
      e8,
      ed,
      ef,
      eh,
      e$,
      e_,
      ev,
      ey,
      eg,
      e0,
      eb,
      e3,
      ex,
      ew,
      ek,
      ez,
      e1,
      e5,
      e6,
      e4,
      e7,
      e2,
      eE,
      eA,
      eC,
      eT,
      eS,
      eB,
      eF,
      eI,
      eP,
      eO,
      ej,
      eL,
      eM,
      eN,
      eD,
      eR,
      eH,
      eq,
      eW,
      eV,
      eY,
      eQ,
      eX,
      eZ,
      eU,
      eG,
      eJ,
      eK,
      e9,
      te,
      tt,
      to,
      ti,
      tn,
      tr,
      ta,
      ts,
      tl,
      tc,
      tm,
      tu,
      tp,
      t8,
      td,
      tf,
      th,
      t$,
      t_,
      tv,
      ty,
      tg,
      t0,
      tb,
      t3,
      tx,
      tw,
      tk,
      tz,
      t1 = this,
      t5 = t1.mapdata,
      t6 = t1.mapinfo;
    if (!t5 || !t6) {
      console.log("The mapdata or mapinfo object is missing or corrupted.");
      return;
    }
    var t4 = t1.hooks,
      t7 = t1.plugin_hooks;
    function t2(e, t) {
      var o = t4[e];
      o && o.apply(null, t);
      for (var i = t1.plugin_hooks[e], n = 0; n < i.length; n++) {
        var o = i[n];
        o && o.apply(null, t);
      }
    }
    var y = void 0 === t5.main_settings.div ? "map" : t5.main_settings.div;
    if (!document.getElementById(y))
      return (
        console.log(
          "Can't find target for map #" +
            y +
            ".  Check mapdata.main_settings.div"
        ),
        !1
      );
    function tE() {
      (A =
        !!a.background_image_url &&
        "no" != a.background_image_url &&
        a.background_image_url),
        (C = !!a.background_image_bbox && a.background_image_bbox),
        (W = "yes" == a.background_transparent ? 0 : 1),
        (Y = a.label_size ? a.label_size : 22),
        (Q = a.label_color ? a.label_color : "#ffffff"),
        (X = "yes" == a.url_new_tab),
        (Z = a.location_opacity ? a.location_opacity : 1),
        (U = "yes" == a.js_hooks),
        (G = a.border_size ? a.border_size : 1.5),
        (J = a.popup_color ? a.popup_color : "#ffffff"),
        (P = a.popup_orientation ? a.popup_orientation : "auto"),
        (I = a.popup_centered ? a.popup_centered : "auto"),
        (ee = a.popup_opacity ? a.popup_opacity : 0.9),
        (et = a.popup_shadow > -1 ? a.popup_shadow : 1),
        (eo = a.popup_corners ? a.popup_corners : 5),
        (ei = "yes" == a.popup_nocss),
        (K = !!a.popup_maxwidth && a.popup_maxwidth),
        (en = a.popup_font
          ? a.popup_font
          : "12px/1.5 Verdana, Arial, Helvetica, sans-serif"),
        (V = "no" != a.zoom_out_incrementally),
        (q = a.adjacent_opacity ? a.adjacent_opacity : 0.3),
        (T = a.zoom_time ? a.zoom_time : 0.5),
        (B = a.zoom_increment ? a.zoom_increment : 2),
        (S = "no" != a.zoom_mobile),
        (D = a.fade_time ? 1e3 * a.fade_time : 200),
        (H = t5.labels),
        (F = a.custom_shapes ? a.custom_shapes : {}),
        (L = !!a.initial_back && "no" != a.initial_back && a.initial_back),
        (R = "yes" == a.hide_eastern_labels),
        (M = a.link_text ? a.link_text : "View Website"),
        (O = !!a.order_number && a.order_number),
        (j = a.zoom_percentage ? a.zoom_percentage : 0.99);
    }
    function tA(e) {
      return "on_click" == e || ("detect" == e && !!ec);
    }
    function tC(e) {
      return "off" == e;
    }
    var tT = !1;
    function tS(e) {
      if (
        ((ed.style.width = ""),
        (ef.style.width = ""),
        v
          ? ((ey = ed.offsetWidth) < 1 && (ey = ed.parentNode.offsetWidth),
            (ef.style.width = ey + "px"))
          : ((ey = void 0 === a.width ? 800 : a.width),
            (ed.style.width = ey + "px")),
        (ey *= 1),
        t6.calibrate
          ? (((ex = {}).x = -1 * t6.calibrate.x_adjust),
            (ex.y = -1 * t6.calibrate.y_adjust),
            (ex.x2 = ex.x + t6.calibrate.width),
            (ex.y2 = (ex.x2 - ex.x) / t6.calibrate.ratio))
          : (ex = t6.initial_view),
        (eg = ey / (ek = (eb = ex.x2 - ex.x) / (e3 = ex.y2 - ex.y))),
        (s = eb / 1e3),
        (e8.style.height = eg + "px"),
        !e)
      ) {
        if (((e0 = ey / eb), (ew = 1), $)) {
          var t = [];
          for (var o in t6.state_bbox_array) {
            var i = t6.state_bbox_array[o];
            t.push(i);
          }
          var n,
            l = r.bbox_union(t);
          ev =
            "r" +
            $ +
            "," +
            0.5 * (l.x2 + l.x) * e0 +
            "," +
            0.5 * (l.y2 + l.y) * e0;
          var c = r.rotate_bbox(ex, ev);
          (eb = c.width), (e3 = c.height);
        }
        (eA = "s" + e0 + "," + e0 + ",0,0"), (eE = $ ? eA + ev : eA);
      }
    }
    function tB(e) {
      if (
        t5.legend &&
        t5.legend.entries &&
        !(t5.legend.entries.length < 1) &&
        (!ea || !er)
      ) {
        e && e_ && (e_.innerHTML = "");
        var t = {};
        (e_.style.left = "0em"),
          (e_.style.bottom = "0em"),
          (e_.style.padding = ".8em"),
          (e_.style.lineHeight = "1em"),
          (e_.style["background-color"] = ea
            ? "#ffffff"
            : "rgba(186, 186, 186, 0.2)");
        var o = document.createElement("ul");
        (o.style.display = "inline-block"),
          (o.style["list-style-type"] = "none"),
          (o.style.margin = "0"),
          (o.style.padding = "0"),
          e_.appendChild(o);
        var i =
          "#" +
          y +
          "_holder .sm_legend_item{float: left; cursor: pointer; margin-right: .75em; margin-bottom: .4em; margin-top: .4em;} #" +
          y +
          "_holder{font: " +
          en +
          ";}";
        r.new_style(i);
        for (var n = t5.legend.entries, a = 0; a < n.length; a++) m(a, n[a]);
        var s = t5.legend.html;
        s && "no" != s
          ? (e_.innerHTML = s)
          : (function e() {
              for (var t = 0; t < n.length; t++) {
                var i = n[t];
                (i.shape = i.shape ? i.shape : "circle"),
                  (i.color = i.color ? i.color : "#cecece"),
                  (i.type = i.type ? i.type : "location");
                var r = document.createElement("li");
                r.setAttribute("class", "sm_legend_item"),
                  r.setAttribute("data-id", t);
                var a = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                if (
                  (a.setAttributeNS(
                    "http://www.w3.org/2000/xmlns/",
                    "xmlns:xlink",
                    "http://www.w3.org/1999/xlink"
                  ),
                  (a.style.display = "inline-block"),
                  (a.style["margin-right"] = ".2em"),
                  (a.style.width = "1em"),
                  (a.style.height = "1em"),
                  (a.style.stoke = "#ffffff"),
                  (a.style["stoke-width"] = "3"),
                  (a.style.fill = "#ff0067"),
                  (a.style["vertical-align"] = "-0.15em"),
                  "circle" == i.shape)
                ) {
                  var s = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "circle"
                  );
                  s.setAttribute("cx", "50"),
                    s.setAttribute("cy", "50"),
                    s.setAttribute("r", "40");
                } else if ("square" == i.shape) {
                  var s = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect"
                  );
                  s.setAttribute("x", "10"),
                    s.setAttribute("y", "10"),
                    s.setAttribute("width", "80"),
                    s.setAttribute("height", "80");
                } else {
                  var l = od[i.shape],
                    s = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path"
                    );
                  s.setAttribute("d", l),
                    a.setAttribute("width", "1.5"),
                    a.setAttribute("height", "1.5"),
                    s.setAttribute("stroke-width", ".1");
                }
                ["square", "circle"].indexOf(i.shape) > -1
                  ? (s.setAttribute("stroke-width", "10"),
                    a.setAttribute("viewBox", "0 0 100 100"),
                    a.setAttribute("width", "100"),
                    a.setAttribute("height", "100"))
                  : ["diamond", "star"].indexOf(i.shape) > -1
                  ? (a.setAttribute("viewBox", "-.5 -.6 1 1.2"),
                    a.setAttribute("height", "1.8"))
                  : ["triangle"].indexOf(i.shape) > -1
                  ? (a.setAttribute("viewBox", "-.6 -.7 1.2 1.1"),
                    a.setAttribute("width", "1.8"),
                    a.setAttribute("height", "1.8"))
                  : ["heart"].indexOf(i.shape) > -1
                  ? (a.setAttribute("viewBox", "-.7 -.5 1.3 1"),
                    a.setAttribute("width", "2"))
                  : ["marker"].indexOf(i.shape) > -1 &&
                    (a.setAttribute("viewBox", "-.6 -.9 1.1 .8"),
                    a.setAttribute("width", "1.7"),
                    a.setAttribute("height", "1.7")),
                  s.setAttribute("fill", i.color),
                  s.setAttribute("stroke", "white"),
                  a.appendChild(s),
                  r.appendChild(a);
                var c = document.createTextNode(i.name);
                r.appendChild(c), o.appendChild(r);
              }
            })();
        for (
          var l = ef.getElementsByClassName("sm_legend_item"), a = 0;
          a < l.length;
          a++
        )
          r.addEvent(l[a], "mouseover", c), r.addEvent(l[a], "mousedown", c);
      }
      function c() {
        for (var e = t[this.dataset.id], o = 0; o < e.length; o++) {
          var i = e[o].sm;
          ("state" == i.type ? t_ : oM)(i.id);
        }
      }
      function m(e, o) {
        t[e] = [];
        var i = "state" == o.type ? ts : tf;
        for (var n in i) {
          var r = i[n];
          o.ids
            ? o.ids.split(",").indexOf(r.sm.id) > -1 && t[e].push(r)
            : r.sm.attributes.fill != o.color || r.sm.hide || t[e].push(r);
        }
      }
    }
    function tF(e, t, o) {
      if ((void 0 === o && (o = "location" == e ? 4 : 1), "location" == e))
        var i = tf[t];
      else if ("state" == e) var i = ts[t];
      else if ("region" != e) return !1;
      else var i = tl[t];
      var n = function () {
        var e = i.sm.on_click;
        (i.sm.on_click = !0),
          (i.sm.content = oo(i)),
          oL(i.sm.type, i.sm.id, function t() {
            (i.sm.on_click = e), (i.sm.content = oo(i));
          });
      };
      if ("state" == e) {
        function r() {
          i.sm.zoomable || i.sm.region ? oP(i.sm.id, n) : n();
        }
        o0(w, r);
      } else if ("location" == e) {
        function r() {
          oO(i.sm.id, o, n);
        }
        o0(w, r);
      } else if ("region" == e) {
        function r() {
          var e,
            t,
            o = 1;
          (e = i.sm.bbox),
            (t = n),
            void 0 === o && (o = 4),
            void 0 === t && (t = function () {}),
            oe({ sm: { type: "manual", zp: o, bbox: e } }, !1, function () {
              t(), tL();
            });
        }
        o0(w, r);
      }
    }
    var tI = !1,
      tP = !1;
    function tO() {
      if (c) {
        if (location.hostname.match("simplemaps.com")) {
          c = !1;
          return;
        }
        if (tI) {
          if (Math.random() > 0.05) return;
          r.delete_element(tI);
        }
        tI = document.createElement("div");
        (tI.style.cssText =
          "overflow: visible !important; clip-path: none !important; display:inline !important; opacity:1 !important; transform: none !important; visibility: visible !important; z-index: 1 !important; right: 5px !important; bottom:20px !important; z-index: 1 !important; position: absolute !important; filter: opacity(1) !important;"),
          e8.appendChild(tI),
          (tI.innerHTML =
            '<a style="overflow: visible !important; clip-path: none !important; opacity: 1 !important;  filter: opacity(1) !important; transform: none !important; display: block !important; visibility: visible !important; font: 18px Verdana, Arial, Helvetica, sans-serif !important; cursor: pointer !important; font-weight: bold !important; float: right !important; color: #000000 !important; text-decoration: none !important;" href="https://simplemaps.com" title="For evaluation use only.">Simplemaps.com Trial</a>'),
          !ea && 503 != tI.innerHTML.length && (e8.innerHTML = "");
      }
    }
    function tj() {
      eN.hide(), (ep.style.display = "none");
    }
    function tL() {
      eN.show(), (ep.style.display = "block");
    }
    function tM() {
      (eJ = t5.locations),
        (eY = []),
        (eQ = []),
        (eU = []),
        (eG = []),
        (eX = []),
        (te = []),
        !(function () {
          var e = {};
          if (
            ((e.color = !1),
            (e.hover_color = !1),
            (e.opacity = a.region_opacity ? a.region_opacity : 1),
            (e.hover_opacity = a.region_hover_opacity
              ? a.region_hover_opacity
              : 0.6),
            (e.url = !1),
            (e.description = !1),
            (e.description_mobile = !1),
            (e.inactive = !1),
            (e.zoomable = !0),
            (e.hide_name = "yes" == a.region_hide_name),
            (e.popup = a.region_popups ? a.region_popups : em),
            (e.cascade = "yes" == a.region_cascade_all),
            (e.zoom_percentage = j),
            (e.x = !1),
            (e.y = !1),
            (e.x2 = !1),
            (e.y2 = !1),
            z)
          )
            for (var t in z)
              for (var o = 0; o < z[t].states.length; o++)
                eU[z[t].states[o]] = t;
          for (var i in z)
            for (var n in ((eX[i] = Object.create(e)),
            z[i].url && (eX[i].zoomable = !1),
            z[i]))
              "default" != z[i][n] && (eX[i][n] = z[i][n]),
                "yes" == z[i][n] && (eX[i][n] = !0),
                "no" == z[i][n] && (eX[i][n] = !1);
        })(),
        (function () {
          for (var e in ((eK = function (e) {
            var t = {};
            (t.color = a.state_color),
              (t.image_url = !!a.state_image_url && a.state_image_url),
              (t.image_size = a.state_image_size ? a.state_image_size : "auto"),
              (t.image_position = a.state_image_position
                ? a.state_image_position
                : "center"),
              (t.image_x = a.state_image_x ? a.state_image_x : "0"),
              (t.image_y = a.state_image_y ? a.state_image_y : "0"),
              (t.image_color = !!a.state_image_color && a.state_image_color),
              (t.image_background_opacity = a.image_background_opacity
                ? a.image_background_opacity
                : "1"),
              (t.image_hover_url =
                !!a.state_image_hover_url && a.state_image_hover_url),
              (t.image_hover_size = a.state_image_hover_size
                ? a.state_image_hover_size
                : "auto"),
              (t.image_hover_position = a.state_image_hover_position
                ? a.state_image_hover_position
                : "center"),
              (t.image_hover_x = a.state_image_hover_x
                ? a.state_image_hover_x
                : "0"),
              (t.image_hover_y = a.state_image_hover_y
                ? a.state_image_hover_y
                : "0"),
              (t.image_hover_color =
                !!a.state_image_hover_color && a.state_image_hover_color),
              (t.pulse_size = a.state_pulse_size ? a.state_pulse_size : 1.1),
              (t.pulse_speed = a.state_pulse_speed ? a.state_pulse_speed : 1);
            var o = a.state_pulse_color;
            (t.pulse_color = !!o && "auto" != o && o),
              (t.hover_color = a.state_hover_color),
              (t.image_source = !1),
              (t.description = a.state_description),
              (t.url = a.state_url),
              (t.inactive = "yes" == a.all_states_inactive),
              (t.hide = "yes" == a.all_states_hidden),
              (t.hide_label = !1),
              (t.hide_name = "yes" == a.state_hide_name),
              (t.border_color = a.border_color ? a.border_color : "#ffffff"),
              (t.border_hover_color =
                !!a.border_hover_color && a.border_hover_color),
              (t.border_hover_size =
                !!a.border_hover_size && a.border_hover_size),
              (t.emphasize = "yes"),
              (t.zoom_percentage = j),
              (t.zoomable = "yes" == a.all_states_zoomable),
              (t.popup = a.state_popups ? a.state_popups : em),
              (t.opacity = a.state_opacity ? a.state_opacity : 1),
              (t.hover_opacity = a.state_hover_opacity
                ? a.state_hover_opacity
                : 1),
              (t.description_mobile =
                !!a.state_description_mobile && state_description_mobile),
              t.pu,
              (t.path = !1);
            var n = !!eU[e] && eU[e];
            for (var r in (n && eX[n].hide && (t.hide = !0),
            n &&
              eX[n].cascade &&
              (eX[n].color && (t.color = eX[n].color),
              eX[n].hover_color && (t.hover_color = eX[n].hover_color),
              eX[n].description && (t.description = eX[n].description),
              eX[n].url && (t.url = eX[n].url),
              eX[n].inactive && (t.inactive = eX[n].inactive),
              eX[n].hide && (t.hide = eX[n].hide)),
            (eY[e] = Object.create(t)),
            "us" == l &&
              ("GU" == e || "PR" == e || "VI" == e || "MP" == e || "AS" == e) &&
              (eY[e].hide = "yes"),
            "us" == l &&
              R &&
              ("VT" == e ||
                "NJ" == e ||
                "DE" == e ||
                "DC" == e ||
                "NH" == e ||
                "MA" == e ||
                "CT" == e ||
                "RI" == e ||
                "MD" == e) &&
              (eY[e].hide_label = "yes"),
            i[e]))
              "default" != i[e][r] && (eY[e][r] = i[e][r]),
                "yes" == i[e][r] && (eY[e][r] = !0),
                "no" == i[e][r] && (eY[e][r] = !1);
            "off" == a.state_hover_color && (eY[e].hover_color = eY[e].color);
          }),
          (eZ = {}),
          t6.paths))
            eZ[e] = !0;
          for (var e in t5.state_specific)
            t5.state_specific[e] && t5.state_specific[e].path && (eZ[e] = !0);
          for (var e in eZ) eK(e);
        })(),
        (function () {
          var e = {};
          (e.font_family = a.label_font ? a.label_font : "arial,sans-serif"),
            (e.color = a.label_color ? a.label_color : "white"),
            (e.hover_color = a.label_hover_color
              ? a.label_hover_color
              : e.color),
            (e.opacity =
              a.label_opacity || "0" == a.label_opacity ? a.label_opacity : 1),
            (e.hover_opacity = a.label_hover_opacity
              ? a.label_hover_opacity
              : e.opacity),
            (e.size = Y),
            (e.hide = "yes" == a.hide_labels),
            (e.line = !1),
            (e.scale = !!a.label_scale && a.label_scale),
            (e.scale_limit = a.scale_limit ? a.scale_limit : 0.0625),
            (e.rotate = a.label_rotate ? a.label_rotate : 0),
            (e.line_color = a.label_line_color
              ? a.label_line_color
              : "#000000"),
            (e.line_size = a.label_line_size ? a.label_line_size : "1"),
            (e.line_x = !1),
            (e.line_y = !1),
            (e.parent_type = "state"),
            (e.parent_id = !1),
            (e.anchor = a.label_anchor ? a.label_anchor : "middle"),
            (e.pill = !1),
            (e.width = !!a.pill_width && a.pill_width),
            (e.x = !1),
            (e.y = !1),
            (e.name = "Not Named"),
            (e.pill_radius = a.pill_radius ? a.pill_radius : "auto"),
            (e.display = !!a.label_display && a.label_display),
            (e.display_ids = !1),
            (e.id = !1);
          var t = "no" == a.import_labels ? {} : t6.default_labels,
            o = function (o) {
              for (var i in ((eG[o] = Object.create(e)), t[o]))
                "default" != t[o][i] && (eG[o][i] = t[o][i]),
                  "yes" == t[o][i] && (eG[o][i] = !0),
                  "no" == t[o][i] && (eG[o][i] = !1);
            },
            i = function (t) {
              for (var o in (eG[t] || (eG[t] = Object.create(e)), H[t]))
                "default" != H[t][o] && (eG[t][o] = H[t][o]),
                  "yes" == H[t][o] && (eG[t][o] = !0),
                  "no" == H[t][o] && (eG[t][o] = !1);
            };
          for (var n in t) o(n);
          for (var n in H) i(n);
          e9 = function (e) {
            o(e), i(e);
          };
        })(),
        (function () {
          var e = {},
            t = ec
              ? a.scale_limit_mobile
                ? a.scale_limit_mobile
                : 0.4
              : 0.0625;
          (e.scale_limit = a.scale_limit ? a.scale_limit : t),
            (e.color = a.location_color ? a.location_color : "#FF0067"),
            (e.hover_color =
              !!a.location_hover_color && a.location_hover_color),
            (e.border = a.location_border ? a.location_border : 1.5),
            (e.border_color = a.location_border_color
              ? a.location_border_color
              : "#FFFFFF"),
            (e.hover_border = a.location_hover_border
              ? a.location_hover_border
              : 2),
            (e.size = a.location_size),
            (e.description = a.location_description),
            (e.description_mobile =
              !!a.location_description_mobile && location_description_mobile),
            (e.url = a.location_url),
            (e.inactive = "yes" == a.all_locations_inactive),
            (e.type = a.location_type),
            (e.position = "top"),
            (e.pulse = "yes" == a.location_pulse),
            (e.pulse_size = a.location_pulse_size ? a.location_pulse_size : 4),
            (e.pulse_speed = a.location_pulse_speed
              ? a.location_pulse_speed
              : 0.5);
          var o = a.location_pulse_color;
          for (var i in ((e.pulse_color = !!o && "auto" != o && o),
          (e.image_source = a.location_image_source
            ? a.location_image_source
            : ""),
          (e.hide = a.all_locations_hide ? a.all_locations_hide : "no"),
          (e.opacity = Z),
          (e.scale = !a.location_scale || a.location_scale),
          (e.hover_opacity =
            !!a.location_hover_opacity && a.location_hover_opacity),
          (e.image_source = a.location_image_source
            ? a.location_image_source
            : ""),
          (e.image_url = !!a.location_image_url && a.location_image_url),
          (e.image_position = a.location_image_position
            ? a.location_image_position
            : "center"),
          (e.image_hover_source = a.location_image_hover_source
            ? a.location_image_hover_source
            : ""),
          (e.image_hover_url =
            !!a.location_image_hover_url && a.location_image_hover_url),
          (e.image_hover_position = a.location_image_hover_position
            ? a.location_image_hover_position
            : "center"),
          (e.popup = a.location_popups ? a.location_popups : em),
          (e.x = !1),
          (e.y = !1),
          (e.display = a.location_display ? a.location_display : "all"),
          (e.display_ids = !1),
          (e.hide = "yes" == a.all_locations_hidden),
          (e.hide_name = "yes" == a.location_hide_name),
          void 0 == e.type && (e.type = "square"),
          eJ)) {
            for (var n in ((eQ[i] = Object.create(e)), eJ[i])) {
              if ("overwrite_image_location" == n) {
                eQ[i].image_url = eJ[i][n];
                continue;
              }
              "region" == n && (eQ[i].display = "region"),
                "default" != eJ[i][n] && (eQ[i][n] = eJ[i][n]),
                "yes" == eJ[i][n] && (eQ[i][n] = !0),
                "no" == eJ[i][n] && (eQ[i][n] = !1);
            }
            eQ[i].hover_opacity || (eQ[i].hover_opacity = eQ[i].opacity),
              eQ[i].hover_color || (eQ[i].hover_color = eQ[i].color);
          }
        })(),
        (function () {
          var e = {};
          (e.color = a.line_color ? a.line_color : "#000000"),
            (e.size = a.line_size ? a.line_size : 1.5),
            (e.dash = a.line_dash ? a.line_dash : ""),
            (e.origin_location = !1),
            (e.destination_location = !1),
            (e.angle = !1);
          var t = t5.lines ? t5.lines : t5.borders;
          for (var o in t)
            for (var i in ((te[o] = Object.create(e)), t[o]))
              "default" != t[o][i] && (te[o][i] = t[o][i]),
                "yes" == t[o][i] && (te[o][i] = !0),
                "no" == t[o][i] && (te[o][i] = !1);
        })();
    }
    var tN = !1,
      tD = !1,
      tR = !1;
    function tH(e, t) {
      if ("lambert" == t6.proj)
        var o = function e(t) {
          var o = Math.PI,
            i = 0.017453293 * t.lat,
            n = 0.017453293 * t.lng,
            r =
              Math.log(0.8386705593173225 * (1 / 0.7071067659112366)) /
              Math.log(
                Math.tan(0.25 * o + 0.3926990925) *
                  (1 / Math.tan(0.25 * o + 0.2879793345))
              ),
            a =
              (0.8386705593173225 *
                Math.pow(Math.tan(0.25 * o + 0.2879793345), r)) /
              r,
            s = a * Math.pow(1 / Math.tan(0.25 * o + 0.5 * i), r);
          return {
            x: s * Math.sin(r * (n - 1.57079637)),
            y:
              a * Math.pow(1 / Math.tan(0.25 * o + 0.3926990925), r) -
              s * Math.cos(r * (n - 1.57079637)),
          };
        };
      else if ("xy" == t6.proj)
        var o = function e(t) {
          return { x: t.lng, y: t.lat };
        };
      else if ("robinson_pacific" == t6.proj)
        var o = function e(t) {
          var o = t.lng - 150;
          return o < -180 && (o += 360), n({ lat: t.lat, lng: o });
        };
      else if ("mercator" == t6.proj)
        var o = function e(t) {
          var o =
            Math.log(Math.tan((t.lat / 90 + 1) * (Math.PI / 4))) *
            (180 / Math.PI);
          return { x: t.lng, y: o };
        };
      else var o = n;
      var i = { lat: e, lng: t };
      function n(e) {
        var t,
          o,
          i = 5,
          n = function (e) {
            return e < 0 ? -1 : 1;
          },
          r = n(e.lng),
          a = n(e.lat),
          s = Math.abs(e.lng),
          l = Math.abs(e.lat),
          c = ((t = l - 1e-10), Math.floor(t / i) * i),
          m = (c = 0 == l ? 0 : c) + 5,
          u = c / 5,
          p = m / 5,
          d = (l - c) / 5,
          f = [
            0.8487, 0.84751182, 0.84479598, 0.840213, 0.83359314, 0.8257851,
            0.814752, 0.80006949, 0.78216192, 0.76060494, 0.73658673, 0.7086645,
            0.67777182, 0.64475739, 0.60987582, 0.57134484, 0.52729731,
            0.48562614, 0.45167814,
          ],
          h = [
            0, 0.0838426, 0.1676852, 0.2515278, 0.3353704, 0.419213, 0.5030556,
            0.5868982, 0.67182264, 0.75336633, 0.83518048, 0.91537187,
            0.99339958, 1.06872269, 1.14066505, 1.20841528, 1.27035062,
            1.31998003, 1.3523,
          ];
        return {
          x: ((f[p] - f[u]) * d + f[u]) * s * 0.017453293 * r * 1,
          y: ((h[p] - h[u]) * d + h[u]) * a * 1,
        };
      }
      var a = t6.proj_coordinates;
      function s(e, t, i, n) {
        var a,
          s,
          l,
          c,
          m,
          u,
          p,
          d,
          f,
          h,
          $,
          _,
          v,
          y,
          g,
          b,
          x,
          w = o(e),
          k = o(t),
          z = o(i),
          E = o(n),
          A = r.distance(w, k),
          C = r.distance(w, z),
          T = r.distance(k, z),
          S = r.distance(t, i),
          B = T / S,
          F =
            ((a = t.x),
            (s = t.y),
            (l = A / B),
            (c = i.x),
            (m = i.y),
            (u = C / B),
            (d = c - a),
            (h = Math.sqrt((f = m - s) * f + d * d)),
            (y = a + (d * (p = (l * l - u * u + h * h) / (2 * h))) / h),
            (g = s + (f * p) / h),
            (_ = -f * (($ = Math.sqrt(l * l - p * p)) / h)),
            (v = d * ($ / h)),
            (b = y + _),
            { opt1: { x: b, y: (x = g + v) }, opt2: { x: y - _, y: g - v } }),
          I = r.distance(w, E) / B,
          P = Math.abs(r.distance(F.opt1, n) - I),
          O = Math.abs(r.distance(F.opt2, n) - I);
        return P < O
          ? { x: F.opt1.x, y: F.opt1.y }
          : { x: F.opt2.x, y: F.opt2.y };
      }
      function l(e, t, o) {
        var i = /lat[ ]?<([-]?\d+[\.]?\d+)/g.exec(p);
        if (i && e > r.to_float(i[1])) return !1;
        var n = /lat[ ]?>([-]?\d+[\.]?\d+)/g.exec(p);
        if (n && e < r.to_float(n[1])) return !1;
        var a = /lng[ ]?<([-]?\d+[\.]?\d+)/g.exec(p);
        if (a && t > r.to_float(a[1])) return !1;
        var s = /lng[ ]?>([-]?\d+[\.]?\d+)/g.exec(p);
        return !(s && t < r.to_float(s[1]));
      }
      var c = t6.proj_rules;
      if (c)
        for (var m = 0; m < c.length; m++) {
          var u = c[m],
            p = u.condition;
          if (l(e, t, u.condition)) {
            var d = u.points;
            return s(i, a[d[0]], a[d[1]], a[d[2]]);
          }
        }
      return s(i, a[0], a[1], a[2]);
    }
    var tq = !1;
    function tW(e) {
      if (e.sm.zooming_dimensions) return e.sm.zooming_dimensions;
      var t,
        o = r.rotate_bbox(e.sm.bbox, eE),
        i = o.x,
        n = o.y,
        a = o.width,
        s = o.height,
        l = e.sm.zp,
        c = eb * e0,
        m = e3 * e0;
      return (
        (i -= (a / l - a) * 0.5),
        (n -= (s / l - s) * 0.5),
        (a /= l) / (s /= l) > ek
          ? ((n -= (m * (t = a / c) - s) / 2), (s = a / ek))
          : ((i -= (c * (t = s / m) - a) / 2), (a = s * ek)),
        { x: i, y: n, w: a, h: s, r: t }
      );
    }
    function tV(e) {
      if (e) {
        eF.stop();
        for (var t = 0; t < e.sm.states.length; ++t) {
          var o = ts[e.sm.states[t]];
          o.attr(o.sm.attributes), oy(o, "reset", !1, "state");
        }
      }
    }
    function tY() {
      tc &&
        "state" == tc.sm.type &&
        tc.sm.attributes &&
        (tc.sm.ignore_hover || tc.attr(tc.sm.attributes), oy(tc, "out"));
    }
    function tQ(e) {
      if (e) {
        e.stop(), e.attr(e.sm.attributes);
        for (var t = 0; t < e.sm.states.length; ++t)
          oy(ts[e.sm.states[t]], "reset", !1, "region");
      }
    }
    function tX() {
      eI.forEach(function (e) {
        -1 != e.sm.id && tQ(e);
      });
    }
    function tZ(e, t) {
      var o,
        i,
        n,
        a = e.sm.display,
        s = t.sm.type;
      if ("all" == a || ("out" == a && "out" == s)) return !0;
      if ("region" == a && "region" == s) {
        return (
          (o = e),
          (i = t),
          (n = o.sm.point0),
          o.sm.display_ids
            ? o.sm.display_ids.indexOf(i.sm.id) > -1
            : !!Raphael.isPointInsideBBox(i.sm.bbox, n.x, n.y)
        );
      }
      if ("state" == a && "state" == s)
        return (function e(t, o) {
          var i = t.sm.point0;
          if (t.sm.display_ids) return t.sm.display_ids.indexOf(o.sm.id) > -1;
          if (Raphael.isPointInsideBBox(o.sm.bbox, i.x, i.y)) {
            var n = t6.paths[o.sm.id];
            if (Raphael.isPointInsidePath(n, i.x, i.y)) return !0;
          }
          return !1;
        })(e, t);
      var l = r.to_float(a);
      if (l && ew < l) return !0;
      return !1;
    }
    function tU(e, t, o) {
      var i = { transform: t };
      er || ec || o ? e.attr(i) : e.animate(i, 1e3 * T);
    }
    function tG(e, t) {
      var o,
        i,
        n = e.sm.type;
      tj(),
        (o = e),
        (i = t),
        eP.hide(),
        eP.forEach(function (e) {
          if (!e.sm.hide && (tZ(e, o) && e.show(), e.sm.scale)) {
            var t = ew > e.sm.scale_limit ? ew : e.sm.scale_limit,
              n = o8(e, t * e0);
            tU(e, n, i);
          }
        }),
        (function e(t, o) {
          for (var i in (eL.hide(), tu)) {
            var n = tu[i];
            if (!n.sm.hide) {
              if ((tZ(n, t) && tp[n.sm.id].show(), n.sm.line)) {
                var r = op(n);
                n.sm.line.attr({ path: r, transform: eE });
              }
              if (n.sm.scale) {
                var a = ew > n.sm.scale_limit ? ew : n.sm.scale_limit,
                  s = o8(n, a * e0);
                tU(n, s, o), n.sm.pill && tU(td[n.sm.id], s, o);
              }
            }
          }
        })(e, t),
        r.x_in_array(n, ["state", "region", "out"]) && tX(),
        "region" == n
          ? tV(e)
          : "state" == n
          ? tV(tl[e.sm.region])
          : "manual" == n &&
            eI.forEach(function (e) {
              -1 != e.sm.id &&
                (e.sm.zooming_dimensions.r > ew && e.sm.zoomable
                  ? tV(e)
                  : tQ(e));
            }),
        "out" != n && "manual" != n
          ? (eF.stop(),
            eB.stop(),
            eF.attr({ "fill-opacity": q }),
            eB.attr({ "fill-opacity": q }),
            e.stop(),
            e.attr({ "fill-opacity": 1 }),
            e.sm.labels.forEach(function (e) {
              e.sm &&
                e.sm.pill &&
                (e.sm.pill.stop(), e.sm.pill.attr({ "fill-opacity": 1 }));
            }),
            e.animate(
              { "stroke-width": e.sm.border_hover_size * (ey / eb) * s * 1.25 },
              1e3 * T
            ))
          : (eF.attr({ "fill-opacity": 1 }), eB.attr({ "fill-opacity": 1 })),
        eF.animate({ "stroke-width": G * (ey / eb) * s * 1.25 }, 1e3 * T);
    }
    function tJ(e) {
      b && "-1" != g && "region" == e.sm.type
        ? !!L && tL()
        : "state" == e.sm.type || "region" == e.sm.type || L
        ? tL()
        : _ && "out" != e.sm.type && tL();
    }
    function tK(e) {
      return { x: e.x, y: e.y, w: e.w, h: e.h };
    }
    function t9() {
      w.sm && k && (tz.hide(), (k = !1), w.sm && t0.call(w), (el = !1));
    }
    function oe(e, t, o) {
      if (!tN) {
        t9(),
          o3 && (o3.stop(), (o3 = !1)),
          ob && e != ob && t0.call(ob),
          (w = !1),
          (to = e),
          tz.hide(),
          (k = !1),
          (tN = !0),
          (e.sm.zooming_dimensions = tW(e));
        var i = tK(e.sm.zooming_dimensions),
          a = tK(tc.sm.zooming_dimensions);
        (ew = e.sm.zooming_dimensions.r),
          tG(e, t),
          er || (ec && !S) || t
            ? ((tn = i), ez.setViewBox(i.x, i.y, i.w, i.h, !1), s())
            : (ti = (n.Tweenable ? new n.Tweenable() : new Tweenable()).tween({
                from: a,
                to: i,
                duration: 1e3 * T,
                easing: "easeOutQuad",
                step: function (e) {
                  var t;
                  (tn = t = e), ez.setViewBox(t.x, t.y, t.w, t.h, !1);
                },
                finish: function () {
                  s(i);
                },
              }));
      }
      function s() {
        tJ(e, t),
          (tc = e),
          (tN = !1),
          (el = !1),
          (t1.zoom_level = tc.sm.type),
          (t1.zoom_level_id = !!tc.sm.id && tc.sm.id),
          (t1.zoom_ratio = ew),
          t2("zooming_complete", []),
          r.isFunction(o) && o();
      }
    }
    function ot(e) {
      var t = "",
        o = {};
      for (var i in t6.paths) {
        var n,
          r = t6.paths[i];
        r = Raphael._pathToAbsolute(r);
        var a = Raphael.pathBBox(r);
        n = a.x2 - a.x < 10 ? 10 : 1;
        var s = Math.round(a.x * n) / n,
          l = Math.round(a.y * n) / n,
          c = Math.round(a.y2 * n) / n;
        (t +=
          "'" +
          i +
          "':{x: " +
          s +
          ",y:" +
          l +
          ",x2:" +
          Math.round(a.x2 * n) / n +
          ",y2:" +
          c +
          "},"),
          (o[i] = a);
      }
      return (
        (t = t.substring(0, t.length - 1)),
        (t += "}"),
        e || console.log("The new state_bbox_array is: \n\n{" + t),
        o
      );
    }
    function oo(e) {
      var t = e.sm.description,
        o =
          '<a id="xpic_sm_' +
          y +
          '" href="#"><img src="data:image/svg+xml,%3Csvg%20enable-background%3D%22new%200%200%20256%20256%22%20height%3D%22256px%22%20id%3D%22Layer_1%22%20version%3D%221.1%22%20viewBox%3D%220%200%20256%20256%22%20width%3D%22256px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M137.051%2C128l75.475-75.475c2.5-2.5%2C2.5-6.551%2C0-9.051s-6.551-2.5-9.051%2C0L128%2C118.949L52.525%2C43.475%20%20c-2.5-2.5-6.551-2.5-9.051%2C0s-2.5%2C6.551%2C0%2C9.051L118.949%2C128l-75.475%2C75.475c-2.5%2C2.5-2.5%2C6.551%2C0%2C9.051%20%20c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875s3.275-0.625%2C4.525-1.875L128%2C137.051l75.475%2C75.475c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875%20%20s3.275-0.625%2C4.525-1.875c2.5-2.5%2C2.5-6.551%2C0-9.051L137.051%2C128z%22%2F%3E%3C%2Fsvg%3E" style="width: 100%" alt="Close" border="0" /></a>',
        i = '<a style="line-height: 1.5" id="xpic_sm_' + y + '">X</a>',
        n = er ? i : o;
      n = '<div class="xmark_sm">' + n + "</div>";
      var a = e.sm.url ? e.sm.url : "",
        s = a,
        l = "javascript:" == s.substring(0, 11),
        c = r.replaceAll(s, "'", '"'),
        m = X
          ? 'return (function(e){window.open("' +
            a +
            '","_blank"); return false})()'
          : l
          ? 'return (function(){window.location.href="' +
            a +
            '"; return false;})()'
          : 'return (function(){window.top.location.href="' +
            a +
            '"; return false;})()';
      l && (m = "(function(){" + c + "})()");
      var u = e.sm.description_mobile
        ? e.sm.description_mobile
        : '<div class="tt_mobile_sm"><a tabindex="0" class="btn_simplemaps" onClick=\'' +
          m +
          "'>" +
          M +
          "</a></div>";
      e.sm.on_click || ((n = ""), (u = "")),
        "" != e.sm.url || e.sm.description_mobile || (u = "");
      var p =
        "" == t ? (p = "") : '<div class="tt_custom_sm"; />' + t + "</div>";
      return (
        '<div class="tt_sm"><div>' +
        (e.sm.hide_name
          ? ""
          : '<div class="tt_name_sm">' + e.sm.name + "</div>") +
        n +
        '<div style="clear: both;"></div></div>' +
        p +
        u +
        "</div></div>"
      );
    }
    function oi(e, t) {
      var o = e.sm.zooming_dimensions;
      if (o.w > t.sm.zooming_dimensions.w) return !1;
      var i = t.sm.bbox,
        n = { x: i.x * e0, y: i.y * e0, x2: i.x2 * e0, y2: i.y2 * e0 },
        r = o.x + o.w / 2,
        a = o.y + o.h / 2;
      return !!(r > n.x) && !!(a > n.y) && !!(r < n.x2) && !!(a < n.y2);
    }
    function on(e, t) {
      var o = t.hover ? "_hover" : "",
        i = y + "_pattern_" + e.sm.id + o,
        n = document.getElementById(i);
      n && r.delete_element(n);
      var a = e8.firstChild,
        l = a.namespaceURI,
        c = a.querySelector("defs"),
        m = document.createElementNS(l, "pattern"),
        u = e.sm.id;
      (m.id = i), m.setAttribute("patternUnits", "objectBoundingBox");
      var p = document.createElementNS(l, "image"),
        d = document.createElementNS(l, "rect"),
        f = t.image_color ? t.image_color : t.color;
      d.setAttribute("fill", "#ffffff"),
        d.setAttribute("opacity", t.bg_opacity),
        p.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          t.image_url
        ),
        m.appendChild(d),
        m.appendChild(p),
        c.appendChild(m),
        a.appendChild(c);
      var h = t.image_position,
        _ = "auto" == t.image_size,
        v = "repeat" == h,
        g = "manual" == h,
        b = "center" == h,
        x = Raphael.pathBBox(t6.paths[u]),
        w = x.x2 - x.x,
        k = x.y2 - x.y,
        z = w / k;
      return (
        Raphael._preload(t.image_url, function () {
          var e,
            o,
            i,
            n = this.offsetWidth,
            r = this.offsetHeight,
            a = n / r,
            l =
              ((i = t.image_size),
              _
                ? v || g
                  ? (i =
                      a > 1 ? (n > w ? 1 : n / w) : r > k ? 1 / z : r / k / z)
                  : b && ((i = a / z), a > z || (i = 1 / i))
                : i > 1 && (i = (t.image_size * s) / w),
              i),
            c = w * l,
            u = c / a,
            h = 0,
            y = 0;
          if (
            (v
              ? ((e = l), (o = (l * z) / a))
              : g
              ? ((e = 1), (o = 1), (h = t.image_x * w), (y = t.image_y * k))
              : b &&
                ((e = 1), (o = 1), (h = 0.5 * (w - c)), (y = 0.5 * (k - u))),
            d.setAttribute("x", 0),
            d.setAttribute("y", 0),
            d.setAttribute("width", w),
            d.setAttribute("height", k),
            d.setAttribute("fill", f),
            d.setAttribute("opacity", "1"),
            m.setAttribute("y", 0),
            m.setAttribute("x", 0),
            m.setAttribute("y", 0),
            m.setAttribute("width", e),
            m.setAttribute("height", o),
            p.setAttribute("x", h),
            p.setAttribute("y", y),
            p.setAttribute("width", c),
            $)
          ) {
            var x = h + 0.5 * c,
              E = y + 0.5 * u;
            p.setAttribute(
              "transform",
              "rotate(-" + $ + "," + x + "," + E + ")"
            );
          }
          p.setAttribute("height", u);
        }),
        'url("#' + m.id + '")'
      );
    }
    var or = !1;
    function oa(e) {
      e || ((ta = {}), (ts = {})), (or = t6.state_bbox_array);
      var t = G * e0 * s * 1.25;
      for (var i in ((tr = function (e) {
        var i = !ts[e],
          n = eY[e],
          r = n.path ? n.path : t6.paths[e],
          l = i ? ez.path(r) : ts[e];
        i && (l.sm = { id: e }),
          er || l.node.setAttribute("class", "sm_state sm_state_" + e);
        var c = {
            fill: n.color,
            opacity: n.opacity,
            stroke: n.border_color,
            cursor: "pointer",
            "stroke-opacity": 1,
            "stroke-width": t,
            "stroke-linejoin": "round",
          },
          m = n.border_hover_color ? n.border_hover_color : a.border_color,
          u = n.border_hover_size ? n.border_hover_size : G,
          p = u * e0 * s * 1.25,
          d = {
            opacity: n.hover_opacity,
            fill: n.hover_color,
            stroke: m,
            "stroke-width": p,
          };
        if (((l.sm.image = !1), n.image_url && !er)) {
          var f = {
              hover: !1,
              image_url: n.image_url,
              image_size: n.image_size,
              image_position: n.image_position,
              image_x: n.image_x,
              image_y: n.image_y,
              image_color: n.image_color,
              bg_opacity: n.image_background_opacity,
            },
            h = on(l, f);
          if (((l.sm.image = !0), (c.fill = h), n.image_hover_url)) {
            var f = {
                hover: !0,
                image_url: n.image_hover_url,
                image_size: n.image_hover_size,
                image_position: n.image_hover_position,
                image_x: n.image_hover_x,
                image_y: n.image_hover_y,
                image_color: n.image_hover_color,
                bg_opacity: n.image_background_opacity,
              },
              h = on(l, f);
            d.fill = h;
          } else d.fill = h;
        }
        n.inactive && (c.cursor = "default"),
          n.image_source &&
            ((l.sm.ignore_hover = !0),
            (c.fill = "url(" + o + n.image_source + ")")),
          (n.border_hover_color || n.border_hover_size) && n.emphasize
            ? (l.sm.emphasizable = !0)
            : (l.sm.emphasizable = !1),
          (l.sm.border_hover_size = u),
          l.attr(c),
          l.transform(eE),
          (l.sm.attributes = c),
          (l.sm.over_attributes = d),
          (l.sm.description = n.description),
          (l.sm.adjacent_attributes = { "fill-opacity": q }),
          (l.sm.hide = n.hide),
          (l.sm.hide_label = n.hide_label),
          (l.sm.hide_name = n.hide_name),
          i && (l.sm.region = !1),
          (l.sm.name = n.name ? n.name : t6.names[e]),
          l.sm.name || (l.sm.name = e),
          (l.sm.url = n.url),
          (l.sm.inactive = n.inactive),
          (l.sm.on_click = tA(n.popup)),
          (l.sm.popup_off = tC(n.popup)),
          (l.sm.labels = []),
          (l.sm.zp = n.zoom_percentage),
          (l.sm.zoomable = n.zoomable),
          (l.sm.description_mobile = n.description_mobile),
          (l.sm.type = "state"),
          (l.sm.hide_labels = n.hide_label),
          (l.sm.content = oo(l));
        var $ = or[e];
        $ || ($ = Raphael.pathBBox(t6.paths[e]));
        var _ = { x: $.x, x2: $.x2, y: $.y, y2: $.y2 };
        (l.sm.bbox = _),
          (l.sm.bbox.width = _.x2 - _.x),
          (l.sm.bbox.height = _.y2 - _.y),
          (l.sm.pulse_speed = n.pulse_speed),
          (l.sm.pulse_size = n.pulse_size),
          (l.sm.pulse_color = n.pulse_color ? n.pulse_color : n.border_color),
          l.sm.hide ? l.hide() : i && e6.push(l),
          i && ((ts[e] = l), eF.push(l));
      }),
      eZ))
        tr(i);
      tr[-1], eF.hide();
    }
    function os() {
      eT.attr({ fill: a.background_color, "fill-opacity": W, stroke: "none" });
    }
    var ol = !1;
    function oc(e) {
      if ((e || (tl = {}), z))
        for (var t in z) {
          var o = eX[t],
            i = z[t],
            n = e ? tl[t] : ez.set();
          if (!e) {
            if (((n.sm = {}), (n.sm.states = []), tl[t])) {
              console.log("Duplicate Regions");
              continue;
            }
            for (var a = [], s = 0; s < i.states.length; s++) {
              var l = i.states[s],
                c = ts[l];
              if (!c) {
                console.log(l + " does not exist");
                continue;
              }
              if (c.sm.region) {
                console.log(c.sm.name + " already assigned to a region");
                continue;
              }
              (c.sm.region = t),
                n.sm.states.push(l),
                (er && c.sm.ignore_hover && (o.color || o.hover_color)) ||
                  n.push(c),
                a.push(c.sm.bbox);
            }
            o.x &&
              o.y &&
              o.x2 &&
              o.y2 &&
              (a = [{ x: o.x, y: o.y, x2: o.x2, y2: o.y2 }]),
              (n.sm.bbox = r.bbox_union(a));
          }
          var m = { "fill-opacity": o.opacity, cursor: "pointer" },
            u = { "fill-opacity": o.hover_opacity };
          o.color && (m.fill = o.color),
            o.hover_color && (u.fill = o.hover_color),
            o.inactive && (m.cursor = "default"),
            (n.sm.attributes = m),
            (n.sm.name = i.name),
            (n.sm.description = o.description),
            (n.sm.description_mobile = o.description_mobile),
            (n.sm.url = o.url),
            (n.sm.labels = ez.set()),
            (n.sm.on_click = tA(o.popup)),
            (n.sm.over_attributes = u),
            (n.sm.hide_name = o.hide_name),
            (n.sm.adjacent_attributes = { "fill-opacity": q }),
            (n.sm.zoomable = o.zoomable),
            (n.sm.popup_off = tC(o.popup)),
            (n.sm.zp = o.zoom_percentage),
            (n.sm.inactive = o.inactive),
            (n.sm.type = "region"),
            (n.sm.id = t),
            (n.sm.content = oo(n)),
            e || (eI.push(n), (tl[t] = n)),
            (n.sm.zooming_dimensions = tW(n));
        }
      if (!e) {
        tl[-1] = {};
        var p = tl[-1];
        (p.sm = {}), (p.sm.type = "out"), (p.sm.zp = 1);
        var d = r.clone(ex);
        if (
          ((d.width = d.x2 - d.x),
          (d.height = d.y2 - d.y),
          (p.sm.bbox = d),
          (p.sm.zooming_dimensions = tW(p)),
          (tc = p),
          "object" == typeof g
            ? (((tm = {}).sm = { type: "manual", zp: 1, bbox: g }),
              (tm.sm.zooming_dimensions = tW(tm)),
              (g = -1),
              (b = !1))
            : -1 == g ||
              g in tl ||
              (g in ts
                ? ((ol = ts[g]), (b = !1))
                : console.log(
                    "The initial_zoom is not the id of a region or state"
                  ),
              (g = -1)),
          h)
        ) {
          tl[-2] = {};
          var f = tl[-2];
          f.sm = { type: "manual", zp: 1 };
          var $ = tW(tl[g]),
            _ = $.w,
            v = $.h,
            y = $.w * (h - 1) * 0.5,
            x = $.h * (h - 1) * 0.5;
          f.sm.zooming_dimensions = {
            x: $.x - y,
            y: $.y - x,
            w: _ * h,
            h: v * h,
            r: h,
          };
        }
      }
    }
    function om(e) {
      var t = e.getBBox(!0);
      if (er) {
        var o = e._getBBox(!0);
        t.height = o.height;
      }
      var i = 0.5 * t.width,
        n = 0.5 * t.height,
        r = e.sm.point0;
      return {
        x: r.x - i,
        y: r.y - n,
        x2: r.x + i,
        y2: r.y + n,
        width: t.width,
        height: t.height,
      };
    }
    function ou() {
      for (var e in (r.clear_sets([eL, e5, eB]),
      (tu = {}),
      (td = {}),
      (tp = {}),
      (eG = eG.reverse()),
      (t8 = function (e) {
        var t = eG[e],
          o = !1,
          i = !1;
        if (eG.hasOwnProperty(e)) {
          var n = !tu[e],
            l = ez.set(),
            c = { x: 1 * t.x, y: 1 * t.y },
            m = {},
            u = !1,
            p = !1;
          if (
            ("state" == t.parent_type
              ? (u = ts[t.parent_id])
              : "region" == t.parent_type
              ? (u = tl[t.parent_id])
              : "location" == t.parent_type && (u = tf[t.parent_id]),
            !t.x && !t.y && u)
          ) {
            if ("location" == u.sm.type)
              (i = !0),
                (m.x = u.sm.x),
                (m.y = u.sm.y),
                (c = u.sm.point0),
                (o = !0),
                u.sm.auto_size && (p = !0);
            else if ("state" == u.sm.type) {
              var d = u.sm.bbox;
              if (d.cx && d.cy)
                var f = T,
                  h = S;
              else
                var f = (d.x + d.x2) / 2,
                  h = (d.y + d.y2) / 2;
              (t.x = f), (t.y = h), (m.x = f), (m.y = h), (c = { x: f, y: h });
            }
          }
          if ((t.parent_type, !u)) {
            console.log("The following object does not exist: " + e);
            return;
          }
          if (("Not Named" == t.name && u && (t.name = u.sm.id), n)) {
            if (!i) {
              var $ = r.rotate([t.x, t.y], eE);
              m = { x: $[0], y: $[1] };
            }
            var _ = ez.text(m.x, m.y, t.name);
            tu[e] = _;
          } else var _ = tu[e];
          (_.sm = {}),
            (_.sm.hide = t.hide),
            u && (u.sm.hide_label || u.sm.hide) && (_.sm.hide = !0),
            (_.sm.parent = u),
            u.sm.labels.push(_),
            u.sm.region && tl[u.sm.region].sm.labels.push(_);
          var v = {
              "stroke-width": 0,
              fill: t.color,
              "font-size": t.size,
              "font-weight": "bold",
              cursor: "pointer",
              "font-family": t.font_family,
              "text-anchor": t.anchor,
              opacity: t.opacity,
            },
            y = { fill: t.hover_color, opacity: t.hover_opacity },
            g = { fill: t.color, opacity: t.opacity };
          if (
            (u.sm.inactive && (v.cursor = "default"),
            _.attr(v),
            (_.sm.attributes = v),
            (_.sm.over_attributes = y),
            (_.sm.out_attributes = g),
            (_.sm.type = "label"),
            (_.sm.id = e),
            (_.sm.scale = o || t.scale),
            (_.sm.scale_limit = t.scale_limit),
            (_.sm.x = m.x),
            (_.sm.y = m.y),
            (_.sm.point0 = c),
            (_.sm.line_x = t.line_x),
            (_.sm.line_y = t.line_y),
            (_.sm.line = !1),
            (_.sm.rotate = t.rotate),
            _.transform(o8(_, e0)),
            t.display
              ? (_.sm.display = t.display)
              : "region" == t.parent_type
              ? (_.sm.display = "out")
              : "location" == t.parent_type
              ? (_.sm.display = u.sm.display)
              : (_.sm.display = a.labels_display ? a.labels_display : "all"),
            (_.sm.display_ids = !!t.display_ids && t.display_ids),
            (t.line || t.pill || p) && (_.sm.bbox = om(_)),
            "auto" == t.display && "state" == t.parent_type)
          ) {
            (_.sm.display = 1e-4), _.sm.bbox || (_.sm.bbox = om(_));
            var b = [1.01, 0.501, 0.251, 0.1251, 0.06251, 0.031251],
              x = t6.paths[u.sm.id],
              w = u.sm.bbox;
            for (var k in b) {
              var z = b[k],
                E = om(_),
                A = E.width * z * 0.5,
                C = E.height * z * 0.5,
                T = 0.5 * (E.x2 + E.x),
                S = 0.5 * (E.y2 + E.y),
                f = T - A,
                B = T + A,
                h = S - C,
                F = S + C,
                I = f > w.x && B < w.x2,
                P = h > w.y && F < w.y2;
              if (I && P) {
                var O = Raphael.isPointInsidePath(x, f, h),
                  j = Raphael.isPointInsidePath(x, B, h),
                  L = Raphael.isPointInsidePath(x, f, F),
                  M = Raphael.isPointInsidePath(x, B, F),
                  N = O && j && L && M,
                  D = E.width / z < eb;
                if (N && D) {
                  _.sm.display = z;
                  break;
                }
              }
              if (!_.sm.scale) break;
            }
          }
          if (t.line) {
            var R = op(_),
              H = ez.path(R),
              q = t.line_size * s * e0 * 1.25,
              W = {
                stroke: t.line_color,
                cursor: "pointer",
                "stroke-width": q,
              };
            H.attr(W),
              (H.sm = {}),
              (H.sm.type = "label"),
              (_.sm.pill = !1),
              (H.sm.size = t.line_size),
              (H.sm.id = e),
              (_.sm.line = H),
              e5.push(H),
              l.push(H);
          }
          if ("state" == u.sm.type && t.pill) {
            var V = _.sm.bbox,
              Y = 1.45 * V.width,
              Q = t.width ? t.width : Y,
              X = 1.15 * V.height,
              f = _.sm.x - 0.5 * Q,
              h = _.sm.y - 0.5 * X,
              Z = "auto" != t.pill_radius ? t.pill_radius : X / 5;
            if (td[e]) var U = td[e];
            else {
              var U = ez.rect(f, h, Q, X, Z);
              td[e] = U;
            }
            if (
              (U.transform(o8(_, e0)),
              (U.sm = {}),
              (U.sm.parent = u),
              (U.sm.attributes = r.clone(u.sm.attributes)),
              u.sm.image && (U.sm.attributes.fill = eY[u.sm.id].color),
              (U.sm.over_attributes = r.clone(u.sm.over_attributes)),
              u.sm.image &&
                (U.sm.over_attributes.fill = eY[u.sm.id].hover_color),
              (U.sm.adjacent_attributes = r.clone(u.sm.adjacent_attributes)),
              U.attr(U.sm.attributes),
              r.x_in_array(_.sm.display, ["state", "all"]) &&
                (u.sm.bbox = r.bbox_union([u.sm.bbox, _.sm.bbox])),
              r.x_in_array(_.sm.display, ["region", "all"]) && u.sm.region)
            ) {
              var G = tl[u.sm.region];
              (G.sm.bbox = r.bbox_union([G.sm.bbox, _.sm.bbox])),
                (G.sm.zooming_dimensions = !1),
                (G.sm.zooming_dimensions = tW(G));
            }
            (_.sm.pill = U), eB.push(U), l.push(U), l.push(_);
          } else l.push(_);
          if (
            (("out" != _.sm.display && "all" != _.sm.display) || _.sm.hide
              ? l.hide()
              : e2.push(l),
            "location" != _.sm.parent.sm.type || _.sm.line || e4.push(l),
            eL.push(l),
            (tp[e] = l),
            er || _.node.setAttribute("class", "sm_label sm_label_" + e),
            p)
          ) {
            var J =
                ((a.location_auto_padding
                  ? 1 + 2 * a.location_auto_padding
                  : 1.3) *
                  _.sm.bbox.width) /
                s,
              K = _.sm.parent,
              ee = K.sm.labels,
              et = K.sm.shape_type;
            "triangle" == et ? (J *= 1.3) : "star" == et && (J *= 2);
            var eo = K.sm.id;
            (eQ[eo].size = J), th(eo);
            var K = tf[eo];
            (_.sm.parent = K),
              (K.sm.labels = ee),
              K.sm.labels.push(_),
              (K.sm.auto_size = !0);
          }
        }
      }),
      eG))
        t8(e);
      eL.hide();
    }
    function op(e) {
      var t = e.sm.bbox,
        o = t.x2 - t.x,
        i = t.y2 - t.y,
        n = e.sm.scale ? ew : 1,
        a = 0.5 * (1 - n) * o,
        s = 0.5 * (1 - n) * i,
        l = e.sm.line_x,
        c = e.sm.line_y,
        m = !l || !c,
        u = e.sm.parent.sm.type;
      if ("location" == u && m)
        (l = e.sm.parent.sm.point0.x), (c = e.sm.parent.sm.point0.y);
      else if ("state" == u && m) {
        var p = e.sm.parent.sm.bbox;
        (l = 0.5 * (p.x2 + p.x)), (c = 0.5 * (p.y2 + p.y));
      }
      var d = { x: l, y: c },
        f = [];
      f.push({ x: t.x2 - a, y: 0.5 * (t.y + t.y2) }),
        f.push({ x: t.x + a, y: 0.5 * (t.y + t.y2) }),
        f.push({ x: 0.5 * (t.x + t.x2), y: t.y + s }),
        f.push({ x: 0.5 * (t.x + t.x2), y: t.y2 - s });
      var h = {};
      for (var $ in f) {
        var _ = f[$],
          v = r.distance(_, d);
        (0 == $ || v < h.distance) &&
          ((h.label = _), (h.location = d), (h.distance = v));
      }
      return r.linePath(h.label.x, h.label.y, h.location.x, h.location.y);
    }
    function o8(e, t, o, i, n, r) {
      var a = void 0 === i ? e.sm.x : i,
        s = void 0 === n ? e.sm.y : n;
      return (
        void 0 === o && (o = "0,0"),
        void 0 === r && (r = e.sm.rotate),
        "t " + o + " s" + t + "," + t + "," + a + "," + s + "r" + r
      );
    }
    var od = {
      triangle: "M -0.57735,.3333 .57735,.3333 0,-.6666 Z",
      diamond: "M 0,-0.5 -0.4,0 0,0.5 0.4,0 Z",
      marker:
        "m-.015-.997c-.067 0-.13.033-.18.076-.061.054-.099.136-.092.219-.0001.073.034.139.068.201.058.104.122.206.158.32.021.058.039.117.058.175.006.009.011-.004.011-.009.037-.125.079-.249.144-.362.043-.08.095-.157.124-.244.022-.075.016-.161-.026-.229-.048-.08-.134-.136-.227-.146-.013-.0001-.027-.0001-.04-.0001z",
      heart:
        "m-.275-.5c-.137.003-.257.089-.3.235-.073.379.348.539.58.765.202-.262.596-.33.576-.718-.017-.086-.065-.157-.13-.206-.087-.066-.208-.089-.311-.05-.055.02-.106.053-.143.098-.065-.081-.169-.127-.272-.125",
      star: "m0-.549c-.044.126-.084.252-.125.379-.135.0001-.271.0001-.405.002.108.078.216.155.323.233-.002.029-.016.057-.023.085-.032.099-.066.199-.097.298.049-.031.095-.068.143-.101.062-.044.124-.089.185-.133.109.077.216.158.326.233-.04-.127-.082-.253-.123-.379.109-.079.219-.156.327-.236-.135-.0001-.27-.002-.405-.003-.042-.126-.081-.252-.125-.377",
    };
    function of(e) {
      for (var t in F) od[t] = F[t];
      var i = [];
      for (var t in od) i.push(t);
      for (var t in (r.clear_sets([eP]),
      (tf = {}),
      (th = function (e) {
        var t = "center",
          n = eQ[e];
        if ("image" != n.type)
          var a = {
              "stroke-width": n.border * e0 * s,
              stroke: n.border_color,
              fill: n.color,
              opacity: n.opacity,
              cursor: "pointer",
            },
            l = {
              "stroke-width": n.hover_border * e0 * s,
              stroke: n.border_color,
              fill: n.hover_color,
              opacity: n.hover_opacity,
              cursor: "pointer",
            };
        else {
          t = n.image_position;
          var a = { cursor: "pointer" },
            l = { cursor: "pointer" };
        }
        n.inactive && (a.cursor = "default");
        var c = eQ[e].type,
          m = n.size * s;
        if (n.x && n.y) {
          var u = {};
          (u.x = n.x), (u.y = n.y);
        } else var u = tH(n.lat, n.lng);
        var p = r.rotate([u.x, u.y], eE),
          d = { x: p[0], y: p[1] };
        if ("auto" == n.size) {
          var f = { sm: {} };
          (f.sm.display = n.display),
            (f.sm.auto_size = !0),
            (f.sm.type = "location"),
            (f.sm.hide_label = !1),
            (f.sm.labels = []),
            (f.sm.point0 = u),
            (f.sm.x = d.x),
            (f.sm.y = d.y),
            (f.sm.shape_type = c),
            (f.sm.id = e),
            (tf[e] = f);
          return;
        }
        if ("circle" == c)
          var h = ez.circle(d.x, d.y, 0.5 * m),
            $ = {
              x: d.x - 0.5 * m * ew,
              y: d.y - 0.5 * m * ew,
              x2: d.x + 0.5 * m * ew,
              y2: d.y + 0.5 * m * ew,
            };
        else if (r.x_in_array(c, i)) {
          var _ = m,
            v = "S" + _ + "," + _ + ",0,0 T" + d.x + "," + d.y,
            y = Raphael.transformPath(od[c], v).toString() + "Z";
          "marker" == c && (t = "bottom-center");
          var $ = Raphael.pathBBox(y),
            h = ez.path(y);
        } else if ("image" == c) {
          var g = n.image_url ? n.image_url : o + n.image_source,
            h = ez.image(g, 0, 0);
          (a.src = g), (h.sm = {});
          var $ = !1;
          if (
            (Raphael._preload(g, function () {
              var e = this.width / this.height,
                o = m,
                i = o * e,
                n = d.x - i / 2,
                r = "bottom-center" == t ? d.y - o : d.y - o / 2;
              h.attr({ height: o, width: i, x: n, y: r }),
                (h.sm.bbox = { x: n, y: r, x2: n + i, y2: r + o });
            }),
            n.image_hover_url || n.image_hover_source)
          ) {
            var b = n.image_hover_url
              ? n.image_hover_url
              : o + n.image_hover_source;
            l.src = b;
          }
        } else
          var x = m,
            w = x,
            k = d.x - w / 2,
            z = d.y - x / 2,
            h = ez.rect(k, z, w, x),
            $ = { x: k, y: z, x2: k + w, y2: z + eg };
        (h.sm = {}),
          (h.sm.image = "image" == c),
          (h.sm.attributes = a),
          h.attr(a),
          (h.sm.original_transform = eE),
          (h.sm.over_attributes = l),
          (h.sm.id = e),
          (h.sm.name = n.name),
          (h.sm.scale = n.scale),
          (h.sm.scale_limit = n.scale_limit),
          (h.sm.position = t),
          (h.sm.url = n.url),
          (h.sm.type = "location"),
          (h.sm.shape_type = c),
          (h.sm.description = n.description),
          (h.sm.description_mobile = n.description_mobile),
          (h.sm.inactive = n.inactive),
          (h.sm.on_click = tA(n.popup)),
          (h.sm.popup_off = tC(n.popup)),
          (h.sm.pulse = n.pulse);
        var E = "bottom" == n.position;
        (h.sm.underlay = E),
          (h.sm.pulse_speed = n.pulse_speed),
          (h.sm.pulse_size = n.pulse_size),
          (h.sm.pulse_color = n.pulse_color ? n.pulse_color : n.color),
          (h.sm.x = d.x),
          (h.sm.y = d.y),
          (h.sm.point0 = u),
          (h.sm.bbox = $),
          (h.sm.labels = []),
          (h.sm.size = m),
          (h.sm.hide = n.hide),
          (h.sm.hide_name = n.hide_name),
          (h.sm.display = n.display),
          (h.sm.display_ids = !!n.display_ids && n.display_ids),
          h.transform(o8(h, ew * e0)),
          ("region" == h.sm.display || "state" == h.sm.display || n.hide) &&
            h.hide(),
          (h.sm.content = oo(h)),
          E ? ej.push(h) : eO.push(h),
          eP.push(h),
          (tf[e] = h),
          er || h.node.setAttribute("class", "sm_location sm_location_" + e);
      }),
      eJ))
        th(t);
    }
    function oh(e) {
      var t = t1.zoom_level,
        o = t1.zoom_level_id,
        i = !!e.sm.region && tl[e.sm.region];
      if (!i) return e;
      if ("out" == t) return i;
      if ("region" == t) return o == i.sm.id ? e : i;
      if ("state" == t) return ts[o].sm.region === i.sm.id ? e : i;
      if ("manual" == t)
        return ew > i.sm.zooming_dimensions.r || !i.sm.zoomable ? i : e;
    }
    function o$(e) {
      var t = t1.zoom_level,
        o = t1.zoom_level_id;
      if ("state" == t) return o != e.sm.id;
      if ("region" != t) return !1;
      var i = !!e.sm.region && tl[e.sm.region];
      return !i || (o != i.sm.id && void 0);
    }
    var o_ = function (e, t, o, i) {
        void 0 == o && (o = !1),
          void 0 == i && (i = !1),
          i ||
            (i =
              "over" == t
                ? e.sm.over_attributes
                : "adjacent" == t
                ? e.sm.adjacent_attributes
                : e.sm.attributes),
          !o || e.sm.image ? e.attr(i) : e.animate(i, D);
      },
      ov = function (e, t, o) {
        if ((void 0 == o && (o = !1), "state" == o))
          var i,
            n = e.sm.parent;
        else if ("region" == o) var n = tl[e.sm.parent.sm.region];
        else var n = oh(e.sm.parent);
        if (
          ((i =
            "over" == t
              ? r.clone(n.sm.over_attributes)
              : "adjacent" == t
              ? r.clone(n.sm.adjacent_attributes)
              : r.clone(n.sm.attributes)),
          n.sm.image && "state" == n.sm.type)
        ) {
          var a = eY[n.sm.id];
          "over" == t ? (i.fill = a.hover_color) : (i.fill = a.color);
        }
        o_(e, t, !1, i);
      };
    function oy(e, t, o, i) {
      if (e.sm.labels) {
        var n;
        e.sm.labels.forEach(function (e) {
          if (e.sm) {
            var n = e.sm.pill;
            "over" == t
              ? (e.stop(), o_(e, "over"), n && ov(n, "over"))
              : ("reset" == t || "out" == t) &&
                (o_(e, "out"),
                n && (ov(n, "out", i), o && ov(n, "adjacent", i)));
          }
        });
      }
    }
    var og = !1,
      o0 = function (e, t) {
        if (!e.sm || !e) {
          r.isFunction(t) && t();
          return;
        }
        var o = !!e.sm.image || (!!ec && !!_);
        if ((tz.hide(), o$(e)))
          e.sm.ignore_hover || e.animate(e.sm.attributes, D, i),
            e.animate(e.sm.adjacent_attributes, D, i),
            oy(e, "out", !0);
        else {
          if (
            (er && "location" == e.sm.type && "image" == e.sm.shape_type) ||
            !e ||
            !e.sm
          )
            return;
          e.sm.ignore_hover ||
            (o
              ? (e.attr(e.sm.attributes), i())
              : e.animate(e.sm.attributes, D, i)),
            oy(e, "out");
        }
        function i() {
          r.isFunction(t) && t();
        }
      },
      ob = !1,
      o3 = !1;
    function ox(e) {
      if (e.touches) {
        var t = e.changedTouches ? e.changedTouches[0] : e.touches[0];
        return { x: t.clientX, y: t.clientY };
      }
      var o = ea ? e.clientY + document.documentElement.scrollTop : e.pageY;
      return {
        x: ea ? e.clientX + document.documentElement.scrollLeft : e.pageX,
        y: o,
      };
    }
    var ow = function () {
      t9();
    };
    function ok() {
      eF.toBack(),
        ej.toBack(),
        eC.toBack(),
        e7 && e7.toFront(),
        eL.toFront(),
        eO.toFront(),
        e4.toFront();
    }
    function oz(e) {
      !e &&
        (es
          ? (eF.mouseup(ty), eC.mouseup(ow), eN.mouseup(tw), eC.mouseup(oj))
          : (eF.hover(tg, t0),
            eF.click(ty),
            eC.click(ow),
            eN.click(tw),
            eC.hover(oj, oj)),
        v &&
          (function e() {
            var t;
            function o() {
              o1();
            }
            (tk = function () {
              clearTimeout(t), (t = setTimeout(o, 200));
            }),
              window.addEventListener
                ? (window.addEventListener("resize", tk, !1),
                  window.addEventListener("orientationchange", tk, !1))
                : (window.attachEvent("resize", tk, !1),
                  window.attachEvent("orientationchange", tk, !1)),
              er &&
                (document.body.onresize = function () {
                  o();
                });
          })(),
        _ &&
          (eF.touchstart(ty),
          eF.touchend(ty),
          eN.touchend(tx),
          (function e() {
            function t(e) {
              var t = ox(e),
                r = t.x,
                a = t.y,
                s = (i - r) * o.r,
                l = (n - a) * o.r,
                c = 5 * o.r;
              return (
                (Math.abs(s) > c || Math.abs(l) > c) && (tD = !0),
                { x: o.x + s, y: o.y + l, w: o.w, h: o.h, r: o.r }
              );
            }
            var o,
              i,
              n,
              a = !1;
            function s(e) {
              if (k) return !1;
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                (o = { x: tn.x, y: tn.y, w: tn.w, h: tn.h, r: tn.w / eb / e0 }),
                (a = !0);
              var t = ox(e);
              (i = t.x), (n = t.y), tz.hide(), tz.pos(e, { l: i, u: n });
            }
            function l(e) {
              if (a && (!e.touches || !(e.touches.length > 1))) {
                var o = t(e);
                ez.setViewBox(o.x, o.y, o.w, o.h);
              }
            }
            function c(e) {
              if (!a || !tD) {
                (tD = !1), (a = !1);
                return;
              }
              var o = t(e);
              ez.setViewBox(o.x, o.y, o.w, o.h),
                (tn = o),
                ((tc = { sm: {} }).sm.zooming_dimensions = tn),
                (tc.sm.type = "manual"),
                (a = !1),
                setTimeout(function () {
                  tD = !1;
                }, 1),
                tL();
            }
            r.addEvent(e8, "mousedown", s),
              r.addEvent(e8, "mousemove", l),
              r.addEvent(e8, "mouseup", c),
              r.addEvent(e8, "mouseleave", c),
              r.addEvent(e8, "touchstart", s),
              r.addEvent(e8, "touchmove", l),
              r.addEvent(e8, "touchend", c);
          })(),
          (function e() {
            var t = !1;
            function o(e) {
              if (!tN && e.touches && e.touches.length > 1) {
                tR = !0;
                var o,
                  i,
                  n,
                  a =
                    ((i = {
                      x: (o = e).touches[0].pageX,
                      y: o.touches[0].pageY,
                    }),
                    (n = { x: o.touches[1].pageX, y: o.touches[1].pageY }),
                    r.distance(i, n));
                if (t) {
                  var s = a - t;
                  Math.abs(s) > 10 && (s > 0 ? eq() : eW(), (t = a));
                } else t = a;
              }
            }
            r.addEvent(ef, "touchstart", o),
              r.addEvent(ef, "touchmove", o),
              r.addEvent(ef, "touchend", function e(o) {
                (t = !1),
                  setTimeout(function () {
                    tR = !1;
                  }, 100);
              });
          })()),
        (ed.mouseIsOver = !1),
        (ed.onmouseover = function () {
          this.mouseIsOver = !0;
        }),
        (ed.onmouseout = function () {
          this.mouseIsOver = !1;
        }),
        (ed.onwheel = function (e) {
          ed.mouseIsOver &&
            _ &&
            E &&
            (e.preventDefault(), e.deltaY < 0 ? eq() : eW());
        }),
        r.addEvent(document, "keyup", function e(t) {
          "auto" == d &&
            (ef.contains(document.activeElement)
              ? (e$.style.display = "block")
              : (e$.style.display = "none"));
        })),
        eP.hover(tg, t0),
        eP.click(ty),
        eL.hover(tb, t3),
        eL.click(tv),
        _ && (eP.touchend(ty), eP.touchstart(ty), eL.touchend(tv));
    }
    function o1() {
      if (!(ed.offsetWidth < 1)) {
        tS(!0), ez.setSize(ey, eg);
        var e = G * (ey / eb) * s * 1.25;
        eF &&
          eP &&
          (eF.forEach(function (t) {
            t.attr({ "stroke-width": e }),
              (t.sm.attributes["stroke-width"] = e),
              (t.sm.over_attributes["stroke-width"] =
                t.sm.border_hover_size * (ey / eb) * s * 1.25);
          }),
          eP.forEach(function (e) {
            "image" != eQ[e.sm.id].type &&
              ((e.sm.attributes["stroke-width"] =
                eQ[e.sm.id].border * (ey / eb) * s * 1.25),
              (e.sm.over_attributes["stroke-width"] =
                eQ[e.sm.id].hover_border * (ey / eb) * s * 1.25),
              e.attr({ "stroke-width": e.sm.attributes["stroke-width"] }));
          }),
          e5.forEach(function (e) {
            var t = e.sm.size * (ey / eb) * s * 1.25;
            e.attr({ "stroke-width": t });
          }),
          e7.forEach(function (e) {
            var t = e.sm.size * (ey / eb) * s * 1.25;
            e.attr({ "stroke-width": t });
          })),
          tO();
        var t = ey / 2 > 250 ? ey / 2 : 250;
        tt = K || t;
      }
    }
    function o5(e) {
      var t = h ? tl[-2] : tl[g],
        o = tl[g];
      if ((L || tj(), !e)) {
        if (ol) var i = ol;
        else if (tm) var i = tm;
        else var i = t;
        oe(i, (!ol && !tm) || !h);
      }
      if (b && -1 != g) {
        eC.show(), L || tj();
        for (var n = 0; n < o.sm.states.length; n++) {
          var r = ts[o.sm.states[n]];
          r.sm.hide || r.show();
        }
        for (var n in tu) {
          var a = tu[n],
            s = tp[n];
          a.sm.parent &&
            "state" == a.sm.parent.sm.type &&
            (a.sm.parent.sm.region != o.sm.id || !a.sm.parent.sm.region) &&
            ((a.sm.hide = !0), s.hide());
        }
        e7.forEach(function (e) {
          Raphael.isPointInsideBBox(o.sm.bbox, e.sm.bbox.x, e.sm.bbox.y) &&
            e.show();
        }),
          !e && h && oe(tl[g]);
        return;
      }
      eC.show(),
        e6.show(),
        e2.show(),
        e7.show(),
        e || !h || ol || tm || oe(tl[g]);
    }
    function o6(e) {
      tE(),
        tM(),
        oa(!0),
        oc(!0),
        of(!0),
        ou(),
        os(),
        tG(tc, !0),
        ok(),
        oz(!0),
        o1(),
        o5(!0),
        tJ(tc),
        oU(),
        oA(!0),
        t2("refresh_complete", []),
        tB(!0),
        r.isFunction(e) && e();
    }
    function o4(n) {
      var c,
        T,
        S,
        F,
        O,
        j,
        M,
        D,
        R,
        q,
        W,
        Y,
        Q,
        Z,
        U,
        G,
        ev,
        ek,
        eY,
        eQ,
        eX,
        eZ,
        eU,
        eG,
        eJ,
        eK,
        e9,
        to;
      if (
        ((t5 = t1.mapdata),
        (t6 = t1.mapinfo),
        e8 && delete window.paper,
        oZ(),
        (i = t5.state_specific),
        (a = t5.main_settings),
        (T = (c = document.getElementsByTagName("script"))[c.length - 1].src),
        (S = "no" != a.back_image && a.back_image),
        (e = "no" != a.back_image_url && a.back_image_url),
        (o =
          (t = "default" != a.images_directory && a.images_directory) ||
          T.substring(0, T.lastIndexOf("/usmap.js") + 1) + "map_images/"),
        !e && S && (e = o + S),
        (er = "VML" == Raphael.type),
        (ea = !!window.document.documentMode),
        (es = !!r.isMobile.iOS()),
        (ec = !!r.isMobile.any()),
        (em = a.pop_ups ? a.pop_ups : a.popups),
        (eu =
          void 0 === a.mobile_scaling && "no" != a.mobile_scaling
            ? 1
            : a.mobile_scaling),
        (el = !1),
        (tT = tC(em)),
        (y = void 0 === a.div ? "map" : a.div),
        (g = void 0 === a.initial_zoom ? -1 : a.initial_zoom),
        (b = "yes" == a.initial_zoom_solo && -1 != g),
        (h =
          void 0 !== a.fly_in_from && "no" != a.fly_in_from && a.fly_in_from),
        (v = "responsive" == a.width),
        "0" == ($ = !!a.rotate && a.rotate) && ($ = !1),
        (N = "no" != a.zoom),
        (_ = "yes" == a.manual_zoom),
        (d = void 0 === a.keyboard_navigation ? "auto" : a.keyboard_navigation),
        (f = void 0 === a.legend_position ? "inside" : a.legend_position),
        (E = "no" != a.allow_scrolling),
        (z = !!t6.default_regions && !!N && t6.default_regions),
        t5.regions && (z = t5.regions),
        t5.labels && (H = t5.labels),
        (x = !1),
        (w = !1),
        (k = !1),
        (u = !1),
        (function e() {
          if ("continent" != l) return !1;
          var t = 0;
          for (var o in t6.paths) t++;
          return t > 8;
        })())
      ) {
        alert("The continent map can't be used with other data.");
        return;
      }
      tE(),
        (function e() {
          if (
            ((ed = document.getElementById(y)),
            (ef =
              !!document.getElementById(y + "_holder") &&
              document.getElementById(y + "_holder")))
          ) {
            ed.removeChild(ef);
            var t = document.getElementById("tt_sm_" + y);
            t && t.parentNode.removeChild(t);
          }
          (ef = document.createElement("div")),
            (ep = document.createElement("div")),
            (e$ = document.createElement("div")),
            (eh = document.createElement("div")),
            (e8 = document.createElement("div")),
            (e_ = document.createElement("div")),
            (ep.id = y + "_outer"),
            (eh.id = y + "_zoom"),
            (e$.id = y + "_access"),
            (e_.id = y + "_legend"),
            (e8.id = y + "_inner"),
            (ef.id = y + "_holder"),
            (ef.style.position = "relative"),
            ef.setAttribute("tabIndex", 0),
            (ef.style.outline = "none"),
            (e8.style.position = "relative"),
            (ep.style.position = "absolute"),
            (eh.style.position = "absolute"),
            (e$.style.position = "absolute"),
            (e$.style.maxWidth = "75%"),
            (e_.style.position = "inside" == f ? "absolute" : "relative"),
            (eh.style.zIndex = "1"),
            (ep.style.zIndex = "1"),
            (e$.style.zIndex = "1"),
            (e$.style.display = "yes" == d ? "block" : "none"),
            (e_.style.zIndex = "1"),
            ed.appendChild(ef),
            ef.appendChild(eh),
            ef.appendChild(ep),
            ef.appendChild(e$),
            ef.appendChild(e8),
            ef.appendChild(e_);
        })(),
        tS(),
        (function e() {
          if (
            ((eC = (ez = Raphael(e8, ey, eg)).set()),
            (eT = ez.rect(ex.x - 2 * eb, ex.y - 2 * e3, 5 * eb, 5 * e3)),
            A)
          ) {
            A.indexOf("/osm/noattr/") > -1 && (m = !0);
            var t = C || ex;
            (eS = ez.image(A, t.x, t.y, t.x2 - t.x, t.y2 - t.y)), eC.push(eS);
          }
          eC.push(eT),
            eC.transform(eA),
            eC.hide(),
            (eF = ez.set()),
            (e6 = ez.set()),
            (eI = ez.set()),
            (eP = ez.set()),
            (eO = ez.set()),
            (ej = ez.set()),
            (eL = ez.set()),
            (e4 = ez.set()),
            (e2 = ez.set()),
            (e7 = ez.set()),
            (eB = ez.set()),
            (e5 = ez.set()),
            (e1 = ez.set()).push(eF, eP, eC, eL, e7);
        })(),
        tO(),
        (function e() {
          ((tP = document.createElement("div")).style.cssText =
            "overflow: visible !important; clip-path: none !important; display:inline !important; opacity:1 !important; transform: none !important; visibility: visible !important; z-index: 1 !important; right: 5px !important; bottom: 5px !important; z-index: 1 !important; position: absolute !important; filter: opacity(1) !important;"),
            e8.appendChild(tP);
          var t =
            "font: 12px Verdana, Arial, Helvetica, sans-serif !important; cursor: pointer !important; float: right !important; color: #000000 !important; text-decoration: none !important;";
          if (m) {
            var o = document.createElement("a");
            (o.href = "https://www.openstreetmap.org/copyright"),
              (o.title = "Background \xa9 OpenStreetMap contributors"),
              (o.innerHTML = "| OSM"),
              (o.style.cssText = t),
              (o.style.marginLeft = ".5em"),
              tP.appendChild(o);
          }
          var i = document.createElement("a");
          (i.style.cssText = t),
            (i.href = "https://simplemaps.com"),
            (i.title = "Built with with SimpleMaps"),
            (i.innerHTML = "&copy; Simplemaps.com"),
            tP.appendChild(i);
        })(),
        ei ||
          (function e() {
            if (!tq) {
              var t = c([
                  "borderRadius",
                  "MozBorderRadius",
                  "WebkitBorderRadius",
                ]),
                o = ec ? 2 * eo : eo,
                i = ey / 2 > 250 ? ey / 2 : 250;
              tt = K || i;
              var n = c(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"]),
                a = n
                  ? n +
                    ": " +
                    3 * et +
                    "px " +
                    3 * et +
                    "px " +
                    4 * et +
                    "px rgba(0,0,0,.5);"
                  : "";
              if ((et < 0.01 && (a = ""), ec)) {
                var s = /(\d+)(px|em)(.*)/g.exec(en);
                en = parseFloat(s[1]) * eu + s[2] + s[3];
              }
              var l =
                ".tt_mobile_sm{margin-top: .4em;} .tt_sm{" +
                (t ? t + ": " + o + "px;" : "") +
                a +
                "z-index: 1000000; background-color: " +
                J +
                "; padding: .6em; opacity:" +
                ee +
                "; font: " +
                en +
                "; color: black;} .tt_name_sm{float: left; font-weight: bold} .tt_custom_sm{overflow: hidden;}";
              (l +=
                ".btn_simplemaps{color: black;text-decoration: none;background: #ffffff;display: inline-block;padding: .5em .5em;margin: 0; width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; line-height: 1.43;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid;border-radius: .3em;}    .btn_simplemaps:hover{  text-decoration: underline;}"),
                (l +=
                  ".xmark_sm{float: " +
                  (er ? "left" : "right") +
                  "; margin-left: .5em; cursor: pointer; line-height: 0px; width: 1.3em !important;}"),
                r.new_style(l),
                (tq = !0);
            }
            function c(e) {
              for (var t = document.documentElement, o = 0; o < e.length; o++)
                if (e[o] in t.style) {
                  var i = e[o];
                  return (i = (i = (i = (i = (i = i.replace(
                    "borderRadius",
                    "border-radius"
                  )).replace("MozBorderRadius", "-moz-border-radius")).replace(
                    "WebkitBorderRadius",
                    "-webkit-border-radius"
                  )).replace("boxShadow", "box-shadow")).replace(
                    "MozBoxShadow",
                    "-moz-box-shadow"
                  )).replace("WebkitBoxShadow", "-webkit-box-shadow");
                }
            }
          })(),
        (tz =
          ((W = (q = r.findPos(e8))[0]),
          (Y = q[1]),
          (R = 0),
          (Q = 0),
          {
            create: function () {
              (D = document.createElement("div")).setAttribute(
                "id",
                "tt_sm_" + y
              ),
                (D.style.position = "absolute"),
                (D.style.display = "none"),
                e8.appendChild(D),
                (e8.onmousemove = this.pos),
                (D.onmousemove = this.pos);
            },
            show: function (e) {
              !tT &&
                ((u = !1),
                null == D && tz.create(),
                (D.style.display = "block"),
                (D.style.zIndex = 2),
                (D.style.maxWidth = tt + "px"),
                (D.innerHTML = e.sm.content),
                tz.update_pos(e));
            },
            reset_pos: function (e, t, o) {
              void 0 == D && tz.create(), tz.set_pos(0 + t, 0 + e, o);
            },
            update_pos: function (e) {
              tz.set_pos(F, O, e);
            },
            pos: function (e, t) {
              t
                ? ((F = t.u), (O = t.l))
                : ((F = ea
                    ? event.clientY + document.documentElement.scrollTop
                    : e.pageY),
                  (O = ea
                    ? event.clientX + document.documentElement.scrollLeft
                    : e.pageX)),
                (F -= Y),
                (O -= W),
                !tT && !x && !u && (!k || !el) && tz.set_pos(F, O);
            },
            set_pos: function (e, t, o) {
              if (D) {
                if (
                  !(
                    o &&
                    o.sm.on_click &&
                    ("yes" == I || ("auto" == I && ey < 401))
                  ) &&
                  e &&
                  t
                ) {
                  if (((j = 0 + 0.5 * ey), (M = 0 + 0.5 * eg), t > j && e > M))
                    i = 4;
                  else if (t < j && e > M) i = 3;
                  else if (t > j && e < M) i = 2;
                  else var i = 1;
                  "below" == P
                    ? (3 == i && (i = 1), 4 == i && (i = 2))
                    : "above" == P && (1 == i && (i = 3), 2 == i && (i = 4)),
                    1 == i
                      ? ((D.style.bottom = "auto"),
                        (D.style.top = e + 5 + "px"),
                        (D.style.left = t + 5 + 5 + "px"),
                        (D.style.right = "auto"))
                      : 2 == i
                      ? ((D.style.bottom = "auto"),
                        (D.style.top = e + 5 + "px"),
                        (D.style.right = ey - t + 5 + "px"),
                        (D.style.left = "auto"))
                      : 3 == i
                      ? ((D.style.bottom = eg - e + 5 + "px"),
                        (D.style.top = "auto"),
                        (D.style.left = t + 5 + 3 + "px"),
                        (D.style.right = "auto"))
                      : ((D.style.bottom = eg - e + 5 + "px"),
                        (D.style.top = "auto"),
                        (D.style.right = ey - t + 5 + "px"),
                        (D.style.left = "auto"));
                } else {
                  (D.style.top = "-100px"),
                    (D.style.left = "-100px"),
                    (D.style.bottom = "auto"),
                    (D.style.right = "auto"),
                    (R = parseInt(D.offsetHeight, 10));
                  var n =
                      ey - (Q = parseInt(D.offsetWidth, 10)) > 0
                        ? 0.5 * (ey - Q)
                        : 0,
                    r = eg - R > 0 ? 0.5 * (eg - R) : 0;
                  (D.style.top = r + "px"),
                    (D.style.left = n + "px"),
                    (D.style.right = "auto"),
                    (D.style.bottom = "auto");
                }
              }
            },
            hide: function () {
              void 0 != D && (D.style.display = "none"),
                (q = r.findPos(e8)) && ((W = q[0]), (Y = q[1]));
            },
          })),
        (G = a.navigation_color ? a.navigation_color : "#f7f7f7"),
        (ev = a.navigation_border_color
          ? a.navigation_border_color
          : "#636363"),
        (ek = a.navigation_opacity ? a.navigation_opacity : 0.8),
        (eY = a.arrow_color ? a.arrow_color : G),
        (eQ = a.arrow_color_border ? a.arrow_color_border : ev),
        (eX = a.arrow_border_color ? a.arrow_border_color : eQ),
        (eZ = void 0 === a.navigation_size ? 40 : a.navigation_size),
        (eU =
          void 0 === a.navigation_size_mobile
            ? eu * eZ
            : a.navigation_size_mobile),
        (eG = ec ? eU : eZ),
        (eJ = "yes" == a.arrow_box ? 1 : 0),
        (eK = eG *= 1),
        (e9 = 0.1 * eG),
        (to = eG / 10),
        (function t() {
          eN = ez.set();
          var o = eG,
            i = eG;
          if (e) {
            var n = new Image();
            (n.onload = function () {
              (Z = n.width), (U = n.height), r();
            }),
              (n.src = e);
          } else r();
          function r() {
            if (e) {
              var t = (eM = Raphael(ep, Z, U)).image(e, 0, 0, Z, U);
              (eK = U), t.attr({ cursor: "pointer" }), eN.push(t), eN.click(tw);
            } else {
              var n = (eM = Raphael(ep, o, i))
                  .path(p.rounded_box)
                  .attr({
                    fill: eY,
                    "stroke-width": 1,
                    stroke: eX,
                    "stroke-opacity": eJ,
                    "fill-opacity": 0,
                    cursor: "pointer",
                  }),
                r = eM
                  .path(p.arrow)
                  .attr({
                    stroke: eX,
                    "stroke-width": 1.5,
                    "stroke-opacity": 1,
                    fill: eY,
                    "fill-opacity": 1,
                    cursor: "pointer",
                  });
              (eN = ez.set()).push(n, r),
                eN.transform("S" + to + "," + to + ",0,0 T0,0");
            }
            L || tj(),
              (ep.style.left = e9 + "px"),
              (ep.style.top = e9 + "px"),
              _ &&
                (function e() {
                  eH = Raphael(eh, eG, 2 * eG + e9);
                  var t = p.plus,
                    o = p.minus,
                    i = p.rounded_box,
                    n = eH
                      .path(i)
                      .attr({
                        fill: G,
                        "stroke-width": 1,
                        stroke: ev,
                        "stroke-opacity": 1,
                        "fill-opacity": ek,
                        cursor: "pointer",
                      }),
                    r = eH
                      .path(t)
                      .attr({
                        "stroke-width": 0,
                        "stroke-opacity": 0,
                        fill: ev,
                        "fill-opacity": 1,
                        opacity: 1,
                        cursor: "pointer",
                      });
                  (eD = ez.set()).push(n, r);
                  var a = "S" + to + "," + to + ",0,0 T0,0";
                  eD.transform(a);
                  var s = eH
                      .path(i)
                      .attr({
                        fill: G,
                        "stroke-width": 1,
                        stroke: ev,
                        "stroke-opacity": 1,
                        "fill-opacity": ek,
                        cursor: "pointer",
                      }),
                    l = eH
                      .path(o)
                      .attr({
                        "stroke-width": 0,
                        "stroke-opacity": 0,
                        fill: ev,
                        "fill-opacity": 1,
                        opacity: 1,
                        cursor: "pointer",
                      });
                  (eR = ez.set()).push(s, l);
                  var a = "S" + to + "," + to + ",0,0 T0," + (eG + e9);
                  function c(e, t) {
                    if ((void 0 === t && (t = "z"), w && "region" != w.sm.type))
                      t0.call(w, !0, function () {
                        (w = !1), c(e);
                      });
                    else {
                      if (
                        "z" == t &&
                        !(function e(t) {
                          var o = tc.sm.zooming_dimensions.w / t,
                            i = t < 1;
                          if (-1 != g && ("manual" == tc.sm.type || b)) {
                            var n = tl[g].sm.zooming_dimensions.w;
                            if (i && o > n - 1 && (oi(tc, tl[g]) || b))
                              return oe(tl[g]), !1;
                          }
                          return (
                            !i ||
                            !(o > tl[-1].sm.zooming_dimensions.w - 1) ||
                            (b || oe(tl[-1]), !1)
                          );
                        })(e)
                      )
                        return;
                      var o = { sm: { type: "manual", zp: 1 } };
                      ti &&
                        (((tc = {
                          sm: { type: "manual", zp: 1 },
                        }).sm.zooming_dimensions = tn),
                        (tc.sm.bbox = {
                          x: tn.x / e0,
                          y: tn.y / e0,
                          width: tn.w / e0,
                          height: tn.h / e0,
                        }));
                      var i = (function e(t, o) {
                        var i = tc.sm.zooming_dimensions.w,
                          n = tc.sm.zooming_dimensions.h,
                          r = tc.sm.zooming_dimensions.x,
                          a = tc.sm.zooming_dimensions.y;
                        if ("x" == o)
                          var r =
                            tc.sm.zooming_dimensions.x +
                            tc.sm.zooming_dimensions.w * t;
                        else if ("y" == o)
                          var a =
                            tc.sm.zooming_dimensions.y +
                            tc.sm.zooming_dimensions.h * t;
                        else
                          var i = tc.sm.zooming_dimensions.w / t,
                            n = tc.sm.zooming_dimensions.h / t,
                            r =
                              tc.sm.zooming_dimensions.x +
                              (tc.sm.zooming_dimensions.w - i) / 2,
                            a =
                              tc.sm.zooming_dimensions.y +
                              (tc.sm.zooming_dimensions.h - n) / 2;
                        var s = i / (eb * e0);
                        return { x: r, y: a, w: i, h: n, r: s };
                      })(e, t);
                      if (!i) return;
                      (o.sm.zooming_dimensions = i), oe(o);
                    }
                  }
                  eR.transform(a),
                    (eh.style.top = eK + 2 * e9 + "px"),
                    (eh.style.left = e9 + "px"),
                    (eR = ez.set()).push(s, l),
                    (eq = function () {
                      c(B);
                    }),
                    (eV = function (e, t) {
                      c(e, t);
                    }),
                    (eW = function () {
                      c(1 / B);
                    }),
                    (t1.zoom_in = eq),
                    (t1.zoom_out = eW),
                    eD.click(eq),
                    eR.click(eW),
                    eD.touchend(eq),
                    eR.touchend(eW);
                })();
          }
        })(),
        tM(),
        os(),
        oa(),
        oc(),
        setTimeout(function () {
          var e;
          of(),
            ou(),
            (function e() {
              var t = t5.lines ? t5.lines : t5.borders;
              if (t) {
                for (var o in t) {
                  var i = t[o],
                    n = te[o],
                    r = n.size * (ey / eb) * s * 1.25,
                    a = !1;
                  if (n.origin_location && n.destination_location) {
                    var l = tf[n.origin_location].sm.point0,
                      c = tf[n.destination_location].sm.point0;
                    if (
                      ((a =
                        "M " + l.x + "," + l.y + " " + c.x + "," + c.y + " Z"),
                      n.angle)
                    ) {
                      var m = parseFloat(n.angle);
                      if (m > -61 && m < 61) {
                        l.x <= c.x && (m *= -1);
                        var u = Raphael.transformPath(
                            a,
                            "R" + m + "," + l.x + "," + l.y + "S2"
                          ).toString(),
                          p = Raphael.transformPath(a, "R-90S2").toString(),
                          d = Raphael.pathIntersection(u, p)[0];
                        a =
                          "M " +
                          l.x +
                          "," +
                          l.y +
                          " C" +
                          l.x +
                          "," +
                          l.y +
                          "," +
                          d.x +
                          "," +
                          d.y +
                          "," +
                          c.x +
                          "," +
                          c.y;
                      }
                    }
                  }
                  var f = a || i.path,
                    h = ez.path(f);
                  h.transform(eE),
                    h.attr({
                      stroke: n.color,
                      fill: "none",
                      cursor: "pointer",
                      "stroke-dasharray": [n.dash],
                      "stroke-width": r,
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": 4,
                    }),
                    (h.sm = {}),
                    (h.sm.size = n.size),
                    (h.sm.bbox = h.getBBox(!0)),
                    er || h.node.setAttribute("class", "sm_line sm_line_" + o),
                    e7.push(h);
                }
                e7.hide();
              }
            })(),
            (function e() {
              (e$.style.right = "0em"), (e$.style.top = "0em");
              var t =
                  void 0 === a.navigate_title ? "Navigate" : a.navigate_title,
                o = void 0 === a.keyboard_omit ? "" : a.keyboard_omit;
              if (!(o.indexOf("navigat") > -1)) {
                var i = document.createElement("select");
                i.options.add(new Option(t, "-1")),
                  i.options.add(new Option("Back", "back")),
                  _ &&
                    (i.options.add(new Option("Zoom in", "in")),
                    i.options.add(new Option("Zoom out", "out")),
                    i.options.add(new Option("Left", "left")),
                    i.options.add(new Option("Right", "right")),
                    i.options.add(new Option("Up", "up")),
                    i.options.add(new Option("Down", "down"))),
                  (i.style.marginRight = ".5em"),
                  (i.style.marginTop = ".5em"),
                  (i.style.float = "left"),
                  e$.appendChild(i),
                  (i.onchange = function (e) {
                    if ("-1" == this.value) return !1;
                    "back" == this.value && tx(),
                      "out" == this.value && eW(),
                      "in" == this.value && eq(),
                      "left" == this.value && eV("-.25", "x"),
                      "right" == this.value && eV(".25", "x"),
                      "up" == this.value && eV("-.25", "y"),
                      "down" == this.value && eV(".25", "y"),
                      setTimeout(function () {
                        i.value = "-1";
                      }, 1e3);
                  });
              }
              var n = void 0 === a.states_title ? "States" : a.states_title,
                s = void 0 === a.regions_title ? "Regions" : a.regions_title,
                l = {
                  state: { title: n, array: ts },
                  location: {
                    title:
                      void 0 === a.locations_title
                        ? "Locations"
                        : a.locations_title,
                    array: tf,
                  },
                  region: { title: s, array: tl },
                };
              for (var c in l) {
                var m = l[c],
                  u = o.indexOf(c) > -1,
                  p = Object.size(m.array);
                if (!(p < 1) && (!(p < 2) || "region" != c) && !u) {
                  var d = document.createElement("select");
                  d.options.add(new Option(m.title, "-1")),
                    (d.style.marginRight = ".5em"),
                    (d.style.marginTop = ".5em"),
                    (d.style.float = "left");
                  var f = [];
                  for (var h in m.array) f.push(m.array[h]);
                  for (
                    var $ = f.sort(function (e, t) {
                        return e.sm.name > t.sm.name ? 1 : -1;
                      }),
                      h = 0;
                    h < $.length;
                    h++
                  ) {
                    var v = $[h];
                    "out" != v.sm.type &&
                      !v.sm.inactive &&
                      !v.sm.hide &&
                      d.options.add(new Option(v.sm.name, v.sm.id));
                  }
                  (d.onchange = r.callback_closure(
                    { entry: m, dropdown: d },
                    function (e) {
                      var t = e.dropdown,
                        o = e.entry;
                      if ("-1" == t.value) return !1;
                      var i = o.array[t.value],
                        n = i.sm.type,
                        r = i.sm.id;
                      console.log("here", n, r), tF(n, r);
                    }
                  )),
                    e$.appendChild(d);
                }
              }
            })(),
            tB(),
            tX(),
            ok(),
            tz.create(),
            (tb = function () {
              this.sm.parent && tg.call(this.sm.parent);
            }),
            (t3 = function () {
              this.sm.parent && t0.call(this.sm.parent);
            }),
            (tv = function (e) {
              this.sm.parent && ty.call(this.sm.parent, e);
            }),
            (t$ = function (e, t) {
              if (e.sm.pulse || t) {
                var o = e.sm.shape_type;
                if ("location" == e.sm.type && "image" != o && !(ew < 0.05)) {
                  var i = e.clone();
                  eO.toFront(), e4.toFront();
                  var n = 1 * e.sm.pulse_size,
                    r = {
                      "stroke-width": 4 * e.attrs["stroke-width"],
                      "stroke-opacity": 0,
                    };
                  i.attr({ "fill-opacity": 0, stroke: e.sm.pulse_color });
                  var a = function () {
                      i.remove();
                    },
                    s = e.sm.scale ? ew : 1,
                    l = (n - 1) * 0.5 * e.sm.size * s * e0,
                    c =
                      "bottom-center" == e.sm.position
                        ? o8(e, s * e0 * n, "0," + l)
                        : o8(e, s * e0 * n);
                  (r.transform = c),
                    i.animate(r, 1e3 * e.sm.pulse_speed, "ease-out", a);
                }
              }
            }),
            (t_ = function (e) {
              if (!er || !ea)
                for (
                  var t = Array.isArray(e) ? e : [e], o = 0;
                  o < t.length;
                  o++
                ) {
                  var i = ts[t[o]];
                  if (!i || !i.sm || ew < 0.05) return;
                  i.sm.shape_type;
                  var n = i.clone(),
                    r = 1 * i.sm.pulse_size,
                    a = {
                      "stroke-width":
                        4 *
                        (i.attrs["stroke-width"] ? i.attrs["stroke-width"] : 1),
                      "stroke-opacity": 0,
                      "fill-opacity": 0,
                    };
                  n.attr({ "fill-opacity": 0, stroke: i.sm.pulse_color });
                  var s = function () {
                      n.remove();
                    },
                    l = i.sm.bbox;
                  (i.sm.x = (l.x2 + l.x) / 2),
                    (i.sm.y = (l.y2 + l.y) / 2),
                    (i.sm.rotate = 0);
                  var c = o8(i, r, "0,0");
                  (a.transform = eE + c),
                    i.sm.bbox,
                    n.animate(a, 1e3 * i.sm.pulse_speed, "ease-out", s);
                }
            }),
            (tg = function () {
              if (
                (tO(),
                oA(),
                oj(),
                (this.id || "set" != !this.type) && !og && !oR)
              ) {
                var e,
                  t = oh(this);
                if (t.sm.on_click) var o = !0;
                if (((tT = t.sm.popup_off), !tD && !tR && !tN && (!k || !el))) {
                  if (ob && !x) return !1;
                  if (((ob = this), t)) {
                    if (
                      ((function e(t) {
                        if (t.sm.labels) {
                          var o;
                          t.sm.labels.forEach(function (e) {
                            t.sm.inactive
                              ? e.attr({ cursor: "default" })
                              : e.attr({ cursor: "pointer" });
                          });
                        }
                      })(t),
                      !t.sm.inactive)
                    ) {
                      if (
                        ("state" == (e = t).sm.type &&
                          e.sm.emphasizable &&
                          ((og = !0),
                          e.insertBefore(e6),
                          setTimeout(function () {
                            og = !1;
                          }, 1)),
                        oC(t),
                        o)
                      ) {
                        if (!k) {
                          if (
                            (t.stop(),
                            er &&
                              "location" == t.sm.type &&
                              "image" == t.sm.shape_type)
                          )
                            return;
                          t.sm.ignore_hover || (o_(t, "over"), t$(t)),
                            oy(t, "over");
                        }
                      } else {
                        if (
                          (tz.show(t),
                          t.stop(),
                          er &&
                            "location" == t.sm.type &&
                            "image" == t.sm.shape_type)
                        )
                          return;
                        t.sm.ignore_hover ||
                          (o_(t, "over"), oy(t, "over"), t$(t), t_(t));
                      }
                    }
                  }
                }
              }
            }),
            (t0 = function (e, t) {
              if (
                ((t && "function" == typeof t) || (t = !1),
                !tN && !oR && ((ob = !1), this.id || "set" != !this.type))
              ) {
                var o = oh(this);
                if (o && !o.sm.inactive) {
                  if ((oT(o), el)) (k && !0 !== e) || (o0(o, t), (o3 = o));
                  else {
                    if ((tz.hide(), o$(o))) {
                      if (tN) return !1;
                      o.sm.ignore_hover || o_(o, "out", !0),
                        o_(o, "adjacent", !0),
                        oy(o, "out", !0);
                    } else {
                      if (
                        er &&
                        "location" == o.sm.type &&
                        "image" == o.sm.shape_type
                      )
                        return;
                      o.sm.ignore_hover || o_(o, "out", !0), oy(o, "out");
                    }
                    o0(o, t);
                  }
                }
              }
            }),
            (e = !1),
            (ty = function (t) {
              if (!tN && !tD && !tR) {
                tO(),
                  ec &&
                    ((e = !0),
                    setTimeout(function () {
                      e = !1;
                    }, 500)),
                  e || t9();
                var o = oh(this);
                if (!o.sm.inactive && (oB(o, t), !t1.ignore_clicks)) {
                  if (
                    ((el = o.sm.on_click),
                    !t ||
                      ((!k || "touchend" != t.type) &&
                        (k || "touchstart" != t.type)))
                  ) {
                    if (
                      (el && tz.update_pos(),
                      (tT = o.sm.popup_off),
                      o.sm.zoomable &&
                        ("region" == o.sm.type ||
                          tc != o ||
                          "out" == o.sm.type))
                    )
                      oF(o, t),
                        oj(),
                        w && w.sm
                          ? t0.call(w, !0, function () {
                              oe(o), (w = o);
                            })
                          : (oe(o), (w = o));
                    else if (el) {
                      if (
                        (w != o &&
                          w &&
                          ((i = o),
                          (n = w),
                          "state" != i.sm.type ||
                            "region" != n.sm.type ||
                            n.sm.id != i.sm.region) &&
                          !(
                            "region" != o.sm.type && "region" == t1.zoom_level
                          ) &&
                          o0(w),
                        oS(o, t),
                        t)
                      ) {
                        var i,
                          n,
                          r = ox(t);
                        tz.pos(t, { l: r.x, u: r.y });
                      }
                      tz.show(o),
                        (k = !0),
                        oy(o, "over"),
                        t$(o),
                        (er &&
                          "location" == o.sm.type &&
                          "image" == o.sm.shape_type) ||
                          o.sm.ignore_hover ||
                          o.attr(o.sm.over_attributes),
                        (w = o);
                      var a = document.getElementById("xpic_sm_" + y);
                      a &&
                        (a.onclick = function () {
                          return (
                            tz.hide(),
                            (k = !1),
                            w.sm && t0.call(w),
                            (el = !1),
                            t2("close_popup", []),
                            !1
                          );
                        });
                    } else {
                      oS(o, t);
                      var s = o.sm.url;
                      if ("" != s && !oW) {
                        var l = "javascript" == s.substring(0, 10);
                        if (!X || l) {
                          l
                            ? (window.location.href = s)
                            : (window.top.location.href = s);
                          return;
                        }
                        window.open(s, "_blank"), tz.hide();
                        return;
                      }
                    }
                  }
                }
              }
            }),
            (tx = function (e) {
              if (
                (void 0 === e && (e = !1),
                t2("back", []),
                ("out" == tc.sm.type || ("region" == tc.sm.type && b)) && L)
              )
                window.location.href = "javascript:" + L;
              else if (V && "state" == tc.sm.type && tc.sm.region)
                w
                  ? t0.call(w, !0, function () {
                      oe(tl[tc.sm.region]);
                    })
                  : oe(tl[tc.sm.region], !1, e);
              else {
                var t = oi(tc, tl[g]),
                  o = "manual" == tc.sm.type && t ? tl[g] : tl[-1];
                w && w.sm && "region" != w.sm.type
                  ? t0.call(w, !0, function () {
                      oe(o);
                    })
                  : oe(o, !1, e);
              }
            }),
            (tw = function () {
              tx();
            }),
            oz(),
            o5(),
            oU(),
            t2("complete", []),
            r.isFunction(n) && n(),
            oA();
        }, 1);
    }
    var o7 = !1,
      o2 = function (e, t) {
        if (!o7 || e || t) {
          o7 = !0;
          var o = function (t) {
            var o = ea
                ? event.clientX + document.documentElement.scrollLeft
                : t.pageX,
              i = ea
                ? event.clientY + document.documentElement.scrollTop
                : t.pageY,
              n = r.findPos(e8),
              a = n[0],
              s = n[1],
              l = tc.sm.zooming_dimensions,
              c = (l.r * ey) / e0,
              m = (l.r * eg) / e0,
              u = l.x / e0 + (c * (o - a)) / ey,
              p = l.y / e0 + (m * (i - s)) / eg,
              d =
                "You clicked on\nx: " +
                (u = Math.round(1e5 * u) / 1e5) +
                ",\ny: " +
                (p = Math.round(1e5 * p) / 1e5) +
                ",";
            e && console.log(d), t2("click_xy", [{ x: u, y: p }]);
          };
          t || eF.click(o), eL.click(o);
        }
      },
      oE = function () {
        o2(!0);
      },
      oA = function (e) {
        (t4.click_xy || t7.click_xy.length > 0) && o2(!1, e);
      },
      oC = function (e) {
        var t = e.sm.type;
        "state" == t && t2("over_state", [e.sm.id]),
          "location" == t && t2("over_location", [e.sm.id]),
          "region" == t && t2("over_region", [e.sm.id]);
      },
      oT = function (e) {
        var t = e.sm.type;
        "state" == t && t2("out_state", [e.sm.id]),
          "location" == t && t2("out_location", [e.sm.id]),
          "region" == t && t2("out_region", [e.sm.id]);
      },
      oS = function (e, t) {
        var o = e.sm.type;
        "state" == o && t2("click_state", [e.sm.id, t]),
          "region" == o && t2("click_region", [e.sm.id, t]),
          "location" == o && t2("click_location", [e.sm.id, t]);
      },
      oB = function (e, t) {
        var o = e.sm.type;
        "state" == o && t2("preclick_state", [e.sm.id, t]),
          "region" == o && t2("preclick_region", [e.sm.id, t]),
          "location" == o && t2("preclick_location", [e.sm.id, t]);
      },
      oF = function (e, t) {
        var o = e.sm.type;
        "state" == o && t2("zoomable_click_state", [e.sm.id, t]),
          "region" == o && t2("zoomable_click_region", [e.sm.id, t]);
      };
    function oI(e, t) {
      oe(tl[e], !1, t);
    }
    function oP(e, t) {
      oe(ts[e], !1, t);
    }
    function oO(e, t, o) {
      void 0 === t && (t = 4), void 0 === o && (o = function () {});
      var i = { sm: { type: "manual", zp: t } },
        n = tf[e],
        r = n.sm.size * e0 * t,
        a = (r * e3) / eb,
        s = n.sm.x - 0.5 * r,
        l = n.sm.y - 0.5 * a,
        c = r / (eb * e0);
      (i.sm.zooming_dimensions = { x: s, y: l, w: r, h: a, r: c }),
        oe(i, !1, function () {
          o(), tL();
        });
    }
    function oj() {
      if ((ob && t0.call(ob), x)) (x = !1), !el && (tz.hide(), (k = !1));
    }
    function oL(e, t, o) {
      if ((void 0 === o && (o = function () {}), "state" == e)) var i = ts[t];
      else if ("region" == e) var i = tl[t];
      else var i = tf[t];
      var n = i.sm.on_click,
        r = tc.sm.zooming_dimensions;
      if ("location" != e) {
        var a = i.sm.bbox,
          s = (a.x + a.x2) * 0.5,
          l = (a.y + a.y2) * 0.5;
        (s *= e0), (l *= e0);
      } else
        var s = i.sm.x,
          l = i.sm.y;
      var c = (s - r.x) / ew,
        m = (l - r.y) / ew,
        p = c > 1.1 * ey || m > 1.1 * eg,
        d = !i.sm.region && "region" == t1.zoom_level;
      return p || d
        ? oI("-1", function () {
            oL(e, t, o);
          })
        : i.sm.region && "out" == t1.zoom_level
        ? oI(i.sm.region, function () {
            oL(e, t, o);
          })
        : ((x = !0),
          n ? ty.call(i) : tg.call(i),
          tz.reset_pos(c, m, i),
          (u = !0),
          (x = !1),
          o(),
          !0);
    }
    function oM(e) {
      var t = tf[e];
      t && t$(t, !0);
    }
    function oN() {
      tz.hide(), (k = !1), el ? t0.call(w) : ob && t0.call(ob);
    }
    function oD(e, t) {
      eK(e);
      var o = ts[e].sm.labels;
      tr(e);
      for (var i = 0; i < o.length; i++) {
        var n = o[i].sm.id;
        e9(n), t8(n);
      }
      r.isFunction(t) && t();
    }
    var oR = !1;
    function oH() {
      (oR = !0), tz.hide();
    }
    var oR = !1;
    function oq() {
      oR = !1;
    }
    var oW = !1;
    function oV() {
      oW = !0;
    }
    var oW = !1;
    function oY() {
      oW = !1;
    }
    function oQ(e) {
      tx(e);
    }
    function oX(e) {
      t_(e);
    }
    function oZ() {
      (t1.calibrate = ot),
        (t1.get_xy = oE),
        (t1.proj = tH),
        (t1.load = o4),
        (t1.region_zoom = oI),
        (t1.state_zoom = oP),
        (t1.zoom_in = !1),
        (t1.zoom_out = !1),
        (t1.location_zoom = oO),
        (t1.zoom_to_popup = tF),
        (t1.back = oQ),
        (t1.popup = oL),
        (t1.pulse = oM),
        (t1.pulse_state = oX),
        (t1.popup_hide = oN),
        (t1.zoom_level = "out"),
        (t1.ignore_clicks = !1),
        (t1.zoom_level_id = !1),
        (t1.disable_urls = oV),
        (t1.enable_urls = oY),
        (t1.disable_popups = oH),
        (t1.enable_popups = oq),
        (t1.refresh = o6),
        (t1.refresh_state = oD),
        (t1.loaded = !0),
        (t1.resize = o1),
        (t1.trial = c),
        (t1.zoom_ratio = 1);
    }
    function oU() {
      (t1.states = ts),
        (t1.regions = tl),
        (t1.locations = tf),
        (t1.labels = tu),
        (t1.tooltip = tz);
    }
    oZ(), o4();
  }
  (window[e] = d),
    n.docReady(function () {
      if (
        ((function e(t, o) {
          var i = d.hooks[t];
          i && i.apply(null, o);
          for (var n = d.plugin_hooks[t], r = 0; r < n.length; r++) {
            var i = n[r];
            i && i.apply(null, o);
          }
        })("ready"),
        !window[e].loaded)
      )
        for (var t = 0; t < u.length; t++) {
          var o = u[t];
          o &&
            o.mapdata &&
            "no" != o.mapdata.main_settings.auto_load &&
            (function (e) {
              setTimeout(function () {
                e.load();
              }, 1);
            })(o);
        }
    }),
    u.push(d);
})("simplemaps_usmap");
