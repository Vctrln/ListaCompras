document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.input-container input');
  const addButton = document.querySelector('.add-button');
  const lista = document.querySelector('.lista');
  const alerta = document.querySelector('.alerta');
  const fecharAlerta = document.querySelector('.fechar-alerta');

  // alerta
  function mostrarAlerta() {
    alerta.style.display = 'flex';
    setTimeout(() => {
      alerta.style.display = 'none';
    }, 3000); 
  }

  // fechar o aviso no "X"
  fecharAlerta.addEventListener('click', function () {
    alerta.style.display = 'none';
  });

  // Cria um novo item na lista
  function criarItem(texto) {
    const li = document.createElement('li');

    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(' ' + texto));

    const botaoDelete = document.createElement('button');
    botaoDelete.classList.add('delete');
    const imgLixeira = document.createElement('img');
    imgLixeira.src = './assets/lixeira.png';
    imgLixeira.alt = '';
    botaoDelete.appendChild(imgLixeira);

    // Quando clicar na lixeira o item é removido 
    botaoDelete.addEventListener('click', function () {
      lista.removeChild(li);
      mostrarAlerta();
    });


    li.appendChild(label);
    li.appendChild(botaoDelete);

    lista.appendChild(li);
  }

 
  addButton.addEventListener('click', function () {
    const texto = input.value.trim();
    if (texto !== '') {
      criarItem(texto);
      input.value = '';      
      input.focus();        
    }
  });

  // adicionar item
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      addButton.click();
    }
  });


  document.querySelectorAll('.delete').forEach(button => {
    button.addEventListener('click', function () {
      const li = this.closest('li');
      lista.removeChild(li);
      mostrarAlerta();
    });
  });

  alerta.style.display = 'none';
});