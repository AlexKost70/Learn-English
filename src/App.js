import React from 'react';
import './App.css';
import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import { ReactComponent as Logo } from './logo.svg';
import Card from './components/Card';

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
  {
      eng: 'act',
      rus: 'действовать'
  }
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
      <HeaderBlock hideBackground>
        <div>
          {
            wordsList.map(({eng, rus}, index) => (
            <Card key={index} eng={eng} rus={rus}/>
            ))
          }
        </div>
      </HeaderBlock>
      <HeaderBlock>
        <Header>
          Это просто!
        </Header>
        <Paragraph>
          Начните прямо сейчас
        </Paragraph>
        <Logo />
      </HeaderBlock>
    </React.Fragment>
  );
}

export default App;
