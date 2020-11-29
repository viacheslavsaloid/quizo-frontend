function _classCallCheck(r, t) {
  if (!(r instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(r, t) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, t);
    var n = Object.prototype.toString.call(r).slice(8, -1);
    return (
      'Object' === n && r.constructor && (n = r.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(r)
        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(r, t)
        : void 0
    );
  }
}
function _iterableToArray(r) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(r)) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, t) {
  (null == t || t > r.length) && (t = r.length);
  for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n];
  return e;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    XitV: function (r, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return e;
      });
      var e = (function (r) {
        return (r.SIGN_IN = 'sign_in'), (r.SIGN_UP = 'sign_up'), (r.RESTORE_PASSWORD = 'restore_password'), r;
      })({});
    },
    nNRu: function (r, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return y;
      });
      var e = n('+fa1'),
        a = n('AcyG'),
        o = n('xQIH'),
        i = n('auXs'),
        u = n('fXoL'),
        c = [a.c.forFeature(o.a)],
        s = [].concat(_toConsumableArray(e.a), _toConsumableArray(i.c)),
        y = (function () {
          var r = function r() {
            _classCallCheck(this, r);
          };
          return (
            (r.ɵmod = u.Tb({ type: r })),
            (r.ɵinj = u.Sb({
              factory: function (t) {
                return new (t || r)();
              },
              providers: s,
              imports: [c],
            })),
            r
          );
        })();
    },
  },
]);
