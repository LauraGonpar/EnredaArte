import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cart, setCart, cartTotal, imagenesMapa, removeFromCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const handlePagar = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Procesando pago...',
      text: 'Espera un momento, estamos validando con el banco.',
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading() },
      timer: 2000
    }).then(() => {
      setCart([]); 
      navigate("/confirmacion"); 
    });
  };

  return (
    <div className="container-fluid bg-enredarte-cream pt-5 mt-5 min-vh-100 px-lg-5">
      <div className="container py-4">
        

        <h2 className="text-enredarte-red fw-bold mb-2">Confirmación de compra</h2>
        <div className="d-flex align-items-center mb-5 small">
          <span className="text-muted">Direccion</span>
          <div className="mx-2 border-bottom border-enredarte-red opacity-25" style={{ width: '40px' }}></div>
          <span className="text-muted">Envío</span>
          <div className="mx-2 border-bottom border-enredarte-red opacity-25" style={{ width: '40px' }}></div>
          <span className="text-enredarte-red fw-bold">Pago</span>
        </div>

        <div className="row g-5">

          <div className="col-md-7">
            <div className="d-flex gap-2 mb-4">
              <button className="btn btn-light border border-dark rounded-0 px-4 py-2">
                <i className="bi bi-paypal text-primary me-2"></i> PayPal
              </button>
              <button className="btn btn-brown text-white rounded-0 px-4 py-2">Credit Card</button>
            </div>

            <h5 className="fw-bold mb-4">Detalles de forma de pago</h5>
            <form onSubmit={handlePagar}>
              <div className="mb-3">
                <input type="text" className="form-control rounded-0 border-dark bg-transparent py-2" placeholder="Nombre en la tarjeta" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control rounded-0 border-dark bg-transparent py-2" placeholder="Número de tarjeta" required />
              </div>
              <div className="row g-2 mb-3">
                <div className="col-4">
                  <select className="form-select rounded-0 border-dark bg-transparent py-2"><option>Mes</option></select>
                </div>
                <div className="col-4">
                  <select className="form-select rounded-0 border-dark bg-transparent py-2"><option>Año</option></select>
                </div>
                <div className="col-4">
                  <input type="text" className="form-control rounded-0 border-dark bg-transparent py-2" placeholder="CVC" required />
                </div>
              </div>

              <div className="form-check form-switch d-flex justify-content-between align-items-center p-0 mb-4">
                <label className="form-check-label small text-enredarte-red">Save card data for future payments</label>
                <input className="form-check-input ms-0 border-dark" type="checkbox" role="switch" />
              </div>

              <button type="submit" className="btn btn-brown w-100 py-3 fw-bold rounded-0 text-white shadow-sm">
                Pagar
              </button>
            </form>
          </div>

          <div className="col-md-5">
            <h5 className="fw-bold mb-4">Tu carrito</h5>
            <div className="pe-md-4">
              {cart.map((item) => (
                <div key={item.id} className="d-flex align-items-center mb-4 border-bottom border-dark border-opacity-25 pb-3">
                  <div className="bg-white p-1 rounded shadow-sm me-3" style={{ width: '85px', height: '85px' }}>
                    <img 
                      src={imagenesMapa[item.id]}
                      className="img-fluid w-100 h-100 object-fit-cover rounded"
                      alt={item.nombre}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="fw-bold mb-1 text-enredarte-red">{item.nombre}</h6>
                    <p className="small mb-0 text-muted">Color: <span className="text-enredarte-red opacity-75">{item.color || 'Único'}</span></p>
                    <p className="small mb-0 text-muted">Quantity: {item.cantidad}</p>
                    <p className="fw-bold mb-0">${(item.precio * item.cantidad).toLocaleString('es-CL')}</p>
                  </div>
                  <button className="btn btn-link text-muted small text-decoration-underline p-0 align-self-end" onClick={removeFromCart}>Borrar</button>
                </div>
              ))}
              
              <div className="d-flex justify-content-between fw-bold fs-5 mt-4">
                <span>Total:</span>
                <span className="text-enredarte-red">${cartTotal.toLocaleString('es-CL')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;