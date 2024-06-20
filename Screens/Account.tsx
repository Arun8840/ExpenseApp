import React from 'react';
import tw from 'twrnc';
import {Text, View, Button, Alert} from 'react-native';

function Account() {
  return (
    <View
      style={tw`bg-[#0c0c0c] flex flex-row justify-center items-center flex-1`}>
      <Text
        style={tw`font-mono text-yellow-50 text-center text-lg tracking-wide`}>
        Account
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
}

export default Account;
