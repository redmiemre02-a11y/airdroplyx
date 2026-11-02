import https from 'https';

https.get('https://translate.googleapis.com/_/translate_http/_/js/k=translate_http.tr.tr.BJmE4Ub8hwI.O/am=AACAAQ/d=1/ed=1/rs=AN8SPfowbEXm1d5AazBzAZzxXYQbeR10TQ/m=el_main', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    let pos = d.indexOf('"googtrans",c');
    if (pos !== -1) {
      console.log('Snippet:', d.substring(pos - 150, pos + 100));
      // find the definition of the function called before ("googtrans", c)
      const funcName = d.substring(pos - 4, pos - 1);
      console.log('funcName:', funcName);
      let fpos = d.indexOf(funcName + '=function');
      if (fpos === -1) fpos = d.indexOf(funcName + ' = function');
      if (fpos !== -1) console.log('func definition:', d.substring(fpos, fpos + 250));
    }
  });
});
