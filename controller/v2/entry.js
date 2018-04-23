'use strict';

import EntryModel from '../../models/v2/entry'

class Entry {
	constructor() {

	}
	async getEntry(req, res, next) {
		try {
			const entries = await EntryModel.find({}, '-__v -_id', (err, docs) => {
				console.log("获取entries数据成功")
			}).sort('id');
			res.send(entries);
		} catch (err) {
			console.log('获取数据失败');
			res.send({
				status: 0,
				type: 'ERROR_DATA',
				message: '获取数据失败'
			})
			return
		}
	}
}

export default new Entry()