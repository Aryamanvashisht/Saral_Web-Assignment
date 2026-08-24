import PriorityQueue from "./module.js";

const pq = new PriorityQueue("queueData.json");

console.log("queue empty?", pq.is_empty());

const first = pq.insert("Submit assignment", 2);

const second = pq.insert("Buy groceries", 4);

const third = pq.insert("Call friend", 5);

const fourth = pq.insert("Prepare for exam", 1);

console.log("\nAfter inserting items:");

console.log(pq.queue);

console.log("\nPeek:");

console.log(pq.peek());

console.log("\nExtract minimum:");

console.log(pq.extract_min());

console.log("\nExtract maximum:");

console.log(pq.extract_max());

console.log("\nUpdating an item:");

console.log(pq.update(first.id, "Complete JavaScript homework", 1));

console.log("\nDeleting an item:");

console.log(pq.delete(fourth.id));

console.log("\nFinal queue:");

console.log(pq.queue);

console.log("\nqueue empty?", pq.is_empty());