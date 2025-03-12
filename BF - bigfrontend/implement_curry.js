const curry = (fn) => {
    return function curried(...args){
      if(args.length >= fn.length){
        return fn(...args)
      }else{
        return (...nextArgs) => curried(...args, ...nextArgs)
      }
    }
  }
  
  const join = (a,b,c) => {
    console.log(`${a}_${b}_${c}`)
  }
  
  let curriedJoin = curry(join)
  curriedJoin(1)(2)(3);
  curriedJoin(1, 2, 3) // '1_2_3'
  curriedJoin(1)(2, 3) // '1_2_3'
  curriedJoin(1, 2)(3) // '1_2_3'