#include <iostream>
using namespace std;

int main()
{
    // WE have to print
    // A
    // BB
    // CCC

    int n;
    cin >> n;

    int row = 1;
    int letter = 'A';

    while (row <= n)
    {
        int col = 1;
        while (col <= row)
        {
            char ch = letter + row - 1;
            cout << ch << " ";
            col++;
        }
        cout << endl;
        row++;
    }
}