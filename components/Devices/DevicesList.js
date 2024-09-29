import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import styles from "./Style";

export default function DevicesList() {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDevices = async () => {
        setLoading(true);
        try {
            const devicesCollection = collection(db, 'Dispositivos');
            const deviceSnapshot = await getDocs(devicesCollection);
            const deviceList = deviceSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setDevices(deviceList);
        } catch (error) {
            console.error("Error fetching devices: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDevices();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Carregando dispositivos...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Dispositivos</Text>
            <Text style={styles.devicesConnected}>Dispositivos Conectados: {devices.length}</Text>
            <FlatList
                data={devices}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.device} - {item.local}</Text>
                    </View>
                )}
                style={styles.list}
            />
        </View>
    );
}
