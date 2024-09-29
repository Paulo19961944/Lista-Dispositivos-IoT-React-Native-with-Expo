// IMPORTA OS COMPONENTES E BIBLIOTECAS NECESSÁRIAS PARA O APP
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import styles from './Style';

// ADICIONA O MODAL
export default function AddDeviceModal({ visible, onClose, onDeviceAdded }) {
    const [deviceName, setDeviceName] = useState(''); // Define o nome do dispositivo com uma string vazia
    const [location, setLocation] = useState(''); // Define o nome da localização com uma string vazia

    // FUNÇÃO ASSÍNCRONA QUE ADICIONA O DISPOSITIVO
    const handleAddDevice = async () => {
        // SE TIVER ALGUMA COISA NO DISPOSITIVO OU NA LOCALIZAÇÃO
        if (deviceName && location) {
            // CRIA UMA COLEÇÃO COM OS NOVOS DISPOSITIVOS
            await addDoc(collection(db, 'Dispositivos'), {
                device: deviceName,
                local: location,
            });
            setDeviceName(''); // Reseta como Vazio
            setLocation(''); // Reseta como Vazio
            onDeviceAdded();
            setTimeout(onClose, 500); // Espera 500 milisegundos para fechar
        }
    };

    // RENDERIZA O MODAL
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
