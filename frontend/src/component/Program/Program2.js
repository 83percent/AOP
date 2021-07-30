import MainImage from '../../contents/image/home_background.jpg';

const Program1 = () => {
    return (
        <main style={{backgroundImage: `linear-gradient(318deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 44%), url(${MainImage})`}}>
            <header>
                <h1>재활, 체형 교정 트레이닝</h1>
            </header>
            <section className="explain">
                <p>수술을 끝내고 컨디션 회복을 위하여 운동을 시작한 고객, 움직임 기능 장애가 있는 고객, 만성통증이 있는 고객들을 위하여 통증조절, 신체 기능 개선, 체내 순환을 위한 프로그램입니다.</p>
                <p>다수의 환자가 재활을 하지 않아 통증 재발, 만성통증 발현, 재부상 등이 발생합니다.</p>
                <p>재활프로그램은 움직임으로 인한 위험 민감 군에 속하는 고객들을 대상으로 적용되는 트레이닝인 만큼 스포츠의학 지식을 기반으로 전문 트레이너가 섬세한 프로그램을 제공합니다.</p>
            </section>
            <section className="process">
                <h1>진행과정</h1>
                <div>
                    <div>
                        <p>회원님과의 인터뷰</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>의사와 트레이너간의</p>
                        <p>정보교환</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>통증 패턴 확인</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>움직임 분석</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>근거 기반 트레이닝</p>
                        <p>프로그램 계획 및 적용</p>
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
                    <p>수술 후 후유증을 겪고 있는 분</p>
                </div>
                <div>
                    <div className="dot"></div>
                    <p>움직임 시 전에 없던 통증이 발생하는 분</p>
                </div>
                <div>
                    <div className="dot"></div>
                    <p>자신의 체형이 틀어졌다고 생각되는 분</p>
                </div>
            </section>
        </main>
    )
}
export default Program1;