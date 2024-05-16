import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

function TransactionDetails() {
  const route = useRoute();
  const {paramValue}: any = route.params;
  return (
    <View>
      <Text>{paramValue?.title}</Text>
    </View>
  );
}

export default TransactionDetails;
