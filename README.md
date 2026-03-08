# Say Find - Interactive Party Game 🎮

A fun, fully interactive team-based quiz game combining knowledge, wit, and competition! Play it directly in your browser as a static GitHub Page.

## Features

✨ **Team Management**
- Create unlimited teams with custom names and colors
- Edit or remove teams at any time

🎯 **Flexible Game Setup**
- Choose the number of rounds (1-10)
- Set custom time limits per round (10-300 seconds)
- Gameplay adjusts to your preferences

🏆 **Interactive Gameplay**
- 12+ categories with 10 answers each
- Real-time countdown timer
- Score tracking for all teams
- Undo functionality for accidental selections
- Dynamic scoreboard showing team standings

📱 **Share Your Victory**
- Share results on Facebook
- Tweet your achievements on Twitter
- Copy and share the game link

## How to Play

### Setup Phase
1. Click "Start New Game"
2. Add at least 2 teams with names and colors
3. Choose the number of rounds and time per round
4. Click "Start Game"

### Game Phase
1. Each team takes turns trying to find all 10 answers in the category
2. Tap buttons to mark correct answers as found
3. When time runs out or all answers are found, tap "Next Team"
4. The next team gets their turn with the same category
5. Continue for all teams and all rounds

### Results Phase
1. Game shows the winning team with final scores
2. All teams ranked by points
3. Share your victory with friends!

## Scoring

- 1 point per correct answer found
- Teams earn points only for answers they find
- Higher score after all rounds = Winner! 🏆

## How to Deploy to GitHub Pages

### Option 1: GitHub Desktop
1. Clone the repository: `git clone https://github.com/yourusername/say-find.git`
2. Make sure all files are in the root directory:
   - `index.html`
   - `style.css`
   - `game.js`
3. Push to the `main` branch
4. Go to GitHub repository Settings → Pages
5. Set "Source" to "Deploy from a branch" and select "main" branch
6. Your game will be live at: `https://yourusername.github.io/say-find/`

### Option 2: Command Line
```bash
# Navigate to your project
cd say-find

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Say Find game"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/say-find.git

# Push to main branch
git branch -M main
git push -u origin main
```

After pushing, enable GitHub Pages from your repository settings.

## File Structure

```
say-find/
├── index.html      # Main game interface
├── style.css       # All styling and animations
├── game.js         # Game logic and interactivity
└── README.md       # This file
```

## Customization

### Add More Categories
Edit `game.js` and add to the `CATEGORIES` array:

```javascript
{
    name: "Your Category Name",
    answers: ["Answer 1", "Answer 2", ..., "Answer 10"]
}
```

### Change Colors
Modify the color scheme in `style.css`:
- `--primary`: Main app color
- `--secondary`: Success color
- `--danger`: Warning color

### Adjust Default Settings
In `game.js` `gameState` object:
- Change default rounds
- Change default time per round

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Zero dependencies - pure HTML, CSS, and JavaScript
- Instant loading - perfect for parties
- Works offline (after first load)
- No installation required

## Credits

Inspired by the classic Greek party game "Πες Βρες" (Say Find)

## License

Open source - feel free to use, modify, and distribute!

---

**Ready to play?** Visit the live game: [Play Say Find](https://yourusername.github.io/say-find/)
