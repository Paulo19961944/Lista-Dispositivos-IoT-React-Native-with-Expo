import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%', // Ocupar toda a largura
    },
    title: {
        fontSize: 24,
        fontFamily: 'Chakra-Petch-Bold',
        marginTop: 120,
        marginBottom: 48,
    },
    devicesConnected: {
        fontSize: 18,
        fontFamily: 'Chakra-Petch-Regular',
        marginBottom: 24,
    },
    list: {
        height: 200,
        width: '100%',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontFamily: 'Chakra-Petch-Regular', // Adicione esta linha
    },  
})

export default styles;