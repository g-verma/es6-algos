
// smallest subarray with sum greater than given sum , time complexity O(n), can also calulate negative numbers
const __smallWi = (arr, n, x) =>{
    var currSum = 0,
     minlen = n+1,
     start = 0, 
     end = 0;

     while(end < n){
        while (currSum <= x && end < n) {
            if (currSum <= 0 && x > 0) 
            { 
                start = end; 
                currSum = 0; 
            } 
  
            currSum += arr[end++]; 
        }

        while(currSum > x && start < n) {
            if (end - start < minlen) 
                minlen = end - start; 
            currSum -= arr[start++]; 
        }
     }
    
     return minlen; 

}

var arri = [- 8, 1, 4, 2, -6];
var x =6;
console.log('smallest subarray having sum greater than sum: ', __smallWi(arri,arri.length, x));





















// const problem = {
//     start: {A: 5, B: 2},
//     A: {C: 4, D: 2},
//     B: {A: 8, D: 7},
//     C: {D: 6, finish: 3},
//     D: {finish: 1},
//     finish: {}
//   };
  

// const lowestCostNode = (costs, processed) => {

//     return Object.keys(costs).reduce((lowest, node) => {
      
//       if (lowest === null || costs[node] < costs[lowest]) {
       
//         if (!processed.includes(node)) {
//           lowest = node;
//         }
     
//       }

//       return lowest;
//     }, null);

// };




//   const dijkstra = (graph) => {
  
//     // track lowest cost to reach each node
//     const costs = Object.assign({finish: Infinity}, graph.start);
  
//     // track paths
//     const parents = {finish: null};
//     for (let child in graph.start) {
//       parents[child] = 'start';
//     }
  
//     // track nodes that have already been processed
//     const processed = [];
  
//     let node = lowestCostNode(costs, processed);
  
//     while (node) {
//       let cost = costs[node];
//       let children = graph[node];
//       for (let n in children) {
//         let newCost = cost + children[n];
//         if (!costs[n]) {
//           costs[n] = newCost;
//           parents[n] = node;
//         }
//         if (costs[n] > newCost) {
//           costs[n] = newCost;
//           parents[n] = node;
//         }
//       }
//       processed.push(node);
//       node = lowestCostNode(costs, processed);
//     }
  
//     let optimalPath = ['finish'];
//     let parent = parents.finish;
//     while (parent) {
//       optimalPath.push(parent);
//       parent = parents[parent];
//     }
//     optimalPath.reverse();
  
//     const results = {
//       distance: costs.finish,
//       path: optimalPath
//     };
  
//     return results;
//   };
  
//   console.log(dijkstra(problem));







