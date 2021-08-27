export default function handler(req, res) {
  const data = [
    {
      id: "modiverse",
      meta: {
        title: "Modiverse",
        desc: "ARDIC, tüm mobil cihaz yönetimi (MDM) ihtiyaçlarına uçtan uca bir çözüm sunar.",
      },
      data: {
        slug: "/modiverse",
        cover: "/assets/technologies/modiverse.png",
        detailTexts: [
          {
            tag: "h1",
            text: "Eksiksiz MDM: Modiverse",
          },
          {
            tag: "p",
            text: "ARDIC, tüm mobil cihaz yönetimi (MDM) ihtiyaçlarına uçtan uca bir çözüm sunar.",
          },
          {
            tag: "p",
            text: "Modiverse, işletim sistemi düzeyinde cihaz yönetimi sağlayan gelişmiş, güvenli ve tamamen yönetilebilir Android dağıtımımız olan PilarOS ile iletişim kurabilen bulut tabanlı bir cihaz yönetim platformudur.",
          },
          {
            tag: "p",
            text: "Yalnızca böyle bir yapıya sahipseniz yapabileceğiniz şeylerden bazıları:",
          },
          {
            tag: "p",
            text: " * Kablosuz aygıt yazılımı güncellemeleri – kullanıcı onayı gerektirmeden aşamalı veya tam Uygulama yükleme, kaldırma ve güncellemeler – sessiz kurulum * Diğer standart MDM sağlayıcılarından farklı olarak Google'dan tam bağımsızlık * Kullanıma hazır cihazları gittikleri anda otomatik olarak kaydetme ve yapılandırma çevrimiçi * Donanım üzerinde tam kontrol",
          },
          {
            tag: "p",
            text: "ve daha birçok gelişmiş MDM işlevi.",
          },
        ],
      },
    },
    {
      id: "iot-ignite",
      meta: {
        title: "iot-ignite",
        desc: "IoT-Ignite, ARDIC'ın uçtan uca IoT platformudur. ARDIC ve ortakları tarafından geliştirilen platform üzerinde çalışan çeşitli dikey çözümler bulunmaktadır.",
      },
      data: {
        slug: "/iot-ignite",
        cover: "/assets/technologies/iot-ignite.png",
        detailTexts: [
          {
            tag: "h1",
            text: "Uçtan Uca IoT",
          },
          {
            tag: "p",
            text: "IoT-Ignite, ARDIC'ın uçtan uca IoT platformudur. ARDIC ve ortakları tarafından geliştirilen platform üzerinde çalışan çeşitli dikey çözümler bulunmaktadır.",
          },
          {
            tag: "p",
            text: "ARDIC'ın IoT ağ geçitleri üzerinde çalışan işletim sistemi ve kendi bulut altyapısı tarafından etkinleştirilen uç işleme yetenekleri ile,",
          },
          {
            tag: "p",
            text: " * Cihaz, uygulama ve hizmet katmanları tek bir mimari üzerinde yönetilebilir, * Full stack servisler, Google ve Amazon gibi üçüncü parti sağlayıcılardan bağımsız olarak platform üzerinde çalışabilir.",
          },
          {
            tag: "p",
            text: "Bu özelliklerle IoT-Ignite, pazardaki kendilerini IoT platformları olarak tanımlayan çoğu sağlayıcıdan farklılaşarak gerçekten uçtan uca bir IoT platformu haline gelir.",
          },
          {
            tag: "a",
            text: "https://www.iot-ignite.com/",
          },
        ],
      },
    },
    {
      id: "arcloud",
      meta: {
        title: "Arcloud",
        desc: "ARDIC, kendi bulut altyapısı sayesinde, rakiplerinden farklı olarak MDM ve IoT hizmetlerini üçüncü taraf sağlayıcılardan tamamen bağımsız olarak sunabilmektedir. Bu, ARDIC'a özellikle güvenlik açısından hassas pazarlarda benzersiz bir avantaj sağlar.",
      },
      data: {
        slug: "/arcloud",
        cover: "/assets/technologies/ar-cloud.png",
        detailTexts: [
          {
            tag: "h1",
            text: "Kendi Altyapınız – ArCloud",
          },
          {
            tag: "p",
            text: "ARDIC, kendi bulut altyapısı sayesinde, rakiplerinden farklı olarak MDM ve IoT hizmetlerini üçüncü taraf sağlayıcılardan tamamen bağımsız olarak sunabilmektedir. Bu, ARDIC'a özellikle güvenlik açısından hassas pazarlarda benzersiz bir avantaj sağlar.",
          },
          {
            tag: "p",
            text: "Veri toplama, veri işleme ve veri depolama ile ilgili endişeleri gidermek için yerel olmak, güvenli olmak anlamına gelir. ARDIC, istek üzerine kurum içi bulut çözümleri de sağlayabilir.",
          },
          {
            tag: "p",
            text: "ARDIC, rakiplerinin önüne geçerek teknolojinin sınırlarını zorlama yeteneğine ve çevikliğine sahiptir.",
          },
        ],
      },
    },
  ];

  const { id } = req.query;
  const result = data.find((x) => x.id === id);

  result
    ? res.status(200).json({ id, ...result })
    : res.status(404).json({ error: `${id} not found` });
}
