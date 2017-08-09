// Import libraries for makin a component
import React from 'react';
import { Text, View } from 'react-native';

// Make acomponent
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component abailable to other parts of the app
export default Header;
