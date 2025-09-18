#!/usr/bin/env python3
"""
Servidor local simples para o protótipo 3D
Resolve problemas de CORS ao carregar texturas locais
"""

import http.server
import socketserver
import webbrowser
import os
import sys

# Configurações
PORT = 8000
HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Adicionar headers CORS para permitir carregamento de recursos
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def start_server():
    try:
        # Verificar se a porta está disponível
        with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
            print("🌙 Servidor local iniciado!")
            print(f"📡 URL: http://{HOST}:{PORT}")
            print(f"🎮 Abra: http://{HOST}:{PORT}/prototipo_3d.html")
            print("⏹️  Pressione Ctrl+C para parar o servidor")
            print("-" * 50)
            
            # Abrir automaticamente no navegador
            webbrowser.open(f'http://{HOST}:{PORT}/prototipo_3d.html')
            
            # Iniciar servidor
            httpd.serve_forever()
            
    except OSError as e:
        if e.errno == 10048:  # Porta já em uso
            print(f"❌ Erro: Porta {PORT} já está em uso!")
            print("💡 Tente fechar outros programas que possam estar usando a porta 8000")
            print("🔄 Ou altere a variável PORT no arquivo start_server.py")
        else:
            print(f"❌ Erro ao iniciar servidor: {e}")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n🛑 Servidor parado pelo usuário")
        sys.exit(0)

if __name__ == "__main__":
    start_server()
