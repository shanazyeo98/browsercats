interface Cat {
	id: number;
	text: string;
}

class CatStorage {
	private Cats: Cat[] = [];

	//methods
	addCat(newcat: Cat) {
		this.Cats.push(newcat);
	}

	removeCat(id: number) {
		this.Cats.splice(this.Cats.findIndex(cat => cat.id == id), 1);
	}
}

class CatUI {
	private catsOnScreen: CatStorage;
	private count: number = 0;

	constructor() {
		this.catsOnScreen = new CatStorage();
	}

	createNewCat() {
		const CatInput = document.getElementById("cat-text") as HTMLInputElement;
		const speech = CatInput.value.trim();
		const newCat: Cat = {
			id: this.count,
			text: speech,
		};
		this.catsOnScreen.addCat(newCat);
		const CatList = document.getElementById("cat-list")!;
		const CatElement = document.createElement("div")
		CatElement.className = "single-cat";
		CatElement.style.width = "150px";
		CatElement.style.left =  Math.floor(Math.random() * (window.innerWidth - parseInt(CatElement.style.width))) + "px";
		CatElement.innerHTML = `
		<div class="speech-bubble">${newCat.text}</div>
		<img src="https://i.imgur.com/bZnePbG.gif" width="100px" height="75px">
		`
		CatList.appendChild(CatElement);
		const Input = document.getElementById("cat-text")! as HTMLInputElement;
		Input.value = "";
	}

	bindEvents() {
		document.getElementById("add-cat")!.addEventListener("click", () => this.createNewCat());
	}
}

const cat = new CatUI();
cat.bindEvents();
