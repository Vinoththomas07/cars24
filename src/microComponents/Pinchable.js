import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { PinchGestureHandler, State } from 'react-native-gesture-handler'

const screen = Dimensions.get('window')

const Pinchable = ({ uri }) => {
  let scale = new Animated.Value(1)

  let onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale: scale }
      }
    ],
    {
      useNativeDriver: true
    }
  )

  let onPinchStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start()
    }
  }

  return (
    <PinchGestureHandler
      onGestureEvent={onPinchEvent}
      onHandlerStateChange={onPinchStateChange}>
      <Animated.Image
        source={{ uri: uri }}
        style={{
          width: screen.width,
          height: 300,
          transform: [{ scale: scale }],
          backgroundColor:'#595959'
        }}
        resizeMode='cover'
      />
    </PinchGestureHandler>
  )
}

export default Pinchable