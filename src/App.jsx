import React, { useState, useEffect } from 'react';
import PedidoForm from './Components/PedidoForm';
import PedidoTable from './Components/PedidoTable';
import Swal from 'sweetalert2';

function App() {
  const [pedidos, setPedidos] = useState([]);
  const [pedidoEditando, setPedidoEditando] = useState(null);

  // 🔹 Funciones para localStorage
  const guardarEnStorage = (pedidos) => {
    localStorage.setItem('pedidosRestaurante', JSON.stringify(pedidos));
  };

  const obtenerDeStorage = () => {
    const data = localStorage.getItem('pedidosRestaurante');
    return data ? JSON.parse(data) : [];
  };

  // 🔹 Cargar pedidos al iniciar la app
  useEffect(() => {
    const pedidosGuardados = obtenerDeStorage();
    setPedidos(pedidosGuardados);
  }, []);

  // 🔹 Agregar pedido
  const agregarPedido = (pedido) => {
    const nuevosPedidos = [...pedidos, pedido];
    setPedidos(nuevosPedidos);
    guardarEnStorage(nuevosPedidos);

    Swal.fire({
      icon: 'success',
      title: '¡Pedido agregado!',
      text: `Mesa ${pedido.mesa} - ${pedido.producto} (${pedido.cantidad})`,
      showConfirmButton: false,
      timer: 1800,
      toast: true,
      position: 'top-end'
    });
  };

  // 🔹 Eliminar pedido con confirmación
  const eliminarPedido = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevosPedidos = pedidos.filter((p) => p.id !== id);
        setPedidos(nuevosPedidos);
        guardarEnStorage(nuevosPedidos);

        Swal.fire({
          icon: 'info',
          title: 'Pedido eliminado',
          text: 'Se eliminó correctamente',
          showConfirmButton: false,
          timer: 1500,
          toast: true,
          position: 'top-end',
        });
      }
    });
  };

  // 🔹 Editar pedido
  const editarPedido = (pedido) => {
    setPedidoEditando(pedido);
  };

  // 🔹 Actualizar pedido editado
  const actualizarPedido = (pedidoActualizado) => {
    const pedidosActualizados = pedidos.map(p =>
      p.id === pedidoActualizado.id ? pedidoActualizado : p
    );
    setPedidos(pedidosActualizados);
    guardarEnStorage(pedidosActualizados);
    setPedidoEditando(null);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="container border border-secondary rounded-3 p-5"
        style={{
          maxWidth: '1000px',
          backgroundColor: 'hsl(0, 0%, 100%, 0.500)',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.779)'
        }}>
        <h1 className="text-center mb-4">Restaurante</h1>

        <PedidoForm
          agregarPedido={agregarPedido}
          pedidoEditando={pedidoEditando}
          actualizarPedido={actualizarPedido}
        />

        <PedidoTable
          pedidos={pedidos}
          eliminarPedido={eliminarPedido}
          editarPedido={editarPedido}
        />
      </div>
    </div>
  );
}

export default App;
