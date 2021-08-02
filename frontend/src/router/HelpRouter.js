import { Route, Switch } from "react-router-dom"

import QnA from '../component/Etc/QnA';
import FAQ from '../component/Etc/FAQ';
import QnAWrite from "../component/Etc/QnAWrite";

const HelpRouter = () => {
    return (
        <Switch>
            <Route exact path="/help" component={QnA}/>
            <Route exact path="/help/write" component={QnAWrite}/>
            <Route path="/faq" component={FAQ}/>
        </Switch>
    )
}

export default HelpRouter;