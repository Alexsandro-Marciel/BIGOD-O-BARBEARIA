function abrir() {
    document.querySelector("form").style.opacity = 1;
    document.querySelector("div").style.opacity = 0.2;
}

function fechar() {
    document.querySelector("form").style.opacity = 0
    document.querySelector("div").style.opacity = 1
}

var draggableElements = document.querySelectorAll('.draggable');
var draggable;

for (var i = 0; i < draggableElements.length; i++) {
    draggableElements[i].addEventListener('dragstart', function (event) {
        draggable = this;
        event.dataTransfer.setData('text/plain', null);
    });

    draggableElements[i].addEventListener('drag', function (event) {
        // Adicione qualquer lógica adicional de arrastar, se necessário
    });
}

document.addEventListener('dragover', function (event) {
    event.preventDefault();
});

document.addEventListener('drop', function (event) {
    if (draggable) {
        event.preventDefault();
        draggable.style.left = event.pageX + 'px';
        draggable.style.top = event.pageY + 'px';
        draggable = null;
    }
});


