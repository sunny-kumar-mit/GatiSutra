#include<iostream>
using namespace std;

int main()
{

    // We have to print n natural no. using while loop

    int n;
    int num=1;

    cout<<"Enter any no: "<<endl;
    cin>>n;

    while (num<=n)
    {
        cout<<num<<endl;
        num=num+1;
    }
    
}