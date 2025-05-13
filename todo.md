# Website Improvement Plan (todo.md)

This file outlines the steps to improve the personal portfolio website.

- [X] **Step 1: Refactor Language Handling**
    - [X] Create `locales` directory.
    - [X] Create `locales/ar.json` with Arabic text strings.
    - [X] Create `locales/en.json` with English text strings.
    - [X] Modify `script.js` to fetch translations asynchronously from JSON files.
    - [X] Update `setLanguage` function (now `updateContent`) in `script.js` to use fetched translations.
    - [X] Remove hardcoded text from `script.js`.
    - [X] Update HTML with `data-translate-key` attributes.
- [X] **Step 2: Improve Code Structure & Maintainability**
    - [X] Refactor `script.js` into smaller, focused functions/modules.
    - [X] Add comments to `script.js` and `styles.css` where necessary.
    - [X] Review and optimize `styles.css` (e.g., check for redundancy).
- [X] **Step 3: Enhance Performance**
    - [X] Add `font-display: swap;` to `@font-face` rules or Google Fonts import if applicable (already using Google Fonts import, check if optimization needed).
    - [X] Review loading animation logic for potential improvements.
- [X] **Step 4: Improve Accessibility (A11y)**
    - [X] Add/Verify `aria-label` attributes for interactive elements (language toggle, theme toggle, social links).
    - [X] Check color contrast ratios for both light and dark themes.
    - [X] Test keyboard navigation flow.
    - [X] Add focus styles.
- [X] **Step 5: Refine UI/UX**
    - [X] Improve smoothness of language switch transition.
    - [X] Add subtle hover effects/transitions to elements like skill items or project items if missing.
    - [X] Ensure consistent spacing and alignment across sections.
- [X] **Step 6: Add "Back to Top" Button**
    - [X] Add HTML structure for the button.
    - [X] Add CSS styling for the button (visibility based on scroll position).
    - [X] Add JavaScript logic for scroll-to-top functionality and button visibility.
- [X] **Step 7: Final Testing**
    - [X] Test language switching thoroughly.
    - [X] Test theme switching thoroughly.
    - [X] Test responsiveness on different screen sizes.
    - [X] Test animations and transitions.
    - [X] Cross-browser testing (if possible).
- [X] **Step 8: Documentation**
    - [X] Create a brief `README.md` explaining the project structure and how to update content (especially languages).
