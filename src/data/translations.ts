

export const experienceTranslations = {
  pt: [
    {
      company: "Odd Data & Design Studio",
      period: "09/2025 - Atualmente",
      position: "Estágiaria de Desenvolvimento",
      type: "PJ - Remoto",
      description: "Atuo como desenvolvedora Full Stack na Odd Data & Design Studio, contribuindo para projetos de design e desenvolvimento de software.",
      images: undefined,
    },
    {
      company: "Liv Energy | Wattsfy | Sunrent",
      period: "05/2025 - 09/2025",
      position: "Estágiaria de Desenvolvimento",
      type: "Estágio",
      description: "Atuei como desenvolvedora Full Stack no Grupo Liv Energy, contribuindo para projetos de tecnologia no setor de energia renovável.",
      images: undefined,
    },
    {
      company: "SumUp",
      period: "05/2023 - 05/2024",
      position: "Desenvolvedora de Software Júnior",
      type: "CLT - Remoto",
      description: "Após concluir o bootcamp da Generation, fui uma das 11 pessoas da minha turma selecionadas para integrar o time de Engenharia e Tecnologia da SumUp. Durante meu tempo na empresa, desenvolvi habilidades no front-end e tive a oportunidade de aprender um pouco sobre back-end com Elixir. Participei de palestras, de dois hackathons internos e da HackWeek — uma imersão de uma semana realizada em 2023, na Bulgária.",
      images: [
        {
          src: "/assets/pictures/experience/Sumup-Apresentação.jpg",
          alt: "Apresentação na SumUp",
        },
        {
          src: "/assets/pictures/experience/Hackweek2023.jpg",
          alt: "HackWeek na Bulgária",
        },
        {
          src: "/assets/pictures/experience/HackweekProject.jpg",
          alt: "Projeto HackWeek 2023",
        },
        {
          src: "/assets/pictures/experience/SumupBank.jpg",
          alt: "Visita ao SumUp Bank",
        },
        {
          src: "/assets/pictures/experience/HeathCheck.jpg",
          alt: "Health Check da Squad",
        },
      ],
    },
    {
      company: "Generation Brasil",
      period: "01/2023 - 05/2023",
      position: "Estudante de Desenvolvimento Full Stack Java",
      type: "Bootcamp",
      description: "Participei de um bootcamp intensivo de 400 horas, focado em desenvolvimento Full Stack com Java e tecnologias web modernas. O programa incluiu projetos práticos, metodologias ágeis e preparação para o mercado de trabalho.",
      images: undefined,
    },
  ],
  en: [
    {
      company: "Odd Data & Design Studio",
      period: "09/2025 - Present",
      position: "Development Intern",
      type: "Contract - Remote",
      description: "I work as a Full Stack developer at Odd Data & Design Studio, contributing to design and software development projects.",
      images: undefined,
    },
    {
      company: "Liv Energy | Wattsfy | Sunrent",
      period: "05/2025 - 09/2025",
      position: "Development Intern",
      type: "Internship",
      description: "I worked as a Full Stack developer at Liv Energy Group, contributing to technology projects in the renewable energy sector.",
      images: undefined,
    },
    {
      company: "SumUp",
      period: "05/2023 - 05/2024",
      position: "Junior Software Developer",
      type: "Full-time - Remote",
      description: "After completing the Generation bootcamp, I was one of 11 people from my class selected to join SumUp's Engineering and Technology team. During my time at the company, I developed front-end skills and had the opportunity to learn some back-end with Elixir. I participated in lectures, two internal hackathons, and HackWeek — a week-long immersion held in 2023, in Bulgaria.",
      images: [
        {
          src: "/assets/pictures/experience/Sumup-Apresentação.jpg",
          alt: "Presentation at SumUp",
        },
        {
          src: "/assets/pictures/experience/Hackweek2023.jpg",
          alt: "HackWeek in Bulgaria",
        },
        {
          src: "/assets/pictures/experience/HackweekProject.jpg",
          alt: "HackWeek 2023 Project",
        },
        {
          src: "/assets/pictures/experience/SumupBank.jpg",
          alt: "Visit to SumUp Bank",
        },
        {
          src: "/assets/pictures/experience/HeathCheck.jpg",
          alt: "Squad Health Check",
        },
      ],
    },
    {
      company: "Generation Brasil",
      period: "01/2023 - 05/2023",
      position: "Full Stack Java Development Student",
      type: "Bootcamp",
      description: "I participated in an intensive 400-hour bootcamp focused on Full Stack development with Java and modern web technologies. The program included practical projects, agile methodologies, and job market preparation.",
      images: undefined,
    },
  ]
} as const;

export const aboutTranslations = {
  pt: {
    title: "Sobre Mim",
    description: "Sou uma pessoa curiosa, amo ler, aprender coisas novas e compartilhar experiências. Para além do trabalho, gosto de viajar, explorar novas culturas e me conectar com pessoas. Amo ir a shows, ouvir música e cozinhar. As vezes faço freelas para o "
  },
  en: {
    title: "About Me",
    description: "I am a curious person, I love reading, learning new things and sharing experiences. Beyond work, I like to travel, explore new cultures and connect with people. I love going to concerts, listening to music and cooking. Sometimes I do freelance work for "
  }
} as const;

export const projectTranslations = {
  pt: [
    {
      id: 1,
      slug: "backend-blog-pessoal",
      title: "Bookgram - Blog Pessoal - Generation Brasil",
      description: "Um projeto de blog pessoal desenvolvido como parte do bootcamp da Generation Brasil, utilizando Java e Spring Boot. O projeto foi desenvolvido como parte do Trabalho de Conclusão do curso.",
    },
    {
      id: 2,
      slug: "frontend-bookgram",
      title: "Bookgram - Blog Pessoal - Generation Brasil",
      description: "O projeto Bookgram é uma aplicação de blog pessoal, onde os usuários podem criar e compartilhar postagens sobre livros. Foi desenvolvido como parte do projeto final do bootcamp da Generation Brasil.",
    },
    {
      id: 3,
      slug: "front-end-generation",
      title: "Estudos Front-End - Generation Brasil",
      description: "Um projeto de portfólio desenvolvido durante o bootcamp da Generation Brasil, utilizando HTML, CSS e JavaScript. O projeto foi desenvolvido como parte do Trabalho de Conclusão do curso.",
    },
    {
      id: 4,
      slug: "mario-jump-game",
      title: "Jogo com JavaScript - Mario Jump",
      description: "Um divertido jogo inspirado no Mario em que o personagem pula, mostrando o desenvolvimento básico de jogos com JavaScript.",
    },
    {
      id: 5,
      slug: "pagina-pessoal",
      title: "Pagina Pessoal - Facens",
      description: "Pagina Pessoal desenvolvida com HTML e CSS, desenvolvido para a aula de web design do curso de Engenharia da Computação na Facens.",
    },
    {
      id: 6,
      slug: "portfolio-basic",
      title: "Portfólio Básico",
      description: "Portfólio básico desenvolvido com HTML e CSS, para testar habilidades de front-end e o fluxo de deploy pelo GitHub.",
    },
    {
      id: 7,
      slug: "java-estudos",
      title: "Estudos em Java - Generation Brasil",
      description: "Lista de exercícios de Java desenvolvidos durante o Bootcamp da Generation Brasil.",
    },
    {
      id: 8,
      slug: "bootstrap",
      title: "Blog de Viagens - Facens",
      description: "Um projeto de blog de viagens criado com o Bootstrap, mostrando o design responsivo e as habilidades de front-end para o curso de Web Design da Facens.",
    },
    {
      id: 9,
      slug: "motel-api",
      title: "Motel API",
      description: "Uma API de back-end para um aplicativo de motel criado usando C# com ASP.NET Core.",
    },
  ],
  en: [
    {
      id: 1,
      slug: "backend-blog-pessoal",
      title: "Bookgram - Personal Blog - Generation Brasil",
      description: "A personal blog project developed as part of Generation Brasil's bootcamp, using Java and Spring Boot. The project was developed as part of the course's final project.",
    },
    {
      id: 2,
      slug: "frontend-bookgram",
      title: "Bookgram - Personal Blog - Generation Brasil",
      description: "The Bookgram project is a personal blog application where users can create and share posts about books. It was developed as part of the Generation Brasil bootcamp's final project.",
    },
    {
      id: 3,
      slug: "front-end-generation",
      title: "Front-End Studies - Generation Brasil",
      description: "A portfolio project developed during Generation Brasil's bootcamp, using HTML, CSS and JavaScript. The project was developed as part of the course's final project.",
    },
    {
      id: 4,
      slug: "mario-jump-game",
      title: "JavaScript Game - Mario Jump",
      description: "A fun Mario-inspired game where the character jumps, showcasing basic game development with JavaScript.",
    },
    {
      id: 5,
      slug: "pagina-pessoal",
      title: "Personal Page - Facens",
      description: "Personal page developed with HTML and CSS, created for the web design class of the Computer Engineering course at Facens.",
    },
    {
      id: 6,
      slug: "portfolio-basic",
      title: "Basic Portfolio",
      description: "Basic portfolio developed with HTML and CSS, to test front-end skills and GitHub deployment workflow.",
    },
    {
      id: 7,
      slug: "java-estudos",
      title: "Java Studies - Generation Brasil",
      description: "List of Java exercises developed during Generation Brasil's Bootcamp.",
    },
    {
      id: 8,
      slug: "bootstrap",
      title: "Travel Blog - Facens",
      description: "A travel blog project created with Bootstrap, showcasing responsive design and front-end skills for Facens' Web Design course.",
    },
    {
      id: 9,
      slug: "motel-api",
      title: "Motel API",
      description: "A backend API for a motel application created using C# with ASP.NET Core.",
    },
  ]
} as const;