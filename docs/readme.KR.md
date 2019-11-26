<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  커맨드 라인 환경에서의 테스크, board, 노트 관리
</h4>

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/taskbook.svg?branch=master">
  </a>
</p>

## 소개

taskbook은 효율적으로 터미널 내에서 여러 board들을 넘나들며 task와 노트를 관리할 수 있게 해줍니다. 간결한 사용법으로 플랫한 러닝커브를 자랑합니다. 모든 데이터는 변형을 막기위해서 개별적으로 저장되고, 누구와도 공유하지 않습니다. 삭제된 아이템들은 자동으로 아카이빙되고, 언제나 복구 혹은 열람할 수 있습니다. 

이 문서를 다음 언어로 읽으실 수 있습니다: 
[简体中文](https://github.com/klaussinani/taskbook/blob/master/docs/readme.ZH.md), [Русский](https://github.com/klaussinani/taskbook/blob/master/docs/readme.RU.md), [Français](https://github.com/klaussinani/taskbook/blob/master/docs/readme.FR.md), [Deutsch](https://github.com/klaussinani/taskbook/blob/master/docs/readme.GER.md), [Portuguese](https://github.com/klaussinani/taskbook/blob/master/docs/readme.PT-BR.md), [日本語](https://github.com/klaussinani/taskbook/blob/master/docs/readme.JP.md), [한국어](https://github.com/klaussinani/taskbook/blob/master/docs/readme.KR.md)).

[GitHub Sponsors](https://github.com/sponsors/klaussinani) 로 개발을 후원해주세요.

[contributing guidelines](https://github.com/klaussinani/taskbook/blob/master/contributing.md#translating-documentation) 를 보시고 다른 언어로 이 문서에 기여해주세요.

[Gitter](https://gitter.im/klaussinani/taskbook) 나 [Twitter](https://twitter.com/klaussinani) 에 와서 이 프로젝트에 대한 생각을 공유해주세요.
## 핵심 기능

- task와 노트를 board에 정리
- board 뷰 & 타임라인 뷰
- 우선순위 & 즐겨찾기 기능 
- 검색 & 필터링 기능
- 삭제된 아이템 아카이빙 & 복구 기능
- 가볍고 빨라요! 
- 데이터는 개별적(원자적, atomically) 저장
- 저장 장소 커스터마이징
- 전체 진행상황 뷰 
- 간결한 사용 문법 
- 업데이트 알림
- `~/.taskbook.json` 을 사용해서 설정 가능
- `~/.taskbook/storage` 에 json 형식으로 데이터 저장

[taskbook board](https://raw.githubusercontent.com/klaussinani/taskbook/master/media/highlights.png) 에서 핵심 기능을 살펴보세요.


## Contents

- [소개](#description)
- [핵심 기능](#highlights)
- [설치](#install)
- [사용법](#usage)
- [뷰](#views)
- [설정](#configuration)
- [간단 메뉴얼](#flight-manual)
- [개발](#development)
- [관련 작업](#related)
- [팀소개](#team)
- [라이센스](#license)

## 설치

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
snap alias taskbook tb # alias 설정
```

**주의:** snap의 제한된 기능때문에, 데이터와 설정 파일은 모두 `$HOME` 대신 [`$SNAP_USER_DATA`](https://docs.snapcraft.io/reference/env) 하위에 저장됩니다.

## 사용법

```
$ tb --help

  Usage
    $ tb [<options> ...]

    Options
        none             Display board view
      --archive, -a      Display archived items
      --begin, -b        Start/pause task
      --check, -c        Check/uncheck task
      --clear            Delete all checked items
      --copy, -y         Copy item description
      --delete, -d       Delete item
      --edit, -e         Edit item description
      --find, -f         Search for items
      --help, -h         Display help message
      --list, -l         List items by attributes
      --move, -m         Move item between boards
      --note, -n         Create note
      --priority, -p     Update priority of task
      --restore, -r      Restore items from archive
      --star, -s         Star/unstar item
      --task, -t         Create task
      --timeline, -i     Display timeline view
      --version, -v      Display installed version

    Examples
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

## Views

### board 뷰

아무 옵션도 주지 않고 taskbook을 작동 시키면, 각 board로 그룹된 아이템들이 보여집니다. 

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

### 타임라인 뷰 

타임라인 뷰로 모든 아이템들을 보려면 (생성시간 기준), `--timeline`/`-i` 옵션을 사용하면 됩니다.

<div align="center">
  <img alt="Timeline View" width="62%" src="../media/timeline.png"/>
</div>

## 설정 

taskbook 을 설정하려면 `~/.taskbook.json` 파일로 접근하여 취향에 맞게 옵션을 변형해주세요. 디폴트 값으로 리셋하고자 한다면, 그냥 해당 config 파일을 홈디렉토리에서 삭제해주세요. 

아래는 디폴트 값을 포함해서, 가능한 옵션들을 표시해놓은 것입니다.

```json
{
  "taskbookDirectory": "~",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### 상세

##### `taskbookDirectory`

- 타입: `String`
- 디폴트: `~`

데이터 저장이 처음 시작되는 파일 경로입니다. 예: `/home/username/the-cloud` 혹은 `~/the-cloud`

이를 설정하기 않으면 `~`가 사용되고, taskbook은 `~/.taskbook/` 하위에 세팅됩니다.

##### `displayCompleteTasks`

- 타입: `Boolean`
- 디폴트: `true`

complete으로 마킹한 task들을 보여줄지 여부를 결정합니다. 

##### `displayProgressOverview`

- 타입: `Boolean`
- 디폴트: `true`

타임라인과 board뷰 아래에 프로그레스 뷰를 보여줄지 여부를 결정합니다.

## 간단 매뉴얼


다음은 taskbook 사용법 예제를 포함한 기초 매뉴얼입니다. 
오류를 발견하시거나 예제가 명확하지 않아서 개선되어야한다고 생각하시면, 자유롭게  [이슈](https://github.com/klaussinani/taskbook/issues/new/choose)나 [풀리퀘스트](https://github.com/klaussinani/taskbook/compare)를 부탁드립니다.

### task 만들기

새로운 task를 만들려면, `--task`/`-t` 옵션을 사용하고 그 뒤에 설명을 적어주세요.

```
$ tb -t Improve documentation
```

### 노트 만들기

새로운 노트를 만들려면 `--note`/`-n` 옵션을 사용하고 그 뒤에 노트 내용을 적어주세요.

```
$ tb -n Mergesort worse-case O(nlogn)
```

### Board 만들기


board는 새로운 task나 노트를 만들때 자동으로 초기화 됩니다. 하나 이상의 board를 만들려면, 만들고자하는 아이템을 적을 때 `@` 을 붙여 board 이름을 적어주세요.
새로운 아이템은 주어진 board에 모두 속하게 됩니다. 기본적으로, board 이름을 명시하지 않은 아이템은 `My Board`에 포함됩니다.

```
$ tb -t @coding @docs Update contributing guidelines
```

### Task 체크하기

task를 완료/미완료로 표시하기 위해서는 `--check`/`-c` 옵션 뒤에 타겟 task의 아이디를 적어주세요. 이 옵션은 상태를 뒤집는 것이므로, 완료된 task를 체크하면 pending(지연중)으로, pending된 task를 체크하면 완료로 설정됩니다. 중복된 아이디를 입력하는 경우 자동으로 필터링 됩니다.

```
$ tb -c 1 3
```

### Task 시작하기

task를 시작/일시정지로 표시하기 위해서는 `--begin`/`-b`  옵션 뒤에 타겟 task의 아이디를 적어주세요. 이 옵션의 동작은 `--check` 옵션과 같습니다.

```
$ tb -b 2 3
```

### Item에 별표시하기

하나 이상의 아이템을 자주 사용한다고 표시하기 위해서는, `--star`/`-s` 옵션 뒤에 타겟 task의 아이디를 적어주세요.  이 옵션의 동작은 `--check` 옵션과 같습니다.

```
$ tb -s 1 2 3
```

### 아이템 설명 복사하기 

하나 이상 아이템의 설명을 클립보드에 복사하기 위해서는  `--star`/`-s` 옵션 뒤에 타겟 task의 아이디를 적어주세요. 이 옵션은 개행 문자를 구분자로 사용해서, 붙여 넣을 때에도 명확하고 읽을 수 있는 문장을 저장합니다.

```
$ tb -y 1 2 3
```

### Board 표시하기 

아무런 옵션없이 taskbook를 작동시키면 모든 저장된 아이템들이 각각 보드에 그룹화되어 보입니다.

```
$ tb
```

### Timeline 표시하기

모든 아이템을 timeline view로 표시하기 위해서는  `--timeline`/`-i` 옵션을 사용합니다.

```
$ tb -i
```

### 우선순위 정하기 

task 를 만들 때 우선순위를 정하기 위해서는, `p:x` 문법을 task 설명에 포함해주세요. 여기에서 x는 `1`, `2`, `3` 중 하나의 정수 값입니다. 
모든 task는 디폴트로 보통 우선순위인 `1` 로 생성됩니다. 

- `1` - 일반 우선순위
- `2` - 중간 우선순위
- `3` - 최고 우선순위

```
$ tb -t @coding Fix issue `#42` p:3
```

특정 task를 생성한 다음에 우선순위를 조정하고자 할 때는, `--priority`/`-p` 을  사용합니다. 이때 타겟 task 는 @ + 해당 task id로 명시합니다. 타겟의 id와 우선순위 정도가 적힌 순서는 중요하지 않습니다.
```
$ tb -p @1 2
```

### 아이템 옮기기 

하나의 아이템을 하나이상의 board에 옮기기 위해서는 `--move`/`-m` 옵션을 사용합니다. 이때 타겟 task 는 @ + 해당 task id로 명시하고, 옮겨질 대상 board의 이름을 적습니다. 기본 `My board`는 `myboard`라는 키워드로 접근할 수 있습니다. 타겟 아이디와 board의 이름이 적힌 순서는 중요하지 않습니다.

```
$ tb -m @1 myboard reviews
```

### 아이템 삭제하기 

하나 이상의 아이템을 삭제하기 위해서는  `--delete`/`-d` 옵션 뒤에 해당하는 아이템의 id들을 적습니다. 삭제한 아이템은 자동으로 저장되어 언제든 다시 보거나 복구가능합니다. 중복된 아이디는 자동으로 필터링됩니다.
```
$ tb -d 1 2
```

### 체크된 task 삭제하기 

모든 board에서 모든 완료된 task를 종료 혹은 비우기 하고 싶을 경우, `--clear` 옵션을 사용하세요. 모든 제거된 task는 자동으로 저장되어 언제든 다시 보거나 복구가능합니다. 실수로 사용하는 경우를 막기 위해서, `--clear` 옵션은 짧은 이름이 존재하지 않습니다.

```
$ tb --clear
```

### 아카이브를 표시하기 

모든 아카이브된 아이템을 보려면, `--archive`/`-a`  옵션을 사용하세요. 모든 아카이브된 아이템은 timeline 뷰에서 생성일 기준으로 표시됩니다.

```
$ tb -a
```

### 아이템을 복구하기

하나 이상의 아이템을 복구하기 위해서, `--restore`/`-r`  옵션 뒤에 타겟 아이템의 아이디를 적어주세요. `--archive`/`-a` 옵션을 사용하면 모든 아카이브된 아이템의 아이디를 확인 할 수 있습니다. 중복된 아이디는 자동으로 필터링됩니다.

```
$ tb -r 1 2
```

### 아이템을 모두 표시하기

특정 속성들을 가진 아이템들을 모두 표시하고 싶을 때,  `--list`/`-l` 옵션 뒤에 원하는 속성을 붙여 사용하세요. Board 이름 역시 속성으로 간주됩니다. 예를 들어, 기본 `myboard`에 포함된 모든 pending 아이템을 표시하고 싶다면, 다음과 같이 사용하세요. 

```
$ tb -l myboard pending
```

기본적으로 제공하는 속성을 확인해보세요.

- `myboard` - Items that belong to `My board`
- `task`, `tasks`, `todo` - Items that are tasks.
- `note`, `notes` - Items that are notes.
- `pending`, `unchecked`, `incomplete` - Items that are pending tasks.
- `progress`, `started`, `begun` - Items that are in-progress tasks.
- `done`, `checked`, `complete` - Items that complete tasks.
- `star`, `starred` - Items that are starred.

### 아이템을 검색하기 

하나 이상의 아이템을 검색하려면,  `--find`/`-f` 옵션 뒤에 검색어를 입력하세요.

```
$ tb -f documentation
```

## 개발

프로젝트에 기여하는 방법에 대해서는 [contributing guidelines](https://github.com/klaussinani/taskbook/blob/master/contributing.md)를 읽어주세요.

- 레포지토리를 포크해서 개인 머신에 복사합니다. 
- 로컬 환경 폴더로 이동합니다. `cd taskbook`
- 필요한 프로젝트 의존성을 설치합니다. `npm install` 혹은 `yarn install` 
- 코드를 린트합니다. `npm test` 혹은 `yarn test`

## 관련 작업 

- [signale](https://github.com/klaussinani/signale) - Highly configurable logging utility
- [qoa](https://github.com/klaussinani/qoa) - Minimal interactive command-line prompts
- [hyperocean](https://github.com/klaussinani/hyperocean) - Deep oceanic blue Hyper terminal theme

## 팀소개

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)
- Mario Sinani [(@mariosinani)](https://github.com/mariosinani)

## 라이센스

[MIT](https://github.com/klaussinani/taskbook/blob/master/license.md)
