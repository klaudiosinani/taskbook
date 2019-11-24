<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  Tarefas, quadros & notas para o habitat de linha de comando
</h4>

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/taskbook.svg?branch=master">
  </a>
</p>

## Descrição

Utilizando uma sintaxe mínima e simples, que requere uma curva de aprendizado plana, taskbook permite à você gerenciar suas tarefas e notas através de múltiplos quadros de dentro do seu terminal. Todos os dados são salvos automaticamente no armazenamento com o intuito de prevenir corrupções, e não são compartilhados com ninguém. Items deletados são automaticamente arquivados e podem ser inspecionados ou restorados a qualquer momento.

Leia este documento em:
[简体中文](https://github.com/klaussinani/taskbook/blob/master/docs/readme.ZH.md), [Русский](https://github.com/klaussinani/taskbook/blob/master/docs/readme.RU.md), [Français](https://github.com/klaussinani/taskbook/blob/master/docs/readme.FR.md), [Deutsch](https://github.com/klaussinani/taskbook/blob/master/docs/readme.GER.md), [Portuguese](https://github.com/klaussinani/taskbook/blob/master/docs/readme.PT-BR.md).

Agora você pode ajudar o processo de desenvolvimento via [GitHub Sponsors](https://github.com/sponsors/klaussinani).

Visite as [orientações de contribuição](https://github.com/klaussinani/taskbook/blob/master/contributing.md#translating-documentation) para mais informações sobre como traduzir este documento para outras línguas.

Venha para o [Gitter](https://gitter.im/klaussinani/taskbook) ou [Twitter](https://twitter.com/klaussinani) para compartilhar seus pensamentos sobre o projeto.

## Destaques

- Organize tarefas & notas em quadros
- Visualize suas tarefas/notas em quadros & linha do tempo
- Sistema de prioridades & favoritos
- Pesquise & filtre itens
- Arquive & restaure itens deletados
- Leve & rápido
- Dados são salvos automaticamente no armazenamento
- Local de armazenamento customizável
- Visão geral do progresso
- Sintaxe de uso mínima & simples
- Notificações de atualizações
- Configurável atráves de ~/.taskbook.json
- Dados são salvos em arquivos JSON no diretório ~/.taskbook/storage

Ver destaques em um [quadro no taskbook](https://raw.githubusercontent.com/klaussinani/taskbook/master/media/highlights.png).

## Conteúdo

- [Descrição](#descrição)
- [Destaques](#destaques)
- [Instalação](#instalação)
- [Uso](#uso)
- [Visualizações](#visualizações)
- [Configuração](#configuração)
- [Manual de vôo](#manual-de-vôo)
- [Desenvolvimento](#desenvolvimento)
- [Relacionado](#relacionados)
- [Time](#time)
- [Licença](#licença)

## Instalação

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

**Nota:** Devido à natureza estritamente confinada do snap, ambos os arquivos de armazanamento e configuração serão salvos sobre variável de ambiente [`$SNAP_USER_DATA`](https://docs.snapcraft.io/reference/env) ao invés da genérica `$HOME`

## Uso

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

## Visualizações

### Quadros

Invocando taskbook sem nenhuma opção mostrará todos os itens salvos agrupados em seus respectivos quadros.

<div align="center">
  <img alt="Boards" width="60%" src="../media/header-boards.png"/>
</div>

### Linha do tempo

Afim de listar todos os itens em uma linha do tempo, baseados nas datas de criação, a opção `--timeline/-i`  pode ser usada.

<div align="center">
  <img alt="Timeline View" width="62%" src="../media/timeline.png"/>
</div>

## Configuração

Para configurar o taskbook navegue até o aquivo `~/.taskbook.json` e modifique qualquer opção para se adequar às suas preferências. Para resetas aos valores iniciais simplesmente delete este arquivo do diretório raiz do seu usuário e um novo será automaticamente criado.

Abaixo estão todas as opções disponíveis e seus respectivos valores padrões.

```json
{
  "taskbookDirectory": "~",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### Em Detalhes

##### `taskbookDirectory`

- Type: `String`
- Default: `~`

Caminho no sistema de aquivos onde o armazenado será inicializado, ex.: `/home/username/the-cloud` ou `~/the-cloud`

Se não definido, seu diretório raiz `~` será usado e taskbook será instalado em `~/.taskbook/`.

##### `displayCompleteTasks`

- Type: `Boolean`
- Default: `true`

Mostra tarefas que foram marcadas como completadas.

##### `displayProgressOverview`

- Type: `Boolean`
- Default: `true`

Mostra uma visualização geral do progresso abaixo da linha do tempo e dos quadros.

## Manual de vôo

A seguir é apresentado um pequeno passo a passo que contém um conjunto de exemplos de como usar taskbook.

No caso de você encontrar algum erro ou achar que um exemplo não está claro o suficiente e que pode ser melhorado, sinta-se livre para abrir uma [issue](https://github.com/klaussinani/taskbook/issues/new/choose) ou um [pull-reques](https://github.com/klaussinani/taskbook/compare).

### Criar Tarefa

Para criar uma nova tarefa use opção `--task`/`-t` seguido da descrição da sua tarefa.

```
$ tb -t Improve documentation
```

### Criar Nota

Para criar uma nova nota use a opção `--note`/`-n` seguido do conteúdo da sua nota.

```
$ tb -n Mergesort worse-case O(nlogn)
```

### Criar Quadro

Quadros são automaticamente inicializados quando uma nova tarefa ou nota é criada.

Para criar um ou mais quadros, inclua seus nomes prefixados por um `@` na descrição do item a ser criado. Como resultado, o item criado pertencerá a todos os quadros especificados. Por padrão, itens que não contém nenhum quadro especificado são automaticamente adicionados no quadro geral: `My board`.

```
$ tb -t @coding @docs Update contributing guidelines
```

### Marcar Tarefa

Para marcar uma tarefa como completa/incompleta, use a opção `--check`/`-c` seguido dos ids das tarefas que deseja marcar. Note que esta opção irá atualizar para o oposto do status de `complete` atual das tarefas especificadas, portanto marcando uma tarefa completada irá listá-la como pendente, e uma tarefa pendente como completada. Ids duplicados são automaticamente filtrados.

```
$ tb -c 1 3
```

### Começar Tarefa

Para marcar uma tarefa como iniciada/pausada use a opção `--begin`/`-b` seguido dos ids das tarefas desejadas. A funcionalidade desta opção é a mesma da opção `--check` descrita acima.

```
$ tb -b 2 3
```

### Favoritar Item

Para marcar um ou mais itens como favorito, use a opção `--star`/`-s` seguido dos ids dos itens que deseja favoritar. A funcionalidade desta opção é a mesma da opção `--check` descrita acima.

```
$ tb -s 1 2 3
```

### Copiar Descrição do Item

Para copiar para o clipboard do seu sistema a descrição de um ou mais itens, use a opção `--copy`/`-y` seguido dos ids dos itens desejados. Note que esta opção irá incluir também novas linhas como separador para cada par de descrições adjacentes copiadas, portanto resultando em uma sentença clara e legível.

```
$ tb -y 1 2 3
```

### Mostrar Quadros

Chamando taskbook sem passar nenhuma opção mostrará todos os itens salvos agrupados em seus respectivos quadros.

```
$ tb
```

### Mostrar Linha do Tempo

Para mostrar todos os itens em uma linha do tempo, baseados na sua data de criação, pode ser usada a opção `--timeline`/`-i`.

```
$ tb -i
```

### Definir Prioridade

Para definir o nível de prioridade de uma tarefa ao criá-la, inclua a sintaxe `p:x` em sua descrição, onde `x` pode ser um número inteiro de valor `1`, `2` ou `3`. Note que todas as tarefas são criadas por padrão com prioridade normal - `1`.

- `1` - Prioridade normal
- `2` - Prioridade média
- `3` - Prioridade alta

```
$ tb -t @coding Fix issue `#42` p:3
```

Para atualizar o nível de prioridade de uma tarefa específica após sua criação, use a opção `--priority`/`-p` junto com o id da tarefa prefixado com um `@` e um número inteiro de valor `1`, `2` ou `3`. Note que a ordem em que o id da tarefa e o nível de prioridade são colocados não são significantes.

```
$ tb -p @1 2
```

### Mover Item

Para mover um item para um ou mais quadros, use a opção `--move`/`-m`, seguido dos ids dos itens prefixado com um `@` e o nome dos quadros de destino. O quadro padrão `My board` pode ser acessado pela palavra-chave `myboard`. A ordem em que os ids do itens e os nomes dos quadros são colocados não são significantes.

```
$ tb -m @1 myboard reviews
```

### Deletar Item

Para deletar um ou mais itens, use a opção `--delete`/`-d` seguido dos ids dos itens que deseja deletar. Note que itens deletados são automaticamente arquivados e podem ser inspecionados ou restaurados a qualquer momento. Ids duplicados são automaticamente filtrados.

```
$ tb -d 1 2
```

### Deletar Tarefas Completadas

Para deletar todas as tarefas completadas de uma vez em todos os quadros, use a opção `--clear`. Note que itens deletados são automaticamente arquivados e podem ser inspecionados ou restaurados a qualquer momento. Esta opção não tem nenhum atalho afim de evitar possíveis acidentes de uso.

```
$ tb --clear
```

### Mostrar Arquivo

Para mostrar todos os itens arquivados, use a opção `--archive`/`-a`. Note que todos os itens arquivados são mostrados em uma linha do tempo, baseados em sua data de criação.

```
$ tb -a
```

### Restaurar Itens

Para restaurar um ou mais itens, use a opção `--restore`/`-r` seguido dos ids dos itens que deseja restaurar. Note que os ids dos itens arquivados podem ser vistos invocando a opção `--archive`/`-a`. Ids duplicados são automaticamente filtrados.

```
$ tb -r 1 2
```

### Listar Itens

Para listar um grupo de itens onde cada item cumpre com um conjunto de atributos especĩficos, use a opção `--list`/`-l` seguido dos atributos desejados. Nomes de quadros com características dos itens podem ser considerados atributos de listagem válidos. Por exemplo, para listar todos os itens que pertencem ao quadro padrão `myboard` e são tarefas pendentes, o comando a seguir pode ser usado:

```
$ tb -l myboard pending
```

Os atributos de listagem padrão suportados, junto com seus respectivos atalhos, são os seguintes:

- `myboard` - Itens que pertencem ao quadro `My board`.
- `task`, `tasks`, `todo` - Itens que são tarefas.
- `note`, `notes` - Itens que são notas.
- `pending`, `unchecked`, `incomplete` - Itens que são tarefas pendentes.
- `progress`, `started`, `begun` - Itens que são tarefas em progresso.
- `done`, `checked`, `complete` - Itens que são tarefas completadas.
- `star`, `starred` - Itens favoritados

### Pesquisar Itens

Para pesquisar por um ou mais itens, use a opção `--find`/`-f`, seguido dos termos que deseja pesquisar.

```
$ tb -f documentation
```

## Desenvolvimento

Para mais informações sobre como contribuir com o projeto, por favor leia o [guia de contribução](https://github.com/klaussinani/taskbook/blob/master/contributing.md).

- Fork o repositório e faça um clone para sua máquina
- Navegue até o  local do clone: `cd taskbook`
- Instale as dependências do projeto: `npm install` or `yarn install`
- Teste o código em busca de erros: `npm test` or `yarn test`

## Relacionados

- [signale](https://github.com/klaussinani/signale) - Highly configurable logging utility
- [qoa](https://github.com/klaussinani/qoa) - Minimal interactive command-line prompts
- [hyperocean](https://github.com/klaussinani/hyperocean) - Deep oceanic blue Hyper terminal theme

## Time

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)
- Mario Sinani [(@mariosinani)](https://github.com/mariosinani)

## Licença

[MIT](https://github.com/klaussinani/taskbook/blob/master/license.md)
