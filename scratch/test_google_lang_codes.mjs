import https from 'https';

https.get('https://translate.googleapis.com/_/translate_http/_/js/k=translate_http.tr.tr.BJmE4Ub8hwI.O/am=AACAAQ/d=1/ed=1/rs=AN8SPfowbEXm1d5AazBzAZzxXYQbeR10TQ/m=el_main', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Search for language codes like zh, zh-CN, tr, etc.
    const zhIndex = data.indexOf('zh-CN');
    const zhIndex2 = data.indexOf('"zh"');
    const zhIndex3 = data.indexOf("'zh'");
    console.log('zh-CN found index:', zhIndex);
    console.log('"zh" found index:', zhIndex2);
    console.log("'zh' found index:", zhIndex3);
    
    // Look around "googtrans"
    let pos = 0;
    while ((pos = data.indexOf('googtrans', pos)) !== -1) {
      console.log('googtrans snippet:', data.substring(Math.max(0, pos - 40), pos + 60));
      pos += 9;
    }
  });
});
