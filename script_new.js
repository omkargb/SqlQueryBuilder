
 $('.maintitle').on('click', function () {
            $('body').css('background-image', 'linear-gradient(to top, #dad4ee 1%, #daf4ee 50%, #f3eefe 100%)');
        });
		
 $('.card').on('click', function () {
            $('body').css('background-image', 'linear-gradient(to bottom, #efefff 0%, #daf4ee 100%)');
            $('h6').css('color', 'Navy');
        });
		

var tablenameObject = 
{
	"Txn_report_accrual_redemption": 
	 {
	   "Overall": 
		   ["count(distinct mobile) Total_transactors",
			 "sum(amount) Total_sales",
			 "count(distinct uniquebillno) Total_bills",
			 "sum(pointscollected) Total_points_collected" ,
			 "sum(pointsspent) Total_points_spent",
			 "count(distinct txndate,storecode) store_txn_days",
			 
			"<br>COUNT(DISTINCT CASE WHEN FrequencyCount = 1 THEN Mobile END) new_customer",
			"<br>COUNT(DISTINCT CASE WHEN FrequencyCount = 1 THEN uniquebillno END) newcust_bills",
			"<br>SUM(CASE WHEN FrequencyCount = 1 THEN Amount END) newcust_sale",
			"<br>SUM(CASE WHEN FrequencyCount = 1 THEN PointsSpent END) newcust_points_spent",

			"<br>COUNT(DISTINCT CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN Mobile END) winback_customers",
			"<br>COUNT(DISTINCT CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN uniquebillno END) winback_bills",
			"<br>SUM(CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN Amount END) winback_sale",
			"<br>SUM(CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN PointsSpent END) winback_points_spent" 
		   ],
	   "Specific_columns": 
		   ["mobile" , "txndate" , "modifiedbillno" , "storecode" ,"poinstscollected" , "poinstspent" , "amount" , "uniquebillno" , "frequencycount" , "dayssincelastvisit"
			],
	   "(Storecode) Storecode": 
		   ["count(distinct mobile) transactors" , "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent" , "count(distinct txndate,storecode) store_txn_days"
		   ],
	   "(Mobile) Mobile": 
		   [ "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent"
			],
	   "(TxnDate) TxnDate": 
		   ["count(distinct mobile) transactors" , "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent" , "count(distinct txndate,storecode) store_txn_days",
			"<br>COUNT(DISTINCT CASE WHEN FrequencyCount = 1 THEN Mobile END) new_customer",
			"<br>COUNT(DISTINCT CASE WHEN FrequencyCount = 1 THEN uniquebillno END) newcust_bills",
			"<br>SUM(CASE WHEN FrequencyCount = 1 THEN Amount END) newcust_sale",
			"<br>SUM(CASE WHEN FrequencyCount = 1 THEN PointsSpent END) newcust_points_spent",
			"<br>COUNT(DISTINCT CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN Mobile END) winback_customers",
			"<br>COUNT(DISTINCT CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN uniquebillno END) winback_bills",
			"<br>SUM(CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN Amount END) winback_sale",
			"<br>SUM(CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN PointsSpent END) winback_points_spent" 
		   ],
	   "(left(monthname(txndate),3) Txn_month": 
		   ["count(distinct mobile) transactors" , "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent" , "count(distinct txndate,storecode) store_txn_days",
			"<br>COUNT(DISTINCT CASE WHEN FrequencyCount = 1 THEN Mobile END) new_customer",
			"<br>COUNT(DISTINCT CASE WHEN FrequencyCount = 1 THEN uniquebillno END) newcust_bills",
			"<br>SUM(CASE WHEN FrequencyCount = 1 THEN Amount END) newcust_sale",
			"<br>SUM(CASE WHEN FrequencyCount = 1 THEN PointsSpent END) newcust_points_spent",
			"<br>COUNT(DISTINCT CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN Mobile END) winback_customers",
			"<br>COUNT(DISTINCT CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN uniquebillno END) winback_bills",
			"<br>SUM(CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN Amount END) winback_sale",
			"<br>SUM(CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN PointsSpent END) winback_points_spent" 
		   ],
	   "week(txndate) Weeknumber": 
		   ["count(distinct mobile) transactors" , "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent" , "count(distinct txndate,storecode) store_txn_days"
		   ],
	   "dayname(txndate) Weekday": 
		   ["count(distinct mobile) transactors" , "sum(amount) sales" , "count(distinct uniquebillno) bills" , "sum(pointscollected) points_collected" ,"sum(pointsspent) points_spent" , "count(distinct txndate,storecode) store_txn_days"
		   ]
	 },

						
"Sku_report_loyalty": 
	 {
	   "Overall": 
			["count(distinct txnmappedmobile) Total_transactors" , "sum(itemnetamount) Total_sales" , "count(distinct uniquebillno) Total_bills" , "sum(itemqty) Total_item_quantity" , "sum(rpsales) Total_rpsale"
			],
	   "Specific_columns": 
			["txnmapppedmobile" , "modifiedtxndate" , "modifiedbillno" , "modifiedstorecode" ,"itemnetamount" , "uniquebillno" , "itemqty" , "uniqueitemcode" , "frequencycount" , "dayssincelastvisit" , "rpsales"
			],
	   "(modifiedstorecode) Storecode": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			],
	   "(txnmappedmobile) Mobile": 
			["sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			],
	   "(modifiedtxndate) TxnDate": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity" , "sum(rpsales) rpsale",
			"<br>COUNT(DISTINCT CASE WHEN FrequencyCount = 1 THEN txnmappedmobile END) new_customer",
			"<br>COUNT(DISTINCT CASE WHEN FrequencyCount = 1 THEN uniquebillno END) newcust_bills",
			"<br>SUM(CASE WHEN FrequencyCount = 1 THEN itemnetamount END) newcust_sale",

			"<br>COUNT(DISTINCT CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN txnmappedmobile END) winback_customers",
			"<br>COUNT(DISTINCT CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN uniquebillno END) winback_bills",
			"<br>SUM(CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN itemnetamount END) winback_sale"
			],
	   "(uniqueitemcode) Itemcode": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			],
	   "(left(monthname(modifiedtxndate),3) Txn_month": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity",
			"<br>COUNT(DISTINCT CASE WHEN FrequencyCount = 1 THEN txnmappedmobile END) new_customer",
			"<br>COUNT(DISTINCT CASE WHEN FrequencyCount = 1 THEN uniquebillno END) newcust_bills",
			"<br>SUM(CASE WHEN FrequencyCount = 1 THEN itemnetamount END) newcust_sale",

			"<br>COUNT(DISTINCT CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN txnmappedmobile END) winback_customers",
			"<br>COUNT(DISTINCT CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN uniquebillno END) winback_bills",
			"<br>SUM(CASE WHEN DaysSinceLastVisit ><span contenteditable='true' class='border px-2'></span> THEN itemnetamount END) winback_sale"
			],
	   "week(modifiedtxndate) Weeknumber": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			],
	   "dayname(modifiedtxndate) Weekday": 
			["count(distinct txnmappedmobile) transactors" , "sum(itemnetamount) sales" , "count(distinct uniquebillno) bills" , "sum(itemqty) item_quantity"
			] 
	 },
 
 
 "Member_report": 
	 {
	   "Overall": 
			["count(distinct mobile) customers",
			"sum(available_points) available_points"
			],
	   "Specific_columns": 
			["mobile" , "modifiedenrolledon" , "availablepoints" , "dateofbirth" , "globaltestcontrol" , "isnondnd" , "smssubscribe" , "emailsubscribe"
			],
	   "enrolledstorecode Enrolled_storecode": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			],
	   "(Mobile) Mobile": 
			["available_points"
			],
	   "(modifiedenrolledon) Enroll_date": 
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
	   "(Globaltestcontrol) Globaltestcontrol": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			],
	   "week(modifiedenrolledon) Enroll_Weeknumber": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			],
	   "dayname(modifiedenrolledon) Enroll_Weekday": 
			["count(distinct mobile) customers" , "sum(available_points) available_points"
			]
	 },
 

 "Txn_report_flat_accrual": 
	 {
	   "Overall": 
			["sum(pointscollected) Total_points_collected"
			],
	   "Specific_columns": 
			["mobile" , "txndate" , "pointscollected" , "narration"
			],
	   "(Mobile) Mobile": 
			["sum(pointscollected) points_collected"
			],
	   "(Narrtion) Narrtion": 
			["sum(pointscollected) points_collected"
			],
	   "(Txndate) Txndate": 
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


 "Store_master": 
	 {
	   "Specific_columns": 
			["storecode" , "lpaasstore" , "address" , "state" , "city" , "tier" , "region" , "storetype"
			],
	   "(State) State": 
			["count(distinct storecode) storecode_count"
			],
	   "(City) City": 
			["count(distinct storecode) storecode_count"
			],
	   "(Region) Region": 
			["count(distinct storecode) storecode_count"
			],
	   "(Tier) Tier": 
			["count(distinct storecode) storecode_count"
			],
	   "(Storetype) Storetype": 
			["count(distinct storecode) storecode_count"
			]
	 } ,
							
	 
  "Coupon_offer_report": 
	 {
	   "Specific_columns": 
			["issuedmobile" , "issueddate" , "issuedstorecode" , "couponoffercode" , "couponcode" , "redeemedmobile" , "redeemedstorecode"  , "useddate" , "amount" , "discount" , "narration" 
			],
	   "(issuedmobile) issuedmobile": 
			["count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "Count(distinct couponoffercode) distinct_couponoffercodes" , "Count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "(redeemedmobile) redeemedmobile": 
			["count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "Count(distinct couponoffercode) distinct_couponoffercodes" , "Count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "(issueddate) issueddate": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "(useddate) useddate": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "(couponoffercode) couponoffercode": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "(narration) narration": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "(issuedstorecode) issuedstorecode": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			],
	   "(redeemedstorecode) redeemedstorecode": 
			["count(Distinct issuedmobile) issuedmobiles" , "count(Distinct redeemedmobile) redeemedmobiles" , "count(couponoffercode) couponoffercodes" , "count(couponcode) couponcodes" , "count(distinct couponoffercode) distinct_couponoffercodes" , "count(distinct couponcode) distinct_couponcodes" , "sum(amount) amounts" , "sum(discount) discounts"
			]
	 } 
}


window.onload = function() 
{

// ----------------------------------------------------------------------------------------------------------------------------------

	//display data in table name dropdown 
	
	var tablenameSel = document.getElementById("tablename");
	var SummaryNameSel = document.getElementById("extractionlevel_g");
	var SummaryNameSel_ng = document.getElementById("extractionlevel_ng");
	var kpinameSel = document.getElementById("kpiname");
	$("#orderby_div *").prop('disabled',true);
	$("#having_div *").prop('disabled',true);

				 
	$(".durationcard *").prop('disabled',true);
	document.getElementById("extractionlevel_ng").style.display= "block";
	document.getElementById("extractionlevel_g_div").style.display= "none";
					
		var grouping_main =document.getElementById("kpigrpmain_inqry");
		var grouping_kpi =document.getElementById("kpigrpcol_inqry");
		var groupingcols_alias =document.getElementById("groupingcols_inqry");
		
	for (var x in tablenameObject) 
	 {
	   tablenameSel.options[tablenameSel.options.length] =new Option(x, x);
	 }
	 
	 	if (tablenameSel.value=="" || SummaryNameSel.value=="")
			{	document.getElementById("groupbycheck_tr").style.display= "none";	console.log("groupbycheck_tr none"); }
		else
			{	document.getElementById("groupbycheck_tr").style.display= "block";	console.log("groupbycheck_tr yes");	}
		
//----------------------------------------------------------------------------------------------------------------------------------
		
	//display data in extraction name dropdown 

		var radio_extrlvl = $("input:radio[name=selected_extr]");
		console.log("selected ext radio : " + radio_extrlvl);
		
		$(radio_extrlvl).change(function() 
		{
			if (this.value == 'NonGrouping') {
					document.getElementById("extractionlevel_ng").style.display= "block";
					document.getElementById("extractionlevel_g_div").style.display= "none";
					 $('#extractionlevel_g option').prop('selected', function () 
					{
						return this.defaultSelected;
					});
						grouping_main.innerHTML="";
						grouping_kpi.innerHTML="";
						groupingcols_alias.innerHTML="";
			}
			else if (this.value == 'Grouping') {
					document.getElementById("extractionlevel_ng").style.display= "none";
					document.getElementById("extractionlevel_g_div").style.display= "block";
					$('#extractionlevel_ng option').prop('selected', function () 
					{
						return this.defaultSelected;
					});
						grouping_main.innerHTML="";
						grouping_kpi.innerHTML="";
						groupingcols_alias.innerHTML="";
			}
		});

		
		
	tablenameSel.onchange = function() 
	{
		
		//empty kpiname and SummaryName- dropdowns
		kpinameSel.length = 1;
		SummaryNameSel.length = 1;
		SummaryNameSel_ng.length = 1;
		
		document.getElementById("table_date_column1").checked= true;
		document.getElementById("kpigrpcol_inqry").innerHTML="*";
		
		//document.getElementById("groupalert").innerHTML="" ;
		$("#having_div *").prop('disabled',true);
			document.querySelectorAll('#orderby_colnames option').forEach(option => option.remove());
			document.querySelectorAll('#having_colnames option').forEach(option => option.remove());
							
					for (var y in tablenameObject[this.value]) 
					   {
							if (y =="Overall" || y=="Specific_columns" )
							{	
								SummaryNameSel_ng.options[SummaryNameSel_ng.options.length] = new Option(y.split(' ').slice(-1)[0],y);	
							}
							else
							{ 	
								SummaryNameSel.options[SummaryNameSel.options.length] = new Option(y.split(' ').slice(-1)[0],y);
							}
					   }  

		
		// for duration card visibility
			
		$(this).find("option:selected").each(function()
		{
            var optionValue = $(this).attr("value");
            if(optionValue=="Store_master" || optionValue=="")
			{
				$(".durationcard *").prop('disabled',true);
				document.getElementById("table_date_column1_id").innerHTML="" ; 
				document.getElementById("table_date_column2_id").innerHTML="" ;
				document.getElementById("dateduration_td").innerHTML="1" ;
				document.getElementById("kpigrpmain_inqry").innerHTML="" ;
				document.getElementById("kpigrpcol_inqry").innerHTML="" ;
				document.getElementById("groupingcols_inqry").innerHTML="" ;
			} 
			
			else
			{
				$(".durationcard *").prop('disabled',false);
				$("#inclexclrow").remove();
				document.getElementById("dateduration_td").innerHTML="1" ;
				document.getElementById("kpigrpmain_inqry").innerHTML="" ;
				document.getElementById("kpigrpcol_inqry").innerHTML="*" ;
				document.getElementById("groupingcols_inqry").innerHTML="" ;

				
				if(optionValue=="Txn_report_accrual_redemption") 
				{ 	document.getElementById("table_date_column1_id").innerHTML="txndate" ; 
					document.getElementById("table_date_column1").value="txndate";
					document.getElementById("dateselect2").style.display= "None";
				}
				
				else if(optionValue=="Sku_report_loyalty") 
				{ 	document.getElementById("table_date_column1_id").innerHTML="modifiedtxndate" ; 
					document.getElementById("table_date_column1").value="modifiedtxndate";
					document.getElementById("dateselect2").style.display= "None";					
				}
				
				else if(optionValue=="Member_report") 
				{	document.getElementById("table_date_column1_id").innerHTML="modifedenrolledon"; 
					document.getElementById("table_date_column1").value="modifedenrolledon"; 
					document.getElementById("table_date_column2_id").innerHTML="dateofbirth"; 
					document.getElementById("table_date_column2").value="DATE(dateofbirth)"; 
					document.getElementById("dateselect2").style.display= "";
				}
				
				else if(optionValue=="Txn_report_flat_accrual") 
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
			document.getElementById("qryfromtable_td").innerHTML=(optionValue + " "+ optionValue.split('_').map(word => word.charAt(0)).join(''));
        });


		//display filter column values in inclusion exclusion drop down
		
		var filter_tablename = this.value;
		
		var filter_tablecolnames = 
		{
			Txn_report_accrual_redemption: 
				["mobile", "modifiedbillno", "storecode" ,"poinstscollected", "poinstspent", "amount", "uniquebillno", "frequencycount", "dayssincelastvisit"
				],
			Sku_report_loyalty: 
				["txnmapppedmobile", "modifiedbillno", "modifiedstorecode" ,"itemnetamount", "uniquebillno", "itemqty", "uniqueitemcode", "frequencycount", "dayssincelastvisit"
				],	 
			 Member_report : 
				["mobile", "availablepoints", "globaltestcontrol", "isnondnd"
				] ,	 
			 Txn_report_flat_accrual : 
				["mobile", "pointscollected", "narration"
				],
			 Store_master: 
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
	
					   
// ----------------------------------------------------------------------------------------------------------------------------------
	
	// for KPI name selection //

	SummaryNameSel_ng.onchange = function() 
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
			document.querySelectorAll('#orderby_colnames option').forEach(option => option.remove());
			document.querySelectorAll('#having_colnames option').forEach(option => option.remove());

			 
		if (current_extlevel=="")
		{
			document.getElementById("groupbycheck_tr").style.display= "none";	
			grouping_main.innerHTML="";
			groupingcols_alias.innerHTML="";
			document.getElementById("groupalert").innerHTML="" ;
			$("#having_div *").prop('disabled',true);	
			$("#orderby_div *").prop('disabled',true);			
		}
		
		// kpi name dropdown value and text name setting 
		
		else if (current_extlevel=="Specific_columns")
		{
			document.getElementById("groupbycheck_tr").style.display= "none";	
			document.getElementById("kpigrpmain_inqry").innerHTML="" ;
			document.getElementById("kpigrpcol_inqry").innerHTML="" ;
			$("#having_div *").prop('disabled',true);
			$("#orderby_div *").prop('disabled',true);
			
			for (var i = 0; i < z.length; i++) 
				{		
					kpinameSel.options[kpinameSel.options.length] =new Option(z[i], z[i]);
					//console.log(Array.from(kpinameSel.options).map(el => el.value) + " | " + Array.from(kpinameSel.options).map(el => el.innerHTML));
				}
		}
		
		// kpi name dropdown value and text name setting - for extraction level : overall
		
		else if(current_extlevel == "Overall")
		{
			document.getElementById("groupbycheck_tr").style.display= "none";
			document.getElementById("kpigrpmain_inqry").innerHTML="" ;
			document.getElementById("kpigrpcol_inqry").innerHTML="" ;
			 $("#having_div *").prop('disabled',true);
			 $("#orderby_div *").prop('disabled',true);	 
			 
			for (var j = 0; j < z.length; j++) 
				{		
					kpinameSel.options[kpinameSel.options.length] =new Option(z[j].split(' ').slice(-1)[0], z[j]);
					//console.log(Array.from(kpinameSel.options).map(el => el.value) + " | " + Array.from(kpinameSel.options).map(el => el.innerHTML));
				}
		}
		

	}
	
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
			document.getElementById("groupbycheck_tr").style.display= "none";	
			grouping_main.innerHTML="";
			groupingcols_alias.innerHTML="";
			document.getElementById("groupalert").innerHTML="" ;
			$("#having_div *").prop('disabled',true);
			$("#orderby_div *").prop('disabled',true);	
		}
		
		// kpi name dropdown value and text name setting 

		else
		{
			 document.getElementById("groupbycheck_tr").style.display= "block";	
			 document.getElementById("kpigrpmain_inqry").innerHTML="" ;
			 document.getElementById("kpigrpcol_inqry").innerHTML="" ;
				$("#having_div *").prop('disabled',false);
				$("#orderby_div *").prop('disabled',false);
				
			for (var k = 0; k < z.length; k++) 
				{
					kpinameSel.options[kpinameSel.options.length] =new Option(z[k].split(' ').slice(-1)[0], z[k]); 
					// get aliasname after bracket complete and space in options 
				}

			// group by colnames and alias setting basis table and extraction level
			
			console.log("combiname : " + combiname);
		}

	}

// ----------------------------------------------------------------------------------------------------------------------------------
 
  $('.manualinputduration').hide();
  $('#daterange').show();
  
  $('#durationinputselect').change(function () 
  {
    $('.manualinputduration').hide();
    $('#'+$(this).val()).show();
  })
  
// ----------------------------------------------------------------------------------------------------------------------------------
  
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
					else {  alert("Please check your inputs: \n * Start and end date should not be empty. \n * End date should be greater than start date."); con="1" }

				}				
			else if(durationinputselect_var=="onedt")
				{
					var v5 = document.getElementById("datesingle_condition").value;
					var v6 = document.getElementById("datesingle").value;
					if(v6!="" && v5!="") {con = (radio_datecol_value + v5 + " '" + v6 + "'"); }
					else {alert("Please check your date condition and inputs"); con="1"; v6="";	}
					console.log("onedt : " + con);
				}
			else if(durationinputselect_var=="monyr")
				{
					var v7= document.getElementById("myr").value;	
					if(v7!="")
					{	if(radio_datecol_value=="DATE(dateofbirth)")
						{ 	con = ( "month("  + radio_datecol_value + ") = " + v7.substring(5, 7) );  
							document.getElementById("alertmsg").innerHTML="for Birthdate - only month is taken" ; 
						}
						else 
						{ 	con = ( " concat(year(" + radio_datecol_value + "),'-',month("  + radio_datecol_value + "))='" + v7 + "'");
							document.getElementById("alertmsg").innerHTML="";
						}
					}	
					else {alert("Please check your date condition and inputs"); con="1"; }
					
					console.log("monyr : " + con);					
				}	
			else if(durationinputselect_var=="weekyr")
				{
					var v8= document.getElementById("wkyr").value;	
					if(v8!="")
					{	con = ( " concat(year(" + radio_datecol_value + "),'-W',week("  + radio_datecol_value + "))='" + v8 + "'");	}
					else { alert("Please check your date condition and inputs");	con="1"; }
										
					console.log(con);			
				}	
			else if(durationinputselect_var=="years")
				{
					var v9= document.getElementById("yr").value;	
					if(v9!="")
					{	con = ( " year(" + radio_datecol_value + ") = " + v9);	}
					else { alert("Please check your date condition and inputs"); con="1"; }
					
					console.log(con);
				}	
			else if(durationinputselect_var=="lastndays")
				{
					var v10= document.getElementById("lastnday").value;			// colname>=DATE(DATE_SUB(CURDATE(),INTERVAL 30 DAY ))						
					if(v10!="")
					{	con = ( radio_datecol_value + " >=DATE(DATE_SUB(CURDATE(),INTERVAL " + v10 + " day))");	}
					else { alert("Please check your date condition and inputs"); con="1"; }
						
					console.log(con);					
				}					
			else
				{ con="1"; }
			document.getElementById("dateduration_td").innerHTML =con;
		});	
		
}

// ----------------------------------------------------------------------------------------------------------------------------------

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
					document.getElementById("rangevalue").className += " d-flex";
					
					document.getElementById("condition_value1").type = "number";
					document.getElementById("condition_value2").type = "number";
					document.getElementById("innotin_alert").innerHTML= "";
				} 
				else if(optionValue1==">" || optionValue1=="<" || optionValue1==">=" || optionValue1=="<=")
				{
					document.getElementById("rangevalue").classList.remove("d-flex");
					document.getElementById("rangevalue").style.display= "None";
					document.getElementById("condition_value1").type = "number";
					document.getElementById("innotin_alert").innerHTML= "";					
				} 
				else if(optionValue1=="=" || optionValue1=="like" ||  optionValue1=="Not like" ||  optionValue1=="IN" ||  optionValue1=="Not IN")
				{
					document.getElementById("rangevalue").style.display= "None";
					document.getElementById("rangevalue").classList.remove("d-flex");
					document.getElementById("condition_value1").type = "text";
					
					if (optionValue1=="like" ||  optionValue1=="Not like")
					{	
						document.getElementById("innotin_alert").innerHTML= "Please provide only value for 'Like','Not like' conditions. ";	
					}
					else if (optionValue1=="IN" ||  optionValue1=="Not IN")
					{
						document.getElementById("innotin_alert").innerHTML= "Please provide comma separated values for 'In','Not In' conditions.";
					}
					else {	document.getElementById("innotin_alert").innerHTML= "";	}
				}	
				else
				{
					document.getElementById("rangevalue").style.display= "None";
					document.getElementById("rangevalue").classList.remove("d-flex");
					document.getElementById("condition_value1").type = "number";
					document.getElementById("innotin_alert").innerHTML= "";
				}
			});
		}).change();
	});

// ----------------------------------------------------------------------------------------------------------------------------------

// id="add_kpi_toqry"
// for kpiname

	$(document).ready(function(){
	    $('#add_kpi_toqry').click(function()
		{	
			var selectedkpis = $('#kpiname').val().join(' , ');
			console.log('selectedkpis : ' + selectedkpis);
			
			var grouping_main =document.getElementById("kpigrpmain_inqry");
			var groupingcols_alias =document.getElementById("groupingcols_inqry");

			
			if (selectedkpis !="" )
			{	
				//console.log("radio_extrlvl in add kpi : " + radio_extrlvl);
			
						console.log("add to qry - inside grouping");
						
						var temp_gcd = $('#extractionlevel_ng').val();
						console.log("temp_gcd : " + temp_gcd);
						
						if(temp_gcd !="")
						{grouping_main.innerHTML="";	document.getElementById("kpigrpcol_inqry").innerHTML=selectedkpis; 
						groupingcols_alias.innerHTML=""; 
						}
						
						else {
							var extractionlevel_grpcoldata=$('#extractionlevel_g').val().join(' , ') + " , ";
							grouping_main.innerHTML=extractionlevel_grpcoldata;
							console.log("extractionlevel_grpcoldata added: " + extractionlevel_grpcoldata);

							
							// Initialize an array to store the substrings
							var extractionlevel_grpcolaliasdata = [];

							// Split the string using delimiter
							var parts = extractionlevel_grpcoldata.split(") "); // startig delimiter

							// Loop through the parts and extract the substrings
							for (var i = 1; i < parts.length; i++) 
							{
								var substring = parts[i].split(" ,")[0];		// ending delimiter
								extractionlevel_grpcolaliasdata.push(substring);
							}
							groupingcols_alias.innerHTML=extractionlevel_grpcolaliasdata;
							document.getElementById("kpigrpcol_inqry").innerHTML=selectedkpis;
							
							
							// adding group columns in order by , having select box
							
							var temp_order = $('#extractionlevel_g').val().join(' , ');
							var ord_options = temp_order.split(",");
							var select_order = document.getElementById('orderby_colnames');	
							document.querySelectorAll('#orderby_colnames option').forEach(option => option.remove());
							for(var g=0; g<ord_options.length; g++)
							{
							  select_order.options[g] = new Option(ord_options[g].split(") ")[1], ord_options[g].split(") ")[1]);  //new Option("Text", "Value")
							}
							
							var temp_having = null;
							temp_having= $('#kpiname').val().join(' , ');
							console.log("temp_having : " + temp_having);
							var hoptions = temp_having.split(",");
							console.log("hoptions : " + hoptions);
							var select_having = document.getElementById('having_colnames');
							document.querySelectorAll('#having_colnames option').forEach(option => option.remove());
							for(var j=0; j<hoptions.length; j++)
							{
							  select_having.options[j] = new Option(hoptions[j].split(") ")[1], hoptions[j].split(") ")[1]);  //new Option("Text", "Value")
							}


							console.log("extractionlevel_grpcolaliasdata : " + extractionlevel_grpcolaliasdata);
						}
			}
			else alert("Please select required data columns.");
		});	
	});

// ----------------------------------------------------------------------------------------------------------------------------------
	
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
		
		var convalue = document.getElementById("condition_type").value;
		
		var index = table1.rows.length;
		
		console.log("Table row length :" + index);
		
		let newRow = table1.insertRow(index-3); // before last row
		newRow.setAttribute("id" , "inclexclrow");

  
		cell1 = newRow.insertCell(0);   cell1.innerHTML = convalue + " " + data.condition_colnames;
		cell2 = newRow.insertCell(1);   cell2.innerHTML = data.condition_filters;
		if(data.condition_filters=="Between") 
		{
			cell3 = newRow.insertCell(2);   
			cell4 = newRow.insertCell(3);   
			
			cell3.innerHTML =  data.condition_value1 ;			
			cell4.innerHTML = " and " + data.condition_value2;	
			cell5 = newRow.insertCell(4);   cell5.innerHTML = "<button type='button' class='btn btn-sm btnDelete'> <i class='fa fa-trash-o text-danger'></i> </button>";							
		}
		else if(data.condition_filters==">" || data.condition_filters=="<" || data.condition_filters==">=" || data.condition_filters=="<=")
		{
			cell3 = newRow.insertCell(2);   cell3.innerHTML =  data.condition_value1 ;
			cell4 = newRow.insertCell(3);   cell4.innerHTML = ""; 	
			cell5 = newRow.insertCell(4);   cell5.innerHTML = "<button type='button' class='btn btn-sm btnDelete'> <i class='fa fa-trash-o text-danger'></i> </button>";				
		} 		
		else if(data.condition_filters=="like" || data.condition_filters=="Not like") 
		{
			cell3 = newRow.insertCell(2);   cell3.innerHTML = "'%" + data.condition_value1 + "%'";
			cell4 = newRow.insertCell(3);   cell4.innerHTML = ""; 	
			cell5 = newRow.insertCell(4);   cell5.innerHTML = "<button type='button' class='btn btn-sm btnDelete'> <i class='fa fa-trash-o text-danger'></i> </button>";				
		}
		else if(data.condition_filters=="IN" || data.condition_filters=="Not IN") 
		{
			cell3 = newRow.insertCell(2);   cell3.innerHTML = "('" + data.condition_value1.replaceAll(",","','").trim() + "')";
			cell4 = newRow.insertCell(3);   cell4.innerHTML = ""; 	
			cell5 = newRow.insertCell(4);   cell5.innerHTML = "<button type='button' class='btn btn-sm btnDelete'> <i class='fa fa-trash-o text-danger'></i> </button>";				
		}
	   else
		{
			cell3 = newRow.insertCell(2);   cell3.innerHTML = "'" + data.condition_value1 + "'";
			cell4 = newRow.insertCell(3);   cell4.innerHTML = ""; 	
			cell5 = newRow.insertCell(4);   cell5.innerHTML = "<button type='button' class='btn btn-sm btnDelete'> <i class='fa fa-trash-o text-danger'></i> </button>";			
		}
		
		//alert("Data Inserted.");
	}

// ----------------------------------------------------------------------------------------------------------------------------------

	// deleting condition row in query table
	
$(document).ready(function(){
     $("#raw_querytable").on('click','.btnDelete',function()
	 {	   
		if (confirm("Do you want to delete this condition row?")) 
		{
		$(this).closest('tr').remove();
		} 
		else {}
     });
  });


// ----------------------------------------------------------------------------------------------------------------------------------
  	//add_order_btn
	
    $('#add_order_btn').click(function()
		{	
			console.log('add_order_btn clicked');
			
			var orderby_colnames_var = document.getElementById("orderby_colnames").value;
			var radio_order_value = $("input:radio[name=selected_order]:checked").val();

			console.log(orderby_colnames_var + " | " + radio_order_value);
			
			if(!orderby_colnames_var == null || !orderby_colnames_var == '' )
			{
				var order_cur_value = document.getElementById("order_inqry").innerHTML;
				console.log("order_cur_value - "+order_cur_value);
				
				document.getElementById("orderby_tr").style.display= "block";	

				var tempord=order_cur_value +(orderby_colnames_var + " " + radio_order_value + ", ");
				console.log("tempord - "+tempord);

				if(order_cur_value.match(orderby_colnames_var) == null)
				{
				document.getElementById("order_inqry").innerHTML=tempord;
				}
			}
			else { alert("Please select column name for order."); }
			
		});

    $('#remove_order_btn').click(function()
		{	
			console.log('remove_order_btn clicked');
			document.getElementById("orderby_tr").style.display= "none";	
			document.getElementById("order_inqry").innerHTML="";
			
		});
		
// ----------------------------------------------------------------------------------------------------------------------------------
	// add_having_btn
	
	    $('#add_having_btn').click(function()
		{	
			console.log('add_having_btn clicked');
			
			var having_colnames_var = document.getElementById("having_colnames").value;
			var having_condition_var = document.getElementById("having_condition_select").value;
			var having_input_var = document.getElementById("havinginput").value;

			console.log(having_colnames_var + " | " + having_condition_var + " | " + having_input_var);
			
			if(!having_colnames_var == null || !having_colnames_var == '' && !having_condition_var == null || !having_condition_var == '' && having_input_var== null || !having_input_var == '')
			{	
				var finalhaving = having_colnames_var + " " + having_condition_var + " " + having_input_var ;
				console.log(finalhaving);
				
				document.getElementById("having_tr").style.display= "block";	
				document.getElementById("having_inqry").innerHTML=finalhaving;
			}
			else { alert("Please provide all inputs for having condition."); }
			
		});

    $('#remove_having_btn').click(function()
		{	
			console.log('remove_having_btn clicked');
			document.getElementById("having_tr").style.display= "none";	
			document.getElementById("having_inqry").innerHTML="";
			
		});
		
		
// ----------------------------------------------------------------------------------------------------------------------------------
		
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
			alert("Query copied to clipboard. \nNow you can paste this in any text editor.");
		});	
	});




