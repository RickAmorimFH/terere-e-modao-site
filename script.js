/*
  ========================================
  SCRIPT.JS - TERERÉ E MODÃO
  ========================================
  ESTE É O ARQUIVO MAIS IMPORTANTE PARA EDIÇÃO RÁPIDA.

  COMO EDITAR:
  - WhatsApp: altere siteConfig.whatsappNumero
  - Instagram: altere siteConfig.instagramUsuario e siteConfig.instagramLink
  - Preço: altere siteConfig.preco
  - Localização: altere siteConfig.localizacao
  - Sabores: edite o array siteConfig.sabores
  - Benefícios, FAQ e etapas: edite os arrays correspondentes

  IMPORTANTE:
  - O WhatsApp deve ficar apenas com números.
  - Se faltar DDD no número, ajuste aqui.
  ========================================
*/

const siteConfig = {
  nomeProduto: 'Tereré e Modão',
  preco: 'R$ 9,50',
  precoNumero: '9.50',
  whatsappNumero: '999002915',
  whatsappTextoPadrao: 'Olá! Quero comprar o Tereré e Modão.',
  localizacao: 'Água Fria de Goiás - GO',
  atendimento: 'Entrega e retirada',
  instagramUsuario: '[INSERIR_INSTAGRAM]',
  instagramLink: '#',
  imagens: [
    'img/produto-destaque.jpeg',
    'img/produto-campo.jpeg',
    'img/produto-praia.jpeg'
  ],
  beneficios: [
    {
      titulo: 'Prático para o dia a dia',
      descricao: 'Produto leve, com apresentação pronta para mostrar, vender ou consumir com facilidade.'
    },
    {
      titulo: 'Bomba biodegradável',
      descricao: 'O rótulo destaca esse diferencial, trazendo um detalhe que valoriza a proposta do produto.'
    },
    {
      titulo: 'Erva Mate 30g',
      descricao: 'Informação confirmada na embalagem, com proposta simples e direta para o consumidor.'
    },
    {
      titulo: 'Sabores variados',
      descricao: 'A linha mistura opção clássica com sabores refrescantes e mais marcantes.'
    },
    {
      titulo: 'Visual forte de marca',
      descricao: 'As fotos e o rótulo passam uma identidade ligada ao campo, praia, modão e resenha.'
    }
  ],
  itensKit: [
    {
      titulo: 'Erva Mate 30g',
      descricao: 'Quantidade identificada no rótulo do produto.'
    },
    {
      titulo: 'Bomba biodegradável',
      descricao: 'Diferencial informado na embalagem.'
    },
    {
      titulo: 'Embalagem prática',
      descricao: 'Visual compacto, bonito e fácil de transportar ou expor.'
    },
    {
      titulo: 'Sabores à escolha',
      descricao: 'Consulte no atendimento a disponibilidade de cada variação.'
    }
  ],
  sabores: [
    {
      nome: 'Pura Folha',
      descricao: 'Opção mais tradicional para quem gosta do sabor clássico.'
    },
    {
      nome: 'Menta Fogo',
      descricao: 'Combinação marcante para quem quer sensação mais intensa.'
    },
    {
      nome: 'Ice Cerveja',
      descricao: 'Perfil refrescante e diferente para chamar atenção.'
    },
    {
      nome: 'Menta Uva',
      descricao: 'Mistura sabor marcante com toque adocicado e refrescante.'
    },
    {
      nome: 'Abacaxi com Hortelã',
      descricao: 'Uma opção leve e refrescante, com cara de verão.'
    }
  ],
  preparo: [
    {
      titulo: 'Escolha o sabor',
      descricao: 'Selecione a opção disponível que combina com o momento do cliente.'
    },
    {
      titulo: 'Abra e prepare',
      descricao: 'Use a erva no recipiente de preferência da forma que você costuma consumir.'
    },
    {
      titulo: 'Adicione água gelada',
      descricao: 'O apelo do produto conversa com refrescância e praticidade.'
    },
    {
      titulo: 'Aproveite a experiência',
      descricao: 'Campo, praia, rotina, encontro com amigos ou pausa no dia: a proposta é acompanhar esses momentos.'
    }
  ],
  faq: [
    {
      pergunta: 'Qual o preço do Tereré e Modão?',
      resposta: 'O valor informado atualmente é R$ 9,50 por unidade.'
    },
    {
      pergunta: 'Quais sabores estão disponíveis?',
      resposta: 'Pura Folha, Menta Fogo, Ice Cerveja, Menta Uva e Abacaxi com Hortelã.'
    },
    {
      pergunta: 'O produto vem com bomba?',
      resposta: 'Sim. O rótulo informa que acompanha bomba biodegradável.'
    },
    {
      pergunta: 'A quantidade da erva é qual?',
      resposta: 'Cada unidade apresenta Erva Mate 30g.'
    },
    {
      pergunta: 'Tem entrega e retirada?',
      resposta: 'Sim. O atendimento informado é em Água Fria de Goiás - GO, com entrega e retirada.'
    },
    {
      pergunta: 'Como faço meu pedido?',
      resposta: 'Clique nos botões do WhatsApp do site, escolha o sabor e confirme com a marca.'
    },
    {
      pergunta: 'Quais formas de pagamento são aceitas?',
      resposta: 'Esse dado ainda pode ser personalizado depois. Edite esta resposta com as formas de pagamento reais.'
    }
  ]
};

/*
  Função utilitária para criar link do WhatsApp.
  Recebe o texto da mensagem e devolve a URL pronta.
*/
function criarLinkWhatsapp(mensagem) {
  const texto = encodeURIComponent(mensagem || siteConfig.whatsappTextoPadrao);
  return `https://wa.me/${siteConfig.whatsappNumero}?text=${texto}`;
}

/*
  Atualiza textos simples do HTML com base nas configurações.
  Assim você muda o conteúdo em um lugar só.
*/
function preencherInformacoesBasicas() {
  const saboresCount = siteConfig.sabores.length;

  const mapeamentos = [
    ['precoHero', siteConfig.preco],
    ['precoCard', siteConfig.preco],
    ['precoKit', siteConfig.preco],
    ['contactWhatsappText', formatarWhatsapp(siteConfig.whatsappNumero)],
    ['contactLocationText', siteConfig.localizacao],
    ['contactInstagramText', siteConfig.instagramUsuario],
    ['footerWhatsapp', formatarWhatsapp(siteConfig.whatsappNumero)],
    ['footerLocation', siteConfig.localizacao],
    ['footerInstagram', siteConfig.instagramUsuario],
    ['saboresHero', `${saboresCount} sabores`],
    ['anoAtual', String(new Date().getFullYear())]
  ];

  mapeamentos.forEach(([id, valor]) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.textContent = valor;
    }
  });
}

/*
  Formata o número do WhatsApp para exibir melhor no site.
  Caso você queira outro formato, altere esta função.
*/
function formatarWhatsapp(numero) {
  return `+${numero.slice(0, 2)} ${numero.slice(2)}`;
}

/*
  Monta os cards de benefícios.
*/
function renderizarBeneficios() {
  const container = document.getElementById('benefitsGrid');
  if (!container) return;

  container.innerHTML = siteConfig.beneficios.map((item, index) => `
    <article class="benefit-card reveal delay-${index % 2 === 0 ? '1' : '2'}">
      <div class="benefit-icon">${index + 1}</div>
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    </article>
  `).join('');
}

/*
  Monta os itens do kit.
*/
function renderizarKit() {
  const container = document.getElementById('kitList');
  if (!container) return;

  container.innerHTML = siteConfig.itensKit.map(item => `
    <article class="check-item">
      <div class="check-mark">✓</div>
      <div class="check-content">
        <strong>${item.titulo}</strong>
        <p>${item.descricao}</p>
      </div>
    </article>
  `).join('');
}

/*
  Monta os sabores e também preenche o select para pedido personalizado.
*/
function renderizarSabores() {
  const flavorsGrid = document.getElementById('flavorsGrid');
  const flavorSelect = document.getElementById('flavorSelect');
  if (!flavorsGrid || !flavorSelect) return;

  flavorsGrid.innerHTML = siteConfig.sabores.map(sabor => `
    <article class="flavor-card reveal">
      <h3>${sabor.nome}</h3>
      <p>${sabor.descricao}</p>
      <small>Peça este sabor pelo WhatsApp</small>
    </article>
  `).join('');

  flavorSelect.innerHTML = `
    <option value="">Escolha um sabor</option>
    ${siteConfig.sabores.map(sabor => `<option value="${sabor.nome}">${sabor.nome}</option>`).join('')}
  `;
}

/*
  Monta a seção de preparo.
*/
function renderizarPreparo() {
  const container = document.getElementById('stepsGrid');
  if (!container) return;

  container.innerHTML = siteConfig.preparo.map((item, index) => `
    <article class="step-card reveal delay-${index % 2 === 0 ? '1' : '2'}">
      <div class="step-number">${index + 1}</div>
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    </article>
  `).join('');
}

/*
  Monta o FAQ com acordeão.
*/
function renderizarFaq() {
  const container = document.getElementById('faqList');
  if (!container) return;

  container.innerHTML = siteConfig.faq.map((item, index) => `
    <article class="faq-item">
      <button class="faq-trigger" type="button" aria-expanded="false" aria-controls="faq-${index}">
        <span class="faq-question">${item.pergunta}</span>
      </button>
      <div class="faq-answer-wrap" id="faq-${index}">
        <p class="faq-answer">${item.resposta}</p>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.faq-trigger').forEach(botao => {
    botao.addEventListener('click', () => {
      const item = botao.closest('.faq-item');
      const answerWrap = item.querySelector('.faq-answer-wrap');
      const isOpen = item.classList.contains('is-open');

      item.classList.toggle('is-open');
      botao.setAttribute('aria-expanded', String(!isOpen));
      answerWrap.style.maxHeight = isOpen ? '0px' : `${answerWrap.scrollHeight}px`;
    });
  });
}

/*
  Atualiza todos os links do WhatsApp espalhados no site.
  Cada botão pode ter uma mensagem própria usando data-message.
*/
function configurarLinksWhatsapp() {
  document.querySelectorAll('.js-whatsapp-link').forEach(link => {
    const mensagem = link.dataset.message || siteConfig.whatsappTextoPadrao;
    link.setAttribute('href', criarLinkWhatsapp(mensagem));
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

  const flavorButton = document.getElementById('flavorWhatsappButton');
  const flavorSelect = document.getElementById('flavorSelect');

  if (flavorButton && flavorSelect) {
    flavorButton.addEventListener('click', event => {
      event.preventDefault();
      const sabor = flavorSelect.value;
      const mensagem = sabor
        ? `Olá! Quero pedir o Tereré e Modão no sabor ${sabor}.`
        : 'Olá! Quero pedir o Tereré e Modão.';

      window.open(criarLinkWhatsapp(mensagem), '_blank');
    });
  }
}

/*
  Configura o link do Instagram.
  Se você preencher o link real em siteConfig.instagramLink, todos os botões passam a usar esse valor.
*/
function configurarLinksInstagram() {
  document.querySelectorAll('.js-instagram-link').forEach(link => {
    link.setAttribute('href', siteConfig.instagramLink || '#');

    if (siteConfig.instagramLink && siteConfig.instagramLink !== '#') {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

/*
  Menu mobile com abre/fecha.
*/
function configurarMenuMobile() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('menuMobile');
  const overlay = document.getElementById('menuOverlay');

  if (!menuToggle || !mobileNav || !overlay) return;

  function fecharMenu() {
    menuToggle.classList.remove('is-active');
    mobileNav.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', () => {
    const abrir = !mobileNav.classList.contains('is-open');
    menuToggle.classList.toggle('is-active', abrir);
    mobileNav.classList.toggle('is-open', abrir);
    overlay.classList.toggle('is-visible', abrir);
    menuToggle.setAttribute('aria-expanded', String(abrir));
  });

  overlay.addEventListener('click', fecharMenu);
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', fecharMenu));
}

/*
  Formulário: transforma os dados em mensagem pronta para WhatsApp.
*/
function configurarFormulario() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const texto = [
      'Olá! Vim pelo site do Tereré e Modão.',
      nome ? `Nome: ${nome}` : '',
      telefone ? `Meu WhatsApp: ${telefone}` : '',
      mensagem ? `Mensagem: ${mensagem}` : ''
    ].filter(Boolean).join('\n');

    window.open(criarLinkWhatsapp(texto), '_blank');
  });
}

/*
  Modais de políticas do rodapé.
*/
function configurarModais() {
  const botoesAbrir = document.querySelectorAll('[data-modal-target]');
  const botoesFechar = document.querySelectorAll('[data-close-modal]');

  botoesAbrir.forEach(botao => {
    botao.addEventListener('click', () => {
      const modal = document.getElementById(botao.dataset.modalTarget);
      if (modal) modal.classList.add('is-open');
    });
  });

  botoesFechar.forEach(botao => {
    botao.addEventListener('click', () => {
      const modal = botao.closest('.modal');
      if (modal) modal.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal.is-open').forEach(modal => modal.classList.remove('is-open'));
    }
  });
}

/*
  Efeito de entrada suave quando a seção aparece na tela.
*/
function configurarReveal() {
  const elementos = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elementos.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elementos.forEach(el => observer.observe(el));
}

/*
  Atualiza o bloco de JSON-LD com os dados centrais do site.
*/
function atualizarJsonLd() {
  const scriptJson = document.getElementById('productJsonLd');
  if (!scriptJson) return;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: siteConfig.nomeProduto,
    description: `Erva Mate 30g com bomba biodegradável, sabores variados e atendimento em ${siteConfig.localizacao}.`,
    brand: {
      '@type': 'Brand',
      name: siteConfig.nomeProduto
    },
    category: 'Erva mate para tereré',
    image: siteConfig.imagens,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      price: siteConfig.precoNumero,
      availability: 'https://schema.org/InStock'
    }
  };

  scriptJson.textContent = JSON.stringify(jsonLd, null, 2);
}

/*
  Inicialização geral do site.
*/
function init() {
  preencherInformacoesBasicas();
  renderizarBeneficios();
  renderizarKit();
  renderizarSabores();
  renderizarPreparo();
  renderizarFaq();
  configurarLinksWhatsapp();
  configurarLinksInstagram();
  configurarMenuMobile();
  configurarFormulario();
  configurarModais();
  configurarReveal();
  atualizarJsonLd();
}

document.addEventListener('DOMContentLoaded', init);
