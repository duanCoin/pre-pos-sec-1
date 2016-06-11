function collect_same_elements(collection_a, collection_b) {
	var ar = [];
			
	for(var i in collection_a)
		for(var j in collection_b)
			if(collection_a[i] == collection_b[j])
				ar.push(collection_a[i]);	
						
	return ar;码
}

module.exports = collect_same_elements;
