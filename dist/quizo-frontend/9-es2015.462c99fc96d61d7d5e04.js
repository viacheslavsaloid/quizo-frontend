(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    OQXL: function (e, t, c) {
      'use strict';
      c.r(t),
        c.d(t, 'ClientModule', function () {
          return P;
        });
      var n = c('tyNb'),
        i = c('fXoL');
      let a = (() => {
        class e {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = i.Pb({
            type: e,
            selectors: [['app-client']],
            decls: 1,
            vars: 0,
            template: function (e, t) {
              1 & e && i.Wb(0, 'router-outlet');
            },
            directives: [n.g],
            styles: [''],
          })),
          e
        );
      })();
      var s = c('o80G'),
        o = c('+fa1'),
        r = c('ofXK');
      function p(e, t) {
        if (1 & e) {
          const e = i.cc();
          i.bc(0, 'li', 1),
            i.jc('click', function () {
              i.Dc(e);
              const c = t.$implicit;
              return i.nc().onGameClick(c);
            }),
            i.Mc(1),
            i.ac();
        }
        if (2 & e) {
          const e = t.$implicit;
          i.Ib(1), i.Oc(' ', e.name, ' ');
        }
      }
      let g = (() => {
        class e {
          constructor(e) {
            this._gamesService = e;
          }
          onGameClick(e) {
            this._gamesService.navigateToGame(e);
          }
          ngOnInit() {
            this.games$ = this._gamesService.getMany$();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Vb(o.b));
          }),
          (e.ɵcmp = i.Pb({
            type: e,
            selectors: [['app-games']],
            decls: 3,
            vars: 3,
            consts: [
              [3, 'click', 4, 'ngFor', 'ngForOf'],
              [3, 'click'],
            ],
            template: function (e, t) {
              1 & e && (i.bc(0, 'ul'), i.Kc(1, p, 2, 1, 'li', 0), i.oc(2, 'async'), i.ac()),
                2 & e && (i.Ib(1), i.vc('ngForOf', i.pc(2, 1, t.games$)));
            },
            directives: [r.k],
            pipes: [r.b],
            styles: [''],
          })),
          e
        );
      })();
      var u = c('mrSG'),
        l = c('1G5W'),
        m = c('+AvP'),
        h = c('ptKI');
      let d = (() => {
          class e {
            constructor(e, t, c, n) {
              (this._ngOnDestroy$ = e),
                (this._gamesService = t),
                (this._activatedRoute = c),
                (this._imagesService = n),
                (this.getLogo = (e) => e && this._imagesService.getPath(e.logo[0])),
                (this.getBackground = (e) =>
                  e && { 'background-image': 'url(' + this._imagesService.getPath(e.background[0]) + ')' });
            }
            ngOnInit() {
              this._activatedRoute.params.pipe(Object(l.a)(this._ngOnDestroy$)).subscribe((e) =>
                Object(u.a)(this, void 0, void 0, function* () {
                  const t = e.id;
                  this.game = yield this._gamesService.getOne({ id: t });
                })
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Vb(m.b), i.Vb(o.b), i.Vb(n.a), i.Vb(h.d));
            }),
            (e.ɵcmp = i.Pb({
              type: e,
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
              directives: [r.m, n.g],
              styles: [
                '.game-wrapper[_ngcontent-%COMP%]{min-height:100vh;background-repeat:no-repeat;background-size:100%;background-color:#f5f5f5}.game-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:350px;margin:0 auto 25px}',
              ],
            })),
            e
          );
        })(),
        v = (() => {
          class e {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = i.Pb({
              type: e,
              selectors: [['app-game-play']],
              decls: 2,
              vars: 0,
              template: function (e, t) {
                1 & e && (i.bc(0, 'p'), i.Mc(1, 'game-play works!'), i.ac());
              },
              styles: [''],
            })),
            e
          );
        })();
      var b = c('lJxs'),
        f = c('XitV'),
        y = c('36jV');
      let _ = (() => {
        class e {
          constructor(e, t, c) {
            (this._activatedRoute = e), (this._authService = t), (this._gamesService = c);
          }
          onSubmit(e) {
            return Object(u.a)(this, void 0, void 0, function* () {
              const { id: t } = this.game,
                { token: c } = e,
                n = this._authService.user;
              console.log(!n),
                n || (console.log('sign up'), yield this._authService.login({ type: f.a.SIGN_UP, data: e }));
              const i = yield this._gamesService.hasAccess({ id: t });
              console.log('hasAccess', !i),
                i || (yield this._gamesService.registerToGame({ id: t, token: c })),
                this._gamesService.navigateToGame(this.game);
            });
          }
          ngOnInit() {
            return Object(u.a)(this, void 0, void 0, function* () {
              const e = this._activatedRoute.snapshot.parent.params.id;
              this.game = yield this._gamesService.getOne({ id: e });
              const t = yield this._gamesService.hasAccess({ id: e }),
                c = this.game.private && !t;
              this.fields$ = this._authService.user$.pipe(Object(b.a)((e) => (e ? (c ? 'token' : '') : 'sign_up')));
            });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Vb(n.a), i.Vb(h.g), i.Vb(o.b));
          }),
          (e.ɵcmp = i.Pb({
            type: e,
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
            directives: [y.a],
            pipes: [r.b],
            styles: ['app-formly-form[_ngcontent-%COMP%]{width:50%;margin:0 auto}'],
          })),
          e
        );
      })();
      var S = c('auXs');
      const O = [
        {
          path: '',
          component: a,
          children: [
            { path: '', redirectTo: s.a.GAMES.path, pathMatch: 'full' },
            { path: s.a.GAMES.path, component: g },
            {
              path: s.a.GAME.path,
              canActivate: [S.e],
              component: d,
              children: [
                { path: s.a.GAME_AUTH.path, component: _ },
                { path: s.a.GAME_PLAY.path, canActivate: [S.d], component: v },
              ],
            },
          ],
        },
      ];
      let k = (() => {
        class e {}
        return (
          (e.ɵmod = i.Tb({ type: e })),
          (e.ɵinj = i.Sb({
            factory: function (t) {
              return new (t || e)();
            },
            imports: [[n.f.forChild(O)], n.f],
          })),
          e
        );
      })();
      var w = c('jvDc'),
        G = c('nNRu');
      const M = [w.a, G.a, k];
      let P = (() => {
        class e {}
        return (
          (e.ɵmod = i.Tb({ type: e })),
          (e.ɵinj = i.Sb({
            factory: function (t) {
              return new (t || e)();
            },
            imports: [M],
          })),
          e
        );
      })();
    },
  },
]);
