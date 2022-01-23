import React, { Component } from 'react';
import { Route } from 'react-router';
import './custom.css'
import { MyLayout } from './MyComponents/MyLayout/MyLayout';
import { Layout } from './components/Layout';

import { Home } from './MyComponents/Home/Home';
import { NewOrder } from './MyComponents/NewOrder/NewOrder';

// �������� default ���������� ������������ ������ � �����, 
//������� ��� ������� ������� ������ ����� �� ��������� 
//�������� ������

// extends - ������������
/*
export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/kabzda' component={Kabzda} />
        <Route path='/image' component={ShowImage} />
      </Layout>
    );
  }
}
*/

export default class App extends Component{
  static displayName = App.displayName;

  render(){
    return(
      <MyLayout>
        <Route exact path='/' component={Home}/>
        <Route path='/NewOrder' component={NewOrder} />
      </MyLayout>
    );
  }
}