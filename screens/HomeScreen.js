import React from "react";
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import faker from "faker";
import POSTS from "../data/data";

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Details", { item })}
      >
        <View
          style={{
            height: 400,
            backgroundColor: "#FAFAFA",
            marginVertical: 20,
          }}
        >
          <Text>{item.productName}</Text>
          <View>
            <SharedElement id={item.productName}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: item.mainImage }}
                resizeMode="cover"
              ></Image>
            </SharedElement>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <FlatList
        data={POSTS}
        renderItem={renderItem}
        keyExtractor={(product, idx) => product + idx}
        style={{ width: "100%" }}
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      />
    </View>
  );
}
export default HomeScreen;
