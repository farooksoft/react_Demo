import React from 'react'
import NavLink from './NavLink'
// {this.props.children}
export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
     <div className="container-fluid">
     <div className="navbar-header">
       <div className="navbar-brand">Movies App</div>
     </div>
        <ul className="nav nav-pills">
          <li role="presentation" class="active"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
           <li role="presentation"><NavLink to="/about">About</NavLink></li>
          <li role="presentation"><NavLink to="/repos">Repos</NavLink></li>
        </ul>
      </div>
      </nav>

       
      </div>
    )
  }
})



      