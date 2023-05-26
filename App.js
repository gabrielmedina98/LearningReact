import React from 'react';
import {View, Text} from 'react-native';

function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#121233'}}>
      <View style={{height: 65, backgroundColor: '#121233'}}> </View>
      <View style={{flex: 1, backgroundColor: ''}}> </View>
      <View style={{height: 65, backgroundColor: '#121233'}}> </View>
    </View>
  );
}
export default App;

// ((parte da atividade 3))
/* import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.area}>
      <Text style={[styles.titulo, styles.textoAlinhado]}> Gabriel </Text>
      <Text style={styles.titulo}> sujeitoprogramador </Text>
      <Text style={[styles.subTitulo, styles.textoAlinhado]} >Sou um texto 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    marginTop: 50,
  },

  titulo: {
    fontSize: 20,
    color: '#ff0000',
  },
  subTitulo: {
    color: '#00ff00',
    fontSize: 17,
    marginTop: 15,
  },
  textoAlinhado: {
    textAlign: 'center',
  },
});

export default App; */

//entendo os States (((((parte 2 )))))
/* import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';

function App() {
  const [nome, setNome] = useState('igor');
  const [idade, setIdade] = useState(25);
  function entrar(nome, idade) {
    setNome(nome);
    setIdade(idade);
  }
  return (
    <View style={{marginTop: 25}}>
      <Button title="Mudar nome" onPress={() => entrar('Gabriel Medina', 25)} />
      <Text style={{fontSize: 19}}>{nome}</Text>
      <Text style={{fontSize: 15}}>{idade}</Text>
    </View>
  );
}

export default App; */

//((parte 1))))
/* function App() {
  return (
    <View>
      <Text>Olá Mundo!!!!</Text>
      <Text style={{color: 'red', fontSize: 25, margin: 15}}>
        Meu primeiro App
      </Text>
      <Text style={{fontSize: 18, color: 'green'}}> Aprendendo React</Text>
      <Logo largura={250} altura={250} fulano="Gabriel" />
    </View>
  );
}
export default App;

function Logo(props) {
  let img = 'https://sujeitoprogramador.com/reactlogo.png';
  return (
    <View>
      <Image
        source={{uri: img}}
        style={{width: props.largura, height: props.altura}}
      />

      <Text> {props.fulano}</Text>
    </View>
  );
}
 */
