document.addEventListener("DOMContentLoaded", function () {
    userInput.focus();
    showNewWord();
    
    // Retrieve the player's name from local storage
    const playerName = localStorage.getItem("playerName");
    if (playerName) {
        // Add the player's name to the online players section
        const onlinePlayers = document.getElementById("onlinePlayers");
        onlinePlayers.innerHTML += `<li>${playerName}</li>`;
    }
});

const words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honey", "kiwi", "lemon",
    "mango", "nectar", "orange", "pear", "quince", "berry", "straw", "tangerine", "melon",
    "blue", "black", "apricot", "cranberry", "coconut", "fruit", "guava", "papaya", "pine",
    "pomegranate", "rhubarb", "soursop", "star", "boysen", "lychee", "kiwifruit", "persimmon", "dragon",
    "cantaloupe", "lime", "avocado", "mangosteen", "passionfruit", "plantain", "tomato", "cucumber", "egg",
    "zucchini", "broccoli", "cauliflower", "carrot", "celery", "spinach", "lettuce", "kale", "asparagus",
    "beetroot", "potato", "sweet", "bell", "onion", "garlic", "ginger", "cabbage", "pumpkin", "squash",
    "cayenne", "chili", "horseradish", "jalapeno", "mustard", "wasabi", "radish", "thyme", "oregano", "parsley",
    "coriander", "basil", "rosemary", "lavender", "sage", "peppermint", "spearmint", "lemongrass", "dill", "marjoram",
    "cinnamon", "nutmeg", "cloves", "turmeric", "vanilla", "cardamom", "cumin", "paprika", "saffron", "anise",
    "fennel", "sesame", "poppy", "sunflower", "chamomile", "echinacea", "ginseng", "valerian", "chocolate", "vanilla",
    "coffee", "tea", "juice", "soda", "water", "milk", "smoothie", "cocktail", "cappuccino", "espresso",
    "shirt", "pants", "dress", "jacket", "shoes", "hat", "socks", "gloves", "scarf", "umbrella",
    "football", "basket", "soccer", "tennis", "volley", "base", "hockey", "golf", "swimming", "cycling",
    "apple", "banana", "grape", "straw", "orange", "lemon", "blue", "pine", "mango", "kiwi",
    "pizza", "burger", "pasta", "sushi", "taco", "sandwich", "salad", "ice", "cake", "choco",
    "movie", "music", "art", "book", "dance", "theater", "poetry", "comedy", "drama", "opera",
    "beach", "mountain", "forest", "desert", "lake", "river", "water", "cave", "island", "country",
    "ocean", "sky", "cloud", "rain", "sun", "moon", "star", "thunder", "rainbow", "fog",
    "tech", "innovate", "communicate", "program", "educate", "enviro", "explore", "adventure", "create", "curious",
    "celebrate", "anniversary", "happy", "friend", "kind", "grateful", "compassion", "inspire", "motivate", "imagine",
    "choco", "vanilla", "straw", "caramel", "blue", "rasp", "pepper", "cinnamon", "mocha", "espresso",
    "laugh", "smile", "joy", "love", "hug", "kiss", "family", "together", "serene", "tranquil",
    "ocean", "mountain", "meadow", "rain", "waterfall", "volcano", "desert", "canyon", "arch", "aurora",
    "universe", "cosmos", "galaxy", "planet", "astronomy", "scope", "explore", "adventure", "front", "novel",
    "poem", "bio", "fantasy", "mystery", "adventure", "romance", "comedy", "history", "phil", "winter",
    "spring", "summer", "autumn", "blossom", "breeze", "sun", "rainbow", "star", "twilight",
    "friend", "loyal", "trust", "respect", "cooperate", "equal", "commune", "diverse", "include", "harmony",
    "piano", "violin", "guitar", "trumpet", "flute", "clarinet", "harmonica", "accordion", "xylophone", "tambourine",
    "paradise", "nirvana", "utopia", "heaven", "serene", "tranquil", "bliss", "euphoria", "ecstasy", "happy",
    "serendipity", "perpendicular", "phenomenal", "exquisite", "amazed", "quizzical", "juxtaposition", "amazing", "spontaneous", "extraordinary",
    "start", "sneaky", "sophistication", "capricious", "ebullient", "ephemeral", "resplendent", "transcendent", "mesmerizing", "invigorating", "breathtaking", "amazing",
    "communicate", "collaborate", "innovate", "imagine", "inspire", "motivate", "persevere", "determine", "dedicate", "succeed",
    "wander", "adventure", "explore", "discover", "curious", "wonder", "awe", "spectacular", "unforgettable", "remarkable",
    "grateful", "appreciate", "thankful", "benevolent", "generous", "compassionate", "empathy", "forgive", "friend", "together",
    "celebrate", "festive", "rejoice", "happy", "jubilant", "enthusiastic", "exhilarate", "euphoric", "bliss", "ecstasy",
    "serene", "tranquil", "calm", "peaceful", "still", "meditate", "relax", "harmony", "balance", "well",
    "mesmerize", "spellbind", "enchant", "enrapture", "captivate", "fascinate", "enchant", "enrapture", "absorb", "bewitch",
    "orchestrate", "compose", "arrange", "improvise", "symphony", "sonata", "concerto", "operetta", "concert", "recital", "poppy", "sunflower", "chamomile", "echinacea", "ginseng", "valerian", "chocolate", "vanilla",
    "coffee", "tea", "juice", "soda", "water", "milk", "smoothie", "cocktail", "cappuccino", "espresso",
    "shirt", "pants", "dress", "jacket", "shoes", "hat", "socks", "gloves", "scarf", "umbrella",
    "football", "basket", "soccer", "tennis", "volley", "base", "hockey", "golf", "swimming", "cycling",
    "apple", "banana", "grape", "straw", "orange", "lemon", "blue", "pine", "mango", "kiwi",
    "pizza", "burger", "pasta", "sushi", "taco", "sandwich", "salad", "ice", "cake", "choco",
    "movie", "music", "art", "book", "dance", "theater", "poetry", "comedy", "drama", "opera",
    "beach", "mountain", "forest", "desert", "lake", "river", "water", "cave", "island", "country",
    "ocean", "sky", "cloud", "rain", "sun", "moon", "star", "thunder", "rainbow", "fog",
    "tech", "innovate", "communicate", "program", "educate", "enviro", "explore", "adventure", "create", "curious",
    "celebrate", "anniversary", "happy", "friend", "kind", "grateful", "compassion", "inspire", "motivate", "imagine",
    "choco", "vanilla", "straw", "caramel", "blue", "rasp", "pepper", "cinnamon", "mocha", "espresso",
    "laugh", "smile", "joy", "love", "hug", "kiss", "family", "together", "serene", "tranquil",
    "ocean", "mountain", "meadow", "rain", "waterfall", "volcano", "desert", "canyon", "arch", "aurora",
    "universe", "cosmos", "galaxy", "planet", "astronomy", "scope", "explore", "adventure", "front", "novel",
    "poem", "bio", "fantasy", "mystery", "adventure", "romance", "comedy", "history", "phil", "winter",
    "spring", "summer", "autumn", "blossom", "breeze", "sun", "rainbow", "star", "twilight",
    "friend", "loyal", "trust", "respect", "cooperate", "equal", "commune", "diverse", "include", "harmony",
    "piano", "violin", "guitar", "trumpet", "flute", "clarinet", "harmonica", "accordion", "xylophone", "tambourine",
    "paradise", "nirvana", "utopia", "heaven", "serene", "tranquil", "bliss", "euphoria", "ecstasy", "happy",
    "serendipity", "perpendicular", "phenomenal", "exquisite", "amazed", "quizzical", "juxtaposition", "amazing", "spontaneous", "extraordinary",
    "start", "sneaky", "sophistication", "capricious", "ebullient", "ephemeral", "resplendent", "transcendent", "mesmerizing", "invigorating", "breathtaking", "amazing",
    "communicate", "collaborate", "innovate", "imagine", "inspire", "motivate", "persevere", "determine", "dedicate", "succeed",
    "wander", "adventure", "explore", "discover", "curious", "wonder", "awe", "spectacular", "unforgettable", "remarkable",
    "grateful", "appreciate", "thankful", "benevolent", "generous", "compassionate", "empathy", "forgive", "friend", "together",
    "celebrate", "festive", "rejoice", "happy", "jubilant", "enthusiastic", "exhilarate", "euphoric", "bliss", "ecstasy",
    "serene", "tranquil", "calm", "peaceful", "still", "meditate", "relax", "harmony", "balance", "well",
    "mesmerize", "spellbind", "enchant", "enrapture", "captivate", "fascinate", "enchant", "enrapture", "absorb", "bewitch",
    "orchestrate", "compose", "arrange", "improvise", "symphony", "sonata", "concerto", "operetta", "concert", "recital", 
    "microphone", "speaker", "acoustic", "electric", "keyboard", "guitarist", "drummer", "vocalist", "melody", "harmony", 
    "lyrics", "amplifier", "beat", "chorus", "composition", "entertainment", "rhythm", "enthusiastic", "incredible", "passionate", 
    "audience", "perform", "musical", "genre", "talent", "instrument", "jam", "symphony", "inspiration", "acoustic",
    "lyrical", "solo", "acoustic", "piano", "violin", "guitar", "trumpet", "flute", "clarinet", "harmonica", "accordion", "xylophone",
    "tambourine", "paradise", "nirvana", "utopia", "heaven", "serene", "tranquil", "bliss", "euphoria", "ecstasy", "happy",
    "serendipity", "perpendicular", "phenomenal", "exquisite", "amazed", "quizzical", "juxtaposition", "amazing", "spontaneous", "extraordinary",
    "start", "sneaky", "sophistication", "capricious", "ebullient", "ephemeral", "resplendent", "transcendent", "mesmerizing", "invigorating", "breathtaking", "amazing",
    "communication", "collaboration", "innovation", "imagination", "inspiration", "motivation", "perseverance", "determination", "dedication", "success",
    "wanderlust", "adventure", "exploration", "discovery", "curiosity", "wonderment", "awe-inspiring", "spectacular", "unforgettable", "remarkable",
    "gratitude", "appreciation", "thankfulness", "benevolence", "generosity", "compassion", "empathy", "forgiveness", "friendship", "togetherness",
    "celebration", "festivity", "rejoicing", "happiness", "jubilation", "enthusiasm", "exhilaration", "euphoria", "bliss", "ecstasy",
    "serenity", "tranquility", "calmness", "peacefulness", "stillness", "meditation", "relaxation", "harmony", "balance", "well-being",
    "mesmerizing", "spellbinding", "entrancing", "captivating", "engrossing", "fascinating", "enchanting", "enrapturing", "absorbing", "bewitching",
    "orchestration", "composition", "arrangement", "improvisation", "symphony", "sonata", "concerto", "operetta", "concert", "recital", 
    "microphone", "speaker", "acoustic", "electric", "keyboard", "guitarist", "drummer", "vocalist", "melody", "harmony", 
    "lyrics", "amplifier", "beat", "chorus", "composition", "entertainment", "rhythm", "enthusiastic", "incredible", "passionate", 
    "audience", "perform", "musical", "genre", "talent", "instrument", "jam", "symphony", "inspiration", "acoustic",
    "lyrical", "solo", "acoustic"
        // Add more words here
];


    let currentWordIndex = 0;
let currentStreak = 0;
let startTime;
let currentWord;
let processingEnter = false; // Flag to prevent multiple Enter key presses

const userInput = document.getElementById("user-input"); // Declare userInput here

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function showNewWord() {
    const wordToType = document.getElementById("word-to-type");
    userInput.value = ""; // No need to redeclare userInput
    currentWord = getRandomWord();
    wordToType.innerText = currentWord;
    userInput.focus();
    wordToType.style.color = "black";
    wordToType.style.userSelect = "none"; // Make the word unselectable
    showStreak();
}

document.addEventListener("DOMContentLoaded", function() {
    userInput.focus(); // Set focus to the input field when the page is loaded
    showNewWord(); // Show the initial word
});

function checkWord(event) {
    if (processingEnter) {
        return;
    }

    if (event.key === "Enter") {
        processingEnter = true;
        if (userInput.value === currentWord) {
            currentStreak++;
            userInput.classList.add("correct");
            setTimeout(() => {
                userInput.classList.remove("correct");
                showNewWord();
                processingEnter = false;
            }, 1000);
        } else {
            userInput.classList.add("mistyped");
            currentStreak = 0; // Reset the streak on mistype
            showStreak();
            setTimeout(() => {
                userInput.classList.remove("mistyped");
                showNewWord();
                processingEnter = false;
            }, 1000);
        }
    }
}


function showStreak() {
    const streakElement = document.getElementById("streak");
    streakElement.textContent = `Streak: ${currentStreak}`;
}

function newGame() {
    currentStreak = 0;
    userInput.value = "";
    showNewWord(); // Start a new game by showing the first word
}

// Add event listeners
userInput.addEventListener("keydown", checkWord);
document.getElementById("new-game-btn").addEventListener("click", newGame);

    
    function startGame() {
        showNewWord();
        startTime = new Date();
    }
    
    startGame();

// Define an array to store leaderboard data
const leaderboardData = [];
let currentPlayerName; // Variable to store the current player's name

function updateLeaderboard() {
    // Sort leaderboard data by streak in descending order
    leaderboardData.sort((a, b) => b.streak - a.streak);

    const leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = "";

    // Display the top 10 players on the leaderboard
    leaderboardData.slice(0, 10).forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${entry.playerName}: ${entry.streak}`;
        leaderboardElement.appendChild(li);
    });
}

function addToLeaderboard(playerName, streak) {
    // Check if the player's name already exists in the leaderboard
    const existingEntry = leaderboardData.find((entry) => entry.playerName === playerName);

    if (existingEntry) {
        // Update the streak if the player already exists
        existingEntry.streak = streak;
    } else {
        // Add a new entry if the player doesn't exist
        leaderboardData.push({ playerName, streak });
    }

    updateLeaderboard();
}

function addOnlinePlayer(playerName) {
    // Check if the player's name already exists in the online players list
    const onlinePlayers = document.getElementById("onlinePlayers");
    if (!Array.from(onlinePlayers.children).some((li) => li.textContent === playerName)) {
        const li = document.createElement("li");
        li.textContent = playerName;
        onlinePlayers.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    userInput.focus();
    showNewWord();

    // Retrieve the player's name from local storage
    currentPlayerName = localStorage.getItem("playerName");

    if (currentPlayerName) {
        // Add the player to the online players
        addOnlinePlayer(currentPlayerName);
    }

    // Event listener for "Enter" key to update the leaderboard
    userInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            // Get the current streak
            const currentStreak = parseInt(document.getElementById("streak").textContent.split(" ")[1]);

            if (!isNaN(currentStreak)) {
                // Update the leaderboard if there's a streak
                addToLeaderboard(currentPlayerName, currentStreak + 1); // Increment streak by 1
            }
        }
    });
});
    