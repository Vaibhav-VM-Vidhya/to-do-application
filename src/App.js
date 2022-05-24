
import Mainpage from './Components/Mainpage';
import Addtask from './Components/Tasks/Addtask';

function App() {
  return (<div className='bg-gradient-to-r from-sky-300 scroll-smooth relative to-indigo-400 h-screen w-screen overflow-scroll'>
    <Addtask/>
    <Mainpage/>
    
    </div>
  );
}

export default App;
