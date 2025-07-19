document.addEventListener('DOMContentLoaded', () => {
    // This object holds all the recommendation data.
    // It acts as our "database" within the script.
    const citySuggestions = {
        happy: {
            bestCity: "Barcelona, Spain",
            bestCityDescription: "Vibrant streets, sunshine, music, beaches, and festivals await!",
            indianAlternative: "Pune, Maharashtra",
            indianAlternativeDescription: "Youthful energy, great food, nightlife, and a blend of modern and traditional culture."
        },
        cozy: {
            bestCity: "Kyoto, Japan",
            bestCityDescription: "Find peace in its wooden homes, ancient temples, and quiet, beautiful streets.",
            indianAlternative: "McLeod Ganj, Himachal Pradesh",
            indianAlternativeDescription: "Enjoy cozy cafés, mountain views, and calm mornings with mist and tea."
        },
        adventurous: {
            bestCity: "Queenstown, New Zealand",
            bestCityDescription: "The world's adventure capital offers skydiving, rafting, trekking, and more.",
            indianAlternative: "Rishikesh, Uttarakhand",
            indianAlternativeDescription: "Experience river rafting, cliff jumping, and spiritual thrills by the Ganga."
        },
        bored: {
            bestCity: "Berlin, Germany",
            bestCityDescription: "Escape boredom with endless art, underground parties, and unique museums.",
            indianAlternative: "Bangalore, Karnataka",
            indianAlternativeDescription: "A hub of creativity with indie music, great food, and spontaneous events."
        }
    };

    // Get references to the HTML elements we need to interact with
    const moodButtons = document.querySelectorAll('.mood-btn');
    const resultContainer = document.getElementById('result-container');
    const suggestionContentDiv = document.getElementById('suggestion-content');

    // Add a 'click' event listener to each mood button
    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Get the mood from the button's 'data-mood' attribute
            const mood = button.getAttribute('data-mood').toLowerCase();
            
            // 2. Look up the suggestion in our data object
            const suggestion = citySuggestions[mood];

            // 3. If a suggestion is found, display it
            if (suggestion) {
                displayResults(suggestion);
            }
        });
    });

    /**
     * This function takes the suggestion data and injects it into the HTML.
     * @param {object} data - The suggestion object with city details.
     */
    function displayResults(data) {
        // Create the HTML for the two city cards
        suggestionContentDiv.innerHTML = `
            <div class="city-card">
                <div class="card-label">Top Destination</div>
                <h3>${data.bestCity}</h3>
                <p>${data.bestCityDescription}</p>
            </div>
            <div class="city-card">
                <div class="card-label">Indian Alternative</div>
                <h3>${data.indianAlternative}</h3>
                <p>${data.indianAlternativeDescription}</p>
            </div>
        `;

        // Make the result container visible with a smooth animation
        resultContainer.classList.remove('hidden');
        setTimeout(() => {
            resultContainer.classList.add('visible');
        }, 10); 
    }
});
