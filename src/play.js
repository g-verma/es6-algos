


const __smallWi = (arr, n, x) =>{
    var currSum = 0,
     minlen = n+1,
     start =  0, 
     end = 0;

     while(){
        while(){
            if(){}
        }

        while(){
            if(){}
        }
     }
    

}


// Returns length of smallest subarray with sum greater than x. 
int smallestSubWithSum(int arr[], int n, int x) 
{ 
    // Initialize current sum and minimum length 
    int curr_sum = 0, min_len = n+1; 
  
    // Initialize starting and ending indexes 
    int start = 0, end = 0; 
    while (end < n) 
    { 
        // Keep adding array elements while current sum 
        // is smaller than x 
        while (curr_sum <= x && end < n) 
        { 
            // Ignore subarrays with negative sum if 
            // x is positive. 
            if (curr_sum <= 0 && x > 0) 
            { 
                start = end; 
                curr_sum = 0; 
            } 
  
            curr_sum += arr[end++]; 
        } 
  
        // If current sum becomes greater than x. 
        while (curr_sum > x && start < n) 
        { 
            // Update minimum length if needed 
            if (end - start < min_len) 
                min_len = end - start; 
  
            // remove starting elements 
            curr_sum -= arr[start++]; 
        } 
    } 
    return min_len; 
} 
  

    int arr1[] = {- 8, 1, 4, 2, -6}; 
    int x = 6; 
    int n1 = sizeof(arr1)/sizeof(arr1[0]); 
    int res1 = smallestSubWithSum(arr1, n1, x); 
    (res1 == n1+1)? cout << "Not possible\n" : 
                    cout << res1 << endl; 








const problem = {
    start: {A: 5, B: 2},
    A: {C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {}
  };
  

const lowestCostNode = (costs, processed) => {

    return Object.keys(costs).reduce((lowest, node) => {
      
      if (lowest === null || costs[node] < costs[lowest]) {
       
        if (!processed.includes(node)) {
          lowest = node;
        }
     
      }

      return lowest;
    }, null);

};




  const dijkstra = (graph) => {
  
    // track lowest cost to reach each node
    const costs = Object.assign({finish: Infinity}, graph.start);
  
    // track paths
    const parents = {finish: null};
    for (let child in graph.start) {
      parents[child] = 'start';
    }
  
    // track nodes that have already been processed
    const processed = [];
  
    let node = lowestCostNode(costs, processed);
  
    while (node) {
      let cost = costs[node];
      let children = graph[node];
      for (let n in children) {
        let newCost = cost + children[n];
        if (!costs[n]) {
          costs[n] = newCost;
          parents[n] = node;
        }
        if (costs[n] > newCost) {
          costs[n] = newCost;
          parents[n] = node;
        }
      }
      processed.push(node);
      node = lowestCostNode(costs, processed);
    }
  
    let optimalPath = ['finish'];
    let parent = parents.finish;
    while (parent) {
      optimalPath.push(parent);
      parent = parents[parent];
    }
    optimalPath.reverse();
  
    const results = {
      distance: costs.finish,
      path: optimalPath
    };
  
    return results;
  };
  
  console.log(dijkstra(problem));







