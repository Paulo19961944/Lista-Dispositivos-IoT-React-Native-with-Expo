import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Style";

export default function RemoveDeviceManager() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton}>
                <Text style={styles.buttonText}>(-) Remover Dispositivo</Text>
            </TouchableOpacity>
        </View>
    )
}
