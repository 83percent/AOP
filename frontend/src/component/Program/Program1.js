import MainImage from '../../contents/image/home_background.jpg';

const Program1 = () => {
    return (
        <main style={{backgroundImage: `linear-gradient(318deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 44%), url(${MainImage})`}}>
            <header>
                <h1>기능성 트레이닝</h1>
            </header>
            <section className="explain">
                <p>기능성 트레이닝이란 전문 코치진이 움직임에 대한 깊은 이해를 바탕으로 움직임 능력 향상을 위하여 다양한 도구를 사옹한 기술훈련으로써 신체적 역량을 높이는 프로그램입니다.</p>
                <p>고객이 개선시키고자 하는 움직임(기술)을 미시적, 거시적 분석을 하여 고객의 개별성을 고려한 트레이닝 프로그램이 제공됩니다.</p>
                <p>최적의 움직임을 만들어내기 위해서 제약기반 접근법을 기조로 다변화학습법, 무작위 학습법이 적용됩니다.</p>
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