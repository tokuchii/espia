export interface Project {
  name: string;
  description: string;
  icon: string;
  badges?: string[];
  appStoreUrl?: string;
  googlePlayUrl?: string;
  projectUrl?: string;
}

export const projects: Project[] = [
  {
    name: "AI Notes",
    description: "Smart note-taking app with AI-powered organization and search.",
    icon: "/projects/ai-notes.png",
    badges: ["#1 Productivity", "App Store Featured"],
    appStoreUrl: "https://apps.apple.com/app/ai-notes/id123456789",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.ainotes",
  },
  {
    name: "DevFlow",
    description: "Developer workflow automation tool for CI/CD pipelines.",
    icon: "/projects/devflow.png",
    badges: ["GitHub Trending"],
    projectUrl: "https://github.com/yourusername/devflow",
  },
  {
    name: "Finance Tracker",
    description: "Personal finance management with AI insights.",
    icon: "/projects/finance.png",
    badges: ["#1 Finance App", "App Store Hidden Gems"],
    appStoreUrl: "https://apps.apple.com/app/finance-tracker/id987654321",
  },
  {
    name: "CodeReview AI",
    description: "AI-powered code review assistant for pull requests.",
    icon: "/projects/codereview.png",
    projectUrl: "https://github.com/yourusername/codereview-ai",
  },
  {
    name: "Focus Timer",
    description: "Pomodoro timer with productivity analytics.",
    icon: "/projects/focus.png",
    badges: ["App Store Featured"],
    appStoreUrl: "https://apps.apple.com/app/focus-timer/id112233445",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.focustimer",
  },
];