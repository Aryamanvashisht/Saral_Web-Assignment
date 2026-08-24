# Persistent Priority Queue

This project is a simple priority queue implemented using JavaScript and Node.js.

The queue is saved in a JSON file, so the data is not lost when the program is stopped and started again.

## How to Run

1. Make sure Node.js is installed.
2. Open the project folder in the terminal.
3. Run:

```bash
node test.js
```

A `queueData.json` file will be created automatically to store the queue data.

## Operations

The priority queue supports:

* `insert` - Add an item
* `extract_min` - Remove the item with the smallest priority
* `extract_max` - Remove the item with the largest priority
* `peek` - View the item with the smallest priority
* `update` - Change an item's value or priority
* `delete` - Remove an item
* `is_empty` - Check if the queue is empty

In this project, a **smaller priority number means higher priority**.

## Real-World Uses

Priority queues can be used in:

* Hospital emergency systems to handle urgent patients first.
* Operating systems to run important processes first.
* Customer support systems to handle urgent requests first.
* Job scheduling to process important tasks before normal tasks.
* Network systems to process important packets first.

## Files

* `module.js` - Contains the priority queue implementation.
* `test.js` - Contains example code to test the queue.
* `queueData.json` - Stores the queue data.
* `package.json` - Enables JavaScript ES module (`import`) syntax.
