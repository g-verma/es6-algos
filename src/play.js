function quickSort(array){
    let pivot = 0
    let left = []
    let right = []
  
    if (array.length <=1){
      return array
    } else {
      pivot = array.pop(0)
      for(x in array){
        if (array[x] < pivot){
          left.push(array[x])
        } else if (array[x] >= pivot){
          right.push(array[x])
        }
      
      }
    left = quickSort(left)
    right = quickSort(right)  
    }
    
    sorted = left.concat([pivot]).concat(right)  
    return sorted;
  }
  
  myArr = [1,3,2,34,2,6,4,90,9,7,5]
  console.log("quicksort array: ", quickSort(myArr));