import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  Value,
  block,
  cond,
  eq,
  set,
  useCode,
} from "react-native-reanimated";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
import {
  Vector,
  onGestureEvent,
  timing,
  transformOrigin,
  translate,
} from "react-native-redash";

const { width } = Dimensions.get("window");
const SIZE = width;
const styles = StyleSheet.create({
  image: {
    width: SIZE,
    height: 500,
    resizeMode: "cover",
  },
});

const ImageView = ({ img, itemId }) => {
  const state = new Value(State.UNDETERMINED);
  const scale = new Value(1);
  const focal = Vector.create(0, 0);
  const origin = Vector.create(0, 0);
  const translation = Vector.create(0, 0);
  const gesturehandler = onGestureEvent({
    state,
    scale,
    focalX: focal.x,
    focalY: focal.y,
  });
  const adjustedFocal = Vector.add({ x: -SIZE / 2, y: -500 / 2 }, focal);

  useCode(
    () =>
      block([
        cond(eq(state, State.BEGAN), Vector.set(origin, adjustedFocal)),
        cond(
          eq(state, State.ACTIVE),
          Vector.set(
            translation,
            Vector.invert(Vector.sub(origin, adjustedFocal))
          )
        ),
        cond(eq(state, State.END), [
          set(translation.x, timing({ from: translation.x, to: 0 })),
          set(translation.y, timing({ from: translation.y, to: 0 })),
          set(scale, timing({ from: scale, to: 1 })),
        ]),
      ]),
    [adjustedFocal, origin, scale, state, translation]
  );
  return (
    <>
      <PinchGestureHandler {...gesturehandler}>
        <Animated.View style={{ width: SIZE, height: 500, overflow: "hidden" }}>
          <Animated.Image
            style={[
              styles.image,
              {
                transform: [
                  ...translate(translation),
                  ...transformOrigin(origin, { scale }),
                ],
              },
            ]}
            source={{
              uri: img,
            }}
          />
        </Animated.View>
      </PinchGestureHandler>
    </>
  );
};

export default ImageView;
