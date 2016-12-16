export class HomeStore {
	@observable feed: string[] = []
}

class MapStore < T > {
	@observable data = asMap < T > ({})
	// 获取，可以在该方法中做各种容错
	get(id: string) {
			return this.data.get(id)
		}
		// 设置
	set(id: string, value: T) {
		this.data.set(id, value)
	}
	// 判断
	has(id: string) {
		return this.data.has(id)
	}
	// 合并数据，可以在该方法中做各种容错
	merge(id: string, value: T) { /*...*/ }
}

export class Detail {
	id: string = null
	@observable title: string = null
		// ...other properties
}

export class DetailStore extends MapStore < Detail > {}

export class Recommend {
	id: string = null
	@observable list: any[] = []
}

export class RecommendStore extends MapStore < Recommend > {}