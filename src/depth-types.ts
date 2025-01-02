type TestExact<Left, Right> = (<U>() => U extends Left ? 1 : 0) extends <U>() => U extends Right
  ? 1
  : 0
  ? true
  : false

type ArrayType<T> = T extends (infer R)[] ? R : never

type AdjustDepth<
  T,
  Depth extends number,
  CurrentDepth extends any[] = [],
> = CurrentDepth['length'] extends Depth
  ? T
  : {
      [K in keyof T]: ArrayType<T[K]> extends never
        ? T[K] extends string | infer R
          ? R extends object
            ? AdjustDepth<
                R,
                Depth,
                TestExact<T[K], R> extends true ? CurrentDepth : [unknown, ...CurrentDepth]
              >
            : T[K]
          : T[K]
        : ArrayType<T[K]> extends string | infer R
        ? R extends object
          ? AdjustDepth<
              R,
              Depth,
              TestExact<R, ArrayType<T[K]>> extends true ? CurrentDepth : [unknown, ...CurrentDepth]
            >[]
          : T[K]
        : T[K]
    }
