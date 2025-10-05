
<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  📓 任务，板块和笔记都在命令行这个栖息地
</h4>

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klaudiosinani/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klaudiosinani/taskbook.svg?branch=master">
  </a>
</p>

## 描述

本应用通过使用简单且最小化的语法，以及平坦的学习曲线，使您可以在终端内跨多个板块，有效地管理任务和笔记。所有数据都以原子方式写入存储，以防止损坏，并且永远不会与任何第三方共享。已删除的条目会自动存档，并且可以随时被检查或恢复。 

您可以使用以下语言阅读本文档：
[Albanian - Shqip](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.AL.md), [English](https://github.com/klaudiosinani/taskbook/blob/master/readme.md), [Polski](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.PL.md), [简体中文](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.ZH.md), [Русский](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.RU.md), [Français](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.FR.md), [Deutsch](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.GER.md), [Portuguese](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.PT-BR.md), [日本語](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.JP.md), [한국어](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.KR.md), [Spanish](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.ES.md), [Bulgarian](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.BG.md).


访问[贡献指南](https://github.com/klaudiosinani/taskbook/blob/master/contributing.md#translating-documentation)了解有关如何将此文档翻译成更多语言的更多信息.

## 亮点

-   组织任务和笔记到板块
-   板块和时间表视图
-   优先和喜爱的机制
-   搜索和过滤条目
-   存档并恢复已删除的条目
-   轻巧快速
-   数据以原子方式写入存储
-   自定义存储位置
-   进展概览
-   简单和最小的使用语法
-   更新通知
-   可通过`~/.taskbook.json`实现配置化
-   数据存储在JSON文件中`~/.taskbook/storage`

查看亮点[taskbook 黑板报](https://raw.githubusercontent.com/klaudiosinani/taskbook/master/media/highlights.png). 

### 目录

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [描述](#%E6%8F%8F%E8%BF%B0)
- [亮点](#%E5%BC%BA%E8%B0%83)
- [安装](#%E5%AE%89%E8%A3%85)
- [用法](#%E7%94%A8%E6%B3%95)
- [查看](#%E6%9F%A5%E7%9C%8B)
- [配置](#%E9%85%8D%E7%BD%AE)
- [飞行手册](#%E9%A3%9E%E8%A1%8C%E6%89%8B%E5%86%8C)
- [开发](#%E5%8F%91%E5%B1%95)
- [相关](#%E6%9C%89%E5%85%B3)
- [团队](#%E5%9B%A2%E9%98%9F)
- [授权协议](#%E6%89%A7%E7%85%A7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## 安装

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

## 用法

    $ tb --help

      用法
        $ tb [<options> ...]

        Options
            none             显示板块视图
          --archive, -a      显示已归档的条目
          --begin, -b        开始/暂停 任务
          --check, -c        完成/暂停 任务
          --clear            删除所有已完成任务
          --copy, -y         复制条目描述
          --delete, -d       删除条目
          --edit, -e         编辑条目描述
          --find, -f         搜索条目
          --help, -h         显示帮助信息
          --list, -l         按属性列出条目
          --move, -m         在板块之间移动条目
          --note, -n         创建笔记
          --priority, -p     更新任务的优先级
          --restore, -r      从存档还原条目
          --star, -s         收藏/取消收藏 条目         
          --task, -t         创建任务
          --timeline, -i     显示时间线视图
          --version, -v      显示已安装的版本

        示例
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

## 查看

### 板块视图

在没有任何选项的情况下调用 taskbook，将显示分组到各自板中的所有条目。

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

### 时间线视图

为了显示时间线视图中的所有条目，根据其创建日期，`--timeline`/`-i`选项可以使用。

<div align="center">
  <img alt="Timeline View" width="62%" src="../media/timeline.png"/>
</div>

## 配置

要配置 taskbook ，可定位到`~/.taskbook.json`并根据您的个人喜好修改任何配置选项。如果要重置回默认值，只需从主目录中删除配置文件即可。

以下说明了所有可用选项及其各自的默认值：

```json
{
  "taskbookDirectory": "",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### 配置细节

##### `taskbookDirectory`

-   类型: `String`
-   默认: `~`

初始化存储完成文件的系统路径，比如：`/home/username/the-cloud`或者`~/the-cloud`。

如果未配置本选项，将默认设置为`~/.taskbook/`。

##### `displayCompleteTasks`

-   类型: `Boolean`
-   默认: `true`

显示标记为完成的任务. 

##### `displayProgressOverview`

-   类型: `Boolean`
-   默认: `true`

在时间线和任务板视图下方显示进度概述。

## 飞行手册

以下是一个小练习，其中包含一组有关如何使用 taskbook 的示例。如果您发现错误或认为某个示例不够清晰并且应该进一步改进，请随时打开[issue](https://github.com/klaudiosinani/taskbook/issues/new/choose)或[Pull 请求](https://github.com/klaudiosinani/taskbook/compare)。

### 创建任务

要创建新任务，请使用`--task`/`-t`并在后面加上任务说明。

    $ tb -t Improve documentation

### 创建笔记

要创建新笔记，请使用`--note`/`-n`并在后面加上笔记正文。

    $ tb -n Mergesort worse-case O(nlogn)

### 创建板块

如果创建新任务或笔记时，指定的板块不存在，那么会自动新建并初始化板块。
如果想要将新的任务条目指定给新的板块，那么可以在任务描述前，使用`@`作为前缀，并加上新的板块的名称（可以多个板块一并创建）。 此时，新创建的任务条目将属于所有给定的板块。
如果任务条目描述中不包含任何板块名称，那么默认情况下，会自动添加到通用的：`My Board`。 

    $ tb -t @coding @docs Update contributing guidelines

### 完成任务

要将任务标记为『完成/待处理』，请使用`--check`/`-c`选项后跟目标任务的 ID。
请注意，该选项将自动转换给定任务的`complete/pending`（完成/待处理）状态。因此，『完成状态条目』 -> `-c` -> 『待处理状态』；『待处理状态条目』 -> `-c` -> 『完成状态条目』。
重复的ID会自动过滤掉。

    $ tb -c 1 3
    
### 开始任务

要将任务标记为『开始/暂停』，请使用`--begin`/`-b`选项后跟目标任务的 ID。该选项的功能对条目状态转换与`--check`选项功能相同。

### 收藏条目（Star）

要将一个或多个条目标记为收藏，请使用`--star`/`-s`选项后加上目标项的 ID。该选项的功能对条目状态转换与`--check`选项功能相同。

    $ tb -s 1 2 3

### 复制条目描述

要复制一个或多个条目描述到你的系统剪贴板，请使用`--copy`/`-y`选项后加上目标项的 ID。请注意，该选项会使用回车符作为每个描述的分隔符，从而在剪贴板生成清晰可读的格式。

### 显示板块

在没有任何选项的情况下调用 taskbook 将显示分组到各自板中的所有已保存条目。

    $ tb

### 显示时间轴

想要根据其创建日期，来显示时间线视图中的所有条目，可以使用`--timeline`/`-i`选项。 

    $ tb -i

### 设置优先级

要在初始化任务时设置任务的优先级，请包括`p:x`任务描述中的语法。
其中x可以是值的整数`1`、`2`或`3`。请注意，默认情况下，所有任务都以正常优先级`1`创建。

-   `1`- 正常优先
-   `2`- 中等优先级
-   `3`- 高度优先


    $ tb -t @coding Fix issue `#42` p:3

要在创建特定任务后更新特定任务的优先级，请使用`--priority`/`-p`选项，紧接着是`@id`（任务条目的`id`），最后是优先等级。
目标ID和优先级的放置顺序 并不重要. 

    $ tb -p @1 2

### 移动条目

要将条目移动到一个或多个板块，请使用`--move`/`-m`选项，后跟`@id`（任务条目的`id`），最后是目标板块的名称。
默认板块`My Board`可以通过`myboard`关键词来访问。目标 ID 和任务版块名称的放置顺序并不重要。

    $ tb -m @1 myboard reviews

### 删除条目

要删除一个或多个条目，请使用`--delete`/`-d`选项后跟目标条目的 ID。
已删除的条目会自动存档，并且可以随时完成或还原。重复的 ID 会被自动过滤掉。

    $ tb -d 1 2
    
### 删除已完成任务

要删除所有已完成任务，请使用`--clear`选项。请注意，所有被删除的任务会被自动保存，并且可以在任意时间点查看或还原。为了防止任何可能的意外情况，`--clear`选项没有别名。
  

### 显示存档

要显示所有已存档条目，请使用`--archive`/`-a`选项。请注意，所有已存档条目都会根据其创建日期顺序显示在时间轴视图。

    $ tb -a

### 还原条目

要恢复一个或多个条目，请使用`--restore`/`-r`选项后跟目标条目的 ID。请注意，该选项调用时可以看到所有已存档条目的 ID。重复的ID会自动过滤掉。

    $ tb -r 1 2

### 列出条目

要列出一组条目，其中每个条目符合特定数量的属性，请使用`--list`/`-l`选项后跟所需的属性。板块名称和条目特征可以被视为有效的列表属性。
例如，列出属于默认值的所有条目`myboard`并且是待定任务，可以使用以下内容：

    $ tb -l myboard pending

默认支持的列表属性及其各自的别名如下: 

-   `myboard` - 属于`My Board`的条目
-   `task`, `tasks`, `todo` - 作为任务的条目
-   `note`, `notes` - 作为笔记的条目
-   `pending`, `unchecked`, `incomplete` - 待处理的任务条目
-   `progress`, `started`, `begun` - 已开始的任务条目
-   `done`, `checked`, `complete` - 已完成的任务条目
-   `star`, `starred` - 已加星标的条目

### 搜索条目

要搜索其中一个条目，请使用`--find`/`-f`选项，后跟您的搜索字词。

    $ tb -f documentation

## 开发

有关如何为此项目做出贡献的更多信息，请阅读[贡献指南](https://github.com/klaudiosinani/taskbook/blob/master/contributing.md)。

-   Fork 此仓库库并将其克隆到您的计算机
-   定位到您的本地 Fork: `cd taskbook`
-   安装项目依赖项: `npm install`或`yarn install`
-   测试错误代码: `npm test`或`yarn test`

## 相关

- [signale](https://github.com/klaudiosinani/signale) - Hackable console logger
- [qoa](https://github.com/klaudiosinani/qoa) - Minimal interactive command-line prompts
- [hyperocean](https://github.com/klaudiosinani/hyperocean) - Deep oceanic blue Hyper terminal theme

## 团队

- Klaudio Sinani [(@klaudiosinani)](https://github.com/klaudiosinani)
- Mario Sinani [(@mario-sinani)](https://github.com/mario-sinani)

## 授权协议

[MIT](https://github.com/klaudiosinani/taskbook/blob/master/license.md)
