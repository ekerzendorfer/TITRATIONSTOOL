# TITRATIONSTOOL v15.4.0 – schematische Apparatur

## Inhalt dieser Version

v15.4.0 ist der erste bewusst abgegrenzte Schritt zur neuen Titrationsanimation. Die bisherige einfache Becherglasdarstellung wurde durch eine kompakte schematische Apparatur ersetzt.

Enthalten sind:

- Bürette mit Skala, Hahn und Spitze,
- dynamisch sinkender Flüssigkeitsstand in der Bürette,
- Erlenmeyerkolben mit dynamisch steigendem Gesamtvolumen,
- kontinuierliche Kolbenfarbe aus dem vorhandenen Indikatormodell,
- pH-Elektrode,
- Magnetrührer mit einfacher Rührfischbewegung,
- Bürettenablesung und Gesamtvolumen im digitalen Anzeigefeld,
- responsive Darstellung für Desktop und Tablet,
- Berücksichtigung von `prefers-reduced-motion`.

## Fachliches und technisches Prinzip

Die Apparatur ist ausschließlich eine Visualisierung des bereits berechneten Simulationszustands. Sie führt selbst keine pH-, Gleichgewichts- oder Äquivalenzpunktberechnung durch.

Der dynamische Bürettenstand wird relativ zum festgelegten Messbereich dargestellt. Die Anzeige ist daher schematisch und keine maßstäbliche 50-mL-Bürette. Die numerische Bürettenablesung zeigt weiterhin das tatsächlich zugegebene Volumen.

Der Flüssigkeitsstand im Kolben nimmt mit dem Gesamtvolumen zu. Die Farbe entspricht dem vollständig durchmischten Zustand, der auch als Messpunkt gespeichert wird.

## Bewusst noch nicht enthalten

- fallender Tropfen,
- Öffnungsbewegung des Bürettenhahns,
- kurzzeitiger lokaler Farbfleck,
- zeitlich verzögertes Durchmischen,
- besondere Animation bei manueller Langdruckzugabe,
- Geräusch oder fotorealistische Darstellung.

Diese Punkte sollen erst in einem folgenden kleinen Entwicklungsschritt ergänzt werden. Dadurch bleiben Rechenlogik und Animation getrennt und leichter prüfbar.

## Unverändert

- alle vier Titrationsklassen,
- Stoffstammdaten und freie Stoffeingabe,
- erste und zweite Ableitung,
- Äquivalenzpunktbestimmung,
- Indikator- und Farbmodelle,
- Challenge-Modus,
- MESSWERT_LAB-kompatibler CSV-Export.

## Späterer Aufgabenmodus

Weiterhin vorgesehen sind:

1. Säureerkennung bei einprotonigen schwachen Säuren über Äquivalenzpunkt, Halbäquivalenzpunkt und `pH = pKs`,
2. geführte Konzentrationsauswertung in mol/L und g/L.
