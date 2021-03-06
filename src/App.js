import React from 'react';
import './App.css';
import myImage from './profile.png'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      Person: {
        fullName: "Bahri Abir",
        bio: "love developing",
        imgSrc: myImage,
        profession: "electronics engineer",
        date: new Date()
      },
      show: true,
      counter : 0
    };
  }
  componentDidMount() {
    this.setState(
      {
        intervall: setInterval(
          ()=>{this.setState({counter: this.state.counter + 1})
          ;},1000
      )
  })}
    handleShowPerson = () => {
      this.setState({
        ...this.state,
        show: !this.state.show
      });
    };
    
   
    
  
    componentWillUnmount() {
      
    }
   
 
    render() {
      return (
        <div className='App-header'>
          {this.state.show && (
            <>
              <h1>{this.state.Person.fullName}</h1>
              <h1>{this.state.Person.bio}</h1>
              <img src={this.state.Person.imgSrc} alt="profile"></img>
              <h1>{this.state.Person.profession}</h1>
              
              <br></br>
              
            </>
           
          )}
          
          <button onClick={this.handleShowPerson}>click me</button>
          {this.state.counter}
        </div>
      );
    }
   
  }
 
export default App;
