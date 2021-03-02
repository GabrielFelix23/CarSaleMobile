import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './src/views/home'
import Sell from './src/views/sell'
import Car from './src/views/car'

const Router = createAppContainer(
  createSwitchNavigator({
    Home,
    Sell,
    Car
  })
)

export default function App() {
  return <Router/>
}