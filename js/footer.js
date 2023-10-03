// Declare and store the data into a variable
// const currDate = Date.now();
const currentDate = new Date();

// Prints the UNIX epoch
// console.log("Unix time stamp of current date", currDate);
console.log("Unix time stamp of current date", currentDate);

// Converts timestamp into Date Object
// const dt = new Date(currDate);
const currentYear = currentDate.getFullYear();

// Print the full year
// console.log(dt.getFullYear());
console.log(currentYear);

const template2 = document.createElement("template");
template2.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
               <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="footer__top__logo">
                            <a href="index.html"><img src="img/logo.png" alt=""></a>
                        </div>
                    </div>
                    <div id="" class="contactus col-lg-4 col-md-4 col-sm-4">
                        <h3>CONTACT US</h3>
                        <p>Have a question&quest; Feel free to reach out &hellip; <a href="mailto:talent@cybercatalyst.io?subject=Question">talent&commat;cybercatalyst&period;io</a></p>
                        <br><br>
                    </div>
                </div>
            </div>
            
            <div class="footer__copyright">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        <p class="footer__copyright__text">
                            Copyright &copy;&nbsp;2021-${currentYear}&nbsp;All rights reserved | <a href="index.html" rel="noopener noreferrer">Cyber Catalyst</a>
                        </p>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;
document.body.appendChild(template2.content);
