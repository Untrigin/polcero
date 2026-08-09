import type { LegalDoc } from '../../legal';

const COMPANY_PT =
  'POLCERO sp. z o.o., com sede em Kietrz, Polónia, inscrita no Registo de Empresários do Registo Judicial Nacional (KRS) sob o número 0001178417, NIP 8971955510, REGON 542000919 ("POLCERO", "nós").';
const CONTACT_PT = 'e-mail: biuro@polcero.com, tel. +48 535 777 268.';

export const pt: Record<'privacy' | 'cookies' | 'terms', LegalDoc> = {
  privacy: {
    slug: 'privacy',
    title: 'Política de Privacidade',
    updated: '8 de agosto de 2026',
    intro:
      'Esta Política de Privacidade explica de que forma a POLCERO trata os dados pessoais no âmbito deste website (polcero.com) e dos pedidos efetuados através dele, em conformidade com o Regulamento (UE) 2016/679 (RGPD).',
    sections: [
      {
        heading: '1. Responsável pelo tratamento dos dados',
        body: [
          `O responsável pelo tratamento dos seus dados pessoais é a ${COMPANY_PT}`,
          `Em todos os assuntos relativos ao tratamento de dados pessoais pode contactar-nos através de: ${CONTACT_PT}`,
        ],
      },
      {
        heading: '2. Que dados recolhemos',
        body: [
          'Formulário de contacto: o nome, o endereço de e-mail, a empresa (facultativo), o assunto e o conteúdo da mensagem que nos fornece quando nos escreve.',
          'Dados técnicos: registos do servidor (endereço IP, tipo de navegador, data e hora do pedido) gerados automaticamente quando visita o site, bem como informações armazenadas ou lidas a partir de cookies e tecnologias semelhantes (ver a nossa Política de Cookies).',
          'Não recolhemos conscientemente dados de crianças e não realizamos decisões automatizadas nem definição de perfis que produzam efeitos jurídicos para si.',
        ],
      },
      {
        heading: '3. Finalidades e fundamentos jurídicos',
        body: [
          'Para responder ao seu pedido e diligenciar as medidas por si solicitadas antes da celebração de um contrato - art. 6.º, n.º 1, alínea b) do RGPD.',
          'Para operar, proteger e manter o website e para prosseguir os nossos interesses legítimos, incluindo responder à correspondência comercial e prevenir abusos - art. 6.º, n.º 1, alínea f) do RGPD.',
          'Para utilizar cookies de análise e de marketing - apenas com base no seu consentimento, art. 6.º, n.º 1, alínea a) do RGPD, que pode retirar a qualquer momento.',
          'Para cumprir as obrigações legais a que estamos sujeitos (por exemplo, contabilidade, resposta às autoridades) - art. 6.º, n.º 1, alínea c) do RGPD.',
        ],
      },
      {
        heading: '4. Cookies e análise',
        body: [
          'Utilizamos cookies essenciais necessários ao funcionamento do site e - com o seu consentimento - cookies de análise e de marketing. Gere as suas escolhas através do painel de definições de cookies disponível no site. Os detalhes completos constam da nossa Política de Cookies.',
        ],
      },
      {
        heading: '5. Destinatários e subcontratantes',
        body: [
          'Os seus dados podem ser partilhados com prestadores de confiança que os tratam por nossa conta ao abrigo de contratos de tratamento de dados, em particular o nosso prestador de alojamento e de correio eletrónico e - sujeito ao seu consentimento - prestadores de serviços de análise.',
          'Não vendemos os seus dados pessoais.',
        ],
      },
      {
        heading: '6. Conservação',
        body: [
          'Os dados dos pedidos são conservados durante o tempo necessário ao tratamento do assunto e, posteriormente, durante o período exigido para exercer ou defender direitos em juízo. Os dados baseados no consentimento são conservados até que retire o consentimento. Os registos do servidor são conservados por um período limitado, para fins de segurança e diagnóstico.',
        ],
      },
      {
        heading: '7. Transferências para fora do EEE',
        body: [
          'Quando um prestador trata dados fora do Espaço Económico Europeu, asseguramos um nível adequado de proteção através de salvaguardas apropriadas, como as Cláusulas Contratuais-Tipo da Comissão Europeia.',
        ],
      },
      {
        heading: '8. Os seus direitos',
        body: [
          'Tem o direito de aceder aos seus dados, de os retificar, apagar ou limitar o seu tratamento, de portabilidade dos dados e de se opor ao tratamento baseado no nosso interesse legítimo. Quando o tratamento se baseia no consentimento, pode retirá-lo a qualquer momento, sem prejuízo da licitude do tratamento efetuado anteriormente.',
          'Tem igualmente o direito de apresentar reclamação junto do Presidente do Serviço de Proteção de Dados Pessoais (Prezes Urzędu Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Varsóvia, Polónia.',
        ],
      },
      {
        heading: '9. Contacto',
        body: [`Para exercer os seus direitos ou colocar questões sobre esta política, contacte-nos através de ${CONTACT_PT}`],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Política de Cookies',
    updated: '8 de agosto de 2026',
    intro:
      'Esta Política de Cookies explica de que forma a POLCERO utiliza cookies e tecnologias semelhantes (como o armazenamento local do navegador) em polcero.com.',
    sections: [
      {
        heading: '1. O que são cookies',
        body: [
          'Os cookies são pequenos ficheiros de texto armazenados no seu dispositivo pelo navegador. Tecnologias semelhantes, como o armazenamento local, funcionam de forma comparável. Permitem que um site memorize as suas ações e preferências.',
        ],
      },
      {
        heading: '2. Categorias que utilizamos',
        body: [
          'Essenciais - necessários ao funcionamento do site e à memorização das suas escolhas de privacidade. Estão sempre ativos e não exigem consentimento. Exemplo: a entrada no armazenamento local que regista as suas preferências de cookies.',
          'Análise - ajudam-nos a compreender como o site é utilizado, para que o possamos melhorar. Carregados apenas com o seu consentimento.',
          'Marketing - utilizados para medir e personalizar campanhas. Carregados apenas com o seu consentimento.',
          'Nenhuma tecnologia de análise ou de marketing é carregada antes de dar o seu consentimento.',
        ],
      },
      {
        heading: '3. Gerir o seu consentimento',
        body: [
          'Na sua primeira visita, um banner permite aceitar tudo, rejeitar os opcionais ou escolher categorias. Pode alterar a sua decisão a qualquer momento abrindo o painel de definições de cookies (a ligação "Definições de cookies" no rodapé).',
          'Também pode bloquear ou eliminar cookies nas definições do seu navegador; note que desativar os cookies essenciais pode afetar o funcionamento do site.',
        ],
      },
      {
        heading: '4. Alterações',
        body: [
          'Podemos atualizar esta Política de Cookies à medida que a nossa utilização de cookies se altera. A data acima indica a revisão mais recente.',
        ],
      },
      {
        heading: '5. Contacto',
        body: [`Tem questões sobre cookies? Contacte-nos através de ${CONTACT_PT}`],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Termos de Utilização',
    updated: '8 de agosto de 2026',
    intro:
      'Estes Termos regem a utilização do website polcero.com. Ao utilizar o website, aceita estes Termos.',
    sections: [
      {
        heading: '1. Operador do website',
        body: [`O website é operado pela ${COMPANY_PT}`, `Contacto: ${CONTACT_PT}`],
      },
      {
        heading: '2. Utilização do website',
        body: [
          'O website e o seu conteúdo são disponibilizados para fins informativos sobre a POLCERO e os seus produtos e serviços. Pode navegar e utilizar o site apenas para fins lícitos.',
          'Compromete-se a não interferir com o funcionamento ou a segurança do site, a não tentar acessos não autorizados e a não o utilizar de forma que viole os direitos de terceiros ou a legislação aplicável.',
        ],
      },
      {
        heading: '3. Propriedade intelectual',
        body: [
          'Todo o conteúdo do website - textos, gráficos, logótipos, imagens, disposição e software - pertence à POLCERO ou aos seus licenciantes e está protegido por lei. Não pode copiar, distribuir ou criar obras derivadas sem o nosso consentimento prévio por escrito, salvo nos casos permitidos por lei imperativa.',
        ],
      },
      {
        heading: '4. Pedidos - ausência de oferta comercial',
        body: [
          'As informações publicadas no website, incluindo descrições de produtos e preços indicativos ("sob consulta"), não constituem uma oferta comercial na aceção do artigo 66.º do Código Civil polaco. Trata-se de um convite ao início de negociações. Um acordo vinculativo só surge através de um contrato celebrado separadamente.',
          'As mensagens enviadas através do formulário de contacto são pedidos de contacto e não criam qualquer obrigação para nenhuma das partes.',
        ],
      },
      {
        heading: '5. Responsabilidade',
        body: [
          'Empenhamo-nos em manter as informações do website exatas e atualizadas, mas não garantimos que sejam completas, atuais ou isentas de erros. Na medida do permitido por lei, a POLCERO não se responsabiliza por decisões tomadas exclusivamente com base no conteúdo do website.',
        ],
      },
      {
        heading: '6. Ligações externas',
        body: [
          'O website pode conter ligações para sites de terceiros. Não somos responsáveis pelo conteúdo nem pelas práticas de privacidade desses sites.',
        ],
      },
      {
        heading: '7. Dados pessoais',
        body: [
          'Os dados pessoais são tratados em conformidade com a nossa Política de Privacidade e Política de Cookies.',
        ],
      },
      {
        heading: '8. Reclamações',
        body: [
          'Pode apresentar reclamações relativas ao funcionamento do website por e-mail para biuro@polcero.com. Descreva a questão e indique os seus dados de contacto. Analisaremos a reclamação e responderemos sem demora injustificada, no prazo máximo de 30 dias a contar da receção.',
        ],
      },
      {
        heading: '9. Lei aplicável e litígios',
        body: [
          'Estes Termos regem-se pela lei polaca. Quaisquer litígios serão resolvidos pelo tribunal polaco competente para a sede da POLCERO, salvo se normas imperativas de proteção do consumidor dispuserem de outra forma.',
        ],
      },
      {
        heading: '10. Alterações a estes Termos',
        body: [
          'Podemos alterar estes Termos. A versão publicada no website com a data acima indicada aplica-se à sua utilização atual.',
        ],
      },
    ],
  },
};
