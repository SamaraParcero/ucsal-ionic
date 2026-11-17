angular.module('ucsalApp')

.controller('PerfilCtrl', function($scope, $state, $ionicPopup, AuthService, AlunoService) {
  $scope.aluno = angular.copy(AuthService.getAlunoLogado());

  $scope.salvar = function() {
    AlunoService.atualizar($scope.aluno);
    $ionicPopup.alert({
      title: 'Tudo certo!',
      template: 'Seus dados foram atualizados.',
      okType: 'botao'
    });
  };

  $scope.sair = function() {
    AuthService.logout();
    $state.go('login');
  };
});
