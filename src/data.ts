export type Review = {
  name: string;
  city: string;
  rating: number;
  comment: string;
  avatar: string;
};

export type Feature = {
  icon: string;
  title: string;
  desc: string;
};

export type Spec = {
  label: string;
  value: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export const PRODUCT_IMAGES = [
  '/images/baffle-bluetooth-portable-kateche-ka115.jpg', // Image principale (fond blanc)
  '/images/sammaca-moudakhim-saout-kateche-ka-115.jpg',   // Infographie détaillée en arabe
  '/images/kateche-ka-115-portable-speaker-morocco.jpg'   // Photo de la boîte
];

// 2. Définition de l'image principale du site
export const HERO_IMAGE = PRODUCT_IMAGES[0];

export const REVIEWS: Review[] = [
  {
    name: 'يوسف العلوي',
    city: 'الدار البيضاء',
    rating: 5,
    comment:
      'السماعة قوية بزاف! الصوت نقي والإضاءة ديالها كتعطي جو رائع في الليل. طلبتها ووصلاتني فاليوم التالي بلا مشاكل. خدمة الدفع عند الاستلام مريحة بزاف.',
    avatar:
      'https://images.pexels.com/photos/3750149/pexels-photo-3750149.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    name: 'سارة بنعيسى',
    city: 'الرباط',
    rating: 5,
    comment:
      'أحسن سماعة شرينا لهاد العام. كنستعملها في البلاص ديالنا فالحديقة، البطارية كتعمر بزاف. البلوتوث كيتصل بسرعة مع التيليفون. ننصح بيها كل واحد.',
    avatar:
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    name: 'عبد الرحيم الإدريسي',
    city: 'مراكش',
    rating: 5,
    comment:
      'جودة ممتازة بالنسبة للثمن. الميكروفون خدام مزيان فالمكالمات. راديو FM زوين. توصل بيها في 48 ساعة. شكراً أجي تيك على الخدمة الاحترافية.',
    avatar:
      'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    name: 'خديجة المرابط',
    city: 'فاس',
    rating: 5,
    comment:
      'صراحة فاقت توقعاتي. الصوت عالي ونقي فنفس الوقت. الإضاءة LED كتعطي لمسة جميلة. طلبتها بالدفع عند الاستلام وكلشي مزيان. غادي نرشحها لعيالتي.',
    avatar:
      'https://images.pexels.com/photos/3760058/pexels-photo-3760058.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
];

export const FEATURES: Feature[] = [
  {
    icon: 'Bluetooth',
    title: 'بلوتوث 5.0 و TWS ستيريو',
    desc: 'اتصال لاسلكي سريع ومستقر حتى 10 أمتار. اربط سماعتين معاً لصوت ستيريو محيطي قوي.',
  },
  {
    icon: 'Mic',
    title: 'ميكروفون مدمج',
    desc: 'سماعة بلوتوث مع ميكروفون عالي الجودة للرد على المكالمات دون لمس الهاتف.',
  },
  {
    icon: 'Radio',
    title: 'راديو FM مدمج',
    desc: 'استمع لمحطاتك الإذاعية المفضلة مباشرةً دون الحاجة لاتصال بالإنترنت.',
  },
  {
    icon: 'BatteryCharging',
    title: 'بطارية قابلة للشحن',
    desc: 'بطارية تدوم حتى 8 ساعات تشغيل متواصل، مع شحن سريع عبر منفذ USB.',
  },
  {
    icon: 'Lightbulb',
    title: 'إضاءة LED ديناميكية',
    desc: 'أضواء LED ملونة تتفاعل مع إيقاع الموسيقى لخلق أجواء احتفالية مميزة.',
  },
  {
    icon: 'Plug',
    title: 'مداخل TF / USB / AUX',
    desc: 'تشغيل الموسيقى من بطاقة الذاكرة، الفلاش USB، أو ربط مباشر بالسماكر عبر AUX.',
  },
];

export const SPECS: Spec[] = [
  { label: 'العلامة التجارية', value: 'KATECHE' },
  { label: 'الموديل', value: 'KA-115' },
  { label: 'نوع الاتصال', value: 'بلوتوث 5.0 + AUX + TF + USB' },
  { label: 'المدى اللاسلكي', value: '10 أمتار' },
  { label: 'عمر البطارية', value: 'حتى 8 ساعات' },
  { label: 'وقت الشحن', value: '2-3 ساعات' },
  { label: 'الميكروفون', value: 'مدمج، عازل للضوضاء' },
  { label: 'راديو FM', value: 'نعم' },
  { label: 'إضاءة LED', value: 'ديناميكية متعددة الألوان' },
  { label: 'دعم TWS', value: 'نعم - ربط سماعتين' },
  { label: 'الوزن', value: 'خفيف ومحمول' },
  { label: 'الضمان', value: 'سنة كاملة' },
];

export const FAQS: FaqItem[] = [
  {
    q: 'هل يمكنني الدفع عند الاستلام في مدينتي بالمغرب؟',
    a: 'نعم، نوفر خدمة الدفع عند الاستلام في جميع المدن المغربية. تدفع ثمن السماعة نقداً عند وصول الطلب إلى باب منزلك، دون أي دفع مسبق.',
  },
  {
    q: 'كم تستغرق مدة التوصيل داخل المغرب؟',
    a: 'عادةً ما يصل طلبك خلال 24 إلى 72 ساعة في معظم المدن المغربية. التوصيل مجاني تماماً ولا توجد رسوم إضافية على الشحن.',
  },
  {
    q: 'هل سماعة KATECHE KA-115 مناسبة للاستعمال في الهواء الطلق؟',
    a: 'بكل تأكيد. تصميمها محمول وخفيف، وبطاريتها القابلة للشحن تدوم حتى 8 ساعات، مما يجعلها مثالية للنزهات، الشواء، الرحلات، والتجمعات العائلية في الهواء الطلق.',
  },
];
