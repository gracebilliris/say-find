// Game Data - Expanded with specific themed categories and point values
// Points reflect difficulty: easier answers = fewer points, harder answers = more points
const CATEGORIES = [
    {
        name: "Tom Cruise Movies",
        description: "Films starring Tom Cruise",
        answers: [
            { text: "Top Gun", points: 2 },
            { text: "Mission Impossible", points: 2 },
            { text: "Jerry Maguire", points: 3 },
            { text: "Minority Report", points: 4 },
            { text: "War Horse", points: 4 },
            { text: "Jack Reacher", points: 3 },
            { text: "Edge of Tomorrow", points: 3 },
            { text: "Magnolia", points: 5 },
            { text: "Valkyrie", points: 4 },
            { text: "The Mummy (2017)", points: 3 }
        ]
    },
    {
        name: "Vampire Movies",
        description: "Films featuring vampires",
        answers: [
            { text: "Dracula", points: 2 },
            { text: "Interview with the Vampire", points: 3 },
            { text: "Twilight", points: 2 },
            { text: "Near Dark", points: 5 },
            { text: "Nosferatu", points: 4 },
            { text: "Let the Right One In", points: 4 },
            { text: "Fright Night", points: 3 },
            { text: "The Lost Boys", points: 3 },
            { text: "Blade", points: 2 },
            { text: "30 Days of Night", points: 3 }
        ]
    },
    {
        name: "Olympic Host Cities by Year",
        description: "Cities that hosted the Olympic Games",
        answers: [
            { text: "Tokyo 2020", points: 2 },
            { text: "Beijing 2008", points: 2 },
            { text: "Rio 2016", points: 2 },
            { text: "London 2012", points: 2 },
            { text: "Athens 2004", points: 3 },
            { text: "Sydney 2000", points: 3 },
            { text: "Atlanta 1996", points: 3 },
            { text: "Barcelona 1992", points: 3 },
            { text: "Seoul 1988", points: 4 },
            { text: "Montreal 1976", points: 5 }
        ]
    },
    {
        name: "Stanley Kubrick Films",
        description: "Directorial works by Stanley Kubrick",
        answers: [
            { text: "2001: A Space Odyssey", points: 3 },
            { text: "A Clockwork Orange", points: 3 },
            { text: "The Shining", points: 2 },
            { text: "Full Metal Jacket", points: 2 },
            { text: "Dr. Strangelove", points: 3 },
            { text: "Lolita", points: 5 },
            { text: "Paths of Glory", points: 4 },
            { text: "Spartacus", points: 2 },
            { text: "Barry Lyndon", points: 5 },
            { text: "Eyes Wide Shut", points: 2 }
        ]
    },
    {
        name: "Winners of Best Picture (2010-2020)",
        description: "Academy Award Best Picture winners",
        answers: [
            { text: "Parasite", points: 3 },
            { text: "Green Book", points: 2 },
            { text: "The Shape of Water", points: 3 },
            { text: "Moonlight", points: 3 },
            { text: "Spotlight", points: 3 },
            { text: "Birdman", points: 2 },
            { text: "12 Years a Slave", points: 3 },
            { text: "Argo", points: 2 },
            { text: "The Artist", points: 2 },
            { text: "Kings Speech", points: 2 }
        ]
    },
    {
        name: "Countries with No Official Religion",
        description: "Secular nations worldwide",
        answers: [
            { text: "France", points: 2 },
            { text: "United States", points: 2 },
            { text: "Mexico", points: 3 },
            { text: "Cuba", points: 3 },
            { text: "Uruguay", points: 4 },
            { text: "Bulgaria", points: 4 },
            { text: "Czech Republic", points: 4 },
            { text: "Albania", points: 5 },
            { text: "Nicaragua", points: 5 },
            { text: "Kazakhstan", points: 4 }
        ]
    },
    {
        name: "Batman Villains",
        description: "Enemies of Batman",
        answers: [
            { text: "The Joker", points: 1 },
            { text: "Two-Face", points: 2 },
            { text: "The Riddler", points: 2 },
            { text: "Penguin", points: 2 },
            { text: "Scarecrow", points: 2 },
            { text: "Mr. Freeze", points: 2 },
            { text: "Catwoman", points: 1 },
            { text: "Poison Ivy", points: 2 },
            { text: "Harley Quinn", points: 1 },
            { text: "Bane", points: 2 }
        ]
    },
    {
        name: "Foods with Unexpected Black Ingredients",
        description: "Foods that contain black items",
        answers: [
            { text: "Black Beans", points: 1 },
            { text: "Black Olives", points: 1 },
            { text: "Sesame Seeds (Black)", points: 3 },
            { text: "Black Garlic", points: 4 },
            { text: "Black Salt", points: 3 },
            { text: "Black Lentils", points: 2 },
            { text: "Black Rice", points: 2 },
            { text: "Squid Ink Pasta", points: 3 },
            { text: "Black Pepper", points: 1 },
            { text: "Black Cumin", points: 4 }
        ]
    },
    {
        name: "Space Exploration Milestones",
        description: "Major achievements in space",
        answers: [
            { text: "Moon Landing", points: 2 },
            { text: "First Satellite", points: 2 },
            { text: "First Human in Space", points: 2 },
            { text: "Mars Rover Landing", points: 3 },
            { text: "Space Station", points: 2 },
            { text: "First Commercial Flight", points: 3 },
            { text: "Space Telescope", points: 2 },
            { text: "Venus Exploration", points: 4 },
            { text: "Asteroid Landing", points: 4 },
            { text: "Black Hole Photo", points: 4 }
        ]
    },
    {
        name: "Tarantino Films",
        description: "Directorial works by Quentin Tarantino",
        answers: [
            { text: "Pulp Fiction", points: 2 },
            { text: "Kill Bill", points: 2 },
            { text: "Inglourious Basterds", points: 2 },
            { text: "Reservoir Dogs", points: 3 },
            { text: "Jackie Brown", points: 3 },
            { text: "Django Unchained", points: 2 },
            { text: "Hateful Eight", points: 2 },
            { text: "Death Proof", points: 3 },
            { text: "Four Rooms", points: 4 },
            { text: "Once Upon a Time in Hollywood", points: 2 }
        ]
    },
    {
        name: "Nobel Prize Winners (Science)",
        description: "Nobel Prize recipients in science fields",
        answers: [
            { text: "Marie Curie", points: 2 },
            { text: "Albert Einstein", points: 1 },
            { text: "Richard Feynman", points: 3 },
            { text: "Stephen Hawking", points: 2 },
            { text: "Linus Pauling", points: 3 },
            { text: "Max Planck", points: 4 },
            { text: "Erwin Schrödinger", points: 4 },
            { text: "Werner Heisenberg", points: 4 },
            { text: "Paul Dirac", points: 5 },
            { text: "Wolfgang Pauli", points: 5 }
        ]
    },
    {
        name: "Nolan Films",
        description: "Directorial works by Christopher Nolan",
        answers: [
            { text: "Inception", points: 2 },
            { text: "The Dark Knight", points: 1 },
            { text: "Interstellar", points: 2 },
            { text: "Tenet", points: 2 },
            { text: "The Prestige", points: 2 },
            { text: "Dunkirk", points: 2 },
            { text: "Memento", points: 2 },
            { text: "Oppenheimer", points: 1 },
            { text: "Insomnia", points: 4 },
            { text: "Following", points: 5 }
        ]
    },
    {
        name: "Lost TV Series Characters",
        description: "Main characters from the show Lost",
        answers: [
            { text: "Jack Shepherd", points: 1 },
            { text: "Sawyer", points: 1 },
            { text: "Kate Austin", points: 1 },
            { text: "Locke", points: 1 },
            { text: "Hugo Reyes", points: 2 },
            { text: "Sun-Hwa Kwon", points: 2 },
            { text: "Charlie Pace", points: 2 },
            { text: "Nonso", points: 4 },
            { text: "Boone Carlyle", points: 3 },
            { text: "Shannon Rutherford", points: 3 }
        ]
    },
    {
        name: "Witcher Books and Characters",
        description: "Characters from The Witcher series",
        answers: [
            { text: "Geralt of Rivia", points: 1 },
            { text: "Ciri", points: 2 },
            { text: "Yennefer", points: 1 },
            { text: "Triss Merigold", points: 2 },
            { text: "The Wild Hunt", points: 2 },
            { text: "Dandelion", points: 2 },
            { text: "Vilgefortz", points: 3 },
            { text: "Emhyr", points: 3 },
            { text: "Avallac'h", points: 4 },
            { text: "Calanthe", points: 3 }
        ]
    },
    {
        name: "Museums in Major Cities",
        description: "Famous museums worldwide",
        answers: [
            { text: "Louvre (Paris)", points: 1 },
            { text: "Metropolitan Museum (NYC)", points: 2 },
            { text: "British Museum (London)", points: 2 },
            { text: "Uffizi Gallery (Florence)", points: 3 },
            { text: "Hermitage (St. Petersburg)", points: 2 },
            { text: "Vatican Museum (Rome)", points: 2 },
            { text: "Prado Museum (Madrid)", points: 2 },
            { text: "Guggenheim (NYC)", points: 2 },
            { text: "Acropolis Museum (Athens)", points: 3 },
            { text: "Rijksmuseum (Amsterdam)", points: 3 }
        ]
    },
    {
        name: "Countries with Most UNESCO Sites",
        description: "Nations rich in cultural heritage",
        answers: [
            { text: "Italy", points: 2 },
            { text: "China", points: 2 },
            { text: "Spain", points: 2 },
            { text: "France", points: 1 },
            { text: "Germany", points: 2 },
            { text: "Mexico", points: 2 },
            { text: "India", points: 2 },
            { text: "Japan", points: 2 },
            { text: "Greece", points: 2 },
            { text: "Portugal", points: 3 }
        ]
    },
    {
        name: "Marvel Superheroes",
        description: "Characters from Marvel Universe",
        answers: [
            { text: "Iron Man", points: 1 },
            { text: "Captain America", points: 1 },
            { text: "Thor", points: 1 },
            { text: "Black Widow", points: 2 },
            { text: "Hulk", points: 1 },
            { text: "Doctor Strange", points: 2 },
            { text: "Spider-Man", points: 1 },
            { text: "Black Panther", points: 1 },
            { text: "Ant-Man", points: 2 },
            { text: "Scarlet Witch", points: 2 }
        ]
    },
    {
        name: "Ancient Wonders of the World",
        description: "Wonders of the ancient world",
        answers: [
            { text: "Great Pyramid of Giza", points: 1 },
            { text: "Hanging Gardens of Babylon", points: 2 },
            { text: "Temple of Zeus", points: 2 },
            { text: "Colossus of Rhodes", points: 2 },
            { text: "Lighthouse of Alexandria", points: 2 },
            { text: "Mausoleum at Halicarnassus", points: 3 },
            { text: "Statue of Zeus", points: 2 },
            { text: "Colosseum (Rome)", points: 1 },
            { text: "Great Wall (China)", points: 1 },
            { text: "Machu Picchu", points: 1 }
        ]
    },
    {
        name: "Billionaire Entrepreneurs",
        description: "Self-made billionaires",
        answers: [
            { text: "Elon Musk", points: 1 },
            { text: "Jeff Bezos", points: 1 },
            { text: "Bill Gates", points: 1 },
            { text: "Mark Zuckerberg", points: 1 },
            { text: "Bernard Arnault", points: 2 },
            { text: "Larry Ellison", points: 2 },
            { text: "Steve Ballmer", points: 2 },
            { text: "Mukesh Ambani", points: 2 },
            { text: "Jack Ma", points: 2 },
            { text: "Gautam Adani", points: 3 }
        ]
    },
    {
        name: "Greek Mythology Gods",
        description: "Deities from ancient Greece",
        answers: [
            { text: "Zeus", points: 1 },
            { text: "Poseidon", points: 1 },
            { text: "Hades", points: 1 },
            { text: "Athena", points: 1 },
            { text: "Apollo", points: 1 },
            { text: "Artemis", points: 2 },
            { text: "Aphrodite", points: 1 },
            { text: "Ares", points: 2 },
            { text: "Hephaestus", points: 2 },
            { text: "Hermes", points: 1 }
        ]
    },
    {
        name: "Emmy Award Winners (Drama Series)",
        description: "Outstanding drama series Emmy winners",
        answers: [
            { text: "Game of Thrones", points: 2 },
            { text: "Succession", points: 2 },
            { text: "Breaking Bad", points: 2 },
            { text: "The Crown", points: 2 },
            { text: "Mad Men", points: 2 },
            { text: "The Sopranos", points: 2 },
            { text: "True Detective", points: 2 },
            { text: "Westworld", points: 2 },
            { text: "The Wire", points: 2 },
            { text: "Dexter", points: 2 }
        ]
    }
];


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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updatePageLanguage();
    document.getElementById('languageSelect').value = currentLanguage;
    showScreen('mainScreen');
});

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

    CATEGORIES.forEach((category) => {
        const isSelected = gameState.selectedCategories.includes(category.name);
        const categoryEl = document.createElement('label');
        categoryEl.className = 'category-checkbox';
        categoryEl.innerHTML = `
            <input type="checkbox" ${isSelected ? 'checked' : ''} onchange="toggleCategory('${category.name}', this.checked)">
            <div>
                <span class="category-label">${category.name}</span>
                ${category.description ? `<span class="category-desc">${category.description}</span>` : ''}
            </div>
        `;
        categoriesList.appendChild(categoryEl);
    });
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
    gameState.selectedCategories = CATEGORIES.map(c => c.name);
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
        selectedCategories: gameState.selectedCategories.length > 0 ? gameState.selectedCategories : CATEGORIES.map(c => c.name)
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
    const availableCategories = CATEGORIES.filter(c => gameState.selectedCategories.includes(c.name));
    
    if (availableCategories.length === 0) {
        alert('No categories available');
        return;
    }

    let category;
    let attempts = 0;
    
    do {
        category = availableCategories[Math.floor(Math.random() * availableCategories.length)];
        attempts++;
    } while (gameState.roundUsedCategories.has(category.name) && attempts < 50);
    
    gameState.roundUsedCategories.add(category.name);
    gameState.currentCategory = category;
}

function renderGameScreen() {
    // Update header
    document.getElementById('currentRound').textContent = gameState.currentRound;
    document.getElementById('totalRounds').textContent = gameState.rounds;

    const currentTeam = gameState.teams[gameState.currentTeamIndex];
    document.getElementById('currentTeamName').textContent = currentTeam.name;

    // Update category
    document.getElementById('categoryDisplay').textContent = gameState.currentCategory.name;

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
