const questions = document.querySelectorAll(".question");

// questions.forEach((question)=>{
// 	let btn = question.querySelector(".question__btn");

// 	btn.addEventListener("click", (e)=> {
// 		questions.forEach((item)=> {
// 			if(item !== question) {
// 				item.classList.remove("show");
// 			}
// 		})
// 		question.classList.toggle("show");
// 	})
// })

const btns = document.querySelectorAll(".question__btn");

btns.forEach((btn)=>{
	btn.addEventListener("click", (e)=>{
		let question = e.currentTarget.parentElement.parentElement;

		questions.forEach((item)=>{
			if(item !== question){
				item.classList.remove("show");
			}
		})

		question.classList.toggle("show");
	})
})