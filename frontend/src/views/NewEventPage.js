import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';

function NewEventPage() {
  return <EventForm/>;
}

export default NewEventPage;

export async function action({request, params}) {
  const formData = await request.formData();

  const event = {
    title: formData.get('title'),
    image : formData.get('image'),
    description: formData.get('description'),
    start: formData.get('date'),
  };

  const response = fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  });

  if (!response.ok) {
    throw json({ message: "Something went wrong in event details!" }, { status: 500 });
  }

  return redirect('/events');
}