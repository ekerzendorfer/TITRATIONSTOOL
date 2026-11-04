# TITRATIONSTOOL v15.9.0

## Citronensäure und CO₂-freie Brausetabletten-Matrix

Neu im freien Labor: Citronensäure (C₆H₈O₇, M = 192,12 g/mol, pKₛ 3,13 / 4,76 / 6,40) mit dreiprotonigem Ladungsbilanz-Modell und vier Citrat-Spezies im Hägg-Diagramm. Die CO₂-freie Brausetabletten-Matrix ergänzt Ascorbinsäure (pKₛ₁ = 4,10) und vorgelegte Na⁺-Ionen, die als Vorneutralisation in die Ladungsbilanz eingehen. Die Konzentrationen c(Cit), c(Asc) und c(Na⁺) sind einstellbar. CSV-Export einschließlich pKₛ₃ und Matrixwerten.

Modellbeispiel, **keine bekannte Produktzusammensetzung**: Aus 100,0 mL Stammlösung werden 10,0 mL aliquotiert. c(Cit) = 0,0300 mol/L, c(Asc) = 0,0100 mol/L, c(Na⁺) = 0,04105 mol/L und c(NaOH) = 0,100 mol/L ergeben pH(start) ≈ 4,25 und V(End-ÄP) ≈ 5,895 mL. Für reine Citronensäure bei derselben Konzentration: End-ÄP = 9,000 mL. Der pH am End-ÄP ist konzentrationsabhängig. Phenolphthalein ist als visueller Indikator geeignet.

Modellgrenzen: angenommene vollständige Entfernung von CO₂/Carbonat; idealisierte Aktivitäten; Ascorbinsäure im Bereich bis etwa pH 10 als einprotonig. Aus einer einzigen Titration lässt sich die unbekannte Citronensäuremasse einer realen Brausetablette nicht eindeutig bestimmen.

### Hub-Brücke

Die unveränderte bestehende Bridge wird mit ?bridge=1&run=<RUN_ID> geladen. Für reine Citronensäure genügt im run.input acid="citric"; für die vorneutralisierte Matrix zusätzlich preset="brausetablette". Unterstützt werden mode="hub_titration" und mode="hub_quantitative_citric"; der bisherige salicylic-Auftrag ohne Citrat-Merkmal bleibt kompatibel.

Felder in run.input für die Matrix (alle optional, Standardwerte aus dem Beispiel):
- c_Cit: 0.0300
- c_Asc: 0.0100
- c_Na_vor: 0.04105
- aliquot_ml: 10.0
- stock_volume_ml: 100.0
- titrant_concentration_mol_l: 0.100
- learning_mode: "guided" oder "expert"

Aliases: citric_concentration_mol_l, ascorbic_concentration_mol_l, sodium_pre_concentration_mol_l, aliquot_volume_ml. Die Rückgabe verwendet weiterhin analysis_type="ACID_BASE_TITRATION_QUANT", measurement.raw_points und measurement.equivalence_volume_ml. Modellparameter und die tatsächlich ermittelte Restacidität werden zusätzlich gespeichert. Bei der Matrix wird aus der Restacidität nicht automatisch eine Citronensäuremasse abgeleitet.

Regressionstests: node --test tests/titration-regression.cjs.

---

## Vorheriger Stand: TITRATIONSTOOL v15.8.4

## Neu: TITR_A10 – Brückenaufgabe zum SÄUREN_LAB

Die neue Aufgabe **„SÄUREN_LAB – Essigprobe: NaOH-Verbrauch bestimmen“** ist bewusst schlank:

- 10,0 mL einer 1:10 verdünnten Essigprobe
- 0,100 mol/L NaOH
- Phenolphthalein
- Probenkonzentration verborgen
- Äquivalenzvolumen zufällig im Bereich 8,0–12,0 mL
- keine Konzentrations- oder Massenberechnung im TITRATIONSTOOL
- einziger zu übertragender Wert: **V(NaOH) am Äquivalenzpunkt**

Die eigentliche quantitative Auswertung erfolgt anschließend im **SÄUREN_LAB**.

### Direktlink

Die Aufgabe kann direkt über

`?task=TITR_A10`

geladen werden, z. B. aus dem SÄUREN_LAB.

Alle bisherigen Aufgaben und das freie Labor bleiben erhalten.


## Neu: TITR_A11 – VCÖ-01 Salicylsäure quantitativ bestimmen

Salicylsäure ist nun auch im freien Labor als kuratierter Stoff enthalten:

- Summenformel C₇H₆O₃
- M = 138,121 g·mol⁻¹
- pKₛ1 ≈ 2,97 (Carboxylgruppe)
- pKₛ2 ≈ 13,60 (phenolische OH-Gruppe)

Die neue Hub-Aufgabe TITR_A11 verwendet gezielt nur den **ersten Äquivalenzpunkt** zur Quantifizierung der Carboxylgruppe.

VCÖ-01-Modell:
- gesamter bestätigter Rückstand quantitativ auf 100,0 mL
- 20,00 mL Aliquot
- 0,0200 mol·L⁻¹ NaOH
- erster Äquivalenzpunkt bei etwa 10,00 mL
- Rückrechnung über 1:1-Stöchiometrie auf n und m(Salicylsäure) im ursprünglichen Rückstand

Die Aufgabe führt durch sieben Rechenschritte. Im Hub-Modus wird das RESULT erst freigegeben, wenn die gesamte Rechenkette korrekt bearbeitet wurde.

### Hub-Modus

Aufruf über die CHEMIE_ANALYTIK_BRIDGE mit `mode: hub_quantitative_salicylic`.

Rückgabe:
- `analysis_type: ACID_BASE_TITRATION_QUANT`
- Äquivalenzvolumen und Titrationsparameter
- Rohpunkte der Titrationskurve
- studentische Rechenkette
- finale Masse der Salicylsäure


## v15.8.1 – kompakte quantitative Hub-Challenge

Der VCÖ-01-Hub-Modus für Salicylsäure wurde didaktisch und ergonomisch gestrafft. Der Standalone-Betrieb bleibt unverändert.

Im Hub-Modus:
- Aufgabenkatalog und Arbeitsbereich-Umschaltung sind ausgeblendet
- nur die VCÖ-01-Bestimmung wird angezeigt
- freie Stoff-/Parameterwahl, Hägg-Diagramm, Export und Auto-Titration sind ausgeblendet
- die Titration muss manuell mit wählbarer Volumenschrittweite durchgeführt werden
- automatischer und stöchiometrischer Referenz-Äquivalenzpunkt bleiben verborgen
- V(ÄP1) kann erst ausgewertet werden, wenn tatsächlich eine Messreihe bis über den Äquivalenzbereich aufgenommen wurde
- die sieben Rechenschritte erscheinen nacheinander
- jeder Schritt wird beim Verlassen des Feldes bzw. mit Enter sofort geprüft
- bei Fehlern wird kein Lösungswert verraten; ein korrekter Schritt schaltet den nächsten frei
- erst nach dem letzten korrekten Schritt wird die Rückgabe an den Analytik-Hub freigeschaltet

Bekannte Versuchsdaten bleiben sichtbar: quantitative Überführung auf 100,0 mL, 20,00-mL-Aliquot und 0,0200 mol·L⁻¹ NaOH.


## v15.8.2 – ausführlichere Rechenhilfen für die quantitative Brückenaufgabe

Die bereits getestete manuelle VCÖ-01-Challenge bleibt funktional unverändert. Lediglich die Lernhilfen der schrittweisen Auswertung wurden erweitert:

- Schritt 4 erklärt die Übertragung der 1:1-Stöchiometrie auf die Stoffmenge im Aliquot.
- Schritt 5 erläutert die Rückrechnung von Stoffmenge und Aliquotvolumen auf die Konzentration.
- Schritt 6 erklärt den Aliquotfaktor 20,00 mL → 100,0 mL sprachlich statt nur als Formelhinweis.
- Schritt 7 erinnert an m = n · M und an die nötige Umrechnung mmol → mol.

Die Hilfen nennen weiterhin keinen gesuchten Zahlenwert.


## v15.8.3 – Hub-Layout-Feinschliff

- mehr Innenabstand in der Bridge-Karte und der quantitativen VCÖ-01-Hub-Karte
- kompakteres responsives Verhalten der rechten Volumenschritt-Spalte auf schmalen Bildschirmen
- keine funktionale Änderung an Titration, Challenge oder RESULT-Rückgabe


## v15.8.4 – Expert-Modus im VCÖ-01-Hubauftrag

Der Hub übergibt jetzt den Arbeitsmodus an die quantitative Salicylsäure-Challenge.

Im Expert-Modus:
- sichtbares Expert-Badge
- kompakter Arbeitsauftrag ohne vorweggenommene 1:1-Rechenhilfe
- die siebenstufige Rechenkette bleibt erhalten
- Inline-Hilfetexte unter den einzelnen Rechenschritten werden ausgeblendet
- Plausibilitätsprüfung und schrittweise Freischaltung bleiben unverändert

Zusätzlich wurden Statusleiste und Hub-Auftragskarte mit mehr Innenabstand versehen.
