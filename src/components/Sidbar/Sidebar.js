import { useState } from "react";

const Sidebar = () => {

    const [collapse, setCollapse] = useState(true);
    return ( 
        <nav class="sidebar active">
            <div class="dismiss">
              <i class="fal fa-arrow-right"></i>
            </div>

            <div class="logo">
              <h3>
                <a href="index.html">Bootstrap 4 Template with Sidebar Menu</a>
              </h3>
            </div>

            <ul class="list-unstyled menu-elements">
              <li class="active">
                <a class="scroll-link" href="#top-content">
                  <i class="fal fa-home"></i> Home
                </a>
              </li>
              <li>
                <a class="scroll-link" href="#section-1">
                  <i class="fal fa-cog"></i> What we do
                </a>
              </li>
              <li>
                <a class="scroll-link" href="#section-2">
                  <i class="fal fa-user"></i> About us
                </a>
              </li>
              <li>
                <a class="scroll-link" href="#section-5">
                  <i class="fal fa-pencil-alt"></i> Portfolio
                </a>
              </li>
              <li>
                <a class="scroll-link" href="#section-6">
                  <i class="fal fa-envelope"></i> Contact us
                </a>
              </li>
              <li>
                <a
                  href="#otherSections"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                  role="button"
                  aria-controls="otherSections"
                >
                  <i class="fal fa-sync"></i>Other sections
                </a>
                <ul class="collapse list-unstyled" id="otherSections">
                  <li>
                    <a class="scroll-link" href="#section-3">
                      Our projects
                    </a>
                  </li>
                  <li>
                    <a class="scroll-link" href="#section-4">
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