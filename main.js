$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#novaTarefa').val();
        const novoItem = $('<li></li>');
        $(`<input type="text" required placeholder="${novaTarefa}" />`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })
})