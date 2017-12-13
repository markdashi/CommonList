/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CommonListHeader from 'CommonListHeader'



export default class App extends Component<{}> {

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      var Groups = [];
      //第一组
      this._setGroupItem0(Groups);
      //第二组
      this._setGroupItem1(Groups);

      this._setGroupItem2(Groups);

      this._setGroupItem3(Groups);

      this.state = {
        dataSource: Groups,
      }
    }

  _setGroupItem0(Groups){
    var item0 = new CommonListHeader.CommonListItem('test','我的消息','4');
    item0.customItemTipStyle = {fontSize:14,color:'white',width:12,borderRadius:6,backgroundColor:'red',overflow:'hidden'};
    var group0 = new CommonListHeader.CommonGroupItem([item0],10);
    Groups.push(group0);

  }
  _setGroupItem1(Groups){
    var item0 = new CommonListHeader.CommonListItem('test','会员中心');
    var item1 = new CommonListHeader.CommonListItem('test','商城');
    var item2 = new CommonListHeader.CommonListItem('test','在线听歌免流量');
    var group1 = new CommonListHeader.CommonGroupItem([item0,item1,item2],10);
    Groups.push(group1);
  }
  _setGroupItem2(Groups){
    var item0 = new CommonListHeader.CommonListItem('test','设置');
    var item1 = new CommonListHeader.CommonListItem('test','扫一扫');
    var item2 = new CommonListHeader.CommonListItem('test','个性换肤','官方白');
    var item3 = new CommonListHeader.CommonSwitchItem('test','夜间模式');
    var item4 = new CommonListHeader.CommonListItem('test','定时关闭');
    var item5 = new CommonListHeader.CommonListItem('test','音乐闹钟');
    var item6 = new CommonListHeader.CommonListItem('test','驾驶模式');

    var group2 = new CommonListHeader.CommonGroupItem([item0,item1,item2,item3,item4,item5,item6],10);
    Groups.push(group2);
  }

  _setGroupItem3(Groups){
    var item0 = new CommonListHeader.CommonListItem('test','分享网易云音乐');

    var group3 = new CommonListHeader.CommonGroupItem([item0],10);
    Groups.push(group3);
  }

  render() {
    return (
        <CommonListHeader.CommonList
            commonSectionListStyle={{marginTop: 20,backgroundColor:'#e8e8e8'}}
            dataSource={this.state.dataSource}
            switchTintColor={'red'}
            didSelectedItem={(value)=>{
                   // alert(value)
                }}
            tipTitleStyle={{fontSize:14,color:'#666666'}}
            CommonRowCellStyle={{height:44}}
            // SectionHeader={this._sectionHeader()}
        />
    );
  }
}

