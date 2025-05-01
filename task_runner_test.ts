/**
 * Created by osemeodigie on 30/05/2017.
 */

import task from "./lib/Task"
import { TaskRunner } from "./lib/TaskRunner"

console.log("Started the task runner test file...")


var taskRunner = new TaskRunner();

//new task(taskRunner.eventEmitter)
taskRunner.addTask(task) // task 1
taskRunner.addTask(task) // task 2
taskRunner.addTask(task) // task 3
taskRunner.addTask(task) // task 4
taskRunner.addTask(task) // task 5
taskRunner.addTask(task) // task 6
taskRunner.addTask(task) // task 7
taskRunner.addTask(task) // task 8
taskRunner.addTask(task) // task 9
taskRunner.addTask(task) // task 10
// taskRunner.addTask(task) // task 11
// taskRunner.addTask(task) // task 12
// taskRunner.addTask(task) // task 13
// taskRunner.addTask(task) // task 14
// taskRunner.addTask(task) // task 15
// taskRunner.addTask(task) // task 16
// taskRunner.addTask(task) // task 17
// taskRunner.addTask(task) // task 18
// taskRunner.addTask(task) // task 19
// taskRunner.addTask(task) // task 20


// task started 123.23232
// task started 593.23232
// task started 3.23232 <-- delay before start
