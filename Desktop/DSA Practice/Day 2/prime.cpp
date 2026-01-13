#include<iostream>
using namespace std;

int main()
{
    int n;
    cout<<"Enter any no: "<<endl;
    cin>>n;

    int i =2;

    do
    {
       n%i != 0;
    } while (i<n);

    if (n%i != 0)
    {
        cout<<n<<" is a prime"<<endl;
    }
    else
    {
        cout<<n<<" is not prime"<<endl;
        
    }
    
    
















    // while(i<n)
    // {
    //     // if(n%i !=0)
    //     // {
    //     //     i=i+1;
    //     // }
    //     // else{
    //     //     cout<<n<<" is not a prime number."<<endl;
    //     // }
    //     // cout<<n<<" is a prime number ";

    //     if(n%i !=0)
    //     {
    //         i=i+1;
    //     }
    // }





}