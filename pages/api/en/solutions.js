export default function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "Solutions",
      desc: "IoT Solutions Tailored to Your Needs. Together we can develop solutions to make your business smarter. Smart Taxi, IIoT (Industry 4.0), Managed Android Service Box, Fertilizer Tracking System, Distracted Driving Prevention, Customized Mobile Devices. ",
    },
    data: {
      solutions: [
        {
          title: "Smart Taxi",
          cover: "/assets/solutions/smart-taxi.jpg",
          summary:
            "Digital transformation of taxis by turning them into service platforms and data collecting end-points. Our solution provides a channel for advertisement and dispatch applications, while collecting city data that can be utilized by 3rd party providers.",
          technologies: [
            {
              name: "Ignite Cloud",
              image: "/assets/icons-128/icon-ignite-cloud.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Edge",
              image: "/assets/icons-128/icon-ignite-edge.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Metrics",
              image: "/assets/icons-128/icon-ignite-metrics.jpg",
              slug: "/technologies",
            },
            {
              name: "ArCloud",
              image: "/assets/icons-128/icon-arcloud.jpg",
              slug: "/technologies",
            },
          ],
        },
        {
          title: "IIoT (Industry 4.0)",
          cover: "/assets/solutions/industry-iot.jpg",
          summary:
            "ARDIC’s IIoT (Industry 4.0) solution is the industry’s first Android @EDGE platform with zero touch configuration. Deep neural network and complex event processing at both EDGE and CLOUD.",
          technologies: [
            {
              name: "Ignite Cloud",
              image: "/assets/icons-128/icon-ignite-cloud.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Edge",
              image: "/assets/icons-128/icon-ignite-edge.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Metrics",
              image: "/assets/icons-128/icon-ignite-metrics.jpg",
              slug: "/technologies",
            },
            {
              name: "Machine Learning",
              image: "/assets/icons-128/icon-machine-learning.jpg",
              slug: "/technologies",
            },
          ],
        },
        {
          title: "Managed Android Service Box",
          cover: "/assets/solutions/masbox.jpg",
          summary:
            "ARDIC Managed Android Service Box is a manageable and secure box that revolutionizes the way of offering conventional services such as digital signage, PC replacement, IoT edge gateway, IPTV set top box etc.",
          technologies: [
            {
              name: "Modiverse",
              image: "/assets/icons-128/icon-modiverse.jpg",
              slug: "/technologies",
            },
            {
              name: "PiarOS",
              image: "/assets/icons-128/icon-pilaros.jpg",
              slug: "/technologies",
            },
            {
              name: "ArCloud",
              image: "/assets/icons-128/icon-arcloud.jpg",
              slug: "/technologies",
            },
          ],
        },
        {
          title: "Fertilizer Tracking System",
          cover: "/assets/solutions/field.jpg",
          summary:
            "Control and management of handheld terminals used in a fertilizer tracking system is running on our MDM platform Modiverse. Most importantly for end-to-end security, we provide our own Android framework with additional API's in this project.",
          technologies: [
            {
              name: "Modiverse",
              image: "/assets/icons-128/icon-modiverse.jpg",
              slug: "/technologies",
            },
            {
              name: "AFEX",
              image: "/assets/icons-128/icon-afex.jpg",
              slug: "/technologies",
            },
            {
              name: "ArCloud",
              image: "/assets/icons-128/icon-arcloud.jpg",
              slug: "/technologies",
            },
          ],
        },
        {
          title: "Distracted Driving Prevention",
          cover: "/assets/solutions/distracted.jpg",
          summary:
            "For services like distracted driving prevention solutions, IoT-Ignite platform can provide a specialized, scalable back-end while Modiverse can reinforce the services with additional device management functionalities.",
          technologies: [
            {
              name: "Ignite Cloud",
              image: "/assets/icons-128/icon-ignite-cloud.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Edge",
              image: "/assets/icons-128/icon-ignite-edge.jpg",
              slug: "/technologies",
            },
            {
              name: "Ignite Metrics",
              image: "/assets/icons-128/icon-ignite-metrics.jpg",
              slug: "/technologies",
            },
            {
              name: "ArCloud",
              image: "/assets/icons-128/icon-arcloud.jpg",
              slug: "/technologies",
            },
          ],
        },
        {
          title: "Customized Mobile Devices",
          cover: "/assets/solutions/devices.jpg",
          summary:
            "With our platform, your mobile devices can become completely different devices in home, office or any context you define. Create your own Android based smart phones and tablets by using our customized OS and private cloud.",
          technologies: [
            {
              name: "Modiverse",
              image: "/assets/icons-128/icon-modiverse.jpg",
              slug: "/technologies",
            },
            {
              name: "PiarOS",
              image: "/assets/icons-128/icon-pilaros.jpg",
              slug: "/technologies",
            },
            {
              name: "ArCloud",
              image: "/assets/icons-128/icon-arcloud.jpg",
              slug: "/technologies",
            },
          ],
        },
      ],
      more: {
        title: "IoT Solutions Tailored to Your Needs",
        text: "Together we can develop solutions to make your business smarter.",
      },
    },
  });
}
