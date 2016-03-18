(function () {
  'use strict';

  angular.module('myApp.extratoAPI', []).
    factory('extratoService', function () {

      var extratoService = {};

      extratoService.get = function () {
        var data = {
          agencia: 1,
          numConta: 201332,
          lancamentos: [
            {
              data: "2010-03-29",
              historico: 700,
              descHistorico: "DEPOSITO DINHEIRO-DEP ABERTURA",
              descHistoricoSemComplemento: "DEPOSITO DINHEIRO",
              complemento: "DEP ABERTURA",
              tipoLancamento: "C",
              valor: 14000,
              documento: 0
            },
            {
              data: "2010-03-29",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 14000,
              documento: null
            },
            {
              data: "2010-04-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2010-04-01",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13991,
              documento: null
            },
            {
              data: "2010-05-03",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2010-05-03",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13982,
              documento: null
            },
            {
              data: "2010-06-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2010-06-01",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13973,
              documento: null
            },
            {
              data: "2010-07-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2010-07-01",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13964,
              documento: null
            },
            {
              data: "2010-08-02",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2010-08-02",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13955,
              documento: null
            },
            {
              data: "2010-09-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2010-09-01",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13946,
              documento: null
            },
            {
              data: "2010-10-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2010-10-01",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13937,
              documento: null
            },
            {
              data: "2010-11-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2010-11-01",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13928,
              documento: null
            },
            {
              data: "2010-12-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2010-12-01",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13919,
              documento: null
            },
            {
              data: "2011-01-03",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2011-01-03",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13910,
              documento: null
            },
            {
              data: "2011-02-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2011-02-01",
              historico: 154,
              descHistorico: "APLICACAO FINANCEIRA",
              descHistoricoSemComplemento: "APLICACAO FINANCEIRA",
              complemento: null,
              tipoLancamento: "D",
              valor: 2000,
              documento: 0
            },
            {
              data: "2011-02-01",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 11901,
              documento: null
            },
            {
              data: "2011-03-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2011-03-01",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 11892,
              documento: null
            },
            {
              data: "2011-03-03",
              historico: 156,
              descHistorico: "RESGATE DE CLIENTE",
              descHistoricoSemComplemento: "RESGATE DE CLIENTE",
              complemento: null,
              tipoLancamento: "C",
              valor: 2014.37,
              documento: 0
            },
            {
              data: "2011-03-03",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13906.37,
              documento: null
            },
            {
              data: "2011-04-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2011-04-01",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 13897.37,
              documento: null
            },
            {
              data: "2011-04-25",
              historico: 154,
              descHistorico: "APLICACAO FINANCEIRA",
              descHistoricoSemComplemento: "APLICACAO FINANCEIRA",
              complemento: null,
              tipoLancamento: "D",
              valor: 10000,
              documento: 0
            },
            {
              data: "2011-04-25",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 3897.37,
              documento: null
            },
            {
              data: "2011-05-02",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2011-05-02",
              historico: 99,
              descHistorico: "SALDO FINAL CONTA",
              descHistoricoSemComplemento: "SALDO C/C",
              complemento: null,
              tipoLancamento: "S",
              valor: 3888.37,
              documento: null
            },
            {
              data: "2011-06-01",
              historico: 125,
              descHistorico: "MENS. PACOTE TAR.",
              descHistoricoSemComplemento: "TAR. MATERA PREMIUM",
              complemento: null,
              tipoLancamento: "D",
              valor: 9,
              documento: 0
            },
            {
              data: "2011-06-01",
              historico: null,
              descHistorico: "SALDO C/C",
              descHistoricoSemComplemento: null,
              complemento: null,
              tipoLancamento: "S",
              valor: 3879.37,
              documento: null
            },
            {
              data: "2011-06-02",
              historico: null,
              descHistorico: "SALDO DISPONIVEL",
              descHistoricoSemComplemento: null,
              complemento: null,
              tipoLancamento: "S",
              valor: 3879.37,
              documento: null
            }
          ]
        }

        return data;
      }

      return extratoService;
    });
})();