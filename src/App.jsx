import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskBoard from "./components/Task/TaskBoard";

export default function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="min-h-[calc(100vh-200px)]">
        {/* Banner */}
        <Banner />
        {/* Task Board */}
        <TaskBoard />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
