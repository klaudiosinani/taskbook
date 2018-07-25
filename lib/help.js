'use strict';

module.exports = `
  Usage
    $ taskbook, t [<options> ...]

    Options
      --task, -t       Create a task
      --note, -n       Create a note
      --remove, -r     Remove an item
      --check, -c      Check/uncheck a task
      --star, -s       Star/unstar an item
      --date, -d       Display items by date

    Examples
      $ taskbook
      $ taskbook --help
      $ taskbook --task Buy some milk
      $ taskbook --note i^2 + 1 = 0
      $ taskbook --check 5
      $ taskbook --remove 2
      $ taskbook --star 5
      $ taskbook --date
`;
