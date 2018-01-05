import React, {Component} from 'react';
import { StyleSheet, Text, ActivityIndicator, ListView TextInput, Button, Alert, View, Image, AppRegistry,
  Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, ScollView, TouchableWithoutFeedback, FlatList } from 'react-native';

//Basics

/*
export default class Bananas extends Component {
  render() {

      let pic = {
        url : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
        <Image source={pic} style={{width: 193, height: 110}}/>
      );
  }
}
*/

//Props
/*
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valleera'/>
      </View>
    )
  }
}
*/
//State AND THE BIG FUCKIDY PART OF THE APP
/*
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 50);
  }


render() {
  let display = this.state.showText ? this.props.text : '';
  return (
    <Text style={styles.bigblue}>{display}</Text>
  );
}
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      <Blink text='I sure love ot blink o boy' />
      <Blink text='It is really fun having text flashing in my face all the time' />
      <Blink text='weowoweoweowoeoweewoweowowowowoow' />
      <Blink text='I was joking guys can we stop please for fucks sake mate' />
      <View style={{width:200, height: 200, backgroundColor: 'purple'}} />
      <View style={{flex:4, backgroundColor: 'black'}} />
      </View>
    );
  }
}

//style

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'red',
  },
  red: {
    color: 'red',
  }
});
*/
//handling text input THE CHODWER TRANSLATOR
/*
export default class PizzaTranlator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
      <Text style={{alignItems: 'center'}}>Shnitzel Translator</Text>
        <TextInput
          style={{height: 40, alignItems: 'center'}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && 'radda ').join('')}
          </Text>
        </View>
    );
  }
}
*/

//buttons
/*
export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('WEOWOWEOWEOO')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me please plesae press me please me please please o pleasees pleaeheses"
              color="blue"
            />
          </View>
          <View style={styles.alternativeLayoutButtonConatiner}>
            <Button
              onPress={this._onPressButton}
              title="OK RACHEL OK"
              color="orange"
              />
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  alternativeLayoutButtonConatiner: {
    margin: 20,
    flexDirection: "row",
    justifyContent: 'space-between'
  }
})
*/

//Diffrent buttons gota move on man "incomplete"
/*
export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('we weo you taped the fucking button dooditly do')
  }
  _onLongPressButton() {
    Alert.alert(' welp........... this is the long button')
  }

  render() {
    return (
      <View style={style.containers}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback
              .SelectableBackground() : ''}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} _onLongPressButton={this
          ._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TOuchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})
*/
/*
export default class ISCrolledDownAndWhatHappenedNexthockedMe extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Text style={{fontSize:96}}>Scroll me plz naaa niger</Text>
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Text style={{fontSize:96}}>Scroll me plz fsd  wewowowowow</Text>
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Text style={{fontSize:96}}>Scroll me plzwerdsssd</Text>
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Image source={require('/assets/images.duckduckgo.com.jpeg')} />
        <Text style={{fontSize:80}}>Scrollwerwerw me plz</Text>
      </ScrollView>
    );
  }
}
*/
/*
export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}
        </Text>}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 19,
    height: 44,
  }
})
*/
// Networking

export default class Movies extends Components {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount()
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((resposne) => response.json())
    .then((responsJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1
        !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.movies),
      }, function() {

      });
    })
    .catch((error) => {
      console.error(error);
    });
}

render () {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTOp: 200}}>
        <ActivityIndicator />
      <View>
    );
  }
  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
      />
    </View?
  )
}
