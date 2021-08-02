import { Link } from "react-router-dom";
import { useEffect } from "react";

// CSS
import "../../contents/css/profile/Profile.css";
import "../../contents/css/profile/SeungBin.css";

// Image
import Logo from "../../contents/logo/acp_black.png";
import sb_1 from "../../contents/image/sb_1.jpg";

import Instagram from "../../contents/icons/instagram.png";

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
                        <h2>안승빈</h2>
                    </div>
                </div>
            </header>
            <section className="history">
                <ul>
                    <li>
                        <h3>이력</h3>
                        <p>한국 체육대학교 건강관리학, 바디빌딩 전공</p>
                        <p>한국체대 체력관리 연구실 조교</p>
                        <p>K-bar 트레이닝 연구 활동</p>
                    </li>
                    <li>
                        <h3>수상</h3>
                        <p>2011미스터 경기 1위</p>
                        <p>전국 춘계 고교 및 대학선수권 1위</p>
                        <p>전국 미스터 YMCA 1위</p>
                        <p>미스터 코리아 라이트급 1위</p>
                        <p>제 92회 전국체전 경기도 대표 선수 밴턴급 은메달</p>
                    </li>
                    <li>
                        <h3>경력</h3>
                        <p>수원 파크 휘트니스 골프 체력 코치</p>
                        <p>암사 에비뉴 피트니스 트레이너</p>
                        <p>역삼 스타 휘트니스 트레이너</p>
                        <p>신사 피트니스 914 트레이너</p>
                        <p>수원 헬스 하우스 PT 팀장</p>
                        <p>삼성전자 임직원 전담 피트니스 코치</p>
                        <p>생활체육지도자 바디빌딩</p>
                    </li>
                    <li>
                        <h3>자격</h3>
                        <p>미국 체력협회 NSCA – CSCS</p>
                        <p>응급처치 자격</p>
                        <p>스포츠 마사지 1급</p>
                        <p>체형관리사 1급</p>
                    </li>
                </ul>
            </section>
            <img src={sb_1} alt="shot" />
            <section className="area left">
                <div>
                    <h2>전문분야</h2>
                    <h1>웨이트 트레이닝</h1>
                    <p>오랜 티칭과 경험, 지식을 바탕으로보다 체계화 되고 단계적인 저항운동 트레이닝을 계획해 고객이 원하는 몸을 만들기 위한 방향을 제시합니다.</p>
                    <Link to="/program/2">
                        <p>재활, 체형 교정 트레이닝 더 알아보기</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                </div>
            </section>
            <section className="area right">
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
                        <a href="https://www.instagram.com/loadedd443/">
                            <img src={Instagram} alt="instagram" />
                        </a>
                    </li>
                </ul>
            </section>

        </main>
    )
}
export default SeungBin;