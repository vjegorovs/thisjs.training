## thisJS.training

> A small app for testing your understanding of this in various JavaScript scenarios

A questionnaire webapp combining a Vue3 + TS for Frontend and a rudimentary TS-Node Backend, communicating via REST

**WIP project**

<details><summary><b>Full list of Main Tech used</b></summary>

Frontend:

- **Vue 3**: Exploring Vue 3 possibilities since its move to RC stage. Main reasons - better TS support and willingness to explore the Composition API vs previous Options API
- **TypeScript**
- **Jest**: Unit/component testing
- **GSAP**: Misc animations
- **Highlight.js**: Code highlighting
- **Vite**: Build tool with ESM imports for more responsive dev environment. More info [here](https://github.com/vitejs/vite)

Backend:

- **TS-Node**
- **Express**
- **Jest**
</details>

### Local Setup

Requires two terminal windows

```cmd
git clone https://github.com/vjegorovs/thisjs.training
cd backend
npm install
npm run start
```

```cmd
cd ../frontend
npm install
npm run dev
```

- **Result**: Backend API available at `localhost:3333` and FrontEnd is on `localhost:3000`
  TODO: npm-run-all from root to shorten just to two commands

## Design decisions

#### Why not just have questions on the fronend?

- I've wanted to work a bit with Backend tech, even the most basic one. Idea was that the full question list is not available as a whole on the frontend. Additionally to practise async request.

#### Why Composition API?

- It's a new way of writing Vue, as well as supposedly the way to go. I am not sure yet, nor do I have sufficient experience with the Options API to clearly say one is superior to the other one, however I am sure glad that no longer I need to type `this.` when working with data within the component.
