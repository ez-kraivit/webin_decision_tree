Decision Tree for NodeJS by Kraivit Mongkhonsakunrit
========================

This module contains the NodeJS Implementation of Decision Tree using [Entropy Algorithm](https://en.wikipedia.org/wiki/Entropy)

# Table Of Contents
* [`Installation`](#installation)
* [`Usage`](#usage)
	* [`Import Module`](#installation)
	* [`Prepare`](#installation)
	* [`Installation`](#installation)

# [Installation](id:installation)
	npm install webin_decision_tree

# [Usage](id:usage)

* Import the module:

		const decision_tree = require('webin_decision_tree');

* Prepare training dataset:

	    {"data": [
		{"กล้าหาญ":"กล้าหาญ", "อดทน":"อดทน", "liked":false},
		{"กล้าหาญ":"กระจอก", "อดทน":"ขี้กาก", "liked":false},
		{"กล้าหาญ":"กล้า", "อดทน":"มีระเบียบ", "liked":true},
		{"กล้าหาญ":"สู้", "อดทน":"ไม่กลัว", "liked":true},
		{"กล้าหาญ":"ไม่ท้อ", "อดทน":"มีวินัย", "liked":false},
		{"กล้าหาญ":"เข็มแข็ง", "อดทน":"ยอมแพ้", "liked":false},
		{"กล้าหาญ":"ไม่กลัว", "อดทน":"ไม่สู้", "liked":true},
		{"กล้าหาญ":"รับผิดชอบ", "อดทน":"กระจอก", "liked":true}
		]}

* Prepare data set:

	    {"data": [
		{"กล้าหาญ":"กล้าหาญ", "อดทน":"อดทน", "liked":false},
		{"กล้าหาญ":"กระจอก", "อดทน":"ขี้กาก", "liked":false},
		{"กล้าหาญ":"กล้า", "อดทน":"มีระเบียบ", "liked":true},
		{"กล้าหาญ":"สู้", "อดทน":"ไม่กลัว", "liked":true},
		{"กล้าหาญ":"ไม่ท้อ", "อดทน":"มีวินัย", "liked":false},
		{"กล้าหาญ":"เข็มแข็ง", "อดทน":"ยอมแพ้", "liked":false},
		{"กล้าหาญ":"ไม่กลัว", "อดทน":"ไม่สู้", "liked":true},
		{"กล้าหาญ":"รับผิดชอบ", "อดทน":"กระจอก", "liked":true}
		]}

* Wordcut Thailand [ขอขอบคุณ Kobkrit Viriyayudhakorn](https://github.com/veer66/wordcut):

        const text = "กลัว ทำไมละนั้น ส้ส ควย"
		decision_tree.wordcut(text) //ตัดคำไม่สุขภาพออก

