import React, {Component} from 'react';
import {StyleSheet, View, Alert, ScrollView} from 'react-native';
import { Input, Button, ThemeProvider, Text} from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import {Left, Body, Header, Title } from 'native-base'

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



export default class cadastroEventoPage4 extends Component{
    constructor(){
      super()
      this.state= {
        isVisible: false,
        data: null,
        horario: null,
      }
    }

    handlePicker = (datetime) => {
      var date = moment(datetime).format('DD/MM/YYYY HH:mm');
      date = date.split(' ');
      this.setState({
        isVisible: false,
        data: date[0],
        horario: date[1],
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
    
    verificaIsNull(){
    if(this.state.data && this.state.horario){
      module.exports.data = this.state.data;
      module.exports.horario = this.state.horario;
      this.props.navigation.navigate('CadastroEventoPage5');
    }
    else{
            Alert.alert(
                "Criação de evento",
                "Por favor, escolha uma data e um horario",
                [
                    { text: "OK", onPress: () =>  null },
                ],);
    }
    }

    render() {
      return (
        <View style={styles.container}>
            <Header androidStatusBarColor="#1e90ff" style={styles.header}>
            <Left>
              <Icon size={24} type='font-awesome' color='white' name='arrow-left' onPress={() => this.props.navigation.navigate('Home')} hasTabs/>
            </Left>
            <Body>
            <Title> Criar Evento </Title>
            </Body>
          </Header>
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
            <Button raised title="Escolha a data/hora" onPress={this.showPicker} titleStyle={{ color: 'black' }} />
            <DateTimePicker isVisible={this.state.isVisible} onConfirm={this.handlePicker} onCancel={this.hidePicker} mode={'datetime'} />
          </ThemeProvider>
        </View>
        <View style={styles.button}>
          <ThemeProvider theme={themeButton}>
            <Button raised title='Ok' onPress={()=> this.verificaIsNull()} titleStyle={{ color: 'black' }}/>
          </ThemeProvider>
        </View>
      </View>
    );
    }
  }
    
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
    },
    header:{
      backgroundColor: '#1e90ff'
    }
  });