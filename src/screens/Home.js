import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
// Components
import Title from '../components/Title';

const Home = () => {
  // const [title, setTitle] = useState('Not Updated');

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTitle('Updated');
  //   }, 5000);
  // }, []);

  return (
    <SafeAreaView>
      <View>
        <Title text="Home" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
