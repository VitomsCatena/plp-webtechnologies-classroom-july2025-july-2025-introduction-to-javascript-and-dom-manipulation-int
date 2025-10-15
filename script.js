// PART 1: Variable Declarations and Conditionals
// =========================================================

// Constant Declaration (cannot be reassigned)
const MAX_SCORE = 100;

// Block-scoped Variable Declaration (can be reassigned)
let currentScore = 85; 

// Array Declaration
const achievements = ["Init", "Func", "Loop", "DOM"];

// Conditional Logic (runs immediately on script load)
const statusElement = document.getElementById('conditionalOutput');

if (currentScore > 90) {
    statusElement.textContent += ` Your score of ${currentScore} is excellent!`;
    statusElement.classList.add('text-green-600'); 
} else if (currentScore >= 75) {
    statusElement.textContent += ` Your score of ${currentScore} is good! Keep going!`;
    statusElement.classList.add('text-yellow-600');
} else {
    statusElement.textContent += ` Your score of ${currentScore} needs improvement.`;
    statusElement.classList.add('text-red-600');
}

// =========================================================
// PART 2: At Least 2 Custom Functions
// =========================================================

/**
 * Function 1: Calculates a modified score based on a bonus multiplier.
 * @param {number} score - The base score.
 * @returns {number} The calculated score, capped at MAX_SCORE.
 */
function calculateBonusScore(score) {
    const multiplier = 1.15; // Local const
    let newScore = Math.min(score * multiplier, MAX_SCORE);
    return Math.round(newScore);
}

/**
 * Function 2: Creates a personalized greeting string.
 * @param {string} name - The user's name.
 * @returns {string} A personalized greeting.
 */
function createGreeting(name) {
    // Trim whitespace and capitalize the first letter for a clean output
    const cleanName = name.trim();
    if (cleanName.length === 0) return "Hello, Anonymous User!";
    
    return `Welcome back, ${cleanName}! We've boosted your score.`;
}


// =========================================================
// PART 3: At Least 2 Loop Examples
// =========================================================

function runLoops() {
    let outputText = "--- Loop Results ---\n";
    let arrayLog = "Achievements Unlocked: ";
    
    // Loop Example 1: Standard 'for' loop (Iterating over an Array)
    for (let i = 0; i < achievements.length; i++) {
        arrayLog += achievements[i];
        if (i < achievements.length - 1) {
            arrayLog += " -> ";
        }
    }
    outputText += arrayLog + "\n";


    // Loop Example 2: 'while' loop (Simple Counter/Condition Check)
    let counter = 0;
    let whileLog = "While Loop Count: ";
    while (counter < 4) {
        whileLog += counter + (counter < 3 ? ", " : "");
        counter++;
    }
    outputText += whileLog + "\n";
    
    // Part 4: DOM Interaction 3 (Update Loop Output)
    const loopElement = document.getElementById('loopOutput');
    loopElement.textContent = outputText;
    loopElement.classList.remove('italic'); // DOM Interaction 4 (Change style)
}


// =========================================================
// PART 4: At Least 3 DOM Interactions (Triggered by Button Click)
// =========================================================

function calculateAndGreet() {
    // DOM Interaction 1: Read value from an Input Field
    const inputElement = document.getElementById('userName');
    const userName = inputElement.value;

    // Use Part 2 Functions
    const finalScore = calculateBonusScore(currentScore);
    const greetingMessage = createGreeting(userName);
    
    // DOM Interaction 2: Change the content of the greeting header
    const greetingElement = document.getElementById('greetingOutput');
    greetingElement.textContent = greetingMessage;

    // DOM Interaction 3: Update the calculated result display
    const calcOutputElement = document.getElementById('calcOutput');
    calcOutputElement.textContent = `${finalScore}/${MAX_SCORE}`;
    
    // DOM Interaction 4: Change the styling/appearance of the button (using Tailwind classes)
    const btn = document.getElementById('functionBtn');
    btn.textContent = "Recalculate & Greet";
    btn.classList.add('ring-4', 'ring-green-300'); // Add a visual ring to show interaction
}

// Initialize greeting on load (Runs after all HTML elements are loaded)
const initialName = document.getElementById('userName').value;
document.getElementById('greetingOutput').textContent = createGreeting(initialName);

