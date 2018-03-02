import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';

@Injectable()
export class ListService extends BaseApiService {
  modelUrl = 'todos';
}
