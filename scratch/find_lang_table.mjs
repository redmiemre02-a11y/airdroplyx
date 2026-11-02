import https from 'https';

https.get('https://translate.googleapis.com/_/translate_http/_/js/k=translate_http.tr.tr.BJmE4Ub8hwI.O/am=AACAAQ/d=1/ed=1/rs=AN8SPfowbEXm1d5AazBzAZzxXYQbeR10TQ/m=el_main', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    // Search for 'Türkçe' or 'Russian' or 'Turkish'
    const words = ['Türkçe', 'Turkish', 'Russian', 'Русский', 'German', 'Deutsch'];
    for (const w of words) {
      const idx = d.indexOf(w);
      console.log(`Word "${w}": index ${idx}`);
      if (idx !== -1) {
        console.log('Snippet:', d.substring(idx - 30, idx + 60));
      }
    }
  });
});
