import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class FavListTable extends React.Component {
    favouriteComponents(){
        var header, body;
        var tableBodyArray =[];
        this.props.favList.map(function(favItem, index) {
            
            if(index === 0){
                header =                     
                  <TableRow>
                    <TableHeaderColumn >Title</TableHeaderColumn>
                    <TableHeaderColumn>Year</TableHeaderColumn>
                    <TableHeaderColumn>imdbID</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                  </TableRow>
            }else{
                body = 
                    <TableRow>
                        <TableRowColumn key={favItem._id}>{favItem.Title}</TableRowColumn>
                        <TableRowColumn>{favItem.Year}</TableRowColumn>
                        <TableRowColumn>{favItem.imdbID}</TableRowColumn>
                        <TableRowColumn>{favItem.Type}</TableRowColumn>
                    </TableRow>
            }
            tableBodyArray.push(body);       
        });
        return (
            <Table>
                <TableHeader>
                    {header}
                </TableHeader>
                <TableBody>
                    {tableBodyArray}
                </TableBody>
            </Table>
        )
    }
    render() {       
        return( <div><h1>Movie App Favourite List</h1>{this.favouriteComponents(this)}</div>);
    }
}