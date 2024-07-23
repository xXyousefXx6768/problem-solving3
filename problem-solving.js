// sum all

const Sumall=(arr) => {
    let ele=0
    for (let index = 0; index < arr.length; index++) {
        ele += arr[index];
        
        
    }
  return ele
}
const arr= [7,6,8,3,5,8,13,50,120,600]

 

  ///////////////////////

  ////biggest int
  const Biggestint=(arr) => {
       let item=arr[0]
       for (let index = 1; index < arr.length; index++) {
        if (arr[index] > item) {
            item=arr[index]
         
        }
       
       }
       return item
  }
  const arg=[1,2,3,5,120,222]
  
  
  //////////////////////////////////

  const removeRepeated = (arr) => {
    let newarr = [];
    let seen = {};
  
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (!seen[element]) {
        seen[element] = true;
        newarr.push(element); 
      }
    }
  
    return newarr;
  };
  
  const Rarray = [4, 7, 7, 8, 2, 23];
 


  ///////////////////////////////
  const reverseword=(arg) => {
    let reversed=arg.split('')
    
    let rr=''
    for (let index = reversed.length-1; index >=0; index--) {
        const element = reversed[index];
        rr+=reversed[index]
    }
    return rr
    
  }

  console.log(reverseword('yousef'))
  