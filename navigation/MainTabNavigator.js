
import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TopPicksScreen from '../screens/TopPicksScreen'
import Icon from '@expo/vector-icons/Ionicons';
import Colors from "../constants/Colors";

const Bottom = createBottomTabNavigator();



const MainTabNavigator = ({}) => {
  return(
      <Bottom.Navigator tabBarOptions={{
          activeTintColor:'#f2404c',
          inactiveTintColor:'#000119',
          style:{
              justifyContent:'center',
              backgroundColor:'#FFF',
              elevation:2
          }
      }}>
        <Bottom.Screen component={HomeScreen} name="Home" navigationOptions={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
                <Icon
                    name="fire"
                    size={26}
                    style={{ marginBottom: -3 }}
                    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                />
            ),
        }} />
          <Bottom.Screen component={TopPicksScreen} name="TopPicks" navigationOptions={{
              tabBarLabel: 'TopPicks',
              tabBarIcon: ({ focused }) => (
                  <Icon
                      name="diamond"
                      size={26}
                      style={{ marginBottom: -3 }}
                      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                  />
              ),
          }} />
          <Bottom.Screen component={MessagesScreen} name="Messages" navigationOptions={{
              tabBarLabel: 'Messages',
              tabBarIcon: ({ focused }) => (
                  <Icon
                      name="commenting-o"
                      size={26}
                      style={{ marginBottom: -3 }}
                      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                  />
              ),
          }} />
        <Bottom.Screen component={ProfileScreen} name="Profile" navigationOptions={{
          tabBarLabel: 'Profile',
            tabBarIcon:({color,size})=>(
                <Icon name='ios-person' color={color} size={30}/>
            )
        }} />
      </Bottom.Navigator>
  )
}

export default MainTabNavigator
