// Game Categories - Two-tier structure
// Main categories (Movies, TV, Geography, etc.) contain specific question sets
// Uses translation keys for multi-language support
const CATEGORY_STRUCTURE = {
    Movies: {
        nameKey: "cat_movies",
        descriptionKey: "cat_movies_desc",
        questions: [
            {
                nameKey: "cat_tom_cruise_movies",
                descriptionKey: "cat_tom_cruise_movies_desc",
                answers: [
                    { text: "Top Gun", points: 2 }, { text: "Mission Impossible", points: 2 }, { text: "Jerry Maguire", points: 3 }, { text: "Minority Report", points: 4 }, { text: "War Horse", points: 4 },
                    { text: "Jack Reacher", points: 3 }, { text: "Edge of Tomorrow", points: 3 }, { text: "Magnolia", points: 5 }, { text: "Valkyrie", points: 4 }, { text: "The Mummy (2017)", points: 3 }
                ]
            },
            {
                name: "Vampire Movies",
                description: "Films featuring vampires",
                answers: [
                    { text: "Dracula", points: 2 }, { text: "Interview with the Vampire", points: 3 }, { text: "Twilight", points: 2 }, { text: "Near Dark", points: 5 }, { text: "Nosferatu", points: 4 },
                    { text: "Let the Right One In", points: 4 }, { text: "Fright Night", points: 3 }, { text: "The Lost Boys", points: 3 }, { text: "Blade", points: 2 }, { text: "30 Days of Night", points: 3 }
                ]
            },
            {
                name: "Stanley Kubrick Films",
                description: "Directorial works by Stanley Kubrick",
                answers: [
                    { text: "2001: A Space Odyssey", points: 3 }, { text: "A Clockwork Orange", points: 3 }, { text: "The Shining", points: 2 }, { text: "Full Metal Jacket", points: 2 }, { text: "Dr. Strangelove", points: 3 },
                    { text: "Lolita", points: 5 }, { text: "Paths of Glory", points: 4 }, { text: "Spartacus", points: 2 }, { text: "Barry Lyndon", points: 5 }, { text: "Eyes Wide Shut", points: 2 }
                ]
            },
            {
                name: "Oscar Best Picture Winners",
                description: "Academy Award Best Picture winners through the decades",
                answers: [
                    { text: "Parasite", points: 3 }, { text: "Green Book", points: 2 }, { text: "The Shape of Water", points: 3 }, { text: "Moonlight", points: 3 }, { text: "Spotlight", points: 3 },
                    { text: "Birdman", points: 2 }, { text: "12 Years a Slave", points: 3 }, { text: "Argo", points: 2 }, { text: "The Artist", points: 2 }, { text: "Kings Speech", points: 2 }
                ]
            },
            {
                name: "Christopher Nolan Films",
                description: "Directorial works by Christopher Nolan",
                answers: [
                    { text: "Inception", points: 2 }, { text: "The Dark Knight", points: 1 }, { text: "Interstellar", points: 2 }, { text: "Tenet", points: 2 }, { text: "The Prestige", points: 2 },
                    { text: "Dunkirk", points: 2 }, { text: "Memento", points: 2 }, { text: "Oppenheimer", points: 1 }, { text: "Insomnia", points: 4 }, { text: "Following", points: 5 }
                ]
            },
            {
                name: "Quentin Tarantino Films",
                description: "Directorial works by Quentin Tarantino",
                answers: [
                    { text: "Pulp Fiction", points: 2 }, { text: "Kill Bill", points: 2 }, { text: "Inglourious Basterds", points: 2 }, { text: "Reservoir Dogs", points: 3 }, { text: "Jackie Brown", points: 3 },
                    { text: "Django Unchained", points: 2 }, { text: "Hateful Eight", points: 2 }, { text: "Death Proof", points: 3 }, { text: "Four Rooms", points: 4 }, { text: "Once Upon a Time in Hollywood", points: 2 }
                ]
            },
            {
                name: "Famous Film Directors",
                description: "Renowned film directors and their signature styles",
                answers: [
                    { text: "Steven Spielberg", points: 1 }, { text: "Martin Scorsese", points: 1 }, { text: "Christopher Nolan", points: 1 }, { text: "Quentin Tarantino", points: 1 }, { text: "James Cameron", points: 1 },
                    { text: "Stanley Kubrick", points: 1 }, { text: "David Fincher", points: 1 }, { text: "Pedro Almodóvar", points: 2 }, { text: "Bong Joon-ho", points: 2 }, { text: "Denis Villeneuve", points: 2 }
                ]
            }
        ]
    },
    TV: {
        name: "TV",
        description: "Television and streaming series",
        questions: [
            {
                name: "Lost TV Series Characters",
                description: "Main characters from the show Lost",
                answers: [
                    { text: "Jack Shepherd", points: 1 }, { text: "Sawyer", points: 1 }, { text: "Kate Austin", points: 1 }, { text: "Locke", points: 1 }, { text: "Hugo Reyes", points: 2 },
                    { text: "Sun-Hwa Kwon", points: 2 }, { text: "Charlie Pace", points: 2 }, { text: "Nonso", points: 4 }, { text: "Boone Carlyle", points: 3 }, { text: "Shannon Rutherford", points: 3 }
                ]
            },
            {
                name: "Emmy Award Winners (Drama)",
                description: "Outstanding drama series Emmy winners",
                answers: [
                    { text: "Game of Thrones", points: 2 }, { text: "Succession", points: 2 }, { text: "Breaking Bad", points: 2 }, { text: "The Crown", points: 2 }, { text: "Mad Men", points: 2 },
                    { text: "The Sopranos", points: 2 }, { text: "True Detective", points: 2 }, { text: "Westworld", points: 2 }, { text: "The Wire", points: 2 }, { text: "Dexter", points: 2 }
                ]
            }
        ]
    },
    Comics: {
        name: "Comics",
        description: "Comic books and superhero characters",
        questions: [
            {
                name: "Batman Villains & Enemies",
                description: "Enemies and antagonists of Batman",
                answers: [
                    { text: "The Joker", points: 1 }, { text: "Two-Face", points: 1 }, { text: "The Riddler", points: 1 }, { text: "Penguin", points: 1 }, { text: "Scarecrow", points: 1 },
                    { text: "Mr. Freeze", points: 1 }, { text: "Catwoman", points: 1 }, { text: "Poison Ivy", points: 1 }, { text: "Harley Quinn", points: 1 }, { text: "Bane", points: 1 }
                ]
            },
            {
                name: "Marvel Superheroes",
                description: "Characters from Marvel Universe",
                answers: [
                    { text: "Iron Man", points: 1 }, { text: "Captain America", points: 1 }, { text: "Thor", points: 1 }, { text: "Black Widow", points: 2 }, { text: "Hulk", points: 1 },
                    { text: "Doctor Strange", points: 2 }, { text: "Spider-Man", points: 1 }, { text: "Black Panther", points: 1 }, { text: "Ant-Man", points: 2 }, { text: "Scarlet Witch", points: 2 }
                ]
            }
        ]
    },
    Geography: {
        name: "Geography",
        description: "Places, cities, and world locations",
        questions: [
            {
                name: "Olympic Host Cities by Year",
                description: "Cities that hosted the Olympic Games",
                answers: [
                    { text: "Tokyo 2020", points: 2 }, { text: "Beijing 2008", points: 2 }, { text: "Rio 2016", points: 2 }, { text: "London 2012", points: 2 }, { text: "Athens 2004", points: 3 },
                    { text: "Sydney 2000", points: 3 }, { text: "Atlanta 1996", points: 3 }, { text: "Barcelona 1992", points: 3 }, { text: "Seoul 1988", points: 4 }, { text: "Montreal 1976", points: 5 }
                ]
            },
            {
                name: "Countries with No Official Religion",
                description: "Secular nations worldwide",
                answers: [
                    { text: "France", points: 2 }, { text: "United States", points: 2 }, { text: "Mexico", points: 3 }, { text: "Cuba", points: 3 }, { text: "Uruguay", points: 4 },
                    { text: "Bulgaria", points: 4 }, { text: "Czech Republic", points: 4 }, { text: "Albania", points: 5 }, { text: "Nicaragua", points: 5 }, { text: "Kazakhstan", points: 4 }
                ]
            },
            {
                name: "Museums in Major Cities",
                description: "Famous museums worldwide",
                answers: [
                    { text: "Louvre (Paris)", points: 1 }, { text: "Metropolitan Museum (NYC)", points: 2 }, { text: "British Museum (London)", points: 2 }, { text: "Uffizi Gallery (Florence)", points: 3 }, { text: "Hermitage (St. Petersburg)", points: 2 },
                    { text: "Vatican Museum (Rome)", points: 2 }, { text: "Prado Museum (Madrid)", points: 2 }, { text: "Guggenheim (NYC)", points: 2 }, { text: "Acropolis Museum (Athens)", points: 3 }, { text: "Rijksmuseum (Amsterdam)", points: 3 }
                ]
            },
            {
                name: "Countries with Most UNESCO Sites",
                description: "Nations rich in cultural heritage",
                answers: [
                    { text: "Italy", points: 2 }, { text: "China", points: 2 }, { text: "Spain", points: 2 }, { text: "France", points: 1 }, { text: "Germany", points: 2 },
                    { text: "Mexico", points: 2 }, { text: "India", points: 2 }, { text: "Japan", points: 2 }, { text: "Greece", points: 2 }, { text: "Portugal", points: 3 }
                ]
            }
        ]
    },
    Literature: {
        name: "Literature",
        description: "Books, stories, and literary characters",
        questions: [
            {
                name: "The Witcher Characters",
                description: "Characters from the books, games, and Netflix series",
                answers: [
                    { text: "Geralt of Rivia", points: 1 }, { text: "Ciri", points: 2 }, { text: "Yennefer of Vengerberg", points: 1 }, { text: "Triss Merigold", points: 2 }, { text: "The Wild Hunt", points: 2 },
                    { text: "Emhyr var Emreis", points: 2 }, { text: "Vilgefortz", points: 2 }, { text: "Cahir Mawr Dyffryn aep Ceallach", points: 2 }, { text: "Avallac'h", points: 2 }, { text: "Dijkstra", points: 2 }
                ]
            }
        ]
    },
    History: {
        name: "History",
        description: "Historical events, figures, and civilizations",
        questions: [
            {
                name: "Ancient Wonders of the World",
                description: "Wonders of the ancient world",
                answers: [
                    { text: "Great Pyramid of Giza", points: 1 }, { text: "Hanging Gardens of Babylon", points: 2 }, { text: "Temple of Zeus", points: 2 }, { text: "Colossus of Rhodes", points: 2 }, { text: "Lighthouse of Alexandria", points: 2 },
                    { text: "Mausoleum at Halicarnassus", points: 3 }, { text: "Statue of Zeus", points: 2 }, { text: "Colosseum (Rome)", points: 1 }, { text: "Great Wall (China)", points: 1 }, { text: "Machu Picchu", points: 1 }
                ]
            },
            {
                name: "Greek Mythology Gods",
                description: "Deities from ancient Greece",
                answers: [
                    { text: "Zeus", points: 1 }, { text: "Poseidon", points: 1 }, { text: "Hades", points: 1 }, { text: "Athena", points: 1 }, { text: "Apollo", points: 1 },
                    { text: "Artemis", points: 2 }, { text: "Aphrodite", points: 1 }, { text: "Ares", points: 2 }, { text: "Hephaestus", points: 2 }, { text: "Hermes", points: 1 }
                ]
            }
        ]
    },
    Science: {
        name: "Science",
        description: "Science, discoveries, and scientific achievements",
        questions: [
            {
                name: "Space Exploration Milestones",
                description: "Major achievements in space",
                answers: [
                    { text: "Moon Landing", points: 2 }, { text: "First Satellite", points: 2 }, { text: "First Human in Space", points: 2 }, { text: "Mars Rover Landing", points: 3 }, { text: "Space Station", points: 2 },
                    { text: "First Commercial Flight", points: 3 }, { text: "Space Telescope", points: 2 }, { text: "Venus Exploration", points: 4 }, { text: "Asteroid Landing", points: 4 }, { text: "Black Hole Photo", points: 4 }
                ]
            },
            {
                name: "Nobel Prize Winners (Science)",
                description: "Nobel Prize recipients in science fields",
                answers: [
                    { text: "Marie Curie", points: 2 }, { text: "Albert Einstein", points: 1 }, { text: "Richard Feynman", points: 3 }, { text: "Stephen Hawking", points: 2 }, { text: "Linus Pauling", points: 3 },
                    { text: "Max Planck", points: 4 }, { text: "Erwin Schrödinger", points: 4 }, { text: "Werner Heisenberg", points: 4 }, { text: "Paul Dirac", points: 5 }, { text: "Wolfgang Pauli", points: 5 }
                ]
            }
        ]
    },
    Food: {
        name: "Food",
        description: "Food, cooking, and culinary topics",
        questions: [
            {
                name: "Foods with Unexpected Black Ingredients",
                description: "Foods that contain black items",
                answers: [
                    { text: "Black Beans", points: 1 }, { text: "Black Olives", points: 1 }, { text: "Sesame Seeds (Black)", points: 3 }, { text: "Black Garlic", points: 4 }, { text: "Black Salt", points: 3 },
                    { text: "Black Lentils", points: 2 }, { text: "Black Rice", points: 2 }, { text: "Squid Ink Pasta", points: 3 }, { text: "Black Pepper", points: 1 }, { text: "Black Cumin", points: 4 }
                ]
            }
        ]
    },
    Business: {
        name: "Business",
        description: "Business, economics, and entrepreneurs",
        questions: [
            {
                name: "Billionaire Entrepreneurs",
                description: "Self-made billionaires",
                answers: [
                    { text: "Elon Musk", points: 1 }, { text: "Jeff Bezos", points: 1 }, { text: "Bill Gates", points: 1 }, { text: "Mark Zuckerberg", points: 1 }, { text: "Bernard Arnault", points: 2 },
                    { text: "Larry Ellison", points: 2 }, { text: "Steve Ballmer", points: 2 }, { text: "Mukesh Ambani", points: 2 }, { text: "Jack Ma", points: 2 }, { text: "Gautam Adani", points: 3 }
                ]
            }
        ]
    }
};

// Flatten categories for game logic
function getCategoriesList() {
    const flatList = [];
    Object.keys(CATEGORY_STRUCTURE).forEach(mainCat => {
        const category = CATEGORY_STRUCTURE[mainCat];
        category.questions.forEach(question => {
            flatList.push({
                id: `${mainCat}__${question.name}`,
                mainCategory: mainCat,
                name: question.name,
                description: question.description,
                answers: question.answers
            });
        });
    });
    return flatList;
}

// Get list of main categories
function getMainCategories() {
    return Object.keys(CATEGORY_STRUCTURE).map(key => ({
        name: key,
        description: CATEGORY_STRUCTURE[key].description
    }));
}
