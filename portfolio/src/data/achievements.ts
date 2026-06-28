export interface Achievement {
  event: string;
  result: string;
  organizer: string;
  pressUrl?: string;
}

export const achievements: Achievement[] = [
  { event: "AI Hackathon 2026", result: "Champion", organizer: "TechCorp", pressUrl: "https://techcorp.com/blog/ai-hackathon-2026" },
  { event: "Global Dev Jam", result: "Finalist", organizer: "DevCommunity" },
  { event: "Startup Weekend", result: "Champion", organizer: "Techstars" },
  { event: "CodeFest 2025", result: "1st Place", organizer: "CodeFest Org" },
  { event: "HackMIT", result: "Best AI Project", organizer: "MIT" },
];

export const founded = [
  { name: "DevHack Collective", url: "https://devhack.io" },
  { name: "AI Open Source Guild", url: "https://aios guild.dev" },
];