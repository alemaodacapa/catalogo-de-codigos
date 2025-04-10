export const codeDatabase = {
  html: [
    {
      name: "Div",
      description: "Container genérico para agrupar e estruturar conteúdo, permitindo aplicação de estilos e layout",
      example: "<div class='container'>Conteúdo aqui</div>"
    },
    {
      name: "Parágrafo",
      description: "Tag usada para definir parágrafos de texto, mantendo a semântica e estrutura do documento",
      example: "<p>Este é um parágrafo simples</p>"
    },
    {
      name: "Link",
      description: "Cria hiperlinks para conectar páginas ou recursos externos",
      example: "<a href='https://exemplo.com' target='_blank'>Link de exemplo</a>"
    },
    {
      name: "Lista Ordenada",
      description: "Cria uma lista numerada com ordem específica de elementos",
      example: "<ol>\n  <li>Primeiro item</li>\n  <li>Segundo item</li>\n</ol>"
    },
    {
      name: "Imagem",
      description: "Incorpora imagens no documento HTML com atributos descritivos",
      example: "<img src='imagem.jpg' alt='Descrição da imagem'>"
    },
    {
      name: "Tabela",
      description: "Estrutura para organizar dados em linhas e colunas, ideal para apresentação de informações tabulares",
      example: "<table>\n  <thead>\n    <tr>\n      <th>Cabeçalho 1</th>\n      <th>Cabeçalho 2</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Dado 1</td>\n      <td>Dado 2</td>\n    </tr>\n  </tbody>\n</table>"
    },
    {
      name: "Formulário",
      description: "Coletar entrada de dados do usuário com diversos tipos de campos de input",
      example: "<form action='/submit' method='post'>\n  <label for='nome'>Nome:</label>\n  <input type='text' id='nome' name='nome' required>\n  \n  <label for='email'>Email:</label>\n  <input type='email' id='email' name='email' required>\n  \n  <button type='submit'>Enviar</button>\n</form>"
    },
    {
      name: "Semântica",
      description: "Tags semânticas para melhorar a estrutura e acessibilidade do documento",
      example: "<header>Cabeçalho do site</header>\n<nav>Menu de navegação</nav>\n<main>Conteúdo principal</main>\n<footer>Rodapé</footer>"
    },
    {
      name: "Metadados",
      description: "Informações importantes sobre o documento HTML para navegadores e mecanismos de busca",
      example: "<head>\n  <meta charset='UTF-8'>\n  <meta name='description' content='Descrição do site'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n</head>"
    }
  ],
  css: [
    {
      name: "Flexbox",
      description: "Layout flexível para organizar e distribuir elementos de forma responsiva",
      example: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"
    },
    {
      name: "Grid",
      description: "Sistema de layout em grade para criação de layouts complexos e responsivos",
      example: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}"
    },
    {
      name: "Variáveis CSS",
      description: "Permite definir valores reutilizáveis para propriedades em todo o documento",
      example: ":root {\n  --cor-principal: #6c5ce7;\n}\n\nbody {\n  color: var(--cor-principal);\n}"
    },
    {
      name: "Media Queries",
      description: "Aplica estilos condicionais baseados nas características do dispositivo",
      example: "@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}"
    },
    {
      name: "Transições",
      description: "Adiciona animações suaves entre estados de um elemento",
      example: ".botao {\n  transition: all 0.3s ease;\n  transform: scale(1.1);\n}"
    },
    {
      name: "Animações",
      description: "Criar animações complexas e interativas usando keyframes",
      example: "@keyframes slide {\n  0% { transform: translateX(0); }\n  100% { transform: translateX(100px); }\n}\n\n.elemento {\n  animation: slide 2s infinite alternate;\n}"
    },
    {
      name: "Custom Scrollbar",
      description: "Personalizar a aparência da barra de rolagem",
      example: "::-webkit-scrollbar {\n  width: 10px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 5px;\n}"
    },
    {
      name: "Pseudo-elementos",
      description: "Estilizar partes específicas de elementos sem adicionar HTML extra",
      example: ".botao::before {\n  content: '➜';\n  margin-right: 5px;\n}\n\n.texto::first-letter {\n  font-size: 2em;\n  color: red;\n}"
    },
    {
      name: "Reset CSS",
      description: "Normalizar estilos padrão para consistência entre diferentes navegadores",
      example: "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}"
    }
  ],
  javascript: [
    {
      name: "Arrow Function",
      description: "Função compacta em sintaxe de flecha, com contexto léxico simplificado",
      example: "const soma = (a, b) => a + b;"
    },
    {
      name: "Fetch API",
      description: "Realizar requisições HTTP de forma assíncrona e simples",
      example: "fetch(url)\n  .then(response => response.json())\n  .then(data => console.log(data));"
    },
    {
      name: "Desestruturação",
      description: "Extrair valores de arrays ou propriedades de objetos de forma simplificada",
      example: "const { nome, idade } = pessoa;\nconst [primeiro, segundo] = lista;"
    },
    {
      name: "Async/Await",
      description: "Gerenciamento de operações assíncronas de forma síncrona e legível",
      example: "async function fetchDados() {\n  const resposta = await fetch(url);\n  const dados = await resposta.json();\n}"
    },
    {
      name: "Classes",
      description: "Sintaxe moderna para criar objetos e implementar herança",
      example: "class Pessoa {\n  constructor(nome) {\n    this.nome = nome;\n  }\n  saudacao() {\n    return `Olá, ${this.nome}`;\n  }\n}"
    },
    {
      name: "Destructuring Avançado",
      description: "Técnicas avançadas de desestruturação de objetos e arrays",
      example: "// Rest em objetos\nconst { a, ...resto } = { a: 1, b: 2, c: 3 };\n\n// Valores padrão\nconst { x = 10, y = 20 } = {};"
    },
    {
      name: "Map e Filter",
      description: "Métodos para manipulação de arrays de forma funcional",
      example: "const numeros = [1, 2, 3, 4, 5];\n\n// Dobrar valores\nconst dobrados = numeros.map(n => n * 2);\n\n// Filtrar pares\nconst pares = numeros.filter(n => n % 2 === 0);"
    },
    {
      name: "Promises em Paralelo",
      description: "Executar múltiplas promises simultaneamente",
      example: "const promises = [\n  fetch('/api1'),\n  fetch('/api2'),\n  fetch('/api3')\n];\n\nPromise.all(promises)\n  .then(resultados => console.log(resultados));"
    },
    {
      name: "Closure",
      description: "Função que mantém acesso a variáveis de seu escopo externo, mesmo após o escopo original ter sido fechado",
      example: "function criarContador() {\n  let contador = 0;\n  return function() {\n    return ++contador;\n  };\n}\n\nconst meuContador = criarContador();\nconsole.log(meuContador()); // 1\nconsole.log(meuContador()); // 2"
    }
  ],
  php: [
    {
      name: "Classe",
      description: "Definição de uma classe para encapsulamento e modelagem de objetos",
      example: "class Pessoa {\n  public $nome;\n  public function __construct($nome) {\n    $this->nome = $nome;\n  }\n}"
    },
    {
      name: "Conexão PDO",
      description: "Estabelecer conexão segura com banco de dados usando PHP Data Objects",
      example: "$conexao = new PDO('mysql:host=localhost;dbname=banco', 'usuario', 'senha');"
    },
    {
      name: "Tratamento de Exceções",
      description: "Gerenciar erros e fluxos excepcionais de forma controlada",
      example: "try {\n  // código que pode gerar erro\n} catch (Exception $e) {\n  echo $e->getMessage();\n}"
    },
    {
      name: "Namespaces",
      description: "Organizar e agrupar classes relacionadas, evitando conflitos de nomenclatura",
      example: "namespace Aplicacao\\Modelos;\n\nclass Usuario {}"
    },
    {
      name: "Funções Anônimas",
      description: "Criar funções sem nome, úteis para callbacks e processamentos temporários",
      example: "$dobrar = function($valor) {\n  return $valor * 2;\n};"
    },
    {
      name: "Traits",
      description: "Compartilhar métodos entre classes sem usar herança múltipla",
      example: "trait Logger {\n  public function log($mensagem) {\n    echo $mensagem;\n  }\n}\n\nclass Usuario {\n  use Logger;\n}"
    },
    {
      name: "Generators",
      description: "Criar iteradores de forma eficiente, economizando memória",
      example: "function contagem() {\n  for ($i = 1; $i <= 10; $i++) {\n    yield $i;\n  }\n}\n\nforeach (contagem() as $numero) {\n  echo $numero;\n}"
    },
    {
      name: "Type Hinting",
      description: "Definir tipos de parâmetros e retornos para maior segurança",
      example: "function soma(int $a, int $b): int {\n  return $a + $b;\n}\n\n// Força tipos e retornos específicos"
    },
    {
      name: "Sessões",
      description: "Gerenciamento de dados de usuário entre múltiplas páginas web",
      example: "session_start();\n$_SESSION['usuario'] = 'João';\n\n// Em outra página\nsession_start();\necho $_SESSION['usuario']; // Mostra 'João'"
    }
  ],
  twig: [
    {
      name: "For Loop",
      description: "Iteração em templates, percorrendo arrays e objetos",
      example: "{% for item in items %}\n  {{ item }}\n{% endfor %}"
    },
    {
      name: "Condicionais",
      description: "Renderização condicional de conteúdo baseado em expressões",
      example: "{% if condicao %}\n  Conteúdo verdadeiro\n{% else %}\n  Conteúdo falso\n{% endif %}"
    },
    {
      name: "Herança de Templates",
      description: "Criar layouts base e estender/sobrescrever blocos de conteúdo",
      example: "{% extends 'layout.twig' %}\n\n{% block conteudo %}\n  Conteúdo específico\n{% endblock %}"
    },
    {
      name: "Filtros",
      description: "Modificar e formatar variáveis durante a renderização",
      example: "{{ texto|upper }}\n{{ data|date('d/m/Y') }}"
    },
    {
      name: "Macros",
      description: "Criar funções reutilizáveis para geração de HTML",
      example: "{% macro renderBotao(texto, classe) %}\n  <button class='{{ classe }}'>{{ texto }}</button>\n{% endmacro %}"
    },
    {
      name: "Inclusão Condicional",
      description: "Incluir templates ou partes de templates baseado em condições",
      example: "{% include 'componente.twig' with {'mostrar': true} only %}\n\n{% if condicao %}\n  {% include 'componente-especial.twig' %}\n{% endif %}"
    },
    {
      name: "Contexto Global",
      description: "Definir e acessar variáveis globais em templates",
      example: "{{ global_var }}\n\n{# No PHP/Framework #}\n$twig->addGlobal('site_nome', 'Meu Site');"
    },
    {
      name: "Sandbox",
      description: "Ambiente de execução seguro para templates não confiáveis",
      example: "{% sandbox %}\n  {{ codigo_perigoso }}\n{% endsandbox %}"
    },
    {
      name: "Expressões Matemáticas",
      description: "Realizar cálculos diretamente nos templates Twig",
      example: "{{ 10 + 20 }}\n{{ 5 * 4 }}\n{{ (2 + 3) * 4 }}"
    }
  ],
  ecommerce: [
    {
      name: "Estrutura Base de Produto",
      description: "Modelo básico de objeto de produto para loja virtual, incluindo informações essenciais",
      example: "{\n  id: 'PROD001',\n  nome: 'Camiseta Básica',\n  preco: 49.99,\n  desconto: 0.1,\n  categorias: ['masculino', 'casual'],\n  estoque: {\n    P: 10,\n    M: 20,\n    G: 15\n  },\n  cores: ['branco', 'preto', 'azul'],\n  imagens: [\n    'camisa-frente.jpg',\n    'camisa-costas.jpg'\n  ]\n}"
    },
    {
      name: "Função de Cálculo de Preço",
      description: "Calcula preço final considerando desconto e impostos",
      example: "function calcularPrecoFinal(produto, quantidade) {\n  const precoBase = produto.preco;\n  const desconto = produto.desconto || 0;\n  const precoDesconto = precoBase * (1 - desconto);\n  const imposto = 0.1; // 10% de imposto\n  \n  return {\n    precoOriginal: precoBase,\n    precoComDesconto: precoDesconto,\n    precoFinal: precoDesconto * (1 + imposto) * quantidade,\n    economia: precoBase * desconto * quantidade\n  };\n}"
    },
    {
      name: "Cálculo de Frete",
      description: "Função para calcular frete baseado em peso, distância e região",
      example: "function calcularFrete(produto, cep) {\n  const regioes = {\n    sudeste: 15.50,\n    sul: 18.75,\n    nordeste: 22.00,\n    centro_oeste: 20.25,\n    norte: 25.50\n  };\n  \n  const pesoBase = produto.peso || 0.5; // kg\n  const distanciaBase = 500; // km estimados\n  \n  const regiaoCliente = identificarRegiao(cep);\n  const taxaRegiao = regioes[regiaoCliente] || regioes.sudeste;\n  \n  return {\n    peso: pesoBase,\n    taxaBase: taxaRegiao,\n    freteCalculado: taxaRegiao * (pesoBase * 1.5)\n  };\n}"
    },
    {
      name: "Validação de Estoque",
      description: "Verifica disponibilidade do produto e tamanho solicitado",
      example: "function validarEstoque(produto, tamanho, quantidade) {\n  if (!produto.estoque[tamanho]) {\n    return {\n      disponivel: false,\n      mensagem: 'Tamanho não disponível'\n    };\n  }\n  \n  if (produto.estoque[tamanho] < quantidade) {\n    return {\n      disponivel: false,\n      mensagem: `Apenas ${produto.estoque[tamanho]} unidades disponíveis`,\n      emEstoque: produto.estoque[tamanho]\n    };\n  }\n  \n  return {\n    disponivel: true,\n    mensagem: 'Produto disponível'\n  };\n}"
    },
    {
      name: "Carrinho de Compras",
      description: "Classe para gerenciamento de carrinho de compras com métodos essenciais",
      example: "class Carrinho {\n  constructor() {\n    this.itens = [];\n    this.total = 0;\n  }\n  \n  adicionarProduto(produto, tamanho, quantidade) {\n    const validacao = validarEstoque(produto, tamanho, quantidade);\n    \n    if (validacao.disponivel) {\n      this.itens.push({\n        produto,\n        tamanho,\n        quantidade,\n        precoUnitario: produto.preco\n      });\n      this.calcularTotal();\n      return true;\n    }\n    \n    return false;\n  }\n  \n  calcularTotal() {\n    this.total = this.itens.reduce(\n      (acc, item) => acc + (item.precoUnitario * item.quantidade), \n      0\n    );\n  }\n}"
    },
    {
      name: "Processamento de Pagamento",
      description: "Função simulada de processamento de pagamento com validações básicas",
      example: "function processarPagamento(carrinho, dadosCartao) {\n  // Validações simplificadas\n  if (!validarCartao(dadosCartao)) {\n    return {\n      aprovado: false,\n      mensagem: 'Cartão inválido'\n    };\n  }\n  \n  const totalCompra = carrinho.total;\n  const parcelamento = calcularParcelamento(totalCompra);\n  \n  return {\n    aprovado: true,\n    totalCompra,\n    parcelamento,\n    codigoPedido: gerarCodigoPedido()\n  };\n}\n\nfunction validarCartao(cartao) {\n  // Implementação básica de validação\n  return cartao.numero.length === 16 && \n         cartao.validade > new Date() && \n         cartao.cvv.length === 3;\n}"
    },
    {
      name: "Geração de Relatório de Vendas",
      description: "Função para gerar relatório de vendas com análises básicas",
      example: "function gerarRelatorioVendas(vendasMes) {\n  const totalVendas = vendasMes.reduce(\n    (total, venda) => total + venda.valorTotal, \n    0\n  );\n  \n  const produtosMaisVendidos = vendasMes\n    .flatMap(venda => venda.produtos)\n    .reduce((contagem, produto) => {\n      contagem[produto.id] = (contagem[produto.id] || 0) + 1;\n      return contagem;\n    }, {});\n  \n  return {\n    totalVendas,\n    quantidadePedidos: vendasMes.length,\n    produtosMaisVendidos: Object.entries(produtosMaisVendidos)\n      .sort((a, b) => b[1] - a[1])\n      .slice(0, 5)\n  };\n}"
    },
    {
      name: "Sistema de Recomendação",
      description: "Função simples de recomendação baseada em histórico de compras",
      example: "function recomendarProdutos(historicoPedidos, categoriaAtual) {\n  const preferencias = historicoPedidos.reduce((pref, pedido) => {\n    pedido.produtos.forEach(produto => {\n      pref[produto.categoria] = (pref[produto.categoria] || 0) + 1;\n    });\n    return pref;\n  }, {});\n  \n  const categoriasRecomendadas = Object.entries(preferencias)\n    .sort((a, b) => b[1] - a[1])\n    .filter(([cat]) => cat !== categoriaAtual)\n    .slice(0, 3);\n  \n  return {\n    categoriasPrincipais: categoriasRecomendadas,\n    recomendacoes: buscarProdutosRecomendados(categoriasRecomendadas)\n  };\n}"
    },
    {
      name: "Integração com Métodos de Pagamento",
      description: "Exemplo de integração com diferentes métodos de pagamento",
      example: "class GatewayPagamento {\n  constructor(metodoPagamento) {\n    this.metodo = metodoPagamento;\n  }\n  \n  processarPagamento(valorTotal, dadosPagamento) {\n    switch(this.metodo) {\n      case 'cartao_credito':\n        return this.processarCartaoCredito(valorTotal, dadosPagamento);\n      case 'pix':\n        return this.processarPix(valorTotal);\n      case 'boleto':\n        return this.gerarBoleto(valorTotal);\n      default:\n        throw new Error('Método de pagamento não suportado');\n    }\n  }\n  \n  processarCartaoCredito(valor, dadosCartao) {\n    // Lógica de processamento de cartão\n    return { status: 'aprovado', valorProcessado: valor };\n  }\n}"
    }
  ]
};
