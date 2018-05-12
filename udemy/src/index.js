import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//services
//import {BrowserRouter} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

// components
import App from './components/App';
import Connexion from './components/Connexion';
//import NotFound from './NotFound';

const Root = () => {
    return(
        <Router>
           <Switch>
               <div>
                   <Route exact path="/" component={Connexion} />
                   <Route path="/pseudo/:pseudo" component={App} />
               </div>
           </Switch>
        </Router>
    );
}

// We give each route either a target `component`, or we can send functions in `render` or `children`
// that return valid nodes. `children` always returns the given node whether there is a match or not.



ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
