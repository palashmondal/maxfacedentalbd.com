/** Blog content. Edit here, not in components. */

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date, rendered on the article page
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string[];
  sections: BlogSection[];
  takeaway: string;
  /** Content language; Bangla posts get lang="bn" markup + the Bangla font. */
  lang?: "en" | "bn";
};

export const posts: BlogPost[] = [
  {
    slug: "importance-of-regular-dental-checkups",
    title: "The Importance of Regular Dental Check-Ups Explained",
    excerpt:
      "Most dental problems in Bangladesh are caught late — when the tooth already hurts. A six-monthly check-up costs far less than the treatment you avoid.",
    category: "Preventive Care",
    date: "2026-06-28",
    readTime: "5 min read",
    image: "/images/blog/checkups.jpg",
    imageAlt: "Dentist reviewing a dental X-ray with a patient in the chair",
    intro: [
      "In Bangladesh, most people visit a dentist only when a tooth starts to hurt. By that point, a small cavity that could have been fixed with a simple filling has often grown into deep decay needing a root canal — or worse, an extraction.",
      "A routine check-up every six months breaks this cycle. It is quick, painless, and one of the cheapest appointments you will ever book at a dental chamber.",
    ],
    sections: [
      {
        heading: "What actually happens at a check-up",
        paragraphs: [
          "A check-up is not a treatment — it is an inspection. Your dentist examines every tooth surface for early decay, checks your gums for bleeding and pocketing, looks at old fillings and crowns, and screens the soft tissues of your mouth for anything unusual, including early signs of oral cancer.",
          "If something looks suspicious below the surface, a small X-ray confirms what is happening inside the tooth or bone. Many hidden problems — decay between teeth, infection at a root tip, an impacted wisdom tooth — only show up on X-ray.",
        ],
      },
      {
        heading: "Why 'wait until it hurts' is expensive",
        paragraphs: [
          "Tooth decay is silent in its early stages. Pain usually starts only after the decay reaches the nerve — and at that stage the options are root canal treatment or extraction, both of which cost several times more than a filling.",
        ],
        list: [
          "Early decay → small filling: one short visit, minimal cost.",
          "Deep decay reaching the nerve → root canal + crown: multiple visits, significantly higher cost.",
          "Neglected infection → extraction + replacement (bridge or implant): the most expensive path of all.",
        ],
      },
      {
        heading: "Check-ups protect more than your teeth",
        paragraphs: [
          "Gum disease has well-established links with diabetes and heart disease — both very common in Bangladesh. Bleeding gums are never normal; they are the first stage of periodontal disease, and it is fully reversible if caught early.",
          "Regular visits also mean your dentist screens your tongue, cheeks and palate for early signs of oral cancer — especially important if you or family members use paan, supari (betel nut), zarda or tobacco.",
        ],
      },
      {
        heading: "How often should you go?",
        paragraphs: [
          "For most adults and children, every six months is ideal. If you have diabetes, gum disease, braces, or you smoke, your dentist may advise every three to four months.",
        ],
      },
    ],
    takeaway:
      "Prevention is always cheaper than cure. Book a check-up before something hurts — your teeth, your health and your wallet will thank you.",
  },
  {
    slug: "root-canal-treatment-myths-vs-reality",
    title: "Root Canal Treatment: Myths vs Reality in Dhaka",
    excerpt:
      "\"Root canal mane onek betha\" — the most common fear we hear. Modern root canal treatment is done under anaesthesia and feels much like getting a filling.",
    category: "Endodontics",
    date: "2026-06-14",
    readTime: "6 min read",
    image: "/images/blog/root-canal.jpg",
    imageAlt: "Modern dental treatment room with dental chair and equipment",
    intro: [
      "Few dental treatments carry as much fear in Bangladesh as the root canal. Patients often delay for months — living on painkillers — because a relative or neighbour told them it is unbearably painful.",
      "The reality: a root canal removes the pain, it doesn't cause it. With modern local anaesthesia and rotary instruments, most patients say the procedure felt no worse than a filling.",
    ],
    sections: [
      {
        heading: "What a root canal actually is",
        paragraphs: [
          "Inside every tooth is a soft tissue called the pulp — nerves and blood vessels. When deep decay or a crack lets bacteria reach the pulp, it becomes infected. That is the throbbing, sleep-destroying pain patients describe.",
          "Root canal treatment (RCT) removes the infected pulp, disinfects the canals inside the roots, and seals them. The tooth stays in your mouth and keeps working — you just lose the infection, not the tooth.",
        ],
      },
      {
        heading: "Common myths, corrected",
        list: [
          "Myth: RCT is extremely painful. Reality: it is performed under local anaesthesia; the pain you feel beforehand is the infection, not the treatment.",
          "Myth: Extraction is the simpler, cheaper choice. Reality: pulling the tooth creates a gap that later needs a bridge or implant — costlier and more invasive than saving the tooth now.",
          "Myth: RCT needs many visits. Reality: many cases finish in one or two visits with modern techniques.",
          "Myth: A root canal tooth is dead and useless. Reality: with a crown on top, a treated tooth can chew normally for decades.",
        ],
      },
      {
        heading: "Why the crown matters",
        paragraphs: [
          "After RCT the tooth becomes more brittle, because the blood supply is gone. A cap (crown) protects it from cracking under chewing pressure. Skipping the crown to save money is the most common reason a successfully treated tooth later fractures and must be extracted anyway.",
        ],
      },
      {
        heading: "When you should suspect you need one",
        list: [
          "Throbbing toothache that wakes you at night",
          "Lingering sensitivity to hot or cold that lasts after the trigger is removed",
          "Pain when biting or chewing on one tooth",
          "A pimple-like boil on the gum near a tooth",
          "A tooth turning grey or dark",
        ],
      },
    ],
    takeaway:
      "Don't let a myth cost you a tooth. If you have a toothache that keeps returning, get it examined early — the sooner an infected tooth is treated, the easier and cheaper the treatment.",
  },
  {
    slug: "braces-vs-clear-aligners",
    title: "Braces vs Clear Aligners: Which Is Right for Your Smile?",
    excerpt:
      "Crooked teeth are not just cosmetic — they trap food and are harder to clean. Here is an honest comparison of braces and aligners for patients in Bangladesh.",
    category: "Orthodontics",
    date: "2026-05-30",
    readTime: "6 min read",
    image: "/images/blog/aligners.jpg",
    imageAlt: "Person placing a clear aligner onto their teeth",
    intro: [
      "More adults in Dhaka are straightening their teeth than ever before — for confidence at work, for wedding photos, and increasingly because they understand that well-aligned teeth are easier to keep clean and healthy.",
      "The two main options are fixed braces and removable clear aligners. Both work; they suit different cases, budgets and lifestyles.",
    ],
    sections: [
      {
        heading: "Why alignment matters beyond looks",
        paragraphs: [
          "Crowded, overlapping teeth create tight corners that a toothbrush cannot reach. Food and plaque accumulate there, leading to cavities and gum disease. Poorly meeting teeth can also cause uneven wear and jaw joint (TMJ) pain over time.",
        ],
      },
      {
        heading: "Fixed braces: the reliable workhorse",
        paragraphs: [
          "Metal or ceramic brackets bonded to the teeth, connected by wires that your orthodontist adjusts every few weeks. Braces handle everything — severe crowding, rotated teeth, bite correction — and because they are fixed, they work 24 hours a day whether you remember them or not.",
        ],
        list: [
          "Best for: complex cases, teenagers, anyone who might forget to wear a removable appliance",
          "Downsides: visible (ceramic is subtler), food restrictions, extra effort to brush around brackets",
          "Typical treatment time: 18–30 months depending on the case",
        ],
      },
      {
        heading: "Clear aligners: nearly invisible, but discipline required",
        paragraphs: [
          "A series of transparent, removable trays that move teeth step by step. You wear each set for one to two weeks, at least 20–22 hours per day, removing them only to eat and brush.",
          "The honest catch: aligners only work while they are on your teeth. Patients who keep 'forgetting' to wear them see their treatment stall and their cost rise.",
        ],
        list: [
          "Best for: mild-to-moderate crowding or spacing, professionals who don't want visible braces",
          "Advantages: nearly invisible, removable for eating, easier cleaning, fewer emergency visits",
          "Downsides: higher cost in most Dhaka clinics, demands strict daily discipline, not suitable for every complex case",
        ],
      },
      {
        heading: "What about cost in Bangladesh?",
        paragraphs: [
          "Conventional metal braces remain the most affordable option, ceramic braces cost more, and clear aligner systems are usually the most expensive. The right choice depends on your diagnosis — a proper orthodontic assessment with X-rays comes first, and a good clinician will tell you plainly if the cheaper option will serve you equally well.",
        ],
      },
    ],
    takeaway:
      "There is no universally 'better' option — there is the right option for your teeth, your discipline and your budget. Start with an assessment, not a decision.",
  },
  {
    slug: "wisdom-tooth-pain-when-to-remove",
    title: "Wisdom Tooth Pain: When Removal Is the Right Call",
    excerpt:
      "Not every wisdom tooth needs to come out — but an impacted one that keeps getting infected will not fix itself. Learn the signs that it's time.",
    category: "Oral Surgery",
    date: "2026-05-12",
    readTime: "5 min read",
    image: "/images/blog/wisdom-tooth.jpg",
    imageAlt: "Panoramic dental X-ray showing all teeth including wisdom teeth",
    intro: [
      "Wisdom teeth (third molars) usually erupt between ages 17 and 25 — and in many mouths, there simply isn't room for them. A tooth that comes through crooked or gets stuck halfway (impacted) becomes a recurring source of pain and infection.",
      "As an Oral & Maxillofacial Surgery practice, wisdom tooth problems are among the most common complaints we see at MaxFace Dental Care.",
    ],
    sections: [
      {
        heading: "Signs your wisdom tooth is in trouble",
        list: [
          "Pain or swelling at the very back of your jaw, often coming and going",
          "Swollen, red gum flap over a partially erupted tooth (pericoronitis) — often with bad taste or bad breath",
          "Difficulty opening your mouth fully or pain on swallowing",
          "Food constantly packing behind your last molar",
          "Pressure or decay damaging the healthy tooth in front of it",
        ],
      },
      {
        heading: "Why 'wait and see' often fails",
        paragraphs: [
          "An impacted wisdom tooth does not straighten itself out. Each infection around it tends to be worse than the last, and antibiotics only calm the episode — they don't remove the cause. Meanwhile, a tilted wisdom tooth can silently decay the second molar next to it, turning a one-tooth problem into a two-tooth problem.",
          "A panoramic X-ray (OPG) shows exactly how the tooth is positioned against the nerve canal and the neighbouring tooth, and lets the surgeon plan a safe removal.",
        ],
      },
      {
        heading: "What removal is actually like",
        paragraphs: [
          "Simple extractions take minutes under local anaesthesia. Impacted teeth need a minor surgical procedure — still routinely done in the dental chair by an oral surgeon. Expect some swelling for two to three days, managed with prescribed medication and cold compresses.",
        ],
        list: [
          "First 24 hours: bite on gauze, no rinsing or spitting, cold compress outside the cheek",
          "Eat soft, cool foods — avoid hot drinks, straws and smoking (they dislodge the healing clot)",
          "From day two: gentle warm salt-water rinses after meals",
          "Most people return to work or classes within a day or two",
        ],
      },
      {
        heading: "When a wisdom tooth can stay",
        paragraphs: [
          "A fully erupted, upright wisdom tooth that you can clean properly and that bites correctly against its partner can absolutely stay. Removal is a clinical decision, not a routine — which is why an examination and X-ray come first.",
        ],
      },
    ],
    takeaway:
      "Recurring pain at the back of your jaw deserves an X-ray, not another strip of painkillers. Early assessment makes removal — if needed — simpler and safer.",
  },
  {
    slug: "paan-betel-nut-oral-cancer-bangladesh",
    title: "Paan, Supari & Zarda: The Oral Cancer Risk Bangladesh Can't Ignore",
    excerpt:
      "Bangladesh has one of the highest oral cancer rates in the world, driven largely by betel quid and smokeless tobacco. Early detection saves lives.",
    category: "Oral Health",
    date: "2026-04-25",
    readTime: "7 min read",
    image: "/images/blog/oral-cancer.jpg",
    imageAlt: "Dentist examining dental X-ray films on a light box",
    intro: [
      "Chewing paan with supari (betel nut) and zarda (chewing tobacco) is woven into daily life across Bangladesh — offered at weddings, shared after meals, sold at every street corner. What is far less talked about: betel quid and smokeless tobacco are Group 1 carcinogens, and Bangladesh consistently ranks among the countries with the highest oral cancer burden in the world.",
      "As an oral & maxillofacial surgery practice, we see the consequences at every stage — from early white patches that are fully treatable, to advanced cancers that require major surgery. The difference between those two outcomes is usually just time.",
    ],
    sections: [
      {
        heading: "Why paan and supari are so harmful",
        paragraphs: [
          "Betel nut itself — even without tobacco — damages the cells lining the mouth and causes oral submucous fibrosis, a condition where the cheeks progressively stiffen until opening the mouth becomes difficult. It is potentially cancerous and largely irreversible.",
          "Add zarda or sadapata (tobacco leaf) and slaked lime (chun), and the chemical assault multiplies. The spot where the quid habitually rests — usually the cheek pouch or lower gum — is exactly where lesions most often develop.",
        ],
      },
      {
        heading: "Warning signs you must never ignore",
        list: [
          "A white or red patch anywhere in the mouth that doesn't heal within two weeks",
          "A mouth ulcer lasting more than two weeks, especially if painless",
          "Gradual difficulty opening the mouth or a burning sensation with spicy food",
          "A lump or thickening in the cheek, tongue, or neck",
          "Numbness of the lip or tongue, or unexplained loose teeth",
        ],
        paragraphs: [
          "Painless is not the same as harmless. Early oral cancers often don't hurt at all — which is why they get ignored until they are advanced.",
        ],
      },
      {
        heading: "Early detection changes everything",
        paragraphs: [
          "Caught early, oral cancer treatment is far simpler and survival rates are dramatically better. A screening takes your dentist two minutes during any routine check-up: a systematic look at your tongue, the floor of the mouth, cheeks, gums and palate.",
          "If you chew paan, supari or gutka — or smoke biri/cigarettes — make that screening a fixed part of your six-monthly dental visit, and ask your dentist to check specifically.",
        ],
      },
      {
        heading: "Quitting: hard, but your mouth recovers",
        paragraphs: [
          "The habit is social and chemical, so quitting is genuinely difficult — but risk starts falling as soon as you stop, and pre-cancerous changes can stabilise or regress. Replace the after-meal quid with plain mouth freshener (elachi, fennel), enlist family support, and if stiffness or patches have already appeared, get them examined before quitting alone reassures you.",
        ],
      },
    ],
    takeaway:
      "If you or someone in your family chews paan or uses tobacco, book an oral screening — it takes two minutes and it can save a life. Any mouth ulcer or patch lasting more than two weeks needs a professional opinion, full stop.",
  },
  {
    slug: "dental-implants-permanent-solution-missing-teeth",
    title: "Dental Implants: A Permanent Answer to Missing Teeth",
    excerpt:
      "A missing tooth is more than a gap in your smile — neighbouring teeth drift, bone shrinks, chewing weakens. Implants replace the root, not just the tooth.",
    category: "Restorative Dentistry",
    date: "2026-04-08",
    readTime: "6 min read",
    image: "/images/blog/implants.jpg",
    imageAlt: "Dental model showing an implant between natural teeth",
    intro: [
      "Losing a tooth — to decay, gum disease or an accident — sets off a chain reaction most people don't expect. The teeth beside the gap slowly tilt into it, the opposing tooth over-erupts, and the jawbone under the gap begins to shrink because it no longer receives chewing stimulation.",
      "A dental implant is the only replacement that addresses all of this, because it replaces the missing root itself.",
    ],
    sections: [
      {
        heading: "How an implant works",
        paragraphs: [
          "An implant is a small titanium screw placed into the jawbone where the root used to be. Over two to four months the bone fuses to the titanium surface — a process called osseointegration. A crown is then fixed on top, giving you a tooth that looks, feels and chews like your own.",
          "Titanium is completely biocompatible; it has been used in orthopaedic and dental surgery for decades.",
        ],
      },
      {
        heading: "Implant vs bridge vs removable denture",
        list: [
          "Implant: does not touch neighbouring teeth, preserves bone, lasts decades with good hygiene — highest upfront cost, best long-term value.",
          "Bridge: faster and cheaper initially, but requires grinding down two healthy neighbouring teeth to serve as supports, and the bone under the gap continues to shrink.",
          "Removable partial denture: lowest cost, but least comfortable, must be removed nightly, and accelerates bone loss over time.",
        ],
      },
      {
        heading: "Am I a candidate?",
        paragraphs: [
          "Most healthy adults are. What we assess first: the amount and quality of bone at the site (a CBCT 3D scan shows this precisely), gum health, and medical factors. Well-controlled diabetes is usually fine; uncontrolled diabetes and heavy smoking significantly raise failure risk and must be addressed first.",
          "If bone has already shrunk — common when a tooth has been missing for years — bone grafting can rebuild the site. This is routine for an oral & maxillofacial surgeon.",
        ],
      },
      {
        heading: "What the process looks like",
        list: [
          "Visit 1: examination, 3D scan, treatment plan and cost discussion",
          "Visit 2: implant placement — a minor surgical procedure under local anaesthesia, usually 30–60 minutes per implant",
          "Healing period: 2–4 months while bone fuses to the implant",
          "Final visits: impression and fitting of the permanent crown",
        ],
      },
      {
        heading: "Caring for an implant",
        paragraphs: [
          "Implants cannot decay, but the gum around them can get infected (peri-implantitis) just like around natural teeth. Daily brushing, cleaning between teeth, and six-monthly professional check-ups protect your investment for decades.",
        ],
      },
    ],
    takeaway:
      "The best time to plan a replacement is soon after losing the tooth, before bone shrinks. If you've been hiding a gap for years, it's still worth an assessment — grafting techniques can usually make an implant possible.",
  },
  {
    slug: "oral-hygiene-routine-family-bangladesh",
    title: "Brushing Right: A Daily Oral Hygiene Routine for the Whole Family",
    excerpt:
      "Most of us brush twice a day — and still get cavities. Technique, timing and what you do between brushings matter more than the toothpaste brand.",
    category: "Preventive Care",
    date: "2026-03-22",
    readTime: "5 min read",
    image: "/images/blog/hygiene.jpg",
    imageAlt: "Toothbrushes in a glass jar on a clean bathroom counter",
    intro: [
      "Ask anyone in Dhaka if they brush their teeth and the answer is yes. Ask how long, with what motion, and what they do after the evening meal — and the picture explains why cavities and bleeding gums remain so common.",
      "Good oral hygiene is a technique, not a product. Here is the routine we teach every family at MaxFace Dental Care.",
    ],
    sections: [
      {
        heading: "The twice-daily non-negotiables",
        list: [
          "Brush two full minutes, morning and — most importantly — last thing before bed. Nothing to eat or drink except water afterwards.",
          "Use a soft-bristled brush and a pea-sized amount of fluoride toothpaste. Hard bristles and aggressive scrubbing wear away enamel and gums.",
          "Angle the bristles 45° toward the gum line and use small circular strokes — not wide horizontal sawing.",
          "Spit out the foam, but don't rinse with lots of water — leaving a trace of fluoride on the teeth keeps protecting them.",
          "Clean between teeth once daily with floss or interdental brushes. The toothbrush physically cannot reach these surfaces — where most adult cavities start.",
        ],
      },
      {
        heading: "The habits that quietly cause decay",
        paragraphs: [
          "It isn't only how much sugar you eat — it's how often. Every sip of sweet cha, every biscuit, every sip of a soft drink restarts a 30-minute acid attack on your enamel. Six small snacks do far more damage than one dessert eaten with a meal.",
        ],
        list: [
          "Sweet milk tea sipped across the whole afternoon — the classic office habit",
          "Biscuits, chanachur and cake between meals",
          "Sugary drinks and juices, especially sipped slowly",
          "Falling asleep without brushing after a late dinner or dawat",
        ],
      },
      {
        heading: "Children: start earlier than you think",
        paragraphs: [
          "Begin brushing as soon as the first baby tooth appears, using a rice-grain smear of fluoride toothpaste (pea-sized from age three). A parent should brush or supervise until about age eight — children simply don't have the dexterity before then.",
          "Never put a baby to bed with a bottle of milk or sweetened liquid; it causes the rapid 'bottle caries' we so often see in toddlers. And baby teeth matter: they hold space for permanent teeth and infections in them hurt just as much.",
        ],
      },
      {
        heading: "What about miswak, mouthwash and whitening pastes?",
        paragraphs: [
          "Miswak used properly has genuine cleaning benefit, but it cannot reach between teeth — pair it with, don't replace, a fluoride routine. Mouthwash is an optional extra, never a substitute for brushing. Aggressively abrasive 'whitening' pastes can wear enamel; if you want a brighter smile, ask about professional options instead.",
        ],
      },
    ],
    takeaway:
      "Two minutes, twice a day, with the right technique — plus cleaning between teeth and limiting how often sugar touches your teeth. That simple routine prevents the majority of dental disease we treat.",
  },
  {
    slug: "bleeding-gums-diabetes-gum-disease",
    title: "Bleeding Gums & Diabetes: A Two-Way Street You Should Know About",
    excerpt:
      "Bangladesh has millions living with diabetes — and gum disease makes blood sugar harder to control, while high sugar makes gums worse. Here's how to break the loop.",
    category: "Gum Care",
    date: "2026-03-05",
    readTime: "6 min read",
    image: "/images/blog/gum-care.jpg",
    imageAlt: "Dentist holding periodontal examination instruments",
    intro: [
      "If your gums bleed when you brush, that is not a sign you brushed 'too hard' — it is the earliest sign of gum disease. And if you or a family member has diabetes, that bleeding deserves double attention, because the two conditions feed each other.",
      "With diabetes now affecting a huge share of adults in Bangladesh, this connection is one of the most important — and least discussed — topics in our chambers.",
    ],
    sections: [
      {
        heading: "From bleeding gums to loose teeth: how gum disease progresses",
        paragraphs: [
          "It starts with plaque — the soft white film of bacteria that forms on teeth daily. Left along the gum line, it hardens into tartar (calculus), which brushing can no longer remove. The gums respond with inflammation: redness, swelling, bleeding. This stage — gingivitis — is fully reversible.",
          "Untreated, the inflammation spreads deeper and starts dissolving the bone that holds your teeth. This is periodontitis. Gums recede, teeth loosen and drift, and eventually teeth are lost — it remains a leading cause of tooth loss in adults, often with very little pain along the way.",
        ],
      },
      {
        heading: "The diabetes connection, in both directions",
        list: [
          "High blood sugar weakens the body's defence against gum bacteria and slows healing — so gum disease starts easier and progresses faster in diabetics.",
          "In the other direction, infected gums pour inflammatory chemicals into the bloodstream, which increases insulin resistance — making blood sugar harder to control.",
          "Studies show treating gum disease can measurably improve HbA1c. Your dentist is genuinely part of your diabetes care team.",
        ],
      },
      {
        heading: "Scaling: what it is and why it doesn't 'loosen' teeth",
        paragraphs: [
          "Professional cleaning (scaling) removes the hardened tartar with an ultrasonic instrument — the only way to remove it once formed. A persistent myth in Bangladesh says scaling makes teeth loose or creates gaps. The truth: teeth feel different afterwards because the cement-like tartar that was splinting them is gone, and the gaps were always there, hidden under swollen gums and deposits.",
          "For most adults a scaling every six to twelve months is enough; established periodontitis needs deeper cleaning and closer follow-up.",
        ],
      },
      {
        heading: "Your action plan",
        list: [
          "Bleeding gums for more than a week of proper brushing and flossing → book a dental visit",
          "Diagnosed with diabetes → tell your dentist, and have gum check-ups at least twice a year",
          "Keep blood sugar controlled — your gums will respond visibly",
          "Never skip the night-time brush, and clean between teeth daily",
        ],
      },
    ],
    takeaway:
      "Bleeding gums are a message, not a nuisance. Treat them early — especially if diabetes runs in your family — and you protect both your teeth and your overall health.",
  },
  {
    slug: "choosing-dental-clinic-dhaka-first-visit",
    title: "How to Choose a Good Dental Clinic in Dhaka — and What to Expect on Your First Visit",
    excerpt:
      "From BMDC registration to sterilisation practices, here's a practical checklist for choosing dental care in Bangladesh — plus what a first appointment involves.",
    category: "Patient Guide",
    date: "2026-02-02",
    readTime: "6 min read",
    image: "/images/blog/clinic-dhaka.jpg",
    imageAlt: "Clean, modern dental clinic treatment room",
    intro: [
      "Dental chambers in Dhaka range from internationally equipped clinics to a chair behind a pharmacy counter. For a treatment that involves your health, your face and often a real financial commitment, knowing how to tell the difference matters.",
      "Here is the checklist we would give our own family members — followed by a walkthrough of what a proper first visit looks like, for anyone who feels nervous about going.",
    ],
    sections: [
      {
        heading: "The non-negotiables",
        list: [
          "A BMDC-registered dentist (BDS degree) — ask, or check the BMDC online register. For surgery, implants or jaw problems, look for postgraduate qualifications such as MS/FCPS in the relevant specialty (e.g., Oral & Maxillofacial Surgery).",
          "Visible sterilisation practice: instruments opened from sealed autoclave pouches in front of you, fresh gloves for every patient, disinfected chair and surfaces.",
          "X-ray facilities in-house or nearby — diagnosis without imaging is guesswork for anything beyond a simple check-up.",
          "A written or clearly stated treatment plan with costs before treatment starts — not after.",
        ],
      },
      {
        heading: "Good signs and warning signs",
        paragraphs: [
          "Good signs: the dentist examines thoroughly before quoting anything, explains alternatives (including the cheaper one), doesn't pressure you, and welcomes questions. Reviews from real patients — on Google, not just Facebook likes — tell you a lot.",
          "Warning signs: prices that seem impossibly cheap (sterilisation and quality materials have real costs), 'package deals' pushed before an examination, reused gloves, and anyone offering to start a root canal or extraction within minutes of you sitting down without an X-ray.",
        ],
      },
      {
        heading: "What happens at a first visit",
        list: [
          "History: your complaint, medical conditions (tell your dentist about diabetes, blood pressure, blood thinners, pregnancy — it changes treatment planning), and medications",
          "Examination: every tooth, your gums, bite, jaw joints and the soft tissues of your mouth",
          "X-rays if needed — a small periapical film or a full-mouth OPG",
          "Discussion: what was found, your options, what each costs, and what order to do things in",
          "Usually a cleaning or the most urgent treatment can begin the same day — nothing happens without your agreement",
        ],
      },
      {
        heading: "Nervous? Say so.",
        paragraphs: [
          "Dental anxiety is extremely common and nothing to be embarrassed about. Tell the dentist at the start — a good clinician will explain each step before doing it, agree a 'raise your hand to pause' signal, and never rush you. The first visit is an examination and a conversation; you stay in control throughout.",
        ],
      },
    ],
    takeaway:
      "Choose the clinic the way you'd choose a surgeon, not the way you'd choose a salon: qualifications, sterilisation, honest diagnosis. A good first visit should leave you informed, not pressured.",
  },
  {
    slug: "teeth-whitening-dhaka-safe-vs-risky",
    title: "Teeth Whitening in Dhaka: Safe Options vs Risky Shortcuts",
    excerpt:
      "Charcoal powder, lemon-and-salt, roadside 'instant whitening' — Bangladesh is full of shortcuts that damage enamel. Here's what actually whitens teeth safely.",
    category: "Cosmetic Dentistry",
    date: "2026-07-12",
    readTime: "5 min read",
    image: "/images/blog/whitening.jpg",
    imageAlt: "Close-up of a bright, healthy smile after professional whitening",
    intro: [
      "Everyone wants a brighter smile for a wedding, a graduation photo, or simply confidence at work. In Dhaka you will find whitening offers everywhere — from charcoal toothpastes in the supermarket to 'instant whitening' at beauty parlours. Most of them share one problem: they either do nothing, or they whiten by scraping away your enamel.",
      "Enamel does not grow back. Before you try anything on your teeth, it is worth understanding how whitening actually works.",
    ],
    sections: [
      {
        heading: "How real whitening works",
        paragraphs: [
          "Professional whitening uses carbamide peroxide or hydrogen peroxide gel, which penetrates the enamel and breaks down the stain molecules inside the tooth. Decades of clinical studies — summarised in American Dental Association guidance — show that dentist-supervised peroxide whitening is both effective and safe for enamel when used correctly.",
          "That supervision matters: the dentist first confirms your teeth and gums are healthy (whitening over an untreated cavity or leaking filling is painful), protects the gums, and chooses a concentration appropriate for your teeth.",
        ],
      },
      {
        heading: "The shortcuts that damage teeth",
        list: [
          "Lemon, vinegar or any acid + salt: the acid softens enamel and the salt scrubs it off. Teeth look whiter briefly, then become yellower as the darker dentine underneath shows through — permanently.",
          "Charcoal and 'whitening' powders: abrasive scrubbing removes surface stain along with enamel. Studies have found no evidence charcoal whitens safely.",
          "Roadside or parlour 'instant whitening' with unknown chemicals and no gum protection: chemical burns of the gums are common.",
          "Overusing whitening strips bought online without a check-up first — painful if you have hidden decay or receded gums.",
        ],
      },
      {
        heading: "What we recommend at MaxFace",
        paragraphs: [
          "Start with a scaling and polishing — for many patients in Bangladesh, removing years of tea, paan and tobacco surface stain already brightens the smile dramatically at a fraction of the cost of whitening.",
          "If you want to go further, in-chamber professional whitening or a custom take-home tray gives a controlled, lasting result. For teeth darkened from the inside (after a root canal, for example), options like internal bleaching or veneers work better — a quick consultation will tell you which category you are in.",
        ],
      },
    ],
    takeaway:
      "Whitening is safe when a dentist confirms your mouth is healthy and uses the right materials — and damaging when it comes from acid, abrasives or unknown chemicals. Book a consultation before you spend on any whitening product; often a simple professional clean is all your smile needs.",
  },
  {
    slug: "milk-teeth-matter-child-dental-care-bangladesh",
    title: "Milk Teeth Matter: Why Your Child's First Teeth Deserve Real Care",
    excerpt:
      "'They'll fall out anyway' is the most expensive sentence in children's dentistry. Decayed milk teeth cause pain, infection and crooked permanent teeth.",
    category: "Paediatric Dentistry",
    date: "2026-07-05",
    readTime: "6 min read",
    image: "/images/blog/milk-teeth.jpg",
    imageAlt: "Smiling Bangladeshi child showing his milk teeth",
    intro: [
      "Ask any parent in Bangladesh about their child's দুধ দাঁত (milk teeth) and you will often hear the same thing: they will fall out anyway, so why treat them? It sounds logical — and it is wrong in almost every way that matters.",
      "The Global Burden of Disease study estimates that untreated decay in milk teeth affects over 500 million children worldwide, making it one of the most common chronic childhood conditions — more common than asthma. Bangladeshi children, raised on sweet biscuits, chocolates and sugary drinks, are firmly part of that statistic.",
    ],
    sections: [
      {
        heading: "What milk teeth actually do",
        list: [
          "They hold space for permanent teeth. Lose a milk tooth too early and the neighbours drift into the gap — the adult tooth then erupts crooked or gets stuck.",
          "They chew. A child with hurting teeth avoids proper food, and nutrition suffers during the most important growth years.",
          "They shape speech. Missing front teeth at age three or four affects how sounds are learned.",
          "Infection in a milk tooth can damage the permanent tooth bud developing right underneath it.",
        ],
      },
      {
        heading: "The Bangladeshi pattern we see every week",
        paragraphs: [
          "A child is given sweets or a bottle of sweet milk at bedtime. Small brown spots appear on the upper front teeth — early childhood caries. Nobody worries, because 'they are just milk teeth'. A year later the child is up at night with pain, cheeks swollen, and needs a pulpectomy (a child's root canal) or an extraction under a frightened child's tears — all of it preventable.",
          "Prevention is genuinely simple: brush twice daily with a rice-grain (under 3) or pea-sized (3+) amount of fluoride toothpaste, no bottle in bed, sweets with meals rather than grazing all day, and a first dental visit by the first birthday.",
        ],
      },
      {
        heading: "What a children's dental visit looks like at MaxFace",
        paragraphs: [
          "Early visits are short and friendly — a ride in the chair, counting teeth, a gentle polish. This builds a child who is comfortable at the dentist for life, instead of one whose first visit is an emergency in pain.",
          "For cavity-prone children we apply fissure sealants and fluoride varnish — quick, painless, evidence-backed protection. And when treatment is needed, paediatric techniques and patience make it a calm experience, not a traumatic one.",
        ],
      },
    ],
    takeaway:
      "Milk teeth guide nutrition, speech and the position of adult teeth — and they can hurt just as much as any tooth. Bring your child for a first check-up by age one, and never wait for a child to complain of pain. Book a gentle first visit today.",
  },
  {
    slug: "infant-tongue-tie-breastfeeding-bangladesh",
    title: "Tongue-Tie in Babies: The Hidden Reason Breastfeeding Hurts",
    excerpt:
      "When a baby can't latch, feeds for hours, or the mother is in pain — a short band of tissue under the tongue is often the cause. A minutes-long procedure can change everything.",
    category: "Paediatric Dentistry",
    date: "2026-06-20",
    readTime: "5 min read",
    image: "/images/blog/tongue-tie.jpg",
    imageAlt: "Bengali mother holding her infant close",
    intro: [
      "Some babies struggle at the breast from day one: shallow latch, clicking sounds, endless feeds that leave the baby unsatisfied and the mother with cracked, painful nipples. In Bangladesh the advice usually stops at 'try a different position' or 'switch to formula'. But in many of these babies, the real problem is anatomical — and fixable.",
      "Ankyloglossia, or tongue-tie, is a short, tight band of tissue (the lingual frenulum) tethering the tongue to the floor of the mouth. It restricts the tongue movements a baby needs to latch and suck effectively.",
    ],
    sections: [
      {
        heading: "Signs a baby may be tongue-tied",
        list: [
          "Shallow latch that keeps slipping off; clicking sounds while feeding",
          "Very long or constant feeds with poor weight gain",
          "Severe maternal nipple pain, cracks or repeated blocked ducts",
          "The tongue can't lift or poke out past the lower gum; its tip may look notched or heart-shaped",
          "In older children: difficulty with certain speech sounds or licking food from the lips",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "A Cochrane systematic review of randomised trials found that releasing a significant tongue-tie (frenotomy) reduces maternal nipple pain and can improve breastfeeding effectiveness. International guidance is consistent: when a tongue-tie is genuinely restricting feeding, release is a safe and simple treatment.",
          "The procedure itself takes minutes. In young infants it is done with precision instruments, minimal or no anaesthesia, a drop or two of blood, and the baby can breastfeed immediately afterwards — which is itself part of the healing.",
        ],
      },
      {
        heading: "Why see an oral & maxillofacial surgeon",
        paragraphs: [
          "Not every visible frenulum needs cutting — over-diagnosis is real, and a proper assessment looks at function, not just appearance. As an oral & maxillofacial surgeon, Dr. Yoshita assesses whether the tie truly restricts movement, performs the release when indicated, and shows parents the simple after-care that prevents reattachment.",
          "If your baby's feeding struggles have no explanation, a ten-minute examination at our Malibagh chamber can rule tongue-tie in or out.",
        ],
      },
    ],
    takeaway:
      "Painful, ineffective breastfeeding is not something mothers should simply endure — tongue-tie is a common, fixable cause. If the signs sound familiar, book an assessment; the procedure, when needed, takes minutes and helps immediately.",
  },
  {
    slug: "smoking-gul-zarda-gum-disease-bangladesh",
    title: "Smoking, Gul & Zarda: What Tobacco Really Does Inside Your Mouth",
    excerpt:
      "Over a third of Bangladeshi adults use tobacco — and dentists see the damage first: hidden gum disease, stained teeth, failing implants and pre-cancerous patches.",
    category: "Oral Health",
    date: "2026-06-08",
    readTime: "6 min read",
    image: "/images/blog/tobacco.jpg",
    imageAlt: "Man smoking a cigarette",
    intro: [
      "The Global Adult Tobacco Survey (GATS) for Bangladesh found that more than one in three adults — tens of millions of people — use tobacco in some form: cigarettes and biri, but also the smokeless kinds our region is famous for: zarda in paan, gul rubbed on the gums, sadapata leaf.",
      "Lung damage gets the headlines. But a dentist can usually tell a tobacco user within seconds of looking in the mouth — and the earliest, most treatable warnings of serious disease appear there first.",
    ],
    sections: [
      {
        heading: "The damage you can't feel happening",
        paragraphs: [
          "Nicotine shrinks the blood vessels in your gums. That does two dangerous things at once: it starves the gums of the blood supply they need to fight infection, and it hides the main warning sign — bleeding. Research consistently shows smokers have roughly two to three times the risk of serious gum disease, yet their gums often look deceptively 'calm' while bone quietly disappears around the teeth.",
          "This is why heavy smokers can go from 'my gums never bleed' to loose teeth without ever noticing a problem in between. Tobacco users also heal slower after extractions, get painful dry sockets more often, and have significantly higher failure rates with dental implants.",
        ],
      },
      {
        heading: "Gul and zarda: the mouth pays directly",
        paragraphs: [
          "Smokeless tobacco sits against the gum and cheek for hours, delivering carcinogens directly to the tissue. White or red patches (leukoplakia and erythroplakia), a burning sensation, and progressive stiffening of the mouth are all warning signs — and Bangladesh sits in the world's highest-risk region for oral cancer largely because of these habits.",
          "Any white or red patch, non-healing ulcer, or lump lasting more than two weeks needs a professional examination — early oral cancer is very treatable; late oral cancer is devastating.",
        ],
      },
      {
        heading: "What your dentist can do",
        list: [
          "Screen the entire mouth for pre-cancerous change at every check-up — it takes two minutes",
          "Treat the gum disease tobacco has been hiding, with deep cleaning and maintenance",
          "Remove years of tar and stain with scaling and polishing — a visible fresh start that helps many patients commit to quitting",
          "Perform a biopsy of any suspicious patch — a small diagnostic procedure done in the chamber",
        ],
      },
    ],
    takeaway:
      "Tobacco hides its own evidence — gums that don't bleed can still be losing bone, and painless patches can be pre-cancerous. If you use cigarettes, gul or zarda in any amount, a twice-yearly oral screening is not optional. Book yours this week; it takes minutes and can save your life.",
  },
  {
    slug: "sugar-cha-soft-drinks-cavities-bangladesh",
    title: "Sweet Cha, Soft Drinks & Biscuits: How Bangladesh's Sugar Habit Feeds Cavities",
    excerpt:
      "It's not how much sugar you eat — it's how many times a day your teeth are attacked. The WHO limit is about six teaspoons; one cup of roadside cha can carry three.",
    category: "Preventive Care",
    date: "2026-05-25",
    readTime: "5 min read",
    image: "/images/blog/sugar-cha.jpg",
    imageAlt: "Tea stall in Bangladesh, where sweet cha is served all day",
    intro: [
      "Count an ordinary Dhaka day: sweet milk cha at breakfast, another cup mid-morning with biscuits, cola with lunch, cha again in the afternoon, something sweet after dinner. None of these feels like 'eating a lot of sugar' — and that is exactly the problem.",
      "Every time sugar enters your mouth, the bacteria in dental plaque convert it to acid, and for the next 20–30 minutes that acid dissolves minerals out of your enamel. Saliva repairs the damage — but only if you give it time. Sip and snack all day, and your teeth spend most of the day dissolving.",
    ],
    sections: [
      {
        heading: "The numbers worth knowing",
        list: [
          "The World Health Organization recommends keeping free sugars under 10% of daily energy — and under 5% (about 25 g, or six teaspoons) for real dental benefit.",
          "One cup of sweet condensed-milk cha can contain 2–3 teaspoons of sugar. Four cups a day and you've hit the limit before eating anything.",
          "A 250 ml glass of a soft drink carries roughly 26 g of sugar — a full day's ideal allowance in one glass.",
          "Tooth decay remains the single most common disease on earth (Global Burden of Disease study) — and it is almost entirely preventable.",
        ],
      },
      {
        heading: "It's the frequency, not just the amount",
        paragraphs: [
          "Ten sweets eaten at once cause one acid attack. The same ten sweets spread across the day cause ten separate attacks — far worse for your teeth even though the sugar total is identical. The single most effective change is not giving up sugar entirely; it is confining it to meal times and keeping the hours in between sugar-free.",
          "Practical swaps that work in a Bangladeshi routine: take cha with less or no sugar (taste adapts within two weeks), keep water or unsweetened cha between meals, finish meals with fruit rather than dessert biscuits, and never let children sip juice or sweet milk over long periods — especially at bedtime.",
        ],
      },
      {
        heading: "Defend the enamel you have",
        paragraphs: [
          "Brush twice daily with fluoride toothpaste — fluoride rebuilds the minerals acid removes — and brush before bed without fail, because saliva flow drops at night and leaves teeth undefended. A dental check-up twice a year catches the small, cheap-to-fix cavities that an all-day sugar habit creates before they become root canals.",
        ],
      },
    ],
    takeaway:
      "You don't need a sugar-free life — you need sugar-free hours. Keep sweets and sweet cha to mealtimes, brush with fluoride before bed, and let a check-up catch what slips through. If it's been more than six months since your last one, book it now.",
  },
  {
    slug: "jaw-pain-clicking-tmj-disorder-treatment",
    title: "Jaw Pain, Clicking & Locking: Understanding TMJ Disorder",
    excerpt:
      "A clicking jaw, morning headaches, pain while chewing — TMJ problems are common, mostly treatable without surgery, and widely misdiagnosed.",
    category: "TMJ & Jaw Care",
    date: "2026-05-10",
    readTime: "6 min read",
    image: "/images/blog/tmj.jpg",
    imageAlt: "Woman pressing a compress to her painful jaw",
    intro: [
      "The temporomandibular joint (TMJ) — just in front of each ear — is the most-used joint in your body. It moves every time you talk, chew, yawn or swallow. When it is unhappy, life becomes miserable in ways people rarely connect to the jaw: ear pain with a healthy ear, morning headaches, a click with every meal, or a jaw that suddenly won't open fully.",
      "Studies estimate that a significant share of adults — the U.S. National Institute of Dental and Craniofacial Research cites roughly 5–12% — experience TMJ-related disorders, with women affected more often than men. In our Dhaka practice, stress-related cases have grown visibly.",
    ],
    sections: [
      {
        heading: "Common causes",
        list: [
          "Bruxism — clenching or grinding your teeth, usually at night, often stress-driven. Most patients have no idea they do it; their partners do.",
          "A displaced cushioning disc inside the joint — the usual source of clicking and locking",
          "An uneven bite from missing back teeth, forcing the joint to work at a bad angle",
          "Arthritis of the joint, or old trauma to the jaw or chin",
          "Habits: constant gum chewing, nail biting, cradling a phone with the jaw",
        ],
      },
      {
        heading: "The good news: surgery is rarely needed",
        paragraphs: [
          "International consensus is clear that TMJ disorders should almost always be managed conservatively first — and most patients get better this way. Treatment typically combines a custom night guard (occlusal splint) to protect against grinding, jaw exercises and physiotherapy, a short course of soft diet and anti-inflammatories during flare-ups, stress management, and correcting bite problems such as replacing missing back teeth.",
          "As an oral & maxillofacial surgeon, Dr. Yoshita treats the full spectrum — which also means she can tell you honestly when your case is a simple muscle problem and when it genuinely needs advanced care. Persistent locking, worsening pain, or a changing bite deserve proper imaging and specialist assessment.",
        ],
      },
      {
        heading: "What you can do today",
        list: [
          "Notice daytime clenching: teeth should only touch when chewing — lips together, teeth apart is the resting position",
          "Soft diet during pain flares; cut food small, avoid very chewy items",
          "Warm compress on the joint, 10–15 minutes, twice daily",
          "Avoid extreme yawning and jaw-stretching party tricks",
          "If you wake with sore jaws or headaches, ask about a night guard — it protects both the joint and your tooth enamel",
        ],
      },
    ],
    takeaway:
      "A clicking, aching jaw is a medical problem with mostly simple solutions — not something to live with. If jaw pain, morning headaches or locking sound familiar, book a TMJ assessment with a specialist who treats the joint every week.",
  },
  {
    slug: "sensitive-teeth-cold-water-causes-relief",
    title: "Why Does Cold Water Make My Teeth Hurt? Sensitivity, Explained",
    excerpt:
      "That electric jolt from cold water or ice cream has a specific cause — exposed dentine — and a ladder of fixes that starts with the right toothpaste.",
    category: "General Dentistry",
    date: "2026-04-22",
    readTime: "5 min read",
    image: "/images/blog/sensitive-teeth.jpg",
    imageAlt: "Woman drinking a glass of cold water",
    intro: [
      "A sip of cold water, a spoon of ice cream, sometimes even a breath of winter air — and a sharp electric jolt shoots through a tooth. Dentine hypersensitivity is one of the most common complaints we hear in the chamber, and surveys in the dental literature suggest between one in ten and one in three adults live with it.",
      "The mechanism is simple: your enamel (or the gum that covers the root) has worn away somewhere, exposing dentine — a layer full of microscopic fluid-filled tubes that run straight to the nerve. Cold, sweet or acid makes that fluid move, and the nerve fires.",
    ],
    sections: [
      {
        heading: "How the protective layer gets lost",
        list: [
          "Brushing too hard with a stiff brush — extremely common in Bangladesh, where scrubbing harder is mistaken for cleaning better. It wears grooves in the teeth and pushes gums back off the roots.",
          "Acidic diet: soft drinks, lemon water, achar — frequent acid softens and thins enamel",
          "Gum disease and gum recession exposing root surfaces",
          "Night grinding (bruxism) flexing and chipping enamel at the gum line",
          "A cracked tooth or leaking old filling — this one masquerades as 'sensitivity' but needs actual treatment",
        ],
      },
      {
        heading: "The ladder of fixes",
        paragraphs: [
          "Start with desensitising toothpaste (potassium nitrate, stannous fluoride or similar — several brands are available in Bangladeshi pharmacies). Used twice daily for two to four weeks, these calm the nerve response or plug the exposed tubes; clinical trials consistently show meaningful relief. Switch to a soft brush and gentle circular strokes, and don't rinse the paste away after brushing — spit, don't rinse.",
          "If that isn't enough, in-chamber treatments work at the next level: fluoride varnish or desensitising agents painted onto the sensitive spots, a small tooth-coloured filling over exposed root grooves, or a night guard if grinding is the driver.",
        ],
      },
      {
        heading: "When sensitivity is a warning sign",
        paragraphs: [
          "Sensitivity that lingers for more than a few seconds after the trigger is removed, wakes you at night, or is localised to one tooth when biting is a different story — that pattern suggests deep decay, a crack, or a dying nerve, and it will not improve with toothpaste. Getting it examined early is the difference between a filling and a root canal.",
        ],
      },
    ],
    takeaway:
      "Short, sharp cold sensitivity is usually exposed dentine and responds to desensitising toothpaste and gentler brushing within weeks. Pain that lingers, throbs or focuses on one tooth is a warning — book an examination before a small problem becomes a big one.",
  },
  {
    slug: "pregnancy-oral-health-safe-dental-care",
    title: "Pregnancy & Your Teeth: Safe Dental Care for Expecting Mothers",
    excerpt:
      "Bleeding gums in pregnancy are common — and ignoring them is the real risk. What's safe, what's urgent, and why 'no dentist until delivery' is outdated advice.",
    category: "Women's Oral Health",
    date: "2026-04-05",
    readTime: "6 min read",
    image: "/images/blog/pregnancy.jpg",
    imageAlt: "Expecting mother standing outdoors",
    intro: [
      "In Bangladesh, many pregnant women are told to avoid the dentist entirely until after delivery — by family, and sometimes even by health workers. The result is nine months of untreated pain, spreading infection and bleeding gums, at exactly the time a woman's health matters most.",
      "Modern guidance from obstetric and dental bodies worldwide is the opposite: dental care is safe throughout pregnancy, and treating dental infection during pregnancy protects both mother and baby.",
    ],
    sections: [
      {
        heading: "Why gums change during pregnancy",
        paragraphs: [
          "Pregnancy hormones exaggerate the gums' response to plaque. The result — swollen, tender gums that bleed on brushing — is so common it has a name: pregnancy gingivitis, affecting well over half of expecting mothers according to CDC figures. Some women develop small benign gum lumps ('pregnancy epulis') that usually shrink after delivery.",
          "Bleeding gums are not something to wait out. Research has repeatedly found associations between serious gum disease and pregnancy complications such as preterm birth and low birth weight. While scientists still debate cause and effect, no one debates that treating gum disease in pregnancy is safe — so there is no reason to leave it.",
        ],
      },
      {
        heading: "What's safe, and when",
        list: [
          "Check-ups, cleanings and fillings: safe throughout pregnancy; the second trimester (months 4–6) is the most comfortable window",
          "Local anaesthesia (lidocaine): safe in normal doses — pregnant patients do not need to endure painful treatment",
          "Dental X-rays: with a lead apron, the dose to the baby is negligible; necessary X-rays should not be refused when infection is suspected",
          "Dental infection or swelling: treat urgently in ANY trimester — an untreated abscess is far more dangerous to a pregnancy than its treatment",
          "Purely cosmetic work (whitening, veneers): simply postpone until after delivery",
        ],
      },
      {
        heading: "A simple routine for nine months",
        paragraphs: [
          "Brush twice daily with fluoride toothpaste and clean between teeth; if morning sickness strikes, rinse with water or fluoride mouthwash after vomiting and wait 30 minutes before brushing, so you're not scrubbing acid-softened enamel. Snack smart — pregnancy grazing plus relaxed brushing is how many mothers gain two new cavities along with the baby.",
          "Tell us you are pregnant (and how far along) when you book — we plan positioning, timing and medications accordingly, and coordinate with your obstetrician when needed.",
        ],
      },
    ],
    takeaway:
      "Pregnancy is a reason to see your dentist, not to avoid one. Bleeding gums, pain or swelling during pregnancy deserve prompt, safe treatment — book a pregnancy-safe dental check-up and let us know how far along you are.",
  },
  {
    slug: "bad-breath-halitosis-causes-treatment",
    title: "Bad Breath (Halitosis): Real Causes and Fixes That Last",
    excerpt:
      "Mouthwash and supari only mask it. Around 90% of bad breath starts inside the mouth — which means your dentist can usually cure it, not just cover it.",
    category: "General Dentistry",
    date: "2026-03-18",
    readTime: "5 min read",
    image: "/images/blog/bad-breath.jpg",
    imageAlt: "Fresh mint leaves — the classic cover-up for bad breath",
    intro: [
      "Bad breath quietly damages careers, marriages and confidence — and most sufferers attack it the wrong way: mints, sprays, paan and supari after meals, mouthwash before going out. These mask the smell for minutes and change nothing.",
      "Studies of halitosis consistently find that in the vast majority of cases — often cited around 85–90% — the source is inside the mouth itself: bacteria breaking down food debris and dead cells into volatile sulphur compounds, the rotten-egg gases you can smell.",
    ],
    sections: [
      {
        heading: "Where the smell actually comes from",
        list: [
          "The back of the tongue — the single biggest source. Its rough surface holds a coating of bacteria and debris most people never clean.",
          "Gum disease — deep pockets around teeth are oxygen-poor incubators for the smelliest bacteria. Persistent bad breath plus bleeding gums almost always means periodontal disease.",
          "Food trapped around crooked teeth, under old bridges and inside deep cavities",
          "Dry mouth — saliva is the mouth's rinse cycle; less saliva (mouth breathing, some medicines, fasting hours) means more smell",
          "Less often: sinus and tonsil problems, acid reflux, uncontrolled diabetes — which is why breath that survives perfect oral care needs a medical look",
        ],
      },
      {
        heading: "The fix, step by step",
        paragraphs: [
          "Clean the tongue daily — a tongue scraper (available in any Dhaka pharmacy) or your brush, working as far back as comfortable. This single habit noticeably improves most cases within days.",
          "Then remove the reservoirs: professional scaling to clear plaque and tartar, treatment of any gum pockets, filling of open cavities, and cleaning under bridges. Combined with twice-daily brushing, cleaning between the teeth, and drinking water through the day, this treats the cause instead of renting a cover-up.",
          "Skip the supari habit — it doesn't clean anything, and areca nut carries its own serious cancer risk. Sugar-free gum after meals is a safer saliva-booster.",
        ],
      },
      {
        heading: "The test most people never do",
        paragraphs: [
          "You cannot reliably smell your own breath — the nose adapts. Lick the inside of your wrist, let it dry ten seconds, and smell; or simply ask us at your next check-up. We can identify the source in one examination, and telling a dentist about bad breath is about as embarrassing as telling a mechanic about a noise. We hear it every day, and it's fixable.",
        ],
      },
    ],
    takeaway:
      "Lasting fresh breath comes from removing the sources — tongue coating, gum pockets, trapped food, dry mouth — not masking the smell. If daily tongue cleaning and good brushing haven't fixed it in two weeks, book a check-up; the cause is almost always findable and treatable.",
  },
  {
    slug: "dental-xray-safety-digital-radiology",
    title: "Are Dental X-Rays Safe? What Digital Radiology Changed",
    excerpt:
      "A modern digital dental X-ray delivers less radiation than a day of ordinary life in Dhaka — and skipping a needed X-ray is the genuinely risky choice.",
    category: "Diagnostics",
    date: "2026-03-02",
    readTime: "5 min read",
    image: "/images/blog/xray.jpg",
    imageAlt: "Dental X-ray image showing teeth and jawbone",
    intro: [
      "Every week a patient asks us, politely and sensibly: 'Doctor, is the X-ray really necessary? Isn't radiation harmful?' It is a fair question — and the honest numbers surprise almost everyone who asks.",
      "You are exposed to natural background radiation every day of your life — from the sun, the ground, even the food you eat. A single modern intraoral dental X-ray delivers a dose comparable to less than one ordinary day of that background exposure.",
    ],
    sections: [
      {
        heading: "The numbers in perspective",
        list: [
          "A small intraoral (bitewing/periapical) X-ray: roughly 0.005 millisieverts — a fraction of one day's natural background radiation",
          "A panoramic OPG (the full-mouth sweep): still far less than a single flight from Dhaka to London exposes you to as a passenger",
          "Digital sensors — which we use at MaxFace — need dramatically less radiation than old photographic film; reductions of up to 70–80% are widely reported in the radiology literature",
          "Modern units focus a narrow beam at the jaw only, and a lead apron shields the rest of the body when indicated",
        ],
      },
      {
        heading: "What an X-ray sees that eyes cannot",
        paragraphs: [
          "More than half of every tooth is invisible to direct examination — hidden under gums, bone, or pressed against its neighbours. Decay between teeth, infection at a root tip, bone loss from gum disease, a cracked root, an impacted wisdom tooth's position against the nerve canal, cysts in the jaw: all of these are X-ray diagnoses.",
          "This is why 'no X-ray, just start treatment' is a warning sign at any clinic. Extracting a wisdom tooth without knowing its root shape, or doing a root canal without seeing the root anatomy, is guesswork performed inside your head.",
        ],
      },
      {
        heading: "Our approach at MaxFace",
        paragraphs: [
          "X-rays follow the international ALARA principle — As Low As Reasonably Achievable. We image when the picture will change the diagnosis or the treatment, never as routine revenue, and we explain what we see on the screen so you understand your own mouth. Tell us if you are pregnant; we postpone non-urgent imaging and shield appropriately when imaging is truly needed.",
          "Digital films are stored with your record, so follow-up visits can compare healing over time — and you can take your images with you at any time. They are yours.",
        ],
      },
    ],
    takeaway:
      "A justified digital dental X-ray carries a vanishingly small dose — and finds the problems that cause real harm when missed. If a tooth has been aching and you've been avoiding the clinic out of X-ray fear, book the check-up; the examination is the safe choice.",
  },
  {
    slug: "toothache-emergency-solution-bangla",
    title: "দাঁতে ব্যথা হলে ঘরে বসে কী করবেন, কখন ডাক্তারের কাছে যাবেন",
    excerpt:
      "মাঝরাতে দাঁতে তীব্র ব্যথা? আতঙ্কিত হবেন না। ঘরোয়া প্রাথমিক ব্যবস্থা, কোন ওষুধ খাবেন না, আর কোন লক্ষণ দেখলে দেরি না করে চেম্বারে যাবেন — সবকিছু সহজ ভাষায়।",
    category: "বাংলা",
    date: "2026-07-13",
    readTime: "৫ মিনিট পড়া",
    image: "/images/blog/tmj.jpg",
    imageAlt: "দাঁতের ব্যথায় গালে হাত দিয়ে থাকা একজন রোগী",
    lang: "bn",
    intro: [
      "দাঁতের ব্যথা এমন এক কষ্ট, যা না হলে বোঝা যায় না। খাওয়া যায় না, ঘুমানো যায় না, কোনো কাজে মন বসে না। আর ব্যথাটা সাধারণত আসে সবচেয়ে অসুবিধার সময়ে — রাতে, ছুটির দিনে, কিংবা জরুরি কাজের মাঝে।",
      "মনে রাখবেন, দাঁতের ব্যথা কখনো এমনি এমনি হয় না। ব্যথা মানেই ভেতরে কোনো সমস্যা আছে — হয়তো গভীর ক্ষয়, হয়তো ইনফেকশন। ব্যথা কমানো যায়, কিন্তু কারণ সারাতে হলে ডাক্তার দেখাতেই হবে।",
    ],
    sections: [
      {
        heading: "ঘরে বসে প্রাথমিক ব্যবস্থা",
        list: [
          "কুসুম গরম পানিতে আধা চামচ লবণ মিশিয়ে কুলকুচি করুন — দিনে কয়েকবার।",
          "দাঁতের ফাঁকে খাবার আটকে থাকলে আলতোভাবে পরিষ্কার করুন।",
          "গাল ফুলে গেলে বাইরে থেকে ঠান্ডা সেঁক দিন। গরম সেঁক দেবেন না — ইনফেকশন ছড়াতে পারে।",
          "প্যারাসিটামল খেতে পারেন। তবে ব্যথার জায়গায় অ্যাসপিরিন চেপে রাখবেন না — এতে মাড়ি পুড়ে যায়।",
          "ব্যথার পাশে শক্ত খাবার, খুব গরম বা খুব ঠান্ডা খাবার এড়িয়ে চলুন।",
        ],
      },
      {
        heading: "যে ভুলগুলো প্রায় সবাই করেন",
        paragraphs: [
          "অনেকে ফার্মেসি থেকে নিজে নিজে অ্যান্টিবায়োটিক কিনে খান। এটা বিপজ্জনক অভ্যাস। ভুল অ্যান্টিবায়োটিকে ইনফেকশন সারে না, বরং শরীরে ওষুধ কাজ করা বন্ধ হয়ে যায়। বিশ্ব স্বাস্থ্য সংস্থা এই অভ্যাসকে জনস্বাস্থ্যের জন্য বড় হুমকি বলেছে।",
          "আরেকটি ভুল — ব্যথা কমে গেলে ভাবা যে সমস্যা মিটে গেছে। আসলে অনেক সময় দাঁতের ভেতরের স্নায়ু মরে গেলে ব্যথা থেমে যায়, কিন্তু ইনফেকশন ভেতরে ভেতরে ছড়াতে থাকে। কয়েক মাস পর সেটাই ফোড়া হয়ে ফিরে আসে।",
        ],
      },
      {
        heading: "কখন দেরি করবেন না",
        list: [
          "গাল বা চোয়াল ফুলে গেলে",
          "জ্বর এলে, মুখ খুলতে বা গিলতে কষ্ট হলে",
          "ব্যথা দুই দিনের বেশি থাকলে",
          "আঘাত লেগে দাঁত ভেঙে বা নড়ে গেলে",
        ],
      },
    ],
    takeaway:
      "দাঁতের ব্যথায় ঘরোয়া ব্যবস্থা শুধু সাময়িক স্বস্তির জন্য — সমাধানের জন্য নয়। মালিবাগের ম্যাক্সফেস ডেন্টাল কেয়ারে প্রতিদিন সন্ধ্যা ৬টা থেকে রাত ১০টা পর্যন্ত (শুক্রবার বন্ধ) আমরা আছি। ব্যথা পুষে রাখবেন না — আজই অ্যাপয়েন্টমেন্ট নিন।",
  },
  {
    slug: "root-canal-cost-misconceptions-bangla",
    title: "রুট ক্যানেল মানেই কি অনেক ব্যথা আর অনেক খরচ? ভুল ধারণাগুলো জানুন",
    excerpt:
      "রুট ক্যানেলের নাম শুনলেই ভয়? আধুনিক চিকিৎসায় রুট ক্যানেল প্রায় ব্যথাহীন। কেন দাঁত তুলে ফেলার চেয়ে দাঁত বাঁচানো লাভজনক — সহজ হিসাবসহ।",
    category: "বাংলা",
    date: "2026-07-08",
    readTime: "৬ মিনিট পড়া",
    image: "/images/blog/root-canal.jpg",
    imageAlt: "রুট ক্যানেল চিকিৎসা চলছে একটি আধুনিক ডেন্টাল চেম্বারে",
    lang: "bn",
    intro: [
      "“রুট ক্যানেল” — এই দুটি শব্দ শুনলেই অনেকের বুক কেঁপে ওঠে। কেউ বলেন ভীষণ ব্যথার চিকিৎসা, কেউ বলেন টাকার অপচয়, দাঁত তুলে ফেলাই ভালো। অথচ দুটো ধারণাই ভুল।",
      "সত্যিটা হলো: রুট ক্যানেল করা হয় ব্যথা কমানোর জন্য, ব্যথা দেওয়ার জন্য নয়। যে দাঁতে ইনফেকশন হয়ে অসহ্য ব্যথা করছে, রুট ক্যানেলই সেই দাঁতটাকে বাঁচানোর শেষ উপায়।",
    ],
    sections: [
      {
        heading: "রুট ক্যানেল আসলে কী",
        paragraphs: [
          "দাঁতের ভেতরে থাকে নরম স্নায়ু আর রক্তনালি। ক্ষয় গভীরে পৌঁছে গেলে সেখানে জীবাণু ঢুকে ইনফেকশন হয় — তখনই তীব্র ব্যথা। রুট ক্যানেলে ডাক্তার সেই সংক্রমিত অংশ পরিষ্কার করে ভেতরটা জীবাণুমুক্ত করেন, তারপর ভরাট করে দেন। দাঁতটা আপনার মুখেই থেকে যায়, কাজও করে আগের মতো।",
          "আধুনিক অবশ করার ওষুধের কল্যাণে পুরো চিকিৎসায় সাধারণত দাঁত ফেলার চেয়ে বেশি ব্যথা লাগে না। বেশির ভাগ রোগী চিকিৎসার পর বলেন — “এত ভয় পেয়েছিলাম, অথচ কিছুই টের পাইনি!”",
        ],
      },
      {
        heading: "দাঁত তোলা সস্তা, নাকি রুট ক্যানেল?",
        paragraphs: [
          "অনেকে ভাবেন দাঁত তুলে ফেললেই খরচ বাঁচে। কিন্তু হিসাবটা পুরো করুন। তোলা দাঁতের জায়গা খালি রাখলে পাশের দাঁত হেলে পড়ে, খাবার চিবানো কষ্ট হয়, মুখের গড়ন বদলে যায়। আর খালি জায়গা পূরণ করতে ব্রিজ বা ইমপ্ল্যান্ট লাগবে — যার খরচ রুট ক্যানেলের কয়েক গুণ।",
          "নিজের আসল দাঁতের মতো ভালো আর কিছুই নেই। তাই সারা পৃথিবীর ডেন্টাল বিজ্ঞানের একটাই নীতি — যে দাঁত বাঁচানো সম্ভব, সেটা বাঁচাও।",
        ],
      },
      {
        heading: "চিকিৎসার পর যা মনে রাখবেন",
        list: [
          "রুট ক্যানেলের পর দাঁতে ক্যাপ (ক্রাউন) পরানো জরুরি — নইলে দাঁত ভেঙে যেতে পারে।",
          "এক-দুই দিন হালকা অস্বস্তি স্বাভাবিক, ওষুধে সেরে যায়।",
          "চিকিৎসা করা দাঁতে যত্ন নিলে তা বহু বছর, এমনকি সারা জীবনও টিকতে পারে।",
        ],
      },
    ],
    takeaway:
      "রুট ক্যানেল ভয়ের কিছু নয় — বরং নিজের দাঁত রক্ষার সবচেয়ে বুদ্ধিমান সিদ্ধান্ত। ম্যাক্সফেস ডেন্টাল কেয়ারে অভিজ্ঞ সার্জনের হাতে ব্যথাহীন রুট ক্যানেল করা হয়, খরচও আগে থেকে পরিষ্কার জানিয়ে দেওয়া হয়। পরামর্শের জন্য অ্যাপয়েন্টমেন্ট নিন।",
  },
  {
    slug: "bleeding-gums-warning-bangla",
    title: "ব্রাশ করলেই মাড়ি দিয়ে রক্ত পড়ে? এই সংকেত অবহেলা করবেন না",
    excerpt:
      "অনেকেই ভাবেন ব্রাশ শক্ত, তাই রক্ত পড়ে। আসল কারণ প্রায় সব সময়ই মাড়ির রোগ — যা অবহেলায় দাঁত পড়ে যাওয়া পর্যন্ত গড়াতে পারে। ডায়াবেটিস রোগীদের জন্য বাড়তি সতর্কতা।",
    category: "বাংলা",
    date: "2026-07-02",
    readTime: "৫ মিনিট পড়া",
    image: "/images/blog/gum-care.jpg",
    imageAlt: "মাড়ির পরীক্ষা করছেন একজন ডেন্টিস্ট",
    lang: "bn",
    intro: [
      "সকালে ব্রাশ করার সময় থুতুর সঙ্গে রক্ত — এ দৃশ্য বাংলাদেশের ঘরে ঘরে এতই পরিচিত যে অনেকে একে স্বাভাবিক বলেই ধরে নেন। কেউ ব্রাশ বদলান, কেউ মাজন বদলান, কেউ পাত্তাই দেন না।",
      "কিন্তু সত্যিটা মনে রাখুন: সুস্থ মাড়ি থেকে কখনো রক্ত পড়ে না। রক্ত পড়া মানেই মাড়িতে প্রদাহ শুরু হয়েছে। ভালো খবর হলো, শুরুতেই ধরা পড়লে এই রোগ পুরোপুরি সারিয়ে তোলা যায়।",
    ],
    sections: [
      {
        heading: "রক্ত পড়ার আসল কারণ",
        paragraphs: [
          "দাঁতের গোড়ায় প্রতিদিন জমে খাবারের সূক্ষ্ম আস্তরণ — প্লাক। নিয়মিত পরিষ্কার না হলে এই প্লাক শক্ত হয়ে পাথরের মতো জমে যায়, যাকে বলে টার্টার বা ক্যালকুলাস। এই জমাট জীবাণুই মাড়িতে প্রদাহ ঘটায় — মাড়ি ফুলে যায়, লাল হয়, আর সামান্য ছোঁয়াতেই রক্ত পড়ে।",
          "এই পর্যায়ের নাম জিনজিভাইটিস। চিকিৎসা না করালে প্রদাহ মাড়ির গভীরে হাড় পর্যন্ত পৌঁছে যায় — তখন দাঁত নড়তে শুরু করে। দুঃখজনক সত্য হলো, বয়স্কদের দাঁত পড়ার সবচেয়ে বড় কারণ পোকা নয়, এই মাড়ির রোগ।",
        ],
      },
      {
        heading: "ডায়াবেটিস থাকলে দ্বিগুণ সাবধান",
        paragraphs: [
          "ডায়াবেটিস আর মাড়ির রোগ একে অপরকে বাড়ায়। ডায়াবেটিস থাকলে মাড়ির ইনফেকশন সহজে সারে না, আবার মাড়ির ইনফেকশন থাকলে রক্তের সুগার নিয়ন্ত্রণে রাখা কঠিন হয়। বাংলাদেশে যেহেতু কোটির ওপরে মানুষ ডায়াবেটিসে আক্রান্ত, তাই ডায়াবেটিস রোগীদের বছরে অন্তত দুবার দাঁতের চেকআপ করানো উচিত।",
        ],
      },
      {
        heading: "সমাধান কী",
        list: [
          "স্কেলিং করান — জমে থাকা পাথর ও জীবাণু পেশাদারভাবে পরিষ্কার করা হয়। শুরুর দিকের মাড়ির রোগ এতেই সেরে যায়।",
          "দিনে দুবার নরম ব্রাশে আলতো করে ব্রাশ করুন, দাঁতের ফাঁক পরিষ্কার করুন।",
          "রক্ত পড়ে বলে ব্রাশ করা ছাড়বেন না — এতে সমস্যা আরও বাড়ে।",
          "ধূমপান ও জর্দা ছাড়ুন — তামাক মাড়ির রোগ লুকিয়ে রাখে ও দ্রুত খারাপ করে।",
        ],
      },
    ],
    takeaway:
      "মাড়ির রক্ত শরীরের সতর্কবার্তা — যত আগে ব্যবস্থা নেবেন, তত সহজে সারবে। একটি সাধারণ স্কেলিংই হতে পারে আপনার দাঁত বাঁচানোর প্রথম ধাপ। ম্যাক্সফেস ডেন্টাল কেয়ারে আজই অ্যাপয়েন্টমেন্ট নিন।",
  },
  {
    slug: "milk-teeth-care-bangla",
    title: "দুধ দাঁত তো পড়েই যাবে — এই ভুল ধারণার মাশুল দিচ্ছে আপনার সন্তান",
    excerpt:
      "শিশুর দুধ দাঁতে পোকা? “পড়ে গেলে নতুন উঠবে” ভেবে বসে থাকবেন না। দুধ দাঁতের ক্ষতি স্থায়ী দাঁতের সারি বাঁকা করে দেয়। শিশুর দাঁতের যত্নের সহজ নিয়ম।",
    category: "বাংলা",
    date: "2026-06-25",
    readTime: "৫ মিনিট পড়া",
    image: "/images/blog/milk-teeth.jpg",
    imageAlt: "হাসিমুখে দুধ দাঁত দেখাচ্ছে একটি শিশু",
    lang: "bn",
    intro: [
      "“দুধ দাঁতে পোকা হয়েছে? সমস্যা নেই, ওগুলো তো পড়েই যাবে!” — বাংলাদেশের প্রায় প্রতিটি পরিবারে এই কথা শোনা যায়। শুনতে যুক্তিসংগত মনে হলেও এটি শিশুর দাঁতের সবচেয়ে ক্ষতিকর ভুল ধারণা।",
      "দুধ দাঁত শুধু খাওয়ার জন্য নয়। এগুলো স্থায়ী দাঁতের জায়গা ধরে রাখে, কথা বলা শেখায়, শিশুর পুষ্টি নিশ্চিত করে। বিশ্বজুড়ে গবেষণা বলছে, দুধ দাঁতের অচিকিৎসিত ক্ষয় শিশুদের সবচেয়ে সাধারণ দীর্ঘমেয়াদি রোগ — হাঁপানির চেয়েও বেশি।",
    ],
    sections: [
      {
        heading: "দুধ দাঁত নষ্ট হলে কী ক্ষতি",
        list: [
          "সময়ের আগে দুধ দাঁত পড়ে গেলে পাশের দাঁত সরে এসে জায়গা বন্ধ করে দেয় — ফলে স্থায়ী দাঁত ওঠে আঁকাবাঁকা।",
          "দাঁত ব্যথায় শিশু ঠিকমতো খেতে পারে না — বাড়ন্ত বয়সে পুষ্টির ঘাটতি হয়।",
          "সামনের দাঁত না থাকলে কিছু শব্দের উচ্চারণ শিখতে সমস্যা হয়।",
          "দুধ দাঁতের গোড়ার ইনফেকশন নিচে অপেক্ষমাণ স্থায়ী দাঁতের ক্ষতি করতে পারে।",
        ],
      },
      {
        heading: "রাতের দুধই সবচেয়ে বড় শত্রু",
        paragraphs: [
          "ঘুম পাড়াতে মুখে দুধের বোতল দিয়ে রাখা, কিংবা রাতভর মিষ্টি দুধ খাওয়ানো — শিশুর সামনের দাঁতে বাদামি দাগ আর ক্ষয়ের প্রধান কারণ এটাই। ঘুমের সময় লালা কমে যায়, ফলে দুধের চিনি সারা রাত দাঁত ক্ষয় করতে থাকে।",
          "নিয়ম সহজ: ঘুমের আগে দুধ খাওয়ালে তার পর পানি খাওয়ান বা দাঁত মুছে দিন। বোতল মুখে দিয়ে ঘুমানোর অভ্যাস একদম নয়।",
        ],
      },
      {
        heading: "কোন বয়সে কী করবেন",
        list: [
          "প্রথম দাঁত ওঠার পর থেকেই নরম কাপড় বা শিশুদের ব্রাশ দিয়ে পরিষ্কার শুরু করুন।",
          "তিন বছরের কম বয়সে চালের দানার সমান, তিন বছরের পর মটরদানার সমান ফ্লুরাইড টুথপেস্ট।",
          "প্রথম জন্মদিনের মধ্যে প্রথমবার ডেন্টিস্ট দেখান — ভয় নয়, অভ্যাস তৈরির জন্য।",
          "পোকা প্রতিরোধে ফিশার সিল্যান্ট ও ফ্লুরাইড বার্নিশ — ব্যথাহীন, কয়েক মিনিটের কাজ।",
        ],
      },
    ],
    takeaway:
      "দুধ দাঁতের যত্নই স্থায়ী দাঁতের ভিত। ম্যাক্সফেস ডেন্টাল কেয়ারে শিশুদের জন্য আছে আলাদা যত্ন — ভয়হীন, বন্ধুত্বপূর্ণ পরিবেশে। আপনার সন্তানের প্রথম ডেন্টাল ভিজিটের জন্য আজই অ্যাপয়েন্টমেন্ট নিন।",
  },
  {
    slug: "wisdom-tooth-pain-bangla",
    title: "আক্কেল দাঁতের যন্ত্রণা: তুলে ফেলা কি সব সময় জরুরি?",
    excerpt:
      "আক্কেল দাঁত উঠছে আর অসহ্য ব্যথা? সব আক্কেল দাঁত তুলতে হয় না। কখন অপেক্ষা করা যায় আর কখন সার্জারিই সমাধান — জানুন একজন ম্যাক্সিলোফেসিয়াল সার্জনের চোখে।",
    category: "বাংলা",
    date: "2026-06-18",
    readTime: "৫ মিনিট পড়া",
    image: "/images/blog/wisdom-tooth.jpg",
    imageAlt: "আক্কেল দাঁতের এক্স-রে দেখছেন সার্জন",
    lang: "bn",
    intro: [
      "আঠারো থেকে পঁচিশ বছর বয়সের মধ্যে মুখের একেবারে পেছনে যে দাঁত ওঠে, সেটিই আক্কেল দাঁত। সমস্যা হলো, আমাদের চোয়ালে অনেক সময় এই দাঁতের জন্য যথেষ্ট জায়গা থাকে না। ফলে দাঁতটি আটকে যায়, বাঁকা হয়ে ওঠে, কিংবা অর্ধেক উঠে থেমে থাকে।",
      "তখনই শুরু হয় যন্ত্রণা — মাড়ি ফোলা, খাবার আটকে ইনফেকশন, পাশের দাঁতে চাপ, এমনকি কান ও মাথা পর্যন্ত ব্যথা ছড়ানো।",
    ],
    sections: [
      {
        heading: "সব আক্কেল দাঁত তুলতে হয় না",
        paragraphs: [
          "যে আক্কেল দাঁত সোজা হয়ে পুরোপুরি উঠেছে, পরিষ্কার রাখা যাচ্ছে এবং কোনো সমস্যা করছে না — সেটি তোলার দরকার নেই। নিয়মিত চেকআপে নজরে রাখলেই চলে।",
          "কিন্তু দাঁত আটকে থাকলে (ইমপ্যাক্টেড), বারবার ইনফেকশন হলে, পাশের দাঁত ক্ষয় করলে বা সিস্ট তৈরি হলে দেরি করা বিপজ্জনক। এক্স-রে বা ওপিজি দেখে সিদ্ধান্ত নেওয়া হয় — অনুমানে নয়।",
        ],
      },
      {
        heading: "সার্জারি নিয়ে ভয়? জেনে রাখুন",
        list: [
          "আধুনিক লোকাল অ্যানেসথেসিয়ায় পুরো প্রক্রিয়া ব্যথাহীন — শুধু চাপ অনুভব হয়।",
          "জটিল ও আটকে থাকা দাঁত তোলা একজন ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জনের বিশেষ প্রশিক্ষণের কাজ।",
          "সঠিক নিয়ম মানলে দুই-তিন দিনেই স্বাভাবিক জীবনে ফেরা যায়।",
          "তোলার পর ২৪ ঘণ্টা কুলকুচি নয়, স্ট্র দিয়ে পান নয়, ধূমপান নয় — এতে ক্ষত দ্রুত শুকায়।",
        ],
      },
      {
        heading: "অপেক্ষা করলে কী ঝুঁকি",
        paragraphs: [
          "“ব্যথা কমে গেছে, আর যাব না” — এই সিদ্ধান্তে সমস্যা মেটে না, শুধু পিছিয়ে যায়। আটকে থাকা দাঁতের ইনফেকশন বারবার ফিরে আসে এবং প্রতিবার আগের চেয়ে খারাপ হয়। সময়মতো তুললে যে সার্জারি সহজ, দেরিতে সেটাই জটিল হয়ে দাঁড়ায়।",
        ],
      },
    ],
    takeaway:
      "আক্কেল দাঁতের সিদ্ধান্ত নিন এক্স-রে দেখে, বিশেষজ্ঞের পরামর্শে। ম্যাক্সফেস ডেন্টাল কেয়ারে এমএস ডিগ্রিধারী ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জন ডা. যোষিতা মজুমদার নিজে আক্কেল দাঁতের সার্জারি করেন। পরীক্ষা করাতে অ্যাপয়েন্টমেন্ট নিন।",
  },
  {
    slug: "paan-jorda-mouth-cancer-bangla",
    title: "পান-জর্দা-গুলে মুখের ক্যান্সার: যে সাদা দাগ অবহেলা করা মৃত্যুর ঝুঁকি",
    excerpt:
      "বাংলাদেশ মুখের ক্যান্সারে বিশ্বের শীর্ষ ঝুঁকির দেশগুলোর একটি — প্রধান কারণ পান, জর্দা, সুপারি, গুল। মুখের ভেতরের কোন পরিবর্তন দেখলে আজই ডাক্তার দেখাবেন।",
    category: "বাংলা",
    date: "2026-06-10",
    readTime: "৬ মিনিট পড়া",
    image: "/images/blog/oral-cancer.jpg",
    imageAlt: "মুখের ভেতর পরীক্ষা করছেন চিকিৎসক",
    lang: "bn",
    intro: [
      "খাওয়ার পর এক খিলি পান, সঙ্গে একটু জর্দা — আমাদের দেশে এটা আতিথেয়তার অংশ, বহু পরিবারের রোজকার অভ্যাস। কিন্তু এই অভ্যাসের মূল্য যে কত বড় হতে পারে, তা আমরা চেম্বারে প্রতি সপ্তাহেই দেখি।",
      "আন্তর্জাতিক ক্যান্সার গবেষণা সংস্থা (IARC) পান-সুপারি-জর্দাকে সর্বোচ্চ শ্রেণির ক্যান্সার সৃষ্টিকারী উপাদান হিসেবে চিহ্নিত করেছে — সিগারেটের সমান শ্রেণিতে। জর্দা ছাড়া শুধু সুপারিও এই তালিকায় আছে।",
    ],
    sections: [
      {
        heading: "মুখে যে পরিবর্তনগুলো বিপদের সংকেত",
        list: [
          "গালে, জিভে বা মাড়িতে সাদা বা লাল দাগ (ছোপ), যা মুছে যায় না",
          "দুই সপ্তাহেও না শুকানো ঘা",
          "মুখের ভেতরে চাকা বা শক্ত পিণ্ড",
          "মুখ আগের মতো হা করতে না পারা, ভেতরে জ্বালাপোড়া — ঝাল খেতে না পারা",
          "কারণ ছাড়া গলায় বা ঘাড়ে ফোলা",
        ],
      },
      {
        heading: "আগে ধরা পড়লেই বাঁচার সম্ভাবনা",
        paragraphs: [
          "মুখের ক্যান্সারের নিষ্ঠুর দিক হলো, শুরুর দিকে এতে ব্যথা থাকে না। ব্যথাহীন একটি সাদা দাগকে মানুষ বছরের পর বছর অবহেলা করে — আর যখন ব্যথা শুরু হয়, তখন অনেক দেরি হয়ে যায়।",
          "অথচ শুরুতে ধরা পড়লে মুখের ক্যান্সার অনেকাংশেই নিরাময়যোগ্য। সন্দেহজনক দাগ থেকে ছোট্ট একটি টিস্যু নিয়ে পরীক্ষা (বায়োপসি) করলেই নিশ্চিত হওয়া যায় — এটি চেম্বারেই করা সম্ভব, ভয়ের কিছু নেই।",
        ],
      },
      {
        heading: "আজ থেকেই যা করবেন",
        list: [
          "পান-জর্দা-গুল-সাদাপাতা ধাপে ধাপে ছাড়ুন — একবারে না পারলে পরিমাণ কমিয়ে আনুন।",
          "মাসে একবার আয়নার সামনে নিজের মুখের ভেতরটা দেখুন — গাল, জিভের নিচ, তালু।",
          "বছরে অন্তত একবার ডেন্টিস্ট দিয়ে পুরো মুখ পরীক্ষা করান — দুই মিনিটের স্ক্রিনিং জীবন বাঁচাতে পারে।",
          "পরিবারের মুরুব্বিদেরও পরীক্ষার জন্য নিয়ে আসুন — দীর্ঘদিনের অভ্যাসে ঝুঁকি সবচেয়ে বেশি তাঁদেরই।",
        ],
      },
    ],
    takeaway:
      "মুখের ভেতরের সাদা বা লাল দাগ, না শুকানো ঘা — এগুলো অপেক্ষার জিনিস নয়। ম্যাক্সফেস ডেন্টাল কেয়ারে ওরাল ক্যান্সার স্ক্রিনিং ও বায়োপসি দুটোই হয়, ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জনের তত্ত্বাবধানে। আজই পরীক্ষা করিয়ে নিশ্চিন্ত হোন।",
  },
  {
    slug: "teeth-whitening-safe-way-bangla",
    title: "দাঁত সাদা করতে লেবু-লবণ ঘষছেন? উজ্জ্বল হাসির নিরাপদ উপায় জানুন",
    excerpt:
      "ফেসবুকের টোটকায় দাঁত সাদা হয় না, বরং এনামেল ক্ষয়ে দাঁত আরও হলদে হয়ে যায়। স্কেলিং-পলিশিং থেকে প্রফেশনাল হোয়াইটেনিং — কোনটা কার জন্য।",
    category: "বাংলা",
    date: "2026-06-03",
    readTime: "৫ মিনিট পড়া",
    image: "/images/blog/whitening.jpg",
    imageAlt: "উজ্জ্বল সাদা দাঁতের হাসি",
    lang: "bn",
    intro: [
      "বিয়ে, চাকরির ইন্টারভিউ কিংবা ছবি তোলার আগে সবাই চান ঝকঝকে সাদা হাসি। আর ইন্টারনেট খুললেই মেলে শত টোটকা — লেবুতে লবণ মাখিয়ে ঘষুন, বেকিং সোডা লাগান, কাঠকয়লার গুঁড়ায় মাজুন।",
      "একজন ডেন্টিস্ট হিসেবে সত্যিটা বলি: এসব টোটকা দাঁতের এনামেল ঘষে তুলে ফেলে। প্রথম কয়েক দিন দাঁত একটু সাদা দেখালেও এনামেল পাতলা হয়ে ভেতরের হলদে স্তর বেরিয়ে আসে — দাঁত হয়ে যায় আগের চেয়েও হলদে, সঙ্গে শিরশির ফ্রি। আর এনামেল একবার গেলে ফিরে আসে না।",
    ],
    sections: [
      {
        heading: "আগে জানুন দাঁত হলদে কেন",
        paragraphs: [
          "বেশির ভাগ বাঙালির দাঁতের হলদে ভাব আসে চা, পান আর তামাকের দাগ থেকে — এই দাগ দাঁতের ওপরের স্তরে জমে। এই ধরনের দাগের জন্য দামি হোয়াইটেনিং দরকারই নেই; একটি ভালো স্কেলিং ও পলিশিংয়েই দাঁত ফিরে পায় তার আসল রং। খরচও সবচেয়ে কম।",
          "আর যদি দাঁতের নিজের রংই গাঢ় হয়, তখন দরকার প্রফেশনাল হোয়াইটেনিং — ডেন্টিস্টের তত্ত্বাবধানে নিরাপদ মাত্রার ব্লিচিং জেল দিয়ে। গবেষণায় বারবার প্রমাণিত, সঠিক নিয়মে করা হলে এতে এনামেলের ক্ষতি হয় না।",
        ],
      },
      {
        heading: "কোনটা আপনার জন্য",
        list: [
          "চা-পানের দাগ, কালচে ছোপ → স্কেলিং ও পলিশিং",
          "সামগ্রিকভাবে উজ্জ্বল রং চাই → চেম্বারে প্রফেশনাল হোয়াইটেনিং",
          "রুট ক্যানেল করা কালচে দাঁত → ইন্টারনাল ব্লিচিং বা ভিনিয়ার",
          "আঁকাবাঁকা বা ফাঁকা দাঁতসহ পুরো হাসি বদলাতে চাইলে → স্মাইল মেকওভার পরামর্শ",
        ],
      },
      {
        heading: "সাদা দাঁত ধরে রাখার উপায়",
        paragraphs: [
          "হোয়াইটেনিংয়ের পর প্রথম কয়েক দিন চা-কফি কম, পান-তামাক একেবারেই নয়। প্রতিদিন দুবেলা ব্রাশ, আর বছরে একবার পলিশিং — এতেই উজ্জ্বলতা টিকে থাকে বছরের পর বছর। মনে রাখবেন, সাদা দাঁতের চেয়ে জরুরি সুস্থ দাঁত — সুস্থ দাঁত এমনিতেই সুন্দর।",
        ],
      },
    ],
    takeaway:
      "ঘরোয়া টোটকায় এনামেল হারাবেন না — যা নিরাপদে সম্ভব, তা ডেন্টিস্টের চেম্বারেই করুন। ম্যাক্সফেস ডেন্টাল কেয়ারে স্কেলিং-পলিশিং ও প্রফেশনাল হোয়াইটেনিং দুটোই হয়। আপনার হাসির জন্য কোনটা সঠিক, জানতে অ্যাপয়েন্টমেন্ট নিন।",
  },
  {
    slug: "diabetes-dental-care-bangla",
    title: "ডায়াবেটিস থাকলে দাঁত ও মাড়ির যত্নে যে ৫টি নিয়ম মানতেই হবে",
    excerpt:
      "সুগার নিয়ন্ত্রণে রাখলেই কি যথেষ্ট? ডায়াবেটিস রোগীর মাড়ির রোগ, ইনফেকশন ও ক্ষত শুকানোর ঝুঁকি সাধারণের চেয়ে অনেক বেশি। দাঁত তোলার আগে-পরে যা জানা জরুরি।",
    category: "বাংলা",
    date: "2026-05-28",
    readTime: "৫ মিনিট পড়া",
    image: "/images/blog/checkups.jpg",
    imageAlt: "ডায়াবেটিস রোগীর দাঁতের চেকআপ চলছে",
    lang: "bn",
    intro: [
      "বাংলাদেশে প্রতি দশজন প্রাপ্তবয়স্কের একজনের বেশি ডায়াবেটিসে আক্রান্ত — এবং তাঁদের অনেকেই জানেন না যে ডায়াবেটিস শুধু রক্তে নয়, মুখেও প্রভাব ফেলে।",
      "উচ্চ সুগার মাড়ির সূক্ষ্ম রক্তনালিগুলোকে দুর্বল করে দেয়, লালার সুরক্ষা কমিয়ে দেয়, আর জীবাণুর সঙ্গে লড়াইয়ের শক্তি কেড়ে নেয়। ফলাফল: মাড়ির রোগ, মুখ শুকিয়ে যাওয়া, ছত্রাক সংক্রমণ আর ক্ষত শুকাতে দেরি — সবকিছুর ঝুঁকিই বেশি।",
    ],
    sections: [
      {
        heading: "দুই দিকের রাস্তা: সুগার ও মাড়ি",
        paragraphs: [
          "বিষয়টা একমুখী নয়। ডায়াবেটিস মাড়ির রোগ বাড়ায়, আবার মাড়ির ইনফেকশন শরীরে প্রদাহ তৈরি করে সুগারকে আরও অনিয়ন্ত্রিত করে তোলে। গবেষণায় দেখা গেছে, মাড়ির রোগের সঠিক চিকিৎসা করালে অনেক রোগীর HbA1c পর্যন্ত খানিকটা কমে আসে।",
          "অর্থাৎ দাঁতের যত্ন ডায়াবেটিস চিকিৎসারই অংশ — বাড়তি বিলাসিতা নয়।",
        ],
      },
      {
        heading: "৫টি অবশ্য পালনীয় নিয়ম",
        list: [
          "বছরে অন্তত দুবার ডেন্টাল চেকআপ ও প্রয়োজনে স্কেলিং করান।",
          "মাড়ি দিয়ে রক্ত পড়া, ফোলা বা মুখে ঘা — এক সপ্তাহের বেশি থাকলেই ডাক্তার দেখান।",
          "যেকোনো দাঁতের চিকিৎসার আগে ডাক্তারকে আপনার ডায়াবেটিস ও ওষুধের কথা জানান।",
          "দাঁত তোলা বা সার্জারির আগে সুগার নিয়ন্ত্রণে আনুন — ক্ষত শুকানো অনেক সহজ হবে।",
          "মুখ শুকিয়ে গেলে বারবার পানি পান করুন; চিনিমুক্ত চুইংগাম লালা বাড়াতে সাহায্য করে।",
        ],
      },
      {
        heading: "দাঁত তোলার আগে যা মনে রাখবেন",
        paragraphs: [
          "নিয়ন্ত্রিত ডায়াবেটিসে দাঁত তোলা সম্পূর্ণ নিরাপদ — শুধু চিকিৎসককে আগে জানাতে হবে। খালি পেটে আসবেন না, সকালের ওষুধ বা ইনসুলিন নিয়মমতো নিন এবং সাম্প্রতিক সুগার রিপোর্ট সঙ্গে রাখুন। প্রয়োজনে আপনার মেডিসিন চিকিৎসকের সঙ্গে সমন্বয় করেই আমরা পরিকল্পনা করি।",
        ],
      },
    ],
    takeaway:
      "ডায়াবেটিস নিয়ন্ত্রণের হিসাবে দাঁত ও মাড়িকে বাদ দেবেন না — দুটো একসঙ্গে চলে। ম্যাক্সফেস ডেন্টাল কেয়ারে ডায়াবেটিস রোগীদের জন্য বিশেষ সতর্কতায় চিকিৎসা করা হয়। আপনার পরবর্তী চেকআপের অ্যাপয়েন্টমেন্ট আজই নিন।",
  },
  {
    slug: "pregnancy-dental-treatment-bangla",
    title: "গর্ভাবস্থায় দাঁতের চিকিৎসা কি নিরাপদ? মায়েদের সবচেয়ে বড় প্রশ্নের উত্তর",
    excerpt:
      "“বাচ্চা হওয়ার আগে দাঁতের ডাক্তার নয়” — এই পুরোনো ধারণা মা ও শিশু দুজনের জন্যই ক্ষতিকর। গর্ভাবস্থায় কোন চিকিৎসা কখন নিরাপদ, পরিষ্কার করে জানুন।",
    category: "বাংলা",
    date: "2026-05-20",
    readTime: "৬ মিনিট পড়া",
    image: "/images/blog/pregnancy.jpg",
    imageAlt: "অন্তঃসত্ত্বা মা — গর্ভাবস্থায় দাঁতের যত্ন",
    lang: "bn",
    intro: [
      "গর্ভবতী মায়ের দাঁতে ব্যথা, মাড়ি ফুলে রক্ত পড়ছে — কিন্তু পরিবারের সবাই বলছেন, “এখন দাঁতের চিকিৎসা করানো যাবে না, বাচ্চার ক্ষতি হবে।” ফলে মা নয় মাস কষ্ট সহ্য করেন, ইনফেকশন বাড়তে থাকে।",
      "অথচ আধুনিক চিকিৎসাবিজ্ঞান পুরো উল্টো কথা বলে: গর্ভাবস্থায় দাঁতের চিকিৎসা নিরাপদ, এবং মুখের ইনফেকশন ফেলে রাখাই বরং মা ও গর্ভের শিশুর জন্য ঝুঁকি।",
    ],
    sections: [
      {
        heading: "গর্ভাবস্থায় মাড়ি কেন ফুলে যায়",
        paragraphs: [
          "হরমোনের পরিবর্তনে গর্ভাবস্থায় মাড়ি স্বাভাবিকের চেয়ে বেশি স্পর্শকাতর হয়ে পড়ে — সামান্য প্লাকেই ফুলে যায়, রক্ত পড়ে। একে বলে প্রেগন্যান্সি জিনজিভাইটিস; অর্ধেকের বেশি গর্ভবতী মায়ের এটি হয়।",
          "গবেষণায় মাড়ির গুরুতর রোগের সঙ্গে সময়ের আগে জন্ম ও কম ওজনের শিশুর সম্পর্ক পাওয়া গেছে। তাই মাড়ির যত্ন গর্ভকালীন যত্নেরই অংশ।",
        ],
      },
      {
        heading: "কোন চিকিৎসা কখন নিরাপদ",
        list: [
          "চেকআপ, স্কেলিং, ফিলিং — পুরো গর্ভাবস্থায়ই নিরাপদ; সবচেয়ে আরামদায়ক সময় ৪ থেকে ৬ মাস।",
          "দাঁত অবশ করার ইনজেকশন (লিডোকেইন) — নিরাপদ; ব্যথা সহ্য করার কোনো দরকার নেই।",
          "ইনফেকশন বা ফোড়া — যেকোনো মাসেই দ্রুত চিকিৎসা করান; ফেলে রাখা ইনফেকশনই আসল বিপদ।",
          "এক্স-রে — জরুরি হলে লেড অ্যাপ্রন পরে করা যায়; শিশুর ওপর প্রভাব নগণ্য।",
          "হোয়াইটেনিং বা শুধু সৌন্দর্যের চিকিৎসা — এগুলোই বরং ডেলিভারির পরে করুন।",
        ],
      },
      {
        heading: "নয় মাসের সহজ রুটিন",
        paragraphs: [
          "দিনে দুবার ফ্লুরাইড পেস্টে ব্রাশ করুন। বমির পর সঙ্গে সঙ্গে ব্রাশ নয় — আগে পানি দিয়ে কুলকুচি করে আধা ঘণ্টা অপেক্ষা করুন, কারণ বমির অ্যাসিডে নরম হয়ে থাকা এনামেল তখন ঘষলে ক্ষয়ে যায়।",
          "আর চেম্বারে এসে প্রথমেই জানান আপনি কত মাসের অন্তঃসত্ত্বা — বসার ভঙ্গি থেকে ওষুধ, সবকিছু সেই অনুযায়ীই পরিকল্পনা করা হবে।",
        ],
      },
    ],
    takeaway:
      "গর্ভাবস্থা দাঁতের ডাক্তার এড়ানোর সময় নয় — বরং বাড়তি যত্নের সময়। ম্যাক্সফেস ডেন্টাল কেয়ারে একজন নারী চিকিৎসকের কাছে নিশ্চিন্তে চিকিৎসা নিন। অ্যাপয়েন্টমেন্টের সময় আপনার গর্ভাবস্থার কথা জানাতে ভুলবেন না।",
  },
  {
    slug: "scaling-myths-bangla",
    title: "স্কেলিং করালে কি দাঁত পাতলা হয়ে যায়, ফাঁকা হয়ে যায়? জানুন আসল সত্য",
    excerpt:
      "“স্কেলিং করলে দাঁত ক্ষয়ে যায়, শিরশির করে, ফাঁক বেড়ে যায়” — বাংলাদেশের সবচেয়ে প্রচলিত ডেন্টাল ভুল ধারণা। বিজ্ঞান কী বলে, শুনুন।",
    category: "বাংলা",
    date: "2026-05-12",
    readTime: "৫ মিনিট পড়া",
    image: "/images/blog/hygiene.jpg",
    imageAlt: "স্কেলিংয়ের পর ঝকঝকে পরিষ্কার দাঁত",
    lang: "bn",
    intro: [
      "“ভাই, স্কেলিং করাবেন না — দাঁত পাতলা হয়ে যাবে, ফাঁকা ফাঁকা লাগবে!” ডাক্তার স্কেলিংয়ের পরামর্শ দিলে রোগীর আত্মীয়-প্রতিবেশী মিলে এই ভয়টাই দেখান। ফল? মাড়ির রোগ বাড়তে বাড়তে দাঁত নড়ে যাওয়ার পর রোগী চেম্বারে আসেন।",
      "চলুন ভয়টাকে বিজ্ঞানের আলোয় দেখি।",
    ],
    sections: [
      {
        heading: "স্কেলিংয়ে আসলে কী পরিষ্কার হয়",
        paragraphs: [
          "দাঁতের গোড়ায় মাসের পর মাস জমতে থাকে শক্ত পাথরের মতো টার্টার — যা ব্রাশে ওঠে না। স্কেলিং মেশিনের সূক্ষ্ম কম্পনে শুধু এই জমাট পাথর আর দাগই ওঠে; দাঁতের এনামেল কাটার ক্ষমতাই এই যন্ত্রের নেই। বিশ্বজুড়ে কোটি কোটি মানুষের ওপর ব্যবহৃত, গবেষণায় প্রমাণিত নিরাপদ পদ্ধতি এটি।",
        ],
      },
      {
        heading: "তাহলে ফাঁকা লাগে কেন, শিরশির করে কেন",
        paragraphs: [
          "উত্তরটা মজার: স্কেলিংয়ের পর যে ফাঁক দেখা যায়, সেই ফাঁক আগে থেকেই ছিল — পাথরে ঢাকা ছিল বলে চোখে পড়েনি। পাথর সরার পর আসল অবস্থাটা দেখা যায় মাত্র। দোষটা স্কেলিংয়ের নয়, দোষ সেই পাথরের, যা এতদিন মাড়িকে সরিয়ে জায়গা দখল করে ছিল।",
          "আর হালকা শিরশির? পাথরের আবরণ সরে যাওয়ায় দাঁতের গোড়া কয়েক দিন একটু সংবেদনশীল থাকে — সাধারণত এক-দুই সপ্তাহে নিজেই সেরে যায়। প্রয়োজনে সেনসিটিভিটি টুথপেস্ট ব্যবহার করলেই যথেষ্ট।",
        ],
      },
      {
        heading: "স্কেলিং না করালে কী হয়",
        list: [
          "জমে থাকা টার্টারের জীবাণু মাড়ির প্রদাহ বাড়াতেই থাকে",
          "মাড়ি ধীরে ধীরে দাঁতের গোড়া থেকে সরে যায়, হাড় ক্ষয় হয়",
          "মুখে দুর্গন্ধ স্থায়ী হয়ে যায়",
          "শেষ পরিণতি: সুস্থ দাঁতও নড়ে গিয়ে পড়ে যায় — যা আর ফেরানো যায় না",
        ],
      },
    ],
    takeaway:
      "স্কেলিং দাঁত ক্ষয় করে না — বরং দাঁতকে অকালে পড়ে যাওয়া থেকে বাঁচায়। বছরে এক-দুবার স্কেলিংই মাড়ির রোগের সবচেয়ে সস্তা বিমা। ম্যাক্সফেস ডেন্টাল কেয়ারে আধুনিক যন্ত্রে ব্যথাহীন স্কেলিং করাতে আজই অ্যাপয়েন্টমেন্ট নিন।",
  },
  {
    slug: "denture-care-cleaning-fit-and-replacement",
    title: "Denture Care 101: Cleaning, Fit, and Knowing When to Replace Them",
    excerpt:
      "A denture that isn't cleaned or checked properly can cause the very gum and bone problems it was meant to fix. Here's how to keep dentures comfortable, hygienic, and lasting as long as they should.",
    category: "Restorative Dentistry",
    date: "2026-07-14",
    readTime: "5 min read",
    image: "/images/blog/implants.jpg",
    imageAlt: "Close-up of a denture being cleaned in a glass of water",
    intro: [
      "A denture replaces missing teeth, but it is not a 'fit once, forget forever' device. Gums and jawbone keep changing shape even after teeth are gone, and a denture that isn't cleaned or checked regularly can quietly cause the sore spots, bad breath, and bone loss it was meant to prevent.",
      "The WHO's Global Oral Health Status Report lists untreated tooth loss among the most widespread oral health burdens worldwide, especially past middle age — exactly the group that relies most on dentures. Most of the discomfort people accept as 'normal for dentures' — clicking, slipping while eating, a burning feeling on the gums — is actually a sign the denture needs attention, not something to live with.",
    ],
    sections: [
      {
        heading: "Cleaning a denture properly",
        paragraphs: [
          "A denture should come out and be brushed after every meal, using a soft brush and plain soap or a denture-specific cleanser — never regular toothpaste, which is abrasive enough to scratch the acrylic and give bacteria more places to hide.",
          "Overnight, dentures should sit in water or a mild denture-soaking solution, not wrapped in tissue or left dry, which can warp the material and ruin the fit.",
        ],
        list: [
          "Rinse after eating to remove food particles before they harden into plaque",
          "Brush daily with a soft brush — never a hard-bristled one",
          "Soak overnight; never let a denture dry out completely",
          "Clean the gums and tongue too, even with no natural teeth left",
        ],
      },
      {
        heading: "Why the fit changes over time",
        paragraphs: [
          "Once teeth are removed, the jawbone beneath the gums slowly resorbs because it no longer receives the chewing pressure that used to keep it stimulated. This is a gradual, permanent process — which means a denture that fit perfectly on day one will loosen over the following months and years, not because it was made badly, but because the gum and bone underneath have changed shape.",
          "A loose denture is not just uncomfortable. It rubs against the gums, and constant friction from an ill-fitting denture is one of the most common causes of mouth ulcers and, over years, has been linked to chronic irritation of the oral tissue.",
        ],
      },
      {
        heading: "Warning signs it needs a dentist's attention",
        list: [
          "Sore spots or ulcers that don't heal within a few days",
          "Visible clicking, or the denture shifting while talking or chewing",
          "Difficulty chewing food that used to be easy",
          "A persistent bad taste or smell even after cleaning",
          "Cracks, chips, or a tooth that has come loose from the base",
        ],
      },
      {
        heading: "How long does a denture last?",
        paragraphs: [
          "Most full or partial dentures need a professional reline (an adjustment to the fit, without replacing the teeth) every one to two years as the gums change shape, and a full replacement roughly every five to seven years. Trying to fix a poor fit at home with over-the-counter adhesive is a temporary patch — it does not stop the underlying bone loss, and using too much can mask a fit problem that is getting worse.",
        ],
      },
    ],
    takeaway:
      "A denture is a long-term relationship with your dentist, not a one-time purchase. Book a fit check with Maxface Dental Care every year — catching a loose denture early is far easier than treating the sore gums or bone loss it leaves behind.",
  },
  {
    slug: "dental-emergency-first-aid-before-the-chamber",
    title: "Dental Emergency First Aid: What to Do Before You Reach the Chamber",
    excerpt:
      "A knocked-out tooth, a swollen cheek at midnight, a filling that falls out mid-meal — what you do in the first few minutes can decide whether a tooth is saved. A practical first-aid guide for the most common dental emergencies.",
    category: "Patient Guide",
    date: "2026-07-15",
    readTime: "6 min read",
    image: "/images/blog/tmj.jpg",
    imageAlt: "Person holding their cheek in pain from a dental emergency",
    intro: [
      "Dental emergencies rarely happen during clinic hours. A tooth gets knocked out at a football match, a crown comes off mid-meal, or a dull ache turns into a swollen cheek at 2 a.m. What you do in the first few minutes — before you can reach a dentist — often decides whether a tooth can be saved at all.",
      "None of this replaces an emergency visit; it only buys time and prevents things from getting worse until you can get to the chamber.",
    ],
    sections: [
      {
        heading: "A tooth knocked out completely",
        paragraphs: [
          "The International Association of Dental Traumatology's guidelines are clear: a permanent tooth knocked clean out of its socket has the best chance of survival when replanted within 5 minutes, and the odds fall sharply the longer it stays dry outside the mouth — which is why storing it correctly while you travel to the chamber matters as much as speed.",
        ],
        list: [
          "Pick the tooth up by the crown (the chewing surface), never the root",
          "If it's dirty, rinse it briefly in milk or clean water — do not scrub it",
          "Try to gently place it back in its socket facing the right way and bite down softly on a clean cloth to hold it",
          "If it can't go back in, keep it in a cup of milk (not water) and go straight to the chamber",
          "A baby (milk) tooth should never be reinserted — leave it out and see a dentist",
        ],
      },
      {
        heading: "Severe toothache or facial swelling",
        paragraphs: [
          "Rinse with warm salt water and gently floss around the painful tooth to rule out trapped food. A cold compress on the outside of the cheek reduces swelling and pain; never apply heat, and never place an aspirin directly against the gum — it can burn the tissue.",
          "Facial swelling, especially if it is spreading toward the eye or throat, or comes with a fever or difficulty swallowing, is not something to wait out overnight — that combination can signal a spreading infection and needs same-day attention.",
        ],
      },
      {
        heading: "A broken, chipped, or lost filling/crown",
        paragraphs: [
          "Save any broken piece if you can find it. Keep the area clean, and if the tooth is now sharp or sensitive, a small piece of sugar-free chewing gum pressed over the gap (never regular glue) can protect it temporarily until it's fixed.",
        ],
      },
      {
        heading: "What to always avoid",
        list: [
          "Do not ignore swelling that is spreading rather than settling",
          "Do not put aspirin or any tablet directly on the gum or tooth",
          "Do not use superglue or DIY fixes on a loose crown or filling",
          "Do not delay a knocked-out tooth — every minute outside the mouth lowers the chance of saving it",
        ],
      },
    ],
    takeaway:
      "Dental emergencies are rarely convenient, but quick, correct first aid in the first few minutes can be the difference between saving a tooth and losing it. Save Maxface Dental Care's number for emergencies, not just routine appointments — a same-day call is what actually saves a tooth.",
  },
  {
    slug: "recurring-mouth-ulcers-causes-treatment",
    title: "Mouth Ulcers That Keep Coming Back: Causes, Home Care and When to Worry",
    excerpt:
      "A canker sore usually heals on its own in two weeks — but jhal food, hot cha, sharp teeth and exam-season stress make many people in Bangladesh get them again and again. Here's what actually helps, and when it's not 'just an ulcer.'",
    category: "General Dentistry",
    date: "2026-07-16",
    readTime: "5 min read",
    image: "/images/blog/checkups.jpg",
    imageAlt: "Dentist reviewing a dental X-ray with a patient in the chair",
    intro: [
      "Almost everyone in Bangladesh has had a mouth ulcer (aphthous ulcer) — a small, painful sore inside the cheek, lip or under the tongue that makes even sipping cha uncomfortable. Most heal on their own within one to two weeks, but for many patients they come back again and again, sometimes every month.",
      "At Maxface Dental Care, recurring mouth ulcers are one of our most common complaints — especially during exam season, the hottest months, and Ramadan. The good news: most causes are simple to find and fix once you know what to look for.",
    ],
    sections: [
      {
        heading: "What's actually causing your ulcer",
        list: [
          "A sharp, broken tooth or the rough edge of an old filling constantly rubbing the same spot on your cheek or tongue",
          "Very hot cha or spicy, acidic food — jhal curry, tetul (tamarind), lebu (lime) — irritating an already sensitive mouth",
          "Accidentally biting your cheek while eating quickly, or a rough spot on dentures or braces",
          "Stress and lack of sleep, which is why ulcers often cluster around exams, deadlines and Ramadan fasting",
          "Low iron, vitamin B12 or folate — deficiencies that national nutrition surveys show are common in Bangladesh, particularly among women",
          "Toothpaste containing sodium lauryl sulfate (SLS), a foaming agent that irritates the mouth's lining in some people",
        ],
      },
      {
        heading: "What actually helps it heal",
        paragraphs: [
          "Most ulcers just need time and less irritation — you cannot cure one overnight, but you can stop making it worse.",
        ],
        list: [
          "Rinse with warm salt water (half a teaspoon of salt in a glass of lukewarm water), two to three times a day",
          "Avoid jhal, very hot food and drinks, and acidic fruits like tetul or lebu until it heals",
          "Switch temporarily to an SLS-free toothpaste if ulcers are frequent",
          "A dab of honey or an over-the-counter oral gel can soothe the area — but a sore that keeps forming a thick coating that won't rinse away needs a dentist's look, not a home remedy",
          "Stop probing it with your tongue or fingernail — it only delays healing",
        ],
      },
      {
        heading: "When it's not 'just an ulcer'",
        paragraphs: [
          "A normal aphthous ulcer is painful early and heals within two weeks. Two patterns should never be waited out.",
        ],
        list: [
          "An ulcer that appears in the exact same spot every time — that's not bad luck, it's a sharp tooth or filling edge that needs smoothing, and it will keep recurring until it's fixed.",
          "Any ulcer or patch lasting longer than two to three weeks — especially if it is painless, feels thick or hard-edged, or you use paan, zarda or tobacco — needs a professional oral examination, not more salt water.",
        ],
      },
      {
        heading: "Preventing the next one",
        paragraphs: [
          "If ulcers keep returning, look for the pattern instead of treating each one separately. A dental check-up can find and smooth the sharp tooth or filling edge causing repeat trauma, adjust a denture or brace that's rubbing, and check whether your toothpaste is the trigger. If a deficiency is suspected, your dentist can point you toward a simple blood test rather than guessing.",
        ],
      },
    ],
    takeaway:
      "A mouth ulcer that heals within two weeks and never returns in the same spot is normal — one that keeps coming back or won't heal is your mouth asking for an exam, not more salt water. Book a check-up at Maxface Dental Care and let us find the actual cause.",
  },
  {
    slug: "jaw-fracture-facial-injury-road-accident-bangladesh",
    title: "Jaw Fracture After a Road Accident: What to Do in the First Hour",
    excerpt:
      "A fall from a motorbike or a crowded bus can fracture the jaw or cheekbone — and the first hour of first aid often decides how smooth the recovery is. Here's what to do before you reach a surgeon.",
    category: "Oral Surgery",
    date: "2026-07-20",
    readTime: "6 min read",
    image: "/images/blog/xray.jpg",
    imageAlt: "Dental X-ray image used to assess jaw and facial bone structure",
    intro: [
      "Dhaka's roads are unforgiving — potholed lanes, overloaded buses, and motorbikes weaving through traffic all add up to a steady stream of facial injuries in our chamber. A fall from a bike, a collision at a rickshaw crossing, or being struck while crossing the road can fracture the jawbone or cheekbone, not just cut the skin.",
      "As an Oral & Maxillofacial Surgery practice, treating these injuries is part of our daily work. What a patient (or the people around them) does in the first hour after the accident — before reaching a surgeon — genuinely affects how the healing goes.",
    ],
    sections: [
      {
        heading: "Signs your jaw or facial bones may be fractured",
        list: [
          "Your upper and lower teeth no longer meet the way they used to when you bite down",
          "Pain, swelling or stiffness that makes it hard to open your mouth fully",
          "A visibly uneven or shifted jawline, or a flattened, sunken cheek",
          "Numbness in the lip, chin or cheek on one side",
          "Loose, chipped or missing teeth after the impact",
          "Difficulty speaking clearly or swallowing normally",
        ],
      },
      {
        heading: "First aid before you reach the chamber or hospital",
        paragraphs: [
          "A suspected facial fracture is an emergency, but a few careful steps in the first minutes protect the airway and limit further injury while you arrange transport.",
        ],
        list: [
          "Keep the person calm and sitting upright, leaning slightly forward if there is bleeding, so blood or loose teeth don't block the airway",
          "Support the jaw gently with a hand or a soft cloth wrapped under the chin — don't try to push a shifted jaw back into place yourself",
          "Apply a cold compress to the outside of the face to limit swelling — never press directly on an open wound",
          "Do not give food or water; surgery may be needed soon, and an empty stomach is safer for anaesthesia",
          "If any teeth were knocked out, collect them and bring them along — see our dental emergency first-aid guide for how to keep a tooth alive until you arrive",
          "Go straight to a hospital or a dental chamber with X-ray facilities — do not wait to see if the swelling goes down on its own",
        ],
      },
      {
        heading: "Why this needs an OMFS surgeon, not just a general check-up",
        paragraphs: [
          "The mandible (lower jaw) is one of the facial bones most frequently fractured in road traffic injuries and falls, according to published oral and maxillofacial surgery literature — and a fracture there can be easy to miss on a casual look, especially if the skin isn't broken. A panoramic X-ray (OPG) or CT scan shows exactly where the bone is broken and whether it has shifted, which decides the entire treatment plan.",
          "An Oral & Maxillofacial Surgeon is trained specifically in the jaw, face and mouth, and works alongside your bite and teeth when planning treatment — something a general trauma assessment alone doesn't cover. Getting the bite realigned correctly is as important as healing the bone itself.",
        ],
      },
      {
        heading: "What treatment and recovery actually involve",
        list: [
          "Minor, non-displaced fractures may only need a soft diet and monitoring while the bone heals on its own",
          "Displaced fractures are typically fixed with small titanium plates and screws (open reduction and internal fixation), or in some cases the jaws are temporarily wired or banded together to hold the bite steady while it heals",
          "Healing generally takes four to six weeks, with a strictly soft or liquid diet during that time to protect the repair",
          "Follow-up visits check that the bite has settled correctly and that healing is on track, since a jaw that heals slightly misaligned can cause chewing and jaw-joint problems for years afterward",
        ],
      },
    ],
    takeaway:
      "After any hard impact to the face, don't just treat the visible cut and go home — a jaw or cheekbone fracture can hide behind swelling with no open wound at all. If your bite feels different after an accident, get an X-ray the same day. Maxface Dental Care's Oral & Maxillofacial Surgery team handles facial trauma from assessment through to recovery — call us immediately after any road accident involving the face or jaw.",
  },
  {
    slug: "scaling-professional-teeth-cleaning-myths-facts",
    title: "Scaling (Professional Teeth Cleaning): Myths vs Facts",
    excerpt:
      "\"Scaling makes your teeth loose and thin\" is one of the most repeated warnings in Bangladeshi households — and it keeps people away from the one visit that actually protects their gums. Here's what scaling really does.",
    category: "Preventive Care",
    date: "2026-07-30",
    readTime: "5 min read",
    image: "/images/blog/gum-care.jpg",
    imageAlt: "Dentist holding periodontal scaling instruments used to clean teeth",
    intro: [
      "Ask a patient in our chamber why they've never had their teeth professionally cleaned, and the answer is almost always the same: someone — an uncle, a neighbour, a co-worker — warned them that scaling wears down the teeth, makes them loose, or opens up gaps between them. So they skip it, sometimes for years, and only come in once a tooth is already wobbling.",
      "That fear is understandable, but it has the story backwards. Scaling doesn't damage healthy teeth — it removes the one thing that's already damaging them quietly in the background: hardened plaque sitting along and under the gumline.",
    ],
    sections: [
      {
        heading: "What scaling actually removes",
        paragraphs: [
          "Plaque is the soft, sticky film of bacteria that builds up on teeth every day — this is what your toothbrush is designed to clear. Left in place for a few days, it hardens into calculus (also called tartar): a rough, cement-like deposit that no amount of brushing can remove, because it has essentially bonded to the tooth surface.",
          "Scaling uses a fine ultrasonic vibration (and hand instruments for tight spots) to break this hardened tartar off the tooth and gumline. It cannot cut, thin, or reshape enamel — it isn't designed to, and it physically isn't capable of it. Every dental body worldwide that certifies the procedure — including the ones used to train dentists in Bangladesh — teaches scaling as a safe, non-invasive routine cleaning, not a treatment that removes tooth structure.",
        ],
      },
      {
        heading: "Why teeth can feel 'looser' or gappier right after",
        paragraphs: [
          "This is where the myth actually comes from, and the real explanation is almost the opposite of what people fear. Tartar builds up between and around teeth over months or years, quietly pushing the gum away and filling in small gaps. When it's removed, the gum and the true shape of the tooth are revealed for the first time — the gap was already there, just hidden under a layer of buildup.",
          "Mild sensitivity for a few days afterward is normal too. The tooth root has been covered by tartar for so long that it reacts briefly to hot, cold, or cold air once exposed — a sensitivity toothpaste and a week or two usually settles it completely. None of this means the tooth has been weakened.",
        ],
      },
      {
        heading: "What happens if you keep skipping it",
        list: [
          "Bacteria trapped in tartar keep the gums chronically inflamed, which is what actually causes bleeding — not the brushing",
          "Inflamed gums slowly pull away from the tooth, forming pockets where more bacteria collect",
          "Left untreated, this progresses to bone loss around the root — the real reason otherwise healthy teeth eventually become loose and are lost",
          "Persistent bad breath that no mouthwash fully covers is often tartar and gum inflammation, not something you ate",
        ],
        paragraphs: [
          "The World Health Organization's 2022 Global Oral Health Status Report estimates that severe gum disease affects close to one in five adults worldwide, and it remains one of the leading causes of adult tooth loss — almost always because plaque and tartar were left to build up for years, not because of a scaling visit.",
        ],
      },
      {
        heading: "Why Bangladeshi mouths often need it more, not less",
        paragraphs: [
          "Paan, zarda, gul, and sweetened cha taken several times a day all add to faster tartar buildup and staining — paan and zarda in particular leave a rough, dark deposit that traps plaque even more effectively than tartar alone. For regular users, calculus can build up in months, not years, which is exactly why the chamber sees so many badly infected gums in people who never had a single cleaning.",
          "For most adults, scaling once or twice a year is enough. If you use paan, zarda, gul, or any tobacco product, have diabetes, wear braces, or already have gum disease, your dentist may recommend it every three to four months instead.",
        ],
      },
      {
        heading: "What an actual scaling visit involves",
        paragraphs: [
          "A routine scaling session takes roughly 20–30 minutes, causes little to no pain for most patients, and needs no anaesthesia unless the gums are already badly inflamed. Afterward, teeth typically feel noticeably smoother and look visibly cleaner along the gumline — that's the tartar gone, not enamel lost.",
        ],
      },
    ],
    takeaway:
      "Scaling doesn't wear your teeth down — the tartar it removes is what was wearing your gums down all along, silently, for months. If it's been over a year since your last cleaning, book a scaling appointment at Maxface Dental Care in Malibagh and let a hygienist show you what's actually under that buildup.",
  },
  {
    slug: "ramadan-fasting-oral-health-bangladesh",
    title: "Fasting in Ramadan and Your Teeth: A Dentist's Guide for Bangladeshi Patients",
    excerpt:
      "Does brushing break your fast? Why does your mouth feel worse by afternoon during Roza? Here's what's medically true about fasting and dental care — and when a toothache can't wait for Iftar.",
    category: "Patient Guide",
    date: "2026-08-04",
    readTime: "6 min read",
    image: "/images/blog/hygiene.jpg",
    imageAlt: "Toothbrushes in a glass jar on a clean bathroom counter",
    intro: [
      "Every Ramadan, the same questions come up in our chamber: is it okay to brush while fasting? Why does my mouth feel so dry and my breath so bad by the afternoon? Can a filling or an extraction wait until after Eid? Patients often delay dental care for the whole month out of caution — sometimes unnecessarily, sometimes at real cost to a tooth that needed attention weeks earlier.",
      "None of this needs to be confusing. Most day-to-day dental care fits comfortably around a fasting schedule, and knowing what to do — and what genuinely can't wait — makes Ramadan easier on both your teeth and your mind.",
    ],
    sections: [
      {
        heading: "Does brushing break your fast?",
        paragraphs: [
          "This is the single most common question we hear in Ramadan. The dental fact is simple: brushing itself does nothing to your fast. The concern scholars raise is about swallowing — toothpaste, water, or anything else — not the act of brushing. Most Islamic scholars hold that brushing carefully, without swallowing, does not invalidate the fast, and using a miswak while fasting is a practice with long precedent.",
          "For exact rulings on borderline situations — swallowing a small amount by accident, using flavoured toothpaste, and so on — that is a religious question best answered by your local imam or a fiqh scholar, not your dentist. What we can tell you is the practical, dentist's version: brush gently, spit thoroughly, and avoid swallowing, and you protect both your fast and your teeth.",
        ],
      },
      {
        heading: "Why your mouth feels worse by the afternoon",
        paragraphs: [
          "Saliva does more than keep your mouth comfortable — it constantly washes away food debris and bacteria and neutralises the acid they produce. During a long fast, saliva flow naturally drops, especially by mid-afternoon, so bacteria build up undisturbed and volatile sulphur compounds — the actual cause of bad breath — accumulate faster than usual. This is a normal, temporary effect of fasting, not a sign anything is wrong.",
          "It becomes a problem worth checking when it doesn't match this pattern — breath that is bad even shortly after suhoor, or bleeding gums alongside it. That points to gum disease or tartar buildup underneath, not just fasting, and a scaling appointment (see our guide on scaling myths) usually resolves it.",
        ],
        list: [
          "Brush and clean between your teeth thoroughly after suhoor, before the fast begins",
          "Clean your tongue gently with a tongue scraper or your brush — most bad-breath bacteria live there, not on the teeth",
          "Sip enough water between iftar and suhoor to avoid dehydration, which worsens dry mouth",
          "Cut back on paan, zarda and cigarettes during non-fasting hours in Ramadan — they compound dry-mouth breath significantly",
        ],
      },
      {
        heading: "When to schedule dental treatment during Ramadan",
        paragraphs: [
          "Routine dental work is not off-limits during Ramadan. Examinations, fillings, scaling and even injections of local anaesthesia do not involve swallowing anything and are widely considered acceptable while fasting — dental associations that publish guidance for treating fasting patients agree there is no medical reason to avoid them.",
          "The one genuine complication is bleeding: swallowing blood is generally considered to break a fast, so procedures likely to bleed — an extraction, deep scaling on inflamed gums, oral surgery — are best scheduled for after iftar, or done carefully with the patient positioned to spit rather than swallow. Tell your dentist you are fasting; a good clinician will simply plan around it.",
        ],
      },
      {
        heading: "The one thing that should never wait for Eid",
        paragraphs: [
          "A severe toothache, a facial swelling, or an infection spreading in the jaw is a medical emergency, fasting or not. Untreated dental infection can spread rapidly and, in serious cases, become dangerous — this is not a risk worth carrying for a month out of religious caution. Islamic teaching itself makes allowance for illness during Ramadan; a dentist can treat the emergency, and any question about the fast itself is between you and your religious guidance, not a reason to delay care.",
        ],
      },
      {
        heading: "Iftar and suhoor: the hidden cavity risk",
        paragraphs: [
          "After twelve-plus hours without food, iftar tables in Bangladesh lean sweet and starchy — khejur (dates), piyaju, jilapi, sweet sherbet — often eaten quickly and in quantity. Dates in particular are naturally sugary and sticky, clinging to teeth far longer than a normal meal would. None of this needs to be avoided, but it does mean your teeth face a concentrated sugar exposure right when saliva flow is only just recovering from the day's fast.",
        ],
        list: [
          "Rinse with water or brush 20–30 minutes after iftar, once the initial rush of eating has settled",
          "Avoid falling asleep after suhoor without at least rinsing — hours of sugar sitting on teeth overnight is the worst-case scenario for decay",
          "Where possible, finish iftar with plain water rather than another sweet drink",
        ],
      },
    ],
    takeaway:
      "Brushing does not break your fast, and a real toothache should never wait for Eid — the timing of dental care can almost always be adjusted around Ramadan, but the tooth itself can't wait forever. If something is bothering you this Ramadan, book an appointment at Maxface Dental Care in Malibagh; we'll work around your fasting hours, not the other way round.",
  },
  {
    slug: "cracked-tooth-bad-habits-bangladesh",
    title: "Cracked Tooth Syndrome: The Everyday Habits Silently Fracturing Bangladeshi Teeth",
    excerpt:
      "Chewing ice from your water glass, cracking supari with your molars, opening a bottle cap with your teeth — small habits that can fracture a tooth long before it ever hurts.",
    category: "Restorative Dentistry",
    date: "2026-08-10",
    readTime: "6 min read",
    image: "/images/blog/root-canal.jpg",
    imageAlt: "Modern dental treatment room with dental chair and equipment",
    intro: [
      "Teeth get used as tools more often than people realise: a bottle cap twisted open with the back molars, a stubborn packet torn with the front teeth, a piece of supari (betel nut) cracked directly between the teeth instead of with a shupari-katha (nut cutter). On a hot day, chewing the ice left at the bottom of a glass of water feels harmless. Most of the time, nothing happens. But each of these small impacts can leave a hairline crack in a tooth — invisible, painless, and easy to ignore until it isn't.",
      "Dentists call this cracked tooth syndrome: a crack too fine to see on an X-ray or in the mirror, but real enough to cause sharp, unpredictable pain. It is one of the more commonly missed problems in dentistry precisely because it hides so well, and in a country where biting hard things is part of daily habit, it is far more common than most patients assume.",
    ],
    sections: [
      {
        heading: "Why Bangladeshi teeth are especially exposed",
        paragraphs: [
          "Some of the most common local habits put direct, repeated stress on the same one or two teeth, every single day.",
        ],
        list: [
          "Chewing ice cubes straight from a glass of water — a common way to cool down in Dhaka's heat and humidity",
          "Biting supari or betel nut directly with the back teeth instead of crushing it first with a nut cutter",
          "Opening bottle caps, tearing packets, or snapping thread with the front teeth",
          "Students biting down on pen caps or pencils during exam stress — HSC and admission-test season sees a visible rise in this habit",
          "Roadside muri and chanachur that occasionally hide a small stone or hard grain",
          "Boroi (jujube) and similar fruit eaten quickly, with the hard seed bitten into by accident",
        ],
      },
      {
        heading: "The tell-tale signs of a cracked tooth",
        list: [
          "Sharp pain the instant you bite down on something, which disappears the moment you release the bite — the single most recognisable sign",
          "Pain that comes from one specific spot when chewing, not the whole mouth",
          "Sensitivity to cold or sweet that comes and goes unpredictably, without a visible cavity",
          "No hole or dark spot to see or feel, which makes the problem easy to dismiss as 'nothing'",
          "In some cases, no pain at all in the early stages, even though the crack is already there",
        ],
      },
      {
        heading: "Why 'wait and see' backfires",
        paragraphs: [
          "A crack in a tooth cannot heal itself the way a cut on skin does. Every time you bite on it, the two sides flex slightly and the crack is driven a little deeper. Left long enough, it can reach the pulp — the nerve and blood vessels inside the tooth — causing infection and the kind of throbbing pain that needs a root canal. In the worst cases, the tooth splits and cannot be saved at all.",
          "General dental consensus is clear on this: cracked tooth syndrome tends to get worse, not better, without treatment, and the earlier it is caught, the simpler and cheaper the fix.",
        ],
      },
      {
        heading: "Diagnosis and treatment: what to expect",
        paragraphs: [
          "Because a crack often does not show up clearly on a standard X-ray, diagnosis relies on a careful clinical exam: biting on a special stick to reproduce the pain, staining dye that seeps into the crack line, and magnification to spot what the naked eye misses.",
        ],
        list: [
          "A shallow craze line with no real symptoms: often just monitored, or smoothed and bonded",
          "A confirmed crack causing bite pain: usually treated with a crown, which holds the two sides of the tooth together under the chewing forces that were pulling them apart",
          "A crack that has reached the nerve: needs root canal treatment first, followed by a crown",
          "A crack extending below the gumline or splitting the root: unfortunately often means the tooth cannot be saved, and extraction is the only option",
        ],
      },
      {
        heading: "Protecting your teeth going forward",
        list: [
          "Drink your ice, don't chew it — however tempting on a hot afternoon",
          "Use a proper nut cutter for supari instead of your molars",
          "Keep scissors or a bottle opener within reach instead of reaching for your teeth",
          "If you catch yourself biting pens or clenching under stress, mention it at your next check-up — a night guard protects your teeth the same way it protects a jaw joint",
          "Be extra careful with teeth that already have a large filling or a root canal — they are more brittle and crack more easily than an untouched tooth",
        ],
      },
    ],
    takeaway:
      "If biting down on something gives you a sharp, brief pain that a filling or a cavity doesn't explain, don't wait for it to become a root canal — book an assessment at Maxface Dental Care in Malibagh while a crown can still save the tooth.",
  },
];

/** Display tags per post, shown on the article page next to the share row. */
const postTags: Record<string, string[]> = {
  "importance-of-regular-dental-checkups": ["Preventive Care", "Healthy Smile", "Dental Check-Up"],
  "root-canal-treatment-myths-vs-reality": ["Root Canal", "Tooth Pain", "Endodontics"],
  "braces-vs-clear-aligners": ["Braces", "Clear Aligners", "Smile Correction"],
  "wisdom-tooth-pain-when-to-remove": ["Wisdom Teeth", "Oral Surgery", "Tooth Extraction"],
  "paan-betel-nut-oral-cancer-bangladesh": ["Oral Cancer", "Tobacco", "Oral Health"],
  "dental-implants-permanent-solution-missing-teeth": ["Dental Implants", "Missing Teeth", "Restorative Care"],
  "oral-hygiene-routine-family-bangladesh": ["Oral Hygiene", "Brushing Tips", "Family Dental Care"],
  "bleeding-gums-diabetes-gum-disease": ["Gum Disease", "Diabetes", "Bleeding Gums"],
  "choosing-dental-clinic-dhaka-first-visit": ["Dental Clinic Dhaka", "Patient Guide", "First Visit"],
  "teeth-whitening-dhaka-safe-vs-risky": ["Teeth Whitening", "Cosmetic Dentistry", "Bright Smile"],
  "milk-teeth-matter-child-dental-care-bangladesh": ["Kids' Dental Care", "Milk Teeth", "Paediatric Dentistry"],
  "infant-tongue-tie-breastfeeding-bangladesh": ["Tongue-Tie", "Breastfeeding", "Infant Care"],
  "smoking-gul-zarda-gum-disease-bangladesh": ["Tobacco", "Gum Disease", "Oral Cancer"],
  "sugar-cha-soft-drinks-cavities-bangladesh": ["Sugar & Teeth", "Cavities", "Preventive Care"],
  "jaw-pain-clicking-tmj-disorder-treatment": ["Jaw Pain", "TMJ", "Teeth Grinding"],
  "sensitive-teeth-cold-water-causes-relief": ["Sensitive Teeth", "Enamel Care", "Tooth Pain"],
  "pregnancy-oral-health-safe-dental-care": ["Pregnancy", "Women's Health", "Gum Care"],
  "bad-breath-halitosis-causes-treatment": ["Bad Breath", "Fresh Breath", "Oral Hygiene"],
  "dental-xray-safety-digital-radiology": ["Dental X-Ray", "Diagnostics", "Patient Safety"],
  "toothache-emergency-solution-bangla": ["দাঁতের ব্যথা", "প্রাথমিক চিকিৎসা", "জরুরি সেবা"],
  "root-canal-cost-misconceptions-bangla": ["রুট ক্যানেল", "ভুল ধারণা", "দাঁতের চিকিৎসা"],
  "bleeding-gums-warning-bangla": ["মাড়ির রোগ", "রক্ত পড়া", "স্কেলিং"],
  "milk-teeth-care-bangla": ["দুধ দাঁত", "শিশুর যত্ন", "শিশু দন্তচিকিৎসা"],
  "wisdom-tooth-pain-bangla": ["আক্কেল দাঁত", "দাঁত তোলা", "ওরাল সার্জারি"],
  "paan-jorda-mouth-cancer-bangla": ["মুখের ক্যান্সার", "পান-জর্দা", "তামাক"],
  "teeth-whitening-safe-way-bangla": ["দাঁত সাদা করা", "হোয়াইটেনিং", "উজ্জ্বল হাসি"],
  "diabetes-dental-care-bangla": ["ডায়াবেটিস", "মাড়ির যত্ন", "দাঁতের চেকআপ"],
  "pregnancy-dental-treatment-bangla": ["গর্ভাবস্থা", "মায়ের যত্ন", "নিরাপদ চিকিৎসা"],
  "scaling-myths-bangla": ["স্কেলিং", "ভুল ধারণা", "দাঁতের যত্ন"],
  "denture-care-cleaning-fit-and-replacement": ["Dentures", "Restorative Care", "Denture Cleaning"],
  "dental-emergency-first-aid-before-the-chamber": ["Dental Emergency", "First Aid", "Patient Guide"],
  "recurring-mouth-ulcers-causes-treatment": ["Mouth Ulcers", "Oral Health", "Patient Guide"],
  "jaw-fracture-facial-injury-road-accident-bangladesh": ["Facial Trauma", "Oral Surgery", "Road Accidents"],
  "scaling-professional-teeth-cleaning-myths-facts": ["Scaling", "Gum Care", "Preventive Care"],
  "ramadan-fasting-oral-health-bangladesh": ["Ramadan", "Oral Hygiene", "Patient Guide"],
  "cracked-tooth-bad-habits-bangladesh": ["Cracked Tooth", "Restorative Dentistry", "Tooth Pain"],
};

export function getPostTags(post: BlogPost): string[] {
  return postTags[post.slug] ?? [post.category, "Oral Health", "Dental Care"];
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

const BN_MONTHS = [
  "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
  "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর",
];
const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
const toBnDigits = (n: number) =>
  String(n).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);

export function formatPostDate(iso: string, lang?: "en" | "bn"): string {
  const date = new Date(`${iso}T00:00:00`);
  if (lang === "bn") {
    // Hand-rolled so server (Node ICU) and browser render identical text —
    // toLocaleDateString("bn-BD") differs between the two and breaks hydration.
    return `${toBnDigits(date.getDate())} ${BN_MONTHS[date.getMonth()]} ${toBnDigits(date.getFullYear())}`;
  }
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
