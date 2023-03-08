import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
  // const [title, setTitle] = useState('Not Pressed');
  // const handlePress = () => {
  //   setTitle('Pressed');
  // };

  // useEffect(() => {
  //   console.log('UseEffectNew');
  //   setTitle(title);
  // }, [title]);

  return (
    // <Text onPress={handlePress} style={styles.title}>
    <Text style={styles.title}>{text}</Text>
  );
};

// If you don't define a prop in the parent component
// the elements in this object will be passed by default.
Title.defaultProps = {
  text: 'Default Text',
};

// memoization can be used to optimize the rendering of components that receive the same props repeatedly.
// By default, whenever a parent component re-renders, all of its children will re-render as well,
// even if their props haven't changed. This can be a performance bottleneck, especially for components
// that have expensive render methods or are deeply nested in the component tree.
// React.memo() works by comparing the current props of a component with the previous props
// and only re-rendering the component if the props have changed.
// If the props are the same, it will return the previous rendered result from cache,
//thus avoiding unnecessary rendering.
export default React.memo(Title);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'black',
  },
});
