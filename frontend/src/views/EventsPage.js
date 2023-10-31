import { NavLink } from "react-router-dom";

const dummy_events = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Learn the basics of programming in Python!",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "You don't have to be extrovert to network!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You don't have to be introvert to network!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
  },
];


function EventsPage() {
  return (
    <div>
      <h1>The Events Page</h1>
      <ul>
        {dummy_events.map((event) => {
            return (
              <li key={event.id}>
                <NavLink className="test" to={`${event.id}`}>{event.title}</NavLink>
              </li>
            );
          })
        } 
      </ul>
    </div>
  )
}

export default EventsPage;