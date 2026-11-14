import { useState } from 'react';
import { Button, Paragraph } from '../ui';

export default function Week08() {
  const [saved, setSaved] = useState(false);
  return <><Paragraph>Controls expose a role and descriptive accessible name.</Paragraph>
    <Button title={saved ? 'Remove saved task' : 'Save task'} onPress={() => setSaved(value => !value)} />
    <Paragraph>{saved ? 'Task saved.' : 'Task is not saved.'}</Paragraph></>;
}
