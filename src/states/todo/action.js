export const getTodo = () => {
	return {
		type: 'GET_TODO',
		payload: [
			{
				id: Math.random(),
				name: 'Belajar',
				description: 'Belajar small project',
			},
			{
				id: Math.random(),
				name: 'Membaca',
				description: 'Membaca Novel Sebelum Tidur',
			},
			{
				id: Math.random(),
				name: 'Meeting',
				description: 'Meeting dengan client Jam 7',
			},
		],
	};
};

export const getTodoById = id => {
	return {
		type: 'GET_TODO_BY_ID',
		payload: {
			id,
		},
	};
};

export const addTodo = todo => {
	return {
		type: 'ADD_TODO',
		payload: {
			...todo,
			id: Math.random(),
		},
	};
};

export const updateTodo = todo => {
	return {
		type: 'UPDATE_TODO',
		payload: todo,
	};
};

export const deleteTodo = id => {
	return {
		type: 'DELETE_TODO',
		payload: {
			id,
		},
	};
};
