import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <>
            <nav style={{ backgroundColor: '#1a202c' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
                            <Link to="/matriculas_municipio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Solución 1</Link>
                             <Link to="/genero_matricula" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">solución 2</Link>
                            <Link to="/jornada_matricula" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">solucion 3</Link>
                            <Link to="/ie_matricula" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Solucion 4</Link>
                            <Link to="/grado_matricula" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">solucion 5</Link>
                            <Link to="/ie_metod" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Solucion 6</Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )


}

export default NavBar