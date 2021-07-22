
// CSS
import "../../contents/css/profile/Profile.css";
import "../../contents/css/profile/SeungBin.css";

// Image
import Logo from "../../contents/logo/acp_black.png";
import Image1 from "../../contents/image/profile1_1.jpg";
import Massage from "../../contents/image/massage.jpg";
import BodyProfile from "../../contents/image/home_background.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SeungBin = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    });
    return (
        <main className="profile se">
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
                        <h1>"</h1>
                        <h1>정보가 넘쳐나는 시대입니다.</h1>
                        <h1>진짜와 가짜가 뒤섞인 곳에서</h1>
                        <h1>진짜배기 바디컨설팅과 트레이닝을 전해드리겠습니다.</h1>
                        <h1>"</h1>
                        <h2>임승빈</h2>
                    </div>
                </div>
            </header>
            <section className="history">
                <div>
                    <div>

                        <h3>이력</h3>
                        <p>한국 체육대학교 건강관리학, 바디빌딩 전공</p>
                        <p>한국체대 체력관리 연구실 조교</p>
                        <p>K-bar 트레이닝 연구 활동</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>수상</h3>
                        <p>2011미스터 경기 1위</p>
                        <p>전국 춘계 고교 및 대학선수권 1위</p>
                        <p>전국 미스터 YMCA 1위</p>
                        <p>미스터 코리아 라이트급 1위</p>
                        <p>제 92회 전국체전 경기도 대표 선수 밴턴급 은메달</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>경력</h3>
                        <p>수원 파크 휘트니스 골프 체력 코치</p>
                        <p>암사 에비뉴 피트니스 트레이너</p>
                        <p>역삼 스타 휘트니스 트레이너</p>
                        <p>신사 피트니스 914 트레이너</p>
                        <p>수원 헬스 하우스 PT 팀장</p>
                        <p>삼성전자 임직원 전담 피트니스 코치</p>
                        <p>생활체육지도자 바디빌딩</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>자격</h3>
                        <p>미국 체력협회 NSCA – CSCS</p>
                        <p>응급처치 자격</p>
                        <p>스포츠 마사지 1급</p>
                        <p>체형관리사 1급</p>
                    </div>
                </div>
            </section>
            <img src={Image1} alt="shot" />
            <section className="area">
                <div>
                    <div>
                        <h2>전문분야</h2>
                        <h1>바디 프로필</h1>
                        <p>인생의 한 장을 빛낼 여러분을 만들어보세요.</p>
                        <p>촬영날짜에 고객님을 위한 맞춤 프로그램 및 식단 조절까지</p>
                        <p>전문가와 상담 후 완벽한 여러분을 만들 준비를 해보세요.</p>
                        <Link>
                            <p>바디 프로필 프로그램 더 알아보기</p>
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
                        <h1>스포츠 마사지</h1>
                        <p>운동은 마무리가 중요합니다.</p>
                        <p>자극이 가해진 근육을 풀어주지 않으면 운동은 </p>
                        <p>오히려 몸에 독이 될 수 있습니다.</p>
                        <p>마사지를 통해 근육을 풀어줘 운동 효과를 극대화해보세요.</p>
                        <Link>
                            <p>스포츠 마사지 더 알아보기</p>
                            <i className="material-icons">chevron_right</i>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="sns">
                <h1>더 궁금한게 있다면.</h1>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/loadedd443/">
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>
                </ul>
            </section>

        </main>
    )
}
export default SeungBin;