import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();
  const themeContainer =
    colorScheme === 'light' ? styles.lightContianer : styles.darkContianer;
  const themeText =
    colorScheme === 'light' ? styles.lightText : styles.darkText;
  return (
    <View style={[styles.container, themeContainer]}>
      <Text style={[styles.title, themeText]}>Hello World</Text>
      <Text style={[themeText]}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContianer: {
    backgroundColor: '#fff',
  },
  darkContianer: {
    backgroundColor: '#151515',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#FFF',
  },
});
