import { Link } from 'react-router-dom';
import images from '../../views/Products/assets/images.jfif';
import avatar from '../../views/Products/assets/avatar.png';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand" to="/"><img alt="" src={images} id="logo" /></Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link  text-white" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-white" to="/stores">Stores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-white" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
          </form>
          <ul className="navbar-nav mr-2 mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" role="button"><img alt="" src={avatar} id="avatar" /></Link>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item mr-4" to="/register">Sign in</Link>
              <div className="dropdown-divider mr-4"></div>
              <Link className="dropdown-item mr-4" to="/profile">Users</Link>
            </div>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}