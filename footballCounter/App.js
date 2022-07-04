import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on you</Text>
      <Button title="Click Me" onPress={() => alert("🎉🎉🎉")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
