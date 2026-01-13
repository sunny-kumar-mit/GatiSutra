#include<iostream>
using namespace std;

int main()
{
    // We have to print sum of N natural Number using While loop

    int n;
    cout<<"Enter any number :"<<endl;
    cin>>n;
   
   int sum=0, i=1;

   while(i<=n)
   {
    sum=sum+i;
    i=i+1;
   }
   cout<<sum;

}