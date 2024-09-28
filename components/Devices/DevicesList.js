import { View, Text, FlatList } from "react-native";
import styles from "./Style";

const data = [
    { id: '1', device: 'Cafeteira', local: 'Cozinha' },
    { id: '2', device: 'TV Panasonic', local: 'Sala' },
    { id: '3', device: 'Ar Condicionado', local: 'Quarto' },
    { id: '4', device: 'Persiana', local: 'Quarto' },
];

export default function DevicesList() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Dispositivos</Text>
            <Text style={styles.devicesConnected}>Dispositivos Conectados: 4</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.device} - {item.local}</Text>
                    </View>

                )}
                style={styles.list} // Adicionando estilo aqui
            />
        </View>
    )
}
