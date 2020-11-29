function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    OQXL: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'ClientModule', function () {
          return V;
        });
      var a,
        c = n('tyNb'),
        i = n('fXoL'),
        r =
          (((a = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return _createClass(e, [{ key: 'ngOnInit', value: function () {} }]), e;
          })()).ɵfac = function (e) {
            return new (e || a)();
          }),
          (a.ɵcmp = i.Pb({
            type: a,
            selectors: [['app-client']],
            decls: 1,
            vars: 0,
            template: function (e, t) {
              1 & e && i.Wb(0, 'router-outlet');
            },
            directives: [c.g],
            styles: [''],
          })),
          a),
        s = n('o80G'),
        o = n('+fa1'),
        u = n('ofXK');
      function l(e, t) {
        if (1 & e) {
          var n = i.cc();
          i.bc(0, 'li', 1),
            i.jc('click', function () {
              i.Dc(n);
              var e = t.$implicit;
              return i.nc().onGameClick(e);
            }),
            i.Mc(1),
            i.ac();
        }
        if (2 & e) {
          var a = t.$implicit;
          i.Ib(1), i.Oc(' ', a.name, ' ');
        }
      }
      var p,
        g,
        f,
        h,
        m,
        v,
        d =
          (((p = (function () {
            function e(t) {
              _classCallCheck(this, e), (this._gamesService = t);
            }
            return (
              _createClass(e, [
                {
                  key: 'onGameClick',
                  value: function (e) {
                    this._gamesService.navigateToGame(e);
                  },
                },
                {
                  key: 'ngOnInit',
                  value: function () {
                    this.games$ = this._gamesService.getMany$();
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || p)(i.Vb(o.b));
          }),
          (p.ɵcmp = i.Pb({
            type: p,
            selectors: [['app-games']],
            decls: 3,
            vars: 3,
            consts: [
              [3, 'click', 4, 'ngFor', 'ngForOf'],
              [3, 'click'],
            ],
            template: function (e, t) {
              1 & e && (i.bc(0, 'ul'), i.Kc(1, l, 2, 1, 'li', 0), i.oc(2, 'async'), i.ac()),
                2 & e && (i.Ib(1), i.vc('ngForOf', i.pc(2, 1, t.games$)));
            },
            directives: [u.k],
            pipes: [u.b],
            styles: [''],
          })),
          p),
        b = n('mrSG'),
        _ = n('1G5W'),
        k = n('+AvP'),
        y = n('ptKI'),
        C =
          (((f = (function () {
            function e(t, n, a, c) {
              var i = this;
              _classCallCheck(this, e),
                (this._ngOnDestroy$ = t),
                (this._gamesService = n),
                (this._activatedRoute = a),
                (this._imagesService = c),
                (this.getLogo = function (e) {
                  return e && i._imagesService.getPath(e.logo[0]);
                }),
                (this.getBackground = function (e) {
                  return e && { 'background-image': 'url(' + i._imagesService.getPath(e.background[0]) + ')' };
                });
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnInit',
                  value: function () {
                    var e = this;
                    this._activatedRoute.params.pipe(Object(_.a)(this._ngOnDestroy$)).subscribe(function (t) {
                      return Object(b.a)(
                        e,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          var n;
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (n = t.id), (e.next = 3), this._gamesService.getOne({ id: n });
                                  case 3:
                                    this.game = e.sent;
                                  case 4:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || f)(i.Vb(k.b), i.Vb(o.b), i.Vb(c.a), i.Vb(y.d));
          }),
          (f.ɵcmp = i.Pb({
            type: f,
            selectors: [['app-game']],
            decls: 4,
            vars: 2,
            consts: [
              [1, 'game-wrapper', 3, 'ngStyle'],
              [3, 'src'],
              [1, 'content-wrapper'],
            ],
            template: function (e, t) {
              1 & e &&
                (i.bc(0, 'div', 0), i.Wb(1, 'img', 1), i.bc(2, 'div', 2), i.Wb(3, 'router-outlet'), i.ac(), i.ac()),
                2 & e && (i.vc('ngStyle', t.getBackground(t.game)), i.Ib(1), i.vc('src', t.getLogo(t.game), i.Fc));
            },
            directives: [u.m, c.g],
            styles: [
              '.game-wrapper[_ngcontent-%COMP%]{min-height:100vh;background-repeat:no-repeat;background-size:100%;background-color:#f5f5f5}.game-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:350px;margin:0 auto 25px}',
            ],
          })),
          f),
        w =
          (((g = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return _createClass(e, [{ key: 'ngOnInit', value: function () {} }]), e;
          })()).ɵfac = function (e) {
            return new (e || g)();
          }),
          (g.ɵcmp = i.Pb({
            type: g,
            selectors: [['app-game-play']],
            decls: 2,
            vars: 0,
            template: function (e, t) {
              1 & e && (i.bc(0, 'p'), i.Mc(1, 'game-play works!'), i.ac());
            },
            styles: [''],
          })),
          g),
        S = n('lJxs'),
        O = n('XitV'),
        P = n('36jV'),
        x =
          (((h = (function () {
            function e(t, n, a) {
              _classCallCheck(this, e), (this._activatedRoute = t), (this._authService = n), (this._gamesService = a);
            }
            return (
              _createClass(e, [
                {
                  key: 'onSubmit',
                  value: function (e) {
                    return Object(b.a)(
                      this,
                      void 0,
                      void 0,
                      regeneratorRuntime.mark(function t() {
                        var n, a, c, i;
                        return regeneratorRuntime.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = this.game.id),
                                    (a = e.token),
                                    (c = this._authService.user),
                                    console.log(!c),
                                    (t.t0 = c),
                                    t.t0)
                                  ) {
                                    t.next = 7;
                                    break;
                                  }
                                  return (
                                    console.log('sign up'),
                                    (t.next = 7),
                                    this._authService.login({ type: O.a.SIGN_UP, data: e })
                                  );
                                case 7:
                                  return (t.next = 9), this._gamesService.hasAccess({ id: n });
                                case 9:
                                  if (((i = t.sent), console.log('hasAccess', !i), (t.t1 = i), t.t1)) {
                                    t.next = 15;
                                    break;
                                  }
                                  return (t.next = 15), this._gamesService.registerToGame({ id: n, token: a });
                                case 15:
                                  this._gamesService.navigateToGame(this.game);
                                case 16:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                  },
                },
                {
                  key: 'ngOnInit',
                  value: function () {
                    return Object(b.a)(
                      this,
                      void 0,
                      void 0,
                      regeneratorRuntime.mark(function e() {
                        var t, n, a;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = this._activatedRoute.snapshot.parent.params.id),
                                    (e.next = 3),
                                    this._gamesService.getOne({ id: t })
                                  );
                                case 3:
                                  return (this.game = e.sent), (e.next = 6), this._gamesService.hasAccess({ id: t });
                                case 6:
                                  (n = e.sent),
                                    (a = this.game.private && !n),
                                    (this.fields$ = this._authService.user$.pipe(
                                      Object(S.a)(function (e) {
                                        return e ? (a ? 'token' : '') : 'sign_up';
                                      })
                                    ));
                                case 9:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || h)(i.Vb(c.a), i.Vb(y.g), i.Vb(o.b));
          }),
          (h.ɵcmp = i.Pb({
            type: h,
            selectors: [['app-game-auth']],
            decls: 2,
            vars: 3,
            consts: [
              [
                'submitText',
                '\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f',
                'type',
                'game',
                3,
                'fields',
                'submited',
              ],
            ],
            template: function (e, t) {
              1 & e &&
                (i.bc(0, 'app-formly-form', 0),
                i.jc('submited', function (e) {
                  return t.onSubmit(e);
                }),
                i.oc(1, 'async'),
                i.ac()),
                2 & e && i.vc('fields', i.pc(1, 1, t.fields$));
            },
            directives: [P.a],
            pipes: [u.b],
            styles: ['app-formly-form[_ngcontent-%COMP%]{width:50%;margin:0 auto}'],
          })),
          h),
        G = n('auXs'),
        M = [
          {
            path: '',
            component: r,
            children: [
              { path: '', redirectTo: s.a.GAMES.path, pathMatch: 'full' },
              { path: s.a.GAMES.path, component: d },
              {
                path: s.a.GAME.path,
                canActivate: [G.e],
                component: C,
                children: [
                  { path: s.a.GAME_AUTH.path, component: x },
                  { path: s.a.GAME_PLAY.path, canActivate: [G.d], component: w },
                ],
              },
            ],
          },
        ],
        A =
          (((m = function e() {
            _classCallCheck(this, e);
          }).ɵmod = i.Tb({ type: m })),
          (m.ɵinj = i.Sb({
            factory: function (e) {
              return new (e || m)();
            },
            imports: [[c.f.forChild(M)], c.f],
          })),
          m),
        j = n('jvDc'),
        R = n('nNRu'),
        I = [j.a, R.a, A],
        V =
          (((v = function e() {
            _classCallCheck(this, e);
          }).ɵmod = i.Tb({ type: v })),
          (v.ɵinj = i.Sb({
            factory: function (e) {
              return new (e || v)();
            },
            imports: [I],
          })),
          v);
    },
  },
]);
