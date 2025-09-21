document.addEventListener("DOMContentLoaded", () => {

  // SWIPER
  document.querySelectorAll('.mini-carrossel').forEach(carousel => {
    new Swiper(carousel, {
      loop: true,
      speed: 950,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: carousel.querySelector('.swiper-button-next'),
        prevEl: carousel.querySelector('.swiper-button-prev')
      }
    });
  });

  // CONTADOR FUNCIONAL
  document.querySelectorAll('.produto-card').forEach(card => {
    const btnMais = card.querySelector('.btn-mais');
    const btnMenos = card.querySelector('.btn-menos');
    const qtdSpan = card.querySelector('.quantidade');

    qtdSpan.textContent = "0"; // começa em 0

    btnMais.addEventListener('click', () => {
      qtdSpan.textContent = Number(qtdSpan.textContent) + 1;
    });

    btnMenos.addEventListener('click', () => {
      const atual = Number(qtdSpan.textContent);
      if(atual > 0){
        qtdSpan.textContent = atual - 1;
      }
    });
  });

  // BOTÃO WHATSAPP
  document.getElementById("btn-whatsapp").addEventListener("click", (e) => {
    e.preventDefault();

    const produtosSelecionados = Array.from(document.querySelectorAll(".produto-card"))
      .filter(card => Number(card.querySelector(".quantidade").textContent) > 0)
      .map(card => {
        const nome = card.dataset.nome;
        const preco = Number(card.dataset.preco);
        const qtd = card.querySelector(".quantidade").textContent;
        return `${nome} - Qtd: ${qtd} - R$${preco}`;
      });

    if(produtosSelecionados.length === 0){
      alert("Selecione pelo menos 1 produto!");
      return;
    }

    const mensagem = `Olá! Gostaria de comprar os seguintes produtos:\n\n${produtosSelecionados.join("\n")}`;
    const numeroWhats = "5511986952136";
    window.open(`https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`, "_blank");
  });

});

