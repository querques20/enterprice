const fs = require('fs');

const logoPath = 'C:/Users/facun/OneDrive/Desktop/Proyectos/empoderamiento-docente/Logo ED/1.transparente.png';
const dir = 'C:/Users/facun/OneDrive/Desktop/Proyectos/empoderamiento-docente/.superpowers/brainstorm/1124-1776277482/content/';

function compile(tmplFile, outFile) {
  try {
    const logoData = 'data:image/png;base64,' + fs.readFileSync(logoPath).toString('base64');
    const html = fs.readFileSync(dir + tmplFile, 'utf8').split('LOGO_PLACEHOLDER').join(logoData);
    fs.writeFileSync(dir + outFile, html, 'utf8');
    const stat = fs.statSync(dir + outFile);
    console.log(outFile + ' generado — ' + Math.round(stat.size / 1024) + 'KB');
  } catch(e) {
    console.error('ERROR [' + tmplFile + ']:', e.message);
  }
}

compile('home-v7-template.html', 'home-v7.html');
compile('nosotros-template.html', 'nosotros.html');
