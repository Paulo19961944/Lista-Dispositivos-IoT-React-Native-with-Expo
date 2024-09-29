import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import styles from './Style'; // Importe os estilos

export default function RemoveDeviceModal({ visible, onClose, onDeviceRemoved }) {
    const [devices, setDevices] = useState([]);
    const [selectedDeviceId, setSelectedDeviceId] = useState(null);

    useEffect(() => {
        const fetchDevices = async () => {
            const devicesCollection = collection(db, 'Dispositivos');
            const deviceSnapshot = await getDocs(devicesCollection);
            const deviceList = deviceSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setDevices(deviceList);
        };

        fetchDevices();
    }, []);

    const handleRemoveDevice = async () => {
        if (selectedDeviceId) {
            await deleteDoc(doc(db, 'Dispositivos', selectedDeviceId));
            setSelectedDeviceId(null);
            onDeviceRemoved();
            setTimeout(onClose, 3000);
        }
    };

    return (
        <Modal transparent={true} animationType="slide" visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Remover Dispositivo</Text>
                    <FlatList
                        data={devices}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[styles.deviceItem, selectedDeviceId === item.id && styles.selectedItem]}
                                onPress={() => setSelectedDeviceId(item.id)}
                            >
                                <Text>{item.device} - {item.local}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity style={styles.modalButton} onPress={handleRemoveDevice}>
                        <Text style={styles.modalButtonText}>Confirmar Remoção</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                        <Text style={styles.modalButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
