import "./App.css";
import "./styles/codemirror.scss"
import "tailwindcss/tailwind.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Interface from "./components/Interface";
function App() {
  return (
    <div className="min-h-screen min-w-min bg-gradient-to-br from-blueGray-900 to-black">
      <Layout>
        <Header />
        <Main>
          <Interface />
        </Main>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
