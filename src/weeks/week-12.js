import { useState } from 'react';
import { Button, Card, Paragraph } from '../ui';

export default function Week12() {
  const [screen, setScreen] = useState('home');
  return screen === 'home' ? <><Paragraph>User story: find a campus service.</Paragraph>
    <Button title="View library service" onPress={() => setScreen('detail')} /></> :
    <><Button title="Back to home" onPress={() => setScreen('home')} />
      <Card title="Library">A working vertical slice includes a real navigation action.</Card></>;
}
