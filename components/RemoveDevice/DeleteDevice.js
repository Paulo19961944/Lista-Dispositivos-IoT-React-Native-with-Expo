// IMPORTA OS COMPONENTES E AS BIBIOTECAS NECESSÁRIAS PARA O APP
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import RemoveDeviceModal from './RemoveDeviceModal';
import styles from "./Style";

// FUNÇÃO PARA REMOVER OS DISPOSITIVOS
export default function RemoveDeviceManager({ devices, fetchDevices }) {
    const [modalVisible, setModalVisible] = useState(false); // Define o modal como falso

    // RENDERIZA A PÁGINA
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>(-) Remover Dispositivo</Text>
            </TouchableOpacity>
            <RemoveDeviceModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onDeviceRemoved={() => {
                    fetchDevices(); // Atualiza a lista após remoção
                    setModalVisible(false);
                }}
                devices={devices} // Passa a lista de dispositivos
            />
        </View>
    );
}
