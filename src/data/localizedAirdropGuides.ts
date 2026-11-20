export interface LocalizedAirdropGuide {
  id: string;
  slug: string;
  lang: string;
  flag: string;
  homeLabel: string;
  hubLabel: string;
  hubHref: string;
  title: string;
  description: string;
  h1: string;
  badge: string;
  rewardLabel: string;
  costLabel: string;
  snapshotLabel: string;
  timeLabel: string;
  overviewHeading: string;
  overview: string;
  tokenomicsHeading: string;
  tokenomics: string;
  stepsHeading: string;
  steps: string[];
  strategyHeading: string;
  strategy: string;
  sybilHeading: string;
  sybilSafety: string;
  faqHeading: string;
  faqs: { q: string; a: string }[];
  ctaText: string;
  englishVersionLabel: string;
}

export const localizedAirdropGuides: LocalizedAirdropGuide[] = [
  // ================= HOT WALLET (16 LANGUAGES) =================
  {
    id: 'hot-wallet',
    slug: 'tr',
    lang: 'tr',
    flag: '🇹🇷',
    homeLabel: 'Ana Sayfa',
    hubLabel: 'Telegram Airdropları',
    hubHref: '/tr/telegram-airdroplari/',
    title: 'HOT Wallet Airdrop Rehberi (2026): $HOT Madenciliği & Kurulum | Airdroplyx',
    description: 'Telegram içi self-custody NEAR cüzdanı HOT Wallet ile ücretsiz $HOT token madenciliği, Fireplace yükseltmeleri ve Launchpad ödülleri Türkçe rehberi.',
    h1: 'HOT Wallet ($HOT) Telegram Airdrop ve Madencilik Rehberi',
    badge: 'Tier 1 • NEAR & Çoklu Ağ Cüzdanı',
    rewardLabel: 'Tahmini Ödül',
    costLabel: 'Maliyet',
    snapshotLabel: 'Dönem',
    timeLabel: 'Günlük Süre',
    overviewHeading: 'HOT Wallet Nedir ve Neden Önemlidir?',
    overview: 'NEAR Protokolü üzerindeki HERE Wallet ekibi tarafından geliştirilen HOT Wallet, Telegram içindeki en yüksek gerçek kullanıma sahip non-custodial cüzdan uygulamalarından biridir. Kullanıcılar NEAR, TON, EVM ve Solana ağlarını tek yerden yönetirken ücretsiz $HOT token madenciliği yapabilir ve HOT Pad lansmanlarına katılabilir.',
    tokenomicsHeading: 'Token Ekonomisi ($HOT)',
    tokenomics: '$HOT token; çoklu ağ gas ücretlerini karşılama, HOT Pad ön satış/launchpad tahsisleri ve cüzdan içi takas indirimleri için kullanılır.',
    stepsHeading: 'Adım Adım $HOT Madenciliği Nasıl Yapılır?',
    steps: [
      'Telegram üzerinden resmi HOT Wallet (@herewalletbot) mini uygulamasını başlatın.',
      'Yeni bir cüzdan oluşturun ve 12 kelimelik kurtarma ifadenizi mutlaka kağıda yazıp çevrimdışı saklayın.',
      'Madencilik panelinden ilk ücretsiz $HOT talebinizi gerçekleştirin.',
      'Kazandığınız $HOT ile Fireplace ve Wood depolama çarpanlarını erken aşamada yükseltin.',
      'Aktif bir Village (Köy) grubuna katılarak %5 ekstra madencilik bonusu kazanın.'
    ],
    strategyHeading: 'Optimal Kazanç Stratejisi',
    strategy: 'Depolama süresini (Storage) en az 6-12 saate çıkararak uyurken bile madenciliğin durmamasını sağlayın ve on-chain görevler için cüzdanda çok küçük miktarda NEAR bulundurun.',
    sybilHeading: 'Sybil Koruması ve Güvenlik',
    sybilSafety: 'On-chain NEAR hesap aktivasyonu ve gerçek gas destekli claim işlemleri sahte bot hesaplarını doğal olarak eler.',
    faqHeading: 'HOT Wallet Hakkında Sıkça Sorulan Sorular',
    faqs: [
      { q: 'HOT Wallet güvenli ve non-custodial mı?', a: 'Evet, özel anahtarlar tamamen sizin kontrolünüzdedir ve resmi HERE Wallet ekibi tarafından geliştirilmiştir.' },
      { q: '$HOT claim etmek için NEAR gerekir mi?', a: 'İlk birkaç talep ücretsizdir; sonrasında sınırsız ve çok ucuz on-chain talep için cüzdanda ~0.5$ değerinde NEAR bulundurmak yeterlidir.' },
      { q: 'Village (Köy) grubuna katılmak neden önemli?', a: 'Aktif bir Village grubu tüm madencilik hızınıza ekstra %5 bonus sağlar.' }
    ],
    ctaText: 'HOT Wallet Botunu Aç',
    englishVersionLabel: 'İngilizce Orijinal Sayfa'
  },
  {
    id: 'hot-wallet',
    slug: 'ru',
    lang: 'ru',
    flag: '🇷🇺',
    homeLabel: 'Главная',
    hubLabel: 'Telegram Аирдропы',
    hubHref: '/ru/telegram-airdrops/',
    title: 'Гайд по HOT Wallet (2026): Майнинг $HOT в Telegram | Airdroplyx',
    description: 'Полное руководство по некастодиальному кошельку HOT Wallet на базе NEAR в Telegram: майнинг $HOT, прокачка Fireplace, Wood и участие в HOT Pad.',
    h1: 'HOT Wallet ($HOT) в Telegram: Подробный гайд по майнингу',
    badge: 'Tier 1 • NEAR и мультичейн-кошелёк',
    rewardLabel: 'Награда',
    costLabel: 'Затраты',
    snapshotLabel: 'Статус',
    timeLabel: 'Время в день',
    overviewHeading: 'Что такое HOT Wallet?',
    overview: 'Созданный командой HERE Wallet на блокчейне NEAR, HOT Wallet стал одним из самых полезных Mini-Apps в Telegram. Это полноценный некастодиальный кошелёк для NEAR, TON, EVM и Solana с встроенным майнингом токена $HOT и доступом к лаунчпаду HOT Pad.',
    tokenomicsHeading: 'Токеномика $HOT',
    tokenomics: 'Токен $HOT используется для оплаты безгазовых кросс-чейн транзакций, участия в аирдропах HOT Pad и скидок на обмены внутри кошелька.',
    stepsHeading: 'Пошаговая инструкция по майнингу $HOT',
    steps: [
      'Откройте официальный бот HOT Wallet в Telegram (@herewalletbot).',
      'Создайте некастодиальный кошелёк и обязательно запишите сид-фразу на бумагу.',
      'Соберите первые монеты $HOT на экране майнинга.',
      'Улучшайте Fireplace (скорость) и Storage (хранилище) за добытые $HOT.',
      'Вступите в активную Деревню (Village), чтобы получать +5% к добыче.'
    ],
    strategyHeading: 'Оптимальная стратегия',
    strategy: 'Прокачайте хранилище минимум до 6–12 часов, чтобы не терять время ночью, и держите на балансе около $0.5 в NEAR для дешёвых ончейн-клеймов.',
    sybilHeading: 'Защита от Sybil и безопасность',
    sybilSafety: 'Ончейн-аккаунты NEAR и транзакции с минимальной комиссией эффективно отсеивают пустые фермы ботов.',
    faqHeading: 'Частые вопросы о HOT Wallet',
    faqs: [
      { q: 'Безопасен ли HOT Wallet?', a: 'Да, это официальный некастодиальный кошелёк от команды HERE Wallet, где ключи принадлежат только вам.' },
      { q: 'Нужен ли NEAR для клейма $HOT?', a: 'Первые сборы бесплатны, а для регулярного ончейн-клейма достаточно держать немного NEAR на газ.' },
      { q: 'Зачем вступать в Village?', a: 'Участие в деревне даёт постоянный бонус к скорости добычи $HOT.' }
    ],
    ctaText: 'Открыть HOT Wallet',
    englishVersionLabel: 'Английская версия'
  },
  {
    id: 'hot-wallet',
    slug: 'id',
    lang: 'id',
    flag: '🇮🇩',
    homeLabel: 'Beranda',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/id/airdrop-telegram/',
    title: 'Panduan Airdrop HOT Wallet (2026): Cara Mining $HOT di Telegram | Airdroplyx',
    description: 'Tutorial lengkap HOT Wallet di Telegram: cara membuat dompet NEAR non-kustodial, mining token $HOT gratis, upgrade Fireplace, dan ikut launchpad.',
    h1: 'Panduan Lengkap Mining $HOT di HOT Wallet Telegram',
    badge: 'Tier 1 • Dompet NEAR & Multi-Chain',
    rewardLabel: 'Estimasi Hadiah',
    costLabel: 'Biaya',
    snapshotLabel: 'Tahap',
    timeLabel: 'Waktu Harian',
    overviewHeading: 'Apa Itu HOT Wallet?',
    overview: 'Dikembangkan oleh tim HERE Wallet di jaringan NEAR Protocol, HOT Wallet adalah dompet Web3 non-kustodial langsung di dalam Telegram yang mendukung NEAR, TON, EVM, dan Solana sambil menambang token $HOT secara gratis.',
    tokenomicsHeading: 'Tokenomics $HOT',
    tokenomics: 'Token $HOT berfungsi untuk biaya transaksi lintas rantai bebas gas, alokasi launchpad HOT Pad, dan diskon swap.',
    stepsHeading: 'Langkah-Langkah Mining $HOT',
    steps: [
      'Buka bot resmi HOT Wallet di Telegram (@herewalletbot).',
      'Buat dompet baru dan simpan seed phrase Anda di tempat offline yang aman.',
      'Klaim $HOT pertama Anda dari menu mining.',
      'Upgrade Fireplace dan Storage menggunakan hasil tambang $HOT.',
      'Gabung ke Village aktif untuk bonus kecepatan mining 5%.'
    ],
    strategyHeading: 'Strategi Farming Optimal',
    strategy: 'Naikkan kapasitas Storage terlebih dahulu agar mining tetap berjalan saat tidur, lalu isi sedikit saldo NEAR (~$0.50) untuk klaim on-chain.',
    sybilHeading: 'Keamanan & Anti-Sybil',
    sybilSafety: 'Pembuatan akun on-chain NEAR dan biaya gas kecil otomatis menyaring akun bot massal.',
    faqHeading: 'Pertanyaan Umum tentang HOT Wallet',
    faqs: [
      { q: 'Apakah HOT Wallet aman digunakan?', a: 'Ya, HOT Wallet bersifat non-kustodial sehingga hanya Anda yang memegang kunci pribadi dompet.' },
      { q: 'Apakah wajib punya saldo NEAR?', a: 'Klaim awal gratis, namun memiliki sedikit NEAR mempermudah klaim on-chain tanpa batas.' },
      { q: 'Apa keuntungan bergabung dengan Village?', a: 'Anda mendapat tambahan bonus 5% dari setiap klaim mining $HOT.' }
    ],
    ctaText: 'Buka HOT Wallet',
    englishVersionLabel: 'Versi Bahasa Inggris'
  },
  {
    id: 'hot-wallet',
    slug: 'vi',
    lang: 'vi',
    flag: '🇻🇳',
    homeLabel: 'Trang chủ',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/vi/airdrop-telegram/',
    title: 'Hướng Dẫn Airdrop HOT Wallet (2026): Cách Đào $HOT Trên Telegram | Airdroplyx',
    description: 'Hướng dẫn chi tiết cách tạo ví HOT Wallet (NEAR) trên Telegram, nâng cấp Fireplace và Storage để đào $HOT miễn phí và săn kèo HOT Pad.',
    h1: 'Hướng Dẫn Đào $HOT Với Ví HOT Wallet Trên Telegram',
    badge: 'Tier 1 • Ví NEAR & Đa Chuỗi',
    rewardLabel: 'Phần Thưởng',
    costLabel: 'Chi Phí',
    snapshotLabel: 'Giai Đoạn',
    timeLabel: 'Thời Gian/Ngày',
    overviewHeading: 'HOT Wallet Là Gì?',
    overview: 'Được phát triển bởi đội ngũ HERE Wallet trên NEAR Protocol, HOT Wallet là ví phi lưu ký tích hợp ngay trong Telegram, hỗ trợ NEAR, TON, EVM và Solana cùng tính năng đào token $HOT.',
    tokenomicsHeading: 'Tokenomics $HOT',
    tokenomics: 'Token $HOT được dùng để trả phí giao dịch đa chuỗi, tham gia launchpad HOT Pad và nhận ưu đãi phí hoán đổi.',
    stepsHeading: 'Các Bước Tham Gia Đào $HOT',
    steps: [
      'Mở bot chính thức HOT Wallet trên Telegram (@herewalletbot).',
      'Tạo ví mới và ghi lại 12 từ khóa khôi phục ra giấy để bảo mật ngoại tuyến.',
      'Nhấn Claim để nhận những đồng $HOT đầu tiên.',
      'Dùng $HOT đã đào để nâng cấp Fireplace và Storage tăng tốc độ.',
      'Tham gia một Village hoạt động để nhận thêm 5% thưởng đào.'
    ],
    strategyHeading: 'Chiến Lược Tối Ưu',
    strategy: 'Ưu tiên nâng cấp dung lượng Storage lên 6–12 giờ để không bị đầy khi ngủ và nạp sẵn khoảng $0.5 NEAR để claim on-chain mượt mà.',
    sybilHeading: 'Bảo Mật & Chống Sybil',
    sybilSafety: 'Tài khoản on-chain trên NEAR và giao dịch có phí gas cực nhỏ giúp loại bỏ hoàn toàn bot ảo.',
    faqHeading: 'Câu Hỏi Thường Gặp Về HOT Wallet',
    faqs: [
      { q: 'Ví HOT Wallet có an toàn không?', a: 'Có, đây là ví phi lưu ký chính thức từ HERE Wallet, bạn toàn quyền kiểm soát khóa cá nhân.' },
      { q: 'Có cần nạp NEAR để đào $HOT không?', a: 'Các lượt claim đầu được miễn phí gas, sau đó chỉ cần một ít NEAR rất nhỏ để claim on-chain.' },
      { q: 'Tham gia Village có lợi ích gì?', a: 'Bạn nhận thêm 5% tốc độ khai thác $HOT.' }
    ],
    ctaText: 'Mở HOT Wallet Ngay',
    englishVersionLabel: 'Xem Bản Tiếng Anh'
  },
  {
    id: 'hot-wallet',
    slug: 'es',
    lang: 'es',
    flag: '🇪🇸',
    homeLabel: 'Inicio',
    hubLabel: 'Airdrops Telegram',
    hubHref: '/es/airdrops-telegram/',
    title: 'Guía Airdrop HOT Wallet (2026): Cómo Minar $HOT en Telegram | Airdroplyx',
    description: 'Tutorial paso a paso de HOT Wallet en Telegram: crea tu billetera NEAR sin custodia, mejora Fireplace y mina tokens $HOT gratis.',
    h1: 'HOT Wallet ($HOT) en Telegram: Guía Completa de Minería',
    badge: 'Tier 1 • Billetera NEAR y Multicadena',
    rewardLabel: 'Recompensa',
    costLabel: 'Costo',
    snapshotLabel: 'Etapa',
    timeLabel: 'Tiempo Diario',
    overviewHeading: '¿Qué es HOT Wallet?',
    overview: 'Desarrollada por el equipo de HERE Wallet en NEAR Protocol, HOT Wallet es una billetera multicadena sin custodia dentro de Telegram (compatible con NEAR, TON, EVM y Solana) con minería integrada de $HOT.',
    tokenomicsHeading: 'Tokenomics de $HOT',
    tokenomics: 'El token $HOT impulsa transacciones sin gas, asignaciones en HOT Pad y descuentos en intercambios dentro de la billetera.',
    stepsHeading: 'Cómo Minar $HOT Paso a Paso',
    steps: [
      'Abre el bot oficial de HOT Wallet en Telegram (@herewalletbot).',
      'Crea tu billetera sin custodia y guarda tu frase semilla en papel offline.',
      'Reclama tus primeros $HOT en el panel de minería.',
      'Mejora tu Fireplace y Storage usando los $HOT minados.',
      'Únete a una Village activa para obtener un 5% extra de rendimiento.'
    ],
    strategyHeading: 'Estrategia Óptima',
    strategy: 'Mejora el almacenamiento (Storage) primero para reclamar cada 6–12 horas y mantén una pequeña fracción de NEAR (~$0.50) para reclamos on-chain.',
    sybilHeading: 'Seguridad y Anti-Sybil',
    sybilSafety: 'Las cuentas on-chain de NEAR y las comisiones mínimas de gas filtran automáticamente las granjas de bots.',
    faqHeading: 'Preguntas Frecuentes sobre HOT Wallet',
    faqs: [
      { q: '¿Es segura HOT Wallet?', a: 'Sí, es una billetera sin custodia desarrollada por el equipo oficial de HERE Wallet.' },
      { q: '¿Necesito NEAR para reclamar $HOT?', a: 'Los primeros reclamos son gratuitos; luego basta con una cantidad mínima de NEAR para gas.' },
      { q: '¿Para qué sirve unirse a una Village?', a: 'Otorga un bono adicional del 5% en tu minería de $HOT.' }
    ],
    ctaText: 'Abrir HOT Wallet',
    englishVersionLabel: 'Ver Versión en Inglés'
  },
  {
    id: 'hot-wallet',
    slug: 'pt',
    lang: 'pt',
    flag: '🇧🇷',
    homeLabel: 'Início',
    hubLabel: 'Airdrops Telegram',
    hubHref: '/pt/airdrops-telegram/',
    title: 'Guia Airdrop HOT Wallet (2026): Como Minerar $HOT no Telegram | Airdroplyx',
    description: 'Passo a passo completo da HOT Wallet no Telegram: crie sua carteira NEAR não-custodial, evolua o Fireplace e minere tokens $HOT grátis.',
    h1: 'HOT Wallet ($HOT) no Telegram: Guia Completo de Mineração',
    badge: 'Tier 1 • Carteira NEAR e Multi-Chain',
    rewardLabel: 'Recompensa',
    costLabel: 'Custo',
    snapshotLabel: 'Fase',
    timeLabel: 'Tempo Diário',
    overviewHeading: 'O Que é a HOT Wallet?',
    overview: 'Criada pela equipe da HERE Wallet na rede NEAR, a HOT Wallet é uma carteira não-custodial completa dentro do Telegram (suportando NEAR, TON, EVM e Solana) com mineração nativa de $HOT.',
    tokenomicsHeading: 'Tokenomics do $HOT',
    tokenomics: 'O token $HOT é utilizado para transações cross-chain sem gás, acesso a lançamentos no HOT Pad e descontos em swaps.',
    stepsHeading: 'Como Minerar $HOT Passo a Passo',
    steps: [
      'Abra o bot oficial da HOT Wallet no Telegram (@herewalletbot).',
      'Crie sua carteira não-custodial e anote a frase de recuperação offline.',
      'Faça seu primeiro resgate de $HOT no painel principal.',
      'Melhore a Fireplace e o Storage usando os $HOT minerados.',
      'Entre em uma Village ativa para ganhar 5% de bônus na mineração.'
    ],
    strategyHeading: 'Estratégia Ideal',
    strategy: 'Aumente a capacidade do Storage para 6–12 horas logo no início e mantenha cerca de $0,50 em NEAR na carteira para resgates on-chain.',
    sybilHeading: 'Segurança e Anti-Sybil',
    sybilSafety: 'A criação de contas on-chain na NEAR e taxas reais mínimas de gás eliminam contas falsas automatizadas.',
    faqHeading: 'Perguntas Frequentes sobre a HOT Wallet',
    faqs: [
      { q: 'A HOT Wallet é segura?', a: 'Sim, é uma carteira não-custodial oficial da equipe HERE Wallet onde você controla suas chaves.' },
      { q: 'Preciso de NEAR para resgatar $HOT?', a: 'Os primeiros resgates são grátis; depois basta uma fração mínima de NEAR para pagar o gás.' },
      { q: 'Por que entrar em uma Village?', a: 'Você recebe um bônus contínuo de +5% na velocidade de mineração.' }
    ],
    ctaText: 'Abrir HOT Wallet',
    englishVersionLabel: 'Ver Versão em Inglês'
  },
  {
    id: 'hot-wallet',
    slug: 'ko',
    lang: 'ko',
    flag: '🇰🇷',
    homeLabel: '홈',
    hubLabel: '텔레그램 에어드랍',
    hubHref: '/ko/telegram-airdrops/',
    title: 'HOT Wallet 에어드랍 가이드 (2026): 텔레그램 $HOT 채굴 방법 | Airdroplyx',
    description: 'NEAR 기반 텔레그램 비수탁 지갑 HOT Wallet 사용법, Fireplace 및 Storage 업그레이드를 통한 무료 $HOT 토큰 채굴 공략.',
    h1: 'HOT Wallet ($HOT) 텔레그램 에어드랍 및 채굴 완벽 가이드',
    badge: 'Tier 1 • NEAR & 멀티체인 지갑',
    rewardLabel: '예상 보상',
    costLabel: '비용',
    snapshotLabel: '단계',
    timeLabel: '일일 소요 시간',
    overviewHeading: 'HOT Wallet이란?',
    overview: 'NEAR 프로토콜의 HERE Wallet 팀이 개발한 HOT Wallet은 텔레그램 내에서 NEAR, TON, EVM, 솔라나를 지원하는 비수탁 멀티체인 지갑이자 $HOT 토큰 채굴 및 런치패드 플랫폼입니다.',
    tokenomicsHeading: '$HOT 토크노믹스',
    tokenomics: '$HOT 토큰은 가스리스 크로스체인 트랜잭션, HOT Pad 런치패드 참여 및 스왑 수수료 할인에 사용됩니다.',
    stepsHeading: '단계별 $HOT 채굴 방법',
    steps: [
      '텔레그램에서 공식 HOT Wallet 봇(@herewalletbot)을 실행하세요.',
      '지갑을 생성하고 12단어 복구 구문을 종이에 적어 오프라인에 안전하게 보관하세요.',
      '채굴 대시보드에서 첫 무료 $HOT을 클레임하세요.',
      '채굴한 $HOT으로 Fireplace와 Storage 배율을 업그레이드하세요.',
      '활성화된 Village(마을)에 가입해 5% 추가 채굴 보너스를 받으세요.'
    ],
    strategyHeading: '최적의 채굴 전략',
    strategy: 'Storage 용량을 최소 6~12시간 단위로 업그레이드해 손실 없이 채굴하고, 온체인 클레임을 위해 소액(약 $0.5)의 NEAR를 보유하세요.',
    sybilHeading: '시빌(Sybil) 방지 및 보안',
    sybilSafety: '온체인 NEAR 계정 생성과 소액 가스 기반 클레임 구조가 자동화 봇 계정을 걸러냅니다.',
    faqHeading: 'HOT Wallet 자주 묻는 질문',
    faqs: [
      { q: 'HOT Wallet은 안전한 비수탁 지갑인가요?', a: '네, 공식 HERE Wallet 팀이 개발했으며 개인 키는 사용자 본인이 직접 소유합니다.' },
      { q: '$HOT 클레임에 NEAR 코인이 필요한가요?', a: '초기 무료 클레임 이후에는 무제한 온체인 클레임을 위해 아주 적은 양의 NEAR가 필요합니다.' },
      { q: 'Village에 가입하면 무엇이 좋나요?', a: '모든 채굴 보상에 5%의 추가 보너스가 적용됩니다.' }
    ],
    ctaText: 'HOT Wallet 시작하기',
    englishVersionLabel: '영문 원본 보기'
  },
  {
    id: 'hot-wallet',
    slug: 'ja',
    lang: 'ja',
    flag: '🇯🇵',
    homeLabel: 'ホーム',
    hubLabel: 'Telegramエアドロップ',
    hubHref: '/ja/telegram-airdrops/',
    title: 'HOT Wallet エアドロップ攻略 (2026)：Telegramで$HOTを無料マイニング | Airdroplyx',
    description: 'NEAR公式系TelegramウォレットHOT Walletの始め方、FireplaceとStorageの強化による$HOTマイニングおよびHOT Pad参加手順を解説。',
    h1: 'HOT Wallet ($HOT) Telegramマイニング＆エアドロップ攻略',
    badge: 'Tier 1 • NEAR＆マルチチェーンウォレット',
    rewardLabel: '想定報酬',
    costLabel: '費用',
    snapshotLabel: 'フェーズ',
    timeLabel: '1日の目安',
    overviewHeading: 'HOT Walletとは？',
    overview: 'NEARプロトコルのHERE Walletチームが開発したHOT Walletは、Telegram上でNEAR・TON・EVM・Solanaを管理できる非カストディアルウォレットであり、$HOTマイニングとHOT Padローンチパッドを提供します。',
    tokenomicsHeading: '$HOT トークノミクス',
    tokenomics: '$HOTはガスレスなクロスチェーン取引、HOT Padでのエアドロップ配分、スワップ手数料割引などに利用されます。',
    stepsHeading: '$HOT マイニングの手順',
    steps: [
      'Telegramで公式HOT Walletボット（@herewalletbot）を起動します。',
      'ウォレットを作成し、12単語のリカバリーフレーズを必ず紙に控えてオフライン保管します。',
      'マイニング画面から最初の$HOTをクレームします。',
      '獲得した$HOTを使ってFireplaceとStorageをアップグレードします。',
      'アクティブなVillageに参加して+5%の採掘ボーナスを受け取ります。'
    ],
    strategyHeading: '効率的な攻略戦略',
    strategy: '最初にStorageを6〜12時間分まで拡張して睡眠中のロスを防ぎ、オンチェーン請求用に少額（約$0.5分）のNEARを入れておくとスムーズです。',
    sybilHeading: 'Sybil対策と安全性',
    sybilSafety: 'NEAR上のオンチェーンアカウント作成とガス代付きトランザクションにより、不正なボットアカウントが排除されます。',
    faqHeading: 'HOT Walletに関するよくある質問',
    faqs: [
      { q: 'HOT Walletは安全ですか？', a: 'はい、HERE Wallet公式チームが開発した非カストディアルウォレットで、秘密鍵はご自身で管理します。' },
      { q: 'クレームにNEARは必要ですか？', a: '初回数回は無料ですが、継続的なオンチェーン請求には少額のNEARがあると便利です。' },
      { q: 'Villageに参加するメリットは？', a: '採掘スピードが常に5%アップします。' }
    ],
    ctaText: 'HOT Walletを開く',
    englishVersionLabel: '英語版を見る'
  },
  {
    id: 'hot-wallet',
    slug: 'ar',
    lang: 'ar',
    flag: '🇸🇦',
    homeLabel: 'الرئيسية',
    hubLabel: 'إيردروبات تيليجرام',
    hubHref: '/ar/telegram-airdrops/',
    title: 'دليل إيردروب HOT Wallet (2026): تعدين عملة $HOT في تيليجرام | Airdroplyx',
    description: 'شرح كامل لمحفظة HOT Wallet على شبكة NEAR داخل تيليجرام: إنشاء المحفظة، تعدين $HOT مجاناً، ترقية Fireplace و Storage والمشاركة في HOT Pad.',
    h1: 'دليل تعدين $HOT وإيردروب HOT Wallet على تيليجرام',
    badge: 'Tier 1 • محفظة NEAR ومتعددة الشبكات',
    rewardLabel: 'المكافأة المتوقعة',
    costLabel: 'التكلفة',
    snapshotLabel: 'المرحلة',
    timeLabel: 'الوقت اليومي',
    overviewHeading: 'ما هي محفظة HOT Wallet؟',
    overview: 'تم تطوير HOT Wallet بواسطة فريق HERE Wallet على شبكة NEAR، وهي محفظة لا وصائية (Non-Custodial) متكاملة داخل تيليجرام تدعم شبكات NEAR و TON و EVM و Solana مع تعدين مجاني لعملة $HOT.',
    tokenomicsHeading: 'اقتصاد عملة $HOT',
    tokenomics: 'تُستخدم عملة $HOT لتغطية رسوم المعاملات عبر الشبكات، والمشاركة في إطلاقات HOT Pad، والحصول على خصومات التبديل.',
    stepsHeading: 'خطوات تعدين $HOT بالتفصيل',
    steps: [
      'افتح بوت HOT Wallet الرسمي في تيليجرام (@herewalletbot).',
      'أنشئ محفظة جديدة واحفظ عبارة الاسترداد (12 كلمة) على ورق بعيداً عن الإنترنت.',
      'اضغط Claim لجمع أول رصيد لك من $HOT.',
      'استخدم عملات $HOT لترقية Fireplace و Storage لزيادة سرعة وسعة التعدين.',
      'انضم إلى قرية (Village) نشطة للحصول على مكافأة إضافية بنسبة 5%.'
    ],
    strategyHeading: 'أفضل استراتيجية للربح',
    strategy: 'ركّز على ترقية سعة التخزين (Storage) إلى 6–12 ساعة حتى لا يتوقف التعدين أثناء النوم، واحتفظ بمبلغ بسيط من NEAR (~0.5$) للمطالبات على الشبكة.',
    sybilHeading: 'الأمان ومكافحة Sybil',
    sybilSafety: 'إنشاء حسابات حقيقية على شبكة NEAR ودفع رسوم غاز رمزية يحمي التوزيع من الحسابات الوهمية.',
    faqHeading: 'الأسئلة الشائعة حول HOT Wallet',
    faqs: [
      { q: 'هل محفظة HOT Wallet آمنة؟', a: 'نعم، هي محفظة غير وصائية رسمية من فريق HERE Wallet وتمنحك السيطرة الكاملة على مفاتيحك.' },
      { q: 'هل أحتاج إلى NEAR للمطالبة بـ $HOT؟', a: 'المطالبات الأولى مجانية، وبعدها يكفي رصيد بسيط جداً من NEAR لتغطية الرسوم.' },
      { q: 'ما فائدة الانضمام إلى Village؟', a: 'يمنحك زيادة دائمة بنسبة 5% على سرعة التعدين.' }
    ],
    ctaText: 'افتح HOT Wallet الآن',
    englishVersionLabel: 'النسخة الإنجليزية'
  },
  {
    id: 'hot-wallet',
    slug: 'de',
    lang: 'de',
    flag: '🇩🇪',
    homeLabel: 'Startseite',
    hubLabel: 'Telegram Airdrops',
    hubHref: '/de/telegram-airdrops/',
    title: 'HOT Wallet Airdrop Guide (2026): $HOT Mining in Telegram | Airdroplyx',
    description: 'Vollständige Anleitung für HOT Wallet (NEAR) in Telegram: Non-Custodial Wallet einrichten, $HOT kostenlos minen, Fireplace & Storage upgraden.',
    h1: 'HOT Wallet ($HOT) Telegram Airdrop & Mining Guide',
    badge: 'Tier 1 • NEAR & Multi-Chain Wallet',
    rewardLabel: 'Erwartete Belohnung',
    costLabel: 'Kosten',
    snapshotLabel: 'Phase',
    timeLabel: 'Zeitaufwand',
    overviewHeading: 'Was ist HOT Wallet?',
    overview: 'Entwickelt vom HERE Wallet Team auf dem NEAR Protocol, ist HOT Wallet eine echte Non-Custodial Multi-Chain-Wallet direkt in Telegram (NEAR, TON, EVM, Solana) inklusive integriertem $HOT Mining und HOT Pad Launchpad.',
    tokenomicsHeading: '$HOT Tokenomics',
    tokenomics: '$HOT dient für gasfreie Cross-Chain-Transaktionen, Launchpad-Zuteilungen auf HOT Pad und Swap-Gebührenrabatte.',
    stepsHeading: 'Schritt-für-Schritt $HOT Mining',
    steps: [
      'Starte den offiziellen HOT Wallet Bot in Telegram (@herewalletbot).',
      'Erstelle deine Wallet und notiere die 12-Wörter-Seed-Phrase sicher offline.',
      'Claim deine ersten $HOT Token über das Mining-Dashboard.',
      'Investiere geminte $HOT frühzeitig in Fireplace- und Storage-Upgrades.',
      'Tritt einem aktiven Village bei, um +5% Mining-Bonus zu erhalten.'
    ],
    strategyHeading: 'Optimale Mining-Strategie',
    strategy: 'Erhöhe zuerst die Storage-Kapazität auf 6–12 Stunden und halte etwa $0,50 in NEAR für günstige On-Chain-Claims bereit.',
    sybilHeading: 'Sicherheit & Anti-Sybil',
    sybilSafety: 'Echte On-Chain-NEAR-Accounts und gasgestützte Claims filtern automatisierte Bot-Farmen zuverlässig heraus.',
    faqHeading: 'Häufige Fragen zu HOT Wallet',
    faqs: [
      { q: 'Ist HOT Wallet sicher und Non-Custodial?', a: 'Ja, die Wallet stammt vom offiziellen HERE Wallet Team und du behältst die volle Kontrolle über deine Keys.' },
      { q: 'Brauche ich NEAR für Claims?', a: 'Die ersten Claims sind kostenlos; danach reicht ein winziger NEAR-Betrag für On-Chain-Transaktionen.' },
      { q: 'Warum einem Village beitreten?', a: 'Ein aktives Village bringt dir dauerhaft +5% extra Mining-Ertrag.' }
    ],
    ctaText: 'HOT Wallet öffnen',
    englishVersionLabel: 'Englische Version'
  },
  {
    id: 'hot-wallet',
    slug: 'fr',
    lang: 'fr',
    flag: '🇫🇷',
    homeLabel: 'Accueil',
    hubLabel: 'Airdrops Telegram',
    hubHref: '/fr/airdrops-telegram/',
    title: 'Guide Airdrop HOT Wallet (2026) : Miner $HOT sur Telegram | Airdroplyx',
    description: 'Tutoriel complet HOT Wallet (NEAR) sur Telegram : portefeuille non-custodial, minage gratuit de $HOT, amélioration Fireplace & Storage.',
    h1: 'HOT Wallet ($HOT) sur Telegram : Guide Complet de Minage',
    badge: 'Tier 1 • Portefeuille NEAR & Multi-Chaînes',
    rewardLabel: 'Récompense',
    costLabel: 'Coût',
    snapshotLabel: 'Phase',
    timeLabel: 'Temps / Jour',
    overviewHeading: 'Qu’est-ce que HOT Wallet ?',
    overview: 'Créé par l’équipe de HERE Wallet sur NEAR Protocol, HOT Wallet est un portefeuille multi-chaînes non-custodial directement intégré à Telegram (NEAR, TON, EVM, Solana) avec minage natif de $HOT et accès au HOT Pad.',
    tokenomicsHeading: 'Tokenomics de $HOT',
    tokenomics: 'Le jeton $HOT couvre les frais cross-chain sans gaz, donne accès aux lancements HOT Pad et réduit les frais de swap.',
    stepsHeading: 'Comment Miner $HOT Étape par Étape',
    steps: [
      'Ouvrez le bot officiel HOT Wallet sur Telegram (@herewalletbot).',
      'Créez votre portefeuille et notez vos 12 mots de récupération sur papier hors ligne.',
      'Réclamez vos premiers $HOT sur le tableau de bord.',
      'Améliorez votre Fireplace et votre Storage avec vos $HOT minés.',
      'Rejoignez un Village actif pour obtenir un bonus de +5%.'
    ],
    strategyHeading: 'Stratégie Optimale',
    strategy: 'Passez votre Storage à 6–12 heures rapidement pour éviter les pertes la nuit et gardez environ 0,50 $ en NEAR pour les claims on-chain.',
    sybilHeading: 'Sécurité & Anti-Sybil',
    sybilSafety: 'La création de comptes on-chain sur NEAR et les transactions avec gaz minimal bloquent les fermes de bots.',
    faqHeading: 'Questions Fréquentes sur HOT Wallet',
    faqs: [
      { q: 'HOT Wallet est-il sûr ?', a: 'Oui, c’est le portefeuille non-custodial officiel de l’équipe HERE Wallet.' },
      { q: 'Faut-il du NEAR pour réclamer ?', a: 'Les premiers retraits sont gratuits, puis une fraction minime de NEAR suffit.' },
      { q: 'Pourquoi rejoindre un Village ?', a: 'Vous profitez d’un bonus continu de 5% sur votre minage.' }
    ],
    ctaText: 'Ouvrir HOT Wallet',
    englishVersionLabel: 'Version Anglaise'
  },
  {
    id: 'hot-wallet',
    slug: 'uk',
    lang: 'uk',
    flag: '🇺🇦',
    homeLabel: 'Головна',
    hubLabel: 'Telegram Аірдропи',
    hubHref: '/uk/telegram-airdrops/',
    title: 'Гайд по HOT Wallet (2026): Майнінг $HOT у Telegram | Airdroplyx',
    description: 'Покрокова інструкція для гаманця HOT Wallet (NEAR) у Telegram: майнінг $HOT без вкладень, прокачка Fireplace і Storage та участь у HOT Pad.',
    h1: 'HOT Wallet ($HOT) у Telegram: Повний гайд із майнінгу',
    badge: 'Tier 1 • NEAR та мультичейн-гаманець',
    rewardLabel: 'Нагорода',
    costLabel: 'Витрати',
    snapshotLabel: 'Етап',
    timeLabel: 'Час на день',
    overviewHeading: 'Що таке HOT Wallet?',
    overview: 'Створений командою HERE Wallet на блокчейні NEAR, HOT Wallet є повноцінним некастодіальним мультичейн-гаманцем у Telegram (NEAR, TON, EVM, Solana) із вбудованим майнінгом токена $HOT та лаунчпадом HOT Pad.',
    tokenomicsHeading: 'Токеноміка $HOT',
    tokenomics: 'Токен $HOT використовується для безгазових кросчейн-транзакцій, алокацій на HOT Pad та знижок на обміни.',
    stepsHeading: 'Як майнити $HOT крок за кроком',
    steps: [
      'Відкрийте офіційний бот HOT Wallet у Telegram (@herewalletbot).',
      'Створіть гаманець і запишіть сід-фразу (12 слів) на папір в офлайні.',
      'Зберіть перші токени $HOT на екрані майнінгу.',
      'Прокачуйте Fireplace та Storage за видобуті $HOT.',
      'Приєднайтеся до активного Села (Village), щоб отримувати +5% бонусу.'
    ],
    strategyHeading: 'Оптимальна стратегія',
    strategy: 'Збільште обсяг Storage до 6–12 годин для безперервного майнінгу вночі та тримайте близько $0.5 у NEAR для дешевих ончейн-клеймів.',
    sybilHeading: 'Безпека та анти-Sybil',
    sybilSafety: 'Ончейн-акаунти NEAR і транзакції з мінімальною комісією природно відсіюють фейкові ферми ботів.',
    faqHeading: 'Часті запитання про HOT Wallet',
    faqs: [
      { q: 'Чи безпечний HOT Wallet?', a: 'Так, це офіційний некастодіальний гаманець від команди HERE Wallet.' },
      { q: 'Чи потрібен NEAR для клейму $HOT?', a: 'Перші збори безкоштовні, а для подальших ончейн-клеймів вистачить мінімального балансу NEAR.' },
      { q: 'Навіщо вступати до Village?', a: 'Участь у селі дає постійний бонус +5% до швидкості майнінгу.' }
    ],
    ctaText: 'Відкрити HOT Wallet',
    englishVersionLabel: 'Англійська версія'
  },
  {
    id: 'hot-wallet',
    slug: 'zh',
    lang: 'zh-CN',
    flag: '🇨🇳',
    homeLabel: '首页',
    hubLabel: 'Telegram 空投',
    hubHref: '/zh/telegram-airdrops/',
    title: 'HOT Wallet 空投教程 (2026)：Telegram 免费挖矿 $HOT 指南 | Airdroplyx',
    description: 'NEAR 官方生态 Telegram 钱包 HOT Wallet 完整教程：创建非托管钱包、升级 Fireplace 与 Storage 免费挖 $HOT 代币并参与 HOT Pad。',
    h1: 'HOT Wallet ($HOT) Telegram 挖矿与空投全攻略',
    badge: 'Tier 1 • NEAR 与多链自托管钱包',
    rewardLabel: '预计奖励',
    costLabel: '成本',
    snapshotLabel: '阶段',
    timeLabel: '每日耗时',
    overviewHeading: '什么是 HOT Wallet？',
    overview: '由 NEAR 生态知名的 HERE Wallet 团队开发，HOT Wallet 是 Telegram 内置的真正非托管多链钱包（支持 NEAR、TON、EVM 和 Solana），同时提供免费 $HOT 挖矿和 HOT Pad 新币发射台机会。',
    tokenomicsHeading: '$HOT 代币经济',
    tokenomics: '$HOT 代币用于无 Gas 跨链交易、HOT Pad 打新额度分配以及钱包内兑换手续费折扣。',
    stepsHeading: '分步挖矿教程',
    steps: [
      '在 Telegram 中打开官方 HOT Wallet 机器人（@herewalletbot）。',
      '创建您的非托管钱包，并将 12 个助记词抄写在纸上离线保管。',
      '在挖矿界面领取您的第一笔免费 $HOT。',
      '使用挖到的 $HOT 尽早升级 Fireplace（速度）和 Storage（容量）。',
      '加入一个活跃的 Village（村庄），享受额外 5% 挖矿加成。'
    ],
    strategyHeading: '最佳收益策略',
    strategy: '优先将 Storage 容量升级至 6–12 小时，确保夜间睡眠不浪费产出，并在钱包中保留约 $0.5 价值的 NEAR 用于链上低成本领取。',
    sybilHeading: '安全与防女巫机制',
    sybilSafety: '链上 NEAR 账户激活以及真实 Gas 支持的领取机制能够有效过滤批量机器人小号。',
    faqHeading: 'HOT Wallet 常见问题',
    faqs: [
      { q: 'HOT Wallet 安全吗？', a: '是的，它由官方 HERE Wallet 团队开发，私钥完全掌握在您自己手中。' },
      { q: '领取 $HOT 需要 NEAR 吗？', a: '前几次领取免费，之后只需极少量 NEAR 即可支持无限次链上低费用领取。' },
      { q: '加入 Village 有什么好处？', a: '可让您的 $HOT 挖矿速度永久提升 5%。' }
    ],
    ctaText: '立即打开 HOT Wallet',
    englishVersionLabel: '查看英文原版'
  },
  {
    id: 'hot-wallet',
    slug: 'hi',
    lang: 'hi',
    flag: '🇮🇳',
    homeLabel: 'होम',
    hubLabel: 'टेलीग्राम एयरड्रॉप',
    hubHref: '/hi/telegram-airdrops/',
    title: 'HOT Wallet एयरड्रॉप गाइड (2026): टेलीग्राम पर $HOT माइनिंग कैसे करें | Airdroplyx',
    description: 'NEAR आधारित टेलीग्राम वॉलेट HOT Wallet की पूरी गाइड: सेल्फ-कस्टडी वॉलेट बनाएं, Fireplace अपग्रेड करें और मुफ़्त $HOT कमाएं।',
    h1: 'HOT Wallet ($HOT) टेलीग्राम माइनिंग और एयरड्रॉप गाइड',
    badge: 'Tier 1 • NEAR और मल्टी-चेन वॉलेट',
    rewardLabel: 'अनुमानित इनाम',
    costLabel: 'लागत',
    snapshotLabel: 'चरण',
    timeLabel: 'दैनिक समय',
    overviewHeading: 'HOT Wallet क्या है?',
    overview: 'NEAR प्रोटोकॉल की HERE Wallet टीम द्वारा बनाया गया HOT Wallet टेलीग्राम के अंदर एक नॉन-कस्टोडियल मल्टी-चेन वॉलेट (NEAR, TON, EVM, Solana) है, जिसमें मुफ़्त $HOT माइनिंग और HOT Pad लॉन्चपैड की सुविधा मिलती है।',
    tokenomicsHeading: '$HOT टोकनॉमिक्स',
    tokenomics: '$HOT टोकन का उपयोग गैस-फ्री क्रॉस-चेन लेनदेन, HOT Pad लॉन्चपैड आवंटन और स्वैप शुल्क छूट के लिए होता है।',
    stepsHeading: '$HOT माइनिंग कैसे शुरू करें',
    steps: [
      'टेलीग्राम में आधिकारिक HOT Wallet बॉट (@herewalletbot) खोलें।',
      'अपना नया वॉलेट बनाएं और 12 शब्दों का रिकवरी फ्रेज़ कागज़ पर लिखकर ऑफ़लाइन रखें।',
      'माइनिंग डैशबोर्ड से अपना पहला मुफ़्त $HOT क्लेम करें।',
      'कमाए हुए $HOT से Fireplace और Storage मल्टीप्लायर अपग्रेड करें।',
      '5% अतिरिक्त बोनस के लिए किसी सक्रिय Village से जुड़ें।'
    ],
    strategyHeading: 'सर्वोत्तम रणनीति',
    strategy: 'शुरुआत में ही Storage को 6–12 घंटे तक अपग्रेड करें ताकि सोते समय भी माइनिंग जारी रहे, और ऑन-चेन क्लेम के लिए वॉलेट में ~$0.5 का NEAR रखें।',
    sybilHeading: 'सुरक्षा और एंटी-Sybil',
    sybilSafety: 'ऑन-चेन NEAR अकाउंट और छोटे गैस शुल्क वाले क्लेम बॉट खातों को आसानी से फ़िल्टर कर देते हैं।',
    faqHeading: 'HOT Wallet के सामान्य प्रश्न',
    faqs: [
      { q: 'क्या HOT Wallet सुरक्षित है?', a: 'हाँ, यह HERE Wallet टीम का आधिकारिक नॉन-कस्टोडियल वॉलेट है।' },
      { q: 'क्या $HOT क्लेम करने के लिए NEAR चाहिए?', a: 'शुरुआती कुछ क्लेम मुफ़्त हैं; बाद में सस्ते ऑन-चेन क्लेम के लिए थोड़ा-सा NEAR पर्याप्त है।' },
      { q: 'Village जॉइन करने का क्या फायदा है?', a: 'आपको अपनी माइनिंग स्पीड पर 5% अतिरिक्त बोनस मिलता है।' }
    ],
    ctaText: 'HOT Wallet खोलें',
    englishVersionLabel: 'अंग्रेज़ी संस्करण देखें'
  },
  {
    id: 'hot-wallet',
    slug: 'it',
    lang: 'it',
    flag: '🇮🇹',
    homeLabel: 'Home',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/it/airdrop-telegram/',
    title: 'Guida Airdrop HOT Wallet (2026): Minare $HOT su Telegram | Airdroplyx',
    description: 'Guida completa a HOT Wallet (NEAR) su Telegram: crea il wallet non-custodial, potenzia Fireplace e Storage e mina $HOT gratis.',
    h1: 'HOT Wallet ($HOT) su Telegram: Guida Completa al Mining',
    badge: 'Tier 1 • Wallet NEAR & Multi-Chain',
    rewardLabel: 'Ricompensa',
    costLabel: 'Costo',
    snapshotLabel: 'Fase',
    timeLabel: 'Tempo / Giorno',
    overviewHeading: 'Cos’è HOT Wallet?',
    overview: 'Sviluppato dal team di HERE Wallet su NEAR Protocol, HOT Wallet è un wallet multi-chain non-custodial integrato in Telegram (NEAR, TON, EVM, Solana) con mining nativo di $HOT e accesso a HOT Pad.',
    tokenomicsHeading: 'Tokenomics di $HOT',
    tokenomics: 'Il token $HOT alimenta transazioni cross-chain senza gas, allocazioni launchpad su HOT Pad e sconti sugli swap.',
    stepsHeading: 'Come Minare $HOT Passo dopo Passo',
    steps: [
      'Apri il bot ufficiale HOT Wallet su Telegram (@herewalletbot).',
      'Crea il wallet non-custodial e annota la frase seed su carta offline.',
      'Richiedi i tuoi primi $HOT dalla schermata di mining.',
      'Potenzia Fireplace e Storage utilizzando i $HOT minati.',
      'Unisciti a un Village attivo per ricevere un bonus del +5%.'
    ],
    strategyHeading: 'Strategia Ottimale',
    strategy: 'Porta subito lo Storage a 6–12 ore per non perdere mining durante la notte e mantieni circa $0,50 in NEAR per i claim on-chain.',
    sybilHeading: 'Sicurezza & Anti-Sybil',
    sybilSafety: 'La creazione di account on-chain su NEAR e le micro-commissioni di gas bloccano gli account bot automatici.',
    faqHeading: 'Domande Frequenti su HOT Wallet',
    faqs: [
      { q: 'HOT Wallet è sicuro?', a: 'Sì, è il wallet non-custodial ufficiale creato dal team di HERE Wallet.' },
      { q: 'Serve NEAR per fare claim?', a: 'I primi claim sono gratuiti; successivamente basta una frazione minima di NEAR.' },
      { q: 'Perché unirsi a un Village?', a: 'Fornisce un bonus fisso del 5% sulla velocità di mining.' }
    ],
    ctaText: 'Apri HOT Wallet',
    englishVersionLabel: 'Versione Inglese'
  },
  {
    id: 'hot-wallet',
    slug: 'pl',
    lang: 'pl',
    flag: '🇵🇱',
    homeLabel: 'Strona główna',
    hubLabel: 'Airdropy Telegram',
    hubHref: '/pl/airdrop-telegram/',
    title: 'Poradnik Airdrop HOT Wallet (2026): Wydobycie $HOT w Telegramie | Airdroplyx',
    description: 'Kompletny poradnik HOT Wallet (NEAR) na Telegramie: bezpieczny portfel non-custodial, darmowe wydobycie $HOT, ulepszenia Fireplace i Storage.',
    h1: 'HOT Wallet ($HOT) na Telegramie: Pełny Poradnik Wydobycia',
    badge: 'Tier 1 • Portfel NEAR & Multi-Chain',
    rewardLabel: 'Nagroda',
    costLabel: 'Koszt',
    snapshotLabel: 'Etap',
    timeLabel: 'Czas dziennie',
    overviewHeading: 'Czym jest HOT Wallet?',
    overview: 'Stworzony przez zespół HERE Wallet w sieci NEAR, HOT Wallet to w pełni niepowierniczy portfel multi-chain wewnątrz Telegrama (NEAR, TON, EVM, Solana) z wbudowanym wydobyciem $HOT i platformą HOT Pad.',
    tokenomicsHeading: 'Tokenomia $HOT',
    tokenomics: 'Token $HOT służy do transakcji cross-chain bez opłat gas, udziału w launchpadzie HOT Pad oraz zniżek na wymiany.',
    stepsHeading: 'Jak Wydobywać $HOT Krok po Kroku',
    steps: [
      'Uruchom oficjalnego bota HOT Wallet w Telegramie (@herewalletbot).',
      'Utwórz nowy portfel i zapisz frazę odzyskiwania (12 słów) na papierze offline.',
      'Odbierz pierwsze tokeny $HOT na ekranie wydobycia.',
      'Ulepszaj Fireplace i Storage za wydobyte $HOT.',
      'Dołącz do aktywnej Wioski (Village), aby zyskać +5% bonusu.'
    ],
    strategyHeading: 'Optymalna Strategia',
    strategy: 'Rozbuduj Storage do 6–12 godzin na samym początku i trzymaj w portfelu ok. $0,50 w NEAR na tanie odbiory on-chain.',
    sybilHeading: 'Bezpieczeństwo i Anty-Sybil',
    sybilSafety: 'Konta on-chain w sieci NEAR oraz transakcje z minimalnym gasem skutecznie eliminują farmy botów.',
    faqHeading: 'Najczęstsze Pytania o HOT Wallet',
    faqs: [
      { q: 'Czy HOT Wallet jest bezpieczny?', a: 'Tak, to oficjalny portfel non-custodial stworzony przez zespół HERE Wallet.' },
      { q: 'Czy potrzebuję NEAR do odbioru $HOT?', a: 'Pierwsze odbiory są darmowe, a później wystarczy symboliczna ilość NEAR na gas.' },
      { q: 'Dlaczego warto dołączyć do Village?', a: 'Zapewnia stały bonus +5% do szybkości wydobycia $HOT.' }
    ],
    ctaText: 'Otwórz HOT Wallet',
    englishVersionLabel: 'Wersja Angielska'
  },

  // ================= TINY VERSE (16 LANGUAGES) =================
  {
    id: 'tiny-verse',
    slug: 'tr',
    lang: 'tr',
    flag: '🇹🇷',
    homeLabel: 'Ana Sayfa',
    hubLabel: 'Telegram Airdropları',
    hubHref: '/tr/telegram-airdroplari/',
    title: 'Tiny Verse Airdrop Rehberi (2026): $TINY Token & Galaksi Kurulumu | Airdroplyx',
    description: 'TON ağı üzerindeki 3D interaktif galaksi simülatörü Tiny Verse ile ücretsiz $TINY token kazanma, yıldız tozu toplama ve Tonkeeper bağlantısı Türkçe rehberi.',
    h1: 'Tiny Verse ($TINY) Telegram Airdrop ve Galaksi Rehberi',
    badge: 'TON Ekosistemi • Ücretsiz',
    rewardLabel: 'Tahmini Ödül',
    costLabel: 'Maliyet',
    snapshotLabel: 'Beklenen Dönem',
    timeLabel: 'Günlük Süre',
    overviewHeading: 'Proje Özeti',
    overview: 'Tiny Verse, TON (The Open Network) ekosistemi üzerine inşa edilmiş 3D interaktif bir galaksi simülatörü Telegram Mini Uygulamasıdır. Oyuncular kendi yıldız sistemlerini büyütür, gezegenler oluşturur ve depolama kapasitesi dolmadan önce düzenli olarak yıldız tozu (stardust) toplar. Yerel TON Connect ve Telegram Stars entegrasyonu sayesinde tamamen zincir üstü doğrulanabilir bir ilerleme sunar.',
    tokenomicsHeading: '$TINY Tokenomik ve Dağıtım',
    tokenomics: '$TINY toplam arzının %55’i aktif galaksi kâşiflerine ve topluluk görevlerine ayrılmıştır. Dağıtım puanları; oluşturulan yıldız sayısı, düzenli yıldız tozu hasadı ve Galaksi Öncüsü (Galaxy Pioneer) rozetlerine göre hesaplanır.',
    stepsHeading: 'Adım Adım Katılım Rehberi',
    steps: [
      'Resmi Tiny Verse Telegram Mini Uygulamasını başlatın ve ilk galaksinizi oluşturun.',
      'Yıldız tozu (stardust) üretimini başlatın ve depolama kapasitesi dolmadan her 4-8 saatte bir hasat yapın.',
      'Topladığınız yıldız tozunu yeni yıldızlar ve gezegenler açarak galaksi çarpanınızı artırmak için kullanın.',
      'Görevler sekmesindeki sosyal ve günlük keşif görevlerini tamamlayın.',
      'Profil ayarlarından Tonkeeper veya MyTonWallet cüzdanınızı TON Connect ile bağlayarak uygunluğunuzu onaylayın.'
    ],
    strategyHeading: 'Maksimum Ödül Stratejisi',
    strategy: 'Depolama kapasitesi dolduğunda üretim durur; bu nedenle ilk haftada yıldız tozu kapasitesini yükseltmeye öncelik verin. Arkadaşlarınızın galaksilerini ziyaret etmek ve günlük giriş serisini bozmamak saatlik verimi belirgin biçimde artırır.',
    sybilHeading: 'Sybil Koruması ve Güvenlik',
    sybilSafety: 'Zamanlayıcıya bağlı depolama sınırları, organik galaksi büyüme eğrileri ve zincir üstü Tonkeeper doğrulaması otomatik çoklu hesap botlarını filtreler. Cüzdanınızın kurtarma kelimelerini asla kimseyle paylaşmayın.',
    faqHeading: 'Sıkça Sorulan Sorular',
    faqs: [
      {
        q: 'Tiny Verse airdrop katılımı ücretsiz mi?',
        a: 'Evet, temel galaksi kurulumu ve yıldız tozu madenciliği tamamen ücretsizdir. İsteğe bağlı hızlandırmalar dışında yatırım zorunluluğu yoktur.'
      },
      {
        q: 'Hangi cüzdanı bağlamalıyım?',
        a: 'TON ağını destekleyen Tonkeeper, MyTonWallet veya Telegram Wallet cüzdanlarından birini güvenle bağlayabilirsiniz.'
      }
    ],
    ctaText: 'Tiny Verse’i Başlat',
    englishVersionLabel: 'İngilizce Sürüm'
  },
  {
    id: 'tiny-verse',
    slug: 'ru',
    lang: 'ru',
    flag: '🇷🇺',
    homeLabel: 'Главная',
    hubLabel: 'Telegram-аирдропы',
    hubHref: '/ru/telegram-airdrops/',
    title: 'Гайд по аирдропу Tiny Verse (2026): токен $TINY и старт в TON | Airdroplyx',
    description: 'Подробное руководство по Tiny Verse в Telegram: как выращивать галактику, собирать звездную пыль каждые 4–8 часов и подключить Tonkeeper для дропа $TINY.',
    h1: 'Tiny Verse ($TINY): гайд по аирдропу и созданию галактики в Telegram',
    badge: 'Экосистема TON • Бесплатно',
    rewardLabel: 'Ожидаемая награда',
    costLabel: 'Затраты',
    snapshotLabel: 'Ожидаемый период',
    timeLabel: 'Время в день',
    overviewHeading: 'Обзор проекта',
    overview: 'Tiny Verse — это интерактивный 3D-симулятор галактики в формате Telegram Mini App на блокчейне TON. Участники развивают собственные звездные системы, открывают новые звезды и собирают звездную пыль до заполнения хранилища. Приложение поддерживает нативный протокол TON Connect и интеграцию с Telegram Stars.',
    tokenomicsHeading: 'Токеномика $TINY',
    tokenomics: '55% общего предложения токенов $TINY зарезервировано для активных исследователей галактики и наград сообщества. Аллокация зависит от размера звездной системы, регулярности сбора пыли и наличия значков Galaxy Pioneer.',
    stepsHeading: 'Пошаговая инструкция',
    steps: [
      'Откройте официальный бот Tiny Verse в Telegram и инициализируйте стартовую звезду.',
      'Собирайте звездную пыль каждые 4–8 часов, пока объем хранилища не заполнился.',
      'Тратьте накопленную пыль на создание новых звезд и улучшение вместимости для роста множителя.',
      'Выполняйте ежедневные и социальные задания во вкладке активностей.',
      'Подключите некастодиальный кошелек Tonkeeper или MyTonWallet через TON Connect для фиксации активности.'
    ],
    strategyHeading: 'Стратегия фарма',
    strategy: 'На старте важнее всего увеличить лимит хранилища и частоту сбора, чтобы пыль не простаивала. Не пропускайте ежедневные серии и используйте взаимные визиты в галактики друзей для бонусной добычи.',
    sybilHeading: 'Защита от ботов и безопасность',
    sybilSafety: 'Ограничения по таймерам хранилища, естественная кривая прогресса и ончейн-подтверждение через Tonkeeper эффективно отсеивают фермы ботов. Никогда не вводите сид-фразу на сторонних сайтах.',
    faqHeading: 'Частые вопросы',
    faqs: [
      {
        q: 'Нужны ли вложения для участия в Tiny Verse?',
        a: 'Нет, базовый игровой процесс и сбор звездной пыли полностью бесплатны ($0).'
      },
      {
        q: 'Какой кошелек лучше использовать?',
        a: 'Рекомендуется использовать Tonkeeper, MyTonWallet или встроенный Telegram Wallet с поддержкой сети TON.'
      }
    ],
    ctaText: 'Открыть Tiny Verse',
    englishVersionLabel: 'Английская версия'
  },
  {
    id: 'tiny-verse',
    slug: 'id',
    lang: 'id',
    flag: '🇮🇩',
    homeLabel: 'Beranda',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/id/airdrop-telegram/',
    title: 'Panduan Airdrop Tiny Verse (2026): Token $TINY & Galaksi TON | Airdroplyx',
    description: 'Cara ikut airdrop Tiny Verse di Telegram secara gratis: kumpulkan debu bintang setiap 4-8 jam, perluas galaksi, dan hubungkan dompet Tonkeeper untuk klaim $TINY.',
    h1: 'Tiny Verse ($TINY): Panduan Airdrop Telegram & Simulasi Galaksi',
    badge: 'Ekosistem TON • Gratis',
    rewardLabel: 'Estimasi Hadiah',
    costLabel: 'Biaya',
    snapshotLabel: 'Perkiraan Snapshot',
    timeLabel: 'Waktu Harian',
    overviewHeading: 'Ringkasan Proyek',
    overview: 'Tiny Verse adalah aplikasi mini Telegram berbentuk simulator galaksi 3D interaktif yang berjalan di jaringan TON. Pengguna membangun sistem bintang, memperluas galaksi, dan memanen debu bintang (stardust) setiap 4 hingga 8 jam sebelum kapasitas penyimpanan penuh. Proyek ini terintegrasi langsung dengan TON Connect dan Telegram Stars.',
    tokenomicsHeading: 'Tokenomik $TINY',
    tokenomics: 'Sebanyak 55% dari total suplai $TINY dialokasikan khusus untuk para penjelajah galaksi yang aktif. Poin distribusi dihitung berdasarkan jumlah bintang, konsistensi panen debu bintang, serta lencana Galaxy Pioneer.',
    stepsHeading: 'Langkah-Langkah Mengikuti Airdrop',
    steps: [
      'Buka Mini App resmi Tiny Verse di Telegram dan buat galaksi pertama Anda.',
      'Panen debu bintang secara rutin setiap 4–8 jam sebelum kapasitas tangki penuh.',
      'Gunakan debu bintang untuk menciptakan bintang baru dan meningkatkan kapasitas penyimpanan.',
      'Selesaikan misi harian dan tugas komunitas yang tersedia di menu tugas.',
      'Hubungkan dompet Tonkeeper atau MyTonWallet melalui TON Connect di pengaturan profil.'
    ],
    strategyHeading: 'Strategi Maksimal',
    strategy: 'Prioritaskan peningkatan kapasitas penyimpanan di awal agar produksi tidak terhenti saat Anda tidur. Kunjungi galaksi teman dan pertahankan rekor login harian untuk mempercepat pertumbuhan sistem bintang.',
    sybilHeading: 'Keamanan & Anti-Sybil',
    sybilSafety: 'Batas waktu penyimpanan debu bintang, kurva progres organik, dan verifikasi on-chain melalui Tonkeeper menyaring akun bot otomatis. Jangan pernah membagikan seed phrase dompet Anda kepada siapa pun.',
    faqHeading: 'Pertanyaan Umum',
    faqs: [
      {
        q: 'Apakah airdrop Tiny Verse gratis?',
        a: 'Ya, memulai galaksi dan mengumpulkan debu bintang sepenuhnya gratis tanpa modal ($0).'
      },
      {
        q: 'Dompet apa yang didukung Tiny Verse?',
        a: 'Anda dapat menghubungkan Tonkeeper, MyTonWallet, atau Telegram Wallet melalui fitur TON Connect.'
      }
    ],
    ctaText: 'Buka Tiny Verse',
    englishVersionLabel: 'Versi Bahasa Inggris'
  },
  {
    id: 'tiny-verse',
    slug: 'vi',
    lang: 'vi',
    flag: '🇻🇳',
    homeLabel: 'Trang chủ',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/vi/airdrop-telegram/',
    title: 'Hướng dẫn Airdrop Tiny Verse (2026): Nhận Token $TINY trên TON | Airdroplyx',
    description: 'Hướng dẫn chi tiết cách tham gia airdrop Tiny Verse trên Telegram miễn phí: thu thập bụi sao mỗi 4-8 giờ, mở rộng thiên hà và kết nối ví Tonkeeper.',
    h1: 'Tiny Verse ($TINY): Hướng dẫn Airdrop Telegram & Xây dựng Thiên hà',
    badge: 'Hệ sinh thái TON • Miễn phí',
    rewardLabel: 'Phần thưởng dự kiến',
    costLabel: 'Chi phí',
    snapshotLabel: 'Thời gian dự kiến',
    timeLabel: 'Thời gian mỗi ngày',
    overviewHeading: 'Tổng quan dự án',
    overview: 'Tiny Verse là Telegram Mini App mô phỏng thiên hà 3D tương tác chạy trên mạng TON. Người chơi nuôi dưỡng các hệ sao, mở rộng thiên hà và thu hoạch bụi sao (stardust) mỗi 4–8 giờ trước khi đầy kho lưu trữ. Ứng dụng hỗ trợ kết nối ví trực tiếp qua TON Connect và Telegram Stars.',
    tokenomicsHeading: 'Tokenomics của $TINY',
    tokenomics: '55% tổng nguồn cung $TINY được dành riêng cho cộng đồng người chơi tích cực. Tỷ lệ phân bổ dựa trên số lượng ngôi sao đã tạo, tần suất thu hoạch bụi sao và huy hiệu Galaxy Pioneer.',
    stepsHeading: 'Các bước tham gia chi tiết',
    steps: [
      'Khởi chạy Mini App chính thức của Tiny Verse trên Telegram và tạo thiên hà đầu tiên.',
      'Thu hoạch bụi sao đều đặn mỗi 4–8 giờ trước khi thanh lưu trữ đạt mức tối đa.',
      'Dùng bụi sao để tạo thêm các ngôi sao mới và nâng cấp dung lượng chứa.',
      'Hoàn thành các nhiệm vụ khám phá hàng ngày và nhiệm vụ cộng đồng trong mục Tasks.',
      'Kết nối ví Tonkeeper hoặc MyTonWallet thông qua TON Connect để xác nhận điều kiện on-chain.'
    ],
    strategyHeading: 'Chiến lược tối ưu điểm',
    strategy: 'Hãy ưu tiên nâng cấp sức chứa kho bụi sao trong những ngày đầu để không bị gián đoạn sản lượng. Kết hợp điểm danh hàng ngày và ghé thăm thiên hà bạn bè để nhận thêm phần thưởng.',
    sybilHeading: 'Chống Sybil & Bảo mật',
    sybilSafety: 'Giới hạn thời gian lưu trữ, tốc độ phát triển thiên hà tự nhiên và bước xác minh qua Tonkeeper giúp loại bỏ tài khoản bot hàng loạt. Tuyệt đối không chia sẻ cụm từ khôi phục ví.',
    faqHeading: 'Câu hỏi thường gặp',
    faqs: [
      {
        q: 'Tham gia Tiny Verse có mất phí không?',
        a: 'Không, bạn có thể chơi và khai thác bụi sao hoàn toàn miễn phí ($0).'
      },
      {
        q: 'Nên dùng ví nào để nhận airdrop $TINY?',
        a: 'Bạn nên dùng Tonkeeper, MyTonWallet hoặc Telegram Wallet hỗ trợ mạng TON.'
      }
    ],
    ctaText: 'Mở Tiny Verse',
    englishVersionLabel: 'Bản tiếng Anh'
  },
  {
    id: 'tiny-verse',
    slug: 'es',
    lang: 'es',
    flag: '🇪🇸',
    homeLabel: 'Inicio',
    hubLabel: 'Airdrops de Telegram',
    hubHref: '/es/airdrops-telegram/',
    title: 'Guía Airdrop Tiny Verse (2026): Token $TINY y Galaxia TON | Airdroplyx',
    description: 'Aprende a participar gratis en el airdrop de Tiny Verse en Telegram: recolecta polvo estelar cada 4-8 horas, expande tu galaxia y conecta Tonkeeper.',
    h1: 'Tiny Verse ($TINY): Guía del Airdrop en Telegram y Simulador Galáctico',
    badge: 'Ecosistema TON • Gratis',
    rewardLabel: 'Recompensa estimada',
    costLabel: 'Costo',
    snapshotLabel: 'Periodo estimado',
    timeLabel: 'Tiempo diario',
    overviewHeading: 'Resumen del proyecto',
    overview: 'Tiny Verse es una Mini App de Telegram que ofrece un simulador interactivo de galaxias en 3D sobre la red TON. Los usuarios crean sistemas estelares y recolectan polvo estelar cada 4 a 8 horas antes de que se llene el almacenamiento. Cuenta con integración nativa de TON Connect y Telegram Stars.',
    tokenomicsHeading: 'Tokenomics de $TINY',
    tokenomics: 'El 55% del suministro total de $TINY está reservado para los exploradores activos y la comunidad. La asignación considera la cantidad de estrellas creadas, la constancia en la recolección y las insignias Galaxy Pioneer.',
    stepsHeading: 'Pasos para participar',
    steps: [
      'Abre la Mini App oficial de Tiny Verse en Telegram e inicia tu primera galaxia.',
      'Recolecta polvo estelar cada 4–8 horas antes de que se llene el límite de almacenamiento.',
      'Invierte el polvo estelar en generar nuevas estrellas y ampliar la capacidad de tu sistema.',
      'Completa las misiones diarias y tareas sociales dentro de la aplicación.',
      'Vincula tu billetera Tonkeeper o MyTonWallet mediante TON Connect para verificar tu cuenta.'
    ],
    strategyHeading: 'Estrategia para maximizar recompensas',
    strategy: 'Mejora la capacidad de almacenamiento al principio para evitar que la producción se detenga. Mantén tu racha diaria y visita galaxias de otros usuarios para acelerar el crecimiento de tu sistema.',
    sybilHeading: 'Seguridad y protección Sybil',
    sybilSafety: 'Los temporizadores de almacenamiento, la progresión orgánica y la verificación on-chain con Tonkeeper filtran cuentas automatizadas. Nunca compartas tu frase semilla.',
    faqHeading: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Es gratis el airdrop de Tiny Verse?',
        a: 'Sí, crear tu galaxia y recolectar polvo estelar es completamente gratuito ($0).'
      },
      {
        q: '¿Qué billetera necesito conectar?',
        a: 'Puedes usar Tonkeeper, MyTonWallet o Telegram Wallet compatibles con la red TON.'
      }
    ],
    ctaText: 'Abrir Tiny Verse',
    englishVersionLabel: 'Versión en inglés'
  },
  {
    id: 'tiny-verse',
    slug: 'pt',
    lang: 'pt',
    flag: '🇧🇷',
    homeLabel: 'Início',
    hubLabel: 'Airdrops do Telegram',
    hubHref: '/pt/airdrops-telegram/',
    title: 'Guia Airdrop Tiny Verse (2026): Token $TINY na Rede TON | Airdroplyx',
    description: 'Passo a passo completo para o airdrop Tiny Verse no Telegram: colete poeira estelar a cada 4-8 horas, expanda sua galáxia e conecte a Tonkeeper grátis.',
    h1: 'Tiny Verse ($TINY): Guia do Airdrop no Telegram e Galáxia TON',
    badge: 'Ecossistema TON • Grátis',
    rewardLabel: 'Recompensa estimada',
    costLabel: 'Custo',
    snapshotLabel: 'Previsão',
    timeLabel: 'Tempo diário',
    overviewHeading: 'Visão geral do projeto',
    overview: 'Tiny Verse é um Mini App do Telegram com simulador interativo de galáxia em 3D construído na rede TON. Os jogadores desenvolvem sistemas estelares e colhem poeira estelar (stardust) a cada 4 a 8 horas antes que o armazenamento encha. O projeto usa TON Connect nativo e Telegram Stars.',
    tokenomicsHeading: 'Tokenomics do $TINY',
    tokenomics: '55% da oferta total de $TINY é destinada aos exploradores ativos da galáxia. A distribuição leva em conta estrelas criadas, consistência nas coletas e emblemas Galaxy Pioneer.',
    stepsHeading: 'Passo a passo para participar',
    steps: [
      'Inicie o Mini App oficial do Tiny Verse no Telegram e crie sua primeira galáxia.',
      'Colete poeira estelar a cada 4–8 horas antes que o limite de armazenamento seja atingido.',
      'Use a poeira estelar para criar novas estrelas e expandir a capacidade do seu sistema.',
      'Conclua as missões diárias e tarefas sociais na aba de atividades.',
      'Conecte sua carteira Tonkeeper ou MyTonWallet via TON Connect nas configurações.'
    ],
    strategyHeading: 'Estratégia de ganhos',
    strategy: 'Priorize aumentar o limite de armazenamento logo no início para não perder produção. Mantenha a sequência diária de acesso e explore galáxias de amigos para bônus extras.',
    sybilHeading: 'Proteção Sybil e segurança',
    sybilSafety: 'Limites de tempo no armazenamento, curva orgânica de progresso e verificação on-chain com Tonkeeper ajudam a bloquear bots. Nunca compartilhe sua frase de recuperação.',
    faqHeading: 'Perguntas frequentes',
    faqs: [
      {
        q: 'Preciso investir dinheiro no Tiny Verse?',
        a: 'Não, a criação da galáxia e a coleta de poeira estelar são totalmente gratuitas ($0).'
      },
      {
        q: 'Qual carteira é recomendada?',
        a: 'Tonkeeper, MyTonWallet ou Telegram Wallet com suporte à rede TON.'
      }
    ],
    ctaText: 'Abrir Tiny Verse',
    englishVersionLabel: 'Versão em inglês'
  },
  {
    id: 'tiny-verse',
    slug: 'ko',
    lang: 'ko',
    flag: '🇰🇷',
    homeLabel: '홈',
    hubLabel: '텔레그램 에어드랍',
    hubHref: '/ko/telegram-airdrops/',
    title: 'Tiny Verse 에어드랍 가이드 (2026): $TINY 토큰 무료 채굴 | Airdroplyx',
    description: 'TON 네트워크 기반 3D 은하 시뮬레이터 Tiny Verse 텔레그램 미니앱 완벽 가이드: 4~8시간마다 스타더스트 수확 및 Tonkeeper 지갑 연결 방법.',
    h1: 'Tiny Verse ($TINY) 텔레그램 에어드랍 및 은하 성장 가이드',
    badge: 'TON 생태계 • 무료',
    rewardLabel: '예상 보상',
    costLabel: '비용',
    snapshotLabel: '예상 시기',
    timeLabel: '일일 소요 시간',
    overviewHeading: '프로젝트 개요',
    overview: 'Tiny Verse는 TON 블록체인 위에 구축된 인터랙티브 3D 은하 시뮬레이터 텔레그램 미니앱입니다. 사용자는 자신만의 항성계를 키우고, 저장 용량이 가득 차기 전 4~8시간마다 스타더스트(Stardust)를 수확합니다. TON Connect와 Telegram Stars를 기본 지원하여 온체인 기여도를 투명하게 기록합니다.',
    tokenomicsHeading: '$TINY 토크노믹스',
    tokenomics: '전체 $TINY 공급량의 55%가 활성 유저 및 커뮤니티 보상으로 배정되어 있습니다. 생성한 별의 수, 꾸준한 스타더스트 수확, Galaxy Pioneer 배지 여부가 할당량 산정에 반영됩니다.',
    stepsHeading: '단계별 참여 방법',
    steps: [
      '텔레그램에서 공식 Tiny Verse 미니앱을 실행하고 첫 은하를 생성하세요.',
      '저장소가 가득 차기 전에 4~8시간 간격으로 스타더스트를 수확하세요.',
      '모은 스타더스트로 새로운 별을 생성하고 저장 용량을 업그레이드해 배율을 높이세요.',
      '미션 탭의 일일 체크인과 커뮤니티 퀘스트를 완료하세요.',
      '설정에서 TON Connect를 통해 Tonkeeper 또는 MyTonWallet 지갑을 연결하세요.'
    ],
    strategyHeading: '보상 극대화 전략',
    strategy: '초반에는 스타더스트 저장 용량을 우선 확장해 생산이 멈추지 않도록 관리하는 것이 핵심입니다. 연속 출석 스트릭을 유지하고 친구 은하를 방문하면 성장 속도가 빨라집니다.',
    sybilHeading: '시빌 방지 및 보안',
    sybilSafety: '저장 타이머 제한, 자연스러운 은하 성장 곡선, Tonkeeper 온체인 검증을 통해 다계정 봇을 필터링합니다. 지갑 복구 구문은 절대 외부에 공유하지 마세요.',
    faqHeading: '자주 묻는 질문',
    faqs: [
      {
        q: 'Tiny Verse 에어드랍은 무료인가요?',
        a: '네, 기본 은하 생성과 스타더스트 수확은 비용 없이 무료($0)로 참여할 수 있습니다.'
      },
      {
        q: '어떤 지갑을 연결해야 하나요?',
        a: 'TON 네트워크를 지원하는 Tonkeeper, MyTonWallet 또는 Telegram Wallet을 연결하면 됩니다.'
      }
    ],
    ctaText: 'Tiny Verse 시작하기',
    englishVersionLabel: '영문 버전'
  },
  {
    id: 'tiny-verse',
    slug: 'ja',
    lang: 'ja',
    flag: '🇯🇵',
    homeLabel: 'ホーム',
    hubLabel: 'Telegramエアドロップ',
    hubHref: '/ja/telegram-airdrops/',
    title: 'Tiny Verse エアドロップ攻略 (2026): $TINY トークン獲得ガイド | Airdroplyx',
    description: 'TONネットワーク上の3D銀河シミュレーター「Tiny Verse」の始め方：4〜8時間ごとのスターダスト回収、銀河拡張、Tonkeeper接続手順を解説。',
    h1: 'Tiny Verse ($TINY) Telegramエアドロップ＆銀河育成ガイド',
    badge: 'TONエコシステム • 無料',
    rewardLabel: '予想報酬',
    costLabel: '費用',
    snapshotLabel: '予定時期',
    timeLabel: '1日の作業時間',
    overviewHeading: 'プロジェクト概要',
    overview: 'Tiny Verseは、TON（The Open Network）上で動作するインタラクティブな3D銀河シミュレーター型Telegramミニアプリです。プレイヤーは恒星系を育て、ストレージが満杯になる前に4〜8時間ごとにスターダストを回収します。TON ConnectおよびTelegram Starsにネイティブ対応しています。',
    tokenomicsHeading: '$TINY トークノミクス',
    tokenomics: '$TINY総供給量の55%がアクティブな銀河探索者およびコミュニティ向けに割り当てられています。作成した星の数、定期的な回収実績、Galaxy Pioneerバッジなどが評価対象となります。',
    stepsHeading: '参加ステップ',
    steps: [
      'Telegramで公式Tiny Verseミニアプリを起動し、最初の銀河を作成します。',
      'ストレージ上限に達する前に、4〜8時間ごとにスターダストを回収します。',
      '集めたスターダストを使って新しい星を生み出し、生産倍率と保管容量を強化します。',
      'タスクタブからデイリーミッションやコミュニティタスクを完了します。',
      '設定画面のTON ConnectからTonkeeperまたはMyTonWalletを接続します。'
    ],
    strategyHeading: '報酬最大化のコツ',
    strategy: '序盤はストレージ容量のアップグレードを優先し、回収漏れを防ぐことが重要です。毎日のログイン継続とフレンド銀河への訪問で効率よく星を増やしましょう。',
    sybilHeading: 'シビル対策と安全性',
    sybilSafety: 'ストレージタイマー制限や自然な成長曲線に加え、Tonkeeperによるオンチェーン認証で自動ボットを排除しています。シードフレーズは絶対に他人に教えないでください。',
    faqHeading: 'よくある質問',
    faqs: [
      {
        q: 'Tiny Verseは無料で参加できますか？',
        a: 'はい、銀河の作成やスターダストの回収は完全無料（$0）で始められます。'
      },
      {
        q: 'どのウォレットに対応していますか？',
        a: 'TON対応のTonkeeper、MyTonWallet、またはTelegram Walletを利用できます。'
      }
    ],
    ctaText: 'Tiny Verseを開く',
    englishVersionLabel: '英語版を見る'
  },
  {
    id: 'tiny-verse',
    slug: 'ar',
    lang: 'ar',
    flag: '🇸🇦',
    homeLabel: 'الرئيسية',
    hubLabel: 'إيردروبات تيليجرام',
    hubHref: '/ar/telegram-airdrops/',
    title: 'دليل إيردروب Tiny Verse (2026): تعدين $TINY وربط Tonkeeper | Airdroplyx',
    description: 'دليل شامل للمشاركة مجاناً في إيردروب Tiny Verse على شبكة TON: اجمع غبار النجوم كل 4 إلى 8 ساعات ووسّع مجرتك واربط محفظة Tonkeeper.',
    h1: 'Tiny Verse ($TINY): دليل إيردروب تيليجرام ومحاكاة المجرة',
    badge: 'نظام TON • مجاني',
    rewardLabel: 'المكافأة المتوقعة',
    costLabel: 'التكلفة',
    snapshotLabel: 'الفترة المتوقعة',
    timeLabel: 'الوقت اليومي',
    overviewHeading: 'نظرة عامة على المشروع',
    overview: 'تطبيق Tiny Verse هو تطبيق تيليجرام مصغر يعمل كمحاكٍ تفاعلي ثلاثي الأبعاد للمجرات على شبكة TON. يبني اللاعبون أنظمتهم النجمية ويجمعون غبار النجوم (Stardust) كل 4 إلى 8 ساعات قبل امتلاء سعة التخزين، مع دعم مدمج لبروتوكول TON Connect ونجوم تيليجرام.',
    tokenomicsHeading: 'اقتصاديات عملة $TINY',
    tokenomics: 'تم تخصيص 55% من إجمالي معروض عملة $TINY للمستكشفين النشطين ومهام المجتمع. تعتمد نقاط التوزيع على عدد النجوم المنشأة، والانتظام في جمع غبار النجوم، وشارات Galaxy Pioneer.',
    stepsHeading: 'خطوات المشاركة',
    steps: [
      'افتح تطبيق Tiny Verse الرسمي داخل تيليجرام وأنشئ مجرتك الأولى.',
      'اجمع غبار النجوم بانتظام كل 4 إلى 8 ساعات قبل امتلاء سعة التخزين.',
      'استخدم غبار النجوم لإنشاء نجوم جديدة وزيادة سعة التخزين ومضاعف الإنتاج.',
      'أكمل المهام اليومية ومهام المجتمع من تبويب المهام.',
      'اربط محفظة Tonkeeper أو MyTonWallet عبر TON Connect من الإعدادات لتأكيد أهليتك.'
    ],
    strategyHeading: 'استراتيجية تعظيم المكافآت',
    strategy: 'ركّز في البداية على ترقية سعة التخزين حتى لا يتوقف الإنتاج أثناء غيابك. حافظ على سلسلة تسجيل الدخول اليومي وزُر مجرات الأصدقاء للحصول على مكافآت إضافية.',
    sybilHeading: 'الحماية من الحسابات الوهمية والأمان',
    sybilSafety: 'تساعد مؤقتات التخزين، ومنحنى النمو الطبيعي، والتحقق على السلسلة عبر Tonkeeper في استبعاد حسابات البوتات المتعددة. لا تشارك عبارة الاسترداد الخاصة بك مطلقاً.',
    faqHeading: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'هل المشاركة في إيردروب Tiny Verse مجانية؟',
        a: 'نعم، إنشاء المجرة وجمع غبار النجوم مجاني تماماً بدون أي تكلفة ($0).'
      },
      {
        q: 'ما المحافظ المدعومة للربط؟',
        a: 'يمكنك ربط Tonkeeper أو MyTonWallet أو Telegram Wallet الداعمة لشبكة TON.'
      }
    ],
    ctaText: 'افتح Tiny Verse',
    englishVersionLabel: 'النسخة الإنجليزية'
  },
  {
    id: 'tiny-verse',
    slug: 'de',
    lang: 'de',
    flag: '🇩🇪',
    homeLabel: 'Startseite',
    hubLabel: 'Telegram-Airdrops',
    hubHref: '/de/telegram-airdrops/',
    title: 'Tiny Verse Airdrop Guide (2026): $TINY Token kostenlos sammeln | Airdroplyx',
    description: 'Anleitung für den Tiny Verse Airdrop auf TON: Alle 4–8 Stunden Sternenstaub ernten, Galaxie ausbauen und Tonkeeper sicher verbinden.',
    h1: 'Tiny Verse ($TINY): Telegram-Airdrop & Galaxie-Guide',
    badge: 'TON-Ökosystem • Kostenlos',
    rewardLabel: 'Geschätzte Belohnung',
    costLabel: 'Kosten',
    snapshotLabel: 'Erwarteter Zeitraum',
    timeLabel: 'Täglicher Aufwand',
    overviewHeading: 'Projektübersicht',
    overview: 'Tiny Verse ist eine interaktive 3D-Galaxie-Simulation als Telegram Mini App auf der TON-Blockchain. Nutzer bauen eigene Sternensysteme auf und sammeln alle 4 bis 8 Stunden Sternenstaub, bevor der Speicher voll ist. Die App integriert TON Connect und Telegram Stars nativ.',
    tokenomicsHeading: '$TINY Tokenomics',
    tokenomics: '55 % des gesamten $TINY-Angebots sind für aktive Entdecker und Community-Belohnungen reserviert. Bewertet werden erstellte Sterne, regelmäßige Ernten und Galaxy-Pioneer-Abzeichen.',
    stepsHeading: 'Schritt-für-Schritt-Anleitung',
    steps: [
      'Starte die offizielle Tiny Verse Mini App in Telegram und erstelle deine erste Galaxie.',
      'Ernte alle 4–8 Stunden Sternenstaub, bevor das Speicherlimit erreicht ist.',
      'Nutze den Sternenstaub, um neue Sterne zu erschaffen und die Speicherkapazität zu erweitern.',
      'Erledige die täglichen Check-ins und Community-Aufgaben im Aufgabenbereich.',
      'Verbinde dein Tonkeeper- oder MyTonWallet-Konto über TON Connect zur On-Chain-Verifizierung.'
    ],
    strategyHeading: 'Strategie für maximale Punkte',
    strategy: 'Erweitere zuerst die Speicherkapazität, damit die Produktion über Nacht nicht stoppt. Halte deine tägliche Serie aufrecht und besuche befreundete Galaxien für zusätzliche Boni.',
    sybilHeading: 'Sybil-Schutz & Sicherheit',
    sybilSafety: 'Speichertimer, organische Wachstumskurven und die On-Chain-Prüfung über Tonkeeper filtern automatisierte Bot-Farmen heraus. Teile niemals deine Seed-Phrase.',
    faqHeading: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Ist der Tiny Verse Airdrop kostenlos?',
        a: 'Ja, der Start der Galaxie und das Sammeln von Sternenstaub sind komplett kostenlos ($0).'
      },
      {
        q: 'Welche Wallet sollte ich verbinden?',
        a: 'Empfohlen werden Tonkeeper, MyTonWallet oder das integrierte Telegram Wallet für das TON-Netzwerk.'
      }
    ],
    ctaText: 'Tiny Verse öffnen',
    englishVersionLabel: 'Englische Version'
  },
  {
    id: 'tiny-verse',
    slug: 'fr',
    lang: 'fr',
    flag: '🇫🇷',
    homeLabel: 'Accueil',
    hubLabel: 'Airdrops Telegram',
    hubHref: '/fr/airdrops-telegram/',
    title: 'Guide Airdrop Tiny Verse (2026) : Token $TINY sur TON | Airdroplyx',
    description: 'Comment participer gratuitement à l’airdrop Tiny Verse sur Telegram : récoltez la poussière d’étoiles toutes les 4 à 8 heures et connectez Tonkeeper.',
    h1: 'Tiny Verse ($TINY) : Guide Airdrop Telegram et Simulateur Galactique',
    badge: 'Écosystème TON • Gratuit',
    rewardLabel: 'Récompense estimée',
    costLabel: 'Coût',
    snapshotLabel: 'Période estimée',
    timeLabel: 'Temps quotidien',
    overviewHeading: 'Présentation du projet',
    overview: 'Tiny Verse est une Mini App Telegram de simulation galactique 3D interactive sur la blockchain TON. Les joueurs développent leurs systèmes stellaires et récoltent de la poussière d’étoiles toutes les 4 à 8 heures avant saturation du stockage, avec prise en charge native de TON Connect et Telegram Stars.',
    tokenomicsHeading: 'Tokenomics de $TINY',
    tokenomics: '55 % de l’offre totale de $TINY est réservée aux explorateurs actifs et aux quêtes communautaires. L’allocation dépend du nombre d’étoiles créées, de la régularité de récolte et des badges Galaxy Pioneer.',
    stepsHeading: 'Étapes pour participer',
    steps: [
      'Lancez la Mini App officielle Tiny Verse sur Telegram et créez votre première galaxie.',
      'Récoltez la poussière d’étoiles toutes les 4 à 8 heures avant que le stockage ne soit plein.',
      'Dépensez cette poussière pour créer de nouvelles étoiles et augmenter votre capacité.',
      'Complétez les missions quotidiennes et tâches sociales dans l’onglet dédié.',
      'Connectez votre portefeuille Tonkeeper ou MyTonWallet via TON Connect dans les paramètres.'
    ],
    strategyHeading: 'Stratégie d’optimisation',
    strategy: 'Améliorez en priorité votre capacité de stockage dès les premiers jours afin d’éviter toute pause de production. Maintenez votre série quotidienne et visitez les galaxies d’amis.',
    sybilHeading: 'Protection Anti-Sybil et sécurité',
    sybilSafety: 'Les minuteries de stockage, la progression organique et la vérification on-chain via Tonkeeper filtrent les fermes de bots. Ne divulguez jamais votre phrase de récupération.',
    faqHeading: 'Questions fréquentes',
    faqs: [
      {
        q: 'L’airdrop Tiny Verse est-il gratuit ?',
        a: 'Oui, créer une galaxie et récolter de la poussière d’étoiles est entièrement gratuit ($0).'
      },
      {
        q: 'Quel portefeuille utiliser ?',
        a: 'Utilisez Tonkeeper, MyTonWallet ou Telegram Wallet compatible avec le réseau TON.'
      }
    ],
    ctaText: 'Ouvrir Tiny Verse',
    englishVersionLabel: 'Version anglaise'
  },
  {
    id: 'tiny-verse',
    slug: 'uk',
    lang: 'uk',
    flag: '🇺🇦',
    homeLabel: 'Головна',
    hubLabel: 'Telegram-аірдропи',
    hubHref: '/uk/telegram-airdrops/',
    title: 'Гайд з аірдропу Tiny Verse (2026): токен $TINY у мережі TON | Airdroplyx',
    description: 'Покрокова інструкція для аірдропу Tiny Verse у Telegram: збирайте зоряний пил кожні 4–8 годин, розвивайте галактику та підключіть Tonkeeper.',
    h1: 'Tiny Verse ($TINY): гайд з аірдропу та створення галактики в Telegram',
    badge: 'Екосистема TON • Безкоштовно',
    rewardLabel: 'Очікувана винагорода',
    costLabel: 'Витрати',
    snapshotLabel: 'Очікуваний період',
    timeLabel: 'Час на день',
    overviewHeading: 'Огляд проєкту',
    overview: 'Tiny Verse — це інтерактивний 3D-симулятор галактики у форматі Telegram Mini App на блокчейні TON. Користувачі розвивають зоряні системи та збирають зоряний пил кожні 4–8 годин до заповнення сховища. Підтримується нативний TON Connect та Telegram Stars.',
    tokenomicsHeading: 'Токеноміка $TINY',
    tokenomics: '55% загальної емісії $TINY зарезервовано для активних дослідників галактики. Розподіл враховує кількість створених зірок, регулярність збору пилу та бейджі Galaxy Pioneer.',
    stepsHeading: 'Покрокова інструкція',
    steps: [
      'Запустіть офіційний міні-додаток Tiny Verse у Telegram та створіть першу галактику.',
      'Збирайте зоряний пил кожні 4–8 годин, поки ліміт сховища не заповнився.',
      'Витрачайте пил на відкриття нових зірок і розширення обсягу сховища.',
      'Виконуйте щоденні та соціальні завдання у відповідному розділі.',
      'Підключіть гаманець Tonkeeper або MyTonWallet через TON Connect для підтвердження активності.'
    ],
    strategyHeading: 'Стратегія максимізації нагород',
    strategy: 'На старті найважливіше збільшити обсяг сховища, щоб видобуток не зупинявся вночі. Підтримуйте щоденну серію входів і відвідуйте галактики друзів.',
    sybilHeading: 'Захист від Sybil та безпека',
    sybilSafety: 'Таймери сховища, природна крива прогресу та ончейн-перевірка через Tonkeeper ефективно відсіюють автоматизовані боти. Ніколи не передавайте сід-фразу стороннім.',
    faqHeading: 'Часті запитання',
    faqs: [
      {
        q: 'Чи потрібні вкладення для участі в Tiny Verse?',
        a: 'Ні, запуск галактики та збір зоряного пилу повністю безкоштовні ($0).'
      },
      {
        q: 'Який гаманець варто підключити?',
        a: 'Підійде Tonkeeper, MyTonWallet або вбудований Telegram Wallet з підтримкою TON.'
      }
    ],
    ctaText: 'Відкрити Tiny Verse',
    englishVersionLabel: 'Англійська версія'
  },
  {
    id: 'tiny-verse',
    slug: 'zh',
    lang: 'zh-CN',
    flag: '🇨🇳',
    homeLabel: '首页',
    hubLabel: 'Telegram 空投',
    hubHref: '/zh/telegram-airdrops/',
    title: 'Tiny Verse 空投教程 (2026)：$TINY 代币免费挖矿与 TON 绑定 | Airdroplyx',
    description: 'TON 生态 3D 星系模拟应用 Tiny Verse 完整攻略：每 4–8 小时收集星尘、扩展星系并绑定 Tonkeeper 钱包获取 $TINY 空投。',
    h1: 'Tiny Verse ($TINY) Telegram 空投及星系养成指南',
    badge: 'TON 生态 • 零撸免费',
    rewardLabel: '预估奖励',
    costLabel: '参与成本',
    snapshotLabel: '预期周期',
    timeLabel: '每日耗时',
    overviewHeading: '项目简介',
    overview: 'Tiny Verse 是构建在 TON 网络上的交互式 3D 星系模拟 Telegram Mini App。玩家培养自己的恒星系统，并在存储上限满前每 4 至 8 小时收获一次星尘（Stardust）。项目原生支持 TON Connect 与 Telegram Stars。',
    tokenomicsHeading: '$TINY 代币经济',
    tokenomics: '$TINY 总供应量的 55% 预留给活跃星系探索者与社区奖励。空投权重主要参考创建的恒星数量、日常收获活跃度及 Galaxy Pioneer 徽章。',
    stepsHeading: '详细参与步骤',
    steps: [
      '在 Telegram 中打开官方 Tiny Verse 小程序，创建你的初始星系。',
      '在存储槽满之前，每隔 4–8 小时定时收取星尘。',
      '消耗星尘生成更多恒星，并优先升级存储容量以提高产出倍率。',
      '完成任务栏中的每日签到与社区互动任务。',
      '在设置中通过 TON Connect 绑定 Tonkeeper 或 MyTonWallet 钱包确认资格。'
    ],
    strategyHeading: '高收益策略',
    strategy: '前期优先提升星尘存储上限，避免夜间因满仓而停产；同时保持每日连续登录并拜访好友星系以获得额外加成。',
    sybilHeading: '防女巫机制与安全提示',
    sybilSafety: '基于冷却时间的存储上限、渐进式星系成长曲线以及 Tonkeeper 链上验证能够有效过滤批量脚本。切勿向任何第三方泄露钱包助记词。',
    faqHeading: '常见问题',
    faqs: [
      {
        q: '参与 Tiny Verse 空投需要花钱吗？',
        a: '不需要，创建星系与日常收集星尘完全免费（$0）。'
      },
      {
        q: '推荐绑定哪款钱包？',
        a: '建议使用支持 TON 网络的 Tonkeeper、MyTonWallet 或 Telegram Wallet。'
      }
    ],
    ctaText: '打开 Tiny Verse',
    englishVersionLabel: '英文原版'
  },
  {
    id: 'tiny-verse',
    slug: 'hi',
    lang: 'hi',
    flag: '🇮🇳',
    homeLabel: 'होम',
    hubLabel: 'टेलीग्राम एयरड्रॉप',
    hubHref: '/hi/telegram-airdrops/',
    title: 'Tiny Verse एयरड्रॉप गाइड (2026): $TINY टोकन और TON वॉलेट सेटअप | Airdroplyx',
    description: 'TON नेटवर्क पर 3D गैलेक्सी सिम्युलेटर Tiny Verse टेलीग्राम एयरड्रॉप में मुफ्त भाग लेने की पूरी गाइड: हर 4-8 घंटे में स्टारडस्ट क्लेम और Tonkeeper कनेक्ट करें।',
    h1: 'Tiny Verse ($TINY) टेलीग्राम एयरड्रॉप और गैलेक्सी गाइड',
    badge: 'TON इकोसिस्टम • मुफ़्त',
    rewardLabel: 'अनुमानित इनाम',
    costLabel: 'लागत',
    snapshotLabel: 'अनुमानित समय',
    timeLabel: 'दैनिक समय',
    overviewHeading: 'प्रोजेक्ट का परिचय',
    overview: 'Tiny Verse, TON ब्लॉकचेन पर बना एक 3D इंटरैक्टिव गैलेक्सी सिम्युलेटर Telegram Mini App है। उपयोगकर्ता अपने स्टार सिस्टम विकसित करते हैं और स्टोरेज भरने से पहले हर 4 से 8 घंटे में स्टारडस्ट (Stardust) इकट्ठा करते हैं। इसमें नेटिव TON Connect और Telegram Stars सपोर्ट शामिल है।',
    tokenomicsHeading: '$TINY टोकनॉमिक्स',
    tokenomics: 'कुल $TINY सप्लाई का 55% सक्रिय खिलाड़ियों और कम्युनिटी रिवॉर्ड्स के लिए आरक्षित है। आवंटन बनाए गए सितारों की संख्या, नियमित क्लेम और Galaxy Pioneer बैज पर निर्भर करता है।',
    stepsHeading: 'भाग लेने के आसान चरण',
    steps: [
      'Telegram में आधिकारिक Tiny Verse मिनी ऐप खोलें और अपनी पहली गैलेक्सी बनाएं।',
      'स्टोरेज कैप भरने से पहले हर 4–8 घंटे में स्टारडस्ट हार्वेस्ट करें।',
      'नए सितारे बनाने और स्टोरेज क्षमता बढ़ाने के लिए इकट्ठा किए गए स्टारडस्ट का उपयोग करें।',
      'टास्क सेक्शन में जाकर दैनिक और सोशल मिशन पूरे करें।',
      'प्रोफाइल सेटिंग्स में TON Connect के जरिए Tonkeeper या MyTonWallet कनेक्ट करें।'
    ],
    strategyHeading: 'अधिकतम इनाम की रणनीति',
    strategy: 'शुरुआती दिनों में स्टोरेज क्षमता अपग्रेड करने को प्राथमिकता दें ताकि उत्पादन रुके नहीं। रोज़ाना लॉगिन स्ट्रीक बनाए रखें और अतिरिक्त बोनस के लिए दोस्तों की गैलेक्सी विज़िट करें।',
    sybilHeading: 'सिबिल सुरक्षा और सावधानियाँ',
    sybilSafety: 'स्टोरेज टाइमर सीमा, स्वाभाविक प्रोग्रेस कर्व और Tonkeeper के माध्यम से ऑन-चेन सत्यापन ऑटोमेटेड बॉट अकाउंट्स को बाहर रखते हैं। अपनी सीड फ्रेज़ कभी किसी से साझा न करें।',
    faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: [
      {
        q: 'क्या Tiny Verse एयरड्रॉप में शामिल होना मुफ़्त है?',
        a: 'हाँ, अपनी गैलेक्सी बनाना और स्टारडस्ट इकट्ठा करना पूरी तरह से मुफ़्त ($0) है।'
      },
      {
        q: 'कौन सा वॉलेट कनेक्ट करना सबसे अच्छा है?',
        a: 'आप TON नेटवर्क सपोर्ट करने वाले Tonkeeper, MyTonWallet या Telegram Wallet का उपयोग कर सकते हैं।'
      }
    ],
    ctaText: 'Tiny Verse खोलें',
    englishVersionLabel: 'अंग्रेज़ी संस्करण'
  },
  {
    id: 'tiny-verse',
    slug: 'it',
    lang: 'it',
    flag: '🇮🇹',
    homeLabel: 'Home',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/it/airdrop-telegram/',
    title: 'Guida Airdrop Tiny Verse (2026): Token $TINY su TON | Airdroplyx',
    description: 'Come partecipare gratis all’airdrop di Tiny Verse su Telegram: raccogli polvere di stelle ogni 4-8 ore, espandi la galassia e collega Tonkeeper.',
    h1: 'Tiny Verse ($TINY): Guida Airdrop Telegram e Simulatore Galattico',
    badge: 'Ecosistema TON • Gratis',
    rewardLabel: 'Ricompensa stimata',
    costLabel: 'Costo',
    snapshotLabel: 'Periodo previsto',
    timeLabel: 'Tempo giornaliero',
    overviewHeading: 'Panoramica del progetto',
    overview: 'Tiny Verse è una Mini App Telegram con simulatore galattico 3D interattivo costruita sulla rete TON. I giocatori sviluppano sistemi stellari e raccolgono polvere di stelle ogni 4-8 ore prima che la capacità di archiviazione si riempia, con integrazione nativa TON Connect e Telegram Stars.',
    tokenomicsHeading: 'Tokenomics di $TINY',
    tokenomics: 'Il 55% della fornitura totale di $TINY è riservato agli esploratori attivi e alla community. L’assegnazione tiene conto delle stelle create, della costanza nei raccolti e dei badge Galaxy Pioneer.',
    stepsHeading: 'Come partecipare passo dopo passo',
    steps: [
      'Avvia la Mini App ufficiale di Tiny Verse su Telegram e crea la tua prima galassia.',
      'Raccogli la polvere di stelle ogni 4–8 ore prima che il deposito raggiunga il limite.',
      'Usa la polvere raccolta per generare nuove stelle e potenziare la capienza del deposito.',
      'Completa le missioni giornaliere e social nella scheda attività.',
      'Collega il tuo wallet Tonkeeper o MyTonWallet tramite TON Connect dalle impostazioni.'
    ],
    strategyHeading: 'Strategia per massimizzare i punti',
    strategy: 'Potenzia subito la capacità del deposito per evitare interruzioni nella produzione. Mantieni attiva la serie di accessi giornalieri e visita le galassie degli amici per accelerare i progressi.',
    sybilHeading: 'Sicurezza e protezione Sybil',
    sybilSafety: 'I timer di archiviazione, la progressione organica e la verifica on-chain tramite Tonkeeper filtrano i bot automatici. Non condividere mai la tua frase seed.',
    faqHeading: 'Domande frequenti',
    faqs: [
      {
        q: 'L’airdrop di Tiny Verse è gratuito?',
        a: 'Sì, creare la galassia e raccogliere polvere di stelle è completamente gratuito ($0).'
      },
      {
        q: 'Quale wallet è compatibile?',
        a: 'Puoi collegare Tonkeeper, MyTonWallet o Telegram Wallet sulla rete TON.'
      }
    ],
    ctaText: 'Apri Tiny Verse',
    englishVersionLabel: 'Versione inglese'
  },
  {
    id: 'tiny-verse',
    slug: 'pl',
    lang: 'pl',
    flag: '🇵🇱',
    homeLabel: 'Strona główna',
    hubLabel: 'Airdropy Telegram',
    hubHref: '/pl/airdrop-telegram/',
    title: 'Poradnik Airdrop Tiny Verse (2026): Token $TINY w sieci TON | Airdroplyx',
    description: 'Jak dołączyć za darmo do airdropu Tiny Verse na Telegramie: zbieraj gwiezdny pył co 4–8 godzin, rozbudowuj galaktykę i podłącz Tonkeeper.',
    h1: 'Tiny Verse ($TINY): Poradnik Airdropu Telegram i Symulatora Galaktyki',
    badge: 'Ekosystem TON • Darmowy',
    rewardLabel: 'Szacowana nagroda',
    costLabel: 'Koszt',
    snapshotLabel: 'Przewidywany okres',
    timeLabel: 'Czas dziennie',
    overviewHeading: 'Opis projektu',
    overview: 'Tiny Verse to interaktywny symulator galaktyki 3D w formie Telegram Mini App w sieci TON. Gracze rozwijają własne układy gwiezdne i zbierają gwiezdny pył co 4–8 godzin przed zapełnieniem magazynu. Aplikacja obsługuje natywnie TON Connect oraz Telegram Stars.',
    tokenomicsHeading: 'Tokenomika $TINY',
    tokenomics: '55% całkowitej podaży $TINY przeznaczono dla aktywnych odkrywców oraz społeczności. Przydział zależy od liczby utworzonych gwiazd, regularności zbiorów i odznak Galaxy Pioneer.',
    stepsHeading: 'Instrukcja krok po kroku',
    steps: [
      'Uruchom oficjalną aplikację Tiny Verse na Telegramie i stwórz pierwszą galaktykę.',
      'Zbieraj gwiezdny pył co 4–8 godzin, zanim pojemność magazynu zostanie zapełniona.',
      'Wydawaj gwiezdny pył na tworzenie nowych gwiazd oraz zwiększanie limitu przechowywania.',
      'Wykonuj codzienne zadania i misje społecznościowe w zakładce zadań.',
      'Podłącz portfel Tonkeeper lub MyTonWallet poprzez TON Connect w ustawieniach konta.'
    ],
    strategyHeading: 'Strategia maksymalizacji nagród',
    strategy: 'Na początku warto ulepszyć pojemność magazynu, aby produkcja nie zatrzymywała się w nocy. Utrzymuj codzienną serię logowań i odwiedzaj galaktyki znajomych.',
    sybilHeading: 'Ochrona Anti-Sybil i bezpieczeństwo',
    sybilSafety: 'Limity czasowe magazynu, naturalne tempo rozwoju oraz weryfikacja on-chain przez Tonkeeper eliminują farmy botów. Nigdy nie udostępniaj swojej frazy seed.',
    faqHeading: 'Często zadawane pytania',
    faqs: [
      {
        q: 'Czy udział w airdropie Tiny Verse jest darmowy?',
        a: 'Tak, stworzenie galaktyki i zbieranie gwiezdnego pyłu nie wymaga żadnych opłat ($0).'
      },
      {
        q: 'Jaki portfel podłączyć do gry?',
        a: 'Najlepiej użyć portfela Tonkeeper, MyTonWallet lub Telegram Wallet obsługującego sieć TON.'
      }
    ],
    ctaText: 'Otwórz Tiny Verse',
    englishVersionLabel: 'Wersja angielska'
  },

  // ================= BLUM (16 LANGUAGES) =================
  {
    id: 'blum',
    slug: 'tr',
    lang: 'tr',
    flag: '🇹🇷',
    homeLabel: 'Ana Sayfa',
    hubLabel: 'Telegram Airdropları',
    hubHref: '/tr/telegram-airdroplari/',
    title: 'Blum Airdrop Rehberi (2026): $BP Puan Kasma & TON Cüzdan | Airdroplyx',
    description: '60M+ kullanıcılı Telegram hibrit DEX projesi Blum ile 8 saatlik pasif $BP puan madenciliği, Drop Game taktikleri ve Tonkeeper bağlantısı Türkçe rehberi.',
    h1: 'Blum ($BP) Telegram Airdrop ve Puan Kasma Rehberi',
    badge: 'Telegram Mini-App • Ücretsiz',
    rewardLabel: 'Tahmini Ödül',
    costLabel: 'Maliyet',
    snapshotLabel: 'Beklenen Dönem',
    timeLabel: 'Günlük Süre',
    overviewHeading: 'Proje Özeti',
    overview: 'Blum, Telegram içinde çalışan yeni nesil bir hibrit kripto ticaret uygulaması ve non-custodial (kendi kontrolünüzde) cüzdan deneyimidir. MVB VII hızlandırma programına seçilen proje, 30’dan fazla blokzincir ağında karmaşık köprülerle uğraşmadan tek arayüzden token alım satımı ve MemePad lansmanları sunar. 60 milyonu aşkın kayıtlı kullanıcısıyla Telegram’daki en büyük airdrop ekosistemlerinden biridir.',
    tokenomicsHeading: '$BP Puanları ve Tokenomik',
    tokenomics: 'Biriktirilen Blum Puanları ($BP), TGE döneminde gerçekleştirilecek topluluk airdrop dağıtımındaki payınızı belirleyen ana ölçüttür. Yerel token; işlem ücreti indirimleri, MemePad erken erişim hakları ve yönetişim işlevleri için kullanılacaktır.',
    stepsHeading: 'Adım Adım Katılım Rehberi',
    steps: [
      'Resmi Blum Telegram Mini Uygulamasını başlatın ve hesabınızı oluşturun.',
      'Ana ekrandaki "Start farming" butonuna basarak 8 saatlik pasif $BP üretimini başlatın.',
      'Her 8 saatte bir giriş yaparak biriken puanları toplayın ve sayacı yeniden başlatın.',
      'Günlük giriş serinizi bozmadan ücretsiz Game Pass biletleri kazanın ve Drop Game oynayarak yeşil kristalleri yakalayın.',
      'Görevler (Tasks) sekmesindeki sosyal ve topluluk görevlerini tamamlayın; cüzdan sekmesinden Tonkeeper veya MyTonWallet bağlayın.'
    ],
    strategyHeading: 'Maksimum Ödül Stratejisi',
    strategy: '8 saatlik sayaç dolduğunda üretim durur; bu nedenle günde 3 kez düzenli talep yapmak puan kaybını önler. Drop Game oynarken bombalardan kaçınıp buz kristallerini zamanında kullanmak tek turda yüksek $BP toplamanızı sağlar.',
    sybilHeading: 'Sybil Koruması ve Güvenlik',
    sybilSafety: 'Blum, otomatik tıklama botlarını ve emülatör tabanlı çoklu hesapları tespit eden davranışsal analiz sistemleri kullanır. Gerçek günlük seri korumak ve doğrulanmış bir Tonkeeper cüzdanı bağlamak uygunluk için kritik önem taşır.',
    faqHeading: 'Sıkça Sorulan Sorular',
    faqs: [
      {
        q: 'Blum airdrop katılımı ücretsiz mi?',
        a: 'Evet, 8 saatlik puan madenciliği, günlük giriş ödülleri, Drop Game ve görevler tamamen ücretsizdir ($0).'
      },
      {
        q: 'Hangi cüzdanı bağlamalıyım?',
        a: 'Cüzdan sekmesinden Tonkeeper veya MyTonWallet gibi self-custody bir TON cüzdanı bağlamanız önerilir.'
      }
    ],
    ctaText: 'Blum’u Başlat',
    englishVersionLabel: 'İngilizce Sürüm'
  },
  {
    id: 'blum',
    slug: 'ru',
    lang: 'ru',
    flag: '🇷🇺',
    homeLabel: 'Главная',
    hubLabel: 'Telegram-аирдропы',
    hubHref: '/ru/telegram-airdrops/',
    title: 'Гайд по аирдропу Blum (2026): фарм $BP и подключение Tonkeeper | Airdroplyx',
    description: 'Подробное руководство по Blum в Telegram: как собирать Blum Points ($BP) каждые 8 часов, играть в Drop Game и подключить кошелек Tonkeeper без вложений.',
    h1: 'Blum ($BP): гайд по аирдропу и фарму поинтов в Telegram',
    badge: 'Telegram Mini-App • Бесплатно',
    rewardLabel: 'Ожидаемая награда',
    costLabel: 'Затраты',
    snapshotLabel: 'Ожидаемый период',
    timeLabel: 'Время в день',
    overviewHeading: 'Обзор проекта',
    overview: 'Blum — гибридная криптовалютная торговая платформа в формате Telegram Mini App с поддержкой более 30 блокчейнов и некастодиальным доступом. Проект прошел отбор в программу акселерации MVB VII и объединил свыше 60 миллионов пользователей, предлагая удобный доступ к токенам, мемкоинам на MemePad и фарму поинтов $BP.',
    tokenomicsHeading: 'Токеномика и поинты $BP',
    tokenomics: 'Накопленные Blum Points ($BP) служат основным показателем вклада пользователя для распределения токенов на TGE. Нативный токен будет использоваться для скидок на комиссии, участия в запусках MemePad и стейкинга.',
    stepsHeading: 'Пошаговая инструкция',
    steps: [
      'Откройте официальный мини-апп Blum в Telegram и создайте профиль.',
      'Нажмите "Start farming", чтобы запустить 8-часовой цикл пассивного фарма $BP.',
      'Заходите каждые 8 часов, забирайте накопленные поинты и перезапускайте таймер.',
      'Поддерживайте ежедневный стрик для получения Game Passes и ловите зеленые кристаллы в Drop Game.',
      'Выполните задания во вкладке Tasks и привяжите некастодиальный кошелек Tonkeeper или MyTonWallet.'
    ],
    strategyHeading: 'Стратегия фарма',
    strategy: 'После истечения 8 часов начисление останавливается, поэтому старайтесь собирать поинты трижды в день. В Drop Game избегайте бомб и используйте заморозку времени в пиковые моменты падения кристаллов.',
    sybilHeading: 'Защита от ботов и безопасность',
    sybilSafety: 'Blum анализирует ритм нажатий и отсеивает автокликеры с эмуляторными фермами. Регулярные ежедневные входы и привязка верифицированного кошелька Tonkeeper защищают аккаунт от фильтрации.',
    faqHeading: 'Частые вопросы',
    faqs: [
      {
        q: 'Нужны ли вложения для участия в Blum?',
        a: 'Нет, фарм поинтов, Drop Game и выполнение заданий полностью бесплатны ($0).'
      },
      {
        q: 'Обязательно ли подключать TON-кошелек?',
        a: 'Да, привязка некастодиального кошелька вроде Tonkeeper или MyTonWallet необходима для получения дропа.'
      }
    ],
    ctaText: 'Открыть Blum',
    englishVersionLabel: 'Английская версия'
  },
  {
    id: 'blum',
    slug: 'id',
    lang: 'id',
    flag: '🇮🇩',
    homeLabel: 'Beranda',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/id/airdrop-telegram/',
    title: 'Panduan Airdrop Blum (2026): Cara Farm $BP & Hubungkan Tonkeeper | Airdroplyx',
    description: 'Panduan lengkap airdrop Blum di Telegram: cara klaim Blum Points ($BP) setiap 8 jam, tips Drop Game, dan hubungkan dompet Tonkeeper gratis.',
    h1: 'Blum ($BP): Panduan Airdrop Telegram & Strategi Farming',
    badge: 'Telegram Mini-App • Gratis',
    rewardLabel: 'Estimasi Hadiah',
    costLabel: 'Biaya',
    snapshotLabel: 'Perkiraan Snapshot',
    timeLabel: 'Waktu Harian',
    overviewHeading: 'Ringkasan Proyek',
    overview: 'Blum adalah aplikasi perdagangan kripto hibrida di dalam Telegram yang menggabungkan kemudahan antarmuka dan kontrol dompet non-kustodial di lebih dari 30 jaringan. Terpilih dalam program akselerator MVB VII dan memiliki lebih dari 60 juta pengguna, Blum menghadirkan fitur MemePad serta pengumpulan Blum Points ($BP).',
    tokenomicsHeading: 'Tokenomik & Poin $BP',
    tokenomics: 'Total Blum Points ($BP) yang Anda kumpulkan menjadi metrik utama untuk menentukan alokasi token pada acara TGE. Token utilitas Blum nantinya dipakai untuk diskon biaya transaksi, akses MemePad, dan tata kelola.',
    stepsHeading: 'Langkah-Langkah Mengikuti Airdrop',
    steps: [
      'Buka Mini App resmi Blum di Telegram dan selesaikan pendaftaran akun.',
      'Ketuk "Start farming" untuk memulai siklus pengumpulan poin $BP selama 8 jam.',
      'Buka aplikasi setiap 8 jam untuk mengklaim poin dan memulai ulang penghitung waktu.',
      'Pertahankan login harian untuk meraih Game Pass gratis dan mainkan Drop Game.',
      'Selesaikan misi di tab Tasks lalu hubungkan dompet Tonkeeper atau MyTonWallet di menu Wallet.'
    ],
    strategyHeading: 'Strategi Maksimal',
    strategy: 'Produksi poin berhenti setelah 8 jam, jadi jadwalkan klaim rutin setiap 8 jam sekali. Saat bermain Drop Game, hindari bom dan manfaatkan kristal es untuk menangkap lebih banyak poin hijau.',
    sybilHeading: 'Keamanan & Anti-Sybil',
    sybilSafety: 'Blum menerapkan analisis perilaku untuk memblokir bot klik otomatis dan akun emulator massal. Bermain Drop Game secara alami serta menautkan dompet Tonkeeper menjaga kelayakan akun Anda.',
    faqHeading: 'Pertanyaan Umum',
    faqs: [
      {
        q: 'Apakah airdrop Blum gratis?',
        a: 'Ya, farming poin 8 jam, check-in harian, dan Drop Game 100% gratis tanpa modal ($0).'
      },
      {
        q: 'Dompet apa yang harus dihubungkan ke Blum?',
        a: 'Gunakan dompet TON non-kustodial seperti Tonkeeper atau MyTonWallet pada tab Wallet.'
      }
    ],
    ctaText: 'Buka Blum',
    englishVersionLabel: 'Versi Bahasa Inggris'
  },
  {
    id: 'blum',
    slug: 'vi',
    lang: 'vi',
    flag: '🇻🇳',
    homeLabel: 'Trang chủ',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/vi/airdrop-telegram/',
    title: 'Hướng dẫn Airdrop Blum (2026): Farm $BP & Kết nối Tonkeeper | Airdroplyx',
    description: 'Cách tham gia airdrop Blum trên Telegram miễn phí: nhận Blum Points ($BP) mỗi 8 giờ, chơi Drop Game hiệu quả và liên kết ví Tonkeeper.',
    h1: 'Blum ($BP): Hướng dẫn Airdrop Telegram & Tối ưu Điểm',
    badge: 'Telegram Mini-App • Miễn phí',
    rewardLabel: 'Phần thưởng dự kiến',
    costLabel: 'Chi phí',
    snapshotLabel: 'Thời gian dự kiến',
    timeLabel: 'Thời gian mỗi ngày',
    overviewHeading: 'Tổng quan dự án',
    overview: 'Blum là nền tảng giao dịch crypto lai (hybrid) hoạt động trực tiếp dưới dạng Telegram Mini-App, hỗ trợ hơn 30 blockchain mà không cần cầu nối phức tạp. Được ươm tạo trong chương trình MVB VII với hơn 60 triệu người dùng, Blum cho phép kiếm Blum Points ($BP) và khám phá token mới qua MemePad.',
    tokenomicsHeading: 'Tokenomics & Điểm $BP',
    tokenomics: 'Số lượng Blum Points ($BP) tích lũy là căn cứ chính để quy đổi sang token gốc tại sự kiện TGE. Token của hệ sinh thái Blum dùng để giảm phí giao dịch, tham gia MemePad và quản trị.',
    stepsHeading: 'Các bước tham gia chi tiết',
    steps: [
      'Mở Telegram Mini-App chính thức của Blum và khởi tạo tài khoản.',
      'Nhấn "Start farming" để bắt đầu chu kỳ khai thác điểm $BP kéo dài 8 giờ.',
      'Quay lại mỗi 8 giờ để nhận điểm đã tích lũy và kích hoạt lại bộ đếm.',
      'Điểm danh hàng ngày để nhận vé Game Pass miễn phí và chơi Drop Game thu thập tinh thể xanh.',
      'Hoàn thành nhiệm vụ trong mục Tasks và kết nối ví Tonkeeper hoặc MyTonWallet trong mục Wallet.'
    ],
    strategyHeading: 'Chiến lược tối ưu điểm',
    strategy: 'Bộ đếm sẽ tạm dừng sau mỗi 8 giờ, vì vậy hãy đặt nhắc nhở nhận điểm đều đặn 3 lần mỗi ngày. Trong Drop Game, hãy tránh bom và tận dụng tinh thể đóng băng thời gian để đạt điểm tối đa.',
    sybilHeading: 'Chống Sybil & Bảo mật',
    sybilSafety: 'Hệ thống của Blum phân tích thao tác chạm và loại bỏ các tài khoản dùng auto-click hoặc giả lập hàng loạt. Hãy duy trì chuỗi điểm danh tự nhiên và liên kết ví Tonkeeper chính chủ.',
    faqHeading: 'Câu hỏi thường gặp',
    faqs: [
      {
        q: 'Tham gia farm Blum có mất phí không?',
        a: 'Hoàn toàn miễn phí ($0), bạn không cần nạp tiền để cày điểm $BP hoặc chơi Drop Game.'
      },
      {
        q: 'Cần dùng ví nào để nhận airdrop Blum?',
        a: 'Bạn cần kết nối ví TON tự quản lý như Tonkeeper hoặc MyTonWallet ngay trong ứng dụng.'
      }
    ],
    ctaText: 'Mở Blum',
    englishVersionLabel: 'Bản tiếng Anh'
  },
  {
    id: 'blum',
    slug: 'es',
    lang: 'es',
    flag: '🇪🇸',
    homeLabel: 'Inicio',
    hubLabel: 'Airdrops de Telegram',
    hubHref: '/es/airdrops-telegram/',
    title: 'Guía Airdrop Blum (2026): Farmear Puntos $BP y Conectar Tonkeeper | Airdroplyx',
    description: 'Cómo participar gratis en el airdrop de Blum en Telegram: reclama Blum Points ($BP) cada 8 horas, domina el Drop Game y vincula Tonkeeper.',
    h1: 'Blum ($BP): Guía del Airdrop en Telegram y Estrategia de Puntos',
    badge: 'Telegram Mini-App • Gratis',
    rewardLabel: 'Recompensa estimada',
    costLabel: 'Costo',
    snapshotLabel: 'Periodo estimado',
    timeLabel: 'Tiempo diario',
    overviewHeading: 'Resumen del proyecto',
    overview: 'Blum es una plataforma híbrida de intercambio cripto integrada nativamente en Telegram con soporte para más de 30 cadenas y custodia propia. Seleccionada en el programa MVB VII y con más de 60 millones de usuarios, ofrece MemePad y acumulación de Blum Points ($BP).',
    tokenomicsHeading: 'Tokenomics y Puntos $BP',
    tokenomics: 'Los Blum Points ($BP) acumulados determinan tu participación proporcional en el airdrop del token nativo durante el TGE. El token ofrecerá descuentos en comisiones, acceso a MemePad y gobernanza.',
    stepsHeading: 'Pasos para participar',
    steps: [
      'Inicia la Mini App oficial de Blum en Telegram y crea tu cuenta.',
      'Pulsa "Start farming" para activar el ciclo pasivo de 8 horas.',
      'Entra cada 8 horas para reclamar tus $BP acumulados y reiniciar el contador.',
      'Mantén tu racha diaria para obtener Game Passes y juega al Drop Game atrapando cristales verdes.',
      'Completa las misiones en la pestaña Tasks y vincula tu billetera Tonkeeper o MyTonWallet.'
    ],
    strategyHeading: 'Estrategia para maximizar recompensas',
    strategy: 'El contador se detiene al cumplir 8 horas, así que reclama tres veces al día para no perder rendimiento. En el Drop Game evita las bombas y aprovecha los cristales de hielo.',
    sybilHeading: 'Seguridad y protección Sybil',
    sybilSafety: 'Blum analiza el patrón táctil para detectar scripts automáticos y emuladores. Mantener una racha diaria genuina y conectar Tonkeeper protege tu elegibilidad.',
    faqHeading: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Es gratis farmear en Blum?',
        a: 'Sí, el farmeo de 8 horas, el Drop Game y las tareas son 100% gratuitos ($0).'
      },
      {
        q: '¿Qué billetera debo conectar?',
        a: 'Conecta una billetera TON de autocustodia como Tonkeeper o MyTonWallet en la pestaña Wallet.'
      }
    ],
    ctaText: 'Abrir Blum',
    englishVersionLabel: 'Versión en inglés'
  },
  {
    id: 'blum',
    slug: 'pt',
    lang: 'pt',
    flag: '🇧🇷',
    homeLabel: 'Início',
    hubLabel: 'Airdrops do Telegram',
    hubHref: '/pt/airdrops-telegram/',
    title: 'Guia Airdrop Blum (2026): Farmar $BP e Conectar Tonkeeper | Airdroplyx',
    description: 'Passo a passo completo para o airdrop da Blum no Telegram: colete Blum Points ($BP) a cada 8 horas, jogue o Drop Game e conecte a Tonkeeper grátis.',
    h1: 'Blum ($BP): Guia do Airdrop no Telegram e Estratégia',
    badge: 'Telegram Mini-App • Grátis',
    rewardLabel: 'Recompensa estimada',
    costLabel: 'Custo',
    snapshotLabel: 'Previsão',
    timeLabel: 'Tempo diário',
    overviewHeading: 'Visão geral do projeto',
    overview: 'A Blum é uma plataforma híbrida de negociação cripto nativa no Telegram com suporte a mais de 30 blockchains e autocustódia. Selecionada pelo programa MVB VII e com mais de 60 milhões de usuários, reúne o MemePad e o sistema de Blum Points ($BP).',
    tokenomicsHeading: 'Tokenomics e Pontos $BP',
    tokenomics: 'Seus Blum Points ($BP) acumulados definem a parcela do airdrop comunitário no TGE. O token nativo trará descontos em taxas, acesso ao MemePad e recompensas de participação.',
    stepsHeading: 'Passo a passo para participar',
    steps: [
      'Abra o Mini App oficial da Blum no Telegram e crie sua conta.',
      'Toque em "Start farming" para ativar a geração passiva por 8 horas.',
      'Retorne a cada 8 horas para resgatar os pontos $BP e reiniciar o ciclo.',
      'Mantenha a sequência diária para ganhar Game Passes e capture cristais verdes no Drop Game.',
      'Conclua as missões na aba Tasks e vincule sua carteira Tonkeeper ou MyTonWallet.'
    ],
    strategyHeading: 'Estratégia de ganhos',
    strategy: 'A mineração pausa após 8 horas; portanto, faça 3 coletas diárias para manter o ritmo máximo. No Drop Game, desvie das bombas e use os cristais de gelo nos momentos certos.',
    sybilHeading: 'Proteção Sybil e segurança',
    sybilSafety: 'A Blum utiliza análise comportamental para filtrar scripts de clique e emuladores. Manter check-ins reais e vincular uma carteira Tonkeeper garante sua elegibilidade.',
    faqHeading: 'Perguntas frequentes',
    faqs: [
      {
        q: 'O airdrop da Blum é gratuito?',
        a: 'Sim, todo o farm de 8 horas, Drop Game e tarefas são 100% gratuitos ($0).'
      },
      {
        q: 'Qual carteira devo usar na Blum?',
        a: 'Conecte uma carteira TON de autocustódia como Tonkeeper ou MyTonWallet.'
      }
    ],
    ctaText: 'Abrir Blum',
    englishVersionLabel: 'Versão em inglês'
  },
  {
    id: 'blum',
    slug: 'ko',
    lang: 'ko',
    flag: '🇰🇷',
    homeLabel: '홈',
    hubLabel: '텔레그램 에어드랍',
    hubHref: '/ko/telegram-airdrops/',
    title: 'Blum 에어드랍 가이드 (2026): $BP 포인트 채굴 & Tonkeeper 연결 | Airdroplyx',
    description: '6,000만 유저가 참여하는 텔레그램 하이브리드 거래 앱 Blum 완벽 공략: 8시간 파밍, Drop Game 공략, Tonkeeper 지갑 연동 방법.',
    h1: 'Blum ($BP) 텔레그램 에어드랍 및 포인트 파밍 가이드',
    badge: '텔레그램 미니앱 • 무료',
    rewardLabel: '예상 보상',
    costLabel: '비용',
    snapshotLabel: '예상 시기',
    timeLabel: '일일 소요 시간',
    overviewHeading: '프로젝트 개요',
    overview: 'Blum은 복잡한 크로스체인 브릿지 없이 30개 이상의 블록체인 토큰을 텔레그램 안에서 바로 거래할 수 있는 하이브리드 크립토 앱입니다. MVB VII 인큐베이팅 프로그램 선정 프로젝트로 6,000만 명 이상의 가입자를 확보했으며, MemePad와 Blum Points($BP) 파밍을 제공합니다.',
    tokenomicsHeading: '$BP 포인트 및 토크노믹스',
    tokenomics: '누적된 Blum Points($BP)는 TGE 시점 커뮤니티 에어드랍 배분 비중을 결정하는 핵심 지표입니다. 네이티브 토큰은 거래 수수료 할인, MemePad 참여 및 거버넌스에 활용됩니다.',
    stepsHeading: '단계별 참여 방법',
    steps: [
      '텔레그램에서 공식 Blum 미니앱을 실행하고 계정을 생성하세요.',
      '"Start farming"을 눌러 8시간 자동 $BP 파밍 사이클을 시작하세요.',
      '8시간마다 접속해 포인트를 수령(Claim)하고 다시 파밍을 활성화하세요.',
      '매일 출석 체크를 유지해 무료 Game Pass를 받고 Drop Game에서 초록색 크리스탈을 획득하세요.',
      'Tasks 탭의 소셜 미션을 완료하고 Wallet 탭에서 Tonkeeper 또는 MyTonWallet을 연결하세요.'
    ],
    strategyHeading: '보상 극대화 전략',
    strategy: '8시간이 지나면 파밍이 멈추므로 하루 3번 꾸준히 수령하는 것이 중요합니다. Drop Game에서는 폭탄을 피하고 얼음 아이템을 활용해 고득점을 노리세요.',
    sybilHeading: '시빌 방지 및 보안',
    sybilSafety: 'Blum은 터치 패턴 분석으로 자동 클릭 매크로와 다계정 에뮬레이터를 차단합니다. 자연스러운 일일 출석과 Tonkeeper 지갑 연동이 필수입니다.',
    faqHeading: '자주 묻는 질문',
    faqs: [
      {
        q: 'Blum 파밍은 무료인가요?',
        a: '네, 8시간 파밍과 Drop Game, 미션 참여 모두 별도 비용 없이 무료($0)입니다.'
      },
      {
        q: '어떤 지갑을 연결해야 하나요?',
        a: 'Wallet 메뉴에서 Tonkeeper 또는 MyTonWallet 같은 비수탁 TON 지갑을 연결하면 됩니다.'
      }
    ],
    ctaText: 'Blum 시작하기',
    englishVersionLabel: '영문 버전'
  },
  {
    id: 'blum',
    slug: 'ja',
    lang: 'ja',
    flag: '🇯🇵',
    homeLabel: 'ホーム',
    hubLabel: 'Telegramエアドロップ',
    hubHref: '/ja/telegram-airdrops/',
    title: 'Blum エアドロップ攻略 (2026): $BP稼ぎ方・Tonkeeper連携 | Airdroplyx',
    description: '6,000万人以上が参加するTelegramアプリBlumの完全ガイド：8時間ごとの$BP回収、Drop Gameのコツ、Tonkeeperウォレット接続手順。',
    h1: 'Blum ($BP) Telegramエアドロップ＆ポイント獲得ガイド',
    badge: 'Telegramミニアプリ • 無料',
    rewardLabel: '予想報酬',
    costLabel: '費用',
    snapshotLabel: '予定時期',
    timeLabel: '1日の作業時間',
    overviewHeading: 'プロジェクト概要',
    overview: 'Blumは、30以上のブロックチェーンに対応したTelegramネイティブのハイブリッド暗号資産取引アプリです。MVB VIIアクセラレーターに選出され、6,000万人以上のユーザーを獲得しており、MemePadやBlum Points（$BP）のファーミング機能を提供しています。',
    tokenomicsHeading: '$BPポイントとトケノミクス',
    tokenomics: '蓄積したBlum Points（$BP）は、TGE時のエアドロップ配分量を決める主要指標となります。ネイティブトークンは取引手数料割引やMemePad参加権などに使われる予定です。',
    stepsHeading: '参加ステップ',
    steps: [
      'Telegramで公式Blumミニアプリを起動し、アカウントを作成します。',
      '「Start farming」をタップして8時間の自動$BPファーミングを開始します。',
      '8時間ごとにアプリを開き、貯まったポイントを回収して再度サイクルを回します。',
      '毎日ログインしてGame Passを受け取り、Drop Gameで緑のクリスタルを集めます。',
      'Tasksタブのミッションを完了し、WalletタブからTonkeeperまたはMyTonWalletを接続します。'
    ],
    strategyHeading: '報酬最大化のコツ',
    strategy: '8時間でカウントが停止するため、1日3回の定期回収を心がけましょう。Drop Gameでは爆弾を避けつつ氷アイテムを活用するとスコアが伸びます。',
    sybilHeading: 'シビル対策と安全性',
    sybilSafety: 'Blumは操作パターンの解析により自動ボットやエミュレーター複垢を除外しています。毎日の継続ログインとTonkeeper連携で対象資格を確保しましょう。',
    faqHeading: 'よくある質問',
    faqs: [
      {
        q: 'Blumは無料で参加できますか？',
        a: 'はい、8時間ファーミング、Drop Game、タスクはすべて無料（$0）です。'
      },
      {
        q: 'どのウォレットを接続すればよいですか？',
        a: 'TonkeeperやMyTonWalletなどのセルフカストディ型TONウォレットを接続してください。'
      }
    ],
    ctaText: 'Blumを開く',
    englishVersionLabel: '英語版を見る'
  },
  {
    id: 'blum',
    slug: 'ar',
    lang: 'ar',
    flag: '🇸🇦',
    homeLabel: 'الرئيسية',
    hubLabel: 'إيردروبات تيليجرام',
    hubHref: '/ar/telegram-airdrops/',
    title: 'دليل إيردروب Blum (2026): تعدين نقاط $BP وربط Tonkeeper | Airdroplyx',
    description: 'دليل شامل للمشاركة مجاناً في إيردروب Blum على تيليجرام: اجمع نقاط $BP كل 8 ساعات، والعب Drop Game، واربط محفظة Tonkeeper.',
    h1: 'Blum ($BP): دليل إيردروب تيليجرام وتعدين النقاط',
    badge: 'تطبيق تيليجرام • مجاني',
    rewardLabel: 'المكافأة المتوقعة',
    costLabel: 'التكلفة',
    snapshotLabel: 'الفترة المتوقعة',
    timeLabel: 'الوقت اليومي',
    overviewHeading: 'نظرة عامة على المشروع',
    overview: 'تطبيق Blum هو منصة تداول هجينة مدمجة داخل تيليجرام تدعم أكثر من 30 شبكة بلوكشين بدون تعقيدات الجسور التقليدية. تم اختيار المشروع في برنامج تسريع الأعمال MVB VII ويضم أكثر من 60 مليون مستخدم يجمعون نقاط $BP.',
    tokenomicsHeading: 'اقتصاديات $BP والتوزيع',
    tokenomics: 'تحدد نقاط Blum ($BP) المتراكمة حصتك النسبية من توزيع العملة عند الإطلاق (TGE). وستُستخدم العملة الأصلية لخصومات الرسوم، ومنصة إطلاق MemePad، والحوكمة.',
    stepsHeading: 'خطوات المشاركة',
    steps: [
      'افتح تطبيق Blum الرسمي داخل تيليجرام وأنشئ حسابك.',
      'اضغط على "Start farming" لبدء دورة جمع النقاط كل 8 ساعات.',
      'ادخل كل 8 ساعات للمطالبة بنقاط $BP المتراكمة وإعادة تشغيل العداد.',
      'حافظ على سلسلة الدخول اليومية للحصول على بطاقات Game Pass واللعب في Drop Game.',
      'أكمل المهام في تبويب Tasks واربط محفظة Tonkeeper أو MyTonWallet.'
    ],
    strategyHeading: 'استراتيجية تعظيم المكافآت',
    strategy: 'يتوقف التعدين عند انتهاء 8 ساعات، لذا يُنصح بالمطالبة 3 مرات يومياً. وفي لعبة Drop Game، تجنب القنابل واستخدم بلورات التجميد لجمع أكبر عدد من النقاط الخضراء.',
    sybilHeading: 'الحماية من الحسابات الوهمية والأمان',
    sybilSafety: 'تراقب Blum أنماط اللمس لاستبعاد برامج النقر التلقائي والمحاكيات المتعددة. الحفاظ على دخول يومي طبيعي وربط محفظة Tonkeeper موثقة يضمن أهليتك.',
    faqHeading: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'هل إيردروب Blum مجاني؟',
        a: 'نعم، تعدين النقاط كل 8 ساعات ولعبة Drop Game والمهام مجانية 100% ($0).'
      },
      {
        q: 'ما المحفظة التي يجب ربطها؟',
        a: 'اربط محفظة TON ذاتية الحفظ مثل Tonkeeper أو MyTonWallet من تبويب المحفظة.'
      }
    ],
    ctaText: 'افتح Blum',
    englishVersionLabel: 'النسخة الإنجليزية'
  },
  {
    id: 'blum',
    slug: 'de',
    lang: 'de',
    flag: '🇩🇪',
    homeLabel: 'Startseite',
    hubLabel: 'Telegram-Airdrops',
    hubHref: '/de/telegram-airdrops/',
    title: 'Blum Airdrop Guide (2026): $BP farmen & Tonkeeper verbinden | Airdroplyx',
    description: 'Anleitung für den Blum Airdrop in Telegram: Alle 8 Stunden Blum Points ($BP) einsammeln, Drop Game optimieren und Tonkeeper kostenlos verknüpfen.',
    h1: 'Blum ($BP): Telegram-Airdrop & Farming-Guide',
    badge: 'Telegram Mini-App • Kostenlos',
    rewardLabel: 'Geschätzte Belohnung',
    costLabel: 'Kosten',
    snapshotLabel: 'Erwarteter Zeitraum',
    timeLabel: 'Täglicher Aufwand',
    overviewHeading: 'Projektübersicht',
    overview: 'Blum ist eine hybride Krypto-Handels-App direkt in Telegram mit Unterstützung für über 30 Blockchains und Non-Custodial-Kontrolle. Das Projekt wurde für das MVB-VII-Programm ausgewählt und zählt über 60 Millionen registrierte Nutzer.',
    tokenomicsHeading: '$BP-Punkte & Tokenomics',
    tokenomics: 'Gesammelte Blum Points ($BP) sind die zentrale Grundlage für deinen Anteil am Community-Airdrop beim TGE. Der native Token bietet Gebührenrabatte, MemePad-Zugang und Governance-Rechte.',
    stepsHeading: 'Schritt-für-Schritt-Anleitung',
    steps: [
      'Starte die offizielle Blum Mini App in Telegram und erstelle dein Konto.',
      'Tippe auf "Start farming", um den 8-Stunden-Zyklus für $BP zu starten.',
      'Kehre alle 8 Stunden zurück, fordere deine Punkte an und starte den Timer neu.',
      'Halte deine tägliche Check-in-Serie für kostenlose Game Passes und spiele das Drop Game.',
      'Erledige die Aufgaben im Reiter Tasks und verbinde Tonkeeper oder MyTonWallet.'
    ],
    strategyHeading: 'Strategie für maximale Punkte',
    strategy: 'Nach 8 Stunden pausiert das Farming, daher lohnen sich drei Claims pro Tag. Weiche im Drop Game Bomben aus und nutze Eiskristalle für hohe Punktzahlen.',
    sybilHeading: 'Sybil-Schutz & Sicherheit',
    sybilSafety: 'Blum erkennt automatisierte Klick-Skripte und Emulator-Farmen anhand von Verhaltensanalysen. Regelmäßige Logins und eine verifizierte Tonkeeper-Wallet sichern deine Berechtigung.',
    faqHeading: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Ist das Blum-Farming kostenlos?',
        a: 'Ja, 8-Stunden-Farming, Drop Game und alle Aufgaben sind komplett kostenlos ($0).'
      },
      {
        q: 'Welche Wallet sollte ich verbinden?',
        a: 'Verbinde eine Non-Custodial TON-Wallet wie Tonkeeper oder MyTonWallet.'
      }
    ],
    ctaText: 'Blum öffnen',
    englishVersionLabel: 'Englische Version'
  },
  {
    id: 'blum',
    slug: 'fr',
    lang: 'fr',
    flag: '🇫🇷',
    homeLabel: 'Accueil',
    hubLabel: 'Airdrops Telegram',
    hubHref: '/fr/airdrops-telegram/',
    title: 'Guide Airdrop Blum (2026) : Farmer $BP et lier Tonkeeper | Airdroplyx',
    description: 'Comment participer gratuitement à l’airdrop Blum sur Telegram : réclamez vos points $BP toutes les 8 heures, maîtrisez le Drop Game et connectez Tonkeeper.',
    h1: 'Blum ($BP) : Guide Airdrop Telegram et Stratégie de Farming',
    badge: 'Telegram Mini-App • Gratuit',
    rewardLabel: 'Récompense estimée',
    costLabel: 'Coût',
    snapshotLabel: 'Période estimée',
    timeLabel: 'Temps quotidien',
    overviewHeading: 'Présentation du projet',
    overview: 'Blum est une application de trading crypto hybride intégrée à Telegram prenant en charge plus de 30 blockchains en auto-garde. Sélectionné dans le programme MVB VII avec plus de 60 millions d’utilisateurs, Blum propose MemePad et le farming de Blum Points ($BP).',
    tokenomicsHeading: 'Tokenomics et Points $BP',
    tokenomics: 'Les Blum Points ($BP) accumulés déterminent votre part de l’airdrop lors du TGE. Le jeton natif servira aux réductions de frais, à l’accès au MemePad et à la gouvernance.',
    stepsHeading: 'Étapes pour participer',
    steps: [
      'Ouvrez la Mini App officielle Blum sur Telegram et créez votre compte.',
      'Appuyez sur "Start farming" pour lancer le cycle passif de 8 heures.',
      'Revenez toutes les 8 heures pour réclamer vos $BP et relancer le compteur.',
      'Maintenez votre série quotidienne pour recevoir des Game Passes et jouer au Drop Game.',
      'Accomplissez les quêtes de l’onglet Tasks et liez votre portefeuille Tonkeeper ou MyTonWallet.'
    ],
    strategyHeading: 'Stratégie d’optimisation',
    strategy: 'Le compteur s’arrête au bout de 8 heures : trois réclamations par jour évitent toute perte. Dans le Drop Game, évitez les bombes et déclenchez les cristaux de glace.',
    sybilHeading: 'Protection Anti-Sybil et sécurité',
    sybilSafety: 'Blum analyse les interactions tactiles pour filtrer les bots et émulateurs. Une présence quotidienne régulière et un portefeuille Tonkeeper connecté protègent votre éligibilité.',
    faqHeading: 'Questions fréquentes',
    faqs: [
      {
        q: 'L’airdrop Blum est-il gratuit ?',
        a: 'Oui, le farming de 8 heures, le Drop Game et les quêtes sont 100 % gratuits ($0).'
      },
      {
        q: 'Quel portefeuille connecter à Blum ?',
        a: 'Connectez un portefeuille TON non-custodial comme Tonkeeper ou MyTonWallet.'
      }
    ],
    ctaText: 'Ouvrir Blum',
    englishVersionLabel: 'Version anglaise'
  },
  {
    id: 'blum',
    slug: 'uk',
    lang: 'uk',
    flag: '🇺🇦',
    homeLabel: 'Головна',
    hubLabel: 'Telegram-аірдропи',
    hubHref: '/uk/telegram-airdrops/',
    title: 'Гайд з аірдропу Blum (2026): фарм $BP і підключення Tonkeeper | Airdroplyx',
    description: 'Покрокова інструкція для аірдропу Blum у Telegram: збирайте Blum Points ($BP) кожні 8 годин, грайте у Drop Game та підключіть Tonkeeper.',
    h1: 'Blum ($BP): гайд з аірдропу та фарму поінтів у Telegram',
    badge: 'Telegram Mini-App • Безкоштовно',
    rewardLabel: 'Очікувана винагорода',
    costLabel: 'Витрати',
    snapshotLabel: 'Очікуваний період',
    timeLabel: 'Час на день',
    overviewHeading: 'Огляд проєкту',
    overview: 'Blum — гібридний криптододаток у Telegram із підтримкою понад 30 блокчейнів та некастодіальним доступом. Проєкт пройшов відбір до акселератора MVB VII та об’єднав понад 60 мільйонів користувачів, поєднуючи MemePad і фарм $BP.',
    tokenomicsHeading: 'Токеноміка та поінти $BP',
    tokenomics: 'Накопичені Blum Points ($BP) визначають вашу частку токена на TGE. Нативний актив використовуватиметься для знижок на комісії, запусків MemePad та управління.',
    stepsHeading: 'Покрокова інструкція',
    steps: [
      'Запустіть офіційний міні-додаток Blum у Telegram і створіть акаунт.',
      'Натисніть "Start farming", щоб запустити 8-годинний цикл збору $BP.',
      'Заходьте кожні 8 годин, забирайте поінти та перезапускайте таймер.',
      'Підтримуйте щоденний стрік для отримання Game Pass і ловіть зелені кристали у Drop Game.',
      'Виконайте завдання у вкладці Tasks і підключіть гаманець Tonkeeper або MyTonWallet.'
    ],
    strategyHeading: 'Стратегія максимізації нагород',
    strategy: 'Після 8 годин фарм зупиняється, тому збирайте поінти тричі на добу. У Drop Game уникайте бомб і використовуйте заморозку часу для рекордних результатів.',
    sybilHeading: 'Захист від Sybil та безпека',
    sybilSafety: 'Blum аналізує поведінку користувачів для блокування автоклікерів і ферм емуляторів. Щоденна активність і прив’язаний гаманець Tonkeeper гарантують допуск до дропу.',
    faqHeading: 'Часті запитання',
    faqs: [
      {
        q: 'Чи безкоштовний аірдроп Blum?',
        a: 'Так, 8-годинний фарм, Drop Game та виконання завдань повністю безкоштовні ($0).'
      },
      {
        q: 'Який гаманець варто підключити?',
        a: 'Некастодіальний TON-гаманець, зокрема Tonkeeper або MyTonWallet.'
      }
    ],
    ctaText: 'Відкрити Blum',
    englishVersionLabel: 'Англійська версія'
  },
  {
    id: 'blum',
    slug: 'zh',
    lang: 'zh-CN',
    flag: '🇨🇳',
    homeLabel: '首页',
    hubLabel: 'Telegram 空投',
    hubHref: '/zh/telegram-airdrops/',
    title: 'Blum 空投教程 (2026)：$BP 积分挖矿与 Tonkeeper 绑定指南 | Airdroplyx',
    description: '超 6000 万用户的 Telegram 混合交易应用 Blum 完整教程：每 8 小时领取 $BP 积分、Drop Game 高分技巧与 Tonkeeper 钱包绑定。',
    h1: 'Blum ($BP) Telegram 空投及积分获取指南',
    badge: 'Telegram 小程序 • 零撸免费',
    rewardLabel: '预估奖励',
    costLabel: '参与成本',
    snapshotLabel: '预期周期',
    timeLabel: '每日耗时',
    overviewHeading: '项目简介',
    overview: 'Blum 是运行在 Telegram 内的混合加密交易迷你应用，支持 30 多条区块链的非托管交易体验。该项目入选 MVB VII 孵化计划并拥有超过 6000 万注册用户，提供 MemePad 启动台与 Blum Points ($BP) 挖矿功能。',
    tokenomicsHeading: '$BP 积分与代币经济',
    tokenomics: '累计的 Blum Points ($BP) 将作为 TGE 时空投分配比例的核心依据。原生代币可用于交易手续费折扣、MemePad 参与资格以及生态治理。',
    stepsHeading: '详细参与步骤',
    steps: [
      '在 Telegram 中启动官方 Blum 小程序并注册账户。',
      '点击 "Start farming" 开启每 8 小时一次的 $BP 自动产分周期。',
      '每隔 8 小时登录领取已累积积分并重新开启倒计时。',
      '保持每日连续签到获取免费 Game Pass，参与 Drop Game 接取绿色水晶。',
      '完成 Tasks 栏中的任务，并在 Wallet 页面绑定 Tonkeeper 或 MyTonWallet 钱包。'
    ],
    strategyHeading: '高收益策略',
    strategy: '满 8 小时后产分会暂停，建议每天定时领取三次以防漏单；玩 Drop Game 时注意避开炸弹并合理使用冰冻道具。',
    sybilHeading: '防女巫机制与安全提示',
    sybilSafety: 'Blum 会通过触控行为分析识别自动脚本与模拟器多号。保持真实日常签到并绑定 Tonkeeper 钱包是获得空投资格的关键。',
    faqHeading: '常见问题',
    faqs: [
      {
        q: '参与 Blum 空投需要成本吗？',
        a: '不需要，8 小时挖矿、Drop Game 和社区任务均完全免费（$0）。'
      },
      {
        q: '需要绑定哪种钱包？',
        a: '请在钱包页面绑定 Tonkeeper 或 MyTonWallet 等非托管 TON 钱包。'
      }
    ],
    ctaText: '打开 Blum',
    englishVersionLabel: '英文原版'
  },
  {
    id: 'blum',
    slug: 'hi',
    lang: 'hi',
    flag: '🇮🇳',
    homeLabel: 'होम',
    hubLabel: 'टेलीग्राम एयरड्रॉप',
    hubHref: '/hi/telegram-airdrops/',
    title: 'Blum एयरड्रॉप गाइड (2026): $BP पॉइंट्स फार्मिंग और Tonkeeper सेटअप | Airdroplyx',
    description: '6 करोड़+ यूज़र्स वाले Telegram मिनी-ऐप Blum में मुफ्त भाग लेने की पूरी गाइड: हर 8 घंटे में $BP क्लेम, Drop Game टिप्स और Tonkeeper कनेक्शन।',
    h1: 'Blum ($BP) टेलीग्राम एयरड्रॉप और पॉइंट्स गाइड',
    badge: 'टेलीग्राम मिनी-ऐप • मुफ़्त',
    rewardLabel: 'अनुमानित इनाम',
    costLabel: 'लागत',
    snapshotLabel: 'अनुमानित समय',
    timeLabel: 'दैनिक समय',
    overviewHeading: 'प्रोजेक्ट का परिचय',
    overview: 'Blum, Telegram के अंदर बना एक हाइब्रिड क्रिप्टो ट्रेडिंग मिनी-ऐप है जो 30+ ब्लॉकचेन पर नॉन-कस्टोडियल अनुभव देता है। MVB VII प्रोग्राम के लिए चुने गए इस प्रोजेक्ट के 6 करोड़ से अधिक यूज़र्स हैं और यह MemePad व $BP पॉइंट्स फार्मिंग प्रदान करता है।',
    tokenomicsHeading: '$BP पॉइंट्स और टोकनॉमिक्स',
    tokenomics: 'आपके द्वारा इकट्ठा किए गए Blum Points ($BP) TGE के समय एयरड्रॉप हिस्सेदारी तय करते हैं। नेटिव टोकन का उपयोग ट्रेडिंग फीस छूट, MemePad एक्सेस और गवर्नेंस में होगा।',
    stepsHeading: 'भाग लेने के आसान चरण',
    steps: [
      'Telegram में आधिकारिक Blum मिनी-ऐप खोलें और अकाउंट बनाएं।',
      '8 घंटे का पैसिव $BP फार्मिंग चक्र शुरू करने के लिए "Start farming" पर टैप करें।',
      'हर 8 घंटे में आकर पॉइंट्स क्लेम करें और टाइमर दोबारा शुरू करें।',
      'मुफ्त Game Pass पाने के लिए रोज़ाना चेक-इन करें और Drop Game में हरे क्रिस्टल पकड़ें।',
      'Tasks टैब के मिशन पूरे करें और Wallet टैब में Tonkeeper या MyTonWallet कनेक्ट करें।'
    ],
    strategyHeading: 'अधिकतम इनाम की रणनीति',
    strategy: '8 घंटे पूरे होते ही फार्मिंग रुक जाती है, इसलिए दिन में 3 बार नियमित क्लेम करें। Drop Game में बम से बचें और फ्रीज़ क्रिस्टल का सही समय पर उपयोग करें।',
    sybilHeading: 'सिबिल सुरक्षा और सावधानियाँ',
    sybilSafety: 'Blum ऑटो-क्लिक बॉट्स और एम्युलेटर फार्म को रोकने के लिए बिहेवियरल एनालिटिक्स का उपयोग करता है। नियमित लॉगिन और Tonkeeper वॉलेट लिंक करना ज़रूरी है।',
    faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: [
      {
        q: 'क्या Blum एयरड्रॉप मुफ़्त है?',
        a: 'हाँ, 8 घंटे की फार्मिंग, Drop Game और टास्क पूरी तरह मुफ़्त ($0) हैं।'
      },
      {
        q: 'कौन सा वॉलेट जोड़ना चाहिए?',
        a: 'Wallet सेक्शन में Tonkeeper या MyTonWallet जैसा नॉन-कस्टोडियल TON वॉलेट जोड़ें।'
      }
    ],
    ctaText: 'Blum खोलें',
    englishVersionLabel: 'अंग्रेज़ी संस्करण'
  },
  {
    id: 'blum',
    slug: 'it',
    lang: 'it',
    flag: '🇮🇹',
    homeLabel: 'Home',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/it/airdrop-telegram/',
    title: 'Guida Airdrop Blum (2026): Farmare $BP e Collegare Tonkeeper | Airdroplyx',
    description: 'Come partecipare gratis all’airdrop di Blum su Telegram: raccogli Blum Points ($BP) ogni 8 ore, gioca al Drop Game e collega Tonkeeper.',
    h1: 'Blum ($BP): Guida Airdrop Telegram e Strategia Punti',
    badge: 'Telegram Mini-App • Gratis',
    rewardLabel: 'Ricompensa stimata',
    costLabel: 'Costo',
    snapshotLabel: 'Periodo previsto',
    timeLabel: 'Tempo giornaliero',
    overviewHeading: 'Panoramica del progetto',
    overview: 'Blum è una piattaforma di trading crypto ibrida integrata in Telegram con supporto a oltre 30 blockchain in autocustodia. Selezionata nel programma MVB VII con più di 60 milioni di utenti, integra MemePad e la raccolta di Blum Points ($BP).',
    tokenomicsHeading: 'Tokenomics e Punti $BP',
    tokenomics: 'I Blum Points ($BP) accumulati determinano la quota di airdrop al TGE. Il token nativo servirà per sconti sulle commissioni, lancio su MemePad e governance.',
    stepsHeading: 'Come partecipare passo dopo passo',
    steps: [
      'Avvia la Mini App ufficiale di Blum su Telegram e crea il profilo.',
      'Tocca "Start farming" per avviare il ciclo passivo di 8 ore.',
      'Torna ogni 8 ore per riscattare i punti $BP e riavviare il timer.',
      'Mantieni la serie giornaliera per ottenere Game Pass gratuiti e gioca al Drop Game.',
      'Completa le missioni nella scheda Tasks e collega Tonkeeper o MyTonWallet.'
    ],
    strategyHeading: 'Strategia per massimizzare i punti',
    strategy: 'Il contatore si ferma allo scadere delle 8 ore: riscatta tre volte al giorno per evitare pause. Nel Drop Game evita le bombe e sfrutta i cristalli di ghiaccio.',
    sybilHeading: 'Sicurezza e protezione Sybil',
    sybilSafety: 'Blum utilizza analisi comportamentali per filtrare bot ed emulatori multi-account. Accessi giornalieri autentici e un wallet Tonkeeper collegato proteggono l’idoneità.',
    faqHeading: 'Domande frequenti',
    faqs: [
      {
        q: 'L’airdrop di Blum è gratuito?',
        a: 'Sì, il farming ogni 8 ore, il Drop Game e le missioni sono al 100% gratuiti ($0).'
      },
      {
        q: 'Quale wallet devo collegare?',
        a: 'Collega un wallet TON non-custodial come Tonkeeper o MyTonWallet.'
      }
    ],
    ctaText: 'Apri Blum',
    englishVersionLabel: 'Versione inglese'
  },
  {
    id: 'blum',
    slug: 'pl',
    lang: 'pl',
    flag: '🇵🇱',
    homeLabel: 'Strona główna',
    hubLabel: 'Airdropy Telegram',
    hubHref: '/pl/airdrop-telegram/',
    title: 'Poradnik Airdrop Blum (2026): Zbieranie $BP i Tonkeeper | Airdroplyx',
    description: 'Jak za darmo zdobyć airdrop Blum na Telegramie: odbieraj Blum Points ($BP) co 8 godzin, graj w Drop Game i podłącz portfel Tonkeeper.',
    h1: 'Blum ($BP): Poradnik Airdropu Telegram i Zbierania Punktów',
    badge: 'Telegram Mini-App • Darmowy',
    rewardLabel: 'Szacowana nagroda',
    costLabel: 'Koszt',
    snapshotLabel: 'Przewidywany okres',
    timeLabel: 'Czas dziennie',
    overviewHeading: 'Opis projektu',
    overview: 'Blum to hybrydowa platforma tradingowa działająca bezpośrednio jako Telegram Mini-App z obsługą ponad 30 sieci w modelu non-custodial. Projekt wybrany do programu MVB VII zgromadził ponad 60 milionów użytkowników, oferując MemePad i zbieranie punktów $BP.',
    tokenomicsHeading: 'Tokenomika i Punkty $BP',
    tokenomics: 'Zgromadzone Blum Points ($BP) wyznaczają udział w dystrybucji tokenów podczas TGE. Natywny token zapewni zniżki opłat, dostęp do MemePad oraz głosowanie.',
    stepsHeading: 'Instrukcja krok po kroku',
    steps: [
      'Uruchom oficjalną aplikację Blum na Telegramie i załóż konto.',
      'Kliknij "Start farming", aby rozpocząć 8-godzinny cykl naliczania $BP.',
      'Odbieraj punkty co 8 godzin i uruchamiaj licznik ponownie.',
      'Utrzymuj codzienną serię logowań po darmowe Game Passy i łap zielone kryształy w Drop Game.',
      'Wykonaj zadania w zakładce Tasks i podłącz portfel Tonkeeper lub MyTonWallet.'
    ],
    strategyHeading: 'Strategia maksymalizacji nagród',
    strategy: 'Po 8 godzinach produkcja zatrzymuje się, więc odbieraj punkty trzy razy dziennie. W grze Drop Game omijaj bomby i używaj kryształów zamrażających czas.',
    sybilHeading: 'Ochrona Anti-Sybil i bezpieczeństwo',
    sybilSafety: 'Blum wykrywa skrypty klikające oraz farmy emulatorów poprzez analizę zachowania. Regularne logowanie i podpięty portfel Tonkeeper gwarantują kwalifikację.',
    faqHeading: 'Często zadawane pytania',
    faqs: [
      {
        q: 'Czy udział w Blum jest darmowy?',
        a: 'Tak, 8-godzinny farming, Drop Game oraz zadania są całkowicie darmowe ($0).'
      },
      {
        q: 'Jaki portfel podłączyć do Blum?',
        a: 'Podłącz niepowierniczy portfel TON, taki jak Tonkeeper lub MyTonWallet.'
      }
    ],
    ctaText: 'Otwórz Blum',
    englishVersionLabel: 'Wersja angielska'
  },

  // ================= MAJOR OF TELEGRAM (16 LANGUAGES) =================
  {
    id: 'major',
    slug: 'tr',
    lang: 'tr',
    flag: '🇹🇷',
    homeLabel: 'Ana Sayfa',
    hubLabel: 'Telegram Airdropları',
    hubHref: '/tr/telegram-airdroplari/',
    title: 'Major Airdrop Rehberi (2026): $MAJOR Rating Kasma & TON | Airdroplyx',
    description: '40M+ oyunculu Telegram derecelendirme oyunu Major ile günlük Rating puanı kasma, Hold Coin, Durov Puzzle ve Tonkeeper bağlantısı Türkçe rehberi.',
    h1: 'Major of Telegram ($MAJOR) Airdrop ve Rating Rehberi',
    badge: 'TON & Stars • Ücretsiz',
    rewardLabel: 'Tahmini Ödül',
    costLabel: 'Maliyet',
    snapshotLabel: 'Beklenen Dönem',
    timeLabel: 'Günlük Süre',
    overviewHeading: 'Proje Özeti',
    overview: 'Major of Telegram, TON blokzinciri ve Telegram Stars üzerine inşa edilmiş ilk merkeziyetsiz sosyal derecelendirme ve sıralama oyunudur. 40 milyonu aşkın aktif oyuncuya sahip olan proje, günlük mini oyunlar ve görevlerle kazanılan Rating puanlarını şeffaf bir liderlik tablosuna dönüştürür ve TGE döneminde $MAJOR token dağıtımıyla ödüllendirir.',
    tokenomicsHeading: '$MAJOR Tokenomik ve Dağıtım',
    tokenomics: '$MAJOR token arzının büyük bölümü doğrudan oyunculara, toplam Rating puanlarına ve küresel sıralamadaki seviyelerine (Bronze’dan Royal’e) göre dağıtılır. Token, platform içi turnuvalar ve yönetişim için kullanılır.',
    stepsHeading: 'Adım Adım Katılım Rehberi',
    steps: [
      'Resmi Major Telegram Mini Uygulamasını başlatın ve hesap yaşınıza göre ilk Rating bonusunuzu alın.',
      'Her gün Şans Çarkını (Daily Lucky Roulette) çevirerek ekstra Rating ve oyun hakkı kazanın.',
      'Hold Coin oyununda parmağınızı 60 saniye basılı tutarak maksimum günlük puanı toplayın.',
      'Günlük Durov Puzzle bulmacasında 4 doğru avatarı sırayla seçerek anında 5.000 bonus Rating kazanın.',
      'Earn sekmesindeki görevleri tamamlayın ve uygunluğunuzu onaylamak için Tonkeeper veya MyTonWallet bağlayın.'
    ],
    strategyHeading: 'Maksimum Ödül Stratejisi',
    strategy: 'Hiç harcama yapmadan yüksek sıralamaya çıkmak için her gün Durov Puzzle, Hold Coin ve Rulet üçlüsünü eksiksiz tamamlayın. Günlük seriyi bozmamak sıralama çarpanınızı hızla yükseltir.',
    sybilHeading: 'Sybil Koruması ve Güvenlik',
    sybilSafety: 'Major, sahte numaralarla açılmış hesapları ve otomatik tıklama botlarını liderlik tablosundan eler. Düzenli günlük mini oyun aktivitesi ve doğrulanmış Tonkeeper cüzdanı bağlamak güvenli katılım sağlar.',
    faqHeading: 'Sıkça Sorulan Sorular',
    faqs: [
      {
        q: 'Major airdrop katılımı ücretsiz mi?',
        a: 'Evet, günlük Rulet, Hold Coin, Durov Puzzle ve görevler üzerinden ücretsiz ($0) Rating kazanabilirsiniz.'
      },
      {
        q: 'Hangi cüzdanı bağlamalıyım?',
        a: 'Tonkeeper, MyTonWallet veya Telegram Wallet (self-custody modu) cüzdanlarından birini bağlayabilirsiniz.'
      }
    ],
    ctaText: 'Major’u Başlat',
    englishVersionLabel: 'İngilizce Sürüm'
  },
  {
    id: 'major',
    slug: 'ru',
    lang: 'ru',
    flag: '🇷🇺',
    homeLabel: 'Главная',
    hubLabel: 'Telegram-аирдропы',
    hubHref: '/ru/telegram-airdrops/',
    title: 'Гайд по аирдропу Major (2026): фарм $MAJOR и рейтинг TON | Airdroplyx',
    description: 'Подробное руководство по игре Major в Telegram: как набирать Rating в Hold Coin, Durov Puzzle и рулетке, и подключить кошелек Tonkeeper без вложений.',
    h1: 'Major of Telegram ($MAJOR): гайд по аирдропу и рейтингу',
    badge: 'TON и Stars • Бесплатно',
    rewardLabel: 'Ожидаемая награда',
    costLabel: 'Затраты',
    snapshotLabel: 'Ожидаемый период',
    timeLabel: 'Время в день',
    overviewHeading: 'Обзор проекта',
    overview: 'Major of Telegram — первая рейтинговая социальная игра в Telegram с нативной интеграцией блокчейна TON и Telegram Stars. Проект объединил более 40 миллионов игроков, превратив ежедневные мини-игры и задания в таблицу лидеров для распределения токена $MAJOR.',
    tokenomicsHeading: 'Токеномика $MAJOR',
    tokenomics: 'Основная часть эмиссии $MAJOR распределяется между игроками пропорционально накопленному Rating и позиции в таблице лидеров на дату снимка. Токен используется в экосистеме турниров и управления.',
    stepsHeading: 'Пошаговая инструкция',
    steps: [
      'Откройте официальный мини-апп Major в Telegram и получите стартовый Rating за возраст аккаунта.',
      'Ежедневно крутите рулетку (Daily Lucky Roulette) для получения бонусных очков.',
      'Играйте в Hold Coin: удерживайте монету на экране 60 секунд для максимальной награды.',
      'Собирайте ежедневный Durov Puzzle из 4 правильных аватаров и забирайте +5 000 Rating.',
      'Выполните задания во вкладке Earn и подключите кошелек Tonkeeper или MyTonWallet.'
    ],
    strategyHeading: 'Стратегия фарма',
    strategy: 'Чтобы расти в рейтинге без вложений, ежедневно проходите связку из рулетки, Hold Coin и Durov Puzzle. Постоянство серий дает преимущество перед неактивными аккаунтами.',
    sybilHeading: 'Защита от ботов и безопасность',
    sybilSafety: 'Антифрод-алгоритмы Major отсекают бот-фермы и нечестные скрипты. Ежедневное ручное прохождение головоломок и привязанный Tonkeeper подтверждают реальную активность.',
    faqHeading: 'Частые вопросы',
    faqs: [
      {
        q: 'Можно ли получить $MAJOR без доната?',
        a: 'Да, все ежедневные игры — рулетка, Hold Coin, Durov Puzzle и задания — доступны бесплатно ($0).'
      },
      {
        q: 'Какой кошелек подключить к Major?',
        a: 'Используйте некастодиальный кошелек Tonkeeper, MyTonWallet или Telegram Wallet.'
      }
    ],
    ctaText: 'Открыть Major',
    englishVersionLabel: 'Английская версия'
  },
  {
    id: 'major',
    slug: 'id',
    lang: 'id',
    flag: '🇮🇩',
    homeLabel: 'Beranda',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/id/airdrop-telegram/',
    title: 'Panduan Airdrop Major (2026): Kejar Rating $MAJOR di TON | Airdroplyx',
    description: 'Cara mendapatkan airdrop $MAJOR di Telegram secara gratis: mainkan Hold Coin, selesaikan Durov Puzzle harian, dan hubungkan dompet Tonkeeper.',
    h1: 'Major of Telegram ($MAJOR): Panduan Airdrop & Peringkat',
    badge: 'TON & Stars • Gratis',
    rewardLabel: 'Estimasi Hadiah',
    costLabel: 'Biaya',
    snapshotLabel: 'Perkiraan Snapshot',
    timeLabel: 'Waktu Harian',
    overviewHeading: 'Ringkasan Proyek',
    overview: 'Major of Telegram adalah game peringkat sosial terdesentralisasi pertama di Telegram yang terintegrasi dengan blockchain TON dan Telegram Stars. Dengan lebih dari 40 juta pemain aktif, pemain mengumpulkan poin Rating melalui mini-game harian untuk alokasi token $MAJOR.',
    tokenomicsHeading: 'Tokenomik $MAJOR',
    tokenomics: 'Mayoritas distribusi token $MAJOR dialokasikan langsung kepada pemain berdasarkan total Rating dan peringkat papan skor global mereka saat snapshot. Token ini mendukung tata kelola dan turnamen ekosistem.',
    stepsHeading: 'Langkah-Langkah Mengikuti Airdrop',
    steps: [
      'Buka Mini App resmi Major di Telegram dan klaim skor Rating awal berdasarkan usia akun Anda.',
      'Putar Daily Lucky Roulette setiap hari untuk memenangkan poin Rating tambahan.',
      'Mainkan Hold Coin dengan menahan koin di layar selama 60 detik penuh.',
      'Selesaikan teka-teki harian Durov Puzzle dengan memilih 4 avatar yang tepat untuk bonus 5.000 Rating.',
      'Selesaikan tugas di tab Earn dan hubungkan dompet Tonkeeper atau MyTonWallet Anda.'
    ],
    strategyHeading: 'Strategi Maksimal',
    strategy: 'Selesaikan kombinasi harian Roulette, Hold Coin, dan Durov Puzzle tanpa terlewat untuk naik peringkat secara gratis. Konsistensi harian sangat memengaruhi posisi papan peringkat.',
    sybilHeading: 'Keamanan & Anti-Sybil',
    sybilSafety: 'Major menyaring akun bot otomatis dan klik palsu melalui verifikasi aktivitas. Bermain teka-teki secara manual serta menghubungkan Tonkeeper memastikan kelayakan akun Anda.',
    faqHeading: 'Pertanyaan Umum',
    faqs: [
      {
        q: 'Apakah airdrop Major gratis diikuti?',
        a: 'Ya, Anda dapat mengumpulkan Rating secara gratis ($0) melalui game harian dan misi.'
      },
      {
        q: 'Dompet apa yang cocok untuk Major?',
        a: 'Hubungkan Tonkeeper, MyTonWallet, atau Telegram Wallet (mode kustodi mandiri).'
      }
    ],
    ctaText: 'Buka Major',
    englishVersionLabel: 'Versi Bahasa Inggris'
  },
  {
    id: 'major',
    slug: 'vi',
    lang: 'vi',
    flag: '🇻🇳',
    homeLabel: 'Trang chủ',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/vi/airdrop-telegram/',
    title: 'Hướng dẫn Airdrop Major (2026): Cày Rating $MAJOR trên TON | Airdroplyx',
    description: 'Hướng dẫn chi tiết chơi Major trên Telegram miễn phí: quay Roulette, chơi Hold Coin, giải Durov Puzzle hàng ngày và kết nối ví Tonkeeper.',
    h1: 'Major of Telegram ($MAJOR): Hướng dẫn Airdrop & Bảng xếp hạng',
    badge: 'TON & Stars • Miễn phí',
    rewardLabel: 'Phần thưởng dự kiến',
    costLabel: 'Chi phí',
    snapshotLabel: 'Thời gian dự kiến',
    timeLabel: 'Thời gian mỗi ngày',
    overviewHeading: 'Tổng quan dự án',
    overview: 'Major of Telegram là trò chơi xếp hạng xã hội đầu tiên tích hợp trực tiếp với blockchain TON và Telegram Stars. Với hơn 40 triệu người chơi, dự án ghi nhận điểm Rating từ các mini-game và nhiệm vụ hàng ngày để phân bổ token $MAJOR.',
    tokenomicsHeading: 'Tokenomics $MAJOR',
    tokenomics: 'Phần lớn nguồn cung $MAJOR được phân bổ trực tiếp cho người chơi dựa trên tổng điểm Rating và thứ hạng bảng xếp hạng toàn cầu tại thời điểm snapshot.',
    stepsHeading: 'Các bước tham gia chi tiết',
    steps: [
      'Khởi chạy Mini App chính thức của Major trên Telegram để nhận điểm Rating khởi đầu theo tuổi tài khoản.',
      'Quay vòng quay may mắn hàng ngày (Daily Lucky Roulette) để nhận thêm Rating.',
      'Chơi trò Hold Coin bằng cách giữ ngón tay trên đồng xu 60 giây liên tục.',
      'Giải câu đố Durov Puzzle mỗi ngày bằng cách chọn đúng 4 avatar để nhận ngay 5.000 Rating.',
      'Hoàn thành nhiệm vụ trong mục Earn và kết nối ví Tonkeeper hoặc MyTonWallet.'
    ],
    strategyHeading: 'Chiến lược tối ưu điểm',
    strategy: 'Duy trì đều đặn bộ ba Roulette, Hold Coin và Durov Puzzle mỗi ngày để leo hạng miễn phí. Chuỗi đăng nhập liên tục giúp bạn vượt xa các tài khoản không hoạt động.',
    sybilHeading: 'Chống Sybil & Bảo mật',
    sybilSafety: 'Major loại bỏ các tài khoản bot và auto-click khỏi bảng xếp hạng. Tham gia mini-game thủ công mỗi ngày và liên kết ví Tonkeeper giúp xác thực tài khoản thật.',
    faqHeading: 'Câu hỏi thường gặp',
    faqs: [
      {
        q: 'Có thể kiếm $MAJOR miễn phí không?',
        a: 'Có, bạn hoàn toàn có thể cày Rating miễn phí ($0) qua Roulette, Hold Coin, Durov Puzzle và nhiệm vụ.'
      },
      {
        q: 'Nên kết nối ví nào cho Major?',
        a: 'Bạn có thể kết nối Tonkeeper, MyTonWallet hoặc Telegram Wallet hỗ trợ TON.'
      }
    ],
    ctaText: 'Mở Major',
    englishVersionLabel: 'Bản tiếng Anh'
  },
  {
    id: 'major',
    slug: 'es',
    lang: 'es',
    flag: '🇪🇸',
    homeLabel: 'Inicio',
    hubLabel: 'Airdrops de Telegram',
    hubHref: '/es/airdrops-telegram/',
    title: 'Guía Airdrop Major (2026): Subir Rating $MAJOR en TON | Airdroplyx',
    description: 'Cómo participar gratis en el airdrop de Major en Telegram: ruleta diaria, Hold Coin, Durov Puzzle y conexión con Tonkeeper.',
    h1: 'Major of Telegram ($MAJOR): Guía del Airdrop y Clasificación',
    badge: 'TON & Stars • Gratis',
    rewardLabel: 'Recompensa estimada',
    costLabel: 'Costo',
    snapshotLabel: 'Periodo estimado',
    timeLabel: 'Tiempo diario',
    overviewHeading: 'Resumen del proyecto',
    overview: 'Major of Telegram es el primer juego social de clasificación integrado de forma nativa con la blockchain TON y Telegram Stars. Con más de 40 millones de jugadores, convierte los puntos Rating de minijuegos y misiones diarias en recompensas del token $MAJOR.',
    tokenomicsHeading: 'Tokenomics de $MAJOR',
    tokenomics: 'Un porcentaje dominante del suministro de $MAJOR se asigna a los jugadores según su Rating acumulado y su posición en el ranking global en la fecha del snapshot.',
    stepsHeading: 'Pasos para participar',
    steps: [
      'Abre la Mini App oficial de Major en Telegram y recibe tu Rating inicial según la antigüedad de tu cuenta.',
      'Gira la ruleta diaria (Daily Lucky Roulette) para sumar puntos extra.',
      'Juega a Hold Coin manteniendo pulsada la moneda durante 60 segundos sin soltar.',
      'Resuelve el Durov Puzzle diario eligiendo los 4 avatares correctos para ganar 5.000 puntos.',
      'Completa las tareas de la pestaña Earn y vincula tu billetera Tonkeeper o MyTonWallet.'
    ],
    strategyHeading: 'Estrategia para maximizar recompensas',
    strategy: 'Completa todos los días el trío de Ruleta, Hold Coin y Durov Puzzle para escalar posiciones sin gastar dinero. La constancia diaria marca la diferencia en el ranking.',
    sybilHeading: 'Seguridad y protección Sybil',
    sybilSafety: 'Major filtra cuentas automatizadas y patrones de clic artificiales. Resolver los minijuegos manualmente y vincular Tonkeeper protege tu elegibilidad.',
    faqHeading: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Se puede ganar $MAJOR gratis?',
        a: 'Sí, la ruleta diaria, Hold Coin, Durov Puzzle y las misiones sociales son gratuitos ($0).'
      },
      {
        q: '¿Qué billetera debo conectar?',
        a: 'Conecta Tonkeeper, MyTonWallet o Telegram Wallet compatible con TON.'
      }
    ],
    ctaText: 'Abrir Major',
    englishVersionLabel: 'Versión en inglés'
  },
  {
    id: 'major',
    slug: 'pt',
    lang: 'pt',
    flag: '🇧🇷',
    homeLabel: 'Início',
    hubLabel: 'Airdrops do Telegram',
    hubHref: '/pt/airdrops-telegram/',
    title: 'Guia Airdrop Major (2026): Pontos $MAJOR e Ranking TON | Airdroplyx',
    description: 'Veja como ganhar no airdrop Major no Telegram grátis: roleta diária, Hold Coin, Durov Puzzle e conexão segura com a carteira Tonkeeper.',
    h1: 'Major of Telegram ($MAJOR): Guia do Airdrop e Rating',
    badge: 'TON & Stars • Grátis',
    rewardLabel: 'Recompensa estimada',
    costLabel: 'Custo',
    snapshotLabel: 'Previsão',
    timeLabel: 'Tempo diário',
    overviewHeading: 'Visão geral do projeto',
    overview: 'Major of Telegram é o primeiro jogo de classificação social integrado nativamente à blockchain TON e ao Telegram Stars. Com mais de 40 milhões de jogadores ativos, transforma pontos de Rating obtidos em minijogos diários em distribuição do token $MAJOR.',
    tokenomicsHeading: 'Tokenomics do $MAJOR',
    tokenomics: 'A maior parte dos tokens $MAJOR é distribuída aos jogadores conforme o Rating total acumulado e a posição no ranking global no momento do snapshot.',
    stepsHeading: 'Passo a passo para participar',
    steps: [
      'Inicie o Mini App oficial do Major no Telegram e receba seu Rating inicial.',
      'Gire a roleta diária (Daily Lucky Roulette) para ganhar pontos extras de Rating.',
      'Jogue o Hold Coin segurando a moeda na tela por 60 segundos completos.',
      'Resolva o Durov Puzzle diário selecionando os 4 avatares corretos para ganhar 5.000 pontos.',
      'Conclua as tarefas na aba Earn e conecte sua carteira Tonkeeper ou MyTonWallet.'
    ],
    strategyHeading: 'Estratégia de ganhos',
    strategy: 'Faça diariamente a rotina de Roleta, Hold Coin e Durov Puzzle para subir no ranking sem gastar nada. Manter a sequência diária acelera sua pontuação.',
    sybilHeading: 'Proteção Sybil e segurança',
    sybilSafety: 'O Major bloqueia contas automatizadas e bots de clique. Jogar manualmente os desafios diários e vincular uma carteira Tonkeeper garante sua elegibilidade.',
    faqHeading: 'Perguntas frequentes',
    faqs: [
      {
        q: 'É possível ganhar $MAJOR sem gastar?',
        a: 'Sim, roleta diária, Hold Coin, Durov Puzzle e tarefas sociais são gratuitos ($0).'
      },
      {
        q: 'Qual carteira devo usar?',
        a: 'Conecte Tonkeeper, MyTonWallet ou Telegram Wallet com suporte à rede TON.'
      }
    ],
    ctaText: 'Abrir Major',
    englishVersionLabel: 'Versão em inglês'
  },
  {
    id: 'major',
    slug: 'ko',
    lang: 'ko',
    flag: '🇰🇷',
    homeLabel: '홈',
    hubLabel: '텔레그램 에어드랍',
    hubHref: '/ko/telegram-airdrops/',
    title: 'Major 에어드랍 가이드 (2026): $MAJOR 레이팅 & TON 지갑 | Airdroplyx',
    description: '4,000만 유저가 참여하는 텔레그램 랭킹 게임 Major 공략: 룰렛, Hold Coin, Durov Puzzle로 무료 Rating 쌓기 및 Tonkeeper 연결 방법.',
    h1: 'Major of Telegram ($MAJOR) 에어드랍 및 랭킹 가이드',
    badge: 'TON & Stars • 무료',
    rewardLabel: '예상 보상',
    costLabel: '비용',
    snapshotLabel: '예상 시기',
    timeLabel: '일일 소요 시간',
    overviewHeading: '프로젝트 개요',
    overview: 'Major of Telegram은 TON 블록체인과 Telegram Stars를 기반으로 구축된 소셜 랭킹 미니앱입니다. 4,000만 명 이상의 플레이어가 참여하고 있으며, 일일 미니게임과 미션으로 얻은 Rating 점수에 따라 $MAJOR 토큰이 배분됩니다.',
    tokenomicsHeading: '$MAJOR 토크노믹스',
    tokenomics: '$MAJOR 공급량의 핵심 비중은 스냅샷 기준 누적 Rating과 글로벌 리더보드 순위에 따라 플레이어에게 직접 배정됩니다.',
    stepsHeading: '단계별 참여 방법',
    steps: [
      '텔레그램에서 공식 Major 미니앱을 실행하고 계정 연식에 따른 초기 Rating을 확인하세요.',
      '매일 Daily Lucky Roulette를 돌려 추가 Rating 점수를 획득하세요.',
      'Hold Coin 게임에서 60초 동안 화면의 코인을 누르고 있어 최대 점수를 받으세요.',
      '매일 Durov Puzzle의 4개 아바타 조합을 맞춰 5,000 Rating 보너스를 챙기세요.',
      'Earn 탭의 미션을 완료하고 Tonkeeper 또는 MyTonWallet을 연결하세요.'
    ],
    strategyHeading: '보상 극대화 전략',
    strategy: '과금 없이 순위를 올리려면 매일 룰렛, Hold Coin, Durov Puzzle 3종을 빠짐없이 완료하는 것이 핵심입니다. 꾸준한 일일 참여가 등급 상승으로 이어집니다.',
    sybilHeading: '시빌 방지 및 보안',
    sybilSafety: 'Major는 비정상적인 매크로 클릭과 다계정 봇을 리더보드에서 제외합니다. 매일 직접 퍼즐을 풀고 Tonkeeper 지갑을 연동해 자격을 유지하세요.',
    faqHeading: '자주 묻는 질문',
    faqs: [
      {
        q: '무료로도 $MAJOR를 받을 수 있나요?',
        a: '네, 룰렛, Hold Coin, Durov Puzzle 및 소셜 퀘스트만으로 무료($0) 참여가 가능합니다.'
      },
      {
        q: '어떤 지갑을 연결해야 하나요?',
        a: 'Tonkeeper, MyTonWallet 또는 TON 지원 Telegram Wallet을 연결하세요.'
      }
    ],
    ctaText: 'Major 시작하기',
    englishVersionLabel: '영문 버전'
  },
  {
    id: 'major',
    slug: 'ja',
    lang: 'ja',
    flag: '🇯🇵',
    homeLabel: 'ホーム',
    hubLabel: 'Telegramエアドロップ',
    hubHref: '/ja/telegram-airdrops/',
    title: 'Major エアドロップ攻略 (2026): $MAJOR Rating稼ぎ方・TON連携 | Airdroplyx',
    description: '4,000万人以上が遊ぶTelegramランキングゲームMajorの攻略ガイド：ルーレット、Hold Coin、Durov PuzzleとTonkeeper接続手順。',
    h1: 'Major of Telegram ($MAJOR) エアドロップ＆ランキング攻略',
    badge: 'TON & Stars • 無料',
    rewardLabel: '予想報酬',
    costLabel: '費用',
    snapshotLabel: '予定時期',
    timeLabel: '1日の作業時間',
    overviewHeading: 'プロジェクト概要',
    overview: 'Major of Telegramは、TONブロックチェーンとTelegram Starsにネイティブ統合されたソーシャルランキングゲームです。4,000万人以上のプレイヤーが日々のミニゲームでRatingポイントを競い、成績に応じて$MAJORトークンが配布されます。',
    tokenomicsHeading: '$MAJOR トケノミクス',
    tokenomics: '$MAJOR供給量の大部分は、スナップショット時点の累計Ratingおよびグローバルランキング順位に基づいてプレイヤーへ割り当てられます。',
    stepsHeading: '参加ステップ',
    steps: [
      'Telegramで公式Majorミニアプリを起動し、アカウント歴に応じた初期Ratingを受け取ります。',
      '毎日のDaily Lucky Rouletteを回してボーナスRatingを獲得します。',
      'Hold Coinゲームでコインを60秒間長押しし、最大ポイントを取得します。',
      '毎日のDurov Puzzleで4つの正しいアバターを選び、5,000 Ratingを獲得します。',
      'Earnタブのタスクを完了し、TonkeeperまたはMyTonWalletを接続します。'
    ],
    strategyHeading: '報酬最大化のコツ',
    strategy: '無課金で順位を上げるには、毎日のルーレット・Hold Coin・Durov Puzzleを欠かさずこなすことが最も効果的です。',
    sybilHeading: 'シビル対策と安全性',
    sybilSafety: 'Majorは自動クリックツールやボットアカウントをランキングから除外します。毎日の手動プレイとTonkeeperウォレット接続で資格を確保しましょう。',
    faqHeading: 'よくある質問',
    faqs: [
      {
        q: '無料で$MAJORを狙えますか？',
        a: 'はい、ルーレットやHold Coin、Durov Puzzle、各種タスクはすべて無料（$0）で参加できます。'
      },
      {
        q: 'どのウォレットを接続すればよいですか？',
        a: 'Tonkeeper、MyTonWallet、またはTelegram Walletを接続できます。'
      }
    ],
    ctaText: 'Majorを開く',
    englishVersionLabel: '英語版を見る'
  },
  {
    id: 'major',
    slug: 'ar',
    lang: 'ar',
    flag: '🇸🇦',
    homeLabel: 'الرئيسية',
    hubLabel: 'إيردروبات تيليجرام',
    hubHref: '/ar/telegram-airdrops/',
    title: 'دليل إيردروب Major (2026): نقاط $MAJOR وربط Tonkeeper | Airdroplyx',
    description: 'دليل شامل للمشاركة مجاناً في لعبة Major على تيليجرام: العجلة اليومية، Hold Coin، لغز Durov Puzzle وربط محفظة Tonkeeper.',
    h1: 'Major of Telegram ($MAJOR): دليل الإيردروب والتصنيف',
    badge: 'TON و Stars • مجاني',
    rewardLabel: 'المكافأة المتوقعة',
    costLabel: 'التكلفة',
    snapshotLabel: 'الفترة المتوقعة',
    timeLabel: 'الوقت اليومي',
    overviewHeading: 'نظرة عامة على المشروع',
    overview: 'تطبيق Major of Telegram هو أول لعبة تصنيف اجتماعي لا مركزية مدمجة مع شبكة TON ونجوم تيليجرام. يضم أكثر من 40 مليون لاعب يجمعون نقاط Rating عبر الألعاب المصغرة اليومية للحصول على توزيع عملة $MAJOR.',
    tokenomicsHeading: 'اقتصاديات $MAJOR',
    tokenomics: 'تُخصص النسبة الأكبر من معروض $MAJOR مباشرة للاعبين بناءً على إجمالي نقاط Rating وترتيبهم في لوحة الصدارة العالمية عند اللقطة.',
    stepsHeading: 'خطوات المشاركة',
    steps: [
      'افتح تطبيق Major الرسمي داخل تيليجرام واحصل على نقاط Rating الأولية حسب عمر حسابك.',
      'أدر عجلة الحظ اليومية (Daily Lucky Roulette) لكسب نقاط إضافية.',
      'العب Hold Coin بالضغط المستمر على العملة لمدة 60 ثانية لتحقيق أعلى نقاط.',
      'حل لغز Durov Puzzle اليومي باختيار 4 صور رمزية صحيحة لربح 5,000 نقطة فوراً.',
      'أكمل المهام في تبويب Earn واربط محفظة Tonkeeper أو MyTonWallet.'
    ],
    strategyHeading: 'استراتيجية تعظيم المكافآت',
    strategy: 'للصعود في الترتيب مجاناً، التزم يومياً بإكمال العجلة اليومية وHold Coin ولغز Durov Puzzle دون انقطاع.',
    sybilHeading: 'الحماية من الحسابات الوهمية والأمان',
    sybilSafety: 'يستبعد نظام Major حسابات البوتات والنقر التلقائي من لوحة الصدارة. اللعب اليدوي اليومي وربط محفظة Tonkeeper يضمنان أهليتك.',
    faqHeading: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'هل يمكن ربح $MAJOR مجاناً؟',
        a: 'نعم، العجلة اليومية وHold Coin ولغز Durov Puzzle والمهام مجانية تماماً ($0).'
      },
      {
        q: 'ما المحافظ المدعومة؟',
        a: 'يمكنك ربط Tonkeeper أو MyTonWallet أو Telegram Wallet الداعمة لشبكة TON.'
      }
    ],
    ctaText: 'افتح Major',
    englishVersionLabel: 'النسخة الإنجليزية'
  },
  {
    id: 'major',
    slug: 'de',
    lang: 'de',
    flag: '🇩🇪',
    homeLabel: 'Startseite',
    hubLabel: 'Telegram-Airdrops',
    hubHref: '/de/telegram-airdrops/',
    title: 'Major Airdrop Guide (2026): $MAJOR Rating & TON Wallet | Airdroplyx',
    description: 'Anleitung für Major auf Telegram: Täglich Rating über Glücksrad, Hold Coin und Durov Puzzle kostenlos sammeln und Tonkeeper verknüpfen.',
    h1: 'Major of Telegram ($MAJOR): Airdrop- & Ranking-Guide',
    badge: 'TON & Stars • Kostenlos',
    rewardLabel: 'Geschätzte Belohnung',
    costLabel: 'Kosten',
    snapshotLabel: 'Erwarteter Zeitraum',
    timeLabel: 'Täglicher Aufwand',
    overviewHeading: 'Projektübersicht',
    overview: 'Major of Telegram ist das erste soziale Ranking-Spiel direkt in Telegram mit nativer Integration der TON-Blockchain und Telegram Stars. Über 40 Millionen aktive Spieler sammeln Rating-Punkte für die Zuteilung des $MAJOR-Tokens.',
    tokenomicsHeading: '$MAJOR Tokenomics',
    tokenomics: 'Ein überwiegender Teil des $MAJOR-Angebots geht direkt an Spieler auf Basis ihres gesammelten Ratings und ihres globalen Leaderboard-Rangs.',
    stepsHeading: 'Schritt-für-Schritt-Anleitung',
    steps: [
      'Starte die offizielle Major Mini App in Telegram und sichere dir dein Start-Rating.',
      'Drehe täglich das Daily Lucky Roulette für zusätzliche Rating-Punkte.',
      'Spiele Hold Coin, indem du die Münze 60 Sekunden lang gedrückt hältst.',
      'Löse das tägliche Durov Puzzle mit den 4 richtigen Avataren für 5.000 Bonus-Punkte.',
      'Erledige die Aufgaben im Reiter Earn und verbinde Tonkeeper oder MyTonWallet.'
    ],
    strategyHeading: 'Strategie für maximale Punkte',
    strategy: 'Kombiniere jeden Tag Roulette, Hold Coin und Durov Puzzle, um ohne Ausgaben stetig im Ranking aufzusteigen.',
    sybilHeading: 'Sybil-Schutz & Sicherheit',
    sybilSafety: 'Major filtert automatisierte Klick-Bots aus der Rangliste. Manuelles tägliches Spielen und eine verknüpfte Tonkeeper-Wallet sichern deine Teilnahme.',
    faqHeading: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Kann man $MAJOR kostenlos verdienen?',
        a: 'Ja, Roulette, Hold Coin, Durov Puzzle und soziale Aufgaben sind komplett kostenlos ($0).'
      },
      {
        q: 'Welche Wallet sollte ich verbinden?',
        a: 'Tonkeeper, MyTonWallet oder Telegram Wallet im Self-Custody-Modus.'
      }
    ],
    ctaText: 'Major öffnen',
    englishVersionLabel: 'Englische Version'
  },
  {
    id: 'major',
    slug: 'fr',
    lang: 'fr',
    flag: '🇫🇷',
    homeLabel: 'Accueil',
    hubLabel: 'Airdrops Telegram',
    hubHref: '/fr/airdrops-telegram/',
    title: 'Guide Airdrop Major (2026) : Rating $MAJOR sur TON | Airdroplyx',
    description: 'Comment gagner des jetons $MAJOR gratuitement sur Telegram : Roulette quotidienne, Hold Coin, Durov Puzzle et connexion Tonkeeper.',
    h1: 'Major of Telegram ($MAJOR) : Guide Airdrop et Classement',
    badge: 'TON & Stars • Gratuit',
    rewardLabel: 'Récompense estimée',
    costLabel: 'Coût',
    snapshotLabel: 'Période estimée',
    timeLabel: 'Temps quotidien',
    overviewHeading: 'Présentation du projet',
    overview: 'Major of Telegram est le premier jeu social de classement natif sur Telegram intégrant la blockchain TON et Telegram Stars. Plus de 40 millions de joueurs accumulent du Rating via des mini-jeux quotidiens pour obtenir l’airdrop $MAJOR.',
    tokenomicsHeading: 'Tokenomics de $MAJOR',
    tokenomics: 'La majeure partie de l’offre de $MAJOR est attribuée aux joueurs selon leur Rating total et leur rang mondial lors du snapshot.',
    stepsHeading: 'Étapes pour participer',
    steps: [
      'Ouvrez la Mini App officielle Major sur Telegram pour recevoir votre Rating initial.',
      'Tournez la Daily Lucky Roulette chaque jour pour gagner des points bonus.',
      'Jouez à Hold Coin en maintenant la pièce appuyée pendant 60 secondes.',
      'Résolvez le Durov Puzzle quotidien avec les 4 bons avatars pour obtenir 5 000 points.',
      'Complétez les missions de l’onglet Earn et connectez Tonkeeper ou MyTonWallet.'
    ],
    strategyHeading: 'Stratégie d’optimisation',
    strategy: 'Effectuez chaque jour le trio Roulette, Hold Coin et Durov Puzzle pour progresser gratuitement dans le classement mondial.',
    sybilHeading: 'Protection Anti-Sybil et sécurité',
    sybilSafety: 'Major exclut les bots et clics automatisés du classement. Une activité manuelle quotidienne et un portefeuille Tonkeeper lié garantissent votre éligibilité.',
    faqHeading: 'Questions fréquentes',
    faqs: [
      {
        q: 'Peut-on obtenir $MAJOR gratuitement ?',
        a: 'Oui, la roulette, Hold Coin, Durov Puzzle et les quêtes sont entièrement gratuits ($0).'
      },
      {
        q: 'Quel portefeuille connecter ?',
        a: 'Utilisez Tonkeeper, MyTonWallet ou Telegram Wallet sur le réseau TON.'
      }
    ],
    ctaText: 'Ouvrir Major',
    englishVersionLabel: 'Version anglaise'
  },
  {
    id: 'major',
    slug: 'uk',
    lang: 'uk',
    flag: '🇺🇦',
    homeLabel: 'Головна',
    hubLabel: 'Telegram-аірдропи',
    hubHref: '/uk/telegram-airdrops/',
    title: 'Гайд з аірдропу Major (2026): фарм $MAJOR та рейтинг TON | Airdroplyx',
    description: 'Покрокова інструкція для Major у Telegram: щоденна рулетка, Hold Coin, Durov Puzzle та підключення Tonkeeper без вкладень.',
    h1: 'Major of Telegram ($MAJOR): гайд з аірдропу та рейтингу',
    badge: 'TON і Stars • Безкоштовно',
    rewardLabel: 'Очікувана винагорода',
    costLabel: 'Витрати',
    snapshotLabel: 'Очікуваний період',
    timeLabel: 'Час на день',
    overviewHeading: 'Огляд проєкту',
    overview: 'Major of Telegram — перша соціальна рейтингова гра у Telegram із нативною підтримкою блокчейна TON і Telegram Stars. Понад 40 мільйонів гравців збирають Rating у щоденних міні-іграх для розподілу токена $MAJOR.',
    tokenomicsHeading: 'Токеноміка $MAJOR',
    tokenomics: 'Основна частка емісії $MAJOR розподіляється серед гравців залежно від накопиченого Rating і позиції у глобальному рейтингу на момент знімка.',
    stepsHeading: 'Покрокова інструкція',
    steps: [
      'Запустіть офіційний міні-додаток Major у Telegram і отримайте стартовий Rating.',
      'Щодня крутіть Daily Lucky Roulette для додаткових очок.',
      'Грайте в Hold Coin, утримуючи монету на екрані 60 секунд.',
      'Розв’язуйте щоденний Durov Puzzle із 4 правильних аватарів за +5 000 Rating.',
      'Виконайте завдання у вкладці Earn та підключіть гаманець Tonkeeper або MyTonWallet.'
    ],
    strategyHeading: 'Стратегія максимізації нагород',
    strategy: 'Щодня проходьте рулетку, Hold Coin і Durov Puzzle, щоб підійматися в рейтингу без жодних витрат.',
    sybilHeading: 'Захист від Sybil та безпека',
    sybilSafety: 'Major відфільтровує бот-ферми та автоклікери. Ручне щоденне проходження ігор і прив’язаний Tonkeeper підтверджують вашу реальну активність.',
    faqHeading: 'Часті запитання',
    faqs: [
      {
        q: 'Чи можна отримати $MAJOR безкоштовно?',
        a: 'Так, рулетка, Hold Coin, Durov Puzzle і завдання повністю безкоштовні ($0).'
      },
      {
        q: 'Який гаманець підключити?',
        a: 'Tonkeeper, MyTonWallet або вбудований Telegram Wallet із підтримкою TON.'
      }
    ],
    ctaText: 'Відкрити Major',
    englishVersionLabel: 'Англійська версія'
  },
  {
    id: 'major',
    slug: 'zh',
    lang: 'zh-CN',
    flag: '🇨🇳',
    homeLabel: '首页',
    hubLabel: 'Telegram 空投',
    hubHref: '/zh/telegram-airdrops/',
    title: 'Major 空投教程 (2026)：$MAJOR 积分排行与 TON 绑定 | Airdroplyx',
    description: '超 4000 万玩家的 Telegram 社交排行游戏 Major 完整攻略：每日转盘、Hold Coin、Durov 拼图与 Tonkeeper 钱包绑定。',
    h1: 'Major of Telegram ($MAJOR) 空投及排行指南',
    badge: 'TON 与 Stars • 零撸免费',
    rewardLabel: '预估奖励',
    costLabel: '参与成本',
    snapshotLabel: '预期周期',
    timeLabel: '每日耗时',
    overviewHeading: '项目简介',
    overview: 'Major of Telegram 是原生集成 TON 区块链与 Telegram Stars 的去中心化社交排行游戏，拥有超过 4000 万活跃玩家。用户通过每日小游戏与任务积累 Rating 积分，角逐 $MAJOR 代币空投。',
    tokenomicsHeading: '$MAJOR 代币经济',
    tokenomics: '$MAJOR 代币的大部分供应量将根据快照时玩家的累计 Rating 与全球排行榜名次直接分配给社区玩家。',
    stepsHeading: '详细参与步骤',
    steps: [
      '在 Telegram 中打开官方 Major 小程序，领取基于账号注册年限的初始 Rating。',
      '每日转动幸运大转盘（Daily Lucky Roulette）赢取额外积分。',
      '游玩 Hold Coin 小游戏，长按屏幕金币 60 秒获取最高每日积分。',
      '完成每日 Durov Puzzle，选出 4 个正确头像即可立得 5,000 积分奖励。',
      '完成 Earn 栏任务，并绑定 Tonkeeper 或 MyTonWallet 钱包。'
    ],
    strategyHeading: '高收益策略',
    strategy: '每天坚持完成转盘、Hold Coin 和 Durov 拼图三项免费玩法，无需氪金即可稳步提升排名。',
    sybilHeading: '防女巫机制与安全提示',
    sybilSafety: 'Major 会剔除自动脚本与批量刷号账号。每日手动完成小游戏并绑定 Tonkeeper 钱包可确保空投资格。',
    faqHeading: '常见问题',
    faqs: [
      {
        q: '零氪可以参与 Major 空投吗？',
        a: '可以，每日转盘、Hold Coin、Durov 拼图及任务全部免费（$0）。'
      },
      {
        q: '需要绑定哪款钱包？',
        a: '支持 Tonkeeper、MyTonWallet 或 Telegram Wallet（自托管模式）。'
      }
    ],
    ctaText: '打开 Major',
    englishVersionLabel: '英文原版'
  },
  {
    id: 'major',
    slug: 'hi',
    lang: 'hi',
    flag: '🇮🇳',
    homeLabel: 'होम',
    hubLabel: 'टेलीग्राम एयरड्रॉप',
    hubHref: '/hi/telegram-airdrops/',
    title: 'Major एयरड्रॉप गाइड (2026): $MAJOR रेटिंग और TON वॉलेट | Airdroplyx',
    description: '4 करोड़+ खिलाड़ियों वाले Telegram गेम Major में मुफ्त $MAJOR कमाने की गाइड: डेली रूलेट, Hold Coin, Durov Puzzle और Tonkeeper कनेक्शन।',
    h1: 'Major of Telegram ($MAJOR) एयरड्रॉप और रैंकिंग गाइड',
    badge: 'TON और Stars • मुफ़्त',
    rewardLabel: 'अनुमानित इनाम',
    costLabel: 'लागत',
    snapshotLabel: 'अनुमानित समय',
    timeLabel: 'दैनिक समय',
    overviewHeading: 'प्रोजेक्ट का परिचय',
    overview: 'Major of Telegram, TON ब्लॉकचेन और Telegram Stars पर बना पहला सोशल रेटिंग गेम है। 4 करोड़ से अधिक खिलाड़ी रोज़ाना मिनी-गेम और टास्क पूरे करके $MAJOR टोकन आवंटन के लिए Rating कमाते हैं।',
    tokenomicsHeading: '$MAJOR टोकनॉमिक्स',
    tokenomics: '$MAJOR सप्लाई का मुख्य हिस्सा स्नैपशॉट के समय खिलाड़ियों के कुल Rating और ग्लोबल लीडरबोर्ड रैंक के आधार पर वितरित किया जाता है।',
    stepsHeading: 'भाग लेने के आसान चरण',
    steps: [
      'Telegram में आधिकारिक Major मिनी-ऐप खोलें और अकाउंट की उम्र के अनुसार शुरुआती Rating पाएं।',
      'अतिरिक्त Rating पॉइंट्स के लिए रोज़ाना Daily Lucky Roulette घुमाएं।',
      'Hold Coin गेम में 60 सेकंड तक स्क्रीन पर कॉइन दबाए रखकर अधिकतम पॉइंट्स पाएं।',
      'रोज़ाना Durov Puzzle में 4 सही अवतार चुनकर तुरंत 5,000 Rating बोनस जीतें।',
      'Earn टैब के टास्क पूरे करें और Tonkeeper या MyTonWallet कनेक्ट करें।'
    ],
    strategyHeading: 'अधिकतम इनाम की रणनीति',
    strategy: 'बिना पैसे खर्च किए रैंक बढ़ाने के लिए रोज़ाना रूलेट, Hold Coin और Durov Puzzle तीनों ज़रूर खेलें।',
    sybilHeading: 'सिबिल सुरक्षा और सावधानियाँ',
    sybilSafety: 'Major बॉट अकाउंट्स और ऑटो-क्लिकर्स को रैंकिंग से बाहर करता है। रोज़ाना मैन्युअल गेम खेलना और Tonkeeper जोड़ना सुरक्षित भागीदारी सुनिश्चित करता है।',
    faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: [
      {
        q: 'क्या Major में मुफ्त भागीदारी संभव है?',
        a: 'हाँ, डेली रूलेट, Hold Coin, Durov Puzzle और सोशल टास्क पूरी तरह मुफ़्त ($0) हैं।'
      },
      {
        q: 'कौन सा वॉलेट कनेक्ट करें?',
        a: 'आप Tonkeeper, MyTonWallet या Telegram Wallet जोड़ सकते हैं।'
      }
    ],
    ctaText: 'Major खोलें',
    englishVersionLabel: 'अंग्रेज़ी संस्करण'
  },
  {
    id: 'major',
    slug: 'it',
    lang: 'it',
    flag: '🇮🇹',
    homeLabel: 'Home',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/it/airdrop-telegram/',
    title: 'Guida Airdrop Major (2026): Rating $MAJOR su TON | Airdroplyx',
    description: 'Come ottenere $MAJOR gratis su Telegram: ruota giornaliera, Hold Coin, Durov Puzzle e collegamento sicuro al wallet Tonkeeper.',
    h1: 'Major of Telegram ($MAJOR): Guida Airdrop e Classifica',
    badge: 'TON & Stars • Gratis',
    rewardLabel: 'Ricompensa stimata',
    costLabel: 'Costo',
    snapshotLabel: 'Periodo previsto',
    timeLabel: 'Tempo giornaliero',
    overviewHeading: 'Panoramica del progetto',
    overview: 'Major of Telegram è il primo gioco sociale di classifica integrato nativamente con TON e Telegram Stars. Oltre 40 milioni di giocatori accumulano punti Rating tramite mini-giochi giornalieri per l’assegnazione del token $MAJOR.',
    tokenomicsHeading: 'Tokenomics di $MAJOR',
    tokenomics: 'La quota principale di $MAJOR viene distribuita ai giocatori in base al Rating totale e alla posizione nella classifica globale allo snapshot.',
    stepsHeading: 'Come partecipare passo dopo passo',
    steps: [
      'Apri la Mini App ufficiale Major su Telegram e ottieni il Rating iniziale.',
      'Gira ogni giorno la Daily Lucky Roulette per vincere punti extra.',
      'Gioca a Hold Coin tenendo premuta la moneta sullo schermo per 60 secondi.',
      'Risolvi il Durov Puzzle quotidiano selezionando i 4 avatar corretti per 5.000 punti.',
      'Completa le missioni nella scheda Earn e collega Tonkeeper o MyTonWallet.'
    ],
    strategyHeading: 'Strategia per massimizzare i punti',
    strategy: 'Completa ogni giorno Roulette, Hold Coin e Durov Puzzle per scalare la classifica gratuitamente senza interruzioni.',
    sybilHeading: 'Sicurezza e protezione Sybil',
    sybilSafety: 'Major esclude bot automatici e clicker dalla classifica. Giocare manualmente ogni giorno e collegare Tonkeeper garantisce l’idoneità.',
    faqHeading: 'Domande frequenti',
    faqs: [
      {
        q: 'Si può partecipare gratis a Major?',
        a: 'Sì, ruota giornaliera, Hold Coin, Durov Puzzle e missioni sono gratuiti ($0).'
      },
      {
        q: 'Quale wallet devo usare?',
        a: 'Collega Tonkeeper, MyTonWallet o Telegram Wallet sulla rete TON.'
      }
    ],
    ctaText: 'Apri Major',
    englishVersionLabel: 'Versione inglese'
  },
  {
    id: 'major',
    slug: 'pl',
    lang: 'pl',
    flag: '🇵🇱',
    homeLabel: 'Strona główna',
    hubLabel: 'Airdropy Telegram',
    hubHref: '/pl/airdrop-telegram/',
    title: 'Poradnik Airdrop Major (2026): Ranking $MAJOR w TON | Airdroplyx',
    description: 'Jak zdobyć airdrop $MAJOR na Telegramie za darmo: codzienna ruletka, Hold Coin, Durov Puzzle oraz podłączenie portfela Tonkeeper.',
    h1: 'Major of Telegram ($MAJOR): Poradnik Airdropu i Rankingu',
    badge: 'TON i Stars • Darmowy',
    rewardLabel: 'Szacowana nagroda',
    costLabel: 'Koszt',
    snapshotLabel: 'Przewidywany okres',
    timeLabel: 'Czas dziennie',
    overviewHeading: 'Opis projektu',
    overview: 'Major of Telegram to pierwsza społecznościowa gra rankingowa na Telegramie z natywną integracją blockchaina TON oraz Telegram Stars. Ponad 40 milionów graczy zbiera punkty Rating w codziennych minigrach, aby zdobyć tokeny $MAJOR.',
    tokenomicsHeading: 'Tokenomika $MAJOR',
    tokenomics: 'Główna część podaży $MAJOR trafia do graczy na podstawie zgromadzonego Ratingu i pozycji w globalnym rankingu w dniu migawki.',
    stepsHeading: 'Instrukcja krok po kroku',
    steps: [
      'Uruchom oficjalną aplikację Major na Telegramie i odbierz początkowy Rating.',
      'Codziennie kręć kołem Daily Lucky Roulette po dodatkowe punkty.',
      'Zagraj w Hold Coin, przytrzymując monetę na ekranie przez 60 sekund.',
      'Rozwiąż codzienny Durov Puzzle, wybierając 4 właściwe awatary za 5 000 punktów.',
      'Wykonaj zadania w zakładce Earn i podłącz portfel Tonkeeper lub MyTonWallet.'
    ],
    strategyHeading: 'Strategia maksymalizacji nagród',
    strategy: 'Wykonuj codziennie zestaw Ruletka, Hold Coin i Durov Puzzle, aby piąć się w tabeli bez żadnych opłat.',
    sybilHeading: 'Ochrona Anti-Sybil i bezpieczeństwo',
    sybilSafety: 'Major usuwa z tabeli automatyczne boty i farmy klikaczy. Ręczna codzienna gra oraz podłączony portfel Tonkeeper chronią Twój udział.',
    faqHeading: 'Często zadawane pytania',
    faqs: [
      {
        q: 'Czy udział w Major jest darmowy?',
        a: 'Tak, codzienna ruletka, Hold Coin, Durov Puzzle oraz zadania są w pełni darmowe ($0).'
      },
      {
        q: 'Jaki portfel podłączyć do Major?',
        a: 'Użyj portfela Tonkeeper, MyTonWallet lub Telegram Wallet w sieci TON.'
      }
    ],
    ctaText: 'Otwórz Major',
    englishVersionLabel: 'Wersja angielska'
  },

  // ================= PAWS (16 LANGUAGES) =================
  {
    id: 'paws',
    slug: 'tr',
    lang: 'tr',
    flag: '🇹🇷',
    homeLabel: 'Ana Sayfa',
    hubLabel: 'Telegram Airdropları',
    hubHref: '/tr/telegram-airdroplari/',
    title: 'PAWS Airdrop Rehberi (2026): $PAWS Puan & Tonkeeper Bağlantısı | Airdroplyx',
    description: '25M+ kullanıcılı PAWS Telegram Mini-App ile ekran tıklamadan Telegram hesap yaşı ve geçmiş $NOT/$DOGS iziniz üzerinden $PAWS kazanma rehberi.',
    h1: 'PAWS ($PAWS) Telegram Airdrop ve Ayak İzi Ödül Rehberi',
    badge: 'TON Ekosistemi • Ücretsiz',
    rewardLabel: 'Tahmini Ödül',
    costLabel: 'Maliyet',
    snapshotLabel: 'Beklenen Dönem',
    timeLabel: 'Günlük Süre',
    overviewHeading: 'Proje Özeti',
    overview: 'PAWS, ilk haftasında 25 milyonu aşkın kullanıcıya ulaşan ve TON ekosistemi geliştiricileri tarafından tasarlanan viral bir Telegram Mini Uygulamasıdır. Sürekli ekrana tıklamak yerine "Proof-of-Footprint" modeliyle çalışır; Telegram hesap yaşınızı ve geçmiş Notcoin ($NOT) ile $DOGS katılımınızı analiz ederek başlangıç $PAWS ödülü tanımlar.',
    tokenomicsHeading: '$PAWS Tokenomik ve Dağıtım',
    tokenomics: '$PAWS, TON ve Telegram oyun ekosistemi için topluluk odaklı bir kültür tokenı olarak tasarlanmıştır. Başlangıç arzının büyük kısmı gerçek, uzun süreli Telegram kullanıcılarına ayrılmıştır.',
    stepsHeading: 'Adım Adım Katılım Rehberi',
    steps: [
      'Resmi PAWS Telegram Mini Uygulamasını başlatın ve profil taramasının tamamlanmasını bekleyin.',
      'Telegram hesap yaşınıza ve geçmiş $NOT, $DOGS veya Hamster Kombat katılımınıza göre verilen başlangıç $PAWS puanınızı kontrol edin.',
      'Tasks sekmesindeki topluluk, kanal ve partner doğrulama görevlerini tamamlayarak puanınızı katlayın.',
      'Daha önce $DOGS veya $NOT aldığınız birincil Tonkeeper veya MyTonWallet cüzdanınızı bağlayın.',
      'Günlük giriş bonuslarını toplayın ve topluluk oylamalarına katılarak ek ödül kazanın.'
    ],
    strategyHeading: 'Maksimum Ödül Stratejisi',
    strategy: 'Süreli görevleri kaçırmamak için Tasks sekmesini düzenli kontrol edin. Geçmiş airdrop işlemlerine sahip ana Tonkeeper cüzdanınızı bağlamak yüksek ödül kademesi için avantaj sağlar.',
    sybilHeading: 'Sybil Koruması ve Güvenlik',
    sybilSafety: 'PAWS, ödülleri Telegram kullanıcı kimliği yaşı ve zincir üstü geçmişe göre hesapladığı için yeni açılmış sahte bot hesaplar neredeyse sıfır puan alır. Yalnızca resmi botu kullanın ve kurtarma kelimelerinizi paylaşmayın.',
    faqHeading: 'Sıkça Sorulan Sorular',
    faqs: [
      {
        q: 'PAWS kazanmak için ekrana tıklamam gerekiyor mu?',
        a: 'Hayır, PAWS tıklama gerektirmez; puanlar hesap geçmişiniz ve doğrulanan görevler üzerinden otomatik verilir.'
      },
      {
        q: 'PAWS airdrop katılımı ücretsiz mi?',
        a: 'Evet, ayak izi hesaplaması ve görev katılımı tamamen ücretsizdir ($0).'
      }
    ],
    ctaText: 'PAWS’ı Başlat',
    englishVersionLabel: 'İngilizce Sürüm'
  },
  {
    id: 'paws',
    slug: 'ru',
    lang: 'ru',
    flag: '🇷🇺',
    homeLabel: 'Главная',
    hubLabel: 'Telegram-аирдропы',
    hubHref: '/ru/telegram-airdrops/',
    title: 'Гайд по аирдропу PAWS (2026): награда за активность и $PAWS | Airdroplyx',
    description: 'Как получить дроп $PAWS в Telegram без тапов: проверка возраста аккаунта, истории $NOT и $DOGS, выполнение заданий и привязка Tonkeeper.',
    h1: 'PAWS ($PAWS): гайд по аирдропу и системе Proof-of-Footprint',
    badge: 'Экосистема TON • Бесплатно',
    rewardLabel: 'Ожидаемая награда',
    costLabel: 'Затраты',
    snapshotLabel: 'Ожидаемый период',
    timeLabel: 'Время в день',
    overviewHeading: 'Обзор проекта',
    overview: 'PAWS — вирусный Telegram Mini App, собравший более 25 миллионов пользователей за первую неделю. Вместо бесконечных кликов приложение оценивает ваш цифровой след: возраст аккаунта Telegram и прошлое участие в Notcoin ($NOT), $DOGS и Hamster Kombat.',
    tokenomicsHeading: 'Токеномика $PAWS',
    tokenomics: 'Токен $PAWS создаётся как комьюнити-токен экосистемы TON. Основная доля генезис-эмиссии направлена реальным давним пользователям Telegram, а не фермам новых аккаунтов.',
    stepsHeading: 'Пошаговая инструкция',
    steps: [
      'Откройте официальный бот PAWS в Telegram и дождитесь анализа профиля.',
      'Получите стартовые $PAWS за возраст аккаунта и прошлую активность в $NOT и $DOGS.',
      'Выполните все задания во вкладке Tasks для увеличения баланса.',
      'Подключите основной некастодиальный кошелек Tonkeeper или MyTonWallet с историей транзакций.',
      'Участвуйте в голосованиях сообщества и забирайте ежедневные бонусы.'
    ],
    strategyHeading: 'Стратегия фарма',
    strategy: 'Привяжите именно тот кошелек TON, на который вы ранее получали дропы $DOGS или $NOT, и регулярно проверяйте ограниченные по времени задания в разделе Tasks.',
    sybilHeading: 'Защита от ботов и безопасность',
    sybilSafety: 'Механика Proof-of-Footprint опирается на возраст Telegram ID и ончейн-историю, поэтому свежие бот-аккаунты почти ничего не получают. Никогда не передавайте сид-фразу.',
    faqHeading: 'Частые вопросы',
    faqs: [
      {
        q: 'Нужно ли кликать по экрану в PAWS?',
        a: 'Нет, механика PAWS работает без тапов — очки начисляются за ваш цифровой след и задания.'
      },
      {
        q: 'Участие в PAWS бесплатное?',
        a: 'Да, проверка активности и выполнение квестов полностью бесплатны ($0).'
      }
    ],
    ctaText: 'Открыть PAWS',
    englishVersionLabel: 'Английская версия'
  },
  {
    id: 'paws',
    slug: 'id',
    lang: 'id',
    flag: '🇮🇩',
    homeLabel: 'Beranda',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/id/airdrop-telegram/',
    title: 'Panduan Airdrop PAWS (2026): Klaim $PAWS Tanpa Tap | Airdroplyx',
    description: 'Cara dapat airdrop PAWS di Telegram secara gratis berdasarkan umur akun dan riwayat $NOT/$DOGS serta cara menghubungkan dompet Tonkeeper.',
    h1: 'PAWS ($PAWS): Panduan Airdrop Telegram Proof-of-Footprint',
    badge: 'Ekosistem TON • Gratis',
    rewardLabel: 'Estimasi Hadiah',
    costLabel: 'Biaya',
    snapshotLabel: 'Perkiraan Snapshot',
    timeLabel: 'Waktu Harian',
    overviewHeading: 'Ringkasan Proyek',
    overview: 'PAWS adalah aplikasi mini Telegram viral yang meraih lebih dari 25 juta pengguna di minggu pertamanya. Tanpa perlu mengetuk layar, PAWS menghitung alokasi awal $PAWS berdasarkan usia akun Telegram serta riwayat partisipasi Anda di Notcoin ($NOT) dan $DOGS.',
    tokenomicsHeading: 'Tokenomik $PAWS',
    tokenomics: 'Token $PAWS dirancang sebagai token komunitas utama di ekosistem game TON dan Telegram, dengan porsi terbesar dialokasikan untuk pengguna Telegram asli jangka panjang.',
    stepsHeading: 'Langkah-Langkah Mengikuti Airdrop',
    steps: [
      'Buka Mini App resmi PAWS di Telegram dan biarkan sistem memindai profil Anda.',
      'Cek poin awal $PAWS dari usia akun serta riwayat klaim $NOT dan $DOGS.',
      'Buka tab Tasks dan selesaikan misi verifikasi komunitas untuk poin tambahan.',
      'Hubungkan dompet Tonkeeper atau MyTonWallet utama Anda yang memiliki riwayat on-chain.',
      'Ikuti pemungutan suara komunitas dan klaim bonus harian yang tersedia.'
    ],
    strategyHeading: 'Strategi Maksimal',
    strategy: 'Gunakan dompet TON yang sama saat Anda mengklaim $DOGS atau $NOT, lalu selesaikan semua misi terbatas waktu di tab Tasks agar tidak tertinggal pengganda poin.',
    sybilHeading: 'Keamanan & Anti-Sybil',
    sybilSafety: 'Karena hadiah bergantung pada usia ID Telegram dan rekam jejak on-chain, akun bot baru hampir tidak mendapatkan poin. Jangan pernah membagikan seed phrase Anda.',
    faqHeading: 'Pertanyaan Umum',
    faqs: [
      {
        q: 'Apakah harus tap layar di PAWS?',
        a: 'Tidak, PAWS tidak memakai sistem tap; poin dihitung otomatis dari rekam jejak dan tugas.'
      },
      {
        q: 'Apakah airdrop PAWS gratis?',
        a: 'Ya, 100% gratis tanpa biaya apa pun ($0).'
      }
    ],
    ctaText: 'Buka PAWS',
    englishVersionLabel: 'Versi Bahasa Inggris'
  },
  {
    id: 'paws',
    slug: 'vi',
    lang: 'vi',
    flag: '🇻🇳',
    homeLabel: 'Trang chủ',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/vi/airdrop-telegram/',
    title: 'Hướng dẫn Airdrop PAWS (2026): Nhận $PAWS không cần Tap | Airdroplyx',
    description: 'Cách tham gia airdrop PAWS trên Telegram miễn phí: nhận điểm $PAWS theo tuổi tài khoản, lịch sử $NOT/$DOGS và kết nối ví Tonkeeper.',
    h1: 'PAWS ($PAWS): Hướng dẫn Airdrop Telegram & Dấu ấn On-Chain',
    badge: 'Hệ sinh thái TON • Miễn phí',
    rewardLabel: 'Phần thưởng dự kiến',
    costLabel: 'Chi phí',
    snapshotLabel: 'Thời gian dự kiến',
    timeLabel: 'Thời gian mỗi ngày',
    overviewHeading: 'Tổng quan dự án',
    overview: 'PAWS là Telegram Mini-App bùng nổ với hơn 25 triệu người dùng chỉ trong tuần đầu ra mắt. Thay vì chạm màn hình liên tục, PAWS phân tích tuổi tài khoản Telegram và lịch sử tham gia Notcoin ($NOT), $DOGS để cấp phân bổ $PAWS ban đầu.',
    tokenomicsHeading: 'Tokenomics $PAWS',
    tokenomics: 'Token $PAWS đóng vai trò token cộng đồng trên hệ sinh thái TON, ưu tiên phần lớn nguồn cung cho người dùng Telegram lâu năm thay vì tài khoản bot mới tạo.',
    stepsHeading: 'Các bước tham gia chi tiết',
    steps: [
      'Mở Mini-App chính thức của PAWS trên Telegram để hệ thống quét hồ sơ.',
      'Nhận số điểm $PAWS khởi đầu dựa trên tuổi tài khoản và lịch sử $NOT, $DOGS.',
      'Vào mục Tasks hoàn thành các nhiệm vụ xác minh cộng đồng để tăng điểm.',
      'Kết nối ví Tonkeeper hoặc MyTonWallet chính có lịch sử giao dịch trên TON.',
      'Tham gia bình chọn cộng đồng và điểm danh nhận thưởng bổ sung.'
    ],
    strategyHeading: 'Chiến lược tối ưu điểm',
    strategy: 'Hãy liên kết đúng ví TON bạn từng dùng nhận $DOGS hoặc $NOT và hoàn thành sớm các nhiệm vụ giới hạn thời gian trong tab Tasks.',
    sybilHeading: 'Chống Sybil & Bảo mật',
    sybilSafety: 'Thuật toán dựa trên tuổi ID Telegram và dữ liệu on-chain giúp loại bỏ hiệu quả các farm bot mới tạo. Tuyệt đối không chia sẻ cụm từ khôi phục ví.',
    faqHeading: 'Câu hỏi thường gặp',
    faqs: [
      {
        q: 'Chơi PAWS có cần tap màn hình không?',
        a: 'Không, PAWS không yêu cầu tap; điểm được tính từ dấu ấn tài khoản và nhiệm vụ.'
      },
      {
        q: 'Tham gia PAWS có miễn phí không?',
        a: 'Có, hoàn toàn miễn phí ($0) để kiểm tra điểm và làm nhiệm vụ.'
      }
    ],
    ctaText: 'Mở PAWS',
    englishVersionLabel: 'Bản tiếng Anh'
  },
  {
    id: 'paws',
    slug: 'es',
    lang: 'es',
    flag: '🇪🇸',
    homeLabel: 'Inicio',
    hubLabel: 'Airdrops de Telegram',
    hubHref: '/es/airdrops-telegram/',
    title: 'Guía Airdrop PAWS (2026): Reclamar $PAWS sin Taps en TON | Airdroplyx',
    description: 'Cómo participar gratis en el airdrop PAWS en Telegram: calcula tu puntuación por antigüedad de cuenta, historial en $NOT/$DOGS y conecta Tonkeeper.',
    h1: 'PAWS ($PAWS): Guía del Airdrop en Telegram por Huella Digital',
    badge: 'Ecosistema TON • Gratis',
    rewardLabel: 'Recompensa estimada',
    costLabel: 'Costo',
    snapshotLabel: 'Periodo estimado',
    timeLabel: 'Tiempo diario',
    overviewHeading: 'Resumen del proyecto',
    overview: 'PAWS es una Mini App viral de Telegram que superó los 25 millones de usuarios en su primera semana. En lugar de hacer clics repetitivos, utiliza el modelo Proof-of-Footprint evaluando la antigüedad de tu cuenta y tu historial en Notcoin ($NOT) y $DOGS.',
    tokenomicsHeading: 'Tokenomics de $PAWS',
    tokenomics: 'El token $PAWS está diseñado como moneda comunitaria del ecosistema TON, destinando la mayor parte del suministro inicial a usuarios reales con historial verificado.',
    stepsHeading: 'Pasos para participar',
    steps: [
      'Inicia la Mini App oficial de PAWS en Telegram para que analice tu perfil.',
      'Reclama tu puntuación base de $PAWS según tu antigüedad e historial en $NOT y $DOGS.',
      'Completa las misiones de la pestaña Tasks para multiplicar tus puntos.',
      'Conecta tu billetera principal Tonkeeper o MyTonWallet con actividad previa en TON.',
      'Participa en votaciones comunitarias y recoge bonos diarios.'
    ],
    strategyHeading: 'Estrategia para maximizar recompensas',
    strategy: 'Vincula la misma billetera TON que usaste para $DOGS o $NOT y revisa con frecuencia las tareas temporales en Tasks.',
    sybilHeading: 'Seguridad y protección Sybil',
    sybilSafety: 'Al basarse en la antigüedad real del ID de Telegram y registros on-chain, las cuentas bot recién creadas apenas reciben puntos. Nunca compartas tu frase semilla.',
    faqHeading: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Hay que pulsar la pantalla en PAWS?',
        a: 'No, PAWS no requiere hacer taps; los puntos se asignan automáticamente por tu historial y tareas.'
      },
      {
        q: '¿Es gratis el airdrop de PAWS?',
        a: 'Sí, participar y calcular tu puntuación es 100% gratuito ($0).'
      }
    ],
    ctaText: 'Abrir PAWS',
    englishVersionLabel: 'Versión en inglés'
  },
  {
    id: 'paws',
    slug: 'pt',
    lang: 'pt',
    flag: '🇧🇷',
    homeLabel: 'Início',
    hubLabel: 'Airdrops do Telegram',
    hubHref: '/pt/airdrops-telegram/',
    title: 'Guia Airdrop PAWS (2026): Ganhar $PAWS Sem Cliques no TON | Airdroplyx',
    description: 'Veja como participar do airdrop PAWS no Telegram grátis: pontuação por tempo de conta, histórico em $NOT/$DOGS e conexão com Tonkeeper.',
    h1: 'PAWS ($PAWS): Guia do Airdrop no Telegram por Histórico',
    badge: 'Ecossistema TON • Grátis',
    rewardLabel: 'Recompensa estimada',
    costLabel: 'Custo',
    snapshotLabel: 'Previsão',
    timeLabel: 'Tempo diário',
    overviewHeading: 'Visão geral do projeto',
    overview: 'PAWS é um Mini App viral do Telegram que ultrapassou 25 milhões de usuários na primeira semana. Em vez de exigir toques repetitivos, ele avalia a idade da sua conta e seu histórico em Notcoin ($NOT) e $DOGS para liberar tokens $PAWS.',
    tokenomicsHeading: 'Tokenomics do $PAWS',
    tokenomics: 'O token $PAWS atua como ativo comunitário do ecossistema TON, priorizando usuários antigos do Telegram com histórico real de participação.',
    stepsHeading: 'Passo a passo para participar',
    steps: [
      'Abra o Mini App oficial do PAWS no Telegram e aguarde a análise do perfil.',
      'Confira sua pontuação inicial em $PAWS pela idade da conta e histórico em $NOT e $DOGS.',
      'Acesse a aba Tasks e conclua todas as missões sociais disponíveis.',
      'Conecte sua carteira Tonkeeper ou MyTonWallet principal com histórico na rede TON.',
      'Participe das votações da comunidade e garanta bônus extras.'
    ],
    strategyHeading: 'Estratégia de ganhos',
    strategy: 'Conecte a mesma carteira TON usada para resgatar $DOGS ou $NOT e acompanhe as tarefas por tempo limitado na aba Tasks.',
    sybilHeading: 'Proteção Sybil e segurança',
    sybilSafety: 'Como a pontuação depende da idade do ID do Telegram e registros on-chain, contas bot recém-criadas recebem praticamente zero. Nunca revele sua frase secreta.',
    faqHeading: 'Perguntas frequentes',
    faqs: [
      {
        q: 'Precisa ficar tocando na tela no PAWS?',
        a: 'Não, o PAWS não usa mecânica de clique; os pontos vêm do histórico e das missões.'
      },
      {
        q: 'O airdrop PAWS é gratuito?',
        a: 'Sim, totalmente gratuito ($0) para participar.'
      }
    ],
    ctaText: 'Abrir PAWS',
    englishVersionLabel: 'Versão em inglês'
  },
  {
    id: 'paws',
    slug: 'ko',
    lang: 'ko',
    flag: '🇰🇷',
    homeLabel: '홈',
    hubLabel: '텔레그램 에어드랍',
    hubHref: '/ko/telegram-airdrops/',
    title: 'PAWS 에어드랍 가이드 (2026): 탭 없이 $PAWS 받기 & Tonkeeper | Airdroplyx',
    description: '출시 첫 주 2,500만 유저를 돌파한 PAWS 텔레그램 미니앱 가이드: 계정 연식 및 $NOT/$DOGS 이력 기반 $PAWS 보상 확인 및 Tonkeeper 연동.',
    h1: 'PAWS ($PAWS) 텔레그램 에어드랍 및 활동 이력 보상 가이드',
    badge: 'TON 생태계 • 무료',
    rewardLabel: '예상 보상',
    costLabel: '비용',
    snapshotLabel: '예상 시기',
    timeLabel: '일일 소요 시간',
    overviewHeading: '프로젝트 개요',
    overview: 'PAWS는 출시 첫 주 만에 2,500만 명 이상이 참여한 텔레그램 미니앱입니다. 화면을 반복해서 두드리는 대신 텔레그램 계정 연식과 과거 Notcoin($NOT), $DOGS 참여 기록을 분석해 $PAWS 포인트를 즉시 지급합니다.',
    tokenomicsHeading: '$PAWS 토크노믹스',
    tokenomics: '$PAWS는 TON 생태계의 커뮤니티 토큰으로, 신규 봇 계정이 아닌 실제 장기 텔레그램 사용자에게 초기 물량의 핵심 비중을 배정합니다.',
    stepsHeading: '단계별 참여 방법',
    steps: [
      '텔레그램에서 공식 PAWS 미니앱을 실행하고 프로필 스캔을 완료하세요.',
      '계정 연식과 $NOT, $DOGS 참여 이력에 따른 기본 $PAWS 점수를 확인하세요.',
      'Tasks 탭의 커뮤니티 및 파트너 미션을 완료해 보너스 점수를 받으세요.',
      '기존 온체인 거래 기록이 있는 기본 Tonkeeper 또는 MyTonWallet을 연결하세요.',
      '커뮤니티 투표와 일일 보너스 이벤트에 참여하세요.'
    ],
    strategyHeading: '보상 극대화 전략',
    strategy: '과거 $DOGS나 $NOT을 클레임했던 동일한 TON 지갑을 연결하고, Tasks 탭의 기간 한정 미션을 놓치지 않고 완료하는 것이 중요합니다.',
    sybilHeading: '시빌 방지 및 보안',
    sybilSafety: '텔레그램 ID 연식과 온체인 기록을 기반으로 점수를 산정하므로 신규 봇 계정은 사실상 보상을 받기 어렵습니다. 지갑 복구 구문은 절대 공유하지 마세요.',
    faqHeading: '자주 묻는 질문',
    faqs: [
      {
        q: 'PAWS는 화면을 탭해야 하나요?',
        a: '아니요, 탭 작업 없이 활동 이력과 검증 미션만으로 포인트가 부여됩니다.'
      },
      {
        q: 'PAWS 참여 비용이 드나요?',
        a: '아니요, 비용 없이 무료($0)로 참여할 수 있습니다.'
      }
    ],
    ctaText: 'PAWS 시작하기',
    englishVersionLabel: '영문 버전'
  },
  {
    id: 'paws',
    slug: 'ja',
    lang: 'ja',
    flag: '🇯🇵',
    homeLabel: 'ホーム',
    hubLabel: 'Telegramエアドロップ',
    hubHref: '/ja/telegram-airdrops/',
    title: 'PAWS エアドロップ攻略 (2026): タップ不要で$PAWS獲得 | Airdroplyx',
    description: '初週2,500万人超えのTelegramアプリPAWS完全ガイド：アカウント歴や$NOT/$DOGS実績に応じた$PAWS付与とTonkeeper接続手順。',
    h1: 'PAWS ($PAWS) Telegramエアドロップ＆活動履歴報酬ガイド',
    badge: 'TONエコシステム • 無料',
    rewardLabel: '予想報酬',
    costLabel: '費用',
    snapshotLabel: '予定時期',
    timeLabel: '1日の作業時間',
    overviewHeading: 'プロジェクト概要',
    overview: 'PAWSは公開初週で2,500万人以上のユーザーを集めたTelegramミニアプリです。画面連打の代わりに、Telegramアカウント歴や過去のNotcoin（$NOT）・$DOGSへの参加履歴を自動判定して$PAWSポイントを付与します。',
    tokenomicsHeading: '$PAWS トケノミクス',
    tokenomics: '$PAWSはTONエコシステム向けのコミュニティトークンとして設計され、新規ボットではなく長期のTelegramユーザーへ厚く配分されます。',
    stepsHeading: '参加ステップ',
    steps: [
      'Telegramで公式PAWSミニアプリを起動し、プロフィールスキャンを実行します。',
      'アカウント歴および$NOT・$DOGS参加実績に基づく初期$PAWSスコアを確認します。',
      'Tasksタブのコミュニティミッションを完了してポイントを増やします。',
      '過去の履歴があるメインのTonkeeperまたはMyTonWalletを接続します。',
      'コミュニティ投票やデイリーボーナスに参加します。'
    ],
    strategyHeading: '報酬最大化のコツ',
    strategy: '過去に$DOGSや$NOTを受け取ったTONウォレットを接続し、Tasksタブの期間限定クエストを早めに消化するのが有効です。',
    sybilSafety: 'Telegram IDの年数とオンチェーン履歴に基づくため、新規作成ボットはほぼ報酬を得られません。シードフレーズは厳重に管理してください。',
    sybilHeading: 'シビル対策と安全性',
    faqHeading: 'よくある質問',
    faqs: [
      {
        q: 'PAWSは画面タップが必要ですか？',
        a: 'いいえ、タップは不要で活動履歴とタスク完了でポイントが付与されます。'
      },
      {
        q: 'PAWSは無料で参加できますか？',
        a: 'はい、完全無料（$0）で参加できます。'
      }
    ],
    ctaText: 'PAWSを開く',
    englishVersionLabel: '英語版を見る'
  },
  {
    id: 'paws',
    slug: 'ar',
    lang: 'ar',
    flag: '🇸🇦',
    homeLabel: 'الرئيسية',
    hubLabel: 'إيردروبات تيليجرام',
    hubHref: '/ar/telegram-airdrops/',
    title: 'دليل إيردروب PAWS (2026): ربح $PAWS بدون نقر | Airdroplyx',
    description: 'دليل شامل للمشاركة مجاناً في إيردروب PAWS على تيليجرام: احصل على $PAWS بناءً على عمر حسابك ومشاركات $NOT و$DOGS وربط Tonkeeper.',
    h1: 'PAWS ($PAWS): دليل إيردروب تيليجرام ومكافآت النشاط السابق',
    badge: 'نظام TON • مجاني',
    rewardLabel: 'المكافأة المتوقعة',
    costLabel: 'التكلفة',
    snapshotLabel: 'الفترة المتوقعة',
    timeLabel: 'الوقت اليومي',
    overviewHeading: 'نظرة عامة على المشروع',
    overview: 'تطبيق PAWS هو تطبيق تيليجرام مصغر حقق أكثر من 25 مليون مستخدم في أسبوعه الأول. بدلاً من النقر المستمر، يحسب التطبيق نقاط $PAWS تلقائياً استناداً إلى عمر حسابك في تيليجرام وسجلك في Notcoin ($NOT) و$DOGS.',
    tokenomicsHeading: 'اقتصاديات $PAWS',
    tokenomics: 'صُممت عملة $PAWS كعملة مجتمعية لنظام TON، مع تخصيص الحصة الأكبر للمستخدمين الحقيقيين ذوي السجل التاريخي الموثق.',
    stepsHeading: 'خطوات المشاركة',
    steps: [
      'افتح تطبيق PAWS الرسمي داخل تيليجرام وانتظر فحص ملفك الشخصي.',
      'اطلع على نقاط $PAWS الأولية الممنوحة حسب عمر حسابك ومشاركتك في $NOT و$DOGS.',
      'أكمل مهام التحقق المجتمعية في تبويب Tasks لزيادة رصيدك.',
      'اربط محفظة Tonkeeper أو MyTonWallet الأساسية التي تحتوي على سجل معاملات على TON.',
      'شارك في تصويت المجتمع واجمع المكافآت اليومية.'
    ],
    strategyHeading: 'استراتيجية تعظيم المكافآت',
    strategy: 'اربط نفس محفظة TON التي استخدمتها في إيردروبات $DOGS أو $NOT، وتابع تبويب Tasks باستمرار لإنجاز المهام المؤقتة.',
    sybilHeading: 'الحماية من الحسابات الوهمية والأمان',
    sybilSafety: 'يعتمد PAWS على عمر معرّف تيليجرام والسجل على السلسلة، مما يحرم الحسابات الوهمية الجديدة من المكافآت. لا تشارك عبارة الاسترداد أبداً.',
    faqHeading: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'هل يتطلب PAWS النقر على الشاشة؟',
        a: 'لا، لا يتطلب PAWS أي نقر؛ تُمنح النقاط تلقائياً حسب نشاطك السابق والمهام.'
      },
      {
        q: 'هل المشاركة في PAWS مجانية؟',
        a: 'نعم، الفحص والمشاركة مجانيان 100% ($0).'
      }
    ],
    ctaText: 'افتح PAWS',
    englishVersionLabel: 'النسخة الإنجليزية'
  },
  {
    id: 'paws',
    slug: 'de',
    lang: 'de',
    flag: '🇩🇪',
    homeLabel: 'Startseite',
    hubLabel: 'Telegram-Airdrops',
    hubHref: '/de/telegram-airdrops/',
    title: 'PAWS Airdrop Guide (2026): $PAWS ohne Klicken erhalten | Airdroplyx',
    description: 'Anleitung für den PAWS Airdrop auf Telegram: Erhalte $PAWS basierend auf deinem Kontoalter, deiner $NOT/$DOGS-Historie und verbinde Tonkeeper.',
    h1: 'PAWS ($PAWS): Telegram-Airdrop & Proof-of-Footprint Guide',
    badge: 'TON-Ökosystem • Kostenlos',
    rewardLabel: 'Geschätzte Belohnung',
    costLabel: 'Kosten',
    snapshotLabel: 'Erwarteter Zeitraum',
    timeLabel: 'Täglicher Aufwand',
    overviewHeading: 'Projektübersicht',
    overview: 'PAWS ist eine virale Telegram Mini App mit über 25 Millionen Nutzern in der ersten Woche. Statt ständigem Tippen bewertet PAWS dein Telegram-Kontoalter sowie deine bisherige Teilnahme an Notcoin ($NOT) und $DOGS für deine $PAWS-Zuteilung.',
    tokenomicsHeading: '$PAWS Tokenomics',
    tokenomics: '$PAWS ist als Community-Token für das TON-Ökosystem konzipiert, wobei der größte Anteil an echte, langjährige Telegram-Nutzer geht.',
    stepsHeading: 'Schritt-für-Schritt-Anleitung',
    steps: [
      'Öffne die offizielle PAWS Mini App in Telegram und lasse dein Profil scannen.',
      'Prüfe deine Start-Zuteilung an $PAWS anhand von Kontoalter sowie $NOT- und $DOGS-Historie.',
      'Erledige alle Community-Aufgaben im Reiter Tasks für zusätzliche Punkte.',
      'Verbinde deine primäre Tonkeeper- oder MyTonWallet-Wallet mit On-Chain-Historie.',
      'Nimm an Community-Abstimmungen teil und sichere dir tägliche Boni.'
    ],
    strategyHeading: 'Strategie für maximale Punkte',
    strategy: 'Verknüpfe genau die TON-Wallet, mit der du zuvor $DOGS oder $NOT beansprucht hast, und erledige zeitlich begrenzte Quests im Reiter Tasks.',
    sybilHeading: 'Sybil-Schutz & Sicherheit',
    sybilSafety: 'Da PAWS Kontoalter und On-Chain-Historie prüft, gehen neu erstellte Bot-Konten praktisch leer aus. Teile niemals deine Seed-Phrase.',
    faqHeading: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Muss man bei PAWS auf den Bildschirm tippen?',
        a: 'Nein, PAWS funktioniert komplett ohne Tippen über Historie und verifizierte Aufgaben.'
      },
      {
        q: 'Ist der PAWS Airdrop kostenlos?',
        a: 'Ja, die Teilnahme ist zu 100 % kostenlos ($0).'
      }
    ],
    ctaText: 'PAWS öffnen',
    englishVersionLabel: 'Englische Version'
  },
  {
    id: 'paws',
    slug: 'fr',
    lang: 'fr',
    flag: '🇫🇷',
    homeLabel: 'Accueil',
    hubLabel: 'Airdrops Telegram',
    hubHref: '/fr/airdrops-telegram/',
    title: 'Guide Airdrop PAWS (2026) : Gagner $PAWS sans cliquer | Airdroplyx',
    description: 'Comment participer gratuitement à l’airdrop PAWS sur Telegram : score basé sur l’ancienneté, l’historique $NOT/$DOGS et connexion Tonkeeper.',
    h1: 'PAWS ($PAWS) : Guide Airdrop Telegram et Empreinte On-Chain',
    badge: 'Écosystème TON • Gratuit',
    rewardLabel: 'Récompense estimée',
    costLabel: 'Coût',
    snapshotLabel: 'Période estimée',
    timeLabel: 'Temps quotidien',
    overviewHeading: 'Présentation du projet',
    overview: 'PAWS est une Mini App Telegram virale ayant réuni plus de 25 millions d’utilisateurs dès sa première semaine. Au lieu de tapoter sans fin, PAWS analyse l’ancienneté de votre compte Telegram et votre participation passée à Notcoin ($NOT) et $DOGS.',
    tokenomicsHeading: 'Tokenomics de $PAWS',
    tokenomics: 'Le jeton $PAWS sert de jeton communautaire pour l’écosystème TON, en récompensant prioritairement les utilisateurs authentiques et anciens de Telegram.',
    stepsHeading: 'Étapes pour participer',
    steps: [
      'Lancez la Mini App officielle PAWS sur Telegram et laissez l’analyse du profil se terminer.',
      'Consultez votre score initial $PAWS issu de votre ancienneté et de votre historique $NOT et $DOGS.',
      'Complétez les quêtes communautaires dans l’onglet Tasks pour multiplier vos points.',
      'Connectez votre portefeuille principal Tonkeeper ou MyTonWallet disposant d’un historique TON.',
      'Participez aux votes communautaires et réclamez les bonus quotidiens.'
    ],
    strategyHeading: 'Stratégie d’optimisation',
    strategy: 'Liez le même portefeuille TON utilisé pour $DOGS ou $NOT et surveillez régulièrement les missions limitées dans le temps de l’onglet Tasks.',
    sybilHeading: 'Protection Anti-Sybil et sécurité',
    sybilSafety: 'L’attribution reposant sur l’âge réel de l’ID Telegram et les traces on-chain, les fermes de bots récentes ne reçoivent presque rien. Ne partagez jamais votre phrase secrète.',
    faqHeading: 'Questions fréquentes',
    faqs: [
      {
        q: 'Faut-il tapoter l’écran dans PAWS ?',
        a: 'Non, PAWS ne demande aucun tapotement ; les points proviennent de votre historique et des tâches.'
      },
      {
        q: 'L’airdrop PAWS est-il gratuit ?',
        a: 'Oui, la participation est 100 % gratuite ($0).'
      }
    ],
    ctaText: 'Ouvrir PAWS',
    englishVersionLabel: 'Version anglaise'
  },
  {
    id: 'paws',
    slug: 'uk',
    lang: 'uk',
    flag: '🇺🇦',
    homeLabel: 'Головна',
    hubLabel: 'Telegram-аірдропи',
    hubHref: '/uk/telegram-airdrops/',
    title: 'Гайд з аірдропу PAWS (2026): нагорода $PAWS без кліків | Airdroplyx',
    description: 'Як отримати аірдроп PAWS у Telegram без тапів: оцінка віку акаунта, історія $NOT/$DOGS, завдання та підключення Tonkeeper.',
    h1: 'PAWS ($PAWS): гайд з аірдропу та системи Proof-of-Footprint',
    badge: 'Екосистема TON • Безкоштовно',
    rewardLabel: 'Очікувана винагорода',
    costLabel: 'Витрати',
    snapshotLabel: 'Очікуваний період',
    timeLabel: 'Час на день',
    overviewHeading: 'Огляд проєкту',
    overview: 'PAWS — вірусний Telegram Mini App, який зібрав понад 25 мільйонів користувачів за перший тиждень. Замість нескінченних кліків сервіс оцінює вік вашого Telegram-акаунта та участь у Notcoin ($NOT) і $DOGS для нарахування $PAWS.',
    tokenomicsHeading: 'Токеноміка $PAWS',
    tokenomics: 'Токен $PAWS створюється як ком’юніті-актив екосистеми TON, де основна частка розподіляється серед реальних давніх користувачів Telegram.',
    stepsHeading: 'Покрокова інструкція',
    steps: [
      'Відкрийте офіційний бот PAWS у Telegram і дочекайтеся сканування профілю.',
      'Отримайте стартові бали $PAWS за вік акаунта та історію $NOT і $DOGS.',
      'Виконайте всі завдання у вкладці Tasks для збільшення балансу.',
      'Підключіть основний гаманець Tonkeeper або MyTonWallet з історією транзакцій у TON.',
      'Беріть участь у голосуваннях спільноти та забирайте щоденні бонуси.'
    ],
    strategyHeading: 'Стратегія максимізації нагород',
    strategy: 'Прив’яжіть той самий TON-гаманець, на який ви отримували $DOGS чи $NOT, і вчасно виконуйте обмежені за часом завдання у Tasks.',
    sybilHeading: 'Захист від Sybil та безпека',
    sybilSafety: 'Оскільки бали залежать від віку Telegram ID та ончейн-історії, свіжі бот-ферми майже нічого не отримують. Ніколи не передавайте сід-фразу.',
    faqHeading: 'Часті запитання',
    faqs: [
      {
        q: 'Чи потрібно тапати по екрану в PAWS?',
        a: 'Ні, PAWS не вимагає кліків — бали нараховуються за ваш цифровий слід і завдання.'
      },
      {
        q: 'Чи безкоштовна участь у PAWS?',
        a: 'Так, участь і перевірка історії повністю безкоштовні ($0).'
      }
    ],
    ctaText: 'Відкрити PAWS',
    englishVersionLabel: 'Англійська версія'
  },
  {
    id: 'paws',
    slug: 'zh',
    lang: 'zh-CN',
    flag: '🇨🇳',
    homeLabel: '首页',
    hubLabel: 'Telegram 空投',
    hubHref: '/zh/telegram-airdrops/',
    title: 'PAWS 空投教程 (2026)：免点击领取 $PAWS 与 TON 绑定 | Airdroplyx',
    description: '上线首周突破 2500 万用户的 PAWS Telegram 小程序攻略：依据账号注册年限及 $NOT/$DOGS 历史领取 $PAWS 并绑定 Tonkeeper。',
    h1: 'PAWS ($PAWS) Telegram 空投及链上足迹奖励指南',
    badge: 'TON 生态 • 零撸免费',
    rewardLabel: '预估奖励',
    costLabel: '参与成本',
    snapshotLabel: '预期周期',
    timeLabel: '每日耗时',
    overviewHeading: '项目简介',
    overview: 'PAWS 是上线首周即吸引超 2500 万用户的现象级 Telegram 小程序。它无需繁琐点击屏幕，而是通过分析你的 Telegram 账号年龄以及 Notcoin ($NOT) 与 $DOGS 的历史参与记录直接发放 $PAWS 积分。',
    tokenomicsHeading: '$PAWS 代币经济',
    tokenomics: '$PAWS 定位为 TON 与 Telegram 游戏生态的社区文化代币，创世供应的大部分份额优先分配给真实的老牌 Telegram 用户。',
    stepsHeading: '详细参与步骤',
    steps: [
      '在 Telegram 中打开官方 PAWS 小程序并等待账号足迹扫描完成。',
      '查看根据账号年限以及 $NOT、$DOGS 参与记录发放的初始 $PAWS 分数。',
      '前往 Tasks 栏目完成社区与合作方验证任务以提升积分。',
      '绑定曾领取过 $DOGS 或 $NOT 的主用 Tonkeeper 或 MyTonWallet 钱包。',
      '参与社区投票并领取每日活跃奖励。'
    ],
    strategyHeading: '高收益策略',
    strategy: '务必绑定拥有历史空投记录的同一 TON 钱包，并定期查看 Tasks 中的限时任务以获取额外加成。',
    sybilHeading: '防女巫机制与安全提示',
    sybilSafety: 'PAWS 根据不可篡改的 Telegram ID 年限和链上记录分配积分，批量新建的小号几乎零收益。切勿泄露钱包助记词。',
    faqHeading: '常见问题',
    faqs: [
      {
        q: '玩 PAWS 需要不停点击屏幕吗？',
        a: '不需要，PAWS 无需点屏幕，积分完全由账号历史足迹和验证任务决定。'
      },
      {
        q: '参与 PAWS 空投免费吗？',
        a: '是的，足迹评估与任务参与 100% 免费（$0）。'
      }
    ],
    ctaText: '打开 PAWS',
    englishVersionLabel: '英文原版'
  },
  {
    id: 'paws',
    slug: 'hi',
    lang: 'hi',
    flag: '🇮🇳',
    homeLabel: 'होम',
    hubLabel: 'टेलीग्राम एयरड्रॉप',
    hubHref: '/hi/telegram-airdrops/',
    title: 'PAWS एयरड्रॉप गाइड (2026): बिना टैप किए $PAWS और Tonkeeper | Airdroplyx',
    description: 'पहले हफ्ते में 2.5 करोड़+ यूज़र्स वाले PAWS Telegram मिनी-ऐप में मुफ्त भाग लें: अकाउंट की उम्र, $NOT/$DOGS हिस्ट्री और Tonkeeper कनेक्शन।',
    h1: 'PAWS ($PAWS) टेलीग्राम एयरड्रॉप और फुटप्रिंट रिवॉर्ड गाइड',
    badge: 'TON इकोसिस्टम • मुफ़्त',
    rewardLabel: 'अनुमानित इनाम',
    costLabel: 'लागत',
    snapshotLabel: 'अनुमानित समय',
    timeLabel: 'दैनिक समय',
    overviewHeading: 'प्रोजेक्ट का परिचय',
    overview: 'PAWS एक वायरल Telegram मिनी-ऐप है जिसने पहले ही सप्ताह में 2.5 करोड़ से अधिक यूज़र्स जोड़े। स्क्रीन टैप करने के बजाय, यह आपके Telegram अकाउंट की उम्र और Notcoin ($NOT) व $DOGS में पिछली भागीदारी के आधार पर $PAWS पॉइंट्स देता है।',
    tokenomicsHeading: '$PAWS टोकनॉमिक्स',
    tokenomics: '$PAWS को TON इकोसिस्टम के कम्युनिटी टोकन के रूप में बनाया गया है, जिसमें बड़ा हिस्सा असली और पुराने Telegram यूज़र्स के लिए आरक्षित है।',
    stepsHeading: 'भाग लेने के आसान चरण',
    steps: [
      'Telegram में आधिकारिक PAWS मिनी-ऐप खोलें और प्रोफाइल स्कैन पूरा होने दें।',
      'अकाउंट की उम्र और $NOT, $DOGS हिस्ट्री के अनुसार मिले शुरुआती $PAWS देखें।',
      'अतिरिक्त पॉइंट्स के लिए Tasks टैब के सभी सोशल और कम्युनिटी मिशन पूरे करें।',
      'ऑन-चेन हिस्ट्री वाला अपना मुख्य Tonkeeper या MyTonWallet वॉलेट कनेक्ट करें।',
      'कम्युनिटी वोटिंग और दैनिक बोनस क्लेम में भाग लें।'
    ],
    strategyHeading: 'अधिकतम इनाम की रणनीति',
    strategy: 'वही TON वॉलेट लिंक करें जिससे आपने पहले $DOGS या $NOT क्लेम किया था, और Tasks टैब के सीमित समय वाले मिशन समय पर पूरे करें।',
    sybilHeading: 'सिबिल सुरक्षा और सावधानियाँ',
    sybilSafety: 'क्योंकि इनाम Telegram ID की उम्र और ऑन-चेन रिकॉर्ड से तय होते हैं, नए बॉट अकाउंट्स को लगभग कोई रिवॉर्ड नहीं मिलता। अपनी सीड फ्रेज़ कभी साझा न करें।',
    faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: [
      {
        q: 'क्या PAWS में स्क्रीन टैप करनी पड़ती है?',
        a: 'नहीं, PAWS में टैप करने की ज़रूरत नहीं है; पॉइंट्स आपके रिकॉर्ड और टास्क से मिलते हैं।'
      },
      {
        q: 'क्या PAWS एयरड्रॉप मुफ़्त है?',
        a: 'हाँ, इसमें भाग लेना पूरी तरह मुफ़्त ($0) है।'
      }
    ],
    ctaText: 'PAWS खोलें',
    englishVersionLabel: 'अंग्रेज़ी संस्करण'
  },
  {
    id: 'paws',
    slug: 'it',
    lang: 'it',
    flag: '🇮🇹',
    homeLabel: 'Home',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/it/airdrop-telegram/',
    title: 'Guida Airdrop PAWS (2026): Ottenere $PAWS senza Tap | Airdroplyx',
    description: 'Come partecipare gratis all’airdrop PAWS su Telegram: punteggio basato su anzianità account, storico $NOT/$DOGS e collegamento Tonkeeper.',
    h1: 'PAWS ($PAWS): Guida Airdrop Telegram Proof-of-Footprint',
    badge: 'Ecosistema TON • Gratis',
    rewardLabel: 'Ricompensa stimata',
    costLabel: 'Costo',
    snapshotLabel: 'Periodo previsto',
    timeLabel: 'Tempo giornaliero',
    overviewHeading: 'Panoramica del progetto',
    overview: 'PAWS è una Mini App Telegram virale che ha superato i 25 milioni di utenti nella prima settimana. Invece di richiedere tap continui, calcola i punti $PAWS in base all’età dell’account Telegram e alla partecipazione passata a Notcoin ($NOT) e $DOGS.',
    tokenomicsHeading: 'Tokenomics di $PAWS',
    tokenomics: '$PAWS nasce come token comunitario per l’ecosistema TON, destinando gran parte dell’offerta iniziale a utenti Telegram reali e storici.',
    stepsHeading: 'Come partecipare passo dopo passo',
    steps: [
      'Avvia la Mini App ufficiale di PAWS su Telegram e attendi la scansione del profilo.',
      'Verifica il punteggio iniziale $PAWS ottenuto da anzianità account e storico $NOT e $DOGS.',
      'Completa tutte le missioni nella scheda Tasks per incrementare il saldo.',
      'Collega il tuo wallet principale Tonkeeper o MyTonWallet con storico su TON.',
      'Partecipa alle votazioni della community e riscatta i bonus giornalieri.'
    ],
    strategyHeading: 'Strategia per massimizzare i punti',
    strategy: 'Collega lo stesso wallet TON usato in precedenza per $DOGS o $NOT e controlla spesso le missioni a tempo nella sezione Tasks.',
    sybilHeading: 'Sicurezza e protezione Sybil',
    sybilSafety: 'Basandosi sull’anzianità reale dell’ID Telegram e sui dati on-chain, gli account bot appena creati ricevono quasi zero punti. Non condividere mai la tua frase seed.',
    faqHeading: 'Domande frequenti',
    faqs: [
      {
        q: 'Bisogna toccare lo schermo su PAWS?',
        a: 'No, PAWS non richiede tap; i punti derivano dallo storico e dalle missioni completate.'
      },
      {
        q: 'L’airdrop di PAWS è gratuito?',
        a: 'Sì, la partecipazione è al 100% gratuita ($0).'
      }
    ],
    ctaText: 'Apri PAWS',
    englishVersionLabel: 'Versione inglese'
  },
  {
    id: 'paws',
    slug: 'pl',
    lang: 'pl',
    flag: '🇵🇱',
    homeLabel: 'Strona główna',
    hubLabel: 'Airdropy Telegram',
    hubHref: '/pl/airdrop-telegram/',
    title: 'Poradnik Airdrop PAWS (2026): Zdobądź $PAWS bez klikania | Airdroplyx',
    description: 'Jak dołączyć za darmo do airdropu PAWS na Telegramie: punkty za staż konta, historię $NOT/$DOGS i podłączenie portfela Tonkeeper.',
    h1: 'PAWS ($PAWS): Poradnik Airdropu Telegram i Śladu On-Chain',
    badge: 'Ekosystem TON • Darmowy',
    rewardLabel: 'Szacowana nagroda',
    costLabel: 'Koszt',
    snapshotLabel: 'Przewidywany okres',
    timeLabel: 'Czas dziennie',
    overviewHeading: 'Opis projektu',
    overview: 'PAWS to wiralowa aplikacja Telegram Mini App, która zdobyła ponad 25 milionów użytkowników w pierwszym tygodniu. Zamiast ciągłego stukania w ekran, PAWS przyznaje punkty $PAWS na podstawie wieku konta Telegram oraz historii w Notcoin ($NOT) i $DOGS.',
    tokenomicsHeading: 'Tokenomika $PAWS',
    tokenomics: '$PAWS pełni rolę tokena społecznościowego w ekosystemie TON, kierując większość początkowej puli do autentycznych, wieloletnich użytkowników Telegrama.',
    stepsHeading: 'Instrukcja krok po kroku',
    steps: [
      'Uruchom oficjalną aplikację PAWS na Telegramie i poczekaj na skanowanie profilu.',
      'Sprawdź bazową liczbę punktów $PAWS za wiek konta oraz udział w $NOT i $DOGS.',
      'Wykonaj wszystkie zadania społecznościowe w zakładce Tasks.',
      'Podłącz główny portfel Tonkeeper lub MyTonWallet z historią transakcji w sieci TON.',
      'Bierz udział w głosowaniach społeczności i odbieraj codzienne bonusy.'
    ],
    strategyHeading: 'Strategia maksymalizacji nagród',
    strategy: 'Podepnij ten sam portfel TON, którego używałeś przy $DOGS lub $NOT, i regularnie kończ zadania czasowe w zakładce Tasks.',
    sybilHeading: 'Ochrona Anti-Sybil i bezpieczeństwo',
    sybilSafety: 'Ponieważ punkty zależą od wieku ID Telegrama i zapisów on-chain, świeże farmy botów nie otrzymują niemal żadnych nagród. Nigdy nie udostępniaj swojej frazy seed.',
    faqHeading: 'Często zadawane pytania',
    faqs: [
      {
        q: 'Czy w PAWS trzeba klikać w ekran?',
        a: 'Nie, PAWS nie wymaga klikania; punkty wynikają z historii konta i wykonanych zadań.'
      },
      {
        q: 'Czy airdrop PAWS jest darmowy?',
        a: 'Tak, udział w projekcie jest całkowicie darmowy ($0).'
      }
    ],
    ctaText: 'Otwórz PAWS',
    englishVersionLabel: 'Wersja angielska'
  },

  // ================= NOT PIXEL (16 LANGUAGES) =================
  {
    id: 'not-pixel',
    slug: 'tr',
    lang: 'tr',
    flag: '🇹🇷',
    homeLabel: 'Ana Sayfa',
    hubLabel: 'Telegram Airdropları',
    hubHref: '/tr/telegram-airdroplari/',
    title: 'Not Pixel Airdrop Rehberi (2026): $PX Token Madenciliği | Airdroplyx',
    description: 'Notcoin ekibinin 1000x1000 piksel savaş oyunu Not Pixel ile ücretsiz $PX madenciliği, enerji yükseltmeleri ve Tonkeeper bağlantısı Türkçe rehberi.',
    h1: 'Not Pixel ($PX) Telegram Airdrop ve Piksel Madenciliği Rehberi',
    badge: 'Notcoin Ekosistemi • Ücretsiz',
    rewardLabel: 'Tahmini Ödül',
    costLabel: 'Maliyet',
    snapshotLabel: 'Beklenen Dönem',
    timeLabel: 'Günlük Süre',
    overviewHeading: 'Proje Özeti',
    overview: 'Not Pixel, orijinal Notcoin ($NOT) ekibi ve Open Builders tarafından geliştirilen devasa bir ortak piksel boyama oyunudur. Milyonlarca oyuncu Telegram içinde 1000x1000 boyutundaki dijital tuval üzerinde piksel boyayarak $PX madencilik gücü kazanır ve 8 saatlik pasif üretim havuzundan pay alır.',
    tokenomicsHeading: '$PX Tokenomik ve Dağıtım',
    tokenomics: '$PX tokenı TON blokzincirinde tamamen topluluk odaklı bir dağıtım modeliyle üretilecektir. Tıpkı Notcoin’de olduğu gibi, erken dönem piksel boyayıcıları ve aktif kadro (Squad) katılımcıları öncelikli olarak ödüllendirilir.',
    stepsHeading: 'Adım Adım Katılım Rehberi',
    steps: [
      'Resmi Not Pixel Telegram Mini Uygulamasını başlatın.',
      '1000x1000 tuval üzerinde bir koordinat ve renk seçerek ilk pikselinizi boyayın.',
      'Boosts sekmesine girip Paint Reward, Recharge Speed ve Energy Limit seviyelerini yükseltin.',
      'Tasks bölümündeki görevleri tamamlayarak anında ekstra enerji kazanın.',
      'Her 8 saatte bir madencilik kasasından biriken pasif $PX ödüllerinizi talep edin ve Tonkeeper bağlayın.'
    ],
    strategyHeading: 'Maksimum Ödül Stratejisi',
    strategy: 'İlk yükseltmelerde boyama hızı (Recharge Speed) ve enerji kapasitesine odaklanın. Aktif bir Squad (kadro) grubuna katılmak ve enerji doldukça düzenli piksel boyamak günlük $PX verimini belirgin biçimde artırır.',
    sybilHeading: 'Sybil Koruması ve Güvenlik',
    sybilSafety: 'Not Pixel, tuval koordinat doğrulaması ve enerji soğuma zamanlayıcıları ile otomatik tıklama botlarını tespit eder. Yalnızca manuel oynayın ve Tonkeeper kurtarma kelimelerinizi gizli tutun.',
    faqHeading: 'Sıkça Sorulan Sorular',
    faqs: [
      {
        q: 'Not Pixel oynamak ücretsiz mi?',
        a: 'Evet, Telegram içinde yatırım gerektirmeden tamamen ücretsiz ($0) oynanabilir.'
      },
      {
        q: 'Hangi cüzdanı bağlamalıyım?',
        a: 'TON ağını destekleyen Tonkeeper veya MyTonWallet cüzdanınızı bağlayabilirsiniz.'
      }
    ],
    ctaText: 'Not Pixel’i Başlat',
    englishVersionLabel: 'İngilizce Sürüm'
  },
  {
    id: 'not-pixel',
    slug: 'ru',
    lang: 'ru',
    flag: '🇷🇺',
    homeLabel: 'Главная',
    hubLabel: 'Telegram-аирдропы',
    hubHref: '/ru/telegram-airdrops/',
    title: 'Гайд по аирдропу Not Pixel (2026): майнинг $PX и тактика | Airdroplyx',
    description: 'Как майнить $PX в Not Pixel от команды Notcoin: закрашивание холста 1000x1000, прокачка бустов и подключение кошелька Tonkeeper в TON.',
    h1: 'Not Pixel ($PX): гайд по аирдропу и майнингу на холсте в Telegram',
    badge: 'Экосистема Notcoin • Бесплатно',
    rewardLabel: 'Ожидаемая награда',
    costLabel: 'Затраты',
    snapshotLabel: 'Ожидаемый период',
    timeLabel: 'Время в день',
    overviewHeading: 'Обзор проекта',
    overview: 'Not Pixel — масштабный совместный пиксельный холст 1000x1000 от команды Notcoin и Open Builders. Миллионы игроков закрашивают пиксели в реальном времени, увеличивая мощность пассивного майнинга токена $PX в сети TON.',
    tokenomicsHeading: 'Токеномика $PX',
    tokenomics: 'Токен $PX выпускается на блокчейне TON с комьюнити-распределением по модели Notcoin ($NOT) — без венчурных пресейлов и кабальных вестингов.',
    stepsHeading: 'Пошаговая инструкция',
    steps: [
      'Откройте официальный бот Not Pixel в Telegram.',
      'Выберите любую точку на холсте 1000x1000, подберите цвет и закрасьте первый пиксель.',
      'В разделе Boosts улучшайте Paint Reward, Recharge Speed и Energy Limit.',
      'Выполняйте задания во вкладке Tasks для мгновенного пополнения энергии.',
      'Собирайте пассивный доход $PX каждые 8 часов и привяжите кошелек Tonkeeper.'
    ],
    strategyHeading: 'Стратегия фарма',
    strategy: 'Сначала прокачивайте скорость восстановления энергии и максимальный запас, чтобы чаще ставить пиксели. Вступайте в активный Squad и забирайте пассивный майнинг каждые 8 часов.',
    sybilHeading: 'Защита от ботов и безопасность',
    sybilSafety: 'Система анализирует координаты на холсте и частоту нажатий, блокируя скрипты и автокликеры. Играйте вручную и не делитесь сид-фразой.',
    faqHeading: 'Частые вопросы',
    faqs: [
      {
        q: 'Бесплатно ли играть в Not Pixel?',
        a: 'Да, игра полностью бесплатна ($0) и не требует обязательных депозитов.'
      },
      {
        q: 'Какой кошелек подключить?',
        a: 'Рекомендуется Tonkeeper или MyTonWallet с поддержкой сети TON.'
      }
    ],
    ctaText: 'Открыть Not Pixel',
    englishVersionLabel: 'Английская версия'
  },
  {
    id: 'not-pixel',
    slug: 'id',
    lang: 'id',
    flag: '🇮🇩',
    homeLabel: 'Beranda',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/id/airdrop-telegram/',
    title: 'Panduan Airdrop Not Pixel (2026): Tambang $PX di TON | Airdroplyx',
    description: 'Panduan lengkap Not Pixel dari tim Notcoin di Telegram: cara mewarnai kanvas 1000x1000, upgrade boost energi, dan klaim $PX gratis.',
    h1: 'Not Pixel ($PX): Panduan Airdrop Telegram & Kanvas Piksel',
    badge: 'Ekosistem Notcoin • Gratis',
    rewardLabel: 'Estimasi Hadiah',
    costLabel: 'Biaya',
    snapshotLabel: 'Perkiraan Snapshot',
    timeLabel: 'Waktu Harian',
    overviewHeading: 'Ringkasan Proyek',
    overview: 'Not Pixel adalah proyek kanvas piksel kolaboratif 1000x1000 dari tim Notcoin ($NOT) dan Open Builders. Setiap piksel yang Anda warnai menghasilkan daya tambang pasif untuk mengumpulkan token $PX di jaringan TON.',
    tokenomicsHeading: 'Tokenomik $PX',
    tokenomics: 'Token $PX dicetak di blockchain TON dengan distribusi komunitas murni mengikuti jejak Notcoin, memprioritaskan pemain aktif tanpa alokasi privat yang merugikan.',
    stepsHeading: 'Langkah-Langkah Mengikuti Airdrop',
    steps: [
      'Buka Mini App resmi Not Pixel di Telegram.',
      'Pilih koordinat di kanvas 1000x1000 lalu warnai piksel pertama Anda.',
      'Masuk ke tab Boosts untuk meningkatkan Paint Reward, Recharge Speed, dan Energy Limit.',
      'Selesaikan misi di tab Tasks untuk mendapatkan tambahan energi instan.',
      'Klaim hasil tambang pasif $PX setiap 8 jam dan hubungkan dompet Tonkeeper.'
    ],
    strategyHeading: 'Strategi Maksimal',
    strategy: 'Prioritaskan peningkatan Recharge Speed dan Energy Cap terlebih dahulu, bergabunglah dengan Squad yang aktif, dan klaim pasif $PX setiap 8 jam.',
    sybilHeading: 'Keamanan & Anti-Sybil',
    sybilSafety: 'Not Pixel memeriksa pola koordinat dan jeda energi untuk mendeteksi skrip otomatis. Bermainlah secara wajar dan jaga kerahasiaan seed phrase Anda.',
    faqHeading: 'Pertanyaan Umum',
    faqs: [
      {
        q: 'Apakah Not Pixel gratis dimainkan?',
        a: 'Ya, Not Pixel 100% gratis ($0) langsung di dalam Telegram.'
      },
      {
        q: 'Dompet apa yang harus dihubungkan?',
        a: 'Gunakan dompet TON non-kustodial seperti Tonkeeper atau MyTonWallet.'
      }
    ],
    ctaText: 'Buka Not Pixel',
    englishVersionLabel: 'Versi Bahasa Inggris'
  },
  {
    id: 'not-pixel',
    slug: 'vi',
    lang: 'vi',
    flag: '🇻🇳',
    homeLabel: 'Trang chủ',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/vi/airdrop-telegram/',
    title: 'Hướng dẫn Airdrop Not Pixel (2026): Đào $PX trên TON | Airdroplyx',
    description: 'Cách chơi Not Pixel từ đội ngũ Notcoin trên Telegram: tô màu bảng 1000x1000, nâng cấp Boost năng lượng và kết nối ví Tonkeeper nhận $PX.',
    h1: 'Not Pixel ($PX): Hướng dẫn Airdrop Telegram & Đào Token',
    badge: 'Hệ sinh thái Notcoin • Miễn phí',
    rewardLabel: 'Phần thưởng dự kiến',
    costLabel: 'Chi phí',
    snapshotLabel: 'Thời gian dự kiến',
    timeLabel: 'Thời gian mỗi ngày',
    overviewHeading: 'Tổng quan dự án',
    overview: 'Not Pixel là trò chơi vẽ pixel hợp tác quy mô lớn 1000x1000 do đội ngũ Notcoin ($NOT) và Open Builders phát triển. Mỗi điểm ảnh bạn tô giúp tăng tốc độ đào thụ động token $PX trên mạng TON.',
    tokenomicsHeading: 'Tokenomics $PX',
    tokenomics: 'Token $PX được phát hành trên blockchain TON theo mô hình phân phối cộng đồng thuần túy giống Notcoin, ưu tiên người chơi thực thụ.',
    stepsHeading: 'Các bước tham gia chi tiết',
    steps: [
      'Khởi chạy Mini-App chính thức của Not Pixel trên Telegram.',
      'Chọn một tọa độ trên bảng 1000x1000, chọn màu và tô pixel đầu tiên.',
      'Vào mục Boosts để nâng cấp Paint Reward, Recharge Speed và Energy Limit.',
      'Hoàn thành nhiệm vụ ở mục Tasks để nhận thêm năng lượng miễn phí.',
      'Quay lại mỗi 8 giờ để nhận $PX thụ động và kết nối ví Tonkeeper.'
    ],
    strategyHeading: 'Chiến lược tối ưu điểm',
    strategy: 'Ưu tiên nâng Recharge Speed và Energy Limit trước, tham gia một Squad đông đảo và thu hoạch $PX thụ động đều đặn mỗi 8 giờ.',
    sybilHeading: 'Chống Sybil & Bảo mật',
    sybilSafety: 'Hệ thống kiểm tra tọa độ vẽ và thời gian hồi năng lượng để chặn auto-click. Hãy chơi thủ công và tuyệt đối giữ bí mật cụm từ khôi phục ví.',
    faqHeading: 'Câu hỏi thường gặp',
    faqs: [
      {
        q: 'Chơi Not Pixel có mất phí không?',
        a: 'Không, Not Pixel hoàn toàn miễn phí ($0) trên Telegram.'
      },
      {
        q: 'Nên dùng ví nào cho Not Pixel?',
        a: 'Bạn nên kết nối Tonkeeper hoặc MyTonWallet hỗ trợ mạng TON.'
      }
    ],
    ctaText: 'Mở Not Pixel',
    englishVersionLabel: 'Bản tiếng Anh'
  },
  {
    id: 'not-pixel',
    slug: 'es',
    lang: 'es',
    flag: '🇪🇸',
    homeLabel: 'Inicio',
    hubLabel: 'Airdrops de Telegram',
    hubHref: '/es/airdrops-telegram/',
    title: 'Guía Airdrop Not Pixel (2026): Minar $PX en Telegram | Airdroplyx',
    description: 'Guía de Not Pixel del equipo de Notcoin: pinta píxeles en el lienzo 1000x1000, mejora tus boosts de energía y conecta Tonkeeper para ganar $PX.',
    h1: 'Not Pixel ($PX): Guía del Airdrop en Telegram y Minería de Píxeles',
    badge: 'Ecosistema Notcoin • Gratis',
    rewardLabel: 'Recompensa estimada',
    costLabel: 'Costo',
    snapshotLabel: 'Periodo estimado',
    timeLabel: 'Tiempo diario',
    overviewHeading: 'Resumen del proyecto',
    overview: 'Not Pixel es un lienzo colaborativo de 1000x1000 píxeles creado por el equipo de Notcoin ($NOT) y Open Builders. Cada píxel pintado aporta potencia de minería pasiva para acumular tokens $PX en la red TON.',
    tokenomicsHeading: 'Tokenomics de $PX',
    tokenomics: 'El token $PX se emitirá en TON siguiendo una distribución puramente comunitaria al estilo Notcoin, premiando a los jugadores activos.',
    stepsHeading: 'Pasos para participar',
    steps: [
      'Abre la Mini App oficial de Not Pixel en Telegram.',
      'Elige cualquier coordenada en el lienzo 1000x1000 y pinta tu primer píxel.',
      'Entra en la pestaña Boosts para mejorar Paint Reward, Recharge Speed y Energy Limit.',
      'Completa misiones en Tasks para recargar energía extra al instante.',
      'Reclama tus $PX pasivos cada 8 horas y vincula tu billetera Tonkeeper.'
    ],
    strategyHeading: 'Estrategia para maximizar recompensas',
    strategy: 'Mejora primero la velocidad de recarga y el límite de energía, únete a un Squad activo y recoge tu producción pasiva cada 8 horas.',
    sybilHeading: 'Seguridad y protección Sybil',
    sybilSafety: 'Not Pixel verifica coordenadas y tiempos de recarga para frenar bots. Juega manualmente y nunca reveles tu frase semilla.',
    faqHeading: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Es gratis jugar a Not Pixel?',
        a: 'Sí, es 100% gratuito ($0) dentro de Telegram sin depósitos obligatorios.'
      },
      {
        q: '¿Qué billetera debo conectar?',
        a: 'Conecta Tonkeeper o MyTonWallet en la red TON.'
      }
    ],
    ctaText: 'Abrir Not Pixel',
    englishVersionLabel: 'Versión en inglés'
  },
  {
    id: 'not-pixel',
    slug: 'pt',
    lang: 'pt',
    flag: '🇧🇷',
    homeLabel: 'Início',
    hubLabel: 'Airdrops do Telegram',
    hubHref: '/pt/airdrops-telegram/',
    title: 'Guia Airdrop Not Pixel (2026): Minerar $PX na TON | Airdroplyx',
    description: 'Aprenda a minerar $PX no Not Pixel da equipe Notcoin: pinte pixels na tela 1000x1000, evolua boosts de energia e conecte a Tonkeeper grátis.',
    h1: 'Not Pixel ($PX): Guia do Airdrop no Telegram e Mineração',
    badge: 'Ecossistema Notcoin • Grátis',
    rewardLabel: 'Recompensa estimada',
    costLabel: 'Custo',
    snapshotLabel: 'Previsão',
    timeLabel: 'Tempo diário',
    overviewHeading: 'Visão geral do projeto',
    overview: 'Not Pixel é um painel colaborativo de 1000x1000 pixels criado pela equipe do Notcoin ($NOT) e Open Builders. Cada pixel pintado aumenta sua taxa de mineração passiva de tokens $PX na rede TON.',
    tokenomicsHeading: 'Tokenomics do $PX',
    tokenomics: 'O token $PX será emitido na blockchain TON com distribuição voltada à comunidade, seguindo o modelo justo do Notcoin.',
    stepsHeading: 'Passo a passo para participar',
    steps: [
      'Inicie o Mini App oficial do Not Pixel no Telegram.',
      'Selecione uma coordenada no painel 1000x1000 e pinte seu primeiro pixel.',
      'Acesse a aba Boosts para evoluir Paint Reward, Recharge Speed e Energy Limit.',
      'Conclua tarefas na aba Tasks para ganhar recargas instantâneas de energia.',
      'Resgate sua mineração passiva de $PX a cada 8 horas e conecte a Tonkeeper.'
    ],
    strategyHeading: 'Estratégia de ganhos',
    strategy: 'Evolua primeiro Recharge Speed e Energy Cap, entre em um Squad ativo e faça o resgate do cofre a cada 8 horas.',
    sybilHeading: 'Proteção Sybil e segurança',
    sybilSafety: 'O sistema monitora coordenadas e intervalos de energia contra scripts automáticos. Jogue manualmente e proteja sua frase de recuperação.',
    faqHeading: 'Perguntas frequentes',
    faqs: [
      {
        q: 'Not Pixel é gratuito?',
        a: 'Sim, totalmente gratuito ($0) no Telegram.'
      },
      {
        q: 'Qual carteira conectar?',
        a: 'Use Tonkeeper ou MyTonWallet na rede TON.'
      }
    ],
    ctaText: 'Abrir Not Pixel',
    englishVersionLabel: 'Versão em inglês'
  },
  {
    id: 'not-pixel',
    slug: 'ko',
    lang: 'ko',
    flag: '🇰🇷',
    homeLabel: '홈',
    hubLabel: '텔레그램 에어드랍',
    hubHref: '/ko/telegram-airdrops/',
    title: 'Not Pixel 에어드랍 가이드 (2026): $PX 토큰 무료 채굴 | Airdroplyx',
    description: 'Notcoin 팀이 만든 1000x1000 픽셀 게임 Not Pixel 공략: 부스트 업그레이드, 8시간 패시브 채굴 및 Tonkeeper 지갑 연동 가이드.',
    h1: 'Not Pixel ($PX) 텔레그램 에어드랍 및 픽셀 채굴 가이드',
    badge: 'Notcoin 생태계 • 무료',
    rewardLabel: '예상 보상',
    costLabel: '비용',
    snapshotLabel: '예상 시기',
    timeLabel: '일일 소요 시간',
    overviewHeading: '프로젝트 개요',
    overview: 'Not Pixel은 Notcoin($NOT) 개발팀과 Open Builders가 선보인 대규모 1000x1000 협업 픽셀 캔버스 게임입니다. 텔레그램에서 픽셀을 칠할 때마다 TON 기반 $PX 토큰 채굴량이 늘어납니다.',
    tokenomicsHeading: '$PX 토크노믹스',
    tokenomics: '$PX는 Notcoin의 커뮤니티 중심 배포 모델을 계승해 TON 블록체인에서 발행되며, 활발한 픽셀 참여자에게 보상이 돌아갑니다.',
    stepsHeading: '단계별 참여 방법',
    steps: [
      '텔레그램에서 공식 Not Pixel 미니앱을 실행하세요.',
      '1000x1000 캔버스에서 원하는 위치와 색상을 골라 첫 픽셀을 칠하세요.',
      'Boosts 탭에서 Paint Reward, Recharge Speed, Energy Limit을 업그레이드하세요.',
      'Tasks 탭의 미션을 완료해 추가 에너지를 즉시 충전하세요.',
      '8시간마다 패시브 $PX 채굴량을 수령하고 Tonkeeper 지갑을 연결하세요.'
    ],
    strategyHeading: '보상 극대화 전략',
    strategy: '초반에는 에너지 충전 속도와 최대 에너지 한도를 우선 업그레이드하고, 활성 Squad에 합류해 8시간마다 꾸준히 수령하세요.',
    sybilHeading: '시빌 방지 및 보안',
    sybilSafety: '좌표 검증과 에너지 쿨다운으로 자동 매크로를 차단합니다. 직접 플레이하고 지갑 복구 구문을 안전하게 보관하세요.',
    faqHeading: '자주 묻는 질문',
    faqs: [
      {
        q: 'Not Pixel은 무료로 즐길 수 있나요?',
        a: '네, 별도 입금 없이 무료($0)로 참여할 수 있습니다.'
      },
      {
        q: '어떤 지갑을 연결해야 하나요?',
        a: 'Tonkeeper 또는 MyTonWallet 같은 비수탁 TON 지갑을 연결하세요.'
      }
    ],
    ctaText: 'Not Pixel 시작하기',
    englishVersionLabel: '영문 버전'
  },
  {
    id: 'not-pixel',
    slug: 'ja',
    lang: 'ja',
    flag: '🇯🇵',
    homeLabel: 'ホーム',
    hubLabel: 'Telegramエアドロップ',
    hubHref: '/ja/telegram-airdrops/',
    title: 'Not Pixel エアドロップ攻略 (2026): $PXマイニング手順 | Airdroplyx',
    description: 'Notcoin開発チームの1000x1000ピクセルゲームNot Pixel完全ガイド：ブースト強化、8時間ごとの$PX回収、Tonkeeper連携方法。',
    h1: 'Not Pixel ($PX) Telegramエアドロップ＆ピクセル採掘ガイド',
    badge: 'Notcoinエコシステム • 無料',
    rewardLabel: '予想報酬',
    costLabel: '費用',
    snapshotLabel: '予定時期',
    timeLabel: '1日の作業時間',
    overviewHeading: 'プロジェクト概要',
    overview: 'Not Pixelは、Notcoin（$NOT）チームとOpen Buildersが手掛ける1000×1000の巨大コラボピクセルゲームです。キャンバスを塗るたびにTON上の$PXトークン採掘パワーが蓄積されます。',
    tokenomicsHeading: '$PX トケノミクス',
    tokenomics: '$PXはNotcoin同様にコミュニティ主体の配布モデルを採用し、TONブロックチェーン上で発行されます。',
    stepsHeading: '参加ステップ',
    steps: [
      'Telegramで公式Not Pixelミニアプリを起動します。',
      '1000×1000キャンバス上の座標と色を選び、最初のピクセルを塗ります。',
      'BoostsタブでPaint Reward、Recharge Speed、Energy Limitを強化します。',
      'Tasksタブのクエストを完了してエネルギーを即時補充します。',
      '8時間ごとにパッシブ$PXを回収し、Tonkeeperウォレットを接続します。'
    ],
    strategyHeading: '報酬最大化のコツ',
    strategy: '序盤はエネルギー回復速度と上限アップを優先し、アクティブなSquadに参加して8時間ごとの回収を継続しましょう。',
    sybilHeading: 'シビル対策と安全性',
    sybilSafety: '座標チェックとエネルギークールダウンにより自動化ボットを検知・排除しています。手動プレイを心がけ、シードフレーズは共有しないでください。',
    faqHeading: 'よくある質問',
    faqs: [
      {
        q: 'Not Pixelは無料で遊べますか？',
        a: 'はい、入金不要の完全無料（$0）で参加できます。'
      },
      {
        q: 'どのウォレットを接続すればよいですか？',
        a: 'TON対応のTonkeeperまたはMyTonWalletを接続してください。'
      }
    ],
    ctaText: 'Not Pixelを開く',
    englishVersionLabel: '英語版を見る'
  },
  {
    id: 'not-pixel',
    slug: 'ar',
    lang: 'ar',
    flag: '🇸🇦',
    homeLabel: 'الرئيسية',
    hubLabel: 'إيردروبات تيليجرام',
    hubHref: '/ar/telegram-airdrops/',
    title: 'دليل إيردروب Not Pixel (2026): تعدين $PX وربط Tonkeeper | Airdroplyx',
    description: 'دليل شامل للعبة Not Pixel من فريق Notcoin على تيليجرام: تلوين لوحة 1000x1000، ترقية الطاقة وتعدين عملة $PX مجاناً على شبكة TON.',
    h1: 'Not Pixel ($PX): دليل إيردروب تيليجرام وتعدين البكسلات',
    badge: 'نظام Notcoin • مجاني',
    rewardLabel: 'المكافأة المتوقعة',
    costLabel: 'التكلفة',
    snapshotLabel: 'الفترة المتوقعة',
    timeLabel: 'الوقت اليومي',
    overviewHeading: 'نظرة عامة على المشروع',
    overview: 'تطبيق Not Pixel هو لوحة تلوين جماعية بحجم 1000x1000 بكسل من تطوير فريق Notcoin ($NOT) وOpen Builders. كل بكسل تقوم بتلوينه يمنحك قوة تعدين سلبية لجمع عملة $PX على شبكة TON.',
    tokenomicsHeading: 'اقتصاديات $PX',
    tokenomics: 'سيتم إصدار عملة $PX على بلوكشين TON بتوزيع مجتمعي خالص على غرار Notcoin، لمكافأة اللاعبين النشطين.',
    stepsHeading: 'خطوات المشاركة',
    steps: [
      'افتح تطبيق Not Pixel الرسمي داخل تيليجرام.',
      'اختر أي إحداثيات على لوحة 1000x1000 ولوّن البكسل الأول الخاص بك.',
      'ادخل إلى تبويب Boosts وقم بترقية Paint Reward وRecharge Speed وEnergy Limit.',
      'أكمل المهام في تبويب Tasks للحصول على تعبئة فورية للطاقة.',
      'طالب بأرباح التعدين السلبية لـ $PX كل 8 ساعات واربط محفظة Tonkeeper.'
    ],
    strategyHeading: 'استراتيجية تعظيم المكافآت',
    strategy: 'ركّز في البداية على سرعة شحن الطاقة وسعتها، وانضم إلى Squad نشط، واجمع التعدين السلبي كل 8 ساعات.',
    sybilHeading: 'الحماية من الحسابات الوهمية والأمان',
    sybilSafety: 'يتحقق Not Pixel من إحداثيات الرسم ومؤقتات الطاقة لاستبعاد برامج النقر التلقائي. العب يدوياً واحفظ عبارة الاسترداد بسرية تامة.',
    faqHeading: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'هل اللعب في Not Pixel مجاني؟',
        a: 'نعم، اللعبة مجانية 100% ($0) داخل تيليجرام بدون أي إيداعات إلزامية.'
      },
      {
        q: 'ما المحفظة المناسبة للربط؟',
        a: 'اربط محفظة Tonkeeper أو MyTonWallet الداعمة لشبكة TON.'
      }
    ],
    ctaText: 'افتح Not Pixel',
    englishVersionLabel: 'النسخة الإنجليزية'
  },
  {
    id: 'not-pixel',
    slug: 'de',
    lang: 'de',
    flag: '🇩🇪',
    homeLabel: 'Startseite',
    hubLabel: 'Telegram-Airdrops',
    hubHref: '/de/telegram-airdrops/',
    title: 'Not Pixel Airdrop Guide (2026): $PX Token kostenlos minen | Airdroplyx',
    description: 'Anleitung für Not Pixel vom Notcoin-Team: Pixel auf der 1000x1000-Leinwand malen, Boosts verbessern und Tonkeeper für $PX verbinden.',
    h1: 'Not Pixel ($PX): Telegram-Airdrop & Pixel-Mining Guide',
    badge: 'Notcoin-Ökosystem • Kostenlos',
    rewardLabel: 'Geschätzte Belohnung',
    costLabel: 'Kosten',
    snapshotLabel: 'Erwarteter Zeitraum',
    timeLabel: 'Täglicher Aufwand',
    overviewHeading: 'Projektübersicht',
    overview: 'Not Pixel ist eine kollaborative 1000x1000-Pixel-Leinwand vom Notcoin-Team ($NOT) und Open Builders. Jeder gemalte Pixel erhöht deine passive Mining-Rate für den $PX-Token im TON-Netzwerk.',
    tokenomicsHeading: '$PX Tokenomics',
    tokenomics: 'Der $PX-Token wird auf der TON-Blockchain mit reiner Community-Verteilung nach dem Vorbild von Notcoin ausgegeben.',
    stepsHeading: 'Schritt-für-Schritt-Anleitung',
    steps: [
      'Starte die offizielle Not Pixel Mini App in Telegram.',
      'Wähle eine Position auf der 1000x1000-Leinwand und male deinen ersten Pixel.',
      'Verbessere unter Boosts deine Werte für Paint Reward, Recharge Speed und Energy Limit.',
      'Erledige Aufgaben im Reiter Tasks für sofortige Energie-Nachschübe.',
      'Sammle alle 8 Stunden deine passiven $PX-Erträge ein und verbinde Tonkeeper.'
    ],
    strategyHeading: 'Strategie für maximale Punkte',
    strategy: 'Steigere zuerst Recharge Speed und Energy Cap, tritt einem aktiven Squad bei und leere den Mining-Tresor alle 8 Stunden.',
    sybilHeading: 'Sybil-Schutz & Sicherheit',
    sybilSafety: 'Not Pixel prüft Koordinaten und Energie-Timer gegen automatisierte Klick-Skripte. Spiele manuell und teile niemals deine Seed-Phrase.',
    faqHeading: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Ist Not Pixel kostenlos spielbar?',
        a: 'Ja, das Spiel ist in Telegram zu 100 % kostenlos ($0).'
      },
      {
        q: 'Welche Wallet sollte ich verbinden?',
        a: 'Verbinde Tonkeeper oder MyTonWallet im TON-Netzwerk.'
      }
    ],
    ctaText: 'Not Pixel öffnen',
    englishVersionLabel: 'Englische Version'
  },
  {
    id: 'not-pixel',
    slug: 'fr',
    lang: 'fr',
    flag: '🇫🇷',
    homeLabel: 'Accueil',
    hubLabel: 'Airdrops Telegram',
    hubHref: '/fr/airdrops-telegram/',
    title: 'Guide Airdrop Not Pixel (2026) : Miner $PX sur TON | Airdroplyx',
    description: 'Comment jouer gratuitement à Not Pixel de l’équipe Notcoin : peignez des pixels sur la grille 1000x1000, améliorez vos boosts et liez Tonkeeper.',
    h1: 'Not Pixel ($PX) : Guide Airdrop Telegram et Minage de Pixels',
    badge: 'Écosystème Notcoin • Gratuit',
    rewardLabel: 'Récompense estimée',
    costLabel: 'Coût',
    snapshotLabel: 'Période estimée',
    timeLabel: 'Temps quotidien',
    overviewHeading: 'Présentation du projet',
    overview: 'Not Pixel est une toile collaborative de 1000x1000 pixels créée par l’équipe de Notcoin ($NOT) et Open Builders. Chaque pixel peint augmente votre puissance de minage passif du jeton $PX sur TON.',
    tokenomicsHeading: 'Tokenomics de $PX',
    tokenomics: 'Le jeton $PX sera émis sur la blockchain TON avec une distribution communautaire fidèle au modèle Notcoin.',
    stepsHeading: 'Étapes pour participer',
    steps: [
      'Lancez la Mini App officielle Not Pixel sur Telegram.',
      'Choisissez une case sur la grille 1000x1000 et peignez votre premier pixel.',
      'Rendez-vous dans Boosts pour améliorer Paint Reward, Recharge Speed et Energy Limit.',
      'Complétez les quêtes de l’onglet Tasks pour recevoir des recharges d’énergie immédiates.',
      'Réclamez votre rendement passif $PX toutes les 8 heures et connectez Tonkeeper.'
    ],
    strategyHeading: 'Stratégie d’optimisation',
    strategy: 'Améliorez d’abord Recharge Speed et Energy Cap, rejoignez un Squad actif et videz le coffre toutes les 8 heures.',
    sybilHeading: 'Protection Anti-Sybil et sécurité',
    sybilSafety: 'Not Pixel analyse les coordonnées et les délais d’énergie pour bloquer les scripts. Jouez manuellement et gardez votre phrase secrète confidentielle.',
    faqHeading: 'Questions fréquentes',
    faqs: [
      {
        q: 'Not Pixel est-il gratuit ?',
        a: 'Oui, Not Pixel est 100 % gratuit ($0) sur Telegram sans dépôt requis.'
      },
      {
        q: 'Quel portefeuille connecter ?',
        a: 'Utilisez Tonkeeper ou MyTonWallet sur le réseau TON.'
      }
    ],
    ctaText: 'Ouvrir Not Pixel',
    englishVersionLabel: 'Version anglaise'
  },
  {
    id: 'not-pixel',
    slug: 'uk',
    lang: 'uk',
    flag: '🇺🇦',
    homeLabel: 'Головна',
    hubLabel: 'Telegram-аірдропи',
    hubHref: '/uk/telegram-airdrops/',
    title: 'Гайд з аірдропу Not Pixel (2026): майнінг $PX у TON | Airdroplyx',
    description: 'Як майнити $PX у Not Pixel від команди Notcoin: розфарбовуйте полотно 1000x1000, качайте бусти та підключайте Tonkeeper безкоштовно.',
    h1: 'Not Pixel ($PX): гайд з аірдропу та піксельного майнінгу',
    badge: 'Екосистема Notcoin • Безкоштовно',
    rewardLabel: 'Очікувана винагорода',
    costLabel: 'Витрати',
    snapshotLabel: 'Очікуваний період',
    timeLabel: 'Час на день',
    overviewHeading: 'Огляд проєкту',
    overview: 'Not Pixel — масштабне спільне піксельне полотно 1000x1000 від команди Notcoin ($NOT) і Open Builders. Кожен зафарбований піксель підвищує швидкість пасивного майнінгу токена $PX у мережі TON.',
    tokenomicsHeading: 'Токеноміка $PX',
    tokenomics: 'Токен $PX випускається на блокчейні TON із чисто ком’юніті-розподілом за моделлю Notcoin.',
    stepsHeading: 'Покрокова інструкція',
    steps: [
      'Відкрийте офіційний міні-додаток Not Pixel у Telegram.',
      'Оберіть координату на полотні 1000x1000 та зафарбуйте перший піксель.',
      'У вкладці Boosts покращуйте Paint Reward, Recharge Speed та Energy Limit.',
      'Виконуйте завдання у розділі Tasks для миттєвого поповнення енергії.',
      'Збирайте пасивний $PX кожні 8 годин і підключіть гаманець Tonkeeper.'
    ],
    strategyHeading: 'Стратегія максимізації нагород',
    strategy: 'На старті качайте швидкість відновлення енергії та її ліміт, приєднуйтесь до активного Squad і забирайте майнінг кожні 8 годин.',
    sybilHeading: 'Захист від Sybil та безпека',
    sybilSafety: 'Not Pixel відстежує координати та таймери енергії, блокуючи автоклікери. Грайте вручну та не розголошуйте сід-фразу.',
    faqHeading: 'Часті запитання',
    faqs: [
      {
        q: 'Чи безкоштовно грати в Not Pixel?',
        a: 'Так, гра повністю безкоштовна ($0) і не потребує вкладень.'
      },
      {
        q: 'Який гаманець підключити?',
        a: 'Tonkeeper або MyTonWallet із підтримкою мережі TON.'
      }
    ],
    ctaText: 'Відкрити Not Pixel',
    englishVersionLabel: 'Англійська версія'
  },
  {
    id: 'not-pixel',
    slug: 'zh',
    lang: 'zh-CN',
    flag: '🇨🇳',
    homeLabel: '首页',
    hubLabel: 'Telegram 空投',
    hubHref: '/zh/telegram-airdrops/',
    title: 'Not Pixel 空投教程 (2026)：Notcoin 团队 $PX 像素挖矿 | Airdroplyx',
    description: 'Notcoin 团队打造的 1000x1000 像素画布游戏 Not Pixel 完整指南：涂色升级精力、每 8 小时领取 $PX 及绑定 Tonkeeper。',
    h1: 'Not Pixel ($PX) Telegram 空投及像素挖矿指南',
    badge: 'Notcoin 生态 • 零撸免费',
    rewardLabel: '预估奖励',
    costLabel: '参与成本',
    snapshotLabel: '预期周期',
    timeLabel: '每日耗时',
    overviewHeading: '项目简介',
    overview: 'Not Pixel 是由 Notcoin ($NOT) 原班团队与 Open Builders 推出的 1000x1000 多人协作像素画布小程序。每次涂色都会提升你在 TON 链上 $PX 代币的被动挖矿算力。',
    tokenomicsHeading: '$PX 代币经济',
    tokenomics: '$PX 将在 TON 区块链发行，延续 Notcoin 纯社区公平分发理念，重点奖励持续参与涂色的玩家。',
    stepsHeading: '详细参与步骤',
    steps: [
      '在 Telegram 中打开官方 Not Pixel 小程序。',
      '在 1000x1000 画布上任选坐标与颜色，涂下你的第一个像素。',
      '前往 Boosts 页面优先升级 Paint Reward、Recharge Speed 与 Energy Limit。',
      '完成 Tasks 中的任务以立即获得额外精力补充。',
      '每 8 小时领取一次矿池产出的被动 $PX，并绑定 Tonkeeper 钱包。'
    ],
    strategyHeading: '高收益策略',
    strategy: '前期优先提升精力恢复速度与精力上限，加入活跃的 Squad 小队，并坚持每 8 小时领取一次被动收益。',
    sybilHeading: '防女巫机制与安全提示',
    sybilSafety: '系统通过坐标校验与冷却计时器检测自动化脚本。请保持纯手动操作，并妥善保管钱包助记词。',
    faqHeading: '常见问题',
    faqs: [
      {
        q: '玩 Not Pixel 需要花钱吗？',
        a: '不需要，Telegram 内即可完全免费（$0）游玩与挖矿。'
      },
      {
        q: '需要绑定什么钱包？',
        a: '请绑定支持 TON 网络的 Tonkeeper 或 MyTonWallet。'
      }
    ],
    ctaText: '打开 Not Pixel',
    englishVersionLabel: '英文原版'
  },
  {
    id: 'not-pixel',
    slug: 'hi',
    lang: 'hi',
    flag: '🇮🇳',
    homeLabel: 'होम',
    hubLabel: 'टेलीग्राम एयरड्रॉप',
    hubHref: '/hi/telegram-airdrops/',
    title: 'Not Pixel एयरड्रॉप गाइड (2026): $PX टोकन माइनिंग | Airdroplyx',
    description: 'Notcoin टीम के 1000x1000 पिक्सल गेम Not Pixel में मुफ्त $PX कमाने की गाइड: एनर्जी बूस्ट, हर 8 घंटे में क्लेम और Tonkeeper कनेक्शन।',
    h1: 'Not Pixel ($PX) टेलीग्राम एयरड्रॉप और पिक्सल माइनिंग गाइड',
    badge: 'Notcoin इकोसिस्टम • मुफ़्त',
    rewardLabel: 'अनुमानित इनाम',
    costLabel: 'लागत',
    snapshotLabel: 'अनुमानित समय',
    timeLabel: 'दैनिक समय',
    overviewHeading: 'प्रोजेक्ट का परिचय',
    overview: 'Not Pixel, Notcoin ($NOT) टीम और Open Builders द्वारा बनाया गया 1000x1000 पिक्सल कैनवास गेम है। आपके द्वारा पेंट किया गया हर पिक्सल TON नेटवर्क पर $PX टोकन की पैसिव माइनिंग स्पीड बढ़ाता है।',
    tokenomicsHeading: '$PX टोकनॉमिक्स',
    tokenomics: '$PX टोकन Notcoin की तरह शुद्ध कम्युनिटी डिस्ट्रीब्यूशन मॉडल के साथ TON ब्लॉकचेन पर जारी किया जाएगा।',
    stepsHeading: 'भाग लेने के आसान चरण',
    steps: [
      'Telegram में आधिकारिक Not Pixel मिनी-ऐप खोलें।',
      '1000x1000 कैनवास पर कोई भी स्थान और रंग चुनकर अपना पहला पिक्सल पेंट करें।',
      'Boosts टैब में जाकर Paint Reward, Recharge Speed और Energy Limit अपग्रेड करें।',
      'तुरंत अतिरिक्त एनर्जी पाने के लिए Tasks टैब के मिशन पूरे करें।',
      'हर 8 घंटे में पैसिव $PX क्लेम करें और Tonkeeper वॉलेट जोड़ें।'
    ],
    strategyHeading: 'अधिकतम इनाम की रणनीति',
    strategy: 'पहले Recharge Speed और Energy Cap अपग्रेड करें, एक सक्रिय Squad से जुड़ें और हर 8 घंटे में माइनिंग वॉल्ट से टोकन क्लेम करें।',
    sybilHeading: 'सिबिल सुरक्षा और सावधानियाँ',
    sybilSafety: 'सिस्टम बॉट्स को पकड़ने के लिए कोऑर्डिनेट और एनर्जी टाइमर जांचता है। मैन्युअल रूप से खेलें और सीड फ्रेज़ कभी साझा न करें।',
    faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: [
      {
        q: 'क्या Not Pixel खेलना मुफ़्त है?',
        a: 'हाँ, यह Telegram में बिना किसी जमा राशि के 100% मुफ़्त ($0) है।'
      },
      {
        q: 'कौन सा वॉलेट जोड़ना चाहिए?',
        a: 'TON नेटवर्क सपोर्ट करने वाला Tonkeeper या MyTonWallet जोड़ें।'
      }
    ],
    ctaText: 'Not Pixel खोलें',
    englishVersionLabel: 'अंग्रेज़ी संस्करण'
  },
  {
    id: 'not-pixel',
    slug: 'it',
    lang: 'it',
    flag: '🇮🇹',
    homeLabel: 'Home',
    hubLabel: 'Airdrop Telegram',
    hubHref: '/it/airdrop-telegram/',
    title: 'Guida Airdrop Not Pixel (2026): Minare $PX su TON | Airdroplyx',
    description: 'Come minare $PX gratis con Not Pixel del team Notcoin su Telegram: dipingi pixel sulla tela 1000x1000, potenzia i boost e collega Tonkeeper.',
    h1: 'Not Pixel ($PX): Guida Airdrop Telegram e Mining dei Pixel',
    badge: 'Ecosistema Notcoin • Gratis',
    rewardLabel: 'Ricompensa stimata',
    costLabel: 'Costo',
    snapshotLabel: 'Periodo previsto',
    timeLabel: 'Tempo giornaliero',
    overviewHeading: 'Panoramica del progetto',
    overview: 'Not Pixel è una tela collaborativa 1000x1000 creata dal team di Notcoin ($NOT) e Open Builders. Ogni pixel colorato aumenta la potenza di mining passivo per accumulare token $PX sulla rete TON.',
    tokenomicsHeading: 'Tokenomics di $PX',
    tokenomics: 'Il token $PX verrà emesso su blockchain TON con distribuzione puramente comunitaria secondo il modello Notcoin.',
    stepsHeading: 'Come partecipare passo dopo passo',
    steps: [
      'Avvia la Mini App ufficiale di Not Pixel su Telegram.',
      'Seleziona una coordinata sulla tela 1000x1000 e dipingi il tuo primo pixel.',
      'Apri la scheda Boosts per potenziare Paint Reward, Recharge Speed ed Energy Limit.',
      'Completa le missioni nella sezione Tasks per ricaricare subito l’energia.',
      'Riscatta i $PX passivi ogni 8 ore e collega il wallet Tonkeeper.'
    ],
    strategyHeading: 'Strategia per massimizzare i punti',
    strategy: 'Potenzia per primi velocità di ricarica e capacità energetica, unisciti a una Squad attiva e riscatta il caveau ogni 8 ore.',
    sybilHeading: 'Sicurezza e protezione Sybil',
    sybilSafety: 'Not Pixel controlla coordinate e timer dell’energia per escludere script automatici. Gioca manualmente e custodisci la tua frase seed.',
    faqHeading: 'Domande frequenti',
    faqs: [
      {
        q: 'Not Pixel è gratuito?',
        a: 'Sì, è gratuito al 100% ($0) su Telegram senza depositi richiesti.'
      },
      {
        q: 'Quale wallet devo collegare?',
        a: 'Usa Tonkeeper o MyTonWallet compatibili con la rete TON.'
      }
    ],
    ctaText: 'Apri Not Pixel',
    englishVersionLabel: 'Versione inglese'
  },
  {
    id: 'not-pixel',
    slug: 'pl',
    lang: 'pl',
    flag: '🇵🇱',
    homeLabel: 'Strona główna',
    hubLabel: 'Airdropy Telegram',
    hubHref: '/pl/airdrop-telegram/',
    title: 'Poradnik Airdrop Not Pixel (2026): Wydobycie $PX w TON | Airdroplyx',
    description: 'Jak kopać $PX w Not Pixel od twórców Notcoin: maluj piksele na planszy 1000x1000, ulepszaj boosty energii i podłącz portfel Tonkeeper.',
    h1: 'Not Pixel ($PX): Poradnik Airdropu Telegram i Kopania Pikseli',
    badge: 'Ekosystem Notcoin • Darmowy',
    rewardLabel: 'Szacowana nagroda',
    costLabel: 'Koszt',
    snapshotLabel: 'Przewidywany okres',
    timeLabel: 'Czas dziennie',
    overviewHeading: 'Opis projektu',
    overview: 'Not Pixel to wspólna plansza 1000x1000 pikseli stworzona przez zespół Notcoin ($NOT) oraz Open Builders. Każdy zamalowany piksel zwiększa moc pasywnego wydobycia tokenów $PX w sieci TON.',
    tokenomicsHeading: 'Tokenomika $PX',
    tokenomics: 'Token $PX zostanie wydany na blockchainie TON z pełną dystrybucją społecznościową na wzór Notcoin.',
    stepsHeading: 'Instrukcja krok po kroku',
    steps: [
      'Uruchom oficjalną aplikację Not Pixel na Telegramie.',
      'Wybierz dowolne miejsce na siatce 1000x1000 i pomaluj swój pierwszy piksel.',
      'Przejdź do zakładki Boosts, aby ulepszyć Paint Reward, Recharge Speed i Energy Limit.',
      'Wykonuj zadania w zakładce Tasks po natychmiastowe doładowania energii.',
      'Odbieraj pasywne $PX co 8 godzin i podłącz portfel Tonkeeper.'
    ],
    strategyHeading: 'Strategia maksymalizacji nagród',
    strategy: 'Na początku rozwijaj szybkość odnawiania energii oraz jej limit, dołącz do aktywnego Squadu i odbieraj wydobycie co 8 godzin.',
    sybilHeading: 'Ochrona Anti-Sybil i bezpieczeństwo',
    sybilSafety: 'Not Pixel weryfikuje współrzędne oraz czasy odnowienia energii przeciwko botom. Graj ręcznie i nigdy nie ujawniaj swojej frazy seed.',
    faqHeading: 'Często zadawane pytania',
    faqs: [
      {
        q: 'Czy Not Pixel jest darmowy?',
        a: 'Tak, gra jest w 100% darmowa ($0) na Telegramie bez żadnych wpłat.'
      },
      {
        q: 'Jaki portfel podłączyć?',
        a: 'Podłącz portfel Tonkeeper lub MyTonWallet obsługujący sieć TON.'
      }
    ],
    ctaText: 'Otwórz Not Pixel',
    englishVersionLabel: 'Wersja angielska'
  }
];

