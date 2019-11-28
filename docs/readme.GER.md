<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  📓 Aufgaben, Boards & Notizen für Kommandozeilen-Enthusiasten
</h4>

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klauscfhq/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klauscfhq/taskbook.svg?branch=master">
  </a>
</p>

## Beschreibung

Durch die Verwendung einer einfachen, leicht zu verwendenden Syntax, die sich schnell erlernen lässt, ermöglicht es Taskbook Aufgaben und Notizen effizient über mehrere "Boards" hinweg zu verwalten - und das alles aus der Kommandozeile. Alle Daten werden automatisch im Speicher gesichert um Korrumpierung zu vermeiden, allerdings werden sie nie mit irgendjemandem/etwas geteilt.


Dieses Dokument in [简体中文](https://github.com/klauscfhq/taskbook/blob/master/docs/readme.ZH.md) lesen.
Dieses Dokument in  [Deutsch - German](https://github.com/klauscfhq/taskbook/blob/master/docs/readme.GER.md) lesen.
Dieses Dokument in  [Français - French](https://github.com/klaussinani/taskbook/blob/master/docs/readme.FR.md) lesen.
Dieses Dokument in [Русский - Russian](https://github.com/klaussinani/taskbook/blob/master/docs/readme.RU.md) lesen.

Lies die [contributing guidelines](https://github.com/klauscfhq/taskbook/blob/master/contributing.md#translating-documentation) um zu lernen, wie du dieses Dokument in mehr Sprachen übersetzen kannst.

Du kannst die Entwicklung dieses Projekts unterstützen und an [Open Collective](https://opencollective.com/klaussinani) spenden.

Besuch doch [Gitter](https://gitter.im/klauscfhq/taskbook) oder [Twitter](https://twitter.com/klauscfhq) um deine Anmerkungen zu diesem Projekt zu teilen.

## Höhepunkte

- Aufgaben und Notizen in "Boards" organisieren
- Board & Zeitverlauf Ansichten
- Mechanismen für Prioritäten & Favoriten 
- Elemente suchen & filtern
- Archivieren & gelöschte Elemente wiederherstellen
- speicherfreundlich & schnell
- Daten werden automatisch gesichert
- Speicherort ist einstellbar
- Übersicht des Fortschrittes
- einfache & leicht zu erlernende Syntax
- Benachrichtigungen bei Updates
- Konfiguration über `~/.taskbook.json`
- Daten werden in JSON-File gesichert `~/.taskbook/storage`

Die Höhepunkte in einem [taskbook board](https://raw.githubusercontent.com/klaussinani/taskbook/master/media/highlights.png) ansehen.

## Inhalt

- [Beschreibung](#beschreibung)
- [Höhepunkte](#höhepunkte)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Ansichten](#ansichten)
- [Konfiguration](#konfiguration)
- [Anleitung](#anleitung)
- [Development](#development)
- [Related](#related)
- [Team](#team)
- [Lizenz](#license)

### Yarn

```bash
yarn global add taskbook
```

### NPM

```bash
npm install --global taskbook
```

### Snapcraft

```bash
snap install taskbook
snap alias taskbook tb # set alias
```

**Anmerkung:** Die Speicher- & Konfigurations-Dateien werden unter der Umgebungsvariable [`$SNAP_USER_DATA`](https://docs.snapcraft.io/reference/env) statt der `$HOME` Variable gespeichert.

## Verwendung

```
$ tb --help

  Usage
    $ tb [<options> ...]

    Options
        none             Anzeigen der board Ansicht
      --archive, -a      archivierte Elemente anzeigen
      --begin, -b        einen Task starten/pausieren
      --check, -c        einen Task anhaken/abhaken
      --clear            alle markierten Elemente löschen
      --copy, -y         Beschreibung kopieren
      --delete, -d       Element löschen
      --edit, -e         Beschreibung des Elements anpassen
      --find, -f         nach Elementen suchen
      --note, -n         Notiz erstellen
      --help, -h         Hilfe-Nachricht anzeigen
      --list, -l         Elemente nach Attributen auflisten
      --move, -m         Element zwischen Boards verschieben
      --note, -n         Notiz erstellen
      --priority, -p     die Priorität neu setzen
      --restore, -r      archivierte Elemente wiederherstellen
      --star, -s         ein Sternchen bei einem Element setzen/entfernen
      --task, -t         Task erstellen
      --timeline, -i     Zeitübersicht anzeigen
      --version, -v      Version anzeigen

    Beispiele
      $ tb
      $ tb --archive
      $ tb --begin 2 3
      $ tb --check 1 2
      $ tb --clear
      $ tb --copy 1 2 3
      $ tb --delete 4
      $ tb --edit @3 Merge PR #42
      $ tb --find documentation
      $ tb --list pending coding
      $ tb --move @1 cooking
      $ tb --note @coding Mergesort worse-case O(nlogn)
      $ tb --priority @3 2
      $ tb --restore 4
      $ tb --star 2
      $ tb --task @coding @reviews Review PR #42
      $ tb --task @coding Improve documentation
      $ tb --task Make some buttercream
      $ tb --timeline
```

## Ansichten

### Board Ansicht

Wenn man taskbook ohne Optionen aufruft, dann werden alle gespeicherten Elemente gruppiert in den zugeordneten Boards angezeigt.

<div align="center">
  <img alt="Boards" width="60%" src='../media/header-boards.png' />
</div>

### Zeitleisten Ansicht

Um alle Elemente in einer Zeitleisten Ansicht, die auf dem Erstelldatum basiert, anzuzeigen kann die `--timeline`/`-i` Option verwendet werden.

<div align="center">
  <img alt="Timeline View" width="62%" src="../media/timeline.png"/>
</div>

## Konfiguration

Taskbook kann über das `~/.taskbook.json` File konfiguriert werden, indem man die Optionen anhand der eigenen Vorlieben anpasst. Um die Standardwerte wieder herzustellen, kann die Konfiguration einfach aus dem Home-Ordner gelöscht werden.

Nachfolgend werden die verfügbaren Optionen mit ihren default-Werten illustriert:

```json
{
  "taskbookDirectory": "",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### Im Detail

##### `taskbookDirectory`

- Type: `String`
- Default: `~`

Voller Pfad im Filesystem, wo die Daten gespeichert werden, z.B; `/home/username/the-cloud`

Wenn nicht definiert wird das Home-Directory `~` verwendet und taskbook wird unter `~/.taskbook/` aufgesetzt.

##### `displayCompleteTasks`

- Type: `Boolean`
- Default: `true`

Aufgaben anzeigen, die schon vervollständigt sind.

##### `displayProgressOverview`

- Type: `Boolean`
- Default: `true`

Übersicht über den Fortschritt unter den Timeline und Board Ansichten anzeigen.


## Anleitung

Es folgt eine oberflächliche Schritt-für-Schritt Beschreibung für taskbook inklusive einiger Beispiele.
Wenn ein Fehler gefunden wird oder ein Beispiel nicht klar genug ist, kann jederzeit ein 
[issue](https://github.com/klauscfhq/taskbook/issues/new/choose) oder [pull request](https://github.com/klauscfhq/taskbook/compare) gemacht werden.

### Task anlegen

Zum Anlegen eines neuen Tasks verwendet man die `--task`/`-t` Option mit der Beschreibung gleich dahinter.

```
$ tb -t Dokumentation verbessern
```

### Notiz anlegen

Zum Anlegen einer Notiz verwendet man die `--note`/`-n` Option mit der Notiz gleich dahinter

```
$ tb -n Mergesort worse-case O(nlogn)
```

### Board anlegen

Boards werden automatisch angelegt, wenn ein neuer Task oder eine neue Notiz angelegt werden. Um eines oder mehrere Boards anzulegen, muss deren Name mit Prefix `@` in der Beschreibung des Items inkludiert werden. Resultierend wird das angelegte Item in allen angegebenen Boards inkludiert. Standardmäßig werden alle Items,die keinen Boardnamen in der Beschreibung enthalten, zum Board `My Board` hinzugefügt.

```
$ tb -t @coding @docs Update contributing guidelines
```

### Task abhaken

Um einen Task als "abgehakt/offen" zu markeiren, verwendet man die `--check`/`-c` Option gefolgt von den IDs der Ziel-Tasks. Man beachte, dass die Option die Tasks zu ihrem Gegenteil updatet. Doppelte IDs werden herausgefiltert.

```
$ tb -c 1 3
```
### Mit einem Task beginnen

Um einen Task als begonnen/pausiert zu markeiren, wird die Option `--begin`/`-b` gefolgt von den IDs der Tasks verwendet. Die Funktionalität ist die selbe wie die der oben beschriebenen "check" option.

```
$ tb -b 2 3
```

### einem Element ein Sternchen geben

Um ein Element als Favorit zu markieren, wird die `--star`/`-s` Option gefolgt von den IDs verwendet. Die Funktionalität gleicht der `--check` Option.

```
$ tb -s 1 2 3
```

### Beschreibung eines Elements kopieren

Um die Beschreibung eines oder mehrerer Element in die Zwischenablage zu kopieren, wird die Option `--copy`/`-y` gefolgt von den IDs der Elemente verwendet. Die kopierten Beschreibungen werden durch den Newline-Charakter getrennt.

```
$ tb -y 1 2 3
```

### Boards anzeigen

Taskbook ohne Optionen aufzurufen zeigt alle gespeicherten Elemente gruppiert in die zugehörigen Boards an.

```
$ tb
```

### Timeline anzeigen

Um alle Elemente in einer Zeitleisten-Ansicht basierend auf deren Erstelldatum anzuzeigen kann die 
`--timeline`/`-i` Option verwendet werden.

```
$ tb -i
```

### Priorität festlegen

Um die Priorität für einen Task beim Initialisieren anzugeben, kann die `p:x` Syntax in der Task-Beschreibung verwendet werden. x kann eine Ganzzahl mit Wert `1`, `2` oder `3` sein. Alle Tasks werden standardmäßig mit Priorität `1`, normal, erzeugt.
 
- `1` - Normale Priorität 
- `2` - Mittlere Priorität
- `3` - Hohe Priorität

```
$ tb -t @coding Fix issue `#42` p:3
```

Um die Priorität eines Tasks nach dem Anlegen zu aktualisieren, wird die `--priority`/`-p` Option gemeinsam mit der ID des Tasks mit Prefix `@` vewrendet.Es kann eine Ganzzahl mit dem Wert `1`, `2` oder `3` vergeben werden. Die Reihenfolge von Task-ID und Priorität ist nicht von Bedeutung.

```
$ tb -p @1 2
```

### Elemente verschieben

Um ein Elemente in eines oder mehrere Boards zu verschieben verwendet man die `--move`/`-m` Option, gefolgt von der Ziel-Element-ID, mit einer Prefix `@` Symbol, und dem Namen der Zielboards. Default ist `My board` und kann über das `myboard` Schlüsselwort aufgerufen werden. Die Reihenfolge der Ziel-IDs und Boardsnamen ist nicht relevant.

```
$ tb -m @1 myboard reviews
```
### Angehakte Tasks löschen

Um alle bereits erledigten Tasks in allen Boards auf einen Schlag zu löschen kann die `--clear` Option verwendet werden. Alle gelöschten Tasks werden automatisch archiviert, können also zu einem späteren Zeitpunkt angsehen oder wiederhergestellt werden. Um ein versehentliches Löschen zu verhinder, hat die `--clear` Option keinen kürzeren Alias.

```
$ tb --clear
```

### Elemente löschen

Um eines oder mehrere Elemente zu löschen verwendet man die `--delete`/`-d` Option gefolgt von den ids der Items. Gelöschte Elemente werden automatisch archiviert und können jederzeit angesehen oder wiederhergestellt werden. Duplikate werden automatisch gefiltert.

```
$ tb -d 1 2
```

### Archiv anzeigen

Um alle archivierten Elemente anzuzeigen kann die `--archive`/`-a` Option verwendet werden. Alle archivierten Elemente werden in einer Zeitleisten-Ansicht angezeigt, die auf deren Erstelldatum basiert.

```
$ tb -a
```

### Elemente wiederherstellen

Um ein oder mehrere Elemente wiederherzustellen wird die `--restore`/`-r` Option gefolgt von den IDs der Elemente verwendet. Die IDs aller archivierten Items können mit der Option `--archive`/`-a` angesehen werden. Duplikate werden automatisch herausgefiltert.

```
$ tb -r 1 2
```

### Elemente auflisten

Um eine Gruppe von Elemente aufzulisten, wo jedes Element eine bestimmte Anzahl von Attributen hat, kann die Option `--list`/`-l` gefolgt von den gewünschten Attributen verwendet werden. Board Namen und Element-Merkmalen können valide Attribute sein. Um Beispielsweise alle Elemente, die ins `myboard` gehören und noch offen sind aufzulisten kann folgender Befehl verwendet werden:


```
$ tb -l myboard pending
```

Standardmäßig werden die folgenden Attribute zum auflisten unterstützt:

- `myboard` - Elemente die ins `My board` gehören
- `task`, `tasks`, `todo` - Elemente, die Tasks sind
- `note`, `notes` - Elemente, die Notizen sind
- `pending`, `unchecked`, `incomplete` - Elemente, die offene Tasks sind
- `done`, `checked`, `complete` - Elemente, die abgehakte Tasks sind
- `star`, `starred` - Favorisierte Elemente 

### Elemente suchen

Um eines oder mehrere Elemente zu suchen, kann man die `--find`/`-f` Option gefolgt von den Suchparametern verwenden

```
$ tb -f documentation
```

## Development

Mehr Informationen im Bezug auf Beiträge zum Projekt finden sich in den [contributing guidelines](https://github.com/klauscfhq/taskbook/blob/master/contributing.md).

- Das Repository forken und auf deine Maschine klonen
- Zum lokalen Fork navigieren: `cd taskbook`
- Die dependencies installieren: `npm install` oder `yarn install`
- Den Code für Fehler linten: `npm test` or `yarn test`

## Related

- [signale](https://github.com/klaussinani/signale) - Highly configurable logging utility
- [qoa](https://github.com/klaussinani/qoa) - Minimal interactive command-line prompts
- [hyperocean](https://github.com/klaussinani/hyperocean) - Deep oceanic blue Hyper terminal theme

## Team

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)
- Mario Sinani [(@mariosinani)](https://github.com/mariosinani)


## License

[MIT](https://github.com/klauscfhq/taskbook/blob/master/license.md)
