import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Search = () => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#C0C0C0",
            borderRadius: 11,
            marginTop: 10,
            marginHorizontal: 10,

            paddingHorizontal: 5,


        }}>
            <TextInput placeholder='Search for food and hotels' />
            <AntDesign name="search1" color="#E52850" size={24} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})