import React from 'react';
import Emlogo from '../../images/EmLogo.png';
import HRLogo from '../../images/HRLogo.svg'
import { Row,Col,Button, Container } from 'react-bootstrap'
const Login = () => {
    return (
        <Row >
            <Col md={6} id="map">
                <Row className="justify-content-center">
                    <Col md={6} xs={12} className="innerContent mt-5 justify-content-center">
                        <img className="emLogo" src={Emlogo} alt="Emarat Logo" />
                        <h1 className="BahijH text-center">خوش آمدید</h1>
                        <p style={{fontSize:18}} className="bodyFont text-center">ما دائماً در تلا شیم تا تمام فعالیت های
                            ریاست
                            منابع
                            بشری د افغانستان برشنا شرکت را به شیوه ای استاندارد و دیجیتالی انجام دهیم تا از کارایی و شفافیت
                            امور یومیه اطمینان حاصل شود.
                        </p>
                        <h6 className="p-2 text-center">ریاست منابع بشری</h6>
                    </Col>
                </Row>
            </Col>
            <Col md={6} id="formdiv">
                    <div className=" loginBody text-center shadDiv p-2">
                        <img className="hrLogo" src={HRLogo} width="40%" alt="DABS HR Logo" />
                        <p >دخول به سیستم</p>
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
                            <Button className="form-control" id="loginbutton" >ورود به سیستم</Button>
                            <br />
                            <br />
                        </form>
                    </div>
                </Col>
        </Row>
    );
};

export default Login;