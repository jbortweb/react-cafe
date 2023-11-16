import { Link } from "react-router-dom";

const Login = () => {
  return (
    
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Para crear un pedido debes iniciar sesión</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="email"
            >Email:
            </label>
              <input 
                type="email"
                id="email"
                className="mt-2 w-full p-3 bg-gray-200"
                name="email"
                placeholder="Tu email"
              />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="password"
            >Contraseña:
            </label>
              <input 
                type="password"
                id="password"
                className="mt-2 w-full p-3 bg-gray-200"
                name="password"
                placeholder="Tu contraseña"
              />
          </div>
          <input 
            type="submit" 
            value="Iniciar sesión"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md" 
          />
        </form>
      </div>
      <nav className="mt-5">
        <Link to="/auth/registro">
        No tienes cuenta? <span className="font-bold">Crea una</span></Link>
      </nav>
    </>
  )
}
export default Login