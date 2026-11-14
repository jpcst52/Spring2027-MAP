import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Input, Paragraph } from '../ui';
import { normalizeTask } from '../logic.cjs';

const KEY = '@spring2027/week10-task';

export default function Week10() {
  const [draft, setDraft] = useState('');
  const [saved, setSaved] = useState(null);
  const [message, setMessage] = useState('Loading saved task...');
  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(KEY).then(value => {
      if (active) {
        setSaved(value);
        setMessage(value ? 'Saved task loaded.' : 'No saved task.');
      }
    }).catch(error => {
      if (active) setMessage(`Could not load task: ${error.message}`);
    });
    return () => { active = false; };
  }, []);

  async function save() {
    const value = normalizeTask(draft);
    if (!value) {
      setMessage('Enter a task before saving.');
      return;
    }
    try {
      await AsyncStorage.setItem(KEY, value);
      setSaved(value);
      setMessage('Task saved.');
    } catch (error) {
      setMessage(`Could not save task: ${error.message}`);
    }
  }
  return <><Paragraph>Save a non-sensitive task and reopen this example.</Paragraph>
    <Input label="Task to save" value={draft} onChangeText={setDraft} />
    <Button title="Save task" onPress={save} />
    <Paragraph>{message}</Paragraph>{saved ? <Paragraph>Saved: {saved}</Paragraph> : null}</>;
}
