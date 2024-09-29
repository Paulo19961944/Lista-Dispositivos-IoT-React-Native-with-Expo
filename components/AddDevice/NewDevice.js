import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AddDeviceModal from './AddDeviceModal';
import styles from "./Style";

export default function AddNewDevice({ fetchDevices }) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleDeviceAdded = () => {
        fetchDevices(); // Atualiza a lista de dispositivos
    };

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
