module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  if(arr[arr.length-1]>=6)return false;
  let left = 0;
  let right = 0;
  let left2 = 0;
  let right2 = 0;
  let left3 = 0;
  let right3 = 0;
  let check = 1;
  for(let i=0; i<arr.length; i++){
  	if(arr[i]=='(' && arr[i+1]!=']' && (arr[i+1]!='|'  && arr[i+2]!=')'))left++;
  	if(arr[i]=='(' && (arr[i+1]==']' || (arr[i+1]=='|'  && arr[i+2]==')')))return false;
  	if(arr[i]==')' && right<left)right++;
  	if(arr[i]=='[')left2++;
  	if(arr[i]==']' && right2<left2)right2++;
  	if(arr[i]=='|')left3++;
  	if(arr[i]=='|' && right3<left3)right3++;
  }
  if(check){
  let left = 0;
  let right = 0;
  let left2 = 0;
  let right2 = 0;
  let left3 = 0;
  let right3 = 0;
  for(let i=0; i<arr.length; i++){
  	if(arr[i]=='(')left++;
  	if(arr[i]==')')right++;
  	if(arr[i]=='[')left2++;
  	if(arr[i]==']')right2++;
  	if(arr[i]=='|')left3++;
  	if(arr[i]=='|')right3++;
  }
  check=1;
  if((left+left2+left3)!=(right+right2+right3))
  	return false;
}
  return ((left+left2+left3)==(right+right2+right3));
}
