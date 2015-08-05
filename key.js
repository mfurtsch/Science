function myFunction() 
{	
	var thisiscrazy = true;
	while(thisiscrazy)
	{
		var question = "Is it a plant?"
		var answer = prompt(question);
		var insert = document.getElementById("demo");
		insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';
		
			if (answer == "yes")
			{
			    var question = "Does it have peaily bark?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';
				if (answer == "yes") 
				{
					var question = "Do the vains in the leaves point to the tip of the leaf?";
					var answer = prompt(question);
					var insert = document.getElementById("demo");
			    	insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes") 
					{
						
							var question = "Is the all of the stem red?";
							var answer = prompt(question);
							var insert = document.getElementById("demo");
				    		insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';	
							if (answer == "yes") 
							{
								var insert = document.getElementById("demo");
								insert.innerHTML = insert.innerHTML + "The tree is a Red-Osier Dogwood, Cornus sericea <br>";
								return;
							}
							if (answer == "no") 
							{
								var insert = document.getElementById("demo");
								insert.innerHTML = insert.innerHTML + "The tree is an Alternate-LeafDogwood, Cornus alternifolia <br>";
								return;
							}
						

					}
				var question = "Does the bark peal horzontial?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes") 
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a white birch, Betula papyrifera <br>";
						return;
					}
					if (answer == "no") 
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a yellow birch, Betula alleghaniensis. <br><p></p>";
						return;
					}
				}
				var question = "Does it have loabs";
			   var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

				if (answer == "yes")
				{
					var question = "Does it have more than 5 loabs";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Bear Oak, Quercus rubrum. <br><p></p>";
						return;
					}
					var question = "Does it have flaky bark?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var question = "Does it have 5 leaflets";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Box Elder, Acer negundo. <br><p></p>";
							return;

						}
						if (answer == "no")
						{
							var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Silver Maple, Acer saccharinum. <br><p></p>";
							return;

						}
					}
					if (answer == "no")
					{
						var question = "Are the buds sharp?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Shugar Maple, Acer saccharnum. <br><p></p>";
							return;
						}
						if (answer == "no")
						{
							var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a norway Maple, Acer platanoides. <br><p></p>";
							return;
						}
					}
				}
				var question = "Does it have needles?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

				if (answer == "yes")
				{
					var question = "How many needles are in a clump? 1, 2, 3, 5, 5+";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "1")question
					{
						var question = "Does it have cones the size of quarters?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Hemlock, Tsuga canadensis. <br><p></p>";
							return;
						}
						if (answer == "no")
						{
							var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a norway Spruce, Picea abies. <br><p></p>";
							return;
						}
					}
					if (answer == "2")
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Scotch Pine, Pinus sylvestris. <br><p></p>";
						return;
					}
					if (answer == "3")
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Pitch Pine, Pinus rigida. <br><p></p>";
						return;

					}
					if (answer == "5")
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a White Pine, Pinus strobus. <br><p></p>";
						return;
					}
					if (answer == "5+")
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Larch, Tamarack, Larix larcinia. <br><p></p>";
						return;
					}
				}
				var question = "Does it have rigid edge of leaves?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

				if (answer == "yes")
				{
					var question = "Does it have hart shaped leaves?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Cottonwood, Populus deltoides. <br><p></p>";
						return;
					}
					if (answer == "no")
					{
						var question = "Does it have vines growing out of it?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Wild grape, Vitis riparia. <br><p></p>";
							return;
						}
						if (answer == "no")
						{
							var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Beech, Fagus grandifolia. <br><p></p>";
							return;
						}	
						var question = "Is it in a bog?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var question = "Does it have hairs growing out of the leaves?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The plant is a Pitcher Plant, Sarracenia pupurea. <br><p></p>";
								return;
							}
							if (answer == "no")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Sphagnum, Sphagnum sphagnum. <br><p></p>";
								return;
							}
						}
					}
				}
				var question = "Does it have scally leaves?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

				if (answer == "yes")
				{
					var question = "Does it have small black berrys?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Juniper, Juniperus verginana. <br><p></p>";
						return;
					}
					if (answer == "no")
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Ceder, Thuja occidentalies. <br><p></p>";
						return;
					}
				}
				var question = "Does it have leaflets?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

				if (answer == "yes")
				{
					var question = "Does it have fur on branches?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Stag Horn Sumac, Rhus typhina. <br><p></p>";
						return;
					}
					if (answer == "no")
					{
						var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The tree is a Black Locust, Pseudoaccacia rubinia. <br><p></p>";
						return;
					}
				}
			}
			if(answer == "no")
			{
				var question = "Is it an animal?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';
				if (answer == "yes")
				{
					var question = "Is it a fish?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var question = "Does it a fin with no rays, on top before the tail?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var question = "Does it have dark spots on light background?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var question = "Is it silver and black?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Atlantic Salmon, Salmo salar. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Brown Trout, Salmo trutta. <br><p></p>";
									return;
								}
							}
							if (answer == "no")
							{
								var question = "Does it have a heavy forked tail?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Lake Trout, Salvelinus namaycush. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var question = "Does it have white lines on the front of its bottem fins?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Brook Trout, Salvelinus fontinalis. <br><p></p>";
										return;
									}
									if (answer == "no")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Rainbow Trout, Oncorhynchus mykiss. <br><p></p>";
										return;
									}
								}
							}
						}
						if (answer == "no")
						{
							var question = "Does it have 2 dorcal fins?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var question = "Does its moulth go past its eyes?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Large-moulthed Bass, Micropterus salmoides. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Small-moulthed Bass, Micropterus dolomiewu. <br><p></p>";
									return;
								}
							}
							var question = "Is it less than six inches long?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var question = "Does it have a black line on its side from nose to tail?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Blacknose Dace, Rhinichthys atratulus. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Longnosed Dace, Rhinichthys cataractae. <br><p></p>";
									return;
								}
							}
							var question = "Does questionit have a black dot on its tail?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Bowfin, Amia calva.";
								return;
							}
							var question = "Does it have a mouth?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "no")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Lamprey, Petromyzon marinus. <br><p></p>";
								return;
							}
							var question = "Does it have a really long mouth?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Longnosed Gar, Lepisosteus osseus. <br><p></p>";
								return;
							}
							if (answer == "no")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Lake Sturgeon, Acipenser fulvescens. <br><p></p>";
								return;
							}
						}
					}
					var question = "Does it have fur?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var question = "Does it have a bushy tail?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "SQUIRL!";
						}
						var question = "Does it have evergrowing insicers?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var question = "Does it have large eyes and large ears?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var question = "Does it have a white belly?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a White-footed Dear mouse, Peromyscus leucopus. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Meadow Jumping mouse, Zapus hudsonius. <br><p></p>";
									return;
								}
							}
							var question = "Does it have a short tail?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var question = "Does it have a redish/brownish back?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Red-backed Vole, Myodes rutilus. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Meadow Vole, Microtus pennsylvanicus. <br><p></p>";
									return;
								}
							}
							var question = "Can you see its ears?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "no")
							{
								var question = "Does it have a pink \"nose\"?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Star-nosed Mole, Condylura cristata. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Hairy-Tailed Mole, Parascalops breweri. <br><p></p>";
									return;
								}
							}
							var question = "Is it grey and tiny?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Short-tailed Shrew, Blarina brevicauda. <br><p></p>";
								return;
							}
							if (answer == "no")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Water Shrew, Sorex palustris. <br><p></p>";
								return;
							}
						}
						var question = "Does it have a cream colored under belly?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var question = "Does it have a long tail?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Long Tailed weasel, Mustela frenata. <br><p></p>";
								return;
							}
							if (answer == "no")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Short Tailed weasel, Mustela erminea. <br><p></p>";
								return;
							}
						}
						if (answer == "no")
						{
							var question = "Is it aquatic?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Otter, Lontra canadensis. <br><p></p>";
								return;
							}
							if (answer == "no")
							{
								var question = "Does it have a yellow blaze?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Pine marten, Martes americana. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Fisher Cat, Martes pennanti. <br><p></p>";
									return;
								}
							}
						}
					}
					var questionquestion = "Does it have moist skin?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var question = "Does it have a tail?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var question = "Does it have yellow spots?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Spotted Salamander, Ambystoa macultum. <br><p></p>";
								return;
							}
							if (answer == "no")
							{
								var question = "Is it bright orange with red spots?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Eastern Newt (Red Eft), notophthalmus viridescens. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Red Back Salamander,  Plethodon cinereus. <br><p></p>";
									return;
								}
							}
						}
						if (answer == "no")
						{
							var question = "Is it less than an inch long?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var question = "Does it have an x on its back?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Spring peeper,  Hyla crucifer. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Grey Treefrog,  Plethodon Versicolor. <br><p></p>";
									return;
								}
							}
							if (answer == "no")
							{
								var question = "Is the line behind its eye stright?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Green Frog, Rana clamitans. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Bullfrog,  Rana catesbeiana. <br><p></p>";
									return;
								}
							}
						}
					}
					var question = "Is it segmented?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var question = "Does it have  3 segments?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var question = "Does it have a hump before its last segment?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var question = "What fracton of an inch is the ant: 1/2, 1/4, 1/16?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "1/4")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Red Ant, Fornica exsectoides. <br><p></p>";
									return;
								}
								if (answer == "1/2")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Carpenter Ant, Camponotus pennsylvanicus. <br><p></p>";
									return;
								}
								if (answer == "1/16")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Black Ant, Monomoriun minimum. <br><p></p>";
									return;
								}

							}
							if (answer == "no")
							{
								var question = "Does it have a stinger?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var question = "Is it about a 1/2 inch big?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var question = "Is it fuzzy?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

										if (answer == "yes")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Honney Bee, Apis mellifera. <br><p></p>";
											return;	
										}
										if (answer == "no")
										{
											var question = "Is it black and white?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

											if (answer == "yes")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Bald-faced Horrnet, Vespula maculata. <br><p></p>";
												return;	
											}
											if (answer == "no")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Yellow Jacket, Vespula maculifrons. <br><p></p>";
												return;
											}
										}
									}
									if (answer == "no")
									{
										var question = "Is it fuzzy?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

										if (answer == "yes")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Bumble Bee, Bombus pensylvanicus. <br><p></p>";
											return;	
										}
										if (answer == "no")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Paper Wasp, Polistes fuscatus. <br><p></p>";
											return;
										}
									}
								}
								if (answer == "no")
								{
									var question = "Does it have Jaws?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var question = "Is it red with black dots?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

										if (answer == "yes")
										{
											var question = "Does it have 2 white spots on its face area?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

											if (answer == "no")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Convergent Ladybug, Hippodamia convergens. <br><p></p>";
												return;
											}
											if (answer == "yes")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Two-spotted Ladybug, Adalia bipunctata. <br><p></p>";
												return;
											}
										}
										var question = "Is it iridecent?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

										if (answer == "yes")
										{
											var question = "Does it have a mostly brown body?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

											if (answer == "yes")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Brown Tiger-Beetle, Cicindela duodecimguttata. <br><p></p>";
												return;
											}
											if (answer == "no")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Green Tiger-Beetle, Cicindela sexguttata. <br><p></p>";
												return;
											}
										}
										var question = "Is it bioluminsent?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

										if (answer == "yes")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Lightning Bug, Photuris spp..";
											return;
										}
										if (answer == "no")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a June Bug, Phyllophaga spp..";
											return;
										}

									}
									if (answer == "no")
									{
										var question = "Is it in water/near water?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

										if (answer == "yes")
										{
											var question = "Does it have harry legs?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

											if (answer == "yes")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Doodle Bug.";
												return;
											}
											if (answer == "no")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Giant Water Bug, Lethocerus americanus. <br><p></p>";
												return;
											}
										}
										var question = "Is it pentagon shaped?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

										if (answer == "yes")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Stink Bug.";
										}
										if (answer == "no")
										{
											var question = "Is its body stick shaped?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

											if (answer == "yes")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Stick Bug.";
												return;
											}
											if (answer == "no")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Praying Mantis, Mantis religiosa. <br><p></p>";
												return;
											}
										}
									}	
								}
							}
						}
						var question = "Does it have more than 3 segments?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var question = "Does it have 4 legs, on each segment that has legs?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Milliped, Uniromions. <br><p></p>";
								return;
							}
							if (answer == "no")
							{
								var question = "Is it all black?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Centiped, Uniromions. <br><p></p>";
									return;
								}
								if (answer == "no")	
								{
									var question = "Is it mostly green?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var question = "Does it have blue, red, and yellow bumps on it?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

										if (answer == "yes")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Cecropia Larva, Hyalophora cecroipa. <br><p></p>";
											return;
										}
										if (answer == "no")
										{
											var question = "Does it have orange antenna?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

											if (answer == "yes")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Tamato Hornworm Larva, Manduca quinquemaculata. <br><p></p>";
												return;question
											}
											if (answer == "no")
											{
												var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is a Luna Moth larva, Actias luna. <br><p></p>";
												return;
											}
										}
									}
								}
							}
						}
					}
					var question = "Does it have wings?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var question = "Does it have feathers?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var question = "Does it have a light or whiteish under body?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var question = "Does it have a blueish or greenish back?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var question = "Does it have a tan or orange belly?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Barn Swallow, Hirundo rustica. <br><p></p>";
										return;
									}
									if (answer == "no")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Tree Swollow, Tachycineta bicolor. <br><p></p>";
										return;
									}
								}
								var question = "Does it have black on the front of it's neck?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var question = "Does it have black stripes on its neck?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Deerkill, Tachycineta bicolor. <br><p></p>";
										return;
									}
									if (answer == "no")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Hermit Thrush, Catharus guttatus. <br><p></p>";
										return;
									}
								}
								var question = "Does it have white tips on its tail?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Eastern Kingbird, Tyrannus tyrannus. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var question = "Does it have a curved beak?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{question
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Brown Creeper, Tachycineta bicolor. <br><p></p>";
										return;
									}
									if (answer == "no")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Eastern Phoebe,  Sayornis phoebe. <br><p></p>";
										return;
									}
								}
							}
							if (answer == "no")
							{
								var question = "Is it black?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var question = "Does it have a weadge shaped tail?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Raven, Corcuv corax. <br><p></p>";
										return;
									}
									if (answer == "no")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Crow, Corvus brachyrhynchos. <br><p></p>";
										return;
									}
								}
								if (answer == "no")
								{
									var question = "Does it have a long neck and legs?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Blue Heron, Ardea herodias. <br><p></p>";
										return;
									}
									if (answer == "no")
									{
										var question = "Does it have red eyebrows?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

										if (answer == "yes")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Sprouce Grouse, Falcipennis canadensis. <br><p></p>";
											return;
										}
										if (answer == "no")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Ceader Waxwing, Bombycilla cedrorum. <br><p></p>";
											return;
										}
									}
								}
							}
						}
						if (answer == "no")
						{
							var question = "Is it black and orange?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var question = "Does it have a black line on the back of each wing?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Viceroy Butterfly, Limenitis archippus. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Monarch Butterfly, Danaus plexippus. <br><p></p>";
									return;
								}
							}
							var question = "Is it larger than 3 inches?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var question = "Is it mostly green?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Luna Moth, Actias luna. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var question = "Does it have 1/2 moon eyespots on its wings?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Cecropia, Hyalophora cecroipa. <br><p></p>";
										return;
									}
									if (answer == "no")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Tamato Hornworm, Manduca quinquemaculata. <br><p></p>";
										return;
									}
								}
							}
							if (answer == "no")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Tent Catipiller, Malacosoma spp.. <br><p></p>";
								return;
							}
						}
					}
					var question = "Does it have scales?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

					if (answer == "yes")
					{
						var question = "Does it have a shell?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

						if (answer == "yes")
						{
							var question = "Does it have a soft leathery shell?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Spiny Softshelled Turtle, Apalone spinifera. <br><p></p>";
								return;
							}
							if (answer == "no")
							{
								var question = "Does it have a yellow bottem of shell?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Painted Turtle, Chrysemys picta. <br><p></p>";
									return;
								}
								if (answer == "no")
								{
									var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Snaping Turtle, Chelydra serpentina. <br><p></p>";
									return;
								}
							}
						}
						if (answer == "no")
						{
							var question = "Does it have legs?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

							if (answer == "yes")
							{
								var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is 5-Lined Skink, Plestiodon faciatus. <br><p></p>";
								return;
							}
							if (answer == "no")
							{
								var question = "Does it have spots?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

								if (answer == "yes")
								{
									var question = "Does it have red spots?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Milk Snake, Lampropeltis triangulum. <br><p></p>";
										return;
									}
									if (answer == "no")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Timber Rattle Snake, Crotalus horridus. <br><p></p>";
										return;
									}
								}
								if (answer == "no")
								{
									var question = "Does it have a mostly black body?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

									if (answer == "yes")
									{
										var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Black Rat Snake, Elaphe obsoleta. <br><p></p>";
										return;
									}
									if (answer == "no")
									{
										var question = "Does it have a mostly yellow line on its back?";
			    var answer = prompt(question);
			    var insert = document.getElementById("demo");
			    insert.innerHTML = insert.innerHTML + question +'<br>'+ answer + '<br>';

										if (answer == "yes")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Garter Snake, Thamnphis sirtalis. <br><p></p>";
											return;
										}
										if (answer == "no")
										{
											var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "The animal is Water Snake, Nerodia sipedon. <br><p></p>";
											return;
										}
									}
								}
							}
						}
					}
				}
				if (answer == "no")
				{
					var insert = document.getElementById("demo");
							insert.innerHTML = insert.innerHTML + "Rocks. <br><p></p>";
				}
		}
	}
}