import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DATA = [
  {
    id: 1,
    name: "Myah Myles",
    email: "Data Entry Clerk",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Jane Cho",
    email: "Sales Manager",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

type ItemData = {
  id: number;
  name: string;
  email: string;
  image: string;
};

const Item = ({
  item,
  onDelete,
  onEdit,
}: {
  item: ItemData;
  onDelete: (id: number) => void;
  onEdit: (item: ItemData) => void;
}) => {
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
      <View>
        <Pressable
          style={{ marginBottom: 10 }}
          onPress={() => {
            onEdit(item);
          }}
        >
          <Image source={require("../assets/images/updated.png")} />
        </Pressable>
        <Pressable onPress={() => onDelete(item.id)}>
          <Image source={require("../assets/images/delete.png")} />
        </Pressable>
      </View>
    </View>
  );
};

export default function Bai5() {
  const [listData, setListData] = useState<ItemData[]>(DATA);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  // Hàm xoá
  const deleteItem = (id: number) => {
    setListData(listData.filter((item) => item.id !== id));
  };

  // Hàm chọn dữ liệu để chỉnh sửa
  const editItem = (item: ItemData) => {
    setName(item.name);
    setEmail(item.email);
    setEditingId(item.id);
  };

  // Hàm cập nhật dữ liệu
  const handleUpdate = () => {
    if (editingId) {
      setListData(
        listData.map((item) =>
          item.id === editingId ? { ...item, name, email } : item
        )
      );
      setEditingId(null);
      setName("");
      setEmail("");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Form cập nhật dữ liệu */}
      {editingId && (
        <View>
          <TextInput
            placeholder="Nhập tên"
            value={name}
            onChangeText={setName}
            style={{
              borderWidth: 1,
              marginBottom: 10,
              padding: 10,
              borderRadius: 5,
            }}
          />
          <TextInput
            placeholder="Nhập email"
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              marginBottom: 10,
              padding: 10,
              borderRadius: 5,
            }}
          />
          <TouchableOpacity
            onPress={handleUpdate}
            style={{
              backgroundColor: "orange",
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Lưu</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Danh sách dữ liệu */}
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Item item={item} onDelete={deleteItem} onEdit={editItem} />
        )}
      />
    </View>
  );
}
