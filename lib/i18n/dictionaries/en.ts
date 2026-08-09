/**
 * English UI dictionary. This file also defines the `Dictionary` shape that
 * every other locale (see ./bn.ts) must match. Blog *article bodies* are not
 * translated here — they live per-post in lib/blog.ts. This covers the site
 * chrome: nav, homepage sections, forms, footer, and page metadata.
 */

export const en = {
  meta: {
    home: {
      title:
        "MaxFace Dental Care | Best Dentist in Malibagh, Dhaka — Dr. Yoshita Mazumder",
      description:
        "Expert, gentle & affordable dental care in Malibagh–Khilgaon, Dhaka. Dr. Yoshita Mazumder (BDS, BCS Health, MS Oral & Maxillofacial Surgery) — root canal, implants, braces, kids' dentistry & emergency care. Open 6PM–10PM, Friday closed.",
      ogTitle: "MaxFace Dental Care | Best Dentist in Malibagh, Dhaka",
      ogDescription:
        "Creating confident smiles with care — complete dental & maxillofacial services in Malibagh/Khilgaon, Dhaka. Open every evening except Friday. Book an appointment today.",
    },
    blog: {
      title: "Smile Insights — Dental Tips from MaxFace Dental Care",
      description:
        "Practical dental health advice from Dr. Yoshita Mazumder and the MaxFace Dental Care team in Dhaka — prevention, treatments, and oral health for Bangladeshi families.",
    },
    privacy: {
      title: "Privacy Policy | MaxFace Dental Care",
      description:
        "How MaxFace Dental Care collects, uses and protects your personal information — appointment requests, newsletter subscriptions and website data.",
    },
    notFound: { title: "Page Not Found | MaxFace Dental Care" },
    aliasSuffix: "MaxFace Dental Care",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Doctor", href: "/#doctor" },
    { label: "Services", href: "/#services" },
    { label: "Blog", href: "/blog" },
    { label: "Appointment", href: "/#appointment" },
  ],

  doctorName: "Dr. Yoshita Mazumder",
  credentials: "BDS(CU), BCS (Health), MS(Oral & Maxillofacial Surgery)",

  switcher: {
    /** Label shown on the button = the language you switch TO. */
    label: "বাংলা",
    aria: "Switch to Bangla",
  },

  hero: {
    happySmiles: "1000+ Happy Smiles & Counting",
    titles: [
      "Creating confident smiles with care!",
      "Best dental care in Malibagh, Dhaka!",
      "Gentle care, stunning smiles!",
    ],
    introLines: ["Creating confident", "smiles with care!"],
    // {doctor}, {credentials} and {name} are interpolated in the component.
    bio: "{doctor} — {credentials}, 15 years experience — provides expert, gentle dental care at {name} in Malibagh, Dhaka. Open evenings, six days a week.",
    cta: "Make Appointment Now",
    googleLabel: "Google Business Page",
    badge: "15+ Years Excellence * 15+ Years Excellence *",
    imageAlt:
      "{doctor}, dental surgeon and oral & maxillofacial specialist at {name}, Malibagh, Dhaka",
  },

  introBento: {
    eyebrow: "MaxFace Dental Care",
    title:
      "Your neighborhood dentist in Malibagh, Chowdhury Para — where gentle care, modern technology, and 15 years of trusted experience come together for your whole family.",
    kidsTitle: "Gentle Pediatric Dental Care for Your Child",
    patientsAlt:
      "Smiling patients after treatment at MaxFace Dental Care, Malibagh, Dhaka",
    patientsTitle: "Trusted by Happy Smiles Across Malibagh",
    adultAlt:
      "Dr. Yoshita Mazumder performing adult dental treatment at MaxFace Dental Care, Dhaka",
    adultTitleLines: ["Complete Adult Dentistry", "from Checkups to Surgery"],
  },

  why: {
    eyebrow: "WHY MaxFace Dental Care",
    titleLines: [
      "Where Khilgaon & Malibagh Chowdhurypara",
      "Come to Smile with Confidence.",
    ],
    imageAlt:
      "Dental implant with crown — permanent tooth replacement offered at MaxFace Dental Care, Dhaka",
    features: [
      {
        icon: "tooth",
        title: "Modern Dental Technology",
        text: "Digital X-rays, precise instruments, and up-to-date techniques mean faster, more accurate treatment with less discomfort.",
      },
      {
        icon: "capsules",
        title: "Affordable Treatment",
        text: "Quality dental care shouldn't break the bank. We keep our pricing transparent and reasonable for every patient in Khilgaon, Dhaka.",
      },
      {
        icon: "kit",
        title: "Personalized Treatment Plans",
        text: "No two smiles are the same. Every treatment plan is tailored to your specific needs, concerns, and budget.",
      },
      {
        icon: "microscope",
        title: "Safe for the Whole Family",
        text: "From your child's first checkup to specialized surgery, our gentle approach makes every visit comfortable for patients of all ages.",
      },
    ],
  },

  about: {
    eyebrow: "About Doctor",
    photoAlt: "{doctor} at {name}",
    ctaAppointment: "Make Appointment",
    call: "Call: {phone}",
    name: "Dr. Yoshita Mazumder",
    designation: "Dental Surgeon, Mugda Medical College & Hospital",
    bio: [
      "Dr. Yoshita Mazumder is a highly experienced female dental surgeon with 15+ years of clinical practice, currently serving as a Government Dental Doctor at Mugda Medical College Hospital. She leads MaxFace Dental Care — a trusted, modern dental chamber in Malibagh–Khilgaon, Dhaka, offering complete dental and oral healthcare in a comfortable, patient-friendly environment.",
      "From scaling, fillings, and extractions to root canal treatment, dental implants, pediatric dentistry, and oral & maxillofacial surgery — every treatment is delivered with ethical care, strict sterilization, and patient satisfaction as the highest priorities.",
    ],
    experiencesTitle: "Experiences",
    experiences: [
      "5 years training in Maxillofacial Surgery from Dhaka Dental College & Hospital",
      "6 months FPCS training on Oral & Maxillofacial Surgery",
      "3 years work experience at Khadimpara 31 beded Hospital, Sylhet",
      "2 years work experience at Mugdha Medical College",
    ],
    highlights: [
      { icon: "gradcap", label: "Highly Qualified Doctor" },
      { icon: "person", label: "Female Doctor" },
      { icon: "medal", label: "15 years of Experience" },
      { icon: "money", label: "Affordable Treatment" },
    ],
  },

  services: {
    eyebrow: "Services @MaxFace Dental Care",
    title: "Complete Dental Care for Every Family — All Under One Roof",
    note: {
      pill: "More",
      text: "Don't see the treatment you need? We offer many more services.",
      linkLabel: "Contact Us",
    },
    // icon keys map to components in components/icons; order is preserved.
    items: [
      {
        icon: "kit",
        chip: "Dr. Yoshita's Specialty",
        title: "Oral & Maxillofacial Surgery",
        shortTitle: "Maxillofacial Surgery",
        items: [
          "Wisdom Tooth Extraction",
          "Cyst & Tumor Surgery",
          "Facial Trauma Surgery",
          "Facial Reconstruction",
        ],
      },
      {
        icon: "tooth",
        chip: "Endodontics",
        title: "Root Canal & Tooth Repair",
        shortTitle: "Root Canal & Tooth Repair",
        items: [
          "Root Canal Treatment",
          "Dental Fillings",
          "Crowns & Bridges",
          "TMJ (Jaw Pain) Treatment",
        ],
      },
      {
        icon: "capsules",
        chip: "Periodontics",
        title: "Implants & Gum Care",
        shortTitle: "Implants & Gum Care",
        items: [
          "Dental Implants",
          "Bone Grafting & Sinus Lift",
          "Gum Disease Treatment",
          "Full-Mouth Reconstruction",
        ],
      },
      {
        icon: "medal",
        chip: "Cosmetic Dentistry",
        title: "Smile Makeover",
        shortTitle: "Smile Makeover",
        items: [
          "Teeth Whitening",
          "Veneers (Porcelain & Composite)",
          "Composite Bonding",
          "Gum Contouring & Reshaping",
        ],
      },
      {
        icon: "person",
        chip: "Paediatric Dentistry",
        title: "Kids' Dental Care",
        shortTitle: "Kids' Dental Care",
        items: [
          "Pulpectomy (Kids' Root Canal)",
          "Sealants & Fluoride Protection",
          "Kids' Extractions & Fillings",
          "Infant Tongue-Tie & Lip-Tie Surgery",
        ],
      },
      {
        icon: "ambulance",
        chip: "Diagnostics & Urgent Care",
        title: "X-rays & Emergency Care",
        shortTitle: "X-rays & Emergency Care",
        items: [
          "Digital X-rays & Diagnostics",
          "Biopsy & Oral Pathology",
          "Emergency Dental Care",
          "Severe Toothache & Swelling",
        ],
      },
    ],
  },

  beforeAfter: {
    eyebrow: "After/Before",
    titleLines: [
      "Stunning Smile Transformations",
      "Before & After Treatment @ MaxFace Dental Care",
    ],
    note: {
      pill: "Free",
      text: "Your smile could be next. Book a free consultation —",
      linkLabel: "Get Appointment",
    },
    transformations: [
      { pair: 1, label: "Full-Mouth Rehabilitation" },
      { pair: 4, label: "Wisdom Tooth Extraction" },
      { pair: 7, label: "Smile Design" },
      { pair: 2, label: "Teeth Whitening" },
      { pair: 5, label: "Dental Implants" },
      { pair: 9, label: "Crowns & Bridges" },
    ],
    resultAlt: "{label} result",
  },

  achievements: {
    eyebrow: "Achievements & Recognition",
    title: "Honoured for Excellence in Dental Care",
    items: [
      {
        alt: "Dr. Yoshita Mazumder receiving a crest of honour from BARD on behalf of DGHS",
        caption:
          "Honoured with a crest by BARD, on behalf of the Directorate General of Health Services (DGHS), for successfully completing a special training course",
      },
      {
        alt: "Dr. Yoshita Mazumder being felicitated by BAMOS",
        caption:
          "Recognised by BAMOS on completing her MS in Oral & Maxillofacial Surgery",
      },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    titleLines: ["5/5 ★ Rated on Google ★", "Happy Patients"],
    starsAria: "5 out of 5 stars",
    reviewsLabel: "{count} reviews",
    reviewCta: {
      title: "Loved your visit?",
      text: "Your review helps neighbours in Malibagh & Khilgaon find trustworthy dental care.",
      button: "Leave Us a Review",
    },
    items: [
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
    ],
  },

  appointment: {
    eyebrow: "Book An Appointment",
    title: "Toothache? Don't suffer in silence.",
    text: "From wisdom tooth pain to a brighter smile — thousands of patients across Dhaka trust Dr. Yoshita for gentle, honest, and affordable dental care. Book your visit today.",
    talkTitle: "Talk to Dr. Yoshita",
    hoursTitle: "Opening Hours",
    hoursLines: ["Saturday – Thursday (6PM – 10PM)", "Friday (Closed)"],
    mapTitle: "{name} location on Google Maps",
    formTitle: "Make an Appointment",
    namePlaceholder: "Name",
    emailPlaceholder: "E-mail",
    phonePlaceholder: "1XXX-XXXXXX",
    problemPlaceholder: "Briefly describe your problem",
    submit: "Submit Message",
    hint: "Your request opens in WhatsApp — send it there and we'll confirm your appointment.",
    error: "Please fill in your name and phone number.",
  },

  footer: {
    brand: "MaxFace Dental Care",
    address:
      "411/B, Malibagh Chowdhury Para Road, Dhaka-1219 (Inside Nirvana Health Care)",
    subscribeTitle: "Subscribe for Free Dental Tips",
    subscribePlaceholder: "Enter your email address",
    subscribeError: "Something went wrong. Please try again.",
    subscribeAria: "Subscribe",
    about:
      "Comprehensive dental services designed to create confident smiles through personalized care at {name} with {doctor}.",
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Doctor", href: "/#doctor" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Services", href: "/#services" },
      { label: "Blog", href: "/blog" },
      { label: "Appointment", href: "/#appointment" },
    ],
    servicesTitle: "Our Services",
    services: [
      "Maxillofacial Surgery",
      "Root Canal & Tooth Repair",
      "Implants & Gum Care",
      "Smile Makeover",
      "Kids' Dental Care",
    ],
    hoursTitle: "Chamber Working Hours",
    hours: [
      { day: "Sat To Thurs:", time: "6PM To 10PM" },
      { day: "Friday:", time: "Closed" },
    ],
    copyright: "Copyright © {name} | {year} | All Rights Reserved.",
  },

  subscribeModal: {
    eyebrow: "Thank You!",
    title: "You're on the list.",
    body: "Thank you for trusting me with your smile. Every so often I'll send you the same simple, practical dental advice I give my own patients at the chamber — no spam, just healthy teeth.",
  },

  whatsapp: {
    label: "Talk to Doctor",
    aria: "Chat with Dr. Yoshita on WhatsApp",
    message:
      "Hello Dr. Yoshita! I found MaxFace Dental Care online and would like to book an appointment.",
  },

  blog: {
    heroTitle: "Smile Insights from MaxFace Dental Care",
    heroEyebrow: "Our Blog",
    crumbHome: "Home",
    crumbBlog: "Blog",
    filterAll: "All",
    readMore: "Read More",
    empty: "No articles yet — check back soon.",
    by: "By {doctor}",
    takeawayTitle: "The takeaway",
    ctaTitle: "Have a question about your teeth?",
    ctaText:
      "{doctor} — {credentials} — is available six days a week at {name}, Malibagh, Dhaka.",
    ctaButton: "Book an Appointment",
    backToAll: "Back to all articles",
    next: "Next: {title}",
    relatedEyebrow: "Keep Reading",
    relatedTitle: "Related Articles",
    tagsLabel: "Tags:",
  },

  notFound: {
    heroTitle: "Page Not Found",
    heroEyebrow: "404 Error",
    crumb: "404 Page Not Found",
    heading: "Oops! Page not found",
    text: "The page you are looking for doesn't exist or may have moved. Let's get you back to a healthy place.",
    backHome: "Back To Home",
  },

  redirect: {
    taking: "Taking you to {label}…",
    click: "Click here if nothing happens",
    labels: {
      services: "our services",
      appointment: "the appointment form",
      contact: "our contact section",
      doctor: "Dr. Yoshita's profile",
    },
  },

  privacy: {
    heroTitle: "Privacy Policy",
    heroEyebrow: "Your Privacy",
    crumb: "Privacy Policy",
    updatedLabel: "Last updated: {date}",
    updated: "14 July 2026",
    intro:
      "{name} (“we”, “our”) respects your privacy. This page explains what information we collect through this website, why we collect it, and how it is handled.",
    sections: [
      {
        heading: "Information we collect",
        list: [
          "Appointment requests: when you submit the appointment form we receive the name, phone number, e-mail address (optional) and problem description you provide.",
          "Newsletter subscription: when you subscribe to dental tips we receive the e-mail address you enter.",
          "Nothing automatic: this website does not set advertising cookies or run trackers of its own.",
        ],
      },
      {
        heading: "How your information is used",
        list: [
          "Appointment details are used only to contact you about your visit — by phone, WhatsApp or e-mail — and to prepare for your treatment.",
          "Subscriber e-mail addresses are used only to send occasional dental health tips from our team. Every such e-mail will include a way to unsubscribe.",
          "We never sell, rent or trade your personal information to anyone.",
        ],
      },
      {
        heading: "Services this site relies on",
        list: [
          "WhatsApp: the appointment form can open WhatsApp on your device with your message pre-filled — the message is sent from your own WhatsApp account, under WhatsApp's own terms.",
          "FormSubmit: form contents are relayed to our clinic e-mail through the FormSubmit delivery service.",
          "Google Maps: the location map is embedded from Google, which may set its own cookies when you interact with it, per Google's privacy policy.",
        ],
      },
      {
        heading: "Medical information",
        paragraphs: [
          "Any health details you share in an appointment request are treated as confidential and are seen only by our clinical team for the purpose of your care. Your full dental records are kept at the chamber, not on this website.",
        ],
      },
      {
        heading: "Data retention & your rights",
        paragraphs: [
          "We keep appointment messages only as long as needed to arrange and follow up on your care. You may ask us at any time to see, correct or delete the personal information we hold about you, or to unsubscribe from our e-mails.",
        ],
      },
    ],
    contactHeading: "Contact",
    // {email}, {phone}, {name} interpolated (email & phone as links).
    contact:
      "For any privacy question or request, contact {name} at {email}, call {phone}, or visit us at {address}.",
  },
};

export type Dictionary = typeof en;
