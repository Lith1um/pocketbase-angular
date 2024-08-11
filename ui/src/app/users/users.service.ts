import { Inject, Injectable } from '@angular/core';
import { POCKET_BASE_TOKEN } from '../pocket-base/pocket-base.token';
import { TypedPocketBase, UsersResponse } from '../../../pocketbase-types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(@Inject(POCKET_BASE_TOKEN) private readonly pb: TypedPocketBase) {}

  async getUsers(): Promise<UsersResponse[]> {
    return await this.pb.collection('users').getFullList({
      sort: '-created',
    });
  }
}