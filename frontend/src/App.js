
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./views/HomePage";
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from "./views/EventDetailPage";
import NewEventPage from "./views/NewEventPage";
import EditEventPage from "./views/EditEventPage";
import Root from "./views/Root";
import EventsRoot from "./views/EventsRoot";
import EventsPage, { loader as eventsLoader } from "./views/EventsPage";
import ErrorPage from "./views/Error";
import { action as manipulateEventAction } from "./components/EventForm";

const BrowserRouter = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: "events",
        element: <EventsRoot/>,
        children: [
          { 
            index: true, 
            element: <EventsPage/>, 
            loader: eventsLoader 
          },
          { 
            path: ":eventId",
            id: "event-detail", 
            loader: eventDetailLoader,
            children: [
              { 
                index: true, 
                element: <EventDetailPage/>,
                action: deleteEventAction              
              },
              { 
                path: "edit", 
                element: <EditEventPage/>,
                action: manipulateEventAction 
              },
            ] 
          },
          { 
            path: "new", 
            element: <NewEventPage/>,
            action: manipulateEventAction
          },
        ],
      }
    ],
  }

]);

function App() {
  return <RouterProvider router={BrowserRouter}></RouterProvider>;
}

export default App;
