import React,{Component}from 'react';
import Whether from './Whether';

 

class App extends Component
{
 constructor(props)
 {
   super(props);
   this.state=
   {
     latitude :"",
     error :""
   };

   window.navigator.geolocation.getCurrentPosition(position=>
    {
          this.setState({latitude : position.coords.latitude})
    },
    err =>
    {
      
      this.setState({error : err.message})
    }
    )
 };

render()
      {
        
          return(

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  < Whether Latitude = {this.state.latitude} />
                </div>
              </div>
            </div>
            
            )
        
      
        
  
  if(!this.state.latitude && this.state.error)
  {
    return(

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Error :{this.state.error}</h2>
          </div>
        </div>
      </div>
      
      )
   
  }

  else{
      return( <div className="container">
      Loading........please wait
        </div>)
  } 
};
    };


export default App;

