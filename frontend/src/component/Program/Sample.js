import MainImage from '../../contents/image/home_background.jpg';

const Sample = () => {
    return (
        <main style={{backgroundImage: `linear-gradient(318deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 44%), url(${MainImage})`}}>
            <header>
                <h1>벌크업</h1>
            </header>
            <section></section>
        </main>
    )
}
export default Sample;