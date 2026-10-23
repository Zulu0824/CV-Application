const id = () => crypto.randomUUID();

export function getExampleData() {
  return {
    personal: {
      fullName: "Aarav Mehta",
      role: "Frontend Developer",
      email: "aarav.mehta@example.com",
      phone: "+91 98765 43210",
      linkedin: "linkedin.com/in/aaravmehta",
      github: "github.com/aaravmehta",
    },
    education: [
      {
        id: id(),
        school: "Greenfield University",
        degree: "B.Tech in Computer Science",
        startDate: "2018-08",
        endDate: "2022-05",
      },
      {
        id: id(),
        school: "Greenfield Senior Secondary School",
        degree: "Higher Secondary (Science)",
        startDate: "2016-04",
        endDate: "2018-03",
      },
    ],
    experience: [
      {
        id: id(),
        company: "BrightPath Technologies",
        role: "Frontend Developer",
        startDate: "2022-07",
        endDate: "",
        points: [
          {
            id: id(),
            text: "Built and maintained responsive React interfaces used by 50,000+ monthly users.",
          },
          {
            id: id(),
            text: "Reduced initial page load time by 35% through code splitting and image optimisation.",
          },
          {
            id: id(),
            text: "Collaborated with designers and backend engineers to ship features in two-week sprints.",
          },
        ],
      },
      {
        id: id(),
        company: "Nimbus Labs",
        role: "Software Engineering Intern",
        startDate: "2021-05",
        endDate: "2021-08",
        points: [
          {
            id: id(),
            text: "Developed internal dashboard components with React and Chart.js.",
          },
          {
            id: id(),
            text: "Wrote unit tests that raised front-end test coverage from 40% to 75%.",
          },
        ],
      },
    ],
    skills: [
      { id: id(), text: "React and JavaScript (ES6+)" },
      { id: id(), text: "HTML5, CSS3 and responsive design" },
      { id: id(), text: "Git and GitHub workflows" },
      { id: id(), text: "REST APIs and JSON" },
      { id: id(), text: "Unit testing with Jest" },
    ],
  };
}
