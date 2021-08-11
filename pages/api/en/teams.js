export default function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "Team Members",
      desc: "30+ engineers passionate about the connected world and eager to design creative solutions that will ease the implementation of new technologies.",
    },
    data: {
      cover: "/assets/commons/macbook.jpg",
      summary:
        "30+ engineers passionate about the connected world and eager to design creative solutions that will ease the implementation of new technologies.",
      title_1: "Meet the team",
      text_1:
        "Our telco origins shaped our technological DNA, and brought the right culture and know-how to manage networks of 100’s of millions of devices in a reliable, rapidly scalable and flexible manner. The team’s multi-cultural experiences in USA, China, and Europe positively influence the way we utilize technology in our solutions. We know what is important and focus our resources to achieve it.",
      title_2: "We are a determined team",
      text_2:
        "We are here to help with the technological needs of your IoT projects, and bring value to your business. We love to work on embedded systems, Android, and Artificial Intelligence.",
      commons: {
        cupOfCoffe: {
          text: "Cup of Coffee",
          value: "1960768",
          image: "/assets/commons/coffee.png",
        },
        nights: {
          text: "Nights",
          value: "299564",
          image: "/assets/commons/night.png",
        },
        years: {
          text: "Years",
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
          position: "Chief Technology Officer",
          photo: "/assets/teams/haluk-tufekci.jpg",
          linkedin: "",
        },
        {
          name: "Levent Babacan",
          position: "Systems Architect",
          photo: "/assets/teams/levent-babacan.jpg",
          linkedin: "https://www.linkedin.com/in/levent-babacan-94020a9a/",
        },
        {
          name: "Barış İnanç",
          position: "Software Development Manager",
          photo: "/assets/teams/baris-inanc.jpg",
          linkedin: "https://www.linkedin.com/in/barisinanc/",
        },
        {
          name: "Afşin Çelik",
          position: "Senior Software Engineer",
          photo: "/assets/teams/afsin-celik.jpg",
          linkedin:
            "https://www.linkedin.com/in/af%C5%9Fin-%C3%A7elik-60830495/",
        },
        {
          name: "Egemen Kayalıdere",
          position: "Senior Software Engineer",
          photo: "/assets/teams/egemen_kayalidere.jpg",
          linkedin: "https://www.linkedin.com/in/egemenkayalidere/",
        },
        {
          name: "Ceyhun Ertürk",
          position: "Software Engineer",
          photo: "/assets/teams/ceyhun-erturk.jpg",
          linkedin: "https://www.linkedin.com/in/ceyhun-ert%C3%BCrk-3a445369",
        },
        {
          name: "Farshad Delirabdinia",
          position: "oftware Engineer",
          photo: "/assets/teams/farshad-delirabdinia.jpg",
          linkedin: "https://www.linkedin.com/in/farshaddelirabdinia/",
        },
        {
          name: "Hakkı Yavuz Erzurumlu",
          position: "Software Engineer",
          photo: "/assets/teams/yavuz-erzurumlu.jpg",
          linkedin: "https://www.linkedin.com/in/yavuz-erzurumlu-80460127/",
        },
        {
          name: "Mert Acel",
          position: "Software Developer",
          photo: "/assets/teams/mert-acel.jpg",
          linkedin: "https://www.linkedin.com/in/mertacel",
        },
        {
          name: "Oğuz Çakır",
          position: "Software QA Engineer",
          photo: "/assets/teams/oguz-cakir.jpg",
          linkedin: "",
        },
        {
          name: "Metin Par",
          position: "Project & Field Manager",
          photo: "/assets/teams/metin-par.jpg",
          linkedin:
            "https://www.linkedin.com/in/h%C3%BCseyin-metin-par-66576145/",
        },
        {
          name: "Rüzgar Eren Zere",
          position: "Product Manager",
          photo: "/assets/teams/ruzgar_eren_zere.jpg",
          linkedin: "https://www.linkedin.com/in/rzere/",
        },
        {
          name: "Elif Çakmak",
          position: "Office Manager",
          photo: "/assets/teams/elif-cakmak.jpg",
          linkedin: "",
        },
        {
          name: "Duygu Kalınyılmaz",
          position: "Accounting",
          photo: "/assets/teams/duygu-kalinyilmaz.jpg",
          linkedin: "https://www.linkedin.com/in/duygu-kalinyilmaz-48abb3139/",
        },
        {
          name: "Uğur Gelişken",
          position: "Front-End Developer",
          photo: "/assets/teams/ugur-gelisken.jpg",
          linkedin:
            "https://www.linkedin.com/in/u%C4%9Fur-geli%C5%9Fken-53007361",
        },
        {
          name: "Serkan Ataçoğlu",
          position: "Customer and Services Director",
          photo: "/assets/teams/serkan_atacoglu.jpg",
          linkedin: "https://www.linkedin.com/in/serkan/",
        },
        {
          name: "Selçuk Polat",
          position: "Software Engineer",
          photo: "/assets/teams/selcuk_polat.jpg",
          linkedin: "https://www.linkedin.com/in/sel%C3%A7uk-polat-866b4674/",
        },
        {
          name: "İlteriş Kutluğ Ümit",
          position: "Software Engineer",
          photo: "/assets/teams/ileris_kultug_umit.jpg",
          linkedin: "https://www.linkedin.com/in/ilteriskutlugumit/",
        },
        {
          name: "Taalai Almasova",
          position: "Software Engineer",
          photo: "/assets/teams/taalai_almasova.jpg",
          linkedin: "https://www.linkedin.com/in/taalaialmasova/",
        },
        {
          name: "Aylin Gümüş",
          position: "Senior Software Engineer",
          photo: "/assets/teams/aylin_gumus.jpg",
          linkedin: "https://www.linkedin.com/in/aylingumus/",
        },
      ],
    },
  });
}
