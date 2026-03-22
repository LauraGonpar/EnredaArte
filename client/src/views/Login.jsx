import { Link, useNavigate } from "react-router-dom"; 
import { useContext, useState } from "react"; 
import { ProductContext } from "../context/ProductContext";
import Swal from "sweetalert2"; 

const Login = () => {
  const { setUser } = useContext(ProductContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@enredaarte.cl" && password === "admin123") {
    setUser({
      id: 99,
      nombre: "Laura Gonzalez",
      email: "admin@enredaarte.cl",
      role: "admin"
    });
    Swal.fire("¡Bienvenida Laura!", "Panel de control activado", "success");
    navigate("/admin"); 
  } 
  

  else if (email === "usuario@gmail.com" && password === "123456") {
    setUser({
      id: 1,
      nombre: "Lola Pérez",
      email: "usuario@gmail.com",
      role: "user"
    });
    Swal.fire("¡Hola Lola!", "Qué bueno verte de nuevo", "success");
    navigate("/"); 
  } 
  
  else {
    Swal.fire("Error", "Credenciales no reconocidas", "error");
  }
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0 shadow-lg overflow-hidden rounded-4 mt-5">
      <div className="col-md-5 bg-enredarte-red d-flex flex-column justify-content-center align-items-center text-white p-5">
        <h1 className="display-5 fw-bold mb-4">Bienvenid@ a EnredaArte</h1>
        <p className="text-center opacity-75 mb-5">Joyería artesanal con alma de cobre y cristales.</p>
      </div>

      <div className="col-md-7 bg-enredarte-cream d-flex flex-column justify-content-center p-5">
        <h2 className="fw-bold mb-4">Bienvenido de vuelta</h2>
        

        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label className="form-label small fw-bold">E-mail</label>
            <input 
              type="email" 
              className="form-control border-0 py-2 shadow-sm"
              placeholder="ingresa tu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold">Contraseña</label>
            <input 
              type="password" 
              className="form-control border-0 py-2 shadow-sm" 
              placeholder="ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <button type="submit" className="btn btn-brown w-100 py-2 fw-bold mb-3 shadow">
            Confirmar
          </button>
          <p className="text-center small">
            ¿No tienes cuenta aún? <Link to="/registro" className="fw-bold text-dark">Registrate</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;