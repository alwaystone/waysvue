export default class StringUtils{
	static isEmpty(strParams){
		
		return strParams == null || strParams.length === 0 || strParams === '';
	}
}
