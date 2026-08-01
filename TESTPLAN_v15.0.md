# Prüfliste TITRATIONSTOOL v15.0

## Standardfall einprotonig

- c(Probe) = 0,100 mol/L
- V(Probe) = 20,0 mL
- c(Maßlösung) = 0,100 mol/L
- pKS1 = 4,75
- Schrittweite = 0,20 mL

Erwartete Kontrollwerte:

- Start-pH ungefähr 2,878
- Halbäquivalenzpunkt bei 10,0 mL: pH ungefähr 4,75
- stöchiometrischer Äquivalenzpunkt bei 20,0 mL
- berechneter pH am Äquivalenzpunkt ungefähr 8,72
- aus den Ableitungen bestimmter Äquivalenzpunkt nahe 20,0 mL

## Standardfall zweiprotonig

- gleiche Konzentrationen und Volumina
- pKS1 = 4,75
- pKS2 = 9,20
- Schrittweite = 0,20 mL

Erwartete Kontrollwerte:

- erster stöchiometrischer Äquivalenzpunkt bei 20,0 mL
- zweiter stöchiometrischer Äquivalenzpunkt bei 40,0 mL
- beide Ableitungskandidaten sollten nach ausreichend vielen Messpunkten getrennt erscheinen

## Funktionstests

- Ableitungen ändern sich nach jeder Zugabe automatisch.
- Die erste Ableitung liegt zwischen den ursprünglichen Messvolumina.
- Die zweite Ableitung liegt zwischen den Punkten der ersten Ableitung.
- Es wird nicht automatisch auf 10,0 / 20,0 / 30,0 / 40,0 mL eingerastet.
- Manuelle und automatische Titration stoppen an derselben Diagrammgrenze.
- Challenge verbirgt Referenzwerte und Ableitungsansichten bis zur Auflösung.
- CSV beginnt mit UTF-8-BOM und enthält Semikolon sowie Dezimalkomma.
- CSV enthält Rohdaten, aber keine Ableitungswerte.
- Layout bleibt auf Tabletbreite einspaltig und scrollbar.
