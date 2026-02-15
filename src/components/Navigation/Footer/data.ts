import Facebook from "@/assets/icons/navigation/footer/facebook";
import Twitter from "@/assets/icons/navigation/footer/twitter";
import Instagram from "@/assets/icons/navigation/footer/instagram";
import LinkedIn from "@/assets/icons/navigation/footer/linkedIn";
import Youtube from "@/assets/icons/navigation/footer/youtube";

export const navigationSections = [
  {
    title: "Why Paystack",
    links: [
      { label: "Why Choose Paystack", href: "/why-paystack" },
      { label: "Success Rates", href: "/success-rates" },
      { space: true },
      { label: "For Entrepreneurs", href: "/entrepreneurs" },
      { label: "For Corporates", href: "/corporates" },
      { label: "For International Companies", href: "/international" },
      { label: "For Startups", href: "/startups" },
      { space: true },
      { label: "For Fintechs", href: "/fintechs" },
      { label: "For Agencies", href: "/agencies" },
      { label: "For Schools", href: "/schools" },
      { label: "For Betting", href: "/betting" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { label: "Nigeria", href: "/pricing/nigeria" },
      { label: "Ghana", href: "/pricing/ghana" },
      { label: "South Africa", href: "/pricing/south-africa" },
      { label: "Kenya", href: "/pricing/kenya" },
      { label: "Côte D'Ivoire", href: "/pricing/cote-divoire" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Overview", href: "/developers" },
      { label: "Documentation", href: "/docs" },
      { label: "Integrations", href: "/integrations" },
      { label: "Status Page", href: "/status" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Company", href: "/company" },
      { label: "Changelog", href: "/changelog" },
      { label: "Subscribe", href: "/subscribe" },
      { label: "Compliance", href: "/compliance" },
      { label: "Careers", href: "/careers" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "Privacy & Terms", href: "/privacy" },
    ],
  },
];

export const secondaryNavigation = [
  {
    title: "Customers",
    links: [{ label: "Testimonials", href: "/testimonials" }],
  },
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Video Tutorials", href: "/tutorials" },
      { label: "Decode Fintech", href: "/decode-fintech" },
      { label: "Commerce", href: "/commerce" },
      { label: "Terminal", href: "/terminal" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Service Partner Directory", href: "/partners" },
      { label: "Nigeria Logos", href: "/logos" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Desk", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Why Was I Debited?", href: "/debited" },
      { label: "Register Your Business", href: "/register" },
    ],
  },
];

export const offices = [
  {
    city: "Lagos",
    address: "126 Joel Ogunnaike Street,\nIkeja GRA, Ikeja,\nLagos, Nigeria",
    phone: "+234 201 631 6160",
  },
  {
    city: "Accra",
    address:
      "VIVO Place,\nA2 Cantonments City Street,\nCantonments,\nAccra, Ghana",
  },
  {
    city: "Abidjan",
    address:
      "AfricaWorks,\nRue Du 7 Décembre,\nZone 4/C,\nAbidjan, Côte D'Ivoire",
  },
  {
    city: "San Francisco",
    address:
      "354 Oyster Point Blvd.,\nSouth San Francisco,\nCA 94080\nUnited States",
  },
  {
    city: "Dubai",
    address:
      "Office 338,\nBuilding 16,\nDubai Internet City, Dubai,\nUnited Arab Emirates",
  },
  {
    city: "Cape Town",
    address:
      "Unit 6, 22fifty Building 1,\n32 Jamieson Street,\nCape Town 8000\nSouth Africa",
  },
  {
    city: "Nairobi",
    address:
      "The Pavilion (1st Floor)\nLower Kabete Road, Westlands\nNairobi, Kenya",
  },
];

export const socialLinks = [
  { Icon: Facebook, href: "https://facebook.com/paystack", label: "Facebook" },
  { Icon: Twitter, href: "https://twitter.com/paystack", label: "Twitter" },
  {
    Icon: Instagram,
    href: "https://instagram.com/paystack",
    label: "Instagram",
  },
  {
    Icon: LinkedIn,
    href: "https://linkedin.com/company/paystack",
    label: "LinkedIn",
  },
  { Icon: Youtube, href: "https://youtube.com/paystack", label: "YouTube" },
];
