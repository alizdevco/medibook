# MediBook

A doctor discovery and appointment booking app built with React. Browse specialists, filter by specialty, city, insurance, and rating, then book a time slot directly from the doctor's profile.

**[Live Demo](https://medibook-ochre.vercel.app/)**



---

## Features

- Search doctors by name, specialty, or city
- Filter by specialty, city, insurance, minimum rating, and availability
- Sort results by rating, experience, or price
- Paginated doctor listing (6 per page)
- Doctor profile page with available time slots
- Appointment booking flow with confirm / edit / cancel states
- Appointments dashboard with upcoming, past, and cancelled tabs
- Skeleton loading states
- Responsive layout with mobile drawer navigation
- Route-based code splitting with `React.lazy` and `Suspense`

---

## Tech Stack

- **React 18** — component architecture, hooks, context
- **React Router v6** — `createBrowserRouter`, `loader` functions, `useRouteLoaderData`
- **Context API** — global appointments state
- **Custom Hooks** — `useFilteredDoctors`, `useFilter`, `useDateSlotPicker`, `useBookingStatus`, `useFetchProfile`
- **JSON Server** — mock REST API
- **Vercel** — deployment

---

## Architecture Notes

Data for the doctors list is fetched once at the root route level via a React Router `loader` and shared across pages using `useRouteLoaderData`. This avoids redundant fetches when navigating between Home and Doctors.

Filtering is handled entirely on the client with `useMemo` — no refetch on filter change. The `useFilteredDoctors` hook takes the full doctor list plus active filters and returns a derived list, keeping the filtering logic isolated from the UI.

Booking state is managed with `useReducer` inside `useBookingStatus`, separating the state machine (idle → selecting → confirmed) from the component that renders it.

---

## Getting Started

```bash
git clone https://github.com/your-username/medibook.git
cd medibook
npm install
npm run dev
```

To run the mock API:

```bash
npx json-server --watch db.json --port 3001
```

---

## What I'd improve next

- Replace JSON Server with Supabase for a real backend
- Add React Query for caching and background refetching
- Migrate to TypeScript
- Add authentication
