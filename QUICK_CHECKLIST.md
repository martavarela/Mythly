# Mythly - Immediate Action Checklist

**Use this checklist to track quick wins and immediate improvements**

---

## 🔴 CRITICAL (Must Fix)

- [ ] **Character Comparison Tool** (`mythly-tools.html`)
  - [ ] Restore file from backup if corrupted
  - [ ] Add `characterStrategies` object with 18 characters
  - [ ] Create `generateStrategicComparison(one, two, scenario)` function
  - [ ] Update `renderComparison()` to display narrative instead of "X has the edge"
  - **Priority**: HIGH | **Time**: 1-2 hours | **Impact**: Feature completeness

---

## 🟠 HIGH PRIORITY (This Week)

### Navigation & Discovery
- [ ] Add "Games" dropdown/menu to main nav in `who-would-win.html`
  - [ ] Link to `oracle-duel.html`
  - [ ] Link to `tome-puzzler.html`
  - [ ] Link to `divine-photo-booth.html`
  - [ ] Link to `myth-postcards.html`
  - **Time**: 0.5 hours | **Impact**: Users discover 4 new game modes

### Oracle Duel Enhancement
- [ ] Expand word list from 12 to 25+ words
  - [ ] Add gods (ZEUS, HERA, ATHENA, etc.)
  - [ ] Add heroes (ACHILLES, ODYSSEUS, HERACLES, etc.)
  - [ ] Add places (OLYMPUS, TARTARUS, ELYSIUM, etc.)
  - **Time**: 0.5 hours | **Impact**: Replayability
  
- [ ] Add difficulty levels (Easy/Normal/Hard)
  - [ ] Easy: 15s timer
  - [ ] Normal: 10s timer (current)
  - [ ] Hard: 5s timer
  - [ ] Save preference to localStorage
  - **Time**: 1 hour | **Impact**: Broader audience

- [ ] Implement score persistence
  - [ ] Save best times to localStorage
  - [ ] Display personal best for each difficulty
  - **Time**: 0.5 hours | **Impact**: Encourages replays

### Myth Postcards Enhancement
- [ ] Expand from 4 character themes to all 18
  - [ ] Use existing character color scheme data
  - [ ] Add unique quote/caption per character
  - [ ] Example: Zeus: "From Mount Olympus", Poseidon: "From the Seas", etc.
  - **Time**: 1 hour | **Impact**: Makes feature feel complete

### Tournament History
- [ ] Implement localStorage persistence
  - [ ] Save tournament name, date, contestants, winner, duration
  - [ ] Store as array: `localStorage.setItem('mythly-tournaments', JSON.stringify([...]))`
  - [ ] Display "Past Tournaments" list on main page
  - [ ] Add "Replay" button to past tournament entries
  - **Time**: 2-3 hours | **Impact**: Increases retention

---

## 🟡 MEDIUM PRIORITY (Next 2 Weeks)

### Content Expansion
- [ ] Expand Tome Puzzler word list
  - [ ] Create multiple "rituals" (currently just 1)
  - [ ] Difficulty tiers: Novice/Apprentice/Master
  - [ ] Time tracking per ritual
  - **Time**: 3-4 hours | **Impact**: Replayability

- [ ] Expand Photo Booth sticker set
  - [ ] Add 18+ character-themed stickers
  - [ ] Zeus: Thunderbolt | Poseidon: Trident | Artemis: Arrow, etc.
  - [ ] Add 3-5 themed frames (Olympus, Tartarus, Underworld)
  - [ ] Implement drag-to-move functionality
  - **Time**: 3-4 hours | **Impact**: Social sharing appeal

### UI/UX Improvements
- [ ] Mobile responsiveness
  - [ ] Test all pages on mobile (landscape + portrait)
  - [ ] Adjust tournament bracket for small screens
  - [ ] Make buttons/inputs touch-friendly
  - **Time**: 3-4 hours | **Impact**: 60%+ of users on mobile

- [ ] Dark Mode support
  - [ ] Define dark color scheme
  - [ ] Add toggle in settings
  - [ ] Save preference to localStorage
  - **Time**: 2-3 hours | **Impact**: User preference

---

## 🟢 NICE-TO-HAVE (Weeks 3+)

- [ ] Social media integration
  - [ ] Add Share button to Postcards
  - [ ] Add Share button to Tournament results
  - [ ] Generate shareable links for tournaments
  
- [ ] Leaderboard system
  - [ ] Track Oracle Duel best times
  - [ ] Track Tome Puzzler fastest solves
  - [ ] Display top 10 globally (or per device)

- [ ] Seasonal tournaments
  - [ ] "Gods vs Heroes" tournament template
  - [ ] "Underdogs Rising" (lower-rated characters)
  - [ ] Monthly rotating themes

- [ ] Character depth pages
  - [ ] "About [Character]" modal/page
  - [ ] Mythology backstory
  - [ ] Related matchups/history
  - [ ] Character relationships (allies, rivals)

- [ ] Sound & Music
  - [ ] Background music option
  - [ ] Match notification sounds
  - [ ] Volume control

---

## 📊 Time Estimates Summary

| Category | Hours | Status |
|----------|-------|--------|
| CRITICAL | 1-2 | ⚠️ BLOCKING |
| Navigation/Discovery | 0.5 | 🔲 Ready |
| Oracle Duel | 2 | 🔲 Ready |
| Postcards | 1 | 🔲 Ready |
| Tournament History | 2-3 | 🔲 Ready |
| **WEEK 1 TOTAL** | **6.5-8.5** | 🎯 TARGET |
| Tome Puzzler | 3-4 | 🔲 Ready |
| Photo Booth | 3-4 | 🔲 Ready |
| Mobile + Dark Mode | 5-7 | 🔲 Ready |
| **WEEKS 2-3 TOTAL** | **11-15** | 🎯 TARGET |

---

## ✅ Testing Checklist

After each improvement, verify:

### Tournament Mode
- [ ] Champion displays correctly (only when tournament ends)
- [ ] Explanations appear under match results
- [ ] No stats visible in explanations
- [ ] All 18 characters display properly

### Character Comparison
- [ ] Strategic explanation shows (not stats)
- [ ] All 18 characters work
- [ ] All contest types show appropriate explanations

### Mini-Games
- [ ] Oracle Duel loads and runs
- [ ] Tome Puzzler completes all 3 puzzles
- [ ] Photo Booth can upload and add stickers
- [ ] Postcards renders and downloads

### Navigation
- [ ] All 4 games link from main nav
- [ ] Links are working (no 404s)
- [ ] Return-to-home link works from each game

### Mobile
- [ ] All pages readable on mobile
- [ ] Buttons are easy to tap
- [ ] Tournament text doesn't overflow

---

## File Locations

**Documentation**
- `/MYTHLY_WEBSITE_ROADMAP.md` - Full 5-tier strategic roadmap
- `/INACTIVE_FEATURES_AUDIT.md` - Detailed feature-by-feature audit
- `/IMPROVEMENTS.md` - Original 30+ ideas
- `/SESSION_SUMMARY.md` - Session overview & strategy

**Code Files**
- `/who-would-win.html` - Main tournament engine
- `/mythly-tools.html` - Character comparison tool ⚠️
- `/oracle-duel.html` - Anagram game
- `/tome-puzzler.html` - Logic puzzle game
- `/divine-photo-booth.html` - Image sticker tool
- `/myth-postcards.html` - Greeting card generator

---

## Command Quick-Reference

**Restore mythly-tools.html from backup:**
```bash
cp /Users/martavarela/Dropbox/Daniel/Mythly2/mythly-tools.html.backup \
   /Users/martavarela/Dropbox/Daniel/Mythly2/mythly-tools.html
```

**Check file integrity:**
```bash
wc -l mythly-tools.html
grep -c "function" mythly-tools.html
```

**View Oracle Duel word list:**
```bash
grep -A 1 "wordList =" oracle-duel.html
```

---

## Success Definition

🎉 **You'll know you're done when:**

1. All 4 mini-games are accessible from main nav
2. Character Comparison shows narrative explanations
3. Postcards work with all 18 characters
4. Oracle Duel has 20+ words + difficulty levels
5. Tournament results persist across browser sessions
6. Mobile site is usable
7. All pages render correctly with no console errors

**Estimated Total Time**: 8-12 hours of development  
**Expected Outcome**: Mythly feels 50%+ more complete and polished

---

**Last Updated**: August 22, 2026  
**Next Review**: After completing Week 1 items
