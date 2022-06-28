/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math
  
  ### Question
  
  Given a number (always positive) as a type. Your type should return the number decreased by one.
  
  For example:
  
  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```
  
  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */
type ArrayN<T extends 1[] = []> = {
  '0': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T],
  '1': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1],
  '2': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1],
  '3': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1],
  '4': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1],
  '5': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1],
  '6': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1],
  '7': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1],
  '8': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1, 1],
  '9': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1, 1, 1],
}
type createArr<
    TLength extends number | string,
    TData extends 1[] = [],
> = TLength extends ''|0
    ? TData
    : `${TLength}` extends `${infer L}${infer R}`
    ? createArr<R, ArrayN<TData>[keyof ArrayN & L]>
    : never
type MinusOne<
    T extends number,
    TArray extends 1[] = createArr<T>
> = TArray extends [infer First, ...infer Rest] ? Rest['length'] : never

// type MinusOne<T extends number, A extends any[] = []> = [
//     ...A,
//     any,
//     any
// ]['length'] extends T
//     ? [...A, any]['length']
//     : [...A, any]['length'] extends T
//     ? A['length']
//     : MinusOne<T, [...A, any, any]>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MinusOne<1>, 0>>,
    Expect<Equal<MinusOne<55>, 54>>,
    Expect<Equal<MinusOne<3>, 2>>,
    Expect<Equal<MinusOne<100>, 99>>,
    Expect<Equal<MinusOne<7101>, 7100>>
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
