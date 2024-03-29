const ErrorFactory = (name) => {
  return class BusinesError extends Error {
    constructor (message) {
      super(message)
      this.name = name
    }
  }
}

export const NoData = ErrorFactory('There is no data')
export const NotFoundUser = ErrorFactory('User not found')
export const InvalidCredential = ErrorFactory('invalid Credential')
export const CorsNotAllowed = ErrorFactory('Not allowed by CORS')
