/*
	Adam Ip																	2011-06-21
	myGetValue( string )
		
*/
var DebugModeFmOne = false;   

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

/*** End of lines **********************************************************************/
