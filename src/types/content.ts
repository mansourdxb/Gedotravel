export interface HeroSlide {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
}

export interface DestinationCard {
  name: string;
  tourCount: number;
  image: string;
  href: string;
}

export interface ExcursionCard {
  name: string;
  tourCount: number;
  image: string;
  href: string;
}

export interface PartnerLogo {
  name: string;
  image: string;
  alt: string;
}

export interface ServiceTab {
  label: string;
  icon: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  phone: string;
  phoneLabel: string;
  email: string;
  emailLabel: string;
  address: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}
