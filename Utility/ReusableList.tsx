import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';
const ReusableList = React.memo(({data, renderItem}: any) => {
  return (
    <>
      {data?.length > 0 ? (
        data?.map((item: any) => <View key={item.id}>{renderItem(item)}</View>)
      ) : (
        <View style={tw`p-5`}>
          <Text style={tw`text-center text-white`}>No data Found</Text>
        </View>
      )}
    </>
  );
});

export default ReusableList;
