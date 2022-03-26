function odliczanie()
	{
		var dzisiaj = new Date();
					
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
					
		document.getElementById("zegar_sys").innerHTML = godzina+":"+minuta;
			 
		 setTimeout("odliczanie()",1000);
	}