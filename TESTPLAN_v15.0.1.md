# Prüfliste TITRATIONSTOOL v15.0.1

## Überblendung

1. Eine Titration mit genügend Messpunkten aufnehmen.
2. **1. Ableitung** wählen.
3. **Titrationskurve überblenden** aktivieren.
4. Prüfen:
   - grüne Ableitung mit linker Achse
   - blaue pH-Kurve mit rechter Achse
   - Maximum der Ableitung im steilsten Bereich der pH-Kurve
5. **2. Ableitung** wählen.
6. Prüfen:
   - rote zweite Ableitung mit linker Achse
   - blaue pH-Kurve mit rechter Achse
   - Nulllinie sichtbar
   - Äquivalenzpunkt am Nulldurchgang markiert
7. Überblendung ausschalten.
8. Prüfen, dass pH-Kurve und rechte Achse vollständig verschwinden.
9. **Titrationskurve** wählen.
10. Prüfen, dass der Überblendungsschalter ausgeblendet ist.

## Challenge-Modus

- Vor Auflösung der Challenge bleiben beide Ableitungsansichten und damit die Überblendung gesperrt.
- Nach der Auflösung steht die Überblendung normal zur Verfügung.

## Regressionstest Standardfall

- einprotonige Säure
- c(Probe) = 0,100 mol/L
- V(Probe) = 20,0 mL
- c(Maßlösung) = 0,100 mol/L
- pKS1 = 4,75
- Schrittweite = 0,20 mL

Erwartet:

- 161 Messpunkte bis 32,0 mL
- interpolierter Äquivalenzpunkt ungefähr 19,999 mL
- CSV-Struktur und Metadaten unverändert gegenüber v15.0

## Automatische Prüfungen der Entwicklungsfassung

- JavaScript-Syntax: bestanden
- HTML-Struktur und eindeutige IDs: bestanden
- Berechnung des Standard-Äquivalenzpunkts: 19,999228 mL
- getrennte Achsenzuordnung der Überblendung: bestanden
- Ein- und Ausschalten der rechten pH-Achse: bestanden
- Nulllinie in der zweiten Ableitung: bestanden
