export default function handler(req, res) {
  res.status(200).json({
    left: {
      title: "Modiverse",
      summary: "Enterprise Mobility Management as a Service",
      logo: "/assets/modiverse.png",
      icon: "/assets/logo-modiverse.jpg",
      slug: "/technologies/modiverse",
    },
    right: {
      title: "IoT-Ignite",
      summary: "Full Stack IoT Platform with Edge Computing",
      logo: "/assets/iot-ignite.png",
      icon: "/assets/logo-iot-ignite.jpg",
      slug: "/technologies/iot-ignite",
    },
  });
}
