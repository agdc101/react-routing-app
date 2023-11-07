
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./views/HomePage";
import EventDetailPage from "./views/EventDetailPage";
import NewEventPage from "./views/NewEventPage";
import EventsPage from "./views/EventsPage";
import EditEventPage from "./views/EditEventPage";
import Root from "./views/Root";
import EventsRoot from "./views/EventsRoot";

const BrowserRouter = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: "events",
        element: <EventsRoot/>,
        children: [
          { index: true, element: <EventsPage/> },
          { path: "new-event", element: <NewEventPage/> },
          { path: ":eventId", element: <EventDetailPage/> },
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
