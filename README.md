# TITRATIONSTOOL

Browserbasiertes Titrationslabor für den Chemieunterricht. Die App läuft als einzelne `index.html` und kann direkt über GitHub Pages bereitgestellt werden.

## Version 15.3.0

v15.3.0 ergänzt das allgemeine Säure-Base-Modell um ein fachlich differenziertes Indikator- und Farbmodell. Die Titrationsberechnung, Stoffauswahl, Ableitungen und Äquivalenzpunktbestimmung aus v15.2.0 bleiben unverändert.

## Unterstützte Indikatoren

### Bromthymolblau

- Umschlagsbereich: pH 6,0–7,6
- Farbverlauf: gelb → blau
- kontinuierliche Farbmischung innerhalb des Umschlagsbereichs

### Phenolphthalein

- Umschlagsbereich: pH 8,2–10,0
- Farbverlauf: farblos → pink
- kontinuierliche Farbmischung innerhalb des Umschlagsbereichs

### Methylorange

- Umschlagsbereich: pH 3,1–4,4
- Farbverlauf: rot → gelb
- kontinuierliche Farbmischung innerhalb des Umschlagsbereichs

### Thymolblau

Thymolblau wird als zweistufiger Indikator modelliert:

- erster Umschlagsbereich: pH 1,2–2,8, rot → gelb
- zweiter Umschlagsbereich: pH 8,0–9,6, gelb → blau
- verwendete pK-Werte: pK₁ = 1,65 und pK₂ = 8,90

Die sichtbare Farbe wird aus den berechneten Anteilen der drei Indikatorformen gemischt. Dadurch entstehen beide Farbübergänge kontinuierlich und ohne getrennte Sprunglogik.

### Universalindikator

Der Universalindikator wird ausdrücklich als schematisches Indikatorgemisch behandelt:

- kontinuierliche empirische Farbskala von pH 0 bis 14
- kein einzelner pK-Wert
- kein einzelner enger Umschlagsbereich
- zur anschaulichen pH-Abschätzung, nicht zur präzisen Endpunkterkennung

Die genaue Farbskala realer Universalindikatorgemische kann je nach Zusammensetzung und Hersteller abweichen.

## Neue Darstellung

Unter der Indikatorauswahl erscheint eine kompakte Vorschau mit:

- Name und Modelltyp
- vollständiger Farbskala
- Umschlagsbereich beziehungsweise Hinweis auf die Universalindikatorskala
- aktuell berechneter Farbe und aktuellem pH-Wert

In der Titrationskurve werden die Umschlagsbereiche eines Einzelindikators beziehungsweise von Thymolblau als dezente horizontale pH-Bänder dargestellt. Bei der Überblendung einer Ableitung erscheinen sie auf der zusätzlichen pH-Achse. Beim Universalindikator werden keine künstlichen schmalen Bänder angezeigt.

## Vergleich mit dem Äquivalenzpunkt

Für jeden stöchiometrischen Äquivalenzpunkt wird der zugehörige pH-Wert berechnet und mit den Umschlagsbereichen des gewählten Indikators verglichen.

Die Anzeige unterscheidet zwischen:

- Äquivalenzpunkt liegt innerhalb eines Umschlagsbereichs
- Äquivalenzpunkt liegt außerhalb der Umschlagsbereiche

Bei zweiprotonigen Säuren werden beide Äquivalenzpunkte getrennt beurteilt. Im ungelösten Challenge-Modus bleibt diese Bewertung verborgen.

Diese Prüfung ist eine didaktische Eignungsanzeige. Sie ersetzt keine experimentelle Diskussion von Sprungbreite, Indikatorkonzentration, Eigenfarbe der Probe oder visueller Endpunkterkennung.

## CSV-Export

Der MESSWERT_LAB-kompatible Metadatenblock enthält zusätzlich:

- `Indikator`
- `Indikator_Modell`
- `Indikator_Umschlagsbereiche_pH`

Die Volumen- und pH-Rohdaten sowie die Berechnung der Ableitungen wurden nicht verändert.

## Unterstützte Titrationsarten

- starke Säure mit starker Base
- schwache ein- oder zweiprotonige Säure mit starker Base
- starke Base mit starker Säure
- schwache einprotonige Base mit starker Säure

Schwach-schwach-Paarungen, mehrprotonige Basen sowie andere Titrationsprinzipien bleiben bewusst ausgeschlossen.

## Fachliche Modellgrenzen

Die Simulation verwendet idealisierte wässrige Gleichgewichte. Nicht berücksichtigt werden unter anderem:

- Aktivitätskoeffizienten und Ionenstärke
- Temperaturabhängigkeit
- Indikatorkonzentration und deren geringer Eigenverbrauch
- Eigenfarbe oder Trübung der Probe
- Lichtweg, Beleuchtung und subjektive Farbwahrnehmung
- Löslichkeitsgrenzen, Gasgleichgewichte und Nebenreaktionen

Die dargestellten Farben sind daher didaktische Bildschirmfarben und keine verbindliche farbmetrische Kalibrierung.

## Für spätere Versionen vorgemerkt

### Apparatur und Animation

- Bürette mit sichtbarem Flüssigkeitsstand
- Hahn und fallender Tropfen
- Erlenmeyerkolben
- Rührfisch und pH-Elektrode
- zunehmendes Flüssigkeitsvolumen
- lokaler kurzzeitiger Farbfleck vor vollständiger Durchmischung

Die Apparatur soll ausschließlich den von der Rechenlogik gelieferten Zustand visualisieren.

### Aufgabenmodus

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

## Fachliche Referenzen

- IUPAC Gold Book: Definition des Universalindikators als Gemisch mehrerer pH-Indikatoren
  - https://goldbook.iupac.org/terms/view/09054
- University of Wisconsin: Umschlagsbereiche und pK-Werte gebräuchlicher Säure-Base-Indikatoren
  - https://www2.chem.wisc.edu/deptfiles/genchem/tables/IndicatorTable.htm
- Thermo Fisher Scientific: Umschlagsbereiche von Thymolblau
  - https://www.thermofisher.com/order/catalog/product/016272.09

## Projektdateien

- `index.html` – vollständige App
- `README.md` – Funktionsumfang und Entwicklungsstand
- `TESTPLAN.md` – fachliche und technische Prüfungen
