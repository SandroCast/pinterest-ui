import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="search" />
            <Tabs.Screen name="messages" />
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}