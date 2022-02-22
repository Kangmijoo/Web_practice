var validation = function(form){
	var $$ = form;
	var isError = false;
	var message = "";
	var message_el = "";
	var real_type = ""; // hidden 값 처리 할려고 추가
	var valid_type = "";
	
	$('input.essential, select.essential, textarea.essential',$$).each(function(){
		var result = validateElement.isValid(this);
		if(result.isError)
		{
			real_type = result.real_type;
			message = result.message;
			isError = result.isError;
			message_el = result.type == "choice" ? " 선택이 필요합니다" : " 입력이 필요합니다"; // choice = radio
			valid_type = result.validType;
			return false;
		}
	});

	if(isError)
	{
		if( valid_type == "" || valid_type == undefined )
		{
			alert(message+message_el);
		}
		else
		{
			alert(message);
		}

		if(real_type != "hidden")
			errorElement.focus();
	}
	return isError;
	
}; // close function()

var errorElement = null;

var validateElement = {
	stripWhitespace : function(str){
		return str.replace(/\s/g,''); // 공백제거
	},

	checkMaxLength : function(value, validValue){
		if( value > validValue )
		{
			return true;
		}
		else
			return false;
	},

	checkMinLength : function(value, validValue){
		if( value < validValue )
		{
			return true;
		}
		else
			return false;
	},

	checkEmail : function(value){
		var pattern = /([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_-]+)/;
		if (!pattern.test(value))
		{
			return true;
		}
		else
			return false;
	},
	
	checkAlpha : function(value){
		var pattern = /(^[a-zA-Z]+$)/; 
		if (!pattern.test(value)) 
			return true;
		else
			return false;
	},

	checkNumeric : function(value){
		var pattern = /(^[0-9]+$)/; 
		if (!pattern.test(value)) 
			return true;
		else
			return false;
	},
	
	checkAlphaNumeric : function(value){
		var pattern = /^[a-zA-Z0-9]+$/;
		if (!pattern.test(value)) 
			return true;
		else
			return false;
	},
	
	checkNumericUnderLine : function(value){
		var pattern = /^[0-9\_]+$/;
		if (!pattern.test(value)) 
			return true;
		else
			return false;
	},
	
	checkHangul : function(value){
		var pattern = /([^가-힣\x20])/i; 
		if( pattern.test(value) )
			return true;
		else 
			return false;
	},


	isValid:function(element){
		
		var result = {
			isError : false,
			message : "",
			type    : "input",
			real_type : "",
			validType : ""
		};
		var isValid = true;
		var $element = $(element);
		var id = $element.attr('id');
		var name = $element.attr('name');
		var value = this.stripWhitespace( $element.val() );
		var title = $element.attr('alt');
		var validType = $element.attr('validType');
		var validValue = $element.attr('validValue');

		var type = $element[0].type.toLowerCase();
		result.real_type = type;
		result.validType = validType;
		errorElement = $element;
		
		switch(type)
		{
			case 'hidden':
			case 'text':
			case 'textarea':
			case 'password':
				if ( value.length == 0 )
				{ 
					result.isError = true; result.message = title;
				}
				else
				{
					if( validType != "" )
					{
						if( validType == "minlength" )
						{
							result.isError = this.checkMinLength(value,validValue);
							if( result.isError )
							{
								result.message = title + " " + validValue + " 자 이상 입력하세요";
							}
						}
						else if (validType == "maxlength")
						{
							result.isError = this.checkMaxLength(value,validValue);
							if( result.isError )
							{
								result.message = title + " " + validValue + " 자 이하로 입력하세요";
							}
						}
						else if (validType == "email")
						{
							result.isError = this.checkEmail(value);
							if( result.isError )
							{
								result.message = title + " 형식이 아닙니다"; // title을 이메일 << 로 입력한다
							}
						}
						else if (validType == "alpha")
						{
							result.isError = this.checkAlpha(value);
							if( result.isError )
							{
								result.message = title + " 영문자만 입력가능합니다";
							}
						}
						else if (validType == "alphaNumeric")
						{
							result.isError = this.checkAlphaNumeric(value);
							if( result.isError )
							{
								result.message = title + " 영문자와 숫자만 입력가능합니다";
							}
						}
						else if (validType == "numericUnderLine")
						{
							result.isError = this.checkNumericUnderLine(value);
							if( result.isError )
							{
								result.message = title + " 숫자와 _ 만 입력가능합니다";
							}
						}
						else if (validType == "hangul")
						{
							result.isError = this.checkHangul(value);
							if( result.isError )
							{
								result.message = title + " 한글만 입력가능합니다";
							}
						}
						else if (validType == "numeric")
						{
							result.isError = this.checkNumeric(value);
							if( result.isError )
							{
								result.message = title + " 숫자만 입력가능합니다";
							}
						}
					}
				}
				break;
			case 'select-one':
			case 'select-multiple':
				if( !value ){ result.isError = true; result.message = title; result.type="choice";}
				break;
			case 'checkbox':
			case 'radio':
				if( $('input[name="' + name + '"]:checked').length == 0 )
				{ 
					result.isError = true; result.message = title; result.type="choice";
				}
				break;
		  } // close switch()

		return result;

	} // close validateElement.isValid()
}; // close validateElement object
