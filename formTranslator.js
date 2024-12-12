function applyTranslations() {
    // Find the container where ID contains "languagetranslations" (case-insensitive)
    const translationContainer = Array.from(document.querySelectorAll('[id]')).find(field =>
        field.id.toLowerCase().includes('languagetranslations')
    );

    if (!translationContainer) {
        console.error('No container with ID containing "languagetranslations" found.');
        return;
    }

    // Hide the entire container
    translationContainer.style.display = 'none';

    // Extract the JSON from the inner `<p>` tag
    const translationContent = translationContainer.querySelector('p');
    if (!translationContent) {
        console.error('No <p> tag found inside the translation container.');
        return;
    }

    let rawJSON = translationContent.innerText || translationContent.textContent;
    let translations;

    try {
        translations = JSON.parse(rawJSON.trim());
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return;
    }

    // Get the language code from the URL (e.g., ?lng=fr)
    const urlParams = new URLSearchParams(window.location.search);
    const lng = urlParams.get('lng') || 'en'; // Default to English if no language is specified

    // Check if translations for the selected language exist
    if (!translations[lng]) {
        console.warn(`No translations found for language: ${lng}`);
        return;
    }

    // Replace tokens on the page
    const languageTokens = translations[lng];
    document.body.innerHTML = document.body.innerHTML.replace(/{{\s*%\s*([a-zA-Z0-9_]+)\s*%\s*}}/g, (match, token) => {
        return languageTokens[token] || match; // Use the token if no translation is available
    });
}

// Execute the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', applyTranslations);
