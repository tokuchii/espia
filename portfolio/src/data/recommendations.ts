export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "One of the most talented engineers I've had the pleasure of working with. Their ability to ship high-quality products under tight deadlines is remarkable.",
    name: "Jane Smith",
    title: "CTO at TechCorp",
    initials: "JS",
  },
  {
    quote: "They consistently delivered exceptional work and brought innovative solutions to complex problems. A true full-stack engineer who understands both the technical and business sides.",
    name: "John Doe",
    title: "Engineering Manager at AI Labs",
    initials: "JD",
  },
  {
    quote: "Working with them was a game-changer for our startup. They not only built our product but also helped shape our technical architecture and team culture.",
    name: "Sarah Johnson",
    title: "Founder at StartupXYZ",
    initials: "SJ",
  },
];