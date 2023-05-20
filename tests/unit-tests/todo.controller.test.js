const TodoController = require('../../cotrollers/todo.controller.js');
const TodoModel = require('../../models/TodoScheme.model.js');
const httpMocks = require('node-mocks-http');
const newTodo = require('../mock-data/new-todo.json');


TodoModel.create = jest.fn(); //mock function that needs in order to spy on the functoin TodoModel.create()
let req, res;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
})

describe('TodoController.createTodo', () => {
  beforeEach(() => {
    req.body = newTodo;
  });

  it('should create a new todo', () => {
    expect(typeof TodoController.createTodo).toBe('function');
  });
  
  it('should call TodoModel.create', () => {
    TodoController.createTodo(req, res);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });

  it('should return status code 201', () => {
    TodoController.createTodo(req, res);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it('should return json body', () => {
    TodoModel.create.mockReturnValue(newTodo);
    TodoController.createTodo(req, res);
    expect(res._getJSONData()).toStrictEqual(newTodo);
  })

})