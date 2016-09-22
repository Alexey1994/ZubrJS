function parse_print_token(parser)
{
	var expression
	
	console.log('print')

	do
	{
		parser.skip()
		expression=parse_expression(parser)

		parser.body.push({
			type: PRINT,
			data: expression
		})
	}
	while(parser.head===',' && !parser.end_of_data())
}