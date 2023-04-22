const chara = document.querySelectorAll('.chara');

chara.forEach(chara => {
    chara.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        chara.classList.add('active');
    });
});

const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelector('.active')?.classList.remove('active');
    const selectedChara = document.querySelector(`label[for="${radio.id}"] .chara`);
    if (radio.checked && selectedChara) {
      selectedChara.classList.add('active');
    }
  });
});

const form = document.querySelector('form');
const result = document.createElement('h3');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const q1 = form.q1.value;
    const q2 = form.q2.value;
    const q3 = form.q3.value;
    const q4 = form.q4.value;
    const q5 = form.q5.value;
    const q6 = form.q6.value;
    let character = '';
    switch (q1 + q2 + q3 + q4 + q5 + q6) {
        case 'bbryshn':
        case 'bbryshm':
        character = 'Ryu';
        break;
        case 'bbf':
        character = 'Cammy';
        case 'abm':
        character = 'Ken';
        break;
        case 'ccc':
        character = 'Minions';
        break;
        case 'abc':
        character = 'Iron Man';
        break;
        case 'bac':
        character = 'Batman';
        break;
        case 'cab':
        character = 'Captain America';
        break;
        case 'acb':
        character = 'Spider-Man';
        break;
        case 'bca':
        character = 'Wonder Woman';
        break;
        default:
        character = 'Please check if you have answered all the questions';
        result.textContent = character + '!';
        form.appendChild(result);
        return;
    }
    result.textContent = `Your result is... ${character}!`;
    form.appendChild(result);
    });