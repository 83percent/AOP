import MainImage from '../../contents/image/home_background.jpg';

const Program1 = () => {
    return (
        <main style={{backgroundImage: `linear-gradient(318deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 44%), url(${MainImage})`}}>
            <header>
                <h1>기능성 트레이닝</h1>
            </header>
            <section className="explain">
                <p>전문 코치진이 움직임에 대한 깊은 이해를 바탕으로 다양한 도구와 훈련프로그램을 통해 움직임을 향상시키는 프로그램입니다.</p>
                <p>기존에 하고 계시는 스포츠(골프, 테니스, 축구, 농구 등)에서의 능력 향상과 부상 방지를 위한 효과적인 프로그램을 제공하기 위해서</p>
                <p>해당 스포츠만의 특별한 움직임을 분석 후 고객에게 알맞은 프로그램을 계획합니다.</p>
                <p>또한 좌업식 생활에 익숙한 현대인이 잃어버린 신체의 기본적인 움직임들을 되찾기 위한 트레이닝이 진행됩니다. </p>
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
                        <p>개별 움직임</p>
                        <p>개선 프로그램</p>
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
                    <p>구속 증가, 골프 비거리 증가 등 기술을 향상시키고 싶은 분</p>
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