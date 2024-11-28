import React from 'react';

function Professional(props) {
    return (
        <section className="green_section max_1360 mt-5 rounded-12">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 left_t_c py-5 my-4">
                        <h2 className="h2_index_2"><span className="accent_italic">Professional</span><br/> Link
                            Management Solutions<b className="green_acc">.</b></h2>
                        <p className="of_main mt-4 mb-2 text-justify">Cuttly offers a versatile platform for managing
                            branded short links, tracking analytics, and creating custom QR codes. With additional
                            features like customizable link-in-bio pages and interactive surveys, it’s the perfect tool
                            for marketers, affiliates, and businesses of all sizes. Maximize your links’ potential and
                            grow your online presence effortlessly with Cuttly</p>
                        <ul className="list_tick t_green my-4">
                            <li>
                                <b>Solutions for Businesses of All Sizes</b>
                            </li>
                            <li>
                                <b>Flexible Subscription Plans for Every Budget</b>
                            </li>
                            <li>
                                <b>Advanced Features and Rapid Support</b>
                            </li>
                        </ul>
                        <a href="pro-pricing" className="cutt_link rounded l_bg cutt_l_green ml-0 pl-5 cutt_btn_all_f">Cuttly
                            - All features</a></div>
                    <div className="col-lg-6 px-0 d-none d-lg-block">
                        <div className="phone phone_links">
                            <div className="phone-big">
                                <div className="phone-screen">
                                    <div className="show_link_cutt">URL Shortener</div>
                                    <div className="show_link_cutt">Branded URLs</div>
                                    <div className="show_link_cutt">Link management</div>
                                    <div className="show_link_cutt">Short links features</div>
                                    <div className="show_link_cutt">QR code generator</div>
                                    <div className="show_link_cutt">Link shortener that supports your brand</div>
                                    <div className="phone-details-top">
                                        <hr/>
                                        <hr/>
                                    </div>
                                    <div className="phone-details-side-l">
                                        <hr/>
                                        <hr/>
                                    </div>
                                    <div className="phone-details-side-r">
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 px-0 c_bg_p_lm"></div>
                </div>
            </div>
        </section>
    );
}

export default Professional;