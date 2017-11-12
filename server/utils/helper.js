const errorHandler = (error, res) => {
  switch (error.code) {
    case 404:
      return res.status(404).json({ message: error.message });
    case 500:
      return res.status(400).json({ message: error.message });
    default:
      return res.status(500).json(error);
  }
};

const successHandler = (code, body, res) => {
  switch (code) {
    case 201:
      return res.status(201).json({ body });
    default:
      return res.status(200).json({ body });
  }
};

export { errorHandler, successHandler };