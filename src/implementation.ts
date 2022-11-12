// On a struct or type definition -> View the list of interfaces that the struct implements.
// On a struct method -> View the list of interfaces that the method's struct implements.
// On an interface definition -> View the list of the implementations of the interface.
// On an interface definition's method -> View the list of methods on structs that implement the interface.
// On a function type definition -> View the list of functions that match the signature.
// On a function type variable -> View the list of functions that match the signature of the function type.
// On a function definition -> View the list of function types that the signature matches.
// On an interface variable -> View the list of structs that match the signature of the interface.
// On an interface variables method -> View the list of methods that implement the interface's method.

// Interfaces.

interface Search {
	Search(source: string, subString: string): boolean
}

class Searcher implements Search {
	Search(source: string, subString: string): boolean {
		let result = source.search(subString);
		return result > -1;
	}
}

class SearcherNegative implements Search {
	Search(source: string, subString: string): boolean {
		let result = source.search(subString)
		return result < 0;
	}
}

function searchForTestWithSearcher(searcher: Search, source: string): boolean {
	return searcher.Search(source, "test")
}

// Functions.

interface SearchFunc {
	(source: string, subString: string): boolean;
}

const mySearch: SearchFunc = function(source: string, subString: string): boolean {
	let result = source.search(subString)
	return result > -1;
};

const mySearchNegative: SearchFunc = function(source: string, subString: string): boolean {
	let result = source.search(subString)
	return result < 0;
};

function searchForTestWithFunc(searcher: SearchFunc, source: string): boolean {
	return searcher(source, "test")
}

