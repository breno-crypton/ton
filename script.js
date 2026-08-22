/* =========================================================
   MAQUINAS PAY — script.js
   Toda a informação dos produtos (fotos, preços, descrições
   e links de compra) fica centralizada no objeto "produtos"
   abaixo. Para atualizar o site, basta editar este objeto —
   não é necessário mexer no HTML.
   ========================================================= */

const produtos = {

  // ---------------- TON (verde) ----------------
  ton_t2: {
    marca: "ton",
    marcaLabel: "Ton",
    nome: "Ton T2",
    preco: "R$ 42,40",
    parcelamento: "12x de R$ 3,53 sem juros",
    imagem: "images/ton_t2.svg",
    descricao: "Modelo de entrada da Ton, compacto e ideal para quem está começando a aceitar cartão. Fácil de configurar e de usar no dia a dia.",
    beneficios: [
      "Aceita débito, crédito e Pix",
      "Bateria com boa autonomia",
      "Design compacto e leve",
      "Taxas competitivas para pequenos negócios"
    ],
    conectividade: "Wi-Fi e Chip (3G/4G)",
    entrega: "Envio em até 5 dias úteis",
    link: "https://ton.com.br/checkout/cart/?coupon=BRUNASALESVC&productId=TONMEGA_TIER_D195&userAnticipation=0&userTag=tonmega_tier&utm_medium=invite_share&utm_source=revendedor"
  },
  ton_t3: {
    marca: "ton",
    marcaLabel: "Ton",
    nome: "Ton T3",
    preco: "R$ 91,80",
    parcelamento: "12x de R$ 7,65 sem juros",
    imagem: "T3_NORMAL.png",
    descricao: "Versão intermediária com tela maior e impressão de comprovante mais rápida, pensada para negócios com volume médio de vendas.",
    beneficios: [
      "Impressão de comprovante integrada",
      "Tela maior para facilitar o uso",
      "Aceita débito, crédito e Pix",
      "Boa autonomia de bateria"
    ],
    conectividade: "Wi-Fi, Bluetooth e Chip (3G/4G)",
    entrega: "Envio em até 5 dias úteis",
    link: "https://ton.com.br/checkout/cart/?coupon=BRUNASALESVC&productId=TONMEGA_TIER_S920&userAnticipation=0&userTag=tonmega_tier&utm_medium=invite_share&utm_source=revendedor"
  },
  ton_t3_smart: {
    marca: "ton",
    marcaLabel: "Ton",
    nome: "Ton T3 Smart",
    preco: "R$ 163,10",
    parcelamento: "12x de R$ 13,59 sem juros",
    imagem: "images/ton_t3_smart.svg",
    descricao: "Maquininha inteligente com tela touch, ideal para quem quer gerenciar vendas, emitir relatórios e usar aplicativos direto no aparelho.",
    beneficios: [
      "Tela touch screen",
      "Sistema Android com apps de gestão",
      "Aceita débito, crédito e Pix",
      "Impressão de comprovante integrada"
    ],
    conectividade: "Wi-Fi, Bluetooth e Chip (3G/4G)",
    entrega: "Envio em até 5 dias úteis",
    link: "https://ton.com.br/checkout/cart/?coupon=BRUNASALESVC&productId=TONMEGA_TIER_SMART_POS&userAnticipation=0&userTag=tonmega_tier&utm_medium=invite_share&utm_source=revendedor"
  },

  // ---------------- MERCADO PAGO (azul) ----------------
  mp_point_mini: {
    marca: "mp",
    marcaLabel: "Mercado Pago",
    nome: "Point Mini",
    preco: "R$ 65,00",
    parcelamento: "12x de R$ 5,42 sem juros",
    imagem: "images/mp_point_mini.svg",
    descricao: "Maquininha compacta e portátil do Mercado Pago, perfeita para autônomos e pequenos negócios que precisam de mobilidade.",
    beneficios: [
      "Tamanho compacto, cabe no bolso",
      "Conecta via Bluetooth ao celular",
      "Aceita débito, crédito e Pix",
      "Integração direta com o app Mercado Pago"
    ],
    conectividade: "Bluetooth (via celular)",
    entrega: "Envio em até 4 dias úteis",
    link: "COLE_AQUI_O_LINK_MP_POINT_MINI"
  },
  mp_point_smart: {
    marca: "mp",
    marcaLabel: "Mercado Pago",
    nome: "Point Smart",
    preco: "R$ 130,00",
    parcelamento: "12x de R$ 10,83 sem juros",
    imagem: "images/mp_point_smart.svg",
    descricao: "Maquininha completa com tela touch e conexão própria, ideal para negócios que precisam vender sem depender do celular.",
    beneficios: [
      "Tela touch e sistema próprio",
      "Funciona sem precisar de celular",
      "Aceita débito, crédito e Pix",
      "Emite comprovante impresso"
    ],
    conectividade: "Wi-Fi e Chip (3G/4G)",
    entrega: "Envio em até 4 dias úteis",
    link: "COLE_AQUI_O_LINK_MP_POINT_SMART"
  },
  mp_point_pro: {
    marca: "mp",
    marcaLabel: "Mercado Pago",
    nome: "Point Pro",
    preco: "R$ 180,00",
    parcelamento: "12x de R$ 15,00 sem juros",
    imagem: "images/mp_point_pro.svg",
    descricao: "Modelo robusto para negócios com maior volume de vendas, com bateria de longa duração e impressão rápida de comprovantes.",
    beneficios: [
      "Bateria de longa duração",
      "Impressão rápida de comprovantes",
      "Aceita débito, crédito e Pix",
      "Ideal para alto volume de vendas"
    ],
    conectividade: "Wi-Fi, Bluetooth e Chip (3G/4G)",
    entrega: "Envio em até 4 dias úteis",
    link: "COLE_AQUI_O_LINK_MP_POINT_PRO"
  },

  // ---------------- PAGBANK (amarelo/verde) ----------------
  pagbank_mini: {
    marca: "pagbank",
    marcaLabel: "PagBank",
    nome: "PagBank Mini",
    preco: "R$ 60,00",
    parcelamento: "12x de R$ 5,00 sem juros",
    imagem: "images/pagbank_mini.svg",
    descricao: "Maquininha simples e acessível do PagBank, ótima porta de entrada para quem está começando a vender no cartão.",
    beneficios: [
      "Ótimo custo-benefício",
      "Fácil de configurar e usar",
      "Aceita débito, crédito e Pix",
      "Conecta via Bluetooth ao celular"
    ],
    conectividade: "Bluetooth (via celular)",
    entrega: "Envio em até 6 dias úteis",
    link: "COLE_AQUI_O_LINK_PAGBANK_MINI"
  },
  pagbank_moderninha_plus: {
    marca: "pagbank",
    marcaLabel: "PagBank",
    nome: "Moderninha Plus",
    preco: "R$ 95,00",
    parcelamento: "12x de R$ 7,92 sem juros",
    imagem: "images/pagbank_moderninha_plus.svg",
    descricao: "Uma das maquininhas mais conhecidas do mercado, com boa autonomia de bateria e impressão de comprovante integrada.",
    beneficios: [
      "Impressão de comprovante integrada",
      "Boa autonomia de bateria",
      "Aceita débito, crédito e Pix",
      "Ampla aceitação e reconhecimento no mercado"
    ],
    conectividade: "Wi-Fi e Chip (3G/4G)",
    entrega: "Envio em até 6 dias úteis",
    link: "COLE_AQUI_O_LINK_PAGBANK_MODERNINHA_PLUS"
  },
  pagbank_smart: {
    marca: "pagbank",
    marcaLabel: "PagBank",
    nome: "PagBank Smart",
    preco: "R$ 125,00",
    parcelamento: "12x de R$ 10,42 sem juros",
    imagem: "images/pagbank_smart.svg",
    descricao: "Maquininha inteligente com tela touch e sistema Android, permite instalar aplicativos e gerenciar vendas direto no aparelho.",
    beneficios: [
      "Tela touch screen",
      "Sistema Android com apps de gestão",
      "Aceita débito, crédito e Pix",
      "Impressão de comprovante integrada"
    ],
    conectividade: "Wi-Fi, Bluetooth e Chip (3G/4G)",
    entrega: "Envio em até 6 dias úteis",
    link: "COLE_AQUI_O_LINK_PAGBANK_SMART"
  }
};

/* =========================================================
   RENDERIZAÇÃO DOS CARDS
   ========================================================= */

const grids = {
  ton: document.getElementById("grid-ton"),
  mp: document.getElementById("grid-mp"),
  pagbank: document.getElementById("grid-pagbank")
};

function criarCard(id, produto) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.brand = produto.marca;

  card.innerHTML = `
    <div class="card__image-wrap">
      <img src="${produto.imagem}" alt="Foto da maquininha ${produto.nome}" loading="lazy">
    </div>
    <div class="card__body">
      <h3 class="card__name">${produto.nome}</h3>
      <div class="card__price-row">
        <span class="card__price">${produto.preco}</span>
      </div>
      <p class="card__installment">${produto.parcelamento}</p>
      <div class="card__actions">
        <button class="btn btn--secondary" data-action="descricao" data-id="${id}">Ver descrição</button>
        <a class="btn btn--primary" href="${produto.link}" target="_blank" rel="noopener" data-action="comprar" data-id="${id}">Comprar</a>
      </div>
    </div>
  `;

  return card;
}

Object.entries(produtos).forEach(([id, produto]) => {
  const card = criarCard(id, produto);
  grids[produto.marca].appendChild(card);
});

/* =========================================================
   MODAL DE DESCRIÇÃO
   ========================================================= */

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalBrandChip = document.getElementById("modalBrandChip");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalBenefits = document.getElementById("modalBenefits");
const modalConnectivity = document.getElementById("modalConnectivity");
const modalDelivery = document.getElementById("modalDelivery");
const modalBuyBtn = document.getElementById("modalBuyBtn");

const chipClasses = {
  ton: "brand-chip--ton",
  mp: "brand-chip--mp",
  pagbank: "brand-chip--pagbank"
};

function abrirModal(id) {
  const produto = produtos[id];
  if (!produto) return;

  modalImage.src = produto.imagem;
  modalImage.alt = `Foto da maquininha ${produto.nome}`;

  modalBrandChip.textContent = produto.marcaLabel;
  modalBrandChip.className = "brand-chip " + chipClasses[produto.marca];

  modalTitle.textContent = produto.nome;
  modalPrice.textContent = `${produto.preco} · ${produto.parcelamento}`;
  modalDescription.textContent = produto.descricao;

  modalBenefits.innerHTML = "";
  produto.beneficios.forEach((beneficio) => {
    const li = document.createElement("li");
    li.textContent = beneficio;
    modalBenefits.appendChild(li);
  });

  modalConnectivity.textContent = produto.conectividade;
  modalDelivery.textContent = produto.entrega;
  modalBuyBtn.href = produto.link;

  modalOverlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  modalOverlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

// Delegação de evento: qualquer botão "Ver descrição" abre o modal
document.addEventListener("click", (event) => {
  const trigger = event.target.closest('[data-action="descricao"]');
  if (trigger) {
    abrirModal(trigger.dataset.id);
  }
});

modalClose.addEventListener("click", fecharModal);

// Fecha ao clicar fora da janela (na área escurecida)
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    fecharModal();
  }
});

// Fecha com a tecla ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalOverlay.classList.contains("is-open")) {
    fecharModal();
  }
});

/* =========================================================
   MENU MOBILE
   ========================================================= */

const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
});

// Fecha o menu mobile ao clicar em um link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
