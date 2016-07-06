/**
 * React Native Course by ninghao.net
 */
'use strict';

import React from 'react-native';
import styles from './app/Styles/Main';
import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import icons from './app/Assets/Icons';
import Featured from './app/Components/Featured';
import Search from './app/Components/Search';
import User from './app/Components/User';

let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TabBarIOS,
} = React;

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

class MovieTalk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured'
    };
  }

  render() {
    return (
      <TabBarIOS barTintColor="darkslateblue" tintColor="white">
        <TabBarIOS.Item
          // systemIcon="featured"
          icon={{uri: icons.star, scale: 4.6}}
          title="推荐电影"
          selectedIcon={{uri: icons.starActive, scale: 4.6}}
          selected={this.state.selectedTab === 'featured'}
          onPress={() => {
            this.setState({
              selectedTab: 'featured'
            });
          }}>
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          // systemIcon="most-viewed"
          icon={{uri: icons.board, scale: 4.6}}
          title="北美票房"
          selectedIcon={{uri: icons.boardActive, scale: 4.6}}
          selected={this.state.selectedTab === 'us_box'}
          onPress={() => {
            this.setState({
              selectedTab: 'us_box'
            });
          }}>
          <USBox />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: icons.search, scale: 4.6}}
          title="搜索"
          selected={this.state.selectedTab === 'search'}
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            });
          }}>
          <Search />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: icons.user, scale: 3.3}}
          title="我的"
          selected={this.state.selectedTab === 'user'}
          onPress={() => {
            this.setState({
              selectedTab: 'user'
            });
          }}>
          <User />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);


























// earth
