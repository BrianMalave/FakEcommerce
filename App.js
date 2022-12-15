import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useColorScheme } from 'nativewind';
import ProductList from './components/ProductList';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <SafeAreaView className=" flex-1 justify-center
    items-center bg-gray-200 dark:bg-black">
      <View className="flex-row items-center justify-between w-full gap-5">
        <Text className="dark:text-white text-2xl font-bold">
          New Collection
        </Text>
        <View className="items-center">
          <Text className="dark:text-white font-semibold mt-1 mb-1">Dark Mode</Text>
          <Switch className="mb-2"
            value={colorScheme === "dark"} 
            onChange={(toggleColorScheme)}
            trackColor={{ false: "#767577", true: "#5BC0BE" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            onPress={isEnabled} />
        </View>
      </View>
      <ProductList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}