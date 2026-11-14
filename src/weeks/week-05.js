import { useState } from 'react';
import { Button, Input, Paragraph } from '../ui';
import { normalizeTask } from '../logic.cjs';

export default function Week05() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  function submit() {
    const task = normalizeTask(title);
    if (!task) {
      setMessage('Enter a task title.');
      return;
    }
    setMessage(`Added: ${task}`);
    setTitle('');
  }
  return <><Input label="Task title" value={title} onChangeText={setTitle} />
    <Button title="Add task" onPress={submit} /><Paragraph>{message}</Paragraph></>;
}
