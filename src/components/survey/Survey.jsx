import React from 'react';

function Survey(props) {
    return (
        <section className="max_1360 my-5 py-5 acc_a">
            <div className="container">
                <div className="row d-flex align-items-center">

                    <div className="col-lg-6 py-4">
                        <h2 className="txt_badge badge_main">Cuttly Surveys</h2>
                        <h3 className="h2_index_2">Harness audience insights with <span className="accent_italic">Cuttly Surveys</span><span
                            className="pl-1">.</span></h3>
                        <p className="of_main my-4">Create engaging surveys to gather valuable feedback from your
                            audience. From ratings and multiple-choice to open-ended questions, Cuttly Surveys makes it
                            easy to collect insights and refine your marketing strategies. Track responses, analyze
                            data, and improve customer communication with ease.
                            <br/><br/>
                            See it in action ↓
                        </p>
                        <a href="s/survey" className="cutt_link rounded l_bg ml-0 pl-5 cutt_btn_all_f"
                           rel="noopener noreferrer" target="_blank"><span>Cuttly Survey</span></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Survey;