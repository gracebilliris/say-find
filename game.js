// Game Data - Expanded with many more categories and questions
const CATEGORIES = [
    { name: "Famous Movie Characters", answers: ["Simba", "Elsa", "Yoda", "Sherlock", "Harley Quinn", "Batman", "Iron Man", "Katniss", "Gandalf", "Neo", "Forrest Gump", "Marty McFly", "E.T.", "Terminator", "Joker", "Darth Vader", "Luke Skywalker", "Princess Leia", "Han Solo", "Frodo"] },
    { name: "Fruits", answers: ["Apple", "Banana", "Orange", "Strawberry", "Grape", "Mango", "Watermelon", "Pineapple", "Kiwi", "Blueberry", "Raspberry", "Lemon", "Lime", "Cherry", "Peach", "Apricot", "Papaya", "Coconut", "Pomegranate", "Passionfruit"] },
    { name: "Football Teams", answers: ["Manchester United", "Barcelona", "Liverpool", "Real Madrid", "Arsenal", "Chelsea", "Bayern Munich", "PSG", "Inter Milan", "Juventus", "Borussia Dortmund", "AC Milan", "Atletico Madrid", "Tottenham", "City of Manchester", "Ajax", "Porto", "Benfica", "Roma", "Napoli"] },
    { name: "Programming Languages", answers: ["Python", "JavaScript", "Java", "C++", "Ruby", "Go", "Rust", "PHP", "Swift", "Kotlin", "TypeScript", "C#", "Scala", "Erlang", "Haskell", "Perl", "Assembly", "Lua", "R", "Julia"] },
    { name: "Disney Movies", answers: ["Frozen", "Lion King", "Aladdin", "Cinderella", "Moana", "Tangled", "Mulan", "Beauty and Beast", "Hercules", "Pocahontas", "Sleeping Beauty", "Snow White", "Pinocchio", "Dumbo", "Bambi", "Coco", "Brave", "Encanto", "Raya", "Zootopia"] },
    { name: "Countries", answers: ["Italy", "Japan", "Brazil", "Egypt", "Iceland", "Thailand", "Portugal", "Greece", "Mexico", "Canada", "Australia", "Norway", "Spain", "France", "Germany", "India", "China", "Argentina", "Sweden", "Switzerland"] },
    { name: "Superheroes", answers: ["Superman", "Wonder Woman", "Captain America", "Hulk", "Spider-Man", "Black Widow", "Flash", "Green Lantern", "Aquaman", "Green Arrow", "Hawkeye", "Iron Fist", "Daredevil", "Black Panther", "Doctor Strange", "Scarlet Witch", "Vision", "Ant-Man", "Wasp", "Thor"] },
    { name: "Breakfast Foods", answers: ["Pancakes", "Cereal", "Bacon", "Eggs", "Toast", "Yogurt", "Oats", "Croissant", "Waffle", "Smoothie", "Sausage", "Hash Browns", "Muffin", "Bagel", "Granola", "Jam", "Avocado", "Sausage", "Crepe", "Porridge"] },
    { name: "World Capitals", answers: ["Paris", "Tokyo", "Cairo", "Madrid", "London", "Rome", "Berlin", "Amsterdam", "Bangkok", "Istanbul", "Moscow", "Beijing", "New Delhi", "Toronto", "Canberra", "Mexico City", "Buenos Aires", "São Paulo", "Rio de Janeiro", "Sydney"] },
    { name: "Musical Instruments", answers: ["Guitar", "Piano", "Violin", "Drums", "Trumpet", "Saxophone", "Flute", "Cello", "Harmonica", "Banjo", "Harp", "Oboe", "Clarinet", "Trombone", "French Horn", "Cymbal", "Tambourine", "Lute", "Mandolin", "Accordion"] },
    { name: "Olympic Sports", answers: ["Swimming", "Gymnastics", "Basketball", "Volleyball", "Archery", "Fencing", "Wrestling", "Badminton", "Rowing", "Cycling", "Track and Field", "Weightlifting", "Judo", "Taekwondo", "Tennis", "Table Tennis", "Shooting", "Equestrian", "Boxing", "Skateboarding"] },
    { name: "Sea Animals", answers: ["Dolphin", "Shark", "Whale", "Octopus", "Starfish", "Jellyfish", "Seahorse", "Crab", "Lobster", "Seal", "Penguin", "Puffin", "Eel", "Squid", "Manta Ray", "Sea Turtle", "Clownfish", "Angelfish", "Barracuda", "Stingray"] },
    { name: "TV Shows", answers: ["Breaking Bad", "Game of Thrones", "Friends", "The Office", "Stranger Things", "The Crown", "Sherlock", "House of Cards", "Westworld", "Succession", "The Witcher", "Chernobyl", "Mindhunter", "Ozark", "Peaky Blinders", "The Marvelous Mrs. Maisel", "BoJack Horseman", "Dexter", "True Detective", "Fleabag"] },
    { name: "Colors", answers: ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Gray", "Black", "White", "Cyan", "Magenta", "Turquoise", "Indigo", "Violet", "Crimson", "Navy", "Maroon", "Gold"] },
    { name: "Sports", answers: ["Soccer", "Basketball", "Tennis", "Baseball", "American Football", "Ice Hockey", "Golf", "Rugby", "Cricket", "Badminton", "Volleyball", "Handball", "Boxing", "Wrestling", "Swimming", "Cycling", "Archery", "Bowling", "Curling", "Fencing"] },
    { name: "Vegetables", answers: ["Carrot", "Broccoli", "Tomato", "Cucumber", "Lettuce", "Spinach", "Pea", "Corn", "Potato", "Onion", "Garlic", "Cabbage", "Celery", "Bell Pepper", "Eggplant", "Zucchini", "Asparagus", "Brussels Sprouts", "Kale", "Radish"] },
    { name: "Famous Scientists", answers: ["Albert Einstein", "Isaac Newton", "Marie Curie", "Stephen Hawking", "Charles Darwin", "Galileo Galilei", "Nikola Tesla", "Louis Pasteur", "Richard Feynman", "Carl Sagan", "Richard Dawkins", "Brian Greene", "Alan Turing", "Rosalind Franklin", "Gregor Mendel", "Wolfgang Pauli", "Max Planck", "Erwin Schrödinger", "Werner Heisenberg", "Paul Dirac"] },
    { name: "Books", answers: ["Harry Potter", "The Great Gatsby", "To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Catcher in the Rye", "Lord of the Rings", "The Hobbit", "Dune", "Foundation", "Brave New World", "The Hunger Games", "Twilight", "Percy Jackson", "A Song of Ice and Fire", "Sherlock Holmes", "The Adventures of Tom Sawyer", "Alice in Wonderland", "Moby Dick", "Frankenstein"] },
    { name: "European Countries", answers: ["France", "Germany", "Italy", "Spain", "Poland", "Netherlands", "Belgium", "Austria", "Switzerland", "Greece", "Portugal", "Sweden", "Norway", "Denmark", "Finland", "Ireland", "Czech Republic", "Hungary", "Romania", "Bulgaria"] },
    { name: "Asian Countries", answers: ["Japan", "India", "China", "Thailand", "Vietnam", "Philippines", "Indonesia", "South Korea", "Malaysia", "Singapore", "Cambodia", "Laos", "Myanmar", "Bangladesh", "Pakistan", "Afghanistan", "Mongolia", "Nepal", "Sri Lanka", "Bhutan"] },
    { name: "African Countries", answers: ["Nigeria", "Kenya", "Egypt", "South Africa", "Ethiopia", "Ghana", "Morocco", "Angola", "Uganda", "Tanzania", "Sudan", "Algeria", "Botswana", "Zambia", "Zimbabwe", "Rwanda", "Cameroon", "Senegal", "Mali", "Mozambique"] },
    { name: "American Countries", answers: ["USA", "Canada", "Mexico", "Brazil", "Argentina", "Chile", "Colombia", "Peru", "Venezuela", "Ecuador", "Bolivia", "Paraguay", "Nicaragua", "Costa Rica", "Panama", "Cuba", "Haiti", "Jamaica", "Dominican Republic", "Belize"] },
    { name: "Actors", answers: ["Tom Cruise", "Johnny Depp", "Brad Pitt", "Leonardo DiCaprio", "Morgan Freeman", "Jack Nicholson", "Denzel Washington", "Will Smith", "George Clooney", "Matt Damon", "Keanu Reeves", "Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Scarlett Johansson", "Angelina Jolie", "Jennifer Lawrence", "Meryl Streep", "Kate Blanchett", "Cate Blanchett"] },
    { name: "Musicians", answers: ["The Beatles", "Rolling Stones", "Led Zeppelin", "Pink Floyd", "Queen", "Michael Jackson", "Elvis Presley", "David Bowie", "Prince", "Madonna", "Britney Spears", "Eminem", "Beyoncé", "Rihanna", "Taylor Swift", "The Weeknd", "Drake", "Ariana Grande", "Post Malone", "Billie Eilish"] },
    { name: "Historical Events", answers: ["American Revolution", "French Revolution", "World War 1", "World War 2", "Moon Landing", "Industrial Revolution", "Renaissance", "Roman Empire", "Fall of Berlin Wall", "Civil Rights Movement", "Magna Carta", "Declaration of Independence", "Vietnam War", "Cold War", "Black Death", "Holocaust", "Napoleonic Wars", "American Civil War", "Cuban Missile Crisis", "Enlightenment"] },
    { name: "Desserts", answers: ["Cake", "Pie", "Ice Cream", "Cookie", "Brownie", "Cheesecake", "Donut", "Cupcake", "Pudding", "Tiramisu", "Chocolate Mousse", "Baklava", "Churro", "Flan", "Crème Brûlée", "Tart", "Panna Cotta", "Soufflé", "Waffle", "Candy"] },
    { name: "Drinks", answers: ["Coffee", "Tea", "Juice", "Soda", "Beer", "Wine", "Whiskey", "Vodka", "Rum", "Gin", "Tequila", "Sangria", "Smoothie", "Milkshake", "Lemonade", "Water", "Champagne", "Chocolate", "Hot Chocolate", "Energy Drink"] },
    { name: "Animals", answers: ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Wolf", "Bear", "Deer", "Monkey", "Penguin", "Eagle", "Owl", "Snake", "Crocodile", "Frog", "Otter", "Panda", "Koala", "Kangaroo", "Cheetah"] },
    { name: "Jobs", answers: ["Doctor", "Lawyer", "Teacher", "Engineer", "Chef", "Pilot", "Nurse", "Builder", "Electrician", "Plumber", "Mechanic", "Architect", "Designer", "Developer", "Scientist", "Artist", "Musician", "Actor", "Athlete", "Journalist"] },
    { name: "Cars", answers: ["Ferrari", "Lamborghini", "Porsche", "Mercedes-Benz", "BMW", "Audi", "Tesla", "Toyota", "Honda", "Ford", "Chevrolet", "Dodge", "Jeep", "Volvo", "Lexus", "Bugatti", "Rolls-Royce", "Range Rover", "Maserati", "Jaguar"] },
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
    showScreen('mainScreen');
});

// Event Listeners
function setupEventListeners() {
    // Main Menu
    document.getElementById('newGameBtn').addEventListener('click', showSetupScreen);
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
            <span>${category.name}</span>
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
        alert('Please add at least 2 teams to start the game');
        return;
    }

    if (gameState.selectedCategories.length === 0) {
        alert('Please select at least one category');
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
    gameState.currentCategory.answers.forEach((answer) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;

        if (gameState.roundAnswers[answer]) {
            btn.classList.add('found');
        }

        btn.addEventListener('click', () => markAnswerFound(answer, btn));
        grid.appendChild(btn);
    });

    updateScoreDisplay();
    updateScoreboard();
}

function markAnswerFound(answer, btn) {
    if (gameState.roundAnswers[answer]) return;

    gameState.roundAnswers[answer] = true;
    btn.classList.add('found');
    updateScoreDisplay();

    // Check if all answers found
    if (Object.keys(gameState.roundAnswers).length === 10) {
        endTeamTurn();
    }
}

function undoAnswer() {
    const foundAnswers = Object.keys(gameState.roundAnswers);
    if (foundAnswers.length > 0) {
        const lastAnswer = foundAnswers[foundAnswers.length - 1];
        delete gameState.roundAnswers[lastAnswer];
        renderGameScreen();
    }
}

function updateScoreDisplay() {
    const found = Object.keys(gameState.roundAnswers).length;
    document.getElementById('roundScore').textContent = `Round Score: ${found}/10`;
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

    // Add points to current team based on answers found
    const pointsEarned = Object.keys(gameState.roundAnswers).length;
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
            <h2>🏆 ${winner.name} Wins!</h2>
            <p class="score">Total Score: ${gameState.scores[winnerIndex]} points</p>
        </div>

        <div class="final-scores">
            <h3>Final Scores</h3>
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
                <span class="points">${score} pts</span>
            </div>
        `;
    });

    html += '</div>';

    content.innerHTML = html;
}

function shareVictory() {
    const winner = gameState.teams[
        Object.keys(gameState.scores).reduce((a, b) =>
            gameState.scores[b] > gameState.scores[a] ? b : a
        )
    ];

    const winnerScore = Math.max(...Object.values(gameState.scores));
    const message = `🏆 I just won "Say Find"! ${winner.name} scored ${winnerScore} points! Can you beat that? 🎮`;

    // Facebook
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(message)}`;

    // Twitter
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(window.location.href)}`;

    // Show share options
    const shareHtml = `
        <div style="text-align: center; margin: 20px 0;">
            <p style="margin-bottom: 15px;">Share your victory!</p>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                <a href="${facebookUrl}" target="_blank" class="btn btn-primary" style="text-decoration: none; display: inline-block;">📘 Share on Facebook</a>
                <a href="${twitterUrl}" target="_blank" class="btn btn-primary" style="text-decoration: none; display: inline-block;">𝕏 Share on Twitter</a>
                <button onclick="copyLink()" class="btn btn-primary">📋 Copy Link</button>
            </div>
        </div>
    `;

    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML += shareHtml;

    alert('Share options displayed! Click the buttons to share on your preferred platform.');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert('Game link copied to clipboard! 📋');
}

// Utility Functions
window.editTeam = editTeam;
window.deleteTeam = deleteTeam;
window.copyLink = copyLink;
window.toggleCategory = toggleCategory;
window.selectAllCategories = selectAllCategories;
window.deselectAllCategories = deselectAllCategories;
