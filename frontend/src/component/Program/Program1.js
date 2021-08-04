
const Program1 = () => {
    return (
        <main id="program1">
            <div className="title">
                <h1>기능성 트레이닝</h1>
                <p>전문 코치진이 움직임에 대한 깊은 이해를 바탕으로 다양한 도구와 훈련프로그램을 통해 움직임을 향상시키는 프로그램입니다.</p>
                <p>기존에 하고 계시는 스포츠(골프, 테니스, 축구, 농구 등)에서의 <strong>능력 향상과 부상 방지를 위한 효과적인 프로그램을 제공</strong>하기 위해서 해당 스포츠만의 특별한 움직임을 분석 후 고객에게 알맞은 프로그램을 계획합니다.</p>
                <p>또한 좌업식 생활에 익숙한 현대인이 잃어버린 신체의 기본적인 움직임들을 되찾기 위한 트레이닝이 진행됩니다.</p>
            </div>
            <div className="image-frame"></div>
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
                        <p>기본체력 프로그램</p>
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
                    <p><strong>수술 후 후유증</strong>을 겪고 있는 분</p>
                </div>
                <div>
                    <div className="dot"></div>
                    <p>움직임 시 <strong>전에 없던 통증</strong>이 발생하는 분</p>
                </div>
                <div>
                    <div className="dot"></div>
                    <p>자신의 <strong>체형이 틀어졌다고 생각</strong>되는 분</p>
                </div>
            </section>
        </main>
    )
}
export default Program1;