class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => []);
        const state = new Array(numCourses).fill(0);

        for (const [course, prerequisite] of prerequisites) {
            graph[prerequisite].push(course);
        }

        for (let course = 0; course < numCourses; course++) {
            if (this.dfs(graph, state, course) !== true) {
                return false;
            }
        }

        return true;

        //Formula: graph, state -> dfs -> cycle -> skip 2 -> explore -> mark 2 -> return
    }

    dfs(graph, state, course) {
        
        if (state[course] === 1) {
            return false;
        }

        if (state[course] === 2) {
            return true;
        }

        state[course] = 1;

        for (const next of graph[course]) {
            if (this.dfs(graph, state, next) !== true) {
                return false;
            }
        }

        state[course] = 2;

        return true;
    }
}
