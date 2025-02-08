import { FlatList, Image, Text, View } from "react-native";

export default function Bai4() {
  const name = ["Bùi Tôn", "Quang Hai", "Dinh Cu"];

  const emailList: string[] = [
    "nguyenvana123@gmail.com",
    "tranthib456@yahoo.com",
    "phamquoc789@outlook.com",
    "lethanhdat2024@gmail.com",
    "hoangminh.dev@hotmail.com",
    "duongthikim.cntt@gmail.com",
    "vuhoanganh_it@protonmail.com",
    "dangthienbao99@gmail.com",
    "truongvanchien2025@yahoo.com",
    "lethanhhoa_it@outlook.com",
  ];

  const avatarUrls: string[] = [
    "https://ui-avatars.com/api/?name=John+Doe",
    "https://api.dicebear.com/7.x/identicon/svg",
    "https://api.dicebear.com/7.x/bottts/svg",
    "https://api.dicebear.com/7.x/micah/svg",
    "https://api.dicebear.com/7.x/personas/svg",
    "https://api.dicebear.com/7.x/avataaars/svg",
    "https://api.dicebear.com/7.x/adventurer/svg",
    "https://api.dicebear.com/7.x/big-smile/svg",
    "https://api.dicebear.com/7.x/lorelei/svg",
    "https://api.dicebear.com/7.x/thumbs/svg",
  ];

  const position: string[] = ["Ui", "Code", "Test"];

  const DATA = [];
  for (let i = 0; i < 10; i++) {
    DATA.push({
      id: i,
      name: name[Math.floor(Math.random() * name.length)],
      email: emailList[Math.floor(Math.random() * emailList.length)],
      avatar: avatarUrls[Math.floor(Math.random() * avatarUrls.length)],
      position: position[Math.floor(Math.random() * position.length)],
    });
  }

  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              marginBottom: 10,
              backgroundColor: "#f9f9f9",
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: item.avatar }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ color: "gray" }}>{item.email}</Text>
              <Text style={{ color: "#007bff" }}>Vị trí: {item.position}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
