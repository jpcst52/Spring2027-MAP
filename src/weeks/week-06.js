import { useState } from 'react';
import { Button, Card, Paragraph } from '../ui';
import { findTask } from '../logic.cjs';

const tasks = [{ id: 'R1', title: 'Repair printer' }, { id: 'R2', title: 'Check lab' }];

export default function Week06() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = findTask(tasks, selectedId);
  if (selectedId !== null) {
    return <><Button title="Back to list" onPress={() => setSelectedId(null)} />
      {selected ? <Card title={selected.title}>Request ID: {selected.id}</Card> : <Paragraph>Request not found.</Paragraph>}</>;
  }
  return <><Paragraph>Choose a request to see a detail view.</Paragraph>
    {tasks.map(task => <Button key={task.id} title={task.title} onPress={() => setSelectedId(task.id)} />)}
  </>;
}
