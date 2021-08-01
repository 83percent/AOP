import { Route, Switch } from "react-router-dom"

import QnA from '../component/Etc/QnA';
import FAQ from '../component/Etc/FAQ';

const HelpRouter = () => {
    return (
        <Switch>
            <Route path="/help" component={QnA}/>
            <Route path="/faq" component={FAQ}/>
        </Switch>
    )
}

export default HelpRouter;