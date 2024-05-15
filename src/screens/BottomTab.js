import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const TabBar = () => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={{flexDirection: 'row', gap: 30}}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/marketplace.png')}
          />
          <Text style={styles.tabText}>Market Place</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/chat.png')}
          />
          <Text style={styles.tabText}>Chat</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/Vector.png')}
          />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              fontFamily: 'Urbanist-Bold',
              color: '#4E67FF',
            }}>
            Home
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/fire.png')}
          />
          <Text style={styles.tabText}>Music Fire</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/user.png')}
          />
          <Text style={styles.tabText}>Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  tabText: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Urbanist-Bold',
    color: '#000000',
  },
});

export default BottomTab;
