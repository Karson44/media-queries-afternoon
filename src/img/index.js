import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleDropdown: false
    }
  }
  handleToggle = () => {
    this.setState({toggleDropdown: !this.state.toggleDropdown})
  }
  render() {
    return (
    <div className="App">
      <header className='main-header'>
        <img src='https://cdn.vox-cdn.com/thumbor/N5tcam7o05CvW1_yQGcnCbalCNk=/0x0:1590x894/1200x800/filters:focal(668x320:922x574)/cdn.vox-cdn.com/uploads/chorus_image/image/64649868/6589524518.0.jpeg' alt='sponge-bob' className='header-logo'/>
        {this.state.toggleDropdown
        ? (
          <>
            <span className='dropdown-toggle' onClick={this.handleToggle}>:x:</span>
            <nav className='mobile-links'>
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </nav>
          </>
        )
        : (
          <span className='dropdown-toggle' onClick={this.handleToggle}>:x:</span>
        )
        }
        <nav className='header-links'>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
      </header>
      <img src={logo} alt='react.js logo' className='react-logo'/>
    </div>
  );
  }
}


