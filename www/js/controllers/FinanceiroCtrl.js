angular.module('ucsalApp')

.controller('FinanceiroCtrl', function($scope, $ionicLoading, FinanceiroService) {
  $scope.semestres = FinanceiroService.getSemestres();
  $scope.mensalidades = FinanceiroService.listar();
  $scope.filtro = { semestre: '2026.2' };

  $scope.copiar = function(m) {
    navigator.clipboard.writeText(m.codigo);
    $ionicLoading.show({ template: 'Código copiado!', duration: 1500, noBackdrop: true });
  };
});
