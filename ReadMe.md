# Print-it(le site Internet statique d’une petite imprimerie familiale)

Projet 5 - Premiers pas sur le langage JavaScript (OpenClassrooms)

<p>J'ai créé un carrousel dans le cadre du cinqième projet de ma formation en tant qu'intégrateur web chez OpenClassrooms.</p>
<p> Vous pouvez trouver le lien vers le site ci-dessous 👇 </p>
<a href="https://sinkuu77.github.io/print-it/">https://sinkuu77.github.io/print-it/</a>

## le délai de production du site
08.05.23 - 17.05.23

## Stack utilisé
JavaScript

## Point
Mon premier pas dans le monde de JavaScript ! J'ai mis en pratique mes compétences en réalisant un carrousel interactif.

## Problème en réalisant ce projet
```js
if (direction === "left") {
    if (clicks > 0) {
      clicks -= 1;
    } else {
      clicks = dot.length - 1;
    }
  } else {
    if (clicks < dot.length - 1) {
      clicks += 1;
    } else {
      clicks = 0;
    }
  }
```
<p>Avant de modifier le code comme mentionné ci-dessus, j'avais créé deux fonctions qui réagissaient de la même manière. </p>
<p>Cependant, en utilisant une condition qui vérifie la direction de la flèche cliquée, il est possible de mettre en œuvre la fonctionnalité de manière plus efficace.</p>
