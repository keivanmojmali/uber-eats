import { View, Text, TouchableOpacityBase } from "react-native";
import React from "react";

export default function HeaderTabs() {
  return (
    <View>
        <HeaderButton text="Delivery" />
        <HeaderButton text="Pickup" />
    </View>
  );
}

 const HeaderButton = (propd) => {
     <View>
         <TouchableOpacity>
             <Text>{props.text}</Text>
         </TouchableOpacity>
     </View>
 }