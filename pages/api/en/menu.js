export default function handler(req, res) {
  res.status(200).json([
    {
      title: "About",
      slug: "/about",
    },
    {
      title: "Technologies",
      slug: "/technologies",
    },
    {
      title: "Contact",
      slug: "/contact",
    },
  ]);
}
