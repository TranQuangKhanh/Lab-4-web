# Lab 4 - React Intermediate

This project contains implementations and answers for the Lab 4 exercises.

Setup

1. npm install
2. npm run dev

What is included

- Section answers in `src/answers/*.md`
- Components for exercises in `src/components` and pages in `src/pages`
  - `MouseTracker`, `UncontrolledLogin`, `PostFetcher`, `ControlledSignup`, `LocalCounter`, `Dashboard`, `PostDetail`, etc.
- Custom hooks in `src/hooks` (`useLocalStorage`, `useFetch`)
- Contexts in `src/context` (`ThemeContext`, `AuthContext`)

Quick manual checks

- Open `/` (Login) and click "Log In" to be redirected to `/dashboard` (which is protected).
- Dashboard lists posts and links to `/dashboard/post/:id` for details.
- `LocalCounter` persists across reload via localStorage.
- `MouseTracker` logs mouse coordinates to the console when mounted.

Files of interest:

- `src/App.jsx` — router and providers
- `src/answers/` — written answers to the conceptual questions

Run

- `npm install`
- `npm run dev`
