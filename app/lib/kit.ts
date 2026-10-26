export type KitInstrument = {
  sigla: string;
  titulo: string;
  desc: string;
  tag: string;
};

export const kitInstruments: KitInstrument[] = [
  {
    sigla: "AFL",
    titulo: "Avaliação Funcional da Coluna Lombar",
    desc: "Mede o impacto da dor lombar nas atividades funcionais, postura sentada, flexão de tronco e sono.",
    tag: "Coluna",
  },
  {
    sigla: "AFC",
    titulo: "Avaliação Funcional da Coluna Cervical",
    desc: "Identifica limitações por dor e rigidez cervical, movimentos de rotação ao dirigir e trabalho no computador.",
    tag: "Coluna",
  },
  {
    sigla: "AFO",
    titulo: "Avaliação do Ombro e Membro Superior",
    desc: "Investiga disfunções em tarefas acima da cabeça, alcance atrás das costas, empurrar peso e higiene pessoal.",
    tag: "Membros Superiores",
  },
  {
    sigla: "AFJ",
    titulo: "Avaliação Funcional do Joelho",
    desc: "Mensura limitação funcional em escadas, agachamento, ajoelhar e rastreia sensação de instabilidade ou falseio.",
    tag: "Membros Inferiores",
  },
  {
    sigla: "AFQ",
    titulo: "Avaliação Funcional do Quadril",
    desc: "Rastreia restrições ao calçar meias/sapatos, cruzar as pernas, transferências e impacto no padrão de marcha.",
    tag: "Membros Inferiores",
  },
  {
    sigla: "AFTP",
    titulo: "Avaliação de Tornozelo e Pé",
    desc: "Avalia limitações decorrentes de entorses, apoio na ponta dos pés, superfícies irregulares e estabilidade.",
    tag: "Membros Inferiores",
  },
  {
    sigla: "AEF",
    titulo: "Escala de Equilíbrio Funcional",
    desc: "Rastreia risco de quedas e dificuldades de equilíbrio estático/dinâmico (ideal para idosos e geriatria).",
    tag: "Equilíbrio & Geriatria",
  },
  {
    sigla: "EMEM",
    titulo: "Escala de Medo-Evitação ao Movimento",
    desc: "Identifica crenças psicossociais, medo de movimentação e cinesiofobia em condições musculoesqueléticas crônicas.",
    tag: "Psicossocial & Dor",
  },
  {
    sigla: "QDQV",
    titulo: "Questionário Geral de Dor e Qualidade de Vida",
    desc: "Visão global do impacto da dor na rotina cotidiana, disposição física, humor, trabalho e convívio social.",
    tag: "Avaliação Global",
  },
];
