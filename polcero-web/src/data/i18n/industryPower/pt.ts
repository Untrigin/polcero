import type { IndustryPower } from '../../industryPower';

export const pt: Record<string, IndustryPower> = {
  industry: {
    eyebrow: 'INFRAESTRUTURA ELÉTRICA',
    title: 'Energia da rede no chão de fábrica',
    lead: 'Uma nave tem energia em todo o lado, por isso a maioria dos robôs não precisa de a transportar. Instalamos calhas de energia fixas ao longo das estações e deixamos os robôs funcionar diretamente da rede — as baterias passam a ser a reserva para os que circulam entre máquinas.',
    modes: [
      { name: 'Calhas fixas nas estações', text: 'Os robôs fixos a uma estação, ou que a servem, recebem energia por calha e funcionam 24/7 sem uma única troca.' },
      { name: 'Hot-swap para os que circulam', text: 'Um humanoide que se move entre máquinas transporta três baterias hot-swap e recarrega-as numa estação de carregamento.' },
      { name: 'Uma só integração', text: 'A energia de calha e a de bateria usam o mesmo módulo central — passe um robô de cabo a móvel sem redesenho.' },
    ],
  },
  agriculture: {
    eyebrow: 'INFRAESTRUTURA ELÉTRICA',
    title: 'Alimentar toda a quinta autónoma',
    lead: 'A Farma AI alimenta todo o ecossistema de cultivo a partir da rede, onde é possível. As estufas recebem calhas de energia fixas; os campos abertos recebem linhas aéreas de condutores como a catenária dos elétricos ao longo das filas; os robôs de carris recebem diretamente dos carris de tubo aquecido — as baterias suprem onde nenhuma linha chega.',
    modes: [
      { name: 'Calhas fixas nas estufas', text: 'As estufas de vidro e os túneis alimentam os robôs por calhas fixas, para que a frota trabalhe sem parar ao longo da estação.' },
      { name: 'Linhas aéreas nos campos', text: 'Nos campos abertos estendemos linhas aéreas de condutores ao longo das filas; o robô recebe da linha e recarrega as baterias enquanto trabalha.' },
      { name: 'Baterias fora da rede', text: 'Para além das linhas, as baterias hot-swap mantêm os robôs de campo autónomos — trocadas numa estação de carregamento alimentada a energia solar.' },
    ],
  },
  construction: {
    eyebrow: 'INFRAESTRUTURA ELÉTRICA',
    title: 'Energia onde ainda não há rede',
    lead: 'Uma obra raramente tem energia fixa nas fases iniciais, por isso os robôs de construção apoiam-se nas baterias, com o dron de transporte a entregar baterias carregadas nos cantos mais afastados. Onde há energia de obra ou um gerador, as estações fixas funcionam por cabo.',
    modes: [
      { name: 'Hot-swap no terreno', text: 'Os robôs de lagartas e de pernas transportam três baterias e trocam-nas numa estação de carregamento móvel na obra.' },
      { name: 'Baterias entregues por dron', text: 'O dron de transporte deixa baterias carregadas e recolhe as descarregadas onde a estrada não chega.' },
      { name: 'Por cabo em pontos fixos', text: 'Onde há energia de obra ou um gerador, as estações de inspeção e manuseamento funcionam em contínuo por cabo.' },
    ],
  },
  logistics: {
    eyebrow: 'INFRAESTRUTURA ELÉTRICA',
    title: 'Faixas de carregamento no armazém, baterias no pátio',
    lead: 'Um armazém tem energia por toda a parte, por isso instalamos faixas de carregamento e calhas fixas para os robôs que trabalham no interior; no pátio e na estrada a frota funciona com baterias hot-swap, e o dron leva baterias carregadas a pontos remotos.',
    modes: [
      { name: 'Faixas de carregamento no interior', text: 'Os robôs acoplam ao longo de faixas de carregamento entre tarefas, para que a recolha e o transporte interno nunca parem por falta de energia.' },
      { name: 'Hot-swap no pátio', text: 'Fora do edifício, os robôs de três baterias rodam as suas próprias baterias numa estação de carregamento no pátio.' },
      { name: 'Baterias para pontos remotos', text: 'O dron de transporte entrega baterias carregadas juntamente com o robô, para que este aterre pronto a trabalhar.' },
    ],
  },
  'public-sector': {
    eyebrow: 'INFRAESTRUTURA ELÉTRICA',
    title: 'Energia no local, dados no local',
    lead: 'Nas instalações públicas, tanto a energia como os dados ficam no local. A infraestrutura fixa funciona a partir da rede local por cabo ou calha; os robôs móveis de inspeção e patrulha funcionam com baterias hot-swap — e, tal como os modelos, nada tem de sair das instalações.',
    modes: [
      { name: 'Rede para instalações fixas', text: 'As máquinas estacionárias e as estações de carregamento funcionam a partir da rede do edifício por cabo ou calha fixa.' },
      { name: 'Baterias para patrulha', text: 'Os robôs de inspeção e patrulha mantêm-se autónomos com três baterias hot-swap, trocadas numa estação local.' },
      { name: 'Tudo fica local', text: 'A energia, o carregamento e a inferência no dispositivo vivem todos nas instalações — sem dependência enviada para fora.' },
    ],
  },
};
