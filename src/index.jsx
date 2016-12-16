import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './stores/AppState';
import AppState1 from './stores/AppState1';
import {
  Provider
} from 'mobx-react'
import {
  Router,
  browserHistory
} from 'react-router' // Browser history 是由 React Router 创建浏览器应用推荐的 history
import App from './components/App'
import routes from './routes' // 引入路由配置
import "babel-polyfill";
const appState = new AppState1();

render(
  <AppContainer>
    <Provider store={appState}>
      <div>
        <Router history={browserHistory} routes={routes} />
    </div>
  </Provider>
    
  </AppContainer>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     const NextApp = require('./components/App').default;

//     render(
//       <AppContainer>
//         <NextApp appState={appState} />
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }
