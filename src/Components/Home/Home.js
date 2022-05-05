import React from 'react';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div id="map" className="col-md-6">
                    <div className="row justify-content-center">
                        <div className="innerContent col-md-6 col-xs-12 mt-5 justify-content-center">
                            <img className="emLogo" src="~/images/Login/EmLogo.png" alt="Emarat Logo" />
                            <h1 className="BahijH text-center" style="font-size:36pt;">خوش آمدید</h1><br />
                            <p style="font-size:18px;" className="bodyFont text-center">ما دائماً در تلا شیم تا تمام فعالیت های
                                ریاست
                                منابع
                                بشری د افغانستان برشنا شرکت را به شیوه ای استاندارد و دیجیتالی انجام دهیم تا از کارایی و شفافیت
                                امور یومیه اطمینان حاصل شود.</p>
                            <h6 className="p-2 text-center">ریاست منابع بشری</h6>
                        </div>
                    </div>
                </div>
                <div id="formdiv" className="col-md-6">
                    <div className=" loginBody text-center shadDiv p-2" style="background-color: rgba(247,248,250,1);"><br />
                        <img className="hrLogo" src="../images/Login/HRLogo.svg" width="40%" alt="DABS HR Logo" /><br />
                        <p style="color: rgba(241,144,32,1);font-size:22px;">دخول به سیستم</p>
                        <span className="bodyFont msg">
                            سیستم مدیریتی منابع بشری یک سیستم محفوظ است و برای دسترسی به اطلاعات تان باید وارد سیستم شوید.
                        </span>
                        <form>
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><i className="icon fas fa-user "></i></span>
                                <input type="text" id="username" className="form-control username" name="Email"
                                placeholder=" ای دی نمبر کارمند" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                            <br />
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><i className="icon fas fa-lock"></i></span>
                                <input type="password" id="password" className="form-control password" name="Password"
                                placeholder=" پاسورد کارمند" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                            <br />
                            <input type="submit" className="form-control" id="loginbutton" value="داخل سیستم شوید" />
                            <br />
                            <br />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;