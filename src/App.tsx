import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import { MainLayout } from "./components/Layout/Layout";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs/ContactUs";
import { GlobalStyles, defaultTheme } from "./styles";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<MainLayout>
				<Navbar />
				<ContactUs />
				<Footer />
			</MainLayout>
		</ThemeProvider>
	);
}

export default App;
