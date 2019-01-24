<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  📓 Tâches, tableaux et notes utilisables dans un invité de commande.
</h4>

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/taskbook.svg?branch=master">
  </a>
</p>

## Présentation

En utilisant une syntaxe simple et minimaliste, rendant son apprentissage plus efficace, taskbook vous permet de gérer efficacement vos tâches et vos notes via plusieurs tableaux dans le terminal. Toutes les données sont automatiquement écrites dans un fichier de stockage afin d'éviter toutes corruptions de celles-ci. Elles ne sont jamais partagées à qui que ce soit. Toutes les tâches et notes sont automatiquement archivées et peuvent être consultées ou restaurées à tout moment.

Lire la documentation en : [简体中文](https://github.com/klaussinani/taskbook/blob/master/docs/readme.ZH.md), [Русский](https://github.com/klaussinani/taskbook/blob/master/docs/readme.RU.md), [Français](https://github.com/klaussinani/taskbook/blob/master/docs/readme.FR.md).

Vous pouvez visiter le [guide de contribution](https://github.com/klaussinani/taskbook/blob/master/contributing.md#translating-documentation) pour en savoir plus sur la traduction de ce document dans d'autres langages.

Venez sur [Gitter](https://gitter.im/klaussinani/taskbook) ou [Twitter](https://twitter.com/klaussinani) pour partager vos idées sur le projet.

## Points forts

- Organiser des tâches & des notes sur des tableaux
- Vues tableau & frise chronologique
- Fonctionnalités de priorité & de favori
- Recherche & filtre de tâches et de notes
- Archivage & restauration des tâches et des notes supprimées
- Léger & rapide
- Données écrites automatiquement dans l'emplacement de stockage
- Emplacement de stockage personnalisable
- Vue d'ensemble sur les progrés
- Syntaxe simple & minimaliste
- Notifications de mise à jour
- Configurable via `~/.taskbook.json`
- Données stockées dans le fichier JSON `~/.taskbook/storage`

Image des points forts dans [tableau taskbook](https://raw.githubusercontent.com/klaussinani/taskbook/master/media/highlights.png) en anglais.

## Sommaire

- [Présentation](#présentation)
- [Points forts](#points-forts)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Vues](#vues)
- [Configuration](#configuration)
- [Manuel de vol](#manuel-de-vol)
- [Développement](#développement)
- [Applications associées](#applications-associées)
- [Équipe](#équipe)
- [License](#license)

## Installation

### NPM

```bash
npm install --global taskbook
```

### Snapcraft

```bash
snap install taskbook
snap alias taskbook tb # set alias
```

**Note:** À cause du confinement naturel de snap, les fichiers de stockage et de configuration seront sauvegardés sous la variable d'environnement [`$SNAP_USER_DATA`](https://docs.snapcraft.io/reference/env) à la place du `$HOME` habituel.

## Utilisation

```
$ tb --help

  Usage
    $ tb [<options> ...]

    Options
        none             Affiche la vue tableau
      --task, -t         Créé une tâche
      --note, -n         Créé une note
      --timeline, -i     Affiche la vue frise chronologique
      --delete, -d       Supprime une tâche ou une note
      --check, -c        Coche/décoche une tâche
      --star, -s         Ajoute aux favoris/Supprime des favoris une tâche ou une note
      --copy, -y         Copie la description d'une tâche ou d'une note
      --list, -l         Liste les tâches et les notes par attributs
      --find, -f         Cherche une tâche ou une note
      --edit, -e         Modifie la description d'une tâche ou d'une note
      --move, -m         Déplace une tâche ou une note entre des tableaux
      --priority, -p     Met à jour la priorité d'une tâche
      --archive, -a      Affiche les tâches et les notes qui sont archivées
      --restore, -r      Restaure les tâches et notes qui sont dans l'archive
      --clear            Supprime toutes les tâches et notes cochées
      --help, -h         Affiche le message d'aide
      --version, -v      Affiche la version de taskbook

    Examples
      $ tb
      $ tb --task Preparer de la creme glacee
      $ tb --task @coding Ameliorer la documentation
      $ tb --task @coding @reviews Revue PR #42
      $ tb --note @coding Trie avec fusion est dans le pire cas de complexite O(nlogn)
      $ tb --check 1 2
      $ tb --delete 4
      $ tb --star 2
      $ tb --copy 1 2 3
      $ tb --priority @3 2
      $ tb --timeline
      $ tb --edit @3 Fusionner PR #42
      $ tb --move @1 cuisinner
      $ tb --find documentation
      $ tb --list pending coding
      $ tb --archive
      $ tb --restore 4
      $ tb --clear
```

## Vues

### Vue Tableau

Appeler taskbook sans option affichera toutes les tâches et notes sauvegardées dans leurs tableaux respectifs.

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

### Vue Frise Chronologique

Afin d'afficher toutes les tâches et notes dans la vue Frise Chronologique, en se basant sur leurs date de création, utilisez l'option `--timeline`/`-i`.

<div align="center">
  <img alt="Timeline View" width="62%" src="../media/timeline.png"/>
</div>

## Configuration

Pour configurer taskbook, il faut se rendre dans le fichier `~/.taskbook.json` et modifier les options afin de s'adapater au mieux à vos préférences. Pour restaurer la configuration par défaut, il suffit de supprimer le fichier de configuration de votre répertoire personnel (home).

Le JSON suivant illustre l'ensemble des options existantes avec leurs valeurs par défaut respectives.

```json
{
  "taskbookDirectory": "~",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### En détail

##### `taskbookDirectory`

- Type: `String`
- Par défaut: `~`

Le chemin dans l'arborescence des fichiers où le stockage sera initialisé sera `/home/username/the-cloud` ou `~/the-cloud`

S'il n'est pas défini, le répertoire personnel (home) `~` sera utilisé et taskbook sera installé sous `~/.taskbook/`.

##### `displayCompleteTasks`

- Type: `Boolean`
- Par défaut: `true`

Affiche les tâches qui sont marquées comme completées.

##### `displayProgressOverview`

- Type: `Boolean`
- Par défaut: `true`

Affiche la vue d'ensemble sur la progression en dessous des vues de frise chronologiques et de tableaux.

## Manuel de vol

Ce qui va suivre est un guide d'exemple permettant de mieux comprendre comment utiliser taskbook.
Dans le cas où vous auriez remarqué une erreur ou que vous pensez que les exemples ne sont pas assez clair, qu'ils devraient être améliorés, alors n'hésitez pas à ouvrir une [issue](https://github.com/klaussinani/taskbook/issues/new/choose) ou une [pull request](https://github.com/klaussinani/taskbook/compare).

### Créer une tâche

Pour créer une nouvelle tâche, utilisez l'option `--task`/`-t` suivi de la description de la tâche.

```
$ tb -t Ameliorer la documentation
```

### Créer une note

Pour créer une nouvelle note, utilisez l'option `--note`/`-n` suivi du contenu de la note.

```
$ tb -n Tri par fusion pire cas O(nlogn)
```

### Créer un tableau

Les tableaux sont automatiquement initialisés lorsque l'on créé une nouvelle tâche ou une nouvelle note. Pour créer un ou plusieurs tableaux, ajoutez leurs noms préfixé du symbole `@`, dans la description de la tâche ou de la note qui va être créée. Par conséquent, la nouvelle tâche ou la nouvelle note appartiendra à l'ensemble des tableaux mentionnés. Par défaut, les tâches ou les notes qui ne possèdent pas de tableau dans leurs descriptions sont automatiquements ajoutés au tableau général `My Board`.

```
$ tb -t @coding @docs Mettre à jour le guide de contribution
```

### Valider une tâche

Pour passer une tâche à complété ou non complété, utilisez l'option `--check`/`-c` suivi par les identifiants des tâches sélectionnées. Il est à noter que l'option va inverser le statut actuel de complétion de la tâche, ainsi une tâche incomplète sera passé à complète et une tâche complète à incomplète. S'il existe des duplicatas d'identifiants, ils seront automatiquement filtrés.

```
$ tb -c 1 3
```

### Ajouter une tâche ou une note aux favoris

Pour ajouter une ou plusieurs tâches/notes aux favoris, utilisez l'option `--star`/`-s` suivi des identifiants des tâches/notes sélectionnées. Les fonctionnalités de cette option sont les mêmes que celles décrites au dessus pour l'option `--check`.

```
$ tb -s 1 2 3
```

### Copier la description d'une tâche ou d'une note

Afin de copier dans le presse-papier de votre système d'une ou plusieurs tâches et/ou notes, utilisez l'option `--copy`/`-y` suivi des identifiants des tâches/notes. Il est important de noter que l'option inclut aussi les caractères de retour à la ligne comme séparateurs pour chaque paire de description adjacente, créant ainsi une pile de phrases claire et lisible au moment de coller.

```
$ tb -y 1 2 3
```

### Afficher les tableaux

Appeler la commande taskbook sans option affichera toutes les tâches et notes sauvegardés dans leurs tableaux respectifs.

```
$ tb
```

### Afficher la Frise Chronologique

Pour afficher toutes les tâches et notes de la vue frise chronologique, en se basant sur leurs dates de création, il faut utiliser l'option `--timeline`/`-i`.

```
$ tb -i
```

### Choisir un niveau de priorité

Afin de donner un niveau de priorité à une tâche lors de son initialisation, ajoutez la syntaxe suivante dans la description de la tâche `p:x`, avec `x` pouvant prendre comme valeurs `1`,`2` ou `3`. Les tâches créées par défaut prennent la priorité `1`.

- `1` - Priorité normale
- `2` - Priorité moyenne
- `3` - Priorité élevée

```
$ tb -t @coding Fix issue `#42` p:3
```

Pour mettre à jour le niveau de priorété d'un tâche après sa création, utilisez l'option `--priority`/`-p` suivi de l'identifiant de la tâche choisie, préfixé du symbole `@` et un chiffre parmis `1`, `2` ou `3`. Notez que l'ordre entre l'identifiant ou le niveau de priorité n'a pas d'importance.

```
$ tb -p @1 2
```

### Déplacer une tâche ou une note

Pour déplacer une tâche ou une note sur un ou plusieurs tableaux, utilisez l'option `--move`/`-m` suivi de l'identifiant de la tâche ou de la note sélectionnée, préfixé du symbole `@` et du nom du/des tableau/x de destination. Le tableau par défaut `My board` peut être accédé via le mot clef `myboard`. L'ordre entre l'identifiant de la cible et les noms des tableaux n'a pas d'importance.

```
$ tb -m @1 myboard reviews
```

### Supprimer une ou plusieurs tâches ou notes

Pour supprimer une ou plusieurs tâches ou notes, utilisez l'option `--delete`/`-d` suivi des identifiants des éléments ciblés. Les éléments supprimés sont automatiquement archivés et peuvent être inspéctés ou restaurés à n'importe quel moment. Les duplicatas d'identifiants sont automatiquement filtrés.

```
$ tb -d 1 2
```

### Supprimer toutes les tâches validées

Afin de supprimer toutes les tâches que vous avez validées au moins une fois sur l'ensemble des tableaux, utilisez l'option `--clear`. Toutes les tâches supprimées sont automatiquement archivées et peuvent être consultées ou restaurées à n'importe quel moment. Afin d'éviter tout accident de suppression, l'option `--clear` n'existe pas dans une forme plus courte.

```
$ tb --clear
```

### Afficher l'archive

Pour afficher toutes les tâches et notes archivées, utilisez l'option `--archive`/`-a`. Toutes les éléments sont affichés en vue frise chronologique en se basant sur leur date de création.

```
$ tb -a
```

### Restaurer une tâche ou une note

Pour restaurer une ou plusieurs tâches/notes, utilisez l'option `--restore`/`-r` suivi des identifiants des tâches ou notes selectionnées. Les identifiants des éléments archivés peuvent être affichés en appelant l'option `--archive`/`-a`. Les duplicatas d'identifiants sont automatiquement filtrés.

```
$ tb -r 1 2
```

### Liste de tâches ou de notes

Pour lister un groupe d'éléments qui correspondent chacun à un certain nombre d'attributs, utilisez l'option `--list`/`-l` suivi des attributs souhaités. Les noms des tableaux et les caractéristiques d'une tâche ou d'une note sont des attributs valides. Par exemple, pour lister tous les éléments qui correspondent au tableau par défaut `myboard` et qui sont des tâches qui ne sont pas encore validées, le code suivant peut être utilisé.

```
$ tb -l myboard pending
```

La liste des attributs supportés par défaut, avec leurs alias respectifs, est la suivante :

- `myboard` - Tâches et notes appartenant à `My board`
- `task`, `tasks`, `todo` - Éléments qui sont des tâches.
- `note`, `notes` - Éléments qui sont des notes.
- `pending`, `unchecked`, `incomplete` - Éléments qui sont des tâches non validées.
- `done`, `checked`, `complete` - Éléments qui sont des tâches validées.
- `star`, `starred` - Éléments qui sont des favoris.

### Recherche de tâches ou notes

Pour chercher un éléments parmis plusieurs, utilisez l'option `--find`/`-f`, suivi par vos mots clés de recherche.

```
$ tb -f documentation
```

## Développement

Pour avoir plus d'informations sur la méthode à respecter pour contribuer au projet, merci de lire le [guide de contribution](https://github.com/klaussinani/taskbook/blob/master/contributing.md).

- Fork le répertoire et clone le sur ta machine.
- Déplacez vous dans votre fork local: `cd taskbook`
- Installez les dépendances du projet: `npm install` ou `yarn install`
- Vérifiez que le code ne contient pas d'erreurs : `npm test` ou `yarn test`

## Applications associées

- [chalk](https://github.com/chalk/chalk) - Coloration des chaînes de caractères dans le terminal
- [signale](https://github.com/klaussinani/signale) - Affichage console hackable

## Equipe

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)

## License

[MIT](https://github.com/klaussinani/taskbook/blob/master/license.md)
