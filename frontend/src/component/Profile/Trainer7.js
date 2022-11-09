import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// CSS
import "../../contents/css/profile/Profile.css";
import "../../contents/css/profile/HyeongSeong.css";

// Image
import Logo from "../../contents/logo/acp_black.png";

// Profile Image

import Tariner7_3 from "../../contents/image/Trainer7_3.jpg";
import Tariner7_4 from "../../contents/image/Trainer7_4.jpg";
import Tariner7_5 from "../../contents/image/Trainer7_5.jpg";
import Tariner7_6 from "../../contents/image/Trainer7_6.jpg";

import Instagram from "../../contents/icons/instagram.png";

const Trainer7 = () => {
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
                        <h1>"변화하는 기쁨을 함께 만들어 가겠습니다."</h1>
                        <h2>윤승환</h2>
                    </div>
                </div>
            </header>
            <section className="history">
                <ul>
                    <li>
                        <h3>이력</h3>
                        <p>한국체대 운동건강관리학과</p>
                    </li>
                    <li>
                        <h3>경력</h3>
                        <p>파리휘트니스 서현점 트레이너</p>
                        <p>파리휘트니스 서현점 스피닝, 태보 강사</p>
                        <p>오리 터닝포인트짐 스피닝 강사</p>
                        <p>모란, 단대오거리 업텐션짐 트레이너</p>                        
                    </li>
                    <li>
                        <h3>자격</h3>
                        <p>생활스포츠지도사 2급 보디빌딩</p>
                        <p>유아체육지도자 1급</p>
                        <p>스포츠 마사지 1급</p>
                        <p>체형관리사 1급</p>
                    </li>
                </ul>
            </section>
            <section className="image-wrapper">
                <div>
                    <ul>
                        <li className="main-image">
                            <img src={Tariner7_3} alt="Profile 1" onClick={() => imageScale(true, Tariner7_3)}/>
                            <img src={Tariner7_4} alt="Profile 2" onClick={() => imageScale(true, Tariner7_4)}/>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="main-image">
                            <img src={Tariner7_5} alt="Profile 1" onClick={() => imageScale(true, Tariner7_5)}/>
                            <img src={Tariner7_6} alt="Profile 2" onClick={() => imageScale(true, Tariner7_6)}/>
                        </li>
                    </ul>
                </div>
            </section>
            {/*
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
            */}
        </main>
    )
}

export default Trainer7;