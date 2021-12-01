import { Platform, StatusBar } from 'react-native'

const hasNotch = () => {
  if (Platform.OS === 'android') {
    const notch = StatusBar.currentHeight > 24
    return notch
  }
}

export default hasNotch
