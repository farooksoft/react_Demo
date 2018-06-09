import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import request from 'superagent';
import _ from 'lodash';

import Display from './Display.js'
//style for Raised Button
const style = {
  margin: 12,
};

//Class and a consrtuctor with an array initialised for storing data from API
class Home extends Component{
	constructor(){
		super();
		this.state = {
			text : "",
			movie :[]
		}
	}

//function to set data and use the same for search  
handleChange(e){
       this.setState({text:e.target.value});
	};

//superagent implementation for retriving data from OMDBAPI
Search=(query)=>{
          var url = `http://www.omdbapi.com?s=${query}&y=&r=json&plot=short`;
          request.get(url).then((response ) => {
            this.setState({movie:response.body.Search});  
          });
};

render(){
// fetching Display.js with the implementation of map function and assigning the same to a variable	
		const data = this.state.movie.map((e)=>{
	        return (<Display send={e}/>);
        })

		return(
			<div><h1>Movie App - Search Page</h1>
					
			<div>
						<TextField hintText="Hint Text"
							errorText="This field is required"
							floatingLabelText="Enter a movie name"
							value={this.state.text} onChange={this.handleChange.bind(this)}/><br/>

						<RaisedButton label="Search Movie" 
							primary={true} style={style} 
							onClick={this.Search.bind(this, this.state.text)}/>
				</div>
				<div>
					{data}
				</div>
				
			</div>
			);
	}
}

export default Home;

