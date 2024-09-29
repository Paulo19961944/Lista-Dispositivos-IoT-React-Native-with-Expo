import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import RemoveDeviceModal from './RemoveDeviceModal';
import styles from "./Style";

export default function RemoveDeviceManager({ devices, fetchDevices }) {
    const [modalVisible, setModalVisible] = useState(false);

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
