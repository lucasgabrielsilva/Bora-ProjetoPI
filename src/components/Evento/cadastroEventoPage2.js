import React, {Component, Fragment} from 'react';
import {StyleSheet, Alert, View} from 'react-native';
import { Input, Button, ThemeProvider, Text, CheckBox, Icon} from 'react-native-elements';
import Overlay from 'react-native-modal-overlay';
import {Left, Body, Header, Title } from 'native-base'


const theme = {
  colors: {
    primary: 'black'
  }
}

const themeButton = {
  colors: {
    primary: '#1e90ff'
  }
}

export default class cadastroEventoPage2 extends Component{
  state = {
    modalVisible: false,
    rock: false,
    sertanejo: false,
    pagode: false,
    samba: false,
    eletro: false,
    funk: false,
  }
  
  showOverlay() {
    this.setState({modalVisible: true})
  }
  
  onClose = () => this.setState({ modalVisible: false});

  verificaIsFalse(){
    if(this.state.rock == false && this.state.sertanejo == false && this.state.pagode == false && this.state.samba == false && this.state.eletro == false && this.state.funk == false){
      Alert.alert(
                "Criar evento",
                "Por favor, escolha alguma categoria",
                [
                    { text: "OK", onPress: () =>  null },
                ],);
    }
    else{
      var categorias = {
        rock: this.state.rock,
        sertanejo: this.state.sertanejo,
        pagode: this.state.pagode,
        samba: this.state.samba,
        eletro: this.state.eletro,
        funk: this.state.funk,
      }
      module.exports.categorias = categorias;
       this.props.navigation.navigate('CadastroEventoPage3');
    }
  }
  alert(){
    Alert.alert(
        "Deseja retornar a Home?",
        "Todo seu progresso de criação de evento sera perdido",
        [
            { text: "Não", onPress: () =>  null },
            { text: "Sim", onPress: () => this.props.navigation.navigate('Home')},
            
        ],);
}

  render() {
    return (
      <View style={styles.container}>
          <Header androidStatusBarColor="#1e90ff" style={styles.header}>
            <Left>
              <Icon size={24} type='font-awesome' color='white' name='arrow-left' onPress={() => this.alert()} hasTabs/>
            </Left>
            <Body>
            <Title> Criar Evento </Title>
            </Body>
          </Header>
        <View style={styles.icon}>
        <Icon name='play' type='font-awesome' size={120} color={"#1e90ff"}/>
        </View>
        <View style={styles.text}>
          <Text h4 style={{ color: '#1e90ff' }}>
            Qual a categoria do seu evento?
          </Text>
        </View>
        <View style={styles.button}>
          <ThemeProvider theme={themeButton}>
            <Button title='Escolha a categoria' onPress={this.showOverlay.bind(this)} buttonStyle={{width: 200, height: 45}} /> 
              <Overlay visible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside
              animationType="zoomIn" containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}}
              childrenWrapperStyle={{backgroundColor: '#eee'}}
              animationDuration={500}>
              {
                (hideModal, overlayState) => (
                  <Fragment>
                    <View style={styles.overlayContainer}>
                      <Text>Escolha as categorias para seu evento:</Text>
                      <CheckBox title='Rock' checkedIcon='check-square' checkedColor='green' checked={this.state.rock} onPress={() => this.setState({rock: !this.state.rock})}/>
                      <CheckBox title='Sertanejo' checkedIcon='check-square' checkedColor='green' checked={this.state.sertanejo} onPress={() => this.setState({sertanejo: !this.state.sertanejo})}/>
                      <CheckBox title='Pagode' checkedIcon='check-square' checkedColor='green' checked={this.state.pagode} onPress={() => this.setState({pagode: !this.state.pagode})}/>
                      <CheckBox title='Samba' checkedIcon='check-square' checkedColor='green' checked={this.state.samba} onPress={() => this.setState({samba: !this.state.samba})}/>
                      <CheckBox title='Eletro' checkedIcon='check-square' checkedColor='green' checked={this.state.eletro} onPress={() => this.setState({eletro: !this.state.eletro})}/>
                      <CheckBox title='Funk' checkedIcon='check-square' checkedColor='green' checked={this.state.funk} onPress={() => this.setState({funk: !this.state.funk})}/>
                      <View style={styles.overlayButton}>
                        <Button raised titleStyle={{ color: 'black' }} title="Confirmar" onPress={hideModal}/>
                      </View>
                    </View>
                  </Fragment>
                )
              }
            </Overlay>
          </ThemeProvider>
      </View>
        <View style={styles.button}>
          <ThemeProvider theme={themeButton}>
          <Button onPress={ ()=> this.verificaIsFalse()} buttonStyle={{width: 60, height: 45}} icon={<Icon name='check' type='material' size={20} color="white" />} /> 
        </ThemeProvider>
        </View>
    </View>
  );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    marginTop: 20,
    justifyContent: 'center', 
    alignItems: 'center',
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
  overlayContainer: {
    borderBottomWidth: 1, 
    paddingTop: 10
  },
  overlayButton: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 70,
    paddingRight: 70,
  },
  header:{
    backgroundColor: '#1e90ff'
  }
});