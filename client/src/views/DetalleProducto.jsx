import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Swal from "sweetalert2";

const DetalleProducto = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { products, addToCart, imagenesMapa } = useContext(ProductContext);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const detalle = products.find((p) => p.id === parseInt(id));
    if (detalle) {
      setProducto(detalle);
    } else {
      navigate("/");
    }
  }, [id, products, navigate]);

  const handleAdd = () => {
    addToCart(producto);
    Swal.fire({
      title: "¡Excelente elección!",
      text: `${producto.nombre} se añadió al carrito.`,
      icon: "success",
      confirmButtonColor: "#d9a05b"
    });
  };

  if (!producto) return <div className="text-center mt-5">Cargando detalles de la joya...</div>;

  return (
    <div className="container mt-5">
      <div className="card mb-3 shadow-lg border-0">
        <div className="row g-0">
          <div className="col-md-6">
            <img 
              src={imagenesMapa[producto.id]} 
              className="img-fluid h-100 w-100 detail-image-custom" 
              alt={producto.nombre} 
              style={{ objectFit: "cover", minHeight: "400px" }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body p-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/" className="text-decoration-none text-muted">Colección</a></li>
                  <li className="breadcrumb-item active">{producto.nombre}</li>
                </ol>
              </nav>
              
              <h1 className="display-5 fw-bold">{producto.nombre}</h1>
              <hr />
              <p className="card-text fs-5 text-secondary">{producto.descripcion}</p>
              
              <div className="my-4">
                <h3 className="text-dark fw-bold">${producto.precio.toLocaleString()}</h3>
                <p className="text-muted">
                  <strong>Color/Material:</strong> {producto.color} <br />
                  <strong>Disponibles:</strong> {producto.stock} unidades
                </p>
              </div>

              <div className="d-grid gap-2">
                <button 
            className="btn btn-brown flex-grow-1 btn-sm fw-bold text-white"
            onClick={handleAdd}
          >
            Añadir 🛒
          </button>
                <button className="btn btn-outline-secondary" onClick={() => navigate("/Tienda")}>
                  Volver a la tienda
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;