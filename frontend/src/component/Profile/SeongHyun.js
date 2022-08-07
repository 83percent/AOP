import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// CSS
import "../../contents/css/profile/Profile.css";
import "../../contents/css/profile/SeongHyun.css";

// Image
import Logo from "../../contents/logo/acp_black.png";

// hy
import sh1 from "../../contents/image/sh2.jpg";
import sh2 from "../../contents/image/sh6.jpg";

import BlogIcon from "../../contents/icons/naver_blog.png";
import Instagram from "../../contents/icons/instagram.png";

const SeongHyun = () => {
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
                        <h1>"운동하러 오는길이 기대와 설렘으로 가득차게 만들어 드리겠습니다."</h1>
                        <h2>김성현</h2>
                    </div>
                </div>
            </header>
            <section className="history">
                <ul>
                    <li>
                        <h3>이력</h3>
                        <p>용인대학교 유도학과</p>
                    </li>
                    <li>
                        <h3>수상</h3>
                        <p>icn 인천 스포츠모델 4위</p>
                    </li>
                    <li>
                        <h3>경력</h3>
                        <p>피트니스 파이브 트레이너</p>
                    </li>
                    <li>
                        <h3>자격</h3>
                        <p>노인체육지도자 1급 </p>
                        <p>독일 라이프가드 자격 수료</p>
                        <p>생활체육지도자 2급</p>
                    </li>
                </ul>
            </section>
            <section className="image-wrapper">
                <div>
                    <ul>
                        <li className="main-image">
                            <img src={sh1} alt="Profile 1" onClick={() => imageScale(true, sh1)}/>
                            <img src={sh2} alt="Profile 1" onClick={() => imageScale(true, sh2)}/>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="sns">
                <h1>더 궁금한게 있다면.</h1>
                
                <ul>
                    <li>
                        <a href="https://www.instagram.com/_sunghyeonida/">
                            <img src={Instagram} alt="instagram" />
                        </a>
                    </li>
                    {/*}
                    <li>
                        <a href="https://blog.naver.com/hyenggoo1 ">
                            <img src={BlogIcon} alt="blog" />
                        </a>
                    </li>
                    {*/} 
                </ul>
            </section>
        </main>
    )
}

export default SeongHyun;