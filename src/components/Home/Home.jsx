function Home() {
    return (
        <section className="container-fluid mx-0 bg_cuttly_main_092021 bg_shadow_n_2">
            <div className="header__bg"></div>
            <div className="mb-0">
                <div className="container position-relative">
                    <div className="initiate_link">
                        <hr/>
                        <div className="link_clicking_area">
                            <div className="link_clicking"><span></span></div>
                        </div>
                        <div className="link_clicking_area lca_2">
                            <div className="link_clicking"><span></span></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="dv_main col-md-6 cutt_main_b2">
                            <h1 className="h1_1 mb-2">URL Shortener</h1>
                            <h2 className="h1">Get full control<br/> over <span
                                className="accent_italic">short links</span></h2>
                            <h3 className="h2 h2_index text-left text-white">Easily manage your URLs with Cuttly. Create
                                branded short links, generate customizable QR codes, build link-in-bio pages, and run
                                interactive surveys.</h3>
                            <div className="butt_on mx-auto butt_on_2">
                                <a href="register" className="cutt_link rounded l_bg cutt_l_green">Sign up</a>
                                <a href="pro-pricing" className="cutt_link rounded l_bg">Pricing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;