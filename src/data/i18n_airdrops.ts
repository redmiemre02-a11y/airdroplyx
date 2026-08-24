import { airdrops } from './airdrops';

// Temporary mock translations for demonstration
export const i18n_airdrops = {
  en: airdrops,
  tr: airdrops.map(a => ({
    ...a,
    reward: 'Potansiyel Kazanç',
    category: 'Kategori',
    overview: a.id === 'dow-protocol' ? 'Dow Protocol, Animoca Brands tarafından desteklenen ve küresel e-ticaretteki kredi sorununu çözen bir Gerçek Dünya Varlığı (RWA) platformudur. Erken kullanıcı olmak için sosyal görevleri yapabilir veya havuzlara likidite ekleyebilirsiniz.' : 'NovaX, merkeziyetsiz altyapının yeni neslidir. Tüm ağları birleştirir.',
    strategy: 'Bu airdrop test aşamasında olduğu için sıfır risk taşıyor. Mutlaka X (Twitter) görevlerini yapıp 50 XP toplayın.',
    steps: [
      'Siteye girin ve cüzdanınızı bağlayın.',
      'X (Twitter) hesabınızı bağlayarak ilk 50 XP\'yi kazanın.',
      'Proje hakkında bir tweet atıp onaylatın.',
      'Discord ve Telegram kanallarına katılın.',
      'Referans linkinizi arkadaşlarınızla paylaşın.'
    ]
  })),
  ru: airdrops.map(a => ({
    ...a,
    reward: 'Потенциальная прибыль',
    overview: 'Dow Protocol — это RWA-платформа для электронной коммерции...',
    strategy: 'Сделайте социальные задания для получения 50 XP.',
    steps: ['Подключите кошелек', 'Подключите Twitter', 'Поделитесь ссылкой']
  }))
};
