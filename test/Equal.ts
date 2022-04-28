type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
    ? 1
    : 2
    ? true
    : false

type MyEqual<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false

type a = Equal<{ a: 'A' }, { readonly a: 'A' }> //false
type b = MyEqual<{ a: 'A' }, { readonly a: 'A' }> //true

type A = { a: string; b: string }
type B = { a: string }
type C = { b: string }

type D = Equal<A, B & C> //false
type E = Equal<B & C, A> //false
type F = MyEqual<A, B & C> //true
type G = MyEqual<B & C, A> //true
