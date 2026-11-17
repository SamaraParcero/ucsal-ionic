angular.module('ucsalApp')

.factory('AlunoService', function() {
  var alunos = [
    {
      nome: 'Samara Oliveira Parcero Lima',
      matricula: '20261001',
      curso: 'Engenharia de Software',
      email: 'samara.lima@gmail.com',
      telefone: '(71) 99876-5432',
      cep: '41740-090',
      rua: 'Av. Prof. Pinto de Aguiar, 2589',
      bairro: 'Pituaçu',
      cidade: 'Salvador'
    },
    {
      nome: 'Mariana Oliveira Reis',
      matricula: '20261002',
      curso: 'Engenharia de Software',
      email: 'mari.reis@hotmail.com',
      telefone: '(71) 98123-4567',
      cep: '40210-020',
      rua: 'Rua Caetano Moura, 120',
      bairro: 'Federação',
      cidade: 'Salvador'
    }
  ];

  var salvos = localStorage.getItem('alunos');
  if (salvos) {
    alunos = JSON.parse(salvos);
  }

  return {
    buscar: function(matricula) {
      for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].matricula == matricula) {
          return alunos[i];
        }
      }
      return null;
    },
    atualizar: function(dados) {
      var aluno = this.buscar(dados.matricula);
      aluno.email = dados.email;
      aluno.telefone = dados.telefone;
      aluno.cep = dados.cep;
      aluno.rua = dados.rua;
      aluno.bairro = dados.bairro;
      aluno.cidade = dados.cidade;
      localStorage.setItem('alunos', JSON.stringify(alunos));
    }
  };
});
