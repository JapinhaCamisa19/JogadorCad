const form = document.getElementById('form-jogador');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dados = new FormData(form);
    const nome        = dados.get('nome');
    const time        = dados.get('time');
    const adversario  = dados.get('adversario');
    const data        = dados.get('data');
    const competicao  = dados.get('competicao') || 'Não informado';
    const gols        = dados.get('gols');
    const assistencias= dados.get('assistencias');
    const melhor      = dados.get('melhor');
    const nota        = dados.get('nota') || 'Sem nota';
    const campeao     = dados.get('campeao');
    const obs         = dados.get('obs') || 'Nenhuma';

    const mensagem = `🎮 *Ficha de Partida - PES 2018*\n\n` +
        `👤 *Jogador:* ${nome}\n` +
        `🏟️ *Time:* ${time}\n` +
        `🆚 *Adversário:* ${adversario}\n` +
        `📅 *Data:* ${data}\n` +
        `🏆 *Competição:* ${competicao}\n` +
        `🥅 *Gols:* ${gols}\n` +
        `🎯 *Assistências:* ${assistencias}\n` +
        `🏅 *Melhor da Partida:* ${melhor}\n` +
        `🧠 *Nota:* ${nota}\n` +
        `🥇 *Foi campeão:* ${campeao}\n` +
        `📝 *Observações:* ${obs}`;

    const numero = '5518997209282'; // Seu número com DDI (Brasil = 55)

    const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');

    form.reset();
});
