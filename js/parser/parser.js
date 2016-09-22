const tokens={
	'print': parse_print_token
}


function parse_function_body(parser)
{
	var token
	var token_func

	while(!parser.end_of_data())
	{
		parser.skip()
		token=parser.get_token()

		token_func=tokens[token]

		if(token_func)
			token_func(parser)
		else
		{
			console.log("error: undefined token "+token)
			return undefined
		}
	}

	return parser.body
}


function parse(source, get_byte, end_of_data)
{
	var parser={
		_source:      source,
		_get_byte:    get_byte,
		_end_of_data: end_of_data,


		get_byte: function()
		{
			this.head=this._get_byte(this._source)
		},


		end_of_data: function()
		{
			return this._end_of_data(this._source)
		},


		skip: function()
		{
			while(this.head===' ' && !this.end_of_data())
				this.get_byte()
		},


		get_token: function()
		{
			var token=""

			if(!is_letter(this.head))
				return undefined

			while((is_letter(this.head) || is_number(this.head)) && !this.end_of_data())
			{
				token=token+this.head
				this.get_byte()
			}

			return token
		},


		head:         get_byte(source),
		body:         []
	}

	return parse_function_body(parser)
}