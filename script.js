// Tic-Tac-Toe Game Logic

class TicTacToe {
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = { X: 0, O: 0 };
        this.totalGames = 0;
        this.draws = 0;
        
        // Winning combinations
        this.winningConditions = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal top-left to bottom-right
            [2, 4, 6]  // Diagonal top-right to bottom-left
        ];

        this.init();
    }

    init() {
        this.loadScores();
        this.setupEventListeners();
        this.updateDisplay();
    }

    // Local Storage Methods
    saveScores() {
        const data = {
            scores: this.scores,
            totalGames: this.totalGames,
            draws: this.draws
        };
        localStorage.setItem('ticTacToeScores', JSON.stringify(data));
    }

    loadScores() {
        const stored = localStorage.getItem('ticTacToeScores');
        if (stored) {
            const data = JSON.parse(stored);
            this.scores = data.scores || { X: 0, O: 0 };
            this.totalGames = data.totalGames || 0;
            this.draws = data.draws || 0;
        }
    }

    // Event Listeners
    setupEventListeners() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('click', () => this.handleCellClick(cell));
        });

        document.getElementById('restartBtn').addEventListener('click', () => this.restartGame());
        document.getElementById('resetScoreBtn').addEventListener('click', () => this.resetScores());
        document.getElementById('playAgainBtn').addEventListener('click', () => this.playAgain());
        document.getElementById('closeModalBtn').addEventListener('click', () => this.closeModal());

        // Close modal on outside click
        document.getElementById('winnerModal').addEventListener('click', (e) => {
            if (e.target.id === 'winnerModal') {
                this.closeModal();
            }
        });
    }

    // Game Logic
    handleCellClick(cell) {
        const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

        // Check if cell is already taken or game is not active
        if (this.board[cellIndex] !== '' || !this.gameActive) {
            return;
        }

        // Update board and UI
        this.board[cellIndex] = this.currentPlayer;
        this.updateCell(cell, this.currentPlayer);

        // Check for win or draw
        if (this.checkWin()) {
            this.handleWin();
        } else if (this.checkDraw()) {
            this.handleDraw();
        } else {
            this.switchPlayer();
        }
    }

    updateCell(cell, player) {
        cell.textContent = player === 'X' ? '❌' : '⭕';
        cell.classList.add('taken', player.toLowerCase());
    }

    checkWin() {
        return this.winningConditions.some(condition => {
            const [a, b, c] = condition;
            if (this.board[a] && 
                this.board[a] === this.board[b] && 
                this.board[a] === this.board[c]) {
                this.winningCombination = condition;
                return true;
            }
            return false;
        });
    }

    checkDraw() {
        return this.board.every(cell => cell !== '');
    }

    handleWin() {
        this.gameActive = false;
        this.highlightWinningCells();
        this.scores[this.currentPlayer]++;
        this.totalGames++;
        this.saveScores();
        this.updateDisplay();
        
        // Show winner modal after animation
        setTimeout(() => {
            this.showWinnerModal(this.currentPlayer);
        }, 800);
    }

    handleDraw() {
        this.gameActive = false;
        this.draws++;
        this.totalGames++;
        this.saveScores();
        this.updateDisplay();
        
        // Show draw modal
        setTimeout(() => {
            this.showDrawModal();
        }, 500);
    }

    highlightWinningCells() {
        this.winningCombination.forEach(index => {
            const cell = document.querySelector(`[data-cell-index="${index}"]`);
            cell.classList.add('winning');
        });
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateDisplay();
    }

    restartGame() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.winningCombination = null;

        // Clear all cells
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('taken', 'x', 'o', 'winning');
        });

        this.updateDisplay();
    }

    resetScores() {
        if (confirm('Are you sure you want to reset all scores?')) {
            this.scores = { X: 0, O: 0 };
            this.totalGames = 0;
            this.draws = 0;
            this.saveScores();
            this.updateDisplay();
            this.showNotification('Scores reset successfully!', 'success');
        }
    }

    playAgain() {
        this.closeModal();
        this.restartGame();
    }

    // Display Updates
    updateDisplay() {
        // Update player cards
        const playerXCard = document.getElementById('playerXCard');
        const playerOCard = document.getElementById('playerOCard');
        
        if (this.currentPlayer === 'X') {
            playerXCard.classList.add('active');
            playerOCard.classList.remove('active');
        } else {
            playerOCard.classList.add('active');
            playerXCard.classList.remove('active');
        }

        // Update current turn display
        const turnIcon = document.querySelector('.turn-icon');
        const turnText = document.querySelector('.turn-text');
        
        if (this.gameActive) {
            turnIcon.textContent = this.currentPlayer === 'X' ? '❌' : '⭕';
            turnText.textContent = `Player ${this.currentPlayer}'s Turn`;
        } else {
            turnText.textContent = 'Game Over';
        }

        // Update scores
        document.getElementById('scoreX').textContent = this.scores.X;
        document.getElementById('scoreO').textContent = this.scores.O;
        document.getElementById('totalGames').textContent = this.totalGames;
        document.getElementById('drawCount').textContent = this.draws;
    }

    // Modal Methods
    showWinnerModal(winner) {
        const modal = document.getElementById('winnerModal');
        const modalIcon = document.getElementById('modalIcon');
        const modalTitle = document.getElementById('modalTitle');
        const modalMessage = document.getElementById('modalMessage');

        modalIcon.textContent = '🎉';
        modalTitle.textContent = `Player ${winner} Wins!`;
        modalMessage.textContent = winner === 'X' 
            ? 'Congratulations! X takes the victory!' 
            : 'Congratulations! O takes the victory!';

        modal.classList.add('active');
        this.playSound('win');
    }

    showDrawModal() {
        const modal = document.getElementById('winnerModal');
        const modalIcon = document.getElementById('modalIcon');
        const modalTitle = document.getElementById('modalTitle');
        const modalMessage = document.getElementById('modalMessage');

        modalIcon.textContent = '🤝';
        modalTitle.textContent = "It's a Draw!";
        modalMessage.textContent = 'Well played by both players!';

        modal.classList.add('active');
        this.playSound('draw');
    }

    closeModal() {
        const modal = document.getElementById('winnerModal');
        modal.classList.remove('active');
    }

    // Sound Effects (Visual feedback)
    playSound(type) {
        // Create visual feedback instead of audio
        const body = document.body;
        if (type === 'win') {
            body.style.animation = 'none';
            setTimeout(() => {
                body.style.animation = 'celebrate 0.5s ease';
            }, 10);
        }
    }

    // Notification System
    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
            color: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            font-weight: 600;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    @keyframes celebrate {
        0%, 100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }
`;
document.head.appendChild(style);

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe();
    
    // Make game accessible globally for debugging
    window.ticTacToe = game;
    
    // Add keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'r' || e.key === 'R') {
            game.restartGame();
        }
    });
});

// Add welcome message
window.addEventListener('load', () => {
    console.log('%c🎮 Tic-Tac-Toe Game Loaded! 🎮', 'font-size: 20px; color: #667eea; font-weight: bold;');
    console.log('%cPress R to restart the game', 'font-size: 14px; color: #666;');
});
