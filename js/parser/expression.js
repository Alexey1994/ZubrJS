function parse_expression(parser)
{
	function parse_operand()
	{
		function parse_number()
		{
			var number=""

			do
			{
				number=number+parser.head
				parser.get_byte()
			}
			while(is_number(parser.head) && !parser.end_of_data())

			expression.push({
				operand_type: NUMBER,
				operand_data: parseInt(number, 10)
			})
		}


		if(is_letter(parser.head))
			expression.push({
				operand_type: VARIABLE,
				operand_data: parser.get_token()
			})

		else if(is_number(parser.head))
			parse_number()
	}


	var expression=[]

	parser.skip()
	parse_operand()

	console.log(expression)
	
	return expression
}