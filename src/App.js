import React from 'react';
import './App.css';
import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import { ReactComponent as ReactLogo } from './logo.svg';
import Card from './components/Card';
import Info from './components/Info';

const wordsList = [
  {
      eng: 'between',
      rus: 'между'
  },
  {
      eng: 'high',
      rus: 'высокий'
  },
  {
      eng: 'really',
      rus: 'действительно'
  },
  {
      eng: 'something',
      rus: 'что-нибудь'
  },
  {
      eng: 'most',
      rus: 'большинство'
  },
  {
      eng: 'another',
      rus: 'другой'
  },
  {
      eng: 'much',
      rus: 'много'
  },
  {
      eng: 'family',
      rus: 'семья'
  },
  {
      eng: 'own',
      rus: 'личный'
  },
  {
      eng: 'out',
      rus: 'из/вне'
  },
  {
      eng: 'leave',
      rus: 'покидать'
  },
];


const App = () => {
  return(
    <React.Fragment>
      <HeaderBlock>
        <Header>
          Время учить слова онлайн
        </Header>
        <Paragraph>
        Используйте карточки для запоминания и пополняйте активный словарный запас
        </Paragraph>
      </HeaderBlock>
      <Info
        title = 'О проекте'
        text = 'Данный проект написан на React в рамках React-ивного марафона. Чуть позже этот блок и блок ниже станут выглядеть лучше и здесь будет написано что-то более полезное, но пока у меня нет фантазии.'
      />
      <div>
        {
          wordsList.map(({eng, rus}, index) => (
          <Card key={index} eng={eng} rus={rus}/>
          ))
        }
      </div>
      <Info
        title = 'Автор проекта'
        text = 'Кострикин Александр'
      />
      <HeaderBlock hideBackground>
        <Header>
          Еще один заголовок
        </Header>
        <Paragraph>
          Ну здорово же!
        </Paragraph>
        <ReactLogo />
      </HeaderBlock>
    </React.Fragment>
  );
}

export default App;
