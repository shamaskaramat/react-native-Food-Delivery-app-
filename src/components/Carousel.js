import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
const Carousel = () => {
    const images = [
        "https://i.pinimg.com/564x/77/35/dd/7735dd49ea9f5908da97618e43a4d510.jpg",
        "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/16:9/w_3743,h_2105,c_limit/Smashburger-recipe-120219.jpg"
    ]
    return (
        <View>
            <SliderBox
                images={images}
                autoplay
                circleloop
                dotColor="#13274F"
                inactiveDotColor="#90A4AE"
                ImageComponentStyle={{
                    borderRadius: 10,
                    width: "94%",
                    marginTop: 10
                }}

            />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({})