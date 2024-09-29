import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AddDeviceModal from './AddDeviceModal';
import styles from "./Style";
import DevicesList from '../Devices/DevicesList';

export default function AddNewDevice() {
    const [modalVisible, setModalVisible] = useState(false);
    const [_, setRefresh] = useState(false); // Força a re-renderização

    const handleDeviceAdded = () => {
        setRefresh(prev => !prev); // Alterna o estado para forçar atualização
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>(+) Adicionar Dispositivo</Text>
            </TouchableOpacity>
            <AddDeviceModal
                visible={modalVisible}
                onClose={() => {
                    setModalVisible(false);
                    handleDeviceAdded();
                }}
                onDeviceAdded={handleDeviceAdded}
            />
        </View>
    );
}
