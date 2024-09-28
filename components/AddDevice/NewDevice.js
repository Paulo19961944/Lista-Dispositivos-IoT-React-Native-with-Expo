import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Style";

export default function AddNewDevice() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton}>
                <Text style={styles.buttonText}>(+) Adicionar Dispositivo</Text>
            </TouchableOpacity>
        </View>
    )
}
