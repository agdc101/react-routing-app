
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./views/HomePage";
import EventDetailPage, { loader as eventDetailLoader } from "./views/EventDetailPage";
import NewEventPage, { action as newEventAction } from "./views/NewEventPage";
import EditEventPage from "./views/EditEventPage";
import Root from "./views/Root";
import EventsRoot from "./views/EventsRoot";
import EventsPage, { loader as eventsLoader } from "./views/EventsPage";
import ErrorPage from "./views/Error";

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
                element: <EventDetailPage/>              
              },
              { 
                path: "edit", 
                element: <EditEventPage/> 
              },
            ] 
          },
          { 
            path: "new", 
            element: <NewEventPage/>,
            action: newEventAction
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
