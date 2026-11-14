function normalizeTask(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  return value.trim();
}

function filterTasks(tasks, query) {
  const search = query.trim().toLowerCase();
  return tasks.filter(task => task.title.toLowerCase().includes(search));
}

function findTask(tasks, id) {
  return tasks.find(task => task.id === id) || null;
}

function addTask(tasks, title, id) {
  const normalized = normalizeTask(title);
  if (!normalized) throw new Error('Enter a task title');
  if (tasks.some(task => task.id === id)) throw new Error('Task ID already exists');
  return [...tasks, { id, title: normalized }];
}

module.exports = { normalizeTask, filterTasks, findTask, addTask };
