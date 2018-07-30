<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  📓 Tasks, boards & notes for the command-line habitat
</h4>

<div align="center">
  <img alt="Boards" width="60%" src="media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klauscfhq/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klauscfhq/taskbook.svg?branch=master">
  </a>
</p>

## Description

By utilizing a simple and minimal usage syntax, that requires a flat learning curve, taskbook enables you to effectively manage your tasks and notes across multiple boards from within your terminal.

Visit the [contributing guidelines](https://github.com/klauscfhq/taskbook/blob/master/contributing.md#translating-documentation) to learn more on how to translate this document into more languages.

Come over to [Gitter](https://gitter.im/klauscfhq/taskbook) or [Twitter](https://twitter.com/klauscfhq) to share your thoughts on the project.

## Highlights

<img alt="Timeline" align="right" width="55%" src="media/timeline.png"/>

<br/>

- Organize tasks & notes to boards
- Board & timeline views
- Priority & favorite mechanisms
- Search & filter items
- Archive & restore deleted items
- Lightweight & fast
- Data written atomically to storage
- Custom storage location
- Progress overview
- Simple & minimal usage syntax
- Update notifications
- Configurable through `~/.taskbook.json`
- Data stored in JSON file at `~/.taskbook/storage`

View highlights in a [taskbook board](https://raw.githubusercontent.com/klauscfhq/taskbook/master/media/highlights.png).

## Contents

- [Description](#description)
- [Highlights](#highlights)
- [Install](#install)
- [Usage](#usage)
- [Configuration](#configuration)
- [Development](#development)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Install

```bash
npm install --global taskbook
```

## Usage

```
$ taskbook --help

  Usage
    $ taskbook, tb [<options> ...]

    Options
        none             Display board view
      --task, -t         Create task
      --note, -n         Create note
      --timeline, -i     Display timeline view
      --delete, -d       Delete item
      --check, -c        Check/uncheck task
      --star, -s         Star/unstar item
      --list, -l         List items by attributes
      --find, -f         Search for items
      --edit, -t         Edit item description
      --move, -m         Move item between boards
      --priority, -p     Update priority of task
      --archive, -a      Display archived items
      --restore, -r      Restore items from archive
      --help, -h         Display help message
      --version, -v      Display installed version

    Examples
      $ taskbook
      $ tb --task Make some buttercream
      $ tb --task @coding Improve documentation
      $ tb --task @coding @reviews Review PR #42
      $ tb --note @coding Mergesort worse-case O(nlogn)
      $ tb --check 1 2
      $ tb --delete 4
      $ tb --star 2
      $ tb --priority @3 2
      $ tb --timeline
      $ tb --edit @3 Merge PR#42
      $ tb --move @1 cooking
      $ tb --find documentation
      $ tb --list pending taskbook
      $ tb --archive
      $ tb --restore 4
```

## Configuration

To configure taskbook navigate to the `~/.taskbook.json` file and modify any of the options to match your own preference. To reset back to the default values, simply delete the config file from your home directory.

The following illustrates all the available options with their respective default values.

```js
// ~/.taskbook.json
{
  "taskbookDirectory": "",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### In Detail

##### `taskbookDirectory`

- Type: `String`
- Default: `~`

Full filesystem path where the storage will be initialized, i.e; `/home/username/the-cloud`

If left undefined the home directory `~` will be used and taskbook will be set-up under `~/.taskbook/`.

##### `displayCompleteTasks`

- Type: `Boolean`
- Default: `true`

Display tasks that are marked as complete.

##### `displayProgressOverview`

- Type: `Boolean`
- Default: `true`

Display progress overview below the timeline and board views.

## Development

For more info on how to contribute to the project, please read the [contributing guidelines](https://github.com/klauscfhq/taskbook/blob/master/contributing.md).

- Fork the repository and clone it to your machine
- Navigate to your local fork: `cd taskbook`
- Install the project dependencies: `npm install` or `yarn install`
- Lint the code for errors: `npm test` or `yarn test`

## Related

- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right
- [signale](https://github.com/klauscfhq/signale) - Hackable console logger

## Team

- Klaus Sinani [(@klauscfhq)](https://github.com/klauscfhq)

## License

[MIT](https://github.com/klauscfhq/taskbook/blob/master/license.md)
