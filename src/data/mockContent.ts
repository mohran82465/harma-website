import { PartnerItem, NewsArticle, BlogPost, CareerRole, FaqItem } from '../types';

export const mudabbirModules = [
  {
    id: "reservations",
    icon: "CalendarCheck2",
    title: { en: "Reservations & Folios", ar: "الحجوزات وفواتير النزلاء (Folios)" },
    desc: { 
      en: "Multi-rate master calendars, split billing, corporate folios, and seamless check-in/out workflows.", 
      ar: "تقويم حجوزات شامل، تجزئة الفواتير، حسابات الشركات والوفود، وإجراءات دخول وخروج سلسة وسريعة." 
    }
  },
  {
    id: "housekeeping",
    icon: "Sparkles",
    title: { en: "Housekeeping & Inspection", ar: "التدبير الفندقي والنظافة" },
    desc: { 
      en: "Real-time room status tracking, automated attendant task dispatch, and supervisor mobile inspection checklist.", 
      ar: "تحديث فوري لحالة الغرف والوحدات، توزيع آلي للمهام على فرق النظافة، وقوائم فحص رقمية للمشرفين." 
    }
  },
  {
    id: "maintenance",
    icon: "Wrench",
    title: { en: "Preventative Maintenance", ar: "الصيانة الوقائية والطارئة" },
    desc: { 
      en: "Room downtime scheduling, preventive equipment maintenance, and technician mobile dispatch with spare parts tracking.", 
      ar: "جدولة إيقاف الغرف للصيانة، إدارة الصيانة الوقائية للأصول والمعدات، وتتبع قطع الغيار وفنيي الصيانة." 
    }
  },
  {
    id: "zatca",
    icon: "ShieldCheck",
    title: { en: "ZATCA E-Invoicing", ar: "الفوترة الإلكترونية (زاتكا)" },
    desc: { 
      en: "Direct cryptographic integration with ZATCA Fatoora portal, QR code generation, and compliant XML archiving.", 
      ar: "ربط فوري وتشفير رقمي مباشر مع منصة فاتورة (هيئة الزكاة والضريبة)، توليد رمز الاستجابة السريع، وأرشفة آمنة." 
    }
  },
  {
    id: "pos",
    icon: "Store",
    title: { en: "Point of Sale (POS)", ar: "نقاط البيع والمطاعم (POS)" },
    desc: { 
      en: "F&B outlets, room service charging directly to guest room folios, and retail inventory synchronisation.", 
      ar: "نقاط بيع مدمجة للمطاعم والمقاهي، ترحيل مباشر للفواتير على حساب الغرفة، ومزامنة لحظية للمخزون." 
    }
  },
  {
    id: "nightAudit",
    icon: "Moon",
    title: { en: "Automated Night Audit", ar: "التدقيق الليلي الآلي" },
    desc: { 
      en: "One-click end-of-day revenue reconciliation, room rate postings, discrepancy alerts, and executive reporting.", 
      ar: "إقفال اليومية ومطابقة الإيرادات بنقرة واحدة، ترحيل أسعار الغرف تلقائياً، وتنبيهات فروقات الإشغال." 
    }
  },
  {
    id: "inventory",
    icon: "PackageCheck",
    title: { en: "Inventory & Guest Supplies", ar: "المستودعات ومستلزمات الضيوف" },
    desc: { 
      en: "Linen, amenities, minibar par-levels, purchase requisitions, and multi-warehouse hotel stock control.", 
      ar: "مراقبة مستلزمات الغرف والضيافة، البياضات والميني بار، أوامر الشراء وإدارة المستودعات المتعددة." 
    }
  },
  {
    id: "channelManager",
    icon: "Globe2",
    title: { en: "Channel Manager Sync", ar: "إدارة قنوات الحجز (Channel Manager)" },
    desc: { 
      en: "Two-way two-second rate and inventory synchronization with Booking.com, Agoda, Expedia, and GDS platforms.", 
      ar: "مزامنة لحظية ثنائية الاتجاه للأسعار والغرف الشاغرة مع بوكينج، أجودا، إكسبيديا، والمحركات العالمية." 
    }
  },
  {
    id: "hrPayroll",
    icon: "Users",
    title: { en: "HR & Saudi GOSI / Qiwa", ar: "الموارد البشرية والرواتب (قوى والتأمينات)" },
    desc: { 
      en: "Saudi labor law compliance, shift rotations, biometric attendance, WPS file generation, and leave approvals.", 
      ar: "إدارة متوافقة مع نظام العمل السعودي، نوبات العمل الفندقية، حماية الأجور (WPS)، وبصمة الحضور والانصراف." 
    }
  },
  {
    id: "financeVat",
    icon: "Receipt",
    title: { en: "Financial Accounting & 15% VAT", ar: "المحاسبة المالية وضريبة القيمة المضافة" },
    desc: { 
      en: "Multi-ledger charts of accounts tailored for hospitality, trial balances, and automated Saudi VAT returns.", 
      ar: "شجرة حسابات مخصصة لقطاع الفنادق، ميزان مراجعة فوري، وإقرارات ضريبة القيمة المضافة بالريال السعودي." 
    }
  },
  {
    id: "guestServices",
    icon: "ConciergeBell",
    title: { en: "Guest Portal & Concierge", ar: "بوابة الضيف والخدمات الذاتية" },
    desc: { 
      en: "Contactless mobile check-in, digital key integration, wake-up calls, and in-room digital service requests.", 
      ar: "تسجيل دخول ذاتي عبر الهاتف، الربط مع المفاتيح الذكية، وطلب الخدمات والغسيل رقمياً دون انتظار." 
    }
  },
  {
    id: "securityRoles",
    icon: "KeyRound",
    title: { en: "Granular RBAC & Audit Trails", ar: "الصلاحيات المتقدمة وسجل العمليات" },
    desc: { 
      en: "Strict duty segregation for cashiers, receptionists, auditors, and unalterable activity logs for full auditability.", 
      ar: "فصل دقيق للمهام والصلاحيات بين موظفي الاستقبال وأمناء الصناديق والمدققين مع سجل تتبع كامل ومحمي." 
    }
  }
];

export const mudabbirPropertyTypes = [
  {
    id: "hotels",
    name: { en: "Luxury Hotels & Boutique Inns", ar: "الفنادق الفاخرة والبوتيك" },
    desc: { 
      en: "Full front-desk, folios, concierge, night audit, and integrated dining facilities.", 
      ar: "إدارة متكاملة للاستقبال، فواتير النزلاء، التدقيق الليلي، والمطاعم والخدمات." 
    }
  },
  {
    id: "resorts",
    name: { en: "Destination Resorts & Chalets", ar: "المنتجعات والشاليهات" },
    desc: { 
      en: "Villa-level scheduling, seasonal dynamic pricing, pool maintenance, and activity booking.", 
      ar: "جدولة الوحدات والشاليهات، تسعير موسمي مرن، صيانة المسابح ومرافق الترفيه." 
    }
  },
  {
    id: "servicedApartments",
    name: { en: "Serviced Apartments & Suites", ar: "الشقق الفندقية والأجنحة المفروشة" },
    desc: { 
      en: "Short & long-stay contracts, meter utility billing, linen rotations, and corporate leasing.", 
      ar: "عقود الإقامة القصيرة والطويلة، احتساب فواتير الخدمات، وتأجير الشركات والوفود." 
    }
  },
  {
    id: "compounds",
    name: { en: "Residential Compounds & Gated Communities", ar: "المجمعات السكنية والمغلقة" },
    desc: { 
      en: "Multi-tenant leases, security gate access logs, facility maintenance, and tenant portals.", 
      ar: "إدارة الإيجارات المتعددة، سجلات بوابات الدخول والأمن، وتطبيق مخصص للسكان." 
    }
  }
];

export const khetatCapabilities = [
  {
    id: "subscriptions",
    title: { en: "Subscriptions & Billing", ar: "الاشتراكات والفوترة الدورية" },
    desc: { 
      en: "Automate plans, renewals, trials, discounts, and recurring invoicing.", 
      ar: "أتمتة الباقات والتجديدات، الفترات التجريبية، الخصومات، وإصدار الفواتير الدورية آلياً." 
    },
    iconName: "Repeat"
  },
  {
    id: "sales",
    title: { en: "Sales", ar: "المبيعات والعملاء" },
    desc: { 
      en: "Manage customers, quotations, invoices, and receipts in one flow.", 
      ar: "إدارة دورة العملاء، عروض الأسعار، الفواتير المعتمدة، وسندات القبض في مسار موحد." 
    },
    iconName: "TrendingUp"
  },
  {
    id: "products",
    title: { en: "Products & Services", ar: "المنتجات والخدمات" },
    desc: { 
      en: "A flexible catalog with configurable pricing and tax rules.", 
      ar: "دليل مرن للمنتجات والخدمات مع تسعير مخصص وقواعد ضريبية متقدمة لكل شركة." 
    },
    iconName: "Boxes"
  },
  {
    id: "projects",
    title: { en: "Projects", ar: "المشاريع والمهام" },
    desc: { 
      en: "Track project work and link billable tasks straight to invoices.", 
      ar: "متابعة مراحل ومخرجات المشاريع وربط ساعات العمل القابلة للفوترة بالفواتير مباشرة." 
    },
    iconName: "Kanban"
  },
  {
    id: "procurement",
    title: { en: "Procurement", ar: "المشتريات والموردين" },
    desc: { 
      en: "Handle suppliers, purchase orders, bills, and payments.", 
      ar: "إدارة سجل الموردين، أوامر الشراء واعتمادها، فواتير الشراء وسندات الصرف." 
    },
    iconName: "ShoppingBag"
  },
  {
    id: "accounting",
    title: { en: "Accounting", ar: "المحاسبة والمالية" },
    desc: { 
      en: "Chart of accounts, journals, receivables, payables, and financial reports.", 
      ar: "شجرة حسابات مرنة، قيود اليومية، حسابات المدينين والدائنين، والقوائم المالية." 
    },
    iconName: "Calculator"
  },
  {
    id: "hr",
    title: { en: "Human Resources", ar: "الموارد البشرية" },
    desc: { 
      en: "Organization structure, attendance, and payroll, all connected.", 
      ar: "الهيكل التنظيمي، سجلات الحضور، ومسيرات الرواتب في نظام موحد ومتصل." 
    },
    iconName: "Users2"
  },
  {
    id: "reports",
    title: { en: "Reports & Observability", ar: "التقارير والمراقبة الشاملة" },
    desc: { 
      en: "Executive dashboards, drill-downs, and system health monitoring in one view.", 
      ar: "لوحات قيادة تنفيذية، تقارير تحليلية تفصيلية، ومراقبة مؤشرات الأداء الحية." 
    },
    iconName: "BarChart3"
  }
];

export const khetatConfigurableHighlights = [
  {
    id: "modules",
    label: { en: "Modules on/off per company", ar: "تفعيل أو تعطيل الوحدات لكل شركة باستقلالية" },
    icon: "SlidersHorizontal"
  },
  {
    id: "billing",
    label: { en: "Custom billing cycles & pricing rules", ar: "دورات فوترة وقواعد تسعير مخصصة" },
    icon: "Clock3"
  },
  {
    id: "templates",
    label: { en: "Configurable taxes, numbering & templates", ar: "تخصيص الضرائب والتسلسل وقوالب الطباعة" },
    icon: "FileCode2"
  },
  {
    id: "rbac",
    label: { en: "Role-based access per company", ar: "صلاحيات وأدوار دقيقة مستقلة لكل كيان تجاري" },
    icon: "ShieldAlert"
  }
];

export const partnersData: PartnerItem[] = [
  {
    id: "zatca",
    name: { en: "ZATCA Fatoora Platform", ar: "منصة فاتورة (هيئة الزكاة والضريبة والجمارك)" },
    category: { en: "Regulatory & Compliance", ar: "التوافق والربط الحكومي" },
    description: { 
      en: "Certified ZATCA integration for instant electronic invoice clearance, reporting, and secure QR generation.", 
      ar: "ربط تقني معتمد لإرسال الفواتير واعتمادها إلكترونياً وتوليد الأكواد المشفرة." 
    },
    iconName: "FileCheck",
    badge: { en: "ZATCA Certified", ar: "معتمد من زاتكا" },
    partnerType: "integration"
  },
  {
    id: "mada",
    name: { en: "Mada & Saudi Payments Network", ar: "شبكة مدى والمدفوعات السعودية" },
    category: { en: "Payment Infrastructure", ar: "بوابات الدفع الوطنية" },
    description: { 
      en: "Native POS and online terminal integrations supporting Mada cards, Apple Pay, and Visa/MasterCard transactions.", 
      ar: "ربط مباشر لأجهزة نقاط البيع والدفع الإلكتروني عبر بطاقات مدى، أبل باي، والبطاقات العالمية." 
    },
    iconName: "CreditCard",
    badge: { en: "SAR Native", ar: "دعم الريال المباشر" },
    partnerType: "technology"
  },
  {
    id: "siteminder",
    name: { en: "SiteMinder & Sabre GDS", ar: "سايت مايندر وشبكات الحجز العالمية (GDS)" },
    category: { en: "OTA Channel Distribution", ar: "توزيع قنوات الحجز العالمية" },
    description: { 
      en: "Real-time two-way synchronization connecting Saudi hotels to 450+ global booking engines and travel agents.", 
      ar: "مزامنة لحظية ثنائية الاتجاه تربط الفنادق بأكثر من 450 منصة حجز وسياحة وسفر حول العالم." 
    },
    iconName: "Share2",
    partnerType: "channel"
  },
  {
    id: "dormakaba",
    name: { en: "Dormakaba & VingCard Smart Locks", ar: "دورماكابا وأنظمة الأقفال الذكية (VingCard)" },
    category: { en: "Hardware & Hospitality IoT", ar: "الأجهزة الذكية وإنترنت الأشياء" },
    description: { 
      en: "Instant RFID keycard encoding and contactless mobile Bluetooth key generation straight from front desk.", 
      ar: "برمجة بطاقات الغرف الذكية فورياً ومفاتيح البلوتوث للهاتف المحمول من شاشة الاستقبال مباشرة." 
    },
    iconName: "Key",
    partnerType: "technology"
  },
  {
    id: "elm",
    name: { en: "Elm & National Information Center", ar: "شركة علم ومنظومة شموس وبلدي" },
    category: { en: "Identity & Security Compliance", ar: "التدقيق الأمني وشموس" },
    description: { 
      en: "Automated guest identity verification and instant transmission of guest records to Saudi security systems.", 
      ar: "التحقق الفوري من هويات النزلاء والرفع التلقائي لبيانات الإقامة لنظام شموس الأمني المعتمد." 
    },
    iconName: "UserCheck",
    badge: { en: "Shamoos Ready", ar: "متوافق مع شموس" },
    partnerType: "integration"
  },
  {
    id: "oracle",
    name: { en: "Oracle Cloud Infrastructure (Saudi Region)", ar: "سحابة أوراكل (منطقة بيانات المملكة)" },
    category: { en: "Sovereign Cloud Hosting", ar: "البنية السحابية السيادية" },
    description: { 
      en: "Tier-4 in-Kingdom data centers delivering 99.99% uptime, PDPL compliance, and ultra-low latency within KSA.", 
      ar: "مراكز بيانات داخل المملكة بمعايير الفئة الرابعة (Tier-4) لتوفير أداء فائق وتوافق تام مع نظام حماية البيانات." 
    },
    iconName: "Server",
    badge: { en: "Tier-4 KSA", ar: "خوادم داخل المملكة" },
    partnerType: "technology"
  },
  {
    id: "qiwa",
    name: { en: "Ministry of Human Resources (Qiwa & Mudad)", ar: "منصتا قوى ومُدد (وزارة الموارد البشرية)" },
    category: { en: "Government Workforce Integration", ar: "التوافق الحكومي للعمل والرواتب" },
    description: { 
      en: "Automated wage protection system (WPS) files and contract sync complying with Saudi labor portal standards.", 
      ar: "توليد ملفات حماية الأجور (WPS) ومزامنة بيانات عقود العمل وفق لوائح منصة قوى المعتمدة." 
    },
    iconName: "Briefcase",
    partnerType: "integration"
  },
  {
    id: "stc",
    name: { en: "stc pay & Enterprise SMS Gateway", ar: "إس تي سي باي وبوابات الرسائل النصية" },
    category: { en: "FinTech & Notifications", ar: "التقنية المالية والإشعارات" },
    description: { 
      en: "Instant reservation confirmation SMS, digital billing links, and local digital wallet acceptance.", 
      ar: "إرسال رسائل تأكيد الحجوزات، روابط الفواتير الإلكترونية، والدفع الفوري عبر المحافظ الرقمية المحلية." 
    },
    iconName: "Smartphone",
    partnerType: "channel"
  }
];

export const newsArticles: NewsArticle[] = [
  {
    id: "zatca-phase-2-certification",
    title: { 
      en: "Harma Company Completes Official ZATCA Certification for Mudabbir ERP", 
      ar: "شركة هارما تنجز بنجاح الاعتماد الرسمي للفوترة الإلكترونية لنظام مدبّر" 
    },
    date: "August 2026",
    category: { en: "Compliance & Accreditation", ar: "الاعتمادات والتوافق" },
    excerpt: { 
      en: "The Saudi Zakat, Tax and Customs Authority confirms Mudabbir's full technical compliance with cryptographic stamping and XML clearance.", 
      ar: "أكدت هيئة الزكاة والضريبة والجمارك التوافق التقني الكامل لنظام مدبّر مع متطلبات الربط والتكامل والختم الرقمي." 
    },
    content: {
      en: [
        "Riyadh, Saudi Arabia — Harma Company for IT Systems has officially completed all regulatory requirements and technical validations for ZATCA integration with the Fatoora platform.",
        "Mudabbir Hospitality ERP now enables hotels, resorts, and serviced apartments across the Kingdom to issue cryptographically signed B2B tax invoices and B2C simplified tax invoices automatically upon guest checkout.",
        "With built-in cryptographic stamp generation, unique invoice identifiers (UUID), sequential hash chains, and real-time QR generation, property operators avoid compliance fines and eliminate manual bookkeeping overhead.",
        "'Our commitment has always been sovereign reliability for the Saudi hospitality sector,' noted the Head of Engineering at Harma. 'This milestone gives hotel general managers peace of mind knowing their entire PMS and ERP stack is 100% compliant with Saudi legislation.'"
      ],
      ar: [
        "الرياض، المملكة العربية السعودية — أعلنت شركة هارما لنظم تقنية المعلومات عن اكتمال كافة الفحوصات التقنية والمتطلبات التشريعية لربط نظام مدبّر لإدارة الضيافة مع منصة (فاتورة) التابعة لهيئة الزكاة والضريبة والجمارك (مرحلة الربط والتكامل).",
        "يمكّن هذا الاعتماد الفنادق والمنتجعات والشقق الفندقية في مختلف مناطق المملكة من إصدار الفواتير الضريبية للشركات والفواتير الضريبية المبسطة للأفراد مختومة رقمياً ومطابقة لمواصفات الهيئة لحظة مغادرة النزيل.",
        "يشتمل النظام على توليد الختم الرقمي المعتمد، المعرف الفريد للفاتورة (UUID)، التسلسل المشفر غير القابل للتعديل، والرمز الرقمي (QR Code) المشفر، مما يحمي المنشآت من المخالفات ويوفر الوقت والجهد.",
        "صرّح رئيس الفريق الهندسي في هارما: 'هدفنا الدائم هو تزويد قطاع الضيافة السعودي بحلول تقنية وطنية سيادية تضمن الامتثال الكامل، وتمنح مدراء الفنادق الثقة التامة في إدارة العمليات المالية والضريبية بكل أمان.'"
      ]
    },
    readTime: { en: "3 min", ar: "3 دقائق" }
  },
  {
    id: "khetat-multi-company-engine",
    title: { 
      en: "Harma Launches Khetat 3.0: Sovereign Multi-Company Architecture for Saudi Holdings", 
      ar: "هارما تطلق الإصدار الثالث من منصة خُطط: بنية سحابية متعددة الشركات للمجموعات القابضة" 
    },
    date: "July 2026",
    category: { en: "Product Release", ar: "إطلاق المنتجات" },
    excerpt: { 
      en: "Khetat 3.0 introduces isolated company ledgers, unified corporate charts of accounts, and flexible module enablement per commercial registration.", 
      ar: "يقدم الإصدار الجديد دليلاً موحداً للحسابات، وعزل كامل للدفاتر المالية لكل سجل تجاري مع إمكانية تخصيص الوحدات لكل شركة." 
    },
    content: {
      en: [
        "Modern business groups in Saudi Arabia frequently operate across diverse commercial registers — from property development and hospitality to consulting and trading.",
        "Khetat 3.0 was engineered specifically to solve this multi-entity challenge without forcing businesses into rigid, one-size-fits-all ERP paradigms.",
        "With the new release, group administrators can enable or disable modules (Subscriptions, Projects, Procurement, HR) per individual company while maintaining real-time consolidated executive oversight.",
        "Custom billing cycles, dedicated bank accounts, distinct VAT numbers, and independent user permissions can now be configured in minutes."
      ],
      ar: [
        "تدير المجموعات والشركات في المملكة العربية السعودية أنشطة تجارية متعددة تحت سجلات تجارية مختلفة، بدءاً من التطوير العقاري والضيافة وصولاً إلى الخدمات والتجارة.",
        "تم تصميم منصة خُطط (الإصدار 3.0) خصيصاً لحل تحديات إدارة الكيانات المتعددة دون إجبار المنشأة على التكيف مع أنظمة محاسبية معقدة أو جامدة.",
        "يتيح الإصدار الجديد للمجموعات تفعيل أو إيقاف الوحدات (الاشتراكات، المشاريع، المشتريات، الموارد البشرية) لكل شركة وسجل تجاري على حدة، مع الحفاظ على لوحة تحكم موحدة للإدارة العليا.",
        "يمكن الآن ضبط دورات الفوترة، الحسابات البنكية المستقلة، أرقام ضريبة القيمة المضافة، والصلاحيات التنظيمية لكل كيان خلال دقائق وبأعلى مرونة."
      ]
    },
    readTime: { en: "4 min", ar: "4 دقائق" }
  },
  {
    id: "hospitality-summit-riyadh",
    title: { 
      en: "Harma Showcases Saudi Hospitality Technology at Saudi Tourism Investment Forum", 
      ar: "هارما تستعرض أحدث ابتكارات تقنية الضيافة في منتدى الاستثمار السياحي السعودي بالرياض" 
    },
    date: "June 2026",
    category: { en: "Events & Corporate", ar: "الفعاليات والأخبار" },
    excerpt: { 
      en: "Harma presented its end-to-end Mudabbir ecosystem, demonstrating 40% reductions in hotel check-in times and automated folio reconciliation.", 
      ar: "استعرضت هارما منظومة مدبّر المتكاملة، مسلطة الضوء على خفض زمن تسجيل الدخول بنسبة 40% وتسوية فواتير النزلاء آلياً." 
    },
    content: {
      en: [
        "At the Riyadh International Convention Center, Harma's leadership team engaged with hospitality operators, hotel owners, and real estate developers looking to modernize their infrastructure in alignment with Saudi Vision 2030.",
        "Demonstrations highlighted Mudabbir's zero-hardware cloud deployment, Arabic-first interface, and native integrations with local payment rails.",
        "Visitors experienced interactive terminals showing live room status updates, housekeeper task dispatch via mobile web, and instant digital check-in.",
        "Harma confirmed new strategic enterprise partnerships with regional resort operators in Taif, AlUla, and the Eastern Province."
      ],
      ar: [
        "في مركز الرياض الدولي للمؤتمرات والمعارض، التقى قياديو شركة هارما بنخبة من ملاك الفنادق والمطورين العقاريين ومشغلي المنشآت السياحية الباحثين عن تطوير بنيتهم التقنية دعماً لمستهدفات رؤية المملكة 2030.",
        "شهد جناح هارما استعراضاً حياً لكيفية تشغيل نظام مدبّر سحابياً دون الحاجة إلى خوادم محلية مكلفة، مع واجهات عربية أصيلة ودعم فوري للدفع بالريال السعودي.",
        "جرى استعراض إدارة الغرف الحية، وتوزيع المهام على فرق النظافة عبر الهواتف الذكية، وحجوزات النزلاء الذاتية السريعة.",
        "كما أعلنت الشركة عن توقيع اتفاقيات استراتيجية جديدة مع عدد من مشغلي المنتجعات والوجهات الفندقية في الطائف، العلا، والمنطقة الشرقية."
      ]
    },
    readTime: { en: "3 min", ar: "3 دقائق" }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "zatca-phase-2-hospitality-guide",
    title: { 
      en: "The Executive Guide to ZATCA E-Invoicing for Saudi Hotels & Resorts", 
      ar: "الدليل التنفيذي لربط الفنادق والمنتجعات مع الفوترة الإلكترونية (زاتكا)" 
    },
    date: "September 2026",
    category: { en: "Compliance Guide", ar: "دليل الامتثال" },
    author: { en: "Harma Regulatory & Tech Team", ar: "فريق هارما للتشريعات والتقنية" },
    excerpt: { 
      en: "Understand cryptographic clearance, cryptographic stamps, and split-folio challenges in Saudi hospitality operations.", 
      ar: "تعرف على آليات الربط المباشر، الختم المشفر، وتحديات تجزئة فواتير النزلاء والشركات وفق لوائح الهيئة." 
    },
    content: {
      en: [
        "In the hospitality industry, billing is inherently multifaceted: guests extend stays, split incidentals between room rates and restaurant charges, or require corporate billing for business delegations.",
        "Under ZATCA regulations, every invoice issued must be signed with an authorized Cryptographic Stamp Identifier (CSID) and transmitted directly to the Fatoora platform.",
        "Traditional legacy PMS systems struggle with real-time API latency. Mudabbir overcomes this by utilizing asynchronous queueing and pre-validated XML structures, ensuring your front desk never faces slow checkouts.",
        "Key best practices include configuring automated folio auditing during night audit, validating corporate VAT numbers in real-time, and archiving all cryptographic invoices locally in Saudi-hosted storage."
      ],
      ar: [
        "تتميز عمليات الفوترة في قطاع الفنادق بالتعقيد الطبيعي: فالنزيل قد يمدد إقامته، أو يطلب تقسيم الفاتورة بين مصاريف الغرفة والمطعم، أو تحويل الحساب لجهة عمله وسجلها التجاري.",
        "وفق متطلبات الفوترة الإلكترونية، يجب أن تحمل كل فاتورة ختماً رقمياً مشفراً (CSID) وأن يتم ربطها واعتمادها مباشرة مع منصة فاتورة.",
        "تواجه الأنظمة الفندقية التقليدية مشكلات في بطء استجابة الربط مما يعطل موظفي الاستقبال. يتغلب نظام مدبّر على هذا التحدي عبر طوابير إرسال غير متزامنة وقوالب معالجة مسبقة للبيانات تضمن سرعة إنهاء إجراءات النزيل في ثوانٍ معدودة.",
        "أهم التوصيات تشمل أتمتة تدقيق الفواتير خلال التدقيق الليلي، والتحقق الآلي من صحة الأرقام الضريبية للشركات، والأرشفة المعتمدة في خوادم سعودية."
      ]
    },
    readTime: { en: "5 min", ar: "5 دقائق" }
  },
  {
    id: "optimizing-revpar-and-turnaround",
    title: { 
      en: "Maximizing RevPAR: How Connected Housekeeping and Automated Night Audit Drive Margins", 
      ar: "تعظيم متوسط العائد لكل غرفة (RevPAR): كيف تسهم أتمتة النظافة والتدقيق الليلي في الربحية" 
    },
    date: "August 2026",
    category: { en: "Operations & Profitability", ar: "العمليات والربحية" },
    author: { en: "Hospitality Practice Lead, Harma", ar: "رئيس استشارات الضيافة، هارما" },
    excerpt: { 
      en: "Discover how real-time room readiness alerts and two-way OTA sync eliminate lost booking windows and reduce front desk overhead.", 
      ar: "اكتشف كيف يؤدي التحديث اللحظي لجاهزية الغرف ومزامنة قنوات الحجز إلى تفادي الغرف الشاغرة ورفع رضا النزلاء." 
    },
    content: {
      en: [
        "In peak Saudi tourism seasons — such as Riyadh Season, Jeddah Season, and religious travel — every 30 minutes of room turnaround time directly affects your RevPAR.",
        "When housekeeping updates room status on mobile clipboards rather than radio walkie-talkies, the front desk can check guests in earlier, reducing queue times and maximizing upsell potential.",
        "Integrated folios guarantee that room service, laundry, and minibar charges are locked instantly, preventing disputed charges during morning rush checkout.",
        "With Mudabbir's unified property dashboard, general managers gain instant visibility into room turnover times, staff productivity, and channel yields."
      ],
      ar: [
        "في مواسم السياحة الكبرى في المملكة — كموسم الرياض وموسم جدة ومواسم العمرة والزيارة — فإن كل 30 دقيقة يتم توفيرها في تجهيز الغرفة تنعكس مباشرة على متوسط الإيراد اليومي ونسبة الإشغال.",
        "عندما يستخدم طاقم النظافة تطبيقاً هاتفياً خفيفاً لتحديث جاهزية الغرف بدلاً من أجهزة الاتصال اللاسلكي التقليدية، يمكن للاستقبال تسكين النزلاء الجدد فوراً ودون أي تأخير.",
        "الربط المباشر بين نقاط البيع وغرف النزلاء يمنع فقدان فواتير الخدمات الإضافية كالميني بار وخدمة الغسيل، ويقضي تماماً على النزاعات المالية وقت المغادرة.",
        "تمنح لوحة المتابعة الشاملة في مدبّر مدراء الفنادق نظرة لحظية على كفاءة الفرق وسرعة تجهيز الوحدات ومردود كل قناة حجز."
      ]
    },
    readTime: { en: "6 min", ar: "6 دقائق" }
  },
  {
    id: "multi-tenant-saas-architecture",
    title: { 
      en: "Configurable vs. Hard-Coded: Why Saudi Businesses Choose Khetat Over Rigid Legacy ERP", 
      ar: "الأنظمة المرنة مقابل الأنظمة الجامدة: لماذا تختار الشركات السعودية منصة خُطط؟" 
    },
    date: "July 2026",
    category: { en: "Technology & Architecture", ar: "التقنية والأنظمة" },
    author: { en: "Solutions Architect, Harma", ar: "مهندس الحلول السحابية، هارما" },
    excerpt: { 
      en: "A deep dive into why hard-coded business rules lead to costly consultants, and how dynamic module toggles enable agile growth.", 
      ar: "تحليل عملي يوضح أسباب فشل الأنظمة المحاسبية المعقدة، وكيف تتيح منصة خُطط نمواً مرناً بتكلفة تشغيلية منخفضة." 
    },
    content: {
      en: [
        "Traditional enterprise software forces companies to reshape their workflows around rigid database structures. Modifying a billing cycle or adding an approval workflow requires months of consulting.",
        "Khetat was designed on a composable multi-company core: each organization activates only the modules it needs, from recurring subscription billing to procurement and project management.",
        "Data isolation between sister companies ensures confidentiality, while holding company controllers retain executive visibility across all legal entities.",
        "This modularity provides the enterprise capabilities of global software paired with native adherence to Saudi business culture and legal standards."
      ],
      ar: [
        "تجبر أنظمة الـ ERP التقليدية الشركات على تغيير طريقة عملها لتتوافق مع قيود النظام البرمجي، وتتطلب أي تعديلات في دورات الفوترة أو سلاسل الاعتماد أشهراً من الاستشارات المكلفة.",
        "تم بناء منصة خُطط على معمارية معيارية مرنة: تقوم كل منشأة بتفعيل الوحدات التي تحتاجها فقط، سواء الفوترة المتكررة، إدارة المشاريع، أو المشتريات والموارد البشرية.",
        "عزل البيانات المحاسبية بين الشركات التابعة يضمن استقلالية وسرية كل سجل تجاري، مع إتاحة لوحة تحكم مجمعة لقيادات المجموعة القابضة لمتابعة الأداء الإجمالي.",
        "تجمع هذه المرونة بين قوة وكفاءة المنصات العالمية، والالتزام الكامل بطبيعة وبيئة الأعمال والأنظمة في المملكة العربية السعودية."
      ]
    },
    readTime: { en: "4 min", ar: "4 دقائق" }
  }
];

export const careerRoles: CareerRole[] = [
  {
    id: "senior-backend-engineer",
    title: { en: "Senior Backend Engineer (Distributed Systems)", ar: "مهندس نظم خلفية أول (Distributed Systems)" },
    department: { en: "Core Platform Engineering", ar: "فريق تطوير المنصات السحابية" },
    location: { en: "Riyadh, KSA (Hybrid / Onsite)", ar: "الرياض، المملكة (حضوري / هجين)" },
    type: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "5+ Years", ar: "خبرة 5+ سنوات" },
    description: { 
      en: "Lead the architecture and scaling of sovereign multi-tenant databases, ZATCA cryptographic services, and high-throughput PMS event engines.", 
      ar: "قيادة وتطوير البنية السحابية للأنظمة متعددة الشركات، خدمات التشفير والربط مع هيئة الزكاة، ومحركات معالجة الحجوزات الفندقية اللحظية." 
    },
    requirements: {
      en: [
        "Deep expertise in Node.js/TypeScript or Go with high-concurrency microservices",
        "Extensive experience with PostgreSQL, schema partitioning, and transaction isolation",
        "Hands-on experience with cryptographic standards (ECDSA, SHA-256) and ZATCA specifications",
        "Experience designing multi-tenant B2B SaaS architectures with strict tenant isolation"
      ],
      ar: [
        "خبرة معمقة في TypeScript أو Go وبناء الأنظمة المصغرة ذات الأداء العالي",
        "إتقان متقدم لقواعد بيانات PostgreSQL وتقسيم الجداول والتعامل مع المعاملات المالية الحساسة",
        "خبرة عملية في معايير التشفير (ECDSA / SHA-256) ومواصفات الفوترة الإلكترونية المعتمدة",
        "دراية واسعة ببناء بنية الـ Multi-tenant B2B SaaS والعزل التام لبيانات العملاء"
      ]
    }
  },
  {
    id: "hospitality-product-specialist",
    title: { en: "Hospitality ERP Product Specialist", ar: "أخصائي منتج أول (نظم إدارة الضيافة والفنادق)" },
    department: { en: "Product & Industry Solutions", ar: "إدارة المنتجات والحلول المتخصصة" },
    location: { en: "Riyadh, KSA", ar: "الرياض، المملكة العربية السعودية" },
    type: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "4+ Years", ar: "خبرة 4+ سنوات" },
    description: { 
      en: "Bridge hotel operational excellence with modern software design. Work directly with Saudi hotel general managers and night auditors to continually refine Mudabbir.", 
      ar: "الربط بين أفضل الممارسات التشغيلية للفنادق وتصميم البرمجيات الحديثة، والعمل الميداني مع مدراء الفنادق والمدققين لتطوير ميزات نظام مدبّر." 
    },
    requirements: {
      en: [
        "Proven background working in hotel operations (Front Office, Revenue, or Night Audit) in KSA",
        "Deep understanding of PMS folios, channel managers, housekeeping turnarounds, and Saudi tourism regulations",
        "Fluency in Arabic and English with exceptional client presentation and requirements gathering skills",
        "Track record of translating hotel operational pain points into structured agile product specifications"
      ],
      ar: [
        "خبرة سابقة موثقة في عمليات الفنادق (المكاتب الأمامية، إدارة العائدات، أو التدقيق الليلي) في المملكة",
        "فهم دقيق لدورات حسابات النزلاء، أنظمة الـ Channel Manager، دورات النظافة، ولوائح وزارة السياحة",
        "إتقان تام للغتين العربية والإنجليزية مع مهارات تواصل متميزة مع القيادات الفندقية",
        "القدرة على تحويل التحديات التشغيلية إلى متطلبات تقنية مدروسة وقابلة للتطوير"
      ]
    }
  },
  {
    id: "enterprise-account-executive",
    title: { en: "Enterprise Sales Director (Hospitality & Real Estate)", ar: "مدير مبيعات الشركات الكبرى (الضيافة والتطوير العقاري)" },
    department: { en: "Commercial Growth & Partnerships", ar: "المبيعات والنمو الاستراتيجي" },
    location: { en: "Riyadh, KSA", ar: "الرياض، المملكة العربية السعودية" },
    type: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "6+ Years in KSA", ar: "خبرة 6+ سنوات في السوق السعودي" },
    description: { 
      en: "Drive strategic enterprise adoption of Mudabbir and Khetat among top hospitality groups, serviced apartment chains, and property holding companies across the Kingdom.", 
      ar: "قيادة صفقات المبيعات الاستراتيجية لنظامي مدبّر وخُطط مع كبرى مجموعات الضيافة، سلاسل الشقق المفروشة، والشركات العقارية في المملكة." 
    },
    requirements: {
      en: [
        "Demonstrated success closing 6-figure enterprise B2B SaaS or ERP deals in Saudi Arabia",
        "Established relationships with C-level executives, hotel owners, and asset managers in Riyadh, Jeddah, and Eastern Province",
        "Strong understanding of Saudi Vision 2030 tourism initiatives and hospitality software economics",
        "High degree of professional consultative selling and contract negotiation ability"
      ],
      ar: [
        "سجل نجاح متميز في إبرام صفقات برمجيات الـ B2B SaaS وأنظمة الـ ERP مع كبرى المنشآت في المملكة",
        "علاقات وطيدة مع صناع القرار وملاك الفنادق ومدراء الأصول في الرياض وجدة والمنطقة الشرقية",
        "إلمام عميق بمستهدفات قطاع السياحة ضمن رؤية 2030 واقتصاديات برمجيات الضيافة",
        "مهارات تفاوض واستشارات رفيعة المستوى لإتمام العقود والاتفاقيات المؤسسية"
      ]
    }
  }
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-mudabbir-zatca",
    category: "compliance",
    question: { 
      en: "Is Mudabbir certified for ZATCA (Fatoora) e-invoicing?", 
      ar: "هل نظام مدبّر معتمد رسمياً للفوترة الإلكترونية (زاتكا)؟" 
    },
    answer: { 
      en: "Yes. Mudabbir has completed full technical integration with the ZATCA Fatoora portal. It issues cryptographically stamped B2B tax invoices and B2C simplified tax invoices automatically with compliant QR codes and tamper-proof hash chains upon guest checkout.", 
      ar: "نعم، نظام مدبّر متكامل تقنياً بشكل كامل مع منصة فاتورة التابعة لهيئة الزكاة والضريبة والجمارك. يصدر النظام الفواتير الضريبية للشركات والفواتير المبسطة للأفراد مختومة رقمياً ومزودة برمز الاستجابة السريع والتسلسل المشفر تلقائياً عند الدفع أو المغادرة." 
    }
  },
  {
    id: "faq-mudabbir-properties",
    category: "mudabbir",
    question: { 
      en: "What property types are supported by Mudabbir?", 
      ar: "ما هي أنواع المنشآت العقارية والسياحية التي يدعمها نظام مدبّر؟" 
    },
    answer: { 
      en: "Mudabbir is purpose-built for hotels, luxury boutique resorts, serviced apartments, residential compounds, holiday villas, and chalets. It supports single-property operators up to multi-branch hospitality groups with centralized reservations.", 
      ar: "صُمم نظام مدبّر خصيصاً ليناسب الفنادق، المنتجعات الفاخرة، الشقق الفندقية المفروشة، المجمعات السكنية المغلقة، الشاليهات، والفلل السياحية، ويدعم إدارة المنشأة الفردية وصولاً إلى السلاسل والمجموعات متعددة الفروع." 
    }
  },
  {
    id: "faq-khetat-companies",
    category: "khetat",
    question: { 
      en: "How does Khetat handle multi-company setups with different commercial registrations?", 
      ar: "كيف تتعامل منصة خُطط مع إدارة شركات متعددة بسجلات تجارية مستقلة؟" 
    },
    answer: { 
      en: "Khetat features native multi-company architecture. Each subsidiary operates with its own commercial register, VAT number, chart of accounts, bank details, and enabled modules (e.g. Subscriptions on for one company, Projects on for another), while group executives enjoy consolidated real-time reporting.", 
      ar: "تتميز منصة خُطط ببنية سحابية أصيلة للشركات المتعددة؛ حيث يعمل كل كيان تجاري بسجله التجاري الخاص، ورقمه الضريبي، وشجرة حساباته، وحساباته البنكية، مع تفعيل الوحدات المطلوبة لكل نشاط، وإتاحة لوحة تحكم مجمعة للإدارة العليا." 
    }
  },
  {
    id: "faq-data-residency",
    category: "compliance",
    question: { 
      en: "Where is customer and guest data stored? Is it compliant with Saudi PDPL?", 
      ar: "أين يتم تخزين بيانات العملاء والنزلاء؟ وهل النظام متوافق مع نظام حماية البيانات الشخصية السعودي؟" 
    },
    answer: { 
      en: "All data is hosted securely in sovereign cloud facilities situated physically within the Kingdom of Saudi Arabia. We comply 100% with the Saudi Personal Data Protection Law (PDPL) and National Cybersecurity Authority (NCA) frameworks.", 
      ar: "تُحفظ كافة البيانات حصرياً داخل مراكز بيانات سحابية متقدمة داخل أراضي المملكة العربية السعودية، متوافقة بنسبة 100% مع نظام حماية البيانات الشخصية (PDPL) وضوابط الهيئة الوطنية للأمن السيبراني." 
    }
  },
  {
    id: "faq-hardware-requirements",
    category: "general",
    question: { 
      en: "Do we need on-premise local servers to run Mudabbir or Khetat?", 
      ar: "هل نحتاج إلى شراء خوادم محلية مكلفة لتشغيل نظام مدبّر أو خُطط؟" 
    },
    answer: { 
      en: "No expensive on-premise servers are required. Both platforms run on modern web and mobile architectures. Your staff can operate on any standard PC, tablet, or smartphone with an internet connection.", 
      ar: "لا يتطلب النظامان أي خوادم محلية باهظة الثمن. تعمل كلا المنصتين عبر السحابة بالكامل وتعملان بسلاسة تامة على أجهزة الكمبيوتر، الأجهزة اللوحية، والهواتف الذكية مع إمكانية التحديث التلقائي المستمر دون توقف." 
    }
  },
  {
    id: "faq-implementation-timeline",
    category: "general",
    question: { 
      en: "How long does implementation and staff onboarding take?", 
      ar: "كم يستغرق وقت تهيئة النظام وتدريب الموظفين؟" 
    },
    answer: { 
      en: "Standard onboarding typically takes between 3 to 10 business days. Our local implementation specialists in Riyadh migrate your existing guest/client data, configure room inventories, setup ZATCA credentials, and deliver bilingual staff training.", 
      ar: "يستغرق الإطلاق النموذجي ما بين 3 إلى 10 أيام عمل فقط. يتولى فريقنا المتخصص في الرياض نقل بياناتكم الحالية، تهيئة شجرة الحسابات والغرف، ربط أجهزة نقاط البيع وهيئة الزكاة، وتقديم تدريب عملي متكامل للموظفين بالعربية والإنجليزية." 
    }
  }
];
