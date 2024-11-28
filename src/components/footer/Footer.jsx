import React from 'react';

function Footer(props) {
    return (
        <footer className="footer-area footer--light">
            <div className="container footer-big">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="footer-widget">
                            <div className="widget-about">
                                <img src="img/foot_logo.svg"
                                     alt="URL Shortener, Branded Short Links, QR Codes &amp; More | Cuttly" width="160"
                                     height="42" className="img-fluid" loading="lazy"/>
                                <p className="arrow-up">URL Shortener, Branded Short Links, QR Codes &amp; More |
                                    Cuttly</p>
                                <div className="social_cuttly">
                                    <a href="https://www.facebook.com/cuttlyURL/" target="_blank"
                                       rel="noopener noreferrer"><img src="img/fb.svg" alt="facebook" width="50"
                                                                      height="50" loading="lazy"/></a>
                                    <a href="https://twitter.com/cutt_ly/" target="_blank"
                                       rel="noopener noreferrer"><img src="img/twitter.svg" alt="twitter" width="50"
                                                                      height="50" loading="lazy"/></a>
                                    <a href="https://www.instagram.com/cutt.ly/" target="_blank"
                                       rel="noopener noreferrer"><img src="img/instagram.svg" alt="instagram" width="50"
                                                                      height="50" loading="lazy"/></a>
                                    <a href="https://www.linkedin.com/showcase/cuttly-url-shortener/" target="_blank"
                                       rel="noopener noreferrer"><img src="img/linkedin.svg" alt="linked in" width="50"
                                                                      height="50" loading="lazy"/></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 col-sm-4">
                        <div className="footer-widget">
                            <div className="footer-menu">
                                <h2 className="footer-widget-title">URL Shortener</h2>
                                <ul>
                                    <li><a href="resources/blog/why-cuttly">Why Cuttly?</a></li>
                                    <li><a href="/">URL Shortener</a></li>
                                    <li><a href="pro-pricing">Features &amp; Pricing</a></li>
                                </ul>
                            </div>
                            <div className="footer-menu mt-5">
                                <h2 className="footer-widget-title">Link Management</h2>
                                <ul>
                                    <li><a href="cuttly-api">API</a></li>
                                    <li><a href="verify">Check url</a></li>
                                    <li><a href="cutt-url-button">CUTT URL button</a></li>
                                    <li><a href="preview">Preview mode</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 col-sm-4">
                        <div className="footer-menu">
                            <h2 className="footer-widget-title">Cuttly Tools</h2>
                            <ul>
                                <li><a href="resources/tools/">Cuttly Platform</a></li>
                                <li><a href="resources/tools/url-shortener">URL shortener tool</a></li>
                                <li><a href="resources/tools/link-analytics">Link analytics tool</a></li>
                                <li><a href="resources/tools/cuttly-surveys">Cuttly Surveys</a></li>
                                <li><a href="resources/tools/link-in-bio">Link-in-bio</a></li>
                                <li><a href="resources/tools/qr-codes">QR Codes</a></li>
                                <li><a href="verify">Unshorten URL</a></li>
                                <li><a href="resources/blog/compliance-trai-sms-regulations">TRAI SMS Compliance with
                                    Cuttly: Custom Domains with Headers</a></li>
                                <li><a href="resources/blog/compliance-trai-sms-header-link-shortener">TRAI SMS
                                    Compliance with Cuttly: generic shortener with 2s.ms Domain &amp; Headers</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-md-3 col-sm-4">
                        <div className="footer-widget">
                            <div className="footer-menu no-padding">
                                <h2 className="footer-widget-title">Cuttly Resources</h2>
                                <ul>
                                    <li><a href="resources/blog/">Blog</a></li>
                                    <li><a href="resources/support/">Support</a></li>
                                    <li><a href="resources/integrations">Integrations</a></li>
                                    <li><a href="https://status.cutt.ly">Status</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-widget">
                            <div className="footer-menu no-padding">
                                <h2 className="footer-widget-title">Legal &amp; Policies</h2>
                                <ul>
                                    <li><a href="terms">Terms of service</a></li>
                                    <li><a href="privacy">Privacy Policy</a></li>
                                    <li><a href="privacy/#GDPR">GDPR</a></li>
                                    <li><a href="#" aria-label="View cookie settings" data-cc="c-settings"
                                           aria-haspopup="dialog">Cookies</a></li>
                                    <li><a href="report">Abuse report</a></li>
                                    <li><a href="contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>


                </div>
            </div>


            <div className="mini-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-text">
                                <p>© 2024 cutt.ly | Made by <a href="https://webroomstudio.pl"
                                                               title="Cutt.ly by Web Room Studio" target="_blank"
                                                               rel="noopener noreferrer"><img src="img/wrs.svg"
                                                                                              width="40" height="17"
                                                                                              alt="Web Room Studio"/></a>
                                </p>
                            </div>

                            <div className="go_top">
                                <span className="icon-arrow-up"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;