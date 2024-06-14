import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Hotel = ({ item }) => {
    const navigation = useNavigation();


    return (
        <Pressable style={{
            marginHorizontal: 6,
            marginVertical: 12,
            borderRadius: 20,
            backgroundColor: "white"
        }}
            onPress={() => navigation.navigate('Hotel', {
                id: item.id,
                name: item.name,
                adress: item.adress,
                smalladress: item.smalladress,
                cuisines: item.cuisines,
                aggregate_rating: item.aggregate_rating,

            })}
        >
            <Image source={{ uri: item.featured_image }}
                style={{
                    width: "100%",
                    aspectRatio: 6 / 4,
                    borderTopLeftRadius: 6,
                    borderBottomRightRadius: 6
                }}
            />
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <View style={{}}>
                    <Text style={{ paddingHorizontal: 5, marginTop: 10, fontSize: 16, fontWeight: "600" }}>{item?.name}</Text>
                    <Text style={{ paddingHorizontal: 5, marginTop: 5, fontSize: 12, fontWeight: "500" }}>North LHR - Fast Food - 160 for one</Text>
                    <Text style={{ paddingHorizontal: 5, marginTop: 5, fontSize: 11, fontWeight: "500" }}>{item?.time}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#006A4E", borderRadius: 4, paddingHorizontal: 4, paddingVertical: 5, marginRight: 10, gap: 2 }}>
                    <Text style={{ color: "white", textAlign: "center" }}>{item?.aggregate_rating}</Text>
                    <FontAwesome name="star" size={12} color="white" />
                </View>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: "#CBCBCB ", marginHorizontal: 10, marginVertical: 4 }} />
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginHorizontal: 8, marginVertical: 5, gap: 4 }}>
                <MaterialCommunityIcons name="brightness-percent" size={24} color="#1F75FE" />
                <Text style={{ marginLeft: 2, color: "#1F75FE", fontWeight: "500" }}>20% OFF up to 200 Rs</Text>
            </View>
        </Pressable>
    )
}

export default Hotel

const styles = StyleSheet.create({})