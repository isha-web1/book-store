import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
 

  return (
    <>
       <Navbar />
        <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
          <Outlet />
        </main>
        <h1>Footer here</h1>
    </>
  );
}

export default App;
