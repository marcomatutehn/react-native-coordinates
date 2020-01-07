import React, { Component } from 'react';
import {FlatList} from 'react-native';

import Layout from '../components/coordinates-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Coordinates from '../components/coordinates'

class CoordinatesList extends Component {
  //keyExtractor = item => item.;
  renderEmpty = () => <Empty text="No hay coordenadas" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <Coordinates {...item} />;
  };

  render() {
    return (
      <Layout title="Las coordenadas disponibles son:">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default CoordinatesList

