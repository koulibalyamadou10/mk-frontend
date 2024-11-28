import React from 'react';

function Discover(props) {
    return (
        <section className="max_1360 my-5 acc_a">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 py-5">
                        <h2 className="txt_badge">Link Management Tools</h2>
                        <h3 className="h2_index_2">Discover <span
                            className="accent_italic">the possibilities</span><br/> of managing short links<b
                            className="accent_acc">.</b></h3>
                        <p className="of_main my-4">Cuttly is a comprehensive Link Management Platform and URL shortener
                            that helps you take full control of your links. Easily manage your campaigns with features
                            like custom URL slugs, UTM codes for tracking, A/B testing, and mobile redirects. Plus,
                            enjoy advanced options like password-protected links and deep links — and much more.</p>

                    </div>


                    <div className="col-lg-6">
                        <div className="url_options rounded-6 shadow_on_white">
                            <div className="c_checkbox float-left w-50 m-0">
                                <input className="c_toggle" type="checkbox" id="cuttly_more_options" name="cuttly_m_o"
                                       value="" aria-label="more"/>
                                <label htmlFor="cuttly_more_options"
                                       className="c_check_label"><span><i></i></span></label>
                            </div>
                            <p className="data_link">2024-11-27</p>
                            <p className="nazwa_link pt-4">Cuttly | URL Shortener, Branded URLs, Link Management,
                                API <span
                                    className="small d-inline-flex justify-content-center align-items-center pl-3"></span>
                            </p>
                            <p className="url_link"><a href="https://cutt.ly/resources/support/short-link-features/"
                                                       target="blank">https://cutt.ly/resources/support/short-link-features/</a>
                                <span
                                    className="small d-inline-flex justify-content-center align-items-center pl-3"></span>
                            </p>
                            <p className="link_element">Cuttly short link: <a
                                href="https://cutt.ly/URL-Shortener-Features" id="url-features-copy"
                                className="short_url_l" target="blank">cutt.ly/URL-Shortener-Features</a> <span
                                className="small d-inline-flex justify-content-center align-items-center pl-3"></span>
                            </p>
                            <p className="link_element">Branded short link: <a
                                href="https://yourbrnd.link/URL-Shortener-Features" className="short_url_l"
                                target="blank">yourbrnd.link/URL-Shortener-Features</a> <span
                                className="small d-inline-flex justify-content-center align-items-center pl-3"></span>
                            </p>
                            <button className="btn-cutt i_s" onClick="copyToClipE(this)" data-toggle="tooltip"
                                    data-html="true" data-placement="top" data-original-title="Copy" aria-label="Copy">
                                Copy <svg className="i_svg" viewBox="0 0 24 24">
                                <use xlinkHref="#i_copy"></use>
                            </svg>
                            </button>
                            <a href="https://cutt.ly/resources/support/short-link-features/how-to-change-short-link-alias"
                               className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                               data-original-title="Change url alias / name" aria-label="Change url alias / name">
                                Change url alias / name <svg className="i_svg" viewBox="0 0 24 24">
                                <use xlinkHref="#i_edit"></use>
                            </svg>
                            </a>
                            <a href="https://cutt.ly/resources/support/short-link-features/how-to-set-utm-parameters"
                               className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                               data-original-title="UTM code generator" aria-label="UTM code generator">
                                UTM code generator <svg className="i_svg" viewBox="0 0 24 24">
                                <use xlinkHref="#i_utm"></use>
                            </svg>
                            </a><a
                            href="https://cutt.ly/resources/support/short-link-features/how-to-set-password-for-short-link"
                            className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                            data-original-title="Set a password" aria-label="Set a password">
                            Set a password <svg className="i_svg" viewBox="0 0 24 24">
                            <use xlinkHref="#i_password"></use>
                        </svg>
                        </a><a
                            href="https://cutt.ly/resources/support/short-link-features/how-to-add-alternative-redirects-for-mobile-links"
                            className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                            data-original-title="Mobile link redirects" aria-label="Mobile link redirects">
                            Mobile link redirects <svg className="i_svg" viewBox="0 0 24 24">
                            <use xlinkHref="#i_mobile"></use>
                        </svg>
                        </a><a
                            href="https://cutt.ly/resources/support/short-link-features/how-to-change-source-url-in-short-link"
                            className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                            data-original-title="change url<br> unique clicks" aria-label="change url / unique clicks">
                            change url / unique clicks <svg className="i_svg" viewBox="0 0 24 24">
                            <use xlinkHref="#i_source"></use>
                        </svg>
                        </a><a
                            href="https://cutt.ly/resources/support/short-link-features/how-to-change-link-title-displayed-in-dashboard"
                            className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                            data-original-title="Manage title" aria-label="Manage title">
                            Manage title <svg className="i_svg" viewBox="0 0 24 24">
                            <use xlinkHref="#i_title"></use>
                        </svg>
                        </a> <a
                            href="https://cutt.ly/resources/support/short-link-features/how-to-set-link-redirect-expiration"
                            className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                            data-original-title="Link redirect expiration" aria-label="Link redirect expiration">
                            Link redirect expiration <svg className="i_svg" viewBox="0 0 24 24">
                            <use xlinkHref="#i_expiration"></use>
                        </svg>
                        </a> <a
                            href="https://cutt.ly/resources/support/short-link-features/how-to-set-pixel-for-short-link"
                            className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                            data-original-title="Pixel settings" aria-label="Pixel settings">
                            Pixel settings <svg className="i_svg" viewBox="0 0 24 24">
                            <use xlinkHref="#i_pixel"></use>
                        </svg>
                        </a> <a
                            href="https://cutt.ly/resources/support/short-link-features/how-to-set-abc-test-for-short-link"
                            className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                            data-original-title="Test A/B/C" aria-label="Test A/B/C">
                            Test A/B/C <svg className="i_svg" viewBox="0 0 24 24">
                            <use xlinkHref="#ico_abtest"></use>
                        </svg>
                        </a> <a
                            href="https://cutt.ly/resources/support/short-link-features/how-to-generate-qr-code-for-short-link"
                            className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                            data-original-title="QR code generator" aria-label="QR code generator">
                            QR code generator <svg className="i_svg" viewBox="0 0 256 256">
                            <use xlinkHref="#i_qr"></use>
                        </svg>
                        </a> <a href="https://cutt.ly/resources/support/short-link-features/how-to-remove-short-link"
                                className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                                data-original-title="Remove this link" aria-label="Remove this link">
                            Remove this link <svg className="i_svg" viewBox="0 0 24 24">
                            <use xlinkHref="#i_remove"></use>
                        </svg>
                        </a>
                            <a href="https://cutt.ly/resources/support/short-link-features/how-to-share-short-link-on-social-media"
                               className="btn-cutt i_s" data-toggle="tooltip" data-html="true" data-placement="top"
                               data-original-title="Share on facebook" aria-label="Share on facebook">
                                Share on facebook <svg className="i_svg" viewBox="0 0 24 24">
                                <use xlinkHref="#i_fb"></use>
                            </svg>
                            </a>
                            <a href="https://twitter.com/intent/tweet?url=https://cutt.ly/URL-Shortener-Features"
                               rel="noopener noreferrer" target="_blank" className="twitter-share-button btn-cutt i_s"
                               data-toggle="tooltip" data-html="true" data-placement="top"
                               data-original-title="Share on twitter" aria-label="Share on twitter">
                                Share on twitter <svg className="i_svg" viewBox="0 0 24 24">
                                <use xlinkHref="#i_tw"></use>
                            </svg>
                            </a>
                            <p className="d-table w-100">
                                <a href="link-analytics/stats-for-short-link"
                                   className="btn-cutt click_stats additional_l_stats w-100" rel="noopener noreferrer"
                                   target="_blank">Link Analytics →
                                    <svg className="i_svg" viewBox="0 0 24 24">
                                        <use xlinkHref="#i_chart"></use>
                                    </svg>
                                    <span><b className="badge">259</b>clicks</span></a>
                            </p>
                        </div>
                        <div className="url_options rounded-6 add_shadow d-none" id="c_more_opt">
                            <p className="of_main p-2">By checking short links in your dashboard, you can perform
                                additional actions for them, such as: creating a <b>link in bio</b> from selected short
                                links, <b>hiding links</b>, adding them to your <b>favourites list</b> or merging links
                                into one <b>bulk link</b>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discover;