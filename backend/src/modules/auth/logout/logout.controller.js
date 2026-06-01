import { logout } from './logout.service.js';

const logoutController = async (req, res) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];

    await logout(token);

    return res.status(200).json({ mensaje: 'Sesión cerrada exitosamente' });

  } catch (error) {
    if (error.message === 'Sesión no encontrada') {
      return res.status(404).json({ error: error.message });
    }
    console.error('Error en logout:', { error: error.message, stack: error.stack });
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export { logoutController };
