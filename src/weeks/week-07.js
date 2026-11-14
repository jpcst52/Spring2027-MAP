import { useWindowDimensions, View } from 'react-native';
import { Card, Paragraph } from '../ui';

export default function Week07() {
  const { width } = useWindowDimensions();
  const direction = width >= 600 ? 'row' : 'column';
  return <><Paragraph>Cards change layout when the screen is at least 600 points wide.</Paragraph>
    <View style={{ flexDirection: direction, gap: 12 }}>
      <View style={{ flex: 1 }}><Card title="Library">Readable content on small screens.</Card></View>
      <View style={{ flex: 1 }}><Card title="Lab">Try changing the window or text size.</Card></View>
    </View>
  </>;
}
