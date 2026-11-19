export interface AcademyLesson {
  title: string;
  slug: string;
  summary: string;
  keyPoints: string[];
}

export interface LocalizedAcademyData {
  slug: string;
  lang: string;
  flag: string;
  badge: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  homeLabel: string;
  breadcrumbLabel: string;
  telegramBtn: string;
  telegramHref: string;
  testnetBtn: string;
  testnetHref: string;
  lessonsHeading: string;
  fullArchiveHeading: string;
  fullArchiveDesc: string;
  readFullLabel: string;
  lessons: AcademyLesson[];
}

export const localizedAcademyPages: LocalizedAcademyData[] = [
  {
    slug: 'tr',
    lang: 'tr',
    flag: '🇹🇷',
    badge: 'Airdrop Akademi • 5 Temel Ders',
    title: 'Kripto Airdrop Akademisi 2026: Sıfırdan Web3 & Güvenlik Rehberi | Airdroplyx',
    description: 'Kripto airdrop nedir, Web3 cüzdanı nasıl kurulur, Testnet ve Mainnet farkları, Sybil koruması ve Telegram Mini-App stratejileri Türkçe eğitim rehberi.',
    h1: 'Kripto Airdrop Akademisi: Temelden İleri Seviyeye Rehber',
    intro: 'Ücretsiz kripto airdroplarından güvenli ve verimli şekilde yararlanmak için bilmeniz gereken 5 temel Web3 eğitim modülü.',
    homeLabel: 'Ana Sayfa',
    breadcrumbLabel: 'Akademi (TR)',
    telegramBtn: '✈️ Telegram Airdropları',
    telegramHref: '/tr/telegram-airdroplari/',
    testnetBtn: '🆓 Ücretsiz Testnetler',
    testnetHref: '/tr/ucretsiz-testnet-airdroplari/',
    lessonsHeading: 'Temel Eğitim Modülleri',
    fullArchiveHeading: 'Tüm İngilizce Akademi Dersleri (40 Rehber)',
    fullArchiveDesc: 'Daha teknik konular (ZK Coprocessors, Restaking, DePIN Düğümleri) için tüm İngilizce rehber arşivimize göz atın.',
    readFullLabel: 'Detaylı İngilizce Rehberi Aç',
    lessons: [
      {
        title: '1. Kripto Airdrop Nedir ve Nasıl Ücretsiz Token Kazanılır?',
        slug: 'what-is-crypto-airdrop',
        summary: 'Blokzincir projeleri yeni kullanıcı kazanmak ve merkeziyetsizliği artırmak için erken test kullanıcılarına ücretsiz token (airdrop) dağıtır.',
        keyPoints: [
          'Retroaktif airdroplar geçmişteki gerçek ağ kullanımını ödüllendirir.',
          'Testnet ve puan programları $0 sermaye ile katılım imkânı sunar.',
          'Erken dönem tutarlı kullanım, son dakika işlemlerinden daha değerlidir.'
        ]
      },
      {
        title: '2. Web3 Cüzdanı Kurulumu ve Güvenlik Temelleri',
        slug: 'how-to-setup-web3-wallet',
        summary: 'EVM ağları için Rabby veya Rainbow, Solana için Phantom, TON ekosistemi için ise Tonkeeper veya MyTonWallet kullanmanız gerekir.',
        keyPoints: [
          '12/24 kelimelik kurtarma ifadesini yalnızca kağıda yazıp çevrimdışı saklayın.',
          'Airdrop ve testnet işlemleri için ana birikiminizden ayrı bir cüzdan açın.',
          'Her imza onayında cüzdanınızın gösterdiği izinleri dikkatlice okuyun.'
        ]
      },
      {
        title: '3. Testnet vs Mainnet: Hangi Strateji Daha Kârlı?',
        slug: 'testnet-vs-mainnet',
        summary: 'Testnet ağları ücretsiz test tokenları (faucet) ile risksiz katılım sağlarken, Mainnet işlemleri gerçek gas ücreti gerektirir ancak rekabet daha azdır.',
        keyPoints: [
          'Yeni başlayanlar için Testnetler sıfır riskle deneyim kazandırır.',
          'Mainnet üzerinde haftalık organik işlemler yapmak Sybil elemesini azaltır.',
          'İki stratejiyi birleştirmek en dengeli airdrop portföyünü oluşturur.'
        ]
      },
      {
        title: '4. Airdrop Dolandırıcılığı ve Sybil Koruması',
        slug: 'airdrop-scam-protection',
        summary: 'Sahte claim sitelerinden korunmak ve projelerin çoklu hesap (Sybil) filtrelerine takılmamak için temel güvenlik kuralları.',
        keyPoints: [
          'Resmi proje kanalları dışındaki reklamlara ve DM linklerine tıklamayın.',
          'Bot veya otomatik script kullanmayın; cüzdanlar arası doğrudan para transferinden kaçının.',
          'Ön ödeme ("claim için 1 TON gönder") isteyen her sayfa dolandırıcılıktır.'
        ]
      },
      {
        title: '5. Telegram Mini-App Airdrop Mekanikleri',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'TON tabanlı Telegram Mini-App projelerinde pasif saatlik kazanç, günlük kombo ve TON Connect bağlantısının önemi.',
        keyPoints: [
          'Sürekli tıklamak yerine saatlik pasif gelir yükseltmelerine odaklanın.',
          'Tonkeeper cüzdanınızı TON Connect üzerinden erken bağlayın.',
          'Günlük giriş serilerini (streak) ve şifre görevlerini kaçırmayın.'
        ]
      }
    ]
  },
  {
    slug: 'ru',
    lang: 'ru',
    flag: '🇷🇺',
    badge: 'Академия Аирдропов • 5 базовых уроков',
    title: 'Академия Крипто Аирдропов 2026: Гайд по Web3 и безопасности | Airdroplyx',
    description: 'Обучающий курс по крипто-аирдропам: как настроить Web3-кошелёк, отличие Testnet от Mainnet, защита от скама, Sybil-фильтры и механика Telegram Mini-Apps.',
    h1: 'Академия Аирдропов: Базовое руководство по Web3',
    intro: 'Пять ключевых модулей, которые помогут безопасно и эффективно зарабатывать на бесплатных крипто-аирдропах и тестнетах.',
    homeLabel: 'Главная',
    breadcrumbLabel: 'Академия (RU)',
    telegramBtn: '✈️ Telegram Аирдропы',
    telegramHref: '/ru/telegram-airdrops/',
    testnetBtn: '🆓 Бесплатные тестнеты',
    testnetHref: '/ru/free-testnets/',
    lessonsHeading: 'Основные учебные модули',
    fullArchiveHeading: 'Полный архив статей (40 гайдов на английском)',
    fullArchiveDesc: 'Изучите углублённые технические материалы (ZK-сопроцессоры, рестейкинг, DePIN-ноды) в основном архиве.',
    readFullLabel: 'Открыть полную статью (EN)',
    lessons: [
      {
        title: '1. Что такое крипто-аирдроп и как получать токены бесплатно?',
        slug: 'what-is-crypto-airdrop',
        summary: 'Блокчейн-проекты распределяют бесплатные токены среди ранних тестировщиков для привлечения аудитории и децентрализации.',
        keyPoints: [
          'Ретродропы вознаграждают за реальную активность в сети в прошлом.',
          'Тестнеты и поинт-программы позволяют участвовать без вложений ($0).',
          'Регулярная ранняя активность ценится выше разовых транзакций перед снимком.'
        ]
      },
      {
        title: '2. Настройка и безопасность Web3-кошелька',
        slug: 'how-to-setup-web3-wallet',
        summary: 'Используйте Rabby или Rainbow для EVM-сетей, Phantom для Solana и Tonkeeper или MyTonWallet для экосистемы TON.',
        keyPoints: [
          'Храните сид-фразу (12/24 слова) только на бумаге в офлайне.',
          'Заведите отдельный кошелёк для аирдропов, изолированный от основных средств.',
          'Внимательно проверяйте каждое разрешение перед подписью транзакции.'
        ]
      },
      {
        title: '3. Testnet против Mainnet: какую стратегию выбрать?',
        slug: 'testnet-vs-mainnet',
        summary: 'Тестнеты используют бесплатные тестовые токены из кранов (Faucets), тогда как Mainnet требует оплаты газа, но имеет меньшую конкуренцию.',
        keyPoints: [
          'Тестнеты идеальны для старта без финансового риска ($0).',
          'Органичные еженедельные транзакции в Mainnet повышают вес кошелька.',
          'Комбинация обоих подходов даёт наиболее стабильный результат.'
        ]
      },
      {
        title: '4. Защита от скама и Sybil-фильтров',
        slug: 'airdrop-scam-protection',
        summary: 'Как не попасть на фишинговые сайты-дрейнеры и не быть исключённым из раздачи за мультиаккаунтинг (Sybil).',
        keyPoints: [
          'Проверяйте ссылки только через официальные каналы проектов.',
          'Не используйте скрипты и избегайте прямых переводов между своими кошельками.',
          'Любой сайт с требованием «отправьте TON для разблокировки награды» — мошенничество.'
        ]
      },
      {
        title: '5. Механика аирдропов в Telegram Mini-Apps',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'Как правильно фармить поинты в TON Mini-Apps: пассивный доход в час, ежедневные комбо и подключение Tonkeeper.',
        keyPoints: [
          'В первую очередь прокачивайте пассивный доход в час, а не ручные клики.',
          'Заранее привяжите Tonkeeper через безопасный стандарт TON Connect.',
          'Поддерживайте серии ежедневных входов и выполняйте комбо-задания.'
        ]
      }
    ]
  },
  {
    slug: 'id',
    lang: 'id',
    flag: '🇮🇩',
    badge: 'Akademi Airdrop • 5 Pelajaran Inti',
    title: 'Akademi Airdrop Kripto 2026: Panduan Web3 & Keamanan | Airdroplyx',
    description: 'Pelajari cara kerja airdrop kripto, setup dompet Web3 (Rabby, Phantom, Tonkeeper), perbedaan Testnet vs Mainnet, anti-Sybil, dan Telegram Mini-Apps.',
    h1: 'Akademi Airdrop Kripto: Panduan Lengkap Web3',
    intro: 'Lima modul pembelajaran utama untuk berburu airdrop kripto gratis secara aman, terstruktur, dan terhindar dari penipuan.',
    homeLabel: 'Beranda',
    breadcrumbLabel: 'Akademi (ID)',
    telegramBtn: '✈️ Airdrop Telegram',
    telegramHref: '/id/airdrop-telegram/',
    testnetBtn: '🆓 Testnet Gratis',
    testnetHref: '/id/testnet-gratis/',
    lessonsHeading: 'Modul Pembelajaran Utama',
    fullArchiveHeading: 'Arsip Lengkap Akademi (40 Panduan Bahasa Inggris)',
    fullArchiveDesc: 'Jelajahi topik lanjutan seperti ZK Coprocessors, Restaking, dan Node DePIN di arsip lengkap kami.',
    readFullLabel: 'Baca Panduan Lengkap (EN)',
    lessons: [
      {
        title: '1. Apa Itu Airdrop Kripto dan Bagaimana Cara Mendapatkannya?',
        slug: 'what-is-crypto-airdrop',
        summary: 'Proyek blockchain membagikan token gratis kepada pengguna awal untuk mendorong adopsi dan desentralisasi jaringan.',
        keyPoints: [
          'Airdrop retroaktif memberi hadiah atas aktivitas on-chain sebelumnya.',
          'Program testnet dan poin memungkinkan partisipasi gratis ($0).',
          'Konsistensi penggunaan sejak awal jauh lebih bernilai daripada transaksi mendadak.'
        ]
      },
      {
        title: '2. Cara Membuat dan Mengamankan Dompet Web3',
        slug: 'how-to-setup-web3-wallet',
        summary: 'Gunakan Rabby atau Rainbow untuk EVM, Phantom untuk Solana, serta Tonkeeper atau MyTonWallet untuk jaringan TON.',
        keyPoints: [
          'Catat seed phrase (12/24 kata) di kertas dan simpan secara offline.',
          'Pisahkan dompet khusus airdrop dari dompet penyimpanan aset utama.',
          'Selalu periksa detail izin transaksi sebelum menandatangani di dompet.'
        ]
      },
      {
        title: '3. Testnet vs Mainnet: Mana yang Lebih Menguntungkan?',
        slug: 'testnet-vs-mainnet',
        summary: 'Testnet menggunakan token uji gratis dari faucet tanpa risiko modal, sedangkan Mainnet membutuhkan gas fee nyata namun persaingannya lebih sedikit.',
        keyPoints: [
          'Testnet cocok untuk pemula dengan modal nol ($0).',
          'Aktivitas mingguan di Mainnet membantu lolos dari filter Sybil.',
          'Menggabungkan keduanya memberikan peluang airdrop paling seimbang.'
        ]
      },
      {
        title: '4. Perlindungan Scam Airdrop & Filter Sybil',
        slug: 'airdrop-scam-protection',
        summary: 'Langkah penting agar terhindar dari situs drainer palsu dan tidak didiskualifikasi oleh sistem deteksi multi-akun.',
        keyPoints: [
          'Hanya akses tautan resmi yang diverifikasi dari kanal resmi proyek.',
          'Hindari bot otomatis dan jangan mengirim dana bolak-balik antar dompet pribadi.',
          'Waspadai penipuan yang meminta deposit TON terlebih dahulu untuk klaim hadiah.'
        ]
      },
      {
        title: '5. Mekanisme Airdrop Telegram Mini-Apps',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'Memahami sistem poin per jam, combo harian, dan koneksi TON Connect di aplikasi mini Telegram.',
        keyPoints: [
          'Prioritaskan upgrade penghasilan pasif per jam daripada tap manual.',
          'Hubungkan Tonkeeper melalui TON Connect sebelum snapshot.',
          'Jaga streak harian dan selesaikan tugas combo untuk pengganda poin.'
        ]
      }
    ]
  },
  {
    slug: 'vi',
    lang: 'vi',
    flag: '🇻🇳',
    badge: 'Học Viện Airdrop • 5 Bài Học Cốt Lõi',
    title: 'Học Viện Airdrop Crypto 2026: Hướng Dẫn Web3 & Bảo Mật | Airdroplyx',
    description: 'Tìm hiểu airdrop crypto là gì, cách tạo ví Web3 an toàn, so sánh Testnet và Mainnet, chống Sybil và cơ chế kiếm điểm Telegram Mini-Apps.',
    h1: 'Học Viện Airdrop Crypto: Cẩm Nang Web3 Từ A-Z',
    intro: '5 bài học nền tảng giúp bạn săn airdrop miễn phí an toàn, tối ưu hóa phần thưởng và tránh bẫy lừa đảo.',
    homeLabel: 'Trang chủ',
    breadcrumbLabel: 'Học viện (VI)',
    telegramBtn: '✈️ Airdrop Telegram',
    telegramHref: '/vi/airdrop-telegram/',
    testnetBtn: '🆓 Testnet Miễn Phí',
    testnetHref: '/vi/testnet-mien-phi/',
    lessonsHeading: 'Các Bài Học Nền Tảng',
    fullArchiveHeading: 'Kho Kiến Thức Đầy Đủ (40 Bài Tiếng Anh)',
    fullArchiveDesc: 'Khám phá thêm các chủ đề chuyên sâu như ZK Coprocessors, Restaking và DePIN Nodes.',
    readFullLabel: 'Xem bài viết chi tiết (EN)',
    lessons: [
      {
        title: '1. Airdrop Crypto Là Gì và Cách Kiếm Token Miễn Phí?',
        slug: 'what-is-crypto-airdrop',
        summary: 'Các dự án blockchain phân phối token miễn phí cho người dùng trải nghiệm sớm nhằm mở rộng cộng đồng và phi tập trung hóa.',
        keyPoints: [
          'Airdrop hồi tố thưởng cho người dùng có lịch sử tương tác on-chain.',
          'Tham gia Testnet và săn điểm hoàn toàn miễn phí ($0).',
          'Duy trì tương tác đều đặn từ sớm hiệu quả hơn chạy giao dịch phút chót.'
        ]
      },
      {
        title: '2. Cách Cài Đặt và Bảo Mật Ví Web3',
        slug: 'how-to-setup-web3-wallet',
        summary: 'Dùng Rabby hoặc Rainbow cho mạng EVM, Phantom cho Solana và Tonkeeper hoặc MyTonWallet cho hệ sinh thái TON.',
        keyPoints: [
          'Ghi cụm từ khôi phục (12/24 từ) ra giấy và cất giữ ngoại tuyến.',
          'Tách biệt ví chuyên săn airdrop với ví lưu trữ tài sản chính.',
          'Kiểm tra kỹ quyền truy cập trước khi ký bất kỳ giao dịch nào.'
        ]
      },
      {
        title: '3. Testnet và Mainnet: Chiến Lược Nào Tối Ưu?',
        slug: 'testnet-vs-mainnet',
        summary: 'Testnet sử dụng token thử nghiệm miễn phí từ faucet, còn Mainnet tốn phí gas thật nhưng ít bị loãng phần thưởng hơn.',
        keyPoints: [
          'Testnet giúp người mới làm quen Web3 với rủi ro bằng không ($0).',
          'Giao dịch tự nhiên hàng tuần trên Mainnet giúp vượt qua bộ lọc Sybil.',
          'Kết hợp cả hai giúp tối ưu hóa tỷ lệ nhận thưởng.'
        ]
      },
      {
        title: '4. Phòng Tránh Lừa Đảo & Bộ Lọc Sybil',
        slug: 'airdrop-scam-protection',
        summary: 'Nguyên tắc bảo vệ ví khỏi web giả mạo rút tiền (drainer) và tránh bị đánh dấu gian lận đa tài khoản.',
        keyPoints: [
          'Chỉ truy cập liên kết từ trang web và kênh thông báo chính thức.',
          'Không dùng tool tự động và không chuyển tiền qua lại giữa các ví phụ.',
          'Mọi yêu cầu nạp TON trước để mở khóa thưởng đều là lừa đảo.'
        ]
      },
      {
        title: '5. Cơ Chế Airdrop Trên Telegram Mini-Apps',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'Cách tối ưu điểm thưởng theo giờ, giải combo hàng ngày và kết nối ví Tonkeeper an toàn.',
        keyPoints: [
          'Ưu tiên nâng cấp tốc độ đào thụ động theo giờ thay vì bấm tay liên tục.',
          'Liên kết ví Tonkeeper qua TON Connect trước thời điểm snapshot.',
          'Giữ chuỗi điểm danh hàng ngày để nhận hệ số nhân điểm.'
        ]
      }
    ]
  },
  {
    slug: 'es',
    lang: 'es',
    flag: '🇪🇸',
    badge: 'Academia Airdrop • 5 Lecciones Clave',
    title: 'Academia de Airdrops Crypto 2026: Guía Web3 y Seguridad | Airdroplyx',
    description: 'Aprende qué es un airdrop crypto, cómo configurar billeteras Web3, diferencias entre Testnet y Mainnet, protección anti-Sybil y Telegram Mini-Apps.',
    h1: 'Academia de Airdrops Crypto: Guía Esencial de Web3',
    intro: 'Cinco módulos educativos fundamentales para participar de forma segura en airdrops gratuitos y evitar estafas o filtros Sybil.',
    homeLabel: 'Inicio',
    breadcrumbLabel: 'Academia (ES)',
    telegramBtn: '✈️ Airdrops Telegram',
    telegramHref: '/es/airdrops-telegram/',
    testnetBtn: '🆓 Testnets Gratis',
    testnetHref: '/es/testnets-gratis/',
    lessonsHeading: 'Módulos de Aprendizaje Esenciales',
    fullArchiveHeading: 'Archivo Completo de la Academia (40 Guías en Inglés)',
    fullArchiveDesc: 'Explora temas avanzados como ZK Coprocessors, Restaking y nodos DePIN en nuestro archivo completo.',
    readFullLabel: 'Leer guía completa (EN)',
    lessons: [
      {
        title: '1. ¿Qué es un Airdrop Crypto y Cómo Ganar Tokens Gratis?',
        slug: 'what-is-crypto-airdrop',
        summary: 'Los proyectos blockchain reparten tokens gratuitos entre usuarios tempranos para fomentar la adopción y descentralización.',
        keyPoints: [
          'Los airdrops retroactivos recompensan el uso real en cadena.',
          'Las testnets y programas de puntos permiten participar gratis ($0).',
          'La constancia temprana vale más que las transacciones de último minuto.'
        ]
      },
      {
        title: '2. Cómo Configurar y Proteger tu Billetera Web3',
        slug: 'how-to-setup-web3-wallet',
        summary: 'Usa Rabby o Rainbow para redes EVM, Phantom para Solana y Tonkeeper o MyTonWallet para el ecosistema TON.',
        keyPoints: [
          'Guarda tu frase semilla (12/24 palabras) en papel y fuera de línea.',
          'Utiliza una billetera separada exclusivamente para airdrops.',
          'Revisa siempre los permisos antes de firmar cualquier transacción.'
        ]
      },
      {
        title: '3. Testnet vs Mainnet: Comparación Estratégica',
        slug: 'testnet-vs-mainnet',
        summary: 'Las testnets usan tokens gratuitos de faucet sin riesgo, mientras que Mainnet requiere gas real pero tiene menos competencia.',
        keyPoints: [
          'Las testnets son ideales para empezar sin capital ($0).',
          'La actividad semanal orgánica en Mainnet reduce el riesgo de filtro Sybil.',
          'Combinar ambas estrategias maximiza tus posibilidades.'
        ]
      },
      {
        title: '4. Protección contra Estafas y Filtros Sybil',
        slug: 'airdrop-scam-protection',
        summary: 'Reglas esenciales para evitar sitios de phishing (drainers) y no ser descalificado por multi-cuentas.',
        keyPoints: [
          'Verifica siempre los enlaces en canales oficiales del proyecto.',
          'No uses bots automáticos ni envíes fondos entre tus propias billeteras.',
          'Cualquier bot que pida enviar TON previo para reclamar es una estafa.'
        ]
      },
      {
        title: '5. Mecánica de Airdrops en Telegram Mini-Apps',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'Cómo optimizar el rendimiento pasivo por hora, combos diarios y la conexión segura con Tonkeeper.',
        keyPoints: [
          'Prioriza mejorar los ingresos pasivos por hora sobre los toques manuales.',
          'Conecta Tonkeeper mediante TON Connect antes del snapshot.',
          'Completa las rachas diarias y combos para multiplicar puntos.'
        ]
      }
    ]
  },
  {
    slug: 'pt',
    lang: 'pt',
    flag: '🇧🇷',
    badge: 'Academia Airdrop • 5 Aulas Essenciais',
    title: 'Academia de Airdrops Cripto 2026: Guia Web3 e Segurança | Airdroplyx',
    description: 'Aprenda o que é airdrop cripto, como configurar carteiras Web3, diferenças entre Testnet e Mainnet, defesa Sybil e Telegram Mini-Apps.',
    h1: 'Academia de Airdrops Cripto: Guia Completo de Web3',
    intro: 'Cinco módulos essenciais para participar de airdrops gratuitos com segurança e evitar golpes ou bloqueios Sybil.',
    homeLabel: 'Início',
    breadcrumbLabel: 'Academia (PT)',
    telegramBtn: '✈️ Airdrops Telegram',
    telegramHref: '/pt/airdrops-telegram/',
    testnetBtn: '🆓 Testnets Grátis',
    testnetHref: '/pt/testnets-gratis/',
    lessonsHeading: 'Módulos Fundamentais',
    fullArchiveHeading: 'Arquivo Completo da Academia (40 Guias em Inglês)',
    fullArchiveDesc: 'Confira tópicos avançados como ZK Coprocessors, Restaking e nós DePIN no nosso arquivo completo.',
    readFullLabel: 'Ler guia completo (EN)',
    lessons: [
      {
        title: '1. O Que é um Airdrop Cripto e Como Ganhar Tokens Grátis?',
        slug: 'what-is-crypto-airdrop',
        summary: 'Projetos blockchain distribuem tokens gratuitos aos primeiros usuários para impulsionar a adoção e a descentralização.',
        keyPoints: [
          'Airdrops retroativos recompensam o uso real na blockchain.',
          'Testnets e programas de pontos permitem participar sem custo ($0).',
          'Consistência desde cedo vale mais do que transações de última hora.'
        ]
      },
      {
        title: '2. Como Configurar e Proteger sua Carteira Web3',
        slug: 'how-to-setup-web3-wallet',
        summary: 'Use Rabby ou Rainbow para redes EVM, Phantom para Solana e Tonkeeper ou MyTonWallet para a rede TON.',
        keyPoints: [
          'Anote sua frase de recuperação (12/24 palavras) em papel e guarde offline.',
          'Separe uma carteira exclusiva para airdrops longe dos seus fundos principais.',
          'Leia atentamente cada solicitação de assinatura antes de aprovar.'
        ]
      },
      {
        title: '3. Testnet vs Mainnet: Qual Estratégia Escolher?',
        slug: 'testnet-vs-mainnet',
        summary: 'Testnets usam tokens gratuitos de faucet sem risco, enquanto Mainnet exige taxas reais de gás mas possui menor concorrência.',
        keyPoints: [
          'Testnets são perfeitas para começar com capital zero ($0).',
          'Transações semanais orgânicas na Mainnet ajudam a evitar filtros Sybil.',
          'Combinar as duas abordagens traz os melhores resultados.'
        ]
      },
      {
        title: '4. Proteção Contra Golpes e Filtros Sybil',
        slug: 'airdrop-scam-protection',
        summary: 'Boas práticas para não cair em sites falsos (drainers) e não ser desclassificado por múltiplas contas.',
        keyPoints: [
          'Acesse apenas links verificados nos canais oficiais do projeto.',
          'Evite robôs automáticos e transferências diretas entre suas carteiras.',
          'Qualquer site pedindo depósito prévio em TON para liberar prêmios é golpe.'
        ]
      },
      {
        title: '5. Mecânica de Airdrops em Telegram Mini-Apps',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'Como maximizar ganhos passivos por hora, combos diários e conexão segura via Tonkeeper.',
        keyPoints: [
          'Invista em melhorias de ganho passivo por hora em vez de apenas tocar na tela.',
          'Conecte a Tonkeeper via TON Connect antes do snapshot.',
          'Mantenha sequências diárias e complete combos para multiplicar pontos.'
        ]
      }
    ]
  },
  {
    slug: 'ko',
    lang: 'ko',
    flag: '🇰🇷',
    badge: '에어드랍 아카데미 • 핵심 5강',
    title: '2026 크립토 에어드랍 아카데미: Web3 지갑 & 보안 가이드 | Airdroplyx',
    description: '크립토 에어드랍 개념부터 Web3 지갑 설정, 테스트넷 vs 메인넷 전략, 시빌(Sybil) 방지 및 텔레그램 미니앱 공략법까지 한눈에 배우세요.',
    h1: '크립토 에어드랍 아카데미: Web3 핵심 입문 가이드',
    intro: '초기 자본 없이($0) 안전하고 효율적으로 에어드랍에 참여하기 위해 반드시 알아야 할 5가지 핵심 학습 모듈입니다.',
    homeLabel: '홈',
    breadcrumbLabel: '아카데미 (KO)',
    telegramBtn: '✈️ 텔레그램 에어드랍',
    telegramHref: '/ko/telegram-airdrops/',
    testnetBtn: '🆓 무료 테스트넷',
    testnetHref: '/ko/free-testnets/',
    lessonsHeading: '핵심 학습 모듈',
    fullArchiveHeading: '전체 아카데미 아카이브 (영문 가이드 40편)',
    fullArchiveDesc: 'ZK 코프로세서, 리스테이킹, DePIN 노드 등 심화 주제는 전체 영문 아카이브에서 확인하실 수 있습니다.',
    readFullLabel: '전체 영문 가이드 읽기',
    lessons: [
      {
        title: '1. 크립토 에어드랍이란 무엇이며 어떻게 무료 토큰을 받나요?',
        slug: 'what-is-crypto-airdrop',
        summary: '블록체인 프로젝트는 초기 사용자 확보와 탈중앙화를 위해 테스트 참여자에게 무료로 토큰을 분배합니다.',
        keyPoints: [
          '소급(Retroactive) 에어드랍은 과거 온체인 활동 이력에 보상을 지급합니다.',
          '테스트넷 및 포인트 프로그램은 자본 없이($0) 참여할 수 있습니다.',
          '스냅샷 직전 몰아치기보다 초기부터 꾸준한 활동이 훨씬 유리합니다.'
        ]
      },
      {
        title: '2. Web3 지갑 생성 및 보안 수칙',
        slug: 'how-to-setup-web3-wallet',
        summary: 'EVM은 Rabby 또는 Rainbow, 솔라나는 Phantom, TON 생태계는 Tonkeeper 또는 MyTonWallet을 사용하세요.',
        keyPoints: [
          '12/24단어 복구 구문(시드 구문)은 종이에 적어 오프라인에 보관하세요.',
          '주력 자산 지갑과 분리된 에어드랍 전용 지갑을 사용하세요.',
          '트랜잭션 서명 전 요청 권한을 반드시 확인하세요.'
        ]
      },
      {
        title: '3. 테스트넷 vs 메인넷: 어떤 전략이 유리할까요?',
        slug: 'testnet-vs-mainnet',
        summary: '테스트넷은 무료 Faucet 토큰으로 무위험 참여가 가능하며, 메인넷은 가스비가 들지만 경쟁률이 낮습니다.',
        keyPoints: [
          '초보자는 무자본($0) 테스트넷으로 경험을 쌓는 것이 좋습니다.',
          '메인넷에서 매주 자연스러운 트랜잭션을 남기면 시빌 필터 통과에 유리합니다.',
          '두 전략을 병행하는 것이 가장 안정적인 포트폴리오를 만듭니다.'
        ]
      },
      {
        title: '4. 에어드랍 스캠 예방 및 시빌(Sybil) 방어',
        slug: 'airdrop-scam-protection',
        summary: '피싱 드레이너 사이트를 피하고 다중 계정(Sybil) 차단 대상에서 제외되기 위한 필수 수칙입니다.',
        keyPoints: [
          '반드시 프로젝트 공식 채널에서 검증된 링크만 이용하세요.',
          '자동화 봇 사용 및 지갑 간 직접 자금 이체를 피하세요.',
          '보상 수령을 위해 TON 선입금을 요구하는 사이트는 100% 사기입니다.'
        ]
      },
      {
        title: '5. 텔레그램 미니앱 에어드랍 메커니즘',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: '시간당 패시브 수익 업그레이드, 일일 콤보, 안전한 TON Connect 지갑 연동 원리를 이해합니다.',
        keyPoints: [
          '단순 터치보다 시간당 자동 채굴 업그레이드에 우선 투자하세요.',
          '스냅샷 전 Tonkeeper 지갑을 TON Connect로 연동하세요.',
          '일일 출석 스트릭과 콤보 미션으로 포인트 배율을 높이세요.'
        ]
      }
    ]
  },
  {
    slug: 'ja',
    lang: 'ja',
    flag: '🇯🇵',
    badge: 'エアドロップアカデミー • 基礎5講座',
    title: '仮想通貨エアドロップアカデミー 2026：Web3入門＆セキュリティ | Airdroplyx',
    description: '仮想通貨エアドロップの仕組み、Web3ウォレット設定、テストネットとメインネットの違い、Sybil対策、Telegramミニアプリ攻略をわかりやすく解説。',
    h1: '仮想通貨エアドロップアカデミー：Web3基礎完全ガイド',
    intro: '無料エアドロップに安全かつ効率的に参加するために欠かせない5つの基礎学習モジュールです。',
    homeLabel: 'ホーム',
    breadcrumbLabel: 'アカデミー (JA)',
    telegramBtn: '✈️ Telegramエアドロップ',
    telegramHref: '/ja/telegram-airdrops/',
    testnetBtn: '🆓 無料テストネット',
    testnetHref: '/ja/free-testnets/',
    lessonsHeading: '基礎学習モジュール',
    fullArchiveHeading: '全アカデミーアーカイブ（英語ガイド40本）',
    fullArchiveDesc: 'ZKコプロセッサ、リステーキング、DePINノードなどの高度な解説は英語アーカイブをご覧ください。',
    readFullLabel: '詳細ガイドを読む (EN)',
    lessons: [
      {
        title: '1. 仮想通貨エアドロップとは？無料でトークンを得る仕組み',
        slug: 'what-is-crypto-airdrop',
        summary: 'ブロックチェーンプロジェクトは初期ユーザー獲得と分散化のために、早期テスト参加者へ無料でトークンを配布します。',
        keyPoints: [
          'レトロアクティブ型は過去のオンチェーン利用実績を評価します。',
          'テストネットやポイントプログラムは資金ゼロ（$0）で参加可能です。',
          'スナップショット直前よりも、早期からの継続的な利用が重視されます。'
        ]
      },
      {
        title: '2. Web3ウォレットの作成とセキュリティ管理',
        slug: 'how-to-setup-web3-wallet',
        summary: 'EVMはRabbyまたはRainbow、SolanaはPhantom、TONはTonkeeperまたはMyTonWalletを使用します。',
        keyPoints: [
          'シードフレーズ（12/24単語）は紙に書いてオフラインで保管してください。',
          'メイン資産を守るため、エアドロップ専用のサブウォレットを用意しましょう。',
          '署名承認の前には必ず権限内容を確認してください。'
        ]
      },
      {
        title: '3. テストネット vs メインネット：戦略的な使い分け',
        slug: 'testnet-vs-mainnet',
        summary: 'テストネットはFaucetの無料トークンでリスクゼロ、メインネットはガス代がかかる分だけ競争率が低くなります。',
        keyPoints: [
          '初心者は初期費用ゼロ（$0）のテストネットから始めるのが安全です。',
          'メインネットでの定期的な利用履歴はSybil対策として強力です。',
          '両方を組み合わせることで安定した成果を狙えます。'
        ]
      },
      {
        title: '4. エアドロップ詐欺対策とSybilフィルター回避',
        slug: 'airdrop-scam-protection',
        summary: '資産を抜き取るフィッシングサイトを避け、重複アカウント判定を受けないための基本ルール。',
        keyPoints: [
          '必ず公式アカウントから確認した正規URLのみにアクセスしてください。',
          '自動ツールやサブウォレット間の直接送金は避けてください。',
          '報酬受け取りのためにTONの事前送金を求めるサイトは詐欺です。'
        ]
      },
      {
        title: '5. Telegramミニアプリのエアドロップ攻略構造',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: '時間あたりの放置収益アップグレード、デイリーコンボ、TON Connect連携の基本を解説。',
        keyPoints: [
          '連打よりも時間あたりの自動獲得量アップを優先しましょう。',
          'スナップショット前にTonkeeperをTON Connectで連携しておきましょう。',
          '連続ログインとデイリーコンボで効率よく倍率を上げられます。'
        ]
      }
    ]
  },
  {
    slug: 'ar',
    lang: 'ar',
    flag: '🇸🇦',
    badge: 'أكاديمية الإيردروب • 5 دروس أساسية',
    title: 'أكاديمية إيردروب العملات الرقمية 2026: دليل Web3 والأمان | Airdroplyx',
    description: 'تعلّم ما هو الإيردروب، كيفية إنشاء محفظة Web3 آمنة، الفرق بين Testnet و Mainnet، الحماية من الاحتيال و Sybil، وآلية تطبيقات تيليجرام المصغرة.',
    h1: 'أكاديمية الإيردروب: الدليل الشامل للمبتدئين في Web3',
    intro: 'خمس وحدات تعليمية أساسية للمشاركة بأمان وكفاءة في الإيردروبات المجانية وتجنب الاحتيال.',
    homeLabel: 'الرئيسية',
    breadcrumbLabel: 'الأكاديمية (AR)',
    telegramBtn: '✈️ إيردروبات تيليجرام',
    telegramHref: '/ar/telegram-airdrops/',
    testnetBtn: '🆓 شبكات اختبار مجانية',
    testnetHref: '/ar/free-testnets/',
    lessonsHeading: 'الوحدات التعليمية الأساسية',
    fullArchiveHeading: 'الأرشيف الكامل للأكاديمية (40 دليلاً بالإنجليزية)',
    fullArchiveDesc: 'اطّلع على المواضيع التقنية المتقدمة مثل ZK Coprocessors و Restaking وعقد DePIN في الأرشيف الكامل.',
    readFullLabel: 'قراءة الدليل الكامل (EN)',
    lessons: [
      {
        title: '1. ما هو إيردروب العملات الرقمية وكيف تربح عملات مجانية؟',
        slug: 'what-is-crypto-airdrop',
        summary: 'توزع مشاريع البلوكتشين عملات مجانية على المستخدمين الأوائل لتشجيع التبني وتعزيز اللامركزية.',
        keyPoints: [
          'الإيردروبات بأثر رجعي تكافئ التفاعل الحقيقي السابق على الشبكة.',
          'برامج شبكات الاختبار والنقاط تتيح المشاركة مجاناً ($0).',
          'الاستمرارية المبكرة أكثر قيمة من المعاملات العشوائية المتأخرة.'
        ]
      },
      {
        title: '2. كيفية إنشاء وتأمين محفظة Web3',
        slug: 'how-to-setup-web3-wallet',
        summary: 'استخدم Rabby أو Rainbow لشبكات EVM، و Phantom لشبكة Solana، و Tonkeeper أو MyTonWallet لشبكة TON.',
        keyPoints: [
          'اكتب كلمات الاسترداد (12/24 كلمة) على ورق واحفظها بعيداً عن الإنترنت.',
          'خصّص محفظة مستقلة للإيردروبات بعيداً عن أصولك الرئيسية.',
          'اقرأ الأذونات المطلوبة بعناية قبل توقيع أي معاملة.'
        ]
      },
      {
        title: '3. Testnet مقابل Mainnet: أيهما أفضل؟',
        slug: 'testnet-vs-mainnet',
        summary: 'تستخدم شبكات الاختبار عملات مجانية من الصنابير بدون مخاطرة، بينما تتطلب الشبكة الرئيسية رسوماً حقيقية لكن بمنافسة أقل.',
        keyPoints: [
          'شبكات الاختبار مثالية للبداية بدون رأس مال ($0).',
          'النشاط الأسبوعي المنتظم على Mainnet يقلل احتمالية الحظر في فلتر Sybil.',
          'الجمع بين الاستراتيجيتين يحقق أفضل النتائج.'
        ]
      },
      {
        title: '4. الحماية من الاحتيال وفلاتر Sybil',
        slug: 'airdrop-scam-protection',
        summary: 'قواعد أساسية لتجنب المواقع المزيفة التي تسحب المحافظ وعدم الاستبعاد بسبب تعدد الحسابات.',
        keyPoints: [
          'تحقق دائماً من الروابط عبر القنوات الرسمية للمشروع.',
          'تجنب البوتات التلقائية ولا ترسل الأموال ذهاباً وإياباً بين محافظك.',
          'أي موقع يطلب إرسال TON مسبقاً لفتح المكافآت هو عملية احتيال.'
        ]
      },
      {
        title: '5. آلية إيردروبات تطبيقات تيليجرام المصغرة',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'فهم نظام الدخل السلبي بالساعة، والبطاقات اليومية، وربط محفظة Tonkeeper بأمان عبر TON Connect.',
        keyPoints: [
          'ركز على ترقية الدخل السلبي بالساعة بدلاً من النقر المستمر.',
          'اربط محفظة Tonkeeper عبر TON Connect قبل موعد اللقطة (Snapshot).',
          'حافظ على سلسلة الدخول اليومية لإكمال المهام ومضاعفة النقاط.'
        ]
      }
    ]
  },
  {
    slug: 'de',
    lang: 'de',
    flag: '🇩🇪',
    badge: 'Airdrop Akademie • 5 Basis-Lektionen',
    title: 'Krypto Airdrop Akademie 2026: Web3 & Sicherheits-Guide | Airdroplyx',
    description: 'Was sind Krypto Airdrops, Web3-Wallets einrichten, Testnet vs Mainnet, Schutz vor Scams & Sybil-Filtern sowie Telegram Mini-Apps verständlich erklärt.',
    h1: 'Krypto Airdrop Akademie: Das Web3-Grundlagenwissen',
    intro: 'Fünf zentrale Lernmodule, mit denen du sicher, kostenlos und effektiv an Krypto-Airdrops teilnimmst.',
    homeLabel: 'Startseite',
    breadcrumbLabel: 'Akademie (DE)',
    telegramBtn: '✈️ Telegram Airdrops',
    telegramHref: '/de/telegram-airdrops/',
    testnetBtn: '🆓 Kostenlose Testnets',
    testnetHref: '/de/kostenlose-testnets/',
    lessonsHeading: 'Grundlegende Lernmodule',
    fullArchiveHeading: 'Komplettes Akademie-Archiv (40 englische Guides)',
    fullArchiveDesc: 'Vertiefe dein Wissen zu ZK Coprocessors, Restaking und DePIN Nodes in unserem englischen Gesamtarchiv.',
    readFullLabel: 'Vollständigen Guide lesen (EN)',
    lessons: [
      {
        title: '1. Was ist ein Krypto Airdrop und wie verdient man kostenlose Token?',
        slug: 'what-is-crypto-airdrop',
        summary: 'Blockchain-Projekte verteilen kostenlose Token an frühe Nutzer, um Wachstum und Dezentralisierung zu fördern.',
        keyPoints: [
          'Retroaktive Airdrops belohnen echte frühere On-Chain-Aktivität.',
          'Testnets und Punkteprogramme ermöglichen eine Teilnahme ohne Kapital ($0).',
          'Frühe Kontinuität zählt mehr als Last-Minute-Transaktionen.'
        ]
      },
      {
        title: '2. Web3 Wallet einrichten und absichern',
        slug: 'how-to-setup-web3-wallet',
        summary: 'Nutze Rabby oder Rainbow für EVM-Ketten, Phantom für Solana sowie Tonkeeper oder MyTonWallet für TON.',
        keyPoints: [
          'Notiere deine Seed-Phrase (12/24 Wörter) ausschließlich offline auf Papier.',
          'Trenne deine Airdrop-Wallet strikt von deinem Hauptvermögen.',
          'Prüfe jede Signaturanfrage genau, bevor du sie bestätigst.'
        ]
      },
      {
        title: '3. Testnet vs Mainnet: Welche Strategie lohnt sich?',
        slug: 'testnet-vs-mainnet',
        summary: 'Testnets nutzen kostenlose Faucet-Token ohne Risiko, während Mainnet reale Gasgebühren kostet, aber weniger Konkurrenz hat.',
        keyPoints: [
          'Testnets sind ideal für Einsteiger ohne Kapitaleinsatz ($0).',
          'Wöchentliche organische Mainnet-Transaktionen schützen vor Sybil-Filtern.',
          'Die Kombination beider Ansätze liefert die stabilsten Ergebnisse.'
        ]
      },
      {
        title: '4. Schutz vor Airdrop-Scams und Sybil-Filtern',
        slug: 'airdrop-scam-protection',
        summary: 'Wichtige Sicherheitsregeln gegen Phishing-Drainer und den Ausschluss durch Anti-Multi-Account-Systeme.',
        keyPoints: [
          'Öffne Links nur über verifizierte offizielle Projektkanäle.',
          'Vermeide Bots und direkte Geldtransfers zwischen eigenen Wallets.',
          'Jede Seite, die vorab TON zum Freischalten verlangt, ist ein Betrug.'
        ]
      },
      {
        title: '5. Funktionsweise von Telegram Mini-App Airdrops',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'Passiven Stunden-Ertrag steigern, tägliche Combos lösen und Tonkeeper sicher über TON Connect anbinden.',
        keyPoints: [
          'Investiere früh in passive stündliche Upgrades statt nur manuell zu tippen.',
          'Verbinde Tonkeeper rechtzeitig über TON Connect.',
          'Halte tägliche Login-Streaks für maximale Punktemultiplikatoren.'
        ]
      }
    ]
  },
  {
    slug: 'fr',
    lang: 'fr',
    flag: '🇫🇷',
    badge: 'Académie Airdrop • 5 Leçons Clés',
    title: 'Académie Airdrop Crypto 2026 : Guide Web3 & Sécurité | Airdroplyx',
    description: 'Comprendre les airdrops crypto, configurer un portefeuille Web3, Testnet vs Mainnet, protection anti-Sybil et fonctionnement des Mini-Apps Telegram.',
    h1: 'Académie Airdrop Crypto : Les Fondamentaux du Web3',
    intro: 'Cinq modules essentiels pour participer gratuitement et en toute sécurité aux meilleurs airdrops Web3.',
    homeLabel: 'Accueil',
    breadcrumbLabel: 'Académie (FR)',
    telegramBtn: '✈️ Airdrops Telegram',
    telegramHref: '/fr/airdrops-telegram/',
    testnetBtn: '🆓 Testnets Gratuits',
    testnetHref: '/fr/testnets-gratuits/',
    lessonsHeading: 'Modules de Formation Essentiels',
    fullArchiveHeading: 'Archives Complètes de l’Académie (40 Guides EN)',
    fullArchiveDesc: 'Explorez des sujets avancés comme les coprocesseurs ZK, le Restaking et les nœuds DePIN dans notre archive complète.',
    readFullLabel: 'Lire le guide complet (EN)',
    lessons: [
      {
        title: '1. Qu’est-ce qu’un Airdrop Crypto et Comment Gagner des Jetons ?',
        slug: 'what-is-crypto-airdrop',
        summary: 'Les projets blockchain distribuent gratuitement des jetons aux premiers utilisateurs pour favoriser l’adoption et la décentralisation.',
        keyPoints: [
          'Les airdrops rétroactifs récompensent l’utilisation réelle passée.',
          'Les testnets et programmes de points permettent de participer sans capital ($0).',
          'La régularité précoce vaut mieux que les transactions de dernière minute.'
        ]
      },
      {
        title: '2. Configurer et Sécuriser un Portefeuille Web3',
        slug: 'how-to-setup-web3-wallet',
        summary: 'Utilisez Rabby ou Rainbow pour EVM, Phantom pour Solana et Tonkeeper ou MyTonWallet pour TON.',
        keyPoints: [
          'Notez votre phrase de récupération (12/24 mots) sur papier, hors ligne.',
          'Utilisez un portefeuille dédié aux airdrops, séparé de vos fonds principaux.',
          'Vérifiez toujours les autorisations avant de signer une transaction.'
        ]
      },
      {
        title: '3. Testnet vs Mainnet : Quelle Stratégie Choisir ?',
        slug: 'testnet-vs-mainnet',
        summary: 'Les testnets utilisent des jetons gratuits sans risque, tandis que le Mainnet demande du gaz réel mais offre moins de concurrence.',
        keyPoints: [
          'Les testnets sont parfaits pour débuter sans investissement ($0).',
          'Une activité hebdomadaire organique sur Mainnet évite les filtres Sybil.',
          'Combiner les deux stratégies optimise vos chances de récompense.'
        ]
      },
      {
        title: '4. Protection Contre les Arnaques et Filtres Sybil',
        slug: 'airdrop-scam-protection',
        summary: 'Règles de sécurité pour éviter les sites de phishing et ne pas être disqualifié pour multi-comptes.',
        keyPoints: [
          'Utilisez uniquement les liens vérifiés des canaux officiels.',
          'Évitez les bots automatisés et les transferts directs entre vos portefeuilles.',
          'Tout site exigeant un dépôt préalable en TON pour réclamer est une arnaque.'
        ]
      },
      {
        title: '5. Mécanique des Airdrops Telegram Mini-Apps',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'Optimiser le rendement passif horaire, réussir les combos quotidiens et connecter Tonkeeper via TON Connect.',
        keyPoints: [
          'Privilégiez les améliorations de gain horaire plutôt que les clics manuels.',
          'Connectez Tonkeeper via TON Connect avant l’instantané (snapshot).',
          'Maintenez vos séries quotidiennes pour multiplier vos points.'
        ]
      }
    ]
  },
  {
    slug: 'uk',
    lang: 'uk',
    flag: '🇺🇦',
    badge: 'Академія Аірдропів • 5 базових уроків',
    title: 'Академія Крипто Аірдропів 2026: Гайд по Web3 та безпеці | Airdroplyx',
    description: 'Навчальний курс по крипто-аірдропах: як налаштувати Web3-гаманець, різниця між Testnet та Mainnet, захист від скаму, Sybil і Telegram Mini-Apps.',
    h1: 'Академія Аірдропів: Базовий посібник із Web3',
    intro: 'П’ять ключових модулів, які допоможуть безпечно та ефективно заробляти на безкоштовних крипто-аірдропах і тестнетах.',
    homeLabel: 'Головна',
    breadcrumbLabel: 'Академія (UK)',
    telegramBtn: '✈️ Telegram Аірдропи',
    telegramHref: '/uk/telegram-airdrops/',
    testnetBtn: '🆓 Безкоштовні тестнети',
    testnetHref: '/uk/bezkoshtovni-testnety/',
    lessonsHeading: 'Основні навчальні модулі',
    fullArchiveHeading: 'Повний архів статей (40 гайдів англійською)',
    fullArchiveDesc: 'Вивчайте поглиблені технічні матеріали (ZK-співпроцесори, рестейкінг, DePIN-ноди) в основному архіві.',
    readFullLabel: 'Відкрити повну статтю (EN)',
    lessons: [
      {
        title: '1. Що таке крипто-аірдроп і як отримувати токени безкоштовно?',
        slug: 'what-is-crypto-airdrop',
        summary: 'Блокчейн-проєкти розподіляють безкоштовні токени серед ранніх тестувальників для залучення аудиторії та децентралізації.',
        keyPoints: [
          'Ретродропи винагороджують за реальну активність у мережі в минулому.',
          'Тестнети та поінт-програми дозволяють брати участь без вкладень ($0).',
          'Регулярна рання активність цінується вище за разові транзакції перед знімком.'
        ]
      },
      {
        title: '2. Налаштування та безпека Web3-гаманця',
        slug: 'how-to-setup-web3-wallet',
        summary: 'Використовуйте Rabby або Rainbow для EVM-мереж, Phantom для Solana та Tonkeeper або MyTonWallet для екосистеми TON.',
        keyPoints: [
          'Зберігайте сід-фразу (12/24 слова) лише на папері в офлайні.',
          'Створіть окремий гаманець для аірдропів, ізольований від основних коштів.',
          'Уважно перевіряйте кожен дозвіл перед підписом транзакції.'
        ]
      },
      {
        title: '3. Testnet проти Mainnet: яку стратегію обрати?',
        slug: 'testnet-vs-mainnet',
        summary: 'Тестнети використовують безкоштовні тестові токени з кранів, тоді як Mainnet потребує оплати газу, але має меншу конкуренцію.',
        keyPoints: [
          'Тестнети ідеальні для старту без фінансового ризику ($0).',
          'Органічні щотижневі транзакції в Mainnet підвищують довіру до гаманця.',
          'Комбінація обох підходів дає найстабільніший результат.'
        ]
      },
      {
        title: '4. Захист від скаму та Sybil-фільтрів',
        slug: 'airdrop-scam-protection',
        summary: 'Як не потрапити на фішингові сайти-дрейнери і не бути виключеним із роздачі за мультиакаунтинг (Sybil).',
        keyPoints: [
          'Перевіряйте посилання лише через офіційні канали проєктів.',
          'Не використовуйте скрипти та уникайте прямих переказів між своїми гаманцями.',
          'Будь-який сайт із вимогою «надішліть TON для розблокування нагороди» — шахрайство.'
        ]
      },
      {
        title: '5. Механіка аірдропів у Telegram Mini-Apps',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'Як ефективно фармити поінти в TON Mini-Apps: пасивний дохід за годину, щоденні комбо та підключення Tonkeeper.',
        keyPoints: [
          'Насамперед прокачуйте пасивний дохід за годину, а не ручні кліки.',
          'Заздалегідь прив’яжіть Tonkeeper через безпечний стандарт TON Connect.',
          'Підтримуйте серії щоденних входів та виконуйте комбо-завдання.'
        ]
      }
    ]
  },
  {
    slug: 'zh',
    lang: 'zh-CN',
    flag: '🇨🇳',
    badge: '空投学院 • 5门核心课程',
    title: '2026 加密货币空投学院：Web3 钱包与防骗入门指南 | Airdroplyx',
    description: '系统学习什么是加密货币空投、Web3 钱包安全配置、测试网与主网策略对比、防女巫（Sybil）规则以及 Telegram 小程序空投机制。',
    h1: '加密货币空投学院：Web3 核心入门指南',
    intro: '掌握这五个基础教学模块，帮助您零风险、系统化地参与免费空投并远离钓鱼陷阱。',
    homeLabel: '首页',
    breadcrumbLabel: '学院 (ZH)',
    telegramBtn: '✈️ Telegram 空投',
    telegramHref: '/zh/telegram-airdrops/',
    testnetBtn: '🆓 免费测试网',
    testnetHref: '/zh/free-testnets/',
    lessonsHeading: '核心入门课程',
    fullArchiveHeading: '完整学院知识库（40 篇英文深度指南）',
    fullArchiveDesc: '如需了解 ZK 协处理器、再质押（Restaking）和 DePIN 节点等进阶内容，请浏览完整英文指南库。',
    readFullLabel: '阅读完整英文指南 (EN)',
    lessons: [
      {
        title: '1. 什么是加密货币空投？如何免费获取代币？',
        slug: 'what-is-crypto-airdrop',
        summary: '区块链项目方通过向早期测试用户免费分发代币，来激励生态采用并实现去中心化。',
        keyPoints: [
          '追溯型空投主要奖励过去在链上的真实交互记录。',
          '测试网和积分计划支持零本金（$0）参与。',
          '早期持续活跃远比快照前的突击刷量更有价值。'
        ]
      },
      {
        title: '2. 如何创建并保护 Web3 钱包安全',
        slug: 'how-to-setup-web3-wallet',
        summary: 'EVM 网络推荐使用 Rabby 或 Rainbow，Solana 使用 Phantom，TON 生态使用 Tonkeeper 或 MyTonWallet。',
        keyPoints: [
          '将 12/24 个助记词抄写在纸上并离线妥善保存。',
          '使用专门的空投钱包，与存放大额主资产的钱包彻底隔离。',
          '每次签名授权前务必仔细核对钱包弹窗权限。'
        ]
      },
      {
        title: '3. 测试网（Testnet）vs 主网（Mainnet）：如何选择？',
        slug: 'testnet-vs-mainnet',
        summary: '测试网使用水龙头免费代币且零风险；主网需要真实 Gas 费，但竞争者更少、单号收益往往更高。',
        keyPoints: [
          '新手最适合从零成本（$0）的测试网起步积累经验。',
          '在主网保持每周自然交互有助于通过女巫过滤。',
          '将两者结合能打造最稳健的空投组合。'
        ]
      },
      {
        title: '4. 防范空投钓鱼诈骗与女巫（Sybil）过滤',
        slug: 'airdrop-scam-protection',
        summary: '避免误点盗币钓鱼链接，并防止因多号操作特征被项目方取消空投资格。',
        keyPoints: [
          '只通过项目官方认证渠道获取活动链接。',
          '切勿使用自动化脚本，避免多个小号钱包之间直接互转资金。',
          '凡是要求先转入 TON 才能“解锁领奖”的网站均为诈骗。'
        ]
      },
      {
        title: '5. Telegram 小程序空投机制全解析',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: '掌握每小时被动产出升级、每日组合密码任务以及通过 TON Connect 安全绑定 Tonkeeper 钱包。',
        keyPoints: [
          '优先升级每小时自动产出，而不是单纯手动点击。',
          '在快照前尽早通过 TON Connect 绑定 Tonkeeper。',
          '保持每日连续签到和组合任务以获取更高积分倍率。'
        ]
      }
    ]
  },
  {
    slug: 'hi',
    lang: 'hi',
    flag: '🇮🇳',
    badge: 'एयरड्रॉप अकादमी • 5 मुख्य पाठ',
    title: 'क्रिप्टो एयरड्रॉप अकादमी 2026: Web3 और सुरक्षा गाइड | Airdroplyx',
    description: 'जानें क्रिप्टो एयरड्रॉप क्या है, Web3 वॉलेट कैसे बनाएं, Testnet बनाम Mainnet रणनीति, स्कैम सुरक्षा और Telegram मिनी-ऐप्स के नियम।',
    h1: 'क्रिप्टो एयरड्रॉप अकादमी: Web3 की पूरी जानकारी',
    intro: 'मुफ़्त क्रिप्टो एयरड्रॉप में सुरक्षित और सही तरीके से भाग लेने के लिए 5 सबसे ज़रूरी Web3 पाठ।',
    homeLabel: 'होम',
    breadcrumbLabel: 'अकादमी (HI)',
    telegramBtn: '✈️ टेलीग्राम एयरड्रॉप',
    telegramHref: '/hi/telegram-airdrops/',
    testnetBtn: '🆓 मुफ़्त टेस्टनेट',
    testnetHref: '/hi/free-testnets/',
    lessonsHeading: 'मुख्य लर्निंग मॉड्यूल',
    fullArchiveHeading: 'पूरा अकादमी संग्रह (40 अंग्रेज़ी गाइड)',
    fullArchiveDesc: 'ZK Coprocessors, Restaking और DePIN Nodes जैसे एडवांस विषयों के लिए हमारा अंग्रेज़ी संग्रह देखें।',
    readFullLabel: 'पूरी गाइड पढ़ें (EN)',
    lessons: [
      {
        title: '1. क्रिप्टो एयरड्रॉप क्या है और मुफ़्त टोकन कैसे कमाएं?',
        slug: 'what-is-crypto-airdrop',
        summary: 'ब्लॉकचेन प्रोजेक्ट नए उपयोगकर्ताओं को जोड़ने के लिए शुरुआती टेस्टर्स को मुफ़्त टोकन (airdrop) बांटते हैं।',
        keyPoints: [
          'रेट्रोएक्टिव एयरड्रॉप पुराने असली ऑन-चेन उपयोग को इनाम देते हैं।',
          'टेस्टनेट और पॉइंट्स प्रोग्राम $0 निवेश के साथ शुरू होते हैं।',
          'शुरुआत से नियमित उपयोग, अंतिम समय के ट्रांजैक्शन से बेहतर होता है।'
        ]
      },
      {
        title: '2. Web3 वॉलेट सेटअप और सुरक्षा के नियम',
        slug: 'how-to-setup-web3-wallet',
        summary: 'EVM के लिए Rabby या Rainbow, Solana के लिए Phantom और TON के लिए Tonkeeper या MyTonWallet का उपयोग करें।',
        keyPoints: [
          '12/24 शब्दों का सीड फ्रेज़ कागज़ पर लिखकर ऑफ़लाइन सुरक्षित रखें।',
          'एयरड्रॉप के लिए मुख्य संपत्ति से अलग एक नया वॉलेट इस्तेमाल करें।',
          'किसी भी ट्रांजैक्शन को साइन करने से पहले अनुमतियां ध्यान से पढ़ें।'
        ]
      },
      {
        title: '3. Testnet बनाम Mainnet: कौन-सी रणनीति बेहतर है?',
        slug: 'testnet-vs-mainnet',
        summary: 'टेस्टनेट में फ़ॉसेट के मुफ़्त टोकन से ज़ीरो रिस्क होता है, जबकि मेननेट में असली गैस लगती है पर भीड़ कम होती है।',
        keyPoints: [
          'नए लोगों के लिए बिना पैसे ($0) वाला टेस्टनेट सबसे सुरक्षित शुरुआत है।',
          'मेननेट पर साप्ताहिक सामान्य लेन-देन Sybil फ़िल्टर से बचाते हैं।',
          'दोनों का सही मिश्रण सबसे अच्छा परिणाम देता है।'
        ]
      },
      {
        title: '4. एयरड्रॉप स्कैम और Sybil फ़िल्टर से बचाव',
        slug: 'airdrop-scam-protection',
        summary: 'नकली ड्रेनर वेबसाइटों से बचने और मल्टी-अकाउंट ब्लॉक (Sybil) से सुरक्षित रहने के नियम।',
        keyPoints: [
          'हमेशा प्रोजेक्ट के आधिकारिक चैनलों से ही लिंक खोलें।',
          'ऑटो-बॉट्स से बचें और अपने वॉलेट्स के बीच सीधे पैसे न भेजें।',
          'जो भी साइट रिवॉर्ड के लिए पहले TON भेजने को कहे, वह 100% स्कैम है।'
        ]
      },
      {
        title: '5. Telegram मिनी-ऐप्स एयरड्रॉप कैसे काम करते हैं?',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'प्रति घंटा पैसिव कमाई अपग्रेड, डेली कॉम्बो और TON Connect से Tonkeeper जोड़ने की प्रक्रिया।',
        keyPoints: [
          'लगातार टैप करने के बजाय प्रति घंटा पैसिव इनकम अपग्रेड करें।',
          'स्नैपशॉट से पहले TON Connect द्वारा Tonkeeper को लिंक करें।',
          'पॉइंट्स बढ़ाने के लिए डेली लॉगिन स्ट्रीक और कॉम्बो पूरे करें।'
        ]
      }
    ]
  },
  {
    slug: 'it',
    lang: 'it',
    flag: '🇮🇹',
    badge: 'Accademia Airdrop • 5 Lezioni Base',
    title: 'Accademia Airdrop Crypto 2026: Guida Web3 e Sicurezza | Airdroplyx',
    description: 'Scopri cosa sono gli airdrop crypto, come creare un wallet Web3 sicuro, Testnet vs Mainnet, difesa anti-Sybil e funzionamento delle Mini-App Telegram.',
    h1: 'Accademia Airdrop Crypto: Guida Essenziale Web3',
    intro: 'Cinque moduli formativi fondamentali per partecipare in sicurezza agli airdrop gratuiti ed evitare truffe o filtri Sybil.',
    homeLabel: 'Home',
    breadcrumbLabel: 'Accademia (IT)',
    telegramBtn: '✈️ Airdrop Telegram',
    telegramHref: '/it/airdrop-telegram/',
    testnetBtn: '🆓 Testnet Gratuite',
    testnetHref: '/it/testnet-gratis/',
    lessonsHeading: 'Moduli Formativi Principali',
    fullArchiveHeading: 'Archivio Completo dell’Accademia (40 Guide in Inglese)',
    fullArchiveDesc: 'Approfondisci temi avanzati come ZK Coprocessors, Restaking e nodi DePIN nel nostro archivio completo.',
    readFullLabel: 'Leggi la guida completa (EN)',
    lessons: [
      {
        title: '1. Cos’è un Airdrop Crypto e Come Ottenere Token Gratuiti?',
        slug: 'what-is-crypto-airdrop',
        summary: 'I progetti blockchain distribuiscono token gratuiti ai primi utenti per incentivare l’adozione e la decentralizzazione.',
        keyPoints: [
          'Gli airdrop retroattivi premiano l’utilizzo reale passato on-chain.',
          'Le testnet e i programmi a punti permettono di partecipare gratis ($0).',
          'La costanza iniziale vale più delle transazioni dell’ultimo minuto.'
        ]
      },
      {
        title: '2. Come Configurare e Proteggere un Wallet Web3',
        slug: 'how-to-setup-web3-wallet',
        summary: 'Usa Rabby o Rainbow per EVM, Phantom per Solana e Tonkeeper o MyTonWallet per la rete TON.',
        keyPoints: [
          'Scrivi la seed phrase (12/24 parole) su carta e conservala offline.',
          'Usa un wallet dedicato agli airdrop separato dai fondi principali.',
          'Controlla sempre i permessi richiesti prima di firmare una transazione.'
        ]
      },
      {
        title: '3. Testnet vs Mainnet: Quale Strategia Scegliere?',
        slug: 'testnet-vs-mainnet',
        summary: 'Le testnet usano token gratuiti senza rischi, mentre la Mainnet richiede gas reale ma ha molta meno concorrenza.',
        keyPoints: [
          'Le testnet sono perfette per iniziare a costo zero ($0).',
          'Transazioni settimanali organiche su Mainnet aiutano contro i filtri Sybil.',
          'Combinare entrambi gli approcci massimizza i risultati.'
        ]
      },
      {
        title: '4. Protezione dalle Truffe e Filtri Anti-Sybil',
        slug: 'airdrop-scam-protection',
        summary: 'Regole essenziali per evitare siti drainer e non essere esclusi per attività multi-account.',
        keyPoints: [
          'Usa solo link verificati dai canali ufficiali del progetto.',
          'Evita bot automatici e trasferimenti diretti tra i tuoi wallet.',
          'Qualsiasi sito che chieda di inviare TON in anticipo è una truffa.'
        ]
      },
      {
        title: '5. Meccanica degli Airdrop su Telegram Mini-Apps',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'Ottimizzare il rendimento passivo orario, completare le combo giornaliere e collegare Tonkeeper con TON Connect.',
        keyPoints: [
          'Investi subito nei potenziamenti di guadagno orario invece di cliccare a mano.',
          'Collega Tonkeeper tramite TON Connect prima dello snapshot.',
          'Mantieni le serie giornaliere per moltiplicare i punti.'
        ]
      }
    ]
  },
  {
    slug: 'pl',
    lang: 'pl',
    flag: '🇵🇱',
    badge: 'Akademia Airdrop • 5 Podstawowych Lekcji',
    title: 'Akademia Airdropów Krypto 2026: Przewodnik Web3 i Bezpieczeństwo | Airdroplyx',
    description: 'Dowiedz się, czym są airdropy krypto, jak skonfigurować portfel Web3, Testnet vs Mainnet, ochrona przed Sybil oraz mechanika Telegram Mini-Apps.',
    h1: 'Akademia Airdropów Krypto: Podstawy Web3 od Zera',
    intro: 'Pięć kluczowych modułów edukacyjnych, dzięki którym bezpiecznie i bez kapitału weźmiesz udział w najlepszych airdropach.',
    homeLabel: 'Strona główna',
    breadcrumbLabel: 'Akademia (PL)',
    telegramBtn: '✈️ Airdropy Telegram',
    telegramHref: '/pl/airdrop-telegram/',
    testnetBtn: '🆓 Darmowe Testnety',
    testnetHref: '/pl/darmowe-testnety/',
    lessonsHeading: 'Podstawowe Moduły Szkoleniowe',
    fullArchiveHeading: 'Pełne Archiwum Akademii (40 Poradników EN)',
    fullArchiveDesc: 'Sprawdź zaawansowane tematy, takie jak koprocesory ZK, Restaking i węzły DePIN w pełnym archiwum angielskim.',
    readFullLabel: 'Czytaj pełny poradnik (EN)',
    lessons: [
      {
        title: '1. Czym jest Airdrop Krypto i Jak Zdobyć Darmowe Tokeny?',
        slug: 'what-is-crypto-airdrop',
        summary: 'Projekty blockchain rozdają darmowe tokeny wczesnym użytkownikom, aby budować społeczność i decentralizację.',
        keyPoints: [
          'Airdropy retroaktywne nagradzają za wcześniejszą prawdziwą aktywność w sieci.',
          'Testnety i programy punktowe pozwalają uczestniczyć za darmo ($0).',
          'Wczesna regularność liczy się bardziej niż transakcje na ostatnią chwilę.'
        ]
      },
      {
        title: '2. Jak Założyć i Zabezpieczyć Portfel Web3',
        slug: 'how-to-setup-web3-wallet',
        summary: 'Używaj Rabby lub Rainbow dla EVM, Phantom dla Solany oraz Tonkeeper lub MyTonWallet dla sieci TON.',
        keyPoints: [
          'Zapisz frazę odzyskiwania (12/24 słowa) na papierze i przechowuj offline.',
          'Wydziel osobny portfel wyłącznie do airdropów z dala od głównych środków.',
          'Zawsze dokładnie sprawdzaj uprawnienia przed podpisaniem transakcji.'
        ]
      },
      {
        title: '3. Testnet vs Mainnet: Która Strategia Jest Lepsza?',
        slug: 'testnet-vs-mainnet',
        summary: 'Testnety wykorzystują darmowe tokeny z kraników bez ryzyka, natomiast Mainnet wymaga opłat gas, ale ma mniejszą konkurencję.',
        keyPoints: [
          'Testnety są idealne na start bez żadnego kapitału ($0).',
          'Cotygodniowe organiczne transakcje na Mainnet chronią przed filtrem Sybil.',
          'Łączenie obu strategii daje najstabilniejsze rezultaty.'
        ]
      },
      {
        title: '4. Ochrona Przed Oszustwami i Filtrami Sybil',
        slug: 'airdrop-scam-protection',
        summary: 'Najważniejsze zasady unikania fałszywych stron (drainerów) oraz dyskwalifikacji za multikonta.',
        keyPoints: [
          'Korzystaj wyłącznie z linków potwierdzonych w oficjalnych kanałach projektu.',
          'Unikaj automatycznych botów i bezpośrednich przelewów między własnymi portfelami.',
          'Każda strona żądająca wcześniejszej wpłaty TON za odblokowanie nagrody to oszustwo.'
        ]
      },
      {
        title: '5. Mechanika Airdropów w Telegram Mini-Apps',
        slug: 'telegram-miniapp-airdrop-mechanics',
        summary: 'Jak zwiększać pasywny dochód godzinowy, rozwiązywać codzienne combo i bezpiecznie łączyć Tonkeeper.',
        keyPoints: [
          'Inwestuj w pasywne ulepszenia wydobycia na godzinę zamiast ciągłego klikania.',
          'Połącz portfel Tonkeeper przez TON Connect jeszcze przed snapshotem.',
          'Utrzymuj codzienne serie logowań i zadania combo, aby mnożyć punkty.'
        ]
      }
    ]
  }
];

