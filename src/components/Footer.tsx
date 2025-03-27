// Logos
import reactLogo from '/src/assets/react.svg'
import viteLogo from '/vite.svg'


function Footer() {
    // const [count, setCount] = useState(0)

    return (
        // Padding Sueprior e Inferior
        <div className=" py-10">
            <div className="flex justify-center items-center">
                <a className="p-1" href="https://vite.dev" target="_blank" >
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a className="p-1" href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>

            </div>

            <h1 className="text-white flex justify-center items-center pt-4" >Developed with: Vite + React</h1>

            <div className="text-[#B6C2CE] space-x-6 text-center pt-4">
                <a href="https://github.com" className="hover:text-pink-300">GitHub</a>
                <a href="https://linkedin.com" className="hover:text-pink-300">LinkedIn</a>
                <a href="https://ig.com" className="hover:text-pink-300">Instagram</a>
            </div>
            <p className="text-[#B6C2CE] mt-4 text-sm text-center">&copy; 2025 Marvin López. Todos los derechos reservados.</p>
        </div>

    )
}

export default Footer