import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export function Button({ title, onPress, disabled = false }) {
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled}
      onPress={onPress} style={[styles.button, disabled && styles.disabled]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

export function Paragraph({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export function Card({ title, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Paragraph>{children}</Paragraph>
    </View>
  );
}

export function Input({ value, onChangeText, label }) {
  return (
    <TextInput accessibilityLabel={label} placeholder={label} value={value}
      onChangeText={onChangeText} style={styles.input} />
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#315b87', borderRadius: 8, padding: 14, marginBottom: 10, minHeight: 48, justifyContent: 'center' },
  disabled: { opacity: 0.55 },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  text: { fontSize: 16, lineHeight: 24, color: '#202b45', marginVertical: 6 },
  card: { padding: 14, backgroundColor: '#ffffff', borderRadius: 8, marginVertical: 6, borderWidth: 1, borderColor: '#d3d9e3' },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#202b45' },
  input: { borderWidth: 1, borderColor: '#53647b', borderRadius: 8, padding: 12, marginVertical: 8, backgroundColor: '#ffffff', fontSize: 16 },
});
