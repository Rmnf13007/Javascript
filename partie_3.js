function perimetre() {
    const n = arguments.length;
    let perimetre = 0;
  
    if (n === 0) {
      console.log('Erreur');
      return;
    }
  
    if (n === 1) {
      perimetre = 4 * arguments[0];
      console.log(`C'est un carré de périmètre ${perimetre}`);
      return;
    }
  
    if (n === 2) {
      perimetre = 2 * (arguments[0] + arguments[1]);
      console.log(`C'est un rectangle de périmètre ${perimetre}`);
      return;
    }
  
    if (n === 3) {
      perimetre = arguments[0] + arguments[1] + arguments[2];
      console.log(`C'est un triangle de périmètre ${perimetre}`);
      return;
    }
  
    for (let i = 0; i < n; i++) {
      perimetre += arguments[i];
    }
    console.log(`C'est un polygone de périmètre ${perimetre}`);
  }
  // Exemples d'utilisation
console.log(perimetre());            // Erreur
console.log(perimetre(4));           // C'est un carré de périmètre 16
console.log(perimetre(4,3));         // C'est un rectangle de périmètre 14
console.log(perimetre(5,4,3));       // C'est un triangle de périmètre 12
console.log(perimetre(5,4,3,2,4,7)); // C'est un polygone de périmètre 25