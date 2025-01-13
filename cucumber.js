
  
  module.exports = {
    default: {
      require: ['features/steps/*.steps.js'], // Define onde estão os arquivos de steps
      format: ['@cucumber/pretty-formatter'],  // Usando o formatter correto
      "timeout": 200000
    }
  };
  