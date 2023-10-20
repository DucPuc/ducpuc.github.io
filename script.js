const words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "nectarine", "orange", "pear", "quince", "raspberry", "strawberry", "tangerine", "watermelon",
    "blueberry", "blackberry", "apricot", "cranberry", "coconut", "grapefruit", "guava", "papaya", "pineapple",
    "pomegranate", "rhubarb", "soursop", "starfruit", "boysenberry", "lychee", "kiwifruit", "persimmon", "dragonfruit",
    "cantaloupe", "lime", "avocado", "mangosteen", "passionfruit", "plantain", "tomato", "cucumber", "eggplant",
    "zucchini", "broccoli", "cauliflower", "carrot", "celery", "spinach", "lettuce", "kale", "asparagus",
    "beetroot", "potato", "sweetpotato", "bellpepper", "onion", "garlic", "ginger", "cabbage", "pumpkin", "squash",
    "cayenne", "chili", "horseradish", "jalapeno", "mustard", "wasabi", "radish", "thyme", "oregano", "parsley",
    "coriander", "basil", "rosemary", "lavender", "sage", "peppermint", "spearmint", "lemongrass", "dill", "marjoram",
    "cinnamon", "nutmeg", "cloves", "turmeric", "vanilla", "cardamom", "cumin", "paprika", "saffron", "anise",
    "fennel", "sesame", "poppy", "sunflower", "chamomile", "echinacea", "ginseng", "valerian", "chocolate", "vanilla",
    "coffee", "espresso", "cappuccino", "latte", "mocha", "americano", "macchiato", "caramel", "frappuccino",
    "espresso", "muffin", "croissant", "bagel", "pancake", "waffle", "crepe", "oatmeal", "cereal", "yogurt",
    "granola", "omelette", "quiche", "scramble", "frittata", "sushi", "sashimi", "tempura", "ramen", "udon",
    "soba", "teriyaki", "tempura", "wasabi", "kimchi", "sauerkraut", "coleslaw", "guacamole", "hummus", "tzatziki",
    "tapenade", "pesto", "salsa", "tahini", "sourdough", "ciabatta", "baguette", "pita", "brioche", "naan",
    "tortilla", "focaccia", "rye", "pumpernickel", "matzah", "croissant", "bagel", "pretzel", "danish", "muffin",
    "scone", "eclair", "cupcake", "brownie", "cannoli", "macaron", "mousse", "sorbet", "gelato", "sherbet",
    "flan", "trifle", "parfait", "cheesecake", "tiramisu", "panna cotta", "cobbler", "strudel", "pavlova", "eclair",
    "mousse", "torte", "poundcake", "sundae", "crepe", "pie", "milkshake", "smoothie", "slushie", "punch", "cider",
    "eggnog", "cocktail", "mocktail", "whiskey", "vodka", "rum", "tequila", "gin", "brandy", "wine", "champagne",
    "sunflower", "dandelion", "rose", "tulip", "lavender", "iris", "daisy", "orchid", "lily", "carnation",
    "ocean", "river", "lake", "pond", "waterfall", "stream", "beach", "desert", "mountain", "canyon",
    "elephant", "lion", "tiger", "giraffe", "cheetah", "hippopotamus", "rhinoceros", "kangaroo", "koala", "panda",
    "guitar", "piano", "violin", "trumpet", "saxophone", "drum", "flute", "harmonica", "banjo", "accordion",
    "book", "magazine", "newspaper", "dictionary", "novel", "poetry", "biography", "autobiography", "science", "history",
    "computer", "internet", "software", "hardware", "programming", "database", "algorithm", "network", "keyboard", "mouse",
    "car", "bicycle", "motorcycle", "bus", "train", "airplane", "boat", "submarine", "rocket", "helicopter",
    "cat", "dog", "rabbit", "hamster", "parrot", "goldfish", "turtle", "guinea pig", "horse", "ferret",
    "star", "moon", "planet", "galaxy", "nebula", "comet", "asteroid", "telescope", "astronaut", "spaceship",
    "coffee", "tea", "juice", "soda", "water", "milk", "smoothie", "cocktail", "cappuccino", "espresso",
    "shirt", "pants", "dress", "jacket", "shoes", "hat", "socks", "gloves", "scarf", "umbrella",
    "football", "basketball", "soccer", "tennis", "volleyball", "baseball", "hockey", "golf", "swimming", "cycling",
    "apple", "banana", "grape", "strawberry", "orange", "lemon", "blueberry", "pineapple", "mango", "kiwi",
    "pizza", "hamburger", "spaghetti", "sushi", "taco", "sandwich", "salad", "ice cream", "cake", "chocolate",
    "movie", "music", "art", "book", "dance", "theater", "poetry", "comedy", "drama", "opera",
    "beach", "mountain", "forest", "desert", "lake", "river", "waterfall", "cave", "island", "countryside",
    "ocean", "sky", "clouds", "rain", "sunshine", "moonlight", "stars", "thunderstorm", "rainbow", "fog",
    "technology", "innovation", "communication", "programming", "education", "environment", "exploration", "adventure", "creativity", "curiosity",
    "celebration", "anniversary", "happiness", "friendship", "kindness", "gratitude", "compassion", "inspiration", "motivation", "imagination",
    "chocolate", "vanilla", "strawberry", "caramel", "blueberry", "raspberry", "peppermint", "cinnamon", "mocha", "espresso",
    "laughter", "smile", "joy", "love", "hug", "kiss", "family", "togetherness", "serenity", "tranquility",
    "ocean", "mountain", "meadow", "rainforest", "waterfall", "volcano", "desert", "canyon", "archipelago", "aurora",
    "universe", "cosmos", "galaxy", "planetarium", "astronomer", "telescope", "spacesuit", "exploration", "adventure", "frontier",
    "novel", "poetry", "biography", "fantasy", "mystery", "adventure", "romance", "comedy", "history", "philosophy",
    "winter", "spring", "summer", "autumn", "blossom", "breeze", "sunshine", "rainbow", "starlight", "twilight",
    "friendship", "loyalty", "trust", "respect", "cooperation", "equality", "community", "diversity", "inclusion", "harmony",
    "piano", "violin", "guitar", "trumpet", "flute", "clarinet", "harmonica", "accordion", "xylophone", "tambourine",
    "paradise", "nirvana", "utopia", "heaven", "serenity", "tranquility", "bliss", "euphoria", "ecstasy", "happiness",
    "serendipity", "perpendicular", "phenomenal", "exquisite", "flabbergasted", "quizzical", "juxtaposition", "unbelievable", "unforgettable", "spontaneity",
    "extraordinary", "kaleidoscope", "mellifluous", "serenity", "silhouette", "effervescent", "whimsical", "elaborate", "onomatopoeia", "incredible",
    "entrepreneur", "surreptitious", "discombobulate", "antidisestablishmentarianism", "supercalifragilisticexpialidocious", "hippopotomonstrosesquipedaliophobia", "pneumonoultramicroscopicsilicovolcanoconiosis", "floccinaucinihilipilification", "sesquipedalian", "gobbledygook", "lackadaisical",
    "sophistication", "capricious", "ebullient", "ephemeral", "resplendent", "transcendent", "mesmerizing", "invigorating", "breathtaking", "unbelievable",
    "communication", "collaboration", "innovation", "imagination", "inspiration", "motivation", "perseverance", "determination", "dedication", "success",
    "wanderlust", "adventure", "exploration", "discovery", "curiosity", "wonderment", "awe-inspiring", "spectacular", "unforgettable", "remarkable",
    "gratitude", "appreciation", "thankfulness", "benevolence", "generosity", "compassion", "empathy", "forgiveness", "friendship", "togetherness",
    "celebration", "festivity", "rejoicing", "happiness", "jubilation", "enthusiasm", "exhilaration", "euphoria", "bliss", "ecstasy",
    "serenity", "tranquility", "calmness", "peacefulness", "stillness", "meditation", "relaxation", "harmony", "balance", "well-being",
    "mesmerizing", "spellbinding", "entrancing", "captivating", "engrossing", "fascinating", "enchanting", "enrapturing", "absorbing", "bewitching",
    "orchestration", "composition", "arrangement", "improvisation", "symphony", "sonata", "concerto", "operetta", "concert", "recital"
        // Add more words here
    ];

let currentWordIndex = 0;
let typedWords = 0;
let currentStreak = 0;
let bestStreak = 0;
let streakTitle = "Newbie";
let startTime;
let currentWord;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function showNewWord() {
    const wordToType = document.getElementById("word-to-type");
    const userInput = document.getElementById("user-input");
    userInput.value = "";
    currentWord = getRandomWord();
    wordToType.innerText = currentWord;
    userInput.focus();
    wordToType.style.color = "black"; // Change text color to black
    showStreak();
}

document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById("user-input");
    userInput.focus(); // Set focus to the input field when the page is loaded
});

function checkWord(event) {
    event.preventDefault(); // Prevent default behavior of the Enter key
    const userInput = document.getElementById("user-input");
    if (event.key === "Enter") {
        if (userInput.value === currentWord) {
            typedWords++;
            currentStreak++;
            userInput.classList.add("correct");
            setTimeout(() => {
                userInput.classList.remove("correct");
                showNewWord();
                updateStreak();
            }, 1000);
        } else {
            userInput.classList.add("mistyped");
            setTimeout(() => {
                userInput.classList.remove("mistyped");
                showNewWord();
                updateStreak();
            }, 1000);
        }
    }
}

function updateStreak() {
    if (currentStreak >= 50) {
        streakTitle = "Legend";
    } else if (currentStreak >= 30) {
        streakTitle = "Insane";
    } else if (currentStreak >= 20) {
        streakTitle = "Awesome";
    } else if (currentStreak >= 10) {
        streakTitle = "Impressive";
    }

    showStreak();
}

function showStreak() {
    const streakElement = document.getElementById("streak");
    streakElement.textContent = `Streak: ${currentStreak} (${streakTitle})`;
}

function endGame() {
    const endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000;
    const wpm = Math.round((typedWords / elapsedTime) * 60);
    document.getElementById("wpm").innerText = wpm;
}

function newGame() {
    typedWords = 0;
    document.getElementById("user-input").value = "";
    document.getElementById("wpm").innerText = "0";
    startGame();
}

// Add event listeners
const userInput = document.getElementById("user-input");
userInput.addEventListener("keydown", checkWord);
document.getElementById("new-game-btn").addEventListener("click", newGame);

function startGame() {
    showNewWord();
    startTime = new Date();
}

startGame();