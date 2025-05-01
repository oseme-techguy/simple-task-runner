/**
 * Created by osemeodigie on 30/05/2017.
 */
import { TaskRunner } from "./TaskRunner"

// Example Task
interface DoneCallback {
    (taskRunner: TaskRunner, time?: number): void;
}

export default function Task($this: TaskRunner, done_callback: DoneCallback): void {
    var time: number = Math.random() * 8000;
    setTimeout(function() {
        console.log('task complete', time);
        done_callback($this, time);
    }, time);
    console.log('task started', time);
}
