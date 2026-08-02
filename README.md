# TITRATIONSTOOL v15.5.0 – Becherglas-Animation und Tropfenzugabe

## Inhalt dieser Version

v15.5.0 ist der erste Animationsschritt mit echter Zugabesymbolik. Die Apparatur wurde auf ein didaktisch besser lesbares Becherglas-Layout umgestellt, damit die Lösung, die pH-Elektrode und die spätere lokale Farbwirkung deutlich sichtbar bleiben.

Enthalten sind:

- schlankere schematische Bürette,
- Becherglas statt Erlenmeyerkolben,
- größere sichtbare Farbfläche der Lösung,
- pH-Elektrode rechts im Becherglas,
- Kabel nach rechts zur pH-Meter-Anzeige,
- dynamischer Bürettenstand,
- dynamischer Flüssigkeitsstand im Becherglas,
- fallender Tropfen bei jeder Zugabe,
- kurz sichtbare lokale Schlieren-/Mischanimation im Becherglas,
- Rührfischbewegung,
- responsive Darstellung für Desktop und Tablet,
- Berücksichtigung von `prefers-reduced-motion`.

## Didaktisches Prinzip

Die Lösung im Becherglas zeigt weiterhin den vollständig durchmischten Zustand, der auch als Messpunkt gespeichert wird. Zusätzlich wird bei jeder Zugabe eine kurzzeitige lokale Farbwirkung eingeblendet. Diese Schlieren sind bewusst nur eine Visualisierung des Mischvorgangs und verändern die gespeicherten Messdaten nicht.

Die lokale Mischfarbe wird aus dem aktuellen Indikatormodell abgeleitet und in Zugaberichtung verschoben:

- NaOH-Zugabe: lokal etwas basischer als der gemessene Endzustand,
- HCl-Zugabe: lokal etwas saurer als der gemessene Endzustand.

So wird qualitativ sichtbar, warum nahe am Äquivalenzpunkt kurzzeitige lokale Farbunterschiede auftreten können.

## Unverändert

- alle vier Titrationsklassen,
- Stoffstammdaten und freie Stoffeingabe,
- erste und zweite Ableitung,
- Äquivalenzpunktbestimmung,
- Überblendung von Kurve und einer Ableitung,
- Indikator- und Farbmodelle,
- Challenge-Modus,
- MESSWERT_LAB-kompatibler CSV-Export.

## Bewusst noch nicht enthalten

- frei schwebendes, verschiebbares Apparaturfenster,
- animierte Hahnstellung,
- realistisch verzögerte Mischkinetik,
- akustische Effekte,
- Aufgabenmodus mit geführter Auswertung.

Ein optionales verschiebbares Apparaturfenster ist grundsätzlich denkbar, würde aber zusätzliche Anforderungen an Drag-and-Drop, Z-Ordnung, Responsivität und Barrierefreiheit stellen. Das sollte – wenn überhaupt – als eigener späterer Ergonomieschritt behandelt werden.
