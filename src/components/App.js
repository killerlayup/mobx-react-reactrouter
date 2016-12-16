import React, {
	Component
} from 'react'
import {
	Provider,
	observer,
	inject
} from 'mobx-react'
import {
	Router,
	browserHistory
} from 'react-router' // Browser history 是由 React Router 创建浏览器应用推荐的 history

import DevTools from 'mobx-react-devtools'
import routes from '../routes' // 引入路由配置
import TopBar from './TopBar'
import Home from './Home'
import Subpage from './Subpage'


@inject("store") @observer
export default class App extends Component {
	constructor(props) {
		super(props)
		this.store = this.props.store
	}
	componentDidMount() {
		this.authenticate()

	}
	authenticate(e) {
		if (e) e.preventDefault();
		this.props.store.authenticate()
	}
	render() {
		const {
			authenticated,
			authenticating,
			timeToRefresh,
			refreshToken
		} = this.store
		return (
			<div className="wrapper">
				<DevTools />
				<TopBar />
				{!!(timeToRefresh && timeToRefresh <= 4) && this.store.refreshToken()}
				<footer>
					Cobbled together by <a href="https://twitter.com/mhaagens" target="_blank">@mhaagens</a> | github: <a href="https://github.com/mhaagens" target="_blank">mhaagens</a>
				</footer>
			</div>
		)
	}
}