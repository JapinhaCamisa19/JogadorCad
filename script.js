// ===== script.js =====
const form = document.getElementById('form-jogador');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // pega os dados do formulário
    const dados = new FormData(form);
    const nome         = dados.get('nome');
    const time         = dados.get('time');
    const gols         = dados.get('gols');
    const assistencias = dados.get('assistencias');
    const melhor       = dados.get('melhor');
    const obs          = dados.get('obs') || 'Nenhuma';

    // monta a mensagem
    const mensagem = `⚽ *Cadastro de Jogador* ⚽\n` +
        `👤 *Nome:* ${nome}\n` +
        `🏟️ *Time:* ${time}\n` +
        `🥅 *Gols:* ${gols}\n` +
        `🎯 *Assistências:* ${assistencias}\n` +
        `🏅 *Melhor da Partida:* ${melhor}\n` +
        `📝 *Observações:* ${obs}`;

    // seu número com DDI (55 = Brasil) + DDD + número
    const numero = '5518997209282';   // <-- seu número com DDI

    // gera o link do WhatsApp e abre em nova aba
    const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');

    // limpa o formulário
    form.reset();
});
