import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
const DATA = [
  {
    id: "1",
    name: "Myah Myles",
    email: "Data Entry Clerk",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "Jane Cho",
    email: "Sales Manager",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "3",
    name: "Ida Mikkelsen",
    email: "Sales Manager",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "4",
    name: "Renee Sims",
    email: "Medical Assistant",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "5",
    name: "Jonathan Nuñez",
    email: "General",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "6",
    name: "Sasha Ho",
    email: "Administrative Assistant",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: "7",
    name: "Abdullah Hadley",
    email: "Marketing",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: "8",
    name: "Theresa Stock",
    email: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];
type ItemData = {
  id: string;
  name: string;
  email: string;
  image: string;
};
const Item = ({ item }: { item: ItemData }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "gray",
        padding: 10,
        margin: 10,
        justifyContent: "center",
      }}
    >
      <Image source={{ uri: item.image }} style={{ height: 80, width: 80 }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          backgroundColor: "orange",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Call</Text>
      </TouchableOpacity>
    </View>
  );
};
export default function Bai1() {
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}
