import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import ColorVars from "./ColorVars";

export default function Header(props){
    return <View style={styles.header}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Test</Text>
        </View>
        <View style={[styles.headerContainer,{flexDirection: "row-reverse"}]}>
        <Button mode="outlined" onPress={props.toggleSidebar}>
            <Icon name="menu" size={20}/>
        </Button>
        </View>
    </View>
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        backgroundColor: ColorVars.levels["2"],
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: ColorVars.text,
    },
    headerContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
  });