/*
	Adam Ip
	function myGetValue( string )											2011-06-21
	function myGetControl( string )											2012-02-09	
	function mySetFocus( sLabel )										    2012-02-09	
	function Sum4(), Sum5(), Sum6()										    2012-02-29
	function mySetValue( sLabel, val1 )									    2012-02-29
	function PercentageOf(), CalcPercentageOf()								2012-03-01
	function PercentageOff(), CalcPercentageOff() 
	function mySetValue() enhancement										2012-03-06
	function setValueNumPair()												2012-03-06
	function Sum7()														    2012-03-09
*/
var DebugModeFmOne = false;
/* var DebugModeFmOne2 = true;   use to debug a specific function call  */

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
		/* attempt to setFocus on control Xrm.Page.ui.controls.get( sLabel ) */
		
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
	if( DebugModeFmOne ) window.alert( "function Sum4 " + sLabel + "\n\tval1 " + val1 + "\n+\tval2 " + val2 + "\n+\tval3 " + val3 + "\n+\tval4 " + val4 );
		
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
	if( DebugModeFmOne ) window.alert( "function Sum5 " + sLabel + "\n\tval1 " + val1 + "\n+\tval2 " + val2 + "\n+\tval3 " + val3 + "\n+\tval4 " + val4 + "\n+\tval5 " + val5 );

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
	if( DebugModeFmOne ) window.alert( "function Sum6 " + sLabel + "\n\tval1 " + val1 + "\n+\tval2 " + val2 + "\n+\tval3 " + val3 + "\n+\tval4 " + val4 + "\n+\tval5 " + val5 + "\n+\tval6 " + val6 );

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
	if( DebugModeFmOne ) window.alert( "function Sum7 " + sLabel + "\n\tval1 " + val1 + "\n+\tval2 " + val2 + "\n+\tval3 " + val3 + "\n+\tval4 " + val4 + "\n+\tval5 " + val5 + "\n+\tval6 " + val6 + "\n+\tval7 " + val7 );

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
	/* if( DebugModeFmOne ) window.alert( "function ShowOneTab" ); */
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
	/* if( DebugModeFmOne ) window.alert( "function HideOneTab" ); */
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
/* Show or hide a section in a tab   												   */
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
				for ( var i in oTabs )
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
/* Show or hide a section in a tab   												   */
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
		if( DebugModeOppII ) window.alert( "function SayHelloWorld error code " + err );
	}
	return;
}

/*** End of lines **********************************************************************/
