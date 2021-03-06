import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Switch,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import Animated from 'react-native-reanimated';


export default function DrawerContent(props) {
    const paperTheme = useTheme();
    const translateX = Animated.interpolate(props.progress, {
        inputRange: [0, 0.5, 0.7, 0.8, 1],
        outputRange: [-100, -85, -70, -45, 0],
      });
   
    return (
        <DrawerContentScrollView {...props} >
            {/* This is fancy animation */}
            <Animated.View    
                style={[
                styles.drawerContent,
                {
                    backgroundColor: paperTheme.colors.surface,
                    transform: [{ translateX }],
                },
                ]}
            >   
              {/* This is the username and avatar twitter style */}
                <View style={styles.userInfoSection}>
                  <TouchableOpacity
                    style={{ marginLeft: 10
                    }}
                    onPress={() => {
                      props.navigation.toggleDrawer();
                    }}
                  >
                    <Avatar.Image
                      source={{
                        uri:
                          'https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg',
                      }}
                      size={50}
                    />
                  </TouchableOpacity>
                  <Title style={styles.title}>Bob Marley</Title>
                  <Caption style={styles.caption}>@weed420</Caption>
                  <View style={styles.row}>
                    {/* <View style={styles.section}>
                      <Paragraph style={[styles.paragraph, styles.caption]}>
                        202
                      </Paragraph>
                      <Caption style={styles.caption}>Obserwuje</Caption>
                    </View>
                    <View style={styles.section}>
                      <Paragraph style={[styles.paragraph, styles.caption]}>
                        159
                      </Paragraph>
                      <Caption style={styles.caption}>Obserwujący</Caption>
                    </View> */}
                  </View>
                </View>

                 <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account-outline"
                            color={color}
                            size={size}
                        />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('HomeStack')}}
                    />
                </Drawer.Section>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account-outline"
                            color={color}
                            size={size}
                        />
                        )}
                        label="Profile"
                        onPress={() => {props.navigation.navigate('ProfileStack')}}
                       
                    />
                </Drawer.Section>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="wrench"
                            color={color}
                            size={size}
                        />
                        )}
                        label="Settings"
                        onPress={() => {}}
                    />
                </Drawer.Section>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="cash-usd"
                            color={color}
                            size={size}
                        />
                        )}
                        label="Wallet"
                        onPress={() => {}}
                    />
                </Drawer.Section>
                
                {/* <TouchableOpacity 
                onPress={() => {this.logout()}}
                style={{ bottom: 0, position: 'absolute', width: '100%' }}>

                </TouchableOpacity> */}
                <Drawer.Section style={styles.drawerSectionLogout}>
                    <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="logout-variant"
                            color="red"
                            size={size}
                        />
                        )}
                        label={({ focused, color }) => 
                          <Text style={{ color:"red" }}>{focused ? 'Focused text' : "Logout"}</Text>
                        }
                        onPress={() => {alert('F')}}
                        style={{
                          color:"red",
                          // bottom: 0,
                          // width: "100%",
                          // position: "absolute"
                        }}
                    />
                </Drawer.Section>
            
            </Animated.View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      marginTop: 20,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    drawerSectionLogout: {
      marginTop: 15,
      color:"red",
    },
 
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });