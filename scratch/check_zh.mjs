import https from 'https';

https.get('https://translate.googleapis.com/_/translate_http/_/js/k=translate_http.tr.tr.BJmE4Ub8hwI.O/am=AACAAQ/d=1/ed=1/rs=AN8SPfowbEXm1d5AazBzAZzxXYQbeR10TQ/m=el_main', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    let pos = d.indexOf('"zh-CN"');
    while (pos !== -1) {
      console.log('zh-CN at pos', pos, ':', d.substring(pos - 30, pos + 50));
      pos = d.indexOf('"zh-CN"', pos + 1);
    }
  });
});
