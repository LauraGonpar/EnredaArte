import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Registro = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    Swal.fire("¡Cuenta creada!", "Ya puedes iniciar sesión", "success");
    navigate("/login");
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0 mt-5">
      <div className="col-md-5 bg-enredarte-red d-flex flex-column justify-content-center align-items-center text-white p-5">
        <h1 className="display-5 fw-bold mb-4 text-center">Bienvenid@ a EnredaArte</h1>
        <p className="text-center opacity-75">Únete a nuestra comunidad de amantes de lo artesanal.</p>
      </div>

      <div className="col-md-7 bg-enredarte-cream d-flex flex-column justify-content-center p-5">
        <h2 className="fw-bold mb-4">Crea tu cuenta</h2>
        <form onSubmit={handleRegister} style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label className="form-label small fw-bold">Nombre completo</label>
            <input type="text" className="form-control border-0 shadow-sm" placeholder="Ingresa tu nombre" required />
          </div>
          <div className="mb-3">
            <label className="form-label small fw-bold">E-mail</label>
            <input type="email" className="form-control border-0 shadow-sm" placeholder="Ingresa tu E-mail" required />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold">Contraseña</label>
            <input type="password" className="form-control border-0 shadow-sm" placeholder="Ingresa tu contraseña" required />
          </div>
          
          <button type="submit" className="btn btn-brown w-100 py-2 fw-bold mb-3">Sign Up</button>
          
          <p className="text-center small">
            ¿Ya tienes una cuenta? <Link to="/login" className="fw-bold text-dark">Inicia Sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registro;