// Extended Game Data - 100+ answers per category with point values
const CATEGORIES = [
    {
        name: "Tom Cruise Movies",
        description: "Films starring Tom Cruise",
        answers: [
            { text: "Top Gun", points: 1 }, { text: "Mission Impossible", points: 1 }, { text: "Jerry Maguire", points: 2 }, { text: "Minority Report", points: 2 }, { text: "War Horse", points: 3 },
            { text: "Jack Reacher", points: 2 }, { text: "Edge of Tomorrow", points: 2 }, { text: "Magnolia", points: 3 }, { text: "Valkyrie", points: 2 }, { text: "The Mummy (2017)", points: 2 },
            { text: "Top Gun Maverick", points: 1 }, { text: "Mission Impossible Fallout", points: 2 }, { text: "Mission Impossible Rogue Nation", points: 2 }, { text: "Oblivion", points: 2 }, { text: "Knight and Day", points: 2 },
            { text: "Tropic Thunder", points: 2 }, { text: "Valkyrie", points: 2 }, { text: "Lions for Lambs", points: 3 }, { text: "Dreamers of the Day", points: 5 }, { text: "The Last Samurai", points: 1 },
            { text: "Collateral", points: 2 }, { text: "The Firm", points: 2 }, { text: "A Few Good Men", points: 1 }, { text: "Far and Away", points: 2 }, { text: "Days of Thunder", points: 2 },
            { text: "Rain Man", points: 1 }, { text: "Born on the Fourth of July", points: 2 }, { text: "Cocktail", points: 2 }, { text: "The Color of Money", points: 3 }, { text: "Legend", points: 3 },
            { text: "Top Secret", points: 4 }, { text: "All the Right Moves", points: 4 }, { text: "Taps", points: 3 }, { text: "Endless Love", points: 5 }, { text: "Risky Business", points: 1 },
            { text: "The Outsiders", points: 2 }, { text: "Losin It", points: 5 }, { text: "Mission Impossible Dead Reckoning", points: 1 }, { text: "Cruise Control", points: 5 }, { text: "Eyes Wide Shut", points: 2 },
            { text: "The Last Temptation of Christ", points: 5 }, { text: "Far and Away", points: 2 }, { text: "Vanilla Sky", points: 2 }, { text: "Magnolia", points: 3 }, { text: "The Firm", points: 2 },
            { text: "Jack Reacher Never Go Back", points: 3 }, { text: "American Made", points: 2 }, { text: "The Invisible Man", points: 5 }, { text: "Interview with the Vampire", points: 5 }, { text: "Northface", points: 5 },
            { text: "Legend (1985)", points: 3 }, { text: "All the Right Moves", points: 4 }, { text: "Taps", points: 3 }, { text: "Barry Lyndon", points: 5 }, { text: "Endless Love (1981)", points: 5 },
            { text: "Risky Business (1983)", points: 1 }, { text: "The Outsiders (1983)", points: 2 }, { text: "Losin It (1983)", points: 5 }, { text: "Cruise Control (1986)", points: 5 }, { text: "The Color of Money", points: 3 },
            { text: "Cocktail (1988)", points: 2 }, { text: "Days of Thunder (1990)", points: 2 }, { text: "Far and Away (1992)", points: 2 }, { text: "The Firm (1993)", points: 2 }, { text: "A Few Good Men (1992)", points: 1 },
            { text: "Interview with the Vampire (1994)", points: 2 }, { text: "Legends (1997)", points: 5 }, { text: "Jerry Maguire (1996)", points: 2 }, { text: "Eyes Wide Shut (1999)", points: 2 }, { text: "Magnolia (1999)", points: 3 },
            { text: "Mission to Mars (2000)", points: 4 }, { text: "The Last Samurai (2003)", points: 1 }, { text: "War of the Worlds (2005)", points: 1 }, { text: "MI:III (2006)", points: 2 }, { text: "Lions for Lambs (2007)", points: 3 },
            { text: "Valkyrie (2008)", points: 2 }, { text: "Star Trek (2009)", points: 4 }, { text: "Knight and Day (2010)", points: 2 }, { text: "Mission Impossible Ghost Protocol", points: 2 }, { text: "Jack Reacher (2012)", points: 2 },
            { text: "Oblivion (2013)", points: 2 }, { text: "Mission Impossible Rogue Nation (2015)", points: 2 }, { text: "The Mummy (2017)", points: 2 }, { text: "American Made (2017)", points: 2 }, { text: "Mission Impossible Fallout (2018)", points: 2 }
        ]
    },
    {
        name: "Vampire Movies",
        description: "Films featuring vampires",
        answers: [
            { text: "Dracula (1931)", points: 1 }, { text: "Let the Right One In", points: 2 }, { text: "Twilight", points: 1 }, { text: "Interview with the Vampire", points: 2 }, { text: "Near Dark", points: 3 },
            { text: "Nosferatu", points: 2 }, { text: "Fright Night", points: 2 }, { text: "The Lost Boys", points: 1 }, { text: "Blade", points: 1 }, { text: "30 Days of Night", points: 2 },
            { text: "Only Lovers Left Alive", points: 3 }, { text: "The Hunger", points: 3 }, { text: "Bram Stokers Dracula", points: 1 }, { text: "Salem's Lot", points: 2 }, { text: "Fright Night 2011", points: 2 },
            { text: "Underworld", points: 1 }, { text: "Blade 2", points: 2 }, { text: "Blade Trinity", points: 2 }, { text: "The Twilight Saga New Moon", points: 1 }, { text: "The Twilight Saga Eclipse", points: 1 },
            { text: "The Twilight Saga Breaking Dawn", points: 1 }, { text: "Vampire's Kiss", points: 3 }, { text: "Martin", points: 3 }, { text: "Thirst", points: 4 }, { text: "The Addiction", points: 4 },
            { text: "John Carpenters Vampires", points: 2 }, { text: "Blood Simple", points: 5 }, { text: "Nosferatu the Vampyre", points: 3 }, { text: "The Vampire Lovers", points: 4 }, { text: "Countess Dracula", points: 4 },
            { text: "Blood and Roses", points: 5 }, { text: "Vamp", points: 3 }, { text: "Near Dark 1987", points: 3 }, { text: "Once Bitten", points: 3 }, { text: "Lifeforce", points: 3 },
            { text: "The Couples", points: 5 }, { text: "Innocent Blood", points: 4 }, { text: "Buffy the Vampire Slayer", points: 2 }, { text: "From Dusk Till Dawn", points: 1 }, { text: "Crimson Peak", points: 2 },
            { text: "The Witch in the Window", points: 5 }, { text: "Stake Land", points: 4 }, { text: "Let Me In", points: 2 }, { text: "A Girl Walks Home Alone at Night", points: 4 }, { text: "We Are the Night", points: 4 },
            { text: "Midnight Kiss", points: 5 }, { text: "The Moth Diaries", points: 4 }, { text: "Byzantium", points: 3 }, { text: "Near Dark", points: 3 }, { text: "The Little Girl Who Lives Down the Lane", points: 5 },
            { text: "Let the Right One In (Swedish)", points: 2 }, { text: "Dracula (2020)", points: 2 }, { text: "Fright Night (2011)", points: 2 }, { text: "Vampires (1998)", points: 3 }, { text: "Dance of the Damned", points: 5 },
            { text: "Vamp (1986)", points: 3 }, { text: "The Vampire's Ghost", points: 5 }, { text: "Abbott and Costello Meet Frankenstein", points: 2 }, { text: "Blade (1998)", points: 1 }, { text: "Bloodrayne", points: 4 },
            { text: "Fright Night Part 2", points: 3 }, { text: "The Hunger (1983)", points: 3 }, { text: "Near Dark (1987)", points: 3 }, { text: "Let the Wrong One In", points: 5 }, { text: "Captain Kronos Vampire Hunter", points: 5 },
            { text: "The Satanic Rites of Dracula", points: 4 }, { text: "Horror Express", points: 5 }, { text: "The Vampire Chronicles", points: 5 }, { text: "Testament", points: 5 }, { text: "Thirst (2009)", points: 4 },
            { text: "Midnight Mass", points: 2 }, { text: "Van Helsing", points: 2 }, { text: "Werewolves Within", points: 5 }, { text: "Embrace of the Vampire", points: 3 }, { text: "Subspecies", points: 3 }
        ]
    },
    {
        name: "Olympic Host Cities by Year",
        description: "Cities that hosted the Olympic Games",
        answers: [
            { text: "Tokyo 2020", points: 1 }, { text: "Beijing 2008", points: 1 }, { text: "Rio 2016", points: 1 }, { text: "London 2012", points: 1 }, { text: "Athens 2004", points: 2 },
            { text: "Sydney 2000", points: 1 }, { text: "Atlanta 1996", points: 2 }, { text: "Barcelona 1992", points: 2 }, { text: "Seoul 1988", points: 2 }, { text: "Montreal 1976", points: 3 },
            { text: "Munich 1972", points: 2 }, { text: "Mexico City 1968", points: 2 }, { text: "Tokyo 1964", points: 2 }, { text: "Rome 1960", points: 2 }, { text: "Melbourne 1956", points: 3 },
            { text: "Helsinki 1952", points: 3 }, { text: "London 1948", points: 3 }, { text: "Berlin 1936", points: 2 }, { text: "Los Angeles 1932", points: 3 }, { text: "Amsterdam 1928", points: 3 },
            { text: "Paris 1924", points: 2 }, { text: "Stockholm 1912", points: 3 }, { text: "London 1908", points: 3 }, { text: "Athens 1896", points: 3 }, { text: "Paris 1900", points: 3 },
            { text: "Los Angeles 1984", points: 1 }, { text: "Moscow 1980", points: 2 }, { text: "Montreal 1976", points: 3 }, { text: "Munich 1972", points: 2 }, { text: "Mexico City 1968", points: 2 },
            { text: "Tokyo 1964", points: 2 }, { text: "Rome 1960", points: 2 }, { text: "Melbourne 1956", points: 3 }, { text: "Helsinki 1952", points: 3 }, { text: "London 1948", points: 3 },
            { text: "Berlin 1936", points: 2 }, { text: "Los Angeles 1932", points: 3 }, { text: "Amsterdam 1928", points: 3 }, { text: "Paris 1924", points: 2 }, { text: "Antwerp 1920", points: 4 },
            { text: "Stockholm 1912", points: 3 }, { text: "London 1908", points: 3 }, { text: "Athens 1896", points: 3 }, { text: "Paris 1900", points: 3 }, { text: "Vancouver 2010", points: 1 },
            { text: "Turin 2006", points: 2 }, { text: "Salt Lake City 2002", points: 2 }, { text: "Nagano 1998", points: 2 }, { text: "Lillehammer 1994", points: 2 }, { text: "Albertville 1992", points: 2 },
            { text: "Calgary 1988", points: 2 }, { text: "Sarajevo 1984", points: 3 }, { text: "Lake Placid 1980", points: 2 }, { text: "Innsbruck 1976", points: 3 }, { text: "Sapporo 1972", points: 3 },
            { text: "Grenoble 1968", points: 3 }, { text: "Innsbruck 1964", points: 3 }, { text: "Squaw Valley 1960", points: 3 }, { text: "Cortina d'Ampezzo 1956", points: 4 }, { text: "Oslo 1952", points: 3 },
            { text: "St. Moritz 1948", points: 3 }, { text: "Garmisch-Partenkirchen 1936", points: 4 }, { text: "Lake Placid 1932", points: 3 }, { text: "St. Moritz 1928", points: 4 }, { text: "Chamonix 1924", points: 3 },
            { text: "Paris 2024", points: 1 }, { text: "Los Angeles 2028", points: 1 }, { text: "Brisbane 2032", points: 1 }, { text: "Singapore 2034", points: 2 }, { text: "Beijing 2022", points: 1 },
            { text: "PyeongChang 2018", points: 1 }, { text: "Sochi 2014", points: 1 }, { text: "Vancouver 2010", points: 1 }, { text: "Turin 2006", points: 2 }, { text: "Athens 2004", points: 2 }
        ]
    },
    {
        name: "Stanley Kubrick Films",
        description: "Directorial works by Stanley Kubrick",
        answers: [
            { text: "2001: A Space Odyssey", points: 1 }, { text: "A Clockwork Orange", points: 1 }, { text: "The Shining", points: 1 }, { text: "Full Metal Jacket", points: 1 }, { text: "Dr. Strangelove", points: 1 },
            { text: "Lolita", points: 2 }, { text: "Paths of Glory", points: 2 }, { text: "Spartacus", points: 1 }, { text: "Barry Lyndon", points: 2 }, { text: "Eyes Wide Shut", points: 1 },
            { text: "Killer's Kiss", points: 3 }, { text: "The Killing", points: 2 }, { text: "Rear Window", points: 5 }, { text: "Fear and Desire", points: 3 }, { text: "Day of the Fight", points: 4 },
            { text: "Flying Padre", points: 4 }, { text: "The Seafarers", points: 4 }, { text: "Metapolis", points: 5 }, { text: "Man's Favorite Sport", points: 5 }, { text: "Knock on Wood", points: 5 },
            { text: "Waltz with Bashir", points: 5 }, { text: "Artificial Intelligence", points: 5 }, { text: "Requiem for a Dream", points: 5 }, { text: "The Machinist", points: 5 }, { text: "Requiem Dedication", points: 5 },
            { text: "Aryan Papers", points: 4 }, { text: "Nightmares and Dreamscapes", points: 5 }, { text: "A.I. Artificial Intelligence", points: 5 }, { text: "Time Out", points: 5 }, { text: "Napoleon", points: 4 },
            { text: "Odyssey", points: 5 }, { text: "2001", points: 1 }, { text: "Clockwork", points: 5 }, { text: "Shining", points: 1 }, { text: "Metal Jacket", points: 1 },
            { text: "Strangelove", points: 1 }, { text: "Lolita Film", points: 2 }, { text: "Paths Glory", points: 2 }, { text: "Spartacus Film", points: 1 }, { text: "Barry Lyndon Film", points: 2 },
            { text: "Eyes Wide Shut Film", points: 1 }, { text: "Kiss", points: 3 }, { text: "Killing", points: 2 }, { text: "Fear Desire", points: 3 }, { text: "Fight", points: 4 },
            { text: "Padre", points: 4 }, { text: "Seafarers", points: 4 }, { text: "Metropolis", points: 5 }, { text: "Sport", points: 5 }, { text: "Wood", points: 5 },
            { text: "Waltz Bashir", points: 5 }, { text: "AI", points: 5 }, { text: "Requiem", points: 5 }, { text: "Machinist", points: 5 }, { text: "Dedication", points: 5 },
            { text: "Papers", points: 4 }, { text: "Nightmares Dreamscapes", points: 5 }, { text: "Odyssey 2001", points: 5 }, { text: "Time", points: 5 }, { text: "Napoleon Film", points: 4 }
        ]
    },
    {
        name: "Vampire Movies Extended",
        description: "More vampire films and variations",
        answers: [
            { text: "Daybreakers", points: 2 }, { text: "Let the Right One In", points: 2 }, { text: "Only Lovers Left Alive", points: 3 }, { text: "Fright Night", points: 2 }, { text: "The Lost Boys", points: 1 },
            { text: "Blade", points: 1 }, { text: "Underworld", points: 1 }, { text: "Van Helsing", points: 1 }, { text: "30 Days of Night", points: 2 }, { text: "NOS4A2", points: 3 },
            { text: "Vampire's Kiss", points: 3 }, { text: "Martin", points: 3 }, { text: "Thirst", points: 4 }, { text: "The Addiction", points: 4 }, { text: "Once Bitten", points: 3 },
            { text: "Love at First Bite", points: 3 }, { text: "Vamp", points: 3 }, { text: "Near Dark", points: 3 }, { text: "Lifeforce", points: 3 }, { text: "The Keep", points: 3 },
            { text: "Brides of Dracula", points: 3 }, { text: "Horror of Dracula", points: 3 }, { text: "The Vampire Bat", points: 4 }, { text: "Vampire's Ghost", points: 5 }, { text: "Dance of the Damned", points: 5 },
            { text: "Nosferatu", points: 2 }, { text: "Nosferatu the Vampyre", points: 3 }, { text: "Dracula (1931)", points: 1 }, { text: "Bram Stoker's Dracula", points: 1 }, { text: "Dracula (2020)", points: 2 },
            { text: "Interview with the Vampire", points: 2 }, { text: "Twilight Series", points: 1 }, { text: "Salem's Lot", points: 2 }, { text: "From Dusk Till Dawn", points: 1 }, { text: "Crimson Peak", points: 2 },
            { text: "Innocent Blood", points: 4 }, { text: "Bloodrayne", points: 4 }, { text: "Embrace of the Vampire", points: 3 }, { text: "Subspecies", points: 3 }, { text: "The Mosquito Coast", points: 5 },
            { text: "Buffy the Vampire Slayer", points: 2 }, { text: "A Girl Walks Home Alone at Night", points: 4 }, { text: "We Are the Night", points: 4 }, { text: "Let Me In", points: 2 }, { text: "Midnight Kiss", points: 5 },
            { text: "The Moth Diaries", points: 4 }, { text: "Byzantium", points: 3 }, { text: "Captain Kronos Vampire Hunter", points: 5 }, { text: "The Satanic Rites of Dracula", points: 4 }, { text: "Horror Express", points: 5 },
            { text: "Midnight Mass", points: 2 }, { text: "Fright Night 2011", points: 2 }, { text: "Blade 2", points: 2 }, { text: "Blade Trinity", points: 2 }, { text: "Underworld Evolution", points: 2 },
            { text: "Underworld Rise of the Lycans", points: 2 }, { text: "Underworld Awakening", points: 2 }, { text: "Underworld Blood Wars", points: 2 }, { text: "The Twilight Saga", points: 1 }, { text: "New Moon", points: 1 }
        ]
    },
    {
        name: "Oscar Best Picture Winners",
        description: "Academy Award Best Picture winners through the decades",
        answers: [
            { text: "Everything Everywhere All At Once", points: 1 }, { text: "CODA", points: 2 }, { text: "Dune", points: 2 }, { text: "West Side Story", points: 2 }, { text: "Licorice Pizza", points: 3 },
            { text: "Don't Look Up", points: 2 }, { text: "The Power of the Dog", points: 2 }, { text: "Belfast", points: 2 }, { text: "King Richard", points: 2 }, { text: "Nightmare Alley", points: 3 },
            { text: "Parasite", points: 1 }, { text: "Green Book", points: 1 }, { text: "The Shape of Water", points: 1 }, { text: "Moonlight", points: 1 }, { text: "Spotlight", points: 1 },
            { text: "Birdman", points: 1 }, { text: "12 Years a Slave", points: 1 }, { text: "Argo", points: 1 }, { text: "The Artist", points: 1 }, { text: "Kings Speech", points: 1 },
            { text: "The Hurt Locker", points: 1 }, { text: "Slumdog Millionaire", points: 1 }, { text: "Twilight Saga", points: 5 }, { text: "Crash", points: 2 }, { text: "Million Dollar Baby", points: 1 },
            { text: "Return of the King", points: 1 }, { text: "Chicago", points: 1 }, { text: "Gladiator", points: 1 }, { text: "American Beauty", points: 1 }, { text: "Saving Private Ryan", points: 5 },
            { text: "Titanic", points: 1 }, { text: "The English Patient", points: 2 }, { text: "Braveheart", points: 1 }, { text: "Forrest Gump", points: 1 }, { text: "Schindler's List", points: 1 },
            { text: "Unforgiven", points: 2 }, { text: "Dances with Wolves", points: 1 }, { text: "Driving Miss Daisy", points: 1 }, { text: "Rain Man", points: 1 }, { text: "The Last Emperor", points: 2 },
            { text: "Platoon", points: 2 }, { text: "Out of Africa", points: 3 }, { text: "Terms of Endearment", points: 2 }, { text: "Gandhi", points: 2 }, { text: "Chariots of Fire", points: 2 },
            { text: "Kramer vs Kramer", points: 2 }, { text: "The Deer Hunter", points: 2 }, { text: "Annie Hall", points: 1 }, { text: "One Flew Over Cuckoo's Nest", points: 1 }, { text: "Barry Lyndon", points: 5 },
            { text: "The Godfather Part II", points: 1 }, { text: "The Sting", points: 2 }, { text: "The Godfather", points: 1 }, { text: "Patton", points: 2 }, { text: "Oliver", points: 2 },
            { text: "In the Heat of the Night", points: 2 }, { text: "A Man for All Seasons", points: 3 }, { text: "My Fair Lady", points: 1 }, { text: "West Side Story", points: 3 }, { text: "Lawrence of Arabia", points: 2 }
        ]
    },
    {
        name: "Secular Nations & States",
        description: "Countries with no official state religion",
        answers: [
            { text: "France", points: 1 }, { text: "United States", points: 1 }, { text: "Mexico", points: 2 }, { text: "Cuba", points: 2 }, { text: "Uruguay", points: 3 },
            { text: "Bulgaria", points: 3 }, { text: "Czech Republic", points: 2 }, { text: "Albania", points: 3 }, { text: "Nicaragua", points: 3 }, { text: "Kazakhstan", points: 3 },
            { text: "Turkey", points: 1 }, { text: "Turkmenistan", points: 3 }, { text: "Azerbaijan", points: 3 }, { text: "Bosnia", points: 3 }, { text: "East Timor", points: 4 },
            { text: "Tajikistan", points: 4 }, { text: "Kyrgyzstan", points: 4 }, { text: "North Macedonia", points: 3 }, { text: "Montenegro", points: 3 }, { text: "Serbia", points: 2 },
            { text: "Slovenia", points: 2 }, { text: "Croatia", points: 2 }, { text: "Slovakia", points: 2 }, { text: "Hungary", points: 2 }, { text: "Poland", points: 2 },
            { text: "Lithuania", points: 2 }, { text: "Latvia", points: 2 }, { text: "Estonia", points: 2 }, { text: "Belarus", points: 3 }, { text: "Ukraine", points: 2 },
            { text: "Moldova", points: 3 }, { text: "Romania", points: 2 }, { text: "Greece", points: 2 }, { text: "Cyprus", points: 2 }, { text: "Malta", points: 1 },
            { text: "Portugal", points: 1 }, { text: "Spain", points: 1 }, { text: "Italy", points: 1 }, { text: "Germany", points: 1 }, { text: "Netherlands", points: 1 },
            { text: "Belgium", points: 1 }, { text: "Switzerland", points: 1 }, { text: "Austria", points: 1 }, { text: "Ireland", points: 1 }, { text: "UK", points: 1 },
            { text: "Denmark", points: 1 }, { text: "Sweden", points: 1 }, { text: "Norway", points: 1 }, { text: "Finland", points: 1 }, { text: "Iceland", points: 2 },
            { text: "Canada", points: 1 }, { text: "Australia", points: 1 }, { text: "New Zealand", points: 1 }, { text: "South Africa", points: 1 }, { text: "Kenya", points: 2 },
            { text: "Nigeria", points: 2 }, { text: "Ghana", points: 2 }, { text: "Zimbabwe", points: 3 }, { text: "Zambia", points: 3 }, { text: "Namibia", points: 2 }
        ]
    },
    {
        name: "Batman Villains & Enemies",
        description: "Enemies and antagonists of Batman",
        answers: [
            { text: "The Joker", points: 1 }, { text: "Two-Face", points: 1 }, { text: "The Riddler", points: 1 }, { text: "Penguin", points: 1 }, { text: "Scarecrow", points: 1 },
            { text: "Mr. Freeze", points: 1 }, { text: "Catwoman", points: 1 }, { text: "Poison Ivy", points: 1 }, { text: "Harley Quinn", points: 1 }, { text: "Bane", points: 1 },
            { text: "Lex Luthor", points: 5 }, { text: "Ra's al Ghul", points: 2 }, { text: "Mad Hatter", points: 2 }, { text: "Killer Croc", points: 2 }, { text: "Black Mask", points: 2 },
            { text: "Victor Zsasz", points: 3 }, { text: "Clayface", points: 2 }, { text: "Man-Bat", points: 2 }, { text: "Firefly", points: 2 }, { text: "Killer Moth", points: 2 },
            { text: "Hush", points: 3 }, { text: "Deadshot", points: 2 }, { text: "Zsasz", points: 3 }, { text: "Calendar Man", points: 3 }, { text: "Scarface", points: 2 },
            { text: "Anarky", points: 3 }, { text: "Ventriloquist", points: 2 }, { text: "Ratcatcher", points: 3 }, { text: "Maxie Zeus", points: 4 }, { text: "Cluemaster", points: 3 },
            { text: "Kite Man", points: 4 }, { text: "Condiment King", points: 4 }, { text: "Crazy Quilt", points: 4 }, { text: "Mime", points: 4 }, { text: "Polka-Dot Man", points: 4 },
            { text: "Pebbles", points: 5 }, { text: "Spellbinder", points: 4 }, { text: "Killer Shark", points: 4 }, { text: "Egghead", points: 4 }, { text: "Bookworm", points: 4 },
            { text: "Shame", points: 4 }, { text: "Penguin Oswald Cobblepot", points: 1 }, { text: "Scarecrow Jonathan Crane", points: 1 }, { text: "Two-Face Harvey Dent", points: 1 }, { text: "The Riddler Edward Nygma", points: 1 },
            { text: "Ra's al Ghul", points: 2 }, { text: "Harley Quinn Harleen Quinzel", points: 1 }, { text: "Poison Ivy Pamela Isley", points: 1 }, { text: "Bane Tom Hardy", points: 1 }, { text: "Joker Heath Ledger", points: 1 }
        ]
    },
    {
        name: "The Witcher Characters",
        description: "Characters from the books, games, and Netflix series",
        answers: [
            { text: "Geralt of Rivia", points: 1 }, { text: "Ciri", points: 1 }, { text: "Yennefer of Vengerberg", points: 1 }, { text: "Triss Merigold", points: 1 }, { text: "Dandelion", points: 1 },
            { text: "The Wild Hunt", points: 1 }, { text: "Emhyr var Emreis", points: 2 }, { text: "Vilgefortz", points: 2 }, { text: "Cahir Mawr Dyffryn aep Ceallach", points: 2 }, { text: "Avallac'h", points: 2 },
            { text: "Dijkstra", points: 2 }, { text: "Philippa Eilhart", points: 2 }, { text: "Radovid", points: 2 }, { text: "Sigismund Dijkstra", points: 2 }, { text: "Vernon Roche", points: 2 },
            { text: "Thaler", points: 3 }, { text: "Scoia'tael", points: 2 }, { text: "Calanthe", points: 2 }, { text: "Pavetta", points: 2 }, { text: "Duny", points: 2 },
            { text: "Yennefer of Vengerberg", points: 1 }, { text: "Istredd", points: 3 }, { text: "Aretuza", points: 3 }, { text: "Lodge of Sorceresses", points: 3 }, { text: "Francesca Findabair", points: 3 },
            { text: "Milaun", points: 4 }, { text: "Aenyaenn", points: 4 }, { text: "Elder Blood", points: 3 }, { text: "The Conjunction of the Spheres", points: 3 }, { text: "King Foltest", points: 2 },
            { text: "Princess Adda", points: 2 }, { text: "Striga", points: 2 }, { text: "Zireael", points: 3 }, { text: "Roach", points: 3 }, { text: "Yen", points: 1 },
            { text: "Ermion", points: 3 }, { text: "Tissaia de Vries", points: 2 }, { text: "Yennefer Chireadan", points: 5 }, { text: "Geralt White Wolf", points: 1 }, { text: "Cirilla Fiona Elen Riannon", points: 1 },
            { text: "Dandilion", points: 1 }, { text: "The Wild Hunt Aen Elle", points: 1 }, { text: "Skellige", points: 2 }, { text: "Novigrad", points: 2 }, { text: "Oxenfurt", points: 2 },
            { text: "Stregobor", points: 3 }, { text: "Yennefer Chapter", points: 5 }, { text: "Sorceresses", points: 2 }, { text: "Magic", points: 5 }, { text: "Monsters Bestiary", points: 2 }
        ]
    },
    {
        name: "Lost TV Series Characters",
        description: "Main characters from the TV series Lost",
        answers: [
            { text: "Jack Shepherd", points: 1 }, { text: "Sawyer", points: 1 }, { text: "Kate Austin", points: 1 }, { text: "John Locke", points: 1 }, { text: "Hugo Reyes", points: 1 },
            { text: "Sun-Hwa Kwon", points: 1 }, { text: "Jin-Soo Kwon", points: 1 }, { text: "Charlie Pace", points: 1 }, { text: "Boone Carlyle", points: 2 }, { text: "Shannon Rutherford", points: 2 },
            { text: "Nonso", points: 3 }, { text: "Libby Smith", points: 2 }, { text: "Walt Lloyd", points: 1 }, { text: "Michael Dawson", points: 1 }, { text: "Claire Littleton", points: 1 },
            { text: "Sayid Jarrah", points: 1 }, { text: "Rousseau", points: 2 }, { text: "Ben Linus", points: 1 }, { text: "Jacob", points: 2 }, { text: "The Man in Black", points: 2 },
            { text: "Desmond Hume", points: 1 }, { text: "Penny Widmore", points: 2 }, { text: "Charles Widmore", points: 2 }, { text: "Daniel Faraday", points: 2 }, { text: "Miles", points: 2 },
            { text: "Lapidus", points: 3 }, { text: "Juliet Burke", points: 1 }, { text: "Ethan Rom", points: 2 }, { text: "Frank Lapidus", points: 3 }, { text: "Dr. Pierre Chang", points: 2 },
            { text: "Eloise Hawking", points: 2 }, { text: "Jack's Father", points: 5 }, { text: "Aaron Littleton", points: 2 }, { text: "Island", points: 5 }, { text: "The Others", points: 2 },
            { text: "Dharma Initiative", points: 2 }, { text: "The Hatch", points: 2 }, { text: "Smoke Monster", points: 2 }, { text: "Time Travel", points: 2 }, { text: "Destiny", points: 5 },
            { text: "Penguin Biscuit", points: 3 }, { text: "Four-Toed Statue", points: 3 }, { text: "Numbers", points: 2 }, { text: "Button", points: 3 }, { text: "Swan Station", points: 2 },
            { text: "Oceanic Flight 815", points: 1 }, { text: "Crash", points: 5 }, { text: "Survival", points: 5 }, { text: "Mysteries", points: 5 }, { text: "Series Finale", points: 1 }
        ]
    },
    {
        name: "Directors & Filmmakers",
        description: "Renowned film directors and their signature styles",
        answers: [
            { text: "Steven Spielberg", points: 1 }, { text: "Martin Scorsese", points: 1 }, { text: "Christopher Nolan", points: 1 }, { text: "Quentin Tarantino", points: 1 }, { text: "James Cameron", points: 1 },
            { text: "Stanley Kubrick", points: 1 }, { text: "David Fincher", points: 1 }, { text: "Pedro Almodóvar", points: 2 }, { text: "Bong Joon-ho", points: 2 }, { text: "Denis Villeneuve", points: 2 },
            { text: "Werner Herzog", points: 2 }, { text: "Terrence Malick", points: 2 }, { text: "Spike Lee", points: 2 }, { text: "Paul Thomas Anderson", points: 2 }, { text: "Darren Aronofsky", points: 2 },
            { text: "The Coen Brothers", points: 1 }, { text: "Tim Burton", points: 1 }, { text: "Wes Anderson", points: 1 }, { text: "Jean-Luc Godard", points: 3 }, { text: "Ingmar Bergman", points: 3 },
            { text: "Federico Fellini", points: 3 }, { text: "Akira Kurosawa", points: 2 }, { text: "Rainer Fassbinder", points: 3 }, { text: "François Truffaut", points: 3 }, { text: "Luis Buñuel", points: 3 },
            { text: "Carl Theodor Dreyer", points: 4 }, { text: "Sergei Eisenstein", points: 3 }, { text: "Yasujirō Ozu", points: 3 }, { text: "Michelangelo Antonioni", points: 3 }, { text: "Andrei Tarkovsky", points: 4 },
            { text: "Orson Welles", points: 2 }, { text: "Billy Wilder", points: 2 }, { text: "Alfred Hitchcock", points: 1 }, { text: "Walt Disney", points: 2 }, { text: "George Méliès", points: 4 },
            { text: "Dziga Vertov", points: 4 }, { text: "F.W. Murnau", points: 3 }, { text: "Robert Bresson", points: 4 }, { text: "Carl Theodor Dreyer", points: 4 }, { text: "Victor Sjöström", points: 4 },
            { text: "Hou Hsiao-hsien", points: 4 }, { text: "Wong Kar-wai", points: 2 }, { text: "Hirokazu Koreeda", points: 2 }, { text: "Hayao Miyazaki", points: 1 }, { text: "Isao Takahata", points: 3 },
            { text: "The Safdie Brothers", points: 3 }, { text: "Justin Lin", points: 2 }, { text: "James Gunn", points: 2 }, { text: "Russo Brothers", points: 1 }, { text: "Taika Waititi", points: 2 }
        ]
    }
];

// Make sure categories are exported properly
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CATEGORIES;
}
