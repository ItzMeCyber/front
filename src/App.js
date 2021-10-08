import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Foot from './Components/frontFoot';
// import { Button } from '@material-ui/core';
// import Form from './Components/form';
// import Form2 from './Components/form2';
// import Api from './Components/tableapi';
// import Exp from './Components/count';
// import Text from './Components/frontForm';
import Nav from './Components/frontnav';




function App() {

  return (<React.Fragment>
    < div className="d-1">
  
  <Nav/>
  <Foot/>
 

    </div>
  </React.Fragment>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
