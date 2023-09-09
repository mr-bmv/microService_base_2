import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// нужен для обеспечения уникальности css классов при сборке продакшена
// так как каждое отдельное приложение будет минифицированно по одинаковым
// правилам, то есть вероятность, то часть классов в дочерних приложения
// объединяться при их запуске через родительское
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
