define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = '../../index.html';

	registerSuite({
		name: 'Todo (functional)',
		timeout: 300000,
		'submit form': function () {
			return this.remote
				.get(require.toUrl(url))
				.setFindTimeout(5000)
				.findById('new-todo')
				.click()
				.pressKeys('Task 1')
				.pressKeys('\n')
				.pressKeys('Task 2')
				.pressKeys('\n')
				.pressKeys('Task 3')
				.getProperty('value')
				.then(function (val) {
					assert.ok(val.indexOf('Task 3') > -1, 'Task 3 should remain in the new todo');
				});
		}
	});
});