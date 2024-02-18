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
      <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">NewsApp by Salman</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'><Link className='navLink nav-link active' to='/general' cat='general' aria-current="page">General</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/business' cat='business' aria-current="page">Business</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/entertainment' cat='entertainment' aria-current="page">Entertainment</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/health' cat='health' aria-current="page">Health</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/science' cat='science' aria-current="page">Science</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/sports' cat='sports' aria-current="page">Sports</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/technology' cat='technology' aria-current="page">Tech</Link></li>
        </ul></div>
        </div>
      </nav>

      {/* <nav>
        <div id="logoDiv">NewsApp</div>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'><Link className='navLink nav-link active' to='/general' cat='general' aria-current="page">General</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/business' cat='business' aria-current="page">Business</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/entertainment' cat='entertainment' aria-current="page">Entertainment</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/health' cat='health' aria-current="page">Health</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/science' cat='science' aria-current="page">Science</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/sports' cat='sports' aria-current="page">Sports</Link></li>
          <li className='nav-item'><Link className='navLink nav-link active' to='/technology' cat='technology' aria-current="page">Tech</Link></li>
        </ul>
        <span id='categorySpan'>Selected Category: {this.props.currentcategory}</span>
      </nav> */}
      </>
    )
  }
}
