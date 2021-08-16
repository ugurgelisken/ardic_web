export default function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "Teknolojiler",
      desc: "Ignite Cloud, PilarOS, ArCloud, Ignite Edge, AFEX, Makina Öğrenmesi, Ignite Metrics, Modiverse, Derin Öğrenme, Blok Zincir",
    },
    data: [
      {
        name: "Ignite Cloud",
        summary:
          "Entegrasyon için REST API'leri sağlayan, bağlı cihazların kablosuz olarak sağlanmasını, yönetilmesini ve otomasyonunu sağlayan çok katmanlı platform teknolojisi.",
        icon: "ignite-cloud",
        slug: "/technologies/iot-ignite",
      },
      {
        name: "PilarOS",
        summary:
          "AKA TRDROID, Android üzerine kurulu 1800'den fazla yeni API ile genişletilmiş güvenlik ve yönetilebilirlik çerçevesine sahip ARDIC'in endüstriyel Android dağıtımıdır.",
        icon: "pilaros",
        slug: "https://www.pilaros.net/?lang=en",
      },
      {
        name: "ArCoud",
        summary:
          "ARDIC kendi Cloud'unu geliştirdi ve üzerinde çalışıyor. Bu, AWS benzeri bir Cloud hizmetidir.",
        icon: "arcloud",
        slug: "/technologies/arcloud",
      },
      {
        name: "Ignite Edge",
        summary:
          "Veriler, daha düşük bant genişliği, daha hızlı veri erişimi ve basitleştirilmiş veri yönetimi sağlayan Cloud'a ulaşmadan önce IoT cihazının kendisinde işlenir. Akıllı uç ağ geçitleri kuralları uygular, verimli karar vermeye olanak tanır ve Cloud bağlantısı olmasa bile tamamen kontrolünüz altındadır.",
        icon: "ignite-edge",
        slug: "/technologies/iot-ignite",
      },
      {
        name: "AFEX",
        summary:
          "ARDIC'ın herhangi bir Android cihazda uçtan uca güvenli ve yönetilebilir hizmetler sağlayan framework'üdür. AFEX, basit bir komut dosyası çalıştırılarak herhangi bir Android cihazına yerleştirilebilir veya entegre edilebilir veya belirli özellikler için cihazlara mobil uygulama olarak yüklenebilir.",
        icon: "afex",
        slug: "https://www.pilaros.net/afex?lang=en",
      },
      {
        name: "Machine Learning",
        summary:
          "Sahadan gelen verileri hem uçta hem de Cloud'ta analiz etmek ve değerlendirmek için makine öğrenimi algoritmaları kullanıyoruz.",
        icon: "machine-learning",
        slug: "",
      },
      {
        name: "Ignite Metrics",
        summary:
          "Saha personeli yöneticileri ve liderleri için verimliliği artırmak için gerçek zamanlı görünürlük ve optimizasyon araçları.",
        icon: "ignite-metrics",
        slug: "/technologies/iot-ignite",
      },
      {
        name: "Modiverse",
        summary:
          "Cloud tabanlı kurumsal düzeyde mobil cihaz yönetimi platformu.",
        icon: "modiverse",
        slug: "/technologies/modiverse",
      },
      {
        name: "Deep Learning",
        summary:
          "Benzer şekilde, verileri yorumlamak ve bir karar verme mekanizması oluşturmak için derin öğrenme tekniklerimiz üzerinde çalışıyoruz.",
        icon: "deep-learning",
        slug: "",
      },
      {
        name: "Block Chain",
        summary:
          "Güvenilir ve özel IoT uygulamaları için block chain teknolojilerinin bağlı cihazları ve verileri izlemesini sağlıyoruz.",
        icon: "block-chain",
        slug: "",
      },
    ],
  });
}
