import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './src/views/home'
import Sell from './src/views/sell'
import Car from './src/views/car'
import QRCode from './src/views/QRCode'

const Router = createAppContainer(
  createSwitchNavigator({
    Home,
    Sell,
    Car,
    QRCode
  })
)

export default function App() {
  return <Router/>
}