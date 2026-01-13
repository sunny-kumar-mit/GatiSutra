#include <iostream>
using namespace std;

int main()
{
    // We have to print
    // AAA
    // BBB
    // CCC

    int n=3;
    int cap='A';
    int row=1;

    while(row<=n)
    {
        int col=1;
        while(col<=3)
        {
            char temp=cap+row-1;
            cout<<temp<<" ";
            col++;
            
        }
        cout<<endl;
        row++;
    }

}