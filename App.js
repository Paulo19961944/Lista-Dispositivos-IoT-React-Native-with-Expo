// IMPORTA OS COMPONENTES E BIBLIOTECAS NECESSÁRIAS PRA O APP
import { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import DevicesList from './components/Devices/DevicesList';
import AddNewDevice from './components/AddDevice/NewDevice';
import RemoveDeviceManager from './components/RemoveDevice/DeleteDevice';
import Footer from './components/Footer/Footer';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

// FUNÇÃO PRINCIPAL APP
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false); // Define o estado das fontes com falso
  const [devices, setDevices] = useState([]); // Define os dispositivos como vazio

  // CARREGA AS FONTES DO SISTEMA DE FORMA ASSÍNCRONA
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
  }, []);

  // FUNÇÃO QUE CARREGA OS DISPOSITIVOS DO BANCO DE DADOS
  const fetchDevices = async () => {
    const devicesCollection = collection(db, 'Dispositivos');
    const deviceSnapshot = await getDocs(devicesCollection);
    const deviceList = deviceSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDevices(deviceList);
  };

  // CHAMA A FUNÇÃO QUE CARREGA OS DISPOSITIVOS
  useEffect(() => {
    fetchDevices();
  }, []);

  // SE A FONTE NÃO FOR ENCONTRADA, APARECE UM ICONE DE LOADING
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // CARREGA OS DISPOSITIVOS
  return (
    <View style={styles.container}>
      <DevicesList devices={devices} />
      <AddNewDevice fetchDevices={fetchDevices} />
      <RemoveDeviceManager devices={devices} fetchDevices={fetchDevices} />
      <Footer />
    </View>
  );
}

// ESTILIZAÇÃO DO CONTAINER
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
