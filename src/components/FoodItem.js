import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MenuItem from './MenuItem';

const FoodItem = ({ item }) => {
    const data = [item]
    return (
        <View>
            {data?.map((item, index) => (
                <>
                    <Pressable key={index} style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 5 }}>
                        <Text style={{ fontSize: 19, fontWeight: "bold" }}>{item?.name} ({item?.items?.length})</Text>
                        <AntDesign name="down" color="black" size={20} />
                    </Pressable>
                    {item?.items?.map((item, index) => (
                        <MenuItem key={index} item={item} />
                    ))}
                </>
            ))}
        </View>
    )
}

export default FoodItem

const styles = StyleSheet.create({})