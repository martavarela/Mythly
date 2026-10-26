// Mythly Explanation Panel System
// Add detailed explanations to game results with mythological context

const MythlyExplanations = {
  // Detailed explanation data for character matchups
  matchupExplanations: {
    'Zeus vs Ares': {
      theme: 'Power vs Brutality',
      narratives: [
        'Zeus\' mastery of divine authority overwhelms Ares\' raw combat prowess. As king of the gods, Zeus commands the very heavens, a power Ares can never rival.',
        'While Ares embodies the chaos of war, Zeus represents its strategic direction. His wisdom and control far exceed Ares\' violent nature.',
        'The clash between the two warrior gods has occurred many times in mythology. Each time, Zeus\' cosmic power proves superior to Ares\' battlefield fury.'
      ]
    },
    'Athena vs Ares': {
      theme: 'Strategy vs Strength',
      narratives: [
        'Athena\'s wisdom transforms warfare into an art form, systematically defeating Ares\' brute force approach. Intelligence triumphs over brutality.',
        'While Ares charges recklessly into battle, Athena calculates every move. Her tactical superiority is legendary among gods and mortals alike.',
        'In every tale where they clash, Athena emerges victorious through superior planning and cunning, proving that the mind defeats the sword.'
      ]
    },
    'Poseidon vs Zeus': {
      theme: 'Ocean vs Sky',
      narratives: [
        'While Poseidon commands the vast oceans, Zeus\' authority over the very sky and thunder grants him dominion over nature itself.',
        'These brother gods have contested power since ancient times. Zeus\' political position as king of Olympus gives him advantage over Poseidon\'s domain.',
        'The earth trembles from Poseidon\'s rage and the seas rise at his command, yet Zeus\' lightning reaches across all realms, proving ultimate supremacy.'
      ]
    }
  },

  // Statistical explanations
  statExplanations: {
    'Strength': {
      description: 'Raw physical power and combat ability. Measures capacity for physical damage and endurance in direct combat.',
      mythological_examples: {
        'Heracles': 'Legendary for superhuman strength, capable of wrestling gods and monsters.',
        'Prometheus': 'Strong enough to create humanity and challenge Zeus\' authority.',
        'Hades': 'Commands the power of the earth itself, immense physical presence.'
      }
    },
    'Wisdom': {
      description: 'Intelligence, strategic thinking, and knowledge. Determines decision-making quality and problem-solving ability.',
      mythological_examples: {
        'Athena': 'Goddess of wisdom, known for strategic brilliance in war and counsel.',
        'Hephaestus': 'Master craftsman whose intelligence created divine weapons.',
        'Hermes': 'Clever and cunning, known for outsmarting even the gods.'
      }
    },
    'Magic': {
      description: 'Magical power and supernatural abilities. Measures divine potency and arcane knowledge.',
      mythological_examples: {
        'Hecate': 'Goddess of magic, mistress of witchcraft and the supernatural.',
        'Dionysus': 'Commands divine madness and transformation, powerful in unpredictable ways.',
        'Apollo': 'Master of prophecy and divine magic, can see all futures.'
      }
    },
    'Influence': {
      description: 'Political power and ability to sway others. Determines faction support and diplomatic advantage.',
      mythological_examples: {
        'Zeus': 'King of gods, absolute authority over all Olympians.',
        'Hera': 'Queen of Olympus, commands respect and fear from lesser deities.',
        'Nike': 'Goddess of victory, her favor determines outcomes of conflicts.'
      }
    },
    'Endurance': {
      description: 'Stamina and resistance to harm. Determines how long a character can persist in conflict.',
      mythological_examples: {
        'Prometheus': 'Endured eternal punishment for ages, never breaking his will.',
        'Demeter': 'Withdrew from Olympus, and the world withered—her power sustains all.',
        'Cerberus': 'Never tires, stands eternal guard at the gates of the Underworld.'
      }
    }
  },

  // Tournament explanation templates
  tournamentExplanations: {
    'knockout': {
      title: 'Single Elimination Tournament',
      description: 'Competitors advance through successive battles. One loss means elimination. The survivor becomes champion.'
    },
    'group_stage': {
      title: 'Group Stage then Knockout',
      description: 'Competitors are divided into groups. Winners of each group advance to knockout rounds where the final champion is determined.'
    },
    'winner_loser_bracket': {
      title: 'Winner\'s and Loser\'s Bracket',
      description: 'Competitors progress through both a winner\'s bracket (for those winning) and a loser\'s bracket (for those defeated). Creates multiple pathways to glory.'
    },
    'round_robin': {
      title: 'Round Robin',
      description: 'Every competitor battles every other competitor exactly once. Rankings determined by total wins. Most comprehensive format.'
    },
    'league_then_knockout': {
      title: 'League Phase then Knockout',
      description: 'All competitors play in a league where everyone faces everyone. Top finishers advance to knockout rounds for the championship.'
    },
    'swiss': {
      title: 'Swiss System',
      description: 'Competitors are matched based on win-loss record. Not a true elimination format—players with losses can still advance and compete.'
    }
  },

  // Combat scenario explanations
  combatScenarios: {
    'fight': {
      title: 'Physical Combat',
      description: 'Direct hand-to-hand or melee combat. Tests strength, speed, and battle technique.',
      factors: ['Raw strength', 'Combat experience', 'Physical resilience', 'Tactical positioning']
    },
    'wits': {
      title: 'Battle of Intellect',
      description: 'Intellectual challenge, riddle contest, or strategic deception. Determines who outthinks their opponent.',
      factors: ['Knowledge', 'Quick thinking', 'Cunning', 'Wisdom']
    },
    'strength': {
      title: 'Test of Power',
      description: 'Pure physical challenge. Lifting, wrestling, or raw power demonstration.',
      factors: ['Muscle strength', 'Endurance', 'Physical dominance', 'Resistance']
    },
    'magic': {
      title: 'Arcane Contest',
      description: 'Magic duel, spell-weaving, or supernatural power exhibition. Magical mastery determines the victor.',
      factors: ['Magical potency', 'Arcane knowledge', 'Spell versatility', 'Divine favor']
    },
    'influence': {
      title: 'Contest of Will',
      description: 'Political maneuvering, persuasion, or appeal to supporters. Authority and charisma decide the outcome.',
      factors: ['Faction loyalty', 'Political position', 'Charisma', 'Divine authority']
    },
    'endurance': {
      title: 'Trial of Stamina',
      description: 'Long-duration test requiring persistence and resilience. Whoever lasts longest prevails.',
      factors: ['Physical stamina', 'Mental fortitude', 'Supernatural resilience', 'Will to survive']
    },
    'leadership': {
      title: 'Test of Command',
      description: 'Ability to inspire and lead followers. Demonstrates who could better command an army or faction.',
      factors: ['Inspirational power', 'Tactical command', 'Follower loyalty', 'Strategic vision']
    }
  },

  // Create an explanation modal HTML
  createExplanationModal: function(title, content) {
    const modal = document.createElement('div');
    modal.className = 'mythly-explanation-modal';
    modal.innerHTML = `
      <div class="explanation-overlay"></div>
      <div class="explanation-content">
        <div class="explanation-header">
          <h2>${title}</h2>
          <button class="explanation-close">&times;</button>
        </div>
        <div class="explanation-body">${content}</div>
      </div>
    `;
    return modal;
  },

  // Show matchup explanation
  showMatchupExplanation: function(char1, char2, winner) {
    const key = `${winner} vs ${winner === char1 ? char2 : char1}`;
    const explanation = this.matchupExplanations[key] || this.matchupExplanations[`${char2} vs ${char1}`];
    
    if (!explanation) {
      return {
        theme: 'Mythological Clash',
        narrative: `A contest between ${char1} and ${char2}. The victor emerged through superior power and cunning.`
      };
    }

    return {
      theme: explanation.theme,
      narrative: explanation.narratives[Math.floor(Math.random() * explanation.narratives.length)]
    };
  },

  // Show stat explanation
  showStatExplanation: function(stat) {
    return this.statExplanations[stat] || null;
  },

  // Get tournament format explanation
  getTournamentExplanation: function(format) {
    return this.tournamentExplanations[format] || null;
  },

  // Get combat scenario explanation
  getCombatExplanation: function(scenario) {
    return this.combatScenarios[scenario] || null;
  },

  // Generate detailed explanation for a matchup result
  generateDetailedExplanation: function(char1, char2, winner, scenario) {
    const matchupExp = this.showMatchupExplanation(char1, char2, winner);
    const combatExp = this.getCombatExplanation(scenario);
    
    let html = `
      <div class="explanation-section">
        <h3>Match Summary</h3>
        <p><strong>${matchupExp.theme}:</strong> ${matchupExp.narrative}</p>
      </div>
    `;

    if (combatExp) {
      html += `
        <div class="explanation-section">
          <h3>${combatExp.title}</h3>
          <p>${combatExp.description}</p>
          <h4>Key Factors in Victory:</h4>
          <ul>
            ${combatExp.factors.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    return html;
  }
};

// CSS for explanation modals
function injectExplanationStyles() {
  if (document.getElementById('mythly-explanation-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'mythly-explanation-styles';
  style.textContent = `
    .mythly-explanation-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
    }
    .explanation-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
    .explanation-content {
      position: relative;
      background: white;
      border-radius: 1rem;
      max-width: 600px;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      padding: 2rem;
    }
    .explanation-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid #8b7355;
      padding-bottom: 1rem;
    }
    .explanation-header h2 {
      margin: 0;
      color: #0b3b1f;
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.8rem;
    }
    .explanation-close {
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: #999;
    }
    .explanation-close:hover {
      color: #0b3b1f;
    }
    .explanation-body {
      color: #333;
      line-height: 1.8;
      font-family: Georgia, serif;
    }
    .explanation-section {
      margin-bottom: 1.5rem;
    }
    .explanation-section h3 {
      color: #0b3b1f;
      font-weight: 600;
      margin-bottom: 0.75rem;
      font-size: 1.2rem;
    }
    .explanation-section h4 {
      color: #555;
      font-weight: 600;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
    .explanation-section p {
      margin-bottom: 0.75rem;
    }
    .explanation-section ul {
      margin-left: 2rem;
      margin-top: 0.5rem;
    }
    .explanation-section li {
      margin-bottom: 0.5rem;
    }
  `;
  document.head.appendChild(style);
}

// Initialize styles when loaded
if (typeof window !== 'undefined') {
  window.MythlyExplanations = MythlyExplanations;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectExplanationStyles);
  } else {
    injectExplanationStyles();
  }
}
