import https from 'https';

https.get('https://translate.googleapis.com/_/translate_http/_/js/k=translate_http.tr.tr.BJmE4Ub8hwI.O/am=AACAAQ/d=1/ed=1/rs=AN8SPfowbEXm1d5AazBzAZzxXYQbeR10TQ/m=el_main', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    // search for restore or original
    const terms = ['restore', 'show original', 'original', 'finish'];
    for (const t of terms) {
      let pos = d.toLowerCase().indexOf(t);
      if (pos !== -1) {
        console.log(`Found "${t}" at ${pos}:`, d.substring(pos - 40, pos + 100));
      }
    }
  });
});
