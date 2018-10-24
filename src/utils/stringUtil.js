export default class stringUtils{
	static isEmpty(strParams){
		
		return strParams == null || strParams.length === 0 || strParams === '';
	}
}
