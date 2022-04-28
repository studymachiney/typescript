type StringFirst<S extends string> = S extends `${infer First}${infer Rest}`?First:''

type StringLast<S extends string> = S extends `${infer First}${infer Rest}`?Rest extends ''?First:StringLast<Rest>:''


type resStringFirst = StringFirst<'jakshdfk'>
type resStringLast = StringLast<'abcdefg[[[[[[[[[[['>