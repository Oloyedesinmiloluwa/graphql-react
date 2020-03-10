import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './New';
import Input from './Input';
import ApolloClient, { gql } from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql'});
console.log('console works....');
client.query({
query: gql`
	{
	books{
	  id,
	name,
	authorId
	},
	authors{
	  name,
	  id
	}
  	}
`
}).then(res => {console.log('Result:',res)})
.catch(err => console.log('Error:', err));
const Wrapper = () => (
	<ApolloProvider client={client}>
		<h2>My first Apollo app 🚀</h2>
		<ul>
		<App />
		</ul>
		<Input />
	</ApolloProvider>
)
ReactDOM.render(<Wrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
