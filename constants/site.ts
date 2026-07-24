const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export const siteConfig = {
  name: "Scalezify",
  description: "India's Dedicated Growth Agency for Luxury Travel & Transportation",
  url: "https://scalezify.com",
  basePath,
  founder: "Yash Pal",
  location: "Bhopal, India",
  contact: {
    email: "hello@scalezify.com",
    whatsapp: "+91 93028 26081",
    calendly: "https://calendly.com/business-yashpal14/30min",
  },
  links: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};
