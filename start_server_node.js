const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const HOST = 'localhost';

// MIME types para diferentes extensões
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json'
};

const server = http.createServer((req, res) => {
    // Adicionar headers CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './prototipo_3d.html';
    }
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>404 - Arquivo não encontrado</title></head>
                        <body>
                            <h1>404 - Arquivo não encontrado</h1>
                            <p>O arquivo <code>${filePath}</code> não foi encontrado.</p>
                            <p><a href="/">Voltar ao protótipo</a></p>
                        </body>
                    </html>
                `);
            } else {
                res.writeHead(500);
                res.end(`Erro do servidor: ${error.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, HOST, () => {
    console.log('🌙 Servidor local iniciado!');
    console.log(`📡 URL: http://${HOST}:${PORT}`);
    console.log(`🎮 Abra: http://${HOST}:${PORT}/prototipo_3d.html`);
    console.log('⏹️  Pressione Ctrl+C para parar o servidor');
    console.log('-'.repeat(50));
    
    // Abrir automaticamente no navegador
    const { exec } = require('child_process');
    exec(`start http://${HOST}:${PORT}/prototipo_3d.html`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`❌ Erro: Porta ${PORT} já está em uso!`);
        console.log('💡 Tente fechar outros programas que possam estar usando a porta 8000');
    } else {
        console.log(`❌ Erro ao iniciar servidor: ${err.message}`);
    }
    process.exit(1);
});
