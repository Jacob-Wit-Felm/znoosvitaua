function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function right_addblocker() {
	right_add = document.getElementsByClassName("col-right")[0];
	if (right_add.style == "display: none") {return};

	document.getElementsByClassName("col-right")[0].style = "display: none";
}

function artbanner_addblocker() {
	artbanner = document.getElementsByClassName("artbanner");
	if (artbanner.style == "display: none") {return};

	for (let i = artbanner.length - 1; i >= 0; i--) {
		artbanner[i].style = "display: none";
	}
}	pop_up = document.getElementById("bs");


function workspace_resizer() {
	document.getElementsByClassName("col-main")[0].style = "width: auto";
	console.log("workspace_resizer");
}

function automatic_comments() {
	try {
	let active_question_number = document.getElementsByClassName("current")[0].innerText;
	document.getElementById("q" + active_question_number).getElementsByClassName("explanation")[0].style = "display:block";

	console.log("end of cycle");
	} 
	catch(err) {
		console.log(err.message)
	}
}

async function main_loop() {
	while(1) {
		automatic_comments();
		
		workspace_resizer();
		right_addblocker();
		artbanner_addblocker();

		await sleep(3000);
	};
};



main_loop();

