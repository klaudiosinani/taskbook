<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  Zadania, tablice i notatki dla środowiska wiersza poleceń
</h4>

<div align="center">
  <img alt="Zrzut ekranu pokazujący tablicę zadań" width="60%" src="../media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klaudiosinani/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klaudiosinani/taskbook.svg?branch=master">
  </a>
</p>

## Opis

Dzięki prostej i minimalistycznej składni, która wymaga szybkiej nauki, TaskBook umożliwia efektywne zarządzanie zadaniami i notatkami na wielu tablicach z poziomu terminala. Wszystkie dane są zapisywane atomowo w pamięci masowej, aby zapobiec ich uszkodzeniu i nigdy nie są udostępniane nikomu ani niczemu. Usunięte elementy są automatycznie archiwizowane i można je przeglądać lub przywracać w dowolnym momencie.

Przeczytaj ten dokument w:
[Albanian - Shqip](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.AL.md), [Polski](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.PL.md), [简体中文](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.ZH.md), [Русский](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.RU.md), [Français](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.FR.md), [Deutsch](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.GER.md), [Portuguese](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.PT-BR.md), [日本語](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.JP.md), [한국어](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.KR.md), [Spanish](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.ES.md).

Możesz wspierać proces rozwoju poprzez [GitHub Sponsors](https://github.com/sponsors/klaudiosinani).

Odwiedź [contributing guidelines](https://github.com/klaudiosinani/taskbook/blob/master/contributing.md#translating-documentation) aby dowiedzieć się więcej na temat tłumaczenia tego dokumentu na inne języki.

## Kluczowe funkcje

- Organizuj zadania oraz notatki na tablicy
- Widok tablicy oraz osi czasu
- Mechanizm priorytetów i ulubionych
- Wyszukiwanie i filtrowanie elementów
- Archiwizacja oraz przywracanie usuniętych dokimentów
- Lekki i szybki
- Dane zapisane atomowo do pamięci masowej
- Niestandardowa lokalizacja pamięci masowej
- Przegląd wpisów
- Prosra i minimalna składnia
- Powiadomienia o aktualizacjach
- Konfiguracja przez `~/.taskbook.json`
- Dane przechowywane w pliku `~/.taskbook/storage`

Вижте акценти в [taskbook board](https://raw.githubusercontent.com/klaudiosinani/taskbook/master/media/highlights.png).

## Zawartość

- [Opis](#opis)
- [Kluczowe funkcje](#kluczowe-funkcje)
- [Instalacja](#instalacja)
- [Zastosowanie](#zastosowanie)
- [Widoki](#widoki)
- [Konfiguracja](#konfiguracja)
- [Instrukcja lotu](#instrukcja-lotu)
- [Rozwój](#rozwoj)
- [Powiązania](#powiazania)
- [Zespół](#zespol)
- [Sponsorzy](#sponsorzy)
- [Licencja](#licencja)

## Instalacja

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

**Uwaga:** Ze względu na ściśle ograniczoną naturę snap-in, zarówno pliki pamięci masowej, jak i konfiguracyjne zostaną zapisane w zmiennej środowiskowej [`$SNAP_USER_DATA`](https://docs.snapcraft.io/reference/env), a nie w ogólnej `$HOME`.

## Stosowanie

```
$ tb --help

  Stosowanie
    $ tb [<options> ...]

    Опции
        none             Wyświetl widok tablicy
      --archive, -a      Wyświetl zarchiwizowane zadania
      --begin, -b        Uruchom/wstrzymaj zadanie
      --check, -c        Zaznacz/odznacz zadanie
      --clear            Usuń wszystkie zaznaczone zadania
      --copy, -y         Kopiuj opis zadania
      --delete, -d       Usuń zadanie
      --edit, -e         Edytuj zadanie
      --find, -f         Wyszukaj zadanie
      --help, -h         Wyświetl komunikat pomocy
      --list, -l         Wyświetl zadania według atrybutów
      --move, -m         Przenieś zadania między tablicami
      --note, -n         Utwórz notatkę 
      --priority, -p     Aktualizuj ptiotytet zadania
      --restore, -r      Przywróć zadanie z archiwum
      --star, -s         Dodaj/usuń gwiazdkę przy zadaniu
      --task, -t         Utwórz zadanie
      --timeline, -i     Wyświetl widok osi czasu
      --version, -v      Wyświetl zainstalowaną wersję

    Примери
      $ tb
      $ tb --archive
      $ tb --begin 2 3
      $ tb --check 1 2
      $ tb --clear
      $ tb --copy 1 2 3
      $ tb --delete 4
      $ tb --edit @3 Edytowana notatka w zadaniu nr. 3
      $ tb --find documentation
      $ tb --list pending coding
      $ tb --move @1 cooking
      $ tb --note @coding Mergesort worse-case O(nlogn)
      $ tb --priority @3 2
      $ tb --restore 4
      $ tb --star 2
      $ tb --task @tablica_01 @tablica_02 Zadanie utworzy sie w tablicy 01 i 02
      $ tb --task @tablica_03 Nowe zadanie w tablicy 03 
      $ tb --task Zadanie bez tablicy
      $ tb --timeline
```

## Wygląd

### Wygląd talicy

Wywołanie skoroszytu bez żadnych opcji spowoduje wyświetlenie wszystkich zapisanych elementów pogrupowanych na odpowiednich tablicach.

<div align="center">
  <img alt="Obraz przedstawia przykładową listę zdań utworzoną w aplikacji Taskbook" width="60%" src="../media/header-boards.png"/>
</div>

### Widok osi czasu

Aby wywietllić wszystkie elementy w widoku osi czasu na podstawie daty utworzenia, można użyć opcji `--timeline`/`-i`.

<div align="center">
  <img alt="Timeline View" width="62%" src="../media/timeline.png"/>
</div>

## Configuration

Aby skonfigurować Taskbook, przejdź do pliku `~/.taskbook.json` i zmodyfikuj dowolne opcje zgodnie z własnymi preferencjami. Aby przywrócić wartości domyślne, wystarczy usunąć plik konfiguracyjny z katalogu domowego.

Poniżej przedstawiono wszystkie dostępne opcje i ich wartości domyślne.

```json
{
  "taskbookDirectory": "~",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### Szczegóły

##### `taskbookDirectory`

- Type: `String`
- Default: `~`

Ścieżka systemu plików, w której zostanie zainicjowana pamięć masowa, np.: `/home/username/the-cloud` lub `~/the-cloud`

Jeżeli nie zostanie zdefiniowany katalog domowy `~`, Taskbook zostanie skonfigurowany w katlogu domyślnym `~/.taskbook/`.

##### `displayCompleteTasks`

- Type: `Boolean`
- Default: `true`

Wyświetl zadania ozaczone jako.

##### `displayProgressOverview`

- Type: `Boolean`
- Default: `true`

Wyświetl zadania oznaczone jako ukończone.

## Instrukcja lotu

Poniżej znajduje się krótki przewodnik zawierający zestaw przypadków korzystania z Taskbook. Jeśli zauważysz błąd lub uważasz, że przykład jest nie wystarczająco jasny i wymaga doptacowania, możesz go ozgłosić [issue](https://github.com/klaudiosinani/taskbook/issues/new/choose) lub wykonąć [pull request](https://github.com/klaudiosinani/taskbook/compare).

### Utwórz zadanie

Do utworzenia nowego zadania użyj opcji `--task`/`-t` dodając opis zadania zaraz po niej.

```
$ tb -t Zmienniony opis zadania
```

### Utwórz notatkę

Aby utworzyć notatkę, użyj opcji `--note`/`-n` dodając jej treść zaraz po niej.

```
$ tb -n To jest moja notatka
```

### Utwórz tablicę
Tablice są automatycznie inicjowane podczas tworzenia nowego zadania lub notatki. Aby utworzyć jedną lub więcej tablic, należy dodać ich nazwy poprzedzone symbolem `@` dodając na końcu opis zadania. W rezultacie nowo utworzony element będzie należał do wszystkich podanych tablic. Domyślnie elementy, które nie zawierają nazw tablic w swoim opisie, są automatycznie dodawane do ogólnego przeznaczenia.

```
$ tb -t @coding @docs Mój przykładowy opis zadania
```

### Zadanie ukończone
Aby oznaczyć zadanie jako ukończone/nieukończone, należy użyć opcji `--check/-c` podając identyfikator zadania zaraz po niej. Należy pamiętać, że opcja ta zmieni aktualny stan zadania na przeciwny. W zależności od aktualnego stanu zadaniam, zadanie zmieni swój stan na ukończone lub nieukończone. Zduplikowane identyfikatory są automatycznie filtrowane.

```
$ tb -c 1 3
```

### Rozpoczęcie zadania
Aby oznaczyć zadanie jako rozpoczęte / nierozpoczętem należy użyć opcji `--begin`/`-b` podając identyfikator zadania. Funkcjonalność opcji jest taka sama jak opisanej powyżej `--check`.

```
$ tb -b 2 3
```

### Dodanie gwiazdki

Aby oznaczyć jeden lub więcej elementów gwiazdką, użyj opcji `--star`/`-s`, a następnie identyfikator elementów docelowych. Funkcjonalność tej opcji jest taka sama jak opisanej powyższej opcji `--check` option.

```
$ tb -s 1 2 3
```

### Kopiowanie opisu zadania

Aby skopiować do schowka systemowego opis jednego lub kilku elementów, użyj opcji `--copy/-y`, dodając identyfikator elementów docelowych. Należy pamiętać, że opcja ta będzie również uwzględniać znak nowej linii jako separator dla każdej pary sąsiadujących ze sobą skopiowanych opisów, co pozwoli na uzyskanie przejrzystego i czytelnego stosu zdań po wklejeniu. 

```
$ tb -y 1 2 3
```

### Wyświetl tablice
Wyświetlenie Taskbook bez żadnych opcji spowoduje wyświetlenie wszystkich zapisanych elementów pogrupowanych na odpowiednich tablicach.

```
$ tb
```

### Wyświetl oś czasu

Aby wyświetlić wszystkie elementy w widoku osi czasu na podstawie daty ich utworzenia, można użyć opcji `--timeline`/`-i`.

```
$ tb -i
```

### Ustawienie priorytetu

Aby ustawić poziom priorytetu zadania podczas jego inicjowania, należy uwzględnić składnię `p:x` w opisie zadania, gdzie x może być liczbą całkowitą o wartości 1,2 lub 3. Należy pamiętać, że domyślnie wszystkie zadania są tworzone z normalnym priorytetem 1.

- `1` - Normalny priorytet
- `2` - Średni priorytet
- `3` - Wysoki priorytet

```
$ tb -t @coding Fix issue `#42` p:3
```

Aby zmienić priorytet określonego zadania po jego utworzeniu, należy użyć opcji `--priority`/`-p` dodając identyfikator elementów docelowych porzedzonym symbolem `@` oraz liczbą całkowitą o wartoścu `1`, `2` lub `3`. Należy pamiętać, że kolejność w jakiej umieszczone są identyfikator docelowy i poziom priorytetu, nie ma znaczenia.

```
$ tb -p @1 2
```

### Przemieszczenie elementów

Aby przenieść element na jedną lub więcej tablic, użyj opcji `--move/-m`, a następnie identyfikatora elementu docelowego poprzedzonego symbolem `@` oraz nazwy tablic docelowych. Dostęp do domyślnej tablicy `Moja tablica` można uzyskać za pomocą słowa kluczowego `myboard`. Kolejność, w jakiej identyfikator elementu docelowego i nazwy tablic są umieszczane, nie ma znaczenia.

```
$ tb -m @1 myboard reviews
```

### Usunięcie elementu

Aby usunąć jeden lub więcej elementów, użyj opcji `--delete/-d`, dodając identyfikatorów elementów docelowych. Należy pamiętać, że usunięte elementy są automatycznie archiwizowane i można je w dowolnym momencie przejrzeć lub przywrócić. Duplikaty identyfikatorów są automatycznie filtrowane.

```
$ tb -d 1 2
```

### Usuń ukończone elementy
Aby usunąć/wyczyścić wszystkie ukończone zadania naraz na wszystkich tablicach, użyj opcji `--clear`. Pamiętaj, że wszystkie usunięte zadania są automatycznie archiwizowane i można je w dowolnym momencie przejrzeć lub przywrócić. Aby zapobiec przypadkowemu użyciu, opcja `--clear` nie ma dostępnego krótszego aliasu.

```
$ tb --clear
```

### Wyąwietlenie archiwum

Aby wyświetlić wszystkie zarchiwizowane elementy, użyj opcji `--archive/-a`. Pamiętaj, że wszystkie zarchiwizowane elementy są wyświetlane w widoku osi czasu, na podstawie daty ich utworzenia.

```
$ tb -a
```

### Przywrócenie
Aby przywrócić jeden lub więcej elementów, użyj opcji `--restore/-r`, a następnie identyfikatorów elementów docelowych. Należy pamiętać, że identyfikatory wszystkich zarchiwizowanych elementów można wyświetlić po wywołaniu opcji `--archive/-a`. Duplikaty identyfikatorów są automatycznie filtrowane.

```
$ tb -r 1 2
```

### Lista elementów
Aby wyświetlić grupę elementów, z których każdy spełnia określony zestaw atrybutów, użyj opcji `--list/-l`, a następnie żądanych atrybutów. Nazwy tablic wraz z cechami elementów można uznać za prawidłowe atrybuty listy. Na przykład, aby wyświetlić wszystkie elementy należące do domyślnej tablicy `myboard` i oczekujące na wykonanie zadania, można użyć następującego `polecenia:

```
$ tb -l myboard pending
```

Domyślnie obsługiwane atrybuty aukcji wraz z ich odpowiednimi aliasami są następujące:

- `myboard` - Elementy należące do `My board`
- `task`, `tasks`, `todo` - Elementy będące zadaniami.
- `note`, `notes` - Elementy będące notatkami.
- `pending`, `unchecked`, `incomplete` - Elementy, które są zadaniami oczekującymi.
- `progress`, `started`, `begun` - Elementy będące zadaniami w toku.
- `done`, `checked`, `complete` - Elementy, które wykonują zadania.
- `star`, `starred` - Elementy oznaczone gwiazdką.

### Wyszukaj elementy

Aby wyszukać jeden lub więcej elementów, użyj `--find`/`-f`, a następnie wpisz wyszukiwane hasła.

```
$ tb -f documentation
```

## Rozwój

Aby uzyskać więcej informacji na temat tego, jak przyczynić się do projektu, zapoznaj się ze [contributing guidelines](https://github.com/klaudiosinani/taskbook/blob/master/contributing.md).

- Rozwidl repozytorium i sklonuj je na swój komputer.
- Navigate to your local fork: `cd taskbook`
- Install the project dependencies: `npm install` lub `yarn install`
- Lint the code for errors: `npm test` lub `yarn test`

## Powiązany

- [signale](https://github.com/klaudiosinani/signale) - Wysoce konfigurowalne narzędzie do rejestrowania
- [qoa](https://github.com/klaudiosinani/qoa) - Minimalne interaktywne monity wiersza poleceń
- [hyperocean](https://github.com/klaudiosinani/hyperocean) - Głęboki, oceaniczny, błękitny motyw terminala Hyper

## Zespół

- Klaudio Sinani [(@klaudiosinani)](https://github.com/klaudiosinani)
- Mario Sinani [(@mariosinani)](https://github.com/mariosinani)

## Sponsors
Wielkie podziękowania dla wszystkich osób i firm wspierających naszą działalność Open Source:

- [Better Stack: wykrywaj, rozwiązuj i zapobiegaj przestojom.](https://betterstack.com/)

## Licencja

[MIT](https://github.com/klaudiosinani/taskbook/blob/master/license.md)
