import { useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router';

// Component
import Main from '../component/Main/Main.js';

// CSS
import '../contents/css/main/Main.css';
const MainRouter = () => {
    const botNav = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', function(e) {
            if(this.scrollY < 100) botNav.current.classList.add("on");
            else botNav.current.classList.remove("on");
        });
    }, []);
    return (
        <div className="main-wrapper">
            <nav className="fixed-button">
                <div ref={botNav} className="on">
                    <button>1:1 PT 무료 체험하기</button>
                </div>
            </nav>
            <header>

            </header>
            <Switch>
                <Route path="/" component={Main} />
                
            </Switch>
            
        </div>
    )
}

export default MainRouter;