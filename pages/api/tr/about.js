export default function handler(req, res) {
  res.status(200).json({
    text: "Vizyona sahip yüksek teknolojili bir yazılım şirketiyiz ve üst düzey çözümler uyguluyoruz.",
    section_1: {
      title: "Kurulu olan",
      value: "2008",
      icon: "start",
    },
    section_2: {
      title: "VC-funded tarafıdan",
      value: "2016",
      icon: "star",
    },
    section_3: {
      title: "Takımdaki üyeler",
      value: "32",
      icon: "members",
    },
    section_4: {
      title: "İlk AR-GE projeleri",
      value: "25",
      icon: "projects",
    },
    chart: {
      title: "Bağlı cihazlar",
      value_1: {
        name: "Şey",
        value: "1030k",
      },
      value_2: {
        name: "Ağ geçidi",
        value: "185k",
      },
    },
  });
}
