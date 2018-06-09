import React from 'react';

import request from 'superagent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const style = {
  marginRight: 20,
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

export default class Display extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

collection()
{
	console.log("in Collections");
	request
	.post('http://localhost:8080/index/app')
	.send({Title:this.props.send.Title, 
			Year:this.props.send.Year, 
			imdbID:this.props.send.imdbID,
			Type:this.props.send.Type,
			Poster:this.props.send.Poster,})
	.end(function(err,res){
		if(err){
			console.log(err);
		}else{
			console.log(res);
		}
	})
}
	render(){
			return(
			<div>


<div style={style.root}>
    <GridList
      cellHeight={180}
      cols={3}
      style={style.gridList}>
    	<GridTile 
          key={this.props.send.Poster}
          title={this.props.send.Title}
          subtitle={<span>by <b>{this.props.send.Year}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" onClick={this.collection.bind(this)} /></IconButton>}>
          <img src={this.props.send.Poster} />
        </GridTile>
      
    </GridList>
  </div>
			</div>
			)
	}
}

