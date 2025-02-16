import { Link } from "react-router-dom";

function Menu()
{
return <div className="container">
  <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="#">Chat Hub</Link>
    </div>
    
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>
</div>
}
export default Menu;