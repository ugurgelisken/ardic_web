export default function handler(req, res) {
  res.status(200).json({
    left: {
      title: "Modiverse",
      summary: "Enterprise Mobility Management as a Service",
      logo: "modiverse",
      icon: "logo-modiverse",
      slug: "/technologies/modiverse",
    },
    right: {
      title: "IoT-Ignite",
      summary: "Full Stack IoT Platform with Edge Computing",
      logo: "iot-ignite",
      icon: "logo-iot-ignite",
      slug: "/technologies/iot-ignite",
    },
  });
}
