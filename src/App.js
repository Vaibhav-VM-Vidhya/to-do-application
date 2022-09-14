
import Mainpage from './Components/Mainpage';
import Addtask from './Components/Tasks/Addtask';
import Taskstate from './Context/Notes/Taskstate'
function App() {
  return (
  <Taskstate>
  <div className='bg-gradient-to-r from-red-300 scroll-smooth relative to-cyan-300 h-screen w-screen overflow-scroll'>
    <Addtask/>
    <Mainpage/>
    
    </div>
    </Taskstate>
  );
}

export default App;
