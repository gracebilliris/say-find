// Game Categories - Two-tier structure with translation keys
// Main categories and question sets use nameKey/descriptionKey for multi-language support
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
                nameKey: "cat_vampire_movies",
                descriptionKey: "cat_vampire_movies_desc",
                answers: [
                    { text: "Dracula", points: 2 }, { text: "Interview with the Vampire", points: 3 }, { text: "Twilight", points: 2 }, { text: "Near Dark", points: 5 }, { text: "Nosferatu", points: 4 },
                    { text: "Let the Right One In", points: 4 }, { text: "Fright Night", points: 3 }, { text: "The Lost Boys", points: 3 }, { text: "Blade", points: 2 }, { text: "30 Days of Night", points: 3 }
                ]
            },
            {
                nameKey: "cat_stanley_kubrick_films",
                descriptionKey: "cat_stanley_kubrick_films_desc",
                answers: [
                    { text: "2001: A Space Odyssey", points: 3 }, { text: "A Clockwork Orange", points: 3 }, { text: "The Shining", points: 2 }, { text: "Full Metal Jacket", points: 2 }, { text: "Dr. Strangelove", points: 3 },
                    { text: "Lolita", points: 5 }, { text: "Paths of Glory", points: 4 }, { text: "Spartacus", points: 2 }, { text: "Barry Lyndon", points: 5 }, { text: "Eyes Wide Shut", points: 2 }
                ]
            },
            {
                nameKey: "cat_oscar_winners",
                descriptionKey: "cat_oscar_winners_desc",
                answers: [
                    { text: "Parasite", points: 3 }, { text: "Green Book", points: 2 }, { text: "The Shape of Water", points: 3 }, { text: "Moonlight", points: 3 }, { text: "Spotlight", points: 3 },
                    { text: "Birdman", points: 2 }, { text: "12 Years a Slave", points: 3 }, { text: "Argo", points: 2 }, { text: "The Artist", points: 2 }, { text: "Kings Speech", points: 2 }
                ]
            },
            {
                nameKey: "cat_nolan_films",
                descriptionKey: "cat_nolan_films_desc",
                answers: [
                    { text: "Inception", points: 2 }, { text: "The Dark Knight", points: 1 }, { text: "Interstellar", points: 2 }, { text: "Tenet", points: 2 }, { text: "The Prestige", points: 2 },
                    { text: "Dunkirk", points: 2 }, { text: "Memento", points: 2 }, { text: "Oppenheimer", points: 1 }, { text: "Insomnia", points: 4 }, { text: "Following", points: 5 }
                ]
            },
            {
                nameKey: "cat_tarantino_films",
                descriptionKey: "cat_tarantino_films_desc",
                answers: [
                    { text: "Pulp Fiction", points: 2 }, { text: "Kill Bill", points: 2 }, { text: "Inglourious Basterds", points: 2 }, { text: "Reservoir Dogs", points: 3 }, { text: "Jackie Brown", points: 3 },
                    { text: "Django Unchained", points: 2 }, { text: "Hateful Eight", points: 2 }, { text: "Death Proof", points: 3 }, { text: "Four Rooms", points: 4 }, { text: "Once Upon a Time in Hollywood", points: 2 }
                ]
            },
            {
                nameKey: "cat_famous_directors",
                descriptionKey: "cat_famous_directors_desc",
                answers: [
                    { text: "Steven Spielberg", points: 1 }, { text: "Martin Scorsese", points: 1 }, { text: "Christopher Nolan", points: 1 }, { text: "Quentin Tarantino", points: 1 }, { text: "James Cameron", points: 1 },
                    { text: "Stanley Kubrick", points: 1 }, { text: "David Fincher", points: 1 }, { text: "Pedro Almodóvar", points: 2 }, { text: "Bong Joon-ho", points: 2 }, { text: "Denis Villeneuve", points: 2 }
                ]
            }
        ]
    },
    TV: {
        nameKey: "cat_tv",
        descriptionKey: "cat_tv_desc",
        questions: [
            {
                nameKey: "cat_lost_characters",
                descriptionKey: "cat_lost_characters_desc",
                answers: [
                    { text: "Jack Shepherd", points: 1 }, { text: "Sawyer", points: 1 }, { text: "Kate Austin", points: 1 }, { text: "Locke", points: 1 }, { text: "Hugo Reyes", points: 2 },
                    { text: "Sun-Hwa Kwon", points: 2 }, { text: "Charlie Pace", points: 2 }, { text: "Nonso", points: 4 }, { text: "Boone Carlyle", points: 3 }, { text: "Shannon Rutherford", points: 3 }
                ]
            },
            {
                nameKey: "cat_emmy_winners",
                descriptionKey: "cat_emmy_winners_desc",
                answers: [
                    { text: "Game of Thrones", points: 2 }, { text: "Succession", points: 2 }, { text: "Breaking Bad", points: 2 }, { text: "The Crown", points: 2 }, { text: "Mad Men", points: 2 },
                    { text: "The Sopranos", points: 2 }, { text: "True Detective", points: 2 }, { text: "Westworld", points: 2 }, { text: "The Wire", points: 2 }, { text: "Dexter", points: 2 }
                ]
            }
        ]
    },
    Comics: {
        nameKey: "cat_comics",
        descriptionKey: "cat_comics_desc",
        questions: [
            {
                nameKey: "cat_batman_villains",
                descriptionKey: "cat_batman_villains_desc",
                answers: [
                    { text: "The Joker", points: 1 }, { text: "Two-Face", points: 1 }, { text: "The Riddler", points: 1 }, { text: "Penguin", points: 1 }, { text: "Scarecrow", points: 1 },
                    { text: "Mr. Freeze", points: 1 }, { text: "Catwoman", points: 1 }, { text: "Poison Ivy", points: 1 }, { text: "Harley Quinn", points: 1 }, { text: "Bane", points: 1 }
                ]
            },
            {
                nameKey: "cat_marvel_heroes",
                descriptionKey: "cat_marvel_heroes_desc",
                answers: [
                    { text: "Iron Man", points: 1 }, { text: "Captain America", points: 1 }, { text: "Thor", points: 1 }, { text: "Black Widow", points: 2 }, { text: "Hulk", points: 1 },
                    { text: "Doctor Strange", points: 2 }, { text: "Spider-Man", points: 1 }, { text: "Black Panther", points: 1 }, { text: "Ant-Man", points: 2 }, { text: "Scarlet Witch", points: 2 }
                ]
            }
        ]
    },
    Geography: {
        nameKey: "cat_geography",
        descriptionKey: "cat_geography_desc",
        questions: [
            {
                nameKey: "cat_olympic_cities",
                descriptionKey: "cat_olympic_cities_desc",
                answers: [
                    { text: "Tokyo 2020", points: 2 }, { text: "Beijing 2008", points: 2 }, { text: "Rio 2016", points: 2 }, { text: "London 2012", points: 2 }, { text: "Athens 2004", points: 3 },
                    { text: "Sydney 2000", points: 3 }, { text: "Atlanta 1996", points: 3 }, { text: "Barcelona 1992", points: 3 }, { text: "Seoul 1988", points: 4 }, { text: "Montreal 1976", points: 5 }
                ]
            },
            {
                nameKey: "cat_secular_nations",
                descriptionKey: "cat_secular_nations_desc",
                answers: [
                    { text: "France", points: 2 }, { text: "United States", points: 2 }, { text: "Mexico", points: 3 }, { text: "Cuba", points: 3 }, { text: "Uruguay", points: 4 },
                    { text: "Bulgaria", points: 4 }, { text: "Czech Republic", points: 4 }, { text: "Albania", points: 5 }, { text: "Nicaragua", points: 5 }, { text: "Kazakhstan", points: 4 }
                ]
            },
            {
                nameKey: "cat_museums",
                descriptionKey: "cat_museums_desc",
                answers: [
                    { text: "Louvre (Paris)", points: 1 }, { text: "Metropolitan Museum (NYC)", points: 2 }, { text: "British Museum (London)", points: 2 }, { text: "Uffizi Gallery (Florence)", points: 3 }, { text: "Hermitage (St. Petersburg)", points: 2 },
                    { text: "Vatican Museum (Rome)", points: 2 }, { text: "Prado Museum (Madrid)", points: 2 }, { text: "Guggenheim (NYC)", points: 2 }, { text: "Acropolis Museum (Athens)", points: 3 }, { text: "Rijksmuseum (Amsterdam)", points: 3 }
                ]
            },
            {
                nameKey: "cat_unesco_sites",
                descriptionKey: "cat_unesco_sites_desc",
                answers: [
                    { text: "Italy", points: 2 }, { text: "China", points: 2 }, { text: "Spain", points: 2 }, { text: "France", points: 1 }, { text: "Germany", points: 2 },
                    { text: "Mexico", points: 2 }, { text: "India", points: 2 }, { text: "Japan", points: 2 }, { text: "Greece", points: 2 }, { text: "Portugal", points: 3 }
                ]
            }
        ]
    },
    Literature: {
        nameKey: "cat_literature",
        descriptionKey: "cat_literature_desc",
        questions: [
            {
                nameKey: "cat_witcher_characters",
                descriptionKey: "cat_witcher_characters_desc",
                answers: [
                    { text: "Geralt of Rivia", points: 1 }, { text: "Ciri", points: 2 }, { text: "Yennefer of Vengerberg", points: 1 }, { text: "Triss Merigold", points: 2 }, { text: "The Wild Hunt", points: 2 },
                    { text: "Emhyr var Emreis", points: 2 }, { text: "Vilgefortz", points: 2 }, { text: "Cahir Mawr Dyffryn aep Ceallach", points: 2 }, { text: "Avallac'h", points: 2 }, { text: "Dijkstra", points: 2 }
                ]
            }
        ]
    },
    History: {
        nameKey: "cat_history",
        descriptionKey: "cat_history_desc",
        questions: [
            {
                nameKey: "cat_ancient_wonders",
                descriptionKey: "cat_ancient_wonders_desc",
                answers: [
                    { text: "Great Pyramid of Giza", points: 1 }, { text: "Hanging Gardens of Babylon", points: 2 }, { text: "Temple of Zeus", points: 2 }, { text: "Colossus of Rhodes", points: 2 }, { text: "Lighthouse of Alexandria", points: 2 },
                    { text: "Mausoleum at Halicarnassus", points: 3 }, { text: "Statue of Zeus", points: 2 }, { text: "Colosseum (Rome)", points: 1 }, { text: "Great Wall (China)", points: 1 }, { text: "Machu Picchu", points: 1 }
                ]
            },
            {
                nameKey: "cat_greek_gods",
                descriptionKey: "cat_greek_gods_desc",
                answers: [
                    { text: "Zeus", points: 1 }, { text: "Poseidon", points: 1 }, { text: "Hades", points: 1 }, { text: "Athena", points: 1 }, { text: "Apollo", points: 1 },
                    { text: "Artemis", points: 2 }, { text: "Aphrodite", points: 1 }, { text: "Ares", points: 2 }, { text: "Hephaestus", points: 2 }, { text: "Hermes", points: 1 }
                ]
            }
        ]
    },
    Science: {
        nameKey: "cat_science",
        descriptionKey: "cat_science_desc",
        questions: [
            {
                nameKey: "cat_space_exploration",
                descriptionKey: "cat_space_exploration_desc",
                answers: [
                    { text: "Moon Landing", points: 2 }, { text: "First Satellite", points: 2 }, { text: "First Human in Space", points: 2 }, { text: "Mars Rover Landing", points: 3 }, { text: "Space Station", points: 2 },
                    { text: "First Commercial Flight", points: 3 }, { text: "Space Telescope", points: 2 }, { text: "Venus Exploration", points: 4 }, { text: "Asteroid Landing", points: 4 }, { text: "Black Hole Photo", points: 4 }
                ]
            },
            {
                nameKey: "cat_nobel_prize",
                descriptionKey: "cat_nobel_prize_desc",
                answers: [
                    { text: "Marie Curie", points: 2 }, { text: "Albert Einstein", points: 1 }, { text: "Richard Feynman", points: 3 }, { text: "Stephen Hawking", points: 2 }, { text: "Linus Pauling", points: 3 },
                    { text: "Max Planck", points: 4 }, { text: "Erwin Schrödinger", points: 4 }, { text: "Werner Heisenberg", points: 4 }, { text: "Paul Dirac", points: 5 }, { text: "Wolfgang Pauli", points: 5 }
                ]
            }
        ]
    },
    Food: {
        nameKey: "cat_food",
        descriptionKey: "cat_food_desc",
        questions: [
            {
                nameKey: "cat_black_foods",
                descriptionKey: "cat_black_foods_desc",
                answers: [
                    { text: "Black Beans", points: 1 }, { text: "Black Olives", points: 1 }, { text: "Sesame Seeds (Black)", points: 3 }, { text: "Black Garlic", points: 4 }, { text: "Black Salt", points: 3 },
                    { text: "Black Lentils", points: 2 }, { text: "Black Rice", points: 2 }, { text: "Squid Ink Pasta", points: 3 }, { text: "Black Pepper", points: 1 }, { text: "Black Cumin", points: 4 }
                ]
            }
        ]
    },
    Business: {
        nameKey: "cat_business",
        descriptionKey: "cat_business_desc",
        questions: [
            {
                nameKey: "cat_billionaires",
                descriptionKey: "cat_billionaires_desc",
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
                id: `${mainCat}__${question.nameKey}`,
                mainCategory: mainCat,
                mainCategoryNameKey: category.nameKey,
                nameKey: question.nameKey,
                descriptionKey: question.descriptionKey,
                answers: question.answers,
                name: t(question.nameKey),
                description: t(question.descriptionKey)
            });
        });
    });
    return flatList;
}

// Get list of main categories
function getMainCategories() {
    return Object.keys(CATEGORY_STRUCTURE).map(key => ({
        key: key,
        nameKey: CATEGORY_STRUCTURE[key].nameKey,
        descriptionKey: CATEGORY_STRUCTURE[key].descriptionKey,
        name: t(CATEGORY_STRUCTURE[key].nameKey),
        description: t(CATEGORY_STRUCTURE[key].descriptionKey)
    }));
}
