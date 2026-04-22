// ============================================================
//  DADOS DOS PROFISSIONAIS
//  → Para adicionar foto: coloque o caminho em "photo"
//    Exemplo local:  photo: "fotos/carlos.jpg"
//    Exemplo online: photo: "https://seusite.com/foto.jpg"
//    Sem foto:       deixe photo como "" ou remova o campo
// ============================================================

const professionals = [
  {
    name: "Camila Martins",
    initials: "CM",
    photo: "src/image/camila.jpeg",                          // ← coloque o caminho da foto aqui
    role: "faxineira",
    type: "professor",
    area: "Física da Matéria Condensada & Nanomateriais",
    tags: ["RA", "preguiça", "café"]
  },
  {
    name: "Cassia Thais",
    initials: "AF",
    photo: "src/image/cassia_tais.jpg",
    role: "Iniciação Científica",
    type: "amalero",
    area: "Síntese de Nanopartículas Magnéticas",
    tags: ["Vanadatos", "RAMAN", "TEM"]
  },
  {
    name: "João Roberto Figueiredo",
    initials: "JRF",
    photo: "src/image/joao_roberto.jpeg",
    role: "Professor",
    type: "professor",
    area: "Física Quântica & Óptica",
    tags: ["DRX", "Raman", "Lasers"]
  },
  {
    name: "Cauan Sergio",
    initials: "JC",
    photo: "src/image/cauan_sergio.jpeg",
    role: "Doutorando",
    type: "student",
    area: "Pontos Quânticos e Propriedades Ópticas",
    tags: ["CdSe", "PL", "ZnS"]
  },
  {
    name: "Renan Nobre",
    initials: "RN",
    photo: "src/image/Renan.jpeg",
    role: "Iniciação Científica",
    type: "student",
    area: "Nanomateriais para Energia Solar",
    tags: ["TiO₂", "Perovskita", "DSSC"]
  },
  {
    name: "João Paulo",
    initials: "JP",
    photo: "src/image/joao_paulo.jpeg",
    role: "Bolsista de Pesquisa",
    type: "student",
    area: "Polímeros Condutores & Eletrônica Orgânica",
    tags: ["PEDOT", "OPV", "CV"]
  },
  {
    name: "Grad. Thiago Sousa",
    initials: "TS",
    photo: "",
    role: "Mestrando",
    type: "student",
    area: "Óxidos Metálicos Nanoestruturados",
    tags: ["ZnO", "AFM", "MEB"]
  },
  {
    name: "Dr. Pedro Almeida",
    initials: "PA",
    photo: "",
    role: "Pós-Doc",
    type: "researcher",
    area: "Simulação Computacional de Nanomateriais",
    tags: ["VASP", "MD", "Python"]
  },
  {
    name: "Grad. Fernanda Lima",
    initials: "FL",
    photo: "",
    role: "Iniciação Cient.",
    type: "student",
    area: "Caracterização de Nanocompósitos",
    tags: ["FTIR", "DSC", "TGA"]
  },
  {
    name: "Prof. Dr. Wilson Braga",
    initials: "WB",
    photo: "",
    role: "Professor",
    type: "professor",
    area: "Magnetismo & Spintrónica",
    tags: ["VSM", "MFM", "GMR"]
  },
];

// ============================================================
//  FUNÇÕES
// ============================================================

/**
 * Monta o HTML de um card individual.
 * Se "photo" estiver preenchido, exibe a imagem.
 * Caso contrário, exibe as iniciais como fallback.
 */
function buildCard(person) {
  const avatarContent = person.photo
    ? `<img src="${person.photo}" alt="Foto de ${person.name}" onerror="this.style.display='none'">`
    : `<div class="avatar-ring"></div><div class="avatar-initials">${person.initials}</div>`;

  const tagsHTML = person.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join('');

  return `
    <div class="card ${person.type}">
      <div class="card-avatar">
        ${avatarContent}
      </div>
      <div class="card-accent"></div>
      <div class="card-body">
        <div class="card-name">${person.name}</div>
        <span class="card-role">${person.role}</span>
        <div class="card-area">${person.area}</div>
        <div class="card-tags">${tagsHTML}</div>
      </div>
    </div>`;
}

/**
 * Renderiza todos os cards no carrossel (duplicados para loop infinito).
 */
function renderCarousel() {
  const track = document.getElementById('track');
  const allCards = professionals.map(buildCard).join('');

  // duplica para criar efeito de loop contínuo
  track.innerHTML = allCards + allCards;
}

// inicia ao carregar a página
renderCarousel();