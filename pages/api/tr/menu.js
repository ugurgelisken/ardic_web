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
      title: "İletişim",
      slug: "/contact",
    },
  ]);
}
