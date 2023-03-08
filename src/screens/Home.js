import React from 'react';
import {View, SafeAreaView} from 'react-native';
// Components
import Title from '../components/Title';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Title text="My Home" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
