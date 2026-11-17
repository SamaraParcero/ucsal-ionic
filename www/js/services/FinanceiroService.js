angular.module('ucsalApp')

.factory('FinanceiroService', function() {
  var mensalidades = [
    { semestre: '2025.2', mes: 'Julho', vencimento: '10/07/2025', valor: 1289.90, status: 'Paga' },
    { semestre: '2025.2', mes: 'Agosto', vencimento: '10/08/2025', valor: 1289.90, status: 'Paga' },
    { semestre: '2025.2', mes: 'Setembro', vencimento: '10/09/2025', valor: 1289.90, status: 'Paga' },
    { semestre: '2025.2', mes: 'Outubro', vencimento: '10/10/2025', valor: 1289.90, status: 'Paga' },
    { semestre: '2025.2', mes: 'Novembro', vencimento: '10/11/2025', valor: 1289.90, status: 'Paga' },
    { semestre: '2025.2', mes: 'Dezembro', vencimento: '10/12/2025', valor: 1289.90, status: 'Paga' },

    { semestre: '2026.1', mes: 'Janeiro', vencimento: '10/01/2026', valor: 1354.40, status: 'Paga' },
    { semestre: '2026.1', mes: 'Fevereiro', vencimento: '10/02/2026', valor: 1354.40, status: 'Paga' },
    { semestre: '2026.1', mes: 'Março', vencimento: '10/03/2026', valor: 1354.40, status: 'Paga' },
    { semestre: '2026.1', mes: 'Abril', vencimento: '10/04/2026', valor: 1354.40, status: 'Paga' },
    { semestre: '2026.1', mes: 'Maio', vencimento: '10/05/2026', valor: 1354.40, status: 'Paga' },
    { semestre: '2026.1', mes: 'Junho', vencimento: '10/06/2026', valor: 1354.40, status: 'Paga' },

    { semestre: '2026.2', mes: 'Julho', vencimento: '10/07/2026', valor: 1354.40, status: 'Paga' },
    { semestre: '2026.2', mes: 'Agosto', vencimento: '10/08/2026', valor: 1354.40, status: 'Paga' },
    { semestre: '2026.2', mes: 'Setembro', vencimento: '10/09/2026', valor: 1354.40, status: 'Paga' },
    { semestre: '2026.2', mes: 'Outubro', vencimento: '10/10/2026', valor: 1354.40, status: 'Paga' },
    { semestre: '2026.2', mes: 'Novembro', vencimento: '10/11/2026', valor: 1354.40, status: 'A Pagar', codigo: '23793.38128 60082.477214 33000.063305 4 14250000135440' },
    { semestre: '2026.2', mes: 'Dezembro', vencimento: '10/12/2026', valor: 1354.40, status: 'A Pagar', codigo: '23793.38128 60082.477214 33000.063305 1 14560000135440' }
  ];

  return {
    getSemestres: function() {
      return ['2025.2', '2026.1', '2026.2'];
    },
    listar: function() {
      return mensalidades;
    }
  };
});
