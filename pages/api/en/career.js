export default function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "Kariyer",
      desc: "ARDICTECH'e Kariyer",
    },
    data: {
      title_1: "ARDICTECH'e Kariyer",
      summary_1:
        "We are seeking motivated, entrepreneurial minded individuals who are always looking for ways to break status quo, and cover new grounds in true high-tech research and development. If you believe that you are good and can dare to embark yourself out of your limits, and you aim to play in the same league with world-wide tech companies, then we are the one for you.",
      title_2: "Open Positions",
      positions: [
        {
          name: "Mobile Developer",
          img: "https://images.squarespace-cdn.com/content/v1/5d2ec837bac08300015593a5/1578410849447-WC8RR71BV6XLJ3FL575G/charles-pjAH2Ax4uWk-unsplash.jpg?format=750w",
          details: [
            {
              tag: "p",
              text: "We are proud of our technologies that are touching people’s lives not only in Turkey but globally as well. We are serving more than a million end points every day. ",
            },
            {
              tag: "p",
              text: "Imagine what you could do here! At ARDIC, great ideas have a way of becoming great products, and services. We are now after one of the most challenging mission, rethinking social networking and digital transformation of our lives by combining groundbreaking technologies that over the years we developed.",
            },
            {
              tag: "p",
              text: "Mobile application team will play key role for realizing this vision. Our mobile application team is looking for a talented mobile developer to help build scalable and creative features that delight hundreds of millions of customers around the world.",
            },
            {
              tag: "p",
              text: "That vision always includes a deep commitment to strengthening ARDIC’s privacy policy, one of our core values. End user services are becoming a bigger part of ARDIC’s business than ever before.",
            },
            {
              tag: "p",
              text: "Your day to day will be implementing new designs in mobile application by collaborating with our product designers and software developers. You will also be expected to participate in the feature design process with our lean and talented team.",
            },
            {
              tag: "b",
              text: "Job Description",
            },
            {
              tag: "p",
              text: "*Design and implement cross-platform Android/iOS mobile applications connected to highly available cloud applications. * Develop and evolve clean and maintainable software deliveries that satisfy targeted product features. * Review, maintain design and code documentation. * Involve in continuous integration and deployment tasks. * Support business and customer service teams when necessary.",
            },
            {
              tag: "b",
              text: "Qualifications",
            },
            {
              tag: "p",
              text: "* Experience in one or more cross-platform development frameworks. * Knowledge of React (Hooks), Context API/Redux, RESTful APIs. * Strength in REST, SOAP, structured and non-structured data models. * Experience with software lifecycle management tools.",
            },
            {
              tag: "b",
              text: "Education & Experience",
            },
            {
              tag: "p",
              text: "* MS, or BS in Computer Engineering, Computer Science, Software Engineering or related fields.",
            },
          ],
        },
      ],
    },
  });
}
