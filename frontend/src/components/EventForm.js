import { 
  Form, 
  useNavigate, 
  useNavigation,
  useActionData, 
  redirect, 
  json 
} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
          <ul>
              {data.errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
          </ul>
        )  
      }

      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.event.title : '' } />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.event.image : '' } />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.event.date : '' } />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.event.description : '' } />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting} >Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({request, params}) {
  const method = request.method;
  const formData = await request.formData();

  const event = {
    title: formData.get('title'),
    image : formData.get('image'),
    description: formData.get('description'),
    start: formData.get('date'),
  };

  let url = 'http://localhost:8080/events';

  if (method === 'PATCH') {
    url += `/${params.eventId}`;
  }


  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Something went wrong in event details!" }, { status: 500 });
  }

  return redirect('/events');
}
