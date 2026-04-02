import Header from "./Header";

function Layout({ children, bg }) {
  return (
    <div className={`min-h-screen ${bg} bg-cover bg-bottom text-base leading-base text-blue-300`}>
      <Header />

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}

export default Layout;