import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Pager from "../components/Pager";

import { SharedElement } from "react-navigation-shared-element";

function DetailsScreen(props) {
  const [scrollDistance, setScrollDistance] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const item = props.navigation.getParam("item");
  const handleScroll = (event) => {
    console.log("scrolling");
    setScrollDistance(event.nativeEvent.contentOffset.y);
  };

  useEffect(() => {
    console.log("renders");
  });

  return (
    <ScrollView
      style={{ flex: 1 }}
      // onScroll={handleScroll}
      alwaysBounceVertical={false}
      pinchGestureEnabled={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ height: 500, width: "100%" }}>
        <Pager
          itemId={item.productName}
          mainImage={item.mainImage}
          otherImages={[...item.otherImages]}
        />
      </View>

      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
      <Text>{item.productName}</Text>
    </ScrollView>
  );
}

DetailsScreen.sharedElements = (navigation, otherNavigation, showing) => {
  console.log("hey");
  const item = navigation.getParam("item");
  return [
    {
      id: item.productName,
      resize: "none",
      animation: "move",
    },
  ];
};

export default DetailsScreen;
