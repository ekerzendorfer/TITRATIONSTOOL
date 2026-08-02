# TITRATIONSTOOL

**Browserbasiertes virtuelles Labor für Säure-Base-Titrationen, Protolysegleichgewichte und quantitative Titrationsauswertung**

[App starten](https://ekerzendorfer.github.io/TITRATIONSTOOL/) · [Repository](https://github.com/ekerzendorfer/TITRATIONSTOOL)

Das TITRATIONSTOOL verbindet die Simulation einer Säure-Base-Titration mit der fachlichen Auswertung der Messdaten. Es richtet sich vor allem an den Chemieunterricht der Sekundarstufe II, eignet sich in ausgewählten Bereichen aber auch für vertiefende Aufgaben in der Sekundarstufe I.

Die Anwendung läuft direkt im Browser. Eine Installation, Anmeldung oder Übertragung von Messdaten an einen Server ist nicht erforderlich.

## Was kann das TITRATIONSTOOL?

- starke Säuren mit einer starken Base titrieren
- schwache einprotonige Säuren mit einer starken Base titrieren
- schwache zweiprotonige Säuren mit einer starken Base titrieren
- starke Basen mit einer starken Säure titrieren
- schwache einprotonige Basen mit einer starken Säure titrieren
- Titrationskurven schrittweise oder automatisch aufnehmen
- erste und zweite Ableitung aus den Messwerten berechnen
- Äquivalenzpunkte aus Ableitungsextrema und Nulldurchgängen bestimmen
- Titrationskurve und Ableitung mit getrennten y-Achsen überlagern
- Indikatorfarben und Umschlagsbereiche vergleichen
- Hägg-Diagramme der Säure- beziehungsweise Basenspezies anzeigen
- Konzentrationen in mol/L und g/L auswerten
- unbekannte schwache Säuren über den Halbäquivalenzpunkt identifizieren
- Messdaten über eine definierte CSV-Schnittstelle an das MESSWERT_LAB übergeben

## Arbeitsbereiche

### Freies Labor

Im freien Labor können Titrationsart, Stoff, Konzentrationen, Probenvolumen, Tropfengröße und Indikator selbst gewählt werden. Neben hinterlegten Stoffen ist auch eine freie Eingabe möglich.

Die Messung kann in Einzelschritten oder als Auto-Titration durchgeführt werden. Während der Titration werden Apparatur, aktueller pH-Wert, Bürettenablesung und Titrationskurve laufend aktualisiert.

### Begleitende Aufgaben

Der Aufgabenbereich enthält neun kuratierte Aufgaben mit voreingestellten Versuchsparametern, Arbeitsauftrag, Ergebnisfeldern, gestuften Hinweisen und LehrerInnenlösung.

| Aufgabe | Schwerpunkt |
|---|---|
| Starke Säure – Äquivalenzpunkt bei pH 7 | grundlegende Kurvenauswertung |
| Essigsäure – ÄP aus der zweiten Ableitung | Nulldurchgang der zweiten Ableitung |
| Pyridin – geeigneten Indikator wählen | Indikatorbereich und Äquivalenz-pH |
| Oxalsäure – zwei Äquivalenzpunkte | zweiprotonige Säure |
| Unbekannte Salzsäure | Konzentration in mol/L und g/L |
| Unbekannte Essigsäure | quantitative Auswertung einer schwachen Säure |
| Unbekannte Ammoniaklösung | Auswertung einer fallenden Titrationskurve |
| Oxalsäure über den zweiten ÄP | stöchiometrischer Faktor 2 : 1 |
| Unbekannte schwache Säure aus dem HÄP | Stoffidentifikation über pH = pKₛ |

Bei den quantitativen Aufgaben werden neue Varianten zufällig erzeugt. Die Äquivalenzvolumina bleiben bewusst in einem schulisch gut handhabbaren Bereich.

## Enthaltene Stoffe

### Starke Säuren

- Salzsäure
- Salpetersäure

### Schwache einprotonige Säuren

- Chloressigsäure
- Ameisensäure
- Essigsäure
- Propionsäure
- Milchsäure
- Benzoesäure
- Pyridiniumchlorid beziehungsweise Pyridinium-Ion

### Schwache zweiprotonige Säuren

- Oxalsäure

### Starke Base

- Natronlauge

### Schwache Basen

- Ammoniak
- Methylamin
- Pyridin

Zusätzlich können eigene starke oder schwache Säuren und Basen mit den für das Modell notwendigen Stoffdaten angelegt werden.

## Indikatoren

Folgende Farbsysteme stehen zur Verfügung:

- Bromthymolblau
- Phenolphthalein
- Methylorange
- Thymolblau als zweistufiger Indikator
- Universalindikator als schematische pH-Farbskala

Die Umschlagsbereiche werden im Diagramm markiert. Die Anwendung vergleicht den pH-Wert am Äquivalenzpunkt mit dem gewählten Indikatorbereich. Der Universalindikator dient nur der groben pH-Abschätzung und nicht der präzisen Endpunkterkennung.

## Auswertung der Messdaten

Die Ableitungen werden unmittelbar aus den aufgenommenen Rohdaten berechnet. Eine Glättung oder Kurvenanpassung findet nicht statt.

Für zwei benachbarte Messpunkte gilt:

\[
V_i^{(1)}=\frac{V_i+V_{i+1}}{2}
\]

\[
D_i^{(1)}=\frac{pH_{i+1}-pH_i}{V_{i+1}-V_i}
\]

Die erste Ableitung wird am Volumenmittelpunkt eingetragen. Die zweite Ableitung wird entsprechend aus benachbarten Punkten der ersten Ableitung berechnet.

Der Äquivalenzpunkt wird nicht aus einem beliebigen Nulldurchgang abgeleitet. Das Programm verknüpft einen geeigneten Nulldurchgang der zweiten Ableitung mit einem ausreichend markanten Maximum beziehungsweise Minimum der ersten Ableitung. Damit werden steigende und fallende Titrationskurven nach demselben Auswertungsstandard behandelt.

Die vollständige Spezifikation steht in [`MESSWERT_LAB_SCHNITTSTELLE.md`](MESSWERT_LAB_SCHNITTSTELLE.md).

## CSV-Export für das MESSWERT_LAB

Der Export enthält:

- Volumen der Maßlösung in mL
- pH-Wert
- Versuchsparameter als Metadaten

Ableitungen, Äquivalenzpunkte und berechnete Konzentrationen werden bewusst nicht exportiert. Das MESSWERT_LAB berechnet diese Größen selbst nach dem verbindlichen Standard `TITR_AEP_V1`.

Wesentliche Schnittstellendaten:

```text
Schnittstelle: MESSWERT_LAB_CSV
Schnittstellen-Version: 1.0
Auswertungsstandard: TITR_AEP_V1
```

## Didaktische Einsatzmöglichkeiten

Das TITRATIONSTOOL eignet sich unter anderem für:

- Einführung und Vergleich von Titrationskurven
- Zusammenhang zwischen Säure- beziehungsweise Basenstärke und Kurvenform
- qualitative und quantitative Endpunkterkennung
- Vergleich von Titrationskurve, erster und zweiter Ableitung
- Auswahl geeigneter Indikatoren
- Halbäquivalenzpunkt und Beziehung \(pH=pK_\mathrm{s}\)
- Konzentrationsbestimmung aus dem Äquivalenzvolumen
- Auswertung zweiprotoniger Säuren
- Vorbereitung realer Titrationen
- Nachbereitung und Vertiefung experimenteller Messungen

## Modellgrenzen

Die Anwendung bildet ausgewählte schulisch relevante Protolyse- und Titrationssysteme ab. Sie ist kein allgemeines Gleichgewichts- oder Aktivitätsmodell.

Nicht beziehungsweise nur vereinfacht behandelt werden:

- Aktivitätskoeffizienten und Ionenstärke
- Temperaturabhängigkeit der Gleichgewichtskonstanten
- Carbonat-, Schweflige-Säure- und ähnliche gekoppelte Spezialsysteme
- dreiprotonige Säuren
- mehrprotonige schwache Basen
- schwache Säure mit schwacher Base
- Fällungs-, Redox- und komplexometrische Titrationen
- experimentelle Fehler wie Ablesefehler, unvollständige Durchmischung oder veränderte Maßlösungskonzentration

Die Apparatur ist bewusst schematisch dargestellt. Sie unterstützt die Orientierung im Versuchsablauf, ersetzt aber keine praktische Sicherheits- und Geräteunterweisung.

## Technische Hinweise

- Single-HTML-Anwendung
- HTML, CSS und JavaScript
- Diagramme mit Chart.js 4.4.7
- keine Installation und kein Build-Prozess
- geeignet für aktuelle Desktop- und Mobilbrowser
- responsive Oberfläche
- lokale Berechnung im Browser
- für das Laden von Chart.js ist eine Internetverbindung erforderlich

## Lokale Verwendung

Repository herunterladen oder klonen und `index.html` in einem aktuellen Browser öffnen. Für eine verlässliche Ausführung empfiehlt sich ein einfacher lokaler Webserver oder die bereitgestellte GitHub-Pages-Version.

## Projektstatus

Aktueller fachlicher Kernstand: **v15.6.3**

Enthalten sind das freie Labor, neun begleitende Aufgaben, die geführte quantitative Titrationsauswertung, die HÄP-Identifikationsaufgabe und die verbindliche MESSWERT_LAB-Schnittstelle 1.0.

## Entwicklung

Konzept, fachliche Ausrichtung und Projektleitung: **Mag. Erich Kerzendorfer**  
Fachliche und technische Überarbeitung im Dialog mit **ChatGPT**
