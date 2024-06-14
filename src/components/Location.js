import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Location = () => {
    return (
        <View style={styles.container}>
            <EvilIcons name="location" color="red" size={30} />
            <View style={{ flexDirection: "column", flex: 2, marginLeft: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 600 }}>Deliver To</Text>
                <Text> House 349 sector 2Green town lahore</Text>
            </View>
            <Image source={require("../assests/PIC.jpg")} style={styles.profile} />

        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    profile: {
        height: 40,
        width: 40,
        resizeMode: 'cover',
        borderRadius: 50
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginTop: 2,
        justifyContent: "center"
    }
})