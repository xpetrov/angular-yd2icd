import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResourceService {
  getData() {
    return [
      {
        id: 1000,
        name: 'Doe John (ERNI)',
        currentProject: 'Avalon',
        benchStartDate: '1. April 2023',
        assignement: 'confirmed',
        customer: 'ACME',
        expectedStart: '15. June 2023'
      },
      {
        id: 1001,
        name: 'Baggins Frodo (ERNI)',
        currentProject: 'Avalon',
        benchStartDate: '1. April 2023',
        assignement: 'planned',
        customer: 'Umbrella',
        expectedStart: '15. June 2023'
      },
      {
        id: 1002,
        name: 'Took Peregrin (ERNI)',
        currentProject: 'P Group',
        benchStartDate: '1. June 2023',
        assignement: 'confirmed',
        customer: 'ACME',
        expectedStart: '15. June 2023'
      },
      {
        id: 1003,
        name: 'Brandubuck Meriadoc (ERNI)',
        currentProject: 'P Group',
        benchStartDate: '1. June 2023',
        assignement: 'planned',
        customer: 'Tai Yong Medical',
        expectedStart: '15. June 2023'
      },
      {
        id: 1004,
        name: 'Gamgee Samwise (ERNI)',
        currentProject: 'Weyland-Yutani',
        benchStartDate: '1. June 2023',
        assignement: 'none',
        customer: null,
        expectedStart: null
      }
    ];
  }

  constructor(private http: HttpClient) {}
    
  getCustomersMini() {
      return Promise.resolve(this.getData().slice(0, 5));
  }

  getCustomersSmall() {
      return Promise.resolve(this.getData().slice(0, 10));
  }

  getCustomersMedium() {
      return Promise.resolve(this.getData().slice(0, 50));
  }

  getCustomersLarge() {
      return Promise.resolve(this.getData().slice(0, 200));
  }

  getCustomersXLarge() {
      return Promise.resolve(this.getData());
  }

  getCustomers(params?: any) {
      return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
  }
}