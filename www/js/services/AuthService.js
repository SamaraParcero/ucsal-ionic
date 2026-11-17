angular.module('ucsalApp')

.factory('AuthService', function(AlunoService) {
  var usuarios = [
    { matricula: '20261001', senha: '123456' },
    { matricula: '20261002', senha: 'ucsal2026' }
  ];

  var alunoLogado = null;

  return {
    login: function(matricula, senha) {
      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].matricula == matricula && usuarios[i].senha == senha) {
          alunoLogado = AlunoService.buscar(matricula);
          return true;
        }
      }
      return false;
    },
    logout: function() {
      alunoLogado = null;
    },
    getAlunoLogado: function() {
      return alunoLogado;
    }
  };
});
