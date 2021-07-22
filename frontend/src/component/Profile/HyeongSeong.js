
// CSS
import "../../contents/css/profile/Profile.css";
import "../../contents/css/profile/HyeongSeong.css";


// Image
import Logo from "../../contents/logo/acp_black.png";
import Image1 from "../../contents/image/profile1_1.jpg";
import Massage from "../../contents/image/massage.jpg";
import BodyProfile from "../../contents/image/home_background.jpg";
import BlogIcon from "../../contents/icons/blog.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HyeongSeong = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    });
    return (
        <main className="profile hy">
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
                <div>
                    <div>

                        <h3>이력</h3>
                        <p>경희대학교 스포츠지도학과</p>
                        <p>수원공업고등학교 보디빌딩부</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>수상</h3>
                        <p>2013 전국체전 +75kg 1위</p>
                        <p>2013 전국ymca보디빌딩대회 –80 1위</p>
                        <p>2013 전국고교보디빌딩대회 –80 1위</p>
                        <p>2012 미스터경기 –80kg 1위</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>경력</h3>
                        <p>전 스킬업 휘트니스 퍼스널 트레이너</p>
                        <p>전 더원운동과학센터 퍼스널 트레이너</p>
                        <p>전 신라 호텔 퍼스널 트레이너</p>
                        <p>전 근본퍼스널트레이닝 퍼스널 트레이너</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>자격</h3>
                        <p>생활스포츠지도사 2급</p>
                        <p>Fitt 측정평가사</p>
                        <p>ITC 통합적 위협조절 수료</p>
                        <p>잠백이카페 칼럼리스트 [10컷 트레이닝]</p>
                        <p>가톨릭병원 NASM 교정운동학 수료</p>
                        <p>경희대학교 무아컨퍼런스 운동학습 프리젠터</p>
                    </div>
                </div>
            </section>
            <img src={Image1} alt="shot" />
            <section className="area">
                <div>
                    <div>
                        <h2>전문분야</h2>
                        <h1>기능성 트레이닝</h1>
                        <p>인생의 한 장을 빛낼 여러분을 만들어보세요.</p>
                        <p>촬영날짜에 고객님을 위한 맞춤 프로그램 및 식단 조절까지</p>
                        <p>전문가와 상담 후 완벽한 여러분을 만들 준비를 해보세요.</p>
                        <Link to="/program/1">
                            <p>기능성 트레이닝 더 알아보기</p>
                            <i className="material-icons">chevron_right</i>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={BodyProfile} alt="BodyProfile" />
                </div>
            </section>
            <section className="area">
                <div>
                    <img src={Massage} alt="Massage" />
                </div>
                <div className="right">
                    <div>
                        <h2>전문분야</h2>
                        <h1>재활, 체형 교정 트레이닝</h1>
                        <p>운동은 마무리가 중요합니다.</p>
                        <p>자극이 가해진 근육을 풀어주지 않으면 운동은 </p>
                        <p>오히려 몸에 독이 될 수 있습니다.</p>
                        <p>마사지를 통해 근육을 풀어줘 운동 효과를 극대화해보세요.</p>
                        <Link to="/program/2">
                            <p>재활, 체형 교정 트레이닝 더 알아보기</p>
                            <i className="material-icons">chevron_right</i>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="sns">
                <h1>더 궁금한게 있다면.</h1>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/aop_hsj/">
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://blog.naver.com/hyenggoo1 ">
                            <img src={BlogIcon} alt="blog" />
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default HyeongSeong;