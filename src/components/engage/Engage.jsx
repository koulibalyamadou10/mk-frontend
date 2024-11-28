import React from 'react';

function Engage(props) {
    return (
        <section className="page_cuttly my-5 pricing_bg">
            <div className="container transparent_cont indx_log">
                <div className="row py-5 cutt-pricing-05">
                    <div className="col-12 page_log_in">
                        <h2 className="h2_index_2 text-center mb-4"><span className="accent_italic">Pricing</span> for
                            individuals, businesses, and companies of all sizes<b className="accent_acc">.</b></h2>
                        <p className="of_main m-3 text-center">Engage your target audience with <b>customized short
                            links</b>, <b>QR Codes</b>, <b>surveys</b> and <b>link in bio</b><br/> that capture their
                            attention, while benefiting from advanced <b>click statistics</b>.</p>
                    </div>
                    <div className="col-12 page_log_in mt-2">
                        <div className="c_checkbox pay_checkbox overflow-hidden">
                            <input id="pay_m_y" className="c_toggle" type="checkbox" name="pay_m_y"/>
                            <label htmlFor="pay_m_y" className="c_check_label"><span><i></i></span><b
                                className="p_monthly">Pay monthly</b><b className="p_yearly">Pay yearly - save one
                                month</b></label>
                        </div>
                    </div>


                    <div className="card-container">
                        <div className="card text-left">
                            <div className="card-header">
                                <span className="card-title">Free</span>
                                <span className="price">$0</span>
                            </div>
                            <div className="card-body pt-2">
                                <p className="card-subtitle py-2 mb-0 text-muted">Plan<br/> for beginners</p>
                                <hr className="my-2"/>
                                <ul className="features-cuttly-pricing">
                                    <li className="important_c">Short links <span>30/month</span></li>
                                    <li>Link clicks <span>Unlimited</span></li>
                                    <li>Branded short links <span className="tick_y_g">✓</span></li>
                                    <li>Branded domains <span>1</span></li>
                                    <li>HEADER (Custom Domains) <span>—</span></li>
                                    <li>HEADER (2s.ms Domain) <span>—</span></li>
                                    <li>Link Analytics <span>last 30 days</span></li>
                                    <li>Click reports PDF <span>—</span></li>
                                    <li>API limit <span>3/60 sec.</span></li>
                                    <li>API for branded domains <span>—</span></li>
                                    <li>API link editing <span>—</span></li>
                                    <li>Team API <span>—</span></li>
                                    <li>Analytics of unique redirects <span>—</span></li>
                                    <li>Aggregated Link Analytics <span>—</span></li>
                                    <li>Team features <span>—</span></li>
                                    <li>Team short links <span>—</span></li>
                                    <li>QR Codes <span>one style</span></li>
                                    <li>Link-in-bio <span>basic</span></li>
                                    <li>Surveys <span>1/10 answers</span></li>
                                </ul>

                                <a href="register" className="btn btn-register">Sign up</a>
                            </div>
                        </div>
                        <div className="card text-left">
                            <div className="card-header">
                                <span className="card-title">Starter</span>
                                <span className="price show_monthly">$12 <span>/ monthly</span></span>
                                <span className="price show_yearly">$132 <span>/ yearly</span></span>
                            </div>
                            <div className="card-body pt-2">
                                <p className="card-subtitle py-2 mb-0 text-muted">Extended plan for beginners</p>
                                <hr className="my-2"/>
                                <ul className="features-cuttly-pricing">
                                    <li className="important_c">Short links <span>300/month</span></li>
                                    <li>Link clicks <span>Unlimited</span></li>
                                    <li>Branded short links <span className="tick_y_g">✓</span></li>
                                    <li>Branded domains <span>1</span></li>
                                    <li>HEADER (Custom Domains) <span>—</span></li>
                                    <li>HEADER (2s.ms Domain) <span>—</span></li>
                                    <li>Link Analytics <span>last 30 days</span></li>
                                    <li>Click reports PDF <span>—</span></li>
                                    <li>API limit <span>6/60 sec.</span></li>
                                    <li>API branded domains <span>30/m.</span></li>
                                    <li>API link editing <span>—</span></li>
                                    <li>Team API <span>—</span></li>
                                    <li>Analytics of unique redirects <span>—</span></li>
                                    <li>Aggregated Link Analytics <span>—</span></li>
                                    <li>Team features <span>—</span></li>
                                    <li>Team short links <span>—</span></li>
                                    <li>QR Codes <span>one style</span></li>
                                    <li>Link-in-bio <span>more features</span></li>
                                    <li>Surveys <span>3/30 answers</span></li>
                                </ul>

                                <a href="register" className="btn btn-register">Sign up</a>
                            </div>
                        </div>
                        <div className="card text-left highlighted-card">
                            <div className="card-header">
                                <span className="card-title">Single</span>
                                <span className="badge badge-popular">Popular</span>
                                <span className="price show_monthly">$25 <span>/ monthly</span></span>
                                <span className="price show_yearly">$275 <span>/ yearly</span></span>
                            </div>
                            <div className="card-body pt-2">
                                <p className="card-subtitle py-2 mb-0 text-muted">for freelancers, bloggers,
                                    marketers</p>
                                <hr className="my-2"/>
                                <ul className="features-cuttly-pricing">
                                    <li className="important_c">Short links <span>5,000/month</span></li>
                                    <li>Link clicks <span>Unlimited</span></li>
                                    <li>Branded short links <span className="tick_y_g">✓</span></li>
                                    <li>Branded domains <span>5</span></li>
                                    <li>HEADER (Custom Domains) <span>1</span></li>
                                    <li>HEADER (2s.ms Domain) <span>5</span></li>
                                    <li>Link Analytics <span>1 year</span></li>
                                    <li>Click reports PDF <span>30 days, clicks</span></li>
                                    <li>API limit <span>60/60 sec.</span></li>
                                    <li>API branded domains <span>1,000/m.</span></li>
                                    <li>API link editing <span className="tick_y_g">✓</span></li>
                                    <li>Team API <span>—</span></li>
                                    <li>Analytics of unique redirects <span className="tick_y_g">✓</span></li>
                                    <li>Aggregated Link Analytics <span className="tick_y_g">✓</span></li>
                                    <li>Team features <span>—</span></li>
                                    <li>Team short links <span>—</span></li>
                                    <li>QR Codes <span>colors/shapes/logos</span></li>
                                    <li>Link-in-bio <span>fully customizable</span></li>
                                    <li>Surveys <span>5/100 answers</span></li>
                                </ul>

                                <a href="register" className="btn btn-register">Sign up</a>
                            </div>
                        </div>
                        <!-- Team -->
                        <div className="card text-left highlighted-card high-card">
                            <div className="card-header">
                                <span className="card-title">Team</span>
                                <span className="badge badge-best">Best value</span>
                                <span className="price show_monthly">$99 <span>/ monthly</span></span>
                                <span className="price show_yearly">$1089 <span>/ yearly</span></span>
                            </div>
                            <div className="card-body pt-2">
                                <p className="card-subtitle py-2 mb-0 text-muted">for agencies, teams, companies</p>
                                <hr className="my-2"/>
                                <ul className="features-cuttly-pricing">
                                    <li className="important_c">Short links <span>20,000/month</span></li>
                                    <li>Link clicks <span>Unlimited</span></li>
                                    <li>Branded short links <span className="tick_y_g">✓</span></li>
                                    <li>Branded domains <span>10</span></li>
                                    <li>HEADER (Custom Domains) <span>5</span></li>
                                    <li>HEADER (2s.ms Domain) <span>10</span></li>
                                    <li>Link Analytics <span>2 years</span></li>
                                    <li>Click reports PDF <span>all data</span></li>
                                    <li>API limit <span>180/60 sec.</span></li>
                                    <li>API branded domains <span>20,000/m.</span></li>
                                    <li>API link editing <span className="tick_y_g">✓</span></li>
                                    <li>Team API <span className="tick_y_g">✓</span></li>
                                    <li>Analytics of unique redirects <span className="tick_y_g">✓</span></li>
                                    <li>Aggregated Link Analytics <span className="tick_y_g">✓</span></li>
                                    <li>Team features <span>3 teams/5</span></li>
                                    <li>Team short links <span>20,000/m.</span></li>
                                    <li>QR Codes <span>colors/shapes/logos</span></li>
                                    <li>Link-in-bio <span>fully customizable</span></li>
                                    <li>Surveys <span>20/2,000 answers</span></li>
                                </ul>

                                <a href="register" className="btn btn-register">Sign up</a>
                            </div>
                        </div>
                        <!-- Team Enterprise -->
                        <div className="card text-left">
                            <div className="card-header">
                                <span className="card-title">Team Enterprise</span>
                                <span className="price show_monthly">$149 <span>/ monthly</span></span>
                                <span className="price show_yearly">$1639 <span>/ yearly</span></span>
                            </div>
                            <div className="card-body pt-2">
                                <p className="card-subtitle py-2 mb-0 text-muted">for large agencies, teams,
                                    companies</p>
                                <hr className="my-2"/>
                                <ul className="features-cuttly-pricing">
                                    <li className="important_c">Short links <span>50,000/month</span></li>
                                    <li>Link clicks <span>Unlimited</span></li>
                                    <li>Branded short links <span className="tick_y_g">✓</span></li>
                                    <li>Branded domains <span>99</span></li>
                                    <li>HEADER (Custom Domains) <span>15</span></li>
                                    <li>HEADER (2s.ms Domain) <span>99</span></li>
                                    <li>Link Analytics <span>2 years</span></li>
                                    <li>Click reports PDF <span>all data</span></li>
                                    <li>API limit <span>360/60 sec.</span></li>
                                    <li>API branded domains <span>50,000/m.</span></li>
                                    <li>API link editing <span className="tick_y_g">✓</span></li>
                                    <li>Team API <span className="tick_y_g">✓</span></li>
                                    <li>Analytics of unique redirects <span className="tick_y_g">✓</span></li>
                                    <li>Aggregated Link Analytics <span className="tick_y_g">✓</span></li>
                                    <li>Team features <span>10 teams/20</span></li>
                                    <li>Team short links <span>50,000/m.</span></li>
                                    <li>QR Codes <span>colors/shapes/logos</span></li>
                                    <li>Link-in-bio <span>fully customizable</span></li>
                                    <li>Surveys <span>50/5,000 answers</span></li>
                                </ul>

                                <a href="register" className="btn btn-register">Sign up</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 page_log_in mt-3 text-center">
                        <a href="pro-pricing" className="cutt_link l_bg mx-1 main_ahref mx-auto mt-4 w-100">Cuttly
                            Features</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Engage;