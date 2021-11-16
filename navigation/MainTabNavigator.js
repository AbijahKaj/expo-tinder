import { Icon } from 'expo'
import React from 'react'
import {
  createStackNavigator,
} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TopPicksScreen from '../screens/TopPicksScreen'

const Bottom = createBottomTabNavigator();

const MainTabNavigator = ({}) => {
  return(
      <Bottom.Navigator>
        <Bottom.Screen component={HomeScreen} name="Home" navigationOptions={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    Icon={Icon.MaterialCommunityIcons}
                    focused={focused}
                    name="fire"
                />
            ),
        }} />
          <Bottom.Screen component={TopPicksScreen} name="TopPicks" navigationOptions={{
              tabBarLabel: 'TopPicks',
              tabBarIcon: ({ focused }) => (
              <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="diamond" />
              ),
          }} />
          <Bottom.Screen component={MessagesScreen} name="Messages" navigationOptions={{
              tabBarLabel: 'Messages',
              tabBarIcon: ({ focused }) => (
                  <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="commenting-o" />
              ),
          }} />
        <Bottom.Screen component={ProfileScreen} name="Profile" navigationOptions={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
              <TabBarIcon Icon={Icon.Feather} focused={focused} name="user"/>
          ),
        }} />
      </Bottom.Navigator>
  )
}

export default MainTabNavigator
