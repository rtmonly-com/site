/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Es(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const $e = {}, ir = [], Mt = () => {
}, Zm = () => !1, ko = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Cs = (e) => e.startsWith("onUpdate:"), tt = Object.assign, Ts = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Jm = Object.prototype.hasOwnProperty, Ae = (e, t) => Jm.call(e, t), le = Array.isArray, or = (e) => pi(e) === "[object Map]", _o = (e) => pi(e) === "[object Set]", Cl = (e) => pi(e) === "[object Date]", fe = (e) => typeof e == "function", Be = (e) => typeof e == "string", Ft = (e) => typeof e == "symbol", Le = (e) => e !== null && typeof e == "object", ku = (e) => (Le(e) || fe(e)) && fe(e.then) && fe(e.catch), _u = Object.prototype.toString, pi = (e) => _u.call(e), Qm = (e) => pi(e).slice(8, -1), Su = (e) => pi(e) === "[object Object]", Os = (e) => Be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vr = /* @__PURE__ */ Es(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), So = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ep = /-(\w)/g, At = So(
  (e) => e.replace(ep, (t, n) => n ? n.toUpperCase() : "")
), tp = /\B([A-Z])/g, Yn = So(
  (e) => e.replace(tp, "-$1").toLowerCase()
), Eo = So((e) => e.charAt(0).toUpperCase() + e.slice(1)), ia = So(
  (e) => e ? `on${Eo(e)}` : ""
), kn = (e, t) => !Object.is(e, t), Bi = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Eu = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, np = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, rp = (e) => {
  const t = Be(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Tl;
const Co = () => Tl || (Tl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hi(e) {
  if (le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Be(r) ? sp(r) : hi(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Be(e) || Le(e))
    return e;
}
const ip = /;(?![^(]*\))/g, op = /:([^]+)/, ap = /\/\*[^]*?\*\//g;
function sp(e) {
  const t = {};
  return e.replace(ap, "").split(ip).forEach((n) => {
    if (n) {
      const r = n.split(op);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ye(e) {
  let t = "";
  if (Be(e))
    t = e;
  else if (le(e))
    for (let n = 0; n < e.length; n++) {
      const r = ye(e[n]);
      r && (t += r + " ");
    }
  else if (Le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const lp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", dp = /* @__PURE__ */ Es(lp);
function Cu(e) {
  return !!e || e === "";
}
function up(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = To(e[r], t[r]);
  return n;
}
function To(e, t) {
  if (e === t) return !0;
  let n = Cl(e), r = Cl(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ft(e), r = Ft(t), n || r)
    return e === t;
  if (n = le(e), r = le(t), n || r)
    return n && r ? up(e, t) : !1;
  if (n = Le(e), r = Le(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !To(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Tu(e, t) {
  return e.findIndex((n) => To(n, t));
}
const Ou = (e) => !!(e && e.__v_isRef === !0), A = (e) => Be(e) ? e : e == null ? "" : le(e) || Le(e) && (e.toString === _u || !fe(e.toString)) ? Ou(e) ? A(e.value) : JSON.stringify(e, Au, 2) : String(e), Au = (e, t) => Ou(t) ? Au(e, t.value) : or(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[oa(r, o) + " =>"] = i, n),
    {}
  )
} : _o(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => oa(n))
} : Ft(t) ? oa(t) : Le(t) && !le(t) && !Su(t) ? String(t) : t, oa = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var cp = { NODE_ENV: "production" };
let _t;
class fp {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = _t, !t && _t && (this.index = (_t.scopes || (_t.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = _t;
      try {
        return _t = this, t();
      } finally {
        _t = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    _t = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    _t = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function mp() {
  return _t;
}
let Ne;
const aa = /* @__PURE__ */ new WeakSet();
class Du {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _t && _t.active && _t.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, aa.has(this) && (aa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Mu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ol(this), $u(this);
    const t = Ne, n = $t;
    Ne = this, $t = !0;
    try {
      return this.fn();
    } finally {
      Lu(this), Ne = t, $t = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ps(t);
      this.deps = this.depsTail = void 0, Ol(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? aa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Pa(this) && this.run();
  }
  get dirty() {
    return Pa(this);
  }
}
let Pu = 0, Ur, Br;
function Mu(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Br, Br = e;
    return;
  }
  e.next = Ur, Ur = e;
}
function As() {
  Pu++;
}
function Ds() {
  if (--Pu > 0)
    return;
  if (Br) {
    let t = Br;
    for (Br = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ur; ) {
    let t = Ur;
    for (Ur = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function $u(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Lu(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Ps(r), pp(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function Pa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Fu(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Fu(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Jr))
    return;
  e.globalVersion = Jr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Pa(e)) {
    e.flags &= -3;
    return;
  }
  const n = Ne, r = $t;
  Ne = e, $t = !0;
  try {
    $u(e);
    const i = e.fn(e._value);
    (t.version === 0 || kn(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ne = n, $t = r, Lu(e), e.flags &= -3;
  }
}
function Ps(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ps(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function pp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let $t = !0;
const Nu = [];
function sn() {
  Nu.push($t), $t = !1;
}
function ln() {
  const e = Nu.pop();
  $t = e === void 0 ? !0 : e;
}
function Ol(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ne;
    Ne = void 0;
    try {
      t();
    } finally {
      Ne = n;
    }
  }
}
let Jr = 0;
class hp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ms {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Ne || !$t || Ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ne)
      n = this.activeLink = new hp(Ne, this), Ne.deps ? (n.prevDep = Ne.depsTail, Ne.depsTail.nextDep = n, Ne.depsTail = n) : Ne.deps = Ne.depsTail = n, Iu(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ne.depsTail, n.nextDep = void 0, Ne.depsTail.nextDep = n, Ne.depsTail = n, Ne.deps === n && (Ne.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Jr++, this.notify(t);
  }
  notify(t) {
    As();
    try {
      cp.NODE_ENV;
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ds();
    }
  }
}
function Iu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Iu(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ma = /* @__PURE__ */ new WeakMap(), Bn = Symbol(
  ""
), $a = Symbol(
  ""
), Qr = Symbol(
  ""
);
function ot(e, t, n) {
  if ($t && Ne) {
    let r = Ma.get(e);
    r || Ma.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Ms()), i.map = r, i.key = n), i.track();
  }
}
function Jt(e, t, n, r, i, o) {
  const a = Ma.get(e);
  if (!a) {
    Jr++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (As(), t === "clear")
    a.forEach(s);
  else {
    const l = le(e), d = l && Os(n);
    if (l && n === "length") {
      const u = Number(r);
      a.forEach((c, f) => {
        (f === "length" || f === Qr || !Ft(f) && f >= u) && s(c);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && s(a.get(n)), d && s(a.get(Qr)), t) {
        case "add":
          l ? d && s(a.get("length")) : (s(a.get(Bn)), or(e) && s(a.get($a)));
          break;
        case "delete":
          l || (s(a.get(Bn)), or(e) && s(a.get($a)));
          break;
        case "set":
          or(e) && s(a.get(Bn));
          break;
      }
  }
  Ds();
}
function Xn(e) {
  const t = se(e);
  return t === e ? t : (ot(t, "iterate", Qr), Ot(e) ? t : t.map(at));
}
function Oo(e) {
  return ot(e = se(e), "iterate", Qr), e;
}
const bp = {
  __proto__: null,
  [Symbol.iterator]() {
    return sa(this, Symbol.iterator, at);
  },
  concat(...e) {
    return Xn(this).concat(
      ...e.map((t) => le(t) ? Xn(t) : t)
    );
  },
  entries() {
    return sa(this, "entries", (e) => (e[1] = at(e[1]), e));
  },
  every(e, t) {
    return Yt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Yt(this, "filter", e, t, (n) => n.map(at), arguments);
  },
  find(e, t) {
    return Yt(this, "find", e, t, at, arguments);
  },
  findIndex(e, t) {
    return Yt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Yt(this, "findLast", e, t, at, arguments);
  },
  findLastIndex(e, t) {
    return Yt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Yt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return la(this, "includes", e);
  },
  indexOf(...e) {
    return la(this, "indexOf", e);
  },
  join(e) {
    return Xn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return la(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Yt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Or(this, "pop");
  },
  push(...e) {
    return Or(this, "push", e);
  },
  reduce(e, ...t) {
    return Al(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Al(this, "reduceRight", e, t);
  },
  shift() {
    return Or(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Yt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Or(this, "splice", e);
  },
  toReversed() {
    return Xn(this).toReversed();
  },
  toSorted(e) {
    return Xn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Xn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Or(this, "unshift", e);
  },
  values() {
    return sa(this, "values", at);
  }
};
function sa(e, t, n) {
  const r = Oo(e), i = r[t]();
  return r !== e && !Ot(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.value && (o.value = n(o.value)), o;
  }), i;
}
const gp = Array.prototype;
function Yt(e, t, n, r, i, o) {
  const a = Oo(e), s = a !== e && !Ot(e), l = a[t];
  if (l !== gp[t]) {
    const c = l.apply(e, o);
    return s ? at(c) : c;
  }
  let d = n;
  a !== e && (s ? d = function(c, f) {
    return n.call(this, at(c), f, e);
  } : n.length > 2 && (d = function(c, f) {
    return n.call(this, c, f, e);
  }));
  const u = l.call(a, d, r);
  return s && i ? i(u) : u;
}
function Al(e, t, n, r) {
  const i = Oo(e);
  let o = n;
  return i !== e && (Ot(e) ? n.length > 3 && (o = function(a, s, l) {
    return n.call(this, a, s, l, e);
  }) : o = function(a, s, l) {
    return n.call(this, a, at(s), l, e);
  }), i[t](o, ...r);
}
function la(e, t, n) {
  const r = se(e);
  ot(r, "iterate", Qr);
  const i = r[t](...n);
  return (i === -1 || i === !1) && $s(n[0]) ? (n[0] = se(n[0]), r[t](...n)) : i;
}
function Or(e, t, n = []) {
  sn(), As();
  const r = se(e)[t].apply(e, n);
  return Ds(), ln(), r;
}
const vp = /* @__PURE__ */ Es("__proto__,__v_isRef,__isVue"), zu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ft)
);
function yp(e) {
  Ft(e) || (e = String(e));
  const t = se(this);
  return ot(t, "has", e), t.hasOwnProperty(e);
}
class Ru {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (i ? o ? qu : Hu : o ? Bu : Uu).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = le(t);
    if (!i) {
      let l;
      if (a && (l = bp[n]))
        return l;
      if (n === "hasOwnProperty")
        return yp;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Qe(t) ? t : r
    );
    return (Ft(n) ? zu.has(n) : vp(n)) || (i || ot(t, "get", n), o) ? s : Qe(s) ? a && Os(n) ? s : s.value : Le(s) ? i ? Wu(s) : yr(s) : s;
  }
}
class ju extends Ru {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Wn(o);
      if (!Ot(r) && !Wn(r) && (o = se(o), r = se(r)), !le(t) && Qe(o) && !Qe(r))
        return l ? !1 : (o.value = r, !0);
    }
    const a = le(t) && Os(n) ? Number(n) < t.length : Ae(t, n), s = Reflect.set(
      t,
      n,
      r,
      Qe(t) ? t : i
    );
    return t === se(i) && (a ? kn(r, o) && Jt(t, "set", n, r) : Jt(t, "add", n, r)), s;
  }
  deleteProperty(t, n) {
    const r = Ae(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Jt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ft(n) || !zu.has(n)) && ot(t, "has", n), r;
  }
  ownKeys(t) {
    return ot(
      t,
      "iterate",
      le(t) ? "length" : Bn
    ), Reflect.ownKeys(t);
  }
}
class Vu extends Ru {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const wp = /* @__PURE__ */ new ju(), xp = /* @__PURE__ */ new Vu(), kp = /* @__PURE__ */ new ju(!0), _p = /* @__PURE__ */ new Vu(!0), La = (e) => e, Si = (e) => Reflect.getPrototypeOf(e);
function Sp(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = se(i), a = or(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, d = i[e](...r), u = n ? La : t ? Fa : at;
    return !t && ot(
      o,
      "iterate",
      l ? $a : Bn
    ), {
      // iterator protocol
      next() {
        const { value: c, done: f } = d.next();
        return f ? { value: c, done: f } : {
          value: s ? [u(c[0]), u(c[1])] : u(c),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ei(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ep(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, a = se(o), s = se(i);
      e || (kn(i, s) && ot(a, "get", i), ot(a, "get", s));
      const { has: l } = Si(a), d = t ? La : e ? Fa : at;
      if (l.call(a, i))
        return d(o.get(i));
      if (l.call(a, s))
        return d(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ot(se(i), "iterate", Bn), Reflect.get(i, "size", i);
    },
    has(i) {
      const o = this.__v_raw, a = se(o), s = se(i);
      return e || (kn(i, s) && ot(a, "has", i), ot(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = se(s), d = t ? La : e ? Fa : at;
      return !e && ot(l, "iterate", Bn), s.forEach((u, c) => i.call(o, d(u), d(c), a));
    }
  };
  return tt(
    n,
    e ? {
      add: Ei("add"),
      set: Ei("set"),
      delete: Ei("delete"),
      clear: Ei("clear")
    } : {
      add(i) {
        !t && !Ot(i) && !Wn(i) && (i = se(i));
        const o = se(this);
        return Si(o).has.call(o, i) || (o.add(i), Jt(o, "add", i, i)), this;
      },
      set(i, o) {
        !t && !Ot(o) && !Wn(o) && (o = se(o));
        const a = se(this), { has: s, get: l } = Si(a);
        let d = s.call(a, i);
        d || (i = se(i), d = s.call(a, i));
        const u = l.call(a, i);
        return a.set(i, o), d ? kn(o, u) && Jt(a, "set", i, o) : Jt(a, "add", i, o), this;
      },
      delete(i) {
        const o = se(this), { has: a, get: s } = Si(o);
        let l = a.call(o, i);
        l || (i = se(i), l = a.call(o, i)), s && s.call(o, i);
        const d = o.delete(i);
        return l && Jt(o, "delete", i, void 0), d;
      },
      clear() {
        const i = se(this), o = i.size !== 0, a = i.clear();
        return o && Jt(
          i,
          "clear",
          void 0,
          void 0
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Sp(i, e, t);
  }), n;
}
function Ao(e, t) {
  const n = Ep(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    Ae(n, i) && i in r ? n : r,
    i,
    o
  );
}
const Cp = {
  get: /* @__PURE__ */ Ao(!1, !1)
}, Tp = {
  get: /* @__PURE__ */ Ao(!1, !0)
}, Op = {
  get: /* @__PURE__ */ Ao(!0, !1)
}, Ap = {
  get: /* @__PURE__ */ Ao(!0, !0)
}, Uu = /* @__PURE__ */ new WeakMap(), Bu = /* @__PURE__ */ new WeakMap(), Hu = /* @__PURE__ */ new WeakMap(), qu = /* @__PURE__ */ new WeakMap();
function Dp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Pp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Dp(Qm(e));
}
function yr(e) {
  return Wn(e) ? e : Do(
    e,
    !1,
    wp,
    Cp,
    Uu
  );
}
function Mp(e) {
  return Do(
    e,
    !1,
    kp,
    Tp,
    Bu
  );
}
function Wu(e) {
  return Do(
    e,
    !0,
    xp,
    Op,
    Hu
  );
}
function Ci(e) {
  return Do(
    e,
    !0,
    _p,
    Ap,
    qu
  );
}
function Do(e, t, n, r, i) {
  if (!Le(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const a = Pp(e);
  if (a === 0)
    return e;
  const s = new Proxy(
    e,
    a === 2 ? r : n
  );
  return i.set(e, s), s;
}
function ar(e) {
  return Wn(e) ? ar(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Wn(e) {
  return !!(e && e.__v_isReadonly);
}
function Ot(e) {
  return !!(e && e.__v_isShallow);
}
function $s(e) {
  return e ? !!e.__v_raw : !1;
}
function se(e) {
  const t = e && e.__v_raw;
  return t ? se(t) : e;
}
function $p(e) {
  return !Ae(e, "__v_skip") && Object.isExtensible(e) && Eu(e, "__v_skip", !0), e;
}
const at = (e) => Le(e) ? yr(e) : e, Fa = (e) => Le(e) ? Wu(e) : e;
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Z(e) {
  return Gu(e, !1);
}
function Na(e) {
  return Gu(e, !0);
}
function Gu(e, t) {
  return Qe(e) ? e : new Lp(e, t);
}
class Lp {
  constructor(t, n) {
    this.dep = new Ms(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : se(t), this._value = n ? t : at(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Ot(t) || Wn(t);
    t = r ? t : se(t), kn(t, n) && (this._rawValue = t, this._value = r ? t : at(t), this.dep.trigger());
  }
}
function ei(e) {
  return Qe(e) ? e.value : e;
}
const Fp = {
  get: (e, t, n) => t === "__v_raw" ? e : ei(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return Qe(i) && !Qe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ku(e) {
  return ar(e) ? e : new Proxy(e, Fp);
}
class Np {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ms(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Jr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ne !== this)
      return Mu(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Fu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ip(e, t, n = !1) {
  let r, i;
  return fe(e) ? r = e : (r = e.get, i = e.set), new Np(r, i, n);
}
const Ti = {}, Ji = /* @__PURE__ */ new WeakMap();
let In;
function zp(e, t = !1, n = In) {
  if (n) {
    let r = Ji.get(n);
    r || Ji.set(n, r = []), r.push(e);
  }
}
function Rp(e, t, n = $e) {
  const { immediate: r, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = n, d = (k) => i ? k : Ot(k) || i === !1 || i === 0 ? Qt(k, 1) : Qt(k);
  let u, c, f, m, h = !1, p = !1;
  if (Qe(e) ? (c = () => e.value, h = Ot(e)) : ar(e) ? (c = () => d(e), h = !0) : le(e) ? (p = !0, h = e.some((k) => ar(k) || Ot(k)), c = () => e.map((k) => {
    if (Qe(k))
      return k.value;
    if (ar(k))
      return d(k);
    if (fe(k))
      return l ? l(k, 2) : k();
  })) : fe(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
    if (f) {
      sn();
      try {
        f();
      } finally {
        ln();
      }
    }
    const k = In;
    In = u;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      In = k;
    }
  } : c = Mt, t && i) {
    const k = c, O = i === !0 ? 1 / 0 : i;
    c = () => Qt(k(), O);
  }
  const g = mp(), v = () => {
    u.stop(), g && g.active && Ts(g.effects, u);
  };
  if (o && t) {
    const k = t;
    t = (...O) => {
      k(...O), v();
    };
  }
  let y = p ? new Array(e.length).fill(Ti) : Ti;
  const w = (k) => {
    if (!(!(u.flags & 1) || !u.dirty && !k))
      if (t) {
        const O = u.run();
        if (i || h || (p ? O.some((D, N) => kn(D, y[N])) : kn(O, y))) {
          f && f();
          const D = In;
          In = u;
          try {
            const N = [
              O,
              // pass undefined as the old value when it's changed for the first time
              y === Ti ? void 0 : p && y[0] === Ti ? [] : y,
              m
            ];
            l ? l(t, 3, N) : (
              // @ts-expect-error
              t(...N)
            ), y = O;
          } finally {
            In = D;
          }
        }
      } else
        u.run();
  };
  return s && s(w), u = new Du(c), u.scheduler = a ? () => a(w, !1) : w, m = (k) => zp(k, !1, u), f = u.onStop = () => {
    const k = Ji.get(u);
    if (k) {
      if (l)
        l(k, 4);
      else
        for (const O of k) O();
      Ji.delete(u);
    }
  }, t ? r ? w(!0) : y = u.run() : a ? a(w.bind(null, !0), !0) : u.run(), v.pause = u.pause.bind(u), v.resume = u.resume.bind(u), v.stop = v, v;
}
function Qt(e, t = 1 / 0, n) {
  if (t <= 0 || !Le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Qe(e))
    Qt(e.value, t, n);
  else if (le(e))
    for (let r = 0; r < e.length; r++)
      Qt(e[r], t, n);
  else if (_o(e) || or(e))
    e.forEach((r) => {
      Qt(r, t, n);
    });
  else if (Su(e)) {
    for (const r in e)
      Qt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Qt(e[r], t, n);
  }
  return e;
}
var hn = { NODE_ENV: "production" };
const Hr = [];
let da = !1;
function jp(e, ...t) {
  if (da) return;
  da = !0, sn();
  const n = Hr.length ? Hr[Hr.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Vp();
  if (r)
    wr(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var a, s;
          return (s = (a = o.toString) == null ? void 0 : a.call(o)) != null ? s : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: o }) => `at <${Fc(n, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Up(i)), console.warn(...o);
  }
  ln(), da = !1;
}
function Vp() {
  let e = Hr[Hr.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Up(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Bp(n));
  }), t;
}
function Bp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${Fc(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [i, ...Hp(e.props), o] : [i + o];
}
function Hp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Yu(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Yu(e, t, n) {
  return Be(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Qe(t) ? (t = Yu(e, se(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : fe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = se(t), n ? t : [`${e}=`, t]);
}
function wr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Po(i, t, n);
  }
}
function Nt(e, t, n, r) {
  if (fe(e)) {
    const i = wr(e, t, n, r);
    return i && ku(i) && i.catch((o) => {
      Po(o, t, n);
    }), i;
  }
  if (le(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Nt(e[o], t, n, r));
    return i;
  }
}
function Po(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || $e;
  if (t) {
    let s = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, l, d) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      sn(), wr(o, null, 10, [
        e,
        l,
        d
      ]), ln();
      return;
    }
  }
  qp(e, n, i, r, a);
}
function qp(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const mt = [];
let Ut = -1;
const sr = [];
let bn = null, er = 0;
const Xu = /* @__PURE__ */ Promise.resolve();
let Qi = null;
function nn(e) {
  const t = Qi || Xu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wp(e) {
  let t = Ut + 1, n = mt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = mt[r], o = ti(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ls(e) {
  if (!(e.flags & 1)) {
    const t = ti(e), n = mt[mt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ti(n) ? mt.push(e) : mt.splice(Wp(t), 0, e), e.flags |= 1, Zu();
  }
}
function Zu() {
  Qi || (Qi = Xu.then(Qu));
}
function Gp(e) {
  le(e) ? sr.push(...e) : bn && e.id === -1 ? bn.splice(er + 1, 0, e) : e.flags & 1 || (sr.push(e), e.flags |= 1), Zu();
}
function Dl(e, t, n = Ut + 1) {
  for (; n < mt.length; n++) {
    const r = mt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      mt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ju(e) {
  if (sr.length) {
    const t = [...new Set(sr)].sort(
      (n, r) => ti(n) - ti(r)
    );
    if (sr.length = 0, bn) {
      bn.push(...t);
      return;
    }
    for (bn = t, er = 0; er < bn.length; er++) {
      const n = bn[er];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    bn = null, er = 0;
  }
}
const ti = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qu(e) {
  const t = Mt;
  try {
    for (Ut = 0; Ut < mt.length; Ut++) {
      const n = mt[Ut];
      n && !(n.flags & 8) && (hn.NODE_ENV !== "production" && t(n), n.flags & 4 && (n.flags &= -2), wr(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Ut < mt.length; Ut++) {
      const n = mt[Ut];
      n && (n.flags &= -2);
    }
    Ut = -1, mt.length = 0, Ju(), Qi = null, (mt.length || sr.length) && Qu();
  }
}
let Je = null, ec = null;
function eo(e) {
  const t = Je;
  return Je = e, ec = e && e.type.__scopeId || null, t;
}
function ne(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && Hl(-1);
    const o = eo(t);
    let a;
    try {
      a = e(...i);
    } finally {
      eo(o), r._d && Hl(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Fs(e, t) {
  if (Je === null)
    return e;
  const n = No(Je), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = $e] = t[i];
    o && (fe(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Qt(a), r.push({
      dir: o,
      instance: n,
      value: a,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function Dn(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[r];
    l && (sn(), Nt(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), ln());
  }
}
const tc = Symbol("_vte"), nc = (e) => e.__isTeleport, qr = (e) => e && (e.disabled || e.disabled === ""), Pl = (e) => e && (e.defer || e.defer === ""), Ml = (e) => typeof SVGElement < "u" && e instanceof SVGElement, $l = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ia = (e, t) => {
  const n = e && e.to;
  return Be(n) ? t ? t(n) : null : n;
}, rc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, i, o, a, s, l, d) {
    const {
      mc: u,
      pc: c,
      pbc: f,
      o: { insert: m, querySelector: h, createText: p, createComment: g }
    } = d, v = qr(t.props);
    let { shapeFlag: y, children: w, dynamicChildren: k } = t;
    if (e == null) {
      const O = t.el = p(""), D = t.anchor = p("");
      m(O, n, r), m(D, n, r);
      const N = (M, Y) => {
        y & 16 && (i && i.isCE && (i.ce._teleportTarget = M), u(
          w,
          M,
          Y,
          i,
          o,
          a,
          s,
          l
        ));
      }, W = () => {
        const M = t.target = Ia(t.props, h), Y = ic(M, t, p, m);
        M && (a !== "svg" && Ml(M) ? a = "svg" : a !== "mathml" && $l(M) && (a = "mathml"), v || (N(M, Y), Hi(t, !1)));
      };
      v && (N(n, D), Hi(t, !0)), Pl(t.props) ? ft(() => {
        W(), t.el.__isMounted = !0;
      }, o) : W();
    } else {
      if (Pl(t.props) && !e.el.__isMounted) {
        ft(() => {
          rc.process(
            e,
            t,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            d
          ), delete e.el.__isMounted;
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const O = t.anchor = e.anchor, D = t.target = e.target, N = t.targetAnchor = e.targetAnchor, W = qr(e.props), M = W ? n : D, Y = W ? O : N;
      if (a === "svg" || Ml(D) ? a = "svg" : (a === "mathml" || $l(D)) && (a = "mathml"), k ? (f(
        e.dynamicChildren,
        k,
        M,
        i,
        o,
        a,
        s
      ), js(e, t, !0)) : l || c(
        e,
        t,
        M,
        Y,
        i,
        o,
        a,
        s,
        !1
      ), v)
        W ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Oi(
          t,
          n,
          O,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = t.target = Ia(
          t.props,
          h
        );
        B && Oi(
          t,
          B,
          null,
          d,
          0
        );
      } else W && Oi(
        t,
        D,
        N,
        d,
        1
      );
      Hi(t, v);
    }
  },
  remove(e, t, n, { um: r, o: { remove: i } }, o) {
    const {
      shapeFlag: a,
      children: s,
      anchor: l,
      targetStart: d,
      targetAnchor: u,
      target: c,
      props: f
    } = e;
    if (c && (i(d), i(u)), o && i(l), a & 16) {
      const m = o || !qr(f);
      for (let h = 0; h < s.length; h++) {
        const p = s[h];
        r(
          p,
          t,
          n,
          m,
          !!p.dynamicChildren
        );
      }
    }
  },
  move: Oi,
  hydrate: Kp
};
function Oi(e, t, n, { o: { insert: r }, m: i }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: s, shapeFlag: l, children: d, props: u } = e, c = o === 2;
  if (c && r(a, t, n), (!c || qr(u)) && l & 16)
    for (let f = 0; f < d.length; f++)
      i(
        d[f],
        t,
        n,
        2
      );
  c && r(s, t, n);
}
function Kp(e, t, n, r, i, o, {
  o: { nextSibling: a, parentNode: s, querySelector: l, insert: d, createText: u }
}, c) {
  const f = t.target = Ia(
    t.props,
    l
  );
  if (f) {
    const m = qr(t.props), h = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        t.anchor = c(
          a(e),
          t,
          s(e),
          n,
          r,
          i,
          o
        ), t.targetStart = h, t.targetAnchor = h && a(h);
      else {
        t.anchor = a(e);
        let p = h;
        for (; p; ) {
          if (p && p.nodeType === 8) {
            if (p.data === "teleport start anchor")
              t.targetStart = p;
            else if (p.data === "teleport anchor") {
              t.targetAnchor = p, f._lpa = t.targetAnchor && a(t.targetAnchor);
              break;
            }
          }
          p = a(p);
        }
        t.targetAnchor || ic(f, t, u, d), c(
          h && a(h),
          t,
          f,
          n,
          r,
          i,
          o
        );
      }
    Hi(t, m);
  }
  return t.anchor && a(t.anchor);
}
const Yp = rc;
function Hi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, i;
    for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function ic(e, t, n, r) {
  const i = t.targetStart = n(""), o = t.targetAnchor = n("");
  return i[tc] = o, e && (r(i, e), r(o, e)), o;
}
const gn = Symbol("_leaveCb"), Ai = Symbol("_enterCb");
function Xp() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ue(() => {
    e.isMounted = !0;
  }), Ns(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ct = [Function, Array], oc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ct,
  onEnter: Ct,
  onAfterEnter: Ct,
  onEnterCancelled: Ct,
  // leave
  onBeforeLeave: Ct,
  onLeave: Ct,
  onAfterLeave: Ct,
  onLeaveCancelled: Ct,
  // appear
  onBeforeAppear: Ct,
  onAppear: Ct,
  onAfterAppear: Ct,
  onAppearCancelled: Ct
}, ac = (e) => {
  const t = e.subTree;
  return t.component ? ac(t.component) : t;
}, Zp = {
  name: "BaseTransition",
  props: oc,
  setup(e, { slots: t }) {
    const n = Bs(), r = Xp();
    return () => {
      const i = t.default && dc(t.default(), !0);
      if (!i || !i.length)
        return;
      const o = sc(i), a = se(e), { mode: s } = a;
      if (r.isLeaving)
        return ua(o);
      const l = Ll(o);
      if (!l)
        return ua(o);
      let d = za(
        l,
        a,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => d = c
      );
      l.type !== ht && ni(l, d);
      let u = n.subTree && Ll(n.subTree);
      if (u && u.type !== ht && !zn(l, u) && ac(n).type !== ht) {
        let c = za(
          u,
          a,
          r,
          n
        );
        if (ni(u, c), s === "out-in" && l.type !== ht)
          return r.isLeaving = !0, c.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, u = void 0;
          }, ua(o);
        s === "in-out" && l.type !== ht ? c.delayLeave = (f, m, h) => {
          const p = lc(
            r,
            u
          );
          p[String(u.key)] = u, f[gn] = () => {
            m(), f[gn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            h(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return o;
    };
  }
};
function sc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ht) {
        t = n;
        break;
      }
  }
  return t;
}
const Jp = Zp;
function lc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function za(e, t, n, r, i) {
  const {
    appear: o,
    mode: a,
    persisted: s = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: c,
    onBeforeLeave: f,
    onLeave: m,
    onAfterLeave: h,
    onLeaveCancelled: p,
    onBeforeAppear: g,
    onAppear: v,
    onAfterAppear: y,
    onAppearCancelled: w
  } = t, k = String(e.key), O = lc(n, e), D = (M, Y) => {
    M && Nt(
      M,
      r,
      9,
      Y
    );
  }, N = (M, Y) => {
    const B = Y[1];
    D(M, Y), le(M) ? M.every((P) => P.length <= 1) && B() : M.length <= 1 && B();
  }, W = {
    mode: a,
    persisted: s,
    beforeEnter(M) {
      let Y = l;
      if (!n.isMounted)
        if (o)
          Y = g || l;
        else
          return;
      M[gn] && M[gn](
        !0
        /* cancelled */
      );
      const B = O[k];
      B && zn(e, B) && B.el[gn] && B.el[gn](), D(Y, [M]);
    },
    enter(M) {
      let Y = d, B = u, P = c;
      if (!n.isMounted)
        if (o)
          Y = v || d, B = y || u, P = w || c;
        else
          return;
      let ee = !1;
      const he = M[Ai] = (Te) => {
        ee || (ee = !0, Te ? D(P, [M]) : D(B, [M]), W.delayedLeave && W.delayedLeave(), M[Ai] = void 0);
      };
      Y ? N(Y, [M, he]) : he();
    },
    leave(M, Y) {
      const B = String(e.key);
      if (M[Ai] && M[Ai](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Y();
      D(f, [M]);
      let P = !1;
      const ee = M[gn] = (he) => {
        P || (P = !0, Y(), he ? D(p, [M]) : D(h, [M]), M[gn] = void 0, O[B] === e && delete O[B]);
      };
      O[B] = e, m ? N(m, [M, ee]) : ee();
    },
    clone(M) {
      const Y = za(
        M,
        t,
        n,
        r,
        i
      );
      return i && i(Y), Y;
    }
  };
  return W;
}
function ua(e) {
  if (Mo(e))
    return e = rn(e), e.children = null, e;
}
function Ll(e) {
  if (!Mo(e))
    return nc(e.type) && e.children ? sc(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && fe(n.default))
      return n.default();
  }
}
function ni(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ni(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function dc(e, t = !1, n) {
  let r = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let a = e[o];
    const s = n == null ? a.key : String(n) + String(a.key != null ? a.key : o);
    a.type === U ? (a.patchFlag & 128 && i++, r = r.concat(
      dc(a.children, t, s)
    )) : (t || a.type !== ht) && r.push(s != null ? rn(a, { key: s }) : a);
  }
  if (i > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  return fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    tt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Qp() {
  const e = Bs();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function uc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function to(e, t, n, r, i = !1) {
  if (le(e)) {
    e.forEach(
      (h, p) => to(
        h,
        t && (le(t) ? t[p] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (lr(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && to(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? No(r.component) : r.el, a = i ? null : o, { i: s, r: l } = e, d = t && t.r, u = s.refs === $e ? s.refs = {} : s.refs, c = s.setupState, f = se(c), m = c === $e ? () => !1 : (h) => Ae(f, h);
  if (d != null && d !== l && (Be(d) ? (u[d] = null, m(d) && (c[d] = null)) : Qe(d) && (d.value = null)), fe(l))
    wr(l, s, 12, [a, u]);
  else {
    const h = Be(l), p = Qe(l);
    if (h || p) {
      const g = () => {
        if (e.f) {
          const v = h ? m(l) ? c[l] : u[l] : l.value;
          i ? le(v) && Ts(v, o) : le(v) ? v.includes(o) || v.push(o) : h ? (u[l] = [o], m(l) && (c[l] = u[l])) : (l.value = [o], e.k && (u[e.k] = l.value));
        } else h ? (u[l] = a, m(l) && (c[l] = a)) : p && (l.value = a, e.k && (u[e.k] = a));
      };
      a ? (g.id = -1, ft(g, n)) : g();
    }
  }
}
Co().requestIdleCallback;
Co().cancelIdleCallback;
const lr = (e) => !!e.type.__asyncLoader, Mo = (e) => e.type.__isKeepAlive;
function eh(e, t) {
  cc(e, "a", t);
}
function th(e, t) {
  cc(e, "da", t);
}
function cc(e, t, n = Ke) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if ($o(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Mo(i.parent.vnode) && nh(r, t, n, i), i = i.parent;
  }
}
function nh(e, t, n, r) {
  const i = $o(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  lt(() => {
    Ts(r[t], i);
  }, n);
}
function $o(e, t, n = Ke, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...a) => {
      sn();
      const s = bi(n), l = Nt(t, n, e, a);
      return s(), ln(), l;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const dn = (e) => (t, n = Ke) => {
  (!ai || e === "sp") && $o(e, (...r) => t(...r), n);
}, rh = dn("bm"), Ue = dn("m"), ih = dn(
  "bu"
), oh = dn("u"), Ns = dn(
  "bum"
), lt = dn("um"), ah = dn(
  "sp"
), sh = dn("rtg"), lh = dn("rtc");
function dh(e, t = Ke) {
  $o("ec", e, t);
}
const Is = "components", uh = "directives";
function oe(e, t) {
  return zs(Is, e, !0, t) || e;
}
const fc = Symbol.for("v-ndc");
function ch(e) {
  return Be(e) ? zs(Is, e, !1) || e : e || fc;
}
function fh(e) {
  return zs(uh, e);
}
function zs(e, t, n = !0, r = !1) {
  const i = Je || Ke;
  if (i) {
    const o = i.type;
    if (e === Is) {
      const s = Lc(
        o,
        !1
      );
      if (s && (s === t || s === At(t) || s === Eo(At(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Fl(i[e] || o[e], t) || // global registration
      Fl(i.appContext[e], t)
    );
    return !a && r ? o : a;
  }
}
function Fl(e, t) {
  return e && (e[t] || e[At(t)] || e[Eo(At(t))]);
}
function wn(e, t, n, r) {
  let i;
  const o = n, a = le(e);
  if (a || Be(e)) {
    const s = a && ar(e);
    let l = !1;
    s && (l = !Ot(e), e = Oo(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? at(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (Le(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, l) => t(s, l, void 0, o)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let l = 0, d = s.length; l < d; l++) {
        const u = s[l];
        i[l] = t(e[u], u, l, o);
      }
    }
  else
    i = [];
  return i;
}
function ri(e, t, n = {}, r, i) {
  if (Je.ce || Je.parent && lr(Je.parent) && Je.parent.ce)
    return t !== "default" && (n.name = t), S(), ke(
      U,
      null,
      [q("slot", n, r && r())],
      64
    );
  let o = e[t];
  o && o._c && (o._d = !1), S();
  const a = o && mc(o(n)), s = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = ke(
    U,
    {
      key: (s && !Ft(s) ? s : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && r ? "_fb" : "")
    },
    a || (r ? r() : []),
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function mc(e) {
  return e.some((t) => oi(t) ? !(t.type === ht || t.type === U && !mc(t.children)) : !0) ? e : null;
}
const Ra = (e) => e ? Mc(e) ? No(e) : Ra(e.parent) : null, Wr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ tt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ra(e.parent),
    $root: (e) => Ra(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => hc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ls(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = nn.bind(e.proxy)),
    $watch: (e) => $h.bind(e)
  })
), ca = (e, t) => e !== $e && !e.__isScriptSetup && Ae(e, t), mh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: a, type: s, appContext: l } = e;
    let d;
    if (t[0] !== "$") {
      const m = a[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (ca(r, t))
          return a[t] = 1, r[t];
        if (i !== $e && Ae(i, t))
          return a[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && Ae(d, t)
        )
          return a[t] = 3, o[t];
        if (n !== $e && Ae(n, t))
          return a[t] = 4, n[t];
        ja && (a[t] = 0);
      }
    }
    const u = Wr[t];
    let c, f;
    if (u)
      return t === "$attrs" && ot(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = s.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== $e && Ae(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, Ae(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return ca(i, t) ? (i[t] = n, !0) : r !== $e && Ae(r, t) ? (r[t] = n, !0) : Ae(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o }
  }, a) {
    let s;
    return !!n[a] || e !== $e && Ae(e, a) || ca(t, a) || (s = o[0]) && Ae(s, a) || Ae(r, a) || Ae(Wr, a) || Ae(i.config.globalProperties, a);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Nl(e) {
  return le(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ja = !0;
function ph(e) {
  const t = hc(e), n = e.proxy, r = e.ctx;
  ja = !1, t.beforeCreate && Il(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: c,
    mounted: f,
    beforeUpdate: m,
    updated: h,
    activated: p,
    deactivated: g,
    beforeDestroy: v,
    beforeUnmount: y,
    destroyed: w,
    unmounted: k,
    render: O,
    renderTracked: D,
    renderTriggered: N,
    errorCaptured: W,
    serverPrefetch: M,
    // public API
    expose: Y,
    inheritAttrs: B,
    // assets
    components: P,
    directives: ee,
    filters: he
  } = t;
  if (d && hh(d, r, null), a)
    for (const G in a) {
      const ue = a[G];
      fe(ue) && (r[G] = ue.bind(n));
    }
  if (i) {
    const G = i.call(n, n);
    Le(G) && (e.data = yr(G));
  }
  if (ja = !0, o)
    for (const G in o) {
      const ue = o[G], Ie = fe(ue) ? ue.bind(n, n) : fe(ue.get) ? ue.get.bind(n, n) : Mt, Xe = !fe(ue) && fe(ue.set) ? ue.set.bind(n) : Mt, ie = L({
        get: Ie,
        set: Xe
      });
      Object.defineProperty(r, G, {
        enumerable: !0,
        configurable: !0,
        get: () => ie.value,
        set: (me) => ie.value = me
      });
    }
  if (s)
    for (const G in s)
      pc(s[G], r, n, G);
  if (l) {
    const G = fe(l) ? l.call(n) : l;
    Reflect.ownKeys(G).forEach((ue) => {
      bt(ue, G[ue]);
    });
  }
  u && Il(u, e, "c");
  function ge(G, ue) {
    le(ue) ? ue.forEach((Ie) => G(Ie.bind(n))) : ue && G(ue.bind(n));
  }
  if (ge(rh, c), ge(Ue, f), ge(ih, m), ge(oh, h), ge(eh, p), ge(th, g), ge(dh, W), ge(lh, D), ge(sh, N), ge(Ns, y), ge(lt, k), ge(ah, M), le(Y))
    if (Y.length) {
      const G = e.exposed || (e.exposed = {});
      Y.forEach((ue) => {
        Object.defineProperty(G, ue, {
          get: () => n[ue],
          set: (Ie) => n[ue] = Ie
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Mt && (e.render = O), B != null && (e.inheritAttrs = B), P && (e.components = P), ee && (e.directives = ee), M && uc(e);
}
function hh(e, t, n = Mt) {
  le(e) && (e = Va(e));
  for (const r in e) {
    const i = e[r];
    let o;
    Le(i) ? "default" in i ? o = Ge(
      i.from || r,
      i.default,
      !0
    ) : o = Ge(i.from || r) : o = Ge(i), Qe(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[r] = o;
  }
}
function Il(e, t, n) {
  Nt(
    le(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function pc(e, t, n, r) {
  let i = r.includes(".") ? Tc(n, r) : () => n[r];
  if (Be(e)) {
    const o = t[e];
    fe(o) && st(i, o);
  } else if (fe(e))
    st(i, e.bind(n));
  else if (Le(e))
    if (le(e))
      e.forEach((o) => pc(o, t, n, r));
    else {
      const o = fe(e.handler) ? e.handler.bind(n) : t[e.handler];
      fe(o) && st(i, o, e);
    }
}
function hc(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (d) => no(l, d, a, !0)
  ), no(l, t, a)), Le(t) && o.set(t, l), l;
}
function no(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && no(e, o, n, !0), i && i.forEach(
    (a) => no(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const s = bh[a] || n && n[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const bh = {
  data: zl,
  props: Rl,
  emits: Rl,
  // objects
  methods: Lr,
  computed: Lr,
  // lifecycle
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  // assets
  components: Lr,
  directives: Lr,
  // watch
  watch: vh,
  // provide / inject
  provide: zl,
  inject: gh
};
function zl(e, t) {
  return t ? e ? function() {
    return tt(
      fe(e) ? e.call(this, this) : e,
      fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gh(e, t) {
  return Lr(Va(e), Va(t));
}
function Va(e) {
  if (le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Lr(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Rl(e, t) {
  return e ? le(e) && le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    Nl(e),
    Nl(t ?? {})
  ) : t;
}
function vh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = tt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ct(e[r], t[r]);
  return n;
}
function bc() {
  return {
    app: null,
    config: {
      isNativeTag: Zm,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let yh = 0;
function wh(e, t) {
  return function(r, i = null) {
    fe(r) || (r = tt({}, r)), i != null && !Le(i) && (i = null);
    const o = bc(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const d = o.app = {
      _uid: yh++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: e1,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...c) {
        return a.has(u) || (u && fe(u.install) ? (a.add(u), u.install(d, ...c)) : fe(u) && (a.add(u), u(d, ...c))), d;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), d;
      },
      component(u, c) {
        return c ? (o.components[u] = c, d) : o.components[u];
      },
      directive(u, c) {
        return c ? (o.directives[u] = c, d) : o.directives[u];
      },
      mount(u, c, f) {
        if (!l) {
          const m = d._ceVNode || q(r, i);
          return m.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, u, f), l = !0, d._container = u, u.__vue_app__ = d, No(m.component);
        }
      },
      onUnmount(u) {
        s.push(u);
      },
      unmount() {
        l && (Nt(
          s,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, c) {
        return o.provides[u] = c, d;
      },
      runWithContext(u) {
        const c = dr;
        dr = d;
        try {
          return u();
        } finally {
          dr = c;
        }
      }
    };
    return d;
  };
}
let dr = null;
function bt(e, t) {
  if (Ke) {
    let n = Ke.provides;
    const r = Ke.parent && Ke.parent.provides;
    r === n && (n = Ke.provides = Object.create(r)), n[e] = t;
  }
}
function Ge(e, t, n = !1) {
  const r = Ke || Je;
  if (r || dr) {
    const i = dr ? dr._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && fe(t) ? t.call(r && r.proxy) : t;
  }
}
const gc = {}, vc = () => Object.create(gc), yc = (e) => Object.getPrototypeOf(e) === gc;
function xh(e, t, n, r = !1) {
  const i = {}, o = vc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), wc(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  n ? e.props = r ? i : Mp(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function kh(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = se(i), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let f = u[c];
        if (Lo(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (Ae(o, f))
            m !== o[f] && (o[f] = m, d = !0);
          else {
            const h = At(f);
            i[h] = Ua(
              l,
              s,
              h,
              m,
              e,
              !1
            );
          }
        else
          m !== o[f] && (o[f] = m, d = !0);
      }
    }
  } else {
    wc(e, t, i, o) && (d = !0);
    let u;
    for (const c in s)
      (!t || // for camelCase
      !Ae(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Yn(c)) === c || !Ae(t, u))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[c] = Ua(
        l,
        s,
        c,
        void 0,
        e,
        !0
      )) : delete i[c]);
    if (o !== s)
      for (const c in o)
        (!t || !Ae(t, c)) && (delete o[c], d = !0);
  }
  d && Jt(e.attrs, "set", "");
}
function wc(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (Vr(l))
        continue;
      const d = t[l];
      let u;
      i && Ae(i, u = At(l)) ? !o || !o.includes(u) ? n[u] = d : (s || (s = {}))[u] = d : Lo(e.emitsOptions, l) || (!(l in r) || d !== r[l]) && (r[l] = d, a = !0);
    }
  if (o) {
    const l = se(n), d = s || $e;
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      n[c] = Ua(
        i,
        l,
        c,
        d[c],
        e,
        !Ae(d, c)
      );
    }
  }
  return a;
}
function Ua(e, t, n, r, i, o) {
  const a = e[n];
  if (a != null) {
    const s = Ae(a, "default");
    if (s && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && fe(l)) {
        const { propsDefaults: d } = i;
        if (n in d)
          r = d[n];
        else {
          const u = bi(i);
          r = d[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        r = l;
      i.ce && i.ce._setProp(n, r);
    }
    a[
      0
      /* shouldCast */
    ] && (o && !s ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Yn(n)) && (r = !0));
  }
  return r;
}
const _h = /* @__PURE__ */ new WeakMap();
function xc(e, t, n = !1) {
  const r = n ? _h : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!fe(e)) {
    const u = (c) => {
      l = !0;
      const [f, m] = xc(c, t, !0);
      tt(a, f), m && s.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return Le(e) && r.set(e, ir), ir;
  if (le(o))
    for (let u = 0; u < o.length; u++) {
      const c = At(o[u]);
      jl(c) && (a[c] = $e);
    }
  else if (o)
    for (const u in o) {
      const c = At(u);
      if (jl(c)) {
        const f = o[u], m = a[c] = le(f) || fe(f) ? { type: f } : tt({}, f), h = m.type;
        let p = !1, g = !0;
        if (le(h))
          for (let v = 0; v < h.length; ++v) {
            const y = h[v], w = fe(y) && y.name;
            if (w === "Boolean") {
              p = !0;
              break;
            } else w === "String" && (g = !1);
          }
        else
          p = fe(h) && h.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = p, m[
          1
          /* shouldCastTrue */
        ] = g, (p || Ae(m, "default")) && s.push(c);
      }
    }
  const d = [a, s];
  return Le(e) && r.set(e, d), d;
}
function jl(e) {
  return e[0] !== "$" && !Vr(e);
}
const kc = (e) => e[0] === "_" || e === "$stable", Rs = (e) => le(e) ? e.map(qt) : [qt(e)], Sh = (e, t, n) => {
  if (t._n)
    return t;
  const r = ne((...i) => (hn.NODE_ENV !== "production" && Ke && (!n || (n.root, Ke.root)), Rs(t(...i))), n);
  return r._c = !1, r;
}, _c = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (kc(i)) continue;
    const o = e[i];
    if (fe(o))
      t[i] = Sh(i, o, r);
    else if (o != null) {
      const a = Rs(o);
      t[i] = () => a;
    }
  }
}, Sc = (e, t) => {
  const n = Rs(t);
  e.slots.default = () => n;
}, Ec = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, Eh = (e, t, n) => {
  const r = e.slots = vc();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Ec(r, t, n), n && Eu(r, "_", i, !0)) : _c(t, r);
  } else t && Sc(e, t);
}, Ch = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, a = $e;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? o = !1 : Ec(i, t, n) : (o = !t.$stable, _c(t, i)), a = t;
  } else t && (Sc(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !kc(s) && a[s] == null && delete i[s];
}, ft = jh;
function Th(e) {
  return Oh(e);
}
function Oh(e, t) {
  const n = Co();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: d,
    setElementText: u,
    parentNode: c,
    nextSibling: f,
    setScopeId: m = Mt,
    insertStaticContent: h
  } = e, p = (b, x, C, z = null, $ = null, F = null, K = void 0, H = null, V = !!x.dynamicChildren) => {
    if (b === x)
      return;
    b && !zn(b, x) && (z = be(b), me(b, $, F, !0), b = null), x.patchFlag === -2 && (V = !1, x.dynamicChildren = null);
    const { type: R, ref: de, shapeFlag: X } = x;
    switch (R) {
      case Fo:
        g(b, x, C, z);
        break;
      case ht:
        v(b, x, C, z);
        break;
      case ma:
        b == null && y(x, C, z, K);
        break;
      case U:
        P(
          b,
          x,
          C,
          z,
          $,
          F,
          K,
          H,
          V
        );
        break;
      default:
        X & 1 ? O(
          b,
          x,
          C,
          z,
          $,
          F,
          K,
          H,
          V
        ) : X & 6 ? ee(
          b,
          x,
          C,
          z,
          $,
          F,
          K,
          H,
          V
        ) : (X & 64 || X & 128) && R.process(
          b,
          x,
          C,
          z,
          $,
          F,
          K,
          H,
          V,
          We
        );
    }
    de != null && $ && to(de, b && b.ref, F, x || b, !x);
  }, g = (b, x, C, z) => {
    if (b == null)
      r(
        x.el = s(x.children),
        C,
        z
      );
    else {
      const $ = x.el = b.el;
      x.children !== b.children && d($, x.children);
    }
  }, v = (b, x, C, z) => {
    b == null ? r(
      x.el = l(x.children || ""),
      C,
      z
    ) : x.el = b.el;
  }, y = (b, x, C, z) => {
    [b.el, b.anchor] = h(
      b.children,
      x,
      C,
      z,
      b.el,
      b.anchor
    );
  }, w = ({ el: b, anchor: x }, C, z) => {
    let $;
    for (; b && b !== x; )
      $ = f(b), r(b, C, z), b = $;
    r(x, C, z);
  }, k = ({ el: b, anchor: x }) => {
    let C;
    for (; b && b !== x; )
      C = f(b), i(b), b = C;
    i(x);
  }, O = (b, x, C, z, $, F, K, H, V) => {
    x.type === "svg" ? K = "svg" : x.type === "math" && (K = "mathml"), b == null ? D(
      x,
      C,
      z,
      $,
      F,
      K,
      H,
      V
    ) : M(
      b,
      x,
      $,
      F,
      K,
      H,
      V
    );
  }, D = (b, x, C, z, $, F, K, H) => {
    let V, R;
    const { props: de, shapeFlag: X, transition: ae, dirs: ce } = b;
    if (V = b.el = a(
      b.type,
      F,
      de && de.is,
      de
    ), X & 8 ? u(V, b.children) : X & 16 && W(
      b.children,
      V,
      null,
      z,
      $,
      fa(b, F),
      K,
      H
    ), ce && Dn(b, null, z, "created"), N(V, b, b.scopeId, K, z), de) {
      for (const Fe in de)
        Fe !== "value" && !Vr(Fe) && o(V, Fe, null, de[Fe], F, z);
      "value" in de && o(V, "value", null, de.value, F), (R = de.onVnodeBeforeMount) && Vt(R, z, b);
    }
    ce && Dn(b, null, z, "beforeMount");
    const xe = Ah($, ae);
    xe && ae.beforeEnter(V), r(V, x, C), ((R = de && de.onVnodeMounted) || xe || ce) && ft(() => {
      R && Vt(R, z, b), xe && ae.enter(V), ce && Dn(b, null, z, "mounted");
    }, $);
  }, N = (b, x, C, z, $) => {
    if (C && m(b, C), z)
      for (let F = 0; F < z.length; F++)
        m(b, z[F]);
    if ($) {
      let F = $.subTree;
      if (x === F || Ac(F.type) && (F.ssContent === x || F.ssFallback === x)) {
        const K = $.vnode;
        N(
          b,
          K,
          K.scopeId,
          K.slotScopeIds,
          $.parent
        );
      }
    }
  }, W = (b, x, C, z, $, F, K, H, V = 0) => {
    for (let R = V; R < b.length; R++) {
      const de = b[R] = H ? vn(b[R]) : qt(b[R]);
      p(
        null,
        de,
        x,
        C,
        z,
        $,
        F,
        K,
        H
      );
    }
  }, M = (b, x, C, z, $, F, K) => {
    const H = x.el = b.el;
    let { patchFlag: V, dynamicChildren: R, dirs: de } = x;
    V |= b.patchFlag & 16;
    const X = b.props || $e, ae = x.props || $e;
    let ce;
    if (C && Pn(C, !1), (ce = ae.onVnodeBeforeUpdate) && Vt(ce, C, x, b), de && Dn(x, b, C, "beforeUpdate"), C && Pn(C, !0), (X.innerHTML && ae.innerHTML == null || X.textContent && ae.textContent == null) && u(H, ""), R ? Y(
      b.dynamicChildren,
      R,
      H,
      C,
      z,
      fa(x, $),
      F
    ) : K || ue(
      b,
      x,
      H,
      null,
      C,
      z,
      fa(x, $),
      F,
      !1
    ), V > 0) {
      if (V & 16)
        B(H, X, ae, C, $);
      else if (V & 2 && X.class !== ae.class && o(H, "class", null, ae.class, $), V & 4 && o(H, "style", X.style, ae.style, $), V & 8) {
        const xe = x.dynamicProps;
        for (let Fe = 0; Fe < xe.length; Fe++) {
          const Me = xe[Fe], xt = X[Me], vt = ae[Me];
          (vt !== xt || Me === "value") && o(H, Me, xt, vt, $, C);
        }
      }
      V & 1 && b.children !== x.children && u(H, x.children);
    } else !K && R == null && B(H, X, ae, C, $);
    ((ce = ae.onVnodeUpdated) || de) && ft(() => {
      ce && Vt(ce, C, x, b), de && Dn(x, b, C, "updated");
    }, z);
  }, Y = (b, x, C, z, $, F, K) => {
    for (let H = 0; H < x.length; H++) {
      const V = b[H], R = x[H], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        V.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (V.type === U || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !zn(V, R) || // - In the case of a component, it could contain anything.
        V.shapeFlag & 70) ? c(V.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      p(
        V,
        R,
        de,
        null,
        z,
        $,
        F,
        K,
        !0
      );
    }
  }, B = (b, x, C, z, $) => {
    if (x !== C) {
      if (x !== $e)
        for (const F in x)
          !Vr(F) && !(F in C) && o(
            b,
            F,
            x[F],
            null,
            $,
            z
          );
      for (const F in C) {
        if (Vr(F)) continue;
        const K = C[F], H = x[F];
        K !== H && F !== "value" && o(b, F, H, K, $, z);
      }
      "value" in C && o(b, "value", x.value, C.value, $);
    }
  }, P = (b, x, C, z, $, F, K, H, V) => {
    const R = x.el = b ? b.el : s(""), de = x.anchor = b ? b.anchor : s("");
    let { patchFlag: X, dynamicChildren: ae, slotScopeIds: ce } = x;
    ce && (H = H ? H.concat(ce) : ce), b == null ? (r(R, C, z), r(de, C, z), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      C,
      de,
      $,
      F,
      K,
      H,
      V
    )) : X > 0 && X & 64 && ae && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (Y(
      b.dynamicChildren,
      ae,
      C,
      $,
      F,
      K,
      H
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (x.key != null || $ && x === $.subTree) && js(
      b,
      x,
      !0
      /* shallow */
    )) : ue(
      b,
      x,
      C,
      de,
      $,
      F,
      K,
      H,
      V
    );
  }, ee = (b, x, C, z, $, F, K, H, V) => {
    x.slotScopeIds = H, b == null ? x.shapeFlag & 512 ? $.ctx.activate(
      x,
      C,
      z,
      K,
      V
    ) : he(
      x,
      C,
      z,
      $,
      F,
      K,
      V
    ) : Te(b, x, V);
  }, he = (b, x, C, z, $, F, K) => {
    const H = b.component = Wh(
      b,
      z,
      $
    );
    if (Mo(b) && (H.ctx.renderer = We), Gh(H, !1, K), H.asyncDep) {
      if ($ && $.registerDep(H, ge, K), !b.el) {
        const V = H.subTree = q(ht);
        v(null, V, x, C);
      }
    } else
      ge(
        H,
        b,
        x,
        C,
        $,
        F,
        K
      );
  }, Te = (b, x, C) => {
    const z = x.component = b.component;
    if (zh(b, x, C))
      if (z.asyncDep && !z.asyncResolved) {
        G(z, x, C);
        return;
      } else
        z.next = x, z.update();
    else
      x.el = b.el, z.vnode = x;
  }, ge = (b, x, C, z, $, F, K) => {
    const H = () => {
      if (b.isMounted) {
        let { next: X, bu: ae, u: ce, parent: xe, vnode: Fe } = b;
        {
          const Rt = Cc(b);
          if (Rt) {
            X && (X.el = Fe.el, G(b, X, K)), Rt.asyncDep.then(() => {
              b.isUnmounted || H();
            });
            return;
          }
        }
        let Me = X, xt;
        Pn(b, !1), X ? (X.el = Fe.el, G(b, X, K)) : X = Fe, ae && Bi(ae), (xt = X.props && X.props.onVnodeBeforeUpdate) && Vt(xt, xe, X, Fe), Pn(b, !0);
        const vt = Ul(b), zt = b.subTree;
        b.subTree = vt, p(
          zt,
          vt,
          // parent may have changed if it's in a teleport
          c(zt.el),
          // anchor may have changed if it's in a fragment
          be(zt),
          b,
          $,
          F
        ), X.el = vt.el, Me === null && Rh(b, vt.el), ce && ft(ce, $), (xt = X.props && X.props.onVnodeUpdated) && ft(
          () => Vt(xt, xe, X, Fe),
          $
        );
      } else {
        let X;
        const { el: ae, props: ce } = x, { bm: xe, m: Fe, parent: Me, root: xt, type: vt } = b, zt = lr(x);
        Pn(b, !1), xe && Bi(xe), !zt && (X = ce && ce.onVnodeBeforeMount) && Vt(X, Me, x), Pn(b, !0);
        {
          xt.ce && xt.ce._injectChildStyle(vt);
          const Rt = b.subTree = Ul(b);
          p(
            null,
            Rt,
            C,
            z,
            b,
            $,
            F
          ), x.el = Rt.el;
        }
        if (Fe && ft(Fe, $), !zt && (X = ce && ce.onVnodeMounted)) {
          const Rt = x;
          ft(
            () => Vt(X, Me, Rt),
            $
          );
        }
        (x.shapeFlag & 256 || Me && lr(Me.vnode) && Me.vnode.shapeFlag & 256) && b.a && ft(b.a, $), b.isMounted = !0, x = C = z = null;
      }
    };
    b.scope.on();
    const V = b.effect = new Du(H);
    b.scope.off();
    const R = b.update = V.run.bind(V), de = b.job = V.runIfDirty.bind(V);
    de.i = b, de.id = b.uid, V.scheduler = () => Ls(de), Pn(b, !0), R();
  }, G = (b, x, C) => {
    x.component = b;
    const z = b.vnode.props;
    b.vnode = x, b.next = null, kh(b, x.props, z, C), Ch(b, x.children, C), sn(), Dl(b), ln();
  }, ue = (b, x, C, z, $, F, K, H, V = !1) => {
    const R = b && b.children, de = b ? b.shapeFlag : 0, X = x.children, { patchFlag: ae, shapeFlag: ce } = x;
    if (ae > 0) {
      if (ae & 128) {
        Xe(
          R,
          X,
          C,
          z,
          $,
          F,
          K,
          H,
          V
        );
        return;
      } else if (ae & 256) {
        Ie(
          R,
          X,
          C,
          z,
          $,
          F,
          K,
          H,
          V
        );
        return;
      }
    }
    ce & 8 ? (de & 16 && J(R, $, F), X !== R && u(C, X)) : de & 16 ? ce & 16 ? Xe(
      R,
      X,
      C,
      z,
      $,
      F,
      K,
      H,
      V
    ) : J(R, $, F, !0) : (de & 8 && u(C, ""), ce & 16 && W(
      X,
      C,
      z,
      $,
      F,
      K,
      H,
      V
    ));
  }, Ie = (b, x, C, z, $, F, K, H, V) => {
    b = b || ir, x = x || ir;
    const R = b.length, de = x.length, X = Math.min(R, de);
    let ae;
    for (ae = 0; ae < X; ae++) {
      const ce = x[ae] = V ? vn(x[ae]) : qt(x[ae]);
      p(
        b[ae],
        ce,
        C,
        null,
        $,
        F,
        K,
        H,
        V
      );
    }
    R > de ? J(
      b,
      $,
      F,
      !0,
      !1,
      X
    ) : W(
      x,
      C,
      z,
      $,
      F,
      K,
      H,
      V,
      X
    );
  }, Xe = (b, x, C, z, $, F, K, H, V) => {
    let R = 0;
    const de = x.length;
    let X = b.length - 1, ae = de - 1;
    for (; R <= X && R <= ae; ) {
      const ce = b[R], xe = x[R] = V ? vn(x[R]) : qt(x[R]);
      if (zn(ce, xe))
        p(
          ce,
          xe,
          C,
          null,
          $,
          F,
          K,
          H,
          V
        );
      else
        break;
      R++;
    }
    for (; R <= X && R <= ae; ) {
      const ce = b[X], xe = x[ae] = V ? vn(x[ae]) : qt(x[ae]);
      if (zn(ce, xe))
        p(
          ce,
          xe,
          C,
          null,
          $,
          F,
          K,
          H,
          V
        );
      else
        break;
      X--, ae--;
    }
    if (R > X) {
      if (R <= ae) {
        const ce = ae + 1, xe = ce < de ? x[ce].el : z;
        for (; R <= ae; )
          p(
            null,
            x[R] = V ? vn(x[R]) : qt(x[R]),
            C,
            xe,
            $,
            F,
            K,
            H,
            V
          ), R++;
      }
    } else if (R > ae)
      for (; R <= X; )
        me(b[R], $, F, !0), R++;
    else {
      const ce = R, xe = R, Fe = /* @__PURE__ */ new Map();
      for (R = xe; R <= ae; R++) {
        const kt = x[R] = V ? vn(x[R]) : qt(x[R]);
        kt.key != null && Fe.set(kt.key, R);
      }
      let Me, xt = 0;
      const vt = ae - xe + 1;
      let zt = !1, Rt = 0;
      const Tr = new Array(vt);
      for (R = 0; R < vt; R++) Tr[R] = 0;
      for (R = ce; R <= X; R++) {
        const kt = b[R];
        if (xt >= vt) {
          me(kt, $, F, !0);
          continue;
        }
        let jt;
        if (kt.key != null)
          jt = Fe.get(kt.key);
        else
          for (Me = xe; Me <= ae; Me++)
            if (Tr[Me - xe] === 0 && zn(kt, x[Me])) {
              jt = Me;
              break;
            }
        jt === void 0 ? me(kt, $, F, !0) : (Tr[jt - xe] = R + 1, jt >= Rt ? Rt = jt : zt = !0, p(
          kt,
          x[jt],
          C,
          null,
          $,
          F,
          K,
          H,
          V
        ), xt++);
      }
      const Sl = zt ? Dh(Tr) : ir;
      for (Me = Sl.length - 1, R = vt - 1; R >= 0; R--) {
        const kt = xe + R, jt = x[kt], El = kt + 1 < de ? x[kt + 1].el : z;
        Tr[R] === 0 ? p(
          null,
          jt,
          C,
          El,
          $,
          F,
          K,
          H,
          V
        ) : zt && (Me < 0 || R !== Sl[Me] ? ie(jt, C, El, 2) : Me--);
      }
    }
  }, ie = (b, x, C, z, $ = null) => {
    const { el: F, type: K, transition: H, children: V, shapeFlag: R } = b;
    if (R & 6) {
      ie(b.component.subTree, x, C, z);
      return;
    }
    if (R & 128) {
      b.suspense.move(x, C, z);
      return;
    }
    if (R & 64) {
      K.move(b, x, C, We);
      return;
    }
    if (K === U) {
      r(F, x, C);
      for (let X = 0; X < V.length; X++)
        ie(V[X], x, C, z);
      r(b.anchor, x, C);
      return;
    }
    if (K === ma) {
      w(b, x, C);
      return;
    }
    if (z !== 2 && R & 1 && H)
      if (z === 0)
        H.beforeEnter(F), r(F, x, C), ft(() => H.enter(F), $);
      else {
        const { leave: X, delayLeave: ae, afterLeave: ce } = H, xe = () => r(F, x, C), Fe = () => {
          X(F, () => {
            xe(), ce && ce();
          });
        };
        ae ? ae(F, xe, Fe) : Fe();
      }
    else
      r(F, x, C);
  }, me = (b, x, C, z = !1, $ = !1) => {
    const {
      type: F,
      props: K,
      ref: H,
      children: V,
      dynamicChildren: R,
      shapeFlag: de,
      patchFlag: X,
      dirs: ae,
      cacheIndex: ce
    } = b;
    if (X === -2 && ($ = !1), H != null && to(H, null, C, b, !0), ce != null && (x.renderCache[ce] = void 0), de & 256) {
      x.ctx.deactivate(b);
      return;
    }
    const xe = de & 1 && ae, Fe = !lr(b);
    let Me;
    if (Fe && (Me = K && K.onVnodeBeforeUnmount) && Vt(Me, x, b), de & 6)
      nt(b.component, C, z);
    else {
      if (de & 128) {
        b.suspense.unmount(C, z);
        return;
      }
      xe && Dn(b, null, x, "beforeUnmount"), de & 64 ? b.type.remove(
        b,
        x,
        C,
        We,
        z
      ) : R && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !R.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== U || X > 0 && X & 64) ? J(
        R,
        x,
        C,
        !1,
        !0
      ) : (F === U && X & 384 || !$ && de & 16) && J(V, x, C), z && He(b);
    }
    (Fe && (Me = K && K.onVnodeUnmounted) || xe) && ft(() => {
      Me && Vt(Me, x, b), xe && Dn(b, null, x, "unmounted");
    }, C);
  }, He = (b) => {
    const { type: x, el: C, anchor: z, transition: $ } = b;
    if (x === U) {
      Oe(C, z);
      return;
    }
    if (x === ma) {
      k(b);
      return;
    }
    const F = () => {
      i(C), $ && !$.persisted && $.afterLeave && $.afterLeave();
    };
    if (b.shapeFlag & 1 && $ && !$.persisted) {
      const { leave: K, delayLeave: H } = $, V = () => K(C, F);
      H ? H(b.el, F, V) : V();
    } else
      F();
  }, Oe = (b, x) => {
    let C;
    for (; b !== x; )
      C = f(b), i(b), b = C;
    i(x);
  }, nt = (b, x, C) => {
    const { bum: z, scope: $, job: F, subTree: K, um: H, m: V, a: R } = b;
    Vl(V), Vl(R), z && Bi(z), $.stop(), F && (F.flags |= 8, me(K, b, x, C)), H && ft(H, x), ft(() => {
      b.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve());
  }, J = (b, x, C, z = !1, $ = !1, F = 0) => {
    for (let K = F; K < b.length; K++)
      me(b[K], x, C, z, $);
  }, be = (b) => {
    if (b.shapeFlag & 6)
      return be(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const x = f(b.anchor || b.el), C = x && x[tc];
    return C ? f(C) : x;
  };
  let E = !1;
  const _e = (b, x, C) => {
    b == null ? x._vnode && me(x._vnode, null, null, !0) : p(
      x._vnode || null,
      b,
      x,
      null,
      null,
      null,
      C
    ), x._vnode = b, E || (E = !0, Dl(), Ju(), E = !1);
  }, We = {
    p,
    um: me,
    m: ie,
    r: He,
    mt: he,
    mc: W,
    pc: ue,
    pbc: Y,
    n: be,
    o: e
  };
  return {
    render: _e,
    hydrate: void 0,
    createApp: wh(_e)
  };
}
function fa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Pn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ah(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function js(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (le(r) && le(i))
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = vn(i[o]), s.el = a.el), !n && s.patchFlag !== -2 && js(a, s)), s.type === Fo && (s.el = a.el);
    }
}
function Dh(e) {
  const t = e.slice(), n = [0];
  let r, i, o, a, s;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const d = e[r];
    if (d !== 0) {
      if (i = n[n.length - 1], e[i] < d) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, a = n.length - 1; o < a; )
        s = o + a >> 1, e[n[s]] < d ? o = s + 1 : a = s;
      d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, a = n[o - 1]; o-- > 0; )
    n[o] = a, a = t[a];
  return n;
}
function Cc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Cc(t);
}
function Vl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ph = Symbol.for("v-scx"), Mh = () => Ge(Ph);
function wt(e, t) {
  return Vs(e, null, t);
}
function st(e, t, n) {
  return Vs(e, t, n);
}
function Vs(e, t, n = $e) {
  const { immediate: r, deep: i, flush: o, once: a } = n, s = tt({}, n), l = t && r || !t && o !== "post";
  let d;
  if (ai) {
    if (o === "sync") {
      const m = Mh();
      d = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = Mt, m.resume = Mt, m.pause = Mt, m;
    }
  }
  const u = Ke;
  s.call = (m, h, p) => Nt(m, u, h, p);
  let c = !1;
  o === "post" ? s.scheduler = (m) => {
    ft(m, u && u.suspense);
  } : o !== "sync" && (c = !0, s.scheduler = (m, h) => {
    h ? m() : Ls(m);
  }), s.augmentJob = (m) => {
    t && (m.flags |= 4), c && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const f = Rp(e, t, s);
  return ai && (d ? d.push(f) : l && f()), f;
}
function $h(e, t, n) {
  const r = this.proxy, i = Be(e) ? e.includes(".") ? Tc(r, e) : () => r[e] : e.bind(r, r);
  let o;
  fe(t) ? o = t : (o = t.handler, n = t);
  const a = bi(this), s = Vs(i, o.bind(r), n);
  return a(), s;
}
function Tc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Lh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${At(t)}Modifiers`] || e[`${Yn(t)}Modifiers`];
function Fh(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || $e;
  let i = n;
  const o = t.startsWith("update:"), a = o && Lh(r, t.slice(7));
  a && (a.trim && (i = n.map((u) => Be(u) ? u.trim() : u)), a.number && (i = n.map(np)));
  let s, l = r[s = ia(t)] || // also try camelCase event handler (#2249)
  r[s = ia(At(t))];
  !l && o && (l = r[s = ia(Yn(t))]), l && Nt(
    l,
    e,
    6,
    i
  );
  const d = r[s + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, Nt(
      d,
      e,
      6,
      i
    );
  }
}
function Oc(e, t, n = !1) {
  const r = t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!fe(e)) {
    const l = (d) => {
      const u = Oc(d, t, !0);
      u && (s = !0, tt(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (Le(e) && r.set(e, null), null) : (le(o) ? o.forEach((l) => a[l] = null) : tt(a, o), Le(e) && r.set(e, a), a);
}
function Lo(e, t) {
  return !e || !ko(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, Yn(t)) || Ae(e, t));
}
function Ul(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: d,
    renderCache: u,
    props: c,
    data: f,
    setupState: m,
    ctx: h,
    inheritAttrs: p
  } = e, g = eo(e);
  let v, y;
  try {
    if (n.shapeFlag & 4) {
      const k = i || r, O = hn.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(k, {
        get(D, N, W) {
          return jp(
            `Property '${String(
              N
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(D, N, W);
        }
      }) : k;
      v = qt(
        d.call(
          O,
          k,
          u,
          hn.NODE_ENV !== "production" ? Ci(c) : c,
          m,
          f,
          h
        )
      ), y = s;
    } else {
      const k = t;
      hn.NODE_ENV, v = qt(
        k.length > 1 ? k(
          hn.NODE_ENV !== "production" ? Ci(c) : c,
          hn.NODE_ENV !== "production" ? {
            get attrs() {
              return Ci(s);
            },
            slots: a,
            emit: l
          } : { attrs: s, slots: a, emit: l }
        ) : k(
          hn.NODE_ENV !== "production" ? Ci(c) : c,
          null
        )
      ), y = t.props ? s : Nh(s);
    }
  } catch (k) {
    Gr.length = 0, Po(k, e, 1), v = q(ht);
  }
  let w = v;
  if (y && p !== !1) {
    const k = Object.keys(y), { shapeFlag: O } = w;
    k.length && O & 7 && (o && k.some(Cs) && (y = Ih(
      y,
      o
    )), w = rn(w, y, !1, !0));
  }
  return n.dirs && (w = rn(w, null, !1, !0), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && ni(w, n.transition), v = w, eo(g), v;
}
const Nh = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ko(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ih = (e, t) => {
  const n = {};
  for (const r in e)
    (!Cs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function zh(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Bl(r, a, d) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const f = u[c];
        if (a[f] !== r[f] && !Lo(d, f))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? a ? Bl(r, a, d) : !0 : !!a;
  return !1;
}
function Bl(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (t[o] !== e[o] && !Lo(n, o))
      return !0;
  }
  return !1;
}
function Rh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ac = (e) => e.__isSuspense;
function jh(e, t) {
  t && t.pendingBranch ? le(e) ? t.effects.push(...e) : t.effects.push(e) : Gp(e);
}
const U = Symbol.for("v-fgt"), Fo = Symbol.for("v-txt"), ht = Symbol.for("v-cmt"), ma = Symbol.for("v-stc"), Gr = [];
let St = null;
function S(e = !1) {
  Gr.push(St = e ? null : []);
}
function Vh() {
  Gr.pop(), St = Gr[Gr.length - 1] || null;
}
let ii = 1;
function Hl(e, t = !1) {
  ii += e, e < 0 && St && t && (St.hasOnce = !0);
}
function Dc(e) {
  return e.dynamicChildren = ii > 0 ? St || ir : null, Vh(), ii > 0 && St && St.push(e), e;
}
function T(e, t, n, r, i, o) {
  return Dc(
    _(
      e,
      t,
      n,
      r,
      i,
      o,
      !0
    )
  );
}
function ke(e, t, n, r, i) {
  return Dc(
    q(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function oi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function zn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Pc = ({ key: e }) => e ?? null, qi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Be(e) || Qe(e) || fe(e) ? { i: Je, r: e, k: t, f: !!n } : e : null);
function _(e, t = null, n = null, r = 0, i = null, o = e === U ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Pc(t),
    ref: t && qi(t),
    scopeId: ec,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Je
  };
  return s ? (Us(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Be(n) ? 8 : 16), ii > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  St && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && St.push(l), l;
}
const q = Uh;
function Uh(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === fc) && (e = ht), oi(e)) {
    const s = rn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Us(s, n), ii > 0 && !o && St && (s.shapeFlag & 6 ? St[St.indexOf(e)] = s : St.push(s)), s.patchFlag = -2, s;
  }
  if (Qh(e) && (e = e.__vccOpts), t) {
    t = Bh(t);
    let { class: s, style: l } = t;
    s && !Be(s) && (t.class = ye(s)), Le(l) && ($s(l) && !le(l) && (l = tt({}, l)), t.style = hi(l));
  }
  const a = Be(e) ? 1 : Ac(e) ? 128 : nc(e) ? 64 : Le(e) ? 4 : fe(e) ? 2 : 0;
  return _(
    e,
    t,
    n,
    r,
    i,
    a,
    o,
    !0
  );
}
function Bh(e) {
  return e ? $s(e) || yc(e) ? tt({}, e) : e : null;
}
function rn(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, d = t ? ur(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Pc(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? le(o) ? o.concat(qi(t)) : [o, qi(t)] : qi(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== U ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && rn(e.ssContent),
    ssFallback: e.ssFallback && rn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && ni(
    u,
    l.clone(u)
  ), u;
}
function te(e = " ", t = 0) {
  return q(Fo, null, e, t);
}
function Q(e = "", t = !1) {
  return t ? (S(), ke(ht, null, e)) : q(ht, null, e);
}
function qt(e) {
  return e == null || typeof e == "boolean" ? q(ht) : le(e) ? q(
    U,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : oi(e) ? vn(e) : q(Fo, null, String(e));
}
function vn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rn(e);
}
function Us(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (le(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Us(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !yc(t) ? t._ctx = Je : i === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else fe(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [te(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ur(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = ye([t.class, r.class]));
      else if (i === "style")
        t.style = hi([t.style, r.style]);
      else if (ko(i)) {
        const o = t[i], a = r[i];
        a && o !== a && !(le(o) && o.includes(a)) && (t[i] = o ? [].concat(o, a) : a);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Vt(e, t, n, r = null) {
  Nt(e, t, 7, [
    n,
    r
  ]);
}
const Hh = bc();
let qh = 0;
function Wh(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || Hh, o = {
    uid: qh++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new fp(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: xc(r, i),
    emitsOptions: Oc(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: $e,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: $e,
    data: $e,
    props: $e,
    attrs: $e,
    slots: $e,
    refs: $e,
    setupState: $e,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Fh.bind(null, o), e.ce && e.ce(o), o;
}
let Ke = null;
const Bs = () => Ke || Je;
let ro, Ba;
{
  const e = Co(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  ro = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ke = n
  ), Ba = t(
    "__VUE_SSR_SETTERS__",
    (n) => ai = n
  );
}
const bi = (e) => {
  const t = Ke;
  return ro(e), e.scope.on(), () => {
    e.scope.off(), ro(t);
  };
}, ql = () => {
  Ke && Ke.scope.off(), ro(null);
};
function Mc(e) {
  return e.vnode.shapeFlag & 4;
}
let ai = !1;
function Gh(e, t = !1, n = !1) {
  t && Ba(t);
  const { props: r, children: i } = e.vnode, o = Mc(e);
  xh(e, r, o, t), Eh(e, i, n);
  const a = o ? Kh(e, t) : void 0;
  return t && Ba(!1), a;
}
function Kh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, mh);
  const { setup: r } = n;
  if (r) {
    sn();
    const i = e.setupContext = r.length > 1 ? Xh(e) : null, o = bi(e), a = wr(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = ku(a);
    if (ln(), o(), (s || e.sp) && !lr(e) && uc(e), s) {
      if (a.then(ql, ql), t)
        return a.then((l) => {
          Wl(e, l);
        }).catch((l) => {
          Po(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Wl(e, a);
  } else
    $c(e);
}
function Wl(e, t, n) {
  fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Le(t) && (e.setupState = Ku(t)), $c(e);
}
function $c(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Mt);
  {
    const i = bi(e);
    sn();
    try {
      ph(e);
    } finally {
      ln(), i();
    }
  }
}
const Yh = {
  get(e, t) {
    return ot(e, "get", ""), e[t];
  }
};
function Xh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Yh),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function No(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ku($p(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Wr)
        return Wr[n](e);
    },
    has(t, n) {
      return n in t || n in Wr;
    }
  })) : e.proxy;
}
const Zh = /(?:^|[-_])(\w)/g, Jh = (e) => e.replace(Zh, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Lc(e, t = !0) {
  return fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Fc(e, t, n = !1) {
  let r = Lc(t);
  if (!r && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && e && e.parent) {
    const i = (o) => {
      for (const a in o)
        if (o[a] === t)
          return a;
    };
    r = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return r ? Jh(r) : n ? "App" : "Anonymous";
}
function Qh(e) {
  return fe(e) && "__vccOpts" in e;
}
const L = (e, t) => Ip(e, t, ai);
function je(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Le(t) && !le(t) ? oi(t) ? q(e, null, [t]) : q(e, t) : q(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && oi(n) && (n = [n]), q(e, t, n));
}
const e1 = "3.5.13";
let Ha;
const Gl = typeof window < "u" && window.trustedTypes;
if (Gl)
  try {
    Ha = /* @__PURE__ */ Gl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Nc = Ha ? (e) => Ha.createHTML(e) : (e) => e, t1 = "http://www.w3.org/2000/svg", n1 = "http://www.w3.org/1998/Math/MathML", Zt = typeof document < "u" ? document : null, Kl = Zt && /* @__PURE__ */ Zt.createElement("template"), r1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Zt.createElementNS(t1, e) : t === "mathml" ? Zt.createElementNS(n1, e) : n ? Zt.createElement(e, { is: n }) : Zt.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Zt.createTextNode(e),
  createComment: (e) => Zt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Zt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, o) {
    const a = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Kl.innerHTML = Nc(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Kl.content;
      if (r === "svg" || r === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, cn = "transition", Ar = "animation", si = Symbol("_vtc"), Ic = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, i1 = /* @__PURE__ */ tt(
  {},
  oc,
  Ic
), o1 = (e) => (e.displayName = "Transition", e.props = i1, e), cr = /* @__PURE__ */ o1(
  (e, { slots: t }) => je(Jp, a1(e), t)
), Mn = (e, t = []) => {
  le(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Yl = (e) => e ? le(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function a1(e) {
  const t = {};
  for (const P in e)
    P in Ic || (t[P] = e[P]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: i,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: a = `${n}-enter-active`,
    enterToClass: s = `${n}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: d = a,
    appearToClass: u = s,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, h = s1(i), p = h && h[0], g = h && h[1], {
    onBeforeEnter: v,
    onEnter: y,
    onEnterCancelled: w,
    onLeave: k,
    onLeaveCancelled: O,
    onBeforeAppear: D = v,
    onAppear: N = y,
    onAppearCancelled: W = w
  } = t, M = (P, ee, he, Te) => {
    P._enterCancelled = Te, $n(P, ee ? u : s), $n(P, ee ? d : a), he && he();
  }, Y = (P, ee) => {
    P._isLeaving = !1, $n(P, c), $n(P, m), $n(P, f), ee && ee();
  }, B = (P) => (ee, he) => {
    const Te = P ? N : y, ge = () => M(ee, P, he);
    Mn(Te, [ee, ge]), Xl(() => {
      $n(ee, P ? l : o), Xt(ee, P ? u : s), Yl(Te) || Zl(ee, r, p, ge);
    });
  };
  return tt(t, {
    onBeforeEnter(P) {
      Mn(v, [P]), Xt(P, o), Xt(P, a);
    },
    onBeforeAppear(P) {
      Mn(D, [P]), Xt(P, l), Xt(P, d);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(P, ee) {
      P._isLeaving = !0;
      const he = () => Y(P, ee);
      Xt(P, c), P._enterCancelled ? (Xt(P, f), ed()) : (ed(), Xt(P, f)), Xl(() => {
        P._isLeaving && ($n(P, c), Xt(P, m), Yl(k) || Zl(P, r, g, he));
      }), Mn(k, [P, he]);
    },
    onEnterCancelled(P) {
      M(P, !1, void 0, !0), Mn(w, [P]);
    },
    onAppearCancelled(P) {
      M(P, !0, void 0, !0), Mn(W, [P]);
    },
    onLeaveCancelled(P) {
      Y(P), Mn(O, [P]);
    }
  });
}
function s1(e) {
  if (e == null)
    return null;
  if (Le(e))
    return [pa(e.enter), pa(e.leave)];
  {
    const t = pa(e);
    return [t, t];
  }
}
function pa(e) {
  return rp(e);
}
function Xt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[si] || (e[si] = /* @__PURE__ */ new Set())).add(t);
}
function $n(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[si];
  n && (n.delete(t), n.size || (e[si] = void 0));
}
function Xl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let l1 = 0;
function Zl(e, t, n, r) {
  const i = e._endId = ++l1, o = () => {
    i === e._endId && r();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: a, timeout: s, propCount: l } = d1(e, t);
  if (!a)
    return r();
  const d = a + "end";
  let u = 0;
  const c = () => {
    e.removeEventListener(d, f), o();
  }, f = (m) => {
    m.target === e && ++u >= l && c();
  };
  setTimeout(() => {
    u < l && c();
  }, s + 1), e.addEventListener(d, f);
}
function d1(e, t) {
  const n = window.getComputedStyle(e), r = (h) => (n[h] || "").split(", "), i = r(`${cn}Delay`), o = r(`${cn}Duration`), a = Jl(i, o), s = r(`${Ar}Delay`), l = r(`${Ar}Duration`), d = Jl(s, l);
  let u = null, c = 0, f = 0;
  t === cn ? a > 0 && (u = cn, c = a, f = o.length) : t === Ar ? d > 0 && (u = Ar, c = d, f = l.length) : (c = Math.max(a, d), u = c > 0 ? a > d ? cn : Ar : null, f = u ? u === cn ? o.length : l.length : 0);
  const m = u === cn && /\b(transform|all)(,|$)/.test(
    r(`${cn}Property`).toString()
  );
  return {
    type: u,
    timeout: c,
    propCount: f,
    hasTransform: m
  };
}
function Jl(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Ql(n) + Ql(e[r])));
}
function Ql(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ed() {
  return document.body.offsetHeight;
}
function u1(e, t, n) {
  const r = e[si];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const io = Symbol("_vod"), zc = Symbol("_vsh"), c1 = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[io] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Dr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Dr(e, !0), r.enter(e)) : r.leave(e, () => {
      Dr(e, !1);
    }) : Dr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Dr(e, t);
  }
};
function Dr(e, t) {
  e.style.display = t ? e[io] : "none", e[zc] = !t;
}
const f1 = Symbol(""), m1 = /(^|;)\s*display\s*:/;
function p1(e, t, n) {
  const r = e.style, i = Be(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Be(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          n[s] == null && Wi(r, s, "");
        }
      else
        for (const a in t)
          n[a] == null && Wi(r, a, "");
    for (const a in n)
      a === "display" && (o = !0), Wi(r, a, n[a]);
  } else if (i) {
    if (t !== n) {
      const a = r[f1];
      a && (n += ";" + a), r.cssText = n, o = m1.test(n);
    }
  } else t && e.removeAttribute("style");
  io in e && (e[io] = o ? r.display : "", e[zc] && (r.display = "none"));
}
const td = /\s*!important$/;
function Wi(e, t, n) {
  if (le(n))
    n.forEach((r) => Wi(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = h1(e, t);
    td.test(n) ? e.setProperty(
      Yn(r),
      n.replace(td, ""),
      "important"
    ) : e[r] = n;
  }
}
const nd = ["Webkit", "Moz", "ms"], ha = {};
function h1(e, t) {
  const n = ha[t];
  if (n)
    return n;
  let r = At(t);
  if (r !== "filter" && r in e)
    return ha[t] = r;
  r = Eo(r);
  for (let i = 0; i < nd.length; i++) {
    const o = nd[i] + r;
    if (o in e)
      return ha[t] = o;
  }
  return t;
}
const rd = "http://www.w3.org/1999/xlink";
function id(e, t, n, r, i, o = dp(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(rd, t.slice(6, t.length)) : e.setAttributeNS(rd, t, n) : n == null || o && !Cu(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ft(n) ? String(n) : n
  );
}
function od(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Nc(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = Cu(n) : n == null && s === "string" ? (n = "", a = !0) : s === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function Rc(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function b1(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ad = Symbol("_vei");
function g1(e, t, n, r, i = null) {
  const o = e[ad] || (e[ad] = {}), a = o[t];
  if (r && a)
    a.value = r;
  else {
    const [s, l] = v1(t);
    if (r) {
      const d = o[t] = x1(
        r,
        i
      );
      Rc(e, s, d, l);
    } else a && (b1(e, s, a, l), o[t] = void 0);
  }
}
const sd = /(?:Once|Passive|Capture)$/;
function v1(e) {
  let t;
  if (sd.test(e)) {
    t = {};
    let r;
    for (; r = e.match(sd); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Yn(e.slice(2)), t];
}
let ba = 0;
const y1 = /* @__PURE__ */ Promise.resolve(), w1 = () => ba || (y1.then(() => ba = 0), ba = Date.now());
function x1(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Nt(
      k1(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = w1(), n;
}
function k1(e, t) {
  if (le(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const ld = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _1 = (e, t, n, r, i, o) => {
  const a = i === "svg";
  t === "class" ? u1(e, r, a) : t === "style" ? p1(e, n, r) : ko(t) ? Cs(t) || g1(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : S1(e, t, r, a)) ? (od(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && id(e, t, r, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Be(r)) ? od(e, At(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), id(e, t, r, a));
};
function S1(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ld(t) && fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ld(t) && Be(n) ? !1 : t in e;
}
const dd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return le(t) ? (n) => Bi(t, n) : t;
}, ga = Symbol("_assign"), E1 = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[ga] = dd(n), Rc(e, "change", () => {
      const r = e._modelValue, i = C1(e), o = e.checked, a = e[ga];
      if (le(r)) {
        const s = Tu(r, i), l = s !== -1;
        if (o && !l)
          a(r.concat(i));
        else if (!o && l) {
          const d = [...r];
          d.splice(s, 1), a(d);
        }
      } else if (_o(r)) {
        const s = new Set(r);
        o ? s.add(i) : s.delete(i), a(s);
      } else
        a(jc(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ud,
  beforeUpdate(e, t, n) {
    e[ga] = dd(n), ud(e, t, n);
  }
};
function ud(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let i;
  if (le(t))
    i = Tu(t, r.props.value) > -1;
  else if (_o(t))
    i = t.has(r.props.value);
  else {
    if (t === n) return;
    i = To(t, jc(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
function C1(e) {
  return "_value" in e ? e._value : e.value;
}
function jc(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const T1 = /* @__PURE__ */ tt({ patchProp: _1 }, r1);
let cd;
function O1() {
  return cd || (cd = Th(T1));
}
const A1 = (...e) => {
  const t = O1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = P1(r);
    if (!i) return;
    const o = t._component;
    !fe(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = n(i, !1, D1(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
};
function D1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function P1(e) {
  return Be(e) ? document.querySelector(e) : e;
}
function Vc(e, t, n) {
  let r = Z(n == null ? void 0 : n.value), i = L(() => e.value !== void 0);
  return [L(() => i.value ? e.value : r.value), function(o) {
    return i.value || (r.value = o), t == null ? void 0 : t(o);
  }];
}
function Hs(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function gi() {
  let e = [], t = { addEventListener(n, r, i, o) {
    return n.addEventListener(r, i, o), t.add(() => n.removeEventListener(r, i, o));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return Hs(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, i) {
    let o = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: i }), this.add(() => {
      Object.assign(n.style, { [r]: o });
    });
  }, group(n) {
    let r = gi();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let i of e.splice(r, 1)) i();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
var fd;
let M1 = Symbol("headlessui.useid"), $1 = 0;
const Dt = (fd = Qp) != null ? fd : function() {
  return Ge(M1, () => `${++$1}`)();
};
function pe(e) {
  var t;
  if (e == null || e.value == null) return null;
  let n = (t = e.value.$el) != null ? t : e.value;
  return n instanceof Node ? n : null;
}
function et(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, et), r;
}
var L1 = Object.defineProperty, F1 = (e, t, n) => t in e ? L1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, md = (e, t, n) => (F1(e, typeof t != "symbol" ? t + "" : t, n), n);
let N1 = class {
  constructor() {
    md(this, "current", this.detect()), md(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, vi = new N1();
function Kt(e) {
  if (vi.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = pe(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let qa = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Tt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Tt || {}), oo = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(oo || {}), I1 = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(I1 || {});
function z1(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(qa)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var qs = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(qs || {});
function Uc(e, t = 0) {
  var n;
  return e === ((n = Kt(e)) == null ? void 0 : n.body) ? !1 : et(t, { 0() {
    return e.matches(qa);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(qa)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var R1 = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(R1 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Hn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let j1 = ["textarea", "input"].join(",");
function V1(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, j1)) != null ? n : !1;
}
function Ws(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let i = t(n), o = t(r);
    if (i === null || o === null) return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function fr(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
  var o;
  let a = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, s = Array.isArray(e) ? n ? Ws(e) : e : z1(e);
  i.length > 0 && s.length > 1 && (s = s.filter((h) => !i.includes(h))), r = r ?? a.activeElement;
  let l = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, s.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, s.indexOf(r)) + 1;
    if (t & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, f = s.length, m;
  do {
    if (c >= f || c + f <= 0) return 0;
    let h = d + c;
    if (t & 16) h = (h + f) % f;
    else {
      if (h < 0) return 3;
      if (h >= f) return 1;
    }
    m = s[h], m == null || m.focus(u), c += l;
  } while (m !== a.activeElement);
  return t & 6 && V1(m) && m.select(), 2;
}
function Bc() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function U1() {
  return /Android/gi.test(window.navigator.userAgent);
}
function B1() {
  return Bc() || U1();
}
function Di(e, t, n) {
  vi.isServer || wt((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function Hc(e, t, n) {
  vi.isServer || wt((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
function qc(e, t, n = L(() => !0)) {
  function r(o, a) {
    if (!n.value || o.defaultPrevented) return;
    let s = a(o);
    if (s === null || !s.getRootNode().contains(s)) return;
    let l = function d(u) {
      return typeof u == "function" ? d(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let d of l) {
      if (d === null) continue;
      let u = d instanceof HTMLElement ? d : pe(d);
      if (u != null && u.contains(s) || o.composed && o.composedPath().includes(u)) return;
    }
    return !Uc(s, qs.Loose) && s.tabIndex !== -1 && o.preventDefault(), t(o, s);
  }
  let i = Z(null);
  Di("pointerdown", (o) => {
    var a, s;
    n.value && (i.value = ((s = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : s[0]) || o.target);
  }, !0), Di("mousedown", (o) => {
    var a, s;
    n.value && (i.value = ((s = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : s[0]) || o.target);
  }, !0), Di("click", (o) => {
    B1() || i.value && (r(o, () => i.value), i.value = null);
  }, !0), Di("touchend", (o) => r(o, () => o.target instanceof HTMLElement ? o.target : null), !0), Hc("blur", (o) => r(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function pd(e, t) {
  if (e) return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function H1(e, t) {
  let n = Z(pd(e.value.type, e.value.as));
  return Ue(() => {
    n.value = pd(e.value.type, e.value.as);
  }), wt(() => {
    var r;
    n.value || pe(t) && pe(t) instanceof HTMLButtonElement && !((r = pe(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function hd(e) {
  return [e.screenX, e.screenY];
}
function q1() {
  let e = Z([-1, -1]);
  return { wasMoved(t) {
    let n = hd(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = hd(t);
  } };
}
function W1({ container: e, accept: t, walk: n, enabled: r }) {
  wt(() => {
    let i = e.value;
    if (!i || r !== void 0 && !r.value) return;
    let o = Kt(e);
    if (!o) return;
    let a = Object.assign((l) => t(l), { acceptNode: t }), s = o.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; s.nextNode(); ) n(s.currentNode);
  });
}
var pr = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(pr || {}), xn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(xn || {});
function Ye({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...i }) {
  var o;
  let a = Gc(r, n), s = Object.assign(i, { props: a });
  if (e || t & 2 && a.static) return va(s);
  if (t & 1) {
    let l = (o = a.unmount) == null || o ? 0 : 1;
    return et(l, { 0() {
      return null;
    }, 1() {
      return va({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return va(s);
}
function va({ props: e, attrs: t, slots: n, slot: r, name: i }) {
  var o, a;
  let { as: s, ...l } = Io(e, ["unmount", "static"]), d = (o = n.default) == null ? void 0 : o.call(n, r), u = {};
  if (r) {
    let c = !1, f = [];
    for (let [m, h] of Object.entries(r)) typeof h == "boolean" && (c = !0), h === !0 && f.push(m);
    c && (u["data-headlessui-state"] = f.join(" "));
  }
  if (s === "template") {
    if (d = Wc(d ?? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = d ?? [];
      if (!G1(c) || f.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((p) => p.trim()).filter((p, g, v) => v.indexOf(p) === g).sort((p, g) => p.localeCompare(g)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      let m = Gc((a = c.props) != null ? a : {}, l, u), h = rn(c, m, !0);
      for (let p in m) p.startsWith("on") && (h.props || (h.props = {}), h.props[p] = m[p]);
      return h;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return je(s, Object.assign({}, l, u), { default: () => d });
}
function Wc(e) {
  return e.flatMap((t) => t.type === U ? Wc(t.children) : [t]);
}
function Gc(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let i in r) i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n) Object.assign(t, { [r](i, ...o) {
    let a = n[r];
    for (let s of a) {
      if (i instanceof Event && i.defaultPrevented) return;
      s(i, ...o);
    }
  } });
  return t;
}
function Kc(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Io(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function G1(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var hr = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(hr || {});
let li = /* @__PURE__ */ ve({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    var r;
    let { features: i, ...o } = e, a = { "aria-hidden": (i & 2) === 2 ? !0 : (r = o["aria-hidden"]) != null ? r : void 0, hidden: (i & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return Ye({ ourProps: a, theirProps: o, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} }), Yc = Symbol("Context");
var it = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(it || {});
function K1() {
  return zo() !== null;
}
function zo() {
  return Ge(Yc, null);
}
function Xc(e) {
  bt(Yc, e);
}
var Re = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Re || {});
function Y1(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Rn = [];
Y1(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Rn[0] !== t.target && (Rn.unshift(t.target), Rn = Rn.filter((n) => n != null && n.isConnected), Rn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function X1(e) {
  throw new Error("Unexpected object: " + e);
}
var pt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(pt || {});
function Z1(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), i = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let o = 0; o < n.length; ++o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 1: {
      i === -1 && (i = n.length);
      for (let o = i - 1; o >= 0; --o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 2: {
      for (let o = i + 1; o < n.length; ++o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 3: {
      for (let o = n.length - 1; o >= 0; --o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 4: {
      for (let o = 0; o < n.length; ++o) if (t.resolveId(n[o], o, n) === e.id) return o;
      return r;
    }
    case 5:
      return null;
    default:
      X1(e);
  }
}
function Gs(e = {}, t = null, n = []) {
  for (let [r, i] of Object.entries(e)) Jc(n, Zc(t, r), i);
  return n;
}
function Zc(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Jc(e, t, n) {
  if (Array.isArray(n)) for (let [r, i] of n.entries()) Jc(e, Zc(t, r.toString()), i);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Gs(n, t, e);
}
function J1(e) {
  var t, n;
  let r = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (r) {
    for (let i of r.elements) if (i !== e && (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image")) {
      i.click();
      return;
    }
    (n = r.requestSubmit) == null || n.call(r);
  }
}
function Qc(e, t, n, r) {
  vi.isServer || wt((i) => {
    e = e ?? window, e.addEventListener(t, n, r), i(() => e.removeEventListener(t, n, r));
  });
}
var Fr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Fr || {});
function Q1() {
  let e = Z(0);
  return Hc("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function ef(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let r = pe(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var tf = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(tf || {});
let Pr = Object.assign(/* @__PURE__ */ ve({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: Z(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let i = Z(null);
  r({ el: i, $el: i });
  let o = L(() => Kt(i)), a = Z(!1);
  Ue(() => a.value = !0), lt(() => a.value = !1), t0({ ownerDocument: o }, L(() => a.value && !!(e.features & 16)));
  let s = n0({ ownerDocument: o, container: i, initialFocus: L(() => e.initialFocus) }, L(() => a.value && !!(e.features & 2)));
  r0({ ownerDocument: o, container: i, containers: e.containers, previousActiveElement: s }, L(() => a.value && !!(e.features & 8)));
  let l = Q1();
  function d(m) {
    let h = pe(i);
    h && ((p) => p())(() => {
      et(l.value, { [Fr.Forwards]: () => {
        fr(h, Tt.First, { skipElements: [m.relatedTarget] });
      }, [Fr.Backwards]: () => {
        fr(h, Tt.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let u = Z(!1);
  function c(m) {
    m.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function f(m) {
    if (!a.value) return;
    let h = ef(e.containers);
    pe(i) instanceof HTMLElement && h.add(pe(i));
    let p = m.relatedTarget;
    p instanceof HTMLElement && p.dataset.headlessuiFocusGuard !== "true" && (nf(h, p) || (u.value ? fr(pe(i), et(l.value, { [Fr.Forwards]: () => Tt.Next, [Fr.Backwards]: () => Tt.Previous }) | Tt.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && Hn(m.target)));
  }
  return () => {
    let m = {}, h = { ref: i, onKeydown: c, onFocusout: f }, { features: p, initialFocus: g, containers: v, ...y } = e;
    return je(U, [!!(p & 4) && je(li, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: hr.Focusable }), Ye({ ourProps: h, theirProps: { ...t, ...y }, slot: m, attrs: t, slots: n, name: "FocusTrap" }), !!(p & 4) && je(li, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: hr.Focusable })]);
  };
} }), { features: tf });
function e0(e) {
  let t = Z(Rn.slice());
  return st([e], ([n], [r]) => {
    r === !0 && n === !1 ? Hs(() => {
      t.value.splice(0);
    }) : r === !1 && n === !0 && (t.value = Rn.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((r) => r != null && r.isConnected)) != null ? n : null;
  };
}
function t0({ ownerDocument: e }, t) {
  let n = e0(t);
  Ue(() => {
    wt(() => {
      var r, i;
      t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((i = e.value) == null ? void 0 : i.body) && Hn(n());
    }, { flush: "post" });
  }), lt(() => {
    t.value && Hn(n());
  });
}
function n0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let i = Z(null), o = Z(!1);
  return Ue(() => o.value = !0), lt(() => o.value = !1), Ue(() => {
    st([t, n, r], (a, s) => {
      if (a.every((d, u) => (s == null ? void 0 : s[u]) === d) || !r.value) return;
      let l = pe(t);
      l && Hs(() => {
        var d, u;
        if (!o.value) return;
        let c = pe(n), f = (d = e.value) == null ? void 0 : d.activeElement;
        if (c) {
          if (c === f) {
            i.value = f;
            return;
          }
        } else if (l.contains(f)) {
          i.value = f;
          return;
        }
        c ? Hn(c) : fr(l, Tt.First | Tt.NoScroll) === oo.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function r0({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, i) {
  var o;
  Qc((o = e.value) == null ? void 0 : o.defaultView, "focus", (a) => {
    if (!i.value) return;
    let s = ef(n);
    pe(t) instanceof HTMLElement && s.add(pe(t));
    let l = r.value;
    if (!l) return;
    let d = a.target;
    d && d instanceof HTMLElement ? nf(s, d) ? (r.value = d, Hn(d)) : (a.preventDefault(), a.stopPropagation(), Hn(l)) : Hn(r.value);
  }, !0);
}
function nf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function i0(e) {
  let t = Na(e.getSnapshot());
  return lt(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function o0(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(i) {
    return r.add(i), () => r.delete(i);
  }, dispatch(i, ...o) {
    let a = t[i].call(n, ...o);
    a && (n = a, r.forEach((s) => s()));
  } };
}
function a0() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, i = r.clientWidth - r.offsetWidth, o = e - i;
    n.style(r, "paddingRight", `${o}px`);
  } };
}
function s0() {
  return Bc() ? { before({ doc: e, d: t, meta: n }) {
    function r(i) {
      return n.containers.flatMap((o) => o()).some((o) => o.contains(i));
    }
    t.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = gi();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let o = (i = window.scrollY) != null ? i : window.pageYOffset, a = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let l = s.target.closest("a");
          if (!l) return;
          let { hash: d } = new URL(l.href), u = e.querySelector(d);
          u && !r(u) && (a = u);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (r(s.target)) {
          let l = s.target;
          for (; l.parentElement && r(l.parentElement); ) l = l.parentElement;
          t.style(l, "overscrollBehavior", "contain");
        } else t.style(s.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (r(s.target)) {
            let l = s.target;
            for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth); ) l = l.parentElement;
            l.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var s;
        let l = (s = window.scrollY) != null ? s : window.pageYOffset;
        o !== l && window.scrollTo(0, o), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
      });
    });
  } } : {};
}
function l0() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function d0(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let jn = o0(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: gi(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: d0(n) }, i = [s0(), a0(), l0()];
  i.forEach(({ before: o }) => o == null ? void 0 : o(r)), i.forEach(({ after: o }) => o == null ? void 0 : o(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
jn.subscribe(() => {
  let e = jn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", i = n.count !== 0;
    (i && !r || !i && r) && jn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && jn.dispatch("TEARDOWN", n);
  }
});
function u0(e, t, n) {
  let r = i0(jn), i = L(() => {
    let o = e.value ? r.value.get(e.value) : void 0;
    return o ? o.count > 0 : !1;
  });
  return st([e, t], ([o, a], [s], l) => {
    if (!o || !a) return;
    jn.dispatch("PUSH", o, n);
    let d = !1;
    l(() => {
      d || (jn.dispatch("POP", s ?? o, n), d = !0);
    });
  }, { immediate: !0 }), i;
}
let ya = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map();
function bd(e, t = Z(!0)) {
  wt((n) => {
    var r;
    if (!t.value) return;
    let i = pe(e);
    if (!i) return;
    n(function() {
      var a;
      if (!i) return;
      let s = (a = Mr.get(i)) != null ? a : 1;
      if (s === 1 ? Mr.delete(i) : Mr.set(i, s - 1), s !== 1) return;
      let l = ya.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, ya.delete(i));
    });
    let o = (r = Mr.get(i)) != null ? r : 0;
    Mr.set(i, o + 1), o === 0 && (ya.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
function c0({ defaultContainers: e = [], portals: t, mainTreeNodeRef: n } = {}) {
  let r = Z(null), i = Kt(r);
  function o() {
    var a, s, l;
    let d = [];
    for (let u of e) u !== null && (u instanceof HTMLElement ? d.push(u) : "value" in u && u.value instanceof HTMLElement && d.push(u.value));
    if (t != null && t.value) for (let u of t.value) d.push(u);
    for (let u of (a = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? a : []) u !== document.body && u !== document.head && u instanceof HTMLElement && u.id !== "headlessui-portal-root" && (u.contains(pe(r)) || u.contains((l = (s = pe(r)) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || d.some((c) => u.contains(c)) || d.push(u));
    return d;
  }
  return { resolveContainers: o, contains(a) {
    return o().some((s) => s.contains(a));
  }, mainTreeNodeRef: r, MainTreeNode() {
    return n != null ? null : je(li, { features: hr.Hidden, ref: r });
  } };
}
let rf = Symbol("ForcePortalRootContext");
function f0() {
  return Ge(rf, !1);
}
let gd = /* @__PURE__ */ ve({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return bt(rf, e.force), () => {
    let { force: r, ...i } = e;
    return Ye({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} }), of = Symbol("StackContext");
var Wa = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Wa || {});
function m0() {
  return Ge(of, () => {
  });
}
function p0({ type: e, enabled: t, element: n, onUpdate: r }) {
  let i = m0();
  function o(...a) {
    r == null || r(...a), i(...a);
  }
  Ue(() => {
    st(t, (a, s) => {
      a ? o(0, e, n) : s === !0 && o(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), lt(() => {
    t.value && o(1, e, n);
  }), bt(of, o);
}
let af = Symbol("DescriptionContext");
function h0() {
  let e = Ge(af, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function Ks({ slot: e = Z({}), name: t = "Description", props: n = {} } = {}) {
  let r = Z([]);
  function i(o) {
    return r.value.push(o), () => {
      let a = r.value.indexOf(o);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return bt(af, { register: i, slot: e, name: t, props: n }), L(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let sf = /* @__PURE__ */ ve({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let i = (r = e.id) != null ? r : `headlessui-description-${Dt()}`, o = h0();
  return Ue(() => lt(o.register(i))), () => {
    let { name: a = "Description", slot: s = Z({}), props: l = {} } = o, { ...d } = e, u = { ...Object.entries(l).reduce((c, [f, m]) => Object.assign(c, { [f]: ei(m) }), {}), id: i };
    return Ye({ ourProps: u, theirProps: d, slot: s.value, attrs: t, slots: n, name: a });
  };
} });
function b0(e) {
  let t = Kt(e);
  if (!t) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n) return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
const Ga = /* @__PURE__ */ new WeakMap();
function g0(e) {
  var t;
  return (t = Ga.get(e)) != null ? t : 0;
}
function vd(e, t) {
  let n = t(g0(e));
  return n <= 0 ? Ga.delete(e) : Ga.set(e, n), n;
}
let v0 = /* @__PURE__ */ ve({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = Z(null), i = L(() => Kt(r)), o = f0(), a = Ge(lf, null), s = Z(o === !0 || a == null ? b0(r.value) : a.resolveTarget());
  s.value && vd(s.value, (f) => f + 1);
  let l = Z(!1);
  Ue(() => {
    l.value = !0;
  }), wt(() => {
    o || a != null && (s.value = a.resolveTarget());
  });
  let d = Ge(Ka, null), u = !1, c = Bs();
  return st(r, () => {
    if (u || !d) return;
    let f = pe(r);
    f && (lt(d.register(f), c), u = !0);
  }), lt(() => {
    var f, m;
    let h = (f = i.value) == null ? void 0 : f.getElementById("headlessui-portal-root");
    !h || s.value !== h || vd(s.value, (p) => p - 1) || s.value.children.length > 0 || (m = s.value.parentElement) == null || m.removeChild(s.value);
  }), () => {
    if (!l.value || s.value === null) return null;
    let f = { ref: r, "data-headlessui-portal": "" };
    return je(Yp, { to: s.value }, Ye({ ourProps: f, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Ka = Symbol("PortalParentContext");
function y0() {
  let e = Ge(Ka, null), t = Z([]);
  function n(o) {
    return t.value.push(o), e && e.register(o), () => r(o);
  }
  function r(o) {
    let a = t.value.indexOf(o);
    a !== -1 && t.value.splice(a, 1), e && e.unregister(o);
  }
  let i = { register: n, unregister: r, portals: t };
  return [t, /* @__PURE__ */ ve({ name: "PortalWrapper", setup(o, { slots: a }) {
    return bt(Ka, i), () => {
      var s;
      return (s = a.default) == null ? void 0 : s.call(a);
    };
  } })];
}
let lf = Symbol("PortalGroupContext"), w0 = /* @__PURE__ */ ve({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = yr({ resolveTarget() {
    return e.target;
  } });
  return bt(lf, r), () => {
    let { target: i, ...o } = e;
    return Ye({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} });
var x0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(x0 || {});
let Ya = Symbol("DialogContext");
function Ro(e) {
  let t = Ge(Ya, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ro), n;
  }
  return t;
}
let Pi = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", k0 = /* @__PURE__ */ ve({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Pi }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: i }) {
  var o, a;
  let s = (o = e.id) != null ? o : `headlessui-dialog-${Dt()}`, l = Z(!1);
  Ue(() => {
    l.value = !0;
  });
  let d = !1, u = L(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (d || (d = !0, console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), c = Z(0), f = zo(), m = L(() => e.open === Pi && f !== null ? (f.value & it.Open) === it.Open : e.open), h = Z(null), p = L(() => Kt(h));
  if (i({ el: h, $el: h }), !(e.open !== Pi || f !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof m.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m.value === Pi ? void 0 : e.open}`);
  let g = L(() => l.value && m.value ? 0 : 1), v = L(() => g.value === 0), y = L(() => c.value > 1), w = Ge(Ya, null) !== null, [k, O] = y0(), { resolveContainers: D, mainTreeNodeRef: N, MainTreeNode: W } = c0({ portals: k, defaultContainers: [L(() => {
    var ie;
    return (ie = G.panelRef.value) != null ? ie : h.value;
  })] }), M = L(() => y.value ? "parent" : "leaf"), Y = L(() => f !== null ? (f.value & it.Closing) === it.Closing : !1), B = L(() => w || Y.value ? !1 : v.value), P = L(() => {
    var ie, me, He;
    return (He = Array.from((me = (ie = p.value) == null ? void 0 : ie.querySelectorAll("body > *")) != null ? me : []).find((Oe) => Oe.id === "headlessui-portal-root" ? !1 : Oe.contains(pe(N)) && Oe instanceof HTMLElement)) != null ? He : null;
  });
  bd(P, B);
  let ee = L(() => y.value ? !0 : v.value), he = L(() => {
    var ie, me, He;
    return (He = Array.from((me = (ie = p.value) == null ? void 0 : ie.querySelectorAll("[data-headlessui-portal]")) != null ? me : []).find((Oe) => Oe.contains(pe(N)) && Oe instanceof HTMLElement)) != null ? He : null;
  });
  bd(he, ee), p0({ type: "Dialog", enabled: L(() => g.value === 0), element: h, onUpdate: (ie, me) => {
    if (me === "Dialog") return et(ie, { [Wa.Add]: () => c.value += 1, [Wa.Remove]: () => c.value -= 1 });
  } });
  let Te = Ks({ name: "DialogDescription", slot: L(() => ({ open: m.value })) }), ge = Z(null), G = { titleId: ge, panelRef: Z(null), dialogState: g, setTitleId(ie) {
    ge.value !== ie && (ge.value = ie);
  }, close() {
    t("close", !1);
  } };
  bt(Ya, G);
  let ue = L(() => !(!v.value || y.value));
  qc(D, (ie, me) => {
    ie.preventDefault(), G.close(), nn(() => me == null ? void 0 : me.focus());
  }, ue);
  let Ie = L(() => !(y.value || g.value !== 0));
  Qc((a = p.value) == null ? void 0 : a.defaultView, "keydown", (ie) => {
    Ie.value && (ie.defaultPrevented || ie.key === Re.Escape && (ie.preventDefault(), ie.stopPropagation(), G.close()));
  });
  let Xe = L(() => !(Y.value || g.value !== 0 || w));
  return u0(p, Xe, (ie) => {
    var me;
    return { containers: [...(me = ie.containers) != null ? me : [], D] };
  }), wt((ie) => {
    if (g.value !== 0) return;
    let me = pe(h);
    if (!me) return;
    let He = new ResizeObserver((Oe) => {
      for (let nt of Oe) {
        let J = nt.target.getBoundingClientRect();
        J.x === 0 && J.y === 0 && J.width === 0 && J.height === 0 && G.close();
      }
    });
    He.observe(me), ie(() => He.disconnect());
  }), () => {
    let { open: ie, initialFocus: me, ...He } = e, Oe = { ...n, ref: h, id: s, role: u.value, "aria-modal": g.value === 0 ? !0 : void 0, "aria-labelledby": ge.value, "aria-describedby": Te.value }, nt = { open: g.value === 0 };
    return je(gd, { force: !0 }, () => [je(v0, () => je(w0, { target: h.value }, () => je(gd, { force: !1 }, () => je(Pr, { initialFocus: me, containers: D, features: v.value ? et(M.value, { parent: Pr.features.RestoreFocus, leaf: Pr.features.All & ~Pr.features.FocusLock }) : Pr.features.None }, () => je(O, {}, () => Ye({ ourProps: Oe, theirProps: { ...He, ...n }, slot: nt, attrs: n, slots: r, visible: g.value === 0, features: pr.RenderStrategy | pr.Static, name: "Dialog" })))))), je(W)]);
  };
} }), _0 = /* @__PURE__ */ ve({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let i = (r = e.id) != null ? r : `headlessui-dialog-overlay-${Dt()}`, o = Ro("DialogOverlay");
  function a(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), o.close());
  }
  return () => {
    let { ...s } = e;
    return Ye({ ourProps: { id: i, "aria-hidden": !0, onClick: a }, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} }), S0 = /* @__PURE__ */ ve({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-dialog-panel-${Dt()}`, a = Ro("DialogPanel");
  r({ el: a.panelRef, $el: a.panelRef });
  function s(l) {
    l.stopPropagation();
  }
  return () => {
    let { ...l } = e, d = { id: o, ref: a.panelRef, onClick: s };
    return Ye({ ourProps: d, theirProps: l, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), xr = /* @__PURE__ */ ve({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let i = (r = e.id) != null ? r : `headlessui-dialog-title-${Dt()}`, o = Ro("DialogTitle");
  return Ue(() => {
    o.setTitleId(i), lt(() => o.setTitleId(null));
  }), () => {
    let { ...a } = e;
    return Ye({ ourProps: { id: i }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} }), E0 = sf, yd = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function wd(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return r;
  let o = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), o = !0;
  let a = o ? (n = i.innerText) != null ? n : "" : r;
  return yd.test(a) && (a = a.replace(yd, "")), a;
}
function C0(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((i) => {
      let o = document.getElementById(i);
      if (o) {
        let a = o.getAttribute("aria-label");
        return typeof a == "string" ? a.trim() : wd(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return wd(e).trim();
}
function T0(e) {
  let t = Z(""), n = Z("");
  return () => {
    let r = pe(e);
    if (!r) return "";
    let i = r.innerText;
    if (t.value === i) return n.value;
    let o = C0(r).trim().toLowerCase();
    return t.value = i, n.value = o, o;
  };
}
function O0(e, t) {
  return e === t;
}
var A0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(A0 || {}), D0 = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(D0 || {}), P0 = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(P0 || {});
function M0(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let df = Symbol("ListboxContext");
function jo(e) {
  let t = Ge(df, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, jo), n;
  }
  return t;
}
let uf = /* @__PURE__ */ ve({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => O0 }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: r }) {
  let i = Z(1), o = Z(null), a = Z(null), s = Z(null), l = Z([]), d = Z(""), u = Z(null), c = Z(1);
  function f(w = (k) => k) {
    let k = u.value !== null ? l.value[u.value] : null, O = Ws(w(l.value.slice()), (N) => pe(N.dataRef.domRef)), D = k ? O.indexOf(k) : null;
    return D === -1 && (D = null), { options: O, activeOptionIndex: D };
  }
  let m = L(() => e.multiple ? 1 : 0), [h, p] = Vc(L(() => e.modelValue), (w) => r("update:modelValue", w), L(() => e.defaultValue)), g = L(() => h.value === void 0 ? et(m.value, { 1: [], 0: void 0 }) : h.value), v = { listboxState: i, value: g, mode: m, compare(w, k) {
    if (typeof e.by == "string") {
      let O = e.by;
      return (w == null ? void 0 : w[O]) === (k == null ? void 0 : k[O]);
    }
    return e.by(w, k);
  }, orientation: L(() => e.horizontal ? "horizontal" : "vertical"), labelRef: o, buttonRef: a, optionsRef: s, disabled: L(() => e.disabled), options: l, searchQuery: d, activeOptionIndex: u, activationTrigger: c, closeListbox() {
    e.disabled || i.value !== 1 && (i.value = 1, u.value = null);
  }, openListbox() {
    e.disabled || i.value !== 0 && (i.value = 0);
  }, goToOption(w, k, O) {
    if (e.disabled || i.value === 1) return;
    let D = f(), N = Z1(w === pt.Specific ? { focus: pt.Specific, id: k } : { focus: w }, { resolveItems: () => D.options, resolveActiveIndex: () => D.activeOptionIndex, resolveId: (W) => W.id, resolveDisabled: (W) => W.dataRef.disabled });
    d.value = "", u.value = N, c.value = O ?? 1, l.value = D.options;
  }, search(w) {
    if (e.disabled || i.value === 1) return;
    let k = d.value !== "" ? 0 : 1;
    d.value += w.toLowerCase();
    let O = (u.value !== null ? l.value.slice(u.value + k).concat(l.value.slice(0, u.value + k)) : l.value).find((N) => N.dataRef.textValue.startsWith(d.value) && !N.dataRef.disabled), D = O ? l.value.indexOf(O) : -1;
    D === -1 || D === u.value || (u.value = D, c.value = 1);
  }, clearSearch() {
    e.disabled || i.value !== 1 && d.value !== "" && (d.value = "");
  }, registerOption(w, k) {
    let O = f((D) => [...D, { id: w, dataRef: k }]);
    l.value = O.options, u.value = O.activeOptionIndex;
  }, unregisterOption(w) {
    let k = f((O) => {
      let D = O.findIndex((N) => N.id === w);
      return D !== -1 && O.splice(D, 1), O;
    });
    l.value = k.options, u.value = k.activeOptionIndex, c.value = 1;
  }, theirOnChange(w) {
    e.disabled || p(w);
  }, select(w) {
    e.disabled || p(et(m.value, { 0: () => w, 1: () => {
      let k = se(v.value.value).slice(), O = se(w), D = k.findIndex((N) => v.compare(O, se(N)));
      return D === -1 ? k.push(O) : k.splice(D, 1), k;
    } }));
  } };
  qc([a, s], (w, k) => {
    var O;
    v.closeListbox(), Uc(k, qs.Loose) || (w.preventDefault(), (O = pe(a)) == null || O.focus());
  }, L(() => i.value === 0)), bt(df, v), Xc(L(() => et(i.value, { 0: it.Open, 1: it.Closed })));
  let y = L(() => {
    var w;
    return (w = pe(a)) == null ? void 0 : w.closest("form");
  });
  return Ue(() => {
    st([y], () => {
      if (!y.value || e.defaultValue === void 0) return;
      function w() {
        v.theirOnChange(e.defaultValue);
      }
      return y.value.addEventListener("reset", w), () => {
        var k;
        (k = y.value) == null || k.removeEventListener("reset", w);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: w, modelValue: k, disabled: O, form: D, ...N } = e, W = { open: i.value === 0, disabled: O, value: g.value };
    return je(U, [...w != null && g.value != null ? Gs({ [w]: g.value }).map(([M, Y]) => je(li, Kc({ features: hr.Hidden, key: M, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: D, disabled: O, name: M, value: Y }))) : [], Ye({ ourProps: {}, theirProps: { ...n, ...Io(N, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: W, slots: t, attrs: n, name: "Listbox" })]);
  };
} }), cf = /* @__PURE__ */ ve({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-listbox-button-${Dt()}`, a = jo("ListboxButton");
  r({ el: a.buttonRef, $el: a.buttonRef });
  function s(c) {
    switch (c.key) {
      case Re.Space:
      case Re.Enter:
      case Re.ArrowDown:
        c.preventDefault(), a.openListbox(), nn(() => {
          var f;
          (f = pe(a.optionsRef)) == null || f.focus({ preventScroll: !0 }), a.value.value || a.goToOption(pt.First);
        });
        break;
      case Re.ArrowUp:
        c.preventDefault(), a.openListbox(), nn(() => {
          var f;
          (f = pe(a.optionsRef)) == null || f.focus({ preventScroll: !0 }), a.value.value || a.goToOption(pt.Last);
        });
        break;
    }
  }
  function l(c) {
    switch (c.key) {
      case Re.Space:
        c.preventDefault();
        break;
    }
  }
  function d(c) {
    a.disabled.value || (a.listboxState.value === 0 ? (a.closeListbox(), nn(() => {
      var f;
      return (f = pe(a.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (c.preventDefault(), a.openListbox(), M0(() => {
      var f;
      return (f = pe(a.optionsRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })));
  }
  let u = H1(L(() => ({ as: e.as, type: t.type })), a.buttonRef);
  return () => {
    var c, f;
    let m = { open: a.listboxState.value === 0, disabled: a.disabled.value, value: a.value.value }, { ...h } = e, p = { ref: a.buttonRef, id: o, type: u.value, "aria-haspopup": "listbox", "aria-controls": (c = pe(a.optionsRef)) == null ? void 0 : c.id, "aria-expanded": a.listboxState.value === 0, "aria-labelledby": a.labelRef.value ? [(f = pe(a.labelRef)) == null ? void 0 : f.id, o].join(" ") : void 0, disabled: a.disabled.value === !0 ? !0 : void 0, onKeydown: s, onKeyup: l, onClick: d };
    return Ye({ ourProps: p, theirProps: h, slot: m, attrs: t, slots: n, name: "ListboxButton" });
  };
} }), ff = /* @__PURE__ */ ve({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-listbox-options-${Dt()}`, a = jo("ListboxOptions"), s = Z(null);
  r({ el: a.optionsRef, $el: a.optionsRef });
  function l(c) {
    switch (s.value && clearTimeout(s.value), c.key) {
      case Re.Space:
        if (a.searchQuery.value !== "") return c.preventDefault(), c.stopPropagation(), a.search(c.key);
      case Re.Enter:
        if (c.preventDefault(), c.stopPropagation(), a.activeOptionIndex.value !== null) {
          let f = a.options.value[a.activeOptionIndex.value];
          a.select(f.dataRef.value);
        }
        a.mode.value === 0 && (a.closeListbox(), nn(() => {
          var f;
          return (f = pe(a.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
        }));
        break;
      case et(a.orientation.value, { vertical: Re.ArrowDown, horizontal: Re.ArrowRight }):
        return c.preventDefault(), c.stopPropagation(), a.goToOption(pt.Next);
      case et(a.orientation.value, { vertical: Re.ArrowUp, horizontal: Re.ArrowLeft }):
        return c.preventDefault(), c.stopPropagation(), a.goToOption(pt.Previous);
      case Re.Home:
      case Re.PageUp:
        return c.preventDefault(), c.stopPropagation(), a.goToOption(pt.First);
      case Re.End:
      case Re.PageDown:
        return c.preventDefault(), c.stopPropagation(), a.goToOption(pt.Last);
      case Re.Escape:
        c.preventDefault(), c.stopPropagation(), a.closeListbox(), nn(() => {
          var f;
          return (f = pe(a.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        break;
      case Re.Tab:
        c.preventDefault(), c.stopPropagation();
        break;
      default:
        c.key.length === 1 && (a.search(c.key), s.value = setTimeout(() => a.clearSearch(), 350));
        break;
    }
  }
  let d = zo(), u = L(() => d !== null ? (d.value & it.Open) === it.Open : a.listboxState.value === 0);
  return () => {
    var c, f;
    let m = { open: a.listboxState.value === 0 }, { ...h } = e, p = { "aria-activedescendant": a.activeOptionIndex.value === null || (c = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : c.id, "aria-multiselectable": a.mode.value === 1 ? !0 : void 0, "aria-labelledby": (f = pe(a.buttonRef)) == null ? void 0 : f.id, "aria-orientation": a.orientation.value, id: o, onKeydown: l, role: "listbox", tabIndex: 0, ref: a.optionsRef };
    return Ye({ ourProps: p, theirProps: h, slot: m, attrs: t, slots: n, features: pr.RenderStrategy | pr.Static, visible: u.value, name: "ListboxOptions" });
  };
} }), mf = /* @__PURE__ */ ve({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n, expose: r }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-listbox-option-${Dt()}`, a = jo("ListboxOption"), s = Z(null);
  r({ el: s, $el: s });
  let l = L(() => a.activeOptionIndex.value !== null ? a.options.value[a.activeOptionIndex.value].id === o : !1), d = L(() => et(a.mode.value, { 0: () => a.compare(se(a.value.value), se(e.value)), 1: () => se(a.value.value).some((w) => a.compare(se(w), se(e.value))) })), u = L(() => et(a.mode.value, { 1: () => {
    var w;
    let k = se(a.value.value);
    return ((w = a.options.value.find((O) => k.some((D) => a.compare(se(D), se(O.dataRef.value))))) == null ? void 0 : w.id) === o;
  }, 0: () => d.value })), c = T0(s), f = L(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return c();
  }, domRef: s }));
  Ue(() => a.registerOption(o, f)), lt(() => a.unregisterOption(o)), Ue(() => {
    st([a.listboxState, d], () => {
      a.listboxState.value === 0 && d.value && et(a.mode.value, { 1: () => {
        u.value && a.goToOption(pt.Specific, o);
      }, 0: () => {
        a.goToOption(pt.Specific, o);
      } });
    }, { immediate: !0 });
  }), wt(() => {
    a.listboxState.value === 0 && l.value && a.activationTrigger.value !== 0 && nn(() => {
      var w, k;
      return (k = (w = pe(s)) == null ? void 0 : w.scrollIntoView) == null ? void 0 : k.call(w, { block: "nearest" });
    });
  });
  function m(w) {
    if (e.disabled) return w.preventDefault();
    a.select(e.value), a.mode.value === 0 && (a.closeListbox(), nn(() => {
      var k;
      return (k = pe(a.buttonRef)) == null ? void 0 : k.focus({ preventScroll: !0 });
    }));
  }
  function h() {
    if (e.disabled) return a.goToOption(pt.Nothing);
    a.goToOption(pt.Specific, o);
  }
  let p = q1();
  function g(w) {
    p.update(w);
  }
  function v(w) {
    p.wasMoved(w) && (e.disabled || l.value || a.goToOption(pt.Specific, o, 0));
  }
  function y(w) {
    p.wasMoved(w) && (e.disabled || l.value && a.goToOption(pt.Nothing));
  }
  return () => {
    let { disabled: w } = e, k = { active: l.value, selected: d.value, disabled: w }, { value: O, disabled: D, ...N } = e, W = { id: o, ref: s, role: "option", tabIndex: w === !0 ? void 0 : -1, "aria-disabled": w === !0 ? !0 : void 0, "aria-selected": d.value, disabled: void 0, onClick: m, onFocus: h, onPointerenter: g, onMouseenter: g, onPointermove: v, onMousemove: v, onPointerleave: y, onMouseleave: y };
    return Ye({ ourProps: W, theirProps: N, slot: k, attrs: n, slots: t, name: "ListboxOption" });
  };
} }), pf = Symbol("LabelContext");
function hf() {
  let e = Ge(pf, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, hf), t;
  }
  return e;
}
function bf({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let r = Z([]);
  function i(o) {
    return r.value.push(o), () => {
      let a = r.value.indexOf(o);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return bt(pf, { register: i, slot: e, name: t, props: n }), L(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let $0 = /* @__PURE__ */ ve({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n }) {
  var r;
  let i = (r = e.id) != null ? r : `headlessui-label-${Dt()}`, o = hf();
  return Ue(() => lt(o.register(i))), () => {
    let { name: a = "Label", slot: s = {}, props: l = {} } = o, { passive: d, ...u } = e, c = { ...Object.entries(l).reduce((f, [m, h]) => Object.assign(f, { [m]: ei(h) }), {}), id: i };
    return d && (delete c.onClick, delete c.htmlFor, delete u.onClick), Ye({ ourProps: c, theirProps: u, slot: s, attrs: n, slots: t, name: a });
  };
} });
function L0(e, t) {
  return e === t;
}
let gf = Symbol("RadioGroupContext");
function vf(e) {
  let t = Ge(gf, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, vf), n;
  }
  return t;
}
let yf = /* @__PURE__ */ ve({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => L0 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: r, expose: i }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-radiogroup-${Dt()}`, s = Z(null), l = Z([]), d = bf({ name: "RadioGroupLabel" }), u = Ks({ name: "RadioGroupDescription" });
  i({ el: s, $el: s });
  let [c, f] = Vc(L(() => e.modelValue), (g) => t("update:modelValue", g), L(() => e.defaultValue)), m = { options: l, value: c, disabled: L(() => e.disabled), firstOption: L(() => l.value.find((g) => !g.propsRef.disabled)), containsCheckedOption: L(() => l.value.some((g) => m.compare(se(g.propsRef.value), se(e.modelValue)))), compare(g, v) {
    if (typeof e.by == "string") {
      let y = e.by;
      return (g == null ? void 0 : g[y]) === (v == null ? void 0 : v[y]);
    }
    return e.by(g, v);
  }, change(g) {
    var v;
    if (e.disabled || m.compare(se(c.value), se(g))) return !1;
    let y = (v = l.value.find((w) => m.compare(se(w.propsRef.value), se(g)))) == null ? void 0 : v.propsRef;
    return y != null && y.disabled ? !1 : (f(g), !0);
  }, registerOption(g) {
    l.value.push(g), l.value = Ws(l.value, (v) => v.element);
  }, unregisterOption(g) {
    let v = l.value.findIndex((y) => y.id === g);
    v !== -1 && l.value.splice(v, 1);
  } };
  bt(gf, m), W1({ container: L(() => pe(s)), accept(g) {
    return g.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : g.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(g) {
    g.setAttribute("role", "none");
  } });
  function h(g) {
    if (!s.value || !s.value.contains(g.target)) return;
    let v = l.value.filter((y) => y.propsRef.disabled === !1).map((y) => y.element);
    switch (g.key) {
      case Re.Enter:
        J1(g.currentTarget);
        break;
      case Re.ArrowLeft:
      case Re.ArrowUp:
        if (g.preventDefault(), g.stopPropagation(), fr(v, Tt.Previous | Tt.WrapAround) === oo.Success) {
          let y = l.value.find((w) => {
            var k;
            return w.element === ((k = Kt(s)) == null ? void 0 : k.activeElement);
          });
          y && m.change(y.propsRef.value);
        }
        break;
      case Re.ArrowRight:
      case Re.ArrowDown:
        if (g.preventDefault(), g.stopPropagation(), fr(v, Tt.Next | Tt.WrapAround) === oo.Success) {
          let y = l.value.find((w) => {
            var k;
            return w.element === ((k = Kt(w.element)) == null ? void 0 : k.activeElement);
          });
          y && m.change(y.propsRef.value);
        }
        break;
      case Re.Space:
        {
          g.preventDefault(), g.stopPropagation();
          let y = l.value.find((w) => {
            var k;
            return w.element === ((k = Kt(w.element)) == null ? void 0 : k.activeElement);
          });
          y && m.change(y.propsRef.value);
        }
        break;
    }
  }
  let p = L(() => {
    var g;
    return (g = pe(s)) == null ? void 0 : g.closest("form");
  });
  return Ue(() => {
    st([p], () => {
      if (!p.value || e.defaultValue === void 0) return;
      function g() {
        m.change(e.defaultValue);
      }
      return p.value.addEventListener("reset", g), () => {
        var v;
        (v = p.value) == null || v.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: g, name: v, form: y, ...w } = e, k = { ref: s, id: a, role: "radiogroup", "aria-labelledby": d.value, "aria-describedby": u.value, onKeydown: h };
    return je(U, [...v != null && c.value != null ? Gs({ [v]: c.value }).map(([O, D]) => je(li, Kc({ features: hr.Hidden, key: O, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: y, disabled: g, name: O, value: D }))) : [], Ye({ ourProps: k, theirProps: { ...n, ...Io(w, ["modelValue", "defaultValue", "by"]) }, slot: {}, attrs: n, slots: r, name: "RadioGroup" })]);
  };
} });
var F0 = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(F0 || {});
let wf = /* @__PURE__ */ ve({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-radiogroup-option-${Dt()}`, a = vf("RadioGroupOption"), s = bf({ name: "RadioGroupLabel" }), l = Ks({ name: "RadioGroupDescription" }), d = Z(null), u = L(() => ({ value: e.value, disabled: e.disabled })), c = Z(1);
  r({ el: d, $el: d });
  let f = L(() => pe(d));
  Ue(() => a.registerOption({ id: o, element: f, propsRef: u })), lt(() => a.unregisterOption(o));
  let m = L(() => {
    var k;
    return ((k = a.firstOption.value) == null ? void 0 : k.id) === o;
  }), h = L(() => a.disabled.value || e.disabled), p = L(() => a.compare(se(a.value.value), se(e.value))), g = L(() => h.value ? -1 : p.value || !a.containsCheckedOption.value && m.value ? 0 : -1);
  function v() {
    var k;
    a.change(e.value) && (c.value |= 2, (k = pe(d)) == null || k.focus());
  }
  function y() {
    c.value |= 2;
  }
  function w() {
    c.value &= -3;
  }
  return () => {
    let { value: k, disabled: O, ...D } = e, N = { checked: p.value, disabled: h.value, active: !!(c.value & 2) }, W = { id: o, ref: d, role: "radio", "aria-checked": p.value ? "true" : "false", "aria-labelledby": s.value, "aria-describedby": l.value, "aria-disabled": h.value ? !0 : void 0, tabIndex: g.value, onClick: h.value ? void 0 : v, onFocus: h.value ? void 0 : y, onBlur: h.value ? void 0 : w };
    return Ye({ ourProps: W, theirProps: D, slot: N, attrs: t, slots: n, name: "RadioGroupOption" });
  };
} }), xf = $0, N0 = sf;
function I0(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return t.called = !0, e(...n);
  };
}
function wa(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Mi(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Xa = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Xa || {});
function z0(e, t) {
  let n = gi();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: i } = getComputedStyle(e), [o, a] = [r, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, u) => u - d);
    return l;
  });
  return o !== 0 ? n.setTimeout(() => t("finished"), o + a) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function xd(e, t, n, r, i, o) {
  let a = gi(), s = o !== void 0 ? I0(o) : () => {
  };
  return Mi(e, ...i), wa(e, ...t, ...n), a.nextFrame(() => {
    Mi(e, ...n), wa(e, ...r), a.add(z0(e, (l) => (Mi(e, ...r, ...t), wa(e, ...i), s(l))));
  }), a.add(() => Mi(e, ...t, ...n, ...r, ...i)), a.add(() => s("cancelled")), a.dispose;
}
function Ln(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Ys = Symbol("TransitionContext");
var R0 = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(R0 || {});
function j0() {
  return Ge(Ys, null) !== null;
}
function V0() {
  let e = Ge(Ys, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function U0() {
  let e = Ge(Xs, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Xs = Symbol("NestingContext");
function Vo(e) {
  return "children" in e ? Vo(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function kf(e) {
  let t = Z([]), n = Z(!1);
  Ue(() => n.value = !0), lt(() => n.value = !1);
  function r(o, a = xn.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === o);
    s !== -1 && (et(a, { [xn.Unmount]() {
      t.value.splice(s, 1);
    }, [xn.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Vo(t) && n.value && (e == null || e()));
  }
  function i(o) {
    let a = t.value.find(({ id: s }) => s === o);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: o, state: "visible" }), () => r(o, xn.Unmount);
  }
  return { children: t, register: i, unregister: r };
}
let _f = pr.RenderStrategy, Sf = /* @__PURE__ */ ve({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: i }) {
  let o = Z(0);
  function a() {
    o.value |= it.Opening, t("beforeEnter");
  }
  function s() {
    o.value &= ~it.Opening, t("afterEnter");
  }
  function l() {
    o.value |= it.Closing, t("beforeLeave");
  }
  function d() {
    o.value &= ~it.Closing, t("afterLeave");
  }
  if (!j0() && K1()) return () => je(Ef, { ...e, onBeforeEnter: a, onAfterEnter: s, onBeforeLeave: l, onAfterLeave: d }, r);
  let u = Z(null), c = L(() => e.unmount ? xn.Unmount : xn.Hidden);
  i({ el: u, $el: u });
  let { show: f, appear: m } = V0(), { register: h, unregister: p } = U0(), g = Z(f.value ? "visible" : "hidden"), v = { value: !0 }, y = Dt(), w = { value: !1 }, k = kf(() => {
    !w.value && g.value !== "hidden" && (g.value = "hidden", p(y), d());
  });
  Ue(() => {
    let ee = h(y);
    lt(ee);
  }), wt(() => {
    if (c.value === xn.Hidden && y) {
      if (f.value && g.value !== "visible") {
        g.value = "visible";
        return;
      }
      et(g.value, { hidden: () => p(y), visible: () => h(y) });
    }
  });
  let O = Ln(e.enter), D = Ln(e.enterFrom), N = Ln(e.enterTo), W = Ln(e.entered), M = Ln(e.leave), Y = Ln(e.leaveFrom), B = Ln(e.leaveTo);
  Ue(() => {
    wt(() => {
      if (g.value === "visible") {
        let ee = pe(u);
        if (ee instanceof Comment && ee.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function P(ee) {
    let he = v.value && !m.value, Te = pe(u);
    !Te || !(Te instanceof HTMLElement) || he || (w.value = !0, f.value && a(), f.value || l(), ee(f.value ? xd(Te, O, D, N, W, (ge) => {
      w.value = !1, ge === Xa.Finished && s();
    }) : xd(Te, M, Y, B, W, (ge) => {
      w.value = !1, ge === Xa.Finished && (Vo(k) || (g.value = "hidden", p(y), d()));
    })));
  }
  return Ue(() => {
    st([f], (ee, he, Te) => {
      P(Te), v.value = !1;
    }, { immediate: !0 });
  }), bt(Xs, k), Xc(L(() => et(g.value, { visible: it.Open, hidden: it.Closed }) | o.value)), () => {
    let { appear: ee, show: he, enter: Te, enterFrom: ge, enterTo: G, entered: ue, leave: Ie, leaveFrom: Xe, leaveTo: ie, ...me } = e, He = { ref: u }, Oe = { ...me, ...m.value && f.value && vi.isServer ? { class: ye([n.class, me.class, ...O, ...D]) } : {} };
    return Ye({ theirProps: Oe, ourProps: He, slot: {}, slots: r, attrs: n, features: _f, visible: g.value === "visible", name: "TransitionChild" });
  };
} }), B0 = Sf, Ef = /* @__PURE__ */ ve({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let i = zo(), o = L(() => e.show === null && i !== null ? (i.value & it.Open) === it.Open : e.show);
  wt(() => {
    if (![!0, !1].includes(o.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = Z(o.value ? "visible" : "hidden"), s = kf(() => {
    a.value = "hidden";
  }), l = Z(!0), d = { show: o, appear: L(() => e.appear || !l.value) };
  return Ue(() => {
    wt(() => {
      l.value = !1, o.value ? a.value = "visible" : Vo(s) || (a.value = "hidden");
    });
  }), bt(Xs, s), bt(Ys, d), () => {
    let u = Io(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), c = { unmount: e.unmount };
    return Ye({ ourProps: { ...c, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [je(B0, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...c, ...u }, r.default)] }, attrs: {}, features: _f, visible: a.value === "visible", name: "Transition" });
  };
} });
function H0() {
  const { state: e, send: t } = It();
  function n() {
    const i = new URLSearchParams(window.location.search), o = {};
    i.forEach((s, l) => {
      o[l] = s;
    });
    const a = o.affiliate || o.aff;
    return a && (o.affiliate = a), o;
  }
  const r = n();
  document.querySelectorAll("[data-sell-store][data-sell-product]").forEach((i) => {
    r.affiliate && !i.hasAttribute("data-sell-affiliate") && i.setAttribute("data-sell-affiliate", r.affiliate), i.addEventListener("click", (o) => {
      var k, O, D, N, W, M, Y, B, P, ee;
      if (o.preventDefault(), o.stopPropagation(), !e.value.matches("closed")) return;
      const a = window.scrollY || window.pageYOffset, s = i.getBoundingClientRect(), l = {
        top: s.top + a,
        // absolute position for scrolling
        height: s.height
      }, d = i.attributes["data-sell-store"].value, u = i.attributes["data-sell-product"].value, c = (k = i.attributes["data-sell-variant"]) == null ? void 0 : k.value, f = (O = i.attributes["data-sell-coupon"]) == null ? void 0 : O.value, m = (D = i.attributes["data-sell-extra"]) == null ? void 0 : D.value, h = (N = i.attributes["data-sell-quantity"]) == null ? void 0 : N.value, p = (W = i.attributes["data-sell-email"]) == null ? void 0 : W.value, g = ((M = i.attributes["data-sell-darkmode"]) == null ? void 0 : M.value) === "true", v = (Y = i.attributes["data-sell-theme"]) == null ? void 0 : Y.value, y = (B = i.attributes["data-sell-affiliate"]) == null ? void 0 : B.value, w = (ee = (P = i.attributes["data-sell-payment_method"]) == null ? void 0 : P.value) == null ? void 0 : ee.toUpperCase();
      t({
        type: "OPEN",
        store_id: d,
        product_id: u,
        variant_id: c,
        coupon: f,
        extra: m,
        quantity: h,
        email: p,
        affiliate: y,
        position: l,
        payment_method: w,
        customization: {
          darkMode: g,
          theme: v
        }
      });
    }, { capture: !0 });
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var j = function() {
  return j = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, j.apply(this, arguments);
};
function Zs(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function we(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ee(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return o;
}
function ze(e, t, n) {
  if (arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Pe;
(function(e) {
  e.Start = "xstate.start", e.Stop = "xstate.stop", e.Raise = "xstate.raise", e.Send = "xstate.send", e.Cancel = "xstate.cancel", e.NullEvent = "", e.Assign = "xstate.assign", e.After = "xstate.after", e.DoneState = "done.state", e.DoneInvoke = "done.invoke", e.Log = "xstate.log", e.Init = "xstate.init", e.Invoke = "xstate.invoke", e.ErrorExecution = "error.execution", e.ErrorCommunication = "error.communication", e.ErrorPlatform = "error.platform", e.ErrorCustom = "xstate.error", e.Update = "xstate.update", e.Pure = "xstate.pure", e.Choose = "xstate.choose";
})(Pe || (Pe = {}));
var En;
(function(e) {
  e.Parent = "#_parent", e.Internal = "#_internal";
})(En || (En = {}));
var ao = Pe.Start, Uo = Pe.Stop, kr = Pe.Raise, yi = Pe.Send, Js = Pe.Cancel, Cf = Pe.NullEvent, Bo = Pe.Assign, q0 = Pe.After, W0 = Pe.DoneState, Ho = Pe.Log, Tf = Pe.Init, so = Pe.Invoke, G0 = Pe.ErrorExecution, Za = Pe.ErrorPlatform, Qs = Pe.ErrorCustom, qo = Pe.Update, Of = Pe.Choose, Af = Pe.Pure;
const K0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  after: q0,
  assign: Bo,
  cancel: Js,
  choose: Of,
  doneState: W0,
  error: Qs,
  errorExecution: G0,
  errorPlatform: Za,
  init: Tf,
  invoke: so,
  log: Ho,
  nullEvent: Cf,
  pure: Af,
  raise: kr,
  send: yi,
  start: ao,
  stop: Uo,
  update: qo
}, Symbol.toStringTag, { value: "Module" }));
var Df = ".", kd = {}, Ja = "xstate.guard", Y0 = "", $i;
function el(e, t, n) {
  n === void 0 && (n = Df);
  var r = Kr(e, n), i = Kr(t, n);
  return De(i) ? De(r) ? i === r : !1 : De(r) ? r in i : Object.keys(r).every(function(o) {
    return o in i ? el(r[o], i[o]) : !1;
  });
}
function Pf(e) {
  try {
    return De(e) || typeof e == "number" ? "".concat(e) : e.type;
  } catch {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function Qa(e, t) {
  try {
    return _r(e) ? e : e.toString().split(t);
  } catch {
    throw new Error("'".concat(e, "' is not a valid state path."));
  }
}
function X0(e) {
  return typeof e == "object" && "value" in e && "context" in e && "event" in e && "_event" in e;
}
function Kr(e, t) {
  if (X0(e))
    return e.value;
  if (_r(e))
    return lo(e);
  if (typeof e != "string")
    return e;
  var n = Qa(e, t);
  return lo(n);
}
function lo(e) {
  if (e.length === 1)
    return e[0];
  for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
    r === e.length - 2 ? n[e[r]] = e[r + 1] : (n[e[r]] = {}, n = n[e[r]]);
  return t;
}
function Nr(e, t) {
  for (var n = {}, r = Object.keys(e), i = 0; i < r.length; i++) {
    var o = r[i];
    n[o] = t(e[o], o, e, i);
  }
  return n;
}
function _d(e, t, n) {
  var r, i, o = {};
  try {
    for (var a = we(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var l = s.value, d = e[l];
      n(d) && (o[l] = t(d, l, e));
    }
  } catch (u) {
    r = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (i = a.return) && i.call(a);
    } finally {
      if (r) throw r.error;
    }
  }
  return o;
}
var Z0 = function(e) {
  return function(t) {
    var n, r, i = t;
    try {
      for (var o = we(e), a = o.next(); !a.done; a = o.next()) {
        var s = a.value;
        i = i[s];
      }
    } catch (l) {
      n = {
        error: l
      };
    } finally {
      try {
        a && !a.done && (r = o.return) && r.call(o);
      } finally {
        if (n) throw n.error;
      }
    }
    return i;
  };
};
function J0(e, t) {
  return function(n) {
    var r, i, o = n;
    try {
      for (var a = we(e), s = a.next(); !s.done; s = a.next()) {
        var l = s.value;
        o = o[t][l];
      }
    } catch (d) {
      r = {
        error: d
      };
    } finally {
      try {
        s && !s.done && (i = a.return) && i.call(a);
      } finally {
        if (r) throw r.error;
      }
    }
    return o;
  };
}
function Gi(e) {
  if (!e)
    return [[]];
  if (De(e))
    return [[e]];
  var t = qe(Object.keys(e).map(function(n) {
    var r = e[n];
    return typeof r != "string" && (!r || !Object.keys(r).length) ? [[n]] : Gi(e[n]).map(function(i) {
      return [n].concat(i);
    });
  }));
  return t;
}
function qe(e) {
  var t;
  return (t = []).concat.apply(t, ze([], Ee(e), !1));
}
function Mf(e) {
  return _r(e) ? e : [e];
}
function Pt(e) {
  return e === void 0 ? [] : Mf(e);
}
function uo(e, t, n) {
  var r, i;
  if (Ce(e))
    return e(t, n.data);
  var o = {};
  try {
    for (var a = we(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var l = s.value, d = e[l];
      Ce(d) ? o[l] = d(t, n.data) : o[l] = d;
    }
  } catch (u) {
    r = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (i = a.return) && i.call(a);
    } finally {
      if (r) throw r.error;
    }
  }
  return o;
}
function Q0(e) {
  return /^(done|error)\./.test(e);
}
function Sd(e) {
  return !!(e instanceof Promise || e !== null && (Ce(e) || typeof e == "object") && Ce(e.then));
}
function eb(e) {
  return e !== null && typeof e == "object" && "transition" in e && typeof e.transition == "function";
}
function tb(e, t) {
  var n, r, i = Ee([[], []], 2), o = i[0], a = i[1];
  try {
    for (var s = we(e), l = s.next(); !l.done; l = s.next()) {
      var d = l.value;
      t(d) ? o.push(d) : a.push(d);
    }
  } catch (u) {
    n = {
      error: u
    };
  } finally {
    try {
      l && !l.done && (r = s.return) && r.call(s);
    } finally {
      if (n) throw n.error;
    }
  }
  return [o, a];
}
function $f(e, t) {
  return Nr(e.states, function(n, r) {
    if (n) {
      var i = (De(t) ? void 0 : t[r]) || (n ? n.current : void 0);
      if (i)
        return {
          current: i,
          states: $f(n, i)
        };
    }
  });
}
function nb(e, t) {
  return {
    current: t,
    states: $f(e, t)
  };
}
function Ed(e, t, n, r) {
  var i = e && n.reduce(function(o, a) {
    var s, l, d = a.assignment, u = {
      state: r,
      action: a,
      _event: t
    }, c = {};
    if (Ce(d))
      c = d(o, t.data, u);
    else
      try {
        for (var f = we(Object.keys(d)), m = f.next(); !m.done; m = f.next()) {
          var h = m.value, p = d[h];
          c[h] = Ce(p) ? p(o, t.data, u) : p;
        }
      } catch (g) {
        s = {
          error: g
        };
      } finally {
        try {
          m && !m.done && (l = f.return) && l.call(f);
        } finally {
          if (s) throw s.error;
        }
      }
    return Object.assign({}, o, c);
  }, e);
  return i;
}
var rb = function() {
};
function _r(e) {
  return Array.isArray(e);
}
function Ce(e) {
  return typeof e == "function";
}
function De(e) {
  return typeof e == "string";
}
function Lf(e, t) {
  if (e)
    return De(e) ? {
      type: Ja,
      name: e,
      predicate: t ? t[e] : void 0
    } : Ce(e) ? {
      type: Ja,
      name: e.name,
      predicate: e
    } : e;
}
function ib(e) {
  try {
    return "subscribe" in e && Ce(e.subscribe);
  } catch {
    return !1;
  }
}
var yn = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
$i = {}, $i[yn] = function() {
  return this;
}, $i[Symbol.observable] = function() {
  return this;
};
function br(e) {
  return !!e && "__xstatenode" in e;
}
function ob(e) {
  return !!e && typeof e.send == "function";
}
function Wo(e, t) {
  return De(e) || typeof e == "number" ? j({
    type: e
  }, t) : e;
}
function rt(e, t) {
  if (!De(e) && "$$type" in e && e.$$type === "scxml")
    return e;
  var n = Wo(e);
  return j({
    name: n.type,
    data: n,
    $$type: "scxml",
    type: "external"
  }, t);
}
function Zn(e, t) {
  var n = Mf(t).map(function(r) {
    return typeof r > "u" || typeof r == "string" || br(r) ? {
      target: r,
      event: e
    } : j(j({}, r), {
      event: e
    });
  });
  return n;
}
function ab(e) {
  if (!(e === void 0 || e === Y0))
    return Pt(e);
}
function Ff(e, t, n, r, i) {
  var o = e.options.guards, a = {
    state: i,
    cond: t,
    _event: r
  };
  if (t.type === Ja)
    return ((o == null ? void 0 : o[t.name]) || t.predicate)(n, r.data, a);
  var s = o == null ? void 0 : o[t.type];
  if (!s)
    throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
  return s(n, r.data, a);
}
function Nf(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Ki(e, t, n) {
  var r = function() {
  }, i = typeof e == "object", o = i ? e : null;
  return {
    next: ((i ? e.next : e) || r).bind(o),
    error: ((i ? e.error : t) || r).bind(o),
    complete: ((i ? e.complete : n) || r).bind(o)
  };
}
function Li(e, t) {
  return "".concat(e, ":invocation[").concat(t, "]");
}
function es(e) {
  return (e.type === kr || e.type === yi && e.to === En.Internal) && typeof e.delay != "number";
}
var qn = /* @__PURE__ */ rt({
  type: Tf
});
function co(e, t) {
  return t && t[e] || void 0;
}
function gr(e, t) {
  var n;
  if (De(e) || typeof e == "number") {
    var r = co(e, t);
    Ce(r) ? n = {
      type: e,
      exec: r
    } : r ? n = r : n = {
      type: e,
      exec: void 0
    };
  } else if (Ce(e))
    n = {
      // Convert action to string if unnamed
      type: e.name || e.toString(),
      exec: e
    };
  else {
    var r = co(e.type, t);
    if (Ce(r))
      n = j(j({}, e), {
        exec: r
      });
    else if (r) {
      var i = r.type || e.type;
      n = j(j(j({}, r), e), {
        type: i
      });
    } else
      n = e;
  }
  return n;
}
var en = function(e, t) {
  if (!e)
    return [];
  var n = _r(e) ? e : [e];
  return n.map(function(r) {
    return gr(r, t);
  });
};
function Go(e) {
  var t = gr(e);
  return j(j({
    id: De(e) ? e : t.id
  }, t), {
    type: t.type
  });
}
function If(e, t) {
  return {
    type: kr,
    event: typeof e == "function" ? e : Wo(e),
    delay: t ? t.delay : void 0,
    id: t == null ? void 0 : t.id
  };
}
function zf(e, t, n, r) {
  var i = {
    _event: n
  }, o = rt(Ce(e.event) ? e.event(t, n.data, i) : e.event), a;
  if (De(e.delay)) {
    var s = r && r[e.delay];
    a = Ce(s) ? s(t, n.data, i) : s;
  } else
    a = Ce(e.delay) ? e.delay(t, n.data, i) : e.delay;
  return j(j({}, e), {
    type: kr,
    _event: o,
    delay: a
  });
}
function Sr(e, t) {
  return {
    to: t ? t.to : void 0,
    type: yi,
    event: Ce(e) ? e : Wo(e),
    delay: t ? t.delay : void 0,
    // TODO: don't auto-generate IDs here like that
    // there is too big chance of the ID collision
    id: t && t.id !== void 0 ? t.id : Ce(e) ? e.name : Pf(e)
  };
}
function Rf(e, t, n, r) {
  var i = {
    _event: n
  }, o = rt(Ce(e.event) ? e.event(t, n.data, i) : e.event), a;
  if (De(e.delay)) {
    var s = r && r[e.delay];
    a = Ce(s) ? s(t, n.data, i) : s;
  } else
    a = Ce(e.delay) ? e.delay(t, n.data, i) : e.delay;
  var l = Ce(e.to) ? e.to(t, n.data, i) : e.to;
  return j(j({}, e), {
    to: l,
    _event: o,
    event: o.data,
    delay: a
  });
}
function tl(e, t) {
  return Sr(e, j(j({}, t), {
    to: En.Parent
  }));
}
function sb(e, t, n) {
  return Sr(t, j(j({}, n), {
    to: e
  }));
}
function lb() {
  return tl(qo);
}
function db(e, t) {
  return Sr(e, j(j({}, t), {
    to: function(n, r, i) {
      var o = i._event;
      return o.origin;
    }
  }));
}
var ub = function(e, t) {
  return {
    context: e,
    event: t
  };
};
function cb(e, t) {
  return e === void 0 && (e = ub), {
    type: Ho,
    label: t,
    expr: e
  };
}
var jf = function(e, t, n) {
  return j(j({}, e), {
    value: De(e.expr) ? e.expr : e.expr(t, n.data, {
      _event: n
    })
  });
}, Vf = function(e) {
  return {
    type: Js,
    sendId: e
  };
};
function Uf(e) {
  var t = Go(e);
  return {
    type: Pe.Start,
    activity: t,
    exec: void 0
  };
}
function Bf(e) {
  var t = Ce(e) ? e : Go(e);
  return {
    type: Pe.Stop,
    activity: t,
    exec: void 0
  };
}
function Hf(e, t, n) {
  var r = Ce(e.activity) ? e.activity(t, n.data) : e.activity, i = typeof r == "string" ? {
    id: r
  } : r, o = {
    type: Pe.Stop,
    activity: i
  };
  return o;
}
var qf = function(e) {
  return {
    type: Bo,
    assignment: e
  };
};
function fb(e) {
  return typeof e == "object" && "type" in e;
}
function Wf(e, t) {
  var n = t ? "#".concat(t) : "";
  return "".concat(Pe.After, "(").concat(e, ")").concat(n);
}
function Ir(e, t) {
  var n = "".concat(Pe.DoneState, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function Yr(e, t) {
  var n = "".concat(Pe.DoneInvoke, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function nr(e, t) {
  var n = "".concat(Pe.ErrorPlatform, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function mb(e) {
  return {
    type: Pe.Pure,
    get: e
  };
}
function pb(e, t) {
  return Sr(function(n, r) {
    return r;
  }, j(j({}, t), {
    to: e
  }));
}
function hb(e, t) {
  return tl(function(n, r, i) {
    return {
      type: Qs,
      data: Ce(e) ? e(n, r, i) : e
    };
  }, j(j({}, t), {
    to: En.Parent
  }));
}
function bb(e) {
  return {
    type: Pe.Choose,
    conds: e
  };
}
var gb = function(e) {
  var t, n, r = [];
  try {
    for (var i = we(e), o = i.next(); !o.done; o = i.next())
      for (var a = o.value, s = 0; s < a.actions.length; ) {
        if (a.actions[s].type === Bo) {
          r.push(a.actions[s]), a.actions.splice(s, 1);
          continue;
        }
        s++;
      }
  } catch (l) {
    t = {
      error: l
    };
  } finally {
    try {
      o && !o.done && (n = i.return) && n.call(i);
    } finally {
      if (t) throw t.error;
    }
  }
  return r;
};
function di(e, t, n, r, i, o, a) {
  a === void 0 && (a = !1);
  var s = a ? [] : gb(i), l = s.length ? Ed(n, r, s, t) : n, d = a ? [n] : void 0, u = [];
  function c(h, p) {
    var g;
    switch (p.type) {
      case kr: {
        var v = zf(p, l, r, e.options.delays);
        return o && typeof v.delay == "number" && o(v, l, r), v;
      }
      case yi:
        var y = Rf(p, l, r, e.options.delays);
        return o && y.to !== En.Internal && (h === "entry" ? u.push(y) : o(y, l, r)), y;
      case Ho: {
        var w = jf(p, l, r);
        return o == null || o(w, l, r), w;
      }
      case Of: {
        var k = p, O = (g = k.conds.find(function(ge) {
          var G = Lf(ge.cond, e.options.guards);
          return !G || Ff(e, G, l, r, o ? void 0 : t);
        })) === null || g === void 0 ? void 0 : g.actions;
        if (!O)
          return [];
        var D = Ee(di(e, t, l, r, [{
          type: h,
          actions: en(Pt(O), e.options.actions)
        }], o, a), 2), N = D[0], W = D[1];
        return l = W, d == null || d.push(l), N;
      }
      case Af: {
        var O = p.get(l, r.data);
        if (!O)
          return [];
        var M = Ee(di(e, t, l, r, [{
          type: h,
          actions: en(Pt(O), e.options.actions)
        }], o, a), 2), Y = M[0], B = M[1];
        return l = B, d == null || d.push(l), Y;
      }
      case Uo: {
        var w = Hf(p, l, r);
        return o == null || o(w, n, r), w;
      }
      case Bo: {
        l = Ed(l, r, [p], o ? void 0 : t), d == null || d.push(l);
        break;
      }
      default:
        var P = gr(p, e.options.actions), ee = P.exec;
        if (o)
          o(P, l, r);
        else if (ee && d) {
          var he = d.length - 1, Te = j(j({}, P), {
            exec: function(ge) {
              for (var G = [], ue = 1; ue < arguments.length; ue++)
                G[ue - 1] = arguments[ue];
              ee.apply(void 0, ze([d[he]], Ee(G), !1));
            }
          });
          P = Te;
        }
        return P;
    }
  }
  function f(h) {
    var p, g, v = [];
    try {
      for (var y = we(h.actions), w = y.next(); !w.done; w = y.next()) {
        var k = w.value, O = c(h.type, k);
        O && (v = v.concat(O));
      }
    } catch (D) {
      p = {
        error: D
      };
    } finally {
      try {
        w && !w.done && (g = y.return) && g.call(y);
      } finally {
        if (p) throw p.error;
      }
    }
    return u.forEach(function(D) {
      o(D, l, r);
    }), u.length = 0, v;
  }
  var m = qe(i.map(f));
  return [m, l];
}
const Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  actionTypes: K0,
  after: Wf,
  assign: qf,
  cancel: Vf,
  choose: bb,
  done: Ir,
  doneInvoke: Yr,
  error: nr,
  escalate: hb,
  forwardTo: pb,
  getActionFunction: co,
  initEvent: qn,
  isActionObject: fb,
  log: cb,
  pure: mb,
  raise: If,
  resolveActions: di,
  resolveLog: jf,
  resolveRaise: zf,
  resolveSend: Rf,
  resolveStop: Hf,
  respond: db,
  send: Sr,
  sendParent: tl,
  sendTo: sb,
  sendUpdate: lb,
  start: Uf,
  stop: Bf,
  toActionObject: gr,
  toActionObjects: en,
  toActivityDefinition: Go
}, Symbol.toStringTag, { value: "Module" }));
var tr = function(e, t) {
  var n = t(e);
  return n;
};
function Gf(e) {
  var t;
  return t = {
    id: e,
    send: function() {
    },
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    getSnapshot: function() {
    },
    toJSON: function() {
      return {
        id: e
      };
    }
  }, t[yn] = function() {
    return this;
  }, t;
}
function vb(e, t, n, r) {
  var i, o = Nf(e.src), a = (i = t == null ? void 0 : t.options.services) === null || i === void 0 ? void 0 : i[o.type], s = e.data ? uo(e.data, n, r) : void 0, l = a ? Kf(a, e.id, s) : Gf(e.id);
  return l.meta = e, l;
}
function Kf(e, t, n) {
  var r = Gf(t);
  if (r.deferred = !0, br(e)) {
    var i = r.state = tr(void 0, function() {
      return (n ? e.withContext(n) : e).initialState;
    });
    r.getSnapshot = function() {
      return i;
    };
  }
  return r;
}
function yb(e) {
  try {
    return typeof e.send == "function";
  } catch {
    return !1;
  }
}
function wb(e) {
  return yb(e) && "id" in e;
}
function xb(e) {
  var t;
  return j((t = {
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    id: "anonymous",
    getSnapshot: function() {
    }
  }, t[yn] = function() {
    return this;
  }, t), e);
}
var fo = function(e) {
  return e.type === "atomic" || e.type === "final";
};
function Yf(e) {
  return Object.keys(e.states).map(function(t) {
    return e.states[t];
  });
}
function ui(e) {
  return Yf(e).filter(function(t) {
    return t.type !== "history";
  });
}
function Xf(e) {
  var t = [e];
  return fo(e) ? t : t.concat(qe(ui(e).map(Xf)));
}
function zr(e, t) {
  var n, r, i, o, a, s, l, d, u = new Set(e), c = ts(u), f = new Set(t);
  try {
    for (var m = we(f), h = m.next(); !h.done; h = m.next())
      for (var p = h.value, g = p.parent; g && !f.has(g); )
        f.add(g), g = g.parent;
  } catch (M) {
    n = {
      error: M
    };
  } finally {
    try {
      h && !h.done && (r = m.return) && r.call(m);
    } finally {
      if (n) throw n.error;
    }
  }
  var v = ts(f);
  try {
    for (var y = we(f), w = y.next(); !w.done; w = y.next()) {
      var p = w.value;
      if (p.type === "compound" && (!v.get(p) || !v.get(p).length))
        c.get(p) ? c.get(p).forEach(function(Y) {
          return f.add(Y);
        }) : p.initialStateNodes.forEach(function(Y) {
          return f.add(Y);
        });
      else if (p.type === "parallel")
        try {
          for (var k = (a = void 0, we(ui(p))), O = k.next(); !O.done; O = k.next()) {
            var D = O.value;
            f.has(D) || (f.add(D), c.get(D) ? c.get(D).forEach(function(Y) {
              return f.add(Y);
            }) : D.initialStateNodes.forEach(function(Y) {
              return f.add(Y);
            }));
          }
        } catch (Y) {
          a = {
            error: Y
          };
        } finally {
          try {
            O && !O.done && (s = k.return) && s.call(k);
          } finally {
            if (a) throw a.error;
          }
        }
    }
  } catch (M) {
    i = {
      error: M
    };
  } finally {
    try {
      w && !w.done && (o = y.return) && o.call(y);
    } finally {
      if (i) throw i.error;
    }
  }
  try {
    for (var N = we(f), W = N.next(); !W.done; W = N.next())
      for (var p = W.value, g = p.parent; g && !f.has(g); )
        f.add(g), g = g.parent;
  } catch (M) {
    l = {
      error: M
    };
  } finally {
    try {
      W && !W.done && (d = N.return) && d.call(N);
    } finally {
      if (l) throw l.error;
    }
  }
  return f;
}
function Zf(e, t) {
  var n = t.get(e);
  if (!n)
    return {};
  if (e.type === "compound") {
    var r = n[0];
    if (r) {
      if (fo(r))
        return r.key;
    } else
      return {};
  }
  var i = {};
  return n.forEach(function(o) {
    i[o.key] = Zf(o, t);
  }), i;
}
function ts(e) {
  var t, n, r = /* @__PURE__ */ new Map();
  try {
    for (var i = we(e), o = i.next(); !o.done; o = i.next()) {
      var a = o.value;
      r.has(a) || r.set(a, []), a.parent && (r.has(a.parent) || r.set(a.parent, []), r.get(a.parent).push(a));
    }
  } catch (s) {
    t = {
      error: s
    };
  } finally {
    try {
      o && !o.done && (n = i.return) && n.call(i);
    } finally {
      if (t) throw t.error;
    }
  }
  return r;
}
function kb(e, t) {
  var n = zr([e], t);
  return Zf(e, ts(n));
}
function Rr(e, t) {
  return Array.isArray(e) ? e.some(function(n) {
    return n === t;
  }) : e instanceof Set ? e.has(t) : !1;
}
function _b(e) {
  return ze([], Ee(new Set(qe(ze([], Ee(e.map(function(t) {
    return t.ownEvents;
  })), !1)))), !1);
}
function Yi(e, t) {
  return t.type === "compound" ? ui(t).some(function(n) {
    return n.type === "final" && Rr(e, n);
  }) : t.type === "parallel" ? ui(t).every(function(n) {
    return Yi(e, n);
  }) : !1;
}
function Sb(e) {
  return e === void 0 && (e = []), e.reduce(function(t, n) {
    return n.meta !== void 0 && (t[n.id] = n.meta), t;
  }, {});
}
function Cd(e) {
  return new Set(qe(e.map(function(t) {
    return t.tags;
  })));
}
function Jf(e, t) {
  if (e === t)
    return !0;
  if (e === void 0 || t === void 0)
    return !1;
  if (De(e) || De(t))
    return e === t;
  var n = Object.keys(e), r = Object.keys(t);
  return n.length === r.length && n.every(function(i) {
    return Jf(e[i], t[i]);
  });
}
function Eb(e) {
  return typeof e != "object" || e === null ? !1 : "value" in e && "_event" in e;
}
function Cb(e, t) {
  var n = e.exec, r = j(j({}, e), {
    exec: n !== void 0 ? function() {
      return n(t.context, t.event, {
        action: e,
        state: t,
        _event: t._event
      });
    } : void 0
  });
  return r;
}
var Bt = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      var n = this, r;
      this.actions = [], this.activities = kd, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || kd, this.meta = Sb(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (r = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
        get: function() {
          return _b(n.configuration);
        }
      });
    }
    return e.from = function(t, n) {
      if (t instanceof e)
        return t.context !== n ? new e({
          value: t.value,
          context: n,
          _event: t._event,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          actions: [],
          activities: t.activities,
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        }) : t;
      var r = qn;
      return new e({
        value: t,
        context: n,
        _event: r,
        _sessionid: null,
        historyValue: void 0,
        history: void 0,
        actions: [],
        activities: void 0,
        events: [],
        configuration: [],
        transitions: [],
        children: {}
      });
    }, e.create = function(t) {
      return new e(t);
    }, e.inert = function(t, n) {
      if (t instanceof e) {
        if (!t.actions.length)
          return t;
        var r = qn;
        return new e({
          value: t.value,
          context: n,
          _event: r,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          activities: t.activities,
          configuration: t.configuration,
          transitions: [],
          children: {}
        });
      }
      return e.from(t, n);
    }, e.prototype.toStrings = function(t, n) {
      var r = this;
      if (t === void 0 && (t = this.value), n === void 0 && (n = "."), De(t))
        return [t];
      var i = Object.keys(t);
      return i.concat.apply(i, ze([], Ee(i.map(function(o) {
        return r.toStrings(t[o], n).map(function(a) {
          return o + n + a;
        });
      })), !1));
    }, e.prototype.toJSON = function() {
      var t = this;
      t.configuration, t.transitions;
      var n = t.tags;
      t.machine;
      var r = Zs(t, ["configuration", "transitions", "tags", "machine"]);
      return j(j({}, r), {
        tags: Array.from(n)
      });
    }, e.prototype.matches = function(t) {
      return el(t, this.value);
    }, e.prototype.hasTag = function(t) {
      return this.tags.has(t);
    }, e.prototype.can = function(t) {
      var n;
      rb(!!this.machine);
      var r = (n = this.machine) === null || n === void 0 ? void 0 : n.getTransitionData(this, t);
      return !!(r != null && r.transitions.length) && // Check that at least one transition is not forbidden
      r.transitions.some(function(i) {
        return i.target !== void 0 || i.actions.length;
      });
    }, e;
  }()
), Tb = {
  deferEvents: !1
}, Td = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = j(j({}, Tb), t);
    }
    return e.prototype.initialize = function(t) {
      if (this.initialized = !0, t) {
        if (!this.options.deferEvents) {
          this.schedule(t);
          return;
        }
        this.process(t);
      }
      this.flushEvents();
    }, e.prototype.schedule = function(t) {
      if (!this.initialized || this.processingEvent) {
        this.queue.push(t);
        return;
      }
      if (this.queue.length !== 0)
        throw new Error("Event queue should be empty when it is not processing events");
      this.process(t), this.flushEvents();
    }, e.prototype.clear = function() {
      this.queue = [];
    }, e.prototype.flushEvents = function() {
      for (var t = this.queue.shift(); t; )
        this.process(t), t = this.queue.shift();
    }, e.prototype.process = function(t) {
      this.processingEvent = !0;
      try {
        t();
      } catch (n) {
        throw this.clear(), n;
      } finally {
        this.processingEvent = !1;
      }
    }, e;
  }()
), xa = /* @__PURE__ */ new Map(), Ob = 0, $r = {
  bookId: function() {
    return "x:".concat(Ob++);
  },
  register: function(e, t) {
    return xa.set(e, t), e;
  },
  get: function(e) {
    return xa.get(e);
  },
  free: function(e) {
    xa.delete(e);
  }
};
function nl() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
}
function Ab() {
  var e = nl();
  if (e && "__xstate__" in e)
    return e.__xstate__;
}
function Db(e) {
  if (nl()) {
    var t = Ab();
    t && t.register(e);
  }
}
function Pb(e, t) {
  t === void 0 && (t = {});
  var n = e.initialState, r = /* @__PURE__ */ new Set(), i = [], o = !1, a = function() {
    if (!o) {
      for (o = !0; i.length > 0; ) {
        var d = i.shift();
        n = e.transition(n, d, l), r.forEach(function(u) {
          return u.next(n);
        });
      }
      o = !1;
    }
  }, s = xb({
    id: t.id,
    send: function(d) {
      i.push(d), a();
    },
    getSnapshot: function() {
      return n;
    },
    subscribe: function(d, u, c) {
      var f = Ki(d, u, c);
      return r.add(f), f.next(n), {
        unsubscribe: function() {
          r.delete(f);
        }
      };
    }
  }), l = {
    parent: t.parent,
    self: s,
    id: t.id || "anonymous",
    observers: r
  };
  return n = e.start ? e.start(l) : n, s;
}
var Mb = {
  sync: !1,
  autoForward: !1
}, Ze;
(function(e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(Ze || (Ze = {}));
var $b = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      n === void 0 && (n = e.defaultOptions);
      var r = this;
      this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = !1, this.status = Ze.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(u, c) {
        if (_r(u))
          return r.batch(u), r.state;
        var f = rt(Wo(u, c));
        if (r.status === Ze.Stopped)
          return r.state;
        if (r.status !== Ze.Running && !r.options.deferEvents)
          throw new Error('Event "'.concat(f.name, '" was sent to uninitialized service "').concat(
            r.machine.id,
            `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `
          ).concat(JSON.stringify(f.data)));
        return r.scheduler.schedule(function() {
          r.forward(f);
          var m = r._nextState(f);
          r.update(m, f);
        }), r._state;
      }, this.sendTo = function(u, c, f) {
        var m = r.parent && (c === En.Parent || r.parent.id === c), h = m ? r.parent : De(c) ? c === En.Internal ? r : r.children.get(c) || $r.get(c) : ob(c) ? c : void 0;
        if (!h) {
          if (!m)
            throw new Error("Unable to send event to child '".concat(c, "' from service '").concat(r.id, "'."));
          return;
        }
        if ("machine" in h) {
          if (r.status !== Ze.Stopped || r.parent !== h || // we need to send events to the parent from exit handlers of a machine that reached its final state
          r.state.done) {
            var p = j(j({}, u), {
              name: u.name === Qs ? "".concat(nr(r.id)) : u.name,
              origin: r.sessionId
            });
            !f && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([h, p]) : h.send(p);
          }
        } else
          !f && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([h, u.data]) : h.send(u.data);
      }, this._exec = function(u, c, f, m) {
        m === void 0 && (m = r.machine.options.actions);
        var h = u.exec || co(u.type, m), p = Ce(h) ? h : h ? h.exec : u.exec;
        if (p)
          try {
            return p(c, f.data, r.machine.config.predictableActionArguments ? {
              action: u,
              _event: f
            } : {
              action: u,
              state: r.state,
              _event: f
            });
          } catch (he) {
            throw r.parent && r.parent.send({
              type: "xstate.error",
              data: he
            }), he;
          }
        switch (u.type) {
          case kr: {
            var g = u;
            r.defer(g);
            break;
          }
          case yi:
            var v = u;
            if (typeof v.delay == "number") {
              r.defer(v);
              return;
            } else
              v.to ? r.sendTo(v._event, v.to, f === qn) : r.send(v._event);
            break;
          case Js:
            r.cancel(u.sendId);
            break;
          case ao: {
            if (r.status !== Ze.Running)
              return;
            var y = u.activity;
            if (
              // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
              !r.machine.config.predictableActionArguments && !r.state.activities[y.id || y.type]
            )
              break;
            if (y.type === Pe.Invoke) {
              var w = Nf(y.src), k = r.machine.options.services ? r.machine.options.services[w.type] : void 0, O = y.id, D = y.data, N = "autoForward" in y ? y.autoForward : !!y.forward;
              if (!k)
                return;
              var W = D ? uo(D, c, f) : void 0;
              if (typeof k == "string")
                return;
              var M = Ce(k) ? k(c, f.data, {
                data: W,
                src: w,
                meta: y.meta
              }) : k;
              if (!M)
                return;
              var Y = void 0;
              br(M) && (M = W ? M.withContext(W) : M, Y = {
                autoForward: N
              }), r.spawn(M, O, Y);
            } else
              r.spawnActivity(y);
            break;
          }
          case Uo: {
            r.stopChild(u.activity.id);
            break;
          }
          case Ho:
            var B = u, P = B.label, ee = B.value;
            P ? r.logger(P, ee) : r.logger(ee);
            break;
        }
      };
      var i = j(j({}, e.defaultOptions), n), o = i.clock, a = i.logger, s = i.parent, l = i.id, d = l !== void 0 ? l : t.id;
      this.id = d, this.logger = a, this.clock = o, this.parent = s, this.options = i, this.scheduler = new Td({
        deferEvents: this.options.deferEvents
      }), this.sessionId = $r.bookId();
    }
    return Object.defineProperty(e.prototype, "initialState", {
      get: function() {
        var t = this;
        return this._initialState ? this._initialState : tr(this, function() {
          return t._initialState = t.machine.initialState, t._initialState;
        });
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "state", {
      /**
       * @deprecated Use `.getSnapshot()` instead.
       */
      get: function() {
        return this._state;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.execute = function(t, n) {
      var r, i;
      try {
        for (var o = we(t.actions), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          this.exec(s, t, n);
        }
      } catch (l) {
        r = {
          error: l
        };
      } finally {
        try {
          a && !a.done && (i = o.return) && i.call(o);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.update = function(t, n) {
      var r, i, o, a, s, l, d, u, c = this;
      if (t._sessionid = this.sessionId, this._state = t, (!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
      // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
      n === qn) && this.options.execute)
        this.execute(this.state);
      else
        for (var f = void 0; f = this._outgoingQueue.shift(); )
          f[0].send(f[1]);
      if (this.children.forEach(function(M) {
        c.state.children[M.id] = M;
      }), this.devTools && this.devTools.send(n.data, t), t.event)
        try {
          for (var m = we(this.eventListeners), h = m.next(); !h.done; h = m.next()) {
            var p = h.value;
            p(t.event);
          }
        } catch (M) {
          r = {
            error: M
          };
        } finally {
          try {
            h && !h.done && (i = m.return) && i.call(m);
          } finally {
            if (r) throw r.error;
          }
        }
      try {
        for (var g = we(this.listeners), v = g.next(); !v.done; v = g.next()) {
          var p = v.value;
          p(t, t.event);
        }
      } catch (M) {
        o = {
          error: M
        };
      } finally {
        try {
          v && !v.done && (a = g.return) && a.call(g);
        } finally {
          if (o) throw o.error;
        }
      }
      try {
        for (var y = we(this.contextListeners), w = y.next(); !w.done; w = y.next()) {
          var k = w.value;
          k(this.state.context, this.state.history ? this.state.history.context : void 0);
        }
      } catch (M) {
        s = {
          error: M
        };
      } finally {
        try {
          w && !w.done && (l = y.return) && l.call(y);
        } finally {
          if (s) throw s.error;
        }
      }
      if (this.state.done) {
        var O = t.configuration.find(function(M) {
          return M.type === "final" && M.parent === c.machine;
        }), D = O && O.doneData ? uo(O.doneData, t.context, n) : void 0;
        this._doneEvent = Yr(this.id, D);
        try {
          for (var N = we(this.doneListeners), W = N.next(); !W.done; W = N.next()) {
            var p = W.value;
            p(this._doneEvent);
          }
        } catch (M) {
          d = {
            error: M
          };
        } finally {
          try {
            W && !W.done && (u = N.return) && u.call(N);
          } finally {
            if (d) throw d.error;
          }
        }
        this._stop(), this._stopChildren(), $r.free(this.sessionId);
      }
    }, e.prototype.onTransition = function(t) {
      return this.listeners.add(t), this.status === Ze.Running && t(this.state, this.state.event), this;
    }, e.prototype.subscribe = function(t, n, r) {
      var i = this, o = Ki(t, n, r);
      this.listeners.add(o.next), this.status !== Ze.NotStarted && o.next(this.state);
      var a = function() {
        i.doneListeners.delete(a), i.stopListeners.delete(a), o.complete();
      };
      return this.status === Ze.Stopped ? o.complete() : (this.onDone(a), this.onStop(a)), {
        unsubscribe: function() {
          i.listeners.delete(o.next), i.doneListeners.delete(a), i.stopListeners.delete(a);
        }
      };
    }, e.prototype.onEvent = function(t) {
      return this.eventListeners.add(t), this;
    }, e.prototype.onSend = function(t) {
      return this.sendListeners.add(t), this;
    }, e.prototype.onChange = function(t) {
      return this.contextListeners.add(t), this;
    }, e.prototype.onStop = function(t) {
      return this.stopListeners.add(t), this;
    }, e.prototype.onDone = function(t) {
      return this.status === Ze.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this;
    }, e.prototype.off = function(t) {
      return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
    }, e.prototype.start = function(t) {
      var n = this;
      if (this.status === Ze.Running)
        return this;
      this.machine._init(), $r.register(this.sessionId, this), this.initialized = !0, this.status = Ze.Running;
      var r = t === void 0 ? this.initialState : tr(this, function() {
        return Eb(t) ? n.machine.resolveState(t) : n.machine.resolveState(Bt.from(t, n.machine.context));
      });
      return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
        n.update(r, qn);
      }), this;
    }, e.prototype._stopChildren = function() {
      this.children.forEach(function(t) {
        Ce(t.stop) && t.stop();
      }), this.children.clear();
    }, e.prototype._stop = function() {
      var t, n, r, i, o, a, s, l, d, u;
      try {
        for (var c = we(this.listeners), f = c.next(); !f.done; f = c.next()) {
          var m = f.value;
          this.listeners.delete(m);
        }
      } catch (N) {
        t = {
          error: N
        };
      } finally {
        try {
          f && !f.done && (n = c.return) && n.call(c);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var h = we(this.stopListeners), p = h.next(); !p.done; p = h.next()) {
          var m = p.value;
          m(), this.stopListeners.delete(m);
        }
      } catch (N) {
        r = {
          error: N
        };
      } finally {
        try {
          p && !p.done && (i = h.return) && i.call(h);
        } finally {
          if (r) throw r.error;
        }
      }
      try {
        for (var g = we(this.contextListeners), v = g.next(); !v.done; v = g.next()) {
          var m = v.value;
          this.contextListeners.delete(m);
        }
      } catch (N) {
        o = {
          error: N
        };
      } finally {
        try {
          v && !v.done && (a = g.return) && a.call(g);
        } finally {
          if (o) throw o.error;
        }
      }
      try {
        for (var y = we(this.doneListeners), w = y.next(); !w.done; w = y.next()) {
          var m = w.value;
          this.doneListeners.delete(m);
        }
      } catch (N) {
        s = {
          error: N
        };
      } finally {
        try {
          w && !w.done && (l = y.return) && l.call(y);
        } finally {
          if (s) throw s.error;
        }
      }
      if (!this.initialized)
        return this;
      this.initialized = !1, this.status = Ze.Stopped, this._initialState = void 0;
      try {
        for (var k = we(Object.keys(this.delayedEventsMap)), O = k.next(); !O.done; O = k.next()) {
          var D = O.value;
          this.clock.clearTimeout(this.delayedEventsMap[D]);
        }
      } catch (N) {
        d = {
          error: N
        };
      } finally {
        try {
          O && !O.done && (u = k.return) && u.call(k);
        } finally {
          if (d) throw d.error;
        }
      }
      this.scheduler.clear(), this.scheduler = new Td({
        deferEvents: this.options.deferEvents
      });
    }, e.prototype.stop = function() {
      var t = this, n = this.scheduler;
      return this._stop(), n.schedule(function() {
        var r;
        if (!(!((r = t._state) === null || r === void 0) && r.done)) {
          var i = rt({
            type: "xstate.stop"
          }), o = tr(t, function() {
            var a = qe(ze([], Ee(t.state.configuration), !1).sort(function(c, f) {
              return f.order - c.order;
            }).map(function(c) {
              return en(c.onExit, t.machine.options.actions);
            })), s = Ee(di(t.machine, t.state, t.state.context, i, [{
              type: "exit",
              actions: a
            }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2), l = s[0], d = s[1], u = new Bt({
              value: t.state.value,
              context: d,
              _event: i,
              _sessionid: t.sessionId,
              historyValue: void 0,
              history: t.state,
              actions: l.filter(function(c) {
                return !es(c);
              }),
              activities: {},
              events: [],
              configuration: [],
              transitions: [],
              children: {},
              done: t.state.done,
              tags: t.state.tags,
              machine: t.machine
            });
            return u.changed = !0, u;
          });
          t.update(o, i), t._stopChildren(), $r.free(t.sessionId);
        }
      }), this;
    }, e.prototype.batch = function(t) {
      var n = this;
      if (!(this.status === Ze.NotStarted && this.options.deferEvents)) {
        if (this.status !== Ze.Running)
          throw new Error(
            // tslint:disable-next-line:max-line-length
            "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
          );
      }
      if (t.length) {
        var r = !!this.machine.config.predictableActionArguments && this._exec;
        this.scheduler.schedule(function() {
          var i, o, a = n.state, s = !1, l = [], d = function(m) {
            var h = rt(m);
            n.forward(h), a = tr(n, function() {
              return n.machine.transition(a, h, void 0, r || void 0);
            }), l.push.apply(l, ze([], Ee(n.machine.config.predictableActionArguments ? a.actions : a.actions.map(function(p) {
              return Cb(p, a);
            })), !1)), s = s || !!a.changed;
          };
          try {
            for (var u = we(t), c = u.next(); !c.done; c = u.next()) {
              var f = c.value;
              d(f);
            }
          } catch (m) {
            i = {
              error: m
            };
          } finally {
            try {
              c && !c.done && (o = u.return) && o.call(u);
            } finally {
              if (i) throw i.error;
            }
          }
          a.changed = s, a.actions = l, n.update(a, rt(t[t.length - 1]));
        });
      }
    }, e.prototype.sender = function(t) {
      return this.send.bind(this, t);
    }, e.prototype._nextState = function(t, n) {
      var r = this;
      n === void 0 && (n = !!this.machine.config.predictableActionArguments && this._exec);
      var i = rt(t);
      if (i.name.indexOf(Za) === 0 && !this.state.nextEvents.some(function(a) {
        return a.indexOf(Za) === 0;
      }))
        throw i.data.data;
      var o = tr(this, function() {
        return r.machine.transition(r.state, i, void 0, n || void 0);
      });
      return o;
    }, e.prototype.nextState = function(t) {
      return this._nextState(t, !1);
    }, e.prototype.forward = function(t) {
      var n, r;
      try {
        for (var i = we(this.forwardTo), o = i.next(); !o.done; o = i.next()) {
          var a = o.value, s = this.children.get(a);
          if (!s)
            throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a, "'."));
          s.send(t);
        }
      } catch (l) {
        n = {
          error: l
        };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.defer = function(t) {
      var n = this, r = this.clock.setTimeout(function() {
        "to" in t && t.to ? n.sendTo(t._event, t.to, !0) : n.send(t._event);
      }, t.delay);
      t.id && (this.delayedEventsMap[t.id] = r);
    }, e.prototype.cancel = function(t) {
      this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
    }, e.prototype.exec = function(t, n, r) {
      r === void 0 && (r = this.machine.options.actions), this._exec(t, n.context, n._event, r);
    }, e.prototype.removeChild = function(t) {
      var n;
      this.children.delete(t), this.forwardTo.delete(t), (n = this.state) === null || n === void 0 || delete n.children[t];
    }, e.prototype.stopChild = function(t) {
      var n = this.children.get(t);
      n && (this.removeChild(t), Ce(n.stop) && n.stop());
    }, e.prototype.spawn = function(t, n, r) {
      if (this.status !== Ze.Running)
        return Kf(t, n);
      if (Sd(t))
        return this.spawnPromise(Promise.resolve(t), n);
      if (Ce(t))
        return this.spawnCallback(t, n);
      if (wb(t))
        return this.spawnActor(t, n);
      if (ib(t))
        return this.spawnObservable(t, n);
      if (br(t))
        return this.spawnMachine(t, j(j({}, r), {
          id: n
        }));
      if (eb(t))
        return this.spawnBehavior(t, n);
      throw new Error('Unable to spawn entity "'.concat(n, '" of type "').concat(typeof t, '".'));
    }, e.prototype.spawnMachine = function(t, n) {
      var r = this;
      n === void 0 && (n = {});
      var i = new e(t, j(j({}, this.options), {
        parent: this,
        id: n.id || t.id
      })), o = j(j({}, Mb), n);
      o.sync && i.onTransition(function(s) {
        r.send(qo, {
          state: s,
          id: i.id
        });
      });
      var a = i;
      return this.children.set(i.id, a), o.autoForward && this.forwardTo.add(i.id), i.onDone(function(s) {
        r.removeChild(i.id), r.send(rt(s, {
          origin: i.id
        }));
      }).start(), a;
    }, e.prototype.spawnBehavior = function(t, n) {
      var r = Pb(t, {
        id: n,
        parent: this
      });
      return this.children.set(n, r), r;
    }, e.prototype.spawnPromise = function(t, n) {
      var r, i = this, o = !1, a;
      t.then(function(l) {
        o || (a = l, i.removeChild(n), i.send(rt(Yr(n, l), {
          origin: n
        })));
      }, function(l) {
        if (!o) {
          i.removeChild(n);
          var d = nr(n, l);
          try {
            i.send(rt(d, {
              origin: n
            }));
          } catch {
            i.devTools && i.devTools.send(d, i.state), i.machine.strict && i.stop();
          }
        }
      });
      var s = (r = {
        id: n,
        send: function() {
        },
        subscribe: function(l, d, u) {
          var c = Ki(l, d, u), f = !1;
          return t.then(function(m) {
            f || (c.next(m), !f && c.complete());
          }, function(m) {
            f || c.error(m);
          }), {
            unsubscribe: function() {
              return f = !0;
            }
          };
        },
        stop: function() {
          o = !0;
        },
        toJSON: function() {
          return {
            id: n
          };
        },
        getSnapshot: function() {
          return a;
        }
      }, r[yn] = function() {
        return this;
      }, r);
      return this.children.set(n, s), s;
    }, e.prototype.spawnCallback = function(t, n) {
      var r, i = this, o = !1, a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), l, d = function(f) {
        l = f, s.forEach(function(m) {
          return m(f);
        }), !o && i.send(rt(f, {
          origin: n
        }));
      }, u;
      try {
        u = t(d, function(f) {
          a.add(f);
        });
      } catch (f) {
        this.send(nr(n, f));
      }
      if (Sd(u))
        return this.spawnPromise(u, n);
      var c = (r = {
        id: n,
        send: function(f) {
          return a.forEach(function(m) {
            return m(f);
          });
        },
        subscribe: function(f) {
          var m = Ki(f);
          return s.add(m.next), {
            unsubscribe: function() {
              s.delete(m.next);
            }
          };
        },
        stop: function() {
          o = !0, Ce(u) && u();
        },
        toJSON: function() {
          return {
            id: n
          };
        },
        getSnapshot: function() {
          return l;
        }
      }, r[yn] = function() {
        return this;
      }, r);
      return this.children.set(n, c), c;
    }, e.prototype.spawnObservable = function(t, n) {
      var r, i = this, o, a = t.subscribe(function(l) {
        o = l, i.send(rt(l, {
          origin: n
        }));
      }, function(l) {
        i.removeChild(n), i.send(rt(nr(n, l), {
          origin: n
        }));
      }, function() {
        i.removeChild(n), i.send(rt(Yr(n), {
          origin: n
        }));
      }), s = (r = {
        id: n,
        send: function() {
        },
        subscribe: function(l, d, u) {
          return t.subscribe(l, d, u);
        },
        stop: function() {
          return a.unsubscribe();
        },
        getSnapshot: function() {
          return o;
        },
        toJSON: function() {
          return {
            id: n
          };
        }
      }, r[yn] = function() {
        return this;
      }, r);
      return this.children.set(n, s), s;
    }, e.prototype.spawnActor = function(t, n) {
      return this.children.set(n, t), t;
    }, e.prototype.spawnActivity = function(t) {
      var n = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
      if (n) {
        var r = n(this.state.context, t);
        this.spawnEffect(t.id, r);
      }
    }, e.prototype.spawnEffect = function(t, n) {
      var r;
      this.children.set(t, (r = {
        id: t,
        send: function() {
        },
        subscribe: function() {
          return {
            unsubscribe: function() {
            }
          };
        },
        stop: n || void 0,
        getSnapshot: function() {
        },
        toJSON: function() {
          return {
            id: t
          };
        }
      }, r[yn] = function() {
        return this;
      }, r));
    }, e.prototype.attachDev = function() {
      var t = nl();
      if (this.options.devTools && t) {
        if (t.__REDUX_DEVTOOLS_EXTENSION__) {
          var n = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
          this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(j(j({
            name: this.id,
            autoPause: !0,
            stateSanitizer: function(r) {
              return {
                value: r.value,
                context: r.context,
                actions: r.actions
              };
            }
          }, n), {
            features: j({
              jump: !1,
              skip: !1
            }, n ? n.features : void 0)
          }), this.machine), this.devTools.init(this.state);
        }
        Db(this);
      }
    }, e.prototype.toJSON = function() {
      return {
        id: this.id
      };
    }, e.prototype[yn] = function() {
      return this;
    }, e.prototype.getSnapshot = function() {
      return this.status === Ze.NotStarted ? this.initialState : this._state;
    }, e.defaultOptions = {
      execute: !0,
      deferEvents: !0,
      clock: {
        setTimeout: function(t, n) {
          return setTimeout(t, n);
        },
        clearTimeout: function(t) {
          return clearTimeout(t);
        }
      },
      logger: /* @__PURE__ */ console.log.bind(console),
      devTools: !1
    }, e.interpret = Qf, e;
  }()
);
function Qf(e, t) {
  var n = new $b(e, t);
  return n;
}
function Lb(e) {
  if (typeof e == "string") {
    var t = {
      type: e
    };
    return t.toString = function() {
      return e;
    }, t;
  }
  return e;
}
function Fi(e) {
  return j(j({
    type: so
  }, e), {
    toJSON: function() {
      e.onDone, e.onError;
      var t = Zs(e, ["onDone", "onError"]);
      return j(j({}, t), {
        type: so,
        src: Lb(e.src)
      });
    }
  });
}
var Ni = "", ns = "#", ka = "*", Jn = {}, Qn = function(e) {
  return e[0] === ns;
}, Fb = function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
}, Nb = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n, r, i) {
      r === void 0 && (r = "context" in t ? t.context : void 0);
      var o = this, a;
      this.config = t, this._context = r, this.order = -1, this.__xstatenode = !0, this.__cache = {
        events: void 0,
        relativeValue: /* @__PURE__ */ new Map(),
        initialStateValue: void 0,
        initialState: void 0,
        on: void 0,
        transitions: void 0,
        candidates: {},
        delayedTransitions: void 0
      }, this.idMap = {}, this.tags = [], this.options = Object.assign(Fb(), n), this.parent = i == null ? void 0 : i.parent, this.key = this.config.key || (i == null ? void 0 : i.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Df), this.id = this.config.id || ze([this.machine.key], Ee(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (a = this.config.schema) !== null && a !== void 0 ? a : {}, this.description = this.config.description, this.initial = this.config.initial, this.states = this.config.states ? Nr(this.config.states, function(d, u) {
        var c, f = new e(d, {}, void 0, {
          parent: o,
          key: u
        });
        return Object.assign(o.idMap, j((c = {}, c[f.id] = f, c), f.idMap)), f;
      }) : Jn;
      var s = 0;
      function l(d) {
        var u, c;
        d.order = s++;
        try {
          for (var f = we(Yf(d)), m = f.next(); !m.done; m = f.next()) {
            var h = m.value;
            l(h);
          }
        } catch (p) {
          u = {
            error: p
          };
        } finally {
          try {
            m && !m.done && (c = f.return) && c.call(f);
          } finally {
            if (u) throw u.error;
          }
        }
      }
      l(this), this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
        var u = d.event;
        return u === Ni;
      }) : Ni in this.config.on : !1), this.strict = !!this.config.strict, this.onEntry = Pt(this.config.entry || this.config.onEntry).map(function(d) {
        return gr(d);
      }), this.onExit = Pt(this.config.exit || this.config.onExit).map(function(d) {
        return gr(d);
      }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Pt(this.config.invoke).map(function(d, u) {
        var c, f;
        if (br(d)) {
          var m = Li(o.id, u);
          return o.machine.options.services = j((c = {}, c[m] = d, c), o.machine.options.services), Fi({
            src: m,
            id: m
          });
        } else if (De(d.src)) {
          var m = d.id || Li(o.id, u);
          return Fi(j(j({}, d), {
            id: m,
            src: d.src
          }));
        } else if (br(d.src) || Ce(d.src)) {
          var m = d.id || Li(o.id, u);
          return o.machine.options.services = j((f = {}, f[m] = d.src, f), o.machine.options.services), Fi(j(j({
            id: m
          }, d), {
            src: m
          }));
        } else {
          var h = d.src;
          return Fi(j(j({
            id: Li(o.id, u)
          }, d), {
            src: h
          }));
        }
      }), this.activities = Pt(this.config.activities).concat(this.invoke).map(function(d) {
        return Go(d);
      }), this.transition = this.transition.bind(this), this.tags = Pt(this.config.tags);
    }
    return e.prototype._init = function() {
      this.__cache.transitions || Xf(this).forEach(function(t) {
        return t.on;
      });
    }, e.prototype.withConfig = function(t, n) {
      var r = this.options, i = r.actions, o = r.activities, a = r.guards, s = r.services, l = r.delays;
      return new e(this.config, {
        actions: j(j({}, i), t.actions),
        activities: j(j({}, o), t.activities),
        guards: j(j({}, a), t.guards),
        services: j(j({}, s), t.services),
        delays: j(j({}, l), t.delays)
      }, n ?? this.context);
    }, e.prototype.withContext = function(t) {
      return new e(this.config, this.options, t);
    }, Object.defineProperty(e.prototype, "context", {
      get: function() {
        return Ce(this._context) ? this._context() : this._context;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "definition", {
      /**
       * The well-structured state node definition.
       */
      get: function() {
        return {
          id: this.id,
          key: this.key,
          version: this.version,
          context: this.context,
          type: this.type,
          initial: this.initial,
          history: this.history,
          states: Nr(this.states, function(t) {
            return t.definition;
          }),
          on: this.on,
          transitions: this.transitions,
          entry: this.onEntry,
          exit: this.onExit,
          activities: this.activities || [],
          meta: this.meta,
          order: this.order || -1,
          data: this.doneData,
          invoke: this.invoke,
          description: this.description,
          tags: this.tags
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.toJSON = function() {
      return this.definition;
    }, Object.defineProperty(e.prototype, "on", {
      /**
       * The mapping of events to transitions.
       */
      get: function() {
        if (this.__cache.on)
          return this.__cache.on;
        var t = this.transitions;
        return this.__cache.on = t.reduce(function(n, r) {
          return n[r.eventType] = n[r.eventType] || [], n[r.eventType].push(r), n;
        }, {});
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "after", {
      get: function() {
        return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "transitions", {
      /**
       * All the transitions that can be taken from this state node.
       */
      get: function() {
        return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getCandidates = function(t) {
      if (this.__cache.candidates[t])
        return this.__cache.candidates[t];
      var n = t === Ni, r = this.transitions.filter(function(i) {
        var o = i.eventType === t;
        return n ? o : o || i.eventType === ka;
      });
      return this.__cache.candidates[t] = r, r;
    }, e.prototype.getDelayedTransitions = function() {
      var t = this, n = this.config.after;
      if (!n)
        return [];
      var r = function(o, a) {
        var s = Ce(o) ? "".concat(t.id, ":delay[").concat(a, "]") : o, l = Wf(s, t.id);
        return t.onEntry.push(Sr(l, {
          delay: o
        })), t.onExit.push(Vf(l)), l;
      }, i = _r(n) ? n.map(function(o, a) {
        var s = r(o.delay, a);
        return j(j({}, o), {
          event: s
        });
      }) : qe(Object.keys(n).map(function(o, a) {
        var s = n[o], l = De(s) ? {
          target: s
        } : s, d = isNaN(+o) ? o : +o, u = r(d, a);
        return Pt(l).map(function(c) {
          return j(j({}, c), {
            event: u,
            delay: d
          });
        });
      }));
      return i.map(function(o) {
        var a = o.delay;
        return j(j({}, t.formatTransition(o)), {
          delay: a
        });
      });
    }, e.prototype.getStateNodes = function(t) {
      var n, r = this;
      if (!t)
        return [];
      var i = t instanceof Bt ? t.value : Kr(t, this.delimiter);
      if (De(i)) {
        var o = this.getStateNode(i).initial;
        return o !== void 0 ? this.getStateNodes((n = {}, n[i] = o, n)) : [this, this.states[i]];
      }
      var a = Object.keys(i), s = [this];
      return s.push.apply(s, ze([], Ee(qe(a.map(function(l) {
        return r.getStateNode(l).getStateNodes(i[l]);
      }))), !1)), s;
    }, e.prototype.handles = function(t) {
      var n = Pf(t);
      return this.events.includes(n);
    }, e.prototype.resolveState = function(t) {
      var n = t instanceof Bt ? t : Bt.create(t), r = Array.from(zr([], this.getStateNodes(n.value)));
      return new Bt(j(j({}, n), {
        value: this.resolve(n.value),
        configuration: r,
        done: Yi(r, this),
        tags: Cd(r),
        machine: this.machine
      }));
    }, e.prototype.transitionLeafNode = function(t, n, r) {
      var i = this.getStateNode(t), o = i.next(n, r);
      return !o || !o.transitions.length ? this.next(n, r) : o;
    }, e.prototype.transitionCompoundNode = function(t, n, r) {
      var i = Object.keys(t), o = this.getStateNode(i[0]), a = o._transition(t[i[0]], n, r);
      return !a || !a.transitions.length ? this.next(n, r) : a;
    }, e.prototype.transitionParallelNode = function(t, n, r) {
      var i, o, a = {};
      try {
        for (var s = we(Object.keys(t)), l = s.next(); !l.done; l = s.next()) {
          var d = l.value, u = t[d];
          if (u) {
            var c = this.getStateNode(d), f = c._transition(u, n, r);
            f && (a[d] = f);
          }
        }
      } catch (v) {
        i = {
          error: v
        };
      } finally {
        try {
          l && !l.done && (o = s.return) && o.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
      var m = Object.keys(a).map(function(v) {
        return a[v];
      }), h = qe(m.map(function(v) {
        return v.transitions;
      })), p = m.some(function(v) {
        return v.transitions.length > 0;
      });
      if (!p)
        return this.next(n, r);
      var g = qe(Object.keys(a).map(function(v) {
        return a[v].configuration;
      }));
      return {
        transitions: h,
        exitSet: qe(m.map(function(v) {
          return v.exitSet;
        })),
        configuration: g,
        source: n,
        actions: qe(Object.keys(a).map(function(v) {
          return a[v].actions;
        }))
      };
    }, e.prototype._transition = function(t, n, r) {
      return De(t) ? this.transitionLeafNode(t, n, r) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, n, r) : this.transitionParallelNode(t, n, r);
    }, e.prototype.getTransitionData = function(t, n) {
      return this._transition(t.value, t, rt(n));
    }, e.prototype.next = function(t, n) {
      var r, i, o = this, a = n.name, s = [], l = [], d;
      try {
        for (var u = we(this.getCandidates(a)), c = u.next(); !c.done; c = u.next()) {
          var f = c.value, m = f.cond, h = f.in, p = t.context, g = h ? De(h) && Qn(h) ? (
            // Check if in state by ID
            t.matches(Kr(this.getStateNodeById(h).path, this.delimiter))
          ) : (
            // Check if in state by relative grandparent
            el(Kr(h, this.delimiter), Z0(this.path.slice(0, -2))(t.value))
          ) : !0, v = !1;
          try {
            v = !m || Ff(this.machine, m, p, n, t);
          } catch (k) {
            throw new Error("Unable to evaluate guard '".concat(m.name || m.type, "' in transition for event '").concat(a, "' in state node '").concat(this.id, `':
`).concat(k.message));
          }
          if (v && g) {
            f.target !== void 0 && (l = f.target), s.push.apply(s, ze([], Ee(f.actions), !1)), d = f;
            break;
          }
        }
      } catch (k) {
        r = {
          error: k
        };
      } finally {
        try {
          c && !c.done && (i = u.return) && i.call(u);
        } finally {
          if (r) throw r.error;
        }
      }
      if (d) {
        if (!l.length)
          return {
            transitions: [d],
            exitSet: [],
            configuration: t.value ? [this] : [],
            source: t,
            actions: s
          };
        var y = qe(l.map(function(k) {
          return o.getRelativeStateNodes(k, t.historyValue);
        })), w = !!d.internal;
        return {
          transitions: [d],
          exitSet: w ? [] : qe(l.map(function(k) {
            return o.getPotentiallyReenteringNodes(k);
          })),
          configuration: y,
          source: t,
          actions: s
        };
      }
    }, e.prototype.getPotentiallyReenteringNodes = function(t) {
      if (this.order < t.order)
        return [this];
      for (var n = [], r = this, i = t; r && r !== i; )
        n.push(r), r = r.parent;
      return r !== i ? [] : (n.push(i), n);
    }, e.prototype.getActions = function(t, n, r, i, o, a, s) {
      var l, d, u, c, f = this, m = a ? zr([], this.getStateNodes(a.value)) : [], h = /* @__PURE__ */ new Set();
      try {
        for (var p = we(Array.from(t).sort(function(B, P) {
          return B.order - P.order;
        })), g = p.next(); !g.done; g = p.next()) {
          var v = g.value;
          (!Rr(m, v) || Rr(r.exitSet, v) || v.parent && h.has(v.parent)) && h.add(v);
        }
      } catch (B) {
        l = {
          error: B
        };
      } finally {
        try {
          g && !g.done && (d = p.return) && d.call(p);
        } finally {
          if (l) throw l.error;
        }
      }
      try {
        for (var y = we(m), w = y.next(); !w.done; w = y.next()) {
          var v = w.value;
          (!Rr(t, v) || Rr(r.exitSet, v.parent)) && r.exitSet.push(v);
        }
      } catch (B) {
        u = {
          error: B
        };
      } finally {
        try {
          w && !w.done && (c = y.return) && c.call(y);
        } finally {
          if (u) throw u.error;
        }
      }
      r.exitSet.sort(function(B, P) {
        return P.order - B.order;
      });
      var k = Array.from(h).sort(function(B, P) {
        return B.order - P.order;
      }), O = new Set(r.exitSet), D = qe(k.map(function(B) {
        var P = [];
        if (B.type !== "final")
          return P;
        var ee = B.parent;
        if (!ee.parent)
          return P;
        P.push(
          Ir(B.id, B.doneData),
          // TODO: deprecate - final states should not emit done events for their own state.
          Ir(ee.id, B.doneData ? uo(B.doneData, i, o) : void 0)
        );
        var he = ee.parent;
        return he.type === "parallel" && ui(he).every(function(Te) {
          return Yi(r.configuration, Te);
        }) && P.push(Ir(he.id)), P;
      })), N = k.map(function(B) {
        var P = B.onEntry, ee = B.activities.map(function(he) {
          return Uf(he);
        });
        return {
          type: "entry",
          actions: en(s ? ze(ze([], Ee(P), !1), Ee(ee), !1) : ze(ze([], Ee(ee), !1), Ee(P), !1), f.machine.options.actions)
        };
      }).concat({
        type: "state_done",
        actions: D.map(function(B) {
          return If(B);
        })
      }), W = Array.from(O).map(function(B) {
        return {
          type: "exit",
          actions: en(ze(ze([], Ee(B.onExit), !1), Ee(B.activities.map(function(P) {
            return Bf(P);
          })), !1), f.machine.options.actions)
        };
      }), M = W.concat({
        type: "transition",
        actions: en(r.actions, this.machine.options.actions)
      }).concat(N);
      if (n) {
        var Y = en(qe(ze([], Ee(t), !1).sort(function(B, P) {
          return P.order - B.order;
        }).map(function(B) {
          return B.onExit;
        })), this.machine.options.actions).filter(function(B) {
          return !es(B);
        });
        return M.concat({
          type: "stop",
          actions: Y
        });
      }
      return M;
    }, e.prototype.transition = function(t, n, r, i) {
      t === void 0 && (t = this.initialState);
      var o = rt(n), a;
      if (t instanceof Bt)
        a = r === void 0 ? t : this.resolveState(Bt.from(t, r));
      else {
        var s = De(t) ? this.resolve(lo(this.getResolvedPath(t))) : this.resolve(t), l = r ?? this.machine.context;
        a = this.resolveState(Bt.from(s, l));
      }
      if (this.strict && !this.events.includes(o.name) && !Q0(o.name))
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(o.name, "'"));
      var d = this._transition(a.value, a, o) || {
        transitions: [],
        configuration: [],
        exitSet: [],
        source: a,
        actions: []
      }, u = zr([], this.getStateNodes(a.value)), c = d.configuration.length ? zr(u, d.configuration) : u;
      return d.configuration = ze([], Ee(c), !1), this.resolveTransition(d, a, a.context, i, o);
    }, e.prototype.resolveRaisedTransition = function(t, n, r, i) {
      var o, a = t.actions;
      return t = this.transition(t, n, void 0, i), t._event = r, t.event = r.data, (o = t.actions).unshift.apply(o, ze([], Ee(a), !1)), t;
    }, e.prototype.resolveTransition = function(t, n, r, i, o) {
      var a, s, l, d, u = this;
      o === void 0 && (o = qn);
      var c = t.configuration, f = !n || t.transitions.length > 0, m = f ? t.configuration : n ? n.configuration : [], h = Yi(m, this), p = f ? kb(this.machine, c) : void 0, g = n ? n.historyValue ? n.historyValue : t.source ? this.machine.historyValue(n.value) : void 0 : void 0, v = this.getActions(new Set(m), h, t, r, o, n, i), y = n ? j({}, n.activities) : {};
      try {
        for (var w = we(v), k = w.next(); !k.done; k = w.next()) {
          var O = k.value;
          try {
            for (var D = (l = void 0, we(O.actions)), N = D.next(); !N.done; N = D.next()) {
              var W = N.value;
              W.type === ao ? y[W.activity.id || W.activity.type] = W : W.type === Uo && (y[W.activity.id || W.activity.type] = !1);
            }
          } catch (Oe) {
            l = {
              error: Oe
            };
          } finally {
            try {
              N && !N.done && (d = D.return) && d.call(D);
            } finally {
              if (l) throw l.error;
            }
          }
        }
      } catch (Oe) {
        a = {
          error: Oe
        };
      } finally {
        try {
          k && !k.done && (s = w.return) && s.call(w);
        } finally {
          if (a) throw a.error;
        }
      }
      var M = Ee(di(this, n, r, o, v, i, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), Y = M[0], B = M[1], P = Ee(tb(Y, es), 2), ee = P[0], he = P[1], Te = Y.filter(function(Oe) {
        var nt;
        return Oe.type === ao && ((nt = Oe.activity) === null || nt === void 0 ? void 0 : nt.type) === so;
      }), ge = Te.reduce(function(Oe, nt) {
        return Oe[nt.activity.id] = vb(nt.activity, u.machine, B, o), Oe;
      }, n ? j({}, n.children) : {}), G = new Bt({
        value: p || n.value,
        context: B,
        _event: o,
        // Persist _sessionid between states
        _sessionid: n ? n._sessionid : null,
        historyValue: p ? g ? nb(g, p) : void 0 : n ? n.historyValue : void 0,
        history: !p || t.source ? n : void 0,
        actions: p ? he : [],
        activities: p ? y : n ? n.activities : {},
        events: [],
        configuration: m,
        transitions: t.transitions,
        children: ge,
        done: h,
        tags: Cd(m),
        machine: this
      }), ue = r !== B;
      G.changed = o.name === qo || ue;
      var Ie = G.history;
      Ie && delete Ie.history;
      var Xe = !h && (this._transient || c.some(function(Oe) {
        return Oe._transient;
      }));
      if (!f && (!Xe || o.name === Ni))
        return G;
      var ie = G;
      if (!h)
        for (Xe && (ie = this.resolveRaisedTransition(ie, {
          type: Cf
        }, o, i)); ee.length; ) {
          var me = ee.shift();
          ie = this.resolveRaisedTransition(ie, me._event, o, i);
        }
      var He = ie.changed || (Ie ? !!ie.actions.length || ue || typeof Ie.value != typeof ie.value || !Jf(ie.value, Ie.value) : void 0);
      return ie.changed = He, ie.history = Ie, ie;
    }, e.prototype.getStateNode = function(t) {
      if (Qn(t))
        return this.machine.getStateNodeById(t);
      if (!this.states)
        throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
      var n = this.states[t];
      if (!n)
        throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
      return n;
    }, e.prototype.getStateNodeById = function(t) {
      var n = Qn(t) ? t.slice(ns.length) : t;
      if (n === this.id)
        return this;
      var r = this.machine.idMap[n];
      if (!r)
        throw new Error("Child state node '#".concat(n, "' does not exist on machine '").concat(this.id, "'"));
      return r;
    }, e.prototype.getStateNodeByPath = function(t) {
      if (typeof t == "string" && Qn(t))
        try {
          return this.getStateNodeById(t.slice(1));
        } catch {
        }
      for (var n = Qa(t, this.delimiter).slice(), r = this; n.length; ) {
        var i = n.shift();
        if (!i.length)
          break;
        r = r.getStateNode(i);
      }
      return r;
    }, e.prototype.resolve = function(t) {
      var n, r = this;
      if (!t)
        return this.initialStateValue || Jn;
      switch (this.type) {
        case "parallel":
          return Nr(this.initialStateValue, function(o, a) {
            return o ? r.getStateNode(a).resolve(t[a] || o) : Jn;
          });
        case "compound":
          if (De(t)) {
            var i = this.getStateNode(t);
            return i.type === "parallel" || i.type === "compound" ? (n = {}, n[t] = i.initialStateValue, n) : t;
          }
          return Object.keys(t).length ? Nr(t, function(o, a) {
            return o ? r.getStateNode(a).resolve(o) : Jn;
          }) : this.initialStateValue || {};
        default:
          return t || Jn;
      }
    }, e.prototype.getResolvedPath = function(t) {
      if (Qn(t)) {
        var n = this.machine.idMap[t.slice(ns.length)];
        if (!n)
          throw new Error("Unable to find state node '".concat(t, "'"));
        return n.path;
      }
      return Qa(t, this.delimiter);
    }, Object.defineProperty(e.prototype, "initialStateValue", {
      get: function() {
        var t;
        if (this.__cache.initialStateValue)
          return this.__cache.initialStateValue;
        var n;
        if (this.type === "parallel")
          n = _d(this.states, function(r) {
            return r.initialStateValue || Jn;
          }, function(r) {
            return r.type !== "history";
          });
        else if (this.initial !== void 0) {
          if (!this.states[this.initial])
            throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
          n = fo(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
        } else
          n = {};
        return this.__cache.initialStateValue = n, this.__cache.initialStateValue;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getInitialState = function(t, n) {
      this._init();
      var r = this.getStateNodes(t);
      return this.resolveTransition({
        configuration: r,
        exitSet: [],
        transitions: [],
        source: void 0,
        actions: []
      }, void 0, n ?? this.machine.context, void 0);
    }, Object.defineProperty(e.prototype, "initialState", {
      /**
       * The initial State instance, which includes all actions to be executed from
       * entering the initial state.
       */
      get: function() {
        var t = this.initialStateValue;
        if (!t)
          throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
        return this.getInitialState(t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "target", {
      /**
       * The target state value of the history state node, if it exists. This represents the
       * default state value to transition to if no history value exists yet.
       */
      get: function() {
        var t;
        if (this.type === "history") {
          var n = this.config;
          De(n.target) ? t = Qn(n.target) ? lo(this.machine.getStateNodeById(n.target).path.slice(this.path.length - 1)) : n.target : t = n.target;
        }
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getRelativeStateNodes = function(t, n, r) {
      return r === void 0 && (r = !0), r ? t.type === "history" ? t.resolveHistory(n) : t.initialStateNodes : [t];
    }, Object.defineProperty(e.prototype, "initialStateNodes", {
      get: function() {
        var t = this;
        if (fo(this))
          return [this];
        if (this.type === "compound" && !this.initial)
          return [this];
        var n = Gi(this.initialStateValue);
        return qe(n.map(function(r) {
          return t.getFromRelativePath(r);
        }));
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getFromRelativePath = function(t) {
      if (!t.length)
        return [this];
      var n = Ee(t), r = n[0], i = n.slice(1);
      if (!this.states)
        throw new Error("Cannot retrieve subPath '".concat(r, "' from node with no states"));
      var o = this.getStateNode(r);
      if (o.type === "history")
        return o.resolveHistory();
      if (!this.states[r])
        throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
      return this.states[r].getFromRelativePath(i);
    }, e.prototype.historyValue = function(t) {
      if (Object.keys(this.states).length)
        return {
          current: t || this.initialStateValue,
          states: _d(this.states, function(n, r) {
            if (!t)
              return n.historyValue();
            var i = De(t) ? void 0 : t[r];
            return n.historyValue(i || n.initialStateValue);
          }, function(n) {
            return !n.history;
          })
        };
    }, e.prototype.resolveHistory = function(t) {
      var n = this;
      if (this.type !== "history")
        return [this];
      var r = this.parent;
      if (!t) {
        var i = this.target;
        return i ? qe(Gi(i).map(function(a) {
          return r.getFromRelativePath(a);
        })) : r.initialStateNodes;
      }
      var o = J0(r.path, "states")(t).current;
      return De(o) ? [r.getStateNode(o)] : qe(Gi(o).map(function(a) {
        return n.history === "deep" ? r.getFromRelativePath(a) : [r.states[a[0]]];
      }));
    }, Object.defineProperty(e.prototype, "stateIds", {
      /**
       * All the state node IDs of this state node and its descendant state nodes.
       */
      get: function() {
        var t = this, n = qe(Object.keys(this.states).map(function(r) {
          return t.states[r].stateIds;
        }));
        return [this.id].concat(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "events", {
      /**
       * All the event types accepted by this state node and its descendants.
       */
      get: function() {
        var t, n, r, i;
        if (this.__cache.events)
          return this.__cache.events;
        var o = this.states, a = new Set(this.ownEvents);
        if (o)
          try {
            for (var s = we(Object.keys(o)), l = s.next(); !l.done; l = s.next()) {
              var d = l.value, u = o[d];
              if (u.states)
                try {
                  for (var c = (r = void 0, we(u.events)), f = c.next(); !f.done; f = c.next()) {
                    var m = f.value;
                    a.add("".concat(m));
                  }
                } catch (h) {
                  r = {
                    error: h
                  };
                } finally {
                  try {
                    f && !f.done && (i = c.return) && i.call(c);
                  } finally {
                    if (r) throw r.error;
                  }
                }
            }
          } catch (h) {
            t = {
              error: h
            };
          } finally {
            try {
              l && !l.done && (n = s.return) && n.call(s);
            } finally {
              if (t) throw t.error;
            }
          }
        return this.__cache.events = Array.from(a);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ownEvents", {
      /**
       * All the events that have transitions directly from this state node.
       *
       * Excludes any inert events.
       */
      get: function() {
        var t = new Set(this.transitions.filter(function(n) {
          return !(!n.target && !n.actions.length && n.internal);
        }).map(function(n) {
          return n.eventType;
        }));
        return Array.from(t);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.resolveTarget = function(t) {
      var n = this;
      if (t !== void 0)
        return t.map(function(r) {
          if (!De(r))
            return r;
          var i = r[0] === n.delimiter;
          if (i && !n.parent)
            return n.getStateNodeByPath(r.slice(1));
          var o = i ? n.key + r : r;
          if (n.parent)
            try {
              var a = n.parent.getStateNodeByPath(o);
              return a;
            } catch (s) {
              throw new Error("Invalid transition definition for state node '".concat(n.id, `':
`).concat(s.message));
            }
          else
            return n.getStateNodeByPath(o);
        });
    }, e.prototype.formatTransition = function(t) {
      var n = this, r = ab(t.target), i = "internal" in t ? t.internal : r ? r.some(function(l) {
        return De(l) && l[0] === n.delimiter;
      }) : !0, o = this.machine.options.guards, a = this.resolveTarget(r), s = j(j({}, t), {
        actions: en(Pt(t.actions)),
        cond: Lf(t.cond, o),
        target: a,
        source: this,
        internal: i,
        eventType: t.event,
        toJSON: function() {
          return j(j({}, s), {
            target: s.target ? s.target.map(function(l) {
              return "#".concat(l.id);
            }) : void 0,
            source: "#".concat(n.id)
          });
        }
      });
      return s;
    }, e.prototype.formatTransitions = function() {
      var t, n, r = this, i;
      if (!this.config.on)
        i = [];
      else if (Array.isArray(this.config.on))
        i = this.config.on;
      else {
        var o = this.config.on, a = ka, s = o[a], l = s === void 0 ? [] : s, d = Zs(o, [typeof a == "symbol" ? a : a + ""]);
        i = qe(Object.keys(d).map(function(y) {
          var w = Zn(y, d[y]);
          return w;
        }).concat(Zn(ka, l)));
      }
      var u = this.config.always ? Zn("", this.config.always) : [], c = this.config.onDone ? Zn(String(Ir(this.id)), this.config.onDone) : [], f = qe(this.invoke.map(function(y) {
        var w = [];
        return y.onDone && w.push.apply(w, ze([], Ee(Zn(String(Yr(y.id)), y.onDone)), !1)), y.onError && w.push.apply(w, ze([], Ee(Zn(String(nr(y.id)), y.onError)), !1)), w;
      })), m = this.after, h = qe(ze(ze(ze(ze([], Ee(c), !1), Ee(f), !1), Ee(i), !1), Ee(u), !1).map(function(y) {
        return Pt(y).map(function(w) {
          return r.formatTransition(w);
        });
      }));
      try {
        for (var p = we(m), g = p.next(); !g.done; g = p.next()) {
          var v = g.value;
          h.push(v);
        }
      } catch (y) {
        t = {
          error: y
        };
      } finally {
        try {
          g && !g.done && (n = p.return) && n.call(p);
        } finally {
          if (t) throw t.error;
        }
      }
      return h;
    }, e;
  }()
);
function Ib(e, t) {
  return new Nb(e, t);
}
var mo = qf;
function zb(e) {
  return "state" in e;
}
var Od = function() {
};
function Rb(e) {
  return "getSnapshot" in e ? e.getSnapshot() : zb(e) ? e.state : void 0;
}
function jb(e, t) {
  t === void 0 && (t = Rb);
  var n = Qe(e) ? e : Na(e), r = Na(t(n.value)), i = function(o) {
    n.value.send(o);
  };
  return st(n, function(o, a, s) {
    r.value = t(o);
    var l = o.subscribe({
      next: function(d) {
        return r.value = d;
      },
      error: Od,
      complete: Od
    }).unsubscribe;
    s(function() {
      return l();
    });
  }, {
    immediate: !0
  }), { state: r, send: i };
}
const Vb = {
  CLOSE: "closed",
  ERROR: "error",
  UPDATE_CONTEXT: {
    actions: mo((e, t) => {
      const { ...n } = t;
      return n;
    })
  }
}, em = {
  store_id: null,
  product_id: null,
  variant_id: null,
  coupon: null,
  extra: null,
  quantity: null,
  product: null,
  variant: null,
  error: null,
  discord_data: null,
  payment_method: null
}, Ub = {
  entry: mo(em),
  on: {
    OPEN: {
      target: "checkout",
      actions: mo((e, t) => ({
        store_id: t.store_id,
        product_id: t.product_id,
        variant_id: t.variant_id,
        coupon: t.coupon,
        extra: t.extra,
        quantity: t.quantity,
        email: t.email,
        customization: t.customization,
        affiliate: t.affiliate,
        payment_method: t.payment_method
      }))
    }
  }
}, Bb = {
  on: {
    FETCH: "checkout"
  }
}, Hb = {
  on: {
    VARIANT_SELECTION: "variant_selection",
    VARIANT_OVERVIEW: "overview"
  },
  invoke: {
    id: "openingCheckout",
    src: (e) => (t) => {
      if (!e.store_id || !e.product_id)
        throw {
          message: "This checkout button is not properly configured.",
          errors: {
            ...e.store_id ? { product_id: [] } : { store_id: [] }
          }
        };
      t(e.variant_id ? "VARIANT_OVERVIEW" : "VARIANT_SELECTION");
    }
  }
}, wi = "https://sell.app/api/v2/fast-checkout";
function Yo(e, t) {
  for (const [n, r] of Object.entries(t))
    e = e.replace(`{${n}}`, r);
  return e;
}
function Vn(e) {
  return e === null ? !0 : typeof e == "string" ? e.trim() === "" : typeof e == "number" || typeof e == "boolean" ? !1 : Array.isArray(e) ? e.length === 0 : typeof e == "object" ? Object.entries(e).length === 0 : !e;
}
function Ad(e) {
  return !Vn(e);
}
function Dd(e, t) {
  return Object.fromEntries(
    Object.entries(e).filter((n) => {
      const [r, i] = n;
      return t(i, r);
    })
  );
}
const Xo = {
  async get(e, t) {
    const n = new URL(e);
    return t && (n.search = new URLSearchParams(Dd(t, Ad)).toString()), await Pd(n.toString(), {
      headers: {
        Accept: "application/json"
      }
    });
  },
  async post(e, t) {
    return await Pd(e, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Dd(t, Ad))
    });
  }
}, qb = 422, Wb = 403;
async function Pd(e, t) {
  const n = await fetch(e, t);
  if (!n.ok && n.status !== qb && n.status !== Wb)
    throw new Error("Oops... Something went wrong while processing your request.");
  const r = await n.json();
  if (!n.ok)
    throw { code: n.status, message: r.message ?? "", errors: r.errors ?? {} };
  return r;
}
const Gb = `${wi}/{store_id}/{product_id}/{variant_id}`;
async function Kb(e, t, n, r) {
  const i = Yo(Gb, { store_id: e, product_id: t, variant_id: n });
  return await Xo.post(i, r);
}
const Yb = `${wi}/{store_id}/{product_id}`;
async function tm(e, t, n = {}) {
  const r = Yo(Yb, { store_id: e, product_id: t });
  return await Xo.get(r, n);
}
const Xb = `${wi}/{store_id}/{product_id}/{variant_id}`;
async function Zb(e, t, n, r = {}) {
  const i = Yo(Xb, { store_id: e, product_id: t, variant_id: n });
  return await Xo.get(i, r);
}
const { assign: Jb, pure: Qb, send: e2 } = Ko, ci = Qb((e, t) => {
  const n = typeof t.data == "object" && "errors" in t.data;
  let r = !n;
  const i = n ? t.data : { message: t.data, errors: {} };
  if (!n || "store_id" in i.errors || "product_id" in i.errors || "variant_id" in i.errors || i.code === 403) {
    const a = " Please contact the seller to let them know.";
    i.code !== 403 ? "store_id" in i.errors ? i.message = "This store could not be found." + a : "product_id" in i.errors ? i.message = "This product could not  be found." + a : "variant_id" in i.errors ? i.message = "This variant could not be found." + a : i.message = "It looks like something went wrong." : i.message === "You have been blacklisted" ? i.message = "You have either been blacklisted by the store owner, or you are using a VPN/Proxy. If you are using a proxy, please disable it." : i.message === "Action not allowed. This store is on hold." ? i.message = "This store is on hold: Creator has not paid their invoice yet" + a : i.message = "It looks like something went wrong." + a, i.errors = {}, r = !0;
  }
  const o = [
    Jb(
      () => ({
        error: i
      })
    )
  ];
  return r && o.push(e2("ERROR")), o;
}), { assign: Md, send: t2 } = Ko, n2 = {
  on: {
    NEXT: {
      target: "overview",
      actions: Md((e, t) => ({
        variant_id: t.variant_id
      }))
    }
  },
  meta: {
    component: "VariantSelection"
  },
  initial: "fetchProductVariantList",
  states: {
    fetchProductVariantList: {
      tags: ["loading"],
      on: {
        FINISH_FETCH: "selectProductVariant"
      },
      invoke: {
        id: "fetchVariantList",
        src: async (e) => {
          var t;
          return ((t = e.product) == null ? void 0 : t.id.toString()) === e.product_id ? e.product : await tm(e.store_id, e.product_id);
        },
        onDone: {
          actions: [
            Md(
              (e, t) => ({
                product: t.data,
                error: null
              })
            ),
            t2((e, t) => t.data.variants.length === 1 ? { type: "NEXT", variant_id: t.data.variants[0].id.toString() } : { type: "FINISH_FETCH" })
          ]
        },
        onError: {
          target: "#embed.error",
          actions: ci
        }
      }
    },
    selectProductVariant: {}
  }
}, { assign: r2, send: _a } = Ko, i2 = {
  on: {
    PREVIOUS: "variant_selection",
    CONNECT_DISCORD: "connect_discord",
    FINAL_STEP: "final_step",
    FETCH: {
      internal: !0,
      target: [".fetchStates.fetching"]
    },
    FINISH_FETCH: {
      internal: !0,
      target: [".fetchStates.idle", ".overviewStates.idle"]
    }
  },
  meta: {
    component: "Overview"
  },
  type: "parallel",
  states: {
    fetchStates: {
      initial: "fetching",
      states: {
        fetching: {
          tags: ["fetching"],
          invoke: {
            id: "fetchProductVariant",
            src: async (e) => {
              var t;
              return {
                product: ((t = e.product) == null ? void 0 : t.id.toString()) === e.product_id ? e.product : await tm(e.store_id, e.product_id, { withoutVariants: !0 }),
                variant: await Zb(e.store_id, e.product_id, e.variant_id, {
                  coupon: e.coupon,
                  quantity: e.quantity,
                  extra: e.extra
                })
              };
            },
            onDone: {
              actions: [
                r2(
                  (e, t) => ({
                    product: t.data.product,
                    variant: t.data.variant,
                    quantity: e.quantity ?? t.data.variant.minimum_purchase_quantity,
                    error: null
                  })
                ),
                _a("FINISH_FETCH")
              ]
            },
            onError: [
              {
                target: "#embed.error",
                cond: (e, t) => {
                  var n, r, i;
                  return (i = (r = (n = t.data) == null ? void 0 : n.errors) == null ? void 0 : r.quantity) == null ? void 0 : i.includes("This product has insufficient stock to fulfill the purchase.");
                },
                actions: [ci, _a("FINISH_FETCH")]
              },
              {
                actions: [ci, _a("FINISH_FETCH")]
              }
            ]
          }
        },
        idle: {}
      }
    },
    overviewStates: {
      initial: "loading",
      states: {
        loading: {
          tags: ["loading"]
        },
        idle: {}
      }
    }
  }
}, o2 = `${wi}/{store_id}/connect-discord`;
async function a2(e, t) {
  const n = Yo(o2, { store_id: e });
  return await Xo.get(n, t);
}
const { assign: s2, send: $d } = Ko, l2 = {
  on: {
    PREVIOUS: "overview",
    NEXT: "final_step",
    FETCH: {
      internal: !0,
      target: [".fetchStates.fetching"]
    },
    FINISH_FETCH: {
      internal: !0,
      target: [".fetchStates.idle", ".overviewStates.idle"]
    }
  },
  meta: {
    component: "ConnectDiscord"
  },
  type: "parallel",
  states: {
    fetchStates: {
      initial: "fetching",
      states: {
        fetching: {
          tags: ["fetching"],
          invoke: {
            id: "fetchingDiscordData",
            src: async (e) => {
              var t;
              return await a2(e.store_id, {
                discord_token: ((t = e.discord_data) == null ? void 0 : t.discord_token) ?? sessionStorage.getItem("discord_token"),
                origin: window.location.href
              });
            },
            onDone: {
              actions: [
                s2((e, t) => ({
                  discord_data: t.data,
                  error: null
                })),
                $d("FINISH_FETCH")
              ]
            },
            onError: {
              actions: [ci, $d("FINISH_FETCH")]
            }
          }
        },
        idle: {}
      }
    },
    overviewStates: {
      initial: "loading",
      states: {
        loading: {
          tags: ["loading"]
        },
        idle: {}
      }
    }
  }
}, d2 = {
  on: {
    PREVIOUS: "overview",
    CONNECT_DISCORD: "connect_discord"
  },
  meta: {
    component: "FinalStep"
  },
  initial: "checkFinalStep",
  states: {
    checkFinalStep: {
      on: {
        CHECKOUT: "checkout_product"
      }
    },
    checkout_product: {
      invoke: {
        id: "checkout_product",
        src: async (e) => await Kb(e.store_id, e.product_id, e.variant_id, {
          coupon: e.coupon,
          quantity: e.quantity,
          extra: e.extra,
          customer_email: Se.customer_email,
          payment_method: Se.payment_method,
          additional_information: Se.additional_information,
          vat_id: Se.vat_id,
          country: Se.country,
          discord_token: Se.discord_token,
          affiliate: e.affiliate
        }),
        onDone: {
          target: "#embed.invoice_processed",
          actions: [
            mo(
              (e, t) => ({
                order: t.data.payment_url,
                error: null
              })
            ),
            (e, t) => {
              window.open(t.data.payment_url, "_blank");
            }
          ]
        },
        onError: {
          target: "#embed.checkout.overview",
          actions: ci
        }
      }
    }
  }
}, u2 = {
  initial: "entry",
  states: {
    entry: Hb,
    variant_selection: n2,
    overview: i2,
    connect_discord: l2,
    final_step: d2
  }
}, c2 = {}, f2 = {
  closed: Ub,
  error: Bb,
  checkout: u2,
  invoice_processed: c2
}, m2 = {
  id: "embed",
  initial: "closed",
  context: em,
  predictableActionArguments: !0,
  on: Vb,
  states: f2
}, p2 = Ib(m2), h2 = Qf(p2).start();
function It() {
  const { state: e, send: t } = jb(h2);
  return {
    context: L(() => e.value.context),
    send: t,
    state: e
  };
}
const Se = yr({
  customer_email: "",
  payment_method: null,
  additional_information: {},
  vat_id: "",
  country: "",
  discord_token: ""
});
function nm(e, t) {
  return S(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function b2(e, t) {
  return S(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _("path", {
      "fill-rule": "evenodd",
      d: "M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function g2(e, t) {
  return S(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _("path", {
      "fill-rule": "evenodd",
      d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function rm(e, t) {
  return S(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function v2(e, t) {
  return S(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    })
  ]);
}
const y2 = /* @__PURE__ */ ve({
  name: "MyButton",
  props: {
    loading: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = Z(!1), n = Z(!1);
    let r = null;
    return st(
      () => e.loading,
      (i) => {
        i ? (r && clearTimeout(r), r = setTimeout(() => {
          t.value = !0, n.value = !0;
        }, 2e3)) : (r && clearTimeout(r), t.value = !1, n.value = !1);
      }
    ), {
      showLoading: t,
      showDisabled: n
    };
  }
}), gt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, w2 = ["disabled"];
function x2(e, t, n, r, i, o) {
  return S(), T("button", {
    class: ye(["embed:inline-flex embed:items-center embed:justify-center embed:sm:text-sm embed:px-4 embed:py-2 embed:focus:ring-0 embed:focus:outline-hidden embed:disabled:opacity-75 embed:disabled:cursor-not-allowed embed:transition embed:duration-200 embed:ease-in-out", {
      "embed:font-bold embed:rounded-lg embed:shadow-inner embed:hover:shadow-emerald-500 embed:focus:shadow-emerald-200 embed:[background:linear-gradient(theme(colors.emerald.400),_theme(colors.emerald.400))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:text-white embed:dark:text-white embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:border-2 embed:border-transparent embed:hover:border-emerald-500 embed:dark:hover:border-emerald-300": typeof e.$attrs.primary < "u",
      "embed:rounded-full embed:bg-zinc-100 embed:dark:bg-zinc-950 embed:text-zinc-800 embed:shadow embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:text-zinc-300 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:font-medium": typeof e.$attrs.outline < "u",
      "embed:bg-red-600 embed:hover:bg-red-700 embed:text-white embed:focus:ring-offset-2 embed:ring-offset-transparent embed:focus:ring-red-500": typeof e.$attrs.danger < "u"
    }]),
    disabled: e.disabled || e.showDisabled
  }, [
    _("span", {
      class: ye({ "embed:animate-pulse embed:opacity-50": e.showLoading })
    }, [
      ri(e.$slots, "default")
    ], 2)
  ], 10, w2);
}
const Zo = /* @__PURE__ */ gt(y2, [["render", x2]]), k2 = /* @__PURE__ */ ve({
  name: "VariantSelection",
  components: {
    RadioGroup: yf,
    RadioGroupDescription: N0,
    RadioGroupLabel: xf,
    RadioGroupOption: wf,
    DialogTitle: xr,
    MyButton: Zo
  },
  setup() {
    const { context: e, send: t, state: n } = It(), r = L(() => e.value.product), i = Z(null);
    function o(a) {
      a && (i.value = a), !Vn(i.value) && t({
        type: "NEXT",
        variant_id: i.value
      });
    }
    return {
      state: n,
      product: r,
      selected_variant: i,
      selectVariant: o,
      context: e
    };
  }
}), _2 = { class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6" }, S2 = { class: "embed:space-y-4" }, E2 = ["onClick"], C2 = { class: "embed:flex embed:items-center embed:grow-0" }, T2 = { class: "embed:text-sm" }, O2 = { class: "embed:flex embed:flex-col embed:sm:flex-row embed:sm:justify-between embed:text-left embed:mt-2" }, A2 = { class: "embed:flex embed:text-sm embed:sm:mt-0 embed:sm:block embed:sm:mr-4 embed:sm:text-right embed:w-auto embed:shrink-0" };
function D2(e, t, n, r, i, o) {
  const a = oe("DialogTitle"), s = oe("RadioGroupLabel"), l = oe("RadioGroupDescription"), d = oe("RadioGroupOption"), u = oe("RadioGroup");
  return S(), T("div", null, [
    _("div", _2, [
      q(a, {
        as: "h2",
        class: "embed:mb-1 embed:font-bold embed:text-center embed:text-black embed:dark:text-white embed:text-xl"
      }, {
        default: ne(() => [
          te(A(e.product.title), 1)
        ]),
        _: 1
      }),
      t[3] || (t[3] = _("p", { class: "embed:mb-4 embed:font-normal embed:text-center embed:text-zinc-800 embed:dark:text-zinc-400 embed:text-xs" }, "Select the product you'd like to purchase", -1)),
      q(u, {
        modelValue: e.selected_variant,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => e.selected_variant = c)
      }, {
        default: ne(() => [
          q(s, { class: "embed:sr-only" }, {
            default: ne(() => t[1] || (t[1] = [
              te("Select the product variant")
            ])),
            _: 1
          }),
          _("div", S2, [
            (S(!0), T(U, null, wn(e.product.variants, (c) => (S(), ke(d, {
              key: c.id,
              as: "template",
              value: c.id,
              disabled: c.stock === 0
            }, {
              default: ne(({ checked: f }) => [
                _("div", {
                  class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner", [
                    c.stock === 0 ? "embed:opacity-50 embed:cursor-not-allowed" : "embed:cursor-pointer",
                    f ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950",
                    "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"
                  ]]),
                  onClick: (m) => (Number(c.stock) > 0 || c.stock === "∞") && e.selectVariant(c.id.toString())
                }, [
                  _("div", C2, [
                    _("div", T2, [
                      q(s, {
                        as: "p",
                        class: "embed:font-bold embed:text-black embed:dark:text-white",
                        style: { "text-transform": "embed:capitalize" }
                      }, {
                        default: ne(() => [
                          te(A(c.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  q(l, {
                    as: "div",
                    class: "embed:flex embed:text-xs embed:text-left"
                  }, {
                    default: ne(() => [
                      _("div", {
                        class: ye(["embed:flex embed:text-xs embed:text-left", [f ? "embed:text-black embed:dark:text-zinc-200" : "embed:text-zinc-500 embed:dark:text-zinc-400"]])
                      }, A(c.description), 3)
                    ]),
                    _: 2
                  }, 1024),
                  _("div", O2, [
                    _("div", A2, [
                      _("div", {
                        class: ye([f ? "embed:text-black embed:dark:text-zinc-200 embed:font-bold" : "embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-medium"])
                      }, A(c.price), 3)
                    ]),
                    q(l, {
                      as: "div",
                      class: "embed:flex embed:text-xs embed:text-left"
                    }, {
                      default: ne(() => [
                        _("div", {
                          class: ye(["embed:flex embed:text-xs embed:text-left", [f ? "embed:text-black embed:dark:text-zinc-200" : "embed:text-zinc-500 embed:dark:text-zinc-400"]])
                        }, A(c.stock) + " in stock", 3)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  t[2] || (t[2] = _("div", {
                    class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                    "aria-hidden": "true"
                  }, null, -1))
                ], 10, E2)
              ]),
              _: 2
            }, 1032, ["value", "disabled"]))), 128))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ])
  ]);
}
const P2 = /* @__PURE__ */ gt(k2, [["render", D2]]), _n = (e, t, n) => {
  const r = document.createElement(e), [i, o] = Array.isArray(t) ? [void 0, t] : [t, n];
  return i && Object.assign(r, i), o == null || o.forEach((a) => r.appendChild(a)), r;
}, M2 = (e, t) => {
  var n;
  return t === "left" ? e.offsetLeft : (((n = e.offsetParent instanceof HTMLElement ? e.offsetParent : null) == null ? void 0 : n.offsetWidth) ?? 0) - e.offsetWidth - e.offsetLeft;
}, $2 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, L2 = (e, t) => {
  customElements.get(e) !== t && customElements.define(e, t);
};
function F2(e, t, { reverse: n = !1 } = {}) {
  const r = e.length;
  for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++)
    t(e[i], i);
}
const N2 = String.raw, I2 = typeof CSS < "u" && CSS.supports && CSS.supports("animation-timing-function", "linear(1,2)"), z2 = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), Ld = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, po = "--_number-flow-d-opacity", rl = "--_number-flow-d-width", ho = "--_number-flow-dx", il = "--_number-flow-d", R2 = (() => {
  try {
    return CSS.registerProperty({
      name: po,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: ho,
      syntax: "<length>",
      inherits: !0,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: rl,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: il,
      syntax: "<number>",
      inherits: !0,
      initialValue: "0"
    }), !0;
  } catch {
    return !1;
  }
})(), j2 = "var(--number-flow-char-height, 1em)", mn = "var(--number-flow-mask-height, 0.25em)", Fd = `calc(${mn} / 2)`, rs = "var(--number-flow-mask-width, 0.5em)", Fn = `calc(${rs} / var(--scale-x))`, Ii = "#000 0, transparent 71%", Nd = N2`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${j2} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${rl}) / var(--width));transform:translateX(var(${ho})) scaleX(var(--scale-x));margin:0 calc(-1 * ${rs});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${Fn},#000 calc(100% - ${Fn}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${mn},#000 calc(100% - ${mn}),transparent 100% ),radial-gradient(at bottom right,${Ii}),radial-gradient(at bottom left,${Ii}),radial-gradient(at top left,${Ii}),radial-gradient(at top right,${Ii});-webkit-mask-size:100% calc(100% - ${mn} * 2),calc(100% - ${Fn} * 2) 100%,${Fn} ${mn},${Fn} ${mn},${Fn} ${mn},${Fn} ${mn};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${Fd} ${rs};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${ho})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${il})}.digit__num,.number .section::after{padding:${Fd} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${po}))}`, V2 = HTMLElement, U2 = z2 && I2 && R2;
let zi, Ht = class extends V2 {
  constructor() {
    super(), this.created = !1, this.manual = !1;
    const { animated: t, ...n } = this.constructor.defaultProps;
    this._animated = this.computedAnimated = t, Object.assign(this, n);
  }
  get animated() {
    return this._animated;
  }
  set animated(t) {
    var n;
    this.animated !== t && (this._animated = t, (n = this.shadowRoot) == null || n.getAnimations().forEach((r) => r.finish()));
  }
  set data(t) {
    var n;
    if (t == null)
      return;
    const { pre: r, integer: i, fraction: o, post: a, value: s } = t;
    if (this.created) {
      const l = this._data;
      this._data = t, this.computedTrend = typeof this.trend == "function" ? this.trend(l.value, s) : this.trend, this.computedAnimated = U2 && this._animated && (!this.respectMotionPreference || !(Ld != null && Ld.matches)) && // https://github.com/barvian/number-flow/issues/9
      $2(this), (n = this.plugins) == null || n.forEach((d) => {
        var u;
        return (u = d.onUpdate) == null ? void 0 : u.call(d, t, l, this);
      }), this.manual || this.willUpdate(), this._pre.update(r), this._num.update({ integer: i, fraction: o }), this._post.update(a), this.manual || this.didUpdate();
    } else {
      if (this._data = t, this.attachShadow({ mode: "open" }), typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
        zi || (zi = new CSSStyleSheet(), zi.replaceSync(Nd)), this.shadowRoot.adoptedStyleSheets = [zi];
      else {
        const l = document.createElement("style");
        l.textContent = Nd, this.shadowRoot.appendChild(l);
      }
      this._pre = new zd(this, r, {
        justify: "right",
        part: "left"
      }), this.shadowRoot.appendChild(this._pre.el), this._num = new B2(this, i, o), this.shadowRoot.appendChild(this._num.el), this._post = new zd(this, a, {
        justify: "left",
        part: "right"
      }), this.shadowRoot.appendChild(this._post.el);
    }
    this.created = !0;
  }
  willUpdate() {
    this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
  }
  didUpdate() {
    if (!this.computedAnimated)
      return;
    this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
    const t = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((n) => n.finished)).then(() => {
      t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
    }), this._abortAnimationsFinish = t;
  }
};
Ht.defaultProps = {
  transformTiming: {
    duration: 900,
    // Make sure to keep this minified:
    easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: !0,
  trend: (e, t) => Math.sign(t - e),
  respectMotionPreference: !0,
  plugins: void 0,
  digits: void 0
};
class B2 {
  constructor(t, n, r, { className: i, ...o } = {}) {
    this.flow = t, this._integer = new Id(t, n, {
      justify: "right",
      part: "integer"
    }), this._fraction = new Id(t, r, {
      justify: "left",
      part: "fraction"
    }), this._inner = _n("span", {
      className: "number__inner"
    }, [this._integer.el, this._fraction.el]), this.el = _n("span", {
      ...o,
      part: "number",
      className: `number ${i ?? ""}`
    }, [this._inner]);
  }
  willUpdate() {
    this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
  }
  update({ integer: t, fraction: n }) {
    this._integer.update(t), this._fraction.update(n);
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this._integer.didUpdate(), this._fraction.didUpdate();
    const n = this._prevLeft - t.left, r = this.el.offsetWidth, i = this._prevWidth - r;
    this.el.style.setProperty("--width", String(r)), this.el.animate({
      [ho]: [`${n}px`, "0px"],
      [rl]: [i, 0]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
let im = class {
  constructor(t, n, { justify: r, className: i, ...o }, a) {
    this.flow = t, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (l) => () => {
      this.children.delete(l);
    }, this.justify = r;
    const s = n.map((l) => this.addChar(l).el);
    this.el = _n("span", {
      ...o,
      className: `section section--justify-${r} ${i ?? ""}`
    }, a ? a(s) : s);
  }
  addChar(t, { startDigitsAtZero: n = !1, ...r } = {}) {
    const i = t.type === "integer" || t.type === "fraction" ? new am(this, t.type, n ? 0 : t.value, t.pos, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    }) : new H2(this, t.type, t.value, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    });
    return this.children.set(t.key, i), i;
  }
  unpop(t) {
    t.el.removeAttribute("inert"), t.el.style.top = "", t.el.style[this.justify] = "";
  }
  pop(t) {
    t.forEach((n) => {
      n.el.style.top = `${n.el.offsetTop}px`, n.el.style[this.justify] = `${M2(n.el, this.justify)}px`;
    }), t.forEach((n) => {
      n.el.setAttribute("inert", ""), n.present = !1;
    });
  }
  addNewAndUpdateExisting(t) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = this.justify === "left", o = i ? "prepend" : "append";
    if (F2(t, (a) => {
      let s;
      this.children.has(a.key) ? (s = this.children.get(a.key), r.set(a, s), this.unpop(s), s.present = !0) : (s = this.addChar(a, { startDigitsAtZero: !0, animateIn: !0 }), n.set(a, s)), this.el[o](s.el);
    }, { reverse: i }), this.flow.computedAnimated) {
      const a = this.el.getBoundingClientRect();
      n.forEach((s) => {
        s.willUpdate(a);
      });
    }
    n.forEach((a, s) => {
      a.update(s.value);
    }), r.forEach((a, s) => {
      a.update(s.value);
    });
  }
  willUpdate() {
    const t = this.el.getBoundingClientRect();
    this._prevOffset = t[this.justify], this.children.forEach((n) => n.willUpdate(t));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this.children.forEach((i) => i.didUpdate(t));
    const n = t[this.justify], r = this._prevOffset - n;
    r && this.children.size && this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
};
class Id extends im {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, i) => {
      t.find((o) => o.key === i) || n.set(i, r), this.unpop(r);
    }), this.addNewAndUpdateExisting(t), n.forEach((r) => {
      r instanceof am && r.update(0);
    }), this.pop(n);
  }
}
class zd extends im {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, i) => {
      t.find((o) => o.key === i) || n.set(i, r);
    }), this.pop(n), this.addNewAndUpdateExisting(t);
  }
}
let is = class {
  constructor(t, n, { onRemove: r, animateIn: i = !1 } = {}) {
    this.flow = t, this.el = n, this._present = !0, this._remove = () => {
      var o;
      this.el.remove(), (o = this._onRemove) == null || o.call(this);
    }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && i && this.el.animate({
      [po]: [-0.9999, 0]
    }, {
      ...this.flow.opacityTiming,
      composite: "accumulate"
    }), this._onRemove = r;
  }
  get present() {
    return this._present;
  }
  set present(t) {
    if (this._present !== t) {
      if (this._present = t, t ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
        t || this._remove();
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({
        [po]: t ? [-0.9999, 0] : [0.999, 0]
      }, {
        ...this.flow.opacityTiming,
        composite: "accumulate"
      }), t ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
        once: !0
      });
    }
  }
}, om = class extends is {
  constructor(t, n, r, i) {
    super(t.flow, r, i), this.section = t, this.value = n, this.el = r;
  }
}, am = class extends om {
  constructor(t, n, r, i, o) {
    var a, s;
    const l = (((s = (a = t.flow.digits) == null ? void 0 : a[i]) == null ? void 0 : s.max) ?? 9) + 1, d = Array.from({ length: l }).map((c, f) => {
      const m = _n("span", { className: "digit__num" }, [
        document.createTextNode(String(f))
      ]);
      return f !== r && m.setAttribute("inert", ""), m.style.setProperty("--n", String(f)), m;
    }), u = _n("span", {
      part: `digit ${n}-digit`,
      className: "digit"
    }, d);
    u.style.setProperty("--current", String(r)), u.style.setProperty("--length", String(l)), super(t, r, u, o), this.pos = i, this._onAnimationsFinish = () => {
      this.el.classList.remove("is-spinning");
    }, this._numbers = d, this.length = l;
  }
  willUpdate(t) {
    const n = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    const r = n[this.section.justify] - t[this.section.justify], i = n.width / 2;
    this._prevCenter = this.section.justify === "left" ? r + i : r - i;
  }
  update(t) {
    this.el.style.setProperty("--current", String(t)), this._numbers.forEach((n, r) => r === t ? n.removeAttribute("inert") : n.setAttribute("inert", "")), this.value = t;
  }
  didUpdate(t) {
    const n = this.el.getBoundingClientRect(), r = n[this.section.justify] - t[this.section.justify], i = n.width / 2, o = this.section.justify === "left" ? r + i : r - i, a = this._prevCenter - o;
    a && this.el.animate({
      transform: [`translateX(${a}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
    const s = this.getDelta();
    s && (this.el.classList.add("is-spinning"), this.el.animate({
      [il]: [-s, 0]
    }, {
      ...this.flow.spinTiming ?? this.flow.transformTiming,
      composite: "accumulate"
    }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: !0 }));
  }
  getDelta() {
    var t;
    if (this.flow.plugins)
      for (const i of this.flow.plugins) {
        const o = (t = i.getDelta) == null ? void 0 : t.call(i, this.value, this._prevValue, this);
        if (o != null)
          return o;
      }
    const n = this.value - this._prevValue, r = this.flow.computedTrend || Math.sign(n);
    return r < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : r > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : n;
  }
};
class H2 extends om {
  constructor(t, n, r, i) {
    const o = _n("span", {
      className: "symbol__value",
      textContent: r
    });
    super(t, r, _n("span", {
      part: `symbol ${n}`,
      className: "symbol"
    }, [o]), i), this.type = n, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (a) => () => {
      this._children.delete(a);
    }, this._children.set(r, new is(this.flow, o, {
      onRemove: this._onChildRemove(r)
    }));
  }
  willUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect();
    this._prevOffset = n[this.section.justify] - t[this.section.justify];
  }
  update(t) {
    if (this.value !== t) {
      const n = this._children.get(this.value);
      if (n.present = !1, this._children.has(t)) {
        const r = this._children.get(t);
        r.present = !0;
      } else {
        const r = _n("span", {
          className: "symbol__value",
          textContent: t
        });
        this.el.appendChild(r), this._children.set(t, new is(this.flow, r, {
          animateIn: !0,
          onRemove: this._onChildRemove(t)
        }));
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify], r = this._prevOffset - n;
    r && this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, { ...this.flow.transformTiming, composite: "accumulate" });
  }
}
function q2(e, t, n, r) {
  const i = t.formatToParts(e);
  n && i.unshift({ type: "prefix", value: n }), r && i.push({ type: "suffix", value: r });
  const o = [], a = [], s = [], l = [], d = {}, u = (p) => `${p}:${d[p] = (d[p] ?? -1) + 1}`;
  let c = "", f = !1, m = !1;
  for (const p of i) {
    c += p.value;
    const g = p.type === "minusSign" || p.type === "plusSign" ? "sign" : p.type;
    g === "integer" ? (f = !0, a.push(...p.value.split("").map((v) => ({ type: g, value: parseInt(v) })))) : g === "group" ? a.push({ type: g, value: p.value }) : g === "decimal" ? (m = !0, s.push({ type: g, value: p.value, key: u(g) })) : g === "fraction" ? s.push(...p.value.split("").map((v) => ({
      type: g,
      value: parseInt(v),
      key: u(g),
      pos: -1 - d[g]
    }))) : (f || m ? l : o).push({
      type: g,
      value: p.value,
      key: u(g)
    });
  }
  const h = [];
  for (let p = a.length - 1; p >= 0; p--) {
    const g = a[p];
    h.unshift(g.type === "integer" ? {
      ...g,
      key: u(g.type),
      pos: d[g.type]
    } : {
      ...g,
      key: u(g.type)
    });
  }
  return {
    pre: o,
    integer: h,
    fraction: s,
    post: l,
    valueAsString: c,
    value: typeof e == "string" ? parseFloat(e) : e
  };
}
const W2 = Symbol(), Sn = (e, t, n) => {
  const r = document.createElement(e), [i, o] = Array.isArray(t) ? [void 0, t] : [t, n];
  return i && Object.assign(r, i), o == null || o.forEach((a) => r.appendChild(a)), r;
}, G2 = (e, t) => {
  var n;
  return t === "left" ? e.offsetLeft : (((n = e.offsetParent instanceof HTMLElement ? e.offsetParent : null) == null ? void 0 : n.offsetWidth) ?? 0) - e.offsetWidth - e.offsetLeft;
}, K2 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function Y2(e, t, { reverse: n = !1 } = {}) {
  const r = e.length;
  for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++)
    t(e[i], i);
}
const X2 = String.raw, Z2 = typeof CSS < "u" && CSS.supports && CSS.supports("animation-timing-function", "linear(1,2)"), J2 = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), Rd = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, bo = "--_number-flow-d-opacity", ol = "--_number-flow-d-width", go = "--_number-flow-dx", al = "--_number-flow-d", Q2 = (() => {
  try {
    return CSS.registerProperty({
      name: bo,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: go,
      syntax: "<length>",
      inherits: !0,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: ol,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: al,
      syntax: "<number>",
      inherits: !0,
      initialValue: "0"
    }), !0;
  } catch {
    return !1;
  }
})(), eg = "var(--number-flow-char-height, 1em)", pn = "var(--number-flow-mask-height, 0.25em)", jd = `calc(${pn} / 2)`, os = "var(--number-flow-mask-width, 0.5em)", Nn = `calc(${os} / var(--scale-x))`, Ri = "#000 0, transparent 71%", Vd = X2`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${eg} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${ol}) / var(--width));transform:translateX(var(${go})) scaleX(var(--scale-x));margin:0 calc(-1 * ${os});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${Nn},#000 calc(100% - ${Nn}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${pn},#000 calc(100% - ${pn}),transparent 100% ),radial-gradient(at bottom right,${Ri}),radial-gradient(at bottom left,${Ri}),radial-gradient(at top left,${Ri}),radial-gradient(at top right,${Ri});-webkit-mask-size:100% calc(100% - ${pn} * 2),calc(100% - ${Nn} * 2) 100%,${Nn} ${pn},${Nn} ${pn},${Nn} ${pn},${Nn} ${pn};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${jd} ${os};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${go})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${al})}.digit__num,.number .section::after{padding:${jd} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${bo}))}`, tg = HTMLElement, ng = J2 && Z2 && Q2;
let ji;
class rg extends tg {
  constructor() {
    super(), this.created = !1, this.manual = !1;
    const { animated: t, ...n } = this.constructor.defaultProps;
    this._animated = this.computedAnimated = t, Object.assign(this, n);
  }
  get animated() {
    return this._animated;
  }
  set animated(t) {
    var n;
    this.animated !== t && (this._animated = t, (n = this.shadowRoot) == null || n.getAnimations().forEach((r) => r.finish()));
  }
  set data(t) {
    var n;
    if (t == null)
      return;
    const { pre: r, integer: i, fraction: o, post: a, value: s } = t;
    if (this.created) {
      const l = this._data;
      this._data = t, this.computedTrend = typeof this.trend == "function" ? this.trend(l.value, s) : this.trend, this.computedAnimated = ng && this._animated && (!this.respectMotionPreference || !(Rd != null && Rd.matches)) && // https://github.com/barvian/number-flow/issues/9
      K2(this), (n = this.plugins) == null || n.forEach((d) => {
        var u;
        return (u = d.onUpdate) == null ? void 0 : u.call(d, t, l, this);
      }), this.manual || this.willUpdate(), this._pre.update(r), this._num.update({ integer: i, fraction: o }), this._post.update(a), this.manual || this.didUpdate();
    } else {
      if (this._data = t, this.attachShadow({ mode: "open" }), typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
        ji || (ji = new CSSStyleSheet(), ji.replaceSync(Vd)), this.shadowRoot.adoptedStyleSheets = [ji];
      else {
        const l = document.createElement("style");
        l.textContent = Vd, this.shadowRoot.appendChild(l);
      }
      this._pre = new Bd(this, r, {
        justify: "right",
        part: "left"
      }), this.shadowRoot.appendChild(this._pre.el), this._num = new ig(this, i, o), this.shadowRoot.appendChild(this._num.el), this._post = new Bd(this, a, {
        justify: "left",
        part: "right"
      }), this.shadowRoot.appendChild(this._post.el);
    }
    this.created = !0;
  }
  willUpdate() {
    this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
  }
  didUpdate() {
    if (!this.computedAnimated)
      return;
    this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
    const t = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((n) => n.finished)).then(() => {
      t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
    }), this._abortAnimationsFinish = t;
  }
}
rg.defaultProps = {
  transformTiming: {
    duration: 900,
    // Make sure to keep this minified:
    easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: !0,
  trend: (e, t) => Math.sign(t - e),
  respectMotionPreference: !0,
  plugins: void 0,
  digits: void 0
};
class ig {
  constructor(t, n, r, { className: i, ...o } = {}) {
    this.flow = t, this._integer = new Ud(t, n, {
      justify: "right",
      part: "integer"
    }), this._fraction = new Ud(t, r, {
      justify: "left",
      part: "fraction"
    }), this._inner = Sn("span", {
      className: "number__inner"
    }, [this._integer.el, this._fraction.el]), this.el = Sn("span", {
      ...o,
      part: "number",
      className: `number ${i ?? ""}`
    }, [this._inner]);
  }
  willUpdate() {
    this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
  }
  update({ integer: t, fraction: n }) {
    this._integer.update(t), this._fraction.update(n);
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this._integer.didUpdate(), this._fraction.didUpdate();
    const n = this._prevLeft - t.left, r = this.el.offsetWidth, i = this._prevWidth - r;
    this.el.style.setProperty("--width", String(r)), this.el.animate({
      [go]: [`${n}px`, "0px"],
      [ol]: [i, 0]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
class sm {
  constructor(t, n, { justify: r, className: i, ...o }, a) {
    this.flow = t, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (l) => () => {
      this.children.delete(l);
    }, this.justify = r;
    const s = n.map((l) => this.addChar(l).el);
    this.el = Sn("span", {
      ...o,
      className: `section section--justify-${r} ${i ?? ""}`
    }, a ? a(s) : s);
  }
  addChar(t, { startDigitsAtZero: n = !1, ...r } = {}) {
    const i = t.type === "integer" || t.type === "fraction" ? new dm(this, t.type, n ? 0 : t.value, t.pos, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    }) : new og(this, t.type, t.value, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    });
    return this.children.set(t.key, i), i;
  }
  unpop(t) {
    t.el.removeAttribute("inert"), t.el.style.top = "", t.el.style[this.justify] = "";
  }
  pop(t) {
    t.forEach((n) => {
      n.el.style.top = `${n.el.offsetTop}px`, n.el.style[this.justify] = `${G2(n.el, this.justify)}px`;
    }), t.forEach((n) => {
      n.el.setAttribute("inert", ""), n.present = !1;
    });
  }
  addNewAndUpdateExisting(t) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = this.justify === "left", o = i ? "prepend" : "append";
    if (Y2(t, (a) => {
      let s;
      this.children.has(a.key) ? (s = this.children.get(a.key), r.set(a, s), this.unpop(s), s.present = !0) : (s = this.addChar(a, { startDigitsAtZero: !0, animateIn: !0 }), n.set(a, s)), this.el[o](s.el);
    }, { reverse: i }), this.flow.computedAnimated) {
      const a = this.el.getBoundingClientRect();
      n.forEach((s) => {
        s.willUpdate(a);
      });
    }
    n.forEach((a, s) => {
      a.update(s.value);
    }), r.forEach((a, s) => {
      a.update(s.value);
    });
  }
  willUpdate() {
    const t = this.el.getBoundingClientRect();
    this._prevOffset = t[this.justify], this.children.forEach((n) => n.willUpdate(t));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this.children.forEach((i) => i.didUpdate(t));
    const n = t[this.justify], r = this._prevOffset - n;
    r && this.children.size && this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
class Ud extends sm {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, i) => {
      t.find((o) => o.key === i) || n.set(i, r), this.unpop(r);
    }), this.addNewAndUpdateExisting(t), n.forEach((r) => {
      r instanceof dm && r.update(0);
    }), this.pop(n);
  }
}
class Bd extends sm {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, i) => {
      t.find((o) => o.key === i) || n.set(i, r);
    }), this.pop(n), this.addNewAndUpdateExisting(t);
  }
}
let as = class {
  constructor(t, n, { onRemove: r, animateIn: i = !1 } = {}) {
    this.flow = t, this.el = n, this._present = !0, this._remove = () => {
      var o;
      this.el.remove(), (o = this._onRemove) == null || o.call(this);
    }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && i && this.el.animate({
      [bo]: [-0.9999, 0]
    }, {
      ...this.flow.opacityTiming,
      composite: "accumulate"
    }), this._onRemove = r;
  }
  get present() {
    return this._present;
  }
  set present(t) {
    if (this._present !== t) {
      if (this._present = t, t ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
        t || this._remove();
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({
        [bo]: t ? [-0.9999, 0] : [0.999, 0]
      }, {
        ...this.flow.opacityTiming,
        composite: "accumulate"
      }), t ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
        once: !0
      });
    }
  }
};
class lm extends as {
  constructor(t, n, r, i) {
    super(t.flow, r, i), this.section = t, this.value = n, this.el = r;
  }
}
class dm extends lm {
  constructor(t, n, r, i, o) {
    var a, s;
    const l = (((s = (a = t.flow.digits) == null ? void 0 : a[i]) == null ? void 0 : s.max) ?? 9) + 1, d = Array.from({ length: l }).map((c, f) => {
      const m = Sn("span", { className: "digit__num" }, [
        document.createTextNode(String(f))
      ]);
      return f !== r && m.setAttribute("inert", ""), m.style.setProperty("--n", String(f)), m;
    }), u = Sn("span", {
      part: `digit ${n}-digit`,
      className: "digit"
    }, d);
    u.style.setProperty("--current", String(r)), u.style.setProperty("--length", String(l)), super(t, r, u, o), this.pos = i, this._onAnimationsFinish = () => {
      this.el.classList.remove("is-spinning");
    }, this._numbers = d, this.length = l;
  }
  willUpdate(t) {
    const n = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    const r = n[this.section.justify] - t[this.section.justify], i = n.width / 2;
    this._prevCenter = this.section.justify === "left" ? r + i : r - i;
  }
  update(t) {
    this.el.style.setProperty("--current", String(t)), this._numbers.forEach((n, r) => r === t ? n.removeAttribute("inert") : n.setAttribute("inert", "")), this.value = t;
  }
  didUpdate(t) {
    const n = this.el.getBoundingClientRect(), r = n[this.section.justify] - t[this.section.justify], i = n.width / 2, o = this.section.justify === "left" ? r + i : r - i, a = this._prevCenter - o;
    a && this.el.animate({
      transform: [`translateX(${a}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
    const s = this.getDelta();
    s && (this.el.classList.add("is-spinning"), this.el.animate({
      [al]: [-s, 0]
    }, {
      ...this.flow.spinTiming ?? this.flow.transformTiming,
      composite: "accumulate"
    }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: !0 }));
  }
  getDelta() {
    var t;
    if (this.flow.plugins)
      for (const i of this.flow.plugins) {
        const o = (t = i.getDelta) == null ? void 0 : t.call(i, this.value, this._prevValue, this);
        if (o != null)
          return o;
      }
    const n = this.value - this._prevValue, r = this.flow.computedTrend || Math.sign(n);
    return r < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : r > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : n;
  }
}
class og extends lm {
  constructor(t, n, r, i) {
    const o = Sn("span", {
      className: "symbol__value",
      textContent: r
    });
    super(t, r, Sn("span", {
      part: `symbol ${n}`,
      className: "symbol"
    }, [o]), i), this.type = n, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (a) => () => {
      this._children.delete(a);
    }, this._children.set(r, new as(this.flow, o, {
      onRemove: this._onChildRemove(r)
    }));
  }
  willUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect();
    this._prevOffset = n[this.section.justify] - t[this.section.justify];
  }
  update(t) {
    if (this.value !== t) {
      const n = this._children.get(this.value);
      if (n.present = !1, this._children.has(t)) {
        const r = this._children.get(t);
        r.present = !0;
      } else {
        const r = Sn("span", {
          className: "symbol__value",
          textContent: t
        });
        this.el.appendChild(r), this._children.set(t, new as(this.flow, r, {
          animateIn: !0,
          onRemove: this._onChildRemove(t)
        }));
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify], r = this._prevOffset - n;
    r && this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, { ...this.flow.transformTiming, composite: "accumulate" });
  }
}
const ag = ["aria-label", "manual", "trend", "plugins", "animated", "transformTiming", "spinTiming", "opacityTiming", "respectMotionPreference", "data-will-change", "digits", "innerHTML", "data"], um = /* @__PURE__ */ ve({
  inheritAttrs: !1,
  __name: "index",
  props: {
    transformTiming: { default: () => Ht.defaultProps.transformTiming },
    spinTiming: { default: () => Ht.defaultProps.spinTiming },
    opacityTiming: { default: () => Ht.defaultProps.opacityTiming },
    animated: { type: Boolean, default: () => Ht.defaultProps.animated },
    respectMotionPreference: { type: Boolean, default: () => Ht.defaultProps.respectMotionPreference },
    trend: { type: [Number, Function], default: () => Ht.defaultProps.trend },
    plugins: { default: () => Ht.defaultProps.plugins },
    digits: { default: () => Ht.defaultProps.digits },
    locales: {},
    format: {},
    value: {},
    prefix: {},
    suffix: {},
    willChange: { type: Boolean, default: !1 }
  },
  emits: ["animationsstart", "animationsfinish"],
  setup(e, { expose: t, emit: n }) {
    const r = Z();
    t({ el: r });
    const i = n, o = L(() => new Intl.NumberFormat(e.locales, e.format)), a = L(() => q2(e.value, o.value, e.prefix, e.suffix)), s = void 0, l = Ge(W2, void 0);
    return l == null || l(r, a), (d, u) => (S(), T("number-flow-vue", ur({
      ref_key: "el",
      ref: r,
      "aria-label": a.value.valueAsString
    }, d.$attrs, {
      role: "img",
      manual: !!ei(l),
      trend: d.trend,
      plugins: d.plugins,
      animated: d.animated,
      transformTiming: d.transformTiming,
      spinTiming: d.spinTiming,
      opacityTiming: d.opacityTiming,
      respectMotionPreference: d.respectMotionPreference,
      "data-will-change": d.willChange ? "" : void 0,
      digits: d.digits,
      innerHTML: ei(s),
      "data-allow-mismatch": "",
      onAnimationsstart: u[0] || (u[0] = (c) => i("animationsstart")),
      onAnimationsfinish: u[1] || (u[1] = (c) => i("animationsfinish")),
      data: a.value
    }), null, 16, ag));
  }
});
L2("number-flow-vue", Ht);
const sg = /* @__PURE__ */ ve({
  name: "NumberInput",
  components: {
    MinusIcon: b2,
    PlusIcon: g2,
    NumberFlow: um
  },
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { context: n } = It(), r = n.value.variant.quantity_increments ?? 1, i = Z(!0), o = Z(!0), a = Z(null), s = Z(!1);
    function l(g) {
      if (g = parseInt(g.toString()), i.value = !0, isNaN(g) && (g = 0), r > 1) {
        const v = (g - (e.min ?? 1)) % r;
        v !== 0 && (g = g - v);
      }
      g < (e.min ?? 1) ? g = e.min : e.max !== null && g > e.max && (g = e.max), t("update:modelValue", g);
    }
    const d = L(() => e.min !== e.max && r > 0), u = L(() => d.value && (e.max ? e.modelValue + r <= e.max : !0));
    function c() {
      u.value && (i.value = !0, l(e.modelValue + r));
    }
    const f = L(() => d.value && e.modelValue - r >= (e.min ?? 1));
    function m() {
      f.value && (i.value = !0, l(e.modelValue - r));
    }
    function h() {
      s.value = !0;
    }
    function p() {
      s.value = !1;
    }
    return {
      emitUpdate: l,
      canModify: d,
      canIncrement: u,
      increment: c,
      canDecrement: f,
      decrement: m,
      isAnimated: i,
      showCaret: o,
      input: a,
      isFocused: s,
      handleFocus: h,
      handleBlur: p
    };
  }
}), lg = { class: "embed:group embed:flex embed:items-stretch embed:rounded-md embed:font-semibold embed:border embed:border-emerald-400 embed:dark:border-emerald-700 embed:ring-1 embed:dark:ring-1 embed:ring-emerald-300 embed:dark:ring-emerald-800 embed:dark:bg-zinc-950 embed:transition-[box-shadow] embed:focus-within:ring-2 embed:dark:focus-within:ring-2" }, dg = ["disabled"], ug = { class: "embed:relative embed:grid embed:items-center embed:justify-items-center embed:text-center embed:[grid-template-areas:'overlap'] embed:*:[grid-area:overlap]" }, cg = ["min", "max", "value", "disabled"], fg = ["disabled"];
function mg(e, t, n, r, i, o) {
  const a = oe("MinusIcon"), s = oe("NumberFlow"), l = oe("PlusIcon");
  return S(), T("div", lg, [
    _("button", {
      "aria-hidden": "",
      tabindex: "-1",
      class: "embed:flex embed:items-center embed:pl-[.5em] embed:pr-[.325em]",
      disabled: !e.canDecrement,
      onClick: t[0] || (t[0] = (...d) => e.decrement && e.decrement(...d))
    }, [
      q(a, {
        class: "embed:w-4 embed:h-4 embed:dark:text-white",
        "absolute-stroke-width": "",
        "stroke-width": "3.5"
      })
    ], 8, dg),
    _("div", ug, [
      Fs(q(s, {
        value: e.modelValue,
        format: { useGrouping: !1 },
        "aria-hidden": "",
        animated: e.isAnimated,
        class: "embed:dark:text-white",
        disabled: !e.canModify,
        "will-change": "",
        onAnimationsstart: t[1] || (t[1] = (d) => e.showCaret = !1),
        onAnimationsfinish: t[2] || (t[2] = (d) => e.showCaret = !0)
      }, null, 8, ["value", "animated", "disabled"]), [
        [c1, !e.isFocused]
      ]),
      _("input", ur(e.$attrs, {
        ref: "input",
        class: [
          e.isFocused ? "embed:text-current embed:dark:text-white" : "embed:text-transparent",
          "embed:caret-primary embed:spin-hide embed:bg-transparent embed:text-center embed:font-[inherit] embed:outline-hidden embed:focus:outline-hidden embed:focus:ring-0 embed:border-none embed:z-10",
          e.canModify ? "" : "embed:pointer-events-none"
        ],
        style: {
          fontKerning: "none",
          width: "4rem"
        },
        type: "text",
        min: e.min,
        step: "1",
        autocomplete: "off",
        inputmode: "numeric",
        max: e.max,
        value: e.modelValue,
        disabled: !e.canModify,
        onInput: t[3] || (t[3] = (d) => e.canModify ? e.emitUpdate(d.target.value) : null),
        onFocus: t[4] || (t[4] = (...d) => e.handleFocus && e.handleFocus(...d)),
        onBlur: t[5] || (t[5] = (...d) => e.handleBlur && e.handleBlur(...d))
      }), null, 16, cg)
    ]),
    _("button", {
      "aria-hidden": "",
      tabindex: "-1",
      class: "embed:flex embed:items-center embed:pl-[.325em] embed:pr-[.5em]",
      disabled: !e.canIncrement,
      onClick: t[6] || (t[6] = (...d) => e.increment && e.increment(...d))
    }, [
      q(l, {
        class: "embed:w-4 embed:h-4 embed:dark:text-white",
        "absolute-stroke-width": "",
        "stroke-width": "3.5"
      })
    ], 8, fg)
  ]);
}
const pg = /* @__PURE__ */ gt(sg, [["render", mg]]);
var hg = { NODE_ENV: "production" };
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function bg(e, t, n) {
  return (t = vg(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Hd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hd(Object(n), !0).forEach(function(r) {
      bg(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function gg(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vg(e) {
  var t = gg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const qd = () => {
};
let sl = {}, cm = {}, fm = null, mm = {
  mark: qd,
  measure: qd
};
try {
  typeof window < "u" && (sl = window), typeof document < "u" && (cm = document), typeof MutationObserver < "u" && (fm = MutationObserver), typeof performance < "u" && (mm = performance);
} catch {
}
const {
  userAgent: Wd = ""
} = sl.navigator || {}, Cn = sl, Ve = cm, Gd = fm, Vi = mm;
Cn.document;
const un = !!Ve.documentElement && !!Ve.head && typeof Ve.addEventListener == "function" && typeof Ve.createElement == "function", pm = ~Wd.indexOf("MSIE") || ~Wd.indexOf("Trident/");
var yg = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, wg = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, hm = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, xg = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, bm = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], dt = "classic", Jo = "duotone", kg = "sharp", _g = "sharp-duotone", gm = [dt, Jo, kg, _g], Sg = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Eg = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Cg = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), Tg = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, Og = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Kd = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Ag = ["kit"], Dg = {
  kit: {
    "fa-kit": "fak"
  }
}, Pg = ["fak", "fakd"], Mg = {
  kit: {
    fak: "fa-kit"
  }
}, Yd = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ui = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, $g = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Lg = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Fg = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Ng = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, Ig = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ss = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, zg = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ls = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...$g, ...zg], Rg = ["solid", "regular", "light", "thin", "duotone", "brands"], vm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], jg = vm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Vg = [...Object.keys(Ig), ...Rg, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ui.GROUP, Ui.SWAP_OPACITY, Ui.PRIMARY, Ui.SECONDARY].concat(vm.map((e) => "".concat(e, "x"))).concat(jg.map((e) => "w-".concat(e))), Ug = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const on = "___FONT_AWESOME___", ds = 16, ym = "fa", wm = "svg-inline--fa", Gn = "data-fa-i2svg", us = "data-fa-pseudo-element", Bg = "data-fa-pseudo-element-pending", ll = "data-prefix", dl = "data-icon", Xd = "fontawesome-i2svg", Hg = "async", qg = ["HTML", "HEAD", "STYLE", "SCRIPT"], xm = (() => {
  try {
    return hg.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function xi(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[dt];
    }
  });
}
const km = I({}, hm);
km[dt] = I(I(I(I({}, {
  "fa-duotone": "duotone"
}), hm[dt]), Kd.kit), Kd["kit-duotone"]);
const Wg = xi(km), cs = I({}, Tg);
cs[dt] = I(I(I(I({}, {
  duotone: "fad"
}), cs[dt]), Yd.kit), Yd["kit-duotone"]);
const Zd = xi(cs), fs = I({}, ss);
fs[dt] = I(I({}, fs[dt]), Mg.kit);
const ul = xi(fs), ms = I({}, Ng);
ms[dt] = I(I({}, ms[dt]), Dg.kit);
xi(ms);
const Gg = yg, _m = "fa-layers-text", Kg = wg, Yg = I({}, Sg);
xi(Yg);
const Xg = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Sa = xg, Zg = [...Ag, ...Vg], Xr = Cn.FontAwesomeConfig || {};
function Jg(e) {
  var t = Ve.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Qg(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Ve && typeof Ve.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = Qg(Jg(n));
  i != null && (Xr[r] = i);
});
const Sm = {
  styleDefault: "solid",
  familyDefault: dt,
  cssPrefix: ym,
  replacementClass: wm,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Xr.familyPrefix && (Xr.cssPrefix = Xr.familyPrefix);
const vr = I(I({}, Sm), Xr);
vr.autoReplaceSvg || (vr.observeMutations = !1);
const re = {};
Object.keys(Sm).forEach((e) => {
  Object.defineProperty(re, e, {
    enumerable: !0,
    set: function(t) {
      vr[e] = t, Zr.forEach((n) => n(re));
    },
    get: function() {
      return vr[e];
    }
  });
});
Object.defineProperty(re, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    vr.cssPrefix = e, Zr.forEach((t) => t(re));
  },
  get: function() {
    return vr.cssPrefix;
  }
});
Cn.FontAwesomeConfig = re;
const Zr = [];
function ev(e) {
  return Zr.push(e), () => {
    Zr.splice(Zr.indexOf(e), 1);
  };
}
const fn = ds, Wt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function tv(e) {
  if (!e || !un)
    return;
  const t = Ve.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Ve.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const o = n[i], a = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(a) > -1 && (r = o);
  }
  return Ve.head.insertBefore(t, r), e;
}
const nv = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function fi() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += nv[Math.random() * 62 | 0];
  return t;
}
function Er(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function cl(e) {
  return e.classList ? Er(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Em(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function rv(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Em(e[n]), '" '), "").trim();
}
function Qo(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function fl(e) {
  return e.size !== Wt.size || e.x !== Wt.x || e.y !== Wt.y || e.rotate !== Wt.rotate || e.flipX || e.flipY;
}
function iv(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(o, " ").concat(a, " ").concat(s)
  }, d = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: l,
    path: d
  };
}
function ov(e) {
  let {
    transform: t,
    width: n = ds,
    height: r = ds,
    startCentered: i = !1
  } = e, o = "";
  return i && pm ? o += "translate(".concat(t.x / fn - n / 2, "em, ").concat(t.y / fn - r / 2, "em) ") : i ? o += "translate(calc(-50% + ".concat(t.x / fn, "em), calc(-50% + ").concat(t.y / fn, "em)) ") : o += "translate(".concat(t.x / fn, "em, ").concat(t.y / fn, "em) "), o += "scale(".concat(t.size / fn * (t.flipX ? -1 : 1), ", ").concat(t.size / fn * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var av = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Cm() {
  const e = ym, t = wm, n = re.cssPrefix, r = re.replacementClass;
  let i = av;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), a = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(o, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
let Jd = !1;
function Ea() {
  re.autoAddCss && !Jd && (tv(Cm()), Jd = !0);
}
var sv = {
  mixout() {
    return {
      dom: {
        css: Cm,
        insertCss: Ea
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ea();
      },
      beforeI2svg() {
        Ea();
      }
    };
  }
};
const an = Cn || {};
an[on] || (an[on] = {});
an[on].styles || (an[on].styles = {});
an[on].hooks || (an[on].hooks = {});
an[on].shims || (an[on].shims = []);
var Gt = an[on];
const Tm = [], Om = function() {
  Ve.removeEventListener("DOMContentLoaded", Om), vo = 1, Tm.map((e) => e());
};
let vo = !1;
un && (vo = (Ve.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ve.readyState), vo || Ve.addEventListener("DOMContentLoaded", Om));
function lv(e) {
  un && (vo ? setTimeout(e, 0) : Tm.push(e));
}
function ki(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Em(e) : "<".concat(t, " ").concat(rv(n), ">").concat(r.map(ki).join(""), "</").concat(t, ">");
}
function Qd(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ca = function(t, n, r, i) {
  var o = Object.keys(t), a = o.length, s = n, l, d, u;
  for (r === void 0 ? (l = 1, u = t[o[0]]) : (l = 0, u = r); l < a; l++)
    d = o[l], u = s(u, t[d], d, t);
  return u;
};
function dv(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((i & 1023) << 10) + (o & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function ps(e) {
  const t = dv(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function uv(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function eu(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function hs(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = eu(t);
  typeof Gt.hooks.addPack == "function" && !r ? Gt.hooks.addPack(e, eu(t)) : Gt.styles[e] = I(I({}, Gt.styles[e] || {}), i), e === "fas" && hs("fa", t);
}
const {
  styles: mi,
  shims: cv
} = Gt, Am = Object.keys(ul), fv = Am.reduce((e, t) => (e[t] = Object.keys(ul[t]), e), {});
let ml = null, Dm = {}, Pm = {}, Mm = {}, $m = {}, Lm = {};
function mv(e) {
  return ~Zg.indexOf(e);
}
function pv(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !mv(i) ? i : null;
}
const Fm = () => {
  const e = (r) => Ca(mi, (i, o, a) => (i[a] = Ca(o, r, {}), i), {});
  Dm = e((r, i, o) => (i[3] && (r[i[3]] = o), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = o;
  }), r)), Pm = e((r, i, o) => (r[o] = o, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = o;
  }), r)), Lm = e((r, i, o) => {
    const a = i[2];
    return r[o] = o, a.forEach((s) => {
      r[s] = o;
    }), r;
  });
  const t = "far" in mi || re.autoFetchSvg, n = Ca(cv, (r, i) => {
    const o = i[0];
    let a = i[1];
    const s = i[2];
    return a === "far" && !t && (a = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: a,
      iconName: s
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: a,
      iconName: s
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Mm = n.names, $m = n.unicodes, ml = ea(re.styleDefault, {
    family: re.familyDefault
  });
};
ev((e) => {
  ml = ea(e.styleDefault, {
    family: re.familyDefault
  });
});
Fm();
function pl(e, t) {
  return (Dm[e] || {})[t];
}
function hv(e, t) {
  return (Pm[e] || {})[t];
}
function Un(e, t) {
  return (Lm[e] || {})[t];
}
function Nm(e) {
  return Mm[e] || {
    prefix: null,
    iconName: null
  };
}
function bv(e) {
  const t = $m[e], n = pl("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Tn() {
  return ml;
}
const Im = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function gv(e) {
  let t = dt;
  const n = Am.reduce((r, i) => (r[i] = "".concat(re.cssPrefix, "-").concat(i), r), {});
  return gm.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => fv[r].includes(i))) && (t = r);
  }), t;
}
function ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = dt
  } = t, r = Wg[n][e];
  if (n === Jo && !e)
    return "fad";
  const i = Zd[n][e] || Zd[n][r], o = e in Gt.styles ? e : null;
  return i || o || null;
}
function vv(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = pv(re.cssPrefix, r);
    i ? n = i : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function tu(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function ta(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const i = ls.concat(Lg), o = tu(e.filter((c) => i.includes(c))), a = tu(e.filter((c) => !ls.includes(c))), s = o.filter((c) => (r = c, !bm.includes(c))), [l = null] = s, d = gv(o), u = I(I({}, vv(a)), {}, {
    prefix: ea(l, {
      family: d
    })
  });
  return I(I(I({}, u), kv({
    values: e,
    family: d,
    styles: mi,
    config: re,
    canonical: u,
    givenPrefix: r
  })), yv(n, r, u));
}
function yv(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const o = t === "fa" ? Nm(i) : {}, a = Un(r, i);
  return i = o.iconName || a || i, r = o.prefix || r, r === "far" && !mi.far && mi.fas && !re.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const wv = gm.filter((e) => e !== dt || e !== Jo), xv = Object.keys(ss).filter((e) => e !== dt).map((e) => Object.keys(ss[e])).flat();
function kv(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: o = {},
    config: a = {}
  } = e, s = n === Jo, l = t.includes("fa-duotone") || t.includes("fad"), d = a.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!s && (l || d || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && wv.includes(n) && (Object.keys(o).find((f) => xv.includes(f)) || a.autoFetchSvg)) {
    const f = Cg.get(n).defaultShortPrefixId;
    r.prefix = f, r.iconName = Un(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = Tn() || "fas"), r;
}
class _v {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((o) => {
      this.definitions[o] = I(I({}, this.definitions[o] || {}), i[o]), hs(o, i[o]);
      const a = ul[dt][o];
      a && hs(a, i[o]), Fm();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((i) => {
      const {
        prefix: o,
        iconName: a,
        icon: s
      } = r[i], l = s[2];
      t[o] || (t[o] = {}), l.length > 0 && l.forEach((d) => {
        typeof d == "string" && (t[o][d] = s);
      }), t[o][a] = s;
    }), t;
  }
}
let nu = [], rr = {};
const mr = {}, Sv = Object.keys(mr);
function Ev(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return nu = e, rr = {}, Object.keys(mr).forEach((r) => {
    Sv.indexOf(r) === -1 && delete mr[r];
  }), nu.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((o) => {
      typeof i[o] == "function" && (n[o] = i[o]), typeof i[o] == "object" && Object.keys(i[o]).forEach((a) => {
        n[o] || (n[o] = {}), n[o][a] = i[o][a];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((a) => {
        rr[a] || (rr[a] = []), rr[a].push(o[a]);
      });
    }
    r.provides && r.provides(mr);
  }), n;
}
function bs(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (rr[e] || []).forEach((a) => {
    t = a.apply(null, [t, ...r]);
  }), t;
}
function Kn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (rr[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function On() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return mr[e] ? mr[e].apply(null, t) : void 0;
}
function gs(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Tn();
  if (t)
    return t = Un(n, t) || t, Qd(zm.definitions, n, t) || Qd(Gt.styles, n, t);
}
const zm = new _v(), Cv = () => {
  re.autoReplaceSvg = !1, re.observeMutations = !1, Kn("noAuto");
}, Tv = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return un ? (Kn("beforeI2svg", e), On("pseudoElements2svg", e), On("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    re.autoReplaceSvg === !1 && (re.autoReplaceSvg = !0), re.observeMutations = !0, lv(() => {
      Av({
        autoReplaceSvgRoot: t
      }), Kn("watch", e);
    });
  }
}, Ov = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Un(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = ea(e[0]);
      return {
        prefix: n,
        iconName: Un(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(re.cssPrefix, "-")) > -1 || e.match(Gg))) {
      const t = ta(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Tn(),
        iconName: Un(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Tn();
      return {
        prefix: t,
        iconName: Un(t, e) || e
      };
    }
  }
}, Et = {
  noAuto: Cv,
  config: re,
  dom: Tv,
  parse: Ov,
  library: zm,
  findIconDefinition: gs,
  toHtml: ki
}, Av = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Ve
  } = e;
  (Object.keys(Gt.styles).length > 0 || re.autoFetchSvg) && un && re.autoReplaceSvg && Et.dom.i2svg({
    node: t
  });
};
function na(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => ki(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!un) return;
      const n = Ve.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Dv(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: o,
    transform: a
  } = e;
  if (fl(a) && n.found && !r.found) {
    const {
      width: s,
      height: l
    } = n, d = {
      x: s / l / 2,
      y: 0.5
    };
    i.style = Qo(I(I({}, o), {}, {
      "transform-origin": "".concat(d.x + a.x / 16, "em ").concat(d.y + a.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function Pv(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: i,
    symbol: o
  } = e;
  const a = o === !0 ? "".concat(t, "-").concat(re.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: I(I({}, i), {}, {
        id: a
      }),
      children: r
    }]
  }];
}
function hl(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: i,
    transform: o,
    symbol: a,
    title: s,
    maskId: l,
    titleId: d,
    extra: u,
    watchable: c = !1
  } = e, {
    width: f,
    height: m
  } = n.found ? n : t, h = Pg.includes(r), p = [re.replacementClass, i ? "".concat(re.cssPrefix, "-").concat(i) : ""].filter((O) => u.classes.indexOf(O) === -1).filter((O) => O !== "" || !!O).concat(u.classes).join(" ");
  let g = {
    children: [],
    attributes: I(I({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: p,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(f, " ").concat(m)
    })
  };
  const v = h && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(f / m * 16 * 0.0625, "em")
  } : {};
  c && (g.attributes[Gn] = ""), s && (g.children.push({
    tag: "title",
    attributes: {
      id: g.attributes["aria-labelledby"] || "title-".concat(d || fi())
    },
    children: [s]
  }), delete g.attributes.title);
  const y = I(I({}, g), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: l,
    transform: o,
    symbol: a,
    styles: I(I({}, v), u.styles)
  }), {
    children: w,
    attributes: k
  } = n.found && t.found ? On("generateAbstractMask", y) || {
    children: [],
    attributes: {}
  } : On("generateAbstractIcon", y) || {
    children: [],
    attributes: {}
  };
  return y.children = w, y.attributes = k, a ? Pv(y) : Dv(y);
}
function ru(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: o,
    extra: a,
    watchable: s = !1
  } = e, l = I(I(I({}, a.attributes), o ? {
    title: o
  } : {}), {}, {
    class: a.classes.join(" ")
  });
  s && (l[Gn] = "");
  const d = I({}, a.styles);
  fl(i) && (d.transform = ov({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), d["-webkit-transform"] = d.transform);
  const u = Qo(d);
  u.length > 0 && (l.style = u);
  const c = [];
  return c.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), o && c.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), c;
}
function Mv(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = I(I(I({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = Qo(r.styles);
  o.length > 0 && (i.style = o);
  const a = [];
  return a.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && a.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), a;
}
const {
  styles: Ta
} = Gt;
function vs(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(re.cssPrefix, "-").concat(Sa.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(re.cssPrefix, "-").concat(Sa.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(re.cssPrefix, "-").concat(Sa.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
const $v = {
  found: !1,
  width: 512,
  height: 512
};
function Lv(e, t) {
  !xm && !re.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function ys(e, t) {
  let n = t;
  return t === "fa" && re.styleDefault !== null && (t = Tn()), new Promise((r, i) => {
    if (n === "fa") {
      const o = Nm(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && Ta[t] && Ta[t][e]) {
      const o = Ta[t][e];
      return r(vs(o));
    }
    Lv(e, t), r(I(I({}, $v), {}, {
      icon: re.showMissingIcons && e ? On("missingIconAbstract") || {} : {}
    }));
  });
}
const iu = () => {
}, ws = re.measurePerformance && Vi && Vi.mark && Vi.measure ? Vi : {
  mark: iu,
  measure: iu
}, jr = 'FA "6.7.2"', Fv = (e) => (ws.mark("".concat(jr, " ").concat(e, " begins")), () => Rm(e)), Rm = (e) => {
  ws.mark("".concat(jr, " ").concat(e, " ends")), ws.measure("".concat(jr, " ").concat(e), "".concat(jr, " ").concat(e, " begins"), "".concat(jr, " ").concat(e, " ends"));
};
var bl = {
  begin: Fv,
  end: Rm
};
const Xi = () => {
};
function ou(e) {
  return typeof (e.getAttribute ? e.getAttribute(Gn) : null) == "string";
}
function Nv(e) {
  const t = e.getAttribute ? e.getAttribute(ll) : null, n = e.getAttribute ? e.getAttribute(dl) : null;
  return t && n;
}
function Iv(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(re.replacementClass);
}
function zv() {
  return re.autoReplaceSvg === !0 ? Zi.replace : Zi[re.autoReplaceSvg] || Zi.replace;
}
function Rv(e) {
  return Ve.createElementNS("http://www.w3.org/2000/svg", e);
}
function jv(e) {
  return Ve.createElement(e);
}
function jm(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Rv : jv
  } = t;
  if (typeof e == "string")
    return Ve.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(jm(o, {
      ceFn: n
    }));
  }), r;
}
function Vv(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Zi = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(jm(n), t);
      }), t.getAttribute(Gn) === null && re.keepOriginalSource) {
        let n = Ve.createComment(Vv(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~cl(t).indexOf(re.replacementClass))
      return Zi.replace(e);
    const r = new RegExp("".concat(re.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((a, s) => (s === re.replacementClass || s.match(r) ? a.toSvg.push(s) : a.toNode.push(s), a), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const i = n.map((o) => ki(o)).join(`
`);
    t.setAttribute(Gn, ""), t.innerHTML = i;
  }
};
function au(e) {
  e();
}
function Vm(e, t) {
  const n = typeof t == "function" ? t : Xi;
  if (e.length === 0)
    n();
  else {
    let r = au;
    re.mutateApproach === Hg && (r = Cn.requestAnimationFrame || au), r(() => {
      const i = zv(), o = bl.begin("mutate");
      e.map(i), o(), n();
    });
  }
}
let gl = !1;
function Um() {
  gl = !0;
}
function xs() {
  gl = !1;
}
let yo = null;
function su(e) {
  if (!Gd || !re.observeMutations)
    return;
  const {
    treeCallback: t = Xi,
    nodeCallback: n = Xi,
    pseudoElementsCallback: r = Xi,
    observeMutationsRoot: i = Ve
  } = e;
  yo = new Gd((o) => {
    if (gl) return;
    const a = Tn();
    Er(o).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !ou(s.addedNodes[0]) && (re.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && re.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && ou(s.target) && ~Xg.indexOf(s.attributeName))
        if (s.attributeName === "class" && Nv(s.target)) {
          const {
            prefix: l,
            iconName: d
          } = ta(cl(s.target));
          s.target.setAttribute(ll, l || a), d && s.target.setAttribute(dl, d);
        } else Iv(s.target) && n(s.target);
    });
  }), un && yo.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Uv() {
  yo && yo.disconnect();
}
function Bv(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const o = i.split(":"), a = o[0], s = o.slice(1);
    return a && s.length > 0 && (r[a] = s.join(":").trim()), r;
  }, {})), n;
}
function Hv(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = ta(cl(e));
  return i.prefix || (i.prefix = Tn()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = hv(i.prefix, e.innerText) || pl(i.prefix, ps(e.innerText))), !i.iconName && re.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function qv(e) {
  const t = Er(e.attributes).reduce((i, o) => (i.name !== "class" && i.name !== "style" && (i[o.name] = o.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return re.autoA11y && (n ? t["aria-labelledby"] = "".concat(re.replacementClass, "-title-").concat(r || fi()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Wv() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Wt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function lu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = Hv(e), o = qv(e), a = bs("parseNodeAttributes", {}, e);
  let s = t.styleParser ? Bv(e) : [];
  return I({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: Wt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: s,
      attributes: o
    }
  }, a);
}
const {
  styles: Gv
} = Gt;
function Bm(e) {
  const t = re.autoReplaceSvg === "nest" ? lu(e, {
    styleParser: !1
  }) : lu(e);
  return ~t.extra.classes.indexOf(_m) ? On("generateLayersText", e, t) : On("generateSvgReplacementMutation", e, t);
}
function Kv() {
  return [...Og, ...ls];
}
function du(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!un) return Promise.resolve();
  const n = Ve.documentElement.classList, r = (u) => n.add("".concat(Xd, "-").concat(u)), i = (u) => n.remove("".concat(Xd, "-").concat(u)), o = re.autoFetchSvg ? Kv() : bm.concat(Object.keys(Gv));
  o.includes("fa") || o.push("fa");
  const a = [".".concat(_m, ":not([").concat(Gn, "])")].concat(o.map((u) => ".".concat(u, ":not([").concat(Gn, "])"))).join(", ");
  if (a.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Er(e.querySelectorAll(a));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const l = bl.begin("onTree"), d = s.reduce((u, c) => {
    try {
      const f = Bm(c);
      f && u.push(f);
    } catch (f) {
      xm || f.name === "MissingIcon" && console.error(f);
    }
    return u;
  }, []);
  return new Promise((u, c) => {
    Promise.all(d).then((f) => {
      Vm(f, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch((f) => {
      l(), c(f);
    });
  });
}
function Yv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Bm(e).then((n) => {
    n && Vm([n], t);
  });
}
function Xv(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : gs(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : gs(i || {})), e(r, I(I({}, n), {}, {
      mask: i
    }));
  };
}
const Zv = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = Wt,
    symbol: r = !1,
    mask: i = null,
    maskId: o = null,
    title: a = null,
    titleId: s = null,
    classes: l = [],
    attributes: d = {},
    styles: u = {}
  } = t;
  if (!e) return;
  const {
    prefix: c,
    iconName: f,
    icon: m
  } = e;
  return na(I({
    type: "icon"
  }, e), () => (Kn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), re.autoA11y && (a ? d["aria-labelledby"] = "".concat(re.replacementClass, "-title-").concat(s || fi()) : (d["aria-hidden"] = "true", d.focusable = "false")), hl({
    icons: {
      main: vs(m),
      mask: i ? vs(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: c,
    iconName: f,
    transform: I(I({}, Wt), n),
    symbol: r,
    title: a,
    maskId: o,
    titleId: s,
    extra: {
      attributes: d,
      styles: u,
      classes: l
    }
  })));
};
var Jv = {
  mixout() {
    return {
      icon: Xv(Zv)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = du, e.nodeCallback = Yv, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = Ve,
        callback: r = () => {
        }
      } = t;
      return du(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: o,
        prefix: a,
        transform: s,
        symbol: l,
        mask: d,
        maskId: u,
        extra: c
      } = n;
      return new Promise((f, m) => {
        Promise.all([ys(r, a), d.iconName ? ys(d.iconName, d.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((h) => {
          let [p, g] = h;
          f([t, hl({
            icons: {
              main: p,
              mask: g
            },
            prefix: a,
            iconName: r,
            transform: s,
            symbol: l,
            maskId: u,
            title: i,
            titleId: o,
            extra: c,
            watchable: !0
          })]);
        }).catch(m);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: o,
        styles: a
      } = t;
      const s = Qo(a);
      s.length > 0 && (r.style = s);
      let l;
      return fl(o) && (l = On("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(l || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, Qv = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return na({
          type: "layer"
        }, () => {
          Kn("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((i) => {
            Array.isArray(i) ? i.map((o) => {
              r = r.concat(o.abstract);
            }) : r = r.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(re.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, ey = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: i = {},
          styles: o = {}
        } = t;
        return na({
          type: "counter",
          content: e
        }, () => (Kn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Mv({
          content: e.toString(),
          title: n,
          extra: {
            attributes: i,
            styles: o,
            classes: ["".concat(re.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, ty = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = Wt,
          title: r = null,
          classes: i = [],
          attributes: o = {},
          styles: a = {}
        } = t;
        return na({
          type: "text",
          content: e
        }, () => (Kn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ru({
          content: e,
          transform: I(I({}, Wt), n),
          title: r,
          extra: {
            attributes: o,
            styles: a,
            classes: ["".concat(re.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: i,
        extra: o
      } = n;
      let a = null, s = null;
      if (pm) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), d = t.getBoundingClientRect();
        a = d.width / l, s = d.height / l;
      }
      return re.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, ru({
        content: t.innerHTML,
        width: a,
        height: s,
        transform: i,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const ny = new RegExp('"', "ug"), uu = [1105920, 1112319], cu = I(I(I(I({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Eg), Ug), Fg), ks = Object.keys(cu).reduce((e, t) => (e[t.toLowerCase()] = cu[t], e), {}), ry = Object.keys(ks).reduce((e, t) => {
  const n = ks[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function iy(e) {
  const t = e.replace(ny, ""), n = uv(t, 0), r = n >= uu[0] && n <= uu[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: ps(i ? t[0] : t),
    isSecondary: r || i
  };
}
function oy(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (ks[n] || {})[i] || ry[n];
}
function fu(e, t) {
  const n = "".concat(Bg).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const a = Er(e.children).filter((f) => f.getAttribute(us) === t)[0], s = Cn.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), d = l.match(Kg), u = s.getPropertyValue("font-weight"), c = s.getPropertyValue("content");
    if (a && !d)
      return e.removeChild(a), r();
    if (d && c !== "none" && c !== "") {
      const f = s.getPropertyValue("content");
      let m = oy(l, u);
      const {
        value: h,
        isSecondary: p
      } = iy(f), g = d[0].startsWith("FontAwesome");
      let v = pl(m, h), y = v;
      if (g) {
        const w = bv(h);
        w.iconName && w.prefix && (v = w.iconName, m = w.prefix);
      }
      if (v && !p && (!a || a.getAttribute(ll) !== m || a.getAttribute(dl) !== y)) {
        e.setAttribute(n, y), a && e.removeChild(a);
        const w = Wv(), {
          extra: k
        } = w;
        k.attributes[us] = t, ys(v, m).then((O) => {
          const D = hl(I(I({}, w), {}, {
            icons: {
              main: O,
              mask: Im()
            },
            prefix: m,
            iconName: y,
            extra: k,
            watchable: !0
          })), N = Ve.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(N, e.firstChild) : e.appendChild(N), N.outerHTML = D.map((W) => ki(W)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function ay(e) {
  return Promise.all([fu(e, "::before"), fu(e, "::after")]);
}
function sy(e) {
  return e.parentNode !== document.head && !~qg.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(us) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function mu(e) {
  if (un)
    return new Promise((t, n) => {
      const r = Er(e.querySelectorAll("*")).filter(sy).map(ay), i = bl.begin("searchPseudoElements");
      Um(), Promise.all(r).then(() => {
        i(), xs(), t();
      }).catch(() => {
        i(), xs(), n();
      });
    });
}
var ly = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = mu, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Ve
      } = t;
      re.searchPseudoElements && mu(n);
    };
  }
};
let pu = !1;
var dy = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Um(), pu = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        su(bs("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Uv();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        pu ? xs() : su(bs("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const hu = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const i = r.toLowerCase().split("-"), o = i[0];
    let a = i.slice(1).join("-");
    if (o && a === "h")
      return n.flipX = !0, n;
    if (o && a === "v")
      return n.flipY = !0, n;
    if (a = parseFloat(a), isNaN(a))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + a;
        break;
      case "shrink":
        n.size = n.size - a;
        break;
      case "left":
        n.x = n.x - a;
        break;
      case "right":
        n.x = n.x + a;
        break;
      case "up":
        n.y = n.y - a;
        break;
      case "down":
        n.y = n.y + a;
        break;
      case "rotate":
        n.rotate = n.rotate + a;
        break;
    }
    return n;
  }, t);
};
var uy = {
  mixout() {
    return {
      parse: {
        transform: (e) => hu(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = hu(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: i,
        iconWidth: o
      } = t;
      const a = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), d = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(s, " ").concat(l, " ").concat(d)
      }, c = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, f = {
        outer: a,
        inner: u,
        path: c
      };
      return {
        tag: "g",
        attributes: I({}, f.outer),
        children: [{
          tag: "g",
          attributes: I({}, f.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: I(I({}, n.icon.attributes), f.path)
          }]
        }]
      };
    };
  }
};
const Oa = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function bu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function cy(e) {
  return e.tag === "g" ? e.children : [e];
}
var fy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? ta(n.split(" ").map((i) => i.trim())) : Im();
        return r.prefix || (r.prefix = Tn()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        mask: o,
        maskId: a,
        transform: s
      } = t;
      const {
        width: l,
        icon: d
      } = i, {
        width: u,
        icon: c
      } = o, f = iv({
        transform: s,
        containerWidth: u,
        iconWidth: l
      }), m = {
        tag: "rect",
        attributes: I(I({}, Oa), {}, {
          fill: "white"
        })
      }, h = d.children ? {
        children: d.children.map(bu)
      } : {}, p = {
        tag: "g",
        attributes: I({}, f.inner),
        children: [bu(I({
          tag: d.tag,
          attributes: I(I({}, d.attributes), f.path)
        }, h))]
      }, g = {
        tag: "g",
        attributes: I({}, f.outer),
        children: [p]
      }, v = "mask-".concat(a || fi()), y = "clip-".concat(a || fi()), w = {
        tag: "mask",
        attributes: I(I({}, Oa), {}, {
          id: v,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [m, g]
      }, k = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: y
          },
          children: cy(c)
        }, w]
      };
      return n.push(k, {
        tag: "rect",
        attributes: I({
          fill: "currentColor",
          "clip-path": "url(#".concat(y, ")"),
          mask: "url(#".concat(v, ")")
        }, Oa)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, my = {
  provides(e) {
    let t = !1;
    Cn.matchMedia && (t = Cn.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const o = I(I({}, i), {}, {
        attributeName: "opacity"
      }), a = {
        tag: "circle",
        attributes: I(I({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || a.children.push({
        tag: "animate",
        attributes: I(I({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: I(I({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(a), n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: I(I({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: I(I({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, py = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, hy = [sv, Jv, Qv, ey, ty, ly, dy, uy, fy, my, py];
Ev(hy, {
  mixoutsTo: Et
});
Et.noAuto;
Et.config;
const Hm = Et.library;
Et.dom;
const _s = Et.parse;
Et.findIconDefinition;
Et.toHtml;
const by = Et.icon;
Et.layer;
Et.text;
Et.counter;
var gy = { NODE_ENV: "production" };
function gu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function tn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gu(Object(n), !0).forEach(function(r) {
      yt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gu(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function vy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yy(e) {
  var t = vy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wo(e) {
  "@babel/helpers - typeof";
  return wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wo(e);
}
function yt(e, t, n) {
  return t = yy(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function wy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function xy(e, t) {
  if (e == null) return {};
  var n = wy(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var ky = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qm = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(v, y, w) {
      if (!d(y) || c(y) || f(y) || m(y) || l(y))
        return y;
      var k, O = 0, D = 0;
      if (u(y))
        for (k = [], D = y.length; O < D; O++)
          k.push(n(v, y[O], w));
      else {
        k = {};
        for (var N in y)
          Object.prototype.hasOwnProperty.call(y, N) && (k[v(N, w)] = n(v, y[N], w));
      }
      return k;
    }, r = function(v, y) {
      y = y || {};
      var w = y.separator || "_", k = y.split || /(?=[A-Z])/;
      return v.split(k).join(w);
    }, i = function(v) {
      return h(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(y, w) {
        return w ? w.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, o = function(v) {
      var y = i(v);
      return y.substr(0, 1).toUpperCase() + y.substr(1);
    }, a = function(v, y) {
      return r(v, y).toLowerCase();
    }, s = Object.prototype.toString, l = function(v) {
      return typeof v == "function";
    }, d = function(v) {
      return v === Object(v);
    }, u = function(v) {
      return s.call(v) == "[object Array]";
    }, c = function(v) {
      return s.call(v) == "[object Date]";
    }, f = function(v) {
      return s.call(v) == "[object RegExp]";
    }, m = function(v) {
      return s.call(v) == "[object Boolean]";
    }, h = function(v) {
      return v = v - 0, v === v;
    }, p = function(v, y) {
      var w = y && "process" in y ? y.process : y;
      return typeof w != "function" ? v : function(k, O) {
        return w(k, v, O);
      };
    }, g = {
      camelize: i,
      decamelize: a,
      pascalize: o,
      depascalize: a,
      camelizeKeys: function(v, y) {
        return n(p(i, y), v);
      },
      decamelizeKeys: function(v, y) {
        return n(p(a, y), v, y);
      },
      pascalizeKeys: function(v, y) {
        return n(p(o, y), v);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = g : t.humps = g;
  })(ky);
})(qm);
var _y = qm.exports, Sy = ["class", "style"];
function Ey(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = _y.camelize(n.slice(0, r)), o = n.slice(r + 1).trim();
    return t[i] = o, t;
  }, {});
}
function Cy(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Wm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(l) {
    return Wm(l);
  }), i = Object.keys(e.attributes || {}).reduce(function(l, d) {
    var u = e.attributes[d];
    switch (d) {
      case "class":
        l.class = Cy(u);
        break;
      case "style":
        l.style = Ey(u);
        break;
      default:
        l.attrs[d] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var o = n.style, a = o === void 0 ? {} : o, s = xy(n, Sy);
  return je(e.tag, tn(tn(tn({}, t), {}, {
    class: i.class,
    style: tn(tn({}, i.style), a)
  }, i.attrs), s), r);
}
var Gm = !1;
try {
  Gm = gy.NODE_ENV === "production";
} catch {
}
function Ty() {
  if (!Gm && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Aa(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? yt({}, e, t) : {};
}
function Oy(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, yt(yt(yt(yt(yt(yt(yt(yt(yt(yt(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), yt(yt(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function vu(e) {
  if (e && wo(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (_s.icon)
    return _s.icon(e);
  if (e === null)
    return null;
  if (wo(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var xo = /* @__PURE__ */ ve({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.attrs, i = L(function() {
      return vu(t.icon);
    }), o = L(function() {
      return Aa("classes", Oy(t));
    }), a = L(function() {
      return Aa("transform", typeof t.transform == "string" ? _s.transform(t.transform) : t.transform);
    }), s = L(function() {
      return Aa("mask", vu(t.mask));
    }), l = L(function() {
      return by(i.value, tn(tn(tn(tn({}, o.value), a.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    st(l, function(u) {
      if (!u)
        return Ty("Could not find one or more icon(s)", i.value, s.value);
    }, {
      immediate: !0
    });
    var d = L(function() {
      return l.value ? Wm(l.value.abstract[0], {}, r) : null;
    });
    return function() {
      return d.value;
    };
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Ay = {
  prefix: "fab",
  iconName: "monero",
  icon: [496, 512, [], "f3d0", "M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105v128zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80H88z"]
}, Dy = {
  prefix: "fab",
  iconName: "cc-stripe",
  icon: [576, 512, [], "f1f5", "M492.4 220.8c-8.9 0-18.7 6.7-18.7 22.7h36.7c0-16-9.3-22.7-18-22.7zM375 223.4c-8.2 0-13.3 2.9-17 7l.2 52.8c3.5 3.7 8.5 6.7 16.8 6.7 13.1 0 21.9-14.3 21.9-33.4 0-18.6-9-33.2-21.9-33.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM122.2 281.1c0 25.6-20.3 40.1-49.9 40.3-12.2 0-25.6-2.4-38.8-8.1v-33.9c12 6.4 27.1 11.3 38.9 11.3 7.9 0 13.6-2.1 13.6-8.7 0-17-54-10.6-54-49.9 0-25.2 19.2-40.2 48-40.2 11.8 0 23.5 1.8 35.3 6.5v33.4c-10.8-5.8-24.5-9.1-35.3-9.1-7.5 0-12.1 2.2-12.1 7.7 0 16 54.3 8.4 54.3 50.7zm68.8-56.6h-27V275c0 20.9 22.5 14.4 27 12.6v28.9c-4.7 2.6-13.3 4.7-24.9 4.7-21.1 0-36.9-15.5-36.9-36.5l.2-113.9 34.7-7.4v30.8H191zm74 2.4c-4.5-1.5-18.7-3.6-27.1 7.4v84.4h-35.5V194.2h30.7l2.2 10.5c8.3-15.3 24.9-12.2 29.6-10.5h.1zm44.1 91.8h-35.7V194.2h35.7zm0-142.9l-35.7 7.6v-28.9l35.7-7.6zm74.1 145.5c-12.4 0-20-5.3-25.1-9l-.1 40.2-35.5 7.5V194.2h31.3l1.8 8.8c4.9-4.5 13.9-11.1 27.8-11.1 24.9 0 48.4 22.5 48.4 63.8 0 45.1-23.2 65.5-48.6 65.6zm160.4-51.5h-69.5c1.6 16.6 13.8 21.5 27.6 21.5 14.1 0 25.2-3 34.9-7.9V312c-9.7 5.3-22.4 9.2-39.4 9.2-34.6 0-58.8-21.7-58.8-64.5 0-36.2 20.5-64.9 54.3-64.9 33.7 0 51.3 28.7 51.3 65.1 0 3.5-.3 10.9-.4 12.9z"]
}, Py = {
  prefix: "fab",
  iconName: "bitcoin",
  icon: [512, 512, [], "f379", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"]
}, My = {
  prefix: "fab",
  iconName: "paypal",
  icon: [384, 512, [], "f1ed", "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"]
}, $y = {
  prefix: "fab",
  iconName: "ethereum",
  icon: [320, 512, [], "f42e", "M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Ly = {
  prefix: "fas",
  iconName: "v",
  icon: [384, 512, [118], "56", "M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7L2.5 76.3c-6.8-16.3 .9-35 17.2-41.8z"]
}, Fy = {
  prefix: "fas",
  iconName: "money-bill-wave",
  icon: [576, 512, [], "f53a", "M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z"]
}, Ny = {
  prefix: "fas",
  iconName: "bitcoin-sign",
  icon: [320, 512, [], "e0b4", "M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32l0 32 32 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-6.3 0C18.7 448 0 429.3 0 406.3L0 288l0-22.3L0 224 0 101.6C0 80.8 16.8 64 37.6 64L48 64l0-32zM64 224l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 128l0 96zm112 64L64 288l0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z"]
}, Iy = {
  prefix: "fas",
  iconName: "wallet",
  icon: [512, 512, [], "f555", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, zy = {
  prefix: "fas",
  iconName: "litecoin-sign",
  icon: [384, 512, [], "e1d3", "M128 64c0-17.7-14.3-32-32-32S64 46.3 64 64l0 149.6L23.2 225.2c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22L64 280.1 64 448c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-154.1 136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3 128 64z"]
}, Ry = {
  prefix: "fas",
  iconName: "coins",
  icon: [512, 512, [], "f51e", "M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"]
}, jy = {
  prefix: "fas",
  iconName: "credit-card",
  icon: [576, 512, [128179, 62083, "credit-card-alt"], "f09d", "M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]
}, Km = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Vy = {
  prefix: "fas",
  iconName: "dollar-sign",
  icon: [320, 512, [128178, 61781, "dollar", "usd"], "24", "M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"]
}, Uy = {
  name: "Cryptoicon",
  props: {
    symbol: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: "24"
    },
    generic: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      lookupSymbol: /* @__PURE__ */ new Map([["BCHSV", "BSV"], ["BCHABC", "BAB"]])
    };
  },
  computed: {
    lSymbol() {
      return this.symbol && this.symbol.toLowerCase();
    },
    uSymbol() {
      return this.symbol && this.symbol.toUpperCase();
    },
    icon() {
      const e = this.lookupSymbol.has(this.uSymbol) ? this.lookupSymbol.get(this.uSymbol) : this.symbol;
      let t = this.$options.lib.find((n) => n.symbol === e.toLowerCase());
      if (t)
        return this.color ? t.plainIcon(this.color) : t.colorIcon();
      if (this.generic) {
        let n = this.$options.lib.find((r) => r.symbol == "generic");
        if (n)
          return this.color ? n.plainIcon(this.color) : n.colorIcon();
      } else {
        console.error(`Symbol of the icon is not correct: ${this.symbol}`);
        return;
      }
    }
  },
  lib: [],
  add(e) {
    Array.isArray(e) ? this.lib = e : this.lib.push(e);
  }
}, By = ["width", "height", "innerHTML"];
function Hy(e, t, n, r, i, o) {
  return S(), T("svg", {
    width: n.size,
    height: n.size,
    class: ye(`cryptoicon--${n.symbol}`),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    onClick: t[0] || (t[0] = (a) => e.$emit("click")),
    innerHTML: o.icon
  }, null, 10, By);
}
const vl = /* @__PURE__ */ gt(Uy, [["render", Hy]]), qy = {
  symbol: "bnb",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path fill="#FFF" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596l-2.263 2.257.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.001L16 13.706 14.305 15.4l-.195.195-.401.402-.004.003.004.003 2.29 2.291 2.294-2.293.001-.001-.002-.001z"/>`
}, Wy = {
  symbol: "btc",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/>`
}, Gy = {
  symbol: "dai",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle fill="#F4B731" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M9.277 8h6.552c3.985 0 7.006 2.116 8.13 5.194H26v1.861h-1.611c.031.294.047.594.047.898v.046c0 .342-.02.68-.06 1.01H26v1.86h-2.08C22.767 21.905 19.77 24 15.83 24H9.277v-5.131H7v-1.86h2.277v-1.954H7v-1.86h2.277V8zm1.831 10.869v3.462h4.72c2.914 0 5.078-1.387 6.085-3.462H11.108zm11.366-1.86H11.108v-1.954h11.37c.041.307.063.622.063.944v.045c0 .329-.023.65-.067.964zM15.83 9.665c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.171 8H9.277v5.194H7v1.861h2.277v1.953H7v1.86h2.277V24h6.552c3.94 0 6.938-2.095 8.091-5.131H26v-1.86h-1.624c.04-.33.06-.668.06-1.01v-.046c0-.304-.016-.604-.047-.898H26v-1.86h-2.041C22.835 10.114 19.814 8 15.829 8zm6.084 10.869c-1.007 2.075-3.171 3.462-6.084 3.462h-4.72v-3.462zm.564-3.814c.042.307.064.622.064.944v.045c0 .329-.023.65-.067.964H11.108v-1.953h11.37zM15.83 9.666c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z"/>`
}, Ky = {
  symbol: "eth",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#627EEA"/><g fill="#FFF" fill-rule="nonzero"><path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fill-opacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"/><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"/><path fill-opacity=".801" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z"/></g></g>`
}, Yy = {
  symbol: "ltc",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#BFBBBB"/><path fill="#FFF" d="M10.427 19.214L9 19.768l.688-2.759 1.444-.58L13.213 8h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 24H9.252z"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.573-12.786L9.252 24h12.875L23 20.429h-7.722l.848-3.483 1.427-.571.68-2.75-1.41.571L18.342 8h-5.129l-2.081 8.429-1.444.58L9 19.768l1.427-.554z"/>`
}, Xy = {
  symbol: "matic",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#6F41D8" cx="16" cy="16" r="16"/><path d="M21.092 12.693c-.369-.215-.848-.215-1.254 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0l-4.244 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-5.13 7.662l-4.243 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409c-.37-.215-.85-.215-1.255 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0z"/>`
}, Zy = {
  symbol: "trx",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#EF0027" cx="16" cy="16" r="16"/><path d="M21.932 9.913L7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973l-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455l6.687-1.21-7.67 9.343.983-8.133z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562L7.5 7.257zm16.252 6.977l-7.67 9.344.983-8.133 6.687-1.21zM9.472 9.488l6.633 5.502-1.038 8.58L9.472 9.487zM21.7 11.083l2.208 2.099-6.038 1.093 3.83-3.192zM10.194 8.778l10.402 1.914-4.038 3.364-6.364-5.278z"/>`
}, Jy = {
  symbol: "uni",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle fill="#FF007A" fill-rule="nonzero" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M12.261 5.767c-.285-.044-.297-.05-.163-.07.257-.04.865.015 1.284.114.977.233 1.866.828 2.816 1.885l.252.28.36-.057c1.52-.245 3.067-.05 4.36.547.356.164.917.491.987.576.023.026.064.199.091.383.096.637.048 1.125-.146 1.49-.106.198-.112.26-.041.43a.416.416 0 00.372.236c.322 0 .668-.52.828-1.243l.064-.287.126.143c.692.784 1.235 1.853 1.328 2.613l.025.199-.117-.18c-.2-.31-.4-.522-.658-.693-.464-.307-.955-.411-2.255-.48-1.174-.062-1.839-.162-2.497-.377-1.121-.365-1.686-.852-3.018-2.599-.591-.776-.957-1.205-1.32-1.55-.827-.786-1.639-1.198-2.678-1.36z" fill-rule="nonzero"/><path d="M22.422 7.5c.03-.52.1-.863.242-1.176.056-.124.109-.226.117-.226a.773.773 0 01-.055.204c-.103.304-.12.72-.049 1.203.09.614.142.702.79 1.365.305.311.659.703.787.872l.233.306-.233-.219c-.285-.267-.941-.79-1.086-.864-.097-.05-.112-.049-.172.01-.055.056-.067.138-.074.529-.012.608-.095 1-.296 1.39-.108.21-.125.166-.027-.073.073-.178.08-.256.08-.845 0-1.184-.141-1.468-.966-1.956a9.046 9.046 0 00-.764-.396 2.916 2.916 0 01-.374-.182c.023-.023.827.211 1.15.336.482.185.561.209.62.186.039-.015.058-.129.077-.464zm-9.607 2.025c-.579-.797-.937-2.02-.86-2.934l.024-.283.132.024c.248.045.675.204.875.326.548.333.786.772 1.027 1.898.071.33.164.703.207.83.068.203.328.678.54.987.152.222.05.327-.286.297-.514-.047-1.21-.527-1.659-1.145zm8.905 5.935c-2.707-1.09-3.66-2.036-3.66-3.632 0-.235.008-.427.017-.427.01 0 .115.077.233.172.549.44 1.164.628 2.865.876 1.001.147 1.565.265 2.085.437 1.652.548 2.674 1.66 2.918 3.174.07.44.029 1.265-.086 1.7-.09.344-.367.963-.44.987-.02.006-.04-.071-.046-.178-.028-.568-.315-1.122-.798-1.537-.549-.471-1.286-.847-3.089-1.572zm-1.9.452a4.808 4.808 0 00-.131-.572l-.07-.206.129.144c.177.2.318.454.436.794.091.259.101.336.1.757 0 .414-.011.5-.095.734a2.32 2.32 0 01-.571.908c-.495.504-1.13.782-2.048.898-.16.02-.624.054-1.033.075-1.03.054-1.707.164-2.316.378a.488.488 0 01-.174.042c-.024-.025.39-.272.733-.437.483-.233.963-.36 2.04-.539.532-.089 1.082-.196 1.221-.239 1.318-.404 1.995-1.446 1.778-2.737z" fill-rule="nonzero"/><path d="M21.06 18.116c-.36-.773-.442-1.52-.245-2.216.021-.074.055-.135.075-.135a.73.73 0 01.189.102c.166.112.498.3 1.383.782 1.105.603 1.735 1.07 2.164 1.602.375.467.607.999.719 1.647.063.367.026 1.25-.068 1.62-.297 1.166-.988 2.082-1.972 2.616a2.53 2.53 0 01-.288.143c-.014 0 .038-.133.117-.297.33-.692.369-1.366.118-2.116-.153-.459-.466-1.02-1.097-1.966-.734-1.1-.914-1.394-1.095-1.782zm-10.167 4.171c1.005-.848 2.254-1.45 3.393-1.635.49-.08 1.308-.048 1.762.068.728.186 1.38.604 1.719 1.101.33.486.473.91.62 1.852.06.372.123.745.142.83.11.488.327.879.595 1.075.425.311 1.158.33 1.878.05a.981.981 0 01.236-.074c.026.026-.336.269-.592.397a2.014 2.014 0 01-.983.238c-.66 0-1.208-.335-1.665-1.02-.09-.135-.292-.538-.45-.897-.482-1.1-.72-1.436-1.28-1.803-.489-.32-1.118-.377-1.591-.145-.622.305-.795 1.1-.35 1.603.177.2.507.373.777.406a.83.83 0 00.939-.83c0-.332-.128-.52-.448-.665-.437-.197-.907.033-.905.444.001.175.077.285.253.365.113.05.115.055.023.036-.401-.084-.495-.567-.172-.888.387-.386 1.188-.216 1.463.31.116.221.129.662.028.928-.225.595-.883.907-1.55.737-.454-.116-.639-.241-1.186-.805-.951-.98-1.32-1.17-2.692-1.384l-.263-.041.3-.253z" fill-rule="nonzero"/><path d="M6.196 3.35l.096.117c3.708 4.54 5.624 6.896 5.746 7.064.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28-.129-.123-.65-.901-1.853-2.768a188.53 188.53 0 00-1.712-2.633c-.049-.046-.048-.045 1.618 2.936 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206c-.254-.296-2.355-2.614-6.304-6.956l-.106-.115-.212.165zM7.91 19.732a.566.566 0 00-.174-.746c-.228-.152-.583-.08-.583.118 0 .06.033.104.108.143.127.065.136.139.037.288-.101.152-.093.286.023.377.186.146.45.065.59-.18zm5.524-7.176c-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98-.202-.102-.631-.143-.839-.079zm.87.68c.115-.163.064-.34-.13-.458-.372-.227-.934-.04-.934.312 0 .174.293.365.561.365.18 0 .424-.107.503-.219z"/></g></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16A15.97 15.97 0 016.199 3.353l.093.114.25.306c3.544 4.34 5.376 6.593 5.496 6.758.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28a1.453 1.453 0 01-.134-.167l-.086-.119c-.27-.384-.78-1.16-1.633-2.482a188.53 188.53 0 00-1.712-2.633l-.012-.01c-.002 0-.001.004.004.016l.032.064c.103.198.469.852 1.594 2.866 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206-.02-.024c-.332-.38-2.427-2.691-6.284-6.932l-.102-.111A15.93 15.93 0 0116 0zm.048 20.72c-.454-.116-1.271-.148-1.762-.068-1.139.185-2.388.787-3.393 1.635l-.299.253.263.04c1.371.215 1.74.405 2.692 1.385.547.564.732.69 1.186.805.667.17 1.325-.142 1.55-.737.101-.266.088-.707-.028-.928-.275-.526-1.076-.696-1.463-.31-.323.32-.229.804.172.888.092.019.09.015-.023-.036-.176-.08-.252-.19-.253-.365-.002-.41.468-.641.905-.444.32.144.448.333.448.664a.83.83 0 01-.939.831 1.38 1.38 0 01-.777-.406c-.445-.504-.272-1.298.35-1.603.473-.232 1.102-.175 1.59.145.56.367.799.702 1.282 1.803.157.359.36.762.45.897.456.685 1.004 1.02 1.664 1.02.364 0 .638-.066.983-.238.256-.128.618-.37.592-.397a1.005 1.005 0 00-.236.073c-.72.281-1.453.262-1.878-.05-.268-.195-.484-.586-.595-1.074a23.05 23.05 0 01-.141-.83c-.148-.942-.29-1.366-.621-1.852-.34-.497-.99-.915-1.719-1.101zm4.842-4.955c-.02 0-.054.061-.075.135-.197.697-.115 1.443.245 2.216l.065.135c.166.333.382.676 1.03 1.647.631.947.944 1.507 1.097 1.966.25.75.213 1.424-.118 2.116-.079.164-.131.297-.117.297.014 0 .143-.064.288-.143.984-.534 1.675-1.45 1.972-2.616.094-.37.131-1.253.068-1.62-.112-.648-.344-1.18-.72-1.647-.428-.533-1.058-1-2.163-1.602-.885-.482-1.217-.67-1.383-.782a.73.73 0 00-.189-.102zM7.152 19.103c0-.198.355-.27.583-.118.242.16.319.49.174.746-.138.245-.403.326-.59.18-.115-.091-.123-.225-.022-.377.1-.15.09-.223-.037-.288-.075-.039-.108-.083-.108-.143zm12.468-3.97l.069.207a4.8 4.8 0 01.13.572c.217 1.29-.46 2.333-1.778 2.737-.14.043-.689.15-1.22.239-1.078.18-1.558.306-2.041.539-.343.165-.757.412-.733.437a.488.488 0 00.174-.042c.609-.214 1.287-.324 2.316-.378.409-.021.874-.055 1.033-.075.918-.116 1.553-.394 2.048-.898.275-.28.439-.54.57-.908.085-.234.096-.32.097-.734 0-.421-.01-.498-.1-.757-.12-.34-.26-.595-.437-.794l-.128-.144zm-1.543-3.732c-.01 0-.018.192-.018.427 0 1.596.954 2.542 3.66 3.632 1.803.725 2.54 1.1 3.09 1.572.482.415.77.969.797 1.537.005.107.025.184.045.178.074-.024.35-.643.441-.987.115-.435.156-1.26.086-1.7-.244-1.514-1.266-2.626-2.918-3.174-.52-.172-1.084-.29-2.085-.437-1.701-.248-2.316-.436-2.865-.876a2.057 2.057 0 00-.233-.172zm-3.804 1.235c-.202-.103-.631-.144-.839-.08-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98zm-1.033.454c0-.351.562-.54.933-.312.195.119.246.295.13.458-.078.112-.323.22-.502.22-.268 0-.561-.192-.561-.366zm.142-7.279c-.419-.1-1.027-.153-1.284-.114-.134.02-.122.026.163.07 1.04.162 1.851.574 2.678 1.36.363.345.729.774 1.32 1.55 1.332 1.747 1.897 2.234 3.018 2.6.658.214 1.323.314 2.497.376 1.3.069 1.79.173 2.255.48.257.17.458.382.658.692l.117.18-.025-.198c-.093-.76-.636-1.83-1.328-2.613l-.126-.143-.064.287c-.16.723-.506 1.242-.828 1.243a.416.416 0 01-.372-.236c-.071-.17-.065-.232.04-.43.195-.365.243-.853.147-1.49-.027-.184-.068-.357-.09-.383-.07-.085-.632-.412-.988-.576-1.293-.598-2.84-.792-4.36-.547l-.36.058-.252-.281c-.95-1.057-1.839-1.652-2.816-1.885zm9.399.287c-.008 0-.061.102-.117.226-.142.313-.212.656-.242 1.176-.019.335-.038.45-.077.464-.059.023-.138-.001-.62-.186-.323-.125-1.127-.36-1.15-.336-.006.006.162.088.374.182s.556.272.764.396c.825.488.965.772.966 1.956 0 .59-.007.667-.08.845-.098.239-.08.284.027.073.2-.39.284-.782.296-1.39.007-.39.019-.473.074-.528.06-.06.075-.06.172-.01.145.074.8.596 1.086.863l.233.219-.233-.306c-.128-.169-.482-.56-.787-.872-.648-.663-.7-.751-.79-1.365-.07-.484-.054-.9.05-1.203a.773.773 0 00.054-.204zm-10.802.21l-.024.283c-.077.914.281 2.137.86 2.934.45.618 1.145 1.098 1.66 1.145.336.03.437-.075.285-.297-.212-.309-.472-.784-.54-.988a10.64 10.64 0 01-.207-.83c-.241-1.125-.479-1.564-1.027-1.897a3.31 3.31 0 00-.875-.326l-.132-.024z"/>`
}, Qy = {
  symbol: "usdc",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#3E73C4" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.243-2.193-.728-2.193-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975a.416.416 0 00.427-.425v-.06a3.04 3.04 0 00-2.743-2.489V9.142c0-.243-.183-.425-.487-.486h-.915c-.243 0-.426.182-.487.486v1.396c-1.829.242-2.986 1.456-2.986 2.974 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036a.416.416 0 00-.426.425v.06c.243 1.518 1.219 2.61 3.23 2.914v1.457c0 .242.183.425.487.485h.915c.243 0 .426-.182.487-.485V21.34c1.829-.303 3.047-1.578 3.047-3.217z"/><path d="M12.892 24.497c-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85c0-.242-.121-.424-.365-.485-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85c0-.182-.182-.424-.365-.546zm6.46-18.936c-.244-.122-.488 0-.548.242-.061.061-.061.122-.061.243v.85c0 .243.182.485.365.607 4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85c0 .242.121.424.365.485.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162z"/></g></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm3.352 5.56c-.244-.12-.488 0-.548.243-.061.061-.061.122-.061.243v.85l.01.104a.86.86 0 00.355.503c4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85l.005.088a.45.45 0 00.36.397c.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162zm-6.46-.06c-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85l-.01-.08c-.042-.169-.199-.362-.355-.466-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85l-.005-.088a.45.45 0 00-.36-.397zm3.535 3.156h-.915l-.088.008c-.2.04-.346.212-.4.478v1.396l-.207.032c-1.708.304-2.778 1.483-2.778 2.942 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036l-.079.007a.413.413 0 00-.347.418v.06l.033.18c.29 1.424 1.266 2.443 3.197 2.734v1.457l.008.088c.04.198.213.344.48.397h.914l.088-.008c.2-.04.346-.212.4-.477V21.34l.207-.04c1.713-.362 2.84-1.601 2.84-3.177 0-2.124-1.28-2.852-3.84-3.156-1.829-.243-2.194-.728-2.194-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975l.079-.006a.413.413 0 00.348-.419v-.06l-.037-.173a3.04 3.04 0 00-2.706-2.316V9.142l-.008-.088c-.04-.199-.213-.345-.48-.398z"/>`
}, e3 = {
  symbol: "usdt",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117zm0 3.59v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657z"/>`
}, t3 = {
  symbol: "xmr",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F60"/><path fill="#FFF" fill-rule="nonzero" d="M15.97 5.235c5.985 0 10.825 4.84 10.825 10.824a11.07 11.07 0 01-.558 3.432h-3.226v-9.094l-7.04 7.04-7.04-7.04v9.094H5.704a11.07 11.07 0 01-.557-3.432c0-5.984 4.84-10.824 10.824-10.824zM14.358 19.02L16 20.635l1.613-1.614 3.051-3.08v5.72h4.547a10.806 10.806 0 01-9.24 5.192c-3.902 0-7.334-2.082-9.24-5.192h4.546v-5.72l3.08 3.08z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.03-26.765A10.816 10.816 0 005.148 16.059c0 1.202.205 2.346.557 3.432h3.227v-9.094l7.04 7.04 7.04-7.04v9.094h3.226a11.07 11.07 0 00.558-3.432c0-5.984-4.84-10.824-10.824-10.824zM14.358 19.02l-3.08-3.08v5.72H6.731c1.906 3.11 5.338 5.192 9.24 5.192 3.901 0 7.362-2.082 9.24-5.192h-4.547v-5.72l-3.05 3.08L16 20.635l-1.643-1.614z"/>`
};
Hm.add(Km);
const n3 = /* @__PURE__ */ ve({
  name: "InputGroup",
  components: {
    ExclamationCircleIcon: nm,
    FontAwesomeIcon: xo,
    Listbox: uf,
    ListboxButton: cf,
    ListboxOptions: ff,
    ListboxOption: mf
  },
  inheritAttrs: !1,
  props: {
    type: {
      type: String,
      required: !0
    },
    errorKey: {
      type: String,
      required: !1,
      default: null
    },
    modelValue: {
      type: null,
      required: !1,
      default: null
    },
    label: {
      type: String,
      required: !1,
      default: null
    },
    fieldKey: {
      type: String,
      required: !1,
      default: null
    },
    options: {
      type: Array,
      required: !1,
      default: () => []
    },
    required: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { context: r } = It();
    function i(l) {
      n("update:modelValue", l);
    }
    const o = L(() => {
      var d;
      const l = (d = e.options) == null ? void 0 : d.find((u) => (u.value || u) === e.modelValue);
      return l ? l.label || l : "Select an option";
    }), a = (l) => !!t[l], s = L(() => {
      var l, d, u;
      return (u = (d = (l = r.value.error) == null ? void 0 : l.errors) == null ? void 0 : d[e.errorKey]) == null ? void 0 : u[0];
    });
    return {
      hasSlot: a,
      emitUpdate: i,
      error: s,
      selectedLabel: o
    };
  }
}), r3 = ["for"], i3 = {
  key: 0,
  class: "embed:text-red-500"
}, o3 = {
  key: 0,
  class: "embed:absolute embed:inset-y-0 embed:left-0 embed:pl-3 embed:pt-1 embed:flex embed:items-center embed:pointer-events-none"
}, a3 = ["type", "value"], s3 = ["id", "checked", "type", "value"], l3 = { class: "embed:relative" }, d3 = { class: "embed:block embed:truncate embed:dark:text-white" }, u3 = { class: "embed:pointer-events-none embed:absolute embed:inset-y-0 embed:right-0 embed:flex embed:items-center embed:pr-2" }, c3 = ["value"], f3 = ["textContent"];
function m3(e, t, n, r, i, o) {
  const a = oe("font-awesome-icon"), s = oe("ListboxButton"), l = oe("ListboxOption"), d = oe("ListboxOptions"), u = oe("Listbox"), c = oe("ExclamationCircleIcon");
  return S(), T(U, null, [
    _("div", {
      class: ye({
        "embed:justify-between embed:flex embed:items-center embed:h-5": e.type === "checkbox"
      })
    }, [
      e.label ? (S(), T("label", {
        key: 0,
        for: e.fieldKey,
        class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white"
      }, [
        te(A(e.label) + " ", 1),
        e.required ? (S(), T("span", i3, "*")) : Q("", !0)
      ], 8, r3)) : Q("", !0),
      _("div", {
        class: ye(["embed:relative embed:rounded-md", { "embed:mt-1": e.type !== "checkbox" && !!e.label }])
      }, [
        e.type !== "checkbox" && e.type !== "textarea" ? (S(), T("div", o3, [
          ri(e.$slots, "icon")
        ])) : Q("", !0),
        e.type !== "textarea" && e.type !== "checkbox" && e.type !== "select" ? (S(), T("input", ur({
          key: 1,
          type: e.type,
          class: {
            "embed:w-full embed:rounded-md embed:bg-white embed:text-black embed:dark:text-white embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:focus:ring-2 embed:ring-emerald-200 embed:dark:ring-green-800 embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:transition embed:duration-200 embed:ease-in-out embed:disabled:bg-zinc-100 embed:dark:disabled:bg-zinc-900 embed:disabled:opacity-70 embed:focus:outline-none": e.type !== "checkbox",
            "embed:pl-10": e.hasSlot("icon"),
            "embed:placeholder-red-300 embed:dark:placeholder-red-600 embed:text-red-900 embed:border-red-300 embed:focus:ring-red-500 embed:focus:border-red-500": !!e.error,
            "embed:pr-10": !!e.error && e.type !== "number"
          },
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[0] || (t[0] = (f) => e.emitUpdate(f.target.value))
        }), null, 16, a3)) : e.type === "checkbox" ? (S(), T("input", ur({
          key: 2,
          id: e.fieldKey,
          checked: e.modelValue,
          type: e.type,
          class: "embed:appearance-none embed:rounded embed:focus:ring-2 embed:ring-emerald-200 embed:dark:ring-green-800 embed:focus:ring-offset-0 embed:dark:focus:text-black embed:bg-white embed:text-black embed:dark:text-white embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:transition embed:duration-200 embed:ease-in-out embed:disabled:bg-zinc-100 embed:dark:disabled:bg-zinc-900 embed:disabled:opacity-70 embed:border embed:border-transparent embed:checked:bg-zinc-950",
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[1] || (t[1] = (f) => e.emitUpdate(f.target.checked))
        }), null, 16, s3)) : e.type === "select" ? (S(), ke(u, {
          key: 3,
          "model-value": e.modelValue,
          as: "div",
          class: "embed:relative",
          "onUpdate:modelValue": e.emitUpdate
        }, {
          default: ne(() => [
            _("div", l3, [
              q(s, { class: "embed:relative embed:w-full embed:cursor-default embed:rounded-md embed:bg-white embed:dark:bg-zinc-950 embed:py-2 embed:pl-3 embed:pr-10 embed:text-left embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:transition embed:duration-200 embed:ease-in-out" }, {
                default: ne(() => [
                  _("span", d3, A(e.selectedLabel), 1),
                  _("span", u3, [
                    q(a, {
                      icon: "chevron-down",
                      class: "embed:w-4 embed:h-4 embed:text-zinc-600 embed:dark:text-zinc-300"
                    })
                  ])
                ]),
                _: 1
              }),
              q(cr, {
                "leave-active-class": "embed:transition embed:duration-100 embed:ease-in",
                "leave-from-class": "embed:opacity-100",
                "leave-to-class": "embed:opacity-0"
              }, {
                default: ne(() => [
                  q(d, { class: "embed:fixed embed:z-51 embed:max-w-[31rem] embed:mt-1 embed:max-h-60 embed:w-[calc(100%-2rem)] embed:overflow-auto embed:rounded-md embed:bg-white embed:dark:bg-zinc-900 embed:py-1 embed:text-base embed:shadow-zinc-400 embed:dark:shadow-black embed:border embed:border-zinc-300 embed:dark:border-zinc-950 embed:shadow-lg embed:ring-1 embed:ring-black/5 embed:focus:outline-hidden embed:sm:text-sm" }, {
                    default: ne(() => [
                      (S(!0), T(U, null, wn(e.options, (f) => (S(), ke(l, {
                        key: f.value || f,
                        value: f.value || f,
                        as: "template"
                      }, {
                        default: ne(({ active: m, selected: h }) => [
                          _("li", {
                            class: ye([m ? "embed:bg-zinc-100 embed:text-black embed:dark:bg-zinc-950 embed:dark:text-white" : "embed:text-zinc-800 embed:dark:text-white", "embed:relative embed:cursor-default embed:select-none embed:py-2 embed:pl-3 embed:pr-9"])
                          }, [
                            _("span", {
                              class: ye([h ? "embed:font-semibold" : "embed:font-normal", "embed:block embed:truncate"])
                            }, A(f.label || f), 3)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["model-value", "onUpdate:modelValue"])) : (S(), T("textarea", ur({
          key: 4,
          class: ["embed:w-full embed:bg-white embed:focus:bg-zinc-50 embed:text-black embed:dark:text-zinc-100 embed:border embed:border-transparent embed:rounded-md embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:focus:outline-hidden embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:focus:ring-2 embed:ring-emerald-200 embed:dark:ring-green-800 embed:focus:border-transparent embed:transition embed:duration-200 embed:ease-in-out", {
            "embed:placeholder-red-300 embed:text-red-900 embed:border-red-300 embed:focus:ring-red-500 embed:focus:border-red-500": !!e.error
          }],
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[2] || (t[2] = (f) => e.emitUpdate(f.target.value))
        }), null, 16, c3)),
        e.error && (e.type === "text" || e.type === "email") ? (S(), T("div", {
          key: 5,
          class: ye(["embed:absolute embed:inset-y-0 embed:right-0 embed:pr-3 embed:flex embed:items-center embed:pointer-events-none", { "embed:mr-6": e.type === "number" }])
        }, [
          q(c, {
            class: "embed:h-5 embed:w-5 embed:text-red-500 embed:dark:text-red-900",
            "aria-hidden": "true"
          })
        ], 2)) : Q("", !0)
      ], 2)
    ], 2),
    e.error ? (S(), T("p", {
      key: 0,
      class: "embed:mt-1 embed:text-xs embed:text-red-600 embed:dark:text-red embed:w-full embed:grow",
      textContent: A(e.error)
    }, null, 8, f3)) : Q("", !0)
  ], 64);
}
const yl = /* @__PURE__ */ gt(n3, [["render", m3]]), p3 = /* @__PURE__ */ ve({
  name: "AdditionalInformation",
  components: {
    InputGroup: yl
  },
  setup() {
    const { context: e } = It(), t = Ge("hasAttemptedSubmit", { value: !1 }), n = L(() => e.value.variant.additional_information), r = (i) => {
      if (!i.required || !t.value)
        return "";
      const o = Se.additional_information[i.key];
      if (i.type === "CHECKBOX") {
        if (o !== !0)
          return "This checkbox must be checked";
      } else if (!o)
        return "This field is required";
      return "";
    };
    return e.value.variant.additional_information.length > 0 && (Se.additional_information ?? (Se.additional_information = {}), n.value.forEach((i) => {
      var o, a;
      if ((Se.additional_information[i.key] ?? null) === null) {
        let s;
        i.type === "CHECKBOX" ? s = !1 : i.type === "NUMBER" ? s = 0 : s = "", (o = Se.additional_information)[a = i.key] ?? (o[a] = s);
      }
    })), {
      checkout_information: Se,
      context: e,
      required_fields: n,
      getErrorMessage: r
    };
  }
});
function h3(e, t, n, r, i, o) {
  const a = oe("InputGroup");
  return S(!0), T(U, null, wn(e.required_fields, (s) => (S(), T(U, { key: s }, [
    s.type === "TEXTAREA" ? (S(), ke(a, {
      key: 0,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      class: "embed:dark:bg-zinc-950",
      "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "error-message"])) : s.type === "NUMBER" ? (S(), ke(a, {
      key: 1,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      min: "1",
      class: "embed:w-full embed:dark:bg-zinc-950",
      "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "error-message"])) : s.type === "TEXT" ? (S(), ke(a, {
      key: 2,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      class: "embed:dark:bg-zinc-950",
      "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "error-message"])) : s.type === "SELECT" ? (S(), ke(a, {
      key: 3,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      options: s.options,
      class: "embed:dark:bg-zinc-950",
      "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "options", "error-message"])) : (S(), ke(a, {
      key: 4,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      "field-key": `additional_information.${s.key}`,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      class: "embed:dark:bg-zinc-950",
      "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "field-key", "type", "error-key", "placeholder", "required", "label", "error-message"]))
  ], 64))), 128);
}
const b3 = /* @__PURE__ */ gt(p3, [["render", h3]]), g3 = /* @__PURE__ */ ve({
  name: "EmbedDrawer",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      required: !1
    }
  },
  emits: ["update:modelValue"]
}), v3 = {
  key: 0,
  class: "embed:absolute embed:bottom-0 embed:inset-x-0 embed:bg-zinc-50 embed:dark:bg-zinc-950 embed:rounded-t-2xl embed:z-20 embed:min-h-[20vh] embed:max-h-[50vh] embed:shadow-xl"
}, y3 = { class: "embed:flex embed:flex-col embed:justify-between embed:items-center embed:mb-4 embed:p-4" }, w3 = { class: "embed:text-lg embed:font-semibold embed:dark:text-white embed:text-center embed:w-full" }, x3 = { class: "embed:text-xs embed:text-zinc-400 embed:dark:text-zinc-800 embed:text-center embed:w-full" }, k3 = { class: "embed:relative embed:pb-4" }, _3 = { class: "embed:px-4 embed:text-sm embed:text-zinc-800 embed:dark:text-zinc-200 embed:overflow-x-auto embed:overscroll-contain embed:min-h-[8rem] embed:max-h-[calc(50vh-8rem)] embed:break-words embed:whitespace-pre-wrap embed:prose embed:dark:prose-invert embed:prose-sm embed:max-w-none embed:[&>p]:mb-4 embed:[scrollbar-width:thin] embed:[&::-webkit-scrollbar]:w-2 embed:[&::-webkit-scrollbar-track]:bg-transparent embed:[&::-webkit-scrollbar-thumb]:bg-zinc-300 embed:dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700 embed:[&::-webkit-scrollbar-thumb]:rounded-full embed:[&_code]:whitespace-pre-wrap embed:[&_code]:break-words" };
function S3(e, t, n, r, i, o) {
  return S(), ke(cr, {
    "enter-active-class": "embed:transition-all embed:duration-300 embed:ease-in-out",
    "enter-from-class": "embed:translate-y-full",
    "enter-to-class": "embed:translate-y-0",
    "leave-active-class": "embed:transition-all embed:duration-300 embed:ease-in-out",
    "leave-from-class": "embed:translate-y-0",
    "leave-to-class": "embed:translate-y-full"
  }, {
    default: ne(() => [
      e.modelValue ? (S(), T("div", v3, [
        _("div", y3, [
          _("h3", w3, A(e.title), 1),
          _("h3", x3, A(e.description), 1),
          _("button", {
            class: "embed:absolute embed:right-2 embed:text-zinc-500 embed:hover:text-zinc-700 embed:dark:hover:text-zinc-300",
            onClick: t[0] || (t[0] = (a) => e.$emit("update:modelValue", !1))
          }, t[1] || (t[1] = [
            _("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "embed:h-6 embed:w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              _("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ]))
        ]),
        _("div", k3, [
          _("div", _3, [
            ri(e.$slots, "default")
          ])
        ])
      ])) : Q("", !0)
    ]),
    _: 3
  });
}
const E3 = /* @__PURE__ */ gt(g3, [["render", S3]]);
vl.add([Wy, Yy, t3, Ky, qy, Zy, Xy, e3, Qy, Jy, Gy]);
Hm.add(My, Ny, Py, Dy, Fy, jy, Km, Ly, Ay, $y, zy, Iy, Ry, Vy);
const C3 = /* @__PURE__ */ ve({
  props: {
    config: {
      type: [Object, String],
      required: !0
    },
    extraClasses: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return () => {
      try {
        if (typeof e.config == "string")
          return e.config.includes("fa-") ? je(xo, {
            icon: e.config,
            class: e.extraClasses.join(" ")
            // Convert array to string
          }) : je(vl, {
            symbol: e.config,
            class: e.extraClasses.join(" ")
            // Convert array to string
          });
        if (e.config.type === "fa")
          return je(xo, {
            icon: e.config.value,
            class: [...e.config.classes || [], ...e.extraClasses].join(" ")
            // Convert array to string
          });
        if (e.config.type === "svg")
          return je("div", {
            innerHTML: e.config.value,
            class: [...e.config.classes || [], ...e.extraClasses].join(" ")
            // Convert array to string
          });
      } catch (t) {
        return console.error("Error rendering icon:", t), null;
      }
    };
  }
}), T3 = /* @__PURE__ */ ve({
  name: "ProductOverview",
  components: {
    MyButton: Zo,
    DialogTitle: xr,
    NumberInput: pg,
    CryptoIcon: vl,
    RadioGroup: yf,
    RadioGroupLabel: xf,
    RadioGroupOption: wf,
    FontAwesomeIcon: xo,
    RenderIcon: C3,
    NumberFlow: um,
    InputGroup: yl,
    AdditionalInformation: b3,
    EnvelopeIcon: v2,
    Drawer: E3
  },
  setup() {
    const { context: e, state: t, send: n } = It(), r = Z(null), i = Z(null), o = Z(!1), a = Z(!1), s = {
      PAYPAL: {
        description: "Checkout with your PayPal account",
        name: "PayPal",
        icon: {
          type: "fa",
          value: "fa-brands fa-paypal",
          classes: ["embed:text-[#003087] embed:h-8 embed:w-6"]
        }
      },
      PAYSTACK: {
        description: "Pay with credit and debit card",
        name: "PayStack",
        icon: {
          type: "fa",
          value: "fa-solid fa-money-bill-wave",
          classes: ["embed:text-[#00457C]"]
        }
      },
      STRIPE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Stripe",
        icon: {
          type: "fa",
          value: "fa-brands fa-cc-stripe",
          classes: ["embed:text-[#5433FF] embed:h-8 embed:w-6"]
        }
      },
      CASHAPP: {
        description: "Checkout with your Cash App account",
        name: "Cash App",
        icon: {
          type: "svg",
          value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill-rule="nonzero" fill="#FFF"><path d="M41.7 0c6.4 0 9.6 0 13.1 1.1a13.6 13.6 0 0 1 8.1 8.1C64 12.7 64 15.9 64 22.31v19.37c0 6.42 0 9.64-1.1 13.1a13.6 13.6 0 0 1-8.1 8.1C51.3 64 48.1 64 41.7 64H22.3c-6.42 0-9.64 0-13.1-1.1a13.6 13.6 0 0 1-8.1-8.1C0 51.3 0 48.1 0 41.69V22.3c0-6.42 0-9.64 1.1-13.1a13.6 13.6 0 0 1 8.1-8.1C12.7 0 15.9 0 22.3 0h19.4z" fill="#00D632"/><path d="M42.47 23.8c.5.5 1.33.5 1.8-.0l2.5-2.6c.53-.5.5-1.4-.06-1.94a19.73 19.73 0 0 0-6.72-3.84l.79-3.8c.17-.83-.45-1.61-1.28-1.61h-4.84a1.32 1.32 0 0 0-1.28 1.06l-.7 3.38c-6.44.33-11.9 3.6-11.9 10.3 0 5.8 4.51 8.29 9.28 10 4.51 1.72 6.9 2.36 6.9 4.78 0 2.49-2.38 3.95-5.9 3.95-3.2 0-6.56-1.07-9.16-3.68a1.3 1.3 0 0 0-1.84-.0l-2.7 2.7a1.36 1.36 0 0 0 .0 1.92c2.1 2.07 4.76 3.57 7.792 4.4l-.74 3.57c-.17.83.44 1.6 1.27 1.61l4.85.04a1.32 1.32 0 0 0 1.3-1.06l.7-3.39C40.28 49.07 45 44.8 45 38.57c0-5.74-4.7-8.16-10.4-10.13-3.26-1.21-6.08-2.04-6.08-4.53 0-2.42 2.63-3.38 5.27-3.38 3.36 0 6.59 1.39 8.7 3.29z" fill="#FFF"/></g></svg>',
          classes: ["embed:fill-current embed:h-8 embed:w-6"]
        }
      },
      SQUARE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Square",
        icon: {
          type: "svg",
          value: '<svg enable-background="new 0 0 40 40" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Square_Payment_1_"><path d="M33,10c0-1.7-1.3-3-3-3H11c-1.7,0-3,1.3-3,3v19c0,1.7,1.3,3,3,3h19c1.7,0,3-1.3,3-3V10z" fill="currentColor"/><path d="M29,13c0-1.1-0.9-2-2-2H14c-1.1,0-2,0.9-2,2v13c0,1.1,0.9,2,2,2h13c1.1,0,2-0.9,2-2V13z" fill="#ECF0F1"/><path d="M25,16c0-0.6-0.4-1-1-1h-7c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V16z" fill="currentColor"/></g></svg>',
          classes: ["embed:text-[#2C3E50] embed:h-8 embed:w-6"]
        }
      },
      VENMO: {
        description: "Pay directly with your Venmo account",
        name: "Venmo",
        icon: {
          type: "svg",
          value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611.9 117.8"><path d="M100.8 1.5c4.2 7 5.7 14 5.7 22.4 0 28-23.8 65.9-43.4 91.1H18.2L0 7.2l40.6-2.8 9.8 77.1c8.4-14 19.7-37.9 19.7-53.2 0-8.4-1.4-14-4.2-19.7zm51.8 47.7c7 0 25.2-2.8 25.2-14 0-5.7-2.8-7-7-7-8.3 0-18.2 8.4-18.2 21zm-1.3 21c0 12.7 7 18.2 16.8 18.2s19.7-2.8 32.2-8.4l-5.7 30.8c-8.4 4.2-22.4 7-36.4 7-33.5 0-46.2-21-46.2-46.2 0-33.5 19.7-68.6 60.2-68.6 22.4 0 35 12.7 35 30.8 1.5 26.6-35 36.4-55.9 36.4zM322.1 26.7c0 4.2 0 9.8-1.4 14l-11.2 74.2h-37.8l11.2-68.6c0-1.4 1.4-5.7 1.4-7 0-5.7-2.8-5.7-7-5.7-5.7 0-9.8 2.8-12.7 4.2l-14 77.1h-37.9l16.8-112.1h33.5v8.4c8.4-5.7 18.2-11.2 32.2-11.2 19.9 3 26.9 12.7 26.9 26.7zm113.4-12.5c11.2-8.4 21-12.7 35-12.7 19.7 0 26.7 9.8 26.7 25.2 0 4.2 0 9.8-1.4 14L484.7 115h-37.9l11.2-70v-5.7c0-5.7-2.8-7-7-7s-9.8 1.4-12.7 4.2L425.7 114.9h-37.9l11.2-70v-5.7c0-5.7-2.8-7-7-7-5.7 0-9.8 2.8-12.7 4.2L366.7 114.7h-37.9l16.9-112h32.2l1.4 9.8c7-5.7 18.2-11.2 32.2-11.2 11.4 1.7 19.7 5.9 24 12.9zM572.7 47.8c0-9.8-2.8-15.4-9.8-15.4-15.4 0-18.2 26.7-18.2 40.6 0 9.8 2.8 16.8 9.8 16.8 15.5-1.4 18.2-29.4 18.2-42zm-65.8 22.4c0-35 18.2-68.6 61.6-68.6 32.2 0 43.4 19.7 43.4 44.9 0 35-18.2 70-61.6 70-32.2 1.3-43.4-19.7-43.4-46.3z" fill="currentColor"/></svg>',
          classes: ["embed:text-[#3d95ce] embed:h-8 embed:w-12"]
        }
      },
      PADDLE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Paddle",
        icon: {
          type: "svg",
          value: '<svg viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9213 7.48787C52.468 7.48787 54.724 8.7676 56.1418 10.7844V0H59.0423V24.0002H56.1418V21.2156C54.724 23.2363 52.468 24.5121 49.9213 24.5121C45.1514 24.5121 41.123 20.7682 41.123 16.0005C41.123 11.2328 45.1514 7.48787 49.9213 7.48787ZM49.9213 21.9517C53.692 21.9517 56.1418 19.424 56.1418 16.0005C56.1418 12.577 53.692 10.0483 49.9213 10.0483C46.5702 10.0483 44.0234 12.448 44.0234 16.0005C44.0234 19.5529 46.5702 21.9517 49.9213 21.9517ZM36.2891 10.7843C34.8713 8.76752 32.6153 7.48779 30.0695 7.48779C25.2987 7.48779 21.2703 11.2327 21.2703 16.0004C21.2703 20.7681 25.2987 24.5121 30.0695 24.5121C32.5833 24.5121 34.8355 23.2362 36.2891 21.2156V24.0002H39.1896V7.99969H36.2891V10.7843ZM36.2891 16.0004C36.2891 19.3922 33.8073 21.9516 30.0695 21.9516C26.7175 21.9516 24.1707 19.5529 24.1707 16.0004C24.1707 12.448 26.7175 10.0482 30.0695 10.0482C33.8402 10.0482 36.2891 12.5759 36.2891 16.0004ZM0 15.5818V16.4478C0.529481 16.4479 1.05375 16.5517 1.54282 16.7531C2.0319 16.9545 2.47621 17.2497 2.85034 17.6217C3.22446 17.9937 3.52108 18.4353 3.72324 18.9212C3.92539 19.4071 4.02911 19.9277 4.02848 20.4535H4.83475C4.83501 19.3927 5.25952 18.3755 6.01495 17.6254C6.77038 16.8753 7.79489 16.4538 8.86323 16.4536V15.5876C8.33375 15.5875 7.80948 15.4837 7.3204 15.2823C6.83133 15.0809 6.38702 14.7858 6.01289 14.4137C5.63876 14.0417 5.34214 13.6002 5.13999 13.1143C4.93784 12.6284 4.83412 12.1077 4.83475 11.582H4.02848C4.02822 12.6427 3.60371 13.6599 2.84828 14.41C2.09285 15.1601 1.06834 15.5816 0 15.5818ZM10.9574 10.08H4.02848V7.51953H10.9574C15.8241 7.51953 19.6598 11.3289 19.6598 16.0004C19.6598 20.6719 15.8241 24.4803 10.9574 24.4803H6.92894V31.9999H4.02848V21.9199H10.9574C14.3424 21.9199 16.7593 19.5211 16.7593 16.0004C16.7593 12.4797 14.3415 10.08 10.9574 10.08ZM76.3185 10.7844C74.8998 8.7676 72.6437 7.48787 70.098 7.48787C65.3281 7.48787 61.2997 11.2328 61.2997 16.0005C61.2997 20.7682 65.3281 24.5121 70.098 24.5121C72.6437 24.5121 74.8998 23.2363 76.3185 21.2156V24.0002H79.219V0H76.3185V10.7844ZM76.3185 16.0005C76.3185 19.424 73.8687 21.9517 70.098 21.9517C66.7459 21.9517 64.2001 19.5529 64.2001 16.0005C64.2001 12.448 66.7459 10.0483 70.098 10.0483C73.8687 10.0483 76.3185 12.577 76.3185 16.0005ZM82.116 24.0002V0H85.0175V24.0002H82.116ZM104.001 17.1214C104.001 11.8408 101.326 7.52051 95.7513 7.52051C90.8846 7.52051 87.1139 11.3943 87.1139 16.0014C87.1139 20.6084 90.8846 24.4813 95.7513 24.4813C99.6189 24.4813 102.486 22.0488 103.582 19.5846H100.456C99.2962 21.3445 97.7496 22.2413 95.7513 22.2413C92.8508 22.2413 90.5299 20.2245 90.0793 17.1214H104.001ZM95.7513 9.76052C98.8446 9.76052 101.101 12.2565 101.101 14.8814H90.0793C90.5299 11.7811 92.8508 9.76052 95.7513 9.76052Z" fill="currentColor"/></svg>',
          classes: ["embed:fill-current embed:w-8 embed:h-8 embed:items-center"]
        }
      },
      AUTHNET: {
        description: "Pay with credit or debit card",
        name: "Credit Card",
        icon: {
          type: "svg",
          value: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="embed:fill-[#ffc300] embed:text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>',
          classes: ["embed:fill-current embed:w-8 embed:h-8 embed:items-center"]
        }
      },
      BTC: {
        description: "Pay with Bitcoin",
        name: "Bitcoin",
        icon: "Btc"
      },
      LTC: {
        description: "Pay with Litecoin",
        name: "Litecoin",
        icon: "Ltc"
      },
      ETH: {
        description: "Pay with Ethereum",
        name: "Ethereum",
        icon: "Eth"
      },
      XMR: {
        description: "Pay with Monero",
        name: "Monero",
        icon: "Xmr"
      },
      BNB: {
        description: "Pay with BNB",
        name: "BNB",
        icon: "Bnb"
      },
      TRX: {
        description: "Pay with Tron",
        name: "Tron",
        icon: "Trx"
      },
      MATIC: {
        description: "Pay with Polygon",
        name: "Polygon",
        icon: "Matic"
      },
      ETH_USDT: {
        description: "Pay with USDT ERC20",
        name: "USDT ERC20",
        icon: "Usdt"
      },
      ETH_USDC: {
        description: "Pay with USDC ERC20",
        name: "USDC ERC20",
        icon: "Usdc"
      },
      ETH_UNI: {
        description: "Pay with UNI ERC20",
        name: "Uniswap ERC20",
        icon: "Uni"
      },
      ETH_SHIB: {
        description: "Pay with SHIB ERC20",
        name: "Shiba Inu ERC20",
        icon: "Eth"
      },
      ETH_DAI: {
        description: "Pay with DAI ERC20",
        name: "Dai ERC20",
        icon: "Dai"
      },
      BNB_USDT: {
        description: "Pay with USDT BEP20",
        name: "USDT BEP20",
        icon: "Usdt"
      },
      BNB_USDC: {
        description: "Pay with USDC BEP20",
        name: "USDC BEP20",
        icon: "Usdc"
      },
      TRX_USDT: {
        description: "Pay with USDT TRC20",
        name: "USDT TRC20",
        icon: "Usdt"
      },
      TRX_USDC: {
        description: "Pay with USDC TRC20",
        name: "USDC TRC20",
        icon: "Usdc"
      }
    }, l = e.value.variant.additional_information.map((J) => J.key);
    Se.additional_information = l.filter((J) => J in Se.additional_information).reduce((J, be) => (J[be] = Se.additional_information[be], J), {}), Vn(Se.country) && (Se.country = e.value.variant.current_country), Vn(e.value.email) || (Se.customer_email = e.value.email), Vn(e.value.payment_method) || (Se.payment_method = e.value.payment_method);
    const d = () => {
      a.value = !0, He.value && n({
        type: e.value.variant.discord_request ? "CONNECT_DISCORD" : "FINAL_STEP"
      });
    }, u = (J) => {
      var be, E;
      return J = J.toLowerCase(), ((E = (be = e.value.variant) == null ? void 0 : be.payment_discounts) == null ? void 0 : E[J]) || null;
    }, c = (J) => {
      const be = u(J);
      return be ? be.percentage > 0 || be.fixed > 0 : !1;
    }, f = {
      type: e.value.variant.discord_request ? "CONNECT_DISCORD" : "FINAL_STEP"
    }, m = L(() => !Vn(e.value.variant.crypto_options)), h = yr({
      coupon: e.value.coupon ?? "",
      quantity: e.value.quantity ?? 0,
      extra: e.value.extra ?? "0.00"
    }), p = Z(e.value.extra !== void 0 && e.value.extra !== "0.00"), g = Z(e.value.coupon == "");
    function v(J, be) {
      n([
        {
          type: "UPDATE_CONTEXT",
          [J]: be ?? h[J]
        },
        "FETCH"
      ]);
    }
    const y = Z(!1);
    let w = null;
    const k = (J, be) => {
      y.value = !0, w && clearTimeout(w), w = setTimeout(() => {
        n([
          {
            type: "UPDATE_CONTEXT",
            [J]: be ?? h[J]
          },
          "FETCH"
        ]), y.value = !1, w = null;
      }, 500);
    };
    st(
      () => h.quantity,
      (J) => {
        w && clearTimeout(w), w = setTimeout(() => {
          v("quantity", J);
        }, 500);
      }
    );
    const O = L(() => e.value.product), D = L(() => e.value.variant), N = L(() => {
      const J = D.value.price, be = J.match(/([A-Z]{3})\u00a0(.*)/);
      if (be)
        return parseFloat(be[2].replace(/,/g, ""));
      const E = J.match(/[A-Z]{2}\u00a5(.*)/);
      return parseFloat(E ? E[1].replace(/,/g, "") : J.replace(/[^\d.]/g, ""));
    }), W = L(() => {
      const J = D.value.total, be = J.match(/([A-Z]{3})\u00a0(.*)/);
      if (be)
        return parseFloat(be[2].replace(/,/g, ""));
      const E = J.match(/[A-Z]{2}\u00a5(.*)/);
      return parseFloat(E ? E[1].replace(/,/g, "") : J.replace(/[^\d.]/g, ""));
    }), M = L(() => {
      const J = D.value.total, be = J.match(/([A-Z]{3})\u00a0/);
      if (be)
        return be[1];
      const E = J.match(/([A-Z]{2})\u00a5/);
      if (E && E[1] === "CN")
        return "CNY";
      const _e = J.replace(/[\d,.\s]/g, "");
      switch (_e) {
        case "¥":
          return "JPY";
        case "€":
          return "EUR";
        case "£":
          return "GBP";
        case "₹":
          return "INR";
        case "₪":
          return "ILS";
        case "₽":
          return "RUB";
        case "₱":
          return "PHP";
        case "฿":
          return "THB";
      }
      return {
        $: "USD",
        A$: "AUD",
        CA$: "CAD",
        HK$: "HKD",
        MX$: "MXN",
        NT$: "TWD",
        NZ$: "NZD",
        S$: "SGD",
        "¥": "JPY",
        円: "JPY",
        元: "CNY",
        "€": "EUR",
        "£": "GBP",
        DKK: "DKK",
        NOK: "NOK",
        SEK: "SEK",
        "₹": "INR",
        "₪": "ILS",
        "₽": "RUB",
        "₱": "PHP",
        "฿": "THB",
        "₫": "VND",
        R$: "BRL",
        Kč: "CZK",
        "₵": "GHS",
        Ft: "HUF",
        RM: "MYR",
        "₦": "NGN",
        zł: "PLN",
        Fr: "CHF",
        R: "ZAR"
      }[_e] || "USD";
    }), Y = L(() => D.value.stock === !1), B = L(() => t.value.hasTag("fetching")), P = Z("fiat"), ee = ["BTC", "ETH", "LTC", "XMR", "BNB", "TRX", "MATIC", "ETH_USDT", "ETH_USDC", "ETH_UNI", "ETH_SHIB", "ETH_DAI", "BNB_USDT", "BNB_USDC", "TRX_USDT", "TRX_USDC"], he = ["PAYPAL", "STRIPE", "CASHAPP", "VENMO", "SQUARE", "PADDLE", "PAYSTACK", "AUTHNET"], Te = (J) => ee.filter((be) => J.includes(be)), ge = (J) => he.filter((be) => J.includes(be)), G = (J) => Te(J).slice(0, 2), ue = (J) => ge(J).slice(0, 2), Ie = (J) => ie(J)[0], Xe = (J) => me(J)[0], ie = (J) => Te(J).slice(2), me = (J) => ge(J).slice(2), He = L(() => {
      const J = Se.customer_email && Se.payment_method && Se.customer_email.includes("@"), be = e.value.variant.additional_information.filter((E) => E.required).every((E) => {
        const _e = Se.additional_information[E.key];
        return E.type === "CHECKBOX" ? _e === !0 : _e != null && _e !== "";
      });
      return J && be;
    }), Oe = L(() => G(e.value.variant.crypto_options)), nt = L(() => ue(e.value.variant.payment_processors));
    return bt("hasAttemptedSubmit", a), {
      product: O,
      variant: D,
      send: n,
      data: h,
      context: e,
      orMore: p,
      applyCoupon: g,
      apply: v,
      debouncedApply: k,
      isApplying: y,
      isSoldOut: Y,
      isLoading: B,
      checkout_information: Se,
      paymentMethods: s,
      getDiscount: u,
      isPositiveDiscount: c,
      next: f,
      showCrypto: m,
      paymentType: P,
      selectedDropdownMethod: r,
      selectedFiatMethod: i,
      defaultCryptoOptions: Oe,
      getFirstTwoOptions: G,
      getThirdOption: Ie,
      getRemainingOptions: ie,
      defaultFiatOptions: nt,
      getFirstTwoFiatOptions: ue,
      getThirdFiatOption: Xe,
      getRemainingFiatOptions: me,
      formattedPrice: N,
      formattedTotal: W,
      currencyCode: M,
      isDescriptionOpen: o,
      isValidInput: He,
      hasAttemptedSubmit: a,
      handleClick: d
    };
  }
}), O3 = { class: "embed:relative" }, A3 = { class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6 embed:space-y-3" }, D3 = { class: "embed:space-y-3" }, P3 = { class: "embed:flex embed:items-stretch embed:min-h-24" }, M3 = {
  key: 0,
  class: "embed:h-24 embed:w-28 embed:min-h-[6rem] embed:shrink-0 embed:rounded-lg embed:overflow-hidden embed:bg-inherit embed:mr-4"
}, $3 = ["src", "alt"], L3 = { class: "embed:flex embed:flex-col embed:text-left embed:w-full embed:justify-between" }, F3 = { class: "embed:space-y-px" }, N3 = ["innerHTML"], I3 = { class: "embed:flex embed:flex-row embed:gap-2 embed:items-center" }, z3 = {
  key: 0,
  class: "embed:text-md embed:font-normal embed:text-black embed:dark:text-white embed:line-through"
}, R3 = { class: "embed:text-md embed:text-black embed:dark:text-white embed:font-bold" }, j3 = {
  key: 0,
  class: "embed:flex embed:flex-row embed:items-center embed:justify-between embed:mt-2"
}, V3 = { class: "embed:flex embed:space-x-2" }, U3 = ["textContent"], B3 = { class: "embed:inline-block embed:text-left embed:text-xs embed:text-black embed:dark:text-white embed:space-x-1" }, H3 = {
  key: 0,
  class: "embed:text-lg"
}, q3 = { key: 1 }, W3 = ["textContent"], G3 = { class: "embed:text-left" }, K3 = {
  key: 0,
  class: "embed:flex embed:flex-row embed:gap-2 embed:bg-zinc-50 embed:dark:bg-zinc-950 embed:p-1 embed:rounded-md"
}, Y3 = { class: "embed:flex embed:flex-row embed:justify-center embed:gap-4" }, X3 = { class: "embed:flex embed:items-center" }, Z3 = { class: "embed:text-sm embed:w-full" }, J3 = { class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full" }, Q3 = {
  key: 0,
  class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}, e4 = { class: "embed:flex embed:items-center" }, t4 = { class: "embed:text-sm embed:w-full" }, n4 = { class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full" }, r4 = {
  key: 0,
  class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}, i4 = { class: "embed:flex embed:flex-col embed:items-center embed:justify-center embed:h-full embed:w-8" }, o4 = { class: "embed:flex embed:flex-col" }, a4 = { class: "embed:flex embed:items-center" }, s4 = { class: "embed:block embed:truncate embed:text-sm" }, l4 = {
  key: 0,
  class: "embed:text-xs embed:text-zinc-500 embed:dark:text-zinc-400 embed:text-left"
}, d4 = { class: "embed:flex embed:items-center" }, u4 = { class: "embed:text-sm embed:w-full" }, c4 = { class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full" }, f4 = {
  key: 0,
  class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}, m4 = { class: "embed:flex embed:items-center" }, p4 = { class: "embed:text-sm embed:w-full" }, h4 = { class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full" }, b4 = {
  key: 0,
  class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}, g4 = { class: "embed:flex embed:flex-col embed:items-center embed:justify-center embed:h-full embed:w-8" }, v4 = { class: "embed:flex embed:items-center" }, y4 = { class: "embed:block embed:truncate embed:text-sm" }, w4 = {
  key: 0,
  class: "embed:text-xs embed:text-zinc-500 embed:dark:text-zinc-400 embed:text-left"
}, x4 = {
  key: 0,
  class: "embed:text-left embed:space-y-2"
}, k4 = {
  key: 1,
  class: "embed:pt-3 embed:text-left embed:flex embed:flex-col embed:gap-3"
}, _4 = { key: 0 }, S4 = { class: "embed:flex embed:flex-row embed:items-center embed:justify-center embed:gap-2" }, E4 = { class: "embed:flex embed:flex-col embed:gap-1 embed:rounded-md embed:shadow-sm embed:shrink-0 embed:pt-4" }, C4 = { class: "embed:relative" }, T4 = { class: "embed:flex embed:rounded-md" }, O4 = { class: "embed:relative embed:flex embed:items-stretch embed:grow embed:focus-within:z-10" }, A4 = ["textContent"], D4 = {
  key: 3,
  class: "embed:mt-3 embed:w-full embed:mx-auto embed:text-center embed:p-2 embed:bg-emerald-600 embed:dark:bg-emerald-900 embed:text-white embed:text-xs embed:rounded-full"
}, P4 = {
  key: 2,
  class: "embed:flex embed:flex-col embed:gap-1"
}, M4 = { class: "embed:flex embed:flex-col embed:space-y-2" }, $4 = {
  key: 0,
  class: "embed:p-2 embed:bg-zinc-50 embed:text-xs embed:dark:bg-zinc-950 embed:rounded-lg embed:text-red-600 embed:dark:text-red-400 embed:text-center"
}, L4 = { key: 0 }, F4 = { key: 1 }, N4 = { key: 2 }, I4 = ["innerHTML"], z4 = { class: "embed:flex embed:flex-col embed:gap-1 embed:rounded-md embed:pt-4" }, R4 = { class: "embed:relative embed:mx-auto embed:items-center embed:w-1/2" }, j4 = { class: "embed:flex embed:rounded-md embed:w-full" }, V4 = { class: "embed:relative embed:flex embed:items-stretch embed:grow embed:focus-within:z-10" }, U4 = ["textContent"], B4 = { class: "embed:dark:bg-zinc-950 embed:bg-zinc-50 embed:rounded-t-2xl embed:py-4 embed:flex embed:flex-row embed:justify-center embed:items-center embed:gap-2" }, H4 = { key: 1 };
function q4(e, t, n, r, i, o) {
  var W, M, Y, B, P, ee, he, Te, ge;
  const a = oe("DialogTitle"), s = oe("NumberFlow"), l = oe("NumberInput"), d = oe("EnvelopeIcon"), u = oe("InputGroup"), c = oe("CryptoIcon"), f = oe("RadioGroupLabel"), m = oe("RadioGroupOption"), h = oe("font-awesome-icon"), p = oe("ListboxButton"), g = oe("RenderIcon"), v = oe("ListboxOption"), y = oe("ListboxOptions"), w = oe("Listbox"), k = oe("RadioGroup"), O = oe("AdditionalInformation"), D = oe("MyButton"), N = oe("Drawer");
  return S(), T("div", O3, [
    _("div", A3, [
      q(k, {
        modelValue: e.checkout_information.payment_method,
        "onUpdate:modelValue": t[8] || (t[8] = (G) => e.checkout_information.payment_method = G)
      }, {
        default: ne(() => {
          var G, ue, Ie, Xe, ie, me, He, Oe, nt, J, be;
          return [
            _("div", D3, [
              _("div", P3, [
                ((G = e.variant.images) == null ? void 0 : G.length) > 0 ? (S(), T("div", M3, [
                  _("img", {
                    class: "embed:object-contain embed:h-full embed:w-full",
                    src: e.variant.images[0],
                    alt: e.variant.title
                  }, null, 8, $3)
                ])) : Q("", !0),
                _("div", L3, [
                  _("div", F3, [
                    q(a, {
                      as: "h1",
                      class: "embed:font-bold embed:text-black embed:dark:text-white embed:text-xl"
                    }, {
                      default: ne(() => [
                        te(A(e.product.title), 1)
                      ]),
                      _: 1
                    }),
                    e.variant.description !== "Default Variant" && e.variant.description !== "default variant" ? (S(), T("p", {
                      key: 0,
                      class: "embed:dark:text-zinc-400 embed:text-xs",
                      innerHTML: e.variant.description
                    }, null, 8, N3)) : Q("", !0),
                    _("div", I3, [
                      e.variant.price !== e.variant.total ? (S(), T("div", z3, [
                        q(s, {
                          value: e.formattedPrice,
                          format: {
                            style: "currency",
                            currency: e.currencyCode,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          },
                          class: "embed:pointer-events-none embed:line-through",
                          animated: !0
                        }, null, 8, ["value", "format"])
                      ])) : Q("", !0),
                      _("div", R3, [
                        q(s, {
                          value: e.formattedTotal,
                          format: {
                            style: "currency",
                            currency: e.currencyCode,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          },
                          class: "embed:pointer-events-none",
                          animated: !0
                        }, null, 8, ["value", "format"])
                      ])
                    ])
                  ]),
                  e.variant.visibility == "PUBLIC" || e.variant.visibility == "HIDDEN" ? (S(), T("div", j3, [
                    _("div", V3, [
                      q(l, {
                        modelValue: e.data.quantity,
                        "onUpdate:modelValue": t[0] || (t[0] = (E) => e.data.quantity = E),
                        min: e.variant.minimum_purchase_quantity,
                        max: e.variant.maximum_purchase_quantity
                      }, null, 8, ["modelValue", "min", "max"]),
                      (Xe = (Ie = (ue = e.context.error) == null ? void 0 : ue.errors) == null ? void 0 : Ie.quantity) != null && Xe[0] ? (S(), T("p", {
                        key: 0,
                        class: "embed:text-sm embed:text-red-600 embed:dark:text-red embed:w-full",
                        textContent: A((me = (ie = e.context.error) == null ? void 0 : ie.errors) == null ? void 0 : me.quantity[0])
                      }, null, 8, U3)) : Q("", !0)
                    ]),
                    _("p", B3, [
                      e.variant.stock ? (S(), T("span", q3, A(e.variant.stock), 1)) : (S(), T("span", H3, "0")),
                      t[22] || (t[22] = _("span", null, "available ", -1))
                    ]),
                    (nt = (Oe = (He = e.context.error) == null ? void 0 : He.errors) == null ? void 0 : Oe.quantity) != null && nt[0] ? (S(), T("p", {
                      key: 0,
                      class: "embed:ml-1.5 embed:text-left embed:text-sm embed:text-red-600 embed:dark:text-red embed:w-full",
                      textContent: A((be = (J = e.context.error) == null ? void 0 : J.errors) == null ? void 0 : be.quantity[0])
                    }, null, 8, W3)) : Q("", !0)
                  ])) : Q("", !0)
                ])
              ]),
              _("div", G3, [
                q(u, {
                  modelValue: e.checkout_information.customer_email,
                  "onUpdate:modelValue": t[1] || (t[1] = (E) => e.checkout_information.customer_email = E),
                  "error-key": "customer_email",
                  type: "email",
                  label: "Email",
                  placeholder: "example@example.com",
                  class: "embed:dark:bg-zinc-950"
                }, {
                  icon: ne(() => [
                    q(d, {
                      class: "embed:h-5 embed:w-5 embed:text-zinc-500",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              e.showCrypto && e.context.variant.payment_processors.length > 0 ? (S(), T("div", K3, [
                _("button", {
                  class: ye([{ "embed:dark:bg-transparent embed:shadow-sm embed:shadow-emerald-200 embed:dark:shadow-emerald-900 embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:text-black embed:dark:text-white": e.paymentType === "fiat", "embed:text-zinc-500 embed:hover:text-zinc-900 embed:dark:hover:text-zinc-100": e.paymentType !== "fiat" }, "embed:py-2 embed:px-4 embed:focus:outline-hidden embed:p-2 embed:rounded-sm embed:w-full embed:transition embed:duration-200 embed:ease-in-out embed:border embed:border-transparent embed:font-medium embed:text-sm"]),
                  onClick: t[2] || (t[2] = (E) => e.paymentType = "fiat")
                }, " Credit & Debit ", 2),
                _("button", {
                  class: ye([{ "embed:dark:bg-transparent embed:shadow-sm embed:shadow-emerald-200 embed:dark:shadow-emerald-900 embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:text-black embed:dark:text-white": e.paymentType === "crypto", "embed:text-zinc-500 embed:hover:text-zinc-900 embed:dark:hover:text-zinc-100": e.paymentType !== "crypto" }, "embed:py-2 embed:px-4 embed:focus:outline-hidden embed:p-2 embed:rounded-sm embed:w-full embed:transition embed:duration-200 embed:ease-in-out embed:border embed:border-transparent embed:font-medium embed:text-sm"]),
                  onClick: t[3] || (t[3] = (E) => e.paymentType = "crypto")
                }, " Crypto ", 2)
              ])) : Q("", !0),
              _("div", Y3, [
                e.showCrypto && e.context.variant.payment_processors.length === 0 || e.paymentType === "crypto" ? (S(), T(U, { key: 0 }, [
                  (S(!0), T(U, null, wn(e.getFirstTwoOptions(e.context.variant.crypto_options), (E) => (S(), ke(m, {
                    key: E,
                    as: "template",
                    value: E
                  }, {
                    default: ne(({ checked: _e }) => [
                      _("div", {
                        class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [
                          _e ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950",
                          "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"
                        ]])
                      }, [
                        _("div", X3, [
                          _("div", Z3, [
                            q(f, {
                              as: "p",
                              class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                            }, {
                              default: ne(() => {
                                var We, ut;
                                return [
                                  _("span", J3, [
                                    q(c, {
                                      symbol: (We = e.paymentMethods) == null ? void 0 : We[E].icon,
                                      size: "24",
                                      class: ye(["embed:w-8 embed:h-8", [_e ? "embed:text-black embed:dark:text-white" : "embed:text-zinc-600 embed:dark:text-zinc-300"]])
                                    }, null, 8, ["symbol", "class"])
                                  ]),
                                  _("span", {
                                    class: ye(["embed:capitalize embed:text-xs", [_e ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                  }, [
                                    te(A((ut = e.paymentMethods) == null ? void 0 : ut[E].name) + " ", 1),
                                    e.getDiscount(E) ? (S(), T("div", Q3, [
                                      e.isPositiveDiscount(E) ? (S(), T(U, { key: 0 }, [
                                        e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                          te(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                        ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                          te(A(Math.abs(e.getDiscount(E).percentage)) + "% off", 1)
                                        ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                          te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64)) : (S(), T(U, { key: 1 }, [
                                        e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                          te(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                        ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                          te(A(Math.abs(e.getDiscount(E).percentage)) + "% fee", 1)
                                        ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                          te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64))
                                    ])) : Q("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        t[23] || (t[23] = _("div", {
                          class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                          "aria-hidden": "true"
                        }, null, -1))
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128)),
                  e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options) ? (S(), ke(m, {
                    key: e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options),
                    value: e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)
                  }, {
                    default: ne(({ checked: E }) => [
                      _("div", {
                        class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [
                          E ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950",
                          "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"
                        ]])
                      }, [
                        _("div", e4, [
                          _("div", t4, [
                            q(f, {
                              as: "p",
                              class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                            }, {
                              default: ne(() => {
                                var _e, We;
                                return [
                                  _("span", n4, [
                                    q(c, {
                                      symbol: (_e = e.paymentMethods) == null ? void 0 : _e[e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)].icon,
                                      size: "24",
                                      class: "embed:w-8 embed:h-8"
                                    }, null, 8, ["symbol"])
                                  ]),
                                  _("span", {
                                    class: ye(["embed:capitalize embed:text-xs", [E ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                  }, [
                                    te(A((We = e.paymentMethods) == null ? void 0 : We[e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)].name) + " ", 1),
                                    e.getThirdOption(e.context.variant.crypto_options) && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)) ? (S(), T("div", r4, [
                                      e.isPositiveDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)) ? (S(), T(U, { key: 0 }, [
                                        e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(), T(U, { key: 0 }, [
                                          te(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " off", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage ? (S(), T(U, { key: 1 }, [
                                          te(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% off", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(), T(U, { key: 2 }, [
                                          te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " off", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64)) : (S(), T(U, { key: 1 }, [
                                        e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(), T(U, { key: 0 }, [
                                          te(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " fee", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage ? (S(), T(U, { key: 1 }, [
                                          te(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% fee", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(), T(U, { key: 2 }, [
                                          te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " fee", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64))
                                    ])) : Q("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        t[24] || (t[24] = _("div", {
                          class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                          "aria-hidden": "true"
                        }, null, -1))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["value"])) : Q("", !0),
                  e.getRemainingOptions(e.context.variant.crypto_options).length > 1 ? (S(), ke(w, {
                    key: 1,
                    modelValue: e.selectedDropdownMethod,
                    "onUpdate:modelValue": [
                      t[4] || (t[4] = (E) => e.selectedDropdownMethod = E),
                      t[5] || (t[5] = (E) => e.checkout_information.payment_method = E)
                    ],
                    as: "div",
                    class: "embed:relative"
                  }, {
                    default: ne(() => [
                      q(p, { class: "embed:h-full embed:flex embed:flex-col embed:dark:border embed:dark:border-transparent embed:shadow-inner embed:bg-white embed:dark:bg-zinc-950 embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:focus:outline-hidden embed:ml-auto" }, {
                        default: ne(() => {
                          var E, _e;
                          return [
                            _("span", i4, [
                              e.getRemainingOptions(e.context.variant.crypto_options).length > 1 && ((_e = (E = e.paymentMethods) == null ? void 0 : E[e.selectedDropdownMethod || (e.selectedDropdownMethod === e.getThirdOption(e.context.variant.crypto_options) ? e.getRemainingOptions(e.context.variant.crypto_options)[1] : e.getRemainingOptions(e.context.variant.crypto_options)[0])]) != null && _e.icon) ? (S(), ke(c, {
                                key: 0,
                                symbol: e.paymentMethods[e.selectedDropdownMethod === e.getThirdOption(e.context.variant.crypto_options) ? e.getRemainingOptions(e.context.variant.crypto_options)[1] : e.selectedDropdownMethod ? e.getRemainingOptions(e.context.variant.crypto_options)[0] : e.getRemainingOptions(e.context.variant.crypto_options)[1]].icon,
                                size: "24",
                                class: "embed:w-5 embed:h-5"
                              }, null, 8, ["symbol"])) : Q("", !0),
                              q(h, {
                                icon: "chevron-down",
                                class: "embed:w-4 embed:h-4 embed:text-zinc-600 embed:dark:text-zinc-300"
                              })
                            ])
                          ];
                        }),
                        _: 1
                      }),
                      q(cr, {
                        "leave-active-class": "embed:transition embed:duration-100 embed:ease-in",
                        "leave-from-class": "embed:opacity-100",
                        "leave-to-class": "embed:opacity-0"
                      }, {
                        default: ne(() => [
                          q(y, { class: "embed:absolute embed:z-10 embed:mt-1 embed:w-48 embed:bg-white embed:dark:bg-zinc-900 embed:rounded-md embed:shadow-zinc-400 embed:dark:shadow-black embed:border embed:border-zinc-300 embed:dark:border-zinc-950 embed:shadow-lg embed:max-h-60 embed:overflow-auto embed:[scrollbar-width:none] embed:[-ms-overflow-style:none] embed:[&::-webkit-scrollbar]:hidden embed:py-1 embed:right-1 embed:mr-2" }, {
                            default: ne(() => [
                              (S(!0), T(U, null, wn(e.getRemainingOptions(e.context.variant.crypto_options), (E) => (S(), ke(v, {
                                key: E,
                                value: E,
                                as: "template"
                              }, {
                                default: ne(({ active: _e, selected: We }) => {
                                  var ut, b, x;
                                  return [
                                    _("li", {
                                      class: ye(["embed:cursor-pointer embed:select-none embed:relative embed:py-2 embed:px-4", [_e ? "embed:bg-zinc-100 embed:dark:bg-zinc-800" : "", We ? "embed:text-black embed:dark:text-white" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                    }, [
                                      _("div", o4, [
                                        _("div", a4, [
                                          (b = (ut = e.paymentMethods) == null ? void 0 : ut[E]) != null && b.icon ? (S(), ke(g, {
                                            key: 0,
                                            config: e.paymentMethods[E].icon,
                                            "extra-classes": ["embed:w-6 embed:h-6 embed:mr-3 embed:flex embed:items-center"]
                                          }, null, 8, ["config"])) : Q("", !0),
                                          _("span", s4, [
                                            te(A((x = e.paymentMethods) == null ? void 0 : x[E].name) + " ", 1),
                                            e.getDiscount(E) ? (S(), T("div", l4, [
                                              e.isPositiveDiscount(E) ? (S(), T(U, { key: 0 }, [
                                                e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                                  te(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                                ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                                  te(A(Math.abs(e.getDiscount(E).percentage)) + "% off", 1)
                                                ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                                  te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                                ], 64)) : Q("", !0)
                                              ], 64)) : (S(), T(U, { key: 1 }, [
                                                e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                                  te(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                                ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                                  te(A(Math.abs(e.getDiscount(E).percentage)) + "% fee", 1)
                                                ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                                  te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                                ], 64)) : Q("", !0)
                                              ], 64))
                                            ])) : Q("", !0)
                                          ])
                                        ])
                                      ])
                                    ], 2)
                                  ];
                                }),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])) : Q("", !0)
                ], 64)) : (S(), T(U, { key: 1 }, [
                  (S(!0), T(U, null, wn(e.getFirstTwoFiatOptions(e.context.variant.payment_processors), (E) => (S(), ke(m, {
                    key: E,
                    as: "template",
                    value: E
                  }, {
                    default: ne(({ checked: _e }) => [
                      _("div", {
                        class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [
                          _e ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950",
                          "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"
                        ]])
                      }, [
                        _("div", d4, [
                          _("div", u4, [
                            q(f, {
                              as: "p",
                              class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                            }, {
                              default: ne(() => {
                                var We, ut, b;
                                return [
                                  _("span", c4, [
                                    (ut = (We = e.paymentMethods) == null ? void 0 : We[E]) != null && ut.icon ? (S(), ke(g, {
                                      key: 0,
                                      config: e.paymentMethods[E].icon,
                                      "extra-classes": ["embed:flex embed:items-center"]
                                    }, null, 8, ["config"])) : Q("", !0)
                                  ]),
                                  _("span", {
                                    class: ye(["embed:capitalize embed:text-xs", [_e ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                  }, [
                                    te(A((b = e.paymentMethods) == null ? void 0 : b[E].name) + " ", 1),
                                    e.getDiscount(E) ? (S(), T("div", f4, [
                                      e.isPositiveDiscount(E) ? (S(), T(U, { key: 0 }, [
                                        e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                          te(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                        ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                          te(A(Math.abs(e.getDiscount(E).percentage)) + "% off", 1)
                                        ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                          te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64)) : (S(), T(U, { key: 1 }, [
                                        e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                          te(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                        ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                          te(A(Math.abs(e.getDiscount(E).percentage)) + "% fee", 1)
                                        ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                          te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64))
                                    ])) : Q("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        t[25] || (t[25] = _("div", {
                          class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                          "aria-hidden": "true"
                        }, null, -1))
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128)),
                  e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors) ? (S(), ke(m, {
                    key: e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors),
                    value: e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)
                  }, {
                    default: ne(({ checked: E }) => [
                      _("div", {
                        class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [
                          E ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950",
                          "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"
                        ]])
                      }, [
                        _("div", m4, [
                          _("div", p4, [
                            q(f, {
                              as: "p",
                              class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                            }, {
                              default: ne(() => {
                                var _e, We, ut;
                                return [
                                  _("span", h4, [
                                    (We = (_e = e.paymentMethods) == null ? void 0 : _e[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)]) != null && We.icon ? (S(), ke(g, {
                                      key: 0,
                                      config: e.paymentMethods[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)].icon,
                                      "extra-classes": ["embed:flex embed:items-center"]
                                    }, null, 8, ["config"])) : Q("", !0)
                                  ]),
                                  _("span", {
                                    class: ye(["embed:capitalize embed:text-xs", [E ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                  }, [
                                    te(A((ut = e.paymentMethods) == null ? void 0 : ut[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)].name) + " ", 1),
                                    e.getThirdFiatOption(e.context.variant.payment_processors) && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)) ? (S(), T("div", b4, [
                                      e.isPositiveDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)) ? (S(), T(U, { key: 0 }, [
                                        e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(), T(U, { key: 0 }, [
                                          te(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " off", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage ? (S(), T(U, { key: 1 }, [
                                          te(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% off", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(), T(U, { key: 2 }, [
                                          te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " off", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64)) : (S(), T(U, { key: 1 }, [
                                        e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(), T(U, { key: 0 }, [
                                          te(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " fee", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage ? (S(), T(U, { key: 1 }, [
                                          te(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% fee", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(), T(U, { key: 2 }, [
                                          te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " fee", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64))
                                    ])) : Q("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        t[26] || (t[26] = _("div", {
                          class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                          "aria-hidden": "true"
                        }, null, -1))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["value"])) : Q("", !0),
                  e.getRemainingFiatOptions(e.context.variant.payment_processors).length > 1 ? (S(), ke(w, {
                    key: 1,
                    modelValue: e.selectedFiatMethod,
                    "onUpdate:modelValue": [
                      t[6] || (t[6] = (E) => e.selectedFiatMethod = E),
                      t[7] || (t[7] = (E) => e.checkout_information.payment_method = E)
                    ],
                    as: "div",
                    class: "embed:relative"
                  }, {
                    default: ne(() => [
                      q(p, { class: "embed:h-full embed:flex embed:flex-col embed:dark:border embed:dark:border-transparent embed:shadow-inner embed:bg-white embed:dark:bg-zinc-950 embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:focus:outline-hidden embed:ml-auto" }, {
                        default: ne(() => {
                          var E, _e;
                          return [
                            _("span", g4, [
                              e.getRemainingFiatOptions(e.context.variant.payment_processors).length > 1 && ((_e = (E = e.paymentMethods) == null ? void 0 : E[e.selectedFiatMethod || (e.selectedFiatMethod === e.getThirdFiatOption(e.context.variant.payment_processors) ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[1] : e.getRemainingFiatOptions(e.context.variant.payment_processors)[0])]) != null && _e.icon) ? (S(), ke(g, {
                                key: 0,
                                config: e.paymentMethods[e.selectedFiatMethod === e.getThirdFiatOption(e.context.variant.payment_processors) ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[1] : e.selectedFiatMethod ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[0] : e.getRemainingFiatOptions(e.context.variant.payment_processors)[1]].icon,
                                "extra-classes": ["embed:flex embed:items-center"]
                              }, null, 8, ["config"])) : Q("", !0),
                              q(h, {
                                icon: "chevron-down",
                                class: "embed:w-4 embed:h-4 embed:text-zinc-600 embed:dark:text-zinc-300"
                              })
                            ])
                          ];
                        }),
                        _: 1
                      }),
                      q(cr, {
                        "leave-active-class": "embed:transition embed:duration-100 embed:ease-in",
                        "leave-from-class": "embed:opacity-100",
                        "leave-to-class": "embed:opacity-0"
                      }, {
                        default: ne(() => [
                          q(y, { class: "embed:absolute embed:z-10 embed:mt-1 embed:w-48 embed:bg-white embed:dark:bg-zinc-900 embed:rounded-md embed:shadow-zinc-400 embed:dark:shadow-black embed:border embed:border-zinc-300 embed:dark:border-zinc-950 embed:shadow-lg embed:max-h-60 embed:overflow-auto embed:[scrollbar-width:none] embed:[-ms-overflow-style:none] embed:[&::-webkit-scrollbar]:hidden embed:py-1 embed:right-1 embed:mr-2" }, {
                            default: ne(() => [
                              (S(!0), T(U, null, wn(e.getRemainingFiatOptions(e.context.variant.payment_processors), (E) => (S(), ke(v, {
                                key: E,
                                value: E,
                                as: "template"
                              }, {
                                default: ne(({ active: _e, selected: We }) => {
                                  var ut, b, x;
                                  return [
                                    _("li", {
                                      class: ye(["embed:cursor-pointer embed:select-none embed:relative embed:py-2 embed:px-4", [_e ? "embed:bg-zinc-100 embed:dark:bg-zinc-800" : "", We ? "embed:text-black embed:dark:text-white" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                    }, [
                                      _("div", v4, [
                                        (b = (ut = e.paymentMethods) == null ? void 0 : ut[E]) != null && b.icon ? (S(), ke(g, {
                                          key: 0,
                                          config: e.paymentMethods[E].icon,
                                          "extra-classes": ["embed:mr-3 embed:flex embed:items-center"]
                                        }, null, 8, ["config"])) : Q("", !0),
                                        _("span", y4, [
                                          te(A((x = e.paymentMethods) == null ? void 0 : x[E].name) + " ", 1),
                                          e.getDiscount(E) ? (S(), T("div", w4, [
                                            e.isPositiveDiscount(E) ? (S(), T(U, { key: 0 }, [
                                              e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                                te(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                              ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                                te(A(Math.abs(e.getDiscount(E).percentage)) + "% off", 1)
                                              ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                                te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                              ], 64)) : Q("", !0)
                                            ], 64)) : (S(), T(U, { key: 1 }, [
                                              e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                                te(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                              ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                                te(A(Math.abs(e.getDiscount(E).percentage)) + "% fee", 1)
                                              ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                                te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                              ], 64)) : Q("", !0)
                                            ], 64))
                                          ])) : Q("", !0)
                                        ])
                                      ])
                                    ], 2)
                                  ];
                                }),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])) : Q("", !0)
                ], 64))
              ])
            ])
          ];
        }),
        _: 1
      }, 8, ["modelValue"]),
      e.context.variant.additional_information.length > 0 ? (S(), T("div", x4, [
        q(O)
      ])) : Q("", !0),
      e.context.variant.vat_enabled ? (S(), T("div", k4, [
        q(u, {
          modelValue: e.checkout_information.country,
          "onUpdate:modelValue": t[9] || (t[9] = (G) => e.checkout_information.country = G),
          type: "select",
          label: "Country",
          name: "country",
          options: Object.entries(e.context.variant.available_vat_countries).map(([G, ue]) => ({
            value: G,
            label: ue.name
          })),
          class: "embed:dark:bg-zinc-950"
        }, null, 8, ["modelValue", "options"]),
        e.context.variant.vat_enabled && ((W = e.context.variant.available_vat_countries[e.checkout_information.country]) == null ? void 0 : W.vat) > 0 ? (S(), T("div", _4, [
          q(u, {
            id: "vat_id",
            modelValue: e.checkout_information.vat_id,
            "onUpdate:modelValue": t[10] || (t[10] = (G) => e.checkout_information.vat_id = G),
            "error-key": "vat_id",
            type: "text",
            label: "VAT ID",
            placeholder: "DE123456789",
            name: "vat_id",
            class: "embed:dark:bg-zinc-950"
          }, null, 8, ["modelValue"])
        ])) : Q("", !0)
      ])) : Q("", !0),
      _("div", S4, [
        _("div", null, [
          e.applyCoupon ? (S(), ke(cr, {
            key: 0,
            appear: "",
            "enter-from-class": "embed:opacity-0 embed:scale-0",
            "enter-to-class": "opacity-1 embed:scale-100",
            "enter-active-class": "embed:transition embed:transform origin",
            "leave-from-class": "opacity-1 embed:scale-100",
            "leave-to-class": "embed:opacity-0 embed:scale-0",
            "leave-active-class": "embed:transition embed:transform"
          }, {
            default: ne(() => [
              _("div", E4, [
                _("div", C4, [
                  _("button", {
                    class: "embed:absolute embed:right-1 embed:-top-5 embed:text-zinc-500 embed:hover:text-zinc-800 embed:dark:hover:text-zinc-200 embed:text-xs embed:transition embed:duration-100 embed:ease-in-out",
                    onClick: t[11] || (t[11] = (G) => e.applyCoupon = !1)
                  }, "Cancel"),
                  _("div", T4, [
                    _("div", O4, [
                      q(u, {
                        modelValue: e.data.coupon,
                        "onUpdate:modelValue": t[12] || (t[12] = (G) => e.data.coupon = G),
                        type: "text",
                        name: "coupon-code",
                        placeholder: "Enter coupon code",
                        class: "embed:dark:bg-zinc-950 embed:rounded-r-none"
                      }, null, 8, ["modelValue"])
                    ]),
                    q(D, {
                      primary: "",
                      loading: e.isApplying || e.isLoading,
                      disabled: e.isApplying || e.isLoading,
                      type: "button",
                      class: "embed:relative embed:inline-flex embed:items-center embed:space-x-2 embed:rounded-l-none",
                      onClick: t[13] || (t[13] = (G) => e.debouncedApply("coupon"))
                    }, {
                      default: ne(() => [
                        _("span", null, A(e.isApplying || e.isLoading ? "Applying..." : "Apply"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ])
                ])
              ])
            ]),
            _: 1
          })) : (S(), T("button", {
            key: 1,
            class: "embed:py-2 embed:text-zinc-500 embed:hover:text-zinc-800 embed:dark:hover:text-zinc-200 embed:text-sm embed:mx-auto embed:transition embed:duration-100 embed:ease-in-out",
            onClick: t[14] || (t[14] = (G) => e.applyCoupon = !0)
          }, "Add coupon")),
          (B = (Y = (M = e.context.error) == null ? void 0 : M.errors) == null ? void 0 : Y.coupon) != null && B[0] ? (S(), T("p", {
            key: 2,
            class: "embed:mt-1 embed:ml-1.5 embed:text-left embed:text-xs embed:text-red-600 embed:dark:text-red embed:w-full",
            textContent: A((ee = (P = e.context.error) == null ? void 0 : P.errors) == null ? void 0 : ee.coupon[0])
          }, null, 8, A4)) : Q("", !0),
          e.variant.coupon && ((ge = (Te = (he = e.context.error) == null ? void 0 : he.errors) == null ? void 0 : Te.coupon) == null ? void 0 : ge[0]) === void 0 ? (S(), T("p", D4, "A " + A(e.variant.coupon) + " coupon has successfully been applied!", 1)) : Q("", !0)
        ])
      ]),
      e.variant.visibility == "PUBLIC" || e.variant.visibility == "HIDDEN" ? (S(), T("div", P4, [
        _("div", M4, [
          q(D, {
            loading: e.isLoading,
            disabled: e.isSoldOut,
            style: hi({ "background-color": e.context.customization.theme }),
            class: "embed:w-full embed:disabled:bg-red-600 embed:disabled:focus:ring-zinc-500",
            primary: "",
            onClick: e.handleClick
          }, {
            default: ne(() => [
              te(A(e.isSoldOut ? "Sold out" : "Buy now"), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled", "style", "onClick"]),
          !e.isSoldOut && !e.isValidInput && e.hasAttemptedSubmit ? (S(), T("div", $4, [
            e.checkout_information.payment_method ? Q("", !0) : (S(), T("p", L4, "Please select a payment method")),
            !e.checkout_information.customer_email || !e.checkout_information.customer_email.includes("@") ? (S(), T("p", F4, "Please enter a valid email address")) : Q("", !0),
            e.context.variant.additional_information.some((G) => G.required && !e.checkout_information.additional_information[G.key]) ? (S(), T("p", N4, "Please fill in all required checkout information")) : Q("", !0)
          ])) : Q("", !0)
        ])
      ])) : Q("", !0)
    ]),
    q(N, {
      modelValue: e.isDescriptionOpen,
      "onUpdate:modelValue": t[15] || (t[15] = (G) => e.isDescriptionOpen = G),
      title: "Product Description"
    }, {
      default: ne(() => [
        _("div", {
          innerHTML: e.product.description
        }, null, 8, I4)
      ]),
      _: 1
    }, 8, ["modelValue"]),
    q(N, {
      modelValue: e.orMore,
      "onUpdate:modelValue": t[18] || (t[18] = (G) => e.orMore = G),
      title: "Add Extra Amount",
      description: "Optionally add an extra amount to this purchase"
    }, {
      default: ne(() => {
        var G, ue, Ie, Xe, ie;
        return [
          _("div", z4, [
            _("div", R4, [
              _("div", j4, [
                _("div", V4, [
                  q(u, {
                    id: "extra",
                    modelValue: e.data.extra,
                    "onUpdate:modelValue": t[16] || (t[16] = (me) => e.data.extra = me),
                    type: "number",
                    name: "extra",
                    placeholder: "0.00",
                    class: "embed:dark:bg-zinc-950 embed:rounded-r-none embed:w-full"
                  }, null, 8, ["modelValue"])
                ]),
                q(D, {
                  primary: "",
                  class: "embed:rounded-l-none",
                  onClick: t[17] || (t[17] = (me) => e.apply("extra"))
                }, {
                  default: ne(() => t[27] || (t[27] = [
                    _("span", null, "Add", -1)
                  ])),
                  _: 1
                })
              ]),
              (Ie = (ue = (G = e.context.error) == null ? void 0 : G.errors) == null ? void 0 : ue.extra) != null && Ie[0] ? (S(), T("p", {
                key: 0,
                class: "embed:ml-1.5 embed:text-left embed:text-sm embed:text-red-600 embed:dark:text-red embed:w-full",
                textContent: A((ie = (Xe = e.context.error) == null ? void 0 : Xe.errors) == null ? void 0 : ie.extra[0])
              }, null, 8, U4)) : Q("", !0)
            ])
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]),
    _("div", B4, [
      _("button", {
        class: "embed:flex embed:items-center embed:text-zinc-600 embed:dark:text-white embed:bg-zinc-200/60 embed:dark:bg-black embed:px-2 embed:py-1 embed:rounded-lg embed:text-sm embed:font-medium embed:hover:text-black embed:dark:hover:text-zinc-300 embed:transition-colors",
        onClick: t[19] || (t[19] = (G) => e.isDescriptionOpen = !0)
      }, "Description"),
      e.product.variants.length > 1 ? (S(), T("button", {
        key: 0,
        class: "embed:flex embed:items-center embed:text-zinc-600 embed:dark:text-white embed:bg-zinc-200/60 embed:dark:bg-black embed:px-2 embed:py-1 embed:rounded-lg embed:text-sm embed:font-medium embed:hover:text-black embed:dark:hover:text-zinc-300 embed:transition-colors",
        onClick: t[20] || (t[20] = (G) => e.send({ type: "PREVIOUS" }))
      }, "Variants")) : Q("", !0),
      e.variant.humble ? (S(), T("div", H4, [
        _("button", {
          class: "embed:flex embed:items-center embed:text-zinc-600 embed:dark:text-white embed:bg-zinc-200/60 embed:dark:bg-black embed:px-2 embed:py-1 embed:rounded-lg embed:text-sm embed:font-medium embed:hover:text-black embed:dark:hover:text-zinc-300 embed:transition-colors",
          onClick: t[21] || (t[21] = (G) => e.orMore = !0)
        }, "Add more")
      ])) : Q("", !0)
    ])
  ]);
}
const W4 = /* @__PURE__ */ gt(T3, [["render", q4]]), G4 = /* @__PURE__ */ ve({
  name: "MyNavigator",
  components: {
    MyButton: Zo
  },
  props: {
    back: {
      type: Object,
      required: !1,
      default: () => ({
        type: "PREVIOUS"
      })
    },
    next: {
      type: Object,
      required: !1,
      default: () => ({
        type: "NEXT"
      })
    },
    text: {
      type: String,
      required: !1,
      default: () => "Continue"
    }
  },
  setup() {
    const { state: e, send: t } = It();
    return {
      send: t,
      state: e
    };
  }
}), K4 = { class: "embed:mt-6 embed:w-full embed:justify-between embed:flex embed:items-center embed:col-span-2 embed:space-x-2" };
function Y4(e, t, n, r, i, o) {
  const a = oe("MyButton");
  return S(), T("div", K4, [
    q(a, {
      outline: "",
      class: "embed:w-1/2",
      disabled: e.state.hasTag("loading"),
      onClick: t[0] || (t[0] = (s) => e.send(e.back))
    }, {
      default: ne(() => t[2] || (t[2] = [
        te("Back")
      ])),
      _: 1
    }, 8, ["disabled"]),
    q(a, {
      loading: e.state.hasTag("loading"),
      class: "embed:w-1/2",
      style: hi({ "background-color": e.state.context.customization.theme }),
      primary: "",
      onClick: t[1] || (t[1] = (s) => e.send(e.next))
    }, {
      default: ne(() => [
        te(A(e.text), 1)
      ]),
      _: 1
    }, 8, ["loading", "style"])
  ]);
}
const wl = /* @__PURE__ */ gt(G4, [["render", Y4]]), X4 = /* @__PURE__ */ ve({
  name: "ConnectDiscord",
  components: {
    Navigator: wl,
    DialogTitle: xr,
    InputGroup: yl,
    MyButton: Zo
  },
  setup() {
    const { context: e } = It();
    let t = Z(e.value.discord_data.discord_username);
    Se.discord_token = e.value.discord_data.discord_token;
    const n = Z(!0), r = () => {
      const o = window.open(e.value.discord_data.connect_url, "_blank", "width=400, height=600");
      (!o || o.closed || typeof o.closed > "u") && (n.value = !1);
    }, i = (o) => {
      var u;
      const a = o.data, s = /^((http[s]?|ftp):\/)?\/?([^:/\s]+)((\/\w+)*\/)([\w\-.]+[^#?\s]+)(.*)?(#[\w-]+)?$/, l = wi.match(s), d = l[2] + "://" + l[3];
      o.origin === d && !Vn(a) && (u = e.value.discord_data) != null && u.connect_url && (sessionStorage.setItem("discord_token", a.discord_token), e.value.discord_data = {
        discord_id: a.discord_id,
        discord_token: a.discord_token,
        discord_username: a.discord_username,
        connect_url: e.value.discord_data.connect_url
      }, Se.discord_token = a.discord_token, t.value = e.value.discord_data.discord_username);
    };
    return window.addEventListener("message", i), {
      checkout_information: Se,
      context: e,
      linkDiscord: r,
      receiveData: i,
      popUpsEnabled: n,
      discordUsername: t
    };
  }
}), Z4 = { class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6" }, J4 = ["textContent"], Q4 = { class: "embed:mt-4" }, e6 = {
  key: 0,
  class: "embed:text-center embed:mt-2 embed:bg-white embed:dark:bg-black embed:rounded-2xl embed:px-4 embed:py-2"
}, t6 = {
  key: 1,
  class: "embed:text-center embed:mt-2 embed:bg-white embed:dark:bg-black embed:rounded-2xl embed:px-4 embed:py-2"
}, n6 = {
  key: 1,
  class: "embed:mt-5 embed:text-red-500"
}, r6 = { key: 2 };
function i6(e, t, n, r, i, o) {
  const a = oe("DialogTitle"), s = oe("InputGroup"), l = oe("MyButton"), d = oe("Navigator");
  return S(), T("div", Z4, [
    q(a, {
      as: "h1",
      class: "embed:font-bold embed:text-center embed:text-xl embed:text-black embed:dark:text-white"
    }, {
      default: ne(() => t[0] || (t[0] = [
        te("Connect discord")
      ])),
      _: 1
    }),
    e.discordUsername ? (S(), ke(s, {
      key: 0,
      class: "embed:text-center",
      type: "text",
      label: "",
      value: e.discordUsername,
      disabled: ""
    }, null, 8, ["value"])) : Q("", !0),
    q(l, {
      class: "embed:w-full embed:bg-[#5865F2] embed:text-white embed:mt-4",
      onClick: e.linkDiscord
    }, {
      default: ne(() => [
        _("span", {
          textContent: A(e.checkout_information.discord_id ? "Change discord account" : "Connect discord")
        }, null, 8, J4)
      ]),
      _: 1
    }, 8, ["onClick"]),
    _("div", Q4, [
      e.context.variant.discord_required ? (S(), T("div", e6, t[1] || (t[1] = [
        _("span", { class: "embed:font-medium embed:text-black embed:dark:text-white" }, "To continue your purchase, you'll want to connect your Discord account.", -1)
      ]))) : e.context.variant.discord_request ? (S(), T("div", t6, t[2] || (t[2] = [
        _("span", { class: "embed:font-medium embed:text-black embed:dark:text-white" }, "Optionally connect your Discord to get exclusive accesss with your purchase.", -1)
      ]))) : Q("", !0)
    ]),
    e.popUpsEnabled ? Q("", !0) : (S(), T("div", n6, t[3] || (t[3] = [
      _("p", null, "Please, enable pop ups to proceed.", -1)
    ]))),
    e.context.variant.discord_required && e.checkout_information.discord_token || !e.context.variant.discord_required ? (S(), T("div", r6, [
      q(d)
    ])) : Q("", !0)
  ]);
}
const o6 = /* @__PURE__ */ gt(X4, [["render", i6]]), a6 = /* @__PURE__ */ ve({
  name: "FinalStep",
  components: {
    Navigator: wl,
    DialogTitle: xr,
    DialogDescription: E0
  },
  setup() {
    var s;
    const { context: e } = It(), t = Z(!1), n = L(() => e.value.variant), r = L(() => e.value.product), i = L(() => !e.value.variant.payment_discounts || !Se.payment_method ? null : e.value.variant.payment_discounts[Se.payment_method.toLowerCase()]), o = L(() => i.value ? i.value.percentage < 0 || i.value.fixed < 0 : !1);
    let a = parseFloat(e.value.variant.total.replace(/[^\d.-]/g, "")) || 0;
    if (i.value) {
      if (i.value.percentage) {
        const l = parseFloat(i.value.percentage) / 100 * a;
        a -= l;
      }
      i.value.fixed && (a -= parseFloat(i.value.fixed));
    }
    if (e.value.variant.available_vat_countries && Se.country) {
      const l = (s = e.value.variant.available_vat_countries[Se.country]) == null ? void 0 : s.vat;
      if (l !== null && !isNaN(l)) {
        const d = parseFloat(l) / 100;
        a += a * d;
      }
    }
    return {
      checkout_information: Se,
      context: e,
      variant: n,
      product: r,
      terms_of_service: t,
      paymentDetails: i,
      hasNegativePayment: o,
      price: a
    };
  },
  methods: {
    capitalized(e) {
      const t = e[0].toUpperCase(), n = e.slice(1);
      return t + n;
    }
  }
}), s6 = { class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6" }, l6 = { class: "embed:p-3 embed:text-left embed:flex embed:flex-row embed:justify-between" }, d6 = { class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white" }, u6 = ["textContent"], c6 = { class: "embed:space-y-2 embed:mx-2 embed:bg-zinc-50 embed:dark:bg-zinc-950 embed:py-3 embed:px-3 embed:rounded-2xl embed:shadow-inner embed:dark:shadow-black embed:text-sm embed:font-medium embed:text-black embed:dark:text-white" }, f6 = { class: "embed:text-left embed:flex embed:flex-row embed:justify-between" }, m6 = ["textContent"], p6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, h6 = { class: "embed:inline-flex embed:items-center embed:space-x-2 embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, b6 = { class: "embed:flex embed:rounded-lg embed:bg-zinc-100 embed:px-2 embed:text-sm embed:font-medium embed:dark:bg-black" }, g6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, v6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, y6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, w6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, x6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, k6 = { class: "embed:p-3 embed:flex embed:flex-row embed:justify-between" }, _6 = { class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white embed:pr-2" }, S6 = { class: "embed:px-3 embed:mt-4 embed:relative embed:flex embed:items-center" }, E6 = { class: "embed:ml-3 embed:flex embed:items-center embed:h-5" }, C6 = ["checked"];
function T6(e, t, n, r, i, o) {
  var d, u, c, f;
  const a = oe("DialogTitle"), s = oe("DialogDescription"), l = oe("Navigator");
  return S(), T("div", s6, [
    q(a, {
      as: "h1",
      class: "embed:font-bold embed:text-center embed:text-xl embed:text-black embed:dark:text-white"
    }, {
      default: ne(() => t[1] || (t[1] = [
        te("Order Overview")
      ])),
      _: 1
    }),
    q(s, {
      as: "p",
      class: "embed:mb-4 embed:font-normal embed:text-center embed:text-zinc-800 embed:dark:text-zinc-400 embed:text-xs"
    }, {
      default: ne(() => t[2] || (t[2] = [
        te("Finally, review your order details before checking out")
      ])),
      _: 1
    }),
    _("div", l6, [
      _("p", d6, A(e.context.quantity) + "x " + A(e.product.title), 1),
      _("p", {
        class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white embed:pr-2",
        textContent: A(e.variant.price)
      }, null, 8, u6)
    ]),
    _("div", c6, [
      _("div", f6, [
        t[3] || (t[3] = _("p", { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, "Subtotal", -1)),
        _("p", {
          class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white",
          textContent: A(e.variant.price)
        }, null, 8, m6)
      ]),
      _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", e.context.variant.bulk_discount == null ? "embed:hidden" : ""])
      }, [
        t[4] || (t[4] = _("p", { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, "Bulk discount", -1)),
        _("p", p6, "-" + A(e.context.variant.bulk_discount), 1)
      ], 2),
      _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", e.context.coupon == null ? "embed:hidden" : ""])
      }, [
        _("p", h6, [
          t[5] || (t[5] = _("span", null, "Coupon", -1)),
          _("span", b6, A(e.context.coupon), 1)
        ]),
        _("p", g6, "-" + A(e.context.variant.coupon), 1)
      ], 2),
      _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", !e.context.variant.payment_discounts || e.context.variant.payment_discounts[e.checkout_information.payment_method.toLowerCase()] == null ? "embed:hidden" : ""])
      }, [
        _("p", v6, "Payment " + A(e.hasNegativePayment ? "fee" : "discount"), 1),
        _("p", y6, [
          (d = e.paymentDetails) != null && d.percentage && ((u = e.paymentDetails) != null && u.fixed) ? (S(), T(U, { key: 0 }, [
            te(A(Math.abs(e.paymentDetails.percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.paymentDetails.fixed)), 1)
          ], 64)) : (c = e.paymentDetails) != null && c.percentage ? (S(), T(U, { key: 1 }, [
            te(A(Math.abs(e.paymentDetails.percentage)) + "%", 1)
          ], 64)) : (f = e.paymentDetails) != null && f.fixed ? (S(), T(U, { key: 2 }, [
            te(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.paymentDetails.fixed)), 1)
          ], 64)) : Q("", !0)
        ])
      ], 2),
      _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", !e.checkout_information.country || e.context.variant.available_vat_countries[e.checkout_information.country].vat == 0 ? "embed:hidden" : ""])
      }, [
        _("p", w6, "VAT (" + A(e.checkout_information.country && e.context.variant.available_vat_countries[e.checkout_information.country].name) + ")", 1),
        _("p", x6, "+" + A(e.checkout_information.country && e.context.variant.available_vat_countries[e.checkout_information.country].vat) + "%", 1)
      ], 2)
    ]),
    _("div", k6, [
      t[6] || (t[6] = _("p", { class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white" }, "Total", -1)),
      _("p", _6, A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(!isNaN(e.price) && isFinite(e.price) ? e.price.toFixed(2) : e.context.variant.total.replace(/[^\d]+.*/, "")), 1)
    ]),
    _("div", S6, [
      t[7] || (t[7] = _("div", { class: "embed:min-w-0 embed:flex-1 embed:text-left embed:text-sm" }, [
        _("label", {
          for: "terms_of_service",
          class: "embed:select-none embed:mb-0 embed:font-semibold embed:text-sm embed:text-zinc-800 embed:dark:text-neutral-300"
        }, "By making this purchase, you agree to the terms of service")
      ], -1)),
      _("div", E6, [
        Fs(_("input", {
          id: "terms_of_service",
          "onUpdate:modelValue": t[0] || (t[0] = (m) => e.terms_of_service = m),
          checked: e.terms_of_service == !0,
          required: "",
          name: "terms_of_service",
          type: "checkbox",
          class: "embed:p-2 embed:appearance-none embed:rounded embed:focus:ring-offset-0 embed:bg-white embed:checked:bg-black embed:dark:bg-zinc-800 embed:dark:focus:bg-zinc-950 embed:text-black embed:dark:text-white embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:border embed:border-zinc-100 embed:hover:border-zinc-200 embed:focus:border-zinc-400 embed:dark:border-zinc-800 embed:dark:hover:border-zinc-950 embed:dark:focus:border-zinc-800 embed:focus:ring-0 embed:shadow-inner embed:shadow-zinc-400 embed:hover:shadow-zinc-500 embed:focus:shadow-zinc-200 embed:dark:shadow-neutral-800 embed:dark:hover:shadow-neutral-900 embed:dark:focus:shadow-neutral-800 embed:transition embed:duration-200 embed:ease-in-out"
        }, null, 8, C6), [
          [E1, e.terms_of_service]
        ])
      ])
    ]),
    q(l, {
      next: { type: "CHECKOUT" },
      text: "Pay Now",
      "loading-state": "checkout.step.final_step.checkout_product",
      class: ye(e.terms_of_service == !1 ? "embed:hidden" : "")
    }, null, 8, ["class"])
  ]);
}
const O6 = /* @__PURE__ */ gt(a6, [["render", T6]]), A6 = /* @__PURE__ */ ve({
  name: "DialogMessage",
  components: {
    DialogTitle: xr
  },
  props: {
    title: {
      type: String,
      required: !1,
      default: null
    },
    message: {
      type: String,
      required: !1,
      default: null
    }
  }
}), D6 = { class: "embed:flex embed:flex-col embed:items-center embed:justify-evenly embed:h-4/6 embed:w-full embed:p-6" }, P6 = { class: "embed:flex embed:flex-col embed:items-center" }, M6 = { class: "embed:bg-zinc-100 embed:p-4 embed:rounded-lg embed:w-11/12 embed:mt-4 embed:dark:bg-zinc-800 embed:text-black embed:dark:text-white embed:shadow-inner embed:dark:shadow-black" };
function $6(e, t, n, r, i, o) {
  const a = oe("DialogTitle");
  return S(), T("div", D6, [
    _("div", P6, [
      ri(e.$slots, "default"),
      q(a, {
        as: "h2",
        class: "embed:mb-0 embed:mt-3 embed:font-bold embed:text-2xl embed:text-black embed:dark:text-white"
      }, {
        default: ne(() => [
          te(A(e.title), 1)
        ]),
        _: 1
      })
    ]),
    _("div", M6, [
      ri(e.$slots, "action", {}, () => [
        _("p", null, A(e.message), 1)
      ])
    ])
  ]);
}
const xl = /* @__PURE__ */ gt(A6, [["render", $6]]), L6 = /* @__PURE__ */ ve({
  name: "SuccessDialog",
  components: {
    DialogMessage: xl,
    CheckCircleIcon: rm
  },
  setup: function() {
    const { context: e } = It();
    return {
      context: e
    };
  }
}), F6 = ["href"];
function N6(e, t, n, r, i, o) {
  const a = oe("CheckCircleIcon"), s = oe("DialogMessage");
  return S(), ke(s, {
    class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-2xl embed:shadow-xl",
    title: "Order Created"
  }, {
    action: ne(() => [
      _("p", null, [
        t[0] || (t[0] = te(" Your order has been created! If the payment gateway did not open by itself, ")),
        _("a", {
          href: e.context.order,
          class: "embed:font-bold embed:underline embed:decoration-zinc-800 embed:dark:decoration-zinc-50 embed:hover:decoration-wavy",
          target: "_blank"
        }, "click here to open it.", 8, F6)
      ])
    ]),
    default: ne(() => [
      q(a, { class: "embed:h-24 embed:w-24 embed:text-green-600" })
    ]),
    _: 1
  });
}
const I6 = /* @__PURE__ */ gt(L6, [["render", N6]]), z6 = /* @__PURE__ */ ve({
  name: "HeadsUpDialog",
  components: {
    DialogMessage: xl
  }
});
function R6(e, t, n, r, i, o) {
  const a = oe("DialogMessage");
  return S(), ke(a, {
    class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-2xl embed:shadow-xl",
    title: "What's Next?"
  }, {
    action: ne(() => t[0] || (t[0] = [
      _("p", { class: "embed:mb-4" }, "Once paid, the order will instantly be sent to your entered email. That's it!", -1),
      _("p", { class: "embed:text-xs" }, "Note: If you paid with PayPal, we will send the product to your PayPal email for security reasons.", -1)
    ])),
    _: 1
  });
}
const j6 = /* @__PURE__ */ gt(z6, [["render", R6]]);
function V6(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return Object.assign(t, r), t;
  }, {});
}
const U6 = /* @__PURE__ */ ve({
  name: "EmbedCheckout",
  components: {
    MyDialog: k0,
    DialogPanel: S0,
    DialogOverlay: _0,
    DialogTitle: xr,
    TransitionChild: Sf,
    TransitionRoot: Ef,
    ExclamationCircleIcon: nm,
    VariantSelection: P2,
    Overview: W4,
    ConnectDiscord: o6,
    FinalStep: O6,
    Navigator: wl,
    DialogMessage: xl,
    CheckCircleIcon: rm,
    SuccessDialog: I6,
    HeadsUpDialog: j6
  },
  setup(e, { expose: t }) {
    const { context: n, state: r, send: i } = It();
    let o = "", a = "";
    const s = () => {
      document.documentElement.style.overflow === "hidden" && (document.documentElement.style.overflow = "", document.documentElement.style.paddingRight = ""), document.body.style.position === "fixed" && document.body.style.top === "0px" && (document.body.style.position = "", document.body.style.width = "", document.body.style.height = "", document.body.style.top = "", document.body.style.overflow = "");
    }, l = () => {
      o = document.documentElement.getAttribute("style") || "", a = document.body.getAttribute("style") || "";
      const h = new MutationObserver((p) => {
        for (const g of p)
          g.attributeName === "style" && s();
      });
      return h.observe(document.documentElement, { attributes: !0, attributeFilter: ["style"] }), h.observe(document.body, { attributes: !0, attributeFilter: ["style"] }), h;
    };
    let d = null;
    Ue(() => {
      d = l();
    }), Ns(() => {
      d && (d.disconnect(), d = null), o ? document.documentElement.setAttribute("style", o) : document.documentElement.removeAttribute("style"), a ? document.body.setAttribute("style", a) : document.body.removeAttribute("style");
    });
    const u = L(() => {
      var h, p, g, v;
      return (v = (g = (p = (h = r.value.context) == null ? void 0 : h.error) == null ? void 0 : p.errors) == null ? void 0 : g.quantity) == null ? void 0 : v.some((y) => y === "This product has insufficient stock to fulfill the purchase.");
    }), c = L(() => {
      var h, p;
      return u.value ? "This product is currently out of stock." : ((p = (h = r.value.context) == null ? void 0 : h.error) == null ? void 0 : p.message) || "An unexpected error occurred";
    }), f = () => {
      H0();
    };
    return f(), t({
      reInit: () => {
        f();
      },
      isOpen: L(() => !r.value.matches("closed")),
      context: L(() => r.value.context)
    }), {
      stepComponent: L(() => r.value.matches("checkout") ? V6(r.value.meta).component : null),
      context: n,
      state: r,
      send: i,
      isOutOfStock: u,
      errorMessage: c,
      removeHeadlessUiStyles: s
    };
  }
}), B6 = {
  id: "embed-modal",
  class: "embed:fixed embed:z-10 embed:inset-0 embed:overflow-auto"
}, H6 = { style: { "z-index": "2147483647", width: "100%", height: "100%" } }, q6 = { class: "embed:relative embed:z-50 embed:max-w-xl embed:w-full embed:inline-block embed:align-middle embed:px-4 embed:transform" }, W6 = {
  key: 0,
  class: "embed:bg-white embed:dark:bg-zinc-900 embed:rounded-lg embed:shadow-zinc-400 embed:shadow-md embed:dark:shadow-black embed:overflow-hidden embed:border-zinc-300 embed:dark:border-black embed:border embed:p-6"
}, G6 = { class: "embed:space-y-12" }, K6 = { class: "embed:space-y-8" }, Y6 = { class: "embed:space-y-2" }, X6 = { class: "embed:flex embed:flex-wrap embed:gap-3 embed:justify-center" }, Z6 = {
  key: 1,
  class: "embed:space-y-4"
}, J6 = {
  key: 1,
  class: "embed:space-y-6"
};
function Q6(e, t, n, r, i, o) {
  const a = oe("DialogOverlay"), s = oe("TransitionChild"), l = oe("SuccessDialog"), d = oe("HeadsUpDialog"), u = oe("ExclamationCircleIcon"), c = oe("DialogMessage"), f = oe("DialogPanel"), m = oe("MyDialog"), h = oe("TransitionRoot"), p = fh("click-outside");
  return S(), ke(h, {
    as: "template",
    show: !e.state.matches("closed")
  }, {
    default: ne(() => [
      q(m, {
        as: "div",
        open: !e.state.matches("closed"),
        class: "embed-dialog",
        static: !0
      }, {
        default: ne(() => [
          q(f, {
            class: "embed:outline-hidden",
            tabindex: "0"
          }, {
            default: ne(() => [
              _("div", B6, [
                _("div", {
                  class: ye(["embed:flex embed:items-center embed:justify-center embed:min-h-screen embed:text-center", { dark: e.context.customization.darkMode }])
                }, [
                  q(s, {
                    as: "template",
                    enter: "embed:ease-out embed:duration-300",
                    "enter-from": "embed:opacity-0",
                    "enter-to": "embed:opacity-100",
                    leave: "embed:ease-in embed:duration-200",
                    "leave-from": "embed:opacity-100",
                    "leave-to": "embed:opacity-0"
                  }, {
                    default: ne(() => [
                      q(a, { class: "embed:fixed embed:inset-0 embed:bg-white/90 embed:dark:bg-black/50 embed:transition-opacity" })
                    ]),
                    _: 1
                  }),
                  t[7] || (t[7] = _("span", {
                    class: "embed:hidden embed:sm:inline-block embed:sm:align-middle embed:sm:h-screen",
                    "aria-hidden": "true"
                  }, "​", -1)),
                  q(s, {
                    as: "template",
                    enter: "embed:ease-out embed:duration-300",
                    "enter-from": "embed:opacity-0 embed:translate-y-4 embed:sm:translate-y-0 embed:sm:scale-95",
                    "enter-to": "embed:opacity-100 embed:translate-y-0 embed:sm:scale-100",
                    leave: "embed:ease-in embed:duration-200",
                    "leave-from": "embed:opacity-100 embed:translate-y-0 embed:sm:scale-100",
                    "leave-to": "embed:opacity-0 embed:translate-y-4 embed:sm:translate-y-0 embed:sm:scale-95"
                  }, {
                    default: ne(() => [
                      _("div", H6, [
                        Fs((S(), T("div", q6, [
                          e.state.hasTag("loading") ? (S(), T("div", W6, [
                            _("div", G6, [
                              t[5] || (t[5] = _("div", { class: "embed:h-10 embed:w-3/4 embed:mx-auto embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded-md embed:animate-pulse embed:mb-8" }, null, -1)),
                              _("div", K6, [
                                t[2] || (t[2] = _("div", { class: "embed:flex embed:items-stretch embed:min-h-24" }, [
                                  _("div", { class: "embed:h-24 embed:w-28 embed:min-h-[6rem] embed:shrink-0 embed:rounded-lg embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:animate-pulse embed:mr-4" }),
                                  _("div", { class: "embed:flex embed:flex-col embed:text-left embed:w-full embed:justify-between" }, [
                                    _("div", { class: "embed:space-y-2" }, [
                                      _("div", { class: "embed:h-6 embed:w-3/4 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }),
                                      _("div", { class: "embed:h-4 embed:w-full embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }),
                                      _("div", { class: "embed:h-5 embed:w-24 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" })
                                    ]),
                                    _("div", { class: "embed:flex embed:flex-row embed:items-center embed:justify-between embed:mt-2" }, [
                                      _("div", { class: "embed:h-8 embed:w-20 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }),
                                      _("div", { class: "embed:h-4 embed:w-24 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" })
                                    ])
                                  ])
                                ], -1)),
                                t[3] || (t[3] = _("div", { class: "embed:space-y-2" }, [
                                  _("div", { class: "embed:h-6 embed:w-1/4 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }),
                                  _("div", { class: "embed:h-8 embed:w-full embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" })
                                ], -1)),
                                _("div", Y6, [
                                  t[1] || (t[1] = _("div", { class: "embed:h-6 embed:w-1/4 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }, null, -1)),
                                  _("div", X6, [
                                    (S(), T(U, null, wn(3, (g) => _("div", {
                                      key: g,
                                      class: "embed:flex embed:flex-col embed:border-2 embed:border-zinc-200 embed:dark:border-zinc-800 embed:w-28 embed:min-h-[6rem] embed:rounded-lg embed:px-3 embed:py-2 embed:animate-pulse"
                                    }, t[0] || (t[0] = [
                                      _("div", { class: "embed:flex embed:flex-col embed:items-center embed:gap-2" }, [
                                        _("div", { class: "embed:h-8 embed:w-8 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded-full" }),
                                        _("div", { class: "embed:h-4 embed:w-16 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded" }),
                                        _("div", { class: "embed:h-3 embed:w-20 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ]),
                                t[4] || (t[4] = _("div", { class: "embed:h-4 embed:w-2/6 embed:mx-auto embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }, null, -1))
                              ]),
                              t[6] || (t[6] = _("div", { class: "embed:h-10 embed:w-full embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded-md embed:animate-pulse embed:mt-6" }, null, -1))
                            ])
                          ])) : (S(), T("div", Z6, [
                            e.stepComponent ? (S(), ke(cr, {
                              key: 0,
                              "enter-active-class": "embed:duration-500 embed:ease-out",
                              "enter-from-class": "embed:opacity-0 embed:-translate-x-full embed:md:translate-x-full",
                              "enter-to-class": "embed:opacity-100 embed:translate-x-0",
                              "leave-active-class": "embed:duration-500 embed:ease-out",
                              "leave-from-class": "embed:opacity-100 embed:translate-x-0",
                              "leave-to-class": "embed:opacity-0 embed:-translate-x-full",
                              mode: "out-in"
                            }, {
                              default: ne(() => [
                                (S(), ke(ch(e.stepComponent), { class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-lg embed:shadow-zinc-400 embed:shadow-md embed:dark:shadow-black embed:overflow-hidden embed:border-zinc-300 embed:dark:border-black embed:border" }))
                              ]),
                              _: 1
                            })) : e.state.matches("invoice_processed") ? (S(), T("div", J6, [
                              q(l),
                              q(d)
                            ])) : e.state.matches("error") ? (S(), ke(c, {
                              key: 2,
                              class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-lg embed:shadow-zinc-400 embed:shadow-md embed:dark:shadow-black embed:overflow-hidden embed:border-zinc-300 embed:dark:border-black embed:border",
                              title: e.isOutOfStock ? "Out of Stock" : "Whoops",
                              message: e.errorMessage
                            }, {
                              default: ne(() => [
                                q(u, { class: "embed:h-24 embed:w-24 embed:text-zinc-600" })
                              ]),
                              _: 1
                            }, 8, ["title", "message"])) : Q("", !0)
                          ]))
                        ])), [
                          [p, () => e.send("CLOSE")]
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ], 2)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["open"])
    ]),
    _: 1
  }, 8, ["show"]);
}
const e5 = /* @__PURE__ */ gt(U6, [["render", Q6]]);
function t5(e, t) {
  var d, u, c, f;
  const n = Document.prototype.getElementById, r = t || ((d = e.shadowRoot) == null ? void 0 : d.children[0]);
  if (!r) return;
  const i = `headlessui-portal-root-${Math.random().toString(36).substring(2, 11)}`;
  Document.prototype.getElementById = function(m) {
    if (m === "headlessui-portal-root") {
      let h = r.querySelector(`#${i}`);
      if (h) return h;
      const p = document.createElement("div");
      return p.id = i, p.setAttribute("data-headlessui-portal-root", "true"), r.appendChild(p), p;
    }
    return n.call(this, m);
  };
  const o = (u = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement")) == null ? void 0 : u.get;
  o && Object.defineProperty(Document.prototype, "activeElement", {
    get() {
      var h;
      const m = o.call(document);
      return m === e && ((h = e.shadowRoot) == null ? void 0 : h.activeElement) || m;
    }
  });
  const a = (c = Object.getOwnPropertyDescriptor(Event.prototype, "target")) == null ? void 0 : c.get;
  a && Object.defineProperty(Event.prototype, "target", {
    get() {
      const m = a.call(this), h = this.composedPath ? this.composedPath() : [];
      return m === e && h.length > 0 ? h[0] : m;
    }
  });
  const s = (f = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget")) == null ? void 0 : f.get;
  s && Object.defineProperty(Event.prototype, "currentTarget", {
    get() {
      const m = s.call(this);
      if (m === e) {
        const h = this.composedPath ? this.composedPath() : [];
        for (const p of h)
          if (p !== e && p instanceof Element)
            return p;
      }
      return m;
    }
  });
  const l = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function(m) {
    if (this.closest && this.closest("[data-headlessui-portal-root]")) {
      l.call(this, m), document.activeElement !== e && e.focus({ preventScroll: !0 });
      return;
    }
    l.call(this, m);
  };
}
const n5 = {
  mounted(e, t) {
    e.clickOutsideEvent = (n) => {
      e === n.target || e.contains(n.target) || t.value(n);
    }, document.addEventListener("click", e.clickOutsideEvent, !0);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent, !0);
  }
}, Cr = A1(e5);
Cr.component("Listbox", uf);
Cr.component("ListboxButton", cf);
Cr.component("ListboxOptions", ff);
Cr.component("ListboxOption", mf);
Cr.directive("click-outside", n5);
const An = document.createElement("div");
An.id = `checkout-embed-${Math.random().toString(36).substr(2, 9)}`;
An.style.cssText = `
  position: fixed;
  z-index: 2147483647;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  display: block;
  visibility: visible;
  backface-visibility: hidden;
  transform: translateZ(0);
`;
const ra = An.attachShadow({ mode: "open" }), Ym = document.createElement("style");
Ym.textContent = `
  :host {
    all: initial;
    contain: content;
  }
  * {
    box-sizing: border-box;
  }
  #portal-target {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
ra.appendChild(Ym);
const kl = document.createElement("link");
kl.rel = "stylesheet";
kl.href = "https://cdn.sell.app/embed/style.css";
ra.appendChild(kl);
const _l = document.createElement("div");
_l.id = "portal-target";
ra.appendChild(_l);
const _i = document.createElement("div");
_i.style.pointerEvents = "auto";
ra.appendChild(_i);
t5(An, _l);
document.body.appendChild(An);
const Lt = Cr.mount(_i);
window.refreshCheckoutEmbed = (e) => {
  const t = window.checkoutEmbeds || [];
  if (e) {
    const n = t.find((r) => r.id === e);
    n == null || n.refresh();
  } else
    t.forEach((n) => n.refresh());
};
const r5 = new MutationObserver((e) => {
  e.some(
    (n) => n.type === "childList" && (n.addedNodes.length > 0 || n.removedNodes.length > 0)
  ) && setTimeout(() => {
    window.refreshCheckoutEmbed();
  }, 100);
});
r5.observe(document.body, {
  childList: !0,
  // Watch for changes to direct children
  subtree: !0,
  // Watch for changes in the entire subtree
  attributes: !1,
  // We don't need to watch attributes
  characterData: !1
  // We don't need to watch text content
});
const Xm = () => {
  var e, t, n, r, i;
  try {
    if ((t = (e = Lt.$) == null ? void 0 : e.exposed) != null && t.isOpen && Lt.$.exposed.isOpen.value) {
      An.style.pointerEvents = "auto";
      const o = (i = (r = (n = Lt.$) == null ? void 0 : n.exposed) == null ? void 0 : r.context) == null ? void 0 : i.position;
      if (o) {
        const a = o.top + o.height / 2, s = window.innerHeight / 2, l = Math.max(0, a - s), d = window.scrollY || window.pageYOffset;
        Math.abs(d - l) > 50 && window.scrollTo({
          top: l,
          behavior: "smooth"
        });
      }
    } else
      An.style.pointerEvents = "none";
  } catch (o) {
    console.error("Error in modal visibility handler:", o);
  }
};
setInterval(Xm, 500);
var yu, wu, xu;
if ((wu = (yu = Lt.$) == null ? void 0 : yu.exposed) != null && wu.isOpen) {
  const e = (xu = Object.getOwnPropertyDescriptor(Lt.$.exposed.isOpen, "value")) == null ? void 0 : xu.get;
  e && Object.defineProperty(Lt.$.exposed.isOpen, "value", {
    get() {
      const t = e.call(this);
      return setTimeout(Xm, 0), t;
    }
  });
}
let Da = !1;
const Ss = new MutationObserver(() => {
  var e, t;
  !Da && Lt && typeof ((t = (e = Lt.$) == null ? void 0 : e.exposed) == null ? void 0 : t.reInit) == "function" && (Ss.disconnect(), Da = !0, Lt.$.exposed.reInit(), setTimeout(() => {
    Da = !1, Ss.observe(_i, { childList: !0, subtree: !0, attributes: !0, characterData: !0 });
  }, 500));
});
Ss.observe(_i, { childList: !0, subtree: !0, attributes: !0, characterData: !0 });
window.checkoutEmbeds = window.checkoutEmbeds || [];
window.checkoutEmbeds.push({
  id: An.id,
  instance: Lt,
  refresh: () => {
    var e, t, n;
    return (n = (t = (e = Lt.$) == null ? void 0 : e.exposed) == null ? void 0 : t.reInit) == null ? void 0 : n.call(t);
  }
});
const i5 = history.pushState;
history.pushState = function() {
  const e = i5.apply(history, arguments);
  return window.dispatchEvent(new Event("locationchange")), e;
};
window.addEventListener("popstate", () => {
  window.dispatchEvent(new Event("locationchange"));
});
window.addEventListener("locationchange", () => {
  window.refreshCheckoutEmbed();
});
