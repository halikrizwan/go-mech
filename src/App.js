import React from 'react'
import Navbar from './components/Navbar';
import SideModal from './components/SideModal';

const App = () => {
  return (
    <div className="background">
      <Navbar/>
      <SideModal/>
    </div>
  );
}

export default App;
