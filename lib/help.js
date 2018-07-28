'use strict';

module.exports = `
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
      $ tb --task @taskbook Improve documentation
      $ tb --task @taskbook @github Review PR#42
      $ tb --note @algo Merge-sort worse case O(nlogn)
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
`;
