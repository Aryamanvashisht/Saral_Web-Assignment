# Persistent Priority Queue

This is a simple priority queue made using JavaScript and Node.js.

The queue stores its data in a `queueData.json` file, so the data is not lost when the program is stopped.

## How to Run

1. Make sure Node.js is installed.

2. Open the project folder in the terminal.

3. Run:

```bash
node test.js
```

The program will create a `queueData.json` file automatically if not present

## Files

* `module.js` - Contains the priority queue implementation.
* `test.js` - Contains some examples to test the queue.
* `queueData.json` - Stores the queue data.

## Operations

The priority queue supports:

* `insert`
* `extract_min`
* `extract_max`
* `peek`
* `update`
* `delete`
* `is_empty`

A smaller priority number means higher priority.
