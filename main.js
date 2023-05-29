// Executar jQuery script quando a página estiver carregada (pronta)
$(document).ready(function () {
  console.log(document.querySelector("header button")); //Using HTML
  console.log($("#btn-cancel")); //Using jQuery
});

// Evento pra tratar clique do botão "NOVA IMAGEM +"
$("header button").click(function () {
  $("form").slideDown();
});

// Evento pra tratar clique do botão "CANCELAR"
$("#btn-cancel").click(function () {
  $("form").slideUp();
});

// Evento pra tratar clique do botão "ADICIONAR"
$("form").on("submit", function (e) {
  e.preventDefault();
  const address = $("#address-new-img").val();
  const newItem = $('<li style="display: none"></li>');
  $(`<img src="${address}" />`).appendTo(newItem);
  $(`
    <div class="overlay-imagem-link">
        <a href="${address}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>
    </div>
  `).appendTo(newItem);
  $(newItem).appendTo("ul");
  $(newItem).fadeIn(1000);

  $("#address-new-img").val("");
});
