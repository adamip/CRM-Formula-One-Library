/*
	Adam Ip
	function myGetValue( string )								2011-06-21
	function myGetControl( string )								2012-02-09	
	function mySet()
	function mySetFocus()								    	2012-02-09	
	function Sum4(), Sum5(), Sum6()								2012-02-29
	function mySetValue( sLabel, val1 )							2012-02-29
	function PercentageOf(), CalcPercentageOf()					2012-03-01
	function PercentageOff(), CalcPercentageOff() 
	function mySetValue() enhancement							2012-03-06
	function setValueNumPair()									2012-03-06
	function Sum7()												2012-03-09
	function isDate()											2012-08-24
	function mySetDisabled()									2012-08-24
	function myForceSubmitSetValue()							2012-08-30
	function myGetDisabled()									2012-09-18
	function ShowOneTab()
	function HideOneTab()
	function Sum8()												2013-12-17
	function mySetVisible()										2014-01-22
	function function getMonday() 								2014-04-07
	function function getFriday() 								2014-04-07
	function AxBeqC( A, B, C )									2014-04-14
	function isNormalInteger( i )								2014-04-15 
	function StopFormSaveEvent()								2014-04-18 
	function Sum11()											2014-05-21
	function Sum12()											2014-05-21
	*/
	
var DebugModeFmOne = false;
/* var DebugModeFmOne2 = true;    use to debug a specific function call  */

/***************************************************************************************/
function myGetValue( sLabel )
{
	try
	{
		if( DebugModeFmOne )
			window.alert( "function myGetValue( " + sLabel + " )" );
		/* attempt to retrieve Xrm.Page.getAttribute( sLabel ).getValue() */
		var ret = null;
		if( sLabel != null && sLabel.length > 0 )
		{
			var i = Xrm.Page.getAttribute( sLabel );		
			if ( i != null )
				ret = i.getValue();
		}	
		return ret;
	}
	catch( err )
	{
		window.alert( "function myGetValue error code " + err );
	}
}

/***************************************************************************************/
function mySetValue( sLabel, val1 )
{
	try
	{
		if( DebugModeFmOne )
			window.alert( "function mySetValue( " + sLabel + ", " + val1 + " )" );
		/* attempt to set Xrm.Page.getAttribute( sLabel ).setValue() */
		if( sLabel != null && sLabel.length > 0 )
		{
			var i = Xrm.Page.getAttribute( sLabel );		
			if ( i != null ) 
				i.setValue( val1 );
			else
			{
				if( DebugModeFmOne )
					window.alert( "function mySetValue\nLabel not found : " + sLabel + "\nValue not set : " + val1 );
			}			
		}	
		return;
	}
	catch( err )
	{
		window.alert( "function mySetValue error code " + err );
	}
}

/***************************************************************************************/
function myForceSubmitSetValue( sLabel, val1 )
{
	try
	{
		if( DebugModeFmOne )
			window.alert( "function myForceSubmitSetValue( " + sLabel + ", " + val1 + " )" );
		/* attempt to set Xrm.Page.getAttribute( sLabel ).setValue() */
		if( sLabel != null && sLabel.length > 0 )
		{
			var i = Xrm.Page.getAttribute( sLabel );		
			if ( i != null ) 
			{
				i.setSubmitMode( "always" );
				i.setValue( val1 );
			}
			else
			{
				if( DebugModeFmOne )
					window.alert( "function myForceSubmitSetValue\nLabel not found : " + sLabel + "\nValue not set : " + val1 );
			}			
		}	
		return;
	}
	catch( err )
	{
		window.alert( "function myForceSubmitSetValue error code " + err );
	}
}

/***************************************************************************************
    Reference http://charanmandya.blogspot.com/2012/05/microsoft-dynamics-crm-2011-javascript.html   */
function myGetDisabled( sLabel )
{
	try
	{
		if( DebugModeFmOne )
			window.alert( "function myGetDisabled( " + sLabel + " )" );
		/* attempt to retrieve fieldDisabled = Xrm.Page.ui.controls.get("fieldName").getDisabled(); */
		if( sLabel != null && sLabel.length > 0 )
		{
			var t = Xrm.Page.ui.controls.get( sLabel );		
			if ( t != null ) 
				return t.getDisabled();
			else if( DebugModeFmOne )
				window.alert( "function myGetDisabled\nLabel not found : " + sLabel );
		}	
		return null;
	}
	catch( err )
	{
		window.alert( "function myGetDisabled error code " + err );
	}
}

/***************************************************************************************
    Reference http://usingmscrm.blogspot.com/2012/07/crm2011-set-field-to-read-only.html/   */
function mySetDisabled( sLabel, bool )
{
	try
	{
		if( DebugModeFmOne )
			window.alert( "function mySetDisabled( " + sLabel + ", " + bool + " )" );
		/* attempt to set Xrm.Page.getAttribute("new_fieldname").controls.get(0).setDisabled(true); */
		if( sLabel != null && sLabel.length > 0 )
		{
			var t = Xrm.Page.getAttribute( sLabel );		
			if( t == null ) 
			{
				if( DebugModeFmOne )
					window.alert( "function mySetDisabled\nLabel not found : " + sLabel );
			} 
			else if( bool != true && bool != false )	
			{			
				if( DebugModeFmOne )
					window.alert( "function mySetDisabled\nbool is not a boolean: " + bool.toString());					
			}
			else
				t.controls.get( 0 ).setDisabled( bool );
		}	
		return;
	}
	catch( err )
	{
		window.alert( "function mySetDisabled error code " + err );
	}
}

/***************************************************************************************
    Reference http://stackoverflow.com/questions/16634017/ms-crm-setvisible   */
function mySetVisible( sLabel, bool )
{
	try
	{
		if( DebugModeFmOne )
			window.alert( "function mySetVisible( " + sLabel + ", " + bool + " )" );
		/* attempt to set Xrm.Page.getAttribute("new_fieldname").controls.get(0).setVisible(true); */
		if( sLabel != null && sLabel.length > 0 )
		{
			var t = Xrm.Page.getAttribute( sLabel );		
			if( t == null ) 
			{
				if( DebugModeFmOne )
					window.alert( "function mySetVisible\nLabel not found : " + sLabel );
			} 
			else if( bool != true && bool != false )	
			{			
				if( DebugModeFmOne )
					window.alert( "function mySetVisible\nbool is not a boolean: " + bool.toString());					
			}
			else
				t.controls.get( 0 ).setVisible( bool );
		}	
		return;
	}
	catch( err )
	{
		window.alert( "function mySetVisible error code " + err );
	}
}

/***************************************************************************************/
function myGetControl( sLabel )
{
	try
	{
		if( DebugModeFmOne )
			window.alert( "function myGetControl( " + sLabel + " )" );
		/* attempt to retrieve Xrm.Page.ui.controls.get( sLabel ) */
		var ret = null;
		if( sLabel != null && sLabel.length > 0 )
		{	
			ret = Xrm.Page.ui.controls.get( sLabel );		
		}	
		return ret;
	}
	catch( err )
	{
		window.alert( "function myGetValue error code " + err );
	}
}

/***************************************************************************************/
function mySetFocus( sLabel )
{
	try
	{
		if( DebugModeFmOne )
			window.alert( "function mySetFocus( " + sLabel + " )" );
		/* attempts to setFocus on control Xrm.Page.ui.controls.get( sLabel ) */
		
		var c = null;
		var ret = null;
		if( sLabel != null && sLabel.length > 0 )
		{	
			c = myGetControl( sLabel );		
			if ( c != null )
				ret = c.setFocus();
		}	
		return ret;
	}
	catch( err )
	{
		window.alert( "function myGetValue error code " + err );
	}
}

/***************************************************************************************/
function Sum4( sLabel, val1, val2, val3, val4, out1 )
{
	if( DebugModeFmOne ) 
		window.alert( "function Sum4 " + sLabel + "\n\tval1 " + val1 + "\n+\tval2 " + val2 + "\n+\tval3 " + val3 + "\n+\tval4 " + val4 );
		
	try
	{
		if( out1 != null )
		{ 
			out1.setSubmitMode( "always" );
			out1.setValue( val1 + val2 + val3 + val4 );
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function Sum4 " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
function Sum5( sLabel, val1, val2, val3, val4, val5, out1 )
{
	if( DebugModeFmOne ) 
		window.alert( "function Sum5 " + sLabel + "\n\tval1 " + val1 + "\n+\tval2 " + val2 + "\n+\tval3 " + val3 + "\n+\tval4 " + val4 + "\n+\tval5 " + val5 );

	try
	{
		if( out1 != null )
		{ 
			out1.setSubmitMode( "always" );
			out1.setValue( val1 + val2 + val3 + val4 + val5 );
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function Sum5 " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
function Sum6( sLabel, val1, val2, val3, val4, val5, val6, out1 )
{
	if( DebugModeFmOne ) 
		window.alert( "function Sum6 " + sLabel + "\n\tval1 " + val1 + "\n+\tval2 " + val2 + "\n+\tval3 " + val3 + "\n+\tval4 " + val4 + "\n+\tval5 " + val5 + "\n+\tval6 " + val6 );

	try
	{
		if( out1 != null )
		{ 
			out1.setSubmitMode( "always" );
			out1.setValue( val1 + val2 + val3 + val4 + val5 + val6 );
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function Sum6 " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
function Sum7( sLabel, val1, val2, val3, val4, val5, val6, val7, out1 )
{
	if( DebugModeFmOne ) 
		window.alert( "function Sum7 " + sLabel + "\n\tval1 " + val1 + "\n+\tval2 " + val2 + "\n+\tval3 " + val3 + "\n+\tval4 " + val4 + "\n+\tval5 " + val5 + "\n+\tval6 " + val6 + "\n+\tval7 " + val7 );

	try
	{
		if( out1 != null )
		{ 
			out1.setSubmitMode( "always" );
			out1.setValue( val1 + val2 + val3 + val4 + val5 + val6 + val7 );
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function Sum7 " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
function Sum8( sLabel, val1, val2, val3, val4, val5, val6, val7, val8, out1 )
{
	if( DebugModeFmOne ) 
		window.alert( "function Sum8 " + sLabel + "\n\tval1 " + val1 + "\n+\tval2 " + val2 + "\n+\tval3 " + val3 + "\n+\tval4 " + val4 + "\n+\tval5 " + val5 + "\n+\tval6 " + val6 + "\n+\tval7 " + val7 + "\n+\tval8 " + val8 );

	try
	{
		if( out1 != null )
		{ 
			out1.setSubmitMode( "always" );
			out1.setValue( val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8 );
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function Sum8 " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
function Sum11( sLabel, val01, val02, val03, val04, val05, val06, val07, val08, val09, val10, val11, out1 )
{
	if( DebugModeFmOne ) 
		window.alert( "function Sum11\nLabel " + sLabel + "\n\tval01 " + val01 + "\n+\tval02 " + val02 + "\n+\tval03 " + val03 + "\n+\tval04 " + val04 + "\n+\tval05 " + val05 + "\n+\tval06 " + val06 + "\n+\tval07 " + val07 +  "\n+\tval08 " + val08 + "\n+\tval09 " + val09 + "\n+\tval10 " + val10 + "\n+\tval11 " + val11 );

	try
	{
		if( out1 != null )
		{ 
			out1.setSubmitMode( "always" );
			out1.setValue( val01 + val02 + val03 + val04 + val05 + val06 + val07 + val08 + val09 + val10 + val11 );
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function Sum11 " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
function Sum12( sLabel, val01, val02, val03, val04, val05, val06, val07, val08, val09, val10, val11, val12, out1 )
{
	if( DebugModeFmOne ) 
		window.alert( "function Sum12 " + sLabel + "\n\tval01 " + val01 + "\n+\tval02 " + val02 + "\n+\tval03 " + val03 + "\n+\tval04 " + val04 + "\n+\tval05 " + val05 + "\n+\tval06 " + val06 + "\n+\tval07 " + val07 +  "\n+\tval08 " + val08 + "\n+\tval09 " + val09 + "\n+\tval10 " + val10 + "\n+\tval11 " + val11 + "\n+\tval12 " + val12 );

	try
	{
		if( out1 != null )
		{ 
			out1.setSubmitMode( "always" );
			out1.setValue( val01 + val02 + val03 + val04 + val05 + val06 + val07 + val08 + val09 + val10 + val11  + val12 );
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function Sum12 " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
/* New_value = ListPrice * % / 100.0										   */
function PercentageOf( sLabel, val1, val2, out1 )
{
	if( DebugModeFmOne ) window.alert( "function PercentageOf " + sLabel + "\n\tval1 " + val1 + "\n\tval2 " + val2 );

	try
	{
		if( out1 != null )
		{
			if( val1 != null && val2 != null )
			{ 
				out1.setSubmitMode( "always" );
				out1.setValue( val1 * val2 / 100.0 );
			}	
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function PercentageOf " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
/* % = New_value * 100.0 / ListPrice										   */
function CalcPercentageOf( sLabel, val1, val2, out1 )
{
	if( DebugModeFmOne ) window.alert( "function CalcPercentageOf " + sLabel + "\n\tval1 " + val1 + "\n\tval2 " + val2 );

	try
	{
		if( out1 != null )
		{
			if( val1 != null && val1 != 0.0 && val2 != null )
			{ 
				out1.setSubmitMode( "always" );
				out1.setValue( val2 * 100.0 / val1 );
			}	
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function CalcPercentageOff " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
/* New_value = ListPrice * ( 100 - % ) / 100										   */
function PercentageOff( sLabel, val1, val2, out1 )
{
	if( DebugModeFmOne ) window.alert( "function PercentageOff " + sLabel + "\n\tval1 " + val1 + "\n\tval2 " + val2 );

	try
	{
		if( out1 != null )
		{
			if( val1 != null && val2 != null )
			{ 
				out1.setSubmitMode( "always" );
				out1.setValue( val1 * ( 100.0 - val2 ) / 100.0 );
			}	
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function PercentageOff " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
/* % = 100 - ( New_value * 100 ) / ListPrice										   */
function CalcPercentageOff( sLabel, val1, val2, out1 )
{
	if( DebugModeFmOne ) window.alert( "function CalcPercentageOff " + sLabel + "\n\tval1 " + val1 + "\n\tval2 " + val2 );
	
	try
	{
		if( out1 != null )
		{
			if( val1 != null && val1 != 0.0 && val2 != null )
			{ 
				out1.setSubmitMode( "always" );
				out1.setValue( 100.0 - ( val2 * 100.0 ) / val1 );
			}	
		}	
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function CalcPercentageOff " + sLabel + " error code " + err );
	}
}

/***************************************************************************************/
function setDefaultLookupItem( sLabel, oValue )
{
	try
	{
		if( DebugModeFmOne )
			window.alert( "function setDefaultLookupItem( " + sLabel + ", " + oValue + " )" );
		var out1 = Xrm.Page.getAttribute( sLabel );
		if( out1 != null )
		{
			out1.setValue( oValue );
		}	
	}
	catch( err )
	{
		window.alert( "function SetDefaultLookupItem error code " + err );
	}
}

/****************************************************************************************/
/* Remove leading curly bracket and ending curly bracket 								*/
function removeCurlyBrackets( sString )
{
	try
	{
		if( DebugModeFmOne )
			window.alert( "function removeCurlyBrackets( " + sString + " )" );
		if( sString != null && typeof sString === 'string' && sString.length > 0 )
		{
			if( sString.charAt(0) == '{' )
				sString = sString.substr(1);
			var j = sString.length - 1;	
			if( sString.charAt( j ) == "}" )
				sString = sString.substr( 0, j );
		}
	}
	catch( err )
	{
		window.alert( "function removeCurlyBrackets error code " + err );
	}
	return sString;
}

/***************************************************************************************/
/* 	if sLabel1 is not null, then sLabel2 must be filled in 			
	Parameter is_ZeroAllowed : boolean, is numeric zero allowed 				 
	Parameter is_NegativeAllowed : boolean, is negative number allowed  				   */
function setValueNumPair( sLabel1, sLabel2, sPrompt, is_ZeroAllowed, is_NegativeAllowed )
{ 
	try
	{	
		if( DebugModeFmOne ) window.alert( "function setValueNumPair\n\nsLabel1 " + sLabel1 + "\nsLabel2 " + sLabel2 + "\nsPrompt " + sPrompt + "\nis_ZeroAllowed " + is_ZeroAllowed + "\nis_NegativeAllowed " + is_NegativeAllowed );
			
		var Label1Value = myGetValue( sLabel1 );
		if( DebugModeFmOne ) window.alert( "function setValueNumPair\n\nLabel1Value " + Label1Value );

		if( Label1Value != null && Label1Value != 0 )
		{
			var Label2Value = myGetValue( sLabel2 );
			var sQuest = "";	
			var HasBeenInput = false;	
			if( DebugModeFmOne ) window.alert( "function setValueNumPair\n\nLabel2Value " + Label2Value );
		
			/* isNaN( Label2Value ) == false && IsNumeric( Label2Value ) == true */
			while( Label2Value == null || 
				( is_ZeroAllowed == false && Label2Value == 0 ) ||
				( is_NegativeAllowed == false && Label2Value < 0 ))
			{	
				if( sPrompt == null || sPrompt == '' )
				{
					if( sQuest == "" )
					{
						sQuest = "Please enter a ";
						if( is_ZeroAllowed == false )
							sQuest = sQuest + "non-zero ";
						if( is_NegativeAllowed == false )
							sQuest = sQuest + "positive ";
						sQuest = sQuest + "number";
					}
				}
				else
					sQuest = sPrompt;
				Label2Value = prompt( sQuest, "" );	
				HasBeenInput = true;
				if( DebugModeFmOne ) window.alert( "function setValueNumPair\ninside the WHILE loop\nLabel2Value " + Label2Value );
			}
			if( HasBeenInput )
				mySetValue( sLabel2, parseFloat( Label2Value, 10 )); 
		}
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function setValueNumPair error code " + err );
	}
	return;
}

/***************************************************************************************/
/* Expanded and Show a tab																		   */
function ShowOneTab( show_me )
{
	if( DebugModeFmOne ) window.alert( "function ShowOneTab\n\tshow_me = " + show_me ); 
	try
	{
		if( show_me != null )
		{
			Xrm.Page.ui.tabs.get( show_me ).setVisible( true );
			Xrm.Page.ui.tabs.get( show_me ).setDisplayState( "expanded" );
		}
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function ShowOneTab error code = " + err );
	}
}

/***************************************************************************************/
/* Collapse and Hide a tab																		   */
function HideOneTab( hide_me )
{
	if( DebugModeFmOne ) window.alert( "function HideOneTab\n\thide_me = " + hide_me ); 
	try
	{
		if( hide_me != null )
		{
			Xrm.Page.ui.tabs.get( hide_me ).setVisible( false );
			Xrm.Page.ui.tabs.get( hide_me ).setDisplayState( "collapsed" );
		}
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function HideOneTab error code = " + err );
	}
}

/***************************************************************************************/
/* Show or hide a section in any tab   												   */
function ShowHideOneTabSection( Section_name, show_or_hide )
{
	if( DebugModeFmOne ) 
		window.alert( "function ShowHideOneTabSection\nSection_name\t" + Section_name + "\nshow_or_hide\t" + show_or_hide );
	try
	{
		if( Section_name != null )
		{
			var oTabs = Xrm.Page.ui.tabs.get();
			if( oTabs != null )
			{
				for( var i in oTabs )
				{
					var oTab = oTabs[ i ];
					if( oTab != null )
					{	
						var oSection = oTab.sections.get( Section_name );
						if( oSection != null )
						{	
							if( DebugModeFmOne ) 
								alert( "Here  i = " + i + "\noTab = \t" + oTab + "\noSection = \t" + oSection );
							oSection.setVisible( show_or_hide );   
						}	
					}
				}			
			}	
		}
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function ShowHideOneTabSection error code = " + err );
	}
}

/***************************************************************************************/
/* Show or hide a control
function ShowHideControl( sControl, show_or_hide )
{
	if( DebugModeFmOne ) 
		window.alert( "function ShowHideControl\nsControl\t" + sControl + "\nshow_or_hide\t" + show_or_hide );
	try
	{
		if( sControl != null )
		{
			var oControl = Xrm.Page.ui.controls.get( sControl );   
			if( oControl != null )
			{				
				oControl.setVisible( show_or_hide );   
			}	 
		}
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function ShowHideControl error code = " + err );
	}
}

/***************************************************************************************/
function my_alert( msg )
{
	if( !confirm( msg ))
		my_exit();
}

/***************************************************************************************/
function my_exit()
{
	throw( 'Script Exit' );
}

/***************************************************************************************/
function SayHelloWorld()
{
	try
	{
		window.alert( "function SayHelloWorld" );
	}	
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function SayHelloWorld error code " + err );
	}
	return;
}

/***************************************************************************************
  Reference source http://www.codetoad.com/forum/17_10053.asp/							*/
function isDate( dateStr )
{
	var ret = true; // date initialized as valid
	try
	{
		if( dateStr == null )
			ret = false;
		else
		{		
			var datePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
			var matchArray = dateStr.match( datePattern ); // is the format ok?

			// window.window.alert("Please enter date as either mm/dd/yyyy or mm-dd-yyyy.");
			if ( matchArray == null ) 
				ret = false;
			else
			{
				var iMonth = matchArray[1]; // parse date into variables
				var iDay = matchArray[3];
				var iYear = matchArray[5];
				
				// check iMonth range.  window.alert("iMonth must be between 1 and 12.");
				if( iMonth < 1 || iMonth > 12 ) 
					ret = false;
				// check iDay range.  window.alert("iDay must be between 1 and 31.");
				else if( iDay < 1 || iDay > 31 ) 
					ret = false;
				// check number of iDay in month.  window.alert( "iMonth " + iMonth + " doesn`t have 31 days!")
				else if(( iMonth == 4 || iMonth == 6 || iMonth == 9 || iMonth == 11 ) && iDay == 31 )				
					ret = false;
				// check number of iDay in February.  window.alert( "February " + iYear + " doesn`t have " + iDay + " days!" );  
				else if( iMonth == 2 ) 
				{ 
					var isleap = ( iYear % 4 == 0 && ( iYear % 100 != 0 || iYear % 400 == 0 ))?true:false;
					if( iDay > 29 || ( isleap == false && iDay == 29 )) 
						ret = false;
				}
			}			
		}	
	}	
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function isDate error code " + err );
	}
	return ret;
}

/***************************************************************************************
	How that works:
	Number(str): Convert str to a number; the number may well have a fractional portion, or may be NaN.
	~~: Truncate the number (chops off any fractional portion).
	String(...): Converts the result back into a normal decimal string. For really big numbers, 
		this will go to scientific notation, which may break this approach. (I don't quite know where 
		the split is, the details are in the specification, but for whole numbers I believe it's at 
		the point you've exceeded 21 digits [by which time the number has become very imprecise, as 
		IEEE-754 double-precision numbers only have roughly 15 digits of precision..)
	... === str: Compares that to the original string.
	n >= 0: Check that it's positive.

	If you want to disallow 0, just change >= 0 to > 0 
	http://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer
*/
function isNormalInteger( str ) 
{
	try
	{
		var n = ~~Number( str );
		return String( n ) === str && n >= 0;
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function isNormalInteger error code " + err );
	}
}

/**************************************************************************************
	Returns Monday as a string in format "yyyy/MM/dd" 
*/
function getMonday( in1 ) 
{
	try
	{
		var d;
	
		if( in1 )
			d = new Date( in1 );
		else
			d = new Date();
		
		/* The day of the week, Sunday is 0, Monday is 1, and so on. */ 
		var day = d.getDay();
		
		// adjust when day is Sunday
		var diff = d.getDate() - day + ( day == 0 ? -6 : 1 ); 
		var out1 = new Date( d.setDate( diff )); 
		return out1.format( "yyyy-MM-dd" );
	}	
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function getMonday error code " + err );
	}
}

/**************************************************************************************
	Returns Friday as a Date object
*/
function getFriday( in1 ) 
{
	try
	{
		var d;
	
		if( in1 )
			d = new Date( in1 );
		else
			d = new Date();
		
		/* The day of the week, Sunday is 0, Monday is 1, and so on. */ 
		var day = d.getDay();
		
		// adjust when day is Sunday
		var diff = d.getDate() - day + ( day == 0 ? -6 : 1 ); 
		// 4 means adjust a Monday's Day object to a Friday's Date object
		var out1 = new Date( d.setDate( diff + 4 )); 
		return out1;
	}	
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function getFriday error code " + err );
	}
}

/**************************************************************************************
	Input A, B, C are labels
	Returns false is successful
	Returns true if labels A, B, C all don't exist
*/
function AxBeqC( A, B, C )
{
	var ret = false;
	try
	{
		if( DebugModeFmOne ) 
			window.alert( "function AxBeqC()\nA = " + A + "\nB = " + B + "\nC = " + C );
		var oA = Xrm.Page.getAttribute( A );
		var oB = Xrm.Page.getAttribute( B );
		var oC = Xrm.Page.getAttribute( C );
		if( oA != null && oB != null && oC != null )
		{		
			var vA = oA.getValue();	
			var vB = oB.getValue();
			if( DebugModeFmOne ) 
				window.alert( "function AxBeqC()\nA " + A + "\nB " + B + "\nC " + C + "\nvA = " + vA + "\nvB = " + vB );
			/* if either vA or vB is null, then set vC to null */
			if( vA != null && vB != null )
				oC.setValue( vA * vB );	
			else	
				oC.setValue( null );	
		}
		else if( oA == null && oB == null && oC == null )
		{
			if( DebugModeFmOne ) 
				window.alert( "function AxBeqC()\nAll labels are invalid.\nA = " + A + "\nB = " + B + "\nC = " + C + "\nvA = " + vA + "\nvB = " + vB );
			ret = true;
		}
		else
		{
			var msg = "Please contact administrator.\n\n";
			if( oA == null )
				msg = msg + A + " is not a valid data field name.\n" 
			if( oB == null )
				msg = msg + B + " is not a valid data field name.\n" 
			if( oC == null )
				msg = msg + C + " is not a valid data field name.\n" 
			window.alert( "function AxBeqC()\n\n" + msg );
		}
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function AxBeqC() error code " + err );
	}
	return ret;
}


/**************************************************************************************
	Reference https://community.dynamics.com/crm/b/crmmitchmilam/archive/2011/05/06/crm-2011-canceling-the-save-operation.aspx
*/
function StopFormSaveEvent( executionObj )
{
	try
	{
		executionObj.getEventArgs().preventDefault();
	}
	catch( err )
	{
		if( DebugModeFmOne ) window.alert( "function StopFormSaveEvent error code " + err );
	}
}

/*** End of lines **********************************************************************/
