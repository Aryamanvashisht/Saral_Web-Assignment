import fs from 'fs'

class PriorityQueue {
  constructor(fileName = "queueData.json") {
    this.fileName = fileName;
    this.queue = [];
    this.loadQueue();
  }

  // Reading the queue from the file
  loadQueue() {
    try {
      if (fs.existsSync(this.fileName)) {
        const data = fs.readFileSync(this.fileName, "utf8");

        if (data) {
          this.queue = JSON.parse(data);
        }
      }
    } catch (error) {
      console.log("Cannot read queue file.");
      this.queue = [];
    }
  }

  // Saving the current queue into the file
  saveQueue() {
    fs.writeFileSync(this.fileName, JSON.stringify(this.queue, null, 2));
  }

  // Adding a new item to queue
  insert(value, priority) {
    const item = {
      id: Date.now(),
      value: value,
      priority: priority,
    };

    this.queue.push(item);

    this.saveQueue();

    return item;
  }

  // Returning the item with the smallest priority
  peek() {
    if (this.queue.length === 0) {
      return null;
    }

    let smallest = this.queue[0];

    for (let i = 1; i < this.queue.length; i++) {
      if (this.queue[i].priority < smallest.priority) {
        smallest = this.queue[i];
      }
    }

    return smallest;
  }

  // Removing and returning the item with smallest priority

  extract_min() {
    if (this.queue.length === 0) {
      return null;
    }

    let smallestIndex = 0;

    for (let i = 1; i < this.queue.length; i++) {
      if (this.queue[i].priority < this.queue[smallestIndex].priority) {
        smallestIndex = i;
      }
    }

    const item = this.queue.splice(smallestIndex, 1)[0];

    this.saveQueue();

    return item;
  }

  // Removing and returning the item with largest priority
  extract_max() {
    if (this.queue.length === 0) {
      return null;
    }

    let largestIndex = 0;

    for (let i = 1; i < this.queue.length; i++) {
      if (this.queue[i].priority > this.queue[largestIndex].priority) {
        largestIndex = i;
      }
    }

    const item = this.queue.splice(largestIndex, 1)[0];

    this.saveQueue();

    return item;
  }

  // Update an item
  update(id, value, priority) {
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].id === id) {
        this.queue[i].value = value;
        this.queue[i].priority = priority;

        this.saveQueue();

        return this.queue[i];
      }
    }

    return null;
  }

  // Deleting an item from queue

  delete(id) {

    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].id === id) {
        const deletedItem = this.queue.splice(i, 1)[0];

        this.saveQueue();

        return deletedItem;
      }
    }

    return null;
  }

  // Checking if queue is showing as empty
  is_empty() {
    return this.queue.length === 0;
  }
}

export default PriorityQueue;
