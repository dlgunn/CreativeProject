function insertTextBox() {
	let text = document.createElement("textarea");
	text.addEventListener("input", autoResize, false);

	function autoResize() {
		this.style.height = "auto";
		this.style.height = this.scrollHeight + "px";
	}
	let button = document.getElementById("add-button");
	let parentContainer = document.querySelector("article");
	parentContainer.insertBefore(text, button);
	button.innerText = "Submit Addition";
	button.onclick = addToStory;
	addInspirationButton();
}

function addToStory() {
	let button = document.getElementById("add-button");
	let story = document.querySelector("textarea").value;
	let storyParagraph = document.createElement("p");
	storyParagraph.appendChild(document.createTextNode(story));
	let parentContainer = document.querySelector("article");
	parentContainer.removeChild(document.querySelector("textarea"));
	if (story !== "") {
		parentContainer.insertBefore(storyParagraph, button);
	}
	button.innerText = "+ Add to Story";
	button.onclick = insertTextBox;
}

function addInspirationButton() {
	let parentContainer = document.querySelector(".story-wrapper");
	let newArticle = document.createElement("article");
	newArticle.setAttribute("class", "poemArticle");
	if (document.querySelector(".poemArticle") !== null) {
		return;
	}
	newArticle.appendChild(inspirationButton);
	parentContainer.appendChild(newArticle);
}

let inspirationButton = document.createElement("button");
inspirationButton.setAttribute("class", "btn btn-primary");
inspirationButton.setAttribute("id", "inspiration-button");
inspirationButton.innerText = "Click here to get inspiration";
inspirationButton.style.width = "100%";
inspirationButton.onclick = getRandomPoem;

function getRandomPoem() {
	const poemUrl = `https://poetrydb.org/random`;
	fetch(poemUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			let articleWrapper = document.querySelector(".poemArticle");
			let poemHeading = document.createElement("h1");
			poemHeading.innerText = "Here's a great poem";
			articleWrapper.insertBefore(poemHeading, inspirationButton);
			let poemTitle = document.createElement("h4");
			poemTitle.innerText = json[0].title;
			articleWrapper.insertBefore(poemTitle, inspirationButton);
			let poemAuthor = document.createElement("h5");
			poemAuthor.innerText = `By ${json[0].author}`;
			articleWrapper.insertBefore(poemAuthor, inspirationButton);
			let poemContent = document.createElement("p");
			let poemLines = "";
			for (let i = 0; i < json[0].lines.length; ++i) {
				let poemLine = document.createElement("p");
				poemLine.innerText = json[0].lines[i];
				articleWrapper.insertBefore(poemLine, inspirationButton);
			}

			// article.appendChild(document.createElement("h1"))
			// let poem = document.createElement("h3");
			// poem.innerText= json[0].title;
			// article.insertBefore(poem, inspirationButton);
		});
}
