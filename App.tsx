import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

type Page =
  | "Home"
  | "Explore"
  | "Reels"
  | "Create"
  | "Messages"
  | "Notifications"
  | "Profile";

const posts = [
  {
    user: "ruba_official",
    image: "https://picsum.photos/700/700?random=10",
    text: "Welcome to Ruba 🚀",
  },
  {
    user: "travel_world",
    image: "https://picsum.photos/700/700?random=20",
    text: "Explore something new 🌍",
  },
];

function Login({ login }: { login: () => void }) {
  return (
    <SafeAreaView style={styles.login}>
      <View style={styles.loginBox}>
        <Text style={styles.logo}>ruba</Text>
        <Text style={styles.tagline}>Your world. Your space.</Text>

        <TextInput
          style={styles.input}
          placeholder="Username, email or phone"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity style={styles.mainButton} onPress={login}>
          <Text style={styles.mainButtonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.lineRow}>
          <View style={styles.line} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.google}>
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.signup}>
          Don't have an account?{" "}
          <Text style={styles.bold}>Create account</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

function Home() {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.topBar}>
        <Text style={styles.appName}>ruba</Text>
        <View style={styles.topIcons}>
          <Text style={styles.icon}>♡</Text>
          <Text style={styles.icon}>✉</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.moments}
      >
        {["You", "Alex", "Sarah", "John", "Maya"].map((name) => (
          <View style={styles.moment} key={name}>
            <View style={styles.momentCircle}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
            <Text style={styles.momentName}>{name}</Text>
          </View>
        ))}
      </ScrollView>

      {posts.map((post) => (
        <View style={styles.post} key={post.user}>
          <View style={styles.postHeader}>
            <View style={styles.smallAvatar}>
              <Text>👤</Text>
            </View>

            <Text style={styles.postUser}>{post.user}</Text>

            <Text style={styles.more}>•••</Text>
          </View>

          <Image source={{ uri: post.image }} style={styles.postImage} />

          <View style={styles.postActions}>
            <Text style={styles.action}>♡</Text>
            <Text style={styles.action}>💬</Text>
            <Text style={styles.action}>↗</Text>
            <Text style={styles.save}>🔖</Text>
          </View>

          <Text style={styles.likes}>1,284 likes</Text>

          <Text style={styles.caption}>
            <Text style={styles.bold}>{post.user}</Text>{" "}
            {post.text}
          </Text>

          <Text style={styles.comments}>View all 82 comments</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function Explore() {
  return (
    <ScrollView style={styles.page}>
      <Text style={styles.pageTitle}>Explore</Text>

      <TextInput
        style={styles.search}
        placeholder="Search people, topics..."
        placeholderTextColor="#777"
      />

      <View style={styles.grid}>
        {Array.from({ length: 15 }).map((_, index) => (
          <Image
            key={index}
            source={{
              uri: `https://picsum.photos/300/300?random=${index + 50}`,
            }}
            style={styles.gridImage}
          />
        ))}
      </View>
    </ScrollView>
  );
}

function Reels() {
  return (
    <View style={styles.reels}>
      <Image
        source={{ uri: "https://picsum.photos/700/1100?random=100" }}
        style={styles.reelImage}
      />

      <View style={styles.reelTop}>
        <Text style={styles.reelTitle}>Ruba Reels</Text>
      </View>

      <View style={styles.reelBottom}>
        <Text style={styles.reelUser}>@ruba_creator</Text>
        <Text style={styles.reelText}>
          Discover your next favourite video 🔥
        </Text>
      </View>

      <View style={styles.reelActions}>
        <Text style={styles.reelIcon}>♡</Text>
        <Text style={styles.reelIcon}>💬</Text>
        <Text style={styles.reelIcon}>↗</Text>
        <Text style={styles.reelIcon}>🔖</Text>
      </View>
    </View>
  );
}

function Create() {
  return (
    <View style={styles.center}>
      <Text style={styles.bigPlus}>＋</Text>
      <Text style={styles.createTitle}>Create on Ruba</Text>
      <Text style={styles.createSub}>
        Share photos, videos and moments
      </Text>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>📷 Choose Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>🎥 Create Video</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>✍️ Write Post</Text>
      </TouchableOpacity>
    </View>
  );
}

function Messages() {
  const people = ["Alex", "Sarah", "Maya", "Ruba Team"];

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.pageTitle}>Messages</Text>

      <TextInput
        style={styles.search}
        placeholder="Search messages..."
        placeholderTextColor="#777"
      />

      {people.map((person) => (
        <TouchableOpacity style={styles.chat} key={person}>
          <View style={styles.chatAvatar}>
            <Text>👤</Text>
          </View>

          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>{person}</Text>
            <Text style={styles.chatMessage}>
              Tap to start a conversation
            </Text>
          </View>

          <Text style={styles.chatArrow}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function Notifications() {
  return (
    <View style={styles.center}>
      <Text style={styles.notificationIcon}>♡</Text>
      <Text style={styles.createTitle}>Notifications</Text>
      <Text style={styles.createSub}>
        Your latest activity will appear here.
      </Text>
    </View>
  );
}

function Profile() {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.profileHeader}>
        <View style={styles.profileAvatar}>
          <Text style={{ fontSize: 40 }}>👤</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Ruba User</Text>
          <Text style={styles.profileUsername}>@ruba_user</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>24</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>12.5K</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>328</Text>
          <Text>Following</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      <Text style={styles.bio}>
        Creating my world on Ruba ✨{"\n"}
        Photography • Travel • Life
      </Text>

      <View style={styles.grid}>
        {Array.from({ length: 9 }).map((_, index) => (
          <Image
            key={index}
            source={{
              uri: `https://picsum.photos/300/300?random=${index + 150}`,
            }}
            style={styles.gridImage}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState<Page>("Home");

  if (!loggedIn) {
    return <Login login={() => setLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "Explore":
        return <Explore />;
      case "Reels":
        return <Reels />;
      case "Create":
        return <Create />;
      case "Messages":
        return <Messages />;
      case "Notifications":
        return <Notifications />;
      case "Profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  const nav: { name: Page; icon: string }[] = [
    { name: "Home", icon: "⌂" },
    { name: "Explore", icon: "⌕" },
    { name: "Reels", icon: "▶" },
    { name: "Create", icon: "＋" },
    { name: "Messages", icon: "✉" },
    { name: "Notifications", icon: "♡" },
    { name: "Profile", icon: "◉" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{renderPage()}</View>

      <View style={styles.bottomNav}>
        {nav.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.navItem}
            onPress={() => setPage(item.name)}
          >
            <Text
              style={[
                styles.navIcon,
                page === item.name && styles.active,
              ]}
            >
              {item.icon}
            </Text>

            <Text
              style={[
                styles.navLabel,
                page === item.name && styles.active,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
  },

  login: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },

  loginBox: {
    width: "100%",
  },

  logo: {
    fontSize: 58,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: -4,
  },

  tagline: {
    textAlign: "center",
    color: "#777",
    marginBottom: 35,
    fontSize: 15,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#fafafa",
    fontSize: 15,
  },

  mainButton: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  mainButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },

  forgot: {
    textAlign: "center",
    marginVertical: 18,
    fontWeight: "600",
  },

  lineRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  line: {
    height: 1,
    backgroundColor: "#ddd",
    flex: 1,
  },

  or: {
    marginHorizontal: 12,
    color: "#888",
    fontSize: 12,
  },

  google: {
    height: 52,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  googleText: {
    fontWeight: "600",
  },

  signup: {
    textAlign: "center",
    marginTop: 28,
    color: "#777",
  },

  bold: {
    fontWeight: "900",
  },

  page: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topBar: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  appName: {
    fontSize: 30,
    fontWeight: "900",
    flex: 1,
  },

  topIcons: {
    flexDirection: "row",
    gap: 18,
  },

  icon: {
    fontSize: 26,
  },

  moments: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  moment: {
    alignItems: "center",
    marginHorizontal: 8,
  },

  momentCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 25,
  },

  momentName: {
    fontSize: 11,
    marginTop: 5,
  },

  post: {
    marginBottom: 18,
  },

  postHeader: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  smallAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  postUser: {
    fontWeight: "800",
    flex: 1,
  },

  more: {
    fontWeight: "900",
  },

  postImage: {
    width: "100%",
    height: 390,
  },

  postActions: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },

  action: {
    fontSize: 27,
    marginRight: 18,
  },

  save: {
    marginLeft: "auto",
    fontSize: 23,
  },

  likes: {
    fontWeight: "900",
    paddingHorizontal: 14,
  },

  caption: {
    paddingHorizontal: 14,
    paddingTop: 7,
  },

  comments: {
    color: "#888",
    paddingHorizontal: 14,
    paddingTop: 8,
  },

  pageTitle: {
    fontSize: 31,
    fontWeight: "900",
    padding: 20,
  },

  search: {
    height: 48,
    backgroundColor: "#f2f2f2",
    borderRadius: 14,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    fontSize: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },

  gridImage: {
    width: "33.33%",
    height: 130,
  },

  reels: {
    flex: 1,
    backgroundColor: "#000",
  },

  reelImage: {
    width: "100%",
    height: "100%",
  },

  reelTop: {
    position: "absolute",
    top: 20,
    left: 18,
  },

  reelTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },

  reelBottom: {
    position: "absolute",
    left: 18,
    bottom: 25,
    right: 90,
  },

  reelUser: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 17,
  },

  reelText: {
    color: "#fff",
    marginTop: 7,
  },

  reelActions: {
    position: "absolute",
    right: 15,
    bottom: 20,
    alignItems: "center",
  },

  reelIcon: {
    color: "#fff",
    fontSize: 29,
    marginVertical: 8,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },

  bigPlus: {
    fontSize: 70,
    fontWeight: "200",
  },

  notificationIcon: {
    fontSize: 70,
  },

  createTitle: {
    fontSize: 25,
    fontWeight: "900",
    marginTop: 8,
  },

  createSub: {
    color: "#888",
    marginTop: 8,
    textAlign: "center",
  },

  createButton: {
    width: 270,
    height: 52,
    backgroundColor: "#111",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  createButtonText: {
    color: "#fff",
    fontWeight: "800",
  },

  chat: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  chatAvatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },

  chatInfo: {
    flex: 1,
    marginLeft: 14,
  },

  chatName: {
    fontSize: 16,
    fontWeight: "900",
  },

  chatMessage: {
    color: "#888",
    marginTop: 4,
  },

  chatArrow: {
    fontSize: 28,
    color: "#aaa",
  },

  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },

  profileAvatar: {
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    fontSize: 22,
    fontWeight: "900",
  },

  profileUsername: {
    color: "#777",
    marginTop: 4,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 19,
    fontWeight: "900",
  },

  editButton: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    margin: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  editText: {
    fontWeight: "800",
  },

  bio: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    lineHeight: 22,
  },

  bottomNav: {
    height: 68,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },

  navItem: {
    alignItems: "center",
    minWidth: 42,
  },

  navIcon: {
    fontSize: 21,
    color: "#777",
  },

  navLabel: {
    fontSize: 8,
    color: "#777",
    marginTop: 3,
  },

  active: {
    color: "#000",
    fontWeight: "900",
  },
});
