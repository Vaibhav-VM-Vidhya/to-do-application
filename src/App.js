
import Mainpage from './Components/Mainpage';

import Taskstate from './Context/Notes/Taskstate'
function App() {
  return (
  <Taskstate>
  <div className='bg-gradient-to-r from-red-300 scroll-smooth relative to-cyan-300 h-screen w-screen overflow-scroll'>
   
    <Mainpage/>
    
    </div>
    </Taskstate>
  );
}

export default App;
