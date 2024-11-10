import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  description: string;
  steps: Step[];
}

export interface Step {
  description: string;
}

export interface ApiResponse {
  success: boolean;
  task?: Task;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockTaskService {
  private tasks: Task[] = [];

  createTask(task: Task) {
    this.tasks.push(task);
    return of<ApiResponse>({ success: true, task });
  }

  getTasks() {
    return of<Task[]>(this.tasks);
  }

  addStepToTask(taskId: number, step: Step) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.steps.push(step);
      return of<ApiResponse>({ success: true, task });
    }
    return of<ApiResponse>({ success: false, message: 'Task not found' });
  }
}