import React from 'react';

function QrCode(props) {
    return (
        <section className="max_1360 my-5 main_dark_a">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 py-4">
                        <h2 className="txt_badge badge_main_dark_light">QR code generator</h2>
                        <h3 className="h2_index_2">Create stylish and <span
                            className="accent_italic">branded </span><br/> <span
                            className="accent_italic">QR codes</span> to grow your business<b
                            className="green_acc">.</b></h3>
                        <p className="of_main my-4">Generate and customize QR codes for short links, link-in-bio pages,
                            and surveys to match your brand's style. Easily edit QR codes by tweaking shapes, colors,
                            and adding your logo. Increase engagement and track clicks with ease.</p>

                    </div>
                    <div className="col-lg-6 text-center"><p>See it in action ↓<br/><img
                        src="img/cuttbioURL-Shortener.webp" className="qr_c_main_c" width="150" height="150"
                        alt="Cuttly - URL Shortener - QR code" loading="lazy"/></p></div>
                </div>
            </div>
        </section>
    );
}

export default QrCode;