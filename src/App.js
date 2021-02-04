import React from 'react';
import './App.css';
import Profilecomponent from './Profile/Profilecomponent';
import img1 from './Profile/img1.png';

const App = () => {
  function handleName() {
    return (alert('Safa Ben Jemaa'));

  }
  return (
    <div className="App"> 
      <Profilecomponent fullname='Safa Ben Jemaa' bio='Student' profession='Model' Name={handleName} >

      <img style={{width:200,borderRadius:100}} src={img1} alt='photoprofile' />
      </Profilecomponent>

</div>
  );
}

export default App;
