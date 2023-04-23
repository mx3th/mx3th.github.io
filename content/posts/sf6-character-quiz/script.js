const form = document.querySelector('form');
const result = document.createElement('h3');
const img = document.createElement('img');
const bio = document.createElement('p');
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
            bio.textContent = "Ryu is a well-mannered and sincere martial artist. He travels the globe in search of worthy opponents. Having overcome the Satsui no Hado, he now seeks yet greater heights.";
            paragraph.textContent = "Ryu is a well rounded character, with strong ranged attacks like his iconic 'Hadouken' fireball, as well great moves like his 'Hashogeki' to keep the pressure on his opponent when up close. As a bonus, Ryu is also a damage powerhouse, with his simplest combos dealing some of the highest damage in the game. Ryu is recommended for players of any skill level who want a well rounded and high damage character.";
            videoSrc = 'https://www.youtube.com/embed/Rie_1u6Ple8';
            height = "5'9";
            weight = "187 lbs";
            birthplace = 'Japan';
            likes = 'Martial arts';
            dislikes = 'Spiders';
        break;
        case '1bkeshn':
        case '1bkeshm':
        case '1sryshn':
        case '1sryshm':
            character = 'Ken';
            img.src = 'img/ken.png';
            bio.textContent = "Former US National Fighting Champ, and ex-VP of the Masters Foundation. Accusations of orchestrating a criminal plot have forced Ken to abandon his family and business and go into hiding.";
            paragraph.textContent = "Ken is a well rounded character, with a slight focus on speed and offense. He still has ranged attacks like the 'Hadouken' fireball, whilst it is not as strong as Ryu's version, he makes up for it with offensive tools like his running step-kick, which allows him to close the gap quickly and suprise the opponent with his offence. Ken is recommended for players who want a well rounded character with a slight focus on speed and offense.";
            videoSrc = 'https://www.youtube.com/embed/IbPoYZbk_jM';
            height = "5'9";
            weight = "183 lbs";
            birthplace = 'United States of America';
            likes = 'Family';
            dislikes = 'Pointless meetings';
        break;
        case '1bchshn':
        case '1bchshm':
            character = 'Chun';
            img.src = 'img/chunli.png';
            bio.textContent = "A former high-kicking ICPO agent, Chun-Li looks after Li-Fen, a victim of the Black Moon Incident. With Shadaloo sundered, she now runs kung fu classes, and has become a well-loved member of the local community.";
            paragraph.textContent = "Chun-Li is a technical character with multiple move-sets based on her stance. She is very versatile and can handle all ranges of play exceptionally well, thanks to her far reaching normal attacks, and her iconic 'Spinning Bird Kick' for when up close. Despite her technical aspects, Chun-Li is still very effective when using just the basics. Chun-Li is recommended for players who want a versatile character that can fight at any distance, and is easy to play but hard to master.";
            videoSrc = 'https://www.youtube.com/embed/8bg-nvvI9D0';
            height = "5'7";
            weight = "It's a secret♡";
            birthplace = 'United Kingdom';
            likes = 'Days off, shopping with Li-Fen';
            dislikes = 'Crime, indecisiveness';
        break;
        case '1bjushn':
            character = 'Juri';
            img.src = 'img/juri.png';
            bio.textContent = "This sadistic thrillseeker enjoys the strife and suffering of others, taking immense joy in obliterating her foes.";
            paragraph.textContent = "Juri is a versatile character who is unique for gaining access to enhanced moves when she stores her charge. This additional level of resource management makes Juri an advanced character. She is capable of playing both a rushdown and zoning style, with immense corner pressure due to her slow moving fireball and amazing gap closing with her far reaching divekick. Juri is recommended for advanced players who want to play both an up-close and ranged style, and want to explore the technical aspects of the game with her unique moves.";
            videoSrc = 'https://www.youtube.com/embed/_TcaWC551bw';
            height = "5'5";
            weight = "126 lbs";
            birthplace = 'South Korea';
            likes = 'Motorcycles, spiders';
            dislikes = "Buzzkills, rules";
        break;
        case '1blushn':
            character = 'Luke';
            img.src = 'img/luke.png';
            bio.textContent = "A contractor for a PMC, Luke uses his elite military background to teach mixed martial arts. His days off are spent eating junk food, playing video games, and fighting, but make no mistake—Luke plays to win.";
            paragraph.textContent = "Luke is a well rounded character, with a move-set similar to 'Shoto' characters, like Ryu and Ken. Luke is different for his ability to 'heat-up' his moves, by holding down the attack button. The properties of Luke's moves will change depending on the duration held, this makes Luke a quite technical character, as players who put the time into mastering these timings will be rewarded with better combos and damage. Luke is recommended for intermediate players who want to add an extra layer of combo mastery to their game.";
            videoSrc= `https://www.youtube.com/embed/0MZPZFAaJ7w`;
            height = "6'1";
            weight = "198 lbs";
            birthplace = 'United States of America';
            likes = 'Travelling, PC games, wacky T-shirts';
            dislikes = 'Horror games';
        break;
        case '1bjashn':
            character = 'Jamie';
            img.src = 'img/jamie.png';
            bio.textContent = "This self-styled Chinatown peacekeeper aspires to the example set by Yun and Yang, the Twin Dragons. An expert dancer, Jamie places justice and friendship above all else, defending his town with martial skill.";
            paragraph.textContent = "Jamie is a character who focuses on speed and fast mixups. Jamie has a unique 'drink' gauge, by consuming his family made herbal drink Jamie increases his energy levels, giving him access to new moves and increasing the damage on his existing ones. This additional resource management makes Jamie an intermediate character. Jamie is recommended for players who want to pressure the opponent with fast mixups, and don't mind an additional layer of resource management.";
            videoSrc= `https://www.youtube.com/embed/TjALmQn5iKc`;
            height = "5'9";
            weight = "170 lbs";
            birthplace = "Hong-Kong";
            likes = "Yun, Yang, dancing, his grandmother";
            dislikes = "Getting lectured, arrogance";
        break;
        case '1bkishn':
            character = 'Kimberly';
            img.src = 'img/kimberly.png';
            bio.textContent = "Uninvited student to Guy, the 39th successor to Bushinryu. Kimberly had an ordinary upbringing, but she's a genuine prodigy who graduated college early...and now wants to be a ninja. Loves '80s pop culture.";
            paragraph.textContent = "Kimberly is fast. Like really fast. And she has lot's of ninja tricks up her sleeve's! Her spray-paint bombs (instead of smoke), make her movements very hard to see. Even opponent's with the quickest reactions will need to stay on their toes. Kimberly can stay on the offense with a plethora of cartwheel attacks, with different follow-ups to stay unpredicatble. Once you've successfully scared the opponent into not doing anything, go for your unblockable Izuna Drop! Kimberly is recommended for players who want to max out their stats on offense and speed, she has quite an extensive move-set, which makes her slightly better for more intermediate players.";
            videoSrc = `https://www.youtube.com/embed/06E2cBONuQw`;
            height = "5'6";
            weight = "134 lbs";
            birthplace = "Birthplace";
            likes = "80's music, sneakers, large numbers";
            dislikes = "Tear-jerker movies";
        break;
        case '1bcashn':
            character = 'Cammy';
            img.src = 'img/cammy.png';
            bio.textContent = "Member of British special forces unit Delta Red. Distinguished herself in the operation against Shadaloo, with which she shares a fated connection. Hyper-competent but somewhat moody.";
            paragraph.textContent = "Cammy is a simple but effective 'rushdown' character. She excels up-close thanks to her speed, with plenty of mix-up options and ways to alter her movements and stay unpredictable. Cammy is recommendend for players who want a straight-forward character, with a strong mid to close range game, and a focus on speed.";
            videoSrc = 'https://www.youtube.com/embed/X_-2qMyfj5A';
            height = "5'5";
            weight = "134 lbs";
            birthplace = 'United Kingdom';
            likes = 'Cats';
            dislikes = "Everything (if she's grumpy)";
        break;
        case '1bgushn':
            character = 'Guile';
            img.src = 'img/guile.png';
            bio.textContent = "A US Air Force pilot who fights for his country, Guile succeeded in dismantling Shadaloo and avenging his friend Charlie. He enjoys living the family man life, but new battlefields await him.";
            paragraph.textContent = "Guile is a ranged fighter, he excels at keeping the opponent away with his 'Sonic Boom' fireballs. No other character can win the fireball war against Guile, and they will be forced to approach him. Once they get impatient and try to jump over your fireballs, hit them out of the skies with your powerful anti-air 'Flashkick!'. Guile is recommended for beginners who want a straight-forward character that allows them to keep the opponent at a distance using his powerful fireballs and anti-air attacks.";
            videoSrc = `https://www.youtube.com/embed/VchglFlNIvo`;
            height = "6'0";
            weight = "218 lbs";
            birthplace = "United States of America";
            likes = "Watching sports, dog walking";
            dislikes = "Secretive people, layabouts";
        break;
        case '1bblshn':
            character = 'Blanka';
            img.src = 'img/blanka.png';
            bio.textContent = "A kindhearted defender of nature, Blanka has become an adventure tour guide, confident his intimate knowledge of the jungle will serve as a springboard to fame—and a comfortable life for his beloved mother.";
            paragraph.textContent = "Blanka is an unorthodox mid-range fighter. He excels at playing a 'turtle' style, keeping the opponent just outside the mid-range and frustrating them with his 'Blanka Ball' attack. He can also approach the opponent from hard to deal with angles with his upwards 'Blanka Ball' attack, and then pressure them with his electricity attacks. Blanka is recommended for players who want a fun character who is unique from the rest of the cast, with a focus on ranged and defensive play.";
            videoSrc = `https://www.youtube.com/embed/tDL--2iU6yU`;
            height = "6'4";
            weight = "216 lbs";
            birthplace = "Brazil";
            likes = "Samantha, Blanka-chan dolls";
            dislikes = "Army ants";
        break;
        case '1bmashn':
            character = 'Manon';
            img.src = 'img/manon.png';
            bio.textContent = "A super model and world champion judoka, Manon is an idealist, forever seeking self-improvement in the pursuit of beauty. She struts the catwalk of street fighting to become the world's strongest model.";
            paragraph.textContent = "Manon is a grappler, your goal is to get in close and mix the opponent up with unblockable command throws. Be careful though! If the opponent expects the command throw, they might jump out and punish you! You can use this to your advantage however, as Manon also has some great anti-airs and mid-range normal attacks. Manon is recommended for players who want to outsmart their opponents with mind-games. She is a straight forward, high-risk, high-reward character that focuses on close range fighting.";
            videoSrc = `https://www.youtube.com/embed/6k5XctUu0Dw`;
            height = "5'9";
            weight = "129 lbs"
            birthplace = "France";
            likes = "The color gold, cosmetics, her family";
            dislikes = "Crowds, chatterboxes";
        break;
        case '1bmrshf':
            character = 'Marisa';
            img.src = 'img/marisa.png';
            bio.textContent = "An up-and-coming jewelry designer from Italy who claims ancestry to ancient Greek warriors. As a child, she was inspired by a vision of the Colosseum in its prime.";
            paragraph.textContent = "Marisa is a well rounded, but aggressive character, who can fight at mid and close range distances. She has far reaching normal attacks that are highly damaging and help close the distance, as well as an assortment of devastating unblockable throw attacks for when she's up close. Marisa is recommended for players who want a simple character with lot's of offensive tools and high damage output.";
            videoSrc = 'https://www.youtube.com/embed/r4JKiW19weE';
            height = "6'8";
            weight = "269 lbs";
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

    form.appendChild(bio);
    form.appendChild(facts);
    form.appendChild(paragraph);

    theme.textContent = `Vibing with ${character}? Check out their theme below!`;
    form.appendChild(theme)

    if (videoLink === undefined) {
        videoLink = document.createElement('p');
        videoLink.innerHTML = `<iframe width="560" height="315" src="${videoSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        form.appendChild(videoLink);
      }

    footer.textContent = "Not satisfied with your result? Try changing some of your answers! Keep in mind, these are only recommendations based on your answers! In fighting games, it's always best to play the character you gel with the most!";
    form.appendChild(footer)
    });