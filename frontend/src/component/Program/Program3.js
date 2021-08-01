import MainImage from '../../contents/image/home_background.jpg';

const Program1 = () => {
    return (
        <main style={{backgroundImage: `linear-gradient(318deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 44%), url(${MainImage})`}}>
            <header>
                <h1>웨이트 트레이닝</h1>
            </header>
            <section className="explain">
                <p>보디빌딩 전국대회 메달리스트 출신의 코치진이 고객이 원하는 바디 쉐이핑을 위해서 실질적이고 효과적인 트레이닝 프로그램을 제공합니다.</p>
                <p>코치들의 오랜 티칭과 경험, 지식을 바탕으로보다 체계화 되고 단계적인 저항운동 트레이닝을 계획해 고객이 원하는 몸을 만들기 위한 방향을 제시합니다.</p>
            </section>
            <section className="process">
                <h1>진행과정</h1>
                <div>
                    <div>
                        <p>회원님과의 인터뷰</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>식단 제공</p>
                        <p>기본체력프로그램</p>
                        <p>GPP</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>단계적 주기화</p>
                        <p>트레이닝</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>결과분석 및 수정</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>목표달성</p>
                    </div>
                </div>
            </section>
            <section className="recommand">
                <h1>이런 분들에게 추천해요.</h1>
                <div>
                    <div className="dot"></div>
                    <p>정석적인 웨이트 트레이닝을 습득하고 싶은 분</p>
                </div>
                <div>
                    <div className="dot"></div>
                    <p>바디프로필, 피트니스 시합 준비를 희망하시는 분</p>
                </div>
            </section>
        </main>
    )
}
export default Program1;