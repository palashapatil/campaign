import logo from './logo.svg';
import './App.css';
import HorizontalLinearStepper from './components/nav';
import VerticalTabs from './components/tabs';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
   <VerticalTabs/>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </div>
  );
}

export default App;
