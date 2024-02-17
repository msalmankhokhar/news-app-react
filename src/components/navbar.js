import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'

export default class navbar extends Component {

  showCurrentLink = ()=>{  
    document.querySelectorAll('.navLink').forEach(link => {
      if (link.getAttribute('cat') === this.props.currentcategory) {
        link.classList.add('currentLink')
      }
    });
  }

  async componentDidMount(){
    this.showCurrentLink()
  }
  
  render() {
    {/* business entertainment general health science sports technology */}
    return (
      <nav>
        <div id="logoDiv">NewsApp</div>
        <ul>
          <li><Link className='navLink' to='/general' cat='general'>General</Link></li>
          <li><Link className='navLink' to='/business' cat='business'>Business</Link></li>
          <li><Link className='navLink' to='/entertainment' cat='entertainment'>Entertainment</Link></li>
          <li><Link className='navLink' to='/health' cat='health'>Health</Link></li>
          <li><Link className='navLink' to='/science' cat='science'>Science</Link></li>
          <li><Link className='navLink' to='/sports' cat='sports'>Sports</Link></li>
          <li><Link className='navLink' to='/technology' cat='technology'>Tech</Link></li>
        </ul>
        {/* <span id='categorySpan'>Selected Category: {this.props.currentcategory}</span> */}
      </nav>
    )
  }
}
