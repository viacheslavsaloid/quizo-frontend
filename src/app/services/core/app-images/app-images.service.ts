import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileInput } from 'ngx-material-file-input';
import { isObject, isArray } from 'lodash';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/models/utils';
import { toFormData } from 'src/app/utils/forms';

export interface Media {
  path: string;
}

const url = environment.apiUrl + environment.imagesEndpoint;

export const isFile = (data) => data instanceof FileInput;

@Injectable()
export class AppImagesService {
  constructor(private http: HttpClient) {}

  public getImagesRootUrl = () => environment.apiUrl + environment.imagesEndpoint;

  public async parseObject(data) {
    const parsedObject = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const field = data[key];

        parsedObject[key] = await (isFile(field)
          ? this.getFilePath(field)
          : isArray(field)
          ? this.parseArray(field)
          : isObject(field)
          ? this.parseObject(field)
          : field);
      }
    }

    return parsedObject;
  }

  public getFilePath = async (files) =>
    (await this.http.post<ApiResponse<Media>>(url, toFormData({ files })).toPromise()).data;

  public async parseArray(data) {
    const parsedArray = [];

    for (const field of data) {
      const fieldData = await (isFile(field)
        ? this.getFilePath(field)
        : isArray(field)
        ? this.parseArray(field)
        : isObject(field)
        ? this.parseObject(field)
        : field);

      parsedArray.push(fieldData);
    }

    return parsedArray;
  }

  public async parseData(data) {
    return (await Array.isArray(data)) ? this.parseArray(data) : this.parseObject(data);
  }

  public get(path) {
    return this.http.get<string>(environment.apiUrl + environment.imagesEndpoint + path).toPromise();
  }

  public getPath(path) {
    return environment.apiUrl + environment.imagesEndpoint + path;
  }
}
