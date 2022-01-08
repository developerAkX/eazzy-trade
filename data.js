import SchoolTeacherPic from "./public/schoolteacher.png";
import HardWorkingPic from "./public/hardworking.png";
import SearchingCoursePic from "./public/searching.png";
import profilePic from "./public/profile-sample.jpg";
import AboutUsPic from "./public/aboutUs-team-pic.png";
import demo from "./public/s6-01.jpg";
import telegram from "./public/social media/telegram.svg";

const data = {
  LandingScreen: {
    head: {
      title: "Eazzy Trade",
      description: "Educational Platform | Get financially educated.",
    },
    body: {
      title: {
        normal: "Welcome to",
        highlighted: "EazzyTrade.in !",
      },
      sections: [
        {
          title: "HOW IT WORKS?",
          contents: [
            {
              imgSrc: SearchingCoursePic,
              title: "Pick a Course",
              description:
                "Pick a Course based on your learning objective. Pick a Course – Personal Finance, Technical Analysis, Equity Research and others based on what you intend to learn.",
            },
            {
              imgSrc: SchoolTeacherPic,
              title: "Learn",
              description:
                "Learn from our mix of Videos, eBooks, live courses and examples. Interact with our team and other students for collaborative learning experience.",
            },
            {
              imgSrc: HardWorkingPic,
              title: "Practice",
              description:
                "Practice questions and Submit assignments to Get Experience and meet your dream goal.",
            },
          ],
        },
      ],
      reviewsSection: [
        {
          profilePic: profilePic,
          name: "Abhinav Singh",
          text: "One of the best courses I have taken by far. Everything from the videos to assignments is amazing and informative. It has helped me tremendously. I encourage everyone to take it.",
        },
        {
          profilePic: profilePic,
          name: "Abhinav Singh",
          text: "One of the best courses I have taken by far. Everything from the videos to assignments is amazing and informative. It has helped me tremendously. I encourage everyone to take it.",
        },
        {
          profilePic: profilePic,
          name: "Abhinav Singh",
          text: "One of the best courses I have taken by far. Everything from the videos to assignments is amazing and informative. It has helped me tremendously. I encourage everyone to take it.",
        },
      ],
      aboutUsSection: {
        imgSrc: AboutUsPic,
        bold: "Educational platform",
        text: "Eazzy Trade is an educational platform that focuses on Finance in an applied manner. Here, every learner becomes part of the community and then chats, interacts and forms groups with other learners and experts to learn about course content.",
      },
    },
  },
  CoursesScreen: {
    head: {
      title: "Eazzy Trade",
      description: "Educational Platform | Get financially educated.",
    },
    body: {
      courses: [
        {
          imgSrc: demo,
          title: "Stock Market Course",
          description:
            "Next.js will automatically determine the width and height of your image based on the imported file. These values are used to prevent Cumulative Layout Shift while your image is loading.",
        },
        {
          imgSrc: demo,
          title: "Stock Market Course",
          description:
            "Next.js will automatically determine the width and height of your image based on the imported file. These values are used to prevent Cumulative Layout Shift while your image is loading.",
        },
        {
          imgSrc: demo,
          title: "Stock Market Course",
          description:
            "Next.js will automatically determine the width and height of your image based on the imported file. These values are used to prevent Cumulative Layout Shift while your image is loading.",
        },
        {
          imgSrc: demo,
          title: "Stock Market Course",
          description:
            "Next.js will automatically determine the width and height of your image based on the imported file. These values are used to prevent Cumulative Layout Shift while your image is loading.",
        },
        {
          imgSrc: demo,
          title: "Stock Market Course",
          description:
            "Next.js will automatically determine the width and height of your image based on the imported file. These values are used to prevent Cumulative Layout Shift while your image is loading.",
        },
        {
          imgSrc: demo,
          title: "Stock Market Course",
          description:
            "Next.js will automatically determine the width and height of your image based on the imported file. These values are used to prevent Cumulative Layout Shift while your image is loading.",
        },
      ],
    },
  },
  ServiceScreen: {
    head: {
      title: "Eazzy Trade",
      description: "Educational Platform | Get financially educated.",
    },
    body: {
      Services: [
        {
          imgSrc: telegram,
          title: "Eazzy Trade Telegram Group",
          description: "",
          link: "https://www.google.com",
        },
      ],
    },
  },
  FAQsContent: [
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
    {
      Question: `Which course is best for stock market?`,
      Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
    },
  ],
};

export default data;
