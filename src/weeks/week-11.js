import { useState } from 'react';
import { Button, Paragraph } from '../ui';

const checks = ['Review permission explanations', 'Test a production build', 'Review privacy disclosures'];

export default function Week11() {
  const [completed, setCompleted] = useState([]);
  function toggle(item) {
    setCompleted(current => current.includes(item) ? current.filter(value => value !== item) : [...current, item]);
  }
  return <><Paragraph>This local checklist does not request permissions or publish an app.</Paragraph>
    {checks.map(item => <Button key={item} title={`${completed.includes(item) ? 'Done' : 'Not done'}: ${item}`}
      onPress={() => toggle(item)} />)}
    <Paragraph>{completed.length} of {checks.length} items reviewed.</Paragraph></>;
}
