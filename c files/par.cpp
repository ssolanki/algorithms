#include <iostream>
#include <cstdio>
#include <algorithm>
#include <string>
using namespace std;


string getBalancedString(string str) {
	int count = 0, prefix=0;
	for(int i=0; i<str.size(); i++) {
		if(str[i] == '(') {
			count++;
		} else {
			count--;
		}
		if(count<0) {
			prefix++;
			count = 0;
		}
	}
	if(prefix) {
		string temp(prefix, '(');
		str = temp + str;
		cout << "s";
		cout << temp;
		cout << "s";

	}
	if(count) {
		string temp(count, ')');
		str += temp;
	}	
	return str;
}
int main () {

string str = "()))()(";
cout << getBalancedString(str);
return 0;
}