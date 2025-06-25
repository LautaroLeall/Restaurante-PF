import React, { useState, useEffect } from 'react';

const productosDisponibles = [
    { nombre: 'Pizza', precio: 2000 },
    { nombre: 'Hamburguesa', precio: 1500 },
    { nombre: 'Tostado Jamón y Queso', precio: 1200 },
    { nombre: 'Sándwich de Milanesa (Carne)', precio: 1800 },
    { nombre: 'Sándwich de Milanesa (Pollo)', precio: 1600 },
    { nombre: 'Sándwich de Vegetariano', precio: 2000 },
    { nombre: 'Papas Fritas', precio: 800 },
];

const PedidoForm = ({ agregarPedido, pedidoEditando, actualizarPedido }) => {
    const [mesa, setMesa] = useState('');
    const [producto, setProducto] = useState('');  // Aquí el cambio
    const [cantidad, setCantidad] = useState(1);
    const [modoEdicion, setModoEdicion] = useState(false);

    useEffect(() => {
        if (pedidoEditando) {
            setMesa(pedidoEditando.mesa || '');
            setProducto(pedidoEditando.producto || '');
            setCantidad(pedidoEditando.cantidad || 1);
            setModoEdicion(true);
        } else {
            // Si no hay pedido editando, aseguramos limpiar modo edición y campos
            setMesa('');
            setProducto('');
            setCantidad(1);
            setModoEdicion(false);
        }
    }, [pedidoEditando]);

    const manejarSubmit = (e) => {
        e.preventDefault();

        // Validar que el producto no esté vacío antes de continuar
        if (!producto) {
            alert('Por favor, selecciona un producto');
            return;
        }

        const precioUnitario = productosDisponibles.find(p => p.nombre === producto)?.precio || 0;
        const nuevoPedido = {
            id: modoEdicion ? pedidoEditando.id : Date.now(),
            mesa,
            producto,
            cantidad: Number(cantidad),
            precio: precioUnitario,
            total: precioUnitario * cantidad
        };

        if (modoEdicion) {
            actualizarPedido(nuevoPedido);
            setModoEdicion(false);
        } else {
            agregarPedido(nuevoPedido);
        }

        // Limpiar formulario
        setMesa('');
        setProducto('');
        setCantidad(1);
    };

    return (
        <form onSubmit={manejarSubmit} className="mb-4">
            <div className="row g-3">
                <div className="col-md-3">
                    <label className="form-label">Número de Mesa</label>
                    <input
                        type="number"
                        className="form-control"
                        value={mesa}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                                setMesa(value);
                            }
                        }}
                        min="1"
                        required
                    />
                </div>

                <div className="col-md-5">
                    <label className="form-label">Producto</label>
                    <select
                        className="form-select"
                        value={producto}
                        onChange={(e) => setProducto(e.target.value)}
                        required
                    >
                        <option value="" disabled hidden>
                            Selecciona tu producto
                        </option>
                        {productosDisponibles.map((item, i) => (
                            <option key={i} value={item.nombre}>
                                {item.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-2">
                    <label className="form-label">Cantidad</label>
                    <input
                        type="number"
                        className="form-control"
                        value={cantidad}
                        min={1}
                        onChange={(e) => setCantidad(e.target.value)}
                        required
                    />
                </div>

                <div className="col-md-2 d-flex align-items-end">
                    <button type="submit" className="btn btn-primary w-100">
                        {modoEdicion ? 'Aceptar' : 'Agregar'}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default PedidoForm;
