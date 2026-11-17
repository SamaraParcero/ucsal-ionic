angular.module('ucsalApp')

.controller('LoginCtrl', function($scope, $state, AuthService) {
  $scope.dados = {};

  $scope.entrar = function() {
    if (!$scope.dados.matricula || !$scope.dados.senha) {
      $scope.erro = 'Preencha a matrícula e a senha.';
    } else if (AuthService.login($scope.dados.matricula, $scope.dados.senha)) {
      $scope.erro = '';
      $scope.dados = {};
      $state.go('app.noticias');
    } else {
      $scope.erro = 'Matrícula ou senha inválidas.';
    }
  };
});
