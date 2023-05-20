const superTest = require('supertest');
const index = require('../../index');
const newTodo = require('../mock-data/new-todo.json');

const endpointUrl = '/todos/';

describe(endpointUrl, () => {
  it('Post'+ endpointUrl, async () => {
    const response = await superTest(index)
      .post(endpointUrl)
      .send(newTodo);

      expect(response.statusCode).toBe(201); 
      expect(response.body.title).toBe(newTodo.title);
      expect(response.body.done).toBe(newTodo.done);
  })
})