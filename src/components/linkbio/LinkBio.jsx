import React from 'react';

function LinkBio(props) {
    return (
        <section className="max_1360 top_h_2_c rounded-12 my-5 bg_grad_4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 left_t_c py-4 my-4">
                        <h2 className="txt_badge add_border">Link in bio pages</h2>
                        <h3 className="h2_index_2">Create stunning<br/> and modern <span className="accent_italic">Link in bio</span> pages<b
                            className="accent_acc">.</b></h3>
                        <p className="of_main mt-4 mb-3 text-justify">Showcase what's important with fully customizable
                            microsites. Share your link in bio on social platforms using short links or dedicated QR
                            codes, and track clicks effortlessly.</p>
                        <a href="https://cutt.bio/URL-Shortener" className="cutt_link l_bg cutt_btn_all_f"
                           rel="noopener noreferrer" target="_blank"><span>See our Link in bio</span></a>
                        <ul className="list_tick mt-4">
                            <li className="mb-0">
                                <b>Your own link in bio in no time</b>
                                <span className="pt-0 pl-3 ml-3">Create personalized pages with links, profile pictures, titles, and descriptions.</span>
                            </li>
                            <li className="my-0">
                                <b>Choose your domain</b>
                                <span className="pt-0 pl-3 ml-3">
					Use the Cuttly domain, cutt.bio, or your own custom domain for your link-in-bio pages.<br/>
				</span>
                            </li>
                            <li className="my-0">
                                <b>Track clicks and engagement</b>
                                <span className="pt-0 pl-3 ml-3">Measure clicks for each link in bio to optimize your audience engagement.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default LinkBio;