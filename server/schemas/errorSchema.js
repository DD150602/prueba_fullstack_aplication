class BusinesError extends Error {
  constructor (message, statusCode = 500) {
    super(message)
    this.status = statusCode
  }

  validationError () {
    return {
      status: this.status,
      message: this.message
    }
  }
}

export const NoData = new BusinesError('No existen productos', 404)
export const NotFoundUser = new BusinesError()
export const InvalidCredential = new BusinesError()
export const CorsNotAllowed = new BusinesError()
export const UnknownError = new BusinesError()
export const CantCreate = new BusinesError()
