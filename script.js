
/* ===== PAINEL INTERATIVO ===== */

#painel-interativo {
    background-color: white;
    padding: 30px;
    border-radius: 16px;
    border: 1px solid #dce7df;
}

.botoes-problemas {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 22px 0;
}

.botoes-problemas button {
    background-color: #245d49;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background-color 0.2s,
                transform 0.2s;
}

.botoes-problemas button:hover {
    background-color: #173d35;
    transform: translateY(-2px);
}

.botoes-problemas button:focus-visible {
    outline: 3px solid #69a981;
    outline-offset: 3px;
}

#detalhes-problema {
    background-color: #edf4ef;
    padding: 22px;
    border-radius: 10px;
    border-left: 4px solid #69a981;
}

#detalhes-problema h3 {
    color: #245d49;
    margin-bottom: 12px;
}

#detalhes-problema p {
    margin-bottom: 12px;
}

#detalhes-problema p:last-child {
    margin-bottom: 0;
}
