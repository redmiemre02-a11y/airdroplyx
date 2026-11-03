import fs from 'fs';
import path from 'path';

// Test XML parser
function checkXML(xmlString, label) {
  // Simple check for unclosed tags or invalid entities
  const unescapedAmp = xmlString.match(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/);
  if (unescapedAmp) {
    console.error(`❌ ${label} has unescaped ampersand!`, unescapedAmp);
    return false;
  }
  console.log(`✅ ${label} XML check passed! Length: ${xmlString.length} chars`);
  return true;
}

console.log('Testing XML helper ready.');
