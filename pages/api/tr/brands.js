export default function handler(req, res) {
  res.status(200).json({
    left: {
      title: "Modiverse",
      summary: "Hizmet Olarak Kurumsal Mobilite Yönetimi",
      logo: "/assets/modiverse.png",
      icon: "/assets/logo-modiverse.jpg",
      slug: "/technologies/modiverse",
    },
    right: {
      title: "IoT-Ignite",
      summary: "Edge Computing ile Tam Yığın IoT Platformu",
      logo: "/assets/iot-ignite.png",
      icon: "/assets/logo-iot-ignite.jpg",
      slug: "/technologies/iot-ignite",
    },
  });
}
