import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockTaskService, Task, ApiResponse } from './mocks/mock-task.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  createTaskForm: FormGroup;
  addStepForm: FormGroup;
  tasks: Task[] = [];
  selectedTask: Task | null = null;

  constructor(private fb: FormBuilder, private taskService: MockTaskService) {
    this.createTaskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.addStepForm = this.fb.group({
      stepDescription: ['', Validators.required]
    });

    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  onCreateTask() {
    if (this.createTaskForm.valid) {
      const task: Task = {
        id: this.tasks.length + 1,
        ...this.createTaskForm.value,
        steps: []
      };
      this.taskService.createTask(task).subscribe((response: ApiResponse) => {
        if (response.success && response.task) {
          this.tasks.push(response.task);
          this.selectedTask = response.task;
        }
      });
    }
  }

    onAddStep() {
    if (this.addStepForm.valid && this.selectedTask) {
      const step = {
        description: this.addStepForm.value.stepDescription
      };
      this.taskService.addStepToTask(this.selectedTask.id, step).subscribe((response: ApiResponse) => {
        if (response.success && response.task) {
          if (this.selectedTask) { // Add null check here
            this.selectedTask.steps.push(step);
          }
        }
      });
    }
  }
}