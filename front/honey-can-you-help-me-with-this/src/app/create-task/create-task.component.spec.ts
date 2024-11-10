import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTaskComponent } from './create-task.component';
import { MockTaskService, Task, ApiResponse } from './mocks/mock-task.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CreateTaskComponent', () => {
  let component: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;
  let mockTaskService: MockTaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CreateTaskComponent],
      providers: [MockTaskService]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTaskComponent);
    component = fixture.componentInstance;
    mockTaskService = TestBed.inject(MockTaskService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a task and add it to the task list', () => {
    const task: Task = {
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
      steps: []
    };

    spyOn(mockTaskService, 'createTask').and.returnValue(of({ success: true, task }));

    component.createTaskForm.controls['title'].setValue('Test Task');
    component.createTaskForm.controls['description'].setValue('Test Description');
    component.onCreateTask();

    expect(mockTaskService.createTask).toHaveBeenCalledWith({
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
      steps: []
    });
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0]).toEqual(task);
    expect(component.selectedTask).toEqual(task);
  });
});