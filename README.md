# Sarmad's Personal Website - Improved Version

This is an improved version of Sarmad's personal portfolio website.

## Improvements Made:

1.  **Internationalization (i18n):**
    *   All user-facing text is now managed through JSON files (`locales/en.json` and `locales/ar.json`).
    *   JavaScript dynamically fetches and applies the correct language based on user selection or `localStorage`.
    *   This makes adding/editing text content much easier without modifying the JavaScript code.

2.  **Code Structure & Maintainability:**
    *   JavaScript (`script.js`) has been significantly refactored into smaller, well-commented functions for better readability and maintainability (e.g., `fetchTranslations`, `updateContent`, `setupLanguageToggle`, `setupThemeToggle`, etc.).
    *   CSS (`styles.css`) has been reviewed, and comments added.

3.  **Performance:**
    *   Google Fonts import now uses `display=swap` to improve font loading performance and reduce layout shifts.
    *   Section visibility animations now use `IntersectionObserver` for better performance compared to scroll event listeners.
    *   Loading animation logic reviewed.

4.  **Accessibility (A11y):**
    *   Added/verified `aria-label` attributes for interactive elements like language toggle, theme toggle, and social media links.
    *   Added CSS focus styles (`outline`) for better keyboard navigation visibility.
    *   Checked color contrast (basic review, further checks might be needed with specific tools).

5.  **UI/UX Refinements:**
    *   Improved the smoothness of the page transition animation during language switching using `cubic-bezier` easing.
    *   Added a "Back to Top" button that appears on scroll for easier navigation on longer pages.
    *   Ensured hover effects are present on interactive elements like skill items and project items.

6.  **HTML:**
    *   Added `data-translate-key` attributes to elements for the new i18n system.
    *   Fixed minor structural issues (e.g., missing closing tag).

## File Structure:

```
/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles
├── script.js           # JavaScript logic
├── locales/
│   ├── ar.json         # Arabic translations
│   └── en.json         # English translations
├── package.json        # Project metadata (Note: Backend not implemented)
├── package-lock.json   # Dependency lock file
└── README.md           # This file
```

## How to Update Content:

*   **Text Content:** To change any text on the website (e.g., the "About Me" section, skill descriptions), edit the corresponding string values in `locales/en.json` for English and `locales/ar.json` for Arabic. Make sure the keys (e.g., `"aboutContent"`) remain the same.
*   **Styling:** Modify `styles.css`.
*   **Functionality:** Modify `script.js`.

## Running Locally:

Since this is a static website (HTML, CSS, JS), you can simply open the `index.html` file in your web browser. No build step or server is required for the current features.

*(Note: The `package.json` file includes dependencies like Express, suggesting a potential backend was planned. However, no backend code was provided or implemented in this version. The site currently functions purely on the frontend.)*
