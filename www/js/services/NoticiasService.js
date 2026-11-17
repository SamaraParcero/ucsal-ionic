angular.module('ucsalApp')

.factory('NoticiasService', function() {
  var noticias = [
    {
      id: 1,
      titulo: 'Prazo de rematrícula 2027.1',
      data: '10/11/2026',
      categoria: 'Notícia',
      imagem: 'img/rematricula.svg',
      resumo: 'A rematrícula para o semestre 2027.1 já está aberta no portal.',
      conteudo: 'A rematrícula para o semestre 2027.1 acontece entre 10/11 e 05/12. O aluno deve estar com as mensalidades em dia e escolher as disciplinas pelo portal. Quem perder o prazo poderá fazer a rematrícula extemporânea com taxa adicional na secretaria do campus Pituaçu ou Federação.'
    },
    {
      id: 2,
      titulo: 'XXIX Semana de Mobilização Científica - SEMOC',
      data: '18/11/2026',
      categoria: 'Evento',
      imagem: 'img/semoc.svg',
      resumo: 'Palestras, minicursos e apresentação de trabalhos no campus Pituaçu.',
      conteudo: 'A SEMOC reúne alunos, professores e pesquisadores para apresentar trabalhos científicos, participar de minicursos e assistir palestras. As inscrições para ouvintes são gratuitas e contam como horas complementares. A programação completa está disponível no site da UCSal.'
    },
    {
      id: 3,
      titulo: 'Edital de Iniciação Científica 2027',
      data: '05/11/2026',
      categoria: 'Notícia',
      imagem: 'img/pesquisa.svg',
      resumo: 'Inscrições abertas para bolsas de iniciação científica.',
      conteudo: 'Estão abertas as inscrições para o programa de iniciação científica. Os alunos devem procurar um professor orientador e enviar o projeto de pesquisa até 30/11. Serão oferecidas bolsas remuneradas e vagas voluntárias em todas as áreas.'
    },
    {
      id: 4,
      titulo: 'Maratona de Programação UCSal',
      data: '28/11/2026',
      categoria: 'Evento',
      imagem: 'img/maratona.svg',
      resumo: 'Monte seu time de 3 pessoas e participe da maratona.',
      conteudo: 'A Escola de Tecnologias promove a maratona de programação interna. Os times devem ter 3 integrantes e resolver o máximo de problemas em 5 horas. Os melhores colocados representarão a UCSal na maratona regional da SBC.'
    },
    {
      id: 5,
      titulo: 'Projeto de extensão Tech na Comunidade',
      data: '02/12/2026',
      categoria: 'Evento',
      imagem: 'img/extensao.svg',
      resumo: 'Alunos ensinando informática básica em escolas públicas.',
      conteudo: 'O projeto de extensão leva alunos de Engenharia de Software e Sistemas de Informação para ensinar informática básica em escolas públicas do bairro de Pituaçu. Os interessados podem se inscrever na coordenação do curso.'
    }
  ];

  return {
    listar: function() {
      return noticias;
    },
    buscar: function(id) {
      for (var i = 0; i < noticias.length; i++) {
        if (noticias[i].id == id) {
          return noticias[i];
        }
      }
      return null;
    }
  };
});
