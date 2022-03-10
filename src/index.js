import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import store from './store/store';
import { Provider } from 'react-redux'
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount:false,
      refetchOnWindowFocus:false,
    }

}});

ReactDOM.render(
  
  <React.StrictMode>
      <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


