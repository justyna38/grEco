export const producteursList = [
  {
    id: 'ferme-des-ecrins',
    nom: 'Ferme des Écrins',
    type: 'Maraîchage bio',
    localisation: 'Saint-Martin-d’Hères',
    distance: '7 km',
    labels: ['AB', 'Circuit court'],
    resume: 'Légumes de saison cultivés en agriculture biologique.',
    image: '/images/bio.jpg'
  },
  {
    id: 'boulangerie-des-alpes',
    nom: 'Boulangerie des Alpes',
    type: 'Boulangerie artisanale',
    localisation: 'Grenoble',
    distance: '2 km',
    labels: ['Farines locales', 'Four à bois'],
    resume: 'Pains au levain pétris et cuits sur place avec des farines de la région.',
    image: '/images/boulangerie-des-alpes.jpg'
  },
  {
    id: 'fromagerie-du-vercors',
    nom: 'Fromagerie du Vercors',
    type: 'Fromages & produits laitiers',
    localisation: 'Vercors',
    distance: '35 km',
    labels: ['Local', 'Pâturage'],
    resume: 'Fromages de montagne issus d’un élevage respectueux du bien-être animal.',
    image: '/images/fromagerie.jpg'
  }
];

export const producteursDetails = {
  'ferme-des-ecrins': {
    nom: 'Ferme des Écrins',
    type: 'Maraîchage bio',
    localisation: 'Saint-Martin-d’Hères',
    description:
      'La Ferme des Écrins cultive des légumes de saison en agriculture biologique, à quelques kilomètres de Grenoble. Les cultures sont pensées pour respecter les sols et la biodiversité.',
    pratiques: [
      'Rotation des cultures et engrais verts',
      'Aucun pesticide de synthèse',
      'Vente prioritaire en circuit court'
    ]
  },
  'boulangerie-des-alpes': {
    nom: 'Boulangerie des Alpes',
    type: 'Boulangerie artisanale',
    localisation: 'Grenoble',
    description:
      'Une boulangerie de quartier qui travaille des farines locales et des fermentations longues pour des pains digestes et savoureux.',
    pratiques: [
      'Collaboration avec des meuniers de la région',
      'Privilégie les farines issues de blés anciens',
      'Limitation du gaspillage en fin de journée'
    ]
  },
  'fromagerie-du-vercors': {
    nom: 'Fromagerie du Vercors',
    type: 'Fromages & produits laitiers',
    localisation: 'Vercors',
    description:
      'Une fromagerie de montagne qui valorise le lait des troupeaux pâturant sur les hauteurs du Vercors, avec un soin particulier porté au bien-être animal.',
    pratiques: [
      'Pâturage en plein air',
      'Transformation sur place',
      'Vente directe et via des circuits courts'
    ]
  }
};

