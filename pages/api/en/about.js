export default function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "About",
      desc: "ARDICTECH is a high-tech software company with vision, and deployed high-end solutions.",
    },
    data: {
      text: "We are a high-tech software company with vision, and deployed high-end solutions.",
      section_1: {
        title: "Founded in",
        value: "2008",
        icon: "start",
      },
      section_2: {
        title: "VC-funded since",
        value: "2016",
        icon: "star",
      },
      section_3: {
        title: "Members in our team",
        value: "32",
        icon: "members",
      },
      section_4: {
        title: "First-ever R&D projects",
        value: "25",
        icon: "projects",
      },
      chart: {
        title: "Connected devices",
        value_1: {
          name: "Things",
          value: "1030k",
        },
        value_2: {
          name: "Gateways",
          value: "185k",
        },
      },
    },
  });
}
