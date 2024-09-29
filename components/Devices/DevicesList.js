import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./Style";

export default function DevicesList({ devices }) {
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
