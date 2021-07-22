import MainImage from '../../contents/image/home_background.jpg';

const Program1 = () => {
    return (
        <main style={{backgroundImage: `linear-gradient(318deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 44%), url(${MainImage})`}}>
            <header>
                <h1>재활 트레이닝</h1>
            </header>
            <section className="explain">
                <p>수술을 끝내고 컨디션 회복을 위하여 운동을 시작한 고객, 움직임 기능 장애가 있는 고객, 만성통증이 있는 고객들을 위하여 통증조절, 신체 기능 개선, 체내 순환을 위한 프로그램입니다.</p>
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