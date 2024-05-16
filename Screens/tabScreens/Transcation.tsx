import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import ListItems from '../../Components/ListItems';
import {useNavigation} from '@react-navigation/native';
import Categorys from '../../data/CategoryData.json';
interface ExpenseTypes {
  title: string;
  paymentType: string;
  date: string;
  totalAmount: number;
  icon?: string;
}
function Transaction() {
  let expenseData: ExpenseTypes[] = [
    {
      title: 'Food',
      paymentType: 'card',
      date: 'Friday, 12 May',
      icon: 'food-turkey',
      totalAmount: 300,
    },
    {
      title: 'Transportation',
      paymentType: 'cash',
      date: 'Saturday, 13 May',
      icon: 'car-side',
      totalAmount: 150,
    },
    {
      title: 'Entertainment',
      paymentType: 'card',
      date: 'Sunday, 14 May',
      icon: 'movie-open',
      totalAmount: 200,
    },
    {
      title: 'Shopping',
      paymentType: 'card',
      date: 'Monday, 15 May',
      icon: 'shopping',
      totalAmount: 400,
    },
    {
      title: 'Utilities',
      paymentType: 'cash',
      date: 'Tuesday, 16 May',
      icon: 'van-utility',
      totalAmount: 250,
    },
    {
      title: 'Rent',
      paymentType: 'card',
      date: 'Wednesday, 17 May',
      icon: 'home-city',
      totalAmount: 1000,
    },
    {
      title: 'Groceries',
      paymentType: 'card',
      date: 'Thursday, 18 May',
      icon: 'cart',
      totalAmount: 500,
    },
    {
      title: 'Healthcare',
      paymentType: 'cash',
      date: 'Friday, 19 May',
      icon: 'cards-heart',
      totalAmount: 350,
    },
    {
      title: 'Education',
      paymentType: 'card',
      date: 'Saturday, 20 May',
      icon: 'book-open-variant',
      totalAmount: 600,
    },
    {
      title: 'Travel',
      paymentType: 'card',
      date: 'Sunday, 21 May',
      icon: 'motorbike',
      totalAmount: 700,
    },
  ];
  const navigation: any = useNavigation();
  const handleRedirect = () => {
    navigation.navigate('Settings');
  };
  return (
    <ScrollView style={tw`bg-[#FFFBF5]`}>
      <SafeAreaView>
        {/* //todo top header */}
        <View style={tw`flex flex-row items-center justify-between px-3 py-5`}>
          <Icon name="menu" size={25} style={tw`text-stone-500`} />
          <Text style={tw`text-center  text-stone-600`}>Friday, 12 May</Text>
          <TouchableOpacity onPress={handleRedirect}>
            <Icon name="settings" size={25} style={tw`text-stone-500`} />
          </TouchableOpacity>
        </View>

        {/* //todo card */}
        <View style={tw` px-1 py-1`}>
          <View
            style={tw`bg-[#232323] flex  flex-1  rounded-2xl p-3 shadow-lg min-h-[190px]`}>
            <View style={tw`flex flex-row justify-between items-center`}>
              <MaterialIcon
                name="integrated-circuit-chip"
                style={tw`text-yellow-500`}
                size={30}
              />
              <Text style={tw`text-white font-bold italic pr-2`}>VISA</Text>
            </View>
            <Text style={tw` font-semibold tracking-[5px] text-white py-10`}>
              63819411481148
            </Text>
            <Text
              style={tw`text-white/50 py-1 uppercase tracking-wide text-sm`}>
              Card Holder Name
            </Text>
            <Text style={tw`text-white tracking-wide text-sm`}>
              Arun Prakash
            </Text>
          </View>
        </View>

        {/* //todo total spends */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`py-1`}>
          {Categorys?.map(CategorysTypes => {
            return (
              <View
                key={CategorysTypes?.id}
                style={tw`min-w-[160px] rounded-2xl shadow-md p-2 bg-white mx-1 ${CategorysTypes?.color}`}>
                <View style={tw`flex flex-row items-center`}>
                  <View
                    style={tw`bg-white flex justify-center items-center h-[30px] w-[30px] rounded-lg`}>
                    <MaterialIcon
                      name={CategorysTypes?.icon}
                      style={tw`text-lg text-stone-600`}
                    />
                  </View>
                  <Text style={tw`flex-1 px-2 text-white`}>
                    {CategorysTypes?.name}
                  </Text>
                </View>
                <Text style={tw`text-[25px] text-white font-bold px-2 pt-3`}>
                  20%
                </Text>
                <Text style={tw`text-[25px] text-white font-bold p-2`}>
                  ${CategorysTypes?.monthlyBudget}.00
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <Text
          style={tw`text-lg font-medium tracking-wide py-3 px-3 text-[#232323]`}>
          Recent Transaction
        </Text>
        {/* //todo lists */}
        {expenseData?.map((lists, index) => {
          return <ListItems key={index} lists={lists} index={index} />;
        })}
      </SafeAreaView>
    </ScrollView>
  );
}

export default Transaction;
