import https from 'https';

const testLangs = ['en', 'tr', 'ru', 'es', 'vi', 'zh-CN', 'de', 'ja', 'ko', 'fr', 'pt', 'id', 'uk', 'ar'];

https.get('https://translate.googleapis.com/_/translate_http/_/js/k=translate_http.tr.tr.BJmE4Ub8hwI.O/am=AACAAQ/d=1/ed=1/rs=AN8SPfowbEXm1d5AazBzAZzxXYQbeR10TQ/m=el_main', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('Script loaded, length:', d.length);
    for (const l of testLangs) {
      const target = `"${l}"`;
      const target2 = `"${l.toLowerCase()}"`;
      const found = d.includes(target) || d.includes(target2) || (l === 'zh-CN' && d.includes('zh-CN'));
      console.log(`Language "${l}": ${found ? 'FOUND / SUPPORTED' : 'NOT FOUND'}`);
    }
  });
});
