
//数组类型的模式匹配

//pop
type Pop<T extends unknown[]> = T extends [...infer Rest, infer R]
    ? [...Rest]
    : never
type resPop = Pop<[1,2,3]>

//shift
type Shift<T extends unknown[]> = T extends [infer R, ...infer Rest]?[...Rest]:never
type resShift = Shift<[1,2,3]>

//trim trim是去掉前后的空格、制表符、换行符，那么就通过模式匹配取出后面的字符，通过 infer 放入新的变量返回就行。
type TrimLeft<Str extends string> = Str extends `${' '|'\t'|'\n'}${infer Rest}`?TrimLeft<Rest>:Str
type resTrimLeft = TrimLeft<'    fg'>

type TrimRight<Str extends string> = Str extends `${infer Rest}${' '|'\t'|'\n'}`?TrimRight<Rest>:Str
type resTrimRight = TrimRight<'fg     '>

type Trim<Str extends string> = TrimLeft<TrimRight<Str>>
type resTrim = Trim<'     fg     '>

//replace
type Replace<Str extends string, From extends string, To extends string> = Str extends `${infer Left}${From}${infer Right}`?`${Left}${To}${Right}`:Str
type resReplace = Replace<'哈工智慧第一冲击波阿杰','阿杰','大宝'>

//replaceAll
type ReplaceAll<Str extends string, From extends string, To extends string>= Str extends `${infer Left}${From}${infer Right}`?`${ReplaceAll<Left,From,To>}${To}${ReplaceAll<Right,From,To>}`:Str
type replaceAllRes = ReplaceAll<'哈工智慧第一冲击波阿阿杰杰阿杰阿杰阿杰','阿杰','大宝'>

//函数类型的模式匹配

//参数类型
type GetParams<Func extends Function> = Func extends (...params: infer Params) => any ? Params : never
type resGetParams = GetParams<(a: number, b: boolean) => void>

//返回值类型
type GetReturnType<Func extends Function> = Func extends (...params:any)=> infer R ? R : never
type resGetReturnType = GetReturnType<(a:number,b:boolean) => Promise<number>>