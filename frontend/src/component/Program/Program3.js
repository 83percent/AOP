import MainImage from '../../contents/image/home_background.jpg';

const Program1 = () => {
    return (
        <main style={{backgroundImage: `linear-gradient(318deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 44%), url(${MainImage})`}}>
            <header>
                <h1>근력, 근육량 증가 트레이닝</h1>
            </header>
            <section className="explain">
                <p>보디빌더 출신 전문 코치진이 보디빌딩식 웨이트 트레이닝으로 고객이 원하는 몸매에 도달하도록 도와드리는 프로그램입니다.</p>
            </section>
            <section className="process">
                <h1>진행과정</h1>
                <div>
                    <div>
                        <p>회원님과의 인터뷰</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>움직임 분석</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>기본체력프로그램</p>
                        <p>GPP</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>특이성프로그램</p>
                        <p>SPP</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>결과분석</p>
                    </div>
                </div>
            </section>
            <section className="recommand">
                <h1>이런 분들에게 추천해요.</h1>
                <div>
                    <div className="dot"></div>
                    <p>골프 비거리를 늘리고 싶은 분</p>
                </div>
                <div>
                    <div className="dot"></div>
                    <p>기본적인 운동능력을 향상 시키고 싶은 분</p>
                </div>
            </section>
        </main>
    )
}
export default Program1;