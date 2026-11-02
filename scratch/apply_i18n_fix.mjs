import fs from 'fs';
import path from 'path';

const projectRoot = 'C:\\Users\\cigo\\.gemini\\antigravity\\scratch\\airdroplyx';

// 1. Read existing Layout.astro and replace i18n sections
const layoutPath = path.join(projectRoot, 'src', 'layouts', 'Layout.astro');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

// Update hreflang tags in Layout.astro
const oldHreflangBlock = /<!-- Multi-Language SEO hreflang Alternates[\s\S]*?<!-- RSS Autodiscovery Feeds -->/;
const newHreflangBlock = `<!-- Multi-Language SEO hreflang Alternates (Google International Standards) -->
		<link rel="alternate" hreflang="x-default" href={canonicalURL} />
		<link rel="alternate" hreflang="en" href={canonicalURL} />
		<link rel="alternate" hreflang="tr" href={canonicalURL} />
		<link rel="alternate" hreflang="ru" href={canonicalURL} />
		<link rel="alternate" hreflang="es" href={canonicalURL} />
		<link rel="alternate" hreflang="vi" href={canonicalURL} />
		<link rel="alternate" hreflang="zh-CN" href={canonicalURL} />
		<link rel="alternate" hreflang="de" href={canonicalURL} />
		<link rel="alternate" hreflang="ja" href={canonicalURL} />
		<link rel="alternate" hreflang="ko" href={canonicalURL} />
		<link rel="alternate" hreflang="fr" href={canonicalURL} />
		<link rel="alternate" hreflang="pt" href={canonicalURL} />
		<link rel="alternate" hreflang="id" href={canonicalURL} />
		<link rel="alternate" hreflang="uk" href={canonicalURL} />
		<link rel="alternate" hreflang="ar" href={canonicalURL} />

		<!-- RSS Autodiscovery Feeds -->`;

layoutContent = layoutContent.replace(oldHreflangBlock, newHreflangBlock);

// Update Google Translate integration in Layout.astro
const oldEngineBlock = /<!-- Multi-Language Engine[\s\S]*?<script is:inline>\s*if \(localStorage\.getItem\('theme'\)/;
const newEngineBlock = `<!-- Multi-Language Engine (Google Translate Neural Integration) -->
		<div id="google_translate_element" style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;" aria-hidden="true"></div>
		<style is:global>
			.goog-te-banner-frame.skiptranslate, 
			.goog-te-banner-frame,
			iframe.goog-te-banner-frame { 
				display: none !important; 
				visibility: hidden !important;
				height: 0 !important;
			}
			body { 
				top: 0px !important; 
				position: static !important;
			}
			.goog-te-gadget,
			.goog-te-gadget-simple,
			#goog-gt-tt, 
			.goog-te-balloon-frame,
			.VIpgJd-ZVi9od-ORHb-OEVmcd,
			.VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
			.VIpgJd-ZVi9od-aZ2wEe-OiiCO { 
				display: none !important; 
				visibility: hidden !important;
			}
			.goog-text-highlight { 
				background: none !important; 
				box-shadow: none !important; 
			}
		</style>
		<script is:inline>
			// Bulletproof global language switcher function
			window.changeAirdroplyxLanguage = function(langCode, flag, code) {
				localStorage.setItem('airdroplyx_lang', langCode);
				localStorage.setItem('airdroplyx_flag', flag);
				localStorage.setItem('airdroplyx_code', code);
				document.documentElement.lang = langCode;

				const isEn = langCode === 'en';
				const cookieVal = isEn ? '' : '/en/' + langCode;
				const expiresDate = isEn 
					? 'expires=Thu, 01 Jan 1970 00:00:00 UTC;' 
					: 'expires=' + new Date(Date.now() + 365*24*60*60*1000).toUTCString() + ';';
				
				const host = window.location.hostname;
				const hostParts = host ? host.split('.') : [];
				const domains = [''];
				if (host) {
					domains.push(host);
					domains.push('.' + host);
				}
				if (hostParts.length >= 2) {
					const rootDomain = hostParts.slice(-2).join('.');
					if (rootDomain !== host) {
						domains.push(rootDomain);
						domains.push('.' + rootDomain);
					}
				}

				domains.forEach(function(d) {
					const domAttr = d ? ' domain=' + d + ';' : '';
					if (isEn) {
						document.cookie = 'googtrans=; path=/; ' + expiresDate + domAttr;
						document.cookie = 'googtrans=none; path=/; ' + expiresDate + domAttr;
						document.cookie = 'googtransopt=; path=/; ' + expiresDate + domAttr;
					} else {
						document.cookie = 'googtrans=' + cookieVal + '; path=/; ' + expiresDate + domAttr;
					}
				});

				// Instant clean reload to guarantee flawless Google Translation and zero DOM corruption
				window.location.reload();
			};

			window.googleTranslateElementInit = function() {
				new google.translate.TranslateElement({
					pageLanguage: 'en',
					includedLanguages: 'en,tr,ru,es,vi,zh-CN,de,ja,ko,fr,pt,id,uk,ar',
					autoDisplay: false
				}, 'google_translate_element');
			};

			// Sync html lang attribute early
			const savedLang = localStorage.getItem('airdroplyx_lang');
			if (savedLang) {
				document.documentElement.lang = savedLang;
			}
		</script>
		<script is:inline src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async defer></script>

		<script is:inline>
			if (localStorage.getItem('theme')`;

layoutContent = layoutContent.replace(oldEngineBlock, newEngineBlock);
fs.writeFileSync(layoutPath, layoutContent, 'utf8');
console.log('Successfully updated Layout.astro with 14 languages & robust cookie engine!');

// 2. Read and update Header.astro
const headerPath = path.join(projectRoot, 'src', 'components', 'Header.astro');
let headerContent = fs.readFileSync(headerPath, 'utf8');

// Replace Desktop dropdown block
const oldDesktopDropdownRegex = /<!-- Multi-Language Switcher Dropdown \(Desktop\) -->[\s\S]*?<!-- Dark Mode Toggle -->/;
const newDesktopDropdown = `<!-- Multi-Language Switcher Dropdown (Desktop) -->
      <div class="relative" id="lang-dropdown-wrapper">
        <button 
          type="button" 
          id="lang-btn"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm cursor-pointer"
          title="Select Language / Dil Seçin"
        >
          <span id="current-lang-flag">🌐</span>
          <span id="current-lang-code" class="uppercase">EN</span>
          <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>

        <!-- Dropdown Menu -->
        <div 
          id="lang-menu" 
          class="hidden absolute right-0 mt-2 w-56 max-h-[460px] overflow-y-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl py-1.5 z-50 divide-y divide-slate-100 dark:divide-slate-800/40"
        >
          <div class="px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-50/80 dark:bg-slate-800/80 sticky top-0 backdrop-blur-sm z-10 flex items-center justify-between">
            <span>Language / Dil Seçimi</span>
            <span class="text-[9px] font-bold text-blue-600 dark:text-blue-400">14 Languages</span>
          </div>
          <div class="py-1">
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="en" data-flag="🇬🇧" data-code="EN">
              <span class="flex items-center gap-2.5"><span>🇬🇧</span> English</span>
              <span class="lang-active-check text-blue-600 dark:text-blue-400 font-black">✓</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="tr" data-flag="🇹🇷" data-code="TR">
              <span class="flex items-center gap-2.5"><span>🇹🇷</span> Türkçe</span>
              <span class="text-[10px] text-emerald-500 font-bold">Popüler</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="ru" data-flag="🇷🇺" data-code="RU">
              <span class="flex items-center gap-2.5"><span>🇷🇺</span> Русский</span>
              <span class="text-[10px] text-blue-500 font-bold">Alpha</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="es" data-flag="🇪🇸" data-code="ES">
              <span class="flex items-center gap-2.5"><span>🇪🇸</span> Español</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="vi" data-flag="🇻🇳" data-code="VI">
              <span class="flex items-center gap-2.5"><span>🇻🇳</span> Tiếng Việt</span>
              <span class="text-[10px] text-amber-500 font-bold">Airdrop</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="zh-CN" data-flag="🇨🇳" data-code="ZH">
              <span class="flex items-center gap-2.5"><span>🇨🇳</span> 简体中文</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="de" data-flag="🇩🇪" data-code="DE">
              <span class="flex items-center gap-2.5"><span>🇩🇪</span> Deutsch</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="ja" data-flag="🇯🇵" data-code="JA">
              <span class="flex items-center gap-2.5"><span>🇯🇵</span> 日本語</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="ko" data-flag="🇰🇷" data-code="KO">
              <span class="flex items-center gap-2.5"><span>🇰🇷</span> 한국어</span>
              <span class="text-[10px] text-indigo-500 font-bold">Web3</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="fr" data-flag="🇫🇷" data-code="FR">
              <span class="flex items-center gap-2.5"><span>🇫🇷</span> Français</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="pt" data-flag="🇧🇷" data-code="PT">
              <span class="flex items-center gap-2.5"><span>🇧🇷</span> Português</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="id" data-flag="🇮🇩" data-code="ID">
              <span class="flex items-center gap-2.5"><span>🇮🇩</span> Indonesia</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="uk" data-flag="🇺🇦" data-code="UK">
              <span class="flex items-center gap-2.5"><span>🇺🇦</span> Українська</span>
            </button>
            <button type="button" class="lang-item w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left" data-lang="ar" data-flag="🇸🇦" data-code="AR">
              <span class="flex items-center gap-2.5"><span>🇸🇦</span> العربية</span>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Dark Mode Toggle -->`;

headerContent = headerContent.replace(oldDesktopDropdownRegex, newDesktopDropdown);

// Replace Mobile language picker block
const oldMobilePickerRegex = /<!-- Mobile Language Selector Row -->[\s\S]*?<nav class="flex flex-col gap-1">/;
const newMobilePicker = `<!-- Mobile Language Selector Row -->
    <div class="mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
      <div class="flex items-center justify-between mb-2">
        <span class="text-[11px] font-black uppercase tracking-wider text-slate-400">Language / Dil Seçimi</span>
        <span class="text-[10px] text-blue-600 dark:text-blue-400 font-bold">14 Dilde Çeviri</span>
      </div>
      <div class="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="en" data-flag="🇬🇧" data-code="EN">🇬🇧 EN</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="tr" data-flag="🇹🇷" data-code="TR">🇹🇷 TR</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="ru" data-flag="🇷🇺" data-code="RU">🇷🇺 RU</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="es" data-flag="🇪🇸" data-code="ES">🇪🇸 ES</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="vi" data-flag="🇻🇳" data-code="VI">🇻🇳 VI</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="zh-CN" data-flag="🇨🇳" data-code="ZH">🇨🇳 ZH</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="de" data-flag="🇩🇪" data-code="DE">🇩🇪 DE</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="ja" data-flag="🇯🇵" data-code="JA">🇯🇵 JA</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="ko" data-flag="🇰🇷" data-code="KO">🇰🇷 KO</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="fr" data-flag="🇫🇷" data-code="FR">🇫🇷 FR</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="pt" data-flag="🇧🇷" data-code="PT">🇧🇷 PT</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="id" data-flag="🇮🇩" data-code="ID">🇮🇩 ID</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="uk" data-flag="🇺🇦" data-code="UK">🇺🇦 UK</button>
        <button type="button" class="mobile-lang-btn px-2 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer" data-lang="ar" data-flag="🇸🇦" data-code="AR">🇸🇦 AR</button>
      </div>
    </div>

    <nav class="flex flex-col gap-1">`;

headerContent = headerContent.replace(oldMobilePickerRegex, newMobilePicker);

// Replace Language Switcher JS in Header.astro
const oldLangScriptRegex = /\/\/ Language Switcher Dropdown Interaction & State Management[\s\S]*?\/\/ Universal Search Palette Trigger/;
const newLangScript = `// Language Switcher Dropdown Interaction & State Management
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  const currentFlag = document.getElementById('current-lang-flag');
  const currentCode = document.getElementById('current-lang-code');

  const savedLang = localStorage.getItem('airdroplyx_lang') || 'en';
  const savedFlag = localStorage.getItem('airdroplyx_flag') || '🇬🇧';
  const savedCode = localStorage.getItem('airdroplyx_code') || 'EN';

  if (currentFlag) currentFlag.textContent = savedFlag;
  if (currentCode) currentCode.textContent = savedCode;

  // Highlight active language in desktop dropdown & mobile pills
  function highlightActiveLang(activeLang) {
    const lang = activeLang || localStorage.getItem('airdroplyx_lang') || 'en';
    document.querySelectorAll('.lang-item').forEach(item => {
      const isCurrent = item.dataset.lang === lang;
      const checkEl = item.querySelector('.lang-active-check');
      if (checkEl) {
        checkEl.style.display = isCurrent ? 'inline' : 'none';
      }
      if (isCurrent) {
        item.classList.add('bg-blue-50', 'dark:bg-slate-800', 'font-bold');
      } else {
        item.classList.remove('bg-blue-50', 'dark:bg-slate-800', 'font-bold');
      }
    });

    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600', 'shadow-sm');
        btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600', 'shadow-sm');
        btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      }
    });
  }
  highlightActiveLang(savedLang);

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
        langMenu.classList.add('hidden');
      }
    });

    document.querySelectorAll('.lang-item').forEach(item => {
      item.addEventListener('click', () => {
        const lang = item.dataset.lang;
        const flag = item.dataset.flag;
        const code = item.dataset.code;
        langMenu.classList.add('hidden');
        if (currentFlag) currentFlag.textContent = flag;
        if (currentCode) currentCode.textContent = code;
        highlightActiveLang(lang);
        if (typeof window.changeAirdroplyxLanguage === 'function') {
          window.changeAirdroplyxLanguage(lang, flag, code);
        }
      });
    });
  }

  // Mobile language button listener
  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      const flag = btn.dataset.flag;
      const code = btn.dataset.code;
      if (currentFlag) currentFlag.textContent = flag;
      if (currentCode) currentCode.textContent = code;
      highlightActiveLang(lang);
      if (typeof window.changeAirdroplyxLanguage === 'function') {
        window.changeAirdroplyxLanguage(lang, flag, code);
      }
    });
  });

  // Universal Search Palette Trigger`;

headerContent = headerContent.replace(oldLangScriptRegex, newLangScript);
fs.writeFileSync(headerPath, headerContent, 'utf8');
console.log('Successfully updated Header.astro with 14 languages & active indicators!');
