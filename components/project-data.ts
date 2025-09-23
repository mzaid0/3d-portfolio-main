import { Code, Palette, Database, Globe, Zap, Target, Users, TrendingUp, BookOpen } from "lucide-react"

export const projectsData = [
  {
    id: "neural-dashboard",
    title: "Neural Network Dashboard",
    category: "AI & Analytics",
    description: "AI-powered analytics platform with real-time data visualization and machine learning insights",
    year: "2024",
    status: "Live",
    modelType: "dashboard",
    image: "/placeholder.svg?height=400&width=600",
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
          { name: "Framer Motion", description: "Production-ready motion library" },
        ],
      },
      {
        name: "Visualization",
        icon: Palette,
        items: [
          { name: "D3.js", description: "Data-driven documents" },
          { name: "Three.js", description: "3D graphics library" },
          { name: "WebGL", description: "Hardware-accelerated graphics" },
          { name: "Chart.js", description: "Simple yet flexible charting" },
        ],
      },
      {
        name: "AI/ML",
        icon: Zap,
        items: [
          { name: "TensorFlow.js", description: "Machine learning in the browser" },
          { name: "Python", description: "Backend ML processing" },
          { name: "Pandas", description: "Data manipulation and analysis" },
          { name: "NumPy", description: "Numerical computing" },
        ],
      },
      {
        name: "Backend",
        icon: Database,
        items: [
          { name: "Node.js", description: "JavaScript runtime" },
          { name: "Express.js", description: "Web application framework" },
          { name: "PostgreSQL", description: "Advanced open source database" },
          { name: "Redis", description: "In-memory data structure store" },
          { name: "WebSockets", description: "Real-time communication" },
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
        title: "Design & Prototyping",
        duration: "3 weeks",
        icon: Palette,
        description: "Created wireframes, mockups, and interactive prototypes for user testing.",
        deliverables: ["Wireframes", "UI mockups", "Interactive prototype"],
      },
      {
        title: "Development",
        duration: "8 weeks",
        icon: Code,
        description: "Built the frontend dashboard, backend APIs, and ML processing pipeline.",
        deliverables: ["Frontend app", "Backend APIs", "ML pipeline"],
      },
      {
        title: "Testing & Optimization",
        duration: "2 weeks",
        icon: Target,
        description: "Performed comprehensive testing, performance optimization, and bug fixes.",
        deliverables: ["Test suite", "Performance report", "Bug fixes"],
      },
      {
        title: "Deployment & Launch",
        duration: "1 week",
        icon: TrendingUp,
        description: "Deployed to production, monitored performance, and gathered user feedback.",
        deliverables: ["Production deployment", "Monitoring setup", "User training"],
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
      {
        title: "ML Predictions",
        description: "Machine learning predictions and model performance",
        url: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Custom Builder",
        description: "Drag-and-drop dashboard builder interface",
        url: "/placeholder.svg?height=400&width=600",
      },
    ],
    results: {
      metrics: [
        {
          value: "75%",
          label: "Time Saved",
          description: "Reduction in data analysis time",
        },
        {
          value: "300%",
          label: "Engagement",
          description: "Increase in user engagement",
        },
        {
          value: "1M+",
          label: "Data Points",
          description: "Processed per second",
        },
        {
          value: "99.9%",
          label: "Uptime",
          description: "System reliability",
        },
      ],
      testimonials: [
        {
          content:
            "This dashboard transformed how we analyze data. The real-time insights have been game-changing for our business decisions.",
          author: "Sarah Johnson",
          role: "Data Science Director",
          rating: 5,
        },
        {
          content:
            "The ML predictions are incredibly accurate and the interface is so intuitive that our entire team adopted it immediately.",
          author: "Michael Chen",
          role: "VP of Analytics",
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
      {
        title: "Holographic Commerce",
        description: "Immersive e-commerce experience with AR visualization",
        category: "E-commerce",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "AI Content Generator",
        description: "GPT-powered content creation platform",
        category: "AI Tools",
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
    features: [
      "Quantum-inspired animations",
      "Micro-interactions",
      "Accessibility-first design",
      "TypeScript support",
      "Tree-shaking optimization",
      "Dark mode support",
    ],
    challenge:
      "Existing UI frameworks lacked the sophisticated animations and micro-interactions needed for modern applications while maintaining performance.",
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
          { name: "Rollup", description: "Module bundler" },
          { name: "Storybook", description: "Component documentation" },
        ],
      },
      {
        name: "Animation",
        icon: Zap,
        items: [
          { name: "Framer Motion", description: "Declarative animations" },
          { name: "Web Animations API", description: "Native browser animations" },
          { name: "CSS Houdini", description: "Advanced CSS features" },
          { name: "GSAP", description: "High-performance animations" },
        ],
      },
      {
        name: "Styling",
        icon: Palette,
        items: [
          { name: "Styled Components", description: "CSS-in-JS" },
          { name: "CSS Variables", description: "Dynamic theming" },
          { name: "PostCSS", description: "CSS processing" },
          { name: "Autoprefixer", description: "Browser compatibility" },
        ],
      },
      {
        name: "Testing",
        icon: Target,
        items: [
          { name: "Jest", description: "Unit testing" },
          { name: "React Testing Library", description: "Component testing" },
          { name: "Chromatic", description: "Visual testing" },
          { name: "Playwright", description: "E2E testing" },
        ],
      },
    ],
    timeline: [
      {
        title: "Concept & Research",
        duration: "3 weeks",
        icon: BookOpen,
        description: "Researched quantum physics principles and their application to UI design.",
        deliverables: ["Concept document", "Animation principles", "Design system"],
      },
      {
        title: "Core Components",
        duration: "6 weeks",
        icon: Code,
        description: "Built foundational components with quantum-inspired animations.",
        deliverables: ["Button components", "Form elements", "Layout components"],
      },
      {
        title: "Advanced Features",
        duration: "4 weeks",
        icon: Zap,
        description: "Implemented complex animations and micro-interactions.",
        deliverables: ["Animation library", "Interaction patterns", "Performance optimizations"],
      },
      {
        title: "Documentation",
        duration: "2 weeks",
        icon: BookOpen,
        description: "Created comprehensive documentation and examples.",
        deliverables: ["API docs", "Usage examples", "Migration guide"],
      },
      {
        title: "Community Launch",
        duration: "1 week",
        icon: Users,
        description: "Open-sourced the framework and built community.",
        deliverables: ["GitHub repository", "NPM package", "Community guidelines"],
      },
    ],
    gallery: [
      {
        title: "Component Library",
        description: "Complete set of quantum-inspired UI components",
        url: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Animation Showcase",
        description: "Demonstration of quantum animation principles",
        url: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Documentation Site",
        description: "Interactive documentation with live examples",
        url: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Storybook",
        description: "Component development environment",
        url: "/placeholder.svg?height=400&width=600",
      },
    ],
    results: {
      metrics: [
        {
          value: "500+",
          label: "Developers",
          description: "Using the framework",
        },
        {
          value: "60%",
          label: "Time Saved",
          description: "In development",
        },
        {
          value: "40%",
          label: "Satisfaction",
          description: "User experience improvement",
        },
        {
          value: "15K",
          label: "Downloads",
          description: "NPM package downloads",
        },
      ],
      testimonials: [
        {
          content:
            "The quantum animations are absolutely stunning. Our users love the micro-interactions and the framework is so easy to use.",
          author: "Alex Rivera",
          role: "Frontend Lead",
          rating: 5,
        },
        {
          content:
            "This framework saved us months of development time. The TypeScript support and documentation are excellent.",
          author: "Emma Thompson",
          role: "Senior Developer",
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
      {
        title: "Design System Pro",
        description: "Enterprise design system with advanced tooling",
        category: "Design System",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Animation Studio",
        description: "Visual animation editor for web developers",
        category: "Developer Tools",
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
    features: [
      "AR product visualization",
      "Spatial computing interface",
      "Voice commerce integration",
      "AI-powered recommendations",
      "Gesture-based navigation",
      "Cross-platform compatibility",
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
          { name: "A-Frame", description: "Web VR framework" },
          { name: "ARCore", description: "Google's AR platform" },
          { name: "ARKit", description: "Apple's AR framework" },
        ],
      },
      {
        name: "Frontend",
        icon: Code,
        items: [
          { name: "React 18", description: "UI framework" },
          { name: "Next.js 14", description: "Full-stack framework" },
          { name: "WebGL", description: "3D rendering" },
          { name: "WebAssembly", description: "High-performance computing" },
        ],
      },
      {
        name: "AI/ML",
        icon: Zap,
        items: [
          { name: "TensorFlow.js", description: "Machine learning" },
          { name: "Computer Vision", description: "Object recognition" },
          { name: "NLP", description: "Voice processing" },
          { name: "Recommendation Engine", description: "Personalized suggestions" },
        ],
      },
      {
        name: "Backend",
        icon: Database,
        items: [
          { name: "Node.js", description: "Server runtime" },
          { name: "GraphQL", description: "API query language" },
          { name: "MongoDB", description: "Document database" },
          { name: "Stripe", description: "Payment processing" },
          { name: "AWS", description: "Cloud infrastructure" },
        ],
      },
    ],
    timeline: [
      {
        title: "Market Research",
        duration: "2 weeks",
        icon: Target,
        description: "Analyzed e-commerce trends and AR technology adoption.",
        deliverables: ["Market analysis", "User research", "Technical feasibility"],
      },
      {
        title: "AR Prototyping",
        duration: "4 weeks",
        icon: Globe,
        description: "Built AR prototypes and tested spatial computing concepts.",
        deliverables: ["AR prototypes", "Spatial UI concepts", "User testing"],
      },
      {
        title: "Platform Development",
        duration: "10 weeks",
        icon: Code,
        description: "Developed the full e-commerce platform with AR integration.",
        deliverables: ["E-commerce platform", "AR integration", "Payment system"],
      },
      {
        title: "AI Integration",
        duration: "3 weeks",
        icon: Zap,
        description: "Implemented AI recommendations and voice commerce features.",
        deliverables: ["Recommendation engine", "Voice interface", "AI analytics"],
      },
      {
        title: "Beta Launch",
        duration: "2 weeks",
        icon: TrendingUp,
        description: "Launched beta version and gathered user feedback.",
        deliverables: ["Beta platform", "User feedback", "Performance metrics"],
      },
    ],
    gallery: [
      {
        title: "AR Product View",
        description: "Immersive 3D product visualization in augmented reality",
        url: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Spatial Interface",
        description: "Gesture-based navigation and spatial computing UI",
        url: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Voice Commerce",
        description: "AI-powered voice shopping assistant",
        url: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Mobile AR",
        description: "Cross-platform AR experience on mobile devices",
        url: "/placeholder.svg?height=400&width=600",
      },
    ],
    results: {
      metrics: [
        {
          value: "45%",
          label: "Return Rate",
          description: "Reduction in product returns",
        },
        {
          value: "80%",
          label: "Conversion",
          description: "Increase in conversion rate",
        },
        {
          value: "95%",
          label: "Satisfaction",
          description: "Customer satisfaction score",
        },
        {
          value: "3.2x",
          label: "Engagement",
          description: "Time spent on platform",
        },
      ],
      testimonials: [
        {
          content:
            "The AR experience is incredible! I can see exactly how products look in my space before buying. It's the future of shopping.",
          author: "Jessica Martinez",
          role: "Early Beta User",
          rating: 5,
        },
        {
          content:
            "Our return rates dropped significantly after implementing this AR solution. Customers are much more confident in their purchases.",
          author: "David Kim",
          role: "E-commerce Director",
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
      {
        title: "Virtual Showroom",
        description: "3D virtual showroom for automotive industry",
        category: "Automotive",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Spatial Analytics",
        description: "Analytics platform for spatial computing applications",
        category: "Analytics",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
]

export { projectsData as default }

// Add this at the end of the file after the main export:
export const fallbackProjects = [
  {
    id: "neural-dashboard",
    title: "Neural Network Dashboard",
    description: "AI-powered analytics platform with real-time data visualization",
    tech: ["Next.js", "TensorFlow", "D3.js"],
    gradient: "from-cyan-400 to-slate-600",
  },
  {
    id: "quantum-framework",
    title: "Quantum UI Framework",
    description: "Revolutionary component library with quantum-inspired animations",
    tech: ["React", "Framer Motion", "WebGL"],
    gradient: "from-slate-400 to-gray-600",
  },
  {
    id: "holographic-commerce",
    title: "Holographic Commerce",
    description: "Immersive e-commerce experience with AR visualization",
    tech: ["Three.js", "WebXR", "Stripe"],
    gradient: "from-gray-400 to-slate-700",
  },
]
