import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly tasks = signal([
    {
      id: 1,
      title: 'Studiare Angular',
      description: 'Imparare le basi dei componenti',
      completed: false,
    },
    {
      id: 2,
      title: 'Creare il mio primo progetto',
      description: "Configurare l'ambiente di sviluppo",
      completed: false,
    },
  ]);

  protected newTaskTitle = '';

  protected addTask(): void {
    const title = this.newTaskTitle.trim();

    if (title === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      description: 'Nuova attività',
       completed: false,
    };

    this.tasks.update(tasks => [...tasks, newTask]);

    this.newTaskTitle = '';
  }

  protected toggleTask(id: number): void {
  this.tasks.update(tasks =>
    tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
  }

  protected deleteTask(id: number): void {
  this.tasks.update(tasks =>
    tasks.filter(task => task.id !== id)
  );
  }
}