#include<iostream>
using namespace std;

int main(){

    // We have to Print
    // ABC
    // DEF
    // GHI

    int n;
    cin>>n;
    int count = 'A';
   

    int row=1;
    while(row<=n)
    {
        int col=1;
        while(col<=n)
        {
            char ch=count;
            cout<<ch<<" ";
            count++;
            col++;
        }
        cout<<endl;
        row++;


    }


}