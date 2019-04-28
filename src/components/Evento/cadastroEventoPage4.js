import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { Input, Button, ThemeProvider, Text} from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import CadastroEventoPage5 from './cadastroEventoPage5'
import moment from 'moment'

const theme = {
  colors: {
    primary: 'black'
  }
}

const themeButton = {
  colors: {
    primary: 'white'
  }
}


export default class App extends Component {
    render() {
      return <AppContainer />;
    }
  }
  
  class cadastroEventoPage4 extends Component{
    constructor(){
      super()
      this.state= {
        isVisible: false,
        chosenDate: ''
      }
    }

    handlePicker = (datetime) => {
      this.setState({
        isVisible: false,
        chosenDate: moment(datetime).format('DD/MM/YYYY')
      })
    }

    showPicker = () => {
      this.setState({
        isVisible: true
      })
    }

    hidePicker = () => {
      this.setState({
        isVisible: false
      })
    }
    
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.icon}>
          <Icon name='calendar' size={120} color={"white"}/>
        </View>
        <View style={styles.text}>
          <Text h4 style={{ color: theme.colors.primary }}>
            Qual a data e hora do seu evento?
          </Text>
        </View>
          <View style={styles.input}> 
            <Text>
              {this.state.chosenDate}
            </Text>
          </View>
        <View style={styles.button}>
          <ThemeProvider theme={themeButton}>
            <Button raised title="Escolha a data" onPress={this.showPicker} titleStyle={{ color: 'black' }} />
            <DateTimePicker isVisible={this.state.isVisible} onConfirm={this.handlePicker} onCancel={this.hidePicker} mode={'datetime'} />
          </ThemeProvider>
        </View>
        <View style={styles.button}>
          <ThemeProvider theme={themeButton}>
            <Button raised title='Ok' onPress={ ()=> this.props.navigation.navigate('cadastroEventoPage5') } titleStyle={{ color: 'black' }}/>
          </ThemeProvider>
        </View>
      </View>
    );
    }
  }
  
  class cadastroEventoPage5 extends Component {
    render(){
        return (
            <CadastroEventoPage5/>
        );
    }
  }
  
  const AppSwitchNavigator = createStackNavigator({
    cadastroEventoPage4: {screen: cadastroEventoPage4,
        navigationOptions: {
            header: null,
          }
        },
    cadastroEventoPage5: {screen: cadastroEventoPage5,
        navigationOptions: {
            header: null,
          },
    },
  });
  
  const AppContainer = createAppContainer(AppSwitchNavigator);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e90ff',
    },
    input: {
      marginTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    button: {
      marginTop: 20,
      paddingLeft: 70,
      paddingRight: 70,
    },
    icon: {
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: 50,
    },
    text: {
      marginTop: 40,
      justifyContent: 'center', 
      alignItems: 'center',
    }
  });