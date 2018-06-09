import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
//import RaisedButton from 'material-ui/RaisedButton'
//<RaisedButton label="Toggle Drawer" onTouchTap={this.toggleDrawer}/>
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div>
        <AppBar
          title="Movie Application"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />

        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}>
          <AppBar title="Movie Application" onLeftIconButtonTouchTap={this.toggleDrawer} />
          <MenuItem primaryText="HOME" containerElement={<Link to="/"/>} />
          <MenuItem primaryText="FAVOURITE" containerElement={<Link to="/favourite"/>}/>
          <MenuItem primaryText="ABOUT" containerElement={<Link to="/about" />}/>
        </Drawer>

        <div style={{ textAlign: 'center' }}>
          {this.props.children}

          
        </div>

      </div>
    )
  }
}

export default App

