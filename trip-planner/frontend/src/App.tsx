import './App.css';
import AddTrip from './components/AddTripForm';
import TripList from './components/TripList';
import { useCollection, useQuery } from '@squidcloud/react';
import { Trip } from './types';

function App() {
  const collection = useCollection<Trip>('trips');
  const trips = useQuery(collection.query());

  const onDelete = (id: string) => {};
  const onAddNote = (tripId: string, note: string) => {};
  const onDeleteNote = (tripId: string, noteIndex: number) => {};

  return (
    <>
      <AddTrip />
      <TripList
        trips={trips.data.map((trip) => trip.data)}
        onDelete={onDelete}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
      />
    </>
  );
}

export default App;
