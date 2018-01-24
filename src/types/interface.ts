import { AxiosRequestConfig } from 'axios'
export interface AxiosRequestConfig extends AxiosRequestConfig {
  startTime?: Date
}

export interface HttpResquest {
  get?(url: string, data: any, baseUrl?: string): Promise<any>,
  post?(url: string, data: any, baseUrl?: string): Promise<any>,
  delete?(url: string, data: any, baseUrl?: string): Promise<any>,
  put?(url: string, data: any, baseUrl?: string): Promise<any>
}

export interface PlainObject {
  [propName: string]: any
}

export interface BooleanObject {
  [propName: string]: boolean
}

export interface RequireImport {
  default: any
}
