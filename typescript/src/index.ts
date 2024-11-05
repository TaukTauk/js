// Basic types
let id: number = 5

let company: string = "ABC"

let isPublished: boolean = true

let x: any = 'Hello'

x = true

let age: number 

age = 23

let ids: number[] = [1,2 , 3, 4, 5]

let arr: any[] = [1, true, 'hello']

// Tuple

let person: [number, string, boolean] = [1, 'Brad', true]

// Tuple array

let employee: [number, string][]

employee = [
	[1, 'Brad'],
	[2, 'john'],
	[3, 'jill'],
]

// Union

let pid: string | number = 22

pid = 'hello'

// enum

enum Direction1 {
	Up = 1, // if not assigned, will be 0
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}
// Objects

type User = {
	id : number,
	name: string
}
const user: User = {
	id: 1,
	name: 'John',
}



// Type assertion

let cid: any = 1
// let customerId = <number>cid
let cusotmerId = cid as number


// Functions

function addNum(x: number, y: number) {
	return x + y
}

console.log(addNum(1, 2))

// void

function log(message: string | number): void {
	console.log(message)
}

// Interfaces

interface UserInterface {
	readonly id: number // can't be reassigned
	name: string
	age?: number // optional to be included
}

const user1: UserInterface = {
	id: 1,
	name: 'John',
}

type Point = number | string

const p1: Point = 1


interface MathFunc {
	(x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

const sub: MathFunc = (x: number, y: number): number => x - y


// Classes
class Person {
	private id: number // can only be accessed by this class
	name: string

	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}

	register() {
		return `${this.name} is now registered`
	}
}


const mike = new Person(1, 'Mike Jordan')

console.log(mike)
console.log(mike.register())


class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string) {
		super(id, name)
		this.position = position
	}
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.register())

// Generics

function getArray<T>(items: T[]): T[] {
	return new Array().concat(items)
}

let numArray = getArray<number>([1,2, 3, 4])
let strArray = getArray<string>(['brad', 'john', 'jill'])






