

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full px-10 py-2  z-[100%] shadow bg-gradient-to-tr from-indigo-300 to-purple-100 ">
            <div className="flex justify-around items-center flex-col">

                <a href="#">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/945b0225337909.563440870421b.png"
                        alt="logo" className="w-20 cursor-pointer"
                    />
                </a>
                <nav className="mx-2  flex md:flex-row flex-col">
                    <a href="#" className="text-md font-medium text-gray-600 ml-4 transition-colors duration-300 ease-in-out hover:text-indigo-600 active:text-indigo-600">Inicio</a>
                    <a href="#" className="text-md font-medium text-gray-600 ml-4 transition-colors duration-300 ease-in-out hover:text-indigo-600 active:text-indigo-600">Sobre Mi</a>
                    <a href="#" className="text-md font-medium text-gray-600 ml-4 transition-colors duration-300 ease-in-out hover:text-indigo-600 active:text-indigo-600">Servicios</a>
                    <a href="#" className="text-md font-medium text-gray-600 ml-4 transition-colors duration-300 ease-in-out hover:text-indigo-600 active:text-indigo-600">Portafolio</a>
                    <a href="#" className="text-md font-medium text-gray-600 ml-4 transition-colors duration-300 ease-in-out hover:text-indigo-600 active:text-indigo-600">Contacto</a>
                </nav>
            </div>
        </header>
    )
}
