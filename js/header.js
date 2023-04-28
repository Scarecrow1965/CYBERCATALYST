const template = document.createElement("template");
template.innerHTML = `
    <header class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <div class="header__logo">
                            <a class="img-responsive" href="index.html"><img src="img/logo.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-lg-10">
                        <div class="header__nav__option">
                            <nav class="header__nav__menu mobile-menu">
                                <ul>
                                    <li><a href="techvets.html">TECHVETS</a></li>
                                    <li><a href="jobboard.html">Job board</a></li>
                                    <li><a href="employers.html">Employers</a>
                                        <ul class="dropdown">
                                            <li>
                                                <a href="employers.html#EXPLORETALENT">HR Services</a>
                                            </li>
                                            <li>
                                                <a href="employers.html#CONNECTTO">Jobs and Training</a>
                                            </li>
                                            <li>
                                                <a href="employers.html#SEEHOW">Resources</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="candidates.html">Candidates</a>
                                        <ul class="dropdown">
                                            <li><a href="newpractitioner.html">New Practitioner&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-right"></i></a>
                                                <ul class="submenu">
                                                    <li>
                                                        <a href="cyberdefenseanalyst.html">Cyber Defense Analyst</a>
                                                    </li>
                                                    <li>
                                                        <a href="securityControlAssessor.html">Security Control Assessor</a>
                                                    </li>
                                                    <li>
                                                        <a href="cyberDefenseForensics.html">Cyber Defense Forensics</a>
                                                    </li>
                                                    <li>
                                                        <a href="networkOprSpecialist.html">Network Operations Specialist</a>
                                                    </li>
                                                    <li>
                                                        <a href="lawEnforcementDigitalForensics.html">Law Enforcement Digital Forensics</a>
                                                    </li>
                                                    <li>
                                                        <a href="softwareDeveloper.html">Software Developer</a>
                                                    </li>
                                                    <li>
                                                        <a href="secureSoftwareAssessor.html">Secure Software Assessor</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="candidates.html#CAREERPREPAREDNESS">Career Preparedness</a>
                                            </li>
                                            <li>
                                                <a href="candidates.html#CERTIFICATIONS">Certifications</a>
                                            </li>
                                            <li>
                                                <a href="candidates.html#EMPLOYMENT">Employment Opportunities</a>
                                            </li>
                                            <li>
                                                <a href="candidates.html#WORKINTEGRATED">Work Integrated Learning</a>
                                            </li>
                                            <li>
                                                <a href="candidates.html#RESOURCES">Resources</a>
                                            </li>
                                            <li>
                                                <a href="candidates.html#SEEHOW">Information Display</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="whoweare.html">Who we are</a>
                                        <ul class="dropdown">
                                            <li>
                                                <a href="whoweare.html#aboutus">About Us</a>
                                             </li>
                                            <li>
                                                <a href="whoweare.html#aboutus">Training Partners</a>
                                            </li>
                                            <li>
                                                <a href="whoweare.html#whoweare">Resources</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div class="header__nav__social">
                                <a href="https://www.linkedin.com/company/cyber-catalyst-t-alent-solutions/mycompany/"><i class="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
`;
document.body.appendChild(template.content);

// HEADER FUNCTION

  // Hide SubMenus.
  $(".submenu").hide();

  // Shows SubMenu when it's parent is hovered.
  $(".submenu")
    .parent("li")
    .hover(function () {
      $(this).find(">.submenu").not(":animated").slideDown(300);
      $(this).toggleClass("active ");
    });

  // Hides SubMenu when mouse leaves the zone.
  $(".submenu")
    .parent("li")
    .mouseleave(function () {
      $(this).find(">.submenu").slideUp(150);
    });

