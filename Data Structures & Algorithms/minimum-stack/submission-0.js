class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        // If minStack is empty, this value is the minimum
        if (this.minStack.length === 0) {
            this.minStack.push(val);
            return;
        }
        
        // Find the smaller value
        const newMin = Math.min(this.getMin(), val);

        this.minStack.push(newMin);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
