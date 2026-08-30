import { airdrops } from './airdrops';

const enOverview = 'Dow Protocol is rapidly emerging as a pioneer in the Real World Asset (RWA) space by solving a massive problem in global e-commerce. Currently, sellers on massive marketplaces like Amazon often have to wait anywhere from 14 to 28 days for their sales proceeds to clear. This creates a severe liquidity crunch because their advertising, logistics, and inventory bills continue to pile up in the meantime.\n\nTo bridge this gap, Dow Protocol leverages blockchain technology to move working capital lending on-chain. They advance stablecoin funding to these merchants against their pending receivables. The process is highly secure and automated, as Dow collects the repayment directly from the merchant\'s platform balance once the funds clear.\n\nThe project recently secured a massive $10.5 Million in a seed funding round led by industry giants including Animoca Brands, MH Ventures, and Mapleblock. With this war chest, they are expanding their vaults on both the BNB Chain and Sui network. To bootstrap liquidity and user adoption ahead of their highly anticipated Token Generation Event (TGE), they have launched the "Dow XP Program". This program heavily rewards early adopters, community members, and liquidity providers.';
const enStrategy = 'Dow Protocol is unique because the underlying business model is already proven. The yield comes directly from real-world merchant interest rather than unsustainable token emissions. Our strategy here is twofold: First, immediately lock in the free social points (Task XP) by connecting your X, Discord, and Telegram. Second, if you have idle stablecoins, parking a small portion into their 90-day vaults could serve as a massive multiplier for the airdrop, as liquidity providers are historically rewarded the most in RWA protocols.';
const enSteps = [
  'Navigate to the Official Dow Protocol Points Dashboard: Start by visiting the official Dow Protocol web app. You will need a secure Web3 wallet.',
  'Connect your X (Twitter) Account: This is the mandatory gateway step. Linking your X account will instantly grant you your first 50 XP.',
  'Publish a High-Quality Post about Dow Protocol: The platform requires you to write a post on X about them. To get approved quickly, avoid copy-pasting spam.',
  'Link your Telegram and Discord Accounts: Scroll down the quest list and connect your Telegram and Discord accounts.',
  'Provide Liquidity to the Stablecoin Vaults (Optional but High-Value): Keep an eye on their subscription windows. When a vault opens, deposit stablecoins.',
  'Maximize Earnings with Referrals: Once your X post is approved, grab your referral link. Share it with your crypto network.'
];
const enFaqs = [
  { question: 'When is the Dow Protocol token launch (TGE)?', answer: 'The Dow Protocol team has not yet announced an official date for their Token Generation Event (TGE).' },
  { question: 'Is it completely free to participate?', answer: 'Yes, the social farming aspect is 100% free. However, participating in the vault deposits requires actual stablecoins.' },
  { question: 'How do I unlock my referral link?', answer: 'Your referral link remains locked until you complete the X (Twitter) posting task.' }
];

const translations = {
  tr: {
    reward: 'Potansiyel Kazanç', category: 'RWA / DeFi',
    overview: 'Dow Protocol, küresel e-ticaretteki devasa bir sorunu çözerek Gerçek Dünya Varlıkları (RWA) alanında hızla öncü konuma yükseliyor. Şu anda Amazon gibi pazar yerlerindeki satıcılar, gelirleri için 14-28 gün bekliyor. Dow Protocol bu açığı blockchain ile kapatıyor ve satıcılara stablecoin fonlaması sağlıyor.\n\nProje Animoca Brands öncülüğünde 10.5 Milyon Dolar yatırım aldı. TGE öncesi başlatılan "Dow XP Programı" ile erken kullanıcıları devasa airdroplarla ödüllendirecekler.',
    strategy: 'Dow Protocol\'ün getirisi gerçek ticari kâr paylarından geliyor. Stratejimiz: Sosyal görevleri hızla tamamlayıp ücretsiz XP toplamak ve boştaki stablecoinleri 90 günlük havuzlara kilitleyerek airdrop çarpanı elde etmek.',
    steps: ['Resmi Dow Protocol Puan Paneline Gidin ve Web3 cüzdanınızı bağlayın.', 'X (Twitter) Hesabınızı Bağlayın: İlk 50 XP\'yi kazandırır.', 'Dow Protocol Hakkında Kaliteli Bir Gönderi Paylaşın.', 'Telegram ve Discord Hesaplarınızı Bağlayın.', 'Stablecoin Havuzlarına Likidite Sağlayın (İsteğe Bağlı ama Yüksek Kazançlı).', 'Referanslarla Kazancınızı Katlayın.'],
    faqs: [
      { question: 'Dow Protocol token lansmanı (TGE) ne zaman?', answer: 'Henüz resmi bir TGE tarihi açıklanmadı. Ana odak Dow XP toplamaktır.' },
      { question: 'Katılmak tamamen ücretsiz mi?', answer: 'Sosyal görevler ücretsizdir. Havuz yatırımları stablecoin gerektirir.' },
      { question: 'Referans linkimin kilidini nasıl açarım?', answer: 'X (Twitter) görevini tamamlayıp onaylandıktan sonra açılır.' }
    ]
  },
  ru: {
    reward: 'Потенциальная прибыль', category: 'RWA / DeFi',
    overview: 'Dow Protocol быстро становится пионером в сфере реальных активов (RWA), решая масштабную проблему в глобальной электронной коммерции. В настоящее время продавцам на площадках вроде Amazon приходится ждать от 14 до 28 дней для получения доходов.\n\nЧтобы преодолеть этот разрыв, Dow Protocol использует блокчейн. Недавно проект привлек 10,5 млн долларов от Animoca Brands. Программа "Dow XP" щедро вознаграждает первых пользователей перед долгожданным запуском токена (TGE).',
    strategy: 'Доходность Dow Protocol исходит из реальной прибыли. Наша стратегия: немедленно заблокируйте бесплатные баллы за социальные задания, а также рассмотрите возможность внесения стейблкоинов в их 90-дневные хранилища.',
    steps: ['Перейдите на официальную панель Dow Protocol.', 'Подключите свой аккаунт X (Twitter) для получения 50 XP.', 'Опубликуйте качественный пост о Dow Protocol.', 'Свяжите аккаунты Telegram и Discord.', 'Обеспечьте ликвидность в хранилищах стейблкоинов (опционально).', 'Максимизируйте заработок с помощью рефералов.'],
    faqs: [
      { question: 'Когда запуск токена Dow Protocol (TGE)?', answer: 'Команда пока не объявила официальную дату запуска токена.' },
      { question: 'Участие совершенно бесплатно?', answer: 'Социальный фарминг на 100% бесплатен. Депозиты требуют стейблкоинов.' },
      { question: 'Как разблокировать реферальную ссылку?', answer: 'Ваша ссылка заблокирована до выполнения задания в X (Twitter).' }
    ]
  },
  es: {
    reward: 'Ganancia Potencial', category: 'RWA / DeFi',
    overview: 'Dow Protocol se está posicionando rápidamente como pionero en el espacio de Activos del Mundo Real (RWA). Resuelve el problema de liquidez en el comercio electrónico global. Actualmente, los vendedores en Amazon esperan de 14 a 28 días para recibir sus pagos.\n\nEl proyecto ha asegurado una inversión semilla de $10.5 millones liderada por Animoca Brands. Para impulsar la adopción antes de su Evento de Generación de Tokens (TGE), lanzaron el "Programa Dow XP", recompensando masivamente a los usuarios.',
    strategy: 'Nuestra estrategia es doble: Primero, asegurar los puntos sociales gratuitos conectando sus redes sociales. Segundo, estacionar monedas estables inyectando liquidez en las bóvedas de 90 días como un multiplicador masivo para el airdrop.',
    steps: ['Navegue al panel oficial de puntos de Dow Protocol.', 'Conecte su cuenta de X (Twitter) para obtener sus primeros 50 XP.', 'Publique un post de alta calidad sobre Dow Protocol.', 'Vincule sus cuentas de Telegram y Discord.', 'Proporcione liquidez a las bóvedas de monedas estables (Opcional).', 'Maximice sus ganancias con referidos.'],
    faqs: [
      { question: '¿Cuándo es el lanzamiento del token (TGE)?', answer: 'El equipo aún no ha anunciado una fecha oficial para el TGE.' },
      { question: '¿Es completamente gratis participar?', answer: 'El farming social es 100% gratuito. Los depósitos requieren capital.' },
      { question: '¿Cómo desbloqueo mi enlace de referido?', answer: 'Su enlace se activa tras completar y aprobar la tarea de X (Twitter).' }
    ]
  },
  hi: {
    reward: 'संभावित लाभ', category: 'RWA / DeFi',
    overview: 'डाउ प्रोटोकॉल वैश्विक ई-कॉमर्स में तरलता की समस्या को हल करके रियल वर्ल्ड एसेट (RWA) क्षेत्र में अग्रणी बन रहा है। वर्तमान में, अमेज़ॅन जैसे बाज़ारों पर विक्रेताओं को अपने भुगतान के लिए 14 से 28 दिनों तक इंतजार करना पड़ता है।\n\nप्रोजेक्ट ने हाल ही में एनिमोका ब्रांड्स के नेतृत्व में 10.5 मिलियन डॉलर का निवेश हासिल किया है। उनके बहुप्रतीक्षित TGE से पहले उपयोगकर्ताओं को बड़े पैमाने पर पुरस्कृत करने के लिए "डाउ एक्सपी प्रोग्राम" शुरू किया गया है।',
    strategy: 'हमारी रणनीति दोहरी है: सबसे पहले, अपने सोशल खातों को जोड़कर मुफ्त सामाजिक अंक (XP) सुरक्षित करें। दूसरा, अपने निष्क्रिय स्टेबलकॉइन को 90-दिन के वाल्ट में जमा करें, जो एयरड्रॉप के लिए एक बड़ा गुणक (multiplier) होगा।',
    steps: ['आधिकारिक डाउ प्रोटोकॉल पॉइंट डैशबोर्ड पर जाएं।', '50 XP प्राप्त करने के लिए अपना X (ट्विटर) खाता कनेक्ट करें।', 'डाउ प्रोटोकॉल के बारे में एक उच्च-गुणवत्ता वाली पोस्ट प्रकाशित करें।', 'अपने टेलीग्राम और डिस्कॉर्ड खातों को लिंक करें।', 'स्टेबलकॉइन वॉल्ट्स में लिक्विडिटी प्रदान करें (वैकल्पिक)।', 'रेफरल के साथ अपनी कमाई को अधिकतम करें।'],
    faqs: [
      { question: 'डाउ प्रोटोकॉल टोकन लॉन्च (TGE) कब है?', answer: 'टीम ने अभी तक अपने TGE के लिए किसी आधिकारिक तारीख की घोषणा नहीं की है।' },
      { question: 'क्या भाग लेना पूरी तरह से मुफ़्त है?', answer: 'सामाजिक खेती 100% मुफ्त है। वाल्ट में जमा के लिए स्टेबलकॉइन की आवश्यकता होती है।' },
      { question: 'मैं अपना रेफरल लिंक कैसे अनलॉक करूं?', answer: 'X (Twitter) पोस्टिंग कार्य पूरा होने के बाद लिंक अनलॉक होता है।' }
    ]
  },
  id: {
    reward: 'Potensi Keuntungan', category: 'RWA / DeFi',
    overview: 'Dow Protocol berkembang pesat sebagai pelopor dalam ruang Real World Asset (RWA) dengan menyelesaikan masalah besar dalam e-commerce global. Saat ini, penjual di Amazon harus menunggu 14 hingga 28 hari untuk menerima pembayaran.\n\nProyek ini baru saja mengamankan pendanaan $10,5 Juta yang dipimpin oleh Animoca Brands. Mereka meluncurkan "Program Dow XP" untuk memberi penghargaan besar kepada pengguna awal sebelum acara TGE yang sangat diantisipasi.',
    strategy: 'Strategi kami di sini ada dua: Pertama, amankan poin sosial (Task XP) gratis dengan menghubungkan X, Discord, dan Telegram Anda. Kedua, parkirkan sebagian kecil stablecoin Anda ke brankas 90 hari mereka sebagai pengganda airdrop yang masif.',
    steps: ['Buka Dasbor Poin Dow Protocol Resmi.', 'Hubungkan Akun X (Twitter) Anda untuk mendapatkan 50 XP pertama.', 'Publikasikan Postingan Berkualitas Tinggi tentang Dow Protocol.', 'Tautkan Akun Telegram dan Discord Anda.', 'Berikan Likuiditas ke Brankas Stablecoin (Opsional tetapi Bernilai Tinggi).', 'Maksimalkan Penghasilan dengan Referensi.'],
    faqs: [
      { question: 'Kapan peluncuran token Dow Protocol (TGE)?', answer: 'Tim belum mengumumkan tanggal resmi untuk TGE mereka.' },
      { question: 'Apakah partisipasi sepenuhnya gratis?', answer: 'Farming sosial 100% gratis. Deposit brankas membutuhkan stablecoin aktual.' },
      { question: 'Bagaimana cara membuka tautan referensi saya?', answer: 'Tautan Anda tetap terkunci sampai Anda menyelesaikan tugas posting X (Twitter).' }
    ]
  },
  vi: {
    reward: 'Phần thưởng tiềm năng', category: 'RWA / DeFi',
    overview: 'Dow Protocol đang nhanh chóng nổi lên như một công ty tiên phong trong không gian Tài sản Thế giới Thực (RWA) bằng cách giải quyết vấn đề thanh khoản trong thương mại điện tử toàn cầu. Những người bán trên Amazon hiện phải đợi từ 14 đến 28 ngày để nhận tiền.\n\nDự án gần đây đã huy động được 10,5 triệu đô la từ Animoca Brands. Họ đã ra mắt "Chương trình Dow XP" để trao phần thưởng lớn cho những người dùng sớm trước sự kiện TGE rất được mong đợi của họ.',
    strategy: 'Chiến lược của chúng tôi gồm hai phần: Đầu tiên, khóa ngay các điểm xã hội miễn phí bằng cách kết nối mạng xã hội. Thứ hai, gửi stablecoin nhàn rỗi của bạn vào kho lưu trữ 90 ngày để làm hệ số nhân khổng lồ cho airdrop.',
    steps: ['Điều hướng đến Bảng điều khiển Dow Protocol chính thức.', 'Kết nối tài khoản X (Twitter) của bạn để nhận 50 XP đầu tiên.', 'Xuất bản một bài đăng chất lượng cao về Dow Protocol.', 'Liên kết tài khoản Telegram và Discord của bạn.', 'Cung cấp thanh khoản cho các kho lưu trữ Stablecoin (Tùy chọn).', 'Tối đa hóa thu nhập bằng số lượt giới thiệu.'],
    faqs: [
      { question: 'Khi nào ra mắt token Dow Protocol (TGE)?', answer: 'Nhóm chưa công bố ngày chính thức cho TGE.' },
      { question: 'Tham gia có hoàn toàn miễn phí không?', answer: 'Farming xã hội miễn phí 100%. Tiền gửi vào kho cần có stablecoin thực.' },
      { question: 'Làm cách nào để mở khóa liên kết giới thiệu?', answer: 'Liên kết giới thiệu của bạn sẽ mở khóa sau khi nhiệm vụ đăng bài trên X (Twitter) hoàn thành.' }
    ]
  },
  pt: {
    reward: 'Ganho Potencial', category: 'RWA / DeFi',
    overview: 'O Dow Protocol está emergindo rapidamente como um pioneiro no espaço de Ativos do Mundo Real (RWA), resolvendo um enorme problema no comércio eletrônico global. Atualmente, os vendedores da Amazon precisam esperar de 14 a 28 dias para receber.\n\nO projeto recentemente garantiu US$ 10,5 milhões em uma rodada semente liderada pela Animoca Brands. Eles lançaram o "Programa Dow XP", que recompensa fortemente os primeiros usuários antes do TGE.',
    strategy: 'A nossa estratégia aqui é dupla: Primeiro, garanta imediatamente os pontos sociais gratuitos (Task XP). Segundo, estacione stablecoins ociosas em seus cofres de 90 dias, o que servirá como um multiplicador massivo para o airdrop.',
    steps: ['Acesse o painel oficial do Dow Protocol.', 'Conecte sua conta do X (Twitter) para ganhar seus primeiros 50 XP.', 'Publique um post de alta qualidade sobre o Dow Protocol.', 'Vincule suas contas do Telegram e Discord.', 'Forneça liquidez aos cofres de stablecoins (Opcional).', 'Maximize seus ganhos com indicações.'],
    faqs: [
      { question: 'Quando é o lançamento do token (TGE)?', answer: 'A equipe do Dow Protocol ainda não anunciou uma data oficial para o TGE.' },
      { question: 'A participação é totalmente gratuita?', answer: 'A parte social é 100% gratuita. Participar dos cofres requer stablecoins.' },
      { question: 'Como desbloqueio meu link de indicação?', answer: 'Seu link permanece bloqueado até você concluir a tarefa de postagem no X.' }
    ]
  },
  zh: {
    reward: '潜在收益', category: 'RWA / DeFi',
    overview: 'Dow Protocol 正在迅速成为真实世界资产 (RWA) 领域的先驱，解决了全球电子商务中的流动性问题。目前，亚马逊上的卖家通常需要等待 14 到 28 天才能收到销售款项。\n\n该项目最近在 Animoca Brands 领投的种子轮融资中获得了 1050 万美元。在备受期待的代币生成事件 (TGE) 之前，他们推出了“Dow XP 计划”来大量奖励早期用户。',
    strategy: '我们的策略有两个：首先，连接您的社交账户，立即锁定免费社交积分。其次，如果您有闲置的稳定币，将其存入他们为期 90 天的金库中可能会极大地增加您的空投乘数。',
    steps: ['导航至官方 Dow Protocol 积分仪表板。', '连接您的 X (Twitter) 账户以获得初始 50 XP。', '发布关于 Dow Protocol 的高质量推文。', '关联您的 Telegram 和 Discord 账户。', '向稳定币金库提供流动性（可选但价值很高）。', '通过推荐最大化收益。'],
    faqs: [
      { question: 'Dow Protocol 代币何时发布 (TGE)？', answer: '团队尚未公布 TGE 的官方日期。' },
      { question: '参与完全免费吗？', answer: '社交任务 100% 免费。金库存款需要真实的稳定币。' },
      { question: '如何解锁我的推荐链接？', answer: '您的推荐链接将保持锁定状态，直到您完成推特发帖任务。' }
    ]
  },
  tl: {
    reward: 'Potensyal na Kita', category: 'RWA / DeFi',
    overview: 'Ang Dow Protocol ay mabilis na umuusbong bilang isang pioneer sa espasyo ng Real World Asset (RWA) sa pamamagitan ng paglutas sa problema ng liquidity sa global e-commerce. Ang mga nagbebenta sa Amazon ay madalas maghintay ng 14 hanggang 28 araw para makuha ang kanilang pondo.\n\nKamakailan, ang proyekto ay nakakuha ng $10.5 Milyon mula sa Animoca Brands. Inilunsad nila ang "Dow XP Program" upang magbigay ng malaking pabuya sa mga maagang sumali bago ang kanilang Token Generation Event (TGE).',
    strategy: 'Ang aming diskarte ay: Una, agad na kunin ang libreng social points (Task XP). Pangalawa, i-deposito ang mga hindi ginagamit na stablecoins sa kanilang 90-araw na vault bilang malaking multiplier para sa airdrop.',
    steps: ['Pumunta sa opisyal na Dow Protocol Points Dashboard.', 'Ikonekta ang iyong X (Twitter) account para makuha ang iyong unang 50 XP.', 'Mag-publish ng de-kalidad na post tungkol sa Dow Protocol.', 'I-link ang iyong Telegram at Discord accounts.', 'Magbigay ng Liquidity sa Stablecoin Vaults (Opsyonal).', 'Palakihin ang kita sa pamamagitan ng Referrals.'],
    faqs: [
      { question: 'Kailan ang Dow Protocol token launch (TGE)?', answer: 'Hindi pa inanunsyo ng koponan ang opisyal na petsa para sa kanilang TGE.' },
      { question: 'Libre ba ang paglahok?', answer: 'Ang social farming ay 100% libre. Ang vault deposits ay nangangailangan ng stablecoins.' },
      { question: 'Paano ko maa-unlock ang aking referral link?', answer: 'Naka-lock ang iyong link hanggang matapos mo ang X (Twitter) posting task.' }
    ]
  }
};

export const i18n_airdrops = {
  en: airdrops.map(a => {
    if (a.id === 'dow-protocol') {
      return { ...a, overview: enOverview, strategy: enStrategy, steps: enSteps, faqs: enFaqs };
    }
    return a;
  }),
};

Object.keys(translations).forEach(lang => {
  i18n_airdrops[lang] = airdrops.map(a => {
    if (a.id === 'dow-protocol') {
      return { ...a, ...translations[lang] };
    }
    return {
      ...a,
      reward: translations[lang].reward || 'Potential TGE',
      overview: 'NovaX is the next generation of decentralized infrastructure.',
      steps: ['Visit the site.', 'Connect your wallet.']
    };
  });
});
