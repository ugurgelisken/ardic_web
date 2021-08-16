export default function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "Çözümler",
      desc: "Büyük ölçekli platformlar IoT hizmetleri ve derin cihaz yönetimi. İhtiyaçlarınıza Uyarlanmış IoT Çözümleri. Birlikte işinizi daha akıllı hale getirmek için çözümler geliştirebiliriz. Smart Taxi, IIoT (Industry 4.0), Managed Android Service Box, Fertilizer Tracking System, Distracted Driving Prevention, Customized Mobile Devices. ",
    },
    data: {
      solutions: [
        {
          title: "Smart Taxi",
          cover: "/assets/solutions/smart-taxi.jpg",
          summary:
            "Taksilerin hizmet platformlarına ve veri toplama uç noktalarına dönüştürülerek dijital dönüşümü. Çözümümüz, 3. taraf sağlayıcılar tarafından kullanılabilecek şehir verilerini toplarken, reklam ve gönderi uygulamaları için bir kanal sağlar.",
          technologies: [
            {
              name: "Ignite Cloud",
              image: "/assets/icons-128/icon-ignite-cloud.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Edge",
              image: "/assets/icons-128/icon-ignite-edge.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Metrics",
              image: "/assets/icons-128/icon-ignite-metrics.jpg",
              slug: "/technologies",
            },
            {
              name: "ArCloud",
              image: "/assets/icons-128/icon-arcloud.jpg",
              slug: "/technologies",
            },
          ],
        },
        {
          title: "IIoT (Industry 4.0)",
          cover: "/assets/solutions/industry-iot.jpg",
          summary:
            "ARDIC'in IIoT (Endüstri 4.0) çözümü, endüstrinin sıfır dokunuşlu konfigürasyona sahip ilk Android @EDGE platformudur. Hem EDGE hem de CLOUD'da derin sinir ağı ve karmaşık olay işleme.",
          technologies: [
            {
              name: "Ignite Cloud",
              image: "/assets/icons-128/icon-ignite-cloud.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Edge",
              image: "/assets/icons-128/icon-ignite-edge.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Metrics",
              image: "/assets/icons-128/icon-ignite-metrics.jpg",
              slug: "/technologies",
            },
            {
              name: "Machine Learning",
              image: "/assets/icons-128/icon-machine-learning.jpg",
              slug: "/technologies",
            },
          ],
        },
        {
          title: "Managed Android Service Box",
          cover: "/assets/solutions/masbox.jpg",
          summary:
            "ARDIC Managed Android Service Box, dijital tabela, bilgisayar değişimi, IoT uç ağ geçidi, IPTV set üstü kutusu vb. geleneksel hizmetleri sunma biçiminde devrim yaratan yönetilebilir ve güvenli bir kutudur.",
          technologies: [
            {
              name: "Modiverse",
              image: "/assets/icons-128/icon-modiverse.jpg",
              slug: "/technologies",
            },
            {
              name: "PiarOS",
              image: "/assets/icons-128/icon-pilaros.jpg",
              slug: "/technologies",
            },
            {
              name: "ArCloud",
              image: "/assets/icons-128/icon-arcloud.jpg",
              slug: "/technologies",
            },
          ],
        },
        {
          title: "Fertilizer Tracking System",
          cover: "/assets/solutions/field.jpg",
          summary:
            "Gübre takip sisteminde kullanılan el terminallerinin kontrolü ve yönetimi, MDM platformumuz Modiverse üzerinde çalışmaktadır. Uçtan uca güvenlik için en önemlisi, bu projede ek API'lerle kendi Android çerçevemizi sağlıyoruz.",
          technologies: [
            {
              name: "Modiverse",
              image: "/assets/icons-128/icon-modiverse.jpg",
              slug: "/technologies",
            },
            {
              name: "AFEX",
              image: "/assets/icons-128/icon-afex.jpg",
              slug: "/technologies",
            },
            {
              name: "ArCloud",
              image: "/assets/icons-128/icon-arcloud.jpg",
              slug: "/technologies",
            },
          ],
        },
        {
          title: "Distracted Driving Prevention",
          cover: "/assets/solutions/distracted.jpg",
          summary:
            "Dikkati dağılmış sürüş önleme çözümleri gibi hizmetler için, IoT-Ignite platformu özel, ölçeklenebilir bir arka uç sağlayabilirken Modiverse, hizmetleri ek cihaz yönetimi işlevleriyle güçlendirebilir.",
          technologies: [
            {
              name: "Ignite Cloud",
              image: "/assets/icons-128/icon-ignite-cloud.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Edge",
              image: "/assets/icons-128/icon-ignite-edge.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Metrics",
              image: "/assets/icons-128/icon-ignite-metrics.jpg",
              slug: "/technologies",
            },
            {
              name: "ArCloud",
              image: "/assets/icons-128/icon-arcloud.jpg",
              slug: "/technologies",
            },
          ],
        },
        {
          title: "Customized Mobile Devices",
          cover: "/assets/solutions/devices.jpg",
          summary:
            "Platformumuz ile mobil cihazlarınız evde, ofiste veya tanımladığınız herhangi bir bağlamda tamamen farklı cihazlar haline gelebilir. Özelleştirilmiş işletim sistemimizi ve özel bulutumuzu kullanarak kendi Android tabanlı akıllı telefonlarınızı ve tabletlerinizi oluşturun.",
          technologies: [
            {
              name: "Modiverse",
              image: "/assets/icons-128/icon-modiverse.jpg",
              slug: "/technologies",
            },
            {
              name: "PiarOS",
              image: "/assets/icons-128/icon-pilaros.jpg",
              slug: "/technologies",
            },
            {
              name: "ArCloud",
              image: "/assets/icons-128/icon-arcloud.jpg",
              slug: "/technologies",
            },
          ],
        },
      ],
      more: {
        title: "İhtiyaçlarınıza Uyarlanmış IoT Çözümleri",
        text: "Birlikte işinizi daha akıllı hale getirmek için çözümler geliştirebiliriz.",
      },
    },
  });
}
