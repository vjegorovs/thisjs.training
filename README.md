## thisJS.training

> A small app for testing your understanding of this in various JavaScript scenarios

A questionnaire webapp combining a Vue3 + TS for Frontend and a rudimentary TS-Node Backend, communicating via REST

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

### Local Setup:

```cmd
git clone https://github.com/vjegorovs/thisjs-training`
cd backend
npm install
npm run start
cd ..
cd frontend
npm install
npm run dev
```

- **Result**: Backend API available at `localhost:3333` and FrontEnd is on `localhost:3000`
  TODO: npm-run-all from root to shorten just to two commands
