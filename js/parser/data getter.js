function DataGetter()
{
	this.get_byte=function(parser)
	{
		parser.head=parser.get_byte(parser.source)
	}


	this.end_of_data=function(parser)
	{
		return parser.end_of_data
	}


	this.skip=function(parser)
	{

	}
}