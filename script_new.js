
 $('.maintitle').on('click', function () {
            $('body').css('background-image', 'linear-gradient(to top, #dad4ee 1%, #daf4ee 50%, #f3eefe 100%)');
        });
		
 $('.card').on('click', function () {
            $('body').css('background-image', 'linear-gradient(to bottom, #efefff 0%, #ffffff 100%)');
        });
		
		
var tablenameObject = 
{
	"txn_report_accrual_redemption": 
	 {
	   "Overall": 
		   ["count(distinct mobile) transactors",
			 "sum(amount) sales",
			 "count(distinct uniquebillno) bills",
			 "sum(pointscollected) points_collected" ,
			 "sum(pointsspent) points_spent",
			 "count(distinct txndate,storecode) store_txn_days"
		   ],
	   "Specific_columns": 
		   ["mobile" , "txndate" , "modifiedbillno" , "storecode" ,"poinstscollected" , "poinstspent" , "amount" , "uniquebillno" , "frequencycount" , "dayssincelastvisit"
			],
	   "Storecode": 
		   ["count(distinct mobile) transactors" , "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent" , "count(distinct txndate,storecode) store_txn_days"
		   ],
	   "Mobile": 
		   [ "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent"
			],
	   "TxnDate": 
		   ["count(distinct mobile) transactors" , "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent" , "count(distinct txndate,storecode) store_txn_days"
		   ],
	   "(left(monthname(txndate),3) Txn_month": 
		   ["count(distinct mobile) transactors" , "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent" , "count(distinct txndate,storecode) store_txn_days"
		   ],
	   "week(txndate) Weeknumber": 
		   ["count(distinct mobile) transactors" , "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent" , "count(distinct txndate,storecode) store_txn_days"
		   ],
	   "dayname(txndate) Weekday": 
		   ["count(distinct mobile) transactors" , "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent" , "count(distinct txndate,storecode) store_txn_days"
		   ]
	 },

						
"sku_report_loyalty": 
	 {
	   "Overall": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity" , "sum(rpsales) rpsale"
			],
	   "Specific_columns": 
			["txnmapppedmobile" , "modifiedtxndate" , "modifiedbillno" , "modifiedstorecode" ,"itemnetamount" , "uniquebillno" , "itemqty" , "uniqueitemcode" , "frequencycount" , "dayssincelastvisit" , "rpsales"
			],
	   "modifiedstorecode Storecode": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			],
	   "txnmappedmobile Mobile": 
			["sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			],
	   "modifiedtxndate TxnDate": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity" , "sum(rpsales) rpsale"
			],
	   "uniqueitemcode Itemcode": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			],
	   "(left(monthname(modifiedtxndate),3) Txn_month": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			],
	   "week(modifiedtxndate) Weeknumber": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			],
	   "dayname(modifiedtxndate) Weekday": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			] 
	 },
 
 
 "member_report": 
	 {
	   "Overall": 
			["count(distinct mobile) customers",
			"sum(available_points) available_points"
			],
	   "Specific_columns": 
			["mobile" , "modifiedenrolledon" , "availablepoints" , "dateofbirth" , "globaltestcontrol" , "isnondnd"
			],
	   "enrolledstorecode Enrolled_storecode": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			],
	   "Mobile": 
			["available_points"
			],
	   "modifiedenrolledon Enroll_date": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			],
	   "(left(monthname(modifiedenrolledon),3) Enroll_month": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			],
	   "year(modifiedenrolledon) Enroll_year": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			],
	   "(left(monthname(dateofbirth),3) Birthday_month": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			],
	   "Globaltestcontrol": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			],
	   "week(modifiedenrolledon) Enroll_Weeknumber": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			],
	   "dayname(modifiedenrolledon) Enroll_Weekday": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			]
	 },
 

 "txn_report_flat_accrual": 
	 {
	   "Overall": 
			["sum(pointscollected) points_collected"
			],
	   "Specific_columns": 
			["mobile" , "txndate" , "pointscollected" , "narration"
			],
	   "Mobile": 
			["sum(pointscollected) points_collected"
			],
	   "Narrtion": 
			["sum(pointscollected) points_collected"
			],
	   "Txndate": 
			["sum(pointscollected) points_collected"
			],
	   "(left(monthname(txndate),3) Txn_month": 
			["sum(pointscollected) points_collected"
			],
	   "week(txndate) Weeknumber": 
			["sum(pointscollected) points_collected"
			],
	   "dayname(txndate) Weekday": 
			["sum(pointscollected) points_collected"
			]
	 },


 "store_master": 
	 {
	   "Specific_columns": 
			["storecode" , "lpaasstore" , "address" , "state" , "city" , "tier" , "region" , "storetype"
			],
	   "State": 
			["count(distinct storecode) storecode_count"
			],
	   "City": 
			["count(distinct storecode) storecode_count"
			],
	   "Region": 
			["count(distinct storecode) storecode_count"
			],
	   "Tier": 
			["count(distinct storecode) storecode_count"
			],
	   "Storetype": 
			["count(distinct storecode) storecode_count"
			]
	 } ,
							
	 
  "Coupon_offer_report": 
	 {
	   "Specific_columns": 
			["issuedmobile" , "issueddate" , "issuedstorecode" , "couponoffercode" , "couponcode" , "issuedmobile" , "useddate" , "redeemedstorecode" , "redeemedmobile" , "amount" , "discount" , "narration"
			],
	   "issuedmobile": 
			["count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "Count(distinct couponoffercode) distinct_couponoffercodes" , "Count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "redeemedmobile": 
			["count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "Count(distinct couponoffercode) distinct_couponoffercodes" , "Count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "issueddate": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "useddate": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "couponoffercode": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "narration": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "issuedstorecode": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "redeemedstorecode": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			]
	 } 
}


window.onload = function() 
{

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

	//display data in table name dropdown 
	
	var tablenameSel = document.getElementById("tablename");
	var SummaryNameSel = document.getElementById("extractionlevel");
	var kpinameSel = document.getElementById("kpiname");

		$(".durationcard *").prop('disabled',true);

	for (var x in tablenameObject) 
	 {
	   tablenameSel.options[tablenameSel.options.length] =new Option(x, x);
	 }
	 
	 	if (tablenameSel.value=="" || SummaryNameSel.value=="")
			{	document.getElementById("groupbycheck").style.display= "none";	console.log("groupbycheck none"); }
		else
			{	document.getElementById("groupbycheck").style.display= "block";	console.log("groupbycheck yes");	}
		
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
		
	//display data in extraction name dropdown 
	
	tablenameSel.onchange = function() 
	{
		
		//empty kpiname and SummaryName- dropdowns
		kpinameSel.length = 1;
		SummaryNameSel.length = 1;
		
		document.getElementById("table_date_column1").checked= true;
		document.getElementById("kpigrpcol_inqry").innerHTML="";
			document.getElementById("groupalert").innerHTML="" ;
			
	   //display correct values in main drop down
	   for (var y in tablenameObject[this.value]) 
	   {
			SummaryNameSel.options[SummaryNameSel.options.length] = new Option(y.split(' ').slice(-1)[0],y);
			console.log(y.split(' ').slice(-1)[0]);
	   }   
	
		// for duration card visibility
			
		$(this).find("option:selected").each(function()
		{
            var optionValue = $(this).attr("value");
            if(optionValue=="store_master" || optionValue=="")
			{
				$(".durationcard *").prop('disabled',true);
				document.getElementById("table_date_column1_id").innerHTML="" ; 
				document.getElementById("table_date_column2_id").innerHTML="" ;
				document.getElementById("dateduration_inqry").innerHTML="1" ;
				document.getElementById("kpigrpmain_inqry").innerHTML="" ;
				document.getElementById("kpigrpcol_inqry").innerHTML="" ;
				document.getElementById("groupingcols_inqry").innerHTML="" ;
			} 
			
			else
			{
				$(".durationcard *").prop('disabled',false);
				$("#inclexclrow").remove();
				document.getElementById("dateduration_inqry").innerHTML="1" ;
				document.getElementById("kpigrpmain_inqry").innerHTML="" ;
				document.getElementById("kpigrpcol_inqry").innerHTML="" ;
				document.getElementById("groupingcols_inqry").innerHTML="" ;

				
				if(optionValue=="txn_report_accrual_redemption") 
				{ 	document.getElementById("table_date_column1_id").innerHTML="txndate" ; 
					document.getElementById("table_date_column1").value="txndate";
					document.getElementById("dateselect2").style.display= "None";
				}
				
				else if(optionValue=="sku_report_loyalty") 
				{ 	document.getElementById("table_date_column1_id").innerHTML="modifiedtxndate" ; 
					document.getElementById("table_date_column1").value="modifiedtxndate";
					document.getElementById("dateselect2").style.display= "None";					
				}
				
				else if(optionValue=="member_report") 
				{	document.getElementById("table_date_column1_id").innerHTML="modifedenrolledon"; 
					document.getElementById("table_date_column1").value="modifedenrolledon"; 
					document.getElementById("table_date_column2_id").innerHTML="dateofbirth"; 
					document.getElementById("table_date_column2").value="DATE(dateofbirth)"; 
					document.getElementById("dateselect2").style.display= "";
				}
				
				else if(optionValue=="txn_report_flat_accrual") 
				{ 	document.getElementById("table_date_column1_id").innerHTML="txndate" ; 
					document.getElementById("table_date_column1").value="txndate";
					document.getElementById("dateselect2").style.display= "None";
				}
				
				else if(optionValue=="Coupon_offer_report") 
				{	document.getElementById("table_date_column1_id").innerHTML="Issueddate"; 
					document.getElementById("table_date_column1").value="Issueddate"; 
					document.getElementById("table_date_column2_id").innerHTML="Useddate"; 
					document.getElementById("table_date_column2").value="Useddate"; 
					document.getElementById("dateselect2").style.display= "";
				}
			}
			
			console.log(optionValue);
			
			// inclusion exclusion condition table name 
			document.getElementById("condition_tablename").value=optionValue;
			// query table name with short form for join
			document.getElementById("qryfromtable").innerHTML=(optionValue + " "+ optionValue.split('_').map(word => word.charAt(0)).join(''));
        });


		//display filter column values in inclusion exclusion drop down
		
		var filter_tablename = this.value;
		
		var filter_tablecolnames = 
		{
			txn_report_accrual_redemption: 
				["mobile", "modifiedbillno", "storecode" ,"poinstscollected", "poinstspent", "amount", "uniquebillno", "frequencycount", "dayssincelastvisit"
				],
			sku_report_loyalty: 
				["txnmapppedmobile", "modifiedbillno", "modifiedstorecode" ,"itemnetamount", "uniquebillno", "itemqty", "uniqueitemcode", "frequencycount", "dayssincelastvisit"
				],	 
			 member_report : 
				["mobile", "availablepoints", "globaltestcontrol", "isnondnd"
				] ,	 
			 txn_report_flat_accrual : 
				["mobile", "pointscollected", "narration"
				],
			 store_master: 
				["storecode", "lpaasstore", "state", "city", "tier", "region", "storetype"
				] ,
			Coupon_offer_report:
				["issuedmobile" ,  "issuedstorecode" , "couponoffercode" , "couponcode" , "issuedmobile" , "redeemedstorecode" , "redeemedmobile" , "amount" , "discount" , "narration"
				]				
		};

		console.log("filter_tablename : "+filter_tablename);
		
		var condition_colname_dd = document.getElementById("condition_colnames");
		condition_colname_dd.innerHTML = "";

		if (filter_tablename in filter_tablecolnames) 
		{
			for (var i = 0; i < filter_tablecolnames[filter_tablename].length; i++) 
			{
			  var option = document.createElement("option");
			  option.value = filter_tablecolnames[filter_tablename][i];
			  option.text = filter_tablecolnames[filter_tablename][i];
			  condition_colname_dd.add(option);
			}
		} 		 
	}
	
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	// for KPI name selection //
	
	SummaryNameSel.onchange = function() 
	{
		//empty kpiname dropdown
		kpinameSel.length = 1;
		
	   //display values in option tag
	   var z = tablenameObject[tablenameSel.value] [this.value];
	   
		var current_table =tablenameSel.value;
		var current_extlevel =this.value;
		var combiname = (current_table + " | " +  current_extlevel);
		var grouping_main =document.getElementById("kpigrpmain_inqry");
		var grouping_kpi =document.getElementById("kpigrpcol_inqry");
		var groupingcols_alias =document.getElementById("groupingcols_inqry");
			grouping_main.innerHTML="";
			groupingcols_alias.innerHTML="";
			
		if (current_extlevel=="")
		{
			document.getElementById("groupbycheck").style.display= "none";	
			grouping_main.innerHTML="";
			groupingcols_alias.innerHTML="";
			document.getElementById("groupalert").innerHTML="" ;			
		}
		
		// kpi name dropdown value and text name setting 
		
		else if (current_extlevel=="Specific_columns")
		{
			document.getElementById("groupbycheck").style.display= "none";	
			document.getElementById("kpigrpmain_inqry").innerHTML="" ;
			document.getElementById("kpigrpcol_inqry").innerHTML="" ;
			 document.getElementById("groupalert").innerHTML="" ;
			 
			for (var i = 0; i < z.length; i++) 
				{		
					kpinameSel.options[kpinameSel.options.length] =new Option(z[i], z[i]);
					console.log(Array.from(kpinameSel.options).map(el => el.value) + " | " + Array.from(kpinameSel.options).map(el => el.innerHTML));
				}
		}
		
		// kpi name dropdown value and text name setting - for extraction level : overall
		
		else if(current_extlevel == "Overall")
		{
			document.getElementById("groupbycheck").style.display= "none";
			document.getElementById("kpigrpmain_inqry").innerHTML="" ;
			document.getElementById("kpigrpcol_inqry").innerHTML="" ;
			 document.getElementById("groupalert").innerHTML="" ;
			
			for (var j = 0; j < z.length; j++) 
				{		
					kpinameSel.options[kpinameSel.options.length] =new Option(z[j].split(' ').slice(-1)[0], z[j]);
					console.log(Array.from(kpinameSel.options).map(el => el.value) + " | " + Array.from(kpinameSel.options).map(el => el.innerHTML));
				}
		}
		
		// kpi name dropdown value and text name setting - for extraction level : columname level
		
		else
		{
			 document.getElementById("groupbycheck").style.display= "block";	
			 document.getElementById("kpigrpmain_inqry").innerHTML="" ;
			 document.getElementById("kpigrpcol_inqry").innerHTML="" ;
			 document.getElementById("groupalert").innerHTML="Data will be grouped on this column." ;
				
			for (var k = 0; k < z.length; k++) 
				{
					kpinameSel.options[kpinameSel.options.length] =new Option(z[k].split(' ').slice(-1)[0], z[k]);
				}

			// group by colnames and alias setting basis table and extraction level
			
			console.log("combiname : " + combiname);
			
			document.getElementById("kpigrpmain_inqry").innerHTML="" ;
			document.getElementById("kpigrpcol_inqry").innerHTML="" ;
			
			grouping_main.innerHTML=(current_extlevel +' , ');
			groupingcols_alias.innerHTML=current_extlevel.split(' ').slice(-1)[0];
		}

	}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
  $('.manualinputduration').hide();
  $('#daterange').show();
  
  $('#durationinputselect').change(function () 
  {
    $('.manualinputduration').hide();
    $('#'+$(this).val()).show();
  })
  
    var elm = document.createElement('input');
	elm.type = 'week';
	elm.valueAsDate = new Date();
	var yrwk = elm.value.split('Y').pop();	
	document.getElementById('wkyear_temp').innerHTML=yrwk;
	console.log(yrwk);


	    $('#add_duration_toqry').click(function()
		{	
			console.log('add_duration_toqry clicked');
			var today = new Date();
			
			var radio_datecol_value = $("input:radio[name=selected_date_column_name]:checked").val();
			var durationinputselect_var = document.getElementById("durationinputselect").value;
			
			console.log(radio_datecol_value , " | " , durationinputselect_var);				
			
			var con="";
			
			if(durationinputselect_var=="daterange")
				{
					var v3 = document.getElementById("fromdt").value;
					var v4 = document.getElementById("enddt").value;
					if(v4>v3 && v4!="" && v3!="") {
					con = ( radio_datecol_value + " between '" + v3 + "' and '" + v4 + "'");
					console.log(con);					
					}
					else {  alert("Please check : Start and end date should not be empty. End date should be greater than start date.."); con="" }

				}				
			else if(durationinputselect_var=="onedt")
				{
					var v5 = document.getElementById("datesingle_condition").value;
					var v6 = document.getElementById("datesingle").value;
					con = (radio_datecol_value + v5 + "'" + v6 + "'");
					console.log("onedt : " + con);
				}
			else if(durationinputselect_var=="monyr")
				{
					var v7= document.getElementById("myr").value;	
					if(radio_datecol_value=="DATE(dateofbirth)")
						{ 	con = ( "month("  + radio_datecol_value + ") = " + v7.substring(5, 7) );  
							document.getElementById("alertmsg").innerHTML="for Birthdate - only month is taken" ; 
						}
					else 
						{ 	con = ( " concat(year(" + radio_datecol_value + "),'-',month("  + radio_datecol_value + "))='" + v7 + "'");
							document.getElementById("alertmsg").innerHTML="";
						}						
					console.log("monyr : " + con);					
				}	
			else if(durationinputselect_var=="weekyr")
				{
					var v8= document.getElementById("wkyr").value;	
					con = ( " concat(year(" + radio_datecol_value + "),'-W',week("  + radio_datecol_value + "))='" + v8 + "'");
					console.log(con);			
				}	
			else if(durationinputselect_var=="years")
				{
					var v9= document.getElementById("yr").value;	
					con = ( " year(" + radio_datecol_value + ") = " + v9);
					console.log(con);
				}	
			else if(durationinputselect_var=="lastndays")
				{
					var v10= document.getElementById("lastnday").value;			// colname>=DATE(DATE_SUB(CURDATE(),INTERVAL 30 DAY ))						
					con = ( radio_datecol_value + " >=DATE(DATE_SUB(CURDATE(),INTERVAL " + v10 + " day))");	
					console.log(con);					
				}					
			else
				{ }
			document.getElementById("dateduration_inqry").innerHTML =con;
		});	
		
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

	// inclusion exclusion filter condition data 

	$(document).ready(function(){
	    $("#condition_filters").change(function()
		{
			$(this).find("option:selected").each(function()
			{
				var optionValue1 = $(this).attr("value");
				
				if(optionValue1=="Between")
				{
					document.getElementById("rangevalue").style.display= "block";
					document.getElementById("condition_value1").type = "number";
					document.getElementById("condition_value2").type = "number";
				} 
				else if(optionValue1==">" || optionValue1=="<" || optionValue1==">=" || optionValue1=="<=")
				{
					document.getElementById("rangevalue").style.display= "None";
					document.getElementById("condition_value1").type = "number";
				} 
				else if(optionValue1=="=" || optionValue1=="like" ||  optionValue1=="Not like" ||  optionValue1=="IN" ||  optionValue1=="Not IN")
				{
					document.getElementById("rangevalue").style.display= "None";
					document.getElementById("condition_value1").type = "text";
				}	
				else
				{
					document.getElementById("rangevalue").style.display= "None";
					document.getElementById("condition_value1").type = "number";
				}
			});
		}).change();
	});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// id="add_kpi_toqry"
// for kpiname

	$(document).ready(function(){
	    $('#add_kpi_toqry').click(function()
		{	
			var selectedkpis = $('#kpiname').val().join(' , ');
			console.log('selectedkpis : ' + selectedkpis);
			document.getElementById("kpigrpcol_inqry").innerHTML=selectedkpis;
		});	
	});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	// adding data row in query table
	
	function onForm_conditionAdd() 
	{
		console.log('conditionadd_click_received.');		
		var formData = readFormData();
		var datapresent_flag=0;
		
		for (var key in formData) 
		{
			//console.log(formData[key]);
			if(	formData[key]=='') 
				{	datapresent_flag--;	}
			else	
				{	datapresent_flag++;	}
			
			//console.log("datapresent_flag: " +datapresent_flag);
		}
		
		if(datapresent_flag>1)
			{	insertcondition(formData);
				//console.log('onForm_conditionAdd done.');
			}
		else
			{	alert("Please provide proper data inputs for inclusion/exclusions."); formData="";	}
	}

	function readFormData() 
	{
		var formData = {};
		formData["condition_colnames"] = document.getElementById("condition_colnames").value;
		formData["condition_filters"] = document.getElementById("condition_filters").value;
		formData["condition_value1"] = document.getElementById("condition_value1").value;
		formData["condition_value2"] = document.getElementById("condition_value2").value;
		console.log('readFormData done.');
		return formData;
	}


	function insertcondition(data) 
	{
		var table1 = document.getElementById("queryarea_raw").getElementsByTagName('tbody')[0];
		//var newRow = table1.insertRow(table1.length);
		
		var index = table1.rows.length;
		
		console.log("TL :" + index);
		
		let newRow = table1.insertRow(index-1); // before last row
		newRow.setAttribute("id" , "inclexclrow");

  
		cell1 = newRow.insertCell(0);   cell1.innerHTML = "and " + data.condition_colnames;
		cell2 = newRow.insertCell(1);   cell2.innerHTML = data.condition_filters;
		if(data.condition_filters=="Between") 
		{
			cell3 = newRow.insertCell(2);   
			cell4 = newRow.insertCell(3);   
			
			cell3.innerHTML =  data.condition_value1 ;			
			cell4.innerHTML = " and " + data.condition_value2;	
		}
		else if(data.condition_filters==">" || data.condition_filters=="<" || data.condition_filters==">=" || data.condition_filters=="<=")
		{
			cell3 = newRow.insertCell(2);   cell3.innerHTML =  data.condition_value1 ;
		} 		
		else if(data.condition_filters=="like" || data.condition_filters=="Not like") 
		{
			cell3 = newRow.insertCell(2);   cell3.innerHTML = "'%" + data.condition_value1 + "%'";
		}
		else if(data.condition_filters=="IN" || data.condition_filters=="Not IN") 
		{
			cell3 = newRow.insertCell(2);   cell3.innerHTML = "('" + data.condition_value1 + "')";
		}
	   else
		{
			cell3 = newRow.insertCell(2);   cell3.innerHTML = "'" + data.condition_value1 + "'";
			cell4 = newRow.insertCell(3);   cell4.innerHTML = ""; 	
		}
		//alert("Data Inserted.");
	}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

	// Generate_revised_query
	
	$(document).ready(function(){
	    $('#Generate_revised_query').click(function()
		{	
			var table_temp = document.getElementById('queryarea_raw');
			var textqry = table_temp.innerText.trim().replace(/\t/g, ' ');
			var querypastearea=document.getElementById("queryarea_revised");
			querypastearea.innerHTML=textqry;
			console.log("Revised query set.");
		});	
	});
	
	
		$(document).ready(function(){
	    $('#copyqry_btn').click(function()
		{	
			navigator.clipboard.writeText(document.getElementById("queryarea_revised").value);
			alert("Query copied to clipboard. Now you can paste this in any text editor.");
		});	
	});



