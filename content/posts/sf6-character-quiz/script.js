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
const img = document.createElement('img');
const paragraph = document.createElement('p');
const facts = document.createElement('ul');
const theme = document.createElement('h4');
const footer = document.createElement('p');
let videoLink = undefined;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const q1 = form.q1.value;
    const q2 = form.q2.value;
    const q3 = form.q3.value;
    const q4 = form.q4.value;
    const q5 = form.q5.value;
    const q6 = form.q6.value;
    let character = '';
    let videoSrc = '';
    let height = '';
    let weight = '';
    let likes = '';
    let dislikes = '';
    let birthplace = '';

    facts.innerHTML = '';

    switch (q1 + q2 + q3 + q4 + q5 + q6) {
        case '1bryshn':
        case '1bryshm':
            character = 'Ryu';
            img.src = 'img/ryu.png';
            paragraph.textContent = "Ryu is a well-mannered and sincere martial artist. He travels the globe in search of worthy opponents. Ryu is well suited to players of all skill levels. He has a well rounded move-set consisting of ranged attacks like his iconic 'Hadouken', as well the tools to deal with the opponent up close. As a bonus he is also a damage powerhouse.";
            videoSrc = 'https://www.youtube.com/embed/Rie_1u6Ple8';
            height = "5'9";
            weight = "187lbs";
            birthplace = 'Japan';
            likes = 'Martial arts';
            dislikes = 'Spiders';
        break;
        case 'bbf':
            character = 'Cammy';
        case 'abm':
            character = 'Ken';
        break;
        default:
            character = 'Please check if you have answered all the questions';
            result.textContent = character + '!';
            form.appendChild(result);
        return;
    }
    result.textContent = `Your result is... ${character}!`;
    form.appendChild(result);
    form.appendChild(img);

    const heightItem = document.createElement('li');
    heightItem.textContent = `Height: ${height}`;
    facts.appendChild(heightItem);

    const weightItem = document.createElement('li');
    weightItem.textContent = `Weight: ${weight}`;
    facts.appendChild(weightItem);

    const birthplaceItem = document.createElement('li');
    birthplaceItem.textContent = `Birthplace: ${birthplace}`;
    facts.appendChild(birthplaceItem);

    form.appendChild(facts);
    form.appendChild(paragraph);

    theme.textContent = `Vibing with ${character}? Check out their theme below!`;
    form.appendChild(theme)

    if (videoLink === undefined) {
        videoLink = document.createElement('p');
        videoLink.innerHTML = `<iframe width="560" height="315" src="${videoSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        form.appendChild(videoLink);
      }

    footer.textContent = 'Not satisfied with your result? Try changing some of your answers!';
    form.appendChild(footer)
    });