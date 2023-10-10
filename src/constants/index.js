import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    navy,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    blender,
    codeigniter,
    java,
    laravel,
    xd,
    csharp,
    bootstrap,
    flask,
    python,
    blogsite,
    quizguard,
    trackers,
    hexColorJs,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Code Igniter",
      icon: codeigniter,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Bootstrap 5",
      icon: bootstrap,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "xd",
      icon: xd,
    },
    {
      name: "Blender",
      icon: blender,
    },
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Philippine Navy",
      icon: navy,
      iconBg: "#383E56",
      date: "Feb 2023 - May 2023",
      points: [
        "Maintaining software applications and other related technologies.",
        "Trouble shooting the hardware and software",
        "Providing technical support to the employee",
        "Data encoding"
      ],
    }
    // ,
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // }
    // ,
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Quiz Guard",
      description:
        "QuizGuard is an innovative online assessment monitoring system that employs the use of object detection algorithm.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap 5",
          color: "pink-text-gradient",
        },
      ],
      image: quizguard,
      source_code_link: "https://github.com/FCL00/QuizGuard",
    },
    {
      name: "Blog site",
      description:
        "A responsive web application, mobile-first, and easy-to-use blog platform that allows users post blogs and chat between users",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: blogsite,
      source_code_link: "https://github.com/FCL00/BLOG-SITE",
    },
    {
      name: "Trackers",
      description:
        "Trackers is a web-based platform that helps businesses track who enters and leaves their premises, keeping them safe and secure.",
      tags: [
        {
          name: "CodeIgniter",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap 5",
          color: "pink-text-gradient",
        },
      ],
      image: trackers,
      source_code_link: "https://github.com/",
    },

    {
      name: "HexColorJs",
      description:
        "Simple Vanilla Javascript that can generate Hex color values and checks the luminance of the color",
      tags: [
        {
          name: "Javacript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: hexColorJs,
      source_code_link: "https://hex-color-js.vercel.app",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };