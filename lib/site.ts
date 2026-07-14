/** Central site content. Edit here, not in components. */

export const site = {
  name: "MaxFace Dental Care",
  doctor: "Dr. Yoshita Mazumder",
  credentials: "BDS(CU), BCS (Health), MS(Oral & Maxillofacial Surgery)",
  phone: "01344473973",
  phoneHref: "tel:+8801344473973",
  whatsapp: "8801344473973",
  address:
    "411/B, Malibagh Chowdhury Para Road, Dhaka-1219 (Inside Nirvana Health Care)",
  rating: "5",
  reviews: "30 reviews",
  googleReviewUrl: "https://maps.app.goo.gl/iuEprZ4gZawq8gNEA",
  // Direct "write a review" link — opens the rating box immediately.
  googleWriteReviewUrl: "https://g.page/r/CfWI2MRDFkeBEBM/review",
  mapsUrl: "https://maps.app.goo.gl/XR74vcFzUs7QV8Jg6",
  // Appointment-form email recipients (sent via FormSubmit, no backend).
  notify: {
    to: "info@maxfacedentalbd.com",
    cc: "palash.buet06@gmail.com,yoshita.mazumder@gmail.com",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Doctor", href: "/#doctor" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Appointment", href: "/#appointment" },
];

export const services = [
  {
    category: "Dr. Yoshita's Specialty",
    title: "Oral & Maxillofacial Surgery",
    icon: "kit",
    items: [
      "Wisdom Tooth Extraction",
      "Cyst & Tumor Surgery",
      "Facial Trauma Surgery",
      "Facial Reconstruction",
    ],
  },
  {
    category: "Endodontics",
    title: "Root Canal & Tooth Repair",
    icon: "tooth",
    items: [
      "Root Canal Treatment",
      "Dental Fillings",
      "Crowns & Bridges",
      "TMJ (Jaw Pain) Treatment",
    ],
  },
  {
    category: "Periodontics",
    title: "Implants & Gum Care",
    icon: "capsules",
    items: [
      "Dental Implants",
      "Bone Grafting & Sinus Lift",
      "Gum Disease Treatment",
      "Full-Mouth Reconstruction",
    ],
  },
  {
    category: "Cosmetic Dentistry",
    title: "Smile Makeover",
    icon: "medal",
    items: [
      "Teeth Whitening",
      "Veneers (Porcelain & Composite)",
      "Composite Bonding",
      "Gum Contouring & Reshaping",
    ],
  },
  {
    category: "Paediatric Dentistry",
    title: "Kids' Dental Care",
    icon: "person",
    items: [
      "Pulpectomy (Kids' Root Canal)",
      "Sealants & Fluoride Protection",
      "Kids' Extractions & Fillings",
      "Infant Tongue-Tie & Lip-Tie Surgery",
    ],
  },
  {
    category: "Diagnostics & Urgent Care",
    title: "X-rays & Emergency Care",
    icon: "ambulance",
    items: [
      "Digital X-rays & Diagnostics",
      "Biopsy & Oral Pathology",
      "Emergency Dental Care",
      "Severe Toothache & Swelling",
    ],
  },
];

export const steps: {
  chip: string;
  title: string;
  text?: string;
  items?: string[];
}[] = [
  {
    chip: "Dr. Yoshita's Specialty",
    title: "Maxillofacial Surgery",
    items: [
      "Wisdom Tooth Extraction",
      "Cyst & Tumor Surgery",
      "Facial Trauma Surgery",
      "Facial Reconstruction",
    ],
  },
  {
    chip: "Endodontics",
    title: "Root Canal & Tooth Repair",
    items: [
      "Root Canal Treatment",
      "Dental Fillings",
      "Crowns & Bridges",
      "TMJ (Jaw Pain) Treatment",
    ],
  },
  {
    chip: "Periodontics",
    title: "Implants & Gum Care",
    items: [
      "Dental Implants",
      "Bone Grafting & Sinus Lift",
      "Gum Disease Treatment",
      "Full-Mouth Reconstruction",
    ],
  },
  {
    chip: "Cosmetic Dentistry",
    title: "Smile Makeover",
    items: [
      "Teeth Whitening",
      "Veneers (Porcelain & Composite)",
      "Composite Bonding",
      "Gum Contouring & Reshaping",
    ],
  },
  {
    chip: "Paediatric Dentistry",
    title: "Kids' Dental Care",
    items: [
      "Pulpectomy (Kids' Root Canal)",
      "Sealants & Fluoride Protection",
      "Kids' Extractions & Fillings",
      "Infant Tongue-Tie & Lip-Tie Surgery",
    ],
  },
  {
    chip: "Diagnostics & Urgent Care",
    title: "X-rays & Emergency Care",
    items: [
      "Digital X-rays & Diagnostics",
      "Biopsy & Oral Pathology",
      "Emergency Dental Care",
      "Severe Toothache & Swelling",
    ],
  },
];

export const transformations = [
  { pair: 1, label: "Full-Mouth Rehabilitation" },
  { pair: 4, label: "Veneers" },
  { pair: 7, label: "Smile Design" },
  { pair: 2, label: "Teeth Whitening" },
  { pair: 5, label: "Dental Implants" },
  { pair: 9, label: "Clear Aligners" },
];

export const testimonials = [
  {
    quote:
      '"I had an amazing experience at MaxFace Dental Care. Dr. Yoshita Mazumder is very professional and caring. She explained everything clearly and made me feel comfortable throughout the treatment. The clinic is clean, modern. The cost is reasonable.\n\nDefinitely recommended to anyone looking for quality dental care in Malibagh area of Dhaka."',
    name: "Palash Mondal",
    treatment: "Root Canal Treatment",
    avatar: "/images/author-1.jpg",
  },
  {
    quote:
      '"I had my root canal treatment done by Dr. Yoshita Mazumder and i must say it was an excellent experience, I was quite nervous before the procedure, but her calm and friendly behaviour made me feel comfortable.\n\nthe treatment was completely pain-free,and i truly appreciate his dedication and highly recommend him to anyone in need of dental care."',
    name: "Md Jubayer Ahmed",
    treatment: "Oral & Maxillofacial Surgery",
    avatar: "/images/author-2.jpg",
  },
  {
    quote:
      '"I had a wonderful experience at MaxFace Dental Care! The clinic is modern, clean, and very well-organized. The doctor is professional yet friendly — they explain everything clearly and make sure you\'re comfortable throughout the treatment.\n\nHighly recommend MaxFace Dental Care for anyone looking for quality dental care."',
    name: "Ananya Kar",
    treatment: "Teeth Whitening",
    avatar: "/images/author-3.jpg",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Doctor", href: "/#doctor" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Services", href: "/#services" },
    { label: "Blog", href: "/blog" },
    { label: "Appointment", href: "/#appointment" },
  ],
  services: [
    "Maxillofacial Surgery",
    "Root Canal & Tooth Repair",
    "Implants & Gum Care",
    "Smile Makeover",
    "Kids' Dental Care",
  ],
  hours: [
    { day: "Sat To Thurs:", time: "6PM To 10PM" },
    { day: "Friday:", time: "Closed" },
  ],
};
