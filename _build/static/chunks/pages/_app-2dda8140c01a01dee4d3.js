(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    3646: function (t, e, n) {
      var r = n(7228);
      t.exports = function (t) {
        if (Array.isArray(t)) return r(t);
      };
    },
    9713: function (t) {
      t.exports = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      };
    },
    6156: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    6860: function (t) {
      t.exports = function (t) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      };
    },
    8206: function (t) {
      t.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    319: function (t, e, n) {
      var r = n(3646),
        o = n(6860),
        i = n(379),
        a = n(8206);
      t.exports = function (t) {
        return r(t) || o(t) || i(t) || a();
      };
    },
    8594: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = (function (t) {
          var e = {};
          return function (n) {
            return void 0 === e[n] && (e[n] = t(n)), e[n];
          };
        })(function (t) {
          return (
            r.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              t.charCodeAt(2) < 91)
          );
        });
    },
    1298: function (t, e) {
      "use strict";
      e.Z = {
        button: {
          goToMainPage: "Go to main page",
          readMore: "read more \u2192",
          visitWebSite: "Visit web site",
        },
        title: { _404: "404", index: "Ard\u0131c" },
        meta: { _404: "404", index: "Ard\u0131c" },
        commons: {
          sliderText:
            "Platforms for large-scale <br/>IoT services & deep device management<br/>",
          plus0: "connectivity management",
          plus1: "service orchestration",
          plus2: "artificial intelligence",
          plus3: "big data",
          plus4: "vertical solutions",
          brand1Text: "Enterprise Mobility Management as a Service",
          brand2Text: "Full Stack IoT Platform with Edge Computing",
          copyright: "\xa9 2021 ARDIC Inc.",
          references: "References",
          successStories: "Success Stories",
          solutions: "Solutions",
          contactForm: "Contact Form",
          locations: "Locations",
          seeTheDocuments: "See the documents",
        },
        page: {
          _404: { title: "404 | Page not found" },
          home: { title: "Ard\u0131c", slug: "/" },
          about: { title: "About", slug: "/about" },
          solutions: { title: "Solutions", slug: "/solutions" },
          technologies: { title: "Technologies", slug: "/technologies" },
          contact: { title: "Contact", slug: "/contact" },
          carreer: { title: "Carreer", slug: "/carreer" },
          teams: { title: "Teams", slug: "/teams" },
        },
        forms: {
          mail: {
            name: "Name Surname",
            email: "Email",
            message: "Message",
            sending: "Sending...",
            sent: "Your message has been sent.",
            error: "An error occurred, please try again to send.",
          },
        },
      };
    },
    1997: function (t, e) {
      "use strict";
      e.Z = {
        button: {
          goToMainPage: "Ana sayfaya git",
          readMore: "devam\u0131n\u0131 oku \u2192",
          visitWebSite: "Web sayfas\u0131n\u0131 ziyaret et",
        },
        title: { _404: "404", index: "Ard\u0131c" },
        meta: { _404: "404", index: "Ard\u0131c" },
        commons: {
          sliderText:
            "B\xfcy\xfck \xf6l\xe7ekli IoT hizmetleri<br/>& derin cihaz y\xf6netimi i\xe7in platformlar<br/>",
          plus0: "ba\u011flant\u0131 y\xf6netimi",
          plus1: "hizmet d\xfczenlemesi",
          plus2: "yapay zeka",
          plus3: "b\xfcy\xfck veri",
          plus4: "dikey \xe7\xf6z\xfcmler",
          brand1Text: "Hizmet Olarak Kurumsal Mobilite Y\xf6netimi",
          brand2Text:
            "Edge Computing ile Tam Y\u0131\u011f\u0131n IoT Platformu",
          copyright: "\xa9 2021 ARDIC Inc.",
          references: "Referanslar",
          successStories: "Ba\u015far\u0131 Hikayeleri",
          solutions: "\xc7\xf6z\xfcmler",
          contactForm: "\u0130leti\u015fim Formu",
          locations: "B\xf6lgeler",
          seeTheDocuments: "Dok\xfcmanlara g\xf6zat",
        },
        page: {
          _404: { title: "404 | Sayfa Bulunamad\u0131" },
          home: { title: "Ard\u0131c", slug: "/" },
          about: { title: "Hakk\u0131nda", slug: "/about" },
          solutions: { title: "\xc7\xf6z\xfcmler", slug: "/solutions" },
          technologies: { title: "Teknolojiler", slug: "/technologies" },
          contact: { title: "\u0130leti\u015fim", slug: "/contact" },
          carreer: { title: "Kariyer", slug: "/carreer" },
          teams: { title: "Tak\u0131m", slug: "/teams" },
        },
        forms: {
          mail: {
            name: "Ad Soyad",
            email: "E-posta",
            message: "Mesaj",
            sending: "G\xf6nderiliyor...",
            sent: "Mesaj\u0131n\u0131z g\xf6nderildi.",
            error: "Bir hata olu\u015ftu, g\xf6ndermeyi tekrar deneyiniz.",
          },
        },
      };
    },
    9917: function (t, e, n) {
      "use strict";
      var r = n(3038),
        o = n(319),
        i = n(5318);
      e.default = function (t) {
        var e = t.src,
          n = t.sizes,
          o = t.unoptimized,
          i = void 0 !== o && o,
          d = t.priority,
          p = void 0 !== d && d,
          v = t.loading,
          h = t.className,
          g = t.quality,
          y = t.width,
          x = t.height,
          b = t.objectFit,
          k = t.objectPosition,
          A = t.loader,
          P = void 0 === A ? S : A,
          T = t.placeholder,
          E = void 0 === T ? "empty" : T,
          C = t.blurDataURL,
          O = (0, a.default)(t, [
            "src",
            "sizes",
            "unoptimized",
            "priority",
            "loading",
            "className",
            "quality",
            "width",
            "height",
            "objectFit",
            "objectPosition",
            "loader",
            "placeholder",
            "blurDataURL",
          ]),
          M = n ? "responsive" : "intrinsic";
        "layout" in O && (O.layout && (M = O.layout), delete O.layout);
        var _ = "";
        if (
          (function (t) {
            return (
              "object" === typeof t &&
              (m(t) ||
                (function (t) {
                  return void 0 !== t.src;
                })(t))
            );
          })(e)
        ) {
          var R = m(e) ? e.default : e;
          if (!R.src)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                JSON.stringify(R)
              )
            );
          if (
            ((C = C || R.blurDataURL),
            (_ = R.src),
            (!M || "fill" !== M) &&
              ((x = x || R.height), (y = y || R.width), !R.height || !R.width))
          )
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                JSON.stringify(R)
              )
            );
        }
        e = "string" === typeof e ? e : _;
        var L = j(y),
          z = j(x),
          D = j(g);
        0;
        var N = !p && ("lazy" === v || "undefined" === typeof v);
        e && e.startsWith("data:") && ((i = !0), (N = !1));
        var V,
          I,
          B,
          F = (0, f.useIntersection)({ rootMargin: "200px", disabled: !N }),
          U = r(F, 2),
          H = U[0],
          W = U[1],
          q = !N || W,
          X = (0, s.default)(
            {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: b,
              objectPosition: k,
            },
            "blur" === E
              ? {
                  filter: "blur(20px)",
                  backgroundSize: "cover",
                  backgroundImage: 'url("'.concat(C, '")'),
                }
              : void 0
          );
        if (
          "undefined" !== typeof L &&
          "undefined" !== typeof z &&
          "fill" !== M
        ) {
          var Y = z / L,
            Z = isNaN(Y) ? "100%" : "".concat(100 * Y, "%");
          "responsive" === M
            ? ((V = {
                display: "block",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: 0,
              }),
              (I = {
                display: "block",
                boxSizing: "border-box",
                paddingTop: Z,
              }))
            : "intrinsic" === M
            ? ((V = {
                display: "inline-block",
                maxWidth: "100%",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: 0,
              }),
              (I = {
                boxSizing: "border-box",
                display: "block",
                maxWidth: "100%",
              }),
              (B = '<svg width="'
                .concat(L, '" height="')
                .concat(
                  z,
                  '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>'
                )))
            : "fixed" === M &&
              (V = {
                overflow: "hidden",
                boxSizing: "border-box",
                display: "inline-block",
                position: "relative",
                width: L,
                height: z,
              });
        } else
          "undefined" === typeof L &&
            "undefined" === typeof z &&
            "fill" === M &&
            (V = {
              display: "block",
              overflow: "hidden",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              margin: 0,
            });
        var G = {
          src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
          srcSet: void 0,
          sizes: void 0,
        };
        q &&
          (G = w({
            src: e,
            unoptimized: i,
            layout: M,
            width: L,
            quality: D,
            sizes: n,
            loader: P,
          }));
        return u.default.createElement(
          "div",
          { style: V },
          I
            ? u.default.createElement(
                "div",
                { style: I },
                B
                  ? u.default.createElement("img", {
                      style: {
                        maxWidth: "100%",
                        display: "block",
                        margin: 0,
                        border: "none",
                        padding: 0,
                      },
                      alt: "",
                      "aria-hidden": !0,
                      role: "presentation",
                      src: "data:image/svg+xml;base64,".concat(
                        (0, l.toBase64)(B)
                      ),
                    })
                  : null
              )
            : null,
          !q &&
            u.default.createElement(
              "noscript",
              null,
              u.default.createElement(
                "img",
                Object.assign(
                  {},
                  O,
                  w({
                    src: e,
                    unoptimized: i,
                    layout: M,
                    width: L,
                    quality: D,
                    sizes: n,
                    loader: P,
                  }),
                  { decoding: "async", style: X, className: h }
                )
              )
            ),
          u.default.createElement(
            "img",
            Object.assign({}, O, G, {
              decoding: "async",
              className: h,
              ref: function (t) {
                H(t),
                  (function (t, e) {
                    if ("blur" === e && t) {
                      var n = function () {
                        t.src.startsWith("data:") ||
                          ("decode" in t ? t.decode() : Promise.resolve())
                            .catch(function () {})
                            .then(function () {
                              (t.style.filter = "none"),
                                (t.style.backgroundSize = "none"),
                                (t.style.backgroundImage = "none");
                            });
                      };
                      t.complete ? n() : (t.onload = n);
                    }
                  })(t, E);
              },
              style: X,
            })
          ),
          p
            ? u.default.createElement(
                c.default,
                null,
                u.default.createElement("link", {
                  key: "__nimg-" + G.src + G.srcSet + G.sizes,
                  rel: "preload",
                  as: "image",
                  href: G.srcSet ? void 0 : G.src,
                  imagesrcset: G.srcSet,
                  imagesizes: G.sizes,
                })
              )
            : null
        );
      };
      var a = i(n(7316)),
        s = i(n(7154)),
        u = i(n(7294)),
        c = i(n(2775)),
        l = n(8814),
        d = n(5655),
        f = n(7426);
      var p = new Map([
        [
          "imgix",
          function (t) {
            var e = t.root,
              n = t.src,
              r = t.width,
              o = t.quality,
              i = ["auto=format", "fit=max", "w=" + r],
              a = "";
            o && i.push("q=" + o);
            i.length && (a = "?" + i.join("&"));
            return "".concat(e).concat(k(n)).concat(a);
          },
        ],
        [
          "cloudinary",
          function (t) {
            var e = t.root,
              n = t.src,
              r = t.width,
              o = t.quality,
              i =
                ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(
                  ","
                ) + "/";
            return "".concat(e).concat(i).concat(k(n));
          },
        ],
        [
          "akamai",
          function (t) {
            var e = t.root,
              n = t.src,
              r = t.width;
            return "".concat(e).concat(k(n), "?imwidth=").concat(r);
          },
        ],
        [
          "default",
          function (t) {
            var e = t.root,
              n = t.src,
              r = t.width,
              o = t.quality;
            0;
            return ""
              .concat(e, "?url=")
              .concat(encodeURIComponent(n), "&w=")
              .concat(r, "&q=")
              .concat(o || 75);
          },
        ],
      ]);
      function m(t) {
        return void 0 !== t.default;
      }
      var v =
          {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
          } || d.imageConfigDefault,
        h = v.deviceSizes,
        g = v.imageSizes,
        y = v.loader,
        x = v.path,
        b = (v.domains, [].concat(o(h), o(g)));
      function w(t) {
        var e = t.src,
          n = t.unoptimized,
          r = t.layout,
          i = t.width,
          a = t.quality,
          s = t.sizes,
          u = t.loader;
        if (n) return { src: e, srcSet: void 0, sizes: void 0 };
        var c = (function (t, e, n) {
            if (n && ("fill" === e || "responsive" === e)) {
              for (var r, i = /(^|\s)(1?\d?\d)vw/g, a = []; (r = i.exec(n)); r)
                a.push(parseInt(r[2]));
              if (a.length) {
                var s = 0.01 * Math.min.apply(Math, a);
                return {
                  widths: b.filter(function (t) {
                    return t >= h[0] * s;
                  }),
                  kind: "w",
                };
              }
              return { widths: b, kind: "w" };
            }
            return "number" !== typeof t || "fill" === e || "responsive" === e
              ? { widths: h, kind: "w" }
              : {
                  widths: o(
                    new Set(
                      [t, 2 * t].map(function (t) {
                        return (
                          b.find(function (e) {
                            return e >= t;
                          }) || b[b.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(i, r, s),
          l = c.widths,
          d = c.kind,
          f = l.length - 1;
        return {
          sizes: s || "w" !== d ? s : "100vw",
          srcSet: l
            .map(function (t, n) {
              return ""
                .concat(u({ src: e, quality: a, width: t }), " ")
                .concat("w" === d ? t : n + 1)
                .concat(d);
            })
            .join(", "),
          src: u({ src: e, quality: a, width: l[f] }),
        };
      }
      function j(t) {
        return "number" === typeof t
          ? t
          : "string" === typeof t
          ? parseInt(t, 10)
          : void 0;
      }
      function S(t) {
        var e = p.get(y);
        if (e) return e((0, s.default)({ root: x }, t));
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(d.VALID_LOADERS.join(", "), ". Received: ")
            .concat(y)
        );
      }
      function k(t) {
        return "/" === t[0] ? t.slice(1) : t;
      }
      h.sort(function (t, e) {
        return t - e;
      }),
        b.sort(function (t, e) {
          return t - e;
        });
    },
    2167: function (t, e, n) {
      "use strict";
      var r = n(3038),
        o = n(862);
      e.default = void 0;
      var i = o(n(7294)),
        a = n(9414),
        s = n(4651),
        u = n(7426),
        c = {};
      function l(t, e, n, r) {
        if (t && (0, a.isLocalURL)(e)) {
          t.prefetch(e, n, r).catch(function (t) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : t && t.locale;
          c[e + "%" + n + (o ? "%" + o : "")] = !0;
        }
      }
      var d = function (t) {
        var e,
          n = !1 !== t.prefetch,
          o = (0, s.useRouter)(),
          d = i.default.useMemo(
            function () {
              var e = (0, a.resolveHref)(o, t.href, !0),
                n = r(e, 2),
                i = n[0],
                s = n[1];
              return {
                href: i,
                as: t.as ? (0, a.resolveHref)(o, t.as) : s || i,
              };
            },
            [o, t.href, t.as]
          ),
          f = d.href,
          p = d.as,
          m = t.children,
          v = t.replace,
          h = t.shallow,
          g = t.scroll,
          y = t.locale;
        "string" === typeof m && (m = i.default.createElement("a", null, m));
        var x = (e = i.Children.only(m)) && "object" === typeof e && e.ref,
          b = (0, u.useIntersection)({ rootMargin: "200px" }),
          w = r(b, 2),
          j = w[0],
          S = w[1],
          k = i.default.useCallback(
            function (t) {
              j(t),
                x &&
                  ("function" === typeof x
                    ? x(t)
                    : "object" === typeof x && (x.current = t));
            },
            [x, j]
          );
        (0, i.useEffect)(
          function () {
            var t = S && n && (0, a.isLocalURL)(f),
              e = "undefined" !== typeof y ? y : o && o.locale,
              r = c[f + "%" + p + (e ? "%" + e : "")];
            t && !r && l(o, f, p, { locale: e });
          },
          [p, f, S, y, n, o]
        );
        var A = {
          ref: k,
          onClick: function (t) {
            e.props &&
              "function" === typeof e.props.onClick &&
              e.props.onClick(t),
              t.defaultPrevented ||
                (function (t, e, n, r, o, i, s, u) {
                  ("A" !== t.currentTarget.nodeName ||
                    (!(function (t) {
                      var e = t.currentTarget.target;
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) &&
                      (0, a.isLocalURL)(n))) &&
                    (t.preventDefault(),
                    null == s && r.indexOf("#") >= 0 && (s = !1),
                    e[o ? "replace" : "push"](n, r, {
                      shallow: i,
                      locale: u,
                      scroll: s,
                    }));
                })(t, o, f, p, v, h, g, y);
          },
          onMouseEnter: function (t) {
            (0, a.isLocalURL)(f) &&
              (e.props &&
                "function" === typeof e.props.onMouseEnter &&
                e.props.onMouseEnter(t),
              l(o, f, p, { priority: !0 }));
          },
        };
        if (t.passHref || ("a" === e.type && !("href" in e.props))) {
          var P = "undefined" !== typeof y ? y : o && o.locale,
            T =
              o &&
              o.isLocaleDomain &&
              (0, a.getDomainLocale)(
                p,
                P,
                o && o.locales,
                o && o.domainLocales
              );
          A.href =
            T ||
            (0, a.addBasePath)((0, a.addLocale)(p, P, o && o.defaultLocale));
        }
        return i.default.cloneElement(e, A);
      };
      e.default = d;
    },
    7426: function (t, e, n) {
      "use strict";
      var r = n(3038);
      (e.__esModule = !0),
        (e.useIntersection = function (t) {
          var e = t.rootMargin,
            n = t.disabled || !a,
            u = (0, o.useRef)(),
            c = (0, o.useState)(!1),
            l = r(c, 2),
            d = l[0],
            f = l[1],
            p = (0, o.useCallback)(
              function (t) {
                u.current && (u.current(), (u.current = void 0)),
                  n ||
                    d ||
                    (t &&
                      t.tagName &&
                      (u.current = (function (t, e, n) {
                        var r = (function (t) {
                            var e = t.rootMargin || "",
                              n = s.get(e);
                            if (n) return n;
                            var r = new Map(),
                              o = new IntersectionObserver(function (t) {
                                t.forEach(function (t) {
                                  var e = r.get(t.target),
                                    n =
                                      t.isIntersecting ||
                                      t.intersectionRatio > 0;
                                  e && n && e(n);
                                });
                              }, t);
                            return (
                              s.set(
                                e,
                                (n = { id: e, observer: o, elements: r })
                              ),
                              n
                            );
                          })(n),
                          o = r.id,
                          i = r.observer,
                          a = r.elements;
                        return (
                          a.set(t, e),
                          i.observe(t),
                          function () {
                            a.delete(t),
                              i.unobserve(t),
                              0 === a.size && (i.disconnect(), s.delete(o));
                          }
                        );
                      })(
                        t,
                        function (t) {
                          return t && f(t);
                        },
                        { rootMargin: e }
                      )));
              },
              [n, e, d]
            );
          return (
            (0, o.useEffect)(
              function () {
                if (!a && !d) {
                  var t = (0, i.requestIdleCallback)(function () {
                    return f(!0);
                  });
                  return function () {
                    return (0, i.cancelIdleCallback)(t);
                  };
                }
              },
              [d]
            ),
            [p, d]
          );
        });
      var o = n(7294),
        i = n(3447),
        a = "undefined" !== typeof IntersectionObserver;
      var s = new Map();
    },
    3398: function (t, e, n) {
      "use strict";
      var r;
      (e.__esModule = !0), (e.AmpStateContext = void 0);
      var o = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext({});
      e.AmpStateContext = o;
    },
    6393: function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.isInAmpMode = a),
        (e.useAmp = function () {
          return a(o.default.useContext(i.AmpStateContext));
        });
      var r,
        o = (r = n(7294)) && r.__esModule ? r : { default: r },
        i = n(3398);
      function a() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.ampFirst,
          n = void 0 !== e && e,
          r = t.hybrid,
          o = void 0 !== r && r,
          i = t.hasQuery,
          a = void 0 !== i && i;
        return n || (o && a);
      }
    },
    2775: function (t, e, n) {
      "use strict";
      var r = n(9713);
      function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      (e.__esModule = !0), (e.defaultHead = f), (e.default = void 0);
      var i,
        a = (function (t) {
          if (t && t.__esModule) return t;
          if (null === t || ("object" !== typeof t && "function" !== typeof t))
            return { default: t };
          var e = d();
          if (e && e.has(t)) return e.get(t);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in t)
            if (Object.prototype.hasOwnProperty.call(t, o)) {
              var i = r ? Object.getOwnPropertyDescriptor(t, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = t[o]);
            }
          (n.default = t), e && e.set(t, n);
          return n;
        })(n(7294)),
        s = (i = n(3244)) && i.__esModule ? i : { default: i },
        u = n(3398),
        c = n(1165),
        l = n(6393);
      function d() {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap();
        return (
          (d = function () {
            return t;
          }),
          t
        );
      }
      function f() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = [a.default.createElement("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              a.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function p(t, e) {
        return "string" === typeof e || "number" === typeof e
          ? t
          : e.type === a.default.Fragment
          ? t.concat(
              a.default.Children.toArray(e.props.children).reduce(function (
                t,
                e
              ) {
                return "string" === typeof e || "number" === typeof e
                  ? t
                  : t.concat(e);
              },
              [])
            )
          : t.concat(e);
      }
      var m = ["name", "httpEquiv", "charSet", "itemProp"];
      function v(t, e) {
        return t
          .reduce(function (t, e) {
            var n = a.default.Children.toArray(e.props.children);
            return t.concat(n);
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(f(e.inAmpMode))
          .filter(
            (function () {
              var t = new Set(),
                e = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var i = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  var s = o.key.slice(o.key.indexOf("$") + 1);
                  t.has(s) ? (i = !1) : t.add(s);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    e.has(o.type) ? (i = !1) : e.add(o.type);
                    break;
                  case "meta":
                    for (var u = 0, c = m.length; u < c; u++) {
                      var l = m[u];
                      if (o.props.hasOwnProperty(l))
                        if ("charSet" === l) n.has(l) ? (i = !1) : n.add(l);
                        else {
                          var d = o.props[l],
                            f = r[l] || new Set();
                          ("name" === l && a) || !f.has(d)
                            ? (f.add(d), (r[l] = f))
                            : (i = !1);
                        }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map(function (t, n) {
            var i = t.key || n;
            if (
              !e.inAmpMode &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (e) {
                return t.props.href.startsWith(e);
              })
            ) {
              var s = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? o(Object(n), !0).forEach(function (e) {
                        r(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : o(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e)
                        );
                      });
                }
                return t;
              })({}, t.props || {});
              return (
                (s["data-href"] = s.href),
                (s.href = void 0),
                (s["data-optimized-fonts"] = !0),
                a.default.cloneElement(t, s)
              );
            }
            return a.default.cloneElement(t, { key: i });
          });
      }
      var h = function (t) {
        var e = t.children,
          n = (0, a.useContext)(u.AmpStateContext),
          r = (0, a.useContext)(c.HeadManagerContext);
        return a.default.createElement(
          s.default,
          {
            reduceComponentsToState: v,
            headManager: r,
            inAmpMode: (0, l.isInAmpMode)(n),
          },
          e
        );
      };
      e.default = h;
    },
    3244: function (t, e, n) {
      "use strict";
      var r = n(319),
        o = n(4575),
        i = n(3913),
        a = (n(1506), n(2205)),
        s = n(8585),
        u = n(9754);
      function c(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = u(t);
          if (e) {
            var o = u(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return s(this, n);
        };
      }
      (e.__esModule = !0), (e.default = void 0);
      var l = n(7294),
        d = (function (t) {
          a(n, t);
          var e = c(n);
          function n(t) {
            var i;
            return (
              o(this, n),
              ((i = e.call(this, t))._hasHeadManager = void 0),
              (i.emitChange = function () {
                i._hasHeadManager &&
                  i.props.headManager.updateHead(
                    i.props.reduceComponentsToState(
                      r(i.props.headManager.mountedInstances),
                      i.props
                    )
                  );
              }),
              (i._hasHeadManager =
                i.props.headManager && i.props.headManager.mountedInstances),
              i
            );
          }
          return (
            i(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(l.Component);
      e.default = d;
    },
    8814: function (t, e) {
      "use strict";
      (e.__esModule = !0),
        (e.toBase64 = function (t) {
          return window.btoa(t);
        });
    },
    8630: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return ga;
          },
        });
      var r = n(6156),
        o = n(5893),
        i = n(3024),
        a = (n(6390), n(7294)),
        s = n(1163),
        u = function (t, e) {
          return (u =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        };
      function c(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        u(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var l = function () {
        return (l =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      function d(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            e.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
              (n[r[o]] = t[r[o]]);
        }
        return n;
      }
      Object.create;
      function f(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (s) {
          o = { error: s };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function p(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return t.concat(r || e);
      }
      Object.create;
      var m = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        v = {
          measureLayout: m([
            "layout",
            "layoutId",
            "drag",
            "_layoutResetTransform",
          ]),
          animation: m([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
          ]),
          exit: m(["exit"]),
          drag: m(["drag", "dragControls"]),
          focus: m(["whileFocus"]),
          hover: m(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: m(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: m(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          layoutAnimation: m(["layout", "layoutId"]),
        };
      var h = (0, a.createContext)({ strict: !1 }),
        g = Object.keys(v),
        y = g.length;
      var x = (0, a.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
        }),
        b = (0, a.createContext)({});
      var w = (0, a.createContext)(null);
      function j(t) {
        var e = (0, a.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      function S() {
        var t = (0, a.useContext)(w);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          o = T();
        (0, a.useEffect)(function () {
          return r(o);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(o);
              },
            ]
          : [!0];
      }
      function k(t) {
        return null === t || t.isPresent;
      }
      var A = 0,
        P = function () {
          return A++;
        },
        T = function () {
          return j(P);
        },
        E = (0, a.createContext)(null),
        C = "undefined" !== typeof window,
        O = C ? a.useLayoutEffect : a.useEffect;
      function M(t, e, n, r) {
        var o = (0, a.useContext)(x),
          i = (0, a.useContext)(h),
          s = (0, a.useContext)(b).visualElement,
          u = (0, a.useContext)(w),
          c = (function (t) {
            var e = t.layoutId,
              n = (0, a.useContext)(E);
            return n && void 0 !== e ? n + "-" + e : e;
          })(n),
          d = (0, a.useRef)(void 0);
        r || (r = i.renderer),
          !d.current &&
            r &&
            (d.current = r(t, {
              visualState: e,
              parent: s,
              props: l(l({}, n), { layoutId: c }),
              presenceId: null === u || void 0 === u ? void 0 : u.id,
              blockInitialAnimation:
                !1 === (null === u || void 0 === u ? void 0 : u.initial),
            }));
        var f = d.current;
        return (
          O(function () {
            f &&
              (f.setProps(l(l(l({}, o), n), { layoutId: c })),
              (f.isPresent = k(u)),
              (f.isPresenceRoot =
                !s ||
                s.presenceId !== (null === u || void 0 === u ? void 0 : u.id)),
              f.syncRender());
          }),
          (0, a.useEffect)(function () {
            var t;
            f &&
              (null === (t = f.animationState) ||
                void 0 === t ||
                t.animateChanges());
          }),
          O(function () {
            return function () {
              return null === f || void 0 === f ? void 0 : f.notifyUnmount();
            };
          }, []),
          f
        );
      }
      function _(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function R(t) {
        return Array.isArray(t);
      }
      function L(t) {
        return "string" === typeof t || R(t);
      }
      function z(t, e, n, r, o) {
        var i;
        return (
          void 0 === r && (r = {}),
          void 0 === o && (o = {}),
          "string" === typeof e &&
            (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]),
          "function" === typeof e
            ? e(null !== n && void 0 !== n ? n : t.custom, r, o)
            : e
        );
      }
      function D(t, e, n) {
        var r = t.getProps();
        return z(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function N(t) {
        var e;
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          L(t.initial) ||
          L(t.animate) ||
          L(t.whileHover) ||
          L(t.whileDrag) ||
          L(t.whileTap) ||
          L(t.whileFocus) ||
          L(t.exit)
        );
      }
      function V(t) {
        return Boolean(N(t) || t.variants);
      }
      function I(t, e) {
        var n = (function (t, e) {
            if (N(t)) {
              var n = t.initial,
                r = t.animate;
              return {
                initial: !1 === n || L(n) ? n : void 0,
                animate: L(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, a.useContext)(b)),
          r = n.initial,
          o = n.animate;
        return (0, a.useMemo)(
          function () {
            return { initial: r, animate: o };
          },
          e ? [B(r), B(o)] : []
        );
      }
      function B(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      function F(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          r = t.useRender,
          o = t.useVisualState,
          i = t.Component;
        return (
          e &&
            (function (t) {
              for (var e in t) {
                var n = t[e];
                null !== n && (v[e].Component = n);
              }
            })(e),
          (0, a.forwardRef)(function (t, e) {
            var s = (0, a.useContext)(x).isStatic,
              u = null,
              c = I(t, s),
              d = o(t, s);
            return (
              !s &&
                C &&
                ((c.visualElement = M(i, d, t, n)),
                (u = (function (t, e, n) {
                  var r = [];
                  if (((0, a.useContext)(h), !e)) return null;
                  for (var o = 0; o < y; o++) {
                    var i = g[o],
                      s = v[i],
                      u = s.isEnabled,
                      c = s.Component;
                    u(t) &&
                      c &&
                      r.push(
                        a.createElement(
                          c,
                          l({ key: i }, t, { visualElement: e })
                        )
                      );
                  }
                  return r;
                })(t, c.visualElement))),
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  b.Provider,
                  { value: c },
                  r(
                    i,
                    t,
                    (function (t, e, n) {
                      return (0, a.useCallback)(
                        function (r) {
                          var o;
                          r &&
                            (null === (o = t.mount) ||
                              void 0 === o ||
                              o.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(r)
                                : _(n) && (n.current = r));
                        },
                        [e]
                      );
                    })(d, c.visualElement, e),
                    d,
                    s
                  )
                ),
                u
              )
            );
          })
        );
      }
      function U(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), F(t(e, n));
        }
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          },
        });
      }
      var H = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function W(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(H.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      var q = {};
      var X = ["", "X", "Y", "Z"],
        Y = ["transformPerspective", "x", "y", "z"];
      function Z(t, e) {
        return Y.indexOf(t) - Y.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return X.forEach(function (e) {
          return Y.push(t + e);
        });
      });
      var G = new Set(Y);
      function K(t) {
        return G.has(t);
      }
      var $ = new Set(["originX", "originY", "originZ"]);
      function J(t) {
        return $.has(t);
      }
      function Q(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          K(t) || J(t) || ((n || void 0 !== r) && (!!q[t] || "opacity" === t))
        );
      }
      var tt = function (t) {
          return null !== t && "object" === typeof t && t.getVelocity;
        },
        et = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function nt(t) {
        return t.startsWith("--");
      }
      var rt = function (t, e) {
        return e && "number" === typeof t ? e.transform(t) : t;
      };
      var ot = function () {
        return (ot =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      Object.create;
      Object.create;
      var it = function (t, e) {
          return function (n) {
            return Math.max(Math.min(n, e), t);
          };
        },
        at = function (t) {
          return t % 1 ? Number(t.toFixed(5)) : t;
        },
        st = /(-)?([\d]*\.?[\d])+/g,
        ut =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        ct =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function lt(t) {
        return "string" === typeof t;
      }
      var dt = function (t) {
          return {
            test: function (e) {
              return lt(e) && e.endsWith(t) && 1 === e.split(" ").length;
            },
            parse: parseFloat,
            transform: function (e) {
              return "" + e + t;
            },
          };
        },
        ft = dt("deg"),
        pt = dt("%"),
        mt = dt("px"),
        vt = dt("vh"),
        ht = dt("vw"),
        gt = ot(ot({}, pt), {
          parse: function (t) {
            return pt.parse(t) / 100;
          },
          transform: function (t) {
            return pt.transform(100 * t);
          },
        }),
        yt = {
          test: function (t) {
            return "number" === typeof t;
          },
          parse: parseFloat,
          transform: function (t) {
            return t;
          },
        },
        xt = ot(ot({}, yt), { transform: it(0, 1) }),
        bt = ot(ot({}, yt), { default: 1 }),
        wt = l(l({}, yt), { transform: Math.round }),
        jt = {
          borderWidth: mt,
          borderTopWidth: mt,
          borderRightWidth: mt,
          borderBottomWidth: mt,
          borderLeftWidth: mt,
          borderRadius: mt,
          radius: mt,
          borderTopLeftRadius: mt,
          borderTopRightRadius: mt,
          borderBottomRightRadius: mt,
          borderBottomLeftRadius: mt,
          width: mt,
          maxWidth: mt,
          height: mt,
          maxHeight: mt,
          size: mt,
          top: mt,
          right: mt,
          bottom: mt,
          left: mt,
          padding: mt,
          paddingTop: mt,
          paddingRight: mt,
          paddingBottom: mt,
          paddingLeft: mt,
          margin: mt,
          marginTop: mt,
          marginRight: mt,
          marginBottom: mt,
          marginLeft: mt,
          rotate: ft,
          rotateX: ft,
          rotateY: ft,
          rotateZ: ft,
          scale: bt,
          scaleX: bt,
          scaleY: bt,
          scaleZ: bt,
          skew: ft,
          skewX: ft,
          skewY: ft,
          distance: mt,
          translateX: mt,
          translateY: mt,
          translateZ: mt,
          x: mt,
          y: mt,
          z: mt,
          perspective: mt,
          transformPerspective: mt,
          opacity: xt,
          originX: gt,
          originY: gt,
          originZ: mt,
          zIndex: wt,
          fillOpacity: xt,
          strokeOpacity: xt,
          numOctaves: wt,
        };
      function St(t, e, n, r, o, i, a, s) {
        var u,
          c = t.style,
          l = t.vars,
          d = t.transform,
          f = t.transformKeys,
          p = t.transformOrigin;
        f.length = 0;
        var m = !1,
          v = !1,
          h = !0;
        for (var g in e) {
          var y = e[g];
          if (nt(g)) l[g] = y;
          else {
            var x = jt[g],
              b = rt(y, x);
            if (K(g)) {
              if (((m = !0), (d[g] = b), f.push(g), !h)) continue;
              y !== (null !== (u = x.default) && void 0 !== u ? u : 0) &&
                (h = !1);
            } else if (J(g)) (p[g] = b), (v = !0);
            else if (
              (null === n || void 0 === n ? void 0 : n.isHydrated) &&
              (null === r || void 0 === r ? void 0 : r.isHydrated) &&
              q[g]
            ) {
              var w = q[g].process(y, r, n),
                j = q[g].applyTo;
              if (j) for (var S = j.length, k = 0; k < S; k++) c[j[k]] = w;
              else c[g] = w;
            } else c[g] = b;
          }
        }
        r && n && a && s
          ? ((c.transform = a(r.deltaFinal, r.treeScale, m ? d : void 0)),
            i && (c.transform = i(d, c.transform)),
            (c.transformOrigin = s(r)))
          : (m &&
              (c.transform = (function (t, e, n, r) {
                var o = t.transform,
                  i = t.transformKeys,
                  a = e.enableHardwareAcceleration,
                  s = void 0 === a || a,
                  u = e.allowTransformNone,
                  c = void 0 === u || u,
                  l = "";
                i.sort(Z);
                for (var d = !1, f = i.length, p = 0; p < f; p++) {
                  var m = i[p];
                  (l += (et[m] || m) + "(" + o[m] + ") "),
                    "z" === m && (d = !0);
                }
                return (
                  !d && s ? (l += "translateZ(0)") : (l = l.trim()),
                  r ? (l = r(o, n ? "" : l)) : c && n && (l = "none"),
                  l
                );
              })(t, o, h, i)),
            v &&
              (c.transformOrigin = (function (t) {
                var e = t.originX,
                  n = void 0 === e ? "50%" : e,
                  r = t.originY,
                  o = void 0 === r ? "50%" : r,
                  i = t.originZ;
                return n + " " + o + " " + (void 0 === i ? 0 : i);
              })(p)));
      }
      var kt = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function At(t, e, n) {
        for (var r in e) tt(e[r]) || Q(r, n) || (t[r] = e[r]);
      }
      function Pt(t, e, n) {
        var r = {};
        return (
          At(r, t.style || {}, t),
          Object.assign(
            r,
            (function (t, e, n) {
              var r = t.transformTemplate;
              return (0, a.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  St(
                    t,
                    e,
                    void 0,
                    void 0,
                    { enableHardwareAcceleration: !n },
                    r
                  );
                  var o = t.style;
                  return l(l({}, t.vars), o);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (r = t.transformValues(r)),
          r
        );
      }
      function Tt(t, e, n) {
        var r = {},
          o = Pt(t, e, n);
        return (
          Boolean(t.drag) &&
            ((r.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
            (o.touchAction =
              !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x"))),
          (r.style = o),
          r
        );
      }
      var Et = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "_layoutResetTransform",
        "onLayoutAnimationComplete",
        "onViewportBoxUpdate",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
      ]);
      function Ct(t) {
        return Et.has(t);
      }
      var Ot = function (t) {
        return !Ct(t);
      };
      try {
        var Mt = n(8594).Z;
        Ot = function (t) {
          return t.startsWith("on") ? !Ct(t) : Mt(t);
        };
      } catch (ya) {}
      function _t(t, e, n) {
        return "string" === typeof t ? t : mt.transform(e + n * t);
      }
      var Rt = function (t, e) {
          return mt.transform(t * e);
        },
        Lt = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        zt = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function Dt(t, e, n, r, o, i, a, s) {
        var u = e.attrX,
          c = e.attrY,
          l = e.originX,
          f = e.originY,
          p = e.pathLength,
          m = e.pathSpacing,
          v = void 0 === m ? 1 : m,
          h = e.pathOffset,
          g = void 0 === h ? 0 : h;
        St(
          t,
          d(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r,
          o,
          i,
          a,
          s
        ),
          (t.attrs = t.style),
          (t.style = {});
        var y = t.attrs,
          x = t.style,
          b = t.dimensions,
          w = t.totalPathLength;
        y.transform && (b && (x.transform = y.transform), delete y.transform),
          b &&
            (void 0 !== l || void 0 !== f || x.transform) &&
            (x.transformOrigin = (function (t, e, n) {
              return _t(e, t.x, t.width) + " " + _t(n, t.y, t.height);
            })(b, void 0 !== l ? l : 0.5, void 0 !== f ? f : 0.5)),
          void 0 !== u && (y.x = u),
          void 0 !== c && (y.y = c),
          void 0 !== w &&
            void 0 !== p &&
            (function (t, e, n, r, o, i) {
              void 0 === r && (r = 1),
                void 0 === o && (o = 0),
                void 0 === i && (i = !0);
              var a = i ? Lt : zt;
              t[a.offset] = Rt(-o, e);
              var s = Rt(n, e),
                u = Rt(r, e);
              t[a.array] = s + " " + u;
            })(y, w, p, v, g, !1);
      }
      var Nt = function () {
        return l(
          l(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function Vt(t, e) {
        var n = (0, a.useMemo)(
          function () {
            var n = Nt();
            return (
              Dt(
                n,
                e,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              l(l({}, n.attrs), { style: l({}, n.style) })
            );
          },
          [e]
        );
        if (t.style) {
          var r = {};
          At(r, t.style, t), (n.style = l(l({}, r), n.style));
        }
        return n;
      }
      function It(t) {
        void 0 === t && (t = !1);
        return function (e, n, r, o, i) {
          var s = o.latestValues,
            u = (W(e) ? Vt : Tt)(n, s, i),
            c = (function (t, e, n) {
              var r = {};
              for (var o in t)
                (Ot(o) || (!0 === n && Ct(o)) || (!e && !Ct(o))) &&
                  (r[o] = t[o]);
              return r;
            })(n, "string" === typeof e, t),
            d = l(l(l({}, c), u), { ref: r });
          return (0, a.createElement)(e, d);
        };
      }
      var Bt = /([a-z])([A-Z])/g,
        Ft = function (t) {
          return t.replace(Bt, "$1-$2").toLowerCase();
        };
      function Ut(t, e) {
        var n = e.style,
          r = e.vars;
        for (var o in (Object.assign(t.style, n), r))
          t.style.setProperty(o, r[o]);
      }
      var Ht = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
      ]);
      function Wt(t, e) {
        for (var n in (Ut(t, e), e.attrs))
          t.setAttribute(Ht.has(n) ? n : Ft(n), e.attrs[n]);
      }
      function qt(t) {
        var e = t.style,
          n = {};
        for (var r in e) (tt(e[r]) || Q(r, t)) && (n[r] = e[r]);
        return n;
      }
      function Xt(t) {
        var e = qt(t);
        for (var n in t) {
          if (tt(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function Yt(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      var Zt = function (t) {
        return Array.isArray(t);
      };
      function Gt(t) {
        var e,
          n = tt(t) ? t.get() : t;
        return (
          (e = n),
          Boolean(e && "object" === typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        );
      }
      function Kt(t, e, n, r) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          s = { latestValues: Jt(e, n, r, o), renderState: i() };
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s);
            }),
          s
        );
      }
      var $t = function (t) {
        return function (e, n) {
          var r = (0, a.useContext)(b),
            o = (0, a.useContext)(w);
          return n
            ? Kt(t, e, r, o)
            : j(function () {
                return Kt(t, e, r, o);
              });
        };
      };
      function Jt(t, e, n, r) {
        var o = {},
          i = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          a = r(t);
        for (var s in a) o[s] = Gt(a[s]);
        var u = t.initial,
          c = t.animate,
          l = N(t),
          f = V(t);
        e &&
          f &&
          !l &&
          !1 !== t.inherit &&
          ((null !== u && void 0 !== u) || (u = e.initial),
          (null !== c && void 0 !== c) || (c = e.animate));
        var p = i || !1 === u ? c : u;
        p &&
          "boolean" !== typeof p &&
          !Yt(p) &&
          (Array.isArray(p) ? p : [p]).forEach(function (e) {
            var n = z(t, e);
            if (n) {
              var r = n.transitionEnd;
              n.transition;
              var i = d(n, ["transitionEnd", "transition"]);
              for (var a in i) o[a] = i[a];
              for (var a in r) o[a] = r[a];
            }
          });
        return o;
      }
      var Qt = {
        useVisualState: $t({
          scrapeMotionValuesFromProps: Xt,
          createRenderState: Nt,
          onMount: function (t, e, n) {
            var r = n.renderState,
              o = n.latestValues;
            try {
              r.dimensions =
                "function" === typeof e.getBBox
                  ? e.getBBox()
                  : e.getBoundingClientRect();
            } catch (i) {
              r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
            "path" === e.tagName && (r.totalPathLength = e.getTotalLength()),
              Dt(
                r,
                o,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              Wt(e, r);
          },
        }),
      };
      var te,
        ee = {
          useVisualState: $t({
            scrapeMotionValuesFromProps: qt,
            createRenderState: kt,
          }),
        };
      function ne(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r);
          }
        );
      }
      function re(t, e, n, r) {
        (0, a.useEffect)(
          function () {
            var o = t.current;
            if (n && o) return ne(o, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function oe(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function ie(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.Exit = "exit");
      })(te || (te = {}));
      var ae = { pageX: 0, pageY: 0 };
      function se(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || ae;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function ue(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function ce(t, e) {
        return (
          void 0 === e && (e = "page"), { point: ie(t) ? se(t, e) : ue(t, e) }
        );
      }
      var le = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, ce(e));
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        de = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        fe = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function pe(t) {
        return C && null === window.onpointerdown
          ? t
          : C && null === window.ontouchstart
          ? fe[t]
          : C && null === window.onmousedown
          ? de[t]
          : t;
      }
      function me(t, e, n, r) {
        return ne(t, pe(e), le(n, "pointerdown" === e), r);
      }
      function ve(t, e, n, r) {
        return re(t, pe(e), n && le(n, "pointerdown" === e), r);
      }
      function he(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var ge = he("dragHorizontal"),
        ye = he("dragVertical");
      function xe(t) {
        var e = !1;
        if ("y" === t) e = ye();
        else if ("x" === t) e = ge();
        else {
          var n = ge(),
            r = ye();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function be() {
        var t = xe(!0);
        return !t || (t(), !1);
      }
      function we(t, e, n) {
        return function (r, o) {
          var i;
          oe(r) &&
            !be() &&
            (null === n || void 0 === n || n(r, o),
            null === (i = t.animationState) ||
              void 0 === i ||
              i.setActive(te.Hover, e));
        };
      }
      var je = function (t, e) {
        return !!e && (t === e || je(t, e.parentElement));
      };
      function Se(t) {
        return (0, a.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var ke = function (t, e) {
          return function (n) {
            return e(t(n));
          };
        },
        Ae = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return t.reduce(ke);
        };
      var Pe = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        Te = {
          tap: Pe(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              i = t.visualElement,
              s = e || n || r || o,
              u = (0, a.useRef)(!1),
              c = (0, a.useRef)(null);
            function l() {
              var t;
              null === (t = c.current) || void 0 === t || t.call(c),
                (c.current = null);
            }
            function d() {
              var t;
              return (
                l(),
                (u.current = !1),
                null === (t = i.animationState) ||
                  void 0 === t ||
                  t.setActive(te.Tap, !1),
                !be()
              );
            }
            function f(t, n) {
              d() &&
                (je(i.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === r || void 0 === r || r(t, n));
            }
            function p(t, e) {
              d() && (null === r || void 0 === r || r(t, e));
            }
            ve(
              i,
              "pointerdown",
              s
                ? function (t, e) {
                    var r;
                    l(),
                      u.current ||
                        ((u.current = !0),
                        (c.current = Ae(
                          me(window, "pointerup", f),
                          me(window, "pointercancel", p)
                        )),
                        null === n || void 0 === n || n(t, e),
                        null === (r = i.animationState) ||
                          void 0 === r ||
                          r.setActive(te.Tap, !0));
                  }
                : void 0
            ),
              Se(l);
          }),
          focus: Pe(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            re(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(te.Focus, !0);
                  }
                : void 0
            ),
              re(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(te.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Pe(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              o = t.visualElement;
            ve(o, "pointerenter", e || r ? we(o, !0, e) : void 0),
              ve(o, "pointerleave", n || r ? we(o, !1, n) : void 0);
          }),
        };
      function Ee(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var Ce = function () {
        return (Ce =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      function Oe(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            e.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
              (n[r[o]] = t[r[o]]);
        }
        return n;
      }
      Object.create;
      Object.create;
      var Me = function (t, e, n) {
          return Math.min(Math.max(n, t), e);
        },
        _e = 0.001;
      function Re(t) {
        var e,
          n,
          r = t.duration,
          o = void 0 === r ? 800 : r,
          i = t.bounce,
          a = void 0 === i ? 0.25 : i,
          s = t.velocity,
          u = void 0 === s ? 0 : s,
          c = t.mass,
          l = void 0 === c ? 1 : c,
          d = 1 - a;
        (d = Me(0.05, 1, d)),
          (o = Me(0.01, 10, o / 1e3)),
          d < 1
            ? ((e = function (t) {
                var e = t * d,
                  n = e * o,
                  r = e - u,
                  i = Le(t, d),
                  a = Math.exp(-n);
                return _e - (r / i) * a;
              }),
              (n = function (t) {
                var n = t * d * o,
                  r = n * u + u,
                  i = Math.pow(d, 2) * Math.pow(t, 2) * o,
                  a = Math.exp(-n),
                  s = Le(Math.pow(t, 2), d);
                return ((-e(t) + _e > 0 ? -1 : 1) * ((r - i) * a)) / s;
              }))
            : ((e = function (t) {
                return Math.exp(-t * o) * ((t - u) * o + 1) - 0.001;
              }),
              (n = function (t) {
                return Math.exp(-t * o) * (o * o * (u - t));
              }));
        var f = (function (t, e, n) {
          for (var r = n, o = 1; o < 12; o++) r -= t(r) / e(r);
          return r;
        })(e, n, 5 / o);
        if (((o *= 1e3), isNaN(f)))
          return { stiffness: 100, damping: 10, duration: o };
        var p = Math.pow(f, 2) * l;
        return { stiffness: p, damping: 2 * d * Math.sqrt(l * p), duration: o };
      }
      function Le(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      var ze = ["duration", "bounce"],
        De = ["stiffness", "damping", "mass"];
      function Ne(t, e) {
        return e.some(function (e) {
          return void 0 !== t[e];
        });
      }
      function Ve(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          r = t.to,
          o = void 0 === r ? 1 : r,
          i = t.restSpeed,
          a = void 0 === i ? 2 : i,
          s = t.restDelta,
          u = Oe(t, ["from", "to", "restSpeed", "restDelta"]),
          c = { done: !1, value: n },
          l = (function (t) {
            var e = Ce(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!Ne(t, De) && Ne(t, ze)) {
              var n = Re(t);
              (e = Ce(Ce(Ce({}, e), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return e;
          })(u),
          d = l.stiffness,
          f = l.damping,
          p = l.mass,
          m = l.velocity,
          v = l.duration,
          h = l.isResolvedFromDuration,
          g = Ie,
          y = Ie;
        function x() {
          var t = m ? -m / 1e3 : 0,
            e = o - n,
            r = f / (2 * Math.sqrt(d * p)),
            i = Math.sqrt(d / p) / 1e3;
          if (
            ((null !== s && void 0 !== s) ||
              (s = Math.abs(o - n) <= 1 ? 0.01 : 0.4),
            r < 1)
          ) {
            var a = Le(i, r);
            (g = function (n) {
              var s = Math.exp(-r * i * n);
              return (
                o -
                s *
                  (((t + r * i * e) / a) * Math.sin(a * n) +
                    e * Math.cos(a * n))
              );
            }),
              (y = function (n) {
                var o = Math.exp(-r * i * n);
                return (
                  r *
                    i *
                    o *
                    ((Math.sin(a * n) * (t + r * i * e)) / a +
                      e * Math.cos(a * n)) -
                  o *
                    (Math.cos(a * n) * (t + r * i * e) -
                      a * e * Math.sin(a * n))
                );
              });
          } else if (1 === r)
            g = function (n) {
              return o - Math.exp(-i * n) * (e + (t + i * e) * n);
            };
          else {
            var u = i * Math.sqrt(r * r - 1);
            g = function (n) {
              var a = Math.exp(-r * i * n),
                s = Math.min(u * n, 300);
              return (
                o -
                (a * ((t + r * i * e) * Math.sinh(s) + u * e * Math.cosh(s))) /
                  u
              );
            };
          }
        }
        return (
          x(),
          {
            next: function (t) {
              var e = g(t);
              if (h) c.done = t >= v;
              else {
                var n = 1e3 * y(t),
                  r = Math.abs(n) <= a,
                  i = Math.abs(o - e) <= s;
                c.done = r && i;
              }
              return (c.value = c.done ? o : e), c;
            },
            flipTarget: function () {
              var t;
              (m = -m), (n = (t = [o, n])[0]), (o = t[1]), x();
            },
          }
        );
      }
      Ve.needsInterpolation = function (t, e) {
        return "string" === typeof t || "string" === typeof e;
      };
      var Ie = function (t) {
          return 0;
        },
        Be = function (t, e, n) {
          var r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        Fe = function (t, e, n) {
          return -n * t + n * e + t;
        },
        Ue = function (t, e) {
          return function (n) {
            return Boolean(
              (lt(n) && ct.test(n) && n.startsWith(t)) ||
                (e && Object.prototype.hasOwnProperty.call(n, e))
            );
          };
        },
        He = function (t, e, n) {
          return function (r) {
            var o;
            if (!lt(r)) return r;
            var i = r.match(st),
              a = i[0],
              s = i[1],
              u = i[2],
              c = i[3];
            return (
              ((o = {})[t] = parseFloat(a)),
              (o[e] = parseFloat(s)),
              (o[n] = parseFloat(u)),
              (o.alpha = void 0 !== c ? parseFloat(c) : 1),
              o
            );
          };
        },
        We = it(0, 255),
        qe = ot(ot({}, yt), {
          transform: function (t) {
            return Math.round(We(t));
          },
        }),
        Xe = {
          test: Ue("rgb", "red"),
          parse: He("red", "green", "blue"),
          transform: function (t) {
            var e = t.red,
              n = t.green,
              r = t.blue,
              o = t.alpha,
              i = void 0 === o ? 1 : o;
            return (
              "rgba(" +
              qe.transform(e) +
              ", " +
              qe.transform(n) +
              ", " +
              qe.transform(r) +
              ", " +
              at(xt.transform(i)) +
              ")"
            );
          },
        };
      var Ye = {
          test: Ue("#"),
          parse: function (t) {
            var e = "",
              n = "",
              r = "",
              o = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (o = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (o = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (o += o)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: o ? parseInt(o, 16) / 255 : 1,
              }
            );
          },
          transform: Xe.transform,
        },
        Ze = {
          test: Ue("hsl", "hue"),
          parse: He("hue", "saturation", "lightness"),
          transform: function (t) {
            var e = t.hue,
              n = t.saturation,
              r = t.lightness,
              o = t.alpha,
              i = void 0 === o ? 1 : o;
            return (
              "hsla(" +
              Math.round(e) +
              ", " +
              pt.transform(at(n)) +
              ", " +
              pt.transform(at(r)) +
              ", " +
              at(xt.transform(i)) +
              ")"
            );
          },
        },
        Ge = function (t, e, n) {
          var r = t * t,
            o = e * e;
          return Math.sqrt(Math.max(0, n * (o - r) + r));
        },
        Ke = [Ye, Xe, Ze],
        $e = function (t) {
          return Ke.find(function (e) {
            return e.test(t);
          });
        },
        Je = function (t) {
          return (
            "'" +
            t +
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        Qe = function (t, e) {
          var n = $e(t),
            r = $e(e);
          Je(t), Je(e), n.transform, r.transform;
          var o = n.parse(t),
            i = r.parse(e),
            a = Ce({}, o),
            s = n === Ze ? Fe : Ge;
          return function (t) {
            for (var e in a) "alpha" !== e && (a[e] = s(o[e], i[e], t));
            return (a.alpha = Fe(o.alpha, i.alpha, t)), n.transform(a);
          };
        },
        tn = {
          test: function (t) {
            return Xe.test(t) || Ye.test(t) || Ze.test(t);
          },
          parse: function (t) {
            return Xe.test(t)
              ? Xe.parse(t)
              : Ze.test(t)
              ? Ze.parse(t)
              : Ye.parse(t);
          },
          transform: function (t) {
            return lt(t)
              ? t
              : t.hasOwnProperty("red")
              ? Xe.transform(t)
              : Ze.transform(t);
          },
        },
        en = "${c}",
        nn = "${n}";
      function rn(t) {
        var e = [],
          n = 0,
          r = t.match(ut);
        r &&
          ((n = r.length),
          (t = t.replace(ut, en)),
          e.push.apply(e, r.map(tn.parse)));
        var o = t.match(st);
        return (
          o && ((t = t.replace(st, nn)), e.push.apply(e, o.map(yt.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function on(t) {
        return rn(t).values;
      }
      function an(t) {
        var e = rn(t),
          n = e.values,
          r = e.numColors,
          o = e.tokenised,
          i = n.length;
        return function (t) {
          for (var e = o, n = 0; n < i; n++)
            e = e.replace(
              n < r ? en : nn,
              n < r ? tn.transform(t[n]) : at(t[n])
            );
          return e;
        };
      }
      var sn = function (t) {
        return "number" === typeof t ? 0 : t;
      };
      var un = {
          test: function (t) {
            var e, n, r, o;
            return (
              isNaN(t) &&
              lt(t) &&
              (null !==
                (n =
                  null === (e = t.match(st)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (o =
                    null === (r = t.match(ut)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== o
                  ? o
                  : 0) >
                0
            );
          },
          parse: on,
          createTransformer: an,
          getAnimatableNone: function (t) {
            var e = on(t);
            return an(t)(e.map(sn));
          },
        },
        cn = function (t) {
          return "number" === typeof t;
        };
      function ln(t, e) {
        return cn(t)
          ? function (n) {
              return Fe(t, e, n);
            }
          : tn.test(t)
          ? Qe(t, e)
          : mn(t, e);
      }
      var dn = function (t, e) {
          var n = (function (t, e, n) {
              if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++)
                  (!r && o in e) ||
                    (r || (r = Array.prototype.slice.call(e, 0, o)),
                    (r[o] = e[o]));
              return t.concat(r || e);
            })([], t),
            r = n.length,
            o = t.map(function (t, n) {
              return ln(t, e[n]);
            });
          return function (t) {
            for (var e = 0; e < r; e++) n[e] = o[e](t);
            return n;
          };
        },
        fn = function (t, e) {
          var n = Ce(Ce({}, t), e),
            r = {};
          for (var o in n)
            void 0 !== t[o] && void 0 !== e[o] && (r[o] = ln(t[o], e[o]));
          return function (t) {
            for (var e in r) n[e] = r[e](t);
            return n;
          };
        };
      function pn(t) {
        for (
          var e = un.parse(t), n = e.length, r = 0, o = 0, i = 0, a = 0;
          a < n;
          a++
        )
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++;
        return { parsed: e, numNumbers: r, numRGB: o, numHSL: i };
      }
      var mn = function (t, e) {
          var n = un.createTransformer(e),
            r = pn(t),
            o = pn(e);
          return (
            r.numHSL === o.numHSL &&
              r.numRGB === o.numRGB &&
              (r.numNumbers, o.numNumbers),
            Ae(dn(r.parsed, o.parsed), n)
          );
        },
        vn = function (t, e) {
          return function (n) {
            return Fe(t, e, n);
          };
        };
      function hn(t, e, n) {
        for (
          var r,
            o = [],
            i =
              n ||
              ("number" === typeof (r = t[0])
                ? vn
                : "string" === typeof r
                ? tn.test(r)
                  ? Qe
                  : mn
                : Array.isArray(r)
                ? dn
                : "object" === typeof r
                ? fn
                : void 0),
            a = t.length - 1,
            s = 0;
          s < a;
          s++
        ) {
          var u = i(t[s], t[s + 1]);
          if (e) {
            var c = Array.isArray(e) ? e[s] : e;
            u = Ae(c, u);
          }
          o.push(u);
        }
        return o;
      }
      function gn(t, e, n) {
        var r = void 0 === n ? {} : n,
          o = r.clamp,
          i = void 0 === o || o,
          a = r.ease,
          s = r.mixer,
          u = t.length;
        e.length,
          !a || !Array.isArray(a) || a.length,
          t[0] > t[u - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        var c = hn(e, a, s),
          l =
            2 === u
              ? (function (t, e) {
                  var n = t[0],
                    r = t[1],
                    o = e[0];
                  return function (t) {
                    return o(Be(n, r, t));
                  };
                })(t, c)
              : (function (t, e) {
                  var n = t.length,
                    r = n - 1;
                  return function (o) {
                    var i = 0,
                      a = !1;
                    if (
                      (o <= t[0]
                        ? (a = !0)
                        : o >= t[r] && ((i = r - 1), (a = !0)),
                      !a)
                    ) {
                      for (var s = 1; s < n && !(t[s] > o || s === r); s++);
                      i = s - 1;
                    }
                    var u = Be(t[i], t[i + 1], o);
                    return e[i](u);
                  };
                })(t, c);
        return i
          ? function (e) {
              return l(Me(t[0], t[u - 1], e));
            }
          : l;
      }
      var yn,
        xn = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        bn = function (t) {
          return function (e) {
            return e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
          };
        },
        wn = function (t) {
          return function (e) {
            return e * e * ((t + 1) * e - t);
          };
        },
        jn = function (t) {
          return t;
        },
        Sn =
          ((yn = 2),
          function (t) {
            return Math.pow(t, yn);
          }),
        kn = xn(Sn),
        An = bn(Sn),
        Pn = function (t) {
          return 1 - Math.sin(Math.acos(t));
        },
        Tn = xn(Pn),
        En = bn(Tn),
        Cn = wn(1.525),
        On = xn(Cn),
        Mn = bn(Cn),
        _n = (function (t) {
          var e = wn(t);
          return function (t) {
            return (t *= 2) < 1
              ? 0.5 * e(t)
              : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
          };
        })(1.525),
        Rn = function (t) {
          if (1 === t || 0 === t) return t;
          var e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        Ln = xn(Rn);
      function zn(t, e) {
        return t
          .map(function () {
            return e || An;
          })
          .splice(0, t.length - 1);
      }
      function Dn(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          r = t.to,
          o = void 0 === r ? 1 : r,
          i = t.ease,
          a = t.offset,
          s = t.duration,
          u = void 0 === s ? 300 : s,
          c = { done: !1, value: n },
          l = Array.isArray(o) ? o : [n, o],
          d = (function (t, e) {
            return t.map(function (t) {
              return t * e;
            });
          })(
            a && a.length === l.length
              ? a
              : (function (t) {
                  var e = t.length;
                  return t.map(function (t, n) {
                    return 0 !== n ? n / (e - 1) : 0;
                  });
                })(l),
            u
          );
        function f() {
          return gn(d, l, { ease: Array.isArray(i) ? i : zn(l, i) });
        }
        var p = f();
        return {
          next: function (t) {
            return (c.value = p(t)), (c.done = t >= u), c;
          },
          flipTarget: function () {
            l.reverse(), (p = f());
          },
        };
      }
      var Nn = {
        keyframes: Dn,
        spring: Ve,
        decay: function (t) {
          var e = t.velocity,
            n = void 0 === e ? 0 : e,
            r = t.from,
            o = void 0 === r ? 0 : r,
            i = t.power,
            a = void 0 === i ? 0.8 : i,
            s = t.timeConstant,
            u = void 0 === s ? 350 : s,
            c = t.restDelta,
            l = void 0 === c ? 0.5 : c,
            d = t.modifyTarget,
            f = { done: !1, value: o },
            p = a * n,
            m = o + p,
            v = void 0 === d ? m : d(m);
          return (
            v !== m && (p = v - o),
            {
              next: function (t) {
                var e = -p * Math.exp(-t / u);
                return (
                  (f.done = !(e > l || e < -l)),
                  (f.value = f.done ? v : v + e),
                  f
                );
              },
              flipTarget: function () {},
            }
          );
        },
      };
      var Vn = (1 / 60) * 1e3,
        In =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        Bn =
          "undefined" !== typeof window
            ? function (t) {
                return window.requestAnimationFrame(t);
              }
            : function (t) {
                return setTimeout(function () {
                  return t(In());
                }, Vn);
              };
      var Fn = !0,
        Un = !1,
        Hn = !1,
        Wn = { delta: 0, timestamp: 0 },
        qn = ["read", "update", "preRender", "render", "postRender"],
        Xn = qn.reduce(function (t, e) {
          return (
            (t[e] = (function (t) {
              var e = [],
                n = [],
                r = 0,
                o = !1,
                i = new WeakSet(),
                a = {
                  schedule: function (t, a, s) {
                    void 0 === a && (a = !1), void 0 === s && (s = !1);
                    var u = s && o,
                      c = u ? e : n;
                    return (
                      a && i.add(t),
                      -1 === c.indexOf(t) &&
                        (c.push(t), u && o && (r = e.length)),
                      t
                    );
                  },
                  cancel: function (t) {
                    var e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), i.delete(t);
                  },
                  process: function (s) {
                    var u;
                    if (
                      ((o = !0),
                      (e = (u = [n, e])[0]),
                      ((n = u[1]).length = 0),
                      (r = e.length))
                    )
                      for (var c = 0; c < r; c++) {
                        var l = e[c];
                        l(s), i.has(l) && (a.schedule(l), t());
                      }
                    o = !1;
                  },
                };
              return a;
            })(function () {
              return (Un = !0);
            })),
            t
          );
        }, {}),
        Yn = qn.reduce(function (t, e) {
          var n = Xn[e];
          return (
            (t[e] = function (t, e, r) {
              return (
                void 0 === e && (e = !1),
                void 0 === r && (r = !1),
                Un || Jn(),
                n.schedule(t, e, r)
              );
            }),
            t
          );
        }, {}),
        Zn = qn.reduce(function (t, e) {
          return (t[e] = Xn[e].cancel), t;
        }, {}),
        Gn = qn.reduce(function (t, e) {
          return (
            (t[e] = function () {
              return Xn[e].process(Wn);
            }),
            t
          );
        }, {}),
        Kn = function (t) {
          return Xn[t].process(Wn);
        },
        $n = function (t) {
          (Un = !1),
            (Wn.delta = Fn ? Vn : Math.max(Math.min(t - Wn.timestamp, 40), 1)),
            (Wn.timestamp = t),
            (Hn = !0),
            qn.forEach(Kn),
            (Hn = !1),
            Un && ((Fn = !1), Bn($n));
        },
        Jn = function () {
          (Un = !0), (Fn = !0), Hn || Bn($n);
        },
        Qn = function () {
          return Wn;
        },
        tr = Yn;
      function er(t, e, n) {
        return void 0 === n && (n = 0), t - e - n;
      }
      var nr = function (t) {
        var e = function (e) {
          var n = e.delta;
          return t(n);
        };
        return {
          start: function () {
            return tr.update(e, !0);
          },
          stop: function () {
            return Zn.update(e);
          },
        };
      };
      function rr(t) {
        var e,
          n,
          r,
          o,
          i,
          a = t.from,
          s = t.autoplay,
          u = void 0 === s || s,
          c = t.driver,
          l = void 0 === c ? nr : c,
          d = t.elapsed,
          f = void 0 === d ? 0 : d,
          p = t.repeat,
          m = void 0 === p ? 0 : p,
          v = t.repeatType,
          h = void 0 === v ? "loop" : v,
          g = t.repeatDelay,
          y = void 0 === g ? 0 : g,
          x = t.onPlay,
          b = t.onStop,
          w = t.onComplete,
          j = t.onRepeat,
          S = t.onUpdate,
          k = Oe(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]),
          A = k.to,
          P = 0,
          T = k.duration,
          E = !1,
          C = !0,
          O = (function (t) {
            if (Array.isArray(t.to)) return Dn;
            if (Nn[t.type]) return Nn[t.type];
            var e = new Set(Object.keys(t));
            return e.has("ease") ||
              (e.has("duration") && !e.has("dampingRatio"))
              ? Dn
              : e.has("dampingRatio") ||
                e.has("stiffness") ||
                e.has("mass") ||
                e.has("damping") ||
                e.has("restSpeed") ||
                e.has("restDelta")
              ? Ve
              : Dn;
          })(k);
        (null === (n = (e = O).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, a, A)) &&
          ((i = gn([0, 100], [a, A], { clamp: !1 })), (a = 0), (A = 100));
        var M = O(Ce(Ce({}, k), { from: a, to: A }));
        function _() {
          P++,
            "reverse" === h
              ? (f = (function (t, e, n, r) {
                  return (
                    void 0 === n && (n = 0),
                    void 0 === r && (r = !0),
                    r ? er(e + -t, e, n) : e - (t - e) + n
                  );
                })(f, T, y, (C = P % 2 === 0)))
              : ((f = er(f, T, y)), "mirror" === h && M.flipTarget()),
            (E = !1),
            j && j();
        }
        function R(t) {
          if ((C || (t = -t), (f += t), !E)) {
            var e = M.next(Math.max(0, f));
            (o = e.value), i && (o = i(o)), (E = C ? e.done : f <= 0);
          }
          null === S || void 0 === S || S(o),
            E &&
              (0 === P && ((null !== T && void 0 !== T) || (T = f)),
              P < m
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(f, T, y, C) && _()
                : (r.stop(), w && w()));
        }
        return (
          u && (null === x || void 0 === x || x(), (r = l(R)).start()),
          {
            stop: function () {
              null === b || void 0 === b || b(), r.stop();
            },
          }
        );
      }
      function or(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      var ir = function (t) {
          return 1e3 * t;
        },
        ar = function (t, e) {
          return 1 - 3 * e + 3 * t;
        },
        sr = function (t, e) {
          return 3 * e - 6 * t;
        },
        ur = function (t) {
          return 3 * t;
        },
        cr = function (t, e, n) {
          return ((ar(e, n) * t + sr(e, n)) * t + ur(e)) * t;
        },
        lr = function (t, e, n) {
          return 3 * ar(e, n) * t * t + 2 * sr(e, n) * t + ur(e);
        };
      var dr = 0.1;
      function fr(t, e, n, r) {
        if (t === e && n === r) return jn;
        for (var o = new Float32Array(11), i = 0; i < 11; ++i)
          o[i] = cr(i * dr, t, n);
        function a(e) {
          for (var r = 0, i = 1; 10 !== i && o[i] <= e; ++i) r += dr;
          --i;
          var a = r + ((e - o[i]) / (o[i + 1] - o[i])) * dr,
            s = lr(a, t, n);
          return s >= 0.001
            ? (function (t, e, n, r) {
                for (var o = 0; o < 8; ++o) {
                  var i = lr(e, n, r);
                  if (0 === i) return e;
                  e -= (cr(e, n, r) - t) / i;
                }
                return e;
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, r, o) {
                var i,
                  a,
                  s = 0;
                do {
                  (i = cr((a = e + (n - e) / 2), r, o) - t) > 0
                    ? (n = a)
                    : (e = a);
                } while (Math.abs(i) > 1e-7 && ++s < 10);
                return a;
              })(e, r, r + dr, t, n);
        }
        return function (t) {
          return 0 === t || 1 === t ? t : cr(a(t), e, r);
        };
      }
      var pr = {
          linear: jn,
          easeIn: Sn,
          easeInOut: An,
          easeOut: kn,
          circIn: Pn,
          circInOut: En,
          circOut: Tn,
          backIn: Cn,
          backInOut: Mn,
          backOut: On,
          anticipate: _n,
          bounceIn: Ln,
          bounceInOut: function (t) {
            return t < 0.5
              ? 0.5 * (1 - Rn(1 - 2 * t))
              : 0.5 * Rn(2 * t - 1) + 0.5;
          },
          bounceOut: Rn,
        },
        mr = function (t) {
          if (Array.isArray(t)) {
            t.length;
            var e = f(t, 4);
            return fr(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t ? pr[t] : t;
        },
        vr = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !un.test(e) || e.startsWith("url(")))
          );
        },
        hr = function () {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10,
          };
        },
        gr = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restDelta: 0.01,
            restSpeed: 10,
          };
        },
        yr = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        xr = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        br = {
          x: hr,
          y: hr,
          z: hr,
          rotate: hr,
          rotateX: hr,
          rotateY: hr,
          rotateZ: hr,
          scaleX: gr,
          scaleY: gr,
          scale: gr,
          opacity: yr,
          backgroundColor: yr,
          color: yr,
          default: gr,
        },
        wr = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function jr(t) {
        var e = t.slice(0, -1).split("("),
          n = e[0],
          r = e[1];
        if ("drop-shadow" === n) return t;
        var o = (r.match(st) || [])[0];
        if (!o) return t;
        var i = r.replace(o, ""),
          a = wr.has(n) ? 1 : 0;
        return o !== r && (a *= 100), n + "(" + a + i + ")";
      }
      var Sr = /([a-z-]*)\(.*?\)/g,
        kr = ot(ot({}, un), {
          getAnimatableNone: function (t) {
            var e = t.match(Sr);
            return e ? e.map(jr).join(" ") : t;
          },
        }),
        Ar = l(l({}, jt), {
          color: tn,
          backgroundColor: tn,
          outlineColor: tn,
          fill: tn,
          stroke: tn,
          borderColor: tn,
          borderTopColor: tn,
          borderRightColor: tn,
          borderBottomColor: tn,
          borderLeftColor: tn,
          filter: kr,
          WebkitFilter: kr,
        }),
        Pr = function (t) {
          return Ar[t];
        };
      function Tr(t, e) {
        var n,
          r = Pr(t);
        return (
          r !== kr && (r = un),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      function Er(t) {
        var e = t.ease,
          n = t.times,
          r = t.yoyo,
          o = t.flip,
          i = t.loop,
          a = d(t, ["ease", "times", "yoyo", "flip", "loop"]),
          s = l({}, a);
        return (
          n && (s.offset = n),
          a.duration && (s.duration = ir(a.duration)),
          a.repeatDelay && (s.repeatDelay = ir(a.repeatDelay)),
          e &&
            (s.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map(mr)
              : mr(e)),
          "tween" === a.type && (s.type = "keyframes"),
          (r || i || o) &&
            (!0,
            r
              ? (s.repeatType = "reverse")
              : i
              ? (s.repeatType = "loop")
              : o && (s.repeatType = "mirror"),
            (s.repeat = i || r || o || a.repeat)),
          "spring" !== a.type && (s.type = "keyframes"),
          s
        );
      }
      function Cr(t, e, n) {
        var r;
        return (
          Array.isArray(e.to) &&
            ((null !== (r = t.duration) && void 0 !== r) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = p([], f(t.to))), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = d(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = l(
              l({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = Zt(e) ? xr : br[t] || br.default), l({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          l(l({}, e), Er(t))
        );
      }
      function Or(t, e, n, r, o) {
        var i,
          a = Rr(r, t),
          s = null !== (i = a.from) && void 0 !== i ? i : e.get(),
          u = vr(t, n);
        "none" === s && u && "string" === typeof n
          ? (s = Tr(t, n))
          : Mr(s) && "string" === typeof n
          ? (s = _r(n))
          : !Array.isArray(n) && Mr(n) && "string" === typeof s && (n = _r(s));
        var c = vr(t, s);
        return c && u && !1 !== a.type
          ? function () {
              var r = {
                from: s,
                to: n,
                velocity: e.getVelocity(),
                onComplete: o,
                onUpdate: function (t) {
                  return e.set(t);
                },
              };
              return "inertia" === a.type || "decay" === a.type
                ? (function (t) {
                    var e,
                      n = t.from,
                      r = void 0 === n ? 0 : n,
                      o = t.velocity,
                      i = void 0 === o ? 0 : o,
                      a = t.min,
                      s = t.max,
                      u = t.power,
                      c = void 0 === u ? 0.8 : u,
                      l = t.timeConstant,
                      d = void 0 === l ? 750 : l,
                      f = t.bounceStiffness,
                      p = void 0 === f ? 500 : f,
                      m = t.bounceDamping,
                      v = void 0 === m ? 10 : m,
                      h = t.restDelta,
                      g = void 0 === h ? 1 : h,
                      y = t.modifyTarget,
                      x = t.driver,
                      b = t.onUpdate,
                      w = t.onComplete;
                    function j(t) {
                      return (void 0 !== a && t < a) || (void 0 !== s && t > s);
                    }
                    function S(t) {
                      return void 0 === a
                        ? s
                        : void 0 === s || Math.abs(a - t) < Math.abs(s - t)
                        ? a
                        : s;
                    }
                    function k(t) {
                      null === e || void 0 === e || e.stop(),
                        (e = rr(
                          Ce(Ce({}, t), {
                            driver: x,
                            onUpdate: function (e) {
                              var n;
                              null === b || void 0 === b || b(e),
                                null === (n = t.onUpdate) ||
                                  void 0 === n ||
                                  n.call(t, e);
                            },
                            onComplete: w,
                          })
                        ));
                    }
                    function A(t) {
                      k(
                        Ce(
                          {
                            type: "spring",
                            stiffness: p,
                            damping: v,
                            restDelta: g,
                          },
                          t
                        )
                      );
                    }
                    if (j(r)) A({ from: r, velocity: i, to: S(r) });
                    else {
                      var P = c * i + r;
                      "undefined" !== typeof y && (P = y(P));
                      var T,
                        E,
                        C = S(P),
                        O = C === a ? -1 : 1;
                      k({
                        type: "decay",
                        from: r,
                        velocity: i,
                        timeConstant: d,
                        power: c,
                        restDelta: g,
                        modifyTarget: y,
                        onUpdate: j(P)
                          ? function (t) {
                              (T = E),
                                (E = t),
                                (i = or(t - T, Qn().delta)),
                                ((1 === O && t > C) || (-1 === O && t < C)) &&
                                  A({ from: t, to: C, velocity: i });
                            }
                          : void 0,
                      });
                    }
                    return {
                      stop: function () {
                        return null === e || void 0 === e ? void 0 : e.stop();
                      },
                    };
                  })(l(l({}, r), a))
                : rr(
                    l(l({}, Cr(a, r, t)), {
                      onUpdate: function (t) {
                        var e;
                        r.onUpdate(t),
                          null === (e = a.onUpdate) ||
                            void 0 === e ||
                            e.call(a, t);
                      },
                      onComplete: function () {
                        var t;
                        r.onComplete(),
                          null === (t = a.onComplete) ||
                            void 0 === t ||
                            t.call(a);
                      },
                    })
                  );
            }
          : function () {
              var t;
              return (
                e.set(n),
                o(),
                null ===
                  (t = null === a || void 0 === a ? void 0 : a.onComplete) ||
                  void 0 === t ||
                  t.call(a),
                { stop: function () {} }
              );
            };
      }
      function Mr(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function _r(t) {
        return "number" === typeof t ? 0 : Tr("", t);
      }
      function Rr(t, e) {
        return t[e] || t.default || t;
      }
      function Lr(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          e.start(function (o) {
            var i,
              a,
              s = Or(t, e, n, r, o),
              u = (function (t, e) {
                var n;
                return null !== (n = (Rr(t, e) || {}).delay) && void 0 !== n
                  ? n
                  : 0;
              })(r, t),
              c = function () {
                return (a = s());
              };
            return (
              u ? (i = setTimeout(c, ir(u))) : c(),
              function () {
                clearTimeout(i), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
      function zr(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function Dr(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var Nr = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                zr(this.subscriptions, t),
                function () {
                  return Dr(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var o = 0; o < r; o++) {
                    var i = this.subscriptions[o];
                    i && i(t, e, n);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        Vr = (function () {
          function t(t) {
            var e,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new Nr()),
              (this.velocityUpdateSubscribers = new Nr()),
              (this.renderSubscribers = new Nr()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var r = Qn(),
                  o = r.delta,
                  i = r.timestamp;
                n.lastUpdated !== i &&
                  ((n.timeDelta = o),
                  (n.lastUpdated = i),
                  tr.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return tr.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? or(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function Ir(t) {
        return new Vr(t);
      }
      var Br = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        Fr = [
          yt,
          mt,
          pt,
          ft,
          ht,
          vt,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        Ur = function (t) {
          return Fr.find(Br(t));
        },
        Hr = p(p([], f(Fr)), [tn, un]),
        Wr = function (t) {
          return Hr.find(Br(t));
        };
      function qr(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ir(n));
      }
      function Xr(t, e) {
        var n = D(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          o = r.transitionEnd,
          i = void 0 === o ? {} : o;
        r.transition;
        var a,
          s = d(r, ["transitionEnd", "transition"]);
        for (var u in (s = l(l({}, s), i))) {
          qr(t, u, ((a = s[u]), Zt(a) ? a[a.length - 1] || 0 : a));
        }
      }
      function Yr(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function Zr(t, e, n) {
        var r;
        void 0 === n && (n = {});
        var o = D(t, e, n.custom),
          i = (o || {}).transition,
          a = void 0 === i ? t.getDefaultTransition() || {} : i;
        n.transitionOverride && (a = n.transitionOverride);
        var s = o
            ? function () {
                return Gr(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          u = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var o = a.delayChildren,
                  i = void 0 === o ? 0 : o,
                  s = a.staggerChildren,
                  u = a.staggerDirection;
                return (function (t, e, n, r, o, i) {
                  void 0 === n && (n = 0);
                  void 0 === r && (r = 0);
                  void 0 === o && (o = 1);
                  var a = [],
                    s = (t.variantChildren.size - 1) * r,
                    u =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * r;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), s - t * r;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(Kr)
                      .forEach(function (t, r) {
                        a.push(
                          Zr(t, e, l(l({}, i), { delay: n + u(r) })).then(
                            function () {
                              return t.notifyAnimationComplete(e);
                            }
                          )
                        );
                      }),
                    Promise.all(a)
                  );
                })(t, e, i + r, s, u, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = a.when;
        if (c) {
          var d = f("beforeChildren" === c ? [s, u] : [u, s], 2),
            p = d[0],
            m = d[1];
          return p().then(m);
        }
        return Promise.all([s(), u(n.delay)]);
      }
      function Gr(t, e, n) {
        var r,
          o = void 0 === n ? {} : n,
          i = o.delay,
          a = void 0 === i ? 0 : i,
          s = o.transitionOverride,
          u = o.type,
          c = t.makeTargetAnimatable(e),
          f = c.transition,
          p = void 0 === f ? t.getDefaultTransition() : f,
          m = c.transitionEnd,
          v = d(c, ["transition", "transitionEnd"]);
        s && (p = s);
        var h = [],
          g =
            u &&
            (null === (r = t.animationState) || void 0 === r
              ? void 0
              : r.getState()[u]);
        for (var y in v) {
          var x = t.getValue(y),
            b = v[y];
          if (!(!x || void 0 === b || (g && $r(g, y)))) {
            var w = Lr(y, x, b, l({ delay: a }, p));
            h.push(w);
          }
        }
        return Promise.all(h).then(function () {
          m && Xr(t, m);
        });
      }
      function Kr(t, e) {
        return t.sortNodePosition(e);
      }
      function $r(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          o = n.hasOwnProperty(e) && !0 !== r[e];
        return (r[e] = !1), o;
      }
      var Jr = [te.Animate, te.Hover, te.Tap, te.Drag, te.Focus, te.Exit],
        Qr = p([], f(Jr)).reverse(),
        to = Jr.length;
      function eo(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(),
                  Array.isArray(e))
                ) {
                  var o = e.map(function (e) {
                    return Zr(t, e, n);
                  });
                  r = Promise.all(o);
                } else if ("string" === typeof e) r = Zr(t, e, n);
                else {
                  var i = "function" === typeof e ? D(t, e, n.custom) : e;
                  r = Gr(t, i, n);
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function no(t) {
        var e = eo(t),
          n = (function () {
            var t;
            return (
              ((t = {})[te.Animate] = ro(!0)),
              (t[te.Hover] = ro()),
              (t[te.Tap] = ro()),
              (t[te.Drag] = ro()),
              (t[te.Focus] = ro()),
              (t[te.Exit] = ro()),
              t
            );
          })(),
          r = {},
          o = !0,
          i = function (e, n) {
            var r = D(t, n);
            if (r) {
              r.transition;
              var o = r.transitionEnd,
                i = d(r, ["transition", "transitionEnd"]);
              e = l(l(l({}, e), i), o);
            }
            return e;
          };
        function a(a, s) {
          for (
            var u,
              c = t.getProps(),
              d = t.getVariantContext(!0) || {},
              m = [],
              v = new Set(),
              h = {},
              g = 1 / 0,
              y = function (e) {
                var r = Qr[e],
                  y = n[r],
                  x = null !== (u = c[r]) && void 0 !== u ? u : d[r],
                  b = L(x),
                  w = r === s ? y.isActive : null;
                !1 === w && (g = e);
                var j = x === d[r] && x !== c[r] && b;
                if (
                  (j && o && t.manuallyAnimateOnMount && (j = !1),
                  (y.protectedKeys = l({}, h)),
                  (!y.isActive && null === w) ||
                    (!x && !y.prevProp) ||
                    Yt(x) ||
                    "boolean" === typeof x)
                )
                  return "continue";
                var S =
                    (function (t, e) {
                      if ("string" === typeof e) return e !== t;
                      if (R(e)) return !Ee(e, t);
                      return !1;
                    })(y.prevProp, x) ||
                    (r === s && y.isActive && !j && b) ||
                    (e > g && b),
                  k = Array.isArray(x) ? x : [x],
                  A = k.reduce(i, {});
                !1 === w && (A = {});
                var P = y.prevResolvedValues,
                  T = void 0 === P ? {} : P,
                  E = l(l({}, T), A),
                  C = function (t) {
                    (S = !0), v.delete(t), (y.needsAnimating[t] = !0);
                  };
                for (var O in E) {
                  var M = A[O],
                    _ = T[O];
                  h.hasOwnProperty(O) ||
                    (M !== _
                      ? Zt(M) && Zt(_)
                        ? Ee(M, _)
                          ? (y.protectedKeys[O] = !0)
                          : C(O)
                        : void 0 !== M
                        ? C(O)
                        : v.add(O)
                      : void 0 !== M && v.has(O)
                      ? C(O)
                      : (y.protectedKeys[O] = !0));
                }
                (y.prevProp = x),
                  (y.prevResolvedValues = A),
                  y.isActive && (h = l(l({}, h), A)),
                  o && t.blockInitialAnimation && (S = !1),
                  S &&
                    !j &&
                    m.push.apply(
                      m,
                      p(
                        [],
                        f(
                          k.map(function (t) {
                            return { animation: t, options: l({ type: r }, a) };
                          })
                        )
                      )
                    );
              },
              x = 0;
            x < to;
            x++
          )
            y(x);
          if (((r = l({}, h)), v.size)) {
            var b = {};
            v.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (b[e] = n);
            }),
              m.push({ animation: b });
          }
          var w = Boolean(m.length);
          return (
            o && !1 === c.initial && !t.manuallyAnimateOnMount && (w = !1),
            (o = !1),
            w ? e(m) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (t) {
            return void 0 !== r[t];
          },
          animateChanges: a,
          setActive: function (e, r, o) {
            var i;
            return n[e].isActive === r
              ? Promise.resolve()
              : (null === (i = t.variantChildren) ||
                  void 0 === i ||
                  i.forEach(function (t) {
                    var n;
                    return null === (n = t.animationState) || void 0 === n
                      ? void 0
                      : n.setActive(e, r);
                  }),
                (n[e].isActive = r),
                a(o, e));
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function ro(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var oo = {
          animation: Pe(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState || (e.animationState = no(e)),
              Yt(n) &&
                (0, a.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: Pe(function (t) {
            var e = t.custom,
              n = t.visualElement,
              r = f(S(), 2),
              o = r[0],
              i = r[1],
              s = (0, a.useContext)(w);
            (0, a.useEffect)(
              function () {
                var t,
                  r,
                  a =
                    null === (t = n.animationState) || void 0 === t
                      ? void 0
                      : t.setActive(te.Exit, !o, {
                          custom:
                            null !==
                              (r =
                                null === s || void 0 === s
                                  ? void 0
                                  : s.custom) && void 0 !== r
                              ? r
                              : e,
                        });
                !o && (null === a || void 0 === a || a.then(i));
              },
              [o]
            );
          }),
        },
        io = function (t) {
          return t.hasOwnProperty("x") && t.hasOwnProperty("y");
        },
        ao = function (t) {
          return io(t) && t.hasOwnProperty("z");
        },
        so = function (t, e) {
          return Math.abs(t - e);
        };
      function uo(t, e) {
        if (cn(t) && cn(e)) return so(t, e);
        if (io(t) && io(e)) {
          var n = so(t.x, e.x),
            r = so(t.y, e.y),
            o = ao(t) && ao(e) ? so(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2));
        }
      }
      var co = (function () {
        function t(t, e, n) {
          var r = this,
            o = (void 0 === n ? {} : n).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var t = po(r.lastMoveEventInfo, r.history),
                  e = null !== r.startEvent,
                  n = uo(t.offset, { x: 0, y: 0 }) >= 3;
                if (e || n) {
                  var o = t.point,
                    i = Qn().timestamp;
                  r.history.push(l(l({}, o), { timestamp: i }));
                  var a = r.handlers,
                    s = a.onStart,
                    u = a.onMove;
                  e ||
                    (s && s(r.lastMoveEvent, t),
                    (r.startEvent = r.lastMoveEvent)),
                    u && u(r.lastMoveEvent, t);
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              (r.lastMoveEvent = t),
                (r.lastMoveEventInfo = lo(e, r.transformPagePoint)),
                oe(t) && 0 === t.buttons
                  ? r.handlePointerUp(t, e)
                  : tr.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (t, e) {
              r.end();
              var n = r.handlers,
                o = n.onEnd,
                i = n.onSessionEnd,
                a = po(lo(e, r.transformPagePoint), r.history);
              r.startEvent && o && o(t, a), i && i(t, a);
            }),
            !(ie(t) && t.touches.length > 1))
          ) {
            (this.handlers = e), (this.transformPagePoint = o);
            var i = lo(ce(t), this.transformPagePoint),
              a = i.point,
              s = Qn().timestamp;
            this.history = [l(l({}, a), { timestamp: s })];
            var u = e.onSessionStart;
            u && u(t, po(i, this.history)),
              (this.removeListeners = Ae(
                me(window, "pointermove", this.handlePointerMove),
                me(window, "pointerup", this.handlePointerUp),
                me(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t;
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              Zn.update(this.updatePoint);
          }),
          t
        );
      })();
      function lo(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function fo(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function po(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: fo(n, vo(e)),
          offset: fo(n, mo(e)),
          velocity: ho(e, 0.1),
        };
      }
      function mo(t) {
        return t[0];
      }
      function vo(t) {
        return t[t.length - 1];
      }
      function ho(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, o = vo(t);
          n >= 0 && ((r = t[n]), !(o.timestamp - r.timestamp > ir(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var i = (o.timestamp - r.timestamp) / 1e3;
        if (0 === i) return { x: 0, y: 0 };
        var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function go(t) {
        return t;
      }
      function yo(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      var xo = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
      function bo() {
        return { x: l({}, xo), y: l({}, xo) };
      }
      function wo(t) {
        return [t("x"), t("y")];
      }
      function jo(t, e, n) {
        var r = e.min,
          o = e.max;
        return (
          void 0 !== r && t < r
            ? (t = n ? Fe(r, t, n.min) : Math.max(t, r))
            : void 0 !== o &&
              t > o &&
              (t = n ? Fe(o, t, n.max) : Math.min(t, o)),
          t
        );
      }
      function So(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function ko(t, e) {
        var n,
          r = e.min - t.min,
          o = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((r = (n = f([o, r], 2))[0]), (o = n[1])),
          { min: t.min + r, max: t.min + o }
        );
      }
      function Ao(t, e, n) {
        return { min: Po(t, e), max: Po(t, n) };
      }
      function Po(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      function To(t, e) {
        return yo(
          (function (t, e) {
            var n = t.top,
              r = t.left,
              o = t.bottom,
              i = t.right;
            void 0 === e && (e = go);
            var a = e({ x: r, y: n }),
              s = e({ x: i, y: o });
            return { top: a.y, left: a.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      function Eo(t, e, n) {
        return (
          void 0 === e && (e = 0), void 0 === n && (n = 0.01), uo(t, e) < n
        );
      }
      function Co(t) {
        return t.max - t.min;
      }
      function Oo(t, e) {
        var n = 0.5,
          r = Co(t),
          o = Co(e);
        return (
          o > r
            ? (n = Be(e.min, e.max - r, t.min))
            : r > o && (n = Be(t.min, t.max - o, e.min)),
          Me(0, 1, n)
        );
      }
      function Mo(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = Fe(e.min, e.max, t.origin)),
          (t.scale = Co(n) / Co(e)),
          Eo(t.scale, 1, 1e-4) && (t.scale = 1),
          (t.translate = Fe(n.min, n.max, t.origin) - t.originPoint),
          Eo(t.translate) && (t.translate = 0);
      }
      function _o(t, e, n, r) {
        Mo(t.x, e.x, n.x, Ro(r.originX)), Mo(t.y, e.y, n.y, Ro(r.originY));
      }
      function Ro(t) {
        return "number" === typeof t ? t : 0.5;
      }
      function Lo(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + Co(e));
      }
      var zo = function (t, e) {
        return t.depth - e.depth;
      };
      function Do(t) {
        return t.projection.isEnabled || t.shouldResetTransform();
      }
      function No(t, e) {
        void 0 === e && (e = []);
        var n = t.parent;
        return n && No(n, e), Do(t) && e.push(t), e;
      }
      function Vo(t) {
        if (!t.shouldResetTransform()) {
          var e,
            n = t.getLayoutState();
          t.notifyBeforeLayoutMeasure(n.layout),
            (n.isHydrated = !0),
            (n.layout = t.measureViewportBox()),
            (n.layoutCorrected =
              ((e = n.layout), { x: l({}, e.x), y: l({}, e.y) })),
            t.notifyLayoutMeasure(n.layout, t.prevViewportBox || n.layout),
            tr.update(function () {
              return t.rebaseProjectionTarget();
            });
        }
      }
      function Io(t, e) {
        return { min: e.min - t.min, max: e.max - t.min };
      }
      function Bo(t, e) {
        return { x: Io(t.x, e.x), y: Io(t.y, e.y) };
      }
      function Fo(t, e) {
        var n = t.getLayoutId(),
          r = e.getLayoutId();
        return n !== r || (void 0 === r && t !== e);
      }
      function Uo(t) {
        var e = t.getProps(),
          n = e.drag,
          r = e._dragX;
        return n && !r;
      }
      function Ho(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function Wo(t, e, n) {
        return n + e * (t - n);
      }
      function qo(t, e, n, r, o) {
        return void 0 !== o && (t = Wo(t, o, r)), Wo(t, n, r) + e;
      }
      function Xo(t, e, n, r, o) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = qo(t.min, e, n, r, o)),
          (t.max = qo(t.max, e, n, r, o));
      }
      function Yo(t, e) {
        var n = e.x,
          r = e.y;
        Xo(t.x, n.translate, n.scale, n.originPoint),
          Xo(t.y, r.translate, r.scale, r.originPoint);
      }
      function Zo(t, e, n, r) {
        var o = f(r, 3),
          i = o[0],
          a = o[1],
          s = o[2];
        (t.min = e.min), (t.max = e.max);
        var u = void 0 !== n[s] ? n[s] : 0.5,
          c = Fe(e.min, e.max, u);
        Xo(t, n[i], n[a], c, n.scale);
      }
      var Go = ["x", "scaleX", "originX"],
        Ko = ["y", "scaleY", "originY"];
      function $o(t, e, n) {
        Zo(t.x, e.x, n, Go), Zo(t.y, e.y, n, Ko);
      }
      function Jo(t, e, n, r, o) {
        return (
          (t = Wo((t -= e), 1 / n, r)), void 0 !== o && (t = Wo(t, 1 / o, r)), t
        );
      }
      function Qo(t, e, n) {
        var r = f(n, 3),
          o = r[0],
          i = r[1],
          a = r[2];
        !(function (t, e, n, r, o) {
          void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5);
          var i = Fe(t.min, t.max, r) - e;
          (t.min = Jo(t.min, e, n, i, o)), (t.max = Jo(t.max, e, n, i, o));
        })(t, e[o], e[i], e[a], e.scale);
      }
      function ti(t, e) {
        Qo(t.x, e, Go), Qo(t.y, e, Ko);
      }
      var ei = new Set();
      function ni(t, e, n) {
        t[n] || (t[n] = []), t[n].push(e);
      }
      function ri(t) {
        return (
          ei.add(t),
          function () {
            return ei.delete(t);
          }
        );
      }
      function oi() {
        if (ei.size) {
          var t = 0,
            e = [[]],
            n = [],
            r = function (n) {
              return ni(e, n, t);
            },
            o = function (e) {
              ni(n, e, t), t++;
            };
          ei.forEach(function (e) {
            e(r, o), (t = 0);
          }),
            ei.clear();
          for (var i = n.length, a = 0; a <= i; a++)
            e[a] && e[a].forEach(ai), n[a] && n[a].forEach(ai);
        }
      }
      var ii,
        ai = function (t) {
          return t();
        },
        si = new WeakMap(),
        ui = (function () {
          function t(t) {
            var e = t.visualElement;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.elastic = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }),
              (this.props = {}),
              (this.hasMutatedConstraints = !1),
              (this.cursorProgress = { x: 0.5, y: 0.5 }),
              (this.originPoint = {}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = e),
              this.visualElement.enableLayoutProjection(),
              si.set(e, this);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = void 0 === e ? {} : e,
                o = r.snapToCursor,
                i = void 0 !== o && o,
                a = r.cursorProgress,
                s = this.props.transformPagePoint;
              this.panSession = new co(
                t,
                {
                  onSessionStart: function (t) {
                    var e;
                    n.stopMotion();
                    var r = (function (t) {
                      return ce(t, "client");
                    })(t).point;
                    null === (e = n.cancelLayout) || void 0 === e || e.call(n),
                      (n.cancelLayout = ri(function (t, e) {
                        var o = No(n.visualElement),
                          s = (function (t) {
                            var e = [],
                              n = function (t) {
                                Do(t) && e.push(t), t.children.forEach(n);
                              };
                            return t.children.forEach(n), e.sort(zo);
                          })(n.visualElement),
                          u = p(p([], f(o)), f(s)),
                          c = !1;
                        n.isLayoutDrag() &&
                          n.visualElement.lockProjectionTarget(),
                          e(function () {
                            u.forEach(function (t) {
                              return t.resetTransform();
                            });
                          }),
                          t(function () {
                            Vo(n.visualElement), s.forEach(Vo);
                          }),
                          e(function () {
                            u.forEach(function (t) {
                              return t.restoreTransform();
                            }),
                              i && (c = n.snapToCursor(r));
                          }),
                          t(function () {
                            Boolean(
                              n.getAxisMotionValue("x") && !n.isExternalDrag()
                            ) ||
                              n.visualElement.rebaseProjectionTarget(
                                !0,
                                n.visualElement.measureViewportBox(!1)
                              ),
                              n.visualElement.scheduleUpdateLayoutProjection();
                            var t = n.visualElement.projection;
                            wo(function (e) {
                              if (!c) {
                                var o = t.target[e],
                                  i = o.min,
                                  s = o.max;
                                n.cursorProgress[e] = a ? a[e] : Be(i, s, r[e]);
                              }
                              var u = n.getAxisMotionValue(e);
                              u && (n.originPoint[e] = u.get());
                            });
                          }),
                          e(function () {
                            Gn.update(),
                              Gn.preRender(),
                              Gn.render(),
                              Gn.postRender();
                          }),
                          t(function () {
                            return n.resolveDragConstraints();
                          });
                      }));
                  },
                  onStart: function (t, e) {
                    var r,
                      o,
                      i,
                      a = n.props,
                      s = a.drag,
                      u = a.dragPropagation;
                    (!s ||
                      u ||
                      (n.openGlobalLock && n.openGlobalLock(),
                      (n.openGlobalLock = xe(s)),
                      n.openGlobalLock)) &&
                      (oi(),
                      (n.isDragging = !0),
                      (n.currentDirection = null),
                      null === (o = (r = n.props).onDragStart) ||
                        void 0 === o ||
                        o.call(r, t, e),
                      null === (i = n.visualElement.animationState) ||
                        void 0 === i ||
                        i.setActive(te.Drag, !0));
                  },
                  onMove: function (t, e) {
                    var r,
                      o,
                      i,
                      a,
                      s = n.props,
                      u = s.dragPropagation,
                      c = s.dragDirectionLock;
                    if (u || n.openGlobalLock) {
                      var l = e.offset;
                      if (c && null === n.currentDirection)
                        return (
                          (n.currentDirection = (function (t, e) {
                            void 0 === e && (e = 10);
                            var n = null;
                            Math.abs(t.y) > e
                              ? (n = "y")
                              : Math.abs(t.x) > e && (n = "x");
                            return n;
                          })(l)),
                          void (
                            null !== n.currentDirection &&
                            (null === (o = (r = n.props).onDirectionLock) ||
                              void 0 === o ||
                              o.call(r, n.currentDirection))
                          )
                        );
                      n.updateAxis("x", e.point, l),
                        n.updateAxis("y", e.point, l),
                        null === (a = (i = n.props).onDrag) ||
                          void 0 === a ||
                          a.call(i, t, e),
                        (ii = t);
                    }
                  },
                  onSessionEnd: function (t, e) {
                    return n.stop(t, e);
                  },
                },
                { transformPagePoint: s }
              );
            }),
            (t.prototype.resolveDragConstraints = function () {
              var t = this,
                e = this.props,
                n = e.dragConstraints,
                r = e.dragElastic,
                o = this.visualElement.getLayoutState().layoutCorrected;
              (this.constraints =
                !!n &&
                (_(n)
                  ? this.resolveRefConstraints(o, n)
                  : (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        o = e.bottom,
                        i = e.right;
                      return { x: So(t.x, r, i), y: So(t.y, n, o) };
                    })(o, n))),
                (this.elastic = (function (t) {
                  return (
                    !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                    { x: Ao(t, "left", "right"), y: Ao(t, "top", "bottom") }
                  );
                })(r)),
                this.constraints &&
                  !this.hasMutatedConstraints &&
                  wo(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        );
                      })(o[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function (t, e) {
              var n = this.props,
                r = n.onMeasureDragConstraints,
                o = n.transformPagePoint,
                i = e.current;
              this.constraintsBox = To(i, o);
              var a = (function (t, e) {
                return { x: ko(t.x, e.x), y: ko(t.y, e.y) };
              })(t, this.constraintsBox);
              if (r) {
                var s = r(
                  (function (t) {
                    var e = t.x,
                      n = t.y;
                    return {
                      top: n.min,
                      bottom: n.max,
                      left: e.min,
                      right: e.max,
                    };
                  })(a)
                );
                (this.hasMutatedConstraints = !!s), s && (a = yo(s));
              }
              return a;
            }),
            (t.prototype.cancelDrag = function () {
              var t, e;
              this.visualElement.unlockProjectionTarget(),
                null === (t = this.cancelLayout) ||
                  void 0 === t ||
                  t.call(this),
                (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(te.Drag, !1);
            }),
            (t.prototype.stop = function (t, e) {
              var n, r, o;
              null === (n = this.panSession) || void 0 === n || n.end(),
                (this.panSession = null);
              var i = this.isDragging;
              if ((this.cancelDrag(), i)) {
                var a = e.velocity;
                this.animateDragEnd(a),
                  null === (o = (r = this.props).onDragEnd) ||
                    void 0 === o ||
                    o.call(r, t, e);
              }
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              return wo(function (n) {
                if (ci(n, e.props.drag, e.currentDirection)) {
                  var r = e.getAxisMotionValue(n);
                  if (!r) return (e.cursorProgress[n] = 0.5), !0;
                  var o = e.visualElement.getLayoutState().layout,
                    i = o[n].max - o[n].min,
                    a = o[n].min + i / 2,
                    s = t[n] - a;
                  (e.originPoint[n] = t[n]), r.set(s);
                }
              }).includes(!0);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              if (ci(t, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(t)
                  ? this.updateAxisMotionValue(t, n)
                  : this.updateVisualElementAxis(t, e);
            }),
            (t.prototype.updateAxisMotionValue = function (t, e) {
              var n = this.getAxisMotionValue(t);
              if (e && n) {
                var r = this.originPoint[t] + e[t],
                  o = this.constraints
                    ? jo(r, this.constraints[t], this.elastic[t])
                    : r;
                n.set(o);
              }
            }),
            (t.prototype.updateVisualElementAxis = function (t, e) {
              var n,
                r = this.visualElement.getLayoutState().layout[t],
                o = r.max - r.min,
                i = this.cursorProgress[t],
                a = (function (t, e, n, r, o) {
                  var i = t - e * n;
                  return r ? jo(i, r, o) : i;
                })(
                  e[t],
                  o,
                  i,
                  null === (n = this.constraints) || void 0 === n
                    ? void 0
                    : n[t],
                  this.elastic[t]
                );
              this.visualElement.setProjectionTargetAxis(t, a, a + o);
            }),
            (t.prototype.setProps = function (t) {
              var e = t.drag,
                n = void 0 !== e && e,
                r = t.dragDirectionLock,
                o = void 0 !== r && r,
                i = t.dragPropagation,
                a = void 0 !== i && i,
                s = t.dragConstraints,
                u = void 0 !== s && s,
                c = t.dragElastic,
                f = void 0 === c ? 0.35 : c,
                p = t.dragMomentum,
                m = void 0 === p || p,
                v = d(t, [
                  "drag",
                  "dragDirectionLock",
                  "dragPropagation",
                  "dragConstraints",
                  "dragElastic",
                  "dragMomentum",
                ]);
              this.props = l(
                {
                  drag: n,
                  dragDirectionLock: o,
                  dragPropagation: a,
                  dragConstraints: u,
                  dragElastic: f,
                  dragMomentum: m,
                },
                v
              );
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e = this.props,
                n = e.layout,
                r = e.layoutId,
                o = "_drag" + t.toUpperCase();
              return this.props[o]
                ? this.props[o]
                : n || void 0 !== r
                ? void 0
                : this.visualElement.getValue(t, 0);
            }),
            (t.prototype.isLayoutDrag = function () {
              return !this.getAxisMotionValue("x");
            }),
            (t.prototype.isExternalDrag = function () {
              var t = this.props,
                e = t._dragX,
                n = t._dragY;
              return e || n;
            }),
            (t.prototype.animateDragEnd = function (t) {
              var e = this,
                n = this.props,
                r = n.drag,
                o = n.dragMomentum,
                i = n.dragElastic,
                a = n.dragTransition,
                s = (function (t, e) {
                  void 0 === e && (e = !0);
                  var n,
                    r = t.getProjectionParent();
                  return (
                    !!r &&
                    (e
                      ? ti(
                          (n = Bo(r.projection.target, t.projection.target)),
                          r.getLatestValues()
                        )
                      : (n = Bo(
                          r.getLayoutState().layout,
                          t.getLayoutState().layout
                        )),
                    wo(function (e) {
                      return t.setProjectionTargetAxis(
                        e,
                        n[e].min,
                        n[e].max,
                        !0
                      );
                    }),
                    !0)
                  );
                })(
                  this.visualElement,
                  this.isLayoutDrag() && !this.isExternalDrag()
                ),
                u = this.constraints || {};
              if (s && Object.keys(u).length && this.isLayoutDrag()) {
                var c = this.visualElement.getProjectionParent();
                if (c) {
                  var d = Bo(c.projection.targetFinal, u);
                  wo(function (t) {
                    var e = d[t],
                      n = e.min,
                      r = e.max;
                    u[t] = {
                      min: isNaN(n) ? void 0 : n,
                      max: isNaN(r) ? void 0 : r,
                    };
                  });
                }
              }
              var f = wo(function (n) {
                var c;
                if (ci(n, r, e.currentDirection)) {
                  var d =
                      null !==
                        (c = null === u || void 0 === u ? void 0 : u[n]) &&
                      void 0 !== c
                        ? c
                        : {},
                    f = i ? 200 : 1e6,
                    p = i ? 40 : 1e7,
                    m = l(
                      l(
                        {
                          type: "inertia",
                          velocity: o ? t[n] : 0,
                          bounceStiffness: f,
                          bounceDamping: p,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                        },
                        a
                      ),
                      d
                    );
                  return e.getAxisMotionValue(n)
                    ? e.startAxisValueAnimation(n, m)
                    : e.visualElement.startLayoutAnimation(n, m, s);
                }
              });
              return Promise.all(f).then(function () {
                var t, n;
                null === (n = (t = e.props).onDragTransitionEnd) ||
                  void 0 === n ||
                  n.call(t);
              });
            }),
            (t.prototype.stopMotion = function () {
              var t = this;
              wo(function (e) {
                var n = t.getAxisMotionValue(e);
                n ? n.stop() : t.visualElement.stopLayoutAnimation();
              });
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              var n = this.getAxisMotionValue(t);
              if (n) {
                var r = n.get();
                return n.set(r), n.set(r), Lr(t, n, 0, e);
              }
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                e = this.props,
                n = e.drag;
              if (_(e.dragConstraints) && this.constraintsBox) {
                this.stopMotion();
                var r = { x: 0, y: 0 };
                wo(function (e) {
                  r[e] = Oo(
                    t.visualElement.projection.target[e],
                    t.constraintsBox[e]
                  );
                }),
                  this.updateConstraints(function () {
                    wo(function (e) {
                      if (ci(e, n, null)) {
                        var o = (function (t, e, n) {
                            var r = t.max - t.min,
                              o = Fe(e.min, e.max - r, n);
                            return { min: o, max: o + r };
                          })(
                            t.visualElement.projection.target[e],
                            t.constraintsBox[e],
                            r[e]
                          ),
                          i = o.min,
                          a = o.max;
                        t.visualElement.setProjectionTargetAxis(e, i, a);
                      }
                    });
                  }),
                  setTimeout(oi, 1);
              }
            }),
            (t.prototype.updateConstraints = function (t) {
              var e = this;
              this.cancelLayout = ri(function (n, r) {
                var o = No(e.visualElement);
                r(function () {
                  return o.forEach(function (t) {
                    return t.resetTransform();
                  });
                }),
                  n(function () {
                    return Vo(e.visualElement);
                  }),
                  r(function () {
                    return o.forEach(function (t) {
                      return t.restoreTransform();
                    });
                  }),
                  n(function () {
                    e.resolveDragConstraints();
                  }),
                  t && r(t);
              });
            }),
            (t.prototype.mount = function (t) {
              var e = this,
                n = me(t.getInstance(), "pointerdown", function (t) {
                  var n = e.props,
                    r = n.drag,
                    o = n.dragListener;
                  r && (void 0 === o || o) && e.start(t);
                }),
                r = ne(window, "resize", function () {
                  e.scalePoint();
                }),
                o = t.onLayoutUpdate(function () {
                  e.isDragging && e.resolveDragConstraints();
                }),
                i = t.prevDragCursor;
              return (
                i && this.start(ii, { cursorProgress: i }),
                function () {
                  null === n || void 0 === n || n(),
                    null === r || void 0 === r || r(),
                    null === o || void 0 === o || o(),
                    e.cancelDrag();
                }
              );
            }),
            t
          );
        })();
      function ci(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var li,
        di,
        fi = {
          pan: Pe(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              i = t.visualElement,
              s = e || n || r || o,
              u = (0, a.useRef)(null),
              c = (0, a.useContext)(x).transformPagePoint,
              l = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (u.current = null), r && r(t, e);
                },
              };
            (0, a.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(l);
            }),
              ve(
                i,
                "pointerdown",
                s &&
                  function (t) {
                    u.current = new co(t, l, { transformPagePoint: c });
                  }
              ),
              Se(function () {
                return u.current && u.current.end();
              });
          }),
          drag: Pe(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = (0, a.useContext)(x).transformPagePoint,
              o = j(function () {
                return new ui({ visualElement: n });
              });
            o.setProps(l(l({}, t), { transformPagePoint: r })),
              (0, a.useEffect)(
                function () {
                  return e && e.subscribe(o);
                },
                [o]
              ),
              (0, a.useEffect)(function () {
                return o.mount(n);
              }, []);
          }),
        };
      function pi(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      !(function (t) {
        (t[(t.Entering = 0)] = "Entering"),
          (t[(t.Present = 1)] = "Present"),
          (t[(t.Exiting = 2)] = "Exiting");
      })(li || (li = {})),
        (function (t) {
          (t[(t.Hide = 0)] = "Hide"), (t[(t.Show = 1)] = "Show");
        })(di || (di = {}));
      var mi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function vi(t, e, n) {
        void 0 === n && (n = 1);
        var r = f(
            (function (t) {
              var e = mi.exec(t);
              if (!e) return [,];
              var n = f(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = r[0],
          i = r[1];
        if (o) {
          var a = window.getComputedStyle(e).getPropertyValue(o);
          return a ? a.trim() : pi(i) ? vi(i, e, n + 1) : i;
        }
      }
      function hi(t, e) {
        return (t / (e.max - e.min)) * 100;
      }
      var gi = "_$css";
      var yi = {
          process: function (t, e, n) {
            var r = n.target;
            if ("string" === typeof t) {
              if (!mt.test(t)) return t;
              t = parseFloat(t);
            }
            return hi(t, r.x) + "% " + hi(t, r.y) + "%";
          },
        },
        xi = {
          borderRadius: l(l({}, yi), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: yi,
          borderTopRightRadius: yi,
          borderBottomLeftRadius: yi,
          borderBottomRightRadius: yi,
          boxShadow: {
            process: function (t, e) {
              var n = e.delta,
                r = e.treeScale,
                o = t,
                i = t.includes("var("),
                a = [];
              i &&
                (t = t.replace(mi, function (t) {
                  return a.push(t), gi;
                }));
              var s = un.parse(t);
              if (s.length > 5) return o;
              var u = un.createTransformer(t),
                c = "number" !== typeof s[0] ? 1 : 0,
                l = n.x.scale * r.x,
                d = n.y.scale * r.y;
              (s[0 + c] /= l), (s[1 + c] /= d);
              var f = Fe(l, d, 0.5);
              "number" === typeof s[2 + c] && (s[2 + c] /= f),
                "number" === typeof s[3 + c] && (s[3 + c] /= f);
              var p = u(s);
              if (i) {
                var m = 0;
                p = p.replace(gi, function () {
                  var t = a[m];
                  return m++, t;
                });
              }
              return p;
            },
          },
        },
        bi = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.frameTarget = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 },
              }),
              (e.currentAnimationTarget = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 },
              }),
              (e.isAnimating = { x: !1, y: !1 }),
              (e.stopAxisAnimation = { x: void 0, y: void 0 }),
              (e.isAnimatingTree = !1),
              (e.animate = function (t, n, r) {
                void 0 === r && (r = {});
                var o = r.originBox,
                  i = r.targetBox,
                  a = r.visibilityAction,
                  s = r.shouldStackAnimate,
                  u = r.onComplete,
                  c = r.prevParent,
                  f = d(r, [
                    "originBox",
                    "targetBox",
                    "visibilityAction",
                    "shouldStackAnimate",
                    "onComplete",
                    "prevParent",
                  ]),
                  p = e.props,
                  m = p.visualElement,
                  v = p.layout;
                if (!1 === s) return (e.isAnimatingTree = !1), e.safeToRemove();
                if (!e.isAnimatingTree || !0 === s) {
                  s && (e.isAnimatingTree = !0), (n = o || n), (t = i || t);
                  var h = !1,
                    g = m.getProjectionParent();
                  if (g) {
                    var y = g.prevViewportBox,
                      x = g.getLayoutState().layout;
                    c &&
                      (i && (x = c.getLayoutState().layout),
                      o &&
                        !Fo(c, g) &&
                        c.prevViewportBox &&
                        (y = c.prevViewportBox)),
                      y &&
                        Pi(c, o, i) &&
                        ((h = !0), (n = Bo(y, n)), (t = Bo(x, t)));
                  }
                  var b = wi(n, t),
                    w = wo(function (r) {
                      var o, i;
                      if ("position" === v) {
                        var s = t[r].max - t[r].min;
                        n[r].max = n[r].min + s;
                      }
                      if (!m.projection.isTargetLocked)
                        return void 0 === a
                          ? b
                            ? e.animateAxis(
                                r,
                                t[r],
                                n[r],
                                l(l({}, f), { isRelative: h })
                              )
                            : (null === (i = (o = e.stopAxisAnimation)[r]) ||
                                void 0 === i ||
                                i.call(o),
                              m.setProjectionTargetAxis(
                                r,
                                t[r].min,
                                t[r].max,
                                h
                              ))
                          : void m.setVisibility(a === di.Show);
                    });
                  return (
                    m.syncRender(),
                    Promise.all(w).then(function () {
                      (e.isAnimatingTree = !1),
                        u && u(),
                        m.notifyLayoutAnimationComplete();
                    })
                  );
                }
              }),
              e
            );
          }
          return (
            c(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.props.visualElement;
              (e.animateMotionValue = Lr),
                e.enableLayoutProjection(),
                (this.unsubLayoutReady = e.onLayoutUpdate(this.animate)),
                (e.layoutSafeToRemove = function () {
                  return t.safeToRemove();
                }),
                (function (t) {
                  for (var e in t) q[e] = t[e];
                })(xi);
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this;
              this.unsubLayoutReady(),
                wo(function (e) {
                  var n, r;
                  return null === (r = (n = t.stopAxisAnimation)[e]) ||
                    void 0 === r
                    ? void 0
                    : r.call(n);
                });
            }),
            (e.prototype.animateAxis = function (t, e, n, r) {
              var o,
                i,
                a = this,
                s = void 0 === r ? {} : r,
                u = s.transition,
                c = s.isRelative;
              if (
                !this.isAnimating[t] ||
                !ki(e, this.currentAnimationTarget[t])
              ) {
                null === (i = (o = this.stopAxisAnimation)[t]) ||
                  void 0 === i ||
                  i.call(o),
                  (this.isAnimating[t] = !0);
                var l = this.props.visualElement,
                  d = this.frameTarget[t],
                  f = l.getProjectionAnimationProgress()[t];
                f.clearListeners(), f.set(0), f.set(0);
                var p = function () {
                  var r = f.get() / 1e3;
                  !(function (t, e, n, r) {
                    (t.min = Fe(e.min, n.min, r)),
                      (t.max = Fe(e.max, n.max, r));
                  })(d, n, e, r),
                    l.setProjectionTargetAxis(t, d.min, d.max, c);
                };
                p();
                var m = f.onChange(p);
                (this.stopAxisAnimation[t] = function () {
                  (a.isAnimating[t] = !1), f.stop(), m();
                }),
                  (this.currentAnimationTarget[t] = e);
                var v = u || l.getDefaultTransition() || Ai;
                return Lr(
                  "x" === t ? "layoutX" : "layoutY",
                  f,
                  1e3,
                  v && Rr(v, "layout")
                ).then(this.stopAxisAnimation[t]);
              }
            }),
            (e.prototype.safeToRemove = function () {
              var t, e;
              null === (e = (t = this.props).safeToRemove) ||
                void 0 === e ||
                e.call(t);
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(a.Component);
      function wi(t, e) {
        return !Si(t) && !Si(e) && (!ki(t.x, e.x) || !ki(t.y, e.y));
      }
      var ji = { min: 0, max: 0 };
      function Si(t) {
        return ki(t.x, ji) && ki(t.y, ji);
      }
      function ki(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      var Ai = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Pi(t, e, n) {
        return t || (!t && !(e || n));
      }
      var Ti = {
        layoutReady: function (t) {
          return t.notifyLayoutReady();
        },
      };
      function Ei() {
        var t = new Set();
        return {
          add: function (e) {
            return t.add(e);
          },
          flush: function (e) {
            var n = void 0 === e ? Ti : e,
              r = n.layoutReady,
              o = n.parent;
            ri(function (e, n) {
              var i = Array.from(t).sort(zo),
                a = o ? No(o) : [];
              n(function () {
                p(p([], f(a)), f(i)).forEach(function (t) {
                  return t.resetTransform();
                });
              }),
                e(function () {
                  i.forEach(Vo);
                }),
                n(function () {
                  a.forEach(function (t) {
                    return t.restoreTransform();
                  }),
                    i.forEach(r);
                }),
                e(function () {
                  i.forEach(function (t) {
                    t.isPresent && (t.presence = li.Present);
                  });
                }),
                n(function () {
                  Gn.preRender(), Gn.render();
                }),
                e(function () {
                  tr.postRender(function () {
                    return i.forEach(Ci);
                  }),
                    t.clear();
                });
            }),
              oi();
          },
        };
      }
      function Ci(t) {
        t.prevViewportBox = t.projection.target;
      }
      var Oi = (0, a.createContext)(Ei()),
        Mi = (0, a.createContext)(Ei());
      function _i(t) {
        return !!t.forceUpdate;
      }
      var Ri = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          c(e, t),
          (e.prototype.componentDidMount = function () {
            var t = this.props,
              e = t.syncLayout,
              n = t.framerSyncLayout,
              r = t.visualElement;
            _i(e) && e.register(r),
              _i(n) && n.register(r),
              r.onUnmount(function () {
                _i(e) && e.remove(r), _i(n) && n.remove(r);
              });
          }),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            var t = this.props,
              e = t.syncLayout,
              n = t.visualElement;
            return (
              _i(e)
                ? e.syncUpdate()
                : (!(function (t) {
                    t.shouldResetTransform() ||
                      ((t.prevViewportBox = t.measureViewportBox(!1)),
                      t.rebaseProjectionTarget(!1, t.prevViewportBox));
                  })(n),
                  e.add(n)),
              null
            );
          }),
          (e.prototype.componentDidUpdate = function () {
            var t = this.props.syncLayout;
            _i(t) || t.flush();
          }),
          (e.prototype.render = function () {
            return null;
          }),
          e
        );
      })(a.Component);
      var Li = {
        measureLayout: function (t) {
          var e = (0, a.useContext)(Oi),
            n = (0, a.useContext)(Mi);
          return a.createElement(
            Ri,
            l({}, t, { syncLayout: e, framerSyncLayout: n })
          );
        },
        layoutAnimation: function (t) {
          var e = f(S(), 2)[1];
          return a.createElement(bi, l({}, t, { safeToRemove: e }));
        },
      };
      function zi() {
        return {
          isHydrated: !1,
          layout: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
          layoutCorrected: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
          treeScale: { x: 1, y: 1 },
          delta: bo(),
          deltaFinal: bo(),
          deltaTransform: "",
        };
      }
      var Di = zi();
      function Ni(t, e, n) {
        var r = t.x,
          o = t.y,
          i =
            "translate3d(" +
            r.translate / e.x +
            "px, " +
            o.translate / e.y +
            "px, 0) ";
        if (n) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (i += "rotate(" + a + ") "),
            s && (i += "rotateX(" + s + ") "),
            u && (i += "rotateY(" + u + ") ");
        }
        return (
          (i += "scale(" + r.scale + ", " + o.scale + ")"),
          n || i !== Ii ? i : ""
        );
      }
      function Vi(t) {
        var e = t.deltaFinal;
        return 100 * e.x.origin + "% " + 100 * e.y.origin + "% 0";
      }
      var Ii = Ni(Di.delta, Di.treeScale, { x: 1, y: 1 }),
        Bi = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      function Fi(t, e, n, r) {
        var o,
          i,
          a = t.delta,
          s = t.layout,
          u = t.layoutCorrected,
          c = t.treeScale,
          l = e.target;
        (i = s),
          Ho((o = u).x, i.x),
          Ho(o.y, i.y),
          (function (t, e, n) {
            var r = n.length;
            if (r) {
              var o, i;
              e.x = e.y = 1;
              for (var a = 0; a < r; a++)
                (i = (o = n[a]).getLayoutState().delta),
                  (e.x *= i.x.scale),
                  (e.y *= i.y.scale),
                  Yo(t, i),
                  Uo(o) && $o(t, t, o.getLatestValues());
            }
          })(u, c, n),
          _o(a, u, l, r);
      }
      var Ui = (function () {
        function t() {
          (this.children = []), (this.isDirty = !1);
        }
        return (
          (t.prototype.add = function (t) {
            zr(this.children, t), (this.isDirty = !0);
          }),
          (t.prototype.remove = function (t) {
            Dr(this.children, t), (this.isDirty = !0);
          }),
          (t.prototype.forEach = function (t) {
            this.isDirty && this.children.sort(zo),
              (this.isDirty = !1),
              this.children.forEach(t);
          }),
          t
        );
      })();
      var Hi = function (t) {
        var e = t.treeType,
          n = void 0 === e ? "" : e,
          r = t.build,
          o = t.getBaseTarget,
          i = t.makeTargetAnimatable,
          a = t.measureViewportBox,
          s = t.render,
          u = t.readValueFromInstance,
          c = t.resetTransform,
          d = t.restoreTransform,
          m = t.removeValueFromRenderState,
          v = t.sortNodePosition,
          h = t.scrapeMotionValuesFromProps;
        return function (t, e) {
          var g = t.parent,
            y = t.props,
            x = t.presenceId,
            b = t.blockInitialAnimation,
            w = t.visualState;
          void 0 === e && (e = {});
          var j,
            S,
            k,
            A,
            P,
            T,
            E = w.latestValues,
            C = w.renderState,
            O = (function () {
              var t = Bi.map(function () {
                  return new Nr();
                }),
                e = {},
                n = {
                  clearAllListeners: function () {
                    return t.forEach(function (t) {
                      return t.clear();
                    });
                  },
                  updatePropListeners: function (t) {
                    return Bi.forEach(function (r) {
                      var o;
                      null === (o = e[r]) || void 0 === o || o.call(e);
                      var i = "on" + r,
                        a = t[i];
                      a && (e[r] = n[i](a));
                    });
                  },
                };
              return (
                t.forEach(function (t, e) {
                  (n["on" + Bi[e]] = function (e) {
                    return t.add(e);
                  }),
                    (n["notify" + Bi[e]] = function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      return t.notify.apply(t, p([], f(e)));
                    });
                }),
                n
              );
            })(),
            M = {
              isEnabled: !1,
              isHydrated: !1,
              isTargetLocked: !1,
              target: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
              targetFinal: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
            },
            _ = M,
            R = E,
            z = zi(),
            D = !1,
            I = new Map(),
            B = new Map(),
            F = {},
            U = l({}, E);
          function H() {
            j &&
              (J.isProjectionReady() &&
                ($o(_.targetFinal, _.target, R),
                _o(z.deltaFinal, z.layoutCorrected, _.targetFinal, E)),
              W(),
              s(j, C));
          }
          function W() {
            var t = E;
            if (A && A.isActive()) {
              var n = A.getCrossfadeState(J);
              n && (t = n);
            }
            r(J, C, t, _, z, e, y);
          }
          function q() {
            O.notifyUpdate(E);
          }
          function X() {
            J.layoutTree.forEach(qi);
          }
          var Y = h(y);
          for (var Z in Y) {
            var G = Y[Z];
            void 0 !== E[Z] && tt(G) && G.set(E[Z], !1);
          }
          var K = N(y),
            $ = V(y),
            J = l(
              l(
                {
                  treeType: n,
                  current: null,
                  depth: g ? g.depth + 1 : 0,
                  parent: g,
                  children: new Set(),
                  path: g ? p(p([], f(g.path)), [g]) : [],
                  layoutTree: g ? g.layoutTree : new Ui(),
                  presenceId: x,
                  projection: M,
                  variantChildren: $ ? new Set() : void 0,
                  isVisible: void 0,
                  manuallyAnimateOnMount: Boolean(
                    null === g || void 0 === g ? void 0 : g.isMounted()
                  ),
                  blockInitialAnimation: b,
                  isMounted: function () {
                    return Boolean(j);
                  },
                  mount: function (t) {
                    (j = J.current = t),
                      J.pointTo(J),
                      $ &&
                        g &&
                        !K &&
                        (T =
                          null === g || void 0 === g
                            ? void 0
                            : g.addVariantChild(J)),
                      null === g || void 0 === g || g.children.add(J);
                  },
                  unmount: function () {
                    Zn.update(q),
                      Zn.render(H),
                      Zn.preRender(J.updateLayoutProjection),
                      B.forEach(function (t) {
                        return t();
                      }),
                      J.stopLayoutAnimation(),
                      J.layoutTree.remove(J),
                      null === T || void 0 === T || T(),
                      null === g || void 0 === g || g.children.delete(J),
                      null === k || void 0 === k || k(),
                      O.clearAllListeners();
                  },
                  addVariantChild: function (t) {
                    var e,
                      n = J.getClosestVariantNode();
                    if (n)
                      return (
                        null === (e = n.variantChildren) ||
                          void 0 === e ||
                          e.add(t),
                        function () {
                          return n.variantChildren.delete(t);
                        }
                      );
                  },
                  sortNodePosition: function (t) {
                    return v && n === t.treeType
                      ? v(J.getInstance(), t.getInstance())
                      : 0;
                  },
                  getClosestVariantNode: function () {
                    return $
                      ? J
                      : null === g || void 0 === g
                      ? void 0
                      : g.getClosestVariantNode();
                  },
                  scheduleUpdateLayoutProjection: g
                    ? g.scheduleUpdateLayoutProjection
                    : function () {
                        return tr.preRender(
                          J.updateTreeLayoutProjection,
                          !1,
                          !0
                        );
                      },
                  getLayoutId: function () {
                    return y.layoutId;
                  },
                  getInstance: function () {
                    return j;
                  },
                  getStaticValue: function (t) {
                    return E[t];
                  },
                  setStaticValue: function (t, e) {
                    return (E[t] = e);
                  },
                  getLatestValues: function () {
                    return E;
                  },
                  setVisibility: function (t) {
                    J.isVisible !== t &&
                      ((J.isVisible = t), J.scheduleRender());
                  },
                  makeTargetAnimatable: function (t, e) {
                    return void 0 === e && (e = !0), i(J, t, y, e);
                  },
                  addValue: function (t, e) {
                    J.hasValue(t) && J.removeValue(t),
                      I.set(t, e),
                      (E[t] = e.get()),
                      (function (t, e) {
                        var n = e.onChange(function (e) {
                            (E[t] = e), y.onUpdate && tr.update(q, !1, !0);
                          }),
                          r = e.onRenderRequest(J.scheduleRender);
                        B.set(t, function () {
                          n(), r();
                        });
                      })(t, e);
                  },
                  removeValue: function (t) {
                    var e;
                    I.delete(t),
                      null === (e = B.get(t)) || void 0 === e || e(),
                      B.delete(t),
                      delete E[t],
                      m(t, C);
                  },
                  hasValue: function (t) {
                    return I.has(t);
                  },
                  getValue: function (t, e) {
                    var n = I.get(t);
                    return (
                      void 0 === n &&
                        void 0 !== e &&
                        ((n = Ir(e)), J.addValue(t, n)),
                      n
                    );
                  },
                  forEachValue: function (t) {
                    return I.forEach(t);
                  },
                  readValue: function (t) {
                    var n;
                    return null !== (n = E[t]) && void 0 !== n ? n : u(j, t, e);
                  },
                  setBaseTarget: function (t, e) {
                    U[t] = e;
                  },
                  getBaseTarget: function (t) {
                    if (o) {
                      var e = o(y, t);
                      if (void 0 !== e && !tt(e)) return e;
                    }
                    return U[t];
                  },
                },
                O
              ),
              {
                build: function () {
                  return W(), C;
                },
                scheduleRender: function () {
                  tr.render(H, !1, !0);
                },
                syncRender: H,
                setProps: function (t) {
                  (y = t),
                    O.updatePropListeners(t),
                    (F = (function (t, e, n) {
                      var r;
                      for (var o in e) {
                        var i = e[o],
                          a = n[o];
                        if (tt(i)) t.addValue(o, i);
                        else if (tt(a)) t.addValue(o, Ir(i));
                        else if (a !== i)
                          if (t.hasValue(o)) {
                            var s = t.getValue(o);
                            !s.hasAnimated && s.set(i);
                          } else
                            t.addValue(
                              o,
                              Ir(
                                null !== (r = t.getStaticValue(o)) &&
                                  void 0 !== r
                                  ? r
                                  : i
                              )
                            );
                      }
                      for (var o in n) void 0 === e[o] && t.removeValue(o);
                      return e;
                    })(J, h(y), F));
                },
                getProps: function () {
                  return y;
                },
                getVariant: function (t) {
                  var e;
                  return null === (e = y.variants) || void 0 === e
                    ? void 0
                    : e[t];
                },
                getDefaultTransition: function () {
                  return y.transition;
                },
                getVariantContext: function (t) {
                  if ((void 0 === t && (t = !1), t))
                    return null === g || void 0 === g
                      ? void 0
                      : g.getVariantContext();
                  if (!K) {
                    var e =
                      (null === g || void 0 === g
                        ? void 0
                        : g.getVariantContext()) || {};
                    return void 0 !== y.initial && (e.initial = y.initial), e;
                  }
                  for (var n = {}, r = 0; r < Zi; r++) {
                    var o = Yi[r],
                      i = y[o];
                    (L(i) || !1 === i) && (n[o] = i);
                  }
                  return n;
                },
                enableLayoutProjection: function () {
                  (M.isEnabled = !0), J.layoutTree.add(J);
                },
                lockProjectionTarget: function () {
                  M.isTargetLocked = !0;
                },
                unlockProjectionTarget: function () {
                  J.stopLayoutAnimation(), (M.isTargetLocked = !1);
                },
                getLayoutState: function () {
                  return z;
                },
                setCrossfader: function (t) {
                  A = t;
                },
                isProjectionReady: function () {
                  return M.isEnabled && M.isHydrated && z.isHydrated;
                },
                startLayoutAnimation: function (t, e, n) {
                  void 0 === n && (n = !1);
                  var r = J.getProjectionAnimationProgress()[t],
                    o = n ? M.relativeTarget[t] : M.target[t],
                    i = o.min,
                    a = o.max - i;
                  return (
                    r.clearListeners(),
                    r.set(i),
                    r.set(i),
                    r.onChange(function (e) {
                      J.setProjectionTargetAxis(t, e, e + a, n);
                    }),
                    J.animateMotionValue(t, r, 0, e)
                  );
                },
                stopLayoutAnimation: function () {
                  wo(function (t) {
                    return J.getProjectionAnimationProgress()[t].stop();
                  });
                },
                measureViewportBox: function (t) {
                  void 0 === t && (t = !0);
                  var n = a(j, e);
                  return t || ti(n, E), n;
                },
                getProjectionAnimationProgress: function () {
                  return P || (P = { x: Ir(0), y: Ir(0) }), P;
                },
                setProjectionTargetAxis: function (t, e, n, r) {
                  var o;
                  void 0 === r && (r = !1),
                    r
                      ? (M.relativeTarget ||
                          (M.relativeTarget = {
                            x: { min: 0, max: 1 },
                            y: { min: 0, max: 1 },
                          }),
                        (o = M.relativeTarget[t]))
                      : ((M.relativeTarget = void 0), (o = M.target[t])),
                    (M.isHydrated = !0),
                    (o.min = e),
                    (o.max = n),
                    (D = !0),
                    O.notifySetAxisTarget();
                },
                rebaseProjectionTarget: function (t, e) {
                  void 0 === e && (e = z.layout);
                  var n = J.getProjectionAnimationProgress(),
                    r = n.x,
                    o = n.y,
                    i =
                      !M.relativeTarget &&
                      !M.isTargetLocked &&
                      !r.isAnimating() &&
                      !o.isAnimating();
                  (t || i) &&
                    wo(function (t) {
                      var n = e[t],
                        r = n.min,
                        o = n.max;
                      J.setProjectionTargetAxis(t, r, o);
                    });
                },
                notifyLayoutReady: function (t) {
                  !(function (t) {
                    var e = t.getProjectionParent();
                    if (e) {
                      var n = Bo(
                        e.getLayoutState().layout,
                        t.getLayoutState().layout
                      );
                      wo(function (e) {
                        t.setProjectionTargetAxis(e, n[e].min, n[e].max, !0);
                      });
                    } else t.rebaseProjectionTarget();
                  })(J),
                    J.notifyLayoutUpdate(
                      z.layout,
                      J.prevViewportBox || z.layout,
                      t
                    );
                },
                resetTransform: function () {
                  return c(J, j, y);
                },
                restoreTransform: function () {
                  return d(j, C);
                },
                updateLayoutProjection: function () {
                  if (J.isProjectionReady()) {
                    var t = z.delta,
                      e = z.treeScale,
                      n = e.x,
                      r = e.y,
                      o = z.deltaTransform;
                    Fi(z, _, J.path, E),
                      D && J.notifyViewportBoxUpdate(_.target, t),
                      (D = !1);
                    var i = Ni(t, e);
                    (i === o && n === e.x && r === e.y) || J.scheduleRender(),
                      (z.deltaTransform = i);
                  }
                },
                updateTreeLayoutProjection: function () {
                  J.layoutTree.forEach(Wi), tr.preRender(X, !1, !0);
                },
                getProjectionParent: function () {
                  if (void 0 === S) {
                    for (var t = !1, e = J.path.length - 1; e >= 0; e--) {
                      var n = J.path[e];
                      if (n.projection.isEnabled) {
                        t = n;
                        break;
                      }
                    }
                    S = t;
                  }
                  return S;
                },
                resolveRelativeTargetBox: function () {
                  var t = J.getProjectionParent();
                  if (
                    M.relativeTarget &&
                    t &&
                    ((function (t, e) {
                      Lo(t.target.x, t.relativeTarget.x, e.target.x),
                        Lo(t.target.y, t.relativeTarget.y, e.target.y);
                    })(M, t.projection),
                    Uo(t))
                  ) {
                    var e = M.target;
                    $o(e, e, t.getLatestValues());
                  }
                },
                shouldResetTransform: function () {
                  return Boolean(y._layoutResetTransform);
                },
                pointTo: function (t) {
                  (_ = t.projection),
                    (R = t.getLatestValues()),
                    null === k || void 0 === k || k(),
                    (k = Ae(
                      t.onSetAxisTarget(J.scheduleUpdateLayoutProjection),
                      t.onLayoutAnimationComplete(function () {
                        var t;
                        J.isPresent
                          ? (J.presence = li.Present)
                          : null === (t = J.layoutSafeToRemove) ||
                            void 0 === t ||
                            t.call(J);
                      })
                    ));
                },
                isPresent: !0,
                presence: li.Entering,
              }
            );
          return J;
        };
      };
      function Wi(t) {
        t.resolveRelativeTargetBox();
      }
      function qi(t) {
        t.updateLayoutProjection();
      }
      var Xi,
        Yi = p(["initial"], f(Jr)),
        Zi = Yi.length,
        Gi = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Ki = function (t) {
          return Gi.has(t);
        },
        $i = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        Ji = function (t) {
          return t === yt || t === mt;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(Xi || (Xi = {}));
      var Qi = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        ta = function (t, e) {
          return function (n, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return Qi(i[1], e);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? Qi(a[1], t) : 0;
          };
        },
        ea = new Set(["x", "y", "z"]),
        na = Y.filter(function (t) {
          return !ea.has(t);
        });
      var ra = {
          width: function (t) {
            var e = t.x;
            return e.max - e.min;
          },
          height: function (t) {
            var e = t.y;
            return e.max - e.min;
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: ta(4, 13),
          y: ta(5, 14),
        },
        oa = function (t, e, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (e = l({}, e)),
            (r = l({}, r));
          var o = Object.keys(e).filter(Ki),
            i = [],
            a = !1,
            s = [];
          if (
            (o.forEach(function (o) {
              var u = t.getValue(o);
              if (t.hasValue(o)) {
                var c,
                  l = n[o],
                  d = e[o],
                  f = Ur(l);
                if (Zt(d))
                  for (var p = d.length, m = null === d[0] ? 1 : 0; m < p; m++)
                    c ? Ur(d[m]) : (c = Ur(d[m])) === f || (Ji(f) && Ji(c));
                else c = Ur(d);
                if (f !== c)
                  if (Ji(f) && Ji(c)) {
                    var v = u.get();
                    "string" === typeof v && u.set(parseFloat(v)),
                      "string" === typeof d
                        ? (e[o] = parseFloat(d))
                        : Array.isArray(d) &&
                          c === mt &&
                          (e[o] = d.map(parseFloat));
                  } else
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (null === c || void 0 === c ? void 0 : c.transform) &&
                    (0 === l || 0 === d)
                      ? 0 === l
                        ? u.set(c.transform(l))
                        : (e[o] = f.transform(d))
                      : (a ||
                          ((i = (function (t) {
                            var e = [];
                            return (
                              na.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (a = !0)),
                        s.push(o),
                        (r[o] = void 0 !== r[o] ? r[o] : e[o]),
                        $i(u, d));
              }
            }),
            s.length)
          ) {
            var u = (function (t, e, n) {
              var r = e.measureViewportBox(),
                o = e.getInstance(),
                i = getComputedStyle(o),
                a = i.display,
                s = {
                  top: i.top,
                  left: i.left,
                  bottom: i.bottom,
                  right: i.right,
                  transform: i.transform,
                };
              "none" === a && e.setStaticValue("display", t.display || "block"),
                e.syncRender();
              var u = e.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var o = e.getValue(n);
                  $i(o, ra[n](r, s)), (t[n] = ra[n](u, i));
                }),
                t
              );
            })(e, t, s);
            return (
              i.length &&
                i.forEach(function (e) {
                  var n = f(e, 2),
                    r = n[0],
                    o = n[1];
                  t.getValue(r).set(o);
                }),
              t.syncRender(),
              { target: u, transitionEnd: r }
            );
          }
          return { target: e, transitionEnd: r };
        };
      function ia(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(Ki);
        })(e)
          ? oa(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var aa = function (t, e, n, r) {
        var o = (function (t, e, n) {
          var r,
            o = d(e, []),
            i = t.getInstance();
          if (!(i instanceof HTMLElement))
            return { target: o, transitionEnd: n };
          for (var a in (n && (n = l({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (pi(e)) {
              var n = vi(e, i);
              n && t.set(n);
            }
          }),
          o)) {
            var s = o[a];
            if (pi(s)) {
              var u = vi(s, i);
              u &&
                ((o[a] = u),
                n && ((null !== (r = n[a]) && void 0 !== r) || (n[a] = s)));
            }
          }
          return { target: o, transitionEnd: n };
        })(t, e, r);
        return ia(t, (e = o.target), n, (r = o.transitionEnd));
      };
      var sa = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (K(e)) {
              var n = Pr(e);
              return (n && n.default) || 0;
            }
            var r,
              o = ((r = t), window.getComputedStyle(r));
            return (nt(e) ? o.getPropertyValue(e) : o[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return To(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, r) {
            var o = n.transformValues;
            void 0 === r && (r = !0);
            var i = e.transition,
              a = e.transitionEnd,
              s = d(e, ["transition", "transitionEnd"]),
              u = (function (t, e, n) {
                var r,
                  o,
                  i = {};
                for (var a in t)
                  i[a] =
                    null !== (r = Yr(a, e)) && void 0 !== r
                      ? r
                      : null === (o = n.getValue(a)) || void 0 === o
                      ? void 0
                      : o.get();
                return i;
              })(s, i || {}, t);
            if ((o && (a && (a = o(a)), s && (s = o(s)), u && (u = o(u))), r)) {
              !(function (t, e, n) {
                var r,
                  o,
                  i,
                  a,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  u = s.length;
                if (u)
                  for (var c = 0; c < u; c++) {
                    var l = s[c],
                      d = e[l],
                      f = null;
                    Array.isArray(d) && (f = d[0]),
                      null === f &&
                        (f =
                          null !==
                            (o =
                              null !== (r = n[l]) && void 0 !== r
                                ? r
                                : t.readValue(l)) && void 0 !== o
                            ? o
                            : e[l]),
                      void 0 !== f &&
                        null !== f &&
                        ("string" === typeof f && /^\-?\d*\.?\d+$/.test(f)
                          ? (f = parseFloat(f))
                          : !Wr(f) && un.test(d) && (f = Tr(l, d)),
                        t.addValue(l, Ir(f)),
                        (null !== (i = (a = n)[l]) && void 0 !== i) ||
                          (a[l] = f),
                        t.setBaseTarget(l, f));
                  }
              })(t, s, u);
              var c = aa(t, s, u, a);
              (a = c.transitionEnd), (s = c.target);
            }
            return l({ transition: i, transitionEnd: a }, s);
          },
          scrapeMotionValuesFromProps: qt,
          build: function (t, e, n, r, o, i, a) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden");
            var s = r.isEnabled && o.isHydrated;
            St(
              e,
              n,
              r,
              o,
              i,
              a.transformTemplate,
              s ? Ni : void 0,
              s ? Vi : void 0
            );
          },
          render: Ut,
        },
        ua = Hi(sa),
        ca = Hi(
          l(l({}, sa), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return K(e)
                ? (null === (n = Pr(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = Ht.has(e) ? e : Ft(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: Xt,
            build: function (t, e, n, r, o, i, a) {
              var s = r.isEnabled && o.isHydrated;
              Dt(
                e,
                n,
                r,
                o,
                i,
                a.transformTemplate,
                s ? Ni : void 0,
                s ? Vi : void 0
              );
            },
            render: Wt,
          })
        ),
        la = function (t, e) {
          return W(t)
            ? ca(e, { enableHardwareAcceleration: !1 })
            : ua(e, { enableHardwareAcceleration: !0 });
        },
        da = l(l(l(l({}, oo), Te), fi), Li),
        fa = U(function (t, e) {
          return (function (t, e, n, r) {
            var o = e.forwardMotionProps,
              i = void 0 !== o && o,
              a = W(t) ? Qt : ee;
            return l(l({}, a), {
              preloadedFeatures: n,
              useRender: It(i),
              createVisualElement: r,
              Component: t,
            });
          })(t, e, da, la);
        });
      var pa = n(4865),
        ma = n.n(pa);
      n(5261);
      function va(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ha(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? va(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : va(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      ma().configure({ showSpinner: !1 });
      var ga = function (t) {
        var e = t.Component,
          n = t.pageProps,
          r = (0, s.useRouter)();
        return (
          (0, a.useEffect)(
            function () {
              r.events.on("routeChangeStart", function () {
                ma().start();
              }),
                r.events.on("routeChangeComplete", function () {
                  ma().done();
                });
              var t = function (t) {
                window.gtag("config", "UA-115807499-1", { page_location: t });
              };
              return (
                r.events.on("routeChangeComplete", t),
                function () {
                  r.events.off("routeChangeComplete", t);
                }
              );
            },
            [r.events]
          ),
          (0, o.jsx)(i.default, {
            children: (0, o.jsx)(
              fa.div,
              {
                initial: "initial",
                animate: "animate",
                variants: {
                  initial: { opacity: 0.5 },
                  animate: { opacity: 1 },
                },
                children: (0, o.jsx)(e, ha({}, n)),
              },
              r.route
            ),
          })
        );
      };
    },
    3024: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return C;
          },
        });
      var r = n(6156),
        o = n(5893),
        i = n(5988),
        a = n(1163),
        s = n(9008),
        u = n(7294),
        c = n(1664),
        l = function () {
          var t = (0, u.useState)(""),
            e = t[0],
            n = t[1],
            r = (0, a.useRouter)(),
            s = r.locale;
          (0, u.useEffect)(
            function () {
              n(s);
            },
            [s]
          );
          var c = function (t) {
            var e = t;
            n(e), r.push(r.pathname, r.asPath, { locale: e });
          };
          return (0, o.jsxs)("div", {
            className: "jsx-3633508269 container-lang",
            children: [
              (0, o.jsx)("button", {
                onClick: function () {
                  return c("en");
                },
                className:
                  "jsx-3633508269 " +
                  "left lang-btn ".concat("en" === e ? "active" : ""),
                children: "EN",
              }),
              (0, o.jsx)("button", {
                onClick: function () {
                  return c("tr");
                },
                className:
                  "jsx-3633508269 " +
                  "right lang-btn ".concat("tr" === e ? "active" : ""),
                children: "TR",
              }),
              (0, o.jsx)(i.default, {
                id: "3633508269",
                children: [
                  ".container-lang.jsx-3633508269{position:fixed;right:24px;top:14px;z-index:2;}",
                  ".active.jsx-3633508269{font-weight:bold;opacity:1 !important;background-color:#cccccc;}",
                  ".lang-btn.jsx-3633508269{cursor:pointer;border:none;padding:8px;opacity:0.5;font-size:12px;}",
                  ".left.jsx-3633508269{border-top-left-radius:14px;border-bottom-left-radius:14px;}",
                  ".right.jsx-3633508269{border-top-right-radius:14px;border-bottom-right-radius:14px;}",
                ],
              }),
            ],
          });
        },
        d = function (t) {
          var e = t.title,
            n = t.slug,
            r = t.locale,
            a = t.router;
          return (0, o.jsxs)("div", {
            className: "jsx-2987862986",
            children: [
              (0, o.jsx)(c.default, {
                href: n,
                hrefLang: r,
                children: (0, o.jsx)("a", {
                  className:
                    "jsx-2987862986 " +
                    "menuButton ".concat(n === a.route ? "active" : ""),
                  children: e,
                }),
              }),
              (0, o.jsx)(i.default, {
                id: "2987862986",
                children: [
                  ".menuButton.jsx-2987862986{font-size:18px;display:inline-block;color:grey !important;-webkit-text-decoration:none;text-decoration:none;margin:10px 10px 0px;}",
                  ".menuButton.jsx-2987862986:hover{color:black !important;}",
                  ".active.jsx-2987862986{font-weight:bold;color:#3a3a3a !important;}",
                ],
              }),
            ],
          });
        },
        f = function (t) {
          var e = t.menuItems,
            n = t.router;
          return (0, o.jsxs)("div", {
            className: "jsx-3130897579 container-menu",
            children: [
              (0, o.jsx)("nav", {
                className: "jsx-3130897579 menu",
                children: e.map(function (t, e) {
                  return (0,
                  o.jsx)(d, { title: t.title, slug: t.slug, router: n }, e);
                }),
              }),
              (0, o.jsx)(i.default, {
                id: "3130897579",
                children: [
                  ".container-menu.jsx-3130897579{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                  ".menu.jsx-3130897579{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:24px;padding:1px 20px;border-radius:20px;background-color:white;position:absolute;height:50px;}",
                ],
              }),
            ],
          });
        },
        p = function (t) {
          var e = t.title,
            n = t.slug,
            r = t.locale,
            s = t.onClick,
            u = (0, a.useRouter)();
          return (0, o.jsxs)("div", {
            className: "jsx-110255043",
            children: [
              (0, o.jsx)(c.default, {
                href: n,
                hrefLang: r,
                children: (0, o.jsx)("a", {
                  onClick: s,
                  className:
                    "jsx-110255043 " +
                    "menuButtonMobile ".concat(n === u.route ? "active" : ""),
                  children: e,
                }),
              }),
              (0, o.jsx)(i.default, {
                id: "110255043",
                children: [
                  ".menuButtonMobile.jsx-110255043{display:block;border-bottom:1px solid silver;font-size:18px;padding:16px;}",
                  ".active.jsx-110255043{font-weight:bold;}",
                ],
              }),
            ],
          });
        };
      function m(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function v(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var h = function (t) {
        var e = t.menuItems,
          n = t.router,
          r = (0, u.useState)(""),
          a = r[0],
          s = r[1],
          c = (0, u.useState)(!1),
          l = c[0],
          d = c[1],
          f = n.locale;
        (0, u.useEffect)(
          function () {
            s(f),
              (window.onresize = function () {
                d(!1);
              });
          },
          [f]
        );
        var m = function (t) {
            var e = t;
            s(e), n.push(n.pathname, n.asPath, { locale: e });
          },
          h = function () {
            d(!l);
          };
        return (0, o.jsxs)("div", {
          className: "jsx-738701159",
          children: [
            (0, o.jsx)("img", {
              src: "/assets/icons/menu.png",
              alt: "menu",
              onClick: h,
              className: "jsx-738701159 menuIcon",
            }),
            (0, o.jsxs)("div", {
              className:
                "jsx-738701159 " +
                "container-menu-mobile ".concat(l ? "open" : "close"),
              children: [
                (0, o.jsx)("nav", {
                  className: "jsx-738701159",
                  children: e.map(function (t, e) {
                    return (0,
                    o.jsx)(p, v(v({ title: t.title, slug: t.slug }, n), {}, { onClick: h }), e);
                  }),
                }),
                (0, o.jsxs)("div", {
                  className: "jsx-738701159 mobileLanguageChanger",
                  children: [
                    (0, o.jsx)("button", {
                      onClick: function () {
                        return m("en");
                      },
                      className:
                        "jsx-738701159 " +
                        "mobileLanguageChangerButton ".concat(
                          "en" === a ? "active" : ""
                        ),
                      children: "EN",
                    }),
                    (0, o.jsx)("button", {
                      onClick: function () {
                        return m("tr");
                      },
                      className:
                        "jsx-738701159 " +
                        "mobileLanguageChangerButton ".concat(
                          "tr" === a ? "active" : ""
                        ),
                      children: "TR",
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)(i.default, {
              id: "738701159",
              children: [
                ".container-menu-mobile.jsx-738701159{-webkit-transition:0.2s ease-out;transition:0.2s ease-out;display:inline-block;background-color:white;width:240px;height:calc(100vh - 60px);position:fixed;top:60px;bottom:36px;right:0;border-left:10px solid #f7f7f7;border-top:1px solid #f7f7f7;padding:10px;}",
                ".open.jsx-738701159{right:0px;opacity:0.9;}",
                ".close.jsx-738701159{right:-240px;opacity:0.5;}",
                ".menuIcon.jsx-738701159{position:fixed;right:10px;top:14px;height:32px;z-index:90;}",
                ".menuIcon.jsx-738701159:hover{cursor:pointer;}",
                ".mobileLanguageChanger.jsx-738701159{position:absolute;bottom:20px;}",
                ".mobileLanguageChangerButton.jsx-738701159{background-color:white;border-radius:10px;border:1px solid silver;margin-left:8px;font-size:14px;padding:6px 10px;}",
                ".active.jsx-738701159{font-weight:bold;color:#3a3a3a !important;}",
              ],
            }),
          ],
        });
      };
      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function y(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return g(t);
          })(t) ||
          (function (t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" === typeof t) return g(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? g(t, e)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var x = n(1997),
        b = n(1298),
        w = function () {
          var t = "en" === (0, a.useRouter)().locale ? b.Z : x.Z,
            e = (0, u.useState)(0),
            n = e[0],
            r = e[1];
          return (
            (0, u.useEffect)(
              function () {
                var t = setInterval(function () {
                  r(n + 1), 4 == n && r(0);
                }, 3e3);
                return function () {
                  return clearInterval(t);
                };
              },
              [n]
            ),
            (0, o.jsxs)("div", {
              className: "jsx-1658230403 container-slider",
              children: [
                (0, o.jsxs)("div", {
                  className: "jsx-1658230403 sliderText",
                  children: [
                    (0, o.jsx)("div", {
                      dangerouslySetInnerHTML: { __html: t.commons.sliderText },
                      className: "jsx-1658230403",
                    }),
                    (0, o.jsx)("div", {
                      className: "jsx-1658230403 plus",
                      children: "+",
                    }),
                    (0, o.jsx)("div", {
                      className: "jsx-1658230403 textBox",
                      children: y(Array(5)).map(function (e, r) {
                        return (0,
                        o.jsx)("p", { className: "jsx-1658230403 " + ("loopTextItem " + (n === r ? "show" : "hide") || 0), children: t.commons["plus" + r] }, r);
                      }),
                    }),
                  ],
                }),
                (0, o.jsx)(i.default, {
                  id: "1658230403",
                  children: [
                    ".container-slider.jsx-1658230403{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:110px;}",
                    ".sliderText.jsx-1658230403{font-weight:600;font-size:28px;line-height:36px;color:white;height:110px;}",
                    ".plus.jsx-1658230403{float:left;margin-top:4px;}",
                    ".textBox.jsx-1658230403{background-color:rgba(255,255,255,0.8);height:40px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:4px;margin-left:24px;padding:4px 8px;}",
                    ".loopTextItem.jsx-1658230403{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:white;background-image:-webkit-linear-gradient( 330deg, rgb(0,228,216), rgb(132,3,255) );background-size:100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;-moz-background-clip:text;-moz-text-fill-color:transparent;}",
                    ".show.jsx-1658230403{opacity:1;white-space:nowrap;-webkit-transition:0.75s ease-out;transition:0.75s ease-out;}",
                    ".hide.jsx-1658230403{opacity:0;white-space:nowrap;display:table-column;-webkit-transition:0.75s ease-out;transition:0.75s ease-out;}",
                    "@media screen and (max-width:768px){.sliderText.jsx-1658230403{font-weight:400;font-size:24px;line-height:30px;color:white;padding-left:20px;}}",
                    "@-webkit-keyframes fade-jsx-1658230403{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}",
                    "@keyframes fade-jsx-1658230403{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}",
                  ],
                }),
              ],
            })
          );
        },
        j = function () {
          var t = (0, a.useRouter)(),
            e = (0, u.useState)([]),
            n = e[0],
            r = e[1];
          return (
            (0, u.useEffect)(
              function () {
                fetch(
                  ""
                    .concat("http://localhost:3000", "/api/")
                    .concat(t.locale, "/menu")
                )
                  .then(function (t) {
                    return t.json();
                  })
                  .then(function (t) {
                    r(t);
                  });
              },
              [t.locale]
            ),
            (0, o.jsxs)("div", {
              className: "jsx-4190643553 container-header",
              children: [
                (0, o.jsx)("div", {
                  className:
                    "jsx-4190643553 container-fluid shadow d-none d-lg-block header",
                  children: (0, o.jsxs)("div", {
                    className: "jsx-4190643553 row",
                    children: [
                      (0, o.jsx)("div", {
                        className: "jsx-4190643553 col",
                        children: (0, o.jsx)("div", {
                          className: "jsx-4190643553 brand",
                          children: (0, o.jsx)(c.default, {
                            href: "/",
                            children: (0, o.jsxs)("a", {
                              className: "jsx-4190643553",
                              children: [
                                (0, o.jsx)("img", {
                                  src: "/assets/ardic_180.png",
                                  alt: "",
                                  className: "jsx-4190643553 logo",
                                }),
                                (0, o.jsx)("img", {
                                  src: "/assets/ardic-tech.png",
                                  alt: "",
                                  className: "jsx-4190643553",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "jsx-4190643553 col",
                        children: (0, o.jsx)(f, { menuItems: n, router: t }),
                      }),
                      (0, o.jsx)("div", {
                        className: "jsx-4190643553 col",
                        children: (0, o.jsx)(l, {}),
                      }),
                    ],
                  }),
                }),
                (0, o.jsx)("div", {
                  className:
                    "jsx-4190643553 container-fluid d-lg-none d-xl-none header",
                  children: (0, o.jsxs)("div", {
                    className: "jsx-4190643553 row",
                    children: [
                      (0, o.jsx)("div", {
                        className: "jsx-4190643553 col mw-75 brand",
                        children: (0, o.jsx)(c.default, {
                          href: "/",
                          children: (0, o.jsxs)("a", {
                            className: "jsx-4190643553",
                            children: [
                              (0, o.jsx)("img", {
                                src: "/assets/ardic_180.png",
                                alt: "",
                                className: "jsx-4190643553 logo",
                              }),
                              (0, o.jsx)("img", {
                                src: "/assets/ardic-tech.png",
                                alt: "",
                                className: "jsx-4190643553",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "jsx-4190643553 col",
                        children: (0, o.jsx)(h, { menuItems: n, router: t }),
                      }),
                    ],
                  }),
                }),
                (0, o.jsx)(w, {}),
                (0, o.jsx)(i.default, {
                  id: "4190643553",
                  children: [
                    '.container-header.jsx-4190643553{width:100%;height:360px;background-image:url("/assets/header-background.jpg");background-position:center;background-repeat:no-repeat;background-size:cover;}',
                    ".header.jsx-4190643553{position:fixed;z-index:10;top:0px;left:0px;right:0px;background-color:white;}",
                    ".brand.jsx-4190643553{padding:14px;}",
                    ".logo.jsx-4190643553{height:32px;margin-right:10px;}",
                    '@media screen and (max-width:1024px){.container.jsx-4190643553{background-image:url("/assets/header-background-mobile.jpg");}}',
                  ],
                }),
              ],
            })
          );
        },
        S = function () {
          var t = (0, a.useRouter)(),
            e = (0, u.useState)(""),
            n = e[0],
            r = e[1],
            s = (0, u.useState)(""),
            l = s[0],
            d = s[1],
            f = (0, u.useState)([]),
            p = f[0],
            m = f[1];
          return (
            (0, u.useEffect)(
              function () {
                fetch(
                  ""
                    .concat("http://localhost:3000", "/api/")
                    .concat(t.locale, "/footer")
                )
                  .then(function (t) {
                    return t.json();
                  })
                  .then(function (t) {
                    r(t.copyright), d(t.powered), m(t.socialMedias);
                  });
              },
              [t.locale]
            ),
            (0, o.jsxs)("div", {
              className: "jsx-2702624293 container-footer",
              children: [
                (0, o.jsx)("div", {
                  className: "jsx-2702624293 container-fluid",
                  children: (0, o.jsxs)("div", {
                    className: "jsx-2702624293 row",
                    children: [
                      (0, o.jsxs)("div", {
                        className:
                          "jsx-2702624293 col-4 col-sm-4 col-md-5 col-lg-6 col-xl-6 copyright",
                        children: [
                          n,
                          " ",
                          (0, o.jsx)("span", {
                            className: "jsx-2702624293 powered",
                            children: l,
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className:
                          "jsx-2702624293 col-8 col-sm-8 col-md-7 col-lg-6 col-xl-6",
                        children: (0, o.jsx)("div", {
                          className: "jsx-2702624293 socials",
                          children: p.map(function (t, e) {
                            return (0,
                            o.jsx)(c.default, { href: t.link, children: (0, o.jsx)("a", { target: "_blank", rel: "noopener noreferrer", className: "jsx-2702624293", children: (0, o.jsx)("img", { src: "/assets/socials/".concat(t.icon, ".png"), alt: t.name, className: "jsx-2702624293 socialIcons" }) }) }, e);
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, o.jsx)(i.default, {
                  id: "2702624293",
                  children: [
                    ".container-footer.jsx-2702624293{position:-webkit-sticky;position:sticky;bottom:0;left:0;right:0;padding:8px;font-size:14px;height:36px;color:rgb(121,121,121);background-color:whitesmoke;border-top:1px solid silver;}",
                    ".socials.jsx-2702624293{text-align:right;}",
                    ".socialIcons.jsx-2702624293{opacity:0.5;width:18px;height:18px;margin-left:12px;}",
                    ".socialIcons.jsx-2702624293:hover{cursor:pointer;opacity:0.8;}",
                    "@media screen and (max-width:768px){.container-footer.jsx-2702624293{height:64px;font-size:12px;padding:12px;border-bottom:10px solid silver;}.copyright.jsx-2702624293{padding-top:6px;}.socialIcons.jsx-2702624293{opacity:0.5;width:30px;height:30px;margin-left:16px;}}",
                    "@media screen and (max-width:920px){.powered.jsx-2702624293{display:none;}}",
                  ],
                }),
              ],
            })
          );
        },
        k = function () {
          var t = (0, a.useRouter)(),
            e = (0, u.useState)({}),
            n = e[0],
            r = e[1],
            s = (0, u.useState)({}),
            l = s[0],
            d = s[1],
            f = (0, u.useState)(!1),
            p = f[0],
            m = f[1];
          return (
            (0, u.useEffect)(
              function () {
                fetch(
                  ""
                    .concat("http://localhost:3000", "/api/")
                    .concat(t.locale, "/brands")
                )
                  .then(function (t) {
                    return t.json();
                  })
                  .then(function (t) {
                    r(t.left), d(t.right), m(!0);
                  });
              },
              [t.locale]
            ),
            p &&
              (0, o.jsxs)("div", {
                className: "jsx-3897846115 container-brand",
                children: [
                  (0, o.jsx)("div", {
                    className: "jsx-3897846115 brand",
                    children: (0, o.jsx)(c.default, {
                      href: n.slug,
                      children: (0, o.jsxs)("a", {
                        className: "jsx-3897846115",
                        children: [
                          (0, o.jsx)("img", {
                            src: "/assets/".concat(n.icon, ".jpg"),
                            alt: "",
                            className: "jsx-3897846115 brandLogo",
                          }),
                          (0, o.jsx)("img", {
                            src: "/assets/".concat(n.logo, ".png"),
                            alt: "",
                            className: "jsx-3897846115 brandName1",
                          }),
                          (0, o.jsx)("p", {
                            className: "jsx-3897846115 brandText",
                            children: n.summary,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: "jsx-3897846115 brand",
                    children: (0, o.jsx)(c.default, {
                      className: "brand",
                      href: l.slug,
                      children: (0, o.jsxs)("a", {
                        className: "jsx-3897846115",
                        children: [
                          (0, o.jsx)("img", {
                            src: "/assets/".concat(l.icon, ".jpg"),
                            alt: "",
                            className: "jsx-3897846115 brandLogo",
                          }),
                          (0, o.jsx)("img", {
                            src: "/assets/".concat(l.logo, ".png"),
                            alt: "",
                            className: "jsx-3897846115 brandName2",
                          }),
                          (0, o.jsx)("p", {
                            className: "jsx-3897846115 brandText",
                            children: l.summary,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, o.jsx)(i.default, {
                    id: "3897846115",
                    children: [
                      ".container-brand.jsx-3897846115{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:-100px;-webkit-filter:drop-shadow(2px 2px 8px white);filter:drop-shadow(2px 2px 8px white);opacity:0.9;overflow:hidden;height:100px;}",
                      ".brand.jsx-3897846115{width:300px;margin-left:5px;margin-right:5px;border-bottom:none;height:100px;background-color:white;padding:16px;overflow:hidden;}",
                      ".brand.jsx-3897846115:hover{margin-top:4px;-webkit-transition:0.1s;transition:0.1s;}",
                      ".brandLogo.jsx-3897846115{margin:-30px;}",
                      ".brandName1.jsx-3897846115{float:right;height:22px;}",
                      ".brandName2.jsx-3897846115{float:right;height:29px;}",
                      ".brandText.jsx-3897846115{float:right;width:180px;text-align:right;margin-top:-36px;line-height:20px;font-size:14px;}",
                      "@media screen and (max-width:640px){.container.jsx-3897846115{margin-right:10px;margin-left:10px;}.brand.jsx-3897846115{width:50%;height:100px;text-align:center;padding:4px;margin-left:0px;margin-right:0px;}.brand.jsx-3897846115:nth-child(1){border-right:1px solid rgba(0,0,0,0.2);}.brand.jsx-3897846115:nth-child(2){border-left:1px solid rgba(0,0,0,0.2);}.brandLogo.jsx-3897846115{height:80px;margin:-10px;}.brandName1.jsx-3897846115{display:none;}.brandName2.jsx-3897846115{display:none;}.brandText.jsx-3897846115{float:none;width:auto;text-align:center;margin-top:0px;font-size:14px;line-height:14px;}.container.jsx-3897846115{height:110px;opacity:1;}}",
                    ],
                  }),
                ],
              })
          );
        },
        A = n(5675),
        P = function () {
          var t = (0, u.useState)(0),
            e = t[0],
            n = t[1],
            r = (0, u.useState)(0),
            a = r[0],
            s = r[1];
          (0, u.useEffect)(function () {
            return (
              window.addEventListener("resize", c),
              window.addEventListener("scroll", c),
              function () {
                window.removeEventListener("resize", c),
                  window.addEventListener("scroll", c);
              }
            );
          }, []);
          var c = function () {
            window && (n(window.innerHeight), s(window.scrollY));
          };
          return 0 != e && 0 != a && e / a < 2
            ? (0, o.jsxs)("div", {
                onClick: function () {
                  window.scrollTo(0, 0);
                },
                className: "jsx-2105532480 container-upward",
                children: [
                  (0, o.jsx)(A.default, {
                    src: "/assets/icons/upward-arrow.png",
                    width: "48",
                    height: "48",
                    alt: "up",
                  }),
                  (0, o.jsx)(i.default, {
                    id: "2105532480",
                    children: [
                      ".container-upward.jsx-2105532480{position:fixed;z-index:99;bottom:50px;right:30px;width:52px;height:52px;padding:8px;opacity:0.5;background-color:black;}",
                      ".container-upward.jsx-2105532480:hover{cursor:pointer;opacity:0.7;bottom:70px;-webkit-transition:0.2s;transition:0.2s;}",
                      "@media screen and (max-width:1024px){.container-upward.jsx-2105532480{bottom:50px;right:30px;width:44px;height:44px;padding:6px;}}",
                      "@media screen and (max-width:768px){.container-upward.jsx-2105532480{display:none;}}",
                    ],
                  }),
                ],
              })
            : null;
        };
      function T(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function E(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? T(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var C = function (t) {
        var e,
          n,
          r,
          u,
          c = t.children,
          l = (0, a.useRouter)(),
          d = "en" === l.locale ? b.Z : x.Z;
        return (0, o.jsxs)("div", {
          className: "jsx-1567705100 content",
          children: [
            (0, o.jsxs)(s.default, {
              children: [
                (0, o.jsx)("title", {
                  className: "jsx-1567705100",
                  children: "ARDICTECH",
                }),
                (0, o.jsx)("meta", {
                  name: "description",
                  content: "ARDIC",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("meta", {
                  name: "robots",
                  content: "index, follow",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("meta", {
                  name: "distribution",
                  content: "global",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("meta", {
                  name: "author",
                  content: "ARDICTECH",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("meta", {
                  name: "robots",
                  content: "noindex,nofollow",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "57x57",
                  href: "/favicons/apple-icon-57x57.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "60x60",
                  href: "/favicons/apple-icon-60x60.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "72x72",
                  href: "/favicons/apple-icon-72x72.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "76x76",
                  href: "/favicons/apple-icon-76x76.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "114x114",
                  href: "/favicons/apple-icon-114x114.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "120x120",
                  href: "/favicons/apple-icon-120x120.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "144x144",
                  href: "/favicons/apple-icon-144x144.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "152x152",
                  href: "/favicons/apple-icon-152x152.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "180x180",
                  href: "/favicons/apple-icon-180x180.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "192x192",
                  href: "/favicons/android-icon-192x192.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "32x32",
                  href: "/favicons/favicon-32x32.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "96x96",
                  href: "/favicons/favicon-96x96.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "16x16",
                  href: "/favicons/favicon-16x16.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("link", {
                  rel: "manifest",
                  href: "/favicons/manifest.json",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("meta", {
                  name: "msapplication-TileColor",
                  content: "#ffffff",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("meta", {
                  name: "msapplication-TileImage",
                  content: "/ms-icon-144x144.png",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("meta", {
                  name: "theme-color",
                  content: "#ffffff",
                  className: "jsx-1567705100",
                }),
                (0, o.jsx)("meta", {
                  name: "viewport",
                  content:
                    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover",
                  className: "jsx-1567705100",
                }),
              ],
            }),
            "_404" !==
            (null === c || void 0 === c || null === (e = c.type) || void 0 === e
              ? void 0
              : e.name)
              ? (0, o.jsx)(j, E(E({}, l), {}, { t: d }))
              : null,
            "_404" !==
            (null === c || void 0 === c || null === (n = c.type) || void 0 === n
              ? void 0
              : n.name)
              ? (0, o.jsx)(k, E(E({}, l), {}, { t: d }))
              : null,
            c,
            "_404" !==
            (null === c || void 0 === c || null === (r = c.type) || void 0 === r
              ? void 0
              : r.name)
              ? (0, o.jsx)(P, E(E({}, l), {}, { t: d }))
              : null,
            "_404" !==
            (null === c || void 0 === c || null === (u = c.type) || void 0 === u
              ? void 0
              : u.name)
              ? (0, o.jsx)(S, E(E({}, l), {}, { t: d }))
              : null,
            (0, o.jsx)(i.default, {
              id: "1567705100",
              children: [
                "html,body{padding:0;margin:0;font-family:Arial,sans-serif;background-color:whitesmoke;overflow-x:hidden;}",
                ":root{--title-color:rgb(50,50,50);--footer-color:rgb(88,88,88);--main-color:#785de8;--button-degree-background:-webkit-linear-gradient( 330deg, #5263f1, #2ae7d8 );}",
                ".btn-smooth{background-color:#627583;border-radius:6px !important;color:white !important;font-size:15px !important;padding:6px 10px !important;}",
                ".btn-smooth:hover{opacity:0.8;}",
                ".btn{border-radius:20px;box-shadow:0px 10px 30px 0px rgb(0 0 0 / 10%);-webkit-transition:opacity 0.2s ease,box-shadow 0.2s ease;transition:opacity 0.2s ease,box-shadow 0.2s ease;width:auto;padding:16px 20px;background:var(--button-degree-background);color:white;font-weight:bold;text-align:center;}",
                ".btn:hover{cursor:pointer;box-shadow:0px 0px 10px 0px rgb(0 0 0 / 10%);}",
                "a,a:hover,a:visited,a:active{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",
                ".page-box{background-color:white;padding:20px;border-top:6px solid #aa03ff;-webkit-filter:drop-shadow(0px 0px 10px silver);filter:drop-shadow(0px 0px 10px silver);}",
                ".overflow-hidden{overflow:hidden;}",
                ".icons{float:left;margin-right:6px;}",
                ".mw-50px{max-width:50px;}",
                ".mw-75{min-width:75%;}",
                ".page-sub-title{background-color:#454545;padding:6px 20px;font-size:18px;color:#ffffff;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-bottom:20px;margin-left:-20px;border-top-right-radius:6px;border-bottom-right-radius:6px;}",
                "h1{font-weight:800;margin:20px 0px !important;}",
                "h4{font-weight:600;font-size:22px;margin-top:20px;margin-bottom:10px;}",
                "h5{font-weight:bolder;font-size:19px;}",
                ".card-text{margin-bottom:0px !important;}",
                ".alert{padding:6px 10px !important;}",
                ".shadow{-webkit-filter:drop-shadow(0px 0px 6px rgba(0,0,0,0.5));filter:drop-shadow(0px 0px 6px rgba(0,0,0,0.5));}",
                ".section-title{margin-left:-40px;padding-left:10px;background-color:white;font-weight:bolder;border-bottom:1px solid #e4e4e4;padding:10px;text-align:left !important;text-align:center;color:#444444;font-size:18px;}",
                ".link{background-color:#e8e8e8;border:none;border-radius:4px;padding:4px 10px;font-size:14px;color:black;}",
                ".link:hover{-webkit-transition:0.2s;transition:0.2s;background-color:#848484;color:white;}",
                ".card img:nth-child(1):hover{-webkit-transition:0.2s;transition:0.2s;-webkit-filter:saturate(0.5);filter:saturate(0.5);}",
                ".card{-webkit-transition:0.2s;transition:0.2s;overflow:hidden !important;}",
                ".p0{padding:0px !important;}",
                ".pt-10{padding-top:10px;}",
                ".pl-0{padding-left:0px !important;}",
                ".mb-20{margin-bottom:20px;}",
                ".mt-10{margin-top:10px;}",
                ".max-width-100per{max-width:100%;}",
                "label{margin-top:10px;margin-bottom:4px;}",
                ".pointer{cursor:pointer;}",
                ".pointer-fit:hover{cursor:pointer !important;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;opacity:0.7;}",
                ".fit-content{width:-webkit-fit-content !important;width:-moz-fit-content !important;width:fit-content !important;}",
                "@media screen and (max-width:768px){.section-title{font-weight:bolder;padding:10px;text-align:center !important;background-color:whitesmoke;color:#444444;font-size:18px;font-weight:100;margin:-20px;margin-bottom:3px;}}",
                "@media screen and (max-width:420px){body{-webkit-transition:0.5s;transition:0.5s;-webkit-filter:blur(10px);filter:blur(10px);pointer-events:none;position:fixed;}}",
                "@media screen and (max-width:768px){.page-sub-title{font-size:16px;}}",
              ],
            }),
          ],
        });
      };
    },
    1780: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(8630);
        },
      ]);
    },
    6390: function () {},
    5261: function () {},
    5655: function (t, e) {
      "use strict";
      (e.__esModule = !0), (e.imageConfigDefault = e.VALID_LOADERS = void 0);
      e.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai"];
      e.imageConfigDefault = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        domains: [],
        disableStaticImages: !1,
      };
    },
    9008: function (t, e, n) {
      t.exports = n(2775);
    },
    5675: function (t, e, n) {
      t.exports = n(9917);
    },
    1664: function (t, e, n) {
      t.exports = n(2167);
    },
    1163: function (t, e, n) {
      t.exports = n(4651);
    },
    4865: function (t, e, n) {
      var r, o;
      void 0 ===
        (o =
          "function" ===
          typeof (r = function () {
            var t = { version: "0.2.0" },
              e = (t.settings = {
                minimum: 0.08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: 0.02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template:
                  '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
              });
            function n(t, e, n) {
              return t < e ? e : t > n ? n : t;
            }
            function r(t) {
              return 100 * (-1 + t);
            }
            function o(t, n, o) {
              var i;
              return (
                ((i =
                  "translate3d" === e.positionUsing
                    ? { transform: "translate3d(" + r(t) + "%,0,0)" }
                    : "translate" === e.positionUsing
                    ? { transform: "translate(" + r(t) + "%,0)" }
                    : { "margin-left": r(t) + "%" }).transition =
                  "all " + n + "ms " + o),
                i
              );
            }
            (t.configure = function (t) {
              var n, r;
              for (n in t)
                void 0 !== (r = t[n]) && t.hasOwnProperty(n) && (e[n] = r);
              return this;
            }),
              (t.status = null),
              (t.set = function (r) {
                var s = t.isStarted();
                (r = n(r, e.minimum, 1)), (t.status = 1 === r ? null : r);
                var u = t.render(!s),
                  c = u.querySelector(e.barSelector),
                  l = e.speed,
                  d = e.easing;
                return (
                  u.offsetWidth,
                  i(function (n) {
                    "" === e.positionUsing &&
                      (e.positionUsing = t.getPositioningCSS()),
                      a(c, o(r, l, d)),
                      1 === r
                        ? (a(u, { transition: "none", opacity: 1 }),
                          u.offsetWidth,
                          setTimeout(function () {
                            a(u, {
                              transition: "all " + l + "ms linear",
                              opacity: 0,
                            }),
                              setTimeout(function () {
                                t.remove(), n();
                              }, l);
                          }, l))
                        : setTimeout(n, l);
                  }),
                  this
                );
              }),
              (t.isStarted = function () {
                return "number" === typeof t.status;
              }),
              (t.start = function () {
                t.status || t.set(0);
                var n = function () {
                  setTimeout(function () {
                    t.status && (t.trickle(), n());
                  }, e.trickleSpeed);
                };
                return e.trickle && n(), this;
              }),
              (t.done = function (e) {
                return e || t.status
                  ? t.inc(0.3 + 0.5 * Math.random()).set(1)
                  : this;
              }),
              (t.inc = function (e) {
                var r = t.status;
                return r
                  ? ("number" !== typeof e &&
                      (e = (1 - r) * n(Math.random() * r, 0.1, 0.95)),
                    (r = n(r + e, 0, 0.994)),
                    t.set(r))
                  : t.start();
              }),
              (t.trickle = function () {
                return t.inc(Math.random() * e.trickleRate);
              }),
              (function () {
                var e = 0,
                  n = 0;
                t.promise = function (r) {
                  return r && "resolved" !== r.state()
                    ? (0 === n && t.start(),
                      e++,
                      n++,
                      r.always(function () {
                        0 === --n ? ((e = 0), t.done()) : t.set((e - n) / e);
                      }),
                      this)
                    : this;
                };
              })(),
              (t.render = function (n) {
                if (t.isRendered()) return document.getElementById("nprogress");
                u(document.documentElement, "nprogress-busy");
                var o = document.createElement("div");
                (o.id = "nprogress"), (o.innerHTML = e.template);
                var i,
                  s = o.querySelector(e.barSelector),
                  c = n ? "-100" : r(t.status || 0),
                  l = document.querySelector(e.parent);
                return (
                  a(s, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + c + "%,0,0)",
                  }),
                  e.showSpinner ||
                    ((i = o.querySelector(e.spinnerSelector)) && d(i)),
                  l != document.body && u(l, "nprogress-custom-parent"),
                  l.appendChild(o),
                  o
                );
              }),
              (t.remove = function () {
                c(document.documentElement, "nprogress-busy"),
                  c(
                    document.querySelector(e.parent),
                    "nprogress-custom-parent"
                  );
                var t = document.getElementById("nprogress");
                t && d(t);
              }),
              (t.isRendered = function () {
                return !!document.getElementById("nprogress");
              }),
              (t.getPositioningCSS = function () {
                var t = document.body.style,
                  e =
                    "WebkitTransform" in t
                      ? "Webkit"
                      : "MozTransform" in t
                      ? "Moz"
                      : "msTransform" in t
                      ? "ms"
                      : "OTransform" in t
                      ? "O"
                      : "";
                return e + "Perspective" in t
                  ? "translate3d"
                  : e + "Transform" in t
                  ? "translate"
                  : "margin";
              });
            var i = (function () {
                var t = [];
                function e() {
                  var n = t.shift();
                  n && n(e);
                }
                return function (n) {
                  t.push(n), 1 == t.length && e();
                };
              })(),
              a = (function () {
                var t = ["Webkit", "O", "Moz", "ms"],
                  e = {};
                function n(t) {
                  return t
                    .replace(/^-ms-/, "ms-")
                    .replace(/-([\da-z])/gi, function (t, e) {
                      return e.toUpperCase();
                    });
                }
                function r(e) {
                  var n = document.body.style;
                  if (e in n) return e;
                  for (
                    var r,
                      o = t.length,
                      i = e.charAt(0).toUpperCase() + e.slice(1);
                    o--;

                  )
                    if ((r = t[o] + i) in n) return r;
                  return e;
                }
                function o(t) {
                  return (t = n(t)), e[t] || (e[t] = r(t));
                }
                function i(t, e, n) {
                  (e = o(e)), (t.style[e] = n);
                }
                return function (t, e) {
                  var n,
                    r,
                    o = arguments;
                  if (2 == o.length)
                    for (n in e)
                      void 0 !== (r = e[n]) &&
                        e.hasOwnProperty(n) &&
                        i(t, n, r);
                  else i(t, o[1], o[2]);
                };
              })();
            function s(t, e) {
              return (
                ("string" == typeof t ? t : l(t)).indexOf(" " + e + " ") >= 0
              );
            }
            function u(t, e) {
              var n = l(t),
                r = n + e;
              s(n, e) || (t.className = r.substring(1));
            }
            function c(t, e) {
              var n,
                r = l(t);
              s(t, e) &&
                ((n = r.replace(" " + e + " ", " ")),
                (t.className = n.substring(1, n.length - 1)));
            }
            function l(t) {
              return (" " + (t.className || "") + " ").replace(/\s+/gi, " ");
            }
            function d(t) {
              t && t.parentNode && t.parentNode.removeChild(t);
            }
            return t;
          })
            ? r.call(e, n, e, t)
            : r) || (t.exports = o);
    },
    4155: function (t) {
      var e,
        n,
        r = (t.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === o || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (n) {
          try {
            return e.call(null, t, 0);
          } catch (n) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" === typeof setTimeout ? setTimeout : o;
        } catch (t) {
          e = o;
        }
        try {
          n = "function" === typeof clearTimeout ? clearTimeout : i;
        } catch (t) {
          n = i;
        }
      })();
      var s,
        u = [],
        c = !1,
        l = -1;
      function d() {
        c &&
          s &&
          ((c = !1), s.length ? (u = s.concat(u)) : (l = -1), u.length && f());
      }
      function f() {
        if (!c) {
          var t = a(d);
          c = !0;
          for (var e = u.length; e; ) {
            for (s = u, u = []; ++l < e; ) s && s[l].run();
            (l = -1), (e = u.length);
          }
          (s = null),
            (c = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === i || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function m() {}
      (r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new p(t, e)), 1 !== u.length || c || a(f);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = m),
        (r.addListener = m),
        (r.once = m),
        (r.off = m),
        (r.removeListener = m),
        (r.removeAllListeners = m),
        (r.emit = m),
        (r.prependListener = m),
        (r.prependOnceListener = m),
        (r.listeners = function (t) {
          return [];
        }),
        (r.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    9887: function (t) {
      "use strict";
      t.exports = function (t) {
        for (var e = 5381, n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
        return e >>> 0;
      };
    },
    4287: function (t, e, n) {
      "use strict";
      var r = n(4155);
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      (e.__esModule = !0), (e.default = void 0);
      var i = "undefined" !== typeof r && r.env && !0,
        a = function (t) {
          return "[object String]" === Object.prototype.toString.call(t);
        },
        s = (function () {
          function t(t) {
            var e = void 0 === t ? {} : t,
              n = e.name,
              r = void 0 === n ? "stylesheet" : n,
              o = e.optimizeForSpeed,
              s = void 0 === o ? i : o,
              c = e.isBrowser,
              l = void 0 === c ? "undefined" !== typeof window : c;
            u(a(r), "`name` must be a string"),
              (this._name = r),
              (this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}"),
              u("boolean" === typeof s, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = s),
              (this._isBrowser = l),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var d =
              this._isBrowser &&
              document.querySelector('meta[property="csp-nonce"]');
            this._nonce = d ? d.getAttribute("content") : null;
          }
          var e,
            n,
            r,
            s = t.prototype;
          return (
            (s.setOptimizeForSpeed = function (t) {
              u(
                "boolean" === typeof t,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                u(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = t),
                this.inject();
            }),
            (s.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (s.inject = function () {
              var t = this;
              if (
                (u(!this._injected, "sheet already injected"),
                (this._injected = !0),
                this._isBrowser && this._optimizeForSpeed)
              )
                return (
                  (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  void (
                    this._optimizeForSpeed ||
                    (i ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0))
                  )
                );
              this._serverSheet = {
                cssRules: [],
                insertRule: function (e, n) {
                  return (
                    "number" === typeof n
                      ? (t._serverSheet.cssRules[n] = { cssText: e })
                      : t._serverSheet.cssRules.push({ cssText: e }),
                    n
                  );
                },
                deleteRule: function (e) {
                  t._serverSheet.cssRules[e] = null;
                },
              };
            }),
            (s.getSheetForTag = function (t) {
              if (t.sheet) return t.sheet;
              for (var e = 0; e < document.styleSheets.length; e++)
                if (document.styleSheets[e].ownerNode === t)
                  return document.styleSheets[e];
            }),
            (s.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (s.insertRule = function (t, e) {
              if (
                (u(a(t), "`insertRule` accepts only strings"), !this._isBrowser)
              )
                return (
                  "number" !== typeof e &&
                    (e = this._serverSheet.cssRules.length),
                  this._serverSheet.insertRule(t, e),
                  this._rulesCount++
                );
              if (this._optimizeForSpeed) {
                var n = this.getSheet();
                "number" !== typeof e && (e = n.cssRules.length);
                try {
                  n.insertRule(t, e);
                } catch (o) {
                  return (
                    i ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          t +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var r = this._tags[e];
                this._tags.push(this.makeStyleTag(this._name, t, r));
              }
              return this._rulesCount++;
            }),
            (s.replaceRule = function (t, e) {
              if (this._optimizeForSpeed || !this._isBrowser) {
                var n = this._isBrowser ? this.getSheet() : this._serverSheet;
                if (
                  (e.trim() || (e = this._deletedRulePlaceholder),
                  !n.cssRules[t])
                )
                  return t;
                n.deleteRule(t);
                try {
                  n.insertRule(e, t);
                } catch (o) {
                  i ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        e +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    n.insertRule(this._deletedRulePlaceholder, t);
                }
              } else {
                var r = this._tags[t];
                u(r, "old rule at index `" + t + "` not found"),
                  (r.textContent = e);
              }
              return t;
            }),
            (s.deleteRule = function (t) {
              if (this._isBrowser)
                if (this._optimizeForSpeed) this.replaceRule(t, "");
                else {
                  var e = this._tags[t];
                  u(e, "rule at index `" + t + "` not found"),
                    e.parentNode.removeChild(e),
                    (this._tags[t] = null);
                }
              else this._serverSheet.deleteRule(t);
            }),
            (s.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                this._isBrowser
                  ? (this._tags.forEach(function (t) {
                      return t && t.parentNode.removeChild(t);
                    }),
                    (this._tags = []))
                  : (this._serverSheet.cssRules = []);
            }),
            (s.cssRules = function () {
              var t = this;
              return this._isBrowser
                ? this._tags.reduce(function (e, n) {
                    return (
                      n
                        ? (e = e.concat(
                            Array.prototype.map.call(
                              t.getSheetForTag(n).cssRules,
                              function (e) {
                                return e.cssText === t._deletedRulePlaceholder
                                  ? null
                                  : e;
                              }
                            )
                          ))
                        : e.push(null),
                      e
                    );
                  }, [])
                : this._serverSheet.cssRules;
            }),
            (s.makeStyleTag = function (t, e, n) {
              e &&
                u(a(e), "makeStyleTag acceps only strings as second parameter");
              var r = document.createElement("style");
              this._nonce && r.setAttribute("nonce", this._nonce),
                (r.type = "text/css"),
                r.setAttribute("data-" + t, ""),
                e && r.appendChild(document.createTextNode(e));
              var o = document.head || document.getElementsByTagName("head")[0];
              return n ? o.insertBefore(r, n) : o.appendChild(r), r;
            }),
            (e = t),
            (n = [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]) && o(e.prototype, n),
            r && o(e, r),
            t
          );
        })();
      function u(t, e) {
        if (!t) throw new Error("StyleSheet: " + e + ".");
      }
      e.default = s;
    },
    7884: function (t, e, n) {
      "use strict";
      e.default = void 0;
      var r,
        o = n(7294);
      var i = new (
          (r = n(8122)) && r.__esModule ? r : { default: r }
        ).default(),
        a = (function (t) {
          var e, n;
          function r(e) {
            var n;
            return ((n = t.call(this, e) || this).prevProps = {}), n;
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n),
            (r.dynamic = function (t) {
              return t
                .map(function (t) {
                  var e = t[0],
                    n = t[1];
                  return i.computeId(e, n);
                })
                .join(" ");
            });
          var o = r.prototype;
          return (
            (o.shouldComponentUpdate = function (t) {
              return (
                this.props.id !== t.id ||
                String(this.props.dynamic) !== String(t.dynamic)
              );
            }),
            (o.componentWillUnmount = function () {
              i.remove(this.props);
            }),
            (o.render = function () {
              return (
                this.shouldComponentUpdate(this.prevProps) &&
                  (this.prevProps.id && i.remove(this.prevProps),
                  i.add(this.props),
                  (this.prevProps = this.props)),
                null
              );
            }),
            r
          );
        })(o.Component);
      e.default = a;
    },
    8122: function (t, e, n) {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      var r = i(n(9887)),
        o = i(n(4287));
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var a = (function () {
        function t(t) {
          var e = void 0 === t ? {} : t,
            n = e.styleSheet,
            r = void 0 === n ? null : n,
            i = e.optimizeForSpeed,
            a = void 0 !== i && i,
            s = e.isBrowser,
            u = void 0 === s ? "undefined" !== typeof window : s;
          (this._sheet =
            r || new o.default({ name: "styled-jsx", optimizeForSpeed: a })),
            this._sheet.inject(),
            r &&
              "boolean" === typeof a &&
              (this._sheet.setOptimizeForSpeed(a),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._isBrowser = u),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}),
            (this.computeId = this.createComputeId()),
            (this.computeSelector = this.createComputeSelector());
        }
        var e = t.prototype;
        return (
          (e.add = function (t) {
            var e = this;
            void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(t.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              this._isBrowser &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(
                  function (t, e) {
                    return (t[e] = 0), t;
                  },
                  {}
                )));
            var n = this.getIdAndRules(t),
              r = n.styleId,
              o = n.rules;
            if (r in this._instancesCounts) this._instancesCounts[r] += 1;
            else {
              var i = o
                .map(function (t) {
                  return e._sheet.insertRule(t);
                })
                .filter(function (t) {
                  return -1 !== t;
                });
              (this._indices[r] = i), (this._instancesCounts[r] = 1);
            }
          }),
          (e.remove = function (t) {
            var e = this,
              n = this.getIdAndRules(t).styleId;
            if (
              ((function (t, e) {
                if (!t) throw new Error("StyleSheetRegistry: " + e + ".");
              })(n in this._instancesCounts, "styleId: `" + n + "` not found"),
              (this._instancesCounts[n] -= 1),
              this._instancesCounts[n] < 1)
            ) {
              var r = this._fromServer && this._fromServer[n];
              r
                ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                : (this._indices[n].forEach(function (t) {
                    return e._sheet.deleteRule(t);
                  }),
                  delete this._indices[n]),
                delete this._instancesCounts[n];
            }
          }),
          (e.update = function (t, e) {
            this.add(e), this.remove(t);
          }),
          (e.flush = function () {
            this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}),
              (this.computeId = this.createComputeId()),
              (this.computeSelector = this.createComputeSelector());
          }),
          (e.cssRules = function () {
            var t = this,
              e = this._fromServer
                ? Object.keys(this._fromServer).map(function (e) {
                    return [e, t._fromServer[e]];
                  })
                : [],
              n = this._sheet.cssRules();
            return e.concat(
              Object.keys(this._indices)
                .map(function (e) {
                  return [
                    e,
                    t._indices[e]
                      .map(function (t) {
                        return n[t].cssText;
                      })
                      .join(t._optimizeForSpeed ? "" : "\n"),
                  ];
                })
                .filter(function (t) {
                  return Boolean(t[1]);
                })
            );
          }),
          (e.createComputeId = function () {
            var t = {};
            return function (e, n) {
              if (!n) return "jsx-" + e;
              var o = String(n),
                i = e + o;
              return (
                t[i] || (t[i] = "jsx-" + (0, r.default)(e + "-" + o)), t[i]
              );
            };
          }),
          (e.createComputeSelector = function (t) {
            void 0 === t && (t = /__jsx-style-dynamic-selector/g);
            var e = {};
            return function (n, r) {
              this._isBrowser || (r = r.replace(/\/style/gi, "\\/style"));
              var o = n + r;
              return e[o] || (e[o] = r.replace(t, n)), e[o];
            };
          }),
          (e.getIdAndRules = function (t) {
            var e = this,
              n = t.children,
              r = t.dynamic,
              o = t.id;
            if (r) {
              var i = this.computeId(o, r);
              return {
                styleId: i,
                rules: Array.isArray(n)
                  ? n.map(function (t) {
                      return e.computeSelector(i, t);
                    })
                  : [this.computeSelector(i, n)],
              };
            }
            return {
              styleId: this.computeId(o),
              rules: Array.isArray(n) ? n : [n],
            };
          }),
          (e.selectFromServer = function () {
            return Array.prototype.slice
              .call(document.querySelectorAll('[id^="__jsx-"]'))
              .reduce(function (t, e) {
                return (t[e.id.slice(2)] = e), t;
              }, {});
          }),
          t
        );
      })();
      e.default = a;
    },
    5988: function (t, e, n) {
      t.exports = n(7884);
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(1780), e(4651);
    });
    var n = t.O();
    _N_E = n;
  },
]);
