class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateNumberInput(a, b, c){
  if (typeof a !== 'number') {
    throw new ValidationError('Argumen pertama harus number');
  } else if (typeof b !== 'number') {
    throw new ValidationError('Argumen kedua harus number');
  } else if (typeof c !== 'number') {
    throw new ValidationError('Argumen ketiga harus number');
  }
}