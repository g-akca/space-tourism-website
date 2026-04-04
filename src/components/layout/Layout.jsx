import Header from "./Header";

function Layout({ children, bg = "" }) {
  return (
    <div className={`min-h-screen ${bg} bg-cover bg-bottom text-base tablet:text-[16px] desktop:text-[18px] leading-base text-blue-300 flex flex-col`}>
      <Header />

      <main className="p-6 tablet:p-10 desktop:p-12 grow flex flex-col desktop:items-center">
        {children}
      </main>
    </div>
  );
}

export default Layout;