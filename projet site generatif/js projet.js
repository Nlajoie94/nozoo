let continents = [
    { name: 'Amérique du Nord', continentImg: 'image/Amerique_du_nord.png', animalImage: 'image/Orque.png', 
    explanation: "Keiko, capturée à trois ans, a enduré quatre années de captivité au Marineland d'Ontario, Canada. Confiné dans des bassins artificiels, il a développé le papillomavirus, exacerbant ses souffrances. En tant que plus jeune, il était la cible des comportements agressifs des autres orques, ajoutant à son isolement et à sa lutte contre la maladie. Son état de stress était également visible à travers l'affaissement de sa nageoire dorsale et les lésions cutanées liées au papillomavirus, témoignant des conditions de vie insalubres et des interactions agressives."}, 
    {name: 'Amérique du Sud', continentImg: 'image/Amerique_du_sud.png',animalImage: 'image/Ours_polaire.png', 
    explanation: "Yupik, ourse polaire née dans les forêts d'Alaska, a été contrainte de vivre dans des conditions de captivité inadéquates au zoo de Morelia, au Mexique. Confrontée à une chaleur extrême, un environnement totalement inadapté pour un animal de son espèce, Yupik a souffert de problèmes de santé, dont des dents cassées. Malgré les appels de l'ONG Zoocheck Canada pour la transférer vers un lieu plus approprié, les autorités ont annulé son transfert, illustrant ainsi la maltraitance et l'insouciance qui ont marqué la vie de Yupik en captivité. Sa mort prématurée à l'âge de 27 ans met en lumière les conséquences dévastatrices de garder un ours polaire dans un environnement inadapté à ses besoins naturels"},
    {name: 'Afrique', continentImg: 'image/Afrique.png',animalImage: 'image/Chameau.png', 
    explanation: "Un chameau maltraité au zoo d'Abuja, accusé de malnutrition, a suscité des controverses. Tunde Sawyerr a déclaré à CNN que le chameau semblait sous-alimenté et négligé parmi tous les animaux du zoo. Cependant, le directeur du zoo, Aminu Mohammed, a nié les allégations de malnutrition, attribuant la maigreur de l'animal à une infection cutanée antérieure Jon Justin Williamson, un scientifique environnemental, a contesté cette explication, affirmant que le chameau était gravement malade et souffrait de sous-nutrition sévère. Il a expliqué que la petite bosse de l'animal indiquait un manque de nourriture pour stocker des graisses vitales. Williamson a souligné que les chameaux d'Arabie nécessitaient une alimentation variée, comprenant des broussailles, des herbes et des arbustes, pour prospérer, et a averti que la privation alimentaire entraînerait une mort lente et douloureuse. En dépit des déclarations du zoo sur les soins médicaux fournis, les experts contestent cette version et appellent à une action urgente pour sauver l'animal en détresse"},
    {name: 'Asie', continentImg: 'image/Asie.png',animalImage: 'image/Ours.png', 
    explanation: "Bubloo et Suzie ont enduré treize longues années de souffrance et de privation dans des conditions désolantes dans le zoo Marghaza à Islamabad. Confinés dans des enclos exiguës, leur habitat ne ressemblait en rien à leur environnement naturel luxuriant. Privés de stimulation mentale et physique, ils étaient contraints à une existence monotone et dénuée de toute forme de liberté. En 2020, après avoir été transférés dans un sanctuaire en Jordanie, Bubloo et Suzie ont enfin trouvé refuge. Là, ils sont libres de profiter d'un environnement plus proche de celui de leur habitat naturel. Entourés de soins attentifs et de vastes espaces pour se déplacer, ils peuvent enfin redécouvrir leur instinct et leur dignité d'animaux sauvages. "},
    {name: 'Europe', continentImg: 'image/Europe.png',animalImage: 'image/lion.png', 
    explanation: "Le lion Lensi, l'un des animaux secourus dans un zoo privé en Albanie, a été victime de maltraitance sévère, comme en témoignent ses conditions de vie inacceptables. Les autorités albanaises sont intervenues pour sauver Lensi qui été gardés dans des conditions infernales. Avant l'opération de sauvetage, les organisations de défense des animaux ont dénoncé les conditions de vie horribles dans le zoo, soulignant que les animaux étaient tous malheureux et présentaient des signes évidents de détresse physique. Lensi, avait une infection oculaire grave qui menaçait sa vue. Son état de santé témoigne de la malnutrition et des mauvais traitements infligés aux animaux dans le zoo. Ces révélations mettent en lumière la nécessité urgente de leur fournir des soins et des conditions de vie appropriés."}
];

const explanationElement = document.getElementById('explanationText');

// Modifier le style de l'élément
explanationElement.style.fontSize = '16px';
explanationElement.style.fontFamily = 'Roboto, sans-serif';
explanationElement.style.paddingLeft= "40px";
explanationElement.style.paddingRight= "40px";
explanationElement.style.whiteSpace= "pre-line";






function getRandomContinent() {
    return continents[Math.floor(Math.random() * continents.length)];
}

document.getElementById('generateBtn').addEventListener('click', async function() {
    const generateBtn = document.getElementById('generateBtn');
    const continentImgs = document.querySelectorAll('.continent-img');
    const continentImgElement = document.getElementById('continentImg');
    const animalImgElement = document.getElementById('animalImg');
    const explanationElement = document.getElementById('explanationText');
    const generatedContinent = getRandomContinent();

    // Cacher le bouton de génération
    generateBtn.style.display = 'none';

    // Définir la durée totale de l'animation (en millisecondes)
    const animationDuration = 3000;

    // Clignoter les continents aléatoirement
    const interval = setInterval(function() {
        continentImgs.forEach(img => {
            if (Math.random() < 0.5) {
                img.style.display = 'none'; // Masquer le continent
            }            else {
                img.style.display = 'block'; // Afficher le continent
            }
        });
    }, 100); // Changer l'état des continents toutes les 100 millisecondes

    // Attendre la fin de l'animation
    await new Promise(resolve => setTimeout(resolve, animationDuration));

    // Arrêter le clignotement et masquer tous les continents
    clearInterval(interval);
    continentImgs.forEach(img => {
        img.style.display = 'none';
    });
    
    

    // Afficher les informations du continent sélectionné
    
    continentImgElement.src = generatedContinent.continentImg;
    animalImgElement.src = generatedContinent.animalImage;
    explanationElement.textContent = generatedContinent.explanation;

    // Afficher à nouveau le bouton pour revenir au générateur
    const returnBtn = document.createElement('button');
    returnBtn.textContent = 'Revenir au Générateur';
    returnBtn.id = 'returnBtn';
    explanationElement.appendChild(returnBtn);

    // Lorsque le bouton pour revenir au générateur est cliqué
    returnBtn.addEventListener('click', function() {
        // Afficher à nouveau le bouton de génération
        generateBtn.style.display = 'block';

        // Masquer le bouton pour revenir au générateur
        returnBtn.style.display = 'none';

        // Réinitialiser les informations du continent sélectionné
        continentImgElement.src = '';
        animalImgElement.src = '';
        explanationElement.textContent = '';

        // Afficher à nouveau les images des continents
        continentImgs.forEach(img => {
            img.style.display = 'block';
        });
    });
});


document.getElementById('exploreBtn').addEventListener('click', function() {
    scrollToGenerator();
});

function scrollToGenerator() {
    var generatorAnchor = document.getElementById('generator');
    generatorAnchor.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide
}

document.querySelector('a.head-a[href="#a-propos"]').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    // Récupère la position de la section "À propos"
    const aboutSection = document.getElementById('a-propos');
    const aboutSectionPosition = aboutSection.offsetTop;

    // Fait défiler la page jusqu'à la position de la section "À propos"
    window.scrollTo({
        top: aboutSectionPosition,
        behavior: 'smooth' // Défilement fluide
    });
});

