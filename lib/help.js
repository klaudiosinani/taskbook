'use strict';

module.exports = `
  Usage
    $ taskbook, tb [<options> ...]

    Options
      No option        Display items in board view
      --task, -t       Create a task
      --note, -n       Create a note
      --timeline, -i   Display items in timeline view
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
      $ taskbook
      $ taskbook --help
      $ taskbook --task Buy some milk
      $ taskbook --note i^2 + 1 = 0
      $ taskbook --check 5
      $ taskbook --delete 2
      $ taskbook --star 5
      $ taskbook --timeline
`;
