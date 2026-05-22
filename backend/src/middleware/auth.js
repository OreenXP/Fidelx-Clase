import prisma from '../config/db.js';

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];

    const tokenExistente = await prisma.token.findFirst({
      where: {
        token: token,
        tipo: 'sesion'
      },
      include: {
        cliente: true,
        tienda: true
      }
    });

    if (!tokenExistente) {
      return res.status(401).json({ error: 'Token inválido o expirado' });
    }

    req.usuario = tokenExistente.cliente || tokenExistente.tienda;
    req.tipoUsuario = tokenExistente.cliente ? 'cliente' : 'tienda';
    req.tokenId = tokenExistente.id;

    next();
  } catch (error) {
    console.error('Error en auth middleware:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export { authMiddleware };
