class MedianFinder {
    constructor() {
        this.left = new MaxPriorityQueue();
        this.right = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        //place
        if (this.left.isEmpty() || num <= this.left.front()) {
            this.left.enqueue(num);
        } else {
            this.right.enqueue(num);
        }

        //rebalance
        if (this.left.size() > this.right.size() + 1) {
            this.right.enqueue(this.left.dequeue());
        }
        if (this.left.size() < this.right.size()) {
            this.left.enqueue(this.right.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.left.size() > this.right.size()) {
            return this.left.front();
        }
        return (this.left.front() + this.right.front()) / 2;
    }
}
