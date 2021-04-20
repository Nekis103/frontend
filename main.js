class Rocket{
	constructor (name,teamNumber,speed,icon)
	{
		this.name=name;
		this.teamNumber=teamNumber;
		this.speed=speed;
		this.icon=icon;
	}
	launch(){
		document.getElementById("rock-icon").src =this.icon;
		document.getElementById("rock_name").innerHTML =this.name;
		document.getElementById("rock_speed").innerHTML =this.speed;
		document.getElementById("rock_teamNumber").innerHTML =this.teamNumber;
		button_rocket.style.background='#73e24d';
		button_rocket.style.color='white';
		document.getElementById("Rocket_select").classList.remove("green_colour");

		
	}
	Create()
	{
		this.icon=document.getElementById("rock-icon").src ;
		this.name=document.getElementById("rock_name").innerHTML ;
		this.speed=document.getElementById("rock_speed").innerHTML ;
		this.teamNumber=document.getElementById("rock_teamNumber").innerHTML ;
	}
	Update()
	{
		document.getElementById("select_rock-icon").src =this.icon;
		document.getElementById("select_rock_name").innerHTML =this.name;
		document.getElementById("select_rock_speed").innerHTML =this.speed;
		document.getElementById("select_rock_teamNumber").innerHTML =this.teamNumber;
		document.getElementById("Rocket_select").classList.add("green_colour");
	}
	
}
class TeamMember
{
	constructor (name,role,icon)
	{
		this.name=name;
		this.role=role;
		this.icon=icon;
	}
	Update()
	{
		
		if(this.role=='Капитан')
		{
			document.getElementById("select_cap_name").innerHTML=this.name;
		}
		if(this.role=='Инженер')
		{
			document.getElementById("select_eger_name").innerHTML=this.name;
		}
		if(this.role=='Доктор')
		{
			document.getElementById("select_doc_name").innerHTML=this.name;
		}
		if(this.role=='Космодесантник')
		{
			document.getElementById("select_marine_name").innerHTML=this.name;
		}
		
	}
}
class NowWaether
{
	constructor (loc,temp,hum,wind)
	{
		this.loc=loc;
		this.temp=temp;
		this.hum=hum;
		this.wind=wind;
	}
}
function check_vector_windd(vector,wind)
{
	if(vector>348 && vector<361)
  {
	  document.getElementById("wind_id").innerHTML=wind+'м/c С';
	 
  }
	if(vector>-1 && vector<11)
  {
	  document.getElementById("wind_id").innerHTML=wind+'м/c С';
	 
  }
	if(vector>10 && vector<79)
  {
	  document.getElementById("wind_id").innerHTML=wind+'м/c СВ';
	 
  }
	if(vector>78 && vector<102)
  {
	  document.getElementById("wind_id").innerHTML=wind+'м/c В';
	
  }
	 if(vector>101 && vector<169)
  {
	  document.getElementById("wind_id").innerHTML=wind+'м/c ЮВ';
	  
  }
	 if(vector>168 && vector<192)
  {
	  document.getElementById("wind_id").innerHTML=wind+'м/c Ю';
	  
  }
	 if(vector>191 && vector<259)
  {
	  document.getElementById("wind_id").innerHTML=wind+'м/c ЮЗ';
	 
  }
   if(vector>258 && vector<282)
  {
	  document.getElementById("wind_id").innerHTML=wind+'м/c З';
	  
  }
  if(vector>281 && vector<349)
  {
	  document.getElementById("wind_id").innerHTML=wind+'м/c СЗ';
	 
  }
  
}
 function serch_weather ()
 {
	 let input = document.getElementById('input_text');
	 let temp=document.getElementById('temp_id');
	 let humidity=document.getElementById('humidity_id');
	 let wind=document.getElementById('wind_id');
	 let bat=document.getElementById('button_id');
	 
	 

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=5ec286cf2ed576a25cbab46a59205fad&lang=ru&units=metric')
.then(response => response.json())
.then(data => {
				let tempValue = data['main']['temp'];
				let nameValue = data['name'];
				let descValue = data['weather'][0]['description'];
				let WindValue = data['wind']['speed']
				let vectorValue=data['wind']['deg']
				let humidityValue= data['main']['humidity']
				
				
				if (tempValue>0)
				{
					tempValue='+'+tempValue;
				}
				
				
				document.getElementById("temp_id").innerHTML=tempValue;
				
				document.getElementById("humidity_id").innerHTML=humidityValue+'%';
				
				check_vector_windd(vectorValue,WindValue);
				
				document.getElementById("weather_select").classList.add("green_colour");
				
				
				 ActualWeather.loc=input.value;
				  ActualWeather.temp=tempValue;
				   ActualWeather.hum=humidityValue;
				    ActualWeather.wind=document.getElementById("wind_id").innerHTML;
					document.getElementById("weather_select_loc").innerHTML=input.value;
					document.getElementById("weather_select_temp").innerHTML=tempValue;
					document.getElementById("weather_select_hum").innerHTML=humidityValue;
					document.getElementById("weather_select_wind").innerHTML=document.getElementById("wind_id").innerHTML;
					alert('Город выбран');
				 
})

.catch(err => alert("Введите название существуещего города"));
}


let ActualWeather = new NowWaether
let id_end=1;
let TeamMembers=[];
let RocketTeam=[];
let RocketMember=[];
let selectRocket=new Rocket;
//peoples
let kapitan1 = new TeamMember('Константин Константинопольский','Капитан','men1.png');
let kapitan2 = new TeamMember('Виктор Удальской','Капитан','men2.png');
let engineer1 = new TeamMember('Антуан Великий','Инженер','men2.png');
let engineer2 = new TeamMember('Иван Дельников','Инженер','men3.png');
let doctor1 = new TeamMember('Марьяна Спасальская','Доктор','men3.png');
let doctor2 = new TeamMember('Дмитрий Айболитов','Доктор','men4.png');
let space_marine1 = new TeamMember('Максим Бестрашнов','Космодесантник','men5.png');
let space_marine2 = new TeamMember('Анна Комарова','Космодесантник','men1.png');
//rockets
let rocket_1 = new Rocket("Сокол-345",2,"8 км\с","rocket3.png");
let rocket_2 = new Rocket("УКС-982",4,"12 км\с","rocket1.png");
let rocket_3 = new Rocket("Т-8752",3,"10 км\с","rocket2.png");
//create team
TeamMembers[0]=kapitan1;
TeamMembers[1]=kapitan2;
TeamMembers[2]=engineer1;
TeamMembers[3]=engineer2;
TeamMembers[4]=doctor1;
TeamMembers[5]=doctor2;
TeamMembers[6]=space_marine1;
TeamMembers[7]=space_marine2;

function Add_info_People()
{
	let id_main;
	for(i=0;i<TeamMembers.length;i++)
	{
		if(TeamMembers[i].role=='Капитан')
		{
			id_main=document.getElementById('head_capitan');
			
			people_print(id_main,TeamMembers[i].name,TeamMembers[i].icon);
		}
		if(TeamMembers[i].role=='Инженер')
		{
			id_main=document.getElementById('head_engeneer');
			
			people_print(id_main,TeamMembers[i].name,TeamMembers[i].icon);
		}
		if(TeamMembers[i].role=='Доктор')
		{
			id_main=document.getElementById('head_doctor');
			people_print(id_main,TeamMembers[i].name,TeamMembers[i].icon);
			
		}
		if(TeamMembers[i].role=='Космодесантник')
		{
			id_main=document.getElementById('head_space_marine');
			people_print(id_main,TeamMembers[i].name,TeamMembers[i].icon);
		}
	}
}
function people_print(my_div,people_name,people_icon)
{
	
	let mas =['people','cent_check','imagy','check_box','checkbox','label_check'];

	let people = document.createElement("div");
       
		people.classList.add("people_content");
		people.id=mas[0]+id_end;
		my_div.appendChild(people);
		
		
	my_div = document.getElementById(people.id);
	
	
	let div_img = document.createElement("div");
		div_img.classList.add("imagy");
		div_img.id =mas[2]+id_end;
		my_div.appendChild(div_img);
	
	let div_name = document.createElement("div");
        div_name.innerHTML = people_name;
		div_name.classList.add("name_people");
		
		my_div.appendChild(div_name);
	
	let cent_check = document.createElement("div");
		cent_check.id =mas[1]+id_end;
		cent_check.classList.add("cent_check");
		my_div.appendChild(cent_check);
	
	my_div = document.getElementById(div_img.id);	
	let imgg = document.createElement("img");
		imgg.classList.add("img-rock");
		imgg.height='35';
		imgg.width='25';
		imgg.src=people_icon;
		
		my_div.appendChild(imgg);
	
	my_div = document.getElementById(cent_check.id);
	let check_box = document.createElement("div");
		check_box.classList.add("check_box");
		
		check_box.id =mas[3]+id_end;
		my_div.appendChild(check_box);
	
	my_div = document.getElementById(check_box.id);
	let input = document.createElement("input");
        
		input.type="checkbox";
		input.id=mas[4]+id_end;
		
		my_div.appendChild(input);
		

	let lable = document.createElement("label");
		lable.setAttribute('for', input.id);
		lable.id=mas[5]+id_end;

		my_div.appendChild(lable);
		id_end++;
}
function clearing()
{
	
	for(i=0;i<TeamMembers.length;i++)
	{
		let psevdo='people';
		let psevdo1='img_';
		psevdo=psevdo+(i+1);
		psevdo1=psevdo1+i;
		
		psevdo=document.getElementById(psevdo);
		psevdo1=document.getElementById(psevdo1);
		
		psevdo.remove();
		if (psevdo1){psevdo1.remove();}
		
	}
	
	document.getElementById('team_select').src='iconn1.png';
	
	RocketMember=[];
	
}
function checking_rocket()
{
	
	if(button_rocket.style.backgroundColor=='rgb(115, 226, 77)')
	{
			
		selectRocket.Create();
		selectRocket.Update();
		let pep=document.getElementById('people1');
		if(pep){clearing();id_end=1;}
		let pent=selectRocket.icon;
		document.getElementById('main_icon').src=pent.slice(-11);
		
		alert('Ракета Готова');
		
	}
	if(button_rocket.style.backgroundColor!='rgb(115, 226, 77)')
	{
		alert('Кууудаа, без ракеты далеко не улетишь!!!Выбери ракету сначала');
	}
	
}
function checking_team()
{
	
	if(team_ok.style.backgroundColor=='rgb(115, 226, 77)')
	{
		
		document.getElementById("select_marine_name").innerHTML="Осутствует";
		document.getElementById("select_doc_name").innerHTML="Осутствует";
		document.getElementById("select_eger_name").innerHTML="Осутствует";
		document.getElementById("select_cap_name").innerHTML="Осутствует";		
		
		RocketMember=RocketMember.filter(element => element !== null);
		
		for(i=0;i<RocketMember.length;i++)
		{
			RocketMember[i].Update();
		}
		alert('Команда собрана');
		document.getElementById("team_select").classList.add("green_colour");
		
	}
	if(team_ok.style.backgroundColor!='rgb(115, 226, 77)')
	{
		alert('Повнимательнее, выбери нужно количество экипажа)');
	}
	
}
function checking_GO_IN_space()
{
	
	if(GO_IN_SPACE.style.backgroundColor=='rgb(115, 226, 77)')
	{
		main_icon.classList.add("main_icon");

		
		alert('отправляемся');
		
	}
	if(team_ok.style.backgroundColor!='rgb(115, 226, 77)')
	{
		alert('чет не так');
	}
	
}
function check_rocket_team(class_menu,class_form)
{
	if(document.getElementById("select_rock_name").innerHTML=="")
	{
		alert('Ракета не выбрана, выберите ракету');
	}
	else
	{
			class_menu[0].style.opacity='0.75';
			class_menu[1].style.opacity='0.75';
			class_menu[2].style.opacity='1';
			class_menu[3].style.opacity='0.75';
			class_form[0].style.display='none';
			class_form[1].style.display='none';
			class_form[2].style.display='inline-grid';
			class_form[3].style.display='none';
	}
}
function home_menu_key(class_menu,class_tag_form)
{
	 
			class_menu[0].style.opacity='1';
			class_menu[1].style.opacity='0.75';
			class_menu[2].style.opacity='0.75';
			class_menu[3].style.opacity='0.75';
			class_tag_form[0].style.display='grid';
			class_tag_form[1].style.display='none';
			class_tag_form[2].style.display='none';
			class_tag_form[3].style.display='none';

			if(selectRocket.name)
			{
				if(RocketMember[1])
				{
					if(ActualWeather.loc)
					{
						
						let temp=document.getElementById('GO_IN_SPACE');
						temp.style.background='#73e24d';
						temp.style.color='white';
					}
				}
			}
}
function home_rocket_key(class_menu,class_tag_form)
{
	
	
			class_menu[0].style.opacity='0.75';
			class_menu[1].style.opacity='1';
			class_menu[2].style.opacity='0.75';
			class_menu[3].style.opacity='0.75';
			class_tag_form[0].style.display='none';
			class_tag_form[1].style.display='inline-grid';
			class_tag_form[2].style.display='none';
			class_tag_form[3].style.display='none';
}
function home_team_key(class_menu,class_tag_form)
{
			
			check_rocket_team(class_menu,class_tag_form);
			let people=document.getElementById('people1');
			if(!people){Add_info_People();id_end=1;}
			
			
			let point=RocketMember.filter(element => element !== null);
			if(point.length==selectRocket.teamNumber)
			{
				let okk =document.getElementById('team_ok');
				okk.style.background='#73e24d';
			}
			else
			{
				let okk =document.getElementById('team_ok');
				okk.style.background='rgb(228, 228, 228)';
			}
}
function home_weather_key(class_menu,class_tag_form)
{
			class_menu[0].style.opacity='0.75';
			class_menu[1].style.opacity='0.75';
			class_menu[2].style.opacity='0.75';
			class_menu[3].style.opacity='1';
			class_tag_form[0].style.display='none';
			class_tag_form[1].style.display='none';
			class_tag_form[2].style.display='none';
			class_tag_form[3].style.display='inline-grid';
}
function switch_menu (tag_id)
{
	the_id    = tag_id . target.id
	let class_menu = document.getElementsByClassName('menu') ;
	let class_tag_form = document.getElementsByClassName('tag') ;
	if (the_id=="home_menu")
	{
		home_menu_key(class_menu,class_tag_form);
	}
	if (the_id=="home_rocket")
	{
		home_rocket_key(class_menu,class_tag_form);
	}
	if (the_id=="home_team")
	{
		home_team_key(class_menu,class_tag_form);
	}
	if (the_id=="home_weather")
	{
		home_weather_key(class_menu,class_tag_form);
	}
	
}
function Add_Capitan_In_Select_Rocket(tag_id)
{
	 the_id    = tag_id . target.id;  // console.log(  the_id    );       

		let temp=the_id.slice(0,-1);

		if(temp=='checkbox')
		{
			let chbox;
			chbox=document.getElementById(the_id);
			temp=the_id.slice(-1)-1;
			if (chbox.checked) 
			{
				
				
				if(TeamMembers[temp].role=='Капитан')
				{
					let my_img=document.getElementById('capitans_rocket');
					let imgg = document.createElement("img");
					imgg.classList.add("style_team");
					imgg.height='20';
					imgg.width='16';
					imgg.src=TeamMembers[temp].icon;
					imgg.id='img_'+temp;
					my_img.appendChild(imgg);
					RocketMember[temp]=TeamMembers[temp];
					
				}
					
			}
			else 
			{
				
				let img_id='img_'+temp;
				let temp_id=document.getElementById(img_id);
				temp_id.remove();
				delete RocketMember[temp];
			}
			Count_People_Select_Rocket();
		}
}
function Add_Engeneer_In_Select_Rocket(tag_id)
{
	 the_id    = tag_id . target.id;  // console.log(  the_id    );       

		let temp=the_id.slice(0,-1);

		if(temp=='checkbox')
		{
			let chbox;
			chbox=document.getElementById(the_id);
			temp=the_id.slice(-1)-1;
			if (chbox.checked) 
			{

				if(TeamMembers[temp].role=='Инженер')
				{
					let my_img=document.getElementById('engeneers_rocker');
					let imgg = document.createElement("img");
					imgg.classList.add("style_team");
					imgg.height='20';
					imgg.width='16';
					imgg.src=TeamMembers[temp].icon;
					imgg.id='img_'+temp;
					my_img.appendChild(imgg);
					RocketMember[temp]=TeamMembers[temp];
					
				}
					
			}
			else 
			{
				
				let img_id='img_'+temp;
				let temp_id=document.getElementById(img_id);
				temp_id.remove();
				delete RocketMember[temp];
			}
			Count_People_Select_Rocket();
		}
}
function Add_Doctor_In_Select_Rocket(tag_id)
{
	 the_id    = tag_id . target.id;  // console.log(  the_id    );       

		let temp=the_id.slice(0,-1);

		if(temp=='checkbox')
		{
			let chbox;
			chbox=document.getElementById(the_id);
			temp=the_id.slice(-1)-1;
			if (chbox.checked) 
			{
				
				if(TeamMembers[temp].role=='Доктор')
				{
					let my_img=document.getElementById('doctors_rocker');
					let imgg = document.createElement("img");
					imgg.classList.add("style_team");
					imgg.height='20';
					imgg.width='16';
					imgg.src=TeamMembers[temp].icon;
					imgg.id='img_'+temp;
					my_img.appendChild(imgg);
					RocketMember[temp]=TeamMembers[temp];
					
				}
	
			}
			else 
			{
				
				let img_id='img_'+temp;
				let temp_id=document.getElementById(img_id);
				temp_id.remove();
				delete RocketMember[temp];
			}
			Count_People_Select_Rocket();
		}
}
function Add_Space_Marine_In_Select_Rocket(tag_id)
{
	 the_id    = tag_id . target.id;  // console.log(  the_id    );       

		let temp=the_id.slice(0,-1);

		if(temp=='checkbox')
		{
			let chbox;
			chbox=document.getElementById(the_id);
			temp=the_id.slice(-1)-1;
			if (chbox.checked) 
			{

				if(TeamMembers[temp].role=='Космодесантник')
				{
					let my_img=document.getElementById('space_marines_rocket');
					let imgg = document.createElement("img");
					imgg.classList.add("style_team");
					imgg.height='20';
					imgg.width='16';
					imgg.src=TeamMembers[temp].icon;
					imgg.id='img_'+temp;
					my_img.appendChild(imgg);
					RocketMember[temp]=TeamMembers[temp];
					
				}	
			}
			else 
			{
				
				let img_id='img_'+temp;
				let temp_id=document.getElementById(img_id);
				temp_id.remove();
				delete RocketMember[temp];
			}
			Count_People_Select_Rocket();
		}
}
function Count_People_Select_Rocket()
{
			let point=RocketMember.filter(element => element !== null);
			if(point.length==selectRocket.teamNumber)
			{
				let okk =document.getElementById('team_ok');
				okk.style.background='#73e24d';
				okk.style.color='white';
			}
			else
			{
				let okk =document.getElementById('team_ok');
				okk.style.background='rgb(228, 228, 228)';
			}
}
//button
document.getElementById("button_rocket").addEventListener("click",checking_rocket);
document.getElementById("team_ok").addEventListener("click",checking_team);
document.getElementById("button_id").addEventListener("click",serch_weather);
document.getElementById("GO_IN_SPACE").addEventListener("click",checking_GO_IN_space);
//shatls
document.getElementById("shatl1").addEventListener("click",function(e){rocket_1.launch();});
document.getElementById("shatl2").addEventListener("click",function(e){rocket_2.launch();});
document.getElementById("shatl3").addEventListener("click",function(e){rocket_3.launch();});
//menu
document.querySelector('nav').addEventListener("click",function(e){switch_menu(e);});
//checkboxes
document.getElementById('head_capitan').addEventListener("click",function(e){Add_Capitan_In_Select_Rocket(e);});
document.getElementById('head_engeneer').addEventListener("click",function(e){Add_Engeneer_In_Select_Rocket(e);});
document.getElementById('head_doctor').addEventListener("click",function(e){Add_Doctor_In_Select_Rocket(e);});
document.getElementById('head_space_marine').addEventListener("click",function(e){Add_Space_Marine_In_Select_Rocket(e);});


