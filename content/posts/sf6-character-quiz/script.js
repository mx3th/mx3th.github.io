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
        case '1pryshm':
        case '1rryshm':
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
        case '1bkeshn':
        case '1bkeshm':
            character = 'Ken';
            img.src = 'img/ken.png';
            paragraph.textContent = "Former US National Fighting Champ, and ex-VP of the Masters Foundation. Accusations of orchestrating a criminal plot have forced Ken to abandon his family and business and go into hiding. Ken is well suited to players of all skill levels. Like Ryu, Ken's move-set is very well rounded, the difference is Ken is slightly better suited to players who want a more offensive style and plenty of flashy moves. His iconic fiery 'Shoryuken!' will make any opponent scared when you're up close!";
            videoSrc = 'https://www.youtube.com/embed/IbPoYZbk_jM';
            height = "5'9";
            weight = "183lbs";
            birthplace = 'United States of America';
            likes = 'Family';
            dislikes = 'Pointless meetings';
        case '1bchshn':
        case '1bchshm':
            character = 'Chun';
            img.src = 'img/chunli.png';
            paragraph.textContent = "A former high-kicking ICPO agent, Chun-Li looks after Li-Fen, a victim of the Black Moon Incident. With Shadaloo sundered, she now runs kung fu classes, and has become a well-loved member of the local community. Chun-Li is a technical character with multiple move-sets based on her stance. She is very versatile and can handle all ranges of play exceptionally well. Despite her technical aspects, it is possible to succeed with Chun-Li using just the basics. Chun-Li is recommended for players who want a versatile character who is easy to play but hard to master.";
            videoSrc = 'https://www.youtube.com/embed/8bg-nvvI9D0';
            height = "5'7";
            weight = "It's a secret♡";
            birthplace = 'United Kingdom';
            likes = 'Days off, shopping with Li-Fen';
            dislikes = 'Crime, indecisiveness';
        case '1bcashn':
            character = 'Cammy';
            img.src = 'img/cammy.png';
            paragraph.textContent = "Member of British special forces unit Delta Red. Distinguished herself in the operation against Shadaloo, with which she shares a fated connection. Hyper-competent but somewhat moody.";
            videoSrc = 'https://www.youtube.com/embed/X_-2qMyfj5A';
            height = "5'5";
            weight = "134lbs";
            birthplace = 'United Kingdom';
            likes = 'Cats';
            dislikes = "Everything (if she's grumpy)";
        break;
        case '1bjushn':
            character = 'Juri';
            img.src = 'img/juri.png';
            paragraph.textContent = "This sadistic thrillseeker enjoys the strife and suffering of others, taking immense joy in obliterating her foes.";
            videoSrc = 'https://www.youtube.com/embed/_TcaWC551bw';
            height = "5'5";
            weight = "126lbs";
            birthplace = 'South Korea';
            likes = 'Motorcycles, spiders';
            dislikes = "Buzzkills, rules";
        break;
        case '1bmrshf':
            character = 'Marisa';
            img.src = 'img/marisa.png';
            paragraph.textContent = "An up-and-coming jewelry designer from Italy who claims ancestry to ancient Greek warriors. As a child, she was inspired by a vision of the Colosseum in its prime. Marisa is a well rounded but aggressive character who can fight at mid and close range distances. She has high damage far reaching normal attacks to help close the distance, as well as an assortment of devastating unblockable throw attacks for when she get's up close.";
            videoSrc = 'https://www.youtube.com/embed/r4JKiW19weE';
            height = "6'8";
            weight = "269lbs";
            birthplace = 'Italy';
            likes = 'Worthy opponents, ossobuco, fine arts';
            dislikes = 'Heights';
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

    const likesItem = document.createElement('li');
    likesItem.textContent = `Likes: ${likes}`;
    facts.appendChild(likesItem);

    const dislikesItem = document.createElement('li');
    dislikesItem.textContent = `Dislikes: ${dislikes}`;
    facts.appendChild(dislikesItem);

    form.appendChild(facts);
    form.appendChild(paragraph);

    theme.textContent = `Vibing with ${character}? Check out their theme below!`;
    form.appendChild(theme)

    if (videoLink === undefined) {
        videoLink = document.createElement('p');
        videoLink.innerHTML = `<iframe width="560" height="315" src="${videoSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        form.appendChild(videoLink);
      }

    footer.textContent = "Not satisfied with your result? Try changing some of your answers!";
    form.appendChild(footer)
    });