import React from 'react';

function Activity(props) {
    return (
        <section className="max_1360 rounded-12 py-4 bg_grad_2">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 py-5">
                        <h2 className="txt_badge badge_main add_border">Monitor Click Activity</h2>
                        <h3 className="h2_index_2">Track <span
                            className="accent_italic">the performance</span><br/> and <span className="accent_italic">click-through rate</span> of
                            short links<b className="accent_acc">.</b></h3>
                        <p className="of_main my-4">Effective link optimization requires robust <b>link analytics</b>.
                            Cuttly provides comprehensive statistics and insights into <b>short link</b> clicks to drive
                            your growth. <br/><br/>
                            See it in action ↓
                        </p>
                        <a href="link-analytics/stats-for-short-link"
                           className="cutt_link rounded l_bg ml-0 pl-5 cutt_btn_all_f"><span>See link analytics page</span></a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Activity;