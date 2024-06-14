import { Animated, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FoodItem from '../components/FoodItem';
import { useSelector } from 'react-redux';
import Modal from "react-native-modal";
const Hotels = ({ route, navigation }) => {
    const { id, name, adress, smalladress, cuisines, aggregate_rating } = route.params
    const menu = [
        {
            id: "20",
            name: "Recommended",
            items: [
                {
                    id: "101",
                    name: "Paneer 65",
                    price: 275,
                    description:
                        "This is served with Raita and gravy and has loaded with chilli paste mixed chicken Kebabs",
                    rating: 4.1,
                    ratings: 43,
                    image:
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr",
                    veg: true,
                    bestSeller: false,
                    quantity: 1,
                },
                {
                    id: "102",
                    name: "Chilly Chicken (Boneless)",
                    price: 285,
                    description:
                        "E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)",
                    rating: 4.3,
                    ratings: 34,
                    image:
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7",
                    veg: false,
                    bestSeller: true,
                    quantity: 1,
                },
                {
                    id: "103",
                    name: "Spl Veg Biryani",
                    price: 250,
                    description:
                        "E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)",
                    rating: 4.5,
                    ratings: 56,
                    image:
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fsitbray4gq1kxcndqqx",
                    veg: true,
                    bestSeller: false,
                    quantity: 1,
                },
                {
                    id: "104",
                    name: "Chilly Paneer",
                    price: 220,
                    description:
                        "E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams",
                    rating: 3.8,
                    ratings: 22,
                    image:
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq",
                    veg: true,
                    bestSeller: true,
                    quantity: 1,
                },
                {
                    id: "105",
                    name: "Chicken 65",
                    price: 300,
                    description:
                        "E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)",
                    rating: 4.5,
                    ratings: 45,
                    image:
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0jegvlf4h7wrgaaqdqi",
                    veg: false,
                    bestSeller: true,
                    quantity: 1,
                },
            ],
        },
        {
            id: "11",
            name: "Rice",
            items: [
                {
                    id: "201",
                    name: "Chicken Fried Rice",
                    price: 260,
                    description:
                        "E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)",
                    rating: 4.3,
                    ratings: 34,
                    image:
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/akmx533z73jjbq8avy6v",
                    veg: false,
                    bestSeller: true,
                },
                {
                    id: "202",
                    name: "Egg Fried Rice",
                    price: 220,
                    description:
                        "E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)",
                    rating: 4.3,
                    ratings: 52,
                    image:
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lv6jl9qdscekjmwkxm9l",
                    veg: false,
                    bestSeller: false,
                },
                {
                    id: "203",
                    name: "Veg Fried Rice",
                    price: 190,
                    description:
                        "E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)",
                    rating: 4.6,
                    ratings: 56,
                    image:
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pycpbzawueci1dvhmkr3",
                    veg: true,
                    bestSeller: true,
                },
                {
                    id: "204",
                    name: "Jeera Rice",
                    price: 195,
                    description:
                        "E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)",
                    rating: 4.5,
                    ratings: 48,
                    image:
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv",
                    veg: true,
                    bestSeller: false,
                },
            ],
        },
    ];
    const cart = useSelector((state) => state.cart.cart)
    const scrollViewRef = useRef(null);
    const scrollAni = useRef(new Animated.Value(0)).current;
    const ITEM_HEIGHT = 650;
    const scrollToCategory = (index) => {
        const yOffset = index * ITEM_HEIGHT;
        Animated.timing(scrollAni, {
            toValue: yOffset,
            useNativeDriver: true,
            duration: 500
        }).start()
        scrollViewRef.current.scrollTo({ y: yOffset, animated: true })
    }
    const [modelVisible, setModelVisible] = useState(false)
    return (
        <>
            <ScrollView ref={scrollViewRef} style={{ backgroundColor: "white" }}>
                <View style={{ marginTop: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Ionicons name="arrow-back" color="black" size={24} onPress={() => navigation.goBack()} />
                    <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 14, gap: 10 }}>
                        <AntDesign name="camerao" color="black" size={24} />
                        <Feather name="bookmark" color="black" size={24} />
                        <FontAwesome name="share" color="black" size={24} />

                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 12 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
                    <Text style={{ marginTop: 5, color: "gray", fontSize: 15, fontWeight: "500" }}>North Lhr  - Fastr Food - 180 for one</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", borderRadius: 4, backgroundColor: "#006A4E", paddingHorizontal: 4, paddingVertical: 5, gap: 5 }}>
                            <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>{aggregate_rating}</Text>
                            <FontAwesome name="star" size={12} color="white" />
                        </View>
                        <Text style={{ marginLeft: 5, fontSize: 14, fontWeight: "500" }}>3.2k Rating</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#D0F0C0", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                        <Text>30 - 40  mins -6 km | Lahore</Text>
                    </View>
                </View>
                {menu.map((item, index) => (<FoodItem key={index} item={item} />))}
            </ScrollView>
            <View style={{ flexDirection: "row", backgroundColor: "white" }}>
                {menu?.map((item, index) => (<Pressable
                    onPress={() => { scrollToCategory(index) }}
                    key={index} style={{
                        paddingHorizontal: 7, paddingVertical: 5, marginVertical: 5, marginHorizontal: 10, justifyContent: "center", alignItems: "center", borderColor: "#181818", borderWidth: 1
                    }}>
                    <Text >{item?.name}</Text>
                </Pressable>))}
            </View>
            <Pressable style={{ position: "absolute", right: 25, bottom: cart.length > 0 ? 70 : 35, width: 60, height: 60, justifyContent: "center", alignItems: "center", borderRadius: 30, backgroundColor: "black" }}
                onPress={() => setModelVisible(!modelVisible)}
            >
                <Ionicons style={{ textAlign: "center" }} name="fast-food-outline" size={12} color="white" />
                <Text style={{ textAlign: "center", color: "white", fontWeight: "500", marginTop: 3, fontSize: 11 }}>MENU</Text>
            </Pressable>
            <Modal isVisible={modelVisible} onBackdropPress={() => setModelVisible(!modelVisible)}>
                <View style={{ position: "absolute", bottom: 35, right: 10, borderRadius: 7, backgroundColor: "black", height: 190, width: 250 }}>
                    {menu?.map((item, index) => (
                        <View style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 18 }}>{item?.name}</Text>
                            <Text style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 18 }}>{item?.items?.length}</Text>
                        </View>
                    ))
                    }
                    <Image source={{ uri: "https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-pk.png" }} style={{ width: 280, height: 100, resizeMode: "contain" }} />
                </View>
            </Modal>
            {cart.length > 0 &&
                <Pressable style={{
                    backgroundColor: "#fd5c63",
                    paddingHorizontal: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 10
                }}
                    onPress={() => {
                        navigation.navigate("Cart", { name: route.params.name })

                    }}
                >
                    <Text style={{
                        color: "white", fontSize: 15,
                        fontWeight: "500", textAlign: "center"
                    }}>{cart.length} Items Added</Text>
                    <Text style={{ textAlign: "center", color: "white", marginTop: 5, fontWeight: "600" }}>Add Items(s) worth to reduce surge fee by Rs 50</Text>
                </Pressable>
            }
        </>
    )
}

export default Hotels

const styles = StyleSheet.create({})