import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from './src/ui';
import { weeks } from './src/weeks';

export default function App() {
  const [selected, setSelected] = useState(null);
  const Current = selected === null ? null : weeks[selected].component;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text accessibilityRole="header" style={styles.title}>Mobile Programming Lab</Text>
        {Current ? (
          <View>
            <Button title="Back to weeks" onPress={() => setSelected(null)} />
            <Text accessibilityRole="header" style={styles.heading}>
              Week {selected + 1}: {weeks[selected].title}
            </Text>
            <Current />
          </View>
        ) : (
          <View>
            <Text style={styles.text}>Choose a self-contained weekly example.</Text>
            {weeks.map((week, index) => (
              <Button key={week.title} title={`Week ${index + 1}: ${week.title}`} onPress={() => setSelected(index)} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f5f7fb' },
  content: { padding: 20, paddingTop: 40, maxWidth: 720, width: '100%', alignSelf: 'center' },
  title: { fontSize: 28, fontWeight: '700', color: '#202b45', marginBottom: 16 },
  heading: { fontSize: 22, fontWeight: '700', color: '#202b45', marginVertical: 16 },
  text: { fontSize: 16, color: '#202b45', marginBottom: 12 },
});
