import { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'
import DevicesList from './components/Devices/DevicesList';
import AddNewDevice from './components/AddDevice/NewDevice';
import RemoveDeviceManager from './components/RemoveDevice/DeleteDevice';
import Footer from './components/Footer/Footer';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Chakra-Petch-Bold': require('./assets/Fonts/ChakraPetch-Bold.ttf'),
        'Chakra-Petch-Medium': require('./assets/Fonts/ChakraPetch-Medium.ttf'),
        'Chakra-Petch-Regular': require('./assets/Fonts/ChakraPetch-Regular.ttf'),
        'Chakra-Petch-Semi-Bold': require('./assets/Fonts/ChakraPetch-SemiBold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, [])

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  return (
    <View style={styles.container}>
      <DevicesList />
      <AddNewDevice />
      <RemoveDeviceManager />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start', // Mudança aqui
  },
});
