<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  📓 Tasks, boards & notes for the command-line habitat
</h4>

<p align="center">
  <a href="https://travis-ci.com/klauscfhq/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klauscfhq/taskbook.svg?branch=master">
  </a>
</p>

## Description

Visit the [contributing guidelines](https://github.com/klauscfhq/taskbook/blob/master/contributing.md#translating-documentation) to learn more on how to translate this document into more languages.

Come over to [Gitter](https://gitter.im/klauscfhq/taskbook) or [Twitter](https://twitter.com/klauscfhq) to share your thoughts on the project.

## Highlights

## Contents

- [Description](#description)
- [Highlights](#highlights)
- [Install](#install)
- [Usage](#usage)
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
    $ taskbook, tb [<options|id> ...]

    Options
      no option        Display board view
      --task, -t       Create a task
      --note, -n       Create a note
      --timeline, -i   Display timeline view
      --delete, -d     Delete an item
      --check, -c      Check/uncheck a task
      --star, -s       Star/unstar an item
      --restore, -r    Restore items from archive
      --archive, -a    Display archived items
      --list, -l       List items by attributes
      --find, -f       Search for items
      --edit, -t       Edit item description
      --move, -m       Move item between boards
      --priority, -p   Update priority of task

    Examples
      tb
      tb --help
      tb --task Buy some milk
      tb --note i^2 + 1 = 0
      tb --check 5
      tb --delete 2
      tb --star 5
      tb --timeline
```

## Development

For more info on how to contribute to the project, please read the [contributing guidelines](https://github.com/klauscfhq/taskbook/blob/master/contributing.md).

- Fork the repository and clone it to your machine
- Navigate to your local fork: `cd taskbook`
- Install the project dependencies: `npm install` or `yarn install`
- Lint the code for errors: `npm test` or `yarn test`

## Related

- [signale](https://github.com/klauscfhq/signale) - Hackable console logger

## Team

- Klaus Sinani [(@klauscfhq)](https://github.com/klauscfhq)

## License

[MIT](https://github.com/klauscfhq/taskbook/blob/master/license.md)
