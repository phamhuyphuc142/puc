import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.label}>PUC / DỰ ÁN NHÓM</Text>
        <Text style={styles.title}>Cùng tạo nên ứng dụng đầu tiên.</Text>
        <Text style={styles.description}>JavaScript + React Native + Expo Web</Text>
        <View style={styles.status}><Text style={styles.statusText}>●  Ứng dụng đã sẵn sàng</Text></View>
        <Text style={styles.hint}>Chỉnh sửa ung-dung/App.js để bắt đầu. Mời đồng đội qua Live Share để cùng viết code.</Text>
        <Pressable accessibilityRole="button" onPress={() => setCount(count + 1)} style={styles.button}>
          <Text style={styles.buttonText}>Kiểm tra tương tác · {count}</Text>
        </Pressable>
        <Text style={styles.footer}>Lưu thay đổi bằng Git Commit và Push lên GitHub.</Text>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f2f5fa', alignItems: 'center', justifyContent: 'center', padding: 24 },
  card: { width: '100%', maxWidth: 620, padding: 32, backgroundColor: '#fff', borderRadius: 24, borderWidth: 1, borderColor: '#e2e8f0' },
  label: { color: '#2563eb', fontWeight: '700', fontSize: 12, letterSpacing: 2, marginBottom: 24 },
  title: { color: '#14213d', fontSize: 36, lineHeight: 44, fontWeight: '700', marginBottom: 16 },
  description: { color: '#64748b', fontSize: 16, lineHeight: 25 },
  status: { alignSelf: 'flex-start', backgroundColor: '#ecfdf5', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, marginVertical: 24 },
  statusText: { color: '#047857', fontSize: 14 },
  hint: { color: '#475569', fontSize: 16, lineHeight: 26, marginBottom: 24 },
  button: { backgroundColor: '#2563eb', borderRadius: 12, padding: 16, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  footer: { color: '#64748b', fontSize: 12, lineHeight: 20, marginTop: 24 },
});
