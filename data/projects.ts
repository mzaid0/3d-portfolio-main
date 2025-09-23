import { Code, Globe, Zap, Target, BookOpen } from "lucide-react"
import type { Project } from "@/types"

export const projectsData: Project[] = [
  {
    id: "neural-dashboard",
    title: "Neural Network Dashboard",
    category: "AI & Analytics",
    description: "AI-powered analytics platform with real-time data visualization and machine learning insights",
    year: "2024",
    status: "Live",
    modelType: "dashboard",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Next.js", "TensorFlow", "D3.js", "WebGL"],
    gradient: "from-cyan-400 to-slate-600",
    features: [
      "Real-time data processing",
      "Machine learning predictions",
      "Interactive visualizations",
      "Custom dashboard builder",
      "API integrations",
      "Advanced analytics",
    ],
    challenge:
      "The client needed a comprehensive analytics platform that could process massive datasets in real-time while providing intuitive visualizations for non-technical users.",
    solution:
      "Developed a scalable dashboard using React, D3.js, and TensorFlow.js with WebGL acceleration for smooth 60fps visualizations and real-time ML inference.",
    impact:
      "Reduced data analysis time by 75% and increased user engagement by 300%. The platform now processes over 1M data points per second.",
    stats: {
      views: "125K",
      likes: "2.4K",
      downloads: "890",
      rating: "4.9",
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
        title: "Quantum UI Framework",
        description: "Revolutionary component library with quantum-inspired animations",
        category: "UI Framework",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "quantum-framework",
    title: "Quantum UI Framework",
    category: "UI Framework",
    description: "Revolutionary component library with quantum-inspired animations and micro-interactions",
    year: "2024",
    status: "Open Source",
    modelType: "framework",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["React", "Framer Motion", "WebGL", "GSAP"],
    gradient: "from-slate-400 to-gray-600",
    features: ["Quantum-inspired animations", "Micro-interactions", "Accessibility-first design", "TypeScript support"],
    challenge:
      "Existing UI frameworks lacked sophisticated animations and micro-interactions needed for modern applications while maintaining performance.",
    solution:
      "Created a component library using advanced CSS animations, Web Animations API, and optimized rendering techniques for 60fps performance.",
    impact:
      "Adopted by 500+ developers, reduced development time by 60%, and improved user satisfaction scores by 40% across implementing applications.",
    stats: {
      views: "89K",
      likes: "3.2K",
      downloads: "15K",
      rating: "4.8",
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
        title: "Neural Network Dashboard",
        description: "AI-powered analytics platform with real-time visualization",
        category: "AI & Analytics",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "holographic-commerce",
    title: "Holographic Commerce",
    category: "E-commerce",
    description: "Immersive e-commerce experience with AR product visualization and spatial computing",
    year: "2024",
    status: "Beta",
    modelType: "commerce",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Three.js", "WebXR", "Stripe", "Node.js"],
    gradient: "from-gray-400 to-slate-700",
    features: [
      "AR product visualization",
      "Spatial computing interface",
      "Voice commerce integration",
      "AI-powered recommendations",
    ],
    challenge:
      "Traditional e-commerce lacks the tactile experience of physical shopping, leading to high return rates and low customer confidence.",
    solution:
      "Developed an AR-powered shopping platform using WebXR, Three.js, and spatial computing to create immersive product experiences.",
    impact:
      "Reduced return rates by 45%, increased conversion rates by 80%, and achieved 95% customer satisfaction with the AR experience.",
    stats: {
      views: "156K",
      likes: "4.1K",
      downloads: "2.3K",
      rating: "4.9",
    },
    technologies: [
      {
        name: "AR/VR",
        icon: Globe,
        items: [
          { name: "WebXR", description: "Web-based AR/VR experiences" },
          { name: "Three.js", description: "3D graphics library" },
        ],
      },
    ],
    timeline: [
      {
        title: "Market Research",
        duration: "2 weeks",
        icon: Target,
        description: "Analyzed e-commerce trends and AR technology adoption.",
        deliverables: ["Market analysis", "User research"],
      },
    ],
    gallery: [
      {
        title: "AR Product View",
        description: "Immersive 3D product visualization in augmented reality",
        url: "/placeholder.svg?height=400&width=600",
      },
    ],
    results: {
      metrics: [
        { value: "45%", label: "Return Rate", description: "Reduction in product returns" },
        { value: "80%", label: "Conversion", description: "Increase in conversion rate" },
      ],
      testimonials: [
        {
          content: "The AR experience is incredible! I can see exactly how products look in my space before buying.",
          author: "Jessica Martinez",
          role: "Early Beta User",
          rating: 5,
        },
      ],
    },
    relatedProjects: [
      {
        title: "AR Interior Designer",
        description: "Virtual interior design with AR furniture placement",
        category: "AR/VR",
        image: "/placeholder.svg?height=200&width=300",
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
  | "features"
  | "challenge"
  | "solution"
  | "impact"
  | "stats"
>[] = [
  {
    id: "neural-dashboard",
    title: "Neural Network Dashboard",
    category: "AI & Analytics",
    description: "AI-powered analytics platform with real-time data visualization",
    year: "2024",
    status: "Live",
    modelType: "dashboard",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Next.js", "TensorFlow", "D3.js"],
    gradient: "from-cyan-400 to-slate-600",
  },
  {
    id: "quantum-framework",
    title: "Quantum UI Framework",
    category: "UI Framework",
    description: "Revolutionary component library with quantum-inspired animations",
    year: "2024",
    status: "Open Source",
    modelType: "framework",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["React", "Framer Motion", "WebGL"],
    gradient: "from-slate-400 to-gray-600",
  },
  {
    id: "holographic-commerce",
    title: "Holographic Commerce",
    category: "E-commerce",
    description: "Immersive e-commerce experience with AR visualization",
    year: "2024",
    status: "Beta",
    modelType: "commerce",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Three.js", "WebXR", "Stripe"],
    gradient: "from-gray-400 to-slate-700",
  },
]

export const projects: Project[] = [
  {
    id: "neural-dashboard",
    title: "Neural Network Dashboard",
    description: "AI-powered analytics platform with real-time data visualization",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Next.js", "TensorFlow", "D3.js"],
    gradient: "from-cyan-400 to-slate-600",
  },
  {
    id: "quantum-framework",
    title: "Quantum UI Framework",
    description: "Revolutionary component library with quantum-inspired animations",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["React", "Framer Motion", "WebGL"],
    gradient: "from-slate-400 to-gray-600",
  },
  {
    id: "holographic-commerce",
    title: "Holographic Commerce",
    description: "Immersive e-commerce experience with AR visualization",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Three.js", "WebXR", "Stripe"],
    gradient: "from-gray-400 to-slate-700",
  },
]
