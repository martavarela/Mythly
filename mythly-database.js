// Mythly Character Database with Relationships and Creature Compendium

const MythlyDatabase = {
  // Character relationships: who is related to whom
  relationships: {
    'Zeus': {
      role: 'God (King of Olympus)',
      realm: 'Sky and Thunder',
      parents: ['Kronos', 'Rhea'],
      children: ['Athena', 'Apollo', 'Artemis', 'Ares', 'Hephaestus', 'Dionysus', 'Hermes', 'Persephone'],
      spouse: 'Hera',
      siblings: ['Hera', 'Poseidon', 'Hades', 'Demeter', 'Hestia'],
      half_siblings: [],
      famous_feud: ['Ares', 'Hades', 'Hephaestus'],
      allies: ['Athena']
    },
    'Hera': {
      role: 'God (Queen of Olympus)',
      realm: 'Marriage and Family',
      parents: ['Kronos', 'Rhea'],
      children: ['Ares', 'Hephaestus'],
      spouse: 'Zeus',
      siblings: ['Zeus', 'Poseidon', 'Hades', 'Demeter', 'Hestia'],
      half_siblings: [],
      famous_feud: ['Zeus', 'Aphrodite'],
      allies: ['Hestia', 'Demeter']
    },
    'Athena': {
      role: 'God (Wisdom and Warfare)',
      realm: 'Strategy and Wisdom',
      parents: ['Zeus', 'Metis'],
      children: [],
      spouse: null,
      romantic_bond: 'Hephaestus',
      siblings: [],
      half_siblings: ['Apollo', 'Artemis', 'Ares', 'Hephaestus', 'Dionysus', 'Hermes', 'Persephone'],
      famous_feud: ['Ares', 'Poseidon', 'Arachne', 'Medusa'],
      allies: ['Apollo', 'Hermes']
    },
    'Poseidon': {
      role: 'God',
      realm: 'Sea and Earthquakes',
      parents: ['Kronos', 'Rhea'],
      children: ['Triton', 'Cyclops (Polyphemus)'],
      spouse: 'Amphitrite',
      siblings: ['Zeus', 'Hera', 'Hades', 'Demeter', 'Hestia'],
      half_siblings: [],
      famous_feud: ['Athena', 'Zeus', 'Odysseus'],
      allies: []
    },
    'Hades': {
      role: 'God',
      realm: 'Underworld and Wealth',
      parents: ['Kronos', 'Rhea'],
      children: [],
      spouse: 'Persephone',
      siblings: ['Zeus', 'Hera', 'Poseidon', 'Demeter', 'Hestia'],
      half_siblings: [],
      famous_feud: ['Zeus', 'Heracles', 'Demeter'],
      allies: ['Persephone']
    },
    'Ares': {
      role: 'God',
      realm: 'War and Bloodlust',
      parents: ['Zeus', 'Hera'],
      children: [],
      spouse: 'Otrera',
      romantic_bond: 'Aphrodite',
      siblings: ['Hephaestus'],
      half_siblings: ['Athena', 'Apollo', 'Artemis', 'Dionysus', 'Hermes', 'Persephone'],
      famous_feud: ['Athena', 'Zeus'],
      allies: []
    },
    'Aphrodite': {
      role: 'God',
      realm: 'Love and Beauty',
      parents: ['Zeus', 'Dione'],
      children: ['Eros', 'Aeneas'],
      spouse: 'Hephaestus',
      romantic_bond: 'Ares',
      siblings: [],
      half_siblings: ['Athena', 'Apollo', 'Artemis', 'Ares', 'Hephaestus', 'Dionysus', 'Hermes', 'Persephone'],
      famous_feud: ['Hera', 'Atalanta'],
      allies: ['Eros', 'Dionysus']
    },
    'Apollo': {
      role: 'God',
      realm: 'Sun, Music, Healing, Prophecy',
      parents: ['Zeus', 'Leto'],
      children: [],
      spouse: null,
      siblings: ['Artemis'],
      half_siblings: ['Athena', 'Ares', 'Hephaestus', 'Dionysus', 'Hermes', 'Persephone'],
      famous_feud: ['Ares', 'Marsyas'],
      allies: ['Athena', 'Artemis', 'Hermes']
    },
    'Artemis': {
      role: 'God',
      realm: 'Hunt and Moon',
      parents: ['Zeus', 'Leto'],
      children: [],
      spouse: null,
      siblings: ['Apollo'],
      half_siblings: ['Athena', 'Ares', 'Hephaestus', 'Dionysus', 'Hermes', 'Persephone'],
      famous_feud: ['Actaeon', 'Niobe'],
      allies: ['Apollo', 'Athena']
    },
    'Hermes': {
      role: 'God',
      realm: 'Messages, Travel, Commerce',
      parents: ['Zeus', 'Maia'],
      children: [],
      spouse: null,
      siblings: [],
      half_siblings: ['Athena', 'Apollo', 'Artemis', 'Ares', 'Hephaestus', 'Dionysus', 'Persephone'],
      famous_feud: [],
      allies: ['Athena', 'Apollo', 'Dionysus']
    },
    'Demeter': {
      role: 'God',
      realm: 'Harvest and Agriculture',
      parents: ['Kronos', 'Rhea'],
      children: ['Persephone'],
      spouse: null,
      siblings: ['Zeus', 'Hera', 'Poseidon', 'Hades', 'Hestia'],
      half_siblings: [],
      famous_feud: ['Hades'],
      allies: ['Persephone', 'Hestia']
    },
    'Persephone': {
      role: 'God',
      realm: 'Spring, Underworld, Seasons',
      parents: ['Zeus', 'Demeter'],
      children: [],
      spouse: 'Hades',
      siblings: [],
      half_siblings: ['Athena', 'Apollo', 'Artemis', 'Ares', 'Hephaestus', 'Dionysus', 'Hermes'],
      famous_feud: [],
      allies: ['Hades', 'Demeter']
    },
    'Dionysus': {
      role: 'God',
      realm: 'Wine, Theatre, Madness',
      parents: ['Zeus', 'Semele'],
      children: [],
      spouse: 'Ariadne',
      siblings: [],
      half_siblings: ['Athena', 'Apollo', 'Artemis', 'Ares', 'Hephaestus', 'Hermes', 'Persephone'],
      famous_feud: ['Pentheus', 'Marsyas'],
      allies: ['Aphrodite', 'Hermes']
    },
    'Hestia': {
      role: 'God',
      realm: 'Home and Hearth',
      parents: ['Kronos', 'Rhea'],
      children: [],
      spouse: null,
      siblings: ['Zeus', 'Hera', 'Poseidon', 'Hades', 'Demeter'],
      half_siblings: [],
      famous_feud: [],
      allies: ['Demeter', 'Hera']
    },
    'Hephaestus': {
      role: 'God',
      realm: 'Forge and Craftsmanship',
      parents: ['Zeus', 'Hera'],
      children: [],
      spouse: 'Aphrodite',
      romantic_bond: 'Athena',
      siblings: ['Ares'],
      half_siblings: ['Athena', 'Apollo', 'Artemis', 'Dionysus', 'Hermes', 'Persephone'],
      famous_feud: [],
      allies: ['Athena', 'Dionysus']
    },
    'Eros': {
      role: 'God',
      realm: 'Love and Desire',
      parents: ['Aphrodite', 'Ares'],
      children: [],
      spouse: 'Psyche',
      siblings: [],
      half_siblings: [],
      famous_feud: [],
      allies: ['Aphrodite']
    },
    'Achilles': {
      role: 'Hero',
      realm: 'Troy and Greece',
      parents: ['Peleus', 'Thetis'],
      children: ['Neoptolemus'],
      spouse: null,
      siblings: [],
      half_siblings: [],
      famous_feud: ['Hector', 'Agamemnon'],
      allies: ['Patroclus', 'Ajax']
    },
    'Odysseus': {
      role: 'Hero',
      realm: 'Ithaca and Seas',
      parents: ['Laertes', 'Anticleia'],
      children: ['Telemachus'],
      spouse: 'Penelope',
      siblings: [],
      half_siblings: [],
      famous_feud: ['Poseidon', 'Polyphemus'],
      allies: ['Athena', 'Diomedes']
    },
    'Heracles': {
      role: 'Hero',
      realm: 'Greece and Beyond',
      parents: ['Zeus', 'Alcmene'],
      children: [],
      spouse: 'Hebe',
      siblings: [],
      half_siblings: ['Ares', 'Athena', 'Apollo', 'Artemis', 'Hephaestus', 'Dionysus'],
      famous_feud: ['Hera', 'Hades', 'Ares'],
      allies: ['Theseus', 'Jason', 'Athena']
    },
    'Perseus': {
      role: 'Hero',
      realm: 'Greece and Seas',
      parents: ['Zeus', 'Danae'],
      children: [],
      spouse: 'Andromeda',
      siblings: [],
      half_siblings: ['Athena', 'Apollo', 'Artemis', 'Hermes'],
      famous_feud: ['Medusa', 'Polydectes'],
      allies: ['Athena', 'Hermes', 'Andromeda']
    },
    'Theseus': {
      role: 'Hero',
      realm: 'Athens and Labyrinth',
      parents: ['Aegeus', 'Aethra'],
      children: [],
      spouse: 'Phaedra',
      siblings: [],
      half_siblings: [],
      famous_feud: ['Minotaur', 'Amazon Queen Hippolyta'],
      allies: ['Athena', 'Heracles', 'Pirithous']
    },
    'Jason': {
      role: 'Hero',
      realm: 'Greece and Argonauts',
      parents: ['Aeson', 'Polymele'],
      children: [],
      spouse: 'Medea',
      siblings: [],
      half_siblings: [],
      famous_feud: ['Pelias', 'King Aeetes'],
      allies: ['Heracles', 'Orpheus', 'Medea']
    }
  },

  // Character combat and contest attributes
  characterStats: {
    // Gods
    'Zeus': { strength: 9.8, wits: 7.4, magic: 9.7, influence: 9.9, endurance: 9.1, leadership: 9.8 },
    'Hera': { strength: 7.2, wits: 8.3, magic: 8.1, influence: 9.6, endurance: 8.2, leadership: 9.1 },
    'Athena': { strength: 7.4, wits: 9.9, magic: 8.4, influence: 9.2, endurance: 8.1, leadership: 9.7 },
    'Poseidon': { strength: 9.2, wits: 7.1, magic: 9.3, influence: 8.8, endurance: 9.8, leadership: 8.2 },
    'Hades': { strength: 8.4, wits: 8.2, magic: 9.8, influence: 8.1, endurance: 9.2, leadership: 7.3 },
    'Ares': { strength: 9.9, wits: 5.3, magic: 6.2, influence: 7.1, endurance: 9.7, leadership: 8.1 },
    'Aphrodite': { strength: 5.1, wits: 8.4, magic: 9.2, influence: 9.8, endurance: 7.2, leadership: 7.1 },
    'Apollo': { strength: 7.3, wits: 8.1, magic: 8.5, influence: 8.2, endurance: 8.4, leadership: 8.3 },
    'Artemis': { strength: 8.2, wits: 8.5, magic: 8.1, influence: 7.3, endurance: 9.9, leadership: 8.4 },
    'Hermes': { strength: 6.2, wits: 9.1, magic: 8.2, influence: 8.4, endurance: 8.1, leadership: 7.4 },
    'Demeter': { strength: 6.1, wits: 8.2, magic: 8.3, influence: 8.1, endurance: 9.3, leadership: 8.2 },
    'Persephone': { strength: 5.3, wits: 8.1, magic: 9.1, influence: 8.2, endurance: 8.3, leadership: 7.2 },
    'Hestia': { strength: 4.2, wits: 9.2, magic: 7.2, influence: 8.3, endurance: 8.4, leadership: 8.1 },
    'Hephaestus': { strength: 9.7, wits: 7.2, magic: 8.2, influence: 7.2, endurance: 9.6, leadership: 7.1 },
    'Dionysus': { strength: 6.3, wits: 6.2, magic: 8.1, influence: 8.3, endurance: 8.2, leadership: 7.2 },
    'Eros': { strength: 5.2, wits: 7.3, magic: 9.3, influence: 9.1, endurance: 6.8, leadership: 6.2 },
    // Heroes
    'Achilles': { strength: 9.5, wits: 7.8, magic: 4.2, influence: 7.9, endurance: 9.4, leadership: 8.6 },
    'Odysseus': { strength: 7.2, wits: 9.7, magic: 5.1, influence: 8.8, endurance: 8.7, leadership: 8.9 },
    'Heracles': { strength: 9.8, wits: 6.4, magic: 3.8, influence: 7.5, endurance: 9.9, leadership: 8.2 },
    'Perseus': { strength: 8.1, wits: 8.3, magic: 6.2, influence: 7.6, endurance: 8.4, leadership: 7.8 },
    'Theseus': { strength: 8.4, wits: 8.6, magic: 4.9, influence: 8.1, endurance: 8.8, leadership: 8.5 },
    'Jason': { strength: 7.9, wits: 8.4, magic: 5.3, influence: 8.3, endurance: 8.5, leadership: 8.7 }
  },

  // Creature and Monster Compendium
  creatures: {
    'Minotaur': {
      name: 'Minotaur',
      type: 'Monster',
      realm: 'Labyrinth of Knossos',
      strength: 9,
      intelligence: 4,
      magic: 3,
      origin: 'Half-man, half-bull, offspring of Pasiphae',
      defeated_by: ['Theseus'],
      description: 'A fierce creature imprisoned in an elaborate labyrinth. Feeds on human tributes sent by Athens. Strength unmatched but lacks intelligence.',
      famous_encounters: ['Theseus\' quest', 'Labyrinth imprisonment']
    },
    'Medusa': {
      name: 'Medusa',
      type: 'Gorgon (Monster)',
      realm: 'Underworld',
      strength: 7,
      intelligence: 6,
      magic: 9,
      origin: 'Once a mortal woman, cursed by Athena',
      defeated_by: ['Perseus'],
      description: 'A creature with serpents for hair whose gaze turns flesh to stone. Powerful magic but weakened by her curse.',
      famous_encounters: ['Perseus\' quest', 'Her severed head used as weapon']
    },
    'Hydra': {
      name: 'Hydra',
      type: 'Monster',
      realm: 'Swamps of Lerna',
      strength: 9,
      intelligence: 3,
      magic: 7,
      origin: 'Child of Typhon and Echidna',
      defeated_by: ['Heracles'],
      description: 'A many-headed serpent where each head grows back as two when severed. Nearly unkillable through conventional means.',
      famous_encounters: ['Heracles\' Twelve Labors (Second Labor)']
    },
    'Chimera': {
      name: 'Chimera',
      type: 'Monster',
      realm: 'Anatolia',
      strength: 8,
      intelligence: 5,
      magic: 8,
      origin: 'Offspring of Typhon and Echidna',
      defeated_by: ['Bellerophon'],
      description: 'A hybrid creature with the front of a lion, body of a goat, and tail of a serpent. Breathes fire. Requires a hero on a winged steed to defeat.',
      famous_encounters: ['Bellerophon\'s quest']
    },
    'Dragon (Ladon)': {
      name: 'Ladon',
      type: 'Dragon',
      realm: 'Garden of Hesperides',
      strength: 9,
      intelligence: 8,
      magic: 9,
      origin: 'Child of Typhon and Echidna, guarded golden apples',
      defeated_by: ['Heracles'],
      description: 'An immense serpent with 100 heads, never sleeping. Guards the precious golden apples. Incredibly difficult to overcome.',
      famous_encounters: ['Heracles\' Twelve Labors (Eleventh Labor)']
    },
    'Cyclops (Polyphemus)': {
      name: 'Polyphemus',
      type: 'Cyclops',
      realm: 'Sicily',
      strength: 9,
      intelligence: 4,
      magic: 5,
      origin: 'Son of Poseidon',
      defeated_by: ['Odysseus'],
      description: 'A one-eyed giant with incredible strength. Son of Poseidon makes him dangerous. Defeated through cunning rather than force.',
      famous_encounters: ['Odysseus\' journey', 'Eaten several men']
    },
    'Griffin': {
      name: 'Griffin',
      type: 'Hybrid (Eagle-Lion)',
      realm: 'Mountains and Deserts',
      strength: 8,
      intelligence: 7,
      magic: 6,
      origin: 'Noble creature, often divine guardian',
      defeated_by: [],
      description: 'A majestic creature with the body of a lion and head/wings of an eagle. Often serves as guardian. Highly intelligent.',
      famous_encounters: ['Guardian of treasure', 'Apollo\'s chariot bearer']
    },
    'Pegasus': {
      name: 'Pegasus',
      type: 'Divine Steed',
      realm: 'Sky',
      strength: 7,
      intelligence: 8,
      magic: 9,
      origin: 'Born from Medusa\'s blood',
      defeated_by: [],
      description: 'A winged horse of divine origin. Incredibly fast and magical. Aids heroes in their quests. More ally than enemy.',
      famous_encounters: ['Bellerophon\'s companion', 'Carried Zeus\' thunderbolts']
    },
    'Cerberus': {
      name: 'Cerberus',
      type: 'Guardian Monster',
      realm: 'Underworld Gates',
      strength: 10,
      intelligence: 6,
      magic: 8,
      origin: 'Offspring of Typhon and Echidna, guardian for Hades',
      defeated_by: ['Heracles (briefly)'],
      description: 'A three-headed dog guarding the gates of the Underworld. Incredibly powerful. Only the greatest heroes can pass.',
      famous_encounters: ['Heracles\' Twelve Labors (Twelfth Labor)', 'Orpheus (musical persuasion)']
    },
    'Phoenix': {
      name: 'Phoenix',
      type: 'Divine Bird',
      realm: 'Sky',
      strength: 6,
      intelligence: 9,
      magic: 10,
      origin: 'Divine fire bird',
      defeated_by: [],
      description: 'An immortal bird of extreme beauty that burns itself and is reborn from ashes. Represents renewal and cycles.',
      famous_encounters: ['Symbol of renewal', 'Appears in prophecies']
    }
  },

  // Get all relationships for a character
  getRelationships: function(characterName) {
    return this.relationships[characterName] || null;
  },

  // Get all allies and enemies
  getConnections: function(characterName) {
    const rel = this.relationships[characterName];
    if (!rel) return null;
    return {
      allies: rel.allies || [],
      enemies: rel.famous_feud || [],
      family: {
        parents: rel.parents || [],
        children: rel.children || [],
        siblings: rel.siblings || [],
        spouse: rel.spouse || null
      }
    };
  },

  // Get creature info
  getCreature: function(creatureName) {
    return this.creatures[creatureName] || null;
  },

  // Get all creatures
  getAllCreatures: function() {
    return Object.values(this.creatures);
  },

  // Get creatures by type
  getCreaturesByType: function(type) {
    return Object.values(this.creatures).filter(c => c.type === type);
  }
};

if (typeof window !== 'undefined') {
  window.MythlyDatabase = MythlyDatabase;
}
