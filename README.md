# CVision: Créateur de CV en ligne
Créez un CV professionnel gratuitement, directement dans votre navigateur.

# Lien GitHub Pages:
https://farahcde.github.io/Trabelsi-Farah-CVision/

# Description
CVision est une application web développée dans le cadre d'un projet étudiant de deuxième année en cycle préparatoire intégré.  
Elle permet à n'importe quel utilisateur de créer un CV moderne et professionnel sans inscription, sans logiciel et sans frais.
Toutes les données restent dans le navigateur, rien n'est envoyé à un serveur.

# Technologies utilisées
HTML5: Structure et contenu de la page
CSS3: Mise en forme, animations, thèmes
JavaScript: Interactivité et aperçu en temps réel
Google Fonts: Polices Poppins et DM Serif Display
GitHub Pages: Hébergement gratuit du projet

# Fonctionnalités principales
-Formulaire interactif avec aperçu du CV mis à jour en temps réel
-Ajout et suppression dynamiques d'expériences, formations et compétences
-Gestion des soft skills avec suggestions cliquables et ajout par la touche Entrée
-Upload et affichage d'une photo de profil
-Choix du thème de couleur (4 options) et de la police
-Validation des champs obligatoires avant téléchargement
-Export du CV en PDF
-Réinitialisation du formulaire avec confirmation
-Design responsive adapté aux différentes tailles d'écran

# Nouveautés explorées
Durant ce projet, plusieurs notions ont été découvertes ou approfondies :
-Manipulation du DOM en JavaScript: création et suppression d'éléments HTML dynamiquement via createElement, appendChild et remove()
-FileReader API: lecture et affichage d'une image locale uploadée par l'utilisateur sans passer par un serveur, grâce à FileReader.readAsDataURL().
-CSS custom properties (variables): utilisation de --c pour changer la couleur du thème du CV en une seule ligne, en propageant automatiquement la valeur dans tous les éléments concernés.
-Impression CSS avec @media print: masquer toutes les sections sauf le CV pour obtenir un PDF propre lors de l'impression navigateur.
-Glassmorphism: effet de backdrop-filter: blur()et des fonds semi-transparents en rgba.
-Google Fonts: intégration de polices externes via un lien <link> dans le <head>.


# Difficultés rencontrées
1. Aperçu en temps réel incomplet: La mise à jour dynamique du CV m’a posé problème, notamment avec les événements oninput et la création d’éléments (createElement).
Je crois que cette partie de synchronisation m'a pris le plus de temps à comprendre.

2. Impression du CV: lors du premier test d'impression, toute la page s'imprimait au lieu du seul CV, rendant le résultat inutilisable.

3. Doublons dans les soft skills: en cliquant plusieurs fois sur la même suggestion, le même mot s'ajoutait plusieurs fois dans le CV.

4. Défilement perdu lors de la saisie: le formulaire étant long, l'aperçu du CV disparaissait du champ de vision pendant la saisie, rendant la vérification difficile.

5. Ajout de nouvelles fonctionnalités: J'ai eu le sentiment que le projet manquait de dimension créative et je cherchais sans cesse à inventer de nouvelles fonctionnalités ou à améliorer le design pour donner une identité au projet. Ce n'est qu'à partir des commit 4/5 que j'ai réellement commencé à apprécier le produit.

# Solutions apportées

1. Aperçu en temps réel: ajout des événements oninput manquants sur les champs tel, ville et github, en les branchant tous sur une fonction updateContact() qui reconstruit la ligne de contact à chaque frappe.

2. Fonctions manquantes: implémentation complète de toutes les fonctions absentes: resetForm() vide les champs et remet le DOM à son état initial, setTheme() change la classe CSS du CV, setFont() modifie la fontFamily directement sur l'élément.

3. Photo de profil : utilisation de l'API FileReader avec readAsDataURL() pour lire le fichier localement et injecter le résultat dans l'attribut src de la balise <img>.

4. Impression propre: ajout d'une règle @media print qui masque tous les éléments sauf le bloc .cv, puis positionnement absolu de ce bloc pour qu'il occupe toute la page imprimée.

5. Doublons soft skills: utilisation d'un tableau JavaScript softList qui vérifie avec includes() si la valeur existe déjà avant de l'ajouter, et refus silencieux en cas de doublon.

6. Formulaire sticky: ajout de position: sticky; top: 20px; align-self: flex-start sur le formulaire afin qu'il reste visible à l'écran pendant le défilement, sans que l'aperçu CV ne soit caché.
