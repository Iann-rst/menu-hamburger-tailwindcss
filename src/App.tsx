import { useState } from "react"

/**
 * 
 * MOBILE FIRST
 *  
 */
function App() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  return (

    <div>
      <header className={`bg-cyan-700 text-white p-5 flex justify-around ${openMenu ? "h-screen flex flex-col items-center" : ""}`}>
        <a href="/" className="text-4xl md:text-lg">
          HOME
        </a>

        <a className={`${openMenu ? "block" : "hidden"} md:text-lg text-4xl md:block`}>
          ABOUT
        </a>

        <a className={`${openMenu ? "block" : "hidden"} md:text-lg text-4xl md:block`}>
          SERVIÇOS
        </a>

        <a className={`${openMenu ? "block" : "hidden"} md:text-lg text-4xl md:block`}>
          CONTATOS
        </a>

        <button className="absolute right-4 top-6 md:hidden" onClick={handleOpenMenu}>
          <div className={`w-10 h-1 bg-white mb-1 transition-all duration-500 ease-in-out ${openMenu ? 'rotate-45 translate-y-2' : ""}`}></div>
          <div className={`w-10 h-1 bg-white mb-1 ${openMenu ? 'hidden' : ""}`}></div>
          <div className={`w-10 h-1 bg-white mb-1 transition-all duration-500 ease-in-out ${openMenu ? '-rotate-45' : ""}`}></div>
        </button>
      </header>
    </div>
  )
}

export default App
