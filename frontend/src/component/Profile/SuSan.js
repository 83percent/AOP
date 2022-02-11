import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// CSS
import "../../contents/css/profile/Profile.css";
import "../../contents/css/profile/HyeongSeong.css";

// Image
import Logo from "../../contents/logo/acp_black.png";

// hy
import su1 from "../../contents/image/su1.jpg";
import su2 from "../../contents/image/su2.jpg";

import Instagram from "../../contents/icons/instagram.png";

const SuSan = () => {
    const [scaleImage, setScaleImage] = useState(null);
    const scaleRef = useRef(null);
    function imageScale(toggle, image) {
        if(toggle) {
            setScaleImage(image);
            scaleRef.current.classList.add("on");
        } else {
            scaleRef.current.classList.remove("on");
        }
    }    
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    return (
        <main className="profile hy">
            <div className="image-scale" ref={scaleRef} onClick={() => imageScale(false)}>
                <img src={scaleImage} alt="Profile Scale" />
            </div>
            <nav>
                <div>
                    <Link to="/">
                        <img src={Logo} alt="logo"/>
                    </Link>
                </div>
            </nav>
            <header>
                <div className="title">
                    <div className="name">
                        <h1>"한시간의 수업으로 평생이 변하도록 돕겠습니다.."</h1>
                        <h2>원수산</h2>
                    </div>
                </div>
            </header>
            <section className="history">
                <ul>
                    <li>
                        <h3>이력</h3>
                        <p>Yantai University</p>
                        <p>Department of mass communication</p>
                    </li>
                    <li>
                        <h3>경력</h3>
                        <p>판교점 가을앤피티 요가 트레이너</p>
                        <p>aop 퍼스널트레이닝 트레이너</p>
                    </li>
                    <li>
                        <h3>자격</h3>
                        <p>-국제요가지도자3급(KoreaYoga  instructor  association)</p>
                        <p>-비크람요가지도자(Korea yoga Master`s)</p>
                        <p>-빈야샤요가지도자(Korea yoga Master`s)</p>
                        <p>-HSK강사능력인증서(Confucius institute in seoul)</p>
                        <p>-RYTK300+ (Korea therapy yoga association)</p>
                        <p>-RYTK400+ (Korea therapy yoga association)</p>
                    </li>
                </ul>
            </section>
            <section className="image-wrapper">
                <div>
                    <ul>
                        <li className="main-image">
                            <img src={su1} alt="Profile 1" onClick={() => imageScale(true, su1)}/>
                        </li>
                        <li className="sub-image">
                            <img src={su2} alt="Profile 2" onClick={() => imageScale(true, su2)}/>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="area left">
                <div>
                    <h2>전문분야</h2>
                    <h1>기능성 트레이닝</h1>
                    <p>운동 능력 향상과 부상 방지를 위한 효과적인 프로그램을 제공하기 위해서 해당 스포츠만의 특별한 움직임을 분석 후 고객에게 알맞은 프로그램을 계획합니다</p>
                    <Link to="/program/1">
                        <p>기능성 트레이닝 더 알아보기</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                </div>
            </section>
            <section className="area right">
                <div>
                    <h2>전문분야</h2>
                    <h1>재활, 체형 교정 트레이닝</h1>
                    <p>재활프로그램은 움직임으로 인한 위험 민감 군에 속하는 고객들을 대상으로 적용되는 트레이닝인 만큼 스포츠의학 지식을 기반으로 전문 트레이너가 섬세한 프로그램을 제공합니다.</p>
                    <Link to="/program/2">
                        <p>재활, 체형 교정 트레이닝 더 알아보기</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                </div>
            </section>
            <section className="sns">
                <h1>더 궁금한게 있다면.</h1>
                <ul>
                    <li>
                        <a href="https://instagram.com/sani_yoga_/">
                            <img src={Instagram} alt="instagram" />
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default SuSan;