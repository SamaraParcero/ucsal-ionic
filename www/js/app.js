angular.module('ucsalApp', ['ionic'])

.run(function($rootScope, $state, AuthService) {
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    if (toState.name != 'login' && !AuthService.getAlunoLogado()) {
      event.preventDefault();
      $state.go('login');
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');

  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.noticias', {
    url: '/noticias',
    views: {
      'mural': {
        templateUrl: 'templates/noticias.html',
        controller: 'NoticiasCtrl'
      }
    }
  })

  .state('app.noticia', {
    url: '/noticias/:id',
    views: {
      'mural': {
        templateUrl: 'templates/noticia-detalhe.html',
        controller: 'NoticiaDetalheCtrl'
      }
    }
  })

  .state('app.financeiro', {
    url: '/financeiro',
    views: {
      'financeiro': {
        templateUrl: 'templates/financeiro.html',
        controller: 'FinanceiroCtrl'
      }
    }
  })

  .state('app.perfil', {
    url: '/perfil',
    views: {
      'perfil': {
        templateUrl: 'templates/perfil.html',
        controller: 'PerfilCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');
});
