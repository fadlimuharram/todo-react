import { Provider } from "react-redux";
import { store } from "./states/store";
import App from "./App";

const Container = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export { Container };
