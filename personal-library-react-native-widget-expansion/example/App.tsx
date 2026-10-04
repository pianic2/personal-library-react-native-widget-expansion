import { useEffect, useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import WidgetExpansion from '@personal-library/react-native-widget-expansion';

export default function App() {
  const [ping, setPing] = useState('Not checked');

  useEffect(() => {
    WidgetExpansion.ping().then(setPing).catch((error) => setPing(String(error)));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <Group name="Native module autolinking">
          <Text testID="native-ping-result">{ping}</Text>
          <Button title="Ping native module" onPress={() => {
            setPing('Checking…');
            WidgetExpansion.ping().then(setPing).catch((error) => setPing(String(error)));
          }} />
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: { fontSize: 30, margin: 20 },
  groupHeader: { fontSize: 20, marginBottom: 20 },
  group: { margin: 20, backgroundColor: '#fff', borderRadius: 10, padding: 20 },
  container: { flex: 1, backgroundColor: '#eee' },
  view: { flex: 1, height: 200 },
};
