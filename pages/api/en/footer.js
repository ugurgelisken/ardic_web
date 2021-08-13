export default function handler(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Access-Control-Allow-Methods",
    "PUT, POST, PATCH, DELETE, GET"
  );

  res.status(200).json({
    copyright: "©2021 ARDIC Inc.",
    powered: " | Powered by ARDIC Technology",
    socialMedias: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/ardictech",
        icon: "facebook",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/ardictech",
        icon: "instagram",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/ardictech",
        icon: "twitter",
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/company/ardictech/mycompany",
        icon: "linkedin",
      },
      {
        name: "Medium",
        link: "https://medium.com/@ardic",
        icon: "medium",
      },
    ],
  });
}
