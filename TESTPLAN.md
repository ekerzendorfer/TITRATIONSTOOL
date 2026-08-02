# TESTPLAN – TITRATIONSTOOL v15.2.0

## 1. Struktur und Syntax

- [x] JavaScript-Syntax mit Node.js geprüft
- [x] keine doppelten HTML-IDs
- [x] Initialisierung ohne JavaScript-Laufzeitfehler mit Chart-Teststub
- [x] Desktop-Darstellung geprüft
- [x] Tablet-Darstellung geprüft
- [x] modales Stofffenster geöffnet und auf Überdeckung geprüft

## 2. Stoff- und Modellumschaltung

- [x] starke Säure zeigt HCl und HNO₃
- [x] schwache Säure zeigt ein- und zweiprotonige Säuren
- [x] starke Base zeigt NaOH
- [x] schwache Base zeigt Ammoniak, Methylamin und Pyridin
- [x] Säuren verwenden automatisch NaOH
- [x] Basen verwenden automatisch HCl
- [x] pKₛ-Felder werden bei starken Systemen ausgeblendet
- [x] schwache Basen zeigen den pKₛ-Wert der konkreten konjugierten Säure
- [x] Protonenstufen sind nur bei einer frei eingegebenen schwachen Säure veränderbar

## 3. Kontrollrechnungen

Standardbedingungen:

- c(Probe) = 0,100 mol/L
- V(Probe) = 20,000 mL
- c(Maßlösung) = 0,100 mol/L
- Soll-Äquivalenzvolumen = 20,000 mL
- Schrittweite = 0,200 mL

### Starke Säure mit NaOH

HCl:

- [x] Start-pH = 1,000000
- [x] pH am Äquivalenzpunkt = 7,000000
- [x] aus Ableitungen bestimmter ÄP = 19,999745 mL

HNO₃:

- [x] identische idealisierte Kurvenform wie HCl
- [x] aus Ableitungen bestimmter ÄP = 19,999745 mL

### Schwache Säure mit NaOH

Essigsäure:

- [x] Start-pH = 2,882863
- [x] pH am Halbäquivalenzpunkt = 4,760452
- [x] pH am Äquivalenzpunkt = 8,729537
- [x] aus Ableitungen bestimmter ÄP = 19,999226 mL

Oxalsäure:

- [x] erster ÄP = 20,057922 mL
- [x] zweiter ÄP = 39,999369 mL

Malonsäure:

- [x] erster ÄP = 20,0039 mL
- [x] zweiter ÄP = 39,9990 mL

### Starke Base mit HCl

NaOH:

- [x] Start-pH = 13,000000
- [x] pH am Äquivalenzpunkt = 7,000000
- [x] Minimum der ersten Ableitung wird verwendet
- [x] negativ-positiver Nulldurchgang der zweiten Ableitung wird verwendet
- [x] aus Ableitungen bestimmter ÄP = 19,999745 mL

### Schwache Base mit HCl

Ammoniak:

- [x] Start-pH = 11,122104
- [x] pH am Halbäquivalenzpunkt = 9,249537
- [x] pH am Äquivalenzpunkt = 5,275461
- [x] aus Ableitungen bestimmter ÄP = 19,999228 mL

Methylamin:

- [x] Start-pH = 11,8153
- [x] aus Ableitungen bestimmter ÄP = 19,9995 mL

Pyridin:

- [x] Start-pH = 9,1150
- [x] aus Ableitungen bestimmter ÄP = 19,9845 mL

## 4. Ungleiche Volumenschritte

Mit wechselnden Schritten von 0,17 bis 0,43 mL:

- [x] Essigsäure: ÄP = 19,98822 mL
- [x] Ammoniak: ÄP = 19,98822 mL
- [x] NaOH mit HCl: ÄP = 19,98791 mL

Damit bleibt die Mittelpunktzuordnung der ersten und zweiten Ableitung auch bei ungleichmäßiger Dosierung wirksam.

## 5. Hägg-Diagramm

- [x] schwache einprotonige Säure: HA/A⁻
- [x] schwache zweiprotonige Säure: H₂A/HA⁻/A²⁻
- [x] schwache Base: BH⁺/B
- [x] aktuelle pH-Markierung wird nachgeführt
- [x] starke Säure/Base zeigt statt eines unnötigen Diagramms einen fachlichen Hinweis

## 6. Diagramme und Ableitungen

- [x] Titrationskurve steigt bei Säuren und fällt bei Basen
- [x] erste Ableitung besitzt bei Säuren ein Maximum
- [x] erste Ableitung besitzt bei Basen ein Minimum
- [x] zweite Ableitung verwendet den zur Kurvenrichtung passenden Nulldurchgang
- [x] Überblendung mit genau einer Ableitung bleibt verfügbar
- [x] pH-Kurve und Ableitung verwenden getrennte y-Achsen

## 7. Stofffenster

- [x] öffnet als modaler Dialog in der obersten Browser-Ebene
- [x] kann nicht hinter dem rechten Arbeitsbereich verschwinden
- [x] enthält alle 13 Stammdatenstoffe
- [x] schwache Basen sind mit pKₛ der konjugierten Säure gekennzeichnet
- [x] Tabelle ist bei geringer Breite horizontal scrollbar

## 8. Export

Manuell zu prüfen:

- [ ] UTF-8-BOM
- [ ] Semikolon und Dezimalkomma
- [ ] Dateiname mit Analyt, Maßlösung und Zeitstempel
- [ ] korrekter Titrationsart-Code für alle vier Grundfälle
- [ ] Analytname, Formel, Klasse und molare Masse
- [ ] Maßlösung mit Name und Formel
- [ ] pKₛ-Felder leer bei starken Systemen
- [ ] `pKs_Bedeutung = Konjugierte_Saeure` bei schwachen Basen
- [ ] keine Ableitungswerte im Rohdatenblock

## 9. Noch nicht Bestandteil dieser Version

- Aufgabenmodus
- Säureidentifikation über den Halbäquivalenzpunkt
- geführte Berechnung der unbekannten Konzentration in mol/L und g/L
- Thymolblau und Universalindikator
- neue Apparatur und Tropfenanimation
