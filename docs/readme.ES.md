<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  Tareas, tableros y notas para el mundo de líneas de comandos
</h4>

<div align="center">
  <img alt="Boards" width="60%" src="media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/taskbook.svg?branch=master">
  </a>
</p>

## Descripción

Al utilizar una sintaxis mínima y de uso simple —que requiere una curva de aprendizaje plana—, taskbook te permite administrar, de manera efectiva, tus tareas y notas en múltiples tableros desde tu terminal. Todos los datos se escriben en el almacenamiento, de forma atómica, para prevenir la corrupción de los mismos; y nunca son compartidos con nadie ni con nada. Los elementos eliminados se archivan automáticamente y se pueden inspeccionar o restaurar en cualquier momento.

Lee este documento en:
[English](https://github.com/klaussinani/taskbook/blob/master/docs/readme.md), [简体中文](https://github.com/klaussinani/taskbook/blob/master/docs/readme.ZH.md), [Русский](https://github.com/klaussinani/taskbook/blob/master/docs/readme.RU.md), [Français](https://github.com/klaussinani/taskbook/blob/master/docs/readme.FR.md), [Deutsch](https://github.com/klaussinani/taskbook/blob/master/docs/readme.GER.md), [Portuguese](https://github.com/klaussinani/taskbook/blob/master/docs/readme.PT-BR.md), [日本語](https://github.com/klaussinani/taskbook/blob/master/docs/readme.JP.md), [한국어](https://github.com/klaussinani/taskbook/blob/master/docs/readme.KR.md).

Ahora puedes apoyar el proceso de desarrollo a través de [GitHub Sponsors](https://github.com/sponsors/klaussinani).

Visita la [guía de contribuciones](https://github.com/klaussinani/taskbook/blob/master/contributing.md#translating-documentation) para obtener más información sobre cómo traducir este documento a más idiomas.

Ven a [Gitter](https://gitter.im/klaussinani/taskbook) o [Twitter](https://twitter.com/klaussinani) para compartir tus pensamientos sobre el proyecto.

## Funciones destacadas

- Organiza tareas y notas en tableros
- Vistas de tablero y línea de tiempo
- Mecanismos de prioridad y favoritos
- Busca y filtra elementos
- Archiva y restaura elementos eliminados
- Ligero y rápido
- Datos escritos de forma atómica en el almacenamiento
- Ubicación personalizada de almacenamiento
- Resumen de progreso
- Sintaxis de uso simple y mínimo
- Notificación de actualizaciones
- Configurable mediante `~/.taskbook.json`
- Datos almacenados en un archivo JSON en `~/.taskbook/storage`

Mira las funciones destacadas en un [tablero de taskbook](https://raw.githubusercontent.com/klaussinani/taskbook/master/media/highlights.png).

## Contenido

- [Descripción](#descripción)
- [Funciones destacadas](#funciones-destacadas)
- [Contenido](#contenido)
- [Instalación](#instalación)
  - [Yarn](#yarn)
  - [NPM](#npm)
  - [Snapcraft](#snapcraft)
- [Uso](#uso)
- [Vistas](#vistas)
  - [Vista de tablero](#vista-de-tablero)
  - [Vista de línea de tiempo](#vista-de-línea-de-tiempo)
- [Configuración](#configuración)
  - [Configuración detallada](#configuración-detallada)
      - [`taskbookDirectory`](#taskbookdirectory)
      - [`displayCompleteTasks`](#displaycompletetasks)
      - [`displayProgressOverview`](#displayprogressoverview)
- [Manual de vuelo](#manual-de-vuelo)
  - [Crear tarea](#crear-tarea)
  - [Crear nota](#crear-nota)
  - [Crear tablero](#crear-tablero)
  - [Marcar tarea](#marcar-tarea)
  - [Iniciar tarea](#iniciar-tarea)
  - [Marcar elemento como favorito](#marcar-elemento-como-favorito)
  - [Copiar descripción de un elemento](#copiar-descripción-de-un-elemento)
  - [Mostrar tableros](#mostrar-tableros)
  - [Mostrar línea de tiempo](#mostrar-línea-de-tiempo)
  - [Establecer prioridad](#establecer-prioridad)
  - [Mover elemento](#mover-elemento)
  - [Eliminar elemento](#eliminar-elemento)
  - [Eliminar tareas marcadas](#eliminar-tareas-marcadas)
  - [Ver elementos archivados](#ver-elementos-archivados)
  - [Restaurar elementos archivados](#restaurar-elementos-archivados)
  - [Listar elementos](#listar-elementos)
  - [Artículos de búsqueda](#artículos-de-búsqueda)
- [Desarrollo](#desarrollo)
- [Relacionado](#relacionado)
- [Equipo](#equipo)
- [Licencia](#licencia)

## Instalación

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

**Nota:** Debido a la naturaleza estrictamente confinada de _snap_, tanto los archivos de almacenamiento como los de configuración se guardarán en la variable de entorno [`$SNAP_USER_DATA`](https://docs.snapcraft.io/reference/env), en lugar de la genérica (`$HOME`).

## Uso

```
$ tb --help

  Usage
    $ tb [<options> ...]

    Options
        ninguna          Mostrar vista de tablero
      --archive, -a      Mostrar elementos archivados
      --begin, -b        Iniciar/pausar tarea
      --check, -c        Marcar/desmarcar tarea
      --clear            Eliminar todos los elementos marcados
      --copy, -y         Copiar descripción de una tarea
      --delete, -d       Eliminar tarea
      --edit, -e         Editar descripción de una tarea
      --find, -f         Buscar tareas
      --help, -h         Mostrar mensaje de ayuda
      --list, -l         Listar tareas por atributos
      --move, -m         Mover tarea entre tableros
      --note, -n         Crear nota
      --priority, -p     Actualizar la prioridad de una tarea
      --restore, -r      Restaurar elementos archivados
      --star, -s         Agregar/remover tarea a/de favoritos
      --task, -t         Crear tarea
      --timeline, -i     Mostrar vista de línea de tiempo
      --version, -v      Mostrar versión instalada

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

## Vistas

### Vista de tablero

Invocar taskbook sin ninguna opción mostrará todos los elementos guardados agrupados en sus respectivos tableros.

<div align="center">
  <img alt="Boards" width="60%" src="media/header-boards.png"/>
</div>

### Vista de línea de tiempo

Para mostrar todos los elementos en una vista de línea de tiempo, según su fecha de creación, puedes usar la opción `--timeline`/`-i`.

<div align="center">
  <img alt="Timeline View" width="62%" src="media/timeline.png"/>
</div>

## Configuración

Para configurar taskbook, localiza el archivo `~/.taskbook.json` y modifica cualquiera de las opciones acorde a tus preferencias. Para restablecer los valores predeterminados, simplemente elimina el archivo de configuración de tu directorio raíz.

A continuación, se ilustran todas las opciones disponibles con sus correspondientes valores predeterminados.

```json
{
  "taskbookDirectory": "~",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### Configuración detallada

##### `taskbookDirectory`

- Tipo: `String`
- Valor predeterminado: `~`

Ruta del sistema de archivos donde se inicializará el almacenamiento, por ejemplo: `/home/username/the-cloud` o `~/the-cloud`

Si no se define, se utilizará el directorio raíz `~` y taskbook se configurará en `~/.taskbook/`.

##### `displayCompleteTasks`

- Tipo: `Boolean`
- Valor predeterminado: `true`

Muestra las tareas marcadas como completadas.

##### `displayProgressOverview`

- Tipo: `Boolean`
- Valor predeterminado: `true`

Muestra una descripción general del progreso debajo de las vistas de línea de tiempo y de tablero.

## Manual de vuelo

El siguiente es un tutorial sencillo, compuesto de varios ejemplos sobre cómo usar taskbook.
En caso de que encuentres un error o consideres que un ejemplo no es lo suficientemente claro y debería mejorarse, no dudes en abrir un [_issue_](https://github.com/klaussinani/taskbook/issues/new/choose) o [_pull request_](https://github.com/klaussinani/taskbook/compare).

### Crear tarea

Para crear una nueva tarea, usa la opción `--task`/`-t` seguida de la descripción de la tarea.

```bash
$ tb -t Mejorar documentación
```

### Crear nota

Para crear una nueva nota, usa la opción `--note`/`-n` seguida del contenido de la nota.

```bash
$ tb -n Mergesort worse-case O(nlogn)
```

### Crear tablero

Los tableros se inicializan automáticamente al crear una nueva tarea o nota. Para crear uno o más tableros, incluye su(s) nombre(s), precedido(s) por el símbolo `@`, en la descripción del elemento que está a punto de crearse. Como resultado, el elemento recién creado pertenecerá a todos los tableros referenciados. De forma predeterminada, los elementos que no incluyen el nombre de ningún tablero en su descripción, se agregan automáticamente al tablero de uso general: `My Board`.

```bash
$ tb -t @coding @docs Actualizar las guías de contribución
```

### Marcar tarea

Para marcar una tarea como completa/incompleta, usa la opción `--check`/`-c` seguida de los identificadores de las tareas a modificar. Ten en cuenta que esta opción actualizará el estado `complete` de las tareas dadas a su valor opuesto, por lo que al usar esta opción con una tarea completa, esta se marcará como pendiente y una tarea pendiente se marcará como completa. Los IDs duplicados se filtran automáticamente.

```bash
$ tb -c 1 3
```

### Iniciar tarea

Para marcar una tarea como iniciada/pausada, usa la opción `--begin`/`-b` seguida de los identificadores de las tareas a marcar. La funcionalidad de esta opción es la misma que la de la opción `--check` descrita anteriormente.

```bash
$ tb -b 2 3
```

### Marcar elemento como favorito

Para marcar uno o más elementos como favoritos, usa la opción `--star`/`-s` seguida de los identificadores de los elementos a marcar. La funcionalidad de esta opción es la misma que la de la opción `--check` descrita anteriormente.

```bash
$ tb -s 1 2 3
```

### Copiar descripción de un elemento

Para copiar al portapapeles de tu sistema la descripción de uno o más elementos, utiliza la opción `--copy`/`-y`, seguida de los identificadores de los elementos a copiar. Ten en cuenta que esta opción también incluirá el caracter de nueva línea como separador de cada par de descripciones copiadas adyacentes, lo que dará como resultado una lista clara y legible de oraciones al pegar.

```bash
$ tb -y 1 2 3
```

### Mostrar tableros

Al invocar taskbook sin ninguna opción, se mostrarán todos los elementos guardados agrupados en sus respectivos tableros.

```bash
$ tb
```

### Mostrar línea de tiempo

Para mostrar todos los elementos en una vista de línea de tiempo, según su fecha de creación, puedes usar la opción `--timeline`/`-i`.

```bash
$ tb -i
```

### Establecer prioridad

Para establecer el nivel de prioridad de una tarea durante su creación, incluye la sintaxis `p:x` en la descripción de la tarea, donde `x` puede ser un número entero de valor `1`, `2` o `3`. Ten en cuenta que todas las tareas se crean de forma predeterminada con una prioridad normal, es decir, `1`.

- `1` - Prioridad normal
- `2` - Prioridad media
- `3` - Prioridad alta

```bash
$ tb -t @coding Fix issue `#42` p:3
```

Para actualizar la prioridad de una tarea específica después de su creación, usa la opción `--priority`/`-p` junto con el ID de la tarea a actualizar —precedido por el símbolo `@`—, seguida de un número entero de valor `1` , `2` o `3` (como nueva prioridad). Ten en cuenta que el orden en el que se colocan el ID de la tarea a editar y el nuevo nivel de prioridad no es significativo.

```bash
$ tb -p @1 2
```

### Mover elemento

Para mover una elemento a uno o más tableros, usa la opción `--move`/`-m`, junto con el ID del elemento a mover —precedido por el símbolo `@`—, y el nombre de los tableros de destino. Se puede acceder al tablero predeterminado, `My board`, a través de la palabra clave `myboard`. El orden en el que se colocan el ID del elemento a mover y el(los) nombre(s) de l(os) tablero(s) no es significativo.

```bash
$ tb -m @1 myboard reviews
```

### Eliminar elemento

Para eliminar uno o más elementos, usa la opción `--delete`/`-d`, seguida de los identificadores de los elementos a eliminar. Ten en cuenta que los elementos eliminados se archivan automáticamente y se pueden inspeccionar o restaurar en cualquier momento. Los IDs duplicados se filtran automáticamente.

```bash
$ tb -d 1 2
```

### Eliminar tareas marcadas

Para eliminar/borrar todas las tareas completas —a la vez— de todos los tableros, usa la opción `--clear`. Ten en cuenta que todas las tareas eliminadas se archivan automáticamente y se pueden inspeccionar o restaurar en cualquier momento. Con el fin de prevenir cualquier posible uso accidental, no existe un alias más corto para la opción `--clear`.

```bash
$ tb --clear
```

### Ver elementos archivados

Para ver todos los elementos archivados, usa la opción `--archive`/`-a`. Ten en cuenta que todos los elementos archivados se muestran en la vista de línea de tiempo, según su fecha de creación.

```bash
$ tb -a
```

### Restaurar elementos archivados

Para restaurar uno o más elementos, usa la opción `--restore`/`-r` seguida de los identificadores de los elementos a restaurar. Ten en cuenta que los IDs de todos los elementos archivados se pueden ver al invocar la opción `--archive`/`-a`. Los IDs duplicados se filtran automáticamente.

```bash
$ tb -r 1 2
```

### Listar elementos

Para listar un grupo de elementos donde cada uno cumple con un conjunto específico de atributos, usa la opción `--list`/`-l` seguida de los atributos requeridos. Los nombres de los tableros junto con los estados de los elementos a listar, se consideran atributos válidos. Por ejemplo, para listar todos los elementos que pertenecen al tablero predeterminado (`myboard`) y que son tareas pendientes, se podría usar lo siguiente:

```bash
$ tb -l myboard pending
```

Los atributos admitidos por defecto, junto con sus respectivos alias, son los siguientes

- `myboard` - Tareas que pertencen a `My board`.
- `task`, `tasks`, `todo` - Elementos que son tareas.
- `note`, `notes` - Elementos que son notas.
- `pending`, `unchecked`, `incomplete` - Elementos que son tareas pendientes.
- `progress`, `started`, `begun` - Elementos que son tareas en progreso.
- `done`, `checked`, `complete` - Elementos que son tareas completadas.
- `star`, `starred` - Elementos favoritos.

### Artículos de búsqueda

Para buscar uno o más elementos, usa la opción `--find`/`-f`, seguida de tus términos de búsqueda.

```bash
$ tb -f documentation
```

## Desarrollo

Para más información sobre cómo contribuir al proyecto, lee las [guías de contribución](https://github.com/klaussinani/taskbook/blob/master/contributing.md).

- Haz un _fork_ del repositorio y clónalo en tu computadora
- Navega a tu _fork_ local: `cd taskbook`
- Instala las dependencias del proyecto: `npm install` o `yarn install`
- Escanea (_lint_) el código en busca de errores: `npm test` o `yarn test`

## Relacionado

- [signale](https://github.com/klaussinani/signale) - Utilidad de registro altamente configurable
- [qoa](https://github.com/klaussinani/qoa) - Indicaciones de línea de comandos interactivas y minimalista
- [hyperocean](https://github.com/klaussinani/hyperocean) - Deep oceanic blue, tema para el terminal Hyper

## Equipo

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)
- Mario Sinani [(@mariosinani)](https://github.com/mariosinani)

## Licencia

[MIT](https://github.com/klaussinani/taskbook/blob/master/license.md)
