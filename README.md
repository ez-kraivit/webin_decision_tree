Decision Tree for NodeJS by Kraivit Mongkhonsakunrit [![Build Status](https://travis-ci.com/ez-kraivit/webin_decision_tree.svg?branch=main)](https://travis-ci.com/ez-kraivit/webin_decision_tree) <a href="https://www.npmjs.org/package/webin_decision_tree">
    <img src="https://img.shields.io/npm/dm/strapi.svg" alt="Monthly download on NPM" />
  </a>
========================

This module contains the NodeJS Implementation of Decision Tree using [Entropy Algorithm](https://en.wikipedia.org/wiki/Entropy)

# Table Of Contents
* [`Installation`](#installation)
* [`Usage`](#usage)
	* [`Import Module`](#importmodule)
	* [`Prepare`](#importmodule)
	* [`Installation`](#installation)
	* [`Check Purge`](#importmodule)

# [Installation](id:installation)
	npm install webin_decision_tree

# [Usage](id:usage)

* Import the module:(id:importmodule)

		const decision_tree = require('webin_decision_tree');

* Prepare training dataset:

		"data": [
		{"กล้าหาญ":true, "อดทน":true, "รักอิสระ":true, "classification":{"description":"กล้าหาญ อดทน รักอิสระ"}},
		{"กล้าหาญ":false, "อดทน":true, "รักอิสระ":true, "classification":{"description":"อดทน รักอิสระ"}},
		{"กล้าหาญ":true, "อดทน":false, "รักอิสระ":true, "classification":{"description":"กล้าหาญ รักอิสระ"}},
		{"กล้าหาญ":false, "อดทน":false, "รักอิสระ":true, "classification":{"description":"รักอิสระ"}},
		{"กล้าหาญ":true, "อดทน":true, "รักอิสระ":false, "classification":{"description":"กล้าหาญ อดทน"}},
		{"กล้าหาญ":false, "อดทน":true, "รักอิสระ":false, "classification":{"description":"อดทน"}},
		{"กล้าหาญ":true, "อดทน":false, "รักอิสระ":false, "classification":{"description":"กล้าหาญ"}},
		{"กล้าหาญ":false, "อดทน":false, "รักอิสระ":false, "classification":{"description":"none"}}
		]

* Prepare data set Demo:

	    "data": [
		{"กล้าหาญ":"กล้าหาญ", "อดทน":"อดทน", "liked":false,"love":true},
		{"กล้าหาญ":"กระจอก", "อดทน":"ขี้กาก", "liked":false,"love":false},
		{"กล้าหาญ":"กล้า", "อดทน":"มีระเบียบ", "liked":true,"love":true},
		{"กล้าหาญ":"สู้", "อดทน":"ไม่กลัว", "liked":true,"love":false},
		{"กล้าหาญ":"ไม่ท้อ", "อดทน":"มีวินัย", "liked":false,"love":true},
		{"กล้าหาญ":"เข็มแข็ง", "อดทน":"ยอมแพ้", "liked":false,"love":true},
		{"กล้าหาญ":"ไม่กลัว", "อดทน":"ไม่สู้", "liked":true,"love":false},
		{"กล้าหาญ":"รับผิดชอบ", "อดทน":"กระจอก", "liked":true,"love":false}
		]

* Check Purge:

        const text = "กลัว ทำไมละนั้น ส้ส ควย"
		decision_tree.wordcut(text) //ตัดคำไม่สุขภาพออก

รออัพเดท Path ตอนนี้ยังเป็น Demo อยู่ในระหว่างการพัฒนาระบบ รองรับการทำ Dynamic Function , Muti Class , Muti Sub Node Decision Tree

