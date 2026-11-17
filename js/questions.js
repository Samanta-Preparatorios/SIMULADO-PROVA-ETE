window.QUESTIONS   = [
  {
    "id": 1,
    "topic": "Aritmética, frações e porcentagem",
    "prompt": "Mário tinha uma quantia X guardada. Primeiro, gastou a metade desse dinheiro com os amigos. No dia seguinte, deu R$ 10,00 à irmã mais nova. Depois, gastou mais 4/5 do valor que ainda tinha e ficou com R$ 12,00. Qual era a quantia inicial de Mário?",
    "options": [
      "R$ 105,00",
      "R$ 140,00",
      "R$ 100,00",
      "R$ 90,00",
      "R$ 75,00"
    ],
    "correct": 1,
    "explanation": "Depois de gastar 4/5 do que restava, Mário ficou com 1/5 desse valor, ou seja, R$ 12,00. Portanto, antes desse último gasto ele tinha 12 × 5 = R$ 60,00. Esse valor corresponde à metade inicial menos R$ 10,00: X/2 − 10 = 60. Assim, X/2 = 70 e X = R$ 140,00."
  },
  {
    "id": 2,
    "topic": "Áreas, perímetros e geometria",
    "prompt": "Um terreno retangular possui comprimento igual a quatro vezes a largura. Sabendo que o perímetro desse terreno é 400 metros, quais são, respectivamente, a largura e o comprimento?",
    "options": [
      "30 m e 120 m",
      "40 m e 160 m",
      "50 m e 150 m",
      "20 m e 80 m"
    ],
    "correct": 1,
    "explanation": "Se a largura é x, o comprimento é 4x. O perímetro vale 2(x + 4x) = 400. Assim, 10x = 400, logo x = 40 m. O comprimento é 4 × 40 = 160 m.",
    "visualHtml": ""
  },
  {
    "id": 3,
    "topic": "Médias e interpretação de dados",
    "prompt": "Em uma empresa, 70% dos funcionários são desenvolvedores e recebem salário médio de R$ 4.000,00. Os demais 30% recebem salário médio de R$ 3.000,00. Qual é o salário médio de todos os funcionários?",
    "options": [
      "R$ 3.700,00",
      "R$ 3.800,00",
      "R$ 3.900,00",
      "R$ 3.500,00"
    ],
    "correct": 0,
    "explanation": "Calculamos a média ponderada pelos percentuais: 0,70 × 4.000 + 0,30 × 3.000 = 2.800 + 900 = R$ 3.700,00.",
    "visualHtml": "<div class=\"table-wrap\"><table class=\"question-data-table\"><thead><tr><th>Grupo</th><th>Percentual</th><th>Salário médio</th></tr></thead><tbody><tr><td>Desenvolvedores</td><td>70%</td><td>R$ 4.000,00</td></tr><tr><td>Demais funcionários</td><td>30%</td><td>R$ 3.000,00</td></tr></tbody></table></div>"
  },
  {
    "id": 4,
    "topic": "Porcentagem e matemática financeira",
    "prompt": "Ao pesquisar o preço de um smartphone, Antônio recebeu duas opções para um aparelho que custa R$ 1.400,00: pagamento à vista, com desconto de 17%, ou pagamento a prazo, com acréscimo de 25% sobre o preço inicial. Qual é a diferença, em reais, entre os valores das duas opções?",
    "options": [
      "R$ 500,00",
      "R$ 480,00",
      "R$ 588,00",
      "R$ 490,00",
      "R$ 560,00"
    ],
    "correct": 2,
    "explanation": "À vista, o aparelho custa 83% de R$ 1.400,00: 1.400 × 0,83 = R$ 1.162,00. A prazo, custa 125% do preço: 1.400 × 1,25 = R$ 1.750,00. A diferença é 1.750 − 1.162 = R$ 588,00."
  },
  {
    "id": 5,
    "topic": "Aritmética, frações e potências",
    "prompt": "O valor da expressão (5³ × 5⁶) ÷ 5¹⁰ é:",
    "options": [
      "5",
      "1/5",
      "25",
      "1/25"
    ],
    "correct": 1,
    "explanation": "Na multiplicação de potências de mesma base, somamos os expoentes: 5³ × 5⁶ = 5⁹. Na divisão, subtraímos: 5⁹ ÷ 5¹⁰ = 5⁻¹ = 1/5.",
    "visualHtml": "",
    "optionHtml": [
      null,
      "<span class=\"math-piece option-math\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mn>1</mn><mn>5</mn></mfrac></math></span><span class=\"sr-only\">um quinto</span>",
      null,
      "<span class=\"math-piece option-math\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mn>1</mn><mn>25</mn></mfrac></math></span><span class=\"sr-only\">um vinte e cinco avos</span>"
    ],
    "explanationHtml": "Na multiplicação de potências de mesma base, somamos os expoentes: 5³ × 5⁶ = 5⁹. Na divisão, subtraímos: 5⁹ ÷ 5¹⁰ = 5⁻¹ = <span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mn>1</mn><mn>5</mn></mfrac></math></span><span class=\"sr-only\">um quinto</span>.",
    "optionSpoken": [
      null,
      "um quinto",
      null,
      "um vinte e cinco avos"
    ]
  },
  {
    "id": 6,
    "topic": "Porcentagem e matemática financeira",
    "prompt": "Em uma atividade de revisão, descobriu-se que 15% de determinado número corresponde a 45. Qual é esse número?",
    "options": [
      "500",
      "300",
      "200",
      "100",
      "400"
    ],
    "correct": 1,
    "explanation": "Se x representa o número, então 15% de x é 45: 0,15x = 45. Dividindo os dois lados por 0,15, obtemos x = 45 ÷ 0,15 = 300."
  },
  {
    "id": 7,
    "topic": "Porcentagem e matemática financeira",
    "prompt": "O número de estudantes presentes em uma atividade passou de 80 para 96. Em relação ao número inicial, qual foi o aumento percentual de participantes?",
    "options": [
      "15%",
      "10%",
      "25%",
      "20%"
    ],
    "correct": 3,
    "explanation": "O aumento foi de 96 − 80 = 16 estudantes. Em relação ao total inicial: (16 ÷ 80) × 100% = 20%.",
    "visualHtml": ""
  },
  {
    "id": 8,
    "topic": "Grandezas, medidas e velocidade",
    "prompt": "Para cercar completamente um terreno, são necessários 72 metros de arame. Se cada rolo contém 6 metros de arame, quantos rolos deverão ser comprados?",
    "options": [
      "11 rolos",
      "14 rolos",
      "10 rolos",
      "12 rolos"
    ],
    "correct": 3,
    "explanation": "Dividimos o comprimento total pela quantidade de arame em cada rolo: 72 ÷ 6 = 12 rolos.",
    "visualHtml": ""
  },
  {
    "id": 9,
    "topic": "Razão, proporção e regra de três composta",
    "prompt": "Para construir 1 km de cerca, 30 trabalhadores, atuando 8 horas por dia, levam 12 dias. Mantendo o mesmo ritmo de trabalho, em quantos dias 20 trabalhadores, atuando 12 horas por dia, construirão 2 km de cerca?",
    "options": [
      "12 dias",
      "30 dias",
      "24 dias",
      "6 dias",
      "28 dias"
    ],
    "correct": 2,
    "explanation": "O trabalho é proporcional ao comprimento da cerca e inversamente proporcional ao número de trabalhadores e às horas diárias. Para 1 km, são necessários 30 × 8 × 12 = 2.880 homem-horas. Para 2 km, serão 5.760 homem-horas. A nova equipe realiza 20 × 12 = 240 homem-horas por dia. Logo, 5.760 ÷ 240 = 24 dias."
  },
  {
    "id": 10,
    "topic": "Álgebra e sistemas",
    "prompt": "Em uma prova com 20 questões, cada resposta correta vale 5 pontos e cada resposta incorreta desconta 3 pontos. Um estudante respondeu a todas as questões e obteve 68 pontos. Quantas questões ele errou?",
    "options": [
      "4 questões",
      "6 questões",
      "8 questões",
      "2 questões"
    ],
    "correct": 0,
    "explanation": "Se c é o número de acertos e e o de erros, temos c + e = 20 e 5c − 3e = 68. Substituindo c = 20 − e: 5(20 − e) − 3e = 68; 100 − 8e = 68; e = 4.",
    "visualHtml": ""
  },
  {
    "id": 11,
    "topic": "Grandezas, medidas e velocidade",
    "prompt": "Pedro correu uma distância de 10 km mantendo velocidade média de 8 km/h. Quanto tempo ele levou para completar o percurso, em minutos?",
    "options": [
      "30 minutos",
      "105 minutos",
      "90 minutos",
      "60 minutos",
      "75 minutos"
    ],
    "correct": 4,
    "explanation": "O tempo é a distância dividida pela velocidade: 10 ÷ 8 = 1,25 hora. Como 0,25 hora corresponde a 15 minutos, o tempo total foi de 1 hora e 15 minutos, ou 75 minutos."
  },
  {
    "id": 12,
    "topic": "Grandezas, medidas e velocidade",
    "prompt": "Em uma empresa de transporte de cargas, caixas cúbicas com arestas medindo 40 cm foram empilhadas conforme a figura. A pilha é formada por 10 caixas, incluindo as que ficam parcialmente ocultas. Qual é o volume total ocupado por essas caixas?",
    "options": [
      "6,4 m³",
      "64 m³",
      "1,64 m³",
      "0,64 m³",
      "1,6 m³"
    ],
    "correct": 3,
    "explanation": "Primeiro, convertemos a aresta: 40 cm = 0,4 m. O volume de uma caixa é V = 0,4 × 0,4 × 0,4 = 0,064 m³. Como a pilha tem 10 caixas, o volume total é 10 × 0,064 = 0,64 m³.",
    "visualHtml": "<div class=\"visual-card diagram-card\"><img src=\"assets/pilha-caixas.png\" alt=\"Pilha de caixas cúbicas empilhadas em camadas; a quantidade total, incluindo as caixas parcialmente ocultas, é 10.\"></div>"
  },
  {
    "id": 13,
    "topic": "Ângulos e polígonos",
    "prompt": "Na figura, dois ângulos internos de um triângulo medem 37° e 83°. O terceiro ângulo, indicado por γ, mede quanto?",
    "options": [
      "55°",
      "60°",
      "50°",
      "65°"
    ],
    "correct": 1,
    "explanation": "A soma dos ângulos internos de qualquer triângulo é 180°. Então, 180° − 37° − 83° = 60°.",
    "visualHtml": "<div class=\"visual-card diagram-card\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"460\" height=\"210\" viewBox=\"0 0 460 210\" role=\"img\" aria-label=\"Triângulo com dois ângulos internos de 37 graus e 83 graus e o terceiro ângulo identificado pela letra grega gama\">\n  <path d=\"M70 175 L262 31 L280 175 Z\" fill=\"#b8e8c9\" stroke=\"#252525\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <text x=\"111\" y=\"157\" font-size=\"18\" font-weight=\"600\" fill=\"#222\">37°</text>\n  <text x=\"231\" y=\"157\" font-size=\"18\" font-weight=\"600\" fill=\"#222\">83°</text>\n  <text x=\"243\" y=\"67\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#222\">γ</text>\n</svg></div>"
  },
  {
    "id": 14,
    "topic": "Grandezas, medidas e conversões",
    "prompt": "Um chuveiro com vazamento desperdiça 125 mL de água a cada meia hora. Mantendo esse ritmo durante um dia inteiro, quantos litros de água serão desperdiçados?",
    "options": [
      "3 litros",
      "8 litros",
      "60 litros",
      "6 litros",
      "30 litros"
    ],
    "correct": 3,
    "explanation": "Um dia tem 24 horas, ou 48 períodos de meia hora. O desperdício será 48 × 125 = 6.000 mL. Como 1.000 mL equivalem a 1 litro, o total é 6 litros."
  },
  {
    "id": 15,
    "topic": "Áreas, perímetros e geometria",
    "prompt": "Sandra desenhou cinco polígonos em uma malha quadriculada na qual cada quadradinho tem lado de 1 cm. As áreas das figuras são: 2 cm², 4 cm², 1,5 cm², 2 cm² e 4 cm². Qual é a soma das áreas dos cinco polígonos?",
    "options": [
      "14 cm²",
      "12 cm²",
      "13,5 cm²",
      "13 cm²"
    ],
    "correct": 2,
    "explanation": "Somamos as áreas indicadas: 2 + 4 + 1,5 + 2 + 4 = 13,5 cm².",
    "visualHtml": "<div class=\"visual-card diagram-card visual-card-large\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"760\" height=\"300\" viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Malha quadriculada de quadradinhos de 1 centímetro de lado com cinco polígonos de diferentes formatos.\">\n  <rect x=\"18\" y=\"16\" width=\"720\" height=\"240\" fill=\"#fff\" stroke=\"#d8d4ce\" stroke-width=\"1\"/>\n  <path d=\"M18 16 V256 M58 16 V256 M98 16 V256 M138 16 V256 M178 16 V256 M218 16 V256 M258 16 V256 M298 16 V256 M338 16 V256 M378 16 V256 M418 16 V256 M458 16 V256 M498 16 V256 M538 16 V256 M578 16 V256 M618 16 V256 M658 16 V256 M698 16 V256 M738 16 V256 M18 16 H738 M18 56 H738 M18 96 H738 M18 136 H738 M18 176 H738 M18 216 H738 M18 256 H738\" fill=\"none\" stroke=\"#cfcfcf\" stroke-width=\"1.4\"/>\n  <polygon points=\"58,56 138,56 178,96 98,96\" fill=\"#f3c6d9\" stroke=\"#a44b74\" stroke-width=\"3\"/>\n  <rect x=\"218\" y=\"96\" width=\"80\" height=\"80\" fill=\"#f7d6a0\" stroke=\"#a86b16\" stroke-width=\"3\"/>\n  <polygon points=\"58,256 138,256 58,176\" fill=\"#b9dff4\" stroke=\"#347da5\" stroke-width=\"3\"/>\n  <polygon points=\"378,256 498,256 378,216\" fill=\"#c8e7c5\" stroke=\"#4a8b47\" stroke-width=\"3\"/>\n  <rect x=\"558\" y=\"136\" width=\"160\" height=\"40\" fill=\"#d8ccf3\" stroke=\"#7059a6\" stroke-width=\"3\"/>\n</svg></div>"
  },
  {
    "id": 16,
    "topic": "Estatística e interpretação de gráficos",
    "prompt": "Uma pesquisa registrou a preferência esportiva de 500 estudantes de uma escola pública. Os percentuais foram: outras modalidades, 14,8%; natação, 9%; basquete, 18,2%; vôlei, 21%; atletismo, 12%; e futsal, 25%. Quantos estudantes escolheram o atletismo?",
    "options": [
      "74 estudantes",
      "91 estudantes",
      "125 estudantes",
      "60 estudantes",
      "105 estudantes"
    ],
    "correct": 3,
    "visualHtml": "<div class=\"visual-card\"><div class=\"table-wrap\"><table class=\"question-data-table\"><thead><tr><th>Modalidade</th><th>Percentual</th></tr></thead><tbody><tr><td>Outras modalidades</td><td>14,8%</td></tr><tr><td>Natação</td><td>9%</td></tr><tr><td>Basquete</td><td>18,2%</td></tr><tr><td>Vôlei</td><td>21%</td></tr><tr><td>Atletismo</td><td>12%</td></tr><tr><td>Futsal</td><td>25%</td></tr></tbody></table></div></div>",
    "explanation": "O atletismo corresponde a 12% dos 500 estudantes. Calculando: 0,12 × 500 = 60. Portanto, 60 estudantes escolheram o atletismo."
  },
  {
    "id": 17,
    "topic": "Porcentagem e matemática financeira",
    "prompt": "Um par de tênis esportivos custa R$ 190,00. Durante uma promoção, a loja oferece desconto de 15% sobre o preço original. Qual é o valor economizado pelo comprador?",
    "options": [
      "R$ 19,00",
      "R$ 28,50",
      "R$ 30,00",
      "R$ 25,50"
    ],
    "correct": 1,
    "explanation": "O desconto é 15% de R$ 190,00: 0,15 × 190 = R$ 28,50.",
    "visualHtml": ""
  },
  {
    "id": 18,
    "topic": "Aritmética, frações e potências",
    "prompt": "Ao racionalizar o denominador da fração 5/∛2, qual expressão equivalente é obtida?",
    "options": [
      "5∛2",
      "5∛4",
      "(5∛2)/2",
      "(5∛4)/4",
      "(5∛4)/2"
    ],
    "correct": 4,
    "explanation": "Para eliminar a raiz do denominador, multiplicamos o numerador e o denominador por ∛4: (5/∛2) × (∛4/∛4) = (5∛4)/∛8 = (5∛4)/2.",
    "visualHtml": "",
    "promptHtml": "Ao racionalizar o denominador da fração <span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mn>5</mn><mroot><mn>2</mn><mn>3</mn></mroot></mfrac></math></span><span class=\"sr-only\">cinco dividido pela raiz cúbica de dois</span>, qual expressão equivalente é obtida?",
    "optionHtml": [
      "<span class=\"math-piece option-math\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>5</mn><mroot><mn>2</mn><mn>3</mn></mroot></mrow></math></span><span class=\"sr-only\">cinco vezes a raiz cúbica de dois</span>",
      "<span class=\"math-piece option-math\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>5</mn><mroot><mn>4</mn><mn>3</mn></mroot></mrow></math></span><span class=\"sr-only\">cinco vezes a raiz cúbica de quatro</span>",
      "<span class=\"math-piece option-math\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mrow><mn>5</mn><mroot><mn>2</mn><mn>3</mn></mroot></mrow><mn>2</mn></mfrac></math></span><span class=\"sr-only\">cinco vezes a raiz cúbica de dois, dividido por dois</span>",
      "<span class=\"math-piece option-math\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mrow><mn>5</mn><mroot><mn>4</mn><mn>3</mn></mroot></mrow><mn>4</mn></mfrac></math></span><span class=\"sr-only\">cinco vezes a raiz cúbica de quatro, dividido por quatro</span>",
      "<span class=\"math-piece option-math\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mrow><mn>5</mn><mroot><mn>4</mn><mn>3</mn></mroot></mrow><mn>2</mn></mfrac></math></span><span class=\"sr-only\">cinco vezes a raiz cúbica de quatro, dividido por dois</span>"
    ],
    "explanationHtml": "<p>Para eliminar a raiz do denominador, multiplicamos o numerador e o denominador por <span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mroot><mn>4</mn><mn>3</mn></mroot></math></span><span class=\"sr-only\">raiz cúbica de quatro</span>:</p><div class=\"math-solution\" aria-hidden=\"true\"><div class=\"math-line\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mfrac><mn>5</mn><mroot><mn>2</mn><mn>3</mn></mroot></mfrac><mo>×</mo><mfrac><mroot><mn>4</mn><mn>3</mn></mroot><mroot><mn>4</mn><mn>3</mn></mroot></mfrac></math></div><div class=\"math-line\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mo>=</mo><mfrac><mrow><mn>5</mn><mroot><mn>4</mn><mn>3</mn></mroot></mrow><mroot><mn>8</mn><mn>3</mn></mroot></mfrac></math></div><div class=\"math-line\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mo>=</mo><mfrac><mrow><mn>5</mn><mroot><mn>4</mn><mn>3</mn></mroot></mrow><mn>2</mn></mfrac></math></div></div><p class=\"sr-only\">Cinco dividido pela raiz cúbica de dois, multiplicado pela raiz cúbica de quatro dividida pela raiz cúbica de quatro, é igual a cinco vezes a raiz cúbica de quatro dividido pela raiz cúbica de oito, que é igual a cinco vezes a raiz cúbica de quatro dividido por dois.</p>",
    "optionSpoken": [
      "cinco vezes a raiz cúbica de dois",
      "cinco vezes a raiz cúbica de quatro",
      "cinco vezes a raiz cúbica de dois, dividido por dois",
      "cinco vezes a raiz cúbica de quatro, dividido por quatro",
      "cinco vezes a raiz cúbica de quatro, dividido por dois"
    ]
  },
  {
    "id": 19,
    "topic": "Aritmética, frações e potências",
    "prompt": "Aplicando as propriedades da potenciação, a expressão 3⁶ × 3⁻⁵ pode ser simplificada para:",
    "options": [
      "−1",
      "3",
      "9",
      "20",
      "−3"
    ],
    "correct": 1,
    "explanation": "Na multiplicação de potências de mesma base, conservamos a base e somamos os expoentes: 3⁶ × 3⁻⁵ = 3⁶⁺⁽⁻⁵⁾ = 3¹ = 3."
  },
  {
    "id": 20,
    "topic": "Ângulos e polígonos",
    "prompt": "Os ângulos internos de um quadrilátero ABCD medem, respectivamente, 2x + 30°, 2x + 20°, 3x + 15° e x + 39°. Qual é a medida do menor ângulo desse quadrilátero?",
    "options": [
      "71°",
      "84°",
      "94°",
      "111°",
      "105°"
    ],
    "correct": 0,
    "explanation": "A soma dos ângulos internos de um quadrilátero é 360°. Assim, (2x + 30) + (2x + 20) + (3x + 15) + (x + 39) = 360. Logo, 8x + 104 = 360, x = 32. Os ângulos medem 94°, 84°, 111° e 71°. Portanto, o menor mede 71°.",
    "visualHtml": "<div class=\"visual-card diagram-card\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"460\" height=\"250\" viewBox=\"0 0 460 250\" role=\"img\" aria-label=\"Quadrilátero ABCD com os vértices A no alto, B à esquerda, C abaixo e D à direita.\">\n  <path d=\"M180 30 L42 178 L318 218 L410 96 Z\" fill=\"#fff1e6\" stroke=\"#252525\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n  <text x=\"173\" y=\"23\" font-size=\"20\" font-weight=\"700\" fill=\"#222\">A</text>\n  <text x=\"22\" y=\"185\" font-size=\"20\" font-weight=\"700\" fill=\"#222\">B</text>\n  <text x=\"318\" y=\"243\" font-size=\"20\" font-weight=\"700\" fill=\"#222\">C</text>\n  <text x=\"416\" y=\"99\" font-size=\"20\" font-weight=\"700\" fill=\"#222\">D</text>\n</svg></div>"
  },
  {
    "id": 21,
    "topic": "Álgebra e equações",
    "prompt": "Mariana pensou em um número, adicionou 150 a ele e dividiu o resultado por 6, obtendo 30. Qual número Mariana escolheu inicialmente?",
    "options": [
      "58",
      "48",
      "86",
      "5",
      "30"
    ],
    "correct": 4,
    "explanation": "Chamando o número de x, temos (x + 150) ÷ 6 = 30. Multiplicando por 6: x + 150 = 180. Portanto, x = 180 − 150 = 30."
  },
  {
    "id": 22,
    "topic": "Razão, proporção e regra de três",
    "prompt": "Quarenta cães consomem 100 kg de ração em 7 dias. Mantendo o mesmo consumo diário por animal, em quantos dias 30 cães consumirão 75 kg de ração?",
    "options": [
      "8 dias",
      "6 dias",
      "7 dias",
      "5 dias"
    ],
    "correct": 2,
    "explanation": "O consumo por cão por dia é 100 ÷ (40 × 7) = 5/14 kg. Para 30 cães, o consumo diário é 30 × 5/14 = 150/14 kg. Assim, 75 ÷ (150/14) = 7 dias.",
    "visualHtml": "<div class=\"table-wrap\"><table class=\"question-data-table\"><thead><tr><th>Cães</th><th>Ração</th><th>Tempo</th></tr></thead><tbody><tr><td>40</td><td>100 kg</td><td>7 dias</td></tr><tr><td>30</td><td>75 kg</td><td>?</td></tr></tbody></table></div>",
    "explanationHtml": "O consumo por cão por dia é <span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mn>100</mn><mrow><mn>40</mn><mo>×</mo><mn>7</mn></mrow></mfrac></math></span><span class=\"sr-only\">cem dividido pelo produto de quarenta por sete</span> = <span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mn>5</mn><mn>14</mn></mfrac></math></span><span class=\"sr-only\">cinco sobre quatorze</span> kg. Para 30 cães, o consumo diário é 30 × <span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mn>5</mn><mn>14</mn></mfrac></math></span><span class=\"sr-only\">cinco sobre quatorze</span> = <span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mn>150</mn><mn>14</mn></mfrac></math></span><span class=\"sr-only\">cento e cinquenta sobre quatorze</span> kg. Assim, 75 ÷ (<span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mn>150</mn><mn>14</mn></mfrac></math></span><span class=\"sr-only\">cento e cinquenta sobre quatorze</span>) = 7 dias."
  },
  {
    "id": 23,
    "topic": "Aritmética, frações e potências",
    "prompt": "Em 2016, uma cidade do interior de Pernambuco possuía 22.469 habitantes. Em um levantamento posterior, sua população foi registrada em 33.216 habitantes. Quantos habitantes a mais foram registrados no segundo levantamento?",
    "options": [
      "10.747 habitantes",
      "10.847 habitantes",
      "10.647 habitantes",
      "11.747 habitantes"
    ],
    "correct": 0,
    "explanation": "Calculamos a diferença entre a população atual e a população de 2016: 33.216 − 22.469 = 10.747 habitantes.",
    "visualHtml": ""
  },
  {
    "id": 24,
    "topic": "Aritmética e matemática financeira",
    "prompt": "Ivone comprou um carro em 48 parcelas de R$ 1.227,00 e uma moto em 60 parcelas de R$ 548,00. Considerando todas as parcelas, qual será o valor total pago pelos dois veículos?",
    "options": [
      "R$ 134.000,00",
      "R$ 91.776,00",
      "R$ 87.654,00",
      "R$ 46.987,00",
      "R$ 34.721,00"
    ],
    "correct": 1,
    "explanation": "O total pago pelo carro será 48 × 1.227 = R$ 58.896,00. O total da moto será 60 × 548 = R$ 32.880,00. Somando: 58.896 + 32.880 = R$ 91.776,00."
  },
  {
    "id": 25,
    "topic": "Ângulos e polígonos",
    "prompt": "As retas r e s são perpendiculares. As retas m e n são paralelas. Se o ângulo agudo formado por s e n mede 20°, qual é a medida do ângulo agudo α formado por r e m?",
    "options": [
      "90°",
      "70°",
      "20°",
      "110°"
    ],
    "correct": 1,
    "explanation": "Como r é perpendicular a s, o ângulo entre elas é 90°. Se s forma 20° com n, então o ângulo agudo entre r e n é 90° − 20° = 70°. Como m é paralela a n, o ângulo correspondente entre r e m também mede 70°.",
    "visualHtml": "<div class=\"visual-card diagram-card\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"620\" height=\"260\" viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Duas retas paralelas m e n; a reta s forma 20 graus com n; a reta r é perpendicular a s; o ângulo agudo alfa está entre r e m.\">\n  <path d=\"M35 65 H590 M35 215 H590\" stroke=\"#252525\" stroke-width=\"3\" fill=\"none\"/>\n  <path d=\"M60 231.38 L517.12 65\" stroke=\"#347da5\" stroke-width=\"3.5\" fill=\"none\"/>\n  <path d=\"M360 65 L422.63 237\" stroke=\"#f36b12\" stroke-width=\"3.5\" fill=\"none\"/>\n  <path d=\"M378.38 115.50 L391.53 110.71 L396.32 123.86 L383.17 129.65 Z\" fill=\"none\" stroke=\"#252525\" stroke-width=\"2\"/>\n  <path d=\"M123 215 A18 18 0 0 0 121.91 208.84\" stroke=\"#347da5\" stroke-width=\"1.8\" fill=\"none\"/>\n  <path d=\"M382 65 A22 22 0 0 1 367.52 85.67\" stroke=\"#f36b12\" stroke-width=\"1.8\" fill=\"none\"/>\n  <text x=\"594\" y=\"59\" font-size=\"16\" fill=\"#252525\">m</text>\n  <text x=\"594\" y=\"209\" font-size=\"16\" fill=\"#252525\">n</text>\n  <text x=\"482\" y=\"88\" font-size=\"16\" fill=\"#347da5\">s</text>\n  <text x=\"438\" y=\"246\" font-size=\"22\" font-weight=\"800\" fill=\"#913800\">r</text>\n  <text x=\"170\" y=\"210\" font-size=\"18\" fill=\"#347da5\">20°</text>\n  <text x=\"395\" y=\"94\" font-size=\"21\" font-weight=\"700\" fill=\"#f36b12\">α</text>\n</svg></div>"
  },
  {
    "id": 26,
    "topic": "Estatística e interpretação de dados",
    "prompt": "Joana administra uma fábrica de doces. A produção registrada durante cinco dias foi: segunda-feira, 1.160 unidades; terça-feira, 2.786; quarta-feira, 2.994; quinta-feira, 3.648; e sexta-feira, 4.223. Qual foi a produção total nesses cinco dias?",
    "options": [
      "15.000 unidades",
      "10.800 unidades",
      "14.811 unidades",
      "12.354 unidades",
      "6.987 unidades"
    ],
    "correct": 2,
    "visualHtml": "<div class=\"visual-card\"><div class=\"table-wrap\"><table class=\"question-data-table\"><thead><tr><th>Dia</th><th>Produção</th></tr></thead><tbody><tr><td>Segunda-feira</td><td>1.160</td></tr><tr><td>Terça-feira</td><td>2.786</td></tr><tr><td>Quarta-feira</td><td>2.994</td></tr><tr><td>Quinta-feira</td><td>3.648</td></tr><tr><td>Sexta-feira</td><td>4.223</td></tr></tbody></table></div></div>",
    "explanation": "Somamos as cinco produções: 1.160 + 2.786 + 2.994 + 3.648 + 4.223 = 14.811 unidades."
  },
  {
    "id": 27,
    "topic": "Álgebra e sistemas",
    "prompt": "Sérgio recebeu seu salário, gastou R$ 300,00 com combustível e R$ 150,00 com energia elétrica e destinou um terço do salário ao condomínio. Depois dessas despesas, restaram R$ 550,00. Qual era o salário de Sérgio?",
    "options": [
      "R$ 1.650,00",
      "R$ 1.500,00",
      "R$ 1.200,00",
      "R$ 1.350,00"
    ],
    "correct": 1,
    "explanation": "Se x é o salário, temos x − 300 − 150 − x/3 = 550. Logo, 2x/3 = 1.000. Multiplicando por 3/2, obtemos x = R$ 1.500,00.",
    "visualHtml": "",
    "explanationHtml": "Se x é o salário, temos x − 300 − 150 − <span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mi>x</mi><mn>3</mn></mfrac></math></span><span class=\"sr-only\">x dividido por três</span> = 550. Logo, <span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mn>3</mn></mfrac></math></span><span class=\"sr-only\">dois x dividido por três</span> = 1.000. Multiplicando por <span class=\"math-piece\" aria-hidden=\"true\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mfrac><mn>3</mn><mn>2</mn></mfrac></math></span><span class=\"sr-only\">três meios</span>, obtemos x = R$ 1.500,00."
  },
  {
    "id": 28,
    "topic": "Grandezas, medidas e velocidade",
    "prompt": "Em uma festa, 300 convidados recebem, cada um, um copo com 170 mL de bebida. Quantos litros de bebida são necessários para servir todos os convidados uma vez?",
    "options": [
      "48 L",
      "54 L",
      "51 L",
      "45 L"
    ],
    "correct": 2,
    "explanation": "O volume total é 300 × 170 = 51.000 mL. Como 1.000 mL = 1 L, são necessários 51 L.",
    "visualHtml": ""
  },
  {
    "id": 29,
    "topic": "Porcentagem e matemática financeira",
    "prompt": "O preço original de um produto era R$ 80,00. Primeiro, esse preço sofreu um aumento de 25%. Em seguida, sobre o valor já reajustado, foi concedido um desconto de 15%. Qual foi o preço final do produto?",
    "options": [
      "R$ 85,00",
      "R$ 78,00",
      "R$ 80,00",
      "R$ 75,00",
      "R$ 72,00"
    ],
    "correct": 0,
    "explanation": "O aumento de 25% transforma R$ 80,00 em 80 × 1,25 = R$ 100,00. Depois, o desconto de 15% é calculado sobre R$ 100,00: 100 × 0,15 = R$ 15,00. O preço final é 100 − 15 = R$ 85,00."
  },
  {
    "id": 30,
    "topic": "Aritmética, frações e potências",
    "prompt": "Um carrinho de controle remoto custa R$ 204,00 e o conjunto de pilhas custa R$ 15,00. Se o valor total pago, incluindo o frete, foi R$ 230,00, quanto custou o frete?",
    "options": [
      "R$ 11,00",
      "R$ 19,00",
      "R$ 9,00",
      "R$ 15,00"
    ],
    "correct": 0,
    "explanation": "Somamos os valores conhecidos: 204 + 15 = 219. O frete é a diferença para o total: 230 − 219 = R$ 11,00.",
    "visualHtml": ""
  },
  {
    "id": 31,
    "topic": "Ângulos e retas paralelas",
    "prompt": "Duas retas paralelas r e s são cortadas por uma transversal t. Em uma das interseções, um ângulo mede 25°. Qual é a medida do ângulo b indicado na outra interseção, sabendo que ele está acima da reta s e à esquerda da transversal?",
    "options": [
      "125°",
      "155°",
      "110°",
      "150°",
      "115°"
    ],
    "correct": 1,
    "visualHtml": "<div class=\"visual-card\"><div class=\"table-wrap\"><table class=\"question-data-table\"><thead><tr><th>Informação</th><th>Medida</th></tr></thead><tbody><tr><td>Retas</td><td>r ∥ s</td></tr><tr><td>Ângulo superior à direita</td><td>25°</td></tr><tr><td>Ângulo procurado b</td><td>Acima de s e à esquerda de t</td></tr></tbody></table></div></div>",
    "explanation": "O ângulo superior à esquerda na primeira interseção é suplementar ao ângulo de 25°: 180° − 25° = 155°. Como esse ângulo e b são correspondentes nas retas paralelas, b = 155°."
  },
  {
    "id": 32,
    "topic": "Razão, proporção e regra de três",
    "prompt": "Uma empresa organiza 40 caixas de parafusos em cada prateleira e utiliza 153 prateleiras. Se passar a organizar 45 caixas em cada prateleira, quantas prateleiras serão necessárias para armazenar a mesma quantidade de caixas?",
    "options": [
      "126 prateleiras",
      "140 prateleiras",
      "132 prateleiras",
      "136 prateleiras"
    ],
    "correct": 3,
    "explanation": "O total de caixas é 40 × 153 = 6.120. Distribuindo 45 caixas por prateleira: 6.120 ÷ 45 = 136 prateleiras.",
    "visualHtml": ""
  },
  {
    "id": 33,
    "topic": "Médias e interpretação de dados",
    "prompt": "Uma tabela registra as horas extras de cinco funcionários. Os valores são: A = x; B = x + 2; C = 1 hora; D = 6 horas; E = 3 horas. Sabendo que a média é de 4 horas, quais funcionários realizaram a maior quantidade de horas extras?",
    "options": [
      "Funcionário A",
      "Funcionários B e D",
      "Funcionários A e B",
      "Funcionários C e E"
    ],
    "correct": 1,
    "explanation": "A média de 4 horas para 5 funcionários corresponde a 20 horas no total. Então x + (x + 2) + 1 + 6 + 3 = 20; 2x + 12 = 20; x = 4. Assim, A = 4 e B = 6. Como D também tem 6 horas, B e D realizaram a maior quantidade.",
    "visualHtml": "<div class=\"table-wrap\"><table class=\"question-data-table\"><thead><tr><th>Funcionário</th><th>Horas extras</th></tr></thead><tbody><tr><td>A</td><td>x</td></tr><tr><td>B</td><td>x + 2</td></tr><tr><td>C</td><td>1</td></tr><tr><td>D</td><td>6</td></tr><tr><td>E</td><td>3</td></tr></tbody></table></div>"
  },
  {
    "id": 34,
    "topic": "Ângulos e equações",
    "prompt": "O ângulo EÂG é reto e está dividido por uma semirreta em dois ângulos cujas medidas são (3x + 24)° e (4x − 18)°. Qual é o valor de x?",
    "options": [
      "42",
      "12",
      "60",
      "30",
      "45"
    ],
    "correct": 1,
    "visualHtml": "<div class=\"visual-card\"><div class=\"table-wrap\"><table class=\"question-data-table\"><thead><tr><th>Ângulo</th><th>Medida</th></tr></thead><tbody><tr><td>Primeiro</td><td>(3x + 24)°</td></tr><tr><td>Segundo</td><td>(4x − 18)°</td></tr><tr><td>Total</td><td>90°</td></tr></tbody></table></div></div>",
    "explanation": "Como o ângulo EÂG é reto, a soma das duas partes é 90°: (3x + 24) + (4x − 18) = 90. Assim, 7x + 6 = 90; 7x = 84; x = 12."
  },
  {
    "id": 35,
    "topic": "Razão, proporção e regra de três",
    "prompt": "Dois funcionários receberão um bônus total de R$ 400,00, dividido em partes diretamente proporcionais ao número de elogios recebidos. Um recebeu 4 elogios e o outro recebeu 6. Quanto receberá o funcionário que obteve 6 elogios?",
    "options": [
      "R$ 220,00",
      "R$ 160,00",
      "R$ 240,00",
      "R$ 200,00"
    ],
    "correct": 2,
    "explanation": "A soma das partes é 4 + 6 = 10. Cada parte vale 400 ÷ 10 = R$ 40,00. O funcionário com 6 elogios recebe 6 × 40 = R$ 240,00.",
    "visualHtml": ""
  },
  {
    "id": 36,
    "topic": "Áreas e geometria plana",
    "prompt": "Um retângulo de papelão mede 50 cm por 30 cm. Um losango é desenhado dentro dele, com cada vértice situado a 5 cm do ponto médio de um dos lados do retângulo. Qual é a área desse losango?",
    "options": [
      "200 cm²",
      "800 cm²",
      "750 cm²",
      "400 cm²",
      "1.500 cm²"
    ],
    "correct": 3,
    "visualHtml": "<div class=\"visual-card\"><div class=\"table-wrap\"><table class=\"question-data-table\"><thead><tr><th>Medida</th><th>Valor</th></tr></thead><tbody><tr><td>Retângulo</td><td>50 cm × 30 cm</td></tr><tr><td>Distância de cada vértice ao ponto médio do lado</td><td>5 cm</td></tr></tbody></table></div></div>",
    "explanation": "As diagonais do losango medem 50 − 2 × 5 = 40 cm e 30 − 2 × 5 = 20 cm. A área do losango é o produto das diagonais dividido por 2: (40 × 20) ÷ 2 = 400 cm²."
  },
  {
    "id": 37,
    "topic": "Áreas, perímetros e geometria",
    "prompt": "Um campo retangular tem comprimento igual ao triplo da largura. Sabendo que o comprimento mede 27 metros, qual é a área do campo?",
    "options": [
      "243 m²",
      "270 m²",
      "216 m²",
      "225 m²"
    ],
    "correct": 0,
    "explanation": "Se o comprimento é 27 m e corresponde ao triplo da largura, a largura vale 27 ÷ 3 = 9 m. A área é 27 × 9 = 243 m².",
    "visualHtml": ""
  },
  {
    "id": 38,
    "topic": "Grandezas, medidas e velocidade",
    "prompt": "Em um mapa, a distância entre a ETE Mariano Teixeira e a Secretaria de Educação é representada por uma escala de 1:10.000. Sabendo que a distância real entre os locais é de 8,1 km, qual deverá ser a distância entre eles no mapa?",
    "options": [
      "810 cm",
      "8,1 cm",
      "81 cm",
      "18 cm"
    ],
    "correct": 2,
    "explanation": "Convertendo 8,1 km para centímetros: 8,1 × 100.000 = 810.000 cm. Pela escala 1:10.000, a distância no mapa é 810.000 ÷ 10.000 = 81 cm.",
    "visualHtml": ""
  },
  {
    "id": 39,
    "topic": "Geometria plana e teorema de Pitágoras",
    "prompt": "Um triângulo retângulo possui catetos medindo 30 cm e 40 cm. Qual é a medida do lado oposto ao ângulo reto, isto é, da hipotenusa?",
    "options": [
      "120 cm",
      "60 cm",
      "70 cm",
      "90 cm",
      "50 cm"
    ],
    "correct": 4,
    "explanation": "Pelo teorema de Pitágoras, h² = 30² + 40² = 900 + 1.600 = 2.500. Portanto, h = √2.500 = 50 cm."
  },
  {
    "id": 40,
    "topic": "Razão, proporção e consumo",
    "prompt": "Pedro fará uma viagem de 300 km. Seu carro percorre, em média, 15 km com cada litro de combustível. Quantos litros serão necessários para realizar todo o percurso, sem considerar uma reserva adicional?",
    "options": [
      "25 litros",
      "10 litros",
      "15 litros",
      "30 litros",
      "20 litros"
    ],
    "correct": 4,
    "explanation": "Dividimos a distância pelo rendimento do carro: 300 ÷ 15 = 20. Portanto, serão necessários 20 litros de combustível."
  },
  {
    "id": 41,
    "topic": "Grandezas, medidas e unidades de volume",
    "prompt": "Um paralelepípedo possui todas as medidas de suas arestas expressas em centímetros. Ao calcular o volume desse sólido, em qual unidade o resultado deve ser apresentado?",
    "options": [
      "Milímetro",
      "Metro quadrado",
      "Centímetro cúbico",
      "Quilômetro",
      "Polegada"
    ],
    "correct": 2,
    "explanation": "O volume é uma grandeza tridimensional, obtida pelo produto de três medidas de comprimento. Como as arestas estão em centímetros, a unidade de volume é centímetro cúbico (cm³)."
  },
  {
    "id": 42,
    "topic": "Grandezas, medidas e velocidade",
    "prompt": "Lucas percorreu 429 km em uma viagem, mantendo velocidade média de 66 km/h. Quanto tempo ele levou para completar o percurso?",
    "options": [
      "6 h 30 min",
      "6 h 15 min",
      "6 h 45 min",
      "7 h"
    ],
    "correct": 0,
    "explanation": "O tempo é a distância dividida pela velocidade: 429 ÷ 66 = 6,5 horas. Como 0,5 hora corresponde a 30 minutos, o tempo foi de 6 h 30 min.",
    "visualHtml": ""
  },
  {
    "id": 43,
    "topic": "Álgebra e sistemas",
    "prompt": "João comprou uma camisa e duas calças por R$ 185,00. Carlos comprou três camisas e uma calça, pagando R$ 155,00. Considerando que os preços são iguais nas duas compras, quais são, respectivamente, os preços de uma camisa e de uma calça?",
    "options": [
      "R$ 35,00 e R$ 75,00",
      "R$ 25,00 e R$ 80,00",
      "R$ 40,00 e R$ 72,50",
      "R$ 30,00 e R$ 77,50"
    ],
    "correct": 1,
    "explanation": "Se c é o preço da camisa e p o da calça, c + 2p = 185 e 3c + p = 155. Da segunda equação, p = 155 − 3c. Substituindo na primeira: c + 2(155 − 3c) = 185; −5c = −125; c = 25. Então p = 155 − 75 = 80.",
    "visualHtml": ""
  },
  {
    "id": 44,
    "topic": "Matemática financeira",
    "prompt": "Uma loja oferece um sofá por R$ 1.450,00 à vista ou em 10 parcelas de R$ 176,00. Quanto a mais o cliente pagará se escolher o pagamento parcelado?",
    "options": [
      "R$ 456,00",
      "R$ 310,00",
      "R$ 650,20",
      "R$ 120,00",
      "R$ 234,00"
    ],
    "correct": 1,
    "explanation": "O valor parcelado é 10 × R$ 176,00 = R$ 1.760,00. A diferença em relação ao preço à vista é 1.760 − 1.450 = R$ 310,00."
  },
  {
    "id": 45,
    "topic": "Álgebra e sistemas",
    "prompt": "Em uma lanchonete, cada coxinha custa R$ 5,50 e cada empada custa R$ 7,00. Uma pessoa comprou sete salgados e gastou R$ 44,50. Quantas coxinhas e quantas empadas foram compradas, respectivamente?",
    "options": [
      "5 coxinhas e 2 empadas",
      "4 coxinhas e 3 empadas",
      "3 coxinhas e 4 empadas",
      "2 coxinhas e 5 empadas"
    ],
    "correct": 2,
    "explanation": "Se c é o número de coxinhas e e o de empadas: c + e = 7 e 5,50c + 7e = 44,50. Testando a solução do sistema, 3 coxinhas custam R$ 16,50 e 4 empadas custam R$ 28,00. A soma é R$ 44,50.",
    "visualHtml": "<div class=\"table-wrap\"><table class=\"question-data-table\"><thead><tr><th>Salgado</th><th>Preço unitário</th></tr></thead><tbody><tr><td>Coxinha</td><td>R$ 5,50</td></tr><tr><td>Empada</td><td>R$ 7,00</td></tr><tr><td>Quantidade total</td><td>7</td></tr><tr><td>Valor pago</td><td>R$ 44,50</td></tr></tbody></table></div>"
  },
  {
    "id": 46,
    "topic": "Áreas, perímetros e geometria",
    "prompt": "Um retângulo mede 25 cm de comprimento e 10 cm de altura. De cada extremidade do lado superior são retirados dois triângulos retângulos congruentes, cada um com cateto horizontal de 7 cm e cateto vertical de 10 cm, formando um trapézio isósceles. Qual é a área do trapézio restante?",
    "options": [
      "170 cm²",
      "190 cm²",
      "160 cm²",
      "180 cm²"
    ],
    "correct": 3,
    "explanation": "A base maior permanece com 25 cm. A base menor fica 25 − 7 − 7 = 11 cm. A altura é 10 cm. Assim, A = (25 + 11) × 10 ÷ 2 = 180 cm².",
    "visualHtml": "<div class=\"visual-card diagram-card\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"620\" height=\"285\" viewBox=\"0 0 620 285\" role=\"img\" aria-label=\"Trapézio isósceles formado ao retirar dois triângulos retângulos congruentes de um retângulo; base original 25 centímetros, altura 10 centímetros e catetos horizontais de 7 centímetros\">\n  <rect x=\"185\" y=\"100\" width=\"250\" height=\"100\" fill=\"none\" stroke=\"#f36b12\" stroke-width=\"2\" stroke-dasharray=\"7 6\"/>\n  <polygon points=\"185,200 435,200 365,100 255,100\" fill=\"#b8e8c9\" stroke=\"#252525\" stroke-width=\"3\"/>\n  <path d=\"M185 100 L255 100 L185 200 Z M365 100 L435 100 L435 200 Z\" fill=\"#f7d6a0\" fill-opacity=\".42\" stroke=\"#d08b29\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n  <text x=\"220\" y=\"86\" font-size=\"16\" text-anchor=\"middle\" fill=\"#252525\">7 cm</text>\n  <text x=\"400\" y=\"86\" font-size=\"16\" text-anchor=\"middle\" fill=\"#252525\">7 cm</text>\n  <text x=\"310\" y=\"86\" font-size=\"18\" text-anchor=\"middle\" fill=\"#252525\">?</text>\n  <text x=\"310\" y=\"226\" font-size=\"19\" text-anchor=\"middle\" fill=\"#252525\">25 cm</text>\n  <text x=\"448\" y=\"155\" font-size=\"17\" fill=\"#252525\">10 cm</text>\n</svg></div>"
  },
  {
    "id": 47,
    "topic": "Geometria plana e circunferência",
    "prompt": "Uma pista circular tem raio de 30 metros. Um atleta dá cinco voltas completas nessa pista. Considerando π = 3,14, qual distância total ele percorre?",
    "options": [
      "613 m",
      "208 m",
      "942 m",
      "856 m",
      "405 m"
    ],
    "correct": 2,
    "explanation": "O comprimento da pista é C = 2πr = 2 × 3,14 × 30 = 188,4 m. Em cinco voltas, a distância é 5 × 188,4 = 942 m."
  },
  {
    "id": 48,
    "topic": "Ângulos e polígonos",
    "prompt": "Os pontos A, O e B estão alinhados, formando um ângulo raso de 180°. Dois raios dividem esse ângulo em três partes: 23°, α e 41°. Qual é a medida de α?",
    "options": [
      "112°",
      "126°",
      "106°",
      "116°"
    ],
    "correct": 3,
    "explanation": "Como os três ângulos formam um ângulo raso, sua soma é 180°. Portanto, α = 180° − 23° − 41° = 116°.",
    "visualHtml": "<div class=\"visual-card diagram-card\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"460\" height=\"180\" viewBox=\"0 0 460 180\" role=\"img\" aria-label=\"Ângulo raso AOB dividido em três ângulos adjacentes: 23 graus, alfa e 41 graus\">\n  <path d=\"M35 130 H425\" stroke=\"#222\" stroke-width=\"2.5\"/>\n  <path d=\"M230 130 L92 72 M230 130 L343 31\" stroke=\"#f36b12\" stroke-width=\"3\" fill=\"none\"/>\n  <path d=\"M205 130 A25 25 0 0 1 207 120\" stroke=\"#777\" stroke-width=\"1.6\" fill=\"none\"/>\n  <path d=\"M255 130 A25 25 0 0 0 249 114\" stroke=\"#777\" stroke-width=\"1.6\" fill=\"none\"/>\n  <text x=\"152\" y=\"119\" font-size=\"15\" fill=\"#222\">23°</text>\n  <text x=\"230\" y=\"78\" font-size=\"17\" fill=\"#f36b12\" text-anchor=\"middle\">α</text>\n  <text x=\"300\" y=\"104\" font-size=\"15\" fill=\"#222\">41°</text>\n  <text x=\"27\" y=\"151\" font-size=\"13\" fill=\"#222\">A</text>\n  <text x=\"225\" y=\"151\" font-size=\"13\" fill=\"#222\">O</text>\n  <text x=\"429\" y=\"151\" font-size=\"13\" fill=\"#222\">B</text>\n</svg></div>"
  },
  {
    "id": 49,
    "topic": "Grandezas, medidas e unidades",
    "prompt": "Um retângulo tem suas medidas de comprimento e largura expressas em centímetros. Ao calcular o perímetro dessa figura, qual unidade deve acompanhar o resultado?",
    "options": [
      "Milímetro",
      "Litro",
      "Centímetro cúbico",
      "Centímetro",
      "Metro quadrado"
    ],
    "correct": 3,
    "explanation": "O perímetro é a soma dos comprimentos dos lados e, portanto, é uma grandeza linear. Como as medidas estão em centímetros, o perímetro também será expresso em centímetros (cm)."
  },
  {
    "id": 50,
    "topic": "Médias e interpretação de dados",
    "prompt": "Uma turma estudou os índices de chuva de uma região durante quatro meses. Os registros foram: janeiro, 26 mm; fevereiro, 24 mm; março, 28 mm; e abril, um valor desconhecido. Sabendo que a média dos quatro meses foi de 25 mm, qual foi o índice registrado em abril?",
    "options": [
      "Igual ao de fevereiro",
      "Exatamente 22 mm",
      "Igual ao de janeiro",
      "Exatamente 18 mm",
      "Maior que o de fevereiro"
    ],
    "correct": 1,
    "visualHtml": "<div class=\"visual-card\"><div class=\"table-wrap\"><table class=\"question-data-table\"><thead><tr><th>Mês</th><th>Índice de chuva</th></tr></thead><tbody><tr><td>Janeiro</td><td>26 mm</td></tr><tr><td>Fevereiro</td><td>24 mm</td></tr><tr><td>Março</td><td>28 mm</td></tr><tr><td>Abril</td><td>?</td></tr></tbody></table></div></div>",
    "explanation": "Se a média é 25 mm, a soma dos quatro índices é 4 × 25 = 100 mm. Os três primeiros meses somam 26 + 24 + 28 = 78 mm. Logo, abril registrou 100 − 78 = 22 mm."
  }
];
