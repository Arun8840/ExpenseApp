import React from 'react';
import {View} from 'react-native';

const ReusableList = React.memo(({data, renderItem}: any) => {
  return (
    <>
      {data?.length > 0 &&
        data?.map((item: any) => <View key={item.id}>{renderItem(item)}</View>)}
    </>
  );
});

export default ReusableList;
