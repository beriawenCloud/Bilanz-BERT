// ============================================================
// buchungsanweisungen.js
// Buchungssätze II.–IV. Jahrgang (HAK)
// Quelle: Hölzel Verlag GmbH – Sammelmappe UR HAK V 2023
// ============================================================

const BUCHUNGSANWEISUNGEN = {

  // ==========================================================
  // II. JAHRGANG
  // ==========================================================

  "II_Kap1_LE1_Einkauf_Verkauf": {
    titel: "Kap. 1 – LE 1: Einkauf und Verkauf von Waren verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Wareneinkauf",
        soll: ["5000 HW-Einsatz", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Warenverkauf",
        soll: ["20.. Kundenkonto (2700 Kassa etc.)"],
        haben: ["4000 HW-Erlöse", "3500 Umsatzsteuer"]
      },
      {
        bezeichnung: "Warenrücksendung (Einkauf)",
        soll: ["33.. Lieferantenkonto"],
        haben: ["5000 HW-Einsatz", "2500 Vorsteuer"]
      },
      {
        bezeichnung: "Warenrücksendung (Verkauf)",
        soll: ["4000 HW-Erlöse", "3500 Umsatzsteuer"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Privatentnahme von Waren",
        soll: ["9600 Privat"],
        haben: ["4900 Eigenverbrauch", "3500 Umsatzsteuer"]
      }
    ]
  },

  "II_Kap1_LE2_Anlagenkauf": {
    titel: "Kap. 1 – LE 2: Anlagenkauf verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Kauf eines Computers",
        soll: ["0620 Büromaschinen, EDV-Anlagen", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Kauf eines Pkw / Kombis / Motorrades",
        soll: ["0630 Pkw und Kombis"],
        haben: ["33.. Lieferantenkonto"],
        hinweis: "Kein Vorsteuerabzug bei Pkw/Kombi!"
      },
      {
        bezeichnung: "Kauf eines Elektrofahrzeuges",
        soll: ["0630 Pkw und Kombis", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto"]
      },
      {
        bezeichnung: "Kauf eines GWG – sofort abschreiben",
        soll: ["7060 Abschreibungen geringwertiger Wirtschaftsgüter", "2500 Vorsteuer"],
        haben: ["2700 Kassa (33.. Lieferantenkonto etc.)"]
      },
      {
        bezeichnung: "Kauf eines GWG – am Jahresende abschreiben (Buchung beim Kauf)",
        soll: ["0.. Geringwertige...", "2500 Vorsteuer"],
        haben: ["2700 Kassa (33.. Lieferantenkonto etc.)"]
      },
      {
        bezeichnung: "Kauf eines GWG – am Jahresende abschreiben (Buchung Jahresende)",
        soll: ["7060 Abschreibungen geringwertiger Wirtschaftsgüter"],
        haben: ["0.. Geringwertige..."]
      }
    ]
  },

  "II_Kap1_LE3_Bezugskosten": {
    titel: "Kap. 1 – LE 3: Bezugs- und Versandkosten verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Bezugskosten beim Einkauf von Handelswaren",
        soll: ["5000 HW-Einsatz", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Versandkosten – Frachtkosten",
        soll: ["7300 Ausgangsfrachten 20%", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Versandkosten – Paketgebühren über 10 kg / EMS",
        soll: ["7310 Paketgebühren 20%", "2500 Vorsteuer"],
        haben: ["2700 Kassa"]
      },
      {
        bezeichnung: "Versandkosten – Paketgebühren bis 10 kg",
        soll: ["7311 Paketgebühren 0%"],
        haben: ["2700 Kassa"]
      }
    ]
  },

  "II_Kap1_LE4_Rabatte": {
    titel: "Kap. 1 – LE 4: Rabatte verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Nachträglicher Rabatt vom Lieferanten",
        soll: ["33.. Lieferantenkonto"],
        haben: ["5000 HW-Einsatz", "2500 Vorsteuer"]
      },
      {
        bezeichnung: "Nachträglicher Rabatt an Kunden",
        soll: ["4400 Erlösberichtigungen", "3500 Umsatzsteuer"],
        haben: ["20.. Kundenkonto"]
      }
    ]
  },

  "II_Kap1_LE5_Rechnungsausgleich": {
    titel: "Kap. 1 – LE 5: Rechnungsausgleich verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Zahlung Lieferverbindlichkeit",
        soll: ["33.. Lieferantenkonto"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Eingang Lieferforderung",
        soll: ["2800 Bank"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Mahnspesen (Einkauf)",
        soll: ["8321 Mahnspesen"],
        haben: ["33.. Lieferantenkonto"]
      },
      {
        bezeichnung: "Mahnspesen (Verkauf)",
        soll: ["20.. Kundenkonto"],
        haben: ["4890 Mahnspesenentschädigungen"]
      },
      {
        bezeichnung: "Verzugszinsen (Einkauf)",
        soll: ["8320 Verzugszinsenaufwand"],
        haben: ["33.. Lieferantenkonto"]
      },
      {
        bezeichnung: "Verzugszinsen (Verkauf)",
        soll: ["20.. Kundenkonto"],
        haben: ["8055 Verzugszinsenerträge"]
      },
      {
        bezeichnung: "Einkauf mit Kredit-/Debitkarte",
        soll: [".... Bestands-/Aufwandskonto", "2500 Vorsteuer"],
        haben: ["3180 (3190) Verbindlichkeiten..."]
      },
      {
        bezeichnung: "Ausgleich Kredit-/Debitkartenverbindlichkeit",
        soll: ["3180 (3190) Verbindlichkeiten..."],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Verkauf mit Kredit-/Debitkarte",
        soll: ["2880 (2885) Forderungen..."],
        haben: ["4000 HW-Erlöse", "3500 Umsatzsteuer"]
      },
      {
        bezeichnung: "Ausgleich Kreditkartenforderung",
        soll: ["2800 Bank", "7792 Provisionen/Gebühren Kredit-/Debitkarten", "2500 Vorsteuer"],
        haben: ["2880 Forderungen Kreditkartenunternehmen"]
      },
      {
        bezeichnung: "Ausgleich Debitkartenforderung",
        soll: ["2800 Bank"],
        haben: ["2885 Forderungen Debitkarten"],
        hinweis: "Gebuchung der Provision: 7792 / 2800 Bank + 2500 Vorsteuer"
      },
      {
        bezeichnung: "Lieferantenskonto",
        soll: ["33.. Lieferantenkonto"],
        haben: ["5880 Lieferantenskonti 20%", "2500 Vorsteuer"],
        hinweis: "Zusätzlich Restbetrag: 33.. / 2800 Bank"
      },
      {
        bezeichnung: "Kundenskonto",
        soll: ["4410 Kundenskonti 20%", "3500 Umsatzsteuer"],
        haben: ["20.. Kundenkonto"],
        hinweis: "Zusätzlich Restbetrag: 2800 Bank / 20.."
      }
    ]
  },

  "II_Kap2_LE1_Bankbewegungen": {
    titel: "Kap. 2 – LE 1: Besondere Bankbewegungen verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Abhebung Bankkonto → Kassa (Schritt 1)",
        soll: ["2700 Kassa"],
        haben: ["2870 Barverkehr mit Banken"]
      },
      {
        bezeichnung: "Abhebung Bankkonto → Kassa (Schritt 2, laut Kontoauszug)",
        soll: ["2870 Barverkehr mit Banken"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Einzahlung Kassa → Bank (Schritt 1)",
        soll: ["2870 Barverkehr mit Banken"],
        haben: ["2700 Kassa"]
      },
      {
        bezeichnung: "Einzahlung Kassa → Bank (Schritt 2, laut Kontoauszug)",
        soll: ["2800 Bank"],
        haben: ["2870 Barverkehr mit Banken"]
      },
      {
        bezeichnung: "Guthabenzinsen (Habenzinsen)",
        soll: ["2800 Bank"],
        haben: ["8050 Zinsenerträge aus Bankguthaben"]
      },
      {
        bezeichnung: "Schuldzinsen (Sollzinsen)",
        soll: ["8310 Zinsenaufwand für Bankkredite"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Kapitalertragsteuer (KESt)",
        soll: ["9600 Privat"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Bankprovisionen, Spesen",
        soll: ["7790 Spesen des Geldverkehrs"],
        haben: ["2800 Bank"]
      }
    ]
  },

  "II_Kap2_LE2_Steuern": {
    titel: "Kap. 2 – LE 2: Steuern und Kammerumlage verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Grundsteuer (Betriebssteuer)",
        soll: ["7100 Grundsteuer"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Privatsteuern",
        soll: ["9600 Privat (9610 Privatsteuern)"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "USt-Zahllast",
        soll: ["3520 USt-Zahllast"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Lohnsteuer",
        soll: ["3540 Verbindlichkeiten Finanzamt"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Grunderwerbsteuer",
        soll: ["0200 Unbebaute Grundstücke"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Normverbrauchsabgabe (NoVA)",
        soll: ["0630 Pkw und Kombis"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Kammerumlage (1.–3. Quartal)",
        soll: ["7780 Kammerumlage"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Kammerumlage (4. Quartal)",
        soll: ["7780 Kammerumlage"],
        haben: ["3540 Verbindlichkeiten Finanzamt"]
      },
      {
        bezeichnung: "Zahlung Kammerumlage 4. Quartal (bis 15. Feb.)",
        soll: ["3540 Verbindlichkeiten Finanzamt"],
        haben: ["2800 Bank"]
      }
    ]
  },

  "II_Kap2_LE3_Kfz": {
    titel: "Kap. 2 – LE 3: Kfz-Betriebskosten verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Betriebskosten Lkw/Kastenwagen/Pritschenwagen/Kleinbus",
        soll: ["7330 Lkw-Betriebsaufwand", "2500 Vorsteuer"],
        haben: ["2700 Kassa (33.. Lieferantenkonto etc.)"]
      },
      {
        bezeichnung: "Anmeldegebühren Lkw",
        soll: ["0640 Lkw"],
        haben: ["2700 Kassa (3190 Verbindlichkeiten Debitkarten etc.)"]
      },
      {
        bezeichnung: "Betriebskosten Pkw/Kombi/Motorrad",
        soll: ["7320 Pkw- und Kombi-Betriebsaufwand"],
        haben: ["2700 Kassa (33.. Lieferantenkonto etc.)"],
        hinweis: "Kein Vorsteuerabzug bei Pkw/Kombi!"
      },
      {
        bezeichnung: "Betriebskosten Elektrofahrzeug",
        soll: ["7320 Pkw- und Kombi-Betriebsaufwand", "2500 Vorsteuer"],
        haben: ["2700 Kassa (33.. Lieferantenkonto etc.)"]
      },
      {
        bezeichnung: "Anmeldegebühren Pkw/Kombi",
        soll: ["0630 Pkw und Kombis"],
        haben: ["2700 Kassa (3190 Verbindlichkeiten Debitkarten etc.)"]
      }
    ]
  },

  "II_Kap2_LE4_SonstigesMaterial": {
    titel: "Kap. 2 – LE 4: Sonstiges Material verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Einkauf Heizöl",
        soll: ["7240 Heizölverbrauch", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Vorratskonto anpassen – Bestandsvermehrung Heizöl",
        soll: ["1360 Vorrat Heizöl"],
        haben: ["7240 Heizölverbrauch"]
      },
      {
        bezeichnung: "Vorratskonto anpassen – Bestandsverminderung Heizöl",
        soll: ["7240 Heizölverbrauch"],
        haben: ["1360 Vorrat Heizöl"]
      }
    ]
  },

  "II_Kap2_LE5_Erzeugungsbetrieb": {
    titel: "Kap. 2 – LE 5: Laufende Geschäftsfälle im Erzeugungsbetrieb",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Einkauf Rohstoffe (z.B. Holz für Möbelproduktion)",
        soll: ["5100 Rohstoffverbrauch (-einsatz)", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Einkauf Hilfsstoffe (z.B. Schrauben)",
        soll: ["5300 Hilfsstoffverbrauch", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Einkauf Betriebsstoffe (z.B. Leim, Schleifpapier)",
        soll: ["5400 Betriebsstoffverbrauch", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Verkauf Fertigerzeugnisse",
        soll: ["20.. Kundenkonto (2700 Kassa etc.)"],
        haben: ["4100 Fertigerzeugniserlöse", "3500 Umsatzsteuer"]
      }
    ]
  },

  "II_Kap3_LE1_Anzahlungen": {
    titel: "Kap. 3 – LE 1: Anzahlungen verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Anzahlung an Lieferanten – Zahlung",
        soll: ["33.. Lieferantenkonto"],
        haben: ["2800 Bank (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Anzahlung an Lieferanten – Erfassung inkl. VSt",
        soll: ["1800 Geleistete Anzahlungen auf Vorräte", "2500 Vorsteuer"],
        haben: ["3350 Verrechnungskonto geleistete Anzahlungen"]
      },
      {
        bezeichnung: "Anzahlung an Lieferanten – Eingangsrechnung Gesamtbetrag",
        soll: ["5000 HW-Einsatz", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto"]
      },
      {
        bezeichnung: "Anzahlung an Lieferanten – Ausbuchung der Anzahlung",
        soll: ["3350 Verrechnungskonto geleistete Anzahlungen"],
        haben: ["1800 Geleistete Anzahlungen auf Vorräte", "2500 Vorsteuer"]
      },
      {
        bezeichnung: "Anzahlung an Lieferanten – Restzahlung",
        soll: ["33.. Lieferantenkonto"],
        haben: ["2800 Bank (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Anzahlung von Kunden – Eingang",
        soll: ["2800 Bank (2700 Kassa etc.)"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Anzahlung von Kunden – Erfassung inkl. USt",
        soll: ["2070 Verrechnungskonto erhaltene Anzahlungen"],
        haben: ["3200 Erhaltene Anzahlungen", "3500 Umsatzsteuer"]
      },
      {
        bezeichnung: "Anzahlung von Kunden – Ausgangsrechnung Gesamtbetrag",
        soll: ["20.. Kundenkonto"],
        haben: ["4000 HW-Erlöse", "3500 Umsatzsteuer"]
      },
      {
        bezeichnung: "Anzahlung von Kunden – Ausbuchung der Anzahlung",
        soll: ["3200 Erhaltene Anzahlungen", "3500 Umsatzsteuer"],
        haben: ["2070 Verrechnungskonto erhaltene Anzahlungen"]
      },
      {
        bezeichnung: "Anzahlung von Kunden – Restzahlung",
        soll: ["2800 Bank (2700 Kassa etc.)"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Verkauf Kaufgutschein",
        soll: ["2700 Kassa (2885 Forderungen Debitkarten etc.)"],
        haben: ["3203 Erhaltene Anzahlungen 0%"]
      },
      {
        bezeichnung: "Einlösung Gutschein (Betrag = Rechnungsbetrag)",
        soll: ["3203 Erhaltene Anzahlungen 0%"],
        haben: ["4000 HW-Erlöse", "3500 Umsatzsteuer"]
      },
      {
        bezeichnung: "Einlösung Gutschein (Betrag > Rechnungsbetrag, Differenz bar)",
        soll: ["3203 Erhaltene Anzahlungen 0%"],
        haben: ["4000 HW-Erlöse", "3500 Umsatzsteuer", "2700 Kassa (Differenz)"]
      },
      {
        bezeichnung: "Einlösung Gutschein (Betrag < Rechnungsbetrag)",
        soll: ["3203 Erhaltene Anzahlungen 0%", "2700 Kassa (2885 Forderungen Debitkarten etc.)"],
        haben: ["4000 HW-Erlöse", "3500 Umsatzsteuer"]
      }
    ]
  },

  "II_Kap3_LE2_Emballagen": {
    titel: "Kap. 3 – LE 2: Emballagen verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Wareneinkauf mit Emballagen (Käufer)",
        soll: ["5000 HW-Einsatz", "5080 Emballagen-Einsatz", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Rückgabe Emballagen (Käufer)",
        soll: ["33.. Lieferantenkonto (2700 Kassa etc.)"],
        haben: ["5080 Emballagen-Einsatz", "2500 Vorsteuer"]
      },
      {
        bezeichnung: "Abschreibung unbrauchbare Emballagen",
        soll: ["7800 Abschreibungen von Vorräten"],
        haben: ["5080 Emballagen-Einsatz"]
      },
      {
        bezeichnung: "Emballagen-Vorrat Bestandsvermehrung",
        soll: ["1680 Emballagen-Vorrat"],
        haben: ["5080 Emballagen-Einsatz"]
      },
      {
        bezeichnung: "Emballagen-Vorrat Bestandsverminderung",
        soll: ["5080 Emballagen-Einsatz"],
        haben: ["1680 Emballagen-Vorrat"]
      },
      {
        bezeichnung: "Warenverkauf mit Emballagen (Verkäufer)",
        soll: ["20.. Kundenkonto (2700 Kassa etc.)"],
        haben: ["4000 HW-Erlöse", "4180 Emballagen-Erlöse", "3500 Umsatzsteuer"]
      },
      {
        bezeichnung: "Rücknahme Emballagen (Verkäufer)",
        soll: ["4180 Emballagen-Erlöse", "3500 Umsatzsteuer"],
        haben: ["20.. Kundenkonto (2700 Kassa etc.)"]
      }
    ]
  },

  "II_Kap3_LE3_Wertpapiere": {
    titel: "Kap. 3 – LE 3: Wertpapiere verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Kauf festverzinsliche Wertpapiere (Anlagevermögen)",
        soll: ["0930 Festverzinsliche Wertpapiere des Anlagevermögens", "7791 Sonstige Bankspesen"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Verkauf festverzinsliche Wertpapiere (Anlagevermögen)",
        soll: ["2800 Bank", "7791 Sonstige Bankspesen", "9600 Privat"],
        haben: ["8080 Erlöse aus dem Abgang von sonstigen Finanzanlagen", "8031 Endbesteuerte Zinsenerträge für WP des Anlagevermögens"]
      },
      {
        bezeichnung: "Kauf Aktien (Umlaufvermögen)",
        soll: ["2620 Aktien des Umlaufvermögens", "7791 Sonstige Bankspesen"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Verkauf Aktien (Umlaufvermögen)",
        soll: ["2800 Bank", "7791 Sonstige Bankspesen", "9600 Privat"],
        haben: ["8090 Erlöse aus dem Abgang von Wertpapieren des Umlaufvermögens"]
      }
    ]
  },

  "II_Kap3_LE4_Leasing": {
    titel: "Kap. 3 – LE 4: Leasinggeschäfte verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Monatliche Leasingrate Lkw (Leasingnehmer)",
        soll: ["7440 (7460) Leasingaufwand (Lkw)", "2500 Vorsteuer"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Monatliche Leasingrate Pkw (Leasingnehmer)",
        soll: ["7450 Leasingaufwand Pkw und Kombis"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Kauf Anlage (Aktivierung Restwert)",
        soll: ["0.. Anlagenkonto", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto"]
      },
      {
        bezeichnung: "Kauf Pkw (Aktivierung Restwert)",
        soll: ["0630 Pkw und Kombis"],
        haben: ["33.. Lieferantenkonto"]
      },
      {
        bezeichnung: "Belastung Leasingnehmer (Leasinggeber)",
        soll: ["20.. Kundenkonto (2360 Forderungen aus Leasinggeschäften)"],
        haben: ["4000 Erträge aus Leasinggeschäften", "3500 Umsatzsteuer"]
      },
      {
        bezeichnung: "Eingang Leasingrate (Leasinggeber)",
        soll: ["2800 Bank"],
        haben: ["20.. Kundenkonto (2360 Forderungen aus Leasinggeschäften)"]
      }
    ]
  },

  "II_Kap4_LE2_igLieferungen_Exporte": {
    titel: "Kap. 4 – LE 2: Innergemeinschaftliche Lieferungen und Exporte",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Ausgangsrechnung ig. Lieferung",
        soll: ["20.. Kundenkonto"],
        haben: ["4010 Erlöse aus ig. Lieferungen"]
      },
      {
        bezeichnung: "Rechnungsausgleich ig. Lieferung",
        soll: ["2800 Bank"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Kundenskonto ig. Lieferung",
        soll: ["4415 Kundenskonti aus ig. Lieferungen"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Ausgangsrechnung Export",
        soll: ["20.. Kundenkonto"],
        haben: ["4015 Exporterlöse"]
      },
      {
        bezeichnung: "Versandkosten Export",
        soll: ["7301 Ausgangsfrachten 0%"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Rechnungsausgleich Export",
        soll: ["2800 Bank", "7790 Spesen des Geldverkehrs"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Kundenskonto Export",
        soll: ["4416 Kundenskonti Export"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Kursdifferenz Kursgewinn (Forderungen)",
        soll: ["20.. Kundenkonto"],
        haben: ["4840 Fremdwährungskursgewinne"]
      },
      {
        bezeichnung: "Kursdifferenz Kursverlust (Forderungen)",
        soll: ["7815 Fremdwährungskursverluste"],
        haben: ["20.. Kundenkonto"]
      }
    ]
  },

  "II_Kap4_LE3_igErwerbe_Importe": {
    titel: "Kap. 4 – LE 3: Innergemeinschaftliche Erwerbe und Importe",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Eingangsrechnung ig. Erwerb",
        soll: ["5000 HW-Einsatz", "2510 Vorsteuer aus ig. Erwerben"],
        haben: ["33.. Lieferantenkonto", "3510 Erwerbsteuer (USt aus ig. Erwerben)"]
      },
      {
        bezeichnung: "Bezugskosten ig. Erwerb",
        soll: ["5000 HW-Einsatz", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Rechnungsausgleich ig. Erwerb",
        soll: ["33.. Lieferantenkonto"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Lieferantenskonto ig. Erwerb",
        soll: ["33.. Lieferantenkonto"],
        haben: ["5885 Lieferantenskonti aus ig. Erwerben"]
      },
      {
        bezeichnung: "Skontobuchung Vorsteuer ig. Erwerb",
        soll: ["3510 Erwerbsteuer"],
        haben: ["2510 Vorsteuer aus ig. Erwerben"]
      },
      {
        bezeichnung: "Eingangsrechnung Import",
        soll: ["5000 HW-Einsatz"],
        haben: ["33.. Lieferantenkonto"]
      },
      {
        bezeichnung: "Rechnungsausgleich Import",
        soll: ["33.. Lieferantenkonto", "7790 Spesen des Geldverkehrs"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Lieferantenskonto Import",
        soll: ["33.. Lieferantenkonto"],
        haben: ["5886 Lieferantenskonti Import"]
      },
      {
        bezeichnung: "Kursdifferenz Kursgewinn (Verbindlichkeiten)",
        soll: ["33.. Lieferantenkonto"],
        haben: ["4840 Fremdwährungskursgewinne"]
      },
      {
        bezeichnung: "Kursdifferenz Kursverlust (Verbindlichkeiten)",
        soll: ["7815 Fremdwährungskursverluste"],
        haben: ["33.. Lieferantenkonto"]
      }
    ]
  },

  "II_Kap5_LE1_Personalverrechnung": {
    titel: "Kap. 5 – LE 1: Lohn- und Gehaltszahlungen verbuchen",
    jahrgang: 2,
    buchungen: [
      {
        bezeichnung: "Pflichtversicherung des Unternehmers (SVS)",
        soll: ["7740 Versicherungsbeiträge an die SVS"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Abrechnung Löhne/Gehälter",
        soll: ["6200 Gehälter (6000 Löhne)"],
        haben: ["3600 Verbindlichkeiten Gesundheitskasse", "3540 Verbindlichkeiten Finanzamt", "3850 Verbindlichkeiten gegen Mitarbeiter aus der Bezugsverrechnung"]
      },
      {
        bezeichnung: "Überweisung Auszahlungsbeträge",
        soll: ["3850 Verbindlichkeiten gegen Mitarbeiter aus der Bezugsverrechnung"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Dienstgeberanteil Sozialversicherung",
        soll: ["6560 Gesetzlicher Sozialaufwand Angestellte"],
        haben: ["3600 Verbindlichkeiten Gesundheitskasse"]
      },
      {
        bezeichnung: "Betriebliche Vorsorge (BV-Kasse)",
        soll: ["6441 Aufwand für Betriebliche Vorsorgekassen Angestellte"],
        haben: ["3600 Verbindlichkeiten Gesundheitskasse"]
      },
      {
        bezeichnung: "Dienstgeberbeitrag (DB)",
        soll: ["6660 Dienstgeberbeitrag Angestellte"],
        haben: ["3540 Verbindlichkeiten Finanzamt"]
      },
      {
        bezeichnung: "Zuschlag zum Dienstgeberbeitrag (DZ)",
        soll: ["6670 Zuschlag zum DB Angestellte"],
        haben: ["3540 Verbindlichkeiten Finanzamt"]
      },
      {
        bezeichnung: "Kommunalsteuer",
        soll: ["6680 Kommunalsteuer Angestellte"],
        haben: ["3610 Verbindlichkeiten Gemeinde (Stadt)"]
      },
      {
        bezeichnung: "Wiener Dienstgeberabgabe",
        soll: ["6690 Wiener Dienstgeberabgabe Angestellte"],
        haben: ["3610 Verbindlichkeiten Gemeinde (Stadt)"]
      }
    ]
  },

  // ==========================================================
  // III. JAHRGANG
  // ==========================================================

  "III_Kap6_LE2_Bewertung": {
    titel: "Kap. 6 – LE 2: Einführung in die Bewertung",
    jahrgang: 3,
    buchungen: [
      {
        bezeichnung: "Nicht abnutzbares Anlagevermögen – Abwertung",
        soll: [".... Aufwandskonto"],
        haben: ["0.. Nicht abnutzbares Anlagevermögen"]
      },
      {
        bezeichnung: "Nicht abnutzbares Anlagevermögen – Aufwertung (Zuschreibung)",
        soll: ["0.. Nicht abnutzbares Anlagevermögen"],
        haben: [".... Ertragskonto"]
      },
      {
        bezeichnung: "Abnutzbares Anlagevermögen – Abwertung",
        soll: [".... Aufwandskonto"],
        haben: ["0.. Abnutzbares Anlagevermögen"]
      },
      {
        bezeichnung: "Abnutzbares Anlagevermögen – Aufwertung",
        soll: ["0.. Abnutzbares Anlagevermögen"],
        haben: [".... Ertragskonto"]
      },
      {
        bezeichnung: "Umlaufvermögen – Abwertung",
        soll: [".... Aufwandskonto"],
        haben: [".... Umlaufvermögen"]
      },
      {
        bezeichnung: "Umlaufvermögen – Aufwertung",
        soll: [".... Umlaufvermögen"],
        haben: [".... Ertragskonto"]
      },
      {
        bezeichnung: "Verbindlichkeiten – Aufwertung (Zuschreibung)",
        soll: [".... Aufwandskonto"],
        haben: ["3.. Verbindlichkeiten"]
      },
      {
        bezeichnung: "Verbindlichkeiten – Abwertung",
        soll: ["3.. Verbindlichkeiten"],
        haben: [".... Ertragskonto"]
      }
    ]
  },

  "III_Kap7_LE1_Abschreibungen": {
    titel: "Kap. 7 – LE 1: Abschreibungen berechnen und verbuchen",
    jahrgang: 3,
    buchungen: [
      {
        bezeichnung: "Anschaffungswert aktivieren – Kaufpreis",
        soll: ["0.. Anlagenkonto", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Anschaffungswert aktivieren – Nebenkosten",
        soll: ["0.. Anlagenkonto", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Anschaffungswert aktivieren – Preisminderungen",
        soll: ["33.. Lieferantenkonto"],
        haben: ["0.. Anlagenkonto", "2500 Vorsteuer"]
      },
      {
        bezeichnung: "Abschreibung verbuchen",
        soll: ["7010 Abschreibungen von Sachanlagen"],
        haben: ["0.. Anlagenkonto"]
      },
      {
        bezeichnung: "Erinnerungseuro im Ausscheidungsjahr abschreiben",
        soll: ["7010 Abschreibungen von Sachanlagen"],
        haben: ["0.. Anlagenkonto  1,00"]
      }
    ]
  },

  "III_Kap7_LE2_SelbstErstellteAnlagen": {
    titel: "Kap. 7 – LE 2: Selbst erstellte Anlagen verbuchen",
    jahrgang: 3,
    buchungen: [
      {
        bezeichnung: "Selbst erstellte Anlage",
        soll: ["0.. Anlagenkonto"],
        haben: ["4580 Aktivierte Eigenleistungen"]
      },
      {
        bezeichnung: "Anlage in Bau – Teilrechnungen",
        soll: ["0710 Anlagen in Bau", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto"]
      },
      {
        bezeichnung: "Anlage in Bau – Selbst erstellte Teile",
        soll: ["0710 Anlagen in Bau"],
        haben: ["4580 Aktivierte Eigenleistungen"]
      },
      {
        bezeichnung: "Anlage in Bau – Endabrechnung (offener Restbetrag)",
        soll: ["0710 Anlagen in Bau", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto"]
      },
      {
        bezeichnung: "Anlage in Bau – Umbuchung Gesamtherstellungskosten",
        soll: ["0.. Anlagenkonto"],
        haben: ["0710 Anlagen in Bau"]
      }
    ]
  },

  "III_Kap7_LE3_Erhaltungsaufwand": {
    titel: "Kap. 7 – LE 3: Erhaltungs- und Herstellungsaufwand verbuchen",
    jahrgang: 3,
    buchungen: [
      {
        bezeichnung: "Instandhaltung / Instandsetzung",
        soll: ["7200 Instandhaltung durch Dritte", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Umbau / Erweiterung (Herstellungsaufwand → aktivieren)",
        soll: ["0.. Anlagenkonto", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto"]
      }
    ]
  },

  "III_Kap7_LE4_Anlagenausscheiden": {
    titel: "Kap. 7 – LE 4: Ausscheiden von Anlagen verbuchen",
    jahrgang: 3,
    buchungen: [
      {
        bezeichnung: "1. Verkaufserlös",
        soll: ["20.. Kundenkonto (2700 Kassa etc.)"],
        haben: ["4600 Erlöse a. d. Abgang v. Anlagen 20%", "3500 Umsatzsteuer"]
      },
      {
        bezeichnung: "2. Abschreibung bis Verkaufszeitpunkt",
        soll: ["7010 Abschreibungen von Sachanlagen"],
        haben: ["0.. Anlagenkonto"]
      },
      {
        bezeichnung: "3. Ausbuchung des Restbuchwertes",
        soll: ["7820 Buchwert abgegangener Anlagen"],
        haben: ["0.. Anlagenkonto"]
      },
      {
        bezeichnung: "4a. Saldierung positiver Saldo – Umbuchung Verkaufserlös",
        soll: ["4600 Erlöse aus dem Abgang von Anlagen 20%"],
        haben: ["4630 Erträge aus dem Abgang von Anlagen"]
      },
      {
        bezeichnung: "5a. Saldierung positiver Saldo – Umbuchung Buchwert",
        soll: ["4630 Erträge aus dem Abgang von Anlagen"],
        haben: ["7820 Buchwert abgegangener Anlagen"]
      },
      {
        bezeichnung: "4b. Saldierung negativer Saldo – Umbuchung Verkaufserlös",
        soll: ["4600 Erlöse aus dem Abgang von Anlagen 20%"],
        haben: ["7830 Verluste aus dem Abgang von Anlagen"]
      },
      {
        bezeichnung: "5b. Saldierung negativer Saldo – Umbuchung Buchwert",
        soll: ["7830 Verluste aus dem Abgang von Anlagen"],
        haben: ["7820 Buchwert abgegangener Anlagen"]
      },
      {
        bezeichnung: "Schadensfall – 1. Anerkennung durch Versicherung",
        soll: ["2300 Sonstige Forderungen"],
        haben: ["4610 Versicherungsentschädigungen für Anlagenabgänge"]
      },
      {
        bezeichnung: "Schadensfall – 2. Überweisung Versicherungsentschädigung",
        soll: ["2800 Bank"],
        haben: ["2300 Sonstige Forderungen"]
      },
      {
        bezeichnung: "Schadensfall – 3. Abschreibung bis Ausscheiden",
        soll: ["7010 Abschreibungen von Sachanlagen"],
        haben: ["0.. Anlagenkonto"]
      },
      {
        bezeichnung: "Schadensfall – 4. Ausbuchung Schaden (Buchwert)",
        soll: ["7819 Sonstige Schadensfälle"],
        haben: ["0.. Anlagenkonto"]
      },
      {
        bezeichnung: "Schadensfall – Saldierung positiv: Umbuchung Versicherung",
        soll: ["4610 Versicherungsentschädigungen für Anlagenabgänge"],
        haben: ["4630 Erträge aus dem Abgang von Anlagen"]
      },
      {
        bezeichnung: "Schadensfall – Saldierung positiv: Umbuchung Schaden",
        soll: ["4630 Erträge aus dem Abgang von Anlagen"],
        haben: ["7819 Sonstige Schadensfälle"]
      },
      {
        bezeichnung: "Schadensfall ohne Versicherungsentschädigung",
        soll: ["7830 Verluste aus dem Abgang von Anlagen"],
        haben: ["7819 Sonstige Schadensfälle"]
      }
    ]
  },

  "III_Kap8_LE1_Warenbewertung": {
    titel: "Kap. 8 – LE 1: Verbrauch ermitteln",
    jahrgang: 3,
    buchungen: [
      {
        bezeichnung: "Verbuchung Verlust / Schwund",
        soll: ["7800 Abschreibungen von Vorräten"],
        haben: ["5000 HW-Einsatz (5100 Rohstoffverbrauch etc.)"]
      }
    ]
  },

  "III_Kap9_LE2_Herstellungskosten": {
    titel: "Kap. 9 – LE 2: Herstellungskosten ermitteln / Erzeugnisse bewerten",
    jahrgang: 3,
    buchungen: [
      {
        bezeichnung: "Endbestand > Anfangsbestand (Bestandsvermehrung)",
        soll: ["1400 (1500) Unfertige (Fertige) Erzeugnisse"],
        haben: ["4500 Bestandsveränderungen"]
      },
      {
        bezeichnung: "Endbestand < Anfangsbestand (Bestandsverminderung)",
        soll: ["4500 Bestandsveränderungen"],
        haben: ["1400 (1500) Unfertige (Fertige) Erzeugnisse"]
      }
    ]
  },

  // ==========================================================
  // IV. JAHRGANG
  // ==========================================================

  "IV_Kap1_Zusatz_Pauschalwertberichtigung": {
    titel: "Kap. 1 – Zusatzinhalt: Pauschalbewertung von Forderungen",
    jahrgang: 4,
    buchungen: [
      {
        bezeichnung: "Erstmalige Bildung Pauschalwertberichtigung",
        soll: ["7806 Zuweisungen an WB zu Forderungen"],
        haben: ["2090 Pauschalwertberichtigungen zu Lieferforderungen Inland"]
      },
      {
        bezeichnung: "Erhöhung der Pauschalwertberichtigung",
        soll: ["7806 Zuweisungen an WB zu Forderungen"],
        haben: ["2090 Pauschalwertberichtigungen zu Lieferforderungen Inland"]
      },
      {
        bezeichnung: "Verringerung der Pauschalwertberichtigung",
        soll: ["2090 Pauschalwertberichtigungen zu Lieferforderungen Inland"],
        haben: ["4870 Erträge a. d. Auflösung von WB zu Forderungen"]
      }
    ]
  },

  "IV_Kap1_LE2_Einzelbewertung": {
    titel: "Kap. 1 – LE 2: Einzelbewertung von Forderungen",
    jahrgang: 4,
    buchungen: [
      {
        bezeichnung: "Uneinbringliche Forderung abschreiben (Forderungsausfall)",
        soll: ["780. Abschreibungen von Forderungen (20% etc.)", "3500 Umsatzsteuer"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Erstmalige Bildung Einzelwertberichtigung",
        soll: ["7806 Zuweisungen an WB zu Forderungen"],
        haben: ["2080 Einzelwertberichtigungen zu Lieferforderungen Inland"]
      },
      {
        bezeichnung: "Abschreibung Forderungsverlust + USt-Berichtigung",
        soll: ["780. Abschreibungen von Forderungen (20% etc.)", "3500 Umsatzsteuer"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Allfälliger Zahlungseingang nach Abschreibung",
        soll: ["2800 Bank"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Auflösung Einzelwertberichtigung",
        soll: ["2080 Einzelwertberichtigungen zu Lieferforderungen Inland"],
        haben: ["4870 Erträge aus der Auflösung von WB zu Forderungen"]
      },
      {
        bezeichnung: "Erhöhung Einzelwertberichtigung",
        soll: ["7806 Zuweisungen an WB zu Forderungen"],
        haben: ["2080 Einzelwertberichtigungen zu Lieferforderungen Inland"]
      },
      {
        bezeichnung: "Verringerung Einzelwertberichtigung",
        soll: ["2080 Einzelwertberichtigungen zu Lieferforderungen Inland"],
        haben: ["4870 Erträge a. d. Auflösung von WB zu Forderungen"]
      }
    ]
  },

  "IV_Kap1_LE3_FremdwaehrungForderungen": {
    titel: "Kap. 1 – LE 3: Forderungen und Verbindlichkeiten in fremder Währung",
    jahrgang: 4,
    buchungen: [
      {
        bezeichnung: "Bewertung Forderungen am Abschlussstichtag (Abwertung)",
        soll: ["7815 Fremdwährungskursverluste"],
        haben: ["20.. Kundenkonto"]
      },
      {
        bezeichnung: "Bewertung Verbindlichkeiten am Abschlussstichtag (Aufwertung)",
        soll: ["7815 Fremdwährungskursverluste"],
        haben: ["33.. Lieferantenkonto"]
      },
      {
        bezeichnung: "Rundungsdifferenz Soll > Haben",
        soll: ["20.. Kundenkonto"],
        haben: ["7818 Rundungsdifferenzen"]
      },
      {
        bezeichnung: "Rundungsdifferenz Haben > Soll",
        soll: ["7818 Rundungsdifferenzen"],
        haben: ["20.. Kundenkonto"]
      }
    ]
  },

  "IV_Kap2_LE2_Vorauszahlungen": {
    titel: "Kap. 2 – LE 2: Rechnungsabgrenzung – Vorauszahlungen",
    jahrgang: 4,
    buchungen: [
      {
        bezeichnung: "Eigene Vorauszahlung – Abgrenzung zum Abschlussstichtag",
        soll: ["2900 Aktive Rechnungsabgrenzung (ARA)"],
        haben: [".... Aufwandskonto"]
      },
      {
        bezeichnung: "Eigene Vorauszahlung – Auflösung ARA im neuen Jahr",
        soll: [".... Aufwandskonto"],
        haben: ["2900 Aktive Rechnungsabgrenzung (ARA)"]
      },
      {
        bezeichnung: "Fremde Vorauszahlung – Abgrenzung zum Abschlussstichtag",
        soll: [".... Ertragskonto"],
        haben: ["3900 Passive Rechnungsabgrenzung (PRA)"]
      },
      {
        bezeichnung: "Fremde Vorauszahlung – Auflösung PRA im neuen Jahr",
        soll: ["3900 Passive Rechnungsabgrenzung (PRA)"],
        haben: [".... Ertragskonto"]
      }
    ]
  },

  "IV_Kap2_LE3_Rueckstaende": {
    titel: "Kap. 2 – LE 3: Rechnungsabgrenzung – Rückstände",
    jahrgang: 4,
    buchungen: [
      {
        bezeichnung: "Fremde Rückstände – Einbuchung Ertrag zum Abschlussstichtag",
        soll: [".... Forderungskonto"],
        haben: [".... Ertragskonto"]
      },
      {
        bezeichnung: "Fremde Rückstände – Zahlung im neuen Jahr (betrifft nur altes Jahr)",
        soll: ["2800 Bank (2700 Kassa etc.)"],
        haben: [".... Forderungskonto"]
      },
      {
        bezeichnung: "Fremde Rückstände – Zahlung im neuen Jahr (betrifft beide Jahre)",
        soll: ["2800 Bank (2700 Kassa etc.)"],
        haben: [".... Forderungskonto", ".... Ertragskonto"]
      },
      {
        bezeichnung: "Abgrenzung Wertpapierzinsen (Einzelunternehmen/Personengesellschaft)",
        soll: ["2350 Forderungen aus Wertpapierzinsen"],
        haben: ["8031 (8053) Endbesteuerte Zinsenerträge für Wertpapiere des AV (UV)"]
      },
      {
        bezeichnung: "Abgrenzung Wertpapierzinsen (Kapitalgesellschaft)",
        soll: ["2350 Forderungen aus Wertpapierzinsen"],
        haben: ["8030 (8052) Steuerpflichtige Zinsenerträge für Wertpapiere des AV (UV)"]
      },
      {
        bezeichnung: "Eigene Rückstände – Einbuchung Aufwand zum Abschlussstichtag",
        soll: [".... Aufwandskonto"],
        haben: [".... Verbindlichkeitenkonto"]
      },
      {
        bezeichnung: "Eigene Rückstände – Zahlung im neuen Jahr (betrifft nur altes Jahr)",
        soll: [".... Verbindlichkeitenkonto"],
        haben: ["2800 Bank (2700 Kassa etc.)"]
      },
      {
        bezeichnung: "Eigene Rückstände – Zahlung im neuen Jahr (betrifft beide Jahre)",
        soll: [".... Verbindlichkeitenkonto", ".... Aufwandskonto"],
        haben: ["2800 Bank (2700 Kassa etc.)"]
      }
    ]
  },

  "IV_Kap3_LE1_Rueckstellungen": {
    titel: "Kap. 3 – LE 1: Rückstellungen bilden und auflösen",
    jahrgang: 4,
    buchungen: [
      {
        bezeichnung: "Bildung einer Rückstellung",
        soll: [".... Aufwandskonto"],
        haben: ["30.. Rückstellungen für ..."]
      },
      {
        bezeichnung: "Auflösung – Rückstellung entspricht dem tatsächlichen Aufwand",
        soll: ["30.. Rückstellungen für ...", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2800 Bank)"]
      },
      {
        bezeichnung: "Auflösung – Rückstellung niedriger als tatsächlicher Aufwand",
        soll: ["30.. Rückstellungen für ...", "7840 Aufwand für Vorperioden", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2800 Bank)"]
      },
      {
        bezeichnung: "Auflösung – Rückstellung höher als tatsächlicher Aufwand (1. Tatsächlicher Aufwand)",
        soll: ["30.. Rückstellungen für ...", "2500 Vorsteuer"],
        haben: ["33.. Lieferantenkonto (2800 Bank)"]
      },
      {
        bezeichnung: "Auflösung – Rückstellung höher als tatsächlicher Aufwand (2. Differenz)",
        soll: ["30.. Rückstellungen für ..."],
        haben: ["4700 Erträge aus der Auflösung von Rückstellungen"]
      },
      {
        bezeichnung: "Kein Aufwand – Rückstellung vollständig auflösen",
        soll: ["30.. Rückstellungen für ..."],
        haben: ["4700 Erträge aus der Auflösung von Rückstellungen"]
      }
    ]
  },

  "IV_Kap3_LE2_VerschiedeneRueckstellungen": {
    titel: "Kap. 3 – LE 2: Verschiedene Rückstellungen",
    jahrgang: 4,
    buchungen: [
      {
        bezeichnung: "KSt-Vorauszahlungen",
        soll: ["8500 Körperschaftsteuer"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "Bildung KSt-Rückstellung",
        soll: ["8500 Körperschaftsteuer"],
        haben: ["3020 Rückstellungen für Körperschaftsteuer"]
      },
      {
        bezeichnung: "KSt-Abschlusszahlung – Rückstellung = Zahlung",
        soll: ["3020 Rückstellungen für Körperschaftsteuer"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "KSt-Abschlusszahlung – Rückstellung < Zahlung",
        soll: ["3020 Rückstellungen für Körperschaftsteuer", "8510 Körperschaftsteuer Vorjahre"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "KSt-Abschlusszahlung – Rückstellung > Zahlung (1. Zahlung)",
        soll: ["3020 Rückstellungen für Körperschaftsteuer"],
        haben: ["2800 Bank"]
      },
      {
        bezeichnung: "KSt-Abschlusszahlung – Rückstellung > Zahlung (2. Differenz)",
        soll: ["3020 Rückstellungen für Körperschaftsteuer"],
        haben: ["8520 Erträge aus der Auflösung von Körperschaftsteuerrückstellungen"]
      },
      {
        bezeichnung: "Erstmalige Bildung Garantierückstellung",
        soll: ["7810 Zuweisungen an die Garantierückstellung"],
        haben: ["3060 Garantierückstellungen"]
      },
      {
        bezeichnung: "Erhöhung Garantierückstellung",
        soll: ["7810 Zuweisungen an die Garantierückstellung"],
        haben: ["3060 Garantierückstellungen"]
      },
      {
        bezeichnung: "Verringerung Garantierückstellung",
        soll: ["3060 Garantierückstellungen"],
        haben: ["4700 Erträge aus der Auflösung von Rückstellungen"]
      },
      {
        bezeichnung: "Erstmalige Bildung Urlaubsrückstellung (Arbeiter)",
        soll: ["6050 Zuweisungen an die Urlaubsrückstellung Arbeiter"],
        haben: ["3050 Rückstellungen für nicht konsumierte Urlaube"]
      },
      {
        bezeichnung: "Erstmalige Bildung Urlaubsrückstellung (Angestellte)",
        soll: ["6250 Zuweisungen an die Urlaubsrückstellung Angestellte"],
        haben: ["3050 Rückstellungen für nicht konsumierte Urlaube"]
      },
      {
        bezeichnung: "Erhöhung Urlaubsrückstellung",
        soll: ["6050 (6250) Zuweisungen an die Urlaubsrückstellung"],
        haben: ["3050 Rückstellungen für nicht konsumierte Urlaube"]
      },
      {
        bezeichnung: "Verringerung Urlaubsrückstellung",
        soll: ["3050 Rückstellungen für nicht konsumierte Urlaube"],
        haben: ["4700 Erträge aus der Auflösung von Rückstellungen"]
      }
    ]
  },

  "IV_Kap4_LE3_PersonengesellschaftAbschluss": {
    titel: "Kap. 4 – LE 3: Abschluss von Personengesellschaften (OG/KG)",
    jahrgang: 4,
    buchungen: [
      {
        bezeichnung: "OG – Gewinn, Privatentnahmen > Privateinlagen: Abschluss Privatkonten",
        soll: ["9050 Variables Kapital..."],
        haben: ["9600 Privat..."]
      },
      {
        bezeichnung: "OG – Gewinn: Umbuchung Gewinnanteil",
        soll: ["9890 GuV"],
        haben: ["9050 Variables Kapital..."]
      },
      {
        bezeichnung: "OG – Verlust, Privatentnahmen > Privateinlagen: Abschluss Privatkonten",
        soll: ["9050 Variables Kapital..."],
        haben: ["9600 Privat..."]
      },
      {
        bezeichnung: "OG – Verlust: Umbuchung Verlustanteil",
        soll: ["9050 Variables Kapital..."],
        haben: ["9890 GuV"]
      },
      {
        bezeichnung: "KG – Verbuchung Gewinnanteil Kommanditist",
        soll: ["9890 GuV"],
        haben: ["3730 Gewinnverrechnung... (Kommanditist)"]
      },
      {
        bezeichnung: "KG – Verbuchung Verlustanteil Kommanditist",
        soll: ["9160 Verlustanteil... (Kommanditist)"],
        haben: ["9890 GuV"]
      }
    ]
  },

  "IV_Kap4_LE4_GmbHAbschluss": {
    titel: "Kap. 4 – LE 4: Abschluss der GmbH",
    jahrgang: 4,
    buchungen: [
      {
        bezeichnung: "Bilanzgewinn",
        soll: ["9890 GuV"],
        haben: ["9390 Bilanzgewinn"]
      },
      {
        bezeichnung: "Bilanzverlust",
        soll: ["9390 Bilanzverlust"],
        haben: ["9890 GuV"]
      },
      {
        bezeichnung: "Gewinnverwendung (bei Aufstellung, im Gesellschaftsvertrag geregelt)",
        soll: ["9890 GuV"],
        haben: ["9310 Freie Rücklage", "3720 Verbindlichkeiten Gesellschafter A", "3721 Verbindlichkeiten Gesellschafter B", "3580 Einbehaltene KESt"]
      },
      {
        bezeichnung: "Gewinnverwendung (bei Feststellung, nicht im Gesellschaftsvertrag geregelt)",
        soll: ["9890 Bilanzgewinn"],
        haben: ["9310 Freie Rücklage", "3720 Verbindlichkeiten Gesellschafter A", "3721 Verbindlichkeiten Gesellschafter B", "3580 Einbehaltene KESt"]
      }
    ]
  }

};

// ------------------------------------------------------------------
// BUCHUNGSREGELN ALS TEXT – wird in getBertAnweisungen() eingebunden
// ------------------------------------------------------------------
function getBuchungsregeln() {
  return `
WICHTIGE BUCHUNGSREGELN (Hölzel-Kontenplan):

WARENEINKAUF: IMMER 5000 HW-Einsatz verwenden – NIEMALS 1600 HW-Vorrat! Konto 1600 wird NUR bei Bestandsveraenderungen am Jahresende verwendet.
Wareneinkauf auf Ziel: Soll 5000 HW-Einsatz (Netto) + Soll 2500 Vorsteuer / Haben 3300 Lieferverbindlichkeiten (Brutto)
Wareneinkauf bar/Bank: Soll 5000 HW-Einsatz (Netto) + Soll 2500 Vorsteuer / Haben 2700 Kassa oder 2800 Bank (Brutto)

WARENVERKAUF: Soll 2000 Lieferforderungen oder 2700 Kassa oder 2800 Bank (Brutto) / Haben 4000 HW-Erloese 20% (Netto) + Haben 3500 Umsatzsteuer

VORSTEUER-BUCHUNGEN (zusammengesetzt): Bei Buchungen mit Vorsteuer IMMER zwei Zeilen:
Zeile 1: sollKto=5000 HW-Einsatz, sollBetrag=Nettobetrag, habenKto=3300 (oder 2700/2800), habenBetrag=BRUTTOBETRAG
Zeile 2: sollKto=2500 Vorsteuer, sollBetrag=VSt-Betrag, habenKto="", habenBez="", habenBetrag=""
NIEMALS habenBetrag=0,00 – bei der Vorsteuer-Zeile habenBetrag LEER lassen!

ANLAGENKAUF: Soll 0.. Anlagenkonto (Netto) + Soll 2500 Vorsteuer / Haben 3300 Lieferverbindlichkeiten (Brutto)
PKW/KOMBI: KEIN Vorsteuerabzug (außer Elektrofahrzeuge)! Soll 0630 Pkw und Kombis / Haben 3300 Lieferverbindlichkeiten (Brutto)
ELEKTROFAHRZEUG: Soll 0630 Pkw und Kombis (Netto) + Soll 2500 Vorsteuer / Haben 3300 Lieferverbindlichkeiten (Brutto)

ABSCHREIBUNG AfA: Soll 7010 AfA Sachanlagen / Haben 0.. Anlagenkonto

UNEINBRINGLICHE FORDERUNG: Soll 7802 Abschreibungen von Forderungen 20% (Netto) + Soll 3500 Umsatzsteuer / Haben 2000 Lieferforderungen (Brutto)
EINZELWERTBERICHTIGUNG (EWB): Soll 7806 Zuweisungen an WB zu Forderungen / Haben 2080 Einzel-WB Lieferforderungen Inland
EWB-AUFLOESUNG: Soll 2080 Einzel-WB / Haben 4870 Ertraege Aufloesung WB

RUECKSTELLUNG BILDEN: Soll Aufwandskonto / Haben 30.. Rueckstellungen
RUECKSTELLUNG AUFLOESEN (kein Aufwand): Soll 30.. Rueckstellungen / Haben 4700 Ertraege Aufloesung RS

RECHNUNGSABGRENZUNG:
ARA (eigene Vorauszahlung): Soll 2900 ARA / Haben Aufwandskonto
PRA (fremde Vorauszahlung): Soll Ertragskonto / Haben 3800 PRA

LOHN/GEHALT ABRECHNUNG:
Soll 6200 Gehaelter / Haben 3600 Verbindl. Gesundheitskasse + Haben 3540 Verbindl. Finanzamt + Haben 3850 Verbindl. Mitarbeiter`;
}

// Hilfsfunktion: Suche nach Stichwort
function sucheBuchung(stichwort) {
  const ergebnisse = [];
  const suche = stichwort.toLowerCase();
  for (const [key, abschnitt] of Object.entries(BUCHUNGSANWEISUNGEN)) {
    for (const buchung of abschnitt.buchungen) {
      if (
        buchung.bezeichnung.toLowerCase().includes(suche) ||
        abschnitt.titel.toLowerCase().includes(suche) ||
        buchung.soll.some(s => s.toLowerCase().includes(suche)) ||
        buchung.haben.some(h => h.toLowerCase().includes(suche))
      ) {
        ergebnisse.push({ abschnitt: abschnitt.titel, ...buchung });
      }
    }
  }
  return ergebnisse;
}
