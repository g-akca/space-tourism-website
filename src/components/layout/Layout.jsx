import Header from "./Header";

function Layout({ children, bg }) {
  return (
    <div className={`min-h-screen ${bg} bg-cover text-base leading-base`}>
      <Header />

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}

export default Layout;