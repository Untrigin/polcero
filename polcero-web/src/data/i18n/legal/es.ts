import type { LegalDoc } from '../../legal';

const COMPANY_ES =
  'POLCERO sp. z o.o., con domicilio social en Kietrz, Polonia, inscrita en el Registro de Empresarios del Registro Judicial Nacional (KRS) con el número 0001178417, NIP 8971955510, REGON 542000919 ("POLCERO", "nosotros").';
const CONTACT_ES = 'correo electrónico: biuro@polcero.com, tel. +48 535 777 268.';

export const es: Record<'privacy' | 'cookies' | 'terms', LegalDoc> = {
  privacy: {
    slug: 'privacy',
    title: 'Política de privacidad',
    updated: '8 de agosto de 2026',
    intro:
      'Esta Política de privacidad explica cómo POLCERO trata los datos personales en relación con este sitio web (polcero.com) y con las consultas realizadas a través de él, de conformidad con el Reglamento (UE) 2016/679 (RGPD).',
    sections: [
      {
        heading: '1. Responsable del tratamiento',
        body: [
          `El responsable del tratamiento de sus datos personales es ${COMPANY_ES}`,
          `Para cualquier cuestión relativa al tratamiento de datos personales puede ponerse en contacto con nosotros en: ${CONTACT_ES}`,
        ],
      },
      {
        heading: '2. Qué datos recopilamos',
        body: [
          'Formulario de contacto: el nombre, la dirección de correo electrónico, la empresa (opcional), el asunto y el contenido del mensaje que nos facilita cuando nos escribe.',
          'Datos técnicos: registros del servidor (dirección IP, tipo de navegador, fecha y hora de la solicitud) generados automáticamente cuando visita el sitio, e información almacenada en las cookies y tecnologías similares o leída de ellas (véase nuestra Política de cookies).',
          'No recopilamos deliberadamente datos de menores y no llevamos a cabo decisiones automatizadas ni elaboración de perfiles que produzcan efectos jurídicos para usted.',
        ],
      },
      {
        heading: '3. Finalidades y bases jurídicas',
        body: [
          'Responder a su consulta y adoptar medidas a petición suya con carácter previo a la celebración de un contrato - art. 6, apdo. 1, letra b) RGPD.',
          'Operar, proteger y mantener el sitio web y perseguir nuestros intereses legítimos, incluida la atención de la correspondencia comercial y la prevención de abusos - art. 6, apdo. 1, letra f) RGPD.',
          'Utilizar cookies analíticas y de marketing - únicamente sobre la base de su consentimiento, art. 6, apdo. 1, letra a) RGPD, que puede retirar en cualquier momento.',
          'Cumplir las obligaciones legales a las que estamos sujetos (p. ej., contabilidad, respuesta a las autoridades) - art. 6, apdo. 1, letra c) RGPD.',
        ],
      },
      {
        heading: '4. Cookies y analítica',
        body: [
          'Utilizamos cookies esenciales necesarias para el funcionamiento del sitio y - con su consentimiento - cookies analíticas y de marketing. Usted gestiona sus opciones a través del panel de configuración de cookies disponible en el sitio. Encontrará todos los detalles en nuestra Política de cookies.',
        ],
      },
      {
        heading: '5. Destinatarios y encargados del tratamiento',
        body: [
          'Sus datos pueden compartirse con proveedores de confianza que los tratan por cuenta nuestra en virtud de contratos de encargo del tratamiento, en particular nuestro proveedor de alojamiento y de correo electrónico y - previo su consentimiento - proveedores de analítica.',
          'No vendemos sus datos personales.',
        ],
      },
      {
        heading: '6. Conservación',
        body: [
          'Los datos de las consultas se conservan durante el tiempo necesario para tramitar el asunto y, posteriormente, durante el período requerido para el ejercicio o la defensa de reclamaciones. Los datos basados en el consentimiento se conservan hasta que usted retire el consentimiento. Los registros del servidor se conservan durante un período limitado por motivos de seguridad y diagnóstico.',
        ],
      },
      {
        heading: '7. Transferencias fuera del EEE',
        body: [
          'Cuando un proveedor trate datos fuera del Espacio Económico Europeo, garantizamos un nivel de protección adecuado mediante garantías apropiadas, tales como las Cláusulas Contractuales Tipo de la Comisión Europea.',
        ],
      },
      {
        heading: '8. Sus derechos',
        body: [
          'Tiene derecho a acceder a sus datos, a rectificarlos, suprimirlos o limitar su tratamiento, a la portabilidad de los datos y a oponerse al tratamiento basado en nuestro interés legítimo. Cuando el tratamiento se base en el consentimiento, puede retirarlo en cualquier momento sin que ello afecte a la licitud del tratamiento previo.',
          'También tiene derecho a presentar una reclamación ante el Presidente de la Oficina de Protección de Datos Personales (Prezes Urzędu Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Varsovia, Polonia.',
        ],
      },
      {
        heading: '9. Contacto',
        body: [`Para ejercer sus derechos o plantear preguntas sobre esta política, póngase en contacto con nosotros en ${CONTACT_ES}`],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Política de cookies',
    updated: '8 de agosto de 2026',
    intro:
      'Esta Política de cookies explica cómo POLCERO utiliza cookies y tecnologías similares (como el almacenamiento local del navegador) en polcero.com.',
    sections: [
      {
        heading: '1. Qué son las cookies',
        body: [
          'Las cookies son pequeños archivos de texto que su navegador almacena en su dispositivo. Las tecnologías similares, como el almacenamiento local, funcionan de forma comparable. Permiten que un sitio recuerde sus acciones y preferencias.',
        ],
      },
      {
        heading: '2. Categorías que utilizamos',
        body: [
          'Esenciales - necesarias para que el sitio funcione y para recordar sus opciones de privacidad. Están siempre activas y no requieren consentimiento. Ejemplo: la entrada de almacenamiento local que registra sus preferencias de cookies.',
          'Analíticas - nos ayudan a comprender cómo se utiliza el sitio para poder mejorarlo. Se cargan únicamente con su consentimiento.',
          'De marketing - se utilizan para medir y personalizar campañas. Se cargan únicamente con su consentimiento.',
          'No se carga ninguna tecnología analítica ni de marketing antes de que usted preste su consentimiento.',
        ],
      },
      {
        heading: '3. Gestión de su consentimiento',
        body: [
          'En su primera visita, un banner le permite aceptar todas, rechazar las opcionales o elegir por categorías. Puede cambiar su decisión en cualquier momento abriendo el panel de configuración de cookies (el enlace "Configuración de cookies" del pie de página).',
          'También puede bloquear o eliminar las cookies en la configuración de su navegador; tenga en cuenta que desactivar las cookies esenciales puede afectar al funcionamiento del sitio.',
        ],
      },
      {
        heading: '4. Cambios',
        body: [
          'Podemos actualizar esta Política de cookies a medida que cambie nuestro uso de las cookies. La fecha indicada arriba señala la última revisión.',
        ],
      },
      {
        heading: '5. Contacto',
        body: [`¿Tiene preguntas sobre las cookies? Póngase en contacto con nosotros en ${CONTACT_ES}`],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Términos del servicio',
    updated: '8 de agosto de 2026',
    intro:
      'Estos Términos regulan el uso del sitio web polcero.com. Al utilizar el sitio web, usted acepta estos Términos.',
    sections: [
      {
        heading: '1. Titular del sitio web',
        body: [`El sitio web es operado por ${COMPANY_ES}`, `Contacto: ${CONTACT_ES}`],
      },
      {
        heading: '2. Uso del sitio web',
        body: [
          'El sitio web y su contenido se facilitan con fines informativos sobre POLCERO y sus productos y servicios. Puede navegar y utilizar el sitio únicamente con fines lícitos.',
          'Usted se compromete a no interferir en el funcionamiento o la seguridad del sitio, a no intentar accesos no autorizados y a no utilizarlo de forma que vulnere los derechos de terceros o la legislación aplicable.',
        ],
      },
      {
        heading: '3. Propiedad intelectual',
        body: [
          'Todo el contenido del sitio web - textos, gráficos, logotipos, imágenes, diseño y software - es propiedad de POLCERO o de sus licenciantes y está protegido por la ley. No puede copiarlo, distribuirlo ni crear obras derivadas sin nuestro consentimiento previo por escrito, salvo en la medida permitida por la ley imperativa.',
        ],
      },
      {
        heading: '4. Consultas - no constituyen oferta comercial',
        body: [
          'La información publicada en el sitio web, incluidas las descripciones de productos y los precios orientativos ("bajo consulta"), no constituye una oferta comercial en el sentido del artículo 66 del Código Civil polaco. Es una invitación a entablar negociaciones. Un acuerdo vinculante solo surge mediante un contrato celebrado por separado.',
          'Los mensajes enviados a través del formulario de contacto son solicitudes de contacto y no generan obligación alguna para ninguna de las partes.',
        ],
      },
      {
        heading: '5. Responsabilidad',
        body: [
          'Procuramos mantener la información del sitio web exacta y actualizada, pero no garantizamos que sea completa, actual ni esté libre de errores. En la medida permitida por la ley, POLCERO no se hace responsable de las decisiones adoptadas únicamente sobre la base del contenido del sitio web.',
        ],
      },
      {
        heading: '6. Enlaces externos',
        body: [
          'El sitio web puede contener enlaces a sitios de terceros. No somos responsables del contenido ni de las prácticas de privacidad de dichos sitios.',
        ],
      },
      {
        heading: '7. Datos personales',
        body: [
          'Los datos personales se tratan de conformidad con nuestra Política de privacidad y nuestra Política de cookies.',
        ],
      },
      {
        heading: '8. Reclamaciones',
        body: [
          `Puede presentar reclamaciones relativas al funcionamiento del sitio web por correo electrónico a biuro@polcero.com. Le rogamos que describa el problema y facilite sus datos de contacto. Examinaremos la reclamación y responderemos sin demora indebida, en un plazo máximo de 30 días desde su recepción.`,
        ],
      },
      {
        heading: '9. Legislación aplicable y controversias',
        body: [
          'Estos Términos se rigen por la legislación polaca. Cualquier controversia se resolverá ante el tribunal polaco competente por razón del domicilio de POLCERO, salvo que las normas imperativas de protección de los consumidores dispongan otra cosa.',
        ],
      },
      {
        heading: '10. Modificaciones de estos Términos',
        body: [
          'Podemos modificar estos Términos. La versión publicada en el sitio web con la fecha indicada arriba se aplica a su uso actual.',
        ],
      },
    ],
  },
};
