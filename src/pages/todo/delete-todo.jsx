import useRouter from 'use-react-router';
import { deleteTodo } from '../../states/todo/action';
import { connect } from 'react-redux';
import { Layout } from '../../components/layout';
import { Button, Card } from 'react-bootstrap';

const Component = props => {
	const { deleteTodo } = props;
	const { history, match } = useRouter();

	const onCancle = () => {
		history.push('/');
	};

	const onDelete = () => {
		deleteTodo(match.params.id);
		history.push('/');
	};

	return (
		<Layout>
			<Card className="text-center">
				<Card.Body>
					<p className="h5">Anda yakin akan menhapus todo ini?</p>
				</Card.Body>
				<Card.Footer>
					<div className="text-right">
						<Button onClick={onDelete} variant="danger">
							Hapus
						</Button>
						<Button className="ml-1" onClick={onCancle}>
							Tidak
						</Button>
					</div>
				</Card.Footer>
			</Card>
		</Layout>
	);
};

const mapDispatchToProps = dispatch => ({
	deleteTodo: id => dispatch(deleteTodo(id)),
});

const DeleteTodoPage = connect(null, mapDispatchToProps)(Component);

export { DeleteTodoPage };
