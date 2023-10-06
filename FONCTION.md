# Exercice Complémentaire

## L'objet Arguments

Créer une fonction sans paramètre qui gère automatiquement la liste des paramètres éventuels via l'objet `arguments` de façon à calculer le périmètre d'un polygone quelconque :

    Pas de paramètre : erreur

    1 seul paramètre = carré (→périmètre = 4 x côté)

    2 paramètres = rectangle (→périmètre = 2 x longueur + 2 x largeur)

    3 paramètres = triangle (→périmètre = somme des 3 côtés)

    Supérieur à 2 = le nombre d'arguments correspond au nombre de côtés du polygone (→périmètre = somme des côtés)

Affichés les résultats en console, ils contiennent la désignation du type de forme détecté et le périmètre calculé.

```JavaScript
console.log(perimetre())            // Erreur
console.log(perimetre(4))           // C'est un carré de périmètre 16
console.log(perimetre(4,3))         // C'est un rectangle de périmètre 14
console.log(perimetre(5,4,3))       // C'est un triangle de périmètre 12
console.log(perimetre(5,4,3,2,4,7)) // C'est un polygone de périmètre 25
```

## Palindrome

L'objectif de cet exercice est de créer une fonction isPalindrome() qui renverra vrai si un mot est un palindrome et false sinon. La fonction ne sera pas sensible à la casse.

Pour cet exercice vous aurez besoin d'utiliser des fonctions vu durant la CV sur les fonctions usuelles

```JavaScript
console.log(isPalindrom('kayak')) // true
console.log(isPalindrom('SOS')) // true
console.log(isPalindrom('Kayak')) // true
console.log(isPalindrom('Bonjour')) // false
```
## Moyenne

Dans cet exercice on souhaite modifier l'objet suivant pour ajouter une propriété moyenne qui contiendra la moyenne de chaque élève.

Une fois cet objet modifié on créera un top 3 des élèves.

Pour cet exercice vous aurez besoin de la fonction sort.

```JavaScript
const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
]
```

## Calculateur de fréquence

Nous allons créer un système capable de calculer la fréquence des mots dans une chaine de caractère. L'objectif sera dans un premier temps d'obtenir un objet qui contiendra en propriété le mot, et en valeur le nombre d'occurence ({bonjour: 3, maison: 2})

Pour cet exercice on nettoiera la chaine en retirant les caractères qui ne sont pas des mots (, ? : ...). Pour cela vous aurez besoin de la fonction `replaceAll`. Vous aurez aussi besoin de mettre la phrase en minuscule à l'aide de `toLowerCase`

Maintenant vous devez ajouter de la logique pour extraire le top 3 des mots les plus utilisé dans la phrase.

```JavaScript
const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`
```