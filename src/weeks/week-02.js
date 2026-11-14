import { Card, Paragraph } from '../ui';

function Welcome({ name }) {
  return <Card title={`Welcome, ${name}`}>This card is a reusable component.</Card>;
}

export default function Week02() {
  return <><Paragraph>JSX composes components and embeds JavaScript values.</Paragraph><Welcome name="developer" /></>;
}
