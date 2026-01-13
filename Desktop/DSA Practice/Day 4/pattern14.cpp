#include<iostream>
using namespace std;

int main(){

    // We have to Print
    // ABC
    // ABC
    // ABC

    int n;
    cin>>n;
    int cap='A';

    int row=1;
    while(row<=n)
    {
        int col=1;
        while(col<=n)
        {
            char ch=cap+col-1;
            cout<<ch<<" ";
            col++;
        }
        cout<<endl;
        row++;


    }


}