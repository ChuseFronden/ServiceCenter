import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RequestList from "./components/RequestList";
import Filter from "./components/Filter";



class App extends React.Component{
  render(){
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Service Center
            </Typography>
          </Toolbar>
        </AppBar>

       <RequestList />
       <Filter />
      </div>
    );
  }
}

export default App;
