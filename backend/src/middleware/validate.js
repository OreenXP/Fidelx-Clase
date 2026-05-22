export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const details = result.error?.issues?.map((e) => e.message) || [];

    return res.status(400).json({
      error: "Validación fallida",
      details,
    });
  }

  req.validatedBody = result.data;
  next();
};
