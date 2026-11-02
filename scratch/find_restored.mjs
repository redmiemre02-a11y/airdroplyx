import https from 'https';

https.get('https://translate.googleapis.com/_/translate_http/_/js/k=translate_http.tr.tr.BJmE4Ub8hwI.O/am=AACAAQ/d=1/ed=1/rs=AN8SPfowbEXm1d5AazBzAZzxXYQbeR10TQ/m=el_main', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    let pos = d.indexOf('restored');
    console.log(d.substring(pos - 100, pos + 400));
  });
});
