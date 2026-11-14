const test = require('node:test');
const assert = require('node:assert/strict');
const { normalizeTask, filterTasks, findTask, addTask } = require('../src/logic.cjs');

test('validation rejects blank titles and normalizes valid titles', () => {
  assert.equal(normalizeTask('  '), null);
  assert.equal(normalizeTask('  Repair  '), 'Repair');
  assert.throws(() => addTask([], ' ', 1), /title/i);
});

test('tasks are added immutably with unique identifiers', () => {
  const original = [{ id: 1, title: 'Library' }];
  const updated = addTask(original, ' Lab ', 2);
  assert.equal(original.length, 1);
  assert.deepEqual(updated[1], { id: 2, title: 'Lab' });
  assert.throws(() => addTask(updated, 'Other', 2), /ID/);
});

test('filtering and lookup handle matches, case and missing items', () => {
  const tasks = [{ id: 1, title: 'Library' }, { id: 2, title: 'Lab' }];
  assert.deepEqual(filterTasks(tasks, ' LAB '), [tasks[1]]);
  assert.deepEqual(filterTasks(tasks, 'missing'), []);
  assert.equal(findTask(tasks, 1), tasks[0]);
  assert.equal(findTask(tasks, 99), null);
});
