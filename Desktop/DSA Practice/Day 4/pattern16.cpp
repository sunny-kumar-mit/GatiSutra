#include <iostream>
using namespace std;

int main()
{
// WE have to print 
// ABC
// BCD
// CDE

    int n;
    cin >> n;

    int row = 1;
    int letter = 'A';

    while (row <= n)
    {
        int col = 1;
        while (col <= n)
        {
            char ch = letter + row + col - 2;
            cout<<ch<<" ";
            col++;
        }
        cout<<endl;
        row++;
    }
}