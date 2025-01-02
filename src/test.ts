type Media = {
  url: string
  alt: string
}

type Category = {
  id: string
  name: string
}

type Homepage = {
  hero: {
    title: string
    description: string
    button: string
    image: string | Media // Reference to Media
  }
}

type ExpandReferences<T, Depth extends number> = Depth extends 0
  ? T // If depth is 0, no expansion, keep as is
  : T extends string // If it's a string (ID), keep it as string (ID reference)
  ? string
  : T extends { _ref: string } // If it's a custom reference object (like { _ref: 'someReference' })
  ? T // No union type, just return the reference itself
  : T extends (infer U)[] // If it's an array, recurse over the elements
  ? ExpandReferences<U, Depth>[]
  : T extends object // If it's an object, recurse over the properties
  ? { [K in keyof T]: ExpandReferences<T[K], Depth> }
  : T // For any other types, return as is

type HomepageWithDepth<Depth extends number> = ExpandReferences<Homepage, Depth>

const x: HomepageWithDepth<1>
