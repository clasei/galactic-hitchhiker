## Galactic Hitchhiker

> there's a frood who really knows where his towel is

---

→ Huge thanks to [**Douglas Adams**](https://en.wikipedia.org/wiki/Douglas_Adams) for making this possible, and everything else

→ Dive into the code and experience the galactic adventure that awaits with each mood at [**Galactic Hitchhiker**](https://github.com/clasei/galactic-hitchhiker)

→ Always remember: **DON'T PANIC** 🚀

---

### Overview

**Galactic Hitchhiker** is a Single-Page Application (SPA) that guides users through an interactive mood-based journey and offers different experiences using [**The Hitchhiker Guide to the Galaxy**](https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy) unvaluable knowledge

---

### Components

**Mood Selector**
- Users begin their journey by selecting a mood from a set of buttons within the `MoodSelectorComponent`
- The `MoodSelectorComponent` is responsible for displaying mood options to the user
- When a mood is selected, it sets the `selectedMood` state and emits an event to inform parent components of the change

**Mood Button**
- Each button in the `MoodButtonComponent` correlates to a specific mood and triggers a unique action when selected, generating a random selection of a quote included in the chosen mood
- The `MoodButtonComponent` receives a `mood` as input and displays it as a button
- It also tracks whether it is the currently active mood
- On click, it emits the `mood` value to the `MoodSelectorComponent`, signaling a user's choice

**Marvin**
- In response to the user’s selection `MarvinComponent` starts playing at the same time that the quote appears

**Hitchhiker Quotes**
- `HitchhikerQuotesComponent` displays quotes inspired by the user's mood selection
- Each quote is intended to resonate with the current mood, enhancing the user’s immersion in the experience
- All quotes are stored in `assets/data`; check the file `galaxy-hitchhiker-quotes.json` to access all the quotes and labels
- The `HitchhikerQuotesComponent` listens for changes in mood from the `MoodSelectorComponent`
- Upon receiving a new mood, it consults the `DataService` to fetch a relevant quote
- This component uses Angular's `OnChanges` lifecycle hook to detect when the input `selectedMood` changes
- When a change is detected, and if the new mood is not null, it calls `getQuotesByMood()` from the `DataService` to retrieve a quote associated with the new mood
- The retrieved quote is then stored in the `selectedQuote` property, ready to be displayed to the user

---

### Data Flow
- User selection is managed through `DataService`, which acts as a single source of truth for the selected state
- This service centralizes the logic to pick the right quote

**DataService**
- `DataService` serves as the central hub for managing and accessing quotes related to the user's selected mood
- `getQuotes()` retrieves the complete list of quotes from the local JSON data store
- `getQuotesByMood(mood: string)` filters and returns a random quote that aligns with the specified mood category

Upon invoking `getQuotesByMood`, it:
1. Filters `quotesData` to find all quotes with a category matching the given mood
2. Selects a random quote from the filtered list to provide variety in user experience
3. Returns the selected quote to be displayed by the `HitchhikerQuotesComponent`

The service implements efficient data retrieval methods ensuring minimal overhead and quick response times for an optimized user experience.

---

### AppComponent Logic

- `AppComponent` serves as the orchestrator for the entire SPA, initializing components and managing their interactions.
- Utilizes Angular's `OnInit` lifecycle hook to kickstart the application's logic by fetching initial data using `DataService`.
- Relies on `ViewChild` to reference the `MarvinComponent`, allowing it to control video playback in response to user interactions.
- The `onMoodChosen` method is pivotal in reacting to mood selections. It sets the current mood and triggers Marvin's video playback, linking user choice to an immediate visual response.
- In a delightful alignment with the universe's sense of humor, the logic in `AppComponent` culminates in exactly **42** lines — the answer to life, the universe, and everything!

---

### Responsive Design
- The app adjusts to a variety of devices, maintaining consistency and functionality through responsive design

### User Interaction
- The SPA is designed to be intuitive and easy to navigate, emphasizing simplicity and clarity
- Friendly interactions and engaging visual styles are used to enhance the user experience

---

### Conclusion
- Galactic Hitchhiker aims to provide an engaging and thoughtful experience that adapts to the user, while maintaining a clean interface and efficient code

---

### Feedback, Forks & Contributions

Feel free to open an issue if you have any suggestion

Interested in contributing or customizing? Fork the project

Thoughts? Write to [**clasei@proton.me**](mailto:clasei@proton.me)

```[ build, don't talk ]```
