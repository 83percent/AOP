import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// CSS
import "../../contents/css/profile/Profile.css";
import "../../contents/css/profile/HyeongSeong.css";

// Image
import Logo from "../../contents/logo/acp_black.png";

// hy
import hy1 from "../../contents/image/hy1.jpg";
import hy2 from "../../contents/image/hy2.jpg";
import hy3 from "../../contents/image/hy3.jpg";
import hy4 from "../../contents/image/hy4.jpg";
import hy5 from "../../contents/image/hy5.jpg";
import hy6 from "../../contents/image/hy6.jpg";

import BlogIcon from "../../contents/icons/naver_blog.png";
import Instagram from "../../contents/icons/instagram.png";
import YoutubeIcon from "../../contents/icons/icon_youtube.png";

const HyeongSeong = () => {
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
                        <h1>"마음이 변화하는 트레이닝을 드리고 싶습니다."</h1>
                        <h2>전형성</h2>
                    </div>
                </div>
            </header>
            <section className="history">
                <ul>
                    <li>
                        <h3>이력</h3>
                        <p>경희대학교 스포츠지도학과</p>
                        <p>수원공업고등학교 보디빌딩부</p>
                    </li>
                    <li>
                        <h3>수상</h3>
                        <p>2013 전국체전 +75kg 1위</p>
                        <p>2013 전국ymca보디빌딩대회 –80 1위</p>
                        <p>2013 전국고교보디빌딩대회 –80 1위</p>
                        <p>2012 미스터경기 –80kg 1위</p>
                    </li>
                    <li>
                        <h3>경력</h3>
                        <p>전 스킬업 휘트니스 퍼스널 트레이너</p>
                        <p>전 더원운동과학센터 퍼스널 트레이너</p>
                        <p>전 신라 호텔 퍼스널 트레이너</p>
                        <p>전 근본퍼스널트레이닝 퍼스널 트레이너</p>
                    </li>
                    <li>
                        <h3>자격</h3>
                        <p>생활스포츠지도사 2급</p>
                        <p>Fitt 측정평가사</p>
                        <p>ITC 통합적 위협조절 수료</p>
                        <p>잠백이카페 칼럼리스트 [10컷 트레이닝]</p>
                        <p>가톨릭병원 NASM 교정운동학 수료</p>
                        <p>경희대학교 무아컨퍼런스 운동학습 프리젠터</p>
                    </li>
                </ul>
            </section>
            <section className="image-wrapper">
                <div>
                    <ul>
                        <li className="main-image">
                            <img src={hy1} alt="Profile 1" onClick={() => imageScale(true, hy1)}/>
                        </li>
                        <li className="sub-image">
                            <img src={hy2} alt="Profile 2" onClick={() => imageScale(true, hy2)}/>
                            <img src={hy3} alt="Profile 3" onClick={() => imageScale(true, hy3)}/>
                        </li>
                    </ul>
                    <div className="sub-image">
                        <img src={hy4} alt="Profile 4" onClick={() => imageScale(true, hy4)}/>
                        <img src={hy6} alt="Profile 6" onClick={() => imageScale(true, hy6)}/>
                        <img src={hy5} alt="Profile 5" onClick={() => imageScale(true, hy5)}/>
                    </div>
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
            <section className="area left">
                <div>
                    <h2>전문분야</h2>
                    <h1>다이어트</h1>
                    <p>지속가능성이 중요한 다이어트 프로그램인 만큼 트레이너와 회원과의 긴밀한 커뮤니케이션을 유지하여 식단과 개인 운동 프로그램을 체크하고 정체기에 빠지지 않게 하기 위해서 간헐적으로 새로운 운동 프로그램을 갱신합니다. </p>
                    <Link to="/program/4">
                        <p>다이어트 더 알아보기</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                </div>
            </section>
            <section className="sns">
                <h1>더 궁금한게 있다면.</h1>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/1mind___/">
                            <img src={Instagram} alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://blog.naver.com/hyenggoo1">
                            <img src={BlogIcon} alt="blog" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCtSibzTyjR8x7JSAFh8WWsg">
                            <img src={YoutubeIcon} alt="youtube" />
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default HyeongSeong;