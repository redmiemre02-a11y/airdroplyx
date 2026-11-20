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
  }
];

