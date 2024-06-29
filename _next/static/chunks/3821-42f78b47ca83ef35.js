(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3821], {
    63821: function(t, e, i) {
        var s, n;
        s = function() {
            var t = "xPYMx"
              , e = {}
              , i = function(t) {
                var e = document.createEvent("Event");
                e.initEvent("pym:" + t, !0, !0),
                document.dispatchEvent(e)
            }
              , s = function(t) {
                var e = new RegExp("[\\?&]" + t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)").exec(location.search);
                return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
            }
              , n = function(t, e) {
                if (("*" === e.xdomain || t.origin.match(new RegExp(e.xdomain + "$"))) && "string" === typeof t.data)
                    return !0
            }
              , a = function(t) {
                var e = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi;
                if (t.match(e))
                    return !0
            }
              , r = function(e, i, s) {
                return ["pym", e, i, s].join(t)
            }
              , o = function(e) {
                return new RegExp("^" + ["pym", e, "(\\S+)", "(.*)"].join(t) + "$")
            }
              , h = Date.now || function() {
                return (new Date).getTime()
            }
              , l = function(t, e, i) {
                var s, n, a, r = null, o = 0;
                i || (i = {});
                var l = function() {
                    o = !1 === i.leading ? 0 : h(),
                    r = null,
                    a = t.apply(s, n),
                    r || (s = n = null)
                };
                return function() {
                    var d = h();
                    o || !1 !== i.leading || (o = d);
                    var g = e - (d - o);
                    return s = this,
                    n = arguments,
                    g <= 0 || g > e ? (r && (clearTimeout(r),
                    r = null),
                    o = d,
                    a = t.apply(s, n),
                    r || (s = n = null)) : r || !1 === i.trailing || (r = setTimeout(l, g)),
                    a
                }
            }
              , d = function() {
                for (var t = e.autoInitInstances.length - 1; t >= 0; t--) {
                    var i = e.autoInitInstances[t];
                    i.el.getElementsByTagName("iframe").length && i.el.getElementsByTagName("iframe")[0].contentWindow || e.autoInitInstances.splice(t, 1)
                }
            };
            return e.autoInitInstances = [],
            e.autoInit = function(t) {
                var s = document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])")
                  , n = s.length;
                d();
                for (var a = 0; a < n; ++a) {
                    var r = s[a];
                    r.setAttribute("data-pym-auto-initialized", ""),
                    "" === r.id && (r.id = "pym-" + a + "-" + Math.random().toString(36).substr(2, 5));
                    var o = r.getAttribute("data-pym-src")
                      , h = {
                        xdomain: "string",
                        title: "string",
                        name: "string",
                        id: "string",
                        sandbox: "string",
                        allowfullscreen: "boolean",
                        parenturlparam: "string",
                        parenturlvalue: "string",
                        optionalparams: "boolean",
                        trackscroll: "boolean",
                        scrollwait: "number"
                    }
                      , l = {};
                    for (var g in h)
                        if (null !== r.getAttribute("data-pym-" + g))
                            switch (h[g]) {
                            case "boolean":
                                l[g] = !("false" === r.getAttribute("data-pym-" + g));
                                break;
                            case "string":
                                l[g] = r.getAttribute("data-pym-" + g);
                                break;
                            case "number":
                                var u = Number(r.getAttribute("data-pym-" + g));
                                isNaN(u) || (l[g] = u);
                                break;
                            default:
                                console.err("unrecognized attribute type")
                            }
                    var c = new e.Parent(r.id,o,l);
                    e.autoInitInstances.push(c)
                }
                return t || i("pym-initialized"),
                e.autoInitInstances
            }
            ,
            e.Parent = function(t, e, i) {
                for (var s in this.id = t,
                this.url = e,
                this.el = document.getElementById(t),
                this.iframe = null,
                this.settings = {
                    xdomain: "*",
                    optionalparams: !0,
                    parenturlparam: "parentUrl",
                    parenturlvalue: window.location.href,
                    trackscroll: !1,
                    scrollwait: 100
                },
                this.messageRegex = o(this.id),
                this.messageHandlers = {},
                i = i || {},
                this._constructIframe = function() {
                    var t = this.el.offsetWidth.toString();
                    this.iframe = document.createElement("iframe");
                    var e = ""
                      , i = this.url.indexOf("#");
                    for (i > -1 && (e = this.url.substring(i, this.url.length),
                    this.url = this.url.substring(0, i)),
                    this.url.indexOf("?") < 0 ? this.url += "?" : this.url += "&",
                    this.iframe.src = this.url + "initialWidth=" + t + "&childId=" + this.id,
                    this.settings.optionalparams && (this.iframe.src += "&parentTitle=" + encodeURIComponent(document.title),
                    this.iframe.src += "&" + this.settings.parenturlparam + "=" + encodeURIComponent(this.settings.parenturlvalue)),
                    this.iframe.src += e,
                    this.iframe.setAttribute("width", "100%"),
                    this.iframe.setAttribute("scrolling", "no"),
                    this.iframe.setAttribute("marginheight", "0"),
                    this.iframe.setAttribute("frameborder", "0"),
                    this.settings.title && this.iframe.setAttribute("title", this.settings.title),
                    void 0 !== this.settings.allowfullscreen && !1 !== this.settings.allowfullscreen && this.iframe.setAttribute("allowfullscreen", ""),
                    void 0 !== this.settings.sandbox && "string" === typeof this.settings.sandbox && this.iframe.setAttribute("sandbox", this.settings.sandbox),
                    this.settings.id && (document.getElementById(this.settings.id) || this.iframe.setAttribute("id", this.settings.id)),
                    this.settings.name && this.iframe.setAttribute("name", this.settings.name); this.el.firstChild; )
                        this.el.removeChild(this.el.firstChild);
                    this.el.appendChild(this.iframe),
                    window.addEventListener("resize", this._onResize),
                    this.settings.trackscroll && window.addEventListener("scroll", this._throttleOnScroll)
                }
                ,
                this._onResize = function() {
                    this.sendWidth(),
                    this.settings.trackscroll && this.sendViewportAndIFramePosition()
                }
                .bind(this),
                this._onScroll = function() {
                    this.sendViewportAndIFramePosition()
                }
                .bind(this),
                this._fire = function(t, e) {
                    if (t in this.messageHandlers)
                        for (var i = 0; i < this.messageHandlers[t].length; i++)
                            this.messageHandlers[t][i].call(this, e)
                }
                ,
                this.remove = function() {
                    window.removeEventListener("message", this._processMessage),
                    window.removeEventListener("resize", this._onResize),
                    this.el.removeChild(this.iframe),
                    d()
                }
                ,
                this._processMessage = function(t) {
                    if (n(t, this.settings) && "string" === typeof t.data) {
                        var e = t.data.match(this.messageRegex);
                        if (!e || 3 !== e.length)
                            return !1;
                        var i = e[1]
                          , s = e[2];
                        this._fire(i, s)
                    }
                }
                .bind(this),
                this._onHeightMessage = function(t) {
                    var e = parseInt(t);
                    this.iframe.setAttribute("height", e + "px")
                }
                ,
                this._onNavigateToMessage = function(t) {
                    a(t) && (document.location.href = t)
                }
                ,
                this._onScrollToChildPosMessage = function(t) {
                    var e = document.getElementById(this.id).getBoundingClientRect().top + window.pageYOffset + parseInt(t);
                    window.scrollTo(0, e)
                }
                ,
                this.onMessage = function(t, e) {
                    t in this.messageHandlers || (this.messageHandlers[t] = []),
                    this.messageHandlers[t].push(e)
                }
                ,
                this.sendMessage = function(t, e) {
                    this.el.getElementsByTagName("iframe").length && (this.el.getElementsByTagName("iframe")[0].contentWindow ? this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(r(this.id, t, e), "*") : this.remove())
                }
                ,
                this.sendWidth = function() {
                    var t = this.el.offsetWidth.toString();
                    this.sendMessage("width", t)
                }
                ,
                this.sendViewportAndIFramePosition = function() {
                    var t = this.iframe.getBoundingClientRect()
                      , e = (window.innerWidth || document.documentElement.clientWidth) + " " + (window.innerHeight || document.documentElement.clientHeight);
                    e += " " + t.top + " " + t.left,
                    e += " " + t.bottom + " " + t.right,
                    this.sendMessage("viewport-iframe-position", e)
                }
                ,
                i)
                    this.settings[s] = i[s];
                return this._throttleOnScroll = l(this._onScroll.bind(this), this.settings.scrollwait),
                this.onMessage("height", this._onHeightMessage),
                this.onMessage("navigateTo", this._onNavigateToMessage),
                this.onMessage("scrollToChildPos", this._onScrollToChildPosMessage),
                this.onMessage("parentPositionInfo", this.sendViewportAndIFramePosition),
                window.addEventListener("message", this._processMessage, !1),
                this._constructIframe(),
                this
            }
            ,
            e.Child = function(e) {
                this.parentWidth = null,
                this.id = null,
                this.parentTitle = null,
                this.parentUrl = null,
                this.settings = {
                    renderCallback: null,
                    xdomain: "*",
                    polling: 0,
                    parenturlparam: "parentUrl"
                },
                this.timerId = null,
                this.messageRegex = null,
                this.messageHandlers = {},
                e = e || {},
                this.onMessage = function(t, e) {
                    t in this.messageHandlers || (this.messageHandlers[t] = []),
                    this.messageHandlers[t].push(e)
                }
                ,
                this._fire = function(t, e) {
                    if (t in this.messageHandlers)
                        for (var i = 0; i < this.messageHandlers[t].length; i++)
                            this.messageHandlers[t][i].call(this, e)
                }
                ,
                this._processMessage = function(t) {
                    if (n(t, this.settings) && "string" === typeof t.data) {
                        var e = t.data.match(this.messageRegex);
                        if (e && 3 === e.length) {
                            var i = e[1]
                              , s = e[2];
                            this._fire(i, s)
                        }
                    }
                }
                .bind(this),
                this._onWidthMessage = function(t) {
                    var e = parseInt(t);
                    e !== this.parentWidth && (this.parentWidth = e,
                    this.settings.renderCallback && this.settings.renderCallback(e),
                    this.sendHeight())
                }
                ,
                this.sendMessage = function(t, e) {
                    window.parent.postMessage(r(this.id, t, e), "*")
                }
                ,
                this.sendHeight = function() {
                    var t = document.getElementsByTagName("body")[0].offsetHeight.toString();
                    return this.sendMessage("height", t),
                    t
                }
                .bind(this),
                this.getParentPositionInfo = function() {
                    this.sendMessage("parentPositionInfo")
                }
                ,
                this.scrollParentTo = function(t) {
                    this.sendMessage("navigateTo", "#" + t)
                }
                ,
                this.navigateParentTo = function(t) {
                    this.sendMessage("navigateTo", t)
                }
                ,
                this.scrollParentToChildEl = function(t) {
                    var e = document.getElementById(t).getBoundingClientRect().top + window.pageYOffset;
                    this.scrollParentToChildPos(e)
                }
                ,
                this.scrollParentToChildPos = function(t) {
                    this.sendMessage("scrollToChildPos", t.toString())
                }
                ;
                var a = function(t) {
                    var e, s = document.getElementsByTagName("html")[0], n = s.className;
                    try {
                        e = window.self !== window.top ? "embedded" : "not-embedded"
                    } catch (a) {
                        e = "embedded"
                    }
                    n.indexOf(e) < 0 && (s.className = n ? n + " " + e : e,
                    t && t(e),
                    i("marked-embedded"))
                };
                for (var o in this.remove = function() {
                    window.removeEventListener("message", this._processMessage),
                    this.timerId && clearInterval(this.timerId)
                }
                ,
                e)
                    this.settings[o] = e[o];
                this.id = s("childId") || e.id,
                this.messageRegex = new RegExp("^pym" + t + this.id + t + "(\\S+)" + t + "(.*)$");
                var h = parseInt(s("initialWidth"));
                return this.parentUrl = s(this.settings.parenturlparam),
                this.parentTitle = s("parentTitle"),
                this.onMessage("width", this._onWidthMessage),
                window.addEventListener("message", this._processMessage, !1),
                this.settings.renderCallback && this.settings.renderCallback(h),
                this.sendHeight(),
                this.settings.polling && (this.timerId = window.setInterval(this.sendHeight, this.settings.polling)),
                a(e.onMarkedEmbeddedStatus),
                this
            }
            ,
            "undefined" !== typeof document && e.autoInit(!0),
            e
        }
        ,
        void 0 === (n = "function" === typeof s ? s.call(e, i, e, t) : s) || (t.exports = n)
    }
}]);
