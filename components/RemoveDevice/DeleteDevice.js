import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import RemoveDeviceModal from './RemoveDeviceModal';
import styles from "./Style";

export default function RemoveDeviceManager() {
    const [modalVisible, setModalVisible] = useState(false);
    const [_, setRefresh] = useState(false); // Força a re-renderização

    const handleDeviceRemoved = () => {
        setRefresh(prev => !prev); // Alterna o estado para forçar atualização
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>(-) Remover Dispositivo</Text>
            </TouchableOpacity>
            <RemoveDeviceModal
                visible={modalVisible}
                onClose={() => {
                    setModalVisible(false);
                    handleDeviceRemoved();
                }}
                onDeviceRemoved={handleDeviceRemoved}
            />
        </View>
    );
}
