import { Code, Globe, Zap, Target, BookOpen } from "lucide-react"
import type { Project } from "@/types"

export const projectsData: Project[] = [
  {
    id: "daily-deli",
    title: "Daily Deli",
    category: "Mobile App",
    description: "Food delivery mobile application with real-time tracking and seamless user experience",
    year: "2024",
    status: "Live",
    modelType: "mobile",
    image: "/images/app1_1.png",
    tech: ["Flutter", "XCode", "Firebase", "MySQL"],
    gradient: "from-orange-400 to-red-600",
    liveLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.tossdown.dailydeli&hl=en",
      appStore: "https://apps.apple.com/pk/app/daily-deli/id1493275785"
    },
    features: [
      "Streamlined checkout process",
      "Real-time order tracking",
      "Order history management",
      "User-friendly interface",
      "Secure payment gateway",
      "Push notifications",
    ],
    challenge:
      "To ensure a smooth and reliable checkout process while managing large volumes of orders, as complex user flows and limited order tracking often lead to reduced customer satisfaction.",
    solution:
      "Daily Deli provides a Flutter-based food-ordering app that streamlines the checkout process and enhances order history management. The app ensures a smoother and more satisfying customer experience.",
    impact:
      "Achieved over 100,000 installations, with the optimized checkout process and improved order history contributing to faster transactions and greater customer satisfaction in the food-ordering experience.",
    stats: {
      views: "100K",
      likes: "2.4K",
      downloads: "890",
      rating: "4.0",
    },
    technologies: [
      {
        name: "Frontend",
        icon: Code,
        items: [
          { name: "React 18", description: "Latest React with concurrent features" },
          { name: "Next.js 14", description: "Full-stack React framework" },
          { name: "TypeScript", description: "Type-safe JavaScript" },
          { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        ],
      },
      {
        name: "AI/ML",
        icon: Zap,
        items: [
          { name: "TensorFlow.js", description: "Machine learning in the browser" },
          { name: "Python", description: "Backend ML processing" },
          { name: "Pandas", description: "Data manipulation and analysis" },
        ],
      },
    ],
    timeline: [
      {
        title: "Research & Planning",
        duration: "2 weeks",
        icon: BookOpen,
        description: "Conducted user research, analyzed requirements, and created technical specifications.",
        deliverables: ["User personas", "Technical specs", "Architecture design"],
      },
      {
        title: "Development",
        duration: "8 weeks",
        icon: Code,
        description: "Built the frontend dashboard, backend APIs, and ML processing pipeline.",
        deliverables: ["Frontend app", "Backend APIs", "ML pipeline"],
      },
    ],
    gallery: [
      {
        title: "Main Dashboard",
        description: "Overview of key metrics and real-time data streams",
        url: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Analytics View",
        description: "Detailed analytics with interactive charts and filters",
        url: "/placeholder.svg?height=400&width=600",
      },
    ],
    results: {
      metrics: [
        { value: "75%", label: "Time Saved", description: "Reduction in data analysis time" },
        { value: "300%", label: "Engagement", description: "Increase in user engagement" },
      ],
      testimonials: [
        {
          content:
            "This dashboard transformed how we analyze data. The real-time insights have been game-changing for our business decisions.",
          author: "Sarah Johnson",
          role: "Data Science Director",
          rating: 5,
        },
      ],
    },
    relatedProjects: [
      {
        title: "Iqbal Foods",
        description: "Halal meat and fresh produce delivery app",
        category: "Mobile App",
        image: "/images/app2_1.png",
      },
    ],
  },
  {
    id: "iqbal-foods",
    title: "Iqbal Foods",
    category: "Mobile App",
    description: "Halal meat and fresh produce delivery app with integrated payment gateway",
    year: "2024",
    status: "Live",
    modelType: "mobile",
    image: "/images/app2_1.png",
    tech: ["Flutter", "XCode", "MySQL", "Firebase", "Stripe", "Streams"],
    gradient: "from-green-400 to-emerald-600",
    liveLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.tossdown.iqbalfoods",
      appStore: "https://apps.apple.com/pk/app/daily-deli/id1493275785"
    },
    features: ["Halal meat ordering", "Fresh produce delivery", "Stripe payment integration", "Real-time order tracking", "Daily essentials shopping", "Canadian market focus"],
    challenge:
      "A major challenge for many customers is finding reliable, affordable, and convenient access to Halal meat, fresh produce, and daily essentials, as traditional shopping options are often limited in availability, time, and cost-efficiency.",
    solution:
      "Iqbal Foods provides a mobile app built with Flutter that enables customers to conveniently and affordably purchase Halal meat, fresh produce, and daily essentials with integrated Stripe payment gateway.",
    impact:
      "Iqbal Foods has achieved over 10,000 installations across Canada, reflecting strong customer adoption and growing demand for convenient access to Halal meat, fresh produce, and daily essentials.",
    stats: {
      views: "10K",
      likes: "1.8K",
      downloads: "10K",
      rating: "4.9",
    },
    technologies: [
      {
        name: "Core",
        icon: Code,
        items: [
          { name: "React 18", description: "Component architecture" },
          { name: "TypeScript", description: "Type safety" },
        ],
      },
    ],
    timeline: [
      {
        title: "Concept & Research",
        duration: "3 weeks",
        icon: BookOpen,
        description: "Researched quantum physics principles and their application to UI design.",
        deliverables: ["Concept document", "Animation principles"],
      },
    ],
    gallery: [
      {
        title: "Component Library",
        description: "Complete set of quantum-inspired UI components",
        url: "/placeholder.svg?height=400&width=600",
      },
    ],
    results: {
      metrics: [
        { value: "500+", label: "Developers", description: "Using the framework" },
        { value: "60%", label: "Time Saved", description: "In development" },
      ],
      testimonials: [
        {
          content:
            "The quantum animations are absolutely stunning. Our users love the micro-interactions and the framework is so easy to use.",
          author: "Alex Rivera",
          role: "Frontend Lead",
          rating: 5,
        },
      ],
    },
    relatedProjects: [
      {
        title: "Daily Deli",
        description: "Food delivery mobile application with real-time tracking",
        category: "Mobile App",
        image: "/images/app1_1.png",
      },
    ],
  },
  {
    id: "snappoll",
    title: "SnapPoll",
    category: "Research & Survey",
    description: "Survey and research application for Android, iOS, and Web used in academic research projects",
    year: "2024",
    status: "Live",
    modelType: "research",
    image: "/images/app3_1.jpg",
    tech: ["Flutter", "Firebase", "Supabase"],
    gradient: "from-blue-400 to-purple-600",
    githubLink: "https://github.com/Zeeshan6948/Snappoll-a-Survey-System",
    features: [
      "Survey creation and management",
      "Multi-platform support (Android, iOS, Web)",
      "Academic research integration",
      "Real-time data collection",
      "User-friendly interface",
      "Participant engagement tools",
    ],
    challenge:
      "A persistent challenge in academic research is the timely collection and management of high-quality survey data, as existing tools often lack accessibility, integration, and participant engagement.",
    solution:
      "SnapPoll is a survey and research application developed for Android, iOS, and Web. It enables researchers and participants to create, share, and respond to surveys seamlessly. The app is currently used in Bamberg University research projects.",
    impact:
      "SnapPoll enhances the efficiency and reliability of academic research by streamlining survey creation, distribution, and data collection. Easy to use and simple to understand.",
    stats: {
      views: "28K",
      likes: "1.2K",
      downloads: "3.5K",
      rating: "4.6",
    },
    technologies: [
      {
        name: "Mobile Development",
        icon: Code,
        items: [
          { name: "Flutter", description: "Cross-platform mobile framework" },
          { name: "Firebase", description: "Backend-as-a-service platform" },
          { name: "Supabase", description: "Open source Firebase alternative" },
        ],
      },
    ],
    timeline: [
      {
        title: "Research & Planning",
        duration: "3 weeks",
        icon: Target,
        description: "Analyzed academic research needs and survey tool requirements at Bamberg University.",
        deliverables: ["Requirements analysis", "User research", "Technical specifications"],
      },
    ],
    gallery: [
      {
        title: "Survey Dashboard",
        description: "Comprehensive survey creation and management interface",
        url: "/images/app3_1.jpg",
      },
    ],
    results: {
      metrics: [
        { value: "60%", label: "Time Saved", description: "Reduction in survey creation time" },
        { value: "85%", label: "Response Rate", description: "Average survey completion rate" },
      ],
      testimonials: [
        {
          content: "SnapPoll has revolutionized our research process at Bamberg University. The interface is intuitive and data collection is seamless.",
          author: "Dr. Michael Weber",
          role: "Research Director",
          rating: 5,
        },
      ],
    },
    relatedProjects: [
      {
        title: "Iqbal Foods",
        description: "Halal meat and fresh produce delivery app",
        category: "Mobile App",
        image: "/images/app2_1.png",
      },
    ],
  },
]

export const fallbackProjects: Omit<
  Project,
  | "technologies"
  | "timeline"
  | "gallery"
  | "results"
  | "relatedProjects"
>[] = [
  {
    id: "daily-deli",
    title: "Daily Deli",
    category: "Mobile App",
    description: "Food delivery mobile application with real-time tracking",
    image: "/images/app1_1.png",
    tech: ["Flutter", "XCode", "Firebase", "MySQL"],
    gradient: "from-orange-400 to-red-600",
  },
  {
    id: "iqbal-foods",
    title: "Iqbal Foods",
    category: "Mobile App",
    description: "Halal meat and fresh produce delivery app",
    image: "/images/app2_1.png",
    tech: ["Flutter", "XCode", "MySQL", "Firebase", "Stripe"],
    gradient: "from-green-400 to-emerald-600",
  },
  {
    id: "snappoll",
    title: "SnapPoll",
    category: "Research & Survey",
    description: "Survey and research application for academic projects",
    image: "/images/app3_1.jpg",
    tech: ["Flutter", "Firebase", "Supabase"],
    gradient: "from-blue-400 to-purple-600",
  },
]

export const projects: Project[] = [
  {
    id: "daily-deli",
    title: "Daily Deli",
    description: "Food delivery mobile application with real-time tracking",
    image: "/images/app1_1.png",
    tech: ["Flutter", "XCode", "Firebase", "MySQL"],
    gradient: "from-orange-400 to-red-600",
    category: "Mobile App",
    stats: {
      views: "100K",
      likes: "2.4K",
      downloads: "890",
      rating: "4.0",
    },
  },
  {
    id: "iqbal-foods",
    title: "Iqbal Foods",
    description: "Halal meat and fresh produce delivery app",
    image: "/images/app2_1.png",
    tech: ["Flutter", "XCode", "MySQL", "Firebase", "Stripe"],
    gradient: "from-green-400 to-emerald-600",
    category: "Mobile App",
    stats: {
      views: "10K",
      likes: "1.8K",
      downloads: "10K",
      rating: "4.9",
    },
  },
  {
    id: "snappoll",
    title: "SnapPoll",
    description: "Survey and research application for academic projects",
    image: "/images/app3_1.jpg",
    tech: ["Flutter", "Firebase", "Supabase"],
    gradient: "from-blue-400 to-purple-600",
    category: "Research & Survey",
  },
  {
    id: "rishta-nagar",
    title: "Rishta Nagar",
    description: "Matrimonial mobile app for Pakistan",
    image: "/images/app4_1.jpg",
    tech: ["Flutter", "XCode", "GetX", "Firebase", "MySQL"],
    gradient: "from-pink-400 to-rose-600",
    category: "Mobile App",
  },
  {
    id: "security-guard-platform",
    title: "Security Guard Platform",
    description: "Dual platform connecting security guards with contractors",
    image: "/images/app5_1.png", 
    tech: ["Flutter", "XCode", "NodeJS", "NextJS"],
    gradient: "from-indigo-400 to-blue-600",
    category: "Mobile App",
  },
]
