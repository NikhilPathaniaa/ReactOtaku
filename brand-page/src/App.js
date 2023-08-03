import './App.css';

function App() {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <img src='/images/brand_logo.png' alt='logo'/>
        </div>
        <div>
          <ul id='links'>
            <li><a href='#menu'>Menu</a></li>
            <li><a href='#location'>Location</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <div>
          <button className='login' type='login'>Login</button>
        </div>
      </nav>
    </>
  );
}

export default App;
