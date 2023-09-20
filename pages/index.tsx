import Head from 'next/head'

import {Timer} from '@ui/blocks/Timer'

function HomePage() {
	//как сложить сумму элементов массива
	const arr = [1, 2, 8, 8, 15, 96, 3]
	const sumArr = arr.reduce(function (acc, elem) {
		return acc + elem;
	}, 0)

	//как получить массив из только уникальных значений исходного массива
	const arr2 = [1, "asdf", "test", 15, {}, "asdf", 15, {}]
	const filteredArray = []

	arr2.map((value) => {
		if (!filteredArray.includes(value)) {
			filteredArray.push(value)
		}
	})

	//сколько раз каждый элемент встречается в массиве
	//первое решение
	const fruits = ["apple", "banana", "apple", "orange", "banana", "apple", "banana", "apple"]

	const fruitCount = (list) => {
		const count = {}

		list.forEach(fruit => {
			if (!count[fruit]) {
				count[fruit] = 1;
			} else {
				count[fruit] ++;
			}
		});

		return count
	}
	//console.log(fruitCount(fruits))
	//второе решение
	let count2 = {}
	fruits.map((fruit) => {
		if (!count2[fruit]) {
			count2[fruit] = 1
		} else {
			count2[fruit] ++
		}
	})
	//console.log(count2)

	//как повернуть строку? reverse в js только для массивов, поэтому 1) преобразовываем строку в массив, 2) реверсим массив, 3) преобразовываем массив обратно в строку 
	const str = 'pizza'
	const revStr = str.split("").reverse().join("")
	
	

	return (
		<>
			<Head>
				<title>Homepage</title>
			</Head>

			<div className="ui-typography">
				<h1>Welcome to the Starter-kit!</h1>
				<Timer />
				<p> also Some text for a test! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Some text for a test!Some text for a test!Some text for a test!Some text for a test!</p>
			
				
			</div>
		</>
	)
}

export default HomePage
