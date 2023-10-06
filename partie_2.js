function addition() {
  const a = parseInt(prompt('Entrez le premier nombre pour l\'addition:'));
  const b = parseInt(prompt('Entrez le deuxième nombre pour l\'addition:'));
  const somme = a + b;
  alert('La somme est: ' + somme);
  return somme;
}
function minuteEnSeconde() {
  const minutes = parseInt(prompt('Entrez les minutes à convertir en secondes:'));
  const secondes = minutes * 60;
  alert('Minutes en secondes: ' + secondes);
  return secondes;
}
function increment() {
  const number = parseInt(prompt('Entrez un nombre à incrémenter:'));
  const result = number + 1;
  alert('Résultat: ' + result);
  console.log('Résultat: ' + result);
  return result;
}
function calculerSurface() {
  const base = parseInt(prompt('Entrez la base du triangle:'));
  const hauteur = parseInt(prompt('Entrez la hauteur du triangle:'));
  const surface = (base * hauteur) / 2;
  alert('Surface: ' + surface);
  console.log('Surface: ' + surface);
  return surface;
}  
function strReverse() {
  const str = prompt('Entrez une chaîne à inverser:');
  const reversedStr = str.split('').reverse().join('');
  alert('Chaîne inversée: ' + reversedStr);
  return reversedStr;
}
function getMax() {
  const a = parseInt(prompt('Entrez le premier nombre :'));
  const b = parseInt(prompt('Entrez le deuxième nombre :'));
  const c = parseInt(prompt('Entrez le troisième nombre :'));
  const max = Math.max(a, b, c);
  alert('Le plus grand nombre est : ' + max);
  return max;
}
function estBon(n, nombreAleatoire) {
  return n === nombreAleatoire;
}
function deviner() {
  const nombreAleatoire = Math.floor(Math.random() * 11);
  for (let i = 0; i < 3; i++) {
    const n = parseInt(prompt('Devinez le nombre entre 0 et 10:'));
    if (estBon(n, nombreAleatoire)) {
      alert('Bravo, vous avez deviné le nombre !');
      return true;
    } else {
      alert('Essai incorrect. Il vous reste ' + (2 - i) + ' essais.');
    }
  }
  alert('Désolé, vous avez épuisé vos essais. Le nombre était ' + nombreAleatoire);
  return false;
}
function estPremier() {
  const n = parseInt(prompt('Entrez un nombre pour vérifier s\'il est premier :'));
  if (n < 2) {
    alert(n + ' n\'est pas un nombre premier.');
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      alert(n + ' n\'est pas un nombre premier.');
      return false;
    }
  }
  alert(n + ' est un nombre premier.');
  return true;
}

  
