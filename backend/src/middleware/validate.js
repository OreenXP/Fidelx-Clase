export const validate = (schema, source = "body") => (req, res, next) => {
  const data = source === "params" ? req.params : req.body;
  const result = schema.safeParse(data);

  if (!result.success) {
    const details = result.error?.issues?.map((e) => e.message) || [];

    return res.status(400).json({
      error: "Validación fallida",
      details,
    });
  }

  if (source === "params") {
    req.validatedParams = result.data;
  } else {
    req.validatedBody = result.data;
  }
  next();
};
