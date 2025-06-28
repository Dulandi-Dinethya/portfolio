
import { Project, SkillCategory, ContactInfo, PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Dulandi Dinethya Muniweera",
  title: "IT Undergraduate & Full Stack Developer",
  bio: "",
  profileImage: "src/uploads/mee.jpg"
};

export const contactInfo: ContactInfo = {
  email: "dinethya19@gmail.com",
  phone: "+94 71 602 6605",
  location: "No.233/L Batagama North ja ela",
  github: "https://github.com/Dulandi-Dinethya",
  linkedin: "https://www.linkedin.com/in/dulandi-dinethya-muniweera-122700269/"
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "HTML/CSS", "JavaScript", "C", "C++"]
  },
  {
    title: "Frameworks & Technologies",
    skills: ["Spring Boot", "React", "MERN Stack", "Node.js", "Express.js", "Tailwind CSS", "Redux", "Firebase", "Bootstrap", "REST APIs"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "MySQL Workbench", "SQLite"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Android Studio", "Kotlin", "XML", "Room ORM", "UML Design", "TCP/IP", "Network Configuration", "Windows", "Linux"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Air Ticket Reservation System",
    description: "Designed and developed a database management system in C++ to efficiently manage air ticket records and customer information. Built database schemas and performed CRUD operations using MySQL with optimized system performance.",
    image: "src/uploads/AirTicketReservation.png",
    technologies: ["C++", "MySQL", "Database Design", "CRUD Operations"],
    githubUrl: "https://github.com/Dulandi-Dinethya",
    liveUrl: "#"
    
  },
  {
    id: 2,
    title: "Airport Service Management System     Duty-Free Shopping & Pre-Order System ",
    description: "Built a full-stack application using React (TypeScript), Redux, Tailwind CSS, Node.js, and MongoDB to manage flight and ground services at airports. Features full CRUD operations, authentication, and responsive UI with optimized performance.",
    image: "src/uploads/DutyFree.png",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Dulandi-Dinethya",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Dress Me Up - Personal Wardrobe Assistant",
    description: "Android Mobile App developed with Kotlin and XML. A virtual wardrobe assistant app to manage clothing items and suggest outfits based on type, color, and season with intuitive UI and smart recommendations using rule-based logic.",
    image: "src/uploads/dressmeUp.png",
    technologies: ["Kotlin", "XML", "Android Studio", "Room ORM", "SQLite"],
    githubUrl: "https://github.com/Dulandi-Dinethya",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Smart Spender - Personal Finance Tracker",
    description: "Android Mobile App built with Kotlin, XML, Android Studio, Room ORM, and SQLite. Enables users to track income and expenses with persistent storage, featuring a clean, responsive UI with full CRUD operations for financial entries.",
    image: "src/uploads/smartSpender.png",
    technologies: ["Kotlin", "XML", "Android Studio", "Room ORM", "SQLite"],
    githubUrl: "https://github.com/Dulandi-Dinethya",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Event Management and Booking Web Application",
    description: "Developed a full-stack photo-sharing platform using React (TypeScript), Tailwind CSS, and Spring Boot (Java) with full CRUD operations and authentication. Built secure REST APIs and managed user and photo data with a relational database.",
    image: "src/uploads/Event.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "Java", "REST APIs"],
    githubUrl: "https://github.com/Dulandi-Dinethya",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Online Music Store System",
    description: "Built an online music store using Java, implementing features for browsing, purchasing, and managing music collections. Created UML diagrams to model the system architecture, user flows, and data relationships with SQL database storage.",
    image: "src/uploads/OnlineStoreMusic.png",
    technologies: ["Java", "SQL", "UML Design", "System Architecture"],
    githubUrl: "https://github.com/Dulandi-Dinethya",
    liveUrl: "#"
  }
];
