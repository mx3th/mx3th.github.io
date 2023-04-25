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
/*     const q1 = form.q1.value; */
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

    switch (/* q1 + */q2 + q3 + q4 + q5 + q6) {
        case 'bryegm':
        case 'bryegn':
        case 'bryenm':
        case 'bchegm':
        case 'bchebm':
        case 'bjuegm':
        case 'bjuebm':
        case 'bjuebn':
        case 'bmregm':
        case 'bjpegm':
        case 'bjpegn':
        case 'bjpebm':
        case 'bjpebn':
        case 'b00egm':
        case 'rkiegm':
        case 'b00egn':
        case 'pryegm':
        case 'rjumgm':
        case 'pryegn':
        case 'rjuebm':
        case 'rjuegm':
        case 'pryhgm':
        case 'pryhgn':
        case 'rryegm':
        case 'prymgm':
        case 'prymgn':
        case 'pchegm':
        case 'pchebm':
        case 'pchebn':
        case 'pcaegm':
        case 'pcaebm':
        case 'rkiebm':
        case 'rjaebm':
        case 'pchhbm':
        case 'pchmgm':
        case 'rryegn':
        case 'rkimgm':
        case 'rryebm':
        case 'rryebn':
        case 'pluegm':
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
/*         case '1bkeshn':
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
        break; */
        case 'bryhgf':
        case 'brymgf':
        case 'bchegf':
        case 'rryegf':
        case 'bchegn':
        case 'bchhgf':
        case 'bchhgn':
        case 'bchmgf':
        case 'bchmgn':
        case 'bluhgf':
        case 'bjuhgf':
        case 'rkiegf':
        case 'bjuhgn':
        case 'bdhegf':
        case 'rkihgf':
        case 'rryebf':
        case 'rchmbn':
        case 'bdhhgf':
        case 'bdhhbf':
        case 'bdhmgf':
        case 'rchmbf':
        case 'bjpegf':
        case 'rchmgn':
        case 'bjpebf':
        case 'rchmgf':
        case 'rchhgn':
        case 'rchhgf':
        case 'rkihgn':
        case 'rchhbn':
        case 'bjphgf':
        case 'rryhgf':
        case 'rchhbf':
        case 'rchebf':
        case 'rchebn':
        case 'rchegf':
        case 'bjpmgf':
        case 'rryhbf':
        case 'rrymgf':
        case 'rkiebf':
        case 'rchegn':
        case 'rrymbf':
        case 'rjumgn':
        case 'rluegf':
        case 'rkiegn':
        case 'rluegn':
        case 'rluebf':
        case 'rlumbf':
        case 'rluebn':
        case 'rlumbn':
        case 'rlumgn':
        case 'rluhgn':
        case 'rjaegf':
        case 'rluhbn':
        case 'rkiebn':
        case 'rlumgf':
        case 'rjahgf':
        case 'rmamgf':
        case 'rjahgn':
        case 'rluhgf':
        case 'rjaegn':
        case 'rkimgf':
        case 'bjpmgn':
        case 'rluhbf':
        case 'b00hgf':
        case 'rkimgn':
        case 'rmamgn':
        case 'r00hgn':
        case 'rmaegf':
        case 'rjuegf':
        case 'rjumgf':
        case 'b00mgf':
        case 'rmahgf':
        case 'rmregf':
        case 'rmaebf':
        case 'pchegn':
        case 'pchhgf':
        case 'r00egf':
        case 'rdhegf':
        case 'rjamgf':
        case 'rjuegn':
        case 'rcahgf':
        case 'rcahgn':
        case 'rjamgn':
        case 'rcaegn':
        case 'rjpegf':
        case 'pchhgn':
        case 'rjuhgf':
        case 'rcaebf':
        case 'rcaegf':
        case 'rdhebf':
        case 'rzaebf':
        case 'rjphgf':
        case 'rdhhgf':
        case 'rjpmgf':
        case 'rcaebn':
        case 'rzamgf':
        case 'rmrhgf':
        case 'rdhmgf':
        case 'r00hgf':
        case 'rcamgn':
        case 'rmrmgf':
        case 'r00mgf':
        case 'rcamgf':
        case 'rzaegf':
        case 'rzahgf':
        case 'pchhbn':
            character = 'Chun-Li';
            img.src = 'img/chunli.png';
            bio.textContent = "A former high-kicking ICPO agent, Chun-Li looks after Li-Fen, a victim of the Black Moon Incident. With Shadaloo sundered, she now runs kung fu classes, and has become a well-loved member of the local community.";
            paragraph.textContent = "Chun-Li is a technical character with multiple move-sets based on her stance. She is very versatile and can handle all ranges of play exceptionally well, thanks to her far reaching normal attacks, and her iconic 'Spinning Bird Kick' for when up close. Despite her technical aspects, Chun-Li is still very effective when using just the basics. Chun-Li is recommended for players who want a versatile character that can fight at any distance, and is easy to play but hard to master.";
            videoSrc = 'https://www.youtube.com/embed/8bg-nvvI9D0';
            height = "5'7";
            weight = "It's a secret♡";
            birthplace = 'China';
            likes = 'Days off, shopping with Li-Fen';
            dislikes = 'Crime, indecisiveness';
        break;
        case 'bryhbf':
        case 'rjphbf':
        case 'brymbf':
        case 'bchebf':
        case 'rmrmbn':
        case 'rjpmbf':
        case 'bchebn':
        case 'rmrmbf':
        case 'rmambf':
        case 'rjpebf':
        case 'bchhbf':
        case 'rcahbf':
        case 'bchhbn':
        case 'rmahbf':
        case 'rmrebf':
        case 'r00mbf':
        case 'bchmbf':
        case 'rcahbn':
        case 'bchmbn':
        case 'rcambf':
        case 'rmrhbf':
        case 'rmrebn':
        case 'rjahbn':
        case 'rdhmbf':
        case 'rzambf':
        case 'bluhbf':
        case 'rdhhbf':
        case 'rjuebn':
        case 'rjuhbn':
        case 'rmambn':
        case 'bjuhbf':
        case 'rjahbf':
        case 'rjuhbf':
        case 'bjuhbn':
        case 'rzahbf':
        case 'rjuebf':
        case 'rjaebn':
        case 'rjambf':
        case 'bjumgf':
        case 'bjumgn':
        case 'rjambn':
        case 'bjumbf':
        case 'rjumbn':
        case 'bjumbn':
        case 'r00ebf':
        case 'rkihbn':
        case 'sdhhgf':
        case 'rkihbf':
        case 'rjaebf':
        case 'rjumbf':
        case 'bjahbf':
        case 'sdhhbf':
        case 'bjahbn':
        case 'bkihbf':
        case 'bkihbn':
        case 'r00hbf':
        case 'bcahbf':
        case 'bcahbn':
        case 'rkimbf':
        case 'rkimbn':
        case 'bjphbf':
        case 'sdhhbn':
        case 'bjpmbf':
        case 'b00hbf':
        case 'pchhbf':
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
        case 'bryhgm':
        case 'bryhgn':
        case 'brymgm':
        case 'brymgn':
        case 'bchhgm':
        case 'bchmgm':
        case 'bchmbm':
        case 'bluegm':
        case 'bluegn':
        case 'bluebm':
        case 'bluebn':
        case 'bluhgm':
        case 'bluhgn':
        case 'bluhbn':
        case 'blumgm':
        case 'blumgn':
        case 'blumbm':
        case 'blumbn':
        case 'bjuhgm':
        case 'bjumgm':
        case 'bcahgm':
        case 'bcahbm':
        case 'bcambm':
        case 'bmrhgm':
        case 'bmrhgn':
        case 'bmrhbm':
        case 'bmrhbn':
        case 'bmrmgm':
        case 'bmrmbm':
        case 'bjpmgm':
        case 'pcahbm':
        case 'b00ebm':
        case 'b00hgm':
        case 'rluebm':
        case 'b00hgn':
        case 'b00mgm':
        case 'pcamgm':
        case 'b00mgn':
        case 'pchhgm':
        case 'rluegm':
        case 'pchmbm':
        case 'pcambm':
        case 'pcahgm':
        case 'pluhgm':
        case 'pluhgn':
        case 'pluhbm':
        case 'pluhbn':
        case 'plumgm':
        case 'plumgn':
        case 'plumbm':
        case 'plumbn':
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
        case 'bjaegm':
        case 'bjaegn':
        case 'bjaebm':
        case 'bjaebn':
        case 'bjahgm':
        case 'bjahgn':
        case 'bjahbm':
        case 'bjamgm':
        case 'bjamgn':
        case 'bjambm':
        case 'bjambn':
        case 'bkiegm':
        case 'bkiebm':
        case 'bkihgm':
        case 'bkimgm':
        case 'bkimbm':
        case 'bcaegm':
        case 'bcaebm':
        case 'bcamgm':
        case 'pjuegm':
        case 'pjuegn':
        case 'pjuebm':
        case 'pjuebn':
        case 'pjuhgm':
        case 'pjuhbn':
        case 'pjumgn':
        case 'schhbm':
        case 'pjumgm':
        case 'schmgm':
        case 'pjumbn':
        case 'smamgm':
        case 'pjaegm':
        case 'pjaebm':
        case 'pjaegn':
        case 'pjaebn':
        case 'pjahgn':
        case 'sjuhbm':
        case 'sjaegn':
        case 'pjamgn':
        case 'sjahgn':
        case 'schmbm':
        case 'sjahbn':
        case 'sjahbm':
        case 'sjamgm':
        case 'schhgm':
        case 'sjaebm':
        case 'sjumgm':
        case 'sjambn':
        case 'sjumbm':
        case 'sjamgn':
        case 'sjambm':
        case 'sjaegm':
        case 'pjuhgn':
        case 'sryegm':
        case 'sjahgm':
        case 'sryebm':
        case 'sryhgm':
        case 'schebm':
        case 'sjaebn':
        case 'sjuhgm':
        case 'sryhbm':
        case 'smaegm':
        case 'smahbm':
        case 'schegm':
        case 'sluegm':
        case 'srymgm':
        case 'srymbm':
        case 'pjambm':
        case 'pjambn':
        case 'sjuegm':
        case 'sdhmgm':
        case 'sjuebm':
        case 'sdhmbm':
        case 'pkimbm':
        case 'scaegm':
        case 'scaebm':
        case 'scahgm':
        case 'scahbm':
        case 'scambm':
        case 'scamgm':
        case 'sluebm':
        case 'sluhgm':
        case 'pjamgm':
        case 'smaebm':
        case 'slumgm':
        case 'pkimgm':
        case 'slumbm':
        case 'skiegm':
        case 's00ebm':
        case 's00egm':
        case 'smrhbm':
        case 'smrhgn':
        case 's00mbn':
        case 's00mgm':
        case 's00mbm':
        case 'smambm':
        case 'smrmgm':
        case 'sluhbm':
        case 'smrebm':
        case 'smrhgm':
        case 's00hbm':
        case 's00hgm':
        case 'sdhebm':
        case 'smregm':
        case 'smrmbm':
        case 'pjahbn':
        case 'pjahgm':
        case 'skiebm':
        case 'skihbm':
        case 'sdhegm':
        case 'smahgm':
        case 'skihgm':
        case 'szaegm':
        case 'szahgm':
        case 'skimbm':
        case 'skimgm':
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
        case 'bjahgf':
        case 'bjamgf':
        case 'bjambf':
        case 'bkiegf':
        case 'bkiegn':
        case 'bkiebf':
        case 'skimgn':
        case 'pkimgn':
        case 'pkimgf':
        case 'pkimbn':
        case 'pkimbf':
        case 'skimbn':
        case 'bkiebn':
        case 'bkihgf':
        case 'skihgf':
        case 'skihgn':
        case 'skimbf':
        case 'bkihgn':
        case 'bkimgf':
        case 'bkimgn':
        case 'skihbn':
        case 'skihbf':
        case 'scamgf':
        case 'skimgf':
        case 'bkimbf':
        case 'pkihgf':
        case 'pkihbf':
        case 'pkihbn':
        case 'pkihgn':
        case 's00hgf':
        case 'smrhbf':
        case 'sluhbf':
        case 's00hbf':
        case 's00hgn':
        case 's00hbn':
        case 'smrhgf':
        case 's00mbf':
        case 'sluhgn':
        case 'smrhbn':
        case 's00mgn':
        case 's00mgf':
        case 'sluhbn':
        case 'sjphbf':
        case 'bkimbn':
        case 'sjumgn':
        case 'sjumgf':
        case 'sjahgf':
        case 'sjumbn':
        case 'sjahbf':
        case 'sjpmbf':
        case 'sjuhgn':
        case 'sjuhgf':
        case 'sjpmgf':
        case 'sluhgf':
        case 'sjumbf':
        case 'bcahgf':
        case 'bcahgn':
            character = 'Kimberly';
            img.src = 'img/kimberly.png';
            bio.textContent = "Uninvited student to Guy, the 39th successor to Bushinryu. Kimberly had an ordinary upbringing, but she's a genuine prodigy who graduated college early...and now wants to be a ninja. Loves '80s pop culture.";
            paragraph.textContent = "Kimberly is fast. Like really fast. And she has lot's of ninja tricks up her sleeve's! Her spray-paint bombs (instead of smoke), make her movements very hard to see. Even opponent's with the quickest reactions will need to stay on their toes. Kimberly can stay on the offense with a plethora of cartwheel attacks, with different follow-ups to stay unpredicatble. Once you've successfully scared the opponent into not doing anything, go for your unblockable Izuna Drop! Kimberly is recommended for players who want to max out their stats on offense and speed, she has quite an extensive move-set, which makes her slightly better for more intermediate players.";
            videoSrc = `https://www.youtube.com/embed/06E2cBONuQw`;
            height = "5'6";
            weight = "134 lbs";
            birthplace = "United States of America";
            likes = "80's music, sneakers, large numbers";
            dislikes = "Tear-jerker movies";
        break;
        case 'bluegf':
        case 'skiebn':
        case 'skiegn':
        case 'skiebf':
        case 'blumgf':
        case 'bjuegf':
        case 'skiegf':
        case 'bjuegn':
        case 'bjaegf':
        case 'bjaebf':
        case 'slumbf':
        case 'sjuhbn':
        case 'sjaebf':
        case 'sryegf':
        case 'sjamgf':
        case 'sjuhbf':
        case 'sjambf':
        case 'slumbn':
        case 'sryegn':
        case 'sryhbn':
        case 'sjaegf':
        case 'slumgn':
        case 'slumgf':
        case 'srymgf':
        case 'sryhgn':
        case 'sryebf':
        case 'bcaegf':
        case 'sryebn':
        case 'bcaegn':
        case 'srymgn':
        case 'bcaebf':
        case 'bcaebn':
        case 'sryhbf':
        case 'schegf':
        case 'schegn':
        case 'sluebn':
        case 'schebf':
        case 'sluegn':
        case 'sluebf':
        case 'sluegf':
        case 'schebn':
        case 'schmbf':
        case 'schmbn':
        case 'schmgn':
        case 'schhgf':
        case 'schhgn':
        case 'schhbf':
        case 'schhbn':
        case 'sryhgf':
        case 'scaegn':
        case 'schmgf':
        case 'bcamgf':
        case 'scahgn':
        case 'scahgf':
        case 'scaegf':
        case 'scahbn':
        case 'bcamgn':
        case 'scaebf':
        case 'scahbf':
        case 'scaebn':
        case 'sdhegf':
        case 'srymbf':
        case 'sdhegn':
        case 'bcambf':
        case 'bcambn':
        case 'b00egf':
        case 'scambn':
        case 'sjphgf':
        case 'smregf':
        case 'srymbn':
        case 'sdhebf':
        case 'sjpebf':
        case 'sjpegf':
        case 'sdhebn':
        case 'smrmbf':
        case 'scambf':
        case 'smrebf':
        case 'pcaegf':
        case 'smrmbn':
        case 'smregn':
        case 'pcaegn':
        case 'pcaebf':
        case 'smrebn':
        case 's00ebn':
        case 'sdhmgn':
        case 'sdhmgf':
        case 's00egf':
        case 's00egn':
        case 's00ebf':
        case 'sjuegf':
        case 'sjuegn':
        case 'sdhmbn':
        case 'sjuebf':
        case 'sjuebn':
        case 'pcaebn':
        case 'smrmgf':
        case 'scamgn':
        case 'smrmgn':
        case 'sdhmbf':
        case 'pcahgf':
        case 'pcahgn':
        case 'pcahbf':
        case 'pcahbn':
        case 'pcamgf':
        case 'pcamgn':
        case 'pcambf':
        case 'pcambn':
        case 'b00ebf':
        case 'b00ebn':
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
/*         case '1bgushn':
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
        break; */
/*         case '1bblshn':
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
        break; */
        case 'bmaegf':
        case 'bmaegn':
        case 'bmaebf':
        case 'bmaebn':
        case 'bmahgf':
        case 'bmahgn':
        case 'bmahbf':
        case 'szahgf':
        case 'bmahbn':
        case 'pkiebf':
        case 'bmamgf':
        case 'bmamgn':
        case 'bmambf':
        case 'pjahgf':
        case 'bmambn':
        case 'pryhgf':
        case 'pjaebf':
        case 'pjambf':
        case 'pkiebn':
        case 'pryhbf':
        case 'prymgf':
        case 'prymbf':
        case 'prymbn':
        case 'pchegf':
        case 'pchebf':
        case 'pchmgf': 
        case 'pchmgn':
        case 'pchmbf':
        case 'pchmbn':
        case 'szahgn':
        case 'pluhgf':
        case 'pjahbf':
        case 'pjaegf':
        case 'pluhbf':
        case 'plumgf':
        case 'plumbf':
        case 'pmaegf':
        case 'pmaegn':
        case 'pmaebf':
        case 'pmaebn':
        case 'pmahgf':
        case 'pmahgn':
        case 'pmahbf':
        case 'pmahbn':
        case 'pmamgf':
        case 'pmamgn':
        case 'pmambf':
        case 'pmambn':
        case 'pjuegf':
        case 'pjumbf':
        case 'pkiegn':
        case 'pkiegf':
        case 'szaegf':
        case 'pzamgf':
        case 'smambf':
        case 'szahbn':
        case 'pjuhgf':
        case 'pzahbf':
        case 'szamgn':
        case 'pjamgf':
        case 'pjuebf':
        case 'smambn':
        case 'pzaebf':
        case 'pdhebf':
        case 'szamgf':
        case 'szaegn':
        case 'szahbf':
        case 'pzaegf':
        case 'pzambf':
        case 'pjuhbf':
        case 'pzahgf':
        case 'p00mgf':
        case 'szambf':
        case 'p00hgn':
        case 'smaegf':
        case 'pdhegf':
        case 'pjpegf':
        case 'smamgn':
        case 'smahgn':
        case 'pjumgf':
        case 'p00mbn':
        case 'pdhhgf':
        case 'smamgf':
        case 'smaegn':
        case 'pdhhbf':
        case 'p00mbf':
        case 'smaebn':
        case 'smaebf':
        case 'smahgf':
        case 'p00egf':
        case 'pjphgf':
        case 'pjpmgf':
        case 'p00hgf':
        case 'pdhmgf':
        case 'smahbn':
        case 'smahbf':
        case 'p00mgn':
        case 'szaebf':
        case 'pdhmbf':
        case 'szaebn':
        case 'pjpmbf':
        case 'pjphbf':
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
        case 'bryegf':
        case 'bryebf':
        case 'pjpebf':
        case 'bryebn':
        case 'bluebf':
        case 'blumbf':
        case 'bjuebf':
        case 'bzaegf':
        case 'p00ebf':
        case 'bzaebf':
        case 'bzahgf':
        case 'bzahbf':
        case 'bzamgf':
        case 'bzambf':
        case 'p00hbf':
        case 'bdhebf':
        case 'bdhmbf':
        case 'bmregf':
        case 'bmregn':
        case 'bmrebf':
        case 'bmrebn':
        case 'bmrhgf':
        case 'bmrhbf':
        case 'bmrmgf':
        case 'bmrmgn':
        case 'bmrmbf':
        case 'bmrmbn':
        case 'pmrhgf':
        case 'b00mbf':
        case 'b00mbn':
        case 'pmrebn':
        case 'pmregf':
        case 'pryegf':
        case 'pmrmgn':
        case 'pmregn':
        case 'pmrmgf':
        case 'pmrhbn':
        case 'pmrmbn':
        case 'pmrhbf':
        case 'pryebf':
        case 'pryebn':
        case 'pmrmbf':
        case 'pmrebf':
        case 'pluegf':
        case 'pluegn':
        case 'pluebf':
        case 'pluebn':
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
        case 'bzaegm':
        case 'bzaegn':
        case 'pmrhgm':
        case 'pmrhgn':
        case 'szahbm':
        case 'pzamgm':
        case 'pmrhbm':
        case 'pzahbn':
        case 'pmrebm':
        case 'szaebm':
        case 'bzaebn':
        case 'bzahgm':
        case 'bzahgn':
        case 'szambn':
        case 'bzahbm':
        case 'pmregm':
        case 'szamgm':
        case 'pmrmbm':
        case 'pzaegn':
        case 'pmrmgm':
        case 'bzahbn':
        case 'szambm':
        case 'pzahgm':
        case 'bzamgm':
        case 'bzamgn':
        case 'bzambm':
        case 'pzahbm':
        case 'pzahgn':
        case 'bzambn':
        case 'bmaegm':
        case 'bmaebm':
        case 'bmahgm':
        case 'pzaebn':
        case 'bmahbm':
        case 'bmamgm':
        case 'bmambm':
        case 'pzaebm':
        case 'bzaebm':
        case 'bmrebm':
        case 'pryebm':
        case 'pmambm':
        case 'pryhbm':
        case 'pzamgn':
        case 'pzambm':
        case 'pmahbm':
        case 'pryhbn':
        case 'p00hgm':
        case 'pzambn':
        case 'prymbm':
        case 'pmaegm':
        case 'pmaebm':
        case 'pmahgm':
        case 'pdhebn':
        case 'pmamgm':
        case 'p00hbn':
        case 'pjumbm':
        case 'pkihgm':
        case 'pkiebm':
        case 'pjahbm':
        case 'p00mgm':
        case 'pdhebm':
        case 'pdhegn':
        case 'pkihbm':
        case 'p00hbm':
        case 'pluebm':
        case 'pzaegm':
        case 'pjuhbm':
        case 'pkiegm':
        case 'p00egm':
        case 'p00egn':
        case 'p00ebn':
        case 'p00mbm':
        case 'p00ebm':
        case 'pdhegm':
            character = 'Zangief';
            img.src = 'img/zangief.png';
            bio.textContent = "A colossal wrestler nicknamed the Red Cyclone. Zangief is dedicated to physical improvement and instructing his students.";
            paragraph.textContent = "Zangief is the original grappler, he's all about close range fighting. Whilst he might struggle with closing the gap against ranged fighters, he makes up for it once he gets in with his extremely powerful command throws, one opening is all he needs to win the game in an instant. Zangief is recommended for patient players who want to outsmart their opponents with mind-games and deal insane damage!";
            videoSrc = 'https://www.youtube.com/embed/o6caXwwXbjk';
            height = "7'0";
            weight = "399 lbs";
            birthplace = 'Russia';
            likes = 'Wrestling, Cossack dancing';
            dislikes = 'Projectiles (Hadokens, etc.)';
        break;
        case 'bchebm':
        case 'bdhegn':
        case 'rchegm':
        case 'bdhebm':
        case 'rmaebm':
        case 'bdhebn':
        case 'bdhhgm':
        case 'bdhhgn':
        case 'rryhgn':
        case 'rmaebn':
        case 'bdhmgm':
        case 'rchhbm':
        case 'rmahgm':
        case 'rzaegn':
        case 'rluhgm':
        case 'rchmgm':
        case 'rryhgm':
        case 'rchmbm':
        case 'rjamgm':
        case 'rzahgn':
        case 'rzaebm':
        case 'sdhhgm':
        case 'rzaebn':
        case 'rzamgn':
        case 'rzahgm':
        case 'rchhgm':
        case 'rmaegn':
        case 'rzamgm':
        case 'rlumgm':
        case 'rzaegm':
        case 'rdhebn':
        case 'rdhhgn':
        case 'rmaegm':
        case 'bdhmgn':
        case 'rkihgm':
        case 'rjuhgn':
        case 'rmamgm':
        case 'rchebm':
        case 'rjuhgm':
        case 'sdhhgn':
        case 'bdhmbm':
        case 'rdhegn':
        case 'rdhegm':
        case 'rmahgn':
        case 'sdhhbm':
        case 'rdhebm':
        case 'rjaegm':
        case 'rcamgm':
        case 'rdhhgm':
        case 'rcaebm':
        case 'rdhmgn':
        case 'rryhbn':
        case 'rmregm':
        case 'rmregn':
        case 'rmrmgm':
        case 'r00egn':
        case 'rmrhgm':
        case 'rcahgm':
        case 'r00egm':
        case 'rcaegm':
        case 'rmrhgn':
        case 'rdhmgm':
        case 'r00ebm':
        case 'rrymgm':
        case 'r00mgm':
        case 'rrymgn':
        case 'rmrmgn':
        case 'r00mgn':
        case 'r00ebn':
        case 'rjpegm':
        case 'bdhmbn':
        case 'rjpegn':
            character = 'Dhalsim';
            img.src = 'img/dhalsim.png';
            bio.textContent = "A monk and yoga master from India who has served as a guide for countless suffering souls. Prefers to avoid conflict when possible, but his innate hatred of evil compels him to dispense stern justice.";
            paragraph.textContent = "Dhalsim is a ranged fighter, and an alternative for players who are not comfortable playing the fireball game. Dhalsim's method of zoning is through his far reaching normal attacks, thanks to his stretchy limbs. Dhalsim is simple mechanically, so he is a good choice for beginners who want to play a defensive style, whilst reading the opponents actions well.";
            videoSrc = 'https://www.youtube.com/embed/EELQyo7FX4k';
            height = "5'9 (can vary)";
            weight = "106 lbs (can vary)";
            birthplace = 'India';
            likes = 'Meditating';
            dislikes = 'Distractions, harming others';
        break;
/*         case '1blishn':
            character = 'Lily';
            img.src = 'img/lily.png';
            bio.textContent = "A descendant of the Thunderfoot tribe, Lily speaks with the spirits of nature, trusting in their guidance as she travels the globe. Don't judge a book by its cover—her small stature conceals truly titanic power.";
            paragraph.textContent = "Lily is a mid-ranged fighter, she controls space well with her far reaching normals thanks to her two war clubs. She also uses wind based attacks to control the air, wind based moves allow her to carry the opponent into corner easily. Lily is a great choice for beginners who want a strong mid-range / poke style of gameplay.";
            videoSrc = 'https://www.youtube.com/embed/JMgyoSS6hO8';
            height = "5'3";
            weight = "106 lbs";
            birthplace = 'Mexico';
            likes = 'Lies';
            dislikes = 'Cameras, birds of prey';
        break; */
/*         case '1bdjshn':
            character = 'Dee Jay';
            img.src = 'img/deejay.png';
            bio.textContent = "A globally popular dance music superstar, Dee Jay is always ready to have a good time. With a burning love for music and fighting, this Jamaican sensation drives audiences wild with hot new songs and stylish moves.";
            paragraph.textContent = "Dee Jay is a mid to far ranged fighter. He has moves similar to Guile, like his 'Max Out' fireball which is done by holding back then pressing forward + punch (like Guile's 'Sonic Boom'). However, whilst Dee Jay's projectile game is not as strong he makes up for it by having better offence and ways to approach the opponent. Use his 'Rolling Sobat', an advancing kick move, to close the gap and start pressuring your opponent. Dee Jay is a straight forward character, recommended for players who want a mix between ranged and midranged fighting.";
            videoSrc = 'https://www.youtube.com/embed/zeykLp88FqU';
            height = "6'0";
            weight = "203 lbs";
            birthplace = 'Jamaica';
            likes = 'Singing, dancing, hollering';
            dislikes = 'Silence';
        break; */
/*         case '1behshn':
            character = 'E. Honda';
            img.src = 'img/ehonda.png';
            bio.textContent = "A sumo wrestler looking to bring the sport worldwide, E. Honda has the skills of a yokozuna, but his constant globetrotting has prevented his promotion. Also an expert chef renowned for mouthwatering chanko stew.";
            paragraph.textContent = "E. Honda is a turtle style grappler, many opponents will struggle with opproaching E. Honda, making him almost like an advancing wall. Use his powerful 'Hundred Hand Slap' and 'Sumo Headbutt' special moves to pressure the opponent, once you get close, use an unblockable command throw! E. Honda is a straight-forward character recommended for defensive players who want a grappling style of play.";
            videoSrc = 'https://www.youtube.com/embed/YWp8cFo5IFc';
            height = "6'1";
            weight = "302 lbs";
            birthplace = 'Japan';
            likes = 'Baths';
            dislikes = 'Indecisiveness';
        break; */
        case 'bryebm':
        case 'pdhhbn':
        case 'bryhbm':
        case 'bryhbn':
        case 'rdhhbm':
        case 'r00mbn':
        case 'rmahbn':
        case 'r00mbm':
        case 'rmahbm':
        case 'brymbm':
        case 'brymbn':
        case 'rjphgm':
        case 'rjphbm':
        case 'r00hgm':
        case 'bchhbm':
        case 'rdhmbn':
        case 'rjphgn':
        case 'rcambm':
        case 'rcambn':
        case 'rjphbn':
        case 'rjpebm':
        case 'rjpmbm':
        case 'rjpebn':
        case 'pdhhgm':
        case 'rjpmgm':
        case 'rmambm':
        case 'rcahbm':
        case 'rjpmgn':
        case 'rdhhbn':
        case 'rjpmbn':
        case 'rryhbm':
        case 'rdhmbm':
        case 'rzahbm':
        case 'rluhbm':
        case 'rmrmbm':
        case 'pdhmgm':
        case 'bluhbm':
        case 'pdhmbm':
        case 'rzambm':
        case 'pdhhbm':
        case 'rrymbn':
        case 'pdhmbn':
        case 'bjuhbm':
        case 'bjumbm':
        case 'pjpegm':
        case 'pjpebm':
        case 'pdhmgn':
        case 'rkihbm':
        case 'rrymbm':
        case 'pjphbn':
        case 'rmrebm':
        case 'rmrhbn':
        case 'pjpebn':
        case 'rmrhbm':
        case 'sjpegm':
        case 'pjpmgn':
        case 'pjpmgm':
        case 'pjpmbn':
        case 'sjphbm':
        case 'rlumbm':
        case 'sjpmgn':
        case 'sjphbn':
        case 'sjpebm':
        case 'sjpmbm':
        case 'pjpmbm':
        case 'pjphgm':
        case 'sjphgn':
        case 'pjpegn':
        case 'sjpmbn':
        case 'sjpegn':
        case 'sjpebn':
        case 'bkihbm':
        case 'sjpmgm':
        case 'pjphbm':
        case 'sjphgm':
        case 'rzambn':
        case 'rjambm':
        case 'pjphgn':
        case 'rjumbm':
        case 'rkimbm':
        case 'rjuhbm':
        case 'pdhhgn':
        case 'bdhhbm':
        case 'rzahbn':
        case 'bdhhbn':
        case 'bjphgm':
        case 'bjphgn':
        case 'bjphbm':
        case 'rjahbm':
        case 'r00hbm':
        case 'bjphbn':
        case 'rjahgm':
        case 'bjpmbm':
        case 'bjpmbn':
        case 'b00hbm':
        case 'b00hbn':
        case 'r00hbn':
        case 'b00mbm':
            character = 'JP';
            img.src = 'img/jp.png';
            bio.textContent = "Head of an international NGO responsible for many successful investment projects, and the man behind Nayshall's present prosperity. Has a beloved cat named Cybele.";
            paragraph.textContent = "JP is a ranged fighter, and the main villain of Street Fighter 6. JP can control the entire screen with ease, especially with Departure, a Special Move that places voids of power in the air. He can then activate the thorns inside or teleport at their location. JP is a technical character, with extemely poweful zoning and mix-up options when he knocks the opponent down. JP is recommended for advanced players who want a versatile move set.";
            videoSrc = 'https://www.youtube.com/embed/UMZq8Ycgo6U';
            height = "6'3";
            weight = "214 lbs";
            birthplace = 'Russia';
            likes = 'Chess puzzles, cleaning, local cuisines';
            dislikes = 'Stains on his clothes, sleep';
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