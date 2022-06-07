import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  PanResponder,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';
import FormHeader from '../../src/Component/FormHeader';
import FormSelectorBtn from '../Component/FormSelectorBtn';
import LoginForm from '../Component/LoginForm';
import SignupForm from '../Component/SignupForm';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const ModalCard = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });

  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });

  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)'],
  });

  const SignupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)'],
  });

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}}, // Back to zero
      ).start();
    },
  });
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 30}}>
        <TouchableOpacity onPress={() => navigation.goBack('Home')}>
          <MaterialIcons name="arrow-back-ios" size={24} />
        </TouchableOpacity>
      </View>
      <View style={[styles.container]}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.box]}
        />
      </View>
      <View style={{height: '88%'}}>
        <View style={{height: 80}}>
          <FormHeader
            leftHeading="Welcome "
            rightHeading="Back"
            subHeading="Youtube Task Manager"
            rightHeaderOpacity={rightHeaderOpacity}
            leftHeaderTranslateX={leftHeaderTranslateX}
            rightHeaderTranslateY={rightHeaderTranslateY}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            marginBottom: 20,
          }}>
          <FormSelectorBtn
            style={styles.borderLeft}
            title="Login"
            backgroundColor={loginColorInterpolate}
            onPress={() => scrollView.current.scrollTo({x: 0})}
          />
          <FormSelectorBtn
            style={styles.borderRight}
            title="Sign Up"
            backgroundColor={SignupColorInterpolate}
            onPress={() => scrollView.current.scrollTo({x: width})}
          />
        </View>
        <ScrollView
          ref={scrollView}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16} //16
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: animation}}}],
            {useNativeDriver: false},
          )}>
          <LoginForm />
          <SignupForm />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ModalCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    // flex: 1,
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  login: {
    height: 45,
    width: '50%',
    backgroundColor: '#1b1b33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
