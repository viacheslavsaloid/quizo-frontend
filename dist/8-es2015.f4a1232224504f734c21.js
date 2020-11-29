(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '53Xx': function (t, e, a) {
      'use strict';
      a.r(e),
        a.d(e, 'AuthModule', function () {
          return y;
        });
      var o = a('tyNb'),
        n = a('fXoL');
      let r = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = n.Pb({
            type: t,
            selectors: [['app-auth']],
            decls: 2,
            vars: 0,
            consts: [[1, 'auth-wrapper']],
            template: function (t, e) {
              1 & t && (n.bc(0, 'div', 0), n.Wb(1, 'router-outlet'), n.ac());
            },
            directives: [o.g],
            styles: [
              '.auth-wrapper[_ngcontent-%COMP%]{width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}',
            ],
          })),
          t
        );
      })();
      var i = a('jETI');
      const s = Object(i.a)({
        SIGN_IN: { path: 'sign-in', fullPath: '/auth/sign-in' },
        SIGN_UP: { path: 'sign-up', fullPath: '/auth/sign-up' },
        RESTORE_PASSWORD: { path: 'restore-password', fullPath: '/auth/restore-password' },
      });
      var c = {
          sign_in: [
            { title: 'PAGES.SIGN_UP', routeTo: s.SIGN_UP.fullPath },
            { title: 'PAGES.RESTORE_PASSWORD', routeTo: s.RESTORE_PASSWORD.fullPath },
          ],
          sign_up: [
            { title: 'PAGES.SIGN_IN', routeTo: s.SIGN_IN.fullPath },
            { title: 'PAGES.RESTORE_PASSWORD', routeTo: s.RESTORE_PASSWORD.fullPath },
          ],
          restore_password: [
            { title: 'PAGES.SIGN_IN', routeTo: s.SIGN_IN.fullPath },
            { title: 'PAGES.SIGN_UP', routeTo: s.SIGN_UP.fullPath },
          ],
        },
        p = a('ptKI'),
        u = a('a1du'),
        l = a('36jV'),
        h = a('ofXK'),
        S = a('PLFS');
      function f(t, e) {
        if ((1 & t && n.Wb(0, 'app-href', 4), 2 & t)) {
          const t = e.$implicit;
          n.vc('text', t.title)('routeTo', t.routeTo);
        }
      }
      let d = (() => {
        class t {
          constructor(t, e) {
            (this._route = t), (this._authSerivce = e), (this.dataField = 'type');
          }
          onSubmit(t) {
            this._authSerivce.login({ type: this.type, data: t });
          }
          ngOnInit() {
            (this.type = this._route.snapshot.data[this.dataField]),
              (this.fields = this.type),
              (this.links = c[this.type]),
              (this.title = `PAGES.${this.type.toUpperCase()}`);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(n.Vb(o.a), n.Vb(p.g));
          }),
          (t.ɵcmp = n.Pb({
            type: t,
            selectors: [['app-auth-page']],
            decls: 4,
            vars: 3,
            consts: [
              [3, 'title'],
              ['card-body', '', 3, 'fields', 'submited'],
              ['card-footer', ''],
              [3, 'text', 'routeTo', 4, 'ngFor', 'ngForOf'],
              [3, 'text', 'routeTo'],
            ],
            template: function (t, e) {
              1 & t &&
                (n.bc(0, 'app-card', 0),
                n.bc(1, 'app-formly-form', 1),
                n.jc('submited', function (t) {
                  return e.onSubmit(t);
                }),
                n.ac(),
                n.bc(2, 'footer', 2),
                n.Kc(3, f, 1, 2, 'app-href', 3),
                n.ac(),
                n.ac()),
                2 & t && (n.vc('title', e.title), n.Ib(1), n.vc('fields', e.fields), n.Ib(2), n.vc('ngForOf', e.links));
            },
            directives: [u.a, l.a, h.k, S.a],
            styles: ['footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}'],
          })),
          t
        );
      })();
      var P = a('XitV');
      const _ = [
        {
          path: '',
          component: r,
          children: [
            { path: '', redirectTo: s.SIGN_IN.path, pathMatch: 'full' },
            { path: s.SIGN_IN.path, component: d, data: { type: P.a.SIGN_IN } },
            { path: s.SIGN_UP.path, component: d, data: { type: P.a.SIGN_UP } },
            { path: s.RESTORE_PASSWORD.path, component: d, data: { type: P.a.RESTORE_PASSWORD } },
          ],
        },
        { path: '**', redirectTo: '' },
      ];
      let I = (() => {
        class t {}
        return (
          (t.ɵmod = n.Tb({ type: t })),
          (t.ɵinj = n.Sb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[o.f.forChild(_)], o.f],
          })),
          t
        );
      })();
      const b = [a('jvDc').a, I];
      let y = (() => {
        class t {}
        return (
          (t.ɵmod = n.Tb({ type: t })),
          (t.ɵinj = n.Sb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [b],
          })),
          t
        );
      })();
    },
  },
]);
