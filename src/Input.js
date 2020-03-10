import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const mutate = gql`
mutation AddAuthor($name:String, $age:Integer){
	addAuthor(name: $name, age: $age){
	  name,
	  age,
	  id
	} 
}`;
const submit = (e, addAuthor,state) => {
	e.preventDefault();
	addAuthor({ variables: { name: state.value, age: 1}});debugger;
	// state.value = '';
}
const Input = () => {
	let state;
	const [addAuthor, { data }] = useMutation(mutate);
	// debugger
	return (
		// <form onSubmit={(e) => {e.preventDefault();
		// 	addAuthor({ variable: { name: state.value, age: 1}});}}>
		<form onSubmit={(e) => submit(e,addAuthor, state)}>
		<input ref={node => {state = node}} type="text" placeholder="Enter text"></input>
		<button>Submit</button>
		</form>
	);
}
export default Input;
