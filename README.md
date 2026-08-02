# TITRATIONSTOOL v15.6.1 – geführte Titrationsauswertung

## Inhalt dieser Version

v15.6.1 erweitert den Aufgabenmodus um vier zufallsgenerierte Aufgaben zur quantitativen Titrationsauswertung. Die vier Pilotaufgaben aus v15.6.0 bleiben erhalten.

Der Aufgabenpool umfasst nun acht Aufgaben:

1. starke Säure – Äquivalenzpunkt bei pH 7,
2. Essigsäure – ÄP aus der zweiten Ableitung,
3. Pyridin – geeigneten Indikator wählen,
4. Oxalsäure – zwei Äquivalenzpunkte,
5. unbekannte Salzsäure – Konzentration bestimmen,
6. unbekannte Essigsäure – mol/L und g/L,
7. unbekannte Ammoniaklösung – Konzentration bestimmen,
8. Oxalsäure – geführte Auswertung über den zweiten ÄP.

## Zufallsvarianten

Bei jedem erneuten Laden einer geführten Auswertungsaufgabe wird eine neue Variante erzeugt. Eine direkte Wiederholung desselben Äquivalenzvolumens wird vermieden.

Die Verbräuche bleiben bewusst moderat:

- einprotonige Systeme: Äquivalenzvolumen 8,0 bis 16,0 mL,
- Oxalsäure: zweites Äquivalenzvolumen 12,0 bis 18,0 mL.

Die Probenkonzentration wird aus dem zufällig gewählten Zielvolumen berechnet und im SchülerInnenmodus verborgen.

## Geführte Rechenschritte

Die Aufgaben prüfen die Schritte einzeln:

1. Äquivalenzvolumen,
2. Stoffmenge der Maßlösung in mmol,
3. Stoffmengenverhältnis,
4. Stoffmenge des Analyten,
5. Konzentration in mol/L,
6. Massenkonzentration in g/L.

Jeder Schritt erhält eine eigene Rückmeldung und einen kurzen methodischen Hinweis. Die LehrerInnenlösung zeigt den vollständigen Rechenweg mit den Werten der aktuellen Zufallsvariante.

## Schutz der Aufgabenlösung

Bei Aufgaben mit unbekannter Probenkonzentration:

- wird das Konzentrationsfeld als „unbekannt“ dargestellt,
- bleiben automatische Äquivalenzpunktanzeigen verborgen,
- ist der CSV-Export bis zum Einblenden der LehrerInnenlösung deaktiviert.

## Schnittstelle

Die Datei `MESSWERT_LAB_SCHNITTSTELLE.md` bleibt unverändert verbindlich. Die CSV-Rohdaten enthalten weiterhin nur Volumen und pH; alle Ableitungen und Äquivalenzpunkte werden im MESSWERT_LAB berechnet.
