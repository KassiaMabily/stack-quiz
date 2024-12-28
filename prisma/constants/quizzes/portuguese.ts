export const quizzes = [
  {
    title: 'HTML',
    icon: '/quiz-icons/icon-html.svg',
    iconBgHex: '#FFF1E9',
    category: 1,
    questions: [
      {
        question: 'O que significa HTML?',
        options: [
          {
            option: 'Linguagem de Marcação para Treinadores Hiper',
            isCorrect: false,
          },
          {
            option: 'Linguagem de Marketing de Texto Hiper',
            isCorrect: false,
          },
          {
            option: 'Linguagem de Marcação de Hipertexto',
            isCorrect: true,
          },
          {
            option: 'Nível de Marcação de Texto Hiper',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Qual das alternativas a seguir é a estrutura correta para um documento HTML?',
        options: [
          {
            option: '<html><head></head><body></body></html>',
            isCorrect: true,
          },
          {
            option: '<head><html></html><body></body></head>',
            isCorrect: false,
          },
          {
            option: '<body><head></head><html></html></body>',
            isCorrect: false,
          },
          {
            option: '<html><body></body><head></head></html>',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Qual elemento HTML é usado para definir o título de um documento?',
        options: [
          {
            option: '<head>',
            isCorrect: false,
          },
          {
            option: '<title>',
            isCorrect: true,
          },
          {
            option: '<header>',
            isCorrect: false,
          },
          {
            option: '<top>',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Qual é o propósito da tag <body> em HTML?',
        options: [
          {
            option: 'Define a seção de cabeçalho do documento.',
            isCorrect: false,
          },
          {
            option: 'Contém todo o conteúdo, como texto, imagens e links.',
            isCorrect: true,
          },
          {
            option:
              'É usada para definir o conteúdo principal de um documento HTML.',
            isCorrect: false,
          },
          {
            option: 'Especifica o corpo do conteúdo do email em HTML.',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Qual tag HTML é usada para criar um hyperlink?',
        options: [
          {
            option: '<hyperlink>',
            isCorrect: false,
          },
          {
            option: '<link>',
            isCorrect: false,
          },
          {
            option: '<a>',
            isCorrect: true,
          },
          {
            option: '<href>',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Qual tag é usada para exibir imagens em HTML?',
        options: [
          {
            option: '<img>',
            isCorrect: true,
          },
          {
            option: '<image>',
            isCorrect: false,
          },
          {
            option: '<src>',
            isCorrect: false,
          },
          {
            option: '<pic>',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Qual atributo é usado para fornecer o caminho de uma imagem na tag <img>?',
        options: [
          {
            option: 'link',
            isCorrect: false,
          },
          {
            option: 'src',
            isCorrect: true,
          },
          {
            option: 'href',
            isCorrect: false,
          },
          {
            option: 'url',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Qual tag HTML é usada para criar uma lista não ordenada?',
        options: [
          {
            option: '<ul>',
            isCorrect: true,
          },
          {
            option: '<ol>',
            isCorrect: false,
          },
          {
            option: '<list>',
            isCorrect: false,
          },
          {
            option: '<li>',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'O que a tag <br> faz?',
        options: [
          {
            option: 'Divide o texto em duas seções.',
            isCorrect: false,
          },
          {
            option: 'Cria um texto em negrito.',
            isCorrect: false,
          },
          {
            option: 'Insere uma quebra de linha.',
            isCorrect: true,
          },
          {
            option: 'Adiciona uma nova linha em uma tabela.',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Em HTML, o que a tag `fieldset` faz?',
        options: [
          {
            option: 'É usada para agrupar dados relacionados em um formulário.',
            isCorrect: true,
          },
          {
            option: 'Define o campo para um tamanho fixo.',
            isCorrect: false,
          },
          {
            option: 'Valida automaticamente os campos dentro de um formulário.',
            isCorrect: false,
          },
          {
            option: 'Oculta os campos em um formulário.',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    title: 'CSS',
    icon: '/quiz-icons/icon-css.svg',
    iconBgHex: '#E0FDEF',
    category: 1,
    questions: [
      {
        question: 'O que CSS significa?',
        options: [
          {
            option: 'Folhas de Estilo Coloridas',
            isCorrect: false,
          },
          {
            option: 'Folhas de Estilo de Computador',
            isCorrect: false,
          },
          {
            option: 'Folhas de Estilo em Cascata',
            isCorrect: true,
          },
          {
            option: 'Folhas de Estilo Criativas',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Qual atributo HTML é usado para definir estilos inline?',
        options: [
          {
            option: 'styles',
            isCorrect: false,
          },
          {
            option: 'style',
            isCorrect: true,
          },
          {
            option: 'class',
            isCorrect: false,
          },
          {
            option: 'font-style',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Como você insere um comentário em um arquivo CSS?',
        options: [
          {
            option: '// este é um comentário //',
            isCorrect: false,
          },
          {
            option: '/* este é um comentário */',
            isCorrect: true,
          },
          {
            option: '-- este é um comentário --',
            isCorrect: false,
          },
          {
            option: '<!-- este é um comentário -->',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Qual propriedade é usada para alterar a cor de fundo de um elemento?',
        options: [
          {
            option: 'color',
            isCorrect: false,
          },
          {
            option: 'bgcolor',
            isCorrect: false,
          },
          {
            option: 'background-color',
            isCorrect: true,
          },
          {
            option: 'background',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Como você aplica um estilo a todos os elementos <p>?',
        options: [
          {
            option: 'p { }',
            isCorrect: true,
          },
          {
            option: '.p { }',
            isCorrect: false,
          },
          {
            option: '#p { }',
            isCorrect: false,
          },
          {
            option: 'all.p { }',
            questionId: 5,
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Qual propriedade é usada para alterar a fonte de um elemento?',
        options: [
          {
            option: 'font-style',
            isCorrect: false,
          },
          {
            option: 'text-style',
            isCorrect: false,
          },
          {
            option: 'font-family',
            isCorrect: true,
          },
          {
            option: 'typeface',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Como você faz cada palavra em um texto começar com uma letra maiúscula?',
        options: [
          {
            option: 'text-transform: capitalize',
            isCorrect: true,
          },
          {
            option: 'text-transform: uppercase',
            isCorrect: false,
          },
          {
            option: 'text-style: capital',
            isCorrect: false,
          },
          {
            option: 'font-transform: capitalize',
            isCorrect: false,
          },
        ],
      },
      {
        id: 8,
        question:
          "Como você seleciona um elemento com o nome de classe 'header'?",
        quizId: 2,
        options: [
          {
            option: '.header',
            isCorrect: true,
          },
          {
            option: '#header',
            isCorrect: false,
          },
          {
            option: 'header',
            isCorrect: false,
          },
          {
            option: '*header',
            isCorrect: false,
          },
        ],
      },
      {
        question: "Qual é o valor padrão da propriedade 'position'?",
        options: [
          {
            option: 'relative',
            questionId: 9,
            isCorrect: false,
          },
          {
            option: 'fixed',
            questionId: 9,
            isCorrect: false,
          },
          {
            option: 'absolute',
            isCorrect: false,
          },
          {
            option: 'static',
            isCorrect: true,
          },
        ],
      },
      {
        question: 'Qual propriedade CSS controla o tamanho do texto?',
        options: [
          {
            option: 'font-size',
            isCorrect: true,
          },
          {
            option: 'text-size',
            questionId: 10,
            isCorrect: false,
          },
          {
            option: 'text-style',
            isCorrect: false,
          },
          {
            option: 'font-style',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    title: 'JavaScript',
    icon: '/quiz-icons/icon-js.svg',
    iconBgHex: '#EBF0FF',
    category: 1,
    questions: [
      {
        question:
          "Qual a sintaxe correta para exibir 'Hello World' em uma caixa de alerta?",
        options: [
          {
            option: "alertBox('Hello World');",
            isCorrect: false,
          },
          {
            option: "msg('Hello World');",
            isCorrect: false,
          },
          {
            option: "alert('Hello World');",
            isCorrect: true,
          },
          {
            option: "msgBox('Hello World');",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Como chamar uma função o chamada 'myFunction'?",
        options: [
          {
            option: 'call function myFunction()',
            isCorrect: false,
          },
          {
            option: 'call myFunction()',
            isCorrect: false,
          },
          {
            option: 'myFunction()',
            isCorrect: true,
          },
          {
            option: 'execute myFunction()',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Como escrever um IF em JavaScript?',
        options: [
          {
            option: 'if i = 5 then',
            isCorrect: false,
          },
          {
            option: 'if (i == 5)',
            isCorrect: true,
          },
          {
            option: 'if i == 5',
            isCorrect: false,
          },
          {
            option: 'if i = 5',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          "Como escrever um IF para executar alguma coisa se 'i' n o  igual a 5?",
        options: [
          {
            option: 'if (i <> 5)',
            isCorrect: false,
          },
          {
            option: 'if i =! 5 then',
            isCorrect: false,
          },
          {
            option: 'if (i != 5)',
            isCorrect: true,
          },
          {
            option: 'if i not = 5',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Como começar um loop for?',
        options: [
          {
            option: 'for (i = 0; i <= 5)',
            isCorrect: false,
          },
          {
            option: 'for i = 1 to 5',
            isCorrect: false,
          },
          {
            option: 'for (i <= 5; i++)',
            isCorrect: false,
          },
          {
            option: 'for (i = 0; i <= 5; i++)',
            isCorrect: true,
          },
        ],
      },
      {
        question: 'Como adicionar um coment rio de uma linha em JavaScript?',
        options: [
          {
            option: "'This is a single-line comment",
            isCorrect: false,
          },
          {
            option: '//This is a single-line comment',
            isCorrect: true,
          },
          {
            option: '<!--This is a single-line comment-->',
            isCorrect: false,
          },
          {
            option: '/* This is a single-line comment */',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Qual a forma correta de escrever um array em JavaScript?',
        options: [
          {
            option: "var colors = (1:'red', 2:'green', 3:'blue')",
            isCorrect: false,
          },
          {
            option: "var colors = ['red', 'green', 'blue']",
            isCorrect: true,
          },
          {
            option: "var colors = 'red', 'green', 'blue'",
            isCorrect: false,
          },
          {
            option: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Como encontrar o n mero com o valor mais alto de x e y?',
        options: [
          {
            option: 'Math.ceil(x, y)',
            isCorrect: false,
          },
          {
            option: 'top(x, y)',
            isCorrect: false,
          },
          {
            option: 'Math.max(x, y)',
            isCorrect: true,
          },
          {
            option: 'Math.highest(x, y)',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Qual  o operador usado para atribuir um valor a uma vari vel?',
        options: [
          {
            option: '-',
            isCorrect: false,
          },
          {
            option: '*',
            isCorrect: false,
          },
          {
            option: '=',
            isCorrect: true,
          },
          {
            option: 'x',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Qual a forma correta de escrever um objeto em JavaScript?',
        options: [
          {
            option: "var person = {firstName: 'John', lastName: 'Doe'};",
            isCorrect: true,
          },
          {
            option: "var person = {firstName = 'John', lastName = 'Doe'};",
            isCorrect: false,
          },
          {
            option: "var person = (firstName: 'John', lastName: 'Doe');",
            isCorrect: false,
          },
          {
            option: "var person = (firstName = 'John', lastName = 'Doe');",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Acessibilidade',
    icon: '/quiz-icons/icon-accessibility.svg',
    iconBgHex: '#F6E7FF',
    category: 1,
    questions: [
      {
        question: 'O que  WCAG?',
        options: [
          {
            option: 'Diretrizes de Acessibilidade para Conteudo Web',
            isCorrect: true,
          },
          {
            option: 'Guia de Acessibilidade para Conteudo Web',
            isCorrect: false,
          },
          {
            option: 'Objetivos de Acessibilidade para Conteudo Web',
            isCorrect: false,
          },
          {
            option: 'Guia de Acessibilidade para Sites',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Qual elemento usado para fornecer texto alternativo para imagens para usuários de leitores de tela?',
        options: [
          {
            option: '<alt>',
            isCorrect: false,
          },
          {
            option: '<figcaption>',
            isCorrect: false,
          },
          {
            option: '<description>',
            isCorrect: false,
          },
          {
            option: "<img alt='description'>",
            isCorrect: true,
          },
        ],
      },
      {
        question: 'O que ARIA significa no desenvolvimento web?',
        options: [
          {
            option: 'Aplicações Internet Acessíveis',
            isCorrect: true,
          },
          {
            option: 'Assistência de Internet Responsiva Avançada',
            isCorrect: false,
          },
          {
            option: 'Aplicações Internet Acessíveis Responsivas',
            isCorrect: false,
          },
          {
            option: 'Acessibilidade Automatizada',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Qual das seguintes não é um princípio do WCAG?',
        options: [
          {
            option: 'Perceptibilidade',
            isCorrect: false,
          },
          {
            option: 'Confiança',
            isCorrect: true,
          },
          {
            option: 'Operacional',
            isCorrect: false,
          },
          {
            option: 'Entend vel',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Qual dessas taxas de contraste de cores define o requisito mínimo WCAG 2.1 Nível AA para texto normal?',
        options: [
          {
            option: '3:1',
            isCorrect: false,
          },
          {
            option: '4.5:1',
            isCorrect: true,
          },
          {
            option: '7:1',
            isCorrect: false,
          },
          {
            option: '2:1',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          "Qual dos seguintes elementos é inerentemente focável, o que significa que pode receber foco sem um atributo 'tabindex'?",
        options: [
          {
            option: '<div>',
            isCorrect: false,
          },
          {
            option: '<span>',
            isCorrect: false,
          },
          {
            option: "<a href='...'>",
            isCorrect: true,
          },
          {
            option: '<p>',
            isCorrect: false,
          },
        ],
      },
      {
        question: "Qual o propósito do atributo 'lang' em uma página HTML?",
        options: [
          {
            option: 'Especificar a linguagem de programa o',
            isCorrect: false,
          },
          {
            option: 'Definir o caractere de codifica o',
            isCorrect: false,
          },
          {
            option: 'Indicar a linguagem do conte do da p gina',
            isCorrect: true,
          },
          {
            option: 'Declarar um pacote de linguagens',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Qual diretriz garante que o conteúdo acessível por teclado e mouse?',
        options: [
          {
            option: 'Acessibilidade por Teclado',
            isCorrect: true,
          },
          {
            option: 'Independência do Mouse',
            isCorrect: false,
          },
          {
            option: 'Independência de Dispositivos',
            isCorrect: false,
          },
          {
            option: 'Controles Operacionais',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          "Qual o papel dos links 'pular navegação' na acessibilidade web?",
        options: [
          {
            option:
              'Pular sobre a navegação prim ria e ir para o conte do principal',
            isCorrect: true,
          },
          {
            option: 'Fornecer atalhos para diferentes se es do site',
            isCorrect: false,
          },
          {
            option:
              'Ajudar os usuários a pular se es indesejadas, como an ncios',
            isCorrect: false,
          },
          {
            option: 'Contornar links quebrados na navegação',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Qual das seguintes ferramentas pode ajudar a verificar a acessibilidade de um site?',
        options: [
          {
            option: 'Validador do W3C',
            isCorrect: false,
          },
          {
            option: 'Lighthouse do Google',
            isCorrect: true,
          },
          {
            option: 'Validador de CSS',
            isCorrect: false,
          },
          {
            option: 'Console do JavaScript',
            isCorrect: false,
          },
        ],
      },
    ],
  },
];
