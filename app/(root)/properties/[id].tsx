import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Property = () => {
  const { id } = useLocalSearchParams();
  console.log(id, "this is the id of property here==");
  return (
    <View>
      <Text>Property {id}</Text>
    </View>
  );
};

export default Property;
