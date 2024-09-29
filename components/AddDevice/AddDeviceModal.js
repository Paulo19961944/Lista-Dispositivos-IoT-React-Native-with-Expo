import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import styles from './Style';

export default function AddDeviceModal({ visible, onClose, onDeviceAdded }) {
    const [deviceName, setDeviceName] = useState('');
    const [location, setLocation] = useState('');

    const handleAddDevice = async () => {
        if (deviceName && location) {
            await addDoc(collection(db, 'Dispositivos'), {
                device: deviceName,
                local: location,
            });
            setDeviceName('');
            setLocation('');
            onDeviceAdded();
            setTimeout(onClose, 500);
        }
    };

    return (
        <Modal transparent={true} animationType="slide" visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Adicionar Dispositivo</Text>
                    <TextInput
                        placeholder="Nome do Dispositivo"
                        value={deviceName}
                        onChangeText={setDeviceName}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Localização"
                        value={location}
                        onChangeText={setLocation}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.modalButton} onPress={handleAddDevice}>
                        <Text style={styles.modalButtonText}>Adicionar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                        <Text style={styles.modalButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
