class MedianFinder {
    constructor() {
        this.minQ = new MaxPriorityQueue();
        this.maxQ = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        //place
        if (this.minQ.isEmpty() || num <= this.minQ.front()) {
            this.minQ.enqueue(num);
        } else {
            this.maxQ.enqueue(num);
        }

        //rebalance
        if (this.maxQ.size() + 1 < this.minQ.size()) {
            this.maxQ.enqueue(this.minQ.dequeue());
        }

        if (this.minQ.size() < this.maxQ.size()) {
            this.minQ.enqueue(this.maxQ.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.minQ.size() > this.maxQ.size()) {
            return this.minQ.front();
        }
        return (this.minQ.front() + this.maxQ.front()) / 2;
    }
}
