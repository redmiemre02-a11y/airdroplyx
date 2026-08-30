import { airdrops } from './airdrops';

export const i18n_airdrops = {
  en: airdrops,
  tr: airdrops.map(a => {
    if (a.id === 'dow-protocol') {
      return {
        ...a,
        reward: 'Potansiyel Kazanç',
        category: 'RWA / DeFi',
        overview: 'Dow Protocol, küresel e-ticaretteki devasa bir sorunu çözerek Gerçek Dünya Varlıkları (RWA) alanında hızla öncü konuma yükseliyor. Şu anda Amazon gibi devasa pazar yerlerindeki satıcılar, satış gelirlerinin hesaplarına geçmesi için genellikle 14 ila 28 gün beklemek zorunda kalıyor. Bu durum, reklam, lojistik ve envanter faturaları birikirken satıcılar için ciddi bir nakit sıkıntısı yaratıyor.\n\nBu açığı kapatmak için Dow Protocol, işletme sermayesi kredisini blok zincirine taşımak üzere blockchain teknolojisini kullanıyor. Bekleyen alacaklarına karşılık bu satıcılara stablecoin (sabit coin) fonlaması sağlıyor. Süreç son derece güvenli ve otomatik; Dow, fonlar serbest kaldığında ödemeyi doğrudan satıcının platform bakiyesinden tahsil ediyor.\n\nProje kısa süre önce Animoca Brands, MH Ventures ve Mapleblock gibi sektör devlerinin öncülük ettiği tohum (seed) yatırım turunda 10.5 Milyon Dolar gibi devasa bir fon topladı. Bu dev bütçeyle birlikte BNB Chain ve Sui ağlarındaki havuzlarını genişletiyorlar. Merakla beklenen Token Üretim Etkinliği (TGE) öncesinde likiditeyi ve kullanıcı benimsemesini artırmak için "Dow XP Programı"nı başlattılar. Bu program erken benimseyenleri, topluluk üyelerini ve likidite sağlayıcıları devasa ödüllerle destekliyor.',
        strategy: 'Dow Protocol\'ün en benzersiz yanı, temelindeki iş modelinin halihazırda kanıtlanmış olmasıdır. Getiri, sürdürülemez token emisyonlarından ziyade doğrudan gerçek dünyadaki ticari kâr paylarından geliyor. Buradaki stratejimiz iki aşamalı: İlk olarak, X, Discord ve Telegram hesaplarınızı bağlayarak ücretsiz sosyal puanları (Task XP) anında cebinize koyun. İkinci olarak, boşta duran stablecoin\'leriniz varsa, bunların küçük bir kısmını 90 günlük havuzlara kilitlemek airdrop için devasa bir çarpan (multiplier) görevi görebilir; çünkü RWA protokollerinde tarihsel olarak en çok ödüllendirilenler her zaman likidite sağlayıcılardır.',
        steps: [
          'Resmi Dow Protocol Puan (Points) Paneline Gidin: Resmi Dow Protocol web uygulamasına girerek başlayın. Güvenli bir Web3 cüzdanına ihtiyacınız olacak. BNB Chain üzerinden işlem yapıyorsanız MetaMask veya Rabby Wallet şiddetle tavsiye edilir. Sui havuzlarını kullanmayı planlıyorsanız, Sui uyumlu bir cüzdan (örneğin Sui Wallet) bağladığınızdan emin olun.',
          'X (Twitter) Hesabınızı Bağlayın: Bu zorunlu başlangıç adımıdır. X hesabınızı bağlamak size anında ilk 50 XP\'nizi kazandıracaktır. Daha da önemlisi, bu adım platformdaki diğer tüm referans ve sosyal görevlerin kilidini açar.',
          'Dow Protocol Hakkında Kaliteli Bir Gönderi Paylaşın: Platform sizden X üzerinde proje hakkında bir tweet atmanızı istiyor. Hızlıca onay almak için spam yapmaktan kaçının. RWA e-ticaret havuzları veya aldıkları 10.5 Milyon Dolarlık yatırım hakkında özgün bir cümle yazın. Gönderi linkini panel üzerinden gönderin. Manuel olarak incelenip onaylandıktan sonra 50 XP daha kazanır ve kişisel referans linkinizin kilidini açarsınız.',
          'Telegram ve Discord Hesaplarınızı Bağlayın: Görev listesinde aşağı inin ve Telegram ile Discord hesaplarınızı bağlayın. Bunlar bir dakikadan kısa süren tek seferlik doğrulamalardır ve bakiyenizi anında 100 XP (her biri için 50 XP) artıracaktır.',
          'Stablecoin Havuzlarına Likidite Sağlayın (İsteğe Bağlı ama Yüksek Kazançlı): Abonelik pencerelerini takip edin. Bir havuz açıldığında (örneğin BNB Chain\'deki Dow E-Commerce Financing Vault veya Sui\'deki Dowsure Stable #1), stablecoin yatırabilirsiniz. Bu havuzların genellikle 90 günlük bir kilit süresi olduğunu unutmayın, bu yüzden sadece hemen ihtiyacınız olmayan fonları yatırın. Bu eylemin gelecekteki airdrop için en yüksek ağırlığa sahip olması bekleniyor.',
          'Referanslarla Kazancınızı Katlayın: X gönderiniz onaylandıktan sonra referans linkinizi kopyalayın. Bunu kripto ağınızla ve arkadaşlarınızla paylaşın. Referanslar şu anda sosyal görevlerin ötesinde XP\'nizi sınırsız bir şekilde ölçeklendirmenin tek yoludur.'
        ],
        faqs: [
          { question: 'Dow Protocol token lansmanı (TGE) ne zaman?', answer: 'Dow Protocol ekibi henüz Token Üretim Etkinliği (TGE) veya token kısaltması için resmi bir tarih açıklamadı. Şu anda ana odak noktası tamamen Dow XP toplamaktır.' },
          { question: 'Katılmak tamamen ücretsiz mi?', answer: 'Evet, sosyal farmlama kısmı %100 ücretsizdir. Sosyal hesaplarınızı bağlamak ve arkadaşlarınızı davet etmek tamamen ücretsizdir (sıfır ağ ücreti). Ancak havuz yatırımlarına katılmak, gerçek stablecoin\'ler ve ufak ağ işlem ücretleri gerektirir.' },
          { question: 'Referans linkimin kilidini nasıl açarım?', answer: 'Referans linkiniz, X (Twitter) gönderi görevini tamamlayana kadar kilitli kalır. Bir gönderi yazmalı, URL\'yi panellerine göndermeli ve ekiplerinin incelemesini beklemelisiniz. Onaylandıktan sonra davet linkiniz aktif hale gelir.' }
        ]
      };
    }
    return {
      ...a,
      reward: 'Potansiyel Kazanç',
      overview: 'NovaX, merkeziyetsiz altyapının yeni neslidir. Tüm ağları birleştirir.',
      steps: ['Siteye girin.', 'Cüzdanınızı bağlayın.']
    };
  }),
  ru: airdrops.map(a => ({
    ...a,
    reward: 'Потенциальная прибыль',
    overview: 'Dow Protocol — это RWA-платформа для электронной коммерции...',
    strategy: 'Сделайте социальные задания для получения 50 XP.',
    steps: ['Подключите кошелек', 'Подключите Twitter', 'Поделитесь ссылкой']
  }))
};
