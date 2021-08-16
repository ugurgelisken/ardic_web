export default function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "Başarı Hikayeleri",
      desc: "ARDICTECH'te Başarı Hikayeleri, Intel ve ARDIC, TC Maliye Bakanlığı Gelir İdaresi Başkanlığı EMN – Elektronik Sorgu Tablet Projesi ile, Kocaeli Büyükşehir Belediyesi CASPER – Eğitim Tableti, Demwatch – Hasta Takip Sistemi, TC Milli Eğitim Bakanlığı SEBIT – FATİH Projesi ile Eğitim – Pilot Uygulama, Ar-Ge Projeleri",
    },
    data: [
      {
        title: "Intel ve ARDIC",
        detailTexts: [
          {
            tag: "h4",
            text: "ARDIC IoT Ignite ve Dikey Uygulama Mağazaları",
          },
          {
            tag: "p",
            text: "Bu çözüm özetini inceleyin ve Türk teknoloji sağlayıcısı ARDIC'in üstün uçtan uca güvenlik, ağ iletişimi ve birlikte çalışabilirlik için Intel® IoT Gateway'lerde IoT Ignite hizmetini nasıl çalıştırdığını görün. Dikey bir uygulama mağazası, müşterilere herhangi bir konumdan herhangi bir cihazdaki uygulamalara ve verilere erişim sağlayarak, herhangi bir pazar segmenti için esnek, kullanıcı dostu ve en önemlisi hızla dağıtılabilir hizmetler sağlar.",
          },
          {
            tag: "a",
            text: "https://static1.squarespace.com/static/5d2ec837bac08300015593a5/t/5d4d33c9c40b1700011271a4/1565340618165/ardic-iot-vertical-application-stores-brief.pdf",
          },
          {
            tag: "h4",
            text: "Intel® IoT Ağ Geçitleri ile ARDIC IoT Ignite",
          },
          {
            tag: "p",
            text: "Bu çözüm özetini keşfedin ve Türk teknoloji sağlayıcısı ARDIC'in üstün uçtan uca güvenlik, ağ iletişimi ve birlikte çalışabilirlik için Intel® IoT Ağ Geçitleri ve kolay özelleştirme için Android işletim sistemi üzerinde IoT Ignite hizmet teklifini nasıl çalıştırdığını görün. ARDIC IoT Ignite hizmeti, IoT hizmet sağlayıcıları için hızlı IoT çözüm dağıtımına olanak tanır.",
          },
          {
            tag: "a",
            text: "https://www.intel.com/content/www/us/en/internet-of-things/ardic-iot-gateway-solution-brief.html",
          },
          {
            tag: "h4",
            text: "Çözüm Özeti: ARDIC IoT Ignite ve Intel® IoT Ağ Geçitleri",
          },
          {
            tag: "p",
            text: "Bu çözümü gözden geçirin ve özetleyin ve Türk teknoloji sağlayıcısı ARDIC'in üstün uçtan uca güvenlik, ağ iletişimi ve birlikte çalışabilirlik için IoT Ignite hizmetini Intel® IoT Gateway'lerde nasıl çalıştırdığını keşfedin. ARDIC IoT Ignite hizmeti, IoT hizmet sağlayıcıları için hızlı IoT çözüm dağıtımını sağlayan zengin bir özellik seti ile birlikte gelir.",
          },
          {
            tag: "a",
            text: "https://static1.squarespace.com/static/5d2ec837bac08300015593a5/t/5d4d3501ae5c17000196bfcb/1565340930620/ardic-iot-ignite-brief.pdf",
          },
          {
            tag: "h4",
            text: "Intel Yapay Zeka Oluşturucuları – ARDIC",
          },
          {
            tag: "p",
            text: "ARDIC, Intel AI Builders Programı kapsamında 2018 yılında Intel'in AI ortağı oldu. Intel AI Builders programı, Intel platformlarında yapay zekanın benimsenmesini hızlandırmak için ortak bir misyona sahip endüstri lideri bağımsız yazılım satıcıları (ISV'ler), sistem entegratörleri (SI'ler), orijinal ekipman üreticileri (OEM'ler) ve kurumsal son kullanıcılardan oluşan bir ekosistemdir.",
          },
          {
            tag: "a",
            text: "https://builders.intel.com/ai/membership/ardictech",
          },
        ],
      },
      {
        title:
          "TC Maliye Bakanlığı Gelir İdaresi Başkanlığı ile EMN – Elektronik Sorgulama Tableti Projesi",
        detailTexts: [
          {
            tag: "h4",
            text: "Gereksinimler",
          },
          {
            tag: "p",
            text: "Vergi ile ilgili idari işlemler için ön tahakkuk niteliğinde bilgi sağlamak, belirli idari işlemleri akıllı mobil cihazlar (tabletler) aracılığıyla doğrudan işyerinde veya vergi ile ilgili davaların yerinde çevrimiçi olarak yürütmek.",
          },
          {
            tag: "h4",
            text: "Çözüm Bileşenleri",
          },
          {
            tag: "p",
            text: " * Samsung Galaxy Note 1 0 .1 Tabletler, Android Jelly Bean (EMN tarafından sağlanır) * ARDIC Modiverse Premium Yönetim ve Kontrol Platformu * ARDIC Modu Uygulaması (Tabletlerin Modiverse Premium ile iletişim kurması için istemci uygulaması)",
          },
          {
            tag: "h4",
            text: "Kritik Proje Gereksinimleri",
          },
          {
            tag: "p",
            text: " * Mobil cihaz yönetimi uygulaması ile mobil cihazların uzaktan yönetimi, * PC ve notebook üzerinden erişim için uygulamanın Türkçe GUI'si, * Online cihaz konfigürasyonu, hata log raporlama, pil bilgisi, hafıza bilgisi, ağ bilgisi, online/offline durum raporlaması, konum bilgisi, uygulama listesi vb. * Cihazları uzaktan kilitleme ve yeniden başlatma, * Kullanıcı profili tanımlama ve cihaz profillerini değiştirebilme, * Push uygulaması, sessiz kurulum, uygulamayı uzaktan kaldırma, * Rol bazlı yönetim ve erişim, * Yükleme Çözüm platformunun Dengelenmesi ve Yüksek Kullanılabilirliği, * Cihaz envanter takibi, * Dahili uygulama blokajı, uzaktan ağ bağlantısı deaktivasyonu ve aktivasyonu, * PIN kontrolü ve wi-fi erişim kontrolü, * Rootlu cihazların uzaktan kilitlenmesi, * Uzaktan kurulum ve güncelleme güvenlik sertifikaları, * Grup bazlı uzak işlemlerin programlanması, opp kurulum ve kaldırma işlemleri, * Kurumsal opp store ve içerik deposu (sunucu bazlı ve müşteri bazlı) ), kullanıcıların tablet üzerinde mağazalardan uygulama veya içerik indirmesi, * Yönetici kullanıcıların yetki alanlarının belirlenmesi, * Cihazın kaybolması/çalınması durumunda uzaktan cihazın devre dışı bırakılması,",
          },
          {
            tag: "h4",
            text: "Çözüm Ayrıntıları",
          },
          {
            tag: "p",
            text: "ARDIC Modiverse Premium Mobil Cihaz Yönetim ve Kontrol Hizmetleri Platformu, bu projede yukarıda belirtilen gereksinimleri karşılayan yazılım çözümü olarak Samsung Galaxy Note 1 0.1 tabletlerde uygulanmaktadır. Tüm tabletler EMN Teknolojisi tarafından sağlanmakta ve desteklenmektedir. Uygulanan Modiverse Premium çözümü, Mobil Cihaz Yönetimi (MDM), Mobil Uygulama Yönetimi (MAM), Mobil İçerik Yönetimi (MCM), kullanıcı profili tanımlama, cihaz kullanım senaryosu tanımlarını içerir. Güvenlik gereksinimleri nedeniyle yerinde dağıtım modeli yürütülür. Bu sayede işlemlerin oluşturduğu kurumsal veriler yerel sunuculara kaydedilecektir.",
          },
          {
            tag: "h4",
            text: "Uygulanan Çözümün Katma Değeri",
          },
          {
            tag: "p",
            text: " * Veri Güvenliği (Şirket İçi Dağıtım) * Güvenli Mesajlaşma (VPN bağlantısı üzerinden) * Kullanımı Kolay",
          },
        ],
      },
      {
        title: "CASPER ile Kocaeli Büyükşehir Belediyesi – Eğitim Tableti",
        detailTexts: [
          {
            tag: "h4",
            text: "Gereksinimler",
          },
          {
            tag: "p",
            text: "Kocaeli Belediyesi tarafından Milli Eğitim Bakanlığı (MEB) onayı ile 27.109 adet eğitim tableti hibe programı yürütülmüştür. Casper, ihaleyi kazanarak Kocaeli Belediyesi'ne ARDIC Modiverse çözüm paketine sahip tablet cihazları sağladı. Temel gereksinimler, okullara güvenli ve esnek eğitim tablet çözümü seti sağlanması ve gerektiğinde cihazların mobil servisler platformu üzerinden uzaktan kontrol edilebilmesi olarak özetlenebilir.",
          },
          {
            tag: "h4",
            text: "Çözüm Bileşenleri",
          },
          {
            tag: "p",
            text: " * Intel Baytrail işlemcili Casper VIA T41 Android Tabletler (27.109 tablet) * ARDIC ArCloud IoT Platformu * ARDIC Modiverse Mobil Servis Paketi Çözümü * ARDIC KuuKla Ebeveyn Kontrolü Uygulaması * ARDIC Modiverse-Mode uygulaması (tabletlerin bulut platformu ile iletişim kurması için istemci uygulaması)",
          },
          {
            tag: "h4",
            text: "Kritik Proje Gereksinimleri",
          },
          {
            tag: "p",
            text: " * Hırsızlığa karşı çözüm: Uzaktan kilitleme ve konum tespit fonksiyonları, kayıp/çalıntı durumunda cihazın uzaktan devre dışı bırakılması Cihaz aktivasyon çözümü * Ebeveyn kontrol yazılımı * Mobil cihaz yönetim uygulaması ile istendiğinde mobil cihazların uzaktan yönetimi * Uygulamanın Türkçe GUI uygulaması web tarayıcısı üzerinden PC ve notebook üzerinden erişim * Cihaz envanter takibi",
          },
          {
            tag: "h4",
            text: "Çözüm Detayları ve Uygulanan Çözümlerin Katma Değeri",
          },
          {
            tag: "p",
            text: "Bu projede Casper ve ARDIC, ihale gereksinimlerini karşılamak için eğitim sektörü tablet çözümü sağladı. ARDIC Modiverse Paket GUI, Casper Destek Merkezi kullanıcılarının yalnızca yukarıdaki gereksinimleri yönetmesini sağlamak için özelleştirilmiştir. Tüm bu tabletler 12 ilçede 289 okulun son kullanıcılarına dağıtılarak sınıflarda ve evlerde başarıyla kullanılmıştır.",
          },
          {
            tag: "h4",
            text: "Uygulanan Çözümlerin Katma Değeri",
          },
          {
            tag: "p",
            text: " * Kullanıma hazır öğretmen/öğrenci tabletleri (tüm ayarlar ve güncellemeler uzaktan yönetilir) * Yalnızca istenen işlevleri sağlayan Özelleştirilmiş Yönetici Paneli GUI",
          },
        ],
      },

      {
        title: "Demwatch – Hasta Takip Sistemi",
        detailTexts: [
          {
            tag: "h4",
            text: "Gereksinimler",
          },
          {
            tag: "p",
            text: "Günlük yaşamı destekleyen ve bağımsız yaşamı ve katılımı artıran yardımcı iç ve dış mekan teknolojisi oluşturarak hafif ve orta düzeyde bellek bozukluğu olan insanlara yardımcı olmak.",
          },
          {
            tag: "a",
            text: "https://static1.squarespace.com/static/5d2ec837bac08300015593a5/t/5d4c3a972023770001574b13/1565276826393/DEMWatch-Project-Leaflet1.pdf",
          },
        ],
      },
      {
        title:
          "TC Milli Eğitim Bakanlığı ile SEBİT – FATİH Eğitim Projesi – Pilot Uygulama",
        detailTexts: [
          {
            tag: "h4",
            text: "Gereksinimler",
          },
          {
            tag: "p",
            text: "Milli Eğitim Bakanlığı (MEB) onayı ile Türk Telekom, SEBİT ile koordineli olarak FATİH projesi için 5.000 adet eğitim tableti hibe programı yürütmüştür. Temel gereksinimler, öğretmen tabletleri, öğrenci tabletleri ve akıllı tahtayı içeren sınıf eko sistemini mümkün kılacak esnek bir uçtan uca eğitim hizmetleri platformunun sağlanması olarak özetlenebilir; tüm tabletleri uzaktan yönetebilme ve kontrol edebilme; öğretmen tableti aracılığıyla sınıf oturumlarını yönetmek ve öğrenci tabletlerini ve akıllı tahtayı kontrol etmek; tabletleri okul dışında farklı kullanım senaryoları ile kullanabilme.",
          },
          {
            tag: "h4",
            text: "Çözüm Bileşenleri",
          },
          {
            tag: "p",
            text: "Projeye özel tasarlanmış INTEL SoC (System on Chip) ve Android ICS tabanlı tabletler, Projeye özel kullanım senaryolarını kolayca yürütmek için Özelleştirilmiş Eğitim Tableti İşletim Sistemi, Farklı kullanıcı profillerine göre özelleştirilmiş Öğretmen ve Öğrenci Tablet Çözümleri, Akıllı Tahta Sınıfı Yönetim Uygulaması, Eğitim Tabletleri için Bulut Hizmetleri Platformu ARCLOUD © üzerinde geliştirildi",
          },
          {
            tag: "h4",
            text: "Kritik Proje Gereksinimleri:",
          },
          {
            tag: "h5",
            text: "Eğitim Tableti İşletim Sistemi",
          },
          {
            tag: "p",
            text: " * Okul, sınıf ve ev için farklı kullanım senaryoları * Vitamin ve z-Book uygulamaları için SSO (Tek Oturum Açma) * Genel masaüstü bileşenleri * Kullanıcı profiline özel Ayarlar ekranı * Özelleştirilmiş Uygulamalar ekranı * Kısmi veya tam işletim sistemi yükseltmesi (Over The Air) )",
          },
          {
            tag: "h5",
            text: "Okul Yönetimi İşlevleri",
          },
          {
            tag: "p",
            text: " * Öğretmen ve öğrenci tabletleri için MEB Hizmetleri tarafından sağlanan şehir, okul, sınıf ilişkilerinin tanımlanması * Öğretmen ve öğrenci tabletlerinin sağlanması * Envanter yönetimi * Tabletlerin aktivasyonu",
          },
          {
            tag: "h5",
            text: "Sınıf Öğrenme Yönetim Fonksiyonları",
          },
          {
            tag: "p",
            text: "* Ayar Kısıtlaması * MEB tarafından izin verilenler dışındaki uygulama yüklemelerinin kısıtlanması * Kurum ve tarih değişikliği * İnternete erişim için uygulamaların kullanıcı profiline dayalı kısıtlamaları",
          },
          {
            tag: "h5",
            text: "Öğretmenler için Oturum Yönetimi Çözümü",
          },
          {
            tag: "p",
            text: "* Oturum başlatma/sonlandırma * Katılım kontrolü * Öğrenci tabletlerinin tablet donanım fonksiyonlarının yönetimi (Kamera açma/kapama, dokunmatik ekran kilitleme/açma vb.) * Derste ve okul sonrası uygulama kullanımının kontrolü * Öğrenci tabletlerinin belirli bir web sitesine yönlendirilmesi * Akıllı tahtanın öğretmen tableti ile uzaktan kontrolü * Oturum sırasında akıllı tahta kullanımı, öğrenci tabletlerinde akıllı tahta ekran görüntüleme işlevi * Akıllı tahtada öğretmen/öğrenci tabletlerinin ekran gösterimi * Öğretmen tabletinde öğrenci tabletlerinin ekran gösterimi * Kilit Öğrenci tabletlerinin sayısı (Tekli veya çoklu) * Herhangi bir öğrenci tabletinin akıllı tahtayı uzaktan yönetmesine izin verme * Oylama * Öğrenci tabletlerine mesaj gönderme (tekli veya çoklu)",
          },
          {
            tag: "h5",
            text: "Öğrenciler için Oturum Yönetimi Çözümü",
          },
          {
            tag: "p",
            text: "* Oturuma katılın ve sınıf kullanım senaryosunu uygulayın * Akıllı tahtayı uzaktan yönetin * Oylamaya katılın * Öğretmen tarafından gönderilen mesaj içeriğini görüntüleyin",
          },
          {
            tag: "h5",
            text: "Yerleşik Uygulamalar – SEBiT Uygulamaları",
          },
          {
            tag: "p",
            text: "* Tablet işletim sistemi ile kontrol edilebilir ve yönetilebilir uygulamalar * Bulut hizmetleri platformu ile kontrol edilebilir ve yönetilebilir uygulamalar",
          },
          {
            tag: "h5",
            text: "Yerleşik Uygulamalar - 3. Parti",
          },
          {
            tag: "p",
            text: " * Yalnızca SEBIT tarafından seçilen 3. parti uygulamaları çalıştırın * Yalnızca imzalı 3. parti uygulamaların yüklenmesine izin verin",
          },
          {
            tag: "h5",
            text: "Eğitim Tabletleri için Bulut Hizmetleri Platformu",
          },
          {
            tag: "p",
            text: " * Uygulama Yükleme I Uygulama Kaldırma * Kaybolan veya çalınan tabletleri kilitleme * Okulda bir süre kullanılmamışsa öğrenci tabletlerini kilitleme * Tabletlerin kullanıcı tahsisi * Log toplama * Tabletlerin çevrimiçi/çevrimdışı durum bilgisi * Tablet envanteri raporlar * Tabletleri uzaktan kilitleyin/kilidini açın * Tabletlere mesaj gönderin * Tabletleri silin * Uygulama tabanlı istatistikler",
          },
          {
            tag: "h5",
            text: "Çözüm Detayları ve Uygulanan Çözümün Katma Değeri: Buluta bağlantı sağlayan Classroom WiFi",
          },
          {
            tag: "p",
            text: "Bu projede yukarıda belirtilen kritik proje ihtiyaçlarını karşılamak için eğitim sektörüne özel uçtan uca tablet çözümü geliştirilmiştir. SEBIT, proje ihtiyaçlarını ve ilgili tasarımları sağladı ve ARDIC, kendi çözüm platformları aracılığıyla bu gereksinimleri karşılayan ilgili fonksiyonları geliştirdi.",
          },
          {
            tag: "p",
            text: "Sonuç olarak tabletler kullanıcı profillerine göre öğrenci ve öğretmen tabletleri olarak çeşitlenmektedir. Tabletlerdeki uygulamalar, bulut hizmetleri platformu aracılığıyla verimli bir şekilde yönetilebilir, yükseltilebilir ve desteklenebilir. Ayrıca tabletler okulda, sınıfta veya ev gibi farklı ortamlarda farklı senaryolarla kullanılabilir. Tüm bu senaryolar eğitim sektörü ihtiyaçları ve kullanıcı profilleri dikkate alınarak tasarlandı.",
          },
          {
            tag: "p",
            text: "Bugün bu tabletler 4 ilde (istanbul, Ankara, Kastamonu ve Karaman) 8 okulun son kullanıcılarına dağıtılmış ve derslerde başarıyla kullanılmıştır. Eğitim Tablet Bulut Hizmetleri Platformu üzerinden yönetilmekte ve kontrol edilmekte olup, halihazırda saha destek hizmetleri verilmektedir.",
          },
        ],
      },
      {
        title: "Ar-Ge Projeleri",
        detailTexts: [
          {
            tag: "p",
            text: "Yenilik, ARDIC'in genlerinde var. ARDIC, ticari hizmet ve ürünlerinin yanı sıra ulusal ve uluslararası Ar-Ge projelerinden çok sayıda hibe almıştır. 2008 yılından bu yana 17 proje tamamlanmıştır. İşte bunlardan bazıları:",
          },
          {
            tag: "p",
            text: "Prose 2020. IoT tabanlı etkileşimli konum hizmetleri altyapısının geliştirilmesi.",
          },
          {
            tag: "p",
            text: "eWatch 2020. Sürekli veri takibi giyilebilir, güvenli sağlık izleme sistemi.",
          },
          {
            tag: "p",
            text: "Proje 2019. Binalardaki enerji verilerini toplayan ve analiz eden, bina sistemlerini uzaktan yöneten ve sensör, tetik, IoT ağ geçidi ve karar destek mekanizmasını içeren entegre enerji yönetimi platformu.",
          },
          {
            tag: "p",
            text: "Proje 2017. Sektör düzeyinde güvenlikle bulut platformu mimarisinin geliştirilmesi.",
          },
          {
            tag: "p",
            text: "CEP 2015. Cihaz veya bulut sistemi üzerinde genel amaçlı, otonom, dinamik olarak programlanabilir ve uzaktan yönetilebilir, neredeyse gerçek zamanlı karmaşık olay işlemenin geliştirilmesi.",
          },
          {
            tag: "p",
            text: "SIGMONA 2015. Genelleştirilmiş Mobil Ağ Mimarilerinde Yazılım Tanımlı Ağ Kavramı.",
          },
          {
            tag: "p",
            text: "Güvenli Android 2015. Android cihazları daha güvenli, yönetilebilir ve kontrol edilebilir hale getirmek ve uygulamaların bunları güvenli bir şekilde kullanmasını sağlamak için Android için gerekli platformun eklenmesi.",
          },
          {
            tag: "p",
            text: "IoT 2014. Kullanıcı odaklı hizmetler aracılığıyla IoT bulut platformunda sensör ağının yönetimi.",
          },
          {
            tag: "p",
            text: "Proje 2012. Dokunmatik panelde tablet ekranının kablosuz aktarımı ve tablet ekranında dokunmatik panel etkileşiminin gerçek zamana yakın olması.",
          },
          {
            tag: "p",
            text: "Proje 2011. Büyük ölçekli yönetim sistemleri için bulut tabanlı mobil ağ geçidi ve istemci uygulamaları.",
          },
          {
            tag: "p",
            text: "OTA DM 2011. Havadan cihaz yönetimi ve kontrolü üzerinden açık kaynak.",
          },
          {
            tag: "p",
            text: "Proje 2010. Açık kaynak kodlu gömülü işletim sistemi platformu ve WiMax modem üzerinde model uygulaması.",
          },
        ],
      },
    ],
  });
}
