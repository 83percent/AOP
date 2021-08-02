import MainImage from '../../contents/image/diet.jpg';

const Program1 = () => {
    return (
        <main style={{backgroundImage: `linear-gradient(318deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 44%), url(${MainImage})`}}>
            <header>
                <h1>다이어트</h1>
            </header>
            <section className="explain">
                <p>고객의 생활패턴과 심리상태에 걸맞은 운동 프로그램과 식단을 제공하여 고객이 최소한의 노력으로 목표 체중에 도달할 수 있도록 도움을 드립니다.</p>
                <p>지속가능성이 중요한 다이어트 프로그램인 만큼 트레이너와 회원과의 긴밀한 커뮤니케이션을 유지하여 식단과 개인 운동 프로그램을 체크하고</p>
                <p>정체기에 빠지지 않게 하기 위해서 간헐적으로 새로운 운동 프로그램을 갱신합니다. </p>
            </section>
            <section className="process">
                <h1>진행과정</h1>
                <div>
                    <div>
                        <p>회원님과의 인터뷰</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>목표 설정</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>체지방감소 목적</p>
                        <p>프로그램 구성</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>근지구력 및 HIIT성향</p>
                        <p>트레이닝 적용</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>결과 분석 및</p>
                        <p>프로그램 수정</p>
                    </div>
                    <i className="material-icons">chevron_right</i>
                    <div>
                        <p>목표 달성</p>
                    </div>
                </div>
            </section>
            <section className="recommand">
                <h1>이런 분들에게 추천해요.</h1>
                <div>
                    <div className="dot"></div>
                    <p>체중감량을 원하시는 분</p>
                </div>
                <div>
                    <div className="dot"></div>
                    <p>몸매를 변화시키고 싶은 분</p>
                </div>
            </section>
        </main>
    )
}
export default Program1;