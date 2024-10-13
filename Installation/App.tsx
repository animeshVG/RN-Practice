import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App Syas HEllo</Text>
    </View>
  )
}
//TO CREATE THIS APP I TYPED THE COMMAND npx create-expo-app --template blank Installation
// SOO THIS IS THE BASIC REACT NATIVE APP BOLIER PLATE WHICH CONSIST OF THE VIEW TAG AND TEXT TAG WHICH REPLACES THE DIV AND THE H1 P TAG IN VANILLA ORJSX SYNTAX THE PURPOSE IS THE SAME OF THEM.
// THE STYLES ARE WRITTEN AS INLINE OR BY MAKING THE OBJ IN THE REACT NATIV  NAMED AS THE STYLESHEET AS COMMON

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})