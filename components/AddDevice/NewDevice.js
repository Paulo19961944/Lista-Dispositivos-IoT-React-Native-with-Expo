// IMPORTA OS COMPONENTES E AS BIBLIOTECAS NECESSÁRIAS PARA O APP
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AddDeviceModal from './AddDeviceModal';
import styles from "./Style";

// FUNÇÃO PARA ADICIONAR UM DISPOSITIVO
export default function AddNewDevice({ fetchDevices }) {
    const [modalVisible, setModalVisible] = useState(false); // Define o Modal como Falso

    const handleDeviceAdded = () => {
        fetchDevices(); // Atualiza a lista de dispositivos
    };

    // RENDERIZA A PÁGINA
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>(+) Adicionar Dispositivo</Text>
            </TouchableOpacity>
            <AddDeviceModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onDeviceAdded={handleDeviceAdded}
            />
        </View>
    );
}
