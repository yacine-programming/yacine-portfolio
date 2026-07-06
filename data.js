/* ╔═══════════════════════════════════════════════════════════════════╗
   ║                                                                   ║
   ║       DATA.JS — Le tableau de bord de TON site                   ║
   ║                                                                   ║
   ║  Ce fichier contient TOUT ton contenu : textes, photos, projets, ║
   ║  compétences, parcours, contacts, couleurs, etc.                 ║
   ║                                                                   ║
   ║  ────────────────────────────────────────────────────────────    ║
   ║  COMMENT MODIFIER TON SITE :                                     ║
   ║  1. Ouvre ce fichier dans Notepad ou VS Code                     ║
   ║  2. Cherche ce que tu veux changer (voir les sections)           ║
   ║  3. Modifie la valeur                                            ║
   ║  4. Enregistre le fichier (Ctrl+S)                               ║
   ║  5. Ouvre index.html dans ton navigateur → tu vois direct !     ║
   ║  6. Pour publier : git add . && git commit && git push           ║
   ║  ────────────────────────────────────────────────────────────    ║
   ║                                                                   ║
   ║  ⚠️  RÈGLE D'OR : ne jamais supprimer les virgules `,` ni les    ║
   ║      apostrophes `'` qui entourent les textes !                  ║
   ║                                                                   ║
   ╚═══════════════════════════════════════════════════════════════════╝ */


const DATA = {


  // ══════════════════════════════════════════════════════════════════════
  // SECTION 1 — IDENTITÉ
  // ══════════════════════════════════════════════════════════════════════

  identite: {
    nom: 'Yacine Doukhi',
    titre: 'Ingénieur en Systèmes Embarqués',
    email: 'yacine.doukhi.eng@gmail.com',
  },


  // ══════════════════════════════════════════════════════════════════════
  // SECTION 2 — HERO (haut de page)
  // ══════════════════════════════════════════════════════════════════════

  hero: {
    // Badge en haut (à côté du voyant LED)
    badge: 'Disponible pour de nouvelles opportunités',

    // Couleur du voyant LED. Choix : 'green', 'orange', 'red', 'blue', 'gray'
    //   'green'  → Disponible (vert qui pulse)
    //   'orange' → Bientôt disponible (orange qui pulse)
    //   'red'    → Indisponible (rouge qui pulse)
    //   'blue'   → En mission (bleu qui pulse)
    //   'gray'   → Inactif (gris, sans animation)
    couleurVoyant: 'green',

    // Le mot ou groupe de mots mis en évidence dans le titre
    motCleHighlight: 'systèmes embarqués',

    // Sous-titre (paragraphe sous le titre)
    sousTitre: "Diplômé en ingénierie de l'USTHB, je conçois des systèmes intelligents qui relient le matériel à l'intelligence artificielle. Du capteur au cloud, en passant par l'IA embarquée — j'aime construire des solutions qui fonctionnent vraiment sur le terrain.",

    // Texte des deux boutons
    boutonPrincipal: 'Voir mes projets',
    boutonSecondaire: 'Télécharger CV',

    // Les 3 chiffres affichés dans la barre SPECS
    stat1: { valeur: '3', label: 'Projets majeurs réalisés' },
    stat2: { valeur: '2', label: 'Stages en industrie' },
    stat3: { valeur: '5+', label: 'Années en électronique' },
  },


  // ══════════════════════════════════════════════════════════════════════
  // SECTION 3 — À PROPOS
  // ══════════════════════════════════════════════════════════════════════

  aPropos: {
    tag: 'À propos',
    // Mets un mot en italique avec des astérisques. Ex : "avec *rigueur*"
    titre: "Du capteur au cloud, avec *rigueur*.",

    bio1: "Ingénieur en Systèmes Embarqués diplômé de l'USTHB (2026), je suis passionné par la conception de solutions électroniques innovantes, intégrant les systèmes embarqués, l'IoT, les communications, l'intelligence artificielle embarquée et les technologies connectées.",
    bio2: "Mon expertise couvre l'ensemble de la chaîne embarquée : conception et développement de systèmes électroniques, conception de PCB, maintenance et diagnostic de cartes électroniques, interfaçage de capteurs avec microcontrôleurs (ESP32, STM32, Arduino), protocoles de communication (SPI, I2C, CAN, UART, LoRa, Wi-Fi, GSM), développement IoT et intelligence artificielle embarquée (Edge AI).",

    // Les 4 cartes Bento
    carteLocalisation: {
      valeur: 'Aïn Taya, Alger',
      sousValeur: 'Mobile · Remote OK',
    },
    carteLangues: {
      valeur: 'AR · FR · EN',
      sousValeur: 'Trilingue professionnel',
    },
    carteDiplome: {
      valeur: "Diplôme d'Ingénieur",
      sousValeur: 'USTHB · 2025',
    },
    carteStatut: {
      valeur: 'Disponible',
      sousValeur: 'CDI · CDD · Freelance',
    },

    // Tags d'expertise (mots-clés affichés en bas de la section)
    expertiseTitre: 'EXPERTISE',
    expertiseTags: 'ESP32, STM32, Arduino, Raspberry Pi, LoRa, GSM, Edge AI, YOLOv8n, LSTM, Computer Vision, Deep Learning, IoT, PCB, C/C++, Python, MicroPython',
  },


  // ══════════════════════════════════════════════════════════════════════
  // SECTION 4 — COMPÉTENCES (avec LEDs allumées)
  // ══════════════════════════════════════════════════════════════════════
  // Pour chaque compétence, mets un niveau de 1 à 5 (= LEDs allumées).

  competences: {
    tag: 'Compétences',
    titre: "L'arsenal technique.",
    sousTitre: "Des bases solides forgées à l'USTHB et affinées sur des projets concrets.",

    categories: [
      {
        titre: 'Systèmes Embarqués',
        icone: 'µC',
        competences: [
          { nom: 'ESP32 / STM32 / Arduino', niveau: 5 },
          { nom: 'Raspberry Pi', niveau: 5 },
          { nom: 'Interfaçage capteurs', niveau: 5 },
          { nom: 'Prototypage hardware', niveau: 4 },
          { nom: 'Diagnostic / réparation', niveau: 5 },
          { nom: 'Soudure de précision', niveau: 5 },
        ],
      },
      {
        titre: 'Protocoles & Communication',
        icone: '⇆',
        competences: [
          { nom: 'SPI · I2C · UART', niveau: 5 },
          { nom: 'CAN bus', niveau: 4 },
          { nom: 'LoRa / LoRaWAN', niveau: 5 },
          { nom: 'Wi-Fi · Bluetooth', niveau: 4 },
          { nom: 'GSM / GPRS (SIM800L)', niveau: 5 },
        ],
      },
      {
        titre: 'IoT & Edge AI',
        icone: '◈',
        competences: [
          { nom: 'Architectures IoT', niveau: 5 },
          { nom: 'IA embarquée (Edge AI)', niveau: 4 },
          { nom: 'YOLOv8n · Computer Vision', niveau: 4 },
          { nom: 'LSTM · Séries temporelles', niveau: 4 },
          { nom: 'PyTorch · TensorFlow', niveau: 4 },
        ],
      },
      {
        titre: 'Programmation',
        icone: '</>',
        competences: [
          { nom: 'C / C++', niveau: 5 },
          { nom: 'Python · MicroPython', niveau: 5 },
          { nom: 'Flask', niveau: 4 },
          { nom: 'HTML / CSS / JavaScript', niveau: 4 },
          { nom: 'Git · GitHub', niveau: 4 },
        ],
      },
    ],
  },


  // ══════════════════════════════════════════════════════════════════════
  // SECTION 5 — PROJETS
  // ══════════════════════════════════════════════════════════════════════
  // Pour AJOUTER : copie un bloc { ... } et adapte les valeurs.
  // Pour SUPPRIMER : efface un bloc entier (avec sa virgule).
  //
  // CATÉGORIES : 'iot', 'embedded', 'ml', 'rf' (une ou plusieurs)
  // IMAGES : chemin relatif. Ex : 'assets/images/tomatoguard-1.jpg'
  //          Laisse '' (vide) si tu n'as pas encore d'image.

  projets: {
    tag: 'Projets',
    titre: "Ce que j'ai construit.",
    filtres: {
      tous: 'Tous',
      iot: 'IoT',
      embarque: 'Embarqué',
      ia: 'IA',
      rf: 'RF',
    },

    liste: [
      // ─── Projet 1 : TomatoGuard (Featured) ────────────────────────────
      {
        id: 'tomatoguard',
        featured: true,
        titre: 'TomatoGuard',
        sousTitre: 'Station Météo Intelligente · IA Embarquée',
        categories: ['iot', 'ml', 'embedded'],
        etiquette: 'PFE · 2024-2025',
        lienExterne: 'https://y4cine-tomatoguard.hf.space',
        imagePrincipale: 'assets/images/tomatoguard-0.png',
        imagesGalerie: [
          'assets/images/tomatoguard-2.png',
        ],
        descriptionCourte: "Projet de fin d'études : station météo intégrant de l'IA embarquée pour la détection précoce des maladies de la tomate. Approche hybride combinant vision par ordinateur (YOLOv8n) et prédiction par séries temporelles (LSTM).",
        descriptionLongue: `<p><strong>Contexte :</strong> Mon projet de fin d'études à l'USTHB — un système autonome dédié à l'agriculture intelligente, pour la détection précoce des maladies sur les plants de tomate.</p>
<p><strong>Architecture matérielle :</strong> Un nœud capteur basé sur ESP32 mesure température, humidité (air et sol), vitesse du vent et précipitations. La transmission longue portée s'appuie sur LoRa pour les zones rurales, avec une architecture hybride LoRa-primaire / GSM-secours (module SIM800L).</p>
<p><strong>Intelligence embarquée :</strong> Le traitement s'effectue sur Raspberry Pi avec deux modèles :</p>
<ul>
  <li><strong>YOLOv8n</strong> pour la détection visuelle des maladies sur les feuilles</li>
  <li><strong>LSTM</strong> pour la prédiction de la progression à partir des données climatiques</li>
</ul>
<p><strong>Pipeline PlantDiseaseSystem :</strong> fusion tardive YOLOv8n + LSTM avec scoring pondéré, rapports JSON et interface web temps réel.</p>
<p><strong>Technologies clés :</strong> ESP32, Raspberry Pi, LoRa, GSM SIM800L, Python, PyTorch, TensorFlow, Flask.</p>`,
        technologies: ['ESP32', 'Raspberry Pi', 'LoRa', 'GSM SIM800L', 'YOLOv8n', 'LSTM', 'Python', 'TensorFlow', 'Flask'],
      },

      // ─── Projet 2 : Système RFID ─────────────────────────────────────
      {
        id: 'rfid-access',
        featured: false,
        titre: 'Système RFID',
        sousTitre: "Contrôle d'Accès · Pointage Automatique",
        categories: ['iot', 'embedded'],
        etiquette: 'Projet · 2023-2024',
        lienExterne: '',
        imagePrincipale: 'assets/images/rfid-1.png',
        imagesGalerie: [],
        descriptionCourte: "Système intelligent permettant le contrôle d'accès aux portes/locaux et le pointage automatique des présences via badges RFID.",
        descriptionLongue: `<p>Système intégré conçu pour répondre à deux besoins courants : le contrôle d'accès sécurisé aux locaux et le pointage automatique des présences.</p>
<p><strong>Architecture :</strong></p>
<ul>
  <li>Microcontrôleur <strong>ESP32</strong> comme cerveau du système</li>
  <li><strong>Lecteur RFID</strong> interfacé via SPI pour la lecture des badges</li>
  <li>Logique de contrôle : autorisation/refus selon les droits de chaque badge</li>
  <li>Communication réseau pour la centralisation des données</li>
</ul>
<p><strong>Base de données :</strong> historisation des accès et pointages avec interface de consultation.</p>`,
        technologies: ['ESP32', 'RFID', 'SPI', 'Base de données', 'Réseau', 'C/C++'],
      },

      // ─── Projet 3 : Station Météo ────────────────────────────────────
      {
        id: 'weather-station',
        featured: false,
        titre: 'Station Météo Multi-capteurs',
        sousTitre: 'Acquisition & Transmission Temps Réel',
        categories: ['iot', 'embedded'],
        etiquette: 'PFC · 2022-2023',
        lienExterne: '',
        imagePrincipale: 'assets/images/station-meteo-0.png',
        imagesGalerie: [],
        descriptionCourte: "Projet de fin de cycle : station météo complète mesurant température, humidité, pression et vitesse du vent.",
        descriptionLongue: `<p>Projet de fin de cycle de Licence : conception et réalisation d'une station météorologique complète, première étape vers TomatoGuard.</p>
<p><strong>Acquisition multi-capteurs :</strong></p>
<ul>
  <li>Capteur de température et d'humidité</li>
  <li>Capteur de pression atmosphérique</li>
  <li>Anémomètre pour la vitesse du vent</li>
</ul>
<p><strong>Traitement et transmission :</strong> les mesures sont acquises et traitées localement par le microcontrôleur, puis transmises vers une interface de supervision.</p>`,
        technologies: ['Microcontrôleur', 'Capteurs', 'I2C', 'Transmission série', 'C/C++'],
      },
    ],
  },


  // ══════════════════════════════════════════════════════════════════════
  // SECTION 6 — PARCOURS (timeline)
  // ══════════════════════════════════════════════════════════════════════

  parcours: {
    tag: 'Parcours',
    titre: 'Le chemin parcouru.',

    etapes: [
      {
        date: '2024 — 2026',
        titre: "Diplôme d'Ingénieur · Master 2 en Systèmes Embarqués",
        organisation: "USTHB · Université des Sciences et de la Technologie Houari Boumediene, Alger",
        description: "Projet de Fin d'Études (PFE) : TomatoGuard — station météo intégrant de l'IA embarquée pour la détection précoce des maladies de la tomate.",
      },
      {
        date: '2024',
        titre: 'Stagiaire en Électronique & Systèmes Embarqués',
        organisation: 'SNTF · Société Nationale des Transports Ferroviaires, Alger',
        description: "Diagnostic, maintenance et réparation de cartes et systèmes électroniques en environnement industriel.",
      },
      {
        date: '2020 — 2024',
        titre: 'Licence · Systèmes Embarqués / Électronique',
        organisation: 'USTHB, Alger',
        description: "Projet de Fin de Cycle (PFC) : station météo complète. Bases solides en électronique analogique et numérique, microcontrôleurs et systèmes embarqués.",
      },
      {
        date: '2023',
        titre: 'Technicien en Maintenance de Cartes Électroniques (Stage)',
        organisation: 'Atelier de Réparation Électronique, Alger',
        description: "Diagnostic, maintenance et réparation de cartes électroniques de téléviseurs, notamment des cartes d'alimentation (SMPS) et des cartes de commande (Main Board). Détection des pannes, remplacement de composants électroniques, utilisation d'instruments de mesure (multimètre, oscilloscope), soudure et dessoudure de composants, validation des réparations et remise en service des équipements.",
      },
      {
        date: '2020',
        titre: 'Baccalauréat · Sciences Expérimentales',
        organisation: 'Lycée Mohamed Lamine Debaghine, Alger',
        description: "Filière sciences expérimentales — fondations en mathématiques, physique et chimie.",
      },
    ],
  },


  // ══════════════════════════════════════════════════════════════════════
  // SECTION 7 — CONTACT
  // ══════════════════════════════════════════════════════════════════════

  contact: {
    tag: 'Contact',
    titre: 'Construisons quelque chose ensemble.',
    introduction: "Une opportunité, un projet, ou simplement une question technique — je réponds sous 48h.",

    email: {
      afficher: 'yacine.doukhi.eng@gmail.com',
      lien: 'mailto:yacine.doukhi.eng@gmail.com',
    },
    linkedin: {
      afficher: 'linkedin.com/in/yacine-doukhi',
      lien: 'https://www.linkedin.com/in/yacine-doukhi/',
    },
    whatsapp: {
      numero: '+213561515675',
      messagePreRempli: "Bonjour Yacine, j'ai vu votre portfolio…",
    },

    formulaire: {
      labelNom: 'Votre nom',
      labelEmail: 'Email',
      labelSujet: 'Sujet',
      labelMessage: 'Message',
      boutonEnvoyer: 'Envoyer',
      note: "Ouvre votre client email avec un message pré-rempli.",
      placeholderNom: ' Entrez votre nom',
      placeholderEmail: 'Votre_Email@company.com',
      placeholderSujet: 'Opportunité, projet, question…',
      placeholderMessage: 'Parlez-moi de votre projet…',
    },
  },


  // ══════════════════════════════════════════════════════════════════════
  // SECTION 8 — NAVIGATION (menu en haut)
  // ══════════════════════════════════════════════════════════════════════

  navigation: {
    lienAPropos: 'À propos',
    lienCompetences: 'Compétences',
    lienProjets: 'Projets',
    lienParcours: 'Parcours',
    lienContact: 'Contact',
    bouton: 'Discutons',
  },


}; // ← Fin de DATA (ne rien mettre après)
