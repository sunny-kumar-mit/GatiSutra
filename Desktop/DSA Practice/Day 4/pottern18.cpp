#include <iostream>
using namespace std;

int main()
{
// WE have to print 
// A
// BC
// DEF
// GHIF

    int n;
    cin >> n;

    int row = 1;
    int count = 'A';

    while (row <= n)
    {
        int col = 1;
        while (col <= row)
        {
            char ch= count;
            cout<<ch<<" ";
            col++;
            count++;
        }
        cout<<endl;
        row++;
    }
}