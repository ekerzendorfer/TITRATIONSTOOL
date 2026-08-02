# TITRATIONSTOOL v15.1.1

## Schwerpunkt dieser Version

v15.1.1 ist ein bewusst kleiner Ergonomie-Zwischenschritt auf Basis von v15.1. Rechenmodell, Messdaten, Ableitungen, Äquivalenzpunktbestimmung, Hägg-Diagramm und CSV-Export bleiben fachlich unverändert.

Der linke Bereich **„Versuch einstellen“** wurde kompakter aufgebaut, damit die Titratorzugabe bei üblichen Desktop- und Tabletbreiten deutlich früher erreichbar ist.

## Änderungen an der Bedienoberfläche

- Die Formel in der Stoffkarte bleibt in einer Zeile. Das gilt insbesondere für längere Formeln wie `CH₃CH(OH)COOH`.
- Das Dropdown **„Protonenstufen der Säure“** wird bei hinterlegten Stoffen nicht mehr angezeigt.
- Bei **„Freie Eingabe / eigener Stoff“** erscheint das Dropdown weiterhin, weil die Protonenstufe dort festgelegt werden muss.
- `c(Probe)` und `c(NaOH)` stehen nebeneinander.
- `V(Probe)` und die pKs-Eingabe bilden eine gemeinsame kompakte Parameterzeile.
- Bei einprotonigen Säuren lautet die Beschriftung nur **pKs**.
- Bei zweiprotonigen Säuren werden **pKs₁** und **pKs₂** angezeigt.
- Die Stoffkarte und die Eingabefelder wurden etwas kompakter gestaltet, ohne Touch-Ziele oder Lesbarkeit unnötig zu verkleinern.

## Stoffauswahl und freie Eingabe

Die in v15.1 eingeführten Stammdaten bleiben unverändert:

### Einprotonige schwache Säuren

- Ameisensäure
- Essigsäure
- Propionsäure
- Milchsäure
- Benzoesäure

### Zweiprotonige schwache Säuren

- Oxalsäure
- Malonsäure

Bei einem hinterlegten Stoff werden Protonenstufe und pKs-Werte automatisch übernommen. Bei einer freien Eingabe sind Stoffname, Formel, molare Masse, Protonenstufe und pKs-Wert beziehungsweise pKs-Werte editierbar.

## Fachliche Funktionen

Unverändert aus v15.1 übernommen wurden unter anderem:

- Ladungsbilanz für schwache ein- und zweiprotonige Säuren
- korrekte erste und zweite Ableitung
- Äquivalenzpunktbestimmung aus Maximum und interpoliertem Nulldurchgang
- getrennte Diagrammansichten und optionale Überblendung
- Stoffstammdaten und freie Stoffeingabe
- MESSWERT_LAB-kompatibler CSV-Export
- Challenge-Modus

## Dateien im Repository

- `index.html` – vollständige browserbasierte Anwendung
- `README.md` – Beschreibung des aktuellen Entwicklungsstands
- `TESTPLAN.md` – dokumentierte Prüfungen dieser Fassung

Die README trägt bewusst keine Versionsnummer im Dateinamen, damit sie bei späteren Versionen im Repository ersetzt werden kann.
