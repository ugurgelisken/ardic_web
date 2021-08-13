export default function handler(req, res) {
  const data = [
    {
      id: "modiverse",
      data: {
        slug: "/modiverse",
        cover: "",
        detailTexts: [
          {
            tag: "",
            text: "",
          },
        ],
      },
    },
    {
      id: "iot-ignite",
      data: {
        slug: "/",
        cover: "",
        detailTexts: [
          {
            tag: "",
            text: "",
          },
        ],
      },
    },
    {
      id: "arcloud",
      data: {
        slug: "/",
        cover: "",
        detailTexts: [
          {
            tag: "",
            text: "",
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
