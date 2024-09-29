// IMPORTA OS COMPONENTES NECESSÁRIOS PAR O APP
import { View, Text } from "react-native";
import styles from "./Style";

// FUNÇÃO FOOTER
export default function Footer(){
    // RENDERIZA A PÁGINA
    return(
        <View style={styles.container}>
            <Text style={styles.textContainer}>Criado por Paulo Henrique Azevedo do Nascimento</Text>
        </View>
    )
}