import React from 'react';

// Renderiza trechos entre ** ** em negrito (guia de leitura nas descrições)
const Rich = ({ text }) =>
    text.split('**').map((part, i) =>
        i % 2 ? <strong key={i} className="font-bold text-dark">{part}</strong> : part
    );

export default Rich;
