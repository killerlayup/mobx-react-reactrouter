export HomeActions {
	private home: HomeStore
	private details: DetailStore
	constructor({
			home,
			details
		}
		as any) {
		this.home = home
		this.details = details
	}
	@action async fetch(pn: number = 1) {
		this.home.feed = await fetch(url).then(res => res.json()).map(item => {
			this.details.merge(item.id, item)
			return item.id
		})
	}
}

export DetailActions {
	private details: DetailStore
	constructor({
			details
		}
		as any) {
		this.details = details
	}
	@action async fetch(id: string) {
		this.details.merge(id, await fetch(url))
	}
	@action async save(data: any) {
		/* ... */
	}
}

export RecommendActions {
	private recommend: RecommendStore
	private details: DetailStore
	constructor({
			home,
			details
		}
		as any) {
		this.home = home
		this.details = details
	}
	@action async fetch(pn: number = 1) {
		this.recommend.list = await fetch(url).then(res => res.json()).map(item => {
			this.details.merge(item.id, item)
			return item.id
		})
	}
}