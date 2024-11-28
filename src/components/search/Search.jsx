import React from 'react';

function Search(props) {
    return (
        <section className="bg_shadow">
            <div className="link_bg_m_c">
                <hr/>
                <hr/>
            </div>
            <div className="container cutt_main_inp">
                <div className="row">
                    <div className="col-12 mt-4 py-2 mb-2">
                        <h2 className="h2_index_2 text-center pb-4 small_info"><span className="h3">Create short link, QR code, link-in-bio, survey and more</span>
                        </h2>
                        <div className="input-group">
                            <input id="link" className="cutt_url w-100 p-4 rounded-12 border_none" type="text"
                                   placeholder="Paste long url and shorten it" name="url" value=""
                                   onKeyUp="restoreBtn()"/>
                            <button className="btn_cutt rounded-6 shortenit_b" onClick="send()">Shorten</button>
                        </div>
                        <input type="hidden" id="tmp"/>
                    </div>
                    <div className="col-12 mt-2 mb-4 text-center">
                        <p className="small_info d-inline-block">By using Cuttly’s link shortening service, you accept
                            the <a href="terms">Terms of Service</a> and <a href="privacy">Privacy Policy</a>.</p>
                    </div>

                    <div className="col-12 mt-2 mb-5 index_box d-none">
                        <div className="box_register rounded-6">
                            <img src="img/startup.svg" alt="Free url shortener - register" loading="lazy"/>
                            <div className="register_txt">
                                <h2>Take it to the next level</h2>
                                <p>Take advantage of more useful features. All this to manage your links in an intuitive
                                    and simple way.</p>
                            </div>
                            <div className="register_link">
                                <a href="register" className="cutt_link rounded mb-2 l_bg cutt_l_green">Sign up</a>
                                <a href="pro-pricing" className="cutt_link rounded l_bg">Go pro</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="results">
                <script src="/scripts/qrc.min.js?v=2710202201"></script>
                <script src="/scripts/customQRCode.js?v=2710202201"></script>
                <script src="/scripts/main_login.js?v=270420211500"></script>
            </div>
        </section>
    );
}

export default Search;