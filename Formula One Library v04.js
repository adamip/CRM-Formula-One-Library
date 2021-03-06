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

/*** End of lines **********************************************************************/
