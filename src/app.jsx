import { Fragment } from "react";
import { HashRouter,BrowserRouter} from "react-router-dom";
import Container from "@/pages";

const App = () => {
    return <Fragment>
        <HashRouter>
            <Container />
        </HashRouter>
    </Fragment>
    // return <Fragment>
    //     <BrowserRouter>
    //         <Container />
    //     </BrowserRouter>
    // </Fragment>
}

export default App;