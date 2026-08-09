import type { LegalDoc } from '../../legal';

const COMPANY_DE =
  'POLCERO sp. z o.o. mit Sitz in Kietrz, Polen, eingetragen im Unternehmerregister des Landesgerichtsregisters (KRS) unter der Nummer 0001178417, NIP 8971955510, REGON 542000919 ("POLCERO", "wir").';
const CONTACT_DE = 'E-Mail: biuro@polcero.com, Tel. +48 535 777 268.';

export const de: Record<'privacy' | 'cookies' | 'terms', LegalDoc> = {
  privacy: {
    slug: 'privacy',
    title: 'Datenschutzerklärung',
    updated: '8. August 2026',
    intro:
      'Diese Datenschutzerklärung erläutert, wie POLCERO personenbezogene Daten im Zusammenhang mit dieser Website (polcero.com) und den darüber gestellten Anfragen gemäß der Verordnung (EU) 2016/679 (DSGVO) verarbeitet.',
    sections: [
      {
        heading: '1. Verantwortlicher',
        body: [
          `Verantwortlicher für Ihre personenbezogenen Daten ist ${COMPANY_DE}`,
          `In allen Angelegenheiten, die die Verarbeitung personenbezogener Daten betreffen, können Sie uns kontaktieren unter: ${CONTACT_DE}`,
        ],
      },
      {
        heading: '2. Welche Daten wir erheben',
        body: [
          'Kontaktformular: Name, E-Mail-Adresse, Unternehmen (optional), Betreff und Nachrichteninhalt, die Sie angeben, wenn Sie uns schreiben.',
          'Technische Daten: Serverprotokolle (IP-Adresse, Browsertyp, Datum und Uhrzeit der Anfrage), die beim Besuch der Website automatisch erzeugt werden, sowie Informationen, die in Cookies und ähnlichen Technologien gespeichert oder aus ihnen ausgelesen werden (siehe unsere Cookie-Richtlinie).',
          'Wir erheben wissentlich keine Daten von Kindern und führen keine automatisierte Entscheidungsfindung oder Profilbildung durch, die Ihnen gegenüber rechtliche Wirkung entfaltet.',
        ],
      },
      {
        heading: '3. Zwecke und Rechtsgrundlagen',
        body: [
          'Um Ihre Anfrage zu beantworten und auf Ihr Verlangen vorvertragliche Maßnahmen zu ergreifen - Art. 6 Abs. 1 lit. b DSGVO.',
          'Um die Website zu betreiben, abzusichern und zu unterhalten sowie zur Wahrung unserer berechtigten Interessen, einschließlich der Beantwortung geschäftlicher Korrespondenz und der Verhinderung von Missbrauch - Art. 6 Abs. 1 lit. f DSGVO.',
          'Um Analyse- und Marketing-Cookies einzusetzen - ausschließlich auf Grundlage Ihrer Einwilligung, Art. 6 Abs. 1 lit. a DSGVO, die Sie jederzeit widerrufen können.',
          'Um rechtlichen Verpflichtungen nachzukommen, denen wir unterliegen (z. B. Buchführung, Auskünfte gegenüber Behörden) - Art. 6 Abs. 1 lit. c DSGVO.',
        ],
      },
      {
        heading: '4. Cookies und Analyse',
        body: [
          'Wir verwenden essenzielle Cookies, die für das Funktionieren der Website erforderlich sind, und - mit Ihrer Einwilligung - Analyse- und Marketing-Cookies. Ihre Auswahl verwalten Sie über das auf der Website verfügbare Cookie-Einstellungsfeld. Alle Einzelheiten finden Sie in unserer Cookie-Richtlinie.',
        ],
      },
      {
        heading: '5. Empfänger und Auftragsverarbeiter',
        body: [
          'Ihre Daten können an vertrauenswürdige Dienstleister weitergegeben werden, die sie in unserem Auftrag auf Grundlage von Auftragsverarbeitungsverträgen verarbeiten, insbesondere unser Hosting- und E-Mail-Anbieter sowie - vorbehaltlich Ihrer Einwilligung - Analyseanbieter.',
          'Wir verkaufen Ihre personenbezogenen Daten nicht.',
        ],
      },
      {
        heading: '6. Speicherdauer',
        body: [
          'Anfragedaten werden so lange aufbewahrt, wie es für die Bearbeitung des Anliegens erforderlich ist, und anschließend für den Zeitraum, der zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist. Auf Einwilligung beruhende Daten werden bis zum Widerruf der Einwilligung aufbewahrt. Serverprotokolle werden für einen begrenzten Zeitraum zu Sicherheits- und Diagnosezwecken aufbewahrt.',
        ],
      },
      {
        heading: '7. Übermittlungen außerhalb des EWR',
        body: [
          'Sofern ein Dienstleister Daten außerhalb des Europäischen Wirtschaftsraums verarbeitet, gewährleisten wir ein angemessenes Schutzniveau durch geeignete Garantien, wie etwa die Standardvertragsklauseln der Europäischen Kommission.',
        ],
      },
      {
        heading: '8. Ihre Rechte',
        body: [
          'Sie haben das Recht auf Auskunft über Ihre Daten, auf Berichtigung, Löschung oder Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie das Recht, der auf unserem berechtigten Interesse beruhenden Verarbeitung zu widersprechen. Beruht die Verarbeitung auf einer Einwilligung, können Sie diese jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird.',
          'Sie haben außerdem das Recht, eine Beschwerde beim Präsidenten des Amtes für den Schutz personenbezogener Daten (Prezes Urzędu Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Warszawa, Polen, einzureichen.',
        ],
      },
      {
        heading: '9. Kontakt',
        body: [`Um Ihre Rechte auszuüben oder Fragen zu dieser Erklärung zu stellen, kontaktieren Sie uns unter ${CONTACT_DE}`],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Cookie-Richtlinie',
    updated: '8. August 2026',
    intro:
      'Diese Cookie-Richtlinie erläutert, wie POLCERO Cookies und ähnliche Technologien (wie den lokalen Speicher des Browsers) auf polcero.com verwendet.',
    sections: [
      {
        heading: '1. Was sind Cookies',
        body: [
          'Cookies sind kleine Textdateien, die von Ihrem Browser auf Ihrem Gerät gespeichert werden. Ähnliche Technologien wie der lokale Speicher funktionieren auf vergleichbare Weise. Sie ermöglichen es einer Website, sich Ihre Aktionen und Präferenzen zu merken.',
        ],
      },
      {
        heading: '2. Von uns verwendete Kategorien',
        body: [
          'Essenziell - erforderlich, damit die Website funktioniert und Ihre Datenschutzeinstellungen gespeichert werden. Diese sind stets aktiv und bedürfen keiner Einwilligung. Beispiel: der Eintrag im lokalen Speicher, der Ihre Cookie-Präferenzen festhält.',
          'Analyse - helfen uns zu verstehen, wie die Website genutzt wird, damit wir sie verbessern können. Werden nur mit Ihrer Einwilligung geladen.',
          'Marketing - dienen der Messung und Personalisierung von Kampagnen. Werden nur mit Ihrer Einwilligung geladen.',
          'Vor Erteilung Ihrer Einwilligung werden keine Analyse- oder Marketingtechnologien geladen.',
        ],
      },
      {
        heading: '3. Verwaltung Ihrer Einwilligung',
        body: [
          'Bei Ihrem ersten Besuch können Sie über ein Banner alle akzeptieren, optionale ablehnen oder Kategorien auswählen. Sie können Ihre Entscheidung jederzeit ändern, indem Sie das Cookie-Einstellungsfeld öffnen (den Link "Cookie-Einstellungen" in der Fußzeile).',
          'Sie können Cookies auch in Ihren Browsereinstellungen blockieren oder löschen; beachten Sie, dass das Deaktivieren essenzieller Cookies die Funktionsweise der Website beeinträchtigen kann.',
        ],
      },
      {
        heading: '4. Änderungen',
        body: [
          'Wir können diese Cookie-Richtlinie aktualisieren, wenn sich unsere Verwendung von Cookies ändert. Das oben angegebene Datum weist auf die letzte Überarbeitung hin.',
        ],
      },
      {
        heading: '5. Kontakt',
        body: [`Fragen zu Cookies? Kontaktieren Sie uns unter ${CONTACT_DE}`],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Nutzungsbedingungen',
    updated: '8. August 2026',
    intro:
      'Diese Nutzungsbedingungen regeln die Nutzung der Website polcero.com. Durch die Nutzung der Website akzeptieren Sie diese Nutzungsbedingungen.',
    sections: [
      {
        heading: '1. Betreiber der Website',
        body: [`Die Website wird betrieben von ${COMPANY_DE}`, `Kontakt: ${CONTACT_DE}`],
      },
      {
        heading: '2. Nutzung der Website',
        body: [
          'Die Website und ihre Inhalte werden zu Informationszwecken über POLCERO sowie seine Produkte und Dienstleistungen bereitgestellt. Sie dürfen die Website ausschließlich zu rechtmäßigen Zwecken durchsuchen und nutzen.',
          'Sie verpflichten sich, den Betrieb oder die Sicherheit der Website nicht zu beeinträchtigen, keine unbefugten Zugriffe zu versuchen und die Website nicht in einer Weise zu nutzen, die die Rechte Dritter oder geltendes Recht verletzt.',
        ],
      },
      {
        heading: '3. Geistiges Eigentum',
        body: [
          'Alle Inhalte der Website - Texte, Grafiken, Logos, Bilder, Layout und Software - sind Eigentum von POLCERO oder seinen Lizenzgebern und gesetzlich geschützt. Sie dürfen sie ohne unsere vorherige schriftliche Zustimmung nicht kopieren, verbreiten oder Bearbeitungen davon erstellen, es sei denn, dies ist nach zwingendem Recht zulässig.',
        ],
      },
      {
        heading: '4. Anfragen - kein verbindliches Angebot',
        body: [
          'Auf der Website veröffentlichte Informationen, einschließlich Produktbeschreibungen und Richtpreisen ("auf Anfrage"), stellen kein Angebot im Sinne von Artikel 66 des polnischen Zivilgesetzbuchs (Civil Code Art. 66) dar. Sie sind eine Aufforderung zur Aufnahme von Verhandlungen. Eine verbindliche Vereinbarung kommt nur durch einen gesondert geschlossenen Vertrag zustande.',
          'Über das Kontaktformular gesendete Nachrichten sind Kontaktanfragen und begründen für keine Seite eine Verpflichtung.',
        ],
      },
      {
        heading: '5. Haftung',
        body: [
          'Wir bemühen uns, die Informationen auf der Website zutreffend und aktuell zu halten, gewährleisten jedoch nicht, dass sie vollständig, aktuell oder fehlerfrei sind. Soweit gesetzlich zulässig, haftet POLCERO nicht für Entscheidungen, die allein auf Grundlage der Website-Inhalte getroffen werden.',
        ],
      },
      {
        heading: '6. Externe Links',
        body: [
          'Die Website kann Links zu Websites Dritter enthalten. Für die Inhalte oder die Datenschutzpraktiken dieser Websites sind wir nicht verantwortlich.',
        ],
      },
      {
        heading: '7. Personenbezogene Daten',
        body: [
          'Personenbezogene Daten werden gemäß unserer Datenschutzerklärung und unserer Cookie-Richtlinie verarbeitet.',
        ],
      },
      {
        heading: '8. Beschwerden',
        body: [
          'Beschwerden bezüglich des Betriebs der Website können Sie per E-Mail an biuro@polcero.com richten. Bitte beschreiben Sie das Problem und geben Sie Ihre Kontaktdaten an. Wir werden die Beschwerde prüfen und ohne unangemessene Verzögerung, spätestens innerhalb von 30 Tagen nach Eingang, antworten.',
        ],
      },
      {
        heading: '9. Anwendbares Recht und Streitigkeiten',
        body: [
          'Diese Nutzungsbedingungen unterliegen polnischem Recht. Etwaige Streitigkeiten werden von dem für den Sitz von POLCERO zuständigen polnischen Gericht entschieden, sofern nicht zwingende verbraucherschutzrechtliche Vorschriften etwas anderes vorsehen.',
        ],
      },
      {
        heading: '10. Änderungen dieser Nutzungsbedingungen',
        body: [
          'Wir können diese Nutzungsbedingungen ändern. Für Ihre aktuelle Nutzung gilt die auf der Website veröffentlichte Fassung mit dem oben angegebenen Datum.',
        ],
      },
    ],
  },
};
