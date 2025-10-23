export interface Experience {
  title: string;
  start_date: string;
  end_date: string;
  type: "study" | "work";
}

export interface Project {
  title: string;
  description: string;
  photo_url: string | null;
}

export interface MemberData {
  route: string;
  name: string;
  lastname: string;
  photo_url: string | null;
  role: string;
  city: string;
  country: string;
  bio: string;
  skills: string[];
  experiences: Experience[];
  projects: Project[] | null;
}

const malak: MemberData = {
  route: "malak",
  name: "Malak",
  lastname: "Felioune",
  photo_url: "pfps/malak.jpg",
  role: "Software engineer",
  city: "Algiers",
  country: "Algeria",
  bio: "I am the CEO & Founder of Adam AGI, first robotic computer in the world, love deeptech and very high impact software",
  skills: ["AGI", "Cyber security", "system engineering", "large language models", "Reinforcment learning", "and a lot more that I am tired to write"],
  experiences: [
    {
      title: "student at ENSIA",
      start_date: "9/2023",
      end_date: "Present",
      type: "study",
    },
    {
      title: "Cyber security: self employment",
      start_date: "1/2024",
      end_date: "Present",
      type: "work",
    },
    {
      title: "CEO and solo founder of Adam AGI",
      start_date: "8/2025",
      end_date: "Present",
      type: "work",
    },
  ],
  projects: [
  {
    title: "Adam AGI",
    description:
      "Adam AGI is a groundbreaking artificial general intelligence system — designed to reason, learn, and interact with the world in a fully autonomous way. first general intelligence, making it one of the breakthroughs of 2026.",
    photo_url: "pfps/AdamWithCat.jpg"
  }
],
};
//create one like this for yourself
const youcef: MemberData = {
  route: "youcef",
  name: "Youcef",
  lastname: "Belaib",
  photo_url: "pfps/youcefpfp2.JPG",
  role: "Team Leader and Software Engineer",
  city: "Algiers",
  country: "Algeria",
  bio: "I am a passionate software engineer who loves his team",
  skills: ["React", "Javascript", "Flutter", "Machine Learning", "TypeScript"],
  experiences: [
    {
      title: "Ai/Data Science student at ENSIA",
      start_date: "9/2023",
      end_date: "Present",
      type: "study",
    },
    {
      title: "Co-Manager of External Relations at M4T club",
      start_date: "12/2024",
      end_date: "Present",
      type: "work",
    },
    {
      title: "Co-Manager of Finance and Legal at EBEC club",
      start_date: "9/2025",
      end_date: "Present",
      type: "work",
    },
  ],
  projects: [],
};
const hind: MemberData = {
  route: "hind",
  name: "Hind",
  lastname: "Bennabi",
  photo_url: "pfps/pfp_hind.jpg",
  role: "AI Student ",
  city: "Algiers",
  country: "Algeria",
  bio: "I am an enthusiastic AI student, passionate about learning and building projects",
  skills: ["c++","python","html","css","php","figma","javascript"],
  experiences: [],
  projects: null,
};
const oumaima: MemberData = {
  route: "oumaima",
  name: "Oumaima",
  lastname: "Boucekkine",
  photo_url: "pfps/oumaima.png",
  role: "Frontend Developer & Creative Designer",
  city: "Annaba",
  country: "Algeria",
  bio: "I am a dedicated and creative frontend developer passionate about crafting elegant, user-centered web experiences. With a strong focus on clean code, design precision, and modern technologies, I aim to bridge functionality with beauty in every project I create.",
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git & GitHub",
    "UI/UX Design",
  ],
  experiences: [
    {
      title: "Vice president at EBEC Club (ENSIA Business & Entrepreneurship Club)",
      start_date: "09/2025",
      end_date: "Present",
      type: "work",
    },
    {
      title: "Web Developer Intern at NeuronCowork",
      start_date: "10/2025",
      end_date: "Present",
      type: "work",
    },
    {
      title: "Full Stack Developer Intern at Code Alpha",
      start_date: "8/2025",
      end_date: "9/2025",
      type: "work",
    },
    {
      title: "Event Manager at EBEC Club (ENSIA Business & Entrepreneurship Club)",
      start_date: "12/2024",
      end_date: "Present",
      type: "work",
    },
    {
      title: "Computer Science Student at ENSIA",
      start_date: "9/2023",
      end_date: "Present",
      type: "study",
    },
  ],
  projects: [
   
    {
      title: "Fresto - Restaurant Management System",
      description:
        "Built the frontend for a management system that allows restaurants to handle menus, staff, and customer orders seamlessly.",
      photo_url: "pfps/oumaima_project1.png",
    },
    {
    title: "House Price Prediction using Machine Learning",
    description:
      "Developed a machine learning model to predict house prices based on key features such as location, area, number of rooms, and overall property description. Implemented data preprocessing, feature engineering, and model evaluation using Python and scikit-learn.",
    photo_url: "pfps/oumaima_project2.png",
  },
  ],
};

const islam: MemberData = {
  route: "islam",
  name: "islam",
  lastname: "Benali",
  photo_url: "pfps/islam.jpg",
  role: "Software Engineer and Motion Designer",
  city: "Algiers",
  country: "Algeria",
  bio: "Curious and detail-oriented software engineer merging logic and artistry — from RISC-V to motion graphics.",
  skills: [
    "RISC-V Assembly",
    "C/C++",
    "Qt",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
   
    "TypeScript",
    "React",
    "Flutter",
    "Python",
    "Machine Learning",
    "Data Science",
    "After Effects",
    "Motion Design",
    "Git",
    
   
    
    
    
  ],
  experiences: [
    {
      title: "AI and Data Science Student",
      start_date: "2024",
      end_date: "Present",
      type: "study",
    },
    {
      title: "Software Engineering Student",
      start_date: "9/2023",
      end_date: "Present",
      type: "study",
    },
    {
      title: "Motion Graphics Learner — Adobe After Effects",
      start_date: "6/2025",
      end_date: "Present",
      type: "study",
    },
    {
      title: "Independent Developer and Designer",
      start_date: "2024",
      end_date: "Present",
      type: "work",
    },
  ],
  projects:[ {
      title: "AI-Based Job Matching System",
      description:
        "Developed a many-to-many AI job matching system using greedy search optimization for improved candidate-job pairing.",
      photo_url: null,
    },]
};


export const members = [youcef , oumaima, islam, hind , malak];
