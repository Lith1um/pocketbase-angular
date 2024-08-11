import { Inject, Injectable } from '@angular/core';
import PocketBase, { RecordModel } from 'pocketbase';
import { POCKET_BASE_TOKEN } from './app.config';
import { TestResponse, TypedPocketBase } from '../../pocketbase-types';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(@Inject(POCKET_BASE_TOKEN) private readonly pb: TypedPocketBase) {}

  async getUsers(): Promise<TestResponse[]> {
    return await this.pb.collection('test').getFullList({
      sort: '-created',
    });
  }


}