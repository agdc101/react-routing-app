// Challenge / Exercise

// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage


// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsNavigation from "./components/EventsNavigation";
import HomePage from "./views/HomePage";
import EventsPage from "./views/EventsPage";
import EventDetailPage from "./views/EventDetailPage";
import NewEventPage from "./views/NewEventPage";
import EditEventPage from "./views/EditEventPage";
import Root from "./views/Root";

const BrowserRouter = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    children: [
      { path: "", element: <HomePage/> },
      { path: "events", element: (
          <>
            <EventsNavigation/>
            <EventsPage/>
          </>
        ),
        children: [
          { path: ":eventId", element: <EventDetailPage/> },
          { path: "new", element: <NewEventPage/> },
          { path: ":eventId/edit", element: <EditEventPage/> },
        ],
      }
    ],
  }

]);

function App() {
  return <RouterProvider router={BrowserRouter}></RouterProvider>;
}

export default App;
