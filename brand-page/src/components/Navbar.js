const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
    <img className="navbar-brand" src='/images/brand_logo.png' alt='Navbar'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link" href="#">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Location</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="submit">
      <button type="button" class="btn btn-danger">Login</button>
      </form>
    </div>
  </div>
</nav>
    );
}
export default Navbar;