import { Toaster } from 'react-hot-toast';
import './App.css';
import AppointmentForm from './components/AppointmentForm';

function App() {
  return (
    <div>
      <AppointmentForm />
      <Toaster />
    </div>
  );
}

export default App;
