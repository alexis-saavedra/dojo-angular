(function () {
  'use strict';

  /* https://github.com/angular/protractor/blob/master/docs/toc.md */

  describe('my app', function () {

    describe('transferencia', function () {

      beforeEach(function () {
        browser.get('#/transferencia');
      });


      it('should render transferencia when user navigates to /tranferencia', function () {
        expect(element.all(by.css('[ng-view] h2')).first().getText()).
          toMatch(/Transferência/);
      });

    });


    describe('extrato', function () {

      beforeEach(function () {
        browser.get('#/extrato');
      });


      it('should render extrato when user navigates to /extrato', function () {
        expect(element.all(by.css('[ng-view] p')).first().getText()).
          toMatch(/Ultimos valores encontrados para a sua conta/);
      });

    });
  });
})();