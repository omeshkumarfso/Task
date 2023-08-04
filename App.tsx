import { StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from './src/store'
import StackNavigation from './src/Route/StackNavigation'

const App = () => {
  return (
    
      <SafeAreaView style={{ display: 'flex', flex: 1, }}>
        <StatusBar
          animated={true}
          backgroundColor="#3B7358"
        />
        <Provider store={store}>
         <StackNavigation />
        </Provider>
      </SafeAreaView>
  
  )
}

export default App