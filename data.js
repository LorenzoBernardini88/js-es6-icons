const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const iconCont = document.querySelector('.icon_container');//recupero div.icon_container.

function creaBox (family,prefix,name,color){

	iconCont.innerHTML += `<div class="box_icon">
	<i class="${family} ${prefix}${name} " style= "color: ${color}" ></i>
	<span>${name}</span>
	</div>`;
} //funzione che crea il box_icon.

let select = document.getElementById('select_option');//recupero select_option.

function creaIcone( arrayIcone )
{
	for(i=0; i<arrayIcone.length; i++){
		creaBox(arrayIcone[i].family,arrayIcone[i].prefix,arrayIcone[i].name,arrayIcone[i].color);
	} //

}
//Stampo tutte le icone
creaIcone (icons);

select.addEventListener('change', function(){

	const valore =this.value   
	const nuovoArray = [];

	
		
		const iconType = icons.filter((valore) =>{
			
		
			return valore = icons.type;

			
		});	
		nuovoArray.push(iconType);
		creaIcone(nuovoArray);
		
	

		
	

	//faccio cose per filtrare l'array
	



})

// else if(valore == 'animal'){
// 	iconCont.innerHTML = '';
// 	let iconType = icons.filter(function(animali){
// 		return (animali.type === "animal")
// 	});