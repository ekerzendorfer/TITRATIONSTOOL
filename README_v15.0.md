# TITRATIONSTOOL v15.0 – erste Entwicklungsfassung

## Schwerpunkt

Diese Version stabilisiert den vorhandenen Prototyp fachlich und technisch, ohne den Funktionsumfang unnötig zu erweitern.

## Umgesetzt

- bestehende pH-Berechnung über die Ladungsbilanz beibehalten und numerisch abgesichert
- korrekte erste Ableitung an den Volumenmittelpunkten
- korrekte zweite Ableitung aus benachbarten ersten Ableitungen
- Unterstützung ungleicher Volumenschritte
- laufende Aktualisierung der Auswertung nach jedem Messpunkt
- automatische Äquivalenzpunktbestimmung: Maximum der ersten Ableitung plus positiv-negativer Nulldurchgang der zweiten Ableitung
- lineare Interpolation des Nulldurchgangs
- getrennte Diagrammansichten für Titrationskurve, erste und zweite Ableitung
- Trennung von stöchiometrischer Referenz und Messdatenauswertung
- Entfernung des versteckten Einrastens auf theoretische Zielvolumina
- einheitlicher Messbereich für manuelle und automatische Titration sowie Diagrammachse
- MESSWERT_LAB-kompatibler CSV-Export mit BOM, Semikolon, Dezimalkomma, Metadaten und Zeitstempel
- Eingabevalidierung und Warnungen
- responsive Grundgestaltung in Anlehnung an das Virtuelle Photometer
- eindeutige Beschriftung des statischen Hägg-Diagramms

## Noch nicht Bestandteil von v15.0

- neue Apparatur mit Bürette, Hahn, Tropfen, Rührer und pH-Elektrode
- dynamische lokale Indikatorfärbung
- zusätzliche Titrationstypen
- Messrauschen oder gestörte Messwerte
- dynamische Verdünnung im Hägg-Diagramm

## Nutzung

`index.html` direkt öffnen oder als Repository-Wurzel über GitHub Pages bereitstellen.

Die Diagramme verwenden Chart.js 4.4.7 über jsDelivr. Die übrige Anwendung ist in einer einzigen HTML-Datei enthalten.
