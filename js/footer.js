const template2 = document.createElement("template2");
template.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="footer__top__logo">
                            <a href="index.html"><img src="img/logo.png" alt=""></a>
                        </div>
                    </div>
                    <!-- <div class="col-lg-6 col-md-6">
                        <div class="footer__top__social">
                            <a href="https://www.facebook.com/coding4veterans/"><i class="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/Coding4Veterans"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="https://www.instagram.com/Coding4Veterans/"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                        </div> -->
                        <div id="contactus">
                            <h3>CONTACT US</h3>
                            <p>Have a question&quest; Feel free to reach out &hellip; <a href="mailto:talent@cybercatalyst.io?subject=Question">talent&commat;cybercatalyst&period;io</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer__copyright">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        <p class="footer__copyright__text">Copyright &copy;
                            <script>
                                document.write(new Date().getFullYear());
                            </script>
                            All rights reserved | <a href="index.html" target="_blank">Cyber Catalyst</a>
                        </p>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;
document.body.appendChild(template.content);
