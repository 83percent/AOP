import '../../contents/css/main/Map.css';
const Map = () => {
    
    return (
        <section className="map">
            <div className="title">
                <h1>찾아오는 길.</h1>
                <p>경기도 성남시 분당구 황새울로200번길 34 Ko Fo Mo 빌딩 205, 206호</p>
            </div>
            <div className="map-wrapper">
                <div>
                    <div className="map-frame">
                        <a href="https://map.kakao.com/?urlX=525212.0&amp;urlY=1077188.0&amp;name=%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EB%B6%84%EB%8B%B9%EA%B5%AC%20%ED%99%A9%EC%83%88%EC%9A%B8%EB%A1%9C200%EB%B2%88%EA%B8%B8%2034&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank" rel="noreferrer">
                            <img className="map" src="http://t1.daumcdn.net/roughmap/imgmap/39011f9a3f9b1c5e9006bc53ec1767bc1f7c1ba5544fa72cfc4b223a24d95d37" alt="map" />
                        </a>
                    </div>
                    <div className="map-footer">
                        <a href="https://map.kakao.com" target="_blank" rel="noreferrer">
                            <img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"alt="카카오맵"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Map