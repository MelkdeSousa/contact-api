import { Request, Response } from 'express'

export type ControllerFunction = (request: Request, response: Response) => Promise<Response<any, Record<string, any>>>
