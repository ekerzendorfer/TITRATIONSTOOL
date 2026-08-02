# TITRATIONSTOOL

Browserbasiertes Titrationslabor für den Chemieunterricht. Die App läuft als einzelne `index.html` und kann direkt über GitHub Pages bereitgestellt werden.

## Version 15.2.0

v15.2.0 erweitert das bisherige Modell „schwache Säure mit Natronlauge“ zu einem allgemeinen, bewusst begrenzten Säure-Base-Modell.

### Unterstützte Titrationsarten

- starke Säure mit starker Base
- schwache ein- oder zweiprotonige Säure mit starker Base
- starke Base mit starker Säure
- schwache einprotonige Base mit starker Säure

Die Maßlösung wird automatisch festgelegt:

- Säuren werden mit Natronlauge (`NaOH`) titriert.
- Basen werden mit Salzsäure (`HCl`) titriert.

Schwach-schwach-Paarungen, mehrprotonige Basen sowie Redox-, Fällungs- und komplexometrische Titrationen sind bewusst nicht vorgesehen.

## Hinterlegte Stoffe

### Starke Säuren

- Salzsäure, HCl
- Salpetersäure, HNO₃

### Schwache einprotonige Säuren

- Ameisensäure
- Essigsäure
- Propionsäure
- Milchsäure
- Benzoesäure

### Schwache zweiprotonige Säuren

- Oxalsäure
- Malonsäure

### Starke Base

- Natriumhydroxid, NaOH

### Schwache Basen

- Ammoniak
- Methylamin
- Pyridin

Bei schwachen Basen wird einheitlich der pKₛ-Wert der konjugierten Säure verwendet, zum Beispiel `pKₛ(NH₄⁺)` bei Ammoniak.

Alle Stoffklassen besitzen zusätzlich eine freie Eingabe. Mehrprotonige freie Eingaben sind nur bei schwachen Säuren möglich.

## Änderungen gegenüber v15.1.1

- neue Auswahl „Art der analysierten Lösung“
- dynamische Stofflisten abhängig von Säure/Base und stark/schwach
- automatische Zuordnung von NaOH oder HCl als Maßlösung
- pH-Berechnung für starke Säuren und starke Basen
- pH-Berechnung für schwache einprotonige Basen über die Ladungsbilanz
- fallende Titrationskurven bei Basentitrationen
- gespiegelte Ableitungsauswertung:
  - Säuretitration: Maximum der ersten Ableitung und positiv-negativer Nulldurchgang
  - Basentitration: Minimum der ersten Ableitung und negativ-positiver Nulldurchgang
- Hägg-Diagramm für schwache Basen mit konjugierter Säure und freier Base
- verständlicher Hinweis statt Speziesdiagramm bei vollständig dissoziierten starken Systemen
- dynamische Achsen-, Tabellen- und Konzentrationsbeschriftungen für NaOH beziehungsweise HCl
- erweiterte MESSWERT_LAB-Metadaten für Titrationsart, Analytklasse und Maßlösung
- Stofftabelle als modales Fenster; sie wird nicht mehr vom rechten Arbeitsbereich überdeckt
- `README.md` und `TESTPLAN.md` weiterhin ohne Versionsnummer im Dateinamen

## Fachliche Modellgrenzen

Die Simulation verwendet idealisierte wässrige Gleichgewichte. Nicht berücksichtigt werden unter anderem:

- Aktivitätskoeffizienten und Ionenstärke
- Temperaturabhängigkeit der Gleichgewichtskonstanten
- Löslichkeitsgrenzen
- Gasgleichgewichte
- Nebenreaktionen
- Volumenkontraktion

Sonderfälle wie Schwefelsäure, Kohlensäure, Carbonat, schwefelige Säure, Calciumhydroxid und Citronensäure sind daher nicht als Stammdaten hinterlegt.

## Export

Der CSV-Export enthält unveränderte Volumen- und pH-Rohdaten sowie einen Metadatenblock für MESSWERT_LAB:

- UTF-8 mit BOM
- Semikolon als Trennzeichen
- Dezimalkomma
- Zeitstempel im Dateinamen
- Analytname, Formel, Stoffklasse und molare Masse
- Maßlösung mit Name und Formel
- Konzentrationen und Probenvolumen
- pKₛ-Werte und ihre Bedeutung
- Indikator und Soll-Schrittweite

Ableitungen werden nicht exportiert; MESSWERT_LAB soll sie aus den Rohdaten neu berechnen.

## Für spätere Versionen vorgemerkt

### Aufgabenmodus

Ein schulischer Aufgabenmodus soll nach der weiteren fachlichen und visuellen Stabilisierung ergänzt werden.

Geplant ist insbesondere eine Säure-Erkennungsaufgabe nur für einprotonige schwache Säuren:

1. Titrationskurve aufnehmen
2. Äquivalenzpunkt bestimmen
3. Halbäquivalenzpunkt ableiten
4. dort `pH = pKₛ` ablesen
5. die Säure anhand der hinterlegten Tabelle identifizieren

### Geführte quantitative Auswertung

Nach der Äquivalenzpunktbestimmung soll der Schülermodus schrittweise zur Berechnung der unbekannten Analytkonzentration führen:

- Stoffmengenkonzentration in mol/L
- Massenkonzentration in g/L unter Verwendung der molaren Masse

Diese Funktionen sind in v15.2.0 noch nicht enthalten.

## Projektdateien

- `index.html` – vollständige App
- `README.md` – Funktionsumfang und Entwicklungsstand
- `TESTPLAN.md` – fachliche und technische Prüfungen
