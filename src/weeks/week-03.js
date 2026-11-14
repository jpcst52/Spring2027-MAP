import { Card, Paragraph } from '../ui';

const services = [
  { id: 'library', title: 'Library', status: 'Open' },
  { id: 'lab', title: 'Computer lab', status: 'Open' },
];

export default function Week03() {
  return <><Paragraph>Each card receives props and has a stable key.</Paragraph>
    {services.map(service => <Card key={service.id} title={service.title}>{service.status}</Card>)}
  </>;
}
