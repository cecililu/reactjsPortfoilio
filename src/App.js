
import './App.css';
import { Resume } from './Resume';
import { NavBar } from './NavBar';
import { Intro } from './Intro';

function App() {
  return (<>
     <div className="bg-[#b4a5bb] mb-2 pb-2">
       
         <Intro/>
        </div>
        <NavBar/>
        <div class="flex justify-center sm:mx:2 md:mx-20">
          <div class="block p-6 border mt-1 shadow-lg bg-white sm:w-3/4 md:w-2/4 ">
            <h5 class="text-gray-900 text-2xl leading-tight font-medium flex justify-start mb-3">Basic Information</h5>
            <div class="grid grid-cols-2 gap-4  ">
                <div>
                  <h5 class="text-gray-900 text-md leading-tight font-medium mb-2 flex justify-start mb-3">General Information</h5>
                  <div class="grid grid-cols-1  text-sm">
                        <div className='my-1 border-b-4 border-l-4 '><span className='text-[10px]'>Name:</span><br/> Cecil Ghimire</div>
                        <div className='my-1 border-b-4 border-l-4'><span className='text-[10px]'>Address:</span><br/> Dhapakhel, Lalitpur-24, Nepal</div>
                        <div className='my-1 border-b-4 border-l-4'><span className='text-[10px]'>Education:</span><br/> Bachelors in Geomatics Engineering, Kathamandu University</div>
                        <div className='my-1 border-b-4 border-l-4'><span className='text-[10px]'>Programming Language:</span>: <br/>Python, 
                        
                        
                        Javascript<span>
                          
                        </span>
                        
                        
                        
                        
                        </div>
                        <div className='my-1 border-b-4 border-l-4'><span className='text-[10px]'>Programming Stacks:</span> <br/>React JS, Node JS, Django, Django REST Developer</div>

                      </div>

                    
                </div>
                <div className='ml-10'>
                  <h5 class="text-gray-900 text-md leading-tight font-medium mt-3 flex justify-start mb-5">About me</h5>
                    <p className=' text-sm  w-3/4 text-justify'>
                       I am a hard-working and driven individual who isn't afraid to face a challenge. I'm passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do.
                    </p>
                </div>
              </div>
            </div>
       </div>
        
   </>
  );
}

export default App;
