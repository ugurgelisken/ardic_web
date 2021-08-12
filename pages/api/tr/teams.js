export default function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "Takım Üyeleri",
      desc: "Bağlantılı dünya konusunda tutkulu ve yeni teknolojilerin uygulanmasını kolaylaştıracak yaratıcı çözümler tasarlamaya hevesli 30'dan fazla mühendis.",
    },
    data: {
      cover: "/assets/commons/macbook.jpg",
      summary:
        "Bağlantılı dünya konusunda tutkulu ve yeni teknolojilerin uygulanmasını kolaylaştıracak yaratıcı çözümler tasarlamaya hevesli 30'dan fazla mühendis.",
      title_1: "Takım Üyeleri ile Tanışın",
      text_1:
        "Telekomünikasyon kökenlerimiz teknolojik DNA'mızı şekillendirdi ve 100 milyonlarca cihazdan oluşan ağları güvenilir, hızlı ölçeklenebilir ve esnek bir şekilde yönetmek için doğru kültürü ve bilgi birikimini getirdi. Ekibin ABD, Çin ve Avrupa'daki çok kültürlü deneyimleri, çözümlerimizde teknolojiyi kullanma şeklimizi olumlu yönde etkiliyor. Neyin önemli olduğunu biliyoruz ve kaynaklarımızı bunu başarmak için odaklıyoruz.",
      title_2: "Biz kararlı bir ekibiz",
      text_2:
        "IoT projelerinizin teknolojik ihtiyaçlarına yardımcı olmak ve işinize değer katmak için buradayız. Gömülü sistemler, Android ve Yapay Zeka üzerinde çalışmayı seviyoruz.",
      commons: {
        cupOfCoffe: {
          text: "Fincan Kahve",
          value: "1960768",
          image: "/assets/commons/coffee.png",
        },
        nights: {
          text: "Gece",
          value: "299564",
          image: "/assets/commons/night.png",
        },
        years: {
          text: "Yıl",
          value: "13",
          image: "/assets/commons/years.png",
        },
      },
      members: [
        {
          name: "Tunç Kahveci",
          position: "CEO/Founder",
          photo: "/assets/teams/tunc-kahveci.jpg",
          linkedin: "https://www.linkedin.com/in/tunc-k-a2a7311/",
        },
        {
          name: "Hülya Karaerkek Kahveci",
          position: "Co-Founder/VP of BD",
          photo: "/assets/teams/hulya-karaerkek-kahveci.jpg",
          linkedin: "https://www.linkedin.com/in/hulyakaraerkek/",
        },
        {
          name: "Mehmet Aksayan",
          position: "Co-Founder/COO",
          photo: "/assets/teams/mehmet-aksayan.jpg",
          linkedin: "",
        },
        {
          name: "Haluk Tüfekçi",
          position: "CTO",
          photo: "/assets/teams/haluk-tufekci.jpg",
          linkedin: "",
        },
        {
          name: "Levent Babacan",
          position: "Sistem Mimarı",
          photo: "/assets/teams/levent-babacan.jpg",
          linkedin: "https://www.linkedin.com/in/levent-babacan-94020a9a/",
        },
        {
          name: "Barış İnanç",
          position: "Yazılım Geliştirme Müdürü",
          photo: "/assets/teams/baris-inanc.jpg",
          linkedin: "https://www.linkedin.com/in/barisinanc/",
        },
        {
          name: "Afşin Çelik",
          position: "Kıdemli Yazılım Mühendisi",
          photo: "/assets/teams/afsin-celik.jpg",
          linkedin:
            "https://www.linkedin.com/in/af%C5%9Fin-%C3%A7elik-60830495/",
        },
        {
          name: "Egemen Kayalıdere",
          position: "Kıdemli Yazılım Mühendisi",
          photo: "/assets/teams/egemen_kayalidere.jpg",
          linkedin: "https://www.linkedin.com/in/egemenkayalidere/",
        },
        {
          name: "Ceyhun Ertürk",
          position: "Yazılım Mühendisi",
          photo: "/assets/teams/ceyhun-erturk.jpg",
          linkedin: "https://www.linkedin.com/in/ceyhun-ert%C3%BCrk-3a445369",
        },
        {
          name: "Farshad Delirabdinia",
          position: "Yazılım Mühendisi",
          photo: "/assets/teams/farshad-delirabdinia.jpg",
          linkedin: "https://www.linkedin.com/in/farshaddelirabdinia/",
        },
        {
          name: "Hakkı Yavuz Erzurumlu",
          position: "Yazılım Mühendisi",
          photo: "/assets/teams/yavuz-erzurumlu.jpg",
          linkedin: "https://www.linkedin.com/in/yavuz-erzurumlu-80460127/",
        },
        {
          name: "Mert Acel",
          position: "Yazılım Geliştirici",
          photo: "/assets/teams/mert-acel.jpg",
          linkedin: "https://www.linkedin.com/in/mertacel",
        },
        {
          name: "Oğuz Çakır",
          position: "Yazılım Kalite Mühendisi",
          photo: "/assets/teams/oguz-cakir.jpg",
          linkedin: "",
        },
        {
          name: "Metin Par",
          position: "Proje ve Saha Müdürü",
          photo: "/assets/teams/metin-par.jpg",
          linkedin:
            "https://www.linkedin.com/in/h%C3%BCseyin-metin-par-66576145/",
        },
        {
          name: "Rüzgar Eren Zere",
          position: "Proje Müdürü",
          photo: "/assets/teams/ruzgar_eren_zere.jpg",
          linkedin: "https://www.linkedin.com/in/rzere/",
        },
        {
          name: "Elif Çakmak",
          position: "Ofis Yöneticisi",
          photo: "/assets/teams/elif-cakmak.jpg",
          linkedin: "",
        },
        {
          name: "Duygu Kalınyılmaz",
          position: "Muhasebe",
          photo: "/assets/teams/duygu-kalinyilmaz.jpg",
          linkedin: "https://www.linkedin.com/in/duygu-kalinyilmaz-48abb3139/",
        },
        {
          name: "Uğur Gelişken",
          position: "Önyüz Geliştirici",
          photo: "/assets/teams/ugur-gelisken.jpg",
          linkedin:
            "https://www.linkedin.com/in/u%C4%9Fur-geli%C5%9Fken-53007361",
        },
        {
          name: "Serkan Ataçoğlu",
          position: "Müşteri ve Hizmetler Direktörü",
          photo: "/assets/teams/serkan_atacoglu.jpg",
          linkedin: "https://www.linkedin.com/in/serkan/",
        },
        {
          name: "Selçuk Polat",
          position: "Yazılım Mühendisi",
          photo: "/assets/teams/selcuk_polat.jpg",
          linkedin: "https://www.linkedin.com/in/sel%C3%A7uk-polat-866b4674/",
        },
        {
          name: "İlteriş Kutluğ Ümit",
          position: "Yazılım Mühendisi",
          photo: "/assets/teams/ileris_kultug_umit.jpg",
          linkedin: "https://www.linkedin.com/in/ilteriskutlugumit/",
        },
        {
          name: "Taalai Almasova",
          position: "Yazılım Mühendisi",
          photo: "/assets/teams/taalai_almasova.jpg",
          linkedin: "https://www.linkedin.com/in/taalaialmasova/",
        },
        {
          name: "Aylin Gümüş",
          position: "Kıdemli Yazılım Mühendisi",
          photo: "/assets/teams/aylin_gumus.jpg",
          linkedin: "https://www.linkedin.com/in/aylingumus/",
        },
      ],
    },
  });
}
