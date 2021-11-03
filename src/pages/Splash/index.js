import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {colors, fonts} from '../../utils';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Logo />
      <View style={styles.text}>
        <Text style={styles.title}>Jersey</Text>
        <Text style={styles.subTitle}>Shop</Text>
      </View>
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
  text: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.primary[600],
    color: colors.text.cyan,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 30,
    fontFamily: fonts.primary[400],
    color: colors.text.cyan,
    marginTop: 17,
  },
});
