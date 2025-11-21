import type { Metadata } from "next";

export const seoMeta: Record<string, Metadata> = {
  home: {
    title:
      "Best Group Health Insurance in Delhi NCR | SecureNow - Corporate Coverage",
    description:
      "Get the best group health insurance for your business in Delhi NCR. Comprehensive employee coverage with 30+ insurance partners, 24/7 support, and trusted by 3000+ companies. Request free quote today.",
    keywords: [
      "group health insurance Delhi NCR",
      "corporate health insurance",
      "employee health benefits",
      "business insurance",
      "group medical insurance",
      "company health plans",
      "employee wellness programs",
    ],
    openGraph: {
      title:
        "Best Group Health Insurance in Delhi NCR | SecureNow - Corporate Coverage",
      description:
        "Get the best group health insurance for your business in Delhi NCR. Comprehensive employee coverage with 30+ insurance partners, 24/7 support, and trusted by 3000+ companies. Request free quote today.",
      url: process.env.NEXT_PUBLIC_PAM_URL,
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL,
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/hi",
      },
    },
  },
  productfeature: {
    title:
      "Group Health Insurance Features & Benefits | Comprehensive Employee Coverage",
    description:
      "Explore advanced group health insurance features: cashless hospitalization, OPD coverage, wellness programs, family inclusion, maternity benefits, and more. Compare plans now.",
    keywords: [
      "health insurance features, group health benefits, employee wellness programs, OPD coverage, cashless hospitalization, maternity benefits",
    ],
    openGraph: {
      title:
        "Group Health Insurance Features & Benefits | Comprehensive Employee Coverage",
      description:
        "Explore advanced group health insurance features: cashless hospitalization, OPD coverage, wellness programs, family inclusion, maternity benefits, and more. Compare plans now.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/product-features/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/product-features/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/product-features/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/product-features/hi",
      },
    },
  },
  roomrentcapping: {
    title:
      "Room Rent Capping in Health Insurance | No Limit vs Capped Coverage",
    description:
      "Understand room rent capping in group health insurance. Learn how room rent limits affect your claims and discover policies with no capping for maximum coverage.",
    keywords: [
      "room rent capping, health insurance room limits, hospital room coverage, no room rent limit, insurance claim settlement"
    ],
    openGraph: {
      title:
        "Room Rent Capping in Health Insurance | No Limit vs Capped Coverage",
      description:
        "Understand room rent capping in group health insurance. Learn how room rent limits affect your claims and discover policies with no capping for maximum coverage.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/product-features/room-rent-capping/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/product-features/room-rent-capping/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/product-features/room-rent-capping/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/product-features/room-rent-capping/hi",
      },
    },
  },
  copay: {
    title:
      "Co-Payment in Group Health Insurance | Zero Copay vs Shared Cost Plans",
    description:
      "Enhance employee benefits with cashless OPD coverage. No advance payments for doctor consultations, diagnostics, medicines, and preventive healthcare. Check OPD plans.",
    keywords: [
      "health insurance copay, co-payment clause, zero copay plans, shared healthcare costs, employee health benefits"
    ],
    openGraph: {
      title:
        "Co-Payment in Group Health Insurance | Zero Copay vs Shared Cost Plans",
      description:
        "Understand room rent capping in group health insurance. Learn how room rent limits affect your claims and discover policies with no capping for maximum coverage.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/product-features/copay/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/product-features/copay/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/product-features/copay/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/product-features/copay/hi",
      },
    },
  },
  cashlessopd: {
    title:
      "Cashless OPD Coverage | Outpatient Benefits in Group Health Insurance",
    description:
      "Enhance employee benefits with cashless OPD coverage. No advance payments for doctor consultations, diagnostics, medicines, and preventive healthcare. Check OPD plans.",
    keywords: [
      "cashless OPD, outpatient coverage, OPD benefits, doctor consultation coverage, preventive healthcare, diagnostic coverage"
    ],
    openGraph: {
      title:
        "Cashless OPD Coverage | Outpatient Benefits in Group Health Insurance",
      description:
        "Enhance employee benefits with cashless OPD coverage. No advance payments for doctor consultations, diagnostics, medicines, and preventive healthcare. Check OPD plans.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/product-features/cashless-opd/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/product-features/cashless-opd/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/product-features/cashless-opd/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/product-features/cashless-opd/hi",
      },
    },
  },
  insurance: {
    title:
      "Top Health Insurance Companies in India | Compare Best Insurers 2025",
    description:
      "Compare India's leading health insurance companies for group coverage. Check claim settlement ratios, network hospitals, and premium rates from 30+ trusted insurers.",
    keywords: [
      "best health insurance companies India, top insurers 2025, health insurance comparison, claim settlement ratio, network hospitals"
    ],
    openGraph: {
      title:
        "Top Health Insurance Companies in India | Compare Best Insurers 2025",
      description:
        "Compare India's leading health insurance companies for group coverage. Check claim settlement ratios, network hospitals, and premium rates from 30+ trusted insurers.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/insurers/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/insurers/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/insurers/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/insurers/hi",
      },
    },
  },
  policywordings: {
    title:
      "Health Insurance Policy Documents & Wordings | Download Free PDFs",
    description:
      "Download detailed health insurance policy wordings from top insurers. Read terms, conditions, exclusions, and coverage details before choosing your group health plan.",
    keywords: [
      "insurance policy documents, health insurance wordings, policy terms conditions, coverage details, insurance PDF downloads"
    ],
    openGraph: {
      title:
        "Health Insurance Policy Documents & Wordings | Download Free PDFs",
      description:
        "Download detailed health insurance policy wordings from top insurers. Read terms, conditions, exclusions, and coverage details before choosing your group health plan.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/insurers/policy-wordings/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/insurers/policy-wordings/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/insurers/policy-wordings/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/insurers/policy-wordings/hi",
      },
    },
  },
  claimsettlementrate: {
    title:
      "Health Insurance Claim Settlement Ratio 2025 | Best Performing Insurers",
    description:
      "Compare claim settlement ratios of top health insurance companies in India. Choose insurers with highest claim approval rates for hassle-free settlements.",
    keywords: [
      "claim settlement ratio 2025, insurance claim approval rate, best health insurers, claim settlement statistics, insurance performance"
    ],
    openGraph: {
      title:
        "Health Insurance Claim Settlement Ratio 2025 | Best Performing Insurers",
      description:
        "Compare claim settlement ratios of top health insurance companies in India. Choose insurers with highest claim approval rates for hassle-free settlements.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/insurers/claim-settlement-rate/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/insurers/claim-settlement-rate/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/insurers/claim-settlement-rate/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/insurers/claim-settlement-rate/hi",
      },
    },
  },
  tpa: {
    title:
      "Top Third Party Administrators (TPA) for Health Insurance | Network Hospitals",
    description:
      "Compare leading TPA providers for seamless health insurance services. Access 15,000+ network hospitals, fast claim processing, and cashless treatment across India. Choose the best TPA for your needs.",
    keywords: [
      "TPA health insurance, third party administrator, cashless treatment, network hospitals, medical TPA services, health insurance claim processing"
    ],
    openGraph: {
      title:
        "Top Third Party Administrators (TPA) for Health Insurance | Network Hospitals",
      description:
        "Compare leading TPA providers for seamless health insurance services. Access 15,000+ network hospitals, fast claim processing, and cashless treatment across India. Choose the best TPA for your needs.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/tpa/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/tpa/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/tpa/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/tpa/hi",
      },
    },
  },
  claimprocess: {
    title:
      "Health Insurance Claim Process | Cashless vs Reimbursement Guide",
    description:
      "Step-by-step guide to health insurance claims. Learn cashless hospitalization process, reimbursement procedures, required documents, and get 24/7 claim support.",
    keywords: [
      "health insurance claim process, cashless claims, reimbursement procedure, claim documents, medical insurance claims"
    ],
    openGraph: {
      title:
        "Health Insurance Claim Process | Cashless vs Reimbursement Guide",
      description:
        "Step-by-step guide to health insurance claims. Learn cashless hospitalization process, reimbursement procedures, required documents, and get 24/7 claim support.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/hi",
      },
    },
  },
  cashless: {
    title:
      "Cashless Health Insurance | How Cashless Hospitalization Works",
    description:
      "Complete guide to cashless health insurance. Learn how cashless hospitalization works, pre-authorization process, and access 15,000+ network hospitals nationwide.",
    keywords: [
      "cashless health insurance, cashless hospitalization, pre-authorization, network hospitals, cashless treatment process"
    ],
    openGraph: {
      title:
        "Cashless Health Insurance | How Cashless Hospitalization Works",
      description:
        "Complete guide to cashless health insurance. Learn how cashless hospitalization works, pre-authorization process, and access 15,000+ network hospitals nationwide.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/cashless/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/cashless/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/cashless/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/cashless/hi",
      },
    },
  },
  reimbursement: {
    title:
      "Health Insurance Reimbursement | Claim Settlement Process & Documents",
    description:
      "Learn health insurance reimbursement process. Required documents, claim forms, submission timeline, and tips for faster reimbursement settlements.",
    keywords: [
      "health insurance reimbursement, claim settlement process, reimbursement documents, claim forms, medical expense refund"
    ],
    openGraph: {
      title:
        "Health Insurance Reimbursement | Claim Settlement Process & Documents",
      description:
        "Learn health insurance reimbursement process. Required documents, claim forms, submission timeline, and tips for faster reimbursement settlements.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/reimbursement/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/reimbursement/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/reimbursement/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/reimbursement/hi",
      },
    },
  },
  prepostclaim: {
    title:
      "Pre & Post Hospitalization Coverage | Extended Medical Expense Benefits",
    description:
      "Understand pre and post hospitalization coverage in health insurance. Learn about covered expenses, time limits, and how to claim pre/post hospitalization benefits.",
    keywords: [
      "pre hospitalization coverage, post hospitalization benefits, extended medical expenses, health insurance coverage period"
    ],
    openGraph: {
      title:
        "Pre & Post Hospitalization Coverage | Extended Medical Expense Benefits",
      description:
        "Understand pre and post hospitalization coverage in health insurance. Learn about covered expenses, time limits, and how to claim pre/post hospitalization benefits.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/pre-post-claim/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/pre-post-claim/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/pre-post-claim/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/pre-post-claim/hi",
      },
    },
  },
  gipsa: {
    title:
      "GIPSA Network Hospitals | 15,000+ Cashless Treatment Centers",
    description:
      "Access GIPSA's extensive network of 15,000+ hospitals for cashless treatment. Find network hospitals near you and enjoy seamless healthcare services.",
    keywords: [
      "GIPSA network hospitals, GIPSA hospitals list, cashless treatment centers, network hospital finder, healthcare network"
    ],
    openGraph: {
      title:
        "GIPSA Network Hospitals | 15,000+ Cashless Treatment Centers",
      description:
        "Access GIPSA's extensive network of 15,000+ hospitals for cashless treatment. Find network hospitals near you and enjoy seamless healthcare services.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/gipsa/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/gipsa/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/gipsa/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/gipsa/hi",
      },
    },
  },
  claimstatus: {
    title:
      "Track Health Insurance Claim Status Online | Real-Time Claim Updates",
    description:
      "Track your health insurance claim status in real-time. Get instant updates via online portal, SMS, email, or WhatsApp. Check claim progress 24/7.",
    keywords: [
      "claim status tracking, health insurance claim tracker, claim progress updates, online claim status, real-time claim tracking"
    ],
    openGraph: {
      title:
        "Track Health Insurance Claim Status Online | Real-Time Claim Updates",
      description:
        "Track your health insurance claim status in real-time. Get instant updates via online portal, SMS, email, or WhatsApp. Check claim progress 24/7.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/claim-status/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/claim-status/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/claim-status/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/claim-process/claim-status/hi",
      },
    },
  },
  quotation: {
    title:
      "Free Group Health Insurance Quotes | Compare Plans & Premiums",
    description:
      "Get free, customized group health insurance quotes from 30+ top insurers. Compare plans, premiums, and benefits within 24 hours. No obligation quotes.",
    keywords: [
      "group health insurance quotes, free insurance quotes, health insurance comparison, premium calculator, insurance quote online"
    ],
    openGraph: {
      title:
        "Free Group Health Insurance Quotes | Compare Plans & Premiums",
      description:
        "Get free, customized group health insurance quotes from 30+ top insurers. Compare plans, premiums, and benefits within 24 hours. No obligation quotes.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/hi",
      },
    },
  },
  process: {
    title:
      "Group Health Insurance Quotation Process | How to Get Best Rates",
    description:
      "Learn our transparent quotation process for group health insurance. Get customized quotes from multiple insurers, compare benefits, and choose the best plan.",
    keywords: [
      "insurance quotation process, group health quote process, premium calculation, insurance comparison process"
    ],
    openGraph: {
      title:
        "Group Health Insurance Quotation Process | How to Get Best Rates",
      description:
        "Learn our transparent quotation process for group health insurance. Get customized quotes from multiple insurers, compare benefits, and choose the best plan.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/process/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/process/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/process/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/process/hi",
      },
    },
  },
  raters: {
    title:
      "Health Insurance Premium Factors | What Affects Your Group Plan Cost",
    description:
      "Understand factors affecting group health insurance premiums: employee age, coverage amount, claim history, location, and more. Get accurate premium estimates.",
    keywords: [
      "health insurance premium factors, group insurance pricing, premium calculation factors, insurance cost determinants"
    ],
    openGraph: {
      title:
        "Health Insurance Premium Factors | What Affects Your Group Plan Cost",
      description:
        "Understand factors affecting group health insurance premiums: employee age, coverage amount, claim history, location, and more. Get accurate premium estimates.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/raters/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/raters/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/raters/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/raters/hi",
      },
    },
  },
  claimratio: {
    title:
      "Health Insurance Claim Ratios | Impact on Premiums & Renewals",
    description:
      "Learn how claim ratios affect your group health insurance premiums and renewals. Understand incurred claim ratio and its impact on future costs.",
    keywords: [
      "health insurance claim ratio, incurred claim ratio, premium impact, renewal pricing, claims experience"
    ],
    openGraph: {
      title:
        "Health Insurance Claim Ratios | Impact on Premiums & Renewals",
      description:
        "Learn how claim ratios affect your group health insurance premiums and renewals. Understand incurred claim ratio and its impact on future costs.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/claim-ratio/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/claim-ratio/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/claim-ratio/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/claim-ratio/hi",
      },
    },
  },
  installments: {
    title:
      "Flexible Health Insurance Premium Payment | EMI & Installment Options",
    description:
      "Pay group health insurance premiums in flexible installments. Choose monthly, quarterly, or half-yearly payment options to manage cash flow better.",
    keywords: [
      "health insurance EMI, premium installments, flexible payment options, insurance premium financing"
    ],
    openGraph: {
      title:
        "Flexible Health Insurance Premium Payment | EMI & Installment Options",
      description:
        "Pay group health insurance premiums in flexible installments. Choose monthly, quarterly, or half-yearly payment options to manage cash flow better.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/installments/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/installments/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/installments/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/installments/hi",
      },
    },
  },
  voluntaryperks: {
    title:
      "Voluntary Employee Benefits | Optional Health Insurance Add-ons",
    description:
      "Enhance employee benefits with voluntary perks. Offer optional health coverage, dental, vision, and wellness programs that employees can choose and pay for.",
    keywords: [
      "voluntary employee benefits, optional health coverage, employee benefit add-ons, customizable insurance plans"
    ],
    openGraph: {
      title:
        "Voluntary Employee Benefits | Optional Health Insurance Add-ons",
      description:
        "Enhance employee benefits with voluntary perks. Offer optional health coverage, dental, vision, and wellness programs that employees can choose and pay for.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/voluntary-perks/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/voluntary-perks/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/voluntary-perks/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/voluntary-perks/hi",
      },
    },
  },
  opd: {
    title:
      "OPD Health Insurance Coverage | Outpatient Department Benefits",
    description:
      "Add comprehensive OPD coverage to your group health plan. Cover doctor consultations, diagnostics, medicines, and day-care treatments for employees.",
    keywords: [
      "OPD health insurance, outpatient coverage, OPD benefits, doctor consultation insurance, diagnostic coverage"
    ],
    openGraph: {
      title:
        "OPD Health Insurance Coverage | Outpatient Department Benefits",
      description:
        "Add comprehensive OPD coverage to your group health plan. Cover doctor consultations, diagnostics, medicines, and day-care treatments for employees.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/opd/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/opd/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/opd/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/opd/hi",
      },
    },
  },
  topup: {
    title:
      "Health Insurance Top-up Plans | Super Top-up Coverage Options",
    description:
      "Boost your health coverage with affordable top-up plans. Get higher sum insured for critical illnesses and major medical expenses at lower premiums.",
    keywords: [
      "health insurance top-up, super top-up plans, additional health coverage, extended medical coverage"
    ],
    openGraph: {
      title:
        "Health Insurance Top-up Plans | Super Top-up Coverage Options",
      description:
        "Boost your health coverage with affordable top-up plans. Get higher sum insured for critical illnesses and major medical expenses at lower premiums.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/top-up/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/quotation/top-up/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/top-up/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/quotation/top-up/hi",
      },
    },
  },
  industry: {
    title:
      "Industry-Specific Health Insurance | Tailored Business Coverage Solutions",
    description:
      "Discover health insurance solutions tailored for your industry. Specialized coverage for tech, construction, consulting, e-commerce, and more business sectors.",
    keywords: [
      "industry-specific insurance, business health insurance, sector-wise coverage, specialized health plans"
    ],
    openGraph: {
      title:
        "Industry-Specific Health Insurance | Tailored Business Coverage Solutions",
      description:
        "Discover health insurance solutions tailored for your industry. Specialized coverage for tech, construction, consulting, e-commerce, and more business sectors.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/industry/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/industry/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/hi",
      },
    },
  },
  tech: {
    title:
      "Health Insurance for Tech Companies | IT Sector Employee Benefits",
    description:
      "Comprehensive health insurance for tech companies and startups. Mental health coverage, wellness programs, and benefits that attract top IT talent.",
    keywords: [
      "tech company health insurance, IT sector insurance, startup employee benefits, technology company coverage"
    ],
    openGraph: {
      title:
        "Health Insurance for Tech Companies | IT Sector Employee Benefits",
      description:
        "Comprehensive health insurance for tech companies and startups. Mental health coverage, wellness programs, and benefits that attract top IT talent.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/industry/tech/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/industry/tech/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/tech/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/tech/hi",
      },
    },
  },
  consulting: {
    title:
      "Health Insurance for Consulting Firms | Professional Services Coverage",
    description:
      "Specialized health insurance for consulting firms with frequent travelers. International coverage, flexible benefits, and comprehensive healthcare solutions.",
    keywords: [
      "consulting firm insurance, professional services health coverage, consultant benefits, business travel insurance"
    ],
    openGraph: {
      title:
        "Health Insurance for Consulting Firms | Professional Services Coverage",
      description:
        "Specialized health insurance for consulting firms with frequent travelers. International coverage, flexible benefits, and comprehensive healthcare solutions.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/industry/consulting/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/industry/consulting/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/consulting/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/consulting/hi",
      },
    },
  },
  eCommerce: {
    title:
      "E-Commerce Health Insurance | Online Business Employee Coverage",
    description:
      "Tailored health insurance for e-commerce businesses covering diverse workforce from warehouse staff to tech teams with 24/7 support and flexible benefits.",
    keywords: [
      "e-commerce health insurance, online business coverage, warehouse staff insurance, retail employee benefits"
    ],
    openGraph: {
      title:
        "E-Commerce Health Insurance | Online Business Employee Coverage",
      description:
        "Tailored health insurance for e-commerce businesses covering diverse workforce from warehouse staff to tech teams with 24/7 support and flexible benefits.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/industry/e-commerce/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/industry/e-commerce/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/e-commerce/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/e-commerce/hi",
      },
    },
  },
  food: {
    title:
      "Food Industry Health Insurance | Restaurant & Hospitality Coverage",
    description:
      "Specialized health coverage for food service, restaurants, and hospitality businesses. Address industry-specific health risks with customized insurance solutions.",
    keywords: [
      "food industry insurance, restaurant health coverage, hospitality insurance, food service employee benefits"
    ],
    openGraph: {
      title:
        "Food Industry Health Insurance | Restaurant & Hospitality Coverage",
      description:
        "Specialized health coverage for food service, restaurants, and hospitality businesses. Address industry-specific health risks with customized insurance solutions.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/industry/food/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/industry/food/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/food/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/food/hi",
      },
    },
  },
  construction: {
    title:
      "Construction Health Insurance | Builder & Contractor Coverage",
    description:
      "Comprehensive health insurance for construction companies covering site workers, engineers, and office staff. Occupational health coverage and accident protection.",
    keywords: [
      "construction health insurance, builder insurance, contractor coverage, construction worker benefits"
    ],
    openGraph: {
      title:
        "Construction Health Insurance | Builder & Contractor Coverage",
      description:
        "Comprehensive health insurance for construction companies covering site workers, engineers, and office staff. Occupational health coverage and accident protection.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/industry/construction/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/industry/construction/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/construction/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/construction/hi",
      },
    },
  },
  smallBusiness: {
    title:
      "Small Business Health Insurance | Affordable Plans for SMEs",
    description:
      "Cost-effective group health insurance for small businesses with 5+ employees. Compete with larger companies by offering quality health benefits to your team.",
    keywords: [
      "small business health insurance, SME insurance, startup health coverage, affordable group health plans"
    ],
    openGraph: {
      title:
        "Small Business Health Insurance | Affordable Plans for SMEs",
      description:
        "Cost-effective group health insurance for small businesses with 5+ employees. Compete with larger companies by offering quality health benefits to your team.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/industry/small-business/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/industry/small-business/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/small-business/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/small-business/hi",
      },
    },
  },
  gigWorkers: {
    title:
      "Gig Worker Health Insurance | Freelancer & Contract Employee Coverage",
    description:
      "Health insurance solutions for gig workers, freelancers, and contract employees. Flexible coverage options for the modern workforce.",
    keywords: [
      "gig worker insurance, freelancer health coverage, contract employee benefits, flexible workforce insurance"
    ],
    openGraph: {
      title:
        "Gig Worker Health Insurance | Freelancer & Contract Employee Coverage",
      description:
        "Health insurance solutions for gig workers, freelancers, and contract employees. Flexible coverage options for the modern workforce.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/industry/gig-workers/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/industry/gig-workers/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/gig-workers/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/industry/gig-workers/hi",
      },
    },
  },
  technology: {
    title:
      "InsurTech Solutions | Digital Health Insurance Management Platform",
    description:
      "Experience cutting-edge insurance technology for seamless group health plan management. Digital claims, real-time analytics, and automated policy administration.",
    keywords: [
      "insurtech solutions, digital insurance platform, health insurance technology, policy management software"
    ],
    openGraph: {
      title:
        "InsurTech Solutions | Digital Health Insurance Management Platform",
      description:
        "Experience cutting-edge insurance technology for seamless group health plan management. Digital claims, real-time analytics, and automated policy administration.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/technology/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/technology/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/technology/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/technology/hi",
      },
    },
  },
  dashboard: {
    title:
      "Insurance Management Dashboard | Real-time Policy & Claims Analytics",
    description:
      "Access comprehensive insurance dashboard for real-time policy monitoring, employee enrollment tracking, claim analytics, and detailed reporting.",
    keywords: [
      "insurance dashboard, policy management dashboard, claims analytics, employee benefits tracking"
    ],
    openGraph: {
      title:
        "Insurance Management Dashboard | Real-time Policy & Claims Analytics",
      description:
        "Access comprehensive insurance dashboard for real-time policy monitoring, employee enrollment tracking, claim analytics, and detailed reporting.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/technology/dashboard/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/technology/dashboard/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/technology/dashboard/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/technology/dashboard/hi",
      },
    },
  },
  eClaims: {
    title:
      "Digital Claims Processing | Paperless Health Insurance Claims",
    description:
      "Streamline health insurance claims with digital processing. Faster settlements, paperless submissions, real-time tracking, and automated claim workflows.",
    keywords: [
      "digital claims processing, e-claims system, paperless insurance claims, automated claim processing"
    ],
    openGraph: {
      title:
        "Digital Claims Processing | Paperless Health Insurance Claims",
      description:
        "Streamline health insurance claims with digital processing. Faster settlements, paperless submissions, real-time tracking, and automated claim workflows.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/technology/e-claims/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/technology/e-claims/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/technology/e-claims/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/technology/e-claims/hi",
      },
    },
  },
  flexiPlans: {
    title:
      "Flexible Health Insurance Plans | Customizable Employee Benefits",
    description:
      "Design flexible health insurance plans tailored to your workforce. Allow employees to customize coverage options based on individual and family needs.",
    keywords: [
      "flexible health insurance, customizable benefits, employee choice plans, cafeteria benefit plans"
    ],
    openGraph: {
      title:
        "Flexible Health Insurance Plans | Customizable Employee Benefits",
      description:
        "Design flexible health insurance plans tailored to your workforce. Allow employees to customize coverage options based on individual and family needs.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/technology/flexi-plans/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/technology/flexi-plans/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/technology/flexi-plans/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/technology/flexi-plans/hi",
      },
    },
  },
  service: {
    title:
      "Premium Health Insurance Services | Dedicated Account Management",
    description:
      "Experience exceptional health insurance services with dedicated account managers, 24/7 support, policy administration, and personalized assistance for your business.",
    keywords: [
      "health insurance services, dedicated account management, insurance customer service, policy administration"
    ],
    openGraph: {
      title:
        "Premium Health Insurance Services | Dedicated Account Management",
      description:
        "Experience exceptional health insurance services with dedicated account managers, 24/7 support, policy administration, and personalized assistance for your business.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/service/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/service/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/service/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/service/hi",
      },
    },
  },
  endorsement: {
    title:
      "Health Insurance Policy Endorsements | Quick Policy Modifications",
    description:
      "Make seamless changes to your group health insurance policy. Add/remove employees, update coverage, and process endorsements within 24 hours.",
    keywords: [
      "policy endorsements, insurance policy changes, coverage modifications, employee additions"
    ],
    openGraph: {
      title:
        "Health Insurance Policy Endorsements | Quick Policy Modifications",
      description:
        "Make seamless changes to your group health insurance policy. Add/remove employees, update coverage, and process endorsements within 24 hours.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/service/endorsement/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/service/endorsement/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/service/endorsement/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/service/endorsement/hi",
      },
    },
  },
  sla: {
    title:
      "Insurance Service Level Agreements | Guaranteed Response Times",
    description:
      "Our commitment to excellence with defined SLAs for claims processing, endorsements, query resolution, and customer service. Guaranteed response times.",
    keywords: [
      "insurance SLA, service level agreement, guaranteed response times, service commitments"
    ],
    openGraph: {
      title:
        "Insurance Service Level Agreements | Guaranteed Response Times",
      description:
        "Our commitment to excellence with defined SLAs for claims processing, endorsements, query resolution, and customer service. Guaranteed response times.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/service/sla/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/service/sla/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/service/sla/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/service/sla/hi",
      },
    },
  },
  serviceCalls: {
    title:
      "24/7 Health Insurance Support | Dedicated Service Helpline",
    description:
      "Get instant help with our 24/7 insurance support helpline. Expert assistance for claims, policy queries, hospital network, and emergency support.",
    keywords: [
      "24/7 insurance support, health insurance helpline, customer service, insurance assistance"
    ],
    openGraph: {
      title:
        "24/7 Health Insurance Support | Dedicated Service Helpline",
      description:
        "Get instant help with our 24/7 insurance support helpline. Expert assistance for claims, policy queries, hospital network, and emergency support.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/service/service-calls/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/service/service-calls/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/service/service-calls/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/service/service-calls/hi",
      },
    },
  },
  mediAssist: {
    title:
      "Medi Assist TPA - 15,000+ Network Hospitals | Cashless Health Insurance",
    description:
      "Medi Assist TPA offers India's largest network of 15,000+ hospitals with instant cashless treatment, 24x7 pre-authorization, and fastest claim settlement. Check hospital network now.",
    keywords: [
      "Medi Assist TPA, Medi Assist hospitals, cashless treatment, health insurance TPA, network hospitals India, pre-authorization"
    ],
    openGraph: {
      title:
        "Medi Assist TPA - 15,000+ Network Hospitals | Cashless Health Insurance",
      description:
        "Medi Assist TPA offers India's largest network of 15,000+ hospitals with instant cashless treatment, 24x7 pre-authorization, and fastest claim settlement. Check hospital network now.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/tpa/medi-assist/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/tpa/medi-assist/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/tpa/medi-assist/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/tpa/medi-assist/hi",
      },
    },
  },
  fhpl: {
    title:
      "Family Health Plan Limited (FHPL) TPA | Premium Hospital Network",
    description:
      "FHPL TPA provides premium healthcare services with 10,000+ network hospitals, efficient claim processing, and superior customer service. Access quality healthcare nationwide.",
    keywords: [
      "FHPL TPA, Family Health Plan Limited, FHPL hospitals, premium healthcare TPA, cashless health insurance"
    ],
    openGraph: {
      title:
        "Family Health Plan Limited (FHPL) TPA | Premium Hospital Network",
      description:
        "FHPL TPA provides premium healthcare services with 10,000+ network hospitals, efficient claim processing, and superior customer service. Access quality healthcare nationwide.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/tpa/fhpl/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/tpa/fhpl/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/tpa/fhpl/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/tpa/fhpl/hi",
      },
    },
  },
  Vidal: {
    title:
      "Vidal Health TPA - Corporate Health Insurance | 8,000+ Network Hospitals",
    description:
      "Vidal Health TPA specializes in corporate health insurance with 8,000+ network hospitals, quick pre-authorization, and comprehensive healthcare administration services.",
    keywords: [
      "Vidal Health TPA, Vidal TPA hospitals, corporate health insurance, business health TPA, healthcare administration"
    ],
    openGraph: {
      title:
        "Vidal Health TPA - Corporate Health Insurance | 8,000+ Network Hospitals",
      description:
        "Vidal Health TPA specializes in corporate health insurance with 8,000+ network hospitals, quick pre-authorization, and comprehensive healthcare administration services.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/tpa/vidal/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/tpa/vidal/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/tpa/vidal/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/tpa/vidal/hi",
      },
    },
  },
  Ghico: {
    title:
      "GHICO TPA - Government Health Insurance | CGHS & Public Sector Coverage",
    description:
      "Government Health Insurance Company (GHICO) TPA provides specialized services for CGHS beneficiaries and government employees with dedicated support and streamlined processes.",
    keywords: [
      "GHICO TPA, Government Health Insurance Company, CGHS TPA, government employee health insurance, public sector healthcare"
    ],
    openGraph: {
      title:
        "GHICO TPA - Government Health Insurance | CGHS & Public Sector Coverage",
      description:
        "Government Health Insurance Company (GHICO) TPA provides specialized services for CGHS beneficiaries and government employees with dedicated support and streamlined processes.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/tpa/ghico/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/tpa/ghico/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/tpa/ghico/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/tpa/ghico/hi",
      },
    },
  },
  PrivacyPolicy: {
    title:
      "SecureNow Privacy Policy – Check Insurance Company Purpose and Scope",
    description:
      "Check SecureNow privacy policy details and know purpose and scope of insurance company privacy policy. You can know what user personal information they we collect.",
    // keywords: [
    //   "GHICO TPA, Government Health Insurance Company, CGHS TPA, government employee health insurance, public sector healthcare"
    // ],
    openGraph: {
      title:
        "SecureNow Privacy Policy – Check Insurance Company Purpose and Scope",
      description:
        "Check SecureNow privacy policy details and know purpose and scope of insurance company privacy policy. You can know what user personal information they we collect.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/privacy-policy/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/privacy-policy/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/privacy-policy/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/privacy-policy/hi",
      },
    },
  },
  TermsConditions: {
    title:
      "SecureNow - Terms, Conditions, Disclaimer, Cancellation/Refund Policy",
    description:
      "Know About SecureNow Terms & Conditions, Disclaimer, Warranties, Limitation of Liability, Cancellation, Refund, Warning, Jurisdiction, Trademarks and Copyrights Details.",
    // keywords: [
    //   "GHICO TPA, Government Health Insurance Company, CGHS TPA, government employee health insurance, public sector healthcare"
    // ],
    openGraph: {
      title:
        "SecureNow - Terms, Conditions, Disclaimer, Cancellation/Refund Policy",
      description:
        "Know About SecureNow Terms & Conditions, Disclaimer, Warranties, Limitation of Liability, Cancellation, Refund, Warning, Jurisdiction, Trademarks and Copyrights Details.",
      url: process.env.NEXT_PUBLIC_PAM_URL+"/terms-and-conditions/",
      siteName: "Group Health Insurance",
      type: "website",
      images: [
        {
          url: process.env.NEXT_PUBLIC_PAM_URL+"/logo.png",
          width: 1200,
          height: 630,
          alt: "Group Health Insurance - SecureNow",
        },
      ],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_PAM_URL+"/terms-and-conditions/",
      languages: {
        "en-IN": process.env.NEXT_PUBLIC_PAM_URL+"/terms-and-conditions/",
        "hi-IN": process.env.NEXT_PUBLIC_PAM_URL+"/terms-and-conditions/hi",
      },
    },
  },
};
