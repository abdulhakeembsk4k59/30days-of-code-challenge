function findProductOfMergedArrays(arr1, arr2) {
    // Merge the two arrays
    const mergedArray = arr1.concat(arr2);
  
    // Initialize a variable to store the product
    let product = 1;
  
    // Iterate through the merged array and multiply each element
    for (let i = 0; i < mergedArray.length; i++) {
      product *= mergedArray[i];
    }
  
    return product;
  }
  
  // Example usage:
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const result = findProductOfMergedArrays(array1, array2);
  console.log("Product of merged arrays:", result);
  