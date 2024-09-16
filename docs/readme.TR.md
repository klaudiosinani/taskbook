<h1 align="center">
  Taskbook
</h1>

<h4 align="center">
  Komut satırı ortamı için görevler, panolar ve notlar
</h4>

<div align="center">
  <img alt="Boards" width="60%" src="media/header-boards.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/taskbook">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/taskbook.svg?branch=master">
  </a>
</p>

## Tanım

Düz bir öğrenme eğrisi gerektiren basit ve minimum kullanım sözdizimini kullanan görev kitabı, terminalinizin içinden birden fazla panodaki görevlerinizi ve notlarınızı etkili bir şekilde yönetmenize olanak tanır. Bozulmaların önlenmesi amacıyla tüm veriler atomik olarak depoya yazılır ve hiçbir kimseyle veya hiçbir şeyle paylaşılmaz. Silinen öğeler otomatik olarak arşivlenir ve her an incelenebilir veya geri yüklenebilir.

Bu belgeyi şurada okuyun:
[简体中文](https://github.com/klaussinani/taskbook/blob/master/docs/readme.ZH.md), [Русский](https://github.com/klaussinani/taskbook/blob/master/docs/readme.RU.md), [Français](https://github.com/klaussinani/taskbook/blob/master/docs/readme.FR.md), [Deutsch](https://github.com/klaussinani/taskbook/blob/master/docs/readme.GER.md), [Portuguese](https://github.com/klaussinani/taskbook/blob/master/docs/readme.PT-BR.md), [日本語](https://github.com/klaussinani/taskbook/blob/master/docs/readme.JP.md), [한국어](https://github.com/klaussinani/taskbook/blob/master/docs/readme.KR.md), [Spanish](https://github.com/klaussinani/taskbook/blob/master/docs/readme.ES.md), [Bulgarian](https://github.com/klaussinani/taskbook/blob/master/docs/readme.BG.md), [Türkçe](https://github.com/klaussinani/taskbook/blob/master/docs/readme.TR.md).

Artık geliştirme sürecini şu şekilde destekleyebilirsiniz: [GitHub Sponsors](https://github.com/sponsors/klaussinani).

Bu belgenin daha fazla dile nasıl çevrileceği hakkında daha fazla bilgi edinmek için [Katkıda bulunma yönergelerini](https://github.com/klaussinani/taskbook/blob/master/contributing.md#translating-documentation) ziyaret edin.

Proje hakkındaki düşüncelerinizi paylaşmak için [Gitter](https://gitter.im/klaussinani/taskbook) veya [Twitter](https://twitter.com/klaussinani)'a takip edin.

## Öne Çıkanlar

- Görevleri ve notları panolara düzenleyin
- Pano ve zaman çizelgesi görünümleri
- Öncelik ve favori mekanizmalar
- Öğeleri arayın ve filtreleyin
- Silinen öğeleri arşivleyin ve geri yükleyin
- Hafif ve hızlı
- Veriler atomik olarak depoya yazılır
- Özel depolama konumu
- İlerlemeye genel bakış
- Basit ve minimum kullanım sözdizimi
- Bildirimleri güncelle
- Şununla yapılandırılabilir: `~/.taskbook.json`
- JSON dosyasında saklanan veriler `~/.taskbook/storage`

[Görev defteri panosundaki](https://raw.githubusercontent.com/klaussinani/taskbook/master/media/highlights.png) öne çıkanları görüntüleyin.

## İçindekiler

- [Tanım](#description)
- [Öne Çıkanlar](#highlights)
- [Kurulum](#install)
- [Kullanım](#usage)
- [Görüntüleme](#views)
- [Yapılandırma](#configuration)
- [Uçuş Kılavuzu](#flight-manual)
- [Geliştirme](#development)
- [İlgili](#related)
- [Takım](#team)
- [Lisans](#license)

## Kurulum

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
snap alias taskbook tb # takma ad belirle
```

**Note:** Snap'in kesinlikle sınırlı doğası nedeniyle, hem depolama hem de yapılandırma dosyaları genel `$HOME` yerine [`$SNAP_USER_DATA`](https://docs.snapcraft.io/reference/env) ortam değişkeni altına kaydedilecektir.

## Kullanım

```
$ tb --help

  Kullanım
    $ tb [<options> ...]

    Seçenekler
        none             Ekran panosu görünümü
      --archive, -a      Arşivlenen öğeleri görüntüle
      --begin, -b        Görevi başlat/duraklat
      --check, -c        Görevi işaretleyin/işaretini kaldırın
      --clear            İşaretli tüm öğeleri sil
      --copy, -y         Öğe açıklamasını kopyala
      --delete, -d       Öğeyi silmek
      --edit, -e         Öğe açıklamasını düzenle
      --find, -f         Öğeleri ara
      --help, -h         Yardım mesajını görüntüle
      --list, -l         Öğeleri özniteliklere göre listeleme
      --move, -m         Öğeyi panolar arasında taşı
      --note, -n         Not oluştur
      --priority, -p     Görevin önceliğini güncelle
      --restore, -r      Öğeleri arşivden geri yükle
      --star, -s         Öğeye yıldız ekleme/yıldızı kaldırma
      --task, -t         Görev oluştur
      --timeline, -i     Zaman çizelgesi görünümünü görüntüle
      --version, -v      Yüklü sürümü görüntüle

    Örnekler
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

## Görüntüleme

### Pano Görünümü

Görev kitabını herhangi bir seçenek olmadan çağırmak, kayıtlı tüm öğeleri ilgili panolarda gruplandırılmış olarak görüntüleyecektir.

<div align="center">
  <img alt="Panolar" width="60%" src="media/header-boards.png"/>
</div>

### Zaman Çizelgesi Görünümü

Tüm öğeleri, oluşturulma tarihlerine göre zaman çizelgesi görünümünde görüntülemek için `--timeline` / `-i` seçeneği kullanılabilir.

<div align="center">
  <img alt="Zaman Çizelgesi Görünümü" width="62%" src="media/timeline.png"/>
</div>

## Yapılandırma

Görev kitabını yapılandırmak için "~/.taskbook.json" dosyasına gidin ve seçeneklerden herhangi birini kendi tercihinize uyacak şekilde değiştirin. Varsayılan değerlere sıfırlamak için yapılandırma dosyasını ana dizininizden silmeniz yeterlidir.

Aşağıda mevcut tüm seçenekler ilgili varsayılan değerleriyle birlikte gösterilmektedir.

```json
{
  "taskbookDirectory": "~",
  "displayCompleteTasks": true,
  "displayProgressOverview": true
}
```

### Detay

##### `taskbookDirectory`

- Type: `String`
- Default: `~`

Depolamanın başlatılacağı dosya sistemi yolu, yani: `/home/kullanici_adi/the-cloud` veya `~/the-cloud`

Tanımsız bırakılırsa `~` ana dizini kullanılacak ve görev kitabı `~/.taskbook/` altında ayarlanacaktır.

##### `displayCompleteTasks`

- Type: `Boolean`
- Default: `true`

Tamamlandı olarak işaretlenen görevleri görüntüleyin.

##### `displayProgressOverview`

- Type: `Boolean`
- Default: `true`

Zaman çizelgesi ve pano görünümlerinin altında ilerlemeye genel bakışı görüntüleyin.

## Uçuş Kılavuzu

Aşağıda, görev kitabının nasıl kullanılacağına ilişkin bir dizi örnek içeren küçük bir kılavuz bulunmaktadır.
Bir hata fark ettiyseniz veya örneğin yeterince açık olmadığını ve daha da geliştirilmesi gerektiğini düşünüyorsanız lütfen bir e-posta adresi açmaktan çekinmeyin.

- [Issue](https://github.com/klaussinani/taskbook/issues/new/choose) 
- [Pull Request](https://github.com/klaussinani/taskbook/compare)

### Görev Oluştur

Yeni bir görev oluşturmak için `--task` / `-t` seçeneğini kullanın ve hemen ardından görevinizin açıklamasını ekleyin.

```
$ tb -t Dokümantasyonu geliştirin
```

### Not Oluştur

Yeni bir not oluşturmak için notunuzun gövdesini hemen takip edecek şekilde `--note` / `-n` seçeneğini kullanın.

```
$ tb -n Mergesort worse-case O(nlogn)
```

### Pano Oluştur

Yeni bir görev veya not oluşturulurken panolar otomatik olarak başlatılır. Bir veya daha fazla pano oluşturmak için, oluşturulacak öğenin açıklamasına bu panoların adlarını "@" simgesinin önüne ekleyerek ekleyin. Sonuç olarak yeni oluşturulan öğe verilen tüm panolara ait olacaktır. Varsayılan olarak, açıklamasında herhangi bir pano adı bulunmayan öğeler otomatik olarak genel amaca eklenir. `My Board`

```
$ tb -t @coding @docs Update contributing guidelines
```

### Görevi Kontrol Et

Bir görevi tamamlandı/tamamlanmadı olarak işaretlemek için `--check` / `-c` seçeneğini ve ardından hedef görevlerin kimliklerini kullanın. Seçeneğin, verilen görevlerin "tamamlandı" durumuna karşıt olarak güncelleneceğini, dolayısıyla tamamlanmış bir görevin kontrol edilmesinin onu beklemede, bekleyen bir görevi de tamamlanmış olarak göstereceğini unutmayın. Yinelenen kimlikler otomatik olarak filtrelenir.

```
$ tb -c 1 3
```

### Görevi Başlat

Bir görevi başlatıldı/duraklatıldı olarak işaretlemek için `--begin` / `-b` seçeneğini ve ardından hedef görevlerin kimliklerini kullanın. Bu seçeneğin işlevi yukarıda açıklanan '--check' seçeneğiyle aynıdır.

```
$ tb -b 2 3
```

### Yıldızlı Öğe

Bir veya daha fazla öğeyi favori olarak işaretlemek için `--star` / `-s` seçeneğini ve ardından hedef öğelerin kimliklerini kullanın. Bu seçeneğin işlevi yukarıda açıklanan `--check` seçeneğiyle aynıdır.

```
$ tb -s 1 2 3
```

### Öğe Açıklamasını Kopyala

Bir veya daha fazla öğenin açıklamasını sisteminizin panosuna kopyalamak için `--copy` / `-y` seçeneğini ve ardından hedef öğelerin kimliklerini kullanın. Bu seçeneğin, her bir bitişik kopyalanan açıklama çiftine ayırıcı olarak yeni satır karakterini de ekleyeceğini, böylece yapıştırıldığında net ve okunabilir bir cümle yığını elde edileceğini unutmayın.

```
$ tb -y 1 2 3
```

### Ekran Panoları

Görev kitabını herhangi bir seçenek olmadan çağırmak, kayıtlı öğelerin tamamını ilgili panolarda gruplandırarak görüntüleyecektir.

```
$ tb
```

### Zaman Çizelgesini Görüntüle

Tüm öğeleri, oluşturulma tarihlerine göre zaman çizelgesi görünümünde görüntülemek için `--timeline` / `-i` seçeneği kullanılabilir.

```
$ tb -i
```

### Önceliği Ayarla

Bir görevi başlatırken bir öncelik düzeyi ayarlamak için, görevin açıklamasına `p:x` sözdizimini ekleyin; burada x, `1`, `2` veya `3` değerinde bir tamsayı olabilir. Varsayılan olarak tüm görevlerin normal bir öncelikle `1` oluşturulduğunu unutmayın.


- `1` - Normal öncelik
- `2` - Orta öncelik
- `3` - Yüksek öncelik

```
$ tb -t @coding Fix issue `#42` p:3
```

Belirli bir görevin oluşturulduktan sonra öncelik düzeyini güncellemek için, hedef görevin kimliğiyle birlikte `--priority` / `-p` seçeneğini, önüne `@` sembolü ve `1` değerinde bir tamsayı kullanın. , `2` veya `3`. Hedef kimliğinin ve öncelik düzeyinin yerleştirildiği sıranın önemli olmadığını unutmayın.

```
$ tb -p @1 2
```

### Öğeyi Taşı

To move an item to one or more boards, use the `--move` / `-m` option, followed by the target item id, prefixed by the `@` symbol, and the name of the destination boards. The default `My board` can be accessed through the `myboard` keyword. The order in which the target id and board names are placed is not significant.

```
$ tb -m @1 myboard reviews
```

### Öğeyi Sil

Bir veya daha fazla öğeyi silmek için `--delete` / `-d` seçeneklerini ve ardından hedef öğelerin kimliklerini kullanın. Silinen öğelerin otomatik olarak arşivlendiğini ve her an incelenebileceğini veya geri yüklenebileceğini unutmayın. Yinelenen kimlikler otomatik olarak filtrelenir.

```
$ tb -d 1 2
```

### İşaretli Görevleri Sil

Tüm panolardaki tamamlanmış görevlerin tamamını tek seferde silmek/temizlemek için `--clear` seçeneğini kullanın. Silinen tüm görevlerin otomatik olarak arşivlendiğini ve her an incelenebileceğini veya geri yüklenebileceğini unutmayın. Olası kazara kullanımı engellemek için, `--clear` seçeneğinin daha kısa bir takma adı yoktur.

```
$ tb --clear
```

### Arşivi Görüntüle

Arşivlenen tüm öğeleri görüntülemek için `--archive` / `-a` seçeneğini kullanın. Arşivlenen tüm öğelerin, oluşturulma tarihlerine göre zaman çizelgesi görünümünde görüntülendiğini unutmayın.

```
$ tb -a
```

### Öğeleri Geri Yükle

Bir veya daha fazla öğeyi geri yüklemek için `--restore` / `-r` seçeneğini ve ardından hedef öğelerin kimliklerini kullanın. `--archive` / `-a` seçeneği çağrıldığında arşivlenen tüm öğelerin kimliklerinin görülebileceğini unutmayın. Yinelenen kimlikler otomatik olarak filtrelenir.

```
$ tb -r 1 2
```

### Öğeleri Listele

Her bir öğenin belirli bir nitelik kümesiyle uyumlu olduğu bir öğe grubunu listelemek için `--list` / `-l` seçeneğini ve ardından istenen nitelikleri kullanın. Öğe özellikleriyle birlikte pano adları geçerli listeleme özellikleri olarak kabul edilebilir. Örneğin, varsayılan `myboard`'a ait olan ve bekleyen görevler olan tüm öğeleri listelemek için aşağıdakiler kullanılabilir;

```
$ tb -l myboard pending
```

Varsayılan olarak desteklenen listeleme özellikleri, ilgili takma adlarıyla birlikte aşağıdaki gibidir;

- `myboard` - `My board`'a ait öğeler.
- `task`, `tasks`, `todo` - Görev olan öğeler.
- `note`, `notes` - Not olan öğeler.
- `pending`, `unchecked`, `incomplete` - Görev bekleyen öğeler.
- `progress`, `started`, `begun` - Devam eden görevler olan öğeler.
- `done`, `checked`, `complete` - Görevleri tamamlayan öğeler.
- `star`, `starred` - Yıldızlı öğeler.

### Öğeleri Ara

Daha fazla öğeden birini aramak için `--find` / `-f` seçeneğini ve ardından arama terimlerinizi kullanın.

```
$ tb -f documentation
```

## Geliştirme

Projeye nasıl katkıda bulunacağınız hakkında daha fazla bilgi için lütfen [katkıda bulunma yönergelerini](https://github.com/klaussinani/taskbook/blob/master/contributing.md) okuyun.

- Depoyu klonlayın ve makinenize kopyalayın
- Yerel klasörünüze gidin: `cd taskbook`
- Proje bağımlılıklarını yükleyin: `npm install` or `yarn install`
- Hatalar için kontrol edin: `npm test` or `yarn test`

## İlgili

- [signale](https://github.com/klaussinani/signale) - Son derece yapılandırılabilir günlük kaydı yardımcı programı
- [qoa](https://github.com/klaussinani/qoa) - Minimal etkileşimli komut satırı istemleri
- [hyperocean](https://github.com/klaussinani/hyperocean) - Derin okyanus mavisi Hiper terminal teması

## Takım

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)
- Mario Sinani [(@mariosinani)](https://github.com/mariosinani)

## Lisans

[MIT](https://github.com/klaussinani/taskbook/blob/master/license.md)
