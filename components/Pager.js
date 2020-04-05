import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import ImageView from "./ImageView";
import ImageViewOne from "./ImageViewOne";
import { SharedElement } from "react-navigation-shared-element";

const Slider = ({ itemId, mainImage, otherImages }) => {
  return (
    <ViewPager style={styles.viewPager} initialPage={0}>
      <SharedElement id={itemId}>
        <ImageViewOne img={mainImage} />
      </SharedElement>

      {otherImages.map((image) => (
        <ImageView img={image} key={image}></ImageView>
      ))}
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

export default Slider;
