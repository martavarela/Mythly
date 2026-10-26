// Mythly Cross-Game Progression System
// Persists player achievements, character reputation, and game history

const MythlyProgression = {
  // Get all data from localStorage
  getAll: function() {
    try {
      const data = JSON.parse(localStorage.getItem('mythly-progression') || '{}');
      return {
        playerProfile: data.playerProfile || this.defaultProfile(),
        characterReputation: data.characterReputation || {},
        achievements: data.achievements || {},
        gameHistory: data.gameHistory || [],
        timestamp: data.timestamp || Date.now()
      };
    } catch (e) {
      return {
        playerProfile: this.defaultProfile(),
        characterReputation: {},
        achievements: {},
        gameHistory: [],
        timestamp: Date.now()
      };
    }
  },

  // Save all data to localStorage
  save: function(data) {
    try {
      data.timestamp = Date.now();
      localStorage.setItem('mythly-progression', JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Failed to save progression:', e);
      return false;
    }
  },

  // Default player profile
  defaultProfile: function() {
    return {
      gamesPlayed: 0,
      topTrumpWins: 0,
      tournamentVictories: 0,
      comparisonsCompleted: 0,
      olympianMatch: null,
      createdAt: Date.now()
    };
  },

  // Record a Top Trumps game result
  recordTopTrumpsGame: function(winner, totalRounds) {
    const data = this.getAll();
    data.playerProfile.gamesPlayed++;
    if (winner === 'player') {
      data.playerProfile.topTrumpWins++;
      this.addReputation(winner, 5); // 5 points for winning
    }
    data.gameHistory.push({
      type: 'toptrumps',
      winner: winner,
      rounds: totalRounds,
      date: Date.now()
    });
    this.save(data);
  },

  // Record a tournament result
  recordTournament: function(champion, contestants, roundsPlayed) {
    const data = this.getAll();
    if (champion) {
      data.playerProfile.tournamentVictories++;
      this.addReputation(champion, 10); // 10 points for tournament win
    }
    data.gameHistory.push({
      type: 'tournament',
      champion: champion,
      contestants: contestants,
      rounds: roundsPlayed,
      date: Date.now()
    });
    this.save(data);
  },

  // Record a character comparison
  recordComparison: function(character1, character2, winner) {
    const data = this.getAll();
    data.playerProfile.comparisonsCompleted++;
    if (winner) {
      this.addReputation(winner, 2); // 2 points for winning comparison
    }
    data.gameHistory.push({
      type: 'comparison',
      chars: [character1, character2],
      winner: winner,
      date: Date.now()
    });
    this.save(data);
  },

  // Add reputation points to a character
  addReputation: function(character, points) {
    const data = this.getAll();
    if (!data.characterReputation[character]) {
      data.characterReputation[character] = 0;
    }
    data.characterReputation[character] += points;
    this.save(data);
  },

  // Get character reputation
  getReputation: function(character) {
    const data = this.getAll();
    return data.characterReputation[character] || 0;
  },

  // Get top 5 characters by reputation
  getTopCharacters: function(limit = 5) {
    const data = this.getAll();
    return Object.entries(data.characterReputation)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([char, rep]) => ({ character: char, reputation: rep }));
  },

  // Record personality quiz result
  recordPersonalityResult: function(characterName) {
    const data = this.getAll();
    data.playerProfile.olympianMatch = characterName;
    this.addReputation(characterName, 3);
    data.gameHistory.push({
      type: 'personality',
      result: characterName,
      date: Date.now()
    });
    this.save(data);
  },

  // Get player stats summary
  getStats: function() {
    const data = this.getAll();
    const topChars = this.getTopCharacters(3);
    return {
      totalGames: data.playerProfile.gamesPlayed,
      topTrumpWins: data.playerProfile.topTrumpWins,
      tournaments: data.playerProfile.tournamentVictories,
      comparisons: data.playerProfile.comparisonsCompleted,
      olympianMatch: data.playerProfile.olympianMatch,
      topCharacters: topChars
    };
  },

  // Clear all progression data
  clearAll: function() {
    localStorage.removeItem('mythly-progression');
  }
};

// Make it available globally
if (typeof window !== 'undefined') {
  window.MythlyProgression = MythlyProgression;
}
