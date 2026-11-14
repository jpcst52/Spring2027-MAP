import { useState } from 'react';
import { Button, Card, Input, Paragraph } from '../ui';
import { addTask, filterTasks } from '../logic.cjs';

export default function Week14() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const [nextId, setNextId] = useState(1);
  function submit() {
    try {
      const updated = addTask(tasks, title, nextId);
      setTasks(updated);
      setNextId(value => value + 1);
      setTitle('');
      setMessage('Task added.');
    } catch (error) {
      setMessage(error.message);
    }
  }
  const visible = filterTasks(tasks, query);
  return <><Paragraph>Project slice: add and search local tasks. Data resets when you leave this example.</Paragraph>
    <Input label="New task title" value={title} onChangeText={setTitle} />
    <Button title="Add task" onPress={submit} /><Paragraph>{message}</Paragraph>
    <Input label="Search tasks" value={query} onChangeText={setQuery} />
    {visible.length ? visible.map(task => <Card key={task.id} title={task.title}>Task {task.id}</Card>) :
      <Paragraph>No matching tasks.</Paragraph>}</>;
}
