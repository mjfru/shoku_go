import CategoryForm from "./components/CategoryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return <>
    <Header />
    <CategoryForm categoryName="Produce" categoryEmoji1="🍎" categoryEmoji2="🥕" />
    <Footer />
  </>;
}

export default App;
