import React from 'react' // 引入react
import {
	Route,
	IndexRoute
} from 'react-router' // 引入react路由
import App from './components/App'
// import { App, AddItems, Foo } from './containers' // 
import Home from './components/Home'
import Subpage from './components/Subpage'
import Subitem from './components/Subitem'
import Login from './components/Login'
//<IndexRoute 和<Route 有什么区别
export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="home" component={Home}/>
        <Route path="posts" component={Subpage}/>
        <Route path="posts/:id" component={Subitem}/>
		<Route path="login" component={Login}/>
    </Route>
)