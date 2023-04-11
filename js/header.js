const template = document.createElement("template");
template.innerHTML = `
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header__logo">
                        <a class="img-responsive" href="index.html"><img src="../img/logo.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-10">
                    <div class="header__nav__option">
                        <nav class="header__nav__menu mobile-menu">
                            <ul>
                                <li><a href="newpractitioner.html">New Practitioner</a>
                                    <ul class="dropdown">
                                        <li>
                                            <a href="cyberdefenseanalyst.html">
                                                <b>Cyber Defense Analyst</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="securityControlAssessor.html">
                                                <b>Security Control Assessor</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="cyberDefenseForensics.html">
                                                <b>Cyber Defense Forensics</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="networkOprSpecialist.html">
                                                <b>Network Operations Specialist</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="lawEnforcementDigitalForensics.html">
                                                <b>Law Enforcement Digital Forensicst</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="softwareDeveloper.html">
                                                <b>Software Developer</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="secureSoftwareAssessor.html">
                                                <b>Secure Software Assessor</b>
                                            </a>
                                        </li>
                                    </ul>
                                </li>    
                                <li><a href="jobboard.html">Job board</a></li>
                                <li><a href="employers.html">Employers</a>
                                    <ul class="dropdown">
                                        <li>
                                            <a href="employers.html#EXPLORETALENT">
                                                <b>HR Services</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Recruiting People</a></li>
                                                <li><a href="#">Job Board</a></li>
                                                <li><a href="#">Purchase Job Board Credits</a></li>
                                            </ul>-->
                                        </li>
                                        <li>
                                            <a href="employers.html#CONNECTTO">
                                                <b>Jobs and Training</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Employability Pathways</a></li>
                                                <li><a href="#">Start Your Application</a></li>
                                                <li><a href="#">Job Funding FAQs</a></li>
                                            </ul>-->
                                        </li>
                                        <li>
                                            <a href="employers.html#SEEHOW">
                                                <b>Resources</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Labour Market Information</a></li>
                                                <li><a href="#">Occupation and Certification Standards</a></li>
                                                <li><a href="#">About the Veteran Workforce</a></li>
                                                <li><a href="#">Blogs and Links</a></li>
                                            </ul>-->
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="candidates.html">Candidates</a>
                                    <ul class="dropdown">
                                        <li>
                                            <a href="candidates.html#CAREERPREPAREDNESS">
                                                <b>Career Preparedness</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Job Lab On Demand</a></li>
                                                <li><a href="#">Portfolio Readiness</a></li>
                                                <li><a href="#">Interviewing for your Career</a></li>
                                            </ul>-->
                                        </li>
                                        <li>
                                            <a href="candidates.html#CERTIFICATIONS">
                                                <b>Certifications</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Specialization in the Industry</a></li>
                                                <li><a href="#">Mentorships</a></li>
                                                <li><a href="#">Microcredentialing</a></li>
                                                <li><a href="#">Life long learning</a></li>
                                            </ul>-->
                                        </li>
                                        <li>
                                            <a href="candidates.html#EMPLOYMENT">
                                                <b>Employment Opportunities</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Job Board</a></li>
                                                <li><a href="#">Resumes and Applications</a></li>
                                            </ul>-->
                                        </li>
                                        <li>
                                            <a href="candidates.html#WORKINTEGRATED">
                                                <b>Work Integrated Learning</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Program and Application</a></li>
                                                <li><a href="#">Virtual Career Fair</a></li>
                                            </ul>-->
                                        </li>
                                        <li>
                                            <a href="candidates.html#RESOURCES">
                                                <b>Resources</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="candidates.html#SEEHOW">
                                                <b>Information Display</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Labour Market Information</a></li>
                                                <li><a href="#">Occupation and Certification Standards</a></li>
                                                <li><a href="#">About the Veteran Workforce</a></li>
                                                <li><a href="#">Blogs and Links</a></li>
                                            </ul>-->
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="whoweare.html">Who we are</a>
                                    <ul class="dropdown">
                                        <li>
                                            <a href="whoweare.html#aboutus">
                                                <b>About Us</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Leadership</a></li>
                                                <li><a href="#">Advisory Board</a></li>
                                                <li><a href="#">Partners</a></li>
                                                <li><a href="#">In the news</a></li>
                                                <li><a href="#">Contact us</a></li>
                                            </ul>-->
                                        </li>
                                        <li>
                                            <a href="whoweare.html#aboutus">
                                                <b>Training Partners</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Canadian Post Secondary</a></li>
                                                <li><a href="#">Industry Academies</a></li>
                                                <li><a href="#">Certification Bodies</a></li>
                                            </ul>-->
                                        </li>
                                        <li>
                                            <a href="whoweare.html#whoweare">
                                                <b>Resources</b>
                                            </a>
                                            <!--<ul>
                                                <li><a href="#">Labour Market Information</a></li>
                                                <li><a href="#">Occupation and Certification Standards</a></li>
                                                <li><a href="#">About the Veteran Workforce</a></li>
                                                <li><a href="#">Blogs and Links</a></li>
                                            </ul>-->
                                        </li>
                                    </ul>
                                </li>
                                <!--<li><a href="./about.html">About</a></li>
                                <li><a href="./portfolio.html">Portfolio</a></li>
                                <li><a href="./services.html">Services</a></li>
                                <li><a href="#">Pages</a>
                                    <ul class="dropdown">
                                        <li><a href="./about.html">About</a></li>
                                        <li><a href="./portfolio.html">Portfolio</a></li>
                                        <li><a href="./blog.html">Blog</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./contact.html">Contact</a></li>-->
                                <!-- French / English switch -->
                                <!-- <li></li> -->
                                <!-- day / night toggle -->
                                <!-- <li></li> -->
                            </ul>
                        </nav>
                        <div class="header__nav__social">
                            <a href="https://www.linkedin.com/company/cyber-catalyst-talent-solutions/mycompany/"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
`;
document.body.appendChild(template.content);
