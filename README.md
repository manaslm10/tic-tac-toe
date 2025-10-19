# O X Game - Tic-Tac-Toe

An interactive web-based Tic-Tac-Toe game built with HTML, CSS, and JavaScript for two players to play in real-time on the same device.

## 🎯 Objective

To develop an engaging and interactive web-based O X (Tic-Tac-Toe) game that allows two players to compete against each other with automatic win detection, score tracking, and a beautiful user interface.

## 📝 Description

The O X Game is a classic Tic-Tac-Toe implementation featuring a modern, responsive design. Two players take turns marking cells on a 3×3 grid with "X" and "O". The game automatically detects winners, draws, and maintains score history using Local Storage. Built entirely with front-end technologies, it demonstrates clean code architecture and engaging user experience design.

## ✨ Features

### Core Gameplay
- ⭕❌ **Two-Player Mode**: Classic X vs O gameplay
- 🎯 **Automatic Win Detection**: Instantly identifies winning combinations
- 🤝 **Draw Detection**: Recognizes when the game ends in a tie
- 🔄 **Restart Game**: Quick reset to play again
- ⌨️ **Keyboard Support**: Press 'R' to restart

### Visual Features
- 🎨 **Modern UI Design**: Beautiful gradient theme
- ✨ **Smooth Animations**: Cell pop-in and winning cell highlights
- 🏆 **Winner Modal**: Celebratory popup for game results
- 📊 **Live Player Indicators**: Active player highlighting
- 🎭 **Interactive Effects**: Hover animations and transitions

### Score Tracking
- 📈 **Score Persistence**: Scores saved in Local Storage
- 🏅 **Player Scores**: Individual win counts for X and O
- 📊 **Statistics Dashboard**: Total games and draw count
- 🔢 **Reset Scores**: Option to clear all statistics

### User Experience
- 📱 **Fully Responsive**: Works on desktop, tablet, and mobile
- 🎮 **Intuitive Controls**: Easy-to-use interface
- 🔔 **Visual Feedback**: Notifications and status updates
- 🎯 **Turn Indicators**: Clear display of whose turn it is

## 🛠️ Tools & Technologies Used

- **HTML5**: Semantic structure and game board layout
- **CSS3**: Modern styling with animations and gradients
- **JavaScript (ES6+)**: Game logic with OOP principles
- **Local Storage API**: Score persistence across sessions
- **CSS Grid**: Responsive 3×3 game board
- **CSS Animations**: Smooth transitions and effects

## 🚀 How to Play

### Starting the Game
1. Open `index.html` in any modern web browser
2. Player X always goes first
3. Click any empty cell to make your move

### Game Rules
1. Players alternate turns (X and O)
2. Mark any empty cell on the 3×3 grid
3. First player to get 3 in a row wins:
   - Horizontal (top, middle, or bottom row)
   - Vertical (left, middle, or right column)
   - Diagonal (corner to corner)
4. If all cells are filled with no winner, it's a draw

### Controls
- **Click Cell**: Make your move
- **Restart Game**: Start a new round
- **Reset Score**: Clear all statistics
- **Play Again**: Quick restart after game ends
- **Press 'R'**: Keyboard shortcut to restart

## 🎮 Game Features Explained

### Win Detection
The game checks for wins after each move:
```
Winning Combinations:
[0,1,2] [3,4,5] [6,7,8]  ← Rows
[0,3,6] [1,4,7] [2,5,8]  ← Columns
[0,4,8] [2,4,6]          ← Diagonals
```

### Score System
- **Player X Score**: Total wins for Player X
- **Player O Score**: Total wins for Player O
- **Total Games**: All completed games
- **Draws**: Games ending in a tie

### Visual Indicators
- **Active Player**: Highlighted card with border
- **Current Turn**: Display at top showing whose turn
- **Winning Cells**: Gold highlight on winning combination
- **Cell States**: Different colors for X (red) and O (green)

## 📁 Project Structure

```
tic-tac-toe-game/
│
├── index.html          # Game structure and layout
├── styles.css          # Complete styling and animations
├── script.js           # Game logic and interactivity
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Player X**: Red (#dc3545)
- **Player O**: Green (#28a745)
- **Winning**: Gold gradient (#ffd700 to #ffed4e)

### Animations
- **Pop-in Effect**: Cells animate when marked
- **Winning Cells**: Pulsing gold animation
- **Modal Entrance**: Slide-up with bounce
- **Hover Effects**: Scale and shadow on cells
- **Turn Indicator**: Subtle pulse animation

### Responsive Breakpoints
- **Desktop**: 769px and above
- **Tablet**: 481px - 768px
- **Mobile**: 320px - 480px

## 💾 Data Persistence

### Local Storage
All game statistics are automatically saved:
```javascript
{
  scores: { X: 0, O: 0 },
  totalGames: 0,
  draws: 0
}
```

### Features
- ✅ Automatic save after each game
- ✅ Persists across browser sessions
- ✅ No server required
- ✅ Privacy-focused (local only)

## 🧪 Testing Checklist

- ✅ X wins (all combinations)
- ✅ O wins (all combinations)
- ✅ Draw detection
- ✅ Score tracking
- ✅ Score persistence
- ✅ Restart functionality
- ✅ Reset scores
- ✅ Modal display
- ✅ Responsive design
- ✅ Hover effects
- ✅ Keyboard shortcuts
- ✅ Cell click prevention after game ends

## 🎓 Learning Outcomes

This project demonstrates:
- **Game Logic**: Implementing win conditions and state management
- **DOM Manipulation**: Dynamic content updates
- **Event Handling**: User interactions and click events
- **CSS Animations**: Creating engaging visual effects
- **Local Storage**: Client-side data persistence
- **Responsive Design**: Mobile-first approach
- **OOP JavaScript**: Class-based architecture
- **User Experience**: Intuitive interface design

## 🔮 Future Enhancements

Potential features for future versions:
- 🤖 **AI Opponent**: Single-player mode with computer
- 🎨 **Theme Customization**: Multiple color schemes
- 🔊 **Sound Effects**: Audio feedback for moves
- 📊 **Advanced Statistics**: Win rate, streaks, history
- 👥 **Player Names**: Custom player identification
- ⏱️ **Timer Mode**: Timed turns for competitive play
- 🏆 **Tournament Mode**: Best of 3/5/7 matches
- 💾 **Game History**: Review past games
- 🌐 **Online Multiplayer**: Play with remote opponents
- 📱 **PWA**: Installable progressive web app

## 🐛 Troubleshooting

### Scores Not Saving?
- Ensure Local Storage is enabled
- Not in private/incognito mode
- Browser supports Local Storage

### Game Not Responding?
- Check browser console for errors
- Refresh the page
- Clear browser cache

### Visual Issues?
- Update to latest browser version
- Check screen size compatibility
- Disable browser extensions

## 💡 Tips & Strategies

### Winning Strategies
1. **Center Control**: First player should take center
2. **Corner Strategy**: Corners are powerful positions
3. **Block Opponent**: Always block opponent's winning move
4. **Fork Creation**: Create two winning opportunities
5. **Think Ahead**: Plan 2-3 moves in advance

### Best Practices
- Take your time to think
- Watch for opponent's patterns
- Control the center when possible
- Create multiple threats
- Block before attacking

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

*Requires modern browser with ES6+ support*

## 🎯 Game Statistics

Track your performance:
- **Win Rate**: Monitor your success
- **Total Games**: See how many you've played
- **Draw Rate**: Check competitive balance
- **Longest Streak**: (Future feature)

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Developed as a demonstration of front-end web development skills, showcasing HTML, CSS, JavaScript, game logic implementation, and interactive design.

## 🙏 Acknowledgments

Inspired by the classic Tic-Tac-Toe game, reimagined with modern web technologies and design principles.

---

**Enjoy playing! May the best player win! ⭕❌🎮**

Press 'R' to restart | Click cells to play | Have fun!
