export default function handler(req, res) {
  const data = [
    {
      id: "modiverse",
      meta: {
        title: "Modiverse",
        desc: "ARDIC provides an end to end solution to all mobile device management (MDM) needs.",
      },
      data: {
        slug: "/modiverse",
        cover: "/assets/technologies/modiverse.png",
        detailTexts: [
          {
            tag: "h1",
            text: "Complete MDM: Modiverse",
          },
          {
            tag: "p",
            text: "ARDIC provides an end to end solution to all mobile device management (MDM) needs.",
          },
          {
            tag: "p",
            text: "Modiverse is a cloud based device management platform that can communicate with PilarOS, which is our improved, secure and fully manageable Android distribution that enables device management on operating system level.",
          },
          {
            tag: "p",
            text: "Some of the things you can do only if you have such a structure:",
          },
          {
            tag: "p",
            text: " * Over-the-air firmware updates – incremental or full App installation, removal and updates without needing user approval – silent install * Full independence from Google, unlike other standard MDM providers * Automatically register and configure out of the box devices immediately when they go online * Full control over hardware",
          },
          {
            tag: "p",
            text: "and many more advanced MDM functions.",
          },
        ],
      },
    },
    {
      id: "iot-ignite",
      meta: {
        title: "iot-ignite",
        desc: "IoT-Ignite is ARDIC’s end-to-end IoT platform. There are various vertical solutions running on the platform developed by ARDIC and its partners.",
      },
      data: {
        slug: "/iot-ignite",
        cover: "/assets/technologies/iot-ignite.png",
        detailTexts: [
          {
            tag: "h1",
            text: "End-to-End IoT",
          },
          {
            tag: "p",
            text: "IoT-Ignite is ARDIC’s end-to-end IoT platform. There are various vertical solutions running on the platform developed by ARDIC and its partners.",
          },
          {
            tag: "p",
            text: "With edge processing capabilities that are enabled by ARDIC’s OS running on IoT gateways, and its own cloud infrastructure,",
          },
          {
            tag: "p",
            text: " * Device, application and service layers can be managed on a single architecture, * Full stack services can run on the platform independent of third party providers like Google and Amazon.",
          },
          {
            tag: "p",
            text: "With these properties, IoT-Ignite becomes a truly end-to-end IoT platform, differentiating itself from the majority of providers in the market that define themselves as IoT platforms.",
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
        desc: "Through its own cloud infrastructure, ARDIC can provide its MDM and IoT services fully independent of third party providers, unlike its competitors. This gives ARDIC an unparalleled edge especially in the security-sensitive markets.",
      },
      data: {
        slug: "/arcloud",
        cover: "/assets/technologies/ar-cloud.png",
        detailTexts: [
          {
            tag: "h1",
            text: "Own Infrastructure – ArCloud",
          },
          {
            tag: "p",
            text: "Through its own cloud infrastructure, ARDIC can provide its MDM and IoT services fully independent of third party providers, unlike its competitors. This gives ARDIC an unparalleled edge especially in the security-sensitive markets.",
          },
          {
            tag: "p",
            text: "To address concerns for the data collection, data processing and data storage, being local means being secure. ARDIC can also provide on-premise cloud solutions on request.",
          },
          {
            tag: "p",
            text: "ARDIC has the ability and agility to push the envelope of technology staying ahead of its competitors.",
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
