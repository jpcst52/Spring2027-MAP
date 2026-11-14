import { useState } from 'react';
import { Button, Card, Paragraph } from '../ui';

const services = [
  { id: 'library', title: 'Library', open: true },
  { id: 'lab', title: 'Computer lab', open: false },
];

export default function Week04() {
  const [openOnly, setOpenOnly] = useState(false);
  const visible = services.filter(service => !openOnly || service.open);
  return <><Button title={openOnly ? 'Show all services' : 'Show open services'} onPress={() => setOpenOnly(value => !value)} />
    <Paragraph>{visible.length} services shown</Paragraph>
    {visible.length === 0 ? <Paragraph>No matching services.</Paragraph> :
      visible.map(service => <Card key={service.id} title={service.title}>{service.open ? 'Open' : 'Closed'}</Card>)}
  </>;
}
