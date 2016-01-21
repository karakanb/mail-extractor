# Just a simple REGEX operation with JavaScript, this functions returns an array of e-mail addresses that the text contains.

	function extractEmails (text)
	{
	    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
	}
