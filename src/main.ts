interface Cat {
	id: number;
	text: string;
}

class CatUI {
	private count: number = 0;

	createNewCat() {
		const CatInput = document.getElementById("cat-text") as HTMLInputElement;
		const speech = CatInput.value.trim();
		const newCat: Cat = {
			id: this.count,
			text: speech,
		};
		const CatType = document.getElementById("cat-type") as HTMLInputElement;
		const type = CatType.value;
		let imgsrc;
		if (type === "snowball")
			imgsrc = `<img src="https://i.imgur.com/bZnePbG.gif" width="100px" height="75px">`;
		else if (type == "spud")
			imgsrc = `<img src="https://64.media.tumblr.com/2a24e5730af3f37ed8d8eb54bf5105f4/tumblr_o60ghokDWV1umhm4zo2_r1_250.gif" width="125px" height="175px">`;
		else
			imgsrc = `<img src="https://media.tenor.com/A7c1j-Dzz7oAAAAj/neko-atsume-cat.gif" width="100px" height="75px">`;
		const CatList = document.getElementById("cat-list")!;
		const CatElement = document.createElement("div")
		CatElement.className = "single-cat";
		CatElement.style.width = "150px";
		CatElement.id = newCat.id.toString();
		CatElement.style.left =  Math.floor(Math.random() * (window.innerWidth - parseInt(CatElement.style.width))) + "px";
		if (newCat.text != "")
			CatElement.innerHTML = `<div class="speech-bubble">${newCat.text}</div>`;
		CatElement.innerHTML += imgsrc;
		CatList.appendChild(CatElement);
		const Input = document.getElementById("cat-text")! as HTMLInputElement;
		Input.value = "";
		this.setEventListenerForIndivCat();
		this.count++;
	}

	removeCat(id: string) {
		const CatToRemove = document.getElementById(id)!;
		CatToRemove.remove();
	}

	setEventListenerForIndivCat() {
		let cat_elements = document.getElementsByClassName("single-cat");
		Array.from(cat_elements).forEach(element => {
			element.addEventListener("click", () => this.removeCat(element.id))
		});
	}

	bindEvents() {
		document.getElementById("add-cat")!.addEventListener("click", () => this.createNewCat());
		document.getElementById("cat-text")!.addEventListener("keydown", (event) => {
			if (event.key === "Enter")
				document.getElementById("add-cat")!.click();
		});
	}
}

const cat = new CatUI();
cat.bindEvents();
