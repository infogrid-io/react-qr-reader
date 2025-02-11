import * as t from 'react';
import { useRef as e, useEffect as r } from 'react';
var n,
  o,
  i =
    ((n = function (t, e) {
      return (
        (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        n(t, e)
      );
    }),
    function (t, e) {
      function r() {
        this.constructor = t;
      }
      n(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }),
  a = (function (t) {
    function e(e) {
      var r,
        n,
        o,
        i = this.constructor,
        a = t.call(this, e) || this;
      return (
        Object.defineProperty(a, 'name', {
          value: i.name,
          enumerable: !1,
          configurable: !0,
        }),
        (r = a),
        (n = i.prototype),
        (o = Object.setPrototypeOf) ? o(r, n) : (r.__proto__ = n),
        (function (t, e) {
          void 0 === e && (e = t.constructor);
          var r = Error.captureStackTrace;
          r && r(t, e);
        })(a),
        a
      );
    }
    return i(e, t), e;
  })(Error),
  u = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  s = (function (t) {
    function e(e) {
      void 0 === e && (e = void 0);
      var r = t.call(this, e) || this;
      return (r.message = e), r;
    }
    return (
      u(e, t),
      (e.prototype.getKind = function () {
        return this.constructor.kind;
      }),
      (e.kind = 'Exception'),
      e
    );
  })(a),
  c = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  f = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return c(e, t), (e.kind = 'ArgumentException'), e;
  })(s),
  h = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  l = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return h(e, t), (e.kind = 'IllegalArgumentException'), e;
  })(s),
  d = (function () {
    function t(t) {
      if (((this.binarizer = t), null === t))
        throw new l('Binarizer must be non-null.');
    }
    return (
      (t.prototype.getWidth = function () {
        return this.binarizer.getWidth();
      }),
      (t.prototype.getHeight = function () {
        return this.binarizer.getHeight();
      }),
      (t.prototype.getBlackRow = function (t, e) {
        return this.binarizer.getBlackRow(t, e);
      }),
      (t.prototype.getBlackMatrix = function () {
        return (
          (null !== this.matrix && void 0 !== this.matrix) ||
            (this.matrix = this.binarizer.getBlackMatrix()),
          this.matrix
        );
      }),
      (t.prototype.isCropSupported = function () {
        return this.binarizer.getLuminanceSource().isCropSupported();
      }),
      (t.prototype.crop = function (e, r, n, o) {
        var i = this.binarizer.getLuminanceSource().crop(e, r, n, o);
        return new t(this.binarizer.createBinarizer(i));
      }),
      (t.prototype.isRotateSupported = function () {
        return this.binarizer.getLuminanceSource().isRotateSupported();
      }),
      (t.prototype.rotateCounterClockwise = function () {
        var e = this.binarizer.getLuminanceSource().rotateCounterClockwise();
        return new t(this.binarizer.createBinarizer(e));
      }),
      (t.prototype.rotateCounterClockwise45 = function () {
        var e = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
        return new t(this.binarizer.createBinarizer(e));
      }),
      (t.prototype.toString = function () {
        try {
          return this.getBlackMatrix().toString();
        } catch (t) {
          return '';
        }
      }),
      t
    );
  })(),
  p = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  g = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      p(e, t),
      (e.getChecksumInstance = function () {
        return new e();
      }),
      (e.kind = 'ChecksumException'),
      e
    );
  })(s),
  y = (function () {
    function t(t) {
      this.source = t;
    }
    return (
      (t.prototype.getLuminanceSource = function () {
        return this.source;
      }),
      (t.prototype.getWidth = function () {
        return this.source.getWidth();
      }),
      (t.prototype.getHeight = function () {
        return this.source.getHeight();
      }),
      t
    );
  })(),
  w = (function () {
    function t() {}
    return (
      (t.arraycopy = function (t, e, r, n, o) {
        for (; o--; ) r[n++] = t[e++];
      }),
      (t.currentTimeMillis = function () {
        return Date.now();
      }),
      t
    );
  })(),
  _ = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  v = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return _(e, t), (e.kind = 'IndexOutOfBoundsException'), e;
  })(s),
  m = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  A = (function (t) {
    function e(e, r) {
      void 0 === e && (e = void 0), void 0 === r && (r = void 0);
      var n = t.call(this, r) || this;
      return (n.index = e), (n.message = r), n;
    }
    return m(e, t), (e.kind = 'ArrayIndexOutOfBoundsException'), e;
  })(v),
  E = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  C = (function () {
    function t() {}
    return (
      (t.fill = function (t, e) {
        for (var r = 0, n = t.length; r < n; r++) t[r] = e;
      }),
      (t.fillWithin = function (e, r, n, o) {
        t.rangeCheck(e.length, r, n);
        for (var i = r; i < n; i++) e[i] = o;
      }),
      (t.rangeCheck = function (t, e, r) {
        if (e > r) throw new l('fromIndex(' + e + ') > toIndex(' + r + ')');
        if (e < 0) throw new A(e);
        if (r > t) throw new A(r);
      }),
      (t.asList = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return t;
      }),
      (t.create = function (t, e, r) {
        return Array.from({ length: t }).map(function (t) {
          return Array.from({ length: e }).fill(r);
        });
      }),
      (t.createInt32Array = function (t, e, r) {
        return Array.from({ length: t }).map(function (t) {
          return Int32Array.from({ length: e }).fill(r);
        });
      }),
      (t.equals = function (t, e) {
        if (!t) return !1;
        if (!e) return !1;
        if (!t.length) return !1;
        if (!e.length) return !1;
        if (t.length !== e.length) return !1;
        for (var r = 0, n = t.length; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }),
      (t.hashCode = function (t) {
        var e, r;
        if (null === t) return 0;
        var n = 1;
        try {
          for (var o = E(t), i = o.next(); !i.done; i = o.next()) {
            n = 31 * n + i.value;
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return n;
      }),
      (t.fillUint8Array = function (t, e) {
        for (var r = 0; r !== t.length; r++) t[r] = e;
      }),
      (t.copyOf = function (t, e) {
        return t.slice(0, e);
      }),
      (t.copyOfUint8Array = function (t, e) {
        if (t.length <= e) {
          var r = new Uint8Array(e);
          return r.set(t), r;
        }
        return t.slice(0, e);
      }),
      (t.copyOfRange = function (t, e, r) {
        var n = r - e,
          o = new Int32Array(n);
        return w.arraycopy(t, e, o, 0, n), o;
      }),
      (t.binarySearch = function (e, r, n) {
        void 0 === n && (n = t.numberComparator);
        for (var o = 0, i = e.length - 1; o <= i; ) {
          var a = (i + o) >> 1,
            u = n(r, e[a]);
          if (u > 0) o = a + 1;
          else {
            if (!(u < 0)) return a;
            i = a - 1;
          }
        }
        return -o - 1;
      }),
      (t.numberComparator = function (t, e) {
        return t - e;
      }),
      t
    );
  })(),
  I = (function () {
    function t() {}
    return (
      (t.numberOfTrailingZeros = function (t) {
        var e;
        if (0 === t) return 32;
        var r = 31;
        return (
          0 !== (e = t << 16) && ((r -= 16), (t = e)),
          0 !== (e = t << 8) && ((r -= 8), (t = e)),
          0 !== (e = t << 4) && ((r -= 4), (t = e)),
          0 !== (e = t << 2) && ((r -= 2), (t = e)),
          r - ((t << 1) >>> 31)
        );
      }),
      (t.numberOfLeadingZeros = function (t) {
        if (0 === t) return 32;
        var e = 1;
        return (
          t >>> 16 == 0 && ((e += 16), (t <<= 16)),
          t >>> 24 == 0 && ((e += 8), (t <<= 8)),
          t >>> 28 == 0 && ((e += 4), (t <<= 4)),
          t >>> 30 == 0 && ((e += 2), (t <<= 2)),
          (e -= t >>> 31)
        );
      }),
      (t.toHexString = function (t) {
        return t.toString(16);
      }),
      (t.toBinaryString = function (t) {
        return String(parseInt(String(t), 2));
      }),
      (t.bitCount = function (t) {
        return (
          (t =
            ((t =
              (858993459 & (t -= (t >>> 1) & 1431655765)) +
              ((t >>> 2) & 858993459)) +
              (t >>> 4)) &
            252645135),
          (t += t >>> 8),
          63 & (t += t >>> 16)
        );
      }),
      (t.truncDivision = function (t, e) {
        return Math.trunc(t / e);
      }),
      (t.parseInt = function (t, e) {
        return void 0 === e && (e = void 0), parseInt(t, e);
      }),
      (t.MIN_VALUE_32_BITS = -2147483648),
      (t.MAX_VALUE = Number.MAX_SAFE_INTEGER),
      t
    );
  })(),
  S = (function () {
    function t(e, r) {
      void 0 === e
        ? ((this.size = 0), (this.bits = new Int32Array(1)))
        : ((this.size = e), (this.bits = null == r ? t.makeArray(e) : r));
    }
    return (
      (t.prototype.getSize = function () {
        return this.size;
      }),
      (t.prototype.getSizeInBytes = function () {
        return Math.floor((this.size + 7) / 8);
      }),
      (t.prototype.ensureCapacity = function (e) {
        if (e > 32 * this.bits.length) {
          var r = t.makeArray(e);
          w.arraycopy(this.bits, 0, r, 0, this.bits.length), (this.bits = r);
        }
      }),
      (t.prototype.get = function (t) {
        return 0 != (this.bits[Math.floor(t / 32)] & (1 << (31 & t)));
      }),
      (t.prototype.set = function (t) {
        this.bits[Math.floor(t / 32)] |= 1 << (31 & t);
      }),
      (t.prototype.flip = function (t) {
        this.bits[Math.floor(t / 32)] ^= 1 << (31 & t);
      }),
      (t.prototype.getNextSet = function (t) {
        var e = this.size;
        if (t >= e) return e;
        var r = this.bits,
          n = Math.floor(t / 32),
          o = r[n];
        o &= ~((1 << (31 & t)) - 1);
        for (var i = r.length; 0 === o; ) {
          if (++n === i) return e;
          o = r[n];
        }
        var a = 32 * n + I.numberOfTrailingZeros(o);
        return a > e ? e : a;
      }),
      (t.prototype.getNextUnset = function (t) {
        var e = this.size;
        if (t >= e) return e;
        var r = this.bits,
          n = Math.floor(t / 32),
          o = ~r[n];
        o &= ~((1 << (31 & t)) - 1);
        for (var i = r.length; 0 === o; ) {
          if (++n === i) return e;
          o = ~r[n];
        }
        var a = 32 * n + I.numberOfTrailingZeros(o);
        return a > e ? e : a;
      }),
      (t.prototype.setBulk = function (t, e) {
        this.bits[Math.floor(t / 32)] = e;
      }),
      (t.prototype.setRange = function (t, e) {
        if (e < t || t < 0 || e > this.size) throw new l();
        if (e !== t) {
          e--;
          for (
            var r = Math.floor(t / 32),
              n = Math.floor(e / 32),
              o = this.bits,
              i = r;
            i <= n;
            i++
          ) {
            var a = (2 << (i < n ? 31 : 31 & e)) - (1 << (i > r ? 0 : 31 & t));
            o[i] |= a;
          }
        }
      }),
      (t.prototype.clear = function () {
        for (var t = this.bits.length, e = this.bits, r = 0; r < t; r++)
          e[r] = 0;
      }),
      (t.prototype.isRange = function (t, e, r) {
        if (e < t || t < 0 || e > this.size) throw new l();
        if (e === t) return !0;
        e--;
        for (
          var n = Math.floor(t / 32),
            o = Math.floor(e / 32),
            i = this.bits,
            a = n;
          a <= o;
          a++
        ) {
          var u =
            ((2 << (a < o ? 31 : 31 & e)) - (1 << (a > n ? 0 : 31 & t))) &
            4294967295;
          if ((i[a] & u) !== (r ? u : 0)) return !1;
        }
        return !0;
      }),
      (t.prototype.appendBit = function (t) {
        this.ensureCapacity(this.size + 1),
          t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)),
          this.size++;
      }),
      (t.prototype.appendBits = function (t, e) {
        if (e < 0 || e > 32) throw new l('Num bits must be between 0 and 32');
        this.ensureCapacity(this.size + e);
        for (var r = e; r > 0; r--) this.appendBit(1 == ((t >> (r - 1)) & 1));
      }),
      (t.prototype.appendBitArray = function (t) {
        var e = t.size;
        this.ensureCapacity(this.size + e);
        for (var r = 0; r < e; r++) this.appendBit(t.get(r));
      }),
      (t.prototype.xor = function (t) {
        if (this.size !== t.size) throw new l("Sizes don't match");
        for (var e = this.bits, r = 0, n = e.length; r < n; r++)
          e[r] ^= t.bits[r];
      }),
      (t.prototype.toBytes = function (t, e, r, n) {
        for (var o = 0; o < n; o++) {
          for (var i = 0, a = 0; a < 8; a++)
            this.get(t) && (i |= 1 << (7 - a)), t++;
          e[r + o] = i;
        }
      }),
      (t.prototype.getBitArray = function () {
        return this.bits;
      }),
      (t.prototype.reverse = function () {
        for (
          var t = new Int32Array(this.bits.length),
            e = Math.floor((this.size - 1) / 32),
            r = e + 1,
            n = this.bits,
            o = 0;
          o < r;
          o++
        ) {
          var i = n[o];
          (i =
            (((i =
              (((i =
                (((i =
                  (((i = ((i >> 1) & 1431655765) | ((1431655765 & i) << 1)) >>
                    2) &
                    858993459) |
                  ((858993459 & i) << 2)) >>
                  4) &
                  252645135) |
                ((252645135 & i) << 4)) >>
                8) &
                16711935) |
              ((16711935 & i) << 8)) >>
              16) &
              65535) |
            ((65535 & i) << 16)),
            (t[e - o] = i);
        }
        if (this.size !== 32 * r) {
          var a = 32 * r - this.size,
            u = t[0] >>> a;
          for (o = 1; o < r; o++) {
            var s = t[o];
            (u |= s << (32 - a)), (t[o - 1] = u), (u = s >>> a);
          }
          t[r - 1] = u;
        }
        this.bits = t;
      }),
      (t.makeArray = function (t) {
        return new Int32Array(Math.floor((t + 31) / 32));
      }),
      (t.prototype.equals = function (e) {
        if (!(e instanceof t)) return !1;
        var r = e;
        return this.size === r.size && C.equals(this.bits, r.bits);
      }),
      (t.prototype.hashCode = function () {
        return 31 * this.size + C.hashCode(this.bits);
      }),
      (t.prototype.toString = function () {
        for (var t = '', e = 0, r = this.size; e < r; e++)
          0 == (7 & e) && (t += ' '), (t += this.get(e) ? 'X' : '.');
        return t;
      }),
      (t.prototype.clone = function () {
        return new t(this.size, this.bits.slice());
      }),
      t
    );
  })();
!(function (t) {
  (t[(t.OTHER = 0)] = 'OTHER'),
    (t[(t.PURE_BARCODE = 1)] = 'PURE_BARCODE'),
    (t[(t.POSSIBLE_FORMATS = 2)] = 'POSSIBLE_FORMATS'),
    (t[(t.TRY_HARDER = 3)] = 'TRY_HARDER'),
    (t[(t.CHARACTER_SET = 4)] = 'CHARACTER_SET'),
    (t[(t.ALLOWED_LENGTHS = 5)] = 'ALLOWED_LENGTHS'),
    (t[(t.ASSUME_CODE_39_CHECK_DIGIT = 6)] = 'ASSUME_CODE_39_CHECK_DIGIT'),
    (t[(t.ASSUME_GS1 = 7)] = 'ASSUME_GS1'),
    (t[(t.RETURN_CODABAR_START_END = 8)] = 'RETURN_CODABAR_START_END'),
    (t[(t.NEED_RESULT_POINT_CALLBACK = 9)] = 'NEED_RESULT_POINT_CALLBACK'),
    (t[(t.ALLOWED_EAN_EXTENSIONS = 10)] = 'ALLOWED_EAN_EXTENSIONS');
})(o || (o = {}));
var O,
  T = o,
  b = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  R = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      b(e, t),
      (e.getFormatInstance = function () {
        return new e();
      }),
      (e.kind = 'FormatException'),
      e
    );
  })(s),
  N = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  };
!(function (t) {
  (t[(t.Cp437 = 0)] = 'Cp437'),
    (t[(t.ISO8859_1 = 1)] = 'ISO8859_1'),
    (t[(t.ISO8859_2 = 2)] = 'ISO8859_2'),
    (t[(t.ISO8859_3 = 3)] = 'ISO8859_3'),
    (t[(t.ISO8859_4 = 4)] = 'ISO8859_4'),
    (t[(t.ISO8859_5 = 5)] = 'ISO8859_5'),
    (t[(t.ISO8859_6 = 6)] = 'ISO8859_6'),
    (t[(t.ISO8859_7 = 7)] = 'ISO8859_7'),
    (t[(t.ISO8859_8 = 8)] = 'ISO8859_8'),
    (t[(t.ISO8859_9 = 9)] = 'ISO8859_9'),
    (t[(t.ISO8859_10 = 10)] = 'ISO8859_10'),
    (t[(t.ISO8859_11 = 11)] = 'ISO8859_11'),
    (t[(t.ISO8859_13 = 12)] = 'ISO8859_13'),
    (t[(t.ISO8859_14 = 13)] = 'ISO8859_14'),
    (t[(t.ISO8859_15 = 14)] = 'ISO8859_15'),
    (t[(t.ISO8859_16 = 15)] = 'ISO8859_16'),
    (t[(t.SJIS = 16)] = 'SJIS'),
    (t[(t.Cp1250 = 17)] = 'Cp1250'),
    (t[(t.Cp1251 = 18)] = 'Cp1251'),
    (t[(t.Cp1252 = 19)] = 'Cp1252'),
    (t[(t.Cp1256 = 20)] = 'Cp1256'),
    (t[(t.UnicodeBigUnmarked = 21)] = 'UnicodeBigUnmarked'),
    (t[(t.UTF8 = 22)] = 'UTF8'),
    (t[(t.ASCII = 23)] = 'ASCII'),
    (t[(t.Big5 = 24)] = 'Big5'),
    (t[(t.GB18030 = 25)] = 'GB18030'),
    (t[(t.EUC_KR = 26)] = 'EUC_KR');
})(O || (O = {}));
var D,
  P = (function () {
    function t(e, r, n) {
      for (var o, i, a = [], u = 3; u < arguments.length; u++)
        a[u - 3] = arguments[u];
      (this.valueIdentifier = e),
        (this.name = n),
        (this.values = 'number' == typeof r ? Int32Array.from([r]) : r),
        (this.otherEncodingNames = a),
        t.VALUE_IDENTIFIER_TO_ECI.set(e, this),
        t.NAME_TO_ECI.set(n, this);
      for (var s = this.values, c = 0, f = s.length; c !== f; c++) {
        var h = s[c];
        t.VALUES_TO_ECI.set(h, this);
      }
      try {
        for (var l = N(a), d = l.next(); !d.done; d = l.next()) {
          var p = d.value;
          t.NAME_TO_ECI.set(p, this);
        }
      } catch (t) {
        o = { error: t };
      } finally {
        try {
          d && !d.done && (i = l.return) && i.call(l);
        } finally {
          if (o) throw o.error;
        }
      }
    }
    return (
      (t.prototype.getValueIdentifier = function () {
        return this.valueIdentifier;
      }),
      (t.prototype.getName = function () {
        return this.name;
      }),
      (t.prototype.getValue = function () {
        return this.values[0];
      }),
      (t.getCharacterSetECIByValue = function (e) {
        if (e < 0 || e >= 900) throw new R('incorect value');
        var r = t.VALUES_TO_ECI.get(e);
        if (void 0 === r) throw new R('incorect value');
        return r;
      }),
      (t.getCharacterSetECIByName = function (e) {
        var r = t.NAME_TO_ECI.get(e);
        if (void 0 === r) throw new R('incorect value');
        return r;
      }),
      (t.prototype.equals = function (e) {
        if (!(e instanceof t)) return !1;
        var r = e;
        return this.getName() === r.getName();
      }),
      (t.VALUE_IDENTIFIER_TO_ECI = new Map()),
      (t.VALUES_TO_ECI = new Map()),
      (t.NAME_TO_ECI = new Map()),
      (t.Cp437 = new t(O.Cp437, Int32Array.from([0, 2]), 'Cp437')),
      (t.ISO8859_1 = new t(
        O.ISO8859_1,
        Int32Array.from([1, 3]),
        'ISO-8859-1',
        'ISO88591',
        'ISO8859_1'
      )),
      (t.ISO8859_2 = new t(
        O.ISO8859_2,
        4,
        'ISO-8859-2',
        'ISO88592',
        'ISO8859_2'
      )),
      (t.ISO8859_3 = new t(
        O.ISO8859_3,
        5,
        'ISO-8859-3',
        'ISO88593',
        'ISO8859_3'
      )),
      (t.ISO8859_4 = new t(
        O.ISO8859_4,
        6,
        'ISO-8859-4',
        'ISO88594',
        'ISO8859_4'
      )),
      (t.ISO8859_5 = new t(
        O.ISO8859_5,
        7,
        'ISO-8859-5',
        'ISO88595',
        'ISO8859_5'
      )),
      (t.ISO8859_6 = new t(
        O.ISO8859_6,
        8,
        'ISO-8859-6',
        'ISO88596',
        'ISO8859_6'
      )),
      (t.ISO8859_7 = new t(
        O.ISO8859_7,
        9,
        'ISO-8859-7',
        'ISO88597',
        'ISO8859_7'
      )),
      (t.ISO8859_8 = new t(
        O.ISO8859_8,
        10,
        'ISO-8859-8',
        'ISO88598',
        'ISO8859_8'
      )),
      (t.ISO8859_9 = new t(
        O.ISO8859_9,
        11,
        'ISO-8859-9',
        'ISO88599',
        'ISO8859_9'
      )),
      (t.ISO8859_10 = new t(
        O.ISO8859_10,
        12,
        'ISO-8859-10',
        'ISO885910',
        'ISO8859_10'
      )),
      (t.ISO8859_11 = new t(
        O.ISO8859_11,
        13,
        'ISO-8859-11',
        'ISO885911',
        'ISO8859_11'
      )),
      (t.ISO8859_13 = new t(
        O.ISO8859_13,
        15,
        'ISO-8859-13',
        'ISO885913',
        'ISO8859_13'
      )),
      (t.ISO8859_14 = new t(
        O.ISO8859_14,
        16,
        'ISO-8859-14',
        'ISO885914',
        'ISO8859_14'
      )),
      (t.ISO8859_15 = new t(
        O.ISO8859_15,
        17,
        'ISO-8859-15',
        'ISO885915',
        'ISO8859_15'
      )),
      (t.ISO8859_16 = new t(
        O.ISO8859_16,
        18,
        'ISO-8859-16',
        'ISO885916',
        'ISO8859_16'
      )),
      (t.SJIS = new t(O.SJIS, 20, 'SJIS', 'Shift_JIS')),
      (t.Cp1250 = new t(O.Cp1250, 21, 'Cp1250', 'windows-1250')),
      (t.Cp1251 = new t(O.Cp1251, 22, 'Cp1251', 'windows-1251')),
      (t.Cp1252 = new t(O.Cp1252, 23, 'Cp1252', 'windows-1252')),
      (t.Cp1256 = new t(O.Cp1256, 24, 'Cp1256', 'windows-1256')),
      (t.UnicodeBigUnmarked = new t(
        O.UnicodeBigUnmarked,
        25,
        'UnicodeBigUnmarked',
        'UTF-16BE',
        'UnicodeBig'
      )),
      (t.UTF8 = new t(O.UTF8, 26, 'UTF8', 'UTF-8')),
      (t.ASCII = new t(
        O.ASCII,
        Int32Array.from([27, 170]),
        'ASCII',
        'US-ASCII'
      )),
      (t.Big5 = new t(O.Big5, 28, 'Big5')),
      (t.GB18030 = new t(O.GB18030, 29, 'GB18030', 'GB2312', 'EUC_CN', 'GBK')),
      (t.EUC_KR = new t(O.EUC_KR, 30, 'EUC_KR', 'EUC-KR')),
      t
    );
  })(),
  M = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  B = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return M(e, t), (e.kind = 'UnsupportedOperationException'), e;
  })(s),
  L = (function () {
    function t() {}
    return (
      (t.decode = function (t, e) {
        var r = this.encodingName(e);
        return this.customDecoder
          ? this.customDecoder(t, r)
          : 'undefined' == typeof TextDecoder || this.shouldDecodeOnFallback(r)
          ? this.decodeFallback(t, r)
          : new TextDecoder(r).decode(t);
      }),
      (t.shouldDecodeOnFallback = function (e) {
        return !t.isBrowser() && 'ISO-8859-1' === e;
      }),
      (t.encode = function (t, e) {
        var r = this.encodingName(e);
        return this.customEncoder
          ? this.customEncoder(t, r)
          : 'undefined' == typeof TextEncoder
          ? this.encodeFallback(t)
          : new TextEncoder().encode(t);
      }),
      (t.isBrowser = function () {
        return (
          'undefined' != typeof window &&
          '[object Window]' === {}.toString.call(window)
        );
      }),
      (t.encodingName = function (t) {
        return 'string' == typeof t ? t : t.getName();
      }),
      (t.encodingCharacterSet = function (t) {
        return t instanceof P ? t : P.getCharacterSetECIByName(t);
      }),
      (t.decodeFallback = function (e, r) {
        var n = this.encodingCharacterSet(r);
        if (t.isDecodeFallbackSupported(n)) {
          for (var o = '', i = 0, a = e.length; i < a; i++) {
            var u = e[i].toString(16);
            u.length < 2 && (u = '0' + u), (o += '%' + u);
          }
          return decodeURIComponent(o);
        }
        if (n.equals(P.UnicodeBigUnmarked))
          return String.fromCharCode.apply(null, new Uint16Array(e.buffer));
        throw new B(
          'Encoding ' + this.encodingName(r) + ' not supported by fallback.'
        );
      }),
      (t.isDecodeFallbackSupported = function (t) {
        return t.equals(P.UTF8) || t.equals(P.ISO8859_1) || t.equals(P.ASCII);
      }),
      (t.encodeFallback = function (t) {
        for (
          var e = btoa(unescape(encodeURIComponent(t))).split(''),
            r = [],
            n = 0;
          n < e.length;
          n++
        )
          r.push(e[n].charCodeAt(0));
        return new Uint8Array(r);
      }),
      t
    );
  })(),
  F = (function () {
    function t() {}
    return (
      (t.castAsNonUtf8Char = function (t, e) {
        void 0 === e && (e = null);
        var r = e ? e.getName() : this.ISO88591;
        return L.decode(new Uint8Array([t]), r);
      }),
      (t.guessEncoding = function (e, r) {
        if (null != r && void 0 !== r.get(T.CHARACTER_SET))
          return r.get(T.CHARACTER_SET).toString();
        for (
          var n = e.length,
            o = !0,
            i = !0,
            a = !0,
            u = 0,
            s = 0,
            c = 0,
            f = 0,
            h = 0,
            l = 0,
            d = 0,
            p = 0,
            g = 0,
            y = 0,
            w = 0,
            _ = e.length > 3 && 239 === e[0] && 187 === e[1] && 191 === e[2],
            v = 0;
          v < n && (o || i || a);
          v++
        ) {
          var m = 255 & e[v];
          a &&
            (u > 0
              ? 0 == (128 & m)
                ? (a = !1)
                : u--
              : 0 != (128 & m) &&
                (0 == (64 & m)
                  ? (a = !1)
                  : (u++,
                    0 == (32 & m)
                      ? s++
                      : (u++,
                        0 == (16 & m)
                          ? c++
                          : (u++, 0 == (8 & m) ? f++ : (a = !1)))))),
            o &&
              (m > 127 && m < 160
                ? (o = !1)
                : m > 159 && (m < 192 || 215 === m || 247 === m) && w++),
            i &&
              (h > 0
                ? m < 64 || 127 === m || m > 252
                  ? (i = !1)
                  : h--
                : 128 === m || 160 === m || m > 239
                ? (i = !1)
                : m > 160 && m < 224
                ? (l++, (p = 0), ++d > g && (g = d))
                : m > 127
                ? (h++, (d = 0), ++p > y && (y = p))
                : ((d = 0), (p = 0)));
        }
        return (
          a && u > 0 && (a = !1),
          i && h > 0 && (i = !1),
          a && (_ || s + c + f > 0)
            ? t.UTF8
            : i && (t.ASSUME_SHIFT_JIS || g >= 3 || y >= 3)
            ? t.SHIFT_JIS
            : o && i
            ? (2 === g && 2 === l) || 10 * w >= n
              ? t.SHIFT_JIS
              : t.ISO88591
            : o
            ? t.ISO88591
            : i
            ? t.SHIFT_JIS
            : a
            ? t.UTF8
            : t.PLATFORM_DEFAULT_ENCODING
        );
      }),
      (t.format = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
        var n = -1;
        function o(t, r, o, i, a, u) {
          if ('%%' === t) return '%';
          if (void 0 !== e[++n]) {
            t = i ? parseInt(i.substr(1)) : void 0;
            var s,
              c = a ? parseInt(a.substr(1)) : void 0;
            switch (u) {
              case 's':
                s = e[n];
                break;
              case 'c':
                s = e[n][0];
                break;
              case 'f':
                s = parseFloat(e[n]).toFixed(t);
                break;
              case 'p':
                s = parseFloat(e[n]).toPrecision(t);
                break;
              case 'e':
                s = parseFloat(e[n]).toExponential(t);
                break;
              case 'x':
                s = parseInt(e[n]).toString(c || 16);
                break;
              case 'd':
                s = parseFloat(parseInt(e[n], c || 10).toPrecision(t)).toFixed(
                  0
                );
            }
            s = 'object' == typeof s ? JSON.stringify(s) : (+s).toString(c);
            for (
              var f = parseInt(o), h = o && o[0] + '' == '0' ? '0' : ' ';
              s.length < f;

            )
              s = void 0 !== r ? s + h : h + s;
            return s;
          }
        }
        var i = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
        return t.replace(i, o);
      }),
      (t.getBytes = function (t, e) {
        return L.encode(t, e);
      }),
      (t.getCharCode = function (t, e) {
        return void 0 === e && (e = 0), t.charCodeAt(e);
      }),
      (t.getCharAt = function (t) {
        return String.fromCharCode(t);
      }),
      (t.SHIFT_JIS = P.SJIS.getName()),
      (t.GB2312 = 'GB2312'),
      (t.ISO88591 = P.ISO8859_1.getName()),
      (t.EUC_JP = 'EUC_JP'),
      (t.UTF8 = P.UTF8.getName()),
      (t.PLATFORM_DEFAULT_ENCODING = t.UTF8),
      (t.ASSUME_SHIFT_JIS = !1),
      t
    );
  })(),
  k = (function () {
    function t(t) {
      void 0 === t && (t = ''), (this.value = t);
    }
    return (
      (t.prototype.enableDecoding = function (t) {
        return (this.encoding = t), this;
      }),
      (t.prototype.append = function (t) {
        return (
          'string' == typeof t
            ? (this.value += t.toString())
            : this.encoding
            ? (this.value += F.castAsNonUtf8Char(t, this.encoding))
            : (this.value += String.fromCharCode(t)),
          this
        );
      }),
      (t.prototype.appendChars = function (t, e, r) {
        for (var n = e; e < e + r; n++) this.append(t[n]);
        return this;
      }),
      (t.prototype.length = function () {
        return this.value.length;
      }),
      (t.prototype.charAt = function (t) {
        return this.value.charAt(t);
      }),
      (t.prototype.deleteCharAt = function (t) {
        this.value = this.value.substr(0, t) + this.value.substring(t + 1);
      }),
      (t.prototype.setCharAt = function (t, e) {
        this.value = this.value.substr(0, t) + e + this.value.substr(t + 1);
      }),
      (t.prototype.substring = function (t, e) {
        return this.value.substring(t, e);
      }),
      (t.prototype.setLengthToZero = function () {
        this.value = '';
      }),
      (t.prototype.toString = function () {
        return this.value;
      }),
      (t.prototype.insert = function (t, e) {
        this.value =
          this.value.substr(0, t) + e + this.value.substr(t + e.length);
      }),
      t
    );
  })(),
  x = (function () {
    function t(t, e, r, n) {
      if (
        ((this.width = t),
        (this.height = e),
        (this.rowSize = r),
        (this.bits = n),
        null == e && (e = t),
        (this.height = e),
        t < 1 || e < 1)
      )
        throw new l('Both dimensions must be greater than 0');
      null == r && (r = Math.floor((t + 31) / 32)),
        (this.rowSize = r),
        null == n && (this.bits = new Int32Array(this.rowSize * this.height));
    }
    return (
      (t.parseFromBooleanArray = function (e) {
        for (
          var r = e.length, n = e[0].length, o = new t(n, r), i = 0;
          i < r;
          i++
        )
          for (var a = e[i], u = 0; u < n; u++) a[u] && o.set(u, i);
        return o;
      }),
      (t.parseFromString = function (e, r, n) {
        if (null === e) throw new l('stringRepresentation cannot be null');
        for (
          var o = new Array(e.length), i = 0, a = 0, u = -1, s = 0, c = 0;
          c < e.length;

        )
          if ('\n' === e.charAt(c) || '\r' === e.charAt(c)) {
            if (i > a) {
              if (-1 === u) u = i - a;
              else if (i - a !== u) throw new l('row lengths do not match');
              (a = i), s++;
            }
            c++;
          } else if (e.substring(c, c + r.length) === r)
            (c += r.length), (o[i] = !0), i++;
          else {
            if (e.substring(c, c + n.length) !== n)
              throw new l('illegal character encountered: ' + e.substring(c));
            (c += n.length), (o[i] = !1), i++;
          }
        if (i > a) {
          if (-1 === u) u = i - a;
          else if (i - a !== u) throw new l('row lengths do not match');
          s++;
        }
        for (var f = new t(u, s), h = 0; h < i; h++)
          o[h] && f.set(Math.floor(h % u), Math.floor(h / u));
        return f;
      }),
      (t.prototype.get = function (t, e) {
        var r = e * this.rowSize + Math.floor(t / 32);
        return 0 != ((this.bits[r] >>> (31 & t)) & 1);
      }),
      (t.prototype.set = function (t, e) {
        var r = e * this.rowSize + Math.floor(t / 32);
        this.bits[r] |= (1 << (31 & t)) & 4294967295;
      }),
      (t.prototype.unset = function (t, e) {
        var r = e * this.rowSize + Math.floor(t / 32);
        this.bits[r] &= ~((1 << (31 & t)) & 4294967295);
      }),
      (t.prototype.flip = function (t, e) {
        var r = e * this.rowSize + Math.floor(t / 32);
        this.bits[r] ^= (1 << (31 & t)) & 4294967295;
      }),
      (t.prototype.xor = function (t) {
        if (
          this.width !== t.getWidth() ||
          this.height !== t.getHeight() ||
          this.rowSize !== t.getRowSize()
        )
          throw new l('input matrix dimensions do not match');
        for (
          var e = new S(Math.floor(this.width / 32) + 1),
            r = this.rowSize,
            n = this.bits,
            o = 0,
            i = this.height;
          o < i;
          o++
        )
          for (
            var a = o * r, u = t.getRow(o, e).getBitArray(), s = 0;
            s < r;
            s++
          )
            n[a + s] ^= u[s];
      }),
      (t.prototype.clear = function () {
        for (var t = this.bits, e = t.length, r = 0; r < e; r++) t[r] = 0;
      }),
      (t.prototype.setRegion = function (t, e, r, n) {
        if (e < 0 || t < 0) throw new l('Left and top must be nonnegative');
        if (n < 1 || r < 1) throw new l('Height and width must be at least 1');
        var o = t + r,
          i = e + n;
        if (i > this.height || o > this.width)
          throw new l('The region must fit inside the matrix');
        for (var a = this.rowSize, u = this.bits, s = e; s < i; s++)
          for (var c = s * a, f = t; f < o; f++)
            u[c + Math.floor(f / 32)] |= (1 << (31 & f)) & 4294967295;
      }),
      (t.prototype.getRow = function (t, e) {
        null == e || e.getSize() < this.width
          ? (e = new S(this.width))
          : e.clear();
        for (var r = this.rowSize, n = this.bits, o = t * r, i = 0; i < r; i++)
          e.setBulk(32 * i, n[o + i]);
        return e;
      }),
      (t.prototype.setRow = function (t, e) {
        w.arraycopy(
          e.getBitArray(),
          0,
          this.bits,
          t * this.rowSize,
          this.rowSize
        );
      }),
      (t.prototype.rotate180 = function () {
        for (
          var t = this.getWidth(),
            e = this.getHeight(),
            r = new S(t),
            n = new S(t),
            o = 0,
            i = Math.floor((e + 1) / 2);
          o < i;
          o++
        )
          (r = this.getRow(o, r)),
            (n = this.getRow(e - 1 - o, n)),
            r.reverse(),
            n.reverse(),
            this.setRow(o, n),
            this.setRow(e - 1 - o, r);
      }),
      (t.prototype.getEnclosingRectangle = function () {
        for (
          var t = this.width,
            e = this.height,
            r = this.rowSize,
            n = this.bits,
            o = t,
            i = e,
            a = -1,
            u = -1,
            s = 0;
          s < e;
          s++
        )
          for (var c = 0; c < r; c++) {
            var f = n[s * r + c];
            if (0 !== f) {
              if ((s < i && (i = s), s > u && (u = s), 32 * c < o)) {
                for (var h = 0; 0 == ((f << (31 - h)) & 4294967295); ) h++;
                32 * c + h < o && (o = 32 * c + h);
              }
              if (32 * c + 31 > a) {
                for (h = 31; f >>> h == 0; ) h--;
                32 * c + h > a && (a = 32 * c + h);
              }
            }
          }
        return a < o || u < i
          ? null
          : Int32Array.from([o, i, a - o + 1, u - i + 1]);
      }),
      (t.prototype.getTopLeftOnBit = function () {
        for (
          var t = this.rowSize, e = this.bits, r = 0;
          r < e.length && 0 === e[r];

        )
          r++;
        if (r === e.length) return null;
        for (
          var n = r / t, o = (r % t) * 32, i = e[r], a = 0;
          0 == ((i << (31 - a)) & 4294967295);

        )
          a++;
        return (o += a), Int32Array.from([o, n]);
      }),
      (t.prototype.getBottomRightOnBit = function () {
        for (
          var t = this.rowSize, e = this.bits, r = e.length - 1;
          r >= 0 && 0 === e[r];

        )
          r--;
        if (r < 0) return null;
        for (
          var n = Math.floor(r / t),
            o = 32 * Math.floor(r % t),
            i = e[r],
            a = 31;
          i >>> a == 0;

        )
          a--;
        return (o += a), Int32Array.from([o, n]);
      }),
      (t.prototype.getWidth = function () {
        return this.width;
      }),
      (t.prototype.getHeight = function () {
        return this.height;
      }),
      (t.prototype.getRowSize = function () {
        return this.rowSize;
      }),
      (t.prototype.equals = function (e) {
        if (!(e instanceof t)) return !1;
        var r = e;
        return (
          this.width === r.width &&
          this.height === r.height &&
          this.rowSize === r.rowSize &&
          C.equals(this.bits, r.bits)
        );
      }),
      (t.prototype.hashCode = function () {
        var t = this.width;
        return (t =
          31 *
            (t =
              31 * (t = 31 * (t = 31 * t + this.width) + this.height) +
              this.rowSize) +
          C.hashCode(this.bits));
      }),
      (t.prototype.toString = function (t, e, r) {
        return (
          void 0 === t && (t = 'X '),
          void 0 === e && (e = '  '),
          void 0 === r && (r = '\n'),
          this.buildToString(t, e, r)
        );
      }),
      (t.prototype.buildToString = function (t, e, r) {
        for (var n = new k(), o = 0, i = this.height; o < i; o++) {
          for (var a = 0, u = this.width; a < u; a++)
            n.append(this.get(a, o) ? t : e);
          n.append(r);
        }
        return n.toString();
      }),
      (t.prototype.clone = function () {
        return new t(this.width, this.height, this.rowSize, this.bits.slice());
      }),
      t
    );
  })(),
  V = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  U = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      V(e, t),
      (e.getNotFoundInstance = function () {
        return new e();
      }),
      (e.kind = 'NotFoundException'),
      e
    );
  })(s),
  H = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  G = (function (t) {
    function e(r) {
      var n = t.call(this, r) || this;
      return (
        (n.luminances = e.EMPTY),
        (n.buckets = new Int32Array(e.LUMINANCE_BUCKETS)),
        n
      );
    }
    return (
      H(e, t),
      (e.prototype.getBlackRow = function (t, r) {
        var n = this.getLuminanceSource(),
          o = n.getWidth();
        null == r || r.getSize() < o ? (r = new S(o)) : r.clear(),
          this.initArrays(o);
        for (
          var i = n.getRow(t, this.luminances), a = this.buckets, u = 0;
          u < o;
          u++
        )
          a[(255 & i[u]) >> e.LUMINANCE_SHIFT]++;
        var s = e.estimateBlackPoint(a);
        if (o < 3) for (u = 0; u < o; u++) (255 & i[u]) < s && r.set(u);
        else {
          var c = 255 & i[0],
            f = 255 & i[1];
          for (u = 1; u < o - 1; u++) {
            var h = 255 & i[u + 1];
            (4 * f - c - h) / 2 < s && r.set(u), (c = f), (f = h);
          }
        }
        return r;
      }),
      (e.prototype.getBlackMatrix = function () {
        var t = this.getLuminanceSource(),
          r = t.getWidth(),
          n = t.getHeight(),
          o = new x(r, n);
        this.initArrays(r);
        for (var i = this.buckets, a = 1; a < 5; a++)
          for (
            var u = Math.floor((n * a) / 5),
              s = t.getRow(u, this.luminances),
              c = Math.floor((4 * r) / 5),
              f = Math.floor(r / 5);
            f < c;
            f++
          ) {
            i[(255 & s[f]) >> e.LUMINANCE_SHIFT]++;
          }
        var h = e.estimateBlackPoint(i),
          l = t.getMatrix();
        for (a = 0; a < n; a++) {
          var d = a * r;
          for (f = 0; f < r; f++) {
            (255 & l[d + f]) < h && o.set(f, a);
          }
        }
        return o;
      }),
      (e.prototype.createBinarizer = function (t) {
        return new e(t);
      }),
      (e.prototype.initArrays = function (t) {
        this.luminances.length < t &&
          (this.luminances = new Uint8ClampedArray(t));
        for (var r = this.buckets, n = 0; n < e.LUMINANCE_BUCKETS; n++)
          r[n] = 0;
      }),
      (e.estimateBlackPoint = function (t) {
        for (var r = t.length, n = 0, o = 0, i = 0, a = 0; a < r; a++)
          t[a] > i && ((o = a), (i = t[a])), t[a] > n && (n = t[a]);
        var u = 0,
          s = 0;
        for (a = 0; a < r; a++) {
          var c = a - o;
          (d = t[a] * c * c) > s && ((u = a), (s = d));
        }
        if (o > u) {
          var f = o;
          (o = u), (u = f);
        }
        if (u - o <= r / 16) throw new U();
        var h = u - 1,
          l = -1;
        for (a = u - 1; a > o; a--) {
          var d,
            p = a - o;
          (d = p * p * (u - a) * (n - t[a])) > l && ((h = a), (l = d));
        }
        return h << e.LUMINANCE_SHIFT;
      }),
      (e.LUMINANCE_BITS = 5),
      (e.LUMINANCE_SHIFT = 8 - e.LUMINANCE_BITS),
      (e.LUMINANCE_BUCKETS = 1 << e.LUMINANCE_BITS),
      (e.EMPTY = Uint8ClampedArray.from([0])),
      e
    );
  })(y),
  X = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  W = (function (t) {
    function e(e) {
      var r = t.call(this, e) || this;
      return (r.matrix = null), r;
    }
    return (
      X(e, t),
      (e.prototype.getBlackMatrix = function () {
        if (null !== this.matrix) return this.matrix;
        var r = this.getLuminanceSource(),
          n = r.getWidth(),
          o = r.getHeight();
        if (n >= e.MINIMUM_DIMENSION && o >= e.MINIMUM_DIMENSION) {
          var i = r.getMatrix(),
            a = n >> e.BLOCK_SIZE_POWER;
          0 != (n & e.BLOCK_SIZE_MASK) && a++;
          var u = o >> e.BLOCK_SIZE_POWER;
          0 != (o & e.BLOCK_SIZE_MASK) && u++;
          var s = e.calculateBlackPoints(i, a, u, n, o),
            c = new x(n, o);
          e.calculateThresholdForBlock(i, a, u, n, o, s, c), (this.matrix = c);
        } else this.matrix = t.prototype.getBlackMatrix.call(this);
        return this.matrix;
      }),
      (e.prototype.createBinarizer = function (t) {
        return new e(t);
      }),
      (e.calculateThresholdForBlock = function (t, r, n, o, i, a, u) {
        for (
          var s = i - e.BLOCK_SIZE, c = o - e.BLOCK_SIZE, f = 0;
          f < n;
          f++
        ) {
          var h = f << e.BLOCK_SIZE_POWER;
          h > s && (h = s);
          for (var l = e.cap(f, 2, n - 3), d = 0; d < r; d++) {
            var p = d << e.BLOCK_SIZE_POWER;
            p > c && (p = c);
            for (var g = e.cap(d, 2, r - 3), y = 0, w = -2; w <= 2; w++) {
              var _ = a[l + w];
              y += _[g - 2] + _[g - 1] + _[g] + _[g + 1] + _[g + 2];
            }
            var v = y / 25;
            e.thresholdBlock(t, p, h, v, o, u);
          }
        }
      }),
      (e.cap = function (t, e, r) {
        return t < e ? e : t > r ? r : t;
      }),
      (e.thresholdBlock = function (t, r, n, o, i, a) {
        for (var u = 0, s = n * i + r; u < e.BLOCK_SIZE; u++, s += i)
          for (var c = 0; c < e.BLOCK_SIZE; c++)
            (255 & t[s + c]) <= o && a.set(r + c, n + u);
      }),
      (e.calculateBlackPoints = function (t, r, n, o, i) {
        for (
          var a = i - e.BLOCK_SIZE,
            u = o - e.BLOCK_SIZE,
            s = new Array(n),
            c = 0;
          c < n;
          c++
        ) {
          s[c] = new Int32Array(r);
          var f = c << e.BLOCK_SIZE_POWER;
          f > a && (f = a);
          for (var h = 0; h < r; h++) {
            var l = h << e.BLOCK_SIZE_POWER;
            l > u && (l = u);
            for (
              var d = 0, p = 255, g = 0, y = 0, w = f * o + l;
              y < e.BLOCK_SIZE;
              y++, w += o
            ) {
              for (var _ = 0; _ < e.BLOCK_SIZE; _++) {
                var v = 255 & t[w + _];
                (d += v), v < p && (p = v), v > g && (g = v);
              }
              if (g - p > e.MIN_DYNAMIC_RANGE)
                for (y++, w += o; y < e.BLOCK_SIZE; y++, w += o)
                  for (_ = 0; _ < e.BLOCK_SIZE; _++) d += 255 & t[w + _];
            }
            var m = d >> (2 * e.BLOCK_SIZE_POWER);
            if (g - p <= e.MIN_DYNAMIC_RANGE && ((m = p / 2), c > 0 && h > 0)) {
              var A = (s[c - 1][h] + 2 * s[c][h - 1] + s[c - 1][h - 1]) / 4;
              p < A && (m = A);
            }
            s[c][h] = m;
          }
        }
        return s;
      }),
      (e.BLOCK_SIZE_POWER = 3),
      (e.BLOCK_SIZE = 1 << e.BLOCK_SIZE_POWER),
      (e.BLOCK_SIZE_MASK = e.BLOCK_SIZE - 1),
      (e.MINIMUM_DIMENSION = 5 * e.BLOCK_SIZE),
      (e.MIN_DYNAMIC_RANGE = 24),
      e
    );
  })(G),
  j = (function () {
    function t(t, e) {
      (this.width = t), (this.height = e);
    }
    return (
      (t.prototype.getWidth = function () {
        return this.width;
      }),
      (t.prototype.getHeight = function () {
        return this.height;
      }),
      (t.prototype.isCropSupported = function () {
        return !1;
      }),
      (t.prototype.crop = function (t, e, r, n) {
        throw new B('This luminance source does not support cropping.');
      }),
      (t.prototype.isRotateSupported = function () {
        return !1;
      }),
      (t.prototype.rotateCounterClockwise = function () {
        throw new B(
          'This luminance source does not support rotation by 90 degrees.'
        );
      }),
      (t.prototype.rotateCounterClockwise45 = function () {
        throw new B(
          'This luminance source does not support rotation by 45 degrees.'
        );
      }),
      (t.prototype.toString = function () {
        for (
          var t = new Uint8ClampedArray(this.width), e = new k(), r = 0;
          r < this.height;
          r++
        ) {
          for (var n = this.getRow(r, t), o = 0; o < this.width; o++) {
            var i = 255 & n[o],
              a = void 0;
            (a = i < 64 ? '#' : i < 128 ? '+' : i < 192 ? '.' : ' '),
              e.append(a);
          }
          e.append('\n');
        }
        return e.toString();
      }),
      t
    );
  })(),
  z = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Y = (function (t) {
    function e(e) {
      var r = t.call(this, e.getWidth(), e.getHeight()) || this;
      return (r.delegate = e), r;
    }
    return (
      z(e, t),
      (e.prototype.getRow = function (t, e) {
        for (
          var r = this.delegate.getRow(t, e), n = this.getWidth(), o = 0;
          o < n;
          o++
        )
          r[o] = 255 - (255 & r[o]);
        return r;
      }),
      (e.prototype.getMatrix = function () {
        for (
          var t = this.delegate.getMatrix(),
            e = this.getWidth() * this.getHeight(),
            r = new Uint8ClampedArray(e),
            n = 0;
          n < e;
          n++
        )
          r[n] = 255 - (255 & t[n]);
        return r;
      }),
      (e.prototype.isCropSupported = function () {
        return this.delegate.isCropSupported();
      }),
      (e.prototype.crop = function (t, r, n, o) {
        return new e(this.delegate.crop(t, r, n, o));
      }),
      (e.prototype.isRotateSupported = function () {
        return this.delegate.isRotateSupported();
      }),
      (e.prototype.invert = function () {
        return this.delegate;
      }),
      (e.prototype.rotateCounterClockwise = function () {
        return new e(this.delegate.rotateCounterClockwise());
      }),
      (e.prototype.rotateCounterClockwise45 = function () {
        return new e(this.delegate.rotateCounterClockwise45());
      }),
      e
    );
  })(j),
  Z = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  K = (function (t) {
    function e(r) {
      var n = t.call(this, r.width, r.height) || this;
      return (
        (n.canvas = r),
        (n.tempCanvasElement = null),
        (n.buffer = e.makeBufferFromCanvasImageData(r)),
        n
      );
    }
    return (
      Z(e, t),
      (e.makeBufferFromCanvasImageData = function (t) {
        var r = t.getContext('2d').getImageData(0, 0, t.width, t.height);
        return e.toGrayscaleBuffer(r.data, t.width, t.height);
      }),
      (e.toGrayscaleBuffer = function (t, e, r) {
        for (
          var n = new Uint8ClampedArray(e * r), o = 0, i = 0, a = t.length;
          o < a;
          o += 4, i++
        ) {
          var u = void 0;
          if (0 === t[o + 3]) u = 255;
          else u = (306 * t[o] + 601 * t[o + 1] + 117 * t[o + 2] + 512) >> 10;
          n[i] = u;
        }
        return n;
      }),
      (e.prototype.getRow = function (t, e) {
        if (t < 0 || t >= this.getHeight())
          throw new l('Requested row is outside the image: ' + t);
        var r = this.getWidth(),
          n = t * r;
        return (
          null === e
            ? (e = this.buffer.slice(n, n + r))
            : (e.length < r && (e = new Uint8ClampedArray(r)),
              e.set(this.buffer.slice(n, n + r))),
          e
        );
      }),
      (e.prototype.getMatrix = function () {
        return this.buffer;
      }),
      (e.prototype.isCropSupported = function () {
        return !0;
      }),
      (e.prototype.crop = function (e, r, n, o) {
        return t.prototype.crop.call(this, e, r, n, o), this;
      }),
      (e.prototype.isRotateSupported = function () {
        return !0;
      }),
      (e.prototype.rotateCounterClockwise = function () {
        return this.rotate(-90), this;
      }),
      (e.prototype.rotateCounterClockwise45 = function () {
        return this.rotate(-45), this;
      }),
      (e.prototype.getTempCanvasElement = function () {
        if (null === this.tempCanvasElement) {
          var t = this.canvas.ownerDocument.createElement('canvas');
          (t.width = this.canvas.width),
            (t.height = this.canvas.height),
            (this.tempCanvasElement = t);
        }
        return this.tempCanvasElement;
      }),
      (e.prototype.rotate = function (t) {
        var r = this.getTempCanvasElement(),
          n = r.getContext('2d'),
          o = t * e.DEGREE_TO_RADIANS,
          i = this.canvas.width,
          a = this.canvas.height,
          u = Math.ceil(Math.abs(Math.cos(o)) * i + Math.abs(Math.sin(o)) * a),
          s = Math.ceil(Math.abs(Math.sin(o)) * i + Math.abs(Math.cos(o)) * a);
        return (
          (r.width = u),
          (r.height = s),
          n.translate(u / 2, s / 2),
          n.rotate(o),
          n.drawImage(this.canvas, i / -2, a / -2),
          (this.buffer = e.makeBufferFromCanvasImageData(r)),
          this
        );
      }),
      (e.prototype.invert = function () {
        return new Y(this);
      }),
      (e.DEGREE_TO_RADIANS = Math.PI / 180),
      e
    );
  })(j),
  q = (function () {
    function t(t, e, r) {
      (this.deviceId = t),
        (this.label = e),
        (this.kind = 'videoinput'),
        (this.groupId = r || void 0);
    }
    return (
      (t.prototype.toJSON = function () {
        return {
          kind: this.kind,
          groupId: this.groupId,
          deviceId: this.deviceId,
          label: this.label,
        };
      }),
      t
    );
  })(),
  Q = function (t, e, r, n) {
    return new (r || (r = Promise))(function (o, i) {
      function a(t) {
        try {
          s(n.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          s(n.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function s(t) {
        var e;
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                })).then(a, u);
      }
      s((n = n.apply(t, e || [])).next());
    });
  },
  J = function (t, e) {
    var r,
      n,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function u(i) {
      return function (u) {
        return (function (i) {
          if (r) throw new TypeError('Generator is already executing.');
          for (; a; )
            try {
              if (
                ((r = 1),
                n &&
                  (o =
                    2 & i[0]
                      ? n.return
                      : i[0]
                      ? n.throw || ((o = n.return) && o.call(n), 0)
                      : n.next) &&
                  !(o = o.call(n, i[1])).done)
              )
                return o;
              switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, { value: i[1], done: !1 };
                case 5:
                  a.label++, (n = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    (a.label = o[1]), (o = i);
                    break;
                  }
                  if (o && a.label < o[2]) {
                    (a.label = o[2]), a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              i = e.call(t, a);
            } catch (t) {
              (i = [6, t]), (n = 0);
            } finally {
              r = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, u]);
      };
    }
  },
  $ = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  tt = (function () {
    function t(t, e, r) {
      void 0 === e && (e = 500),
        (this.reader = t),
        (this.timeBetweenScansMillis = e),
        (this._hints = r),
        (this._stopContinuousDecode = !1),
        (this._stopAsyncDecode = !1),
        (this._timeBetweenDecodingAttempts = 0);
    }
    return (
      Object.defineProperty(t.prototype, 'hasNavigator', {
        get: function () {
          return 'undefined' != typeof navigator;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'isMediaDevicesSuported', {
        get: function () {
          return this.hasNavigator && !!navigator.mediaDevices;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'canEnumerateDevices', {
        get: function () {
          return !(
            !this.isMediaDevicesSuported ||
            !navigator.mediaDevices.enumerateDevices
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'timeBetweenDecodingAttempts', {
        get: function () {
          return this._timeBetweenDecodingAttempts;
        },
        set: function (t) {
          this._timeBetweenDecodingAttempts = t < 0 ? 0 : t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'hints', {
        get: function () {
          return this._hints;
        },
        set: function (t) {
          this._hints = t || null;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.listVideoInputDevices = function () {
        return Q(this, void 0, void 0, function () {
          var t, e, r, n, o, i, a, u, s, c, f, h;
          return J(this, function (l) {
            switch (l.label) {
              case 0:
                if (!this.hasNavigator)
                  throw new Error(
                    "Can't enumerate devices, navigator is not present."
                  );
                if (!this.canEnumerateDevices)
                  throw new Error(
                    "Can't enumerate devices, method not supported."
                  );
                return [4, navigator.mediaDevices.enumerateDevices()];
              case 1:
                (t = l.sent()), (e = []);
                try {
                  for (r = $(t), n = r.next(); !n.done; n = r.next())
                    (o = n.value),
                      'videoinput' ===
                        (i = 'video' === o.kind ? 'videoinput' : o.kind) &&
                        ((a = o.deviceId || o.id),
                        (u = o.label || 'Video device ' + (e.length + 1)),
                        (s = o.groupId),
                        (c = { deviceId: a, label: u, kind: i, groupId: s }),
                        e.push(c));
                } catch (t) {
                  f = { error: t };
                } finally {
                  try {
                    n && !n.done && (h = r.return) && h.call(r);
                  } finally {
                    if (f) throw f.error;
                  }
                }
                return [2, e];
            }
          });
        });
      }),
      (t.prototype.getVideoInputDevices = function () {
        return Q(this, void 0, void 0, function () {
          return J(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.listVideoInputDevices()];
              case 1:
                return [
                  2,
                  t.sent().map(function (t) {
                    return new q(t.deviceId, t.label);
                  }),
                ];
            }
          });
        });
      }),
      (t.prototype.findDeviceById = function (t) {
        return Q(this, void 0, void 0, function () {
          var e;
          return J(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.listVideoInputDevices()];
              case 1:
                return (e = r.sent())
                  ? [
                      2,
                      e.find(function (e) {
                        return e.deviceId === t;
                      }),
                    ]
                  : [2, null];
            }
          });
        });
      }),
      (t.prototype.decodeFromInputVideoDevice = function (t, e) {
        return Q(this, void 0, void 0, function () {
          return J(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.decodeOnceFromVideoDevice(t, e)];
              case 1:
                return [2, r.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeOnceFromVideoDevice = function (t, e) {
        return Q(this, void 0, void 0, function () {
          var r;
          return J(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.reset(),
                  (r = {
                    video: t
                      ? { deviceId: { exact: t } }
                      : { facingMode: 'environment' },
                  }),
                  [4, this.decodeOnceFromConstraints(r, e)]
                );
              case 1:
                return [2, n.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeOnceFromConstraints = function (t, e) {
        return Q(this, void 0, void 0, function () {
          var r;
          return J(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, navigator.mediaDevices.getUserMedia(t)];
              case 1:
                return (r = n.sent()), [4, this.decodeOnceFromStream(r, e)];
              case 2:
                return [2, n.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeOnceFromStream = function (t, e) {
        return Q(this, void 0, void 0, function () {
          var r;
          return J(this, function (n) {
            switch (n.label) {
              case 0:
                return this.reset(), [4, this.attachStreamToVideo(t, e)];
              case 1:
                return (r = n.sent()), [4, this.decodeOnce(r)];
              case 2:
                return [2, n.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeFromInputVideoDeviceContinuously = function (t, e, r) {
        return Q(this, void 0, void 0, function () {
          return J(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.decodeFromVideoDevice(t, e, r)];
              case 1:
                return [2, n.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeFromVideoDevice = function (t, e, r) {
        return Q(this, void 0, void 0, function () {
          var n;
          return J(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (n = {
                    video: t
                      ? { deviceId: { exact: t } }
                      : { facingMode: 'environment' },
                  }),
                  [4, this.decodeFromConstraints(n, e, r)]
                );
              case 1:
                return [2, o.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeFromConstraints = function (t, e, r) {
        return Q(this, void 0, void 0, function () {
          var n;
          return J(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, navigator.mediaDevices.getUserMedia(t)];
              case 1:
                return (n = o.sent()), [4, this.decodeFromStream(n, e, r)];
              case 2:
                return [2, o.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeFromStream = function (t, e, r) {
        return Q(this, void 0, void 0, function () {
          var n;
          return J(this, function (o) {
            switch (o.label) {
              case 0:
                return this.reset(), [4, this.attachStreamToVideo(t, e)];
              case 1:
                return (n = o.sent()), [4, this.decodeContinuously(n, r)];
              case 2:
                return [2, o.sent()];
            }
          });
        });
      }),
      (t.prototype.stopAsyncDecode = function () {
        this._stopAsyncDecode = !0;
      }),
      (t.prototype.stopContinuousDecode = function () {
        this._stopContinuousDecode = !0;
      }),
      (t.prototype.attachStreamToVideo = function (t, e) {
        return Q(this, void 0, void 0, function () {
          var r;
          return J(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (r = this.prepareVideoElement(e)),
                  this.addVideoSource(r, t),
                  (this.videoElement = r),
                  (this.stream = t),
                  [4, this.playVideoOnLoadAsync(r)]
                );
              case 1:
                return n.sent(), [2, r];
            }
          });
        });
      }),
      (t.prototype.playVideoOnLoadAsync = function (t) {
        var e = this;
        return new Promise(function (r, n) {
          return e.playVideoOnLoad(t, function () {
            return r();
          });
        });
      }),
      (t.prototype.playVideoOnLoad = function (t, e) {
        var r = this;
        (this.videoEndedListener = function () {
          return r.stopStreams();
        }),
          (this.videoCanPlayListener = function () {
            return r.tryPlayVideo(t);
          }),
          t.addEventListener('ended', this.videoEndedListener),
          t.addEventListener('canplay', this.videoCanPlayListener),
          t.addEventListener('playing', e),
          this.tryPlayVideo(t);
      }),
      (t.prototype.isVideoPlaying = function (t) {
        return t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2;
      }),
      (t.prototype.tryPlayVideo = function (t) {
        return Q(this, void 0, void 0, function () {
          return J(this, function (e) {
            switch (e.label) {
              case 0:
                if (this.isVideoPlaying(t))
                  return (
                    console.warn(
                      'Trying to play video that is already playing.'
                    ),
                    [2]
                  );
                e.label = 1;
              case 1:
                return e.trys.push([1, 3, , 4]), [4, t.play()];
              case 2:
                return e.sent(), [3, 4];
              case 3:
                return (
                  e.sent(),
                  console.warn('It was not possible to play the video.'),
                  [3, 4]
                );
              case 4:
                return [2];
            }
          });
        });
      }),
      (t.prototype.getMediaElement = function (t, e) {
        var r = document.getElementById(t);
        if (!r) throw new f("element with id '" + t + "' not found");
        if (r.nodeName.toLowerCase() !== e.toLowerCase())
          throw new f(
            "element with id '" + t + "' must be an " + e + ' element'
          );
        return r;
      }),
      (t.prototype.decodeFromImage = function (t, e) {
        if (!t && !e)
          throw new f(
            'either imageElement with a src set or an url must be provided'
          );
        return e && !t
          ? this.decodeFromImageUrl(e)
          : this.decodeFromImageElement(t);
      }),
      (t.prototype.decodeFromVideo = function (t, e) {
        if (!t && !e)
          throw new f(
            'Either an element with a src set or an URL must be provided'
          );
        return e && !t
          ? this.decodeFromVideoUrl(e)
          : this.decodeFromVideoElement(t);
      }),
      (t.prototype.decodeFromVideoContinuously = function (t, e, r) {
        if (void 0 === t && void 0 === e)
          throw new f(
            'Either an element with a src set or an URL must be provided'
          );
        return e && !t
          ? this.decodeFromVideoUrlContinuously(e, r)
          : this.decodeFromVideoElementContinuously(t, r);
      }),
      (t.prototype.decodeFromImageElement = function (t) {
        if (!t) throw new f('An image element must be provided.');
        this.reset();
        var e = this.prepareImageElement(t);
        return (
          (this.imageElement = e),
          this.isImageLoaded(e)
            ? this.decodeOnce(e, !1, !0)
            : this._decodeOnLoadImage(e)
        );
      }),
      (t.prototype.decodeFromVideoElement = function (t) {
        var e = this._decodeFromVideoElementSetup(t);
        return this._decodeOnLoadVideo(e);
      }),
      (t.prototype.decodeFromVideoElementContinuously = function (t, e) {
        var r = this._decodeFromVideoElementSetup(t);
        return this._decodeOnLoadVideoContinuously(r, e);
      }),
      (t.prototype._decodeFromVideoElementSetup = function (t) {
        if (!t) throw new f('A video element must be provided.');
        this.reset();
        var e = this.prepareVideoElement(t);
        return (this.videoElement = e), e;
      }),
      (t.prototype.decodeFromImageUrl = function (t) {
        if (!t) throw new f('An URL must be provided.');
        this.reset();
        var e = this.prepareImageElement();
        this.imageElement = e;
        var r = this._decodeOnLoadImage(e);
        return (e.src = t), r;
      }),
      (t.prototype.decodeFromVideoUrl = function (t) {
        if (!t) throw new f('An URL must be provided.');
        this.reset();
        var e = this.prepareVideoElement(),
          r = this.decodeFromVideoElement(e);
        return (e.src = t), r;
      }),
      (t.prototype.decodeFromVideoUrlContinuously = function (t, e) {
        if (!t) throw new f('An URL must be provided.');
        this.reset();
        var r = this.prepareVideoElement(),
          n = this.decodeFromVideoElementContinuously(r, e);
        return (r.src = t), n;
      }),
      (t.prototype._decodeOnLoadImage = function (t) {
        var e = this;
        return new Promise(function (r, n) {
          (e.imageLoadedListener = function () {
            return e.decodeOnce(t, !1, !0).then(r, n);
          }),
            t.addEventListener('load', e.imageLoadedListener);
        });
      }),
      (t.prototype._decodeOnLoadVideo = function (t) {
        return Q(this, void 0, void 0, function () {
          return J(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.playVideoOnLoadAsync(t)];
              case 1:
                return e.sent(), [4, this.decodeOnce(t)];
              case 2:
                return [2, e.sent()];
            }
          });
        });
      }),
      (t.prototype._decodeOnLoadVideoContinuously = function (t, e) {
        return Q(this, void 0, void 0, function () {
          return J(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.playVideoOnLoadAsync(t)];
              case 1:
                return r.sent(), this.decodeContinuously(t, e), [2];
            }
          });
        });
      }),
      (t.prototype.isImageLoaded = function (t) {
        return !!t.complete && 0 !== t.naturalWidth;
      }),
      (t.prototype.prepareImageElement = function (t) {
        var e;
        return (
          void 0 === t &&
            (((e = document.createElement('img')).width = 200),
            (e.height = 200)),
          'string' == typeof t && (e = this.getMediaElement(t, 'img')),
          t instanceof HTMLImageElement && (e = t),
          e
        );
      }),
      (t.prototype.prepareVideoElement = function (t) {
        var e;
        return (
          t ||
            'undefined' == typeof document ||
            (((e = document.createElement('video')).width = 200),
            (e.height = 200)),
          'string' == typeof t && (e = this.getMediaElement(t, 'video')),
          t instanceof HTMLVideoElement && (e = t),
          e.setAttribute('autoplay', 'true'),
          e.setAttribute('muted', 'true'),
          e.setAttribute('playsinline', 'true'),
          e
        );
      }),
      (t.prototype.decodeOnce = function (t, e, r) {
        var n = this;
        void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          (this._stopAsyncDecode = !1);
        var o = function (i, a) {
          if (n._stopAsyncDecode)
            return (
              a(
                new U(
                  'Video stream has ended before any code could be detected.'
                )
              ),
              void (n._stopAsyncDecode = void 0)
            );
          try {
            i(n.decode(t));
          } catch (t) {
            if (
              (e && t instanceof U) ||
              ((t instanceof g || t instanceof R) && r)
            )
              return setTimeout(o, n._timeBetweenDecodingAttempts, i, a);
            a(t);
          }
        };
        return new Promise(function (t, e) {
          return o(t, e);
        });
      }),
      (t.prototype.decodeContinuously = function (t, e) {
        var r = this;
        this._stopContinuousDecode = !1;
        var n = function () {
          if (r._stopContinuousDecode) r._stopContinuousDecode = void 0;
          else
            try {
              var o = r.decode(t);
              e(o, null), setTimeout(n, r.timeBetweenScansMillis);
            } catch (t) {
              e(null, t),
                (t instanceof g || t instanceof R || t instanceof U) &&
                  setTimeout(n, r._timeBetweenDecodingAttempts);
            }
        };
        n();
      }),
      (t.prototype.decode = function (t) {
        var e = this.createBinaryBitmap(t);
        return this.decodeBitmap(e);
      }),
      (t.prototype.createBinaryBitmap = function (t) {
        var e = this.getCaptureCanvasContext(t);
        this.drawImageOnCanvas(e, t);
        var r = this.getCaptureCanvas(t),
          n = new K(r),
          o = new W(n);
        return new d(o);
      }),
      (t.prototype.getCaptureCanvasContext = function (t) {
        if (!this.captureCanvasContext) {
          var e = this.getCaptureCanvas(t).getContext('2d');
          this.captureCanvasContext = e;
        }
        return this.captureCanvasContext;
      }),
      (t.prototype.getCaptureCanvas = function (t) {
        if (!this.captureCanvas) {
          var e = this.createCaptureCanvas(t);
          this.captureCanvas = e;
        }
        return this.captureCanvas;
      }),
      (t.prototype.drawImageOnCanvas = function (t, e) {
        t.drawImage(e, 0, 0);
      }),
      (t.prototype.decodeBitmap = function (t) {
        return this.reader.decode(t, this._hints);
      }),
      (t.prototype.createCaptureCanvas = function (t) {
        if ('undefined' == typeof document)
          return this._destroyCaptureCanvas(), null;
        var e,
          r,
          n = document.createElement('canvas');
        return (
          void 0 !== t &&
            (t instanceof HTMLVideoElement
              ? ((e = t.videoWidth), (r = t.videoHeight))
              : t instanceof HTMLImageElement &&
                ((e = t.naturalWidth || t.width),
                (r = t.naturalHeight || t.height))),
          (n.style.width = e + 'px'),
          (n.style.height = r + 'px'),
          (n.width = e),
          (n.height = r),
          n
        );
      }),
      (t.prototype.stopStreams = function () {
        this.stream &&
          (this.stream.getVideoTracks().forEach(function (t) {
            return t.stop();
          }),
          (this.stream = void 0)),
          !1 === this._stopAsyncDecode && this.stopAsyncDecode(),
          !1 === this._stopContinuousDecode && this.stopContinuousDecode();
      }),
      (t.prototype.reset = function () {
        this.stopStreams(),
          this._destroyVideoElement(),
          this._destroyImageElement(),
          this._destroyCaptureCanvas();
      }),
      (t.prototype._destroyVideoElement = function () {
        this.videoElement &&
          (void 0 !== this.videoEndedListener &&
            this.videoElement.removeEventListener(
              'ended',
              this.videoEndedListener
            ),
          void 0 !== this.videoPlayingEventListener &&
            this.videoElement.removeEventListener(
              'playing',
              this.videoPlayingEventListener
            ),
          void 0 !== this.videoCanPlayListener &&
            this.videoElement.removeEventListener(
              'loadedmetadata',
              this.videoCanPlayListener
            ),
          this.cleanVideoSource(this.videoElement),
          (this.videoElement = void 0));
      }),
      (t.prototype._destroyImageElement = function () {
        this.imageElement &&
          (void 0 !== this.imageLoadedListener &&
            this.imageElement.removeEventListener(
              'load',
              this.imageLoadedListener
            ),
          (this.imageElement.src = void 0),
          this.imageElement.removeAttribute('src'),
          (this.imageElement = void 0));
      }),
      (t.prototype._destroyCaptureCanvas = function () {
        (this.captureCanvasContext = void 0), (this.captureCanvas = void 0);
      }),
      (t.prototype.addVideoSource = function (t, e) {
        try {
          t.srcObject = e;
        } catch (r) {
          t.src = URL.createObjectURL(e);
        }
      }),
      (t.prototype.cleanVideoSource = function (t) {
        try {
          t.srcObject = null;
        } catch (e) {
          t.src = '';
        }
        this.videoElement.removeAttribute('src');
      }),
      t
    );
  })(),
  et = (function () {
    function t(t, e, r, n, o, i) {
      void 0 === r && (r = null == e ? 0 : 8 * e.length),
        void 0 === i && (i = w.currentTimeMillis()),
        (this.text = t),
        (this.rawBytes = e),
        (this.numBits = r),
        (this.resultPoints = n),
        (this.format = o),
        (this.timestamp = i),
        (this.text = t),
        (this.rawBytes = e),
        (this.numBits = null == r ? (null == e ? 0 : 8 * e.length) : r),
        (this.resultPoints = n),
        (this.format = o),
        (this.resultMetadata = null),
        (this.timestamp = null == i ? w.currentTimeMillis() : i);
    }
    return (
      (t.prototype.getText = function () {
        return this.text;
      }),
      (t.prototype.getRawBytes = function () {
        return this.rawBytes;
      }),
      (t.prototype.getNumBits = function () {
        return this.numBits;
      }),
      (t.prototype.getResultPoints = function () {
        return this.resultPoints;
      }),
      (t.prototype.getBarcodeFormat = function () {
        return this.format;
      }),
      (t.prototype.getResultMetadata = function () {
        return this.resultMetadata;
      }),
      (t.prototype.putMetadata = function (t, e) {
        null === this.resultMetadata && (this.resultMetadata = new Map()),
          this.resultMetadata.set(t, e);
      }),
      (t.prototype.putAllMetadata = function (t) {
        null !== t &&
          (null === this.resultMetadata
            ? (this.resultMetadata = t)
            : (this.resultMetadata = new Map(t)));
      }),
      (t.prototype.addResultPoints = function (t) {
        var e = this.resultPoints;
        if (null === e) this.resultPoints = t;
        else if (null !== t && t.length > 0) {
          var r = new Array(e.length + t.length);
          w.arraycopy(e, 0, r, 0, e.length),
            w.arraycopy(t, 0, r, e.length, t.length),
            (this.resultPoints = r);
        }
      }),
      (t.prototype.getTimestamp = function () {
        return this.timestamp;
      }),
      (t.prototype.toString = function () {
        return this.text;
      }),
      t
    );
  })();
!(function (t) {
  (t[(t.AZTEC = 0)] = 'AZTEC'),
    (t[(t.CODABAR = 1)] = 'CODABAR'),
    (t[(t.CODE_39 = 2)] = 'CODE_39'),
    (t[(t.CODE_93 = 3)] = 'CODE_93'),
    (t[(t.CODE_128 = 4)] = 'CODE_128'),
    (t[(t.DATA_MATRIX = 5)] = 'DATA_MATRIX'),
    (t[(t.EAN_8 = 6)] = 'EAN_8'),
    (t[(t.EAN_13 = 7)] = 'EAN_13'),
    (t[(t.ITF = 8)] = 'ITF'),
    (t[(t.MAXICODE = 9)] = 'MAXICODE'),
    (t[(t.PDF_417 = 10)] = 'PDF_417'),
    (t[(t.QR_CODE = 11)] = 'QR_CODE'),
    (t[(t.RSS_14 = 12)] = 'RSS_14'),
    (t[(t.RSS_EXPANDED = 13)] = 'RSS_EXPANDED'),
    (t[(t.UPC_A = 14)] = 'UPC_A'),
    (t[(t.UPC_E = 15)] = 'UPC_E'),
    (t[(t.UPC_EAN_EXTENSION = 16)] = 'UPC_EAN_EXTENSION');
})(D || (D = {}));
var rt,
  nt = D;
!(function (t) {
  (t[(t.OTHER = 0)] = 'OTHER'),
    (t[(t.ORIENTATION = 1)] = 'ORIENTATION'),
    (t[(t.BYTE_SEGMENTS = 2)] = 'BYTE_SEGMENTS'),
    (t[(t.ERROR_CORRECTION_LEVEL = 3)] = 'ERROR_CORRECTION_LEVEL'),
    (t[(t.ISSUE_NUMBER = 4)] = 'ISSUE_NUMBER'),
    (t[(t.SUGGESTED_PRICE = 5)] = 'SUGGESTED_PRICE'),
    (t[(t.POSSIBLE_COUNTRY = 6)] = 'POSSIBLE_COUNTRY'),
    (t[(t.UPC_EAN_EXTENSION = 7)] = 'UPC_EAN_EXTENSION'),
    (t[(t.PDF417_EXTRA_METADATA = 8)] = 'PDF417_EXTRA_METADATA'),
    (t[(t.STRUCTURED_APPEND_SEQUENCE = 9)] = 'STRUCTURED_APPEND_SEQUENCE'),
    (t[(t.STRUCTURED_APPEND_PARITY = 10)] = 'STRUCTURED_APPEND_PARITY');
})(rt || (rt = {}));
var ot,
  it = rt,
  at = (function () {
    function t(t, e, r, n, o, i) {
      void 0 === o && (o = -1),
        void 0 === i && (i = -1),
        (this.rawBytes = t),
        (this.text = e),
        (this.byteSegments = r),
        (this.ecLevel = n),
        (this.structuredAppendSequenceNumber = o),
        (this.structuredAppendParity = i),
        (this.numBits = null == t ? 0 : 8 * t.length);
    }
    return (
      (t.prototype.getRawBytes = function () {
        return this.rawBytes;
      }),
      (t.prototype.getNumBits = function () {
        return this.numBits;
      }),
      (t.prototype.setNumBits = function (t) {
        this.numBits = t;
      }),
      (t.prototype.getText = function () {
        return this.text;
      }),
      (t.prototype.getByteSegments = function () {
        return this.byteSegments;
      }),
      (t.prototype.getECLevel = function () {
        return this.ecLevel;
      }),
      (t.prototype.getErrorsCorrected = function () {
        return this.errorsCorrected;
      }),
      (t.prototype.setErrorsCorrected = function (t) {
        this.errorsCorrected = t;
      }),
      (t.prototype.getErasures = function () {
        return this.erasures;
      }),
      (t.prototype.setErasures = function (t) {
        this.erasures = t;
      }),
      (t.prototype.getOther = function () {
        return this.other;
      }),
      (t.prototype.setOther = function (t) {
        this.other = t;
      }),
      (t.prototype.hasStructuredAppend = function () {
        return (
          this.structuredAppendParity >= 0 &&
          this.structuredAppendSequenceNumber >= 0
        );
      }),
      (t.prototype.getStructuredAppendParity = function () {
        return this.structuredAppendParity;
      }),
      (t.prototype.getStructuredAppendSequenceNumber = function () {
        return this.structuredAppendSequenceNumber;
      }),
      t
    );
  })(),
  ut = (function () {
    function t() {}
    return (
      (t.prototype.exp = function (t) {
        return this.expTable[t];
      }),
      (t.prototype.log = function (t) {
        if (0 === t) throw new l();
        return this.logTable[t];
      }),
      (t.addOrSubtract = function (t, e) {
        return t ^ e;
      }),
      t
    );
  })(),
  st = (function () {
    function t(t, e) {
      if (0 === e.length) throw new l();
      this.field = t;
      var r = e.length;
      if (r > 1 && 0 === e[0]) {
        for (var n = 1; n < r && 0 === e[n]; ) n++;
        n === r
          ? (this.coefficients = Int32Array.from([0]))
          : ((this.coefficients = new Int32Array(r - n)),
            w.arraycopy(e, n, this.coefficients, 0, this.coefficients.length));
      } else this.coefficients = e;
    }
    return (
      (t.prototype.getCoefficients = function () {
        return this.coefficients;
      }),
      (t.prototype.getDegree = function () {
        return this.coefficients.length - 1;
      }),
      (t.prototype.isZero = function () {
        return 0 === this.coefficients[0];
      }),
      (t.prototype.getCoefficient = function (t) {
        return this.coefficients[this.coefficients.length - 1 - t];
      }),
      (t.prototype.evaluateAt = function (t) {
        if (0 === t) return this.getCoefficient(0);
        var e,
          r = this.coefficients;
        if (1 === t) {
          e = 0;
          for (var n = 0, o = r.length; n !== o; n++) {
            var i = r[n];
            e = ut.addOrSubtract(e, i);
          }
          return e;
        }
        e = r[0];
        var a = r.length,
          u = this.field;
        for (n = 1; n < a; n++) e = ut.addOrSubtract(u.multiply(t, e), r[n]);
        return e;
      }),
      (t.prototype.addOrSubtract = function (e) {
        if (!this.field.equals(e.field))
          throw new l('GenericGFPolys do not have same GenericGF field');
        if (this.isZero()) return e;
        if (e.isZero()) return this;
        var r = this.coefficients,
          n = e.coefficients;
        if (r.length > n.length) {
          var o = r;
          (r = n), (n = o);
        }
        var i = new Int32Array(n.length),
          a = n.length - r.length;
        w.arraycopy(n, 0, i, 0, a);
        for (var u = a; u < n.length; u++)
          i[u] = ut.addOrSubtract(r[u - a], n[u]);
        return new t(this.field, i);
      }),
      (t.prototype.multiply = function (e) {
        if (!this.field.equals(e.field))
          throw new l('GenericGFPolys do not have same GenericGF field');
        if (this.isZero() || e.isZero()) return this.field.getZero();
        for (
          var r = this.coefficients,
            n = r.length,
            o = e.coefficients,
            i = o.length,
            a = new Int32Array(n + i - 1),
            u = this.field,
            s = 0;
          s < n;
          s++
        )
          for (var c = r[s], f = 0; f < i; f++)
            a[s + f] = ut.addOrSubtract(a[s + f], u.multiply(c, o[f]));
        return new t(u, a);
      }),
      (t.prototype.multiplyScalar = function (e) {
        if (0 === e) return this.field.getZero();
        if (1 === e) return this;
        for (
          var r = this.coefficients.length,
            n = this.field,
            o = new Int32Array(r),
            i = this.coefficients,
            a = 0;
          a < r;
          a++
        )
          o[a] = n.multiply(i[a], e);
        return new t(n, o);
      }),
      (t.prototype.multiplyByMonomial = function (e, r) {
        if (e < 0) throw new l();
        if (0 === r) return this.field.getZero();
        for (
          var n = this.coefficients,
            o = n.length,
            i = new Int32Array(o + e),
            a = this.field,
            u = 0;
          u < o;
          u++
        )
          i[u] = a.multiply(n[u], r);
        return new t(a, i);
      }),
      (t.prototype.divide = function (t) {
        if (!this.field.equals(t.field))
          throw new l('GenericGFPolys do not have same GenericGF field');
        if (t.isZero()) throw new l('Divide by 0');
        for (
          var e = this.field,
            r = e.getZero(),
            n = this,
            o = t.getCoefficient(t.getDegree()),
            i = e.inverse(o);
          n.getDegree() >= t.getDegree() && !n.isZero();

        ) {
          var a = n.getDegree() - t.getDegree(),
            u = e.multiply(n.getCoefficient(n.getDegree()), i),
            s = t.multiplyByMonomial(a, u),
            c = e.buildMonomial(a, u);
          (r = r.addOrSubtract(c)), (n = n.addOrSubtract(s));
        }
        return [r, n];
      }),
      (t.prototype.toString = function () {
        for (var t = '', e = this.getDegree(); e >= 0; e--) {
          var r = this.getCoefficient(e);
          if (0 !== r) {
            if (
              (r < 0 ? ((t += ' - '), (r = -r)) : t.length > 0 && (t += ' + '),
              0 === e || 1 !== r)
            ) {
              var n = this.field.log(r);
              0 === n
                ? (t += '1')
                : 1 === n
                ? (t += 'a')
                : ((t += 'a^'), (t += n));
            }
            0 !== e && (1 === e ? (t += 'x') : ((t += 'x^'), (t += e)));
          }
        }
        return t;
      }),
      t
    );
  })(),
  ct = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  ft = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return ct(e, t), (e.kind = 'ArithmeticException'), e;
  })(s),
  ht = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  lt = (function (t) {
    function e(e, r, n) {
      var o = t.call(this) || this;
      (o.primitive = e), (o.size = r), (o.generatorBase = n);
      for (var i = new Int32Array(r), a = 1, u = 0; u < r; u++)
        (i[u] = a), (a *= 2) >= r && ((a ^= e), (a &= r - 1));
      o.expTable = i;
      var s = new Int32Array(r);
      for (u = 0; u < r - 1; u++) s[i[u]] = u;
      return (
        (o.logTable = s),
        (o.zero = new st(o, Int32Array.from([0]))),
        (o.one = new st(o, Int32Array.from([1]))),
        o
      );
    }
    return (
      ht(e, t),
      (e.prototype.getZero = function () {
        return this.zero;
      }),
      (e.prototype.getOne = function () {
        return this.one;
      }),
      (e.prototype.buildMonomial = function (t, e) {
        if (t < 0) throw new l();
        if (0 === e) return this.zero;
        var r = new Int32Array(t + 1);
        return (r[0] = e), new st(this, r);
      }),
      (e.prototype.inverse = function (t) {
        if (0 === t) throw new ft();
        return this.expTable[this.size - this.logTable[t] - 1];
      }),
      (e.prototype.multiply = function (t, e) {
        return 0 === t || 0 === e
          ? 0
          : this.expTable[
              (this.logTable[t] + this.logTable[e]) % (this.size - 1)
            ];
      }),
      (e.prototype.getSize = function () {
        return this.size;
      }),
      (e.prototype.getGeneratorBase = function () {
        return this.generatorBase;
      }),
      (e.prototype.toString = function () {
        return 'GF(0x' + I.toHexString(this.primitive) + ',' + this.size + ')';
      }),
      (e.prototype.equals = function (t) {
        return t === this;
      }),
      (e.AZTEC_DATA_12 = new e(4201, 4096, 1)),
      (e.AZTEC_DATA_10 = new e(1033, 1024, 1)),
      (e.AZTEC_DATA_6 = new e(67, 64, 1)),
      (e.AZTEC_PARAM = new e(19, 16, 1)),
      (e.QR_CODE_FIELD_256 = new e(285, 256, 0)),
      (e.DATA_MATRIX_FIELD_256 = new e(301, 256, 1)),
      (e.AZTEC_DATA_8 = e.DATA_MATRIX_FIELD_256),
      (e.MAXICODE_FIELD_64 = e.AZTEC_DATA_6),
      e
    );
  })(ut),
  dt = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  pt = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return dt(e, t), (e.kind = 'ReedSolomonException'), e;
  })(s),
  gt = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  yt = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return gt(e, t), (e.kind = 'IllegalStateException'), e;
  })(s),
  wt = (function () {
    function t(t) {
      this.field = t;
    }
    return (
      (t.prototype.decode = function (t, e) {
        for (
          var r = this.field,
            n = new st(r, t),
            o = new Int32Array(e),
            i = !0,
            a = 0;
          a < e;
          a++
        ) {
          var u = n.evaluateAt(r.exp(a + r.getGeneratorBase()));
          (o[o.length - 1 - a] = u), 0 !== u && (i = !1);
        }
        if (!i) {
          var s = new st(r, o),
            c = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), s, e),
            f = c[0],
            h = c[1],
            l = this.findErrorLocations(f),
            d = this.findErrorMagnitudes(h, l);
          for (a = 0; a < l.length; a++) {
            var p = t.length - 1 - r.log(l[a]);
            if (p < 0) throw new pt('Bad error location');
            t[p] = lt.addOrSubtract(t[p], d[a]);
          }
        }
      }),
      (t.prototype.runEuclideanAlgorithm = function (t, e, r) {
        if (t.getDegree() < e.getDegree()) {
          var n = t;
          (t = e), (e = n);
        }
        for (
          var o = this.field, i = t, a = e, u = o.getZero(), s = o.getOne();
          a.getDegree() >= ((r / 2) | 0);

        ) {
          var c = i,
            f = u;
          if (((u = s), (i = a).isZero())) throw new pt('r_{i-1} was zero');
          a = c;
          for (
            var h = o.getZero(),
              l = i.getCoefficient(i.getDegree()),
              d = o.inverse(l);
            a.getDegree() >= i.getDegree() && !a.isZero();

          ) {
            var p = a.getDegree() - i.getDegree(),
              g = o.multiply(a.getCoefficient(a.getDegree()), d);
            (h = h.addOrSubtract(o.buildMonomial(p, g))),
              (a = a.addOrSubtract(i.multiplyByMonomial(p, g)));
          }
          if (
            ((s = h.multiply(u).addOrSubtract(f)),
            a.getDegree() >= i.getDegree())
          )
            throw new yt('Division algorithm failed to reduce polynomial?');
        }
        var y = s.getCoefficient(0);
        if (0 === y) throw new pt('sigmaTilde(0) was zero');
        var w = o.inverse(y);
        return [s.multiplyScalar(w), a.multiplyScalar(w)];
      }),
      (t.prototype.findErrorLocations = function (t) {
        var e = t.getDegree();
        if (1 === e) return Int32Array.from([t.getCoefficient(1)]);
        for (
          var r = new Int32Array(e), n = 0, o = this.field, i = 1;
          i < o.getSize() && n < e;
          i++
        )
          0 === t.evaluateAt(i) && ((r[n] = o.inverse(i)), n++);
        if (n !== e)
          throw new pt('Error locator degree does not match number of roots');
        return r;
      }),
      (t.prototype.findErrorMagnitudes = function (t, e) {
        for (
          var r = e.length, n = new Int32Array(r), o = this.field, i = 0;
          i < r;
          i++
        ) {
          for (var a = o.inverse(e[i]), u = 1, s = 0; s < r; s++)
            if (i !== s) {
              var c = o.multiply(e[s], a),
                f = 0 == (1 & c) ? 1 | c : -2 & c;
              u = o.multiply(u, f);
            }
          (n[i] = o.multiply(t.evaluateAt(a), o.inverse(u))),
            0 !== o.getGeneratorBase() && (n[i] = o.multiply(n[i], a));
        }
        return n;
      }),
      t
    );
  })();
!(function (t) {
  (t[(t.UPPER = 0)] = 'UPPER'),
    (t[(t.LOWER = 1)] = 'LOWER'),
    (t[(t.MIXED = 2)] = 'MIXED'),
    (t[(t.DIGIT = 3)] = 'DIGIT'),
    (t[(t.PUNCT = 4)] = 'PUNCT'),
    (t[(t.BINARY = 5)] = 'BINARY');
})(ot || (ot = {}));
var _t = (function () {
    function t() {}
    return (
      (t.prototype.decode = function (e) {
        this.ddata = e;
        var r = e.getBits(),
          n = this.extractBits(r),
          o = this.correctBits(n),
          i = t.convertBoolArrayToByteArray(o),
          a = t.getEncodedData(o),
          u = new at(i, a, null, null);
        return u.setNumBits(o.length), u;
      }),
      (t.highLevelDecode = function (t) {
        return this.getEncodedData(t);
      }),
      (t.getEncodedData = function (e) {
        for (
          var r = e.length, n = ot.UPPER, o = ot.UPPER, i = '', a = 0;
          a < r;

        )
          if (o === ot.BINARY) {
            if (r - a < 5) break;
            var u = t.readCode(e, a, 5);
            if (((a += 5), 0 === u)) {
              if (r - a < 11) break;
              (u = t.readCode(e, a, 11) + 31), (a += 11);
            }
            for (var s = 0; s < u; s++) {
              if (r - a < 8) {
                a = r;
                break;
              }
              var c = t.readCode(e, a, 8);
              (i += F.castAsNonUtf8Char(c)), (a += 8);
            }
            o = n;
          } else {
            var f = o === ot.DIGIT ? 4 : 5;
            if (r - a < f) break;
            c = t.readCode(e, a, f);
            a += f;
            var h = t.getCharacter(o, c);
            h.startsWith('CTRL_')
              ? ((n = o),
                (o = t.getTable(h.charAt(5))),
                'L' === h.charAt(6) && (n = o))
              : ((i += h), (o = n));
          }
        return i;
      }),
      (t.getTable = function (t) {
        switch (t) {
          case 'L':
            return ot.LOWER;
          case 'P':
            return ot.PUNCT;
          case 'M':
            return ot.MIXED;
          case 'D':
            return ot.DIGIT;
          case 'B':
            return ot.BINARY;
          default:
            return ot.UPPER;
        }
      }),
      (t.getCharacter = function (e, r) {
        switch (e) {
          case ot.UPPER:
            return t.UPPER_TABLE[r];
          case ot.LOWER:
            return t.LOWER_TABLE[r];
          case ot.MIXED:
            return t.MIXED_TABLE[r];
          case ot.PUNCT:
            return t.PUNCT_TABLE[r];
          case ot.DIGIT:
            return t.DIGIT_TABLE[r];
          default:
            throw new yt('Bad table');
        }
      }),
      (t.prototype.correctBits = function (e) {
        var r, n;
        this.ddata.getNbLayers() <= 2
          ? ((n = 6), (r = lt.AZTEC_DATA_6))
          : this.ddata.getNbLayers() <= 8
          ? ((n = 8), (r = lt.AZTEC_DATA_8))
          : this.ddata.getNbLayers() <= 22
          ? ((n = 10), (r = lt.AZTEC_DATA_10))
          : ((n = 12), (r = lt.AZTEC_DATA_12));
        var o = this.ddata.getNbDatablocks(),
          i = e.length / n;
        if (i < o) throw new R();
        for (
          var a = e.length % n, u = new Int32Array(i), s = 0;
          s < i;
          s++, a += n
        )
          u[s] = t.readCode(e, a, n);
        try {
          new wt(r).decode(u, i - o);
        } catch (t) {
          throw new R(t);
        }
        var c = (1 << n) - 1,
          f = 0;
        for (s = 0; s < o; s++) {
          if (0 === (d = u[s]) || d === c) throw new R();
          (1 !== d && d !== c - 1) || f++;
        }
        var h = new Array(o * n - f),
          l = 0;
        for (s = 0; s < o; s++) {
          var d;
          if (1 === (d = u[s]) || d === c - 1)
            h.fill(d > 1, l, l + n - 1), (l += n - 1);
          else for (var p = n - 1; p >= 0; --p) h[l++] = 0 != (d & (1 << p));
        }
        return h;
      }),
      (t.prototype.extractBits = function (t) {
        var e = this.ddata.isCompact(),
          r = this.ddata.getNbLayers(),
          n = (e ? 11 : 14) + 4 * r,
          o = new Int32Array(n),
          i = new Array(this.totalBitsInLayer(r, e));
        if (e) for (var a = 0; a < o.length; a++) o[a] = a;
        else {
          var u = n + 1 + 2 * I.truncDivision(I.truncDivision(n, 2) - 1, 15),
            s = n / 2,
            c = I.truncDivision(u, 2);
          for (a = 0; a < s; a++) {
            var f = a + I.truncDivision(a, 15);
            (o[s - a - 1] = c - f - 1), (o[s + a] = c + f + 1);
          }
        }
        a = 0;
        for (var h = 0; a < r; a++) {
          for (
            var l = 4 * (r - a) + (e ? 9 : 12), d = 2 * a, p = n - 1 - d, g = 0;
            g < l;
            g++
          )
            for (var y = 2 * g, w = 0; w < 2; w++)
              (i[h + y + w] = t.get(o[d + w], o[d + g])),
                (i[h + 2 * l + y + w] = t.get(o[d + g], o[p - w])),
                (i[h + 4 * l + y + w] = t.get(o[p - w], o[p - g])),
                (i[h + 6 * l + y + w] = t.get(o[p - g], o[d + w]));
          h += 8 * l;
        }
        return i;
      }),
      (t.readCode = function (t, e, r) {
        for (var n = 0, o = e; o < e + r; o++) (n <<= 1), t[o] && (n |= 1);
        return n;
      }),
      (t.readByte = function (e, r) {
        var n = e.length - r;
        return n >= 8 ? t.readCode(e, r, 8) : t.readCode(e, r, n) << (8 - n);
      }),
      (t.convertBoolArrayToByteArray = function (e) {
        for (
          var r = new Uint8Array((e.length + 7) / 8), n = 0;
          n < r.length;
          n++
        )
          r[n] = t.readByte(e, 8 * n);
        return r;
      }),
      (t.prototype.totalBitsInLayer = function (t, e) {
        return ((e ? 88 : 112) + 16 * t) * t;
      }),
      (t.UPPER_TABLE = [
        'CTRL_PS',
        ' ',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'CTRL_LL',
        'CTRL_ML',
        'CTRL_DL',
        'CTRL_BS',
      ]),
      (t.LOWER_TABLE = [
        'CTRL_PS',
        ' ',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'CTRL_US',
        'CTRL_ML',
        'CTRL_DL',
        'CTRL_BS',
      ]),
      (t.MIXED_TABLE = [
        'CTRL_PS',
        ' ',
        '\\1',
        '\\2',
        '\\3',
        '\\4',
        '\\5',
        '\\6',
        '\\7',
        '\b',
        '\t',
        '\n',
        '\\13',
        '\f',
        '\r',
        '\\33',
        '\\34',
        '\\35',
        '\\36',
        '\\37',
        '@',
        '\\',
        '^',
        '_',
        '`',
        '|',
        '~',
        '\\177',
        'CTRL_LL',
        'CTRL_UL',
        'CTRL_PL',
        'CTRL_BS',
      ]),
      (t.PUNCT_TABLE = [
        '',
        '\r',
        '\r\n',
        '. ',
        ', ',
        ': ',
        '!',
        '"',
        '#',
        '$',
        '%',
        '&',
        "'",
        '(',
        ')',
        '*',
        '+',
        ',',
        '-',
        '.',
        '/',
        ':',
        ';',
        '<',
        '=',
        '>',
        '?',
        '[',
        ']',
        '{',
        '}',
        'CTRL_UL',
      ]),
      (t.DIGIT_TABLE = [
        'CTRL_PS',
        ' ',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        ',',
        '.',
        'CTRL_UL',
        'CTRL_US',
      ]),
      t
    );
  })(),
  vt = (function () {
    function t() {}
    return (
      (t.round = function (t) {
        return NaN === t
          ? 0
          : t <= Number.MIN_SAFE_INTEGER
          ? Number.MIN_SAFE_INTEGER
          : t >= Number.MAX_SAFE_INTEGER
          ? Number.MAX_SAFE_INTEGER
          : (t + (t < 0 ? -0.5 : 0.5)) | 0;
      }),
      (t.distance = function (t, e, r, n) {
        var o = t - r,
          i = e - n;
        return Math.sqrt(o * o + i * i);
      }),
      (t.sum = function (t) {
        for (var e = 0, r = 0, n = t.length; r !== n; r++) {
          e += t[r];
        }
        return e;
      }),
      t
    );
  })(),
  mt = (function () {
    function t() {}
    return (
      (t.floatToIntBits = function (t) {
        return t;
      }),
      (t.MAX_VALUE = Number.MAX_SAFE_INTEGER),
      t
    );
  })(),
  At = (function () {
    function t(t, e) {
      (this.x = t), (this.y = e);
    }
    return (
      (t.prototype.getX = function () {
        return this.x;
      }),
      (t.prototype.getY = function () {
        return this.y;
      }),
      (t.prototype.equals = function (e) {
        if (e instanceof t) {
          var r = e;
          return this.x === r.x && this.y === r.y;
        }
        return !1;
      }),
      (t.prototype.hashCode = function () {
        return 31 * mt.floatToIntBits(this.x) + mt.floatToIntBits(this.y);
      }),
      (t.prototype.toString = function () {
        return '(' + this.x + ',' + this.y + ')';
      }),
      (t.orderBestPatterns = function (t) {
        var e,
          r,
          n,
          o = this.distance(t[0], t[1]),
          i = this.distance(t[1], t[2]),
          a = this.distance(t[0], t[2]);
        if (
          (i >= o && i >= a
            ? ((r = t[0]), (e = t[1]), (n = t[2]))
            : a >= i && a >= o
            ? ((r = t[1]), (e = t[0]), (n = t[2]))
            : ((r = t[2]), (e = t[0]), (n = t[1])),
          this.crossProductZ(e, r, n) < 0)
        ) {
          var u = e;
          (e = n), (n = u);
        }
        (t[0] = e), (t[1] = r), (t[2] = n);
      }),
      (t.distance = function (t, e) {
        return vt.distance(t.x, t.y, e.x, e.y);
      }),
      (t.crossProductZ = function (t, e, r) {
        var n = e.x,
          o = e.y;
        return (r.x - n) * (t.y - o) - (r.y - o) * (t.x - n);
      }),
      t
    );
  })(),
  Et = (function () {
    function t(t, e) {
      (this.bits = t), (this.points = e);
    }
    return (
      (t.prototype.getBits = function () {
        return this.bits;
      }),
      (t.prototype.getPoints = function () {
        return this.points;
      }),
      t
    );
  })(),
  Ct = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  It = (function (t) {
    function e(e, r, n, o, i) {
      var a = t.call(this, e, r) || this;
      return (a.compact = n), (a.nbDatablocks = o), (a.nbLayers = i), a;
    }
    return (
      Ct(e, t),
      (e.prototype.getNbLayers = function () {
        return this.nbLayers;
      }),
      (e.prototype.getNbDatablocks = function () {
        return this.nbDatablocks;
      }),
      (e.prototype.isCompact = function () {
        return this.compact;
      }),
      e
    );
  })(Et),
  St = (function () {
    function t(e, r, n, o) {
      (this.image = e),
        (this.height = e.getHeight()),
        (this.width = e.getWidth()),
        null == r && (r = t.INIT_SIZE),
        null == n && (n = (e.getWidth() / 2) | 0),
        null == o && (o = (e.getHeight() / 2) | 0);
      var i = (r / 2) | 0;
      if (
        ((this.leftInit = n - i),
        (this.rightInit = n + i),
        (this.upInit = o - i),
        (this.downInit = o + i),
        this.upInit < 0 ||
          this.leftInit < 0 ||
          this.downInit >= this.height ||
          this.rightInit >= this.width)
      )
        throw new U();
    }
    return (
      (t.prototype.detect = function () {
        for (
          var t = this.leftInit,
            e = this.rightInit,
            r = this.upInit,
            n = this.downInit,
            o = !1,
            i = !0,
            a = !1,
            u = !1,
            s = !1,
            c = !1,
            f = !1,
            h = this.width,
            l = this.height;
          i;

        ) {
          i = !1;
          for (var d = !0; (d || !u) && e < h; )
            (d = this.containsBlackPoint(r, n, e, !1))
              ? (e++, (i = !0), (u = !0))
              : u || e++;
          if (e >= h) {
            o = !0;
            break;
          }
          for (var p = !0; (p || !s) && n < l; )
            (p = this.containsBlackPoint(t, e, n, !0))
              ? (n++, (i = !0), (s = !0))
              : s || n++;
          if (n >= l) {
            o = !0;
            break;
          }
          for (var g = !0; (g || !c) && t >= 0; )
            (g = this.containsBlackPoint(r, n, t, !1))
              ? (t--, (i = !0), (c = !0))
              : c || t--;
          if (t < 0) {
            o = !0;
            break;
          }
          for (var y = !0; (y || !f) && r >= 0; )
            (y = this.containsBlackPoint(t, e, r, !0))
              ? (r--, (i = !0), (f = !0))
              : f || r--;
          if (r < 0) {
            o = !0;
            break;
          }
          i && (a = !0);
        }
        if (!o && a) {
          for (var w = e - t, _ = null, v = 1; null === _ && v < w; v++)
            _ = this.getBlackPointOnSegment(t, n - v, t + v, n);
          if (null == _) throw new U();
          var m = null;
          for (v = 1; null === m && v < w; v++)
            m = this.getBlackPointOnSegment(t, r + v, t + v, r);
          if (null == m) throw new U();
          var A = null;
          for (v = 1; null === A && v < w; v++)
            A = this.getBlackPointOnSegment(e, r + v, e - v, r);
          if (null == A) throw new U();
          var E = null;
          for (v = 1; null === E && v < w; v++)
            E = this.getBlackPointOnSegment(e, n - v, e - v, n);
          if (null == E) throw new U();
          return this.centerEdges(E, _, A, m);
        }
        throw new U();
      }),
      (t.prototype.getBlackPointOnSegment = function (t, e, r, n) {
        for (
          var o = vt.round(vt.distance(t, e, r, n)),
            i = (r - t) / o,
            a = (n - e) / o,
            u = this.image,
            s = 0;
          s < o;
          s++
        ) {
          var c = vt.round(t + s * i),
            f = vt.round(e + s * a);
          if (u.get(c, f)) return new At(c, f);
        }
        return null;
      }),
      (t.prototype.centerEdges = function (e, r, n, o) {
        var i = e.getX(),
          a = e.getY(),
          u = r.getX(),
          s = r.getY(),
          c = n.getX(),
          f = n.getY(),
          h = o.getX(),
          l = o.getY(),
          d = t.CORR;
        return i < this.width / 2
          ? [
              new At(h - d, l + d),
              new At(u + d, s + d),
              new At(c - d, f - d),
              new At(i + d, a - d),
            ]
          : [
              new At(h + d, l + d),
              new At(u + d, s - d),
              new At(c - d, f + d),
              new At(i - d, a - d),
            ];
      }),
      (t.prototype.containsBlackPoint = function (t, e, r, n) {
        var o = this.image;
        if (n) {
          for (var i = t; i <= e; i++) if (o.get(i, r)) return !0;
        } else for (var a = t; a <= e; a++) if (o.get(r, a)) return !0;
        return !1;
      }),
      (t.INIT_SIZE = 10),
      (t.CORR = 1),
      t
    );
  })(),
  Ot = (function () {
    function t() {}
    return (
      (t.checkAndNudgePoints = function (t, e) {
        for (
          var r = t.getWidth(), n = t.getHeight(), o = !0, i = 0;
          i < e.length && o;
          i += 2
        ) {
          var a = Math.floor(e[i]),
            u = Math.floor(e[i + 1]);
          if (a < -1 || a > r || u < -1 || u > n) throw new U();
          (o = !1),
            -1 === a
              ? ((e[i] = 0), (o = !0))
              : a === r && ((e[i] = r - 1), (o = !0)),
            -1 === u
              ? ((e[i + 1] = 0), (o = !0))
              : u === n && ((e[i + 1] = n - 1), (o = !0));
        }
        o = !0;
        for (i = e.length - 2; i >= 0 && o; i -= 2) {
          (a = Math.floor(e[i])), (u = Math.floor(e[i + 1]));
          if (a < -1 || a > r || u < -1 || u > n) throw new U();
          (o = !1),
            -1 === a
              ? ((e[i] = 0), (o = !0))
              : a === r && ((e[i] = r - 1), (o = !0)),
            -1 === u
              ? ((e[i + 1] = 0), (o = !0))
              : u === n && ((e[i + 1] = n - 1), (o = !0));
        }
      }),
      t
    );
  })(),
  Tt = (function () {
    function t(t, e, r, n, o, i, a, u, s) {
      (this.a11 = t),
        (this.a21 = e),
        (this.a31 = r),
        (this.a12 = n),
        (this.a22 = o),
        (this.a32 = i),
        (this.a13 = a),
        (this.a23 = u),
        (this.a33 = s);
    }
    return (
      (t.quadrilateralToQuadrilateral = function (
        e,
        r,
        n,
        o,
        i,
        a,
        u,
        s,
        c,
        f,
        h,
        l,
        d,
        p,
        g,
        y
      ) {
        var w = t.quadrilateralToSquare(e, r, n, o, i, a, u, s);
        return t.squareToQuadrilateral(c, f, h, l, d, p, g, y).times(w);
      }),
      (t.prototype.transformPoints = function (t) {
        for (
          var e = t.length,
            r = this.a11,
            n = this.a12,
            o = this.a13,
            i = this.a21,
            a = this.a22,
            u = this.a23,
            s = this.a31,
            c = this.a32,
            f = this.a33,
            h = 0;
          h < e;
          h += 2
        ) {
          var l = t[h],
            d = t[h + 1],
            p = o * l + u * d + f;
          (t[h] = (r * l + i * d + s) / p),
            (t[h + 1] = (n * l + a * d + c) / p);
        }
      }),
      (t.prototype.transformPointsWithValues = function (t, e) {
        for (
          var r = this.a11,
            n = this.a12,
            o = this.a13,
            i = this.a21,
            a = this.a22,
            u = this.a23,
            s = this.a31,
            c = this.a32,
            f = this.a33,
            h = t.length,
            l = 0;
          l < h;
          l++
        ) {
          var d = t[l],
            p = e[l],
            g = o * d + u * p + f;
          (t[l] = (r * d + i * p + s) / g), (e[l] = (n * d + a * p + c) / g);
        }
      }),
      (t.squareToQuadrilateral = function (e, r, n, o, i, a, u, s) {
        var c = e - n + i - u,
          f = r - o + a - s;
        if (0 === c && 0 === f)
          return new t(n - e, i - n, e, o - r, a - o, r, 0, 0, 1);
        var h = n - i,
          l = u - i,
          d = o - a,
          p = s - a,
          g = h * p - l * d,
          y = (c * p - l * f) / g,
          w = (h * f - c * d) / g;
        return new t(
          n - e + y * n,
          u - e + w * u,
          e,
          o - r + y * o,
          s - r + w * s,
          r,
          y,
          w,
          1
        );
      }),
      (t.quadrilateralToSquare = function (e, r, n, o, i, a, u, s) {
        return t.squareToQuadrilateral(e, r, n, o, i, a, u, s).buildAdjoint();
      }),
      (t.prototype.buildAdjoint = function () {
        return new t(
          this.a22 * this.a33 - this.a23 * this.a32,
          this.a23 * this.a31 - this.a21 * this.a33,
          this.a21 * this.a32 - this.a22 * this.a31,
          this.a13 * this.a32 - this.a12 * this.a33,
          this.a11 * this.a33 - this.a13 * this.a31,
          this.a12 * this.a31 - this.a11 * this.a32,
          this.a12 * this.a23 - this.a13 * this.a22,
          this.a13 * this.a21 - this.a11 * this.a23,
          this.a11 * this.a22 - this.a12 * this.a21
        );
      }),
      (t.prototype.times = function (e) {
        return new t(
          this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13,
          this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23,
          this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33,
          this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13,
          this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23,
          this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33,
          this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13,
          this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23,
          this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33
        );
      }),
      t
    );
  })(),
  bt = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Rt = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      bt(e, t),
      (e.prototype.sampleGrid = function (
        t,
        e,
        r,
        n,
        o,
        i,
        a,
        u,
        s,
        c,
        f,
        h,
        l,
        d,
        p,
        g,
        y,
        w,
        _
      ) {
        var v = Tt.quadrilateralToQuadrilateral(
          n,
          o,
          i,
          a,
          u,
          s,
          c,
          f,
          h,
          l,
          d,
          p,
          g,
          y,
          w,
          _
        );
        return this.sampleGridWithTransform(t, e, r, v);
      }),
      (e.prototype.sampleGridWithTransform = function (t, e, r, n) {
        if (e <= 0 || r <= 0) throw new U();
        for (
          var o = new x(e, r), i = new Float32Array(2 * e), a = 0;
          a < r;
          a++
        ) {
          for (var u = i.length, s = a + 0.5, c = 0; c < u; c += 2)
            (i[c] = c / 2 + 0.5), (i[c + 1] = s);
          n.transformPoints(i), Ot.checkAndNudgePoints(t, i);
          try {
            for (c = 0; c < u; c += 2)
              t.get(Math.floor(i[c]), Math.floor(i[c + 1])) && o.set(c / 2, a);
          } catch (t) {
            throw new U();
          }
        }
        return o;
      }),
      e
    );
  })(Ot),
  Nt = (function () {
    function t() {}
    return (
      (t.setGridSampler = function (e) {
        t.gridSampler = e;
      }),
      (t.getInstance = function () {
        return t.gridSampler;
      }),
      (t.gridSampler = new Rt()),
      t
    );
  })(),
  Dt = (function () {
    function t(t, e) {
      (this.x = t), (this.y = e);
    }
    return (
      (t.prototype.toResultPoint = function () {
        return new At(this.getX(), this.getY());
      }),
      (t.prototype.getX = function () {
        return this.x;
      }),
      (t.prototype.getY = function () {
        return this.y;
      }),
      t
    );
  })(),
  Pt = (function () {
    function t(t) {
      (this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799])),
        (this.image = t);
    }
    return (
      (t.prototype.detect = function () {
        return this.detectMirror(!1);
      }),
      (t.prototype.detectMirror = function (t) {
        var e = this.getMatrixCenter(),
          r = this.getBullsEyeCorners(e);
        if (t) {
          var n = r[0];
          (r[0] = r[2]), (r[2] = n);
        }
        this.extractParameters(r);
        var o = this.sampleGrid(
            this.image,
            r[this.shift % 4],
            r[(this.shift + 1) % 4],
            r[(this.shift + 2) % 4],
            r[(this.shift + 3) % 4]
          ),
          i = this.getMatrixCornerPoints(r);
        return new It(o, i, this.compact, this.nbDataBlocks, this.nbLayers);
      }),
      (t.prototype.extractParameters = function (t) {
        if (
          !(
            this.isValidPoint(t[0]) &&
            this.isValidPoint(t[1]) &&
            this.isValidPoint(t[2]) &&
            this.isValidPoint(t[3])
          )
        )
          throw new U();
        var e = 2 * this.nbCenterLayers,
          r = new Int32Array([
            this.sampleLine(t[0], t[1], e),
            this.sampleLine(t[1], t[2], e),
            this.sampleLine(t[2], t[3], e),
            this.sampleLine(t[3], t[0], e),
          ]);
        this.shift = this.getRotation(r, e);
        for (var n = 0, o = 0; o < 4; o++) {
          var i = r[(this.shift + o) % 4];
          this.compact
            ? ((n <<= 7), (n += (i >> 1) & 127))
            : ((n <<= 10), (n += ((i >> 2) & 992) + ((i >> 1) & 31)));
        }
        var a = this.getCorrectedParameterData(n, this.compact);
        this.compact
          ? ((this.nbLayers = 1 + (a >> 6)), (this.nbDataBlocks = 1 + (63 & a)))
          : ((this.nbLayers = 1 + (a >> 11)),
            (this.nbDataBlocks = 1 + (2047 & a)));
      }),
      (t.prototype.getRotation = function (t, e) {
        var r = 0;
        t.forEach(function (t, n, o) {
          r = (r << 3) + (((t >> (e - 2)) << 1) + (1 & t));
        }),
          (r = ((1 & r) << 11) + (r >> 1));
        for (var n = 0; n < 4; n++)
          if (I.bitCount(r ^ this.EXPECTED_CORNER_BITS[n]) <= 2) return n;
        throw new U();
      }),
      (t.prototype.getCorrectedParameterData = function (t, e) {
        var r, n;
        e ? ((r = 7), (n = 2)) : ((r = 10), (n = 4));
        for (var o = r - n, i = new Int32Array(r), a = r - 1; a >= 0; --a)
          (i[a] = 15 & t), (t >>= 4);
        try {
          new wt(lt.AZTEC_PARAM).decode(i, o);
        } catch (t) {
          throw new U();
        }
        var u = 0;
        for (a = 0; a < n; a++) u = (u << 4) + i[a];
        return u;
      }),
      (t.prototype.getBullsEyeCorners = function (t) {
        var e = t,
          r = t,
          n = t,
          o = t,
          i = !0;
        for (
          this.nbCenterLayers = 1;
          this.nbCenterLayers < 9;
          this.nbCenterLayers++
        ) {
          var a = this.getFirstDifferent(e, i, 1, -1),
            u = this.getFirstDifferent(r, i, 1, 1),
            s = this.getFirstDifferent(n, i, -1, 1),
            c = this.getFirstDifferent(o, i, -1, -1);
          if (this.nbCenterLayers > 2) {
            var f =
              (this.distancePoint(c, a) * this.nbCenterLayers) /
              (this.distancePoint(o, e) * (this.nbCenterLayers + 2));
            if (
              f < 0.75 ||
              f > 1.25 ||
              !this.isWhiteOrBlackRectangle(a, u, s, c)
            )
              break;
          }
          (e = a), (r = u), (n = s), (o = c), (i = !i);
        }
        if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers)
          throw new U();
        this.compact = 5 === this.nbCenterLayers;
        var h = new At(e.getX() + 0.5, e.getY() - 0.5),
          l = new At(r.getX() + 0.5, r.getY() + 0.5),
          d = new At(n.getX() - 0.5, n.getY() + 0.5),
          p = new At(o.getX() - 0.5, o.getY() - 0.5);
        return this.expandSquare(
          [h, l, d, p],
          2 * this.nbCenterLayers - 3,
          2 * this.nbCenterLayers
        );
      }),
      (t.prototype.getMatrixCenter = function () {
        var t, e, r, n;
        try {
          (t = (s = new St(this.image).detect())[0]),
            (e = s[1]),
            (r = s[2]),
            (n = s[3]);
        } catch (a) {
          var o = this.image.getWidth() / 2,
            i = this.image.getHeight() / 2;
          (t = this.getFirstDifferent(
            new Dt(o + 7, i - 7),
            !1,
            1,
            -1
          ).toResultPoint()),
            (e = this.getFirstDifferent(
              new Dt(o + 7, i + 7),
              !1,
              1,
              1
            ).toResultPoint()),
            (r = this.getFirstDifferent(
              new Dt(o - 7, i + 7),
              !1,
              -1,
              1
            ).toResultPoint()),
            (n = this.getFirstDifferent(
              new Dt(o - 7, i - 7),
              !1,
              -1,
              -1
            ).toResultPoint());
        }
        var a = vt.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4),
          u = vt.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4);
        try {
          var s;
          (t = (s = new St(this.image, 15, a, u).detect())[0]),
            (e = s[1]),
            (r = s[2]),
            (n = s[3]);
        } catch (o) {
          (t = this.getFirstDifferent(
            new Dt(a + 7, u - 7),
            !1,
            1,
            -1
          ).toResultPoint()),
            (e = this.getFirstDifferent(
              new Dt(a + 7, u + 7),
              !1,
              1,
              1
            ).toResultPoint()),
            (r = this.getFirstDifferent(
              new Dt(a - 7, u + 7),
              !1,
              -1,
              1
            ).toResultPoint()),
            (n = this.getFirstDifferent(
              new Dt(a - 7, u - 7),
              !1,
              -1,
              -1
            ).toResultPoint());
        }
        return (
          (a = vt.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4)),
          (u = vt.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4)),
          new Dt(a, u)
        );
      }),
      (t.prototype.getMatrixCornerPoints = function (t) {
        return this.expandSquare(
          t,
          2 * this.nbCenterLayers,
          this.getDimension()
        );
      }),
      (t.prototype.sampleGrid = function (t, e, r, n, o) {
        var i = Nt.getInstance(),
          a = this.getDimension(),
          u = a / 2 - this.nbCenterLayers,
          s = a / 2 + this.nbCenterLayers;
        return i.sampleGrid(
          t,
          a,
          a,
          u,
          u,
          s,
          u,
          s,
          s,
          u,
          s,
          e.getX(),
          e.getY(),
          r.getX(),
          r.getY(),
          n.getX(),
          n.getY(),
          o.getX(),
          o.getY()
        );
      }),
      (t.prototype.sampleLine = function (t, e, r) {
        for (
          var n = 0,
            o = this.distanceResultPoint(t, e),
            i = o / r,
            a = t.getX(),
            u = t.getY(),
            s = (i * (e.getX() - t.getX())) / o,
            c = (i * (e.getY() - t.getY())) / o,
            f = 0;
          f < r;
          f++
        )
          this.image.get(vt.round(a + f * s), vt.round(u + f * c)) &&
            (n |= 1 << (r - f - 1));
        return n;
      }),
      (t.prototype.isWhiteOrBlackRectangle = function (t, e, r, n) {
        (t = new Dt(t.getX() - 3, t.getY() + 3)),
          (e = new Dt(e.getX() - 3, e.getY() - 3)),
          (r = new Dt(r.getX() + 3, r.getY() - 3)),
          (n = new Dt(n.getX() + 3, n.getY() + 3));
        var o = this.getColor(n, t);
        if (0 === o) return !1;
        var i = this.getColor(t, e);
        return (
          i === o &&
          (i = this.getColor(e, r)) === o &&
          (i = this.getColor(r, n)) === o
        );
      }),
      (t.prototype.getColor = function (t, e) {
        for (
          var r = this.distancePoint(t, e),
            n = (e.getX() - t.getX()) / r,
            o = (e.getY() - t.getY()) / r,
            i = 0,
            a = t.getX(),
            u = t.getY(),
            s = this.image.get(t.getX(), t.getY()),
            c = Math.ceil(r),
            f = 0;
          f < c;
          f++
        )
          (a += n),
            (u += o),
            this.image.get(vt.round(a), vt.round(u)) !== s && i++;
        var h = i / r;
        return h > 0.1 && h < 0.9 ? 0 : h <= 0.1 === s ? 1 : -1;
      }),
      (t.prototype.getFirstDifferent = function (t, e, r, n) {
        for (
          var o = t.getX() + r, i = t.getY() + n;
          this.isValid(o, i) && this.image.get(o, i) === e;

        )
          (o += r), (i += n);
        for (o -= r, i -= n; this.isValid(o, i) && this.image.get(o, i) === e; )
          o += r;
        for (o -= r; this.isValid(o, i) && this.image.get(o, i) === e; ) i += n;
        return new Dt(o, (i -= n));
      }),
      (t.prototype.expandSquare = function (t, e, r) {
        var n = r / (2 * e),
          o = t[0].getX() - t[2].getX(),
          i = t[0].getY() - t[2].getY(),
          a = (t[0].getX() + t[2].getX()) / 2,
          u = (t[0].getY() + t[2].getY()) / 2,
          s = new At(a + n * o, u + n * i),
          c = new At(a - n * o, u - n * i);
        return (
          (o = t[1].getX() - t[3].getX()),
          (i = t[1].getY() - t[3].getY()),
          (a = (t[1].getX() + t[3].getX()) / 2),
          (u = (t[1].getY() + t[3].getY()) / 2),
          [s, new At(a + n * o, u + n * i), c, new At(a - n * o, u - n * i)]
        );
      }),
      (t.prototype.isValid = function (t, e) {
        return (
          t >= 0 &&
          t < this.image.getWidth() &&
          e > 0 &&
          e < this.image.getHeight()
        );
      }),
      (t.prototype.isValidPoint = function (t) {
        var e = vt.round(t.getX()),
          r = vt.round(t.getY());
        return this.isValid(e, r);
      }),
      (t.prototype.distancePoint = function (t, e) {
        return vt.distance(t.getX(), t.getY(), e.getX(), e.getY());
      }),
      (t.prototype.distanceResultPoint = function (t, e) {
        return vt.distance(t.getX(), t.getY(), e.getX(), e.getY());
      }),
      (t.prototype.getDimension = function () {
        return this.compact
          ? 4 * this.nbLayers + 11
          : this.nbLayers <= 4
          ? 4 * this.nbLayers + 15
          : 4 * this.nbLayers +
            2 * (I.truncDivision(this.nbLayers - 4, 8) + 1) +
            15;
      }),
      t
    );
  })(),
  Mt = (function () {
    function t() {}
    return (
      (t.prototype.decode = function (t, e) {
        void 0 === e && (e = null);
        var r = null,
          n = new Pt(t.getBlackMatrix()),
          o = null,
          i = null;
        try {
          (o = (a = n.detectMirror(!1)).getPoints()),
            this.reportFoundResultPoints(e, o),
            (i = new _t().decode(a));
        } catch (t) {
          r = t;
        }
        if (null == i)
          try {
            var a;
            (o = (a = n.detectMirror(!0)).getPoints()),
              this.reportFoundResultPoints(e, o),
              (i = new _t().decode(a));
          } catch (t) {
            if (null != r) throw r;
            throw t;
          }
        var u = new et(
            i.getText(),
            i.getRawBytes(),
            i.getNumBits(),
            o,
            nt.AZTEC,
            w.currentTimeMillis()
          ),
          s = i.getByteSegments();
        null != s && u.putMetadata(it.BYTE_SEGMENTS, s);
        var c = i.getECLevel();
        return null != c && u.putMetadata(it.ERROR_CORRECTION_LEVEL, c), u;
      }),
      (t.prototype.reportFoundResultPoints = function (t, e) {
        if (null != t) {
          var r = t.get(T.NEED_RESULT_POINT_CALLBACK);
          null != r &&
            e.forEach(function (t, e, n) {
              r.foundPossibleResultPoint(t);
            });
        }
      }),
      (t.prototype.reset = function () {}),
      t
    );
  })(),
  Bt = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })();
!(function (t) {
  function e(e) {
    return void 0 === e && (e = 500), t.call(this, new Mt(), e) || this;
  }
  Bt(e, t);
})(tt);
var Lt = (function () {
    function t() {}
    return (
      (t.prototype.decode = function (t, e) {
        try {
          return this.doDecode(t, e);
        } catch (c) {
          if (e && !0 === e.get(T.TRY_HARDER) && t.isRotateSupported()) {
            var r = t.rotateCounterClockwise(),
              n = this.doDecode(r, e),
              o = n.getResultMetadata(),
              i = 270;
            null !== o &&
              !0 === o.get(it.ORIENTATION) &&
              (i += o.get(it.ORIENTATION) % 360),
              n.putMetadata(it.ORIENTATION, i);
            var a = n.getResultPoints();
            if (null !== a)
              for (var u = r.getHeight(), s = 0; s < a.length; s++)
                a[s] = new At(u - a[s].getY() - 1, a[s].getX());
            return n;
          }
          throw new U();
        }
      }),
      (t.prototype.reset = function () {}),
      (t.prototype.doDecode = function (t, e) {
        var r,
          n = t.getWidth(),
          o = t.getHeight(),
          i = new S(n),
          a = e && !0 === e.get(T.TRY_HARDER),
          u = Math.max(1, o >> (a ? 8 : 5));
        r = a ? o : 15;
        for (var s = Math.trunc(o / 2), c = 0; c < r; c++) {
          var f = Math.trunc((c + 1) / 2),
            h = s + u * (0 == (1 & c) ? f : -f);
          if (h < 0 || h >= o) break;
          try {
            i = t.getBlackRow(h, i);
          } catch (t) {
            continue;
          }
          for (
            var l = function (t) {
                if (
                  1 === t &&
                  (i.reverse(), e && !0 === e.get(T.NEED_RESULT_POINT_CALLBACK))
                ) {
                  var r = new Map();
                  e.forEach(function (t, e) {
                    return r.set(e, t);
                  }),
                    r.delete(T.NEED_RESULT_POINT_CALLBACK),
                    (e = r);
                }
                try {
                  var o = d.decodeRow(h, i, e);
                  if (1 === t) {
                    o.putMetadata(it.ORIENTATION, 180);
                    var a = o.getResultPoints();
                    null !== a &&
                      ((a[0] = new At(n - a[0].getX() - 1, a[0].getY())),
                      (a[1] = new At(n - a[1].getX() - 1, a[1].getY())));
                  }
                  return { value: o };
                } catch (t) {}
              },
              d = this,
              p = 0;
            p < 2;
            p++
          ) {
            var g = l(p);
            if ('object' == typeof g) return g.value;
          }
        }
        throw new U();
      }),
      (t.recordPattern = function (t, e, r) {
        for (var n = r.length, o = 0; o < n; o++) r[o] = 0;
        var i = t.getSize();
        if (e >= i) throw new U();
        for (var a = !t.get(e), u = 0, s = e; s < i; ) {
          if (t.get(s) !== a) r[u]++;
          else {
            if (++u === n) break;
            (r[u] = 1), (a = !a);
          }
          s++;
        }
        if (u !== n && (u !== n - 1 || s !== i)) throw new U();
      }),
      (t.recordPatternInReverse = function (e, r, n) {
        for (var o = n.length, i = e.get(r); r > 0 && o >= 0; )
          e.get(--r) !== i && (o--, (i = !i));
        if (o >= 0) throw new U();
        t.recordPattern(e, r + 1, n);
      }),
      (t.patternMatchVariance = function (t, e, r) {
        for (var n = t.length, o = 0, i = 0, a = 0; a < n; a++)
          (o += t[a]), (i += e[a]);
        if (o < i) return Number.POSITIVE_INFINITY;
        var u = o / i;
        r *= u;
        for (var s = 0, c = 0; c < n; c++) {
          var f = t[c],
            h = e[c] * u,
            l = f > h ? f - h : h - f;
          if (l > r) return Number.POSITIVE_INFINITY;
          s += l;
        }
        return s / o;
      }),
      t
    );
  })(),
  Ft = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  kt = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      Ft(e, t),
      (e.findStartPattern = function (t) {
        for (
          var r = t.getSize(),
            n = t.getNextSet(0),
            o = 0,
            i = Int32Array.from([0, 0, 0, 0, 0, 0]),
            a = n,
            u = !1,
            s = n;
          s < r;
          s++
        )
          if (t.get(s) !== u) i[o]++;
          else {
            if (5 === o) {
              for (
                var c = e.MAX_AVG_VARIANCE, f = -1, h = e.CODE_START_A;
                h <= e.CODE_START_C;
                h++
              ) {
                var l = Lt.patternMatchVariance(
                  i,
                  e.CODE_PATTERNS[h],
                  e.MAX_INDIVIDUAL_VARIANCE
                );
                l < c && ((c = l), (f = h));
              }
              if (f >= 0 && t.isRange(Math.max(0, a - (s - a) / 2), a, !1))
                return Int32Array.from([a, s, f]);
              (a += i[0] + i[1]),
                ((i = i.slice(2, i.length - 1))[o - 1] = 0),
                (i[o] = 0),
                o--;
            } else o++;
            (i[o] = 1), (u = !u);
          }
        throw new U();
      }),
      (e.decodeCode = function (t, r, n) {
        Lt.recordPattern(t, n, r);
        for (
          var o = e.MAX_AVG_VARIANCE, i = -1, a = 0;
          a < e.CODE_PATTERNS.length;
          a++
        ) {
          var u = e.CODE_PATTERNS[a],
            s = this.patternMatchVariance(r, u, e.MAX_INDIVIDUAL_VARIANCE);
          s < o && ((o = s), (i = a));
        }
        if (i >= 0) return i;
        throw new U();
      }),
      (e.prototype.decodeRow = function (t, r, n) {
        var o,
          i = n && !0 === n.get(T.ASSUME_GS1),
          a = e.findStartPattern(r),
          u = a[2],
          s = 0,
          c = new Uint8Array(20);
        switch (((c[s++] = u), u)) {
          case e.CODE_START_A:
            o = e.CODE_CODE_A;
            break;
          case e.CODE_START_B:
            o = e.CODE_CODE_B;
            break;
          case e.CODE_START_C:
            o = e.CODE_CODE_C;
            break;
          default:
            throw new R();
        }
        for (
          var f = !1,
            h = !1,
            l = '',
            d = a[0],
            p = a[1],
            y = Int32Array.from([0, 0, 0, 0, 0, 0]),
            w = 0,
            _ = 0,
            v = u,
            m = 0,
            A = !0,
            E = !1,
            C = !1;
          !f;

        ) {
          var I = h;
          switch (
            ((h = !1),
            (w = _),
            (_ = e.decodeCode(r, y, p)),
            (c[s++] = _),
            _ !== e.CODE_STOP && (A = !0),
            _ !== e.CODE_STOP && (v += ++m * _),
            (d = p),
            (p += y.reduce(function (t, e) {
              return t + e;
            }, 0)),
            _)
          ) {
            case e.CODE_START_A:
            case e.CODE_START_B:
            case e.CODE_START_C:
              throw new R();
          }
          switch (o) {
            case e.CODE_CODE_A:
              if (_ < 64)
                (l +=
                  C === E
                    ? String.fromCharCode(' '.charCodeAt(0) + _)
                    : String.fromCharCode(' '.charCodeAt(0) + _ + 128)),
                  (C = !1);
              else if (_ < 96)
                (l +=
                  C === E
                    ? String.fromCharCode(_ - 64)
                    : String.fromCharCode(_ + 64)),
                  (C = !1);
              else
                switch ((_ !== e.CODE_STOP && (A = !1), _)) {
                  case e.CODE_FNC_1:
                    i &&
                      (0 === l.length
                        ? (l += ']C1')
                        : (l += String.fromCharCode(29)));
                    break;
                  case e.CODE_FNC_2:
                  case e.CODE_FNC_3:
                    break;
                  case e.CODE_FNC_4_A:
                    !E && C
                      ? ((E = !0), (C = !1))
                      : E && C
                      ? ((E = !1), (C = !1))
                      : (C = !0);
                    break;
                  case e.CODE_SHIFT:
                    (h = !0), (o = e.CODE_CODE_B);
                    break;
                  case e.CODE_CODE_B:
                    o = e.CODE_CODE_B;
                    break;
                  case e.CODE_CODE_C:
                    o = e.CODE_CODE_C;
                    break;
                  case e.CODE_STOP:
                    f = !0;
                }
              break;
            case e.CODE_CODE_B:
              if (_ < 96)
                (l +=
                  C === E
                    ? String.fromCharCode(' '.charCodeAt(0) + _)
                    : String.fromCharCode(' '.charCodeAt(0) + _ + 128)),
                  (C = !1);
              else
                switch ((_ !== e.CODE_STOP && (A = !1), _)) {
                  case e.CODE_FNC_1:
                    i &&
                      (0 === l.length
                        ? (l += ']C1')
                        : (l += String.fromCharCode(29)));
                    break;
                  case e.CODE_FNC_2:
                  case e.CODE_FNC_3:
                    break;
                  case e.CODE_FNC_4_B:
                    !E && C
                      ? ((E = !0), (C = !1))
                      : E && C
                      ? ((E = !1), (C = !1))
                      : (C = !0);
                    break;
                  case e.CODE_SHIFT:
                    (h = !0), (o = e.CODE_CODE_A);
                    break;
                  case e.CODE_CODE_A:
                    o = e.CODE_CODE_A;
                    break;
                  case e.CODE_CODE_C:
                    o = e.CODE_CODE_C;
                    break;
                  case e.CODE_STOP:
                    f = !0;
                }
              break;
            case e.CODE_CODE_C:
              if (_ < 100) _ < 10 && (l += '0'), (l += _);
              else
                switch ((_ !== e.CODE_STOP && (A = !1), _)) {
                  case e.CODE_FNC_1:
                    i &&
                      (0 === l.length
                        ? (l += ']C1')
                        : (l += String.fromCharCode(29)));
                    break;
                  case e.CODE_CODE_A:
                    o = e.CODE_CODE_A;
                    break;
                  case e.CODE_CODE_B:
                    o = e.CODE_CODE_B;
                    break;
                  case e.CODE_STOP:
                    f = !0;
                }
          }
          I && (o = o === e.CODE_CODE_A ? e.CODE_CODE_B : e.CODE_CODE_A);
        }
        var S = p - d;
        if (
          ((p = r.getNextUnset(p)),
          !r.isRange(p, Math.min(r.getSize(), p + (p - d) / 2), !1))
        )
          throw new U();
        if ((v -= m * w) % 103 !== w) throw new g();
        var O = l.length;
        if (0 === O) throw new U();
        O > 0 &&
          A &&
          (l =
            o === e.CODE_CODE_C
              ? l.substring(0, O - 2)
              : l.substring(0, O - 1));
        for (
          var b = (a[1] + a[0]) / 2,
            N = d + S / 2,
            D = c.length,
            P = new Uint8Array(D),
            M = 0;
          M < D;
          M++
        )
          P[M] = c[M];
        var B = [new At(b, t), new At(N, t)];
        return new et(l, P, 0, B, nt.CODE_128, new Date().getTime());
      }),
      (e.CODE_PATTERNS = [
        Int32Array.from([2, 1, 2, 2, 2, 2]),
        Int32Array.from([2, 2, 2, 1, 2, 2]),
        Int32Array.from([2, 2, 2, 2, 2, 1]),
        Int32Array.from([1, 2, 1, 2, 2, 3]),
        Int32Array.from([1, 2, 1, 3, 2, 2]),
        Int32Array.from([1, 3, 1, 2, 2, 2]),
        Int32Array.from([1, 2, 2, 2, 1, 3]),
        Int32Array.from([1, 2, 2, 3, 1, 2]),
        Int32Array.from([1, 3, 2, 2, 1, 2]),
        Int32Array.from([2, 2, 1, 2, 1, 3]),
        Int32Array.from([2, 2, 1, 3, 1, 2]),
        Int32Array.from([2, 3, 1, 2, 1, 2]),
        Int32Array.from([1, 1, 2, 2, 3, 2]),
        Int32Array.from([1, 2, 2, 1, 3, 2]),
        Int32Array.from([1, 2, 2, 2, 3, 1]),
        Int32Array.from([1, 1, 3, 2, 2, 2]),
        Int32Array.from([1, 2, 3, 1, 2, 2]),
        Int32Array.from([1, 2, 3, 2, 2, 1]),
        Int32Array.from([2, 2, 3, 2, 1, 1]),
        Int32Array.from([2, 2, 1, 1, 3, 2]),
        Int32Array.from([2, 2, 1, 2, 3, 1]),
        Int32Array.from([2, 1, 3, 2, 1, 2]),
        Int32Array.from([2, 2, 3, 1, 1, 2]),
        Int32Array.from([3, 1, 2, 1, 3, 1]),
        Int32Array.from([3, 1, 1, 2, 2, 2]),
        Int32Array.from([3, 2, 1, 1, 2, 2]),
        Int32Array.from([3, 2, 1, 2, 2, 1]),
        Int32Array.from([3, 1, 2, 2, 1, 2]),
        Int32Array.from([3, 2, 2, 1, 1, 2]),
        Int32Array.from([3, 2, 2, 2, 1, 1]),
        Int32Array.from([2, 1, 2, 1, 2, 3]),
        Int32Array.from([2, 1, 2, 3, 2, 1]),
        Int32Array.from([2, 3, 2, 1, 2, 1]),
        Int32Array.from([1, 1, 1, 3, 2, 3]),
        Int32Array.from([1, 3, 1, 1, 2, 3]),
        Int32Array.from([1, 3, 1, 3, 2, 1]),
        Int32Array.from([1, 1, 2, 3, 1, 3]),
        Int32Array.from([1, 3, 2, 1, 1, 3]),
        Int32Array.from([1, 3, 2, 3, 1, 1]),
        Int32Array.from([2, 1, 1, 3, 1, 3]),
        Int32Array.from([2, 3, 1, 1, 1, 3]),
        Int32Array.from([2, 3, 1, 3, 1, 1]),
        Int32Array.from([1, 1, 2, 1, 3, 3]),
        Int32Array.from([1, 1, 2, 3, 3, 1]),
        Int32Array.from([1, 3, 2, 1, 3, 1]),
        Int32Array.from([1, 1, 3, 1, 2, 3]),
        Int32Array.from([1, 1, 3, 3, 2, 1]),
        Int32Array.from([1, 3, 3, 1, 2, 1]),
        Int32Array.from([3, 1, 3, 1, 2, 1]),
        Int32Array.from([2, 1, 1, 3, 3, 1]),
        Int32Array.from([2, 3, 1, 1, 3, 1]),
        Int32Array.from([2, 1, 3, 1, 1, 3]),
        Int32Array.from([2, 1, 3, 3, 1, 1]),
        Int32Array.from([2, 1, 3, 1, 3, 1]),
        Int32Array.from([3, 1, 1, 1, 2, 3]),
        Int32Array.from([3, 1, 1, 3, 2, 1]),
        Int32Array.from([3, 3, 1, 1, 2, 1]),
        Int32Array.from([3, 1, 2, 1, 1, 3]),
        Int32Array.from([3, 1, 2, 3, 1, 1]),
        Int32Array.from([3, 3, 2, 1, 1, 1]),
        Int32Array.from([3, 1, 4, 1, 1, 1]),
        Int32Array.from([2, 2, 1, 4, 1, 1]),
        Int32Array.from([4, 3, 1, 1, 1, 1]),
        Int32Array.from([1, 1, 1, 2, 2, 4]),
        Int32Array.from([1, 1, 1, 4, 2, 2]),
        Int32Array.from([1, 2, 1, 1, 2, 4]),
        Int32Array.from([1, 2, 1, 4, 2, 1]),
        Int32Array.from([1, 4, 1, 1, 2, 2]),
        Int32Array.from([1, 4, 1, 2, 2, 1]),
        Int32Array.from([1, 1, 2, 2, 1, 4]),
        Int32Array.from([1, 1, 2, 4, 1, 2]),
        Int32Array.from([1, 2, 2, 1, 1, 4]),
        Int32Array.from([1, 2, 2, 4, 1, 1]),
        Int32Array.from([1, 4, 2, 1, 1, 2]),
        Int32Array.from([1, 4, 2, 2, 1, 1]),
        Int32Array.from([2, 4, 1, 2, 1, 1]),
        Int32Array.from([2, 2, 1, 1, 1, 4]),
        Int32Array.from([4, 1, 3, 1, 1, 1]),
        Int32Array.from([2, 4, 1, 1, 1, 2]),
        Int32Array.from([1, 3, 4, 1, 1, 1]),
        Int32Array.from([1, 1, 1, 2, 4, 2]),
        Int32Array.from([1, 2, 1, 1, 4, 2]),
        Int32Array.from([1, 2, 1, 2, 4, 1]),
        Int32Array.from([1, 1, 4, 2, 1, 2]),
        Int32Array.from([1, 2, 4, 1, 1, 2]),
        Int32Array.from([1, 2, 4, 2, 1, 1]),
        Int32Array.from([4, 1, 1, 2, 1, 2]),
        Int32Array.from([4, 2, 1, 1, 1, 2]),
        Int32Array.from([4, 2, 1, 2, 1, 1]),
        Int32Array.from([2, 1, 2, 1, 4, 1]),
        Int32Array.from([2, 1, 4, 1, 2, 1]),
        Int32Array.from([4, 1, 2, 1, 2, 1]),
        Int32Array.from([1, 1, 1, 1, 4, 3]),
        Int32Array.from([1, 1, 1, 3, 4, 1]),
        Int32Array.from([1, 3, 1, 1, 4, 1]),
        Int32Array.from([1, 1, 4, 1, 1, 3]),
        Int32Array.from([1, 1, 4, 3, 1, 1]),
        Int32Array.from([4, 1, 1, 1, 1, 3]),
        Int32Array.from([4, 1, 1, 3, 1, 1]),
        Int32Array.from([1, 1, 3, 1, 4, 1]),
        Int32Array.from([1, 1, 4, 1, 3, 1]),
        Int32Array.from([3, 1, 1, 1, 4, 1]),
        Int32Array.from([4, 1, 1, 1, 3, 1]),
        Int32Array.from([2, 1, 1, 4, 1, 2]),
        Int32Array.from([2, 1, 1, 2, 1, 4]),
        Int32Array.from([2, 1, 1, 2, 3, 2]),
        Int32Array.from([2, 3, 3, 1, 1, 1, 2]),
      ]),
      (e.MAX_AVG_VARIANCE = 0.25),
      (e.MAX_INDIVIDUAL_VARIANCE = 0.7),
      (e.CODE_SHIFT = 98),
      (e.CODE_CODE_C = 99),
      (e.CODE_CODE_B = 100),
      (e.CODE_CODE_A = 101),
      (e.CODE_FNC_1 = 102),
      (e.CODE_FNC_2 = 97),
      (e.CODE_FNC_3 = 96),
      (e.CODE_FNC_4_A = 101),
      (e.CODE_FNC_4_B = 100),
      (e.CODE_START_A = 103),
      (e.CODE_START_B = 104),
      (e.CODE_START_C = 105),
      (e.CODE_STOP = 106),
      e
    );
  })(Lt),
  xt = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Vt = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Ut = (function (t) {
    function e(e, r) {
      void 0 === e && (e = !1), void 0 === r && (r = !1);
      var n = t.call(this) || this;
      return (
        (n.usingCheckDigit = e),
        (n.extendedMode = r),
        (n.decodeRowResult = ''),
        (n.counters = new Int32Array(9)),
        n
      );
    }
    return (
      xt(e, t),
      (e.prototype.decodeRow = function (t, r, n) {
        var o,
          i,
          a,
          u,
          s = this.counters;
        s.fill(0), (this.decodeRowResult = '');
        var c,
          f,
          h = e.findAsteriskPattern(r, s),
          l = r.getNextSet(h[1]),
          d = r.getSize();
        do {
          e.recordPattern(r, l, s);
          var p = e.toNarrowWidePattern(s);
          if (p < 0) throw new U();
          (c = e.patternToChar(p)), (this.decodeRowResult += c), (f = l);
          try {
            for (
              var y = ((o = void 0), Vt(s)), w = y.next();
              !w.done;
              w = y.next()
            ) {
              l += w.value;
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              w && !w.done && (i = y.return) && i.call(y);
            } finally {
              if (o) throw o.error;
            }
          }
          l = r.getNextSet(l);
        } while ('*' !== c);
        this.decodeRowResult = this.decodeRowResult.substring(
          0,
          this.decodeRowResult.length - 1
        );
        var _,
          v = 0;
        try {
          for (var m = Vt(s), A = m.next(); !A.done; A = m.next()) {
            v += A.value;
          }
        } catch (t) {
          a = { error: t };
        } finally {
          try {
            A && !A.done && (u = m.return) && u.call(m);
          } finally {
            if (a) throw a.error;
          }
        }
        if (l !== d && 2 * (l - f - v) < v) throw new U();
        if (this.usingCheckDigit) {
          for (
            var E = this.decodeRowResult.length - 1, C = 0, I = 0;
            I < E;
            I++
          )
            C += e.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(I));
          if (
            this.decodeRowResult.charAt(E) !== e.ALPHABET_STRING.charAt(C % 43)
          )
            throw new g();
          this.decodeRowResult = this.decodeRowResult.substring(0, E);
        }
        if (0 === this.decodeRowResult.length) throw new U();
        _ = this.extendedMode
          ? e.decodeExtended(this.decodeRowResult)
          : this.decodeRowResult;
        var S = (h[1] + h[0]) / 2,
          O = f + v / 2;
        return new et(
          _,
          null,
          0,
          [new At(S, t), new At(O, t)],
          nt.CODE_39,
          new Date().getTime()
        );
      }),
      (e.findAsteriskPattern = function (t, r) {
        for (
          var n = t.getSize(),
            o = t.getNextSet(0),
            i = 0,
            a = o,
            u = !1,
            s = r.length,
            c = o;
          c < n;
          c++
        )
          if (t.get(c) !== u) r[i]++;
          else {
            if (i === s - 1) {
              if (
                this.toNarrowWidePattern(r) === e.ASTERISK_ENCODING &&
                t.isRange(Math.max(0, a - Math.floor((c - a) / 2)), a, !1)
              )
                return [a, c];
              (a += r[0] + r[1]),
                r.copyWithin(0, 2, 2 + i - 1),
                (r[i - 1] = 0),
                (r[i] = 0),
                i--;
            } else i++;
            (r[i] = 1), (u = !u);
          }
        throw new U();
      }),
      (e.toNarrowWidePattern = function (t) {
        var e,
          r,
          n,
          o = t.length,
          i = 0;
        do {
          var a = 2147483647;
          try {
            for (
              var u = ((e = void 0), Vt(t)), s = u.next();
              !s.done;
              s = u.next()
            ) {
              (l = s.value) < a && l > i && (a = l);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (r = u.return) && r.call(u);
            } finally {
              if (e) throw e.error;
            }
          }
          (i = a), (n = 0);
          for (var c = 0, f = 0, h = 0; h < o; h++) {
            (l = t[h]) > i && ((f |= 1 << (o - 1 - h)), n++, (c += l));
          }
          if (3 === n) {
            for (h = 0; h < o && n > 0; h++) {
              var l;
              if ((l = t[h]) > i && (n--, 2 * l >= c)) return -1;
            }
            return f;
          }
        } while (n > 3);
        return -1;
      }),
      (e.patternToChar = function (t) {
        for (var r = 0; r < e.CHARACTER_ENCODINGS.length; r++)
          if (e.CHARACTER_ENCODINGS[r] === t)
            return e.ALPHABET_STRING.charAt(r);
        if (t === e.ASTERISK_ENCODING) return '*';
        throw new U();
      }),
      (e.decodeExtended = function (t) {
        for (var e = t.length, r = '', n = 0; n < e; n++) {
          var o = t.charAt(n);
          if ('+' === o || '$' === o || '%' === o || '/' === o) {
            var i = t.charAt(n + 1),
              a = '\0';
            switch (o) {
              case '+':
                if (!(i >= 'A' && i <= 'Z')) throw new R();
                a = String.fromCharCode(i.charCodeAt(0) + 32);
                break;
              case '$':
                if (!(i >= 'A' && i <= 'Z')) throw new R();
                a = String.fromCharCode(i.charCodeAt(0) - 64);
                break;
              case '%':
                if (i >= 'A' && i <= 'E')
                  a = String.fromCharCode(i.charCodeAt(0) - 38);
                else if (i >= 'F' && i <= 'J')
                  a = String.fromCharCode(i.charCodeAt(0) - 11);
                else if (i >= 'K' && i <= 'O')
                  a = String.fromCharCode(i.charCodeAt(0) + 16);
                else if (i >= 'P' && i <= 'T')
                  a = String.fromCharCode(i.charCodeAt(0) + 43);
                else if ('U' === i) a = '\0';
                else if ('V' === i) a = '@';
                else if ('W' === i) a = '`';
                else {
                  if ('X' !== i && 'Y' !== i && 'Z' !== i) throw new R();
                  a = '';
                }
                break;
              case '/':
                if (i >= 'A' && i <= 'O')
                  a = String.fromCharCode(i.charCodeAt(0) - 32);
                else {
                  if ('Z' !== i) throw new R();
                  a = ':';
                }
            }
            (r += a), n++;
          } else r += o;
        }
        return r;
      }),
      (e.ALPHABET_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%'),
      (e.CHARACTER_ENCODINGS = [
        52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88,
        13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193,
        448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42,
      ]),
      (e.ASTERISK_ENCODING = 148),
      e
    );
  })(Lt),
  Ht = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Gt = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Xt = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.narrowLineWidth = -1), e;
    }
    return (
      Ht(e, t),
      (e.prototype.decodeRow = function (t, r, n) {
        var o,
          i,
          a = this.decodeStart(r),
          u = this.decodeEnd(r),
          s = new k();
        e.decodeMiddle(r, a[1], u[0], s);
        var c = s.toString(),
          f = null;
        null != n && (f = n.get(T.ALLOWED_LENGTHS)),
          null == f && (f = e.DEFAULT_ALLOWED_LENGTHS);
        var h = c.length,
          l = !1,
          d = 0;
        try {
          for (var p = Gt(f), g = p.next(); !g.done; g = p.next()) {
            var y = g.value;
            if (h === y) {
              l = !0;
              break;
            }
            y > d && (d = y);
          }
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            g && !g.done && (i = p.return) && i.call(p);
          } finally {
            if (o) throw o.error;
          }
        }
        if ((!l && h > d && (l = !0), !l)) throw new R();
        var w = [new At(a[1], t), new At(u[0], t)];
        return new et(c, null, 0, w, nt.ITF, new Date().getTime());
      }),
      (e.decodeMiddle = function (t, r, n, o) {
        var i = new Int32Array(10),
          a = new Int32Array(5),
          u = new Int32Array(5);
        for (i.fill(0), a.fill(0), u.fill(0); r < n; ) {
          Lt.recordPattern(t, r, i);
          for (var s = 0; s < 5; s++) {
            var c = 2 * s;
            (a[s] = i[c]), (u[s] = i[c + 1]);
          }
          var f = e.decodeDigit(a);
          o.append(f.toString()),
            (f = this.decodeDigit(u)),
            o.append(f.toString()),
            i.forEach(function (t) {
              r += t;
            });
        }
      }),
      (e.prototype.decodeStart = function (t) {
        var r = e.skipWhiteSpace(t),
          n = e.findGuardPattern(t, r, e.START_PATTERN);
        return (
          (this.narrowLineWidth = (n[1] - n[0]) / 4),
          this.validateQuietZone(t, n[0]),
          n
        );
      }),
      (e.prototype.validateQuietZone = function (t, e) {
        var r = 10 * this.narrowLineWidth;
        r = r < e ? r : e;
        for (var n = e - 1; r > 0 && n >= 0 && !t.get(n); n--) r--;
        if (0 !== r) throw new U();
      }),
      (e.skipWhiteSpace = function (t) {
        var e = t.getSize(),
          r = t.getNextSet(0);
        if (r === e) throw new U();
        return r;
      }),
      (e.prototype.decodeEnd = function (t) {
        t.reverse();
        try {
          var r = e.skipWhiteSpace(t),
            n = void 0;
          try {
            n = e.findGuardPattern(t, r, e.END_PATTERN_REVERSED[0]);
          } catch (o) {
            o instanceof U &&
              (n = e.findGuardPattern(t, r, e.END_PATTERN_REVERSED[1]));
          }
          this.validateQuietZone(t, n[0]);
          var o = n[0];
          return (n[0] = t.getSize() - n[1]), (n[1] = t.getSize() - o), n;
        } finally {
          t.reverse();
        }
      }),
      (e.findGuardPattern = function (t, r, n) {
        var o = n.length,
          i = new Int32Array(o),
          a = t.getSize(),
          u = !1,
          s = 0,
          c = r;
        i.fill(0);
        for (var f = r; f < a; f++)
          if (t.get(f) !== u) i[s]++;
          else {
            if (s === o - 1) {
              if (
                Lt.patternMatchVariance(i, n, e.MAX_INDIVIDUAL_VARIANCE) <
                e.MAX_AVG_VARIANCE
              )
                return [c, f];
              (c += i[0] + i[1]),
                w.arraycopy(i, 2, i, 0, s - 1),
                (i[s - 1] = 0),
                (i[s] = 0),
                s--;
            } else s++;
            (i[s] = 1), (u = !u);
          }
        throw new U();
      }),
      (e.decodeDigit = function (t) {
        for (
          var r = e.MAX_AVG_VARIANCE, n = -1, o = e.PATTERNS.length, i = 0;
          i < o;
          i++
        ) {
          var a = e.PATTERNS[i],
            u = Lt.patternMatchVariance(t, a, e.MAX_INDIVIDUAL_VARIANCE);
          u < r ? ((r = u), (n = i)) : u === r && (n = -1);
        }
        if (n >= 0) return n % 10;
        throw new U();
      }),
      (e.PATTERNS = [
        Int32Array.from([1, 1, 2, 2, 1]),
        Int32Array.from([2, 1, 1, 1, 2]),
        Int32Array.from([1, 2, 1, 1, 2]),
        Int32Array.from([2, 2, 1, 1, 1]),
        Int32Array.from([1, 1, 2, 1, 2]),
        Int32Array.from([2, 1, 2, 1, 1]),
        Int32Array.from([1, 2, 2, 1, 1]),
        Int32Array.from([1, 1, 1, 2, 2]),
        Int32Array.from([2, 1, 1, 2, 1]),
        Int32Array.from([1, 2, 1, 2, 1]),
        Int32Array.from([1, 1, 3, 3, 1]),
        Int32Array.from([3, 1, 1, 1, 3]),
        Int32Array.from([1, 3, 1, 1, 3]),
        Int32Array.from([3, 3, 1, 1, 1]),
        Int32Array.from([1, 1, 3, 1, 3]),
        Int32Array.from([3, 1, 3, 1, 1]),
        Int32Array.from([1, 3, 3, 1, 1]),
        Int32Array.from([1, 1, 1, 3, 3]),
        Int32Array.from([3, 1, 1, 3, 1]),
        Int32Array.from([1, 3, 1, 3, 1]),
      ]),
      (e.MAX_AVG_VARIANCE = 0.38),
      (e.MAX_INDIVIDUAL_VARIANCE = 0.5),
      (e.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14]),
      (e.START_PATTERN = Int32Array.from([1, 1, 1, 1])),
      (e.END_PATTERN_REVERSED = [
        Int32Array.from([1, 1, 2]),
        Int32Array.from([1, 1, 3]),
      ]),
      e
    );
  })(Lt),
  Wt = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  jt = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.decodeRowStringBuffer = ''), e;
    }
    return (
      Wt(e, t),
      (e.findStartGuardPattern = function (t) {
        for (var r, n = !1, o = 0, i = Int32Array.from([0, 0, 0]); !n; ) {
          i = Int32Array.from([0, 0, 0]);
          var a = (r = e.findGuardPattern(
              t,
              o,
              !1,
              this.START_END_PATTERN,
              i
            ))[0],
            u = a - ((o = r[1]) - a);
          u >= 0 && (n = t.isRange(u, a, !1));
        }
        return r;
      }),
      (e.checkChecksum = function (t) {
        return e.checkStandardUPCEANChecksum(t);
      }),
      (e.checkStandardUPCEANChecksum = function (t) {
        var r = t.length;
        if (0 === r) return !1;
        var n = parseInt(t.charAt(r - 1), 10);
        return e.getStandardUPCEANChecksum(t.substring(0, r - 1)) === n;
      }),
      (e.getStandardUPCEANChecksum = function (t) {
        for (var e = t.length, r = 0, n = e - 1; n >= 0; n -= 2) {
          if ((o = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0)) < 0 || o > 9)
            throw new R();
          r += o;
        }
        r *= 3;
        for (n = e - 2; n >= 0; n -= 2) {
          var o;
          if ((o = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0)) < 0 || o > 9)
            throw new R();
          r += o;
        }
        return (1e3 - r) % 10;
      }),
      (e.decodeEnd = function (t, r) {
        return e.findGuardPattern(
          t,
          r,
          !1,
          e.START_END_PATTERN,
          new Int32Array(e.START_END_PATTERN.length).fill(0)
        );
      }),
      (e.findGuardPatternWithoutCounters = function (t, e, r, n) {
        return this.findGuardPattern(t, e, r, n, new Int32Array(n.length));
      }),
      (e.findGuardPattern = function (t, r, n, o, i) {
        for (
          var a = t.getSize(),
            u = 0,
            s = (r = n ? t.getNextUnset(r) : t.getNextSet(r)),
            c = o.length,
            f = n,
            h = r;
          h < a;
          h++
        )
          if (t.get(h) !== f) i[u]++;
          else {
            if (u === c - 1) {
              if (
                Lt.patternMatchVariance(i, o, e.MAX_INDIVIDUAL_VARIANCE) <
                e.MAX_AVG_VARIANCE
              )
                return Int32Array.from([s, h]);
              s += i[0] + i[1];
              for (var l = i.slice(2, i.length - 1), d = 0; d < u - 1; d++)
                i[d] = l[d];
              (i[u - 1] = 0), (i[u] = 0), u--;
            } else u++;
            (i[u] = 1), (f = !f);
          }
        throw new U();
      }),
      (e.decodeDigit = function (t, r, n, o) {
        this.recordPattern(t, n, r);
        for (
          var i = this.MAX_AVG_VARIANCE, a = -1, u = o.length, s = 0;
          s < u;
          s++
        ) {
          var c = o[s],
            f = Lt.patternMatchVariance(r, c, e.MAX_INDIVIDUAL_VARIANCE);
          f < i && ((i = f), (a = s));
        }
        if (a >= 0) return a;
        throw new U();
      }),
      (e.MAX_AVG_VARIANCE = 0.48),
      (e.MAX_INDIVIDUAL_VARIANCE = 0.7),
      (e.START_END_PATTERN = Int32Array.from([1, 1, 1])),
      (e.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1])),
      (e.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1])),
      (e.L_PATTERNS = [
        Int32Array.from([3, 2, 1, 1]),
        Int32Array.from([2, 2, 2, 1]),
        Int32Array.from([2, 1, 2, 2]),
        Int32Array.from([1, 4, 1, 1]),
        Int32Array.from([1, 1, 3, 2]),
        Int32Array.from([1, 2, 3, 1]),
        Int32Array.from([1, 1, 1, 4]),
        Int32Array.from([1, 3, 1, 2]),
        Int32Array.from([1, 2, 1, 3]),
        Int32Array.from([3, 1, 1, 2]),
      ]),
      e
    );
  })(Lt),
  zt = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Yt = (function () {
    function t() {
      (this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5]),
        (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])),
        (this.decodeRowStringBuffer = '');
    }
    return (
      (t.prototype.decodeRow = function (e, r, n) {
        var o = this.decodeRowStringBuffer,
          i = this.decodeMiddle(r, n, o),
          a = o.toString(),
          u = t.parseExtensionString(a),
          s = [new At((n[0] + n[1]) / 2, e), new At(i, e)],
          c = new et(a, null, 0, s, nt.UPC_EAN_EXTENSION, new Date().getTime());
        return null != u && c.putAllMetadata(u), c;
      }),
      (t.prototype.decodeMiddle = function (e, r, n) {
        var o,
          i,
          a = this.decodeMiddleCounters;
        (a[0] = 0), (a[1] = 0), (a[2] = 0), (a[3] = 0);
        for (var u = e.getSize(), s = r[1], c = 0, f = 0; f < 5 && s < u; f++) {
          var h = jt.decodeDigit(e, a, s, jt.L_AND_G_PATTERNS);
          n += String.fromCharCode('0'.charCodeAt(0) + (h % 10));
          try {
            for (
              var l = ((o = void 0), zt(a)), d = l.next();
              !d.done;
              d = l.next()
            ) {
              s += d.value;
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              d && !d.done && (i = l.return) && i.call(l);
            } finally {
              if (o) throw o.error;
            }
          }
          h >= 10 && (c |= 1 << (4 - f)),
            4 !== f && ((s = e.getNextSet(s)), (s = e.getNextUnset(s)));
        }
        if (5 !== n.length) throw new U();
        var p = this.determineCheckDigit(c);
        if (t.extensionChecksum(n.toString()) !== p) throw new U();
        return s;
      }),
      (t.extensionChecksum = function (t) {
        for (var e = t.length, r = 0, n = e - 2; n >= 0; n -= 2)
          r += t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
        r *= 3;
        for (n = e - 1; n >= 0; n -= 2)
          r += t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0);
        return (r *= 3) % 10;
      }),
      (t.prototype.determineCheckDigit = function (t) {
        for (var e = 0; e < 10; e++)
          if (t === this.CHECK_DIGIT_ENCODINGS[e]) return e;
        throw new U();
      }),
      (t.parseExtensionString = function (e) {
        if (5 !== e.length) return null;
        var r = t.parseExtension5String(e);
        return null == r ? null : new Map([[it.SUGGESTED_PRICE, r]]);
      }),
      (t.parseExtension5String = function (t) {
        var e;
        switch (t.charAt(0)) {
          case '0':
            e = '£';
            break;
          case '5':
            e = '$';
            break;
          case '9':
            switch (t) {
              case '90000':
                return null;
              case '99991':
                return '0.00';
              case '99990':
                return 'Used';
            }
            e = '';
            break;
          default:
            e = '';
        }
        var r = parseInt(t.substring(1)),
          n = r % 100;
        return (
          e + (r / 100).toString() + '.' + (n < 10 ? '0' + n : n.toString())
        );
      }),
      t
    );
  })(),
  Zt = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Kt = (function () {
    function t() {
      (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])),
        (this.decodeRowStringBuffer = '');
    }
    return (
      (t.prototype.decodeRow = function (e, r, n) {
        var o = this.decodeRowStringBuffer,
          i = this.decodeMiddle(r, n, o),
          a = o.toString(),
          u = t.parseExtensionString(a),
          s = [new At((n[0] + n[1]) / 2, e), new At(i, e)],
          c = new et(a, null, 0, s, nt.UPC_EAN_EXTENSION, new Date().getTime());
        return null != u && c.putAllMetadata(u), c;
      }),
      (t.prototype.decodeMiddle = function (t, e, r) {
        var n,
          o,
          i = this.decodeMiddleCounters;
        (i[0] = 0), (i[1] = 0), (i[2] = 0), (i[3] = 0);
        for (var a = t.getSize(), u = e[1], s = 0, c = 0; c < 2 && u < a; c++) {
          var f = jt.decodeDigit(t, i, u, jt.L_AND_G_PATTERNS);
          r += String.fromCharCode('0'.charCodeAt(0) + (f % 10));
          try {
            for (
              var h = ((n = void 0), Zt(i)), l = h.next();
              !l.done;
              l = h.next()
            ) {
              u += l.value;
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              l && !l.done && (o = h.return) && o.call(h);
            } finally {
              if (n) throw n.error;
            }
          }
          f >= 10 && (s |= 1 << (1 - c)),
            1 !== c && ((u = t.getNextSet(u)), (u = t.getNextUnset(u)));
        }
        if (2 !== r.length) throw new U();
        if (parseInt(r.toString()) % 4 !== s) throw new U();
        return u;
      }),
      (t.parseExtensionString = function (t) {
        return 2 !== t.length
          ? null
          : new Map([[it.ISSUE_NUMBER, parseInt(t)]]);
      }),
      t
    );
  })(),
  qt = (function () {
    function t() {}
    return (
      (t.decodeRow = function (t, e, r) {
        var n = jt.findGuardPattern(
          e,
          r,
          !1,
          this.EXTENSION_START_PATTERN,
          new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0)
        );
        try {
          return new Yt().decodeRow(t, e, n);
        } catch (r) {
          return new Kt().decodeRow(t, e, n);
        }
      }),
      (t.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2])),
      t
    );
  })(),
  Qt = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Jt = (function (t) {
    function e() {
      var r = t.call(this) || this;
      (r.decodeRowStringBuffer = ''),
        (e.L_AND_G_PATTERNS = e.L_PATTERNS.map(function (t) {
          return Int32Array.from(t);
        }));
      for (var n = 10; n < 20; n++) {
        for (
          var o = e.L_PATTERNS[n - 10], i = new Int32Array(o.length), a = 0;
          a < o.length;
          a++
        )
          i[a] = o[o.length - a - 1];
        e.L_AND_G_PATTERNS[n] = i;
      }
      return r;
    }
    return (
      Qt(e, t),
      (e.prototype.decodeRow = function (t, r, n) {
        var o = e.findStartGuardPattern(r),
          i = null == n ? null : n.get(T.NEED_RESULT_POINT_CALLBACK);
        if (null != i) {
          var a = new At((o[0] + o[1]) / 2, t);
          i.foundPossibleResultPoint(a);
        }
        var u = this.decodeMiddle(r, o, this.decodeRowStringBuffer),
          s = u.rowOffset,
          c = u.resultString;
        if (null != i) {
          var f = new At(s, t);
          i.foundPossibleResultPoint(f);
        }
        var h = e.decodeEnd(r, s);
        if (null != i) {
          var l = new At((h[0] + h[1]) / 2, t);
          i.foundPossibleResultPoint(l);
        }
        var d = h[1],
          p = d + (d - h[0]);
        if (p >= r.getSize() || !r.isRange(d, p, !1)) throw new U();
        var y = c.toString();
        if (y.length < 8) throw new R();
        if (!e.checkChecksum(y)) throw new g();
        var w = (o[1] + o[0]) / 2,
          _ = (h[1] + h[0]) / 2,
          v = this.getBarcodeFormat(),
          m = [new At(w, t), new At(_, t)],
          A = new et(y, null, 0, m, v, new Date().getTime()),
          E = 0;
        try {
          var C = qt.decodeRow(t, r, h[1]);
          A.putMetadata(it.UPC_EAN_EXTENSION, C.getText()),
            A.putAllMetadata(C.getResultMetadata()),
            A.addResultPoints(C.getResultPoints()),
            (E = C.getText().length);
        } catch (t) {}
        var I = null == n ? null : n.get(T.ALLOWED_EAN_EXTENSIONS);
        if (null != I) {
          var S = !1;
          for (var O in I)
            if (E.toString() === O) {
              S = !0;
              break;
            }
          if (!S) throw new U();
        }
        return v === nt.EAN_13 || nt.UPC_A, A;
      }),
      (e.checkChecksum = function (t) {
        return e.checkStandardUPCEANChecksum(t);
      }),
      (e.checkStandardUPCEANChecksum = function (t) {
        var r = t.length;
        if (0 === r) return !1;
        var n = parseInt(t.charAt(r - 1), 10);
        return e.getStandardUPCEANChecksum(t.substring(0, r - 1)) === n;
      }),
      (e.getStandardUPCEANChecksum = function (t) {
        for (var e = t.length, r = 0, n = e - 1; n >= 0; n -= 2) {
          if ((o = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0)) < 0 || o > 9)
            throw new R();
          r += o;
        }
        r *= 3;
        for (n = e - 2; n >= 0; n -= 2) {
          var o;
          if ((o = t.charAt(n).charCodeAt(0) - '0'.charCodeAt(0)) < 0 || o > 9)
            throw new R();
          r += o;
        }
        return (1e3 - r) % 10;
      }),
      (e.decodeEnd = function (t, r) {
        return e.findGuardPattern(
          t,
          r,
          !1,
          e.START_END_PATTERN,
          new Int32Array(e.START_END_PATTERN.length).fill(0)
        );
      }),
      e
    );
  })(jt),
  $t = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  te = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  ee = (function (t) {
    function e() {
      var e = t.call(this) || this;
      return (e.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])), e;
    }
    return (
      $t(e, t),
      (e.prototype.decodeMiddle = function (t, r, n) {
        var o,
          i,
          a,
          u,
          s = this.decodeMiddleCounters;
        (s[0] = 0), (s[1] = 0), (s[2] = 0), (s[3] = 0);
        for (var c = t.getSize(), f = r[1], h = 0, l = 0; l < 6 && f < c; l++) {
          var d = Jt.decodeDigit(t, s, f, Jt.L_AND_G_PATTERNS);
          n += String.fromCharCode('0'.charCodeAt(0) + (d % 10));
          try {
            for (
              var p = ((o = void 0), te(s)), g = p.next();
              !g.done;
              g = p.next()
            ) {
              f += g.value;
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              g && !g.done && (i = p.return) && i.call(p);
            } finally {
              if (o) throw o.error;
            }
          }
          d >= 10 && (h |= 1 << (5 - l));
        }
        (n = e.determineFirstDigit(n, h)),
          (f = Jt.findGuardPattern(
            t,
            f,
            !0,
            Jt.MIDDLE_PATTERN,
            new Int32Array(Jt.MIDDLE_PATTERN.length).fill(0)
          )[1]);
        for (l = 0; l < 6 && f < c; l++) {
          d = Jt.decodeDigit(t, s, f, Jt.L_PATTERNS);
          n += String.fromCharCode('0'.charCodeAt(0) + d);
          try {
            for (
              var y = ((a = void 0), te(s)), w = y.next();
              !w.done;
              w = y.next()
            ) {
              f += w.value;
            }
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              w && !w.done && (u = y.return) && u.call(y);
            } finally {
              if (a) throw a.error;
            }
          }
        }
        return { rowOffset: f, resultString: n };
      }),
      (e.prototype.getBarcodeFormat = function () {
        return nt.EAN_13;
      }),
      (e.determineFirstDigit = function (t, e) {
        for (var r = 0; r < 10; r++)
          if (e === this.FIRST_DIGIT_ENCODINGS[r])
            return (t = String.fromCharCode('0'.charCodeAt(0) + r) + t);
        throw new U();
      }),
      (e.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26]),
      e
    );
  })(Jt),
  re = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  ne = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  oe = (function (t) {
    function e() {
      var e = t.call(this) || this;
      return (e.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])), e;
    }
    return (
      re(e, t),
      (e.prototype.decodeMiddle = function (t, e, r) {
        var n,
          o,
          i,
          a,
          u = this.decodeMiddleCounters;
        (u[0] = 0), (u[1] = 0), (u[2] = 0), (u[3] = 0);
        for (var s = t.getSize(), c = e[1], f = 0; f < 4 && c < s; f++) {
          var h = Jt.decodeDigit(t, u, c, Jt.L_PATTERNS);
          r += String.fromCharCode('0'.charCodeAt(0) + h);
          try {
            for (
              var l = ((n = void 0), ne(u)), d = l.next();
              !d.done;
              d = l.next()
            ) {
              c += d.value;
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              d && !d.done && (o = l.return) && o.call(l);
            } finally {
              if (n) throw n.error;
            }
          }
        }
        c = Jt.findGuardPattern(
          t,
          c,
          !0,
          Jt.MIDDLE_PATTERN,
          new Int32Array(Jt.MIDDLE_PATTERN.length).fill(0)
        )[1];
        for (f = 0; f < 4 && c < s; f++) {
          h = Jt.decodeDigit(t, u, c, Jt.L_PATTERNS);
          r += String.fromCharCode('0'.charCodeAt(0) + h);
          try {
            for (
              var p = ((i = void 0), ne(u)), g = p.next();
              !g.done;
              g = p.next()
            ) {
              c += g.value;
            }
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              g && !g.done && (a = p.return) && a.call(p);
            } finally {
              if (i) throw i.error;
            }
          }
        }
        return { rowOffset: c, resultString: r };
      }),
      (e.prototype.getBarcodeFormat = function () {
        return nt.EAN_8;
      }),
      e
    );
  })(Jt),
  ie = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  ae = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.ean13Reader = new ee()), e;
    }
    return (
      ie(e, t),
      (e.prototype.getBarcodeFormat = function () {
        return nt.UPC_A;
      }),
      (e.prototype.decode = function (t, e) {
        return this.maybeReturnResult(this.ean13Reader.decode(t));
      }),
      (e.prototype.decodeRow = function (t, e, r) {
        return this.maybeReturnResult(this.ean13Reader.decodeRow(t, e, r));
      }),
      (e.prototype.decodeMiddle = function (t, e, r) {
        return this.ean13Reader.decodeMiddle(t, e, r);
      }),
      (e.prototype.maybeReturnResult = function (t) {
        var e = t.getText();
        if ('0' === e.charAt(0)) {
          var r = new et(
            e.substring(1),
            null,
            null,
            t.getResultPoints(),
            nt.UPC_A
          );
          return (
            null != t.getResultMetadata() &&
              r.putAllMetadata(t.getResultMetadata()),
            r
          );
        }
        throw new U();
      }),
      (e.prototype.reset = function () {
        this.ean13Reader.reset();
      }),
      e
    );
  })(Jt),
  ue = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  se = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  ce = (function (t) {
    function e() {
      var e = t.call(this) || this;
      return (e.decodeMiddleCounters = new Int32Array(4)), e;
    }
    return (
      ue(e, t),
      (e.prototype.decodeMiddle = function (t, r, n) {
        var o,
          i,
          a = this.decodeMiddleCounters.map(function (t) {
            return t;
          });
        (a[0] = 0), (a[1] = 0), (a[2] = 0), (a[3] = 0);
        for (var u = t.getSize(), s = r[1], c = 0, f = 0; f < 6 && s < u; f++) {
          var h = e.decodeDigit(t, a, s, e.L_AND_G_PATTERNS);
          n += String.fromCharCode('0'.charCodeAt(0) + (h % 10));
          try {
            for (
              var l = ((o = void 0), se(a)), d = l.next();
              !d.done;
              d = l.next()
            ) {
              s += d.value;
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              d && !d.done && (i = l.return) && i.call(l);
            } finally {
              if (o) throw o.error;
            }
          }
          h >= 10 && (c |= 1 << (5 - f));
        }
        return e.determineNumSysAndCheckDigit(new k(n), c), s;
      }),
      (e.prototype.decodeEnd = function (t, r) {
        return e.findGuardPatternWithoutCounters(
          t,
          r,
          !0,
          e.MIDDLE_END_PATTERN
        );
      }),
      (e.prototype.checkChecksum = function (t) {
        return Jt.checkChecksum(e.convertUPCEtoUPCA(t));
      }),
      (e.determineNumSysAndCheckDigit = function (t, e) {
        for (var r = 0; r <= 1; r++)
          for (var n = 0; n < 10; n++)
            if (e === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r][n])
              return t.insert(0, '0' + r), void t.append('0' + n);
        throw U.getNotFoundInstance();
      }),
      (e.prototype.getBarcodeFormat = function () {
        return nt.UPC_E;
      }),
      (e.convertUPCEtoUPCA = function (t) {
        var e = t
            .slice(1, 7)
            .split('')
            .map(function (t) {
              return t.charCodeAt(0);
            }),
          r = new k();
        r.append(t.charAt(0));
        var n = e[5];
        switch (n) {
          case 0:
          case 1:
          case 2:
            r.appendChars(e, 0, 2),
              r.append(n),
              r.append('0000'),
              r.appendChars(e, 2, 3);
            break;
          case 3:
            r.appendChars(e, 0, 3), r.append('00000'), r.appendChars(e, 3, 2);
            break;
          case 4:
            r.appendChars(e, 0, 4), r.append('00000'), r.append(e[4]);
            break;
          default:
            r.appendChars(e, 0, 5), r.append('0000'), r.append(n);
        }
        return t.length >= 8 && r.append(t.charAt(7)), r.toString();
      }),
      (e.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1])),
      (e.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
        Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
        Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1]),
      ]),
      e
    );
  })(Jt),
  fe = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  he = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  le = (function (t) {
    function e(e) {
      var r = t.call(this) || this,
        n = null == e ? null : e.get(T.POSSIBLE_FORMATS),
        o = [];
      return (
        null != n &&
          (n.indexOf(nt.EAN_13) > -1
            ? o.push(new ee())
            : n.indexOf(nt.UPC_A) > -1 && o.push(new ae()),
          n.indexOf(nt.EAN_8) > -1 && o.push(new oe()),
          n.indexOf(nt.UPC_E) > -1 && o.push(new ce())),
        0 === o.length &&
          (o.push(new ee()), o.push(new oe()), o.push(new ce())),
        (r.readers = o),
        r
      );
    }
    return (
      fe(e, t),
      (e.prototype.decodeRow = function (t, e, r) {
        var n, o;
        try {
          for (var i = he(this.readers), a = i.next(); !a.done; a = i.next()) {
            var u = a.value;
            try {
              var s = u.decodeRow(t, e, r),
                c =
                  s.getBarcodeFormat() === nt.EAN_13 &&
                  '0' === s.getText().charAt(0),
                f = null == r ? null : r.get(T.POSSIBLE_FORMATS),
                h = null == f || f.includes(nt.UPC_A);
              if (c && h) {
                var l = s.getRawBytes(),
                  d = new et(
                    s.getText().substring(1),
                    l,
                    l.length,
                    s.getResultPoints(),
                    nt.UPC_A
                  );
                return d.putAllMetadata(s.getResultMetadata()), d;
              }
              return s;
            } catch (t) {}
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            a && !a.done && (o = i.return) && o.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
        throw new U();
      }),
      (e.prototype.reset = function () {
        var t, e;
        try {
          for (var r = he(this.readers), n = r.next(); !n.done; n = r.next()) {
            n.value.reset();
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            n && !n.done && (e = r.return) && e.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      e
    );
  })(Lt),
  de = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  pe = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  ge = (function (t) {
    function e() {
      var e = t.call(this) || this;
      return (
        (e.decodeFinderCounters = new Int32Array(4)),
        (e.dataCharacterCounters = new Int32Array(8)),
        (e.oddRoundingErrors = new Array(4)),
        (e.evenRoundingErrors = new Array(4)),
        (e.oddCounts = new Array(e.dataCharacterCounters.length / 2)),
        (e.evenCounts = new Array(e.dataCharacterCounters.length / 2)),
        e
      );
    }
    return (
      de(e, t),
      (e.prototype.getDecodeFinderCounters = function () {
        return this.decodeFinderCounters;
      }),
      (e.prototype.getDataCharacterCounters = function () {
        return this.dataCharacterCounters;
      }),
      (e.prototype.getOddRoundingErrors = function () {
        return this.oddRoundingErrors;
      }),
      (e.prototype.getEvenRoundingErrors = function () {
        return this.evenRoundingErrors;
      }),
      (e.prototype.getOddCounts = function () {
        return this.oddCounts;
      }),
      (e.prototype.getEvenCounts = function () {
        return this.evenCounts;
      }),
      (e.prototype.parseFinderValue = function (t, r) {
        for (var n = 0; n < r.length; n++)
          if (
            Lt.patternMatchVariance(t, r[n], e.MAX_INDIVIDUAL_VARIANCE) <
            e.MAX_AVG_VARIANCE
          )
            return n;
        throw new U();
      }),
      (e.count = function (t) {
        return vt.sum(new Int32Array(t));
      }),
      (e.increment = function (t, e) {
        for (var r = 0, n = e[0], o = 1; o < t.length; o++)
          e[o] > n && ((n = e[o]), (r = o));
        t[r]++;
      }),
      (e.decrement = function (t, e) {
        for (var r = 0, n = e[0], o = 1; o < t.length; o++)
          e[o] < n && ((n = e[o]), (r = o));
        t[r]--;
      }),
      (e.isFinderPattern = function (t) {
        var r,
          n,
          o = t[0] + t[1],
          i = o / (o + t[2] + t[3]);
        if (
          i >= e.MIN_FINDER_PATTERN_RATIO &&
          i <= e.MAX_FINDER_PATTERN_RATIO
        ) {
          var a = Number.MAX_SAFE_INTEGER,
            u = Number.MIN_SAFE_INTEGER;
          try {
            for (var s = pe(t), c = s.next(); !c.done; c = s.next()) {
              var f = c.value;
              f > u && (u = f), f < a && (a = f);
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              c && !c.done && (n = s.return) && n.call(s);
            } finally {
              if (r) throw r.error;
            }
          }
          return u < 10 * a;
        }
        return !1;
      }),
      (e.MAX_AVG_VARIANCE = 0.2),
      (e.MAX_INDIVIDUAL_VARIANCE = 0.45),
      (e.MIN_FINDER_PATTERN_RATIO = 9.5 / 12),
      (e.MAX_FINDER_PATTERN_RATIO = 12.5 / 14),
      e
    );
  })(Lt),
  ye = (function () {
    function t(t, e) {
      (this.value = t), (this.checksumPortion = e);
    }
    return (
      (t.prototype.getValue = function () {
        return this.value;
      }),
      (t.prototype.getChecksumPortion = function () {
        return this.checksumPortion;
      }),
      (t.prototype.toString = function () {
        return this.value + '(' + this.checksumPortion + ')';
      }),
      (t.prototype.equals = function (e) {
        if (!(e instanceof t)) return !1;
        var r = e;
        return (
          this.value === r.value && this.checksumPortion === r.checksumPortion
        );
      }),
      (t.prototype.hashCode = function () {
        return this.value ^ this.checksumPortion;
      }),
      t
    );
  })(),
  we = (function () {
    function t(t, e, r, n, o) {
      (this.value = t),
        (this.startEnd = e),
        (this.value = t),
        (this.startEnd = e),
        (this.resultPoints = new Array()),
        this.resultPoints.push(new At(r, o)),
        this.resultPoints.push(new At(n, o));
    }
    return (
      (t.prototype.getValue = function () {
        return this.value;
      }),
      (t.prototype.getStartEnd = function () {
        return this.startEnd;
      }),
      (t.prototype.getResultPoints = function () {
        return this.resultPoints;
      }),
      (t.prototype.equals = function (e) {
        if (!(e instanceof t)) return !1;
        var r = e;
        return this.value === r.value;
      }),
      (t.prototype.hashCode = function () {
        return this.value;
      }),
      t
    );
  })(),
  _e = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  ve = (function () {
    function t() {}
    return (
      (t.getRSSvalue = function (e, r, n) {
        var o,
          i,
          a = 0;
        try {
          for (var u = _e(e), s = u.next(); !s.done; s = u.next()) {
            a += s.value;
          }
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            s && !s.done && (i = u.return) && i.call(u);
          } finally {
            if (o) throw o.error;
          }
        }
        for (var c = 0, f = 0, h = e.length, l = 0; l < h - 1; l++) {
          var d = void 0;
          for (d = 1, f |= 1 << l; d < e[l]; d++, f &= ~(1 << l)) {
            var p = t.combins(a - d - 1, h - l - 2);
            if (
              (n &&
                0 === f &&
                a - d - (h - l - 1) >= h - l - 1 &&
                (p -= t.combins(a - d - (h - l), h - l - 2)),
              h - l - 1 > 1)
            ) {
              for (var g = 0, y = a - d - (h - l - 2); y > r; y--)
                g += t.combins(a - d - y - 1, h - l - 3);
              p -= g * (h - 1 - l);
            } else a - d > r && p--;
            c += p;
          }
          a -= d;
        }
        return c;
      }),
      (t.combins = function (t, e) {
        var r, n;
        t - e > e ? ((n = e), (r = t - e)) : ((n = t - e), (r = e));
        for (var o = 1, i = 1, a = t; a > r; a--)
          (o *= a), i <= n && ((o /= i), i++);
        for (; i <= n; ) (o /= i), i++;
        return o;
      }),
      t
    );
  })(),
  me = (function () {
    function t() {}
    return (
      (t.buildBitArray = function (t) {
        var e = 2 * t.length - 1;
        null == t[t.length - 1].getRightChar() && (e -= 1);
        for (
          var r = new S(12 * e),
            n = 0,
            o = t[0].getRightChar().getValue(),
            i = 11;
          i >= 0;
          --i
        )
          0 != (o & (1 << i)) && r.set(n), n++;
        for (i = 1; i < t.length; ++i) {
          for (
            var a = t[i], u = a.getLeftChar().getValue(), s = 11;
            s >= 0;
            --s
          )
            0 != (u & (1 << s)) && r.set(n), n++;
          if (null != a.getRightChar()) {
            var c = a.getRightChar().getValue();
            for (s = 11; s >= 0; --s) 0 != (c & (1 << s)) && r.set(n), n++;
          }
        }
        return r;
      }),
      t
    );
  })(),
  Ae = (function () {
    function t(t, e) {
      e
        ? (this.decodedInformation = null)
        : ((this.finished = t), (this.decodedInformation = e));
    }
    return (
      (t.prototype.getDecodedInformation = function () {
        return this.decodedInformation;
      }),
      (t.prototype.isFinished = function () {
        return this.finished;
      }),
      t
    );
  })(),
  Ee = (function () {
    function t(t) {
      this.newPosition = t;
    }
    return (
      (t.prototype.getNewPosition = function () {
        return this.newPosition;
      }),
      t
    );
  })(),
  Ce = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Ie = (function (t) {
    function e(e, r) {
      var n = t.call(this, e) || this;
      return (n.value = r), n;
    }
    return (
      Ce(e, t),
      (e.prototype.getValue = function () {
        return this.value;
      }),
      (e.prototype.isFNC1 = function () {
        return this.value === e.FNC1;
      }),
      (e.FNC1 = '$'),
      e
    );
  })(Ee),
  Se = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Oe = (function (t) {
    function e(e, r, n) {
      var o = t.call(this, e) || this;
      return (
        n
          ? ((o.remaining = !0), (o.remainingValue = o.remainingValue))
          : ((o.remaining = !1), (o.remainingValue = 0)),
        (o.newString = r),
        o
      );
    }
    return (
      Se(e, t),
      (e.prototype.getNewString = function () {
        return this.newString;
      }),
      (e.prototype.isRemaining = function () {
        return this.remaining;
      }),
      (e.prototype.getRemainingValue = function () {
        return this.remainingValue;
      }),
      e
    );
  })(Ee),
  Te = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  be = (function (t) {
    function e(e, r, n) {
      var o = t.call(this, e) || this;
      if (r < 0 || r > 10 || n < 0 || n > 10) throw new R();
      return (o.firstDigit = r), (o.secondDigit = n), o;
    }
    return (
      Te(e, t),
      (e.prototype.getFirstDigit = function () {
        return this.firstDigit;
      }),
      (e.prototype.getSecondDigit = function () {
        return this.secondDigit;
      }),
      (e.prototype.getValue = function () {
        return 10 * this.firstDigit + this.secondDigit;
      }),
      (e.prototype.isFirstDigitFNC1 = function () {
        return this.firstDigit === e.FNC1;
      }),
      (e.prototype.isSecondDigitFNC1 = function () {
        return this.secondDigit === e.FNC1;
      }),
      (e.prototype.isAnyFNC1 = function () {
        return this.firstDigit === e.FNC1 || this.secondDigit === e.FNC1;
      }),
      (e.FNC1 = 10),
      e
    );
  })(Ee),
  Re = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Ne = (function () {
    function t() {}
    return (
      (t.parseFieldsInGeneralPurpose = function (e) {
        var r, n, o, i, a, u, s, c;
        if (!e) return null;
        if (e.length < 2) throw new U();
        var f = e.substring(0, 2);
        try {
          for (
            var h = Re(t.TWO_DIGIT_DATA_LENGTH), l = h.next();
            !l.done;
            l = h.next()
          ) {
            if ((A = l.value)[0] === f)
              return A[1] === t.VARIABLE_LENGTH
                ? t.processVariableAI(2, A[2], e)
                : t.processFixedAI(2, A[1], e);
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            l && !l.done && (n = h.return) && n.call(h);
          } finally {
            if (r) throw r.error;
          }
        }
        if (e.length < 3) throw new U();
        var d = e.substring(0, 3);
        try {
          for (
            var p = Re(t.THREE_DIGIT_DATA_LENGTH), g = p.next();
            !g.done;
            g = p.next()
          ) {
            if ((A = g.value)[0] === d)
              return A[1] === t.VARIABLE_LENGTH
                ? t.processVariableAI(3, A[2], e)
                : t.processFixedAI(3, A[1], e);
          }
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            g && !g.done && (i = p.return) && i.call(p);
          } finally {
            if (o) throw o.error;
          }
        }
        try {
          for (
            var y = Re(t.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), w = y.next();
            !w.done;
            w = y.next()
          ) {
            if ((A = w.value)[0] === d)
              return A[1] === t.VARIABLE_LENGTH
                ? t.processVariableAI(4, A[2], e)
                : t.processFixedAI(4, A[1], e);
          }
        } catch (t) {
          a = { error: t };
        } finally {
          try {
            w && !w.done && (u = y.return) && u.call(y);
          } finally {
            if (a) throw a.error;
          }
        }
        if (e.length < 4) throw new U();
        var _ = e.substring(0, 4);
        try {
          for (
            var v = Re(t.FOUR_DIGIT_DATA_LENGTH), m = v.next();
            !m.done;
            m = v.next()
          ) {
            var A;
            if ((A = m.value)[0] === _)
              return A[1] === t.VARIABLE_LENGTH
                ? t.processVariableAI(4, A[2], e)
                : t.processFixedAI(4, A[1], e);
          }
        } catch (t) {
          s = { error: t };
        } finally {
          try {
            m && !m.done && (c = v.return) && c.call(v);
          } finally {
            if (s) throw s.error;
          }
        }
        throw new U();
      }),
      (t.processFixedAI = function (e, r, n) {
        if (n.length < e) throw new U();
        var o = n.substring(0, e);
        if (n.length < e + r) throw new U();
        var i = n.substring(e, e + r),
          a = n.substring(e + r),
          u = '(' + o + ')' + i,
          s = t.parseFieldsInGeneralPurpose(a);
        return null == s ? u : u + s;
      }),
      (t.processVariableAI = function (e, r, n) {
        var o,
          i = n.substring(0, e);
        o = n.length < e + r ? n.length : e + r;
        var a = n.substring(e, o),
          u = n.substring(o),
          s = '(' + i + ')' + a,
          c = t.parseFieldsInGeneralPurpose(u);
        return null == c ? s : s + c;
      }),
      (t.VARIABLE_LENGTH = []),
      (t.TWO_DIGIT_DATA_LENGTH = [
        ['00', 18],
        ['01', 14],
        ['02', 14],
        ['10', t.VARIABLE_LENGTH, 20],
        ['11', 6],
        ['12', 6],
        ['13', 6],
        ['15', 6],
        ['17', 6],
        ['20', 2],
        ['21', t.VARIABLE_LENGTH, 20],
        ['22', t.VARIABLE_LENGTH, 29],
        ['30', t.VARIABLE_LENGTH, 8],
        ['37', t.VARIABLE_LENGTH, 8],
        ['90', t.VARIABLE_LENGTH, 30],
        ['91', t.VARIABLE_LENGTH, 30],
        ['92', t.VARIABLE_LENGTH, 30],
        ['93', t.VARIABLE_LENGTH, 30],
        ['94', t.VARIABLE_LENGTH, 30],
        ['95', t.VARIABLE_LENGTH, 30],
        ['96', t.VARIABLE_LENGTH, 30],
        ['97', t.VARIABLE_LENGTH, 3],
        ['98', t.VARIABLE_LENGTH, 30],
        ['99', t.VARIABLE_LENGTH, 30],
      ]),
      (t.THREE_DIGIT_DATA_LENGTH = [
        ['240', t.VARIABLE_LENGTH, 30],
        ['241', t.VARIABLE_LENGTH, 30],
        ['242', t.VARIABLE_LENGTH, 6],
        ['250', t.VARIABLE_LENGTH, 30],
        ['251', t.VARIABLE_LENGTH, 30],
        ['253', t.VARIABLE_LENGTH, 17],
        ['254', t.VARIABLE_LENGTH, 20],
        ['400', t.VARIABLE_LENGTH, 30],
        ['401', t.VARIABLE_LENGTH, 30],
        ['402', 17],
        ['403', t.VARIABLE_LENGTH, 30],
        ['410', 13],
        ['411', 13],
        ['412', 13],
        ['413', 13],
        ['414', 13],
        ['420', t.VARIABLE_LENGTH, 20],
        ['421', t.VARIABLE_LENGTH, 15],
        ['422', 3],
        ['423', t.VARIABLE_LENGTH, 15],
        ['424', 3],
        ['425', 3],
        ['426', 3],
      ]),
      (t.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
        ['310', 6],
        ['311', 6],
        ['312', 6],
        ['313', 6],
        ['314', 6],
        ['315', 6],
        ['316', 6],
        ['320', 6],
        ['321', 6],
        ['322', 6],
        ['323', 6],
        ['324', 6],
        ['325', 6],
        ['326', 6],
        ['327', 6],
        ['328', 6],
        ['329', 6],
        ['330', 6],
        ['331', 6],
        ['332', 6],
        ['333', 6],
        ['334', 6],
        ['335', 6],
        ['336', 6],
        ['340', 6],
        ['341', 6],
        ['342', 6],
        ['343', 6],
        ['344', 6],
        ['345', 6],
        ['346', 6],
        ['347', 6],
        ['348', 6],
        ['349', 6],
        ['350', 6],
        ['351', 6],
        ['352', 6],
        ['353', 6],
        ['354', 6],
        ['355', 6],
        ['356', 6],
        ['357', 6],
        ['360', 6],
        ['361', 6],
        ['362', 6],
        ['363', 6],
        ['364', 6],
        ['365', 6],
        ['366', 6],
        ['367', 6],
        ['368', 6],
        ['369', 6],
        ['390', t.VARIABLE_LENGTH, 15],
        ['391', t.VARIABLE_LENGTH, 18],
        ['392', t.VARIABLE_LENGTH, 15],
        ['393', t.VARIABLE_LENGTH, 18],
        ['703', t.VARIABLE_LENGTH, 30],
      ]),
      (t.FOUR_DIGIT_DATA_LENGTH = [
        ['7001', 13],
        ['7002', t.VARIABLE_LENGTH, 30],
        ['7003', 10],
        ['8001', 14],
        ['8002', t.VARIABLE_LENGTH, 20],
        ['8003', t.VARIABLE_LENGTH, 30],
        ['8004', t.VARIABLE_LENGTH, 30],
        ['8005', 6],
        ['8006', 18],
        ['8007', t.VARIABLE_LENGTH, 30],
        ['8008', t.VARIABLE_LENGTH, 12],
        ['8018', 18],
        ['8020', t.VARIABLE_LENGTH, 25],
        ['8100', 6],
        ['8101', 10],
        ['8102', 2],
        ['8110', t.VARIABLE_LENGTH, 70],
        ['8200', t.VARIABLE_LENGTH, 70],
      ]),
      t
    );
  })(),
  De = (function () {
    function t(t) {
      (this.buffer = new k()), (this.information = t);
    }
    return (
      (t.prototype.decodeAllCodes = function (t, e) {
        for (var r = e, n = null; ; ) {
          var o = this.decodeGeneralPurposeField(r, n),
            i = Ne.parseFieldsInGeneralPurpose(o.getNewString());
          if (
            (null != i && t.append(i),
            (n = o.isRemaining() ? '' + o.getRemainingValue() : null),
            r === o.getNewPosition())
          )
            break;
          r = o.getNewPosition();
        }
        return t.toString();
      }),
      (t.prototype.isStillNumeric = function (t) {
        if (t + 7 > this.information.getSize())
          return t + 4 <= this.information.getSize();
        for (var e = t; e < t + 3; ++e) if (this.information.get(e)) return !0;
        return this.information.get(t + 3);
      }),
      (t.prototype.decodeNumeric = function (t) {
        if (t + 7 > this.information.getSize()) {
          var e = this.extractNumericValueFromBitArray(t, 4);
          return new be(
            this.information.getSize(),
            0 === e ? be.FNC1 : e - 1,
            be.FNC1
          );
        }
        var r = this.extractNumericValueFromBitArray(t, 7);
        return new be(t + 7, (r - 8) / 11, (r - 8) % 11);
      }),
      (t.prototype.extractNumericValueFromBitArray = function (e, r) {
        return t.extractNumericValueFromBitArray(this.information, e, r);
      }),
      (t.extractNumericValueFromBitArray = function (t, e, r) {
        for (var n = 0, o = 0; o < r; ++o)
          t.get(e + o) && (n |= 1 << (r - o - 1));
        return n;
      }),
      (t.prototype.decodeGeneralPurposeField = function (t, e) {
        this.buffer.setLengthToZero(),
          null != e && this.buffer.append(e),
          this.current.setPosition(t);
        var r = this.parseBlocks();
        return null != r && r.isRemaining()
          ? new Oe(
              this.current.getPosition(),
              this.buffer.toString(),
              r.getRemainingValue()
            )
          : new Oe(this.current.getPosition(), this.buffer.toString());
      }),
      (t.prototype.parseBlocks = function () {
        var t, e;
        do {
          var r = this.current.getPosition();
          if (
            ((t = this.current.isAlpha()
              ? (e = this.parseAlphaBlock()).isFinished()
              : this.current.isIsoIec646()
              ? (e = this.parseIsoIec646Block()).isFinished()
              : (e = this.parseNumericBlock()).isFinished()),
            !(r !== this.current.getPosition()) && !t)
          )
            break;
        } while (!t);
        return e.getDecodedInformation();
      }),
      (t.prototype.parseNumericBlock = function () {
        for (; this.isStillNumeric(this.current.getPosition()); ) {
          var t = this.decodeNumeric(this.current.getPosition());
          if (
            (this.current.setPosition(t.getNewPosition()), t.isFirstDigitFNC1())
          ) {
            var e = void 0;
            return (
              (e = t.isSecondDigitFNC1()
                ? new Oe(this.current.getPosition(), this.buffer.toString())
                : new Oe(
                    this.current.getPosition(),
                    this.buffer.toString(),
                    t.getSecondDigit()
                  )),
              new Ae(!0, e)
            );
          }
          if ((this.buffer.append(t.getFirstDigit()), t.isSecondDigitFNC1())) {
            e = new Oe(this.current.getPosition(), this.buffer.toString());
            return new Ae(!0, e);
          }
          this.buffer.append(t.getSecondDigit());
        }
        return (
          this.isNumericToAlphaNumericLatch(this.current.getPosition()) &&
            (this.current.setAlpha(), this.current.incrementPosition(4)),
          new Ae(!1)
        );
      }),
      (t.prototype.parseIsoIec646Block = function () {
        for (; this.isStillIsoIec646(this.current.getPosition()); ) {
          var t = this.decodeIsoIec646(this.current.getPosition());
          if ((this.current.setPosition(t.getNewPosition()), t.isFNC1())) {
            var e = new Oe(this.current.getPosition(), this.buffer.toString());
            return new Ae(!0, e);
          }
          this.buffer.append(t.getValue());
        }
        return (
          this.isAlphaOr646ToNumericLatch(this.current.getPosition())
            ? (this.current.incrementPosition(3), this.current.setNumeric())
            : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) &&
              (this.current.getPosition() + 5 < this.information.getSize()
                ? this.current.incrementPosition(5)
                : this.current.setPosition(this.information.getSize()),
              this.current.setAlpha()),
          new Ae(!1)
        );
      }),
      (t.prototype.parseAlphaBlock = function () {
        for (; this.isStillAlpha(this.current.getPosition()); ) {
          var t = this.decodeAlphanumeric(this.current.getPosition());
          if ((this.current.setPosition(t.getNewPosition()), t.isFNC1())) {
            var e = new Oe(this.current.getPosition(), this.buffer.toString());
            return new Ae(!0, e);
          }
          this.buffer.append(t.getValue());
        }
        return (
          this.isAlphaOr646ToNumericLatch(this.current.getPosition())
            ? (this.current.incrementPosition(3), this.current.setNumeric())
            : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) &&
              (this.current.getPosition() + 5 < this.information.getSize()
                ? this.current.incrementPosition(5)
                : this.current.setPosition(this.information.getSize()),
              this.current.setIsoIec646()),
          new Ae(!1)
        );
      }),
      (t.prototype.isStillIsoIec646 = function (t) {
        if (t + 5 > this.information.getSize()) return !1;
        var e = this.extractNumericValueFromBitArray(t, 5);
        if (e >= 5 && e < 16) return !0;
        if (t + 7 > this.information.getSize()) return !1;
        var r = this.extractNumericValueFromBitArray(t, 7);
        if (r >= 64 && r < 116) return !0;
        if (t + 8 > this.information.getSize()) return !1;
        var n = this.extractNumericValueFromBitArray(t, 8);
        return n >= 232 && n < 253;
      }),
      (t.prototype.decodeIsoIec646 = function (t) {
        var e = this.extractNumericValueFromBitArray(t, 5);
        if (15 === e) return new Ie(t + 5, Ie.FNC1);
        if (e >= 5 && e < 15) return new Ie(t + 5, '0' + (e - 5));
        var r,
          n = this.extractNumericValueFromBitArray(t, 7);
        if (n >= 64 && n < 90) return new Ie(t + 7, '' + (n + 1));
        if (n >= 90 && n < 116) return new Ie(t + 7, '' + (n + 7));
        switch (this.extractNumericValueFromBitArray(t, 8)) {
          case 232:
            r = '!';
            break;
          case 233:
            r = '"';
            break;
          case 234:
            r = '%';
            break;
          case 235:
            r = '&';
            break;
          case 236:
            r = "'";
            break;
          case 237:
            r = '(';
            break;
          case 238:
            r = ')';
            break;
          case 239:
            r = '*';
            break;
          case 240:
            r = '+';
            break;
          case 241:
            r = ',';
            break;
          case 242:
            r = '-';
            break;
          case 243:
            r = '.';
            break;
          case 244:
            r = '/';
            break;
          case 245:
            r = ':';
            break;
          case 246:
            r = ';';
            break;
          case 247:
            r = '<';
            break;
          case 248:
            r = '=';
            break;
          case 249:
            r = '>';
            break;
          case 250:
            r = '?';
            break;
          case 251:
            r = '_';
            break;
          case 252:
            r = ' ';
            break;
          default:
            throw new R();
        }
        return new Ie(t + 8, r);
      }),
      (t.prototype.isStillAlpha = function (t) {
        if (t + 5 > this.information.getSize()) return !1;
        var e = this.extractNumericValueFromBitArray(t, 5);
        if (e >= 5 && e < 16) return !0;
        if (t + 6 > this.information.getSize()) return !1;
        var r = this.extractNumericValueFromBitArray(t, 6);
        return r >= 16 && r < 63;
      }),
      (t.prototype.decodeAlphanumeric = function (t) {
        var e = this.extractNumericValueFromBitArray(t, 5);
        if (15 === e) return new Ie(t + 5, Ie.FNC1);
        if (e >= 5 && e < 15) return new Ie(t + 5, '0' + (e - 5));
        var r,
          n = this.extractNumericValueFromBitArray(t, 6);
        if (n >= 32 && n < 58) return new Ie(t + 6, '' + (n + 33));
        switch (n) {
          case 58:
            r = '*';
            break;
          case 59:
            r = ',';
            break;
          case 60:
            r = '-';
            break;
          case 61:
            r = '.';
            break;
          case 62:
            r = '/';
            break;
          default:
            throw new yt('Decoding invalid alphanumeric value: ' + n);
        }
        return new Ie(t + 6, r);
      }),
      (t.prototype.isAlphaTo646ToAlphaLatch = function (t) {
        if (t + 1 > this.information.getSize()) return !1;
        for (var e = 0; e < 5 && e + t < this.information.getSize(); ++e)
          if (2 === e) {
            if (!this.information.get(t + 2)) return !1;
          } else if (this.information.get(t + e)) return !1;
        return !0;
      }),
      (t.prototype.isAlphaOr646ToNumericLatch = function (t) {
        if (t + 3 > this.information.getSize()) return !1;
        for (var e = t; e < t + 3; ++e) if (this.information.get(e)) return !1;
        return !0;
      }),
      (t.prototype.isNumericToAlphaNumericLatch = function (t) {
        if (t + 1 > this.information.getSize()) return !1;
        for (var e = 0; e < 4 && e + t < this.information.getSize(); ++e)
          if (this.information.get(t + e)) return !1;
        return !0;
      }),
      t
    );
  })(),
  Pe = (function () {
    function t(t) {
      (this.information = t), (this.generalDecoder = new De(t));
    }
    return (
      (t.prototype.getInformation = function () {
        return this.information;
      }),
      (t.prototype.getGeneralDecoder = function () {
        return this.generalDecoder;
      }),
      t
    );
  })(),
  Me = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Be = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      Me(e, t),
      (e.prototype.encodeCompressedGtin = function (t, e) {
        t.append('(01)');
        var r = t.length();
        t.append('9'), this.encodeCompressedGtinWithoutAI(t, e, r);
      }),
      (e.prototype.encodeCompressedGtinWithoutAI = function (t, r, n) {
        for (var o = 0; o < 4; ++o) {
          var i = this.getGeneralDecoder().extractNumericValueFromBitArray(
            r + 10 * o,
            10
          );
          i / 100 == 0 && t.append('0'),
            i / 10 == 0 && t.append('0'),
            t.append(i);
        }
        e.appendCheckDigit(t, n);
      }),
      (e.appendCheckDigit = function (t, e) {
        for (var r = 0, n = 0; n < 13; n++) {
          var o = t.charAt(n + e).charCodeAt(0) - '0'.charCodeAt(0);
          r += 0 == (1 & n) ? 3 * o : o;
        }
        10 === (r = 10 - (r % 10)) && (r = 0), t.append(r);
      }),
      (e.GTIN_SIZE = 40),
      e
    );
  })(Pe),
  Le = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Fe = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      Le(e, t),
      (e.prototype.parseInformation = function () {
        var t = new k();
        t.append('(01)');
        var r = t.length(),
          n = this.getGeneralDecoder().extractNumericValueFromBitArray(
            e.HEADER_SIZE,
            4
          );
        return (
          t.append(n),
          this.encodeCompressedGtinWithoutAI(t, e.HEADER_SIZE + 4, r),
          this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE + 44)
        );
      }),
      (e.HEADER_SIZE = 4),
      e
    );
  })(Be),
  ke = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  xe = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      ke(e, t),
      (e.prototype.parseInformation = function () {
        var t = new k();
        return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE);
      }),
      (e.HEADER_SIZE = 5),
      e
    );
  })(Pe),
  Ve = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Ue = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      Ve(e, t),
      (e.prototype.encodeCompressedWeight = function (t, e, r) {
        var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e, r);
        this.addWeightCode(t, n);
        for (var o = this.checkWeight(n), i = 1e5, a = 0; a < 5; ++a)
          o / i == 0 && t.append('0'), (i /= 10);
        t.append(o);
      }),
      e
    );
  })(Be),
  He = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Ge = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      He(e, t),
      (e.prototype.parseInformation = function () {
        if (
          this.getInformation().getSize() !=
          e.HEADER_SIZE + Ue.GTIN_SIZE + e.WEIGHT_SIZE
        )
          throw new U();
        var t = new k();
        return (
          this.encodeCompressedGtin(t, e.HEADER_SIZE),
          this.encodeCompressedWeight(
            t,
            e.HEADER_SIZE + Ue.GTIN_SIZE,
            e.WEIGHT_SIZE
          ),
          t.toString()
        );
      }),
      (e.HEADER_SIZE = 5),
      (e.WEIGHT_SIZE = 15),
      e
    );
  })(Ue),
  Xe = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  We = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      Xe(e, t),
      (e.prototype.addWeightCode = function (t, e) {
        t.append('(3103)');
      }),
      (e.prototype.checkWeight = function (t) {
        return t;
      }),
      e
    );
  })(Ge),
  je = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  ze = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      je(e, t),
      (e.prototype.addWeightCode = function (t, e) {
        e < 1e4 ? t.append('(3202)') : t.append('(3203)');
      }),
      (e.prototype.checkWeight = function (t) {
        return t < 1e4 ? t : t - 1e4;
      }),
      e
    );
  })(Ge),
  Ye = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Ze = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      Ye(e, t),
      (e.prototype.parseInformation = function () {
        if (this.getInformation().getSize() < e.HEADER_SIZE + Be.GTIN_SIZE)
          throw new U();
        var t = new k();
        this.encodeCompressedGtin(t, e.HEADER_SIZE);
        var r = this.getGeneralDecoder().extractNumericValueFromBitArray(
          e.HEADER_SIZE + Be.GTIN_SIZE,
          e.LAST_DIGIT_SIZE
        );
        t.append('(392'), t.append(r), t.append(')');
        var n = this.getGeneralDecoder().decodeGeneralPurposeField(
          e.HEADER_SIZE + Be.GTIN_SIZE + e.LAST_DIGIT_SIZE,
          null
        );
        return t.append(n.getNewString()), t.toString();
      }),
      (e.HEADER_SIZE = 8),
      (e.LAST_DIGIT_SIZE = 2),
      e
    );
  })(Be),
  Ke = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  qe = (function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      Ke(e, t),
      (e.prototype.parseInformation = function () {
        if (this.getInformation().getSize() < e.HEADER_SIZE + Be.GTIN_SIZE)
          throw new U();
        var t = new k();
        this.encodeCompressedGtin(t, e.HEADER_SIZE);
        var r = this.getGeneralDecoder().extractNumericValueFromBitArray(
          e.HEADER_SIZE + Be.GTIN_SIZE,
          e.LAST_DIGIT_SIZE
        );
        t.append('(393'), t.append(r), t.append(')');
        var n = this.getGeneralDecoder().extractNumericValueFromBitArray(
          e.HEADER_SIZE + Be.GTIN_SIZE + e.LAST_DIGIT_SIZE,
          e.FIRST_THREE_DIGITS_SIZE
        );
        n / 100 == 0 && t.append('0'),
          n / 10 == 0 && t.append('0'),
          t.append(n);
        var o = this.getGeneralDecoder().decodeGeneralPurposeField(
          e.HEADER_SIZE +
            Be.GTIN_SIZE +
            e.LAST_DIGIT_SIZE +
            e.FIRST_THREE_DIGITS_SIZE,
          null
        );
        return t.append(o.getNewString()), t.toString();
      }),
      (e.HEADER_SIZE = 8),
      (e.LAST_DIGIT_SIZE = 2),
      (e.FIRST_THREE_DIGITS_SIZE = 10),
      e
    );
  })(Be),
  Qe = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Je = (function (t) {
    function e(e, r, n) {
      var o = t.call(this, e) || this;
      return (o.dateCode = n), (o.firstAIdigits = r), o;
    }
    return (
      Qe(e, t),
      (e.prototype.parseInformation = function () {
        if (
          this.getInformation().getSize() !=
          e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE + e.DATE_SIZE
        )
          throw new U();
        var t = new k();
        return (
          this.encodeCompressedGtin(t, e.HEADER_SIZE),
          this.encodeCompressedWeight(
            t,
            e.HEADER_SIZE + e.GTIN_SIZE,
            e.WEIGHT_SIZE
          ),
          this.encodeCompressedDate(
            t,
            e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE
          ),
          t.toString()
        );
      }),
      (e.prototype.encodeCompressedDate = function (t, r) {
        var n = this.getGeneralDecoder().extractNumericValueFromBitArray(
          r,
          e.DATE_SIZE
        );
        if (38400 != n) {
          t.append('('), t.append(this.dateCode), t.append(')');
          var o = n % 32,
            i = ((n /= 32) % 12) + 1,
            a = (n /= 12);
          a / 10 == 0 && t.append('0'),
            t.append(a),
            i / 10 == 0 && t.append('0'),
            t.append(i),
            o / 10 == 0 && t.append('0'),
            t.append(o);
        }
      }),
      (e.prototype.addWeightCode = function (t, e) {
        t.append('('),
          t.append(this.firstAIdigits),
          t.append(e / 1e5),
          t.append(')');
      }),
      (e.prototype.checkWeight = function (t) {
        return t % 1e5;
      }),
      (e.HEADER_SIZE = 8),
      (e.WEIGHT_SIZE = 20),
      (e.DATE_SIZE = 16),
      e
    );
  })(Ue);
var $e = (function () {
    function t(t, e, r, n) {
      (this.leftchar = t),
        (this.rightchar = e),
        (this.finderpattern = r),
        (this.maybeLast = n);
    }
    return (
      (t.prototype.mayBeLast = function () {
        return this.maybeLast;
      }),
      (t.prototype.getLeftChar = function () {
        return this.leftchar;
      }),
      (t.prototype.getRightChar = function () {
        return this.rightchar;
      }),
      (t.prototype.getFinderPattern = function () {
        return this.finderpattern;
      }),
      (t.prototype.mustBeLast = function () {
        return null == this.rightchar;
      }),
      (t.prototype.toString = function () {
        return (
          '[ ' +
          this.leftchar +
          ', ' +
          this.rightchar +
          ' : ' +
          (null == this.finderpattern
            ? 'null'
            : this.finderpattern.getValue()) +
          ' ]'
        );
      }),
      (t.equals = function (e, r) {
        return (
          e instanceof t &&
          t.equalsOrNull(e.leftchar, r.leftchar) &&
          t.equalsOrNull(e.rightchar, r.rightchar) &&
          t.equalsOrNull(e.finderpattern, r.finderpattern)
        );
      }),
      (t.equalsOrNull = function (e, r) {
        return null === e ? null === r : t.equals(e, r);
      }),
      (t.prototype.hashCode = function () {
        return (
          this.leftchar.getValue() ^
          this.rightchar.getValue() ^
          this.finderpattern.getValue()
        );
      }),
      t
    );
  })(),
  tr = (function () {
    function t(t, e, r) {
      (this.pairs = t), (this.rowNumber = e), (this.wasReversed = r);
    }
    return (
      (t.prototype.getPairs = function () {
        return this.pairs;
      }),
      (t.prototype.getRowNumber = function () {
        return this.rowNumber;
      }),
      (t.prototype.isReversed = function () {
        return this.wasReversed;
      }),
      (t.prototype.isEquivalent = function (t) {
        return this.checkEqualitity(this, t);
      }),
      (t.prototype.toString = function () {
        return '{ ' + this.pairs + ' }';
      }),
      (t.prototype.equals = function (e, r) {
        return (
          e instanceof t &&
          this.checkEqualitity(e, r) &&
          e.wasReversed === r.wasReversed
        );
      }),
      (t.prototype.checkEqualitity = function (t, e) {
        var r;
        if (t && e)
          return (
            t.forEach(function (t, n) {
              e.forEach(function (e) {
                t.getLeftChar().getValue() === e.getLeftChar().getValue() &&
                  t.getRightChar().getValue() === e.getRightChar().getValue() &&
                  t.getFinderPatter().getValue() ===
                    e.getFinderPatter().getValue() &&
                  (r = !0);
              });
            }),
            r
          );
      }),
      t
    );
  })(),
  er = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  rr = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  nr = (function (t) {
    function e() {
      var r = (null !== t && t.apply(this, arguments)) || this;
      return (
        (r.pairs = new Array(e.MAX_PAIRS)),
        (r.rows = new Array()),
        (r.startEnd = [2]),
        r
      );
    }
    return (
      er(e, t),
      (e.prototype.decodeRow = function (t, r, n) {
        (this.pairs.length = 0), (this.startFromEven = !1);
        try {
          return e.constructResult(this.decodeRow2pairs(t, r));
        } catch (t) {}
        return (
          (this.pairs.length = 0),
          (this.startFromEven = !0),
          e.constructResult(this.decodeRow2pairs(t, r))
        );
      }),
      (e.prototype.reset = function () {
        (this.pairs.length = 0), (this.rows.length = 0);
      }),
      (e.prototype.decodeRow2pairs = function (t, e) {
        for (var r, n = !1; !n; )
          try {
            this.pairs.push(this.retrieveNextPair(e, this.pairs, t));
          } catch (t) {
            if (t instanceof U) {
              if (!this.pairs.length) throw new U();
              n = !0;
            }
          }
        if (this.checkChecksum()) return this.pairs;
        if (((r = !!this.rows.length), this.storeRow(t, !1), r)) {
          var o = this.checkRowsBoolean(!1);
          if (null != o) return o;
          if (null != (o = this.checkRowsBoolean(!0))) return o;
        }
        throw new U();
      }),
      (e.prototype.checkRowsBoolean = function (t) {
        if (this.rows.length > 25) return (this.rows.length = 0), null;
        (this.pairs.length = 0), t && (this.rows = this.rows.reverse());
        var e = null;
        try {
          e = this.checkRows(new Array(), 0);
        } catch (t) {
          console.log(t);
        }
        return t && (this.rows = this.rows.reverse()), e;
      }),
      (e.prototype.checkRows = function (t, r) {
        for (var n, o, i = r; i < this.rows.length; i++) {
          var a = this.rows[i];
          this.pairs.length = 0;
          try {
            for (
              var u = ((n = void 0), rr(t)), s = u.next();
              !s.done;
              s = u.next()
            ) {
              var c = s.value;
              this.pairs.push(c.getPairs());
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              s && !s.done && (o = u.return) && o.call(u);
            } finally {
              if (n) throw n.error;
            }
          }
          if ((this.pairs.push(a.getPairs()), e.isValidSequence(this.pairs))) {
            if (this.checkChecksum()) return this.pairs;
            var f = new Array(t);
            f.push(a);
            try {
              return this.checkRows(f, i + 1);
            } catch (t) {
              console.log(t);
            }
          }
        }
        throw new U();
      }),
      (e.isValidSequence = function (t) {
        var r, n;
        try {
          for (
            var o = rr(e.FINDER_PATTERN_SEQUENCES), i = o.next();
            !i.done;
            i = o.next()
          ) {
            var a = i.value;
            if (!(t.length > a.length)) {
              for (var u = !0, s = 0; s < t.length; s++)
                if (t[s].getFinderPattern().getValue() != a[s]) {
                  u = !1;
                  break;
                }
              if (u) return !0;
            }
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
        return !1;
      }),
      (e.prototype.storeRow = function (t, r) {
        for (var n = 0, o = !1, i = !1; n < this.rows.length; ) {
          var a = this.rows[n];
          if (a.getRowNumber() > t) {
            i = a.isEquivalent(this.pairs);
            break;
          }
          (o = a.isEquivalent(this.pairs)), n++;
        }
        i ||
          o ||
          e.isPartialRow(this.pairs, this.rows) ||
          (this.rows.push(n, new tr(this.pairs, t, r)),
          this.removePartialRows(this.pairs, this.rows));
      }),
      (e.prototype.removePartialRows = function (t, e) {
        var r, n, o, i, a, u;
        try {
          for (var s = rr(e), c = s.next(); !c.done; c = s.next()) {
            var f = c.value;
            if (f.getPairs().length !== t.length) {
              try {
                for (
                  var h = ((o = void 0), rr(f.getPairs())), l = h.next();
                  !l.done;
                  l = h.next()
                ) {
                  var d = l.value,
                    p = !1;
                  try {
                    for (
                      var g = ((a = void 0), rr(t)), y = g.next();
                      !y.done;
                      y = g.next()
                    ) {
                      var w = y.value;
                      if ($e.equals(d, w)) {
                        p = !0;
                        break;
                      }
                    }
                  } catch (t) {
                    a = { error: t };
                  } finally {
                    try {
                      y && !y.done && (u = g.return) && u.call(g);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
                  p || !1;
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  l && !l.done && (i = h.return) && i.call(h);
                } finally {
                  if (o) throw o.error;
                }
              }
            }
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            c && !c.done && (n = s.return) && n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
      }),
      (e.isPartialRow = function (t, e) {
        var r, n, o, i, a, u;
        try {
          for (var s = rr(e), c = s.next(); !c.done; c = s.next()) {
            var f = c.value,
              h = !0;
            try {
              for (
                var l = ((o = void 0), rr(t)), d = l.next();
                !d.done;
                d = l.next()
              ) {
                var p = d.value,
                  g = !1;
                try {
                  for (
                    var y = ((a = void 0), rr(f.getPairs())), w = y.next();
                    !w.done;
                    w = y.next()
                  ) {
                    var _ = w.value;
                    if (p.equals(_)) {
                      g = !0;
                      break;
                    }
                  }
                } catch (t) {
                  a = { error: t };
                } finally {
                  try {
                    w && !w.done && (u = y.return) && u.call(y);
                  } finally {
                    if (a) throw a.error;
                  }
                }
                if (!g) {
                  h = !1;
                  break;
                }
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                d && !d.done && (i = l.return) && i.call(l);
              } finally {
                if (o) throw o.error;
              }
            }
            if (h) return !0;
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            c && !c.done && (n = s.return) && n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
        return !1;
      }),
      (e.prototype.getRows = function () {
        return this.rows;
      }),
      (e.constructResult = function (t) {
        var e = (function (t) {
            try {
              if (t.get(1)) return new Fe(t);
              if (!t.get(2)) return new xe(t);
              switch (De.extractNumericValueFromBitArray(t, 1, 4)) {
                case 4:
                  return new We(t);
                case 5:
                  return new ze(t);
              }
              switch (De.extractNumericValueFromBitArray(t, 1, 5)) {
                case 12:
                  return new Ze(t);
                case 13:
                  return new qe(t);
              }
              switch (De.extractNumericValueFromBitArray(t, 1, 7)) {
                case 56:
                  return new Je(t, '310', '11');
                case 57:
                  return new Je(t, '320', '11');
                case 58:
                  return new Je(t, '310', '13');
                case 59:
                  return new Je(t, '320', '13');
                case 60:
                  return new Je(t, '310', '15');
                case 61:
                  return new Je(t, '320', '15');
                case 62:
                  return new Je(t, '310', '17');
                case 63:
                  return new Je(t, '320', '17');
              }
            } catch (e) {
              throw (console.log(e), new yt('unknown decoder: ' + t));
            }
          })(me.buildBitArray(t)).parseInformation(),
          r = t[0].getFinderPattern().getResultPoints(),
          n = t[t.length - 1].getFinderPattern().getResultPoints(),
          o = [r[0], r[1], n[0], n[1]];
        return new et(e, null, null, o, nt.RSS_EXPANDED, null);
      }),
      (e.prototype.checkChecksum = function () {
        var t = this.pairs.get(0),
          e = t.getLeftChar(),
          r = t.getRightChar();
        if (null == r) return !1;
        for (
          var n = r.getChecksumPortion(), o = 2, i = 1;
          i < this.pairs.size();
          ++i
        ) {
          var a = this.pairs.get(i);
          (n += a.getLeftChar().getChecksumPortion()), o++;
          var u = a.getRightChar();
          null != u && ((n += u.getChecksumPortion()), o++);
        }
        return 211 * (o - 4) + (n %= 211) == e.getValue();
      }),
      (e.getNextSecondBar = function (t, e) {
        var r;
        return (
          t.get(e)
            ? ((r = t.getNextUnset(e)), (r = t.getNextSet(r)))
            : ((r = t.getNextSet(e)), (r = t.getNextUnset(r))),
          r
        );
      }),
      (e.prototype.retrieveNextPair = function (t, r, n) {
        var o,
          i = r.length % 2 == 0;
        this.startFromEven && (i = !i);
        var a = !0,
          u = -1;
        do {
          this.findNextPair(t, r, u),
            null == (o = this.parseFoundFinderPattern(t, n, i))
              ? (u = e.getNextSecondBar(t, this.startEnd[0]))
              : (a = !1);
        } while (a);
        var s,
          c = this.decodeDataCharacter(t, o, i, !0);
        if (!this.isEmptyPair(r) && r[r.length - 1].mustBeLast()) throw new U();
        try {
          s = this.decodeDataCharacter(t, o, i, !1);
        } catch (t) {
          (s = null), console.log(t);
        }
        return new $e(c, s, o, !0);
      }),
      (e.prototype.isEmptyPair = function (t) {
        return 0 === t.length;
      }),
      (e.prototype.findNextPair = function (t, r, n) {
        var o = this.getDecodeFinderCounters();
        (o[0] = 0), (o[1] = 0), (o[2] = 0), (o[3] = 0);
        var i,
          a = t.getSize();
        if (n >= 0) i = n;
        else if (this.isEmptyPair(r)) i = 0;
        else {
          i = r[r.length - 1].getFinderPattern().getStartEnd()[1];
        }
        var u = r.length % 2 != 0;
        this.startFromEven && (u = !u);
        for (var s = !1; i < a && (s = !t.get(i)); ) i++;
        for (var c = 0, f = i, h = i; h < a; h++)
          if (t.get(h) != s) o[c]++;
          else {
            if (3 == c) {
              if ((u && e.reverseCounters(o), e.isFinderPattern(o)))
                return (this.startEnd[0] = f), void (this.startEnd[1] = h);
              u && e.reverseCounters(o),
                (f += o[0] + o[1]),
                (o[0] = o[2]),
                (o[1] = o[3]),
                (o[2] = 0),
                (o[3] = 0),
                c--;
            } else c++;
            (o[c] = 1), (s = !s);
          }
        throw new U();
      }),
      (e.reverseCounters = function (t) {
        for (var e = t.length, r = 0; r < e / 2; ++r) {
          var n = t[r];
          (t[r] = t[e - r - 1]), (t[e - r - 1] = n);
        }
      }),
      (e.prototype.parseFoundFinderPattern = function (t, r, n) {
        var o, i, a;
        if (n) {
          for (var u = this.startEnd[0] - 1; u >= 0 && !t.get(u); ) u--;
          u++, (o = this.startEnd[0] - u), (i = u), (a = this.startEnd[1]);
        } else
          (i = this.startEnd[0]),
            (o = (a = t.getNextUnset(this.startEnd[1] + 1)) - this.startEnd[1]);
        var s,
          c = this.getDecodeFinderCounters();
        w.arraycopy(c, 0, c, 1, c.length - 1), (c[0] = o);
        try {
          s = this.parseFinderValue(c, e.FINDER_PATTERNS);
        } catch (t) {
          return null;
        }
        return new we(s, [i, a], i, a, r);
      }),
      (e.prototype.decodeDataCharacter = function (t, r, n, o) {
        for (var i = this.getDataCharacterCounters(), a = 0; a < i.length; a++)
          i[a] = 0;
        if (o) e.recordPatternInReverse(t, r.getStartEnd()[0], i);
        else {
          e.recordPattern(t, r.getStartEnd()[1], i);
          for (var u = 0, s = i.length - 1; u < s; u++, s--) {
            var c = i[u];
            (i[u] = i[s]), (i[s] = c);
          }
        }
        var f = vt.sum(new Int32Array(i)) / 17,
          h = (r.getStartEnd()[1] - r.getStartEnd()[0]) / 15;
        if (Math.abs(f - h) / h > 0.3) throw new U();
        var l = this.getOddCounts(),
          d = this.getEvenCounts(),
          p = this.getOddRoundingErrors(),
          g = this.getEvenRoundingErrors();
        for (u = 0; u < i.length; u++) {
          var y = (1 * i[u]) / f,
            w = y + 0.5;
          if (w < 1) {
            if (y < 0.3) throw new U();
            w = 1;
          } else if (w > 8) {
            if (y > 8.7) throw new U();
            w = 8;
          }
          var _ = u / 2;
          0 == (1 & u)
            ? ((l[_] = w), (p[_] = y - w))
            : ((d[_] = w), (g[_] = y - w));
        }
        this.adjustOddEvenCounts(17);
        var v = 4 * r.getValue() + (n ? 0 : 2) + (o ? 0 : 1) - 1,
          m = 0,
          A = 0;
        for (u = l.length - 1; u >= 0; u--) {
          if (e.isNotA1left(r, n, o)) {
            var E = e.WEIGHTS[v][2 * u];
            A += l[u] * E;
          }
          m += l[u];
        }
        var C = 0;
        for (u = d.length - 1; u >= 0; u--)
          if (e.isNotA1left(r, n, o)) {
            E = e.WEIGHTS[v][2 * u + 1];
            C += d[u] * E;
          }
        var I = A + C;
        if (0 != (1 & m) || m > 13 || m < 4) throw new U();
        var S = (13 - m) / 2,
          O = e.SYMBOL_WIDEST[S],
          T = 9 - O,
          b = ve.getRSSvalue(l, O, !0),
          R = ve.getRSSvalue(d, T, !1),
          N = e.EVEN_TOTAL_SUBSET[S],
          D = e.GSUM[S];
        return new ye(b * N + R + D, I);
      }),
      (e.isNotA1left = function (t, e, r) {
        return !(0 == t.getValue() && e && r);
      }),
      (e.prototype.adjustOddEvenCounts = function (t) {
        var r = vt.sum(new Int32Array(this.getOddCounts())),
          n = vt.sum(new Int32Array(this.getEvenCounts())),
          o = !1,
          i = !1;
        r > 13 ? (i = !0) : r < 4 && (o = !0);
        var a = !1,
          u = !1;
        n > 13 ? (u = !0) : n < 4 && (a = !0);
        var s = r + n - t,
          c = 1 == (1 & r),
          f = 0 == (1 & n);
        if (1 == s)
          if (c) {
            if (f) throw new U();
            i = !0;
          } else {
            if (!f) throw new U();
            u = !0;
          }
        else if (-1 == s)
          if (c) {
            if (f) throw new U();
            o = !0;
          } else {
            if (!f) throw new U();
            a = !0;
          }
        else {
          if (0 != s) throw new U();
          if (c) {
            if (!f) throw new U();
            r < n ? ((o = !0), (u = !0)) : ((i = !0), (a = !0));
          } else if (f) throw new U();
        }
        if (o) {
          if (i) throw new U();
          e.increment(this.getOddCounts(), this.getOddRoundingErrors());
        }
        if (
          (i && e.decrement(this.getOddCounts(), this.getOddRoundingErrors()),
          a)
        ) {
          if (u) throw new U();
          e.increment(this.getEvenCounts(), this.getOddRoundingErrors());
        }
        u && e.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
      }),
      (e.SYMBOL_WIDEST = [7, 5, 4, 3, 1]),
      (e.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204]),
      (e.GSUM = [0, 348, 1388, 2948, 3988]),
      (e.FINDER_PATTERNS = [
        Int32Array.from([1, 8, 4, 1]),
        Int32Array.from([3, 6, 4, 1]),
        Int32Array.from([3, 4, 6, 1]),
        Int32Array.from([3, 2, 8, 1]),
        Int32Array.from([2, 6, 5, 1]),
        Int32Array.from([2, 2, 9, 1]),
      ]),
      (e.WEIGHTS = [
        [1, 3, 9, 27, 81, 32, 96, 77],
        [20, 60, 180, 118, 143, 7, 21, 63],
        [189, 145, 13, 39, 117, 140, 209, 205],
        [193, 157, 49, 147, 19, 57, 171, 91],
        [62, 186, 136, 197, 169, 85, 44, 132],
        [185, 133, 188, 142, 4, 12, 36, 108],
        [113, 128, 173, 97, 80, 29, 87, 50],
        [150, 28, 84, 41, 123, 158, 52, 156],
        [46, 138, 203, 187, 139, 206, 196, 166],
        [76, 17, 51, 153, 37, 111, 122, 155],
        [43, 129, 176, 106, 107, 110, 119, 146],
        [16, 48, 144, 10, 30, 90, 59, 177],
        [109, 116, 137, 200, 178, 112, 125, 164],
        [70, 210, 208, 202, 184, 130, 179, 115],
        [134, 191, 151, 31, 93, 68, 204, 190],
        [148, 22, 66, 198, 172, 94, 71, 2],
        [6, 18, 54, 162, 64, 192, 154, 40],
        [120, 149, 25, 75, 14, 42, 126, 167],
        [79, 26, 78, 23, 69, 207, 199, 175],
        [103, 98, 83, 38, 114, 131, 182, 124],
        [161, 61, 183, 127, 170, 88, 53, 159],
        [55, 165, 73, 8, 24, 72, 5, 15],
        [45, 135, 194, 160, 58, 174, 100, 89],
      ]),
      (e.FINDER_PAT_A = 0),
      (e.FINDER_PAT_B = 1),
      (e.FINDER_PAT_C = 2),
      (e.FINDER_PAT_D = 3),
      (e.FINDER_PAT_E = 4),
      (e.FINDER_PAT_F = 5),
      (e.FINDER_PATTERN_SEQUENCES = [
        [e.FINDER_PAT_A, e.FINDER_PAT_A],
        [e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B],
        [e.FINDER_PAT_A, e.FINDER_PAT_C, e.FINDER_PAT_B, e.FINDER_PAT_D],
        [
          e.FINDER_PAT_A,
          e.FINDER_PAT_E,
          e.FINDER_PAT_B,
          e.FINDER_PAT_D,
          e.FINDER_PAT_C,
        ],
        [
          e.FINDER_PAT_A,
          e.FINDER_PAT_E,
          e.FINDER_PAT_B,
          e.FINDER_PAT_D,
          e.FINDER_PAT_D,
          e.FINDER_PAT_F,
        ],
        [
          e.FINDER_PAT_A,
          e.FINDER_PAT_E,
          e.FINDER_PAT_B,
          e.FINDER_PAT_D,
          e.FINDER_PAT_E,
          e.FINDER_PAT_F,
          e.FINDER_PAT_F,
        ],
        [
          e.FINDER_PAT_A,
          e.FINDER_PAT_A,
          e.FINDER_PAT_B,
          e.FINDER_PAT_B,
          e.FINDER_PAT_C,
          e.FINDER_PAT_C,
          e.FINDER_PAT_D,
          e.FINDER_PAT_D,
        ],
        [
          e.FINDER_PAT_A,
          e.FINDER_PAT_A,
          e.FINDER_PAT_B,
          e.FINDER_PAT_B,
          e.FINDER_PAT_C,
          e.FINDER_PAT_C,
          e.FINDER_PAT_D,
          e.FINDER_PAT_E,
          e.FINDER_PAT_E,
        ],
        [
          e.FINDER_PAT_A,
          e.FINDER_PAT_A,
          e.FINDER_PAT_B,
          e.FINDER_PAT_B,
          e.FINDER_PAT_C,
          e.FINDER_PAT_C,
          e.FINDER_PAT_D,
          e.FINDER_PAT_E,
          e.FINDER_PAT_F,
          e.FINDER_PAT_F,
        ],
        [
          e.FINDER_PAT_A,
          e.FINDER_PAT_A,
          e.FINDER_PAT_B,
          e.FINDER_PAT_B,
          e.FINDER_PAT_C,
          e.FINDER_PAT_D,
          e.FINDER_PAT_D,
          e.FINDER_PAT_E,
          e.FINDER_PAT_E,
          e.FINDER_PAT_F,
          e.FINDER_PAT_F,
        ],
      ]),
      (e.MAX_PAIRS = 11),
      e
    );
  })(ge),
  or = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  ir = (function (t) {
    function e(e, r, n) {
      var o = t.call(this, e, r) || this;
      return (o.count = 0), (o.finderPattern = n), o;
    }
    return (
      or(e, t),
      (e.prototype.getFinderPattern = function () {
        return this.finderPattern;
      }),
      (e.prototype.getCount = function () {
        return this.count;
      }),
      (e.prototype.incrementCount = function () {
        this.count++;
      }),
      e
    );
  })(ye),
  ar = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  ur = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  sr = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.possibleLeftPairs = []), (e.possibleRightPairs = []), e;
    }
    return (
      ar(e, t),
      (e.prototype.decodeRow = function (t, r, n) {
        var o,
          i,
          a,
          u,
          s = this.decodePair(r, !1, t, n);
        e.addOrTally(this.possibleLeftPairs, s), r.reverse();
        var c = this.decodePair(r, !0, t, n);
        e.addOrTally(this.possibleRightPairs, c), r.reverse();
        try {
          for (
            var f = ur(this.possibleLeftPairs), h = f.next();
            !h.done;
            h = f.next()
          ) {
            var l = h.value;
            if (l.getCount() > 1)
              try {
                for (
                  var d = ((a = void 0), ur(this.possibleRightPairs)),
                    p = d.next();
                  !p.done;
                  p = d.next()
                ) {
                  var g = p.value;
                  if (g.getCount() > 1 && e.checkChecksum(l, g))
                    return e.constructResult(l, g);
                }
              } catch (t) {
                a = { error: t };
              } finally {
                try {
                  p && !p.done && (u = d.return) && u.call(d);
                } finally {
                  if (a) throw a.error;
                }
              }
          }
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            h && !h.done && (i = f.return) && i.call(f);
          } finally {
            if (o) throw o.error;
          }
        }
        throw new U();
      }),
      (e.addOrTally = function (t, e) {
        var r, n;
        if (null != e) {
          var o = !1;
          try {
            for (var i = ur(t), a = i.next(); !a.done; a = i.next()) {
              var u = a.value;
              if (u.getValue() === e.getValue()) {
                u.incrementCount(), (o = !0);
                break;
              }
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              a && !a.done && (n = i.return) && n.call(i);
            } finally {
              if (r) throw r.error;
            }
          }
          o || t.push(e);
        }
      }),
      (e.prototype.reset = function () {
        (this.possibleLeftPairs.length = 0),
          (this.possibleRightPairs.length = 0);
      }),
      (e.constructResult = function (t, e) {
        for (
          var r = 4537077 * t.getValue() + e.getValue(),
            n = new String(r).toString(),
            o = new k(),
            i = 13 - n.length;
          i > 0;
          i--
        )
          o.append('0');
        o.append(n);
        var a = 0;
        for (i = 0; i < 13; i++) {
          var u = o.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
          a += 0 == (1 & i) ? 3 * u : u;
        }
        10 === (a = 10 - (a % 10)) && (a = 0), o.append(a.toString());
        var s = t.getFinderPattern().getResultPoints(),
          c = e.getFinderPattern().getResultPoints();
        return new et(
          o.toString(),
          null,
          0,
          [s[0], s[1], c[0], c[1]],
          nt.RSS_14,
          new Date().getTime()
        );
      }),
      (e.checkChecksum = function (t, e) {
        var r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79,
          n =
            9 * t.getFinderPattern().getValue() +
            e.getFinderPattern().getValue();
        return n > 72 && n--, n > 8 && n--, r === n;
      }),
      (e.prototype.decodePair = function (t, e, r, n) {
        try {
          var o = this.findFinderPattern(t, e),
            i = this.parseFoundFinderPattern(t, r, e, o),
            a = null == n ? null : n.get(T.NEED_RESULT_POINT_CALLBACK);
          if (null != a) {
            var u = (o[0] + o[1]) / 2;
            e && (u = t.getSize() - 1 - u),
              a.foundPossibleResultPoint(new At(u, r));
          }
          var s = this.decodeDataCharacter(t, i, !0),
            c = this.decodeDataCharacter(t, i, !1);
          return new ir(
            1597 * s.getValue() + c.getValue(),
            s.getChecksumPortion() + 4 * c.getChecksumPortion(),
            i
          );
        } catch (t) {
          return null;
        }
      }),
      (e.prototype.decodeDataCharacter = function (t, r, n) {
        for (var o = this.getDataCharacterCounters(), i = 0; i < o.length; i++)
          o[i] = 0;
        if (n) Lt.recordPatternInReverse(t, r.getStartEnd()[0], o);
        else {
          Lt.recordPattern(t, r.getStartEnd()[1] + 1, o);
          for (var a = 0, u = o.length - 1; a < u; a++, u--) {
            var s = o[a];
            (o[a] = o[u]), (o[u] = s);
          }
        }
        var c = n ? 16 : 15,
          f = vt.sum(new Int32Array(o)) / c,
          h = this.getOddCounts(),
          l = this.getEvenCounts(),
          d = this.getOddRoundingErrors(),
          p = this.getEvenRoundingErrors();
        for (a = 0; a < o.length; a++) {
          var g = o[a] / f,
            y = Math.floor(g + 0.5);
          y < 1 ? (y = 1) : y > 8 && (y = 8);
          var w = Math.floor(a / 2);
          0 == (1 & a)
            ? ((h[w] = y), (d[w] = g - y))
            : ((l[w] = y), (p[w] = g - y));
        }
        this.adjustOddEvenCounts(n, c);
        var _ = 0,
          v = 0;
        for (a = h.length - 1; a >= 0; a--) (v *= 9), (v += h[a]), (_ += h[a]);
        var m = 0,
          A = 0;
        for (a = l.length - 1; a >= 0; a--) (m *= 9), (m += l[a]), (A += l[a]);
        var E = v + 3 * m;
        if (n) {
          if (0 != (1 & _) || _ > 12 || _ < 4) throw new U();
          var C = (12 - _) / 2,
            I = 9 - (R = e.OUTSIDE_ODD_WIDEST[C]),
            S = ve.getRSSvalue(h, R, !1),
            O = ve.getRSSvalue(l, I, !0),
            T = e.OUTSIDE_EVEN_TOTAL_SUBSET[C],
            b = e.OUTSIDE_GSUM[C];
          return new ye(S * T + O + b, E);
        }
        if (0 != (1 & A) || A > 10 || A < 4) throw new U();
        (C = (10 - A) / 2),
          (I = 9 - (R = e.INSIDE_ODD_WIDEST[C])),
          (S = ve.getRSSvalue(h, R, !0)),
          (O = ve.getRSSvalue(l, I, !1));
        var R,
          N = e.INSIDE_ODD_TOTAL_SUBSET[C];
        b = e.INSIDE_GSUM[C];
        return new ye(O * N + S + b, E);
      }),
      (e.prototype.findFinderPattern = function (t, e) {
        var r = this.getDecodeFinderCounters();
        (r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 0);
        for (
          var n = t.getSize(), o = !1, i = 0;
          i < n && e !== (o = !t.get(i));

        )
          i++;
        for (var a = 0, u = i, s = i; s < n; s++)
          if (t.get(s) !== o) r[a]++;
          else {
            if (3 === a) {
              if (ge.isFinderPattern(r)) return [u, s];
              (u += r[0] + r[1]),
                (r[0] = r[2]),
                (r[1] = r[3]),
                (r[2] = 0),
                (r[3] = 0),
                a--;
            } else a++;
            (r[a] = 1), (o = !o);
          }
        throw new U();
      }),
      (e.prototype.parseFoundFinderPattern = function (t, r, n, o) {
        for (var i = t.get(o[0]), a = o[0] - 1; a >= 0 && i !== t.get(a); ) a--;
        a++;
        var u = o[0] - a,
          s = this.getDecodeFinderCounters(),
          c = new Int32Array(s.length);
        w.arraycopy(s, 0, c, 1, s.length - 1), (c[0] = u);
        var f = this.parseFinderValue(c, e.FINDER_PATTERNS),
          h = a,
          l = o[1];
        return (
          n && ((h = t.getSize() - 1 - h), (l = t.getSize() - 1 - l)),
          new we(f, [a, o[1]], h, l, r)
        );
      }),
      (e.prototype.adjustOddEvenCounts = function (t, e) {
        var r = vt.sum(new Int32Array(this.getOddCounts())),
          n = vt.sum(new Int32Array(this.getEvenCounts())),
          o = !1,
          i = !1,
          a = !1,
          u = !1;
        t
          ? (r > 12 ? (i = !0) : r < 4 && (o = !0),
            n > 12 ? (u = !0) : n < 4 && (a = !0))
          : (r > 11 ? (i = !0) : r < 5 && (o = !0),
            n > 10 ? (u = !0) : n < 4 && (a = !0));
        var s = r + n - e,
          c = (1 & r) == (t ? 1 : 0),
          f = 1 == (1 & n);
        if (1 === s)
          if (c) {
            if (f) throw new U();
            i = !0;
          } else {
            if (!f) throw new U();
            u = !0;
          }
        else if (-1 === s)
          if (c) {
            if (f) throw new U();
            o = !0;
          } else {
            if (!f) throw new U();
            a = !0;
          }
        else {
          if (0 !== s) throw new U();
          if (c) {
            if (!f) throw new U();
            r < n ? ((o = !0), (u = !0)) : ((i = !0), (a = !0));
          } else if (f) throw new U();
        }
        if (o) {
          if (i) throw new U();
          ge.increment(this.getOddCounts(), this.getOddRoundingErrors());
        }
        if (
          (i && ge.decrement(this.getOddCounts(), this.getOddRoundingErrors()),
          a)
        ) {
          if (u) throw new U();
          ge.increment(this.getEvenCounts(), this.getOddRoundingErrors());
        }
        u && ge.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
      }),
      (e.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126]),
      (e.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81]),
      (e.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715]),
      (e.INSIDE_GSUM = [0, 336, 1036, 1516]),
      (e.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1]),
      (e.INSIDE_ODD_WIDEST = [2, 4, 6, 8]),
      (e.FINDER_PATTERNS = [
        Int32Array.from([3, 8, 2, 1]),
        Int32Array.from([3, 5, 5, 1]),
        Int32Array.from([3, 3, 7, 1]),
        Int32Array.from([3, 1, 9, 1]),
        Int32Array.from([2, 7, 4, 1]),
        Int32Array.from([2, 5, 6, 1]),
        Int32Array.from([2, 3, 8, 1]),
        Int32Array.from([1, 5, 7, 1]),
        Int32Array.from([1, 3, 9, 1]),
      ]),
      e
    );
  })(ge),
  cr = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  fr = (function (t) {
    function e(e) {
      var r = t.call(this) || this;
      r.readers = [];
      var n = e ? e.get(T.POSSIBLE_FORMATS) : null,
        o = e && void 0 !== e.get(T.ASSUME_CODE_39_CHECK_DIGIT);
      return (
        n &&
          ((n.includes(nt.EAN_13) ||
            n.includes(nt.UPC_A) ||
            n.includes(nt.EAN_8) ||
            n.includes(nt.UPC_E)) &&
            r.readers.push(new le(e)),
          n.includes(nt.CODE_39) && r.readers.push(new Ut(o)),
          n.includes(nt.CODE_128) && r.readers.push(new kt()),
          n.includes(nt.ITF) && r.readers.push(new Xt()),
          n.includes(nt.RSS_14) && r.readers.push(new sr()),
          n.includes(nt.RSS_EXPANDED) &&
            (console.warn(
              'RSS Expanded reader IS NOT ready for production yet! use at your own risk.'
            ),
            r.readers.push(new nr()))),
        0 === r.readers.length &&
          (r.readers.push(new le(e)),
          r.readers.push(new Ut()),
          r.readers.push(new le(e)),
          r.readers.push(new kt()),
          r.readers.push(new Xt()),
          r.readers.push(new sr())),
        r
      );
    }
    return (
      cr(e, t),
      (e.prototype.decodeRow = function (t, e, r) {
        for (var n = 0; n < this.readers.length; n++)
          try {
            return this.readers[n].decodeRow(t, e, r);
          } catch (t) {}
        throw new U();
      }),
      (e.prototype.reset = function () {
        this.readers.forEach(function (t) {
          return t.reset();
        });
      }),
      e
    );
  })(Lt),
  hr = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })();
!(function (t) {
  function e(e, r) {
    return void 0 === e && (e = 500), t.call(this, new fr(r), e, r) || this;
  }
  hr(e, t);
})(tt);
var lr,
  dr = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  pr = (function () {
    function t(t, e, r) {
      (this.ecCodewords = t), (this.ecBlocks = [e]), r && this.ecBlocks.push(r);
    }
    return (
      (t.prototype.getECCodewords = function () {
        return this.ecCodewords;
      }),
      (t.prototype.getECBlocks = function () {
        return this.ecBlocks;
      }),
      t
    );
  })(),
  gr = (function () {
    function t(t, e) {
      (this.count = t), (this.dataCodewords = e);
    }
    return (
      (t.prototype.getCount = function () {
        return this.count;
      }),
      (t.prototype.getDataCodewords = function () {
        return this.dataCodewords;
      }),
      t
    );
  })(),
  yr = (function () {
    function t(t, e, r, n, o, i) {
      var a, u;
      (this.versionNumber = t),
        (this.symbolSizeRows = e),
        (this.symbolSizeColumns = r),
        (this.dataRegionSizeRows = n),
        (this.dataRegionSizeColumns = o),
        (this.ecBlocks = i);
      var s = 0,
        c = i.getECCodewords(),
        f = i.getECBlocks();
      try {
        for (var h = dr(f), l = h.next(); !l.done; l = h.next()) {
          var d = l.value;
          s += d.getCount() * (d.getDataCodewords() + c);
        }
      } catch (t) {
        a = { error: t };
      } finally {
        try {
          l && !l.done && (u = h.return) && u.call(h);
        } finally {
          if (a) throw a.error;
        }
      }
      this.totalCodewords = s;
    }
    return (
      (t.prototype.getVersionNumber = function () {
        return this.versionNumber;
      }),
      (t.prototype.getSymbolSizeRows = function () {
        return this.symbolSizeRows;
      }),
      (t.prototype.getSymbolSizeColumns = function () {
        return this.symbolSizeColumns;
      }),
      (t.prototype.getDataRegionSizeRows = function () {
        return this.dataRegionSizeRows;
      }),
      (t.prototype.getDataRegionSizeColumns = function () {
        return this.dataRegionSizeColumns;
      }),
      (t.prototype.getTotalCodewords = function () {
        return this.totalCodewords;
      }),
      (t.prototype.getECBlocks = function () {
        return this.ecBlocks;
      }),
      (t.getVersionForDimensions = function (e, r) {
        var n, o;
        if (0 != (1 & e) || 0 != (1 & r)) throw new R();
        try {
          for (var i = dr(t.VERSIONS), a = i.next(); !a.done; a = i.next()) {
            var u = a.value;
            if (u.symbolSizeRows === e && u.symbolSizeColumns === r) return u;
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            a && !a.done && (o = i.return) && o.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
        throw new R();
      }),
      (t.prototype.toString = function () {
        return '' + this.versionNumber;
      }),
      (t.buildVersions = function () {
        return [
          new t(1, 10, 10, 8, 8, new pr(5, new gr(1, 3))),
          new t(2, 12, 12, 10, 10, new pr(7, new gr(1, 5))),
          new t(3, 14, 14, 12, 12, new pr(10, new gr(1, 8))),
          new t(4, 16, 16, 14, 14, new pr(12, new gr(1, 12))),
          new t(5, 18, 18, 16, 16, new pr(14, new gr(1, 18))),
          new t(6, 20, 20, 18, 18, new pr(18, new gr(1, 22))),
          new t(7, 22, 22, 20, 20, new pr(20, new gr(1, 30))),
          new t(8, 24, 24, 22, 22, new pr(24, new gr(1, 36))),
          new t(9, 26, 26, 24, 24, new pr(28, new gr(1, 44))),
          new t(10, 32, 32, 14, 14, new pr(36, new gr(1, 62))),
          new t(11, 36, 36, 16, 16, new pr(42, new gr(1, 86))),
          new t(12, 40, 40, 18, 18, new pr(48, new gr(1, 114))),
          new t(13, 44, 44, 20, 20, new pr(56, new gr(1, 144))),
          new t(14, 48, 48, 22, 22, new pr(68, new gr(1, 174))),
          new t(15, 52, 52, 24, 24, new pr(42, new gr(2, 102))),
          new t(16, 64, 64, 14, 14, new pr(56, new gr(2, 140))),
          new t(17, 72, 72, 16, 16, new pr(36, new gr(4, 92))),
          new t(18, 80, 80, 18, 18, new pr(48, new gr(4, 114))),
          new t(19, 88, 88, 20, 20, new pr(56, new gr(4, 144))),
          new t(20, 96, 96, 22, 22, new pr(68, new gr(4, 174))),
          new t(21, 104, 104, 24, 24, new pr(56, new gr(6, 136))),
          new t(22, 120, 120, 18, 18, new pr(68, new gr(6, 175))),
          new t(23, 132, 132, 20, 20, new pr(62, new gr(8, 163))),
          new t(
            24,
            144,
            144,
            22,
            22,
            new pr(62, new gr(8, 156), new gr(2, 155))
          ),
          new t(25, 8, 18, 6, 16, new pr(7, new gr(1, 5))),
          new t(26, 8, 32, 6, 14, new pr(11, new gr(1, 10))),
          new t(27, 12, 26, 10, 24, new pr(14, new gr(1, 16))),
          new t(28, 12, 36, 10, 16, new pr(18, new gr(1, 22))),
          new t(29, 16, 36, 14, 16, new pr(24, new gr(1, 32))),
          new t(30, 16, 48, 14, 22, new pr(28, new gr(1, 49))),
        ];
      }),
      (t.VERSIONS = t.buildVersions()),
      t
    );
  })(),
  wr = (function () {
    function t(e) {
      var r = e.getHeight();
      if (r < 8 || r > 144 || 0 != (1 & r)) throw new R();
      (this.version = t.readVersion(e)),
        (this.mappingBitMatrix = this.extractDataRegion(e)),
        (this.readMappingMatrix = new x(
          this.mappingBitMatrix.getWidth(),
          this.mappingBitMatrix.getHeight()
        ));
    }
    return (
      (t.prototype.getVersion = function () {
        return this.version;
      }),
      (t.readVersion = function (t) {
        var e = t.getHeight(),
          r = t.getWidth();
        return yr.getVersionForDimensions(e, r);
      }),
      (t.prototype.readCodewords = function () {
        var t = new Int8Array(this.version.getTotalCodewords()),
          e = 0,
          r = 4,
          n = 0,
          o = this.mappingBitMatrix.getHeight(),
          i = this.mappingBitMatrix.getWidth(),
          a = !1,
          u = !1,
          s = !1,
          c = !1;
        do {
          if (r !== o || 0 !== n || a)
            if (r !== o - 2 || 0 !== n || 0 == (3 & i) || u)
              if (r !== o + 4 || 2 !== n || 0 != (7 & i) || s)
                if (r !== o - 2 || 0 !== n || 4 != (7 & i) || c) {
                  do {
                    r < o &&
                      n >= 0 &&
                      !this.readMappingMatrix.get(n, r) &&
                      (t[e++] = 255 & this.readUtah(r, n, o, i)),
                      (r -= 2),
                      (n += 2);
                  } while (r >= 0 && n < i);
                  (r += 1), (n += 3);
                  do {
                    r >= 0 &&
                      n < i &&
                      !this.readMappingMatrix.get(n, r) &&
                      (t[e++] = 255 & this.readUtah(r, n, o, i)),
                      (r += 2),
                      (n -= 2);
                  } while (r < o && n >= 0);
                  (r += 3), (n += 1);
                } else
                  (t[e++] = 255 & this.readCorner4(o, i)),
                    (r -= 2),
                    (n += 2),
                    (c = !0);
              else
                (t[e++] = 255 & this.readCorner3(o, i)),
                  (r -= 2),
                  (n += 2),
                  (s = !0);
            else
              (t[e++] = 255 & this.readCorner2(o, i)),
                (r -= 2),
                (n += 2),
                (u = !0);
          else
            (t[e++] = 255 & this.readCorner1(o, i)),
              (r -= 2),
              (n += 2),
              (a = !0);
        } while (r < o || n < i);
        if (e !== this.version.getTotalCodewords()) throw new R();
        return t;
      }),
      (t.prototype.readModule = function (t, e, r, n) {
        return (
          t < 0 && ((t += r), (e += 4 - ((r + 4) & 7))),
          e < 0 && ((e += n), (t += 4 - ((n + 4) & 7))),
          this.readMappingMatrix.set(e, t),
          this.mappingBitMatrix.get(e, t)
        );
      }),
      (t.prototype.readUtah = function (t, e, r, n) {
        var o = 0;
        return (
          this.readModule(t - 2, e - 2, r, n) && (o |= 1),
          (o <<= 1),
          this.readModule(t - 2, e - 1, r, n) && (o |= 1),
          (o <<= 1),
          this.readModule(t - 1, e - 2, r, n) && (o |= 1),
          (o <<= 1),
          this.readModule(t - 1, e - 1, r, n) && (o |= 1),
          (o <<= 1),
          this.readModule(t - 1, e, r, n) && (o |= 1),
          (o <<= 1),
          this.readModule(t, e - 2, r, n) && (o |= 1),
          (o <<= 1),
          this.readModule(t, e - 1, r, n) && (o |= 1),
          (o <<= 1),
          this.readModule(t, e, r, n) && (o |= 1),
          o
        );
      }),
      (t.prototype.readCorner1 = function (t, e) {
        var r = 0;
        return (
          this.readModule(t - 1, 0, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(t - 1, 1, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(t - 1, 2, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 2, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 1, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(1, e - 1, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(2, e - 1, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(3, e - 1, t, e) && (r |= 1),
          r
        );
      }),
      (t.prototype.readCorner2 = function (t, e) {
        var r = 0;
        return (
          this.readModule(t - 3, 0, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(t - 2, 0, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(t - 1, 0, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 4, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 3, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 2, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 1, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(1, e - 1, t, e) && (r |= 1),
          r
        );
      }),
      (t.prototype.readCorner3 = function (t, e) {
        var r = 0;
        return (
          this.readModule(t - 1, 0, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(t - 1, e - 1, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 3, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 2, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 1, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(1, e - 3, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(1, e - 2, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(1, e - 1, t, e) && (r |= 1),
          r
        );
      }),
      (t.prototype.readCorner4 = function (t, e) {
        var r = 0;
        return (
          this.readModule(t - 3, 0, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(t - 2, 0, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(t - 1, 0, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 2, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(0, e - 1, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(1, e - 1, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(2, e - 1, t, e) && (r |= 1),
          (r <<= 1),
          this.readModule(3, e - 1, t, e) && (r |= 1),
          r
        );
      }),
      (t.prototype.extractDataRegion = function (t) {
        var e = this.version.getSymbolSizeRows(),
          r = this.version.getSymbolSizeColumns();
        if (t.getHeight() !== e)
          throw new l('Dimension of bitMatrix must match the version size');
        for (
          var n = this.version.getDataRegionSizeRows(),
            o = this.version.getDataRegionSizeColumns(),
            i = (e / n) | 0,
            a = (r / o) | 0,
            u = new x(a * o, i * n),
            s = 0;
          s < i;
          ++s
        )
          for (var c = s * n, f = 0; f < a; ++f)
            for (var h = f * o, d = 0; d < n; ++d)
              for (var p = s * (n + 2) + 1 + d, g = c + d, y = 0; y < o; ++y) {
                var w = f * (o + 2) + 1 + y;
                if (t.get(w, p)) {
                  var _ = h + y;
                  u.set(_, g);
                }
              }
        return u;
      }),
      t
    );
  })(),
  _r = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  vr = (function () {
    function t(t, e) {
      (this.numDataCodewords = t), (this.codewords = e);
    }
    return (
      (t.getDataBlocks = function (e, r) {
        var n,
          o,
          i,
          a,
          u = r.getECBlocks(),
          s = 0,
          c = u.getECBlocks();
        try {
          for (var f = _r(c), h = f.next(); !h.done; h = f.next()) {
            s += (w = h.value).getCount();
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            h && !h.done && (o = f.return) && o.call(f);
          } finally {
            if (n) throw n.error;
          }
        }
        var d = new Array(s),
          p = 0;
        try {
          for (var g = _r(c), y = g.next(); !y.done; y = g.next())
            for (var w = y.value, _ = 0; _ < w.getCount(); _++) {
              var v = w.getDataCodewords(),
                m = u.getECCodewords() + v;
              d[p++] = new t(v, new Uint8Array(m));
            }
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            y && !y.done && (a = g.return) && a.call(g);
          } finally {
            if (i) throw i.error;
          }
        }
        var A = d[0].codewords.length - u.getECCodewords(),
          E = A - 1,
          C = 0;
        for (_ = 0; _ < E; _++)
          for (var I = 0; I < p; I++) d[I].codewords[_] = e[C++];
        var S = 24 === r.getVersionNumber(),
          O = S ? 8 : p;
        for (I = 0; I < O; I++) d[I].codewords[A - 1] = e[C++];
        var T = d[0].codewords.length;
        for (_ = A; _ < T; _++)
          for (I = 0; I < p; I++) {
            var b = S ? (I + 8) % p : I,
              R = S && b > 7 ? _ - 1 : _;
            d[b].codewords[R] = e[C++];
          }
        if (C !== e.length) throw new l();
        return d;
      }),
      (t.prototype.getNumDataCodewords = function () {
        return this.numDataCodewords;
      }),
      (t.prototype.getCodewords = function () {
        return this.codewords;
      }),
      t
    );
  })(),
  mr = (function () {
    function t(t) {
      (this.bytes = t), (this.byteOffset = 0), (this.bitOffset = 0);
    }
    return (
      (t.prototype.getBitOffset = function () {
        return this.bitOffset;
      }),
      (t.prototype.getByteOffset = function () {
        return this.byteOffset;
      }),
      (t.prototype.readBits = function (t) {
        if (t < 1 || t > 32 || t > this.available()) throw new l('' + t);
        var e = 0,
          r = this.bitOffset,
          n = this.byteOffset,
          o = this.bytes;
        if (r > 0) {
          var i = 8 - r,
            a = t < i ? t : i,
            u = (255 >> (8 - a)) << (s = i - a);
          (e = (o[n] & u) >> s), (t -= a), 8 === (r += a) && ((r = 0), n++);
        }
        if (t > 0) {
          for (; t >= 8; ) (e = (e << 8) | (255 & o[n])), n++, (t -= 8);
          if (t > 0) {
            var s;
            u = (255 >> (s = 8 - t)) << s;
            (e = (e << t) | ((o[n] & u) >> s)), (r += t);
          }
        }
        return (this.bitOffset = r), (this.byteOffset = n), e;
      }),
      (t.prototype.available = function () {
        return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
      }),
      t
    );
  })();
!(function (t) {
  (t[(t.PAD_ENCODE = 0)] = 'PAD_ENCODE'),
    (t[(t.ASCII_ENCODE = 1)] = 'ASCII_ENCODE'),
    (t[(t.C40_ENCODE = 2)] = 'C40_ENCODE'),
    (t[(t.TEXT_ENCODE = 3)] = 'TEXT_ENCODE'),
    (t[(t.ANSIX12_ENCODE = 4)] = 'ANSIX12_ENCODE'),
    (t[(t.EDIFACT_ENCODE = 5)] = 'EDIFACT_ENCODE'),
    (t[(t.BASE256_ENCODE = 6)] = 'BASE256_ENCODE');
})(lr || (lr = {}));
var Ar,
  Er = (function () {
    function t() {}
    return (
      (t.decode = function (t) {
        var e = new mr(t),
          r = new k(),
          n = new k(),
          o = new Array(),
          i = lr.ASCII_ENCODE;
        do {
          if (i === lr.ASCII_ENCODE) i = this.decodeAsciiSegment(e, r, n);
          else {
            switch (i) {
              case lr.C40_ENCODE:
                this.decodeC40Segment(e, r);
                break;
              case lr.TEXT_ENCODE:
                this.decodeTextSegment(e, r);
                break;
              case lr.ANSIX12_ENCODE:
                this.decodeAnsiX12Segment(e, r);
                break;
              case lr.EDIFACT_ENCODE:
                this.decodeEdifactSegment(e, r);
                break;
              case lr.BASE256_ENCODE:
                this.decodeBase256Segment(e, r, o);
                break;
              default:
                throw new R();
            }
            i = lr.ASCII_ENCODE;
          }
        } while (i !== lr.PAD_ENCODE && e.available() > 0);
        return (
          n.length() > 0 && r.append(n.toString()),
          new at(t, r.toString(), 0 === o.length ? null : o, null)
        );
      }),
      (t.decodeAsciiSegment = function (t, e, r) {
        var n = !1;
        do {
          var o = t.readBits(8);
          if (0 === o) throw new R();
          if (o <= 128)
            return (
              n && (o += 128),
              e.append(String.fromCharCode(o - 1)),
              lr.ASCII_ENCODE
            );
          if (129 === o) return lr.PAD_ENCODE;
          if (o <= 229) {
            var i = o - 130;
            i < 10 && e.append('0'), e.append('' + i);
          } else
            switch (o) {
              case 230:
                return lr.C40_ENCODE;
              case 231:
                return lr.BASE256_ENCODE;
              case 232:
                e.append(String.fromCharCode(29));
                break;
              case 233:
              case 234:
              case 241:
                break;
              case 235:
                n = !0;
                break;
              case 236:
                e.append('[)>05'), r.insert(0, '');
                break;
              case 237:
                e.append('[)>06'), r.insert(0, '');
                break;
              case 238:
                return lr.ANSIX12_ENCODE;
              case 239:
                return lr.TEXT_ENCODE;
              case 240:
                return lr.EDIFACT_ENCODE;
              default:
                if (254 !== o || 0 !== t.available()) throw new R();
            }
        } while (t.available() > 0);
        return lr.ASCII_ENCODE;
      }),
      (t.decodeC40Segment = function (t, e) {
        var r = !1,
          n = [],
          o = 0;
        do {
          if (8 === t.available()) return;
          var i = t.readBits(8);
          if (254 === i) return;
          this.parseTwoBytes(i, t.readBits(8), n);
          for (var a = 0; a < 3; a++) {
            var u = n[a];
            switch (o) {
              case 0:
                if (u < 3) o = u + 1;
                else {
                  if (!(u < this.C40_BASIC_SET_CHARS.length)) throw new R();
                  var s = this.C40_BASIC_SET_CHARS[u];
                  r
                    ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)),
                      (r = !1))
                    : e.append(s);
                }
                break;
              case 1:
                r
                  ? (e.append(String.fromCharCode(u + 128)), (r = !1))
                  : e.append(String.fromCharCode(u)),
                  (o = 0);
                break;
              case 2:
                if (u < this.C40_SHIFT2_SET_CHARS.length) {
                  s = this.C40_SHIFT2_SET_CHARS[u];
                  r
                    ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)),
                      (r = !1))
                    : e.append(s);
                } else
                  switch (u) {
                    case 27:
                      e.append(String.fromCharCode(29));
                      break;
                    case 30:
                      r = !0;
                      break;
                    default:
                      throw new R();
                  }
                o = 0;
                break;
              case 3:
                r
                  ? (e.append(String.fromCharCode(u + 224)), (r = !1))
                  : e.append(String.fromCharCode(u + 96)),
                  (o = 0);
                break;
              default:
                throw new R();
            }
          }
        } while (t.available() > 0);
      }),
      (t.decodeTextSegment = function (t, e) {
        var r = !1,
          n = [],
          o = 0;
        do {
          if (8 === t.available()) return;
          var i = t.readBits(8);
          if (254 === i) return;
          this.parseTwoBytes(i, t.readBits(8), n);
          for (var a = 0; a < 3; a++) {
            var u = n[a];
            switch (o) {
              case 0:
                if (u < 3) o = u + 1;
                else {
                  if (!(u < this.TEXT_BASIC_SET_CHARS.length)) throw new R();
                  var s = this.TEXT_BASIC_SET_CHARS[u];
                  r
                    ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)),
                      (r = !1))
                    : e.append(s);
                }
                break;
              case 1:
                r
                  ? (e.append(String.fromCharCode(u + 128)), (r = !1))
                  : e.append(String.fromCharCode(u)),
                  (o = 0);
                break;
              case 2:
                if (u < this.TEXT_SHIFT2_SET_CHARS.length) {
                  s = this.TEXT_SHIFT2_SET_CHARS[u];
                  r
                    ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)),
                      (r = !1))
                    : e.append(s);
                } else
                  switch (u) {
                    case 27:
                      e.append(String.fromCharCode(29));
                      break;
                    case 30:
                      r = !0;
                      break;
                    default:
                      throw new R();
                  }
                o = 0;
                break;
              case 3:
                if (!(u < this.TEXT_SHIFT3_SET_CHARS.length)) throw new R();
                s = this.TEXT_SHIFT3_SET_CHARS[u];
                r
                  ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)),
                    (r = !1))
                  : e.append(s),
                  (o = 0);
                break;
              default:
                throw new R();
            }
          }
        } while (t.available() > 0);
      }),
      (t.decodeAnsiX12Segment = function (t, e) {
        var r = [];
        do {
          if (8 === t.available()) return;
          var n = t.readBits(8);
          if (254 === n) return;
          this.parseTwoBytes(n, t.readBits(8), r);
          for (var o = 0; o < 3; o++) {
            var i = r[o];
            switch (i) {
              case 0:
                e.append('\r');
                break;
              case 1:
                e.append('*');
                break;
              case 2:
                e.append('>');
                break;
              case 3:
                e.append(' ');
                break;
              default:
                if (i < 14) e.append(String.fromCharCode(i + 44));
                else {
                  if (!(i < 40)) throw new R();
                  e.append(String.fromCharCode(i + 51));
                }
            }
          }
        } while (t.available() > 0);
      }),
      (t.parseTwoBytes = function (t, e, r) {
        var n = (t << 8) + e - 1,
          o = Math.floor(n / 1600);
        (r[0] = o),
          (n -= 1600 * o),
          (o = Math.floor(n / 40)),
          (r[1] = o),
          (r[2] = n - 40 * o);
      }),
      (t.decodeEdifactSegment = function (t, e) {
        do {
          if (t.available() <= 16) return;
          for (var r = 0; r < 4; r++) {
            var n = t.readBits(6);
            if (31 === n) {
              var o = 8 - t.getBitOffset();
              return void (8 !== o && t.readBits(o));
            }
            0 == (32 & n) && (n |= 64), e.append(String.fromCharCode(n));
          }
        } while (t.available() > 0);
      }),
      (t.decodeBase256Segment = function (t, e, r) {
        var n,
          o = 1 + t.getByteOffset(),
          i = this.unrandomize255State(t.readBits(8), o++);
        if (
          (n =
            0 === i
              ? (t.available() / 8) | 0
              : i < 250
              ? i
              : 250 * (i - 249) +
                this.unrandomize255State(t.readBits(8), o++)) < 0
        )
          throw new R();
        for (var a = new Uint8Array(n), u = 0; u < n; u++) {
          if (t.available() < 8) throw new R();
          a[u] = this.unrandomize255State(t.readBits(8), o++);
        }
        r.push(a);
        try {
          e.append(L.decode(a, F.ISO88591));
        } catch (t) {
          throw new yt(
            'Platform does not support required encoding: ' + t.message
          );
        }
      }),
      (t.unrandomize255State = function (t, e) {
        var r = t - (((149 * e) % 255) + 1);
        return r >= 0 ? r : r + 256;
      }),
      (t.C40_BASIC_SET_CHARS = [
        '*',
        '*',
        '*',
        ' ',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ]),
      (t.C40_SHIFT2_SET_CHARS = [
        '!',
        '"',
        '#',
        '$',
        '%',
        '&',
        "'",
        '(',
        ')',
        '*',
        '+',
        ',',
        '-',
        '.',
        '/',
        ':',
        ';',
        '<',
        '=',
        '>',
        '?',
        '@',
        '[',
        '\\',
        ']',
        '^',
        '_',
      ]),
      (t.TEXT_BASIC_SET_CHARS = [
        '*',
        '*',
        '*',
        ' ',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ]),
      (t.TEXT_SHIFT2_SET_CHARS = t.C40_SHIFT2_SET_CHARS),
      (t.TEXT_SHIFT3_SET_CHARS = [
        '`',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        '{',
        '|',
        '}',
        '~',
        String.fromCharCode(127),
      ]),
      t
    );
  })(),
  Cr = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Ir = (function () {
    function t() {
      this.rsDecoder = new wt(lt.DATA_MATRIX_FIELD_256);
    }
    return (
      (t.prototype.decode = function (t) {
        var e,
          r,
          n = new wr(t),
          o = n.getVersion(),
          i = n.readCodewords(),
          a = vr.getDataBlocks(i, o),
          u = 0;
        try {
          for (var s = Cr(a), c = s.next(); !c.done; c = s.next()) {
            u += c.value.getNumDataCodewords();
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            c && !c.done && (r = s.return) && r.call(s);
          } finally {
            if (e) throw e.error;
          }
        }
        for (var f = new Uint8Array(u), h = a.length, l = 0; l < h; l++) {
          var d = a[l],
            p = d.getCodewords(),
            g = d.getNumDataCodewords();
          this.correctErrors(p, g);
          for (var y = 0; y < g; y++) f[y * h + l] = p[y];
        }
        return Er.decode(f);
      }),
      (t.prototype.correctErrors = function (t, e) {
        var r = new Int32Array(t);
        try {
          this.rsDecoder.decode(r, t.length - e);
        } catch (t) {
          throw new g();
        }
        for (var n = 0; n < e; n++) t[n] = r[n];
      }),
      t
    );
  })(),
  Sr = (function () {
    function t(t) {
      (this.image = t), (this.rectangleDetector = new St(this.image));
    }
    return (
      (t.prototype.detect = function () {
        var e = this.rectangleDetector.detect(),
          r = this.detectSolid1(e);
        if ((((r = this.detectSolid2(r))[3] = this.correctTopRight(r)), !r[3]))
          throw new U();
        var n = (r = this.shiftToModuleCenter(r))[0],
          o = r[1],
          i = r[2],
          a = r[3],
          u = this.transitionsBetween(n, a) + 1,
          s = this.transitionsBetween(i, a) + 1;
        1 == (1 & u) && (u += 1),
          1 == (1 & s) && (s += 1),
          4 * u < 7 * s && 4 * s < 7 * u && (u = s = Math.max(u, s));
        var c = t.sampleGrid(this.image, n, o, i, a, u, s);
        return new Et(c, [n, o, i, a]);
      }),
      (t.shiftPoint = function (t, e, r) {
        var n = (e.getX() - t.getX()) / (r + 1),
          o = (e.getY() - t.getY()) / (r + 1);
        return new At(t.getX() + n, t.getY() + o);
      }),
      (t.moveAway = function (t, e, r) {
        var n = t.getX(),
          o = t.getY();
        return (
          n < e ? (n -= 1) : (n += 1), o < r ? (o -= 1) : (o += 1), new At(n, o)
        );
      }),
      (t.prototype.detectSolid1 = function (t) {
        var e = t[0],
          r = t[1],
          n = t[3],
          o = t[2],
          i = this.transitionsBetween(e, r),
          a = this.transitionsBetween(r, n),
          u = this.transitionsBetween(n, o),
          s = this.transitionsBetween(o, e),
          c = i,
          f = [o, e, r, n];
        return (
          c > a && ((c = a), (f[0] = e), (f[1] = r), (f[2] = n), (f[3] = o)),
          c > u && ((c = u), (f[0] = r), (f[1] = n), (f[2] = o), (f[3] = e)),
          c > s && ((f[0] = n), (f[1] = o), (f[2] = e), (f[3] = r)),
          f
        );
      }),
      (t.prototype.detectSolid2 = function (e) {
        var r = e[0],
          n = e[1],
          o = e[2],
          i = e[3],
          a = this.transitionsBetween(r, i),
          u = t.shiftPoint(n, o, 4 * (a + 1)),
          s = t.shiftPoint(o, n, 4 * (a + 1));
        return (
          this.transitionsBetween(u, r) < this.transitionsBetween(s, i)
            ? ((e[0] = r), (e[1] = n), (e[2] = o), (e[3] = i))
            : ((e[0] = n), (e[1] = o), (e[2] = i), (e[3] = r)),
          e
        );
      }),
      (t.prototype.correctTopRight = function (e) {
        var r = e[0],
          n = e[1],
          o = e[2],
          i = e[3],
          a = this.transitionsBetween(r, i),
          u = this.transitionsBetween(n, i),
          s = t.shiftPoint(r, n, 4 * (u + 1)),
          c = t.shiftPoint(o, n, 4 * (a + 1));
        (a = this.transitionsBetween(s, i)),
          (u = this.transitionsBetween(c, i));
        var f = new At(
            i.getX() + (o.getX() - n.getX()) / (a + 1),
            i.getY() + (o.getY() - n.getY()) / (a + 1)
          ),
          h = new At(
            i.getX() + (r.getX() - n.getX()) / (u + 1),
            i.getY() + (r.getY() - n.getY()) / (u + 1)
          );
        return this.isValid(f)
          ? this.isValid(h)
            ? this.transitionsBetween(s, f) + this.transitionsBetween(c, f) >
              this.transitionsBetween(s, h) + this.transitionsBetween(c, h)
              ? f
              : h
            : f
          : this.isValid(h)
          ? h
          : null;
      }),
      (t.prototype.shiftToModuleCenter = function (e) {
        var r = e[0],
          n = e[1],
          o = e[2],
          i = e[3],
          a = this.transitionsBetween(r, i) + 1,
          u = this.transitionsBetween(o, i) + 1,
          s = t.shiftPoint(r, n, 4 * u),
          c = t.shiftPoint(o, n, 4 * a);
        1 == (1 & (a = this.transitionsBetween(s, i) + 1)) && (a += 1),
          1 == (1 & (u = this.transitionsBetween(c, i) + 1)) && (u += 1);
        var f,
          h,
          l = (r.getX() + n.getX() + o.getX() + i.getX()) / 4,
          d = (r.getY() + n.getY() + o.getY() + i.getY()) / 4;
        return (
          (r = t.moveAway(r, l, d)),
          (n = t.moveAway(n, l, d)),
          (o = t.moveAway(o, l, d)),
          (i = t.moveAway(i, l, d)),
          (s = t.shiftPoint(r, n, 4 * u)),
          (s = t.shiftPoint(s, i, 4 * a)),
          (f = t.shiftPoint(n, r, 4 * u)),
          (f = t.shiftPoint(f, o, 4 * a)),
          (c = t.shiftPoint(o, i, 4 * u)),
          (c = t.shiftPoint(c, n, 4 * a)),
          (h = t.shiftPoint(i, o, 4 * u)),
          [s, f, c, (h = t.shiftPoint(h, r, 4 * a))]
        );
      }),
      (t.prototype.isValid = function (t) {
        return (
          t.getX() >= 0 &&
          t.getX() < this.image.getWidth() &&
          t.getY() > 0 &&
          t.getY() < this.image.getHeight()
        );
      }),
      (t.sampleGrid = function (t, e, r, n, o, i, a) {
        return Nt.getInstance().sampleGrid(
          t,
          i,
          a,
          0.5,
          0.5,
          i - 0.5,
          0.5,
          i - 0.5,
          a - 0.5,
          0.5,
          a - 0.5,
          e.getX(),
          e.getY(),
          o.getX(),
          o.getY(),
          n.getX(),
          n.getY(),
          r.getX(),
          r.getY()
        );
      }),
      (t.prototype.transitionsBetween = function (t, e) {
        var r = Math.trunc(t.getX()),
          n = Math.trunc(t.getY()),
          o = Math.trunc(e.getX()),
          i = Math.trunc(e.getY()),
          a = Math.abs(i - n) > Math.abs(o - r);
        if (a) {
          var u = r;
          (r = n), (n = u), (u = o), (o = i), (i = u);
        }
        for (
          var s = Math.abs(o - r),
            c = Math.abs(i - n),
            f = -s / 2,
            h = n < i ? 1 : -1,
            l = r < o ? 1 : -1,
            d = 0,
            p = this.image.get(a ? n : r, a ? r : n),
            g = r,
            y = n;
          g !== o;
          g += l
        ) {
          var w = this.image.get(a ? y : g, a ? g : y);
          if ((w !== p && (d++, (p = w)), (f += c) > 0)) {
            if (y === i) break;
            (y += h), (f -= s);
          }
        }
        return d;
      }),
      t
    );
  })(),
  Or = (function () {
    function t() {
      this.decoder = new Ir();
    }
    return (
      (t.prototype.decode = function (e, r) {
        var n, o;
        if ((void 0 === r && (r = null), null != r && r.has(T.PURE_BARCODE))) {
          var i = t.extractPureBits(e.getBlackMatrix());
          (n = this.decoder.decode(i)), (o = t.NO_POINTS);
        } else {
          var a = new Sr(e.getBlackMatrix()).detect();
          (n = this.decoder.decode(a.getBits())), (o = a.getPoints());
        }
        var u = n.getRawBytes(),
          s = new et(
            n.getText(),
            u,
            8 * u.length,
            o,
            nt.DATA_MATRIX,
            w.currentTimeMillis()
          ),
          c = n.getByteSegments();
        null != c && s.putMetadata(it.BYTE_SEGMENTS, c);
        var f = n.getECLevel();
        return null != f && s.putMetadata(it.ERROR_CORRECTION_LEVEL, f), s;
      }),
      (t.prototype.reset = function () {}),
      (t.extractPureBits = function (t) {
        var e = t.getTopLeftOnBit(),
          r = t.getBottomRightOnBit();
        if (null == e || null == r) throw new U();
        var n = this.moduleSize(e, t),
          o = e[1],
          i = r[1],
          a = e[0],
          u = (r[0] - a + 1) / n,
          s = (i - o + 1) / n;
        if (u <= 0 || s <= 0) throw new U();
        var c = n / 2;
        (o += c), (a += c);
        for (var f = new x(u, s), h = 0; h < s; h++)
          for (var l = o + h * n, d = 0; d < u; d++)
            t.get(a + d * n, l) && f.set(d, h);
        return f;
      }),
      (t.moduleSize = function (t, e) {
        for (var r = e.getWidth(), n = t[0], o = t[1]; n < r && e.get(n, o); )
          n++;
        if (n === r) throw new U();
        var i = n - t[0];
        if (0 === i) throw new U();
        return i;
      }),
      (t.NO_POINTS = []),
      t
    );
  })(),
  Tr = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })();
!(function (t) {
  function e(e) {
    return void 0 === e && (e = 500), t.call(this, new Or(), e) || this;
  }
  Tr(e, t);
})(tt),
  (function (t) {
    (t[(t.L = 0)] = 'L'),
      (t[(t.M = 1)] = 'M'),
      (t[(t.Q = 2)] = 'Q'),
      (t[(t.H = 3)] = 'H');
  })(Ar || (Ar = {}));
var br,
  Rr = (function () {
    function t(e, r, n) {
      (this.value = e),
        (this.stringValue = r),
        (this.bits = n),
        t.FOR_BITS.set(n, this),
        t.FOR_VALUE.set(e, this);
    }
    return (
      (t.prototype.getValue = function () {
        return this.value;
      }),
      (t.prototype.getBits = function () {
        return this.bits;
      }),
      (t.fromString = function (e) {
        switch (e) {
          case 'L':
            return t.L;
          case 'M':
            return t.M;
          case 'Q':
            return t.Q;
          case 'H':
            return t.H;
          default:
            throw new f(e + 'not available');
        }
      }),
      (t.prototype.toString = function () {
        return this.stringValue;
      }),
      (t.prototype.equals = function (e) {
        if (!(e instanceof t)) return !1;
        var r = e;
        return this.value === r.value;
      }),
      (t.forBits = function (e) {
        if (e < 0 || e >= t.FOR_BITS.size) throw new l();
        return t.FOR_BITS.get(e);
      }),
      (t.FOR_BITS = new Map()),
      (t.FOR_VALUE = new Map()),
      (t.L = new t(Ar.L, 'L', 1)),
      (t.M = new t(Ar.M, 'M', 0)),
      (t.Q = new t(Ar.Q, 'Q', 3)),
      (t.H = new t(Ar.H, 'H', 2)),
      t
    );
  })(),
  Nr = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Dr = (function () {
    function t(t) {
      (this.errorCorrectionLevel = Rr.forBits((t >> 3) & 3)),
        (this.dataMask = 7 & t);
    }
    return (
      (t.numBitsDiffering = function (t, e) {
        return I.bitCount(t ^ e);
      }),
      (t.decodeFormatInformation = function (e, r) {
        var n = t.doDecodeFormatInformation(e, r);
        return null !== n
          ? n
          : t.doDecodeFormatInformation(
              e ^ t.FORMAT_INFO_MASK_QR,
              r ^ t.FORMAT_INFO_MASK_QR
            );
      }),
      (t.doDecodeFormatInformation = function (e, r) {
        var n,
          o,
          i = Number.MAX_SAFE_INTEGER,
          a = 0;
        try {
          for (
            var u = Nr(t.FORMAT_INFO_DECODE_LOOKUP), s = u.next();
            !s.done;
            s = u.next()
          ) {
            var c = s.value,
              f = c[0];
            if (f === e || f === r) return new t(c[1]);
            var h = t.numBitsDiffering(e, f);
            h < i && ((a = c[1]), (i = h)),
              e !== r &&
                (h = t.numBitsDiffering(r, f)) < i &&
                ((a = c[1]), (i = h));
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            s && !s.done && (o = u.return) && o.call(u);
          } finally {
            if (n) throw n.error;
          }
        }
        return i <= 3 ? new t(a) : null;
      }),
      (t.prototype.getErrorCorrectionLevel = function () {
        return this.errorCorrectionLevel;
      }),
      (t.prototype.getDataMask = function () {
        return this.dataMask;
      }),
      (t.prototype.hashCode = function () {
        return (this.errorCorrectionLevel.getBits() << 3) | this.dataMask;
      }),
      (t.prototype.equals = function (e) {
        if (!(e instanceof t)) return !1;
        var r = e;
        return (
          this.errorCorrectionLevel === r.errorCorrectionLevel &&
          this.dataMask === r.dataMask
        );
      }),
      (t.FORMAT_INFO_MASK_QR = 21522),
      (t.FORMAT_INFO_DECODE_LOOKUP = [
        Int32Array.from([21522, 0]),
        Int32Array.from([20773, 1]),
        Int32Array.from([24188, 2]),
        Int32Array.from([23371, 3]),
        Int32Array.from([17913, 4]),
        Int32Array.from([16590, 5]),
        Int32Array.from([20375, 6]),
        Int32Array.from([19104, 7]),
        Int32Array.from([30660, 8]),
        Int32Array.from([29427, 9]),
        Int32Array.from([32170, 10]),
        Int32Array.from([30877, 11]),
        Int32Array.from([26159, 12]),
        Int32Array.from([25368, 13]),
        Int32Array.from([27713, 14]),
        Int32Array.from([26998, 15]),
        Int32Array.from([5769, 16]),
        Int32Array.from([5054, 17]),
        Int32Array.from([7399, 18]),
        Int32Array.from([6608, 19]),
        Int32Array.from([1890, 20]),
        Int32Array.from([597, 21]),
        Int32Array.from([3340, 22]),
        Int32Array.from([2107, 23]),
        Int32Array.from([13663, 24]),
        Int32Array.from([12392, 25]),
        Int32Array.from([16177, 26]),
        Int32Array.from([14854, 27]),
        Int32Array.from([9396, 28]),
        Int32Array.from([8579, 29]),
        Int32Array.from([11994, 30]),
        Int32Array.from([11245, 31]),
      ]),
      t
    );
  })(),
  Pr = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Mr = (function () {
    function t(t) {
      for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
      (this.ecCodewordsPerBlock = t), (this.ecBlocks = e);
    }
    return (
      (t.prototype.getECCodewordsPerBlock = function () {
        return this.ecCodewordsPerBlock;
      }),
      (t.prototype.getNumBlocks = function () {
        var t,
          e,
          r = 0,
          n = this.ecBlocks;
        try {
          for (var o = Pr(n), i = o.next(); !i.done; i = o.next()) {
            r += i.value.getCount();
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (e = o.return) && e.call(o);
          } finally {
            if (t) throw t.error;
          }
        }
        return r;
      }),
      (t.prototype.getTotalECCodewords = function () {
        return this.ecCodewordsPerBlock * this.getNumBlocks();
      }),
      (t.prototype.getECBlocks = function () {
        return this.ecBlocks;
      }),
      t
    );
  })(),
  Br = (function () {
    function t(t, e) {
      (this.count = t), (this.dataCodewords = e);
    }
    return (
      (t.prototype.getCount = function () {
        return this.count;
      }),
      (t.prototype.getDataCodewords = function () {
        return this.dataCodewords;
      }),
      t
    );
  })(),
  Lr = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Fr = (function () {
    function t(t, e) {
      for (var r, n, o = [], i = 2; i < arguments.length; i++)
        o[i - 2] = arguments[i];
      (this.versionNumber = t),
        (this.alignmentPatternCenters = e),
        (this.ecBlocks = o);
      var a = 0,
        u = o[0].getECCodewordsPerBlock(),
        s = o[0].getECBlocks();
      try {
        for (var c = Lr(s), f = c.next(); !f.done; f = c.next()) {
          var h = f.value;
          a += h.getCount() * (h.getDataCodewords() + u);
        }
      } catch (t) {
        r = { error: t };
      } finally {
        try {
          f && !f.done && (n = c.return) && n.call(c);
        } finally {
          if (r) throw r.error;
        }
      }
      this.totalCodewords = a;
    }
    return (
      (t.prototype.getVersionNumber = function () {
        return this.versionNumber;
      }),
      (t.prototype.getAlignmentPatternCenters = function () {
        return this.alignmentPatternCenters;
      }),
      (t.prototype.getTotalCodewords = function () {
        return this.totalCodewords;
      }),
      (t.prototype.getDimensionForVersion = function () {
        return 17 + 4 * this.versionNumber;
      }),
      (t.prototype.getECBlocksForLevel = function (t) {
        return this.ecBlocks[t.getValue()];
      }),
      (t.getProvisionalVersionForDimension = function (t) {
        if (t % 4 != 1) throw new R();
        try {
          return this.getVersionForNumber((t - 17) / 4);
        } catch (t) {
          throw new R();
        }
      }),
      (t.getVersionForNumber = function (e) {
        if (e < 1 || e > 40) throw new l();
        return t.VERSIONS[e - 1];
      }),
      (t.decodeVersionInformation = function (e) {
        for (
          var r = Number.MAX_SAFE_INTEGER, n = 0, o = 0;
          o < t.VERSION_DECODE_INFO.length;
          o++
        ) {
          var i = t.VERSION_DECODE_INFO[o];
          if (i === e) return t.getVersionForNumber(o + 7);
          var a = Dr.numBitsDiffering(e, i);
          a < r && ((n = o + 7), (r = a));
        }
        return r <= 3 ? t.getVersionForNumber(n) : null;
      }),
      (t.prototype.buildFunctionPattern = function () {
        var t = this.getDimensionForVersion(),
          e = new x(t);
        e.setRegion(0, 0, 9, 9),
          e.setRegion(t - 8, 0, 8, 9),
          e.setRegion(0, t - 8, 9, 8);
        for (var r = this.alignmentPatternCenters.length, n = 0; n < r; n++)
          for (var o = this.alignmentPatternCenters[n] - 2, i = 0; i < r; i++)
            (0 === n && (0 === i || i === r - 1)) ||
              (n === r - 1 && 0 === i) ||
              e.setRegion(this.alignmentPatternCenters[i] - 2, o, 5, 5);
        return (
          e.setRegion(6, 9, 1, t - 17),
          e.setRegion(9, 6, t - 17, 1),
          this.versionNumber > 6 &&
            (e.setRegion(t - 11, 0, 3, 6), e.setRegion(0, t - 11, 6, 3)),
          e
        );
      }),
      (t.prototype.toString = function () {
        return '' + this.versionNumber;
      }),
      (t.VERSION_DECODE_INFO = Int32Array.from([
        31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472,
        70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507,
        110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311,
        150283, 152622, 158308, 161089, 167017,
      ])),
      (t.VERSIONS = [
        new t(
          1,
          new Int32Array(0),
          new Mr(7, new Br(1, 19)),
          new Mr(10, new Br(1, 16)),
          new Mr(13, new Br(1, 13)),
          new Mr(17, new Br(1, 9))
        ),
        new t(
          2,
          Int32Array.from([6, 18]),
          new Mr(10, new Br(1, 34)),
          new Mr(16, new Br(1, 28)),
          new Mr(22, new Br(1, 22)),
          new Mr(28, new Br(1, 16))
        ),
        new t(
          3,
          Int32Array.from([6, 22]),
          new Mr(15, new Br(1, 55)),
          new Mr(26, new Br(1, 44)),
          new Mr(18, new Br(2, 17)),
          new Mr(22, new Br(2, 13))
        ),
        new t(
          4,
          Int32Array.from([6, 26]),
          new Mr(20, new Br(1, 80)),
          new Mr(18, new Br(2, 32)),
          new Mr(26, new Br(2, 24)),
          new Mr(16, new Br(4, 9))
        ),
        new t(
          5,
          Int32Array.from([6, 30]),
          new Mr(26, new Br(1, 108)),
          new Mr(24, new Br(2, 43)),
          new Mr(18, new Br(2, 15), new Br(2, 16)),
          new Mr(22, new Br(2, 11), new Br(2, 12))
        ),
        new t(
          6,
          Int32Array.from([6, 34]),
          new Mr(18, new Br(2, 68)),
          new Mr(16, new Br(4, 27)),
          new Mr(24, new Br(4, 19)),
          new Mr(28, new Br(4, 15))
        ),
        new t(
          7,
          Int32Array.from([6, 22, 38]),
          new Mr(20, new Br(2, 78)),
          new Mr(18, new Br(4, 31)),
          new Mr(18, new Br(2, 14), new Br(4, 15)),
          new Mr(26, new Br(4, 13), new Br(1, 14))
        ),
        new t(
          8,
          Int32Array.from([6, 24, 42]),
          new Mr(24, new Br(2, 97)),
          new Mr(22, new Br(2, 38), new Br(2, 39)),
          new Mr(22, new Br(4, 18), new Br(2, 19)),
          new Mr(26, new Br(4, 14), new Br(2, 15))
        ),
        new t(
          9,
          Int32Array.from([6, 26, 46]),
          new Mr(30, new Br(2, 116)),
          new Mr(22, new Br(3, 36), new Br(2, 37)),
          new Mr(20, new Br(4, 16), new Br(4, 17)),
          new Mr(24, new Br(4, 12), new Br(4, 13))
        ),
        new t(
          10,
          Int32Array.from([6, 28, 50]),
          new Mr(18, new Br(2, 68), new Br(2, 69)),
          new Mr(26, new Br(4, 43), new Br(1, 44)),
          new Mr(24, new Br(6, 19), new Br(2, 20)),
          new Mr(28, new Br(6, 15), new Br(2, 16))
        ),
        new t(
          11,
          Int32Array.from([6, 30, 54]),
          new Mr(20, new Br(4, 81)),
          new Mr(30, new Br(1, 50), new Br(4, 51)),
          new Mr(28, new Br(4, 22), new Br(4, 23)),
          new Mr(24, new Br(3, 12), new Br(8, 13))
        ),
        new t(
          12,
          Int32Array.from([6, 32, 58]),
          new Mr(24, new Br(2, 92), new Br(2, 93)),
          new Mr(22, new Br(6, 36), new Br(2, 37)),
          new Mr(26, new Br(4, 20), new Br(6, 21)),
          new Mr(28, new Br(7, 14), new Br(4, 15))
        ),
        new t(
          13,
          Int32Array.from([6, 34, 62]),
          new Mr(26, new Br(4, 107)),
          new Mr(22, new Br(8, 37), new Br(1, 38)),
          new Mr(24, new Br(8, 20), new Br(4, 21)),
          new Mr(22, new Br(12, 11), new Br(4, 12))
        ),
        new t(
          14,
          Int32Array.from([6, 26, 46, 66]),
          new Mr(30, new Br(3, 115), new Br(1, 116)),
          new Mr(24, new Br(4, 40), new Br(5, 41)),
          new Mr(20, new Br(11, 16), new Br(5, 17)),
          new Mr(24, new Br(11, 12), new Br(5, 13))
        ),
        new t(
          15,
          Int32Array.from([6, 26, 48, 70]),
          new Mr(22, new Br(5, 87), new Br(1, 88)),
          new Mr(24, new Br(5, 41), new Br(5, 42)),
          new Mr(30, new Br(5, 24), new Br(7, 25)),
          new Mr(24, new Br(11, 12), new Br(7, 13))
        ),
        new t(
          16,
          Int32Array.from([6, 26, 50, 74]),
          new Mr(24, new Br(5, 98), new Br(1, 99)),
          new Mr(28, new Br(7, 45), new Br(3, 46)),
          new Mr(24, new Br(15, 19), new Br(2, 20)),
          new Mr(30, new Br(3, 15), new Br(13, 16))
        ),
        new t(
          17,
          Int32Array.from([6, 30, 54, 78]),
          new Mr(28, new Br(1, 107), new Br(5, 108)),
          new Mr(28, new Br(10, 46), new Br(1, 47)),
          new Mr(28, new Br(1, 22), new Br(15, 23)),
          new Mr(28, new Br(2, 14), new Br(17, 15))
        ),
        new t(
          18,
          Int32Array.from([6, 30, 56, 82]),
          new Mr(30, new Br(5, 120), new Br(1, 121)),
          new Mr(26, new Br(9, 43), new Br(4, 44)),
          new Mr(28, new Br(17, 22), new Br(1, 23)),
          new Mr(28, new Br(2, 14), new Br(19, 15))
        ),
        new t(
          19,
          Int32Array.from([6, 30, 58, 86]),
          new Mr(28, new Br(3, 113), new Br(4, 114)),
          new Mr(26, new Br(3, 44), new Br(11, 45)),
          new Mr(26, new Br(17, 21), new Br(4, 22)),
          new Mr(26, new Br(9, 13), new Br(16, 14))
        ),
        new t(
          20,
          Int32Array.from([6, 34, 62, 90]),
          new Mr(28, new Br(3, 107), new Br(5, 108)),
          new Mr(26, new Br(3, 41), new Br(13, 42)),
          new Mr(30, new Br(15, 24), new Br(5, 25)),
          new Mr(28, new Br(15, 15), new Br(10, 16))
        ),
        new t(
          21,
          Int32Array.from([6, 28, 50, 72, 94]),
          new Mr(28, new Br(4, 116), new Br(4, 117)),
          new Mr(26, new Br(17, 42)),
          new Mr(28, new Br(17, 22), new Br(6, 23)),
          new Mr(30, new Br(19, 16), new Br(6, 17))
        ),
        new t(
          22,
          Int32Array.from([6, 26, 50, 74, 98]),
          new Mr(28, new Br(2, 111), new Br(7, 112)),
          new Mr(28, new Br(17, 46)),
          new Mr(30, new Br(7, 24), new Br(16, 25)),
          new Mr(24, new Br(34, 13))
        ),
        new t(
          23,
          Int32Array.from([6, 30, 54, 78, 102]),
          new Mr(30, new Br(4, 121), new Br(5, 122)),
          new Mr(28, new Br(4, 47), new Br(14, 48)),
          new Mr(30, new Br(11, 24), new Br(14, 25)),
          new Mr(30, new Br(16, 15), new Br(14, 16))
        ),
        new t(
          24,
          Int32Array.from([6, 28, 54, 80, 106]),
          new Mr(30, new Br(6, 117), new Br(4, 118)),
          new Mr(28, new Br(6, 45), new Br(14, 46)),
          new Mr(30, new Br(11, 24), new Br(16, 25)),
          new Mr(30, new Br(30, 16), new Br(2, 17))
        ),
        new t(
          25,
          Int32Array.from([6, 32, 58, 84, 110]),
          new Mr(26, new Br(8, 106), new Br(4, 107)),
          new Mr(28, new Br(8, 47), new Br(13, 48)),
          new Mr(30, new Br(7, 24), new Br(22, 25)),
          new Mr(30, new Br(22, 15), new Br(13, 16))
        ),
        new t(
          26,
          Int32Array.from([6, 30, 58, 86, 114]),
          new Mr(28, new Br(10, 114), new Br(2, 115)),
          new Mr(28, new Br(19, 46), new Br(4, 47)),
          new Mr(28, new Br(28, 22), new Br(6, 23)),
          new Mr(30, new Br(33, 16), new Br(4, 17))
        ),
        new t(
          27,
          Int32Array.from([6, 34, 62, 90, 118]),
          new Mr(30, new Br(8, 122), new Br(4, 123)),
          new Mr(28, new Br(22, 45), new Br(3, 46)),
          new Mr(30, new Br(8, 23), new Br(26, 24)),
          new Mr(30, new Br(12, 15), new Br(28, 16))
        ),
        new t(
          28,
          Int32Array.from([6, 26, 50, 74, 98, 122]),
          new Mr(30, new Br(3, 117), new Br(10, 118)),
          new Mr(28, new Br(3, 45), new Br(23, 46)),
          new Mr(30, new Br(4, 24), new Br(31, 25)),
          new Mr(30, new Br(11, 15), new Br(31, 16))
        ),
        new t(
          29,
          Int32Array.from([6, 30, 54, 78, 102, 126]),
          new Mr(30, new Br(7, 116), new Br(7, 117)),
          new Mr(28, new Br(21, 45), new Br(7, 46)),
          new Mr(30, new Br(1, 23), new Br(37, 24)),
          new Mr(30, new Br(19, 15), new Br(26, 16))
        ),
        new t(
          30,
          Int32Array.from([6, 26, 52, 78, 104, 130]),
          new Mr(30, new Br(5, 115), new Br(10, 116)),
          new Mr(28, new Br(19, 47), new Br(10, 48)),
          new Mr(30, new Br(15, 24), new Br(25, 25)),
          new Mr(30, new Br(23, 15), new Br(25, 16))
        ),
        new t(
          31,
          Int32Array.from([6, 30, 56, 82, 108, 134]),
          new Mr(30, new Br(13, 115), new Br(3, 116)),
          new Mr(28, new Br(2, 46), new Br(29, 47)),
          new Mr(30, new Br(42, 24), new Br(1, 25)),
          new Mr(30, new Br(23, 15), new Br(28, 16))
        ),
        new t(
          32,
          Int32Array.from([6, 34, 60, 86, 112, 138]),
          new Mr(30, new Br(17, 115)),
          new Mr(28, new Br(10, 46), new Br(23, 47)),
          new Mr(30, new Br(10, 24), new Br(35, 25)),
          new Mr(30, new Br(19, 15), new Br(35, 16))
        ),
        new t(
          33,
          Int32Array.from([6, 30, 58, 86, 114, 142]),
          new Mr(30, new Br(17, 115), new Br(1, 116)),
          new Mr(28, new Br(14, 46), new Br(21, 47)),
          new Mr(30, new Br(29, 24), new Br(19, 25)),
          new Mr(30, new Br(11, 15), new Br(46, 16))
        ),
        new t(
          34,
          Int32Array.from([6, 34, 62, 90, 118, 146]),
          new Mr(30, new Br(13, 115), new Br(6, 116)),
          new Mr(28, new Br(14, 46), new Br(23, 47)),
          new Mr(30, new Br(44, 24), new Br(7, 25)),
          new Mr(30, new Br(59, 16), new Br(1, 17))
        ),
        new t(
          35,
          Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
          new Mr(30, new Br(12, 121), new Br(7, 122)),
          new Mr(28, new Br(12, 47), new Br(26, 48)),
          new Mr(30, new Br(39, 24), new Br(14, 25)),
          new Mr(30, new Br(22, 15), new Br(41, 16))
        ),
        new t(
          36,
          Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
          new Mr(30, new Br(6, 121), new Br(14, 122)),
          new Mr(28, new Br(6, 47), new Br(34, 48)),
          new Mr(30, new Br(46, 24), new Br(10, 25)),
          new Mr(30, new Br(2, 15), new Br(64, 16))
        ),
        new t(
          37,
          Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
          new Mr(30, new Br(17, 122), new Br(4, 123)),
          new Mr(28, new Br(29, 46), new Br(14, 47)),
          new Mr(30, new Br(49, 24), new Br(10, 25)),
          new Mr(30, new Br(24, 15), new Br(46, 16))
        ),
        new t(
          38,
          Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
          new Mr(30, new Br(4, 122), new Br(18, 123)),
          new Mr(28, new Br(13, 46), new Br(32, 47)),
          new Mr(30, new Br(48, 24), new Br(14, 25)),
          new Mr(30, new Br(42, 15), new Br(32, 16))
        ),
        new t(
          39,
          Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
          new Mr(30, new Br(20, 117), new Br(4, 118)),
          new Mr(28, new Br(40, 47), new Br(7, 48)),
          new Mr(30, new Br(43, 24), new Br(22, 25)),
          new Mr(30, new Br(10, 15), new Br(67, 16))
        ),
        new t(
          40,
          Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
          new Mr(30, new Br(19, 118), new Br(6, 119)),
          new Mr(28, new Br(18, 47), new Br(31, 48)),
          new Mr(30, new Br(34, 24), new Br(34, 25)),
          new Mr(30, new Br(20, 15), new Br(61, 16))
        ),
      ]),
      t
    );
  })();
!(function (t) {
  (t[(t.DATA_MASK_000 = 0)] = 'DATA_MASK_000'),
    (t[(t.DATA_MASK_001 = 1)] = 'DATA_MASK_001'),
    (t[(t.DATA_MASK_010 = 2)] = 'DATA_MASK_010'),
    (t[(t.DATA_MASK_011 = 3)] = 'DATA_MASK_011'),
    (t[(t.DATA_MASK_100 = 4)] = 'DATA_MASK_100'),
    (t[(t.DATA_MASK_101 = 5)] = 'DATA_MASK_101'),
    (t[(t.DATA_MASK_110 = 6)] = 'DATA_MASK_110'),
    (t[(t.DATA_MASK_111 = 7)] = 'DATA_MASK_111');
})(br || (br = {}));
var kr,
  xr = (function () {
    function t(t, e) {
      (this.value = t), (this.isMasked = e);
    }
    return (
      (t.prototype.unmaskBitMatrix = function (t, e) {
        for (var r = 0; r < e; r++)
          for (var n = 0; n < e; n++) this.isMasked(r, n) && t.flip(n, r);
      }),
      (t.values = new Map([
        [
          br.DATA_MASK_000,
          new t(br.DATA_MASK_000, function (t, e) {
            return 0 == ((t + e) & 1);
          }),
        ],
        [
          br.DATA_MASK_001,
          new t(br.DATA_MASK_001, function (t, e) {
            return 0 == (1 & t);
          }),
        ],
        [
          br.DATA_MASK_010,
          new t(br.DATA_MASK_010, function (t, e) {
            return e % 3 == 0;
          }),
        ],
        [
          br.DATA_MASK_011,
          new t(br.DATA_MASK_011, function (t, e) {
            return (t + e) % 3 == 0;
          }),
        ],
        [
          br.DATA_MASK_100,
          new t(br.DATA_MASK_100, function (t, e) {
            return 0 == ((Math.floor(t / 2) + Math.floor(e / 3)) & 1);
          }),
        ],
        [
          br.DATA_MASK_101,
          new t(br.DATA_MASK_101, function (t, e) {
            return (t * e) % 6 == 0;
          }),
        ],
        [
          br.DATA_MASK_110,
          new t(br.DATA_MASK_110, function (t, e) {
            return (t * e) % 6 < 3;
          }),
        ],
        [
          br.DATA_MASK_111,
          new t(br.DATA_MASK_111, function (t, e) {
            return 0 == ((t + e + ((t * e) % 3)) & 1);
          }),
        ],
      ])),
      t
    );
  })(),
  Vr = (function () {
    function t(t) {
      var e = t.getHeight();
      if (e < 21 || 1 != (3 & e)) throw new R();
      this.bitMatrix = t;
    }
    return (
      (t.prototype.readFormatInformation = function () {
        if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo)
          return this.parsedFormatInfo;
        for (var t = 0, e = 0; e < 6; e++) t = this.copyBit(e, 8, t);
        (t = this.copyBit(7, 8, t)),
          (t = this.copyBit(8, 8, t)),
          (t = this.copyBit(8, 7, t));
        for (var r = 5; r >= 0; r--) t = this.copyBit(8, r, t);
        var n = this.bitMatrix.getHeight(),
          o = 0,
          i = n - 7;
        for (r = n - 1; r >= i; r--) o = this.copyBit(8, r, o);
        for (e = n - 8; e < n; e++) o = this.copyBit(e, 8, o);
        if (
          ((this.parsedFormatInfo = Dr.decodeFormatInformation(t, o)),
          null !== this.parsedFormatInfo)
        )
          return this.parsedFormatInfo;
        throw new R();
      }),
      (t.prototype.readVersion = function () {
        if (null !== this.parsedVersion && void 0 !== this.parsedVersion)
          return this.parsedVersion;
        var t = this.bitMatrix.getHeight(),
          e = Math.floor((t - 17) / 4);
        if (e <= 6) return Fr.getVersionForNumber(e);
        for (var r = 0, n = t - 11, o = 5; o >= 0; o--)
          for (var i = t - 9; i >= n; i--) r = this.copyBit(i, o, r);
        var a = Fr.decodeVersionInformation(r);
        if (null !== a && a.getDimensionForVersion() === t)
          return (this.parsedVersion = a), a;
        r = 0;
        for (i = 5; i >= 0; i--)
          for (o = t - 9; o >= n; o--) r = this.copyBit(i, o, r);
        if (
          null !== (a = Fr.decodeVersionInformation(r)) &&
          a.getDimensionForVersion() === t
        )
          return (this.parsedVersion = a), a;
        throw new R();
      }),
      (t.prototype.copyBit = function (t, e, r) {
        return (
          this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)
        )
          ? (r << 1) | 1
          : r << 1;
      }),
      (t.prototype.readCodewords = function () {
        var t = this.readFormatInformation(),
          e = this.readVersion(),
          r = xr.values.get(t.getDataMask()),
          n = this.bitMatrix.getHeight();
        r.unmaskBitMatrix(this.bitMatrix, n);
        for (
          var o = e.buildFunctionPattern(),
            i = !0,
            a = new Uint8Array(e.getTotalCodewords()),
            u = 0,
            s = 0,
            c = 0,
            f = n - 1;
          f > 0;
          f -= 2
        ) {
          6 === f && f--;
          for (var h = 0; h < n; h++)
            for (var l = i ? n - 1 - h : h, d = 0; d < 2; d++)
              o.get(f - d, l) ||
                (c++,
                (s <<= 1),
                this.bitMatrix.get(f - d, l) && (s |= 1),
                8 === c && ((a[u++] = s), (c = 0), (s = 0)));
          i = !i;
        }
        if (u !== e.getTotalCodewords()) throw new R();
        return a;
      }),
      (t.prototype.remask = function () {
        if (null !== this.parsedFormatInfo) {
          var t = xr.values[this.parsedFormatInfo.getDataMask()],
            e = this.bitMatrix.getHeight();
          t.unmaskBitMatrix(this.bitMatrix, e);
        }
      }),
      (t.prototype.setMirror = function (t) {
        (this.parsedVersion = null),
          (this.parsedFormatInfo = null),
          (this.isMirror = t);
      }),
      (t.prototype.mirror = function () {
        for (var t = this.bitMatrix, e = 0, r = t.getWidth(); e < r; e++)
          for (var n = e + 1, o = t.getHeight(); n < o; n++)
            t.get(e, n) !== t.get(n, e) && (t.flip(n, e), t.flip(e, n));
      }),
      t
    );
  })(),
  Ur = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Hr = (function () {
    function t(t, e) {
      (this.numDataCodewords = t), (this.codewords = e);
    }
    return (
      (t.getDataBlocks = function (e, r, n) {
        var o, i, a, u;
        if (e.length !== r.getTotalCodewords()) throw new l();
        var s = r.getECBlocksForLevel(n),
          c = 0,
          f = s.getECBlocks();
        try {
          for (var h = Ur(f), d = h.next(); !d.done; d = h.next()) {
            c += (_ = d.value).getCount();
          }
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            d && !d.done && (i = h.return) && i.call(h);
          } finally {
            if (o) throw o.error;
          }
        }
        var p = new Array(c),
          g = 0;
        try {
          for (var y = Ur(f), w = y.next(); !w.done; w = y.next())
            for (var _ = w.value, v = 0; v < _.getCount(); v++) {
              var m = _.getDataCodewords(),
                A = s.getECCodewordsPerBlock() + m;
              p[g++] = new t(m, new Uint8Array(A));
            }
        } catch (t) {
          a = { error: t };
        } finally {
          try {
            w && !w.done && (u = y.return) && u.call(y);
          } finally {
            if (a) throw a.error;
          }
        }
        for (var E = p[0].codewords.length, C = p.length - 1; C >= 0; ) {
          if (p[C].codewords.length === E) break;
          C--;
        }
        C++;
        var I = E - s.getECCodewordsPerBlock(),
          S = 0;
        for (v = 0; v < I; v++)
          for (var O = 0; O < g; O++) p[O].codewords[v] = e[S++];
        for (O = C; O < g; O++) p[O].codewords[I] = e[S++];
        var T = p[0].codewords.length;
        for (v = I; v < T; v++)
          for (O = 0; O < g; O++) {
            var b = O < C ? v : v + 1;
            p[O].codewords[b] = e[S++];
          }
        return p;
      }),
      (t.prototype.getNumDataCodewords = function () {
        return this.numDataCodewords;
      }),
      (t.prototype.getCodewords = function () {
        return this.codewords;
      }),
      t
    );
  })();
!(function (t) {
  (t[(t.TERMINATOR = 0)] = 'TERMINATOR'),
    (t[(t.NUMERIC = 1)] = 'NUMERIC'),
    (t[(t.ALPHANUMERIC = 2)] = 'ALPHANUMERIC'),
    (t[(t.STRUCTURED_APPEND = 3)] = 'STRUCTURED_APPEND'),
    (t[(t.BYTE = 4)] = 'BYTE'),
    (t[(t.ECI = 5)] = 'ECI'),
    (t[(t.KANJI = 6)] = 'KANJI'),
    (t[(t.FNC1_FIRST_POSITION = 7)] = 'FNC1_FIRST_POSITION'),
    (t[(t.FNC1_SECOND_POSITION = 8)] = 'FNC1_SECOND_POSITION'),
    (t[(t.HANZI = 9)] = 'HANZI');
})(kr || (kr = {}));
var Gr,
  Xr,
  Wr = (function () {
    function t(e, r, n, o) {
      (this.value = e),
        (this.stringValue = r),
        (this.characterCountBitsForVersions = n),
        (this.bits = o),
        t.FOR_BITS.set(o, this),
        t.FOR_VALUE.set(e, this);
    }
    return (
      (t.forBits = function (e) {
        var r = t.FOR_BITS.get(e);
        if (void 0 === r) throw new l();
        return r;
      }),
      (t.prototype.getCharacterCountBits = function (t) {
        var e,
          r = t.getVersionNumber();
        return (
          (e = r <= 9 ? 0 : r <= 26 ? 1 : 2),
          this.characterCountBitsForVersions[e]
        );
      }),
      (t.prototype.getValue = function () {
        return this.value;
      }),
      (t.prototype.getBits = function () {
        return this.bits;
      }),
      (t.prototype.equals = function (e) {
        if (!(e instanceof t)) return !1;
        var r = e;
        return this.value === r.value;
      }),
      (t.prototype.toString = function () {
        return this.stringValue;
      }),
      (t.FOR_BITS = new Map()),
      (t.FOR_VALUE = new Map()),
      (t.TERMINATOR = new t(
        kr.TERMINATOR,
        'TERMINATOR',
        Int32Array.from([0, 0, 0]),
        0
      )),
      (t.NUMERIC = new t(
        kr.NUMERIC,
        'NUMERIC',
        Int32Array.from([10, 12, 14]),
        1
      )),
      (t.ALPHANUMERIC = new t(
        kr.ALPHANUMERIC,
        'ALPHANUMERIC',
        Int32Array.from([9, 11, 13]),
        2
      )),
      (t.STRUCTURED_APPEND = new t(
        kr.STRUCTURED_APPEND,
        'STRUCTURED_APPEND',
        Int32Array.from([0, 0, 0]),
        3
      )),
      (t.BYTE = new t(kr.BYTE, 'BYTE', Int32Array.from([8, 16, 16]), 4)),
      (t.ECI = new t(kr.ECI, 'ECI', Int32Array.from([0, 0, 0]), 7)),
      (t.KANJI = new t(kr.KANJI, 'KANJI', Int32Array.from([8, 10, 12]), 8)),
      (t.FNC1_FIRST_POSITION = new t(
        kr.FNC1_FIRST_POSITION,
        'FNC1_FIRST_POSITION',
        Int32Array.from([0, 0, 0]),
        5
      )),
      (t.FNC1_SECOND_POSITION = new t(
        kr.FNC1_SECOND_POSITION,
        'FNC1_SECOND_POSITION',
        Int32Array.from([0, 0, 0]),
        9
      )),
      (t.HANZI = new t(kr.HANZI, 'HANZI', Int32Array.from([8, 10, 12]), 13)),
      t
    );
  })(),
  jr = (function () {
    function t() {}
    return (
      (t.decode = function (e, r, n, o) {
        var i = new mr(e),
          a = new k(),
          u = new Array(),
          s = -1,
          c = -1;
        try {
          var f = null,
            h = !1,
            l = void 0;
          do {
            if (i.available() < 4) l = Wr.TERMINATOR;
            else {
              var d = i.readBits(4);
              l = Wr.forBits(d);
            }
            switch (l) {
              case Wr.TERMINATOR:
                break;
              case Wr.FNC1_FIRST_POSITION:
              case Wr.FNC1_SECOND_POSITION:
                h = !0;
                break;
              case Wr.STRUCTURED_APPEND:
                if (i.available() < 16) throw new R();
                (s = i.readBits(8)), (c = i.readBits(8));
                break;
              case Wr.ECI:
                var p = t.parseECIValue(i);
                if (null === (f = P.getCharacterSetECIByValue(p)))
                  throw new R();
                break;
              case Wr.HANZI:
                var g = i.readBits(4),
                  y = i.readBits(l.getCharacterCountBits(r));
                g === t.GB2312_SUBSET && t.decodeHanziSegment(i, a, y);
                break;
              default:
                var w = i.readBits(l.getCharacterCountBits(r));
                switch (l) {
                  case Wr.NUMERIC:
                    t.decodeNumericSegment(i, a, w);
                    break;
                  case Wr.ALPHANUMERIC:
                    t.decodeAlphanumericSegment(i, a, w, h);
                    break;
                  case Wr.BYTE:
                    t.decodeByteSegment(i, a, w, f, u, o);
                    break;
                  case Wr.KANJI:
                    t.decodeKanjiSegment(i, a, w);
                    break;
                  default:
                    throw new R();
                }
            }
          } while (l !== Wr.TERMINATOR);
        } catch (t) {
          throw new R();
        }
        return new at(
          e,
          a.toString(),
          0 === u.length ? null : u,
          null === n ? null : n.toString(),
          s,
          c
        );
      }),
      (t.decodeHanziSegment = function (t, e, r) {
        if (13 * r > t.available()) throw new R();
        for (var n = new Uint8Array(2 * r), o = 0; r > 0; ) {
          var i = t.readBits(13),
            a = (((i / 96) << 8) & 4294967295) | i % 96;
          (a += a < 959 ? 41377 : 42657),
            (n[o] = (a >> 8) & 255),
            (n[o + 1] = 255 & a),
            (o += 2),
            r--;
        }
        try {
          e.append(L.decode(n, F.GB2312));
        } catch (t) {
          throw new R(t);
        }
      }),
      (t.decodeKanjiSegment = function (t, e, r) {
        if (13 * r > t.available()) throw new R();
        for (var n = new Uint8Array(2 * r), o = 0; r > 0; ) {
          var i = t.readBits(13),
            a = (((i / 192) << 8) & 4294967295) | i % 192;
          (a += a < 7936 ? 33088 : 49472),
            (n[o] = a >> 8),
            (n[o + 1] = a),
            (o += 2),
            r--;
        }
        try {
          e.append(L.decode(n, F.SHIFT_JIS));
        } catch (t) {
          throw new R(t);
        }
      }),
      (t.decodeByteSegment = function (t, e, r, n, o, i) {
        if (8 * r > t.available()) throw new R();
        for (var a, u = new Uint8Array(r), s = 0; s < r; s++)
          u[s] = t.readBits(8);
        a = null === n ? F.guessEncoding(u, i) : n.getName();
        try {
          e.append(L.decode(u, a));
        } catch (t) {
          throw new R(t);
        }
        o.push(u);
      }),
      (t.toAlphaNumericChar = function (e) {
        if (e >= t.ALPHANUMERIC_CHARS.length) throw new R();
        return t.ALPHANUMERIC_CHARS[e];
      }),
      (t.decodeAlphanumericSegment = function (e, r, n, o) {
        for (var i = r.length(); n > 1; ) {
          if (e.available() < 11) throw new R();
          var a = e.readBits(11);
          r.append(t.toAlphaNumericChar(Math.floor(a / 45))),
            r.append(t.toAlphaNumericChar(a % 45)),
            (n -= 2);
        }
        if (1 === n) {
          if (e.available() < 6) throw new R();
          r.append(t.toAlphaNumericChar(e.readBits(6)));
        }
        if (o)
          for (var u = i; u < r.length(); u++)
            '%' === r.charAt(u) &&
              (u < r.length() - 1 && '%' === r.charAt(u + 1)
                ? r.deleteCharAt(u + 1)
                : r.setCharAt(u, String.fromCharCode(29)));
      }),
      (t.decodeNumericSegment = function (e, r, n) {
        for (; n >= 3; ) {
          if (e.available() < 10) throw new R();
          var o = e.readBits(10);
          if (o >= 1e3) throw new R();
          r.append(t.toAlphaNumericChar(Math.floor(o / 100))),
            r.append(t.toAlphaNumericChar(Math.floor(o / 10) % 10)),
            r.append(t.toAlphaNumericChar(o % 10)),
            (n -= 3);
        }
        if (2 === n) {
          if (e.available() < 7) throw new R();
          var i = e.readBits(7);
          if (i >= 100) throw new R();
          r.append(t.toAlphaNumericChar(Math.floor(i / 10))),
            r.append(t.toAlphaNumericChar(i % 10));
        } else if (1 === n) {
          if (e.available() < 4) throw new R();
          var a = e.readBits(4);
          if (a >= 10) throw new R();
          r.append(t.toAlphaNumericChar(a));
        }
      }),
      (t.parseECIValue = function (t) {
        var e = t.readBits(8);
        if (0 == (128 & e)) return 127 & e;
        if (128 == (192 & e))
          return (((63 & e) << 8) & 4294967295) | t.readBits(8);
        if (192 == (224 & e))
          return (((31 & e) << 16) & 4294967295) | t.readBits(16);
        throw new R();
      }),
      (t.ALPHANUMERIC_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'),
      (t.GB2312_SUBSET = 1),
      t
    );
  })(),
  zr = (function () {
    function t(t) {
      this.mirrored = t;
    }
    return (
      (t.prototype.isMirrored = function () {
        return this.mirrored;
      }),
      (t.prototype.applyMirroredCorrection = function (t) {
        if (this.mirrored && null !== t && !(t.length < 3)) {
          var e = t[0];
          (t[0] = t[2]), (t[2] = e);
        }
      }),
      t
    );
  })(),
  Yr = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Zr = (function () {
    function t() {
      this.rsDecoder = new wt(lt.QR_CODE_FIELD_256);
    }
    return (
      (t.prototype.decodeBooleanArray = function (t, e) {
        return this.decodeBitMatrix(x.parseFromBooleanArray(t), e);
      }),
      (t.prototype.decodeBitMatrix = function (t, e) {
        var r = new Vr(t),
          n = null;
        try {
          return this.decodeBitMatrixParser(r, e);
        } catch (t) {
          n = t;
        }
        try {
          r.remask(),
            r.setMirror(!0),
            r.readVersion(),
            r.readFormatInformation(),
            r.mirror();
          var o = this.decodeBitMatrixParser(r, e);
          return o.setOther(new zr(!0)), o;
        } catch (t) {
          if (null !== n) throw n;
          throw t;
        }
      }),
      (t.prototype.decodeBitMatrixParser = function (t, e) {
        var r,
          n,
          o,
          i,
          a = t.readVersion(),
          u = t.readFormatInformation().getErrorCorrectionLevel(),
          s = t.readCodewords(),
          c = Hr.getDataBlocks(s, a, u),
          f = 0;
        try {
          for (var h = Yr(c), l = h.next(); !l.done; l = h.next()) {
            f += (w = l.value).getNumDataCodewords();
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            l && !l.done && (n = h.return) && n.call(h);
          } finally {
            if (r) throw r.error;
          }
        }
        var d = new Uint8Array(f),
          p = 0;
        try {
          for (var g = Yr(c), y = g.next(); !y.done; y = g.next()) {
            var w,
              _ = (w = y.value).getCodewords(),
              v = w.getNumDataCodewords();
            this.correctErrors(_, v);
            for (var m = 0; m < v; m++) d[p++] = _[m];
          }
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            y && !y.done && (i = g.return) && i.call(g);
          } finally {
            if (o) throw o.error;
          }
        }
        return jr.decode(d, a, u, e);
      }),
      (t.prototype.correctErrors = function (t, e) {
        var r = new Int32Array(t);
        try {
          this.rsDecoder.decode(r, t.length - e);
        } catch (t) {
          throw new g();
        }
        for (var n = 0; n < e; n++) t[n] = r[n];
      }),
      t
    );
  })(),
  Kr = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  qr = (function (t) {
    function e(e, r, n) {
      var o = t.call(this, e, r) || this;
      return (o.estimatedModuleSize = n), o;
    }
    return (
      Kr(e, t),
      (e.prototype.aboutEquals = function (t, e, r) {
        if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
          var n = Math.abs(t - this.estimatedModuleSize);
          return n <= 1 || n <= this.estimatedModuleSize;
        }
        return !1;
      }),
      (e.prototype.combineEstimate = function (t, r, n) {
        return new e(
          (this.getX() + r) / 2,
          (this.getY() + t) / 2,
          (this.estimatedModuleSize + n) / 2
        );
      }),
      e
    );
  })(At),
  Qr = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Jr = (function () {
    function t(t, e, r, n, o, i, a) {
      (this.image = t),
        (this.startX = e),
        (this.startY = r),
        (this.width = n),
        (this.height = o),
        (this.moduleSize = i),
        (this.resultPointCallback = a),
        (this.possibleCenters = []),
        (this.crossCheckStateCount = new Int32Array(3));
    }
    return (
      (t.prototype.find = function () {
        for (
          var t = this.startX,
            e = this.height,
            r = t + this.width,
            n = this.startY + e / 2,
            o = new Int32Array(3),
            i = this.image,
            a = 0;
          a < e;
          a++
        ) {
          var u =
            n +
            (0 == (1 & a) ? Math.floor((a + 1) / 2) : -Math.floor((a + 1) / 2));
          (o[0] = 0), (o[1] = 0), (o[2] = 0);
          for (var s = t; s < r && !i.get(s, u); ) s++;
          for (var c = 0; s < r; ) {
            if (i.get(s, u))
              if (1 === c) o[1]++;
              else if (2 === c) {
                var f;
                if (this.foundPatternCross(o))
                  if (null !== (f = this.handlePossibleCenter(o, u, s)))
                    return f;
                (o[0] = o[2]), (o[1] = 1), (o[2] = 0), (c = 1);
              } else o[++c]++;
            else 1 === c && c++, o[c]++;
            s++;
          }
          if (this.foundPatternCross(o))
            if (null !== (f = this.handlePossibleCenter(o, u, r))) return f;
        }
        if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
        throw new U();
      }),
      (t.centerFromEnd = function (t, e) {
        return e - t[2] - t[1] / 2;
      }),
      (t.prototype.foundPatternCross = function (t) {
        for (var e = this.moduleSize, r = e / 2, n = 0; n < 3; n++)
          if (Math.abs(e - t[n]) >= r) return !1;
        return !0;
      }),
      (t.prototype.crossCheckVertical = function (e, r, n, o) {
        var i = this.image,
          a = i.getHeight(),
          u = this.crossCheckStateCount;
        (u[0] = 0), (u[1] = 0), (u[2] = 0);
        for (var s = e; s >= 0 && i.get(r, s) && u[1] <= n; ) u[1]++, s--;
        if (s < 0 || u[1] > n) return NaN;
        for (; s >= 0 && !i.get(r, s) && u[0] <= n; ) u[0]++, s--;
        if (u[0] > n) return NaN;
        for (s = e + 1; s < a && i.get(r, s) && u[1] <= n; ) u[1]++, s++;
        if (s === a || u[1] > n) return NaN;
        for (; s < a && !i.get(r, s) && u[2] <= n; ) u[2]++, s++;
        if (u[2] > n) return NaN;
        var c = u[0] + u[1] + u[2];
        return 5 * Math.abs(c - o) >= 2 * o
          ? NaN
          : this.foundPatternCross(u)
          ? t.centerFromEnd(u, s)
          : NaN;
      }),
      (t.prototype.handlePossibleCenter = function (e, r, n) {
        var o,
          i,
          a = e[0] + e[1] + e[2],
          u = t.centerFromEnd(e, n),
          s = this.crossCheckVertical(r, u, 2 * e[1], a);
        if (!isNaN(s)) {
          var c = (e[0] + e[1] + e[2]) / 3;
          try {
            for (
              var f = Qr(this.possibleCenters), h = f.next();
              !h.done;
              h = f.next()
            ) {
              var l = h.value;
              if (l.aboutEquals(c, s, u)) return l.combineEstimate(s, u, c);
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              h && !h.done && (i = f.return) && i.call(f);
            } finally {
              if (o) throw o.error;
            }
          }
          var d = new qr(u, s, c);
          this.possibleCenters.push(d),
            null !== this.resultPointCallback &&
              void 0 !== this.resultPointCallback &&
              this.resultPointCallback.foundPossibleResultPoint(d);
        }
        return null;
      }),
      t
    );
  })(),
  $r = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  tn = (function (t) {
    function e(e, r, n, o) {
      var i = t.call(this, e, r) || this;
      return (
        (i.estimatedModuleSize = n),
        (i.count = o),
        void 0 === o && (i.count = 1),
        i
      );
    }
    return (
      $r(e, t),
      (e.prototype.getEstimatedModuleSize = function () {
        return this.estimatedModuleSize;
      }),
      (e.prototype.getCount = function () {
        return this.count;
      }),
      (e.prototype.aboutEquals = function (t, e, r) {
        if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
          var n = Math.abs(t - this.estimatedModuleSize);
          return n <= 1 || n <= this.estimatedModuleSize;
        }
        return !1;
      }),
      (e.prototype.combineEstimate = function (t, r, n) {
        var o = this.count + 1;
        return new e(
          (this.count * this.getX() + r) / o,
          (this.count * this.getY() + t) / o,
          (this.count * this.estimatedModuleSize + n) / o,
          o
        );
      }),
      e
    );
  })(At),
  en = (function () {
    function t(t) {
      (this.bottomLeft = t[0]), (this.topLeft = t[1]), (this.topRight = t[2]);
    }
    return (
      (t.prototype.getBottomLeft = function () {
        return this.bottomLeft;
      }),
      (t.prototype.getTopLeft = function () {
        return this.topLeft;
      }),
      (t.prototype.getTopRight = function () {
        return this.topRight;
      }),
      t
    );
  })(),
  rn = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  nn = (function () {
    function t(t, e) {
      (this.image = t),
        (this.resultPointCallback = e),
        (this.possibleCenters = []),
        (this.crossCheckStateCount = new Int32Array(5)),
        (this.resultPointCallback = e);
    }
    return (
      (t.prototype.getImage = function () {
        return this.image;
      }),
      (t.prototype.getPossibleCenters = function () {
        return this.possibleCenters;
      }),
      (t.prototype.find = function (e) {
        var r = null != e && void 0 !== e.get(T.TRY_HARDER),
          n = null != e && void 0 !== e.get(T.PURE_BARCODE),
          o = this.image,
          i = o.getHeight(),
          a = o.getWidth(),
          u = Math.floor((3 * i) / (4 * t.MAX_MODULES));
        (u < t.MIN_SKIP || r) && (u = t.MIN_SKIP);
        for (
          var s = !1, c = new Int32Array(5), f = u - 1;
          f < i && !s;
          f += u
        ) {
          (c[0] = 0), (c[1] = 0), (c[2] = 0), (c[3] = 0), (c[4] = 0);
          for (var h = 0, l = 0; l < a; l++)
            if (o.get(l, f)) 1 == (1 & h) && h++, c[h]++;
            else if (0 == (1 & h))
              if (4 === h)
                if (t.foundPatternCross(c)) {
                  if (!0 !== this.handlePossibleCenter(c, f, l, n)) {
                    (c[0] = c[2]),
                      (c[1] = c[3]),
                      (c[2] = c[4]),
                      (c[3] = 1),
                      (c[4] = 0),
                      (h = 3);
                    continue;
                  }
                  if (((u = 2), !0 === this.hasSkipped))
                    s = this.haveMultiplyConfirmedCenters();
                  else {
                    var d = this.findRowSkip();
                    d > c[2] && ((f += d - c[2] - u), (l = a - 1));
                  }
                  (h = 0),
                    (c[0] = 0),
                    (c[1] = 0),
                    (c[2] = 0),
                    (c[3] = 0),
                    (c[4] = 0);
                } else
                  (c[0] = c[2]),
                    (c[1] = c[3]),
                    (c[2] = c[4]),
                    (c[3] = 1),
                    (c[4] = 0),
                    (h = 3);
              else c[++h]++;
            else c[h]++;
          if (t.foundPatternCross(c))
            !0 === this.handlePossibleCenter(c, f, a, n) &&
              ((u = c[0]),
              this.hasSkipped && (s = this.haveMultiplyConfirmedCenters()));
        }
        var p = this.selectBestPatterns();
        return At.orderBestPatterns(p), new en(p);
      }),
      (t.centerFromEnd = function (t, e) {
        return e - t[4] - t[3] - t[2] / 2;
      }),
      (t.foundPatternCross = function (t) {
        for (var e = 0, r = 0; r < 5; r++) {
          var n = t[r];
          if (0 === n) return !1;
          e += n;
        }
        if (e < 7) return !1;
        var o = e / 7,
          i = o / 2;
        return (
          Math.abs(o - t[0]) < i &&
          Math.abs(o - t[1]) < i &&
          Math.abs(3 * o - t[2]) < 3 * i &&
          Math.abs(o - t[3]) < i &&
          Math.abs(o - t[4]) < i
        );
      }),
      (t.prototype.getCrossCheckStateCount = function () {
        var t = this.crossCheckStateCount;
        return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), t;
      }),
      (t.prototype.crossCheckDiagonal = function (e, r, n, o) {
        for (
          var i = this.getCrossCheckStateCount(), a = 0, u = this.image;
          e >= a && r >= a && u.get(r - a, e - a);

        )
          i[2]++, a++;
        if (e < a || r < a) return !1;
        for (; e >= a && r >= a && !u.get(r - a, e - a) && i[1] <= n; )
          i[1]++, a++;
        if (e < a || r < a || i[1] > n) return !1;
        for (; e >= a && r >= a && u.get(r - a, e - a) && i[0] <= n; )
          i[0]++, a++;
        if (i[0] > n) return !1;
        var s = u.getHeight(),
          c = u.getWidth();
        for (a = 1; e + a < s && r + a < c && u.get(r + a, e + a); )
          i[2]++, a++;
        if (e + a >= s || r + a >= c) return !1;
        for (; e + a < s && r + a < c && !u.get(r + a, e + a) && i[3] < n; )
          i[3]++, a++;
        if (e + a >= s || r + a >= c || i[3] >= n) return !1;
        for (; e + a < s && r + a < c && u.get(r + a, e + a) && i[4] < n; )
          i[4]++, a++;
        if (i[4] >= n) return !1;
        var f = i[0] + i[1] + i[2] + i[3] + i[4];
        return Math.abs(f - o) < 2 * o && t.foundPatternCross(i);
      }),
      (t.prototype.crossCheckVertical = function (e, r, n, o) {
        for (
          var i = this.image,
            a = i.getHeight(),
            u = this.getCrossCheckStateCount(),
            s = e;
          s >= 0 && i.get(r, s);

        )
          u[2]++, s--;
        if (s < 0) return NaN;
        for (; s >= 0 && !i.get(r, s) && u[1] <= n; ) u[1]++, s--;
        if (s < 0 || u[1] > n) return NaN;
        for (; s >= 0 && i.get(r, s) && u[0] <= n; ) u[0]++, s--;
        if (u[0] > n) return NaN;
        for (s = e + 1; s < a && i.get(r, s); ) u[2]++, s++;
        if (s === a) return NaN;
        for (; s < a && !i.get(r, s) && u[3] < n; ) u[3]++, s++;
        if (s === a || u[3] >= n) return NaN;
        for (; s < a && i.get(r, s) && u[4] < n; ) u[4]++, s++;
        if (u[4] >= n) return NaN;
        var c = u[0] + u[1] + u[2] + u[3] + u[4];
        return 5 * Math.abs(c - o) >= 2 * o
          ? NaN
          : t.foundPatternCross(u)
          ? t.centerFromEnd(u, s)
          : NaN;
      }),
      (t.prototype.crossCheckHorizontal = function (e, r, n, o) {
        for (
          var i = this.image,
            a = i.getWidth(),
            u = this.getCrossCheckStateCount(),
            s = e;
          s >= 0 && i.get(s, r);

        )
          u[2]++, s--;
        if (s < 0) return NaN;
        for (; s >= 0 && !i.get(s, r) && u[1] <= n; ) u[1]++, s--;
        if (s < 0 || u[1] > n) return NaN;
        for (; s >= 0 && i.get(s, r) && u[0] <= n; ) u[0]++, s--;
        if (u[0] > n) return NaN;
        for (s = e + 1; s < a && i.get(s, r); ) u[2]++, s++;
        if (s === a) return NaN;
        for (; s < a && !i.get(s, r) && u[3] < n; ) u[3]++, s++;
        if (s === a || u[3] >= n) return NaN;
        for (; s < a && i.get(s, r) && u[4] < n; ) u[4]++, s++;
        if (u[4] >= n) return NaN;
        var c = u[0] + u[1] + u[2] + u[3] + u[4];
        return 5 * Math.abs(c - o) >= o
          ? NaN
          : t.foundPatternCross(u)
          ? t.centerFromEnd(u, s)
          : NaN;
      }),
      (t.prototype.handlePossibleCenter = function (e, r, n, o) {
        var i = e[0] + e[1] + e[2] + e[3] + e[4],
          a = t.centerFromEnd(e, n),
          u = this.crossCheckVertical(r, Math.floor(a), e[2], i);
        if (
          !isNaN(u) &&
          ((a = this.crossCheckHorizontal(
            Math.floor(a),
            Math.floor(u),
            e[2],
            i
          )),
          !isNaN(a) &&
            (!o ||
              this.crossCheckDiagonal(Math.floor(u), Math.floor(a), e[2], i)))
        ) {
          for (
            var s = i / 7,
              c = !1,
              f = this.possibleCenters,
              h = 0,
              l = f.length;
            h < l;
            h++
          ) {
            var d = f[h];
            if (d.aboutEquals(s, u, a)) {
              (f[h] = d.combineEstimate(u, a, s)), (c = !0);
              break;
            }
          }
          if (!c) {
            var p = new tn(a, u, s);
            f.push(p),
              null !== this.resultPointCallback &&
                void 0 !== this.resultPointCallback &&
                this.resultPointCallback.foundPossibleResultPoint(p);
          }
          return !0;
        }
        return !1;
      }),
      (t.prototype.findRowSkip = function () {
        var e, r;
        if (this.possibleCenters.length <= 1) return 0;
        var n = null;
        try {
          for (
            var o = rn(this.possibleCenters), i = o.next();
            !i.done;
            i = o.next()
          ) {
            var a = i.value;
            if (a.getCount() >= t.CENTER_QUORUM) {
              if (null != n)
                return (
                  (this.hasSkipped = !0),
                  Math.floor(
                    (Math.abs(n.getX() - a.getX()) -
                      Math.abs(n.getY() - a.getY())) /
                      2
                  )
                );
              n = a;
            }
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return 0;
      }),
      (t.prototype.haveMultiplyConfirmedCenters = function () {
        var e,
          r,
          n,
          o,
          i = 0,
          a = 0,
          u = this.possibleCenters.length;
        try {
          for (
            var s = rn(this.possibleCenters), c = s.next();
            !c.done;
            c = s.next()
          ) {
            (p = c.value).getCount() >= t.CENTER_QUORUM &&
              (i++, (a += p.getEstimatedModuleSize()));
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            c && !c.done && (r = s.return) && r.call(s);
          } finally {
            if (e) throw e.error;
          }
        }
        if (i < 3) return !1;
        var f = a / u,
          h = 0;
        try {
          for (
            var l = rn(this.possibleCenters), d = l.next();
            !d.done;
            d = l.next()
          ) {
            var p = d.value;
            h += Math.abs(p.getEstimatedModuleSize() - f);
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            d && !d.done && (o = l.return) && o.call(l);
          } finally {
            if (n) throw n.error;
          }
        }
        return h <= 0.05 * a;
      }),
      (t.prototype.selectBestPatterns = function () {
        var t,
          e,
          r,
          n,
          o = this.possibleCenters.length;
        if (o < 3) throw new U();
        var i,
          a = this.possibleCenters;
        if (o > 3) {
          var u = 0,
            s = 0;
          try {
            for (
              var c = rn(this.possibleCenters), f = c.next();
              !f.done;
              f = c.next()
            ) {
              var h = f.value.getEstimatedModuleSize();
              (u += h), (s += h * h);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              f && !f.done && (e = c.return) && e.call(c);
            } finally {
              if (t) throw t.error;
            }
          }
          i = u / o;
          var l = Math.sqrt(s / o - i * i);
          a.sort(function (t, e) {
            var r = Math.abs(e.getEstimatedModuleSize() - i),
              n = Math.abs(t.getEstimatedModuleSize() - i);
            return r < n ? -1 : r > n ? 1 : 0;
          });
          for (
            var d = Math.max(0.2 * i, l), p = 0;
            p < a.length && a.length > 3;
            p++
          ) {
            var g = a[p];
            Math.abs(g.getEstimatedModuleSize() - i) > d &&
              (a.splice(p, 1), p--);
          }
        }
        if (a.length > 3) {
          u = 0;
          try {
            for (var y = rn(a), w = y.next(); !w.done; w = y.next()) {
              u += w.value.getEstimatedModuleSize();
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              w && !w.done && (n = y.return) && n.call(y);
            } finally {
              if (r) throw r.error;
            }
          }
          (i = u / a.length),
            a.sort(function (t, e) {
              if (e.getCount() === t.getCount()) {
                var r = Math.abs(e.getEstimatedModuleSize() - i),
                  n = Math.abs(t.getEstimatedModuleSize() - i);
                return r < n ? 1 : r > n ? -1 : 0;
              }
              return e.getCount() - t.getCount();
            }),
            a.splice(3);
        }
        return [a[0], a[1], a[2]];
      }),
      (t.CENTER_QUORUM = 2),
      (t.MIN_SKIP = 3),
      (t.MAX_MODULES = 57),
      t
    );
  })(),
  on = (function () {
    function t(t) {
      this.image = t;
    }
    return (
      (t.prototype.getImage = function () {
        return this.image;
      }),
      (t.prototype.getResultPointCallback = function () {
        return this.resultPointCallback;
      }),
      (t.prototype.detect = function (t) {
        this.resultPointCallback =
          null == t ? null : t.get(T.NEED_RESULT_POINT_CALLBACK);
        var e = new nn(this.image, this.resultPointCallback).find(t);
        return this.processFinderPatternInfo(e);
      }),
      (t.prototype.processFinderPatternInfo = function (e) {
        var r = e.getTopLeft(),
          n = e.getTopRight(),
          o = e.getBottomLeft(),
          i = this.calculateModuleSize(r, n, o);
        if (i < 1) throw new U('No pattern found in proccess finder.');
        var a = t.computeDimension(r, n, o, i),
          u = Fr.getProvisionalVersionForDimension(a),
          s = u.getDimensionForVersion() - 7,
          c = null;
        if (u.getAlignmentPatternCenters().length > 0)
          for (
            var f = n.getX() - r.getX() + o.getX(),
              h = n.getY() - r.getY() + o.getY(),
              l = 1 - 3 / s,
              d = Math.floor(r.getX() + l * (f - r.getX())),
              p = Math.floor(r.getY() + l * (h - r.getY())),
              g = 4;
            g <= 16;
            g <<= 1
          )
            try {
              c = this.findAlignmentInRegion(i, d, p, g);
              break;
            } catch (t) {
              if (!(t instanceof U)) throw t;
            }
        var y = t.createTransform(r, n, o, c, a),
          w = t.sampleGrid(this.image, y, a);
        return new Et(w, null === c ? [o, r, n] : [o, r, n, c]);
      }),
      (t.createTransform = function (t, e, r, n, o) {
        var i,
          a,
          u,
          s,
          c = o - 3.5;
        return (
          null !== n
            ? ((i = n.getX()), (a = n.getY()), (s = u = c - 3))
            : ((i = e.getX() - t.getX() + r.getX()),
              (a = e.getY() - t.getY() + r.getY()),
              (u = c),
              (s = c)),
          Tt.quadrilateralToQuadrilateral(
            3.5,
            3.5,
            c,
            3.5,
            u,
            s,
            3.5,
            c,
            t.getX(),
            t.getY(),
            e.getX(),
            e.getY(),
            i,
            a,
            r.getX(),
            r.getY()
          )
        );
      }),
      (t.sampleGrid = function (t, e, r) {
        return Nt.getInstance().sampleGridWithTransform(t, r, r, e);
      }),
      (t.computeDimension = function (t, e, r, n) {
        var o = vt.round(At.distance(t, e) / n),
          i = vt.round(At.distance(t, r) / n),
          a = Math.floor((o + i) / 2) + 7;
        switch (3 & a) {
          case 0:
            a++;
            break;
          case 2:
            a--;
            break;
          case 3:
            throw new U('Dimensions could be not found.');
        }
        return a;
      }),
      (t.prototype.calculateModuleSize = function (t, e, r) {
        return (
          (this.calculateModuleSizeOneWay(t, e) +
            this.calculateModuleSizeOneWay(t, r)) /
          2
        );
      }),
      (t.prototype.calculateModuleSizeOneWay = function (t, e) {
        var r = this.sizeOfBlackWhiteBlackRunBothWays(
            Math.floor(t.getX()),
            Math.floor(t.getY()),
            Math.floor(e.getX()),
            Math.floor(e.getY())
          ),
          n = this.sizeOfBlackWhiteBlackRunBothWays(
            Math.floor(e.getX()),
            Math.floor(e.getY()),
            Math.floor(t.getX()),
            Math.floor(t.getY())
          );
        return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14;
      }),
      (t.prototype.sizeOfBlackWhiteBlackRunBothWays = function (t, e, r, n) {
        var o = this.sizeOfBlackWhiteBlackRun(t, e, r, n),
          i = 1,
          a = t - (r - t);
        a < 0
          ? ((i = t / (t - a)), (a = 0))
          : a >= this.image.getWidth() &&
            ((i = (this.image.getWidth() - 1 - t) / (a - t)),
            (a = this.image.getWidth() - 1));
        var u = Math.floor(e - (n - e) * i);
        return (
          (i = 1),
          u < 0
            ? ((i = e / (e - u)), (u = 0))
            : u >= this.image.getHeight() &&
              ((i = (this.image.getHeight() - 1 - e) / (u - e)),
              (u = this.image.getHeight() - 1)),
          (a = Math.floor(t + (a - t) * i)),
          (o += this.sizeOfBlackWhiteBlackRun(t, e, a, u)) - 1
        );
      }),
      (t.prototype.sizeOfBlackWhiteBlackRun = function (t, e, r, n) {
        var o = Math.abs(n - e) > Math.abs(r - t);
        if (o) {
          var i = t;
          (t = e), (e = i), (i = r), (r = n), (n = i);
        }
        for (
          var a = Math.abs(r - t),
            u = Math.abs(n - e),
            s = -a / 2,
            c = t < r ? 1 : -1,
            f = e < n ? 1 : -1,
            h = 0,
            l = r + c,
            d = t,
            p = e;
          d !== l;
          d += c
        ) {
          var g = o ? p : d,
            y = o ? d : p;
          if ((1 === h) === this.image.get(g, y)) {
            if (2 === h) return vt.distance(d, p, t, e);
            h++;
          }
          if ((s += u) > 0) {
            if (p === n) break;
            (p += f), (s -= a);
          }
        }
        return 2 === h ? vt.distance(r + c, n, t, e) : NaN;
      }),
      (t.prototype.findAlignmentInRegion = function (t, e, r, n) {
        var o = Math.floor(n * t),
          i = Math.max(0, e - o),
          a = Math.min(this.image.getWidth() - 1, e + o);
        if (a - i < 3 * t)
          throw new U('Alignment top exceeds estimated module size.');
        var u = Math.max(0, r - o),
          s = Math.min(this.image.getHeight() - 1, r + o);
        if (s - u < 3 * t)
          throw new U('Alignment bottom exceeds estimated module size.');
        return new Jr(
          this.image,
          i,
          u,
          a - i,
          s - u,
          t,
          this.resultPointCallback
        ).find();
      }),
      t
    );
  })(),
  an = (function () {
    function t() {
      this.decoder = new Zr();
    }
    return (
      (t.prototype.getDecoder = function () {
        return this.decoder;
      }),
      (t.prototype.decode = function (e, r) {
        var n, o;
        if (null != r && void 0 !== r.get(T.PURE_BARCODE)) {
          var i = t.extractPureBits(e.getBlackMatrix());
          (n = this.decoder.decodeBitMatrix(i, r)), (o = t.NO_POINTS);
        } else {
          var a = new on(e.getBlackMatrix()).detect(r);
          (n = this.decoder.decodeBitMatrix(a.getBits(), r)),
            (o = a.getPoints());
        }
        n.getOther() instanceof zr && n.getOther().applyMirroredCorrection(o);
        var u = new et(
            n.getText(),
            n.getRawBytes(),
            void 0,
            o,
            nt.QR_CODE,
            void 0
          ),
          s = n.getByteSegments();
        null !== s && u.putMetadata(it.BYTE_SEGMENTS, s);
        var c = n.getECLevel();
        return (
          null !== c && u.putMetadata(it.ERROR_CORRECTION_LEVEL, c),
          n.hasStructuredAppend() &&
            (u.putMetadata(
              it.STRUCTURED_APPEND_SEQUENCE,
              n.getStructuredAppendSequenceNumber()
            ),
            u.putMetadata(
              it.STRUCTURED_APPEND_PARITY,
              n.getStructuredAppendParity()
            )),
          u
        );
      }),
      (t.prototype.reset = function () {}),
      (t.extractPureBits = function (t) {
        var e = t.getTopLeftOnBit(),
          r = t.getBottomRightOnBit();
        if (null === e || null === r) throw new U();
        var n = this.moduleSize(e, t),
          o = e[1],
          i = r[1],
          a = e[0],
          u = r[0];
        if (a >= u || o >= i) throw new U();
        if (i - o != u - a && (u = a + (i - o)) >= t.getWidth()) throw new U();
        var s = Math.round((u - a + 1) / n),
          c = Math.round((i - o + 1) / n);
        if (s <= 0 || c <= 0) throw new U();
        if (c !== s) throw new U();
        var f = Math.floor(n / 2);
        o += f;
        var h = (a += f) + Math.floor((s - 1) * n) - u;
        if (h > 0) {
          if (h > f) throw new U();
          a -= h;
        }
        var l = o + Math.floor((c - 1) * n) - i;
        if (l > 0) {
          if (l > f) throw new U();
          o -= l;
        }
        for (var d = new x(s, c), p = 0; p < c; p++)
          for (var g = o + Math.floor(p * n), y = 0; y < s; y++)
            t.get(a + Math.floor(y * n), g) && d.set(y, p);
        return d;
      }),
      (t.moduleSize = function (t, e) {
        for (
          var r = e.getHeight(),
            n = e.getWidth(),
            o = t[0],
            i = t[1],
            a = !0,
            u = 0;
          o < n && i < r;

        ) {
          if (a !== e.get(o, i)) {
            if (5 == ++u) break;
            a = !a;
          }
          o++, i++;
        }
        if (o === n || i === r) throw new U();
        return (o - t[0]) / 7;
      }),
      (t.NO_POINTS = new Array()),
      t
    );
  })(),
  un = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  sn = (function () {
    function t() {}
    return (
      (t.prototype.PDF417Common = function () {}),
      (t.getBitCountSum = function (t) {
        return vt.sum(t);
      }),
      (t.toIntArray = function (e) {
        var r, n;
        if (null == e || !e.length) return t.EMPTY_INT_ARRAY;
        var o = new Int32Array(e.length),
          i = 0;
        try {
          for (var a = un(e), u = a.next(); !u.done; u = a.next()) {
            var s = u.value;
            o[i++] = s;
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            u && !u.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        return o;
      }),
      (t.getCodeword = function (e) {
        var r = C.binarySearch(t.SYMBOL_TABLE, 262143 & e);
        return r < 0 ? -1 : (t.CODEWORD_TABLE[r] - 1) % t.NUMBER_OF_CODEWORDS;
      }),
      (t.NUMBER_OF_CODEWORDS = 929),
      (t.MAX_CODEWORDS_IN_BARCODE = t.NUMBER_OF_CODEWORDS - 1),
      (t.MIN_ROWS_IN_BARCODE = 3),
      (t.MAX_ROWS_IN_BARCODE = 90),
      (t.MODULES_IN_CODEWORD = 17),
      (t.MODULES_IN_STOP_PATTERN = 18),
      (t.BARS_IN_MODULE = 8),
      (t.EMPTY_INT_ARRAY = new Int32Array([])),
      (t.SYMBOL_TABLE = Int32Array.from([
        66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454,
        66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654,
        66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798,
        66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936,
        66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048,
        67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350,
        67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492,
        67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692,
        67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800,
        67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960,
        67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086,
        68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364,
        68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548,
        68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708,
        68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830,
        68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996,
        69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106,
        69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272,
        69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430,
        69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666,
        69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790,
        69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918,
        69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108,
        70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412,
        70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608,
        70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776,
        70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416,
        71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584,
        71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778,
        71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902,
        71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068,
        72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180,
        72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478,
        72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668,
        72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792,
        72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936,
        72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116,
        73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234,
        73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318,
        73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420,
        73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572,
        73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916,
        73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118,
        74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270,
        74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638,
        74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812,
        74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632,
        75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736,
        75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848,
        76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438,
        77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702,
        77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922,
        77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074,
        78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268,
        78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560,
        78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768,
        78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904,
        78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392,
        79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740,
        79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894,
        79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048,
        80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190,
        80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364,
        80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632,
        80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828,
        80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936,
        80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040,
        81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160,
        81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328,
        81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460,
        81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602,
        81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734,
        81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180,
        82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352,
        82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496,
        82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830,
        82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976,
        83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552,
        83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848,
        83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028,
        84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184,
        85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776,
        85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966,
        85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256,
        88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608,
        89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980,
        89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308,
        90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512,
        90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652,
        90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912,
        90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100,
        91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360,
        91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888,
        91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100,
        92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412,
        92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424,
        93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008,
        94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156,
        94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360,
        94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526,
        94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686,
        94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844,
        94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134,
        95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280,
        95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856,
        95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120,
        96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296,
        96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388,
        96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498,
        96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632,
        96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744,
        96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008,
        97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208,
        97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358,
        97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476,
        97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666,
        97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774,
        97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926,
        97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618,
        98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932,
        98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286,
        99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462,
        99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596,
        99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780,
        99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880,
        99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998,
        1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142,
        100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396,
        100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504,
        100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620,
        100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816,
        100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988,
        101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256,
        101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362,
        101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470,
        101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580,
        101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696,
        101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938,
        101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072,
        102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214,
        102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312,
        102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534,
        102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662,
        102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850,
        102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008,
        103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312,
        103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412,
        103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048,
        104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252,
        104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412,
        104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542,
        104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652,
        104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824,
        104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990,
        104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372,
        105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564,
        105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680,
        105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860,
        105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028,
        106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174,
        106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276,
        106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414,
        106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648,
        106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776,
        106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948,
        106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104,
        107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396,
        107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502,
        107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768,
        108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292,
        108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428,
        108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592,
        108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792,
        109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144,
        110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460,
        110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686,
        110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796,
        110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908,
        110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108,
        111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372,
        111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632,
        111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224,
        112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544,
        112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836,
        112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022,
        113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140,
        113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424,
        113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686,
        113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804,
        113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932,
        113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120,
        114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242,
        114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320,
        114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484,
        114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970,
        114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250,
        115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394,
        115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494,
        115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764,
        115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896,
        115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024,
        116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156,
        116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268,
        116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364,
        116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498,
        116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574,
        116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786,
        116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892,
        116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006,
        117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180,
        117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374,
        117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568,
        117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730,
        117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848,
        117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992,
        118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210,
        118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338,
        118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430,
        118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606,
        118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738,
        118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888,
        118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006,
        119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172,
        119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278,
        119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554,
        119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686,
        119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784,
        119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328,
        120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624,
        120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776,
        120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908,
        120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038,
        121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184,
        121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356,
        121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730,
        121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890,
        121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988,
        121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116,
        122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264,
        122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460,
        122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568,
        122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712,
        122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018,
        123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154,
        123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216,
        123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412,
        123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494,
        123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590,
        123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740,
        123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944,
        123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034,
        124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142,
        124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220,
        124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380,
        124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494,
        124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616,
        124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748,
        124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854,
        124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3,
        125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072,
        125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172,
        125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318,
        125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416,
        125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702,
        125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880,
        125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998,
        126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108,
        126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236,
        126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368,
        126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540,
        126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654,
        126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760,
        126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842,
        126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178,
        127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320,
        127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400,
        127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602,
        127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714,
        127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810,
        127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922,
        127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110,
        128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220,
        128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318,
        128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464,
        128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548,
        128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634,
        128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754,
        128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868,
        128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178,
        129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332,
        129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452,
        129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614,
        129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730,
        129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836,
        129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938,
        129940, 129954, 129956, 129960, 129974, 130010,
      ])),
      (t.CODEWORD_TABLE = Int32Array.from([
        2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773,
        902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825,
        2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806,
        2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655,
        2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727,
        2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736,
        2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694,
        703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643,
        2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594,
        2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617,
        1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909,
        2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489,
        2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839,
        845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631,
        2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735,
        2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296,
        1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570,
        481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534,
        1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199,
        432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365,
        2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162,
        383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422,
        1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403,
        750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693,
        691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336,
        2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650,
        648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595,
        2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904,
        900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506,
        869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691,
        2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823,
        2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849,
        2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345,
        1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354,
        1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107,
        263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050,
        2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258,
        1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996,
        1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171,
        169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192,
        1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294,
        2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538,
        536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229,
        1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250,
        498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179,
        1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424,
        421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475,
        2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726,
        2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411,
        2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353,
        1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687,
        2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608,
        2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797,
        2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517,
        1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903,
        911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827,
        1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772,
        1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131,
        1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112,
        110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114,
        1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952,
        78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95,
        1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47,
        1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919,
        66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048,
        1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880,
        19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974,
        32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146,
        2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338,
        2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119,
        1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318,
        316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089,
        2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098,
        2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310,
        282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207,
        2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211,
        2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265,
        1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593,
        2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293,
        2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258,
        1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532,
        2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486,
        2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492,
        480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535,
        1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471,
        2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805,
        804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436,
        2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384,
        1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392,
        1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618,
        1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590,
        2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557,
        1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842,
        1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698,
        2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758,
        808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740,
        737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645,
        1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604,
        1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899,
        857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831,
        828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781,
        570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240,
        486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416,
        1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357,
        2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417,
        1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404,
        743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624,
        622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566,
        928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854,
        851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757,
        2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300,
        296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094,
        271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195,
        2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256,
        1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989,
        163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167,
        1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586,
        564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530,
        1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526,
        1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402,
        422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773,
        2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348,
        1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559,
        2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890,
        2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667,
        2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982,
        1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118,
        115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949,
        72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084,
        1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908,
        60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020,
        62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9,
        1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966,
        963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985,
        1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323,
        2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117,
        309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236,
        2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189,
        2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247,
        1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281,
        565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519,
        517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483,
        2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475,
        2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723,
        2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396,
        735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583,
        2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558,
        929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809,
        1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674,
        633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605,
        1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560,
        1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444,
        417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374,
        1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672,
        669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639,
        1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852,
        1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338,
        1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204,
        196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235,
        1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158,
        1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021,
        2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447,
        2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407,
        1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729,
        1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922,
        919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140,
        1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102,
        1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065,
        1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40,
        1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029,
        1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4,
        1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27,
        957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350,
        349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304,
        1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295,
        1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199,
        1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552,
        550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563,
        1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517,
        1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376,
        721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923,
        921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732,
        1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598,
        1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504,
        1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391,
        1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672,
        1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336,
        1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206,
        193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152,
        1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017,
        2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391,
        387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660,
        657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120,
        1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058,
        1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007,
        1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025,
        1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953,
        950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899,
        1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234,
        1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219,
        1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505,
        503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507,
        1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715,
        1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747,
        1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665,
        1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222,
        2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008,
        2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440,
        2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052,
        1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930,
        1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887,
        1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322,
        1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198,
        182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497,
        1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161,
        1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009,
        1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001,
        998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945,
        1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057,
        1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700,
      ])),
      t
    );
  })(),
  cn = (function () {
    function t(t, e) {
      (this.bits = t), (this.points = e);
    }
    return (
      (t.prototype.getBits = function () {
        return this.bits;
      }),
      (t.prototype.getPoints = function () {
        return this.points;
      }),
      t
    );
  })(),
  fn = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  hn = (function () {
    function t() {}
    return (
      (t.detectMultiple = function (e, r, n) {
        var o = e.getBlackMatrix(),
          i = t.detect(n, o);
        return (
          i.length || ((o = o.clone()).rotate180(), (i = t.detect(n, o))),
          new cn(o, i)
        );
      }),
      (t.detect = function (e, r) {
        for (
          var n, o, i = new Array(), a = 0, u = 0, s = !1;
          a < r.getHeight();

        ) {
          var c = t.findVertices(r, a, u);
          if (null != c[0] || null != c[3]) {
            if (((s = !0), i.push(c), !e)) break;
            null != c[2]
              ? ((u = Math.trunc(c[2].getX())), (a = Math.trunc(c[2].getY())))
              : ((u = Math.trunc(c[4].getX())), (a = Math.trunc(c[4].getY())));
          } else {
            if (!s) break;
            (s = !1), (u = 0);
            try {
              for (
                var f = ((n = void 0), fn(i)), h = f.next();
                !h.done;
                h = f.next()
              ) {
                var l = h.value;
                null != l[1] && (a = Math.trunc(Math.max(a, l[1].getY()))),
                  null != l[3] && (a = Math.max(a, Math.trunc(l[3].getY())));
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                h && !h.done && (o = f.return) && o.call(f);
              } finally {
                if (n) throw n.error;
              }
            }
            a += t.ROW_STEP;
          }
        }
        return i;
      }),
      (t.findVertices = function (e, r, n) {
        var o = e.getHeight(),
          i = e.getWidth(),
          a = new Array(8);
        return (
          t.copyToResult(
            a,
            t.findRowsWithPattern(e, o, i, r, n, t.START_PATTERN),
            t.INDEXES_START_PATTERN
          ),
          null != a[4] &&
            ((n = Math.trunc(a[4].getX())), (r = Math.trunc(a[4].getY()))),
          t.copyToResult(
            a,
            t.findRowsWithPattern(e, o, i, r, n, t.STOP_PATTERN),
            t.INDEXES_STOP_PATTERN
          ),
          a
        );
      }),
      (t.copyToResult = function (t, e, r) {
        for (var n = 0; n < r.length; n++) t[r[n]] = e[n];
      }),
      (t.findRowsWithPattern = function (e, r, n, o, i, a) {
        for (
          var u = new Array(4), s = !1, c = new Int32Array(a.length);
          o < r;
          o += t.ROW_STEP
        ) {
          if (null != (d = t.findGuardPattern(e, i, o, n, !1, a, c))) {
            for (; o > 0; ) {
              if (null == (l = t.findGuardPattern(e, i, --o, n, !1, a, c))) {
                o++;
                break;
              }
              d = l;
            }
            (u[0] = new At(d[0], o)), (u[1] = new At(d[1], o)), (s = !0);
            break;
          }
        }
        var f = o + 1;
        if (s) {
          for (
            var h = 0,
              l = Int32Array.from([
                Math.trunc(u[0].getX()),
                Math.trunc(u[1].getX()),
              ]);
            f < r;
            f++
          ) {
            var d;
            if (
              null != (d = t.findGuardPattern(e, l[0], f, n, !1, a, c)) &&
              Math.abs(l[0] - d[0]) < t.MAX_PATTERN_DRIFT &&
              Math.abs(l[1] - d[1]) < t.MAX_PATTERN_DRIFT
            )
              (l = d), (h = 0);
            else {
              if (h > t.SKIPPED_ROW_COUNT_MAX) break;
              h++;
            }
          }
          (f -= h + 1), (u[2] = new At(l[0], f)), (u[3] = new At(l[1], f));
        }
        return f - o < t.BARCODE_MIN_HEIGHT && C.fill(u, null), u;
      }),
      (t.findGuardPattern = function (e, r, n, o, i, a, u) {
        C.fillWithin(u, 0, u.length, 0);
        for (
          var s = r, c = 0;
          e.get(s, n) && s > 0 && c++ < t.MAX_PIXEL_DRIFT;

        )
          s--;
        for (var f = s, h = 0, l = a.length, d = i; f < o; f++) {
          if (e.get(f, n) !== d) u[h]++;
          else {
            if (h === l - 1) {
              if (
                t.patternMatchVariance(u, a, t.MAX_INDIVIDUAL_VARIANCE) <
                t.MAX_AVG_VARIANCE
              )
                return new Int32Array([s, f]);
              (s += u[0] + u[1]),
                w.arraycopy(u, 2, u, 0, h - 1),
                (u[h - 1] = 0),
                (u[h] = 0),
                h--;
            } else h++;
            (u[h] = 1), (d = !d);
          }
        }
        return h === l - 1 &&
          t.patternMatchVariance(u, a, t.MAX_INDIVIDUAL_VARIANCE) <
            t.MAX_AVG_VARIANCE
          ? new Int32Array([s, f - 1])
          : null;
      }),
      (t.patternMatchVariance = function (t, e, r) {
        for (var n = t.length, o = 0, i = 0, a = 0; a < n; a++)
          (o += t[a]), (i += e[a]);
        if (o < i) return 1 / 0;
        var u = o / i;
        r *= u;
        for (var s = 0, c = 0; c < n; c++) {
          var f = t[c],
            h = e[c] * u,
            l = f > h ? f - h : h - f;
          if (l > r) return 1 / 0;
          s += l;
        }
        return s / o;
      }),
      (t.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5])),
      (t.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3])),
      (t.MAX_AVG_VARIANCE = 0.42),
      (t.MAX_INDIVIDUAL_VARIANCE = 0.8),
      (t.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3])),
      (t.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1])),
      (t.MAX_PIXEL_DRIFT = 3),
      (t.MAX_PATTERN_DRIFT = 5),
      (t.SKIPPED_ROW_COUNT_MAX = 25),
      (t.ROW_STEP = 5),
      (t.BARCODE_MIN_HEIGHT = 10),
      t
    );
  })(),
  ln = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  dn = (function () {
    function t(t, e) {
      if (0 === e.length) throw new l();
      this.field = t;
      var r = e.length;
      if (r > 1 && 0 === e[0]) {
        for (var n = 1; n < r && 0 === e[n]; ) n++;
        n === r
          ? (this.coefficients = new Int32Array([0]))
          : ((this.coefficients = new Int32Array(r - n)),
            w.arraycopy(e, n, this.coefficients, 0, this.coefficients.length));
      } else this.coefficients = e;
    }
    return (
      (t.prototype.getCoefficients = function () {
        return this.coefficients;
      }),
      (t.prototype.getDegree = function () {
        return this.coefficients.length - 1;
      }),
      (t.prototype.isZero = function () {
        return 0 === this.coefficients[0];
      }),
      (t.prototype.getCoefficient = function (t) {
        return this.coefficients[this.coefficients.length - 1 - t];
      }),
      (t.prototype.evaluateAt = function (t) {
        var e, r;
        if (0 === t) return this.getCoefficient(0);
        if (1 === t) {
          var n = 0;
          try {
            for (
              var o = ln(this.coefficients), i = o.next();
              !i.done;
              i = o.next()
            ) {
              var a = i.value;
              n = this.field.add(n, a);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              i && !i.done && (r = o.return) && r.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          return n;
        }
        for (
          var u = this.coefficients[0], s = this.coefficients.length, c = 1;
          c < s;
          c++
        )
          u = this.field.add(this.field.multiply(t, u), this.coefficients[c]);
        return u;
      }),
      (t.prototype.add = function (e) {
        if (!this.field.equals(e.field))
          throw new l('ModulusPolys do not have same ModulusGF field');
        if (this.isZero()) return e;
        if (e.isZero()) return this;
        var r = this.coefficients,
          n = e.coefficients;
        if (r.length > n.length) {
          var o = r;
          (r = n), (n = o);
        }
        var i = new Int32Array(n.length),
          a = n.length - r.length;
        w.arraycopy(n, 0, i, 0, a);
        for (var u = a; u < n.length; u++)
          i[u] = this.field.add(r[u - a], n[u]);
        return new t(this.field, i);
      }),
      (t.prototype.subtract = function (t) {
        if (!this.field.equals(t.field))
          throw new l('ModulusPolys do not have same ModulusGF field');
        return t.isZero() ? this : this.add(t.negative());
      }),
      (t.prototype.multiply = function (e) {
        return e instanceof t ? this.multiplyOther(e) : this.multiplyScalar(e);
      }),
      (t.prototype.multiplyOther = function (e) {
        if (!this.field.equals(e.field))
          throw new l('ModulusPolys do not have same ModulusGF field');
        if (this.isZero() || e.isZero())
          return new t(this.field, new Int32Array([0]));
        for (
          var r = this.coefficients,
            n = r.length,
            o = e.coefficients,
            i = o.length,
            a = new Int32Array(n + i - 1),
            u = 0;
          u < n;
          u++
        )
          for (var s = r[u], c = 0; c < i; c++)
            a[u + c] = this.field.add(a[u + c], this.field.multiply(s, o[c]));
        return new t(this.field, a);
      }),
      (t.prototype.negative = function () {
        for (
          var e = this.coefficients.length, r = new Int32Array(e), n = 0;
          n < e;
          n++
        )
          r[n] = this.field.subtract(0, this.coefficients[n]);
        return new t(this.field, r);
      }),
      (t.prototype.multiplyScalar = function (e) {
        if (0 === e) return new t(this.field, new Int32Array([0]));
        if (1 === e) return this;
        for (
          var r = this.coefficients.length, n = new Int32Array(r), o = 0;
          o < r;
          o++
        )
          n[o] = this.field.multiply(this.coefficients[o], e);
        return new t(this.field, n);
      }),
      (t.prototype.multiplyByMonomial = function (e, r) {
        if (e < 0) throw new l();
        if (0 === r) return new t(this.field, new Int32Array([0]));
        for (
          var n = this.coefficients.length, o = new Int32Array(n + e), i = 0;
          i < n;
          i++
        )
          o[i] = this.field.multiply(this.coefficients[i], r);
        return new t(this.field, o);
      }),
      (t.prototype.toString = function () {
        for (var t = new k(), e = this.getDegree(); e >= 0; e--) {
          var r = this.getCoefficient(e);
          0 !== r &&
            (r < 0
              ? (t.append(' - '), (r = -r))
              : t.length() > 0 && t.append(' + '),
            (0 !== e && 1 === r) || t.append(r),
            0 !== e &&
              (1 === e ? t.append('x') : (t.append('x^'), t.append(e))));
        }
        return t.toString();
      }),
      t
    );
  })(),
  pn = (function () {
    function t() {}
    return (
      (t.prototype.add = function (t, e) {
        return (t + e) % this.modulus;
      }),
      (t.prototype.subtract = function (t, e) {
        return (this.modulus + t - e) % this.modulus;
      }),
      (t.prototype.exp = function (t) {
        return this.expTable[t];
      }),
      (t.prototype.log = function (t) {
        if (0 === t) throw new l();
        return this.logTable[t];
      }),
      (t.prototype.inverse = function (t) {
        if (0 === t) throw new ft();
        return this.expTable[this.modulus - this.logTable[t] - 1];
      }),
      (t.prototype.multiply = function (t, e) {
        return 0 === t || 0 === e
          ? 0
          : this.expTable[
              (this.logTable[t] + this.logTable[e]) % (this.modulus - 1)
            ];
      }),
      (t.prototype.getSize = function () {
        return this.modulus;
      }),
      (t.prototype.equals = function (t) {
        return t === this;
      }),
      t
    );
  })(),
  gn = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  yn = (function (t) {
    function e(e, r) {
      var n = t.call(this) || this;
      (n.modulus = e),
        (n.expTable = new Int32Array(e)),
        (n.logTable = new Int32Array(e));
      for (var o = 1, i = 0; i < e; i++) (n.expTable[i] = o), (o = (o * r) % e);
      for (i = 0; i < e - 1; i++) n.logTable[n.expTable[i]] = i;
      return (
        (n.zero = new dn(n, new Int32Array([0]))),
        (n.one = new dn(n, new Int32Array([1]))),
        n
      );
    }
    return (
      gn(e, t),
      (e.prototype.getZero = function () {
        return this.zero;
      }),
      (e.prototype.getOne = function () {
        return this.one;
      }),
      (e.prototype.buildMonomial = function (t, e) {
        if (t < 0) throw new l();
        if (0 === e) return this.zero;
        var r = new Int32Array(t + 1);
        return (r[0] = e), new dn(this, r);
      }),
      (e.PDF417_GF = new e(sn.NUMBER_OF_CODEWORDS, 3)),
      e
    );
  })(pn),
  wn = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  _n = (function () {
    function t() {
      this.field = yn.PDF417_GF;
    }
    return (
      (t.prototype.decode = function (t, e, r) {
        for (
          var n,
            o,
            i = new dn(this.field, t),
            a = new Int32Array(e),
            u = !1,
            s = e;
          s > 0;
          s--
        ) {
          var c = i.evaluateAt(this.field.exp(s));
          (a[e - s] = c), 0 !== c && (u = !0);
        }
        if (!u) return 0;
        var f = this.field.getOne();
        if (null != r)
          try {
            for (var h = wn(r), l = h.next(); !l.done; l = h.next()) {
              var d = l.value,
                p = this.field.exp(t.length - 1 - d),
                y = new dn(
                  this.field,
                  new Int32Array([this.field.subtract(0, p), 1])
                );
              f = f.multiply(y);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              l && !l.done && (o = h.return) && o.call(h);
            } finally {
              if (n) throw n.error;
            }
          }
        var w = new dn(this.field, a),
          _ = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), w, e),
          v = _[0],
          m = _[1],
          A = this.findErrorLocations(v),
          E = this.findErrorMagnitudes(m, v, A);
        for (s = 0; s < A.length; s++) {
          var C = t.length - 1 - this.field.log(A[s]);
          if (C < 0) throw g.getChecksumInstance();
          t[C] = this.field.subtract(t[C], E[s]);
        }
        return A.length;
      }),
      (t.prototype.runEuclideanAlgorithm = function (t, e, r) {
        if (t.getDegree() < e.getDegree()) {
          var n = t;
          (t = e), (e = n);
        }
        for (
          var o = t, i = e, a = this.field.getZero(), u = this.field.getOne();
          i.getDegree() >= Math.round(r / 2);

        ) {
          var s = o,
            c = a;
          if (((a = u), (o = i).isZero())) throw g.getChecksumInstance();
          i = s;
          for (
            var f = this.field.getZero(),
              h = o.getCoefficient(o.getDegree()),
              l = this.field.inverse(h);
            i.getDegree() >= o.getDegree() && !i.isZero();

          ) {
            var d = i.getDegree() - o.getDegree(),
              p = this.field.multiply(i.getCoefficient(i.getDegree()), l);
            (f = f.add(this.field.buildMonomial(d, p))),
              (i = i.subtract(o.multiplyByMonomial(d, p)));
          }
          u = f.multiply(a).subtract(c).negative();
        }
        var y = u.getCoefficient(0);
        if (0 === y) throw g.getChecksumInstance();
        var w = this.field.inverse(y);
        return [u.multiply(w), i.multiply(w)];
      }),
      (t.prototype.findErrorLocations = function (t) {
        for (
          var e = t.getDegree(), r = new Int32Array(e), n = 0, o = 1;
          o < this.field.getSize() && n < e;
          o++
        )
          0 === t.evaluateAt(o) && ((r[n] = this.field.inverse(o)), n++);
        if (n !== e) throw g.getChecksumInstance();
        return r;
      }),
      (t.prototype.findErrorMagnitudes = function (t, e, r) {
        for (var n = e.getDegree(), o = new Int32Array(n), i = 1; i <= n; i++)
          o[n - i] = this.field.multiply(i, e.getCoefficient(i));
        var a = new dn(this.field, o),
          u = r.length,
          s = new Int32Array(u);
        for (i = 0; i < u; i++) {
          var c = this.field.inverse(r[i]),
            f = this.field.subtract(0, t.evaluateAt(c)),
            h = this.field.inverse(a.evaluateAt(c));
          s[i] = this.field.multiply(f, h);
        }
        return s;
      }),
      t
    );
  })(),
  vn = (function () {
    function t(e, r, n, o, i) {
      e instanceof t
        ? this.constructor_2(e)
        : this.constructor_1(e, r, n, o, i);
    }
    return (
      (t.prototype.constructor_1 = function (t, e, r, n, o) {
        var i = null == e || null == r,
          a = null == n || null == o;
        if (i && a) throw new U();
        i
          ? ((e = new At(0, n.getY())), (r = new At(0, o.getY())))
          : a &&
            ((n = new At(t.getWidth() - 1, e.getY())),
            (o = new At(t.getWidth() - 1, r.getY()))),
          (this.image = t),
          (this.topLeft = e),
          (this.bottomLeft = r),
          (this.topRight = n),
          (this.bottomRight = o),
          (this.minX = Math.trunc(Math.min(e.getX(), r.getX()))),
          (this.maxX = Math.trunc(Math.max(n.getX(), o.getX()))),
          (this.minY = Math.trunc(Math.min(e.getY(), n.getY()))),
          (this.maxY = Math.trunc(Math.max(r.getY(), o.getY())));
      }),
      (t.prototype.constructor_2 = function (t) {
        (this.image = t.image),
          (this.topLeft = t.getTopLeft()),
          (this.bottomLeft = t.getBottomLeft()),
          (this.topRight = t.getTopRight()),
          (this.bottomRight = t.getBottomRight()),
          (this.minX = t.getMinX()),
          (this.maxX = t.getMaxX()),
          (this.minY = t.getMinY()),
          (this.maxY = t.getMaxY());
      }),
      (t.merge = function (e, r) {
        return null == e
          ? r
          : null == r
          ? e
          : new t(e.image, e.topLeft, e.bottomLeft, r.topRight, r.bottomRight);
      }),
      (t.prototype.addMissingRows = function (e, r, n) {
        var o = this.topLeft,
          i = this.bottomLeft,
          a = this.topRight,
          u = this.bottomRight;
        if (e > 0) {
          var s = n ? this.topLeft : this.topRight,
            c = Math.trunc(s.getY() - e);
          c < 0 && (c = 0);
          var f = new At(s.getX(), c);
          n ? (o = f) : (a = f);
        }
        if (r > 0) {
          var h = n ? this.bottomLeft : this.bottomRight,
            l = Math.trunc(h.getY() + r);
          l >= this.image.getHeight() && (l = this.image.getHeight() - 1);
          var d = new At(h.getX(), l);
          n ? (i = d) : (u = d);
        }
        return new t(this.image, o, i, a, u);
      }),
      (t.prototype.getMinX = function () {
        return this.minX;
      }),
      (t.prototype.getMaxX = function () {
        return this.maxX;
      }),
      (t.prototype.getMinY = function () {
        return this.minY;
      }),
      (t.prototype.getMaxY = function () {
        return this.maxY;
      }),
      (t.prototype.getTopLeft = function () {
        return this.topLeft;
      }),
      (t.prototype.getTopRight = function () {
        return this.topRight;
      }),
      (t.prototype.getBottomLeft = function () {
        return this.bottomLeft;
      }),
      (t.prototype.getBottomRight = function () {
        return this.bottomRight;
      }),
      t
    );
  })(),
  mn = (function () {
    function t(t, e, r, n) {
      (this.columnCount = t),
        (this.errorCorrectionLevel = n),
        (this.rowCountUpperPart = e),
        (this.rowCountLowerPart = r),
        (this.rowCount = e + r);
    }
    return (
      (t.prototype.getColumnCount = function () {
        return this.columnCount;
      }),
      (t.prototype.getErrorCorrectionLevel = function () {
        return this.errorCorrectionLevel;
      }),
      (t.prototype.getRowCount = function () {
        return this.rowCount;
      }),
      (t.prototype.getRowCountUpperPart = function () {
        return this.rowCountUpperPart;
      }),
      (t.prototype.getRowCountLowerPart = function () {
        return this.rowCountLowerPart;
      }),
      t
    );
  })(),
  An = (function () {
    function t() {
      this.buffer = '';
    }
    return (
      (t.form = function (t, e) {
        var r = -1;
        return t.replace(
          /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g,
          function (t, n, o, i, a, u) {
            if ('%%' === t) return '%';
            if (void 0 !== e[++r]) {
              t = i ? parseInt(i.substr(1)) : void 0;
              var s,
                c = a ? parseInt(a.substr(1)) : void 0;
              switch (u) {
                case 's':
                  s = e[r];
                  break;
                case 'c':
                  s = e[r][0];
                  break;
                case 'f':
                  s = parseFloat(e[r]).toFixed(t);
                  break;
                case 'p':
                  s = parseFloat(e[r]).toPrecision(t);
                  break;
                case 'e':
                  s = parseFloat(e[r]).toExponential(t);
                  break;
                case 'x':
                  s = parseInt(e[r]).toString(c || 16);
                  break;
                case 'd':
                  s = parseFloat(
                    parseInt(e[r], c || 10).toPrecision(t)
                  ).toFixed(0);
              }
              s = 'object' == typeof s ? JSON.stringify(s) : (+s).toString(c);
              for (
                var f = parseInt(o), h = o && o[0] + '' == '0' ? '0' : ' ';
                s.length < f;

              )
                s = void 0 !== n ? s + h : h + s;
              return s;
            }
          }
        );
      }),
      (t.prototype.format = function (e) {
        for (var r = [], n = 1; n < arguments.length; n++)
          r[n - 1] = arguments[n];
        this.buffer += t.form(e, r);
      }),
      (t.prototype.toString = function () {
        return this.buffer;
      }),
      t
    );
  })(),
  En = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Cn = (function () {
    function t(t) {
      (this.boundingBox = new vn(t)),
        (this.codewords = new Array(t.getMaxY() - t.getMinY() + 1));
    }
    return (
      (t.prototype.getCodewordNearby = function (e) {
        var r = this.getCodeword(e);
        if (null != r) return r;
        for (var n = 1; n < t.MAX_NEARBY_DISTANCE; n++) {
          var o = this.imageRowToCodewordIndex(e) - n;
          if (o >= 0 && null != (r = this.codewords[o])) return r;
          if (
            (o = this.imageRowToCodewordIndex(e) + n) < this.codewords.length &&
            null != (r = this.codewords[o])
          )
            return r;
        }
        return null;
      }),
      (t.prototype.imageRowToCodewordIndex = function (t) {
        return t - this.boundingBox.getMinY();
      }),
      (t.prototype.setCodeword = function (t, e) {
        this.codewords[this.imageRowToCodewordIndex(t)] = e;
      }),
      (t.prototype.getCodeword = function (t) {
        return this.codewords[this.imageRowToCodewordIndex(t)];
      }),
      (t.prototype.getBoundingBox = function () {
        return this.boundingBox;
      }),
      (t.prototype.getCodewords = function () {
        return this.codewords;
      }),
      (t.prototype.toString = function () {
        var t,
          e,
          r = new An(),
          n = 0;
        try {
          for (
            var o = En(this.codewords), i = o.next();
            !i.done;
            i = o.next()
          ) {
            var a = i.value;
            null != a
              ? r.format('%3d: %3d|%3d%n', n++, a.getRowNumber(), a.getValue())
              : r.format('%3d:    |   %n', n++);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (e = o.return) && e.call(o);
          } finally {
            if (t) throw t.error;
          }
        }
        return r.toString();
      }),
      (t.MAX_NEARBY_DISTANCE = 5),
      t
    );
  })(),
  In = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Sn = function (t, e) {
    var r = 'function' == typeof Symbol && t[Symbol.iterator];
    if (!r) return t;
    var n,
      o,
      i = r.call(t),
      a = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
        a.push(n.value);
    } catch (t) {
      o = { error: t };
    } finally {
      try {
        n && !n.done && (r = i.return) && r.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return a;
  },
  On = (function () {
    function t() {
      this.values = new Map();
    }
    return (
      (t.prototype.setValue = function (t) {
        t = Math.trunc(t);
        var e = this.values.get(t);
        null == e && (e = 0), e++, this.values.set(t, e);
      }),
      (t.prototype.getValue = function () {
        var t,
          e,
          r = -1,
          n = new Array(),
          o = function (t, e) {
            var o = function () {
                return t;
              },
              i = function () {
                return e;
              };
            i() > r
              ? ((r = i()), (n = []).push(o()))
              : i() === r && n.push(o());
          };
        try {
          for (
            var i = In(this.values.entries()), a = i.next();
            !a.done;
            a = i.next()
          ) {
            var u = Sn(a.value, 2);
            o(u[0], u[1]);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            a && !a.done && (e = i.return) && e.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
        return sn.toIntArray(n);
      }),
      (t.prototype.getConfidence = function (t) {
        return this.values.get(t);
      }),
      t
    );
  })(),
  Tn = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  bn = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Rn = (function (t) {
    function e(e, r) {
      var n = t.call(this, e) || this;
      return (n._isLeft = r), n;
    }
    return (
      Tn(e, t),
      (e.prototype.setRowNumbers = function () {
        var t, e;
        try {
          for (
            var r = bn(this.getCodewords()), n = r.next();
            !n.done;
            n = r.next()
          ) {
            var o = n.value;
            null != o && o.setRowNumberAsRowIndicatorColumn();
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            n && !n.done && (e = r.return) && e.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (e.prototype.adjustCompleteIndicatorColumnRowNumbers = function (t) {
        var e = this.getCodewords();
        this.setRowNumbers(), this.removeIncorrectCodewords(e, t);
        for (
          var r = this.getBoundingBox(),
            n = this._isLeft ? r.getTopLeft() : r.getTopRight(),
            o = this._isLeft ? r.getBottomLeft() : r.getBottomRight(),
            i = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
            a = this.imageRowToCodewordIndex(Math.trunc(o.getY())),
            u = -1,
            s = 1,
            c = 0,
            f = i;
          f < a;
          f++
        )
          if (null != e[f]) {
            var h = e[f],
              l = h.getRowNumber() - u;
            if (0 === l) c++;
            else if (1 === l)
              (s = Math.max(s, c)), (c = 1), (u = h.getRowNumber());
            else if (l < 0 || h.getRowNumber() >= t.getRowCount() || l > f)
              e[f] = null;
            else {
              for (
                var d = void 0, p = (d = s > 2 ? (s - 2) * l : l) >= f, g = 1;
                g <= d && !p;
                g++
              )
                p = null != e[f - g];
              p ? (e[f] = null) : ((u = h.getRowNumber()), (c = 1));
            }
          }
      }),
      (e.prototype.getRowHeights = function () {
        var t,
          e,
          r = this.getBarcodeMetadata();
        if (null == r) return null;
        this.adjustIncompleteIndicatorColumnRowNumbers(r);
        var n = new Int32Array(r.getRowCount());
        try {
          for (
            var o = bn(this.getCodewords()), i = o.next();
            !i.done;
            i = o.next()
          ) {
            var a = i.value;
            if (null != a) {
              var u = a.getRowNumber();
              if (u >= n.length) continue;
              n[u]++;
            }
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (e = o.return) && e.call(o);
          } finally {
            if (t) throw t.error;
          }
        }
        return n;
      }),
      (e.prototype.adjustIncompleteIndicatorColumnRowNumbers = function (t) {
        for (
          var e = this.getBoundingBox(),
            r = this._isLeft ? e.getTopLeft() : e.getTopRight(),
            n = this._isLeft ? e.getBottomLeft() : e.getBottomRight(),
            o = this.imageRowToCodewordIndex(Math.trunc(r.getY())),
            i = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
            a = this.getCodewords(),
            u = -1,
            s = o;
          s < i;
          s++
        )
          if (null != a[s]) {
            var c = a[s];
            c.setRowNumberAsRowIndicatorColumn();
            var f = c.getRowNumber() - u;
            0 === f ||
              (1 === f
                ? (u = c.getRowNumber())
                : c.getRowNumber() >= t.getRowCount()
                ? (a[s] = null)
                : (u = c.getRowNumber()));
          }
      }),
      (e.prototype.getBarcodeMetadata = function () {
        var t,
          e,
          r = this.getCodewords(),
          n = new On(),
          o = new On(),
          i = new On(),
          a = new On();
        try {
          for (var u = bn(r), s = u.next(); !s.done; s = u.next()) {
            var c = s.value;
            if (null != c) {
              c.setRowNumberAsRowIndicatorColumn();
              var f = c.getValue() % 30,
                h = c.getRowNumber();
              switch ((this._isLeft || (h += 2), h % 3)) {
                case 0:
                  o.setValue(3 * f + 1);
                  break;
                case 1:
                  a.setValue(f / 3), i.setValue(f % 3);
                  break;
                case 2:
                  n.setValue(f + 1);
              }
            }
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            s && !s.done && (e = u.return) && e.call(u);
          } finally {
            if (t) throw t.error;
          }
        }
        if (
          0 === n.getValue().length ||
          0 === o.getValue().length ||
          0 === i.getValue().length ||
          0 === a.getValue().length ||
          n.getValue()[0] < 1 ||
          o.getValue()[0] + i.getValue()[0] < sn.MIN_ROWS_IN_BARCODE ||
          o.getValue()[0] + i.getValue()[0] > sn.MAX_ROWS_IN_BARCODE
        )
          return null;
        var l = new mn(
          n.getValue()[0],
          o.getValue()[0],
          i.getValue()[0],
          a.getValue()[0]
        );
        return this.removeIncorrectCodewords(r, l), l;
      }),
      (e.prototype.removeIncorrectCodewords = function (t, e) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          if (null != t[r]) {
            var o = n.getValue() % 30,
              i = n.getRowNumber();
            if (i > e.getRowCount()) t[r] = null;
            else
              switch ((this._isLeft || (i += 2), i % 3)) {
                case 0:
                  3 * o + 1 !== e.getRowCountUpperPart() && (t[r] = null);
                  break;
                case 1:
                  (Math.trunc(o / 3) === e.getErrorCorrectionLevel() &&
                    o % 3 === e.getRowCountLowerPart()) ||
                    (t[r] = null);
                  break;
                case 2:
                  o + 1 !== e.getColumnCount() && (t[r] = null);
              }
          }
        }
      }),
      (e.prototype.isLeft = function () {
        return this._isLeft;
      }),
      (e.prototype.toString = function () {
        return (
          'IsLeft: ' + this._isLeft + '\n' + t.prototype.toString.call(this)
        );
      }),
      e
    );
  })(Cn),
  Nn = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Dn = (function () {
    function t(t, e) {
      (this.ADJUST_ROW_NUMBER_SKIP = 2),
        (this.barcodeMetadata = t),
        (this.barcodeColumnCount = t.getColumnCount()),
        (this.boundingBox = e),
        (this.detectionResultColumns = new Array(this.barcodeColumnCount + 2));
    }
    return (
      (t.prototype.getDetectionResultColumns = function () {
        this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]),
          this.adjustIndicatorColumnRowNumbers(
            this.detectionResultColumns[this.barcodeColumnCount + 1]
          );
        var t,
          e = sn.MAX_CODEWORDS_IN_BARCODE;
        do {
          (t = e), (e = this.adjustRowNumbersAndGetCount());
        } while (e > 0 && e < t);
        return this.detectionResultColumns;
      }),
      (t.prototype.adjustIndicatorColumnRowNumbers = function (t) {
        null != t &&
          t.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
      }),
      (t.prototype.adjustRowNumbersAndGetCount = function () {
        var t = this.adjustRowNumbersByRow();
        if (0 === t) return 0;
        for (var e = 1; e < this.barcodeColumnCount + 1; e++)
          for (
            var r = this.detectionResultColumns[e].getCodewords(), n = 0;
            n < r.length;
            n++
          )
            null != r[n] &&
              (r[n].hasValidRowNumber() || this.adjustRowNumbers(e, n, r));
        return t;
      }),
      (t.prototype.adjustRowNumbersByRow = function () {
        return (
          this.adjustRowNumbersFromBothRI(),
          this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI()
        );
      }),
      (t.prototype.adjustRowNumbersFromBothRI = function () {
        if (
          null != this.detectionResultColumns[0] &&
          null != this.detectionResultColumns[this.barcodeColumnCount + 1]
        )
          for (
            var t = this.detectionResultColumns[0].getCodewords(),
              e =
                this.detectionResultColumns[
                  this.barcodeColumnCount + 1
                ].getCodewords(),
              r = 0;
            r < t.length;
            r++
          )
            if (
              null != t[r] &&
              null != e[r] &&
              t[r].getRowNumber() === e[r].getRowNumber()
            )
              for (var n = 1; n <= this.barcodeColumnCount; n++) {
                var o = this.detectionResultColumns[n].getCodewords()[r];
                null != o &&
                  (o.setRowNumber(t[r].getRowNumber()),
                  o.hasValidRowNumber() ||
                    (this.detectionResultColumns[n].getCodewords()[r] = null));
              }
      }),
      (t.prototype.adjustRowNumbersFromRRI = function () {
        if (null == this.detectionResultColumns[this.barcodeColumnCount + 1])
          return 0;
        for (
          var e = 0,
            r =
              this.detectionResultColumns[
                this.barcodeColumnCount + 1
              ].getCodewords(),
            n = 0;
          n < r.length;
          n++
        )
          if (null != r[n])
            for (
              var o = r[n].getRowNumber(),
                i = 0,
                a = this.barcodeColumnCount + 1;
              a > 0 && i < this.ADJUST_ROW_NUMBER_SKIP;
              a--
            ) {
              var u = this.detectionResultColumns[a].getCodewords()[n];
              null != u &&
                ((i = t.adjustRowNumberIfValid(o, i, u)),
                u.hasValidRowNumber() || e++);
            }
        return e;
      }),
      (t.prototype.adjustRowNumbersFromLRI = function () {
        if (null == this.detectionResultColumns[0]) return 0;
        for (
          var e = 0, r = this.detectionResultColumns[0].getCodewords(), n = 0;
          n < r.length;
          n++
        )
          if (null != r[n])
            for (
              var o = r[n].getRowNumber(), i = 0, a = 1;
              a < this.barcodeColumnCount + 1 &&
              i < this.ADJUST_ROW_NUMBER_SKIP;
              a++
            ) {
              var u = this.detectionResultColumns[a].getCodewords()[n];
              null != u &&
                ((i = t.adjustRowNumberIfValid(o, i, u)),
                u.hasValidRowNumber() || e++);
            }
        return e;
      }),
      (t.adjustRowNumberIfValid = function (t, e, r) {
        return (
          null == r ||
            r.hasValidRowNumber() ||
            (r.isValidRowNumber(t) ? (r.setRowNumber(t), (e = 0)) : ++e),
          e
        );
      }),
      (t.prototype.adjustRowNumbers = function (e, r, n) {
        var o,
          i,
          a = n[r],
          u = this.detectionResultColumns[e - 1].getCodewords(),
          s = u;
        null != this.detectionResultColumns[e + 1] &&
          (s = this.detectionResultColumns[e + 1].getCodewords());
        var c = new Array(14);
        (c[2] = u[r]),
          (c[3] = s[r]),
          r > 0 && ((c[0] = n[r - 1]), (c[4] = u[r - 1]), (c[5] = s[r - 1])),
          r > 1 && ((c[8] = n[r - 2]), (c[10] = u[r - 2]), (c[11] = s[r - 2])),
          r < n.length - 1 &&
            ((c[1] = n[r + 1]), (c[6] = u[r + 1]), (c[7] = s[r + 1])),
          r < n.length - 2 &&
            ((c[9] = n[r + 2]), (c[12] = u[r + 2]), (c[13] = s[r + 2]));
        try {
          for (var f = Nn(c), h = f.next(); !h.done; h = f.next()) {
            var l = h.value;
            if (t.adjustRowNumber(a, l)) return;
          }
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            h && !h.done && (i = f.return) && i.call(f);
          } finally {
            if (o) throw o.error;
          }
        }
      }),
      (t.adjustRowNumber = function (t, e) {
        return (
          null != e &&
          !(!e.hasValidRowNumber() || e.getBucket() !== t.getBucket()) &&
          (t.setRowNumber(e.getRowNumber()), !0)
        );
      }),
      (t.prototype.getBarcodeColumnCount = function () {
        return this.barcodeColumnCount;
      }),
      (t.prototype.getBarcodeRowCount = function () {
        return this.barcodeMetadata.getRowCount();
      }),
      (t.prototype.getBarcodeECLevel = function () {
        return this.barcodeMetadata.getErrorCorrectionLevel();
      }),
      (t.prototype.setBoundingBox = function (t) {
        this.boundingBox = t;
      }),
      (t.prototype.getBoundingBox = function () {
        return this.boundingBox;
      }),
      (t.prototype.setDetectionResultColumn = function (t, e) {
        this.detectionResultColumns[t] = e;
      }),
      (t.prototype.getDetectionResultColumn = function (t) {
        return this.detectionResultColumns[t];
      }),
      (t.prototype.toString = function () {
        var t = this.detectionResultColumns[0];
        null == t &&
          (t = this.detectionResultColumns[this.barcodeColumnCount + 1]);
        for (var e = new An(), r = 0; r < t.getCodewords().length; r++) {
          e.format('CW %3d:', r);
          for (var n = 0; n < this.barcodeColumnCount + 2; n++)
            if (null != this.detectionResultColumns[n]) {
              var o = this.detectionResultColumns[n].getCodewords()[r];
              null != o
                ? e.format(' %3d|%3d', o.getRowNumber(), o.getValue())
                : e.format('    |   ');
            } else e.format('    |   ');
          e.format('%n');
        }
        return e.toString();
      }),
      t
    );
  })(),
  Pn = (function () {
    function t(e, r, n, o) {
      (this.rowNumber = t.BARCODE_ROW_UNKNOWN),
        (this.startX = Math.trunc(e)),
        (this.endX = Math.trunc(r)),
        (this.bucket = Math.trunc(n)),
        (this.value = Math.trunc(o));
    }
    return (
      (t.prototype.hasValidRowNumber = function () {
        return this.isValidRowNumber(this.rowNumber);
      }),
      (t.prototype.isValidRowNumber = function (e) {
        return e !== t.BARCODE_ROW_UNKNOWN && this.bucket === (e % 3) * 3;
      }),
      (t.prototype.setRowNumberAsRowIndicatorColumn = function () {
        this.rowNumber = Math.trunc(
          3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3)
        );
      }),
      (t.prototype.getWidth = function () {
        return this.endX - this.startX;
      }),
      (t.prototype.getStartX = function () {
        return this.startX;
      }),
      (t.prototype.getEndX = function () {
        return this.endX;
      }),
      (t.prototype.getBucket = function () {
        return this.bucket;
      }),
      (t.prototype.getValue = function () {
        return this.value;
      }),
      (t.prototype.getRowNumber = function () {
        return this.rowNumber;
      }),
      (t.prototype.setRowNumber = function (t) {
        this.rowNumber = t;
      }),
      (t.prototype.toString = function () {
        return this.rowNumber + '|' + this.value;
      }),
      (t.BARCODE_ROW_UNKNOWN = -1),
      t
    );
  })(),
  Mn = (function () {
    function t() {}
    return (
      (t.initialize = function () {
        for (var e = 0; e < sn.SYMBOL_TABLE.length; e++)
          for (
            var r = sn.SYMBOL_TABLE[e], n = 1 & r, o = 0;
            o < sn.BARS_IN_MODULE;
            o++
          ) {
            for (var i = 0; (1 & r) === n; ) (i += 1), (r >>= 1);
            (n = 1 & r),
              t.RATIOS_TABLE[e] ||
                (t.RATIOS_TABLE[e] = new Array(sn.BARS_IN_MODULE)),
              (t.RATIOS_TABLE[e][sn.BARS_IN_MODULE - o - 1] = Math.fround(
                i / sn.MODULES_IN_CODEWORD
              ));
          }
        this.bSymbolTableReady = !0;
      }),
      (t.getDecodedValue = function (e) {
        var r = t.getDecodedCodewordValue(t.sampleBitCounts(e));
        return -1 !== r ? r : t.getClosestDecodedValue(e);
      }),
      (t.sampleBitCounts = function (t) {
        for (
          var e = vt.sum(t),
            r = new Int32Array(sn.BARS_IN_MODULE),
            n = 0,
            o = 0,
            i = 0;
          i < sn.MODULES_IN_CODEWORD;
          i++
        ) {
          var a =
            e / (2 * sn.MODULES_IN_CODEWORD) + (i * e) / sn.MODULES_IN_CODEWORD;
          o + t[n] <= a && ((o += t[n]), n++), r[n]++;
        }
        return r;
      }),
      (t.getDecodedCodewordValue = function (e) {
        var r = t.getBitValue(e);
        return -1 === sn.getCodeword(r) ? -1 : r;
      }),
      (t.getBitValue = function (t) {
        for (var e = 0, r = 0; r < t.length; r++)
          for (var n = 0; n < t[r]; n++) e = (e << 1) | (r % 2 == 0 ? 1 : 0);
        return Math.trunc(e);
      }),
      (t.getClosestDecodedValue = function (e) {
        var r = vt.sum(e),
          n = new Array(sn.BARS_IN_MODULE);
        if (r > 1)
          for (var o = 0; o < n.length; o++) n[o] = Math.fround(e[o] / r);
        var i = mt.MAX_VALUE,
          a = -1;
        this.bSymbolTableReady || t.initialize();
        for (var u = 0; u < t.RATIOS_TABLE.length; u++) {
          for (
            var s = 0, c = t.RATIOS_TABLE[u], f = 0;
            f < sn.BARS_IN_MODULE;
            f++
          ) {
            var h = Math.fround(c[f] - n[f]);
            if ((s += Math.fround(h * h)) >= i) break;
          }
          s < i && ((i = s), (a = sn.SYMBOL_TABLE[u]));
        }
        return a;
      }),
      (t.bSymbolTableReady = !1),
      (t.RATIOS_TABLE = new Array(sn.SYMBOL_TABLE.length).map(function (t) {
        return new Array(sn.BARS_IN_MODULE);
      })),
      t
    );
  })(),
  Bn = (function () {
    function t() {
      (this.segmentCount = -1),
        (this.fileSize = -1),
        (this.timestamp = -1),
        (this.checksum = -1);
    }
    return (
      (t.prototype.getSegmentIndex = function () {
        return this.segmentIndex;
      }),
      (t.prototype.setSegmentIndex = function (t) {
        this.segmentIndex = t;
      }),
      (t.prototype.getFileId = function () {
        return this.fileId;
      }),
      (t.prototype.setFileId = function (t) {
        this.fileId = t;
      }),
      (t.prototype.getOptionalData = function () {
        return this.optionalData;
      }),
      (t.prototype.setOptionalData = function (t) {
        this.optionalData = t;
      }),
      (t.prototype.isLastSegment = function () {
        return this.lastSegment;
      }),
      (t.prototype.setLastSegment = function (t) {
        this.lastSegment = t;
      }),
      (t.prototype.getSegmentCount = function () {
        return this.segmentCount;
      }),
      (t.prototype.setSegmentCount = function (t) {
        this.segmentCount = t;
      }),
      (t.prototype.getSender = function () {
        return this.sender || null;
      }),
      (t.prototype.setSender = function (t) {
        this.sender = t;
      }),
      (t.prototype.getAddressee = function () {
        return this.addressee || null;
      }),
      (t.prototype.setAddressee = function (t) {
        this.addressee = t;
      }),
      (t.prototype.getFileName = function () {
        return this.fileName;
      }),
      (t.prototype.setFileName = function (t) {
        this.fileName = t;
      }),
      (t.prototype.getFileSize = function () {
        return this.fileSize;
      }),
      (t.prototype.setFileSize = function (t) {
        this.fileSize = t;
      }),
      (t.prototype.getChecksum = function () {
        return this.checksum;
      }),
      (t.prototype.setChecksum = function (t) {
        this.checksum = t;
      }),
      (t.prototype.getTimestamp = function () {
        return this.timestamp;
      }),
      (t.prototype.setTimestamp = function (t) {
        this.timestamp = t;
      }),
      t
    );
  })(),
  Ln = (function () {
    function t() {}
    return (
      (t.parseLong = function (t, e) {
        return void 0 === e && (e = void 0), parseInt(t, e);
      }),
      t
    );
  })(),
  Fn = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  kn = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return Fn(e, t), (e.kind = 'NullPointerException'), e;
  })(s),
  xn = (function () {
    function t() {}
    return (
      (t.prototype.writeBytes = function (t) {
        this.writeBytesOffset(t, 0, t.length);
      }),
      (t.prototype.writeBytesOffset = function (t, e, r) {
        if (null == t) throw new kn();
        if (e < 0 || e > t.length || r < 0 || e + r > t.length || e + r < 0)
          throw new v();
        if (0 !== r) for (var n = 0; n < r; n++) this.write(t[e + n]);
      }),
      (t.prototype.flush = function () {}),
      (t.prototype.close = function () {}),
      t
    );
  })(),
  Vn = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Un = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return Vn(e, t), e;
  })(s),
  Hn = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Gn = (function (t) {
    function e(e) {
      void 0 === e && (e = 32);
      var r = t.call(this) || this;
      if (((r.count = 0), e < 0)) throw new l('Negative initial size: ' + e);
      return (r.buf = new Uint8Array(e)), r;
    }
    return (
      Hn(e, t),
      (e.prototype.ensureCapacity = function (t) {
        t - this.buf.length > 0 && this.grow(t);
      }),
      (e.prototype.grow = function (t) {
        var e = this.buf.length << 1;
        if ((e - t < 0 && (e = t), e < 0)) {
          if (t < 0) throw new Un();
          e = I.MAX_VALUE;
        }
        this.buf = C.copyOfUint8Array(this.buf, e);
      }),
      (e.prototype.write = function (t) {
        this.ensureCapacity(this.count + 1),
          (this.buf[this.count] = t),
          (this.count += 1);
      }),
      (e.prototype.writeBytesOffset = function (t, e, r) {
        if (e < 0 || e > t.length || r < 0 || e + r - t.length > 0)
          throw new v();
        this.ensureCapacity(this.count + r),
          w.arraycopy(t, e, this.buf, this.count, r),
          (this.count += r);
      }),
      (e.prototype.writeTo = function (t) {
        t.writeBytesOffset(this.buf, 0, this.count);
      }),
      (e.prototype.reset = function () {
        this.count = 0;
      }),
      (e.prototype.toByteArray = function () {
        return C.copyOfUint8Array(this.buf, this.count);
      }),
      (e.prototype.size = function () {
        return this.count;
      }),
      (e.prototype.toString = function (t) {
        return t
          ? 'string' == typeof t
            ? this.toString_string(t)
            : this.toString_number(t)
          : this.toString_void();
      }),
      (e.prototype.toString_void = function () {
        return new String(this.buf).toString();
      }),
      (e.prototype.toString_string = function (t) {
        return new String(this.buf).toString();
      }),
      (e.prototype.toString_number = function (t) {
        return new String(this.buf).toString();
      }),
      (e.prototype.close = function () {}),
      e
    );
  })(xn);
function Xn() {
  if ('undefined' != typeof window) return window.BigInt || null;
  if ('undefined' != typeof global) return global.BigInt || null;
  if ('undefined' != typeof self) return self.BigInt || null;
  throw new Error("Can't search globals for BigInt!");
}
function Wn(t) {
  if ((void 0 === Xr && (Xr = Xn()), null === Xr))
    throw new Error('BigInt is not supported!');
  return Xr(t);
}
!(function (t) {
  (t[(t.ALPHA = 0)] = 'ALPHA'),
    (t[(t.LOWER = 1)] = 'LOWER'),
    (t[(t.MIXED = 2)] = 'MIXED'),
    (t[(t.PUNCT = 3)] = 'PUNCT'),
    (t[(t.ALPHA_SHIFT = 4)] = 'ALPHA_SHIFT'),
    (t[(t.PUNCT_SHIFT = 5)] = 'PUNCT_SHIFT');
})(Gr || (Gr = {}));
var jn = (function () {
    function t() {}
    return (
      (t.decode = function (e, r) {
        var n = new k(''),
          o = P.ISO8859_1;
        n.enableDecoding(o);
        for (var i = 1, a = e[i++], u = new Bn(); i < e[0]; ) {
          switch (a) {
            case t.TEXT_COMPACTION_MODE_LATCH:
              i = t.textCompaction(e, i, n);
              break;
            case t.BYTE_COMPACTION_MODE_LATCH:
            case t.BYTE_COMPACTION_MODE_LATCH_6:
              i = t.byteCompaction(a, e, o, i, n);
              break;
            case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              n.append(e[i++]);
              break;
            case t.NUMERIC_COMPACTION_MODE_LATCH:
              i = t.numericCompaction(e, i, n);
              break;
            case t.ECI_CHARSET:
              P.getCharacterSetECIByValue(e[i++]);
              break;
            case t.ECI_GENERAL_PURPOSE:
              i += 2;
              break;
            case t.ECI_USER_DEFINED:
              i++;
              break;
            case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              i = t.decodeMacroBlock(e, i, u);
              break;
            case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case t.MACRO_PDF417_TERMINATOR:
              throw new R();
            default:
              i--, (i = t.textCompaction(e, i, n));
          }
          if (!(i < e.length)) throw R.getFormatInstance();
          a = e[i++];
        }
        if (0 === n.length()) throw R.getFormatInstance();
        var s = new at(null, n.toString(), null, r);
        return s.setOther(u), s;
      }),
      (t.decodeMacroBlock = function (e, r, n) {
        if (r + t.NUMBER_OF_SEQUENCE_CODEWORDS > e[0])
          throw R.getFormatInstance();
        for (
          var o = new Int32Array(t.NUMBER_OF_SEQUENCE_CODEWORDS), i = 0;
          i < t.NUMBER_OF_SEQUENCE_CODEWORDS;
          i++, r++
        )
          o[i] = e[r];
        n.setSegmentIndex(
          I.parseInt(t.decodeBase900toBase10(o, t.NUMBER_OF_SEQUENCE_CODEWORDS))
        );
        var a = new k();
        (r = t.textCompaction(e, r, a)), n.setFileId(a.toString());
        var u = -1;
        for (
          e[r] === t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (u = r + 1);
          r < e[0];

        )
          switch (e[r]) {
            case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              switch (e[++r]) {
                case t.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                  var s = new k();
                  (r = t.textCompaction(e, r + 1, s)),
                    n.setFileName(s.toString());
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                  var c = new k();
                  (r = t.textCompaction(e, r + 1, c)),
                    n.setSender(c.toString());
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                  var f = new k();
                  (r = t.textCompaction(e, r + 1, f)),
                    n.setAddressee(f.toString());
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                  var h = new k();
                  (r = t.numericCompaction(e, r + 1, h)),
                    n.setSegmentCount(I.parseInt(h.toString()));
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                  var l = new k();
                  (r = t.numericCompaction(e, r + 1, l)),
                    n.setTimestamp(Ln.parseLong(l.toString()));
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                  var d = new k();
                  (r = t.numericCompaction(e, r + 1, d)),
                    n.setChecksum(I.parseInt(d.toString()));
                  break;
                case t.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                  var p = new k();
                  (r = t.numericCompaction(e, r + 1, p)),
                    n.setFileSize(Ln.parseLong(p.toString()));
                  break;
                default:
                  throw R.getFormatInstance();
              }
              break;
            case t.MACRO_PDF417_TERMINATOR:
              r++, n.setLastSegment(!0);
              break;
            default:
              throw R.getFormatInstance();
          }
        if (-1 !== u) {
          var g = r - u;
          n.isLastSegment() && g--,
            n.setOptionalData(C.copyOfRange(e, u, u + g));
        }
        return r;
      }),
      (t.textCompaction = function (e, r, n) {
        for (
          var o = new Int32Array(2 * (e[0] - r)),
            i = new Int32Array(2 * (e[0] - r)),
            a = 0,
            u = !1;
          r < e[0] && !u;

        ) {
          var s = e[r++];
          if (s < t.TEXT_COMPACTION_MODE_LATCH)
            (o[a] = s / 30), (o[a + 1] = s % 30), (a += 2);
          else
            switch (s) {
              case t.TEXT_COMPACTION_MODE_LATCH:
                o[a++] = t.TEXT_COMPACTION_MODE_LATCH;
                break;
              case t.BYTE_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH_6:
              case t.NUMERIC_COMPACTION_MODE_LATCH:
              case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case t.MACRO_PDF417_TERMINATOR:
                r--, (u = !0);
                break;
              case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                (o[a] = t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE),
                  (s = e[r++]),
                  (i[a] = s),
                  a++;
            }
        }
        return t.decodeTextCompaction(o, i, a, n), r;
      }),
      (t.decodeTextCompaction = function (e, r, n, o) {
        for (var i = Gr.ALPHA, a = Gr.ALPHA, u = 0; u < n; ) {
          var s = e[u],
            c = '';
          switch (i) {
            case Gr.ALPHA:
              if (s < 26) c = String.fromCharCode(65 + s);
              else
                switch (s) {
                  case 26:
                    c = ' ';
                    break;
                  case t.LL:
                    i = Gr.LOWER;
                    break;
                  case t.ML:
                    i = Gr.MIXED;
                    break;
                  case t.PS:
                    (a = i), (i = Gr.PUNCT_SHIFT);
                    break;
                  case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    o.append(r[u]);
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    i = Gr.ALPHA;
                }
              break;
            case Gr.LOWER:
              if (s < 26) c = String.fromCharCode(97 + s);
              else
                switch (s) {
                  case 26:
                    c = ' ';
                    break;
                  case t.AS:
                    (a = i), (i = Gr.ALPHA_SHIFT);
                    break;
                  case t.ML:
                    i = Gr.MIXED;
                    break;
                  case t.PS:
                    (a = i), (i = Gr.PUNCT_SHIFT);
                    break;
                  case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    o.append(r[u]);
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    i = Gr.ALPHA;
                }
              break;
            case Gr.MIXED:
              if (s < t.PL) c = t.MIXED_CHARS[s];
              else
                switch (s) {
                  case t.PL:
                    i = Gr.PUNCT;
                    break;
                  case 26:
                    c = ' ';
                    break;
                  case t.LL:
                    i = Gr.LOWER;
                    break;
                  case t.AL:
                    i = Gr.ALPHA;
                    break;
                  case t.PS:
                    (a = i), (i = Gr.PUNCT_SHIFT);
                    break;
                  case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    o.append(r[u]);
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    i = Gr.ALPHA;
                }
              break;
            case Gr.PUNCT:
              if (s < t.PAL) c = t.PUNCT_CHARS[s];
              else
                switch (s) {
                  case t.PAL:
                    i = Gr.ALPHA;
                    break;
                  case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    o.append(r[u]);
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    i = Gr.ALPHA;
                }
              break;
            case Gr.ALPHA_SHIFT:
              if (((i = a), s < 26)) c = String.fromCharCode(65 + s);
              else
                switch (s) {
                  case 26:
                    c = ' ';
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    i = Gr.ALPHA;
                }
              break;
            case Gr.PUNCT_SHIFT:
              if (((i = a), s < t.PAL)) c = t.PUNCT_CHARS[s];
              else
                switch (s) {
                  case t.PAL:
                    i = Gr.ALPHA;
                    break;
                  case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                    o.append(r[u]);
                    break;
                  case t.TEXT_COMPACTION_MODE_LATCH:
                    i = Gr.ALPHA;
                }
          }
          '' !== c && o.append(c), u++;
        }
      }),
      (t.byteCompaction = function (e, r, n, o, i) {
        var a = new Gn(),
          u = 0,
          s = 0,
          c = !1;
        switch (e) {
          case t.BYTE_COMPACTION_MODE_LATCH:
            for (var f = new Int32Array(6), h = r[o++]; o < r[0] && !c; )
              switch (((f[u++] = h), (s = 900 * s + h), (h = r[o++]))) {
                case t.TEXT_COMPACTION_MODE_LATCH:
                case t.BYTE_COMPACTION_MODE_LATCH:
                case t.NUMERIC_COMPACTION_MODE_LATCH:
                case t.BYTE_COMPACTION_MODE_LATCH_6:
                case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case t.MACRO_PDF417_TERMINATOR:
                  o--, (c = !0);
                  break;
                default:
                  if (u % 5 == 0 && u > 0) {
                    for (var l = 0; l < 6; ++l)
                      a.write(Number(Wn(s) >> Wn(8 * (5 - l))));
                    (s = 0), (u = 0);
                  }
              }
            o === r[0] && h < t.TEXT_COMPACTION_MODE_LATCH && (f[u++] = h);
            for (var d = 0; d < u; d++) a.write(f[d]);
            break;
          case t.BYTE_COMPACTION_MODE_LATCH_6:
            for (; o < r[0] && !c; ) {
              var p = r[o++];
              if (p < t.TEXT_COMPACTION_MODE_LATCH) u++, (s = 900 * s + p);
              else
                switch (p) {
                  case t.TEXT_COMPACTION_MODE_LATCH:
                  case t.BYTE_COMPACTION_MODE_LATCH:
                  case t.NUMERIC_COMPACTION_MODE_LATCH:
                  case t.BYTE_COMPACTION_MODE_LATCH_6:
                  case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                  case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                  case t.MACRO_PDF417_TERMINATOR:
                    o--, (c = !0);
                }
              if (u % 5 == 0 && u > 0) {
                for (l = 0; l < 6; ++l)
                  a.write(Number(Wn(s) >> Wn(8 * (5 - l))));
                (s = 0), (u = 0);
              }
            }
        }
        return i.append(L.decode(a.toByteArray(), n)), o;
      }),
      (t.numericCompaction = function (e, r, n) {
        for (
          var o = 0, i = !1, a = new Int32Array(t.MAX_NUMERIC_CODEWORDS);
          r < e[0] && !i;

        ) {
          var u = e[r++];
          if ((r === e[0] && (i = !0), u < t.TEXT_COMPACTION_MODE_LATCH))
            (a[o] = u), o++;
          else
            switch (u) {
              case t.TEXT_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH_6:
              case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case t.MACRO_PDF417_TERMINATOR:
                r--, (i = !0);
            }
          (o % t.MAX_NUMERIC_CODEWORDS == 0 ||
            u === t.NUMERIC_COMPACTION_MODE_LATCH ||
            i) &&
            o > 0 &&
            (n.append(t.decodeBase900toBase10(a, o)), (o = 0));
        }
        return r;
      }),
      (t.decodeBase900toBase10 = function (e, r) {
        for (var n = Wn(0), o = 0; o < r; o++)
          n += t.EXP900[r - o - 1] * Wn(e[o]);
        var i = n.toString();
        if ('1' !== i.charAt(0)) throw new R();
        return i.substring(1);
      }),
      (t.TEXT_COMPACTION_MODE_LATCH = 900),
      (t.BYTE_COMPACTION_MODE_LATCH = 901),
      (t.NUMERIC_COMPACTION_MODE_LATCH = 902),
      (t.BYTE_COMPACTION_MODE_LATCH_6 = 924),
      (t.ECI_USER_DEFINED = 925),
      (t.ECI_GENERAL_PURPOSE = 926),
      (t.ECI_CHARSET = 927),
      (t.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928),
      (t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923),
      (t.MACRO_PDF417_TERMINATOR = 922),
      (t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913),
      (t.MAX_NUMERIC_CODEWORDS = 15),
      (t.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0),
      (t.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1),
      (t.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2),
      (t.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3),
      (t.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4),
      (t.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5),
      (t.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6),
      (t.PL = 25),
      (t.LL = 27),
      (t.AS = 27),
      (t.ML = 28),
      (t.AL = 28),
      (t.PS = 29),
      (t.PAL = 29),
      (t.PUNCT_CHARS = ';<>@[\\]_`~!\r\t,:\n-.$/"|*()?{}\''),
      (t.MIXED_CHARS = '0123456789&\r\t,:#-.$/+%*=^'),
      (t.EXP900 = Xn()
        ? (function () {
            var t = [];
            t[0] = Wn(1);
            var e = Wn(900);
            t[1] = e;
            for (var r = 2; r < 16; r++) t[r] = t[r - 1] * e;
            return t;
          })()
        : []),
      (t.NUMBER_OF_SEQUENCE_CODEWORDS = 2),
      t
    );
  })(),
  zn = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Yn = (function () {
    function t() {}
    return (
      (t.decode = function (e, r, n, o, i, a, u) {
        for (
          var s, c = new vn(e, r, n, o, i), f = null, h = null, l = !0;
          ;
          l = !1
        ) {
          if (
            (null != r && (f = t.getRowIndicatorColumn(e, c, r, !0, a, u)),
            null != o && (h = t.getRowIndicatorColumn(e, c, o, !1, a, u)),
            null == (s = t.merge(f, h)))
          )
            throw U.getNotFoundInstance();
          var d = s.getBoundingBox();
          if (
            !l ||
            null == d ||
            !(d.getMinY() < c.getMinY() || d.getMaxY() > c.getMaxY())
          )
            break;
          c = d;
        }
        s.setBoundingBox(c);
        var p = s.getBarcodeColumnCount() + 1;
        s.setDetectionResultColumn(0, f), s.setDetectionResultColumn(p, h);
        for (var g = null != f, y = 1; y <= p; y++) {
          var w = g ? y : p - y;
          if (void 0 === s.getDetectionResultColumn(w)) {
            var _ = void 0;
            (_ = 0 === w || w === p ? new Rn(c, 0 === w) : new Cn(c)),
              s.setDetectionResultColumn(w, _);
            for (var v = -1, m = v, A = c.getMinY(); A <= c.getMaxY(); A++) {
              if ((v = t.getStartColumn(s, w, A, g)) < 0 || v > c.getMaxX()) {
                if (-1 === m) continue;
                v = m;
              }
              var E = t.detectCodeword(
                e,
                c.getMinX(),
                c.getMaxX(),
                g,
                v,
                A,
                a,
                u
              );
              null != E &&
                (_.setCodeword(A, E),
                (m = v),
                (a = Math.min(a, E.getWidth())),
                (u = Math.max(u, E.getWidth())));
            }
          }
        }
        return t.createDecoderResult(s);
      }),
      (t.merge = function (e, r) {
        if (null == e && null == r) return null;
        var n = t.getBarcodeMetadata(e, r);
        if (null == n) return null;
        var o = vn.merge(t.adjustBoundingBox(e), t.adjustBoundingBox(r));
        return new Dn(n, o);
      }),
      (t.adjustBoundingBox = function (e) {
        var r, n;
        if (null == e) return null;
        var o = e.getRowHeights();
        if (null == o) return null;
        var i = t.getMax(o),
          a = 0;
        try {
          for (var u = zn(o), s = u.next(); !s.done; s = u.next()) {
            var c = s.value;
            if (((a += i - c), c > 0)) break;
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            s && !s.done && (n = u.return) && n.call(u);
          } finally {
            if (r) throw r.error;
          }
        }
        for (var f = e.getCodewords(), h = 0; a > 0 && null == f[h]; h++) a--;
        var l = 0;
        for (h = o.length - 1; h >= 0 && ((l += i - o[h]), !(o[h] > 0)); h--);
        for (h = f.length - 1; l > 0 && null == f[h]; h--) l--;
        return e.getBoundingBox().addMissingRows(a, l, e.isLeft());
      }),
      (t.getMax = function (t) {
        var e,
          r,
          n = -1;
        try {
          for (var o = zn(t), i = o.next(); !i.done; i = o.next()) {
            var a = i.value;
            n = Math.max(n, a);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return n;
      }),
      (t.getBarcodeMetadata = function (t, e) {
        var r, n;
        return null == t || null == (r = t.getBarcodeMetadata())
          ? null == e
            ? null
            : e.getBarcodeMetadata()
          : null == e || null == (n = e.getBarcodeMetadata())
          ? r
          : r.getColumnCount() !== n.getColumnCount() &&
            r.getErrorCorrectionLevel() !== n.getErrorCorrectionLevel() &&
            r.getRowCount() !== n.getRowCount()
          ? null
          : r;
      }),
      (t.getRowIndicatorColumn = function (e, r, n, o, i, a) {
        for (var u = new Rn(r, o), s = 0; s < 2; s++)
          for (
            var c = 0 === s ? 1 : -1,
              f = Math.trunc(Math.trunc(n.getX())),
              h = Math.trunc(Math.trunc(n.getY()));
            h <= r.getMaxY() && h >= r.getMinY();
            h += c
          ) {
            var l = t.detectCodeword(e, 0, e.getWidth(), o, f, h, i, a);
            null != l &&
              (u.setCodeword(h, l), (f = o ? l.getStartX() : l.getEndX()));
          }
        return u;
      }),
      (t.adjustCodewordCount = function (e, r) {
        var n = r[0][1],
          o = n.getValue(),
          i =
            e.getBarcodeColumnCount() * e.getBarcodeRowCount() -
            t.getNumberOfECCodeWords(e.getBarcodeECLevel());
        if (0 === o.length) {
          if (i < 1 || i > sn.MAX_CODEWORDS_IN_BARCODE)
            throw U.getNotFoundInstance();
          n.setValue(i);
        } else o[0] !== i && n.setValue(i);
      }),
      (t.createDecoderResult = function (e) {
        var r = t.createBarcodeMatrix(e);
        t.adjustCodewordCount(e, r);
        for (
          var n = new Array(),
            o = new Int32Array(
              e.getBarcodeRowCount() * e.getBarcodeColumnCount()
            ),
            i = [],
            a = new Array(),
            u = 0;
          u < e.getBarcodeRowCount();
          u++
        )
          for (var s = 0; s < e.getBarcodeColumnCount(); s++) {
            var c = r[u][s + 1].getValue(),
              f = u * e.getBarcodeColumnCount() + s;
            0 === c.length
              ? n.push(f)
              : 1 === c.length
              ? (o[f] = c[0])
              : (a.push(f), i.push(c));
          }
        for (var h = new Array(i.length), l = 0; l < h.length; l++) h[l] = i[l];
        return t.createDecoderResultFromAmbiguousValues(
          e.getBarcodeECLevel(),
          o,
          sn.toIntArray(n),
          sn.toIntArray(a),
          h
        );
      }),
      (t.createDecoderResultFromAmbiguousValues = function (e, r, n, o, i) {
        for (var a = new Int32Array(o.length), u = 100; u-- > 0; ) {
          for (var s = 0; s < a.length; s++) r[o[s]] = i[s][a[s]];
          try {
            return t.decodeCodewords(r, e, n);
          } catch (t) {
            if (!(t instanceof g)) throw t;
          }
          if (0 === a.length) throw g.getChecksumInstance();
          for (s = 0; s < a.length; s++) {
            if (a[s] < i[s].length - 1) {
              a[s]++;
              break;
            }
            if (((a[s] = 0), s === a.length - 1)) throw g.getChecksumInstance();
          }
        }
        throw g.getChecksumInstance();
      }),
      (t.createBarcodeMatrix = function (t) {
        for (
          var e,
            r,
            n,
            o,
            i = Array.from({ length: t.getBarcodeRowCount() }, function () {
              return new Array(t.getBarcodeColumnCount() + 2);
            }),
            a = 0;
          a < i.length;
          a++
        )
          for (var u = 0; u < i[a].length; u++) i[a][u] = new On();
        var s = 0;
        try {
          for (
            var c = zn(t.getDetectionResultColumns()), f = c.next();
            !f.done;
            f = c.next()
          ) {
            var h = f.value;
            if (null != h)
              try {
                for (
                  var l = ((n = void 0), zn(h.getCodewords())), d = l.next();
                  !d.done;
                  d = l.next()
                ) {
                  var p = d.value;
                  if (null != p) {
                    var g = p.getRowNumber();
                    if (g >= 0) {
                      if (g >= i.length) continue;
                      i[g][s].setValue(p.getValue());
                    }
                  }
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  d && !d.done && (o = l.return) && o.call(l);
                } finally {
                  if (n) throw n.error;
                }
              }
            s++;
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            f && !f.done && (r = c.return) && r.call(c);
          } finally {
            if (e) throw e.error;
          }
        }
        return i;
      }),
      (t.isValidBarcodeColumn = function (t, e) {
        return e >= 0 && e <= t.getBarcodeColumnCount() + 1;
      }),
      (t.getStartColumn = function (e, r, n, o) {
        var i,
          a,
          u = o ? 1 : -1,
          s = null;
        if (
          (t.isValidBarcodeColumn(e, r - u) &&
            (s = e.getDetectionResultColumn(r - u).getCodeword(n)),
          null != s)
        )
          return o ? s.getEndX() : s.getStartX();
        if (null != (s = e.getDetectionResultColumn(r).getCodewordNearby(n)))
          return o ? s.getStartX() : s.getEndX();
        if (
          (t.isValidBarcodeColumn(e, r - u) &&
            (s = e.getDetectionResultColumn(r - u).getCodewordNearby(n)),
          null != s)
        )
          return o ? s.getEndX() : s.getStartX();
        for (var c = 0; t.isValidBarcodeColumn(e, r - u); ) {
          r -= u;
          try {
            for (
              var f =
                  ((i = void 0),
                  zn(e.getDetectionResultColumn(r).getCodewords())),
                h = f.next();
              !h.done;
              h = f.next()
            ) {
              var l = h.value;
              if (null != l)
                return (
                  (o ? l.getEndX() : l.getStartX()) +
                  u * c * (l.getEndX() - l.getStartX())
                );
            }
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              h && !h.done && (a = f.return) && a.call(f);
            } finally {
              if (i) throw i.error;
            }
          }
          c++;
        }
        return o ? e.getBoundingBox().getMinX() : e.getBoundingBox().getMaxX();
      }),
      (t.detectCodeword = function (e, r, n, o, i, a, u, s) {
        i = t.adjustCodewordStartColumn(e, r, n, o, i, a);
        var c,
          f = t.getModuleBitCount(e, r, n, o, i, a);
        if (null == f) return null;
        var h = vt.sum(f);
        if (o) c = i + h;
        else {
          for (var l = 0; l < f.length / 2; l++) {
            var d = f[l];
            (f[l] = f[f.length - 1 - l]), (f[f.length - 1 - l] = d);
          }
          i = (c = i) - h;
        }
        if (!t.checkCodewordSkew(h, u, s)) return null;
        var p = Mn.getDecodedValue(f),
          g = sn.getCodeword(p);
        return -1 === g ? null : new Pn(i, c, t.getCodewordBucketNumber(p), g);
      }),
      (t.getModuleBitCount = function (t, e, r, n, o, i) {
        for (
          var a = o, u = new Int32Array(8), s = 0, c = n ? 1 : -1, f = n;
          (n ? a < r : a >= e) && s < u.length;

        )
          t.get(a, i) === f ? (u[s]++, (a += c)) : (s++, (f = !f));
        return s === u.length || (a === (n ? r : e) && s === u.length - 1)
          ? u
          : null;
      }),
      (t.getNumberOfECCodeWords = function (t) {
        return 2 << t;
      }),
      (t.adjustCodewordStartColumn = function (e, r, n, o, i, a) {
        for (var u = i, s = o ? -1 : 1, c = 0; c < 2; c++) {
          for (; (o ? u >= r : u < n) && o === e.get(u, a); ) {
            if (Math.abs(i - u) > t.CODEWORD_SKEW_SIZE) return i;
            u += s;
          }
          (s = -s), (o = !o);
        }
        return u;
      }),
      (t.checkCodewordSkew = function (e, r, n) {
        return r - t.CODEWORD_SKEW_SIZE <= e && e <= n + t.CODEWORD_SKEW_SIZE;
      }),
      (t.decodeCodewords = function (e, r, n) {
        if (0 === e.length) throw R.getFormatInstance();
        var o = 1 << (r + 1),
          i = t.correctErrors(e, n, o);
        t.verifyCodewordCount(e, o);
        var a = jn.decode(e, '' + r);
        return a.setErrorsCorrected(i), a.setErasures(n.length), a;
      }),
      (t.correctErrors = function (e, r, n) {
        if (
          (null != r && r.length > n / 2 + t.MAX_ERRORS) ||
          n < 0 ||
          n > t.MAX_EC_CODEWORDS
        )
          throw g.getChecksumInstance();
        return t.errorCorrection.decode(e, n, r);
      }),
      (t.verifyCodewordCount = function (t, e) {
        if (t.length < 4) throw R.getFormatInstance();
        var r = t[0];
        if (r > t.length) throw R.getFormatInstance();
        if (0 === r) {
          if (!(e < t.length)) throw R.getFormatInstance();
          t[0] = t.length - e;
        }
      }),
      (t.getBitCountForCodeword = function (t) {
        for (
          var e = new Int32Array(8), r = 0, n = e.length - 1;
          !((1 & t) !== r && ((r = 1 & t), --n < 0));

        )
          e[n]++, (t >>= 1);
        return e;
      }),
      (t.getCodewordBucketNumber = function (t) {
        return t instanceof Int32Array
          ? this.getCodewordBucketNumber_Int32Array(t)
          : this.getCodewordBucketNumber_number(t);
      }),
      (t.getCodewordBucketNumber_number = function (e) {
        return t.getCodewordBucketNumber(t.getBitCountForCodeword(e));
      }),
      (t.getCodewordBucketNumber_Int32Array = function (t) {
        return (t[0] - t[2] + t[4] - t[6] + 9) % 9;
      }),
      (t.toString = function (t) {
        for (var e = new An(), r = 0; r < t.length; r++) {
          e.format('Row %2d: ', r);
          for (var n = 0; n < t[r].length; n++) {
            var o = t[r][n];
            0 === o.getValue().length
              ? e.format('        ', null)
              : e.format(
                  '%4d(%2d)',
                  o.getValue()[0],
                  o.getConfidence(o.getValue()[0])
                );
          }
          e.format('%n');
        }
        return e.toString();
      }),
      (t.CODEWORD_SKEW_SIZE = 2),
      (t.MAX_ERRORS = 3),
      (t.MAX_EC_CODEWORDS = 512),
      (t.errorCorrection = new _n()),
      t
    );
  })(),
  Zn = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Kn = (function () {
    function t() {}
    return (
      (t.prototype.decode = function (e, r) {
        void 0 === r && (r = null);
        var n = t.decode(e, r, !1);
        if (null == n || 0 === n.length || null == n[0])
          throw U.getNotFoundInstance();
        return n[0];
      }),
      (t.prototype.decodeMultiple = function (e, r) {
        void 0 === r && (r = null);
        try {
          return t.decode(e, r, !0);
        } catch (t) {
          if (t instanceof R || t instanceof g) throw U.getNotFoundInstance();
          throw t;
        }
      }),
      (t.decode = function (e, r, n) {
        var o,
          i,
          a = new Array(),
          u = hn.detectMultiple(e, r, n);
        try {
          for (var s = Zn(u.getPoints()), c = s.next(); !c.done; c = s.next()) {
            var f = c.value,
              h = Yn.decode(
                u.getBits(),
                f[4],
                f[5],
                f[6],
                f[7],
                t.getMinCodewordWidth(f),
                t.getMaxCodewordWidth(f)
              ),
              l = new et(h.getText(), h.getRawBytes(), void 0, f, nt.PDF_417);
            l.putMetadata(it.ERROR_CORRECTION_LEVEL, h.getECLevel());
            var d = h.getOther();
            null != d && l.putMetadata(it.PDF417_EXTRA_METADATA, d), a.push(l);
          }
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            c && !c.done && (i = s.return) && i.call(s);
          } finally {
            if (o) throw o.error;
          }
        }
        return a.map(function (t) {
          return t;
        });
      }),
      (t.getMaxWidth = function (t, e) {
        return null == t || null == e
          ? 0
          : Math.trunc(Math.abs(t.getX() - e.getX()));
      }),
      (t.getMinWidth = function (t, e) {
        return null == t || null == e
          ? I.MAX_VALUE
          : Math.trunc(Math.abs(t.getX() - e.getX()));
      }),
      (t.getMaxCodewordWidth = function (e) {
        return Math.floor(
          Math.max(
            Math.max(
              t.getMaxWidth(e[0], e[4]),
              (t.getMaxWidth(e[6], e[2]) * sn.MODULES_IN_CODEWORD) /
                sn.MODULES_IN_STOP_PATTERN
            ),
            Math.max(
              t.getMaxWidth(e[1], e[5]),
              (t.getMaxWidth(e[7], e[3]) * sn.MODULES_IN_CODEWORD) /
                sn.MODULES_IN_STOP_PATTERN
            )
          )
        );
      }),
      (t.getMinCodewordWidth = function (e) {
        return Math.floor(
          Math.min(
            Math.min(
              t.getMinWidth(e[0], e[4]),
              (t.getMinWidth(e[6], e[2]) * sn.MODULES_IN_CODEWORD) /
                sn.MODULES_IN_STOP_PATTERN
            ),
            Math.min(
              t.getMinWidth(e[1], e[5]),
              (t.getMinWidth(e[7], e[3]) * sn.MODULES_IN_CODEWORD) /
                sn.MODULES_IN_STOP_PATTERN
            )
          )
        );
      }),
      (t.prototype.reset = function () {}),
      t
    );
  })(),
  qn = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Qn = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return qn(e, t), (e.kind = 'ReaderException'), e;
  })(s),
  Jn = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  $n = (function () {
    function t() {}
    return (
      (t.prototype.decode = function (t, e) {
        return this.setHints(e), this.decodeInternal(t);
      }),
      (t.prototype.decodeWithState = function (t) {
        return (
          (null !== this.readers && void 0 !== this.readers) ||
            this.setHints(null),
          this.decodeInternal(t)
        );
      }),
      (t.prototype.setHints = function (t) {
        this.hints = t;
        var e = null != t && void 0 !== t.get(T.TRY_HARDER),
          r = null == t ? null : t.get(T.POSSIBLE_FORMATS),
          n = new Array();
        if (null != r) {
          var o = r.some(function (t) {
            return (
              t === nt.UPC_A ||
              t === nt.UPC_E ||
              t === nt.EAN_13 ||
              t === nt.EAN_8 ||
              t === nt.CODABAR ||
              t === nt.CODE_39 ||
              t === nt.CODE_93 ||
              t === nt.CODE_128 ||
              t === nt.ITF ||
              t === nt.RSS_14 ||
              t === nt.RSS_EXPANDED
            );
          });
          o && !e && n.push(new fr(t)),
            r.includes(nt.QR_CODE) && n.push(new an()),
            r.includes(nt.DATA_MATRIX) && n.push(new Or()),
            r.includes(nt.AZTEC) && n.push(new Mt()),
            r.includes(nt.PDF_417) && n.push(new Kn()),
            o && e && n.push(new fr(t));
        }
        0 === n.length &&
          (e || n.push(new fr(t)),
          n.push(new an()),
          n.push(new Or()),
          n.push(new Mt()),
          n.push(new Kn()),
          e && n.push(new fr(t))),
          (this.readers = n);
      }),
      (t.prototype.reset = function () {
        var t, e;
        if (null !== this.readers)
          try {
            for (
              var r = Jn(this.readers), n = r.next();
              !n.done;
              n = r.next()
            ) {
              n.value.reset();
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              n && !n.done && (e = r.return) && e.call(r);
            } finally {
              if (t) throw t.error;
            }
          }
      }),
      (t.prototype.decodeInternal = function (t) {
        var e, r;
        if (null === this.readers)
          throw new Qn('No readers where selected, nothing can be read.');
        try {
          for (var n = Jn(this.readers), o = n.next(); !o.done; o = n.next()) {
            var i = o.value;
            try {
              return i.decode(t, this.hints);
            } catch (t) {
              if (t instanceof Qn) continue;
            }
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (r = n.return) && r.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
        throw new U('No MultiFormat Readers were able to detect the code.');
      }),
      t
    );
  })(),
  to = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })();
!(function (t) {
  function e(e, r) {
    void 0 === e && (e = null), void 0 === r && (r = 500);
    var n = new $n();
    return n.setHints(e), t.call(this, n, r) || this;
  }
  to(e, t),
    (e.prototype.decodeBitmap = function (t) {
      return this.reader.decodeWithState(t);
    });
})(tt);
var eo = (function () {
  var t = function (e, r) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        }),
      t(e, r)
    );
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r),
      (e.prototype =
        null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
  };
})();
!(function (t) {
  function e(e) {
    return void 0 === e && (e = 500), t.call(this, new Kn(), e) || this;
  }
  eo(e, t);
})(tt);
var ro,
  no = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })();
!(function (t) {
  function e(e) {
    return void 0 === e && (e = 500), t.call(this, new an(), e) || this;
  }
  no(e, t);
})(tt),
  (function (t) {
    (t[(t.ERROR_CORRECTION = 0)] = 'ERROR_CORRECTION'),
      (t[(t.CHARACTER_SET = 1)] = 'CHARACTER_SET'),
      (t[(t.DATA_MATRIX_SHAPE = 2)] = 'DATA_MATRIX_SHAPE'),
      (t[(t.MIN_SIZE = 3)] = 'MIN_SIZE'),
      (t[(t.MAX_SIZE = 4)] = 'MAX_SIZE'),
      (t[(t.MARGIN = 5)] = 'MARGIN'),
      (t[(t.PDF417_COMPACT = 6)] = 'PDF417_COMPACT'),
      (t[(t.PDF417_COMPACTION = 7)] = 'PDF417_COMPACTION'),
      (t[(t.PDF417_DIMENSIONS = 8)] = 'PDF417_DIMENSIONS'),
      (t[(t.AZTEC_LAYERS = 9)] = 'AZTEC_LAYERS'),
      (t[(t.QR_VERSION = 10)] = 'QR_VERSION');
  })(ro || (ro = {}));
var oo = ro,
  io = (function () {
    function t(t) {
      (this.field = t),
        (this.cachedGenerators = []),
        this.cachedGenerators.push(new st(t, Int32Array.from([1])));
    }
    return (
      (t.prototype.buildGenerator = function (t) {
        var e = this.cachedGenerators;
        if (t >= e.length)
          for (
            var r = e[e.length - 1], n = this.field, o = e.length;
            o <= t;
            o++
          ) {
            var i = r.multiply(
              new st(
                n,
                Int32Array.from([1, n.exp(o - 1 + n.getGeneratorBase())])
              )
            );
            e.push(i), (r = i);
          }
        return e[t];
      }),
      (t.prototype.encode = function (t, e) {
        if (0 === e) throw new l('No error correction bytes');
        var r = t.length - e;
        if (r <= 0) throw new l('No data bytes provided');
        var n = this.buildGenerator(e),
          o = new Int32Array(r);
        w.arraycopy(t, 0, o, 0, r);
        for (
          var i = new st(this.field, o),
            a = (i = i.multiplyByMonomial(e, 1)).divide(n)[1].getCoefficients(),
            u = e - a.length,
            s = 0;
          s < u;
          s++
        )
          t[r + s] = 0;
        w.arraycopy(a, 0, t, r + u, a.length);
      }),
      t
    );
  })(),
  ao = (function () {
    function t() {}
    return (
      (t.applyMaskPenaltyRule1 = function (e) {
        return (
          t.applyMaskPenaltyRule1Internal(e, !0) +
          t.applyMaskPenaltyRule1Internal(e, !1)
        );
      }),
      (t.applyMaskPenaltyRule2 = function (e) {
        for (
          var r = 0,
            n = e.getArray(),
            o = e.getWidth(),
            i = e.getHeight(),
            a = 0;
          a < i - 1;
          a++
        )
          for (var u = n[a], s = 0; s < o - 1; s++) {
            var c = u[s];
            c === u[s + 1] && c === n[a + 1][s] && c === n[a + 1][s + 1] && r++;
          }
        return t.N2 * r;
      }),
      (t.applyMaskPenaltyRule3 = function (e) {
        for (
          var r = 0,
            n = e.getArray(),
            o = e.getWidth(),
            i = e.getHeight(),
            a = 0;
          a < i;
          a++
        )
          for (var u = 0; u < o; u++) {
            var s = n[a];
            u + 6 < o &&
              1 === s[u] &&
              0 === s[u + 1] &&
              1 === s[u + 2] &&
              1 === s[u + 3] &&
              1 === s[u + 4] &&
              0 === s[u + 5] &&
              1 === s[u + 6] &&
              (t.isWhiteHorizontal(s, u - 4, u) ||
                t.isWhiteHorizontal(s, u + 7, u + 11)) &&
              r++,
              a + 6 < i &&
                1 === n[a][u] &&
                0 === n[a + 1][u] &&
                1 === n[a + 2][u] &&
                1 === n[a + 3][u] &&
                1 === n[a + 4][u] &&
                0 === n[a + 5][u] &&
                1 === n[a + 6][u] &&
                (t.isWhiteVertical(n, u, a - 4, a) ||
                  t.isWhiteVertical(n, u, a + 7, a + 11)) &&
                r++;
          }
        return r * t.N3;
      }),
      (t.isWhiteHorizontal = function (t, e, r) {
        (e = Math.max(e, 0)), (r = Math.min(r, t.length));
        for (var n = e; n < r; n++) if (1 === t[n]) return !1;
        return !0;
      }),
      (t.isWhiteVertical = function (t, e, r, n) {
        (r = Math.max(r, 0)), (n = Math.min(n, t.length));
        for (var o = r; o < n; o++) if (1 === t[o][e]) return !1;
        return !0;
      }),
      (t.applyMaskPenaltyRule4 = function (e) {
        for (
          var r = 0,
            n = e.getArray(),
            o = e.getWidth(),
            i = e.getHeight(),
            a = 0;
          a < i;
          a++
        )
          for (var u = n[a], s = 0; s < o; s++) 1 === u[s] && r++;
        var c = e.getHeight() * e.getWidth();
        return Math.floor((10 * Math.abs(2 * r - c)) / c) * t.N4;
      }),
      (t.getDataMaskBit = function (t, e, r) {
        var n, o;
        switch (t) {
          case 0:
            n = (r + e) & 1;
            break;
          case 1:
            n = 1 & r;
            break;
          case 2:
            n = e % 3;
            break;
          case 3:
            n = (r + e) % 3;
            break;
          case 4:
            n = (Math.floor(r / 2) + Math.floor(e / 3)) & 1;
            break;
          case 5:
            n = (1 & (o = r * e)) + (o % 3);
            break;
          case 6:
            n = ((1 & (o = r * e)) + (o % 3)) & 1;
            break;
          case 7:
            n = (((o = r * e) % 3) + ((r + e) & 1)) & 1;
            break;
          default:
            throw new l('Invalid mask pattern: ' + t);
        }
        return 0 === n;
      }),
      (t.applyMaskPenaltyRule1Internal = function (e, r) {
        for (
          var n = 0,
            o = r ? e.getHeight() : e.getWidth(),
            i = r ? e.getWidth() : e.getHeight(),
            a = e.getArray(),
            u = 0;
          u < o;
          u++
        ) {
          for (var s = 0, c = -1, f = 0; f < i; f++) {
            var h = r ? a[u][f] : a[f][u];
            h === c ? s++ : (s >= 5 && (n += t.N1 + (s - 5)), (s = 1), (c = h));
          }
          s >= 5 && (n += t.N1 + (s - 5));
        }
        return n;
      }),
      (t.N1 = 3),
      (t.N2 = 3),
      (t.N3 = 40),
      (t.N4 = 10),
      t
    );
  })(),
  uo = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  so = (function () {
    function t(t, e) {
      (this.width = t), (this.height = e);
      for (var r = new Array(e), n = 0; n !== e; n++) r[n] = new Uint8Array(t);
      this.bytes = r;
    }
    return (
      (t.prototype.getHeight = function () {
        return this.height;
      }),
      (t.prototype.getWidth = function () {
        return this.width;
      }),
      (t.prototype.get = function (t, e) {
        return this.bytes[e][t];
      }),
      (t.prototype.getArray = function () {
        return this.bytes;
      }),
      (t.prototype.setNumber = function (t, e, r) {
        this.bytes[e][t] = r;
      }),
      (t.prototype.setBoolean = function (t, e, r) {
        this.bytes[e][t] = r ? 1 : 0;
      }),
      (t.prototype.clear = function (t) {
        var e, r;
        try {
          for (var n = uo(this.bytes), o = n.next(); !o.done; o = n.next()) {
            var i = o.value;
            C.fill(i, t);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (r = n.return) && r.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (t.prototype.equals = function (e) {
        if (!(e instanceof t)) return !1;
        var r = e;
        if (this.width !== r.width) return !1;
        if (this.height !== r.height) return !1;
        for (var n = 0, o = this.height; n < o; ++n)
          for (
            var i = this.bytes[n], a = r.bytes[n], u = 0, s = this.width;
            u < s;
            ++u
          )
            if (i[u] !== a[u]) return !1;
        return !0;
      }),
      (t.prototype.toString = function () {
        for (var t = new k(), e = 0, r = this.height; e < r; ++e) {
          for (var n = this.bytes[e], o = 0, i = this.width; o < i; ++o)
            switch (n[o]) {
              case 0:
                t.append(' 0');
                break;
              case 1:
                t.append(' 1');
                break;
              default:
                t.append('  ');
            }
          t.append('\n');
        }
        return t.toString();
      }),
      t
    );
  })(),
  co = (function () {
    function t() {
      this.maskPattern = -1;
    }
    return (
      (t.prototype.getMode = function () {
        return this.mode;
      }),
      (t.prototype.getECLevel = function () {
        return this.ecLevel;
      }),
      (t.prototype.getVersion = function () {
        return this.version;
      }),
      (t.prototype.getMaskPattern = function () {
        return this.maskPattern;
      }),
      (t.prototype.getMatrix = function () {
        return this.matrix;
      }),
      (t.prototype.toString = function () {
        var t = new k();
        return (
          t.append('<<\n'),
          t.append(' mode: '),
          t.append(this.mode ? this.mode.toString() : 'null'),
          t.append('\n ecLevel: '),
          t.append(this.ecLevel ? this.ecLevel.toString() : 'null'),
          t.append('\n version: '),
          t.append(this.version ? this.version.toString() : 'null'),
          t.append('\n maskPattern: '),
          t.append(this.maskPattern.toString()),
          this.matrix
            ? (t.append('\n matrix:\n'), t.append(this.matrix.toString()))
            : t.append('\n matrix: null\n'),
          t.append('>>\n'),
          t.toString()
        );
      }),
      (t.prototype.setMode = function (t) {
        this.mode = t;
      }),
      (t.prototype.setECLevel = function (t) {
        this.ecLevel = t;
      }),
      (t.prototype.setVersion = function (t) {
        this.version = t;
      }),
      (t.prototype.setMaskPattern = function (t) {
        this.maskPattern = t;
      }),
      (t.prototype.setMatrix = function (t) {
        this.matrix = t;
      }),
      (t.isValidMaskPattern = function (e) {
        return e >= 0 && e < t.NUM_MASK_PATTERNS;
      }),
      (t.NUM_MASK_PATTERNS = 8),
      t
    );
  })(),
  fo = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  ho = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return fo(e, t), (e.kind = 'WriterException'), e;
  })(s),
  lo = (function () {
    function t() {}
    return (
      (t.clearMatrix = function (t) {
        t.clear(255);
      }),
      (t.buildMatrix = function (e, r, n, o, i) {
        t.clearMatrix(i),
          t.embedBasicPatterns(n, i),
          t.embedTypeInfo(r, o, i),
          t.maybeEmbedVersionInfo(n, i),
          t.embedDataBits(e, o, i);
      }),
      (t.embedBasicPatterns = function (e, r) {
        t.embedPositionDetectionPatternsAndSeparators(r),
          t.embedDarkDotAtLeftBottomCorner(r),
          t.maybeEmbedPositionAdjustmentPatterns(e, r),
          t.embedTimingPatterns(r);
      }),
      (t.embedTypeInfo = function (e, r, n) {
        var o = new S();
        t.makeTypeInfoBits(e, r, o);
        for (var i = 0, a = o.getSize(); i < a; ++i) {
          var u = o.get(o.getSize() - 1 - i),
            s = t.TYPE_INFO_COORDINATES[i],
            c = s[0],
            f = s[1];
          if ((n.setBoolean(c, f, u), i < 8)) {
            var h = n.getWidth() - i - 1,
              l = 8;
            n.setBoolean(h, l, u);
          } else {
            (h = 8), (l = n.getHeight() - 7 + (i - 8));
            n.setBoolean(h, l, u);
          }
        }
      }),
      (t.maybeEmbedVersionInfo = function (e, r) {
        if (!(e.getVersionNumber() < 7)) {
          var n = new S();
          t.makeVersionInfoBits(e, n);
          for (var o = 17, i = 0; i < 6; ++i)
            for (var a = 0; a < 3; ++a) {
              var u = n.get(o);
              o--,
                r.setBoolean(i, r.getHeight() - 11 + a, u),
                r.setBoolean(r.getHeight() - 11 + a, i, u);
            }
        }
      }),
      (t.embedDataBits = function (e, r, n) {
        for (
          var o = 0, i = -1, a = n.getWidth() - 1, u = n.getHeight() - 1;
          a > 0;

        ) {
          for (6 === a && (a -= 1); u >= 0 && u < n.getHeight(); ) {
            for (var s = 0; s < 2; ++s) {
              var c = a - s;
              if (t.isEmpty(n.get(c, u))) {
                var f = void 0;
                o < e.getSize() ? ((f = e.get(o)), ++o) : (f = !1),
                  255 !== r && ao.getDataMaskBit(r, c, u) && (f = !f),
                  n.setBoolean(c, u, f);
              }
            }
            u += i;
          }
          (u += i = -i), (a -= 2);
        }
        if (o !== e.getSize())
          throw new ho('Not all bits consumed: ' + o + '/' + e.getSize());
      }),
      (t.findMSBSet = function (t) {
        return 32 - I.numberOfLeadingZeros(t);
      }),
      (t.calculateBCHCode = function (e, r) {
        if (0 === r) throw new l('0 polynomial');
        var n = t.findMSBSet(r);
        for (e <<= n - 1; t.findMSBSet(e) >= n; )
          e ^= r << (t.findMSBSet(e) - n);
        return e;
      }),
      (t.makeTypeInfoBits = function (e, r, n) {
        if (!co.isValidMaskPattern(r)) throw new ho('Invalid mask pattern');
        var o = (e.getBits() << 3) | r;
        n.appendBits(o, 5);
        var i = t.calculateBCHCode(o, t.TYPE_INFO_POLY);
        n.appendBits(i, 10);
        var a = new S();
        if (
          (a.appendBits(t.TYPE_INFO_MASK_PATTERN, 15),
          n.xor(a),
          15 !== n.getSize())
        )
          throw new ho('should not happen but we got: ' + n.getSize());
      }),
      (t.makeVersionInfoBits = function (e, r) {
        r.appendBits(e.getVersionNumber(), 6);
        var n = t.calculateBCHCode(e.getVersionNumber(), t.VERSION_INFO_POLY);
        if ((r.appendBits(n, 12), 18 !== r.getSize()))
          throw new ho('should not happen but we got: ' + r.getSize());
      }),
      (t.isEmpty = function (t) {
        return 255 === t;
      }),
      (t.embedTimingPatterns = function (e) {
        for (var r = 8; r < e.getWidth() - 8; ++r) {
          var n = (r + 1) % 2;
          t.isEmpty(e.get(r, 6)) && e.setNumber(r, 6, n),
            t.isEmpty(e.get(6, r)) && e.setNumber(6, r, n);
        }
      }),
      (t.embedDarkDotAtLeftBottomCorner = function (t) {
        if (0 === t.get(8, t.getHeight() - 8)) throw new ho();
        t.setNumber(8, t.getHeight() - 8, 1);
      }),
      (t.embedHorizontalSeparationPattern = function (e, r, n) {
        for (var o = 0; o < 8; ++o) {
          if (!t.isEmpty(n.get(e + o, r))) throw new ho();
          n.setNumber(e + o, r, 0);
        }
      }),
      (t.embedVerticalSeparationPattern = function (e, r, n) {
        for (var o = 0; o < 7; ++o) {
          if (!t.isEmpty(n.get(e, r + o))) throw new ho();
          n.setNumber(e, r + o, 0);
        }
      }),
      (t.embedPositionAdjustmentPattern = function (e, r, n) {
        for (var o = 0; o < 5; ++o)
          for (var i = t.POSITION_ADJUSTMENT_PATTERN[o], a = 0; a < 5; ++a)
            n.setNumber(e + a, r + o, i[a]);
      }),
      (t.embedPositionDetectionPattern = function (e, r, n) {
        for (var o = 0; o < 7; ++o)
          for (var i = t.POSITION_DETECTION_PATTERN[o], a = 0; a < 7; ++a)
            n.setNumber(e + a, r + o, i[a]);
      }),
      (t.embedPositionDetectionPatternsAndSeparators = function (e) {
        var r = t.POSITION_DETECTION_PATTERN[0].length;
        t.embedPositionDetectionPattern(0, 0, e),
          t.embedPositionDetectionPattern(e.getWidth() - r, 0, e),
          t.embedPositionDetectionPattern(0, e.getWidth() - r, e);
        t.embedHorizontalSeparationPattern(0, 7, e),
          t.embedHorizontalSeparationPattern(e.getWidth() - 8, 7, e),
          t.embedHorizontalSeparationPattern(0, e.getWidth() - 8, e);
        t.embedVerticalSeparationPattern(7, 0, e),
          t.embedVerticalSeparationPattern(e.getHeight() - 7 - 1, 0, e),
          t.embedVerticalSeparationPattern(7, e.getHeight() - 7, e);
      }),
      (t.maybeEmbedPositionAdjustmentPatterns = function (e, r) {
        if (!(e.getVersionNumber() < 2))
          for (
            var n = e.getVersionNumber() - 1,
              o = t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[n],
              i = 0,
              a = o.length;
            i !== a;
            i++
          ) {
            var u = o[i];
            if (u >= 0)
              for (var s = 0; s !== a; s++) {
                var c = o[s];
                c >= 0 &&
                  t.isEmpty(r.get(c, u)) &&
                  t.embedPositionAdjustmentPattern(c - 2, u - 2, r);
              }
          }
      }),
      (t.POSITION_DETECTION_PATTERN = Array.from([
        Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
        Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
        Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
      ])),
      (t.POSITION_ADJUSTMENT_PATTERN = Array.from([
        Int32Array.from([1, 1, 1, 1, 1]),
        Int32Array.from([1, 0, 0, 0, 1]),
        Int32Array.from([1, 0, 1, 0, 1]),
        Int32Array.from([1, 0, 0, 0, 1]),
        Int32Array.from([1, 1, 1, 1, 1]),
      ])),
      (t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
        Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
        Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
        Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
        Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
        Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
        Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
        Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
        Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
        Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
        Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
        Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
        Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
        Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
        Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
        Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
        Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
        Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
        Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
        Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
        Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
        Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
        Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
        Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
        Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
        Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
        Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
        Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
        Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
        Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
        Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
        Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
        Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
        Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
        Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
      ])),
      (t.TYPE_INFO_COORDINATES = Array.from([
        Int32Array.from([8, 0]),
        Int32Array.from([8, 1]),
        Int32Array.from([8, 2]),
        Int32Array.from([8, 3]),
        Int32Array.from([8, 4]),
        Int32Array.from([8, 5]),
        Int32Array.from([8, 7]),
        Int32Array.from([8, 8]),
        Int32Array.from([7, 8]),
        Int32Array.from([5, 8]),
        Int32Array.from([4, 8]),
        Int32Array.from([3, 8]),
        Int32Array.from([2, 8]),
        Int32Array.from([1, 8]),
        Int32Array.from([0, 8]),
      ])),
      (t.VERSION_INFO_POLY = 7973),
      (t.TYPE_INFO_POLY = 1335),
      (t.TYPE_INFO_MASK_PATTERN = 21522),
      t
    );
  })(),
  po = (function () {
    function t(t, e) {
      (this.dataBytes = t), (this.errorCorrectionBytes = e);
    }
    return (
      (t.prototype.getDataBytes = function () {
        return this.dataBytes;
      }),
      (t.prototype.getErrorCorrectionBytes = function () {
        return this.errorCorrectionBytes;
      }),
      t
    );
  })(),
  go = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  };
!(function () {
  function t() {}
  (t.calculateMaskPenalty = function (t) {
    return (
      ao.applyMaskPenaltyRule1(t) +
      ao.applyMaskPenaltyRule2(t) +
      ao.applyMaskPenaltyRule3(t) +
      ao.applyMaskPenaltyRule4(t)
    );
  }),
    (t.encode = function (e, r, n) {
      void 0 === n && (n = null);
      var o = t.DEFAULT_BYTE_MODE_ENCODING,
        i = null !== n && void 0 !== n.get(oo.CHARACTER_SET);
      i && (o = n.get(oo.CHARACTER_SET).toString());
      var a = this.chooseMode(e, o),
        u = new S();
      if (a === Wr.BYTE && (i || t.DEFAULT_BYTE_MODE_ENCODING !== o)) {
        var s = P.getCharacterSetECIByName(o);
        void 0 !== s && this.appendECI(s, u);
      }
      this.appendModeInfo(a, u);
      var c,
        f = new S();
      if (
        (this.appendBytes(e, a, f, o),
        null !== n && void 0 !== n.get(oo.QR_VERSION))
      ) {
        var h = Number.parseInt(n.get(oo.QR_VERSION).toString(), 10);
        c = Fr.getVersionForNumber(h);
        var l = this.calculateBitsNeeded(a, u, f, c);
        if (!this.willFit(l, c, r))
          throw new ho('Data too big for requested version');
      } else c = this.recommendVersion(r, a, u, f);
      var d = new S();
      d.appendBitArray(u);
      var p = a === Wr.BYTE ? f.getSizeInBytes() : e.length;
      this.appendLengthInfo(p, c, a, d), d.appendBitArray(f);
      var g = c.getECBlocksForLevel(r),
        y = c.getTotalCodewords() - g.getTotalECCodewords();
      this.terminateBits(y, d);
      var w = this.interleaveWithECBytes(
          d,
          c.getTotalCodewords(),
          y,
          g.getNumBlocks()
        ),
        _ = new co();
      _.setECLevel(r), _.setMode(a), _.setVersion(c);
      var v = c.getDimensionForVersion(),
        m = new so(v, v),
        A = this.chooseMaskPattern(w, r, c, m);
      return (
        _.setMaskPattern(A), lo.buildMatrix(w, r, c, A, m), _.setMatrix(m), _
      );
    }),
    (t.recommendVersion = function (t, e, r, n) {
      var o = this.calculateBitsNeeded(e, r, n, Fr.getVersionForNumber(1)),
        i = this.chooseVersion(o, t),
        a = this.calculateBitsNeeded(e, r, n, i);
      return this.chooseVersion(a, t);
    }),
    (t.calculateBitsNeeded = function (t, e, r, n) {
      return e.getSize() + t.getCharacterCountBits(n) + r.getSize();
    }),
    (t.getAlphanumericCode = function (e) {
      return e < t.ALPHANUMERIC_TABLE.length ? t.ALPHANUMERIC_TABLE[e] : -1;
    }),
    (t.chooseMode = function (e, r) {
      if (
        (void 0 === r && (r = null),
        P.SJIS.getName() === r && this.isOnlyDoubleByteKanji(e))
      )
        return Wr.KANJI;
      for (var n = !1, o = !1, i = 0, a = e.length; i < a; ++i) {
        var u = e.charAt(i);
        if (t.isDigit(u)) n = !0;
        else {
          if (-1 === this.getAlphanumericCode(u.charCodeAt(0))) return Wr.BYTE;
          o = !0;
        }
      }
      return o ? Wr.ALPHANUMERIC : n ? Wr.NUMERIC : Wr.BYTE;
    }),
    (t.isOnlyDoubleByteKanji = function (t) {
      var e;
      try {
        e = L.encode(t, P.SJIS);
      } catch (t) {
        return !1;
      }
      var r = e.length;
      if (r % 2 != 0) return !1;
      for (var n = 0; n < r; n += 2) {
        var o = 255 & e[n];
        if ((o < 129 || o > 159) && (o < 224 || o > 235)) return !1;
      }
      return !0;
    }),
    (t.chooseMaskPattern = function (t, e, r, n) {
      for (
        var o = Number.MAX_SAFE_INTEGER, i = -1, a = 0;
        a < co.NUM_MASK_PATTERNS;
        a++
      ) {
        lo.buildMatrix(t, e, r, a, n);
        var u = this.calculateMaskPenalty(n);
        u < o && ((o = u), (i = a));
      }
      return i;
    }),
    (t.chooseVersion = function (e, r) {
      for (var n = 1; n <= 40; n++) {
        var o = Fr.getVersionForNumber(n);
        if (t.willFit(e, o, r)) return o;
      }
      throw new ho('Data too big');
    }),
    (t.willFit = function (t, e, r) {
      return (
        e.getTotalCodewords() -
          e.getECBlocksForLevel(r).getTotalECCodewords() >=
        (t + 7) / 8
      );
    }),
    (t.terminateBits = function (t, e) {
      var r = 8 * t;
      if (e.getSize() > r)
        throw new ho(
          'data bits cannot fit in the QR Code' + e.getSize() + ' > ' + r
        );
      for (var n = 0; n < 4 && e.getSize() < r; ++n) e.appendBit(!1);
      var o = 7 & e.getSize();
      if (o > 0) for (n = o; n < 8; n++) e.appendBit(!1);
      var i = t - e.getSizeInBytes();
      for (n = 0; n < i; ++n) e.appendBits(0 == (1 & n) ? 236 : 17, 8);
      if (e.getSize() !== r) throw new ho('Bits size does not equal capacity');
    }),
    (t.getNumDataBytesAndNumECBytesForBlockID = function (t, e, r, n, o, i) {
      if (n >= r) throw new ho('Block ID too large');
      var a = t % r,
        u = r - a,
        s = Math.floor(t / r),
        c = s + 1,
        f = Math.floor(e / r),
        h = f + 1,
        l = s - f,
        d = c - h;
      if (l !== d) throw new ho('EC bytes mismatch');
      if (r !== u + a) throw new ho('RS blocks mismatch');
      if (t !== (f + l) * u + (h + d) * a) throw new ho('Total bytes mismatch');
      n < u ? ((o[0] = f), (i[0] = l)) : ((o[0] = h), (i[0] = d));
    }),
    (t.interleaveWithECBytes = function (e, r, n, o) {
      var i, a, u, s;
      if (e.getSizeInBytes() !== n)
        throw new ho('Number of bits and data bytes does not match');
      for (var c = 0, f = 0, h = 0, l = new Array(), d = 0; d < o; ++d) {
        var p = new Int32Array(1),
          g = new Int32Array(1);
        t.getNumDataBytesAndNumECBytesForBlockID(r, n, o, d, p, g);
        var y = p[0],
          w = new Uint8Array(y);
        e.toBytes(8 * c, w, 0, y);
        var _ = t.generateECBytes(w, g[0]);
        l.push(new po(w, _)),
          (f = Math.max(f, y)),
          (h = Math.max(h, _.length)),
          (c += p[0]);
      }
      if (n !== c) throw new ho('Data bytes does not match offset');
      var v = new S();
      for (d = 0; d < f; ++d)
        try {
          for (
            var m = ((i = void 0), go(l)), A = m.next();
            !A.done;
            A = m.next()
          ) {
            d < (w = A.value.getDataBytes()).length && v.appendBits(w[d], 8);
          }
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            A && !A.done && (a = m.return) && a.call(m);
          } finally {
            if (i) throw i.error;
          }
        }
      for (d = 0; d < h; ++d)
        try {
          for (
            var E = ((u = void 0), go(l)), C = E.next();
            !C.done;
            C = E.next()
          ) {
            d < (_ = C.value.getErrorCorrectionBytes()).length &&
              v.appendBits(_[d], 8);
          }
        } catch (t) {
          u = { error: t };
        } finally {
          try {
            C && !C.done && (s = E.return) && s.call(E);
          } finally {
            if (u) throw u.error;
          }
        }
      if (r !== v.getSizeInBytes())
        throw new ho(
          'Interleaving error: ' + r + ' and ' + v.getSizeInBytes() + ' differ.'
        );
      return v;
    }),
    (t.generateECBytes = function (t, e) {
      for (var r = t.length, n = new Int32Array(r + e), o = 0; o < r; o++)
        n[o] = 255 & t[o];
      new io(lt.QR_CODE_FIELD_256).encode(n, e);
      var i = new Uint8Array(e);
      for (o = 0; o < e; o++) i[o] = n[r + o];
      return i;
    }),
    (t.appendModeInfo = function (t, e) {
      e.appendBits(t.getBits(), 4);
    }),
    (t.appendLengthInfo = function (t, e, r, n) {
      var o = r.getCharacterCountBits(e);
      if (t >= 1 << o) throw new ho(t + ' is bigger than ' + ((1 << o) - 1));
      n.appendBits(t, o);
    }),
    (t.appendBytes = function (e, r, n, o) {
      switch (r) {
        case Wr.NUMERIC:
          t.appendNumericBytes(e, n);
          break;
        case Wr.ALPHANUMERIC:
          t.appendAlphanumericBytes(e, n);
          break;
        case Wr.BYTE:
          t.append8BitBytes(e, n, o);
          break;
        case Wr.KANJI:
          t.appendKanjiBytes(e, n);
          break;
        default:
          throw new ho('Invalid mode: ' + r);
      }
    }),
    (t.getDigit = function (t) {
      return t.charCodeAt(0) - 48;
    }),
    (t.isDigit = function (e) {
      var r = t.getDigit(e);
      return r >= 0 && r <= 9;
    }),
    (t.appendNumericBytes = function (e, r) {
      for (var n = e.length, o = 0; o < n; ) {
        var i = t.getDigit(e.charAt(o));
        if (o + 2 < n) {
          var a = t.getDigit(e.charAt(o + 1)),
            u = t.getDigit(e.charAt(o + 2));
          r.appendBits(100 * i + 10 * a + u, 10), (o += 3);
        } else if (o + 1 < n) {
          a = t.getDigit(e.charAt(o + 1));
          r.appendBits(10 * i + a, 7), (o += 2);
        } else r.appendBits(i, 4), o++;
      }
    }),
    (t.appendAlphanumericBytes = function (e, r) {
      for (var n = e.length, o = 0; o < n; ) {
        var i = t.getAlphanumericCode(e.charCodeAt(o));
        if (-1 === i) throw new ho();
        if (o + 1 < n) {
          var a = t.getAlphanumericCode(e.charCodeAt(o + 1));
          if (-1 === a) throw new ho();
          r.appendBits(45 * i + a, 11), (o += 2);
        } else r.appendBits(i, 6), o++;
      }
    }),
    (t.append8BitBytes = function (t, e, r) {
      var n;
      try {
        n = L.encode(t, r);
      } catch (t) {
        throw new ho(t);
      }
      for (var o = 0, i = n.length; o !== i; o++) {
        var a = n[o];
        e.appendBits(a, 8);
      }
    }),
    (t.appendKanjiBytes = function (t, e) {
      var r;
      try {
        r = L.encode(t, P.SJIS);
      } catch (t) {
        throw new ho(t);
      }
      for (var n = r.length, o = 0; o < n; o += 2) {
        var i = (((255 & r[o]) << 8) & 4294967295) | (255 & r[o + 1]),
          a = -1;
        if (
          (i >= 33088 && i <= 40956
            ? (a = i - 33088)
            : i >= 57408 && i <= 60351 && (a = i - 49472),
          -1 === a)
        )
          throw new ho('Invalid byte sequence');
        var u = 192 * (a >> 8) + (255 & a);
        e.appendBits(u, 13);
      }
    }),
    (t.appendECI = function (t, e) {
      e.appendBits(Wr.ECI.getBits(), 4), e.appendBits(t.getValue(), 8);
    }),
    (t.ALPHANUMERIC_TABLE = Int32Array.from([
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1,
      37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8,
      9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1,
      -1, -1,
    ])),
    (t.DEFAULT_BYTE_MODE_ENCODING = P.UTF8.getName());
})();
var yo = (function () {
  var t = function (e, r) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        }),
      t(e, r)
    );
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r),
      (e.prototype =
        null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
  };
})();
!(function (t) {
  function e(e, r, n, o, i, a, u, s) {
    var c = t.call(this, a, u) || this;
    if (
      ((c.yuvData = e),
      (c.dataWidth = r),
      (c.dataHeight = n),
      (c.left = o),
      (c.top = i),
      o + a > r || i + u > n)
    )
      throw new l('Crop rectangle does not fit within image data.');
    return s && c.reverseHorizontal(a, u), c;
  }
  yo(e, t),
    (e.prototype.getRow = function (t, e) {
      if (t < 0 || t >= this.getHeight())
        throw new l('Requested row is outside the image: ' + t);
      var r = this.getWidth();
      (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
      var n = (t + this.top) * this.dataWidth + this.left;
      return w.arraycopy(this.yuvData, n, e, 0, r), e;
    }),
    (e.prototype.getMatrix = function () {
      var t = this.getWidth(),
        e = this.getHeight();
      if (t === this.dataWidth && e === this.dataHeight) return this.yuvData;
      var r = t * e,
        n = new Uint8ClampedArray(r),
        o = this.top * this.dataWidth + this.left;
      if (t === this.dataWidth) return w.arraycopy(this.yuvData, o, n, 0, r), n;
      for (var i = 0; i < e; i++) {
        var a = i * t;
        w.arraycopy(this.yuvData, o, n, a, t), (o += this.dataWidth);
      }
      return n;
    }),
    (e.prototype.isCropSupported = function () {
      return !0;
    }),
    (e.prototype.crop = function (t, r, n, o) {
      return new e(
        this.yuvData,
        this.dataWidth,
        this.dataHeight,
        this.left + t,
        this.top + r,
        n,
        o,
        !1
      );
    }),
    (e.prototype.renderThumbnail = function () {
      for (
        var t = this.getWidth() / e.THUMBNAIL_SCALE_FACTOR,
          r = this.getHeight() / e.THUMBNAIL_SCALE_FACTOR,
          n = new Int32Array(t * r),
          o = this.yuvData,
          i = this.top * this.dataWidth + this.left,
          a = 0;
        a < r;
        a++
      ) {
        for (var u = a * t, s = 0; s < t; s++) {
          var c = 255 & o[i + s * e.THUMBNAIL_SCALE_FACTOR];
          n[u + s] = 4278190080 | (65793 * c);
        }
        i += this.dataWidth * e.THUMBNAIL_SCALE_FACTOR;
      }
      return n;
    }),
    (e.prototype.getThumbnailWidth = function () {
      return this.getWidth() / e.THUMBNAIL_SCALE_FACTOR;
    }),
    (e.prototype.getThumbnailHeight = function () {
      return this.getHeight() / e.THUMBNAIL_SCALE_FACTOR;
    }),
    (e.prototype.reverseHorizontal = function (t, e) {
      for (
        var r = this.yuvData, n = 0, o = this.top * this.dataWidth + this.left;
        n < e;
        n++, o += this.dataWidth
      )
        for (var i = o + t / 2, a = o, u = o + t - 1; a < i; a++, u--) {
          var s = r[a];
          (r[a] = r[u]), (r[u] = s);
        }
    }),
    (e.prototype.invert = function () {
      return new Y(this);
    }),
    (e.THUMBNAIL_SCALE_FACTOR = 2);
})(j);
var wo = (function () {
  var t = function (e, r) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        }),
      t(e, r)
    );
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r),
      (e.prototype =
        null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
  };
})();
!(function (t) {
  function e(e, r, n, o, i, a, u) {
    var s = t.call(this, r, n) || this;
    if (
      ((s.dataWidth = o),
      (s.dataHeight = i),
      (s.left = a),
      (s.top = u),
      4 === e.BYTES_PER_ELEMENT)
    ) {
      for (var c = r * n, f = new Uint8ClampedArray(c), h = 0; h < c; h++) {
        var d = e[h],
          p = (d >> 16) & 255,
          g = (d >> 7) & 510,
          y = 255 & d;
        f[h] = ((p + g + y) / 4) & 255;
      }
      s.luminances = f;
    } else s.luminances = e;
    if (
      (void 0 === o && (s.dataWidth = r),
      void 0 === i && (s.dataHeight = n),
      void 0 === a && (s.left = 0),
      void 0 === u && (s.top = 0),
      s.left + r > s.dataWidth || s.top + n > s.dataHeight)
    )
      throw new l('Crop rectangle does not fit within image data.');
    return s;
  }
  wo(e, t),
    (e.prototype.getRow = function (t, e) {
      if (t < 0 || t >= this.getHeight())
        throw new l('Requested row is outside the image: ' + t);
      var r = this.getWidth();
      (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
      var n = (t + this.top) * this.dataWidth + this.left;
      return w.arraycopy(this.luminances, n, e, 0, r), e;
    }),
    (e.prototype.getMatrix = function () {
      var t = this.getWidth(),
        e = this.getHeight();
      if (t === this.dataWidth && e === this.dataHeight) return this.luminances;
      var r = t * e,
        n = new Uint8ClampedArray(r),
        o = this.top * this.dataWidth + this.left;
      if (t === this.dataWidth)
        return w.arraycopy(this.luminances, o, n, 0, r), n;
      for (var i = 0; i < e; i++) {
        var a = i * t;
        w.arraycopy(this.luminances, o, n, a, t), (o += this.dataWidth);
      }
      return n;
    }),
    (e.prototype.isCropSupported = function () {
      return !0;
    }),
    (e.prototype.crop = function (t, r, n, o) {
      return new e(
        this.luminances,
        n,
        o,
        this.dataWidth,
        this.dataHeight,
        this.left + t,
        this.top + r
      );
    }),
    (e.prototype.invert = function () {
      return new Y(this);
    });
})(j);
var _o = (function () {
  var t = function (e, r) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        }),
      t(e, r)
    );
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r),
      (e.prototype =
        null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
  };
})();
!(function (t) {
  function e() {
    return (null !== t && t.apply(this, arguments)) || this;
  }
  _o(e, t),
    (e.forName = function (t) {
      return this.getCharacterSetECIByName(t);
    });
})(P);
var vo = (function () {
    function t(t) {
      this.previous = t;
    }
    return (
      (t.prototype.getPrevious = function () {
        return this.previous;
      }),
      t
    );
  })(),
  mo = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Ao = (function (t) {
    function e(e, r, n) {
      var o = t.call(this, e) || this;
      return (o.value = r), (o.bitCount = n), o;
    }
    return (
      mo(e, t),
      (e.prototype.appendTo = function (t, e) {
        t.appendBits(this.value, this.bitCount);
      }),
      (e.prototype.add = function (t, r) {
        return new e(this, t, r);
      }),
      (e.prototype.addBinaryShift = function (t, r) {
        return (
          console.warn(
            'addBinaryShift on SimpleToken, this simply returns a copy of this token'
          ),
          new e(this, t, r)
        );
      }),
      (e.prototype.toString = function () {
        var t = this.value & ((1 << this.bitCount) - 1);
        return (
          (t |= 1 << this.bitCount),
          '<' + I.toBinaryString(t | (1 << this.bitCount)).substring(1) + '>'
        );
      }),
      e
    );
  })(vo),
  Eo = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })();
!(function (t) {
  function e(e, r, n) {
    var o = t.call(this, e, 0, 0) || this;
    return (o.binaryShiftStart = r), (o.binaryShiftByteCount = n), o;
  }
  Eo(e, t),
    (e.prototype.appendTo = function (t, e) {
      for (var r = 0; r < this.binaryShiftByteCount; r++)
        (0 === r || (31 === r && this.binaryShiftByteCount <= 62)) &&
          (t.appendBits(31, 5),
          this.binaryShiftByteCount > 62
            ? t.appendBits(this.binaryShiftByteCount - 31, 16)
            : 0 === r
            ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5)
            : t.appendBits(this.binaryShiftByteCount - 31, 5)),
          t.appendBits(e[this.binaryShiftStart + r], 8);
    }),
    (e.prototype.addBinaryShift = function (t, r) {
      return new e(this, t, r);
    }),
    (e.prototype.toString = function () {
      return (
        '<' +
        this.binaryShiftStart +
        '::' +
        (this.binaryShiftStart + this.binaryShiftByteCount - 1) +
        '>'
      );
    });
})(Ao);
new Ao(null, 0, 0);
var Co = function (t) {
  var e = 'function' == typeof Symbol && Symbol.iterator,
    r = e && t[e],
    n = 0;
  if (r) return r.call(t);
  if (t && 'number' == typeof t.length)
    return {
      next: function () {
        return (
          t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
  );
};
!(function (t) {
  var e, r;
  try {
    for (var n = Co(t), o = n.next(); !o.done; o = n.next()) {
      var i = o.value;
      C.fill(i, -1);
    }
  } catch (t) {
    e = { error: t };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (e) throw e.error;
    }
  }
  (t[0][4] = 0),
    (t[1][4] = 0),
    (t[1][0] = 28),
    (t[3][4] = 0),
    (t[2][4] = 0),
    (t[2][0] = 15);
})(C.createInt32Array(6, 6)),
  (function (t) {
    var e = F.getCharCode(' '),
      r = F.getCharCode('.'),
      n = F.getCharCode(',');
    t[0][e] = 1;
    for (var o = F.getCharCode('Z'), i = F.getCharCode('A'), a = i; a <= o; a++)
      t[0][a] = a - i + 2;
    t[1][e] = 1;
    var u = F.getCharCode('z'),
      s = F.getCharCode('a');
    for (a = s; a <= u; a++) t[1][a] = a - s + 2;
    t[2][e] = 1;
    var c = F.getCharCode('9'),
      f = F.getCharCode('0');
    for (a = f; a <= c; a++) t[2][a] = a - f + 2;
    (t[2][n] = 12), (t[2][r] = 13);
    for (
      var h = [
          '\0',
          ' ',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '\b',
          '\t',
          '\n',
          '\v',
          '\f',
          '\r',
          '',
          '',
          '',
          '',
          '',
          '@',
          '\\',
          '^',
          '_',
          '`',
          '|',
          '~',
          '',
        ],
        l = 0;
      l < h.length;
      l++
    )
      t[3][F.getCharCode(h[l])] = l;
    var d = [
      '\0',
      '\r',
      '\0',
      '\0',
      '\0',
      '\0',
      '!',
      "'",
      '#',
      '$',
      '%',
      '&',
      "'",
      '(',
      ')',
      '*',
      '+',
      ',',
      '-',
      '.',
      '/',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      '[',
      ']',
      '{',
      '}',
    ];
    for (l = 0; l < d.length; l++)
      F.getCharCode(d[l]) > 0 && (t[4][F.getCharCode(d[l])] = l);
  })(C.createInt32Array(5, 256));
var Io = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  So = (function (t) {
    function e(r) {
      var n = t.call(this, r.width, r.height) || this;
      return (n.canvas = r), (n.buffer = e.makeBufferFromCanvasImageData(r)), n;
    }
    return (
      Io(e, t),
      (e.makeBufferFromCanvasImageData = function (t) {
        var r = t.getContext('2d');
        if (!r) throw new Error("Couldn't get canvas context.");
        var n = r.getImageData(0, 0, t.width, t.height);
        return e.toGrayscaleBuffer(n.data, t.width, t.height);
      }),
      (e.toGrayscaleBuffer = function (t, e, r) {
        for (
          var n = new Uint8ClampedArray(e * r), o = 0, i = 0, a = t.length;
          o < a;
          o += 4, i++
        ) {
          var u = void 0;
          if (0 === t[o + 3]) u = 255;
          else u = (306 * t[o] + 601 * t[o + 1] + 117 * t[o + 2] + 512) >> 10;
          n[i] = u;
        }
        return n;
      }),
      (e.prototype.getRow = function (t, e) {
        if (t < 0 || t >= this.getHeight())
          throw new l('Requested row is outside the image: ' + t);
        var r = this.getWidth(),
          n = t * r;
        return (
          null === e
            ? (e = this.buffer.slice(n, n + r))
            : (e.length < r && (e = new Uint8ClampedArray(r)),
              e.set(this.buffer.slice(n, n + r))),
          e
        );
      }),
      (e.prototype.getMatrix = function () {
        return this.buffer;
      }),
      (e.prototype.isCropSupported = function () {
        return !0;
      }),
      (e.prototype.crop = function (e, r, n, o) {
        return t.prototype.crop.call(this, e, r, n, o), this;
      }),
      (e.prototype.isRotateSupported = function () {
        return !0;
      }),
      (e.prototype.rotateCounterClockwise = function () {
        return this.rotate(-90), this;
      }),
      (e.prototype.rotateCounterClockwise45 = function () {
        return this.rotate(-45), this;
      }),
      (e.prototype.invert = function () {
        return new Y(this);
      }),
      (e.prototype.getTempCanvasElement = function () {
        if (null === this.tempCanvasElement) {
          var t = this.canvas.ownerDocument.createElement('canvas');
          (t.width = this.canvas.width),
            (t.height = this.canvas.height),
            (this.tempCanvasElement = t);
        }
        return this.tempCanvasElement;
      }),
      (e.prototype.rotate = function (t) {
        var r = this.getTempCanvasElement();
        if (!r) throw new Error('Could not create a Canvas element.');
        var n = t * e.DEGREE_TO_RADIANS,
          o = this.canvas.width,
          i = this.canvas.height,
          a = Math.ceil(Math.abs(Math.cos(n)) * o + Math.abs(Math.sin(n)) * i),
          u = Math.ceil(Math.abs(Math.sin(n)) * o + Math.abs(Math.cos(n)) * i);
        (r.width = a), (r.height = u);
        var s = r.getContext('2d');
        if (!s) throw new Error('Could not create a Convas Context element.');
        return (
          s.translate(a / 2, u / 2),
          s.rotate(n),
          s.drawImage(this.canvas, o / -2, i / -2),
          (this.buffer = e.makeBufferFromCanvasImageData(r)),
          this
        );
      }),
      (e.DEGREE_TO_RADIANS = Math.PI / 180),
      e
    );
  })(j);
function Oo() {
  return 'undefined' != typeof navigator;
}
function To() {
  return !!(
    Oo() &&
    navigator.mediaDevices &&
    navigator.mediaDevices.enumerateDevices
  );
}
var bo = function () {
    return (
      (bo =
        Object.assign ||
        function (t) {
          for (var e, r = 1, n = arguments.length; r < n; r++)
            for (var o in (e = arguments[r]))
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }),
      bo.apply(this, arguments)
    );
  },
  Ro = function (t, e, r, n) {
    return new (r || (r = Promise))(function (o, i) {
      function a(t) {
        try {
          s(n.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          s(n.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function s(t) {
        var e;
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                })).then(a, u);
      }
      s((n = n.apply(t, e || [])).next());
    });
  },
  No = function (t, e) {
    var r,
      n,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function u(i) {
      return function (u) {
        return (function (i) {
          if (r) throw new TypeError('Generator is already executing.');
          for (; a; )
            try {
              if (
                ((r = 1),
                n &&
                  (o =
                    2 & i[0]
                      ? n.return
                      : i[0]
                      ? n.throw || ((o = n.return) && o.call(n), 0)
                      : n.next) &&
                  !(o = o.call(n, i[1])).done)
              )
                return o;
              switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, { value: i[1], done: !1 };
                case 5:
                  a.label++, (n = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    (a.label = o[1]), (o = i);
                    break;
                  }
                  if (o && a.label < o[2]) {
                    (a.label = o[2]), a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              i = e.call(t, a);
            } catch (t) {
              (i = [6, t]), (n = 0);
            } finally {
              r = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, u]);
      };
    }
  },
  Do = function (t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  },
  Po = {
    delayBetweenScanAttempts: 500,
    delayBetweenScanSuccess: 500,
    tryPlayVideoTimeout: 5e3,
  },
  Mo = (function () {
    function t(t, e, r) {
      void 0 === e && (e = new Map()),
        void 0 === r && (r = {}),
        (this.reader = t),
        (this.hints = e),
        (this.options = bo(bo({}, Po), r));
    }
    return (
      Object.defineProperty(t.prototype, 'possibleFormats', {
        set: function (t) {
          this.hints.set(T.POSSIBLE_FORMATS, t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.addVideoSource = function (t, e) {
        try {
          t.srcObject = e;
        } catch (r) {
          t.src = URL.createObjectURL(e);
        }
      }),
      (t.mediaStreamSetTorch = function (t, e) {
        return Ro(this, void 0, void 0, function () {
          return No(this, function (r) {
            switch (r.label) {
              case 0:
                return [
                  4,
                  t.applyConstraints({
                    advanced: [
                      { fillLightMode: e ? 'flash' : 'off', torch: !!e },
                    ],
                  }),
                ];
              case 1:
                return r.sent(), [2];
            }
          });
        });
      }),
      (t.mediaStreamIsTorchCompatible = function (e) {
        var r,
          n,
          o = e.getVideoTracks();
        try {
          for (var i = Do(o), a = i.next(); !a.done; a = i.next()) {
            var u = a.value;
            if (t.mediaStreamIsTorchCompatibleTrack(u)) return !0;
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            a && !a.done && (n = i.return) && n.call(i);
          } finally {
            if (r) throw r.error;
          }
        }
        return !1;
      }),
      (t.mediaStreamIsTorchCompatibleTrack = function (t) {
        try {
          return 'torch' in t.getCapabilities();
        } catch (t) {
          return (
            console.error(t),
            console.warn(
              'Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available.'
            ),
            !1
          );
        }
      }),
      (t.isVideoPlaying = function (t) {
        return t.currentTime > 0 && !t.paused && t.readyState > 2;
      }),
      (t.getMediaElement = function (t, e) {
        var r = document.getElementById(t);
        if (!r) throw new f("element with id '" + t + "' not found");
        if (r.nodeName.toLowerCase() !== e.toLowerCase())
          throw new f(
            "element with id '" + t + "' must be an " + e + ' element'
          );
        return r;
      }),
      (t.createVideoElement = function (e) {
        if (e instanceof HTMLVideoElement) return e;
        if ('string' == typeof e) return t.getMediaElement(e, 'video');
        if (!e && 'undefined' != typeof document) {
          var r = document.createElement('video');
          return (r.width = 200), (r.height = 200), r;
        }
        throw new Error("Couldn't get videoElement from videoSource!");
      }),
      (t.prepareImageElement = function (e) {
        if (e instanceof HTMLImageElement) return e;
        if ('string' == typeof e) return t.getMediaElement(e, 'img');
        if (void 0 === e) {
          var r = document.createElement('img');
          return (r.width = 200), (r.height = 200), r;
        }
        throw new Error("Couldn't get imageElement from imageSource!");
      }),
      (t.prepareVideoElement = function (e) {
        var r = t.createVideoElement(e);
        return (
          r.setAttribute('autoplay', 'true'),
          r.setAttribute('muted', 'true'),
          r.setAttribute('playsinline', 'true'),
          r
        );
      }),
      (t.isImageLoaded = function (t) {
        return !!t.complete && 0 !== t.naturalWidth;
      }),
      (t.createBinaryBitmapFromCanvas = function (t) {
        var e = new So(t),
          r = new W(e);
        return new d(r);
      }),
      (t.drawImageOnCanvas = function (t, e) {
        t.drawImage(e, 0, 0);
      }),
      (t.getMediaElementDimensions = function (t) {
        if (t instanceof HTMLVideoElement)
          return { height: t.videoHeight, width: t.videoWidth };
        if (t instanceof HTMLImageElement)
          return {
            height: t.naturalHeight || t.height,
            width: t.naturalWidth || t.width,
          };
        throw new Error("Couldn't find the Source's dimentions!");
      }),
      (t.createCaptureCanvas = function (e) {
        if (!e)
          throw new f(
            'Cannot create a capture canvas without a media element.'
          );
        if ('undefined' == typeof document)
          throw new Error(
            'The page "Document" is undefined, make sure you\'re running in a browser.'
          );
        var r = document.createElement('canvas'),
          n = t.getMediaElementDimensions(e),
          o = n.width,
          i = n.height;
        return (
          (r.style.width = o + 'px'),
          (r.style.height = i + 'px'),
          (r.width = o),
          (r.height = i),
          r
        );
      }),
      (t.tryPlayVideo = function (e) {
        return Ro(this, void 0, void 0, function () {
          var r;
          return No(this, function (n) {
            switch (n.label) {
              case 0:
                if (null == e ? void 0 : e.ended)
                  return (
                    console.error('Trying to play video that has ended.'),
                    [2, !1]
                  );
                if (t.isVideoPlaying(e))
                  return (
                    console.warn(
                      'Trying to play video that is already playing.'
                    ),
                    [2, !0]
                  );
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]), [4, e.play()];
              case 2:
                return n.sent(), [2, !0];
              case 3:
                return (
                  (r = n.sent()),
                  console.warn('It was not possible to play the video.', r),
                  [2, !1]
                );
              case 4:
                return [2];
            }
          });
        });
      }),
      (t.createCanvasFromMediaElement = function (e) {
        var r = t.createCaptureCanvas(e),
          n = r.getContext('2d');
        if (!n) throw new Error("Couldn't find Canvas 2D Context.");
        return t.drawImageOnCanvas(n, e), r;
      }),
      (t.createBinaryBitmapFromMediaElem = function (e) {
        var r = t.createCanvasFromMediaElement(e);
        return t.createBinaryBitmapFromCanvas(r);
      }),
      (t.destroyImageElement = function (t) {
        (t.src = ''), t.removeAttribute('src'), (t = void 0);
      }),
      (t.listVideoInputDevices = function () {
        return Ro(this, void 0, void 0, function () {
          var t, e, r, n, o, i, a, u, s, c, f, h;
          return No(this, function (l) {
            switch (l.label) {
              case 0:
                if (!Oo())
                  throw new Error(
                    "Can't enumerate devices, navigator is not present."
                  );
                if (!To())
                  throw new Error(
                    "Can't enumerate devices, method not supported."
                  );
                return [4, navigator.mediaDevices.enumerateDevices()];
              case 1:
                (t = l.sent()), (e = []);
                try {
                  for (r = Do(t), n = r.next(); !n.done; n = r.next())
                    (o = n.value),
                      'videoinput' ===
                        (i = 'video' === o.kind ? 'videoinput' : o.kind) &&
                        ((a = o.deviceId || o.id),
                        (u = o.label || 'Video device ' + (e.length + 1)),
                        (s = o.groupId),
                        (c = { deviceId: a, label: u, kind: i, groupId: s }),
                        e.push(c));
                } catch (t) {
                  f = { error: t };
                } finally {
                  try {
                    n && !n.done && (h = r.return) && h.call(r);
                  } finally {
                    if (f) throw f.error;
                  }
                }
                return [2, e];
            }
          });
        });
      }),
      (t.findDeviceById = function (e) {
        return Ro(this, void 0, void 0, function () {
          var r;
          return No(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, t.listVideoInputDevices()];
              case 1:
                return (r = n.sent())
                  ? [
                      2,
                      r.find(function (t) {
                        return t.deviceId === e;
                      }),
                    ]
                  : [2];
            }
          });
        });
      }),
      (t.cleanVideoSource = function (t) {
        if (t) {
          try {
            t.srcObject = null;
          } catch (e) {
            t.src = '';
          }
          t && t.removeAttribute('src');
        }
      }),
      (t.playVideoOnLoadAsync = function (e, r) {
        return Ro(this, void 0, void 0, function () {
          return No(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, t.tryPlayVideo(e)];
              case 1:
                return n.sent()
                  ? [2, !0]
                  : [
                      2,
                      new Promise(function (n, o) {
                        var i = setTimeout(function () {
                            t.isVideoPlaying(e) ||
                              (o(!1), e.removeEventListener('canplay', a));
                          }, r),
                          a = function () {
                            t.tryPlayVideo(e).then(function (t) {
                              clearTimeout(i),
                                e.removeEventListener('canplay', a),
                                n(t);
                            });
                          };
                        e.addEventListener('canplay', a);
                      }),
                    ];
            }
          });
        });
      }),
      (t.attachStreamToVideo = function (e, r, n) {
        return (
          void 0 === n && (n = 5e3),
          Ro(this, void 0, void 0, function () {
            var o;
            return No(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (o = t.prepareVideoElement(r)),
                    t.addVideoSource(o, e),
                    [4, t.playVideoOnLoadAsync(o, n)]
                  );
                case 1:
                  return i.sent(), [2, o];
              }
            });
          })
        );
      }),
      (t._waitImageLoad = function (e) {
        return new Promise(function (r, n) {
          var o = setTimeout(function () {
              t.isImageLoaded(e) || (e.removeEventListener('load', i), n());
            }, 1e4),
            i = function () {
              clearTimeout(o), e.removeEventListener('load', i), r();
            };
          e.addEventListener('load', i);
        });
      }),
      (t.checkCallbackFnOrThrow = function (t) {
        if (!t)
          throw new f(
            '`callbackFn` is a required parameter, you cannot capture results without it.'
          );
      }),
      (t.disposeMediaStream = function (t) {
        t.getVideoTracks().forEach(function (t) {
          return t.stop();
        }),
          (t = void 0);
      }),
      (t.prototype.decode = function (e) {
        var r = t.createCanvasFromMediaElement(e);
        return this.decodeFromCanvas(r);
      }),
      (t.prototype.decodeBitmap = function (t) {
        return this.reader.decode(t, this.hints);
      }),
      (t.prototype.decodeFromCanvas = function (e) {
        var r = t.createBinaryBitmapFromCanvas(e);
        return this.decodeBitmap(r);
      }),
      (t.prototype.decodeFromImageElement = function (e) {
        return Ro(this, void 0, void 0, function () {
          var r;
          return No(this, function (n) {
            switch (n.label) {
              case 0:
                if (!e) throw new f('An image element must be provided.');
                return (
                  (r = t.prepareImageElement(e)),
                  [4, this._decodeOnLoadImage(r)]
                );
              case 1:
                return [2, n.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeFromImageUrl = function (e) {
        return Ro(this, void 0, void 0, function () {
          var r;
          return No(this, function (n) {
            switch (n.label) {
              case 0:
                if (!e) throw new f('An URL must be provided.');
                ((r = t.prepareImageElement()).src = e), (n.label = 1);
              case 1:
                return (
                  n.trys.push([1, , 3, 4]), [4, this.decodeFromImageElement(r)]
                );
              case 2:
                return [2, n.sent()];
              case 3:
                return t.destroyImageElement(r), [7];
              case 4:
                return [2];
            }
          });
        });
      }),
      (t.prototype.decodeFromConstraints = function (e, r, n) {
        return Ro(this, void 0, void 0, function () {
          var o, i;
          return No(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  t.checkCallbackFnOrThrow(n),
                  [4, navigator.mediaDevices.getUserMedia(e)]
                );
              case 1:
                (o = a.sent()), (a.label = 2);
              case 2:
                return (
                  a.trys.push([2, 4, , 5]), [4, this.decodeFromStream(o, r, n)]
                );
              case 3:
                return [2, a.sent()];
              case 4:
                throw ((i = a.sent()), t.disposeMediaStream(o), i);
              case 5:
                return [2];
            }
          });
        });
      }),
      (t.prototype.decodeFromStream = function (e, r, n) {
        return Ro(this, void 0, void 0, function () {
          var o,
            i,
            a,
            u,
            s,
            c,
            f,
            h,
            l,
            d,
            p = this;
          return No(this, function (g) {
            switch (g.label) {
              case 0:
                return (
                  t.checkCallbackFnOrThrow(n),
                  (o = this.options.tryPlayVideoTimeout),
                  [4, t.attachStreamToVideo(e, r, o)]
                );
              case 1:
                return (
                  (i = g.sent()),
                  (a = function () {
                    var t, r;
                    try {
                      for (
                        var n = Do(e.getVideoTracks()), o = n.next();
                        !o.done;
                        o = n.next()
                      ) {
                        o.value.stop();
                      }
                    } catch (e) {
                      t = { error: e };
                    } finally {
                      try {
                        o && !o.done && (r = n.return) && r.call(n);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                    e = void 0;
                  }),
                  (u = function () {
                    a(), t.cleanVideoSource(i);
                  }),
                  (s = this.scan(i, n, u)),
                  (c = e.getVideoTracks()),
                  (f = bo(bo({}, s), {
                    stop: function () {
                      s.stop();
                    },
                    streamVideoConstraintsApply: function (t, e) {
                      return Ro(this, void 0, void 0, function () {
                        var r, n, o, i, a, u;
                        return No(this, function (s) {
                          switch (s.label) {
                            case 0:
                              (r = e ? c.filter(e) : c), (s.label = 1);
                            case 1:
                              s.trys.push([1, 6, 7, 8]),
                                (n = Do(r)),
                                (o = n.next()),
                                (s.label = 2);
                            case 2:
                              return o.done
                                ? [3, 5]
                                : [4, o.value.applyConstraints(t)];
                            case 3:
                              s.sent(), (s.label = 4);
                            case 4:
                              return (o = n.next()), [3, 2];
                            case 5:
                              return [3, 8];
                            case 6:
                              return (i = s.sent()), (a = { error: i }), [3, 8];
                            case 7:
                              try {
                                o && !o.done && (u = n.return) && u.call(n);
                              } finally {
                                if (a) throw a.error;
                              }
                              return [7];
                            case 8:
                              return [2];
                          }
                        });
                      });
                    },
                    streamVideoConstraintsGet: function (t) {
                      return c.find(t).getConstraints();
                    },
                    streamVideoSettingsGet: function (t) {
                      return c.find(t).getSettings();
                    },
                    streamVideoCapabilitiesGet: function (t) {
                      return c.find(t).getCapabilities();
                    },
                  })),
                  t.mediaStreamIsTorchCompatible(e) &&
                    ((h =
                      null == c
                        ? void 0
                        : c.find(function (e) {
                            return t.mediaStreamIsTorchCompatibleTrack(e);
                          })),
                    (l = function (e) {
                      return Ro(p, void 0, void 0, function () {
                        return No(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return [4, t.mediaStreamSetTorch(h, e)];
                            case 1:
                              return r.sent(), [2];
                          }
                        });
                      });
                    }),
                    (f.switchTorch = l),
                    (d = function () {
                      s.stop(), l(!1);
                    }),
                    (f.stop = d)),
                  [2, f]
                );
            }
          });
        });
      }),
      (t.prototype.decodeFromVideoDevice = function (e, r, n) {
        return Ro(this, void 0, void 0, function () {
          var o;
          return No(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  t.checkCallbackFnOrThrow(n),
                  (o = {
                    video: e
                      ? { deviceId: { exact: e } }
                      : { facingMode: 'environment' },
                  }),
                  [4, this.decodeFromConstraints(o, r, n)]
                );
              case 1:
                return [2, i.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeFromVideoElement = function (e, r) {
        return Ro(this, void 0, void 0, function () {
          var n, o;
          return No(this, function (i) {
            switch (i.label) {
              case 0:
                if ((t.checkCallbackFnOrThrow(r), !e))
                  throw new f('A video element must be provided.');
                return (
                  (n = t.prepareVideoElement(e)),
                  (o = this.options.tryPlayVideoTimeout),
                  [4, t.playVideoOnLoadAsync(n, o)]
                );
              case 1:
                return i.sent(), [2, this.scan(n, r)];
            }
          });
        });
      }),
      (t.prototype.decodeFromVideoUrl = function (e, r) {
        return Ro(this, void 0, void 0, function () {
          var n, o, i;
          return No(this, function (a) {
            switch (a.label) {
              case 0:
                if ((t.checkCallbackFnOrThrow(r), !e))
                  throw new f('An URL must be provided.');
                return (
                  ((n = t.prepareVideoElement()).src = e),
                  (o = function () {
                    t.cleanVideoSource(n);
                  }),
                  (i = this.options.tryPlayVideoTimeout),
                  [4, t.playVideoOnLoadAsync(n, i)]
                );
              case 1:
                return a.sent(), [2, this.scan(n, r, o)];
            }
          });
        });
      }),
      (t.prototype.decodeOnceFromConstraints = function (t, e) {
        return Ro(this, void 0, void 0, function () {
          var r;
          return No(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, navigator.mediaDevices.getUserMedia(t)];
              case 1:
                return (r = n.sent()), [4, this.decodeOnceFromStream(r, e)];
              case 2:
                return [2, n.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeOnceFromStream = function (e, r) {
        return Ro(this, void 0, void 0, function () {
          var n, o;
          return No(this, function (i) {
            switch (i.label) {
              case 0:
                return (n = Boolean(r)), [4, t.attachStreamToVideo(e, r)];
              case 1:
                (o = i.sent()), (i.label = 2);
              case 2:
                return i.trys.push([2, , 4, 5]), [4, this.scanOneResult(o)];
              case 3:
                return [2, i.sent()];
              case 4:
                return n || t.cleanVideoSource(o), [7];
              case 5:
                return [2];
            }
          });
        });
      }),
      (t.prototype.decodeOnceFromVideoDevice = function (t, e) {
        return Ro(this, void 0, void 0, function () {
          var r;
          return No(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (r = {
                    video: t
                      ? { deviceId: { exact: t } }
                      : { facingMode: 'environment' },
                  }),
                  [4, this.decodeOnceFromConstraints(r, e)]
                );
              case 1:
                return [2, n.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeOnceFromVideoElement = function (e) {
        return Ro(this, void 0, void 0, function () {
          var r, n;
          return No(this, function (o) {
            switch (o.label) {
              case 0:
                if (!e) throw new f('A video element must be provided.');
                return (
                  (r = t.prepareVideoElement(e)),
                  (n = this.options.tryPlayVideoTimeout),
                  [4, t.playVideoOnLoadAsync(r, n)]
                );
              case 1:
                return o.sent(), [4, this.scanOneResult(r)];
              case 2:
                return [2, o.sent()];
            }
          });
        });
      }),
      (t.prototype.decodeOnceFromVideoUrl = function (e) {
        return Ro(this, void 0, void 0, function () {
          var r, n;
          return No(this, function (o) {
            switch (o.label) {
              case 0:
                if (!e) throw new f('An URL must be provided.');
                ((r = t.prepareVideoElement()).src = e),
                  (n = this.decodeOnceFromVideoElement(r)),
                  (o.label = 1);
              case 1:
                return o.trys.push([1, , 3, 4]), [4, n];
              case 2:
                return [2, o.sent()];
              case 3:
                return t.cleanVideoSource(r), [7];
              case 4:
                return [2];
            }
          });
        });
      }),
      (t.prototype.scanOneResult = function (t, e, r, n) {
        var o = this;
        return (
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === n && (n = !0),
          new Promise(function (i, a) {
            o.scan(t, function (t, o, u) {
              if (t) return i(t), void u.stop();
              if (o) {
                if (o instanceof U && e) return;
                if (o instanceof g && r) return;
                if (o instanceof R && n) return;
                u.stop(), a(o);
              }
            });
          })
        );
      }),
      (t.prototype.scan = function (e, r, n) {
        var o = this;
        t.checkCallbackFnOrThrow(r);
        var i = t.createCaptureCanvas(e),
          a = i.getContext('2d');
        if (!a)
          throw new Error("Couldn't create canvas for visual element scan.");
        var u,
          s = function () {
            (a = void 0), (i = void 0);
          },
          c = !1,
          f = {
            stop: function () {
              (c = !0), clearTimeout(u), s(), n && n();
            },
          },
          h = function () {
            if (!c)
              try {
                t.drawImageOnCanvas(a, e);
                var l = o.decodeFromCanvas(i);
                r(l, void 0, f),
                  (u = setTimeout(h, o.options.delayBetweenScanSuccess));
              } catch (t) {
                if (
                  (r(void 0, t, f),
                  t instanceof g || t instanceof R || t instanceof U)
                )
                  return void (u = setTimeout(
                    h,
                    o.options.delayBetweenScanAttempts
                  ));
                s(), n && n(t);
              }
          };
        return h(), f;
      }),
      (t.prototype._decodeOnLoadImage = function (e) {
        return Ro(this, void 0, void 0, function () {
          return No(this, function (r) {
            switch (r.label) {
              case 0:
                return t.isImageLoaded(e) ? [3, 2] : [4, t._waitImageLoad(e)];
              case 1:
                r.sent(), (r.label = 2);
              case 2:
                return [2, this.decode(e)];
            }
          });
        });
      }),
      t
    );
  })(),
  Bo = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })();
!(function (t) {
  function e(e, r) {
    return t.call(this, new Mt(), e, r) || this;
  }
  Bo(e, t);
})(Mo);
var Lo = (function () {
  var t = function (e, r) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        }),
      t(e, r)
    );
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r),
      (e.prototype =
        null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
  };
})();
!(function (t) {
  function e(e, r) {
    return t.call(this, new fr(e), e, r) || this;
  }
  Lo(e, t);
})(Mo);
var Fo = (function () {
  var t = function (e, r) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        }),
      t(e, r)
    );
  };
  return function (e, r) {
    function n() {
      this.constructor = e;
    }
    t(e, r),
      (e.prototype =
        null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
  };
})();
!(function (t) {
  function e(e, r) {
    return t.call(this, new Or(), e, r) || this;
  }
  Fo(e, t);
})(Mo);
var ko = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  xo = (function (t) {
    function e(e, r) {
      var n = this,
        o = new $n();
      return o.setHints(e), ((n = t.call(this, o, e, r) || this).reader = o), n;
    }
    return (
      ko(e, t),
      Object.defineProperty(e.prototype, 'possibleFormats', {
        set: function (t) {
          this.hints.set(T.POSSIBLE_FORMATS, t),
            this.reader.setHints(this.hints);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.decodeBitmap = function (t) {
        return this.reader.decodeWithState(t);
      }),
      (e.prototype.setHints = function (t) {
        (this.hints = t), this.reader.setHints(this.hints);
      }),
      e
    );
  })(Mo),
  Vo = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })();
!(function (t) {
  function e(e, r) {
    return t.call(this, new Kn(), e, r) || this;
  }
  Vo(e, t);
})(Mo);
var Uo = (function () {
    var t = function (e, r) {
      return (
        (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          }),
        t(e, r)
      );
    };
    return function (e, r) {
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    };
  })(),
  Ho = (function (t) {
    function e(e, r) {
      return t.call(this, new an(), e, r) || this;
    }
    return Uo(e, t), e;
  })(Mo),
  Go = function (t, e, r) {
    var n = typeof t === r;
    return (
      n ||
        console.warn(
          '[ReactQrReader]: Expected "'
            .concat(e, '" to be a of type "')
            .concat(r, '".')
        ),
      n
    );
  },
  Xo = function (t) {
    var n = t.scanDelay,
      o = t.constraints,
      i = t.onResult,
      a = t.videoId,
      u = t.multiFormat,
      s = e(null),
      c = u ? xo : Ho;
    r(function () {
      var t = new c(null, { delayBetweenScanAttempts: n });
      if (
        !(function () {
          var t = 'undefined' != typeof navigator && !!navigator.mediaDevices;
          return (
            t ||
              console.warn(
                '[ReactQrReader]: MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"'
              ),
            t
          );
        })() &&
        Go(i, 'onResult', 'function')
      ) {
        i(
          null,
          new Error(
            'MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"'
          ),
          t
        );
      }
      return (
        Go(o, 'constraints', 'object') &&
          t
            .decodeFromConstraints({ video: o }, a, function (e, r) {
              Go(i, 'onResult', 'function') && i(e, r, t);
            })
            .then(function (t) {
              return (s.current = t);
            })
            .catch(function (e) {
              Go(i, 'onResult', 'function') && i(null, e, t);
            }),
        function () {
          var t;
          null === (t = s.current) || void 0 === t || t.stop();
        }
      );
    }, []);
  },
  Wo = function () {
    return (
      (Wo =
        Object.assign ||
        function (t) {
          for (var e, r = 1, n = arguments.length; r < n; r++)
            for (var o in (e = arguments[r]))
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }),
      Wo.apply(this, arguments)
    );
  },
  jo = {
    container: {
      width: '100%',
      paddingTop: '100%',
      overflow: 'hidden',
      position: 'relative',
    },
    video: {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      transform: void 0,
    },
  },
  zo = function (e) {
    var r = e.videoContainerStyle,
      n = e.containerStyle,
      o = e.videoStyle,
      i = e.constraints,
      a = e.ViewFinder,
      u = e.scanDelay,
      s = e.className,
      c = e.onResult,
      f = e.videoId,
      h = e.multiFormat;
    return (
      Xo({
        constraints: i,
        scanDelay: u,
        onResult: c,
        videoId: f,
        multiFormat: h,
      }),
      t.createElement(
        'section',
        { className: s, style: n },
        t.createElement(
          'div',
          { style: Wo(Wo({}, jo.container), r) },
          !!a && t.createElement(a, null),
          t.createElement('video', {
            muted: !0,
            id: f,
            style: Wo(Wo(Wo({}, jo.video), o), {
              transform:
                'user' === (null == i ? void 0 : i.facingMode) && 'scaleX(-1)',
            }),
          })
        )
      )
    );
  };
(zo.displayName = 'QrReader'),
  (zo.defaultProps = {
    constraints: { facingMode: 'user' },
    videoId: 'video',
    scanDelay: 500,
  });
export { zo as QrReader, Xo as useQrReader };
//# sourceMappingURL=index.js.map
