/*
	Adam Ip																	2011-06-21
	myGetValue( string )
		
*/
var DebugMode = false;   

/***************************************************************************************/
function myGetValue( sLabel )
{
	try
	{
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
		if( DebugMode ) window.alert( "function myGetValue error code " + err );
	}
}

/***************************************************************************************/
function setDefaultLookupItem( sLabel, oValue )
{
	try
	{
		var out1 = Xrm.Page.getAttribute( sLabel );
		if( out1 != null )
		{
			out1.setValue( oValue );
		}	
	}
	catch( err )
	{
		if( DebugMode ) window.alert( "function SetDefaultLookupItem error code " + err );
	}
}

/****************************************************************************************/
/* Remove leading curly bracket and ending curly bracket 								*/
function removeCurlyBrackets( sString )
{
	try
	{
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
