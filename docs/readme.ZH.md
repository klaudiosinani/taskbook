
<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  📓 终端爱好者的任务、板块和便签管理器
</h4>

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/taskbook.svg?branch=master">
  </a>
</p>

## 描述

您只需要稍加练习，便可以通过最简单的命令在终端内跨多个板块，有效地管理任务和便签。所有数据都将自动储存以避免数据丢失，并且永远不会与任何第三方共享。已删除的条目会自动存档，并且可以随时查看或恢复。 

访问[贡献指南](https://github.com/klaussinani/taskbook/blob/master/contributing.md#translating-documentation)了解有关如何将此文档翻译成更多语言的更多信息. 

来[Gitter](https://gitter.im/klaussinani/taskbook)或[推特](https://twitter.com/klaussinani)分享您对条目的看法. 

## 亮点

-   方便地分配任务和便签到板块
-   拥有板块和时间表视图
-   优先级和星标机制
-   搜索和过滤条目
-   存档并恢复已删除的条目
-   精简，高效
-   数据自动保存
-   自定义存储位置
-   进展概览
-   简单易用
-   更新通知
-   通过`~/.taskbook.json`进行配置
-   数据以JSON格式存储于`~/.taskbook/storage`

[在 taskbook 中查看亮点](https://raw.githubusercontent.com/klaussinani/taskbook/master/media/highlights.png). 

### 目录

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [描述](#%E6%8F%8F%E8%BF%B0)
- [亮点](#%E5%BC%BA%E8%B0%83)
- [安装](#%E5%AE%89%E8%A3%85)
- [使用说明](#%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)
- [查看](#%E6%9F%A5%E7%9C%8B)
- [配置](#%E9%85%8D%E7%BD%AE)
- [使用示例](#%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B)
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

## 使用说明

    $ tb --help

      使用说明
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
          --note, -n         创建便签
          --priority, -p     更新任务的优先级
          --restore, -r      从存档还原条目
          --star, -s         收藏/取消收藏 条目         
          --task, -t         创建任务
          --timeline, -i     显示时间线视图
          --version, -v      显示已安装的版本

        示例
          $ tb
          $ tb --archive                                        # 显示所有删除/归档的条目
          $ tb --begin 2 3                                      # 切换任务ID为2、3的开始/暂停状态
          $ tb --check 1 2                                      # 切换任务ID为1、3的完成状态
          $ tb --clear                                          # 清除/归档所有已完成的任务
          $ tb --copy 1 2 3                                     # 复制任务ID为1、2、3的任务描述到剪切板
          $ tb --delete 4                                       # 删除/归档ID为4的条目
          $ tb --edit @3 Merge PR #42                           # 修改ID为3的条目的描述为“Merge PR #42”
          $ tb --find documentation                             # 查找描述中包含“documentation”的条目
          $ tb --list pending coding                            # 列出“coding”板块中待进行的条目
          $ tb --move @1 cooking                                # 将ID为1的条目移动至“cooking”板块
          $ tb --note @coding Mergesort worse-case O(nlogn)     # 添加一条便签到“coding”板块，其内容为“Mergesort worse-case 0(nlogn)”
          $ tb --priority @3 2                                  # 将ID为3的条目的优先级设置为2
          $ tb --restore 4                                      # 从归档的条目中恢复ID为4的条目
          $ tb --star 2                                         # 为ID为2的条目添加星标（收藏）
          $ tb --task Make some buttercream                     # 添加一个新任务，任务内容（描述）为“Make some buttercream”
          $ tb --task @coding Improve documentation             # 添加任务“Improve documentation”到“coding”板块
          $ tb --task @coding @reviews Review PR #42            # 添加新任务“Review PR #42”到“coding”和“reviews”板块
          $ tb --timeline                                       # 以时间线视图显示

## 查看

### 板块视图

在没有任何附加参数的情况下调用 taskbook，将按分组显示所有项目。

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

### 时间线视图

要在时间线视图中按日期显示所有项目，可以使用`--timeline`/`-i`。

<div align="center">
  <img alt="Timeline View" width="62%" src="../media/timeline.png"/>
</div>

## 配置

要配置 taskbook ，请根据您的个人喜好修改`~/.taskbook.json`中的配置选项。如果要重置回默认值，只需从主目录中删除配置文件即可。

下面的部分会详细介绍所有的可用选项及其默认值。

```json
{
  "taskbookDirectory": "",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### 配置文件

##### `taskbookDirectory`

-   类型: `String`
-   默认: `~`

taskbook的存储路径，例如：`/home/username/the-cloud`或者`~/the-cloud`。

如果未配置本选项，将默认设置为`~/.taskbook/`。

##### `displayCompleteTasks`

-   类型: `Boolean`
-   默认: `true`

是否显示标记为“已完成”的任务。

##### `displayProgressOverview`

-   类型: `Boolean`
-   默认: `true`

是否在时间线和任务板视图下方显示进度概述。

## 使用示例

以下是一组小练习，其中包含 taskbook 的使用示例。如果您发现错误或认为某个示例不够清晰并且应该进一步改进，请[创建一个 issue](https://github.com/klaussinani/taskbook/issues/new/choose) 或[提交 pull request](https://github.com/klaussinani/taskbook/compare)。

### 创建任务

要创建新任务，请使用`--task`/`-t`并在后面加上任务说明。

    $ tb -t Improve documentation

### 创建便签

要创建新便签，请使用`--note`/`-n`并在后面加上便签内容。

    $ tb -n Mergesort worse-case O(nlogn)

### 创建板块

如果创建新任务或便签时，指定的板块不存在，那么会自动新建并初始化板块。<br/>
如果想要将新的任务条目指定给新的板块，那么可以在任务描述前，使用`@`作为前缀，并加上新的板块的名称（您可以同时创建多个板块）。 此时，新创建的任务条目将属于所有给定的板块。<br/>
如果任务条目描述中不包含任何板块名称，那么任务会自动添加到默认板块`My Board`。 

    $ tb -t @coding @docs Update contributing guidelines

### 完成任务

要将任务标记为『完成/待处理』，请使用`--check`/`-c`选项后跟目标任务的 ID。<br/>
请注意，该选项将自动转换给定任务的`complete/pending`（完成/待处理）状态。

例如：<br/>
『完成状态条目』 -> `-c` -> 『待处理状态』<br/>
『待处理状态条目』 -> `-c` -> 『完成状态条目』<br/>
重复的ID会被忽略。

    $ tb -c 1 3
    
### 开始任务

要将任务标记为『开始/暂停』，请使用`--begin`/`-b`选项后跟目标任务的 ID。<br/>
该选项的功能对条目状态转换与`--check`选项功能相同。

### 收藏条目（Star）

要将一个或多个条目标记为收藏，请使用`--star`/`-s`选项后加上目标项的 ID。<br/>
该选项的功能对条目状态转换与`--check`选项功能相同。

    $ tb -s 1 2 3

### 复制条目描述

要复制一个或多个条目描述到你的系统剪贴板，请使用`--copy`/`-y`选项后加上目标项的 ID。<br/>
请注意，该选项会使用回车符作为每个描述的分隔符，从而在剪贴板生成清晰可读的格式。

### 显示板块

在没有任何附加参数的情况下调用 taskbook 将按照分组显示所有已保存条目。

    $ tb

### 显示时间线视图

想要根据其创建日期，在时间线视图中显示所有条目，可以使用`--timeline`/`-i` 。

    $ tb -i

### 设置优先级

要在初始化任务时设置任务的优先级，请包括`p:x`任务描述中的语法。<br/>
其中x可以是值的整数`1`、`2`或`3`。请注意，默认情况下，所有任务都以正常优先级`1`创建。

-   `1`- 正常优先
-   `2`- 中等优先级
-   `3`- 高度优先


    $ tb -t @coding Fix issue `#42` p:3

要在创建任务后更新特定任务的优先级，请使用`--priority`/`-p`选项，紧接着是`@id`（任务条目的`id`），最后是优先等级。<br/>
目标ID和优先级的放置顺序并不重要。

    $ tb -p @1 2

### 移动条目

要将条目移动到一个或多个板块，请使用`--move`/`-m`选项，并加上`@id`（任务条目的`id`），最后是目标板块的名称。<br/>
默认板块`My Board`可以通过`myboard`关键词来访问。目标 ID 和任务版块名称的放置顺序并不重要。

    $ tb -m @1 myboard reviews

### 删除条目

要删除一个或多个条目，请使用`--delete`/`-d`选项，并加上目标条目的 ID。<br/>
已删除的条目会自动存档，并且可以随时完成或还原。重复的 ID 会被忽略。

    $ tb -d 1 2
    
### 删除已完成任务

要删除所有已完成任务，请使用`--clear`选项。请注意，所有被删除的任务会被自动归档，并且可以随时查看或还原。<br/>
为了防止任何可能的意外情况，`--clear`选项没有别名。
  

### 显示归档的条目

要显示所有已归档条目，请使用`--archive`/`-a`选项。<br/>
请注意，所有已归档条目都会根据其创建日期顺序在时间线视图中显示。

    $ tb -a

### 还原条目

要恢复一个或多个条目，请使用`--restore`/`-r`选项后跟目标条目的 ID。<br/>
请注意，该选项调用时可以看到所有已存档条目的 ID。重复的ID会被忽略。

    $ tb -r 1 2

### 列出条目

要列出一组条目，其中每个条目符合特定数量的属性，请使用`--list`/`-l`选项后跟所需的属性。板块名称和条目特征可以被视为有效的列表属性。<br/>
例如，列出属于`myboard`中的所有待处理任务，可以使用以下内容：

    $ tb -l myboard pending

默认支持的列表属性及其各自的别名如下: 

-   `myboard` - 属于`My Board`的条目
-   `task`, `tasks`, `todo` - 作为任务的条目
-   `note`, `notes` - 作为便签的条目
-   `pending`, `unchecked`, `incomplete` - 待处理的任务条目
-   `progress`, `started`, `begun` - 已开始的任务条目
-   `done`, `checked`, `complete` - 已完成的任务条目
-   `star`, `starred` - 已加星标的条目

### 搜索条目

要搜索其中一个条目，请使用`--find`/`-f`选项，并加上您的搜索关键字。

    $ tb -f documentation

## 开发

有关如何为此项目做出贡献的更多信息，请阅读[贡献指南](https://github.com/klaussinani/taskbook/blob/master/contributing.md)。

-   Fork 此仓库库并将其克隆到您的计算机
-   定位到您的本地 Fork: `cd taskbook`
-   安装项目依赖项: `npm install`或`yarn install`
-   测试错误代码: `npm test`或`yarn test`

## 相关

- [signale](https://github.com/klaussinani/signale) - Hackable console logger
- [qoa](https://github.com/klaussinani/qoa) - Minimal interactive command-line prompts
- [hyperocean](https://github.com/klaussinani/hyperocean) - Deep oceanic blue Hyper terminal theme

## 团队

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)
- Mario Sinani [(@mario-sinani)](https://github.com/mario-sinani)

## 授权协议

[MIT](https://github.com/klaussinani/taskbook/blob/master/license.md)
