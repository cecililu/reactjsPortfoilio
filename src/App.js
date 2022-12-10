
import './App.css';
import { Resume } from './Resume';
import { NavBar } from './NavBar';
import { Intro } from './Intro';

function App() {
  return (<>
     <div className="bg-[#b4a5bb] mb-2 pb-2">
        <NavBar/>
         <Intro/>
        </div>
         <Resume/>
   </>
  );
}

export default App;
