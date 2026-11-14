import { useState } from 'react';
import { Button, Card, Paragraph } from '../ui';

export default function Week13() {
  const [mode, setMode] = useState('success');
  return <><Paragraph>Explore distinct states with predictable local data.</Paragraph>
    <Button title="Show success" onPress={() => setMode('success')} />
    <Button title="Show empty" onPress={() => setMode('empty')} />
    <Button title="Show error" onPress={() => setMode('error')} />
    {mode === 'success' ? <Card title="Library">Open today</Card> :
      <Paragraph>{mode === 'empty' ? 'No services found.' : 'Could not load services. Try again.'}</Paragraph>}
  </>;
}
