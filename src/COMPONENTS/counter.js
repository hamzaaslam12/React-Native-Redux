import React from 'react';
import {  StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { increaseNumber, decreaseNumber } from '../REDUX/ACTIONS/counterActions'

const Counter = () => {

const dispatch = useDispatch()

const counter = useSelector(state => state.root.number)

const increaseHandler = () => {
          // setNumber(number+1)
          dispatch(increaseNumber())
}

const decreaseHandler = () => {
          // setNumber(number-1)
        return(
          counter > 0 ?  dispatch(decreaseNumber()) : null
          )
}

  return (
        <View style={styles.container}>
          <Text>
                    {counter}
          </Text>
          <TouchableOpacity onPress={increaseHandler}>
                    <Text>INCREASE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={decreaseHandler}>
                    <Text>DECREASE</Text>
          </TouchableOpacity>
        </View>
      );
};

const styles = StyleSheet.create({
          container: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "50%"
          }
});

export default Counter;
