// Categories are now loaded from categories-structure.js
// Using main categories for selection, sub-categories are handled internally
let CATEGORIES = [];
let MAIN_CATEGORIES = [];
let CATEGORY_QUESTIONS = {}; // Maps main category names to their question sets

// Initialize categories on load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize category structure
    MAIN_CATEGORIES = getMainCategories();
    CATEGORY_QUESTIONS = getCategoryQuestionSets();
    setupEventListeners();
    updatePageLanguage();
    document.getElementById('languageSelect').value = currentLanguage;
    showScreen('mainScreen');
});


// Game State
let gameState = {
    teams: [],
    currentTeamIndex: 0,
    rounds: 0,
    currentRound: 1,
    timePerRound: 60,
    timerInterval: null,
    timeRemaining: 0,
    gameActive: false,
    scores: {},
    roundAnswers: {},
    usedCategories: new Set(),
    roundUsedCategories: new Set(),
    currentCategory: null,
    selectedCategories: []
};

let selectedTeamColor = '#FF6B6B';
let editingTeamIndex = null;

// Event Listeners
function setupEventListeners() {
    // Main Menu
    document.getElementById('newGameBtn').addEventListener('click', showSetupScreen);
    document.getElementById('aboutBtn').addEventListener('click', openAboutModal);
    document.getElementById('backToMenuBtn').addEventListener('click', () => showScreen('mainScreen'));

    // Setup Screen
    document.getElementById('addTeamBtn').addEventListener('click', openTeamModal);
    document.getElementById('startGameBtn').addEventListener('click', startGame);
    document.getElementById('selectAllCategoriesBtn').addEventListener('click', selectAllCategories);
    document.getElementById('deselectAllCategoriesBtn').addEventListener('click', deselectAllCategories);

    // Game Screen
    document.getElementById('nextTeamBtn').addEventListener('click', nextTeam);
    document.getElementById('undoBtn').addEventListener('click', undoAnswer);

    // Results Screen
    document.getElementById('playAgainBtn').addEventListener('click', showSetupScreen);
    document.getElementById('mainMenuBtn').addEventListener('click', () => {
        gameState.teams = [];
        gameState.scores = {};
        showScreen('mainScreen');
    });
    document.getElementById('shareBtn').addEventListener('click', shareVictory);

    // Team Modal
    document.getElementById('teamNameInput').addEventListener('input', (e) => {
        // Team names are now optional, so don't disable the save button
        if (document.getElementById('saveTeamBtn')) {
            document.getElementById('saveTeamBtn').disabled = false;
        }
    });

    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedTeamColor = this.dataset.color;
        });
    });

    document.getElementById('saveTeamBtn').addEventListener('click', saveTeam);
    document.getElementById('cancelTeamBtn').addEventListener('click', closeTeamModal);
    document.querySelector('.close').addEventListener('click', closeTeamModal);
}

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Team Management
function openTeamModal() {
    editingTeamIndex = null;
    document.getElementById('teamNameInput').value = '';
    document.getElementById('teamNameInput').focus();
    selectedTeamColor = '#FF6B6B';
    
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-color="#FF6B6B"]').classList.add('active');
    
    document.getElementById('teamModal').classList.add('active');
}

function editTeam(index) {
    editingTeamIndex = index;
    const team = gameState.teams[index];
    document.getElementById('teamNameInput').value = team.name;
    selectedTeamColor = team.color;
    
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.color === team.color) {
            btn.classList.add('active');
        }
    });
    
    document.getElementById('teamModal').classList.add('active');
}

function closeTeamModal() {
    document.getElementById('teamModal').classList.remove('active');
}

function saveTeam() {
    let name = document.getElementById('teamNameInput').value.trim();
    
    // Generate auto name if team name is empty
    if (!name) {
        if (editingTeamIndex !== null) {
            name = gameState.teams[editingTeamIndex].name;
        } else {
            name = `Team ${gameState.teams.length + 1}`;
        }
    }

    if (editingTeamIndex !== null) {
        gameState.teams[editingTeamIndex].name = name;
        gameState.teams[editingTeamIndex].color = selectedTeamColor;
    } else {
        gameState.teams.push({ name, color: selectedTeamColor });
    }

    renderTeamsList();
    closeTeamModal();
}

function deleteTeam(index) {
    gameState.teams.splice(index, 1);
    renderTeamsList();
}

function renderTeamsList() {
    const teamsList = document.getElementById('teamsList');
    teamsList.innerHTML = '';

    if (gameState.teams.length === 0) {
        teamsList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No teams added yet</p>';
        return;
    }

    gameState.teams.forEach((team, index) => {
        const teamEl = document.createElement('div');
        teamEl.className = 'team-item';
        teamEl.style.borderLeftColor = team.color;
        teamEl.innerHTML = `
            <div class="team-color" style="background-color: ${team.color}"></div>
            <span class="team-name">${team.name}</span>
            <div class="team-actions">
                <button onclick="editTeam(${index})">✏️</button>
                <button onclick="deleteTeam(${index})">🗑️</button>
            </div>
        `;
        teamsList.appendChild(teamEl);
    });
}

function renderCategoriesList() {
    const categoriesList = document.getElementById('categoriesList');
    categoriesList.innerHTML = '';

    // Render only main categories - no sub-category details
    MAIN_CATEGORIES.forEach((mainCat) => {
        const isSelected = gameState.selectedCategories.includes(mainCat.key);
        
        const translatedMainCat = t(mainCat.nameKey);
        const categoryEl = document.createElement('label');
        categoryEl.className = 'category-checkbox';
        
        categoryEl.innerHTML = `
            <input type="checkbox" ${isSelected ? 'checked' : ''} onchange="toggleMainCategory('${mainCat.key}', this.checked)">
            <div>
                <span class="category-label">${translatedMainCat}</span>
            </div>
        `;
        categoriesList.appendChild(categoryEl);
    });
}

function toggleMainCategory(mainCat, isChecked) {
    // Toggle main category - no sub-categories shown
    if (isChecked) {
        if (!gameState.selectedCategories.includes(mainCat)) {
            gameState.selectedCategories.push(mainCat);
        }
    } else {
        gameState.selectedCategories = gameState.selectedCategories.filter(cat => cat !== mainCat);
    }
    
    renderCategoriesList();
}

function toggleCategory(categoryName, isChecked) {
    if (isChecked) {
        if (!gameState.selectedCategories.includes(categoryName)) {
            gameState.selectedCategories.push(categoryName);
        }
    } else {
        gameState.selectedCategories = gameState.selectedCategories.filter(c => c !== categoryName);
    }
}

function selectAllCategories() {
    gameState.selectedCategories = MAIN_CATEGORIES.map(c => c.key);
    renderCategoriesList();
}

function deselectAllCategories() {
    gameState.selectedCategories = [];
    renderCategoriesList();
}

// Game Setup
function showSetupScreen() {
    gameState = {
        ...gameState,
        teams: gameState.teams,
        currentTeamIndex: 0,
        rounds: 3,
        currentRound: 1,
        timePerRound: 60,
        scores: gameState.teams.reduce((acc, team, idx) => {
            acc[idx] = 0;
            return acc;
        }, {}),
        roundAnswers: {},
        selectedCategories: gameState.selectedCategories.length > 0 ? gameState.selectedCategories : MAIN_CATEGORIES.map(c => c.key)
    };

    renderTeamsList();
    renderCategoriesList();
    showScreen('setupScreen');
}

function startGame() {
    if (gameState.teams.length < 2) {
        alert(t('addAtLeastTwoTeams'));
        return;
    }

    if (gameState.selectedCategories.length === 0) {
        alert(t('selectAtLeastOneCategory'));
        return;
    }

    gameState.rounds = parseInt(document.getElementById('roundsInput').value);
    gameState.timePerRound = parseInt(document.getElementById('timeInput').value);
    gameState.currentRound = 1;
    gameState.gameActive = true;
    gameState.usedCategories.clear();

    gameState.teams.forEach((_, idx) => {
        gameState.scores[idx] = 0;
    });

    startRound();
}

// Round Management
function startRound() {
    gameState.currentTeamIndex = 0;
    gameState.roundAnswers = {};
    gameState.roundUsedCategories.clear();

    selectNewCategoryForTeam();
    renderGameScreen();
    showScreen('gameScreen');
    startTimer();
}

function selectNewCategoryForTeam() {
    // Select a main category first
    const availableMainCats = gameState.selectedCategories.filter(mainCat => 
        !gameState.roundUsedCategories.has(mainCat)
    );
    
    if (availableMainCats.length === 0) {
        alert('No categories available');
        return;
    }

    // Pick a random main category
    const selectedMainCat = availableMainCats[Math.floor(Math.random() * availableMainCats.length)];
    gameState.roundUsedCategories.add(selectedMainCat);
    
    // Get all question sets for this main category
    const questionSets = CATEGORY_QUESTIONS[selectedMainCat] || [];
    
    if (questionSets.length === 0) {
        alert('No question sets available for ' + selectedMainCat);
        return;
    }
    
    // Pick a random question set from this main category
    const selectedQuestion = questionSets[Math.floor(Math.random() * questionSets.length)];
    gameState.currentCategory = selectedQuestion;
}

function renderGameScreen() {
    // Update header
    document.getElementById('currentRound').textContent = gameState.currentRound;
    document.getElementById('totalRounds').textContent = gameState.rounds;

    const currentTeam = gameState.teams[gameState.currentTeamIndex];
    document.getElementById('currentTeamName').textContent = currentTeam.name;

    // Update category
    document.getElementById('categoryDisplay').textContent = t(gameState.currentCategory.nameKey);

    // Render answers grid
    const grid = document.getElementById('answersGrid');
    grid.innerHTML = '';
    gameState.currentCategory.answers.forEach((answer, idx) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<span class="answer-text">${answer.text}</span><span class="answer-points">${answer.points} ${t('points')}</span>`;

        if (gameState.roundAnswers[idx]) {
            btn.classList.add('found');
        }

        btn.addEventListener('click', () => markAnswerFound(idx, btn));
        grid.appendChild(btn);
    });

    updateScoreDisplay();
    updateScoreboard();
}

function markAnswerFound(answerIndex, btn) {
    const answer = gameState.currentCategory.answers[answerIndex];
    
    if (gameState.roundAnswers[answerIndex]) {
        // Deselect if already selected
        delete gameState.roundAnswers[answerIndex];
        btn.classList.remove('found');
    } else {
        // Select if not selected
        gameState.roundAnswers[answerIndex] = true;
        btn.classList.add('found');
    }
    
    updateScoreDisplay();
}

function undoAnswer() {
    const foundIndices = Object.keys(gameState.roundAnswers);
    if (foundIndices.length > 0) {
        const lastIndex = foundIndices[foundIndices.length - 1];
        delete gameState.roundAnswers[lastIndex];
        renderGameScreen();
    }
}

function updateScoreDisplay() {
    const foundAnswers = Object.keys(gameState.roundAnswers).length;
    let roundPoints = 0;
    
    Object.keys(gameState.roundAnswers).forEach(answerIndex => {
        const answer = gameState.currentCategory.answers[parseInt(answerIndex)];
        if (answer) {
            roundPoints += answer.points;
        }
    });
    
    document.getElementById('roundScore').textContent = `${t('roundScore')} ${roundPoints} ${t('points')}`;
}

function updateScoreboard() {
    const display = document.getElementById('scoresDisplay');
    display.innerHTML = '';

    gameState.teams.forEach((team, idx) => {
        const scoreEl = document.createElement('div');
        scoreEl.className = 'score-item' + (idx === gameState.currentTeamIndex ? ' current' : '');
        scoreEl.style.borderLeftColor = team.color;
        scoreEl.innerHTML = `
            <span class="score-name">${team.name}</span>
            <span class="score-points">${gameState.scores[idx]}</span>
        `;
        display.appendChild(scoreEl);
    });
}

function startTimer() {
    gameState.timeRemaining = gameState.timePerRound;
    updateTimer();

    if (gameState.timerInterval) clearInterval(gameState.timerInterval);

    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        updateTimer();

        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timerInterval);
            endTeamTurn();
        }
    }, 1000);
}

function updateTimer() {
    const timer = document.getElementById('timer');
    timer.textContent = gameState.timeRemaining;
    
    if (gameState.timeRemaining <= 10) {
        timer.style.color = '#D63031';
    } else {
        timer.style.color = 'inherit';
    }
}

function nextTeam() {
    endTeamTurn();
}

function endTeamTurn() {
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);

    // Calculate points earned based on answer point values
    let pointsEarned = 0;
    Object.keys(gameState.roundAnswers).forEach(answerIndex => {
        const answer = gameState.currentCategory.answers[parseInt(answerIndex)];
        if (answer) {
            pointsEarned += answer.points;
        }
    });
    
    gameState.scores[gameState.currentTeamIndex] += pointsEarned;

    // Move to next team
    gameState.currentTeamIndex++;

    if (gameState.currentTeamIndex < gameState.teams.length) {
        // Next team in same round - get them a new category
        gameState.roundAnswers = {};
        selectNewCategoryForTeam();
        renderGameScreen();
        startTimer();
    } else {
        // Check if more rounds
        if (gameState.currentRound < gameState.rounds) {
            gameState.currentRound++;
            startRound();
        } else {
            // Game over
            endGame();
        }
    }
}

// Game End
function endGame() {
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    gameState.gameActive = false;

    renderResults();
    showScreen('resultsScreen');
}

function renderResults() {
    const content = document.getElementById('resultsContent');

    // Find winner
    let winnerIndex = 0;
    let maxScore = gameState.scores[0];

    Object.entries(gameState.scores).forEach(([idx, score]) => {
        if (score > maxScore) {
            maxScore = score;
            winnerIndex = parseInt(idx);
        }
    });

    const winner = gameState.teams[winnerIndex];

    let html = `
        <div class="winner-box">
            <h2>🏆 ${winner.name} ${t('wins')}</h2>
            <p class="score">${t('totalScore')} ${gameState.scores[winnerIndex]} ${t('points')}</p>
        </div>

        <div class="final-scores">
            <h3>${t('finalScores')}</h3>
    `;

    // Sort teams by score
    const sortedTeams = gameState.teams
        .map((team, idx) => ({ team, score: gameState.scores[idx], idx }))
        .sort((a, b) => b.score - a.score);

    sortedTeams.forEach(({ team, score }, rank) => {
        html += `
            <div class="final-score-item">
                <span class="medal">${rank === 0 ? '🥇' : rank === 1 ? '🥈' : '🥉'}</span>
                <span class="name">${team.name}</span>
                <span class="points">${score} ${t('points')}</span>
            </div>
        `;
    });

    html += '</div>';

    content.innerHTML = html;
}

function shareVictory() {
    const winnerIndex = Object.keys(gameState.scores).reduce((a, b) =>
        gameState.scores[b] > gameState.scores[a] ? b : a
    );
    const winner = gameState.teams[winnerIndex];
    const winnerScore = gameState.scores[winnerIndex];
    
    const message = t('shareMessage')
        .replace('{team}', winner.name)
        .replace('{score}', winnerScore);

    // Facebook
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(message)}`;

    // Twitter
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(window.location.href)}`;

    // Show share options
    const shareHtml = `
        <div style="text-align: center; margin: 20px 0;">
            <p style="margin-bottom: 15px;">Share your victory!</p>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                <a href="${facebookUrl}" target="_blank" class="btn btn-primary" style="text-decoration: none; display: inline-block;">📘 Facebook</a>
                <a href="${twitterUrl}" target="_blank" class="btn btn-primary" style="text-decoration: none; display: inline-block;">𝕏 Twitter</a>
                <button onclick="copyLink()" class="btn btn-primary">📋 Copy Link</button>
            </div>
        </div>
    `;

    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML += shareHtml;
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert(t('linkCopied'));
}

// About Modal Functions
function openAboutModal() {
    document.getElementById('aboutModal').style.display = 'block';
}

function closeAboutModal() {
    document.getElementById('aboutModal').style.display = 'none';
}

// Utility Functions
window.editTeam = editTeam;
window.deleteTeam = deleteTeam;
window.copyLink = copyLink;
window.toggleCategory = toggleCategory;
window.selectAllCategories = selectAllCategories;
window.deselectAllCategories = deselectAllCategories;
window.openAboutModal = openAboutModal;
window.closeAboutModal = closeAboutModal;
