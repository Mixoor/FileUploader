import React, { Component } from 'react';
import './App.css';
import FileComponent from './Component/FileComponent/FileComponent';
class App extends Component {

      constructor(props){
        super(props);
        this.state={
          files:[]
        };

        this.onChangeFile= this.onChangeFile.bind(this);
      }
        onChangeFile(e,f){
          e.preventDefault();
          let ffs = f || e.target.files;
          this.setState({files:ffs});
        }

   
   



        render() {
          return (
            <div className="App">
              <FileComponent options={{accept:"image/png"}} files={this.state.files} 
             multiple={true} 
              onFileChange={this.onChangeFile}/>
            </div>
          );
        }
}

export default App;
