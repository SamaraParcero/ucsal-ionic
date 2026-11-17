angular.module('ucsalApp')

.controller('NoticiasCtrl', function($scope, $state, NoticiasService, AuthService) {
  $scope.aluno = AuthService.getAlunoLogado();
  $scope.noticias = NoticiasService.listar();
  $scope.filtro = { categoria: '' };

  $scope.abrir = function(noticia) {
    $state.go('app.noticia', { id: noticia.id });
  };
})

.controller('NoticiaDetalheCtrl', function($scope, $stateParams, NoticiasService) {
  $scope.noticia = NoticiasService.buscar($stateParams.id);
});
