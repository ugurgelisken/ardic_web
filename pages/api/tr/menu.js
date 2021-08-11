export default function handler(req, res) {
  res.status(200).json([
    {
      title: "Hakkında",
      slug: "/about",
    },
    {
      title: "Teknolojiler",
      slug: "/technologies",
    },
    {
      title: "Takım",
      slug: "/teams",
    },
    {
      title: "Kariyer",
      slug: "/career",
    },
    {
      title: "İletişim",
      slug: "/contact",
    },
  ]);
}
