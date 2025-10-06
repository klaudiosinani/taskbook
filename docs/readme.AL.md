<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  Detyra, panele dhe shënime për mjedisin e linjës së komandës
</h4>

<div align="center">
  <img alt="Boards" width="70%" src="../media/header-boards.png"/>
</div>

<div align="center">
  <br>
  <sup><b>Sponsorizuar nga:</b></sup>
  <br>
  <a href="https://betterstack.com">
    <div>
      <img src="https://github.com/Seldaek/monolog/assets/183678/7de58ce0-2fa2-45c0-b3e8-e60cebb3c4cf" width="200" alt="Better Stack">
    </div>
    <sup>
      Zbulo, Zgjidh dhe Parandaloni Kohën e Pushimit.
    </sup>
  </a>
</div>

## Përshkrimi

Duke përdorur një sintaksë përdorimi të thjeshtë dhe minimale, që kërkon një kurbë të sheshtë mësimi, taskbook ju mundëson të menaxhoni në mënyrë efektive detyrat dhe shënimet tuaja nëpër panele të shumta nga brenda terminalit tuaj. Të gjitha të dhënat shkruhen atomikisht në depozitë për të parandaluar korruptimet, dhe nuk ndahen kurrë me askënd ose asgjë. Artikujt e fshirë arkivohen automatikisht dhe mund të inspektohen ose rikthehen në çdo moment.

Lexoni këtë dokument në:
[English](https://github.com/klaudiosinani/taskbook/blob/master/readme.md), [Polski](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.PL.md), [简体中文](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.ZH.md), [Русский](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.RU.md), [Français](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.FR.md), [Deutsch](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.GER.md), [Portuguese](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.PT-BR.md), [日本語](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.JP.md), [한국어](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.KR.md), [Spanish](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.ES.md), [Bulgarian](https://github.com/klaudiosinani/taskbook/blob/master/docs/readme.BG.md).

Tani mund të mbështetni procesin e zhvillimit përmes [GitHub Sponsors](https://github.com/sponsors/klaudiosinani).

Vizitoni [contributing guidelines](https://github.com/klaudiosinani/taskbook/blob/master/contributing.md#translating-documentation) për të mësuar më shumë se si të përktheni këtë dokument në më shumë gjuhë.

## Karakteristikat Kryesore

- Organizoni detyrat dhe shënimet në panele
- Shikime paneli dhe kronologjie
- Mekanizma prioriteti dhe të preferuara
- Kërkoni dhe filtroni artikujt
- Arkivoni dhe riktheni artikujt e fshirë
- I lehtë dhe i shpejtë
- Të dhënat shkruhen atomikisht në depozitë
- Vendndodhje e personalizuar depozitimi
- Përmbledhje e progresit
- Sintaksë përdorimi e thjeshtë dhe minimale
- Njoftimet e përditësimeve
- E konfigurueshme përmes `~/.taskbook.json`
- Të dhënat ruhen në skedar JSON në `~/.taskbook/storage`

Shihni karakteristikat kryesore në një [taskbook board](https://raw.githubusercontent.com/klaudiosinani/taskbook/master/media/highlights.png).

## Përmbajtja

- [Përshkrimi](#përshkrimi)
- [Karakteristikat Kryesore](#karakteristikat-kryesore)
- [Instalimi](#instalimi)
- [Përdorimi](#përdorimi)
- [Shikimet](#shikimet)
- [Konfigurimi](#konfigurimi)
- [Manuali i Fluturimit](#manuali-i-fluturimit)
- [Zhvillimi](#zhvillimi)
- [Të Lidhura](#të-lidhura)
- [Ekipi](#ekipi)
- [Sponsorët](#sponsorët)
- [Licenca](#licenca)

## Instalimi

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

**Shënim:** Për shkak të natyrës së rreptë të kufizuar të snap, edhe skedarët e depozitimit edhe ata të konfigurimit do të ruhen nën ndryshoren e mjedisit [`$SNAP_USER_DATA`](https://docs.snapcraft.io/reference/env) në vend të asaj generike `$HOME`.

## Përdorimi

```
$ tb --help

  Përdorimi
    $ tb [<options> ...]

    Opsionet
        none             Shfaq shikimin e panelit
      --archive, -a      Shfaq artikujt e arkivuar
      --begin, -b        Fillo/ndalo detyrën
      --check, -c        Shëno/hiq shenjën e detyrës
      --clear            Fshij të gjithë artikujt e shënuar
      --copy, -y         Kopjo përshkrimin e artikullit
      --delete, -d       Fshij artikullin
      --edit, -e         Redakto përshkrimin e artikullit
      --find, -f         Kërko për artikuj
      --help, -h         Shfaq mesazhin e ndihmës
      --list, -l         Listo artikujt sipas atributeve
      --move, -m         Lëviz artikullin midis paneleve
      --note, -n         Krijo shënim
      --priority, -p     Përditëso prioritetin e detyrës
      --restore, -r      Rikthe artikujt nga arkiva
      --star, -s         Vlerëso/hiq vlerësimin e artikullit
      --task, -t         Krijo detyrë
      --timeline, -i     Shfaq shikimin e kronologjisë
      --version, -v      Shfaq versionin e instaluar

    Shembuj
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

## Shikimet

### Shikimi i Panelit

Thirrja e taskbook pa asnjë opsion do të shfaqë të gjithë artikujt e ruajtur të grupuar në panelet e tyre përkatëse.

<div align="center">
  <img alt="Boards" width="60%" src="media/header-boards.png"/>
</div>

### Shikimi i Kronologjisë

Për të shfaqur të gjithë artikujt në një shikim kronologjie, të bazuar në datën e krijimit të tyre, mund të përdoret opsioni `--timeline`/`-i`.

<div align="center">
  <img alt="Timeline View" width="62%" src="media/timeline.png"/>
</div>

## Konfigurimi

Për të konfiguruar taskbook navigoni në skedarin `~/.taskbook.json` dhe modifikoni çdo opsion për t'u përshtatur me preferencën tuaj. Për t'u kthyer në vlerat e parazgjedhura, thjesht fshini skedarin e konfigurimit nga direktoria juaj kryesore.

Sa më poshtë ilustron të gjitha opsionet e disponueshme me vlerat e tyre përkatëse të parazgjedhura.

```json
{
  "taskbookDirectory": "~",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### Në Detaj

##### `taskbookDirectory`

- Lloji: `String`
- E parazgjedhur: `~`

Rruga e sistemit të skedarëve ku do të inicializohet depozitimi, p.sh: `/home/username/the-cloud` ose `~/the-cloud`

Nëse lihet e papërcaktuar do të përdoret direktoria kryesore `~` dhe taskbook do të vendoset nën `~/.taskbook/`.

##### `displayCompleteTasks`

- Lloji: `Boolean`
- E parazgjedhur: `true`

Shfaq detyrat që janë shënuar si të përfunduara.

##### `displayProgressOverview`

- Lloji: `Boolean`
- E parazgjedhur: `true`

Shfaq përmbledhjen e progresit poshtë shikimeve të kronologjisë dhe panelit.

## Manuali i Fluturimit

Sa më poshtë është një udhëzues i vogël që përmban një grup shembujsh se si të përdorni taskbook. Në rast se zbuluat një gabim ose mendoni se një shembull nuk është mjaftueshëm i qartë dhe duhet përmirësuar më tej, ju lutemi mos hezitoni të hapni një [issue](https://github.com/klaudiosinani/taskbook/issues/new/choose) ose [pull request](https://github.com/klaudiosinani/taskbook/compare).

### Krijoni Detyrë

Për të krijuar një detyrë të re përdorni opsionin `--task`/`-t` me përshkrimin e detyrës tuaj që vjen menjëherë pas.

```
$ tb -t Improve documentation
```

### Krijoni Shënim

Për të krijuar një shënim të ri përdorni opsionin `--note`/`-n` me përmbajtjen e shënimit tuaj që vjen menjëherë pas.

```
$ tb -n Mergesort worse-case O(nlogn)
```

### Krijoni Panel

Panelet inicializohen automatikisht kur krijoni një detyrë ose shënim të ri. Për të krijuar një ose më shumë panele, përfshini emrat e tyre, të parapriur nga simboli `@`, në përshkrimin e artikullit që do të krijohet. Si rezultat artikulli i krijuar rishtëm do t'i përkasë të gjithë paneleve të dhëna. Në mënyrë të parazgjedhur, artikujt që nuk përmbajnë asnjë emër paneli në përshkrimin e tyre shtohen automatikisht në qëllimin e përgjithshëm; `My Board`.

```
$ tb -t @coding @docs Update contributing guidelines
```

### Shëno Detyrën

Për të shënuar një detyrë si të përfunduar/të papërfundur, përdorni opsionin `--check`/`-c` të ndjekur nga identifikuesit e detyrave të synuara. Vini re se opsioni do të përditësojë në të kundërtën e tij statusin `complete` të detyrave të dhëna, kështu që shënimi i një detyre të përfunduar do ta bëjë atë në pritje dhe një detyrë në pritje si të përfunduar. Identifikuesit dublikatë filtrohen automatikisht.

```
$ tb -c 1 3
```

### Filloni Detyrën

Për të shënuar një detyrë si të filluar/në pauzë, përdorni opsionin `--begin`/`-b` të ndjekur nga identifikuesit e detyrave të synuara. Funksionaliteti i këtij opsioni është i njëjtë me atë të opsionit `--check` të përshkruar më lart.

```
$ tb -b 2 3
```

### Vlerëso Artikullin

Për të shënuar një ose më shumë artikuj si të preferuar, përdorni opsionin `--star`/`-s` të ndjekur nga identifikuesit e artikujve të synuar. Funksionaliteti i këtij opsioni është i njëjtë me atë të opsionit `--check` të përshkruar më lart.

```
$ tb -s 1 2 3
```

### Kopjo Përshkrimin e Artikullit

Për të kopjuar në clipboard-in e sistemit tuaj përshkrimin e një ose më shumë artikujve, përdorni opsionin `--copy`/`-y` të ndjekur nga identifikuesit e artikujve të synuar. Vini re se opsioni do të përfshijë edhe karakterin e linjës së re si ndarës për çdo çift të përshkrimeve të kopjuara fqinje, duke rezultuar kështu në një grumbull të qartë dhe të lexueshëm frazash në ngjitje.

```
$ tb -y 1 2 3
```

### Shfaq Panelet

Thirrja e taskbook pa asnjë opsion do të shfaqë të gjithë artikujt e ruajtur të grupuar në panelet e tyre përkatëse.

```
$ tb
```

### Shfaq Kronologjinë

Për të shfaqur të gjithë artikujt në një shikim kronologjie, të bazuar në datën e krijimit të tyre, mund të përdoret opsioni `--timeline`/`-i`.

```
$ tb -i
```

### Caktoni Prioritetin

Për të vendosur një nivel prioriteti për një detyrë gjatë inicializimit të saj, përfshini sintaksën `p:x` në përshkrimin e detyrës, ku x mund të jetë një numër i plotë me vlerë `1`, `2` ose `3`. Vini re se të gjitha detyrat në mënyrë të parazgjedhur krijohen me një prioritet normal - `1`.

- `1` - Prioritet normal
- `2` - Prioritet mesatar
- `3` - Prioritet i lartë

```
$ tb -t @coding Fix issue `#42` p:3
```

Për të përditësuar nivelin e prioritetit të një detyre specifike pas krijimit të saj, përdorni opsionin `--priority`/`-p` së bashku me identifikuesin e detyrës së synuar, të parapriur nga simboli `@`, dhe një numër të plotë me vlerë `1`, `2` ose `3`. Vini re se rendi në të cilin janë vendosur identifikuesi i synuar dhe niveli i prioritetit nuk është i rëndësishëm.

```
$ tb -p @1 2
```

### Lëvizni Artikullin

Për të lëvizur një artikull në një ose më shumë panele, përdorni opsionin `--move`/`-m`, të ndjekur nga identifikuesi i artikullit të synuar, i parapriur nga simboli `@`, dhe emri i paneleve të destinacionit. Paneli i parazgjedhur `My board` mund të aksesohet përmes fjalës kyçe `myboard`. Rendi në të cilin janë vendosur identifikuesi i synuar dhe emrat e paneleve nuk është i rëndësishëm.

```
$ tb -m @1 myboard reviews
```

### Fshij Artikullin

Për të fshirë një ose më shumë artikuj, përdorni opsionet `--delete`/`-d` të ndjekura nga identifikuesit e artikujve të synuar. Vini re se artikujt e fshirë arkivohen automatikisht, dhe mund të inspektohen ose rikthehen në çdo moment. Identifikuesit dublikatë filtrohen automatikisht.

```
$ tb -d 1 2
```

### Fshij Detyrat e Shënuara

Për të fshirë/pastruar të gjitha detyrat e përfunduara njëherësh në të gjitha panelet, përdorni opsionin `--clear`. Vini re se të gjitha detyrat e fshira arkivohen automatikisht, dhe mund të inspektohen ose rikthehen në çdo moment. Për të dekurajuar çdo përdorim të mundshëm aksidental, opsioni `--clear` nuk ka pseudonim më të shkurtër të disponueshëm.

```
$ tb --clear
```

### Shfaq Arkivën

Për të shfaqur të gjithë artikujt e arkivuar, përdorni opsionin `--archive`/`-a`. Vini re se të gjithë artikujt e arkivuar shfaqen në shikimin e kronologjisë, të bazuar në datën e krijimit të tyre.

```
$ tb -a
```

### Riktheni Artikujt

Për të rikthyer një ose më shumë artikuj, përdorni opsionin `--restore`/`-r` të ndjekur nga identifikuesit e artikujve të synuar. Vini re se identifikuesit e të gjithë artikujve të arkivuar mund të shihen kur thirret opsioni `--archive`/`-a`. Identifikuesit dublikatë filtrohen automatikisht.

```
$ tb -r 1 2
```

### Listo Artikujt

Për të listuar një grup artikujsh ku çdo artikull përputhet me një grup specifik atributesh, përdorni opsionin `--list`/`-l` të ndjekur nga atributet e dëshiruara. Emrat e paneleve së bashku me tiparet e artikujve mund të konsiderohen atribute të vlefshme listimi. Për shembull për të listuar të gjithë artikujt që i përkasin `myboard` të parazgjedhur dhe janë detyra në pritje, mund të përdoret sa vijon;

```
$ tb -l myboard pending
```

Atributet e listimit të mbështetura në mënyrë të parazgjedhur, së bashku me pseudonimet e tyre përkatës, janë si vijon;

- `myboard` - Artikuj që i përkasin `My board`
- `task`, `tasks`, `todo` - Artikuj që janë detyra.
- `note`, `notes` - Artikuj që janë shënime.
- `pending`, `unchecked`, `incomplete` - Artikuj që janë detyra në pritje.
- `progress`, `started`, `begun` - Artikuj që janë detyra në progres.
- `done`, `checked`, `complete` - Artikuj që janë detyra të përfunduara.
- `star`, `starred` - Artikuj që janë me vlerësim.

### Kërkoni Artikuj

Për të kërkuar për një ose më shumë artikuj, përdorni opsionin `--find`/`-f`, të ndjekur nga termat tuaj të kërkimit.

```
$ tb -f documentation
```

## Zhvillimi

Për më shumë informacion se si të kontribuoni në projekt, ju lutemi lexoni [contributing guidelines](https://github.com/klaudiosinani/taskbook/blob/master/contributing.md).

- Bëni fork të repository dhe klonojeni në makinën tuaj
- Navigoni në fork-un tuaj lokal: `cd taskbook`
- Instaloni varësitë e projektit: `npm install` ose `yarn install`
- Kontrolloni kodin për gabime: `npm test` ose `yarn test`

## Të Lidhura

- [signale](https://github.com/klaudiosinani/signale) - Utilitet regjistrimi shumë i konfigurueshëm
- [qoa](https://github.com/klaudiosinani/qoa) - Porosi minimale interaktive të linjës së komandës
- [hyperocean](https://github.com/klaudiosinani/hyperocean) - Temë e thellë blu oqeanike për terminalin Hyper

## Ekipi

- Klaudio Sinani [(@klaudiosinani)](https://github.com/klaudiosinani)
- Mario Sinani [(@mariosinani)](https://github.com/mariosinani)

## Sponsorët

Falëminderit të madh të gjithë njerëzve dhe kompanive që mbështesin punën tonë të Kodit të Hapur:

- [Better Stack: Zbulo, Zgjidh dhe Parandaloni Kohën e Pushimit.](https://betterstack.com/)

## Licenca

[MIT](https://github.com/klaudiosinani/taskbook/blob/master/license.md)
