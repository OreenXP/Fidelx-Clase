import prisma from '../../../config/db.js';

const logout = async (token) => {
  const tokenExistente = await prisma.token.findFirst({
    where: {
      token: token,
      tipo: 'sesion'
    }
  });

  if (!tokenExistente) {
    throw new Error('Sesión no encontrada');
  }

  await prisma.token.delete({
    where: { id: tokenExistente.id }
  });

  return { mensaje: 'Sesión cerrada exitosamente' };
};

export { logout };
