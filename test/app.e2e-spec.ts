import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/orders/one (GET)', () => {
    return request(app.getHttpServer())
      .get('/orders/one')
      .expect(500)
      .expect('Internal Server Error"');
  });

  it('/producst/one (GET)', () => {
    return request(app.getHttpServer())
      .get('/producst/one')
      .expect(500)
      .expect('Internal Server Error"');
  });
});
