
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
          { index: true, 
            element: <EventsPage/>, 
            loader: async () => {
            const response = await fetch('http://localhost:8080/events');

            if (!response.ok) {
            } else {
              const resData = await response.json();
              return resData.events;
            }

          }},
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
