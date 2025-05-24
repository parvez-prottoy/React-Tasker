import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="min-h-[calc(100vh-200px)]">
        {/* Banner */}
        <Banner />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
