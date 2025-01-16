import React from 'react'; 
// Importa a biblioteca React, necessária para criar componentes e gerenciar a interface do usuário.

import ReactDOM from 'react-dom/client'; 
// Importa ReactDOM, que permite renderizar o aplicativo React no DOM.

import App from './App.jsx'; 
// Importa o componente principal da aplicação, onde a lógica principal e os outros componentes são organizados.

import './index.css'; 
// Importa o arquivo de estilos globais para definir a aparência da aplicação.

ReactDOM.createRoot(document.getElementById('root')).render(
  // Cria uma raiz React vinculada ao elemento do DOM com ID 'root', onde o aplicativo será renderizado.
  <React.StrictMode>
    {/* Ativa verificações adicionais em tempo de desenvolvimento para identificar problemas potenciais. */}
    <App />
    {/* Renderiza o componente principal da aplicação. */}
  </React.StrictMode>,
);
