import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// нужен для обеспечения уникальности css классов при сборке продакшена
// так как каждое отдельное приложение будет минифицированно по одинаковым
// правилам, то есть вероятность, то часть классов в дочерних приложения
// объединяться при их запуске через родительское
const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div >
      </BrowserRouter >
    </StylesProvider>
  );
};
