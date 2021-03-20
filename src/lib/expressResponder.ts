import _ from "lodash";

class Responder {
  public success = (res: any, msg: any) => {
    const message: any = _.isString(msg) ? { message: msg } : msg;
    return this.sendResponse(res, 200, message);
  };

  public created = (res: any, object: any) =>
    this.sendResponse(res, 201, object);

  public accepted = (res: any, msg: any) => {
    const message: any = _.isString(msg) ? { message: msg } : msg;
    return this.sendResponse(res, 202, message);
  };

  public deleted = (res: any) => this.sendResponse(res, 204);

  public notFound = (req: any, res: any) =>
    this.sendResponse(res, 404, { reason: "Not Found" });

  public operationFailed = (res: any, reason: any) => {
    const { status } = reason;
    const message = reason.message || reason;
    return this.sendResponse(res, status || 400, { message });
  };

  private sendResponse = (res: any, status: number, body = {}) => {
    if (!res.headersSent) {
      if (!_.isEmpty(body)) {
        return res.status(status).json(body);
      }

      return res.status(status).send();
    }
  };
}

export default new Responder();
