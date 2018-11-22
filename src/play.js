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
  
  // function that returns the minimum cost and path to reach Finish
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






















// function Node (val){
//     this.value = val;
//     this.neighbors = [];
//     this.weights = []
// }

// n2 = new Node(2)
// n0 = new Node(0)
// n1 = new Node(1)
// n3 = new Node(3)
// n4 = new Node(4)

// n0.neighbors.push(n1,n2)
// n0.weights.push(2,3)
// n1.neighbors.push(n0,n2,n3)
// n1.weights.push(2,15,2)
// n2.neighbors.push(n0,n1,n4)
// n2.weights.push(3,15,13)
// n3.neighbors.push(n1,n4)
// n3.weights.push(2,9)
// n4.neighbors.push(n2,n3)
// n4.weights.push(13,9)

// //console.log(n2)
//                     //  0   1   2  3   4
// var adjacencyMatrix = [[0,  2,  3, 0,  0],  //0
//                        [2,  0, 15, 2,  0],  //1
//                        [3, 15,  0, 0, 13],  //2 
//                        [0,  2,  0, 0,  9],  //3
//                        [0,  0, 13, 9,  0]]  //4


// function main(start, end) {
//     var visited = []
//     var path = []
//     var allpaths = []  
  
//     function shortestPath(start, end, path, visited) {
//         visited.push(start.value)
//         for (var ct = 0; ct < start.neighbors.length; ct++) {
//             path.push(start.weights[ct])
//             if (start.neighbors[ct].value == end.value) {
//                 allpaths.push(path)
//                 return
                
//             }
//             if (visited.includes(start.neighbors[ct].value) > 0) {
//                 continue;
//             } 
//             var pathcopy = path.slice();
//             var visitedcopy = visited.slice()
//             shortestPath(start.neighbors[ct], end, pathcopy, visitedcopy)
//         }
//     }
//     shortestPath(start, end, path, visited)
//     var lengths = allpaths.map(i => i.reduce((sum, value) => sum+value))
//     lengths.sort((a,b) => a-b);
//     console.log(lengths)
//     return lengths[0];
// }

// console.log(main(n2, n3))





