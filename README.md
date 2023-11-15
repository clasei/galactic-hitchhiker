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

**Mood Button**
- Each button in the `MoodButtonComponent` correlates to a specific mood and triggers a unique action when selected, generating a random selection of a quote included in the chosen mood

**Marvin**
- In response to the user’s selection `MarvinComponent` starts playing at the same time that the quote appears

**Hitchhiker Quotes**
- `HitchhikerQuotesComponent` displays quotes inspired by the user's mood selection
- Each quote is intended to resonate with the current mood, enhancing the user’s immersion in the experience
- Quotes are stored in `assets/data`; check the file `galaxy-hitchhiker-quotes.json` to access all the quotes and labels 

---

### Data Flow
- User selection is managed through `DataService`, which acts as a single source of truth for the selected state
- This service centralizes the logic to pick the right quote

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
