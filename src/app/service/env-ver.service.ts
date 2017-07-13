import { Injectable } from '@angular/core';
import { IEnvVerService } from './env-ver-service.interface';
import { EnvVer } from './env-ver.model';
import { Http, Response } from '@angular/http';

@Injectable()
export class EnvVerService implements IEnvVerService {
  constructor(private http: Http) {}

  findById(id: string): EnvVer {
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        console.log(res.json());
      });
    return null;
  }

  findAll(): EnvVer[] {
    this.http.request('http://jsonplaceholder.typicode.com/posts')
      .subscribe((res: Response) => {
        console.log(res.json());
      });
    return null;
  }

  save(envVer: EnvVer): EnvVer {
     this.http.post('http://jsonplaceholder.typicode.com/posts',
	JSON.stringify({
	  body: 'test1 body',
	  title: 'test1 title',
	  userId: 1
	})).subscribe((res: Response) => {
	  console.log(res.json());
	});

     return null;
  }
}