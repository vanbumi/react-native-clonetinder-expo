import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const fbImage = 'https://graph.facebook.com/1376917177/picture?height=900'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 20}}>FB Profile</Text>
        </View>
        <Image
          style={{flex: 1}} 
          source={{uri: fbImage }}
        />
        <View style={{margin: 20}}>
          <Text style={{fontSize: 20}}>Dyo Bumi</Text>
          <Text style={{fontSize: 15, color: 'darkgrey'}}>Application Developer</Text>
        </View>
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    overflow: 'hidden',
    margin: 10,
    backgroundColor: 'white',
    marginTop: 50,
    marginBottom: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,

  },
});
