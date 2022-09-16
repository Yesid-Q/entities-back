const FILTER_REQUEST = {
  description: "Datos de entrada",
  type: "object",
  properties: {
    startId: {
      type: "integer",
      format: "int32",
      minimum: 1,
      maximum: 20,
    },
    endId: {
      type: "integer",
      format: "int32",
      minimum: 1,
      maximum: 20,
    },
  },
};

const ERROR_RESPONSE = {
    type: 'object',
    properties: {
        Error: {
            type: 'string'
        }
    }
}

const ENTITY = {
  type: "object",
  properties: {
    entityId: {
      type: "integer",
    },
    name: {
      type: "string",
    },
    identificationNumber: {
      type: "string",
    },
    expirationDate: {
      type: "string",
    },
    contactName: {
      type: "string",
    },
    contactEmail: {
      type: "string",
    },
    logo: {
      type: "string",
    },
  },
};

const FILTER_ENTITY = {
  summary: "Filtrar listado entitidades ordenada alfabeticamente.",
  tags: ["Entity", "Filter"],
  body: {
    ...FILTER_REQUEST,
  },
  response: {
    200: {
      description: "OK",
      type: "array",
      items: ENTITY,
    },
    400: {
        description: 'Error en validacion datos de entrada.',
        ...ERROR_RESPONSE
    },
    404: {
        description: 'Error no se encuentra para rango especificado.',
        ...ERROR_RESPONSE
    }
  },
};

export { FILTER_ENTITY };
