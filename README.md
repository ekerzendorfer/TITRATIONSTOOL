# TITRATIONSTOOL v15.1

## Schwerpunkt dieser Version

v15.1 erweitert die stabile Fassung v15.0.1 um eine kuratierte Stoffauswahl und eine freie Stoffeingabe. Das Rechenmodell bleibt weiterhin bewusst auf die Titration einer schwachen ein- oder zweiprotonigen Säure mit Natronlauge begrenzt.

## Hinterlegte Säuren

### Einprotonige schwache Säuren

- Ameisensäure – HCOOH – pKs 3,75 – M 46,025 g·mol⁻¹
- Essigsäure – CH₃COOH – pKs 4,76 – M 60,052 g·mol⁻¹
- Propionsäure – CH₃CH₂COOH – pKs 4,87 – M 74,079 g·mol⁻¹
- Milchsäure – CH₃CH(OH)COOH – pKs 3,86 – M 90,078 g·mol⁻¹
- Benzoesäure – C₆H₅COOH – pKs 4,20 – M 122,123 g·mol⁻¹

### Zweiprotonige schwache Säuren

- Oxalsäure – H₂C₂O₄ – pKs₁ 1,25; pKs₂ 4,28 – M 90,034 g·mol⁻¹
- Malonsäure – HOOC–CH₂–COOH – pKs₁ 2,83; pKs₂ 5,69 – M 104,061 g·mol⁻¹

Die Werte werden in der App ausdrücklich als schulgeeignete Näherungswerte für wässrige Lösungen bei etwa 25 °C bezeichnet. Die molaren Massen beziehen sich auf die wasserfreien Verbindungen.

## Bedienung

Bei der Auswahl eines hinterlegten Stoffes werden automatisch gesetzt und gesperrt:

- Zahl der Protonenstufen
- pKs₁
- gegebenenfalls pKs₂

Konzentration, Probenvolumen, Konzentration der Natronlauge, Schrittweite und Indikator bleiben frei wählbar.

Die Stoffkarte zeigt:

- Stoffname
- Formel
- molare Masse
- pKs-Wert beziehungsweise pKs-Werte
- Stofftyp

Eine einklappbare Stammdatentabelle bietet einen Überblick über alle hinterlegten Säuren.

## Freie Stoffeingabe

Die Auswahl **„Freie Eingabe / eigener Stoff“** schaltet folgende Felder frei:

- Stoffname
- Formel
- molare Masse
- ein- oder zweiprotonig
- pKs₁
- gegebenenfalls pKs₂

Name, Formel und molare Masse sind Pflichtfelder. Die App weist darauf hin, dass bei benutzerdefinierten Stoffen Löslichkeit, Gasgleichgewichte und Nebenreaktionen nicht automatisch geprüft werden. Das Rechenmodell behandelt den Stoff als ideales ein- oder zweiprotoniges Säuresystem.

## Hägg-Diagramm

Bei hinterlegten Säuren werden in der Legende nun die konkreten Spezies angezeigt, zum Beispiel:

- CH₃COOH / CH₃COO⁻
- H₂C₂O₄ / HC₂O₄⁻ / C₂O₄²⁻

Für frei eingegebene Stoffe bleiben die allgemeinen Bezeichnungen HA/A⁻ beziehungsweise H₂A/HA⁻/A²⁻ erhalten.

## Äquivalenzpunktbestimmung

Die Berechnung der ersten und zweiten Ableitung aus v15.0.1 bleibt erhalten. Für reale zweiprotonige Säuren wurde die Erkennung vorsichtig angepasst, damit auch ein deutlich schwächer ausgeprägtes erstes Maximum berücksichtigt werden kann.

Bei Oxal- und Malonsäure erscheint zusätzlich ein Hinweis, dass der erste Äquivalenzpunkt wegen der relativ nahe beieinanderliegenden pKs-Werte wesentlich schwächer ausgeprägt sein kann als der zweite.

## CSV-Export für MESSWERT_LAB

Der Metadatenblock enthält zusätzlich:

- Analyt_ID
- Analyt_Name
- Analyt_Formel
- Molare_Masse_g_mol
- Stoffdaten: Stammdaten oder Benutzerdefiniert
- Hinweis zu den pKs-Näherungswerten

Beispiel für einen Dateinamen:

```text
TITR_OXALIC_NAOH_20260802_103000.csv
```

Bei frei eingegebenen Stoffen wird der Stoffname in einen sicheren Dateinamen umgewandelt. Umlaute werden als AE, OE und UE geschrieben. Metadaten mit Semikolon, Anführungszeichen oder Zeilenumbrüchen werden korrekt als CSV-Felder maskiert.

## Bewusst nicht Bestandteil von v15.1

- starke Säuren
- starke Basen als Probe
- schwache Basen
- neue Indikatoren
- Thymolblau und Universalindikator
- neue Apparatur oder Animation
- Löslichkeits- und Gasgleichgewichte
- drei- oder mehrprotonige Säuren

Diese Punkte bleiben den nachfolgenden, getrennten Entwicklungsschritten vorbehalten.
