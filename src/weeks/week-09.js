import { useState } from 'react';
import { Button, Paragraph } from '../ui';

export default function Week09() {
  const [state, setState] = useState('idle');
  async function load(shouldFail) {
    setState('loading');
    try {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => shouldFail ? reject(new Error('Fixture unavailable')) : resolve(['Library', 'Lab']), 300);
      });
      setState(result.length ? result.join(', ') : 'No services available.');
    } catch (error) {
      setState(`Error: ${error.message}. Try again.`);
    }
  }
  return <><Paragraph>This deterministic fixture demonstrates loading, success and error states.</Paragraph>
    <Button title="Load services" disabled={state === 'loading'} onPress={() => load(false)} />
    <Button title="Simulate failure" disabled={state === 'loading'} onPress={() => load(true)} />
    <Paragraph>{state === 'idle' ? 'Not loaded.' : state === 'loading' ? 'Loading...' : state}</Paragraph></>;
}
