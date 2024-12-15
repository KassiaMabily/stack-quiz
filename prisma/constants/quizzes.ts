export const quizzes = [
  {
    title: 'HTML',
    icon: '/quiz-icons/icon-html.svg',
    category: 1,
    questions: [
      {
        question: 'What does HTML stand for?',
        options: [
          {
            option: 'Hyper Trainer Marking Language',
            isCorrect: false,
          },
          {
            option: 'Hyper Text Marketing Language',
            isCorrect: false,
          },
          {
            option: 'Hyper Text Markup Language',
            isCorrect: true,
          },
          {
            option: 'Hyper Text Markup Leveler',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Which of the following is the correct structure for an HTML document?',
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
          'Which HTML element is used to define the title of a document?',
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
        question: 'What is the purpose of the <body> tag in HTML?',
        options: [
          {
            option: "It defines the document's head section.",
            isCorrect: false,
          },
          {
            option:
              'It contains all the content such as text, images, and links.',
            isCorrect: true,
          },
          {
            option:
              'It is used to define the main content of an HTML document.',
            isCorrect: false,
          },
          {
            option: 'It specifies the body of the email content in HTML.',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Which HTML tag is used to create a hyperlink?',
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
        question: 'Which tag is used to display images in HTML?',
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
          'What attribute is used to provide the path of an image in the <img> tag?',
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
        question: 'Which HTML tag is used to create an unordered list?',
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
        question: 'What does the <br> tag do?',
        options: [
          {
            option: 'It breaks the text into two sections.',
            isCorrect: false,
          },
          {
            option: 'It creates a bold text.',
            isCorrect: false,
          },
          {
            option: 'It inserts a line break.',
            isCorrect: true,
          },
          {
            option: 'It adds a new row in a table.',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'In HTML, what does the `fieldset` tag do?',
        options: [
          {
            option: 'It is used to group related data in a form.',
            isCorrect: true,
          },
          {
            option: 'It sets the field to a fixed size.',
            isCorrect: false,
          },
          {
            option: 'It automatically validates the fields within a form.',
            isCorrect: false,
          },
          {
            option: 'It hides the fields in a form.',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    title: 'CSS',
    icon: '/quiz-icons/icon-css.svg',
    category: 1,
    questions: [
      {
        question: 'What does CSS stand for?',
        options: [
          {
            option: 'Colorful Style Sheets',
            isCorrect: false,
          },
          {
            option: 'Computer Style Sheets',
            isCorrect: false,
          },
          {
            option: 'Cascading Style Sheets',
            isCorrect: true,
          },
          {
            option: 'Creative Style Sheets',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Which HTML attribute is used to define inline styles?',
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
        question: 'How do you insert a comment in a CSS file?',
        options: [
          {
            option: '// this is a comment //',
            isCorrect: false,
          },
          {
            option: '/* this is a comment */',
            isCorrect: true,
          },
          {
            option: '-- this is a comment --',
            isCorrect: false,
          },
          {
            option: '<!-- this is a comment -->',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Which property is used to change the background color of an element?',
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
        question: 'How do you apply a style to all <p> elements?',
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
        question: 'Which property is used to change the font of an element?',
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
          'How do you make each word in a text start with a capital letter?',
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
        question: "How do you select an element with the class name 'header'?",
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
        question: "What is the default value of the 'position' property?",
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
        question: 'Which CSS property controls the text size?',
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
    category: 1,
    questions: [
      {
        question:
          "Which syntax is correct to output 'Hello World' in an alert box?",
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
        question: "How do you call a function named 'myFunction'?",
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
        question: 'How to write an IF statement in JavaScript?',
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
          "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
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
        question: 'How does a FOR loop start?',
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
        question: 'How can you add a single-line comment in JavaScript?',
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
        question: 'What is the correct way to write a JavaScript array?',
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
        question:
          'How do you find the number with the highest value of x and y?',
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
        question: 'Which operator is used to assign a value to a variable?',
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
        question: 'What is the correct way to write a JavaScript object?',
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
    title: 'Accessibility',
    icon: '/quiz-icons/icon-accessibility.svg',
    category: 1,
    questions: [
      {
        question: "What does 'WCAG' stand for?",
        options: [
          {
            option: 'Web Content Accessibility Guidelines',
            isCorrect: true,
          },
          {
            option: 'Web Compliance Accessibility Guide',
            isCorrect: false,
          },
          {
            option: 'Web Content Accessibility Goals',
            isCorrect: false,
          },
          {
            option: 'Website Compliance and Accessibility Guidelines',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Which element is used to provide alternative text for images for screen reader users?',
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
        question: 'What does ARIA stand for in web development?',
        options: [
          {
            option: 'Accessible Rich Internet Applications',
            isCorrect: true,
          },
          {
            option: 'Advanced Responsive Internet Assistance',
            isCorrect: false,
          },
          {
            option: 'Accessible Responsive Internet Applications',
            isCorrect: false,
          },
          {
            option: 'Automated Responsive Internet Actions',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Which of the following is not a principle of the WCAG?',
        options: [
          {
            option: 'Perceivable',
            isCorrect: false,
          },
          {
            option: 'Dependable',
            isCorrect: true,
          },
          {
            option: 'Operable',
            isCorrect: false,
          },
          {
            option: 'Understandable',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?',
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
          "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
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
        question:
          "What is the purpose of the 'lang' attribute in an HTML page?",
        options: [
          {
            option: 'To specify the scripting language',
            isCorrect: false,
          },
          {
            option: 'To define the character set',
            isCorrect: false,
          },
          {
            option: 'To indicate the language of the page content',
            isCorrect: true,
          },
          {
            option: 'To declare a language pack',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Which guideline ensures that content is accessible by keyboard as well as by mouse?',
        options: [
          {
            option: 'Keyboard Accessible',
            isCorrect: true,
          },
          {
            option: 'Mouse Independence',
            isCorrect: false,
          },
          {
            option: 'Device Independence',
            isCorrect: false,
          },
          {
            option: 'Operable Controls',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          "What is the role of 'skip navigation' links in web accessibility?",
        options: [
          {
            option: 'To skip over primary navigation to the main content',
            isCorrect: true,
          },
          {
            option: 'To provide shortcuts to different sections of the website',
            isCorrect: false,
          },
          {
            option: 'To help users skip unwanted sections like advertisements',
            isCorrect: false,
          },
          {
            option: 'To bypass broken links in the navigation',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Which of these tools can help in checking the accessibility of a website?',
        options: [
          {
            option: 'W3C Validator',
            isCorrect: false,
          },
          {
            option: 'Google Lighthouse',
            isCorrect: true,
          },
          {
            option: 'CSS Validator',
            isCorrect: false,
          },
          {
            option: 'JavaScript Console',
            isCorrect: false,
          },
        ],
      },
    ],
  },
];
