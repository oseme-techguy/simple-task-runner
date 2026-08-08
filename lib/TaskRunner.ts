/**
 * Created by osemeodigie on 30/05/2017.
 */

export class TaskRunner {
    max_task_limit: number;
    _currently_running_task: number;
    _tasks: Array<(runner: TaskRunner, done: (runner: TaskRunner, time?: number) => void) => void | any>;
    _is_task_running: boolean;
    currentTask?: (runner: TaskRunner, done: (runner: TaskRunner, time?: number) => void) => void | any;

    constructor(throttle_limit?: number) {
        this.max_task_limit = (throttle_limit === undefined) ? 2 : throttle_limit;
        this._currently_running_task = 0;
        this._tasks = [];
        this._is_task_running = false;

        // Binded the doneTask method to the current instance so this method doesn't lose context when used as a callback
        // this.doneTask = this.doneTask.bind(this);
    }

    private runNextTask(): boolean {
        // Check if there are any other pending tasks
        if (this._tasks.length === 0) {
            console.log("No task found currently on stack");
            return false;
        }

        if (this._currently_running_task >= this.max_task_limit) {
            return false;
        }

        this.currentTask = this._tasks.shift();
        if (this.currentTask) {
            this._currently_running_task += 1; // Taken a task to run
            console.log("\n Scheduling task");
            this._is_task_running = true;
            this.currentTask(this, this.doneTask); // Execute the task
        }
        return true;
    }

    private doneTask($this: TaskRunner, time?: number): void {

        // decrement my current task counter...
        $this._currently_running_task -= 1;
        $this._is_task_running = false;

        if ($this._tasks.length > 0) {
            $this._is_task_running = true;
            $this.runNextTask();
        }

        if ($this._is_task_running && $this._tasks.length === 0) {
            console.log("Finished scheduling all tasks to run...");
        }

        if (!$this._is_task_running && $this._tasks.length === 0) {
            console.log("Finished running all tasks!");
        }
    }

    public addTask(task: (runner: TaskRunner, done: (runner: TaskRunner, time?: number) => void) => void): void {
        this._tasks.push(task);
        if (this._tasks.length > 0) {
            this.runNextTask();
        }
    }
}
