import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";

const Sidebar = () => {

  const { collapse, setCollapse } = useContext(AuthContext);
    return ( 
        <nav className={`sidebar ${collapse ? 'active' : ''}`}>
            <div className="dismiss" onClick={() =>{setCollapse(prevState => !prevState)}}>
              <i className={`fal ${collapse ? 'fa-arrow-right' : 'fa-arrow-left' }`}></i>
            </div>

            <div className="logo">
              <h3>
                <a href="index.html">Bootstrap 4 Template with Sidebar Menu</a>
              </h3>
            </div>

            <ul className="list-unstyled menu-elements">
              <li className="active">
                <a className="scroll-link" href="#top-content">
                  <i className="fal fa-home"></i> Home
                </a>
              </li>
              <li>
                <a className="scroll-link" href="#section-1">
                  <i className="fal fa-cog"></i> What we do
                </a>
              </li>
              <li>
                <a className="scroll-link" href="#section-2">
                  <i className="fal fa-user"></i> About us
                </a>
              </li>
              <li>
                <a className="scroll-link" href="#section-5">
                  <i className="fal fa-pencil-alt"></i> Portfolio
                </a>
              </li>
              <li>
                <a className="scroll-link" href="#section-6">
                  <i className="fal fa-envelope"></i> Contact us
                </a>
              </li>
              <li>
                <a
                  href="#otherSections"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                  role="button"
                  aria-controls="otherSections"
                >
                  <i className="fal fa-sync"></i>Other sections
                </a>
                <ul className="collapse list-unstyled" id="otherSections">
                  <li>
                    <a className="scroll-link" href="#section-3">
                      Our projects
                    </a>
                  </li>
                  <li>
                    <a className="scroll-link" href="#section-4">
                      We think that...
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            
          </nav>
     );
}
 
export default Sidebar;