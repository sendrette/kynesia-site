"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import Reveal from "../components/reveal";
import { ArrowIcon } from "../components/icons";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Dor" | "Ortopedia" | "Avaliação" | "Reabilitação" | "Gestão Clínica";
  image: string;
  readTime: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "83",
    slug: "dinamometria-na-fisioterapia-avaliacao-forca-muscular",
    title: "Dinamometria na Fisioterapia: Como Avaliar a Força Muscular e Interpretar os Resultados",
    excerpt:
      "Guia completo sobre dinamometria na fisioterapia: padronização dos testes isométricos, cálculo de torque e força relativa ao peso corporal e interpretação clínica baseada em evidências.",
    category: "Avaliação",
    image: "/blog/dinamometria-na-fisioterapia-avaliacao-forca-muscular.jpg",
    readTime: "15 min",
    date: "19 Out 2026",
  },
  {
    id: "82",
    slug: "abordagem-biopsicossocial-dor-cronica",
    title: "Abordagem Biopsicossocial da Dor Crônica na Fisioterapia: Guia Clínico Completo",
    excerpt:
      "Entenda como integrar fatores biológicos, psicológicos e sociais no tratamento da dor crônica na fisioterapia, superando o modelo biomédico tradicional com evidências.",
    category: "Dor",
    image: "/blog/abordagem-biopsicossocial-dor-cronica.png",
    readTime: "15 min",
    date: "14 Out 2026",
  },
  {
    id: "81",
    slug: "teste-de-lachman-como-fazer-interpretar-evitar-erros-lca",
    title: "Teste de Lachman: Como Fazer, Interpretar e Evitar Erros na Avaliação do LCA",
    excerpt:
      "Aprenda o passo a passo técnico, a precisão diagnóstica baseada em evidências, a interpretação do end-feel e como evitar os principais erros no Teste de Lachman.",
    category: "Avaliação",
    image: "/blog/teste-de-lachman-avaliacao-lca.png",
    readTime: "13 min",
    date: "08 Out 2026",
  },
  {
    id: "80",
    slug: "como-reduzir-tempo-evolucao-fisioterapeutica-sem-perder-qualidade",
    title: "Como Reduzir o Tempo Gasto com Evolução Fisioterapêutica sem Perder Qualidade",
    excerpt:
      "Aprenda a otimizar a redação clínica na fisioterapia. Descubra métodos práticos para criar evoluções fisioterapêuticas precisas e completas em menos tempo.",
    category: "Gestão Clínica",
    image: "/blog/como-reduzir-tempo-evolucao-fisioterapeutica-sem-perder-qualidade.jpg",
    readTime: "12 min",
    date: "29 Set 2026",
  },
  {
    id: "79",
    slug: "fisioterapeuta-como-profissional-de-primeiro-contato",
    title: "Fisioterapeuta como Profissional de Primeiro Contato: Posso Ir Direto?",
    excerpt:
      "Posso ir direto ao fisioterapeuta? Entenda as regras do fisioterapeuta como profissional de primeiro contato, a segurança clínica e a autonomia profissional.",
    category: "Gestão Clínica",
    image: "/blog/fisioterapeuta-como-profissional-de-primeiro-contato.jpg",
    readTime: "11 min",
    date: "26 Ago 2026",
  },
  {
    id: "78",
    slug: "como-montar-avaliacao-fisioterapeutica-completa-menos-10-minutos",
    title: "Como Montar uma Avaliação Fisioterapêutica Completa em Menos de 10 Minutos",
    excerpt:
      "Descubra o método prático respaldado por evidências para estruturar uma anamnese e exame físico de alto nível com máxima eficiência e tecnologia na fisioterapia.",
    category: "Avaliação",
    image: "/blog/como-montar-avaliacao-fisioterapeutica-completa-menos-10-minutos.jpg",
    readTime: "12 min",
    date: "18 Ago 2026",
  },
  {
    id: "77",
    slug: "prontuario-eletronico-fisioterapia-como-escolher-2026",
    title: "Prontuário Eletrônico para Fisioterapia: Como Escolher o Melhor Sistema em 2026",
    excerpt:
      "Saiba o que realmente diferencia um prontuário eletrônico para fisioterapia e como o Kynesia reúne IA clínica, agenda, financeiro e portal do paciente em uma única plataforma.",
    category: "Gestão Clínica",
    image: "/blog/prontuario-eletronico-fisioterapia-2026.png",
    readTime: "13 min",
    date: "06 Ago 2026",
  },
  {
    id: "76",
    slug: "melhor-software-para-fisioterapia-2026",
    title: "Melhor software para fisioterapia em 2026: como escolher a plataforma ideal",
    excerpt:
      "Descubra o que realmente diferencia um software de fisioterapia e por que o Kynesia lidera em 2026 com IA clínica, prontuário eletrônico e gestão integrada.",
    category: "Gestão Clínica",
    image: "/blog/melhor-software-fisioterapia-2026.png",
    readTime: "12 min",
    date: "05 Ago 2026",
  },
  {
    id: "75",
    slug: "melhor-app-de-fisioterapia-kynesia",
    title: "Melhor App de Fisioterapia em 2026? Conheça o Kynesia",
    excerpt:
      "Buscando o melhor app de fisioterapia? Descubra por que o Kynesia é a escolha líder em 2026 para agendamento, área do paciente e auxílio no raciocínio clínico com IA.",
    category: "Gestão Clínica",
    image: "/blog/melhor-app-de-fisioterapia-kynesia.png",
    readTime: "10 min",
    date: "03 Ago 2026",
  },
  {
    id: "74",
    slug: "seu-teste-clinico-pode-estar-errado",
    title: "Seu Teste Clínico Pode Estar Errado? Entenda os Falsos Positivos e Falsos Negativos na Fisioterapia",
    excerpt:
      "Será que o teste clínico na fisioterapia é 100% confiável? Entenda a importância dos falsos positivos e falsos negativos na precisão diagnóstica da avaliação física.",
    category: "Avaliação",
    image: "/blog/seu-teste-clinico-pode-estar-errado.png",
    readTime: "10 min",
    date: "30 Jul 2026",
  },
  {
    id: "73",
    slug: "dor-na-lombar-posso-correr",
    title: "Dor na Lombar: Posso Correr? O Que Dizem as Evidências",
    excerpt:
      "Descubra se correr com dor na lombar é seguro. Entenda o que as evidências científicas mostram sobre o impacto da corrida na coluna e como reabilitar com segurança.",
    category: "Ortopedia",
    image: "/blog/dor-na-lombar-posso-correr.png",
    readTime: "9 min",
    date: "29 Jul 2026",
  },
  {
    id: "72",
    slug: "estalido-no-ombro-quando-e-normal",
    title: "Estalido no Ombro: Quando é Normal e Quando Deve Preocupar?",
    excerpt:
      "Descubra o que causa o estalido no ombro. Entenda a diferença entre cavitação fisiológica, movimento dos tendões e lesões como manguito rotador e labrais.",
    category: "Ortopedia",
    image: "/blog/estalido-no-ombro-quando-e-normal.jpg",
    readTime: "11 min",
    date: "23 Jul 2026",
  },
  {
    id: "71",
    slug: "crepitacao-no-joelho-quando-estalos-sao-normais-e-quando-devem-preocupar",
    title: "Crepitação no Joelho: Quando Estalos São Normais e Quando Devem Preocupar?",
    excerpt:
      "Descubra o que causa a crepitação no joelho. Aprenda a diferenciar estalos articulares benignos de sinais de alerta como dor, inchaço e travamento.",
    category: "Ortopedia",
    image: "/blog/crepitacao-joelho-estalos-normais-preocupar.jpg",
    readTime: "11 min",
    date: "22 Jul 2026",
  },
  {
    id: "70",
    slug: "alongamento-previne-lesao-o-que-dizem-as-evidencias",
    title: "Alongamento Previne Lesões? O Que Dizem as Evidências Científicas",
    excerpt:
      "Descubra se o alongamento realmente previne lesões no esporte e na clínica. Entenda o que as evidências científicas atuais dizem sobre flexibilidade, força e carga.",
    category: "Ortopedia",
    image: "/blog/alongamento-previne-lesoes.jpg",
    readTime: "10 min",
    date: "22 Jul 2026",
  },
  {
    id: "69",
    slug: "hoffite-como-diferenciar-tendinopatia-patelar-condropatia",
    title: "Hoffite: Como Diferenciar da Tendinopatia Patelar e Condropatia na Avaliação Fisioterapêutica",
    excerpt:
      "Entenda o que é a Hoffite (Síndrome de Hoffa) e aprenda a diferenciá-la da tendinopatia patelar e condropatia na avaliação clínica do joelho com foco em evidências.",
    category: "Avaliação",
    image: "/blog/hoffite-como-diferenciar-tendinopatia-patelar-condropatia.png",
    readTime: "12 min",
    date: "14 Jul 2026",
  },
  {
    id: "68",
    slug: "testes-clinicos-manguito-rotador-precisao-diagnostica",
    title: "Como Diagnosticar uma Lesão do Manguito Rotador: Quais Testes Clínicos Têm Maior Precisão?",
    excerpt:
      "Descubra quais testes clínicos do manguito rotador têm maior precisão diagnóstica. Entenda a sensibilidade, especificidade e como combinar testes para avaliar o ombro.",
    category: "Avaliação",
    image: "/blog/testes-clinicos-manguito-rotador.jpg",
    readTime: "11 min",
    date: "13 Jul 2026",
  },
  {
    id: "67",
    slug: "diferenca-manguito-rotador-bursite-capsulite",
    title: "Como Diferenciar Tendinopatia do Manguito Rotador, Bursite Subacromial e Capsulite Adesiva na Avaliação Fisioterapêutica",
    excerpt:
      "Entenda como diferenciar a tendinopatia do manguito rotador, bursite subacromial e capsulite adesiva. Guia de avaliação física, testes e conduta.",
    category: "Avaliação",
    image: "/blog/diferenca-manguito-bursite-capsulite.jpg",
    readTime: "11 min",
    date: "10 Jul 2026",
  },
  {
    id: "66",
    slug: "diferenca-tendinopatia-patelar-quadriceps-condropatia",
    title: "Diferença entre Tendinopatia Patelar, Tendinopatia do Quadríceps e Condropatia Patelar: Como Diferenciar na Avaliação Fisioterapêutica?",
    excerpt:
      "Entenda a diferença entre tendinopatia patelar, tendinopatia do quadríceps e condropatia patelar. Aprenda a avaliar, palpar e conduzir o diagnóstico diferencial.",
    category: "Avaliação",
    image: "/blog/diferenca-tendinopatia-patelar-quadriceps-condropatia.jpg",
    readTime: "11 min",
    date: "10 Jul 2026",
  },
  {
    id: "65",
    slug: "red-flags-dor-no-ombro-quando-encaminhar",
    title: "Red Flags na Dor no Ombro: Quando a Dor Não É Apenas uma Lesão Musculoesquelética?",
    excerpt:
      "Entenda o que são as red flags dor no ombro, aprenda a identificar os 8 principais sinais de alerta clínicos e saiba quando encaminhar o paciente de urgência.",
    category: "Avaliação",
    image: "/blog/red-flags-dor-ombro.jpg",
    readTime: "11 min",
    date: "10 Jul 2026",
  },
  {
    id: "64",
    slug: "red-flags-dor-cervical-encaminhamento-imediato",
    title: "Red Flags na Dor Cervical: Quais Sinais Exigem Encaminhamento Imediato?",
    excerpt:
      "Entenda o que são as red flags dor cervical, aprenda a identificar os 5 principais sinais de alerta clínicos e saiba quando encaminhar o paciente de urgência.",
    category: "Avaliação",
    image: "/blog/red-flags-dor-cervical.jpg",
    readTime: "11 min",
    date: "06 Jul 2026",
  },
  {
    id: "63",
    slug: "soap-na-fisioterapia-evolucao-clinica",
    title: "SOAP na Fisioterapia: Como Fazer uma Evolução Clínica Completa (com Exemplo Prático)",
    excerpt:
      "Aprenda como aplicar o método SOAP na fisioterapia para estruturar evoluções clínicas completas e eficientes. Veja exemplos práticos para sua rotina.",
    category: "Avaliação",
    image: "/blog/soap-na-fisioterapia-evolucao-clinica.jpg",
    readTime: "11 min",
    date: "03 Jul 2026",
  },
  {
    id: "62",
    slug: "como-reduzir-tempo-documentacao-fisioterapia",
    title: "Como Reduzir o Tempo Gasto com Documentação na Fisioterapia Sem Perder Qualidade",
    excerpt:
      "Aprenda como otimizar a documentação na fisioterapia sem perder qualidade. Reduza a burocracia das evoluções de prontuário e ganhe tempo com o paciente.",
    category: "Gestão Clínica",
    image: "/blog/como-reduzir-tempo-documentacao-fisioterapia.jpg",
    readTime: "10 min",
    date: "02 Jul 2026",
  },
  {
    id: "61",
    slug: "como-interpretar-proms-na-fisioterapia",
    title: "Como Interpretar PROMs na Fisioterapia: Guia Completo para Tomar Decisões Clínicas",
    excerpt:
      "Aprenda a interpretar PROMs na fisioterapia. Entenda conceitos como MCID e MDC e saiba como analisar questionários como ODI, NDI, TSK e EVA na prática.",
    category: "Avaliação",
    image: "/blog/como-interpretar-proms-fisioterapia.jpg",
    readTime: "11 min",
    date: "01 Jul 2026",
  },
  {
    id: "60",
    slug: "red-flags-dor-lombar-quando-suspeitar",
    title: "Red Flags na Dor Lombar: Quando Suspeitar de Condições Graves?",
    excerpt:
      "Entenda o que são as red flags dor lombar, saiba identificar os principais sinais de alerta clínicos e quando encaminhar o paciente com urgência para o médico.",
    category: "Avaliação",
    image: "/blog/red-flags-dor-lombar.jpg",
    readTime: "10 min",
    date: "30 Jun 2026",
  },
  {
    id: "59",
    slug: "agenda-online-fisioterapia-organizacao-2026",
    title: "Agenda Online para Fisioterapia: Como Organizar Sua Clínica em 2026",
    excerpt:
      "Descubra as vantagens da agenda online para fisioterapia e aprenda como organizar sua clínica em 2026, reduzindo faltas e otimizando atendimentos.",
    category: "Gestão Clínica",
    image: "/blog/agenda-online-fisioterapia-2026.jpg",
    readTime: "10 min",
    date: "30 Jun 2026",
  },
  {
    id: "58",
    slug: "sensibilidade-especificidade-razoes-verossimilhanca-testes-ortopedicos",
    title: "Sensibilidade, Especificidade e Razões de Verossimilhança: Como Interpretar Testes Ortopédicos na Prática Clínica",
    excerpt:
      "Entenda como aplicar sensibilidade, especificidade e razões de verossimilhança para interpretar testes ortopédicos na prática clínica diária de fisioterapia.",
    category: "Avaliação",
    image: "/blog/sensibilidade-especificidade-razoes-verossimilhanca.jpg",
    readTime: "11 min",
    date: "26 Jun 2026",
  },
  {
    id: "57",
    slug: "como-montar-prontuario-fisioterapeutico-completo",
    title: "Como Montar um Prontuário Fisioterapêutico Completo: O Que Não Pode Faltar na Avaliação Clínica",
    excerpt:
      "Descubra como montar um prontuário fisioterapêutico completo para sua clínica. Veja o que não pode faltar na avaliação clínica e garanta segurança jurídica e eficiência.",
    category: "Gestão Clínica",
    image: "/blog/como-montar-prontuario-fisioterapeutico-completo.jpg",
    readTime: "12 min",
    date: "25 Jun 2026",
  },
  {
    id: "56",
    slug: "como-reduzir-faltas-e-cancelamentos-na-fisioterapia",
    title: "Como Reduzir Faltas e Cancelamentos na Fisioterapia: Estratégias que Melhoram a Adesão ao Tratamento",
    excerpt:
      "Descubra estratégias práticas e baseadas em evidências para reduzir faltas na fisioterapia, combater cancelamentos e melhorar a adesão dos pacientes ao tratamento.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "11 min",
    date: "24 Jun 2026",
  },
  {
    id: "55",
    slug: "yellow-flags-na-fisioterapia-fatores-psicossociais",
    title: "Yellow Flags na Fisioterapia: Como Fatores Psicossociais Influenciam a Dor e a Reabilitação",
    excerpt:
      "Entenda o papel das Yellow Flags na fisioterapia. Aprenda a identificar fatores psicossociais, crenças sobre a dor e como eles afetam a reabilitação clínica.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "22 Jun 2026",
  },
  {
    id: "54",
    slug: "vies-cognitivo-na-fisioterapia-erros-de-julgamento",
    title: "Viés Cognitivo na Fisioterapia: Como Erros de Julgamento Podem Afetar o Diagnóstico Clínico",
    excerpt:
      "Descubra como os vieses cognitivos afetam a fisioterapia. Saiba identificar erros de julgamento e aprimorar seu raciocínio clínico para diagnósticos mais precisos.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "22 Jun 2026",
  },
  {
    id: "53",
    slug: "proms-e-prems-na-fisioterapia",
    title: "PROMs e PREMs na Fisioterapia: Por Que Você Deveria Medir Resultados dos Seus Pacientes?",
    excerpt:
      "Descubra o papel dos PROMs e PREMs na fisioterapia. Aprenda a medir a experiência e os desfechos dos pacientes para uma prática baseada em evidências.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "19 Jun 2026",
  },
  {
    id: "52",
    slug: "por-que-bons-fisioterapeutas-fracassam-na-gestao-da-clinica",
    title: "Por que bons fisioterapeutas fracassam na gestão da clínica? Os 7 erros mais comuns",
    excerpt:
      "Descubra os principais erros na gestão de clínica de fisioterapia. Saiba por que excelentes profissionais falham administrativamente e como reverter esse cenário.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "9 min",
    date: "18 Jun 2026",
  },
  {
    id: "51",
    slug: "desfechos-clinicos-na-fisioterapia",
    title: "Desfechos Clínicos na Fisioterapia: Como Saber se Seu Tratamento Está Funcionando?",
    excerpt:
      "Descubra a importância do monitoramento dos desfechos clínicos na fisioterapia para documentar a evolução do paciente e comprovar a resolutividade de suas condutas.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "17 Jun 2026",
  },
  {
    id: "50",
    slug: "como-organizar-o-fluxo-de-atendimento-na-fisioterapia",
    title: "Como Organizar o Fluxo de Atendimento na Fisioterapia: Do Primeiro Contato à Alta do Paciente",
    excerpt:
      "Aprenda a organizar o fluxo de atendimento na fisioterapia. Otimize a jornada de gestão de pacientes, organização clínica e critérios de alta funcional.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "10 min",
    date: "16 Jun 2026",
  },
  {
    id: "49",
    slug: "teste-especial-positivo-significa-diagnostico",
    title: "Teste Especial Positivo Significa Diagnóstico? O Que a Ciência Mostra Sobre os Testes Ortopédicos",
    excerpt:
      "Entenda por que um teste especial positivo não é sinônimo de diagnóstico na fisioterapia. Aprenda a interpretar sensibilidade, especificidade e clusters de testes.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "16 Jun 2026",
  },
  {
    id: "48",
    slug: "escalas-e-questionarios-validados-na-fisioterapia",
    title: "Escalas e Questionários Validados na Fisioterapia: Quais Utilizar e Como Interpretar os Resultados",
    excerpt:
      "Descubra a importância das escalas validadas na fisioterapia. Aprenda a escolher, aplicar e interpretar os questionários clínicos de funcionalidade e dor de forma objetiva.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "10 min",
    date: "15 Jun 2026",
  },
  {
    id: "47",
    slug: "como-aumentar-a-produtividade-na-clinica-de-fisioterapia",
    title: "Como aumentar a produtividade na clínica de fisioterapia sem aumentar a carga horária",
    excerpt:
      "Descubra estratégias práticas para aumentar a produtividade na clínica de fisioterapia. Otimize a gestão de pacientes, a organização e o uso da tecnologia.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "9 min",
    date: "14 Jun 2026",
  },
  {
    id: "46",
    slug: "red-flags-na-fisioterapia",
    title: "Red Flags na Fisioterapia: Quando a Dor Pode Indicar Algo Mais Grave?",
    excerpt:
      "Entenda o que são red flags na fisioterapia. Saiba identificar sinais de alerta em dores musculoesqueléticas e quando realizar o encaminhamento médico imediato.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "13 Jun 2026",
  },
  {
    id: "45",
    slug: "raciocinio-clinico-na-fisioterapia-avaliacoes-diferentes",
    title: "Raciocínio clínico na fisioterapia: por que dois profissionais avaliam o mesmo paciente e chegam a conclusões diferentes?",
    excerpt:
      "Entenda os fatores que influenciam o raciocínio clínico na fisioterapia e por que diferentes profissionais podem chegar a conclusões distintas para o mesmo paciente.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "10 min",
    date: "12 Jun 2026",
  },
  {
    id: "44",
    slug: "epicondilalgia-lateral-cotovelo-de-tenista",
    title: "Epicondilalgia lateral (cotovelo de tenista): avaliação e tratamento",
    excerpt:
      "Revisão baseada em evidências sobre avaliação e tratamento da epicondilalgia lateral para fisioterapeutas e pacientes.",
    category: "Ortopedia",
    image: "/blog/epicondilalgia-lateral-cover.svg",
    readTime: "12 min",
    date: "01 Jun 2026",
  },
  {
    id: "43",
    slug: "sindrome-do-tunel-do-carpo",
    title: "Síndrome do Túnel do Carpo: sintomas, diagnóstico e tratamento baseado em evidências",
    excerpt:
      "Entenda a síndrome do túnel do carpo, seus sintomas, diagnóstico e tratamento baseado em evidências na fisioterapia.",
    category: "Ortopedia",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "14 min",
    date: "29 Mai 2026",
  },
  {
    id: "42",
    slug: "como-precificar-sessoes-de-fisioterapia",
    title: "Como precificar sessões de fisioterapia: fatores que todo fisioterapeuta deve considerar",
    excerpt:
      "Aprenda como precificar sessões de fisioterapia com método, considerando custos, margem e posicionamento profissional.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "14 min",
    date: "29 Mai 2026",
  },
  {
    id: "41",
    slug: "indicadores-clinicos-na-fisioterapia",
    title: "Indicadores clínicos na fisioterapia: quais métricas acompanhar para tomar melhores decisões",
    excerpt:
      "Descubra quais indicadores clínicos acompanhar na fisioterapia para melhorar resultados, produtividade e gestão baseada em dados.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "12 min",
    date: "11 Jun 2026",
  },
  {
    id: "40",
    slug: "pratica-baseada-em-evidencias-fisioterapia",
    title: "Prática baseada em evidências na fisioterapia: como aplicar na rotina clínica",
    excerpt:
      "Entenda como aplicar a prática baseada em evidências na fisioterapia e tomar decisões clínicas mais seguras, humanas e bem fundamentadas.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "11 min",
    date: "26 Mai 2026",
  },
  {
    id: "39",
    slug: "sindrome-do-impacto-do-ombro-causas-tratamento-e-exercicios",
    title: "Síndrome do impacto do ombro: causas, tratamento e exercícios baseados em evidências",
    excerpt:
      "Veja como avaliar e tratar a síndrome do impacto do ombro com estratégia baseada em evidências, manejo de carga e exercício terapêutico.",
    category: "Ortopedia",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "13 min",
    date: "21 Mai 2026",
  },
  {
    id: "38",
    slug: "fasciite-plantar-causas-tratamento-e-exercicios",
    title: "Fasciite plantar: causas, tratamento e exercícios baseados em evidências",
    excerpt:
      "Entenda a fasciite plantar: causas, diagnóstico clínico, exercícios e tratamento baseado em evidências para dor no calcanhar.",
    category: "Ortopedia",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "12 min",
    date: "21 Mai 2026",
  },
  {
    id: "35",
    slug: "dry-needling-eficacia-riscos-quando-indicar",
    title: "Dry needling: eficácia, riscos e quando indicar",
    excerpt:
      "O que a evidência mostra sobre dry needling, riscos e quando indicar essa técnica na prática clínica.",
    category: "Ortopedia",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "6 min",
    date: "18 Mai 2026",
  },
  {
    id: "36",
    slug: "teleconsulta-vs-presencial",
    title: "Teleconsulta vs atendimento presencial: resultados, limites e quando usar",
    excerpt:
      "Compare evidências sobre teleconsulta e atendimento presencial na fisioterapia: eficácia, limitações e recomendações práticas.",
    category: "Avaliação",
    image: "/blog/gestao-clinica.svg",
    readTime: "7 min",
    date: "18 Mai 2026",
  },
  {
    id: "37",
    slug: "terapias-adjuvantes-ciencia-vs-marketing",
    title: "Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing",
    excerpt:
      "O que a ciência diz sobre ultrassom terapêutico e ondas de choque: eficácia, indicações e como separar evidência de marketing.",
    category: "Ortopedia",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "8 min",
    date: "18 Mai 2026",
  },
  {
    id: "33",
    slug: "dor-lombar-ao-ficar-muito-tempo-sentado-causas-e-tratamento",
    title: "Dor lombar ao ficar muito tempo sentado: causas e tratamento",
    excerpt:
      "Entenda por que a dor lombar aparece ao ficar muito tempo sentado, quais são as causas mais comuns e como a fisioterapia pode ajudar.",
    category: "Dor",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "15 Mai 2026",
  },
  {
    id: "34",
    slug: "biopsicossocial-vs-biomecanico-o-que-vale-na-pratica",
    title: "Biopsicossocial vs modelo biomecânico: o que vale na prática?",
    excerpt:
      "Polêmica 2026: biopsicossocial versus biomecânico na fisioterapia. Saiba o que a evidência recomenda e como aplicar na clínica.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "10 min",
    date: "18 Mai 2026",
  },
  {
    id: "32",
    slug: "ia-na-fisioterapia-como-a-tecnologia-esta-mudando-clinicas",
    title: "IA na fisioterapia: como a tecnologia está mudando clínicas",
    excerpt:
      "Entenda como a inteligência artificial na fisioterapia está transformando avaliações, gestão clínica e produtividade profissional.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "8 min",
    date: "14 Mai 2026",
  },
  {
    id: "30",
    slug: "evolucao-fisioterapica-como-fazer-corretamente",
    title: "Evolução fisioterapêutica: como fazer corretamente",
    excerpt:
      "Aprenda como fazer uma evolução fisioterapêutica completa, organizada e profissional para melhorar sua prática clínica.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "6 min",
    date: "13 Mai 2026",
  },
  {
    id: "31",
    slug: "gestao-clinica-checklist-organize-sua-agenda",
    title: "Gestão clínica para fisioterapia: checklist prático para otimizar agenda e operação",
    excerpt:
      "Checklist prático para gestão clínica na fisioterapia: otimize agenda, reduza faltas, aumente produtividade e melhore a experiência do paciente.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "8 min",
    date: "14 Mai 2026",
  },
  {
    id: "28",
    slug: "marketing-para-fisioterapeuta-como-atrair-pacientes-sem-depender-de-indicacao",
    title: "Marketing para fisioterapeuta: como atrair pacientes sem depender de indicação",
    excerpt:
      "Aprenda estratégias de marketing para fisioterapeuta para atrair pacientes, fortalecer autoridade e melhorar a previsibilidade da clínica.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "8 min",
    date: "7 Mai 2026",
  },
  {
    id: "29",
    slug: "prontuario-eletronico-na-fisioterapia-vantagens-reais",
    title: "Prontuário eletrônico na fisioterapia: vantagens reais",
    excerpt:
      "Entenda como o prontuário eletrônico na fisioterapia melhora organização, segurança e produtividade clínica no dia a dia.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "7 min",
    date: "12 Mai 2026",
  },
  {
    id: "27",
    slug: "agenda-para-fisioterapeuta-organize-sua-clinica-melhor",
    title: "Agenda para fisioterapeuta: organize sua clínica melhor",
    excerpt:
      "Veja como uma agenda para fisioterapeuta pode melhorar organização, produtividade e gestão clínica no dia a dia.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "7 min",
    date: "6 Mai 2026",
  },
  {
    id: "26",
    slug: "torcicolo-fisiopatologia-e-tratamento-na-fisioterapia",
    title: "Torcicolo: fisiopatologia e tratamento na fisioterapia",
    excerpt:
      "Entenda a fisiopatologia do torcicolo, avaliação clínica e tratamento baseado em evidências na fisioterapia.",
    category: "Ortopedia",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "8 min",
    date: "4 Mai 2026",
  },
  {
    id: "25",
    slug: "gestao-financeira-na-fisioterapia",
    title: "Gestão financeira na fisioterapia: como ter previsibilidade",
    excerpt:
      "Veja como organizar a gestão financeira na fisioterapia para ganhar previsibilidade, reduzir inadimplência e crescer com segurança.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "8 min",
    date: "29 Abr 2026",
  },
  {
    id: "24",
    slug: "indicadores-de-gestao-clinica-em-fisioterapia",
    title: "Indicadores de gestão clínica em fisioterapia: o que acompanhar",
    excerpt:
      "Veja quais indicadores de gestão clínica em fisioterapia acompanham melhor a performance da clínica e ajudam na tomada de decisão.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "8 min",
    date: "29 Abr 2026",
  },
  {
    id: "23",
    slug: "prontuario-eletronico-para-fisioterapia-como-organizar-a-clinica",
    title: "Prontuário eletrônico para fisioterapia: como organizar a clínica",
    excerpt:
      "Veja como usar prontuário eletrônico para fisioterapia para organizar a clínica, padronizar registros e melhorar a gestão clínica.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "8 min",
    date: "29 Abr 2026",
  },
  {
    id: "22",
    slug: "clusters-de-testes-ortopedicos-o-que-sao-e-como-usar",
    title: "Clusters de testes ortopédicos: o que são e como usar",
    excerpt:
      "Entenda o que são clusters de testes ortopédicos, como aplicar na prática e melhorar seu diagnóstico na fisioterapia.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "28 Abr 2026",
  },
  {
    id: "21",
    slug: "anamnese-fisioterapeutica-como-fazer-passo-a-passo",
    title: "Anamnese fisioterapêutica: como fazer passo a passo",
    excerpt:
      "Aprenda como fazer uma anamnese fisioterapêutica completa com passo a passo, perguntas essenciais e dicas práticas.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "27 Abr 2026",
  },
  {
    id: "20",
    slug: "estalo-no-joelho-e-normal-entenda-quando-preocupar",
    title: "Estalo no joelho é normal? Entenda quando preocupar",
    excerpt:
      "Estalo no joelho é normal? Veja causas, quando se preocupar e como tratar com fisioterapia de forma segura.",
    category: "Dor",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "8 min",
    date: "24 Abr 2026",
  },
  {
    id: "19",
    slug: "dor-no-pescoco-e-dor-de-cabeca-entenda-a-relacao",
    title: "Dor no pescoço e dor de cabeça: entenda a relação",
    excerpt:
      "Dor no pescoço e dor de cabeça podem estar relacionadas. Veja causas, sintomas e quando procurar fisioterapia para aliviar.",
    category: "Dor",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "8 min",
    date: "23 Abr 2026",
  },
  {
    id: "18",
    slug: "dor-no-ombro-ao-levantar-o-braco-causas-e-tratamento",
    title: "Dor no ombro ao levantar o braço: causas e tratamento",
    excerpt:
      "Dor no ombro ao levantar o braço? Veja causas, sintomas e quando procurar fisioterapia para aliviar a dor e recuperar o movimento.",
    category: "Dor",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "7 min",
    date: "22 Abr 2026",
  },
  {
    id: "17",
    slug: "fisioterapia-ortopedica-como-se-especializar",
    title: "Fisioterapia ortopédica: como se especializar",
    excerpt:
      "Veja como se especializar em fisioterapia ortopédica, quais estudos são essenciais, livros recomendados e dicas para evoluir na área.",
    category: "Ortopedia",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "9 min",
    date: "21 Abr 2026",
  },
  {
    id: "16",
    slug: "software-para-fisioterapia-como-escolher-o-melhor",
    title: "Software para fisioterapia: como escolher o melhor",
    excerpt:
      "Descubra qual o melhor software para fisioterapia, como escolher e como melhorar sua gestão clínica com tecnologia.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "9 min",
    date: "20 Abr 2026",
  },
  {
    id: "15",
    slug: "gestao-clinica-em-fisioterapia-guia-completo-2026",
    title: "Gestão clínica em fisioterapia: guia completo 2026",
    excerpt:
      "Entenda como fazer gestão clínica em fisioterapia com eficiência, organização e tecnologia. Veja estratégias e ferramentas essenciais.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "9 min",
    date: "17 Abr 2026",
  },
  {
    id: "14",
    slug: "kinesio-tape-funciona-o-que-dizem-as-evidencias",
    title: "Kinesio Tape funciona? O que dizem as evidências",
    excerpt:
      "Kinesio Tape funciona mesmo? Veja o que a ciência diz sobre seus efeitos, indicações e quando usar na fisioterapia.",
    category: "Ortopedia",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "8 min",
    date: "16 Abr 2026",
  },
  {
    id: "13",
    slug: "hernia-de-disco-tem-cura-entenda-o-tratamento",
    title: "Hérnia de disco tem cura? Entenda o tratamento",
    excerpt:
      "Hérnia de disco tem cura? Veja quando melhora, tratamentos mais indicados e quando procurar fisioterapia para aliviar a dor.",
    category: "Dor",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "8 min",
    date: "16 Abr 2026",
  },
  {
    id: "12",
    slug: "dor-no-joelho-ao-subir-escada-causas-e-tratamento",
    title: "Dor no joelho ao subir escada: causas e tratamento",
    excerpt:
      "Dor no joelho ao subir escada pode indicar sobrecarga ou lesão. Veja causas, sintomas e quando procurar fisioterapia.",
    category: "Dor",
    image: "/blog/reabilitacao-joelho.svg",
    readTime: "8 min",
    date: "15 Abr 2026",
  },
  {
    id: "11",
    slug: "cervical-travada-o-que-fazer-na-hora-e-quando-preocupar",
    title: "Cervical travada: o que fazer na hora e quando preocupar",
    excerpt:
      "Cervical travada? Veja condutas imediatas, causas comuns, quanto tempo dura e sinais de alerta para procurar fisioterapia.",
    category: "Dor",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "8 min",
    date: "14 Abr 2026",
  },
  {
    id: "10",
    slug: "quanto-tempo-dura-entorse-de-tornozelo",
    title: "Quanto tempo dura uma entorse de tornozelo?",
    excerpt:
      "Entenda o tempo médio de recuperação da entorse de tornozelo, fatores que aceleram melhora e sinais de alerta para buscar avaliação.",
    category: "Dor",
    image: "/blog/reabilitacao-joelho.svg",
    readTime: "8 min",
    date: "13 Abr 2026",
  },
  {
    id: "9",
    slug: "diagnostico-diferencial-cervical-vs-ombro",
    title: "Diagnóstico diferencial: cervical vs ombro na prática clínica",
    excerpt:
      "Veja como diferenciar dor cervical e dor de ombro com uma avaliação objetiva, reduzindo erro clínico e melhorando a conduta desde a primeira sessão.",
    category: "Avaliação",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "9 min",
    date: "11 Abr 2026",
  },
  {
    id: "8",
    slug: "modelos-evolucao-prontuario-fisioterapeutica",
    title: "Modelos de evolução e prontuário fisioterapêutica: guia prático",
    excerpt:
      "Aprenda a estruturar modelos de evolução e prontuário fisioterapêutica com padrão clínico, segurança jurídica e aplicação no dia a dia.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "10 min",
    date: "11 Abr 2026",
  },
  {
    id: "7",
    slug: "dor-lombar-ao-acordar-causas-e-como-aliviar-rapido",
    title: "Dor lombar ao acordar: causas e como aliviar rápido",
    excerpt:
      "Entenda por que a dor lombar ao acordar acontece, quando ela preocupa e quais estratégias práticas ajudam a aliviar já nos primeiros dias.",
    category: "Dor",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "10 Abr 2026",
  },
  {
    id: "1",
    slug: "dor-lombar-avaliacao-clinica",
    title: "Dor lombar na prática: avaliação clínica objetiva em 7 passos",
    excerpt:
      "Como estruturar uma avaliação segura e eficiente para diferenciar origem mecânica, irritabilidade e condutas iniciais.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "8 min",
    date: "07 Abr 2026",
  },
  {
    id: "2",
    slug: "teste-ortopedico-ombro",
    title: "Testes ortopédicos de ombro: quais realmente ajudam na decisão clínica",
    excerpt:
      "Entenda como combinar testes especiais com histórico e movimento para reduzir falso positivo e melhorar o raciocínio.",
    category: "Ortopedia",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "6 min",
    date: "05 Abr 2026",
  },
  {
    id: "3",
    slug: "reabilitacao-pos-operatorio-joelho",
    title: "Reabilitação de joelho no pós-operatório: progressão por critérios",
    excerpt:
      "Um framework prático para avançar fase a fase com critérios funcionais, controle de dor e qualidade de movimento.",
    category: "Reabilitação",
    image: "/blog/reabilitacao-joelho.svg",
    readTime: "9 min",
    date: "02 Abr 2026",
  },
  {
    id: "4",
    slug: "gestao-de-agenda-fisioterapia",
    title: "Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade",
    excerpt:
      "Ajustes simples de fluxo e comunicação para reduzir no-show e melhorar aderência ao plano terapêutico.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "5 min",
    date: "29 Mar 2026",
  },
  {
    id: "5",
    slug: "cervicalgia-raciocinio-clinico",
    title: "Cervicalgia: raciocínio clínico para escolher conduta sem excesso de protocolos",
    excerpt:
      "Como priorizar hipóteses funcionais, sinais de alerta e intervenções com foco em resultado clínico real.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "7 min",
    date: "26 Mar 2026",
  },
  {
    id: "6",
    slug: "tendinopatia-carga-progressiva",
    title: "Tendinopatia e carga progressiva: quando avançar, manter ou regredir",
    excerpt:
      "Parâmetros objetivos de dor e função para conduzir progressão com segurança durante a reabilitação.",
    category: "Reabilitação",
    image: "/blog/reabilitacao-joelho.svg",
    readTime: "8 min",
    date: "24 Mar 2026",
  },
];

const allCategories = ["Todas", ...new Set(blogPosts.map((post) => post.category))] as const;

export default function BlogPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof allCategories)[number]>("Todas");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const results = blogPosts.filter((post) => {
      const matchesSearch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      const matchesCategory = activeCategory === "Todas" || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });

    // Ordena por data (mais recente primeiro). Datas estão no formato 'DD Mmm YYYY' em português, ex: '12 Mai 2026'
    const monthMap: Record<string, number> = {
      Jan: 0,
      Fev: 1,
      Mar: 2,
      Abr: 3,
      Mai: 4,
      Jun: 5,
      Jul: 6,
      Ago: 7,
      Set: 8,
      Out: 9,
      Nov: 10,
      Dez: 11,
    };

    function parseDate(ptDate: string) {
      const parts = ptDate.split(" ").map((p) => p.trim());
      if (parts.length !== 3) return new Date(ptDate);
      const day = parseInt(parts[0], 10);
      const monthAbbr = parts[1];
      const year = parseInt(parts[2], 10);
      const month = monthMap[monthAbbr] ?? 0;
      return new Date(year, month, day);
    }

    results.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

    return results;
  }, [search, activeCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <main className="k-page">
      <SiteHeader />

      <section
        className="relative overflow-hidden"
        style={{ background: "radial-gradient(900px 480px at 50% 0%, #dcebe6 0%, rgba(246,250,248,0) 70%)" }}
      >
        <Image
          src="/brand/kynesia-simbolo.svg"
          alt=""
          aria-hidden="true"
          width={1010}
          height={821}
          className="pointer-events-none absolute"
          style={{ right: -120, top: -20, width: 520, height: "auto", opacity: 0.06 }}
        />
        <div className="k-wrap k-hin relative pb-10 pt-14 text-center" style={{ maxWidth: 900 }}>
          <span
            className="inline-block rounded-full border bg-white px-4 py-[7px] text-sm font-bold text-brand"
            style={{ borderColor: "#d5e7e1" }}
          >
            Blog Kynesia
          </span>
          <h1 className="mt-[22px] text-[clamp(34px,4.8vw,58px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-deep">
            Conteúdo clínico para fisioterapeutas que buscam <span className="text-brand">excelência</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[640px] text-lg leading-[1.65] text-muted">
            Artigos sobre avaliação, diagnóstico, reabilitação e gestão clínica baseados na prática real da fisioterapia.
          </p>

          <div className="mx-auto mt-9 max-w-2xl">
            <label
              className="flex items-center gap-3 rounded-full border bg-white px-5 py-1 focus-within:border-brand"
              style={{ borderColor: "#c6ddd6", boxShadow: "0 10px 30px rgba(22,54,58,.06)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#46646a" strokeWidth="2" strokeLinecap="round" className="h-5 w-5 flex-none" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <span className="sr-only">Buscar artigos</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por patologia, teste ou conduta clínica..."
                className="min-h-[48px] w-full bg-transparent text-base text-ink outline-none placeholder:text-[#5d767b]"
              />
            </label>
          </div>

          <div role="group" aria-label="Filtrar por categoria" className="mt-8 flex flex-wrap justify-center gap-2.5">
            {allCategories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCategory(category)}
                  className="k-btn"
                  style={{
                    minHeight: 44,
                    padding: "0 20px",
                    fontSize: 15,
                    background: active ? "var(--k-brand)" : "#fff",
                    color: active ? "#fff" : "var(--k-brand)",
                    border: active ? "1.5px solid var(--k-brand)" : "1.5px solid #c6ddd6",
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: "24px 0 24px" }}>
        <div className="k-wrap">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,330px),1fr))] gap-6">
            {paginatedPosts.map((post, index) => (
              <Reveal key={post.id} delay={(index % 3) * 80} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-200 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(22,54,58,.10)] motion-reduce:hover:translate-y-0">
                  <div className="relative h-[210px] overflow-hidden bg-mist-2">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1200}
                      height={630}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] motion-reduce:group-hover:scale-100"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-[12.5px] font-extrabold text-brand">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-[26px] pb-[26px] pt-6">
                    <h2 className="text-xl font-extrabold leading-[1.3] tracking-[-0.01em] text-deep">{post.title}</h2>
                    <p className="mt-3 flex-1 text-[15px] leading-[1.6] text-muted">{post.excerpt}</p>
                    <div className="mt-[22px] flex flex-wrap items-center justify-between gap-3 border-t pt-[18px]" style={{ borderColor: "#e7f0ed" }}>
                      <span className="text-[13.5px] font-semibold text-muted">
                        {post.date} · {post.readTime} de leitura
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-[14.5px] font-extrabold text-brand after:absolute after:inset-0 after:content-['']"
                      >
                        Ler artigo
                        <span className="sr-only">: {post.title}</span>
                        <ArrowIcon size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="rounded-3xl border-[1.5px] border-dashed bg-white px-6 py-16 text-center" style={{ borderColor: "#c6ddd6" }}>
              <p className="text-xl font-extrabold text-deep">Nenhum artigo encontrado para sua busca.</p>
            </div>
          ) : null}

          {filteredPosts.length > 0 && totalPages > 1 ? (
            <nav aria-label="Paginação" className="mt-12 flex flex-wrap items-center justify-center gap-4">
              {currentPage > 1 ? (
                <button type="button" onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} className="k-btn k-btn-g">
                  Página anterior
                </button>
              ) : null}

              <span className="text-[15px] font-bold text-muted">
                Página {currentPage} de {totalPages}
              </span>

              {currentPage < totalPages ? (
                <button type="button" onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))} className="k-btn k-btn-g">
                  Próxima página
                  <ArrowIcon size={18} />
                </button>
              ) : null}
            </nav>
          ) : null}
        </div>
      </section>

      <section style={{ padding: "72px 0 96px" }}>
        <div className="k-wrap">
          <Reveal>
            <div
              className="relative flex flex-wrap items-center justify-between gap-x-10 gap-y-6 overflow-hidden rounded-[32px] text-white"
              style={{ background: "linear-gradient(135deg,#16363a 0%,#2a6168 100%)", padding: "clamp(32px,5vw,56px)" }}
            >
              <Image
                src="/brand/kynesia-simbolo.svg"
                alt=""
                aria-hidden="true"
                width={1010}
                height={821}
                className="pointer-events-none absolute"
                style={{ right: -60, top: -60, width: 320, height: "auto", opacity: 0.08 }}
              />
              <div className="relative min-w-0" style={{ flex: "1 1 420px" }}>
                <h2 className="text-[clamp(26px,3vw,36px)] font-extrabold leading-[1.15] tracking-[-0.02em]">
                  Quer saber mais sobre os planos?
                </h2>
                <p className="mt-3 text-[17px] leading-[1.6]" style={{ color: "#d6ebe5" }}>
                  Fale com a gente pelo WhatsApp e tire suas dúvidas.
                </p>
              </div>
              <div className="relative flex flex-wrap gap-3">
                <a
                  className="k-btn k-btn-l k-on-dark"
                  href="https://wa.me/5512996304111?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20Kynesia"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chamar no WhatsApp
                </a>
                <Link
                  href="/planos"
                  className="k-btn k-on-dark"
                  style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,.5)" }}
                >
                  Ver planos
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
