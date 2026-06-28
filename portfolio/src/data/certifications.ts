export interface Certification {
  name: string;
  issuer: string;
  logo: string;
  verifyUrl: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    logo: "/certs/aws.png",
    verifyUrl: "https://aws.amazon.com/verification/123456",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    logo: "/certs/gcp.png",
    verifyUrl: "https://google.com/certification/verify/123456",
  },
  {
    name: "Kubernetes Administrator",
    issuer: "CNCF",
    logo: "/certs/cka.png",
    verifyUrl: "https://training.linuxfoundation.org/certification/verify/123456",
  },
];