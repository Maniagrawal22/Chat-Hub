import { Link } from "react-router"

function SideBar()
{
    return<div>
    {/* End Sidebar */}
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        {/* Logo Header */}
        <div className="logo-header" data-background-color="dark">
          <Link to="/userHome" className="logo" style={{color:'white'}}>
            Chat Hub
          </Link>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left"></i>
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
        {/* End Logo Header */}
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className="text-section">Components</h4>
            </li>
            <li className="nav-item">
              <Link data-bs-toggle="collapse" to="#base">
                <i className="fas fa-layer-group"></i>
                <p>User Menu</p>
                <span className="caret"></span>
              </Link>
              <div className="collapse" id="base">
                <ul className="nav nav-collapse">
                  <li>
                    <Link to="/userList">
                      <span className="sub-item">UserList</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ourPosts">
                      <span className="sub-item">Our Posts</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/myProfile">
                      <span className="sub-item">Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/changePassword">
                      <span className="sub-item">Change Password</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/uploadPost">
                      <span className="sub-item">Upload Post</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout">
                      <span className="sub-item">Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
                </ul>
              </div>
        </div>
      </div>
    </div>
    {/* End Sidebar */}

}
export default SideBar;