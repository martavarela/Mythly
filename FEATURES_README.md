# Mythly Feature Integration Guide

## Overview
This guide explains the four new features added to Mythly and how to integrate them with existing games.

## Features Implemented

### 1. **Cross-Game Progression System** (`mythly-progression.js`)
Tracks player achievements and character reputation across all games.

#### Setup:
```html
<script src="mythly-progression.js"></script>
```

#### API Usage:
```javascript
// Record a Top Trumps game result
MythlyProgression.recordTopTrumpsGame('player', 15); // winner, rounds

// Record a tournament
MythlyProgression.recordTournament('Zeus', ['Zeus', 'Athena', 'Poseidon'], 8);

// Record a comparison
MythlyProgression.recordComparison('Athena', 'Ares', 'Athena');

// Record personality quiz result
MythlyProgression.recordPersonalityResult('Zeus');

// Get player stats
const stats = MythlyProgression.getStats();

// Get character reputation
const reputation = MythlyProgression.getReputation('Athena');
const topChars = MythlyProgression.getTopCharacters(5);
```

#### Auto-Tracking Recommendations:
- **myth-top-trumps.html**: Call `recordTopTrumpsGame()` on game end
- **who-would-win.html**: Call `recordTournament()` when tournament completes
- **mythly-tools.html**: Call `recordComparison()` when users view matchup
- **quizzes.html**: Call `recordPersonalityResult()` in personality quiz completion

---

### 2. **Character Database & Relationships** (`mythly-database.js`)
Structured data for character relationships, alliances, and creature information.

#### Setup:
```html
<script src="mythly-database.js"></script>
```

#### API Usage:
```javascript
// Get character relationships
const zeusRel = MythlyDatabase.getRelationships('Zeus');
// Returns: {role, realm, parents, children, spouse, siblings, famous_feud, allies}

// Get connections
const connectedTo = MythlyDatabase.getConnections('Athena');
// Returns: {allies: [], enemies: [], family: {parents, children, siblings, spouse}}

// Get creature info
const minotaur = MythlyDatabase.getCreature('Minotaur');
// Returns: {name, type, realm, strength, intelligence, magic, origin, description}

// Get all creatures
const allCreatures = MythlyDatabase.getAllCreatures();

// Filter creatures by type
const monsters = MythlyDatabase.getCreaturesByType('Monster');
```

---

### 3. **Interactive Family Tree** (`family-tree.html`)
Visual exploration of character genealogy and relationships.

**Features:**
- Character selector dropdown
- Relationship details panel showing family, allies, and enemies
- Canvas-based network visualization
- Interactive node clicking to explore connections

**Usage:** Standalone page - users access via link in fun.html

---

### 4. **Creature Compendium** (`creatures.html`)
Database and visualization of legendary creatures and monsters.

**Features:**
- Filterable grid of 10+ creatures
- Detailed stat cards (Strength, Intelligence, Magic)
- Modal view with full creature information
- Type-based filtering (Monster, Dragon, Divine, etc.)

**Usage:** Standalone page - users access via link in fun.html

---

### 5. **Explanation System** (`mythly-explanations.js`)
Detailed narrative and statistical explanations for game results.

#### Setup:
```html
<script src="mythly-explanations.js"></script>
```

#### API Usage:
```javascript
// Show matchup explanation
const exp = MythlyExplanations.showMatchupExplanation('Zeus', 'Ares', 'Zeus');
// Returns: {theme, narrative}

// Get stat explanation
const strengthExp = MythlyExplanations.showStatExplanation('Strength');
// Returns: {description, mythological_examples}

// Get combat scenario explanation
const fightExp = MythlyExplanations.getCombatExplanation('fight');
// Returns: {title, description, factors}

// Generate detailed explanation HTML
const html = MythlyExplanations.generateDetailedExplanation('Athena', 'Ares', 'Athena', 'wits');
```

#### Implementation: Add "Why?" buttons to game results
```html
<button onclick="showExplanation()">Why did Zeus win?</button>

<script>
function showExplanation() {
    const html = MythlyExplanations.generateDetailedExplanation('Athena', 'Ares', 'Athena', 'wits');
    const modal = MythlyExplanations.createExplanationModal('Matchup Explanation', html);
    document.body.appendChild(modal);
    modal.querySelector('.explanation-close').onclick = () => modal.remove();
}
</script>
```

---

## Integration Checklist

### For `myth-top-trumps.html`:
- [ ] Add `<script src="mythly-progression.js"></script>` before closing `</body>`
- [ ] Call `MythlyProgression.recordTopTrumpsGame(winner, rounds)` on game end
- [ ] Add explanations to card comparison modal
- [ ] Display creature variants (optional expansion)

### For `who-would-win.html`:
- [ ] Add `<script src="mythly-progression.js"></script>` before closing `</body>`
- [ ] Call `MythlyProgression.recordTournament(champion, contestants, rounds)` on completion
- [ ] Add `<script src="mythly-explanations.js"></script>` for result details
- [ ] Add "Why?" buttons to matchup results

### For `mythly-tools.html`:
- [ ] Add `<script src="mythly-progression.js"></script>` before closing `</body>`
- [ ] Call `MythlyProgression.recordComparison(char1, char2, winner)` after comparison
- [ ] Add `<script src="mythly-explanations.js"></script>` for detailed explanations
- [ ] Show explanation panel when users request details

### For `quizzes.html` or personality quiz:
- [ ] Add `<script src="mythly-progression.js"></script>` before closing `</body>`
- [ ] Call `MythlyProgression.recordPersonalityResult(characterName)` on quiz completion

### Global Updates:
- [ ] Add links to family-tree.html in navigation (Done in fun.html)
- [ ] Add links to creatures.html in navigation (Done in fun.html)
- [ ] Add progression display to fun.html (Done)
- [ ] Test all progression tracking with browser console

---

## File Sizes
```
mythly-progression.js    ~3 KB
mythly-database.js       ~8 KB
mythly-explanations.js   ~6 KB
family-tree.html        ~15 KB
creatures.html          ~18 KB
```

---

## Browser Compatibility
All features use:
- Vanilla JavaScript (ES6+)
- Canvas API (for visualizations)
- localStorage (for persistence)
- No external dependencies

**Minimum Requirements:**
- Chrome/Edge 60+
- Firefox 55+
- Safari 11+
- Mobile browsers (iOS Safari 11+, Chrome Android)

---

## Testing Recommendations

### Progression System:
1. Open DevTools Console
2. Test: `MythlyProgression.getStats()` - should return empty object
3. Simulate game: `MythlyProgression.recordTopTrumpsGame('player', 10)`
4. Verify: Check localStorage key 'mythly-progression'
5. Reset: `MythlyProgression.clearAll()`

### Database:
1. Test: `MythlyDatabase.getRelationships('Zeus')`
2. Test: `MythlyDatabase.getAllCreatures()` - should return 10 creatures
3. Verify all creature stats are in range 0-10

### Explanations:
1. Test: `MythlyExplanations.showMatchupExplanation('Zeus', 'Ares', 'Zeus')`
2. Test: `MythlyExplanations.generateDetailedExplanation(...)`
3. Verify modal CSS styles are injected

---

## Future Enhancements

1. **Creature vs Character matches** - Extend Top Trumps to include creatures
2. **Leaderboard system** - Track top players globally via shared database
3. **Achievement badges** - Award for milestones (10 wins, etc.)
4. **Multiplayer progression** - Share stats via username
5. **Expanded creature database** - Add 20+ more creatures
6. **Story mode** - Campaign of progressive matches with narrative

---

## Troubleshooting

**Progression data not saving?**
- Check browser allows localStorage (not in private mode)
- Verify script is loaded: `window.MythlyProgression` in console
- Clear storage and refresh: `localStorage.clear()`

**Creatures not displaying?**
- Verify `mythly-database.js` is loaded
- Check browser console for errors
- Reload page and try again

**Explanations not showing?**
- Ensure `mythly-explanations.js` is loaded
- CSS must be injected via `injectExplanationStyles()`
- Test: `document.getElementById('mythly-explanation-styles')` should exist
