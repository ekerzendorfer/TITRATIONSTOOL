# TITRATIONSTOOL v15.6.0 – Aufgaben-Grundgerüst

## Inhalt dieser Version

v15.6.0 ergänzt erstmals einen eigenen Bereich **Begleitende Aufgaben**. Das freie Labor bleibt vollständig erhalten. Zwischen beiden Arbeitsbereichen kann über einen gut sichtbaren Umschalter gewechselt werden.

Das Aufgaben-Grundgerüst enthält:

- Aufgabenkatalog mit Niveau, Zeitbedarf und Lernziel,
- automatisches Laden fachlich passender Versuchseinstellungen,
- Sperren der vorgegebenen Parameter,
- Arbeitsauftrag und Ergebnisfelder,
- abgestufte Hinweise,
- automatische Prüfung mit Toleranzbereichen,
- ausblendbare LehrerInnenlösung,
- Unterdrückung automatischer Äquivalenzpunkt- und Indikatorlösungen während der Bearbeitung.

## Vier Pilotaufgaben

1. **Starke Säure – Äquivalenzpunkt bei pH 7**  
   Salzsäure mit Natronlauge; Äquivalenzvolumen und pH-Wert bestimmen.

2. **Essigsäure – ÄP aus der zweiten Ableitung**  
   Nulldurchgang der zweiten Ableitung als Auswertungsmethode verwenden.

3. **Pyridin – geeigneten Indikator wählen**  
   Die Lage des sauren Äquivalenzbereichs mit den hinterlegten Umschlagsbereichen vergleichen.

4. **Oxalsäure – zwei Äquivalenzpunkte**  
   Beide Äquivalenzvolumina einer zweiprotonigen Säure bestimmen.

## Stabilisierte MESSWERT_LAB-Schnittstelle

Die CSV-Schnittstelle trägt ab v15.6.0 die Kennungen:

- `Schnittstelle = MESSWERT_LAB_CSV`
- `Schnittstellen_Version = 1.0`
- `Auswertungsstandard = TITR_AEP_V1`

Exportiert werden ausschließlich die beiden Rohdatenspalten

- `Volumen_Massloesung_mL`
- `pH`

sowie ein Metadatenblock mit allen Versuchsparametern. Ableitungen und Äquivalenzpunkte werden nicht exportiert.

Für eine reproduzierbare Auswertung werden Volumen und pH mit zehn Dezimalstellen gespeichert. Die interne Ableitungsauswertung des TITRATIONSTOOL verwendet ab dieser Version exakt dieselbe Zahlenbasis wie der Export.

Die verbindliche Beschreibung steht in `MESSWERT_LAB_SCHNITTSTELLE.md`.

## Noch nicht enthalten

- geführte Konzentrationsauswertung in mol/L und g/L,
- Säureerkennung über Halbäquivalenzpunkt und pH = pKs,
- größerer Aufgabenpool,
- Speicherung individueller Arbeitsergebnisse,
- automatisches Aufgabenprotokoll.

Diese Funktionen folgen in getrennten, kleinen Entwicklungsschritten.
