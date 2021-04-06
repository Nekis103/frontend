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
		document.getElementById("Rocket_select").src='iconn2.png';
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
	 var input = document.getElementById('input_text');
	 var temp=document.getElementById('temp_id');
	 var humidity=document.getElementById('humidity_id');
	 var wind=document.getElementById('wind_id');
	 var bat=document.getElementById('button_id');
	 
	 

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=5ec286cf2ed576a25cbab46a59205fad&lang=ru&units=metric')
.then(response => response.json())
.then(data => {
				var tempValue = data['main']['temp'];
				var nameValue = data['name'];
				var descValue = data['weather'][0]['description'];
				var WindValue = data['wind']['speed']
				var vectorValue=data['wind']['deg']
				var humidityValue= data['main']['humidity']
				
				
				if (tempValue>0)
				{
					tempValue='+'+tempValue;
				}
				
				
				document.getElementById("temp_id").innerHTML=tempValue;
				
				document.getElementById("humidity_id").innerHTML=humidityValue+'%';
				
				check_vector_windd(vectorValue,WindValue);
				
				
				document.getElementById("weather_select").src='iconn2.png';
				
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
let kapitan1 = new TeamMember('Константин Константинопольский','Капитан','men1.png');
let kapitan2 = new TeamMember('Виктор Удальской','Капитан','men2.png');
let engineer1 = new TeamMember('Антуан Великий','Инженер','men2.png');
let engineer2 = new TeamMember('Иван Дельников','Инженер','men3.png');
let doctor1 = new TeamMember('Марьяна Спасальская','Доктор','men3.png');
let doctor2 = new TeamMember('Дмитрий Айболитов','Доктор','men4.png');
let space_marine1 = new TeamMember('Максим Бестрашнов','Космодесантник','men5.png');
let space_marine2 = new TeamMember('Анна Комарова','Космодесантник','men1.png');
let selectRocket=new Rocket;



TeamMembers[0]=kapitan1;
TeamMembers[1]=kapitan2;
TeamMembers[2]=engineer1;
TeamMembers[3]=engineer2;
TeamMembers[4]=doctor1;
TeamMembers[5]=doctor2;
TeamMembers[6]=space_marine1;
TeamMembers[7]=space_marine2;
RocketMember=[];
fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=5ec286cf2ed576a25cbab46a59205fad");




function kek()
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

	var people = document.createElement("div");
       
		people.classList.add("people_content");
		people.id=mas[0]+id_end;
		my_div.appendChild(people);
		
		
	my_div = document.getElementById(people.id);
	
	
	var div_img = document.createElement("div");
		div_img.classList.add("imagy");
		div_img.id =mas[2]+id_end;
		my_div.appendChild(div_img);
	
	var div_name = document.createElement("div");
        div_name.innerHTML = people_name;
		div_name.classList.add("name_people");
		
		my_div.appendChild(div_name);
	
	var cent_check = document.createElement("div");
		cent_check.id =mas[1]+id_end;
		cent_check.classList.add("cent_check");
		my_div.appendChild(cent_check);
	
	my_div = document.getElementById(div_img.id);	
	var imgg = document.createElement("img");
		imgg.classList.add("img-rock");
		imgg.height='35';
		imgg.width='25';
		imgg.src=people_icon;
		
		my_div.appendChild(imgg);
	
	my_div = document.getElementById(cent_check.id);
	var check_box = document.createElement("div");
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
let rocket_1 = new Rocket("Сокол-345",2,"8 км\с","rocket3.png");
let rocket_2 = new Rocket("УКС-982",4,"12 км\с","rocket1.png");
let rocket_3 = new Rocket("Т-8752",3,"10 км\с","rocket2.png");



document.addEventListener('click', function(thenew) 
{  
        
        the_id    = thenew . target.id;  // console.log(  the_id    );       
        the_class = thenew . target.className;
		
		let tet = document.getElementsByClassName('menu') ;
		
		let met = document.getElementsByClassName('tag') ;
		
		if(the_id=='home_menu')
		{
			tet[0].style.opacity='1';
			tet[1].style.opacity='0.75';
			tet[2].style.opacity='0.75';
			tet[3].style.opacity='0.75';
			met[0].style.display='grid';
			met[1].style.display='none';
			met[2].style.display='none';
			met[3].style.display='none';
			var point_1=document.getElementById('Rocket_select').src;
			var point_2=document.getElementById('team_select').src;
			var point_3=document.getElementById('weather_select').src;
			//point_1=point_1.slice(-5);
		//	point_1=point_1.slice(0,1);
		//	point_2=point_1.slice(-5);
		//	point_2=point_1.slice(0,1);
		//	point_3=point_1.slice(-5);
		//	point_3=point_1.slice(0,1);
		//	console.log(point_1);
		
			if(selectRocket.name)
			{
				if(RocketMember[1])
				{
				
				if(ActualWeather.loc)
					{
						
						var y=document.getElementById('GO_IN_SPACE');
						y.style.background='#73e24d';
						y.style.color='white';
					}
				}
			}
			
		}
		if(the_id=='home_rocket')
		{
			tet[0].style.opacity='0.75';
			tet[1].style.opacity='1';
			tet[2].style.opacity='0.75';
			tet[3].style.opacity='0.75';
			met[0].style.display='none';
			met[1].style.display='inline-grid';
			met[2].style.display='none';
			met[3].style.display='none';
		}
		if(the_id=='home_team')
		{
			tet[0].style.opacity='0.75';
			tet[1].style.opacity='0.75';
			tet[2].style.opacity='1';
			tet[3].style.opacity='0.75';
			met[0].style.display='none';
			met[1].style.display='none';
			met[2].style.display='inline-grid';
			met[3].style.display='none';
			check_rocket_team(met[2]);
			let pep=document.getElementById('people1');
			if(!pep){kek();id_end=1;}
			
			
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
		if(the_id=='home_weather')
		{
			tet[0].style.opacity='0.75';
			tet[1].style.opacity='0.75';
			tet[2].style.opacity='0.75';
			tet[3].style.opacity='1';
			met[0].style.display='none';
			met[1].style.display='none';
			met[2].style.display='none';
			met[3].style.display='inline-grid';
		}
		
		if(the_id=='shatl1')
		{
			
			rocket_1.launch();
			
		}
		if(the_id=='shatl2')
		{
			
			rocket_2.launch();
			
		}
		if(the_id=='shatl3')
		{
			
			rocket_3.launch();
			
		}
		let temp=the_id.slice(0,-1);
		
		if(temp=='checkbox')
		{
			var chbox;
			chbox=document.getElementById(the_id);
			temp=the_id.slice(-1)-1;
			if (chbox.checked) 
			{
				
				
				if(TeamMembers[temp].role=='Капитан')
				{
					let my_img=document.getElementById('capitans_rocket');
					var imgg = document.createElement("img");
					imgg.classList.add("style_team");
					imgg.height='20';
					imgg.width='16';
					imgg.src=TeamMembers[temp].icon;
					imgg.id='img_'+temp;
					my_img.appendChild(imgg);
					RocketMember[temp]=TeamMembers[temp];
					
				}
				
				if(TeamMembers[temp].role=='Инженер')
				{
					let my_img=document.getElementById('engeneers_rocker');
					var imgg = document.createElement("img");
					imgg.classList.add("style_team");
					imgg.height='20';
					imgg.width='16';
					imgg.src=TeamMembers[temp].icon;
					imgg.id='img_'+temp;
					my_img.appendChild(imgg);
					RocketMember[temp]=TeamMembers[temp];
					
				}
				
				if(TeamMembers[temp].role=='Доктор')
				{
					let my_img=document.getElementById('doctors_rocker');
					var imgg = document.createElement("img");
					imgg.classList.add("style_team");
					imgg.height='20';
					imgg.width='16';
					imgg.src=TeamMembers[temp].icon;
					imgg.id='img_'+temp;
					my_img.appendChild(imgg);
					RocketMember[temp]=TeamMembers[temp];
					
				}
				
				if(TeamMembers[temp].role=='Космодесантник')
				{
					let my_img=document.getElementById('space_marines_rocket');
					var imgg = document.createElement("img");
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
		if(the_id=='button_id')
		{
			
			serch_weather();
			
		}
		

});
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
		document.getElementById("team_select").src="iconn2.png";
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

function check_rocket_team(clas)
{
	if(document.getElementById("select_rock_name").innerHTML=="")
	{
		alert('Ракета не выбрана, выберите ракету');
		
		clas.style.display='none';
	}
}