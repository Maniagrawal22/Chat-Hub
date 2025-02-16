import { useSelector } from "react-redux";
import { Link } from "react-router";

function Header()
{
  const data = useSelector(state=>state.chatuserData.value);

   return<div className="main-header">
          <div className="main-header-logo">
            {/* Logo Header */}
            <div className="logo-header" data-background-color="dark">
              <Link to="index.html" className="logo">
                <img
                  src="assets/img/kaiadmin/logo_light.svg"
                  alt="navbar brand"
                  className="navbar-brand"
                  height="20"
                />
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
          {/* Navbar Header */}
          <nav
            className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom"
          >
            <div className="container-fluid">
              <nav
                className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex"
              >
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button type="submit" className="btn btn-search pe-1">
                      <i className="fa fa-search search-icon"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Search ..."
                    className="form-control"
                  />
                </div>
              </nav>

              <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
                <li
                  className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none"
                >
                  <Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    to="#"
                    role="button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <i className="fa fa-search"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-search animated fadeIn">
                    <form className="navbar-left navbar-form nav-search">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Search ..."
                          className="form-control"
                        />
                      </div>
                    </form>
                  </ul>
                </li>
                {/* <li className="nav-item topbar-icon dropdown hidden-caret">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="notifDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell"></i>
                    <span className="notification">4</span>
                  </Link>
                  <ul
                    className="dropdown-menu notif-box animated fadeIn"
                    aria-labelledby="notifDropdown"
                  >
                    <li>
                      <div className="dropdown-title">
                        You have 4 new notification
                      </div>
                    </li>
                    <li>
                      <div className="notif-scroll scrollbar-outer">
                        <div className="notif-center">
                          <Link to="#">
                            <div className="notif-icon notif-primary">
                              <i className="fa fa-user-plus"></i>
                            </div>
                            <div className="notif-content">
                              <span className="block"> New user registered </span>
                              <span className="time">5 minutes ago</span>
                            </div>
                          </Link>
                          <Link to="#">
                            <div className="notif-icon notif-success">
                              <i className="fa fa-comment"></i>
                            </div>
                            <div className="notif-content">
                              <span className="block">
                                Rahmad commented on Admin
                              </span>
                              <span className="time">12 minutes ago</span>
                            </div>
                          </Link>
                          <Link to="#">
                            <div className="notif-img">
                              <img
                                src="assets/img/profile2.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="block">
                                Reza send messages to you
                              </span>
                              <span className="time">12 minutes ago</span>
                            </div>
                          </Link>
                          <Link to="#">
                            <div className="notif-icon notif-danger">
                              <i className="fa fa-heart"></i>
                            </div>
                            <div className="notif-content">
                              <span className="block"> Farrah liked Admin </span>
                              <span className="time">17 minutes ago</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link className="see-all" to="javascript:void(0);"
                        >See all notifications<i className="fa fa-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </li> */}
                
                <li className="nav-item topbar-user dropdown hidden-caret">
                  <Link
                    className="dropdown-toggle profile-pic"
                    data-bs-toggle="dropdown"
                    to="#"
                    aria-expanded="false"
                  >
                    <div className="avatar-sm">
                      <img
                        src={data.image}
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <span className="profile-username">
                      <span className="fw-bold">{data.name}</span>
                    </span>
                  </Link>
                  <ul className="dropdown-menu dropdown-user animated fadeIn">
                    <div className="dropdown-user-scroll scrollbar-outer">
                      <li>
                        <div className="user-box">
                          <div className="avatar-lg">
                            <img
                              src={data.image}
                              alt="image profile"
                              className="avatar-img rounded"
                            />
                          </div>
                          <div className="u-text">
                            <h4>{data.name}</h4>
                            <p className="text-muted">{data.phone}</p>
                            <Link
                              to="/myProfile"
                              className="btn btn-xs btn-secondary btn-sm"
                              >View Profile</Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/myProfile">My Profile</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/ourPosts">My Post</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/logout">Logout</Link>
                      </li>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          {/* End Navbar */}
        </div>
}
export default Header;

