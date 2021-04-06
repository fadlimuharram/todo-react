import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useRouter from "use-react-router";
import { Layout } from "./../../components/layout";

const RegisterPage = () => {
	// use Router untuk history
	const { history } = useRouter();

	// define state / deklarasi state
	const [registerData, setRegisterData] = useState({
		username: "",
		password: "",
	});

	// function untuk set username dan password / ganti state
	const onChangeField = (e) => {
		setRegisterData({
			...registerData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		// cek ada localStorage yang namanya users, masukkan ke dalam variabel konstanta users
		const users = JSON.parse(localStorage.getItem("users"));

		// kondisional cek localstorage users
		if (!users || users.length === 0) {
			// jika users benar benar kosong maka tambahkan users sesuai inputan
			localStorage.setItem("users", JSON.stringify([registerData]));
		} else {
			// jika users ada, maka tambahan data tersebut ke dalam local storage
			localStorage.setItem("users", [...users, registerData]);
		}

		// setelah kita melakukan cek local storage dan set local storage
		// kita langsung membuat route ke arah login
		// pake history, artinya kalo kita back kita akan diarahkan ke route sebelumnya
		history.push("/login");
	};

	return (
		<Layout>
			<Form onSubmit={onSubmit}>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						name="username"
						value={registerData.username}
						onChange={onChangeField}
					></Form.Control>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						value={registerData.password}
						onChange={onChangeField}
					></Form.Control>
				</Form.Group>

				<Button className="mt-5" type="submit" block>
					Register
				</Button>
			</Form>
		</Layout>
	);
};

export { RegisterPage };
