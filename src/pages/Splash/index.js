import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

export default function Splash({navigation}) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Home');
  //   }, 3000);
  // }, [navigation]);

  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.title}>JerseyShop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F1D2B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#B2FEFA',
    marginTop: 15,
  },
});
