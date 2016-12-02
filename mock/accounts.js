'use strict';

const qs = require('qs');

// 引入 mock js
const mockjs = require('mockjs');

module.exports = {
  'GET /api/accounts' (req, res) {
    const page = qs.parse(req.query);

    const data = mockjs.mock({
			'data|10': [{
        'id|+1': 1,
        name: '@name',
        password: /[a-zA-Z0-9]{6,10}/,
        'accountStatus|0-2': 1
      }],
      page: {
        total: 100,
        'current|1-10': 1
      }
    });

    res.json({
      success: true,
      data: data.data,
      page: data.page
    });
  },

	'DELETE /api/accounts' (req, res) {
		const deleteItemId = qs.parse(req.body);

		// TODO delete in db

		res.json({
			success: true
		});
	}
};
