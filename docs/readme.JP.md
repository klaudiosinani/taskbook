<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  コマンドライン愛用者のための、タスク / ボード / ノート ツール
</h4>

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/taskbook.svg?branch=master">
  </a>
</p>

## 概要

Taskbookはシンプルで最小限の使い方で、簡単・効率的にターミナル内でタスクやノートを複数のボードで管理することができます。全てのデータは削除されず、自動で保存され、どこでも共有可能です。削除したアイテムは自動的にアーカイブされ、検索・リストアすることが可能です。

[GitHub Sponsors](https://github.com/sponsors/klaussinani)から開発へのサポートも可能です。  

翻訳について知りたい場合は[コントリビュートガイダンス](https://github.com/klaussinani/taskbook/blob/master/contributing.md#translating-documentation)をご確認ください。  

[Gitter](https://gitter.im/klaussinani/taskbook) や [Twitter](https://twitter.com/klaussinani) で当プロジェクトをシェアしてください。  

## 特徴

- タスク・ノートを作成
- ビュー（ボード・タイムライン）
- 優先度設定・お気に入り機能
- 検索・フィルタ機能
- アーカイブ・リストア機能
- 軽量・早い
- 自動保存
- ストレージのカスタマイズ
- 進捗の確認
- 簡単でミニマルな文法
- 更新通知
- `~/.taskbook.json`によるこんフィギュレーション
- `~/.taskbook/storage`のJsonでデータの保存

特徴は[taskbook ボード](https://raw.githubusercontent.com/klaussinani/taskbook/master/media/highlights.png)で確認することができます。  

## 内容

- [概要](#概要)
- [特徴](#特徴)
- [インストール](#インストール)
- [使い方](#使い方)
- [ビュー](#ビュー)
- [設定](#設定)
- [操作方法](#操作方法)
- [開発](#開発)
- [関連プロジェクト](#関連プロジェクト)
- [開発チーム](#開発チーム)
- [ライセンス](#ライセンス)

## インストール

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

**補足**: snapの厳格で限定的な性質より、ストレージと設定ファイルは`$HOME`配下ではなく環境変数[`$SNAP_USER_DATA`](https://docs.snapcraft.io/reference/env)配下に保存されます。  

## 使い方

```
$ tb --help

  Usage
    $ tb [<options> ...]

    Options
        none             ボードを表示
      --archive, -a      アーカイブしたタスクを表示
      --begin, -b        タスクのスタート/中断
      --check, -c        タスクのチェック/チェック解除
      --clear            チェックしたアイテムの削除
      --copy, -y         アイテムのコピー
      --delete, -d       アイテムの削除
      --edit, -e         アイテムの編集
      --find, -f         アイテムの検索
      --help, -h         ヘルプメッセージの表示
      --list, -l         属性ごとにアイテムのリスト化
      --move, -m         ボードでのアイテムの移動
      --note, -n         ノートの作成
      --priority, -p     タスクの優先度を変更
      --restore, -r      アーカイブからアイテムを復元
      --star, -s         アイテムのスター/スター解除
      --task, -t         タスクの作成
      --timeline, -i     タイムラインの表示
      --version, -v      バージョンの表示

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

## ビュー

### ボード

オプションなしでtaskbookを起動すると、保存している全てのアイテムをそれぞれのボードに表示します。  

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

### タイムライン

全てのアイテムをタイムラインに表示するためには、`--timeline`/`-i` オプションを利用することで作成日順に表示されます。   

<div align="center">
  <img alt="Timeline View" width="62%" src="../media/timeline.png"/>
</div>

## 設定

`~/.taskbook.json` ファイルを作成し、自身のオプションを設定できます。デフォルト値をリセットしたい場合は、設定ファイルを消すだけです。  

以下は利用可能なオプションと、それぞれのデフォルト値となります。  

```json
{
  "taskbookDirectory": "~",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### 各変数の詳細

##### `taskbookDirectory`

- 型: `String`
- 初期値: `~`

ストレージを初期化するファイルパス。`/home/username/the-cloud` や `~/the-cloud` などを指定します。

ホームディレクトリを示す `~` を指定すると、 `~/.taskbook/` 配下に作成されます。

##### `displayCompleteTasks`

- 型: `Boolean`
- 初期値: `true`

完了したタスクを表示するかどうか指定できます。   

##### `displayProgressOverview`

- 型: `Boolean`
- 初期値: `true`

タイムラインとボートの下に進捗状況を表示するか指定できます。  

## 操作方法

以下は最小限の利用例になります。  
エラーやサンプルが不十分で改善が必要な場合は、[イシュー](https://github.com/klaussinani/taskbook/issues/new/choose) や [プルリクエスト](https://github.com/klaussinani/taskbook/compare) を作成してください。  

### タスクの作成

新たなタスクを作成するためには、 `--task`/`-t` のオプションにタスクの詳細を記載してください。  

```
$ tb -t Improve documentation
```

### ノートの作成

新たなのノートを作成するためには、 `--note`/`-n` オプションにノートの本文を記載してください。  

```
$ tb -n Mergesort worse-case O(nlogn)
```

### ボードの作成

ボードはタスクやノートを作成したときに自動的に初期化されます。ボートを作成するためには、 `@` をプレフィックスにつけて名前を指定すれば作成できます。ボードの作成と同時に作成したタスクは作成したボードに含まれます。デフォルトではボードの指定がない場合は、 自動的に `My Board` へ追加されます。  

```
$ tb -t @coding @docs Update contributing guidelines
```

### タスクのチェック

タスクを完了/未完了にするためには、 `--check`/`-c` オプションに対象タスクIDを付与してくだい。このオプションでは指定されたタスクの `complete` ステータスを反対に更新するので、完了していたタスクは遅延したタスクに、遅延していたタスクは完了に切り替わります。重複したIDは自動的に除外されます。

```
$ tb -c 1 3
```

### タスクの開始

タスクを開始/中断するには、 `--begin`/`-b` オプションにタスクIDを指定してください。使い方は `--check` オプションと同様になります。  

```
$ tb -b 2 3
```

### アイテムのスター

お気に入りとしてマークするには、 `--star`/`-s` オプションにタスクIDを指定してください。使い方は `--check` オプションと変わりません。  

```
$ tb -s 1 2 3
```

### アイテム詳細のコピー

システムのクリップボードにアイテムをコピーするには、 `--copy`/`-y` オプションにタスクIDを指定してください。コピーされたアイテムの各タスクは改行で区切られているため、貼り付け後に読みやすい状態となっています。  

```
$ tb -y 1 2 3
```

### ボードの表示

taskbookをオプションなしで起動すると、ボードごとにグループ化されたアイテムを表示します。  

```
$ tb
```

### タイムラインの表示

タイムラインビューに全てのアイテムを表示させるには、 `--timeline`/`-i` オプションを利用できます。  

```
$ tb -i
```

### 優先度の設定

初回登録時にタスクの優先度を設定するには、 `p:x` をタスク詳細に付け加えると可能です。xは `1`, `2` or `3` の数字が入ります。デフォルトでは優先度が `1` となります。

- `1` - Normal priority
- `1` - 通常
- `2` - Medium priority
- `2` - 中優先
- `3` - High priority
- `3` - 高優先

```
$ tb -t @coding Fix issue `#42` p:3
```

タスクの作成後に優先度を変更するためには、 `--priority`/`-p` オプションを対象タスクIDに指定し、 `@` をプレフィックスとして、 `1` ・ `2` ・ `3` の数値を指定してください。対象IDや優先度が置かれた順番は重要ではありません。  

```
$ tb -p @1 2
```

### アイテムの移動

タスクを1つ、もしくは複数のボードへ移動するためには、 `--move`/`-m` オプションの後に `@` マークをプレフィックスとして対象アイテムIDを指定して、ボード名を指する必要があります。デフォルトの `My board` は `myboard` キーワードで設定できます。対象IDとボード名の順番は重要ではありません。  

```
$ tb -m @1 myboard reviews
```

### アイテムの削除

アイテムを削除するには、 `--delete`/`-d` オプションに対象アイテムIDを指定する必要があります。削除されたアイテムは自動的にアーカイブされ、いつでも検索やリストアは可能です。重複したIDは自動的に除外されます。  

```
$ tb -d 1 2
```

### チェックしたタスクの削除

全てのボードにある完了したタスクを削除/クリアするためには、 `--clear` オプションを利用してください。削除されたタスクは自動的にアーカイブされ、いつでも検索・リストア可能です。残念ですが、 `--clear` の簡略化したオプションはありません。  

```
$ tb --clear
```

### アーカイブの表示

アーカイブした全てのアイテムを表示するためには、 `--archive`/`-a` オプションを利用してください。アーカイブした全てのアイテムはタイムラインビュー作成日順に表示されます。  

```
$ tb -a
```

### アイテムのリストア

アイテムをリストアするためには、 `--restore`/`-r` オプションで対象アイテムIDを付けて利用してください。アーカイブした全てのタスクは `--archive`/`-a` オプションで見ることがきます。重複したIDは自動的に除外されます。  

```
$ tb -r 1 2
```

### アイテムのリスト化

特定の属性でアイテムをまとめてリスト化するためには、 `--list`/`-l` オプションの後に必要な属性を付けてください。有効な属性をもつアイテムでボードが表示されます。例えば、デフォルトの `myboard` にある遅延した全てのアイテムをリスト化するためには、以下のように入力できます。  

```
$ tb -l myboard pending
```

デフォルトでサポートしているリスト化属性は、以下のように特定のエイリアスと一緒に使えます。  

- `myboard` - Items that belong to `My board`
- `task`, `tasks`, `todo` - タスクのアイテム
- `note`, `notes` - ノートのアイテム
- `pending`, `unchecked`, `incomplete` - 遅れているタスクのアイテム
- `progress`, `started`, `begun` - 進行中タスクのアイテム
- `done`, `checked`, `complete` - 完了したタスクのアイテム
- `star`, `starred` - スターされたアイテム

### アイテムの検索

アイテムを検索するためには、 `--find`/`-f` オプションに検索ワードを指定してください。  

```
$ tb -f documentation
```

## 開発

よりプロジェクトへ貢献したい場合は、[contributing guidelines](https://github.com/klaussinani/taskbook/blob/master/contributing.md)を読んでください。  

- リポジトリのフォーク、もしくはクローンをする
- ローカルにリポジトリをインストールし、 `cd taskbook` で移動
- `npm install` もしくは `yarn install` で依存モジュールをインストール
- `npm test` もしくは `yarn test` でコードのLintチェックが可能

## 関連プロジェクト

- [signale](https://github.com/klaussinani/signale) - 高度に設定可能なロギングツール
- [qoa](https://github.com/klaussinani/qoa) - ミニマルでインタラクティブなコマンドラインプロンプト
- [hyperocean](https://github.com/klaussinani/hyperocean) - オーシャンブルーなテーマ

## 開発チーム

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)
- Mario Sinani [(@mariosinani)](https://github.com/mariosinani)

## ライセンス

[MIT](https://github.com/klaussinani/taskbook/blob/master/license.md)
