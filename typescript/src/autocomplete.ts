const acceptObj = (obj: { foo: string; bar: number; baz: boolean}) => {};

acceptObj({
	bar: 2,
	baz: true,
	foo: 'hello',
})

console.log(acceptObj)