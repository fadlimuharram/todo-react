import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useRouter from 'use-react-router';
import { Layout } from './../../components/layout';

const LoginPage = () => {
	// use Router untuk history
	const { history } = useRouter();

	// define state / deklarasi state
	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	});

	// function untuk set username dan password / ganti state
	const onChangeField = e => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = e => {
		e.preventDefault();

		// cek ada localStorage yang namanya users, masukkan ke dalam variabel konstanta users
		const users = JSON.parse(localStorage.getItem('users'));

		// kondisional cek localstorage users
		if (!users || users.length === 0) {
			alert('Wrong Credentials');
		} else {
			// ada users
			const index = users.findIndex(user => {
				return user.username === loginData.username && user.password === loginData.password;
			});

			if (index === -1) {
				alert('Wrong Credentials');
			} else {
				localStorage.setItem('isLogin', JSON.stringify(true));
				// setelah kita melakukan cek local storage dan set local storage
				// kita langsung membuat route ke arah login
				// pake history, artinya kalo kita back kita akan diarahkan ke route sebelumnya
				history.push('/');
			}
		}
	};

	return (
		<>
			<Layout>
				<p>Login Page</p>
				<Form onSubmit={onSubmit}>
					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							name="username"
							value={loginData.username}
							onChange={onChangeField}
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							value={loginData.password}
							onChange={onChangeField}
						></Form.Control>
					</Form.Group>

					<Button className="mt-5" type="submit" block>
						Login
					</Button>
				</Form>
			</Layout>
		</>
	);
};

export { LoginPage };
