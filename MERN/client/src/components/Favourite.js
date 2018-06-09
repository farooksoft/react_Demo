import React from 'react';
import superagent from 'superagent';
import FavListTable from './FavListTable';

export default class Favourite extends React.Component{
constructor(props){
    super(props);
    this.state={
        myMovies:[]
    }
}

componentDidMount(){
    var self = this;
    console.log("in Favourite");
    superagent
    .get('http://localhost:8080/index/view')
    .set('Accept', 'application/json')
    .end(function(err, res){
        if(err){
            console.log("error:"+err);
        }else{
            var favArray = JSON.parse(res.text);
            self.setState({myMovies:favArray})
        }
    })
}

render(){       
    if(this.state.myMovies.length === 0)
        return <div>State is empty! Wait for two seconds</div> //you could use a loader here
    return (
        <FavListTable favList={this.state.myMovies} />
    )
    }
}
