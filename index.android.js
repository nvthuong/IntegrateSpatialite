import React, { Component } from 'react';
import {Alert} from 'react-native';
import db from 'react-native-spatialite';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class IntegateSpatiaLite extends Component {
  render() {
    db.createConnection('spatialite.db').then(connected => {
      // db.executeQuery('CREATE TABLE IF NOT EXISTS	test_geom (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, measured_value DOUBLE NOT NULL)');
      db.executeQuery('SELECT AddGeometryColumn("test_geom", "the_geom", 4326, "POINT", "XY")');
      // db.executeQuery('INSERT INTO test_geom VALUES (NULL, "first point", 1.23456, GeomFromText("POINT(1.01 2.02)", 4326))');
      db.executeQuery('select * from test_geom');
    }).then(
      array => {
        console.log({ arr });
        return db.executeQuery('SELECT * FROM MyTable');
      }
      ).then(
      rows => {
        console.log({ rows });
      }
      ).catch(
      err => {
        throw err;
      }
      );

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('IntegateSpatiaLite', () => IntegateSpatiaLite);
