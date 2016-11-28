/**********************************************
**********************************************
**********************************************/
var cur_image = 0

var change_image = function(){
	var cur_pair = beard_pairs[cur_image];
	var im1 = cur_pair[0] + '.png';
	var im2 = cur_pair[1] + '.png';

	$("#beard1").attr("src",im1)
	$("#beard2").attr("src",im2)
}

var select_beard = function(beard_num){

	if (cur_image >= beard_pairs.length){
		$("#counter").text('DONE!!!11one1eleven');
	}

	im1 = null;
	im2 = null;
	if (beard_num == 0){
		im1 = beard_pairs[cur_image][0];
		im2 = beard_pairs[cur_image][1];
	} else if (beard_num == 1) {
		im1 = beard_pairs[cur_image][1];
		im2 = beard_pairs[cur_image][0];
	} else if (beard_num == 2) {
		
	}

	// save results
	if(im1){
		s = im1 + "," + im2 + "<br />";
		$("#dot").append(s);
	}
	
	// change image
	cur_image++;
	change_image();
	
	// update counter
	$("#counter").text( beard_pairs.length-cur_image + ' left to go!' );
}



//****** Create Original Beard List *****
//***************************************
Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}


var beard_names = [
'alasouvarov',
'anchor',
'balbo',
'chincurtain',
'copstashstandard',
'dali',
'ducktail',
'federationstandard',
'franzjosef',
'frenchfork',
'friendlymuttonchops',
'fumanchu',
'goatee',
'handlebar',
'handlebarandchinpuff',
'handlebarandgoatee',
'hollywoodian',
'hulihee',
'klingon',
'muttonchops',
'napoleaniiiimperial',
'olddutch',
'pencil',
'petitgoatee',
'rapindustrystandard',
'shortboxedbeard',
'soulpatch',
'sparrow',
'supermario',
'thewinnfield',
'thezappa',
'vandyke'];


var beard_pairs = []

for( var i = 0; i < beard_names.length; i++ ){
	for( var j = i+1; j < beard_names.length; j++ ){
		beard_pairs.push( [beard_names[i],beard_names[j]] );
	}
}

beard_pairs.shuffle();
$("#counter").text( beard_pairs.length + ' left to go!' );
change_image()
