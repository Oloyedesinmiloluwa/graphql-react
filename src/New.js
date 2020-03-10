import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const New = () => {
	const {data, loading, error } = useQuery(gql`
	{
		books{
		name,
		id
	   },
	   authors{
		   name,
		   id
	   }
	}
	`);
	console.log(data);
	// debugger;
	if(loading) return (<p>Loading...</p>);
	if (error) return (<p>An error occurred</p>);
	// const merge = [...data.books, ...data.authors];
	return data.authors.map(elem => (
			<li key={elem.id}>{elem.name}</li>
	));
};
export default New;
