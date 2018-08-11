'use strict';

module.exports = `
  Usage
    $ tb [<options> ...]

    Options
        none             Display board view
      --task, -t         Create task, use :: as a delimiter to create multiple
      --note, -n         Create note, use :: as a delimiter to create multiple
      --timeline, -i     Display timeline view
      --delete, -d       Delete item
      --check, -c        Check/uncheck task
      --star, -s         Star/unstar item
      --list, -l         List items by attributes
      --find, -f         Search for items
      --edit, -e         Edit item description
      --move, -m         Move item between boards
      --priority, -p     Update priority of task
      --archive, -a      Display archived items
      --restore, -r      Restore items from archive
      --help, -h         Display help message
      --version, -v      Display installed version

    Examples
      $ tb
      $ tb --task Make some buttercream
      $ tb --task @coding Improve documentation
      $ tb --task @coding @reviews Review PR #42
      $ tb --task @shopping bananas::bread::brown sugar
      $ tb --note @coding Mergesort worse-case O(nlogn)
      $ tb --note @styles red borders::blue underline::black text
      $ tb --check 1 2
      $ tb --delete 4
      $ tb --star 2
      $ tb --priority @3 2
      $ tb --timeline
      $ tb --edit @3 Merge PR #42
      $ tb --move @1 cooking
      $ tb --find documentation
      $ tb --list pending coding
      $ tb --archive
      $ tb --restore 4
`;
