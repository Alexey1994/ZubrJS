var code={
	text:     '  print ( 1 + 2 ) + 3 print b print 10',
	position: 0
}


function end_of_data(code)
{
	if(code.position>code.text.length)
		return true

	return false
}


function get_byte(code)
{
	byte=code.text[code.position]
	code.position++

	return byte
}


parse(code, get_byte, end_of_data)