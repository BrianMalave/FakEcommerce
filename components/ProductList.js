import * as React from "react";
import { FlatList, Text } from "react-native";
import { data } from "../product";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return(
    <FlatList 
      data={data} 
      keyExtractor={(data) => data.id}
      renderItem={({ item }) => <ProductCard {...item}
      contentContainerStyle={{ paddingHorizontal: 15 }} />}
    />
  );
}