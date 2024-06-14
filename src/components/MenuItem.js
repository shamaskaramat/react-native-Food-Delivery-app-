import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../../redux/CartReducer';

const MenuItem = ({ item }) => {
    const [addItem, setAddItem,] = useState(0)
    const [selected, setSelected] = useState(false)
    const dispatch = useDispatch()
    return (
        <View>
            <Pressable style={{ margin: 10, flexDirection: "row", justifyContent: "space-between", marginVertical: 15 }}>
                <View>
                    <Text style={{ width: 220, fontSize: 18, fontWeight: "600" }}>{item?.name}</Text>
                    <Text style={{ fontSize: 15, fontWeight: "500", marginTop: 4 }}>{item?.price}</Text>
                    <Text>{[0, 0, 0, 0, 0].map((en, i) => (
                        <AntDesign name={i < Math.floor(item.rating) ? "star" : "staro"} color="#FFD700" size={15} />

                    ))}</Text>
                    <Text style={{ width: 200, marginTop: 8, color: "gray", fontSize: 16 }}>{item?.description.length > 40 ? item?.description.substr(0, 37) + "..." : item?.description}</Text>
                </View>
                <Pressable style={{ marginRight: 10 }}>
                    <Image source={{ uri: item?.image }} style={{ width: 120, height: 120, borderRadius: 8 }} />
                    {selected ? (
                        <Pressable style={{
                            position: "absolute",
                            top: 95,
                            left: 20,
                            backgroundColor: "#fd5c63",
                            flexDirection: "row",
                            paddingHorizontal: 10,
                            alignItems: "center",
                            borderRadius: 5

                        }}>
                            <Pressable onPress={() => {
                                if (addItem == 1) {
                                    dispatch(removeFromCart(item))
                                    setAddItem(0);
                                    setSelected(false)
                                    return;
                                }
                                setAddItem((c) => c - 1)
                                dispatch(decrementQuantity(item))
                            }}>
                                <Text style={{ fontSize: 25, color: "white", paddingHorizontal: 6 }}>-</Text>
                            </Pressable>
                            <Pressable>
                                <Text style={{ color: "white", paddingHorizontal: 6, fontSize: 15 }}>{addItem}</Text>
                            </Pressable>
                            <Pressable onPress={() => {
                                setAddItem((c) => c + 1)
                                dispatch(incrementQuantity(item))
                            }}>
                                <Text style={{ fontSize: 25, color: "white", paddingHorizontal: 6 }}>+</Text>
                            </Pressable>
                        </Pressable>
                    ) : (
                        <Pressable
                            style={{
                                position: 'absolute',
                                top: 95,
                                left: 20,
                                borderColor: "#E32636",
                                borderWidth: 1,
                                flexDirection: "row",
                                paddingHorizontal: 25,
                                paddingVertical: 5,
                                alignItems: "center",
                                backgroundColor: "white",
                                borderRadius: 5

                            }}
                            onPress={() => {

                                setSelected(true)
                                if (addItem == 0) {
                                    setAddItem((c) => c + 1)
                                }
                                dispatch(addToCart(item))
                            }}
                        >
                            <Text stye={{ fontSize: 18, fontWeight: "800", color: "#FD5C63" }}>ADD</Text>
                        </Pressable>
                    )}

                </Pressable>
            </Pressable>
        </View>
    )
}

export default MenuItem

const styles = StyleSheet.create({})