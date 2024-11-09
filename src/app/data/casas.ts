// src/data/casas.ts

export interface Casa {
  id: string;
  nome: string;
  img: string;
  posicao: { top: string; left: string; width: string; height: string };
}

const casas: Casa[] = [
  {
    id: 'salao-grande-mestre',
    nome: 'Salão do Grande Mestre',
    img: '/doze-casas/salao-grande-mestre.png',
    posicao: { top: '0%', left: '23.5%', width: '265px', height: '70px' },
  },
  {
    id: 'peixes',
    nome: 'Peixes',
    img: '/doze-casas/peixes.png',
    posicao: { top: '9%', left: '39.25%', width: '178px', height: '55px' },
  },
  {
    id: 'aquario',
    nome: 'Aquário',
    img: '/doze-casas/aquario.png',
    posicao: { top: '11%', left: '43.7%', width: '250px', height: '50px' },
  },
  {
    id: 'capricornio',
    nome: 'Capricórnio',
    img: '/doze-casas/capricornio.png',
    posicao: { top: '18%', left: '56%', width: '248px', height: '60px' },
  },
  {
    id: 'sagitario',
    nome: 'Sagitário',
    img: '/doze-casas/sagitario.png',
    posicao: { top: '26.4%', left: '62.5%', width: '240px', height: '50px' },
  },
  {
    id: 'escorpiao',
    nome: 'Escorpião',
    img: '/doze-casas/escorpiao.png',
    posicao: { top: '32.7%', left: '54.5%', width: '190px', height: '55px' },
  },
  {
    id: 'libra',
    nome: 'Libra',
    img: '/doze-casas/libra.png',
    posicao: { top: '42%', left: '48.6%', width: '155px', height: '60px' },
  },
  {
    id: 'virgem',
    nome: 'Virgem',
    img: '/doze-casas/virgem.png',
    posicao: { top: '48%', left: '37.4%', width: '220px', height: '50px' },
  },
  {
    id: 'leao',
    nome: 'Leão',
    img: '/doze-casas/leao.png',
    posicao: { top: '55%', left: '28%', width: '200px', height: '65px' },
  },
  {
    id: 'cancer',
    nome: 'Câncer',
    img: '/doze-casas/cancer.png',
    posicao: { top: '60%', left: '21%', width: '180px', height: '50px' },
  },
  {
    id: 'gemeos',
    nome: 'Gêmeos',
    img: '/doze-casas/gemeos.png',
    posicao: { top: '69.5%', left: '31.6%', width: '167px', height: '55px' },
  },
  {
    id: 'touro',
    nome: 'Touro',
    img: '/doze-casas/touro.png',
    posicao: { top: '66%', left: '41%', width: '290px', height: '60px' },
  },
  {
    id: 'aries',
    nome: 'Áries',
    img: '/doze-casas/aries.png',
    posicao: { top: '71%', left: '57.6%', width: '305px', height: '50px' },
  },
];

export default casas;
