console.log("Exercice 1")
alert("Exercice 1");
let heure = parseInt(prompt('Entrez les heures :'));
    let minute = parseInt(prompt('Entrez les minutes :'));
    let seconde = parseInt(prompt('Entrez les secondes :'));
    
    seconde += 1;
    
    if (seconde === 60) {
      seconde = 0;
      minute += 1;
      if (minute === 60) {
        minute = 0;
        heure += 1;
        if (heure === 24) {
          heure = 0;
        }
      }
    }
    
    console.log(`${heure}heure : ${minute}minute : ${seconde}seconde`);
    alert(`${heure}heure : ${minute}minute : ${seconde}seconde`)
    
    



console.log("Exercice 2");
alert("Exercice 2");
let nbrPhotocopie = parseInt(prompt('Nombre de photocopies ? '));
let prix = 0;

if (nbrPhotocopie <= 10) {
  prix = nbrPhotocopie * 0.1;
} else if (nbrPhotocopie <= 30) {
  prix = (nbrPhotocopie - 10) * 0.09 + 1;
} else {
  prix = (nbrPhotocopie - 30) * 0.08 + 2.8;
}

console.log(`Le prix total est de : ${prix}EUROS`);
alert(`Le prix total est de : ${prix}EUROS`);




console.log("Exercice 3");
let sexe = prompt('Entrez votre sexe : (M/F)');
let age = parseInt(prompt('Entrez votre age :'));

if ((sexe === 'M' && age > 20) || (sexe === 'F' && age >= 18 && age <= 35)) {
  console.log('Imposable');
  alert('Imposable');
} else {
  console.log('non imposable');
  alert('non imposable');
}



console.log("Exercice 4");
let agePermis = parseInt(prompt('Votre age :'));
let dureePermis = parseInt(prompt('Votre ancienneté du permis :'));
let nbrAccident = parseInt(prompt('Nombre accidents :'));
let dureeAssurance = parseInt(prompt("Ancienneté dans l'assurance"));
let ptsMalus = nbrAccident;
let tarif = '';

if (agePermis < 25) {
  ptsMalus += 1;
}
if (dureePermis < 2) {
  ptsMalus += 1;
}
if (dureeAssurance > 5) {
  ptsMalus -= 1;
}

if (ptsMalus < 0) {
  tarif = 'Bleu';
} else if (ptsMalus === 0) {
  tarif = 'Vert';
} else if (ptsMalus === 1) {
  tarif = 'Orange';
} else if (ptsMalus === 2) {
  tarif = 'Rouge';
} else {
  tarif = 'Refusé';
}

console.log(`Votre tarif est ${tarif}`);
alert(`Votre tarif est ${tarif}`);

let jour = parseInt(prompt('Entrez le jour'));
let mois = parseInt(prompt('Entrez le mois'));
let annee = parseInt(prompt("Entrez l'année"));

if (([1, 3, 5, 7, 8, 10, 12].includes(mois) && jour <= 31) ||
    ([4, 6, 9, 11].includes(mois) && jour <= 30) ||
    (mois === 2 && (((annee % 4 === 0) && (annee % 100 !== 0)) || (annee % 400 === 0)) && jour <= 29) ||
    (mois === 2 && jour <= 28)) {
  console.log('Date Valide');
  alert('Date Valide');
} else {
  console.log('Date non valide');
  alert('Date non valide');
}

console.log("Exercice 6");
alert("Exercice 6");
let nombre = parseInt(prompt('Entrez un nombre entre 0 et 10 :'));
if (nombre >= 0 && nombre <= 10) {
  for (let i = nombre; i >= 0; i--) {
    console.log(i);
    alert(i)
  }
} else {
  alert('Erreur : Veuillez entrer un nombre entre 0 et 10.');
  console.log('Erreur : Veuillez entrer un nombre entre 0 et 10.');
}

 alert('Exercice 7');
let nbcache = 7;
let essai;
do {
  essai = parseInt(prompt('Devinez le nombre entre 0 et 10 :'));
  if (essai < nbcache) {
    alert('Plus');
  } else if (essai > nbcache) {
    alert('Moins');
  }
} while (essai !== nbcache);
alert('Bravo, vous avez trouvé !');

let devinette = Math.floor(Math.random() * 11); 

function testFonction() {
  let nombreUtilisateur;
  do {
    nombreUtilisateur = prompt('Entrez un nombre entre 0 et 10:');
    nombreUtilisateur = parseInt(nombreUtilisateur);
    if (nombreUtilisateur > devinette) {
      alert('moins');
    } else if (nombreUtilisateur < devinette) {
      alert('plus');
    } else {
      alert('Bravo, vous avez trouvé le bon nombre!');
      break;
    }
  } while (true);
}

testFonction();