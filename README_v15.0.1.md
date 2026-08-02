# TITRATIONSTOOL v15.0.1 – Diagrammüberblendung

## Zweck des Zwischenschritts

Diese Patch-Version erweitert v15.0 ausschließlich um eine optionale Überblendung der Titrationskurve mit einer Ableitungsansicht. Die fachliche Berechnung, Äquivalenzpunktbestimmung, Datenerfassung und der MESSWERT_LAB-Export wurden nicht verändert.

## Neu

- In der Ansicht **1. Ableitung** kann die Titrationskurve optional eingeblendet werden.
- In der Ansicht **2. Ableitung** kann die Titrationskurve optional eingeblendet werden.
- Erste und zweite Ableitung werden weiterhin niemals gleichzeitig angezeigt.
- Die Ableitung verwendet die linke y-Achse.
- Die überblendete pH-Kurve verwendet eine eigene rechte y-Achse von pH 0 bis 14.
- In der zweiten Ableitung bleiben Nulllinie und interpolierter Äquivalenzpunkt sichtbar.
- Bei eingeschalteter Überblendung erläutert die Diagrammbeschriftung den Zusammenhang:
  - Maximum der ersten Ableitung ↔ steilster Bereich der Titrationskurve
  - Nulldurchgang der zweiten Ableitung ↔ Wendebereich der Titrationskurve
- In der reinen Titrationskurvenansicht wird der Überblendungsschalter ausgeblendet.
- Im ungelösten Challenge-Modus bleibt die Funktion gemeinsam mit den Ableitungsansichten gesperrt.

## Unverändert gegenüber v15.0

- pH-Berechnung über die Ladungsbilanz
- erste und zweite Ableitung an den korrekten Volumenpositionen
- Äquivalenzpunktbestimmung und lineare Interpolation
- stöchiometrische Referenzwerte
- MESSWERT_LAB-kompatibler CSV-Export
- Eingabevalidierung und Warnungen
- Hägg-Diagramm

## Nutzung

`index.html` direkt öffnen oder in die Repository-Wurzel kopieren und über GitHub Pages bereitstellen.

Chart.js 4.4.7 wird weiterhin über jsDelivr geladen.
