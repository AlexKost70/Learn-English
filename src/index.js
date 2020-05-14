import React from 'react';
import ReactDom from 'react-dom';
import HeaderBlock from './components/HeaderBlock';
import './index.css';

const AppList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const firstItem = <li>Item 0</li>;

  const isAuth = true;

  return (
    <ul>
      { isAuth ? firstItem : null }
      { items.map(item => <li>{item}</li>) }
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
}

const AppHeader = () => {
  return (
    <h1 className="header">My Header</h1>
  );
}

const AppInput = () => {
  const placeholder = 'Type text...';

  return (
    <label htmlFor="search">
      <input placeholder={placeholder} />
    </label>
  )
}

const App = () => {
  return(
    <React.Fragment>
      <HeaderBlock/>
      <AppHeader></AppHeader>
      <AppInput />
      <AppList></AppList>
      <AppHeader></AppHeader>
      <AppList></AppList>
    </React.Fragment>
  );
}

ReactDom.render(<App />, document.getElementById('root'));